(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Oc(){const i=new Map;return{on(e,t){return i.has(e)||i.set(e,new Set),i.get(e).add(t),()=>i.get(e)?.delete(t)},emit(e,t){const n=i.get(e);if(n)for(const r of[...n])r(t)}}}function Bc({onFrame:i,getLimit:e}){let t=!1,n=0,r=0;const s=[];let a=0;function l(u){if(!t)return;r=requestAnimationFrame(l);const c=e(),f=n?u-n:16.7;if(c>0){const m=1e3/c;if(f<m-1.5)return}for(n=u,s.push(f),a+=f;a>2e3&&s.length>1;)a-=s.shift();i(Math.min(f,100)/1e3,u)}return{start(){t||(t=!0,n=0,r=requestAnimationFrame(l))},stop(){t=!1,cancelAnimationFrame(r)},fps(){let u=0,c=0;for(let f=s.length-1;f>=0&&u<1e3;f--)u+=s[f],c++;return u>0?c*1e3/u:0},lastFrameMs(){return s.length?s[s.length-1]:0}}}const Il="nb3d.techtest.settings",So={quality:"maximum",fpsLimit:120};function zc(){try{return{...So,...JSON.parse(localStorage.getItem(Il)||"{}")}}catch{return{...So}}}function Mo(i){try{localStorage.setItem(Il,JSON.stringify(i))}catch{}}const pi={maximum:{label:"Maximum",maxDpr:3,shadows:!0,shadowSize:4096,shadowRange:150,softShadows:!0,trees:900,fog:1400},hoch:{label:"Hoch",maxDpr:2,shadows:!0,shadowSize:2048,shadowRange:120,softShadows:!0,trees:700,fog:1200},mittel:{label:"Mittel",maxDpr:1.5,shadows:!0,shadowSize:1024,shadowRange:90,softShadows:!1,trees:450,fog:1e3},niedrig:{label:"Niedrig",maxDpr:1,shadows:!1,shadowSize:512,shadowRange:60,softShadows:!1,trees:250,fog:900}},Ds=["maximum","hoch","mittel","niedrig"];function Hc(i){return pi[i]||pi.maximum}const Gc="modulepreload",kc=function(i,e){return new URL(i,e).href},Eo={},Vc=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");r=c(t.map(f=>{if(f=kc(f,n),f in Eo)return;Eo[f]=!0;const m=f.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(n)for(let S=a.length-1;S>=0;S--){const y=a[S];if(y.href===f&&(!m||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${d}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":Gc,m||(_.as="script"),_.crossOrigin="",_.href=f,u&&_.setAttribute("nonce",u),document.head.appendChild(_),m)return new Promise((S,y)=>{_.addEventListener("load",S),_.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};const to="187",Hn={ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wc=0,yo=1,Xc=2,ur=1,Nl=2,or=3,xi=0,Yt=1,On=2,zi=0,hr=1,bo=2,To=3,Ao=4,Yc=5,Fi=100,qc=101,Zc=102,Kc=103,$c=104,Jc=200,Qc=201,jc=202,eu=203,Ul=204,Fl=205,tu=206,nu=207,iu=208,ru=209,su=210,au=211,ou=212,lu=213,cu=214,ha=0,fa=1,da=2,mr=3,pa=4,ma=5,ga=6,_a=7,Ol=0,uu=1,hu=2,Gn=0,Bl=1,zl=2,Hl=3,no=4,Gl=5,kl=6,Vl=7,Wl=300,Gi=301,gr=302,Is=303,Ns=304,vs=1e3,_n=1001,xa=1002,Ut=1003,fu=1004,Hr=1005,Rt=1006,Us=1007,zn=1008,tn=1009,Xl=1010,Yl=1011,_r=1012,io=1013,wn=1014,Qt=1015,Xt=1016,ro=1017,so=1018,ki=1020,ql=35902,Zl=35899,Kl=1021,$l=1022,Nt=1023,ni=1026,ti=1027,mi=1028,ao=1029,on=1030,oo=1031,lo=1033,fs=33776,ds=33777,ps=33778,ms=33779,va=35840,Sa=35841,Ma=35842,Ea=35843,ya=36196,ba=37492,Ta=37496,Aa=37488,wa=37489,Ss=37490,Ra=37491,Ca=37808,Pa=37809,La=37810,Da=37811,Ia=37812,Na=37813,Ua=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,Ha=37819,Ga=37820,ka=37821,Va=36492,Wa=36494,Xa=36495,Ya=36283,qa=36284,Ms=36285,Za=36286,du=3200,Ka=0,pu=1,jn="",Jt="srgb",pn="srgb-linear",Es="linear",dt="srgb",Fs=7680,mu=519,gu=512,_u=513,xu=514,Jl=515,vu=516,Su=517,Ql=518,jl=519,Mu=35044,Eu=35048,wo="300 es",xn=2e3,xr=2001;function yu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bu(){const i=ys("canvas");return i.style.display="block",i}const Ro={};function Co(...i){const e="THREE."+i.shift();console.log(e,...i)}function ec(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=ec(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=ec(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gs(...i){const e=i.join(" ");e in Ro||(Ro[e]=!0,Ye(...i))}function Tu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Au={[ha]:ha,[da]:ga,[pa]:pa,[mr]:ma,[fa]:fa,[ga]:da,[_a]:_a,[ma]:mr};class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Po=1234567;const fr=Math.PI/180,vr=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function co(i,e){return(i%e+e)%e}function wu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ru(i,e,t){return i!==e?(t-i)/(e-i):0}function dr(i,e,t){return(1-t)*i+t*e}function Cu(i,e,t,n){return dr(i,e,1-Math.exp(-t*n))}function Pu(i,e=1){return e-Math.abs(co(i,e*2)-e)}function Lu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Iu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nu(i,e){return i+Math.random()*(e-i)}function Uu(i){return i*(.5-Math.random())}function Fu(i){i!==void 0&&(Po=i);let e=Po+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ou(i){return i*fr}function Bu(i){return i*vr}function zu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gu(i,e,t,n,r){const s=Math.cos,a=Math.sin,l=s(t/2),u=a(t/2),c=s((e+n)/2),f=a((e+n)/2),m=s((e-n)/2),d=a((e-n)/2),_=s((n-e)/2),S=a((n-e)/2);switch(r){case"XYX":i.set(l*f,u*m,u*d,l*c);break;case"YZY":i.set(u*d,l*f,u*m,l*c);break;case"ZXZ":i.set(u*m,u*d,l*f,l*c);break;case"XZX":i.set(l*f,u*S,u*_,l*c);break;case"YXY":i.set(u*_,l*f,u*S,l*c);break;case"ZYZ":i.set(u*S,u*_,l*f,l*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function uo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nc(i,e){if(e.constructor===Float32Array)return i;const t=uo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function ic(i,e){if(e.constructor===Float32Array)return i;const t=uo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Sr={DEG2RAD:fr,RAD2DEG:vr,generateUUID:Xi,clamp:et,euclideanModulo:co,mapLinear:wu,inverseLerp:Ru,lerp:dr,damp:Cu,pingpong:Pu,smoothstep:Lu,smootherstep:Du,randInt:Iu,randFloat:Nu,randFloatSpread:Uu,seededRandom:Fu,degToRad:Ou,radToDeg:Bu,isPowerOfTwo:zu,ceilPowerOfTwo:Hu,floorPowerOfTwo:tc,setQuaternionFromProperEuler:Gu,normalize:ic,denormalize:nc};class Ze{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let u=n[r+0],c=n[r+1],f=n[r+2],m=n[r+3],d=s[a+0],_=s[a+1],S=s[a+2],y=s[a+3];if(m!==y||u!==d||c!==_||f!==S){let x=u*d+c*_+f*S+m*y;x<0&&(d=-d,_=-_,S=-S,y=-y,x=-x);let p=1-l;if(x<.9995){const M=Math.acos(x),C=Math.sin(M);p=Math.sin(p*M)/C,l=Math.sin(l*M)/C,u=u*p+d*l,c=c*p+_*l,f=f*p+S*l,m=m*p+y*l}else{u=u*p+d*l,c=c*p+_*l,f=f*p+S*l,m=m*p+y*l;const M=1/Math.sqrt(u*u+c*c+f*f+m*m);u*=M,c*=M,f*=M,m*=M}}e[t]=u,e[t+1]=c,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,a){const l=n[r],u=n[r+1],c=n[r+2],f=n[r+3],m=s[a],d=s[a+1],_=s[a+2],S=s[a+3];return e[t]=l*S+f*m+u*_-c*d,e[t+1]=u*S+f*d+c*m-l*_,e[t+2]=c*S+f*_+l*d-u*m,e[t+3]=f*S-l*m-u*d-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,u=Math.sin,c=l(n/2),f=l(r/2),m=l(s/2),d=u(n/2),_=u(r/2),S=u(s/2);switch(a){case"XYZ":this._x=d*f*m+c*_*S,this._y=c*_*m-d*f*S,this._z=c*f*S+d*_*m,this._w=c*f*m-d*_*S;break;case"YXZ":this._x=d*f*m+c*_*S,this._y=c*_*m-d*f*S,this._z=c*f*S-d*_*m,this._w=c*f*m+d*_*S;break;case"ZXY":this._x=d*f*m-c*_*S,this._y=c*_*m+d*f*S,this._z=c*f*S+d*_*m,this._w=c*f*m-d*_*S;break;case"ZYX":this._x=d*f*m-c*_*S,this._y=c*_*m+d*f*S,this._z=c*f*S-d*_*m,this._w=c*f*m+d*_*S;break;case"YZX":this._x=d*f*m+c*_*S,this._y=c*_*m+d*f*S,this._z=c*f*S-d*_*m,this._w=c*f*m-d*_*S;break;case"XZY":this._x=d*f*m-c*_*S,this._y=c*_*m-d*f*S,this._z=c*f*S+d*_*m,this._w=c*f*m+d*_*S;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],u=t[9],c=t[2],f=t[6],m=t[10],d=n+l+m;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(f-u)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(n>l&&n>m){const _=2*Math.sqrt(1+n-l-m);this._w=(f-u)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(l>m){const _=2*Math.sqrt(1+l-n-m);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(u+f)/_}else{const _=2*Math.sqrt(1+m-n-l);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(u+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,u=t._y,c=t._z,f=t._w;return this._x=n*f+a*l+r*c-s*u,this._y=r*f+a*u+s*l-n*c,this._z=s*f+a*c+n*u-r*l,this._w=a*f-n*l-r*u-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,s=-s,a=-a,l=-l);let u=1-t;if(l<.9995){const c=Math.acos(l),f=Math.sin(c);u=Math.sin(u*c)/f,t=Math.sin(t*c)/f,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,u=e.w,c=2*(a*r-l*n),f=2*(l*t-s*r),m=2*(s*n-a*t);return this.x=t+u*c+a*m-l*f,this.y=n+u*f+l*c-s*m,this.z=r+u*m+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*a-n*u,this.z=n*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Os.copy(this).projectOnVector(e),this.sub(Os)}reflect(e){return this.sub(Os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new W,Lo=new Wn;class $e{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,l,u,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,c)}set(e,t,n,r,s,a,l,u,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],u=n[6],c=n[1],f=n[4],m=n[7],d=n[2],_=n[5],S=n[8],y=r[0],x=r[3],p=r[6],M=r[1],C=r[4],w=r[7],I=r[2],D=r[5],v=r[8];return s[0]=a*y+l*M+u*I,s[3]=a*x+l*C+u*D,s[6]=a*p+l*w+u*v,s[1]=c*y+f*M+m*I,s[4]=c*x+f*C+m*D,s[7]=c*p+f*w+m*v,s[2]=d*y+_*M+S*I,s[5]=d*x+_*C+S*D,s[8]=d*p+_*w+S*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],c=e[7],f=e[8];return t*a*f-t*l*c-n*s*f+n*l*u+r*s*c-r*a*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],c=e[7],f=e[8],m=f*a-l*c,d=l*u-f*s,_=c*s-a*u,S=t*m+n*d+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=m*y,e[1]=(r*c-f*n)*y,e[2]=(l*n-r*a)*y,e[3]=d*y,e[4]=(f*t-r*u)*y,e[5]=(r*s-l*t)*y,e[6]=_*y,e[7]=(n*u-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){const u=Math.cos(s),c=Math.sin(s);return this.set(n*u,n*c,-n*(u*a+c*l)+a+e,-r*c,r*u,-r*(-c*a+u*l)+l+t,0,0,1),this}scale(e,t){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bs.makeScale(e,t)),this}rotate(e){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bs.makeRotation(-e)),this}translate(e,t){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new $e,Do=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Io=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){const i={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?Es:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pn]:{primaries:e,whitePoint:n,transfer:Es,toXYZ:Do,fromXYZ:Io,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Do,fromXYZ:Io,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}const rt=ku();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class Vu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yi===void 0&&(yi=ys("canvas")),yi.width=e.width,yi.height=e.height;const r=yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=kn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wu=0;class ho{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(zs(r[a].image)):s.push(zs(r[a]))}else s=zs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Xu=0;const Hs=new W;class Ht extends si{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=_n,r=_n,s=Rt,a=zn,l=Nt,u=tn,c=Ht.DEFAULT_ANISOTROPY,f=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Xi(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hs).x}get height(){return this.source.getSize(Hs).y}get depth(){return this.source.getSize(Hs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Wl;Ht.DEFAULT_ANISOTROPY=1;class bt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,c=u[0],f=u[4],m=u[8],d=u[1],_=u[5],S=u[9],y=u[2],x=u[6],p=u[10];if(Math.abs(f-d)<.01&&Math.abs(m-y)<.01&&Math.abs(S-x)<.01){if(Math.abs(f+d)<.1&&Math.abs(m+y)<.1&&Math.abs(S+x)<.1&&Math.abs(c+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,w=(_+1)/2,I=(p+1)/2,D=(f+d)/4,v=(m+y)/4,T=(S+x)/4;return C>w&&C>I?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=D/n,s=v/n):w>I?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=D/r,s=T/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=v/s,r=T/s),this.set(n,r,s,t),this}let M=Math.sqrt((x-S)*(x-S)+(m-y)*(m-y)+(d-f)*(d-f));return Math.abs(M)<.001&&(M=1),this.x=(x-S)/M,this.y=(m-y)/M,this.z=(d-f)/M,this.w=Math.acos((c+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Ht({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Yu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rc extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qu extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class pt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,l,u,c,f,m,d,_,S,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,c,f,m,d,_,S,y,x)}set(e,t,n,r,s,a,l,u,c,f,m,d,_,S,y,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=l,p[13]=u,p[2]=c,p[6]=f,p[10]=m,p[14]=d,p[3]=_,p[7]=S,p[11]=y,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(r),c=Math.sin(r),f=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const d=a*f,_=a*m,S=l*f,y=l*m;t[0]=u*f,t[4]=-u*m,t[8]=c,t[1]=_+S*c,t[5]=d-y*c,t[9]=-l*u,t[2]=y-d*c,t[6]=S+_*c,t[10]=a*u}else if(e.order==="YXZ"){const d=u*f,_=u*m,S=c*f,y=c*m;t[0]=d+y*l,t[4]=S*l-_,t[8]=a*c,t[1]=a*m,t[5]=a*f,t[9]=-l,t[2]=_*l-S,t[6]=y+d*l,t[10]=a*u}else if(e.order==="ZXY"){const d=u*f,_=u*m,S=c*f,y=c*m;t[0]=d-y*l,t[4]=-a*m,t[8]=S+_*l,t[1]=_+S*l,t[5]=a*f,t[9]=y-d*l,t[2]=-a*c,t[6]=l,t[10]=a*u}else if(e.order==="ZYX"){const d=a*f,_=a*m,S=l*f,y=l*m;t[0]=u*f,t[4]=S*c-_,t[8]=d*c+y,t[1]=u*m,t[5]=y*c+d,t[9]=_*c-S,t[2]=-c,t[6]=l*u,t[10]=a*u}else if(e.order==="YZX"){const d=a*u,_=a*c,S=l*u,y=l*c;t[0]=u*f,t[4]=y-d*m,t[8]=S*m+_,t[1]=m,t[5]=a*f,t[9]=-l*f,t[2]=-c*f,t[6]=_*m+S,t[10]=d-y*m}else if(e.order==="XZY"){const d=a*u,_=a*c,S=l*u,y=l*c;t[0]=u*f,t[4]=-m,t[8]=c*f,t[1]=d*m+y,t[5]=a*f,t[9]=_*m-S,t[2]=S*m-_,t[6]=l*f,t[10]=y*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zu,e,Ku)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Yn.crossVectors(n,jt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Yn.crossVectors(n,jt)),Yn.normalize(),Gr.crossVectors(jt,Yn),r[0]=Yn.x,r[4]=Gr.x,r[8]=jt.x,r[1]=Yn.y,r[5]=Gr.y,r[9]=jt.y,r[2]=Yn.z,r[6]=Gr.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],u=n[8],c=n[12],f=n[1],m=n[5],d=n[9],_=n[13],S=n[2],y=n[6],x=n[10],p=n[14],M=n[3],C=n[7],w=n[11],I=n[15],D=r[0],v=r[4],T=r[8],z=r[12],U=r[1],B=r[5],X=r[9],ne=r[13],F=r[2],Q=r[6],te=r[10],K=r[14],me=r[3],J=r[7],oe=r[11],he=r[15];return s[0]=a*D+l*U+u*F+c*me,s[4]=a*v+l*B+u*Q+c*J,s[8]=a*T+l*X+u*te+c*oe,s[12]=a*z+l*ne+u*K+c*he,s[1]=f*D+m*U+d*F+_*me,s[5]=f*v+m*B+d*Q+_*J,s[9]=f*T+m*X+d*te+_*oe,s[13]=f*z+m*ne+d*K+_*he,s[2]=S*D+y*U+x*F+p*me,s[6]=S*v+y*B+x*Q+p*J,s[10]=S*T+y*X+x*te+p*oe,s[14]=S*z+y*ne+x*K+p*he,s[3]=M*D+C*U+w*F+I*me,s[7]=M*v+C*B+w*Q+I*J,s[11]=M*T+C*X+w*te+I*oe,s[15]=M*z+C*ne+w*K+I*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],u=e[9],c=e[13],f=e[2],m=e[6],d=e[10],_=e[14],S=e[3],y=e[7],x=e[11],p=e[15],M=u*_-c*d,C=l*_-c*m,w=l*d-u*m,I=a*_-c*f,D=a*d-u*f,v=a*m-l*f;return t*(y*M-x*C+p*w)-n*(S*M-x*I+p*D)+r*(S*C-y*I+p*v)-s*(S*w-y*D+x*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10];return t*(a*f-l*c)-n*(s*f-l*u)+r*(s*c-a*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],c=e[7],f=e[8],m=e[9],d=e[10],_=e[11],S=e[12],y=e[13],x=e[14],p=e[15],M=t*l-n*a,C=t*u-r*a,w=t*c-s*a,I=n*u-r*l,D=n*c-s*l,v=r*c-s*u,T=f*y-m*S,z=f*x-d*S,U=f*p-_*S,B=m*x-d*y,X=m*p-_*y,ne=d*p-_*x,F=M*ne-C*X+w*B+I*U-D*z+v*T;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/F;return e[0]=(l*ne-u*X+c*B)*Q,e[1]=(r*X-n*ne-s*B)*Q,e[2]=(y*v-x*D+p*I)*Q,e[3]=(d*D-m*v-_*I)*Q,e[4]=(u*U-a*ne-c*z)*Q,e[5]=(t*ne-r*U+s*z)*Q,e[6]=(x*w-S*v-p*C)*Q,e[7]=(f*v-d*w+_*C)*Q,e[8]=(a*X-l*U+c*T)*Q,e[9]=(n*U-t*X-s*T)*Q,e[10]=(S*D-y*w+p*M)*Q,e[11]=(m*w-f*D-_*M)*Q,e[12]=(l*z-a*B-u*T)*Q,e[13]=(t*B-n*z+r*T)*Q,e[14]=(y*C-S*I-x*M)*Q,e[15]=(f*I-m*C+d*M)*Q,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,u=e.z,c=s*a,f=s*l;return this.set(c*a+n,c*l-r*u,c*u+r*l,0,c*l+r*u,f*l+n,f*u-r*a,0,c*u-r*l,f*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,l=t._z,u=t._w,c=s+s,f=a+a,m=l+l,d=s*c,_=s*f,S=s*m,y=a*f,x=a*m,p=l*m,M=u*c,C=u*f,w=u*m,I=n.x,D=n.y,v=n.z;return r[0]=(1-(y+p))*I,r[1]=(_+w)*I,r[2]=(S-C)*I,r[3]=0,r[4]=(_-w)*D,r[5]=(1-(d+p))*D,r[6]=(x+M)*D,r[7]=0,r[8]=(S+C)*v,r[9]=(x-M)*v,r[10]=(1-(d+y))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=bi.set(r[0],r[1],r[2]).length();const l=bi.set(r[4],r[5],r[6]).length(),u=bi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),cn.copy(this);const c=1/a,f=1/l,m=1/u;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=f,cn.elements[5]*=f,cn.elements[6]*=f,cn.elements[8]*=m,cn.elements[9]*=m,cn.elements[10]*=m,t.setFromRotationMatrix(cn),n.x=a,n.y=l,n.z=u,this}makePerspective(e,t,n,r,s,a,l=xn,u=!1){const c=this.elements,f=2*s/(t-e),m=2*s/(n-r),d=(t+e)/(t-e),_=(n+r)/(n-r);let S,y;if(u)S=s/(a-s),y=a*s/(a-s);else if(l===xn)S=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(l===xr)S=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=xn,u=!1){const c=this.elements,f=2/(t-e),m=2/(n-r),d=-(t+e)/(t-e),_=-(n+r)/(n-r);let S,y;if(u)S=1/(a-s),y=a/(a-s);else if(l===xn)S=-2/(a-s),y=-(a+s)/(a-s);else if(l===xr)S=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=S,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new W,cn=new pt,Zu=new W(0,0,0),Ku=new W(1,1,1),Yn=new W,Gr=new W,jt=new W,No=new pt,Uo=new Wn;class ii{constructor(e=0,t=0,n=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],u=r[1],c=r[5],f=r[9],m=r[2],d=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,_),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return No.makeRotationFromQuaternion(e),this.setFromRotationMatrix(No,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $u=0;const Fo=new W,Ti=new Wn,Pn=new pt,kr=new W,Qi=new W,Ju=new W,Qu=new Wn,Oo=new W(1,0,0),Bo=new W(0,1,0),zo=new W(0,0,1),Ho={type:"added"},ju={type:"removed"},Ai={type:"childadded",child:null},Gs={type:"childremoved",child:null};class Ft extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new W,t=new ii,n=new Wn,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new $e}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Oo,e)}rotateY(e){return this.rotateOnAxis(Bo,e)}rotateZ(e){return this.rotateOnAxis(zo,e)}translateOnAxis(e,t){return Fo.copy(e).applyQuaternion(this.quaternion),this.position.add(Fo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oo,e)}translateY(e){return this.translateOnAxis(Bo,e)}translateZ(e){return this.translateOnAxis(zo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Qi,kr,this.up):Pn.lookAt(kr,Qi,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ho),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ju),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ho),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let c=0,f=u.length;c<f;c++){const m=u[c];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,c=this.material.length;u<c;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(e.animations,u))}}if(t){const l=a(e.geometries),u=a(e.materials),c=a(e.textures),f=a(e.images),m=a(e.shapes),d=a(e.skeletons),_=a(e.animations),S=a(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=r,n;function a(l){const u=[];for(const c in l){const f=l[c];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.DEFAULT_UP=new W(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oi extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eh={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const l=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,n),p=this._getHandJoint(c,y);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const f=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=f.position.distanceTo(m.position),_=.02,S=.005;c.inputState.pinching&&d>_+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=_-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(eh)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Vs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=co(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vs(a,s,e+1/3),this.g=Vs(a,s,e),this.b=Vs(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=ac[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return rt.workingToColorSpace(zt.copy(this),e),Math.round(et(zt.r*255,0,255))*65536+Math.round(et(zt.g*255,0,255))*256+Math.round(et(zt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,s=zt.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let u,c;const f=(l+a)/2;if(l===a)u=0,c=0;else{const m=a-l;switch(c=f<=.5?m/(a+l):m/(2-a-l),a){case n:u=(r-s)/m+(r<s?6:0);break;case r:u=(s-n)/m+2;break;case s:u=(n-r)/m+4;break}u/=6}return e.h=u,e.s=c,e.l=f,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Jt){rt.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Vr);const n=dr(qn.h,Vr.h,t),r=dr(qn.s,Vr.s,t),s=dr(qn.l,Vr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new it;it.NAMES=ac;class fo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=n}clone(){return new fo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class th extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const un=new W,Ln=new W,Ws=new W,Dn=new W,wi=new W,Ri=new W,Go=new W,Xs=new W,Ys=new W,qs=new W,Zs=new bt,Ks=new bt,$s=new bt;class gn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){un.subVectors(r,t),Ln.subVectors(n,t),Ws.subVectors(e,t);const a=un.dot(un),l=un.dot(Ln),u=un.dot(Ws),c=Ln.dot(Ln),f=Ln.dot(Ws),m=a*c-l*l;if(m===0)return s.set(0,0,0),null;const d=1/m,_=(c*u-l*f)*d,S=(a*f-l*u)*d;return s.set(1-_-S,S,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,r,s,a,l,u){return this.getBarycoord(e,t,n,r,Dn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Dn.x),u.addScaledVector(a,Dn.y),u.addScaledVector(l,Dn.z),u)}static getInterpolatedAttribute(e,t,n,r,s,a){return Zs.setScalar(0),Ks.setScalar(0),$s.setScalar(0),Zs.fromBufferAttribute(e,t),Ks.fromBufferAttribute(e,n),$s.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zs,s.x),a.addScaledVector(Ks,s.y),a.addScaledVector($s,s.z),a}static isFrontFacing(e,t,n,r){return un.subVectors(n,t),Ln.subVectors(e,t),un.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),un.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,l;wi.subVectors(r,n),Ri.subVectors(s,n),Xs.subVectors(e,n);const u=wi.dot(Xs),c=Ri.dot(Xs);if(u<=0&&c<=0)return t.copy(n);Ys.subVectors(e,r);const f=wi.dot(Ys),m=Ri.dot(Ys);if(f>=0&&m<=f)return t.copy(r);const d=u*m-f*c;if(d<=0&&u>=0&&f<=0&&u-f>0)return a=u/(u-f),t.copy(n).addScaledVector(wi,a);qs.subVectors(e,s);const _=wi.dot(qs),S=Ri.dot(qs);if(S>=0&&_<=S)return t.copy(s);const y=_*c-u*S;if(y<=0&&c>=0&&S<=0)return l=c/(c-S),t.copy(n).addScaledVector(Ri,l);const x=f*S-_*m;if(x<=0&&m-f>=0&&_-S>=0)return Go.subVectors(s,r),l=(m-f)/(m-f+(_-S)),t.copy(r).addScaledVector(Go,l);const p=1/(x+y+d);return a=y*p,l=d*p,t.copy(n).addScaledVector(wi,a).addScaledVector(Ri,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),Xr.subVectors(this.max,ji),Ci.subVectors(e.a,ji),Pi.subVectors(e.b,ji),Li.subVectors(e.c,ji),Zn.subVectors(Pi,Ci),Kn.subVectors(Li,Pi),ui.subVectors(Ci,Li);let t=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-ui.y,ui.x,0];return!Js(t,Ci,Pi,Li,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,Ci,Pi,Li,Xr))?!1:(Yr.crossVectors(Zn,Kn),t=[Yr.x,Yr.y,Yr.z],Js(t,Ci,Pi,Li,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new W,new W,new W,new W,new W,new W,new W,new W],hn=new W,Wr=new vi,Ci=new W,Pi=new W,Li=new W,Zn=new W,Kn=new W,ui=new W,ji=new W,Xr=new W,Yr=new W,hi=new W;function Js(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){hi.fromArray(i,s);const l=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),u=e.dot(hi),c=t.dot(hi),f=n.dot(hi);if(Math.max(-Math.max(u,c,f),Math.min(u,c,f))>l)return!1}return!0}const Bn=nh();function nh(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let u=0;u<256;++u){const c=u-127;c<-27?(n[u]=0,n[u|256]=32768,r[u]=24,r[u|256]=24):c<-14?(n[u]=1024>>-c-14,n[u|256]=1024>>-c-14|32768,r[u]=-c-1,r[u|256]=-c-1):c<=15?(n[u]=c+15<<10,n[u|256]=c+15<<10|32768,r[u]=13,r[u|256]=13):c<128?(n[u]=31744,n[u|256]=64512,r[u]=24,r[u|256]=24):(n[u]=31744,n[u|256]=64512,r[u]=13,r[u|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let u=1;u<1024;++u){let c=u<<13,f=0;for(;(c&8388608)===0;)c<<=1,f-=8388608;c&=-8388609,f+=947912704,s[u]=c|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)a[u]=u<<23;a[31]=1199570944,a[32]=2147483648;for(let u=33;u<63;++u)a[u]=2147483648+(u-32<<23);a[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(l[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:l}}function ih(i){Math.abs(i)>65504&&Ye("DataUtils.toHalfFloat(): Value out of range."),i=et(i,-65504,65504),Bn.floatView[0]=i;const e=Bn.uint32View[0],t=e>>23&511;return Bn.baseTable[t]+((e&8388607)>>Bn.shiftTable[t])}function rh(i){const e=i>>10;return Bn.uint32View[0]=Bn.mantissaTable[Bn.offsetTable[e]+(i&1023)]+Bn.exponentTable[e],Bn.floatView[0]}class we{static toHalfFloat(e){return ih(e)}static fromHalfFloat(e){return rh(e)}}const At=new W,qr=new Ze;let sh=0;class Vn extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=Qt,this.version=0,this._normalizationScale=e!==void 0?uo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):ic(e,this.array)}}class oc extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lc extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ah=new vi,er=new W,Qs=new W;class yr{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ah.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);const t=er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(Qs)),this.expandByPoint(er.copy(e.center).sub(Qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let oh=0;const sn=new pt,js=new Ft,Di=new W,en=new vi,tr=new vi,It=new W;class Rn extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?lc:oc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return js.lookAt(e),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];tr.setFromBufferAttribute(l),this.morphTargetsRelative?(It.addVectors(en.min,tr.min),en.expandByPoint(It),It.addVectors(en.max,tr.max),en.expandByPoint(It)):(en.expandByPoint(tr.min),en.expandByPoint(tr.max))}en.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],u=this.morphTargetsRelative;for(let c=0,f=l.count;c<f;c++)It.fromBufferAttribute(l,c),u&&(Di.fromBufferAttribute(e,c),It.add(Di)),r=Math.max(r,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const l=[],u=[],c=new Uint8Array(n.count);for(let z=0;z<n.count;z++)l[z]=new W,u[z]=new W;const f=new W,m=new W,d=new W,_=new Ze,S=new Ze,y=new Ze,x=new W,p=new W;function M(z,U,B){c[z]=c[U]=c[B]=1,f.fromBufferAttribute(n,z),m.fromBufferAttribute(n,U),d.fromBufferAttribute(n,B),_.fromBufferAttribute(s,z),S.fromBufferAttribute(s,U),y.fromBufferAttribute(s,B),m.sub(f),d.sub(f),S.sub(_),y.sub(_);const X=1/(S.x*y.y-y.x*S.y);isFinite(X)&&(x.copy(m).multiplyScalar(y.y).addScaledVector(d,-S.y).multiplyScalar(X),p.copy(d).multiplyScalar(S.x).addScaledVector(m,-y.x).multiplyScalar(X),l[z].add(x),l[U].add(x),l[B].add(x),u[z].add(p),u[U].add(p),u[B].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,U=C.length;z<U;++z){const B=C[z],X=B.start,ne=B.count;for(let F=X,Q=X+ne;F<Q;F+=3)M(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const w=new W,I=new W,D=new W,v=new W;function T(z){D.fromBufferAttribute(r,z),v.copy(D);const U=l[z];w.copy(U),w.sub(D.multiplyScalar(D.dot(U))).normalize(),I.crossVectors(v,U);const X=I.dot(u[z])<0?-1:1;a.setXYZW(z,w.x,w.y,w.z,X)}for(let z=0,U=n.count;z<U;++z)c[z]&&T(z);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new W,s=new W,a=new W,l=new W,u=new W,c=new W,f=new W,m=new W;if(e)for(let d=0,_=e.count;d<_;d+=3){const S=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),c.fromBufferAttribute(n,x),l.add(f),u.add(f),c.add(f),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(y,u.x,u.y,u.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,_=t.count;d<_;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(l,u){const c=l.array,f=l.itemSize,m=l.normalized,d=new c.constructor(u.length*f);let _=0,S=0;for(let y=0,x=u.length;y<x;y++){l.isInterleavedBufferAttribute?_=u[y]*l.data.stride+l.offset:_=u[y]*f;for(let p=0;p<f;p++)d[S++]=c[_++]}return new Vn(d,f,m)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],c=e(u,n);t.setAttribute(l,c)}const s=this.morphAttributes;for(const l in s){const u=[],c=s[l];for(let f=0,m=c.length;f<m;f++){const d=c[f],_=e(d,n);u.push(_)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],f=[];for(let m=0,d=c.length;m<d;m++){const _=c[m];f.push(_.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],m=s[c];for(let d=0,_=m.length;d<_;d++)f.push(m[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ea=new W,lh=new W,ch=new $e;class Fn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ea.subVectors(n,t).cross(lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ea),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ch.getNormalMatrix(e),r=this.coplanarPoint(ea).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let uh=0;class br extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=hr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Fl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const u=s[l];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Fn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Nn=new W,ta=new W,Zr=new W,Kr=new W;class cc{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ta.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(ta);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),l=Kr.dot(this.direction),u=-Kr.dot(Zr),c=Kr.lengthSq(),f=Math.abs(1-a*a);let m,d,_,S;if(f>0)if(m=a*u-l,d=a*l-u,S=s*f,m>=0)if(d>=-S)if(d<=S){const y=1/f;m*=y,d*=y,_=m*(m+a*d+2*l)+d*(a*m+d+2*u)+c}else d=s,m=Math.max(0,-(a*d+l)),_=-m*m+d*(d+2*u)+c;else d=-s,m=Math.max(0,-(a*d+l)),_=-m*m+d*(d+2*u)+c;else d<=-S?(m=Math.max(0,-(-a*s+l)),d=m>0?-s:Math.min(Math.max(-s,-u),s),_=-m*m+d*(d+2*u)+c):d<=S?(m=0,d=Math.min(Math.max(-s,-u),s),_=d*(d+2*u)+c):(m=Math.max(0,-(a*s+l)),d=m>0?s:Math.min(Math.max(-s,-u),s),_=-m*m+d*(d+2*u)+c);else d=a>0?-s:s,m=Math.max(0,-(a*d+l)),_=-m*m+d*(d+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ta).addScaledVector(Zr,d),_}intersectSphere(e,t){if(e.radius<0)return null;Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,u;const c=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(l=(e.min.z-d.z)*m,u=(e.max.z-d.z)*m):(l=(e.max.z-d.z)*m,u=(e.min.z-d.z)*m),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,l=this.direction,u=l.x,c=l.y,f=l.z,m=e.x-a.x,d=e.y-a.y,_=e.z-a.z,S=t.x-a.x,y=t.y-a.y,x=t.z-a.z,p=n.x-a.x,M=n.y-a.y,C=n.z-a.z,w=Math.abs(u),I=Math.abs(c),D=Math.abs(f);let v,T,z,U,B,X,ne,F,Q,te,K,me;if(w>=I&&w>=D?(z=u,X=m,Q=S,me=p,u>=0?(v=c,T=f,U=d,B=_,ne=y,F=x,te=M,K=C):(v=f,T=c,U=_,B=d,ne=x,F=y,te=C,K=M)):I>=D?(z=c,X=d,Q=y,me=M,c>=0?(v=f,T=u,U=_,B=m,ne=x,F=S,te=C,K=p):(v=u,T=f,U=m,B=_,ne=S,F=x,te=p,K=C)):(z=f,X=_,Q=x,me=C,f>=0?(v=u,T=c,U=m,B=d,ne=S,F=y,te=p,K=M):(v=c,T=u,U=d,B=m,ne=y,F=S,te=M,K=p)),z===0)return null;const J=v/z,oe=T/z,he=1/z,De=U-J*X,Be=B-oe*X,se=ne-J*Q,be=F-oe*Q,Ie=te-J*me,Fe=K-oe*me,de=Ie*be-Fe*se,ke=De*Fe-Be*Ie,ht=se*Be-be*De;if(r){if(de<0||ke<0||ht<0)return null}else if((de<0||ke<0||ht<0)&&(de>0||ke>0||ht>0))return null;const He=de+ke+ht;if(He===0)return null;const st=he*(de*X+ke*Q+ht*me);return(He>0?st<0:st>0)?null:this.at(st/He,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hh extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ko=new pt,fi=new cc,$r=new yr,Vo=new W,Jr=new W,Qr=new W,jr=new W,na=new W,es=new W,Wo=new W,ts=new W;class nn extends Ft{constructor(e=new Rn,t=new hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){es.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const f=l[u],m=s[u];f!==0&&(na.fromBufferAttribute(m,e),a?es.addScaledVector(na,f):es.addScaledVector(na.sub(t),f))}t.add(es)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!($r.containsPoint(fi.origin)===!1&&(fi.intersectSphere($r,Vo)===null||fi.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(ko.copy(s).invert(),fi.copy(e.ray).applyMatrix4(ko),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,l=s.index,u=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,m=s.attributes.normal,d=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(a))for(let S=0,y=d.length;S<y;S++){const x=d[S],p=a[x.materialIndex],M=Math.max(x.start,_.start),C=Math.min(l.count,Math.min(x.start+x.count,_.start+_.count));for(let w=M,I=C;w<I;w+=3){const D=l.getX(w),v=l.getX(w+1),T=l.getX(w+2);r=ns(this,p,e,n,c,f,m,D,v,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,_.start),y=Math.min(l.count,_.start+_.count);for(let x=S,p=y;x<p;x+=3){const M=l.getX(x),C=l.getX(x+1),w=l.getX(x+2);r=ns(this,a,e,n,c,f,m,M,C,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let S=0,y=d.length;S<y;S++){const x=d[S],p=a[x.materialIndex],M=Math.max(x.start,_.start),C=Math.min(u.count,Math.min(x.start+x.count,_.start+_.count));for(let w=M,I=C;w<I;w+=3){const D=w,v=w+1,T=w+2;r=ns(this,p,e,n,c,f,m,D,v,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,_.start),y=Math.min(u.count,_.start+_.count);for(let x=S,p=y;x<p;x+=3){const M=x,C=x+1,w=x+2;r=ns(this,a,e,n,c,f,m,M,C,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function fh(i,e,t,n,r,s,a,l){let u;if(e.side===Yt?u=n.intersectTriangle(a,s,r,!0,l):u=n.intersectTriangle(r,s,a,e.side===xi,l),u===null)return null;ts.copy(l),ts.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:i}}function ns(i,e,t,n,r,s,a,l,u,c){i.getVertexPosition(l,Jr),i.getVertexPosition(u,Qr),i.getVertexPosition(c,jr);const f=fh(i,e,t,n,Jr,Qr,jr,Wo);if(f){const m=new W;gn.getBarycoord(Wo,Jr,Qr,jr,m),r&&(f.uv=gn.getInterpolatedAttribute(r,l,u,c,m,new Ze)),s&&(f.uv1=gn.getInterpolatedAttribute(s,l,u,c,m,new Ze)),a&&(f.normal=gn.getInterpolatedAttribute(a,l,u,c,m,new W),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:l,b:u,c,normal:new W,materialIndex:0};gn.getNormal(Jr,Qr,jr,d.normal),f.face=d,f.barycoord=m}return f}class bs extends Ht{constructor(e=null,t=1,n=1,r,s,a,l,u,c=Ut,f=Ut,m,d){super(null,a,l,u,c,f,r,s,m,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo extends Vn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ii=new pt,Yo=new pt,is=[],qo=new vi,dh=new pt,nr=new nn,ir=new yr;class $a extends nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,dh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),qo.copy(e.boundingBox).applyMatrix4(Ii),this.boundingBox.union(qo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),ir.copy(e.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let l=0;l<n.length;l++)n[l]=r[a+l]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ii),Yo.multiplyMatrices(n,Ii),nr.matrixWorld=Yo,nr.raycast(e,is);for(let a=0,l=is.length;a<l;a++){const u=is[a];u.instanceId=s,u.object=this,t.push(u)}is.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new bs(new Float32Array(r*this.count),r,this.count,mi,Qt));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const l=this.geometry.morphTargetsRelative?1:1-a,u=r*e;return s[u]=l,s.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const di=new yr,ph=new Ze(.5,.5),rs=new W;class Mr{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],u=s[2],c=s[3],f=s[4],m=s[5],d=s[6],_=s[7],S=s[8],y=s[9],x=s[10],p=s[11],M=s[12],C=s[13],w=s[14],I=s[15];if(r[0].setComponents(c-a,_-f,p-S,I-M).normalize(),r[1].setComponents(c+a,_+f,p+S,I+M).normalize(),r[2].setComponents(c+l,_+m,p+y,I+C).normalize(),r[3].setComponents(c-l,_-m,p-y,I-C).normalize(),n)r[4].setComponents(u,d,x,w).normalize(),r[5].setComponents(c-u,_-d,p-x,I-w).normalize();else if(r[4].setComponents(c-u,_-d,p-x,I-w).normalize(),t===xn)r[5].setComponents(c+u,_+d,p+x,I+w).normalize();else if(t===xr)r[5].setComponents(u,d,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=ph.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(rs.x=r.normal.x>0?e.max.x:e.min.x,rs.y=r.normal.y>0?e.max.y:e.min.y,rs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zo=new pt;class po{constructor(){this.coordinateSystem=xn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Zo.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Mr),n[r].setFromProjectionMatrix(Zo,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Mr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new po().copy(this)}}class uc extends Ht{constructor(e=[],t=Gi,n,r,s,a,l,u,c,f){super(e,t,n,r,s,a,l,u,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mh extends Ht{constructor(e,t,n,r,s,a,l,u,c){super(e,t,n,r,s,a,l,u,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vi extends Ht{constructor(e,t,n=wn,r,s,a,l=Ut,u=Ut,c,f=ni,m=1){if(f!==ni&&f!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:m};super(d,r,s,a,l,u,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class hc extends Vi{constructor(e,t=wn,n=Gi,r,s,a=Ut,l=Ut,u,c=ni){const f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,l,u,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fc extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ai extends Rn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],c=[],f=[],m=[];let d=0,_=0;S("z","y","x",-1,-1,n,t,e,a,s,0),S("z","y","x",1,-1,n,t,-e,a,s,1),S("x","z","y",1,1,e,n,t,r,a,2),S("x","z","y",1,-1,e,n,-t,r,a,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(m,2));function S(y,x,p,M,C,w,I,D,v,T,z){const U=w/v,B=I/T,X=w/2,ne=I/2,F=D/2,Q=v+1,te=T+1;let K=0,me=0;const J=new W;for(let oe=0;oe<te;oe++){const he=oe*B-ne;for(let De=0;De<Q;De++){const Be=De*U-X;J[y]=Be*M,J[x]=he*C,J[p]=F,c.push(J.x,J.y,J.z),J[y]=0,J[x]=0,J[p]=D>0?1:-1,f.push(J.x,J.y,J.z),m.push(De/v),m.push(1-oe/T),K+=1}}for(let oe=0;oe<T;oe++)for(let he=0;he<v;he++){const De=d+he+Q*oe,Be=d+he+Q*(oe+1),se=d+(he+1)+Q*(oe+1),be=d+(he+1)+Q*oe;u.push(De,Be,be),u.push(Be,se,be),me+=6}l.addGroup(_,me,z),_+=me,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ws extends Rn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:u};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],m=[],d=[],_=[];let S=0;const y=[],x=n/2;let p=0;M(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(_,2));function M(){const w=new W,I=new W;let D=0;const v=(t-e)/n;for(let T=0;T<=s;T++){const z=[],U=T/s,B=U*(t-e)+e;for(let X=0;X<=r;X++){const ne=X/r,F=ne*u+l,Q=Math.sin(F),te=Math.cos(F);I.x=B*Q,I.y=-U*n+x,I.z=B*te,m.push(I.x,I.y,I.z),w.set(Q,v,te).normalize(),d.push(w.x,w.y,w.z),_.push(ne,1-U),z.push(S++)}y.push(z)}for(let T=0;T<r;T++)for(let z=0;z<s;z++){const U=y[z][T],B=y[z+1][T],X=y[z+1][T+1],ne=y[z][T+1];(e>0||z!==0)&&(f.push(U,B,ne),D+=3),(t>0||z!==s-1)&&(f.push(B,X,ne),D+=3)}c.addGroup(p,D,0),p+=D}function C(w){const I=S,D=new Ze,v=new W;let T=0;const z=w===!0?e:t,U=w===!0?1:-1;for(let X=1;X<=r;X++)m.push(0,x*U,0),d.push(0,U,0),_.push(.5,.5),S++;const B=S;for(let X=0;X<=r;X++){const F=X/r*u+l,Q=Math.cos(F),te=Math.sin(F);v.x=z*te,v.y=x*U,v.z=z*Q,m.push(v.x,v.y,v.z),d.push(0,U,0),D.x=Q*.5+.5,D.y=te*.5*U+.5,_.push(D.x,D.y),S++}for(let X=0;X<r;X++){const ne=I+X,F=B+X;w===!0?f.push(F,F+1,ne):f.push(F+1,F,ne),T+=3}c.addGroup(p,T,w===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mo extends Rn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];l(r),c(n),f(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(M){const C=new W,w=new W,I=new W;for(let D=0;D<t.length;D+=3)_(t[D+0],C),_(t[D+1],w),_(t[D+2],I),u(C,w,I,M)}function u(M,C,w,I){const D=I+1,v=[];for(let T=0;T<=D;T++){v[T]=[];const z=M.clone().lerp(w,T/D),U=C.clone().lerp(w,T/D),B=D-T;for(let X=0;X<=B;X++)X===0&&T===D?v[T][X]=z:v[T][X]=z.clone().lerp(U,X/B)}for(let T=0;T<D;T++)for(let z=0;z<2*(D-T)-1;z++){const U=Math.floor(z/2);z%2===0?(d(v[T][U+1]),d(v[T+1][U]),d(v[T][U])):(d(v[T][U+1]),d(v[T+1][U+1]),d(v[T+1][U]))}}function c(M){const C=new W;for(let w=0;w<s.length;w+=3)C.x=s[w+0],C.y=s[w+1],C.z=s[w+2],C.normalize().multiplyScalar(M),s[w+0]=C.x,s[w+1]=C.y,s[w+2]=C.z}function f(){const M=new W;for(let C=0;C<s.length;C+=3){M.x=s[C+0],M.y=s[C+1],M.z=s[C+2];const w=x(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;a.push(w,1-I)}S(),m()}function m(){for(let M=0;M<a.length;M+=6){const C=a[M+0],w=a[M+2],I=a[M+4],D=Math.max(C,w,I),v=Math.min(C,w,I);D>.9&&v<.1&&(C<.2&&(a[M+0]+=1),w<.2&&(a[M+2]+=1),I<.2&&(a[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function _(M,C){const w=M*3;C.x=e[w+0],C.y=e[w+1],C.z=e[w+2]}function S(){const M=new W,C=new W,w=new W,I=new W,D=new Ze,v=new Ze,T=new Ze;for(let z=0,U=0;z<s.length;z+=9,U+=6){M.set(s[z+0],s[z+1],s[z+2]),C.set(s[z+3],s[z+4],s[z+5]),w.set(s[z+6],s[z+7],s[z+8]),D.set(a[U+0],a[U+1]),v.set(a[U+2],a[U+3]),T.set(a[U+4],a[U+5]),I.copy(M).add(C).add(w).divideScalar(3);const B=x(I);y(D,U+0,M,B),y(v,U+2,C,B),y(T,U+4,w,B)}}function y(M,C,w,I){I<0&&M.x===1&&(a[C]=M.x-1),w.x===0&&w.z===0&&(a[C]=I/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.vertices,e.indices,e.radius,e.detail)}}class go extends mo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new go(e.radius,e.detail)}}class _i extends Rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(n),u=Math.floor(r),c=l+1,f=u+1,m=e/l,d=t/u,_=[],S=[],y=[],x=[];for(let p=0;p<f;p++){const M=p*d-a;for(let C=0;C<c;C++){const w=C*m-s;S.push(w,-M,0),y.push(0,0,1),x.push(C/l),x.push(1-p/u)}}for(let p=0;p<u;p++)for(let M=0;M<l;M++){const C=M+c*p,w=M+c*(p+1),I=M+1+c*(p+1),D=M+1+c*p;_.push(C,w,D),_.push(w,I,D)}this.setIndex(_),this.setAttribute("position",new qt(S,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Ko(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ko(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ko(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const pc={clone:Wi,merge:Wt};var _h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_h,this.fragmentShader=xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=gh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vh extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bn extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sh extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mh extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $o={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Jo(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Jo(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Jo(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Eh{constructor(e,t,n){const r=this;let s=!1,a=0,l=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){l++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,l),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,m){return c.push(f,m),this},this.removeHandler=function(f){const m=c.indexOf(f);return m!==-1&&c.splice(m,2),this},this.getHandler=function(f){for(let m=0,d=c.length;m<d;m+=2){const _=c[m],S=c[m+1];if(_.global&&(_.lastIndex=0),_.test(f))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yh=new Eh;class _o{constructor(e){this.manager=e!==void 0?e:yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}_o.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class bh extends Error{constructor(e,t){super(e),this.response=t}}class Th extends _o{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=$o.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:r});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,u=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=Un[e],m=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),_=d?parseInt(d):0,S=_!==0;let y=0;const x=new ReadableStream({start(p){M();function M(){m.read().then(({done:C,value:w})=>{if(C)p.close();else{y+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:S,loaded:y,total:_});for(let D=0,v=f.length;D<v;D++){const T=f[D];T.onProgress&&T.onProgress(I)}p.enqueue(w),M()}},C=>{p.error(C)})}}});return new Response(x)}else throw new bh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(u){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,l));case"json":return c.json();default:if(l==="")return c.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),d=m&&m[1]?m[1].toLowerCase():void 0,_=new TextDecoder(d);return c.arrayBuffer().then(S=>_.decode(S))}}}).then(c=>{$o.add(`file:${e}`,c);const f=Un[e];delete Un[e];for(let m=0,d=f.length;m<d;m++){const _=f[m];_.onLoad&&_.onLoad(c)}}).catch(c=>{const f=Un[e];if(f===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let m=0,d=f.length;m<d;m++){const _=f[m];_.onError&&_.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ah extends _o{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new bs,l=new Th(this.manager);return l.setPriority(this.priority),l.setCache(this.cache),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(s.withCredentials),l.load(e,function(u){let c;try{c=s.parse(u)}catch(f){r!==void 0?r(f):lt(f);return}s._applyTexData(a,c),t&&t(a,c)},n,r),a}createDataTexture(e){const t=new bs;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:_n,e.wrapT=t.wrapT!==void 0?t.wrapT:_n,e.magFilter=t.magFilter!==void 0?t.magFilter:Rt,e.minFilter=t.minFilter!==void 0?t.minFilter:Rt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=zn),t.mipmapCount===1&&(e.minFilter=Rt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class mc extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class wh extends mc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ia=new pt,Qo=new W,jo=new W;class Rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qo),jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ia,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,l=r?r.w/s.y:1,u=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*a,0,0,.5*a+u,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+u,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ss=new W,as=new Wn,En=new W;class gc extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ss,as,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,as,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ss,as,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,as,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new W,el=new Ze,tl=new Ze;class mn extends gc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,el,tl),t.subVectors(tl,el)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/c,r*=a.width/u,n*=a.height/c}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class _c extends gc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,l-=f*this.view.offsetY,u=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ch extends Rh{constructor(){super(new _c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ph extends mc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Ch}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ni=-90,Ui=1;class Ja extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Ni,Ui,e,t);r.layers=this.layers,this.add(r);const s=new mn(Ni,Ui,e,t);s.layers=this.layers,this.add(s);const a=new mn(Ni,Ui,e,t);a.layers=this.layers,this.add(a);const l=new mn(Ni,Ui,e,t);l.layers=this.layers,this.add(l);const u=new mn(Ni,Ui,e,t);u.layers=this.layers,this.add(u);const c=new mn(Ni,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,u]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,u,c,f]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,d,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Lh extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class nl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Dh extends si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function il(i,e,t,n){const r=Ih(n);switch(t){case Kl:return i*e;case mi:return i*e/r.components*r.byteLength;case ao:return i*e/r.components*r.byteLength;case on:return i*e*2/r.components*r.byteLength;case oo:return i*e*2/r.components*r.byteLength;case $l:return i*e*3/r.components*r.byteLength;case Nt:return i*e*4/r.components*r.byteLength;case lo:return i*e*4/r.components*r.byteLength;case fs:case ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:case Ea:return Math.max(i,16)*Math.max(e,8)/4;case va:case Ma:return Math.max(i,8)*Math.max(e,8)/2;case ya:case ba:case Aa:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Ss:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ya:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ms:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ih(i){switch(i){case tn:case Xl:return{byteLength:1,components:1};case _r:case Yl:case Xt:return{byteLength:2,components:1};case ro:case so:return{byteLength:2,components:4};case wn:case io:case Qt:return{byteLength:4,components:1};case ql:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);function xc(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Nh(i){const e=new WeakMap;function t(l,u){const c=l.array,f=l.usage,m=c.byteLength,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,c,f),l.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,u,c){const f=u.array,m=u.updateRanges;if(i.bindBuffer(c,l),m.length===0)i.bufferSubData(c,0,f);else{m.sort((_,S)=>_.start-S.start);let d=0;for(let _=1;_<m.length;_++){const S=m[d],y=m[_];y.start<=S.start+S.count+1?S.count=Math.max(S.count,y.start+y.count-S.start):(++d,m[d]=y)}m.length=d+1;for(let _=0,S=m.length;_<S;_++){const y=m[_];i.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(i.deleteBuffer(u.buffer),e.delete(l))}function a(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,u));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,u),c.version=l.version}}return{get:r,remove:s,update:a}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
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
#endif`,Oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
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
#endif`,kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh=`#ifdef USE_BATCHING
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
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zh=`#ifdef USE_IRIDESCENCE
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
#endif`,Kh=`#ifdef USE_BUMPMAP
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
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sf=`#define PI 3.141592653589793
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
} // validated`,af=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,If=`uniform sampler2D dfgLUT;
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
}`,Nf=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kf=`#if defined( USE_MORPHCOLORS )
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
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rd=`#ifdef USE_NORMALMAP
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
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sd=`float getShadowMask() {
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
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,Td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`uniform float backgroundBlurriness;
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`#include <common>
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
}`,kd=`#if DEPTH_PACKING == 3200
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
}`,Vd=`#define DISTANCE
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
}`,Wd=`#define DISTANCE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,$d=`uniform vec3 diffuse;
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define LAMBERT
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
}`,jd=`#define MATCAP
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
}`,ep=`#define MATCAP
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
}`,tp=`#define NORMAL
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
}`,np=`#define NORMAL
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
}`,ip=`#define PHONG
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
}`,rp=`#define PHONG
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
}`,sp=`#define STANDARD
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
}`,ap=`#define STANDARD
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
}`,op=`#define TOON
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
}`,lp=`#define TOON
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
}`,cp=`uniform float size;
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
}`,up=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,fp=`uniform vec3 color;
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
}`,dp=`uniform float rotation;
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
}`,pp=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Uh,alphahash_pars_fragment:Fh,alphamap_fragment:Oh,alphamap_pars_fragment:Bh,alphatest_fragment:zh,alphatest_pars_fragment:Hh,aomap_fragment:Gh,aomap_pars_fragment:kh,batching_pars_vertex:Vh,batching_vertex:Wh,begin_vertex:Xh,beginnormal_vertex:Yh,bsdfs:qh,iridescence_fragment:Zh,bumpmap_pars_fragment:Kh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:jh,color_fragment:ef,color_pars_fragment:tf,color_pars_vertex:nf,color_vertex:rf,common:sf,defaultnormal_vertex:af,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:uf,colorspace_fragment:hf,colorspace_pars_fragment:ff,envmap_fragment:df,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:wf,envmap_vertex:_f,fog_vertex:xf,fog_pars_vertex:vf,fog_fragment:Sf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Ef,lightmap_pars_fragment:yf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Tf,lights_pars_begin:Af,lights_toon_fragment:Rf,lights_toon_pars_fragment:Cf,lights_phong_fragment:Pf,lights_phong_pars_fragment:Lf,lights_physical_fragment:Df,lights_physical_pars_fragment:If,lights_fragment_begin:Nf,lights_fragment_maps:Uf,lights_fragment_end:Ff,lightprobes_pars_fragment:Of,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Gf,map_fragment:kf,map_pars_fragment:Vf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:qf,morphinstance_vertex:Zf,morphcolor_vertex:Kf,morphnormal_vertex:$f,morphtarget_pars_vertex:Jf,morphtarget_vertex:Qf,normal_fragment_begin:jf,normal_fragment_maps:ed,normal_pars_fragment:td,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:rd,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:ad,clearcoat_pars_fragment:od,iridescence_pars_fragment:ld,opaque_fragment:cd,packing:ud,premultiplied_alpha_fragment:hd,project_vertex:fd,dithering_fragment:dd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:xd,shadowmap_vertex:vd,shadowmask_pars_fragment:Sd,skinbase_vertex:Md,skinning_pars_vertex:Ed,skinning_vertex:yd,skinnormal_vertex:bd,specularmap_fragment:Td,specularmap_pars_fragment:Ad,tonemapping_fragment:wd,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Dd,uv_vertex:Id,worldpos_vertex:Nd,background_vert:Ud,background_frag:Fd,backgroundCube_vert:Od,backgroundCube_frag:Bd,cube_vert:zd,cube_frag:Hd,depth_vert:Gd,depth_frag:kd,distance_vert:Vd,distance_frag:Wd,equirect_vert:Xd,equirect_frag:Yd,linedashed_vert:qd,linedashed_frag:Zd,meshbasic_vert:Kd,meshbasic_frag:$d,meshlambert_vert:Jd,meshlambert_frag:Qd,meshmatcap_vert:jd,meshmatcap_frag:ep,meshnormal_vert:tp,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:rp,meshphysical_vert:sp,meshphysical_frag:ap,meshtoon_vert:op,meshtoon_frag:lp,points_vert:cp,points_frag:up,shadow_vert:hp,shadow_frag:fp,sprite_vert:dp,sprite_frag:pp},Le={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Tn={basic:{uniforms:Wt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Wt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Wt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Wt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Wt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new it(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Wt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Wt([Le.points,Le.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Wt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Wt([Le.common,Le.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Wt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Wt([Le.sprite,Le.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Wt([Le.common,Le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Wt([Le.lights,Le.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Tn.physical={uniforms:Wt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const os={r:0,b:0,g:0},mp=new pt,vc=new $e;vc.set(-1,0,0,0,1,0,0,0,1);function gp(i,e,t,n,r,s){const a=new it(0);let l=r===!0?0:1,u,c,f=null,m=0,d=null;function _(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){const w=M.backgroundBlurriness>0;C=e.get(C,w)}return C}function S(M){let C=!1;const w=_(M);w===null?x(a,l):w&&w.isColor&&(x(w,1),C=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,C){const w=_(C);w&&w.isCubeTexture?(c===void 0&&(c=new nn(new ai(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Wi(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,D,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mp.makeRotationFromEuler(C.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vc),c.material.toneMapped=rt.getTransfer(w.colorSpace)!==dt,(f!==w||m!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,m=w.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new nn(new _i(2,2),new ri({name:"BackgroundMaterial",uniforms:Wi(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.toneMapped=rt.getTransfer(w.colorSpace)!==dt,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||m!==w.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=w,m=w.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function x(M,C){M.getRGB(os,dc(i)),t.buffers.color.setClear(os.r,os.g,os.b,C,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),l=C,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,x(a,l)},render:S,addToRenderList:y,dispose:p}}function _p(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function l(B,X,ne,F,Q){let te=!1;const K=m(B,F,ne,X);s!==K&&(s=K,c(s.object)),te=_(B,F,ne,Q),te&&S(B,F,ne,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,w(B,X,ne,F),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function u(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function f(B){return i.deleteVertexArray(B)}function m(B,X,ne,F){const Q=F.wireframe===!0;let te=n[X.id];te===void 0&&(te={},n[X.id]=te);const K=B.isInstancedMesh===!0?B.id:0;let me=te[K];me===void 0&&(me={},te[K]=me);let J=me[ne.id];J===void 0&&(J={},me[ne.id]=J);let oe=J[Q];return oe===void 0&&(oe=d(u()),J[Q]=oe),oe}function d(B){const X=[],ne=[],F=[];for(let Q=0;Q<t;Q++)X[Q]=0,ne[Q]=0,F[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ne,attributeDivisors:F,object:B,attributes:{},index:null}}function _(B,X,ne,F){const Q=s.attributes,te=X.attributes;let K=0;const me=ne.getAttributes();for(const J in me)if(me[J].location>=0){const he=Q[J];let De=te[J];if(De===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(De=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(De=B.instanceColor)),he===void 0||he.attribute!==De||De&&he.data!==De.data)return!0;K++}return s.attributesNum!==K||s.index!==F}function S(B,X,ne,F){const Q={},te=X.attributes;let K=0;const me=ne.getAttributes();for(const J in me)if(me[J].location>=0){let he=te[J];he===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(he=B.instanceColor));const De={};De.attribute=he,he&&he.data&&(De.data=he.data),Q[J]=De,K++}s.attributes=Q,s.attributesNum=K,s.index=F}function y(){const B=s.newAttributes;for(let X=0,ne=B.length;X<ne;X++)B[X]=0}function x(B){p(B,0)}function p(B,X){const ne=s.newAttributes,F=s.enabledAttributes,Q=s.attributeDivisors;ne[B]=1,F[B]===0&&(i.enableVertexAttribArray(B),F[B]=1),Q[B]!==X&&(i.vertexAttribDivisor(B,X),Q[B]=X)}function M(){const B=s.newAttributes,X=s.enabledAttributes;for(let ne=0,F=X.length;ne<F;ne++)X[ne]!==B[ne]&&(i.disableVertexAttribArray(ne),X[ne]=0)}function C(B,X,ne,F,Q,te,K){K===!0?i.vertexAttribIPointer(B,X,ne,Q,te):i.vertexAttribPointer(B,X,ne,F,Q,te)}function w(B,X,ne,F){y();const Q=F.attributes,te=ne.getAttributes(),K=X.defaultAttributeValues;for(const me in te){const J=te[me];if(J.location>=0){let oe=Q[me];if(oe===void 0&&(me==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),me==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),oe!==void 0){const he=oe.normalized,De=oe.itemSize,Be=e.get(oe);if(Be===void 0)continue;const se=Be.buffer,be=Be.type,Ie=Be.bytesPerElement,Fe=be===i.INT||be===i.UNSIGNED_INT||oe.gpuType===io;if(oe.isInterleavedBufferAttribute){const de=oe.data,ke=de.isInterleavedBuffer===!0?de.stride:de.itemSize,ht=oe.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let He=0;He<J.locationSize;He++)p(J.location+He,de.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let He=0;He<J.locationSize;He++)x(J.location+He);i.bindBuffer(i.ARRAY_BUFFER,se);for(let He=0;He<J.locationSize;He++)C(J.location+He,De/J.locationSize,be,he,ke*Ie,(ht+De/J.locationSize*He)*Ie,Fe)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<J.locationSize;de++)p(J.location+de,oe.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<J.locationSize;de++)x(J.location+de);i.bindBuffer(i.ARRAY_BUFFER,se);for(let de=0;de<J.locationSize;de++)C(J.location+de,De/J.locationSize,be,he,De*Ie,De/J.locationSize*de*Ie,Fe)}}else if(K!==void 0){const he=K[me];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(J.location,he);break;case 3:i.vertexAttrib3fv(J.location,he);break;case 4:i.vertexAttrib4fv(J.location,he);break;default:i.vertexAttrib1fv(J.location,he)}}}}M()}function I(){z();for(const B in n){const X=n[B];for(const ne in X){const F=X[ne];for(const Q in F){const te=F[Q];for(const K in te)f(te[K].object),delete te[K];delete F[Q]}}delete n[B]}}function D(B){if(n[B.id]===void 0)return;const X=n[B.id];for(const ne in X){const F=X[ne];for(const Q in F){const te=F[Q];for(const K in te)f(te[K].object),delete te[K];delete F[Q]}}delete n[B.id]}function v(B){for(const X in n){const ne=n[X];for(const F in ne){const Q=ne[F];if(Q[B.id]===void 0)continue;const te=Q[B.id];for(const K in te)f(te[K].object),delete te[K];delete Q[B.id]}}}function T(B){for(const X in n){const ne=n[X],F=B.isInstancedMesh===!0?B.id:0,Q=ne[F];if(Q!==void 0){for(const te in Q){const K=Q[te];for(const me in K)f(K[me].object),delete K[me];delete Q[te]}delete ne[F],Object.keys(ne).length===0&&delete n[X]}}}function z(){U(),a=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:z,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:x,disableUnusedAttributes:M}}function xp(i,e,t){let n;function r(u){n=u}function s(u,c){i.drawArrays(n,u,c),t.update(c,n,1)}function a(u,c,f){f!==0&&(i.drawArraysInstanced(n,u,c,f),t.update(c,n,f))}function l(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,f);let d=0;for(let _=0;_<f;_++)d+=c[_];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function vp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(v){return!(v!==Nt&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(v){const T=v===Xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==tn&&v!==Qt&&!T&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=u(c);f!==c&&(Ye("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:w,maxSamples:I,samples:D}}function Sp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Fn,l=new $e,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const _=m.length!==0||d||n!==0||r;return r=d,n=m.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,d){t=f(m,d,0)},this.setState=function(m,d,_){const S=m.clippingPlanes,y=m.clipIntersection,x=m.clipShadows,p=i.get(m);if(!r||S===null||S.length===0||s&&!x)s?f(null):c();else{const M=s?0:n,C=M*4;let w=p.clippingState||null;u.value=w,w=f(S,d,C,_);for(let I=0;I!==C;++I)w[I]=t[I];p.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,d,_,S){const y=m!==null?m.length:0;let x=null;if(y!==0){if(x=u.value,S!==!0||x===null){const p=_+y*4,M=d.matrixWorldInverse;l.getNormalMatrix(M),(x===null||x.length<p)&&(x=new Float32Array(p));for(let C=0,w=_;C!==y;++C,w+=4)a.copy(m[C]).applyMatrix4(M,l),a.normal.toArray(x,w),x[w+3]=a.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}class xo extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ai(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:zi});s.uniforms.tEquirect.value=t;const a=new nn(r,s),l=t.minFilter;return t.minFilter===zn&&(t.minFilter=Rt),new Ja(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const rl=256,Mp=3,Ep=20,Sc=256,Mc=16,yp=3,bp=new W,Tp=new it;class Er{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ja(1,10,null),this._boxMesh=new nn(new ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:l=bp}=s,u=this._renderer;this._setSize(a);const c=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);const m=u.autoClear,d=u.autoClearColor,_=u.autoClearDepth,S=u.autoClearStencil,y=e.background;u.autoClear=!0,u.autoClearColor=!0,u.autoClearDepth=!0,u.autoClearStencil=!0,y===null&&(e.background=u.getClearColor(Tp));const x=new Ja(n,r,f);return x.position.copy(l),x.update(u,e),u.autoClear=m,u.autoClearColor=d,u.autoClearDepth=_,u.autoClearStencil=S,e.background=y,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(rl,tc(e))}_fromTexture(e,t){e.mapping===Gi||e.mapping===gr?this._setSize(e.image.length===0?rl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=sl(e,!1,!1),n=Math.log2(e)-Mp;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=sl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Gi||e.mapping===gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=al()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ap(),this._integrationMaterial=wp());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Mc);for(let a=0;a<=n;a++){const l=Er.lodToRoughness(a,n);if(a>n-yp)s.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const u=l>0?Math.log2(t)+.5*Math.log2(6/(Sc*Math.pow(l,4)))+.5:0;r.roughness.value=l,r.lodBias.value=u,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Rp());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function sl(i,e,t){return new xo(i,{minFilter:zn,generateMipmaps:e,type:Xt,colorSpace:pn,depthBuffer:t})}function Tr(i,e,t){return new ri({name:i,uniforms:e,vertexShader:je.cube_vert,fragmentShader:t,side:Yt,blending:zi,depthTest:!1,depthWrite:!1})}function Ap(){return Tr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sc}u

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
	`)}function wp(){return Tr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mc}},`

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
	`)}function Rp(){return Tr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ep}
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
	`)}function al(){return Tr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ol(){return Tr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cp(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,_=!1){return d==null?null:_?a(d):s(d)}function s(d){if(d&&d.isTexture){const _=d.mapping;if(_===Is||_===Ns)if(e.has(d)){const S=e.get(d).texture;return l(S,d.mapping)}else{const S=d.image;if(S&&S.height>0){const y=new xo(S.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),l(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const _=d.mapping,S=_===Is||_===Ns,y=_===Gi||_===gr;if(S||y){let x=t.get(d);const p=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Er(i)),x=S?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return S&&M&&M.height>0||y&&M&&u(M)?(n===null&&(n=new Er(i)),x=S?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",f),x.texture):null}}}return d}function l(d,_){return _===Is?d.mapping=Gi:_===Ns&&(d.mapping=gr),d}function u(d){let _=0;const S=6;for(let y=0;y<S;y++)d[y]!==void 0&&_++;return _===S}function c(d){const _=d.target;_.removeEventListener("dispose",c);const S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function f(d){const _=d.target;_.removeEventListener("dispose",f);const S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:m}}function Pp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&gs("WebGLRenderer: "+n+" extension not supported."),r}}}function Lp(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(S=>delete r[S]);function l(S){u(S.target)}function u(S){S.index!==null&&e.remove(S.index);for(const x in S.attributes)e.remove(S.attributes[x]);S.removeEventListener("dispose",l),delete r[S.id],a.unregister(S);const y=s.get(S);y&&(e.remove(y),s.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function c(S,y){return r[y.id]!==void 0||(y.addEventListener("dispose",l),r[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function f(S){const y=S.attributes;for(const x in y)e.update(y[x],i.ARRAY_BUFFER)}function m(S){const y=S.index,x=S.attributes.position;let p=0;if(x===void 0)return;const M=y!==null?y.array.length:x.array.length/3-1,C=x.count>=65535?lc:oc,w=new C(Math.ceil(M/3)*6,1),I=w.array;if(y!==null){const v=y.array;p=y.version;for(let T=0,z=0;T<M;T+=3){const U=v[T+0],B=v[T+1],X=v[T+2];I[z++]=U,I[z++]=B,I[z++]=B,I[z++]=X,I[z++]=X,I[z++]=U}}else{p=x.version;for(let v=0,T=0;v<M;v+=3){const z=v+0,U=v+1,B=v+2;I[T++]=z,I[T++]=U,I[T++]=U,I[T++]=B,I[T++]=B,I[T++]=z}}w.version=p;const D=s.get(S);D&&e.remove(D),s.set(S,w)}function d(S){const y=s.get(S);if(y){const x=S.index;x!==null&&y.version<x.version&&m(S)}else m(S);return s.get(S)}function _(){for(const S in r){const y=r[S].deref();y!==void 0&&u(y)}}return{get:c,update:f,getWireframeAttribute:d,dispose:_}}function Dp(i,e,t){let n;function r(m){n=m}let s,a;function l(m){s=m.type,a=m.bytesPerElement}function u(m,d){i.drawElements(n,d,s,m*a),t.update(d,n,1)}function c(m,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,m*a,_),t.update(d,n,_))}function f(m,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,m,0,_);let y=0;for(let x=0;x<_;x++)y+=d[x];t.update(y,n,1)}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=c,this.renderMultiDraw=f}function Ip(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Np(i,e,t){const n=new WeakMap,r=new bt;function s(a,l,u){const c=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=f!==void 0?f.length:0;let d=n.get(l);if(d===void 0||d.count!==m){let z=function(){v.dispose(),n.delete(l),l.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();const _=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let C=0;_===!0&&(C=1),S===!0&&(C=2),y===!0&&(C=3);let w=l.attributes.position.count*C,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const D=new Float32Array(w*I*4*m),v=new rc(D,w,I,m);v.type=Qt,v.needsUpdate=!0;const T=C*4;for(let U=0;U<m;U++){const B=x[U],X=p[U],ne=M[U],F=w*I*4*U;for(let Q=0;Q<B.count;Q++){const te=Q*T;_===!0&&(r.fromBufferAttribute(B,Q),D[F+te+0]=r.x,D[F+te+1]=r.y,D[F+te+2]=r.z,D[F+te+3]=0),S===!0&&(r.fromBufferAttribute(X,Q),D[F+te+4]=r.x,D[F+te+5]=r.y,D[F+te+6]=r.z,D[F+te+7]=0),y===!0&&(r.fromBufferAttribute(ne,Q),D[F+te+8]=r.x,D[F+te+9]=r.y,D[F+te+10]=r.z,D[F+te+11]=ne.itemSize===4?r.w:1)}}d={count:m,texture:v,size:new Ze(w,I)},n.set(l,d),l.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let y=0;y<c.length;y++)_+=c[y];const S=l.morphTargetsRelative?1:1-_;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",c)}u.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Up(i,e,t,n,r){let s=new WeakMap;function a(c){const f=r.render.frame,m=c.geometry,d=e.get(c,m);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),s.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==f&&(_.update(),s.set(_,f))}return d}function l(){s=new WeakMap}function u(c){const f=c.target;f.removeEventListener("dispose",u),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}const Fp={[Bl]:"LINEAR_TONE_MAPPING",[zl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[no]:"ACES_FILMIC_TONE_MAPPING",[kl]:"AGX_TONE_MAPPING",[Vl]:"NEUTRAL_TONE_MAPPING",[Gl]:"CUSTOM_TONE_MAPPING"};function Op(i,e,t,n,r,s){const a=new An(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,u=null,c=null;const f=new Rn;f.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new qt([0,2,0,0,2,0],2));const m=new vh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new nn(f,m),_=new _c(-1,1,1,-1,0,1);let S=null,y=null,x=!1,p,M=null,C=[],w=!1;this.setSize=function(I,D){a.setSize(I,D),l!==null&&l.setSize(I,D),u!==null&&u.setSize(I,D);for(let v=0;v<C.length;v++){const T=C[v];T.setSize&&T.setSize(I,D)}},this.setEffects=function(I){C=I,w=C.length>0&&C[0].isRenderPass===!0;const D=a.width,v=a.height;C.length>0&&l===null&&(l=new An(D,v,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),u=new An(D,v,{type:Xt,depthBuffer:!1,stencilBuffer:!1}));const T=r===!0&&C.some(z=>z.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Vi(D,v),s===!0&&(c.format=ti,c.type=ki)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let z=0;z<C.length;z++){const U=C[z];U.setSize&&U.setSize(D,v),T&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(c)}},this.begin=function(I,D){if(x||I.toneMapping===Gn&&C.length===0)return!1;if(M=D,D!==null){const v=D.width,T=D.height;(a.width!==v||a.height!==T)&&this.setSize(v,T)}return w===!1&&I.setRenderTarget(a),p=I.toneMapping,I.toneMapping=Gn,!0},this.hasRenderPass=function(){return w},this.end=function(I,D){I.toneMapping=p,x=!0;let v=a,T=l;for(let z=0;z<C.length;z++){const U=C[z];U.enabled!==!1&&(U.render(I,T,v,D),U.needsSwap!==!1&&(v=T,T=T===l?u:l))}if(S!==I.outputColorSpace||y!==I.toneMapping){S=I.outputColorSpace,y=I.toneMapping,m.defines={},rt.getTransfer(S)===dt&&(m.defines.SRGB_TRANSFER="");const z=Fp[y];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=v.texture,I.setRenderTarget(M),I.render(d,_),M=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),u!==null&&u.dispose(),f.dispose(),m.dispose()}}const Ec=new Ht,yc=new Vi(1,1),bc=new hc(1),Tc=new rc,Ac=new qu,wc=new uc,ll=[],cl=[],ul=new Float32Array(16),hl=new Float32Array(9),fl=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ll[r];if(s===void 0&&(s=new Float32Array(r),ll[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rs(i,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;fl.set(n),i.uniformMatrix2fv(this.addr,!1,fl),Pt(t,n)}}function Vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;hl.set(n),i.uniformMatrix3fv(this.addr,!1,hl),Pt(t,n)}}function Wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;ul.set(n),i.uniformMatrix4fv(this.addr,!1,ul),Pt(t,n)}}function Xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Cs(i){return i.version===0&&(i.compareFunction=jl,i.needsUpdate=!0),i}function jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Cs(yc):s=Ec,t.setTexture2D(e||s,r)}function em(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ac,r)}function tm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Cs(bc):s=wc,t.setTextureCube(e||s,r)}function nm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Tc,r)}function im(i){switch(i){case 5126:return Bp;case 35664:return zp;case 35665:return Hp;case 35666:return Gp;case 35674:return kp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return Yp;case 35668:case 35672:return qp;case 35669:case 35673:return Zp;case 5125:return Kp;case 36294:return $p;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}function rm(i,e){i.uniform1fv(this.addr,e)}function sm(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function am(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function om(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function lm(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cm(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function um(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hm(i,e){i.uniform1iv(this.addr,e)}function fm(i,e){i.uniform2iv(this.addr,e)}function dm(i,e){i.uniform3iv(this.addr,e)}function pm(i,e){i.uniform4iv(this.addr,e)}function mm(i,e){i.uniform1uiv(this.addr,e)}function gm(i,e){i.uniform2uiv(this.addr,e)}function _m(i,e){i.uniform3uiv(this.addr,e)}function xm(i,e){i.uniform4uiv(this.addr,e)}function vm(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Cs(yc):a=Ec;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function Sm(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ac,s[a])}function Mm(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Cs(bc):a=wc;for(let l=0;l!==r;++l)t.setTextureCube(e[l]||a,s[l])}function Em(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Tc,s[a])}function ym(i){switch(i){case 5126:return rm;case 35664:return sm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return um;case 5124:case 35670:return hm;case 35667:case 35671:return fm;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Em}}class bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=im(t.type)}}class Tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ym(t.type)}}class Am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function dl(i,e){i.seq.push(e),i.map[e.id]=e}function wm(i,e,t){const n=i.name,r=n.length;for(ra.lastIndex=0;;){const s=ra.exec(n),a=ra.lastIndex;let l=s[1];const u=s[2]==="]",c=s[3];if(u&&(l=l|0),c===void 0||c==="["&&a+2===r){dl(t,c===void 0?new bm(l,i,e):new Tm(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new Am(l),dl(t,m)),t=m}}}class _s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);wm(l,u,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function pl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Rm=37297;let Cm=0;function Pm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const ml=new $e;function Lm(i){rt._getMatrix(ml,rt.workingColorSpace,i);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Es:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Pm(i.getShaderSource(e),l)}else return s}function Dm(i,e){const t=Lm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Im={[Bl]:"Linear",[zl]:"Reinhard",[Hl]:"Cineon",[no]:"ACESFilmic",[kl]:"AgX",[Vl]:"Neutral",[Gl]:"Custom"};function Nm(i,e){const t=Im[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ls=new W;function Um(){rt.getLuminanceCoefficients(ls);const i=ls.x.toFixed(4),e=ls.y.toFixed(4),t=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Om(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function lr(i){return i!==""}function _l(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(zm,Hm)}function Hm(i,e){const t=je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Qa(t)}const Gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(Gm,km)}function km(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Vm={[ur]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function Wm(i){return Vm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xm={[gr]:"ENVMAP_MODE_REFRACTION"};function Ym(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qm={[Ol]:"ENVMAP_BLENDING_MULTIPLY",[uu]:"ENVMAP_BLENDING_MIX",[hu]:"ENVMAP_BLENDING_ADD"};function Zm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qm[i.combine]||"ENVMAP_BLENDING_NONE"}function Km(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const u=Wm(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Ym(t),m=Zm(t),d=Fm(t),_=Om(s),S=r.createProgram();let y,x,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),x.length>0&&(x+=`
`)):(y=[Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),x=[Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?je.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Dm("linearToOutputTexel",t.outputColorSpace),Um(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Qa(a),a=_l(a,t),a=xl(a,t),l=Qa(l),l=_l(l,t),l=xl(l,t),a=vl(a),l=vl(l),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=p+y+a,C=p+x+l,w=pl(r,r.VERTEX_SHADER,M),I=pl(r,r.FRAGMENT_SHADER,C);r.attachShader(S,w),r.attachShader(S,I),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function D(U){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(S)||"",X=r.getShaderInfoLog(w)||"",ne=r.getShaderInfoLog(I)||"",F=B.trim(),Q=X.trim(),te=ne.trim();let K=!0,me=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,w,I);else{const J=gl(r,w,"vertex"),oe=gl(r,I,"fragment");lt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+J+`
`+oe)}else F!==""?Ye("WebGLProgram: Program Info Log:",F):(Q===""||te==="")&&(me=!1);me&&(U.diagnostics={runnable:K,programLog:F,vertexShader:{log:Q,prefix:y},fragmentShader:{log:te,prefix:x}})}r.deleteShader(w),r.deleteShader(I),v=new _s(r,S),T=Bm(r,S)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(S,Rm)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cm++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=I,this}let $m=0;class Jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qm(e),t.set(e,n)),n}}class Qm{constructor(e){this.id=$m++,this.code=e,this.usedTimes=0}}function jm(i){return i===on||i===Ss||i===Ms}function eg(i,e,t,n,r,s){const a=new sc,l=new Jm,u=new Set,c=[],f=new Map,m=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return u.add(v),v===0?"uv":`uv${v}`}function S(v,T,z,U,B,X){const ne=U.fog,F=B.geometry,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||Q,te),me=d[v.type];let J=n.precision;v.precision!==null&&(J=n.getMaxPrecision(v.precision),J!==v.precision&&Ye("WebGLProgram.getParameters:",v.precision,"not supported, using",J,"instead."));const oe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,he=oe!==void 0?oe.length:0;let De=0;F.morphAttributes.position!==void 0&&(De=1),F.morphAttributes.normal!==void 0&&(De=2),F.morphAttributes.color!==void 0&&(De=3);let Be,se,be,Ie;if(me){const Ce=Tn[me];Be=Ce.vertexShader,se=Ce.fragmentShader}else{Be=v.vertexShader,se=v.fragmentShader;const Ce=l.getVertexShaderStage(v),ct=l.getFragmentShaderStage(v);l.update(v,Ce,ct),be=Ce.id,Ie=ct.id}const Fe=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,ht=B.isBatchedMesh===!0,He=!!v.map,st=!!v.matcap,at=!!K,tt=at&&K.isPMREMTexture===!0,Mt=!!v.aoMap,St=!!v.lightMap,Lt=!!v.bumpMap&&v.wireframe===!1,_t=!!v.normalMap,rn=!!v.displacementMap,Et=!!v.emissiveMap,Gt=!!v.metalnessMap,kt=!!v.roughnessMap,Zt=v.anisotropy>0,H=v.clearcoat>0,Vt=v.diffuseRoughness>0,mt=v.dispersion>0,gt=v.retroreflectivity>0,Te=v.iridescence>0,yt=v.sheen>0,ze=v.transmission>0,qe=Zt&&!!v.anisotropyMap,L=H&&!!v.clearcoatMap,E=H&&!!v.clearcoatNormalMap,Y=H&&!!v.clearcoatRoughnessMap,pe=Vt&&!!v.diffuseRoughnessMap,ae=Te&&!!v.iridescenceMap,ve=Te&&!!v.iridescenceThicknessMap,Ae=yt&&!!v.sheenColorMap,j=yt&&!!v.sheenRoughnessMap,ie=!!v.specularMap,Se=!!v.specularColorMap,N=!!v.specularIntensityMap,ee=ze&&!!v.transmissionMap,q=ze&&!!v.thicknessMap,Ee=!!v.gradientMap,ge=!!v.alphaMap,Me=v.alphaTest>0,Ue=!!v.alphaHash,Je=!!v.extensions;let _e=Gn;v.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Oe=tt?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,Ke={shaderID:me,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:se,defines:v.defines,customVertexShaderID:be,customFragmentShaderID:Ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:J,batching:ht,batchingColor:ht&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:He,matcap:st,envMap:at,envMapMode:at&&K.mapping,envMapPMREM:tt,envMapMaxLod:tt?Oe.length-1:null,envMapSize:tt?Oe[0].width:null,aoMap:Mt,lightMap:St,bumpMap:Lt,normalMap:_t,displacementMap:rn,emissiveMap:Et,normalMapObjectSpace:_t&&v.normalMapType===pu,normalMapTangentSpace:_t&&v.normalMapType===Ka,packedNormalMap:_t&&v.normalMapType===Ka&&jm(v.normalMap.format),metalnessMap:Gt,roughnessMap:kt,anisotropy:Zt,anisotropyMap:qe,clearcoat:H,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:Y,diffuseRoughness:Vt,diffuseRoughnessMap:pe,dispersion:mt,retroreflection:gt,iridescence:Te,iridescenceMap:ae,iridescenceThicknessMap:ve,sheen:yt,sheenColorMap:Ae,sheenRoughnessMap:j,specularMap:ie,specularColorMap:Se,specularIntensityMap:N,transmission:ze,transmissionMap:ee,thicknessMap:q,gradientMap:Ee,opaque:v.transparent===!1&&v.blending===hr&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:Me,alphaHash:Ue,combine:v.combine,mapUv:He&&_(v.map.channel),aoMapUv:Mt&&_(v.aoMap.channel),lightMapUv:St&&_(v.lightMap.channel),bumpMapUv:Lt&&_(v.bumpMap.channel),normalMapUv:_t&&_(v.normalMap.channel),displacementMapUv:rn&&_(v.displacementMap.channel),emissiveMapUv:Et&&_(v.emissiveMap.channel),metalnessMapUv:Gt&&_(v.metalnessMap.channel),roughnessMapUv:kt&&_(v.roughnessMap.channel),anisotropyMapUv:qe&&_(v.anisotropyMap.channel),clearcoatMapUv:L&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&_(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&_(v.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:j&&_(v.sheenRoughnessMap.channel),specularMapUv:ie&&_(v.specularMap.channel),specularColorMapUv:Se&&_(v.specularColorMap.channel),specularIntensityMapUv:N&&_(v.specularIntensityMap.channel),transmissionMapUv:ee&&_(v.transmissionMap.channel),thicknessMapUv:q&&_(v.thicknessMap.channel),alphaMapUv:ge&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_t||Zt),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(He||ge),fog:!!ne,useFog:v.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:de,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:De,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:X.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:He&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:Et&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===On,flipSided:v.side===Yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Je&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&v.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function y(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)T.push(z),T.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(x(T,v),p(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapPMREM),v.push(T.envMapMaxLod),v.push(T.envMapSize),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.diffuseRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.numLightProbeGrids),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function p(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){const T=d[v.type];let z;if(T){const U=Tn[T];z=pc.clone(U.uniforms)}else z=v.uniforms;return z}function C(v,T){let z=f.get(T);return z!==void 0?++z.usedTimes:(z=new Km(i,T,v,r),c.push(z),f.set(T,z)),z}function w(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function I(v){l.remove(v)}function D(){l.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:M,acquireProgram:C,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:D}}function tg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,u){i.get(a)[l]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ng(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function El(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function l(d,_,S,y,x,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:_,material:S,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:x,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=_,M.material=S,M.materialVariant=a(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=x,M.group=p),e++,M}function u(d,_,S,y,x,p,M){M.reversedDepth===!0&&(x=-x);const C=l(d,_,S,y,x,p);S.transmission>0?n.push(C):S.transparent===!0?r.push(C):t.push(C)}function c(d,_,S,y,x,p){const M=l(d,_,S,y,x,p);S.transmission>0?n.unshift(M):S.transparent===!0?r.unshift(M):t.unshift(M)}function f(d,_){t.length>1&&t.sort(d||ng),n.length>1&&n.sort(_||Ml),r.length>1&&r.sort(_||Ml)}function m(){for(let d=e,_=i.length;d<_;d++){const S=i[d];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:u,unshift:c,finish:m,sort:f}}function ig(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new El,i.set(n,[a])):r>=s.length?(a=new El,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function rg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new it};break;case"SpotLight":t={position:new W,direction:new W,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function sg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ag=0;function og(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lg(i){const e=new rg,t=sg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,s=new pt,a=new pt;function l(c){let f=0,m=0,d=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let _=0,S=0,y=0,x=0,p=0,M=0,C=0,w=0,I=0,D=0,v=0,T=0,z=0,U=0;c.sort(og);for(let X=0,ne=c.length;X<ne;X++){const F=c[X],Q=F.color,te=F.intensity,K=F.distance;let me=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===on?me=F.shadow.map.texture:me=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)f+=Q.r*te,m+=Q.g*te,d+=Q.b*te;else if(F.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(F.sh.coefficients[J],te);U++}else if(F.isSunLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const oe=F.shadow,he=t.get(F);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),n.sunShadow[S]=he,n.sunShadowMap[S]=me;const De=oe.getViewportCount();for(let Be=0;Be<De;Be++)n.sunShadowMatrix[y+Be]=oe.getMatrix(Be),n.sunShadowCascade[y+Be]=oe._cascadeData[Be];y+=De,S++}n.sun[_]=J,_++}else if(F.isDirectionalLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const oe=F.shadow,he=t.get(F);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,n.directionalShadow[x]=he,n.directionalShadowMap[x]=me,n.directionalShadowMatrix[x]=F.shadow.matrix,I++}n.directional[x]=J,x++}else if(F.isSpotLight){const J=e.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(Q).multiplyScalar(te),J.distance=K,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,n.spot[M]=J;const oe=F.shadow;if(F.map&&(n.spotLightMap[T]=F.map,T++,oe.updateMatrices(F),F.castShadow&&z++),n.spotLightMatrix[M]=oe.matrix,F.castShadow){const he=t.get(F);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,n.spotShadow[M]=he,n.spotShadowMap[M]=me,v++}M++}else if(F.isRectAreaLight){const J=e.get(F);J.color.copy(Q).multiplyScalar(te),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),n.rectArea[C]=J,C++}else if(F.isPointLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){const oe=F.shadow,he=t.get(F);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,he.shadowCameraNear=oe.camera.near,he.shadowCameraFar=oe.camera.far,n.pointShadow[p]=he,n.pointShadowMap[p]=me,n.pointShadowMatrix[p]=F.shadow.matrix,D++}n.point[p]=J,p++}else if(F.isHemisphereLight){const J=e.get(F);J.skyColor.copy(F.color).multiplyScalar(te),J.groundColor.copy(F.groundColor).multiplyScalar(te),n.hemi[w]=J,w++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=d;const B=n.hash;(B.sunLength!==_||B.directionalLength!==x||B.pointLength!==p||B.spotLength!==M||B.rectAreaLength!==C||B.hemiLength!==w||B.numSunShadows!==S||B.numDirectionalShadows!==I||B.numPointShadows!==D||B.numSpotShadows!==v||B.numSpotMaps!==T||B.numLightProbes!==U)&&(n.sun.length=_,n.directional.length=x,n.spot.length=M,n.rectArea.length=C,n.point.length=p,n.hemi.length=w,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+T-z,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=U,B.sunLength=_,B.directionalLength=x,B.pointLength=p,B.spotLength=M,B.rectAreaLength=C,B.hemiLength=w,B.numSunShadows=S,B.numDirectionalShadows=I,B.numPointShadows=D,B.numSpotShadows=v,B.numSpotMaps=T,B.numLightProbes=U,n.version=ag++)}function u(c,f){let m=0,d=0,_=0,S=0,y=0,x=0;const p=f.matrixWorldInverse;for(let M=0,C=c.length;M<C;M++){const w=c[M];if(w.isSunLight){const I=n.sun[m];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(p),m++}else if(w.isDirectionalLight){const I=n.directional[d];I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),d++}else if(w.isSpotLight){const I=n.spot[S];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),S++}else if(w.isRectAreaLight){const I=n.rectArea[y];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(p),a.identity(),s.copy(w.matrixWorld),s.premultiply(p),a.extractRotation(s),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const I=n.point[_];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(p),_++}else if(w.isHemisphereLight){const I=n.hemi[x];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(p),x++}}}return{setup:l,setupView:u,state:n}}function yl(i){const e=new lg(i),t=[],n=[],r=[];function s(m){f.camera=m,t.length=0,n.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):t.push(m)}function l(m){n.push(m)}function u(){e.setup(t),r.sort((m,d)=>m.priority-d.priority||m.id-d.id)}function c(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:l}}function cg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new yl(i),e.set(r,[l])):s>=a.length?(l=new yl(i),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
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
}`,fg=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],dg=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],bl=new pt,rr=new W,sa=new W;function pg(i,e,t){let n=new Mr;const r=new Ze,s=new Ze,a=new bt,l=new Sh,u=new Mh,c={},f=t.maxTextureSize,m={[xi]:Yt,[Yt]:xi,[On]:On},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:ug,fragmentShader:hg}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const S=new Rn;S.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new nn(S,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let p=this.type;this.render=function(D,v,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===Nl&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);const z=i.getRenderTarget(),U=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),X=i.state;X.setBlending(zi),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ne=p!==this.type;ne&&v.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(Q=>Q.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,Q=D.length;F<Q;F++){const te=D[F],K=te.shadow;if(K===void 0){Ye("WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const me=K.getFrameExtents();r.multiply(me),s.copy(K.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/me.x),r.x=s.x*me.x,K.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/me.y),r.y=s.y*me.y,K.mapSize.y=s.y));const J=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=J,K.map===null||ne===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===or){if(te.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new An(r.x,r.y,{format:on,type:Xt,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),K.map.texture.name=te.name+".shadowMap",K.map.depthTexture=new Vi(r.x,r.y,Qt),K.map.depthTexture.name=te.name+".shadowMapDepth",K.map.depthTexture.format=ni,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ut,K.map.depthTexture.magFilter=Ut}else te.isPointLight?(K.map=new xo(r.x),K.map.depthTexture=new hc(r.x,wn)):(K.map=new An(r.x,r.y),K.map.depthTexture=new Vi(r.x,r.y,wn)),K.map.depthTexture.name=te.name+".shadowMap",K.map.depthTexture.format=ni,this.type===ur?(K.map.depthTexture.compareFunction=J?Ql:Jl,K.map.depthTexture.minFilter=Rt,K.map.depthTexture.magFilter=Rt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ut,K.map.depthTexture.magFilter=Ut);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const oe=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();te.isPointLight!==!0&&K.updateMatrices(te,T);const he=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:T.layers;for(let De=0;De<oe;De++){const Be=K.getCamera(De);if(te.isPointLight){const se=K.camera,be=K.matrix,Ie=te.distance||se.far;Ie!==se.far&&(se.far=Ie,se.updateProjectionMatrix()),rr.setFromMatrixPosition(te.matrixWorld),se.position.copy(rr),sa.copy(se.position),sa.add(fg[De]),se.up.copy(dg[De]),se.lookAt(sa),se.updateMatrixWorld(),be.makeTranslation(-rr.x,-rr.y,-rr.z),bl.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),K._frustum.setFromProjectionMatrix(bl,se.coordinateSystem,se.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,De),i.clear();else{De===0&&(i.setRenderTarget(K.map),i.clear());const se=K.getViewport(De);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),X.viewport(a)}n=K.getFrustum(De),w(v,T,Be,te,he,this.type)}K.isPointLightShadow!==!0&&this.type===or&&M(K,T),K.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(z,U,B)};function M(D,v){const T=e.update(y);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null?D.mapPass=new An(r.x,r.y,{format:on,type:Xt}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(v,null,T,d,y,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(v,null,T,_,y,null)}function C(D,v,T,z){let U=null;const B=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)U=B;else if(U=T.isPointLight===!0?u:l,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const X=U.uuid,ne=v.uuid;let F=c[X];F===void 0&&(F={},c[X]=F);let Q=F[ne];Q===void 0&&(Q=U.clone(),F[ne]=Q,v.addEventListener("dispose",I)),U=Q}if(U.visible=v.visible,U.wireframe=v.wireframe,z===or?U.side=v.shadowSide!==null?v.shadowSide:v.side:U.side=v.shadowSide!==null?v.shadowSide:m[v.side],U.alphaMap=v.alphaMap,U.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,U.map=v.map,U.clipShadows=v.clipShadows,U.clippingPlanes=v.clippingPlanes,U.clipIntersection=v.clipIntersection,U.displacementMap=v.displacementMap,U.displacementScale=v.displacementScale,U.displacementBias=v.displacementBias,U.wireframeLinewidth=v.wireframeLinewidth,U.linewidth=v.linewidth,T.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const X=i.properties.get(U);X.light=T}return U}function w(D,v,T,z,U,B){if(D.visible===!1)return;if(D.layers.test(U)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&B===or)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const F=e.update(D),Q=D.material;if(Array.isArray(Q)){const te=F.groups;for(let K=0,me=te.length;K<me;K++){const J=te[K],oe=Q[J.materialIndex];if(oe&&oe.visible){const he=C(D,oe,z,B);D.onBeforeShadow(i,D,v,T,F,he,J),i.renderBufferDirect(T,null,F,he,D,J),D.onAfterShadow(i,D,v,T,F,he,J)}}}else if(Q.visible){const te=C(D,Q,z,B);D.onBeforeShadow(i,D,v,T,F,te,null),i.renderBufferDirect(T,null,F,te,D,null),D.onAfterShadow(i,D,v,T,F,te,null)}}const ne=D.children;for(let F=0,Q=ne.length;F<Q;F++)w(ne[F],v,T,z,U,B)}function I(D){D.target.removeEventListener("dispose",I);for(const T in c){const z=c[T],U=D.target.uuid;U in z&&(z[U].dispose(),delete z[U])}}}function mg(i,e){function t(){let N=!1;const ee=new bt;let q=null;const Ee=new bt(0,0,0,0);return{setMask:function(ge){q!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),q=ge)},setLocked:function(ge){N=ge},setClear:function(ge,Me,Ue,Je,_e){_e===!0&&(ge*=Je,Me*=Je,Ue*=Je),ee.set(ge,Me,Ue,Je),Ee.equals(ee)===!1&&(i.clearColor(ge,Me,Ue,Je),Ee.copy(ee))},reset:function(){N=!1,q=null,Ee.set(-1,0,0,0)}}}function n(){let N=!1,ee=!1,q=null,Ee=null,ge=null;return{setReversed:function(Me){if(ee!==Me){const Ue=e.get("EXT_clip_control");Me?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ee=Me;const Je=ge;ge=null,this.setClear(Je)}},getReversed:function(){return ee},setTest:function(Me){Me?de(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(Me){q!==Me&&!N&&(i.depthMask(Me),q=Me)},setFunc:function(Me){if(ee&&(Me=Au[Me]),Ee!==Me){switch(Me){case ha:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=Me}},setLocked:function(Me){N=Me},setClear:function(Me){ge!==Me&&(ge=Me,ee&&(Me=1-Me),i.clearDepth(Me))},reset:function(){N=!1,q=null,Ee=null,ge=null,ee=!1}}}function r(){let N=!1,ee=null,q=null,Ee=null,ge=null,Me=null,Ue=null,Je=null,_e=null;return{setTest:function(Oe){N||(Oe?de(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Oe){ee!==Oe&&!N&&(i.stencilMask(Oe),ee=Oe)},setFunc:function(Oe,Ke,Ce){(q!==Oe||Ee!==Ke||ge!==Ce)&&(i.stencilFunc(Oe,Ke,Ce),q=Oe,Ee=Ke,ge=Ce)},setOp:function(Oe,Ke,Ce){(Me!==Oe||Ue!==Ke||Je!==Ce)&&(i.stencilOp(Oe,Ke,Ce),Me=Oe,Ue=Ke,Je=Ce)},setLocked:function(Oe){N=Oe},setClear:function(Oe){_e!==Oe&&(i.clearStencil(Oe),_e=Oe)},reset:function(){N=!1,ee=null,q=null,Ee=null,ge=null,Me=null,Ue=null,Je=null,_e=null}}}const s=new t,a=new n,l=new r;let u={};const c=new WeakMap;let f={},m={},d={},_=new WeakMap,S=[],y=null,x=!1,p=null,M=null,C=null,w=null,I=null,D=null,v=null,T=new it(0,0,0),z=0,U=!1,B=null,X=null,ne=null,F=null,Q=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,me=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=me>=1):J.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=me>=2);let oe=null,he={};const De=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),se=new bt().fromArray(De),be=new bt().fromArray(Be);function Ie(N,ee,q,Ee){const ge=new Uint8Array(4),Me=i.createTexture();i.bindTexture(N,Me),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<q;Ue++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ee+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return Me}const Fe={};Fe[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),de(i.DEPTH_TEST),a.setFunc(mr),Lt(!1),_t(yo),de(i.CULL_FACE),Mt(zi);function de(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function ke(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function ht(N,ee){return d[N]!==ee?(i.bindFramebuffer(N,ee),d[N]=ee,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function He(N,ee){let q=S,Ee=!1;if(N){q=_.get(ee),q===void 0&&(q=[],_.set(ee,q));const ge=N.textures;if(q.length!==ge.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Ue=ge.length;Me<Ue;Me++)q[Me]=i.COLOR_ATTACHMENT0+Me;q.length=ge.length,Ee=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(q)}function st(N){return y!==N?(i.useProgram(N),y=N,!0):!1}const at={[Fi]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Zc]:i.FUNC_REVERSE_SUBTRACT};at[Kc]=i.MIN,at[$c]=i.MAX;const tt={[Jc]:i.ZERO,[Qc]:i.ONE,[jc]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[su]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[eu]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[ru]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[au]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(N,ee,q,Ee,ge,Me,Ue,Je,_e,Oe){if(N===zi){x===!0&&(ke(i.BLEND),x=!1);return}if(x===!1&&(de(i.BLEND),x=!0),N!==Yc){if(N!==p||Oe!==U){if((M!==Fi||I!==Fi)&&(i.blendEquation(i.FUNC_ADD),M=Fi,I=Fi),Oe)switch(N){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFunc(i.ONE,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",N);break}else switch(N){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case To:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ao:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",N);break}C=null,w=null,D=null,v=null,T.set(0,0,0),z=0,p=N,U=Oe}return}ge=ge||ee,Me=Me||q,Ue=Ue||Ee,(ee!==M||ge!==I)&&(i.blendEquationSeparate(at[ee],at[ge]),M=ee,I=ge),(q!==C||Ee!==w||Me!==D||Ue!==v)&&(i.blendFuncSeparate(tt[q],tt[Ee],tt[Me],tt[Ue]),C=q,w=Ee,D=Me,v=Ue),(Je.equals(T)===!1||_e!==z)&&(i.blendColor(Je.r,Je.g,Je.b,_e),T.copy(Je),z=_e),p=N,U=!1}function St(N,ee){N.side===On?ke(i.CULL_FACE):de(i.CULL_FACE);let q=N.side===Yt;ee&&(q=!q),Lt(q),N.blending===hr&&N.transparent===!1?Mt(zi):Mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ee=N.stencilWrite;l.setTest(Ee),Ee&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Et(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(N){B!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),B=N)}function _t(N){N!==Wc?(de(i.CULL_FACE),N!==X&&(N===yo?i.cullFace(i.BACK):N===Xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),X=N}function rn(N){N!==ne&&(K&&i.lineWidth(N),ne=N)}function Et(N,ee,q){N?(de(i.POLYGON_OFFSET_FILL),(F!==ee||Q!==q)&&(F=ee,Q=q,a.getReversed()&&(ee=-ee,q=-q),i.polygonOffset(ee,q))):ke(i.POLYGON_OFFSET_FILL)}function Gt(N){N?de(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function kt(N){N===void 0&&(N=i.TEXTURE0+te-1),oe!==N&&(i.activeTexture(N),oe=N)}function Zt(N,ee,q){q===void 0&&(oe===null?q=i.TEXTURE0+te-1:q=oe);let Ee=he[q];Ee===void 0&&(Ee={type:void 0,texture:void 0},he[q]=Ee),(Ee.type!==N||Ee.texture!==ee)&&(oe!==q&&(i.activeTexture(q),oe=q),i.bindTexture(N,ee||Fe[N]),Ee.type=N,Ee.texture=ee)}function H(){const N=he[oe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function mt(){try{i.compressedTexImage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function gt(){try{i.texSubImage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function Te(){try{i.texSubImage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function yt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function qe(){try{i.texStorage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function L(){try{i.texStorage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function E(){try{i.texImage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function Y(){try{i.texImage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function pe(N){return m[N]!==void 0?m[N]:i.getParameter(N)}function ae(N,ee){m[N]!==ee&&(i.pixelStorei(N,ee),m[N]=ee)}function ve(N){se.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function Ae(N){be.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),be.copy(N))}function j(N,ee){let q=c.get(ee);q===void 0&&(q=new WeakMap,c.set(ee,q));let Ee=q.get(N);Ee===void 0&&(Ee=i.getUniformBlockIndex(ee,N.name),i.uniformBlockBinding(ee,Ee,Ee),q.set(N,Ee))}function ie(N,ee,q){const ge=c.get(ee).get(N);u[ge]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,q),u[ge]=q)}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},m={},oe=null,he={},d={},u={},_=new WeakMap,S=[],y=null,x=!1,p=null,M=null,C=null,w=null,I=null,D=null,v=null,T=new it(0,0,0),z=0,U=!1,B=null,X=null,ne=null,F=null,Q=null,se.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:de,disable:ke,bindFramebuffer:ht,drawBuffers:He,useProgram:st,setBlending:Mt,setMaterial:St,setFlipSided:Lt,setCullFace:_t,setLineWidth:rn,setPolygonOffset:Et,setScissorTest:Gt,activeTexture:kt,bindTexture:Zt,unbindTexture:H,compressedTexImage2D:Vt,compressedTexImage3D:mt,texImage2D:E,texImage3D:Y,pixelStorei:ae,getParameter:pe,updateUBOMapping:j,uniformBlockBinding:ie,texStorage2D:qe,texStorage3D:L,texSubImage2D:gt,texSubImage3D:Te,compressedTexSubImage2D:yt,compressedTexSubImage3D:ze,scissor:ve,viewport:Ae,reset:Se}}function gg(i,e,t,n,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,f=new WeakMap,m=new Set;let d;const _=new WeakMap,S=new Set,y=new FinalizationRegistry(L=>S.delete(L));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return x?new OffscreenCanvas(L,E):ys("canvas")}function M(L,E,Y){let pe=1;const ae=qe(L);if((ae.width>Y||ae.height>Y)&&(pe=Y/Math.max(ae.width,ae.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ve=Math.floor(pe*ae.width),Ae=Math.floor(pe*ae.height);d===void 0&&(d=p(ve,Ae));const j=E?p(ve,Ae):d;return j.width=ve,j.height=Ae,j.getContext("2d").drawImage(L,0,0,ve,Ae),Ye("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ve+"x"+Ae+")."),j}else return"data"in L&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function C(L){return L.generateMipmaps}function w(L){i.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(L,E,Y,pe,ae,ve=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ae;pe&&(Ae=e.get("EXT_texture_norm16"),Ae||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=E;if(E===i.RED&&(Y===i.FLOAT&&(j=i.R32F),Y===i.HALF_FLOAT&&(j=i.R16F),Y===i.UNSIGNED_BYTE&&(j=i.R8),Y===i.UNSIGNED_SHORT&&Ae&&(j=Ae.R16_EXT),Y===i.SHORT&&Ae&&(j=Ae.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(j=i.R8UI),Y===i.UNSIGNED_SHORT&&(j=i.R16UI),Y===i.UNSIGNED_INT&&(j=i.R32UI),Y===i.BYTE&&(j=i.R8I),Y===i.SHORT&&(j=i.R16I),Y===i.INT&&(j=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(j=i.RG32F),Y===i.HALF_FLOAT&&(j=i.RG16F),Y===i.UNSIGNED_BYTE&&(j=i.RG8),Y===i.UNSIGNED_SHORT&&Ae&&(j=Ae.RG16_EXT),Y===i.SHORT&&Ae&&(j=Ae.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(j=i.RG8UI),Y===i.UNSIGNED_SHORT&&(j=i.RG16UI),Y===i.UNSIGNED_INT&&(j=i.RG32UI),Y===i.BYTE&&(j=i.RG8I),Y===i.SHORT&&(j=i.RG16I),Y===i.INT&&(j=i.RG32I)),E===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(j=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(j=i.RGB16UI),Y===i.UNSIGNED_INT&&(j=i.RGB32UI),Y===i.BYTE&&(j=i.RGB8I),Y===i.SHORT&&(j=i.RGB16I),Y===i.INT&&(j=i.RGB32I)),E===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),Y===i.UNSIGNED_INT&&(j=i.RGBA32UI),Y===i.BYTE&&(j=i.RGBA8I),Y===i.SHORT&&(j=i.RGBA16I),Y===i.INT&&(j=i.RGBA32I)),E===i.RGB&&(Y===i.UNSIGNED_SHORT&&Ae&&(j=Ae.RGB16_EXT),Y===i.SHORT&&Ae&&(j=Ae.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),E===i.RGBA){const ie=ve?Es:rt.getTransfer(ae);Y===i.FLOAT&&(j=i.RGBA32F),Y===i.HALF_FLOAT&&(j=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(j=ie===dt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Ae&&(j=Ae.RGBA16_EXT),Y===i.SHORT&&Ae&&(j=Ae.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(L,E){let Y;return L?E===null||E===wn||E===ki?Y=i.DEPTH24_STENCIL8:E===Qt?Y=i.DEPTH32F_STENCIL8:E===_r&&(Y=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wn||E===ki?Y=i.DEPTH_COMPONENT24:E===Qt?Y=i.DEPTH_COMPONENT32F:E===_r&&(Y=i.DEPTH_COMPONENT16),Y}function T(L,E){return C(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ut&&L.minFilter!==Rt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function z(L){const E=new WeakRef(L);n.get(L).__ref=E,S.add(E),y.register(L,E,E)}function U(L){const E=n.get(L).__ref;E!==void 0&&(S.delete(E),y.unregister(E))}function B(L){ne(L.target)}function X(L){F(L.target)}function ne(L){L.removeEventListener("dispose",B),U(L),te(L),L.isVideoTexture&&f.delete(L),L.isHTMLTexture&&m.delete(L)}function F(L){L.removeEventListener("dispose",X),U(L),me(L)}function Q(){for(const L of S){const E=L.deref();E!==void 0&&(E.isRenderTarget===!0?F(E):ne(E))}S.clear(),m.clear()}function te(L){const E=n.get(L);if(E.__webglInit===void 0)return;const Y=L.source,pe=_.get(Y);if(pe){const ae=pe[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&K(L),Object.keys(pe).length===0&&_.delete(Y)}n.remove(L)}function K(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const Y=L.source,pe=_.get(Y);delete pe[E.__cacheKey],a.memory.textures--}function me(L){const E=n.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();const Y=L.depthTexture;if(Y&&Y.renderTarget===L&&ne(Y),L.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let ve=0;ve<E.__webglFramebuffer[ae].length;ve++)i.deleteFramebuffer(E.__webglFramebuffer[ae][ve]);else i.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ae]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const pe=L.textures;for(let ae=0,ve=pe.length;ae<ve;ae++){const Ae=n.get(pe[ae]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),a.memory.textures--),n.remove(pe[ae])}n.remove(L)}let J=0;function oe(){J=0}function he(){return J}function De(L){J=L}function Be(){const L=J;return L>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),J+=1,L}function se(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function be(L,E){const Y=n.get(L);if(L.isVideoTexture&&yt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const pe=L.image;if(pe===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{St(Y,L,E);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function Ie(L,E){const Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){St(Y,L,E);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function Fe(L,E){const Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){St(Y,L,E);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function de(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){Lt(Y,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}const ke={[vs]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},ht={[Ut]:i.NEAREST,[fu]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Us]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},He={[gu]:i.NEVER,[jl]:i.ALWAYS,[_u]:i.LESS,[Jl]:i.LEQUAL,[xu]:i.EQUAL,[Ql]:i.GEQUAL,[vu]:i.GREATER,[Su]:i.NOTEQUAL};function st(L,E){if(E.type===Qt&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rt||E.magFilter===Us||E.magFilter===Hr||E.magFilter===zn||E.minFilter===Rt||E.minFilter===Us||E.minFilter===Hr||E.minFilter===zn)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ke[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ke[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ke[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ht[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ht[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ut||E.minFilter!==Hr&&E.minFilter!==zn||E.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function at(L,E){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",B),z(E));const pe=E.source;let ae=_.get(pe);ae===void 0&&(ae={},_.set(pe,ae));const ve=se(E);if(ve!==L.__cacheKey){ae[ve]===void 0&&(ae[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[ve].usedTimes++;const Ae=ae[L.__cacheKey];Ae!==void 0&&(ae[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&K(E)),L.__cacheKey=ve,L.__webglTexture=ae[ve].texture}return Y}function tt(L,E,Y){return Math.floor(Math.floor(L/Y)/E)}function Mt(L,E,Y,pe){const ve=L.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Y,pe,E.data);else{ve.sort((N,ee)=>N.start-ee.start);let Ae=0;for(let N=1;N<ve.length;N++){const ee=ve[Ae],q=ve[N],Ee=ee.start+ee.count,ge=tt(q.start,E.width,4),Me=tt(ee.start,E.width,4);q.start<=Ee+1&&ge===Me&&tt(q.start+q.count-1,E.width,4)===ge?ee.count=Math.max(ee.count,q.start+q.count-ee.start):(++Ae,ve[Ae]=q)}ve.length=Ae+1;const j=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let N=0,ee=ve.length;N<ee;N++){const q=ve[N],Ee=Math.floor(q.start/4),ge=Math.ceil(q.count/4),Me=Ee%E.width,Ue=Math.floor(Ee/E.width),Je=ge,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(i.TEXTURE_2D,0,Me,Ue,Je,_e,Y,pe,E.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function St(L,E,Y){let pe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=i.TEXTURE_3D);const ae=at(L,E),ve=E.source;t.bindTexture(pe,L.__webglTexture,i.TEXTURE0+Y);const Ae=n.get(ve);if(ve.version!==Ae.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=rt.getPrimaries(rt.workingColorSpace),Oe=E.colorSpace===jn?null:rt.getPrimaries(E.colorSpace),Ke=E.colorSpace===jn||_e===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ie=M(E.image,!1,r.maxTextureSize);ie=ze(E,ie);const Se=s.convert(E.format,E.colorSpace),N=s.convert(E.type);let ee=D(E.internalFormat,Se,N,E.normalized,E.colorSpace,E.isVideoTexture);st(pe,E);let q;const Ee=E.mipmaps,ge=E.isVideoTexture!==!0,Me=Ae.__version===void 0||ae===!0,Ue=ve.dataReady,Je=T(E,ie);if(E.isDepthTexture)ee=v(E.format===ti,E.type),Me&&(ge?t.texStorage2D(i.TEXTURE_2D,1,ee,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ee,ie.width,ie.height,0,Se,N,null));else if(E.isDataTexture)if(Ee.length>0){ge&&Me&&t.texStorage2D(i.TEXTURE_2D,Je,ee,Ee[0].width,Ee[0].height);for(let _e=0,Oe=Ee.length;_e<Oe;_e++)q=Ee[_e],ge?Ue&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,q.width,q.height,Se,N,q.data):t.texImage2D(i.TEXTURE_2D,_e,ee,q.width,q.height,0,Se,N,q.data);E.generateMipmaps=!1}else ge?(Me&&t.texStorage2D(i.TEXTURE_2D,Je,ee,ie.width,ie.height),Ue&&Mt(E,ie,Se,N)):t.texImage2D(i.TEXTURE_2D,0,ee,ie.width,ie.height,0,Se,N,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ge&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,ee,Ee[0].width,Ee[0].height,ie.depth);for(let _e=0,Oe=Ee.length;_e<Oe;_e++)if(q=Ee[_e],E.format!==Nt)if(Se!==null)if(ge){if(Ue)if(E.layerUpdates.size>0){const Ke=il(q.width,q.height,E.format,E.type);for(const Ce of E.layerUpdates){const ct=q.data.subarray(Ce*Ke/q.data.BYTES_PER_ELEMENT,(Ce+1)*Ke/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Ce,q.width,q.height,1,Se,ct)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,q.width,q.height,ie.depth,Se,q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,ee,q.width,q.height,ie.depth,0,q.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,q.width,q.height,ie.depth,Se,N,q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,ee,q.width,q.height,ie.depth,0,Se,N,q.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ge&&Me&&t.texStorage2D(i.TEXTURE_2D,Je,ee,Ee[0].width,Ee[0].height);for(let _e=0,Oe=Ee.length;_e<Oe;_e++)q=Ee[_e],E.format!==Nt?Se!==null?ge?Ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,q.width,q.height,Se,q.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,ee,q.width,q.height,0,q.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Ue&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,q.width,q.height,Se,N,q.data):t.texImage2D(i.TEXTURE_2D,_e,ee,q.width,q.height,0,Se,N,q.data)}else if(E.isDataArrayTexture)if(ge){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,ee,ie.width,ie.height,ie.depth),Ue)if(E.layerUpdates.size>0){const _e=il(ie.width,ie.height,E.format,E.type);for(const Oe of E.layerUpdates){const Ke=ie.data.subarray(Oe*_e/ie.data.BYTES_PER_ELEMENT,(Oe+1)*_e/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Oe,ie.width,ie.height,1,Se,N,Ke)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,N,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,ie.width,ie.height,ie.depth,0,Se,N,ie.data);else if(E.isData3DTexture)ge?(Me&&t.texStorage3D(i.TEXTURE_3D,Je,ee,ie.width,ie.height,ie.depth),Ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,N,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ee,ie.width,ie.height,ie.depth,0,Se,N,ie.data);else if(E.isFramebufferTexture){if(Me)if(ge)t.texStorage2D(i.TEXTURE_2D,Je,ee,ie.width,ie.height);else{let _e=ie.width,Oe=ie.height;for(let Ke=0;Ke<Je;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,ee,_e,Oe,0,Se,N,null),_e>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ie.parentNode!==_e){_e.appendChild(ie),m.add(E),_e.onpaint=Oe=>{const Ke=Oe.changedElements;for(const Ce of m)Ke.includes(Ce.image)&&(Ce.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{const Ke=i.RGBA,Ce=i.RGBA,ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,Ce,ct,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(ge&&Me){const _e=qe(Ee[0]);t.texStorage2D(i.TEXTURE_2D,Je,ee,_e.width,_e.height)}for(let _e=0,Oe=Ee.length;_e<Oe;_e++)q=Ee[_e],ge?Ue&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Se,N,q):t.texImage2D(i.TEXTURE_2D,_e,ee,Se,N,q);E.generateMipmaps=!1}else if(ge){if(Me){const _e=qe(ie);t.texStorage2D(i.TEXTURE_2D,Je,ee,_e.width,_e.height)}Ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,N,ie)}else t.texImage2D(i.TEXTURE_2D,0,ee,Se,N,ie);C(E)&&E.mipmapsAutoUpdate===!0&&w(pe),Ae.__version=ve.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Lt(L,E,Y){if(E.image.length!==6)return;const pe=at(L,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Y);const ve=n.get(ae);if(ae.version!==ve.__version||pe===!0){t.activeTexture(i.TEXTURE0+Y);const Ae=rt.getPrimaries(rt.workingColorSpace),j=E.colorSpace===jn?null:rt.getPrimaries(E.colorSpace),ie=E.colorSpace===jn||Ae===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Se=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let Ce=0;Ce<6;Ce++)!Se&&!N?ee[Ce]=M(E.image[Ce],!0,r.maxCubemapSize):ee[Ce]=N?E.image[Ce].image:E.image[Ce],ee[Ce]=ze(E,ee[Ce]);const q=ee[0],Ee=s.convert(E.format,E.colorSpace),ge=s.convert(E.type);let Me=D(E.internalFormat,Ee,ge,E.normalized,E.colorSpace);const Ue=E.isVideoTexture!==!0,Je=ve.__version===void 0||pe===!0,_e=ae.dataReady;let Oe=T(E,q);st(i.TEXTURE_CUBE_MAP,E);let Ke;if(E.isDepthTexture){if(Me=v(E.format===ti,E.type),Je)if(Ue)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Me,q.width,q.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Me,q.width,q.height,0,Ee,ge,null)}else if(Se){Ue&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,Me,q.width,q.height);for(let Ce=0;Ce<6;Ce++){Ke=ee[Ce].mipmaps;for(let ct=0;ct<Ke.length;ct++){const Tt=Ke[ct];E.format!==Nt?Ee!==null?Ue?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ct,0,0,Tt.width,Tt.height,Ee,Tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ct,Me,Tt.width,Tt.height,0,Tt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ct,0,0,Tt.width,Tt.height,Ee,ge,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ct,Me,Tt.width,Tt.height,0,Ee,ge,Tt.data)}}}else{if(Ke=E.mipmaps,Ue&&Je){Ke.length>0&&Oe++;const Ce=qe(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,Me,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(N){Ue?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,ee[Ce].width,ee[Ce].height,Ee,ge,ee[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Me,ee[Ce].width,ee[Ce].height,0,Ee,ge,ee[Ce].data);for(let ct=0;ct<Ke.length;ct++){const vn=Ke[ct].image[Ce].image;Ue?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ct+1,0,0,vn.width,vn.height,Ee,ge,vn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ct+1,Me,vn.width,vn.height,0,Ee,ge,vn.data)}}else{Ue?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Ee,ge,ee[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Me,Ee,ge,ee[Ce]);for(let ct=0;ct<Ke.length;ct++){const Tt=Ke[ct];Ue?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ct+1,0,0,Ee,ge,Tt.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ct+1,Me,Ee,ge,Tt.image[Ce])}}}C(E)&&E.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),ve.__version=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function _t(L,E,Y,pe,ae,ve){const Ae=s.convert(Y.format,Y.colorSpace),j=s.convert(Y.type),ie=D(Y.internalFormat,Ae,j,Y.normalized,Y.colorSpace),Se=n.get(E),N=n.get(Y);if(N.__renderTarget=E,!Se.__hasExternalTextures){const ee=Math.max(1,E.width>>ve),q=Math.max(1,E.height>>ve);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ve,ie,ee,q,E.depth,0,Ae,j,null):t.texImage2D(ae,ve,ie,ee,q,0,Ae,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Te(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ae,N.__webglTexture,0,gt(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,ae,N.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rn(L,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const pe=E.depthTexture,ae=pe&&pe.isDepthTexture?pe.type:null,ve=v(E.stencilBuffer,ae),Ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(E),ve,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(E),ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,L)}else{const pe=E.textures;for(let ae=0;ae<pe.length;ae++){const ve=pe[ae],Ae=s.convert(ve.format,ve.colorSpace),j=s.convert(ve.type),ie=D(ve.internalFormat,Ae,j,ve.normalized,ve.colorSpace);Te(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(E),ie,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(E),ie,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(L,E,Y){const pe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=n.get(E.depthTexture);ae.__renderTarget=E;const ve=pe?E.depthTexture.image[0]:E.depthTexture.image;(!ae.__webglTexture||ve.width!==E.width||ve.height!==E.height)&&(ve.width=E.width,ve.height=E.height,E.depthTexture.needsUpdate=!0),pe?de(E.depthTexture,0):be(E.depthTexture,0);const Ae=ae.__webglTexture,j=gt(E),ie=pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,Se=E.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ni)Te(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,ie,Ae,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Se,ie,Ae,0);else if(E.depthTexture.format===ti)Te(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,ie,Ae,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Se,ie,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(L){const E=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ae)};pe.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=pe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let pe=0;pe<6;pe++)Et(E.__webglFramebuffer[pe],L,pe);else L.texture.mipmaps.length>0?Et(E.__webglFramebuffer[0],L,0):Et(E.__webglFramebuffer,L,0);else if(Y){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=i.createRenderbuffer(),rn(E.__webglDepthbuffer[pe],L,!1);else{const ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ve)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),rn(E.__webglDepthbuffer,L,!1);else{const ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(L,E,Y){const pe=n.get(L);E!==void 0&&_t(pe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Gt(L)}function Zt(L){const E=L.texture,Y=n.get(L),pe=n.get(E);L.addEventListener("dispose",X),z(L);const ae=L.textures,ve=L.isWebGLCubeRenderTarget===!0,Ae=ae.length>1;if(Ae||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=E.version,a.memory.textures++),ve){Y.__webglFramebuffer=[];for(let j=0;j<6;j++)if(E.mipmaps.length>0){Y.__webglFramebuffer[j]=[];for(let ie=0;ie<E.mipmaps.length;ie++)Y.__webglFramebuffer[j][ie]=i.createFramebuffer()}else Y.__webglFramebuffer[j]=i.createFramebuffer()}else{if(E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let j=0;j<E.mipmaps.length;j++)Y.__webglFramebuffer[j]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let j=0,ie=ae.length;j<ie;j++){const Se=n.get(ae[j]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Te(L)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let j=0;j<ae.length;j++){const ie=ae[j];Y.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[j]);const Se=s.convert(ie.format,ie.colorSpace),N=s.convert(ie.type),ee=D(ie.internalFormat,Se,N,ie.normalized,ie.colorSpace,L.isXRRenderTarget===!0),q=gt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,ee,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,Y.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),rn(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),st(i.TEXTURE_CUBE_MAP,E);for(let j=0;j<6;j++)if(E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)_t(Y.__webglFramebuffer[j][ie],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else _t(Y.__webglFramebuffer[j],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);C(E)?w(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let j=0,ie=ae.length;j<ie;j++){const Se=ae[j],N=n.get(Se);let ee=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ee=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,N.__webglTexture),st(ee,Se),_t(Y.__webglFramebuffer,L,Se,i.COLOR_ATTACHMENT0+j,ee,0),C(Se)&&w(ee)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(j=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,pe.__webglTexture),st(j,E),E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)_t(Y.__webglFramebuffer[ie],L,E,i.COLOR_ATTACHMENT0,j,ie);else _t(Y.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,j,0);C(E)?w(j):E.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Gt(L)}function H(L){const E=L.textures;for(let Y=0,pe=E.length;Y<pe;Y++){const ae=E[Y];if(C(ae)&&ae.mipmapsAutoUpdate===!0){const ve=I(L),Ae=n.get(ae).__webglTexture;t.bindTexture(ve,Ae),w(ve),t.unbindTexture()}}}const Vt=[];function mt(L){if(L.samples>0){if(Te(L)===!1){const E=L.textures,Y=L.width,pe=L.height;let ae=i.COLOR_BUFFER_BIT;const ve=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(L),j=E.length>1;if(j)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const N=n.get(E[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,Y,pe,0,0,Y,pe,ae,i.NEAREST),u===!0&&(Vt.length=0,Vt.push(i.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Vt.push(ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const N=n.get(E[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&u){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function gt(L){return Math.min(r.maxSamples,L.samples)}function Te(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(L){const E=a.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function ze(L,E){const Y=L.colorSpace,pe=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==pn&&Y!==jn&&(rt.getTransfer(Y)===dt?(pe!==Nt||ae!==tn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",Y)),E}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=oe,this.getTextureUnits=he,this.setTextureUnits=De,this.setTexture2D=be,this.setTexture2DArray=Ie,this.setTexture3D=Fe,this.setTextureCube=de,this.rebindTextures=kt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Te,this.dispose=Q}function _g(i,e){function t(n,r=jn){let s;const a=rt.getTransfer(r);if(n===tn)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===so)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xl)return i.BYTE;if(n===Yl)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===io)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===Xt)return i.HALF_FLOAT;if(n===Kl)return i.ALPHA;if(n===$l)return i.RGB;if(n===Nt)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===mi)return i.RED;if(n===ao)return i.RED_INTEGER;if(n===on)return i.RG;if(n===oo)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===fs||n===ds||n===ps||n===ms)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===Sa||n===Ma||n===Ea)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===va)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===ba||n===Ta||n===Aa||n===wa||n===Ss||n===Ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ya||n===ba)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Aa)return s.COMPRESSED_R11_EAC;if(n===wa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ss)return s.COMPRESSED_RG11_EAC;if(n===Ra)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Ga||n===ka)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ca)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Wa||n===Xa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Va)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===qa||n===Ms||n===Za)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ya)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ms)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
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

}`;class Sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:xg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mg extends si{constructor(e,t){super();const n=this;let r=null,s=1,a=null,l="local-floor",u=1,c=null,f=null,m=null,d=null,_=null,S=null;const y=typeof XRWebGLBinding<"u",x=new Sg,p={},M=t.getContextAttributes();let C=null,w=null;const I=[],D=[],v=new Ze;let T=null,z=null;const U=new mn;U.viewport=new bt;const B=new mn;B.viewport=new bt;const X=[U,B],ne=new Lh;let F=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let be=I[se];return be===void 0&&(be=new ks,I[se]=be),be.getTargetRaySpace()},this.getControllerGrip=function(se){let be=I[se];return be===void 0&&(be=new ks,I[se]=be),be.getGripSpace()},this.getHand=function(se){let be=I[se];return be===void 0&&(be=new ks,I[se]=be),be.getHandSpace()};function te(se){const be=D.indexOf(se.inputSource);if(be===-1)return;const Ie=I[be];Ie!==void 0&&(Ie.update(se.inputSource,se.frame,c||a),Ie.dispatchEvent({type:se.type,data:se.inputSource}))}function K(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",me);for(let se=0;se<I.length;se++){const be=D[se];be!==null&&(D[se]=null,I[se].disconnect(be))}F=null,Q=null,x.reset();for(const se in p)delete p[se];if(e.setRenderTarget(C),_=null,d=null,m=null,r=null,w=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(v.width,v.height,!1),z!==null){const se=z.camera;se.fov=z.fov,se.zoom=z.zoom,se.updateProjectionMatrix(),z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){l=se,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",K),r.addEventListener("inputsourceschange",me),M.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Fe=null,de=null;M.depth&&(de=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=M.stencil?ti:ni,Fe=M.stencil?ki:wn);const ke={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};m=this.getBinding(),d=m.createProjectionLayer(ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new An(d.textureWidth,d.textureHeight,{format:Nt,type:tn,depthTexture:new Vi(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ie={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,Ie),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),w=new An(_.framebufferWidth,_.framebufferHeight,{format:Nt,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(u),c=null,a=await r.requestReferenceSpace(l),Be.setContext(r),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function me(se){for(let be=0;be<se.removed.length;be++){const Ie=se.removed[be],Fe=D.indexOf(Ie);Fe>=0&&(D[Fe]=null,I[Fe].disconnect(Ie))}for(let be=0;be<se.added.length;be++){const Ie=se.added[be];let Fe=D.indexOf(Ie);if(Fe===-1){for(let ke=0;ke<I.length;ke++)if(ke>=D.length){D.push(Ie),Fe=ke;break}else if(D[ke]===null){D[ke]=Ie,Fe=ke;break}if(Fe===-1)break}const de=I[Fe];de&&de.connect(Ie)}}function J(se,be){be===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(be.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let be=se.near,Ie=se.far;x.texture!==null&&(x.depthNear>0&&(be=x.depthNear),x.depthFar>0&&(Ie=x.depthFar)),ne.near=B.near=U.near=be,ne.far=B.far=U.far=Ie,(F!==ne.near||Q!==ne.far)&&(r.updateRenderState({depthNear:ne.near,depthFar:ne.far}),F=ne.near,Q=ne.far),ne.layers.mask=se.layers.mask|6,U.layers.mask=ne.layers.mask&-5,B.layers.mask=ne.layers.mask&-3;const Fe=se.parent,de=ne.cameras;J(ne,Fe);for(let ke=0;ke<de.length;ke++)J(de[ke],Fe);ne.projectionMatrix.copy(U.projectionMatrix),ne.projectionMatrixInverse.copy(U.projectionMatrixInverse),z===null&&se.isPerspectiveCamera&&(z={camera:se,fov:se.fov,zoom:se.zoom}),oe(se,ne,Fe)};function oe(se,be,Ie){Ie===null?se.matrix.copy(be.matrixWorld):(se.matrix.copy(Ie.matrixWorld),se.matrix.invert(),se.matrix.multiply(be.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(be.projectionMatrix),se.projectionMatrixInverse.copy(be.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=vr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(d===null&&_===null))return u},this.setFoveation=function(se){u=se,d!==null&&(d.fixedFoveation=se),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ne)},this.getCameraTexture=function(se){return p[se]};let he=null;function De(se,be){if(f=be.getViewerPose(c||a),S=be,f!==null){const Ie=f.views;_!==null&&(e.setRenderTargetFramebuffer(w,_.framebuffer),e.setRenderTarget(w));let Fe=!1;Ie.length!==ne.cameras.length&&(ne.cameras.length=0,Fe=!0);for(let He=0;He<Ie.length;He++){const st=Ie[He];let at=null;if(_!==null)at=_.getViewport(st);else{const Mt=m.getViewSubImage(d,st);at=Mt.viewport,He===0&&(e.setRenderTargetTextures(w,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(w))}let tt=X[He];tt===void 0&&(tt=new mn,tt.layers.enable(He),tt.viewport=new bt,X[He]=tt),tt.matrix.fromArray(st.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(st.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(at.x,at.y,at.width,at.height),He===0&&(ne.matrix.copy(tt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Fe===!0&&ne.cameras.push(tt)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){m=n.getBinding();const He=m.getDepthInformation(Ie[0]);He&&He.isValid&&He.texture&&x.init(He,r.renderState)}if(de&&de.includes("camera-access")&&y){e.state.unbindTexture(),m=n.getBinding();for(let He=0;He<Ie.length;He++){const st=Ie[He].camera;if(st){let at=p[st];at||(at=new fc,p[st]=at);const tt=m.getCameraImage(st);at.sourceTexture=tt}}}}for(let Ie=0;Ie<I.length;Ie++){const Fe=D[Ie],de=I[Ie];Fe!==null&&de!==void 0&&de.update(Fe,be,c||a)}he&&he(se,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),S=null}const Be=new xc;Be.setAnimationLoop(De),this.setAnimationLoop=function(se){he=se},this.dispose=function(){}}}const Eg=new pt,Rc=new $e;Rc.set(-1,0,0,0,1,0,0,0,1);function yg(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,dc(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,M,C,w){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(x,p):p.isMeshLambertMaterial?(s(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(x,p),m(x,p)):p.isMeshPhongMaterial?(s(x,p),f(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(x,p),d(x,p),p.isMeshPhysicalMaterial&&_(x,p,w)):p.isMeshMatcapMaterial?(s(x,p),S(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),y(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&l(x,p)):p.isPointsMaterial?u(x,p,M,C):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===Yt&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===Yt&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const M=e.get(p),C=M.envMap,w=M.envMapRotation;C&&(x.envMap.value=C,x.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(w)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Rc),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function l(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function u(x,p,M,C){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*M,x.scale.value=C*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function f(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function m(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function _(x,p,M){x.ior.value=p.ior,p.diffuseRoughness>0&&(x.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,p){p.matcap&&(x.matcap.value=p.matcap)}function y(x,p){const M=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function bg(i,e,t,n){let r={},s={};function a(M,C){const w=C.program;n.uniformBlockBinding(M,w,r[M.id])}function l(M,C){let w=r[M.id];w===void 0&&(S(M),w=u(M),r[M.id]=w,M.addEventListener("dispose",x));const I=C.program;n.updateUBOMapping(M,I);const D=e.render.frame;s[M.id]!==D&&(c(M),s[M.id]=D)}function u(M){const C=i.createBuffer(),w=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,w,I),i.bindBuffer(i.UNIFORM_BUFFER,null),C}function c(M){const C=r[M.id],w=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let D=0,v=w.length;D<v;D++){const T=w[D];if(Array.isArray(T))for(let z=0,U=T.length;z<U;z++)f(T[z],D,z,I);else f(T,D,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,C,w,I){if(d(M,C,w,I)===!0){const D=M.__offset,v=M.value;if(Array.isArray(v)){let T=0;for(let z=0;z<v.length;z++){const U=v[z],B=y(U,!0);m(U,M.__data,T),T+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else m(v,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,D,M.__data)}}function m(M,C,w){typeof M=="number"||typeof M=="boolean"?C[w]=M:M.isMatrix3?(C[w]=M.elements[0],C[w+1]=M.elements[1],C[w+2]=M.elements[2],C[w+3]=0,C[w+4]=M.elements[3],C[w+5]=M.elements[4],C[w+6]=M.elements[5],C[w+7]=0,C[w+8]=M.elements[6],C[w+9]=M.elements[7],C[w+10]=M.elements[8],C[w+11]=0):ArrayBuffer.isView(M)?C.set(M.subarray(0,C.length-w),w):M.toArray(C,w)}function d(M,C,w,I){const D=M.value,v=C+"_"+w;if(Array.isArray(D)){I[v]===void 0&&(I[v]=[]);const T=I[v];let z=!1;for(let U=0;U<D.length;U++)_(D[U],T,U)===!0&&(z=!0);return z}return _(D,I,v)}function _(M,C,w){if(C[w]===void 0)return typeof M=="number"||typeof M=="boolean"?C[w]=M:ArrayBuffer.isView(M)?C[w]=M.slice():C[w]=M.clone(),!0;{const I=C[w];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return C[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function S(M){const C=M.uniforms;let w=0;const I=16;for(let v=0,T=C.length;v<T;v++){const z=Array.isArray(C[v])?C[v]:[C[v]];for(let U=0,B=z.length;U<B;U++){const X=z[U],ne=Array.isArray(X.value)?X.value:[X.value],F=Array.isArray(C[v])||Array.isArray(X.value);let Q=w;for(let K=0,me=ne.length;K<me;K++){const J=ne[K],oe=y(J,F),he=w%I,De=he%oe.boundary,Be=he+De;w+=De,Be!==0&&I-Be<oe.storage&&(w+=I-Be),K===0&&(Q=w),w+=oe.storage}const te=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new te((w-Q)/Float32Array.BYTES_PER_ELEMENT),X.__offset=Q}}const D=w%I;return D>0&&(w+=I-D),M.__size=w,M.__cache={},this}function y(M,C){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",M),C===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function x(M){const C=M.target;C.removeEventListener("dispose",x),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);r={},s={}}return{bind:a,update:l,dispose:p}}const Tg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function Ag(){return yn===null&&(yn=new bs(Tg,16,16,on,Xt),yn.name="DFG_LUT",yn.minFilter=Rt,yn.magFilter=Rt,yn.wrapS=_n,yn.wrapT=_n,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class wg{constructor(e={}){const{canvas:t=bu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:_=tn}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;const y=_,x=new Set([lo,oo,ao]),p=new Set([tn,wn,_r,ki,ro,so]),M=new Uint32Array(4),C=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let I=null,D=null;const v=[],T=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1,X=null,ne=null,F=null,Q=null;this._outputColorSpace=Jt;let te=0,K=0,me=null,J=-1,oe=null;const he=new bt,De=new bt;let Be=null;const se=new it(0);let be=0,Ie=t.width,Fe=t.height,de=1,ke=null,ht=null;const He=new bt(0,0,Ie,Fe),st=new bt(0,0,Ie,Fe);let at=!1;const tt=new Mr,Mt=new po;let St=!1,Lt=!1;const _t=new pt,rn=new W,Et=new bt,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Zt(){return me===null?de:1}let H=n;function Vt(o,g){return t.getContext(o,g)}let mt,gt,Te,yt,ze,qe,L,E,Y,pe,ae,ve,Ae,j,ie,Se,N,ee,q,Ee,ge,Me,Ue;try{const o={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${to}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),H===null){const g="webgl2";if(H=Vt(g,o),H===null)throw Vt(g)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(o){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),lt("WebGLRenderer: "+o.message),o}function Je(){mt=new Pp(H),mt.init(),ge=new _g(H,mt),gt=new vp(H,mt,e,ge),Te=new mg(H,mt),gt.reversedDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),ne=H.createFramebuffer(),F=H.createFramebuffer(),Q=H.createFramebuffer(),yt=new Ip(H),ze=new tg,qe=new gg(H,mt,Te,ze,gt,ge,yt),L=new Cp(U),E=new Nh(H),Me=new _p(H,E),Y=new Lp(H,E,yt,Me),pe=new Up(H,Y,E,Me,yt),ee=new Np(H,gt,qe),ie=new Sp(ze),ae=new eg(U,L,mt,gt,Me,ie),ve=new yg(U,ze),Ae=new ig,j=new cg(mt),N=new gp(U,L,Te,pe,S,u),Se=new pg(U,pe,gt),Ue=new bg(H,yt,gt,Te),q=new xp(H,mt,yt),Ee=new Dp(H,mt,yt),yt.programs=ae.programs,U.capabilities=gt,U.extensions=mt,U.properties=ze,U.renderLists=Ae,U.shadowMap=Se,U.state=Te,U.info=yt}y!==tn&&(z=new Op(y,t.width,t.height,l,r,s));const _e=new Mg(U,H);this.xr=_e,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const o=mt.get("WEBGL_lose_context");o&&o.loseContext()},this.forceContextRestore=function(){const o=mt.get("WEBGL_lose_context");o&&o.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(o){o!==void 0&&(de=o,this.setSize(Ie,Fe,!1))},this.getSize=function(o){return o.set(Ie,Fe)},this.setSize=function(o,g,b=!0){if(_e.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=o,Fe=g,t.width=Math.floor(o*de),t.height=Math.floor(g*de),b===!0&&(t.style.width=o+"px",t.style.height=g+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,o,g)},this.getDrawingBufferSize=function(o){return o.set(Ie*de,Fe*de).floor()},this.setDrawingBufferSize=function(o,g,b){Ie=o,Fe=g,de=b,t.width=Math.floor(o*b),t.height=Math.floor(g*b),this.setViewport(0,0,o,g)},this.setEffects=function(o){if(y===tn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(o){for(let g=0;g<o.length;g++)if(o[g].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(o||[])},this.getCurrentViewport=function(o){return o.copy(he)},this.getViewport=function(o){return o.copy(He)},this.setViewport=function(o,g,b,A){o.isVector4?He.set(o.x,o.y,o.z,o.w):He.set(o,g,b,A),Te.viewport(he.copy(He).multiplyScalar(Zt()).round())},this.getScissor=function(o){return o.copy(st)},this.setScissor=function(o,g,b,A){o.isVector4?st.set(o.x,o.y,o.z,o.w):st.set(o,g,b,A),Te.scissor(De.copy(st).multiplyScalar(Zt()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(o){Te.setScissorTest(at=o)},this.setOpaqueSort=function(o){ke=o},this.setTransparentSort=function(o){ht=o},this.getClearColor=function(o){return o.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(o=!0,g=!0,b=!0){let A=0;if(o){let P=!1;if(me!==null){const R=me.texture.format;P=x.has(R)}if(P){const R=me.texture.type,k=p.has(R),O=N.getClearColor(),G=N.getClearAlpha(),V=O.r,re=O.g,Z=O.b;k?(M[0]=V,M[1]=re,M[2]=Z,M[3]=G,H.clearBufferuiv(H.COLOR,0,M)):(C[0]=V,C[1]=re,C[2]=Z,C[3]=G,H.clearBufferiv(H.COLOR,0,C))}else A|=H.COLOR_BUFFER_BIT}g&&(A|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),b&&(A|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A!==0&&H.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(o){o.setRenderer(this),X=o},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),N.dispose(),Ae.dispose(),j.dispose(),qe.dispose(),ze.dispose(),L.dispose(),pe.dispose(),Y.dispose(),Me.dispose(),Ue.dispose(),ae.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Zi),_e.removeEventListener("sessionend",Lr),Cn.stop()};function Oe(o){o.preventDefault(),Co("WebGLRenderer: Context Lost."),B=!0}function Ke(){Co("WebGLRenderer: Context Restored."),B=!1;const o=yt.autoReset,g=Se.enabled,b=Se.autoUpdate,A=Se.needsUpdate,P=Se.type;Je(),yt.autoReset=o,Se.enabled=g,Se.autoUpdate=b,Se.needsUpdate=A,Se.type=P}function Ce(o){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",o.statusMessage)}function ct(o){const g=o.target;g.removeEventListener("dispose",ct),Tt(g)}function Tt(o){vn(o),ze.remove(o)}function vn(o){const g=ze.get(o).programs;g!==void 0&&(g.forEach(function(b){ae.releaseProgram(b)}),o.isShaderMaterial&&ae.releaseShaderCache(o))}this.renderBufferDirect=function(o,g,b,A,P,R){g===null&&(g=Gt);const k=P.isMesh&&P.matrixWorld.determinantAffine()<0,O=Fr(o,g,b,A,P);Te.setMaterial(A,k);let G=b.index,V=1;if(A.wireframe===!0){if(G=Y.getWireframeAttribute(b),G===void 0)return;V=2}const re=b.drawRange,Z=b.attributes.position;let $=re.start*V,ce=(re.start+re.count)*V;R!==null&&($=Math.max($,R.start*V),ce=Math.min(ce,(R.start+R.count)*V)),G!==null?($=Math.max($,0),ce=Math.min(ce,G.count)):Z!=null&&($=Math.max($,0),ce=Math.min(ce,Z.count));const ue=ce-$;if(ue<0||ue===1/0)return;Me.setup(P,A,O,b,G);let fe,ye=q;if(G!==null&&(fe=E.get(G),ye=Ee,ye.setIndex(fe)),P.isMesh)A.wireframe===!0?(Te.setLineWidth(A.wireframeLinewidth*Zt()),ye.setMode(H.LINES)):ye.setMode(H.TRIANGLES);else if(P.isLine){let Ge=A.linewidth;Ge===void 0&&(Ge=1),Te.setLineWidth(Ge*Zt()),P.isLineSegments?ye.setMode(H.LINES):P.isLineLoop?ye.setMode(H.LINE_LOOP):ye.setMode(H.LINE_STRIP)}else P.isPoints?ye.setMode(H.POINTS):P.isSprite&&ye.setMode(H.TRIANGLES);if(P.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ye.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Ge=P._multiDrawStarts,le=P._multiDrawCounts,We=P._multiDrawCount,xe=G?E.get(G).bytesPerElement:1,Re=ze.get(A).currentProgram.getUniforms();for(let Pe=0;Pe<We;Pe++)Re.setValue(H,"_gl_DrawID",Pe),ye.render(Ge[Pe]/xe,le[Pe])}else if(P.isInstancedMesh)ye.renderInstances($,ue,P.count);else if(b.isInstancedBufferGeometry){const Ge=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,le=Math.min(b.instanceCount,Ge);ye.renderInstances($,ue,le)}else ye.render($,ue)};function Pr(o,g,b,A){X!==null&&o.isNodeMaterial&&X.setObject(A,o),St===!0&&ie.setState(o,b,!1),o.transparent===!0&&o.side===On&&o.forceSinglePass===!1?(o.side=Yt,o.needsUpdate=!0,Sn(o,g,A),o.side=xi,o.needsUpdate=!0,Sn(o,g,A),o.side=On):Sn(o,g,A)}this.compile=function(o,g,b=null){b===null&&(b=o),X!==null&&X.renderStart(o,g,b),D=j.get(b),D.init(g),T.push(D),b.traverseVisible(function(P){P.isLight&&P.layers.test(g.layers)&&(D.pushLight(P),P.castShadow&&D.pushShadow(P))}),o!==b&&o.traverseVisible(function(P){P.isLight&&P.layers.test(g.layers)&&(D.pushLight(P),P.castShadow&&D.pushShadow(P))}),D.setupLights(),X!==null&&X.updateLights(D.state.lightsArray),Lt=this.localClippingEnabled,St=ie.init(this.clippingPlanes,Lt),St===!0&&ie.setGlobalState(this.clippingPlanes,g),X!==null&&Se.render(D.state.shadowsArray,b,g);const A=new Set;return o.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const R=P.material;if(R)if(Array.isArray(R))for(let k=0;k<R.length;k++){const O=R[k];Pr(O,b,g,P),A.add(O)}else Pr(R,b,g,P),A.add(R)}),D=T.pop(),X!==null&&X.renderEnd(),A},this.compileAsync=function(o,g,b=null){const A=this.compile(o,g,b);return new Promise(P=>{function R(){if(A.forEach(function(k){const G=ze.get(k).currentProgram;(G===void 0||G.isReady())&&A.delete(k)}),A.size===0){P(o);return}setTimeout(R,10)}mt.get("KHR_parallel_shader_compile")!==null?R():setTimeout(R,10)})};let qi=null;function Ls(o){qi&&qi(o)}function Zi(){Cn.stop()}function Lr(){Cn.start()}const Cn=new xc;Cn.setAnimationLoop(Ls),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(o){qi=o,_e.setAnimationLoop(o),o===null?Cn.stop():Cn.start()},_e.addEventListener("sessionstart",Zi),_e.addEventListener("sessionend",Lr),this.render=function(o,g){if(g!==void 0&&g.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;X!==null&&X.renderStart(o,g);const b=_e.enabled===!0&&_e.isPresenting===!0,A=z!==null&&(me===null||b)&&z.begin(U,me);if(o.matrixWorldAutoUpdate===!0&&o.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(g),g=_e.getCamera()),o.isScene===!0&&o.onBeforeRender(U,o,g,me),D=j.get(o,T.length),D.init(g),D.state.textureUnits=qe.getTextureUnits(),T.push(D),_t.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),g.isArrayCamera?Mt.setFromArrayCamera(g):tt.setFromProjectionMatrix(_t,xn,g.reversedDepth),Lt=this.localClippingEnabled,St=ie.init(this.clippingPlanes,Lt),I=Ae.get(o,v.length),I.init(),v.push(I),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){const k=U.xr.getDepthSensingMesh();k!==null&&Ki(k,g,-1/0,U.sortObjects)}Ki(o,g,0,U.sortObjects),I.finish(),X!==null&&X.updateLights(D.state.lightsArray),U.sortObjects===!0&&I.sort(ke,ht),kt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,kt&&N.addToRenderList(I,o),this.info.autoReset===!0&&this.info.reset(),St===!0&&ie.beginShadows();const P=D.state.shadowsArray;if(Se.render(P,o,g),St===!0&&ie.endShadows(),(A&&z.hasRenderPass())===!1){const k=I.opaque,O=I.transmissive;if(D.setupLights(),g.isArrayCamera){const G=g.cameras;if(O.length>0)for(let V=0,re=G.length;V<re;V++){const Z=G[V];Dr(k,O,o,Z)}kt&&N.render(o);for(let V=0,re=G.length;V<re;V++){const Z=G[V];$i(I,o,Z,Z.viewport)}}else O.length>0&&Dr(k,O,o,g),kt&&N.render(o),$i(I,o,g)}me!==null&&K===0&&(qe.updateMultisampleRenderTarget(me),qe.updateRenderTargetMipmap(me)),A&&z.end(U),o.isScene===!0&&o.onAfterRender(U,o,g),Me.resetDefaultState(),J=-1,oe=null,T.pop(),T.length>0?(D=T[T.length-1],qe.setTextureUnits(D.state.textureUnits),St===!0&&ie.setGlobalState(U.clippingPlanes,D.state.camera)):D=null,v.pop(),v.length>0?I=v[v.length-1]:I=null,X!==null&&X.renderEnd()};function Ki(o,g,b,A){if(o.visible===!1)return;if(o.layers.test(g.layers)){if(o.isGroup)b=o.renderOrder;else if(o.isLOD)o.autoUpdate===!0&&o.update(g);else if(o.isLight)D.pushLight(o),o.castShadow&&D.pushShadow(o);else if(o.isSprite){const k=g.isArrayCamera?Mt:tt;if(!o.frustumCulled||o.intersectsFrustum(k)){A&&Et.setFromMatrixPosition(o.matrixWorld).applyMatrix4(_t);const O=pe.update(o),G=o.material;G.visible&&I.push(o,O,G,b,Et.z,null,g)}}else if(o.isMesh||o.isLine||o.isPoints){const k=g.isArrayCamera?Mt:tt;if(!o.frustumCulled||o.intersectsFrustum(k)){const O=pe.update(o),G=o.material;if(A&&(o.boundingSphere!==void 0?(o.boundingSphere===null&&o.computeBoundingSphere(),Et.copy(o.boundingSphere.center)):(O.boundingSphere===null&&O.computeBoundingSphere(),Et.copy(O.boundingSphere.center)),Et.applyMatrix4(o.matrixWorld).applyMatrix4(_t)),Array.isArray(G)){const V=O.groups;for(let re=0,Z=V.length;re<Z;re++){const $=V[re],ce=G[$.materialIndex];ce&&ce.visible&&I.push(o,O,ce,b,Et.z,$,g)}}else G.visible&&I.push(o,O,G,b,Et.z,null,g)}}}const R=o.children;for(let k=0,O=R.length;k<O;k++)Ki(R[k],g,b,A)}function $i(o,g,b,A){const{opaque:P,transmissive:R,transparent:k}=o;D.setupLightsView(b),St===!0&&ie.setGlobalState(U.clippingPlanes,b),A&&Te.viewport(he.copy(A)),P.length>0&&oi(P,g,b),R.length>0&&oi(R,g,b),k.length>0&&oi(k,g,b),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Dr(o,g,b,A){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[A.id]===void 0){const $=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[A.id]=new An(1,1,{generateMipmaps:!0,type:$?Xt:tn,minFilter:zn,samples:Math.max(4,gt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const R=D.state.transmissionRenderTarget[A.id],k=A.viewport||he;R.setSize(k.z*U.transmissionResolutionScale,k.w*U.transmissionResolutionScale);const O=U.getRenderTarget(),G=U.getActiveCubeFace(),V=U.getActiveMipmapLevel();U.setRenderTarget(R),U.getClearColor(se),be=U.getClearAlpha(),be<1&&U.setClearColor(16777215,.5),U.clear(),kt&&N.render(b);const re=U.toneMapping;U.toneMapping=Gn;const Z=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),D.setupLightsView(A),St===!0&&ie.setGlobalState(U.clippingPlanes,A),oi(o,b,A),qe.updateMultisampleRenderTarget(R),qe.updateRenderTargetMipmap(R),mt.has("WEBGL_multisampled_render_to_texture")===!1){let $=!1;for(let ce=0,ue=g.length;ce<ue;ce++){const fe=g[ce],{object:ye,geometry:Ge,material:le,group:We}=fe;if(le.side===On&&ye.layers.test(A.layers)){const xe=le.side;le.side=Yt,le.needsUpdate=!0,Ir(ye,b,A,Ge,le,We),le.side=xe,le.needsUpdate=!0,$=!0}}$===!0&&(qe.updateMultisampleRenderTarget(R),qe.updateRenderTargetMipmap(R))}U.setRenderTarget(O,G,V),U.setClearColor(se,be),Z!==void 0&&(A.viewport=Z),U.toneMapping=re}function oi(o,g,b){const A=g.isScene===!0?g.overrideMaterial:null;for(let P=0,R=o.length;P<R;P++){const k=o[P],{object:O,geometry:G,group:V}=k;let re=k.material;re.allowOverride===!0&&A!==null&&(re=A),O.layers.test(b.layers)&&Ir(O,g,b,G,re,V)}}function Ir(o,g,b,A,P,R){X!==null&&P.isNodeMaterial&&X.setObject(o,P),o.onBeforeRender(U,g,b,A,P,R),o.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,o.matrixWorld),o.normalMatrix.getNormalMatrix(o.modelViewMatrix),P.onBeforeRender(U,g,b,A,o,R),P.transparent===!0&&P.side===On&&P.forceSinglePass===!1?(P.side=Yt,P.needsUpdate=!0,U.renderBufferDirect(b,g,A,P,o,R),P.side=xi,P.needsUpdate=!0,U.renderBufferDirect(b,g,A,P,o,R),P.side=On):U.renderBufferDirect(b,g,A,P,o,R),o.onAfterRender(U,g,b,A,P,R)}function Nr(o){let g=0;for(const b of o)b.texture!==null&&g++;return g}function Sn(o,g,b){g.isScene!==!0&&(g=Gt);const A=ze.get(o),P=D.state.lights,R=D.state.shadowsArray,k=P.state.version,O=ae.getParameters(o,P.state,R,g,b,D.state.lightProbeGridArray),G=ae.getProgramCacheKey(O);let V=A.programs;A.environment=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?g.environment:null,A.fog=g.fog;const re=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap;A.envMap=L.get(o.envMap||A.environment,re),A.envMapRotation=A.environment!==null&&o.envMap===null?g.environmentRotation:o.envMapRotation,V===void 0&&(o.addEventListener("dispose",ct),V=new Map,A.programs=V,A.programVariants=new Map);let Z=V.get(G);if(Z!==void 0){if(A.currentProgram===Z&&A.lightsStateVersion===k)return li(o,O),Z}else O.uniforms=ae.getUniforms(o),X!==null&&o.isNodeMaterial&&X.build(o,b,O),o.onBeforeCompile(O,U),Z=ae.acquireProgram(O,G),V.set(G,Z),A.uniforms=O.uniforms;const $=A.uniforms;return(!o.isShaderMaterial&&!o.isRawShaderMaterial||o.clipping===!0)&&($.clippingPlanes=ie.uniform),li(o,O),A.needsLights=Kt(o),A.lightsStateVersion=k,A.needsLights&&($.ambientLightColor.value=P.state.ambient,$.lightProbe.value=P.state.probe,$.sunLights.value=P.state.sun,$.sunLightShadows.value=P.state.sunShadow,$.directionalLights.value=P.state.directional,$.directionalLightShadows.value=P.state.directionalShadow,$.spotLights.value=P.state.spot,$.spotLightShadows.value=P.state.spotShadow,$.rectAreaLights.value=P.state.rectArea,$.ltc_1.value=P.state.rectAreaLTC1,$.ltc_2.value=P.state.rectAreaLTC2,$.pointLights.value=P.state.point,$.pointLightShadows.value=P.state.pointShadow,$.hemisphereLights.value=P.state.hemi,$.sunShadowMatrix.value=P.state.sunShadowMatrix,$.sunShadowCascade.value=P.state.sunShadowCascade,$.directionalShadowMatrix.value=P.state.directionalShadowMatrix,$.spotLightMatrix.value=P.state.spotLightMatrix,$.spotLightMap.value=P.state.spotLightMap,$.pointShadowMatrix.value=P.state.pointShadowMatrix),A.numLightProbeGrids=Nr(D.state.lightProbeGridArray),A.currentProgram=Z,A.uniformsList=null,Z}function Mi(o,g,b,A,P){const R=ze.get(o),k=R.currentProgram.id+","+A+","+P;let O=R.programVariants.get(k);return O===void 0?(O=Sn(o,g,b),R.programVariants.set(k,O)):(R.currentProgram=O,R.uniformsList=null,R.outputColorSpace=A,R.toneMapping=P),O}function Ur(o){if(o.uniformsList===null){const g=o.currentProgram.getUniforms();o.uniformsList=_s.seqWithValue(g.seq,o.uniforms)}return o.uniformsList}function li(o,g){const b=ze.get(o);b.outputColorSpace=g.outputColorSpace,b.batching=g.batching,b.batchingColor=g.batchingColor,b.instancing=g.instancing,b.instancingColor=g.instancingColor,b.instancingMorph=g.instancingMorph,b.skinning=g.skinning,b.morphTargets=g.morphTargets,b.morphNormals=g.morphNormals,b.morphColors=g.morphColors,b.morphTargetsCount=g.morphTargetsCount,b.numClippingPlanes=g.numClippingPlanes,b.numIntersection=g.numClipIntersection,b.vertexAlphas=g.vertexAlphas,b.vertexTangents=g.vertexTangents,b.toneMapping=g.toneMapping}function Fr(o,g,b,A,P){g.isScene!==!0&&(g=Gt),qe.resetTextureUnits();const R=g.fog,k=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?g.environment:null,O=me===null?U.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:rt.workingColorSpace,G=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,V=L.get(A.envMap||k,G),re=A.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,Z=!!b.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),$=!!b.morphAttributes.position,ce=!!b.morphAttributes.normal,ue=!!b.morphAttributes.color;let fe=Gn;A.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(fe=U.toneMapping);const ye=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,Ge=ye!==void 0?ye.length:0,le=ze.get(A),We=D.state.lights;if(St===!0&&(Lt===!0||o!==oe)){const Xe=o===oe&&A.id===J;ie.setState(A,o,Xe)}let xe=!1,Re=!1;A.version===le.__version?le.needsLights&&le.lightsStateVersion!==We.state.version||P.isBatchedMesh&&le.batching===!1||!P.isBatchedMesh&&le.batching===!0||P.isBatchedMesh&&le.batchingColor===!0&&P._colorsTexture===null||P.isBatchedMesh&&le.batchingColor===!1&&P._colorsTexture!==null||P.isInstancedMesh&&le.instancing===!1||!P.isInstancedMesh&&le.instancing===!0||P.isSkinnedMesh&&le.skinning===!1||!P.isSkinnedMesh&&le.skinning===!0||P.isInstancedMesh&&le.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&le.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&le.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&le.instancingMorph===!1&&P.morphTexture!==null||le.envMap!==V||A.fog===!0&&le.fog!==R||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==ie.numPlanes||le.numIntersection!==ie.numIntersection)||le.vertexAlphas!==re||le.vertexTangents!==Z||le.morphTargets!==$||le.morphNormals!==ce||le.morphColors!==ue||le.morphTargetsCount!==Ge||le.numLightProbeGrids!==Nr(D.state.lightProbeGridArray)?xe=!0:(le.outputColorSpace!==O||le.toneMapping!==fe)&&(Re=!0):(xe=!0,le.__version=A.version);let Pe=le.currentProgram;(xe===!0||Re===!0)&&(Pe=Re===!0?Mi(A,g,P,O,fe):Sn(A,g,P),X&&A.isNodeMaterial&&X.onUpdateProgram(A,Pe,le));let ot=!1,Qe=!1,Ve=!1;const Ne=Pe.getUniforms(),nt=le.uniforms;if(Te.useProgram(Pe.program)&&(ot=!0,Qe=!0,Ve=!0),A.id!==J&&(J=A.id,Qe=!0),ot||oe!==o){Te.buffers.depth.getReversed()&&o.reversedDepth!==!0&&(o._reversedDepth=!0,o.updateProjectionMatrix()),Ne.setValue(H,"projectionMatrix",o.projectionMatrix),Ne.setValue(H,"viewMatrix",o.matrixWorldInverse);const ft=Ne.map.cameraPosition;ft!==void 0&&ft.setValue(H,rn.setFromMatrixPosition(o.matrixWorld)),gt.logarithmicDepthBuffer&&Ne.setValue(H,"logDepthBufFC",2/(Math.log(o.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&Ne.setValue(H,"isOrthographic",o.isOrthographicCamera===!0),oe!==o&&(oe=o,Qe=!0,Ve=!0)}if(le.needsLights&&(We.state.sunShadowMap.length>0&&Ne.setValue(H,"sunShadowMap",We.state.sunShadowMap,qe),We.state.directionalShadowMap.length>0&&Ne.setValue(H,"directionalShadowMap",We.state.directionalShadowMap,qe),We.state.spotShadowMap.length>0&&Ne.setValue(H,"spotShadowMap",We.state.spotShadowMap,qe),We.state.pointShadowMap.length>0&&Ne.setValue(H,"pointShadowMap",We.state.pointShadowMap,qe)),P.isSkinnedMesh){Ne.setOptional(H,P,"bindMatrix"),Ne.setOptional(H,P,"bindMatrixInverse");const Xe=P.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Ne.setValue(H,"boneTexture",Xe.boneTexture,qe))}P.isBatchedMesh&&(Ne.setOptional(H,P,"batchingTexture"),Ne.setValue(H,"batchingTexture",P._matricesTexture,qe),Ne.setOptional(H,P,"batchingIdTexture"),Ne.setValue(H,"batchingIdTexture",P._indirectTexture,qe),Ne.setOptional(H,P,"batchingColorTexture"),P._colorsTexture!==null&&Ne.setValue(H,"batchingColorTexture",P._colorsTexture,qe));const xt=b.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&ee.update(P,b,Pe),(Qe||le.receiveShadow!==P.receiveShadow)&&(le.receiveShadow=P.receiveShadow,Ne.setValue(H,"receiveShadow",P.receiveShadow)),(A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial)&&A.envMap===null&&g.environment!==null&&(nt.envMapIntensity.value=g.environmentIntensity),nt.dfgLUT!==void 0&&(nt.dfgLUT.value=Ag()),Qe){if(Ne.setValue(H,"toneMappingExposure",U.toneMappingExposure),le.needsLights&&Dt(nt,Ve),R&&A.fog===!0&&ve.refreshFogUniforms(nt,R),ve.refreshMaterialUniforms(nt,A,de,Fe,D.state.transmissionRenderTarget[o.id]),le.needsLights&&le.numLightProbeGrids>0){const Xe=w;let ft=0;for(const Ot of D.state.lightProbeGridArray)Ot.texture!==null&&(Xe.textures[ft]=Ot.texture,Xe.min[ft]=Ot.boundingBox.min,Xe.max[ft]=Ot.boundingBox.max,Xe.resolution[ft]=Ot.resolution,ft++);for(const Ot in Xe)Xe[Ot].length=ft;nt.probesSH.value=Xe.textures,nt.probesMin.value=Xe.min,nt.probesMax.value=Xe.max,nt.probesResolution.value=Xe.resolution}_s.upload(H,Ur(le),nt,qe)}if(A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(_s.upload(H,Ur(le),nt,qe),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&Ne.setValue(H,"center",P.center),Ne.setValue(H,"modelViewMatrix",P.modelViewMatrix),Ne.setValue(H,"normalMatrix",P.normalMatrix),Ne.setValue(H,"modelMatrix",P.matrixWorld),A.uniformsGroups!==void 0){const Xe=A.uniformsGroups;for(let ft=0,Ot=Xe.length;ft<Ot;ft++){const Xn=Xe[ft];Ue.update(Xn,Pe),Ue.bind(Xn,Pe)}}return Pe}function Dt(o,g){o.ambientLightColor.needsUpdate=g,o.lightProbe.needsUpdate=g,o.sunLights.needsUpdate=g,o.sunLightShadows.needsUpdate=g,o.directionalLights.needsUpdate=g,o.directionalLightShadows.needsUpdate=g,o.pointLights.needsUpdate=g,o.pointLightShadows.needsUpdate=g,o.spotLights.needsUpdate=g,o.spotLightShadows.needsUpdate=g,o.rectAreaLights.needsUpdate=g,o.hemisphereLights.needsUpdate=g}function Kt(o){return o.isMeshLambertMaterial||o.isMeshToonMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isShadowMaterial||o.isShaderMaterial&&o.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(o,g,b){const A=ze.get(o);A.__autoAllocateDepthBuffer=o.resolveDepthBuffer===!1,A.__autoAllocateDepthBuffer===!1&&(A.__useRenderToTexture=!1),ze.get(o.texture).__webglTexture=g,ze.get(o.depthTexture).__webglTexture=A.__autoAllocateDepthBuffer?void 0:b,A.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(o,g){const b=ze.get(o);b.__webglFramebuffer=g,b.__useDefaultFramebuffer=g===void 0},this.setRenderTarget=function(o,g=0,b=0){me=o,te=g,K=b;let A=null,P=!1,R=!1;if(o){const O=ze.get(o);if(O.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(H.FRAMEBUFFER,O.__webglFramebuffer),he.copy(o.viewport),De.copy(o.scissor),Be=o.scissorTest,Te.viewport(he),Te.scissor(De),Te.setScissorTest(Be),J=-1;return}else if(O.__webglFramebuffer===void 0)qe.setupRenderTarget(o);else if(O.__hasExternalTextures)qe.rebindTextures(o,ze.get(o.texture).__webglTexture,ze.get(o.depthTexture).__webglTexture);else if(o.depthBuffer){const re=o.depthTexture;if(O.__boundDepthTexture!==re){if(re!==null&&ze.has(re)&&(o.width!==re.image.width||o.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(o)}}const G=o.texture;(G.isData3DTexture||G.isDataArrayTexture||G.isCompressedArrayTexture)&&(R=!0);const V=ze.get(o).__webglFramebuffer;o.isWebGLCubeRenderTarget?(Array.isArray(V[g])?A=V[g][b]:A=V[g],P=!0):o.samples>0&&qe.useMultisampledRTT(o)===!1?A=ze.get(o).__webglMultisampledFramebuffer:Array.isArray(V)?A=V[b]:A=V,he.copy(o.viewport),De.copy(o.scissor),Be=o.scissorTest}else he.copy(He).multiplyScalar(de).floor(),De.copy(st).multiplyScalar(de).floor(),Be=at;if(b!==0&&(A=ne),Te.bindFramebuffer(H.FRAMEBUFFER,A)&&Te.drawBuffers(o,A),Te.viewport(he),Te.scissor(De),Te.setScissorTest(Be),P){const O=ze.get(o.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+g,O.__webglTexture,b)}else if(R){const O=g;for(let G=0;G<o.textures.length;G++){const V=ze.get(o.textures[G]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+G,V.__webglTexture,b,O)}}else if(o!==null&&b!==0){const O=ze.get(o.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,O.__webglTexture,b)}J=-1};function h(o){const g=ze.get(o);return(g.__readFormat!==o.format||g.__readType!==o.type)&&(g.__readFormat=o.format,g.__readType=o.type,g.__formatReadable=gt.textureFormatReadable(o.format),g.__typeReadable=gt.textureTypeReadable(o.type)),g}this.readRenderTargetPixels=function(o,g,b,A,P,R,k,O=0){if(!(o&&o.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let G=ze.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&k!==void 0&&(G=G[k],Array.isArray(G)&&(G=G[0])),G){Te.bindFramebuffer(H.FRAMEBUFFER,G);try{const V=o.textures[O],re=V.format,Z=V.type;o.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+O);const $=h(V);if($.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}g>=0&&g<=o.width-A&&b>=0&&b<=o.height-P&&H.readPixels(g,b,A,P,ge.convert(re),ge.convert(Z),R)}finally{const V=me!==null?ze.get(me).__webglFramebuffer:null;Te.bindFramebuffer(H.FRAMEBUFFER,V)}}},this.readRenderTargetPixelsAsync=async function(o,g,b,A,P,R,k,O=0){if(!(o&&o.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let G=ze.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&k!==void 0&&(G=G[k],Array.isArray(G)&&(G=G[0])),G)if(g>=0&&g<=o.width-A&&b>=0&&b<=o.height-P){Te.bindFramebuffer(H.FRAMEBUFFER,G);const V=o.textures[O],re=V.format,Z=V.type;o.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+O);const $=h(V);if($.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.bufferData(H.PIXEL_PACK_BUFFER,R.byteLength,H.STREAM_READ),H.readPixels(g,b,A,P,ge.convert(re),ge.convert(Z),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const ue=me!==null?ze.get(me).__webglFramebuffer:null;Te.bindFramebuffer(H.FRAMEBUFFER,ue);const fe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Tu(H,fe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,R),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ce),H.deleteSync(fe),R}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(o,g=null,b=0){const A=Math.pow(2,-b),P=Math.floor(o.image.width*A),R=Math.floor(o.image.height*A),k=g!==null?g.x:0,O=g!==null?g.y:0;qe.setTexture2D(o,0),H.copyTexSubImage2D(H.TEXTURE_2D,b,0,0,k,O,P,R),Te.unbindTexture()},this.copyTextureToTexture=function(o,g,b=null,A=null,P=0,R=0){let k,O,G,V,re,Z,$,ce,ue;const fe=o.isCompressedTexture?o.mipmaps[R]:o.image;if(b!==null)k=b.max.x-b.min.x,O=b.max.y-b.min.y,G=b.isBox3?b.max.z-b.min.z:1,V=b.min.x,re=b.min.y,Z=b.isBox3?b.min.z:0;else{const Ne=Math.pow(2,-P);k=Math.floor(fe.width*Ne),O=Math.floor(fe.height*Ne),o.isDataArrayTexture?G=fe.depth:o.isData3DTexture?G=Math.floor(fe.depth*Ne):G=1,V=0,re=0,Z=0}A!==null?($=A.x,ce=A.y,ue=A.z):($=0,ce=0,ue=0);const ye=ge.convert(g.format),Ge=ge.convert(g.type);let le;g.isData3DTexture?(qe.setTexture3D(g,0),le=H.TEXTURE_3D):g.isDataArrayTexture||g.isCompressedArrayTexture?(qe.setTexture2DArray(g,0),le=H.TEXTURE_2D_ARRAY):(qe.setTexture2D(g,0),le=H.TEXTURE_2D),Te.activeTexture(H.TEXTURE0),Te.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,g.flipY),Te.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),Te.pixelStorei(H.UNPACK_ALIGNMENT,g.unpackAlignment);const We=Te.getParameter(H.UNPACK_ROW_LENGTH),xe=Te.getParameter(H.UNPACK_IMAGE_HEIGHT),Re=Te.getParameter(H.UNPACK_SKIP_PIXELS),Pe=Te.getParameter(H.UNPACK_SKIP_ROWS),ot=Te.getParameter(H.UNPACK_SKIP_IMAGES);Te.pixelStorei(H.UNPACK_ROW_LENGTH,fe.width),Te.pixelStorei(H.UNPACK_IMAGE_HEIGHT,fe.height),Te.pixelStorei(H.UNPACK_SKIP_PIXELS,V),Te.pixelStorei(H.UNPACK_SKIP_ROWS,re),Te.pixelStorei(H.UNPACK_SKIP_IMAGES,Z);const Qe=o.isDataArrayTexture||o.isData3DTexture,Ve=g.isDataArrayTexture||g.isData3DTexture;if(o.isDepthTexture){const Ne=ze.get(o),nt=ze.get(g),xt=ze.get(Ne.__renderTarget),Xe=ze.get(nt.__renderTarget);Te.bindFramebuffer(H.READ_FRAMEBUFFER,xt.__webglFramebuffer),Te.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let ft=0;ft<G;ft++)Qe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.get(o).__webglTexture,P,Z+ft),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.get(g).__webglTexture,R,ue+ft)),H.blitFramebuffer(V,re,V+k,re+O,$,ce,$+k,ce+O,H.DEPTH_BUFFER_BIT,H.NEAREST);Te.bindFramebuffer(H.READ_FRAMEBUFFER,null),Te.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(P!==0||o.isRenderTargetTexture||ze.has(o)){const Ne=ze.get(o),nt=ze.get(g);Te.bindFramebuffer(H.READ_FRAMEBUFFER,F),Te.bindFramebuffer(H.DRAW_FRAMEBUFFER,Q);for(let xt=0;xt<G;xt++)Qe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,P,Z+xt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ne.__webglTexture,P),Ve?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.__webglTexture,R,ue+xt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,nt.__webglTexture,R),P!==0?H.blitFramebuffer(V,re,V+k,re+O,$,ce,$+k,ce+O,H.COLOR_BUFFER_BIT,H.NEAREST):Ve?H.copyTexSubImage3D(le,R,$,ce,ue+xt,V,re,k,O):H.copyTexSubImage2D(le,R,$,ce,V,re,k,O);Te.bindFramebuffer(H.READ_FRAMEBUFFER,null),Te.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ve?o.isDataTexture||o.isData3DTexture?H.texSubImage3D(le,R,$,ce,ue,k,O,G,ye,Ge,fe.data):g.isCompressedArrayTexture?H.compressedTexSubImage3D(le,R,$,ce,ue,k,O,G,ye,fe.data):H.texSubImage3D(le,R,$,ce,ue,k,O,G,ye,Ge,fe):o.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,R,$,ce,k,O,ye,Ge,fe.data):o.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,R,$,ce,fe.width,fe.height,ye,fe.data):H.texSubImage2D(H.TEXTURE_2D,R,$,ce,k,O,ye,Ge,fe);Te.pixelStorei(H.UNPACK_ROW_LENGTH,We),Te.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xe),Te.pixelStorei(H.UNPACK_SKIP_PIXELS,Re),Te.pixelStorei(H.UNPACK_SKIP_ROWS,Pe),Te.pixelStorei(H.UNPACK_SKIP_IMAGES,ot),R===0&&g.generateMipmaps===!0&&g.mipmapsAutoUpdate===!0&&H.generateMipmap(le),Te.unbindTexture()},this.initRenderTarget=function(o){ze.get(o).__webglFramebuffer===void 0&&qe.setupRenderTarget(o)},this.initTexture=function(o){o.isCubeTexture?qe.setTextureCube(o,0):o.isData3DTexture?qe.setTexture3D(o,0):o.isDataArrayTexture||o.isCompressedArrayTexture?qe.setTexture2DArray(o,0):qe.setTexture2D(o,0),Te.unbindTexture()},this.resetState=function(){te=0,K=0,me=null,Te.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}class Ps extends nn{constructor(){const e=Ps.SkyShader,t=new ri({name:e.name,uniforms:pc.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Yt,depthWrite:!1});super(new ai(1,1,1),t),this.isSky=!0}}Ps.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new W},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var ln=Uint8Array,Bi=Uint16Array,Rg=Int32Array,Cc=new ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Pc=new ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Cg=new ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Lc=function(i,e){for(var t=new Bi(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Rg(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Dc=Lc(Cc,2),Ic=Dc.b,Pg=Dc.r;Ic[28]=258,Pg[258]=28;var Lg=Lc(Pc,0),Dg=Lg.b,ja=new Bi(32768);for(var vt=0;vt<32768;++vt){var Jn=(vt&43690)>>1|(vt&21845)<<1;Jn=(Jn&52428)>>2|(Jn&13107)<<2,Jn=(Jn&61680)>>4|(Jn&3855)<<4,ja[vt]=((Jn&65280)>>8|(Jn&255)<<8)>>1}var pr=(function(i,e,t){for(var n=i.length,r=0,s=new Bi(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new Bi(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var l;if(t){l=new Bi(1<<e);var u=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],f=e-i[r],m=a[i[r]-1]++<<f,d=m|(1<<f)-1;m<=d;++m)l[ja[m]>>u]=c}else for(l=new Bi(n),r=0;r<n;++r)i[r]&&(l[r]=ja[a[i[r]-1]++]>>15-i[r]);return l}),Ar=new ln(288);for(var vt=0;vt<144;++vt)Ar[vt]=8;for(var vt=144;vt<256;++vt)Ar[vt]=9;for(var vt=256;vt<280;++vt)Ar[vt]=7;for(var vt=280;vt<288;++vt)Ar[vt]=8;var Nc=new ln(32);for(var vt=0;vt<32;++vt)Nc[vt]=5;var Ig=pr(Ar,9,1),Ng=pr(Nc,5,1),aa=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},fn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},oa=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Ug=function(i){return(i+7)/8|0},Fg=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new ln(i.subarray(e,t))},Og=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],dn=function(i,e,t){var n=new Error(e||Og[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,dn),!t)throw n;return n},Bg=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new ln(0);var a=!t,l=a||e.i!=2,u=e.i;a&&(t=new ln(r*3));var c=function(He){var st=t.length;if(He>st){var at=new ln(Math.max(st*2,He));at.set(t),t=at}},f=e.f||0,m=e.p||0,d=e.b||0,_=e.l,S=e.d,y=e.m,x=e.n,p=r*8;do{if(!_){f=fn(i,m,1);var M=fn(i,m+1,3);if(m+=3,M)if(M==1)_=Ig,S=Ng,y=9,x=5;else if(M==2){var D=fn(i,m,31)+257,v=fn(i,m+10,15)+4,T=D+fn(i,m+5,31)+1;m+=14;for(var z=new ln(T),U=new ln(19),B=0;B<v;++B)U[Cg[B]]=fn(i,m+B*3,7);m+=v*3;for(var X=aa(U),ne=(1<<X)-1,F=pr(U,X,1),B=0;B<T;){var Q=F[fn(i,m,ne)];m+=Q&15;var C=Q>>4;if(C<16)z[B++]=C;else{var te=0,K=0;for(C==16?(K=3+fn(i,m,3),m+=2,te=z[B-1]):C==17?(K=3+fn(i,m,7),m+=3):C==18&&(K=11+fn(i,m,127),m+=7);K--;)z[B++]=te}}var me=z.subarray(0,D),J=z.subarray(D);y=aa(me),x=aa(J),_=pr(me,y,1),S=pr(J,x,1)}else dn(1);else{var C=Ug(m)+4,w=i[C-4]|i[C-3]<<8,I=C+w;if(I>r){u&&dn(0);break}l&&c(d+w),t.set(i.subarray(C,I),d),e.b=d+=w,e.p=m=I*8,e.f=f;continue}if(m>p){u&&dn(0);break}}l&&c(d+131072);for(var oe=(1<<y)-1,he=(1<<x)-1,De=m;;De=m){var te=_[oa(i,m)&oe],Be=te>>4;if(m+=te&15,m>p){u&&dn(0);break}if(te||dn(2),Be<256)t[d++]=Be;else if(Be==256){De=m,_=null;break}else{var se=Be-254;if(Be>264){var B=Be-257,be=Cc[B];se=fn(i,m,(1<<be)-1)+Ic[B],m+=be}var Ie=S[oa(i,m)&he],Fe=Ie>>4;Ie||dn(3),m+=Ie&15;var J=Dg[Fe];if(Fe>3){var be=Pc[Fe];J+=oa(i,m)&(1<<be)-1,m+=be}if(m>p){u&&dn(0);break}l&&c(d+131072);var de=d+se;if(d<J){var ke=s-J,ht=Math.min(J,de);for(ke+d<0&&dn(3);d<ht;++d)t[d]=n[ke+d]}for(;d<de;++d)t[d]=t[d-J]}}e.l=_,e.p=De,e.b=d,e.f=f,_&&(f=1,e.m=y,e.d=S,e.n=x)}while(!f);return d!=t.length&&a?Fg(t,0,d):t.subarray(0,d)},zg=new ln(0),Hg=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&dn(6,"invalid zlib data"),(i[1]>>5&1)==1&&dn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function sr(i,e){return Bg(i.subarray(Hg(i),-4),{i:2},e,e)}var Gg=typeof TextDecoder<"u"&&new TextDecoder,kg=0;try{Gg.decode(zg,{stream:!0}),kg=1}catch{}class Vg extends Ah{constructor(e){super(e),this.type=Xt,this.outputFormat=Nt,this.part=0}parse(e){const z=Math.pow(2.7182818,2.2);let U=null,B=null;function X(h,o){let g=0;for(let A=0;A<65536;++A)(A==0||h[A>>3]&1<<(A&7))&&(o[g++]=A);const b=g-1;for(;g<65536;)o[g++]=0;return b}function ne(h){for(let o=0;o<16384;o++)h[o]={},h[o].len=0,h[o].lit=0,h[o].p=null}const F={l:0,c:0,lc:0};function Q(h,o,g,b,A){for(;g<h;)o=o<<8|Se(b,A),g+=8;g-=h,F.l=o>>g&(1<<h)-1,F.c=o,F.lc=g}const te=new Array(59);function K(h){for(let g=0;g<=58;++g)te[g]=0;for(let g=0;g<65537;++g)te[h[g]]+=1;let o=0;for(let g=58;g>0;--g){const b=o+te[g]>>1;te[g]=o,o=b}for(let g=0;g<65537;++g){const b=h[g];b>0&&(h[g]=b|te[b]++<<6)}}function me(h,o,g,b,A,P){const R=o;let k=0,O=0;for(;b<=A;b++){if(R.value-o.value>g)return!1;Q(6,k,O,h,R);const G=F.l;if(k=F.c,O=F.lc,P[b]=G,G==63){if(R.value-o.value>g)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");Q(8,k,O,h,R);let V=F.l+6;if(k=F.c,O=F.lc,b+V>A+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;V--;)P[b++]=0;b--}else if(G>=59){let V=G-59+2;if(b+V>A+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;V--;)P[b++]=0;b--}}K(P)}function J(h){return h&63}function oe(h){return h>>6}function he(h,o,g,b){for(;o<=g;o++){const A=oe(h[o]),P=J(h[o]);if(A>>P)throw new Error("THREE.EXRLoader: Invalid table entry");if(P>14){const R=b[A>>P-14];if(R.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(R.lit++,R.p){const k=R.p;R.p=new Array(R.lit);for(let O=0;O<R.lit-1;++O)R.p[O]=k[O]}else R.p=new Array(1);R.p[R.lit-1]=o}else if(P){let R=0;for(let k=1<<14-P;k>0;k--){const O=b[(A<<14-P)+R];if(O.len||O.p)throw new Error("THREE.EXRLoader: Invalid table entry");O.len=P,O.lit=o,R++}}}return!0}const De={c:0,lc:0};function Be(h,o,g,b){h=h<<8|Se(g,b),o+=8,De.c=h,De.lc=o}const se={c:0,lc:0};function be(h,o,g,b,A,P,R,k,O){if(h==o){b<8&&(Be(g,b,A,P),g=De.c,b=De.lc),b-=8;let G=g>>b;if(G=new Uint8Array([G])[0],k.value+G>O)return!1;const V=R[k.value-1];for(;G-- >0;)R[k.value++]=V}else if(k.value<O)R[k.value++]=h;else return!1;se.c=g,se.lc=b}function Ie(h){return h&65535}function Fe(h){const o=Ie(h);return o>32767?o-65536:o}const de={a:0,b:0};function ke(h,o){const g=Fe(h),A=Fe(o),P=g+(A&1)+(A>>1),R=P,k=P-A;de.a=R,de.b=k}function ht(h,o){const g=Ie(h),b=Ie(o),A=g-(b>>1)&65535,P=b+A-32768&65535;de.a=P,de.b=A}function He(h,o,g,b,A,P,R){const k=R<16384,O=g>A?A:g;let G=1,V,re;for(;G<=O;)G<<=1;for(G>>=1,V=G,G>>=1;G>=1;){re=0;const Z=re+P*(A-V),$=P*G,ce=P*V,ue=b*G,fe=b*V;let ye,Ge,le,We;for(;re<=Z;re+=ce){let xe=re;const Re=re+b*(g-V);for(;xe<=Re;xe+=fe){const Pe=xe+ue,ot=xe+$,Qe=ot+ue;k?(ke(h[xe+o],h[ot+o]),ye=de.a,le=de.b,ke(h[Pe+o],h[Qe+o]),Ge=de.a,We=de.b,ke(ye,Ge),h[xe+o]=de.a,h[Pe+o]=de.b,ke(le,We),h[ot+o]=de.a,h[Qe+o]=de.b):(ht(h[xe+o],h[ot+o]),ye=de.a,le=de.b,ht(h[Pe+o],h[Qe+o]),Ge=de.a,We=de.b,ht(ye,Ge),h[xe+o]=de.a,h[Pe+o]=de.b,ht(le,We),h[ot+o]=de.a,h[Qe+o]=de.b)}if(g&G){const Pe=xe+$;k?ke(h[xe+o],h[Pe+o]):ht(h[xe+o],h[Pe+o]),ye=de.a,h[Pe+o]=de.b,h[xe+o]=ye}}if(A&G){let xe=re;const Re=re+b*(g-V);for(;xe<=Re;xe+=fe){const Pe=xe+ue;k?ke(h[xe+o],h[Pe+o]):ht(h[xe+o],h[Pe+o]),ye=de.a,h[Pe+o]=de.b,h[xe+o]=ye}}V=G,G>>=1}return re}function st(h,o,g,b,A,P,R,k,O){let G=0,V=0;const re=R,Z=Math.trunc(b.value+(A+7)/8);for(;b.value<Z;)for(Be(G,V,g,b),G=De.c,V=De.lc;V>=14;){const ce=G>>V-14&16383,ue=o[ce];if(ue.len)V-=ue.len,be(ue.lit,P,G,V,g,b,k,O,re),G=se.c,V=se.lc;else{if(!ue.p)throw new Error("THREE.EXRLoader: hufDecode issues");let fe;for(fe=0;fe<ue.lit;fe++){const ye=J(h[ue.p[fe]]);for(;V<ye&&b.value<Z;)Be(G,V,g,b),G=De.c,V=De.lc;if(V>=ye&&oe(h[ue.p[fe]])==(G>>V-ye&(1<<ye)-1)){V-=ye,be(ue.p[fe],P,G,V,g,b,k,O,re),G=se.c,V=se.lc;break}}if(fe==ue.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}const $=8-A&7;for(G>>=$,V-=$;V>0;){const ce=o[G<<14-V&16383];if(ce.len)V-=ce.len,be(ce.lit,P,G,V,g,b,k,O,re),G=se.c,V=se.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function at(h,o,g,b,A,P){const R={value:0},k=g.value,O=ie(o,g),G=ie(o,g);g.value+=4;const V=ie(o,g);if(g.value+=4,O<0||O>=65537||G<0||G>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");const re=new Array(65537),Z=new Array(16384);ne(Z);const $=b-(g.value-k);if(me(h,g,$,O,G,re),V>8*(b-(g.value-k)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");he(re,O,G,Z),st(re,Z,h,g,V,G,P,A,R)}function tt(h,o,g){for(let b=0;b<g;++b)o[b]=h[o[b]]}function Mt(h){for(let o=1;o<h.length;o++){const g=h[o-1]+h[o]-128;h[o]=g}}function St(h,o){let g=0,b=Math.floor((h.length+1)/2),A=0;const P=h.length-1;for(;!(A>P||(o[A++]=h[g++],A>P));)o[A++]=h[b++]}function Lt(h){let o=h.byteLength;const g=new Array;let b=0;const A=new DataView(h);for(;o>0;){const P=A.getInt8(b++);if(P<0){const R=-P;o-=R+1;for(let k=0;k<R;k++)g.push(A.getUint8(b++))}else{const R=P;o-=2;const k=A.getUint8(b++);for(let O=0;O<R+1;O++)g.push(k)}}return g}function _t(h,o,g,b,A,P){let R=new DataView(P.buffer);const k=g[h.idx[0]].width,O=g[h.idx[0]].height,G=3,V=Math.floor(k/8),re=Math.ceil(k/8),Z=Math.ceil(O/8),$=k-(re-1)*8,ce=O-(Z-1)*8,ue={value:0},fe=new Array(G),ye=new Array(G),Ge=new Array(G),le=new Array(G),We=new Array(G);for(let Re=0;Re<G;++Re)We[Re]=o[h.idx[Re]],fe[Re]=Re<1?0:fe[Re-1]+re*Z,ye[Re]=new Float32Array(64),Ge[Re]=new Uint16Array(64),le[Re]=new Uint16Array(re*64);for(let Re=0;Re<Z;++Re){let Pe=8;Re==Z-1&&(Pe=ce);let ot=8;for(let Ve=0;Ve<re;++Ve){Ve==re-1&&(ot=$);for(let Ne=0;Ne<G;++Ne)Ge[Ne].fill(0),Ge[Ne][0]=A[fe[Ne]++],Et(ue,b,Ge[Ne]),Gt(Ge[Ne],ye[Ne]),kt(ye[Ne]);Zt(ye);for(let Ne=0;Ne<G;++Ne)gt(ye[Ne],le[Ne],Ve*64)}let Qe=0;for(let Ve=0;Ve<G;++Ve){const Ne=g[h.idx[Ve]].type;for(let nt=8*Re;nt<8*Re+Pe;++nt){Qe=We[Ve][nt];for(let xt=0;xt<V;++xt){const Xe=xt*64+(nt&7)*8;R.setUint16(Qe+0*Ne,le[Ve][Xe+0],!0),R.setUint16(Qe+2*Ne,le[Ve][Xe+1],!0),R.setUint16(Qe+4*Ne,le[Ve][Xe+2],!0),R.setUint16(Qe+6*Ne,le[Ve][Xe+3],!0),R.setUint16(Qe+8*Ne,le[Ve][Xe+4],!0),R.setUint16(Qe+10*Ne,le[Ve][Xe+5],!0),R.setUint16(Qe+12*Ne,le[Ve][Xe+6],!0),R.setUint16(Qe+14*Ne,le[Ve][Xe+7],!0),Qe+=16*Ne}}if(V!=re)for(let nt=8*Re;nt<8*Re+Pe;++nt){const xt=We[Ve][nt]+8*V*2*Ne,Xe=V*64+(nt&7)*8;for(let ft=0;ft<ot;++ft)R.setUint16(xt+ft*2*Ne,le[Ve][Xe+ft],!0)}}}const xe=new Uint16Array(k);R=new DataView(P.buffer);for(let Re=0;Re<G;++Re){g[h.idx[Re]].decoded=!0;const Pe=g[h.idx[Re]].type;if(g[Re].type==2)for(let ot=0;ot<O;++ot){const Qe=We[Re][ot];for(let Ve=0;Ve<k;++Ve)xe[Ve]=R.getUint16(Qe+Ve*2*Pe,!0);for(let Ve=0;Ve<k;++Ve)R.setFloat32(Qe+Ve*2*Pe,we.fromHalfFloat(xe[Ve]),!0)}}}function rn(h,o,g,b,A,P){const R=new DataView(P.buffer),k=g[h],O=k.width,G=k.height,V=Math.ceil(O/8),re=Math.ceil(G/8),Z=Math.floor(O/8),$=O-(V-1)*8,ce=G-(re-1)*8,ue={value:0};let fe=0;const ye=new Float32Array(64),Ge=new Uint16Array(64),le=new Uint16Array(V*64);for(let We=0;We<re;++We){let xe=8;We==re-1&&(xe=ce);for(let Re=0;Re<V;++Re)Ge.fill(0),Ge[0]=A[fe++],Et(ue,b,Ge),Gt(Ge,ye),kt(ye),gt(ye,le,Re*64);for(let Re=8*We;Re<8*We+xe;++Re){let Pe=o[h][Re];for(let ot=0;ot<Z;++ot){const Qe=ot*64+(Re&7)*8;for(let Ve=0;Ve<8;++Ve)R.setUint16(Pe+Ve*2*k.type,le[Qe+Ve],!0);Pe+=16*k.type}if(V!=Z){const ot=Z*64+(Re&7)*8;for(let Qe=0;Qe<$;++Qe)R.setUint16(Pe+Qe*2*k.type,le[ot+Qe],!0)}}}k.decoded=!0}function Et(h,o,g){let b,A=1;for(;A<64;)b=o[h.value],b==65280?A=64:b>>8==255?A+=b&255:(g[A]=b,A++),h.value++}function Gt(h,o){o[0]=we.fromHalfFloat(h[0]),o[1]=we.fromHalfFloat(h[1]),o[2]=we.fromHalfFloat(h[5]),o[3]=we.fromHalfFloat(h[6]),o[4]=we.fromHalfFloat(h[14]),o[5]=we.fromHalfFloat(h[15]),o[6]=we.fromHalfFloat(h[27]),o[7]=we.fromHalfFloat(h[28]),o[8]=we.fromHalfFloat(h[2]),o[9]=we.fromHalfFloat(h[4]),o[10]=we.fromHalfFloat(h[7]),o[11]=we.fromHalfFloat(h[13]),o[12]=we.fromHalfFloat(h[16]),o[13]=we.fromHalfFloat(h[26]),o[14]=we.fromHalfFloat(h[29]),o[15]=we.fromHalfFloat(h[42]),o[16]=we.fromHalfFloat(h[3]),o[17]=we.fromHalfFloat(h[8]),o[18]=we.fromHalfFloat(h[12]),o[19]=we.fromHalfFloat(h[17]),o[20]=we.fromHalfFloat(h[25]),o[21]=we.fromHalfFloat(h[30]),o[22]=we.fromHalfFloat(h[41]),o[23]=we.fromHalfFloat(h[43]),o[24]=we.fromHalfFloat(h[9]),o[25]=we.fromHalfFloat(h[11]),o[26]=we.fromHalfFloat(h[18]),o[27]=we.fromHalfFloat(h[24]),o[28]=we.fromHalfFloat(h[31]),o[29]=we.fromHalfFloat(h[40]),o[30]=we.fromHalfFloat(h[44]),o[31]=we.fromHalfFloat(h[53]),o[32]=we.fromHalfFloat(h[10]),o[33]=we.fromHalfFloat(h[19]),o[34]=we.fromHalfFloat(h[23]),o[35]=we.fromHalfFloat(h[32]),o[36]=we.fromHalfFloat(h[39]),o[37]=we.fromHalfFloat(h[45]),o[38]=we.fromHalfFloat(h[52]),o[39]=we.fromHalfFloat(h[54]),o[40]=we.fromHalfFloat(h[20]),o[41]=we.fromHalfFloat(h[22]),o[42]=we.fromHalfFloat(h[33]),o[43]=we.fromHalfFloat(h[38]),o[44]=we.fromHalfFloat(h[46]),o[45]=we.fromHalfFloat(h[51]),o[46]=we.fromHalfFloat(h[55]),o[47]=we.fromHalfFloat(h[60]),o[48]=we.fromHalfFloat(h[21]),o[49]=we.fromHalfFloat(h[34]),o[50]=we.fromHalfFloat(h[37]),o[51]=we.fromHalfFloat(h[47]),o[52]=we.fromHalfFloat(h[50]),o[53]=we.fromHalfFloat(h[56]),o[54]=we.fromHalfFloat(h[59]),o[55]=we.fromHalfFloat(h[61]),o[56]=we.fromHalfFloat(h[35]),o[57]=we.fromHalfFloat(h[36]),o[58]=we.fromHalfFloat(h[48]),o[59]=we.fromHalfFloat(h[49]),o[60]=we.fromHalfFloat(h[57]),o[61]=we.fromHalfFloat(h[58]),o[62]=we.fromHalfFloat(h[62]),o[63]=we.fromHalfFloat(h[63])}function kt(h){const o=.5*Math.cos(.7853975),g=.5*Math.cos(3.14159/16),b=.5*Math.cos(3.14159/8),A=.5*Math.cos(3*3.14159/16),P=.5*Math.cos(5*3.14159/16),R=.5*Math.cos(3*3.14159/8),k=.5*Math.cos(7*3.14159/16),O=new Array(4),G=new Array(4),V=new Array(4),re=new Array(4);for(let Z=0;Z<8;++Z){const $=Z*8;O[0]=b*h[$+2],O[1]=R*h[$+2],O[2]=b*h[$+6],O[3]=R*h[$+6],G[0]=g*h[$+1]+A*h[$+3]+P*h[$+5]+k*h[$+7],G[1]=A*h[$+1]-k*h[$+3]-g*h[$+5]-P*h[$+7],G[2]=P*h[$+1]-g*h[$+3]+k*h[$+5]+A*h[$+7],G[3]=k*h[$+1]-P*h[$+3]+A*h[$+5]-g*h[$+7],V[0]=o*(h[$+0]+h[$+4]),V[3]=o*(h[$+0]-h[$+4]),V[1]=O[0]+O[3],V[2]=O[1]-O[2],re[0]=V[0]+V[1],re[1]=V[3]+V[2],re[2]=V[3]-V[2],re[3]=V[0]-V[1],h[$+0]=re[0]+G[0],h[$+1]=re[1]+G[1],h[$+2]=re[2]+G[2],h[$+3]=re[3]+G[3],h[$+4]=re[3]-G[3],h[$+5]=re[2]-G[2],h[$+6]=re[1]-G[1],h[$+7]=re[0]-G[0]}for(let Z=0;Z<8;++Z)O[0]=b*h[16+Z],O[1]=R*h[16+Z],O[2]=b*h[48+Z],O[3]=R*h[48+Z],G[0]=g*h[8+Z]+A*h[24+Z]+P*h[40+Z]+k*h[56+Z],G[1]=A*h[8+Z]-k*h[24+Z]-g*h[40+Z]-P*h[56+Z],G[2]=P*h[8+Z]-g*h[24+Z]+k*h[40+Z]+A*h[56+Z],G[3]=k*h[8+Z]-P*h[24+Z]+A*h[40+Z]-g*h[56+Z],V[0]=o*(h[Z]+h[32+Z]),V[3]=o*(h[Z]-h[32+Z]),V[1]=O[0]+O[3],V[2]=O[1]-O[2],re[0]=V[0]+V[1],re[1]=V[3]+V[2],re[2]=V[3]-V[2],re[3]=V[0]-V[1],h[0+Z]=re[0]+G[0],h[8+Z]=re[1]+G[1],h[16+Z]=re[2]+G[2],h[24+Z]=re[3]+G[3],h[32+Z]=re[3]-G[3],h[40+Z]=re[2]-G[2],h[48+Z]=re[1]-G[1],h[56+Z]=re[0]-G[0]}function Zt(h){for(let o=0;o<64;++o){const g=h[0][o],b=h[1][o],A=h[2][o];h[0][o]=g+1.5747*A,h[1][o]=g-.1873*b-.4682*A,h[2][o]=g+1.8556*b}}const H=new Float32Array(1),Vt=new Uint32Array(H.buffer);function mt(h){H[0]=h;const o=Vt[0],g=o>>>16&32768,b=o&2147483647;if(b>=1199570944)return g|(b>2139095040?32256:31744);if(b<947912704)return H[0]=Math.abs(h)+.5,g|Vt[0]-1056964608;const A=b+4095+(b>>>13&1);return g|A-939524096>>>13}function gt(h,o,g){if(B===null){B=new Uint16Array(65536);for(let b=1;b<65536;++b){if((b&31744)===31744)continue;const A=we.fromHalfFloat(b),P=Math.abs(A),R=P<=1?Math.pow(P,2.2):Math.pow(z,P-1);B[b]=mt(A<0?-R:R)}}for(let b=0;b<64;++b)o[g+b]=B[mt(h[b])]}function Te(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function yt(h){const o=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),g=new Uint8Array(Lt(o)),b=new Uint8Array(g.length);return Mt(g),St(g,b),new DataView(b.buffer)}function ze(h){const o=h.array.slice(h.offset.value,h.offset.value+h.size),g=sr(o),b=new Uint8Array(g.length);return Mt(g),St(g,b),new DataView(b.buffer)}function qe(h){const o=h.viewer,g={value:h.offset.value},b=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),A=new Uint8Array(8192);let P=0;const R=new Array(h.inputChannels.length);for(let ce=0,ue=h.inputChannels.length;ce<ue;ce++)R[ce]={},R[ce].start=P,R[ce].end=R[ce].start,R[ce].nx=h.columns,R[ce].ny=h.lines,R[ce].size=h.type,P+=R[ce].nx*R[ce].ny*R[ce].size;const k=ge(o,g),O=ge(o,g);if(O>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(k<=O)for(let ce=0;ce<O-k+1;ce++)A[ce+k]=N(o,g);const G=new Uint16Array(65536),V=X(A,G),re=ie(o,g);at(h.array,o,g,re,b,P);for(let ce=0;ce<h.inputChannels.length;++ce){const ue=R[ce];for(let fe=0;fe<R[ce].size;++fe)He(b,ue.start+fe,ue.nx,ue.size,ue.ny,ue.nx*ue.size,V)}tt(G,b,P);let Z=0;const $=new Uint8Array(b.buffer.byteLength);for(let ce=0;ce<h.lines;ce++)for(let ue=0;ue<h.inputChannels.length;ue++){const fe=R[ue],ye=fe.nx*fe.size,Ge=new Uint8Array(b.buffer,fe.end*2,ye*2);$.set(Ge,Z),Z+=ye*2,fe.end+=ye}return new DataView($.buffer)}function L(h){const o=h.array.slice(h.offset.value,h.offset.value+h.size),g=sr(o),b=h.inputChannels.length*h.lines*h.columns*h.totalBytes,A=new ArrayBuffer(b),P=new DataView(A);let R=0,k=0;const O=new Array(4);for(let G=0;G<h.lines;G++)for(let V=0;V<h.inputChannels.length;V++){let re=0;switch(h.inputChannels[V].pixelType){case 1:O[0]=R,O[1]=O[0]+h.columns,R=O[1]+h.columns;for(let $=0;$<h.columns;++$){const ce=g[O[0]++]<<8|g[O[1]++];re+=ce,P.setUint16(k,re,!0),k+=2}break;case 2:O[0]=R,O[1]=O[0]+h.columns,O[2]=O[1]+h.columns,R=O[2]+h.columns;for(let $=0;$<h.columns;++$){const ce=g[O[0]++]<<24|g[O[1]++]<<16|g[O[2]++]<<8;re+=ce,P.setUint32(k,re,!0),k+=4}break}}return P}function E(h){const o=h.array;let g=h.offset.value;const b=h.columns,A=h.lines,P=h.inputChannels,R=h.totalBytes,k=Dt.compression==="B44A_COMPRESSION",O=new Uint8Array(A*b*R),G=new Uint16Array(16);let V=0;for(let re=0;re<P.length;re++){const Z=P[re],$=Z.pixelType*2,ce=Math.ceil(b/Z.xSampling),ue=Math.ceil(A/Z.ySampling),fe=Z.xSampling===1&&Z.ySampling===1;if(Z.pixelType!==1){for(let le=0;le<ue;le++)if(fe){const We=le*b*R+V*b;for(let xe=0;xe<ce*$;xe++)O[We+xe]=o[g++]}else g+=ce*$;V+=$;continue}const ye=Math.ceil(ce/4),Ge=Math.ceil(ue/4);for(let le=0;le<Ge;le++)for(let We=0;We<ye;We++){if(k&&o[g+2]>=52){const xe=o[g]<<8|o[g+1],Re=xe&32768?xe&32767:~xe&65535;G.fill(Re),g+=3}else{const xe=o[g]<<8|o[g+1],Re=o[g+2]>>2,Pe=32<<Re,ot=xe+((o[g+2]<<4|o[g+3]>>4)&63)*(1<<Re)-Pe&65535,Qe=ot+((o[g+3]<<2|o[g+4]>>6)&63)*(1<<Re)-Pe&65535,Ve=Qe+(o[g+4]&63)*(1<<Re)-Pe&65535,Ne=xe+(o[g+5]>>2&63)*(1<<Re)-Pe&65535,nt=ot+((o[g+5]<<4|o[g+6]>>4)&63)*(1<<Re)-Pe&65535,xt=Qe+((o[g+6]<<2|o[g+7]>>6)&63)*(1<<Re)-Pe&65535,Xe=Ve+(o[g+7]&63)*(1<<Re)-Pe&65535,ft=Ne+(o[g+8]>>2&63)*(1<<Re)-Pe&65535,Ot=nt+((o[g+8]<<4|o[g+9]>>4)&63)*(1<<Re)-Pe&65535,Xn=xt+((o[g+9]<<2|o[g+10]>>6)&63)*(1<<Re)-Pe&65535,Mn=Xe+(o[g+10]&63)*(1<<Re)-Pe&65535,ci=ft+(o[g+11]>>2&63)*(1<<Re)-Pe&65535,Or=Ot+((o[g+11]<<4|o[g+12]>>4)&63)*(1<<Re)-Pe&65535,Br=Xn+((o[g+12]<<2|o[g+13]>>6)&63)*(1<<Re)-Pe&65535,zr=Mn+(o[g+13]&63)*(1<<Re)-Pe&65535,Ji=[xe,Ne,ft,ci,ot,nt,Ot,Or,Qe,xt,Xn,Br,Ve,Xe,Mn,zr];for(let Ei=0;Ei<16;Ei++)G[Ei]=Ji[Ei]&32768?Ji[Ei]&32767:~Ji[Ei]&65535;g+=14}if(Z.pLinear){if(U===null){U=new Uint16Array(65536);for(let xe=0;xe<65536;xe++)if((xe&31744)===31744||xe>32768)U[xe]=0;else{const Re=we.fromHalfFloat(xe);U[xe]=Re<=0?0:we.toHalfFloat(8*Math.log(Re))}}for(let xe=0;xe<16;xe++)G[xe]=U[G[xe]]}for(let xe=0;xe<4;xe++){const Re=le*4+xe;if(!(Re>=ue))for(let Pe=0;Pe<4;Pe++){const ot=We*4+Pe;if(ot>=ce)continue;const Qe=G[xe*4+Pe];for(let Ve=0;Ve<Z.ySampling;Ve++){const Ne=Re*Z.ySampling+Ve;if(!(Ne>=A))for(let nt=0;nt<Z.xSampling;nt++){const xt=ot*Z.xSampling+nt;if(xt>=b)continue;const Xe=Ne*b*R+V*b+xt*2;O[Xe]=Qe&255,O[Xe+1]=Qe>>8&255}}}}}V+=2}return new DataView(O.buffer)}function Y(h){const o=h.viewer,g={value:h.offset.value},b=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),A={version:ee(o,g),unknownUncompressedSize:ee(o,g),unknownCompressedSize:ee(o,g),acCompressedSize:ee(o,g),dcCompressedSize:ee(o,g),rleCompressedSize:ee(o,g),rleUncompressedSize:ee(o,g),rleRawSize:ee(o,g),totalAcUncompressedCount:ee(o,g),totalDcUncompressedCount:ee(o,g),acCompression:ee(o,g)};if(A.version<2)throw new Error("THREE.EXRLoader: "+Dt.compression+" version "+A.version+" is unsupported");const P=new Array;let R=ge(o,g)-2;for(;R>0;){const ue=pe(o.buffer,g),fe=N(o,g),ye=fe>>2&3,Ge=(fe>>4)-1,le=new Int8Array([Ge])[0],We=N(o,g);P.push({name:ue,index:le,type:We,compression:ye}),R-=ue.length+3}const k=Dt.channels,O=new Array(h.inputChannels.length);for(let ue=0;ue<h.inputChannels.length;++ue){const fe=O[ue]={},ye=k[ue];fe.name=ye.name,fe.compression=0,fe.decoded=!1,fe.type=ye.pixelType,fe.pLinear=ye.pLinear,fe.width=h.columns,fe.height=h.lines}const G={idx:new Array(3)};for(let ue=0;ue<h.inputChannels.length;++ue){const fe=O[ue],ye=fe.name.lastIndexOf("."),Ge=ye>=0?fe.name.substring(ye+1):fe.name;for(let le=0;le<P.length;++le){const We=P[le];Ge===We.name&&fe.type===We.type&&(fe.compression=We.compression,We.index>=0&&(G.idx[We.index]=ue),fe.offset=ue)}}let V,re,Z;if(A.acCompressedSize>0)switch(A.acCompression){case 0:V=new Uint16Array(A.totalAcUncompressedCount),at(h.array,o,g,A.acCompressedSize,V,A.totalAcUncompressedCount);break;case 1:const ue=h.array.slice(g.value,g.value+A.totalAcUncompressedCount),fe=sr(ue);V=new Uint16Array(fe.buffer),g.value+=A.totalAcUncompressedCount;break}if(A.dcCompressedSize>0){const ue={array:h.array,offset:g,size:A.dcCompressedSize};re=new Uint16Array(ze(ue).buffer),g.value+=A.dcCompressedSize}if(A.rleRawSize>0){const ue=h.array.slice(g.value,g.value+A.rleCompressedSize),fe=sr(ue);Z=Lt(fe.buffer),g.value+=A.rleCompressedSize}let $=0;const ce=new Array(O.length);for(let ue=0;ue<ce.length;++ue)ce[ue]=new Array;for(let ue=0;ue<h.lines;++ue)for(let fe=0;fe<O.length;++fe)ce[fe].push($),$+=O[fe].width*h.type*2;G.idx[0]!==void 0&&O[G.idx[0]]&&_t(G,ce,O,V,re,b);for(let ue=0;ue<O.length;++ue){const fe=O[ue];if(!fe.decoded)switch(fe.compression){case 2:let ye=0,Ge=0;for(let le=0;le<h.lines;++le){let We=ce[ue][ye];for(let xe=0;xe<fe.width;++xe){for(let Re=0;Re<2*fe.type;++Re)b[We++]=Z[Ge+Re*fe.width*fe.height];Ge++}ye++}break;case 1:rn(ue,ce,O,V,re,b);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(b.buffer)}function pe(h,o){const g=new Uint8Array(h);let b=0;for(;g[o.value+b]!=0;)b+=1;const A=new TextDecoder().decode(g.slice(o.value,o.value+b));return o.value=o.value+b+1,A}function ae(h,o,g){const b=new TextDecoder().decode(new Uint8Array(h).slice(o.value,o.value+g));return o.value=o.value+g,b}function ve(h,o){const g=j(h,o),b=ie(h,o);return[g,b]}function Ae(h,o){const g=ie(h,o),b=ie(h,o);return[g,b]}function j(h,o){const g=h.getInt32(o.value,!0);return o.value=o.value+4,g}function ie(h,o){const g=h.getUint32(o.value,!0);return o.value=o.value+4,g}function Se(h,o){const g=h[o.value];return o.value=o.value+1,g}function N(h,o){const g=h.getUint8(o.value);return o.value=o.value+1,g}const ee=function(h,o){const g=Number(h.getBigInt64(o.value,!0));return o.value+=8,g};function q(h,o){const g=h.getFloat32(o.value,!0);return o.value+=4,g}function Ee(h,o){return we.toHalfFloat(q(h,o))}function ge(h,o){const g=h.getUint16(o.value,!0);return o.value+=2,g}function Me(h,o){return we.fromHalfFloat(ge(h,o))}function Ue(h,o,g,b){const A=g.value,P=[];for(;g.value<A+b-1;){const R=pe(o,g),k=j(h,g),O=N(h,g);g.value+=3;const G=j(h,g),V=j(h,g);P.push({name:R,pixelType:k,pLinear:O,xSampling:G,ySampling:V})}return g.value+=1,P}function Je(h,o){const g=q(h,o),b=q(h,o),A=q(h,o),P=q(h,o),R=q(h,o),k=q(h,o),O=q(h,o),G=q(h,o);return{redX:g,redY:b,greenX:A,greenY:P,blueX:R,blueY:k,whiteX:O,whiteY:G}}function _e(h,o){const g=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],b=N(h,o);return g[b]}function Oe(h,o){const g=j(h,o),b=j(h,o),A=j(h,o),P=j(h,o);return{xMin:g,yMin:b,xMax:A,yMax:P}}function Ke(h,o){const g=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],b=N(h,o);return g[b]}function Ce(h,o){const g=["ENVMAP_LATLONG","ENVMAP_CUBE"],b=N(h,o);return g[b]}function ct(h,o){const g=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],b=["ROUND_DOWN","ROUND_UP"],A=ie(h,o),P=ie(h,o),R=N(h,o);return{xSize:A,ySize:P,levelMode:g[R&15],roundingMode:b[R>>4]}}function Tt(h,o){const g=q(h,o),b=q(h,o);return[g,b]}function vn(h,o){const g=q(h,o),b=q(h,o),A=q(h,o);return[g,b,A]}function Pr(h,o,g,b,A){if(b==="string"||b==="stringvector"||b==="iccProfile")return ae(o,g,A);if(b==="chlist")return Ue(h,o,g,A);if(b==="chromaticities")return Je(h,g);if(b==="compression")return _e(h,g);if(b==="box2i")return Oe(h,g);if(b==="envmap")return Ce(h,g);if(b==="tiledesc")return ct(h,g);if(b==="lineOrder")return Ke(h,g);if(b==="float")return q(h,g);if(b==="v2f")return Tt(h,g);if(b==="v3f")return vn(h,g);if(b==="int")return j(h,g);if(b==="rational")return ve(h,g);if(b==="timecode")return Ae(h,g);if(b==="preview"||b==="deepImageState"||b==="idmanifest")return g.value+=A,"skipped";g.value+=A}function qi(h,o){const g=Math.log2(h);return o=="ROUND_DOWN"?Math.floor(g):Math.ceil(g)}function Ls(h,o,g){let b=0;switch(h.levelMode){case"ONE_LEVEL":b=1;break;case"MIPMAP_LEVELS":b=qi(Math.max(o,g),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return b}function Zi(h,o,g,b){const A=new Array(h);for(let P=0;P<h;P++){const R=1<<P;let k=o/R|0;b=="ROUND_UP"&&k*R<o&&(k+=1);const O=Math.max(k,1);A[P]=(O+g-1)/g|0}return A}function Lr(){const h=this,o=h.offset,g={value:0};for(let b=0;b<h.tileCount;b++){const A=j(h.viewer,o),P=j(h.viewer,o);o.value+=8,h.size=ie(h.viewer,o);const R=A*h.blockWidth,k=P*h.blockHeight;h.columns=R+h.blockWidth>h.width?h.width-R:h.blockWidth,h.lines=k+h.blockHeight>h.height?h.height-k:h.blockHeight;const O=h.columns*h.totalBytes,V=h.size<h.lines*O?h.uncompress(h):Te(h);o.value+=h.size;for(let re=0;re<h.lines;re++){const Z=re*h.columns*h.totalBytes;for(let $=0;$<h.inputChannels.length;$++){const ce=Dt.channels[$].name,ue=h.channelByteOffsets[ce]*h.columns,fe=h.decodeChannels[ce];if(fe===void 0)continue;g.value=Z+ue;const ye=(h.height-(1+k+re))*h.outLineWidth;for(let Ge=0;Ge<h.columns;Ge++){const le=ye+(Ge+R)*h.outputChannels+fe;h.byteArray[le]=h.getter(V,g)}}}}}function Cn(){const h=this,o=h.offset,g={value:0};for(let b=0;b<h.height/h.blockHeight;b++){const A=j(h.viewer,o)-Dt.dataWindow.yMin;h.size=ie(h.viewer,o),h.lines=A+h.blockHeight>h.height?h.height-A:h.blockHeight;const P=h.columns*h.totalBytes,k=h.size<h.lines*P?h.uncompress(h):Te(h);o.value+=h.size;for(let O=0;O<h.lines;O++){const G=A+O,V=O*P,re=(h.height-1-G)*h.outLineWidth;for(let Z=0;Z<h.inputChannels.length;Z++){const $=Dt.channels[Z].name,ce=h.channelByteOffsets[$]*h.columns,ue=h.decodeChannels[$];if(ue!==void 0){g.value=V+ce;for(let fe=0;fe<h.columns;fe++){const ye=re+fe*h.outputChannels+ue;h.byteArray[ye]=h.getter(k,g)}}}}}}function Ki(){const h=this,o=h.chunkOffsets,g={value:0};for(let b=0;b<o.length;b++){const A={value:o[b]};A.value+=4;const P=j(h.viewer,A)-Dt.dataWindow.yMin;h.size=ie(h.viewer,A),h.lines=P+h.blockHeight>h.height?h.height-P:h.blockHeight;const R=h.columns*h.totalBytes,k=h.size<h.lines*R,O=h.offset;h.offset=A;const G=k?h.uncompress(h):Te(h);h.offset=O;for(let V=0;V<h.lines;V++){const re=P+V,Z=V*R,$=(h.height-1-re)*h.outLineWidth;for(let ce=0;ce<h.inputChannels.length;ce++){const ue=Dt.channels[ce].name,fe=h.channelByteOffsets[ue]*h.columns,ye=h.decodeChannels[ue];if(ye!==void 0){g.value=Z+fe;for(let Ge=0;Ge<h.columns;Ge++){const le=$+Ge*h.outputChannels+ye;h.byteArray[le]=h.getter(G,g)}}}}}}function $i(h,o,g,b){if(g===0)return null;const A=h.slice(o,o+g);switch(b){case"NO_COMPRESSION":return new DataView(A.buffer,A.byteOffset,A.byteLength);case"RLE_COMPRESSION":{const P=new Uint8Array(Lt(A.buffer.slice(A.byteOffset,A.byteOffset+A.byteLength))),R=new Uint8Array(P.length);return Mt(P),St(P,R),new DataView(R.buffer)}case"ZIPS_COMPRESSION":{const P=sr(A),R=new Uint8Array(P.length);return Mt(P),St(P,R),new DataView(R.buffer)}default:throw new Error("THREE.EXRLoader: "+b+" is unsupported for deep data")}}function Dr(){const h=this,o=h.chunkOffsets,g=h.width,b=h.height,A=h.deepChannels,P=Dt.compression,R=h.multiPart,k=h.decodeChannels,O=h.outputChannels,G=h.byteArray instanceof Uint16Array;let V=-1;for(let re=0;re<A.length;re++)if(A[re].name==="A"){V=re;break}for(let re=0;re<o.length;re++){const Z={value:o[re]};R&&(Z.value+=4);const $=j(h.viewer,Z)-Dt.dataWindow.yMin,ce=ee(h.viewer,Z),ue=ee(h.viewer,Z);ee(h.viewer,Z);const fe=$i(h.array,Z.value,ce,P);if(Z.value+=ce,fe===null)continue;const ye=new Uint32Array(g);for(let Pe=0;Pe<g;Pe++)ye[Pe]=fe.getUint32(Pe*4,!0);const Ge=ye[g-1];if(Ge===0){Z.value+=ue;continue}const le=$i(h.array,Z.value,ue,P),We=[];let xe=0;for(let Pe=0;Pe<A.length;Pe++)We.push(xe),xe+=Ge*A[Pe].bytesPerSample;const Re=(b-1-$)*h.outLineWidth;for(let Pe=0;Pe<g;Pe++){const ot=Pe===0?0:ye[Pe-1],Ve=ye[Pe]-ot;if(Ve===0)continue;const Ne=new Float32Array(O);let nt=0;for(let Xe=0;Xe<Ve;Xe++){const ft=ot+Xe,Ot=1-nt;if(Ot<=0)break;let Xn=1;if(V>=0){const Mn=A[V].bytesPerSample,ci=We[V]+ft*Mn;Xn=Mn===2?we.fromHalfFloat(le.getUint16(ci,!0)):le.getFloat32(ci,!0)}for(let Mn=0;Mn<A.length;Mn++){const ci=A[Mn],Or=k[ci.name];if(Or===void 0)continue;const Br=ci.bytesPerSample,zr=We[Mn]+ft*Br,Ji=Br===2?we.fromHalfFloat(le.getUint16(zr,!0)):le.getFloat32(zr,!0);Ne[Or]+=Ji*Ot}nt+=Xn*Ot}k.A!==void 0&&(Ne[k.A]=nt);const xt=Re+Pe*O;for(let Xe=0;Xe<O;Xe++)h.byteArray[xt+Xe]=G?we.toHalfFloat(Ne[Xe]):Ne[Xe]}}}function oi(h,o,g){const b={};let A=!1;for(;;){const P=pe(o,g);if(P==="")break;A=!0;const R=pe(o,g),k=ie(h,g),O=Pr(h,o,g,R,k);O===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${R}'.`):b[P]=O}return A?b:null}function Ir(h,o,g){if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const b=h.getUint8(4),A=h.getUint8(5),P={singleTile:!!(A&2),longName:!!(A&4),deepFormat:!!(A&8),multiPart:!!(A&16)};g.value=8;const R=[];if(P.multiPart){for(;;){const k=oi(h,o,g);if(k===null)break;k.version=b,k.spec=P,R.push(k)}if(R.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const k=oi(h,o,g);k.version=b,k.spec=P,R.push(k)}return R}function Nr(h,o,g,b,A,P){const R={size:0,viewer:o,array:g,offset:b,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:pn};switch(h.compression){case"NO_COMPRESSION":R.blockHeight=1,R.uncompress=Te;break;case"RLE_COMPRESSION":R.blockHeight=1,R.uncompress=yt;break;case"ZIPS_COMPRESSION":R.blockHeight=1,R.uncompress=ze;break;case"ZIP_COMPRESSION":R.blockHeight=16,R.uncompress=ze;break;case"PIZ_COMPRESSION":R.blockHeight=32,R.uncompress=qe;break;case"PXR24_COMPRESSION":R.blockHeight=16,R.uncompress=L;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":R.blockHeight=32,R.uncompress=E;break;case"DWAA_COMPRESSION":R.blockHeight=32,R.uncompress=Y;break;case"DWAB_COMPRESSION":R.blockHeight=256,R.uncompress=Y;break;default:throw new Error("THREE.EXRLoader: "+h.compression+" is unsupported")}const k={};for(const Z of h.channels)switch(Z.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":k[Z.name]=!0,R.type=Z.pixelType}let O=!1,G=!1;if(k.Y&&k.RY&&k.BY)R.outputChannels=4,R.yCbCr=!0;else if(k.R&&k.G&&k.B)R.outputChannels=4;else if(k.Y)R.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(R.outputChannels){case 4:P==Nt?(O=!k.A,R.format=Nt,R.colorSpace=pn,R.outputChannels=4,R.decodeChannels={R:0,G:1,B:2,A:3}):P==on?(R.format=on,R.colorSpace=pn,R.outputChannels=2,R.decodeChannels={R:0,G:1}):P==mi?(R.format=mi,R.colorSpace=pn,R.outputChannels=1,R.decodeChannels={R:0}):G=!0;break;case 1:P==Nt?(O=!0,R.format=Nt,R.colorSpace=pn,R.outputChannels=4,R.shouldExpand=!0,R.decodeChannels={Y:0}):P==on?(R.format=on,R.colorSpace=pn,R.outputChannels=2,R.shouldExpand=!0,R.decodeChannels={Y:0}):P==mi?(R.format=mi,R.colorSpace=pn,R.outputChannels=1,R.decodeChannels={Y:0}):G=!0;break;default:G=!0}if(G)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(R.yCbCr&&(R.format=Nt,R.outputChannels=4,R.decodeChannels={Y:0,RY:1,BY:2},O=!0),R.type==1)switch(A){case Qt:R.getter=Me;break;case Xt:R.getter=ge;break}else if(R.type==2)switch(A){case Qt:R.getter=q;break;case Xt:R.getter=Ee}else throw new Error("THREE.EXRLoader: unsupported pixelType "+R.type+" for "+h.compression+".");R.columns=R.width;const V=R.width*R.height*R.outputChannels;switch(A){case Qt:R.byteArray=new Float32Array(V),O&&R.byteArray.fill(1,0,V);break;case Xt:R.byteArray=new Uint16Array(V),O&&R.byteArray.fill(15360,0,V);break;default:console.error("THREE.EXRLoader: unsupported type: ",A);break}let re=0;for(const Z of h.channels)R.decodeChannels[Z.name]!==void 0&&(R.channelByteOffsets[Z.name]=re),re+=Z.pixelType*2;if(R.totalBytes=re,R.outLineWidth=R.width*R.outputChannels,h.spec.deepFormat){R.deepChannels=[];let Z=0;for(const $ of h.channels){const ce=$.pixelType===0?4:$.pixelType*2;R.deepChannels.push({name:$.name,pixelType:$.pixelType,bytesPerSample:ce}),Z+=ce}R.deepBytesPerSample=Z,R.chunkOffsets=h._chunkOffsets,R.multiPart=h.spec.multiPart,R.decode=Dr.bind(R)}else if(h.spec.singleTile){R.blockHeight=h.tiles.ySize,R.blockWidth=h.tiles.xSize;const Z=Ls(h.tiles,R.width,R.height),$=Zi(Z,R.width,h.tiles.xSize,h.tiles.roundingMode),ce=Zi(Z,R.height,h.tiles.ySize,h.tiles.roundingMode);R.tileCount=$[0]*ce[0];for(let ue=0;ue<Z;ue++)for(let fe=0;fe<ce[ue];fe++)for(let ye=0;ye<$[ue];ye++)ee(o,b);R.decode=Lr.bind(R)}else if(h.spec.multiPart)R.blockWidth=R.width,R.chunkOffsets=h._chunkOffsets,R.decode=Ki.bind(R);else{R.blockWidth=R.width;const Z=Math.ceil(R.height/R.blockHeight);for(let $=0;$<Z;$++)ee(o,b);R.decode=Cn.bind(R)}return R}const Sn={value:0},Mi=new DataView(e),Ur=new Uint8Array(e),li=Ir(Mi,e,Sn),Fr=Math.max(0,Math.min(this.part,li.length-1)),Dt=li[Fr];if(Dt.spec.multiPart||Dt.spec.deepFormat)for(let h=0;h<li.length;h++){const o=li[h].chunkCount;if(h===Fr){Dt._chunkOffsets=[];for(let g=0;g<o;g++)Dt._chunkOffsets.push(ee(Mi,Sn))}else for(let g=0;g<o;g++)ee(Mi,Sn)}const Kt=Nr(Dt,Mi,Ur,Sn,this.type,this.outputFormat);if(Kt.decode(),Kt.shouldExpand){const h=Kt.byteArray;if(this.outputFormat==Nt)for(let o=0;o<h.length;o+=4)h[o+2]=h[o+1]=h[o];else if(this.outputFormat==on)for(let o=0;o<h.length;o+=2)h[o+1]=h[o]}if(Kt.yCbCr){const h=Kt.byteArray,o=Kt.width*Kt.height;if(this.type===Xt)for(let g=0;g<o;g++){const b=g*4,A=we.fromHalfFloat(h[b]),P=we.fromHalfFloat(h[b+1]),R=we.fromHalfFloat(h[b+2]),k=(1+P)*A,O=(1+R)*A,G=(A-k*.2126-O*.0722)/.7152;h[b]=we.toHalfFloat(Math.max(0,k)),h[b+1]=we.toHalfFloat(Math.max(0,G)),h[b+2]=we.toHalfFloat(Math.max(0,O))}else for(let g=0;g<o;g++){const b=g*4,A=h[b],P=h[b+1],R=h[b+2],k=(1+P)*A,O=(1+R)*A;h[b]=Math.max(0,k),h[b+1]=Math.max(0,(A-k*.2126-O*.0722)/.7152),h[b+2]=Math.max(0,O)}}return{header:Dt,width:Kt.width,height:Kt.height,data:Kt.byteArray,format:Kt.format,colorSpace:Kt.colorSpace,type:this.type,minFilter:Rt,magFilter:Rt,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}}const Wg=38,Xg=135,Tl=12832731;function Yg(i,e){const t=new wg({antialias:!0,powerPreference:"high-performance",stencil:!1}),n=Math.min(window.devicePixelRatio||1,e.maxDpr);t.setPixelRatio(n),t.setSize(window.innerWidth,window.innerHeight),t.outputColorSpace=Jt,t.toneMapping=no,t.toneMappingExposure=.95,t.shadowMap.enabled=e.shadows,t.shadowMap.type=e.softShadows?Nl:ur,i.appendChild(t.domElement);const r=new th;r.fog=new fo(Tl,350,e.fog),r.background=new it(Tl);const s=new W().setFromSphericalCoords(1,Sr.degToRad(90-Wg),Sr.degToRad(Xg)),a=new Ps;a.scale.setScalar(2e4);const l=a.material.uniforms;l.turbidity.value=3.5,l.rayleigh.value=1.4,l.mieCoefficient.value=.004,l.mieDirectionalG.value=.8,l.sunPosition.value.copy(s),r.add(a);const u=new Ph(16773596,3.2);u.castShadow=e.shadows;const c=e.shadowRange;Object.assign(u.shadow.camera,{left:-c,right:c,top:c,bottom:-c,near:10,far:900}),u.shadow.mapSize.set(e.shadowSize,e.shadowSize),u.shadow.bias=-4e-4,u.shadow.normalBias=.5,u.shadow.radius=2,r.add(u,u.target);const f=new wh(12572415,5595199,.35);r.add(f);const m=Vc(()=>import("./park.exr-v_B6Jj-5.js"),[],import.meta.url).then(S=>new Vg().loadAsync(S.default)).then(S=>{const y=new Er(t),x=y.fromEquirectangular(S).texture;S.dispose(),y.dispose(),r.environment=x,r.environmentIntensity=.55}).catch(S=>console.warn("HDRI konnte nicht geladen werden",S)),d=2*c/e.shadowSize,_=new W;return{renderer:t,scene:r,dpr:n,envReady:m,followFocus(S){_.set(Math.round(S.x/d)*d,0,Math.round(S.z/d)*d),u.target.position.copy(_),u.position.copy(_).addScaledVector(s,400)},resize(S){const y=window.innerWidth,x=window.innerHeight;t.setSize(y,x),S.aspect=y/x,S.updateProjectionMatrix()},render(S){t.render(r,S)},gpuName(){const S=t.getContext(),y=S.getExtension("WEBGL_debug_renderer_info");return y?S.getParameter(y.UNMASKED_RENDERER_WEBGL):S.getParameter(S.RENDERER)},dispose(){t.dispose(),t.domElement.remove()}}}const Al={type:"change"},vo={type:"start"},Uc={type:"end"},cs=new cc,wl=new Fn,qg=Math.cos(70*Sr.DEG2RAD),wt=new W,$t=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},la=1e-6;class Zg extends Dh{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Wn,this._lastTargetPosition=new W,this._quat=new Wn().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nl,this._sphericalDelta=new nl,this._scale=1,this._panOffset=new W,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new W,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$g.bind(this),this._onPointerDown=Kg.bind(this),this._onPointerUp=Jg.bind(this),this._onContextMenu=r0.bind(this),this._onMouseWheel=e0.bind(this),this._onKeyDown=t0.bind(this),this._onTouchStart=n0.bind(this),this._onTouchMove=i0.bind(this),this._onMouseDown=Qg.bind(this),this._onMouseMove=jg.bind(this),this._interceptControlDown=s0.bind(this),this._interceptControlUp=a0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ut.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Al),this.update(),this.state=ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=$t:n>Math.PI&&(n-=$t),r<-Math.PI?r+=$t:r>Math.PI&&(r-=$t),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=wt.length();a=this._clampDistance(l*this._scale);const u=l-a;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const l=new W(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(cs.origin.copy(this.object.position),cs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cs.direction))<qg?this.object.lookAt(this.target):(wl.setFromNormalAndCoplanarPoint(this.object.up,this.target),cs.intersectPlane(wl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>la||8*(1-this._lastQuaternion.dot(this.object.quaternion))>la||this._lastTargetPosition.distanceToSquared(this.target)>la?(this.dispatchEvent(Al),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wt.copy(r).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,l=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Kg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $g(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uc),this.state=ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Qg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ut.DOLLY;break;case Hn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}break;case Hn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(vo)}function jg(i){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function e0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(i.preventDefault(),this.dispatchEvent(vo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Uc))}function t0(i){this.enabled!==!1&&this._handleKeyDown(i)}function n0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ei.ROTATE:if(this.enableRotate===!1){this.state=ut.NONE;break}this._handleTouchStartRotate(i),this.state=ut.TOUCH_ROTATE;break;case ei.PAN:if(this.enablePan===!1){this.state=ut.NONE;break}this._handleTouchStartPan(i),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ut.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(vo)}function i0(i){switch(this._trackPointer(i),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ut.NONE}}function r0(i){this.enabled!==!1&&i.preventDefault()}function s0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o0(i,e=260){const t=new mn(45,window.innerWidth/window.innerHeight,1,6e3);t.position.set(250,170,340);const n=new Zg(t,i);return n.target.set(0,0,0),n.enableDamping=!0,n.dampingFactor=.09,n.screenSpacePanning=!1,n.minDistance=25,n.maxDistance=800,n.minPolarAngle=.15,n.maxPolarAngle=1.38,n.touches={ONE:ei.PAN,TWO:ei.DOLLY_ROTATE},n.mouseButtons={LEFT:Hn.PAN,MIDDLE:Hn.DOLLY,RIGHT:Hn.ROTATE},n.autoRotateSpeed=1.6,n.update(),{camera:t,controls:n,update(){n.target.x=Sr.clamp(n.target.x,-e,e),n.target.z=Sr.clamp(n.target.z,-e,e),n.target.y=0,n.update()},setAutoRotate(r){n.autoRotate=r},dispose(){n.dispose()}}}const ca=[120,60,30,0],ua=20;function us(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function l0({bus:i,settings:e,info:t}){const n=us(`<div class="nb-hud nb-top"><div class="nb-panel">
      <div class="nb-fps" data-k="fps">– <small>fps</small></div>
      <div class="nb-row" data-k="calls"></div>
      <div class="nb-row" data-k="quality"></div>
      <div class="nb-dim" data-k="gpu"></div>
      <div class="nb-dim" data-k="build"></div>
    </div></div>`),r=us(`<div class="nb-hud nb-bottom">
      <button class="nb-btn" data-a="quality"><b>Grafikstufe</b><span></span></button>
      <button class="nb-btn" data-a="limit"><b>Bildraten-Grenze</b><span></span></button>
      <button class="nb-btn primary" data-a="bench">Messung starten<b>${ua} Sekunden</b></button>
      <button class="nb-btn" data-a="report">Bericht kopieren<b>für Claude</b></button>
    </div>`),s=us(`<div class="nb-dialog" hidden><div class="nb-card">
      <h2></h2><div data-k="text"></div>
      <textarea readonly></textarea>
      <div class="nb-actions"><button class="nb-btn primary" data-a="copy">Bericht kopieren</button>
      <button class="nb-btn" data-a="close">Schließen</button></div>
    </div></div>`);document.body.append(n,r,s);const a=(p,M)=>p.querySelector(`[data-k="${M}"]`),l=p=>r.querySelector(`[data-a="${p}"] span`);let u=null,c=null;const f={ms:0,n:0};function m(){l("quality").textContent=pi[e.quality].label,l("limit").textContent=e.fpsLimit?`${e.fpsLimit} fps`:"aus"}m();function d(){const p=t(),M=["NB3D Technik-Test – Bericht","Build: 7-6306e37 (2026-11-14 09:48)",`Datum: ${new Date().toLocaleString("de-DE")}`,`Gerät: ${navigator.userAgent}`,`GPU: ${p.gpu}`,`Bildschirm: ${screen.width}×${screen.height} CSS-px, DPR ${window.devicePixelRatio}`,`Zeichenfläche: ${p.width}×${p.height} px (Pixelfaktor ${p.dpr})`,`Grafikstufe: ${pi[e.quality].label} · Grenze: ${e.fpsLimit||"aus"}`,`Jetzt: ${p.fps.toFixed(0)} fps · ${p.calls} Zeichenaufrufe · ${p.triangles} Dreiecke`,`Szene: ${p.buildings} Gebäude, ${p.cars} Autos, ${p.trees} Bäume, Schatten ${p.shadows?"an":"aus"}`,`Geladene Daten: ${p.loadedMB.toFixed(2)} MB`];if(c){const C=c;M.push(`Messung (${ua} s, ${C.quality}, Grenze ${C.limit||"aus"}):`,`  Durchschnitt ${C.avg.toFixed(1)} fps · langsamste 1 % ${C.low1.toFixed(1)} fps · Minimum ${C.min.toFixed(1)} fps`,`  Bilder unter 30 fps: ${C.below30.toFixed(1)} % · max. Zeichenaufrufe ${C.maxCalls}`)}else M.push("Messung: noch nicht durchgeführt");return M.push(f.n>60?`Bildrate während Berührung: ${(f.n*1e3/f.ms).toFixed(1)} fps (${f.n} Bilder)`:"Bildrate während Berührung: noch nicht gemessen (Stadt ein paar Sekunden mit dem Finger verschieben)"),M.join(`
`)}function _(p){const M=us(`<div class="nb-toast">${p}</div>`);document.body.append(M),setTimeout(()=>M.remove(),2200)}async function S(p){try{return await navigator.clipboard.writeText(p),_("Bericht kopiert – jetzt im Chat einfügen"),!0}catch{const M=s.querySelector("textarea");M.value=p,M.select();let C=!1;try{C=document.execCommand("copy")}catch{}return _(C?"Bericht kopiert – jetzt im Chat einfügen":"Bitte Text markieren und kopieren"),C}}function y(p,M){s.querySelector("h2").textContent=p,a(s,"text").innerHTML=M,s.querySelector("textarea").value=d(),s.hidden=!1}r.addEventListener("click",p=>{const M=p.target.closest("[data-a]")?.dataset.a;if(M==="quality"){const C=Ds[(Ds.indexOf(e.quality)+1)%Ds.length];i.emit("settings:quality",C)}else M==="limit"?(e.fpsLimit=ca[(ca.indexOf(e.fpsLimit)+1)%ca.length],i.emit("settings:changed",e),m()):M==="bench"&&!u?(u={start:performance.now(),times:[],maxCalls:0},i.emit("bench:start"),r.style.visibility="hidden"):M==="report"&&(y("Bericht","Kopiere den Bericht und schicke ihn Claude im Chat."),S(d()))}),s.addEventListener("click",p=>{const M=p.target.closest("[data-a]")?.dataset.a;M==="copy"?S(d()):(M==="close"||p.target===s)&&(s.hidden=!0)});function x(){const p=u.times.slice(10).sort((v,T)=>T-v),M=v=>1e3/v,C=p.reduce((v,T)=>v+T,0),w=p.slice(0,Math.max(1,Math.floor(p.length/100)));c={quality:pi[e.quality].label,limit:e.fpsLimit,avg:p.length*1e3/C,low1:M(w.reduce((v,T)=>v+T,0)/w.length),min:M(p[0]),below30:100*p.filter(v=>v>1e3/30).length/p.length,maxCalls:u.maxCalls},u=null,i.emit("bench:end",c),r.style.visibility="";const I=c,D=I.avg>=30&&I.low1>=25?"✅ Abnahme-Grenze (30 fps) geschafft":"❌ Unter 30 fps";y("Messung fertig",`<p><b>${I.avg.toFixed(0)} fps</b> im Schnitt · langsamste 1 %: ${I.low1.toFixed(0)} fps<br>${D}</p>`)}return{frame(p,M=!1){M&&p<100&&(f.ms+=p,f.n++),u&&(u.times.push(p),u.maxCalls=Math.max(u.maxCalls,t().calls),performance.now()-u.start>ua*1e3&&x())},refresh(){const p=t(),M=e.fpsLimit||120,C=p.fps>=M*.9?"nb-good":p.fps>=30?"nb-ok":"nb-bad",w=a(n,"fps");w.className=`nb-fps ${C}`,w.innerHTML=`${p.fps.toFixed(0)} <small>fps · ${p.frameMs.toFixed(1)} ms${u?" · Messung läuft":""}</small>`,a(n,"calls").textContent=`Zeichenaufrufe: ${p.calls} (max. 150) · Dreiecke: ${(p.triangles/1e3).toFixed(0)} Tsd.`,a(n,"quality").textContent=`${pi[e.quality].label} · ${p.width}×${p.height} px · ${p.buildings} Gebäude · ${p.cars} Autos`,a(n,"gpu").textContent=p.gpu,a(n,"build").textContent="Build 7-6306e37 · 2026-11-14 09:48"},report:d,dispose(){n.remove(),r.remove(),s.remove()}}}function c0(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},l=i[0].morphTargetsRelative,u=new Rn;u.morphTargetsRelative=l;let c=0;for(let f=0;f<i.length;++f){const m=i[f];let d=0,_=0;if(t!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in m.attributes){if(!n.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;s[S]===void 0&&(s[S]=[]),s[S].push(m.attributes[S]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(l!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in m.morphAttributes){if(!r.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;if(m.morphAttributes[S].length!==i[0].morphAttributes[S].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have the same number of morph targets for the "'+S+'" morph attribute.'),null;a[S]===void 0&&(a[S]=[]),a[S].push(m.morphAttributes[S]),_++}if(_!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of morph attributes."),null;if(e){let S;if(t)S=m.index.count;else if(m.attributes.position!==void 0)S=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;u.addGroup(c,S,f),c+=S}}if(t){let f=0;const m=[];for(let d=0;d<i.length;++d){const _=i[d].index;for(let S=0;S<_.count;++S)m.push(_.getX(S)+f);f+=i[d].attributes.position.count}u.setIndex(m)}for(const f in s){const m=Rl(s[f]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;u.setAttribute(f,m)}for(const f in a){const m=a[f][0].length;if(m!==0){u.morphAttributes=u.morphAttributes||{},u.morphAttributes[f]=[];for(let d=0;d<m;++d){const _=[];for(let y=0;y<a[f].length;++y)_.push(a[f][y][d]);const S=Rl(_);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;u.morphAttributes[f].push(S)}}}return u}function Rl(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const f=i[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*t}const a=new e(s),l=new Vn(a,t,n);let u=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const m=u/t;for(let d=0,_=f.count;d<_;d++)for(let S=0;S<t;S++){const y=f.getComponent(d,S);l.setComponent(d+m,S,y)}}else a.set(f.array,u);u+=f.count*t}return r!==void 0&&(l.gpuType=r),l}function Si(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function wr(i){const e=document.createElement("canvas");return e.width=e.height=i,[e,e.getContext("2d")]}function Rr(i,e,t,n){const r=i.getImageData(0,0,e,e),s=r.data;for(let a=0;a<s.length;a+=4){const l=(n()-.5)*t;s[a]+=l,s[a+1]+=l,s[a+2]+=l}i.putImageData(r,0,0)}function Cr(i,e,t=1){const n=new mh(i);return n.colorSpace=Jt,n.wrapS=n.wrapT=vs,n.repeat.set(t,t),n.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),n}function u0(i){const n=Si(11),[r,s]=wr(512);s.fillStyle="#d9dde2",s.fillRect(0,0,512,512);for(let a=0;a<4;a++)for(let l=0;l<4;l++){const u=30+n()*40,c=s.createLinearGradient(0,a*128,0,(a+1)*128);c.addColorStop(0,`hsl(208, 14%, ${u+14}%)`),c.addColorStop(1,`hsl(212, 18%, ${u-4}%)`),s.fillStyle=c,s.fillRect(l*128+6,a*128+10,116,112),n()<.35&&(s.fillStyle="rgba(235,230,215,0.55)",s.fillRect(l*128+6,a*128+10,116,112*n()*.7))}return Rr(s,512,10,n),Cr(r,i)}function h0(i){const n=Si(23),[r,s]=wr(512);s.fillStyle="#f1ece2",s.fillRect(0,0,512,512),Rr(s,512,18,n);for(let a=0;a<4;a++)for(let l=0;l<4;l++){const u=l*128+34,c=a*128+26,f=60,m=78;s.fillStyle="#c9c2b4",s.fillRect(u-5,c-5,f+10,m+14);const d=18+n()*22;s.fillStyle=`hsl(205, 25%, ${d}%)`,s.fillRect(u,c,f,m),s.fillStyle="rgba(255,255,255,0.18)",s.fillRect(u,c,f*.45,m),n()<.45&&(s.fillStyle="rgba(240,235,220,0.7)",s.fillRect(u,c,f,m*(.2+n()*.4))),s.fillStyle="#f7f5f0",s.fillRect(u+f/2-2,c,4,m),s.fillStyle="#9a9286",s.fillRect(u-6,c+m+2,f+12,6)}return Cr(r,i)}function f0(i){const t=Si(5),[n,r]=wr(512);r.fillStyle="#5d7a3a",r.fillRect(0,0,512,512);for(let s=0;s<2500;s++){r.fillStyle=`hsla(${80+t()*30}, ${30+t()*25}%, ${22+t()*18}%, 0.35)`;const a=2+t()*14;r.beginPath(),r.arc(t()*512,t()*512,a,0,Math.PI*2),r.fill()}return Rr(r,512,26,t),Cr(n,i,120)}function d0(i){const t=Si(9),[n,r]=wr(256);r.fillStyle="#a9a7a1",r.fillRect(0,0,256,256),Rr(r,256,22,t),r.strokeStyle="rgba(70,70,70,0.35)",r.lineWidth=2;for(let s=0;s<=256;s+=64)r.beginPath(),r.moveTo(s,0),r.lineTo(s,256),r.stroke(),r.beginPath(),r.moveTo(0,s),r.lineTo(256,s),r.stroke();return Cr(n,i,110)}function p0(i){const t=Si(3),[n,r]=wr(256);return r.fillStyle="#3b3d40",r.fillRect(0,0,256,256),Rr(r,256,30,t),r.fillStyle="#e8e6df",r.fillRect(0,256*.08,256,5),r.fillRect(0,256*.92-5,256,5),r.fillRect(0,256/2-3,256*.5,6),Cr(n,i)}const Ts=10,eo=34,gi=10,Fc=eo+gi,cr=Ts*Fc+gi,Qn=cr/2,xs=Array.from({length:Ts+1},(i,e)=>-Qn+gi/2+e*Fc),Cl=14,Pl=[{w:14,d:14,h:66,mat:"office"},{w:15,d:12,h:44,mat:"office"},{w:15,d:14,h:21,mat:"resid"},{w:14,d:15,h:14,mat:"resid"},{w:11,d:9,h:6.5,mat:"resid",roof:!0}],m0=["#ffffff","#dfe9f5","#e6efe8","#f2ece2","#d6dde6"],g0=["#ffffff","#f6e7cf","#e9eef2","#f3dcd2","#e4ecd9","#efe4c6"],_0=["#9a4a35","#7d3b2c","#5a5550","#a65c3c","#6b3a2e"];function x0(i,e,t){const n=new ai(i,e,t),r=n.attributes.uv,s=n.attributes.normal;for(let a=0;a<r.count;a++){if(Math.abs(s.getY(a))>.5){r.setXY(a,.01,.01);continue}const l=Math.abs(s.getX(a))>.5?t:i;r.setXY(a,r.getX(a)*l/Cl,r.getY(a)*e/Cl)}return n.translate(0,e/2,0),n}function v0(i){const e=i.d/1.732*1.12,t=new ws(e,e,i.w+.8,3,1,!1,Math.PI/2);return t.rotateZ(Math.PI/2),t.scale(1,.55,1),t.translate(0,i.h+e*.55*.5,0),t}function hs(i,e,t,n,r){const s=new $a(i,e,t.length),a=new pt,l=new Wn,u=new W,c=new it,f=new W(0,1,0);return t.forEach((m,d)=>{l.setFromAxisAngle(f,m.rot),u.setScalar(m.scale??1),m.sy&&(u.y*=m.sy),a.compose(new W(m.x,0,m.z),l,u),s.setMatrixAt(d,a),s.setColorAt(d,c.set(n[Math.floor(r()*n.length)]))}),s.castShadow=!0,s.receiveShadow=!0,s.computeBoundingSphere(),s}function S0(i,e){const t=Si(2026),n=new Oi,r=new nn(new _i(4e3,4e3).rotateX(-Math.PI/2),new bn({map:f0(i),roughness:1}));r.position.y=-.05,r.receiveShadow=!0;const s=new nn(new _i(cr,cr).rotateX(-Math.PI/2),new bn({map:d0(i),roughness:.95}));s.receiveShadow=!0,n.add(r,s);const a=[];for(const y of xs)for(const x of[!1,!0]){const p=new _i(cr,gi).rotateX(-Math.PI/2),M=p.attributes.uv;for(let C=0;C<M.count;C++)M.setX(C,M.getX(C)*cr/gi);x?p.rotateY(Math.PI/2).translate(y,.04,0):p.translate(0,.02,y),a.push(p)}const l=new nn(c0(a),new bn({map:p0(i),roughness:.85}));l.receiveShadow=!0,n.add(l);const u=Pl.map(()=>[]),c=[];for(let y=0;y<Ts;y++)for(let x=0;x<Ts;x++){const p=xs[y]+gi/2+eo/2,M=xs[x]+gi/2+eo/2,C=Math.hypot(p,M),w=Math.floor(t()*4);for(let I=0;I<4;I++){const D=p+(I%2?8.5:-8.5),v=M+(I<2?-8.5:8.5);if(I===w){c.push({x:D,z:v});continue}let T;C<95?T=t()<.5?0:1:C<175?T=t()<.5?2:3:T=4;const z=Math.floor(t()*4)*(Math.PI/2),U=T<2?.7+t()*.6:1;u[T].push({x:D,z:v,rot:z,sy:U})}}const f={office:new bn({map:u0(i),metalness:.5,roughness:.25}),resid:new bn({map:h0(i),roughness:.9})};let m=0;Pl.forEach((y,x)=>{const p=u[x];if(!p.length)return;m+=p.length;const M=y.mat==="office"?m0:g0;if(n.add(hs(x0(y.w,y.h,y.d),f[y.mat],p,M,t)),y.roof){const C=new bn({roughness:.8});n.add(hs(v0(y),C,p,_0,t))}});const d=[];for(const y of c)for(let x=0;x<7;x++)d.push({x:y.x+(t()-.5)*14,z:y.z+(t()-.5)*14});for(;d.length<e.trees*1.6;){const y=t()*Math.PI*2,x=Qn+15+t()*330;d.push({x:Math.cos(y)*x,z:Math.sin(y)*x})}d.length=Math.min(d.length,e.trees);for(const y of d)y.rot=t()*Math.PI*2,y.scale=.7+t()*.7;const _=new ws(.22,.32,2.6,6).translate(0,1.3,0),S=new go(2.3,1).scale(1,1.25,1).translate(0,4.6,0);return n.add(hs(_,new bn({color:5981750,roughness:1}),d,["#ffffff"],t)),n.add(hs(S,new bn({roughness:.95,flatShading:!0}),d,["#4f7a36","#5d8a3c","#3f6b2f","#6f9440","#47713a"],t)),{group:n,counts:{buildings:m,trees:d.length}}}const ar=new W;function an(i,e,t,n,r,s){const a=2*Math.PI*r/4,l=Math.max(s-2*r,0),u=Math.PI/4;ar.copy(e),ar[n]=0,ar.normalize();const c=.5*a/(a+l),f=1-ar.angleTo(i)/u;return Math.sign(ar[t])===1?f*c:l/(a+l)+c+c*(1-f)}class As extends ai{constructor(e=1,t=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const u=new W,c=new W,f=new W(e,t,n).divideScalar(2).subScalar(s),m=this.attributes.position.array,d=this.attributes.normal.array,_=this.attributes.uv.array,S=m.length/6,y=new W,x=.5/a;for(let p=0,M=0;p<m.length;p+=3,M+=2)switch(u.fromArray(m,p),c.copy(u),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),m[p+0]=f.x*Math.sign(u.x)+c.x*s,m[p+1]=f.y*Math.sign(u.y)+c.y*s,m[p+2]=f.z*Math.sign(u.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/S)){case 0:y.set(1,0,0),_[M+0]=an(y,c,"z","y",s,n),_[M+1]=1-an(y,c,"y","z",s,t);break;case 1:y.set(-1,0,0),_[M+0]=1-an(y,c,"z","y",s,n),_[M+1]=1-an(y,c,"y","z",s,t);break;case 2:y.set(0,1,0),_[M+0]=1-an(y,c,"x","z",s,e),_[M+1]=an(y,c,"z","x",s,n);break;case 3:y.set(0,-1,0),_[M+0]=1-an(y,c,"x","z",s,e),_[M+1]=1-an(y,c,"z","x",s,n);break;case 4:y.set(0,0,1),_[M+0]=1-an(y,c,"x","y",s,e),_[M+1]=1-an(y,c,"y","x",s,t);break;case 5:y.set(0,0,-1),_[M+0]=an(y,c,"x","y",s,e),_[M+1]=1-an(y,c,"y","x",s,t);break}}static fromJSON(e){return new As(e.width,e.height,e.depth,e.segments,e.radius)}}const Ll=["#e8e8e8","#1d1f22","#8c939b","#b5221c","#1f4f8f","#f0f0ea","#3b3f45","#c7b28a","#2f6b4a"],Dl=2.4;function M0(i=300){const e=Si(77),t=new As(4.3,1.05,1.85,2,.28).translate(0,.78,0),n=new As(2.3,.72,1.62,2,.22).translate(-.25,1.62,0),r=new $a(t,new bn({metalness:.6,roughness:.3}),i),s=new $a(n,new bn({color:1382686,metalness:.8,roughness:.12}),i);for(const d of[r,s])d.castShadow=!0,d.frustumCulled=!1,d.instanceMatrix.setUsage(Eu);const a=[];for(const d of[0,1])for(const _ of xs)for(const S of[1,-1])a.push({axis:d,c:_,dir:S,speed:9+e()*7});const l=[],u=new it;for(let d=0;d<i;d++){const _=a[d%a.length],S=Math.floor(d/a.length),y=Math.ceil(i/a.length),x=2*Qn;l.push({lane:_,pos:-Qn+(S+e()*.5)/y*x}),r.setColorAt(d,u.set(Ll[Math.floor(e()*Ll.length)]))}const c=new pt;function f(d){for(let _=0;_<l.length;_++){const S=l[_],y=S.lane;S.pos+=y.speed*y.dir*d,S.pos>Qn?S.pos-=2*Qn:S.pos<-Qn&&(S.pos+=2*Qn);let x,p,M;y.axis===0?(x=S.pos,p=y.c+Dl*y.dir,M=y.dir>0?0:Math.PI):(p=S.pos,x=y.c-Dl*y.dir,M=y.dir>0?-Math.PI/2:Math.PI/2),c.makeRotationY(M).setPosition(x,0,p),r.setMatrixAt(_,c),s.setMatrixAt(_,c)}r.instanceMatrix.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0}f(0);const m=new Oi;return m.add(r,s),{group:m,update:f,count:i}}function E0(){return[...performance.getEntriesByType("navigation"),...performance.getEntriesByType("resource")].reduce((t,n)=>t+(n.transferSize||n.encodedBodySize||0),0)/1048576}function y0(){const i=document.getElementById("app");if(!document.createElement("canvas").getContext("webgl2")){document.getElementById("loading").textContent="Dieses Gerät unterstützt kein WebGL 2.";return}const t=Oc(),n=zc();pi[n.quality]||(n.quality="maximum");const r=Hc(n.quality),s=Yg(i,r),a=o0(s.renderer.domElement),l=S0(s.renderer,r),u=M0(300);s.scene.add(l.group,u.group);let c=0,f=0;const m=new Set,d=s.gpuName(),_=()=>{const p=s.renderer.info.render;return{fps:c,frameMs:f,gpu:d,calls:p.calls,triangles:p.triangles,width:s.renderer.domElement.width,height:s.renderer.domElement.height,dpr:s.dpr,shadows:r.shadows,buildings:l.counts.buildings,trees:l.counts.trees,cars:u.count,loadedMB:E0()}},S=l0({bus:t,settings:n,info:_}),y=Bc({getLimit:()=>n.fpsLimit,onFrame(p){u.update(p),a.update(),s.followFocus(a.controls.target),s.render(a.camera),S.frame(y.lastFrameMs(),m.size>0)}});t.on("settings:changed",p=>Mo(p)),t.on("settings:quality",p=>{n.quality=p,Mo(n),location.reload()}),t.on("bench:start",()=>{a.camera.position.set(150,110,150),a.controls.target.set(0,0,0),a.setAutoRotate(!0)}),t.on("bench:end",()=>a.setAutoRotate(!1));const x=s.renderer.domElement;x.addEventListener("pointerdown",p=>m.add(p.pointerId));for(const p of["pointerup","pointercancel","pointerleave"])x.addEventListener(p,M=>m.delete(M.pointerId));window.addEventListener("resize",()=>s.resize(a.camera)),document.addEventListener("visibilitychange",()=>document.hidden?y.stop():y.start()),setInterval(()=>{c=y.fps(),f=y.lastFrameMs(),S.refresh()},250),s.envReady.then(()=>document.getElementById("loading")?.remove()),y.start(),window.__nb3d={info:_,report:S.report}}y0();
