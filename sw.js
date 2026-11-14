// Service Worker (wird beim Build erzeugt). Hält alle Spieldateien offline bereit.
const VERSION = '24-1efb7d3-202611141811';
const FILES = ["./","./assets/index-6vjzfrMq.css","./assets/index-DMH9NvrZ.js","./assets/park.exr-v_B6Jj-5.js","./assets/worker-BWjDx6YZ.js","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./icon.svg","./index.html","./licenses/three.txt","./manifest.webmanifest"];
const CACHE = `nb3d-${VERSION}`;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // cache: 'reload' umgeht den Browser-Zwischenspeicher, damit wirklich die neue Version kommt
    await cache.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key.startsWith('nb3d-') && key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (req.mode === 'navigate') {
      const page = await cache.match(new URL('./index.html', self.registration.scope).href);
      if (page) return page;
    }
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      return await fetch(req);
    } catch (e) {
      return new Response('offline', { status: 503, statusText: 'offline' });
    }
  })());
});
