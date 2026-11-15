(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function $A(){const n=new Map,e=new Map;return{on(t,i){return n.has(t)||n.set(t,new Set),n.get(t).add(i),()=>n.get(t)?.delete(i)},emit(t,i){const s=n.get(t);if(s)for(const r of[...s])try{r(i)}catch(o){console.error(`Fehler bei Event ${t}`,o)}},handle(t,i){return e.set(t,i),()=>e.delete(t)},async request(t,i){const s=e.get(t);if(!s)throw new Error(`Niemand beantwortet ${t}`);return s(i)}}}function JA({onFrame:n,getLimit:e}){let t=!1,i=0,s=0;const r=[];let o=0;function a(c){if(!t)return;s=requestAnimationFrame(a);const l=e(),d=i?c-i:16.7;if(l>0){const f=1e3/l;if(d<f-1.5)return}for(i=c,r.push(d),o+=d;o>2e3&&r.length>1;)o-=r.shift();n(Math.min(d,100)/1e3,c)}return{start(){t||(t=!0,i=0,s=requestAnimationFrame(a))},stop(){t=!1,cancelAnimationFrame(s)},fps(){let c=0,l=0;for(let d=r.length-1;d>=0&&c<1e3;d--)c+=r[d],l++;return c>0?l*1e3/c:0},lastFrameMs(){return r.length?r[r.length-1]:0}}}function ZA(n){const e=t=>t.split(".").reduce((i,s)=>i&&typeof i=="object"?i[s]:void 0,n);return function(i,s){const r=e(i);return r===void 0?i:typeof r!="string"||!s?r:r.replace(/\{(\w+)\}/g,(o,a)=>a in s?String(s[a]):o)}}function ve(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const Df="nb3d.settings",jA="nb3d.techtest.settings",xu={quality:"maximum",fpsLimit:120,debugOpen:!1,cameraHint:!0};function ep(){try{const n=JSON.parse(localStorage.getItem(jA)||"{}");return{...xu,...n,...JSON.parse(localStorage.getItem(Df)||"{}")}}catch{return{...xu}}}function tp(n){try{localStorage.setItem(Df,JSON.stringify(n))}catch{}}const np="sandbox",ip="mode.sandbox.name",sp="mode.sandbox.desc",rp={core:!0,render:!0,camera:!0,save:!0,ui:!0,region:!0,build:!0,economy:!0,population:!0,energy:!0,globe:!1,politics:!0,environment:!0,events:!1,tech:!1,diplomacy:!1,conflict:!1,scenarios:!1,monetization:!0,ads:!0},op={monthSeconds:20,speeds:[0,1,2,4],startYear:1745,startMonth:0,startSpeed:1},ap={autosaveMonths:3},lp={pauseOnEvent:!0},cp={gameOver:!1,freeSystemChange:!0},up={adapter:"none"},dp={adapter:"none"},fp={start:{money:2e3,population:45,resources:{food:40,wood:30,goods:0,coal:0}},tax:{low:.06,normal:.12,high:.2},taxSens:{happiness:70,business:120,workers:60,religion:40},wage:7,goodsPrice:4,price:{food:.5,wood:1,coal:2},keep:{food:80,wood:40,goods:20,coal:40},upkeepMul:1,consume:{food:30,wood:6,goods:3},marketPop:150,population:{workerShare:.45,growth:.035,immigration:1,minHappy:35,leaveBelow:20,shrinkHunger:.15,shrinkCrowd:.2,faithPer100:.5,faithMinPop:30},happiness:{wellFed:5,hunger:45,crowding:20,cold:8,faith:6,jobless:15,joblessFree:.25,noGoods:5,debt:8,shortage:10,smog:.4,smogMax:8},subsidy:{perPerson:.6},holidays:{output:.92},strike:{taxes:.9,output:.9},groups:{toHappiness:.3,popPer:{market:150,chapel:150,tavern:120},business:{base:52,industry:5,noIndustry:-4,energyOk:4,shortage:14,debt:15},workers:{base:50,subsidy:12,hunger:40,jobless:35,joblessFree:.25,fullJobs:6,holidays:6},religion:{base:50,holidays:14}},milestones:{dorf:{population:90,happiness:45,buildings:{market:1},reward:300},handwerk:{population:200,happiness:45,buildings:{workshop:1,chapel:1,tavern:1},noRedGroup:!0,reward:600},industrie:{population:800,happiness:45,buildings:{factory:1,steamengine:1},noRedGroup:!0,reward:1500}},tradeScale:.3},Lf={id:np,labelKey:ip,descKey:sp,modules:rp,time:op,save:ap,events:lp,rules:cp,monetization:up,ads:dp,values:fp},hp="challenge",Ap="mode.challenge.name",pp="mode.challenge.desc",mp={core:!0,render:!0,camera:!0,save:!0,ui:!0,region:!0,build:!0,economy:!0,population:!0,energy:!0,globe:!1,politics:!0,environment:!0,events:!1,tech:!1,diplomacy:!1,conflict:!1,scenarios:!1,monetization:!0,ads:!0},gp={monthSeconds:20,speeds:[0,1,2,4],startYear:1745,startMonth:0,startSpeed:1},Ep={autosaveMonths:3},vp={pauseOnEvent:!1},_p={gameOver:!0,freeSystemChange:!1},xp={adapter:"none"},Sp={adapter:"none"},Cp={start:{money:900,population:45,resources:{food:40,wood:30,goods:0,coal:0}},tax:{low:.06,normal:.12,high:.2},taxSens:{happiness:70,business:120,workers:60,religion:40},wage:6,goodsPrice:4,price:{food:.5,wood:1,coal:2},keep:{food:80,wood:40,goods:20,coal:40},upkeepMul:1.3,consume:{food:30,wood:6,goods:3},marketPop:150,population:{workerShare:.45,growth:.032,immigration:1,minHappy:35,leaveBelow:20,shrinkHunger:.15,shrinkCrowd:.2,faithPer100:.5,faithMinPop:30},happiness:{wellFed:5,hunger:45,crowding:20,cold:8,faith:6,jobless:15,joblessFree:.25,noGoods:5,debt:8,shortage:10,smog:.4,smogMax:8},subsidy:{perPerson:.6},holidays:{output:.92},strike:{taxes:.9,output:.9},groups:{toHappiness:.3,popPer:{market:150,chapel:150,tavern:120},business:{base:52,industry:5,noIndustry:-4,energyOk:4,shortage:14,debt:15},workers:{base:50,subsidy:12,hunger:40,jobless:35,joblessFree:.25,fullJobs:6,holidays:6},religion:{base:50,holidays:14}},milestones:{dorf:{population:90,happiness:45,buildings:{market:1},reward:200},handwerk:{population:200,happiness:45,buildings:{workshop:1,chapel:1,tavern:1},noRedGroup:!0,reward:400},industrie:{population:800,happiness:45,buildings:{factory:1,steamengine:1},noRedGroup:!0,reward:1e3}},tradeScale:.3},yp={id:hp,labelKey:Ap,descKey:pp,modules:mp,time:gp,save:Ep,events:vp,rules:_p,monetization:xp,ads:Sp,values:Cp},ra={sandbox:Lf,challenge:yp},Mp=["sandbox","challenge"],cr=n=>ra[n]||Lf;function Ff(n){const e=String(n);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619)>>>0;return t>>>0}function Ip(n){let e=n.s>>>0;const t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return{next:t,int:(i,s)=>i+Math.floor(t()*(s-i+1)),chance:i=>t()<i,pick:i=>i[Math.floor(t()*i.length)],save:()=>({s:e})}}const bp=[{id:"housing",labelKey:"cat.housing"},{id:"food",labelKey:"cat.food"},{id:"resources",labelKey:"cat.resources"},{id:"industry",labelKey:"cat.industry"},{id:"energy",labelKey:"cat.energy"},{id:"community",labelKey:"cat.community"},{id:"road",labelKey:"cat.road"},{id:"demolish",labelKey:"cat.demolish"}],wp={cost:8},Bp=[{id:"hut",category:"housing",labelKey:"bld.hut.name",descKey:"bld.hut.desc",size:[1,1],cost:60,upkeep:.5,housing:8,jobs:0,needsRoad:!0,look:{shape:"hut",h:4,color:"#b89a6b",roof:"#8a5a3a"}},{id:"house",category:"housing",labelKey:"bld.house.name",descKey:"bld.house.desc",size:[1,1],cost:140,upkeep:1,housing:16,needsRoad:!0,look:{shape:"house",h:6,color:"#e6d9bd",roof:"#9a4a35"}},{id:"field",category:"food",labelKey:"bld.field.name",descKey:"bld.field.desc",size:[2,2],cost:80,upkeep:1,jobs:4,produce:{food:9},site:{kinds:[0],fertility:!0},needsRoad:!0,look:{shape:"field",h:.3,color:"#c9b458"}},{id:"pasture",category:"food",labelKey:"bld.pasture.name",descKey:"bld.pasture.desc",size:[2,2],cost:100,upkeep:1,jobs:3,produce:{food:6,goods:.5},site:{kinds:[0]},needsRoad:!0,look:{shape:"pasture",h:1,color:"#7fa25a"}},{id:"fishery",category:"food",labelKey:"bld.fishery.name",descKey:"bld.fishery.desc",size:[1,1],cost:90,upkeep:1,jobs:3,produce:{food:5},site:{kinds:[0,3],adjacent:"water"},needsRoad:!0,look:{shape:"fishery",h:4,color:"#8c7355",roof:"#5c4a38"}},{id:"woodcutter",category:"resources",labelKey:"bld.woodcutter.name",descKey:"bld.woodcutter.desc",size:[1,1],cost:70,upkeep:1,jobs:3,produce:{wood:8},site:{kinds:[0,1],nearForest:3},needsRoad:!0,look:{shape:"lodge",h:4.5,color:"#7a5a3a",roof:"#4b3a2a"}},{id:"coalmine",category:"resources",labelKey:"bld.coalmine.name",descKey:"bld.coalmine.desc",size:[2,2],cost:260,upkeep:3,jobs:8,produce:{coal:6},energyDemand:2,emissions:2,site:{kinds:[3,0],nearKind:{kind:3,count:2}},needsRoad:!0,requires:"handwerk",look:{shape:"mine",h:7,color:"#55504b",roof:"#33302d"}},{id:"workshop",category:"industry",labelKey:"bld.workshop.name",descKey:"bld.workshop.desc",size:[2,2],cost:300,upkeep:3,jobs:8,consume:{wood:3},produce:{goods:6},energyDemand:3,emissions:.5,needsRoad:!0,look:{shape:"workshop",h:7,color:"#cdbd9a",roof:"#6b3a2e",chimney:!0}},{id:"factory",category:"industry",labelKey:"bld.factory.name",descKey:"bld.factory.desc",size:[3,2],cost:900,upkeep:8,jobs:20,consume:{coal:4,wood:2},produce:{goods:22},energyDemand:8,emissions:4,needsRoad:!0,requires:"handwerk",look:{shape:"factory",h:11,color:"#a8553d",roof:"#444",chimney:!0}},{id:"watermill",category:"energy",labelKey:"bld.watermill.name",descKey:"bld.watermill.desc",size:[2,2],cost:220,upkeep:2,jobs:2,produce:{food:3},energyProduce:10,site:{kinds:[0,3],adjacent:"water"},needsRoad:!0,look:{shape:"watermill",h:7,color:"#c9b48f",roof:"#6b4a35",wheel:!0}},{id:"windmill",category:"energy",labelKey:"bld.windmill.name",descKey:"bld.windmill.desc",size:[2,2],cost:180,upkeep:2,jobs:2,produce:{food:2},energyProduce:6,site:{kinds:[0,3]},needsRoad:!0,look:{shape:"windmill",h:12,color:"#e8dcc2",roof:"#5a4636",blades:!0}},{id:"steamengine",category:"energy",labelKey:"bld.steamengine.name",descKey:"bld.steamengine.desc",size:[2,2],cost:700,upkeep:6,jobs:6,consume:{coal:3},energyProduce:26,emissions:3,needsRoad:!0,requires:"handwerk",look:{shape:"steam",h:9,color:"#6f6a66",roof:"#2f2c2a",chimney:!0}},{id:"market",category:"community",labelKey:"bld.market.name",descKey:"bld.market.desc",size:[2,2],cost:200,upkeep:2,jobs:3,tradeIncome:.04,happiness:3,radius:10,groupBoost:{business:8},needsRoad:!0,look:{shape:"market",h:4,color:"#d9c9a0",roof:"#b5533c"}},{id:"chapel",category:"community",labelKey:"bld.chapel.name",descKey:"bld.chapel.desc",size:[1,2],cost:150,upkeep:1.5,jobs:1,happiness:2,radius:9,groupBoost:{religion:10},needsRoad:!0,look:{shape:"chapel",h:9,color:"#e9e2d3",roof:"#4a5a6b",tower:!0}},{id:"tavern",category:"community",labelKey:"bld.tavern.name",descKey:"bld.tavern.desc",size:[2,1],cost:130,upkeep:1.5,jobs:2,happiness:4,radius:7,groupBoost:{workers:6},needsRoad:!0,look:{shape:"tavern",h:6.5,color:"#d4bc92",roof:"#7a4630"}},{id:"townhall",category:"community",labelKey:"bld.townhall.name",descKey:"bld.townhall.desc",size:[2,2],cost:0,upkeep:0,jobs:2,housing:20,unique:!0,buildable:!1,needsRoad:!1,look:{shape:"hall",h:9,color:"#efe6d2",roof:"#3f5a6a",tower:!0}}],gi={categories:bp,road:wp,buildings:Bp},vi=Object.fromEntries(gi.buildings.map(n=>[n.id,n])),Oi=n=>({ok:!1,reason:n}),Tp={ok:!0,reason:null};function qc(n,e=0){const[t,i]=n.size;return e&1?[i,t]:[t,i]}function ur(n,e,t,i=0){const[s,r]=qc(n,i),o=[];for(let a=0;a<r;a++)for(let c=0;c<s;c++)o.push([e+c,t+a]);return o}function Xc(n,e){let[t,i]=[Math.round(n[0]),Math.round(n[1])];const[s,r]=[Math.round(e[0]),Math.round(e[1])],o=[[t,i]],a=Math.sign(s-t),c=Math.sign(r-i);for(;t!==s;)t+=a,o.push([t,i]);for(;i!==r;)i+=c,o.push([t,i]);return o}const Pf=(n,e,t)=>e>=0&&t>=0&&e<n&&t<n;function ja(n,e,t,i,s,r,o,a){const[c,l]=qc(e,s);let d=0;for(let f=i-r;f<i+l+r;f++)for(let u=t-r;u<t+c+r;u++){if(!Pf(n.size,u,f))continue;const h=u>=t&&u<t+c&&f>=i&&f<i+l;a&&h||n.kind[f*n.size+u]===o&&d++}return d}function Rp(n,e,t,i,s){const r=e.site;if(!r)return!0;const o=ur(e,t,i,s);return!(r.fertility&&o.reduce((c,[l,d])=>c+n.fertility[d*n.size+l],0)/o.length<25||r.adjacent==="water"&&ja(n,e,t,i,s,1,2,!0)===0||r.nearForest&&ja(n,e,t,i,s,r.nearForest,1,!1)===0||r.nearKind&&ja(n,e,t,i,s,2,r.nearKind.kind,!1)<r.nearKind.count)}function Yc(n,e,t,i,s=0){if(!e)return Oi("unknown");if(e.requires&&n.flags?.milestones?.[e.requires]==null)return Oi("locked");const r=n.region?.terrain;if(!r||![t,i,s].every(Number.isInteger))return Oi("bounds");const o=ur(e,t,i,s);for(const[l,d]of o)if(!Pf(r.size,l,d))return Oi("bounds");for(const[l,d]of o)if(n.region.grid[d*r.size+l]!==0)return Oi("blocked");const a=e.site?.kinds||[0,1];for(const[l,d]of o)if(!a.includes(r.kind[d*r.size+l]))return Oi("terrain");if(!Rp(r,e,t,i,s))return Oi("site");const c=n.economy?.money??0;return c<0||c<e.cost?Oi("money"):Tp}function Uf(n,e){n.kind[e]===1&&(n.kind[e]=0,n.fertility[e]=Math.max(n.fertility[e],55))}function Dp(n,e,t,i,s,r,o){const a=vi[e],c=n.region.terrain,l={id:n.build.nextId++,type:e,x:t,z:i,rot:s,month:r,paid:o,active:0,why:null};for(const[d,f]of ur(a,t,i,s)){const u=f*c.size+d;n.region.grid[u]=l.id,Uf(c,u)}return n.build.buildings.push(l),l}function Lp(n,e){const t=n.region.terrain;for(const[i,s]of e){const r=s*t.size+i;n.region.grid[r]=-1,Uf(t,r),n.build.roads.push([i,s])}}const Fp=[32,32],Pp=8,Up=[[[-8,0],[8,0]],[[0,-8],[0,8]]],Np=[{type:"townhall",dx:-2,dz:-3,rot:0},{type:"hut",dx:1,dz:1,rot:0},{type:"hut",dx:1,dz:2,rot:0},{type:"hut",dx:1,dz:3,rot:0},{type:"hut",dx:-1,dz:1,rot:0},{type:"hut",dx:-1,dz:2,rot:0},{type:"hut",dx:-1,dz:3,rot:0},{type:"house",dx:1,dz:-1,rot:0},{type:"house",dx:2,dz:-1,rot:0},{type:"field",dx:1,dz:-4,rot:0},{type:"field",dx:1,dz:-6,rot:0},{type:"field",dx:-2,dz:-6,rot:0},{type:"woodcutter",dx:7,dz:-1,rot:0}],So={origin:Fp,clearRadius:Pp,roads:Up,buildings:Np},Op=64,Qp=12,_a=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]].map(([n,e])=>{const t=Math.hypot(n,e);return[n/t,e/t]}),cc=n=>n*n*(3-2*n),el=(n,e)=>({n:e,a:Array.from({length:(e+1)*(e+1)},()=>n.next())});function tl(n,e,t){const i=e*n.n,s=t*n.n,r=Math.min(n.n-1,Math.floor(i)),o=Math.min(n.n-1,Math.floor(s)),a=cc(i-r),c=cc(s-o),l=n.n+1,d=n.a[o*l+r],f=n.a[o*l+r+1],u=n.a[(o+1)*l+r],h=n.a[(o+1)*l+r+1];return(d+(f-d)*a)*(1-c)+(u+(h-u)*a)*c}const nl=n=>{const e=[el(n,4),el(n,9),el(n,19)];return(t,i)=>.5*tl(e[0],t,i)+.32*tl(e[1],t,i)+.18*tl(e[2],t,i)};function Su(n,e,t=12){const i=new Array(e*e).fill(t);let s=[];for(let r=0;r<e*e;r++)n[r]&&(i[r]=0,s.push(r));for(;s.length;){const r=[];for(const o of s){const a=o%e,c=(o-a)/e;for(const[l,d]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=a+l,u=c+d;if(f<0||u<0||f>=e||u>=e)continue;const h=u*e+f;i[h]>i[o]+1&&(i[h]=i[o]+1,r.push(h))}}s=r}return i}function kp(n,e,t,i,s){const r=n.int(0,2),o=_a[n.pick([2,4,6])],a=n.next()*6.28,c=n.next(),l=new Array(e*e).fill(0);for(let d=0;d<e;d++)for(let f=0;f<e;f++){const u=f-t,h=d-t;if(Math.abs(u)<=s+1&&Math.abs(h)<=s+1)continue;const g=u*o[0]+h*o[1],E=-u*o[1]+h*o[0],p=i(f/e,d/e);let m=!1;if(r===0)m=g>12+(p-.5)*3+Math.sin(E*.25+a);else if(r===1){const C=14+2*Math.sin(E*.2+a)+(p-.5)*2.4;m=Math.abs(g-C)<1.5+c*.8}else{const C=(g-16)/6.2,I=E/5.2;m=C*C+I*I<1+(p-.5)*.5}m&&(l[d*e+f]=1)}return{mask:l,wdirIndex:_a.indexOf(o)}}function Gp(n,e,t){const i=e/2,s=nl(n),r=nl(n),o=nl(n),{mask:a,wdirIndex:c}=kp(n,e,i,s,t),l=(S,b)=>Math.min(Math.abs(S-b),8-Math.abs(S-b)),d=[2,3,4,5,6].filter(S=>l(S,c)>1),f=[],u=d.length?n.pick(d):4,h=n.pick(d.length?d:[4]);f.push({d:_a[u],dist:19,r:4.8+n.next()*1.6}),f.push({d:_a[h],dist:23,r:3+n.next()*1.2});const g=Su(a,e),E=a.map(S=>1-S),p=Su(E,e),m=new Array(e*e).fill(0),C=new Array(e*e).fill(0),I=new Array(e*e).fill(0);for(let S=0;S<e;S++)for(let b=0;b<e;b++){const y=S*e+b,_=b-i,M=S-i,F=Math.hypot(_,M),D=b/e,N=S/e,k=s(D,N),V=r(D,N),L=o(D,N);if(a[y]){m[y]=2,C[y]=-(.5+.7*Math.min(p[y],4)),I[y]=0;continue}let Q=0;for(const Ae of f){const q=i+Ae.d[0]*Ae.dist,de=i+Ae.d[1]*Ae.dist;Q+=Math.exp(-(((b-q)**2+(S-de)**2)/(Ae.r*Ae.r)))}const W=cc(Math.min(1,Math.max(0,(F-8)/6)));let H=(.5+1.5*k)*(.4+.6*W)+W*(Q*(13+6*L)+(Q>.05?(k-.5)*5:0));H=Math.min(H,.25+.55*g[y]),C[y]=Math.round(Math.max(.1,H)*10)/10;const J=Math.abs(_)<=t&&Math.abs(M)<=t,z=b-(i+11),K=S-(i-3),Z=o(D,N)*.75+.9*Math.exp(-((z*z+K*K)/25))+(g[y]<=2?-.2:0);C[y]>=4.5?m[y]=3:!J&&Z>.5&&(m[y]=1);let le=36+52*V+(g[y]<=4?10:0);m[y]===1?le=28+10*V:m[y]===3?le=8+10*V:F<=11&&(le=Math.max(le,70+25*V)),I[y]=Math.max(0,Math.min(100,Math.round(le)))}return{size:e,cell:Qp,kind:m,height:C,fertility:I}}function Hp(n,e){const t=Ip({s:Ff(`${n}:welt`)}),i=Op,s=Gp(t,i,So.clearRadius),r={region:{terrain:s,heightmap:null,grid:new Array(i*i).fill(0)},build:{buildings:[],roads:[],nextId:1,undo:[]},flags:{milestones:{}},economy:{money:1/0}},[o,a]=So.origin;for(const[c,l]of So.roads){const f=Xc([o+c[0],a+c[1]],[o+l[0],a+l[1]]).filter(([u,h])=>r.region.grid[h*i+u]===0&&s.kind[h*i+u]!==2);Lp(r,f)}for(const c of So.buildings){const l=vi[c.type],d=o+c.dx,f=a+c.dz;Yc(r,l,d,f,c.rot).ok&&Dp(r,c.type,d,f,c.rot,0,0)}return{region:r.region,build:r.build}}function zp(n,e){return(n.from==null||e>=n.from)&&(n.until==null||e<n.until)}function Vp(n,e){const t=n.modifiers.filter(i=>i.id!==e.id);t.push({from:null,until:null,labelArgs:{},...e}),n.modifiers=t}function Nf(n,e){let t=0,i=1;for(const s of e)s.op==="add"?t+=s.value:s.op==="mul"&&(i*=s.value);return(n+t)*i}function Of(n,e,t){return n.modifiers.filter(i=>i.target===e&&zp(i,t))}function Kc(n,e,t,i=n.time.month){const s=Nf(t,Of(n,e,i));return n.derived[e]={base:t,value:s},s}function Wp(n,e,t=n.time.month){const i=n.derived?.[e],s=Of(n,e,t),r=i?i.base:0,o=s.filter(g=>g.op==="add"),a=s.filter(g=>g.op==="mul"),c=o.reduce((g,E)=>g+E.value,0),l=a.reduce((g,E)=>g*E.value,1),d=[];for(const g of o)d.push(Cu(g,g.value));const f=r+c,u=f*l-f,h=a.reduce((g,E)=>g+Math.log(E.value),0);for(const g of a){const E=h!==0?Math.log(g.value)/h:1/a.length;d.push(Cu(g,u*E))}return{target:e,base:r,value:Nf(r,s),parts:d}}function Cu(n,e){return{id:n.id,source:n.source,labelKey:n.labelKey,labelArgs:n.labelArgs||{},op:n.op,value:n.value,effect:e}}const zt=(n,e,t)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):e,Pr=n=>Math.round(n*10)/10,uc=n=>Math.round(n*100)/100,Qf=n=>Math.round(n*1e3)/1e3,ei=(n,e,t=0)=>Math.abs(e)>1e-9?n/e:t;function pi(n,e,{id:t,source:i,target:s,op:r="add",value:o,labelKey:a,labelArgs:c}){const l=r==="mul"?1:0;if(!Number.isFinite(o)||Math.abs(o-l)<1e-6){n.modifiers=n.modifiers.filter(d=>d.id!==t);return}Vp(n,{id:t,source:i,target:s,op:r,value:Qf(o),from:e,until:null,labelKey:a,labelArgs:c||{}})}function qp(n,e){const t=e.config.values.happiness;let i=0;for(const s of n.build.buildings)i+=(vi[s.type]?.emissions||0)*(s.active||0);n.environment.emissions=uc(zt(i,0,1e6)),pi(n,e.month,{id:"environment.smog",source:"environment",target:"population.happiness",op:"add",value:-Math.min(t.smogMax,n.environment.emissions*t.smog),labelKey:"mod.environment.smog"})}function Xp(n,e,t){if(!e.needsRoad)return!0;const i=n.region.terrain.size,s=n.region.grid;for(const[r,o]of ur(e,t.x,t.z,t.rot))for(const[a,c]of[[1,0],[-1,0],[0,1],[0,-1]]){const l=r+a,d=o+c;if(l>=0&&d>=0&&l<i&&d<i&&s[d*i+l]===-1)return!0}return!1}function Ha(n){const e={housing:0,jobs:0,counts:{},roadOk:new Map};for(const t of n.build.buildings){const i=vi[t.type];if(!i)continue;const s=Xp(n,i,t);e.roadOk.set(t.id,s),s&&(e.housing+=i.housing||0,e.jobs+=i.jobs||0,e.counts[t.type]=(e.counts[t.type]||0)+1)}return e}const kf=(n,e)=>e.jobs>0?zt(n.population.workers/e.jobs,0,1):1;function Yp(n,e,t){if(!e.site?.fertility)return 1;const i=n.region.terrain,s=ur(e,t.x,t.z,t.rot),r=s.reduce((o,[a,c])=>o+i.fertility[c*i.size+a],0)/s.length;return zt(r/70,0,1.3)}function Gf(n,e){const t=n.population.total/100,i=e.consume;return{food:t*i.food,wood:t*i.wood,goods:t*i.goods,coal:0}}function yu(n,e){const[t,i]=qc(n,e.rot);return[e.x+(t-1)/2,e.z+(i-1)/2]}function Kp(n,e,t,i){const s=n.build.buildings.filter(a=>a.type===t&&e.roadOk.get(a.id)).map(a=>yu(vi[t],a));if(!s.length)return 0;let r=0,o=0;for(const a of n.build.buildings){const c=vi[a.type];if(!c?.housing||!e.roadOk.get(a.id))continue;const[l,d]=yu(c,a);r+=c.housing,s.some(([f,u])=>Math.max(Math.abs(f-l),Math.abs(u-d))<=i)&&(o+=c.housing)}return ei(o,r,0)}function $p(n,e,t=!0){const i=Ha(n),s=kf(n,i),r=zt(n.energy.ratio??1,0,1),o=zt(Kc(n,"economy.output",1),.3,1.5),a=[];for(const h of n.build.buildings){const g=vi[h.type];if(!g)continue;const E=i.roadOk.get(h.id),p=g.jobs>0?s:1,m=g.energyDemand>0?r:1;a.push({b:h,def:g,road:E,staffF:p,energyF:m,inputF:1,yieldF:Yp(n,g,h),base:E?p*m:0})}const c={},l={};for(const h of a)if(h.def.consume)for(const[g,E]of Object.entries(h.def.consume))l[g]=(l[g]||0)+E*h.base;else if(h.def.produce)for(const[g,E]of Object.entries(h.def.produce))c[g]=(c[g]||0)+E*h.base*h.yieldF*o;const d=Gf(n,e.values),f=n.economy.resources,u={};for(const h of Object.keys(l))u[h]=zt(ei(Math.max(0,(f[h]||0)+(c[h]||0)-(d[h]||0)),l[h],1),0,1);for(const h of a){if(h.def.consume&&(h.inputF=Math.min(...Object.keys(h.def.consume).map(E=>u[E]))),!t)continue;const g=Qf(zt(h.base*h.inputF,0,1));if(h.b.active=g,h.b.why=null,!h.road)h.b.why="noRoad";else if(g<.999){const E=Math.min(h.staffF,h.energyF,h.inputF);h.b.why=E===h.inputF?"noInput":E===h.energyF?"noEnergy":"noWorkers"}}return{items:a,cs:i,staff:s,outputMul:o}}const Jp=["market","chapel","tavern"];function il(n,e){const t=e.config.values,i=t.population,s=t.happiness,r=e.month,o=n.population,a=n.economy,c=Ha(n);o.housing=c.housing,o.jobs=c.jobs,o.workers=Math.round(o.total*i.workerShare),o.employed=Math.min(o.workers,o.jobs);const l=Gf(n,t),d=p=>(a.resources[p]||0)+(a.flow[p]?.prod||0),f=o.total/100*i.faithPer100;o.needs={food:zt(ei(d("food"),l.food,1),0,1),housing:o.total>0?zt(ei(o.housing,o.total,1),0,1):1,energy:zt(n.energy.ratio??1,0,1),faith:o.total<i.faithMinPop?1:zt(ei(c.counts.chapel||0,f,1),0,1)};const u=zt(ei(d("wood"),l.wood,1),0,1),h=o.workers>0?1-o.employed/o.workers:0,g=(p,m,C)=>pi(n,r,{id:`population.${p}`,source:"population",target:"population.happiness",op:"add",value:m,labelKey:`mod.population.${p}`,labelArgs:C});g("wellFed",o.needs.food>=.999?s.wellFed:0),g("hunger",-s.hunger*(1-o.needs.food)),g("crowding",-s.crowding*(1-o.needs.housing)),g("cold",-s.cold*(1-u)),g("faith",-s.faith*(1-o.needs.faith)),g("jobless",-s.jobless*Math.max(0,h-s.joblessFree)/(1-s.joblessFree));const E=n.flags.milestones?.handwerk!=null;g("noGoods",E&&(a.resources.goods||0)<1?-s.noGoods:0);for(const p of Jp){const m=vi[p];g(p,m.happiness*Kp(n,c,p,m.radius))}return o.happiness=Pr(zt(Kc(n,"population.happiness",50,r),0,100)),c}function za(n){const e=n.startMonth+n.month;return{year:n.startYear+Math.floor(e/12),monthOfYear:e%12}}function Zp(n,e){const t=e.config.values,i=e.month,s=n.economy;pi(n,i,{id:"economy.tax",source:"economy",target:"population.happiness",op:"add",value:(t.tax.normal-s.taxRate)*t.taxSens.happiness,labelKey:"mod.economy.tax"}),pi(n,i,{id:"economy.debt",source:"economy",target:"population.happiness",op:"add",value:s.money<0?-t.happiness.debt:0,labelKey:"mod.economy.debt"})}function jp(n,e){$p(n,e)}function em(n,e){const t=Ha(n),i=kf(n,t);let s=0,r=0;const o=[];for(const c of n.build.buildings){const l=vi[c.type];!l||!t.roadOk.get(c.id)||(l.energyProduce&&c.active>0&&(s+=l.energyProduce*c.active,o.push(c.id)),l.energyDemand&&(r+=l.energyDemand*(l.jobs>0?i:1)))}const a=n.energy;a.production=uc(s),a.demand=uc(r),a.ratio=r>1e-9?zt(ei(s,r,1),0,1):1,a.plants=o,pi(n,e.month,{id:"energy.shortage",source:"energy",target:"population.happiness",op:"add",value:r>1e-9?-e.config.values.happiness.shortage*(1-a.ratio):0,labelKey:"mod.energy.shortage"})}const tm=["business","workers","religion"];function nm(n){const e={};for(const t of n.build.buildings)t.active>.5&&(e[t.type]=(e[t.type]||0)+1);return e}function sl(n,e,t,i,s){const r=vi[t].groupBoost?.[i]||0,o=Math.max(1,ei(n.population.total,e.groups.popPer[t],1));return r*(2*zt(ei(s.counts[t]||0,o,0),0,1)-1)}const im=(n,e,t)=>n>=0?e:t;function sm(n,e,t,i,s){const r=e.groups,o=n.economy,a=n.population,c=e.tax.normal-o.taxRate,l=n.politics.policies||{},d=[],f=(u,h,g,E)=>d.push({name:u,value:h,why:`why.${t}.${im(h,g,E)}`});if(t==="business"){const u=r.business;f("tax",c*e.taxSens.business,"taxLow","taxHigh"),f("market",sl(n,e,"market","business",i),"market","noMarket");const h=(s.workshop||0)+(s.factory||0);f("industry",h>0?u.industry:u.noIndustry,"industry","noIndustry"),n.energy.demand>0&&f("energy",n.energy.ratio>=.95?u.energyOk:-u.shortage*(1-n.energy.ratio),"energy","noEnergy"),f("debt",o.money<0?-u.debt:0,"debt","debt")}else if(t==="workers"){const u=r.workers,h=a.workers>0?1-a.employed/a.workers:0;f("tax",c*e.taxSens.workers,"taxLow","taxHigh"),f("subsidy",l.foodSubsidy?u.subsidy:0,"subsidy","subsidy"),f("hunger",-u.hunger*(1-a.needs.food),"hunger","hunger"),f("jobless",-u.jobless*Math.max(0,h-u.joblessFree)/(1-u.joblessFree),"jobless","jobless"),f("fullJobs",h<.05&&a.workers>0?u.fullJobs:0,"jobs","jobs"),f("tavern",sl(n,e,"tavern","workers",i),"tavern","noTavern"),f("holidays",l.holidays?u.holidays:0,"holidays","holidays")}else f("tax",c*e.taxSens.religion,"taxLow","taxHigh"),f("chapel",sl(n,e,"chapel","religion",i),"chapel","noChapel"),f("holidays",l.holidays?r.religion.holidays:0,"holidays","holidays");return d}function rm(n,e,t){const i=e.population;return n==="business"?25+5*((t.market||0)+(t.workshop||0)+(t.factory||0)):n==="workers"?40+i.total/10:20+6*(t.chapel||0)}function om(n,e){const t=e.config.values,i=e.month,s=Ha(n),r=nm(n),o=n.politics;let a=0,c=0,l=0;for(const u of tm){const h=sm(n,t,u,s,r);for(const m of h)pi(n,i,{id:`politics.${u}.${m.name}`,source:"politics",target:`politics.groups.${u}.satisfaction`,op:"add",value:m.value,labelKey:`mod.politics.${u}.${m.name}`});const g=zt(Kc(n,`politics.groups.${u}.satisfaction`,t.groups[u].base,i),0,100),E=h.filter(m=>Math.abs(m.value)>=.5).sort((m,C)=>Math.abs(C.value)-Math.abs(m.value)).slice(0,3).map(m=>m.why),p=zt(rm(u,n,r),0,100);o.groups[u]={influence:Pr(p),satisfaction:Pr(g),why:E},a+=p,c+=p*(g-50),l+=p*g}o.legitimacy=Pr(zt(ei(l,a,50),0,100)),o.unrest=Pr(zt((50-o.legitimacy)*2,0,100));const d=o.groups,f=o.policies||{};pi(n,i,{id:"politics.groups",source:"politics",target:"population.happiness",op:"add",value:ei(c,a,0)*t.groups.toHappiness,labelKey:"mod.politics.groups"}),pi(n,i,{id:"politics.holidaysOutput",source:"politics",target:"economy.output",op:"mul",value:f.holidays?t.holidays.output:1,labelKey:"mod.politics.holidaysOutput"}),pi(n,i,{id:"politics.strikeOutput",source:"politics",target:"economy.output",op:"mul",value:d.workers.satisfaction<35?t.strike.output:1,labelKey:"mod.politics.strikeOutput"}),pi(n,i,{id:"politics.strikeTaxes",source:"politics",target:"economy.taxes",op:"mul",value:d.business.satisfaction<35?t.strike.taxes:1,labelKey:"mod.politics.strikeTaxes"})}function am(n,e){const t={month:n.time.month,config:e},i=s=>e.modules?.[s]!==!1;return i("economy")&&Zp(n,t),i("population")&&il(n,t),i("economy")&&jp(n,e),i("environment")&&qp(n,t),i("energy")&&em(n,t),i("population")&&il(n,t),i("politics")&&om(n,t),i("population")&&il(n,t),n}const Es=2,lm=()=>({food:0,wood:0,goods:0,coal:0}),cm=()=>({food:{prod:0,cons:0},wood:{prod:0,cons:0},goods:{prod:0,cons:0},coal:{prod:0,cons:0}}),rl=n=>({influence:n,satisfaction:50,why:[]});function $c(n,e,t="1970-01-01T00:00:00.000Z"){const i=Ff(e),s=n.values||{},r=Hp(e),o=s.start?.population??0,a={schemaVersion:Es,meta:{gameId:`g${i.toString(36)}${Date.parse(t).toString(36)}`,name:"",mode:n.id,seed:String(e),country:"DEU",lang:"de",createdAt:t},rng:{s:i},time:{month:0,startYear:n.time.startYear,startMonth:n.time.startMonth},modifiers:[],derived:{},flags:{milestones:{dorf:null,handwerk:null,industrie:null},industryPreview:!1,rewarded:{}},region:r.region,build:r.build,economy:{money:s.start?.money??0,taxRate:s.tax?.normal??0,resources:{...lm(),...s.start?.resources||{}},history:[],last:{taxes:0,sales:0,upkeep:0,subsidy:0,income:0,expenses:0,net:0},flow:cm(),acc:{taxes:0,sales:0,upkeep:0,subsidy:0,pop0:o}},population:{total:o,happiness:50,needs:{food:1,housing:1,energy:1,faith:1},housing:0,jobs:0,workers:0,employed:0,values:{freedomOrder:0,marketState:0,traditionProgress:0,nationalInternational:0}},energy:{production:0,demand:0,ratio:1,plants:[],grid:null,trade:[]},globe:{country:"DEU",countries:{},clouds:null},politics:{system:{headOfState:null,headOfGovernment:null,parliament:null,electoral:null,parties:null,structure:null,judiciary:null,rights:{press:null,assembly:null,religion:null,speech:null},directDemocracy:null,economicOrder:null},groups:{military:null,business:rl(25),workers:rl(40),religion:rl(25),civilRights:null,regions:null},policies:{foodSubsidy:!1,holidays:!1},legitimacy:50,unrest:0,elections:{next:null,history:[]},reform:null,upheaval:null},environment:{dayTime:null,season:null,weather:null,emissions:0},events:{queue:[],active:null,history:[]},tech:{era:"agrar",researched:[],current:null,progress:0},diplomacy:{relations:{},treaties:[],trade:[]},conflict:{tensions:{},sanctions:[],alliances:[],defenseBudget:0},scenarios:{active:null,goals:[],editor:null},monetization:{adapter:n.monetization?.adapter||"none",owned:[]},ads:{adapter:n.ads?.adapter||"none",consent:null,lastShown:null}};return n.values?.start?am(a,n):a}function Hf(n,e){for(const[t,i]of Object.entries(e))t in n?i&&typeof i=="object"&&!Array.isArray(i)&&n[t]&&typeof n[t]=="object"&&!Array.isArray(n[t])&&Hf(n[t],i):n[t]=structuredClone(i);return n}function zf(n,e="",t=[]){if(typeof n=="number")Number.isFinite(n)||t.push(e||"(wurzel)");else if(n&&typeof n=="object")for(const[i,s]of Object.entries(n))zf(s,e?`${e}.${i}`:i,t);return t}const um={loading:"Spiel lädt …",noWebgl:"Dieses Gerät unterstützt kein WebGL 2.",error:"Ein Fehler ist aufgetreten. „Bericht kopieren“ hilft bei der Suche."},dm={ok:"OK",cancel:"Abbrechen",yes:"ja",no:"nein",off:"aus",none:"keine",show:"zeigen",hide:"verstecken",on:"an"},fm={months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthYear:"{month} {year}"},hm={sandbox:{name:"Sandbox",desc:"Entspannt bauen. Bei Ereignissen hält das Spiel an und fragt dich. Kein Verlieren."},challenge:{name:"Herausforderung",desc:"Fordernd. Die Zeit läuft bei Ereignissen weiter, Fehler haben Folgen, du kannst abgewählt werden."}},Am={maximum:"Maximum",hoch:"Hoch",mittel:"Mittel",niedrig:"Niedrig"},pm={menu:"Menü",speed:"Spieltempo",pause:"Pause",speedN:"Tempo {n}-fach",camera:"Kamera",camIso:"Iso",camFree:"Frei"},mm={back:"Zurück",close:"Schließen",title:{main:"Menü",saves:"Spielstände",new:"Neues Spiel",settings:"Einstellungen",privacy:"Datenschutz",imprint:"Impressum",licenses:"Lizenzen",about:"Über das Spiel"},saves:"Spielstände",savesSub:"Speichern, Laden, als Datei sichern",newGame:"Neues Spiel",newGameSub:"Sandbox oder Herausforderung",settings:"Einstellungen",settingsSub:"Grafik, Bildrate, Kamera",install:"App installieren",installSub:"Auf den Startbildschirm legen",privacy:"Datenschutz",imprint:"Impressum",licenses:"Lizenzen",about:"Über das Spiel",start:"Starten",newGameHint:"Du startest im Jahr 1745 als Dorf in Deutschland. Das Spiel läuft in Monaten, 20 Sekunden sind ein Monat.",newGameConfirmTitle:"Neues Spiel starten?",newGameConfirm:"Das laufende Spiel wird ersetzt. Der automatische Spielstand wird beim nächsten Speichern überschrieben. Willst du es vorher auf einem Speicherplatz sichern, brich ab und gehe zu „Spielstände“.",newGameStarted:"Neues Spiel gestartet: {mode}",camera:"Kamera wechseln",cameraSub:"Iso (fester Blick) oder Frei (neigen und drehen)"},gm={quality:"Grafikstufe",qualityHint:"Höher = schöner, aber mehr Akku und Wärme. Das Spiel lädt dafür kurz neu.",qualityConfirm:"Das Spiel wird gespeichert und lädt mit der neuen Grafikstufe neu.",limit:"Bildraten-Grenze (Bilder pro Sekunde)",limitHint:"Weniger Bilder pro Sekunde schonen Akku und halten das Handy kühler.",camera:"Kamera",cameraHint:"Iso: feste Schrägsicht wie auf einem Bauplan. Frei: neigen und drehen, wie du willst.",debug:"Mess-Anzeige (fps oben links)"},Em={intro:"Spielstände bleiben nur auf diesem Gerät. Mit „Datei“ kannst du einen Stand sichern oder auf ein anderes Gerät bringen.",slot:{auto:"Automatisch",slot1:"Platz 1",slot2:"Platz 2",slot3:"Platz 3"},empty:"leer",savedAt:"gespeichert {when}",save:"Speichern",load:"Laden",export:"Datei",delete:"Löschen",saved:"Gespeichert auf {slot}",loaded:"{slot} geladen",exported:"Datei wird heruntergeladen",imported:"Datei auf {slot} gelegt. Mit „Laden“ spielst du sie.",overwriteTitle:"Überschreiben?",overwrite:"Auf {slot} liegt schon ein Spielstand. Ersetzen?",loadTitle:"Spielstand laden?",loadConfirm:"Das laufende Spiel wird ersetzt. Nicht gespeicherter Fortschritt geht verloren.",deleteTitle:"Löschen?",deleteConfirm:"{slot} wirklich löschen? Das geht nicht rückgängig.",import:"Spielstand aus Datei holen",importTitle:"Datei holen",importWhere:"Auf welchen Platz soll der Spielstand?",migrated:"Alter Spielstand umgewandelt (Version {from} → {to}). Eine Sicherung wurde vorher angelegt.",persistYes:"✓ Dein Gerät hält die Spielstände dauerhaft fest.",persistNo:"Hinweis: Dein Gerät könnte die Spielstände bei Speichermangel löschen. Sichere wichtige Stände zusätzlich als Datei.",persistUnknown:"Ob das Gerät die Spielstände dauerhaft hält, wird beim ersten Speichern geprüft."},vm={error:{unknown:"Speichern oder Laden hat nicht geklappt.",slot:"Diesen Speicherplatz gibt es nicht.",noGame:"Es läuft gerade kein Spiel.",empty:"Dieser Speicherplatz ist leer.",newer:"Dieser Spielstand ist von einer neueren Spielversion. Bitte erst das Spiel aktualisieren.",migration:"Dieser alte Spielstand kann nicht umgewandelt werden.",notJson:"Das ist keine Spielstand-Datei.",format:"Die Datei ist kein gültiger Spielstand."}},_m={title:"Neue Version da",text:"Es gibt eine neue Version des Spiels. Jetzt aktualisieren? Dein Spiel wird vorher automatisch gespeichert.",now:"Jetzt aktualisieren",later:"Später",saving:"Speichere und aktualisiere …",laterHint:"Die neue Version kommt beim nächsten Start."},xm={offlineReady:"Fertig: Das Spiel läuft jetzt auch ohne Internet."},Sm={copy:"Bericht kopieren",bench:"Messung {s} s",benchShort:"Messung läuft",copied:"Bericht kopiert – jetzt im Chat einfügen",copyFailed:"Kopieren hat nicht geklappt",benchRunning:"Messung läuft {s} Sekunden – bitte nicht berühren",benchDone:"Messung fertig: {avg} fps im Schnitt, langsamste 1 %: {low} fps",callsLine:"Zeichenaufrufe: {calls} (max. 150) · {tri} Tsd. Dreiecke · {ms} ms",reportTitle:"NB3D – Bericht",date:"Datum",device:"Gerät",screen:"Bildschirm",pixelFactor:"Pixelfaktor",quality:"Grafikstufe",limit:"Grenze",now:"Jetzt",callsShort:"Zeichenaufrufe",triangles:"Dreiecke",scene:"Kulisse (Gebäude/Autos/Bäume)",camera:"Kamera",game:"Spiel",month:"Monat",speed:"Tempo",holds:"angehalten wegen",broken:"Kaputte Zahlen",offline:"Offline bereit",persist:"Dauerhaft gespeichert",loaded:"Geladene Daten",benchLine1:"Messung ({s} s): Schnitt {avg} fps · langsamste 1 % {low} fps · Minimum {min} fps",benchLine2:"  Bilder unter 30 fps: {below} % · max. Zeichenaufrufe {calls}",noBench:"Messung: noch nicht durchgeführt",touchFps:"Bildrate während Berührung: {fps} fps ({n} Bilder)",touchNone:"Bildrate während Berührung: noch nicht gemessen (Stadt ein paar Sekunden verschieben)",errors:"Fehler"},Cm={intro:"Dieses Spiel nutzt folgende Bausteine und Daten. Danke an alle, die sie frei zur Verfügung stellen.",license:"Lizenz",fullText:"Lizenztext lesen",use:{three:"3D-Grafik",hdri:"Himmelslicht und Spiegelungen",own:"selbst erstellt für dieses Spiel",terrain:"Boden: Gras, Wald, Fels, Sand, Wege, Äcker",building:"Häuser: Putz, Ziegel, Stein, Holz, Reet, Schiefer",trees:"Bäume und Büsche",basis:"Entpacken der Texturen"}},ym={stand:"Stand: November 2026",privacy:[{h:"Kurz gesagt",p:["Dieses Spiel sammelt keine Daten über dich. Es gibt kein Konto, keine Werbung, keine Statistik-Dienste, keine Cookies und keine Tracker."]},{h:"Was auf deinem Gerät gespeichert wird",p:["Spielstände liegen im Speicher deines Browsers (IndexedDB) auf deinem Gerät. Einstellungen wie Grafikstufe liegen ebenfalls nur dort (localStorage).","Damit das Spiel ohne Internet läuft, speichert der Browser die Spieldateien (Service Worker). Diese Daten verlassen dein Gerät nicht.","Du kannst alles löschen, indem du die App deinstallierst oder in Chrome die Websitedaten löschst."]},{h:"Beim Laden des Spiels",p:["Das Spiel wird von GitHub Pages (GitHub Inc., USA) ausgeliefert. Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie deine IP-Adresse, um die Dateien zu senden. Darauf haben wir keinen Einfluss. Mehr dazu in der Datenschutzerklärung von GitHub.","Rechtsgrundlage ist das berechtigte Interesse, das Spiel bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO)."]},{h:"Spielstand als Datei",p:["Wenn du einen Spielstand als Datei exportierst, entscheidest du selbst, wohin die Datei geht. Sie enthält nur Spieldaten."]},{h:"Deine Rechte",p:["Da wir keine Daten über dich speichern, gibt es bei uns nichts abzufragen oder zu löschen. Bei Fragen erreichst du uns über die Angaben im Impressum. Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren."]},{h:"Später",p:["Sollten später Werbung oder Käufe dazukommen, wird diese Erklärung vorher erweitert und du wirst um Erlaubnis gefragt."]}],imprint:["Angaben gemäß § 5 DDG","[Vorname Nachname]","[Straße Hausnummer]","[PLZ Ort]","Kontakt: [E-Mail-Adresse]","Verantwortlich für den Inhalt: [Vorname Nachname, Anschrift wie oben]"],imprintHint:"Platzhalter: Die Angaben werden vor der öffentlichen Verbreitung eingetragen."},Mm={text:["Nation Builder 3D (Arbeitstitel). Führe ein echtes Land vom Agrarstaat zur Zukunftsnation.","Ausbaustufe: Spielbare Probe. Du baust ein Dorf in Deutschland (1745), versorgst dein Volk und führst es an die Schwelle zur Industrie.","Länder sind echt, Regierungschefs und Ereignisse erfunden."]},Im={food:"Nahrung",wood:"Holz",goods:"Waren",coal:"Kohle"},bm={places:"Plätze",percent:"zufrieden",power:"Kraft",foodMonth:"Nahrung/Monat"},wm={happyTitle:"Warum so zufrieden?",happyIntro:"So setzt sich die Zufriedenheit deines Volkes zusammen. Grün hilft, rot schadet.",base:"Grundstimmung",total:"Ergebnis",none:"Im Moment gibt es keine besonderen Einflüsse.",moneyTitle:"Wohin geht das Geld?",moneyIntro:"Das ist die Bilanz des letzten Monats in Talern.",taxes:"Steuern",sales:"Verkauf von Waren",upkeep:"Unterhalt für Gebäude und Wege",subsidy:"Brotpreis-Stütze und Feiertage",net:"Gewinn oder Verlust",stockTitle:"Vorräte",stockIntro:"Dein Lager und die Veränderung pro Monat. Rot heißt: es wird weniger.",energyTitle:"Kraft",energyIntro:"Mühlen und Maschinen brauchen Kraft aus Wasser, Wind oder Dampf.",produced:"Erzeugt",needed:"Gebraucht",energyOk:"Genug Kraft – alle Werkstätten arbeiten voll.",energyShort:"Zu wenig Kraft – Werkstätten arbeiten langsamer. Baue eine Wassermühle oder Windmühle."},Bm={whyTitle:"Was gerade zählt",whatCanIDo:"Was kann ich tun?",lamp:{good:"zufrieden",ok:"unzufrieden",bad:"wütend"},tax:{low:"niedrig",normal:"normal",high:"hoch"},workers:{desc:"Bauern und Handwerker wollen satt werden und Arbeit haben.",leverHint:"Das Brot wird billiger. Das kostet jeden Monat Geld, macht die Arbeiter aber zufriedener.",name:"Arbeiter",lever:"Brotpreis-Stütze",hint:"Schaffe Arbeit, sorge für genug Essen und baue ein Wirtshaus."},business:{desc:"Händler und Handwerksmeister wollen niedrige Steuern, Märkte und Kraft für ihre Werkstätten.",leverHint:"Niedrige Steuern machen Händler froh, bringen dir aber weniger Geld.",name:"Händler",lever:"Steuersatz",hint:"Senke die Steuern, baue Marktplätze und eine Werkstatt und sorge für Kraft."},religion:{desc:"Die Gemeinde wünscht sich Kapellen und Feiertage.",leverHint:"An Feiertagen wird weniger gearbeitet, dafür sind Gemeinde und Volk zufriedener.",name:"Gläubige",lever:"Feiertage",hint:"Baue Kapellen oder führe Feiertage ein."},barTitle:"Volk"},Tm={title:"Ziele",intro:"Drei Schritte führen dein Dorf bis an die Schwelle zur Industrie.",reached:"geschafft",allDone:"Alle Ziele erreicht",toast:"Ziel erreicht: {name}",previewTitle:"Ausblick: Das Industriezeitalter",previewText:"Du hast die Tür zur Industrie aufgestoßen. Fabriken und Dampfkraft sind freigeschaltet. Ein eigenes Zeitalter mit Forschung folgt in einer späteren Ausbaustufe.",dorf:{name:"Aus dem Weiler wird ein Dorf",desc:"Erreiche 150 Einwohner und baue einen Marktplatz."},handwerk:{name:"Das Handwerk blüht",desc:"Erreiche 250 Einwohner. Eine Werkstatt soll mit genug Kraft aus Wasser oder Wind laufen."},industrie:{name:"Tor zur Industrie",desc:"Eine Fabrik läuft mit Kohle und Dampfkraft. Das Volk ist dabei zufrieden."},reachedTitle:"Ziel erreicht"},Rm={locked:"Gesperrt – erreiche zuerst: {goal}",housing:"{n} Plätze zum Wohnen",jobs:"{n} Arbeitsplätze",upkeep:"Unterhalt {n}/Monat",tapGround:"Tippe aufs Gelände, wo es stehen soll.",roadStart:"Tippe den Anfang, dann das Ende der Straße.",roadReady:"Straße mit {n} Feldern",demolishTap:"Tippe auf ein Gebäude oder eine Straße.",rotate:"Drehen",build:"Bauen",placed:"{name} gebaut",undo:"Letzten Bauschritt zurücknehmen ({n} möglich)",menu:"Bauen",autoRot:"Das Haus dreht sich von selbst zur Straße.",undone:"Zurückgenommen"},Dm={working:"arbeitet",partly:"arbeitet zu {n} %",idle:"arbeitet nicht",demolish:"Abreißen (+{n} 🪙)"},Lm={title:"Jahresbilanz {year}",intro:"So lief das vergangene Jahr:",net:"Gewinn oder Verlust",pop:"Einwohner",happy:"Zufriedenheit",money:"Kassenstand",go:"Weiter"},Fm={skip:"Überspringen",next:"Weiter",finish:"Los geht’s",welcome:{title:"Willkommen in deinem Dorf",text:"Es ist das Jahr 1745. Dein Volk braucht Nahrung, Häuser und Arbeit. Wische mit einem Finger zum Umsehen, zoome mit zwei Fingern."},category:{title:"Bauen",text:"Tippe unten auf „Bauen“, dann auf „Wohnen“ und wähle ein Haus."},place:{title:"Platz suchen",text:"Tippe aufs Gelände neben einer Straße. Das Haus dreht sich von selbst zur Straße. Grün heißt: hier geht es. Dann tippe auf „Bauen“. Mit „↩“ nimmst du die letzten 10 Bauschritte zurück."},numbers:{title:"Deine Zahlen",text:"Oben siehst du Geld, Einwohner, Zufriedenheit, Kraft und Nahrung. Tippe auf eine Zahl, dann erfährst du, warum sie so ist."},lamps:{title:"Die Ampeln des Volkes",text:"Arbeiter, Händler und Gläubige wollen verschiedene Dinge. Tippe auf die Leiste „Volk“ und lies, was du tun kannst."},goals:{title:"Deine Ziele",text:"Mit der Flagge öffnest du die Ziele. Drei Schritte bis zur Industrie. Viel Erfolg!"}},Pm={reason:{busy:"Das Spiel lädt noch.",unknown:"Das geht nicht.",locked:"Das ist noch nicht freigeschaltet.",bounds:"Das liegt außerhalb der Karte.",blocked:"Dort steht schon etwas.",terrain:"Hier kann man das nicht bauen.",site:"Der Ort passt nicht (Wasser oder Wald fehlt).",money:"Zu wenig Taler.",empty:"Dort gibt es nichts zu bauen.",unique:"Das gibt es nur einmal und bleibt stehen.",nothing:"Es gibt nichts mehr zum Zurücknehmen."}},Um={housing:"Wohnen",food:"Essen",resources:"Rohstoffe",industry:"Handwerk",energy:"Kraft",community:"Gemeinde",road:"Straßen",demolish:"Abreißen"},Nm={road:{name:"Straße",desc:"Verbindet die Häuser. Ohne Straße arbeitet kaum ein Gebäude."},hut:{name:"Hütte",desc:"Einfaches Haus für 8 Menschen. Braucht eine Straße."},house:{name:"Haus",desc:"Gemütliches Haus für 16 Menschen."},field:{name:"Acker",desc:"Hier wächst das Getreide. Gute Erde bringt mehr Ernte."},pasture:{name:"Weide",desc:"Kühe und Schafe liefern etwas Nahrung und ein paar Waren."},fishery:{name:"Fischerhütte",desc:"Fängt Fische. Muss am Wasser stehen."},woodcutter:{name:"Holzfäller",desc:"Fällt Bäume und liefert Holz. Wald muss in der Nähe sein."},coalmine:{name:"Kohlengrube",desc:"Holt Kohle aus dem Berg. Liegt nahe bei Hügeln und braucht Kraft."},workshop:{name:"Werkstatt",desc:"Macht aus Holz nützliche Waren. Braucht Kraft."},factory:{name:"Fabrik",desc:"Stellt viele Waren her. Braucht Kohle, Holz und viel Kraft."},watermill:{name:"Wassermühle",desc:"Mahlt Korn und liefert Kraft. Muss am Wasser stehen."},windmill:{name:"Windmühle",desc:"Mahlt Korn und liefert etwas Kraft."},steamengine:{name:"Dampfmaschine",desc:"Verbrennt Kohle und liefert viel Kraft."},market:{name:"Marktplatz",desc:"Hier wird gehandelt. Bringt Taler und freut die Händler."},chapel:{name:"Kapelle",desc:"Ein Ort der Ruhe. Freut die Gläubigen."},tavern:{name:"Wirtshaus",desc:"Hier trifft man sich nach der Arbeit. Freut die Arbeiter."},townhall:{name:"Rathaus",desc:"Das Herz des Dorfes. Es bleibt immer stehen."}},Om={noRoad:"Keine Straße in der Nähe.",noWorkers:"Es fehlen Arbeitskräfte.",noEnergy:"Es fehlt Kraft.",noInput:"Es fehlt Rohstoff.",business:{taxLow:"Die Steuern sind niedrig.",taxHigh:"Die Steuern sind hoch.",market:"Es gibt genug Marktplätze.",noMarket:"Es fehlen Marktplätze.",industry:"Werkstätten und Fabriken laufen.",noIndustry:"Es gibt noch keine Werkstatt.",energy:"Die Kraft reicht aus.",noEnergy:"Den Werkstätten fehlt Kraft.",debt:"Das Dorf hat Schulden."},workers:{taxLow:"Die Steuern sind niedrig.",taxHigh:"Die Steuern sind hoch.",subsidy:"Das Brot ist verbilligt.",hunger:"Es gibt zu wenig zu essen.",jobless:"Zu viele Menschen haben keine Arbeit.",jobs:"Fast alle haben Arbeit.",tavern:"Ein Wirtshaus ist gut zu erreichen.",noTavern:"Es fehlen Wirtshäuser.",holidays:"Feiertage geben freie Tage."},religion:{taxLow:"Die Steuern sind niedrig.",taxHigh:"Die Steuern sind hoch.",chapel:"Es gibt genug Kapellen.",noChapel:"Es fehlen Kapellen.",holidays:"Die Feiertage werden geehrt."}},Qm={environment:{smog:"Rauch und Qualm"},energy:{shortage:"Zu wenig Kraft"},economy:{tax:"Steuersatz",debt:"Schulden"},population:{wellFed:"Alle werden satt",hunger:"Hunger",crowding:"Zu wenig Wohnraum",cold:"Zu wenig Brennholz",faith:"Es fehlen Kapellen",jobless:"Menschen ohne Arbeit",noGoods:"Es fehlen Waren",market:"Marktplatz in der Nähe",chapel:"Kapelle in der Nähe",tavern:"Wirtshaus in der Nähe"},politics:{groups:"Stimmung der Gruppen",holidaysOutput:"Feiertage (weniger Arbeit)",strikeOutput:"Streik der Arbeiter",strikeTaxes:"Händler zahlen weniger",business:{tax:"Steuersatz",market:"Marktplätze",industry:"Werkstätten",energy:"Kraftversorgung",debt:"Schulden"},workers:{tax:"Steuersatz",subsidy:"Brotpreis-Stütze",hunger:"Hunger",jobless:"Menschen ohne Arbeit",fullJobs:"Alle haben Arbeit",tavern:"Wirtshäuser",holidays:"Feiertage"},religion:{tax:"Steuersatz",chapel:"Kapellen",holidays:"Feiertage"}}},km={app:um,common:dm,date:fm,mode:hm,quality:Am,hud:pm,menu:mm,settings:gm,saves:Em,save:vm,update:_m,pwa:xm,debug:Sm,licenses:Cm,legal:ym,about:Mm,res:Im,stat:bm,explain:wm,group:Bm,ms:Tm,buildui:Rm,info:Dm,balance:Lm,tut:Fm,cmd:Pm,cat:Um,bld:Nm,why:Om,mod:Qm};function Gm(n){let e=null;window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),e=s,n.emit("app:install-available")}),n.on("app:install",async()=>{e&&(e.prompt(),await e.userChoice.catch(()=>null),e=null)});const t={supported:"serviceWorker"in navigator,controlled:!1,waiting:!1,error:null};if(!t.supported)return t;let i=!1;return navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t.controlled){t.controlled=!0;return}i||(i=!0,location.reload())}),t.controlled=!!navigator.serviceWorker.controller,navigator.serviceWorker.register("./sw.js").then(s=>{const r=()=>{t.waiting=!0,n.emit("app:update-ready")};s.waiting&&navigator.serviceWorker.controller&&r(),s.addEventListener("updatefound",()=>{const a=s.installing;a?.addEventListener("statechange",()=>{a.state==="installed"&&(navigator.serviceWorker.controller?r():n.emit("app:offline-ready"))})}),n.on("app:update-now",()=>{const a=s.waiting;a?a.postMessage({type:"SKIP_WAITING"}):location.reload()});const o=()=>s.update().catch(()=>{});document.addEventListener("visibilitychange",()=>!document.hidden&&o()),setInterval(o,1800*1e3),t.check=o}).catch(s=>{t.error=String(s)}),t}let Dt,Ur,Mu,Dn=null,Ks=cr("sandbox"),Ws=1,Gs=0,$s=!1;const Ti=new Set;let Xr=!1,Iu=0;function oa(n){Ur.postMessage(n)}const dc=new Map;let Hm=0,aa=null,la=-1;function zm(n){const e=n.flags?.milestones||{};if(aa)for(const[i,s]of Object.entries(e))s!=null&&aa[i]==null&&Dt.bus.emit("time:milestone",{id:i,month:s});aa={...e};const t=n.economy?.history||[];la>=0&&t.length>la&&Dt.bus.emit("year:balance",t[t.length-1]),la=t.length}function Vm(n){const e=n.data;if(e.type==="result"){Dn=e.state;const i=dc.get(e.id);dc.delete(e.id),Dt.bus.emit("state:changed",{month:Dn.time.month}),i?.({ok:e.ok,reason:e.reason,data:e.data});return}if(e.type==="error"){console.error("Simulation:",e.message),Dt.bus.emit("app:error",{module:"sim",message:e.message}),$s=!1;return}if(e.type!=="state")return;const t=!Xr;if(Dn=e.state,$s=!1,e.months>0){const i=za(Dn.time);Dt.bus.emit("time:month",{month:Dn.time.month,year:i.year,monthOfYear:i.monthOfYear})}(t||e.loaded)&&(aa=null,la=-1),zm(Dn),Dt.bus.emit("state:changed",{month:Dn.time.month}),(t||e.loaded)&&(Xr=!0,Ti.delete("loading")),ca&&(ca(),ca=null)}let ca=null;function bu(n){return Ti.add("loading"),Xr=!1,Gs=0,$s=!1,Ks=cr(n.meta.mode),new Promise(e=>{ca=e,oa({type:"load",state:n,config:Ks})})}function ol(n){Ks.time.speeds.includes(n)&&(Ws=n,Dt.bus.emit("time:speed",{speed:Ws}))}const Hs={name:"core",required:!0,init(n){Dt=n,Ur=new Worker(new URL(""+new URL("worker-BWjDx6YZ.js",import.meta.url).href,import.meta.url),{type:"module"}),Ur.onmessage=Vm,Ur.onerror=e=>Dt.bus.emit("app:error",{module:"sim",message:e.message||"Worker"}),Mu=Gm(Dt.bus),Dt.store={get:()=>Dn,clock:()=>({speed:Ws,progress:Gs,paused:Ws===0||Ti.size>0,holds:[...Ti]}),pwa:()=>({...Mu})},Dt.mode=()=>Ks,Dt.explain=e=>Dn?Wp(Dn,e):null,Dt.bus.on("time:set-speed",({speed:e})=>ol(e)),Dt.bus.on("time:hold",({reason:e,on:t})=>t?Ti.add(e):Ti.delete(e)),Dt.bus.on("app:hidden",()=>Ti.add("hidden")),Dt.bus.on("app:visible",()=>Ti.delete("hidden")),Dt.bus.on("app:update-apply",async()=>{try{await Dt.bus.request("save:write",{slot:"auto"})}catch{}Dt.bus.emit("app:update-now")}),Dt.bus.handle("sim:command",({name:e,data:t})=>new Promise(i=>{if(!Xr){i({ok:!1,reason:"busy"});return}const s=++Hm;dc.set(s,i),oa({type:"command",id:s,name:e,data:t})})),Dt.bus.handle("core:advance",e=>new Promise(t=>{const i=Dt.bus.on("state:changed",()=>{i(),t(Dn.time.month)});$s=!0,oa({type:"step",count:e})}))},async newGame({mode:n="sandbox",seed:e}={}){const t=cr(n),i=e??`${Date.now()}-${Math.floor(Math.random()*1e9)}`;await bu($c(t,i,new Date().toISOString())),ol(t.time.startSpeed)},update(){const n=performance.now(),e=Math.min((n-(Iu||n))/1e3,1);Iu=n,!(!Xr||$s||Ws===0||Ti.size>0)&&(Gs+=e*Ws/Ks.time.monthSeconds,Gs>=1&&(Gs=Math.min(Gs-1,.5),$s=!0,oa({type:"step",count:1})))},serialize(){return Dn},async load(n){await bu(n),ol(Ks.time.startSpeed)},dispose(){Ur?.terminate()}},Wm="nb3d",qm=1,Xm=10;function Js(n){return new Promise((e,t)=>{n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}function Ym(){return new Promise((n,e)=>{const t=indexedDB.open(Wm,qm);t.onupgradeneeded=()=>{const i=t.result;i.objectStoreNames.contains("slots")||i.createObjectStore("slots",{keyPath:"id"}),i.objectStoreNames.contains("backups")||i.createObjectStore("backups",{keyPath:"key",autoIncrement:!0})},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error),t.onblocked=()=>e(new Error("blocked"))})}function Zs(n,e,t="readonly"){return n.transaction(e,t).objectStore(e)}const Jc=(n,e)=>Js(Zs(n,"slots").get(e)),Km=n=>Js(Zs(n,"slots").getAll()),wu=(n,e)=>Js(Zs(n,"slots","readwrite").delete(e));function Zc(n,e){return new Promise((t,i)=>{const s=n.transaction("slots","readwrite");s.objectStore("slots").put(e),s.oncomplete=()=>t(),s.onerror=()=>i(s.error),s.onabort=()=>i(s.error||new Error("abort"))})}async function Vf(n,e){const t=await Js(Zs(n,"backups","readwrite").add(e)),i=await Js(Zs(n,"backups").getAllKeys()),s=i.slice(0,Math.max(0,i.length-Xm));for(const r of s)await Js(Zs(n,"backups","readwrite").delete(r));return t}const $m={0:n=>({...n,schemaVersion:1,state:{...n.state,schemaVersion:1}}),1:n=>{const e=n.state||{},t=$c(cr(e.meta?.mode),e.meta?.seed??"migriert",n.savedAt||void 0),i={...e,schemaVersion:2};for(const s of["flags","region","build","economy","population","energy","environment"])i[s]=t[s];return i.politics={...e.politics||{},groups:t.politics.groups,policies:t.politics.policies,legitimacy:t.politics.legitimacy,unrest:t.politics.unrest},i.modifiers=Array.isArray(e.modifiers)?e.modifiers:[],i.derived=t.derived,{...n,schemaVersion:2,state:i}}};function Jm(n,e=Es){return(n.schemaVersion??0)<e}function Bu(n,e=Es,t=$m){let i=structuredClone(n),s=i.schemaVersion??0;if(s>e)throw new Error("save.error.newer");for(;s<e;){const o=t[s];if(!o)throw new Error("save.error.migration");i=o(i),s+=1,i.schemaVersion=s}i.state.schemaVersion=e;const r=cr(i.state.meta?.mode);return Hf(i.state,$c(r,i.state.meta?.seed??"migriert",i.savedAt||void 0)),i}function Zm(n){let e;try{e=JSON.parse(n)}catch{throw new Error("save.error.notJson")}if(!e||e.format!=="nb3d-save")throw new Error("save.error.format");if(typeof e.schemaVersion!="number"||!e.state||typeof e.state!="object")throw new Error("save.error.format");if(e.schemaVersion>Es)throw new Error("save.error.newer");return e}function jm(n,e){const t=new Blob([JSON.stringify(e)],{type:"application/json"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=n,document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e4)}function eg(n,e=new Date){const t=e.toISOString().slice(0,10);return`nation-builder-${n}-${t}.json`}const Wf=["auto","slot1","slot2","slot3"];let ti,tg=null,Wi=null,xa=0,Tu=Promise.resolve();const Xi=()=>tg||=Ym();function Nr(n){const e=Tu.then(n,n);return Tu=e.catch(()=>{}),e}async function ng(){if(Wi!==null||!navigator.storage?.persist)return Wi;try{Wi=await navigator.storage.persisted()||await navigator.storage.persist()}catch{Wi=!1}return Wi}function ig(n){const{data:e,...t}=n;return t}async function qf(n){if(!Wf.includes(n))throw new Error("save.error.slot");const e=ti.game.snapshot();if(!e?.state)throw new Error("save.error.noGame");const t=e.state.time;return await Zc(await Xi(),{id:n,savedAt:e.savedAt,schemaVersion:e.schemaVersion,build:e.build,mode:e.state.meta.mode,month:t.month,startYear:t.startYear,startMonth:t.startMonth,data:e}),xa=t.month,ng(),ti.bus.emit("save:saved",{slot:n}),!0}async function Ru(n){const e=await Xi(),t=await Jc(e,n);if(!t)throw new Error("save.error.empty");let i=t.data;if(Jm(i)){const s=i.schemaVersion??0,r=await Vf(e,{slot:n,createdAt:new Date().toISOString(),fromVersion:s,data:i});i=Bu(i),await Zc(e,{...t,schemaVersion:Es,data:i}),ti.bus.emit("save:migrated",{slot:n,from:s,to:Es,backup:r})}else i=Bu(i);return await ti.game.restore(i),xa=i.state.time.month,ti.bus.emit("save:loaded",{slot:n}),!0}async function sg({slot:n,text:e}){if(!Wf.includes(n))throw new Error("save.error.slot");const t=Zm(e),i=t.state.time||{};return await Zc(await Xi(),{id:n,savedAt:t.savedAt||new Date().toISOString(),schemaVersion:t.schemaVersion,build:t.build||"?",mode:t.state.meta?.mode||"sandbox",month:i.month??0,startYear:i.startYear??1900,startMonth:i.startMonth??0,data:t}),!0}async function rg({slot:n}){const e=await Jc(await Xi(),n);if(!e)throw new Error("save.error.empty");return jm(eg(n),e.data),!0}function Du(){return ti.store.get()?Nr(()=>qf("auto")).catch(n=>ti.bus.emit("save:error",{slot:"auto",code:n.message})):Promise.resolve()}const og={name:"save",required:!0,init(n){ti=n;const e=ti.bus;e.handle("save:list",async()=>(await Km(await Xi())).map(ig)),e.handle("save:write",({slot:t})=>Nr(()=>qf(t))),e.handle("save:read",({slot:t})=>Nr(()=>Ru(t))),e.handle("save:delete",async({slot:t})=>(await wu(await Xi(),t),!0)),e.handle("save:export",rg),e.handle("save:import",t=>Nr(()=>sg(t))),e.handle("save:persisted",async()=>(Wi===null&&navigator.storage?.persisted&&(Wi=await navigator.storage.persisted().catch(()=>null)),Wi)),e.on("time:month",({month:t})=>{t-xa>=ti.mode().save.autosaveMonths&&Du()}),e.on("app:hidden",()=>Du()),e.on("app:ready",async()=>{let t=null;try{if(t=await Jc(await Xi(),"auto"),t){await Nr(()=>Ru("auto"));return}}catch(i){e.emit("save:error",{slot:"auto",code:i.message});try{if(t){const s=await Xi();await Vf(s,{slot:"auto",createdAt:new Date().toISOString(),fromVersion:t.schemaVersion,data:t.data}),await wu(s,"auto")}}catch{}}await ti.game.newGame({mode:"sandbox"})}),e.on("game:started",({loaded:t})=>{t||(xa=0)})},update(){},serialize(){return null},load(){},dispose(){}};const jc="187",ag=0,Lu=1,lg=2,Gr=1,Xf=2,Or=3,vs=0,vn=1,Fn=2,js=0,Hr=1,fc=2,Fu=3,Pu=4,cg=5,zs=100,ug=101,dg=102,fg=103,hg=104,Ag=200,pg=201,mg=202,gg=203,Yf=204,Kf=205,Eg=206,vg=207,_g=208,xg=209,Sg=210,Cg=211,yg=212,Mg=213,Ig=214,hc=0,Ac=1,pc=2,Yr=3,mc=4,gc=5,Ec=6,vc=7,$f=0,bg=1,wg=2,Pi=0,Jf=1,Zf=2,jf=3,eu=4,eh=5,th=6,nh=7,ih=300,_s=301,Kr=302,al=303,ll=304,Sa=1e3,Sn=1001,_c=1002,Wt=1003,sh=1004,Co=1005,Rt=1006,cl=1007,In=1008,it=1009,rh=1010,oh=1011,xs=1012,tu=1013,ii=1014,qt=1015,Tt=1016,nu=1017,iu=1018,rr=1020,Va=35902,Wa=35899,ah=1021,$r=1022,It=1023,Ji=1026,Yi=1027,On=1028,su=1029,nn=1030,ru=1031,ou=1033,er=33776,hs=33777,ua=33778,As=33779,Ca=35840,xc=35841,or=35842,Jr=35843,ya=36196,Zr=37492,jr=37496,Ma=37488,Ia=37489,eo=37490,ba=37491,ps=37808,Sc=37809,Cc=37810,yc=37811,tr=37812,Mc=37813,Ic=37814,bc=37815,wc=37816,Bc=37817,Tc=37818,Rc=37819,Dc=37820,Lc=37821,ar=36492,Fc=36494,wa=36495,Ba=36283,Ta=36284,to=36285,Ra=36286,Bg=3200,Tg=3201,Pc=0,Rg=1,Zn="",en="srgb",Ln="srgb-linear",Da="linear",vt="srgb",ul=7680,Dg=519,Lg=512,Fg=513,Pg=514,lh=515,Ug=516,Ng=517,ch=518,uh=519,Og=35044,au=35048,Uu="300 es",ni=2e3,no=2001;function Qg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kg(){const n=La("canvas");return n.style.display="block",n}const Nu={};function Ou(...n){const e="THREE."+n.shift();console.log(e,...n)}function dh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function tt(...n){n=dh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function mt(...n){n=dh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function da(...n){const e=n.join(" ");e in Nu||(Nu[e]=!0,tt(...n))}function Gg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Hg={[hc]:hc,[pc]:Ec,[mc]:mc,[Yr]:gc,[Ac]:Ac,[Ec]:pc,[vc]:vc,[gc]:Yr};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qu=1234567;const zr=Math.PI/180,io=180/Math.PI;function dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function lu(n,e){return(n%e+e)%e}function zg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vg(n,e,t){return n!==e?(t-n)/(e-n):0}function Vr(n,e,t){return(1-t)*n+t*e}function Wg(n,e,t,i){return Vr(n,e,1-Math.exp(-t*i))}function qg(n,e=1){return e-Math.abs(lu(n,e*2)-e)}function Xg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $g(n,e){return n+Math.random()*(e-n)}function Jg(n){return n*(.5-Math.random())}function Zg(n){n!==void 0&&(Qu=n);let e=Qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jg(n){return n*zr}function e0(n){return n*io}function t0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function n0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*d,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*d,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*d,a*l);break;case"XZX":n.set(a*d,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*d,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*d,a*l);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hh(n,e){if(e.constructor===Float32Array)return n;const t=cu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Ah(n,e){if(e.constructor===Float32Array)return n;const t=cu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Ki={DEG2RAD:zr,RAD2DEG:io,generateUUID:dr,clamp:ft,euclideanModulo:lu,mapLinear:zg,inverseLerp:Vg,lerp:Vr,damp:Wg,pingpong:qg,smoothstep:Xg,smootherstep:Yg,randInt:Kg,randFloat:$g,randFloatSpread:Jg,seededRandom:Zg,degToRad:jg,radToDeg:e0,isPowerOfTwo:t0,ceilPowerOfTwo:n0,floorPowerOfTwo:fh,setQuaternionFromProperEuler:i0,normalize:Ah,denormalize:hh};class ct{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class si{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3],u=r[o+0],h=r[o+1],g=r[o+2],E=r[o+3];if(f!==E||c!==u||l!==h||d!==g){let p=c*u+l*h+d*g+f*E;p<0&&(u=-u,h=-h,g=-g,E=-E,p=-p);let m=1-a;if(p<.9995){const C=Math.acos(p),I=Math.sin(C);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I,c=c*m+u*a,l=l*m+h*a,d=d*m+g*a,f=f*m+E*a}else{c=c*m+u*a,l=l*m+h*a,d=d*m+g*a,f=f*m+E*a;const C=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=C,l*=C,d*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],d=i[s+3],f=r[o],u=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+d*f+c*h-l*u,e[t+1]=c*g+d*u+l*f-a*h,e[t+2]=l*g+d*h+a*u-c*f,e[t+3]=d*g-a*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(s/2),f=a(r/2),u=c(i/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"YXZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"ZXY":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"ZYX":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"YZX":this._x=u*d*f+l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f-u*h*g;break;case"XZY":this._x=u*d*f-l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f+u*h*g;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=i+a+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(d-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-i*l,this._z=r*d+o*l+i*c-s*a,this._w=o*d-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),d=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*d,this.y=i+c*d+a*l-r*f,this.z=s+c*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dl.copy(this).projectOnVector(e),this.sub(dl)}reflect(e){return this.sub(dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new ee,ku=new si;class rt{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],u=i[2],h=i[5],g=i[8],E=s[0],p=s[3],m=s[6],C=s[1],I=s[4],S=s[7],b=s[2],y=s[5],_=s[8];return r[0]=o*E+a*C+c*b,r[3]=o*p+a*I+c*y,r[6]=o*m+a*S+c*_,r[1]=l*E+d*C+f*b,r[4]=l*p+d*I+f*y,r[7]=l*m+d*S+f*_,r[2]=u*E+h*C+g*b,r[5]=u*p+h*I+g*y,r[8]=u*m+h*S+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*r*d+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,u=a*c-d*r,h=l*r-o*c,g=t*f+i*u+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=f*E,e[1]=(s*l-d*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(d*t-s*c)*E,e[5]=(s*r-a*t)*E,e[6]=h*E,e[7]=(i*c-l*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return da("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fl.makeScale(e,t)),this}rotate(e){return da("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return da("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fl=new rt,Gu=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){const n={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ln]:{primaries:e,whitePoint:i,transfer:Da,toXYZ:Gu,fromXYZ:Hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Gu,fromXYZ:Hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const ht=s0();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bs;class r0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bs===void 0&&(bs=La("canvas")),bs.width=e.width,bs.height=e.height;const s=bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=La("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o0=0;class uu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hl(s[o].image)):r.push(hl(s[o]))}else r=hl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?r0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let a0=0;const Al=new ee;class rn extends Cs{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=Sn,s=Sn,r=Rt,o=In,a=It,c=it,l=rn.DEFAULT_ANISOTROPY,d=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=dr(),this.name="",this.source=new uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Al).x}get height(){return this.source.getSize(Al).y}get depth(){return this.source.getSize(Al).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=ih;rn.DEFAULT_ANISOTROPY=1;class Qt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],g=c[9],E=c[2],p=c[6],m=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-E)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+E)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(l+1)/2,S=(h+1)/2,b=(m+1)/2,y=(d+u)/4,_=(f+E)/4,M=(g+p)/4;return I>S&&I>b?I<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(I),s=y/i,r=_/i):S>b?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=y/s,r=M/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=_/r,s=M/r),this.set(i,s,r,t),this}let C=Math.sqrt((p-g)*(p-g)+(f-E)*(f-E)+(u-d)*(u-d));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(f-E)/C,this.z=(u-d)/C,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l0 extends Cs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new rn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new uu(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends l0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ph extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ut{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,d,f,u,h,g,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,d,f,u,h,g,E,p)}set(e,t,i,s,r,o,a,c,l,d,f,u,h,g,E,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=d,m[10]=f,m[14]=u,m[3]=h,m[7]=g,m[11]=E,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*d,h=o*f,g=a*d,E=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=u-E*l,t[9]=-a*c,t[2]=E-u*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*d,h=c*f,g=l*d,E=l*f;t[0]=u+E*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=h*a-g,t[6]=E+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*d,h=c*f,g=l*d,E=l*f;t[0]=u-E*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*d,t[9]=E-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*d,h=o*f,g=a*d,E=a*f;t[0]=c*d,t[4]=g*l-h,t[8]=u*l+E,t[1]=c*f,t[5]=E*l+u,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,h=o*l,g=a*c,E=a*l;t[0]=c*d,t[4]=E-u*f,t[8]=g*f+h,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=h*f+g,t[10]=u-E*f}else if(e.order==="XZY"){const u=o*c,h=o*l,g=a*c,E=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+E,t[5]=o*d,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*d,t[10]=E*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,u0)}lookAt(e,t,i){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Qi.crossVectors(i,yn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Qi.crossVectors(i,yn)),Qi.normalize(),yo.crossVectors(yn,Qi),s[0]=Qi.x,s[4]=yo.x,s[8]=yn.x,s[1]=Qi.y,s[5]=yo.y,s[9]=yn.y,s[2]=Qi.z,s[6]=yo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],u=i[9],h=i[13],g=i[2],E=i[6],p=i[10],m=i[14],C=i[3],I=i[7],S=i[11],b=i[15],y=s[0],_=s[4],M=s[8],F=s[12],D=s[1],N=s[5],k=s[9],V=s[13],L=s[2],Q=s[6],W=s[10],H=s[14],J=s[3],z=s[7],K=s[11],Z=s[15];return r[0]=o*y+a*D+c*L+l*J,r[4]=o*_+a*N+c*Q+l*z,r[8]=o*M+a*k+c*W+l*K,r[12]=o*F+a*V+c*H+l*Z,r[1]=d*y+f*D+u*L+h*J,r[5]=d*_+f*N+u*Q+h*z,r[9]=d*M+f*k+u*W+h*K,r[13]=d*F+f*V+u*H+h*Z,r[2]=g*y+E*D+p*L+m*J,r[6]=g*_+E*N+p*Q+m*z,r[10]=g*M+E*k+p*W+m*K,r[14]=g*F+E*V+p*H+m*Z,r[3]=C*y+I*D+S*L+b*J,r[7]=C*_+I*N+S*Q+b*z,r[11]=C*M+I*k+S*W+b*K,r[15]=C*F+I*V+S*H+b*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],g=e[3],E=e[7],p=e[11],m=e[15],C=c*h-l*u,I=a*h-l*f,S=a*u-c*f,b=o*h-l*d,y=o*u-c*d,_=o*f-a*d;return t*(E*C-p*I+m*S)-i*(g*C-p*b+m*y)+s*(g*I-E*b+m*_)-r*(g*S-E*y+p*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-i*(r*d-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],g=e[12],E=e[13],p=e[14],m=e[15],C=t*a-i*o,I=t*c-s*o,S=t*l-r*o,b=i*c-s*a,y=i*l-r*a,_=s*l-r*c,M=d*E-f*g,F=d*p-u*g,D=d*m-h*g,N=f*p-u*E,k=f*m-h*E,V=u*m-h*p,L=C*V-I*k+S*N+b*D-y*F+_*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/L;return e[0]=(a*V-c*k+l*N)*Q,e[1]=(s*k-i*V-r*N)*Q,e[2]=(E*_-p*y+m*b)*Q,e[3]=(u*y-f*_-h*b)*Q,e[4]=(c*D-o*V-l*F)*Q,e[5]=(t*V-s*D+r*F)*Q,e[6]=(p*S-g*_-m*I)*Q,e[7]=(d*_-u*S+h*I)*Q,e[8]=(o*k-a*D+l*M)*Q,e[9]=(i*D-t*k-r*M)*Q,e[10]=(g*y-E*S+m*C)*Q,e[11]=(f*S-d*y-h*C)*Q,e[12]=(a*F-o*N-c*M)*Q,e[13]=(t*N-i*F+s*M)*Q,e[14]=(E*I-g*b-p*C)*Q,e[15]=(d*b-f*I+u*C)*Q,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+i,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,f=a+a,u=r*l,h=r*d,g=r*f,E=o*d,p=o*f,m=a*f,C=c*l,I=c*d,S=c*f,b=i.x,y=i.y,_=i.z;return s[0]=(1-(E+m))*b,s[1]=(h+S)*b,s[2]=(g-I)*b,s[3]=0,s[4]=(h-S)*y,s[5]=(1-(u+m))*y,s[6]=(p+C)*y,s[7]=0,s[8]=(g+I)*_,s[9]=(p-C)*_,s[10]=(1-(u+E))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ws.set(s[0],s[1],s[2]).length();const a=ws.set(s[4],s[5],s[6]).length(),c=ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hn.copy(this);const l=1/o,d=1/a,f=1/c;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,t.setFromRotationMatrix(Hn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=ni,c=!1){const l=this.elements,d=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),h=(i+s)/(i-s);let g,E;if(c)g=r/(o-r),E=o*r/(o-r);else if(a===ni)g=-(o+r)/(o-r),E=-2*o*r/(o-r);else if(a===no)g=-o/(o-r),E=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ni,c=!1){const l=this.elements,d=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),h=-(i+s)/(i-s);let g,E;if(c)g=1/(o-r),E=o/(o-r);else if(a===ni)g=-2/(o-r),E=-(o+r)/(o-r);else if(a===no)g=-1/(o-r),E=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ws=new ee,Hn=new ut,c0=new ee(0,0,0),u0=new ee(1,1,1),Qi=new ee,yo=new ee,yn=new ee,zu=new ut,Vu=new si;class Zi{constructor(e=0,t=0,i=0,s=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],f=s[2],u=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d0=0;const Wu=new ee,Bs=new si,Ci=new ut,Mo=new ee,xr=new ee,f0=new ee,h0=new si,qu=new ee(1,0,0),Xu=new ee(0,1,0),Yu=new ee(0,0,1),Ku={type:"added"},A0={type:"removed"},Ts={type:"childadded",child:null},pl={type:"childremoved",child:null};class tn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new ee,t=new Zi,i=new si,s=new ee(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new rt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mo.copy(e):Mo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(xr,Mo,this.up):Ci.lookAt(Mo,xr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Ci),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A0),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,f0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,h0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.DEFAULT_UP=new ee(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mi extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p0={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,i),m=this._getHandJoint(l,E);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&u>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Io={h:0,s:0,l:0};function gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=lu(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=gl(o,r,e+1/3),this.g=gl(o,r,e),this.b=gl(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function i(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=gh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return ht.workingToColorSpace(un.copy(this),e),Math.round(ft(un.r*255,0,255))*65536+Math.round(ft(un.g*255,0,255))*256+Math.round(ft(un.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(un.copy(this),t);const i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=en){ht.workingToColorSpace(un.copy(this),e);const t=un.r,i=un.g,s=un.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Io);const i=Vr(ki.h,Io.h,t),s=Vr(ki.s,Io.s,t),r=Vr(ki.l,Io.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new He;He.NAMES=gh;class fu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new fu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class m0 extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zn=new ee,yi=new ee,El=new ee,Mi=new ee,Rs=new ee,Ds=new ee,$u=new ee,vl=new ee,_l=new ee,xl=new ee,Sl=new Qt,Cl=new Qt,yl=new Qt;class jn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),yi.subVectors(i,t),El.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(yi),c=zn.dot(El),l=yi.dot(yi),d=yi.dot(El),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,h=(l*c-a*d)*u,g=(o*d-a*c)*u;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Sl.setScalar(0),Cl.setScalar(0),yl.setScalar(0),Sl.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,i),yl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sl,r.x),o.addScaledVector(Cl,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),yi.subVectors(e,t),zn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),zn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return jn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Rs.subVectors(s,i),Ds.subVectors(r,i),vl.subVectors(e,i);const c=Rs.dot(vl),l=Ds.dot(vl);if(c<=0&&l<=0)return t.copy(i);_l.subVectors(e,s);const d=Rs.dot(_l),f=Ds.dot(_l);if(d>=0&&f<=d)return t.copy(s);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(i).addScaledVector(Rs,o);xl.subVectors(e,r);const h=Rs.dot(xl),g=Ds.dot(xl);if(g>=0&&h<=g)return t.copy(r);const E=h*l-c*g;if(E<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ds,a);const p=d*g-h*f;if(p<=0&&f-d>=0&&h-g>=0)return $u.subVectors(r,s),a=(f-d)/(f-d+(h-g)),t.copy(s).addScaledVector($u,a);const m=1/(p+E+u);return o=E*m,a=u*m,t.copy(i).addScaledVector(Rs,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class es{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),wo.subVectors(this.max,Sr),Ls.subVectors(e.a,Sr),Fs.subVectors(e.b,Sr),Ps.subVectors(e.c,Sr),Gi.subVectors(Fs,Ls),Hi.subVectors(Ps,Fs),ss.subVectors(Ls,Ps);let t=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-ss.z,ss.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,ss.z,0,-ss.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-ss.y,ss.x,0];return!Ml(t,Ls,Fs,Ps,wo)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Ls,Fs,Ps,wo))?!1:(Bo.crossVectors(Gi,Hi),t=[Bo.x,Bo.y,Bo.z],Ml(t,Ls,Fs,Ps,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Vn=new ee,bo=new es,Ls=new ee,Fs=new ee,Ps=new ee,Gi=new ee,Hi=new ee,ss=new ee,Sr=new ee,wo=new ee,Bo=new ee,rs=new ee;function Ml(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){rs.fromArray(n,r);const a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),c=e.dot(rs),l=t.dot(rs),d=i.dot(rs);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Li=g0();function g0(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,s[c]=24,s[c|256]=24):(i[c]=31744,i[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,d=0;for(;(l&8388608)===0;)l<<=1,d-=8388608;l&=-8388609,d+=947912704,r[c]=l|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function E0(n){Math.abs(n)>65504&&tt("DataUtils.toHalfFloat(): Value out of range."),n=ft(n,-65504,65504),Li.floatView[0]=n;const e=Li.uint32View[0],t=e>>23&511;return Li.baseTable[t]+((e&8388607)>>Li.shiftTable[t])}function v0(n){const e=n>>10;return Li.uint32View[0]=Li.mantissaTable[Li.offsetTable[e]+(n&1023)]+Li.exponentTable[e],Li.floatView[0]}class Le{static toHalfFloat(e){return E0(e)}static fromHalfFloat(e){return v0(e)}}const Gt=new ee,To=new ct;let _0=0;class Xt extends Cs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Og,this.updateRanges=[],this.gpuType=qt,this.version=0,this._normalizationScale=e!==void 0?cu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hh(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ah(e,this.array)}}class Eh extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vh extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sn extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const x0=new es,Cr=new ee,Il=new ee;class ys{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):x0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Il)),this.expandByPoint(Cr.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let S0=0;const Bn=new ut,bl=new tn,Us=new ee,Mn=new es,yr=new es,Zt=new ee;class on extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?vh:Eh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Mn.min,yr.min),Mn.expandByPoint(Zt),Zt.addVectors(Mn.max,yr.max),Mn.expandByPoint(Zt)):(Mn.expandByPoint(yr.min),Mn.expandByPoint(yr.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Zt.fromBufferAttribute(a,l),c&&(Us.fromBufferAttribute(e,l),Zt.add(Us)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Xt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[],l=new Uint8Array(i.count);for(let F=0;F<i.count;F++)a[F]=new ee,c[F]=new ee;const d=new ee,f=new ee,u=new ee,h=new ct,g=new ct,E=new ct,p=new ee,m=new ee;function C(F,D,N){l[F]=l[D]=l[N]=1,d.fromBufferAttribute(i,F),f.fromBufferAttribute(i,D),u.fromBufferAttribute(i,N),h.fromBufferAttribute(r,F),g.fromBufferAttribute(r,D),E.fromBufferAttribute(r,N),f.sub(d),u.sub(d),g.sub(h),E.sub(h);const k=1/(g.x*E.y-E.x*g.y);isFinite(k)&&(p.copy(f).multiplyScalar(E.y).addScaledVector(u,-g.y).multiplyScalar(k),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-E.x).multiplyScalar(k),a[F].add(p),a[D].add(p),a[N].add(p),c[F].add(m),c[D].add(m),c[N].add(m))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let F=0,D=I.length;F<D;++F){const N=I[F],k=N.start,V=N.count;for(let L=k,Q=k+V;L<Q;L+=3)C(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new ee,b=new ee,y=new ee,_=new ee;function M(F){y.fromBufferAttribute(s,F),_.copy(y);const D=a[F];S.copy(D),S.sub(y.multiplyScalar(y.dot(D))).normalize(),b.crossVectors(_,D);const k=b.dot(c[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,k)}for(let F=0,D=i.count;F<D;++F)l[F]&&M(F);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const s=new ee,r=new ee,o=new ee,a=new ee,c=new ee,l=new ee,d=new ee,f=new ee;if(e)for(let u=0,h=e.count;u<h;u+=3){const g=e.getX(u+0),E=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,p),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,E),l.fromBufferAttribute(i,p),a.add(d),c.add(d),l.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,f=a.normalized,u=new l.constructor(c.length*d);let h=0,g=0;for(let E=0,p=c.length;E<p;E++){a.isInterleavedBufferAttribute?h=c[E]*a.data.stride+a.offset:h=c[E]*d;for(let m=0;m<d;m++)u[g++]=l[h++]}return new Xt(u,d,f)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){const u=l[d],h=e(u,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],f=r[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new ee,C0=new ee,y0=new rt;class Ri{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=wl.subVectors(i,t).cross(C0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||y0.getNormalMatrix(e),s=this.coplanarPoint(wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let M0=0;class fr extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Hr,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=Kf,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new ee,Bl=new ee,Ro=new ee,Do=new ee;class hu{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bl.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),Do.copy(this.origin).sub(Bl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=Do.dot(this.direction),c=-Do.dot(Ro),l=Do.lengthSq(),d=Math.abs(1-o*o);let f,u,h,g;if(d>0)if(f=o*c-a,u=o*a-c,g=r*d,f>=0)if(u>=-g)if(u<=g){const E=1/d;f*=E,u*=E,h=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),h=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bl).addScaledVector(Ro,u),h}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,u=e.y-o.y,h=e.z-o.z,g=t.x-o.x,E=t.y-o.y,p=t.z-o.z,m=i.x-o.x,C=i.y-o.y,I=i.z-o.z,S=Math.abs(c),b=Math.abs(l),y=Math.abs(d);let _,M,F,D,N,k,V,L,Q,W,H,J;if(S>=b&&S>=y?(F=c,k=f,Q=g,J=m,c>=0?(_=l,M=d,D=u,N=h,V=E,L=p,W=C,H=I):(_=d,M=l,D=h,N=u,V=p,L=E,W=I,H=C)):b>=y?(F=l,k=u,Q=E,J=C,l>=0?(_=d,M=c,D=h,N=f,V=p,L=g,W=I,H=m):(_=c,M=d,D=f,N=h,V=g,L=p,W=m,H=I)):(F=d,k=h,Q=p,J=I,d>=0?(_=c,M=l,D=f,N=u,V=g,L=E,W=m,H=C):(_=l,M=c,D=u,N=f,V=E,L=g,W=C,H=m)),F===0)return null;const z=_/F,K=M/F,Z=1/F,le=D-z*k,Ae=N-K*k,q=V-z*Q,de=L-K*Q,xe=W-z*J,Ge=H-K*J,he=xe*de-Ge*q,Ne=le*Ge-Ae*xe,ze=q*Ae-de*le;if(s){if(he<0||Ne<0||ze<0)return null}else if((he<0||Ne<0||ze<0)&&(he>0||Ne>0||ze>0))return null;const Qe=he+Ne+ze;if(Qe===0)return null;const Ze=Z*(he*k+Ne*Q+ze*J);return(Qe>0?Ze<0:Ze>0)?null:this.at(Ze/Qe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Au extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ju=new ut,os=new hu,Lo=new ys,Zu=new ee,Fo=new ee,Po=new ee,Uo=new ee,Tl=new ee,No=new ee,ju=new ee,Oo=new ee;class fn extends tn{constructor(e=new on,t=new Au){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=a[c],f=r[c];d!==0&&(Tl.fromBufferAttribute(f,e),o?No.addScaledVector(Tl,d):No.addScaledVector(Tl.sub(t),d))}t.add(No)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(Lo.containsPoint(os.origin)===!1&&(os.intersectSphere(Lo,Zu)===null||os.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&(Ju.copy(r).invert(),os.copy(e.ray).applyMatrix4(Ju),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){const p=u[g],m=o[p.materialIndex],C=Math.max(p.start,h.start),I=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let S=C,b=I;S<b;S+=3){const y=a.getX(S),_=a.getX(S+1),M=a.getX(S+2);s=Qo(this,m,e,i,l,d,f,y,_,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),E=Math.min(a.count,h.start+h.count);for(let p=g,m=E;p<m;p+=3){const C=a.getX(p),I=a.getX(p+1),S=a.getX(p+2);s=Qo(this,o,e,i,l,d,f,C,I,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){const p=u[g],m=o[p.materialIndex],C=Math.max(p.start,h.start),I=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let S=C,b=I;S<b;S+=3){const y=S,_=S+1,M=S+2;s=Qo(this,m,e,i,l,d,f,y,_,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),E=Math.min(c.count,h.start+h.count);for(let p=g,m=E;p<m;p+=3){const C=p,I=p+1,S=p+2;s=Qo(this,o,e,i,l,d,f,C,I,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function I0(n,e,t,i,s,r,o,a){let c;if(e.side===vn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===vs,a),c===null)return null;Oo.copy(a),Oo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Oo);return l<t.near||l>t.far?null:{distance:l,point:Oo.clone(),object:n}}function Qo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Fo),n.getVertexPosition(c,Po),n.getVertexPosition(l,Uo);const d=I0(n,e,t,i,Fo,Po,Uo,ju);if(d){const f=new ee;jn.getBarycoord(ju,Fo,Po,Uo,f),s&&(d.uv=jn.getInterpolatedAttribute(s,a,c,l,f,new ct)),r&&(d.uv1=jn.getInterpolatedAttribute(r,a,c,l,f,new ct)),o&&(d.normal=jn.getInterpolatedAttribute(o,a,c,l,f,new ee),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new ee,materialIndex:0};jn.getNormal(Fo,Po,Uo,u.normal),d.face=u,d.barycoord=f}return d}class _i extends rn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Wt,d=Wt,f,u){super(null,o,a,c,l,d,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends Xt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new ut,ed=new ut,ko=[],td=new es,b0=new ut,Mr=new fn,Ir=new ys;class ji extends fn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,b0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),td.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(td)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),Ir.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(i),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),ed.multiplyMatrices(i,Ns),Mr.matrixWorld=ed,Mr.raycast(e,ko);for(let o=0,a=ko.length;o<a;o++){const c=ko[o];c.instanceId=r,c.object=this,t.push(c)}ko.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(s*this.count),s,this.count,On,qt));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const as=new ys,w0=new ct(.5,.5),Go=new ee;class so{constructor(e=new Ri,t=new Ri,i=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],u=r[6],h=r[7],g=r[8],E=r[9],p=r[10],m=r[11],C=r[12],I=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-o,h-d,m-g,b-C).normalize(),s[1].setComponents(l+o,h+d,m+g,b+C).normalize(),s[2].setComponents(l+a,h+f,m+E,b+I).normalize(),s[3].setComponents(l-a,h-f,m-E,b-I).normalize(),i)s[4].setComponents(c,u,p,S).normalize(),s[5].setComponents(l-c,h-u,m-p,b-S).normalize();else if(s[4].setComponents(l-c,h-u,m-p,b-S).normalize(),t===ni)s[5].setComponents(l+c,h+u,m+p,b+S).normalize();else if(t===no)s[5].setComponents(c,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=w0.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Go.x=s.normal.x>0?e.max.x:e.min.x,Go.y=s.normal.y>0?e.max.y:e.min.y,Go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const nd=new ut;class pu{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];nd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new so),i[s].setFromProjectionMatrix(nd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new so),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new pu().copy(this)}}class B0 extends fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const id=new ut,Nc=new hu,Ho=new ys,zo=new ee;class _h extends tn{constructor(e=new on,t=new B0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;id.copy(s).invert(),Nc.copy(e.ray).applyMatrix4(id);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=u,E=h;g<E;g++){const p=l.getX(g);zo.fromBufferAttribute(f,p),sd(zo,p,c,s,e,t,this)}}else{const u=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=u,E=h;g<E;g++)zo.fromBufferAttribute(f,g),sd(zo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sd(n,e,t,i,s,r,o){const a=Nc.distanceSqToPoint(n);if(a<t){const c=new ee;Nc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class qa extends rn{constructor(e=[],t,i,s,r,o,a,c,l,d,f,u){super(null,o,a,c,l,d,s,r,f,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class T0 extends qa{constructor(e,t,i,s,r,o){super(e,t,i,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Sn,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xh extends qa{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,_s),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Sh extends rn{constructor(e=[],t=_s,i,s,r,o,a,c,l,d){super(e,t,i,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ch extends rn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ss extends rn{constructor(e,t,i=ii,s,r,o,a=Wt,c=Wt,l,d=Ji,f=1){if(d!==Ji&&d!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class yh extends Ss{constructor(e,t=ii,i=_s,s,r,o=Wt,a=Wt,c,l=Ji){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mh extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hr extends on{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],f=[];let u=0,h=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(f,2));function g(E,p,m,C,I,S,b,y,_,M,F){const D=S/_,N=b/M,k=S/2,V=b/2,L=y/2,Q=_+1,W=M+1;let H=0,J=0;const z=new ee;for(let K=0;K<W;K++){const Z=K*N-V;for(let le=0;le<Q;le++){const Ae=le*D-k;z[E]=Ae*C,z[p]=Z*I,z[m]=L,l.push(z.x,z.y,z.z),z[E]=0,z[p]=0,z[m]=y>0?1:-1,d.push(z.x,z.y,z.z),f.push(le/_),f.push(1-K/M),H+=1}}for(let K=0;K<M;K++)for(let Z=0;Z<_;Z++){const le=u+Z+Q*K,Ae=u+Z+Q*(K+1),q=u+(Z+1)+Q*(K+1),de=u+(Z+1)+Q*K;c.push(le,Ae,de),c.push(Ae,q,de),J+=6}a.addGroup(h,J,F),h+=J,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xi extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,d=c+1,f=e/a,u=t/c,h=[],g=[],E=[],p=[];for(let m=0;m<d;m++){const C=m*u-o;for(let I=0;I<l;I++){const S=I*f-r;g.push(S,-C,0),E.push(0,0,1),p.push(I/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let C=0;C<a;C++){const I=C+l*m,S=C+l*(m+1),b=C+1+l*(m+1),y=C+1+l*m;h.push(I,S,y),h.push(S,b,y)}this.setIndex(h),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(E,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(rd(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(rd(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const s in i)e[s]=i[s]}return e}function rd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function R0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ih(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const bh={clone:lr,merge:gn};var D0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=R0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(s.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[i].value=new ee().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Qt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class F0 extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ir extends fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wh extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P0 extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const od={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(ad(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!ad(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function ad(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class U0{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){const f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=l.length;f<u;f+=2){const h=l[f],g=l[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const N0=new U0;class Xa{constructor(e){this.manager=e!==void 0?e:N0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Xa.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class O0 extends Error{constructor(e,t){super(e),this.response=t}}class fa extends Xa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=od.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:i,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=wi[e],f=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=u?parseInt(u):0,g=h!==0;let E=0;const p=new ReadableStream({start(m){C();function C(){f.read().then(({done:I,value:S})=>{if(I)m.close();else{E+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:E,total:h});for(let y=0,_=d.length;y<_;y++){const M=d[y];M.onProgress&&M.onProgress(b)}m.enqueue(S),C()}},I=>{m.error(I)})}}});return new Response(p)}else throw new O0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(u);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{od.add(`file:${e}`,l);const d=wi[e];delete wi[e];for(let f=0,u=d.length;f<u;f++){const h=d[f];h.onLoad&&h.onLoad(l)}}).catch(l=>{const d=wi[e];if(d===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let f=0,u=d.length;f<u;f++){const h=d[f];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Q0 extends Xa{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new _i,a=new fa(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(d){s!==void 0?s(d):mt(d);return}r._applyTexData(o,l),t&&t(o,l)},i,s),o}createDataTexture(e){const t=new _i;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Sn,e.wrapT=t.wrapT!==void 0?t.wrapT:Sn,e.magFilter=t.magFilter!==void 0?t.magFilter:Rt,e.minFilter=t.minFilter!==void 0?t.minFilter:Rt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=In),t.mipmapCount===1&&(e.minFilter=Rt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class Bh extends tn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class k0 extends Bh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Rl=new ut,ld=new ee,cd=new ee;class G0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=it,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Rl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===no||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vo=new ee,Wo=new si,ci=new ee;class Th extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vo,Wo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Vo,Wo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new ee,ud=new ct,dd=new ct;class $n extends Th{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,ud,dd),t.subVectors(dd,ud)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ya extends Th{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class H0 extends G0{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z0 extends Bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new H0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Os=-90,Qs=1;class Oc extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $n(Os,Qs,e,t);s.layers=this.layers,this.add(s);const r=new $n(Os,Qs,e,t);r.layers=this.layers,this.add(r);const o=new $n(Os,Qs,e,t);o.layers=this.layers,this.add(o);const a=new $n(Os,Qs,e,t);a.layers=this.layers,this.add(a);const c=new $n(Os,Qs,e,t);c.layers=this.layers,this.add(c);const l=new $n(Os,Qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=E,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class V0 extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const fd=new ut;class Rh{constructor(e,t,i=0,s=1/0){this.ray=new hu(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new du,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fd),this}intersectObject(e,t=!0,i=[]){return Qc(e,this,i,t),i.sort(hd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Qc(e[s],this,i,t);return i.sort(hd),i}}function hd(n,e){return n.distance-e.distance}function Qc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Qc(r[o],e,t,!0)}}function Ad(n,e,t,i){const s=W0(i);switch(t){case ah:return n*e;case On:return n*e/s.components*s.byteLength;case su:return n*e/s.components*s.byteLength;case nn:return n*e*2/s.components*s.byteLength;case ru:return n*e*2/s.components*s.byteLength;case $r:return n*e*3/s.components*s.byteLength;case It:return n*e*4/s.components*s.byteLength;case ou:return n*e*4/s.components*s.byteLength;case er:case hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ua:case As:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xc:case Jr:return Math.max(n,16)*Math.max(e,8)/4;case Ca:case or:return Math.max(n,8)*Math.max(e,8)/2;case ya:case Zr:case Ma:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jr:case eo:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ar:case Fc:case wa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ba:case Ta:return Math.ceil(n/4)*Math.ceil(e/4)*8;case to:case Ra:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function W0(n){switch(n){case it:case rh:return{byteLength:1,components:1};case xs:case oh:case Tt:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case ii:case tu:case qt:return{byteLength:4,components:1};case Va:case Wa:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);function Dh(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function q0(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,d),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const d=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,d);else{f.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<f.length;h++){const g=f[u],E=f[h];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,f[u]=E)}f.length=u+1;for(let h=0,g=f.length;h<g;h++){const E=f[h];n.bufferSubData(l,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,OE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,QE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,KE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ov=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:X0,alphahash_pars_fragment:Y0,alphamap_fragment:K0,alphamap_pars_fragment:$0,alphatest_fragment:J0,alphatest_pars_fragment:Z0,aomap_fragment:j0,aomap_pars_fragment:eE,batching_pars_vertex:tE,batching_vertex:nE,begin_vertex:iE,beginnormal_vertex:sE,bsdfs:rE,iridescence_fragment:oE,bumpmap_pars_fragment:aE,clipping_planes_fragment:lE,clipping_planes_pars_fragment:cE,clipping_planes_pars_vertex:uE,clipping_planes_vertex:dE,color_fragment:fE,color_pars_fragment:hE,color_pars_vertex:AE,color_vertex:pE,common:mE,defaultnormal_vertex:gE,displacementmap_pars_vertex:EE,displacementmap_vertex:vE,emissivemap_fragment:_E,emissivemap_pars_fragment:xE,colorspace_fragment:SE,colorspace_pars_fragment:CE,envmap_fragment:yE,envmap_common_pars_fragment:ME,envmap_pars_fragment:IE,envmap_pars_vertex:bE,envmap_physical_pars_fragment:OE,envmap_vertex:wE,fog_vertex:BE,fog_pars_vertex:TE,fog_fragment:RE,fog_pars_fragment:DE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:FE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:UE,lights_pars_begin:NE,lights_toon_fragment:QE,lights_toon_pars_fragment:kE,lights_phong_fragment:GE,lights_phong_pars_fragment:HE,lights_physical_fragment:zE,lights_physical_pars_fragment:VE,lights_fragment_begin:WE,lights_fragment_maps:qE,lights_fragment_end:XE,lightprobes_pars_fragment:YE,logdepthbuf_fragment:KE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:JE,logdepthbuf_vertex:ZE,map_fragment:jE,map_pars_fragment:ev,map_particle_fragment:tv,map_particle_pars_fragment:nv,metalnessmap_fragment:iv,metalnessmap_pars_fragment:sv,morphinstance_vertex:rv,morphcolor_vertex:ov,morphnormal_vertex:av,morphtarget_pars_vertex:lv,morphtarget_vertex:cv,normal_fragment_begin:uv,normal_fragment_maps:dv,normal_pars_fragment:fv,normal_pars_vertex:hv,normal_vertex:Av,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:gv,clearcoat_pars_fragment:Ev,iridescence_pars_fragment:vv,opaque_fragment:_v,packing:xv,premultiplied_alpha_fragment:Sv,project_vertex:Cv,dithering_fragment:yv,dithering_pars_fragment:Mv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:bv,shadowmap_pars_fragment:wv,shadowmap_pars_vertex:Bv,shadowmap_vertex:Tv,shadowmask_pars_fragment:Rv,skinbase_vertex:Dv,skinning_pars_vertex:Lv,skinning_vertex:Fv,skinnormal_vertex:Pv,specularmap_fragment:Uv,specularmap_pars_fragment:Nv,tonemapping_fragment:Ov,tonemapping_pars_fragment:Qv,transmission_fragment:kv,transmission_pars_fragment:Gv,uv_pars_fragment:Hv,uv_pars_vertex:zv,uv_vertex:Vv,worldpos_vertex:Wv,background_vert:qv,background_frag:Xv,backgroundCube_vert:Yv,backgroundCube_frag:Kv,cube_vert:$v,cube_frag:Jv,depth_vert:Zv,depth_frag:jv,distance_vert:e_,distance_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:o_,meshbasic_frag:a_,meshlambert_vert:l_,meshlambert_frag:c_,meshmatcap_vert:u_,meshmatcap_frag:d_,meshnormal_vert:f_,meshnormal_frag:h_,meshphong_vert:A_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:E_,meshtoon_frag:v_,points_vert:__,points_frag:x_,shadow_vert:S_,shadow_frag:C_,sprite_vert:y_,sprite_frag:M_},Oe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},hi={basic:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:gn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:gn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new He(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:gn([Oe.points,Oe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:gn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:gn([Oe.common,Oe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:gn([Oe.sprite,Oe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:gn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:gn([Oe.lights,Oe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};hi.physical={uniforms:gn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const qo={r:0,b:0,g:0},I_=new ut,Lh=new rt;Lh.set(-1,0,0,0,1,0,0,0,1);function b_(n,e,t,i,s,r){const o=new He(0);let a=s===!0?0:1,c,l,d=null,f=0,u=null;function h(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){const S=C.backgroundBlurriness>0;I=e.get(I,S)}return I}function g(C){let I=!1;const S=h(C);S===null?p(o,a):S&&S.isColor&&(p(S,1),I=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(C,I){const S=h(I);S&&S.isCubeTexture?(l===void 0&&(l=new fn(new hr(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:lr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,y,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(I.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lh),l.material.toneMapped=ht.getTransfer(S.colorSpace)!==vt,(d!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new fn(new xi(2,2),new Gn({name:"BackgroundMaterial",uniforms:lr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=ht.getTransfer(S.colorSpace)!==vt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function p(C,I){C.getRGB(qo,Ih(n)),t.buffers.color.setClear(qo.r,qo.g,qo.b,I,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,I=1){o.set(C),a=I,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,p(o,a)},render:g,addToRenderList:E,dispose:m}}function w_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(N,k,V,L,Q){let W=!1;const H=f(N,L,V,k);r!==H&&(r=H,l(r.object)),W=h(N,L,V,Q),W&&g(N,L,V,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(N,k,V,L),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function d(N){return n.deleteVertexArray(N)}function f(N,k,V,L){const Q=L.wireframe===!0;let W=i[k.id];W===void 0&&(W={},i[k.id]=W);const H=N.isInstancedMesh===!0?N.id:0;let J=W[H];J===void 0&&(J={},W[H]=J);let z=J[V.id];z===void 0&&(z={},J[V.id]=z);let K=z[Q];return K===void 0&&(K=u(c()),z[Q]=K),K}function u(N){const k=[],V=[],L=[];for(let Q=0;Q<t;Q++)k[Q]=0,V[Q]=0,L[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:L,object:N,attributes:{},index:null}}function h(N,k,V,L){const Q=r.attributes,W=k.attributes;let H=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){const Z=Q[z];let le=W[z];if(le===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(N,k,V,L){const Q={},W=k.attributes;let H=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){let Z=W[z];Z===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),Q[z]=le,H++}r.attributes=Q,r.attributesNum=H,r.index=L}function E(){const N=r.newAttributes;for(let k=0,V=N.length;k<V;k++)N[k]=0}function p(N){m(N,0)}function m(N,k){const V=r.newAttributes,L=r.enabledAttributes,Q=r.attributeDivisors;V[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),Q[N]!==k&&(n.vertexAttribDivisor(N,k),Q[N]=k)}function C(){const N=r.newAttributes,k=r.enabledAttributes;for(let V=0,L=k.length;V<L;V++)k[V]!==N[V]&&(n.disableVertexAttribArray(V),k[V]=0)}function I(N,k,V,L,Q,W,H){H===!0?n.vertexAttribIPointer(N,k,V,Q,W):n.vertexAttribPointer(N,k,V,L,Q,W)}function S(N,k,V,L){E();const Q=L.attributes,W=V.getAttributes(),H=k.defaultAttributeValues;for(const J in W){const z=W[J];if(z.location>=0){let K=Q[J];if(K===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){const Z=K.normalized,le=K.itemSize,Ae=e.get(K);if(Ae===void 0)continue;const q=Ae.buffer,de=Ae.type,xe=Ae.bytesPerElement,Ge=de===n.INT||de===n.UNSIGNED_INT||K.gpuType===tu;if(K.isInterleavedBufferAttribute){const he=K.data,Ne=he.isInterleavedBuffer===!0?he.stride:he.itemSize,ze=K.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Qe=0;Qe<z.locationSize;Qe++)m(z.location+Qe,he.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Qe=0;Qe<z.locationSize;Qe++)p(z.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Qe=0;Qe<z.locationSize;Qe++)I(z.location+Qe,le/z.locationSize,de,Z,Ne*xe,(ze+le/z.locationSize*Qe)*xe,Ge)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)m(z.location+he,K.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<z.locationSize;he++)p(z.location+he);n.bindBuffer(n.ARRAY_BUFFER,q);for(let he=0;he<z.locationSize;he++)I(z.location+he,le/z.locationSize,de,Z,le*xe,le/z.locationSize*he*xe,Ge)}}else if(H!==void 0){const Z=H[J];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(z.location,Z);break;case 3:n.vertexAttrib3fv(z.location,Z);break;case 4:n.vertexAttrib4fv(z.location,Z);break;default:n.vertexAttrib1fv(z.location,Z)}}}}C()}function b(){F();for(const N in i){const k=i[N];for(const V in k){const L=k[V];for(const Q in L){const W=L[Q];for(const H in W)d(W[H].object),delete W[H];delete L[Q]}}delete i[N]}}function y(N){if(i[N.id]===void 0)return;const k=i[N.id];for(const V in k){const L=k[V];for(const Q in L){const W=L[Q];for(const H in W)d(W[H].object),delete W[H];delete L[Q]}}delete i[N.id]}function _(N){for(const k in i){const V=i[k];for(const L in V){const Q=V[L];if(Q[N.id]===void 0)continue;const W=Q[N.id];for(const H in W)d(W[H].object),delete W[H];delete Q[N.id]}}}function M(N){for(const k in i){const V=i[k],L=N.isInstancedMesh===!0?N.id:0,Q=V[L];if(Q!==void 0){for(const W in Q){const H=Q[W];for(const J in H)d(H[J].object),delete H[J];delete Q[W]}delete V[L],Object.keys(V).length===0&&delete i[k]}}}function F(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:E,enableAttribute:p,disableUnusedAttributes:C}}function B_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let u=0;for(let h=0;h<d;h++)u+=l[h];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function T_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==It&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const M=_===Tt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==it&&_!==qt&&!M&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(tt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:S,maxSamples:b,samples:y}}function R_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ri,a=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||i!==0||s;return s=u,i=f.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const g=f.clippingPlanes,E=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?d(null):l();else{const C=r?0:i,I=C*4;let S=m.clippingState||null;c.value=S,S=d(g,u,I,h);for(let b=0;b!==I;++b)S[b]=t[b];m.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,h,g){const E=f!==null?f.length:0;let p=null;if(E!==0){if(p=c.value,g!==!0||p===null){const m=h+E*4,C=u.matrixWorldInverse;a.getNormalMatrix(C),(p===null||p.length<m)&&(p=new Float32Array(m));for(let I=0,S=h;I!==E;++I,S+=4)o.copy(f[I]).applyMatrix4(C,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}class mu extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Sh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hr(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:js});r.uniforms.tEquirect.value=t;const o=new fn(s,r),a=t.minFilter;return t.minFilter===In&&(t.minFilter=Rt),new Oc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const pd=256,D_=3,L_=20,Fh=256,Ph=16,F_=3,P_=new ee,U_=new He;class ro{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Oc(1,10,null),this._boxMesh=new fn(new hr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=P_}=r,c=this._renderer;this._setSize(o);const l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,u=c.autoClearColor,h=c.autoClearDepth,g=c.autoClearStencil,E=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,E===null&&(e.background=c.getClearColor(U_));const p=new Oc(i,s,d);return p.position.copy(a),p.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=h,c.autoClearStencil=g,e.background=E,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(pd,fh(e))}_fromTexture(e,t){e.mapping===_s||e.mapping===Kr?this._setSize(e.image.length===0?pd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=md(e,!1,!1),i=Math.log2(e)-D_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=md(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_s||e.mapping===Kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=N_(),this._integrationMaterial=O_());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ph);for(let o=0;o<=i;o++){const a=ro.lodToRoughness(o,i);if(o>i-F_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const c=a>0?Math.log2(t)+.5*Math.log2(6/(Fh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Q_());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function md(n,e,t){return new mu(n,{minFilter:In,generateMipmaps:e,type:Tt,colorSpace:Ln,depthBuffer:t})}function co(n,e,t){return new Gn({name:n,uniforms:e,vertexShader:lt.cube_vert,fragmentShader:t,side:vn,blending:js,depthTest:!1,depthWrite:!1})}function N_(){return co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function O_(){return co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ph}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Q_(){return co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${L_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function gd(){return co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ed(){return co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function k_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,h=!1){return u==null?null:h?o(u):r(u)}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===al||h===ll)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const E=new mu(g.height);return E.fromEquirectangularTexture(n,u),e.set(u,E),u.addEventListener("dispose",l),a(E.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const h=u.mapping,g=h===al||h===ll,E=h===_s||h===Kr;if(g||E){let p=t.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new ro(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const C=u.image;return g&&C&&C.height>0||E&&C&&c(C)?(i===null&&(i=new ro(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function a(u,h){return h===al?u.mapping=_s:h===ll&&(u.mapping=Kr),u}function c(u){let h=0;const g=6;for(let E=0;E<g;E++)u[E]!==void 0&&h++;return h===g}function l(u){const h=u.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function G_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&da("WebGLRenderer: "+i+" extension not supported."),s}}}function H_(n,e,t,i){const s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);const E=r.get(g);E&&(e.remove(E),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,E){return s[E.id]!==void 0||(E.addEventListener("dispose",a),s[E.id]=new WeakRef(E),o.register(E,E.id,E),t.memory.geometries++),E}function d(g){const E=g.attributes;for(const p in E)e.update(E[p],n.ARRAY_BUFFER)}function f(g){const E=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const C=E!==null?E.array.length:p.array.length/3-1,I=p.count>=65535?vh:Eh,S=new I(Math.ceil(C/3)*6,1),b=S.array;if(E!==null){const _=E.array;m=E.version;for(let M=0,F=0;M<C;M+=3){const D=_[M+0],N=_[M+1],k=_[M+2];b[F++]=D,b[F++]=N,b[F++]=N,b[F++]=k,b[F++]=k,b[F++]=D}}else{m=p.version;for(let _=0,M=0;_<C;_+=3){const F=_+0,D=_+1,N=_+2;b[M++]=F,b[M++]=D,b[M++]=D,b[M++]=N,b[M++]=N,b[M++]=F}}S.version=m;const y=r.get(g);y&&e.remove(y),r.set(g,S)}function u(g){const E=r.get(g);if(E){const p=g.index;p!==null&&E.version<p.version&&f(g)}else f(g);return r.get(g)}function h(){for(const g in s){const E=s[g].deref();E!==void 0&&c(E)}}return{get:l,update:d,getWireframeAttribute:u,dispose:h}}function z_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function l(f,u,h){h!==0&&(n.drawElementsInstanced(i,u,r,f*o,h),t.update(u,i,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,h);let E=0;for(let p=0;p<h;p++)E+=u[p];t.update(E,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function V_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function W_(n,e,t){const i=new WeakMap,s=new Qt;function r(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let F=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let I=0;h===!0&&(I=1),g===!0&&(I=2),E===!0&&(I=3);let S=a.attributes.position.count*I,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const y=new Float32Array(S*b*4*f),_=new ph(y,S,b,f);_.type=qt,_.needsUpdate=!0;const M=I*4;for(let D=0;D<f;D++){const N=p[D],k=m[D],V=C[D],L=S*b*4*D;for(let Q=0;Q<N.count;Q++){const W=Q*M;h===!0&&(s.fromBufferAttribute(N,Q),y[L+W+0]=s.x,y[L+W+1]=s.y,y[L+W+2]=s.z,y[L+W+3]=0),g===!0&&(s.fromBufferAttribute(k,Q),y[L+W+4]=s.x,y[L+W+5]=s.y,y[L+W+6]=s.z,y[L+W+7]=0),E===!0&&(s.fromBufferAttribute(V,Q),y[L+W+8]=s.x,y[L+W+9]=s.y,y[L+W+10]=s.z,y[L+W+11]=V.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new ct(S,b)},i.set(a,u),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let E=0;E<l.length;E++)h+=l[E];const g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function q_(n,e,t,i,s){let r=new WeakMap;function o(l){const d=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function a(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}const X_={[Jf]:"LINEAR_TONE_MAPPING",[Zf]:"REINHARD_TONE_MAPPING",[jf]:"CINEON_TONE_MAPPING",[eu]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[nh]:"NEUTRAL_TONE_MAPPING",[eh]:"CUSTOM_TONE_MAPPING"};function Y_(n,e,t,i,s,r){const o=new Cn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null,l=null;const d=new on;d.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new sn([0,2,0,0,2,0],2));const f=new F0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new fn(d,f),h=new Ya(-1,1,1,-1,0,1);let g=null,E=null,p=!1,m,C=null,I=[],S=!1;this.setSize=function(b,y){o.setSize(b,y),a!==null&&a.setSize(b,y),c!==null&&c.setSize(b,y);for(let _=0;_<I.length;_++){const M=I[_];M.setSize&&M.setSize(b,y)}},this.setEffects=function(b){I=b,S=I.length>0&&I[0].isRenderPass===!0;const y=o.width,_=o.height;I.length>0&&a===null&&(a=new Cn(y,_,{type:Tt,depthBuffer:!1,stencilBuffer:!1}),c=new Cn(y,_,{type:Tt,depthBuffer:!1,stencilBuffer:!1}));const M=s===!0&&I.some(F=>F.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new Ss(y,_),r===!0&&(l.format=Yi,l.type=rr)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let F=0;F<I.length;F++){const D=I[F];D.setSize&&D.setSize(y,_),M&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(l)}},this.begin=function(b,y){if(p||b.toneMapping===Pi&&I.length===0)return!1;if(C=y,y!==null){const _=y.width,M=y.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return S===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=Pi,!0},this.hasRenderPass=function(){return S},this.end=function(b,y){b.toneMapping=m,p=!0;let _=o,M=a;for(let F=0;F<I.length;F++){const D=I[F];D.enabled!==!1&&(D.render(b,M,_,y),D.needsSwap!==!1&&(_=M,M=M===a?c:a))}if(g!==b.outputColorSpace||E!==b.toneMapping){g=b.outputColorSpace,E=b.toneMapping,f.defines={},ht.getTransfer(g)===vt&&(f.defines.SRGB_TRANSFER="");const F=X_[E];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(C),b.render(u,h),C=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}const Uh=new rn,Nh=new Ss(1,1),Oh=new yh(1),Qh=new ph,kh=new mh,Gh=new Sh,vd=[],_d=[],xd=new Float32Array(16),Sd=new Float32Array(9),Cd=new Float32Array(4);function Ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ka(n,e){let t=_d[e];t===void 0&&(t=new Int32Array(e),_d[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function K_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function Z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function j_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;Cd.set(i),n.uniformMatrix2fv(this.addr,!1,Cd),Kt(t,i)}}function ex(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;Sd.set(i),n.uniformMatrix3fv(this.addr,!1,Sd),Kt(t,i)}}function tx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;xd.set(i),n.uniformMatrix4fv(this.addr,!1,xd),Kt(t,i)}}function nx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function ox(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function $a(n){return n.version===0&&(n.compareFunction=uh,n.needsUpdate=!0),n}function ux(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=$a(Nh):r=Uh,t.setTexture2D(e||r,s)}function dx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||kh,s)}function fx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=$a(Oh):r=Gh,t.setTextureCube(e||r,s)}function hx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qh,s)}function Ax(n){switch(n){case 5126:return K_;case 35664:return $_;case 35665:return J_;case 35666:return Z_;case 35674:return j_;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return hx}}function px(n,e){n.uniform1fv(this.addr,e)}function mx(n,e){const t=Ar(e,this.size,2);n.uniform2fv(this.addr,t)}function gx(n,e){const t=Ar(e,this.size,3);n.uniform3fv(this.addr,t)}function Ex(n,e){const t=Ar(e,this.size,4);n.uniform4fv(this.addr,t)}function vx(n,e){const t=Ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _x(n,e){const t=Ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xx(n,e){const t=Ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sx(n,e){n.uniform1iv(this.addr,e)}function Cx(n,e){n.uniform2iv(this.addr,e)}function yx(n,e){n.uniform3iv(this.addr,e)}function Mx(n,e){n.uniform4iv(this.addr,e)}function Ix(n,e){n.uniform1uiv(this.addr,e)}function bx(n,e){n.uniform2uiv(this.addr,e)}function wx(n,e){n.uniform3uiv(this.addr,e)}function Bx(n,e){n.uniform4uiv(this.addr,e)}function Tx(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=$a(Nh):o=Uh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Rx(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kh,r[o])}function Dx(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=$a(Oh):o=Gh;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Lx(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qh,r[o])}function Fx(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return Ex;case 35674:return vx;case 35675:return _x;case 35676:return xx;case 5124:case 35670:return Sx;case 35667:case 35671:return Cx;case 35668:case 35672:return yx;case 35669:case 35673:return Mx;case 5125:return Ix;case 36294:return bx;case 36295:return wx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Lx}}class Px{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ax(t.type)}}class Ux{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fx(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function yd(n,e){n.seq.push(e),n.map[e.id]=e}function Ox(n,e,t){const i=n.name,s=i.length;for(Dl.lastIndex=0;;){const r=Dl.exec(i),o=Dl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yd(t,l===void 0?new Px(a,n,e):new Ux(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Nx(a),yd(t,f)),t=f}}}class ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Ox(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Md(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qx=37297;let kx=0;function Gx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Id=new rt;function Hx(n){ht._getMatrix(Id,ht.workingColorSpace,n);const e=`mat3( ${Id.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Da:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Gx(n.getShaderSource(e),a)}else return r}function zx(n,e){const t=Hx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Vx={[Jf]:"Linear",[Zf]:"Reinhard",[jf]:"Cineon",[eu]:"ACESFilmic",[th]:"AgX",[nh]:"Neutral",[eh]:"Custom"};function Wx(n,e){const t=Vx[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xo=new ee;function qx(){ht.getLuminanceCoefficients(Xo);const n=Xo.x.toFixed(4),e=Xo.y.toFixed(4),t=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function Yx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qr(n){return n!==""}function wd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace($x,Jx)}function Jx(n,e){const t=lt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return kc(t)}const Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(n){return n.replace(Zx,jx)}function jx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const eS={[Gr]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function tS(n){return eS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nS={[Kr]:"ENVMAP_MODE_REFRACTION"};function iS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":nS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sS={[$f]:"ENVMAP_BLENDING_MULTIPLY",[bg]:"ENVMAP_BLENDING_MIX",[wg]:"ENVMAP_BLENDING_ADD"};function rS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sS[n.combine]||"ENVMAP_BLENDING_NONE"}function oS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tS(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=iS(t),f=rS(t),u=Xx(t),h=Yx(r),g=s.createProgram();let E,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Qr).join(`
`),E.length>0&&(E+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Qr).join(`
`),p.length>0&&(p+=`
`)):(E=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),p=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,zx("linearToOutputTexel",t.outputColorSpace),qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=kc(o),o=wd(o,t),o=Bd(o,t),a=kc(a),a=wd(a,t),a=Bd(a,t),o=Td(o),a=Td(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,E=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,p=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const C=m+E+o,I=m+p+a,S=Md(s,s.VERTEX_SHADER,C),b=Md(s,s.FRAGMENT_SHADER,I);s.attachShader(g,S),s.attachShader(g,b),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function y(D){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(g)||"",k=s.getShaderInfoLog(S)||"",V=s.getShaderInfoLog(b)||"",L=N.trim(),Q=k.trim(),W=V.trim();let H=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,S,b);else{const z=bd(s,S,"vertex"),K=bd(s,b,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+z+`
`+K)}else L!==""?tt("WebGLProgram: Program Info Log:",L):(Q===""||W==="")&&(J=!1);J&&(D.diagnostics={runnable:H,programLog:L,vertexShader:{log:Q,prefix:E},fragmentShader:{log:W,prefix:p}})}s.deleteShader(S),s.deleteShader(b),_=new ha(s,g),M=Kx(s,g)}let _;this.getUniforms=function(){return _===void 0&&y(this),_};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(g,Qx)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=b,this}let aS=0;class lS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cS(e),t.set(e,i)),i}}class cS{constructor(e){this.id=aS++,this.code=e,this.usedTimes=0}}function uS(n){return n===nn||n===eo||n===to}function dS(n,e,t,i,s,r){const o=new du,a=new lS,c=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,F,D,N,k){const V=D.fog,L=N.geometry,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||Q,W),J=u[_.type];let z=i.precision;_.precision!==null&&(z=i.getMaxPrecision(_.precision),z!==_.precision&&tt("WebGLProgram.getParameters:",_.precision,"not supported, using",z,"instead."));const K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=K!==void 0?K.length:0;let le=0;L.morphAttributes.position!==void 0&&(le=1),L.morphAttributes.normal!==void 0&&(le=2),L.morphAttributes.color!==void 0&&(le=3);let Ae,q,de,xe;if(J){const Pe=hi[J];Ae=Pe.vertexShader,q=Pe.fragmentShader}else{Ae=_.vertexShader,q=_.fragmentShader;const Pe=a.getVertexShaderStage(_),gt=a.getFragmentShaderStage(_);a.update(_,Pe,gt),de=Pe.id,xe=gt.id}const Ge=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,ze=N.isBatchedMesh===!0,Qe=!!_.map,Ze=!!_.matcap,Ke=!!H,$e=Ke&&H.isPMREMTexture===!0,St=!!_.aoMap,wt=!!_.lightMap,$t=!!_.bumpMap&&_.wireframe===!1,Ct=!!_.normalMap,wn=!!_.displacementMap,Pt=!!_.emissiveMap,hn=!!_.metalnessMap,An=!!_.roughnessMap,_n=_.anisotropy>0,X=_.clearcoat>0,pn=_.diffuseRoughness>0,_t=_.dispersion>0,xt=_.retroreflectivity>0,Re=_.iridescence>0,Ut=_.sheen>0,Xe=_.transmission>0,nt=_n&&!!_.anisotropyMap,U=X&&!!_.clearcoatMap,w=X&&!!_.clearcoatNormalMap,te=X&&!!_.clearcoatRoughnessMap,Se=pn&&!!_.diffuseRoughnessMap,fe=Re&&!!_.iridescenceMap,Ie=Re&&!!_.iridescenceThicknessMap,De=Ut&&!!_.sheenColorMap,oe=Ut&&!!_.sheenRoughnessMap,ce=!!_.specularMap,be=!!_.specularColorMap,O=!!_.specularIntensityMap,ae=Xe&&!!_.transmissionMap,ie=Xe&&!!_.thicknessMap,Be=!!_.gradientMap,Ce=!!_.alphaMap,we=_.alphaTest>0,Ve=!!_.alphaHash,ot=!!_.extensions;let ye=Pi;_.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(ye=n.toneMapping);const qe=$e?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,st={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:Ae,fragmentShader:q,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:z,batching:ze,batchingColor:ze&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,outputColorSpace:Ge===null?n.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Qe,matcap:Ze,envMap:Ke,envMapMode:Ke&&H.mapping,envMapPMREM:$e,envMapMaxLod:$e?qe.length-1:null,envMapSize:$e?qe[0].width:null,aoMap:St,lightMap:wt,bumpMap:$t,normalMap:Ct,displacementMap:wn,emissiveMap:Pt,normalMapObjectSpace:Ct&&_.normalMapType===Rg,normalMapTangentSpace:Ct&&_.normalMapType===Pc,packedNormalMap:Ct&&_.normalMapType===Pc&&uS(_.normalMap.format),metalnessMap:hn,roughnessMap:An,anisotropy:_n,anisotropyMap:nt,clearcoat:X,clearcoatMap:U,clearcoatNormalMap:w,clearcoatRoughnessMap:te,diffuseRoughness:pn,diffuseRoughnessMap:Se,dispersion:_t,retroreflection:xt,iridescence:Re,iridescenceMap:fe,iridescenceThicknessMap:Ie,sheen:Ut,sheenColorMap:De,sheenRoughnessMap:oe,specularMap:ce,specularColorMap:be,specularIntensityMap:O,transmission:Xe,transmissionMap:ae,thicknessMap:ie,gradientMap:Be,opaque:_.transparent===!1&&_.blending===Hr&&_.alphaToCoverage===!1,alphaMap:Ce,alphaTest:we,alphaHash:Ve,combine:_.combine,mapUv:Qe&&h(_.map.channel),aoMapUv:St&&h(_.aoMap.channel),lightMapUv:wt&&h(_.lightMap.channel),bumpMapUv:$t&&h(_.bumpMap.channel),normalMapUv:Ct&&h(_.normalMap.channel),displacementMapUv:wn&&h(_.displacementMap.channel),emissiveMapUv:Pt&&h(_.emissiveMap.channel),metalnessMapUv:hn&&h(_.metalnessMap.channel),roughnessMapUv:An&&h(_.roughnessMap.channel),anisotropyMapUv:nt&&h(_.anisotropyMap.channel),clearcoatMapUv:U&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&h(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&h(_.diffuseRoughnessMap.channel),iridescenceMapUv:fe&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:oe&&h(_.sheenRoughnessMap.channel),specularMapUv:ce&&h(_.specularMap.channel),specularColorMapUv:be&&h(_.specularColorMap.channel),specularIntensityMapUv:O&&h(_.specularIntensityMap.channel),transmissionMapUv:ae&&h(_.transmissionMap.channel),thicknessMapUv:ie&&h(_.thicknessMap.channel),alphaMapUv:Ce&&h(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ct||_n),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Qe||Ce),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:le,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:k.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:Qe&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:Pt&&_.emissiveMap.isVideoTexture===!0&&ht.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fn,flipSided:_.side===vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ot&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&_.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function E(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)M.push(F),M.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(M,_),m(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function C(_){const M=u[_.type];let F;if(M){const D=hi[M];F=bh.clone(D.uniforms)}else F=_.uniforms;return F}function I(_,M){let F=d.get(M);return F!==void 0?++F.usedTimes:(F=new oS(n,M,_,s),l.push(F),d.set(M,F)),F}function S(_){if(--_.usedTimes===0){const M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function y(){a.dispose()}return{getParameters:g,getProgramCacheKey:E,getUniforms:C,acquireProgram:I,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:y}}function fS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function hS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Dd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ld(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function a(u,h,g,E,p,m){let C=n[e];return C===void 0?(C={id:u.id,object:u,geometry:h,material:g,materialVariant:o(u),groupOrder:E,renderOrder:u.renderOrder,z:p,group:m},n[e]=C):(C.id=u.id,C.object=u,C.geometry=h,C.material=g,C.materialVariant=o(u),C.groupOrder=E,C.renderOrder=u.renderOrder,C.z=p,C.group=m),e++,C}function c(u,h,g,E,p,m,C){C.reversedDepth===!0&&(p=-p);const I=a(u,h,g,E,p,m);g.transmission>0?i.push(I):g.transparent===!0?s.push(I):t.push(I)}function l(u,h,g,E,p,m){const C=a(u,h,g,E,p,m);g.transmission>0?i.unshift(C):g.transparent===!0?s.unshift(C):t.unshift(C)}function d(u,h){t.length>1&&t.sort(u||hS),i.length>1&&i.sort(h||Dd),s.length>1&&s.sort(h||Dd)}function f(){for(let u=e,h=n.length;u<h;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function AS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ld,n.set(i,[o])):s>=r.length?(o=new Ld,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ee,color:new He};break;case"SpotLight":t={position:new ee,direction:new ee,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function mS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gS=0;function ES(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vS(n){const e=new pS,t=mS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new ee);const s=new ee,r=new ut,o=new ut;function a(l){let d=0,f=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let h=0,g=0,E=0,p=0,m=0,C=0,I=0,S=0,b=0,y=0,_=0,M=0,F=0,D=0;l.sort(ES);for(let k=0,V=l.length;k<V;k++){const L=l[k],Q=L.color,W=L.intensity,H=L.distance;let J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===nn?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=Q.r*W,f+=Q.g*W,u+=Q.b*W;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],W);D++}else if(L.isSunLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,Z=t.get(L);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[g]=Z,i.sunShadowMap[g]=J;const le=K.getViewportCount();for(let Ae=0;Ae<le;Ae++)i.sunShadowMatrix[E+Ae]=K.getMatrix(Ae),i.sunShadowCascade[E+Ae]=K._cascadeData[Ae];E+=le,g++}i.sun[h]=z,h++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,Z=t.get(L);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=z,p++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(Q).multiplyScalar(W),z.distance=H,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[C]=z;const K=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,K.updateMatrices(L),L.castShadow&&F++),i.spotLightMatrix[C]=K.matrix,L.castShadow){const Z=t.get(L);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.spotShadow[C]=Z,i.spotShadowMap[C]=J,_++}C++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(Q).multiplyScalar(W),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[I]=z,I++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const K=L.shadow,Z=t.get(L);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=L.shadow.matrix,y++}i.point[m]=z,m++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(W),z.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[S]=z,S++}}I>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const N=i.hash;(N.sunLength!==h||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==C||N.rectAreaLength!==I||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==b||N.numPointShadows!==y||N.numSpotShadows!==_||N.numSpotMaps!==M||N.numLightProbes!==D)&&(i.sun.length=h,i.directional.length=p,i.spot.length=C,i.rectArea.length=I,i.point.length=m,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-F,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=D,N.sunLength=h,N.directionalLength=p,N.pointLength=m,N.spotLength=C,N.rectAreaLength=I,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=b,N.numPointShadows=y,N.numSpotShadows=_,N.numSpotMaps=M,N.numLightProbes=D,i.version=gS++)}function c(l,d){let f=0,u=0,h=0,g=0,E=0,p=0;const m=d.matrixWorldInverse;for(let C=0,I=l.length;C<I;C++){const S=l[C];if(S.isSunLight){const b=i.sun[f];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),f++}else if(S.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(S.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const b=i.rectArea[E];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),E++}else if(S.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:i}}function Fd(n){const e=new vS(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function c(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _S(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Fd(n),e.set(s,[a])):r>=o.length?(a=new Fd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const xS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CS=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],yS=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Pd=new ut,br=new ee,Ll=new ee;function MS(n,e,t){let i=new so;const s=new ct,r=new ct,o=new Qt,a=new wh,c=new P0,l={},d=t.maxTextureSize,f={[vs]:vn,[vn]:vs,[Fn]:Fn},u=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:xS,fragmentShader:SS}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new fn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let m=this.type;this.render=function(y,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===Xf&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);const F=n.getRenderTarget(),D=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),k=n.state;k.setBlending(js),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=m!==this.type;V&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(Q=>Q.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,Q=y.length;L<Q;L++){const W=y[L],H=W.shadow;if(H===void 0){tt("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();s.multiply(J),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/J.y),s.y=r.y*J.y,H.mapSize.y=r.y));const z=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=z,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Or){if(W.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Cn(s.x,s.y,{format:nn,type:Tt,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new Ss(s.x,s.y,qt),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=Ji,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wt,H.map.depthTexture.magFilter=Wt}else W.isPointLight?(H.map=new mu(s.x),H.map.depthTexture=new yh(s.x,ii)):(H.map=new Cn(s.x,s.y),H.map.depthTexture=new Ss(s.x,s.y,ii)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=Ji,this.type===Gr?(H.map.depthTexture.compareFunction=z?ch:lh,H.map.depthTexture.minFilter=Rt,H.map.depthTexture.magFilter=Rt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wt,H.map.depthTexture.magFilter=Wt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const K=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,M);const Z=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let le=0;le<K;le++){const Ae=H.getCamera(le);if(W.isPointLight){const q=H.camera,de=H.matrix,xe=W.distance||q.far;xe!==q.far&&(q.far=xe,q.updateProjectionMatrix()),br.setFromMatrixPosition(W.matrixWorld),q.position.copy(br),Ll.copy(q.position),Ll.add(CS[le]),q.up.copy(yS[le]),q.lookAt(Ll),q.updateMatrixWorld(),de.makeTranslation(-br.x,-br.y,-br.z),Pd.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Pd,q.coordinateSystem,q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,le),n.clear();else{le===0&&(n.setRenderTarget(H.map),n.clear());const q=H.getViewport(le);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),k.viewport(o)}i=H.getFrustum(le),S(_,M,Ae,W,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Or&&C(H,M),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(F,D,N)};function C(y,_){const M=e.update(E);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null?y.mapPass=new Cn(s.x,s.y,{format:nn,type:Tt}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(_,null,M,u,E,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(_,null,M,h,E,null)}function I(y,_,M,F){let D=null;const N=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N!==void 0)D=N;else if(D=M.isPointLight===!0?c:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const k=D.uuid,V=_.uuid;let L=l[k];L===void 0&&(L={},l[k]=L);let Q=L[V];Q===void 0&&(Q=D.clone(),L[V]=Q,_.addEventListener("dispose",b)),D=Q}if(D.visible=_.visible,D.wireframe=_.wireframe,F===Or?D.side=_.shadowSide!==null?_.shadowSide:_.side:D.side=_.shadowSide!==null?_.shadowSide:f[_.side],D.alphaMap=_.alphaMap,D.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,D.map=_.map,D.clipShadows=_.clipShadows,D.clippingPlanes=_.clippingPlanes,D.clipIntersection=_.clipIntersection,D.displacementMap=_.displacementMap,D.displacementScale=_.displacementScale,D.displacementBias=_.displacementBias,D.wireframeLinewidth=_.wireframeLinewidth,D.linewidth=_.linewidth,M.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const k=n.properties.get(D);k.light=M}return D}function S(y,_,M,F,D,N){if(y.visible===!1)return;if(y.layers.test(D)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&N===Or)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const L=e.update(y),Q=y.material;if(Array.isArray(Q)){const W=L.groups;for(let H=0,J=W.length;H<J;H++){const z=W[H],K=Q[z.materialIndex];if(K&&K.visible){const Z=I(y,K,F,N);y.onBeforeShadow(n,y,_,M,L,Z,z),n.renderBufferDirect(M,null,L,Z,y,z),y.onAfterShadow(n,y,_,M,L,Z,z)}}}else if(Q.visible){const W=I(y,Q,F,N);y.onBeforeShadow(n,y,_,M,L,W,null),n.renderBufferDirect(M,null,L,W,y,null),y.onAfterShadow(n,y,_,M,L,W,null)}}const V=y.children;for(let L=0,Q=V.length;L<Q;L++)S(V[L],_,M,F,D,N)}function b(y){y.target.removeEventListener("dispose",b);for(const M in l){const F=l[M],D=y.target.uuid;D in F&&(F[D].dispose(),delete F[D])}}}function IS(n,e){function t(){let O=!1;const ae=new Qt;let ie=null;const Be=new Qt(0,0,0,0);return{setMask:function(Ce){ie!==Ce&&!O&&(n.colorMask(Ce,Ce,Ce,Ce),ie=Ce)},setLocked:function(Ce){O=Ce},setClear:function(Ce,we,Ve,ot,ye){ye===!0&&(Ce*=ot,we*=ot,Ve*=ot),ae.set(Ce,we,Ve,ot),Be.equals(ae)===!1&&(n.clearColor(Ce,we,Ve,ot),Be.copy(ae))},reset:function(){O=!1,ie=null,Be.set(-1,0,0,0)}}}function i(){let O=!1,ae=!1,ie=null,Be=null,Ce=null;return{setReversed:function(we){if(ae!==we){const Ve=e.get("EXT_clip_control");we?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ae=we;const ot=Ce;Ce=null,this.setClear(ot)}},getReversed:function(){return ae},setTest:function(we){we?he(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(we){ie!==we&&!O&&(n.depthMask(we),ie=we)},setFunc:function(we){if(ae&&(we=Hg[we]),Be!==we){switch(we){case hc:n.depthFunc(n.NEVER);break;case Ac:n.depthFunc(n.ALWAYS);break;case pc:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case mc:n.depthFunc(n.EQUAL);break;case gc:n.depthFunc(n.GEQUAL);break;case Ec:n.depthFunc(n.GREATER);break;case vc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Be=we}},setLocked:function(we){O=we},setClear:function(we){Ce!==we&&(Ce=we,ae&&(we=1-we),n.clearDepth(we))},reset:function(){O=!1,ie=null,Be=null,Ce=null,ae=!1}}}function s(){let O=!1,ae=null,ie=null,Be=null,Ce=null,we=null,Ve=null,ot=null,ye=null;return{setTest:function(qe){O||(qe?he(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(qe){ae!==qe&&!O&&(n.stencilMask(qe),ae=qe)},setFunc:function(qe,st,Pe){(ie!==qe||Be!==st||Ce!==Pe)&&(n.stencilFunc(qe,st,Pe),ie=qe,Be=st,Ce=Pe)},setOp:function(qe,st,Pe){(we!==qe||Ve!==st||ot!==Pe)&&(n.stencilOp(qe,st,Pe),we=qe,Ve=st,ot=Pe)},setLocked:function(qe){O=qe},setClear:function(qe){ye!==qe&&(n.clearStencil(qe),ye=qe)},reset:function(){O=!1,ae=null,ie=null,Be=null,Ce=null,we=null,Ve=null,ot=null,ye=null}}}const r=new t,o=new i,a=new s;let c={};const l=new WeakMap;let d={},f={},u={},h=new WeakMap,g=[],E=null,p=!1,m=null,C=null,I=null,S=null,b=null,y=null,_=null,M=new He(0,0,0),F=0,D=!1,N=null,k=null,V=null,L=null,Q=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=J>=2);let K=null,Z={};const le=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),q=new Qt().fromArray(le),de=new Qt().fromArray(Ae);function xe(O,ae,ie,Be){const Ce=new Uint8Array(4),we=n.createTexture();n.bindTexture(O,we),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<ie;Ve++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(ae+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return we}const Ge={};Ge[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ge[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ge[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(Yr),$t(!1),Ct(Lu),he(n.CULL_FACE),St(js);function he(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function Ne(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function ze(O,ae){return u[O]!==ae?(n.bindFramebuffer(O,ae),u[O]=ae,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Qe(O,ae){let ie=g,Be=!1;if(O){ie=h.get(ae),ie===void 0&&(ie=[],h.set(ae,ie));const Ce=O.textures;if(ie.length!==Ce.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Ve=Ce.length;we<Ve;we++)ie[we]=n.COLOR_ATTACHMENT0+we;ie.length=Ce.length,Be=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,Be=!0);Be&&n.drawBuffers(ie)}function Ze(O){return E!==O?(n.useProgram(O),E=O,!0):!1}const Ke={[zs]:n.FUNC_ADD,[ug]:n.FUNC_SUBTRACT,[dg]:n.FUNC_REVERSE_SUBTRACT};Ke[fg]=n.MIN,Ke[hg]=n.MAX;const $e={[Ag]:n.ZERO,[pg]:n.ONE,[mg]:n.SRC_COLOR,[Yf]:n.SRC_ALPHA,[Sg]:n.SRC_ALPHA_SATURATE,[_g]:n.DST_COLOR,[Eg]:n.DST_ALPHA,[gg]:n.ONE_MINUS_SRC_COLOR,[Kf]:n.ONE_MINUS_SRC_ALPHA,[xg]:n.ONE_MINUS_DST_COLOR,[vg]:n.ONE_MINUS_DST_ALPHA,[Cg]:n.CONSTANT_COLOR,[yg]:n.ONE_MINUS_CONSTANT_COLOR,[Mg]:n.CONSTANT_ALPHA,[Ig]:n.ONE_MINUS_CONSTANT_ALPHA};function St(O,ae,ie,Be,Ce,we,Ve,ot,ye,qe){if(O===js){p===!0&&(Ne(n.BLEND),p=!1);return}if(p===!1&&(he(n.BLEND),p=!0),O!==cg){if(O!==m||qe!==D){if((C!==zs||b!==zs)&&(n.blendEquation(n.FUNC_ADD),C=zs,b=zs),qe)switch(O){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.ONE,n.ONE);break;case Fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:mt("WebGLState: Invalid blending: ",O);break}else switch(O){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fu:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",O);break}I=null,S=null,y=null,_=null,M.set(0,0,0),F=0,m=O,D=qe}return}Ce=Ce||ae,we=we||ie,Ve=Ve||Be,(ae!==C||Ce!==b)&&(n.blendEquationSeparate(Ke[ae],Ke[Ce]),C=ae,b=Ce),(ie!==I||Be!==S||we!==y||Ve!==_)&&(n.blendFuncSeparate($e[ie],$e[Be],$e[we],$e[Ve]),I=ie,S=Be,y=we,_=Ve),(ot.equals(M)===!1||ye!==F)&&(n.blendColor(ot.r,ot.g,ot.b,ye),M.copy(ot),F=ye),m=O,D=!1}function wt(O,ae){O.side===Fn?Ne(n.CULL_FACE):he(n.CULL_FACE);let ie=O.side===vn;ae&&(ie=!ie),$t(ie),O.blending===Hr&&O.transparent===!1?St(js):St(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Be=O.stencilWrite;a.setTest(Be),Be&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function $t(O){N!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),N=O)}function Ct(O){O!==ag?(he(n.CULL_FACE),O!==k&&(O===Lu?n.cullFace(n.BACK):O===lg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),k=O}function wn(O){O!==V&&(H&&n.lineWidth(O),V=O)}function Pt(O,ae,ie){O?(he(n.POLYGON_OFFSET_FILL),(L!==ae||Q!==ie)&&(L=ae,Q=ie,o.getReversed()&&(ae=-ae,ie=-ie),n.polygonOffset(ae,ie))):Ne(n.POLYGON_OFFSET_FILL)}function hn(O){O?he(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function An(O){O===void 0&&(O=n.TEXTURE0+W-1),K!==O&&(n.activeTexture(O),K=O)}function _n(O,ae,ie){ie===void 0&&(K===null?ie=n.TEXTURE0+W-1:ie=K);let Be=Z[ie];Be===void 0&&(Be={type:void 0,texture:void 0},Z[ie]=Be),(Be.type!==O||Be.texture!==ae)&&(K!==ie&&(n.activeTexture(ie),K=ie),n.bindTexture(O,ae||Ge[O]),Be.type=O,Be.texture=ae)}function X(){const O=Z[K];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function pn(){try{n.compressedTexImage2D(...arguments)}catch(O){mt("WebGLState:",O)}}function _t(){try{n.compressedTexImage3D(...arguments)}catch(O){mt("WebGLState:",O)}}function xt(){try{n.texSubImage2D(...arguments)}catch(O){mt("WebGLState:",O)}}function Re(){try{n.texSubImage3D(...arguments)}catch(O){mt("WebGLState:",O)}}function Ut(){try{n.compressedTexSubImage2D(...arguments)}catch(O){mt("WebGLState:",O)}}function Xe(){try{n.compressedTexSubImage3D(...arguments)}catch(O){mt("WebGLState:",O)}}function nt(){try{n.texStorage2D(...arguments)}catch(O){mt("WebGLState:",O)}}function U(){try{n.texStorage3D(...arguments)}catch(O){mt("WebGLState:",O)}}function w(){try{n.texImage2D(...arguments)}catch(O){mt("WebGLState:",O)}}function te(){try{n.texImage3D(...arguments)}catch(O){mt("WebGLState:",O)}}function Se(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function fe(O,ae){f[O]!==ae&&(n.pixelStorei(O,ae),f[O]=ae)}function Ie(O){q.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),q.copy(O))}function De(O){de.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),de.copy(O))}function oe(O,ae){let ie=l.get(ae);ie===void 0&&(ie=new WeakMap,l.set(ae,ie));let Be=ie.get(O);Be===void 0&&(Be=n.getUniformBlockIndex(ae,O.name),n.uniformBlockBinding(ae,Be,Be),ie.set(O,Be))}function ce(O,ae,ie){const Ce=l.get(ae).get(O);c[Ce]!==ie&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ce,ie),c[Ce]=ie)}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},K=null,Z={},u={},c={},h=new WeakMap,g=[],E=null,p=!1,m=null,C=null,I=null,S=null,b=null,y=null,_=null,M=new He(0,0,0),F=0,D=!1,N=null,k=null,V=null,L=null,Q=null,q.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Ne,bindFramebuffer:ze,drawBuffers:Qe,useProgram:Ze,setBlending:St,setMaterial:wt,setFlipSided:$t,setCullFace:Ct,setLineWidth:wn,setPolygonOffset:Pt,setScissorTest:hn,activeTexture:An,bindTexture:_n,unbindTexture:X,compressedTexImage2D:pn,compressedTexImage3D:_t,texImage2D:w,texImage3D:te,pixelStorei:fe,getParameter:Se,updateUBOMapping:oe,uniformBlockBinding:ce,texStorage2D:nt,texStorage3D:U,texSubImage2D:xt,texSubImage3D:Re,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Xe,scissor:Ie,viewport:De,reset:be}}function bS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,d=new WeakMap,f=new Set;let u;const h=new WeakMap,g=new Set,E=new FinalizationRegistry(U=>g.delete(U));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(U,w){return p?new OffscreenCanvas(U,w):La("canvas")}function C(U,w,te){let Se=1;const fe=nt(U);if((fe.width>te||fe.height>te)&&(Se=te/Math.max(fe.width,fe.height)),Se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ie=Math.floor(Se*fe.width),De=Math.floor(Se*fe.height);u===void 0&&(u=m(Ie,De));const oe=w?m(Ie,De):u;return oe.width=Ie,oe.height=De,oe.getContext("2d").drawImage(U,0,0,Ie,De),tt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ie+"x"+De+")."),oe}else return"data"in U&&tt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),U;return U}function I(U){return U.generateMipmaps}function S(U){n.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(U,w,te,Se,fe,Ie=!1){if(U!==null){if(n[U]!==void 0)return n[U];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let De;Se&&(De=e.get("EXT_texture_norm16"),De||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=w;if(w===n.RED&&(te===n.FLOAT&&(oe=n.R32F),te===n.HALF_FLOAT&&(oe=n.R16F),te===n.UNSIGNED_BYTE&&(oe=n.R8),te===n.UNSIGNED_SHORT&&De&&(oe=De.R16_EXT),te===n.SHORT&&De&&(oe=De.R16_SNORM_EXT)),w===n.RED_INTEGER&&(te===n.UNSIGNED_BYTE&&(oe=n.R8UI),te===n.UNSIGNED_SHORT&&(oe=n.R16UI),te===n.UNSIGNED_INT&&(oe=n.R32UI),te===n.BYTE&&(oe=n.R8I),te===n.SHORT&&(oe=n.R16I),te===n.INT&&(oe=n.R32I)),w===n.RG&&(te===n.FLOAT&&(oe=n.RG32F),te===n.HALF_FLOAT&&(oe=n.RG16F),te===n.UNSIGNED_BYTE&&(oe=n.RG8),te===n.UNSIGNED_SHORT&&De&&(oe=De.RG16_EXT),te===n.SHORT&&De&&(oe=De.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(te===n.UNSIGNED_BYTE&&(oe=n.RG8UI),te===n.UNSIGNED_SHORT&&(oe=n.RG16UI),te===n.UNSIGNED_INT&&(oe=n.RG32UI),te===n.BYTE&&(oe=n.RG8I),te===n.SHORT&&(oe=n.RG16I),te===n.INT&&(oe=n.RG32I)),w===n.RGB_INTEGER&&(te===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),te===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),te===n.UNSIGNED_INT&&(oe=n.RGB32UI),te===n.BYTE&&(oe=n.RGB8I),te===n.SHORT&&(oe=n.RGB16I),te===n.INT&&(oe=n.RGB32I)),w===n.RGBA_INTEGER&&(te===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),te===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),te===n.UNSIGNED_INT&&(oe=n.RGBA32UI),te===n.BYTE&&(oe=n.RGBA8I),te===n.SHORT&&(oe=n.RGBA16I),te===n.INT&&(oe=n.RGBA32I)),w===n.RGB&&(te===n.UNSIGNED_SHORT&&De&&(oe=De.RGB16_EXT),te===n.SHORT&&De&&(oe=De.RGB16_SNORM_EXT),te===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),te===n.UNSIGNED_INT_10F_11F_11F_REV&&(oe=n.R11F_G11F_B10F)),w===n.RGBA){const ce=Ie?Da:ht.getTransfer(fe);te===n.FLOAT&&(oe=n.RGBA32F),te===n.HALF_FLOAT&&(oe=n.RGBA16F),te===n.UNSIGNED_BYTE&&(oe=ce===vt?n.SRGB8_ALPHA8:n.RGBA8),te===n.UNSIGNED_SHORT&&De&&(oe=De.RGBA16_EXT),te===n.SHORT&&De&&(oe=De.RGBA16_SNORM_EXT),te===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),te===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function _(U,w){let te;return U?w===null||w===ii||w===rr?te=n.DEPTH24_STENCIL8:w===qt?te=n.DEPTH32F_STENCIL8:w===xs&&(te=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ii||w===rr?te=n.DEPTH_COMPONENT24:w===qt?te=n.DEPTH_COMPONENT32F:w===xs&&(te=n.DEPTH_COMPONENT16),te}function M(U,w){return I(U)===!0||U.isFramebufferTexture&&U.minFilter!==Wt&&U.minFilter!==Rt?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function F(U){const w=new WeakRef(U);i.get(U).__ref=w,g.add(w),E.register(U,w,w)}function D(U){const w=i.get(U).__ref;w!==void 0&&(g.delete(w),E.unregister(w))}function N(U){V(U.target)}function k(U){L(U.target)}function V(U){U.removeEventListener("dispose",N),D(U),W(U),U.isVideoTexture&&d.delete(U),U.isHTMLTexture&&f.delete(U)}function L(U){U.removeEventListener("dispose",k),D(U),J(U)}function Q(){for(const U of g){const w=U.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):V(w))}g.clear(),f.clear()}function W(U){const w=i.get(U);if(w.__webglInit===void 0)return;const te=U.source,Se=h.get(te);if(Se){const fe=Se[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&H(U),Object.keys(Se).length===0&&h.delete(te)}i.remove(U)}function H(U){const w=i.get(U);n.deleteTexture(w.__webglTexture);const te=U.source,Se=h.get(te);delete Se[w.__cacheKey],o.memory.textures--}function J(U){const w=i.get(U);w.__depthDisposeCallback&&w.__depthDisposeCallback();const te=U.depthTexture;if(te&&te.renderTarget===U&&V(te),U.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(w.__webglFramebuffer[fe]))for(let Ie=0;Ie<w.__webglFramebuffer[fe].length;Ie++)n.deleteFramebuffer(w.__webglFramebuffer[fe][Ie]);else n.deleteFramebuffer(w.__webglFramebuffer[fe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[fe])}else{if(Array.isArray(w.__webglFramebuffer))for(let fe=0;fe<w.__webglFramebuffer.length;fe++)n.deleteFramebuffer(w.__webglFramebuffer[fe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let fe=0;fe<w.__webglColorRenderbuffer.length;fe++)w.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[fe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Se=U.textures;for(let fe=0,Ie=Se.length;fe<Ie;fe++){const De=i.get(Se[fe]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(Se[fe])}i.remove(U)}let z=0;function K(){z=0}function Z(){return z}function le(U){z=U}function Ae(){const U=z;return U>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,U}function q(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.mipmapsAutoUpdate),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function de(U,w){const te=i.get(U);if(U.isVideoTexture&&Ut(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&te.__version!==U.version){const Se=U.image;if(Se===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(te,U,w);return}}else U.isExternalTexture&&(te.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,te.__webglTexture,n.TEXTURE0+w)}function xe(U,w){const te=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){wt(te,U,w);return}else U.isExternalTexture&&(te.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,te.__webglTexture,n.TEXTURE0+w)}function Ge(U,w){const te=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){wt(te,U,w);return}t.bindTexture(n.TEXTURE_3D,te.__webglTexture,n.TEXTURE0+w)}function he(U,w){const te=i.get(U);if(U.version>0&&te.__version!==U.version){$t(te,U,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture,n.TEXTURE0+w)}const Ne={[Sa]:n.REPEAT,[Sn]:n.CLAMP_TO_EDGE,[_c]:n.MIRRORED_REPEAT},ze={[Wt]:n.NEAREST,[sh]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[Rt]:n.LINEAR,[cl]:n.LINEAR_MIPMAP_NEAREST,[In]:n.LINEAR_MIPMAP_LINEAR},Qe={[Lg]:n.NEVER,[uh]:n.ALWAYS,[Fg]:n.LESS,[lh]:n.LEQUAL,[Pg]:n.EQUAL,[ch]:n.GEQUAL,[Ug]:n.GREATER,[Ng]:n.NOTEQUAL};function Ze(U,w){if(w.type===qt&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rt||w.magFilter===cl||w.magFilter===Co||w.magFilter===In||w.minFilter===Rt||w.minFilter===cl||w.minFilter===Co||w.minFilter===In)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,Ne[w.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,Ne[w.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,Ne[w.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,ze[w.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,ze[w.minFilter]),w.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Qe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Wt||w.minFilter!==Co&&w.minFilter!==In||w.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ke(U,w){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",N),F(w));const Se=w.source;let fe=h.get(Se);fe===void 0&&(fe={},h.set(Se,fe));const Ie=q(w);if(Ie!==U.__cacheKey){fe[Ie]===void 0&&(fe[Ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,te=!0),fe[Ie].usedTimes++;const De=fe[U.__cacheKey];De!==void 0&&(fe[U.__cacheKey].usedTimes--,De.usedTimes===0&&H(w)),U.__cacheKey=Ie,U.__webglTexture=fe[Ie].texture}return te}function $e(U,w,te){return Math.floor(Math.floor(U/te)/w)}function St(U,w,te,Se){const Ie=U.updateRanges;if(Ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,te,Se,w.data);else{Ie.sort((O,ae)=>O.start-ae.start);let De=0;for(let O=1;O<Ie.length;O++){const ae=Ie[De],ie=Ie[O],Be=ae.start+ae.count,Ce=$e(ie.start,w.width,4),we=$e(ae.start,w.width,4);ie.start<=Be+1&&Ce===we&&$e(ie.start+ie.count-1,w.width,4)===Ce?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++De,Ie[De]=ie)}Ie.length=De+1;const oe=t.getParameter(n.UNPACK_ROW_LENGTH),ce=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let O=0,ae=Ie.length;O<ae;O++){const ie=Ie[O],Be=Math.floor(ie.start/4),Ce=Math.ceil(ie.count/4),we=Be%w.width,Ve=Math.floor(Be/w.width),ot=Ce,ye=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,we),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(n.TEXTURE_2D,0,we,Ve,ot,ye,te,Se,w.data)}U.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,oe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function wt(U,w,te){let Se=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Se=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Se=n.TEXTURE_3D);const fe=Ke(U,w),Ie=w.source;t.bindTexture(Se,U.__webglTexture,n.TEXTURE0+te);const De=i.get(Ie);if(Ie.version!==De.__version||fe===!0){if(t.activeTexture(n.TEXTURE0+te),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ye=ht.getPrimaries(ht.workingColorSpace),qe=w.colorSpace===Zn?null:ht.getPrimaries(w.colorSpace),st=w.colorSpace===Zn||ye===qe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ce=C(w.image,!1,s.maxTextureSize);ce=Xe(w,ce);const be=r.convert(w.format,w.colorSpace),O=r.convert(w.type);let ae=y(w.internalFormat,be,O,w.normalized,w.colorSpace,w.isVideoTexture);Ze(Se,w);let ie;const Be=w.mipmaps,Ce=w.isVideoTexture!==!0,we=De.__version===void 0||fe===!0,Ve=Ie.dataReady,ot=M(w,ce);if(w.isDepthTexture)ae=_(w.format===Yi,w.type),we&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,ae,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ae,ce.width,ce.height,0,be,O,null));else if(w.isDataTexture)if(Be.length>0){Ce&&we&&t.texStorage2D(n.TEXTURE_2D,ot,ae,Be[0].width,Be[0].height);for(let ye=0,qe=Be.length;ye<qe;ye++)ie=Be[ye],Ce?Ve&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,ie.width,ie.height,be,O,ie.data):t.texImage2D(n.TEXTURE_2D,ye,ae,ie.width,ie.height,0,be,O,ie.data);w.generateMipmaps=!1}else Ce?(we&&t.texStorage2D(n.TEXTURE_2D,ot,ae,ce.width,ce.height),Ve&&St(w,ce,be,O)):t.texImage2D(n.TEXTURE_2D,0,ae,ce.width,ce.height,0,be,O,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ce&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ae,Be[0].width,Be[0].height,ce.depth);for(let ye=0,qe=Be.length;ye<qe;ye++)if(ie=Be[ye],w.format!==It)if(be!==null)if(Ce){if(Ve)if(w.layerUpdates.size>0){const st=Ad(ie.width,ie.height,w.format,w.type);for(const Pe of w.layerUpdates){const gt=ie.data.subarray(Pe*st/ie.data.BYTES_PER_ELEMENT,(Pe+1)*st/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,Pe,ie.width,ie.height,1,be,gt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,ie.width,ie.height,ce.depth,be,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,ae,ie.width,ie.height,ce.depth,0,ie.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?Ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,ie.width,ie.height,ce.depth,be,O,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,ae,ie.width,ie.height,ce.depth,0,be,O,ie.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ce&&we&&t.texStorage2D(n.TEXTURE_2D,ot,ae,Be[0].width,Be[0].height);for(let ye=0,qe=Be.length;ye<qe;ye++)ie=Be[ye],w.format!==It?be!==null?Ce?Ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,ie.width,ie.height,be,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,ae,ie.width,ie.height,0,ie.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?Ve&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,ie.width,ie.height,be,O,ie.data):t.texImage2D(n.TEXTURE_2D,ye,ae,ie.width,ie.height,0,be,O,ie.data)}else if(w.isDataArrayTexture)if(Ce){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ae,ce.width,ce.height,ce.depth),Ve)if(w.layerUpdates.size>0){const ye=Ad(ce.width,ce.height,w.format,w.type);for(const qe of w.layerUpdates){const st=ce.data.subarray(qe*ye/ce.data.BYTES_PER_ELEMENT,(qe+1)*ye/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,qe,ce.width,ce.height,1,be,O,st)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,be,O,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,ce.width,ce.height,ce.depth,0,be,O,ce.data);else if(w.isData3DTexture)Ce?(we&&t.texStorage3D(n.TEXTURE_3D,ot,ae,ce.width,ce.height,ce.depth),Ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,be,O,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ae,ce.width,ce.height,ce.depth,0,be,O,ce.data);else if(w.isFramebufferTexture){if(we)if(Ce)t.texStorage2D(n.TEXTURE_2D,ot,ae,ce.width,ce.height);else{let ye=ce.width,qe=ce.height;for(let st=0;st<ot;st++)t.texImage2D(n.TEXTURE_2D,st,ae,ye,qe,0,be,O,null),ye>>=1,qe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const ye=n.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),ce.parentNode!==ye){ye.appendChild(ce),f.add(w),ye.onpaint=qe=>{const st=qe.changedElements;for(const Pe of f)st.includes(Pe.image)&&(Pe.needsUpdate=!0)},ye.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ce);else{const st=n.RGBA,Pe=n.RGBA,gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,st,Pe,gt,ce)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ce&&we){const ye=nt(Be[0]);t.texStorage2D(n.TEXTURE_2D,ot,ae,ye.width,ye.height)}for(let ye=0,qe=Be.length;ye<qe;ye++)ie=Be[ye],Ce?Ve&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,be,O,ie):t.texImage2D(n.TEXTURE_2D,ye,ae,be,O,ie);w.generateMipmaps=!1}else if(Ce){if(we){const ye=nt(ce);t.texStorage2D(n.TEXTURE_2D,ot,ae,ye.width,ye.height)}Ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,O,ce)}else t.texImage2D(n.TEXTURE_2D,0,ae,be,O,ce);I(w)&&w.mipmapsAutoUpdate===!0&&S(Se),De.__version=Ie.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function $t(U,w,te){if(w.image.length!==6)return;const Se=Ke(U,w),fe=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+te);const Ie=i.get(fe);if(fe.version!==Ie.__version||Se===!0){t.activeTexture(n.TEXTURE0+te);const De=ht.getPrimaries(ht.workingColorSpace),oe=w.colorSpace===Zn?null:ht.getPrimaries(w.colorSpace),ce=w.colorSpace===Zn||De===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,O=w.image[0]&&w.image[0].isDataTexture,ae=[];for(let Pe=0;Pe<6;Pe++)!be&&!O?ae[Pe]=C(w.image[Pe],!0,s.maxCubemapSize):ae[Pe]=O?w.image[Pe].image:w.image[Pe],ae[Pe]=Xe(w,ae[Pe]);const ie=ae[0],Be=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type);let we=y(w.internalFormat,Be,Ce,w.normalized,w.colorSpace);const Ve=w.isVideoTexture!==!0,ot=Ie.__version===void 0||Se===!0,ye=fe.dataReady;let qe=M(w,ie);Ze(n.TEXTURE_CUBE_MAP,w);let st;if(w.isDepthTexture){if(we=_(w.format===Yi,w.type),ot)if(Ve)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,we,ie.width,ie.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,we,ie.width,ie.height,0,Be,Ce,null)}else if(be){Ve&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,we,ie.width,ie.height);for(let Pe=0;Pe<6;Pe++){st=ae[Pe].mipmaps;for(let gt=0;gt<st.length;gt++){const kt=st[gt];w.format!==It?Be!==null?Ve?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,gt,0,0,kt.width,kt.height,Be,kt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,gt,we,kt.width,kt.height,0,kt.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,gt,0,0,kt.width,kt.height,Be,Ce,kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,gt,we,kt.width,kt.height,0,Be,Ce,kt.data)}}}else{if(st=w.mipmaps,Ve&&ot){st.length>0&&qe++;const Pe=nt(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,we,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(O){Ve?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ae[Pe].width,ae[Pe].height,Be,Ce,ae[Pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,we,ae[Pe].width,ae[Pe].height,0,Be,Ce,ae[Pe].data);for(let gt=0;gt<st.length;gt++){const oi=st[gt].image[Pe].image;Ve?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,gt+1,0,0,oi.width,oi.height,Be,Ce,oi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,gt+1,we,oi.width,oi.height,0,Be,Ce,oi.data)}}else{Ve?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Be,Ce,ae[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,we,Be,Ce,ae[Pe]);for(let gt=0;gt<st.length;gt++){const kt=st[gt];Ve?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,gt+1,0,0,Be,Ce,kt.image[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,gt+1,we,Be,Ce,kt.image[Pe])}}}I(w)&&w.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),Ie.__version=fe.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Ct(U,w,te,Se,fe,Ie){const De=r.convert(te.format,te.colorSpace),oe=r.convert(te.type),ce=y(te.internalFormat,De,oe,te.normalized,te.colorSpace),be=i.get(w),O=i.get(te);if(O.__renderTarget=w,!be.__hasExternalTextures){const ae=Math.max(1,w.width>>Ie),ie=Math.max(1,w.height>>Ie);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,Ie,ce,ae,ie,w.depth,0,De,oe,null):t.texImage2D(fe,Ie,ce,ae,ie,0,De,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),Re(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,fe,O.__webglTexture,0,xt(w)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Se,fe,O.__webglTexture,Ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function wn(U,w,te){if(n.bindRenderbuffer(n.RENDERBUFFER,U),w.depthBuffer){const Se=w.depthTexture,fe=Se&&Se.isDepthTexture?Se.type:null,Ie=_(w.stencilBuffer,fe),De=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Re(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(w),Ie,w.width,w.height):te?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(w),Ie,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,U)}else{const Se=w.textures;for(let fe=0;fe<Se.length;fe++){const Ie=Se[fe],De=r.convert(Ie.format,Ie.colorSpace),oe=r.convert(Ie.type),ce=y(Ie.internalFormat,De,oe,Ie.normalized,Ie.colorSpace);Re(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(w),ce,w.width,w.height):te?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(w),ce,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ce,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(U,w,te){const Se=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=i.get(w.depthTexture);fe.__renderTarget=w;const Ie=Se?w.depthTexture.image[0]:w.depthTexture.image;(!fe.__webglTexture||Ie.width!==w.width||Ie.height!==w.height)&&(Ie.width=w.width,Ie.height=w.height,w.depthTexture.needsUpdate=!0),Se?he(w.depthTexture,0):de(w.depthTexture,0);const De=fe.__webglTexture,oe=xt(w),ce=Se?n.TEXTURE_CUBE_MAP_POSITIVE_X+te:n.TEXTURE_2D,be=w.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ji)Re(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ce,De,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,be,ce,De,0);else if(w.depthTexture.format===Yi)Re(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ce,De,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,be,ce,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(U){const w=i.get(U),te=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const Se=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Se){const fe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Se.removeEventListener("dispose",fe)};Se.addEventListener("dispose",fe),w.__depthDisposeCallback=fe}w.__boundDepthTexture=Se}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(te)for(let Se=0;Se<6;Se++)Pt(w.__webglFramebuffer[Se],U,Se);else U.texture.mipmaps.length>0?Pt(w.__webglFramebuffer[0],U,0):Pt(w.__webglFramebuffer,U,0);else if(te){w.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Se]),w.__webglDepthbuffer[Se]===void 0)w.__webglDepthbuffer[Se]=n.createRenderbuffer(),wn(w.__webglDepthbuffer[Se],U,!1);else{const fe=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=w.__webglDepthbuffer[Se];n.bindRenderbuffer(n.RENDERBUFFER,Ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Ie)}}else if(U.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),wn(w.__webglDepthbuffer,U,!1);else{const fe=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function An(U,w,te){const Se=i.get(U);w!==void 0&&Ct(Se.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),te!==void 0&&hn(U)}function _n(U){const w=U.texture,te=i.get(U),Se=i.get(w);U.addEventListener("dispose",k),F(U);const fe=U.textures,Ie=U.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture()),Se.__version=w.version,o.memory.textures++),Ie){te.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps.length>0){te.__webglFramebuffer[oe]=[];for(let ce=0;ce<w.mipmaps.length;ce++)te.__webglFramebuffer[oe][ce]=n.createFramebuffer()}else te.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(w.mipmaps.length>0){te.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)te.__webglFramebuffer[oe]=n.createFramebuffer()}else te.__webglFramebuffer=n.createFramebuffer();if(De)for(let oe=0,ce=fe.length;oe<ce;oe++){const be=i.get(fe[oe]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&Re(U)===!1){te.__webglMultisampledFramebuffer=n.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let oe=0;oe<fe.length;oe++){const ce=fe[oe];te.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,te.__webglColorRenderbuffer[oe]);const be=r.convert(ce.format,ce.colorSpace),O=r.convert(ce.type),ae=y(ce.internalFormat,be,O,ce.normalized,ce.colorSpace,U.isXRRenderTarget===!0),ie=xt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ae,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,te.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=n.createRenderbuffer(),wn(te.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(n.TEXTURE_CUBE_MAP,Se.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)Ct(te.__webglFramebuffer[oe][ce],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else Ct(te.__webglFramebuffer[oe],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);I(w)?S(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(De){for(let oe=0,ce=fe.length;oe<ce;oe++){const be=fe[oe],O=i.get(be);let ae=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ae=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,O.__webglTexture),Ze(ae,be),Ct(te.__webglFramebuffer,U,be,n.COLOR_ATTACHMENT0+oe,ae,0),I(be)&&S(ae)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Se.__webglTexture),Ze(oe,w),w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)Ct(te.__webglFramebuffer[ce],U,w,n.COLOR_ATTACHMENT0,oe,ce);else Ct(te.__webglFramebuffer,U,w,n.COLOR_ATTACHMENT0,oe,0);I(w)?S(oe):w.mipmaps.length>0&&n.texParameteri(oe,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}U.depthBuffer&&hn(U)}function X(U){const w=U.textures;for(let te=0,Se=w.length;te<Se;te++){const fe=w[te];if(I(fe)&&fe.mipmapsAutoUpdate===!0){const Ie=b(U),De=i.get(fe).__webglTexture;t.bindTexture(Ie,De),S(Ie),t.unbindTexture()}}}const pn=[];function _t(U){if(U.samples>0){if(Re(U)===!1){const w=U.textures,te=U.width,Se=U.height;let fe=n.COLOR_BUFFER_BIT;const Ie=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(U),oe=w.length>1;if(oe)for(let be=0;be<w.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let be=0;be<w.length;be++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[be]);const O=i.get(w[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,te,Se,0,0,te,Se,fe,n.NEAREST),c===!0&&(pn.length=0,pn.push(n.COLOR_ATTACHMENT0+be),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&pn.push(Ie),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let be=0;be<w.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,De.__webglColorRenderbuffer[be]);const O=i.get(w[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,O,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){const w=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function xt(U){return Math.min(s.maxSamples,U.samples)}function Re(U){const w=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ut(U){const w=o.render.frame;d.get(U)!==w&&(d.set(U,w),U.update())}function Xe(U,w){const te=U.colorSpace,Se=U.format,fe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==Ln&&te!==Zn&&(ht.getTransfer(te)===vt?(Se!==It||fe!==it)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",te)),w}function nt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=Ae,this.resetTextureUnits=K,this.getTextureUnits=Z,this.setTextureUnits=le,this.setTexture2D=de,this.setTexture2DArray=xe,this.setTexture3D=Ge,this.setTextureCube=he,this.rebindTextures=An,this.setupRenderTarget=_n,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Re,this.dispose=Q}function wS(n,e){function t(i,s=Zn){let r;const o=ht.getTransfer(s);if(i===it)return n.UNSIGNED_BYTE;if(i===nu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===iu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Va)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wa)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rh)return n.BYTE;if(i===oh)return n.SHORT;if(i===xs)return n.UNSIGNED_SHORT;if(i===tu)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===qt)return n.FLOAT;if(i===Tt)return n.HALF_FLOAT;if(i===ah)return n.ALPHA;if(i===$r)return n.RGB;if(i===It)return n.RGBA;if(i===Ji)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===On)return n.RED;if(i===su)return n.RED_INTEGER;if(i===nn)return n.RG;if(i===ru)return n.RG_INTEGER;if(i===ou)return n.RGBA_INTEGER;if(i===er||i===hs||i===ua||i===As)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ca||i===xc||i===or||i===Jr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===or)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Zr||i===jr||i===Ma||i===Ia||i===eo||i===ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Zr)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===jr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ma)return r.COMPRESSED_R11_EAC;if(i===Ia)return r.COMPRESSED_SIGNED_R11_EAC;if(i===eo)return r.COMPRESSED_RG11_EAC;if(i===ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ps||i===Sc||i===Cc||i===yc||i===tr||i===Mc||i===Ic||i===bc||i===wc||i===Bc||i===Tc||i===Rc||i===Dc||i===Lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ps)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ic)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ar||i===Fc||i===wa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ar)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ba||i===Ta||i===to||i===Ra)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ba)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const BS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:BS,fragmentShader:TS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DS extends Cs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,g=null;const E=typeof XRWebGLBinding<"u",p=new RS,m={},C=t.getContextAttributes();let I=null,S=null;const b=[],y=[],_=new ct;let M=null,F=null;const D=new $n;D.viewport=new Qt;const N=new $n;N.viewport=new Qt;const k=[D,N],V=new V0;let L=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let de=b[q];return de===void 0&&(de=new ml,b[q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(q){let de=b[q];return de===void 0&&(de=new ml,b[q]=de),de.getGripSpace()},this.getHand=function(q){let de=b[q];return de===void 0&&(de=new ml,b[q]=de),de.getHandSpace()};function W(q){const de=y.indexOf(q.inputSource);if(de===-1)return;const xe=b[de];xe!==void 0&&(xe.update(q.inputSource,q.frame,l||o),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let q=0;q<b.length;q++){const de=y[q];de!==null&&(y[q]=null,b[q].disconnect(de))}L=null,Q=null,p.reset();for(const q in m)delete m[q];if(e.setRenderTarget(I),h=null,u=null,f=null,s=null,S=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),F!==null){const q=F.camera;q.fov=F.fov,q.zoom=F.zoom,q.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),C.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ge=null,he=null;C.depth&&(he=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=C.stencil?Yi:Ji,Ge=C.stencil?rr:ii);const Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ne),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Cn(u.textureWidth,u.textureHeight,{format:It,type:it,depthTexture:new Ss(u.textureWidth,u.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Cn(h.framebufferWidth,h.framebufferHeight,{format:It,type:it,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(q){for(let de=0;de<q.removed.length;de++){const xe=q.removed[de],Ge=y.indexOf(xe);Ge>=0&&(y[Ge]=null,b[Ge].disconnect(xe))}for(let de=0;de<q.added.length;de++){const xe=q.added[de];let Ge=y.indexOf(xe);if(Ge===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=y.length){y.push(xe),Ge=Ne;break}else if(y[Ne]===null){y[Ne]=xe,Ge=Ne;break}if(Ge===-1)break}const he=b[Ge];he&&he.connect(xe)}}function z(q,de){de===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(de.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let de=q.near,xe=q.far;p.texture!==null&&(p.depthNear>0&&(de=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),V.near=N.near=D.near=de,V.far=N.far=D.far=xe,(L!==V.near||Q!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,Q=V.far),V.layers.mask=q.layers.mask|6,D.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Ge=q.parent,he=V.cameras;z(V,Ge);for(let Ne=0;Ne<he.length;Ne++)z(he[Ne],Ge);V.projectionMatrix.copy(D.projectionMatrix),V.projectionMatrixInverse.copy(D.projectionMatrixInverse),F===null&&q.isPerspectiveCamera&&(F={camera:q,fov:q.fov,zoom:q.zoom}),K(q,V,Ge)};function K(q,de,xe){xe===null?q.matrix.copy(de.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(de.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(de.projectionMatrix),q.projectionMatrixInverse.copy(de.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=io*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(q){return m[q]};let Z=null;function le(q,de){if(d=de.getViewerPose(l||o),g=de,d!==null){const xe=d.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Ge=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,Ge=!0);for(let Qe=0;Qe<xe.length;Qe++){const Ze=xe[Qe];let Ke=null;if(h!==null)Ke=h.getViewport(Ze);else{const St=f.getViewSubImage(u,Ze);Ke=St.viewport,Qe===0&&(e.setRenderTargetTextures(S,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(S))}let $e=k[Qe];$e===void 0&&($e=new $n,$e.layers.enable(Qe),$e.viewport=new Qt,k[Qe]=$e),$e.matrix.fromArray(Ze.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ze.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Qe===0&&(V.matrix.copy($e.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ge===!0&&V.cameras.push($e)}const he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const Qe=f.getDepthInformation(xe[0]);Qe&&Qe.isValid&&Qe.texture&&p.init(Qe,s.renderState)}if(he&&he.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let Qe=0;Qe<xe.length;Qe++){const Ze=xe[Qe].camera;if(Ze){let Ke=m[Ze];Ke||(Ke=new Mh,m[Ze]=Ke);const $e=f.getCameraImage(Ze);Ke.sourceTexture=$e}}}}for(let xe=0;xe<b.length;xe++){const Ge=y[xe],he=b[xe];Ge!==null&&he!==void 0&&he.update(Ge,de,l||o)}Z&&Z(q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const Ae=new Dh;Ae.setAnimationLoop(le),this.setAnimationLoop=function(q){Z=q},this.dispose=function(){}}}const LS=new ut,Hh=new rt;Hh.set(-1,0,0,0,1,0,0,0,1);function FS(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Ih(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,C,I,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),d(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&h(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),E(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,C,I):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const C=e.get(m),I=C.envMap,S=C.envMapRotation;I&&(p.envMap.value=I,p.envMapRotation.value.setFromMatrix4(LS.makeRotationFromEuler(S)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Hh),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,C,I){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*C,p.scale.value=I*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,C){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function E(p,m){const C=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PS(n,e,t,i){let s={},r={};function o(C,I){const S=I.program;i.uniformBlockBinding(C,S,s[C.id])}function a(C,I){let S=s[C.id];S===void 0&&(g(C),S=c(C),s[C.id]=S,C.addEventListener("dispose",p));const b=I.program;i.updateUBOMapping(C,b);const y=e.render.frame;r[C.id]!==y&&(l(C),r[C.id]=y)}function c(C){const I=n.createBuffer(),S=C.__size,b=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,S,b),n.bindBuffer(n.UNIFORM_BUFFER,null),I}function l(C){const I=s[C.id],S=C.uniforms,b=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let y=0,_=S.length;y<_;y++){const M=S[y];if(Array.isArray(M))for(let F=0,D=M.length;F<D;F++)d(M[F],y,F,b);else d(M,y,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(C,I,S,b){if(u(C,I,S,b)===!0){const y=C.__offset,_=C.value;if(Array.isArray(_)){let M=0;for(let F=0;F<_.length;F++){const D=_[F],N=E(D,!0);f(D,C.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,C.__data)}}function f(C,I,S){typeof C=="number"||typeof C=="boolean"?I[S]=C:C.isMatrix3?(I[S]=C.elements[0],I[S+1]=C.elements[1],I[S+2]=C.elements[2],I[S+3]=0,I[S+4]=C.elements[3],I[S+5]=C.elements[4],I[S+6]=C.elements[5],I[S+7]=0,I[S+8]=C.elements[6],I[S+9]=C.elements[7],I[S+10]=C.elements[8],I[S+11]=0):ArrayBuffer.isView(C)?I.set(C.subarray(0,I.length-S),S):C.toArray(I,S)}function u(C,I,S,b){const y=C.value,_=I+"_"+S;if(Array.isArray(y)){b[_]===void 0&&(b[_]=[]);const M=b[_];let F=!1;for(let D=0;D<y.length;D++)h(y[D],M,D)===!0&&(F=!0);return F}return h(y,b,_)}function h(C,I,S){if(I[S]===void 0)return typeof C=="number"||typeof C=="boolean"?I[S]=C:ArrayBuffer.isView(C)?I[S]=C.slice():I[S]=C.clone(),!0;{const b=I[S];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return I[S]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(b.equals(C)===!1)return b.copy(C),!0}}return!1}function g(C){const I=C.uniforms;let S=0;const b=16;for(let _=0,M=I.length;_<M;_++){const F=Array.isArray(I[_])?I[_]:[I[_]];for(let D=0,N=F.length;D<N;D++){const k=F[D],V=Array.isArray(k.value)?k.value:[k.value],L=Array.isArray(I[_])||Array.isArray(k.value);let Q=S;for(let H=0,J=V.length;H<J;H++){const z=V[H],K=E(z,L),Z=S%b,le=Z%K.boundary,Ae=Z+le;S+=le,Ae!==0&&b-Ae<K.storage&&(S+=b-Ae),H===0&&(Q=S),S+=K.storage}const W=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new W((S-Q)/Float32Array.BYTES_PER_ELEMENT),k.__offset=Q}}const y=S%b;return y>0&&(S+=b-y),C.__size=S,C.__cache={},this}function E(C,I){const S={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(S.boundary=4,S.storage=4):C.isVector2?(S.boundary=8,S.storage=8):C.isVector3||C.isColor?(S.boundary=16,S.storage=12):C.isVector4?(S.boundary=16,S.storage=16):C.isMatrix3?(S.boundary=16,S.storage=48):C.isMatrix4?(S.boundary=16,S.storage=64):C.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(S.boundary=16,S.storage=C.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",C),I===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(C){const I=C.target;I.removeEventListener("dispose",p),n.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function m(){for(const C in s)n.deleteBuffer(s[C]);s={},r={}}return{bind:o,update:a,dispose:m}}const US=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function NS(){return ui===null&&(ui=new _i(US,16,16,nn,Tt),ui.name="DFG_LUT",ui.minFilter=Rt,ui.magFilter=Rt,ui.wrapS=Sn,ui.wrapT=Sn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class OS{constructor(e={}){const{canvas:t=kg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=it}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const E=h,p=new Set([ou,ru,su]),m=new Set([it,ii,xs,rr,nu,iu]),C=new Uint32Array(4),I=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let b=null,y=null;const _=[],M=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let N=!1,k=null,V=null,L=null,Q=null;this._outputColorSpace=en;let W=0,H=0,J=null,z=-1,K=null;const Z=new Qt,le=new Qt;let Ae=null;const q=new He(0);let de=0,xe=t.width,Ge=t.height,he=1,Ne=null,ze=null;const Qe=new Qt(0,0,xe,Ge),Ze=new Qt(0,0,xe,Ge);let Ke=!1;const $e=new so,St=new pu;let wt=!1,$t=!1;const Ct=new ut,wn=new ee,Pt=new Qt,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let An=!1;function _n(){return J===null?he:1}let X=i;function pn(A,x){return t.getContext(A,x)}let _t,xt,Re,Ut,Xe,nt,U,w,te,Se,fe,Ie,De,oe,ce,be,O,ae,ie,Be,Ce,we,Ve;try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),X===null){const x="webgl2";if(X=pn(x,A),X===null)throw pn(x)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(A){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),mt("WebGLRenderer: "+A.message),A}function ot(){_t=new G_(X),_t.init(),Ce=new wS(X,_t),xt=new T_(X,_t,e,Ce),Re=new IS(X,_t),xt.reversedDepthBuffer&&u&&Re.buffers.depth.setReversed(!0),V=X.createFramebuffer(),L=X.createFramebuffer(),Q=X.createFramebuffer(),Ut=new V_(X),Xe=new fS,nt=new bS(X,_t,Re,Xe,xt,Ce,Ut),U=new k_(D),w=new q0(X),we=new w_(X,w),te=new H_(X,w,Ut,we),Se=new q_(X,te,w,we,Ut),ae=new W_(X,xt,nt),ce=new R_(Xe),fe=new dS(D,U,_t,xt,we,ce),Ie=new FS(D,Xe),De=new AS,oe=new _S(_t),O=new b_(D,U,Re,Se,g,c),be=new MS(D,Se,xt),Ve=new PS(X,Ut,xt,Re),ie=new B_(X,_t,Ut),Be=new z_(X,_t,Ut),Ut.programs=fe.programs,D.capabilities=xt,D.extensions=_t,D.properties=Xe,D.renderLists=De,D.shadowMap=be,D.state=Re,D.info=Ut}E!==it&&(F=new Y_(E,t.width,t.height,a,s,r));const ye=new DS(D,X);this.xr=ye,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(xe,Ge,!1))},this.getSize=function(A){return A.set(xe,Ge)},this.setSize=function(A,x,B=!0){if(ye.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=A,Ge=x,t.width=Math.floor(A*he),t.height=Math.floor(x*he),B===!0&&(t.style.width=A+"px",t.style.height=x+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,A,x)},this.getDrawingBufferSize=function(A){return A.set(xe*he,Ge*he).floor()},this.setDrawingBufferSize=function(A,x,B){xe=A,Ge=x,he=B,t.width=Math.floor(A*B),t.height=Math.floor(x*B),this.setViewport(0,0,A,x)},this.setEffects=function(A){if(E===it){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let x=0;x<A.length;x++)if(A[x].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,x,B,T){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,x,B,T),Re.viewport(Z.copy(Qe).multiplyScalar(_n()).round())},this.getScissor=function(A){return A.copy(Ze)},this.setScissor=function(A,x,B,T){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,x,B,T),Re.scissor(le.copy(Ze).multiplyScalar(_n()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(A){Re.setScissorTest(Ke=A)},this.setOpaqueSort=function(A){Ne=A},this.setTransparentSort=function(A){ze=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,x=!0,B=!0){let T=0;if(A){let P=!1;if(J!==null){const R=J.texture.format;P=p.has(R)}if(P){const R=J.texture.type,$=m.has(R),G=O.getClearColor(),Y=O.getClearAlpha(),j=G.r,ue=G.g,se=G.b;$?(C[0]=j,C[1]=ue,C[2]=se,C[3]=Y,X.clearBufferuiv(X.COLOR,0,C)):(I[0]=j,I[1]=ue,I[2]=se,I[3]=Y,X.clearBufferiv(X.COLOR,0,I))}else T|=X.COLOR_BUFFER_BIT}x&&(T|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),B&&(T|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T!==0&&X.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),k=A},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),O.dispose(),De.dispose(),oe.dispose(),nt.dispose(),Xe.dispose(),U.dispose(),Se.dispose(),te.dispose(),we.dispose(),Ve.dispose(),fe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",gr),ye.removeEventListener("sessionend",ho),Si.stop()};function qe(A){A.preventDefault(),Ou("WebGLRenderer: Context Lost."),N=!0}function st(){Ou("WebGLRenderer: Context Restored."),N=!1;const A=Ut.autoReset,x=be.enabled,B=be.autoUpdate,T=be.needsUpdate,P=be.type;ot(),Ut.autoReset=A,be.enabled=x,be.autoUpdate=B,be.needsUpdate=T,be.type=P}function Pe(A){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const x=A.target;x.removeEventListener("dispose",gt),kt(x)}function kt(A){oi(A),Xe.remove(A)}function oi(A){const x=Xe.get(A).programs;x!==void 0&&(x.forEach(function(B){fe.releaseProgram(B)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,x,B,T,P,R){x===null&&(x=hn);const $=P.isMesh&&P.matrixWorld.determinantAffine()<0,G=Eo(A,x,B,T,P);Re.setMaterial(T,$);let Y=B.index,j=1;if(T.wireframe===!0){if(Y=te.getWireframeAttribute(B),Y===void 0)return;j=2}const ue=B.drawRange,se=B.attributes.position;let re=ue.start*j,ge=(ue.start+ue.count)*j;R!==null&&(re=Math.max(re,R.start*j),ge=Math.min(ge,(R.start+R.count)*j)),Y!==null?(re=Math.max(re,0),ge=Math.min(ge,Y.count)):se!=null&&(re=Math.max(re,0),ge=Math.min(ge,se.count));const Ee=ge-re;if(Ee<0||Ee===1/0)return;we.setup(P,T,G,B,Y);let _e,Te=ie;if(Y!==null&&(_e=w.get(Y),Te=Be,Te.setIndex(_e)),P.isMesh)T.wireframe===!0?(Re.setLineWidth(T.wireframeLinewidth*_n()),Te.setMode(X.LINES)):Te.setMode(X.TRIANGLES);else if(P.isLine){let Ye=T.linewidth;Ye===void 0&&(Ye=1),Re.setLineWidth(Ye*_n()),P.isLineSegments?Te.setMode(X.LINES):P.isLineLoop?Te.setMode(X.LINE_LOOP):Te.setMode(X.LINE_STRIP)}else P.isPoints?Te.setMode(X.POINTS):P.isSprite&&Te.setMode(X.TRIANGLES);if(P.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Te.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Ye=P._multiDrawStarts,me=P._multiDrawCounts,je=P._multiDrawCount,Me=Y?w.get(Y).bytesPerElement:1,Fe=Xe.get(T).currentProgram.getUniforms();for(let Ue=0;Ue<je;Ue++)Fe.setValue(X,"_gl_DrawID",Ue),Te.render(Ye[Ue]/Me,me[Ue])}else if(P.isInstancedMesh)Te.renderInstances(re,Ee,P.count);else if(B.isInstancedBufferGeometry){const Ye=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,me=Math.min(B.instanceCount,Ye);Te.renderInstances(re,Ee,me)}else Te.render(re,Ee)};function fo(A,x,B,T){k!==null&&A.isNodeMaterial&&k.setObject(T,A),wt===!0&&ce.setState(A,B,!1),A.transparent===!0&&A.side===Fn&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,ai(A,x,T),A.side=vs,A.needsUpdate=!0,ai(A,x,T),A.side=Fn):ai(A,x,T)}this.compile=function(A,x,B=null){B===null&&(B=A),k!==null&&k.renderStart(A,x,B),y=oe.get(B),y.init(x),M.push(y),B.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(y.pushLight(P),P.castShadow&&y.pushShadow(P))}),A!==B&&A.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(y.pushLight(P),P.castShadow&&y.pushShadow(P))}),y.setupLights(),k!==null&&k.updateLights(y.state.lightsArray),$t=this.localClippingEnabled,wt=ce.init(this.clippingPlanes,$t),wt===!0&&ce.setGlobalState(this.clippingPlanes,x),k!==null&&be.render(y.state.shadowsArray,B,x);const T=new Set;return A.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const R=P.material;if(R)if(Array.isArray(R))for(let $=0;$<R.length;$++){const G=R[$];fo(G,B,x,P),T.add(G)}else fo(R,B,x,P),T.add(R)}),y=M.pop(),k!==null&&k.renderEnd(),T},this.compileAsync=function(A,x,B=null){const T=this.compile(A,x,B);return new Promise(P=>{function R(){if(T.forEach(function($){const Y=Xe.get($).currentProgram;(Y===void 0||Y.isReady())&&T.delete($)}),T.size===0){P(A);return}setTimeout(R,10)}_t.get("KHR_parallel_shader_compile")!==null?R():setTimeout(R,10)})};let mr=null;function Za(A){mr&&mr(A)}function gr(){Si.stop()}function ho(){Si.start()}const Si=new Dh;Si.setAnimationLoop(Za),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){mr=A,ye.setAnimationLoop(A),A===null?Si.stop():Si.start()},ye.addEventListener("sessionstart",gr),ye.addEventListener("sessionend",ho),this.render=function(A,x){if(x!==void 0&&x.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(A,x);const B=ye.enabled===!0&&ye.isPresenting===!0,T=F!==null&&(J===null||B)&&F.begin(D,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(x),x=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,x,J),y=oe.get(A,M.length),y.init(x),y.state.textureUnits=nt.getTextureUnits(),M.push(y),Ct.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),x.isArrayCamera?St.setFromArrayCamera(x):$e.setFromProjectionMatrix(Ct,ni,x.reversedDepth),$t=this.localClippingEnabled,wt=ce.init(this.clippingPlanes,$t),b=De.get(A,_.length),b.init(),_.push(b),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){const $=D.xr.getDepthSensingMesh();$!==null&&Er($,x,-1/0,D.sortObjects)}Er(A,x,0,D.sortObjects),b.finish(),k!==null&&k.updateLights(y.state.lightsArray),D.sortObjects===!0&&b.sort(Ne,ze),An=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,An&&O.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),wt===!0&&ce.beginShadows();const P=y.state.shadowsArray;if(be.render(P,A,x),wt===!0&&ce.endShadows(),(T&&F.hasRenderPass())===!1){const $=b.opaque,G=b.transmissive;if(y.setupLights(),x.isArrayCamera){const Y=x.cameras;if(G.length>0)for(let j=0,ue=Y.length;j<ue;j++){const se=Y[j];Ao($,G,A,se)}An&&O.render(A);for(let j=0,ue=Y.length;j<ue;j++){const se=Y[j];vr(b,A,se,se.viewport)}}else G.length>0&&Ao($,G,A,x),An&&O.render(A),vr(b,A,x)}J!==null&&H===0&&(nt.updateMultisampleRenderTarget(J),nt.updateRenderTargetMipmap(J)),T&&F.end(D),A.isScene===!0&&A.onAfterRender(D,A,x),we.resetDefaultState(),z=-1,K=null,M.pop(),M.length>0?(y=M[M.length-1],nt.setTextureUnits(y.state.textureUnits),wt===!0&&ce.setGlobalState(D.clippingPlanes,y.state.camera)):y=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,k!==null&&k.renderEnd()};function Er(A,x,B,T){if(A.visible===!1)return;if(A.layers.test(x.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(x);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){const $=x.isArrayCamera?St:$e;if(!A.frustumCulled||A.intersectsFrustum($)){T&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const G=Se.update(A),Y=A.material;Y.visible&&b.push(A,G,Y,B,Pt.z,null,x)}}else if(A.isMesh||A.isLine||A.isPoints){const $=x.isArrayCamera?St:$e;if(!A.frustumCulled||A.intersectsFrustum($)){const G=Se.update(A),Y=A.material;if(T&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(G.boundingSphere===null&&G.computeBoundingSphere(),Pt.copy(G.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Y)){const j=G.groups;for(let ue=0,se=j.length;ue<se;ue++){const re=j[ue],ge=Y[re.materialIndex];ge&&ge.visible&&b.push(A,G,ge,B,Pt.z,re,x)}}else Y.visible&&b.push(A,G,Y,B,Pt.z,null,x)}}}const R=A.children;for(let $=0,G=R.length;$<G;$++)Er(R[$],x,B,T)}function vr(A,x,B,T){const{opaque:P,transmissive:R,transparent:$}=A;y.setupLightsView(B),wt===!0&&ce.setGlobalState(D.clippingPlanes,B),T&&Re.viewport(Z.copy(T)),P.length>0&&ts(P,x,B),R.length>0&&ts(R,x,B),$.length>0&&ts($,x,B),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Ao(A,x,B,T){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[T.id]===void 0){const re=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[T.id]=new Cn(1,1,{generateMipmaps:!0,type:re?Tt:it,minFilter:In,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const R=y.state.transmissionRenderTarget[T.id],$=T.viewport||Z;R.setSize($.z*D.transmissionResolutionScale,$.w*D.transmissionResolutionScale);const G=D.getRenderTarget(),Y=D.getActiveCubeFace(),j=D.getActiveMipmapLevel();D.setRenderTarget(R),D.getClearColor(q),de=D.getClearAlpha(),de<1&&D.setClearColor(16777215,.5),D.clear(),An&&O.render(B);const ue=D.toneMapping;D.toneMapping=Pi;const se=T.viewport;if(T.viewport!==void 0&&(T.viewport=void 0),y.setupLightsView(T),wt===!0&&ce.setGlobalState(D.clippingPlanes,T),ts(A,B,T),nt.updateMultisampleRenderTarget(R),nt.updateRenderTargetMipmap(R),_t.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let ge=0,Ee=x.length;ge<Ee;ge++){const _e=x[ge],{object:Te,geometry:Ye,material:me,group:je}=_e;if(me.side===Fn&&Te.layers.test(T.layers)){const Me=me.side;me.side=vn,me.needsUpdate=!0,po(Te,B,T,Ye,me,je),me.side=Me,me.needsUpdate=!0,re=!0}}re===!0&&(nt.updateMultisampleRenderTarget(R),nt.updateRenderTargetMipmap(R))}D.setRenderTarget(G,Y,j),D.setClearColor(q,de),se!==void 0&&(T.viewport=se),D.toneMapping=ue}function ts(A,x,B){const T=x.isScene===!0?x.overrideMaterial:null;for(let P=0,R=A.length;P<R;P++){const $=A[P],{object:G,geometry:Y,group:j}=$;let ue=$.material;ue.allowOverride===!0&&T!==null&&(ue=T),G.layers.test(B.layers)&&po(G,x,B,Y,ue,j)}}function po(A,x,B,T,P,R){k!==null&&P.isNodeMaterial&&k.setObject(A,P),A.onBeforeRender(D,x,B,T,P,R),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),P.onBeforeRender(D,x,B,T,A,R),P.transparent===!0&&P.side===Fn&&P.forceSinglePass===!1?(P.side=vn,P.needsUpdate=!0,D.renderBufferDirect(B,x,T,P,A,R),P.side=vs,P.needsUpdate=!0,D.renderBufferDirect(B,x,T,P,A,R),P.side=Fn):D.renderBufferDirect(B,x,T,P,A,R),A.onAfterRender(D,x,B,T,P,R)}function mo(A){let x=0;for(const B of A)B.texture!==null&&x++;return x}function ai(A,x,B){x.isScene!==!0&&(x=hn);const T=Xe.get(A),P=y.state.lights,R=y.state.shadowsArray,$=P.state.version,G=fe.getParameters(A,P.state,R,x,B,y.state.lightProbeGridArray),Y=fe.getProgramCacheKey(G);let j=T.programs;T.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?x.environment:null,T.fog=x.fog;const ue=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;T.envMap=U.get(A.envMap||T.environment,ue),T.envMapRotation=T.environment!==null&&A.envMap===null?x.environmentRotation:A.envMapRotation,j===void 0&&(A.addEventListener("dispose",gt),j=new Map,T.programs=j,T.programVariants=new Map);let se=j.get(Y);if(se!==void 0){if(T.currentProgram===se&&T.lightsStateVersion===$)return ns(A,G),se}else G.uniforms=fe.getUniforms(A),k!==null&&A.isNodeMaterial&&k.build(A,B,G),A.onBeforeCompile(G,D),se=fe.acquireProgram(G,Y),j.set(Y,se),T.uniforms=G.uniforms;const re=T.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(re.clippingPlanes=ce.uniform),ns(A,G),T.needsLights=xn(A),T.lightsStateVersion=$,T.needsLights&&(re.ambientLightColor.value=P.state.ambient,re.lightProbe.value=P.state.probe,re.sunLights.value=P.state.sun,re.sunLightShadows.value=P.state.sunShadow,re.directionalLights.value=P.state.directional,re.directionalLightShadows.value=P.state.directionalShadow,re.spotLights.value=P.state.spot,re.spotLightShadows.value=P.state.spotShadow,re.rectAreaLights.value=P.state.rectArea,re.ltc_1.value=P.state.rectAreaLTC1,re.ltc_2.value=P.state.rectAreaLTC2,re.pointLights.value=P.state.point,re.pointLightShadows.value=P.state.pointShadow,re.hemisphereLights.value=P.state.hemi,re.sunShadowMatrix.value=P.state.sunShadowMatrix,re.sunShadowCascade.value=P.state.sunShadowCascade,re.directionalShadowMatrix.value=P.state.directionalShadowMatrix,re.spotLightMatrix.value=P.state.spotLightMatrix,re.spotLightMap.value=P.state.spotLightMap,re.pointShadowMatrix.value=P.state.pointShadowMatrix),T.numLightProbeGrids=mo(y.state.lightProbeGridArray),T.currentProgram=se,T.uniformsList=null,se}function Ms(A,x,B,T,P){const R=Xe.get(A),$=R.currentProgram.id+","+T+","+P;let G=R.programVariants.get($);return G===void 0?(G=ai(A,x,B),R.programVariants.set($,G)):(R.currentProgram=G,R.uniformsList=null,R.outputColorSpace=T,R.toneMapping=P),G}function go(A){if(A.uniformsList===null){const x=A.currentProgram.getUniforms();A.uniformsList=ha.seqWithValue(x.seq,A.uniforms)}return A.uniformsList}function ns(A,x){const B=Xe.get(A);B.outputColorSpace=x.outputColorSpace,B.batching=x.batching,B.batchingColor=x.batchingColor,B.instancing=x.instancing,B.instancingColor=x.instancingColor,B.instancingMorph=x.instancingMorph,B.skinning=x.skinning,B.morphTargets=x.morphTargets,B.morphNormals=x.morphNormals,B.morphColors=x.morphColors,B.morphTargetsCount=x.morphTargetsCount,B.numClippingPlanes=x.numClippingPlanes,B.numIntersection=x.numClipIntersection,B.vertexAlphas=x.vertexAlphas,B.vertexTangents=x.vertexTangents,B.toneMapping=x.toneMapping}function Eo(A,x,B,T,P){x.isScene!==!0&&(x=hn),nt.resetTextureUnits();const R=x.fog,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?x.environment:null,G=J===null?D.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ht.workingColorSpace,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,j=U.get(T.envMap||$,Y),ue=T.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,se=!!B.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),re=!!B.morphAttributes.position,ge=!!B.morphAttributes.normal,Ee=!!B.morphAttributes.color;let _e=Pi;T.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(_e=D.toneMapping);const Te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ye=Te!==void 0?Te.length:0,me=Xe.get(T),je=y.state.lights;if(wt===!0&&($t===!0||A!==K)){const et=A===K&&T.id===z;ce.setState(T,A,et)}let Me=!1,Fe=!1;T.version===me.__version?me.needsLights&&me.lightsStateVersion!==je.state.version||P.isBatchedMesh&&me.batching===!1||!P.isBatchedMesh&&me.batching===!0||P.isBatchedMesh&&me.batchingColor===!0&&P._colorsTexture===null||P.isBatchedMesh&&me.batchingColor===!1&&P._colorsTexture!==null||P.isInstancedMesh&&me.instancing===!1||!P.isInstancedMesh&&me.instancing===!0||P.isSkinnedMesh&&me.skinning===!1||!P.isSkinnedMesh&&me.skinning===!0||P.isInstancedMesh&&me.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&me.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&me.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&me.instancingMorph===!1&&P.morphTexture!==null||me.envMap!==j||T.fog===!0&&me.fog!==R||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==ce.numPlanes||me.numIntersection!==ce.numIntersection)||me.vertexAlphas!==ue||me.vertexTangents!==se||me.morphTargets!==re||me.morphNormals!==ge||me.morphColors!==Ee||me.morphTargetsCount!==Ye||me.numLightProbeGrids!==mo(y.state.lightProbeGridArray)?Me=!0:(me.outputColorSpace!==G||me.toneMapping!==_e)&&(Fe=!0):(Me=!0,me.__version=T.version);let Ue=me.currentProgram;(Me===!0||Fe===!0)&&(Ue=Fe===!0?Ms(T,x,P,G,_e):ai(T,x,P),k&&T.isNodeMaterial&&k.onUpdateProgram(T,Ue,me));let At=!1,at=!1,Je=!1;const ke=Ue.getUniforms(),dt=me.uniforms;if(Re.useProgram(Ue.program)&&(At=!0,at=!0,Je=!0),T.id!==z&&(z=T.id,at=!0),At||K!==A){Re.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ke.setValue(X,"projectionMatrix",A.projectionMatrix),ke.setValue(X,"viewMatrix",A.matrixWorldInverse);const Et=ke.map.cameraPosition;Et!==void 0&&Et.setValue(X,wn.setFromMatrixPosition(A.matrixWorld)),xt.logarithmicDepthBuffer&&ke.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&ke.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,at=!0,Je=!0)}if(me.needsLights&&(je.state.sunShadowMap.length>0&&ke.setValue(X,"sunShadowMap",je.state.sunShadowMap,nt),je.state.directionalShadowMap.length>0&&ke.setValue(X,"directionalShadowMap",je.state.directionalShadowMap,nt),je.state.spotShadowMap.length>0&&ke.setValue(X,"spotShadowMap",je.state.spotShadowMap,nt),je.state.pointShadowMap.length>0&&ke.setValue(X,"pointShadowMap",je.state.pointShadowMap,nt)),P.isSkinnedMesh){ke.setOptional(X,P,"bindMatrix"),ke.setOptional(X,P,"bindMatrixInverse");const et=P.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),ke.setValue(X,"boneTexture",et.boneTexture,nt))}P.isBatchedMesh&&(ke.setOptional(X,P,"batchingTexture"),ke.setValue(X,"batchingTexture",P._matricesTexture,nt),ke.setOptional(X,P,"batchingIdTexture"),ke.setValue(X,"batchingIdTexture",P._indirectTexture,nt),ke.setOptional(X,P,"batchingColorTexture"),P._colorsTexture!==null&&ke.setValue(X,"batchingColorTexture",P._colorsTexture,nt));const yt=B.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&ae.update(P,B,Ue),(at||me.receiveShadow!==P.receiveShadow)&&(me.receiveShadow=P.receiveShadow,ke.setValue(X,"receiveShadow",P.receiveShadow)),(T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial)&&T.envMap===null&&x.environment!==null&&(dt.envMapIntensity.value=x.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=NS()),at){if(ke.setValue(X,"toneMappingExposure",D.toneMappingExposure),me.needsLights&&Jt(dt,Je),R&&T.fog===!0&&Ie.refreshFogUniforms(dt,R),Ie.refreshMaterialUniforms(dt,T,he,Ge,y.state.transmissionRenderTarget[A.id]),me.needsLights&&me.numLightProbeGrids>0){const et=S;let Et=0;for(const ln of y.state.lightProbeGridArray)ln.texture!==null&&(et.textures[Et]=ln.texture,et.min[Et]=ln.boundingBox.min,et.max[Et]=ln.boundingBox.max,et.resolution[Et]=ln.resolution,Et++);for(const ln in et)et[ln].length=Et;dt.probesSH.value=et.textures,dt.probesMin.value=et.min,dt.probesMax.value=et.max,dt.probesResolution.value=et.resolution}ha.upload(X,go(me),dt,nt)}if(T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(ha.upload(X,go(me),dt,nt),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&ke.setValue(X,"center",P.center),ke.setValue(X,"modelViewMatrix",P.modelViewMatrix),ke.setValue(X,"normalMatrix",P.normalMatrix),ke.setValue(X,"modelMatrix",P.matrixWorld),T.uniformsGroups!==void 0){const et=T.uniformsGroups;for(let Et=0,ln=et.length;Et<ln;Et++){const Ni=et[Et];Ve.update(Ni,Ue),Ve.bind(Ni,Ue)}}return Ue}function Jt(A,x){A.ambientLightColor.needsUpdate=x,A.lightProbe.needsUpdate=x,A.sunLights.needsUpdate=x,A.sunLightShadows.needsUpdate=x,A.directionalLights.needsUpdate=x,A.directionalLightShadows.needsUpdate=x,A.pointLights.needsUpdate=x,A.pointLightShadows.needsUpdate=x,A.spotLights.needsUpdate=x,A.spotLightShadows.needsUpdate=x,A.rectAreaLights.needsUpdate=x,A.hemisphereLights.needsUpdate=x}function xn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,x,B){const T=Xe.get(A);T.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,T.__autoAllocateDepthBuffer===!1&&(T.__useRenderToTexture=!1),Xe.get(A.texture).__webglTexture=x,Xe.get(A.depthTexture).__webglTexture=T.__autoAllocateDepthBuffer?void 0:B,T.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,x){const B=Xe.get(A);B.__webglFramebuffer=x,B.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(A,x=0,B=0){J=A,W=x,H=B;let T=null,P=!1,R=!1;if(A){const G=Xe.get(A);if(G.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(X.FRAMEBUFFER,G.__webglFramebuffer),Z.copy(A.viewport),le.copy(A.scissor),Ae=A.scissorTest,Re.viewport(Z),Re.scissor(le),Re.setScissorTest(Ae),z=-1;return}else if(G.__webglFramebuffer===void 0)nt.setupRenderTarget(A);else if(G.__hasExternalTextures)nt.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ue=A.depthTexture;if(G.__boundDepthTexture!==ue){if(ue!==null&&Xe.has(ue)&&(A.width!==ue.image.width||A.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(A)}}const Y=A.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(R=!0);const j=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(j[x])?T=j[x][B]:T=j[x],P=!0):A.samples>0&&nt.useMultisampledRTT(A)===!1?T=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(j)?T=j[B]:T=j,Z.copy(A.viewport),le.copy(A.scissor),Ae=A.scissorTest}else Z.copy(Qe).multiplyScalar(he).floor(),le.copy(Ze).multiplyScalar(he).floor(),Ae=Ke;if(B!==0&&(T=V),Re.bindFramebuffer(X.FRAMEBUFFER,T)&&Re.drawBuffers(A,T),Re.viewport(Z),Re.scissor(le),Re.setScissorTest(Ae),P){const G=Xe.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+x,G.__webglTexture,B)}else if(R){const G=x;for(let Y=0;Y<A.textures.length;Y++){const j=Xe.get(A.textures[Y]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Y,j.__webglTexture,B,G)}}else if(A!==null&&B!==0){const G=Xe.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,G.__webglTexture,B)}z=-1};function v(A){const x=Xe.get(A);return(x.__readFormat!==A.format||x.__readType!==A.type)&&(x.__readFormat=A.format,x.__readType=A.type,x.__formatReadable=xt.textureFormatReadable(A.format),x.__typeReadable=xt.textureTypeReadable(A.type)),x}this.readRenderTargetPixels=function(A,x,B,T,P,R,$,G=0){if(!(A&&A.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$!==void 0&&(Y=Y[$],Array.isArray(Y)&&(Y=Y[0])),Y){Re.bindFramebuffer(X.FRAMEBUFFER,Y);try{const j=A.textures[G],ue=j.format,se=j.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+G);const re=v(j);if(re.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(re.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=A.width-T&&B>=0&&B<=A.height-P&&X.readPixels(x,B,T,P,Ce.convert(ue),Ce.convert(se),R)}finally{const j=J!==null?Xe.get(J).__webglFramebuffer:null;Re.bindFramebuffer(X.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(A,x,B,T,P,R,$,G=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$!==void 0&&(Y=Y[$],Array.isArray(Y)&&(Y=Y[0])),Y)if(x>=0&&x<=A.width-T&&B>=0&&B<=A.height-P){Re.bindFramebuffer(X.FRAMEBUFFER,Y);const j=A.textures[G],ue=j.format,se=j.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+G);const re=v(j);if(re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ge),X.bufferData(X.PIXEL_PACK_BUFFER,R.byteLength,X.STREAM_READ),X.readPixels(x,B,T,P,Ce.convert(ue),Ce.convert(se),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Ee=J!==null?Xe.get(J).__webglFramebuffer:null;Re.bindFramebuffer(X.FRAMEBUFFER,Ee);const _e=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Gg(X,_e,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ge),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,R),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ge),X.deleteSync(_e),R}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,x=null,B=0){const T=Math.pow(2,-B),P=Math.floor(A.image.width*T),R=Math.floor(A.image.height*T),$=x!==null?x.x:0,G=x!==null?x.y:0;nt.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,B,0,0,$,G,P,R),Re.unbindTexture()},this.copyTextureToTexture=function(A,x,B=null,T=null,P=0,R=0){let $,G,Y,j,ue,se,re,ge,Ee;const _e=A.isCompressedTexture?A.mipmaps[R]:A.image;if(B!==null)$=B.max.x-B.min.x,G=B.max.y-B.min.y,Y=B.isBox3?B.max.z-B.min.z:1,j=B.min.x,ue=B.min.y,se=B.isBox3?B.min.z:0;else{const ke=Math.pow(2,-P);$=Math.floor(_e.width*ke),G=Math.floor(_e.height*ke),A.isDataArrayTexture?Y=_e.depth:A.isData3DTexture?Y=Math.floor(_e.depth*ke):Y=1,j=0,ue=0,se=0}T!==null?(re=T.x,ge=T.y,Ee=T.z):(re=0,ge=0,Ee=0);const Te=Ce.convert(x.format),Ye=Ce.convert(x.type);let me;x.isData3DTexture?(nt.setTexture3D(x,0),me=X.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(nt.setTexture2DArray(x,0),me=X.TEXTURE_2D_ARRAY):(nt.setTexture2D(x,0),me=X.TEXTURE_2D),Re.activeTexture(X.TEXTURE0),Re.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,x.flipY),Re.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),Re.pixelStorei(X.UNPACK_ALIGNMENT,x.unpackAlignment);const je=Re.getParameter(X.UNPACK_ROW_LENGTH),Me=Re.getParameter(X.UNPACK_IMAGE_HEIGHT),Fe=Re.getParameter(X.UNPACK_SKIP_PIXELS),Ue=Re.getParameter(X.UNPACK_SKIP_ROWS),At=Re.getParameter(X.UNPACK_SKIP_IMAGES);Re.pixelStorei(X.UNPACK_ROW_LENGTH,_e.width),Re.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_e.height),Re.pixelStorei(X.UNPACK_SKIP_PIXELS,j),Re.pixelStorei(X.UNPACK_SKIP_ROWS,ue),Re.pixelStorei(X.UNPACK_SKIP_IMAGES,se);const at=A.isDataArrayTexture||A.isData3DTexture,Je=x.isDataArrayTexture||x.isData3DTexture;if(A.isDepthTexture){const ke=Xe.get(A),dt=Xe.get(x),yt=Xe.get(ke.__renderTarget),et=Xe.get(dt.__renderTarget);Re.bindFramebuffer(X.READ_FRAMEBUFFER,yt.__webglFramebuffer),Re.bindFramebuffer(X.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let Et=0;Et<Y;Et++)at&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,P,se+Et),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.get(x).__webglTexture,R,Ee+Et)),X.blitFramebuffer(j,ue,j+$,ue+G,re,ge,re+$,ge+G,X.DEPTH_BUFFER_BIT,X.NEAREST);Re.bindFramebuffer(X.READ_FRAMEBUFFER,null),Re.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(P!==0||A.isRenderTargetTexture||Xe.has(A)){const ke=Xe.get(A),dt=Xe.get(x);Re.bindFramebuffer(X.READ_FRAMEBUFFER,L),Re.bindFramebuffer(X.DRAW_FRAMEBUFFER,Q);for(let yt=0;yt<Y;yt++)at?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ke.__webglTexture,P,se+yt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ke.__webglTexture,P),Je?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dt.__webglTexture,R,Ee+yt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dt.__webglTexture,R),P!==0?X.blitFramebuffer(j,ue,j+$,ue+G,re,ge,re+$,ge+G,X.COLOR_BUFFER_BIT,X.NEAREST):Je?X.copyTexSubImage3D(me,R,re,ge,Ee+yt,j,ue,$,G):X.copyTexSubImage2D(me,R,re,ge,j,ue,$,G);Re.bindFramebuffer(X.READ_FRAMEBUFFER,null),Re.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Je?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(me,R,re,ge,Ee,$,G,Y,Te,Ye,_e.data):x.isCompressedArrayTexture?X.compressedTexSubImage3D(me,R,re,ge,Ee,$,G,Y,Te,_e.data):X.texSubImage3D(me,R,re,ge,Ee,$,G,Y,Te,Ye,_e):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,R,re,ge,$,G,Te,Ye,_e.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,R,re,ge,_e.width,_e.height,Te,_e.data):X.texSubImage2D(X.TEXTURE_2D,R,re,ge,$,G,Te,Ye,_e);Re.pixelStorei(X.UNPACK_ROW_LENGTH,je),Re.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Me),Re.pixelStorei(X.UNPACK_SKIP_PIXELS,Fe),Re.pixelStorei(X.UNPACK_SKIP_ROWS,Ue),Re.pixelStorei(X.UNPACK_SKIP_IMAGES,At),R===0&&x.generateMipmaps===!0&&x.mipmapsAutoUpdate===!0&&X.generateMipmap(me),Re.unbindTexture()},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&nt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?nt.setTextureCube(A,0):A.isData3DTexture?nt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?nt.setTexture2DArray(A,0):nt.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){W=0,H=0,J=null,Re.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const Ud=Math.atan(1/Math.SQRT2),QS=900,Nd=45,wr={dist:[25,800],half:[12,380],pitch:[.2,1.4]},ls=Ki.clamp;function zh(n){const e=Math.PI/2;return Math.round((n-Math.PI/4)/e)*e+Math.PI/4}function kS(n){const e=new $n(Nd,1,1,6e3),t=new Ya(-1,1,1,-1,1,3e3),i=Math.tan(Ki.degToRad(Nd/2)),s={x:0,z:0,yaw:Math.PI/4,pitch:.62,dist:380,half:160},r={...s};let o="free",a=1;const c=new Rh,l=new Ri(new ee(0,1,0),0),d=new ct,f=new ee,u=new ee;function h(){return o==="iso"?t:e}function g(){s.x=ls(s.x,-n,n),s.z=ls(s.z,-n,n),s.dist=ls(s.dist,...wr.dist),s.half=ls(s.half,...wr.half),s.pitch=o==="iso"?Ud:ls(s.pitch,...wr.pitch)}function E(p){const m=h(),C=o==="iso"?QS:p.dist,I=Math.cos(p.pitch);m.position.set(p.x+C*I*Math.sin(p.yaw),C*Math.sin(p.pitch),p.z+C*I*Math.cos(p.yaw)),u.set(p.x,0,p.z),m.lookAt(u),o==="iso"&&(t.left=-p.half*a,t.right=p.half*a,t.top=p.half,t.bottom=-p.half,t.updateProjectionMatrix()),m.updateMatrixWorld()}return{goal:s,cur:r,focus:u,get mode(){return o},camera:h,groundAt(p,m,C,I){d.set(p/C*2-1,-(m/I)*2+1),c.setFromCamera(d,h());const S=c.ray.intersectPlane(l,f);return!S||Math.abs(S.x-r.x)>4e3||Math.abs(S.z-r.z)>4e3?null:{x:S.x,z:S.z}},snapNow(){g(),Object.assign(r,s),E(r)},viewHalf(){return o==="iso"?s.half:s.dist*i},setMode(p){p!==o&&(p==="iso"?(s.half=ls(s.dist*i,...wr.half),r.half=s.half,s.yaw=zh(s.yaw),o="iso",s.pitch=Ud):(s.dist=ls(s.half/i,...wr.dist),r.dist=s.dist,o="free",s.pitch=.75),E(r))},resize(p,m){a=p/m,e.aspect=a,e.updateProjectionMatrix(),E(r)},update(p){g();const m=1-Math.exp(-p*12);let C=s.yaw-r.yaw;C=Math.atan2(Math.sin(C),Math.cos(C)),r.yaw+=C*m;for(const I of["x","z","pitch","dist","half"])r[I]+=(s[I]-r[I])*m;E(r)},serialize(){return{mode:o,x:s.x,z:s.z,yaw:s.yaw,pitch:s.pitch,dist:s.dist,half:s.half}},load(p){if(p){for(const m of["x","z","yaw","pitch","dist","half"])Number.isFinite(p[m])&&(s[m]=p[m]);o=p.mode==="iso"?"iso":"free",g(),Object.assign(r,s),E(r)}}}}const GS=10,HS=350,zS=.12,Od=.006;function VS(n,e,{onTap:t,pick:i}){const s=new Map,r={x:0,z:0};let o=!1,a=0,c=!1,l=0;const d=()=>({w:n.clientWidth||window.innerWidth,h:n.clientHeight||window.innerHeight}),f=(S,b)=>{const{w:y,h:_}=d();return e.groundAt(S,b,y,_)},u=(S,b)=>{const y=i?.();if(!y)return f(S,b);const{w:_,h:M}=d();return y(S/_*2-1,-(b/M)*2+1)};function h(S,b,y,_){const M=f(S.x,S.y),F=f(b,y);if(!M||!F)return;const D=M.x-F.x,N=M.z-F.z;e.goal.x+=D,e.goal.z+=N,e.snapNow();const k=Math.max(1,_-l)/1e3;l=_,r.x=r.x*.6+D/k*.4,r.z=r.z*.6+N/k*.4}function g(S,b,y){const[_,M]=[...s.keys()],F=s.get(_),D=s.get(M),N=S===_?{x:b,y}:F,k=S===M?{x:b,y}:D,V={x:(F.x+D.x)/2,y:(F.y+D.y)/2},L={x:(N.x+k.x)/2,y:(N.y+k.y)/2},Q=Math.hypot(F.x-D.x,F.y-D.y),W=Math.hypot(N.x-k.x,N.y-k.y),H=f(V.x,V.y);if(Q>10&&W>10){const Z=Q/W;e.mode==="iso"?e.goal.half*=Z:e.goal.dist*=Z}let J=Math.atan2(k.y-N.y,k.x-N.x)-Math.atan2(D.y-F.y,D.x-F.x);J=Math.atan2(Math.sin(J),Math.cos(J)),a+=J,!c&&Math.abs(a)>zS&&(c=!0,J=a),c&&(e.goal.yaw+=J),e.snapNow();const z=e.mode==="iso"?L:V,K=f(z.x,z.y);H&&K&&(e.goal.x+=H.x-K.x,e.goal.z+=H.z-K.z),e.mode==="free"&&(e.goal.pitch+=(L.y-V.y)*Od),e.snapNow()}function E(S){S.pointerType==="mouse"&&S.button!==0&&S.button!==2||(n.setPointerCapture?.(S.pointerId),s.set(S.pointerId,{x:S.clientX,y:S.clientY,sx:S.clientX,sy:S.clientY,t0:performance.now(),btn:S.button}),r.x=r.z=0,l=performance.now(),s.size>=2&&(o=!0,a=0,c=!1),s.size===1&&(o=!1))}function p(S){const b=s.get(S.pointerId);if(!b)return;const y=performance.now();s.size===1&&!o?S.pointerType==="mouse"&&b.btn===2?(e.goal.yaw-=(S.clientX-b.x)*.006,e.mode==="free"&&(e.goal.pitch+=(S.clientY-b.y)*Od),e.snapNow()):h(b,S.clientX,S.clientY,y):s.size===2&&g(S.pointerId,S.clientX,S.clientY),b.x=S.clientX,b.y=S.clientY}function m(S){const b=s.get(S.pointerId);if(!b)return;s.delete(S.pointerId);const y=performance.now();!o&&s.size===0?Math.hypot(S.clientX-b.sx,S.clientY-b.sy)<GS&&y-b.t0<HS&&S.type==="pointerup"?(r.x=r.z=0,t({x:S.clientX,y:S.clientY,ground:u(S.clientX,S.clientY)})):y-l>80&&(r.x=r.z=0):r.x=r.z=0,s.size<2&&e.mode==="iso"&&(e.goal.yaw=zh(e.goal.yaw)),s.size===0&&(o=!1)}function C(S){S.preventDefault();const b=f(S.clientX,S.clientY),y=Math.exp(S.deltaY*.0012);e.mode==="iso"?e.goal.half*=y:e.goal.dist*=y,e.snapNow();const _=f(S.clientX,S.clientY);b&&_&&(e.goal.x+=b.x-_.x,e.goal.z+=b.z-_.z,e.snapNow())}const I=S=>S.preventDefault();return n.addEventListener("pointerdown",E),n.addEventListener("pointermove",p),n.addEventListener("pointerup",m),n.addEventListener("pointercancel",m),n.addEventListener("wheel",C,{passive:!1}),n.addEventListener("contextmenu",I),{touching:()=>s.size>0,update(S){if(s.size||Math.abs(r.x)<.5&&Math.abs(r.z)<.5)return;e.goal.x+=r.x*S,e.goal.z+=r.z*S;const b=Math.exp(-S*4.5);r.x*=b,r.z*=b},dispose(){n.removeEventListener("pointerdown",E),n.removeEventListener("pointermove",p),n.removeEventListener("pointerup",m),n.removeEventListener("pointercancel",m),n.removeEventListener("wheel",C),n.removeEventListener("contextmenu",I)}}}const WS=372,Fl=gi.buildings.find(n=>n.id==="townhall");let Ot,Bt,Yo,Pl=!1;const Qd=[];function qS(n){Bt.setMode(n),Ot.view.camera=Bt.camera(),Ot.view.cameraMode=Bt.mode,Ot.bus.emit("camera:mode",{mode:Bt.mode})}function XS(){const n=Ot.store?.get?.(),e=n?.region?.terrain?.size,t=n?.region?.terrain?.cell,i=n?.build?.buildings?.find(o=>o.type==="townhall");let s=0,r=0;i&&e&&t&&Fl&&(s=(i.x+Fl.size[0]/2-e/2)*t,r=(i.z+Fl.size[1]/2-e/2)*t),Object.assign(Bt.goal,{x:s,z:r,yaw:Math.PI/4,dist:170,half:85,pitch:Bt.mode==="iso"?Bt.goal.pitch:.75}),Bt.snapNow()}function Ko(){Bt.resize(window.innerWidth,window.innerHeight)}const YS={name:"camera",required:!0,init(n){Ot=n,Bt=kS(WS),Ot.view.camera=Bt.camera(),Ot.view.cameraMode=Bt.mode,Ot.view.focus=Bt.focus,Ot.view.touching=()=>Yo.touching(),Ot.view.rig=Bt,Ko(),Yo=VS(Ot.view.canvas,Bt,{onTap:e=>Ot.bus.emit("input:tap",e),pick:()=>Ot.view.pickGround}),window.addEventListener("resize",Ko),Qd.push(Ot.bus.on("camera:set-mode",({mode:e})=>qS(e)),Ot.bus.on("debug:bench-start",()=>{Pl=!0,Object.assign(Bt.goal,{x:0,z:0,dist:290,pitch:.65})}),Ot.bus.on("debug:bench-end",()=>{Pl=!1}),Ot.bus.on("game:started",({loaded:e})=>{e||XS()})),Ot.bus.handle("camera:state",()=>Bt.serialize())},update(n){Pl&&(Bt.goal.yaw+=n*.28),Yo.update(n),Bt.update(n)},serialize(){return Bt.serialize()},load(n){Bt.load(n),Ot.view.camera=Bt.camera(),Ot.view.cameraMode=Bt.mode,Ko(),Ot.bus.emit("camera:mode",{mode:Bt.mode})},dispose(){Yo?.dispose(),window.removeEventListener("resize",Ko),Qd.forEach(n=>n())}};let $o,kd;function KS(n,e){const t=n?.region?.terrain;if(!t||!e)return null;const i=t.size,s=Math.floor(e.x/t.cell+i/2),r=Math.floor(e.z/t.cell+i/2);return s<0||r<0||s>=i||r>=i?null:{x:s,z:r,id:n.region.grid?.[r*i+s]??0}}const $S={name:"region",required:!1,init(n){$o=n,kd=$o.bus.on("input:tap",({ground:e})=>{const t=KS($o.store.get(),e);t&&$o.bus.emit("region:tap",t)})},update(){},serialize(){return null},load(){},dispose(){kd?.()}},Vh=new Map(gi.buildings.map(n=>[n.id,n]));let Fa,Ul=[],Ei="none",sr=null,Pn=0,gu=!0,Lt=null,Qn=null;const kn=()=>Fa.bus,Wh=()=>Fa.store.get();function Pa(){Lt=null,kn().emit("build:preview",null),kn().emit("build:road-preview",null)}function oo(n){kn().emit("region:select",n)}function Nl({tool:n="none",type:e=null}){Ei=n,sr=n==="build"?e:null,Pn=0,gu=!0,Qn=null,Pa(),Ei!=="none"&&Ei!=="demolish"&&oo(null)}function JS(n,e,t,i){const[s,r]=i%2?[n.size[1],n.size[0]]:n.size,o=[];if(i===0)for(let a=0;a<s;a++)o.push([e+a,t+r]);else if(i===1)for(let a=0;a<r;a++)o.push([e+s,t+a]);else if(i===2)for(let a=0;a<s;a++)o.push([e+a,t-1]);else for(let a=0;a<r;a++)o.push([e-1,t+a]);return o}function ZS(n,e,t){const i=n.region.terrain.size;let s=Pn,r=-1;for(let o=0;o<4;o++){const a=(Pn+o)%4,[c,l]=a%2?[e.size[1],e.size[0]]:e.size,d=t.x-Math.floor(c/2),f=t.z-Math.floor(l/2),u=JS(e,d,f,a).filter(([E,p])=>E>=0&&p>=0&&E<i&&p<i&&n.region.grid[p*i+E]===-1).length,h=Yc(n,e,d,f,a).ok,g=u*2+(h?1:0);u>0&&g>r&&(s=a,r=g)}return s}function Gc(){const n=Wh(),e=Vh.get(sr);if(!n||!e||!Lt)return;gu&&e.needsRoad!==!1&&(Pn=ZS(n,e,Lt));const[t,i]=Pn%2?[e.size[1],e.size[0]]:e.size,s=Lt.x-Math.floor(t/2),r=Lt.z-Math.floor(i/2),o=Yc(n,e,s,r,Pn);let a=o.ok,c=o.reason||null;a&&n.economy.money<e.cost&&(a=!1,c="money"),kn().emit("build:preview",{type:sr,x:s,z:r,rot:Pn,ok:a,reason:c,cost:e.cost,cells:ur(e,s,r,Pn)})}function qh(){const n=Wh();if(!n||!Qn||!Lt)return;const e=Xc([Qn.x,Qn.z],[Lt.x,Lt.z]),t=n.region.terrain.size,i=e.filter(([c,l])=>n.region.grid[l*t+c]===0),s=e.some(([c,l])=>n.region.grid[l*t+c]>0||n.region.terrain.kind[l*t+c]===2),r=Math.round(i.length*gi.road.cost);let o=i.length>0&&!s,a=o?null:s?"blocked":"empty";o&&n.economy.money<r&&(o=!1,a="money"),kn().emit("build:road-preview",{cells:e,ok:o,reason:a,cost:r})}function jS(n){Ei==="build"?(Lt=n,Gc()):Ei==="road"?(Qn||(Qn=n),Lt=n,qh()):n.id!==0?oo(n):oo(null)}async function Ua(n,e){const t=await kn().request("sim:command",{name:n,data:e});return t.ok||kn().emit("build:error",{reason:t.reason||"unknown"}),t}async function eC(){if(Ei==="build"&&Lt){const n=Vh.get(sr),[e,t]=Pn%2?[n.size[1],n.size[0]]:n.size,i=Lt.x-Math.floor(e/2),s=Lt.z-Math.floor(t/2),r=await Ua("build",{type:sr,x:i,z:s,rot:Pn});r.ok&&(kn().emit("build:placed",{id:r.data?.id,type:sr,x:i,z:s,cost:n.cost}),Lt=null,kn().emit("build:preview",null))}else if(Ei==="road"&&Qn&&Lt){const n=Xc([Qn.x,Qn.z],[Lt.x,Lt.z]),e=await Ua("road",{cells:n});e.ok&&(kn().emit("build:placed",{id:0,type:"road",x:Lt.x,z:Lt.z,cost:(e.data?.count||0)*gi.road.cost}),Qn=null,Pa())}}async function tC({id:n,x:e,z:t}){(await Ua("demolish",n?{id:n}:{x:e,z:t})).ok&&(oo(null),kn().emit("build:demolished",{id:n||0}))}const nC={name:"build",required:!1,init(n){Fa=n;const e=(t,i)=>Ul.push(Fa.bus.on(t,i));e("build:tool",Nl),e("region:tap",jS),e("build:confirm",eC),e("build:cancel",()=>{Qn?(Qn=null,Pa()):Lt?Pa():Nl({tool:"none"})}),e("build:rotate",()=>{gu=!1,Pn=(Pn+1)%4,Ei==="build"&&Gc()}),e("build:undo",async()=>{const t=await Ua("undo",{});t.ok&&(oo(null),kn().emit("build:undone",t.data))}),e("build:demolish",tC),e("game:started",()=>Nl({tool:"none"})),e("state:changed",()=>{Lt&&Ei==="build"?Gc():Lt&&Ei==="road"&&qh()})},update(){},serialize(){return null},load(){},dispose(){for(const n of Ul)n();Ul=[]}};function an(n){const e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstElementChild}function Vt(n,e=2400){const t=an('<div class="nb-toast" role="status"></div>');t.textContent=n,document.body.append(t),setTimeout(()=>t.remove(),e)}function ao({title:n,text:e,buttons:t}){return new Promise(i=>{const s=an(`<div class="nb-dialog" role="dialog" aria-modal="true"><div class="nb-card">
      <h2></h2><p class="nb-text"></p><div class="nb-actions"></div></div></div>`);s.querySelector("h2").textContent=n,s.querySelector(".nb-text").textContent=e;const r=s.querySelector(".nb-actions");r.style.gridTemplateColumns=`repeat(${t.length}, 1fr)`;for(const o of t){const a=an(`<button class="nb-btn${o.primary?" primary":""}"></button>`);a.textContent=o.label,a.onclick=()=>{s.remove(),i(o.value)},r.append(a)}document.body.append(s)})}async function iC(n){try{return await navigator.clipboard.writeText(n),!0}catch{const e=an('<textarea style="position:fixed;opacity:0"></textarea>');e.value=n,document.body.append(e),e.select();let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),t}}function sC(n,{onMenu:e,onGoals:t}){const{t:i,bus:s}=n,r=an(`<div class="nb-hud nb-hud-top">
      <div class="nb-date" data-k="date"><div class="nb-date-main">–</div>
        <div class="nb-date-sub"></div><div class="nb-progress"><i></i></div></div>
      <button class="nb-round" data-a="goals" aria-label="${i("ms.title")}">🏁</button>
      <button class="nb-round" data-a="menu" aria-label="${i("hud.menu")}">☰</button>
    </div>`),o=an(`<div class="nb-hud nb-hud-bottom">
      <div class="nb-slot-build"></div>
      <button class="nb-btn nb-tempo" data-a="play" aria-label="${i("hud.pause")}"></button>
      <button class="nb-btn nb-tempo" data-a="speed" aria-label="${i("hud.speed")}"></button>
    </div>`);document.body.append(r,o);const a=r.querySelector(".nb-date-main"),c=r.querySelector(".nb-date-sub"),l=r.querySelector(".nb-progress i"),d=o.querySelector('[data-a="play"]'),f=o.querySelector('[data-a="speed"]');let u=1;function h(){const E=n.store.get();if(!E)return;const p=za(E.time);a.textContent=i("date.monthYear",{month:i("date.months")[p.monthOfYear],year:p.year}),c.textContent=i(n.mode().labelKey)}function g(){const E=n.store.clock();E.speed>0&&(u=E.speed),d.textContent=E.speed===0?"▶":"❚❚",d.classList.toggle("on",E.speed===0),f.textContent=`${u}×`,r.querySelector(".nb-date").classList.toggle("paused",E.paused)}return d.addEventListener("click",()=>s.emit("time:set-speed",{speed:n.store.clock().speed===0?u:0})),f.addEventListener("click",()=>{const E=n.mode().time.speeds.filter(m=>m>0),p=E[(E.indexOf(u)+1)%E.length]||1;u=p,s.emit("time:set-speed",{speed:p})}),r.querySelector('[data-a="menu"]').addEventListener("click",e),r.querySelector('[data-a="goals"]').addEventListener("click",t),s.on("state:changed",h),s.on("game:started",()=>{h(),g()}),s.on("time:speed",g),{frame(){const E=n.store.clock();l.style.transform=`scaleX(${E.progress.toFixed(3)})`},refresh:g,bottom:o,dispose(){r.remove(),o.remove()}}}const Jo=20;function rC(){return[...performance.getEntriesByType("navigation"),...performance.getEntriesByType("resource")].reduce((e,t)=>e+(t.transferSize||0),0)/1048576}function oC(n,{getFps:e,getFrameMs:t}){const{t:i,bus:s,settings:r}=n,o=an(`<div class="nb-hud nb-debug">
      <button class="nb-chip" data-a="toggle" aria-expanded="false"><span data-k="fps">–</span> <small>fps</small> <i>▾</i></button>
      <div class="nb-panel" hidden>
        <div class="nb-row" data-k="calls"></div>
        <div class="nb-row" data-k="scene"></div>
        <div class="nb-dim" data-k="gpu"></div>
        <div class="nb-dim" data-k="build"></div>
        <div class="nb-panel-actions">
          <button class="nb-btn small primary" data-a="report">${i("debug.copy")}</button>
          <button class="nb-btn small" data-a="bench">${i("debug.bench",{s:Jo})}</button>
        </div>
      </div>
    </div>`);document.body.append(o);const a=I=>o.querySelector(`[data-k="${I}"]`),c=o.querySelector(".nb-panel"),l=o.querySelector(".nb-chip");let d=null,f=null,u=null;const h={ms:0,n:0},g=[];s.on("app:error",I=>{g.push(`${I.module}: ${I.message}`.slice(0,300)),g.length>5&&g.shift()}),s.on("save:saved",async()=>{u=await s.request("save:persisted").catch(()=>null)});function E(I){c.hidden=!I,l.setAttribute("aria-expanded",String(I)),l.querySelector("i").textContent=I?"▴":"▾",r.debugOpen=I,s.emit("settings:changed",r)}E(!!r.debugOpen);function p(){const I=n.view.renderer.info.render,S=n.view.renderer.domElement;return{fps:e(),frameMs:t(),calls:I.calls,triangles:I.triangles,width:S.width,height:S.height}}function m(){const I=p(),S=n.store.get(),b=n.store.clock(),y=n.store.pwa(),_=n.view.counts,M=S?za(S.time):null,F=[i("debug.reportTitle"),`Build: ${n.build.id} (${n.build.time})`,`${i("debug.date")}: ${new Date().toLocaleString("de-DE")}`,`${i("debug.device")}: ${navigator.userAgent}`,`GPU: ${n.view.gpu}`,`${i("debug.screen")}: ${screen.width}×${screen.height} CSS-px, DPR ${window.devicePixelRatio} · ${I.width}×${I.height} px (${i("debug.pixelFactor")} ${n.view.dpr})`,`${i("debug.quality")}: ${i(`quality.${r.quality}`)} · ${i("debug.limit")}: ${r.fpsLimit||i("common.off")}`,`${i("debug.now")}: ${I.fps.toFixed(0)} fps · ${I.calls} ${i("debug.callsShort")} · ${I.triangles} ${i("debug.triangles")}`,`${i("debug.scene")}: ${_.buildings} / ${_.cars} / ${_.trees} · ${i("debug.camera")}: ${n.view.cameraMode}`,S?`${i("debug.game")}: ${S.meta.mode} · ${i("date.months")[M.monthOfYear]} ${M.year} (${i("debug.month")} ${S.time.month}) · ${i("debug.speed")} ${b.speed}× · ${i("debug.holds")}: ${b.holds.join(",")||"–"}`:`${i("debug.game")}: –`,S?`${i("debug.broken")}: ${zf(S).join(", ")||i("common.none")} · Seed ${S.meta.seed}`:"",`${i("debug.offline")}: ${y.controlled?i("common.yes"):i("common.no")} · ${i("debug.persist")}: ${u==null?"?":i(u?"common.yes":"common.no")}${y.error?` · SW-Fehler: ${y.error}`:""}`,`${i("debug.loaded")}: ${rC().toFixed(2)} MB`];if(f){const D=f;F.push(i("debug.benchLine1",{s:Jo,avg:D.avg.toFixed(1),low:D.low1.toFixed(1),min:D.min.toFixed(1)}),i("debug.benchLine2",{below:D.below30.toFixed(1),calls:D.maxCalls}))}else F.push(i("debug.noBench"));return F.push(h.n>60?i("debug.touchFps",{fps:(h.n*1e3/h.ms).toFixed(1),n:h.n}):i("debug.touchNone")),g.length&&F.push(`${i("debug.errors")}: ${g.join(" | ")}`),F.filter(Boolean).join(`
`)}function C(){const I=d.times.slice(10).sort((y,_)=>_-y),S=I.reduce((y,_)=>y+_,0),b=I.slice(0,Math.max(1,Math.floor(I.length/100)));f={avg:I.length*1e3/S,low1:1e3/(b.reduce((y,_)=>y+_,0)/b.length),min:1e3/I[0],below30:100*I.filter(y=>y>1e3/30).length/I.length,maxCalls:d.maxCalls},d=null,s.emit("debug:bench-end",f),Vt(i("debug.benchDone",{avg:f.avg.toFixed(0),low:f.low1.toFixed(0)}),4e3)}return o.addEventListener("click",async I=>{const S=I.target.closest("[data-a]")?.dataset.a;S==="toggle"?E(c.hidden):S==="report"?Vt(await iC(m())?i("debug.copied"):i("debug.copyFailed")):S==="bench"&&!d&&(d={start:performance.now(),times:[],maxCalls:0},s.emit("debug:bench-start"),Vt(i("debug.benchRunning",{s:Jo})))}),{report:m,frame(I,S){S&&I<100&&(h.ms+=I,h.n++),d&&(d.times.push(I),d.maxCalls=Math.max(d.maxCalls,n.view.renderer.info.render.calls),performance.now()-d.start>Jo*1e3&&C())},refresh(){const I=p(),S=r.fpsLimit||120;l.className=`nb-chip ${I.fps>=S*.9?"nb-good":I.fps>=30?"nb-ok":"nb-bad"}`,a("fps").textContent=I.fps.toFixed(0),!c.hidden&&(a("calls").textContent=i("debug.callsLine",{calls:I.calls,tri:(I.triangles/1e3).toFixed(0),ms:I.frameMs.toFixed(1)}),a("scene").textContent=`${i(`quality.${r.quality}`)} · ${I.width}×${I.height} px${d?` · ${i("debug.benchShort")}`:""}`,a("gpu").textContent=n.view.gpu,a("build").textContent=`Build ${n.build.id} · ${n.build.time}`)},dispose(){o.remove()}}}const aC=["auto","slot1","slot2","slot3"],lC=["slot1","slot2","slot3"];function cC(n,{close:e}){const{t,bus:i}=n;let s=null;const r=u=>t(`saves.slot.${u}`),o=u=>{const h=u?.message||"";return h.startsWith("save.")?t(h):t("save.error.unknown")},a=(u,h,g)=>ao({title:u,text:h,buttons:[{label:t("common.cancel"),value:!1},{label:g,value:!0,primary:!0}]});function c(u,h){const g=u!=="auto";let E=`<small>${ve(t("saves.empty"))}</small>`;if(h){const m=za({month:h.month,startYear:h.startYear,startMonth:h.startMonth}),C=new Date(h.savedAt).toLocaleString("de-DE",{dateStyle:"short",timeStyle:"short"});E=`<b>${ve(t("date.monthYear",{month:t("date.months")[m.monthOfYear],year:m.year}))}</b>
        <small>${ve(t(`mode.${h.mode}.name`))} · ${ve(t("saves.savedAt",{when:C}))}</small>`}const p=(m,C,I="")=>`<button class="nb-btn small ${I}" data-s="${m}" data-slot="${u}">${ve(C)}</button>`;return`<div class="nb-slot"><div class="nb-slot-head"><span>${ve(r(u))}</span>${E}</div>
      <div class="nb-slot-actions">
        ${g?p("write",t("saves.save"),"primary"):""}
        ${h?p("read",t("saves.load")):""}
        ${h?p("export",t("saves.export")):""}
        ${h&&g?p("delete","🗑","icon"):""}
      </div></div>`}async function l(u){s=u||s;let h=[];try{h=await i.request("save:list")}catch(p){Vt(o(p))}const g=Object.fromEntries(h.map(p=>[p.id,p])),E=await i.request("save:persisted").catch(()=>null);s.innerHTML=`
      <p class="nb-hint">${ve(t("saves.intro"))}</p>
      ${aC.map(p=>c(p,g[p])).join("")}
      <button class="nb-btn wide" data-s="import">${ve(t("saves.import"))}</button>
      <p class="nb-hint">${ve(t(E?"saves.persistYes":E===!1?"saves.persistNo":"saves.persistUnknown"))}</p>`}async function d(u){const h=u.target.closest("[data-s]");if(!h||!s?.contains(h))return;const{s:g,slot:E}=h.dataset;try{if(g==="write"){if((await i.request("save:list")).some(m=>m.id===E)&&!await a(t("saves.overwriteTitle"),t("saves.overwrite",{slot:r(E)}),t("saves.save")))return;await i.request("save:write",{slot:E}),Vt(t("saves.saved",{slot:r(E)})),l()}else if(g==="read"){if(!await a(t("saves.loadTitle"),t("saves.loadConfirm"),t("saves.load")))return;await i.request("save:read",{slot:E}),e(),Vt(t("saves.loaded",{slot:r(E)}))}else if(g==="export")await i.request("save:export",{slot:E}),Vt(t("saves.exported"));else if(g==="delete"){if(!await a(t("saves.deleteTitle"),t("saves.deleteConfirm",{slot:r(E)}),t("saves.delete")))return;await i.request("save:delete",{slot:E}),l()}else g==="import"&&await f()}catch(p){Vt(o(p),3500)}}async function f(){const u=an('<input type="file" accept="application/json,.json" hidden>');document.body.append(u);const h=await new Promise(p=>{u.onchange=()=>p(u.files[0]||null),u.click()});if(u.remove(),!h)return;const g=await h.text(),E=await ao({title:t("saves.importTitle"),text:t("saves.importWhere"),buttons:[...lC.map(p=>({label:r(p),value:p})),{label:t("common.cancel"),value:null}]});E&&(await i.request("save:import",{slot:E,text:g}),Vt(t("saves.imported",{slot:r(E)})),l())}return document.addEventListener("click",d),{render:l}}const uC=[{name:"three.js 0.187.0",useKey:"licenses.use.three",license:"MIT",url:"https://threejs.org",file:"licenses/three.txt"},{name:"HDRI „park“ (Poly Haven, über @pmndrs/assets 1.7.0)",useKey:"licenses.use.hdri",license:"CC0 1.0",url:"https://polyhaven.com"},{name:"Boden-Texturen: Grass004, Grass001 (ambientCG); forest_leaves_02, aerial_rocks_02, coast_sand_01, stony_dirt_path, cobblestone_floor_08, farm_furrows (Poly Haven)",useKey:"licenses.use.terrain",license:"CC0 1.0",url:"https://ambientcg.com"},{name:"Gebäude-Texturen: Plaster001 (ambientCG); clay_roof_tiles_02, old_stone_wall, weathered_brown_planks, thatch_roof_angled, roof_slates_02 (Poly Haven)",useKey:"licenses.use.building",license:"CC0 1.0",url:"https://polyhaven.com"},{name:"Baum-Modelle fir_tree_01, tree_small_02, shrub_01 (Poly Haven), als Bilder gebacken",useKey:"licenses.use.trees",license:"CC0 1.0",url:"https://polyhaven.com"},{name:"Basis-Universal-Dekoder (three.js)",useKey:"licenses.use.basis",license:"Apache 2.0",url:"https://github.com/BinomialLLC/basis_universal"},{name:"Fachwerk-, Fenster-, Gras- und Ähren-Bilder, Gebäudeformen",useKey:"licenses.use.own",license:"–",url:""}],Eu=n=>n.map(e=>`<p>${ve(e)}</p>`).join("");function dC(n){return`<div class="nb-legal">${n("legal.privacy").map(e=>`<h3>${ve(e.h)}</h3>${Eu(e.p)}`).join("")}
    <p class="nb-hint">${ve(n("legal.stand"))}</p></div>`}function fC(n){return`<div class="nb-legal">${Eu(n("legal.imprint"))}
    <p class="nb-hint">${ve(n("legal.imprintHint"))}</p></div>`}function hC(n){const e=uC.map(t=>`<div class="nb-lic"><b>${ve(t.name)}</b>
      <small>${ve(n(t.useKey))} · ${ve(n("licenses.license"))}: ${ve(t.license)}</small>
      ${t.url?`<small>${ve(t.url)}</small>`:""}
      ${t.file?`<a href="./${t.file}" target="_blank" rel="noopener">${ve(n("licenses.fullText"))}</a>`:""}</div>`).join("");return`<div class="nb-legal"><p>${ve(n("licenses.intro"))}</p>${e}</div>`}function AC(n,e){return`<div class="nb-legal">${Eu(n("about.text"))}
    <p class="nb-hint">Build ${ve(e.id)} · ${ve(e.time)}</p></div>`}const pC=["maximum","hoch","mittel","niedrig"],mC=[120,60,30,0];function gC(n){const{t:e,bus:t,settings:i}=n,s=an(`<div class="nb-menu" hidden role="dialog" aria-modal="true">
      <div class="nb-sheet">
        <header><button class="nb-round" data-a="back" aria-label="${e("menu.back")}">‹</button>
          <h2></h2><button class="nb-round" data-a="close" aria-label="${e("menu.close")}">✕</button></header>
        <div class="nb-body"></div>
      </div></div>`);document.body.append(s);const r=s.querySelector(".nb-body"),o=s.querySelector("h2"),a=s.querySelector('[data-a="back"]');let c="main",l=!1;t.on("app:install-available",()=>{l=!0,!s.hidden&&c==="main"&&h("main")});const d=cC(n,{close:E});function f(p,m,C=""){return`<button class="nb-item" data-go="${p}"><span>${ve(m)}</span>${C?`<small>${ve(C)}</small>`:""}<i>›</i></button>`}const u={main:()=>[f("saves",e("menu.saves"),e("menu.savesSub")),f("new",e("menu.newGame"),e("menu.newGameSub")),f("cam",e("menu.camera"),e("menu.cameraSub")),f("settings",e("menu.settings"),e("menu.settingsSub")),l?f("install",e("menu.install"),e("menu.installSub")):"",'<div class="nb-sep"></div>',f("privacy",e("menu.privacy")),f("imprint",e("menu.imprint")),f("licenses",e("menu.licenses")),f("about",e("menu.about"),`Build ${n.build.id}`)].join(""),new:()=>Mp.map(p=>`<div class="nb-card-inline">
        <h3>${ve(e(ra[p].labelKey))}</h3><p>${ve(e(ra[p].descKey))}</p>
        <button class="nb-btn primary" data-new="${p}">${ve(e("menu.start"))}</button></div>`).join("")+`<p class="nb-hint">${ve(e("menu.newGameHint"))}</p>`,settings:()=>`
      <h3>${ve(e("settings.quality"))}</h3>
      <div class="nb-segs">${pC.map(p=>`<button class="nb-seg${i.quality===p?" on":""}" data-quality="${p}">${ve(e(`quality.${p}`))}</button>`).join("")}</div>
      <p class="nb-hint">${ve(e("settings.qualityHint"))}</p>
      <h3>${ve(e("settings.limit"))}</h3>
      <div class="nb-segs">${mC.map(p=>`<button class="nb-seg${i.fpsLimit===p?" on":""}" data-limit="${p}">${p?`${p}`:ve(e("common.off"))}</button>`).join("")}</div>
      <p class="nb-hint">${ve(e("settings.limitHint"))}</p>
      <h3>${ve(e("settings.camera"))}</h3>
      <div class="nb-segs">${["iso","free"].map(p=>`<button class="nb-seg${n.view.cameraMode===p?" on":""}" data-cam="${p}">${ve(e(p==="iso"?"hud.camIso":"hud.camFree"))}</button>`).join("")}</div>
      <p class="nb-hint">${ve(e("settings.cameraHint"))}</p>
      <h3>${ve(e("settings.debug"))}</h3>
      <div class="nb-segs"><button class="nb-seg${i.debugVisible!==!1?" on":""}" data-debug="1">${ve(e("common.show"))}</button>
        <button class="nb-seg${i.debugVisible===!1?" on":""}" data-debug="0">${ve(e("common.hide"))}</button></div>`,privacy:()=>dC(e),imprint:()=>fC(e),licenses:()=>hC(e),about:()=>AC(e,n.build)};async function h(p){c=p,o.textContent=e(`menu.title.${p}`),a.style.visibility=p==="main"?"hidden":"visible",p==="saves"?(r.innerHTML="",await d.render(r)):r.innerHTML=u[p](),r.scrollTop=0}function g(p="main"){s.hidden=!1,t.emit("time:hold",{reason:"menu",on:!0}),h(p)}function E(){s.hidden=!0,t.emit("time:hold",{reason:"menu",on:!1})}return s.addEventListener("click",async p=>{if(p.target===s)return E();const m=p.target.closest("button");if(!m)return;const C=m.dataset;if(C.a==="close")E();else if(C.a==="back")h("main");else if(C.go==="cam")t.emit("camera:set-mode",{mode:n.view.cameraMode==="iso"?"free":"iso"}),E();else if(C.go==="install")t.emit("app:install"),l=!1,h("main");else if(C.go)h(C.go);else if(C.new){if(!await ao({title:e("menu.newGameConfirmTitle"),text:e("menu.newGameConfirm"),buttons:[{label:e("common.cancel"),value:!1},{label:e("menu.start"),value:!0,primary:!0}]}))return;E(),t.emit("game:new",{mode:C.new}),Vt(e("menu.newGameStarted",{mode:e(ra[C.new].labelKey)}))}else if(C.quality&&C.quality!==i.quality){if(!await ao({title:e("settings.quality"),text:e("settings.qualityConfirm"),buttons:[{label:e("common.cancel"),value:!1},{label:e("common.ok"),value:!0,primary:!0}]}))return;i.quality=C.quality,t.emit("settings:changed",i),await t.request("save:write",{slot:"auto"}).catch(()=>{}),location.reload()}else C.limit!==void 0?(i.fpsLimit=Number(C.limit),t.emit("settings:changed",i),h("settings")):C.cam?(t.emit("camera:set-mode",{mode:C.cam}),h("settings")):C.debug!==void 0&&(i.debugVisible=C.debug==="1",t.emit("settings:changed",i),h("settings"))}),{open:g,close:E,isOpen:()=>!s.hidden,dispose(){s.remove()}}}let Ol=0;function $i(n,{title:e,content:t,onClose:i}){const s=an(`<div class="nb-menu nb-info-sheet" role="dialog" aria-modal="true">
      <div class="nb-sheet"><header><span style="width:52px"></span><h2></h2>
        <button class="nb-round" data-a="close" aria-label="${n.t("menu.close")}">✕</button></header>
        <div class="nb-body"></div></div></div>`),r=s.querySelector(".nb-body"),o=s.querySelector("h2");o.textContent=e||"",typeof t=="string"?r.innerHTML=t:t&&r.append(t),document.body.append(s),Ol++,n.bus.emit("time:hold",{reason:"sheet",on:!0});let a=!1;function c(){a||(a=!0,s.remove(),--Ol<=0&&(Ol=0,n.bus.emit("time:hold",{reason:"sheet",on:!1})),i?.())}return s.addEventListener("click",l=>{(l.target===s||l.target.closest('[data-a="close"]'))&&c()}),{body:r,close:c,root:s,setTitle:l=>{o.textContent=l}}}const Ht=(n,e=0)=>Number(n||0).toLocaleString("de-DE",{maximumFractionDigits:e,minimumFractionDigits:e}),Di=(n,e=0)=>`${n>0?"+":n<0?"−":""}${Ht(Math.abs(n),e)}`,Aa=n=>n>=60?"good":n>=35?"ok":"bad";function EC(n){const{t:e,bus:t}=n,i=an('<div class="nb-hud nb-stats"></div>');document.body.append(i);const s=[{id:"money",icon:"🪙"},{id:"pop",icon:"👥"},{id:"happy",icon:"🙂"},{id:"energy",icon:"⚡"},{id:"food",icon:"🌾"}];i.innerHTML=s.map(u=>`<button class="nb-stat" data-s="${u.id}"><span>${u.icon}</span><b></b><small></small></button>`).join("");const r=u=>i.querySelector(`[data-s="${u}"]`);function o(u,h,g,E=""){const p=r(u);p.querySelector("b").textContent=h,p.querySelector("small").textContent=g||"",p.querySelector("b").className=E}function a(){const u=n.store.get();if(!u?.economy||!u.population)return;const h=u.economy,g=u.population,E=u.energy;o("money",Ht(h.money),Di(h.last?.net||0),h.money<0?"nb-bad":""),o("pop",Ht(g.total),`/${Ht(g.housing)}`),o("happy",`${Math.round(g.happiness)}`,"%",`nb-${Aa(g.happiness)}`);const p=E?.ratio??1;o("energy",`${Ht(E?.production||0,0)}/${Ht(E?.demand||0,0)}`,e("stat.power"),p>=1?"nb-good":p>=.7?"nb-ok":"nb-bad");const m=h.flow?.food,C=m?m.prod-m.cons:0;o("food",Di(C,0),e("res.food"),C>=0?"nb-good":"nb-bad")}function c(){const u=n.explain("population.happiness"),g=(u?.parts||[]).slice().sort((E,p)=>Math.abs(p.effect)-Math.abs(E.effect)).map(E=>`<div class="nb-why-row"><span>${ve(e(E.labelKey,E.labelArgs))}</span>
      <b class="${E.effect>=0?"nb-good":"nb-bad"}">${Di(E.effect,1)}</b></div>`).join("");$i(n,{title:e("explain.happyTitle"),content:`<p class="nb-hint">${ve(e("explain.happyIntro"))}</p>
        <div class="nb-why-row"><span>${ve(e("explain.base"))}</span><b>${Ht(u?.base??50,0)}</b></div>${g||`<p class="nb-hint">${ve(e("explain.none"))}</p>`}
        <div class="nb-why-row total"><span>${ve(e("explain.total"))}</span><b>${Ht(u?.value??n.store.get().population.happiness,0)}</b></div>`})}function l(){const h=n.store.get().economy.last||{},g=(E,p,m)=>`<div class="nb-why-row"><span>${ve(e(E))}</span><b class="${m}">${Di(p,1)}</b></div>`;$i(n,{title:e("explain.moneyTitle"),content:`<p class="nb-hint">${ve(e("explain.moneyIntro"))}</p>
        ${g("explain.taxes",h.taxes||0,"nb-good")}${g("explain.sales",h.sales||0,"nb-good")}
        ${g("explain.upkeep",-(h.upkeep||0),"nb-bad")}${g("explain.subsidy",-(h.subsidy||0),"nb-bad")}
        <div class="nb-why-row total"><span>${ve(e("explain.net"))}</span><b>${Di(h.net||0,1)}</b></div>`})}function d(){const u=n.store.get(),h=u.economy.flow||{},g=Object.entries(u.economy.resources||{}).map(([E,p])=>{const m=h[E]||{prod:0,cons:0};return`<div class="nb-why-row"><span>${ve(e(`res.${E}`))}: ${Ht(p,0)}</span>
        <b class="${m.prod-m.cons>=0?"nb-good":"nb-bad"}">${Di(m.prod-m.cons,1)}</b></div>`}).join("");$i(n,{title:e("explain.stockTitle"),content:`<p class="nb-hint">${ve(e("explain.stockIntro"))}</p>${g}`})}function f(){const u=n.store.get().energy;$i(n,{title:e("explain.energyTitle"),content:`<p class="nb-hint">${ve(e("explain.energyIntro"))}</p>
        <div class="nb-why-row"><span>${ve(e("explain.produced"))}</span><b>${Ht(u.production,1)}</b></div>
        <div class="nb-why-row"><span>${ve(e("explain.needed"))}</span><b>${Ht(u.demand,1)}</b></div>
        <p class="nb-hint">${ve(e(u.ratio>=1?"explain.energyOk":"explain.energyShort"))}</p>`})}return i.addEventListener("click",u=>{const h=u.target.closest("[data-s]");!h||!n.store.get()||(t.emit("ui:stat",{id:h.dataset.s}),{happy:c,money:l,food:d,energy:f,pop:d}[h.dataset.s]?.())}),t.on("state:changed",a),t.on("game:started",a),a(),{refresh:a,dispose(){i.remove()}}}const Ql=["workers","business","religion"],Gd=["low","normal","high"];function vC(n){const{t:e,bus:t}=n,i=an('<div class="nb-hud nb-lamps"></div>');document.body.append(i),i.innerHTML=`<button class="nb-lamp-bar" data-people="1"><b>${ve(e("group.barTitle"))}</b>`+Ql.map(d=>`<span class="nb-lamp" data-g="${d}"><i></i><em>${ve(e(`group.${d}.name`))}</em></span>`).join("")+"<u>›</u></button>";let s=null;function r(){const d=n.store.get();if(d?.politics?.groups){for(const f of Ql){const u=d.politics.groups[f],h=i.querySelector(`[data-g="${f}"]`);h.classList.remove("good","ok","bad"),u&&h.classList.add(Aa(u.satisfaction))}s&&l()}}async function o(d,f){const u=await t.request("sim:command",{name:d,data:f});u.ok||t.emit("build:error",{reason:u.reason||"unknown"})}function a(d,f){if(d==="business"){const g=Gd.find(E=>Math.abs(f.economy.taxRate-n.mode().values.tax[E])<1e-6)||"normal";return`<div class="nb-segs">${Gd.map(E=>`<button class="nb-seg${g===E?" on":""}" data-tax="${E}">${ve(e(`group.tax.${E}`))}</button>`).join("")}</div>`}const u=d==="workers"?"foodSubsidy":"holidays",h=!!f.politics.policies?.[u];return`<div class="nb-segs"><button class="nb-seg${h?"":" on"}" data-pol="${u}" data-on="0">${ve(e("common.off"))}</button>
      <button class="nb-seg${h?" on":""}" data-pol="${u}" data-on="1">${ve(e("common.on"))}</button></div>`}function c(d,f){const u=f.politics.groups[d];if(!u)return"";const h=(u.why||[]).map(g=>`<li>${ve(e(g))}</li>`).join("");return`<section class="nb-group"><div class="nb-group-head ${Aa(u.satisfaction)}"><i></i><b>${ve(e(`group.${d}.name`))}</b>
        <span>${Ht(u.satisfaction,0)} · ${ve(e(`group.lamp.${Aa(u.satisfaction)}`))}</span></div>
      <p class="nb-hint">${ve(e(`group.${d}.desc`))}</p>
      ${h?`<ul class="nb-list">${h}</ul>`:""}
      <p class="nb-hint"><b>${ve(e("group.whatCanIDo"))}</b> ${ve(e(`group.${d}.hint`))}</p>
      <h3>${ve(e(`group.${d}.lever`))}</h3>${a(d,f)}
      <p class="nb-hint">${ve(e(`group.${d}.leverHint`))}</p></section>`}function l(){const d=n.store.get();if(!s||!d)return;const f=s.body.scrollTop;s.body.innerHTML=Ql.map(u=>c(u,d)).join(""),s.body.scrollTop=f}return i.addEventListener("click",()=>{!n.store.get()||s||(t.emit("ui:group",{id:"all"}),s=$i(n,{title:e("group.barTitle"),content:"",onClose:()=>{s=null}}),s.body.addEventListener("click",d=>{const f=d.target.closest(".nb-seg");f&&(f.dataset.tax?o("setTax",{level:f.dataset.tax}):f.dataset.pol&&o("setPolicy",{id:f.dataset.pol,on:f.dataset.on==="1"}))}),l())}),t.on("state:changed",r),t.on("game:started",r),r(),{refresh:r,dispose(){i.remove(),s?.close()}}}const _C={housing:"🏠",food:"🌾",resources:"🪵",industry:"🔨",energy:"⚡",community:"⛪",road:"🛤️",demolish:"🧹"},kl=new Map(gi.buildings.map(n=>[n.id,n]));function xC(n,{bottom:e}){const{t,bus:i}=n,s=an('<div class="nb-buildrow"></div>'),r=an('<div class="nb-hud nb-actbar" hidden></div>'),o=an('<div class="nb-hud nb-infopanel" hidden></div>');document.body.append(r,o),s.innerHTML=`<button class="nb-btn primary nb-bigbuild" data-a="build">🔨 ${ve(t("buildui.menu"))}</button>
    <button class="nb-btn nb-undobtn" data-a="undo" hidden></button>`,e.querySelector(".nb-slot-build").append(s);const a=s.querySelector('[data-a="undo"]'),c=s.querySelector('[data-a="build"]');let l="none",d=null,f=null,u=null;const h=()=>n.store.get()?.flags?.milestones||{},g=M=>M.requires&&h()[M.requires]==null,E=()=>n.store.get()?.economy?.money??0;function p(){u=$i(n,{title:t("buildui.menu"),content:"",onClose:()=>{u=null}}),m(),u.body.addEventListener("click",M=>{const F=M.target.closest("[data-c]");if(F)return C(F.dataset.c);if(M.target.closest("[data-back]"))return m();const D=M.target.closest("[data-b]");!D||D.disabled||(u.close(),i.emit("build:tool",{tool:"build",type:D.dataset.b}))})}function m(){u.setTitle(t("buildui.menu")),u.body.innerHTML=`<div class="nb-cat-grid">${gi.categories.map(M=>`<button class="nb-cat" data-c="${M.id}"><span>${_C[M.id]||"•"}</span><em>${ve(t(M.labelKey))}</em></button>`).join("")}</div>`}function C(M){i.emit("ui:category",{id:M}),M==="road"||M==="demolish"?(u.close(),i.emit("build:tool",{tool:M})):I(M)}function I(M){const F=gi.buildings.filter(D=>D.category===M&&D.buildable!==!1);u.setTitle(t(`cat.${M}`)),u.body.innerHTML=`<button class="nb-btn small nb-backbtn" data-back="1">‹ ${ve(t("menu.back"))}</button>`+F.map(D=>{const N=g(D),k=!N&&E()<D.cost;return`<button class="nb-build${N?" locked":""}${k?" poor":""}" data-b="${D.id}" ${N?"disabled":""}>
        <span class="n">${ve(t(D.labelKey))}</span><span class="c">${N?"🔒":`${Ht(D.cost)} 🪙`}</span>
        <small>${ve(N?t("buildui.locked",{goal:t(`ms.${D.requires}.name`)}):t(D.descKey))}</small>
        ${N?"":`<em>${ve(S(D))}</em>`}</button>`}).join("")}function S(M){const F=[];M.housing&&F.push(t("buildui.housing",{n:M.housing})),M.jobs&&F.push(t("buildui.jobs",{n:M.jobs}));for(const[D,N]of Object.entries(M.produce||{}))F.push(`+${Ht(N,1)} ${t(`res.${D}`)}`);for(const[D,N]of Object.entries(M.consume||{}))F.push(`−${Ht(N,1)} ${t(`res.${D}`)}`);return M.energyProduce&&F.push(`+${M.energyProduce} ${t("stat.power")}`),M.energyDemand&&F.push(`−${M.energyDemand} ${t("stat.power")}`),F.push(t("buildui.upkeep",{n:Ht(M.upkeep,1)})),F.join(" · ")}function b(){if(l==="none"){r.hidden=!0,c.hidden=!1;return}c.hidden=!0,r.hidden=!1;let M="",F="",D=!1,N=0,k=!1;if(l==="build"){const V=kl.get(d?.type||r.dataset.type);M=t(V.labelKey),k=V.size[0]!==V.size[1],d?(D=d.ok,N=d.cost,F=D?S(V):t(`cmd.reason.${d.reason}`)):F=t("buildui.tapGround")}else l==="road"?(M=t("bld.road.name"),f?(D=f.ok,N=f.cost,F=D?t("buildui.roadReady",{n:f.cells.length}):t(`cmd.reason.${f.reason}`)):F=t("buildui.roadStart")):l==="demolish"&&(M=t("cat.demolish"),F=t("buildui.demolishTap"));r.innerHTML=`<div class="nb-act-head"><b>${ve(M)}</b><span class="${D||!d&&!f?"":"nb-bad"}">${ve(F)}</span></div>
      <div class="nb-act-row"><button class="nb-btn" data-x="cancel" aria-label="${ve(t("common.cancel"))}">✕</button>
      ${k?`<button class="nb-btn" data-x="rotate" aria-label="${ve(t("buildui.rotate"))}">⟳</button>`:""}
      ${l==="demolish"?"":`<button class="nb-btn primary" data-x="ok" ${D?"":"disabled"}>✓ ${ve(t("buildui.build"))}${N?` · ${Ht(N)} 🪙`:""}</button>`}</div>`}r.addEventListener("click",M=>{const F=M.target.closest("[data-x]");!F||F.disabled||(F.dataset.x==="cancel"?i.emit("build:cancel"):F.dataset.x==="rotate"?i.emit("build:rotate"):F.dataset.x==="ok"&&i.emit("build:confirm"))}),s.addEventListener("click",M=>{const F=M.target.closest("[data-a]");F&&(F.dataset.a==="build"?p():F.dataset.a==="undo"&&i.emit("build:undo"))});function y(M){const F=n.store.get();if(!M||!F){o.hidden=!0;return}if(l==="build"||l==="road"){o.hidden=!0;return}let D,N="",k=0;if(M.id===-1)D=t("bld.road.name"),k=Math.round(gi.road.cost*.25);else{const L=F.build.buildings.find(H=>H.id===M.id),Q=L&&kl.get(L.type);if(!Q){o.hidden=!0;return}D=t(Q.labelKey),k=Math.round((L.paid||0)*.25);const W=L.active>=.99?t("info.working"):L.active>0?t("info.partly",{n:Math.round(L.active*100)}):t("info.idle");N=`<div class="nb-info-line ${L.active>=.5?"nb-good":"nb-ok"}">${ve(W)}${L.why&&L.active<.99?` – ${ve(t(`why.${L.why}`))}`:""}</div>
        <div class="nb-info-line nb-dim">${ve(S(Q))}</div>`}const V=M.id>0&&kl.get(F.build.buildings.find(L=>L.id===M.id)?.type)?.unique;o.innerHTML=`<div class="nb-info-card"><div class="nb-info-title"><b>${ve(D)}</b>
        <button class="nb-round small" data-i="close" aria-label="${ve(t("menu.close"))}">✕</button></div>${N}
      ${V?"":`<button class="nb-btn wide" data-i="demolish">🧹 ${ve(t("info.demolish",{n:k}))}</button>`}</div>`,o.dataset.x=M.x,o.dataset.z=M.z,o.dataset.id=M.id,o.hidden=!1}o.addEventListener("click",M=>{const F=M.target.closest("[data-i]");F&&(F.dataset.i==="close"?i.emit("region:select",null):i.emit("build:demolish",Number(o.dataset.id)>0?{id:Number(o.dataset.id)}:{x:Number(o.dataset.x),z:Number(o.dataset.z)}))});function _(){const M=n.store.get()?.build?.undo?.length||0;a.hidden=M===0,a.textContent=`↩ ${M}`,a.setAttribute("aria-label",t("buildui.undo",{n:M}))}return i.on("state:changed",_),i.on("build:tool",({tool:M,type:F})=>{l=M,d=null,f=null,r.dataset.type=F||"",b(),l!=="none"&&l!=="demolish"&&y(null)}),i.on("build:preview",M=>{d=M,b()}),i.on("build:road-preview",M=>{f=M,b()}),i.on("build:cancel",()=>{!d&&!f&&(l="none",b())}),i.on("build:placed",({id:M,type:F})=>{Vt(t("buildui.placed",{name:t(F==="road"?"bld.road.name":`bld.${F}.name`)}),1400)}),i.on("build:undone",()=>Vt(t("buildui.undone"),1400)),i.on("build:error",({reason:M})=>Vt(t(`cmd.reason.${M}`),2200)),i.on("region:select",y),i.on("build:demolished",()=>{o.hidden=!0}),i.on("game:started",()=>{l="none",b(),_(),o.hidden=!0}),b(),{dispose(){s.remove(),r.remove(),o.remove(),u?.close()}}}const SC=["dorf","handwerk","industrie"];function CC(n){const{t:e,bus:t}=n;function i(){const o=n.store.get(),a=o?.flags?.milestones||{},c=SC.map((d,f)=>{const u=a[d]!=null;return`<div class="nb-goal ${u?"done":""}"><i>${u?"✓":f+1}</i><div><b>${ve(e(`ms.${d}.name`))}</b>
        <p>${ve(e(`ms.${d}.desc`))}</p>${u?`<small class="nb-good">${ve(e("ms.reached"))}</small>`:""}</div></div>`}).join(""),l=o?.flags?.industryPreview?`<div class="nb-card-inline"><h3>${ve(e("ms.previewTitle"))}</h3><p>${ve(e("ms.previewText"))}</p></div>`:"";$i(n,{title:e("ms.title"),content:`<p class="nb-hint">${ve(e("ms.intro"))}</p>${c}${l}`})}function s(o){const a=(l,d,f)=>`<div class="nb-why-row"><span>${ve(e(l))}</span><b class="${f}">${Di(d,0)}</b></div>`;return $i(n,{title:e("balance.title",{year:o.year}),content:`<p class="nb-hint">${ve(e("balance.intro"))}</p>
      ${a("explain.taxes",o.taxes,"nb-good")}${a("explain.sales",o.sales,"nb-good")}
      ${a("explain.upkeep",-o.upkeep,"nb-bad")}${a("explain.subsidy",-o.subsidy,"nb-bad")}
      <div class="nb-why-row total"><span>${ve(e("balance.net"))}</span><b class="${o.net>=0?"nb-good":"nb-bad"}">${Di(o.net,0)}</b></div>
      <div class="nb-why-row"><span>${ve(e("balance.pop"))}</span><b>${Ht(o.pop)} (${Di(o.popChange)})</b></div>
      <div class="nb-why-row"><span>${ve(e("balance.happy"))}</span><b>${Ht(o.happiness)}</b></div>
      <div class="nb-why-row"><span>${ve(e("balance.money"))}</span><b>${Ht(o.money)} 🪙</b></div>
      <button class="nb-btn primary wide" data-a="close">${ve(e("balance.go"))}</button>`})}function r(o){const a=an(`<div class="nb-banner" role="status"><span>🏁</span><div><small>${ve(e("ms.reachedTitle"))}</small><b>${ve(e(`ms.${o}.name`))}</b></div></div>`);document.body.append(a),setTimeout(()=>a.classList.add("out"),4200),setTimeout(()=>a.remove(),4800)}return t.on("time:milestone",({id:o})=>r(o)),t.on("year:balance",s),{open:i,dispose(){}}}const Zo=[{id:"welcome",next:"button"},{id:"category",next:"build:tool",match:n=>n.tool==="build"},{id:"place",next:"build:placed"},{id:"numbers",next:"ui:stat"},{id:"lamps",next:"ui:group"},{id:"goals",next:"button"}];function yC(n){const{t:e,bus:t,settings:i}=n,s=an('<div class="nb-hud nb-tut" hidden></div>');document.body.append(s);let r=-1,o=[];function a(){for(const d of o)d();o=[]}function c(){a(),s.hidden=!0,r=-1,i.tutorialDone=!0,t.emit("settings:changed",i)}function l(d){if(a(),r=d,d>=Zo.length)return c();const f=Zo[d];s.hidden=!1,s.innerHTML=`<div class="nb-tut-card"><div class="nb-tut-n">${d+1}/${Zo.length}</div>
      <b>${ve(e(`tut.${f.id}.title`))}</b><p>${ve(e(`tut.${f.id}.text`))}</p>
      <div class="nb-tut-row"><button class="nb-btn small" data-t="skip">${ve(e("tut.skip"))}</button>
      ${f.next==="button"?`<button class="nb-btn small primary" data-t="next">${ve(e(d===Zo.length-1?"tut.finish":"tut.next"))}</button>`:""}</div></div>`,f.next!=="button"&&o.push(t.on(f.next,u=>{(!f.match||f.match(u||{}))&&setTimeout(()=>l(d+1),400)}))}return s.addEventListener("click",d=>{const f=d.target.closest("[data-t]");f&&(f.dataset.t==="skip"?c():l(r+1))}),t.on("game:started",({loaded:d})=>{!i.tutorialDone&&!d?l(0):d&&(a(),s.hidden=!0)}),{start:()=>l(0),dispose(){a(),s.remove()}}}let dn,cs,Br,Tr,Hd,zd=[],Vd=0,Wd=0;function qd(){document.body.classList.toggle("nb-no-debug",dn.settings.debugVisible===!1)}async function MC(){const{t:n,bus:e}=dn;e.emit("time:hold",{reason:"dialog",on:!0});const t=await ao({title:n("update.title"),text:n("update.text"),buttons:[{label:n("update.later"),value:!1},{label:n("update.now"),value:!0,primary:!0}]});e.emit("time:hold",{reason:"dialog",on:!1}),t?(Vt(n("update.saving")),e.emit("app:update-apply")):Vt(n("update.laterHint"),3500)}const IC={name:"ui",required:!0,init(n){dn=n;const{t:e,bus:t}=dn;Tr=gC(dn);const i=CC(dn);cs=sC(dn,{onMenu:()=>Tr.open(),onGoals:i.open}),Br=oC(dn,{getFps:()=>Vd,getFrameMs:()=>Wd}),qd();const s=yC(dn);zd=[EC(dn),vC(dn),xC(dn,{bottom:cs.bottom}),i,s],t.handle("ui:tutorial",()=>s.start()),t.on("settings:changed",qd),t.on("app:update-ready",MC),t.on("app:offline-ready",()=>Vt(e("pwa.offlineReady"),3500)),t.on("save:migrated",({from:r,to:o})=>Vt(e("saves.migrated",{from:r,to:o}),3500)),t.on("save:error",({code:r})=>Vt(r?.startsWith("save.")?e(r):e("save.error.unknown"),3500)),t.on("app:error",()=>Vt(e("app.error"),3e3)),t.on("time:speed",()=>cs.refresh()),t.on("time:hold",()=>cs.refresh()),Hd=setInterval(()=>{Vd=dn.loop.fps(),Wd=dn.loop.lastFrameMs(),Br.refresh(),cs.refresh()},250),t.handle("ui:report",()=>Br.report()),t.handle("ui:menu",r=>r?Tr.open(r):Tr.close())},update(){cs.frame(),Br.frame(dn.loop.lastFrameMs(),dn.view.touching?.())},serialize(){return null},load(){},dispose(){clearInterval(Hd),cs?.dispose(),Br?.dispose(),Tr?.dispose();for(const n of zd)n.dispose()}},Na={id:"none",available:()=>!1,products:async()=>[],owned:async()=>[],purchase:async()=>({ok:!1,reason:"disabled"})},bC={none:Na};let Xd=Na;const wC={name:"monetization",required:!1,init(n){Xd=bC[n.mode().monetization?.adapter]||Na,n.bus.handle("shop:adapter",()=>navigator.onLine?Xd:Na)},update(){},serialize(){return null},load(){},dispose(){}},Oa={id:"none",available:()=>!1,consent:async()=>({personalized:!1}),showRewarded:async()=>({shown:!1}),showInterstitial:async()=>({shown:!1})},BC={none:Oa};let Yd=Oa;const TC={name:"ads",required:!1,init(n){Yd=BC[n.mode().ads?.adapter]||Oa,n.bus.handle("ads:adapter",()=>navigator.onLine?Yd:Oa)},update(){},serialize(){return null},load(){},dispose(){}},RC="modulepreload",DC=function(n,e){return new URL(n,e).href},Kd={},LC=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let l=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=l(t.map(d=>{if(d=DC(d,i),d in Kd)return;Kd[d]=!0;const f=d.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(i)for(let g=o.length-1;g>=0;g--){const E=o[g];if(E.href===d&&(!f||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${u}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":RC,f||(h.as="script"),h.crossOrigin="",h.href=d,c&&h.setAttribute("nonce",c),document.head.appendChild(h),f)return new Promise((g,E)=>{h.addEventListener("load",g),h.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};class Ja extends fn{constructor(){const e=Ja.SkyShader,t=new Gn({name:e.name,uniforms:bh.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:vn,depthWrite:!1});super(new hr(1,1,1),t),this.isSky=!0}}Ja.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new ee},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Un=Uint8Array,qs=Uint16Array,FC=Int32Array,Xh=new Un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Yh=new Un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),PC=new Un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kh=function(n,e){for(var t=new qs(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new FC(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},$h=Kh(Xh,2),Jh=$h.b,UC=$h.r;Jh[28]=258,UC[258]=28;var NC=Kh(Yh,0),OC=NC.b,Hc=new qs(32768);for(var bt=0;bt<32768;++bt){var Vi=(bt&43690)>>1|(bt&21845)<<1;Vi=(Vi&52428)>>2|(Vi&13107)<<2,Vi=(Vi&61680)>>4|(Vi&3855)<<4,Hc[bt]=((Vi&65280)>>8|(Vi&255)<<8)>>1}var Wr=(function(n,e,t){for(var i=n.length,s=0,r=new qs(e);s<i;++s)n[s]&&++r[n[s]-1];var o=new qs(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new qs(1<<e);var c=15-e;for(s=0;s<i;++s)if(n[s])for(var l=s<<4|n[s],d=e-n[s],f=o[n[s]-1]++<<d,u=f|(1<<d)-1;f<=u;++f)a[Hc[f]>>c]=l}else for(a=new qs(i),s=0;s<i;++s)n[s]&&(a[s]=Hc[o[n[s]-1]++]>>15-n[s]);return a}),uo=new Un(288);for(var bt=0;bt<144;++bt)uo[bt]=8;for(var bt=144;bt<256;++bt)uo[bt]=9;for(var bt=256;bt<280;++bt)uo[bt]=7;for(var bt=280;bt<288;++bt)uo[bt]=8;var Zh=new Un(32);for(var bt=0;bt<32;++bt)Zh[bt]=5;var QC=Wr(uo,9,1),kC=Wr(Zh,5,1),Gl=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Wn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Hl=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},GC=function(n){return(n+7)/8|0},HC=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Un(n.subarray(e,t))},zC=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Yn=function(n,e,t){var i=new Error(e||zC[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Yn),!t)throw i;return i},VC=function(n,e,t,i){var s=n.length,r=0;if(!s||e.f&&!e.l)return t||new Un(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Un(s*3));var l=function(Qe){var Ze=t.length;if(Qe>Ze){var Ke=new Un(Math.max(Ze*2,Qe));Ke.set(t),t=Ke}},d=e.f||0,f=e.p||0,u=e.b||0,h=e.l,g=e.d,E=e.m,p=e.n,m=s*8;do{if(!h){d=Wn(n,f,1);var C=Wn(n,f+1,3);if(f+=3,C)if(C==1)h=QC,g=kC,E=9,p=5;else if(C==2){var y=Wn(n,f,31)+257,_=Wn(n,f+10,15)+4,M=y+Wn(n,f+5,31)+1;f+=14;for(var F=new Un(M),D=new Un(19),N=0;N<_;++N)D[PC[N]]=Wn(n,f+N*3,7);f+=_*3;for(var k=Gl(D),V=(1<<k)-1,L=Wr(D,k,1),N=0;N<M;){var Q=L[Wn(n,f,V)];f+=Q&15;var I=Q>>4;if(I<16)F[N++]=I;else{var W=0,H=0;for(I==16?(H=3+Wn(n,f,3),f+=2,W=F[N-1]):I==17?(H=3+Wn(n,f,7),f+=3):I==18&&(H=11+Wn(n,f,127),f+=7);H--;)F[N++]=W}}var J=F.subarray(0,y),z=F.subarray(y);E=Gl(J),p=Gl(z),h=Wr(J,E,1),g=Wr(z,p,1)}else Yn(1);else{var I=GC(f)+4,S=n[I-4]|n[I-3]<<8,b=I+S;if(b>s){c&&Yn(0);break}a&&l(u+S),t.set(n.subarray(I,b),u),e.b=u+=S,e.p=f=b*8,e.f=d;continue}if(f>m){c&&Yn(0);break}}a&&l(u+131072);for(var K=(1<<E)-1,Z=(1<<p)-1,le=f;;le=f){var W=h[Hl(n,f)&K],Ae=W>>4;if(f+=W&15,f>m){c&&Yn(0);break}if(W||Yn(2),Ae<256)t[u++]=Ae;else if(Ae==256){le=f,h=null;break}else{var q=Ae-254;if(Ae>264){var N=Ae-257,de=Xh[N];q=Wn(n,f,(1<<de)-1)+Jh[N],f+=de}var xe=g[Hl(n,f)&Z],Ge=xe>>4;xe||Yn(3),f+=xe&15;var z=OC[Ge];if(Ge>3){var de=Yh[Ge];z+=Hl(n,f)&(1<<de)-1,f+=de}if(f>m){c&&Yn(0);break}a&&l(u+131072);var he=u+q;if(u<z){var Ne=r-z,ze=Math.min(z,he);for(Ne+u<0&&Yn(3);u<ze;++u)t[u]=i[Ne+u]}for(;u<he;++u)t[u]=t[u-z]}}e.l=h,e.p=le,e.b=u,e.f=d,h&&(d=1,e.m=E,e.d=g,e.n=p)}while(!d);return u!=t.length&&o?HC(t,0,u):t.subarray(0,u)},WC=new Un(0),qC=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Yn(6,"invalid zlib data"),(n[1]>>5&1)==1&&Yn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Rr(n,e){return VC(n.subarray(qC(n),-4),{i:2},e,e)}var XC=typeof TextDecoder<"u"&&new TextDecoder,YC=0;try{XC.decode(WC,{stream:!0}),YC=1}catch{}class KC extends Q0{constructor(e){super(e),this.type=Tt,this.outputFormat=It,this.part=0}parse(e){const F=Math.pow(2.7182818,2.2);let D=null,N=null;function k(v,A){let x=0;for(let T=0;T<65536;++T)(T==0||v[T>>3]&1<<(T&7))&&(A[x++]=T);const B=x-1;for(;x<65536;)A[x++]=0;return B}function V(v){for(let A=0;A<16384;A++)v[A]={},v[A].len=0,v[A].lit=0,v[A].p=null}const L={l:0,c:0,lc:0};function Q(v,A,x,B,T){for(;x<v;)A=A<<8|be(B,T),x+=8;x-=v,L.l=A>>x&(1<<v)-1,L.c=A,L.lc=x}const W=new Array(59);function H(v){for(let x=0;x<=58;++x)W[x]=0;for(let x=0;x<65537;++x)W[v[x]]+=1;let A=0;for(let x=58;x>0;--x){const B=A+W[x]>>1;W[x]=A,A=B}for(let x=0;x<65537;++x){const B=v[x];B>0&&(v[x]=B|W[B]++<<6)}}function J(v,A,x,B,T,P){const R=A;let $=0,G=0;for(;B<=T;B++){if(R.value-A.value>x)return!1;Q(6,$,G,v,R);const Y=L.l;if($=L.c,G=L.lc,P[B]=Y,Y==63){if(R.value-A.value>x)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");Q(8,$,G,v,R);let j=L.l+6;if($=L.c,G=L.lc,B+j>T+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;j--;)P[B++]=0;B--}else if(Y>=59){let j=Y-59+2;if(B+j>T+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;j--;)P[B++]=0;B--}}H(P)}function z(v){return v&63}function K(v){return v>>6}function Z(v,A,x,B){for(;A<=x;A++){const T=K(v[A]),P=z(v[A]);if(T>>P)throw new Error("THREE.EXRLoader: Invalid table entry");if(P>14){const R=B[T>>P-14];if(R.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(R.lit++,R.p){const $=R.p;R.p=new Array(R.lit);for(let G=0;G<R.lit-1;++G)R.p[G]=$[G]}else R.p=new Array(1);R.p[R.lit-1]=A}else if(P){let R=0;for(let $=1<<14-P;$>0;$--){const G=B[(T<<14-P)+R];if(G.len||G.p)throw new Error("THREE.EXRLoader: Invalid table entry");G.len=P,G.lit=A,R++}}}return!0}const le={c:0,lc:0};function Ae(v,A,x,B){v=v<<8|be(x,B),A+=8,le.c=v,le.lc=A}const q={c:0,lc:0};function de(v,A,x,B,T,P,R,$,G){if(v==A){B<8&&(Ae(x,B,T,P),x=le.c,B=le.lc),B-=8;let Y=x>>B;if(Y=new Uint8Array([Y])[0],$.value+Y>G)return!1;const j=R[$.value-1];for(;Y-- >0;)R[$.value++]=j}else if($.value<G)R[$.value++]=v;else return!1;q.c=x,q.lc=B}function xe(v){return v&65535}function Ge(v){const A=xe(v);return A>32767?A-65536:A}const he={a:0,b:0};function Ne(v,A){const x=Ge(v),T=Ge(A),P=x+(T&1)+(T>>1),R=P,$=P-T;he.a=R,he.b=$}function ze(v,A){const x=xe(v),B=xe(A),T=x-(B>>1)&65535,P=B+T-32768&65535;he.a=P,he.b=T}function Qe(v,A,x,B,T,P,R){const $=R<16384,G=x>T?T:x;let Y=1,j,ue;for(;Y<=G;)Y<<=1;for(Y>>=1,j=Y,Y>>=1;Y>=1;){ue=0;const se=ue+P*(T-j),re=P*Y,ge=P*j,Ee=B*Y,_e=B*j;let Te,Ye,me,je;for(;ue<=se;ue+=ge){let Me=ue;const Fe=ue+B*(x-j);for(;Me<=Fe;Me+=_e){const Ue=Me+Ee,At=Me+re,at=At+Ee;$?(Ne(v[Me+A],v[At+A]),Te=he.a,me=he.b,Ne(v[Ue+A],v[at+A]),Ye=he.a,je=he.b,Ne(Te,Ye),v[Me+A]=he.a,v[Ue+A]=he.b,Ne(me,je),v[At+A]=he.a,v[at+A]=he.b):(ze(v[Me+A],v[At+A]),Te=he.a,me=he.b,ze(v[Ue+A],v[at+A]),Ye=he.a,je=he.b,ze(Te,Ye),v[Me+A]=he.a,v[Ue+A]=he.b,ze(me,je),v[At+A]=he.a,v[at+A]=he.b)}if(x&Y){const Ue=Me+re;$?Ne(v[Me+A],v[Ue+A]):ze(v[Me+A],v[Ue+A]),Te=he.a,v[Ue+A]=he.b,v[Me+A]=Te}}if(T&Y){let Me=ue;const Fe=ue+B*(x-j);for(;Me<=Fe;Me+=_e){const Ue=Me+Ee;$?Ne(v[Me+A],v[Ue+A]):ze(v[Me+A],v[Ue+A]),Te=he.a,v[Ue+A]=he.b,v[Me+A]=Te}}j=Y,Y>>=1}return ue}function Ze(v,A,x,B,T,P,R,$,G){let Y=0,j=0;const ue=R,se=Math.trunc(B.value+(T+7)/8);for(;B.value<se;)for(Ae(Y,j,x,B),Y=le.c,j=le.lc;j>=14;){const ge=Y>>j-14&16383,Ee=A[ge];if(Ee.len)j-=Ee.len,de(Ee.lit,P,Y,j,x,B,$,G,ue),Y=q.c,j=q.lc;else{if(!Ee.p)throw new Error("THREE.EXRLoader: hufDecode issues");let _e;for(_e=0;_e<Ee.lit;_e++){const Te=z(v[Ee.p[_e]]);for(;j<Te&&B.value<se;)Ae(Y,j,x,B),Y=le.c,j=le.lc;if(j>=Te&&K(v[Ee.p[_e]])==(Y>>j-Te&(1<<Te)-1)){j-=Te,de(Ee.p[_e],P,Y,j,x,B,$,G,ue),Y=q.c,j=q.lc;break}}if(_e==Ee.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}const re=8-T&7;for(Y>>=re,j-=re;j>0;){const ge=A[Y<<14-j&16383];if(ge.len)j-=ge.len,de(ge.lit,P,Y,j,x,B,$,G,ue),Y=q.c,j=q.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function Ke(v,A,x,B,T,P){const R={value:0},$=x.value,G=ce(A,x),Y=ce(A,x);x.value+=4;const j=ce(A,x);if(x.value+=4,G<0||G>=65537||Y<0||Y>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");const ue=new Array(65537),se=new Array(16384);V(se);const re=B-(x.value-$);if(J(v,x,re,G,Y,ue),j>8*(B-(x.value-$)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");Z(ue,G,Y,se),Ze(ue,se,v,x,j,Y,P,T,R)}function $e(v,A,x){for(let B=0;B<x;++B)A[B]=v[A[B]]}function St(v){for(let A=1;A<v.length;A++){const x=v[A-1]+v[A]-128;v[A]=x}}function wt(v,A){let x=0,B=Math.floor((v.length+1)/2),T=0;const P=v.length-1;for(;!(T>P||(A[T++]=v[x++],T>P));)A[T++]=v[B++]}function $t(v){let A=v.byteLength;const x=new Array;let B=0;const T=new DataView(v);for(;A>0;){const P=T.getInt8(B++);if(P<0){const R=-P;A-=R+1;for(let $=0;$<R;$++)x.push(T.getUint8(B++))}else{const R=P;A-=2;const $=T.getUint8(B++);for(let G=0;G<R+1;G++)x.push($)}}return x}function Ct(v,A,x,B,T,P){let R=new DataView(P.buffer);const $=x[v.idx[0]].width,G=x[v.idx[0]].height,Y=3,j=Math.floor($/8),ue=Math.ceil($/8),se=Math.ceil(G/8),re=$-(ue-1)*8,ge=G-(se-1)*8,Ee={value:0},_e=new Array(Y),Te=new Array(Y),Ye=new Array(Y),me=new Array(Y),je=new Array(Y);for(let Fe=0;Fe<Y;++Fe)je[Fe]=A[v.idx[Fe]],_e[Fe]=Fe<1?0:_e[Fe-1]+ue*se,Te[Fe]=new Float32Array(64),Ye[Fe]=new Uint16Array(64),me[Fe]=new Uint16Array(ue*64);for(let Fe=0;Fe<se;++Fe){let Ue=8;Fe==se-1&&(Ue=ge);let At=8;for(let Je=0;Je<ue;++Je){Je==ue-1&&(At=re);for(let ke=0;ke<Y;++ke)Ye[ke].fill(0),Ye[ke][0]=T[_e[ke]++],Pt(Ee,B,Ye[ke]),hn(Ye[ke],Te[ke]),An(Te[ke]);_n(Te);for(let ke=0;ke<Y;++ke)xt(Te[ke],me[ke],Je*64)}let at=0;for(let Je=0;Je<Y;++Je){const ke=x[v.idx[Je]].type;for(let dt=8*Fe;dt<8*Fe+Ue;++dt){at=je[Je][dt];for(let yt=0;yt<j;++yt){const et=yt*64+(dt&7)*8;R.setUint16(at+0*ke,me[Je][et+0],!0),R.setUint16(at+2*ke,me[Je][et+1],!0),R.setUint16(at+4*ke,me[Je][et+2],!0),R.setUint16(at+6*ke,me[Je][et+3],!0),R.setUint16(at+8*ke,me[Je][et+4],!0),R.setUint16(at+10*ke,me[Je][et+5],!0),R.setUint16(at+12*ke,me[Je][et+6],!0),R.setUint16(at+14*ke,me[Je][et+7],!0),at+=16*ke}}if(j!=ue)for(let dt=8*Fe;dt<8*Fe+Ue;++dt){const yt=je[Je][dt]+8*j*2*ke,et=j*64+(dt&7)*8;for(let Et=0;Et<At;++Et)R.setUint16(yt+Et*2*ke,me[Je][et+Et],!0)}}}const Me=new Uint16Array($);R=new DataView(P.buffer);for(let Fe=0;Fe<Y;++Fe){x[v.idx[Fe]].decoded=!0;const Ue=x[v.idx[Fe]].type;if(x[Fe].type==2)for(let At=0;At<G;++At){const at=je[Fe][At];for(let Je=0;Je<$;++Je)Me[Je]=R.getUint16(at+Je*2*Ue,!0);for(let Je=0;Je<$;++Je)R.setFloat32(at+Je*2*Ue,Le.fromHalfFloat(Me[Je]),!0)}}}function wn(v,A,x,B,T,P){const R=new DataView(P.buffer),$=x[v],G=$.width,Y=$.height,j=Math.ceil(G/8),ue=Math.ceil(Y/8),se=Math.floor(G/8),re=G-(j-1)*8,ge=Y-(ue-1)*8,Ee={value:0};let _e=0;const Te=new Float32Array(64),Ye=new Uint16Array(64),me=new Uint16Array(j*64);for(let je=0;je<ue;++je){let Me=8;je==ue-1&&(Me=ge);for(let Fe=0;Fe<j;++Fe)Ye.fill(0),Ye[0]=T[_e++],Pt(Ee,B,Ye),hn(Ye,Te),An(Te),xt(Te,me,Fe*64);for(let Fe=8*je;Fe<8*je+Me;++Fe){let Ue=A[v][Fe];for(let At=0;At<se;++At){const at=At*64+(Fe&7)*8;for(let Je=0;Je<8;++Je)R.setUint16(Ue+Je*2*$.type,me[at+Je],!0);Ue+=16*$.type}if(j!=se){const At=se*64+(Fe&7)*8;for(let at=0;at<re;++at)R.setUint16(Ue+at*2*$.type,me[At+at],!0)}}}$.decoded=!0}function Pt(v,A,x){let B,T=1;for(;T<64;)B=A[v.value],B==65280?T=64:B>>8==255?T+=B&255:(x[T]=B,T++),v.value++}function hn(v,A){A[0]=Le.fromHalfFloat(v[0]),A[1]=Le.fromHalfFloat(v[1]),A[2]=Le.fromHalfFloat(v[5]),A[3]=Le.fromHalfFloat(v[6]),A[4]=Le.fromHalfFloat(v[14]),A[5]=Le.fromHalfFloat(v[15]),A[6]=Le.fromHalfFloat(v[27]),A[7]=Le.fromHalfFloat(v[28]),A[8]=Le.fromHalfFloat(v[2]),A[9]=Le.fromHalfFloat(v[4]),A[10]=Le.fromHalfFloat(v[7]),A[11]=Le.fromHalfFloat(v[13]),A[12]=Le.fromHalfFloat(v[16]),A[13]=Le.fromHalfFloat(v[26]),A[14]=Le.fromHalfFloat(v[29]),A[15]=Le.fromHalfFloat(v[42]),A[16]=Le.fromHalfFloat(v[3]),A[17]=Le.fromHalfFloat(v[8]),A[18]=Le.fromHalfFloat(v[12]),A[19]=Le.fromHalfFloat(v[17]),A[20]=Le.fromHalfFloat(v[25]),A[21]=Le.fromHalfFloat(v[30]),A[22]=Le.fromHalfFloat(v[41]),A[23]=Le.fromHalfFloat(v[43]),A[24]=Le.fromHalfFloat(v[9]),A[25]=Le.fromHalfFloat(v[11]),A[26]=Le.fromHalfFloat(v[18]),A[27]=Le.fromHalfFloat(v[24]),A[28]=Le.fromHalfFloat(v[31]),A[29]=Le.fromHalfFloat(v[40]),A[30]=Le.fromHalfFloat(v[44]),A[31]=Le.fromHalfFloat(v[53]),A[32]=Le.fromHalfFloat(v[10]),A[33]=Le.fromHalfFloat(v[19]),A[34]=Le.fromHalfFloat(v[23]),A[35]=Le.fromHalfFloat(v[32]),A[36]=Le.fromHalfFloat(v[39]),A[37]=Le.fromHalfFloat(v[45]),A[38]=Le.fromHalfFloat(v[52]),A[39]=Le.fromHalfFloat(v[54]),A[40]=Le.fromHalfFloat(v[20]),A[41]=Le.fromHalfFloat(v[22]),A[42]=Le.fromHalfFloat(v[33]),A[43]=Le.fromHalfFloat(v[38]),A[44]=Le.fromHalfFloat(v[46]),A[45]=Le.fromHalfFloat(v[51]),A[46]=Le.fromHalfFloat(v[55]),A[47]=Le.fromHalfFloat(v[60]),A[48]=Le.fromHalfFloat(v[21]),A[49]=Le.fromHalfFloat(v[34]),A[50]=Le.fromHalfFloat(v[37]),A[51]=Le.fromHalfFloat(v[47]),A[52]=Le.fromHalfFloat(v[50]),A[53]=Le.fromHalfFloat(v[56]),A[54]=Le.fromHalfFloat(v[59]),A[55]=Le.fromHalfFloat(v[61]),A[56]=Le.fromHalfFloat(v[35]),A[57]=Le.fromHalfFloat(v[36]),A[58]=Le.fromHalfFloat(v[48]),A[59]=Le.fromHalfFloat(v[49]),A[60]=Le.fromHalfFloat(v[57]),A[61]=Le.fromHalfFloat(v[58]),A[62]=Le.fromHalfFloat(v[62]),A[63]=Le.fromHalfFloat(v[63])}function An(v){const A=.5*Math.cos(.7853975),x=.5*Math.cos(3.14159/16),B=.5*Math.cos(3.14159/8),T=.5*Math.cos(3*3.14159/16),P=.5*Math.cos(5*3.14159/16),R=.5*Math.cos(3*3.14159/8),$=.5*Math.cos(7*3.14159/16),G=new Array(4),Y=new Array(4),j=new Array(4),ue=new Array(4);for(let se=0;se<8;++se){const re=se*8;G[0]=B*v[re+2],G[1]=R*v[re+2],G[2]=B*v[re+6],G[3]=R*v[re+6],Y[0]=x*v[re+1]+T*v[re+3]+P*v[re+5]+$*v[re+7],Y[1]=T*v[re+1]-$*v[re+3]-x*v[re+5]-P*v[re+7],Y[2]=P*v[re+1]-x*v[re+3]+$*v[re+5]+T*v[re+7],Y[3]=$*v[re+1]-P*v[re+3]+T*v[re+5]-x*v[re+7],j[0]=A*(v[re+0]+v[re+4]),j[3]=A*(v[re+0]-v[re+4]),j[1]=G[0]+G[3],j[2]=G[1]-G[2],ue[0]=j[0]+j[1],ue[1]=j[3]+j[2],ue[2]=j[3]-j[2],ue[3]=j[0]-j[1],v[re+0]=ue[0]+Y[0],v[re+1]=ue[1]+Y[1],v[re+2]=ue[2]+Y[2],v[re+3]=ue[3]+Y[3],v[re+4]=ue[3]-Y[3],v[re+5]=ue[2]-Y[2],v[re+6]=ue[1]-Y[1],v[re+7]=ue[0]-Y[0]}for(let se=0;se<8;++se)G[0]=B*v[16+se],G[1]=R*v[16+se],G[2]=B*v[48+se],G[3]=R*v[48+se],Y[0]=x*v[8+se]+T*v[24+se]+P*v[40+se]+$*v[56+se],Y[1]=T*v[8+se]-$*v[24+se]-x*v[40+se]-P*v[56+se],Y[2]=P*v[8+se]-x*v[24+se]+$*v[40+se]+T*v[56+se],Y[3]=$*v[8+se]-P*v[24+se]+T*v[40+se]-x*v[56+se],j[0]=A*(v[se]+v[32+se]),j[3]=A*(v[se]-v[32+se]),j[1]=G[0]+G[3],j[2]=G[1]-G[2],ue[0]=j[0]+j[1],ue[1]=j[3]+j[2],ue[2]=j[3]-j[2],ue[3]=j[0]-j[1],v[0+se]=ue[0]+Y[0],v[8+se]=ue[1]+Y[1],v[16+se]=ue[2]+Y[2],v[24+se]=ue[3]+Y[3],v[32+se]=ue[3]-Y[3],v[40+se]=ue[2]-Y[2],v[48+se]=ue[1]-Y[1],v[56+se]=ue[0]-Y[0]}function _n(v){for(let A=0;A<64;++A){const x=v[0][A],B=v[1][A],T=v[2][A];v[0][A]=x+1.5747*T,v[1][A]=x-.1873*B-.4682*T,v[2][A]=x+1.8556*B}}const X=new Float32Array(1),pn=new Uint32Array(X.buffer);function _t(v){X[0]=v;const A=pn[0],x=A>>>16&32768,B=A&2147483647;if(B>=1199570944)return x|(B>2139095040?32256:31744);if(B<947912704)return X[0]=Math.abs(v)+.5,x|pn[0]-1056964608;const T=B+4095+(B>>>13&1);return x|T-939524096>>>13}function xt(v,A,x){if(N===null){N=new Uint16Array(65536);for(let B=1;B<65536;++B){if((B&31744)===31744)continue;const T=Le.fromHalfFloat(B),P=Math.abs(T),R=P<=1?Math.pow(P,2.2):Math.pow(F,P-1);N[B]=_t(T<0?-R:R)}}for(let B=0;B<64;++B)A[x+B]=N[_t(v[B])]}function Re(v){return new DataView(v.array.buffer,v.offset.value,v.size)}function Ut(v){const A=v.viewer.buffer.slice(v.offset.value,v.offset.value+v.size),x=new Uint8Array($t(A)),B=new Uint8Array(x.length);return St(x),wt(x,B),new DataView(B.buffer)}function Xe(v){const A=v.array.slice(v.offset.value,v.offset.value+v.size),x=Rr(A),B=new Uint8Array(x.length);return St(x),wt(x,B),new DataView(B.buffer)}function nt(v){const A=v.viewer,x={value:v.offset.value},B=new Uint16Array(v.columns*v.lines*(v.inputChannels.length*v.type)),T=new Uint8Array(8192);let P=0;const R=new Array(v.inputChannels.length);for(let ge=0,Ee=v.inputChannels.length;ge<Ee;ge++)R[ge]={},R[ge].start=P,R[ge].end=R[ge].start,R[ge].nx=v.columns,R[ge].ny=v.lines,R[ge].size=v.type,P+=R[ge].nx*R[ge].ny*R[ge].size;const $=Ce(A,x),G=Ce(A,x);if(G>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if($<=G)for(let ge=0;ge<G-$+1;ge++)T[ge+$]=O(A,x);const Y=new Uint16Array(65536),j=k(T,Y),ue=ce(A,x);Ke(v.array,A,x,ue,B,P);for(let ge=0;ge<v.inputChannels.length;++ge){const Ee=R[ge];for(let _e=0;_e<R[ge].size;++_e)Qe(B,Ee.start+_e,Ee.nx,Ee.size,Ee.ny,Ee.nx*Ee.size,j)}$e(Y,B,P);let se=0;const re=new Uint8Array(B.buffer.byteLength);for(let ge=0;ge<v.lines;ge++)for(let Ee=0;Ee<v.inputChannels.length;Ee++){const _e=R[Ee],Te=_e.nx*_e.size,Ye=new Uint8Array(B.buffer,_e.end*2,Te*2);re.set(Ye,se),se+=Te*2,_e.end+=Te}return new DataView(re.buffer)}function U(v){const A=v.array.slice(v.offset.value,v.offset.value+v.size),x=Rr(A),B=v.inputChannels.length*v.lines*v.columns*v.totalBytes,T=new ArrayBuffer(B),P=new DataView(T);let R=0,$=0;const G=new Array(4);for(let Y=0;Y<v.lines;Y++)for(let j=0;j<v.inputChannels.length;j++){let ue=0;switch(v.inputChannels[j].pixelType){case 1:G[0]=R,G[1]=G[0]+v.columns,R=G[1]+v.columns;for(let re=0;re<v.columns;++re){const ge=x[G[0]++]<<8|x[G[1]++];ue+=ge,P.setUint16($,ue,!0),$+=2}break;case 2:G[0]=R,G[1]=G[0]+v.columns,G[2]=G[1]+v.columns,R=G[2]+v.columns;for(let re=0;re<v.columns;++re){const ge=x[G[0]++]<<24|x[G[1]++]<<16|x[G[2]++]<<8;ue+=ge,P.setUint32($,ue,!0),$+=4}break}}return P}function w(v){const A=v.array;let x=v.offset.value;const B=v.columns,T=v.lines,P=v.inputChannels,R=v.totalBytes,$=Jt.compression==="B44A_COMPRESSION",G=new Uint8Array(T*B*R),Y=new Uint16Array(16);let j=0;for(let ue=0;ue<P.length;ue++){const se=P[ue],re=se.pixelType*2,ge=Math.ceil(B/se.xSampling),Ee=Math.ceil(T/se.ySampling),_e=se.xSampling===1&&se.ySampling===1;if(se.pixelType!==1){for(let me=0;me<Ee;me++)if(_e){const je=me*B*R+j*B;for(let Me=0;Me<ge*re;Me++)G[je+Me]=A[x++]}else x+=ge*re;j+=re;continue}const Te=Math.ceil(ge/4),Ye=Math.ceil(Ee/4);for(let me=0;me<Ye;me++)for(let je=0;je<Te;je++){if($&&A[x+2]>=52){const Me=A[x]<<8|A[x+1],Fe=Me&32768?Me&32767:~Me&65535;Y.fill(Fe),x+=3}else{const Me=A[x]<<8|A[x+1],Fe=A[x+2]>>2,Ue=32<<Fe,At=Me+((A[x+2]<<4|A[x+3]>>4)&63)*(1<<Fe)-Ue&65535,at=At+((A[x+3]<<2|A[x+4]>>6)&63)*(1<<Fe)-Ue&65535,Je=at+(A[x+4]&63)*(1<<Fe)-Ue&65535,ke=Me+(A[x+5]>>2&63)*(1<<Fe)-Ue&65535,dt=At+((A[x+5]<<4|A[x+6]>>4)&63)*(1<<Fe)-Ue&65535,yt=at+((A[x+6]<<2|A[x+7]>>6)&63)*(1<<Fe)-Ue&65535,et=Je+(A[x+7]&63)*(1<<Fe)-Ue&65535,Et=ke+(A[x+8]>>2&63)*(1<<Fe)-Ue&65535,ln=dt+((A[x+8]<<4|A[x+9]>>4)&63)*(1<<Fe)-Ue&65535,Ni=yt+((A[x+9]<<2|A[x+10]>>6)&63)*(1<<Fe)-Ue&65535,li=et+(A[x+10]&63)*(1<<Fe)-Ue&65535,is=Et+(A[x+11]>>2&63)*(1<<Fe)-Ue&65535,vo=ln+((A[x+11]<<4|A[x+12]>>4)&63)*(1<<Fe)-Ue&65535,_o=Ni+((A[x+12]<<2|A[x+13]>>6)&63)*(1<<Fe)-Ue&65535,xo=li+(A[x+13]&63)*(1<<Fe)-Ue&65535,_r=[Me,ke,Et,is,At,dt,ln,vo,at,yt,Ni,_o,Je,et,li,xo];for(let Is=0;Is<16;Is++)Y[Is]=_r[Is]&32768?_r[Is]&32767:~_r[Is]&65535;x+=14}if(se.pLinear){if(D===null){D=new Uint16Array(65536);for(let Me=0;Me<65536;Me++)if((Me&31744)===31744||Me>32768)D[Me]=0;else{const Fe=Le.fromHalfFloat(Me);D[Me]=Fe<=0?0:Le.toHalfFloat(8*Math.log(Fe))}}for(let Me=0;Me<16;Me++)Y[Me]=D[Y[Me]]}for(let Me=0;Me<4;Me++){const Fe=me*4+Me;if(!(Fe>=Ee))for(let Ue=0;Ue<4;Ue++){const At=je*4+Ue;if(At>=ge)continue;const at=Y[Me*4+Ue];for(let Je=0;Je<se.ySampling;Je++){const ke=Fe*se.ySampling+Je;if(!(ke>=T))for(let dt=0;dt<se.xSampling;dt++){const yt=At*se.xSampling+dt;if(yt>=B)continue;const et=ke*B*R+j*B+yt*2;G[et]=at&255,G[et+1]=at>>8&255}}}}}j+=2}return new DataView(G.buffer)}function te(v){const A=v.viewer,x={value:v.offset.value},B=new Uint8Array(v.columns*v.lines*(v.inputChannels.length*v.type*2)),T={version:ae(A,x),unknownUncompressedSize:ae(A,x),unknownCompressedSize:ae(A,x),acCompressedSize:ae(A,x),dcCompressedSize:ae(A,x),rleCompressedSize:ae(A,x),rleUncompressedSize:ae(A,x),rleRawSize:ae(A,x),totalAcUncompressedCount:ae(A,x),totalDcUncompressedCount:ae(A,x),acCompression:ae(A,x)};if(T.version<2)throw new Error("THREE.EXRLoader: "+Jt.compression+" version "+T.version+" is unsupported");const P=new Array;let R=Ce(A,x)-2;for(;R>0;){const Ee=Se(A.buffer,x),_e=O(A,x),Te=_e>>2&3,Ye=(_e>>4)-1,me=new Int8Array([Ye])[0],je=O(A,x);P.push({name:Ee,index:me,type:je,compression:Te}),R-=Ee.length+3}const $=Jt.channels,G=new Array(v.inputChannels.length);for(let Ee=0;Ee<v.inputChannels.length;++Ee){const _e=G[Ee]={},Te=$[Ee];_e.name=Te.name,_e.compression=0,_e.decoded=!1,_e.type=Te.pixelType,_e.pLinear=Te.pLinear,_e.width=v.columns,_e.height=v.lines}const Y={idx:new Array(3)};for(let Ee=0;Ee<v.inputChannels.length;++Ee){const _e=G[Ee],Te=_e.name.lastIndexOf("."),Ye=Te>=0?_e.name.substring(Te+1):_e.name;for(let me=0;me<P.length;++me){const je=P[me];Ye===je.name&&_e.type===je.type&&(_e.compression=je.compression,je.index>=0&&(Y.idx[je.index]=Ee),_e.offset=Ee)}}let j,ue,se;if(T.acCompressedSize>0)switch(T.acCompression){case 0:j=new Uint16Array(T.totalAcUncompressedCount),Ke(v.array,A,x,T.acCompressedSize,j,T.totalAcUncompressedCount);break;case 1:const Ee=v.array.slice(x.value,x.value+T.totalAcUncompressedCount),_e=Rr(Ee);j=new Uint16Array(_e.buffer),x.value+=T.totalAcUncompressedCount;break}if(T.dcCompressedSize>0){const Ee={array:v.array,offset:x,size:T.dcCompressedSize};ue=new Uint16Array(Xe(Ee).buffer),x.value+=T.dcCompressedSize}if(T.rleRawSize>0){const Ee=v.array.slice(x.value,x.value+T.rleCompressedSize),_e=Rr(Ee);se=$t(_e.buffer),x.value+=T.rleCompressedSize}let re=0;const ge=new Array(G.length);for(let Ee=0;Ee<ge.length;++Ee)ge[Ee]=new Array;for(let Ee=0;Ee<v.lines;++Ee)for(let _e=0;_e<G.length;++_e)ge[_e].push(re),re+=G[_e].width*v.type*2;Y.idx[0]!==void 0&&G[Y.idx[0]]&&Ct(Y,ge,G,j,ue,B);for(let Ee=0;Ee<G.length;++Ee){const _e=G[Ee];if(!_e.decoded)switch(_e.compression){case 2:let Te=0,Ye=0;for(let me=0;me<v.lines;++me){let je=ge[Ee][Te];for(let Me=0;Me<_e.width;++Me){for(let Fe=0;Fe<2*_e.type;++Fe)B[je++]=se[Ye+Fe*_e.width*_e.height];Ye++}Te++}break;case 1:wn(Ee,ge,G,j,ue,B);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(B.buffer)}function Se(v,A){const x=new Uint8Array(v);let B=0;for(;x[A.value+B]!=0;)B+=1;const T=new TextDecoder().decode(x.slice(A.value,A.value+B));return A.value=A.value+B+1,T}function fe(v,A,x){const B=new TextDecoder().decode(new Uint8Array(v).slice(A.value,A.value+x));return A.value=A.value+x,B}function Ie(v,A){const x=oe(v,A),B=ce(v,A);return[x,B]}function De(v,A){const x=ce(v,A),B=ce(v,A);return[x,B]}function oe(v,A){const x=v.getInt32(A.value,!0);return A.value=A.value+4,x}function ce(v,A){const x=v.getUint32(A.value,!0);return A.value=A.value+4,x}function be(v,A){const x=v[A.value];return A.value=A.value+1,x}function O(v,A){const x=v.getUint8(A.value);return A.value=A.value+1,x}const ae=function(v,A){const x=Number(v.getBigInt64(A.value,!0));return A.value+=8,x};function ie(v,A){const x=v.getFloat32(A.value,!0);return A.value+=4,x}function Be(v,A){return Le.toHalfFloat(ie(v,A))}function Ce(v,A){const x=v.getUint16(A.value,!0);return A.value+=2,x}function we(v,A){return Le.fromHalfFloat(Ce(v,A))}function Ve(v,A,x,B){const T=x.value,P=[];for(;x.value<T+B-1;){const R=Se(A,x),$=oe(v,x),G=O(v,x);x.value+=3;const Y=oe(v,x),j=oe(v,x);P.push({name:R,pixelType:$,pLinear:G,xSampling:Y,ySampling:j})}return x.value+=1,P}function ot(v,A){const x=ie(v,A),B=ie(v,A),T=ie(v,A),P=ie(v,A),R=ie(v,A),$=ie(v,A),G=ie(v,A),Y=ie(v,A);return{redX:x,redY:B,greenX:T,greenY:P,blueX:R,blueY:$,whiteX:G,whiteY:Y}}function ye(v,A){const x=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],B=O(v,A);return x[B]}function qe(v,A){const x=oe(v,A),B=oe(v,A),T=oe(v,A),P=oe(v,A);return{xMin:x,yMin:B,xMax:T,yMax:P}}function st(v,A){const x=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],B=O(v,A);return x[B]}function Pe(v,A){const x=["ENVMAP_LATLONG","ENVMAP_CUBE"],B=O(v,A);return x[B]}function gt(v,A){const x=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],B=["ROUND_DOWN","ROUND_UP"],T=ce(v,A),P=ce(v,A),R=O(v,A);return{xSize:T,ySize:P,levelMode:x[R&15],roundingMode:B[R>>4]}}function kt(v,A){const x=ie(v,A),B=ie(v,A);return[x,B]}function oi(v,A){const x=ie(v,A),B=ie(v,A),T=ie(v,A);return[x,B,T]}function fo(v,A,x,B,T){if(B==="string"||B==="stringvector"||B==="iccProfile")return fe(A,x,T);if(B==="chlist")return Ve(v,A,x,T);if(B==="chromaticities")return ot(v,x);if(B==="compression")return ye(v,x);if(B==="box2i")return qe(v,x);if(B==="envmap")return Pe(v,x);if(B==="tiledesc")return gt(v,x);if(B==="lineOrder")return st(v,x);if(B==="float")return ie(v,x);if(B==="v2f")return kt(v,x);if(B==="v3f")return oi(v,x);if(B==="int")return oe(v,x);if(B==="rational")return Ie(v,x);if(B==="timecode")return De(v,x);if(B==="preview"||B==="deepImageState"||B==="idmanifest")return x.value+=T,"skipped";x.value+=T}function mr(v,A){const x=Math.log2(v);return A=="ROUND_DOWN"?Math.floor(x):Math.ceil(x)}function Za(v,A,x){let B=0;switch(v.levelMode){case"ONE_LEVEL":B=1;break;case"MIPMAP_LEVELS":B=mr(Math.max(A,x),v.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return B}function gr(v,A,x,B){const T=new Array(v);for(let P=0;P<v;P++){const R=1<<P;let $=A/R|0;B=="ROUND_UP"&&$*R<A&&($+=1);const G=Math.max($,1);T[P]=(G+x-1)/x|0}return T}function ho(){const v=this,A=v.offset,x={value:0};for(let B=0;B<v.tileCount;B++){const T=oe(v.viewer,A),P=oe(v.viewer,A);A.value+=8,v.size=ce(v.viewer,A);const R=T*v.blockWidth,$=P*v.blockHeight;v.columns=R+v.blockWidth>v.width?v.width-R:v.blockWidth,v.lines=$+v.blockHeight>v.height?v.height-$:v.blockHeight;const G=v.columns*v.totalBytes,j=v.size<v.lines*G?v.uncompress(v):Re(v);A.value+=v.size;for(let ue=0;ue<v.lines;ue++){const se=ue*v.columns*v.totalBytes;for(let re=0;re<v.inputChannels.length;re++){const ge=Jt.channels[re].name,Ee=v.channelByteOffsets[ge]*v.columns,_e=v.decodeChannels[ge];if(_e===void 0)continue;x.value=se+Ee;const Te=(v.height-(1+$+ue))*v.outLineWidth;for(let Ye=0;Ye<v.columns;Ye++){const me=Te+(Ye+R)*v.outputChannels+_e;v.byteArray[me]=v.getter(j,x)}}}}}function Si(){const v=this,A=v.offset,x={value:0};for(let B=0;B<v.height/v.blockHeight;B++){const T=oe(v.viewer,A)-Jt.dataWindow.yMin;v.size=ce(v.viewer,A),v.lines=T+v.blockHeight>v.height?v.height-T:v.blockHeight;const P=v.columns*v.totalBytes,$=v.size<v.lines*P?v.uncompress(v):Re(v);A.value+=v.size;for(let G=0;G<v.lines;G++){const Y=T+G,j=G*P,ue=(v.height-1-Y)*v.outLineWidth;for(let se=0;se<v.inputChannels.length;se++){const re=Jt.channels[se].name,ge=v.channelByteOffsets[re]*v.columns,Ee=v.decodeChannels[re];if(Ee!==void 0){x.value=j+ge;for(let _e=0;_e<v.columns;_e++){const Te=ue+_e*v.outputChannels+Ee;v.byteArray[Te]=v.getter($,x)}}}}}}function Er(){const v=this,A=v.chunkOffsets,x={value:0};for(let B=0;B<A.length;B++){const T={value:A[B]};T.value+=4;const P=oe(v.viewer,T)-Jt.dataWindow.yMin;v.size=ce(v.viewer,T),v.lines=P+v.blockHeight>v.height?v.height-P:v.blockHeight;const R=v.columns*v.totalBytes,$=v.size<v.lines*R,G=v.offset;v.offset=T;const Y=$?v.uncompress(v):Re(v);v.offset=G;for(let j=0;j<v.lines;j++){const ue=P+j,se=j*R,re=(v.height-1-ue)*v.outLineWidth;for(let ge=0;ge<v.inputChannels.length;ge++){const Ee=Jt.channels[ge].name,_e=v.channelByteOffsets[Ee]*v.columns,Te=v.decodeChannels[Ee];if(Te!==void 0){x.value=se+_e;for(let Ye=0;Ye<v.columns;Ye++){const me=re+Ye*v.outputChannels+Te;v.byteArray[me]=v.getter(Y,x)}}}}}}function vr(v,A,x,B){if(x===0)return null;const T=v.slice(A,A+x);switch(B){case"NO_COMPRESSION":return new DataView(T.buffer,T.byteOffset,T.byteLength);case"RLE_COMPRESSION":{const P=new Uint8Array($t(T.buffer.slice(T.byteOffset,T.byteOffset+T.byteLength))),R=new Uint8Array(P.length);return St(P),wt(P,R),new DataView(R.buffer)}case"ZIPS_COMPRESSION":{const P=Rr(T),R=new Uint8Array(P.length);return St(P),wt(P,R),new DataView(R.buffer)}default:throw new Error("THREE.EXRLoader: "+B+" is unsupported for deep data")}}function Ao(){const v=this,A=v.chunkOffsets,x=v.width,B=v.height,T=v.deepChannels,P=Jt.compression,R=v.multiPart,$=v.decodeChannels,G=v.outputChannels,Y=v.byteArray instanceof Uint16Array;let j=-1;for(let ue=0;ue<T.length;ue++)if(T[ue].name==="A"){j=ue;break}for(let ue=0;ue<A.length;ue++){const se={value:A[ue]};R&&(se.value+=4);const re=oe(v.viewer,se)-Jt.dataWindow.yMin,ge=ae(v.viewer,se),Ee=ae(v.viewer,se);ae(v.viewer,se);const _e=vr(v.array,se.value,ge,P);if(se.value+=ge,_e===null)continue;const Te=new Uint32Array(x);for(let Ue=0;Ue<x;Ue++)Te[Ue]=_e.getUint32(Ue*4,!0);const Ye=Te[x-1];if(Ye===0){se.value+=Ee;continue}const me=vr(v.array,se.value,Ee,P),je=[];let Me=0;for(let Ue=0;Ue<T.length;Ue++)je.push(Me),Me+=Ye*T[Ue].bytesPerSample;const Fe=(B-1-re)*v.outLineWidth;for(let Ue=0;Ue<x;Ue++){const At=Ue===0?0:Te[Ue-1],Je=Te[Ue]-At;if(Je===0)continue;const ke=new Float32Array(G);let dt=0;for(let et=0;et<Je;et++){const Et=At+et,ln=1-dt;if(ln<=0)break;let Ni=1;if(j>=0){const li=T[j].bytesPerSample,is=je[j]+Et*li;Ni=li===2?Le.fromHalfFloat(me.getUint16(is,!0)):me.getFloat32(is,!0)}for(let li=0;li<T.length;li++){const is=T[li],vo=$[is.name];if(vo===void 0)continue;const _o=is.bytesPerSample,xo=je[li]+Et*_o,_r=_o===2?Le.fromHalfFloat(me.getUint16(xo,!0)):me.getFloat32(xo,!0);ke[vo]+=_r*ln}dt+=Ni*ln}$.A!==void 0&&(ke[$.A]=dt);const yt=Fe+Ue*G;for(let et=0;et<G;et++)v.byteArray[yt+et]=Y?Le.toHalfFloat(ke[et]):ke[et]}}}function ts(v,A,x){const B={};let T=!1;for(;;){const P=Se(A,x);if(P==="")break;T=!0;const R=Se(A,x),$=ce(v,x),G=fo(v,A,x,R,$);G===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${R}'.`):B[P]=G}return T?B:null}function po(v,A,x){if(v.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const B=v.getUint8(4),T=v.getUint8(5),P={singleTile:!!(T&2),longName:!!(T&4),deepFormat:!!(T&8),multiPart:!!(T&16)};x.value=8;const R=[];if(P.multiPart){for(;;){const $=ts(v,A,x);if($===null)break;$.version=B,$.spec=P,R.push($)}if(R.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const $=ts(v,A,x);$.version=B,$.spec=P,R.push($)}return R}function mo(v,A,x,B,T,P){const R={size:0,viewer:A,array:x,offset:B,width:v.dataWindow.xMax-v.dataWindow.xMin+1,height:v.dataWindow.yMax-v.dataWindow.yMin+1,inputChannels:v.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ln};switch(v.compression){case"NO_COMPRESSION":R.blockHeight=1,R.uncompress=Re;break;case"RLE_COMPRESSION":R.blockHeight=1,R.uncompress=Ut;break;case"ZIPS_COMPRESSION":R.blockHeight=1,R.uncompress=Xe;break;case"ZIP_COMPRESSION":R.blockHeight=16,R.uncompress=Xe;break;case"PIZ_COMPRESSION":R.blockHeight=32,R.uncompress=nt;break;case"PXR24_COMPRESSION":R.blockHeight=16,R.uncompress=U;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":R.blockHeight=32,R.uncompress=w;break;case"DWAA_COMPRESSION":R.blockHeight=32,R.uncompress=te;break;case"DWAB_COMPRESSION":R.blockHeight=256,R.uncompress=te;break;default:throw new Error("THREE.EXRLoader: "+v.compression+" is unsupported")}const $={};for(const se of v.channels)switch(se.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":$[se.name]=!0,R.type=se.pixelType}let G=!1,Y=!1;if($.Y&&$.RY&&$.BY)R.outputChannels=4,R.yCbCr=!0;else if($.R&&$.G&&$.B)R.outputChannels=4;else if($.Y)R.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(R.outputChannels){case 4:P==It?(G=!$.A,R.format=It,R.colorSpace=Ln,R.outputChannels=4,R.decodeChannels={R:0,G:1,B:2,A:3}):P==nn?(R.format=nn,R.colorSpace=Ln,R.outputChannels=2,R.decodeChannels={R:0,G:1}):P==On?(R.format=On,R.colorSpace=Ln,R.outputChannels=1,R.decodeChannels={R:0}):Y=!0;break;case 1:P==It?(G=!0,R.format=It,R.colorSpace=Ln,R.outputChannels=4,R.shouldExpand=!0,R.decodeChannels={Y:0}):P==nn?(R.format=nn,R.colorSpace=Ln,R.outputChannels=2,R.shouldExpand=!0,R.decodeChannels={Y:0}):P==On?(R.format=On,R.colorSpace=Ln,R.outputChannels=1,R.decodeChannels={Y:0}):Y=!0;break;default:Y=!0}if(Y)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(R.yCbCr&&(R.format=It,R.outputChannels=4,R.decodeChannels={Y:0,RY:1,BY:2},G=!0),R.type==1)switch(T){case qt:R.getter=we;break;case Tt:R.getter=Ce;break}else if(R.type==2)switch(T){case qt:R.getter=ie;break;case Tt:R.getter=Be}else throw new Error("THREE.EXRLoader: unsupported pixelType "+R.type+" for "+v.compression+".");R.columns=R.width;const j=R.width*R.height*R.outputChannels;switch(T){case qt:R.byteArray=new Float32Array(j),G&&R.byteArray.fill(1,0,j);break;case Tt:R.byteArray=new Uint16Array(j),G&&R.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",T);break}let ue=0;for(const se of v.channels)R.decodeChannels[se.name]!==void 0&&(R.channelByteOffsets[se.name]=ue),ue+=se.pixelType*2;if(R.totalBytes=ue,R.outLineWidth=R.width*R.outputChannels,v.spec.deepFormat){R.deepChannels=[];let se=0;for(const re of v.channels){const ge=re.pixelType===0?4:re.pixelType*2;R.deepChannels.push({name:re.name,pixelType:re.pixelType,bytesPerSample:ge}),se+=ge}R.deepBytesPerSample=se,R.chunkOffsets=v._chunkOffsets,R.multiPart=v.spec.multiPart,R.decode=Ao.bind(R)}else if(v.spec.singleTile){R.blockHeight=v.tiles.ySize,R.blockWidth=v.tiles.xSize;const se=Za(v.tiles,R.width,R.height),re=gr(se,R.width,v.tiles.xSize,v.tiles.roundingMode),ge=gr(se,R.height,v.tiles.ySize,v.tiles.roundingMode);R.tileCount=re[0]*ge[0];for(let Ee=0;Ee<se;Ee++)for(let _e=0;_e<ge[Ee];_e++)for(let Te=0;Te<re[Ee];Te++)ae(A,B);R.decode=ho.bind(R)}else if(v.spec.multiPart)R.blockWidth=R.width,R.chunkOffsets=v._chunkOffsets,R.decode=Er.bind(R);else{R.blockWidth=R.width;const se=Math.ceil(R.height/R.blockHeight);for(let re=0;re<se;re++)ae(A,B);R.decode=Si.bind(R)}return R}const ai={value:0},Ms=new DataView(e),go=new Uint8Array(e),ns=po(Ms,e,ai),Eo=Math.max(0,Math.min(this.part,ns.length-1)),Jt=ns[Eo];if(Jt.spec.multiPart||Jt.spec.deepFormat)for(let v=0;v<ns.length;v++){const A=ns[v].chunkCount;if(v===Eo){Jt._chunkOffsets=[];for(let x=0;x<A;x++)Jt._chunkOffsets.push(ae(Ms,ai))}else for(let x=0;x<A;x++)ae(Ms,ai)}const xn=mo(Jt,Ms,go,ai,this.type,this.outputFormat);if(xn.decode(),xn.shouldExpand){const v=xn.byteArray;if(this.outputFormat==It)for(let A=0;A<v.length;A+=4)v[A+2]=v[A+1]=v[A];else if(this.outputFormat==nn)for(let A=0;A<v.length;A+=2)v[A+1]=v[A]}if(xn.yCbCr){const v=xn.byteArray,A=xn.width*xn.height;if(this.type===Tt)for(let x=0;x<A;x++){const B=x*4,T=Le.fromHalfFloat(v[B]),P=Le.fromHalfFloat(v[B+1]),R=Le.fromHalfFloat(v[B+2]),$=(1+P)*T,G=(1+R)*T,Y=(T-$*.2126-G*.0722)/.7152;v[B]=Le.toHalfFloat(Math.max(0,$)),v[B+1]=Le.toHalfFloat(Math.max(0,Y)),v[B+2]=Le.toHalfFloat(Math.max(0,G))}else for(let x=0;x<A;x++){const B=x*4,T=v[B],P=v[B+1],R=v[B+2],$=(1+P)*T,G=(1+R)*T;v[B]=Math.max(0,$),v[B+1]=Math.max(0,(T-$*.2126-G*.0722)/.7152),v[B+2]=Math.max(0,G)}}return{header:Jt,width:xn.width,height:xn.height,data:xn.byteArray,format:xn.format,colorSpace:xn.colorSpace,type:this.type,minFilter:Rt,magFilter:Rt,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}}const $C=Ki.clamp,di=(n,e,t)=>{const i=$C((t-n)/(e-n),0,1);return i*i*(3-2*i)},Dr=(n,e,t)=>n+(e-n)*t,Tn={fogDay:new He("#c3cfdb"),fogTwi:new He("#d8a27c"),fogNight:new He("#0a1020"),sunLow:new He("#ff9a52"),sunHigh:new He("#fff1dc"),moon:new He("#8fa8ff"),skyDay:new He("#d9e2ea"),skyNight:new He("#34487e"),groundDay:new He("#55603f"),groundNight:new He("#10150f"),smokeDay:new He("#d2d2d2"),smokeNight:new He("#2a2e3c")};function JC(){const n={elev:40,night:0,daylight:1,sunDir:new ee,lightDir:new ee,moonDir:new ee,sunIntensity:3.2,sunColor:new He,hemiIntensity:.35,hemiSky:new He,hemiGround:new He,envIntensity:.55,exposure:.95,fog:new He,smoke:new He,turbidity:3.5,rayleigh:1.4};return{out:n,compute(e){const t=(e-.25)*Math.PI*2,i=Math.sin(t)*62,s=Ki.degToRad(90+(e-.25)*360);n.elev=i,n.sunDir.setFromSphericalCoords(1,Ki.degToRad(90-i),s),n.moonDir.copy(n.sunDir).negate();const r=di(-4,16,i);return n.daylight=r,n.night=1-di(-9,7,i),i>0?(n.lightDir.setFromSphericalCoords(1,Ki.degToRad(90-Math.max(i,11)),s),n.sunIntensity=3.2*di(0,14,i),n.sunColor.copy(Tn.sunLow).lerp(Tn.sunHigh,di(0,28,i))):(n.lightDir.setFromSphericalCoords(1,Ki.degToRad(90-Math.max(-i,28)),s+Math.PI),n.sunIntensity=1*di(0,-12,i),n.sunColor.copy(Tn.moon)),n.hemiIntensity=Dr(.45,.2,r),n.hemiSky.copy(Tn.skyNight).lerp(Tn.skyDay,r),n.hemiGround.copy(Tn.groundNight).lerp(Tn.groundDay,r),n.envIntensity=Dr(.16,.42,di(-6,22,i)),n.exposure=Dr(1.1,.88,r),n.fog.copy(Tn.fogNight).lerp(Tn.fogTwi,di(-12,0,i)).lerp(Tn.fogDay,di(3,26,i)),n.smoke.copy(Tn.smokeNight).lerp(Tn.smokeDay,r),n.turbidity=Dr(8,3.5,di(0,30,i)),n.rayleigh=Dr(.6,1.4,di(0,30,i)),n}}}function ZC(n,e){const i=new Float32Array(4203),s=new Float32Array(1401),r=new Float32Array(1401);let o=12345;const a=()=>(o=Math.imul(o,1664525)+1013904223|0,(o>>>0)/4294967296);for(let u=0;u<1400;u++){const h=a()*1.5-.35,g=a()*Math.PI*2,E=Math.sqrt(Math.max(0,1-Math.min(1,h*h)));i.set([Math.cos(g)*E,Math.min(1,h),Math.sin(g)*E],u*3),s[u]=(1.2+a()*a()*2.6)*e}r[1400]=1,s[1400]=54*e;const c=new on;c.setAttribute("position",new Xt(i,3)),c.setAttribute("aSize",new Xt(s,1)),c.setAttribute("aKind",new Xt(r,1));const l={value:new ee(0,-1,0)},d=new Gn({transparent:!0,depthWrite:!1,uniforms:{uNight:n.uNight,uMoon:l,uTime:n.uTime},vertexShader:`
      attribute float aSize; attribute float aKind; uniform vec3 uMoon; uniform float uTime;
      varying float vKind; varying float vTw;
      void main() {
        vec3 d = aKind > 0.5 ? uMoon : position;
        vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * d * 100.0, 1.0);
        gl_Position = p.xyww;
        gl_PointSize = aSize;
        vKind = aKind; vTw = 0.75 + 0.25 * sin(uTime * 2.0 + position.x * 40.0 + position.z * 31.0);
      }`,fragmentShader:`
      uniform float uNight; varying float vKind; varying float vTw;
      void main() {
        vec2 c = gl_PointCoord - 0.5; float d = length(c);
        if (vKind > 0.5) {
          float a = smoothstep(0.5, 0.46, d);
          float shade = 0.85 + 0.15 * sin(c.x * 24.0) * sin(c.y * 19.0);
          vec2 o = c - vec2(0.08, 0.06);
          float lit = smoothstep(0.62, 0.5, length(o + vec2(0.1, 0.0)));
          gl_FragColor = vec4(vec3(0.93, 0.95, 1.0) * shade * mix(0.55, 1.0, lit), a * uNight);
        } else {
          float a = smoothstep(0.5, 0.1, d) * vTw * uNight;
          gl_FragColor = vec4(vec3(0.85, 0.9, 1.0), a);
        }
      }`}),f=new _h(c,d);return f.frustumCulled=!1,f.renderOrder=-1,{pts:f,setMoon(u){l.value.copy(u)},dispose(){c.dispose(),d.dispose()}}}const ne={PLASTER:0,ROOF:1,TIMBER:2,STONE:3,WINDOW:4,WOOD:5,THATCH:6,SLATE:7,GLOW:8};function jh(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function jC(n,e=n){const t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function zl(n,e,t,i,s,r,o,a=1200){for(let c=0;c<a;c++){const l=o()<.5?0:255;n.fillStyle=`rgba(${l},${l},${l},${o()*r})`,n.fillRect(e+o()*i,t+o()*s,1+o()*2,1+o()*2)}}function ey(n,e,t=1,i=!0){const s=new Ch(n);return i&&(s.colorSpace=en),s.wrapS=s.wrapT=Sa,s.repeat.set(t,t),s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s}const We=128,ty={[ne.PLASTER](n,e,t,i){n.fillStyle="#e8e4da",n.fillRect(e,t,We,We),zl(n,e,t,We,We,.12,i,900)},[ne.ROOF](n,e,t,i){n.fillStyle="#6e6a66",n.fillRect(e,t,We,We);const s=16;for(let r=0;r<We/s;r++)for(let o=-1;o<We/16;o++){const a=r%2*8+o*16,c=205+i()*50;n.fillStyle=`rgb(${c},${c-6},${c-12})`,n.beginPath(),n.roundRect(e+a+1,t+r*s+1,14,s-1,[0,0,6,6]),n.fill()}},[ne.TIMBER](n,e,t,i){n.fillStyle="#ece6da",n.fillRect(e,t,We,We),zl(n,e,t,We,We,.1,i,500),n.fillStyle="#4a3322";const s=9;n.fillRect(e,t,We,s),n.fillRect(e,t+We-s,We,s),n.fillRect(e,t,s,We),n.fillRect(e+We-s,t,s,We),n.fillRect(e+We/2-s/2,t,s,We),n.strokeStyle="#4a3322",n.lineWidth=s*.8,n.beginPath(),n.moveTo(e+s,t+We-s),n.lineTo(e+We/2-s/2,t+s),n.moveTo(e+We-s,t+We-s),n.lineTo(e+We/2+s/2,t+s),n.stroke()},[ne.STONE](n,e,t,i){n.fillStyle="#7d7a74",n.fillRect(e,t,We,We);for(let s=0;s<8;s++){let r=-(i()*20);for(;r<We;){const o=16+i()*22,a=150+i()*80;n.fillStyle=`rgb(${a},${a-4},${a-10})`,n.fillRect(e+Math.max(0,r)+1,t+s*16+1,Math.min(o,We-r)-2,14),r+=o}}},[ne.WINDOW](n,e,t,i){n.fillStyle="#5a4030",n.fillRect(e,t,We,We),n.fillStyle="#4a6a96",n.fillRect(e+14,t+12,We-28,We-24),n.fillStyle="#6f9ac8",n.fillRect(e+14,t+12,(We-28)*.4,We-24),n.fillStyle="#5a4030",n.fillRect(e+We/2-3,t+12,6,We-24),n.fillRect(e+14,t+We/2-3,We-28,6),n.fillStyle="#7a5c40",n.fillRect(e+6,t+We-14,We-12,6)},[ne.WOOD](n,e,t,i){n.fillStyle="#b89a78",n.fillRect(e,t,We,We);for(let s=0;s<8;s++){const r=150+i()*60;n.fillStyle=`rgb(${r},${r-25},${r-55})`,n.fillRect(e+s*16+1,t,14,We),n.fillStyle="rgba(40,25,10,0.25)",n.fillRect(e+s*16+7,t,1,We)}},[ne.THATCH](n,e,t,i){n.fillStyle="#c8aa6a",n.fillRect(e,t,We,We);for(let s=0;s<260;s++){const r=150+i()*90;n.strokeStyle=`rgba(${r},${r-30},${r-90},0.7)`,n.lineWidth=1+i();const o=e+i()*We,a=t+i()*We;n.beginPath(),n.moveTo(o,a),n.lineTo(o+(i()-.5)*6,a+10+i()*18),n.stroke()}},[ne.SLATE](n,e,t,i){n.fillStyle="#9a9a9c",n.fillRect(e,t,We,We);for(let s=0;s<8;s++)n.fillStyle=`rgba(0,0,0,${.15+i()*.15})`,n.fillRect(e,t+s*16,We,2);zl(n,e,t,We,We,.12,i,500)}};function ny(n){const e=jh(31),[t,i]=jC(We*4,We*2);for(const[r,o]of Object.entries(ty))o(i,r%4*We,Math.floor(r/4)*We,e);const s=ey(t,n);return s.flipY=!1,s.wrapS=s.wrapT=Sn,s}class iy{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:s,msg:r,transfer:o}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,o)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=i,this.workers[s].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const sy=0,$d=2,ry=1,Jd=2,oy=0,ay=1,ly=10,cy=0,eA=9,tA=15,nA=16,iA=22,sA=37,rA=43,oA=76,aA=83,vu=91,lA=97,cA=100,uA=103,dA=109,fA=122,hA=123,AA=131,pA=132,mA=133,gA=134,EA=137,vA=138,_A=139,xA=140,SA=141,CA=142,yA=145,MA=146,IA=148,bA=152,wA=153,BA=154,TA=155,RA=156,DA=157,LA=158,FA=165,PA=166,UA=1000054e3,NA=1000054001,OA=1000054004,QA=1000054005,_u=1000066e3,kA=1000066004;class Lr{constructor(e,t,i,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,s)}}const mn=[171,75,84,88,32,50,48,187,13,10,26,10];function Zd(n){return new TextDecoder().decode(n)}function uy(n){const e=new Uint8Array(n.buffer,n.byteOffset,mn.length);if(e[0]!==mn[0]||e[1]!==mn[1]||e[2]!==mn[2]||e[3]!==mn[3]||e[4]!==mn[4]||e[5]!==mn[5]||e[6]!==mn[6]||e[7]!==mn[7]||e[8]!==mn[8]||e[9]!==mn[9]||e[10]!==mn[10]||e[11]!==mn[11])throw new Error("Missing KTX 2.0 identifier.");const t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},i=17*Uint32Array.BYTES_PER_ELEMENT,s=new Lr(n,mn.length,i,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32(),t.levelCount=s._nextUint32(),t.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),o=s._nextUint32(),a=s._nextUint32(),c=s._nextUint32(),l=s._nextUint64(),d=s._nextUint64(),f=3*Math.max(t.levelCount,1)*8,u=new Lr(n,mn.length+i,f,!0);for(let Z=0,le=Math.max(t.levelCount,1);Z<le;Z++)t.levels.push({levelData:new Uint8Array(n.buffer,n.byteOffset+u._nextUint64(),u._nextUint64()),uncompressedByteLength:u._nextUint64()});const h=new Lr(n,r,o,!0);h._skip(4);const g=h._nextUint16(),E=h._nextUint16(),p=h._nextUint16(),m=h._nextUint16(),C={vendorId:g,descriptorType:E,versionNumber:p,colorModel:h._nextUint8(),colorPrimaries:h._nextUint8(),transferFunction:h._nextUint8(),flags:h._nextUint8(),texelBlockDimension:[h._nextUint8(),h._nextUint8(),h._nextUint8(),h._nextUint8()],bytesPlane:[h._nextUint8(),h._nextUint8(),h._nextUint8(),h._nextUint8(),h._nextUint8(),h._nextUint8(),h._nextUint8(),h._nextUint8()],samples:[]},I=(m/4-6)/4;for(let Z=0;Z<I;Z++){const le={bitOffset:h._nextUint16(),bitLength:h._nextUint8(),channelType:h._nextUint8(),samplePosition:[h._nextUint8(),h._nextUint8(),h._nextUint8(),h._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&le.channelType?(le.sampleLower=h._nextInt32(),le.sampleUpper=h._nextInt32()):(le.sampleLower=h._nextUint32(),le.sampleUpper=h._nextUint32()),C.samples[Z]=le}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(C);const S=new Lr(n,a,c,!0);for(;S._offset<c;){const Z=S._nextUint32(),le=S._scan(Z),Ae=Zd(le);if(t.keyValue[Ae]=S._nextUint8Array(Z-le.byteLength-1),Ae.match(/^ktx/i)){const q=Zd(t.keyValue[Ae]);t.keyValue[Ae]=q.substring(0,q.lastIndexOf("\0"))}S._skip(Z%4?4-Z%4:0)}if(d<=0)return t;const b=new Lr(n,l,d,!0),y=b._nextUint16(),_=b._nextUint16(),M=b._nextUint32(),F=b._nextUint32(),D=b._nextUint32(),N=b._nextUint32(),k=[];for(let Z=0,le=Math.max(t.levelCount,1);Z<le;Z++)k.push({imageFlags:b._nextUint32(),rgbSliceByteOffset:b._nextUint32(),rgbSliceByteLength:b._nextUint32(),alphaSliceByteOffset:b._nextUint32(),alphaSliceByteLength:b._nextUint32()});const V=l+b._offset,L=V+M,Q=L+F,W=Q+D,H=new Uint8Array(n.buffer,n.byteOffset+V,M),J=new Uint8Array(n.buffer,n.byteOffset+L,F),z=new Uint8Array(n.buffer,n.byteOffset+Q,D),K=new Uint8Array(n.buffer,n.byteOffset+W,N);return t.globalData={endpointCount:y,selectorCount:_,imageDescs:k,endpointsData:H,selectorsData:J,tablesData:z,extendedData:K},t}let Vl,Bi,zc;const Wl={env:{emscripten_notify_memory_growth:function(n){zc=new Uint8Array(Bi.exports.memory.buffer)}}};class dy{init(){return Vl||(Vl=typeof fetch<"u"?fetch("data:application/wasm;base64,"+jd).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Wl)).then(this._init):WebAssembly.instantiate(Buffer.from(jd,"base64"),Wl).then(this._init),Vl)}_init(e){Bi=e.instance,Wl.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Bi)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,s=Bi.exports.malloc(i);zc.set(e,s),t=t||Number(Bi.exports.ZSTD_findDecompressedSize(s,i));const r=Bi.exports.malloc(t),o=Bi.exports.ZSTD_decompress(r,t,s,i),a=zc.slice(r,r+o);return Bi.exports.free(s),Bi.exports.free(r),a}}const jd="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",fy="display-p3",hy="display-p3-linear";({...ht.spaces[en]});const Ay=new URL(""+new URL("basis_transcoder-VXdx5NbI.wasm",import.meta.url).href,import.meta.url).toString(),py=new URL(""+new URL("basis_transcoder-o4Hde_L7.js",import.meta.url).href,import.meta.url).toString(),ql=new WeakMap;let Xl=0,Yl;class Nn extends Xa{constructor(e){super(e),this.isKTX2Loader=!0,this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new iy,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Android")<0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc1Supported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const e=new fa(this.manager);e.setPriority(this.priority),e.setCache(this.cache),e.setWithCredentials(this.withCredentials);const t=new fa(this.manager);t.setPriority(this.priority),t.setCache(this.cache),t.setWithCredentials(this.withCredentials),t.setResponseType("arraybuffer");let i,s;this.transcoderPath===""?(i=e.loadAsync(py),s=t.loadAsync(Ay)):(e.setPath(this.transcoderPath),i=e.loadAsync("basis_transcoder.js"),t.setPath(this.transcoderPath),s=t.loadAsync("basis_transcoder.wasm")),this.transcoderPending=Promise.all([i,s]).then(([r,o])=>{const a=Nn.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(Nn.EngineFormat),"let _EngineType = "+JSON.stringify(Nn.EngineType),"let _TranscoderFormat = "+JSON.stringify(Nn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Nn.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=o,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),d=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:d},[d]),l})}),Xl>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Xl++}return this.transcoderPending}load(e,t,i,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new fa(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(e,o=>{this.parse(o,t,s)},i,s)}parse(e,t,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(ql.has(e))return ql.get(e).promise.then(t).catch(i);this._createTexture(e).then(s=>t?t(s):null).catch(i)}_createTextureFrom(e,t){const{type:i,error:s,data:{faces:r,width:o,height:a,format:c,type:l,dfdFlags:d}}=e;if(i==="error")return Promise.reject(s);let f;if(t.faceCount===6)f=new xh(r,c,l);else{const u=r[0].mipmaps;f=t.layerCount>1?new T0(u,o,a,t.layerCount,c,l):new qa(u,o,a,c,l)}return f.minFilter=r[0].mipmaps.length===1?Rt:In,f.magFilter=Rt,f.generateMipmaps=!1,f.needsUpdate=!0,f.colorSpace=GA(t),f.premultiplyAlpha=!!(d&ry),f}async _createTexture(e,t={}){const i=uy(new Uint8Array(e)),s=i.vkFormat===_u&&i.dataFormatDescriptor[0].colorModel===167;if(!(i.vkFormat===cy||s&&!this.workerConfig.astcHDRSupported))return Ey(i);const o=t,a=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:o},[e])).then(c=>this._createTextureFrom(c.data,i));return ql.set(e,{promise:a}),a}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Xl--}}Nn.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Nn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Nn.EngineFormat={RGBAFormat:It,RGBA_ASTC_4x4_Format:ps,RGB_BPTC_UNSIGNED_Format:wa,RGBA_BPTC_Format:ar,RGBA_ETC2_EAC_Format:jr,RGBA_PVRTC_4BPPV1_Format:or,RGBA_S3TC_DXT5_Format:As,RGB_ETC1_Format:ya,RGB_ETC2_Format:Zr,RGB_PVRTC_4BPPV1_Format:Ca,RGBA_S3TC_DXT1_Format:hs};Nn.EngineType={UnsignedByteType:it,HalfFloatType:Tt,FloatType:qt};Nn.BasisWorker=function(){let n,e,t;const i=_EngineFormat,s=_EngineType,r=_TranscoderFormat,o=_BasisFormat;self.addEventListener("message",function(g){const E=g.data;switch(E.type){case"init":n=E.config,a(E.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:p,buffers:m,width:C,height:I,hasAlpha:S,format:b,type:y,dfdFlags:_}=c(E.buffer);self.postMessage({type:"transcode",id:E.id,data:{faces:p,width:C,height:I,hasAlpha:S,format:b,type:y,dfdFlags:_}},m)}catch(p){console.error(p),self.postMessage({type:"error",id:E.id,error:p.message})}});break}});function a(g){e=new Promise(E=>{t={wasmBinary:g,onRuntimeInitialized:E},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(g){const E=new t.KTX2File(new Uint8Array(g));function p(){E.close(),E.delete()}if(!E.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let m;if(E.isUASTC())m=o.UASTC;else if(E.isETC1S())m=o.ETC1S;else if(E.isHDR())m=o.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const C=E.getWidth(),I=E.getHeight(),S=E.getLayers()||1,b=E.getLevels(),y=E.getFaces(),_=E.getHasAlpha(),M=E.getDFDFlags(),{transcoderFormat:F,engineFormat:D,engineType:N}=f(m,C,I,_);if(!C||!I||!b)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!E.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const k=[],V=[];for(let L=0;L<y;L++){const Q=[];for(let W=0;W<b;W++){const H=[];let J,z;for(let Z=0;Z<S;Z++){const le=E.getImageLevelInfo(W,Z,L);L===0&&W===0&&Z===0&&(le.origWidth%4!==0||le.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),b>1?(J=le.origWidth,z=le.origHeight):(J=le.width,z=le.height);let Ae=new Uint8Array(E.getImageTranscodedSizeInBytes(W,Z,0,F));const q=E.transcodeImage(Ae,W,Z,L,F,0,-1,-1);if(N===s.HalfFloatType&&(Ae=new Uint16Array(Ae.buffer,Ae.byteOffset,Ae.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!q)throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");H.push(Ae)}const K=h(H);Q.push({data:K,width:J,height:z}),V.push(K.buffer)}k.push({mipmaps:Q,width:C,height:I,format:D,type:N})}return p(),{faces:k,buffers:V,width:C,height:I,hasAlpha:_,dfdFlags:M,format:D,type:N}}const l=[{if:"astcSupported",basisFormat:[o.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.ETC1],engineFormat:[i.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[o.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[i.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[i.RGBAFormat,i.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[o.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[i.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],d={[o.ETC1S]:l.filter(g=>g.basisFormat.includes(o.ETC1S)).sort((g,E)=>g.priorityETC1S-E.priorityETC1S),[o.UASTC]:l.filter(g=>g.basisFormat.includes(o.UASTC)).sort((g,E)=>g.priorityUASTC-E.priorityUASTC),[o.UASTC_HDR]:l.filter(g=>g.basisFormat.includes(o.UASTC_HDR)).sort((g,E)=>g.priorityHDR-E.priorityHDR)};function f(g,E,p,m){const C=d[g];for(let I=0;I<C.length;I++){const S=C[I];if(S.if&&!n[S.if]||!S.basisFormat.includes(g)||m&&S.transcoderFormat.length<2||S.needsPowerOfTwo&&!(u(E)&&u(p)))continue;const b=S.transcoderFormat[m?1:0],y=S.engineFormat[m?1:0],_=S.engineType[0];return{transcoderFormat:b,engineFormat:y,engineType:_}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function u(g){return g<=2?!0:(g&g-1)===0&&g!==0}function h(g){if(g.length===1)return g[0];let E=0;for(let C=0;C<g.length;C++){const I=g[C];E+=I.byteLength}const p=new Uint8Array(E);let m=0;for(let C=0;C<g.length;C++){const I=g[C];p.set(I,m),m+=I.byteLength}return p}};const my=new Set([It,$r,nn,On]),gy=new Set([vu]),Kl={[dA]:It,[uA]:nn,[cA]:On,[lA]:It,[aA]:nn,[oA]:On,[vu]:It,[rA]:It,[sA]:It,[iA]:nn,[nA]:nn,[tA]:On,[eA]:On,[hA]:$r,[fA]:$r,[bA]:jr,[IA]:Zr,[wA]:Ma,[BA]:Ia,[TA]:eo,[RA]:ba,[_u]:ps,[LA]:ps,[DA]:ps,[kA]:tr,[PA]:tr,[FA]:tr,[gA]:hs,[mA]:hs,[pA]:er,[AA]:er,[vA]:As,[EA]:As,[xA]:Ta,[_A]:Ba,[CA]:Ra,[SA]:to,[MA]:ar,[yA]:ar,[QA]:or,[NA]:or,[OA]:Jr,[UA]:Jr},us={[dA]:qt,[uA]:qt,[cA]:qt,[lA]:Tt,[aA]:Tt,[oA]:Tt,[vu]:xs,[rA]:it,[sA]:it,[iA]:it,[nA]:it,[tA]:it,[eA]:it,[hA]:Va,[fA]:Wa,[bA]:it,[IA]:it,[wA]:it,[BA]:it,[TA]:it,[RA]:it,[_u]:Tt,[LA]:it,[DA]:it,[kA]:Tt,[PA]:it,[FA]:it,[gA]:it,[mA]:it,[pA]:it,[AA]:it,[vA]:it,[EA]:it,[xA]:it,[_A]:it,[CA]:it,[SA]:it,[MA]:it,[yA]:it,[QA]:it,[NA]:it,[OA]:it,[UA]:it};async function Ey(n){const{vkFormat:e}=n;if(Kl[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);us[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;n.supercompressionScheme===$d&&(Yl||(Yl=new Promise(async o=>{const a=new dy;await a.init(),o(a)})),t=await Yl);const i=[];for(let o=0;o<n.levels.length;o++){const a=Math.max(1,n.pixelWidth>>o),c=Math.max(1,n.pixelHeight>>o),l=n.pixelDepth?Math.max(1,n.pixelDepth>>o):0,d=n.levels[o];let f;if(n.supercompressionScheme===sy)f=d.levelData;else if(n.supercompressionScheme===$d)f=t.decode(d.levelData,d.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;us[e]===qt?u=new Float32Array(f.buffer,f.byteOffset,f.byteLength/Float32Array.BYTES_PER_ELEMENT):us[e]===Tt||us[e]===xs?u=new Uint16Array(f.buffer,f.byteOffset,f.byteLength/Uint16Array.BYTES_PER_ELEMENT):us[e]===Va||us[e]===Wa?u=new Uint32Array(f.buffer,f.byteOffset,f.byteLength/Uint32Array.BYTES_PER_ELEMENT):u=f,i.push({data:u,width:a,height:c,depth:l})}const s=n.levelCount===0||i.length>1;let r;if(my.has(Kl[e]))r=n.pixelDepth===0?new _i(i[0].data,n.pixelWidth,n.pixelHeight):new mh(i[0].data,n.pixelWidth,n.pixelHeight,n.pixelDepth),r.mipmaps=i,r.minFilter=s?sh:Wt,r.magFilter=Wt,r.generateMipmaps=n.levelCount===0,r.normalized=gy.has(e);else{if(n.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");if(n.faceCount===6){const o=[];for(let a=0;a<6;a++){const c=[];for(const l of i){const d=l.data.length/6;c.push({data:l.data.subarray(a*d,(a+1)*d),width:l.width,height:l.height})}o.push({mipmaps:c,width:n.pixelWidth,height:n.pixelHeight})}r=new xh(o)}else r=new qa(i,n.pixelWidth,n.pixelHeight);r.minFilter=s?In:Rt,r.magFilter=Rt}return r.type=us[e],r.format=Kl[e],r.colorSpace=GA(n),r.needsUpdate=!0,r}function GA(n){const e=n.dataFormatDescriptor[0];return e.colorPrimaries===ay?e.transferFunction===Jd?en:Ln:e.colorPrimaries===ly?e.transferFunction===Jd?fy:hy:(e.colorPrimaries===oy||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),Zn)}let jo=null,ef=null;function vy(n){return(!jo||ef!==n)&&(jo?.dispose(),jo=new Nn().setTranscoderPath("./basis/").detectSupport(n),ef=n),jo}function ms(n,e,t={}){const i={texture:null,ready:null};return i.ready=vy(n).loadAsync(e).then(s=>(s.colorSpace=t.srgb?en:Zn,s.wrapS=s.wrapT=t.wrap??Sn,s.anisotropy=Math.min(t.anisotropy??8,n.capabilities.getMaxAnisotropy()),s.minFilter=In,s.needsUpdate=!0,i.texture=s,t.onLoad?.(s),s)).catch(s=>(console.warn("Textur fehlt",e,s),null)),i}function _y(){return{uNight:{value:0},uTime:{value:0}}}const tf=(n,e,t)=>{const i=new _i(new Uint8Array([n,e,t,255]),1,1);return i.needsUpdate=!0,i};function HA(n,e,t=null){const i=t||ny(n),s={value:i},r={value:tf(128,128,255)},o={value:tf(255,235,0)},a={value:0},c=t?[]:[ms(n,"./assets/tex/building_color.ktx2",{srgb:!0,onLoad:d=>{s.value=d,a.value=1}}),ms(n,"./assets/tex/building_normal.ktx2",{onLoad:d=>{r.value=d}}),ms(n,"./assets/tex/building_orm.ktx2",{onLoad:d=>{o.value=d}})],l=new ir({map:i,vertexColors:!0,roughness:1,metalness:0});return l.userData.ownsMap=!t,l.userData.refs=c,l.onBeforeCompile=d=>{Object.assign(d.uniforms,{uNight:e.uNight,uTime:e.uTime,uAtC:s,uAtN:r,uAtD:o,uReal:a}),d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
attribute float aAtlas;
varying float vAtlas;
varying vec3 vNbWorld;
varying float vNbY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtlas = aAtlas; vNbY = position.y;`).replace("#include <project_vertex>",`#include <project_vertex>
vNbWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
#ifdef USE_INSTANCING
vNbWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#endif`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight, uTime, uReal; uniform sampler2D uAtC, uAtN, uAtD;
varying float vAtlas; varying vec3 vNbWorld; varying float vNbY;
// Maßstab je Kachel (echte Texturen zeigen ca. 1–2 m)
float nbScale(float t) { return t < 0.5 ? 1.6 : t < 1.5 ? 2.2 : t < 2.5 ? 1.0 : t < 3.5 ? 1.8 : t < 4.5 ? 1.0 : t < 5.5 ? 2.0 : t < 6.5 ? 1.4 : 2.6; }
vec2 nbAt(float t, vec2 f) { vec2 c = vec2(mod(t, 4.0), floor(t / 4.0)); float pad = uReal > 0.5 ? 32.0 / 1024.0 : 0.02, inr = uReal > 0.5 ? 960.0 / 1024.0 : 0.96; return (c + pad + f * inr) * vec2(0.25, 0.5); }
vec4 nbOrm; vec3 nbNrm; vec2 nbUvC;`).replace("#include <map_fragment>",`
        float nbT = floor(vAtlas + 0.5);
        vec4 nbTex = vec4(1.0); nbOrm = vec4(1.0, 0.9, 0.0, 1.0); nbNrm = vec3(0.0, 0.0, 1.0);
        nbUvC = vMapUv * (uReal > 0.5 && nbT < 7.5 ? nbScale(nbT) : 1.0);
        if (nbT < 7.5) {
          vec2 g = vec2(0.25, 0.5) * (uReal > 0.5 ? 960.0 / 1024.0 : 0.96);
          vec2 uv = nbAt(nbT, fract(nbUvC)), dx = dFdx(nbUvC) * g, dy = dFdy(nbUvC) * g;
          nbTex = textureGrad(uAtC, uv, dx, dy);
          if (uReal > 0.5) { nbNrm = textureGrad(uAtN, uv, dx, dy).xyz * 2.0 - 1.0; nbOrm = textureGrad(uAtD, uv, dx, dy); }
        }
        diffuseColor *= nbTex;
        diffuseColor.rgb *= mix(1.0, nbOrm.r, 0.7);
        // Alterung: Feuchte und Schmutz am Sockel, leichte Streifen (wirkt wie echte Fassaden)
        if (uReal > 0.5 && nbT != 1.0 && nbT != 6.0 && nbT != 7.0) {
          float streak = fract(sin(floor(vNbWorld.x * 1.7 + vNbWorld.z * 1.3) * 91.7) * 4375.5);
          float grime = smoothstep(1.6, 0.0, vNbY) * 0.28 + smoothstep(0.6, 1.0, streak) * smoothstep(6.0, 1.5, vNbY) * 0.06;
          diffuseColor.rgb *= 1.0 - grime * vec3(0.9, 1.0, 1.1);
        }`).replace("#include <roughnessmap_fragment>","float roughnessFactor = clamp(nbOrm.g, 0.3, 1.0);").replace("#include <normal_fragment_maps>",`
        if (uReal > 0.5 && nbT < 7.5) {
          vec3 p = -vViewPosition; vec3 dp1 = dFdx(p), dp2 = dFdy(p); vec2 du1 = dFdx(nbUvC), du2 = dFdy(nbUvC);
          vec3 d2 = cross(dp2, normal), d1 = cross(normal, dp1);
          vec3 T = d2 * du1.x + d1 * du2.x, B = d2 * du1.y + d1 * du2.y;
          float inv = inversesqrt(max(max(dot(T, T), dot(B, B)), 1e-12));
          normal = normalize(mat3(T * inv, B * inv, normal) * vec3(nbNrm.xy * 0.9, nbNrm.z));
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (nbT > 7.5) {
          float fl = 0.85 + 0.15 * sin(uTime * 9.0 + vNbWorld.x * 0.7 + vNbWorld.z * 1.3);
          totalEmissiveRadiance += vColor.rgb * uNight * 3.0 * fl;
        } else if (nbT > 3.5 && nbT < 4.5) {
          float glass = uReal > 0.5 ? smoothstep(0.004, 0.012, nbTex.b - nbTex.r) : smoothstep(0.30, 0.40, nbTex.b);
          totalEmissiveRadiance += vec3(1.0, 0.70, 0.36) * uNight * 1.9 * glass;
        }`)},l.customProgramCacheKey=()=>"nbBuilding2",l}function xy(n){n.userData.ownsMap&&n.map?.dispose();for(const e of n.userData.refs||[])e.texture?.dispose();n.dispose()}const Sy=new Ya(-1,1,1,-1,0,1);class Cy extends on{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}}const yy=new Cy;class My{constructor(e){this._mesh=new fn(yy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Iy="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",by=`
uniform sampler2D tDepth; uniform mat4 uProjInv; uniform mat4 uProj; uniform vec2 uTexel; uniform float uRadius, uOrtho;
varying vec2 vUv;
vec3 viewPos(vec2 uv) { float d = texture2D(tDepth, uv).x; vec4 p = uProjInv * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0); return p.xyz / p.w; }
float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  float d0 = texture2D(tDepth, vUv).x;
  if (d0 >= 0.9999) { gl_FragColor = vec4(1.0); return; }
  vec3 p = viewPos(vUv);
  vec3 n = normalize(cross(viewPos(vUv + vec2(uTexel.x, 0.0)) - p, viewPos(vUv + vec2(0.0, uTexel.y)) - p));
  float scale = uProj[1][1] * 0.5 / (uOrtho > 0.5 ? 1.0 : max(-p.z, 0.1));
  float rad = uRadius * scale, occ = 0.0, ang = h(gl_FragCoord.xy) * 6.2831;
  for (int i = 0; i < 10; i++) {
    float fi = float(i) + 0.5, r = sqrt(fi / 10.0) * rad; ang += 2.3999632;
    vec3 s = viewPos(vUv + vec2(cos(ang), sin(ang)) * r * vec2(uTexel.y / uTexel.x, 1.0));
    vec3 v = s - p; float dist = length(v);
    occ += max(0.0, dot(n, v / dist) - 0.08) * smoothstep(uRadius * 2.0, uRadius * 0.4, dist);
  }
  gl_FragColor = vec4(vec3(clamp(1.0 - occ / 10.0 * 2.6, 0.0, 1.0)), 1.0);
}`,wy=`uniform sampler2D tSrc; uniform float uThresh; varying vec2 vUv;
void main(){ vec3 c = texture2D(tSrc, vUv).rgb; float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(uThresh, uThresh * 2.0, l), 1.0); }`,By=`uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv;
void main(){ vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += texture2D(tSrc, vUv + uTexel * vec2(-1, -1)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1, -1)).rgb + texture2D(tSrc, vUv + uTexel * vec2(-1, 1)).rgb + texture2D(tSrc, vUv + uTexel).rgb;
  gl_FragColor = vec4(c / 8.0, 1.0); }`,Ty=`uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel; varying vec2 vUv;
void main(){ vec3 c = vec3(0.0);
  c += texture2D(tSrc, vUv + uTexel * vec2(-2, 0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(2, 0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0, -2)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0, 2)).rgb;
  c += (texture2D(tSrc, vUv + uTexel * vec2(-1, -1)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1, -1)).rgb + texture2D(tSrc, vUv + uTexel * vec2(-1, 1)).rgb + texture2D(tSrc, vUv + uTexel).rgb) * 2.0;
  gl_FragColor = vec4(c / 12.0 + texture2D(tAdd, vUv).rgb, 1.0); }`,Ry=`
uniform sampler2D tScene, tAO, tBloom; uniform vec2 uAoTexel; uniform float uAo, uBloom, uSat, uContrast, uVig, uWarm;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  if (uAo > 0.0) {
    float a = 0.0; // kleines Weichzeichnen der halbauflösenden Verdeckung
    a += texture2D(tAO, vUv + uAoTexel * vec2(-0.75, -0.75)).r + texture2D(tAO, vUv + uAoTexel * vec2(0.75, -0.75)).r;
    a += texture2D(tAO, vUv + uAoTexel * vec2(-0.75, 0.75)).r + texture2D(tAO, vUv + uAoTexel * vec2(0.75, 0.75)).r;
    c *= mix(1.0, a * 0.25, uAo);
  }
  if (uBloom > 0.0) c += texture2D(tBloom, vUv).rgb * uBloom;
  c *= vec3(1.0 + uWarm * 0.04, 1.0, 1.0 - uWarm * 0.05);
  gl_FragColor = vec4(c, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  vec3 g = gl_FragColor.rgb;
  float l = dot(g, vec3(0.2126, 0.7152, 0.0722));
  g = mix(vec3(l), g, uSat);
  g = (g - 0.5) * uContrast + 0.5;
  vec2 q = vUv - 0.5; g *= 1.0 - uVig * dot(q, q) * 1.8;
  gl_FragColor.rgb = clamp(g, 0.0, 1.0);
}`;function Dy(n,e){const t=e.post||{},i=!!e.post,s=(C,I)=>new My(new Gn({vertexShader:Iy,fragmentShader:C,uniforms:I,depthTest:!1,depthWrite:!1})),r={type:Tt,depthBuffer:!1},o=new Ss(1,1,ii),a=new Cn(1,1,{type:Tt,samples:t.msaa??4,depthTexture:o}),c=new Cn(1,1,{type:it,depthBuffer:!1}),l=[0,1,2,3].map(()=>new Cn(1,1,r)),d=[0,1,2].map(()=>new Cn(1,1,r)),f=s(by,{tDepth:{value:o},uProjInv:{value:new ut},uProj:{value:new ut},uTexel:{value:new ct},uRadius:{value:t.aoRadius??2.2},uOrtho:{value:0}}),u=s(wy,{tSrc:{value:a.texture},uThresh:{value:1.6}}),h=s(By,{tSrc:{value:null},uTexel:{value:new ct}}),g=s(Ty,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new ct}}),E=s(Ry,{tScene:{value:a.texture},tAO:{value:c.texture},tBloom:{value:d[2].texture},uAoTexel:{value:new ct},uAo:{value:t.ao??0},uBloom:{value:t.bloom??0},uSat:{value:t.sat??1.06},uContrast:{value:t.contrast??1.04},uVig:{value:t.vignette??.22},uWarm:{value:1}});E.material.toneMapped=!0;function p(C,I){a.setSize(C,I);const S=Math.max(1,C>>1),b=Math.max(1,I>>1);c.setSize(S,b),l.forEach((y,_)=>y.setSize(Math.max(1,C>>_+1),Math.max(1,I>>_+1))),d.forEach((y,_)=>y.setSize(Math.max(1,C>>3-_),Math.max(1,I>>3-_))),f.material.uniforms.uTexel.value.set(1/S,1/b),E.material.uniforms.uAoTexel.value.set(1/S,1/b)}const m=(C,I)=>{n.setRenderTarget(I),C.render(n)};return{enabled:i,setSize:p,setMood(C,I){E.material.uniforms.uWarm.value=I,E.material.uniforms.uBloom.value=(t.bloom??0)*(1+C*1.5)},render(C,I){if(n.info.autoReset=!1,n.info.reset(),!i){n.setRenderTarget(null),n.render(C,I);return}if(n.setRenderTarget(a),n.render(C,I),t.ao){const S=f.material.uniforms;S.uProj.value.copy(I.projectionMatrix),S.uProjInv.value.copy(I.projectionMatrixInverse),S.uOrtho.value=I.isOrthographicCamera?1:0,m(f,c)}if(t.bloom){m(u,l[0]);for(let S=1;S<4;S++)h.material.uniforms.tSrc.value=l[S-1].texture,h.material.uniforms.uTexel.value.set(1/l[S-1].width,1/l[S-1].height),m(h,l[S]);for(let S=0;S<3;S++){const b=S===0?l[3]:d[S-1];g.material.uniforms.tSrc.value=b.texture,g.material.uniforms.tAdd.value=l[2-S].texture,g.material.uniforms.uTexel.value.set(.5/b.width,.5/b.height),m(g,d[S])}}m(E,null)},dispose(){[a,c,...l,...d].forEach(C=>C.dispose()),o.dispose(),[f,u,h,g,E].forEach(C=>{C.material.dispose(),C.dispose()})}}}const nf=12832731;function Ly(n,e){const t=new OS({canvas:n,antialias:!e.post,powerPreference:"high-performance",stencil:!1}),i=Math.min(window.devicePixelRatio||1,e.maxDpr);t.setPixelRatio(i),t.setSize(window.innerWidth,window.innerHeight),t.outputColorSpace=en,t.toneMapping=eu,t.toneMappingExposure=.95,t.shadowMap.enabled=e.shadows,t.shadowMap.type=e.softShadows?Xf:Gr;const s=new m0,r=380;s.fog=new fu(nf,r,e.fog),s.background=new He(nf);const o=_y(),a=JC(),c=new Ja;c.scale.setScalar(2e4);const l=c.material.uniforms;l.turbidity.value=3.5,l.rayleigh.value=1.4,l.mieCoefficient.value=.004,l.mieDirectionalG.value=.8,s.add(c);const d=ZC(o,i);s.add(d.pts);const f=new z0(16773596,3.2);f.castShadow=e.shadows;const u=e.shadowRange;Object.assign(f.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:10,far:900}),f.shadow.mapSize.set(e.shadowSize,e.shadowSize),f.shadow.bias=-4e-4,f.shadow.normalBias=.5,f.shadow.radius=2,s.add(f,f.target);const h=new k0(12572415,5595199,.35);s.add(h);const g=LC(()=>import("./park.exr-v_B6Jj-5.js"),[],import.meta.url).then(S=>new KC().loadAsync(S.default)).then(S=>{const b=new ro(t),y=b.fromEquirectangular(S).texture;S.dispose(),b.dispose(),s.environment=y,s.environmentIntensity=.55}).catch(S=>console.warn("HDRI konnte nicht geladen werden",S)),E=Dy(t,e),p=new ct,m=()=>{t.getDrawingBufferSize(p),E.setSize(p.x,p.y)};m();const C=2*u/e.shadowSize,I=new ee;return{renderer:t,scene:s,dpr:i,envReady:g,shared:o,followFocus(S){I.set(Math.round(S.x/C)*C,0,Math.round(S.z/C)*C),f.target.position.copy(I),f.position.copy(I).addScaledVector(a.out.lightDir,400)},setFog(S,b){const y=S.position.distanceTo(b);s.fog.near=y+r,s.fog.far=y+e.fog},setDay(S,b){const y=a.compute(S);return o.uNight.value=y.night,o.uTime.value+=b,l.sunPosition.value.copy(y.sunDir),l.turbidity.value=y.turbidity,l.rayleigh.value=y.rayleigh,f.intensity=y.sunIntensity,f.color.copy(y.sunColor),h.intensity=y.hemiIntensity,h.color.copy(y.hemiSky),h.groundColor.copy(y.hemiGround),s.environmentIntensity=y.envIntensity,t.toneMappingExposure=y.exposure,s.fog.color.copy(y.fog),s.background.copy(y.fog),d.setMoon(y.moonDir),E.setMood(y.night,1-y.daylight*.6),y},resize(){t.setSize(window.innerWidth,window.innerHeight),m()},render(S){E.render(s,S)},gpuName(){const S=t.getContext(),b=S.getExtension("WEBGL_debug_renderer_info");return b?S.getParameter(b.UNMASKED_RENDERER_WEBGL):S.getParameter(S.RENDERER)},dispose(){d.dispose(),E.dispose(),c.geometry.dispose(),c.material.dispose(),f.shadow.map?.dispose(),s.environment?.dispose(),t.dispose()}}}const Vc={maximum:{label:"Maximum",maxDpr:3,shadows:!0,shadowSize:4096,shadowRange:150,softShadows:!0,trees:5200,treeShadows:!0,grass:25e3,grassRadius:80,fog:1700,post:{msaa:2,ao:.85,aoRadius:2.5,bloom:.35,sat:1.06,contrast:1.05,vignette:.22}},hoch:{label:"Hoch",maxDpr:2,shadows:!0,shadowSize:2048,shadowRange:120,softShadows:!0,trees:4e3,treeShadows:!0,grass:15e3,grassRadius:70,fog:1500,post:{msaa:4,ao:.7,aoRadius:2.5,bloom:.3,sat:1.05,contrast:1.04,vignette:.2}},mittel:{label:"Mittel",maxDpr:1.5,shadows:!0,shadowSize:1024,shadowRange:90,softShadows:!1,trees:2600,treeShadows:!1,grass:6e3,grassRadius:60,fog:1300,post:{msaa:0,ao:0,bloom:.25,sat:1.04,contrast:1.03,vignette:.15}},niedrig:{label:"Niedrig",maxDpr:1,shadows:!1,shadowSize:512,shadowRange:60,softShadows:!1,trees:1300,treeShadows:!1,grass:0,grassRadius:0,fog:1100}};function Fy(n){return Vc[n]||Vc.maximum}const Rn=2048;function Py(n){const e=document.createElement("canvas");e.width=e.height=Rn;const t=e.getContext("2d",{willReadFrequently:!0}),i=new Uint8Array(Rn*Rn*4),s=new _i(i,Rn,Rn,It);s.minFilter=In,s.magFilter=Rt,s.generateMipmaps=!0,s.anisotropy=Math.min(8,n.capabilities.getMaxAnisotropy()),s.needsUpdate=!0;function r(a,c,l){t.filter="none",t.fillStyle="#000",t.fillRect(0,0,Rn,Rn),t.filter=c?`blur(${c}px)`:"none",t.fillStyle=t.strokeStyle="#fff",l();const d=t.getImageData(0,0,Rn,Rn).data;for(let f=0;f<Rn*Rn;f++)i[f*4+a]=d[f*4]}function o(a,c,l,d,f){const u=Rn/(l*d),h=d*u,g=new Set(a.map(([C,I])=>I*l+C)),E=(C,I)=>f.some(S=>Math.abs(S.cx-C)<=S.r&&Math.abs(S.cz-I)<=S.r),p=C=>(C+.5)*h,m=(C,I)=>{t.lineCap="round",t.lineJoin="round",t.lineWidth=I*u;for(const[S,b]of a)if(E(S,b)===C){t.beginPath(),t.arc(p(S),p(b),I*u/2,0,Math.PI*2),t.fill();for(const[y,_]of[[1,0],[0,1]])!g.has((b+_)*l+S+y)||S+y>=l||b+_>=l||(t.beginPath(),t.moveTo(p(S),p(b)),t.lineTo(p(S+y),p(b+_)),t.stroke())}};r(0,2.5,()=>m(!1,6.4)),r(1,1.2,()=>m(!0,6.8)),r(2,1.5,()=>{for(const C of c)C.kind==="field"&&t.fillRect(C.x0*h+h*.06,C.z0*h+h*.06,C.w*h-h*.12,C.d*h-h*.12)}),r(3,6,()=>{for(const C of c){if(C.kind==="field")continue;const I=C.x0*h,S=C.z0*h,b=C.w*h,y=C.d*h,_=t.createRadialGradient(I+b/2,S+y/2,Math.min(b,y)*.2,I+b/2,S+y/2,Math.max(b,y)*.75);_.addColorStop(0,"rgba(255,255,255,0.85)"),_.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=_,t.fillRect(I-h*.4,S-h*.4,b+h*.8,y+h*.8)}}),t.filter="none",s.needsUpdate=!0}return{tex:s,paint:o,dispose(){s.dispose()}}}const Uy=`
attribute vec4 aW;
uniform float uExt;
varying vec4 vW; varying vec2 vRoadUv; varying vec3 vTw;`,Ny=`
vW = aW; vRoadUv = position.xz / uExt + 0.5;
vTw = (modelMatrix * vec4(transformed, 1.0)).xyz;`,Oy=`
uniform sampler2D uRoad, uAtC, uAtN;
uniform float uNightT;
varying vec4 vW; varying vec2 vRoadUv; varying vec3 vTw;
const float PADF = 32.0 / 1024.0, INF = 960.0 / 1024.0;
vec2 tUv(float tile, vec2 p) {
  vec2 c = vec2(mod(tile, 4.0), floor(tile / 4.0));
  return (c + PADF + fract(p) * INF) * vec2(0.25, 0.5);
}
vec4 tC(float tile, vec2 p) { vec2 d = vec2(0.25, 0.5) * INF; return textureGrad(uAtC, tUv(tile, p), dFdx(p) * d, dFdy(p) * d); }
vec3 tN(float tile, vec2 p) { vec2 d = vec2(0.25, 0.5) * INF; return textureGrad(uAtN, tUv(tile, p), dFdx(p) * d, dFdy(p) * d).xyz * 2.0 - 1.0; }
float tHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float tNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(tHash(i), tHash(i + vec2(1, 0)), f.x), mix(tHash(i + vec2(0, 1)), tHash(i + vec2(1, 1)), f.x), f.y); }
vec3 gCol; vec3 gNrm; float gWsum;
// Schicht dazumischen: Kanten mit Textur-Helligkeit aufbrechen (wirkt wie Höhen-Mischung)
void addLayer(float tile, vec2 p, float w) {
  if (w < 0.004) return;
  vec4 c = tC(tile, p); vec3 n = tN(tile, p);
  if (tile == 2.0) c.rgb *= vec3(0.62, 0.72, 0.5); // Waldboden: schattig, moosig
  float hgt = dot(c.rgb, vec3(0.33));
  float k = clamp((w - (1.0 - w) * 0.35 + (hgt - 0.4) * 0.6 * (1.0 - w)) * 1.6, 0.0, 1.0);
  gCol = mix(gCol, c.rgb, k); gNrm = mix(gNrm, n, k);
}`,Qy=`
{
  vec2 wp = vTw.xz;
  float camD = length(vTw - cameraPosition);
  float macro = tNoise(wp * 0.012) * 0.6 + tNoise(wp * 0.05) * 0.4;
  // Gras in zwei Maßstäben (gegen sichtbare Wiederholung), Mischung nach Abstand
  vec2 p1 = wp / 5.0, p2 = mat2(0.8, -0.6, 0.6, 0.8) * wp / 17.0;
  float far = smoothstep(60.0, 260.0, camD);
  float lush = clamp(vW.x * 0.8 + (macro - 0.5) * 0.7, 0.0, 1.0);
  vec4 gA = tC(0.0, p1), gB = tC(1.0, p1);
  gCol = mix(gA.rgb, gB.rgb, lush);
  gNrm = tN(0.0, p1);
  if (far > 0.01) { vec3 farC = mix(tC(0.0, p2).rgb, tC(1.0, p2).rgb, lush); gCol = mix(gCol, farC, far * 0.6); }
  // trockene Flecken, leichte Großflächen-Schwankung
  float dry = smoothstep(0.55, 0.85, tNoise(wp * 0.02 + 7.0)) * (1.0 - vW.x);
  gCol = mix(gCol, gCol * vec3(1.22, 1.08, 0.66), dry * 0.7);
  // große Flächen: Senken dunkler/satter, Kuppen heller/trockener (sichtbar auch von weit oben)
  float big = tNoise(wp * 0.006 + 3.0);
  gCol *= mix(vec3(0.78, 0.86, 0.74), vec3(1.12, 1.06, 0.88), big) * (0.84 + macro * 0.3);
  vec4 rd = texture2D(uRoad, vRoadUv);
  float edge = (tNoise(wp * 0.9) - 0.5) * 0.35;
  addLayer(2.0, wp / 6.0, vW.y);
  addLayer(3.0, wp / 9.0, vW.z);
  addLayer(4.0, wp / 6.0, vW.w);
  addLayer(5.0, wp / 4.5, clamp(rd.a * 0.75 + edge * rd.a, 0.0, 1.0));
  addLayer(7.0, wp / 6.0, rd.b);
  addLayer(5.0, wp / 4.0, clamp(rd.r + edge * rd.r, 0.0, 1.0));
  addLayer(6.0, wp / 3.0, clamp(rd.g + edge * rd.g, 0.0, 1.0));
  // unter Wasser: dunkler, bläulich (Uferzone)
  float under = smoothstep(0.1, -3.0, vTw.y);
  gCol = mix(gCol, gCol * vec3(0.35, 0.5, 0.55), under);
  diffuseColor.rgb *= gCol;
}`,ky=`
{
  vec3 gN = normalize(inverseTransformDirection(normal, viewMatrix));
  vec3 t = normalize(cross(gN, vec3(0.0, 0.0, 1.0))); vec3 b = cross(t, gN);
  vec3 nw = normalize(gN * max(gNrm.z, 0.2) + t * gNrm.x * 0.9 + b * gNrm.y * 0.9);
  normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz);
}`,Nt=2,sf=42,rf=-4,Vs=Ki.clamp,fi=(n,e,t)=>n+(e-n)*t,ks=(n,e,t)=>{const i=Vs((t-n)/(e-n),0,1);return i*i*(3-2*i)};function ea(n,e){let t=Math.imul(Math.floor(n*7.13)^625341585,374761393)^Math.imul(Math.floor(e*5.71)^461845907,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function Gy(n,e){const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,o=s*s*(3-2*s),a=r*r*(3-2*r);return fi(fi(ea(t,i),ea(t+1,i),o),fi(ea(t,i+1),ea(t+1,i+1),o),a)}function Hy(n,e,t){const i=new mi;let s=0,r=12,o=0,a=0,c=0,l=null,d=null,f=null,u=null;const h={kind:null,fert:null,forest:null,water:null,rock:null},g={value:t},E={value:768},p=(Q,W,H)=>{const J=new _i(new Uint8Array([Q,W,H,255]),1,1);return J.needsUpdate=!0,J},m={value:p(110,130,70)},C={value:p(128,128,255)},I=ms(n,"./assets/tex/terrain_color.ktx2",{srgb:!0,onLoad:Q=>{m.value=Q}}),S=ms(n,"./assets/tex/terrain_normal.ktx2",{onLoad:Q=>{C.value=Q}}),b=new ir({roughness:.95,metalness:0});b.onBeforeCompile=Q=>{Object.assign(Q.uniforms,{uRoad:g,uExt:E,uAtC:m,uAtN:C}),Q.vertexShader=Q.vertexShader.replace("#include <common>",`#include <common>
`+Uy).replace("#include <begin_vertex>",`#include <begin_vertex>
`+Ny),Q.fragmentShader=Q.fragmentShader.replace("#include <common>",`#include <common>
`+Oy).replace("#include <map_fragment>",Qy).replace("#include <normal_fragment_maps>",ky)},b.customProgramCacheKey=()=>"nbTerrain2";const y=new ir({color:2380378,transparent:!0,opacity:.8,roughness:.06,metalness:0,depthWrite:!1,envMapIntensity:1.6});y.onBeforeCompile=Q=>{Q.uniforms.uTime=e.uTime,Q.uniforms.uNightW=e.uNight,Q.vertexShader=Q.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWw;`).replace("#include <project_vertex>",`#include <project_vertex>
vWw = (modelMatrix * vec4(transformed, 1.0)).xyz;`),Q.fragmentShader=Q.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime, uNightW; varying vec3 vWw;
vec2 nbWave(vec2 p, float t) {
  vec2 g = vec2(0.0);
  g += vec2(0.21, 0.13) * cos(dot(p, vec2(0.21, 0.13)) + t * 0.8) * 0.5;
  g += vec2(-0.09, 0.31) * cos(dot(p, vec2(-0.09, 0.31)) - t * 0.6) * 0.45;
  g += vec2(0.53, -0.53) * cos(dot(p, vec2(0.53, -0.53)) + t * 1.5) * 0.18;
  g += vec2(1.3, 0.7) * cos(dot(p, vec2(1.3, 0.7)) + t * 2.1) * 0.05;
  g += vec2(-0.8, 1.6) * cos(dot(p, vec2(-0.8, 1.6)) - t * 2.6) * 0.035;
  return g;
}`).replace("#include <normal_fragment_maps>",`{
        vec2 g = nbWave(vWw.xz, uTime) * 0.55;
        float fade = 1.0 - smoothstep(150.0, 900.0, length(vWw - cameraPosition));
        vec3 nw = normalize(vec3(-g.x * fade, 1.0, -g.y * fade));
        normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz);
      }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float nbW = sin(vWw.x * 0.21 + vWw.z * 0.13 + uTime * 0.8) + sin(vWw.z * 0.31 - vWw.x * 0.09 - uTime * 0.6) + sin((vWw.x - vWw.z) * 0.53 + uTime * 1.5) * 0.6;
        totalEmissiveRadiance += vec3(0.02, 0.04, 0.045) * smoothstep(0.8, 2.2, nbW) * (1.0 - uNightW);`).replace("#include <opaque_fragment>",`{
        float fr = pow(1.0 - clamp(dot(normalize(vViewPosition), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 3.0);
        diffuseColor.a = clamp(mix(0.72, 0.97, fr), 0.0, 1.0);
      }
      #include <opaque_fragment>`)};const _=new fn(new xi(7e3,7e3).rotateX(-Math.PI/2),y);_.position.y=-.02,_.renderOrder=2;const M=new fn(new xi(7e3,7e3).rotateX(-Math.PI/2),new ir({color:1787218,roughness:1}));M.position.y=rf-1.5,i.add(M,_);function F(Q,W,H){const J=Vs(W-.5,0,s-1),z=Vs(H-.5,0,s-1),K=Math.floor(J),Z=Math.floor(z),le=Math.min(s-1,K+1),Ae=Math.min(s-1,Z+1),q=J-K,de=z-Z;return fi(fi(Q[Z*s+K],Q[Z*s+le],q),fi(Q[Ae*s+K],Q[Ae*s+le],q),de)}function D(Q){s=Q.size,r=Q.cell,o=s*Nt+1,a=s*r/2,c=s*r,E.value=c,l=new Float32Array(o*o);for(let z=0;z<o;z++)for(let K=0;K<o;K++){const Z=K/Nt,le=z/Nt;let Ae=F(Q.height,Z,le);const q=Math.min(Z*r,c-Z*r,le*r,c-le*r);q<sf&&(Ae=fi(Ae,rf,ks(sf,0,q))),l[z*o+K]=Number.isFinite(Ae)?Ae:0}d=Float32Array.from(l),u&&(i.remove(u),f.dispose()),f=new on;const W=new Float32Array(o*o*3);for(let z=0;z<o;z++)for(let K=0;K<o;K++){const Z=(z*o+K)*3;W[Z]=K/Nt*r-a,W[Z+2]=z/Nt*r-a}const H=new Uint16Array((o-1)*(o-1)*6);let J=0;for(let z=0;z<o-1;z++)for(let K=0;K<o-1;K++){const Z=z*o+K,le=Z+1,Ae=Z+o,q=Ae+1;K+z&1?H.set([Z,Ae,le,le,Ae,q],J):H.set([Z,Ae,q,Z,q,le],J),J+=6}f.setAttribute("position",new Xt(W,3).setUsage(au)),f.setAttribute("normal",new Xt(new Float32Array(o*o*3),3)),f.setAttribute("aW",new Xt(new Float32Array(o*o*4),4)),f.setIndex(new Xt(H,1)),u=new fn(f,b),u.receiveShadow=!0,u.frustumCulled=!1,i.add(u)}function N(Q){d.set(l);const W=new Uint8Array(o*o),H=new Map;for(const J of Q){let z=0,K=0;for(let le=J.z0*Nt;le<=(J.z0+J.d)*Nt;le++)for(let Ae=J.x0*Nt;Ae<=(J.x0+J.w)*Nt;Ae++)z+=l[le*o+Ae],K++;const Z=Math.max(.35,z/K);H.set(J.id,Z);for(let le=J.z0*Nt;le<=(J.z0+J.d)*Nt;le++)for(let Ae=J.x0*Nt;Ae<=(J.x0+J.w)*Nt;Ae++)d[le*o+Ae]=Z,W[le*o+Ae]=1}for(const J of Q){const z=H.get(J.id);for(let K=J.z0*Nt-1;K<=(J.z0+J.d)*Nt+1;K++)for(let Z=J.x0*Nt-1;Z<=(J.x0+J.w)*Nt+1;Z++)Z<0||K<0||Z>=o||K>=o||W[K*o+Z]||(d[K*o+Z]=(l[K*o+Z]+z)/2,W[K*o+Z]=2)}return H}function k(){const Q=f.attributes.position,W=f.attributes.aW;for(let K=0;K<o*o;K++)Q.array[K*3+1]=d[K];Q.needsUpdate=!0,f.computeVertexNormals();const H=f.attributes.normal.array,J=W.array,z=h.fert;for(let K=0;K<o;K++)for(let Z=0;Z<o;Z++){const le=K*o+Z,Ae=Z/Nt,q=K/Nt,de=d[le],xe=Ae*r-a,Ge=q*r-a,he=ks(.15,.85,F(h.forest,Ae,q)+(Gy(xe*.08,Ge*.08)-.5)*.4),Ne=F(h.water,Ae,q),ze=ks(.2,.8,F(h.rock,Ae,q)),Qe=z?F(z,Ae,q)/100:.6,Ze=1-H[le*3+1],Ke=Math.max(ze,ks(.16,.34,Ze),de>6?ks(8,20,de)*.7:0),$e=de<1&&(Ne>.04||de<.1)?ks(1,.2,de):0;J[le*4]=Vs(Qe*1.1,0,1),J[le*4+1]=he*.95,J[le*4+2]=Ke,J[le*4+3]=Math.max($e,de<0?1:0)}W.needsUpdate=!0,f.computeBoundingSphere(),f.boundingSphere.radius=c}function V(Q){const W=Q.size*Q.size;h.kind=Q.kind,h.fert=Q.fertility,h.forest=new Float32Array(W),h.water=new Float32Array(W),h.rock=new Float32Array(W);for(let H=0;H<W;H++)h.forest[H]=Q.kind[H]===1?1:0,h.water[H]=Q.kind[H]===2?1:0,h.rock[H]=Q.kind[H]===3?1:0}function L(Q,W){if(!d)return 0;const H=Vs((Q+a)/r*Nt,0,o-1.001),J=Vs((W+a)/r*Nt,0,o-1.001),z=Math.floor(H),K=Math.floor(J),Z=H-z,le=J-K,Ae=d[K*o+z],q=d[K*o+z+1],de=d[(K+1)*o+z],xe=d[(K+1)*o+z+1];return fi(fi(Ae,q,Z),fi(de,xe,Z),le)}return{group:i,mat:b,get ready(){return!!u},get half(){return a},setBase(Q){V(Q),D(Q)},setKinds(Q){V({size:s,kind:Q,fertility:h.fert})},applyPlots(Q){const W=N(Q);return k(),W},heightAt:L,surfaceY:(Q,W)=>Math.max(L(Q,W),0),dispose(){f?.dispose(),b.dispose(),I.texture?.dispose(),S.texture?.dispose(),m.value.dispose?.(),C.value.dispose?.(),_.geometry.dispose(),y.dispose(),M.geometry.dispose(),M.material.dispose()}}}const $l=35*Math.PI/180,pa=8,Wc=6.2831853,Jl="./assets/trees/",qn=(n,e)=>{let t=Math.imul(n+1,2654435761)^Math.imul(e+7,2246822507);return t=Math.imul(t^t>>>15,739982445),((t^t>>>13)>>>0)/4294967296},zy={fir0:[12,18],fir1:[10,15],fir2:[10,15],laub:[8.5,13],busch:[2.2,3.4]},Vy={fir0:[1.45,1.7,1.15],fir1:[1.45,1.7,1.15],fir2:[1.45,1.7,1.15],laub:[1.1,1.28,.82],busch:[.95,1.12,.8]},Wy=n=>`
attribute vec4 aInfo;   // x Drehung, y Atlaszeile, z halbe Tafelbreite (m), w Höhe der Bildmitte (m)
uniform vec3 uCam, uSun; uniform float uRows;
varying float vFrame; varying vec3 vBR, vBU;
vec3 gR, gU, gN;
vec3 bbPos(vec3 p) {
  vec3 c = instanceMatrix[3].xyz + vec3(0., aInfo.w, 0.);
  vec3 d = ${n?"uSun":"uCam - c"}; float az = atan(d.x, d.z);
  float f = mod(floor((az - aInfo.x) / (${Wc}/${pa}.) + 0.5), ${pa}.); vFrame = f;
  float azq = aInfo.x + f * ${Wc}/${pa}.;
  gN = vec3(sin(azq)*cos(${$l}), sin(${$l}), cos(azq)*cos(${$l}));
  gR = normalize(cross(vec3(0.,1.,0.), gN)); gU = cross(gN, gR);
  return c + (gR * p.x + gU * p.y) * aInfo.z;
}`;function of(n,e,t,i){Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
`+Wy(t)).replace("#include <uv_vertex>",`#include <uv_vertex>
      vec3 bbP = bbPos(position);
      vBR = normalize((viewMatrix * vec4(gR,0.)).xyz); vBU = normalize((viewMatrix * vec4(gU,0.)).xyz);
      vec2 tuv = vec2((uv.x + vFrame) / ${pa}., (aInfo.y + 1.0 - uv.y) / uRows);
      #ifdef USE_MAP
      vMapUv = tuv;
      #endif
      #ifdef USE_NORMALMAP
      vNormalMapUv = tuv;
      #endif`).replace("#include <project_vertex>","vec4 mvPosition = viewMatrix * vec4(bbP, 1.0); gl_Position = projectionMatrix * mvPosition;").replace("#include <worldpos_vertex>","vec4 worldPosition = vec4(bbP,1.0);"),t||(n.vertexShader=n.vertexShader.replace("#include <defaultnormal_vertex>","vec3 transformedNormal = normalize((viewMatrix * vec4(gN,0.)).xyz);")),i&&(n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vBR, vBU;`).replace("#include <map_fragment>",`vec4 tc = texture2D(map, vMapUv);
        vec2 gx = dFdx(vMapUv * vec2(4096., 2560.)), gy = dFdy(vMapUv * vec2(4096., 2560.));
        float lod = 0.5 * log2(max(max(dot(gx, gx), dot(gy, gy)), 1.0));
        tc.a = min(1.0, tc.a * (1.0 + 0.28 * lod));
        diffuseColor *= tc;`).replace("#include <normal_fragment_maps>",`{ vec3 mN = texture2D(normalMap, vNormalMapUv).xyz * 2.0 - 1.0;
        normal = normalize(mix(normal, mN.x*vBR + mN.y*vBU + mN.z*normal, 0.6)); }`))}function qy(n,e,t={}){const i=new mi,s={uCam:{value:new ee},uSun:{value:new ee(.5,.8,.3).normalize()},uRows:{value:5}},r=new _i(new Uint8Array([255,255,255,255]),1,1);r.needsUpdate=!0;const o=new _i(new Uint8Array([128,128,255,255]),1,1);o.needsUpdate=!0;const a=new ir({map:r,normalMap:o,alphaTest:.4,roughness:.92,metalness:0});a.onBeforeCompile=_=>of(_,s,!1,!0);const c=new wh({depthPacking:Tg,map:r,alphaTest:.4,side:Fn});c.onBeforeCompile=_=>of(_,s,!0,!1);const l=new xi(2,2),d=!!(t.treeShadows&&t.shadows);let f=null,u=null,h=null,g=!1,E=!0,p=0;const m=[],C=fetch(Jl+"trees.json").then(_=>_.json()).then(_=>{f=_,s.uRows.value=_.rows.length,h&&b(...h)}).catch(_=>console.warn("Baum-Atlas fehlt",_)),I=ms(e,Jl+"trees_c.ktx2",{srgb:!0,anisotropy:4}),S=ms(e,Jl+"trees_n.ktx2",{anisotropy:4});Promise.all([I.ready,S.ready,C]).then(([_,M])=>{!E||!_||!M||(m.push(_,M),a.map=c.map=_,a.normalMap=M,a.needsUpdate=c.needsUpdate=!0,g=!0,u&&(u.visible=!0))});function b(_,M,F){u&&(i.remove(u),u.dispose(),u=null);const D=_.size,N=_.cell,k=D*N/2,V=[],L=(q,de)=>q>=0&&de>=0&&q<D&&de<D&&_.kind[de*D+q]===1;for(let q=0;q<D;q++)for(let de=0;de<D;de++){const xe=q*D+de;if(_.kind[xe]!==1||M&&M[xe]!==0)continue;const Ge=!L(de-1,q)||!L(de+1,q)||!L(de,q-1)||!L(de,q+1),he=3+Math.floor(qn(xe,1)*3),Ne=Ge?1+Math.floor(qn(xe,2)*2):qn(xe,3)<.15?1:0;for(let ze=0;ze<he+Ne;ze++){const Qe=(de+.12+qn(xe,10+ze)*.76)*N-k,Ze=(q+.12+qn(xe,20+ze)*.76)*N-k,Ke=F(Qe,Ze);if(Ke<.3)continue;let $e;ze>=he?$e="busch":qn(xe,30+ze)<.45+Math.min(.3,Ke/90)?$e=["fir0","fir1","fir2"][Math.floor(qn(xe,50+ze)*3)%3]:$e="laub",V.push([Qe,Ke,Ze,qn(xe,40+ze),$e])}}const Q=Math.min(1,n/Math.max(1,V.length)),W=Q>=1?V:V.filter((q,de)=>qn(de,77)<Q);if(p=W.length,!p)return;const H=new Float32Array(p*4),J=new ut,z=new He;u=new ji(l,a,p);const K=new ee;let Z=0,le=0;W.forEach(([q,de,xe,Ge,he],Ne)=>{const ze=f.kinds[he],[Qe,Ze]=zy[he],Ke=he==="busch"?(Qe+Ge*(Ze-Qe))/ze.half:(Qe+Ge*(Ze-Qe))/ze.H;J.makeTranslation(q,de-.25,xe),u.setMatrixAt(Ne,J),H.set([qn(Ne,5)*Wc,ze.row,ze.half*Ke,ze.H*.45*Ke],Ne*4);const $e=Vy[he]||[1,1,1],St=.88+qn(Ne,91)*.24;u.setColorAt(Ne,z.setRGB($e[0]*St,$e[1]*St,$e[2]*St)),K.x+=q,K.z+=xe,Z=Math.max(Z,de),le=Math.max(le,ze.half*Ke*1.5)}),l.setAttribute("aInfo",new Uc(H,4)),K.multiplyScalar(1/p);let Ae=0;W.forEach(([q,,de])=>{Ae=Math.max(Ae,Math.hypot(q-K.x,de-K.z))}),u.boundingSphere=new ys(new ee(K.x,Z*.5,K.z),Ae+le+Z),u.frustumCulled=!0,u.visible=g,u.castShadow=d,u.receiveShadow=!1,u.customDepthMaterial=c,i.add(u)}function y(_,M,F){if(!f){h=[_,M,F];return}h=null,b(_,M,F)}return{group:i,set:y,update(_,M){s.uCam.value.copy(_.position),M&&s.uSun.value.copy(M).normalize()},get count(){return p},dispose(){E=!1,u?.dispose(),l.dispose(),a.dispose(),c.dispose(),r.dispose(),o.dispose(),m.forEach(_=>_.dispose())}}}const Xy=250,Yy=20,Xn=(n,e)=>{let t=Math.imul(n+1,2654435761)^Math.imul(e+7,2246822507);return t=Math.imul(t^t>>>15,739982445),((t^t>>>13)>>>0)/4294967296},Ky=n=>{let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296};function af(n,e){const t=new xi(n,e).translate(0,e/2,0).toNonIndexed(),i=new xi(n,e).translate(0,e/2,0).rotateY(Math.PI/2).toNonIndexed(),s=new on;for(const o of["position","uv"])s.setAttribute(o,new Xt(new Float32Array([...t.attributes[o].array,...i.attributes[o].array]),o==="uv"?2:3));const r=new Float32Array(s.attributes.position.count*3);for(let o=1;o<r.length;o+=3)r[o]=1;return s.setAttribute("normal",new Xt(r,3)),t.dispose(),i.dispose(),s}function lf(n){const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d"),r=Ky(n?3:5),o=n?55:80;for(let c=0;c<o;c++){const l=10+r()*236,d=256*(n?.08+r()*.3:.08+r()*.55),f=(r()-.5)*(n?26:50),u=r(),h=s.createLinearGradient(0,256,0,d);n?(h.addColorStop(0,`rgb(${110+u*30},${100+u*20},45)`),h.addColorStop(1,`rgb(${215+u*35},${170+u*35},${70+u*30})`)):(h.addColorStop(0,`rgb(${40+u*20},${80+u*25},${25+u*10})`),h.addColorStop(1,`rgb(${120+u*40},${165+u*40},${60+u*25})`)),s.strokeStyle=h,s.lineCap="round",s.lineWidth=n?3:5-Math.min(2.5,(256-d)/90),s.beginPath(),s.moveTo(l,256),s.quadraticCurveTo(l+f*.2,(256+d)/2,l+f,d),s.stroke(),n&&(s.fillStyle=`rgb(${220+u*30},${175+u*30},${70+u*25})`,s.beginPath(),s.ellipse(l+f,d+14,5,17,f/80,0,Math.PI*2),s.fill())}const a=new Ch(i);return a.colorSpace=en,a.anisotropy=4,a.generateMipmaps=!0,a}function cf(n,e,t,i){const s=new ir({map:n,alphaTest:.42,side:Fn,roughness:.95,metalness:0});return s.onBeforeCompile=r=>{Object.assign(r.uniforms,{uTime:e.uTime,uFocus:t.focus,uR:t.radius}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uR; uniform vec3 uFocus;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 ip = instanceMatrix[3].xyz;
        float hh = uv.y * uv.y;
        float ph = uTime * 1.7 + ip.x * 0.23 + ip.z * 0.17;
        transformed.x += (sin(ph) + 0.4 * sin(ph * 2.3)) * 0.07 * hh;
        transformed.z += cos(ph * 0.8) * 0.05 * hh;
        transformed *= 1.0 - smoothstep(uR * 0.72, uR, distance(ip.xz, uFocus.xz));`),r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
normal = normalize(vNormal);`)},s.customProgramCacheKey=()=>"grass-wind",s}function $y(n,e={}){const t=new mi,i=e.grass??0,s=e.grassRadius??70,r={focus:{value:new ee(1e6,0,1e6)},radius:{value:s}};let o=null,a=null,c=[],l=null,d=null;const f=[],u=[],h=[];if(i>0){const y=!!e.shadows,_=lf(!1),M=lf(!0);u.push(_,M);const F=af(1,.75),D=af(.95,1);h.push(F,D);const N=cf(_,n,r),k=cf(M,n,r);f.push(N,k);const V=Math.floor(i*.6);o=new ji(F,N,i),a=new ji(D,k,V);for(const L of[o,a])L.count=0,L.receiveShadow=y,L.castShadow=!1,L.frustumCulled=!1,L.visible=!1,t.add(L)}const g=new ut,E=new si,p=new ee(0,1,0),m=new ee,C=new ee,I=new He;function S(y,_,M,F){const D=Math.min(1,M/Math.max(1,_.length));let N=0;for(let k=0;k<_.length&&N<M;k++){if(D<1&&Xn(k,3)>D)continue;const[V,L,Q,W,H]=_[k];E.setFromAxisAngle(p,W*6.283),g.compose(C.set(V,L-.04,Q),E,m.set(H,H*(.8+W*.45),H)),y.setMatrixAt(N,g);const J=.85+Xn(k,9)*.3;y.setColorAt(N,I.setRGB(F[0]*J,F[1]*J,F[2]*J)),N++}y.count=N,y.instanceMatrix.needsUpdate=!0,y.instanceColor&&(y.instanceColor.needsUpdate=!0),y.visible=N>0}function b(y,_){if(!l)return;const{terrain:M,grid:F,heightAt:D}=l,N=M.size,k=M.cell,V=N*k/2,L=s,Q=Math.max(0,Math.floor((y-L+V)/k)),W=Math.min(N-1,Math.floor((y+L+V)/k)),H=Math.max(0,Math.floor((_-L+V)/k)),J=Math.min(N-1,Math.floor((_+L+V)/k)),z=[],K=[],Z=.7,le=1/Math.sqrt(Z);for(let q=H;q<=J;q++)for(let de=Q;de<=W;de++){const xe=q*N+de;if(M.kind[xe]!==0||F&&F[xe]!==0)continue;const Ge=de*k-V,he=q*k-V;for(let Ne=0;Ne<k;Ne+=le)for(let ze=0;ze<k;ze+=le){const Qe=Xn(xe,Ne*13+ze*7|0),Ze=Ge+Ne+Xn(xe,100+Ne*5+ze)*le,Ke=he+ze+Xn(xe,300+Ne+ze*5)*le;if(Math.hypot(Ze-y,Ke-_)>L||Xn(de*31+q|0,Ze*.19+Ke*.23|0)<.1+Qe*.15)continue;const $e=D(Ze,Ke);$e<.3||z.push([Ze,$e,Ke,Qe,.8+Xn(xe,500+Ne+ze)*.6])}}const Ae=.7;for(const q of c){const de=q.x0*k-V,xe=q.z0*k-V,Ge=q.w*k,he=q.d*k;if(!(de>y+L||de+Ge<y-L||xe>_+L||xe+he<_-L))for(let Ne=.6;Ne<Ge-.6;Ne+=Ae)for(let ze=.6;ze<he-.6;ze+=Ae){const Qe=(q.x0*131+q.z0|0)+Ne*17+ze*29,Ze=de+Ne+(Xn(Qe|0,1)-.5)*Ae,Ke=xe+ze+(Xn(Qe|0,2)-.5)*Ae;Math.hypot(Ze-y,Ke-_)>L||K.push([Ze,D(Ze,Ke),Ke,Xn(Qe|0,3),.9+Xn(Qe|0,4)*.35])}}S(a,K,a.instanceMatrix.count,[.95,.9,.8]),S(o,z,o.instanceMatrix.count,[.62,.78,.5])}return{group:t,set(y,_,M){l={terrain:y,grid:_,heightAt:M},d=null},setFields(y){c=y||[],d=null},update(y,_,M){if(!o||!_||!l)return;const F=y.position.distanceTo(_)<Xy;t.visible=F,F&&(r.focus.value.copy(_),(!d||Math.hypot(_.x-d.x,_.z-d.z)>Yy)&&(d={x:_.x,z:_.z},b(_.x,_.z)))},get count(){return o?o.count+a.count:0},dispose(){o?.dispose(),a?.dispose(),f.forEach(y=>y.dispose()),u.forEach(y=>y.dispose()),h.forEach(y=>y.dispose())}}}const uf=new Map;function pe(n,e=1){const t=`${n}|${e}`;let i=uf.get(t);if(!i){const s=new He(n);i=[Math.min(1,s.r*e),Math.min(1,s.g*e),Math.min(1,s.b*e)],uf.set(t,i)}return i}const Mt=4;class pr{constructor(){this.p=[],this.n=[],this.uv=[],this.c=[],this.a=[],this.cs=1,this.sn=0,this.smoke=[],this.lights=[]}rot(e){return this.cs=Math.cos(e),this.sn=Math.sin(e),this}_v(e,t,i,s,r,o,a,c,l,d){const{cs:f,sn:u}=this;this.p.push(e*f+i*u,t,-e*u+i*f),this.n.push(s*f+o*u,r,-s*u+o*f),this.uv.push(a,c),this.c.push(l[0],l[1],l[2]),this.a.push(d)}mark(){return this.p.length}rotZSince(e,t,i=0,s=0){const r=Math.cos(t),o=Math.sin(t);for(let a=e;a<this.p.length;a+=3){const c=this.p[a]-i,l=this.p[a+1]-s;this.p[a]=i+c*r-l*o,this.p[a+1]=s+c*o+l*r;const d=this.n[a],f=this.n[a+1];this.n[a]=d*r-f*o,this.n[a+1]=d*o+f*r}}tri(e,t,i,s,r=ne.PLASTER,o=null){const a=t[0]-e[0],c=t[1]-e[1],l=t[2]-e[2],d=i[0]-e[0],f=i[1]-e[1],u=i[2]-e[2];let h=c*u-l*f,g=l*d-a*u,E=a*f-c*d;const p=Math.hypot(h,g,E)||1;h/=p,g/=p,E/=p;const m=o||[[e[0]/Mt+e[2]/Mt,e[1]/Mt],[t[0]/Mt+t[2]/Mt,t[1]/Mt],[i[0]/Mt+i[2]/Mt,i[1]/Mt]];this._v(...e,h,g,E,...m[0],s,r),this._v(...t,h,g,E,...m[1],s,r),this._v(...i,h,g,E,...m[2],s,r)}quad(e,t,i,s,r,o=ne.PLASTER,a=!1){const c=Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),l=Math.hypot(s[0]-e[0],s[1]-e[1],s[2]-e[2]),d=a?1:c/Mt,f=a?1:l/Mt;this.tri(e,t,i,r,o,[[0,0],[d,0],[d,f]]),this.tri(e,i,s,r,o,[[0,0],[d,f],[0,f]])}box(e,t,i,s,r,o,a,c=ne.PLASTER,l={}){const d=l.top||a,f=l.topAtlas??c;return this.quad([s,t,o],[s,t,i],[s,r,i],[s,r,o],a,c),this.quad([e,t,i],[e,t,o],[e,r,o],[e,r,i],a,c),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],a,c),this.quad([s,t,i],[e,t,i],[e,r,i],[s,r,i],a,c),l.noTop||this.quad([e,r,o],[s,r,o],[s,r,i],[e,r,i],d,f),this}gable(e,t,i,s,r,o,a,c,l,d,f){const u=e-s/2-a,h=e+s/2+a,g=i-r/2-a,E=i+r/2+a,p=t+o;this.quad([u,t,E],[h,t,E],[h,p,i],[u,p,i],c,l),this.quad([h,t,g],[u,t,g],[u,p,i],[h,p,i],c,l);const m=e-s/2,C=e+s/2,I=i-r/2,S=i+r/2;return this.tri([C,t,S],[C,t,I],[C,p,i],d,f),this.tri([m,t,I],[m,t,S],[m,p,i],d,f),this}pyramid(e,t,i,s,r,o,a,c=ne.ROOF){const l=e-s/2,d=e+s/2,f=i-r/2,u=i+r/2,h=[e,t+o,i];return this.tri([l,t,u],[d,t,u],h,a,c,[[0,0],[s/Mt,0],[s/Mt/2,o/Mt]]),this.tri([d,t,u],[d,t,f],h,a,c,[[0,0],[r/Mt,0],[r/Mt/2,o/Mt]]),this.tri([d,t,f],[l,t,f],h,a,c,[[0,0],[s/Mt,0],[s/Mt/2,o/Mt]]),this.tri([l,t,f],[l,t,u],h,a,c,[[0,0],[r/Mt,0],[r/Mt/2,o/Mt]]),this}cyl(e,t,i,s,r,o,a,c,l=ne.PLASTER,d=!0,f=c){for(let u=0;u<a;u++){const h=u/a*Math.PI*2,g=(u+1)/a*Math.PI*2,E=Math.sin(h),p=Math.cos(h),m=Math.sin(g),C=Math.cos(g),I=[e+E*s,t,i+p*s],S=[e+m*s,t,i+C*s],b=[e+m*r,t+o,i+C*r],y=[e+E*r,t+o,i+p*r],_=2*Math.PI*s/a/Mt,M=o/Mt;this.tri(I,b,y,c,l,[[0,0],[_,M],[0,M]]),this.tri(I,S,b,c,l,[[0,0],[_,0],[_,M]]),d&&r>.01&&this.tri([e,t+o,i],y,b,f,l,[[0,0],[0,0],[0,0]])}return this}win(e,t,i,s,r,o=1.2,a=1.5,c=[1,1,1]){const l=o/2,d=.07,f=r,u=-s,h=e+s*d,g=i+r*d;return this.quad([h-f*l,t-a/2,g-u*l],[h+f*l,t-a/2,g+u*l],[h+f*l,t+a/2,g+u*l],[h-f*l,t+a/2,g-u*l],c,ne.WINDOW,!0),this}glow(e,t,i,s,r){return this.box(e-s/2,t-s/2,i-s/2,e+s/2,t+s/2,i+s/2,r,ne.GLOW)}geometry(){const e=new on;return e.setAttribute("position",new sn(this.p,3)),e.setAttribute("normal",new sn(this.n,3)),e.setAttribute("uv",new sn(this.uv,2)),e.setAttribute("color",new sn(this.c,3)),e.setAttribute("aAtlas",new sn(this.a,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}}const Jy=pe("#3a2a1c"),Zy=pe("#8d8a84");function bn(n,e,t,i,s){n.box(e-.25,-2.2,t-.25,i+.25,.45,s+.25,Zy,ne.STONE)}function ri(n,e,t,i=1.3,s=2.2){n.quad([e-i/2,.45,t+.06],[e+i/2,.45,t+.06],[e+i/2,s,t+.06],[e-i/2,s,t+.06],Jy,ne.WOOD,!0)}function zA(n,e,t,i,s,r,o,a,c=1,l=2){const d=pe(e.color),f=pe(e.roof,c);bn(n,-t/2,-i/2,t/2,i/2),n.box(-t/2,.45,-i/2,t/2,s,i/2,d,o,{noTop:!0}),n.gable(0,s,0,t,i,r,.7,f,a,d,o),ri(n,t*.18,i/2);for(let u=0;u<l;u++){const h=(u-(l-1)/2)*(t*.5)-t*.2;Math.abs(h-t*.18)>1.4&&n.win(h,s*.62,i/2,0,1)}n.win(t/2,s*.62,0,1,0),n.win(-t/2,s*.62,0,-1,0)}function jy(n,e,t,i,s,r){n.box(e-.45,i,t-.45,e+.45,s,t+.45,pe("#7a6a5a"),ne.STONE),n.smoke.push([e,s+.2,t,r])}const eM=(n,e)=>{const t=e.h*.58;zA(n,e,7.2,6,t,e.h-t+.8,ne.PLASTER,ne.THATCH,2.4,1),n.smoke.push([1.6,e.h+1.2,-.8,1])},VA=(n,e)=>{const t=e.h*.6;zA(n,e,8.8,7,t,e.h-t+.9,ne.TIMBER,ne.ROOF,1.1,3),jy(n,-2.4,-.5,t+.8,e.h+1.6,1)},tM=(n,e,t,i)=>{n.box(-t/2+.5,0,-i/2+.5,t/2-.5,.18,i/2-.5,pe("#6b4f35"),ne.PLASTER);const s=Math.floor((i-3)/2.8);for(let r=0;r<s;r++){const o=-i/2+2+r*2.8,a=r%2?.92:1.08;n.box(-t/2+1.2,.18,o,t/2-1.2,.6+r%3*.08,o+1.7,pe(e.color,a),ne.THATCH)}},nM=(n,e,t,i)=>{n.box(-t/2+.4,0,-i/2+.4,t/2-.4,.16,i/2-.4,pe(e.color),ne.PLASTER);const s=pe("#6b5238"),r=-t/2+.6,o=t/2-.6,a=-i/2+.6,c=i/2-.6,l=(f,u,h,g)=>{const E=Math.min(f,h),p=Math.max(f,h),m=Math.min(u,g),C=Math.max(u,g);n.box(E-.07,.55,m-.07,p+.07,.75,C+.07,s,ne.WOOD),n.box(E-.07,.95,m-.07,p+.07,1.1,C+.07,s,ne.WOOD)};l(r,a,o,a),l(r,c,o,c),l(r,a,r,c),l(o,a,o,c);for(let f=r;f<=o+.1;f+=4)for(const u of[a,c])n.box(f-.15,.1,u-.15,f+.15,1.2,u+.15,s,ne.WOOD);for(let f=a+4;f<c;f+=4)for(const u of[r,o])n.box(u-.15,.1,f-.15,u+.15,1.2,f+.15,s,ne.WOOD);[[-4,-3],[3,2],[-1,5],[6,-5]].forEach(([f,u],h)=>{const g=pe(h===3?"#7a5436":"#f0ece4");n.box(f-.8,.5,u-.5,f+.8,1.4,u+.5,g,ne.THATCH),n.box(f+.8,.9,u-.3,f+1.4,1.5,u+.3,pe("#3b342e"),ne.PLASTER);for(const[E,p]of[[-.5,-.3],[.5,-.3],[-.5,.3],[.5,.3]])n.box(f+E-.08,.15,u+p-.08,f+E+.08,.5,u+p+.08,pe("#3b342e"),ne.PLASTER)})},iM=(n,e)=>{const t=pe(e.color),i=pe(e.roof,1.2);bn(n,-3,-5,3,1),n.box(-3,.45,-5,3,e.h*.6,1,t,ne.WOOD,{noTop:!0}),n.gable(0,e.h*.6,-2,6,6,e.h*.4+.6,.6,i,ne.THATCH,t,ne.WOOD),ri(n,0,1),n.win(-3,2.2,-2,-1,0);for(let s=1.2;s<11;s+=1.6)n.box(-1.1,.35,s,1.1,.55,s+1.4,pe("#8a6c4c"),ne.WOOD);for(const s of[3,7,11])for(const r of[-1.2,1.2])n.box(r-.15,-1.5,s-.15,r+.15,1,s+.15,pe("#4a3826"),ne.WOOD);n.box(2.2,0,4,4,.6,9,pe("#7a5a3c"),ne.WOOD),n.box(-5.2,.45,-3,-4.8,2.6,-2.6,pe("#5a4630"),ne.WOOD),n.box(-5.2,.45,-.4,-4.8,2.6,0,pe("#5a4630"),ne.WOOD),n.box(-5.3,2.3,-3,-4.7,2.6,0,pe("#5a4630"),ne.WOOD)},sM=(n,e)=>{const t=pe(e.color),i=pe(e.roof,1.3);bn(n,-3.5,-4,3.5,2),n.box(-3.5,.45,-4,3.5,2.7,2,t,ne.WOOD,{noTop:!0}),n.gable(0,2.7,-1,7,6,2,.8,i,ne.WOOD,t,ne.WOOD),ri(n,.8,2),n.win(-1.6,1.8,2,0,1,1,1.2);for(let s=0;s<3;s++)for(let r=0;r<4-s;r++){const o=4.4+r*.75+s*.38;n.box(o-.35,.45+s*.7,-1,o+.35,1.1+s*.7,4.5,pe("#9a7048",.9+r%2*.15),ne.WOOD)}n.cyl(-4.8,0,3.6,.7,.65,.8,8,pe("#8c6a46"),ne.WOOD),n.smoke.push([2.2,4.4,-2.5,1])},rM=(n,e,t,i)=>{const s=pe("#7a7771"),r=pe("#222");bn(n,-6,-8,6,-2),n.box(-6,.45,-8,6,5,-2,s,ne.STONE,{noTop:!0}),n.gable(0,5,-5,12,6,2.2,.8,pe(e.roof,2),ne.SLATE,s,ne.STONE),n.box(-1.8,.45,-1.99,1.8,3.4,-1.9,r,ne.PLASTER),n.box(-2.4,.45,-2.2,-1.8,3.8,-1.7,pe("#5a4630"),ne.WOOD),n.box(1.8,.45,-2.2,2.4,3.8,-1.7,pe("#5a4630"),ne.WOOD),n.box(-2.6,3.4,-2.2,2.6,3.9,-1.7,pe("#5a4630"),ne.WOOD);for(const[o,a]of[[-9,-2],[-6,-2],[-9,1],[-6,1]])n.box(o-.25,0,a-.25,o+.25,7.5,a+.25,pe("#5a4630"),ne.WOOD);n.box(-9.4,7.2,-2.4,-5.6,7.9,1.4,pe("#4a3826"),ne.WOOD),n.cyl(-7.5,7.9,-.5,1.2,1.2,.6,10,pe("#2a2622"),ne.SLATE),n.cyl(6,0,6,5.5,.6,3.6,8,pe("#4a4640"),ne.STONE),n.cyl(-2,0,6.5,3.2,.4,2.2,8,pe("#1e1d1c"),ne.SLATE),n.smoke.push([4.2,6.8,-5,1])},oM=pe("#8a5a48");function Qa(n,e,t,i,s=1.2,r=.8,o=3){n.cyl(e,0,t,s,r,i,8,oM,ne.STONE),n.cyl(e,i,t,r+.15,r+.15,.5,8,pe("#3a3430"),ne.SLATE),n.smoke.push([e,i+.7,t,o])}function qr(n,e,t,i,s,r,o){for(let a=e;a<=t+.01;a+=o)n.win(a,i,s,0,r,1.1,1.4)}const aM=(n,e)=>{const t=pe(e.color),i=pe(e.roof);bn(n,-7,-6,7,5),n.box(-7,.45,-6,7,4.4,5,t,ne.TIMBER,{noTop:!0}),n.gable(0,4.4,-.5,14,11,3.2,.8,i,ne.ROOF,t,ne.TIMBER),ri(n,-2,5,2.4,3.2),qr(n,1.5,5.5,2.6,5,1,2.2),n.win(7,2.5,0,1,0),n.win(-7,2.5,0,-1,0),Qa(n,4.5,-3.5,10,.9,.7,2),n.box(8,.45,-3,11,.9,3,pe("#7a5a3a"),ne.WOOD),n.box(8.2,.9,-2.6,10.8,1.3,2.6,pe("#8a6a48"),ne.WOOD),n.cyl(-9,0,8,1,1,1.4,8,pe("#7a5a3a"),ne.WOOD)},lM=(n,e,t,i)=>{const s=pe(e.color),r=pe(e.roof,1.1),o=7;bn(n,-14,-9,14,9),n.box(-14,.45,-9,14,o,9,s,ne.STONE,{noTop:!0});const a=4,c=28/a;for(let l=0;l<a;l++){const d=-14+l*c,f=d+c,u=3.2;n.quad([d,o,-9],[d,o,9],[f,o+u,9],[f,o+u,-9],r,ne.SLATE),n.quad([f,o,9],[f,o,-9],[f,o+u,-9],[f,o+u,9],pe("#6a7a88"),ne.PLASTER),n.tri([d,o,9],[f,o,9],[f,o+u,9],s,ne.STONE),n.tri([f,o,-9],[d,o,-9],[f,o+u,-9],s,ne.STONE)}n.box(-14,o-.3,-9,14,o,9,pe("#555"),ne.SLATE,{noTop:!0}),ri(n,0,9,4.2,4.4),qr(n,-11,-5,3.4,9,1,3),qr(n,5,11,3.4,9,1,3),qr(n,-11,11,3.4,-9,-1,4),Qa(n,15.5,-5,22,1.5,1,4),Qa(n,15.5,4,14,1,.7,3),n.box(-16,.45,2,-14,2.2,7,pe("#2a2826"),ne.SLATE)},cM=n=>{const e=new pr,t=pe("#6b4e32"),i=3.3;for(let s=0;s<12;s++){const r=e.mark();e.box(0,-.18,-.8,i,.18,.8,t,ne.WOOD),e.box(i-.3,-.7,-1.1,i+.15,.7,1.1,pe("#8a6a46"),ne.WOOD),e.rotZSince(r,s/12*Math.PI*2)}return e.box(-.5,-.5,-1.2,.5,.5,1.2,t,ne.WOOD),e.geometry()},uM=(n,e)=>{const t=pe(e.color),i=pe(e.roof);return bn(n,-8,-5,1,5),n.box(-8,.45,-5,1,5,5,t,ne.PLASTER,{noTop:!0}),n.gable(-3.5,5,0,9,10,3.4,.8,i,ne.ROOF,t,ne.PLASTER),ri(n,-4,5),n.win(-6,3,5,0,1),n.win(-1,3,5,0,1),n.win(-8,3,0,-1,0),n.box(1,3.15,-.15,4.6,3.45,.15,pe("#5a4430"),ne.WOOD),n.box(3.6,.2,-2.2,5.6,1,2.2,pe("#7a5a3a"),ne.WOOD),n.box(-2.5,5,-1,-.5,6.4,1,pe("#7a6a5a"),ne.STONE),n.smoke.push([-1.5,6.6,0,1]),{spin:{kind:"wheel",pivot:[4.6,3.3,0],geo:cM()}}},dM=()=>{const n=new pr,e=pe("#5a4430"),t=pe("#efe6d0");for(let i=0;i<4;i++){const s=n.mark();n.box(.6,-.15,-.15,9.6,.15,.15,e,ne.WOOD),n.box(1.6,.15,-.1,9.4,2.3,.1,t,ne.PLASTER),n.box(1.6,.15,-.1,1.9,2.3,.15,e,ne.WOOD),n.rotZSince(s,i/4*Math.PI*2)}return n.box(-.5,-.5,-.5,.5,.5,.9,e,ne.WOOD),n.geometry()},fM=(n,e)=>{const t=pe(e.color),i=pe(e.roof,1.4),s=e.h*.72;bn(n,-4,-4,4,4),n.cyl(0,.4,0,4.4,2.6,s,10,t,ne.PLASTER,!1),n.cyl(0,s+.4,0,3.1,.2,3.4,10,i,ne.ROOF),ri(n,0,4,1.4,2.4),n.win(-2,s*.6,2.6,-.6,.8,.9,1.2),n.box(-1,.45,-3.8,1,.9,-3,pe("#6b5238"),ne.WOOD);for(let r=0;r<5;r++)n.box(4.8+r%2*.7,.45,-3+r*1.1,5.7+r%2*.7,1.1,-2.4+r*1.1,pe("#d8c9a0"),ne.THATCH);return{spin:{kind:"blades",pivot:[0,s*.88,3],geo:dM()}}},hM=(n,e)=>{pe(e.color);const t=pe(e.roof,1.5),i=pe("#9a5040");bn(n,-8,-6,5,6),n.box(-8,.45,-6,5,5.6,6,i,ne.STONE,{noTop:!0}),n.gable(-1.5,5.6,0,13,12,3.2,.7,t,ne.SLATE,i,ne.STONE),ri(n,-2,6,2.6,3.4),qr(n,-6,2,3.2,6,1,3.2),n.box(6,.45,-3.2,10.5,4.6,3.2,pe("#4a4846"),ne.SLATE),n.box(6.4,4.6,-1.2,10.1,5.2,1.2,pe("#5a5754"),ne.SLATE),n.box(7.5,5.2,-.4,8.3,7.4,.4,pe("#3a3836"),ne.SLATE),Qa(n,-5.5,-9,17,1.4,.95,4),n.box(-4,.45,8,1,1.6,10.5,pe("#222120"),ne.SLATE),n.smoke.push([7.9,7.6,0,2])},AM=(n,e)=>{const t=[pe(e.roof),pe("#efe6d2")];bn(n,-11,-5,11,5),n.box(-11,0,-5,11,.3,5,pe("#9a9486"),ne.STONE);for(const i of[-5.6,5.6]){for(const[s,r]of[[-3,-3],[3,-3],[-3,3],[3,3]])n.box(i+s-.15,.3,r-.15,i+s+.15,3,r+.15,pe("#5a4430"),ne.WOOD);for(let s=0;s<6;s++){const r=i-3.4+s*1.1333333333333333,o=r+6.8/6,a=t[s%2];n.quad([r,3,3.6],[o,3,3.6],[o,3.9,0],[r,3.9,0],a,ne.PLASTER),n.quad([o,3,-3.6],[r,3,-3.6],[r,3.9,0],[o,3.9,0],a,ne.PLASTER)}n.box(i-2.6,.3,-1,i+2.6,1.1,1,pe("#8a6a46"),ne.WOOD);for(let s=0;s<4;s++)n.box(i-2.2+s*1.2,1.1,-.7,i-1.4+s*1.2,1.5,.7,pe(["#c9503a","#d9b43a","#6a9a3a","#c9803a"][s]),ne.THATCH)}n.cyl(0,.3,8,1.3,1.3,1,10,pe("#8d8a84"),ne.STONE),n.cyl(0,1,8,.9,.9,.05,10,pe("#3a6a9a"),ne.PLASTER);for(const[i,s]of[[-9.5,7.2],[-8.2,7.6],[9.2,7]])n.cyl(i,0,s,.55,.5,1,8,pe("#7a5a3a"),ne.WOOD)},pM=(n,e)=>{const t=pe(e.color),i=pe(e.roof,1.3);bn(n,-4,-11,4,9),n.box(-3.8,.45,-11,3.8,5.2,1,t,ne.PLASTER,{noTop:!0}),n.rot(-Math.PI/2).gable(-5,5.2,0,12,7.6,3.4,.6,i,ne.SLATE,t,ne.PLASTER).rot(0);for(const s of[-8,-4,-.5])n.win(3.8,3,s,1,0,1,2.2),n.win(-3.8,3,s,-1,0,1,2.2);n.box(-2.6,.45,1,2.6,e.h+.8,7,t,ne.PLASTER,{noTop:!0}),n.pyramid(0,e.h+.8,4,5.6,6.2,5.2,pe(e.roof,1.1),ne.SLATE),n.box(-.1,e.h+5.9,3.9,.1,e.h+7.2,4.1,pe("#d9c98a"),ne.PLASTER),n.box(-.5,e.h+6.5,3.9,.5,e.h+6.7,4.1,pe("#d9c98a"),ne.PLASTER),ri(n,0,7,1.8,3.2),n.box(-1,.45,7.1,1,.8,7.9,pe("#8d8a84"),ne.STONE),n.box(-1.2,e.h-2.6,7,1.2,e.h-.2,7.07,pe("#1e1c1a"),ne.PLASTER),n.win(0,5.6,7,0,1,1,1.6)},mM=(n,e)=>{const t=pe(e.color),i=pe(e.roof,1.1);bn(n,-9,-4,9,4),n.box(-9,.45,-4,9,4.4,4,t,ne.TIMBER,{noTop:!0}),n.gable(0,4.4,0,18,8,3,.8,i,ne.ROOF,t,ne.TIMBER),ri(n,-1.5,4,1.6,2.6);for(const s of[-6,-3.6,1.8,4.2,6.6])n.win(s,1.9,4,0,1),n.win(s,3.6,4,0,1,1,1.2);n.win(9,2.4,0,1,0),n.win(-9,2.4,0,-1,0),n.box(2.5,.45,4.6,2.6,4,4.7,pe("#3a2a1c"),ne.WOOD),n.box(2.6,3.4,4.4,4.4,4,4.5,pe("#8a5a3a"),ne.WOOD);for(const s of[-7,-5.8,7.5])n.cyl(s,0,5.6,.6,.55,1.1,8,pe("#7a5a3a"),ne.WOOD);n.box(-.5,7.2,-2.5,.5,8.2,-1.5,pe("#7a6a5a"),ne.STONE),n.box(5.5,4,-2,6.5,6.2,-1,pe("#7a6a5a"),ne.STONE),n.smoke.push([6,6.4,-1.5,1])},gM=(n,e)=>{const t=pe(e.color),i=pe(e.roof);bn(n,-8,-7,8,7),n.box(-8,.45,-7,8,6.2,5,t,ne.PLASTER,{noTop:!0}),n.pyramid(0,6.2,-1,17,13,4.6,i,ne.ROOF),n.box(-3,.45,4.9,3,9.2,8,t,ne.PLASTER,{noTop:!0}),n.box(-2.2,9.2,5,2.2,13.4,7.4,t,ne.PLASTER,{noTop:!0}),n.pyramid(0,13.4,6.2,5.2,4,4.4,pe(e.roof,1.1),ne.ROOF),n.cyl(0,11.6,7.45,.9,.9,.12,12,pe("#e8e0c8"),ne.PLASTER),ri(n,0,8,2.2,3.6);for(const s of[-1,1])for(const r of[4.5,7])n.win(s*r,2.2,5,0,1),n.win(s*r,4.4,5,0,1,1,1.2);for(const s of[-5.5,-2.5,2.5,5.5])n.win(s,3.4,-7,0,-1);for(let s=0;s<3;s++)n.box(-2.4-s*.2,0,8+s*.5,2.4+s*.2,.2+(2-s)*0,8.5+s*.5,pe("#9a9486"),ne.STONE);n.box(-.08,17.8,6.1,.08,21.5,6.3,pe("#5a4430"),ne.WOOD),n.box(.08,20.2,6.1,1.8,21.4,6.2,pe("#c9503a"),ne.PLASTER),n.smoke.push([-5,8.4,-4,1]),n.box(-5.5,6.2,-4.5,-4.5,8.2,-3.5,pe("#7a6a5a"),ne.STONE)},En=12,EM={hut:eM,house:VA,field:tM,pasture:nM,fishery:iM,lodge:sM,mine:rM,workshop:aM,factory:lM,watermill:uM,windmill:fM,steam:hM,market:AM,chapel:pM,tavern:mM,hall:gM},ka=new Map;function WA(n){let e=ka.get(n.id);if(e)return e;const t=n.look,i=n.size[0]*En,s=n.size[1]*En,r=new pr,a=(EM[t.shape]||VA)(r,t,i,s)||{};return e={geo:r.geometry(),smoke:r.smoke,spin:a.spin||null,w:i,d:s,height:t.h+2},ka.set(n.id,e),e}function vM(){for(const n of ka.values())n.geo.dispose(),n.spin?.geo.dispose();ka.clear()}const _M=128,Zl=.6,ma=.15,df=new ee(0,1,0),ta=new si,ff=new ee,hf=new ee,na=new ut,xM=new ut,SM=new ut,Af=new ut,pf=new He,jl=new es,ia=new ee;function CM(n){let e=Math.imul(n+11,2654435761);return e^=e>>>15,(e>>>0)%1e3/1e3}const yM=n=>{const t=n-1;return 1+(1.9+1)*t*t*t+1.9*t*t};function Ga(n,e,t,i=En){const s=e.rot&1,r=s?n.size[1]:n.size[0],o=s?n.size[0]:n.size[1];return{w:r,d:o,cx:(e.x+r/2-t/2)*i,cz:(e.z+o/2-t/2)*i}}function MM(n,e,t){const i=new mi,s=new Map,r=new Map;let o=[],a=0;function c(h,g,E){const p=new ji(h,e,g);return p.castShadow=E,p.receiveShadow=!0,p.instanceMatrix.setUsage(au),p.count=0,p}function l(h,g){let E=s.get(h.id);if(E&&g<=E.cap)return E;E&&(i.remove(E.mesh),E.mesh.dispose(),E.spinMesh&&(i.remove(E.spinMesh),E.spinMesh.dispose()));const p=WA(h),m=Math.max(_M,g*2);return E={def:h,shape:p,cap:m,items:[],mesh:c(p.geo,m,!0),spinMesh:p.spin?c(p.spin.geo,m,!0):null},i.add(E.mesh),E.spinMesh&&i.add(E.spinMesh),s.set(h.id,E),E}function d(h,g){const E=g-h.spawn;return E>=Zl?1:Math.max(.05,.2+.8*yM(Math.max(0,E)/Zl))}function f(h,g){const E=h.mesh;h.items.forEach((p,m)=>{const C=d(p,g);ta.setFromAxisAngle(df,p.rot*Math.PI/2),na.compose(hf.set(p.cx,p.y,p.cz),ta,ff.set(C,C,C)),E.setMatrixAt(m,na)}),E.count=h.items.length,E.instanceMatrix.needsUpdate=!0,E.computeBoundingSphere()}function u(h){h.items.forEach((g,E)=>{const p=(.93+CM(g.id)*.14)*(g.active<ma?.52:1);h.mesh.setColorAt(E,pf.setRGB(p,p,p)),h.spinMesh?.setColorAt(E,pf)}),h.mesh.instanceColor&&(h.mesh.instanceColor.needsUpdate=!0),h.spinMesh?.instanceColor&&(h.spinMesh.instanceColor.needsUpdate=!0)}return{group:i,get count(){return a},get emitters(){return o},sync(h,g,E,p,m,C,I){const S=new Map;for(const y of h){const _=m.get(y.type);!_||!Number.isFinite(y.x+y.z+y.rot)||(S.has(_.id)||S.set(_.id,[]),S.get(_.id).push(y))}const b=new Set;o=[];for(const[y,_]of S){const M=l(m.get(y),_.length);M.items=_.map(F=>{const D=Ga(M.def,F,p);b.add(F.id),r.has(F.id)||r.set(F.id,I?-999:C);const N=g.get(F.id)??E(D.cx,D.cz);return{id:F.id,rot:F.rot&3,cx:D.cx,cz:D.cz,fw:D.w*En,fd:D.d*En,y:N,active:Number.isFinite(F.active)?F.active:1,spawn:r.get(F.id),angle:0}}),M.mesh.visible=!0,f(M,C),u(M),M.spinMesh&&(M.spinMesh.visible=!0);for(const F of M.items){if(F.active<ma)continue;const D=Math.cos(F.rot*Math.PI/2),N=Math.sin(F.rot*Math.PI/2);for(const[k,V,L,Q]of M.shape.smoke)o.push([F.cx+k*D+L*N,F.y+V,F.cz-k*N+L*D,Q])}}for(const[y,_]of s)S.has(y)||(_.items=[],_.mesh.count=0,_.mesh.visible=!1,_.spinMesh&&(_.spinMesh.count=0,_.spinMesh.visible=!1));for(const y of r.keys())b.has(y)||r.delete(y);a=h.length},update(h,g){for(const E of s.values()){if(!E.items.length||(E.items.some(m=>g-m.spawn<Zl+.05)&&f(E,g),!E.spinMesh))continue;const p=E.shape.spin.kind==="blades"?.9:1.1;E.items.forEach((m,C)=>{m.angle+=m.active<ma?0:h*p*Math.min(1,m.active+.3);const I=d(m,g);ta.setFromAxisAngle(df,m.rot*Math.PI/2),na.compose(hf.set(m.cx,m.y,m.cz),ta,ff.set(I,I,I));const[S,b,y]=E.shape.spin.pivot;Af.multiplyMatrices(na,xM.makeTranslation(S,b,y)).multiply(SM.makeRotationZ(m.angle)),E.spinMesh.setMatrixAt(C,Af)}),E.spinMesh.count=E.items.length,E.spinMesh.instanceMatrix.needsUpdate=!0,E.spinMesh.computeBoundingSphere()}},pick(h){let g=null;for(const E of s.values())for(const p of E.items){if(jl.min.set(p.cx-p.fw/2,p.y-1,p.cz-p.fd/2),jl.max.set(p.cx+p.fw/2,p.y+E.shape.height,p.cz+p.fd/2),!h.intersectBox(jl,ia))continue;const m=h.origin.distanceTo(ia);(!g||m<g.dist)&&(g={dist:m,id:p.id,x:Math.min(p.cx+p.fw/2-.1,Math.max(p.cx-p.fw/2+.1,ia.x)),z:Math.min(p.cz+p.fd/2-.1,Math.max(p.cz-p.fd/2+.1,ia.z))})}return g},dispose(){for(const h of s.values())h.mesh.dispose(),h.spinMesh?.dispose();s.clear(),r.clear()}}}const ec=80,IM=4.6,mf=1.35,bM=new ee(0,1,0),gf=new si,wM=new ee,BM=new ee(1,1,1),Ef=new ut,TM=new He,RM=["#6b4a30","#3a2a20","#8a6a48","#c9c2b4","#5a4030"];function DM(){const n=new pr,e=pe("#7a5a3a"),t=pe("#3a2a1c");n.box(-2.2,.75,-.8,.4,1.5,.8,e,ne.WOOD),n.box(-2,1.5,-.7,.2,2.2,.7,pe("#d9bf72"),ne.THATCH);for(const s of[-1.7,-.2])for(const r of[-.95,.83])n.box(s-.45,0,r,s+.45,.9,r+.12,t,ne.WOOD);n.box(-.4,1.9,-.2,.2,2.7,.4,pe("#4a5a7a"),ne.PLASTER),n.box(.4,1,-.12,1.9,1.15,.12,t,ne.WOOD);const i=pe(RM[0]);n.box(1.7,1,-.32,3.5,1.85,.32,i,ne.THATCH);for(const[s,r]of[[1.8,-.2],[1.8,.2],[3.3,-.2],[3.3,.2]])n.box(s-.1,0,r-.1,s+.1,1,r+.1,pe("#3a2a20"),ne.WOOD);return n.box(3.3,1.5,-.2,3.75,2.5,.2,i,ne.THATCH),n.box(3.6,2.1,-.18,4.3,2.5,.18,i,ne.THATCH),n.box(1.45,1.4,-.08,1.75,1.8,.08,pe("#2a2018"),ne.WOOD),n.geometry()}function LM(n){const e=DM(),t=new ji(e,n,ec);t.frustumCulled=!1,t.castShadow=!1,t.receiveShadow=!1,t.instanceMatrix.setUsage(au),t.count=0;for(let p=0;p<ec;p++)t.setColorAt(p,TM.set(p%3===0?"#e8dcc8":p%3===1?"#ffffff":"#d8cab0"));const i=jh(1745);let s=[],r=new Map,o=12,a=12,c=0,l=()=>0;const d=[],f=(p,m)=>m*4096+p,u=(p,m)=>[(p-o/2+.5)*a,(m-o/2+.5)*a];function h(p,m){const C=r.get(f(p[0],p[1]))||[],I=C.filter(b=>!(m&&b[0]===m[0]&&b[1]===m[1])),S=I.length?I:C;return S.length?S[Math.floor(i()*S.length)]:p}function g(p){const m=s[Math.floor(i()*s.length)];p.prev=m,p.cur=m,p.next=h(m,null),p.t=i()*.5,p.spd=IM*(.8+i()*.4),p.dir=0}function E(p){return[p.prev,p.cur,p.next].every(m=>r.has(f(m[0],m[1])))}return{mesh:t,setNetwork(p,m,C,I){o=m,a=C,l=I,s=p.filter(([y,_])=>Number.isFinite(y+_));const S=new Set(s.map(([y,_])=>f(y,_)));r=new Map;for(const[y,_]of s)r.set(f(y,_),[[y+1,_],[y-1,_],[y,_+1],[y,_-1]].filter(([M,F])=>S.has(f(M,F))));s=s.filter(([y,_])=>r.get(f(y,_)).length>0);for(const y of d)(!s.length||!E(y))&&s.length&&g(y)},setPopulation(p){for(c=s.length?Math.min(ec,Math.floor((p||0)/6),Math.max(1,Math.floor(s.length/2))):0;d.length<c;){const m={};g(m),d.push(m)}t.count=c},get count(){return c},update(p){if(!(!c||!s.length)){for(let m=0;m<c;m++){const C=d[m];for(C.t+=C.spd*p/a;C.t>=1;)C.t-=1,C.prev=C.cur,C.cur=C.next,C.next=h(C.cur,C.prev);const[I,S]=u(...C.prev),[b,y]=u(...C.cur),[_,M]=u(...C.next),F=(I+b)/2,D=(S+y)/2,N=(b+_)/2,k=(y+M)/2,V=C.t,L=1-V;let Q=L*L*F+2*L*V*b+V*V*N,W=L*L*D+2*L*V*y+V*V*k,H=2*L*(b-F)+2*V*(N-b),J=2*L*(y-D)+2*V*(k-y);const z=Math.hypot(H,J);z>.01&&(H/=z,J/=z,C.dir=Math.atan2(-J,H),C.dx=H,C.dz=J),Q+=-(C.dz??0)*mf,W+=(C.dx??0)*mf;const K=Math.max(.15,l(Q,W))+.05;gf.setFromAxisAngle(bM,C.dir),Ef.compose(wM.set(Q,K,W),gf,BM),t.setMatrixAt(m,Ef)}t.instanceMatrix.needsUpdate=!0}},dispose(){e.dispose(),t.dispose()}}}const tc=64,sa=new ut,nc=new si,FM=new ee(0,1,0),vf=new ee(1,1,1),_f=new ee;function PM(){const n=new pr,e=pe("#4a3826"),t=pe("#ffb85a");return n.box(-.1,0,-.1,.1,2.9,.1,e,ne.WOOD),n.box(-.45,2.55,-.05,.1,2.65,.05,e,ne.WOOD),n.box(-.6,2,-.2,-.2,2.55,.2,t,ne.GLOW),n.box(-.68,2.55,-.28,-.12,2.65,.28,e,ne.WOOD),n.geometry()}function UM(){const n=new pr,e=pe("#8d8a84"),t=pe("#4a3020");for(let i=0;i<8;i++){const s=i/8*Math.PI*2;n.box(Math.cos(s)*.9-.2,0,Math.sin(s)*.9-.2,Math.cos(s)*.9+.2,.35,Math.sin(s)*.9+.2,e,ne.STONE)}return n.box(-.7,.05,-.12,.7,.3,.12,t,ne.WOOD),n.box(-.12,.05,-.7,.12,.3,.7,t,ne.WOOD),n.pyramid(0,.3,0,.9,.9,1.5,pe("#ff9a3a"),ne.GLOW),n.smoke.push([0,2,0,1]),n.geometry()}function NM(n){const e=new mi,t=PM(),i=UM(),s=new ji(t,n,tc),r=new ji(i,n,4);for(const a of[s,r])a.count=0,a.castShadow=!1,a.frustumCulled=!1;e.add(s,r);const o=new He(1,1,1);for(let a=0;a<tc;a++)s.setColorAt(a,o);for(let a=0;a<4;a++)r.setColorAt(a,o);return{group:e,set(a,c,l,d,f,u){const h=[],g=[];let E=0;if(c){for(const[m,C]of a)if(!(E>=tc||(m*7+C*13)%3!==0))for(const[I,S]of[[1,0],[-1,0],[0,1],[0,-1]]){const b=m+I,y=C+S;if(b<0||y<0||b>=d||y>=d||c[y*d+b]<=0)continue;const _=(m-d/2+.5)*f+I*4.6,M=(C-d/2+.5)*f+S*4.6,F=Math.max(.2,u(_,M));nc.setFromAxisAngle(FM,Math.atan2(-S,I)),sa.compose(_f.set(_,F,M),nc,vf),s.setMatrixAt(E++,sa),h.push([_-I*.4,F+2.3,M-S*.4,9]);break}}s.count=E,s.instanceMatrix.needsUpdate=!0;let p=0;if(c)for(const m of l.slice(0,2))for(const[C,I]of[[m.x+m.w,m.z],[m.x-1,m.z],[m.x,m.z+m.d],[m.x,m.z-1]]){if(C<0||I<0||C>=d||I>=d||c[I*d+C]>0)continue;const S=(C-d/2+.5)*f,b=(I-d/2+.5)*f,y=Math.max(.2,u(S,b));sa.compose(_f.set(S,y,b),nc.identity(),vf),r.setMatrixAt(p++,sa),h.push([S,y+1,b,11]),g.push([S,y+1.8,b,1]);break}return r.count=p,r.instanceMatrix.needsUpdate=!0,{glow:h,smoke:g}},dispose(){t.dispose(),i.dispose(),s.dispose(),r.dispose()}}}const ic=5,xf=2400,Sf=300,qA=`
  uniform float uK;
  float nbPointSize(float meters, vec4 mv) {
    bool ortho = projectionMatrix[3][3] == 1.0;
    return meters * uK / (ortho ? 1.0 : max(1.0, -mv.z));
  }`;function OM(n,e){return new Gn({transparent:!0,depthWrite:!1,uniforms:{uTime:n.uTime,uNight:n.uNight,uK:e,uTone:{value:new He(.8,.8,.8)}},vertexShader:`
      uniform float uTime; uniform vec3 uTone; ${qA}
      attribute float aPhase; attribute float aPower;
      varying float vA; varying vec3 vC;
      void main() {
        float age = fract(uTime * 0.2 + aPhase);
        vec3 p = position + vec3(age * 7.0 + sin(age * 5.0 + aPhase * 30.0) * 0.8, age * (9.0 + aPower * 2.0), age * 2.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = nbPointSize((1.2 + age * 3.2) * (0.7 + aPower * 0.25), mv);
        vA = (1.0 - age) * smoothstep(0.0, 0.08, age) * (0.3 + aPower * 0.06);
        vC = uTone * (0.55 + 0.45 * (1.0 - age));
      }`,fragmentShader:`
      varying float vA; varying vec3 vC;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.15, d) * vA;
        if (a < 0.01) discard;
        gl_FragColor = vec4(vC, a);
      }`})}function QM(n,e){return new Gn({transparent:!0,depthWrite:!1,blending:fc,uniforms:{uTime:n.uTime,uNight:n.uNight,uK:e},vertexShader:`
      uniform float uTime; uniform float uNight; ${qA}
      attribute float aSize; varying float vA;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float fl = 0.85 + 0.15 * sin(uTime * 8.0 + position.x * 1.7 + position.z * 0.9);
        gl_PointSize = nbPointSize(aSize * fl, mv);
        vA = uNight * 0.55 * fl;
      }`,fragmentShader:`
      varying float vA;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = pow(max(0.0, 1.0 - d), 2.0) * vA;
        if (a < 0.01) discard;
        gl_FragColor = vec4(vec3(1.0, 0.62, 0.26) * a, a);
      }`})}function Cf(n,e,t){const i=new on;i.setAttribute("position",new Xt(new Float32Array(n*3),3));for(const[r,o]of e)i.setAttribute(r,new Xt(new Float32Array(n*o),o));i.setDrawRange(0,0);const s=new _h(i,t);return s.frustumCulled=!1,s}function kM(n){const e={value:800},t=Cf(xf,[["aPhase",1],["aPower",1]],OM(n,e)),i=Cf(Sf,[["aSize",1]],QM(n,e));return t.renderOrder=3,i.renderOrder=4,{smoke:t,glow:i,setSmoke(s){const r=t.geometry,o=r.attributes.position.array,a=r.attributes.aPhase.array,c=r.attributes.aPower.array;let l=0;for(let d=0;d<s.length&&l+ic<=xf;d++){const[f,u,h,g]=s[d];for(let E=0;E<ic;E++,l++)o[l*3]=f,o[l*3+1]=u,o[l*3+2]=h,a[l]=(E+d*.618%1)/ic,c[l]=g}r.setDrawRange(0,l);for(const d of["position","aPhase","aPower"])r.attributes[d].needsUpdate=!0},setGlow(s){const r=i.geometry,o=r.attributes.position.array,a=r.attributes.aSize.array,c=Math.min(s.length,Sf);for(let l=0;l<c;l++)o.set(s[l].slice(0,3),l*3),a[l]=s[l][3];r.setDrawRange(0,c),r.attributes.position.needsUpdate=!0,r.attributes.aSize.needsUpdate=!0},setView(s,r){e.value=s.isOrthographicCamera?r/(s.top-s.bottom):r/(2*Math.tan(s.fov*Math.PI/360))},setTone(s){t.material.uniforms.uTone.value.copy(s)},dispose(){t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose()}}}const yf=new He("#5fe27a"),sc=new He("#ff5a4a"),GM=new He("#6fd0ff"),HM=new ee(0,1,0);function Mf(n){const e=new xi(1,1).rotateX(-Math.PI/2),t=new Au({transparent:!0,opacity:.45,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new ji(e,t,n);i.count=0,i.frustumCulled=!1,i.renderOrder=5;const s=new ut,r=new si,o=new ee,a=new ee;return{mesh:i,set(c,l,d,f,u){const h=Math.min(n,c?.length||0);for(let g=0;g<h;g++){const[E,p]=c[g],m=(E-d/2+.5)*f,C=(p-d/2+.5)*f,I=f/2,S=Math.max(u(m,C),u(m-I,C-I),u(m+I,C-I),u(m-I,C+I),u(m+I,C+I),0)+.18;s.compose(o.set(m,S,C),r,a.set(f*.94,1,f*.94)),i.setMatrixAt(g,s),i.setColorAt(g,l)}i.count=h,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.visible=h>0},clear(){i.count=0,i.visible=!1},dispose(){e.dispose(),t.dispose(),i.dispose()}}}function zM(n,e,t,i){const s=new mi,r=Mf(64),o=Mf(96),a=HA(n,e,t.map);Object.assign(a,{transparent:!0,opacity:.62,depthWrite:!1});const c=new fn(new on,a);c.visible=!1,c.renderOrder=4;const l=new Au({color:16769658,transparent:!0,opacity:.9,side:Fn,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),d=new fn(new on,l);d.visible=!1,d.frustumCulled=!1,d.renderOrder=6,s.add(r.mesh,o.mesh,c,d);let f=!1,u=!1,h=0;function g(E,p,m,C){const I=[],b=m/2,y=C/2,_=.55,M=(k,V,L,Q)=>{const W=Math.hypot(L-k,Q-V),H=Math.max(1,Math.ceil(W/3));for(let J=0;J<H;J++)I.push([k+(L-k)*J/H,V+(Q-V)*J/H])};M(E-b,p-y,E+b,p-y),M(E+b,p-y,E+b,p+y),M(E+b,p+y,E-b,p+y),M(E-b,p+y,E-b,p-y);const F=[],D=[];I.forEach(([k,V])=>{const L=k-E,Q=V-p;for(const W of[-_,_]){const H=k+(Math.abs(L)>b-.01?Math.sign(L)*W:0),J=V+(Math.abs(Q)>y-.01?Math.sign(Q)*W:0);F.push(H,Math.max(i(H,J),0)+.3,J)}});const N=I.length;for(let k=0;k<N;k++){const V=k*2,L=(k+1)%N*2;D.push(V,V+1,L,L,V+1,L+1)}d.geometry.dispose(),d.geometry=new on,d.geometry.setAttribute("position",new sn(F,3)),d.geometry.setIndex(D),d.visible=!0}return{group:s,setSelection(E,p,m,C){if(f=!1,d.visible=!1,!E||!Number.isFinite(E.x+E.z))return;f=!0;const I=E.id>0?m.find(b=>b.id===E.id):null,S=I&&p.get(I.type);if(I&&S){const b=Ga(S,I,C);g(b.cx,b.cz,b.w*En,b.d*En)}else g((E.x-C/2+.5)*En,(E.z-C/2+.5)*En,En,En)},setPreview(E,p,m){const C=E&&p.get(E.type);if(u=!!C,c.visible=u,!C){r.clear();return}const I=WA(C),S=Ga(C,{x:E.x,z:E.z,rot:E.rot|0},m);c.geometry=I.geo;let b=0;for(const[y,_]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,0]])b=Math.max(b,i(S.cx+y*S.w*En/2,S.cz+_*S.d*En/2));c.position.set(S.cx,Math.max(b,.35),S.cz),c.quaternion.setFromAxisAngle(HM,(E.rot|0)*Math.PI/2),a.color.copy(E.ok?yf:sc).lerp(new He(1,1,1),.35),r.set(E.cells?.length?E.cells:[[E.x,E.z]],E.ok?yf:sc,m,En,i)},setRoadPreview(E,p){if(!E||!E.cells?.length){o.clear();return}o.set(E.cells,E.ok?GM:sc,p,En,i)},update(E){h+=E,f&&(l.opacity=.65+.3*Math.sin(h*5)),u&&(a.opacity=.55+.1*Math.sin(h*4))},dispose(){r.dispose(),o.dispose(),d.geometry.dispose(),l.dispose(),a.dispose()}}}const If=3,VM=48,rc=new Rh,bf=new ct;function WM(n,e){const t=new ee;function i(s){const r=s.origin,o=s.direction;if(o.y>-1e-5)return null;const a=n.half;let c=Math.max(0,(VM-r.y)/o.y);const l=-r.y/o.y;if(l<=c)return null;let d=c;for(let f=c;f<=l+If;f+=If){const u=Math.min(f,l);if(t.copy(o).multiplyScalar(u).add(r),t.y<=n.surfaceY(t.x,t.z)){let h=d,g=u;for(let E=0;E<10;E++){const p=(h+g)/2;t.copy(o).multiplyScalar(p).add(r),t.y<=n.surfaceY(t.x,t.z)?g=p:h=p}return t.copy(o).multiplyScalar(g).add(r),Math.abs(t.x)>a||Math.abs(t.z)>a?null:{x:t.x,z:t.z,dist:g}}if(d=u,u>=l)break}return null}return{pick(s,r,o){if(!s||!n.ready||!Number.isFinite(r+o))return null;bf.set(r,o),rc.setFromCamera(bf,s);const a=i(rc.ray),c=e.pick(rc.ray);return c&&(!a||c.dist<a.dist+6)?{x:c.x,z:c.z}:a?{x:a.x,z:a.z}:null}}}const qM=new ee(.5,.8,.3),XM=90,wf=.36,lo=new Map(gi.buildings.map(n=>[n.id,n]));let pt,Ft,ds,ga,jt,Xs,Ys,qi,Fi,Ea,Ai,fs,Bf,oc=[],Kn={terrain:"",geom:"",active:""},Tf=new Map,Jn=64,kr=12,ac=!0,XA=null,YA=null,KA=null;const gs={buildings:0,trees:0,cars:0},Rf=()=>Ft.resize();function Fr(n,e=2166136261){for(let t=0;t<n.length;t++)e=Math.imul(e^(n[t]|0),16777619);return e>>>0}function YM(n){return n&&n.size>0&&Array.isArray(n.height)&&Array.isArray(n.kind)&&n.height.length===n.size*n.size&&n.kind.length===n.height.length}function KM(){Kn.terrain&&(Kn={terrain:"",geom:"",active:""},qi.sync([],new Map,jt.heightAt,Jn,lo,0,!0),Fi.setNetwork([],Jn,kr,jt.heightAt),Fi.setPopulation(0),Ai.setSmoke([]),Ai.setGlow([]),jt.group.visible=!1,gs.buildings=gs.trees=gs.cars=0)}function lc(){const n=pt.store.get(),e=n?.region?.terrain;if(!YM(e)){KM();return}const t=`${n.meta?.gameId}|${e.size}|${e.cell}|${Fr(e.height.map(l=>Math.round(l*10)))}`;t!==Kn.terrain&&(Jn=e.size,kr=e.cell,jt.setBase(e),jt.group.visible=!0,Kn={terrain:t,geom:"",active:""},ac=!0);const i=n.region.grid,s=n.build?.buildings||[],r=n.build?.roads||[],o=`${Fr(e.kind)}|${Fr(s.flatMap(l=>[l.id,l.x,l.z,l.rot]))}|${Fr(r.flat())}|${r.length}`,a=Fr(s.map(l=>l.active<ma?1:0));let c=!1;if(o!==Kn.geom){Kn.geom=o,jt.setKinds(e.kind);const l=[],d=[],f=[],u=[];for(const g of s){const E=lo.get(g.type);if(!E)continue;const p=Ga(E,g,Jn);l.push({id:g.id,x0:g.x,z0:g.z,w:p.w,d:p.d}),d.push({x0:g.x,z0:g.z,w:p.w,d:p.d,kind:E.look.shape==="field"?"field":"yard"}),E.id==="townhall"&&f.push({x:g.x,z:g.z,w:p.w,d:p.d}),(E.id==="townhall"||E.id==="market")&&u.push({cx:g.x+(p.w>>1),cz:g.z+(p.d>>1),r:4})}Tf=jt.applyPlots(l),ga.paint(r,d,Jn,kr,u),Xs.set(e,i,jt.heightAt),Ys.setFields(d.filter(g=>g.kind==="field")),Ys.set(e,i,jt.heightAt);const h=Ea.set(r,i,f,Jn,kr,jt.heightAt);Kn.lampSmoke=h.smoke,Fi.setNetwork(r,Jn,kr,jt.heightAt),Ai.setGlow(h.glow),c=!0}(c||a!==Kn.active)&&(Kn.active=a,qi.sync(s,Tf,jt.heightAt,Jn,lo,performance.now()/1e3,ac),Ai.setSmoke([...qi.emitters,...Kn.lampSmoke||[]]),ac=!1),Fi.setPopulation(n.population?.total),gs.buildings=s.length,gs.trees=Xs.count,gs.cars=Fi.count,va()}function va(){const n=pt.store.get();fs.setSelection(XA,lo,n?.build?.buildings||[],Jn),fs.setPreview(YA,lo,Jn),fs.setRoadPreview(KA,Jn)}const $M={name:"render",required:!0,init(n){pt=n,Vc[pt.settings.quality]||(pt.settings.quality="maximum");const e=Fy(pt.settings.quality);Ft=Ly(pt.view.canvas,e);const t=Ft.shared;ds=HA(Ft.renderer,t),ga=Py(Ft.renderer),jt=Hy(Ft.renderer,t,ga.tex),jt.group.visible=!1,Xs=qy(e.trees,Ft.renderer,e),Ys=$y(t,e),qi=MM(Ft.renderer,ds),Fi=LM(ds),Ea=NM(ds),Ai=kM(t),fs=zM(Ft.renderer,t,ds,jt.heightAt),Bf=WM(jt,qi),Ft.scene.add(jt.group,Xs.group,Ys.group,qi.group,Fi.mesh,Ea.group,Ai.smoke,Ai.glow,fs.group),pt.view.renderer=Ft.renderer,pt.view.scene=Ft.scene,pt.view.dpr=Ft.dpr,pt.view.quality=e,pt.view.gpu=Ft.gpuName(),pt.view.counts=gs,pt.view.dayTime=wf,pt.view.pickGround=(s,r)=>Bf.pick(pt.view.camera,s,r),pt.view.envReady=Ft.envReady,Ft.resize(),window.addEventListener("resize",Rf);const i=s=>r=>{try{s(r)}catch(o){console.error("render:",o)}};oc.push(pt.bus.on("game:started",i(()=>{Kn.terrain="",lc()})),pt.bus.on("state:changed",i(lc)),pt.bus.on("region:select",i(s=>{XA=s,va()})),pt.bus.on("build:preview",i(s=>{YA=s,va()})),pt.bus.on("build:road-preview",i(s=>{KA=s,va()}))),pt.store?.get?.()&&lc()},update(n){pt.view.dayLock||(pt.view.dayTime=(((pt.view.dayTime??wf)+n/XM)%1+1)%1);const e=Ft.setDay(pt.view.dayTime,n);pt.view.sunDir=e.lightDir;const t=performance.now()/1e3;qi.update(n,t),Fi.update(n),fs.update(n),Ai.setTone(e.smoke);const i=pt.view.camera;i&&(Ai.setView(i,Ft.renderer.domElement.height),Xs.update(i,pt.view.sunDir||qM),Ys.update(i,pt.view.focus,n),Ft.setFog(i,pt.view.focus),Ft.followFocus(pt.view.focus),Ft.render(i))},serialize(){return null},load(){},dispose(){window.removeEventListener("resize",Rf),oc.forEach(n=>n()),oc=[],fs?.dispose(),Ai?.dispose(),Ea?.dispose(),Fi?.dispose(),qi?.dispose(),Xs?.dispose(),Ys?.dispose(),jt?.dispose(),ga?.dispose(),vM(),ds&&xy(ds),Ft?.dispose()}},JM=[Hs,og,YS,$S,nC,IC,wC,TC,$M];function ZM(){const n=ZA(km),e=document.getElementById("loading");e&&(e.textContent=n("app.loading"));const t=document.createElement("canvas");if(document.getElementById("app").append(t),!t.getContext("webgl2")){e.textContent=n("app.noWebgl");return}const i=$A(),s=ep(),r=cr("sandbox"),o=JM.filter(u=>u.required||r.modules[u.name]!==!1),a={bus:i,t:n,settings:s,build:{id:"27-4132253",time:"2026-11-15 12:00"},view:{canvas:t},mode:()=>r};a.game={snapshot(){const u={};for(const h of o){if(h===Hs)continue;const g=h.serialize();g!=null&&(u[h.name]=g)}return{format:"nb3d-save",schemaVersion:Es,build:a.build.id,savedAt:new Date().toISOString(),state:Hs.serialize(),client:u}},async restore(u){await Hs.load(u.state);for(const h of o)h!==Hs&&h.load(u.client?.[h.name]??null);i.emit("game:started",{mode:u.state.meta.mode,seed:u.state.meta.seed,loaded:!0})},async newGame(u){await Hs.newGame(u);const h=a.store.get();i.emit("game:started",{mode:h.meta.mode,seed:h.meta.seed,loaded:!1})}};const c=new Map;function l(u,h){try{h()}catch(g){const E=performance.now();(!c.has(u.name)||E-c.get(u.name)>5e3)&&(c.set(u.name,E),console.error(`Modul ${u.name}:`,g),i.emit("app:error",{module:u.name,message:String(g?.message||g)}))}}a.loop=JA({getLimit:()=>s.fpsLimit,onFrame(u){for(const h of o)l(h,()=>h.update(u))}});for(const u of o)u.init(a);i.on("settings:changed",u=>tp(u)),i.on("game:new",u=>a.game.newGame(u)),document.addEventListener("visibilitychange",()=>{document.hidden?(i.emit("app:hidden"),a.loop.stop()):(i.emit("app:visible"),a.loop.start())}),window.addEventListener("pagehide",()=>i.emit("app:hidden"));let d=!1;const f=new Promise(u=>i.on("game:started",()=>{d||(d=!0,u())}));Promise.all([a.view.envReady,f]).then(()=>document.getElementById("loading")?.remove()),a.loop.start(),i.emit("app:ready"),window.__nb3d={bus:i,ctx:a}}ZM();
