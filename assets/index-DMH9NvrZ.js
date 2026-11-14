(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Fh(){const n=new Map,e=new Map;return{on(t,i){return n.has(t)||n.set(t,new Set),n.get(t).add(i),()=>n.get(t)?.delete(i)},emit(t,i){const s=n.get(t);if(s)for(const r of[...s])try{r(i)}catch(o){console.error(`Fehler bei Event ${t}`,o)}},handle(t,i){return e.set(t,i),()=>e.delete(t)},async request(t,i){const s=e.get(t);if(!s)throw new Error(`Niemand beantwortet ${t}`);return s(i)}}}function Oh({onFrame:n,getLimit:e}){let t=!1,i=0,s=0;const r=[];let o=0;function a(c){if(!t)return;s=requestAnimationFrame(a);const l=e(),d=i?c-i:16.7;if(l>0){const f=1e3/l;if(d<f-1.5)return}for(i=c,r.push(d),o+=d;o>2e3&&r.length>1;)o-=r.shift();n(Math.min(d,100)/1e3,c)}return{start(){t||(t=!0,i=0,s=requestAnimationFrame(a))},stop(){t=!1,cancelAnimationFrame(s)},fps(){let c=0,l=0;for(let d=r.length-1;d>=0&&c<1e3;d--)c+=r[d],l++;return c>0?l*1e3/c:0},lastFrameMs(){return r.length?r[r.length-1]:0}}}function Bh(n){const e=t=>t.split(".").reduce((i,s)=>i&&typeof i=="object"?i[s]:void 0,n);return function(i,s){const r=e(i);return r===void 0?i:typeof r!="string"||!s?r:r.replace(/\{(\w+)\}/g,(o,a)=>a in s?String(s[a]):o)}}function me(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const rf="nb3d.settings",zh="nb3d.techtest.settings",nu={quality:"maximum",fpsLimit:120,debugOpen:!1,cameraHint:!0};function kh(){try{const n=JSON.parse(localStorage.getItem(zh)||"{}");return{...nu,...n,...JSON.parse(localStorage.getItem(rf)||"{}")}}catch{return{...nu}}}function Hh(n){try{localStorage.setItem(rf,JSON.stringify(n))}catch{}}const Gh="sandbox",Vh="mode.sandbox.name",Wh="mode.sandbox.desc",$h={core:!0,render:!0,camera:!0,save:!0,ui:!0,region:!0,build:!0,economy:!0,population:!0,energy:!0,globe:!1,politics:!0,environment:!0,events:!1,tech:!1,diplomacy:!1,conflict:!1,scenarios:!1,monetization:!0,ads:!0},Xh={monthSeconds:20,speeds:[0,1,2,4],startYear:1745,startMonth:0,startSpeed:1},qh={autosaveMonths:3},Yh={pauseOnEvent:!0},Kh={gameOver:!1,freeSystemChange:!0},Zh={adapter:"none"},Jh={adapter:"none"},Qh={start:{money:2e3,population:45,resources:{food:40,wood:30,goods:0,coal:0}},tax:{low:.06,normal:.12,high:.2},taxSens:{happiness:70,business:120,workers:60,religion:40},wage:7,goodsPrice:4,price:{food:.5,wood:1,coal:2},keep:{food:80,wood:40,goods:20,coal:40},upkeepMul:1,consume:{food:30,wood:6,goods:3},marketPop:150,population:{workerShare:.45,growth:.035,immigration:1,minHappy:35,leaveBelow:20,shrinkHunger:.15,shrinkCrowd:.2,faithPer100:.5,faithMinPop:30},happiness:{wellFed:5,hunger:45,crowding:20,cold:8,faith:6,jobless:15,joblessFree:.25,noGoods:5,debt:8,shortage:10,smog:.4,smogMax:8},subsidy:{perPerson:.6},holidays:{output:.92},strike:{taxes:.9,output:.9},groups:{toHappiness:.3,popPer:{market:150,chapel:150,tavern:120},business:{base:52,industry:5,noIndustry:-4,energyOk:4,shortage:14,debt:15},workers:{base:50,subsidy:12,hunger:40,jobless:35,joblessFree:.25,fullJobs:6,holidays:6},religion:{base:50,holidays:14}},milestones:{dorf:{population:90,happiness:45,buildings:{market:1},reward:300},handwerk:{population:200,happiness:45,buildings:{workshop:1,chapel:1,tavern:1},noRedGroup:!0,reward:600},industrie:{population:800,happiness:45,buildings:{factory:1,steamengine:1},noRedGroup:!0,reward:1500}},tradeScale:.3},of={id:Gh,labelKey:Vh,descKey:Wh,modules:$h,time:Xh,save:qh,events:Yh,rules:Kh,monetization:Zh,ads:Jh,values:Qh},jh="challenge",ep="mode.challenge.name",tp="mode.challenge.desc",np={core:!0,render:!0,camera:!0,save:!0,ui:!0,region:!0,build:!0,economy:!0,population:!0,energy:!0,globe:!1,politics:!0,environment:!0,events:!1,tech:!1,diplomacy:!1,conflict:!1,scenarios:!1,monetization:!0,ads:!0},ip={monthSeconds:20,speeds:[0,1,2,4],startYear:1745,startMonth:0,startSpeed:1},sp={autosaveMonths:3},rp={pauseOnEvent:!1},op={gameOver:!0,freeSystemChange:!1},ap={adapter:"none"},lp={adapter:"none"},cp={start:{money:900,population:45,resources:{food:40,wood:30,goods:0,coal:0}},tax:{low:.06,normal:.12,high:.2},taxSens:{happiness:70,business:120,workers:60,religion:40},wage:6,goodsPrice:4,price:{food:.5,wood:1,coal:2},keep:{food:80,wood:40,goods:20,coal:40},upkeepMul:1.3,consume:{food:30,wood:6,goods:3},marketPop:150,population:{workerShare:.45,growth:.032,immigration:1,minHappy:35,leaveBelow:20,shrinkHunger:.15,shrinkCrowd:.2,faithPer100:.5,faithMinPop:30},happiness:{wellFed:5,hunger:45,crowding:20,cold:8,faith:6,jobless:15,joblessFree:.25,noGoods:5,debt:8,shortage:10,smog:.4,smogMax:8},subsidy:{perPerson:.6},holidays:{output:.92},strike:{taxes:.9,output:.9},groups:{toHappiness:.3,popPer:{market:150,chapel:150,tavern:120},business:{base:52,industry:5,noIndustry:-4,energyOk:4,shortage:14,debt:15},workers:{base:50,subsidy:12,hunger:40,jobless:35,joblessFree:.25,fullJobs:6,holidays:6},religion:{base:50,holidays:14}},milestones:{dorf:{population:90,happiness:45,buildings:{market:1},reward:200},handwerk:{population:200,happiness:45,buildings:{workshop:1,chapel:1,tavern:1},noRedGroup:!0,reward:400},industrie:{population:800,happiness:45,buildings:{factory:1,steamengine:1},noRedGroup:!0,reward:1e3}},tradeScale:.3},up={id:jh,labelKey:ep,descKey:tp,modules:np,time:ip,save:sp,events:rp,rules:op,monetization:ap,ads:lp,values:cp},ko={sandbox:of,challenge:up},dp=["sandbox","challenge"],Ws=n=>ko[n]||of;function af(n){const e=String(n);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619)>>>0;return t>>>0}function fp(n){let e=n.s>>>0;const t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return{next:t,int:(i,s)=>i+Math.floor(t()*(s-i+1)),chance:i=>t()<i,pick:i=>i[Math.floor(t()*i.length)],save:()=>({s:e})}}const hp=[{id:"housing",labelKey:"cat.housing"},{id:"food",labelKey:"cat.food"},{id:"resources",labelKey:"cat.resources"},{id:"industry",labelKey:"cat.industry"},{id:"energy",labelKey:"cat.energy"},{id:"community",labelKey:"cat.community"},{id:"road",labelKey:"cat.road"},{id:"demolish",labelKey:"cat.demolish"}],pp={cost:8},mp=[{id:"hut",category:"housing",labelKey:"bld.hut.name",descKey:"bld.hut.desc",size:[1,1],cost:60,upkeep:.5,housing:8,jobs:0,needsRoad:!0,look:{shape:"hut",h:4,color:"#b89a6b",roof:"#8a5a3a"}},{id:"house",category:"housing",labelKey:"bld.house.name",descKey:"bld.house.desc",size:[1,1],cost:140,upkeep:1,housing:16,needsRoad:!0,look:{shape:"house",h:6,color:"#e6d9bd",roof:"#9a4a35"}},{id:"field",category:"food",labelKey:"bld.field.name",descKey:"bld.field.desc",size:[2,2],cost:80,upkeep:1,jobs:4,produce:{food:9},site:{kinds:[0],fertility:!0},needsRoad:!0,look:{shape:"field",h:.3,color:"#c9b458"}},{id:"pasture",category:"food",labelKey:"bld.pasture.name",descKey:"bld.pasture.desc",size:[2,2],cost:100,upkeep:1,jobs:3,produce:{food:6,goods:.5},site:{kinds:[0]},needsRoad:!0,look:{shape:"pasture",h:1,color:"#7fa25a"}},{id:"fishery",category:"food",labelKey:"bld.fishery.name",descKey:"bld.fishery.desc",size:[1,1],cost:90,upkeep:1,jobs:3,produce:{food:5},site:{kinds:[0,3],adjacent:"water"},needsRoad:!0,look:{shape:"fishery",h:4,color:"#8c7355",roof:"#5c4a38"}},{id:"woodcutter",category:"resources",labelKey:"bld.woodcutter.name",descKey:"bld.woodcutter.desc",size:[1,1],cost:70,upkeep:1,jobs:3,produce:{wood:8},site:{kinds:[0,1],nearForest:3},needsRoad:!0,look:{shape:"lodge",h:4.5,color:"#7a5a3a",roof:"#4b3a2a"}},{id:"coalmine",category:"resources",labelKey:"bld.coalmine.name",descKey:"bld.coalmine.desc",size:[2,2],cost:260,upkeep:3,jobs:8,produce:{coal:6},energyDemand:2,emissions:2,site:{kinds:[3,0],nearKind:{kind:3,count:2}},needsRoad:!0,requires:"handwerk",look:{shape:"mine",h:7,color:"#55504b",roof:"#33302d"}},{id:"workshop",category:"industry",labelKey:"bld.workshop.name",descKey:"bld.workshop.desc",size:[2,2],cost:300,upkeep:3,jobs:8,consume:{wood:3},produce:{goods:6},energyDemand:3,emissions:.5,needsRoad:!0,look:{shape:"workshop",h:7,color:"#cdbd9a",roof:"#6b3a2e",chimney:!0}},{id:"factory",category:"industry",labelKey:"bld.factory.name",descKey:"bld.factory.desc",size:[3,2],cost:900,upkeep:8,jobs:20,consume:{coal:4,wood:2},produce:{goods:22},energyDemand:8,emissions:4,needsRoad:!0,requires:"handwerk",look:{shape:"factory",h:11,color:"#a8553d",roof:"#444",chimney:!0}},{id:"watermill",category:"energy",labelKey:"bld.watermill.name",descKey:"bld.watermill.desc",size:[2,2],cost:220,upkeep:2,jobs:2,produce:{food:3},energyProduce:10,site:{kinds:[0,3],adjacent:"water"},needsRoad:!0,look:{shape:"watermill",h:7,color:"#c9b48f",roof:"#6b4a35",wheel:!0}},{id:"windmill",category:"energy",labelKey:"bld.windmill.name",descKey:"bld.windmill.desc",size:[2,2],cost:180,upkeep:2,jobs:2,produce:{food:2},energyProduce:6,site:{kinds:[0,3]},needsRoad:!0,look:{shape:"windmill",h:12,color:"#e8dcc2",roof:"#5a4636",blades:!0}},{id:"steamengine",category:"energy",labelKey:"bld.steamengine.name",descKey:"bld.steamengine.desc",size:[2,2],cost:700,upkeep:6,jobs:6,consume:{coal:3},energyProduce:26,emissions:3,needsRoad:!0,requires:"handwerk",look:{shape:"steam",h:9,color:"#6f6a66",roof:"#2f2c2a",chimney:!0}},{id:"market",category:"community",labelKey:"bld.market.name",descKey:"bld.market.desc",size:[2,2],cost:200,upkeep:2,jobs:3,tradeIncome:.04,happiness:3,radius:10,groupBoost:{business:8},needsRoad:!0,look:{shape:"market",h:4,color:"#d9c9a0",roof:"#b5533c"}},{id:"chapel",category:"community",labelKey:"bld.chapel.name",descKey:"bld.chapel.desc",size:[1,2],cost:150,upkeep:1.5,jobs:1,happiness:2,radius:9,groupBoost:{religion:10},needsRoad:!0,look:{shape:"chapel",h:9,color:"#e9e2d3",roof:"#4a5a6b",tower:!0}},{id:"tavern",category:"community",labelKey:"bld.tavern.name",descKey:"bld.tavern.desc",size:[2,1],cost:130,upkeep:1.5,jobs:2,happiness:4,radius:7,groupBoost:{workers:6},needsRoad:!0,look:{shape:"tavern",h:6.5,color:"#d4bc92",roof:"#7a4630"}},{id:"townhall",category:"community",labelKey:"bld.townhall.name",descKey:"bld.townhall.desc",size:[2,2],cost:0,upkeep:0,jobs:2,housing:20,unique:!0,buildable:!1,needsRoad:!1,look:{shape:"hall",h:9,color:"#efe6d2",roof:"#3f5a6a",tower:!0}}],oi={categories:hp,road:pp,buildings:mp},ci=Object.fromEntries(oi.buildings.map(n=>[n.id,n])),Ci=n=>({ok:!1,reason:n}),gp={ok:!0,reason:null};function wc(n,e=0){const[t,i]=n.size;return e&1?[i,t]:[t,i]}function $s(n,e,t,i=0){const[s,r]=wc(n,i),o=[];for(let a=0;a<r;a++)for(let c=0;c<s;c++)o.push([e+c,t+a]);return o}function Tc(n,e){let[t,i]=[Math.round(n[0]),Math.round(n[1])];const[s,r]=[Math.round(e[0]),Math.round(e[1])],o=[[t,i]],a=Math.sign(s-t),c=Math.sign(r-i);for(;t!==s;)t+=a,o.push([t,i]);for(;i!==r;)i+=c,o.push([t,i]);return o}const lf=(n,e,t)=>e>=0&&t>=0&&e<n&&t<n;function Aa(n,e,t,i,s,r,o,a){const[c,l]=wc(e,s);let d=0;for(let f=i-r;f<i+l+r;f++)for(let u=t-r;u<t+c+r;u++){if(!lf(n.size,u,f))continue;const p=u>=t&&u<t+c&&f>=i&&f<i+l;a&&p||n.kind[f*n.size+u]===o&&d++}return d}function vp(n,e,t,i,s){const r=e.site;if(!r)return!0;const o=$s(e,t,i,s);return!(r.fertility&&o.reduce((c,[l,d])=>c+n.fertility[d*n.size+l],0)/o.length<25||r.adjacent==="water"&&Aa(n,e,t,i,s,1,2,!0)===0||r.nearForest&&Aa(n,e,t,i,s,r.nearForest,1,!1)===0||r.nearKind&&Aa(n,e,t,i,s,2,r.nearKind.kind,!1)<r.nearKind.count)}function Ac(n,e,t,i,s=0){if(!e)return Ci("unknown");if(e.requires&&n.flags?.milestones?.[e.requires]==null)return Ci("locked");const r=n.region?.terrain;if(!r||![t,i,s].every(Number.isInteger))return Ci("bounds");const o=$s(e,t,i,s);for(const[l,d]of o)if(!lf(r.size,l,d))return Ci("bounds");for(const[l,d]of o)if(n.region.grid[d*r.size+l]!==0)return Ci("blocked");const a=e.site?.kinds||[0,1];for(const[l,d]of o)if(!a.includes(r.kind[d*r.size+l]))return Ci("terrain");if(!vp(r,e,t,i,s))return Ci("site");const c=n.economy?.money??0;return c<0||c<e.cost?Ci("money"):gp}function cf(n,e){n.kind[e]===1&&(n.kind[e]=0,n.fertility[e]=Math.max(n.fertility[e],55))}function _p(n,e,t,i,s,r,o){const a=ci[e],c=n.region.terrain,l={id:n.build.nextId++,type:e,x:t,z:i,rot:s,month:r,paid:o,active:0,why:null};for(const[d,f]of $s(a,t,i,s)){const u=f*c.size+d;n.region.grid[u]=l.id,cf(c,u)}return n.build.buildings.push(l),l}function xp(n,e){const t=n.region.terrain;for(const[i,s]of e){const r=s*t.size+i;n.region.grid[r]=-1,cf(t,r),n.build.roads.push([i,s])}}const Sp=[32,32],bp=8,Mp=[[[-8,0],[8,0]],[[0,-8],[0,8]]],yp=[{type:"townhall",dx:-2,dz:-3,rot:0},{type:"hut",dx:1,dz:1,rot:0},{type:"hut",dx:1,dz:2,rot:0},{type:"hut",dx:1,dz:3,rot:0},{type:"hut",dx:-1,dz:1,rot:0},{type:"hut",dx:-1,dz:2,rot:0},{type:"hut",dx:-1,dz:3,rot:0},{type:"house",dx:1,dz:-1,rot:0},{type:"house",dx:2,dz:-1,rot:0},{type:"field",dx:1,dz:-4,rot:0},{type:"field",dx:1,dz:-6,rot:0},{type:"field",dx:-2,dz:-6,rot:0},{type:"woodcutter",dx:7,dz:-1,rot:0}],no={origin:Sp,clearRadius:bp,roads:Mp,buildings:yp},Ep=64,wp=12,ia=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]].map(([n,e])=>{const t=Math.hypot(n,e);return[n/t,e/t]}),Cl=n=>n*n*(3-2*n),Ra=(n,e)=>({n:e,a:Array.from({length:(e+1)*(e+1)},()=>n.next())});function Ca(n,e,t){const i=e*n.n,s=t*n.n,r=Math.min(n.n-1,Math.floor(i)),o=Math.min(n.n-1,Math.floor(s)),a=Cl(i-r),c=Cl(s-o),l=n.n+1,d=n.a[o*l+r],f=n.a[o*l+r+1],u=n.a[(o+1)*l+r],p=n.a[(o+1)*l+r+1];return(d+(f-d)*a)*(1-c)+(u+(p-u)*a)*c}const Pa=n=>{const e=[Ra(n,4),Ra(n,9),Ra(n,19)];return(t,i)=>.5*Ca(e[0],t,i)+.32*Ca(e[1],t,i)+.18*Ca(e[2],t,i)};function iu(n,e,t=12){const i=new Array(e*e).fill(t);let s=[];for(let r=0;r<e*e;r++)n[r]&&(i[r]=0,s.push(r));for(;s.length;){const r=[];for(const o of s){const a=o%e,c=(o-a)/e;for(const[l,d]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=a+l,u=c+d;if(f<0||u<0||f>=e||u>=e)continue;const p=u*e+f;i[p]>i[o]+1&&(i[p]=i[o]+1,r.push(p))}}s=r}return i}function Tp(n,e,t,i,s){const r=n.int(0,2),o=ia[n.pick([2,4,6])],a=n.next()*6.28,c=n.next(),l=new Array(e*e).fill(0);for(let d=0;d<e;d++)for(let f=0;f<e;f++){const u=f-t,p=d-t;if(Math.abs(u)<=s+1&&Math.abs(p)<=s+1)continue;const v=u*o[0]+p*o[1],x=-u*o[1]+p*o[0],m=i(f/e,d/e);let g=!1;if(r===0)g=v>12+(m-.5)*3+Math.sin(x*.25+a);else if(r===1){const M=14+2*Math.sin(x*.2+a)+(m-.5)*2.4;g=Math.abs(v-M)<1.5+c*.8}else{const M=(v-16)/6.2,w=x/5.2;g=M*M+w*w<1+(m-.5)*.5}g&&(l[d*e+f]=1)}return{mask:l,wdirIndex:ia.indexOf(o)}}function Ap(n,e,t){const i=e/2,s=Pa(n),r=Pa(n),o=Pa(n),{mask:a,wdirIndex:c}=Tp(n,e,i,s,t),l=(y,C)=>Math.min(Math.abs(y-C),8-Math.abs(y-C)),d=[2,3,4,5,6].filter(y=>l(y,c)>1),f=[],u=d.length?n.pick(d):4,p=n.pick(d.length?d:[4]);f.push({d:ia[u],dist:19,r:4.8+n.next()*1.6}),f.push({d:ia[p],dist:23,r:3+n.next()*1.2});const v=iu(a,e),x=a.map(y=>1-y),m=iu(x,e),g=new Array(e*e).fill(0),M=new Array(e*e).fill(0),w=new Array(e*e).fill(0);for(let y=0;y<e;y++)for(let C=0;C<e;C++){const T=y*e+C,S=C-i,E=y-i,N=Math.hypot(S,E),P=C/e,U=y/e,B=s(P,U),k=r(P,U),L=o(P,U);if(a[T]){g[T]=2,M[T]=-(.5+.7*Math.min(m[T],4)),w[T]=0;continue}let H=0;for(const ke of f){const re=i+ke.d[0]*ke.dist,Me=i+ke.d[1]*ke.dist;H+=Math.exp(-(((C-re)**2+(y-Me)**2)/(ke.r*ke.r)))}const V=Cl(Math.min(1,Math.max(0,(N-8)/6)));let W=(.5+1.5*B)*(.4+.6*V)+V*(H*(13+6*L)+(H>.05?(B-.5)*5:0));W=Math.min(W,.25+.55*v[T]),M[T]=Math.round(Math.max(.1,W)*10)/10;const j=Math.abs(S)<=t&&Math.abs(E)<=t,K=C-(i+11),le=y-(i-3),ue=o(P,U)*.75+.9*Math.exp(-((K*K+le*le)/25))+(v[T]<=2?-.2:0);M[T]>=4.5?g[T]=3:!j&&ue>.5&&(g[T]=1);let Pe=36+52*k+(v[T]<=4?10:0);g[T]===1?Pe=28+10*k:g[T]===3?Pe=8+10*k:N<=11&&(Pe=Math.max(Pe,70+25*k)),w[T]=Math.max(0,Math.min(100,Math.round(Pe)))}return{size:e,cell:wp,kind:g,height:M,fertility:w}}function Rp(n,e){const t=fp({s:af(`${n}:welt`)}),i=Ep,s=Ap(t,i,no.clearRadius),r={region:{terrain:s,heightmap:null,grid:new Array(i*i).fill(0)},build:{buildings:[],roads:[],nextId:1,undo:[]},flags:{milestones:{}},economy:{money:1/0}},[o,a]=no.origin;for(const[c,l]of no.roads){const f=Tc([o+c[0],a+c[1]],[o+l[0],a+l[1]]).filter(([u,p])=>r.region.grid[p*i+u]===0&&s.kind[p*i+u]!==2);xp(r,f)}for(const c of no.buildings){const l=ci[c.type],d=o+c.dx,f=a+c.dz;Ac(r,l,d,f,c.rot).ok&&_p(r,c.type,d,f,c.rot,0,0)}return{region:r.region,build:r.build}}function Cp(n,e){return(n.from==null||e>=n.from)&&(n.until==null||e<n.until)}function Pp(n,e){const t=n.modifiers.filter(i=>i.id!==e.id);t.push({from:null,until:null,labelArgs:{},...e}),n.modifiers=t}function uf(n,e){let t=0,i=1;for(const s of e)s.op==="add"?t+=s.value:s.op==="mul"&&(i*=s.value);return(n+t)*i}function df(n,e,t){return n.modifiers.filter(i=>i.target===e&&Cp(i,t))}function Rc(n,e,t,i=n.time.month){const s=uf(t,df(n,e,i));return n.derived[e]={base:t,value:s},s}function Dp(n,e,t=n.time.month){const i=n.derived?.[e],s=df(n,e,t),r=i?i.base:0,o=s.filter(v=>v.op==="add"),a=s.filter(v=>v.op==="mul"),c=o.reduce((v,x)=>v+x.value,0),l=a.reduce((v,x)=>v*x.value,1),d=[];for(const v of o)d.push(su(v,v.value));const f=r+c,u=f*l-f,p=a.reduce((v,x)=>v+Math.log(x.value),0);for(const v of a){const x=p!==0?Math.log(v.value)/p:1/a.length;d.push(su(v,u*x))}return{target:e,base:r,value:uf(r,s),parts:d}}function su(n,e){return{id:n.id,source:n.source,labelKey:n.labelKey,labelArgs:n.labelArgs||{},op:n.op,value:n.value,effect:e}}const kt=(n,e,t)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):e,gr=n=>Math.round(n*10)/10,Pl=n=>Math.round(n*100)/100,ff=n=>Math.round(n*1e3)/1e3,Vn=(n,e,t=0)=>Math.abs(e)>1e-9?n/e:t;function si(n,e,{id:t,source:i,target:s,op:r="add",value:o,labelKey:a,labelArgs:c}){const l=r==="mul"?1:0;if(!Number.isFinite(o)||Math.abs(o-l)<1e-6){n.modifiers=n.modifiers.filter(d=>d.id!==t);return}Pp(n,{id:t,source:i,target:s,op:r,value:ff(o),from:e,until:null,labelKey:a,labelArgs:c||{}})}function Lp(n,e){const t=e.config.values.happiness;let i=0;for(const s of n.build.buildings)i+=(ci[s.type]?.emissions||0)*(s.active||0);n.environment.emissions=Pl(kt(i,0,1e6)),si(n,e.month,{id:"environment.smog",source:"environment",target:"population.happiness",op:"add",value:-Math.min(t.smogMax,n.environment.emissions*t.smog),labelKey:"mod.environment.smog"})}function Ip(n,e,t){if(!e.needsRoad)return!0;const i=n.region.terrain.size,s=n.region.grid;for(const[r,o]of $s(e,t.x,t.z,t.rot))for(const[a,c]of[[1,0],[-1,0],[0,1],[0,-1]]){const l=r+a,d=o+c;if(l>=0&&d>=0&&l<i&&d<i&&s[d*i+l]===-1)return!0}return!1}function Sa(n){const e={housing:0,jobs:0,counts:{},roadOk:new Map};for(const t of n.build.buildings){const i=ci[t.type];if(!i)continue;const s=Ip(n,i,t);e.roadOk.set(t.id,s),s&&(e.housing+=i.housing||0,e.jobs+=i.jobs||0,e.counts[t.type]=(e.counts[t.type]||0)+1)}return e}const hf=(n,e)=>e.jobs>0?kt(n.population.workers/e.jobs,0,1):1;function Np(n,e,t){if(!e.site?.fertility)return 1;const i=n.region.terrain,s=$s(e,t.x,t.z,t.rot),r=s.reduce((o,[a,c])=>o+i.fertility[c*i.size+a],0)/s.length;return kt(r/70,0,1.3)}function pf(n,e){const t=n.population.total/100,i=e.consume;return{food:t*i.food,wood:t*i.wood,goods:t*i.goods,coal:0}}function ru(n,e){const[t,i]=wc(n,e.rot);return[e.x+(t-1)/2,e.z+(i-1)/2]}function Up(n,e,t,i){const s=n.build.buildings.filter(a=>a.type===t&&e.roadOk.get(a.id)).map(a=>ru(ci[t],a));if(!s.length)return 0;let r=0,o=0;for(const a of n.build.buildings){const c=ci[a.type];if(!c?.housing||!e.roadOk.get(a.id))continue;const[l,d]=ru(c,a);r+=c.housing,s.some(([f,u])=>Math.max(Math.abs(f-l),Math.abs(u-d))<=i)&&(o+=c.housing)}return Vn(o,r,0)}function Fp(n,e,t=!0){const i=Sa(n),s=hf(n,i),r=kt(n.energy.ratio??1,0,1),o=kt(Rc(n,"economy.output",1),.3,1.5),a=[];for(const p of n.build.buildings){const v=ci[p.type];if(!v)continue;const x=i.roadOk.get(p.id),m=v.jobs>0?s:1,g=v.energyDemand>0?r:1;a.push({b:p,def:v,road:x,staffF:m,energyF:g,inputF:1,yieldF:Np(n,v,p),base:x?m*g:0})}const c={},l={};for(const p of a)if(p.def.consume)for(const[v,x]of Object.entries(p.def.consume))l[v]=(l[v]||0)+x*p.base;else if(p.def.produce)for(const[v,x]of Object.entries(p.def.produce))c[v]=(c[v]||0)+x*p.base*p.yieldF*o;const d=pf(n,e.values),f=n.economy.resources,u={};for(const p of Object.keys(l))u[p]=kt(Vn(Math.max(0,(f[p]||0)+(c[p]||0)-(d[p]||0)),l[p],1),0,1);for(const p of a){if(p.def.consume&&(p.inputF=Math.min(...Object.keys(p.def.consume).map(x=>u[x]))),!t)continue;const v=ff(kt(p.base*p.inputF,0,1));if(p.b.active=v,p.b.why=null,!p.road)p.b.why="noRoad";else if(v<.999){const x=Math.min(p.staffF,p.energyF,p.inputF);p.b.why=x===p.inputF?"noInput":x===p.energyF?"noEnergy":"noWorkers"}}return{items:a,cs:i,staff:s,outputMul:o}}const Op=["market","chapel","tavern"];function Da(n,e){const t=e.config.values,i=t.population,s=t.happiness,r=e.month,o=n.population,a=n.economy,c=Sa(n);o.housing=c.housing,o.jobs=c.jobs,o.workers=Math.round(o.total*i.workerShare),o.employed=Math.min(o.workers,o.jobs);const l=pf(n,t),d=m=>(a.resources[m]||0)+(a.flow[m]?.prod||0),f=o.total/100*i.faithPer100;o.needs={food:kt(Vn(d("food"),l.food,1),0,1),housing:o.total>0?kt(Vn(o.housing,o.total,1),0,1):1,energy:kt(n.energy.ratio??1,0,1),faith:o.total<i.faithMinPop?1:kt(Vn(c.counts.chapel||0,f,1),0,1)};const u=kt(Vn(d("wood"),l.wood,1),0,1),p=o.workers>0?1-o.employed/o.workers:0,v=(m,g,M)=>si(n,r,{id:`population.${m}`,source:"population",target:"population.happiness",op:"add",value:g,labelKey:`mod.population.${m}`,labelArgs:M});v("wellFed",o.needs.food>=.999?s.wellFed:0),v("hunger",-s.hunger*(1-o.needs.food)),v("crowding",-s.crowding*(1-o.needs.housing)),v("cold",-s.cold*(1-u)),v("faith",-s.faith*(1-o.needs.faith)),v("jobless",-s.jobless*Math.max(0,p-s.joblessFree)/(1-s.joblessFree));const x=n.flags.milestones?.handwerk!=null;v("noGoods",x&&(a.resources.goods||0)<1?-s.noGoods:0);for(const m of Op){const g=ci[m];v(m,g.happiness*Up(n,c,m,g.radius))}return o.happiness=gr(kt(Rc(n,"population.happiness",50,r),0,100)),c}function ba(n){const e=n.startMonth+n.month;return{year:n.startYear+Math.floor(e/12),monthOfYear:e%12}}function Bp(n,e){const t=e.config.values,i=e.month,s=n.economy;si(n,i,{id:"economy.tax",source:"economy",target:"population.happiness",op:"add",value:(t.tax.normal-s.taxRate)*t.taxSens.happiness,labelKey:"mod.economy.tax"}),si(n,i,{id:"economy.debt",source:"economy",target:"population.happiness",op:"add",value:s.money<0?-t.happiness.debt:0,labelKey:"mod.economy.debt"})}function zp(n,e){Fp(n,e)}function kp(n,e){const t=Sa(n),i=hf(n,t);let s=0,r=0;const o=[];for(const c of n.build.buildings){const l=ci[c.type];!l||!t.roadOk.get(c.id)||(l.energyProduce&&c.active>0&&(s+=l.energyProduce*c.active,o.push(c.id)),l.energyDemand&&(r+=l.energyDemand*(l.jobs>0?i:1)))}const a=n.energy;a.production=Pl(s),a.demand=Pl(r),a.ratio=r>1e-9?kt(Vn(s,r,1),0,1):1,a.plants=o,si(n,e.month,{id:"energy.shortage",source:"energy",target:"population.happiness",op:"add",value:r>1e-9?-e.config.values.happiness.shortage*(1-a.ratio):0,labelKey:"mod.energy.shortage"})}const Hp=["business","workers","religion"];function Gp(n){const e={};for(const t of n.build.buildings)t.active>.5&&(e[t.type]=(e[t.type]||0)+1);return e}function La(n,e,t,i,s){const r=ci[t].groupBoost?.[i]||0,o=Math.max(1,Vn(n.population.total,e.groups.popPer[t],1));return r*(2*kt(Vn(s.counts[t]||0,o,0),0,1)-1)}const Vp=(n,e,t)=>n>=0?e:t;function Wp(n,e,t,i,s){const r=e.groups,o=n.economy,a=n.population,c=e.tax.normal-o.taxRate,l=n.politics.policies||{},d=[],f=(u,p,v,x)=>d.push({name:u,value:p,why:`why.${t}.${Vp(p,v,x)}`});if(t==="business"){const u=r.business;f("tax",c*e.taxSens.business,"taxLow","taxHigh"),f("market",La(n,e,"market","business",i),"market","noMarket");const p=(s.workshop||0)+(s.factory||0);f("industry",p>0?u.industry:u.noIndustry,"industry","noIndustry"),n.energy.demand>0&&f("energy",n.energy.ratio>=.95?u.energyOk:-u.shortage*(1-n.energy.ratio),"energy","noEnergy"),f("debt",o.money<0?-u.debt:0,"debt","debt")}else if(t==="workers"){const u=r.workers,p=a.workers>0?1-a.employed/a.workers:0;f("tax",c*e.taxSens.workers,"taxLow","taxHigh"),f("subsidy",l.foodSubsidy?u.subsidy:0,"subsidy","subsidy"),f("hunger",-u.hunger*(1-a.needs.food),"hunger","hunger"),f("jobless",-u.jobless*Math.max(0,p-u.joblessFree)/(1-u.joblessFree),"jobless","jobless"),f("fullJobs",p<.05&&a.workers>0?u.fullJobs:0,"jobs","jobs"),f("tavern",La(n,e,"tavern","workers",i),"tavern","noTavern"),f("holidays",l.holidays?u.holidays:0,"holidays","holidays")}else f("tax",c*e.taxSens.religion,"taxLow","taxHigh"),f("chapel",La(n,e,"chapel","religion",i),"chapel","noChapel"),f("holidays",l.holidays?r.religion.holidays:0,"holidays","holidays");return d}function $p(n,e,t){const i=e.population;return n==="business"?25+5*((t.market||0)+(t.workshop||0)+(t.factory||0)):n==="workers"?40+i.total/10:20+6*(t.chapel||0)}function Xp(n,e){const t=e.config.values,i=e.month,s=Sa(n),r=Gp(n),o=n.politics;let a=0,c=0,l=0;for(const u of Hp){const p=Wp(n,t,u,s,r);for(const g of p)si(n,i,{id:`politics.${u}.${g.name}`,source:"politics",target:`politics.groups.${u}.satisfaction`,op:"add",value:g.value,labelKey:`mod.politics.${u}.${g.name}`});const v=kt(Rc(n,`politics.groups.${u}.satisfaction`,t.groups[u].base,i),0,100),x=p.filter(g=>Math.abs(g.value)>=.5).sort((g,M)=>Math.abs(M.value)-Math.abs(g.value)).slice(0,3).map(g=>g.why),m=kt($p(u,n,r),0,100);o.groups[u]={influence:gr(m),satisfaction:gr(v),why:x},a+=m,c+=m*(v-50),l+=m*v}o.legitimacy=gr(kt(Vn(l,a,50),0,100)),o.unrest=gr(kt((50-o.legitimacy)*2,0,100));const d=o.groups,f=o.policies||{};si(n,i,{id:"politics.groups",source:"politics",target:"population.happiness",op:"add",value:Vn(c,a,0)*t.groups.toHappiness,labelKey:"mod.politics.groups"}),si(n,i,{id:"politics.holidaysOutput",source:"politics",target:"economy.output",op:"mul",value:f.holidays?t.holidays.output:1,labelKey:"mod.politics.holidaysOutput"}),si(n,i,{id:"politics.strikeOutput",source:"politics",target:"economy.output",op:"mul",value:d.workers.satisfaction<35?t.strike.output:1,labelKey:"mod.politics.strikeOutput"}),si(n,i,{id:"politics.strikeTaxes",source:"politics",target:"economy.taxes",op:"mul",value:d.business.satisfaction<35?t.strike.taxes:1,labelKey:"mod.politics.strikeTaxes"})}function qp(n,e){const t={month:n.time.month,config:e},i=s=>e.modules?.[s]!==!1;return i("economy")&&Bp(n,t),i("population")&&Da(n,t),i("economy")&&zp(n,e),i("environment")&&Lp(n,t),i("energy")&&kp(n,t),i("population")&&Da(n,t),i("politics")&&Xp(n,t),i("population")&&Da(n,t),n}const as=2,Yp=()=>({food:0,wood:0,goods:0,coal:0}),Kp=()=>({food:{prod:0,cons:0},wood:{prod:0,cons:0},goods:{prod:0,cons:0},coal:{prod:0,cons:0}}),Ia=n=>({influence:n,satisfaction:50,why:[]});function Cc(n,e,t="1970-01-01T00:00:00.000Z"){const i=af(e),s=n.values||{},r=Rp(e),o=s.start?.population??0,a={schemaVersion:as,meta:{gameId:`g${i.toString(36)}${Date.parse(t).toString(36)}`,name:"",mode:n.id,seed:String(e),country:"DEU",lang:"de",createdAt:t},rng:{s:i},time:{month:0,startYear:n.time.startYear,startMonth:n.time.startMonth},modifiers:[],derived:{},flags:{milestones:{dorf:null,handwerk:null,industrie:null},industryPreview:!1,rewarded:{}},region:r.region,build:r.build,economy:{money:s.start?.money??0,taxRate:s.tax?.normal??0,resources:{...Yp(),...s.start?.resources||{}},history:[],last:{taxes:0,sales:0,upkeep:0,subsidy:0,income:0,expenses:0,net:0},flow:Kp(),acc:{taxes:0,sales:0,upkeep:0,subsidy:0,pop0:o}},population:{total:o,happiness:50,needs:{food:1,housing:1,energy:1,faith:1},housing:0,jobs:0,workers:0,employed:0,values:{freedomOrder:0,marketState:0,traditionProgress:0,nationalInternational:0}},energy:{production:0,demand:0,ratio:1,plants:[],grid:null,trade:[]},globe:{country:"DEU",countries:{},clouds:null},politics:{system:{headOfState:null,headOfGovernment:null,parliament:null,electoral:null,parties:null,structure:null,judiciary:null,rights:{press:null,assembly:null,religion:null,speech:null},directDemocracy:null,economicOrder:null},groups:{military:null,business:Ia(25),workers:Ia(40),religion:Ia(25),civilRights:null,regions:null},policies:{foodSubsidy:!1,holidays:!1},legitimacy:50,unrest:0,elections:{next:null,history:[]},reform:null,upheaval:null},environment:{dayTime:null,season:null,weather:null,emissions:0},events:{queue:[],active:null,history:[]},tech:{era:"agrar",researched:[],current:null,progress:0},diplomacy:{relations:{},treaties:[],trade:[]},conflict:{tensions:{},sanctions:[],alliances:[],defenseBudget:0},scenarios:{active:null,goals:[],editor:null},monetization:{adapter:n.monetization?.adapter||"none",owned:[]},ads:{adapter:n.ads?.adapter||"none",consent:null,lastShown:null}};return n.values?.start?qp(a,n):a}function mf(n,e){for(const[t,i]of Object.entries(e))t in n?i&&typeof i=="object"&&!Array.isArray(i)&&n[t]&&typeof n[t]=="object"&&!Array.isArray(n[t])&&mf(n[t],i):n[t]=structuredClone(i);return n}function gf(n,e="",t=[]){if(typeof n=="number")Number.isFinite(n)||t.push(e||"(wurzel)");else if(n&&typeof n=="object")for(const[i,s]of Object.entries(n))gf(s,e?`${e}.${i}`:i,t);return t}const Zp={loading:"Spiel lädt …",noWebgl:"Dieses Gerät unterstützt kein WebGL 2.",error:"Ein Fehler ist aufgetreten. „Bericht kopieren“ hilft bei der Suche."},Jp={ok:"OK",cancel:"Abbrechen",yes:"ja",no:"nein",off:"aus",none:"keine",show:"zeigen",hide:"verstecken",on:"an"},Qp={months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthYear:"{month} {year}"},jp={sandbox:{name:"Sandbox",desc:"Entspannt bauen. Bei Ereignissen hält das Spiel an und fragt dich. Kein Verlieren."},challenge:{name:"Herausforderung",desc:"Fordernd. Die Zeit läuft bei Ereignissen weiter, Fehler haben Folgen, du kannst abgewählt werden."}},em={maximum:"Maximum",hoch:"Hoch",mittel:"Mittel",niedrig:"Niedrig"},tm={menu:"Menü",speed:"Spieltempo",pause:"Pause",speedN:"Tempo {n}-fach",camera:"Kamera",camIso:"Iso",camFree:"Frei"},nm={back:"Zurück",close:"Schließen",title:{main:"Menü",saves:"Spielstände",new:"Neues Spiel",settings:"Einstellungen",privacy:"Datenschutz",imprint:"Impressum",licenses:"Lizenzen",about:"Über das Spiel"},saves:"Spielstände",savesSub:"Speichern, Laden, als Datei sichern",newGame:"Neues Spiel",newGameSub:"Sandbox oder Herausforderung",settings:"Einstellungen",settingsSub:"Grafik, Bildrate, Kamera",install:"App installieren",installSub:"Auf den Startbildschirm legen",privacy:"Datenschutz",imprint:"Impressum",licenses:"Lizenzen",about:"Über das Spiel",start:"Starten",newGameHint:"Du startest im Jahr 1745 als Dorf in Deutschland. Das Spiel läuft in Monaten, 20 Sekunden sind ein Monat.",newGameConfirmTitle:"Neues Spiel starten?",newGameConfirm:"Das laufende Spiel wird ersetzt. Der automatische Spielstand wird beim nächsten Speichern überschrieben. Willst du es vorher auf einem Speicherplatz sichern, brich ab und gehe zu „Spielstände“.",newGameStarted:"Neues Spiel gestartet: {mode}",camera:"Kamera wechseln",cameraSub:"Iso (fester Blick) oder Frei (neigen und drehen)"},im={quality:"Grafikstufe",qualityHint:"Höher = schöner, aber mehr Akku und Wärme. Das Spiel lädt dafür kurz neu.",qualityConfirm:"Das Spiel wird gespeichert und lädt mit der neuen Grafikstufe neu.",limit:"Bildraten-Grenze (Bilder pro Sekunde)",limitHint:"Weniger Bilder pro Sekunde schonen Akku und halten das Handy kühler.",camera:"Kamera",cameraHint:"Iso: feste Schrägsicht wie auf einem Bauplan. Frei: neigen und drehen, wie du willst.",debug:"Mess-Anzeige (fps oben links)"},sm={intro:"Spielstände bleiben nur auf diesem Gerät. Mit „Datei“ kannst du einen Stand sichern oder auf ein anderes Gerät bringen.",slot:{auto:"Automatisch",slot1:"Platz 1",slot2:"Platz 2",slot3:"Platz 3"},empty:"leer",savedAt:"gespeichert {when}",save:"Speichern",load:"Laden",export:"Datei",delete:"Löschen",saved:"Gespeichert auf {slot}",loaded:"{slot} geladen",exported:"Datei wird heruntergeladen",imported:"Datei auf {slot} gelegt. Mit „Laden“ spielst du sie.",overwriteTitle:"Überschreiben?",overwrite:"Auf {slot} liegt schon ein Spielstand. Ersetzen?",loadTitle:"Spielstand laden?",loadConfirm:"Das laufende Spiel wird ersetzt. Nicht gespeicherter Fortschritt geht verloren.",deleteTitle:"Löschen?",deleteConfirm:"{slot} wirklich löschen? Das geht nicht rückgängig.",import:"Spielstand aus Datei holen",importTitle:"Datei holen",importWhere:"Auf welchen Platz soll der Spielstand?",migrated:"Alter Spielstand umgewandelt (Version {from} → {to}). Eine Sicherung wurde vorher angelegt.",persistYes:"✓ Dein Gerät hält die Spielstände dauerhaft fest.",persistNo:"Hinweis: Dein Gerät könnte die Spielstände bei Speichermangel löschen. Sichere wichtige Stände zusätzlich als Datei.",persistUnknown:"Ob das Gerät die Spielstände dauerhaft hält, wird beim ersten Speichern geprüft."},rm={error:{unknown:"Speichern oder Laden hat nicht geklappt.",slot:"Diesen Speicherplatz gibt es nicht.",noGame:"Es läuft gerade kein Spiel.",empty:"Dieser Speicherplatz ist leer.",newer:"Dieser Spielstand ist von einer neueren Spielversion. Bitte erst das Spiel aktualisieren.",migration:"Dieser alte Spielstand kann nicht umgewandelt werden.",notJson:"Das ist keine Spielstand-Datei.",format:"Die Datei ist kein gültiger Spielstand."}},om={title:"Neue Version da",text:"Es gibt eine neue Version des Spiels. Jetzt aktualisieren? Dein Spiel wird vorher automatisch gespeichert.",now:"Jetzt aktualisieren",later:"Später",saving:"Speichere und aktualisiere …",laterHint:"Die neue Version kommt beim nächsten Start."},am={offlineReady:"Fertig: Das Spiel läuft jetzt auch ohne Internet."},lm={copy:"Bericht kopieren",bench:"Messung {s} s",benchShort:"Messung läuft",copied:"Bericht kopiert – jetzt im Chat einfügen",copyFailed:"Kopieren hat nicht geklappt",benchRunning:"Messung läuft {s} Sekunden – bitte nicht berühren",benchDone:"Messung fertig: {avg} fps im Schnitt, langsamste 1 %: {low} fps",callsLine:"Zeichenaufrufe: {calls} (max. 150) · {tri} Tsd. Dreiecke · {ms} ms",reportTitle:"NB3D – Bericht",date:"Datum",device:"Gerät",screen:"Bildschirm",pixelFactor:"Pixelfaktor",quality:"Grafikstufe",limit:"Grenze",now:"Jetzt",callsShort:"Zeichenaufrufe",triangles:"Dreiecke",scene:"Kulisse (Gebäude/Autos/Bäume)",camera:"Kamera",game:"Spiel",month:"Monat",speed:"Tempo",holds:"angehalten wegen",broken:"Kaputte Zahlen",offline:"Offline bereit",persist:"Dauerhaft gespeichert",loaded:"Geladene Daten",benchLine1:"Messung ({s} s): Schnitt {avg} fps · langsamste 1 % {low} fps · Minimum {min} fps",benchLine2:"  Bilder unter 30 fps: {below} % · max. Zeichenaufrufe {calls}",noBench:"Messung: noch nicht durchgeführt",touchFps:"Bildrate während Berührung: {fps} fps ({n} Bilder)",touchNone:"Bildrate während Berührung: noch nicht gemessen (Stadt ein paar Sekunden verschieben)",errors:"Fehler"},cm={intro:"Dieses Spiel nutzt folgende Bausteine und Daten. Danke an alle, die sie frei zur Verfügung stellen.",license:"Lizenz",fullText:"Lizenztext lesen",use:{three:"3D-Grafik",hdri:"Himmelslicht und Spiegelungen",own:"selbst erstellt für dieses Spiel"}},um={stand:"Stand: November 2026",privacy:[{h:"Kurz gesagt",p:["Dieses Spiel sammelt keine Daten über dich. Es gibt kein Konto, keine Werbung, keine Statistik-Dienste, keine Cookies und keine Tracker."]},{h:"Was auf deinem Gerät gespeichert wird",p:["Spielstände liegen im Speicher deines Browsers (IndexedDB) auf deinem Gerät. Einstellungen wie Grafikstufe liegen ebenfalls nur dort (localStorage).","Damit das Spiel ohne Internet läuft, speichert der Browser die Spieldateien (Service Worker). Diese Daten verlassen dein Gerät nicht.","Du kannst alles löschen, indem du die App deinstallierst oder in Chrome die Websitedaten löschst."]},{h:"Beim Laden des Spiels",p:["Das Spiel wird von GitHub Pages (GitHub Inc., USA) ausgeliefert. Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie deine IP-Adresse, um die Dateien zu senden. Darauf haben wir keinen Einfluss. Mehr dazu in der Datenschutzerklärung von GitHub.","Rechtsgrundlage ist das berechtigte Interesse, das Spiel bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO)."]},{h:"Spielstand als Datei",p:["Wenn du einen Spielstand als Datei exportierst, entscheidest du selbst, wohin die Datei geht. Sie enthält nur Spieldaten."]},{h:"Deine Rechte",p:["Da wir keine Daten über dich speichern, gibt es bei uns nichts abzufragen oder zu löschen. Bei Fragen erreichst du uns über die Angaben im Impressum. Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren."]},{h:"Später",p:["Sollten später Werbung oder Käufe dazukommen, wird diese Erklärung vorher erweitert und du wirst um Erlaubnis gefragt."]}],imprint:["Angaben gemäß § 5 DDG","[Vorname Nachname]","[Straße Hausnummer]","[PLZ Ort]","Kontakt: [E-Mail-Adresse]","Verantwortlich für den Inhalt: [Vorname Nachname, Anschrift wie oben]"],imprintHint:"Platzhalter: Die Angaben werden vor der öffentlichen Verbreitung eingetragen."},dm={text:["Nation Builder 3D (Arbeitstitel). Führe ein echtes Land vom Agrarstaat zur Zukunftsnation.","Ausbaustufe: Spielbare Probe. Du baust ein Dorf in Deutschland (1745), versorgst dein Volk und führst es an die Schwelle zur Industrie.","Länder sind echt, Regierungschefs und Ereignisse erfunden."]},fm={food:"Nahrung",wood:"Holz",goods:"Waren",coal:"Kohle"},hm={places:"Plätze",percent:"zufrieden",power:"Kraft",foodMonth:"Nahrung/Monat"},pm={happyTitle:"Warum so zufrieden?",happyIntro:"So setzt sich die Zufriedenheit deines Volkes zusammen. Grün hilft, rot schadet.",base:"Grundstimmung",total:"Ergebnis",none:"Im Moment gibt es keine besonderen Einflüsse.",moneyTitle:"Wohin geht das Geld?",moneyIntro:"Das ist die Bilanz des letzten Monats in Talern.",taxes:"Steuern",sales:"Verkauf von Waren",upkeep:"Unterhalt für Gebäude und Wege",subsidy:"Brotpreis-Stütze und Feiertage",net:"Gewinn oder Verlust",stockTitle:"Vorräte",stockIntro:"Dein Lager und die Veränderung pro Monat. Rot heißt: es wird weniger.",energyTitle:"Kraft",energyIntro:"Mühlen und Maschinen brauchen Kraft aus Wasser, Wind oder Dampf.",produced:"Erzeugt",needed:"Gebraucht",energyOk:"Genug Kraft – alle Werkstätten arbeiten voll.",energyShort:"Zu wenig Kraft – Werkstätten arbeiten langsamer. Baue eine Wassermühle oder Windmühle."},mm={whyTitle:"Was gerade zählt",whatCanIDo:"Was kann ich tun?",lamp:{good:"zufrieden",ok:"unzufrieden",bad:"wütend"},tax:{low:"niedrig",normal:"normal",high:"hoch"},workers:{desc:"Bauern und Handwerker wollen satt werden und Arbeit haben.",leverHint:"Das Brot wird billiger. Das kostet jeden Monat Geld, macht die Arbeiter aber zufriedener.",name:"Arbeiter",lever:"Brotpreis-Stütze",hint:"Schaffe Arbeit, sorge für genug Essen und baue ein Wirtshaus."},business:{desc:"Händler und Handwerksmeister wollen niedrige Steuern, Märkte und Kraft für ihre Werkstätten.",leverHint:"Niedrige Steuern machen Händler froh, bringen dir aber weniger Geld.",name:"Händler",lever:"Steuersatz",hint:"Senke die Steuern, baue Marktplätze und eine Werkstatt und sorge für Kraft."},religion:{desc:"Die Gemeinde wünscht sich Kapellen und Feiertage.",leverHint:"An Feiertagen wird weniger gearbeitet, dafür sind Gemeinde und Volk zufriedener.",name:"Gläubige",lever:"Feiertage",hint:"Baue Kapellen oder führe Feiertage ein."},barTitle:"Volk"},gm={title:"Ziele",intro:"Drei Schritte führen dein Dorf bis an die Schwelle zur Industrie.",reached:"geschafft",allDone:"Alle Ziele erreicht",toast:"Ziel erreicht: {name}",previewTitle:"Ausblick: Das Industriezeitalter",previewText:"Du hast die Tür zur Industrie aufgestoßen. Fabriken und Dampfkraft sind freigeschaltet. Ein eigenes Zeitalter mit Forschung folgt in einer späteren Ausbaustufe.",dorf:{name:"Aus dem Weiler wird ein Dorf",desc:"Erreiche 150 Einwohner und baue einen Marktplatz."},handwerk:{name:"Das Handwerk blüht",desc:"Erreiche 250 Einwohner. Eine Werkstatt soll mit genug Kraft aus Wasser oder Wind laufen."},industrie:{name:"Tor zur Industrie",desc:"Eine Fabrik läuft mit Kohle und Dampfkraft. Das Volk ist dabei zufrieden."},reachedTitle:"Ziel erreicht"},vm={locked:"Gesperrt – erreiche zuerst: {goal}",housing:"{n} Plätze zum Wohnen",jobs:"{n} Arbeitsplätze",upkeep:"Unterhalt {n}/Monat",tapGround:"Tippe aufs Gelände, wo es stehen soll.",roadStart:"Tippe den Anfang, dann das Ende der Straße.",roadReady:"Straße mit {n} Feldern",demolishTap:"Tippe auf ein Gebäude oder eine Straße.",rotate:"Drehen",build:"Bauen",placed:"{name} gebaut",undo:"Letzten Bauschritt zurücknehmen ({n} möglich)",menu:"Bauen",autoRot:"Das Haus dreht sich von selbst zur Straße.",undone:"Zurückgenommen"},_m={working:"arbeitet",partly:"arbeitet zu {n} %",idle:"arbeitet nicht",demolish:"Abreißen (+{n} 🪙)"},xm={title:"Jahresbilanz {year}",intro:"So lief das vergangene Jahr:",net:"Gewinn oder Verlust",pop:"Einwohner",happy:"Zufriedenheit",money:"Kassenstand",go:"Weiter"},Sm={skip:"Überspringen",next:"Weiter",finish:"Los geht’s",welcome:{title:"Willkommen in deinem Dorf",text:"Es ist das Jahr 1745. Dein Volk braucht Nahrung, Häuser und Arbeit. Wische mit einem Finger zum Umsehen, zoome mit zwei Fingern."},category:{title:"Bauen",text:"Tippe unten auf „Bauen“, dann auf „Wohnen“ und wähle ein Haus."},place:{title:"Platz suchen",text:"Tippe aufs Gelände neben einer Straße. Das Haus dreht sich von selbst zur Straße. Grün heißt: hier geht es. Dann tippe auf „Bauen“. Mit „↩“ nimmst du die letzten 10 Bauschritte zurück."},numbers:{title:"Deine Zahlen",text:"Oben siehst du Geld, Einwohner, Zufriedenheit, Kraft und Nahrung. Tippe auf eine Zahl, dann erfährst du, warum sie so ist."},lamps:{title:"Die Ampeln des Volkes",text:"Arbeiter, Händler und Gläubige wollen verschiedene Dinge. Tippe auf die Leiste „Volk“ und lies, was du tun kannst."},goals:{title:"Deine Ziele",text:"Mit der Flagge öffnest du die Ziele. Drei Schritte bis zur Industrie. Viel Erfolg!"}},bm={reason:{busy:"Das Spiel lädt noch.",unknown:"Das geht nicht.",locked:"Das ist noch nicht freigeschaltet.",bounds:"Das liegt außerhalb der Karte.",blocked:"Dort steht schon etwas.",terrain:"Hier kann man das nicht bauen.",site:"Der Ort passt nicht (Wasser oder Wald fehlt).",money:"Zu wenig Taler.",empty:"Dort gibt es nichts zu bauen.",unique:"Das gibt es nur einmal und bleibt stehen.",nothing:"Es gibt nichts mehr zum Zurücknehmen."}},Mm={housing:"Wohnen",food:"Essen",resources:"Rohstoffe",industry:"Handwerk",energy:"Kraft",community:"Gemeinde",road:"Straßen",demolish:"Abreißen"},ym={road:{name:"Straße",desc:"Verbindet die Häuser. Ohne Straße arbeitet kaum ein Gebäude."},hut:{name:"Hütte",desc:"Einfaches Haus für 8 Menschen. Braucht eine Straße."},house:{name:"Haus",desc:"Gemütliches Haus für 16 Menschen."},field:{name:"Acker",desc:"Hier wächst das Getreide. Gute Erde bringt mehr Ernte."},pasture:{name:"Weide",desc:"Kühe und Schafe liefern etwas Nahrung und ein paar Waren."},fishery:{name:"Fischerhütte",desc:"Fängt Fische. Muss am Wasser stehen."},woodcutter:{name:"Holzfäller",desc:"Fällt Bäume und liefert Holz. Wald muss in der Nähe sein."},coalmine:{name:"Kohlengrube",desc:"Holt Kohle aus dem Berg. Liegt nahe bei Hügeln und braucht Kraft."},workshop:{name:"Werkstatt",desc:"Macht aus Holz nützliche Waren. Braucht Kraft."},factory:{name:"Fabrik",desc:"Stellt viele Waren her. Braucht Kohle, Holz und viel Kraft."},watermill:{name:"Wassermühle",desc:"Mahlt Korn und liefert Kraft. Muss am Wasser stehen."},windmill:{name:"Windmühle",desc:"Mahlt Korn und liefert etwas Kraft."},steamengine:{name:"Dampfmaschine",desc:"Verbrennt Kohle und liefert viel Kraft."},market:{name:"Marktplatz",desc:"Hier wird gehandelt. Bringt Taler und freut die Händler."},chapel:{name:"Kapelle",desc:"Ein Ort der Ruhe. Freut die Gläubigen."},tavern:{name:"Wirtshaus",desc:"Hier trifft man sich nach der Arbeit. Freut die Arbeiter."},townhall:{name:"Rathaus",desc:"Das Herz des Dorfes. Es bleibt immer stehen."}},Em={noRoad:"Keine Straße in der Nähe.",noWorkers:"Es fehlen Arbeitskräfte.",noEnergy:"Es fehlt Kraft.",noInput:"Es fehlt Rohstoff.",business:{taxLow:"Die Steuern sind niedrig.",taxHigh:"Die Steuern sind hoch.",market:"Es gibt genug Marktplätze.",noMarket:"Es fehlen Marktplätze.",industry:"Werkstätten und Fabriken laufen.",noIndustry:"Es gibt noch keine Werkstatt.",energy:"Die Kraft reicht aus.",noEnergy:"Den Werkstätten fehlt Kraft.",debt:"Das Dorf hat Schulden."},workers:{taxLow:"Die Steuern sind niedrig.",taxHigh:"Die Steuern sind hoch.",subsidy:"Das Brot ist verbilligt.",hunger:"Es gibt zu wenig zu essen.",jobless:"Zu viele Menschen haben keine Arbeit.",jobs:"Fast alle haben Arbeit.",tavern:"Ein Wirtshaus ist gut zu erreichen.",noTavern:"Es fehlen Wirtshäuser.",holidays:"Feiertage geben freie Tage."},religion:{taxLow:"Die Steuern sind niedrig.",taxHigh:"Die Steuern sind hoch.",chapel:"Es gibt genug Kapellen.",noChapel:"Es fehlen Kapellen.",holidays:"Die Feiertage werden geehrt."}},wm={environment:{smog:"Rauch und Qualm"},energy:{shortage:"Zu wenig Kraft"},economy:{tax:"Steuersatz",debt:"Schulden"},population:{wellFed:"Alle werden satt",hunger:"Hunger",crowding:"Zu wenig Wohnraum",cold:"Zu wenig Brennholz",faith:"Es fehlen Kapellen",jobless:"Menschen ohne Arbeit",noGoods:"Es fehlen Waren",market:"Marktplatz in der Nähe",chapel:"Kapelle in der Nähe",tavern:"Wirtshaus in der Nähe"},politics:{groups:"Stimmung der Gruppen",holidaysOutput:"Feiertage (weniger Arbeit)",strikeOutput:"Streik der Arbeiter",strikeTaxes:"Händler zahlen weniger",business:{tax:"Steuersatz",market:"Marktplätze",industry:"Werkstätten",energy:"Kraftversorgung",debt:"Schulden"},workers:{tax:"Steuersatz",subsidy:"Brotpreis-Stütze",hunger:"Hunger",jobless:"Menschen ohne Arbeit",fullJobs:"Alle haben Arbeit",tavern:"Wirtshäuser",holidays:"Feiertage"},religion:{tax:"Steuersatz",chapel:"Kapellen",holidays:"Feiertage"}}},Tm={app:Zp,common:Jp,date:Qp,mode:jp,quality:em,hud:tm,menu:nm,settings:im,saves:sm,save:rm,update:om,pwa:am,debug:lm,licenses:cm,legal:um,about:dm,res:fm,stat:hm,explain:pm,group:mm,ms:gm,buildui:vm,info:_m,balance:xm,tut:Sm,cmd:bm,cat:Mm,bld:ym,why:Em,mod:wm};function Am(n){let e=null;window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),e=s,n.emit("app:install-available")}),n.on("app:install",async()=>{e&&(e.prompt(),await e.userChoice.catch(()=>null),e=null)});const t={supported:"serviceWorker"in navigator,controlled:!1,waiting:!1,error:null};if(!t.supported)return t;let i=!1;return navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t.controlled){t.controlled=!0;return}i||(i=!0,location.reload())}),t.controlled=!!navigator.serviceWorker.controller,navigator.serviceWorker.register("./sw.js").then(s=>{const r=()=>{t.waiting=!0,n.emit("app:update-ready")};s.waiting&&navigator.serviceWorker.controller&&r(),s.addEventListener("updatefound",()=>{const a=s.installing;a?.addEventListener("statechange",()=>{a.state==="installed"&&(navigator.serviceWorker.controller?r():n.emit("app:offline-ready"))})}),n.on("app:update-now",()=>{const a=s.waiting;a?a.postMessage({type:"SKIP_WAITING"}):location.reload()});const o=()=>s.update().catch(()=>{});document.addEventListener("visibilitychange",()=>!document.hidden&&o()),setInterval(o,1800*1e3),t.check=o}).catch(s=>{t.error=String(s)}),t}let At,vr,ou,Tn=null,Ls=Ws("sandbox"),Ps=1,Ts=0,Is=!1;const xi=new Set;let Lr=!1,au=0;function Ho(n){vr.postMessage(n)}const Dl=new Map;let Rm=0,Go=null,Vo=-1;function Cm(n){const e=n.flags?.milestones||{};if(Go)for(const[i,s]of Object.entries(e))s!=null&&Go[i]==null&&At.bus.emit("time:milestone",{id:i,month:s});Go={...e};const t=n.economy?.history||[];Vo>=0&&t.length>Vo&&At.bus.emit("year:balance",t[t.length-1]),Vo=t.length}function Pm(n){const e=n.data;if(e.type==="result"){Tn=e.state;const i=Dl.get(e.id);Dl.delete(e.id),At.bus.emit("state:changed",{month:Tn.time.month}),i?.({ok:e.ok,reason:e.reason,data:e.data});return}if(e.type==="error"){console.error("Simulation:",e.message),At.bus.emit("app:error",{module:"sim",message:e.message}),Is=!1;return}if(e.type!=="state")return;const t=!Lr;if(Tn=e.state,Is=!1,e.months>0){const i=ba(Tn.time);At.bus.emit("time:month",{month:Tn.time.month,year:i.year,monthOfYear:i.monthOfYear})}(t||e.loaded)&&(Go=null,Vo=-1),Cm(Tn),At.bus.emit("state:changed",{month:Tn.time.month}),(t||e.loaded)&&(Lr=!0,xi.delete("loading")),Wo&&(Wo(),Wo=null)}let Wo=null;function lu(n){return xi.add("loading"),Lr=!1,Ts=0,Is=!1,Ls=Ws(n.meta.mode),new Promise(e=>{Wo=e,Ho({type:"load",state:n,config:Ls})})}function Na(n){Ls.time.speeds.includes(n)&&(Ps=n,At.bus.emit("time:speed",{speed:Ps}))}const As={name:"core",required:!0,init(n){At=n,vr=new Worker(new URL(""+new URL("worker-BWjDx6YZ.js",import.meta.url).href,import.meta.url),{type:"module"}),vr.onmessage=Pm,vr.onerror=e=>At.bus.emit("app:error",{module:"sim",message:e.message||"Worker"}),ou=Am(At.bus),At.store={get:()=>Tn,clock:()=>({speed:Ps,progress:Ts,paused:Ps===0||xi.size>0,holds:[...xi]}),pwa:()=>({...ou})},At.mode=()=>Ls,At.explain=e=>Tn?Dp(Tn,e):null,At.bus.on("time:set-speed",({speed:e})=>Na(e)),At.bus.on("time:hold",({reason:e,on:t})=>t?xi.add(e):xi.delete(e)),At.bus.on("app:hidden",()=>xi.add("hidden")),At.bus.on("app:visible",()=>xi.delete("hidden")),At.bus.on("app:update-apply",async()=>{try{await At.bus.request("save:write",{slot:"auto"})}catch{}At.bus.emit("app:update-now")}),At.bus.handle("sim:command",({name:e,data:t})=>new Promise(i=>{if(!Lr){i({ok:!1,reason:"busy"});return}const s=++Rm;Dl.set(s,i),Ho({type:"command",id:s,name:e,data:t})})),At.bus.handle("core:advance",e=>new Promise(t=>{const i=At.bus.on("state:changed",()=>{i(),t(Tn.time.month)});Is=!0,Ho({type:"step",count:e})}))},async newGame({mode:n="sandbox",seed:e}={}){const t=Ws(n),i=e??`${Date.now()}-${Math.floor(Math.random()*1e9)}`;await lu(Cc(t,i,new Date().toISOString())),Na(t.time.startSpeed)},update(){const n=performance.now(),e=Math.min((n-(au||n))/1e3,1);au=n,!(!Lr||Is||Ps===0||xi.size>0)&&(Ts+=e*Ps/Ls.time.monthSeconds,Ts>=1&&(Ts=Math.min(Ts-1,.5),Is=!0,Ho({type:"step",count:1})))},serialize(){return Tn},async load(n){await lu(n),Na(Ls.time.startSpeed)},dispose(){vr?.terminate()}},Dm="nb3d",Lm=1,Im=10;function Ns(n){return new Promise((e,t)=>{n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}function Nm(){return new Promise((n,e)=>{const t=indexedDB.open(Dm,Lm);t.onupgradeneeded=()=>{const i=t.result;i.objectStoreNames.contains("slots")||i.createObjectStore("slots",{keyPath:"id"}),i.objectStoreNames.contains("backups")||i.createObjectStore("backups",{keyPath:"key",autoIncrement:!0})},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error),t.onblocked=()=>e(new Error("blocked"))})}function Us(n,e,t="readonly"){return n.transaction(e,t).objectStore(e)}const Pc=(n,e)=>Ns(Us(n,"slots").get(e)),Um=n=>Ns(Us(n,"slots").getAll()),cu=(n,e)=>Ns(Us(n,"slots","readwrite").delete(e));function Dc(n,e){return new Promise((t,i)=>{const s=n.transaction("slots","readwrite");s.objectStore("slots").put(e),s.oncomplete=()=>t(),s.onerror=()=>i(s.error),s.onabort=()=>i(s.error||new Error("abort"))})}async function vf(n,e){const t=await Ns(Us(n,"backups","readwrite").add(e)),i=await Ns(Us(n,"backups").getAllKeys()),s=i.slice(0,Math.max(0,i.length-Im));for(const r of s)await Ns(Us(n,"backups","readwrite").delete(r));return t}const Fm={0:n=>({...n,schemaVersion:1,state:{...n.state,schemaVersion:1}}),1:n=>{const e=n.state||{},t=Cc(Ws(e.meta?.mode),e.meta?.seed??"migriert",n.savedAt||void 0),i={...e,schemaVersion:2};for(const s of["flags","region","build","economy","population","energy","environment"])i[s]=t[s];return i.politics={...e.politics||{},groups:t.politics.groups,policies:t.politics.policies,legitimacy:t.politics.legitimacy,unrest:t.politics.unrest},i.modifiers=Array.isArray(e.modifiers)?e.modifiers:[],i.derived=t.derived,{...n,schemaVersion:2,state:i}}};function Om(n,e=as){return(n.schemaVersion??0)<e}function uu(n,e=as,t=Fm){let i=structuredClone(n),s=i.schemaVersion??0;if(s>e)throw new Error("save.error.newer");for(;s<e;){const o=t[s];if(!o)throw new Error("save.error.migration");i=o(i),s+=1,i.schemaVersion=s}i.state.schemaVersion=e;const r=Ws(i.state.meta?.mode);return mf(i.state,Cc(r,i.state.meta?.seed??"migriert",i.savedAt||void 0)),i}function Bm(n){let e;try{e=JSON.parse(n)}catch{throw new Error("save.error.notJson")}if(!e||e.format!=="nb3d-save")throw new Error("save.error.format");if(typeof e.schemaVersion!="number"||!e.state||typeof e.state!="object")throw new Error("save.error.format");if(e.schemaVersion>as)throw new Error("save.error.newer");return e}function zm(n,e){const t=new Blob([JSON.stringify(e)],{type:"application/json"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=n,document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e4)}function km(n,e=new Date){const t=e.toISOString().slice(0,10);return`nation-builder-${n}-${t}.json`}const _f=["auto","slot1","slot2","slot3"];let Wn,Hm=null,Fi=null,sa=0,du=Promise.resolve();const zi=()=>Hm||=Nm();function _r(n){const e=du.then(n,n);return du=e.catch(()=>{}),e}async function Gm(){if(Fi!==null||!navigator.storage?.persist)return Fi;try{Fi=await navigator.storage.persisted()||await navigator.storage.persist()}catch{Fi=!1}return Fi}function Vm(n){const{data:e,...t}=n;return t}async function xf(n){if(!_f.includes(n))throw new Error("save.error.slot");const e=Wn.game.snapshot();if(!e?.state)throw new Error("save.error.noGame");const t=e.state.time;return await Dc(await zi(),{id:n,savedAt:e.savedAt,schemaVersion:e.schemaVersion,build:e.build,mode:e.state.meta.mode,month:t.month,startYear:t.startYear,startMonth:t.startMonth,data:e}),sa=t.month,Gm(),Wn.bus.emit("save:saved",{slot:n}),!0}async function fu(n){const e=await zi(),t=await Pc(e,n);if(!t)throw new Error("save.error.empty");let i=t.data;if(Om(i)){const s=i.schemaVersion??0,r=await vf(e,{slot:n,createdAt:new Date().toISOString(),fromVersion:s,data:i});i=uu(i),await Dc(e,{...t,schemaVersion:as,data:i}),Wn.bus.emit("save:migrated",{slot:n,from:s,to:as,backup:r})}else i=uu(i);return await Wn.game.restore(i),sa=i.state.time.month,Wn.bus.emit("save:loaded",{slot:n}),!0}async function Wm({slot:n,text:e}){if(!_f.includes(n))throw new Error("save.error.slot");const t=Bm(e),i=t.state.time||{};return await Dc(await zi(),{id:n,savedAt:t.savedAt||new Date().toISOString(),schemaVersion:t.schemaVersion,build:t.build||"?",mode:t.state.meta?.mode||"sandbox",month:i.month??0,startYear:i.startYear??1900,startMonth:i.startMonth??0,data:t}),!0}async function $m({slot:n}){const e=await Pc(await zi(),n);if(!e)throw new Error("save.error.empty");return zm(km(n),e.data),!0}function hu(){return Wn.store.get()?_r(()=>xf("auto")).catch(n=>Wn.bus.emit("save:error",{slot:"auto",code:n.message})):Promise.resolve()}const Xm={name:"save",required:!0,init(n){Wn=n;const e=Wn.bus;e.handle("save:list",async()=>(await Um(await zi())).map(Vm)),e.handle("save:write",({slot:t})=>_r(()=>xf(t))),e.handle("save:read",({slot:t})=>_r(()=>fu(t))),e.handle("save:delete",async({slot:t})=>(await cu(await zi(),t),!0)),e.handle("save:export",$m),e.handle("save:import",t=>_r(()=>Wm(t))),e.handle("save:persisted",async()=>(Fi===null&&navigator.storage?.persisted&&(Fi=await navigator.storage.persisted().catch(()=>null)),Fi)),e.on("time:month",({month:t})=>{t-sa>=Wn.mode().save.autosaveMonths&&hu()}),e.on("app:hidden",()=>hu()),e.on("app:ready",async()=>{let t=null;try{if(t=await Pc(await zi(),"auto"),t){await _r(()=>fu("auto"));return}}catch(i){e.emit("save:error",{slot:"auto",code:i.message});try{if(t){const s=await zi();await vf(s,{slot:"auto",createdAt:new Date().toISOString(),fromVersion:t.schemaVersion,data:t.data}),await cu(s,"auto")}}catch{}}await Wn.game.newGame({mode:"sandbox"})}),e.on("game:started",({loaded:t})=>{t||(sa=0)})},update(){},serialize(){return null},load(){},dispose(){}};const Lc="187",qm=0,pu=1,Ym=2,Mr=1,Sf=2,xr=3,ls=0,pn=1,ri=2,Fs=0,yr=1,Ll=2,mu=3,gu=4,Km=5,Rs=100,Zm=101,Jm=102,Qm=103,jm=104,e0=200,t0=201,n0=202,i0=203,bf=204,Mf=205,s0=206,r0=207,o0=208,a0=209,l0=210,c0=211,u0=212,d0=213,f0=214,Il=0,Nl=1,Ul=2,Ir=3,Fl=4,Ol=5,Bl=6,zl=7,yf=0,h0=1,p0=2,Ti=0,Ef=1,wf=2,Tf=3,Ic=4,Af=5,Rf=6,Cf=7,Pf=300,zs=301,Nr=302,Ua=303,Fa=304,ra=1e3,Pn=1001,kl=1002,jt=1003,m0=1004,io=1005,Gt=1006,Oa=1007,yi=1008,bn=1009,Df=1010,Lf=1011,Ur=1012,Nc=1013,ui=1014,_n=1015,hn=1016,Uc=1017,Fc=1018,ks=1020,If=35902,Nf=35899,Uf=1021,Ff=1022,Qt=1023,Vi=1026,ki=1027,ss=1028,Oc=1029,An=1030,Bc=1031,zc=1033,$o=33776,Xo=33777,qo=33778,Yo=33779,Hl=35840,Gl=35841,Vl=35842,Wl=35843,$l=36196,Xl=37492,ql=37496,Yl=37488,Kl=37489,oa=37490,Zl=37491,Jl=37808,Ql=37809,jl=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,lc=37819,cc=37820,uc=37821,dc=36492,fc=36494,hc=36495,pc=36283,mc=36284,aa=36285,gc=36286,g0=3200,vc=0,v0=1,Oi="",fn="srgb",zn="srgb-linear",la="linear",_t="srgb",Ba=7680,_0=519,x0=512,S0=513,b0=514,Of=515,M0=516,y0=517,Bf=518,zf=519,E0=35044,kc=35048,vu="300 es",$n=2e3,Fr=2001;function w0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function T0(){const n=ca("canvas");return n.style.display="block",n}const _u={};function xu(...n){const e="THREE."+n.shift();console.log(e,...n)}function kf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Je(...n){n=kf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ht(...n){n=kf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ko(...n){const e=n.join(" ");e in _u||(_u[e]=!0,Je(...n))}function A0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const R0={[Il]:Il,[Ul]:Bl,[Fl]:Fl,[Ir]:Ol,[Nl]:Nl,[Bl]:Ul,[zl]:zl,[Ol]:Ir};class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Su=1234567;const Er=Math.PI/180,Or=180/Math.PI;function Xs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function Hc(n,e){return(n%e+e)%e}function C0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function P0(n,e,t){return n!==e?(t-n)/(e-n):0}function wr(n,e,t){return(1-t)*n+t*e}function D0(n,e,t,i){return wr(n,e,1-Math.exp(-t*i))}function L0(n,e=1){return e-Math.abs(Hc(n,e*2)-e)}function I0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function N0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function U0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function F0(n,e){return n+Math.random()*(e-n)}function O0(n){return n*(.5-Math.random())}function B0(n){n!==void 0&&(Su=n);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function z0(n){return n*Er}function k0(n){return n*Or}function H0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function G0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function V0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),p=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":n.set(a*d,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*d,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*d,a*l);break;case"XZX":n.set(a*d,c*v,c*p,a*l);break;case"YXY":n.set(c*p,a*d,c*v,a*l);break;case"ZYZ":n.set(c*v,c*p,a*d,a*l);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gf(n,e){if(e.constructor===Float32Array)return n;const t=Gc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Vf(n,e){if(e.constructor===Float32Array)return n;const t=Gc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Hi={DEG2RAD:Er,RAD2DEG:Or,generateUUID:Xs,clamp:at,euclideanModulo:Hc,mapLinear:C0,inverseLerp:P0,lerp:wr,damp:D0,pingpong:L0,smoothstep:I0,smootherstep:N0,randInt:U0,randFloat:F0,randFloatSpread:O0,seededRandom:B0,degToRad:z0,radToDeg:k0,isPowerOfTwo:H0,ceilPowerOfTwo:G0,floorPowerOfTwo:Hf,setQuaternionFromProperEuler:V0,normalize:Vf,denormalize:Gf};class ot{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3],u=r[o+0],p=r[o+1],v=r[o+2],x=r[o+3];if(f!==x||c!==u||l!==p||d!==v){let m=c*u+l*p+d*v+f*x;m<0&&(u=-u,p=-p,v=-v,x=-x,m=-m);let g=1-a;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);g=Math.sin(g*M)/w,a=Math.sin(a*M)/w,c=c*g+u*a,l=l*g+p*a,d=d*g+v*a,f=f*g+x*a}else{c=c*g+u*a,l=l*g+p*a,d=d*g+v*a,f=f*g+x*a;const M=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=M,l*=M,d*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],d=i[s+3],f=r[o],u=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+d*f+c*p-l*u,e[t+1]=c*v+d*u+l*f-a*p,e[t+2]=l*v+d*p+a*u-c*f,e[t+3]=d*v-a*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(s/2),f=a(r/2),u=c(i/2),p=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=u*d*f+l*p*v,this._y=l*p*f-u*d*v,this._z=l*d*v+u*p*f,this._w=l*d*f-u*p*v;break;case"YXZ":this._x=u*d*f+l*p*v,this._y=l*p*f-u*d*v,this._z=l*d*v-u*p*f,this._w=l*d*f+u*p*v;break;case"ZXY":this._x=u*d*f-l*p*v,this._y=l*p*f+u*d*v,this._z=l*d*v+u*p*f,this._w=l*d*f-u*p*v;break;case"ZYX":this._x=u*d*f-l*p*v,this._y=l*p*f+u*d*v,this._z=l*d*v-u*p*f,this._w=l*d*f+u*p*v;break;case"YZX":this._x=u*d*f+l*p*v,this._y=l*p*f+u*d*v,this._z=l*d*v-u*p*f,this._w=l*d*f-u*p*v;break;case"XZY":this._x=u*d*f-l*p*v,this._y=l*p*f-u*d*v,this._z=l*d*v+u*p*f,this._w=l*d*f+u*p*v;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-i*l,this._z=r*d+o*l+i*c-s*a,this._w=o*d-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),d=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*d,this.y=i+c*d+a*l-r*f,this.z=s+c*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new Y,bu=new qn;class et{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],u=i[2],p=i[5],v=i[8],x=s[0],m=s[3],g=s[6],M=s[1],w=s[4],y=s[7],C=s[2],T=s[5],S=s[8];return r[0]=o*x+a*M+c*C,r[3]=o*m+a*w+c*T,r[6]=o*g+a*y+c*S,r[1]=l*x+d*M+f*C,r[4]=l*m+d*w+f*T,r[7]=l*g+d*y+f*S,r[2]=u*x+p*M+v*C,r[5]=u*m+p*w+v*T,r[8]=u*g+p*y+v*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*r*d+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,u=a*c-d*r,p=l*r-o*c,v=t*f+i*u+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(s*l-d*i)*x,e[2]=(a*i-s*o)*x,e[3]=u*x,e[4]=(d*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ko("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ka.makeScale(e,t)),this}rotate(e){return Ko("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ka.makeRotation(-e)),this}translate(e,t){return Ko("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new et,Mu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W0(){const n={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zn]:{primaries:e,whitePoint:i,transfer:la,toXYZ:Mu,fromXYZ:yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Mu,fromXYZ:yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const ct=W0();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hs;class $0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hs===void 0&&(hs=ca("canvas")),hs.width=e.width,hs.height=e.height;const s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X0=0;class Vc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ha(s[o].image)):r.push(Ha(s[o]))}else r=Ha(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let q0=0;const Ga=new Y;class on extends us{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=Pn,s=Pn,r=Gt,o=yi,a=Qt,c=bn,l=on.DEFAULT_ANISOTROPY,d=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Xs(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Pf;on.DEFAULT_ANISOTROPY=1;class Ut{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],p=c[5],v=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,y=(p+1)/2,C=(g+1)/2,T=(d+u)/4,S=(f+x)/4,E=(v+m)/4;return w>y&&w>C?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=T/i,r=S/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=E/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=S/r,s=E/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(f-x)/M,this.z=(u-d)/M,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y0 extends us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new on({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Y0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wf extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class K0 extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class lt{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,d,f,u,p,v,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,d,f,u,p,v,x,m)}set(e,t,i,s,r,o,a,c,l,d,f,u,p,v,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=d,g[10]=f,g[14]=u,g[3]=p,g[7]=v,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*d,p=o*f,v=a*d,x=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=p+v*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=v+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*d,p=c*f,v=l*d,x=l*f;t[0]=u+x*a,t[4]=v*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=p*a-v,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*d,p=c*f,v=l*d,x=l*f;t[0]=u-x*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*d,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*d,p=o*f,v=a*d,x=a*f;t[0]=c*d,t[4]=v*l-p,t[8]=u*l+x,t[1]=c*f,t[5]=x*l+u,t[9]=p*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,v=a*c,x=a*l;t[0]=c*d,t[4]=x-u*f,t[8]=v*f+p,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=p*f+v,t[10]=u-x*f}else if(e.order==="XZY"){const u=o*c,p=o*l,v=a*c,x=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+x,t[5]=o*d,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*d,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z0,e,J0)}lookAt(e,t,i){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Pi.crossVectors(i,xn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Pi.crossVectors(i,xn)),Pi.normalize(),so.crossVectors(xn,Pi),s[0]=Pi.x,s[4]=so.x,s[8]=xn.x,s[1]=Pi.y,s[5]=so.y,s[9]=xn.y,s[2]=Pi.z,s[6]=so.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],u=i[9],p=i[13],v=i[2],x=i[6],m=i[10],g=i[14],M=i[3],w=i[7],y=i[11],C=i[15],T=s[0],S=s[4],E=s[8],N=s[12],P=s[1],U=s[5],B=s[9],k=s[13],L=s[2],H=s[6],V=s[10],W=s[14],j=s[3],K=s[7],le=s[11],ue=s[15];return r[0]=o*T+a*P+c*L+l*j,r[4]=o*S+a*U+c*H+l*K,r[8]=o*E+a*B+c*V+l*le,r[12]=o*N+a*k+c*W+l*ue,r[1]=d*T+f*P+u*L+p*j,r[5]=d*S+f*U+u*H+p*K,r[9]=d*E+f*B+u*V+p*le,r[13]=d*N+f*k+u*W+p*ue,r[2]=v*T+x*P+m*L+g*j,r[6]=v*S+x*U+m*H+g*K,r[10]=v*E+x*B+m*V+g*le,r[14]=v*N+x*k+m*W+g*ue,r[3]=M*T+w*P+y*L+C*j,r[7]=M*S+w*U+y*H+C*K,r[11]=M*E+w*B+y*V+C*le,r[15]=M*N+w*k+y*W+C*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],p=e[14],v=e[3],x=e[7],m=e[11],g=e[15],M=c*p-l*u,w=a*p-l*f,y=a*u-c*f,C=o*p-l*d,T=o*u-c*d,S=o*f-a*d;return t*(x*M-m*w+g*y)-i*(v*M-m*C+g*T)+s*(v*w-x*C+g*S)-r*(v*y-x*T+m*S)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-i*(r*d-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],p=e[11],v=e[12],x=e[13],m=e[14],g=e[15],M=t*a-i*o,w=t*c-s*o,y=t*l-r*o,C=i*c-s*a,T=i*l-r*a,S=s*l-r*c,E=d*x-f*v,N=d*m-u*v,P=d*g-p*v,U=f*m-u*x,B=f*g-p*x,k=u*g-p*m,L=M*k-w*B+y*U+C*P-T*N+S*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/L;return e[0]=(a*k-c*B+l*U)*H,e[1]=(s*B-i*k-r*U)*H,e[2]=(x*S-m*T+g*C)*H,e[3]=(u*T-f*S-p*C)*H,e[4]=(c*P-o*k-l*N)*H,e[5]=(t*k-s*P+r*N)*H,e[6]=(m*y-v*S-g*w)*H,e[7]=(d*S-u*y+p*w)*H,e[8]=(o*B-a*P+l*E)*H,e[9]=(i*P-t*B-r*E)*H,e[10]=(v*T-x*y+g*M)*H,e[11]=(f*y-d*T-p*M)*H,e[12]=(a*N-o*U-c*E)*H,e[13]=(t*U-i*N+s*E)*H,e[14]=(x*w-v*C-m*M)*H,e[15]=(d*C-f*w+u*M)*H,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+i,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,f=a+a,u=r*l,p=r*d,v=r*f,x=o*d,m=o*f,g=a*f,M=c*l,w=c*d,y=c*f,C=i.x,T=i.y,S=i.z;return s[0]=(1-(x+g))*C,s[1]=(p+y)*C,s[2]=(v-w)*C,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(u+g))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(v+w)*S,s[9]=(m-M)*S,s[10]=(1-(u+x))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ps.set(s[0],s[1],s[2]).length();const a=ps.set(s[4],s[5],s[6]).length(),c=ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),In.copy(this);const l=1/o,d=1/a,f=1/c;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=$n,c=!1){const l=this.elements,d=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s);let v,x;if(c)v=r/(o-r),x=o*r/(o-r);else if(a===$n)v=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Fr)v=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n,c=!1){const l=this.elements,d=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s);let v,x;if(c)v=1/(o-r),x=o/(o-r);else if(a===$n)v=-2/(o-r),x=-(o+r)/(o-r);else if(a===Fr)v=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new Y,In=new lt,Z0=new Y(0,0,0),J0=new Y(1,1,1),Pi=new Y,so=new Y,xn=new Y,Eu=new lt,wu=new qn;class Wi{constructor(e=0,t=0,i=0,s=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q0=0;const Tu=new Y,ms=new qn,fi=new lt,ro=new Y,ir=new Y,j0=new Y,eg=new qn,Au=new Y(1,0,0),Ru=new Y(0,1,0),Cu=new Y(0,0,1),Pu={type:"added"},tg={type:"removed"},gs={type:"childadded",child:null},Va={type:"childremoved",child:null};class Kt extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new Y,t=new Wi,i=new qn,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new et}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(ir,ro,this.up):fi.lookAt(ro,ir,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(fi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),gs.child=e,this.dispatchEvent(gs),gs.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tg),Va.child=e,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,j0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.DEFAULT_UP=new Y(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ei extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ng={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,v=.005;l.inputState.pinching&&u>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ng)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},oo={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=Hc(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=$a(o,r,e+1/3),this.g=$a(o,r,e),this.b=$a(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=$f[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ct.workingToColorSpace(sn.copy(this),e),Math.round(at(sn.r*255,0,255))*65536+Math.round(at(sn.g*255,0,255))*256+Math.round(at(sn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(sn.copy(this),t);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=fn){ct.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,s=sn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(oo);const i=wr(Di.h,oo.h,t),s=wr(Di.s,oo.s,t),r=wr(Di.l,oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Oe;Oe.NAMES=$f;class $c{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=i}clone(){return new $c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ig extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nn=new Y,hi=new Y,Xa=new Y,pi=new Y,vs=new Y,_s=new Y,Du=new Y,qa=new Y,Ya=new Y,Ka=new Y,Za=new Ut,Ja=new Ut,Qa=new Ut;class Gn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),hi.subVectors(i,t),Xa.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(hi),c=Nn.dot(Xa),l=hi.dot(hi),d=hi.dot(Xa),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(l*c-a*d)*u,v=(o*d-a*c)*u;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(a,pi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Za.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,i),Qa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Za,r.x),o.addScaledVector(Ja,r.y),o.addScaledVector(Qa,r.z),o}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),hi.subVectors(e,t),Nn.cross(hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Nn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;vs.subVectors(s,i),_s.subVectors(r,i),qa.subVectors(e,i);const c=vs.dot(qa),l=_s.dot(qa);if(c<=0&&l<=0)return t.copy(i);Ya.subVectors(e,s);const d=vs.dot(Ya),f=_s.dot(Ya);if(d>=0&&f<=d)return t.copy(s);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(i).addScaledVector(vs,o);Ka.subVectors(e,r);const p=vs.dot(Ka),v=_s.dot(Ka);if(v>=0&&p<=v)return t.copy(r);const x=p*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(_s,a);const m=d*v-p*f;if(m<=0&&f-d>=0&&p-v>=0)return Du.subVectors(r,s),a=(f-d)/(f-d+(p-v)),t.copy(s).addScaledVector(Du,a);const g=1/(m+x+u);return o=x*g,a=u*g,t.copy(i).addScaledVector(vs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $i{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),lo.subVectors(this.max,sr),xs.subVectors(e.a,sr),Ss.subVectors(e.b,sr),bs.subVectors(e.c,sr),Li.subVectors(Ss,xs),Ii.subVectors(bs,Ss),Ki.subVectors(xs,bs);let t=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-Ki.z,Ki.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,Ki.z,0,-Ki.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-Ki.y,Ki.x,0];return!ja(t,xs,Ss,bs,lo)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,xs,Ss,bs,lo))?!1:(co.crossVectors(Li,Ii),t=[co.x,co.y,co.z],ja(t,xs,Ss,bs,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Un=new Y,ao=new $i,xs=new Y,Ss=new Y,bs=new Y,Li=new Y,Ii=new Y,Ki=new Y,sr=new Y,lo=new Y,co=new Y,Zi=new Y;function ja(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),c=e.dot(Zi),l=t.dot(Zi),d=i.dot(Zi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Mi=sg();function sg(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,s[c]=24,s[c|256]=24):(i[c]=31744,i[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,d=0;for(;(l&8388608)===0;)l<<=1,d-=8388608;l&=-8388609,d+=947912704,r[c]=l|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function rg(n){Math.abs(n)>65504&&Je("DataUtils.toHalfFloat(): Value out of range."),n=at(n,-65504,65504),Mi.floatView[0]=n;const e=Mi.uint32View[0],t=e>>23&511;return Mi.baseTable[t]+((e&8388607)>>Mi.shiftTable[t])}function og(n){const e=n>>10;return Mi.uint32View[0]=Mi.mantissaTable[Mi.offsetTable[e]+(n&1023)]+Mi.exponentTable[e],Mi.floatView[0]}class De{static toHalfFloat(e){return rg(e)}static fromHalfFloat(e){return og(e)}}const Bt=new Y,uo=new ot;let ag=0;class Vt extends us{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=E0,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=e!==void 0?Gc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gf(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Vf(e,this.array)}}class Xf extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qf extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ft extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const lg=new $i,rr=new Y,el=new Y;class qs{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(el)),this.expandByPoint(rr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cg=0;const En=new lt,tl=new Kt,Ms=new Y,Sn=new $i,or=new $i,Yt=new Y;class Zt extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w0(e)?qf:Xf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Sn.min,or.min),Sn.expandByPoint(Yt),Yt.addVectors(Sn.max,or.max),Sn.expandByPoint(Yt)):(Sn.expandByPoint(or.min),Sn.expandByPoint(or.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Yt.fromBufferAttribute(a,l),c&&(Ms.fromBufferAttribute(e,l),Yt.add(Ms)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Vt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[],l=new Uint8Array(i.count);for(let N=0;N<i.count;N++)a[N]=new Y,c[N]=new Y;const d=new Y,f=new Y,u=new Y,p=new ot,v=new ot,x=new ot,m=new Y,g=new Y;function M(N,P,U){l[N]=l[P]=l[U]=1,d.fromBufferAttribute(i,N),f.fromBufferAttribute(i,P),u.fromBufferAttribute(i,U),p.fromBufferAttribute(r,N),v.fromBufferAttribute(r,P),x.fromBufferAttribute(r,U),f.sub(d),u.sub(d),v.sub(p),x.sub(p);const B=1/(v.x*x.y-x.x*v.y);isFinite(B)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(u,-v.y).multiplyScalar(B),g.copy(u).multiplyScalar(v.x).addScaledVector(f,-x.x).multiplyScalar(B),a[N].add(m),a[P].add(m),a[U].add(m),c[N].add(g),c[P].add(g),c[U].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,P=w.length;N<P;++N){const U=w[N],B=U.start,k=U.count;for(let L=B,H=B+k;L<H;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new Y,C=new Y,T=new Y,S=new Y;function E(N){T.fromBufferAttribute(s,N),S.copy(T);const P=a[N];y.copy(P),y.sub(T.multiplyScalar(T.dot(P))).normalize(),C.crossVectors(S,P);const B=C.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,B)}for(let N=0,P=i.count;N<P;++N)l[N]&&E(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,c=new Y,l=new Y,d=new Y,f=new Y;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(d),c.add(d),l.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,f=a.normalized,u=new l.constructor(c.length*d);let p=0,v=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*d;for(let g=0;g<d;g++)u[v++]=l[p++]}return new Vt(u,d,f)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){const u=l[d],p=e(u,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];d.push(p.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],f=r[l];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new Y,ug=new Y,dg=new et;class Si{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=nl.subVectors(i,t).cross(ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(nl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dg.getNormalMatrix(e),s=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let fg=0;class Ys extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=yr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Mf,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Si().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gi=new Y,il=new Y,fo=new Y,ho=new Y;class Xc{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){il.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),ho.copy(this.origin).sub(il);const r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=ho.dot(this.direction),c=-ho.dot(fo),l=ho.lengthSq(),d=Math.abs(1-o*o);let f,u,p,v;if(d>0)if(f=o*c-a,u=o*a-c,v=r*d,f>=0)if(u>=-v)if(u<=v){const x=1/d;f*=x,u*=x,p=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u<=-v?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l):u<=v?(f=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(il).addScaledVector(fo,u),p}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,u=e.y-o.y,p=e.z-o.z,v=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,M=i.y-o.y,w=i.z-o.z,y=Math.abs(c),C=Math.abs(l),T=Math.abs(d);let S,E,N,P,U,B,k,L,H,V,W,j;if(y>=C&&y>=T?(N=c,B=f,H=v,j=g,c>=0?(S=l,E=d,P=u,U=p,k=x,L=m,V=M,W=w):(S=d,E=l,P=p,U=u,k=m,L=x,V=w,W=M)):C>=T?(N=l,B=u,H=x,j=M,l>=0?(S=d,E=c,P=p,U=f,k=m,L=v,V=w,W=g):(S=c,E=d,P=f,U=p,k=v,L=m,V=g,W=w)):(N=d,B=p,H=m,j=w,d>=0?(S=c,E=l,P=f,U=u,k=v,L=x,V=g,W=M):(S=l,E=c,P=u,U=f,k=x,L=v,V=M,W=g)),N===0)return null;const K=S/N,le=E/N,ue=1/N,Pe=P-K*B,ke=U-le*B,re=k-K*H,Me=L-le*H,Ue=V-K*j,ze=W-le*j,ge=Ue*Me-ze*re,qe=Pe*ze-ke*Ue,gt=re*ke-Me*Pe;if(s){if(ge<0||qe<0||gt<0)return null}else if((ge<0||qe<0||gt<0)&&(ge>0||qe>0||gt>0))return null;const $e=ge+qe+gt;if($e===0)return null;const ut=ue*(ge*B+qe*H+gt*j);return($e>0?ut<0:ut>0)?null:this.at(ut/$e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qc extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lu=new lt,Ji=new Xc,po=new qs,Iu=new Y,mo=new Y,go=new Y,vo=new Y,sl=new Y,_o=new Y,Nu=new Y,xo=new Y;class mn extends Kt{constructor(e=new Zt,t=new qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=a[c],f=r[c];d!==0&&(sl.fromBufferAttribute(f,e),o?_o.addScaledVector(sl,d):_o.addScaledVector(sl.sub(t),d))}t.add(_o)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(po.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(po,Iu)===null||Ji.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(Lu.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Lu),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=u.length;v<x;v++){const m=u[v],g=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,C=w;y<C;y+=3){const T=a.getX(y),S=a.getX(y+1),E=a.getX(y+2);s=So(this,g,e,i,l,d,f,T,S,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,g=x;m<g;m+=3){const M=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=So(this,o,e,i,l,d,f,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,x=u.length;v<x;v++){const m=u[v],g=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,C=w;y<C;y+=3){const T=y,S=y+1,E=y+2;s=So(this,g,e,i,l,d,f,T,S,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=v,g=x;m<g;m+=3){const M=m,w=m+1,y=m+2;s=So(this,o,e,i,l,d,f,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function hg(n,e,t,i,s,r,o,a){let c;if(e.side===pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ls,a),c===null)return null;xo.copy(a),xo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(xo);return l<t.near||l>t.far?null:{distance:l,point:xo.clone(),object:n}}function So(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,mo),n.getVertexPosition(c,go),n.getVertexPosition(l,vo);const d=hg(n,e,t,i,mo,go,vo,Nu);if(d){const f=new Y;Gn.getBarycoord(Nu,mo,go,vo,f),s&&(d.uv=Gn.getInterpolatedAttribute(s,a,c,l,f,new ot)),r&&(d.uv1=Gn.getInterpolatedAttribute(r,a,c,l,f,new ot)),o&&(d.normal=Gn.getInterpolatedAttribute(o,a,c,l,f,new Y),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new Y,materialIndex:0};Gn.getNormal(mo,go,vo,u.normal),d.face=u,d.barycoord=f}return d}class ua extends on{constructor(e=null,t=1,i=1,s,r,o,a,c,l=jt,d=jt,f,u){super(null,o,a,c,l,d,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uu extends Vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new lt,Fu=new lt,bo=[],Ou=new $i,pg=new lt,ar=new mn,lr=new qs;class Hs extends mn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),Ou.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(Ou)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),lr.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(i),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),Fu.multiplyMatrices(i,ys),ar.matrixWorld=Fu,ar.raycast(e,bo);for(let o=0,a=bo.length;o<a;o++){const c=bo[o];c.instanceId=r,c.object=this,t.push(c)}bo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Uu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ua(new Float32Array(s*this.count),s,this.count,ss,_n));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qi=new qs,mg=new ot(.5,.5),Mo=new Y;class Br{constructor(e=new Si,t=new Si,i=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],u=r[6],p=r[7],v=r[8],x=r[9],m=r[10],g=r[11],M=r[12],w=r[13],y=r[14],C=r[15];if(s[0].setComponents(l-o,p-d,g-v,C-M).normalize(),s[1].setComponents(l+o,p+d,g+v,C+M).normalize(),s[2].setComponents(l+a,p+f,g+x,C+w).normalize(),s[3].setComponents(l-a,p-f,g-x,C-w).normalize(),i)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(l-c,p-u,g-m,C-y).normalize();else if(s[4].setComponents(l-c,p-u,g-m,C-y).normalize(),t===$n)s[5].setComponents(l+c,p+u,g+m,C+y).normalize();else if(t===Fr)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);const t=mg.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Mo.x=s.normal.x>0?e.max.x:e.min.x,Mo.y=s.normal.y>0?e.max.y:e.min.y,Mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Bu=new lt;class Yc{constructor(){this.coordinateSystem=$n,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Bu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Br),i[s].setFromProjectionMatrix(Bu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Br),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Yc().copy(this)}}class gg extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zu=new lt,_c=new Xc,yo=new qs,Eo=new Y;class Yf extends Kt{constructor(e=new Zt,t=new gg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;zu.copy(s).invert(),_c.copy(e.ray).applyMatrix4(zu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let v=u,x=p;v<x;v++){const m=l.getX(v);Eo.fromBufferAttribute(f,m),ku(Eo,m,c,s,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=u,x=p;v<x;v++)Eo.fromBufferAttribute(f,v),ku(Eo,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ku(n,e,t,i,s,r,o){const a=_c.distanceSqToPoint(n);if(a<t){const c=new Y;_c.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kf extends on{constructor(e=[],t=zs,i,s,r,o,a,c,l,d){super(e,t,i,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zf extends on{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gs extends on{constructor(e,t,i=ui,s,r,o,a=jt,c=jt,l,d=Vi,f=1){if(d!==Vi&&d!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Jf extends Gs{constructor(e,t=ui,i=zs,s,r,o=jt,a=jt,c,l=Vi){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qf extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ks extends Zt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],f=[];let u=0,p=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2));function v(x,m,g,M,w,y,C,T,S,E,N){const P=y/S,U=C/E,B=y/2,k=C/2,L=T/2,H=S+1,V=E+1;let W=0,j=0;const K=new Y;for(let le=0;le<V;le++){const ue=le*U-k;for(let Pe=0;Pe<H;Pe++){const ke=Pe*P-B;K[x]=ke*M,K[m]=ue*w,K[g]=L,l.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=T>0?1:-1,d.push(K.x,K.y,K.z),f.push(Pe/S),f.push(1-le/E),W+=1}}for(let le=0;le<E;le++)for(let ue=0;ue<S;ue++){const Pe=u+ue+H*le,ke=u+ue+H*(le+1),re=u+(ue+1)+H*(le+1),Me=u+(ue+1)+H*le;c.push(Pe,ke,Me),c.push(ke,re,Me),j+=6}a.addGroup(p,j,N),p+=j,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vr extends Zt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],u=[],p=[];let v=0;const x=[],m=i/2;let g=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(p,2));function M(){const y=new Y,C=new Y;let T=0;const S=(t-e)/i;for(let E=0;E<=r;E++){const N=[],P=E/r,U=P*(t-e)+e;for(let B=0;B<=s;B++){const k=B/s,L=k*c+a,H=Math.sin(L),V=Math.cos(L);C.x=U*H,C.y=-P*i+m,C.z=U*V,f.push(C.x,C.y,C.z),y.set(H,S,V).normalize(),u.push(y.x,y.y,y.z),p.push(k,1-P),N.push(v++)}x.push(N)}for(let E=0;E<s;E++)for(let N=0;N<r;N++){const P=x[N][E],U=x[N+1][E],B=x[N+1][E+1],k=x[N][E+1];(e>0||N!==0)&&(d.push(P,U,k),T+=3),(t>0||N!==r-1)&&(d.push(U,B,k),T+=3)}l.addGroup(g,T,0),g+=T}function w(y){const C=v,T=new ot,S=new Y;let E=0;const N=y===!0?e:t,P=y===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),v++;const U=v;for(let B=0;B<=s;B++){const L=B/s*c+a,H=Math.cos(L),V=Math.sin(L);S.x=N*V,S.y=m*P,S.z=N*H,f.push(S.x,S.y,S.z),u.push(0,P,0),T.x=H*.5+.5,T.y=V*.5*P+.5,p.push(T.x,T.y),v++}for(let B=0;B<s;B++){const k=C+B,L=U+B;y===!0?d.push(L,L+1,k):d.push(L+1,L,k),E+=3}l.addGroup(g,E,y===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kc extends Vr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Kc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zc extends Zt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),d(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const w=new Y,y=new Y,C=new Y;for(let T=0;T<t.length;T+=3)p(t[T+0],w),p(t[T+1],y),p(t[T+2],C),c(w,y,C,M)}function c(M,w,y,C){const T=C+1,S=[];for(let E=0;E<=T;E++){S[E]=[];const N=M.clone().lerp(y,E/T),P=w.clone().lerp(y,E/T),U=T-E;for(let B=0;B<=U;B++)B===0&&E===T?S[E][B]=N:S[E][B]=N.clone().lerp(P,B/U)}for(let E=0;E<T;E++)for(let N=0;N<2*(T-E)-1;N++){const P=Math.floor(N/2);N%2===0?(u(S[E][P+1]),u(S[E+1][P]),u(S[E][P])):(u(S[E][P+1]),u(S[E+1][P+1]),u(S[E+1][P]))}}function l(M){const w=new Y;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function d(){const M=new Y;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const y=m(M)/2/Math.PI+.5,C=g(M)/Math.PI+.5;o.push(y,1-C)}v(),f()}function f(){for(let M=0;M<o.length;M+=6){const w=o[M+0],y=o[M+2],C=o[M+4],T=Math.max(w,y,C),S=Math.min(w,y,C);T>.9&&S<.1&&(w<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,w){const y=M*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function v(){const M=new Y,w=new Y,y=new Y,C=new Y,T=new ot,S=new ot,E=new ot;for(let N=0,P=0;N<r.length;N+=9,P+=6){M.set(r[N+0],r[N+1],r[N+2]),w.set(r[N+3],r[N+4],r[N+5]),y.set(r[N+6],r[N+7],r[N+8]),T.set(o[P+0],o[P+1]),S.set(o[P+2],o[P+3]),E.set(o[P+4],o[P+5]),C.copy(M).add(w).add(y).divideScalar(3);const U=m(C);x(T,P+0,M,U),x(S,P+2,w,U),x(E,P+4,y,U)}}function x(M,w,y,C){C<0&&M.x===1&&(o[w]=M.x-1),y.x===0&&y.z===0&&(o[w]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.vertices,e.indices,e.radius,e.detail)}}class da extends Zc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new da(e.radius,e.detail)}}class cs extends Zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,d=c+1,f=e/a,u=t/c,p=[],v=[],x=[],m=[];for(let g=0;g<d;g++){const M=g*u-o;for(let w=0;w<l;w++){const y=w*f-r;v.push(y,-M,0),x.push(0,0,1),m.push(w/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<a;M++){const w=M+l*g,y=M+l*(g+1),C=M+1+l*(g+1),T=M+1+l*g;p.push(w,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new Ft(v,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Hu(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Hu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const s in i)e[s]=i[s]}return e}function Hu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const eh={clone:Vs,merge:un};var _g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_g,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Sg extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tr extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bg extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mg extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Vu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Vu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Vu(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class yg{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){const f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=l.length;f<u;f+=2){const p=l[f],v=l[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Eg=new yg;class Jc{constructor(e){this.manager=e!==void 0?e:Eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class wg extends Error{constructor(e,t){super(e),this.response=t}}class Tg extends Jc{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Gu.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:i,onError:s});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=vi[e],f=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=u?parseInt(u):0,v=p!==0;let x=0;const m=new ReadableStream({start(g){M();function M(){f.read().then(({done:w,value:y})=>{if(w)g.close();else{x+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:p});for(let T=0,S=d.length;T<S;T++){const E=d[T];E.onProgress&&E.onProgress(C)}g.enqueue(y),M()}},w=>{g.error(w)})}}});return new Response(m)}else throw new wg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(u);return l.arrayBuffer().then(v=>p.decode(v))}}}).then(l=>{Gu.add(`file:${e}`,l);const d=vi[e];delete vi[e];for(let f=0,u=d.length;f<u;f++){const p=d[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{const d=vi[e];if(d===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let f=0,u=d.length;f<u;f++){const p=d[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ag extends Jc{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new ua,a=new Tg(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(d){s!==void 0?s(d):ht(d);return}r._applyTexData(o,l),t&&t(o,l)},i,s),o}createDataTexture(e){const t=new ua;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Pn,e.wrapT=t.wrapT!==void 0?t.wrapT:Pn,e.magFilter=t.magFilter!==void 0?t.magFilter:Gt,e.minFilter=t.minFilter!==void 0?t.minFilter:Gt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=yi),t.mipmapCount===1&&(e.minFilter=Gt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class th extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Rg extends th{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const rl=new lt,Wu=new Y,$u=new Y;class Cg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wo=new Y,To=new qn,Qn=new Y;class nh extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wo,To,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,To,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wo,To,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,To,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new Y,Xu=new ot,qu=new ot;class kn extends nh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,qu),t.subVectors(qu,Xu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Qc extends nh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pg extends Cg{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dg extends th{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Pg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Es=-90,ws=1;class xc extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(Es,ws,e,t);s.layers=this.layers,this.add(s);const r=new kn(Es,ws,e,t);r.layers=this.layers,this.add(r);const o=new kn(Es,ws,e,t);o.layers=this.layers,this.add(o);const a=new kn(Es,ws,e,t);a.layers=this.layers,this.add(a);const c=new kn(Es,ws,e,t);c.layers=this.layers,this.add(c);const l=new kn(Es,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Lg extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Yu=new lt;class ih{constructor(e,t,i=0,s=1/0){this.ray=new Xc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yu),this}intersectObject(e,t=!0,i=[]){return Sc(e,this,i,t),i.sort(Ku),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Sc(e[s],this,i,t);return i.sort(Ku),i}}function Ku(n,e){return n.distance-e.distance}function Sc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Sc(r[o],e,t,!0)}}function Zu(n,e,t,i){const s=Ig(i);switch(t){case Uf:return n*e;case ss:return n*e/s.components*s.byteLength;case Oc:return n*e/s.components*s.byteLength;case An:return n*e*2/s.components*s.byteLength;case Bc:return n*e*2/s.components*s.byteLength;case Ff:return n*e*3/s.components*s.byteLength;case Qt:return n*e*4/s.components*s.byteLength;case zc:return n*e*4/s.components*s.byteLength;case $o:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Wl:return Math.max(n,16)*Math.max(e,8)/4;case Hl:case Vl:return Math.max(n,8)*Math.max(e,8)/2;case $l:case Xl:case Yl:case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ql:case oa:case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dc:case fc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case aa:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ig(n){switch(n){case bn:case Df:return{byteLength:1,components:1};case Ur:case Lf:case hn:return{byteLength:2,components:1};case Uc:case Fc:return{byteLength:2,components:4};case ui:case Nc:case _n:return{byteLength:4,components:1};case If:case Nf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);function sh(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ng(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,d),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const d=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,d);else{f.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<f.length;p++){const v=f[u],x=f[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,v=f.length;p<v;p++){const x=f[p];n.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
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
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vg=`#ifdef USE_BATCHING
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
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yg=`#ifdef USE_IRIDESCENCE
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
#endif`,Kg=`#ifdef USE_BUMPMAP
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sv=`#define PI 3.141592653589793
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
} // validated`,rv=`vec3 transformedNormal = objectNormal;
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
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pv=`#ifdef USE_ENVMAP
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
#endif`,mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bv=`#ifdef USE_GRADIENTMAP
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
}`,Mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tv=`#ifdef USE_ENVMAP
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
#endif`,Av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dv=`PhysicalMaterial material;
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
#endif`,Lv=`uniform sampler2D dfgLUT;
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
}`,Iv=`
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
#endif`,Nv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wv=`#if defined( USE_POINTS_UV )
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
#endif`,$v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Kv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
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
#endif`,Jv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i_=`#ifdef USE_NORMALMAP
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
#endif`,s_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,__=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x_=`float getShadowMask() {
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
}`,S_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,M_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
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
#endif`,E_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U_=`uniform sampler2D t2D;
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`uniform float backgroundBlurriness;
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`#include <common>
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
}`,H_=`#if DEPTH_PACKING == 3200
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
}`,G_=`#define DISTANCE
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
}`,V_=`#define DISTANCE
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`uniform float scale;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,K_=`uniform vec3 diffuse;
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
}`,Z_=`#define LAMBERT
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
}`,J_=`#define LAMBERT
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
}`,Q_=`#define MATCAP
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
}`,j_=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,sx=`#define STANDARD
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
}`,rx=`#define STANDARD
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
}`,ox=`#define TOON
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
}`,ax=`#define TOON
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
}`,lx=`uniform float size;
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
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 color;
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
}`,fx=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Ug,alphahash_pars_fragment:Fg,alphamap_fragment:Og,alphamap_pars_fragment:Bg,alphatest_fragment:zg,alphatest_pars_fragment:kg,aomap_fragment:Hg,aomap_pars_fragment:Gg,batching_pars_vertex:Vg,batching_vertex:Wg,begin_vertex:$g,beginnormal_vertex:Xg,bsdfs:qg,iridescence_fragment:Yg,bumpmap_pars_fragment:Kg,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:Jg,clipping_planes_pars_vertex:Qg,clipping_planes_vertex:jg,color_fragment:ev,color_pars_fragment:tv,color_pars_vertex:nv,color_vertex:iv,common:sv,defaultnormal_vertex:rv,displacementmap_pars_vertex:ov,displacementmap_vertex:av,emissivemap_fragment:lv,emissivemap_pars_fragment:cv,colorspace_fragment:uv,colorspace_pars_fragment:dv,envmap_fragment:fv,envmap_common_pars_fragment:hv,envmap_pars_fragment:pv,envmap_pars_vertex:mv,envmap_physical_pars_fragment:Tv,envmap_vertex:gv,fog_vertex:vv,fog_pars_vertex:_v,fog_fragment:xv,fog_pars_fragment:Sv,gradientmap_pars_fragment:bv,lightmap_pars_fragment:Mv,lights_lambert_fragment:yv,lights_lambert_pars_fragment:Ev,lights_pars_begin:wv,lights_toon_fragment:Av,lights_toon_pars_fragment:Rv,lights_phong_fragment:Cv,lights_phong_pars_fragment:Pv,lights_physical_fragment:Dv,lights_physical_pars_fragment:Lv,lights_fragment_begin:Iv,lights_fragment_maps:Nv,lights_fragment_end:Uv,lightprobes_pars_fragment:Fv,logdepthbuf_fragment:Ov,logdepthbuf_pars_fragment:Bv,logdepthbuf_pars_vertex:zv,logdepthbuf_vertex:kv,map_fragment:Hv,map_pars_fragment:Gv,map_particle_fragment:Vv,map_particle_pars_fragment:Wv,metalnessmap_fragment:$v,metalnessmap_pars_fragment:Xv,morphinstance_vertex:qv,morphcolor_vertex:Yv,morphnormal_vertex:Kv,morphtarget_pars_vertex:Zv,morphtarget_vertex:Jv,normal_fragment_begin:Qv,normal_fragment_maps:jv,normal_pars_fragment:e_,normal_pars_vertex:t_,normal_vertex:n_,normalmap_pars_fragment:i_,clearcoat_normal_fragment_begin:s_,clearcoat_normal_fragment_maps:r_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:a_,opaque_fragment:l_,packing:c_,premultiplied_alpha_fragment:u_,project_vertex:d_,dithering_fragment:f_,dithering_pars_fragment:h_,roughnessmap_fragment:p_,roughnessmap_pars_fragment:m_,shadowmap_pars_fragment:g_,shadowmap_pars_vertex:v_,shadowmap_vertex:__,shadowmask_pars_fragment:x_,skinbase_vertex:S_,skinning_pars_vertex:b_,skinning_vertex:M_,skinnormal_vertex:y_,specularmap_fragment:E_,specularmap_pars_fragment:w_,tonemapping_fragment:T_,tonemapping_pars_fragment:A_,transmission_fragment:R_,transmission_pars_fragment:C_,uv_pars_fragment:P_,uv_pars_vertex:D_,uv_vertex:L_,worldpos_vertex:I_,background_vert:N_,background_frag:U_,backgroundCube_vert:F_,backgroundCube_frag:O_,cube_vert:B_,cube_frag:z_,depth_vert:k_,depth_frag:H_,distance_vert:G_,distance_frag:V_,equirect_vert:W_,equirect_frag:$_,linedashed_vert:X_,linedashed_frag:q_,meshbasic_vert:Y_,meshbasic_frag:K_,meshlambert_vert:Z_,meshlambert_frag:J_,meshmatcap_vert:Q_,meshmatcap_frag:j_,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:sx,meshphysical_frag:rx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:lx,points_frag:cx,shadow_vert:ux,shadow_frag:dx,sprite_vert:fx,sprite_frag:hx},Fe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ni={basic:{uniforms:un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:un([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:un([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:un([Fe.points,Fe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:un([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:un([Fe.common,Fe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:un([Fe.sprite,Fe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:un([Fe.common,Fe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:un([Fe.lights,Fe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ni.physical={uniforms:un([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ao={r:0,b:0,g:0},px=new lt,rh=new et;rh.set(-1,0,0,0,1,0,0,0,1);function mx(n,e,t,i,s,r){const o=new Oe(0);let a=s===!0?0:1,c,l,d=null,f=0,u=null;function p(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function v(M){let w=!1;const y=p(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,w){const y=p(w);y&&y.isCubeTexture?(l===void 0&&(l=new mn(new Ks(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Vs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rh),l.material.toneMapped=ct.getTransfer(y.colorSpace)!==_t,(d!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new mn(new cs(2,2),new Xn({name:"BackgroundMaterial",uniforms:Vs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ct.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(Ao,jf(n)),t.buffers.color.setClear(Ao.r,Ao.g,Ao.b,w,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:v,addToRenderList:x,dispose:g}}function gx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(U,B,k,L,H){let V=!1;const W=f(U,L,k,B);r!==W&&(r=W,l(r.object)),V=p(U,L,k,H),V&&v(U,L,k,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(U,B,k,L),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function d(U){return n.deleteVertexArray(U)}function f(U,B,k,L){const H=L.wireframe===!0;let V=i[B.id];V===void 0&&(V={},i[B.id]=V);const W=U.isInstancedMesh===!0?U.id:0;let j=V[W];j===void 0&&(j={},V[W]=j);let K=j[k.id];K===void 0&&(K={},j[k.id]=K);let le=K[H];return le===void 0&&(le=u(c()),K[H]=le),le}function u(U){const B=[],k=[],L=[];for(let H=0;H<t;H++)B[H]=0,k[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:L,object:U,attributes:{},index:null}}function p(U,B,k,L){const H=r.attributes,V=B.attributes;let W=0;const j=k.getAttributes();for(const K in j)if(j[K].location>=0){const ue=H[K];let Pe=V[K];if(Pe===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Pe=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Pe=U.instanceColor)),ue===void 0||ue.attribute!==Pe||Pe&&ue.data!==Pe.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function v(U,B,k,L){const H={},V=B.attributes;let W=0;const j=k.getAttributes();for(const K in j)if(j[K].location>=0){let ue=V[K];ue===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor));const Pe={};Pe.attribute=ue,ue&&ue.data&&(Pe.data=ue.data),H[K]=Pe,W++}r.attributes=H,r.attributesNum=W,r.index=L}function x(){const U=r.newAttributes;for(let B=0,k=U.length;B<k;B++)U[B]=0}function m(U){g(U,0)}function g(U,B){const k=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;k[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),H[U]!==B&&(n.vertexAttribDivisor(U,B),H[U]=B)}function M(){const U=r.newAttributes,B=r.enabledAttributes;for(let k=0,L=B.length;k<L;k++)B[k]!==U[k]&&(n.disableVertexAttribArray(k),B[k]=0)}function w(U,B,k,L,H,V,W){W===!0?n.vertexAttribIPointer(U,B,k,H,V):n.vertexAttribPointer(U,B,k,L,H,V)}function y(U,B,k,L){x();const H=L.attributes,V=k.getAttributes(),W=B.defaultAttributeValues;for(const j in V){const K=V[j];if(K.location>=0){let le=H[j];if(le===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),le!==void 0){const ue=le.normalized,Pe=le.itemSize,ke=e.get(le);if(ke===void 0)continue;const re=ke.buffer,Me=ke.type,Ue=ke.bytesPerElement,ze=Me===n.INT||Me===n.UNSIGNED_INT||le.gpuType===Nc;if(le.isInterleavedBufferAttribute){const ge=le.data,qe=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,gt=le.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let $e=0;$e<K.locationSize;$e++)g(K.location+$e,ge.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let $e=0;$e<K.locationSize;$e++)m(K.location+$e);n.bindBuffer(n.ARRAY_BUFFER,re);for(let $e=0;$e<K.locationSize;$e++)w(K.location+$e,Pe/K.locationSize,Me,ue,qe*Ue,(gt+Pe/K.locationSize*$e)*Ue,ze)}else{if(le.isInstancedBufferAttribute){for(let ge=0;ge<K.locationSize;ge++)g(K.location+ge,le.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<K.locationSize;ge++)m(K.location+ge);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ge=0;ge<K.locationSize;ge++)w(K.location+ge,Pe/K.locationSize,Me,ue,Pe*Ue,Pe/K.locationSize*ge*Ue,ze)}}else if(W!==void 0){const ue=W[j];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(K.location,ue);break;case 3:n.vertexAttrib3fv(K.location,ue);break;case 4:n.vertexAttrib4fv(K.location,ue);break;default:n.vertexAttrib1fv(K.location,ue)}}}}M()}function C(){N();for(const U in i){const B=i[U];for(const k in B){const L=B[k];for(const H in L){const V=L[H];for(const W in V)d(V[W].object),delete V[W];delete L[H]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const B=i[U.id];for(const k in B){const L=B[k];for(const H in L){const V=L[H];for(const W in V)d(V[W].object),delete V[W];delete L[H]}}delete i[U.id]}function S(U){for(const B in i){const k=i[B];for(const L in k){const H=k[L];if(H[U.id]===void 0)continue;const V=H[U.id];for(const W in V)d(V[W].object),delete V[W];delete H[U.id]}}}function E(U){for(const B in i){const k=i[B],L=U.isInstancedMesh===!0?U.id:0,H=k[L];if(H!==void 0){for(const V in H){const W=H[V];for(const j in W)d(W[j].object),delete W[j];delete H[V]}delete k[L],Object.keys(k).length===0&&delete i[B]}}}function N(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function vx(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let u=0;for(let p=0;p<d;p++)u+=l[p];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _x(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==Qt&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const E=S===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==bn&&S!==_n&&!E&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Je("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:C,samples:T}}function xx(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Si,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||s;return s=u,i=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=n.get(f);if(!s||v===null||v.length===0||r&&!m)r?d(null):l();else{const M=r?0:i,w=M*4;let y=g.clippingState||null;c.value=y,y=d(v,u,w,p);for(let C=0;C!==w;++C)y[C]=t[C];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,v!==!0||m===null){const g=p+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,y=p;w!==x;++w,y+=4)o.copy(f[w]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}class jc extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Kf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ks(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Fs});r.uniforms.tEquirect.value=t;const o=new mn(s,r),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=Gt),new xc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ju=256,Sx=3,bx=20,oh=256,ah=16,Mx=3,yx=new Y,Ex=new Oe;class zr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xc(1,10,null),this._boxMesh=new mn(new Ks(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=yx}=r,c=this._renderer;this._setSize(o);const l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,u=c.autoClearColor,p=c.autoClearDepth,v=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Ex));const m=new xc(i,s,d);return m.position.copy(a),m.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=p,c.autoClearStencil=v,e.background=x,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ju,Hf(e))}_fromTexture(e,t){e.mapping===zs||e.mapping===Nr?this._setSize(e.image.length===0?Ju:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Qu(e,!1,!1),i=Math.log2(e)-Sx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Qu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zs||e.mapping===Nr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ju()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=wx(),this._integrationMaterial=Tx());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ah);for(let o=0;o<=i;o++){const a=zr.lodToRoughness(o,i);if(o>i-Mx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const c=a>0?Math.log2(t)+.5*Math.log2(6/(oh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ax());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function Qu(n,e,t){return new jc(n,{minFilter:yi,generateMipmaps:e,type:hn,colorSpace:zn,depthBuffer:t})}function Wr(n,e,t){return new Xn({name:n,uniforms:e,vertexShader:it.cube_vert,fragmentShader:t,side:pn,blending:Fs,depthTest:!1,depthWrite:!1})}function wx(){return Wr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${oh}u

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
	`)}function Tx(){return Wr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ah}},`

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
	`)}function Ax(){return Wr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bx}
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
	`)}function ju(){return Wr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ed(){return Wr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Rx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Ua||p===Fa)if(e.has(u)){const v=e.get(u).texture;return a(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const x=new jc(v.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",l),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const p=u.mapping,v=p===Ua||p===Fa,x=p===zs||p===Nr;if(v||x){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new zr(n)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return v&&M&&M.height>0||x&&M&&c(M)?(i===null&&(i=new zr(n)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,p){return p===Ua?u.mapping=zs:p===Fa&&(u.mapping=Nr),u}function c(u){let p=0;const v=6;for(let x=0;x<v;x++)u[x]!==void 0&&p++;return p===v}function l(u){const p=u.target;p.removeEventListener("dispose",l);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Cx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ko("WebGLRenderer: "+i+" extension not supported."),s}}}function Px(n,e,t,i){const s={},r=new WeakMap,o=new FinalizationRegistry(v=>delete s[v]);function a(v){c(v.target)}function c(v){v.index!==null&&e.remove(v.index);for(const m in v.attributes)e.remove(v.attributes[m]);v.removeEventListener("dispose",a),delete s[v.id],o.unregister(v);const x=r.get(v);x&&(e.remove(x),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(v,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function d(v){const x=v.attributes;for(const m in x)e.update(x[m],n.ARRAY_BUFFER)}function f(v){const x=v.index,m=v.attributes.position;let g=0;if(m===void 0)return;const M=x!==null?x.array.length:m.array.length/3-1,w=m.count>=65535?qf:Xf,y=new w(Math.ceil(M/3)*6,1),C=y.array;if(x!==null){const S=x.array;g=x.version;for(let E=0,N=0;E<M;E+=3){const P=S[E+0],U=S[E+1],B=S[E+2];C[N++]=P,C[N++]=U,C[N++]=U,C[N++]=B,C[N++]=B,C[N++]=P}}else{g=m.version;for(let S=0,E=0;S<M;S+=3){const N=S+0,P=S+1,U=S+2;C[E++]=N,C[E++]=P,C[E++]=P,C[E++]=U,C[E++]=U,C[E++]=N}}y.version=g;const T=r.get(v);T&&e.remove(T),r.set(v,y)}function u(v){const x=r.get(v);if(x){const m=v.index;m!==null&&x.version<m.version&&f(v)}else f(v);return r.get(v)}function p(){for(const v in s){const x=s[v].deref();x!==void 0&&c(x)}}return{get:l,update:d,getWireframeAttribute:u,dispose:p}}function Dx(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function l(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,f*o,p),t.update(u,i,p))}function d(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,p);let x=0;for(let m=0;m<p;m++)x+=u[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Lx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ix(n,e,t){const i=new WeakMap,s=new Ut;function r(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let N=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;p===!0&&(w=1),v===!0&&(w=2),x===!0&&(w=3);let y=a.attributes.position.count*w,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*C*4*f),S=new Wf(T,y,C,f);S.type=_n,S.needsUpdate=!0;const E=w*4;for(let P=0;P<f;P++){const U=m[P],B=g[P],k=M[P],L=y*C*4*P;for(let H=0;H<U.count;H++){const V=H*E;p===!0&&(s.fromBufferAttribute(U,H),T[L+V+0]=s.x,T[L+V+1]=s.y,T[L+V+2]=s.z,T[L+V+3]=0),v===!0&&(s.fromBufferAttribute(B,H),T[L+V+4]=s.x,T[L+V+5]=s.y,T[L+V+6]=s.z,T[L+V+7]=0),x===!0&&(s.fromBufferAttribute(k,H),T[L+V+8]=s.x,T[L+V+9]=s.y,T[L+V+10]=s.z,T[L+V+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:S,size:new ot(y,C)},i.set(a,u),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Nx(n,e,t,i,s){let r=new WeakMap;function o(l){const d=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return u}function a(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}const Ux={[Ef]:"LINEAR_TONE_MAPPING",[wf]:"REINHARD_TONE_MAPPING",[Tf]:"CINEON_TONE_MAPPING",[Ic]:"ACES_FILMIC_TONE_MAPPING",[Rf]:"AGX_TONE_MAPPING",[Cf]:"NEUTRAL_TONE_MAPPING",[Af]:"CUSTOM_TONE_MAPPING"};function Fx(n,e,t,i,s,r){const o=new ai(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null,l=null;const d=new Zt;d.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const f=new Sg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new mn(d,f),p=new Qc(-1,1,1,-1,0,1);let v=null,x=null,m=!1,g,M=null,w=[],y=!1;this.setSize=function(C,T){o.setSize(C,T),a!==null&&a.setSize(C,T),c!==null&&c.setSize(C,T);for(let S=0;S<w.length;S++){const E=w[S];E.setSize&&E.setSize(C,T)}},this.setEffects=function(C){w=C,y=w.length>0&&w[0].isRenderPass===!0;const T=o.width,S=o.height;w.length>0&&a===null&&(a=new ai(T,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}),c=new ai(T,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&w.some(N=>N.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&l===null&&(l=new Gs(T,S),r===!0&&(l.format=ki,l.type=ks)),o.dispose(),o.depthTexture=E?l:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let N=0;N<w.length;N++){const P=w[N];P.setSize&&P.setSize(T,S),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(C,T){if(m||C.toneMapping===Ti&&w.length===0)return!1;if(M=T,T!==null){const S=T.width,E=T.height;(o.width!==S||o.height!==E)&&this.setSize(S,E)}return y===!1&&C.setRenderTarget(o),g=C.toneMapping,C.toneMapping=Ti,!0},this.hasRenderPass=function(){return y},this.end=function(C,T){C.toneMapping=g,m=!0;let S=o,E=a;for(let N=0;N<w.length;N++){const P=w[N];P.enabled!==!1&&(P.render(C,E,S,T),P.needsSwap!==!1&&(S=E,E=E===a?c:a))}if(v!==C.outputColorSpace||x!==C.toneMapping){v=C.outputColorSpace,x=C.toneMapping,f.defines={},ct.getTransfer(v)===_t&&(f.defines.SRGB_TRANSFER="");const N=Ux[x];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=S.texture,C.setRenderTarget(M),C.render(u,p),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}const lh=new on,ch=new Gs(1,1),uh=new Jf(1),dh=new Wf,fh=new K0,hh=new Kf,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function Zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ma(n,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ox(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function Hx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,i))return;rd.set(i),n.uniformMatrix2fv(this.addr,!1,rd),$t(t,i)}}function Gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),$t(t,i)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,i))return;id.set(i),n.uniformMatrix4fv(this.addr,!1,id),$t(t,i)}}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function Yx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function ya(n){return n.version===0&&(n.compareFunction=zf,n.needsUpdate=!0),n}function Qx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ya(ch):r=lh,t.setTexture2D(e||r,s)}function jx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fh,s)}function eS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ya(uh):r=hh,t.setTextureCube(e||r,s)}function tS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dh,s)}function nS(n){switch(n){case 5126:return Ox;case 35664:return Bx;case 35665:return zx;case 35666:return kx;case 35674:return Hx;case 35675:return Gx;case 35676:return Vx;case 5124:case 35670:return Wx;case 35667:case 35671:return $x;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return Kx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}function iS(n,e){n.uniform1fv(this.addr,e)}function sS(n,e){const t=Zs(e,this.size,2);n.uniform2fv(this.addr,t)}function rS(n,e){const t=Zs(e,this.size,3);n.uniform3fv(this.addr,t)}function oS(n,e){const t=Zs(e,this.size,4);n.uniform4fv(this.addr,t)}function aS(n,e){const t=Zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lS(n,e){const t=Zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cS(n,e){const t=Zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uS(n,e){n.uniform1iv(this.addr,e)}function dS(n,e){n.uniform2iv(this.addr,e)}function fS(n,e){n.uniform3iv(this.addr,e)}function hS(n,e){n.uniform4iv(this.addr,e)}function pS(n,e){n.uniform1uiv(this.addr,e)}function mS(n,e){n.uniform2uiv(this.addr,e)}function gS(n,e){n.uniform3uiv(this.addr,e)}function vS(n,e){n.uniform4uiv(this.addr,e)}function _S(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ya(ch):o=lh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function xS(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fh,r[o])}function SS(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ya(uh):o=hh;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function bS(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dh,r[o])}function MS(n){switch(n){case 5126:return iS;case 35664:return sS;case 35665:return rS;case 35666:return oS;case 35674:return aS;case 35675:return lS;case 35676:return cS;case 5124:case 35670:return uS;case 35667:case 35671:return dS;case 35668:case 35672:return fS;case 35669:case 35673:return hS;case 5125:return pS;case 36294:return mS;case 36295:return gS;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return bS}}class yS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nS(t.type)}}class ES{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MS(t.type)}}class wS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function od(n,e){n.seq.push(e),n.map[e.id]=e}function TS(n,e,t){const i=n.name,s=i.length;for(ol.lastIndex=0;;){const r=ol.exec(i),o=ol.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){od(t,l===void 0?new yS(a,n,e):new ES(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new wS(a),od(t,f)),t=f}}}class Zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);TS(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ad(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const AS=37297;let RS=0;function CS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ld=new et;function PS(n){ct._getMatrix(ld,ct.workingColorSpace,n);const e=`mat3( ${ld.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+CS(n.getShaderSource(e),a)}else return r}function DS(n,e){const t=PS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const LS={[Ef]:"Linear",[wf]:"Reinhard",[Tf]:"Cineon",[Ic]:"ACESFilmic",[Rf]:"AgX",[Cf]:"Neutral",[Af]:"Custom"};function IS(n,e){const t=LS[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ro=new Y;function NS(){ct.getLuminanceCoefficients(Ro);const n=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function US(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function FS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sr(n){return n!==""}function ud(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function dd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(n){return n.replace(BS,zS)}function zS(n,e){const t=it[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return bc(t)}const kS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(n){return n.replace(kS,HS)}function HS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const GS={[Mr]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function VS(n){return GS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WS={[Nr]:"ENVMAP_MODE_REFRACTION"};function $S(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":WS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XS={[yf]:"ENVMAP_BLENDING_MULTIPLY",[h0]:"ENVMAP_BLENDING_MIX",[p0]:"ENVMAP_BLENDING_ADD"};function qS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":XS[n.combine]||"ENVMAP_BLENDING_NONE"}function YS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=VS(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=$S(t),f=qS(t),u=US(t),p=FS(r),v=s.createProgram();let x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sr).join(`
`),m.length>0&&(m+=`
`)):(x=[hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),m=[hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?it.tonemapping_pars_fragment:"",t.toneMapping!==Ti?IS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,DS("linearToOutputTexel",t.outputColorSpace),NS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=bc(o),o=ud(o,t),o=dd(o,t),a=bc(a),a=ud(a,t),a=dd(a,t),o=fd(o),a=fd(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=g+x+o,w=g+m+a,y=ad(s,s.VERTEX_SHADER,M),C=ad(s,s.FRAGMENT_SHADER,w);s.attachShader(v,y),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(P){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(y)||"",k=s.getShaderInfoLog(C)||"",L=U.trim(),H=B.trim(),V=k.trim();let W=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,y,C);else{const K=cd(s,y,"vertex"),le=cd(s,C,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+K+`
`+le)}else L!==""?Je("WebGLProgram: Program Info Log:",L):(H===""||V==="")&&(j=!1);j&&(P.diagnostics={runnable:W,programLog:L,vertexShader:{log:H,prefix:x},fragmentShader:{log:V,prefix:m}})}s.deleteShader(y),s.deleteShader(C),S=new Zo(s,v),E=OS(s,v)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,AS)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=C,this}let KS=0;class ZS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new JS(e),t.set(e,i)),i}}class JS{constructor(e){this.id=KS++,this.code=e,this.usedTimes=0}}function QS(n){return n===An||n===oa||n===aa}function jS(n,e,t,i,s,r){const o=new Wc,a=new ZS,c=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function v(S,E,N,P,U,B){const k=P.fog,L=U.geometry,H=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,W=e.get(S.envMap||H,V),j=u[S.type];let K=i.precision;S.precision!==null&&(K=i.getMaxPrecision(S.precision),K!==S.precision&&Je("WebGLProgram.getParameters:",S.precision,"not supported, using",K,"instead."));const le=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ue=le!==void 0?le.length:0;let Pe=0;L.morphAttributes.position!==void 0&&(Pe=1),L.morphAttributes.normal!==void 0&&(Pe=2),L.morphAttributes.color!==void 0&&(Pe=3);let ke,re,Me,Ue;if(j){const Ie=ni[j];ke=Ie.vertexShader,re=Ie.fragmentShader}else{ke=S.vertexShader,re=S.fragmentShader;const Ie=a.getVertexShaderStage(S),pt=a.getFragmentShaderStage(S);a.update(S,Ie,pt),Me=Ie.id,Ue=pt.id}const ze=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),qe=U.isInstancedMesh===!0,gt=U.isBatchedMesh===!0,$e=!!S.map,ut=!!S.matcap,dt=!!W,st=dt&&W.isPMREMTexture===!0,Ct=!!S.aoMap,wt=!!S.lightMap,Xt=!!S.bumpMap&&S.wireframe===!1,bt=!!S.normalMap,yn=!!S.displacementMap,Pt=!!S.emissiveMap,an=!!S.metalnessMap,ln=!!S.roughnessMap,gn=S.anisotropy>0,$=S.clearcoat>0,cn=S.diffuseRoughness>0,xt=S.dispersion>0,St=S.retroreflectivity>0,Re=S.iridescence>0,Dt=S.sheen>0,We=S.transmission>0,Qe=gn&&!!S.anisotropyMap,O=$&&!!S.clearcoatMap,A=$&&!!S.clearcoatNormalMap,J=$&&!!S.clearcoatRoughnessMap,_e=cn&&!!S.diffuseRoughnessMap,ce=Re&&!!S.iridescenceMap,ye=Re&&!!S.iridescenceThicknessMap,Ce=Dt&&!!S.sheenColorMap,ie=Dt&&!!S.sheenRoughnessMap,oe=!!S.specularMap,Ee=!!S.specularColorMap,z=!!S.specularIntensityMap,se=We&&!!S.transmissionMap,ee=We&&!!S.thicknessMap,Te=!!S.gradientMap,xe=!!S.alphaMap,we=S.alphaTest>0,He=!!S.alphaHash,tt=!!S.extensions;let Se=Ti;S.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(Se=n.toneMapping);const Ve=st?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,je={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:re,defines:S.defines,customVertexShaderID:Me,customFragmentShaderID:Ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:K,batching:gt,batchingColor:gt&&U._colorsTexture!==null,instancing:qe,instancingColor:qe&&U.instanceColor!==null,instancingMorph:qe&&U.morphTexture!==null,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:ut,envMap:dt,envMapMode:dt&&W.mapping,envMapPMREM:st,envMapMaxLod:st?Ve.length-1:null,envMapSize:st?Ve[0].width:null,aoMap:Ct,lightMap:wt,bumpMap:Xt,normalMap:bt,displacementMap:yn,emissiveMap:Pt,normalMapObjectSpace:bt&&S.normalMapType===v0,normalMapTangentSpace:bt&&S.normalMapType===vc,packedNormalMap:bt&&S.normalMapType===vc&&QS(S.normalMap.format),metalnessMap:an,roughnessMap:ln,anisotropy:gn,anisotropyMap:Qe,clearcoat:$,clearcoatMap:O,clearcoatNormalMap:A,clearcoatRoughnessMap:J,diffuseRoughness:cn,diffuseRoughnessMap:_e,dispersion:xt,retroreflection:St,iridescence:Re,iridescenceMap:ce,iridescenceThicknessMap:ye,sheen:Dt,sheenColorMap:Ce,sheenRoughnessMap:ie,specularMap:oe,specularColorMap:Ee,specularIntensityMap:z,transmission:We,transmissionMap:se,thicknessMap:ee,gradientMap:Te,opaque:S.transparent===!1&&S.blending===yr&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:we,alphaHash:He,combine:S.combine,mapUv:$e&&p(S.map.channel),aoMapUv:Ct&&p(S.aoMap.channel),lightMapUv:wt&&p(S.lightMap.channel),bumpMapUv:Xt&&p(S.bumpMap.channel),normalMapUv:bt&&p(S.normalMap.channel),displacementMapUv:yn&&p(S.displacementMap.channel),emissiveMapUv:Pt&&p(S.emissiveMap.channel),metalnessMapUv:an&&p(S.metalnessMap.channel),roughnessMapUv:ln&&p(S.roughnessMap.channel),anisotropyMapUv:Qe&&p(S.anisotropyMap.channel),clearcoatMapUv:O&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:A&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(S.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&p(S.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:ie&&p(S.sheenRoughnessMap.channel),specularMapUv:oe&&p(S.specularMap.channel),specularColorMapUv:Ee&&p(S.specularColorMap.channel),specularIntensityMapUv:z&&p(S.specularIntensityMap.channel),transmissionMapUv:se&&p(S.transmissionMap.channel),thicknessMapUv:ee&&p(S.thicknessMap.channel),alphaMapUv:xe&&p(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(bt||gn),vertexNormals:!!L.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&($e||xe),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||L.attributes.normal===void 0&&bt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Pe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.filter(Ie=>Ie.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:Pt&&S.emissiveMap.isVideoTexture===!0&&ct.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:tt&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&S.extensions.multiDraw===!0||gt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function x(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(m(E,S),g(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function m(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapPMREM),S.push(E.envMapMaxLod),S.push(E.envMapSize),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.diffuseRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.numSunLights),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numSunLightShadows),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.numLightProbeGrids),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function g(S,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function M(S){const E=u[S.type];let N;if(E){const P=ni[E];N=eh.clone(P.uniforms)}else N=S.uniforms;return N}function w(S,E){let N=d.get(E);return N!==void 0?++N.usedTimes:(N=new YS(n,E,S,s),l.push(N),d.set(E,N)),N}function y(S){if(--S.usedTimes===0){const E=l.indexOf(S);l[E]=l[l.length-1],l.pop(),d.delete(S.cacheKey),S.destroy()}}function C(S){a.remove(S)}function T(){a.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:M,acquireProgram:w,releaseProgram:y,releaseShaderCache:C,programs:l,dispose:T}}function eb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function md(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,v,x,m,g){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:v,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},n[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=v,M.materialVariant=o(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=g),e++,M}function c(u,p,v,x,m,g,M){M.reversedDepth===!0&&(m=-m);const w=a(u,p,v,x,m,g);v.transmission>0?i.push(w):v.transparent===!0?s.push(w):t.push(w)}function l(u,p,v,x,m,g){const M=a(u,p,v,x,m,g);v.transmission>0?i.unshift(M):v.transparent===!0?s.unshift(M):t.unshift(M)}function d(u,p){t.length>1&&t.sort(u||tb),i.length>1&&i.sort(p||pd),s.length>1&&s.sort(p||pd)}function f(){for(let u=e,p=n.length;u<p;u++){const v=n[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function nb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new md,n.set(i,[o])):s>=r.length?(o=new md,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ib(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new Oe};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function sb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rb=0;function ob(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ab(n){const e=new ib,t=sb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Y);const s=new Y,r=new lt,o=new lt;function a(l){let d=0,f=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,v=0,x=0,m=0,g=0,M=0,w=0,y=0,C=0,T=0,S=0,E=0,N=0,P=0;l.sort(ob);for(let B=0,k=l.length;B<k;B++){const L=l[B],H=L.color,V=L.intensity,W=L.distance;let j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===An?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=H.r*V,f+=H.g*V,u+=H.b*V;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],V);P++}else if(L.isSunLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const le=L.shadow,ue=t.get(L);ue.shadowIntensity=le.intensity,ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),i.sunShadow[v]=ue,i.sunShadowMap[v]=j;const Pe=le.getViewportCount();for(let ke=0;ke<Pe;ke++)i.sunShadowMatrix[x+ke]=le.getMatrix(ke),i.sunShadowCascade[x+ke]=le._cascadeData[ke];x+=Pe,v++}i.sun[p]=K,p++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const le=L.shadow,ue=t.get(L);ue.shadowIntensity=le.intensity,ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,i.directionalShadow[m]=ue,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=L.shadow.matrix,C++}i.directional[m]=K,m++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(H).multiplyScalar(V),K.distance=W,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[M]=K;const le=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,le.updateMatrices(L),L.castShadow&&N++),i.spotLightMatrix[M]=le.matrix,L.castShadow){const ue=t.get(L);ue.shadowIntensity=le.intensity,ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,i.spotShadow[M]=ue,i.spotShadowMap[M]=j,S++}M++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(H).multiplyScalar(V),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=K,w++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const le=L.shadow,ue=t.get(L);ue.shadowIntensity=le.intensity,ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,ue.shadowCameraNear=le.camera.near,ue.shadowCameraFar=le.camera.far,i.pointShadow[g]=ue,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=L.shadow.matrix,T++}i.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(V),K.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[y]=K,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const U=i.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==M||U.rectAreaLength!==w||U.hemiLength!==y||U.numSunShadows!==v||U.numDirectionalShadows!==C||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==E||U.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=g,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.spotLightMatrix.length=S+E-N,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=P,U.sunLength=p,U.directionalLength=m,U.pointLength=g,U.spotLength=M,U.rectAreaLength=w,U.hemiLength=y,U.numSunShadows=v,U.numDirectionalShadows=C,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=E,U.numLightProbes=P,i.version=rb++)}function c(l,d){let f=0,u=0,p=0,v=0,x=0,m=0;const g=d.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){const y=l[M];if(y.isSunLight){const C=i.sun[f];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(g),f++}else if(y.isDirectionalLight){const C=i.directional[u];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),u++}else if(y.isSpotLight){const C=i.spot[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),v++}else if(y.isRectAreaLight){const C=i.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:i}}function gd(n){const e=new ab(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function c(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function lb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new gd(n),e.set(s,[a])):r>=o.length?(a=new gd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
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
}`,db=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],fb=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],vd=new lt,cr=new Y,al=new Y;function hb(n,e,t){let i=new Br;const s=new ot,r=new ot,o=new Ut,a=new bg,c=new Mg,l={},d=t.maxTextureSize,f={[ls]:pn,[pn]:ls,[ri]:ri},u=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:cb,fragmentShader:ub}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Zt;v.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new mn(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let g=this.type;this.render=function(T,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Sf&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);const N=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Fs),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=g!==this.type;k&&S.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=T.length;L<H;L++){const V=T[L],W=V.shadow;if(W===void 0){Je("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const j=W.getFrameExtents();s.multiply(j),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,W.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=K,W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===xr){if(V.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ai(s.x,s.y,{format:An,type:hn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new Gs(s.x,s.y,_n),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=Vi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=jt,W.map.depthTexture.magFilter=jt}else V.isPointLight?(W.map=new jc(s.x),W.map.depthTexture=new Jf(s.x,ui)):(W.map=new ai(s.x,s.y),W.map.depthTexture=new Gs(s.x,s.y,ui)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=Vi,this.type===Mr?(W.map.depthTexture.compareFunction=K?Bf:Of,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=jt,W.map.depthTexture.magFilter=jt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const le=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();V.isPointLight!==!0&&W.updateMatrices(V,E);const ue=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:E.layers;for(let Pe=0;Pe<le;Pe++){const ke=W.getCamera(Pe);if(V.isPointLight){const re=W.camera,Me=W.matrix,Ue=V.distance||re.far;Ue!==re.far&&(re.far=Ue,re.updateProjectionMatrix()),cr.setFromMatrixPosition(V.matrixWorld),re.position.copy(cr),al.copy(re.position),al.add(db[Pe]),re.up.copy(fb[Pe]),re.lookAt(al),re.updateMatrixWorld(),Me.makeTranslation(-cr.x,-cr.y,-cr.z),vd.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),W._frustum.setFromProjectionMatrix(vd,re.coordinateSystem,re.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,Pe),n.clear();else{Pe===0&&(n.setRenderTarget(W.map),n.clear());const re=W.getViewport(Pe);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),B.viewport(o)}i=W.getFrustum(Pe),y(S,E,ke,V,ue,this.type)}W.isPointLightShadow!==!0&&this.type===xr&&M(W,E),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(N,P,U)};function M(T,S){const E=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new ai(s.x,s.y,{format:An,type:hn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(S,null,E,u,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(S,null,E,p,x,null)}function w(T,S,E,N){let P=null;const U=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)P=U;else if(P=E.isPointLight===!0?c:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const B=P.uuid,k=S.uuid;let L=l[B];L===void 0&&(L={},l[B]=L);let H=L[k];H===void 0&&(H=P.clone(),L[k]=H,S.addEventListener("dispose",C)),P=H}if(P.visible=S.visible,P.wireframe=S.wireframe,N===xr?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:f[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=n.properties.get(P);B.light=E}return P}function y(T,S,E,N,P,U){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===xr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const L=e.update(T),H=T.material;if(Array.isArray(H)){const V=L.groups;for(let W=0,j=V.length;W<j;W++){const K=V[W],le=H[K.materialIndex];if(le&&le.visible){const ue=w(T,le,N,U);T.onBeforeShadow(n,T,S,E,L,ue,K),n.renderBufferDirect(E,null,L,ue,T,K),T.onAfterShadow(n,T,S,E,L,ue,K)}}}else if(H.visible){const V=w(T,H,N,U);T.onBeforeShadow(n,T,S,E,L,V,null),n.renderBufferDirect(E,null,L,V,T,null),T.onAfterShadow(n,T,S,E,L,V,null)}}const k=T.children;for(let L=0,H=k.length;L<H;L++)y(k[L],S,E,N,P,U)}function C(T){T.target.removeEventListener("dispose",C);for(const E in l){const N=l[E],P=T.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function pb(n,e){function t(){let z=!1;const se=new Ut;let ee=null;const Te=new Ut(0,0,0,0);return{setMask:function(xe){ee!==xe&&!z&&(n.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){z=xe},setClear:function(xe,we,He,tt,Se){Se===!0&&(xe*=tt,we*=tt,He*=tt),se.set(xe,we,He,tt),Te.equals(se)===!1&&(n.clearColor(xe,we,He,tt),Te.copy(se))},reset:function(){z=!1,ee=null,Te.set(-1,0,0,0)}}}function i(){let z=!1,se=!1,ee=null,Te=null,xe=null;return{setReversed:function(we){if(se!==we){const He=e.get("EXT_clip_control");we?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),se=we;const tt=xe;xe=null,this.setClear(tt)}},getReversed:function(){return se},setTest:function(we){we?ge(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(we){ee!==we&&!z&&(n.depthMask(we),ee=we)},setFunc:function(we){if(se&&(we=R0[we]),Te!==we){switch(we){case Il:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case Ir:n.depthFunc(n.LEQUAL);break;case Fl:n.depthFunc(n.EQUAL);break;case Ol:n.depthFunc(n.GEQUAL);break;case Bl:n.depthFunc(n.GREATER);break;case zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=we}},setLocked:function(we){z=we},setClear:function(we){xe!==we&&(xe=we,se&&(we=1-we),n.clearDepth(we))},reset:function(){z=!1,ee=null,Te=null,xe=null,se=!1}}}function s(){let z=!1,se=null,ee=null,Te=null,xe=null,we=null,He=null,tt=null,Se=null;return{setTest:function(Ve){z||(Ve?ge(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(Ve){se!==Ve&&!z&&(n.stencilMask(Ve),se=Ve)},setFunc:function(Ve,je,Ie){(ee!==Ve||Te!==je||xe!==Ie)&&(n.stencilFunc(Ve,je,Ie),ee=Ve,Te=je,xe=Ie)},setOp:function(Ve,je,Ie){(we!==Ve||He!==je||tt!==Ie)&&(n.stencilOp(Ve,je,Ie),we=Ve,He=je,tt=Ie)},setLocked:function(Ve){z=Ve},setClear:function(Ve){Se!==Ve&&(n.clearStencil(Ve),Se=Ve)},reset:function(){z=!1,se=null,ee=null,Te=null,xe=null,we=null,He=null,tt=null,Se=null}}}const r=new t,o=new i,a=new s;let c={};const l=new WeakMap;let d={},f={},u={},p=new WeakMap,v=[],x=null,m=!1,g=null,M=null,w=null,y=null,C=null,T=null,S=null,E=new Oe(0,0,0),N=0,P=!1,U=null,B=null,k=null,L=null,H=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=j>=2);let le=null,ue={};const Pe=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),re=new Ut().fromArray(Pe),Me=new Ut().fromArray(ke);function Ue(z,se,ee,Te){const xe=new Uint8Array(4),we=n.createTexture();n.bindTexture(z,we),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<ee;He++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(se+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return we}const ze={};ze[n.TEXTURE_2D]=Ue(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[n.TEXTURE_2D_ARRAY]=Ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(Ir),Xt(!1),bt(pu),ge(n.CULL_FACE),Ct(Fs);function ge(z){d[z]!==!0&&(n.enable(z),d[z]=!0)}function qe(z){d[z]!==!1&&(n.disable(z),d[z]=!1)}function gt(z,se){return u[z]!==se?(n.bindFramebuffer(z,se),u[z]=se,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=se),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=se),!0):!1}function $e(z,se){let ee=v,Te=!1;if(z){ee=p.get(se),ee===void 0&&(ee=[],p.set(se,ee));const xe=z.textures;if(ee.length!==xe.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let we=0,He=xe.length;we<He;we++)ee[we]=n.COLOR_ATTACHMENT0+we;ee.length=xe.length,Te=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,Te=!0);Te&&n.drawBuffers(ee)}function ut(z){return x!==z?(n.useProgram(z),x=z,!0):!1}const dt={[Rs]:n.FUNC_ADD,[Zm]:n.FUNC_SUBTRACT,[Jm]:n.FUNC_REVERSE_SUBTRACT};dt[Qm]=n.MIN,dt[jm]=n.MAX;const st={[e0]:n.ZERO,[t0]:n.ONE,[n0]:n.SRC_COLOR,[bf]:n.SRC_ALPHA,[l0]:n.SRC_ALPHA_SATURATE,[o0]:n.DST_COLOR,[s0]:n.DST_ALPHA,[i0]:n.ONE_MINUS_SRC_COLOR,[Mf]:n.ONE_MINUS_SRC_ALPHA,[a0]:n.ONE_MINUS_DST_COLOR,[r0]:n.ONE_MINUS_DST_ALPHA,[c0]:n.CONSTANT_COLOR,[u0]:n.ONE_MINUS_CONSTANT_COLOR,[d0]:n.CONSTANT_ALPHA,[f0]:n.ONE_MINUS_CONSTANT_ALPHA};function Ct(z,se,ee,Te,xe,we,He,tt,Se,Ve){if(z===Fs){m===!0&&(qe(n.BLEND),m=!1);return}if(m===!1&&(ge(n.BLEND),m=!0),z!==Km){if(z!==g||Ve!==P){if((M!==Rs||C!==Rs)&&(n.blendEquation(n.FUNC_ADD),M=Rs,C=Rs),Ve)switch(z){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFunc(n.ONE,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ht("WebGLState: Invalid blending: ",z);break}else switch(z){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case mu:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gu:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",z);break}w=null,y=null,T=null,S=null,E.set(0,0,0),N=0,g=z,P=Ve}return}xe=xe||se,we=we||ee,He=He||Te,(se!==M||xe!==C)&&(n.blendEquationSeparate(dt[se],dt[xe]),M=se,C=xe),(ee!==w||Te!==y||we!==T||He!==S)&&(n.blendFuncSeparate(st[ee],st[Te],st[we],st[He]),w=ee,y=Te,T=we,S=He),(tt.equals(E)===!1||Se!==N)&&(n.blendColor(tt.r,tt.g,tt.b,Se),E.copy(tt),N=Se),g=z,P=!1}function wt(z,se){z.side===ri?qe(n.CULL_FACE):ge(n.CULL_FACE);let ee=z.side===pn;se&&(ee=!ee),Xt(ee),z.blending===yr&&z.transparent===!1?Ct(Fs):Ct(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Te=z.stencilWrite;a.setTest(Te),Te&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Pt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(z){U!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),U=z)}function bt(z){z!==qm?(ge(n.CULL_FACE),z!==B&&(z===pu?n.cullFace(n.BACK):z===Ym?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),B=z}function yn(z){z!==k&&(W&&n.lineWidth(z),k=z)}function Pt(z,se,ee){z?(ge(n.POLYGON_OFFSET_FILL),(L!==se||H!==ee)&&(L=se,H=ee,o.getReversed()&&(se=-se,ee=-ee),n.polygonOffset(se,ee))):qe(n.POLYGON_OFFSET_FILL)}function an(z){z?ge(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function ln(z){z===void 0&&(z=n.TEXTURE0+V-1),le!==z&&(n.activeTexture(z),le=z)}function gn(z,se,ee){ee===void 0&&(le===null?ee=n.TEXTURE0+V-1:ee=le);let Te=ue[ee];Te===void 0&&(Te={type:void 0,texture:void 0},ue[ee]=Te),(Te.type!==z||Te.texture!==se)&&(le!==ee&&(n.activeTexture(ee),le=ee),n.bindTexture(z,se||ze[z]),Te.type=z,Te.texture=se)}function $(){const z=ue[le];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function cn(){try{n.compressedTexImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function xt(){try{n.compressedTexImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function St(){try{n.texSubImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function Re(){try{n.texSubImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function Dt(){try{n.compressedTexSubImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function We(){try{n.compressedTexSubImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function Qe(){try{n.texStorage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function O(){try{n.texStorage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function A(){try{n.texImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function J(){try{n.texImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function _e(z){return f[z]!==void 0?f[z]:n.getParameter(z)}function ce(z,se){f[z]!==se&&(n.pixelStorei(z,se),f[z]=se)}function ye(z){re.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),re.copy(z))}function Ce(z){Me.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Me.copy(z))}function ie(z,se){let ee=l.get(se);ee===void 0&&(ee=new WeakMap,l.set(se,ee));let Te=ee.get(z);Te===void 0&&(Te=n.getUniformBlockIndex(se,z.name),n.uniformBlockBinding(se,Te,Te),ee.set(z,Te))}function oe(z,se,ee){const xe=l.get(se).get(z);c[xe]!==ee&&(n.bindBufferBase(n.UNIFORM_BUFFER,xe,ee),c[xe]=ee)}function Ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},le=null,ue={},u={},c={},p=new WeakMap,v=[],x=null,m=!1,g=null,M=null,w=null,y=null,C=null,T=null,S=null,E=new Oe(0,0,0),N=0,P=!1,U=null,B=null,k=null,L=null,H=null,re.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:qe,bindFramebuffer:gt,drawBuffers:$e,useProgram:ut,setBlending:Ct,setMaterial:wt,setFlipSided:Xt,setCullFace:bt,setLineWidth:yn,setPolygonOffset:Pt,setScissorTest:an,activeTexture:ln,bindTexture:gn,unbindTexture:$,compressedTexImage2D:cn,compressedTexImage3D:xt,texImage2D:A,texImage3D:J,pixelStorei:ce,getParameter:_e,updateUBOMapping:ie,uniformBlockBinding:oe,texStorage2D:Qe,texStorage3D:O,texSubImage2D:St,texSubImage3D:Re,compressedTexSubImage2D:Dt,compressedTexSubImage3D:We,scissor:ye,viewport:Ce,reset:Ee}}function mb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,d=new WeakMap,f=new Set;let u;const p=new WeakMap,v=new Set,x=new FinalizationRegistry(O=>v.delete(O));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,A){return m?new OffscreenCanvas(O,A):ca("canvas")}function M(O,A,J){let _e=1;const ce=Qe(O);if((ce.width>J||ce.height>J)&&(_e=J/Math.max(ce.width,ce.height)),_e<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ye=Math.floor(_e*ce.width),Ce=Math.floor(_e*ce.height);u===void 0&&(u=g(ye,Ce));const ie=A?g(ye,Ce):u;return ie.width=ye,ie.height=Ce,ie.getContext("2d").drawImage(O,0,0,ye,Ce),Je("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ye+"x"+Ce+")."),ie}else return"data"in O&&Je("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),O;return O}function w(O){return O.generateMipmaps}function y(O){n.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(O,A,J,_e,ce,ye=!1){if(O!==null){if(n[O]!==void 0)return n[O];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ce;_e&&(Ce=e.get("EXT_texture_norm16"),Ce||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=A;if(A===n.RED&&(J===n.FLOAT&&(ie=n.R32F),J===n.HALF_FLOAT&&(ie=n.R16F),J===n.UNSIGNED_BYTE&&(ie=n.R8),J===n.UNSIGNED_SHORT&&Ce&&(ie=Ce.R16_EXT),J===n.SHORT&&Ce&&(ie=Ce.R16_SNORM_EXT)),A===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ie=n.R8UI),J===n.UNSIGNED_SHORT&&(ie=n.R16UI),J===n.UNSIGNED_INT&&(ie=n.R32UI),J===n.BYTE&&(ie=n.R8I),J===n.SHORT&&(ie=n.R16I),J===n.INT&&(ie=n.R32I)),A===n.RG&&(J===n.FLOAT&&(ie=n.RG32F),J===n.HALF_FLOAT&&(ie=n.RG16F),J===n.UNSIGNED_BYTE&&(ie=n.RG8),J===n.UNSIGNED_SHORT&&Ce&&(ie=Ce.RG16_EXT),J===n.SHORT&&Ce&&(ie=Ce.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(ie=n.RG8UI),J===n.UNSIGNED_SHORT&&(ie=n.RG16UI),J===n.UNSIGNED_INT&&(ie=n.RG32UI),J===n.BYTE&&(ie=n.RG8I),J===n.SHORT&&(ie=n.RG16I),J===n.INT&&(ie=n.RG32I)),A===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),J===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),J===n.UNSIGNED_INT&&(ie=n.RGB32UI),J===n.BYTE&&(ie=n.RGB8I),J===n.SHORT&&(ie=n.RGB16I),J===n.INT&&(ie=n.RGB32I)),A===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),J===n.UNSIGNED_INT&&(ie=n.RGBA32UI),J===n.BYTE&&(ie=n.RGBA8I),J===n.SHORT&&(ie=n.RGBA16I),J===n.INT&&(ie=n.RGBA32I)),A===n.RGB&&(J===n.UNSIGNED_SHORT&&Ce&&(ie=Ce.RGB16_EXT),J===n.SHORT&&Ce&&(ie=Ce.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),A===n.RGBA){const oe=ye?la:ct.getTransfer(ce);J===n.FLOAT&&(ie=n.RGBA32F),J===n.HALF_FLOAT&&(ie=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ie=oe===_t?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Ce&&(ie=Ce.RGBA16_EXT),J===n.SHORT&&Ce&&(ie=Ce.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(O,A){let J;return O?A===null||A===ui||A===ks?J=n.DEPTH24_STENCIL8:A===_n?J=n.DEPTH32F_STENCIL8:A===Ur&&(J=n.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ui||A===ks?J=n.DEPTH_COMPONENT24:A===_n?J=n.DEPTH_COMPONENT32F:A===Ur&&(J=n.DEPTH_COMPONENT16),J}function E(O,A){return w(O)===!0||O.isFramebufferTexture&&O.minFilter!==jt&&O.minFilter!==Gt?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function N(O){const A=new WeakRef(O);i.get(O).__ref=A,v.add(A),x.register(O,A,A)}function P(O){const A=i.get(O).__ref;A!==void 0&&(v.delete(A),x.unregister(A))}function U(O){k(O.target)}function B(O){L(O.target)}function k(O){O.removeEventListener("dispose",U),P(O),V(O),O.isVideoTexture&&d.delete(O),O.isHTMLTexture&&f.delete(O)}function L(O){O.removeEventListener("dispose",B),P(O),j(O)}function H(){for(const O of v){const A=O.deref();A!==void 0&&(A.isRenderTarget===!0?L(A):k(A))}v.clear(),f.clear()}function V(O){const A=i.get(O);if(A.__webglInit===void 0)return;const J=O.source,_e=p.get(J);if(_e){const ce=_e[A.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&W(O),Object.keys(_e).length===0&&p.delete(J)}i.remove(O)}function W(O){const A=i.get(O);n.deleteTexture(A.__webglTexture);const J=O.source,_e=p.get(J);delete _e[A.__cacheKey],o.memory.textures--}function j(O){const A=i.get(O);A.__depthDisposeCallback&&A.__depthDisposeCallback();const J=O.depthTexture;if(J&&J.renderTarget===O&&k(J),O.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(A.__webglFramebuffer[ce]))for(let ye=0;ye<A.__webglFramebuffer[ce].length;ye++)n.deleteFramebuffer(A.__webglFramebuffer[ce][ye]);else n.deleteFramebuffer(A.__webglFramebuffer[ce]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ce])}else{if(Array.isArray(A.__webglFramebuffer))for(let ce=0;ce<A.__webglFramebuffer.length;ce++)n.deleteFramebuffer(A.__webglFramebuffer[ce]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ce=0;ce<A.__webglColorRenderbuffer.length;ce++)A.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ce]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const _e=O.textures;for(let ce=0,ye=_e.length;ce<ye;ce++){const Ce=i.get(_e[ce]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),o.memory.textures--),i.remove(_e[ce])}i.remove(O)}let K=0;function le(){K=0}function ue(){return K}function Pe(O){K=O}function ke(){const O=K;return O>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,O}function re(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.mipmapsAutoUpdate),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function Me(O,A){const J=i.get(O);if(O.isVideoTexture&&Dt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&J.__version!==O.version){const _e=O.image;if(_e===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(J,O,A);return}}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+A)}function Ue(O,A){const J=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){wt(J,O,A);return}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+A)}function ze(O,A){const J=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){wt(J,O,A);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+A)}function ge(O,A){const J=i.get(O);if(O.version>0&&J.__version!==O.version){Xt(J,O,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+A)}const qe={[ra]:n.REPEAT,[Pn]:n.CLAMP_TO_EDGE,[kl]:n.MIRRORED_REPEAT},gt={[jt]:n.NEAREST,[m0]:n.NEAREST_MIPMAP_NEAREST,[io]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Oa]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},$e={[x0]:n.NEVER,[zf]:n.ALWAYS,[S0]:n.LESS,[Of]:n.LEQUAL,[b0]:n.EQUAL,[Bf]:n.GEQUAL,[M0]:n.GREATER,[y0]:n.NOTEQUAL};function ut(O,A){if(A.type===_n&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Gt||A.magFilter===Oa||A.magFilter===io||A.magFilter===yi||A.minFilter===Gt||A.minFilter===Oa||A.minFilter===io||A.minFilter===yi)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,qe[A.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,qe[A.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,qe[A.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,gt[A.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,gt[A.minFilter]),A.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,$e[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===jt||A.minFilter!==io&&A.minFilter!==yi||A.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function dt(O,A){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",U),N(A));const _e=A.source;let ce=p.get(_e);ce===void 0&&(ce={},p.set(_e,ce));const ye=re(A);if(ye!==O.__cacheKey){ce[ye]===void 0&&(ce[ye]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ce[ye].usedTimes++;const Ce=ce[O.__cacheKey];Ce!==void 0&&(ce[O.__cacheKey].usedTimes--,Ce.usedTimes===0&&W(A)),O.__cacheKey=ye,O.__webglTexture=ce[ye].texture}return J}function st(O,A,J){return Math.floor(Math.floor(O/J)/A)}function Ct(O,A,J,_e){const ye=O.updateRanges;if(ye.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,J,_e,A.data);else{ye.sort((z,se)=>z.start-se.start);let Ce=0;for(let z=1;z<ye.length;z++){const se=ye[Ce],ee=ye[z],Te=se.start+se.count,xe=st(ee.start,A.width,4),we=st(se.start,A.width,4);ee.start<=Te+1&&xe===we&&st(ee.start+ee.count-1,A.width,4)===xe?se.count=Math.max(se.count,ee.start+ee.count-se.start):(++Ce,ye[Ce]=ee)}ye.length=Ce+1;const ie=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ee=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let z=0,se=ye.length;z<se;z++){const ee=ye[z],Te=Math.floor(ee.start/4),xe=Math.ceil(ee.count/4),we=Te%A.width,He=Math.floor(Te/A.width),tt=xe,Se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,we),t.pixelStorei(n.UNPACK_SKIP_ROWS,He),t.texSubImage2D(n.TEXTURE_2D,0,we,He,tt,Se,J,_e,A.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function wt(O,A,J){let _e=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=n.TEXTURE_3D);const ce=dt(O,A),ye=A.source;t.bindTexture(_e,O.__webglTexture,n.TEXTURE0+J);const Ce=i.get(ye);if(ye.version!==Ce.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Se=ct.getPrimaries(ct.workingColorSpace),Ve=A.colorSpace===Oi?null:ct.getPrimaries(A.colorSpace),je=A.colorSpace===Oi||Se===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let oe=M(A.image,!1,s.maxTextureSize);oe=We(A,oe);const Ee=r.convert(A.format,A.colorSpace),z=r.convert(A.type);let se=T(A.internalFormat,Ee,z,A.normalized,A.colorSpace,A.isVideoTexture);ut(_e,A);let ee;const Te=A.mipmaps,xe=A.isVideoTexture!==!0,we=Ce.__version===void 0||ce===!0,He=ye.dataReady,tt=E(A,oe);if(A.isDepthTexture)se=S(A.format===ki,A.type),we&&(xe?t.texStorage2D(n.TEXTURE_2D,1,se,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,se,oe.width,oe.height,0,Ee,z,null));else if(A.isDataTexture)if(Te.length>0){xe&&we&&t.texStorage2D(n.TEXTURE_2D,tt,se,Te[0].width,Te[0].height);for(let Se=0,Ve=Te.length;Se<Ve;Se++)ee=Te[Se],xe?He&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,ee.width,ee.height,Ee,z,ee.data):t.texImage2D(n.TEXTURE_2D,Se,se,ee.width,ee.height,0,Ee,z,ee.data);A.generateMipmaps=!1}else xe?(we&&t.texStorage2D(n.TEXTURE_2D,tt,se,oe.width,oe.height),He&&Ct(A,oe,Ee,z)):t.texImage2D(n.TEXTURE_2D,0,se,oe.width,oe.height,0,Ee,z,oe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xe&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,se,Te[0].width,Te[0].height,oe.depth);for(let Se=0,Ve=Te.length;Se<Ve;Se++)if(ee=Te[Se],A.format!==Qt)if(Ee!==null)if(xe){if(He)if(A.layerUpdates.size>0){const je=Zu(ee.width,ee.height,A.format,A.type);for(const Ie of A.layerUpdates){const pt=ee.data.subarray(Ie*je/ee.data.BYTES_PER_ELEMENT,(Ie+1)*je/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,Ie,ee.width,ee.height,1,Ee,pt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,ee.width,ee.height,oe.depth,Ee,ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,se,ee.width,ee.height,oe.depth,0,ee.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?He&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,ee.width,ee.height,oe.depth,Ee,z,ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,se,ee.width,ee.height,oe.depth,0,Ee,z,ee.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{xe&&we&&t.texStorage2D(n.TEXTURE_2D,tt,se,Te[0].width,Te[0].height);for(let Se=0,Ve=Te.length;Se<Ve;Se++)ee=Te[Se],A.format!==Qt?Ee!==null?xe?He&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,ee.width,ee.height,Ee,ee.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,se,ee.width,ee.height,0,ee.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?He&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,ee.width,ee.height,Ee,z,ee.data):t.texImage2D(n.TEXTURE_2D,Se,se,ee.width,ee.height,0,Ee,z,ee.data)}else if(A.isDataArrayTexture)if(xe){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,se,oe.width,oe.height,oe.depth),He)if(A.layerUpdates.size>0){const Se=Zu(oe.width,oe.height,A.format,A.type);for(const Ve of A.layerUpdates){const je=oe.data.subarray(Ve*Se/oe.data.BYTES_PER_ELEMENT,(Ve+1)*Se/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ve,oe.width,oe.height,1,Ee,z,je)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,z,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,oe.width,oe.height,oe.depth,0,Ee,z,oe.data);else if(A.isData3DTexture)xe?(we&&t.texStorage3D(n.TEXTURE_3D,tt,se,oe.width,oe.height,oe.depth),He&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,z,oe.data)):t.texImage3D(n.TEXTURE_3D,0,se,oe.width,oe.height,oe.depth,0,Ee,z,oe.data);else if(A.isFramebufferTexture){if(we)if(xe)t.texStorage2D(n.TEXTURE_2D,tt,se,oe.width,oe.height);else{let Se=oe.width,Ve=oe.height;for(let je=0;je<tt;je++)t.texImage2D(n.TEXTURE_2D,je,se,Se,Ve,0,Ee,z,null),Se>>=1,Ve>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const Se=n.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),oe.parentNode!==Se){Se.appendChild(oe),f.add(A),Se.onpaint=Ve=>{const je=Ve.changedElements;for(const Ie of f)je.includes(Ie.image)&&(Ie.needsUpdate=!0)},Se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{const je=n.RGBA,Ie=n.RGBA,pt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,Ie,pt,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Te.length>0){if(xe&&we){const Se=Qe(Te[0]);t.texStorage2D(n.TEXTURE_2D,tt,se,Se.width,Se.height)}for(let Se=0,Ve=Te.length;Se<Ve;Se++)ee=Te[Se],xe?He&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ee,z,ee):t.texImage2D(n.TEXTURE_2D,Se,se,Ee,z,ee);A.generateMipmaps=!1}else if(xe){if(we){const Se=Qe(oe);t.texStorage2D(n.TEXTURE_2D,tt,se,Se.width,Se.height)}He&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,z,oe)}else t.texImage2D(n.TEXTURE_2D,0,se,Ee,z,oe);w(A)&&A.mipmapsAutoUpdate===!0&&y(_e),Ce.__version=ye.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Xt(O,A,J){if(A.image.length!==6)return;const _e=dt(O,A),ce=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+J);const ye=i.get(ce);if(ce.version!==ye.__version||_e===!0){t.activeTexture(n.TEXTURE0+J);const Ce=ct.getPrimaries(ct.workingColorSpace),ie=A.colorSpace===Oi?null:ct.getPrimaries(A.colorSpace),oe=A.colorSpace===Oi||Ce===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ee=A.isCompressedTexture||A.image[0].isCompressedTexture,z=A.image[0]&&A.image[0].isDataTexture,se=[];for(let Ie=0;Ie<6;Ie++)!Ee&&!z?se[Ie]=M(A.image[Ie],!0,s.maxCubemapSize):se[Ie]=z?A.image[Ie].image:A.image[Ie],se[Ie]=We(A,se[Ie]);const ee=se[0],Te=r.convert(A.format,A.colorSpace),xe=r.convert(A.type);let we=T(A.internalFormat,Te,xe,A.normalized,A.colorSpace);const He=A.isVideoTexture!==!0,tt=ye.__version===void 0||_e===!0,Se=ce.dataReady;let Ve=E(A,ee);ut(n.TEXTURE_CUBE_MAP,A);let je;if(A.isDepthTexture){if(we=S(A.format===ki,A.type),tt)if(He)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,we,ee.width,ee.height);else for(let Ie=0;Ie<6;Ie++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,ee.width,ee.height,0,Te,xe,null)}else if(Ee){He&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,we,ee.width,ee.height);for(let Ie=0;Ie<6;Ie++){je=se[Ie].mipmaps;for(let pt=0;pt<je.length;pt++){const Ot=je[pt];A.format!==Qt?Te!==null?He?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,pt,0,0,Ot.width,Ot.height,Te,Ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,pt,we,Ot.width,Ot.height,0,Ot.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,pt,0,0,Ot.width,Ot.height,Te,xe,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,pt,we,Ot.width,Ot.height,0,Te,xe,Ot.data)}}}else{if(je=A.mipmaps,He&&tt){je.length>0&&Ve++;const Ie=Qe(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,we,Ie.width,Ie.height)}for(let Ie=0;Ie<6;Ie++)if(z){He?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,se[Ie].width,se[Ie].height,Te,xe,se[Ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,se[Ie].width,se[Ie].height,0,Te,xe,se[Ie].data);for(let pt=0;pt<je.length;pt++){const Kn=je[pt].image[Ie].image;He?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,pt+1,0,0,Kn.width,Kn.height,Te,xe,Kn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,pt+1,we,Kn.width,Kn.height,0,Te,xe,Kn.data)}}else{He?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,Te,xe,se[Ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,Te,xe,se[Ie]);for(let pt=0;pt<je.length;pt++){const Ot=je[pt];He?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,pt+1,0,0,Te,xe,Ot.image[Ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,pt+1,we,Te,xe,Ot.image[Ie])}}}w(A)&&A.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ye.__version=ce.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function bt(O,A,J,_e,ce,ye){const Ce=r.convert(J.format,J.colorSpace),ie=r.convert(J.type),oe=T(J.internalFormat,Ce,ie,J.normalized,J.colorSpace),Ee=i.get(A),z=i.get(J);if(z.__renderTarget=A,!Ee.__hasExternalTextures){const se=Math.max(1,A.width>>ye),ee=Math.max(1,A.height>>ye);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ye,oe,se,ee,A.depth,0,Ce,ie,null):t.texImage2D(ce,ye,oe,se,ee,0,Ce,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Re(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,ce,z.__webglTexture,0,St(A)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,ce,z.__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function yn(O,A,J){if(n.bindRenderbuffer(n.RENDERBUFFER,O),A.depthBuffer){const _e=A.depthTexture,ce=_e&&_e.isDepthTexture?_e.type:null,ye=S(A.stencilBuffer,ce),Ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Re(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(A),ye,A.width,A.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(A),ye,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ye,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,O)}else{const _e=A.textures;for(let ce=0;ce<_e.length;ce++){const ye=_e[ce],Ce=r.convert(ye.format,ye.colorSpace),ie=r.convert(ye.type),oe=T(ye.internalFormat,Ce,ie,ye.normalized,ye.colorSpace);Re(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(A),oe,A.width,A.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(A),oe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,oe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(O,A,J){const _e=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=i.get(A.depthTexture);ce.__renderTarget=A;const ye=_e?A.depthTexture.image[0]:A.depthTexture.image;(!ce.__webglTexture||ye.width!==A.width||ye.height!==A.height)&&(ye.width=A.width,ye.height=A.height,A.depthTexture.needsUpdate=!0),_e?ge(A.depthTexture,0):Me(A.depthTexture,0);const Ce=ce.__webglTexture,ie=St(A),oe=_e?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,Ee=A.depthTexture.format===ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Vi)Re(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,oe,Ce,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,oe,Ce,0);else if(A.depthTexture.format===ki)Re(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,oe,Ce,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,oe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function an(O){const A=i.get(O),J=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const _e=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_e){const ce=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_e.removeEventListener("dispose",ce)};_e.addEventListener("dispose",ce),A.__depthDisposeCallback=ce}A.__boundDepthTexture=_e}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let _e=0;_e<6;_e++)Pt(A.__webglFramebuffer[_e],O,_e);else O.texture.mipmaps.length>0?Pt(A.__webglFramebuffer[0],O,0):Pt(A.__webglFramebuffer,O,0);else if(J){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]===void 0)A.__webglDepthbuffer[_e]=n.createRenderbuffer(),yn(A.__webglDepthbuffer[_e],O,!1);else{const ce=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer[_e];n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ye)}}else if(O.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),yn(A.__webglDepthbuffer,O,!1);else{const ce=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ye)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ln(O,A,J){const _e=i.get(O);A!==void 0&&bt(_e.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&an(O)}function gn(O){const A=O.texture,J=i.get(O),_e=i.get(A);O.addEventListener("dispose",B),N(O);const ce=O.textures,ye=O.isWebGLCubeRenderTarget===!0,Ce=ce.length>1;if(Ce||(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=A.version,o.memory.textures++),ye){J.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0){J.__webglFramebuffer[ie]=[];for(let oe=0;oe<A.mipmaps.length;oe++)J.__webglFramebuffer[ie][oe]=n.createFramebuffer()}else J.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(A.mipmaps.length>0){J.__webglFramebuffer=[];for(let ie=0;ie<A.mipmaps.length;ie++)J.__webglFramebuffer[ie]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ie=0,oe=ce.length;ie<oe;ie++){const Ee=i.get(ce[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&Re(O)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ie=0;ie<ce.length;ie++){const oe=ce[ie];J.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[ie]);const Ee=r.convert(oe.format,oe.colorSpace),z=r.convert(oe.type),se=T(oe.internalFormat,Ee,z,oe.normalized,oe.colorSpace,O.isXRRenderTarget===!0),ee=St(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,se,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,J.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),yn(J.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),ut(n.TEXTURE_CUBE_MAP,A);for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0)for(let oe=0;oe<A.mipmaps.length;oe++)bt(J.__webglFramebuffer[ie][oe],O,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else bt(J.__webglFramebuffer[ie],O,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(A)?y(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Ce){for(let ie=0,oe=ce.length;ie<oe;ie++){const Ee=ce[ie],z=i.get(Ee);let se=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(se=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,z.__webglTexture),ut(se,Ee),bt(J.__webglFramebuffer,O,Ee,n.COLOR_ATTACHMENT0+ie,se,0),w(Ee)&&y(se)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ie=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,_e.__webglTexture),ut(ie,A),A.mipmaps.length>0)for(let oe=0;oe<A.mipmaps.length;oe++)bt(J.__webglFramebuffer[oe],O,A,n.COLOR_ATTACHMENT0,ie,oe);else bt(J.__webglFramebuffer,O,A,n.COLOR_ATTACHMENT0,ie,0);w(A)?y(ie):A.mipmaps.length>0&&n.texParameteri(ie,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}O.depthBuffer&&an(O)}function $(O){const A=O.textures;for(let J=0,_e=A.length;J<_e;J++){const ce=A[J];if(w(ce)&&ce.mipmapsAutoUpdate===!0){const ye=C(O),Ce=i.get(ce).__webglTexture;t.bindTexture(ye,Ce),y(ye),t.unbindTexture()}}}const cn=[];function xt(O){if(O.samples>0){if(Re(O)===!1){const A=O.textures,J=O.width,_e=O.height;let ce=n.COLOR_BUFFER_BIT;const ye=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(O),ie=A.length>1;if(ie)for(let Ee=0;Ee<A.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ee=0;Ee<A.length;Ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);const z=i.get(A[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,z,0)}n.blitFramebuffer(0,0,J,_e,0,0,J,_e,ce,n.NEAREST),c===!0&&(cn.length=0,cn.push(n.COLOR_ATTACHMENT0+Ee),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&cn.push(ye),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,cn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<A.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);const z=i.get(A[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){const A=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function St(O){return Math.min(s.maxSamples,O.samples)}function Re(O){const A=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Dt(O){const A=o.render.frame;d.get(O)!==A&&(d.set(O,A),O.update())}function We(O,A){const J=O.colorSpace,_e=O.format,ce=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==zn&&J!==Oi&&(ct.getTransfer(J)===_t?(_e!==Qt||ce!==bn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",J)),A}function Qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=ke,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=Pe,this.setTexture2D=Me,this.setTexture2DArray=Ue,this.setTexture3D=ze,this.setTextureCube=ge,this.rebindTextures=ln,this.setupRenderTarget=gn,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=an,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Re,this.dispose=H}function gb(n,e){function t(i,s=Oi){let r;const o=ct.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===Uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===If)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Df)return n.BYTE;if(i===Lf)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===hn)return n.HALF_FLOAT;if(i===Uf)return n.ALPHA;if(i===Ff)return n.RGB;if(i===Qt)return n.RGBA;if(i===Vi)return n.DEPTH_COMPONENT;if(i===ki)return n.DEPTH_STENCIL;if(i===ss)return n.RED;if(i===Oc)return n.RED_INTEGER;if(i===An)return n.RG;if(i===Bc)return n.RG_INTEGER;if(i===zc)return n.RGBA_INTEGER;if(i===$o||i===Xo||i===qo||i===Yo)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hl||i===Gl||i===Vl||i===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===Xl||i===ql||i===Yl||i===Kl||i===oa||i===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$l||i===Xl)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ql)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yl)return r.COMPRESSED_R11_EAC;if(i===Kl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oa)return r.COMPRESSED_RG11_EAC;if(i===Zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jl||i===Ql||i===jl||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ql)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ec)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ic)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===fc||i===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dc)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pc||i===mc||i===aa||i===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_b=`
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

}`;class xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Qf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xn({vertexShader:vb,fragmentShader:_b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sb extends us{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,u=null,p=null,v=null;const x=typeof XRWebGLBinding<"u",m=new xb,g={},M=t.getContextAttributes();let w=null,y=null;const C=[],T=[],S=new ot;let E=null,N=null;const P=new kn;P.viewport=new Ut;const U=new kn;U.viewport=new Ut;const B=[P,U],k=new Lg;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Me=C[re];return Me===void 0&&(Me=new Wa,C[re]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(re){let Me=C[re];return Me===void 0&&(Me=new Wa,C[re]=Me),Me.getGripSpace()},this.getHand=function(re){let Me=C[re];return Me===void 0&&(Me=new Wa,C[re]=Me),Me.getHandSpace()};function V(re){const Me=T.indexOf(re.inputSource);if(Me===-1)return;const Ue=C[Me];Ue!==void 0&&(Ue.update(re.inputSource,re.frame,l||o),Ue.dispatchEvent({type:re.type,data:re.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let re=0;re<C.length;re++){const Me=T[re];Me!==null&&(T[re]=null,C[re].disconnect(Me))}L=null,H=null,m.reset();for(const re in g)delete g[re];if(e.setRenderTarget(w),p=null,u=null,f=null,s=null,y=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(S.width,S.height,!1),N!==null){const re=N.camera;re.fov=N.fov,re.zoom=N.zoom,re.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,ze=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=M.stencil?ki:Vi,ze=M.stencil?ks:ui);const qe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(qe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new ai(u.textureWidth,u.textureHeight,{format:Qt,type:bn,depthTexture:new Gs(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Ue={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ai(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(re){for(let Me=0;Me<re.removed.length;Me++){const Ue=re.removed[Me],ze=T.indexOf(Ue);ze>=0&&(T[ze]=null,C[ze].disconnect(Ue))}for(let Me=0;Me<re.added.length;Me++){const Ue=re.added[Me];let ze=T.indexOf(Ue);if(ze===-1){for(let qe=0;qe<C.length;qe++)if(qe>=T.length){T.push(Ue),ze=qe;break}else if(T[qe]===null){T[qe]=Ue,ze=qe;break}if(ze===-1)break}const ge=C[ze];ge&&ge.connect(Ue)}}function K(re,Me){Me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let Me=re.near,Ue=re.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(Ue=m.depthFar)),k.near=U.near=P.near=Me,k.far=U.far=P.far=Ue,(L!==k.near||H!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,H=k.far),k.layers.mask=re.layers.mask|6,P.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;const ze=re.parent,ge=k.cameras;K(k,ze);for(let qe=0;qe<ge.length;qe++)K(ge[qe],ze);k.projectionMatrix.copy(P.projectionMatrix),k.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&re.isPerspectiveCamera&&(N={camera:re,fov:re.fov,zoom:re.zoom}),le(re,k,ze)};function le(re,Me,Ue){Ue===null?re.matrix.copy(Me.matrixWorld):(re.matrix.copy(Ue.matrixWorld),re.matrix.invert(),re.matrix.multiply(Me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Or*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(re){c=re,u!==null&&(u.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(re){return g[re]};let ue=null;function Pe(re,Me){if(d=Me.getViewerPose(l||o),v=Me,d!==null){const Ue=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ze=!1;Ue.length!==k.cameras.length&&(k.cameras.length=0,ze=!0);for(let $e=0;$e<Ue.length;$e++){const ut=Ue[$e];let dt=null;if(p!==null)dt=p.getViewport(ut);else{const Ct=f.getViewSubImage(u,ut);dt=Ct.viewport,$e===0&&(e.setRenderTargetTextures(y,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(y))}let st=B[$e];st===void 0&&(st=new kn,st.layers.enable($e),st.viewport=new Ut,B[$e]=st),st.matrix.fromArray(ut.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ut.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(dt.x,dt.y,dt.width,dt.height),$e===0&&(k.matrix.copy(st.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ze===!0&&k.cameras.push(st)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const $e=f.getDepthInformation(Ue[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let $e=0;$e<Ue.length;$e++){const ut=Ue[$e].camera;if(ut){let dt=g[ut];dt||(dt=new Qf,g[ut]=dt);const st=f.getCameraImage(ut);dt.sourceTexture=st}}}}for(let Ue=0;Ue<C.length;Ue++){const ze=T[Ue],ge=C[Ue];ze!==null&&ge!==void 0&&ge.update(ze,Me,l||o)}ue&&ue(re,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),v=null}const ke=new sh;ke.setAnimationLoop(Pe),this.setAnimationLoop=function(re){ue=re},this.dispose=function(){}}}const bb=new lt,ph=new et;ph.set(-1,0,0,0,1,0,0,0,1);function Mb(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,jf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&p(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),v(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,M,w):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=e.get(g),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(bb.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ph),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,M,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yb(n,e,t,i){let s={},r={};function o(M,w){const y=w.program;i.uniformBlockBinding(M,y,s[M.id])}function a(M,w){let y=s[M.id];y===void 0&&(v(M),y=c(M),s[M.id]=y,M.addEventListener("dispose",m));const C=w.program;i.updateUBOMapping(M,C);const T=e.render.frame;r[M.id]!==T&&(l(M),r[M.id]=T)}function c(M){const w=n.createBuffer(),y=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,y,C),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function l(M){const w=s[M.id],y=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,S=y.length;T<S;T++){const E=y[T];if(Array.isArray(E))for(let N=0,P=E.length;N<P;N++)d(E[N],T,N,C);else d(E,T,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,y,C){if(u(M,w,y,C)===!0){const T=M.__offset,S=M.value;if(Array.isArray(S)){let E=0;for(let N=0;N<S.length;N++){const P=S[N],U=x(P,!0);f(P,M.__data,E),E+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(S,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,M.__data)}}function f(M,w,y){typeof M=="number"||typeof M=="boolean"?w[y]=M:M.isMatrix3?(w[y]=M.elements[0],w[y+1]=M.elements[1],w[y+2]=M.elements[2],w[y+3]=0,w[y+4]=M.elements[3],w[y+5]=M.elements[4],w[y+6]=M.elements[5],w[y+7]=0,w[y+8]=M.elements[6],w[y+9]=M.elements[7],w[y+10]=M.elements[8],w[y+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-y),y):M.toArray(w,y)}function u(M,w,y,C){const T=M.value,S=w+"_"+y;if(Array.isArray(T)){C[S]===void 0&&(C[S]=[]);const E=C[S];let N=!1;for(let P=0;P<T.length;P++)p(T[P],E,P)===!0&&(N=!0);return N}return p(T,C,S)}function p(M,w,y){if(w[y]===void 0)return typeof M=="number"||typeof M=="boolean"?w[y]=M:ArrayBuffer.isView(M)?w[y]=M.slice():w[y]=M.clone(),!0;{const C=w[y];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return w[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function v(M){const w=M.uniforms;let y=0;const C=16;for(let S=0,E=w.length;S<E;S++){const N=Array.isArray(w[S])?w[S]:[w[S]];for(let P=0,U=N.length;P<U;P++){const B=N[P],k=Array.isArray(B.value)?B.value:[B.value],L=Array.isArray(w[S])||Array.isArray(B.value);let H=y;for(let W=0,j=k.length;W<j;W++){const K=k[W],le=x(K,L),ue=y%C,Pe=ue%le.boundary,ke=ue+Pe;y+=Pe,ke!==0&&C-ke<le.storage&&(y+=C-ke),W===0&&(H=y),y+=le.storage}const V=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new V((y-H)/Float32Array.BYTES_PER_ELEMENT),B.__offset=H}}const T=y%C;return T>0&&(y+=C-T),M.__size=y,M.__cache={},this}function x(M,w){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(M){const w=M.target;w.removeEventListener("dispose",m),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(const M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:g}}const Eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function wb(){return jn===null&&(jn=new ua(Eb,16,16,An,hn),jn.name="DFG_LUT",jn.minFilter=Gt,jn.magFilter=Gt,jn.wrapS=Pn,jn.wrapT=Pn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class Tb{constructor(e={}){const{canvas:t=T0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const x=p,m=new Set([zc,Bc,Oc]),g=new Set([bn,ui,Ur,ks,Uc,Fc]),M=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let C=null,T=null;const S=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let U=!1,B=null,k=null,L=null,H=null;this._outputColorSpace=fn;let V=0,W=0,j=null,K=-1,le=null;const ue=new Ut,Pe=new Ut;let ke=null;const re=new Oe(0);let Me=0,Ue=t.width,ze=t.height,ge=1,qe=null,gt=null;const $e=new Ut(0,0,Ue,ze),ut=new Ut(0,0,Ue,ze);let dt=!1;const st=new Br,Ct=new Yc;let wt=!1,Xt=!1;const bt=new lt,yn=new Y,Pt=new Ut,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ln=!1;function gn(){return j===null?ge:1}let $=i;function cn(h,b){return t.getContext(h,b)}let xt,St,Re,Dt,We,Qe,O,A,J,_e,ce,ye,Ce,ie,oe,Ee,z,se,ee,Te,xe,we,He;try{const h={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lc}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),$===null){const b="webgl2";if($=cn(b,h),$===null)throw cn(b)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(h){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ht("WebGLRenderer: "+h.message),h}function tt(){xt=new Cx($),xt.init(),xe=new gb($,xt),St=new _x($,xt,e,xe),Re=new pb($,xt),St.reversedDepthBuffer&&u&&Re.buffers.depth.setReversed(!0),k=$.createFramebuffer(),L=$.createFramebuffer(),H=$.createFramebuffer(),Dt=new Lx($),We=new eb,Qe=new mb($,xt,Re,We,St,xe,Dt),O=new Rx(P),A=new Ng($),we=new gx($,A),J=new Px($,A,Dt,we),_e=new Nx($,J,A,we,Dt),se=new Ix($,St,Qe),oe=new xx(We),ce=new jS(P,O,xt,St,we,oe),ye=new Mb(P,We),Ce=new nb,ie=new lb(xt),z=new mx(P,O,Re,_e,v,c),Ee=new hb(P,_e,St),He=new yb($,Dt,St,Re),ee=new vx($,xt,Dt),Te=new Dx($,xt,Dt),Dt.programs=ce.programs,P.capabilities=St,P.extensions=xt,P.properties=We,P.renderLists=Ce,P.shadowMap=Ee,P.state=Re,P.info=Dt}x!==bn&&(N=new Fx(x,t.width,t.height,a,s,r));const Se=new Sb(P,$);this.xr=Se,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const h=xt.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=xt.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(h){h!==void 0&&(ge=h,this.setSize(Ue,ze,!1))},this.getSize=function(h){return h.set(Ue,ze)},this.setSize=function(h,b,R=!0){if(Se.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=h,ze=b,t.width=Math.floor(h*ge),t.height=Math.floor(b*ge),R===!0&&(t.style.width=h+"px",t.style.height=b+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,h,b)},this.getDrawingBufferSize=function(h){return h.set(Ue*ge,ze*ge).floor()},this.setDrawingBufferSize=function(h,b,R){Ue=h,ze=b,ge=R,t.width=Math.floor(h*R),t.height=Math.floor(b*R),this.setViewport(0,0,h,b)},this.setEffects=function(h){if(x===bn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(h){for(let b=0;b<h.length;b++)if(h[b].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(h||[])},this.getCurrentViewport=function(h){return h.copy(ue)},this.getViewport=function(h){return h.copy($e)},this.setViewport=function(h,b,R,D){h.isVector4?$e.set(h.x,h.y,h.z,h.w):$e.set(h,b,R,D),Re.viewport(ue.copy($e).multiplyScalar(gn()).round())},this.getScissor=function(h){return h.copy(ut)},this.setScissor=function(h,b,R,D){h.isVector4?ut.set(h.x,h.y,h.z,h.w):ut.set(h,b,R,D),Re.scissor(Pe.copy(ut).multiplyScalar(gn()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(h){Re.setScissorTest(dt=h)},this.setOpaqueSort=function(h){qe=h},this.setTransparentSort=function(h){gt=h},this.getClearColor=function(h){return h.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(h=!0,b=!0,R=!0){let D=0;if(h){let F=!1;if(j!==null){const I=j.texture.format;F=m.has(I)}if(F){const I=j.texture.type,q=g.has(I),G=z.getClearColor(),X=z.getClearAlpha(),Z=G.r,ae=G.g,te=G.b;q?(M[0]=Z,M[1]=ae,M[2]=te,M[3]=X,$.clearBufferuiv($.COLOR,0,M)):(w[0]=Z,w[1]=ae,w[2]=te,w[3]=X,$.clearBufferiv($.COLOR,0,w))}else D|=$.COLOR_BUFFER_BIT}b&&(D|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),R&&(D|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D!==0&&$.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(h){h.setRenderer(this),B=h},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),z.dispose(),Ce.dispose(),ie.dispose(),Qe.dispose(),We.dispose(),O.dispose(),_e.dispose(),J.dispose(),we.dispose(),He.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",js),Se.removeEventListener("sessionend",qr),di.stop()};function Ve(h){h.preventDefault(),xu("WebGLRenderer: Context Lost."),U=!0}function je(){xu("WebGLRenderer: Context Restored."),U=!1;const h=Dt.autoReset,b=Ee.enabled,R=Ee.autoUpdate,D=Ee.needsUpdate,F=Ee.type;tt(),Dt.autoReset=h,Ee.enabled=b,Ee.autoUpdate=R,Ee.needsUpdate=D,Ee.type=F}function Ie(h){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function pt(h){const b=h.target;b.removeEventListener("dispose",pt),Ot(b)}function Ot(h){Kn(h),We.remove(h)}function Kn(h){const b=We.get(h).programs;b!==void 0&&(b.forEach(function(R){ce.releaseProgram(R)}),h.isShaderMaterial&&ce.releaseShaderCache(h))}this.renderBufferDirect=function(h,b,R,D,F,I){b===null&&(b=an);const q=F.isMesh&&F.matrixWorld.determinantAffine()<0,G=Qr(h,b,R,D,F);Re.setMaterial(D,q);let X=R.index,Z=1;if(D.wireframe===!0){if(X=J.getWireframeAttribute(R),X===void 0)return;Z=2}const ae=R.drawRange,te=R.attributes.position;let ne=ae.start*Z,he=(ae.start+ae.count)*Z;I!==null&&(ne=Math.max(ne,I.start*Z),he=Math.min(he,(I.start+I.count)*Z)),X!==null?(ne=Math.max(ne,0),he=Math.min(he,X.count)):te!=null&&(ne=Math.max(ne,0),he=Math.min(he,te.count));const pe=he-ne;if(pe<0||pe===1/0)return;we.setup(F,D,G,R,X);let ve,Ae=ee;if(X!==null&&(ve=A.get(X),Ae=Te,Ae.setIndex(ve)),F.isMesh)D.wireframe===!0?(Re.setLineWidth(D.wireframeLinewidth*gn()),Ae.setMode($.LINES)):Ae.setMode($.TRIANGLES);else if(F.isLine){let Xe=D.linewidth;Xe===void 0&&(Xe=1),Re.setLineWidth(Xe*gn()),F.isLineSegments?Ae.setMode($.LINES):F.isLineLoop?Ae.setMode($.LINE_LOOP):Ae.setMode($.LINE_STRIP)}else F.isPoints?Ae.setMode($.POINTS):F.isSprite&&Ae.setMode($.TRIANGLES);if(F.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Xe=F._multiDrawStarts,fe=F._multiDrawCounts,Ke=F._multiDrawCount,be=X?A.get(X).bytesPerElement:1,Le=We.get(D).currentProgram.getUniforms();for(let Ne=0;Ne<Ke;Ne++)Le.setValue($,"_gl_DrawID",Ne),Ae.render(Xe[Ne]/be,fe[Ne])}else if(F.isInstancedMesh)Ae.renderInstances(ne,pe,F.count);else if(R.isInstancedBufferGeometry){const Xe=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,fe=Math.min(R.instanceCount,Xe);Ae.renderInstances(ne,pe,fe)}else Ae.render(ne,pe)};function Xr(h,b,R,D){B!==null&&h.isNodeMaterial&&B.setObject(D,h),wt===!0&&oe.setState(h,R,!1),h.transparent===!0&&h.side===ri&&h.forceSinglePass===!1?(h.side=pn,h.needsUpdate=!0,Zn(h,b,D),h.side=ls,h.needsUpdate=!0,Zn(h,b,D),h.side=ri):Zn(h,b,D)}this.compile=function(h,b,R=null){R===null&&(R=h),B!==null&&B.renderStart(h,b,R),T=ie.get(R),T.init(b),E.push(T),R.traverseVisible(function(F){F.isLight&&F.layers.test(b.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),h!==R&&h.traverseVisible(function(F){F.isLight&&F.layers.test(b.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),Xt=this.localClippingEnabled,wt=oe.init(this.clippingPlanes,Xt),wt===!0&&oe.setGlobalState(this.clippingPlanes,b),B!==null&&Ee.render(T.state.shadowsArray,R,b);const D=new Set;return h.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const I=F.material;if(I)if(Array.isArray(I))for(let q=0;q<I.length;q++){const G=I[q];Xr(G,R,b,F),D.add(G)}else Xr(I,R,b,F),D.add(I)}),T=E.pop(),B!==null&&B.renderEnd(),D},this.compileAsync=function(h,b,R=null){const D=this.compile(h,b,R);return new Promise(F=>{function I(){if(D.forEach(function(q){const X=We.get(q).currentProgram;(X===void 0||X.isReady())&&D.delete(q)}),D.size===0){F(h);return}setTimeout(I,10)}xt.get("KHR_parallel_shader_compile")!==null?I():setTimeout(I,10)})};let Qs=null;function Ta(h){Qs&&Qs(h)}function js(){di.stop()}function qr(){di.start()}const di=new sh;di.setAnimationLoop(Ta),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(h){Qs=h,Se.setAnimationLoop(h),h===null?di.stop():di.start()},Se.addEventListener("sessionstart",js),Se.addEventListener("sessionend",qr),this.render=function(h,b){if(b!==void 0&&b.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(h,b);const R=Se.enabled===!0&&Se.isPresenting===!0,D=N!==null&&(j===null||R)&&N.begin(P,j);if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(b),b=Se.getCamera()),h.isScene===!0&&h.onBeforeRender(P,h,b,j),T=ie.get(h,E.length),T.init(b),T.state.textureUnits=Qe.getTextureUnits(),E.push(T),bt.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),b.isArrayCamera?Ct.setFromArrayCamera(b):st.setFromProjectionMatrix(bt,$n,b.reversedDepth),Xt=this.localClippingEnabled,wt=oe.init(this.clippingPlanes,Xt),C=Ce.get(h,S.length),C.init(),S.push(C),this.info.render.frame++,Se.enabled===!0&&Se.isPresenting===!0){const q=P.xr.getDepthSensingMesh();q!==null&&er(q,b,-1/0,P.sortObjects)}er(h,b,0,P.sortObjects),C.finish(),B!==null&&B.updateLights(T.state.lightsArray),P.sortObjects===!0&&C.sort(qe,gt),ln=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ln&&z.addToRenderList(C,h),this.info.autoReset===!0&&this.info.reset(),wt===!0&&oe.beginShadows();const F=T.state.shadowsArray;if(Ee.render(F,h,b),wt===!0&&oe.endShadows(),(D&&N.hasRenderPass())===!1){const q=C.opaque,G=C.transmissive;if(T.setupLights(),b.isArrayCamera){const X=b.cameras;if(G.length>0)for(let Z=0,ae=X.length;Z<ae;Z++){const te=X[Z];Yr(q,G,h,te)}ln&&z.render(h);for(let Z=0,ae=X.length;Z<ae;Z++){const te=X[Z];tr(C,h,te,te.viewport)}}else G.length>0&&Yr(q,G,h,b),ln&&z.render(h),tr(C,h,b)}j!==null&&W===0&&(Qe.updateMultisampleRenderTarget(j),Qe.updateRenderTargetMipmap(j)),D&&N.end(P),h.isScene===!0&&h.onAfterRender(P,h,b),we.resetDefaultState(),K=-1,le=null,E.pop(),E.length>0?(T=E[E.length-1],Qe.setTextureUnits(T.state.textureUnits),wt===!0&&oe.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,S.pop(),S.length>0?C=S[S.length-1]:C=null,B!==null&&B.renderEnd()};function er(h,b,R,D){if(h.visible===!1)return;if(h.layers.test(b.layers)){if(h.isGroup)R=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(b);else if(h.isLight)T.pushLight(h),h.castShadow&&T.pushShadow(h);else if(h.isSprite){const q=b.isArrayCamera?Ct:st;if(!h.frustumCulled||h.intersectsFrustum(q)){D&&Pt.setFromMatrixPosition(h.matrixWorld).applyMatrix4(bt);const G=_e.update(h),X=h.material;X.visible&&C.push(h,G,X,R,Pt.z,null,b)}}else if(h.isMesh||h.isLine||h.isPoints){const q=b.isArrayCamera?Ct:st;if(!h.frustumCulled||h.intersectsFrustum(q)){const G=_e.update(h),X=h.material;if(D&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Pt.copy(h.boundingSphere.center)):(G.boundingSphere===null&&G.computeBoundingSphere(),Pt.copy(G.boundingSphere.center)),Pt.applyMatrix4(h.matrixWorld).applyMatrix4(bt)),Array.isArray(X)){const Z=G.groups;for(let ae=0,te=Z.length;ae<te;ae++){const ne=Z[ae],he=X[ne.materialIndex];he&&he.visible&&C.push(h,G,he,R,Pt.z,ne,b)}}else X.visible&&C.push(h,G,X,R,Pt.z,null,b)}}}const I=h.children;for(let q=0,G=I.length;q<G;q++)er(I[q],b,R,D)}function tr(h,b,R,D){const{opaque:F,transmissive:I,transparent:q}=h;T.setupLightsView(R),wt===!0&&oe.setGlobalState(P.clippingPlanes,R),D&&Re.viewport(ue.copy(D)),F.length>0&&Xi(F,b,R),I.length>0&&Xi(I,b,R),q.length>0&&Xi(q,b,R),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Yr(h,b,R,D){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[D.id]===void 0){const ne=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[D.id]=new ai(1,1,{generateMipmaps:!0,type:ne?hn:bn,minFilter:yi,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const I=T.state.transmissionRenderTarget[D.id],q=D.viewport||ue;I.setSize(q.z*P.transmissionResolutionScale,q.w*P.transmissionResolutionScale);const G=P.getRenderTarget(),X=P.getActiveCubeFace(),Z=P.getActiveMipmapLevel();P.setRenderTarget(I),P.getClearColor(re),Me=P.getClearAlpha(),Me<1&&P.setClearColor(16777215,.5),P.clear(),ln&&z.render(R);const ae=P.toneMapping;P.toneMapping=Ti;const te=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),T.setupLightsView(D),wt===!0&&oe.setGlobalState(P.clippingPlanes,D),Xi(h,R,D),Qe.updateMultisampleRenderTarget(I),Qe.updateRenderTargetMipmap(I),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let he=0,pe=b.length;he<pe;he++){const ve=b[he],{object:Ae,geometry:Xe,material:fe,group:Ke}=ve;if(fe.side===ri&&Ae.layers.test(D.layers)){const be=fe.side;fe.side=pn,fe.needsUpdate=!0,Kr(Ae,R,D,Xe,fe,Ke),fe.side=be,fe.needsUpdate=!0,ne=!0}}ne===!0&&(Qe.updateMultisampleRenderTarget(I),Qe.updateRenderTargetMipmap(I))}P.setRenderTarget(G,X,Z),P.setClearColor(re,Me),te!==void 0&&(D.viewport=te),P.toneMapping=ae}function Xi(h,b,R){const D=b.isScene===!0?b.overrideMaterial:null;for(let F=0,I=h.length;F<I;F++){const q=h[F],{object:G,geometry:X,group:Z}=q;let ae=q.material;ae.allowOverride===!0&&D!==null&&(ae=D),G.layers.test(R.layers)&&Kr(G,b,R,X,ae,Z)}}function Kr(h,b,R,D,F,I){B!==null&&F.isNodeMaterial&&B.setObject(h,F),h.onBeforeRender(P,b,R,D,F,I),h.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),F.onBeforeRender(P,b,R,D,h,I),F.transparent===!0&&F.side===ri&&F.forceSinglePass===!1?(F.side=pn,F.needsUpdate=!0,P.renderBufferDirect(R,b,D,F,h,I),F.side=ls,F.needsUpdate=!0,P.renderBufferDirect(R,b,D,F,h,I),F.side=ri):P.renderBufferDirect(R,b,D,F,h,I),h.onAfterRender(P,b,R,D,F,I)}function Zr(h){let b=0;for(const R of h)R.texture!==null&&b++;return b}function Zn(h,b,R){b.isScene!==!0&&(b=an);const D=We.get(h),F=T.state.lights,I=T.state.shadowsArray,q=F.state.version,G=ce.getParameters(h,F.state,I,b,R,T.state.lightProbeGridArray),X=ce.getProgramCacheKey(G);let Z=D.programs;D.environment=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?b.environment:null,D.fog=b.fog;const ae=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap;D.envMap=O.get(h.envMap||D.environment,ae),D.envMapRotation=D.environment!==null&&h.envMap===null?b.environmentRotation:h.envMapRotation,Z===void 0&&(h.addEventListener("dispose",pt),Z=new Map,D.programs=Z,D.programVariants=new Map);let te=Z.get(X);if(te!==void 0){if(D.currentProgram===te&&D.lightsStateVersion===q)return qi(h,G),te}else G.uniforms=ce.getUniforms(h),B!==null&&h.isNodeMaterial&&B.build(h,R,G),h.onBeforeCompile(G,P),te=ce.acquireProgram(G,X),Z.set(X,te),D.uniforms=G.uniforms;const ne=D.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(ne.clippingPlanes=oe.uniform),qi(h,G),D.needsLights=vn(h),D.lightsStateVersion=q,D.needsLights&&(ne.ambientLightColor.value=F.state.ambient,ne.lightProbe.value=F.state.probe,ne.sunLights.value=F.state.sun,ne.sunLightShadows.value=F.state.sunShadow,ne.directionalLights.value=F.state.directional,ne.directionalLightShadows.value=F.state.directionalShadow,ne.spotLights.value=F.state.spot,ne.spotLightShadows.value=F.state.spotShadow,ne.rectAreaLights.value=F.state.rectArea,ne.ltc_1.value=F.state.rectAreaLTC1,ne.ltc_2.value=F.state.rectAreaLTC2,ne.pointLights.value=F.state.point,ne.pointLightShadows.value=F.state.pointShadow,ne.hemisphereLights.value=F.state.hemi,ne.sunShadowMatrix.value=F.state.sunShadowMatrix,ne.sunShadowCascade.value=F.state.sunShadowCascade,ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ne.spotLightMatrix.value=F.state.spotLightMatrix,ne.spotLightMap.value=F.state.spotLightMap,ne.pointShadowMatrix.value=F.state.pointShadowMatrix),D.numLightProbeGrids=Zr(T.state.lightProbeGridArray),D.currentProgram=te,D.uniformsList=null,te}function ds(h,b,R,D,F){const I=We.get(h),q=I.currentProgram.id+","+D+","+F;let G=I.programVariants.get(q);return G===void 0?(G=Zn(h,b,R),I.programVariants.set(q,G)):(I.currentProgram=G,I.uniformsList=null,I.outputColorSpace=D,I.toneMapping=F),G}function Jr(h){if(h.uniformsList===null){const b=h.currentProgram.getUniforms();h.uniformsList=Zo.seqWithValue(b.seq,h.uniforms)}return h.uniformsList}function qi(h,b){const R=We.get(h);R.outputColorSpace=b.outputColorSpace,R.batching=b.batching,R.batchingColor=b.batchingColor,R.instancing=b.instancing,R.instancingColor=b.instancingColor,R.instancingMorph=b.instancingMorph,R.skinning=b.skinning,R.morphTargets=b.morphTargets,R.morphNormals=b.morphNormals,R.morphColors=b.morphColors,R.morphTargetsCount=b.morphTargetsCount,R.numClippingPlanes=b.numClippingPlanes,R.numIntersection=b.numClipIntersection,R.vertexAlphas=b.vertexAlphas,R.vertexTangents=b.vertexTangents,R.toneMapping=b.toneMapping}function Qr(h,b,R,D,F){b.isScene!==!0&&(b=an),Qe.resetTextureUnits();const I=b.fog,q=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?b.environment:null,G=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ct.workingColorSpace,X=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,Z=O.get(D.envMap||q,X),ae=D.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,te=!!R.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),ne=!!R.morphAttributes.position,he=!!R.morphAttributes.normal,pe=!!R.morphAttributes.color;let ve=Ti;D.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ve=P.toneMapping);const Ae=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Xe=Ae!==void 0?Ae.length:0,fe=We.get(D),Ke=T.state.lights;if(wt===!0&&(Xt===!0||h!==le)){const Ze=h===le&&D.id===K;oe.setState(D,h,Ze)}let be=!1,Le=!1;D.version===fe.__version?fe.needsLights&&fe.lightsStateVersion!==Ke.state.version||F.isBatchedMesh&&fe.batching===!1||!F.isBatchedMesh&&fe.batching===!0||F.isBatchedMesh&&fe.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&fe.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&fe.instancing===!1||!F.isInstancedMesh&&fe.instancing===!0||F.isSkinnedMesh&&fe.skinning===!1||!F.isSkinnedMesh&&fe.skinning===!0||F.isInstancedMesh&&fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&fe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&fe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&fe.instancingMorph===!1&&F.morphTexture!==null||fe.envMap!==Z||D.fog===!0&&fe.fog!==I||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==oe.numPlanes||fe.numIntersection!==oe.numIntersection)||fe.vertexAlphas!==ae||fe.vertexTangents!==te||fe.morphTargets!==ne||fe.morphNormals!==he||fe.morphColors!==pe||fe.morphTargetsCount!==Xe||fe.numLightProbeGrids!==Zr(T.state.lightProbeGridArray)?be=!0:(fe.outputColorSpace!==G||fe.toneMapping!==ve)&&(Le=!0):(be=!0,fe.__version=D.version);let Ne=fe.currentProgram;(be===!0||Le===!0)&&(Ne=Le===!0?ds(D,b,F,G,ve):Zn(D,b,F),B&&D.isNodeMaterial&&B.onUpdateProgram(D,Ne,fe));let ft=!1,nt=!1,Ye=!1;const Be=Ne.getUniforms(),rt=fe.uniforms;if(Re.useProgram(Ne.program)&&(ft=!0,nt=!0,Ye=!0),D.id!==K&&(K=D.id,nt=!0),ft||le!==h){Re.buffers.depth.getReversed()&&h.reversedDepth!==!0&&(h._reversedDepth=!0,h.updateProjectionMatrix()),Be.setValue($,"projectionMatrix",h.projectionMatrix),Be.setValue($,"viewMatrix",h.matrixWorldInverse);const vt=Be.map.cameraPosition;vt!==void 0&&vt.setValue($,yn.setFromMatrixPosition(h.matrixWorld)),St.logarithmicDepthBuffer&&Be.setValue($,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Be.setValue($,"isOrthographic",h.isOrthographicCamera===!0),le!==h&&(le=h,nt=!0,Ye=!0)}if(fe.needsLights&&(Ke.state.sunShadowMap.length>0&&Be.setValue($,"sunShadowMap",Ke.state.sunShadowMap,Qe),Ke.state.directionalShadowMap.length>0&&Be.setValue($,"directionalShadowMap",Ke.state.directionalShadowMap,Qe),Ke.state.spotShadowMap.length>0&&Be.setValue($,"spotShadowMap",Ke.state.spotShadowMap,Qe),Ke.state.pointShadowMap.length>0&&Be.setValue($,"pointShadowMap",Ke.state.pointShadowMap,Qe)),F.isSkinnedMesh){Be.setOptional($,F,"bindMatrix"),Be.setOptional($,F,"bindMatrixInverse");const Ze=F.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Be.setValue($,"boneTexture",Ze.boneTexture,Qe))}F.isBatchedMesh&&(Be.setOptional($,F,"batchingTexture"),Be.setValue($,"batchingTexture",F._matricesTexture,Qe),Be.setOptional($,F,"batchingIdTexture"),Be.setValue($,"batchingIdTexture",F._indirectTexture,Qe),Be.setOptional($,F,"batchingColorTexture"),F._colorsTexture!==null&&Be.setValue($,"batchingColorTexture",F._colorsTexture,Qe));const Mt=R.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&se.update(F,R,Ne),(nt||fe.receiveShadow!==F.receiveShadow)&&(fe.receiveShadow=F.receiveShadow,Be.setValue($,"receiveShadow",F.receiveShadow)),(D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial)&&D.envMap===null&&b.environment!==null&&(rt.envMapIntensity.value=b.environmentIntensity),rt.dfgLUT!==void 0&&(rt.dfgLUT.value=wb()),nt){if(Be.setValue($,"toneMappingExposure",P.toneMappingExposure),fe.needsLights&&qt(rt,Ye),I&&D.fog===!0&&ye.refreshFogUniforms(rt,I),ye.refreshMaterialUniforms(rt,D,ge,ze,T.state.transmissionRenderTarget[h.id]),fe.needsLights&&fe.numLightProbeGrids>0){const Ze=y;let vt=0;for(const tn of T.state.lightProbeGridArray)tn.texture!==null&&(Ze.textures[vt]=tn.texture,Ze.min[vt]=tn.boundingBox.min,Ze.max[vt]=tn.boundingBox.max,Ze.resolution[vt]=tn.resolution,vt++);for(const tn in Ze)Ze[tn].length=vt;rt.probesSH.value=Ze.textures,rt.probesMin.value=Ze.min,rt.probesMax.value=Ze.max,rt.probesResolution.value=Ze.resolution}Zo.upload($,Jr(fe),rt,Qe)}if(D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Zo.upload($,Jr(fe),rt,Qe),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Be.setValue($,"center",F.center),Be.setValue($,"modelViewMatrix",F.modelViewMatrix),Be.setValue($,"normalMatrix",F.normalMatrix),Be.setValue($,"modelMatrix",F.matrixWorld),D.uniformsGroups!==void 0){const Ze=D.uniformsGroups;for(let vt=0,tn=Ze.length;vt<tn;vt++){const Ri=Ze[vt];He.update(Ri,Ne),He.bind(Ri,Ne)}}return Ne}function qt(h,b){h.ambientLightColor.needsUpdate=b,h.lightProbe.needsUpdate=b,h.sunLights.needsUpdate=b,h.sunLightShadows.needsUpdate=b,h.directionalLights.needsUpdate=b,h.directionalLightShadows.needsUpdate=b,h.pointLights.needsUpdate=b,h.pointLightShadows.needsUpdate=b,h.spotLights.needsUpdate=b,h.spotLightShadows.needsUpdate=b,h.rectAreaLights.needsUpdate=b,h.hemisphereLights.needsUpdate=b}function vn(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(h,b,R){const D=We.get(h);D.__autoAllocateDepthBuffer=h.resolveDepthBuffer===!1,D.__autoAllocateDepthBuffer===!1&&(D.__useRenderToTexture=!1),We.get(h.texture).__webglTexture=b,We.get(h.depthTexture).__webglTexture=D.__autoAllocateDepthBuffer?void 0:R,D.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(h,b){const R=We.get(h);R.__webglFramebuffer=b,R.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(h,b=0,R=0){j=h,V=b,W=R;let D=null,F=!1,I=!1;if(h){const G=We.get(h);if(G.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer($.FRAMEBUFFER,G.__webglFramebuffer),ue.copy(h.viewport),Pe.copy(h.scissor),ke=h.scissorTest,Re.viewport(ue),Re.scissor(Pe),Re.setScissorTest(ke),K=-1;return}else if(G.__webglFramebuffer===void 0)Qe.setupRenderTarget(h);else if(G.__hasExternalTextures)Qe.rebindTextures(h,We.get(h.texture).__webglTexture,We.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const ae=h.depthTexture;if(G.__boundDepthTexture!==ae){if(ae!==null&&We.has(ae)&&(h.width!==ae.image.width||h.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(h)}}const X=h.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(I=!0);const Z=We.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(Z[b])?D=Z[b][R]:D=Z[b],F=!0):h.samples>0&&Qe.useMultisampledRTT(h)===!1?D=We.get(h).__webglMultisampledFramebuffer:Array.isArray(Z)?D=Z[R]:D=Z,ue.copy(h.viewport),Pe.copy(h.scissor),ke=h.scissorTest}else ue.copy($e).multiplyScalar(ge).floor(),Pe.copy(ut).multiplyScalar(ge).floor(),ke=dt;if(R!==0&&(D=k),Re.bindFramebuffer($.FRAMEBUFFER,D)&&Re.drawBuffers(h,D),Re.viewport(ue),Re.scissor(Pe),Re.setScissorTest(ke),F){const G=We.get(h.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+b,G.__webglTexture,R)}else if(I){const G=b;for(let X=0;X<h.textures.length;X++){const Z=We.get(h.textures[X]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+X,Z.__webglTexture,R,G)}}else if(h!==null&&R!==0){const G=We.get(h.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,G.__webglTexture,R)}K=-1};function _(h){const b=We.get(h);return(b.__readFormat!==h.format||b.__readType!==h.type)&&(b.__readFormat=h.format,b.__readType=h.type,b.__formatReadable=St.textureFormatReadable(h.format),b.__typeReadable=St.textureTypeReadable(h.type)),b}this.readRenderTargetPixels=function(h,b,R,D,F,I,q,G=0){if(!(h&&h.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let X=We.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&q!==void 0&&(X=X[q],Array.isArray(X)&&(X=X[0])),X){Re.bindFramebuffer($.FRAMEBUFFER,X);try{const Z=h.textures[G],ae=Z.format,te=Z.type;h.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+G);const ne=_(Z);if(ne.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ne.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=h.width-D&&R>=0&&R<=h.height-F&&$.readPixels(b,R,D,F,xe.convert(ae),xe.convert(te),I)}finally{const Z=j!==null?We.get(j).__webglFramebuffer:null;Re.bindFramebuffer($.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(h,b,R,D,F,I,q,G=0){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let X=We.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&q!==void 0&&(X=X[q],Array.isArray(X)&&(X=X[0])),X)if(b>=0&&b<=h.width-D&&R>=0&&R<=h.height-F){Re.bindFramebuffer($.FRAMEBUFFER,X);const Z=h.textures[G],ae=Z.format,te=Z.type;h.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+G);const ne=_(Z);if(ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,he),$.bufferData($.PIXEL_PACK_BUFFER,I.byteLength,$.STREAM_READ),$.readPixels(b,R,D,F,xe.convert(ae),xe.convert(te),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const pe=j!==null?We.get(j).__webglFramebuffer:null;Re.bindFramebuffer($.FRAMEBUFFER,pe);const ve=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await A0($,ve,4),$.bindBuffer($.PIXEL_PACK_BUFFER,he),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,I),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(he),$.deleteSync(ve),I}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(h,b=null,R=0){const D=Math.pow(2,-R),F=Math.floor(h.image.width*D),I=Math.floor(h.image.height*D),q=b!==null?b.x:0,G=b!==null?b.y:0;Qe.setTexture2D(h,0),$.copyTexSubImage2D($.TEXTURE_2D,R,0,0,q,G,F,I),Re.unbindTexture()},this.copyTextureToTexture=function(h,b,R=null,D=null,F=0,I=0){let q,G,X,Z,ae,te,ne,he,pe;const ve=h.isCompressedTexture?h.mipmaps[I]:h.image;if(R!==null)q=R.max.x-R.min.x,G=R.max.y-R.min.y,X=R.isBox3?R.max.z-R.min.z:1,Z=R.min.x,ae=R.min.y,te=R.isBox3?R.min.z:0;else{const Be=Math.pow(2,-F);q=Math.floor(ve.width*Be),G=Math.floor(ve.height*Be),h.isDataArrayTexture?X=ve.depth:h.isData3DTexture?X=Math.floor(ve.depth*Be):X=1,Z=0,ae=0,te=0}D!==null?(ne=D.x,he=D.y,pe=D.z):(ne=0,he=0,pe=0);const Ae=xe.convert(b.format),Xe=xe.convert(b.type);let fe;b.isData3DTexture?(Qe.setTexture3D(b,0),fe=$.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(Qe.setTexture2DArray(b,0),fe=$.TEXTURE_2D_ARRAY):(Qe.setTexture2D(b,0),fe=$.TEXTURE_2D),Re.activeTexture($.TEXTURE0),Re.pixelStorei($.UNPACK_FLIP_Y_WEBGL,b.flipY),Re.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),Re.pixelStorei($.UNPACK_ALIGNMENT,b.unpackAlignment);const Ke=Re.getParameter($.UNPACK_ROW_LENGTH),be=Re.getParameter($.UNPACK_IMAGE_HEIGHT),Le=Re.getParameter($.UNPACK_SKIP_PIXELS),Ne=Re.getParameter($.UNPACK_SKIP_ROWS),ft=Re.getParameter($.UNPACK_SKIP_IMAGES);Re.pixelStorei($.UNPACK_ROW_LENGTH,ve.width),Re.pixelStorei($.UNPACK_IMAGE_HEIGHT,ve.height),Re.pixelStorei($.UNPACK_SKIP_PIXELS,Z),Re.pixelStorei($.UNPACK_SKIP_ROWS,ae),Re.pixelStorei($.UNPACK_SKIP_IMAGES,te);const nt=h.isDataArrayTexture||h.isData3DTexture,Ye=b.isDataArrayTexture||b.isData3DTexture;if(h.isDepthTexture){const Be=We.get(h),rt=We.get(b),Mt=We.get(Be.__renderTarget),Ze=We.get(rt.__renderTarget);Re.bindFramebuffer($.READ_FRAMEBUFFER,Mt.__webglFramebuffer),Re.bindFramebuffer($.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let vt=0;vt<X;vt++)nt&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,We.get(h).__webglTexture,F,te+vt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,We.get(b).__webglTexture,I,pe+vt)),$.blitFramebuffer(Z,ae,Z+q,ae+G,ne,he,ne+q,he+G,$.DEPTH_BUFFER_BIT,$.NEAREST);Re.bindFramebuffer($.READ_FRAMEBUFFER,null),Re.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(F!==0||h.isRenderTargetTexture||We.has(h)){const Be=We.get(h),rt=We.get(b);Re.bindFramebuffer($.READ_FRAMEBUFFER,L),Re.bindFramebuffer($.DRAW_FRAMEBUFFER,H);for(let Mt=0;Mt<X;Mt++)nt?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Be.__webglTexture,F,te+Mt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Be.__webglTexture,F),Ye?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,rt.__webglTexture,I,pe+Mt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,rt.__webglTexture,I),F!==0?$.blitFramebuffer(Z,ae,Z+q,ae+G,ne,he,ne+q,he+G,$.COLOR_BUFFER_BIT,$.NEAREST):Ye?$.copyTexSubImage3D(fe,I,ne,he,pe+Mt,Z,ae,q,G):$.copyTexSubImage2D(fe,I,ne,he,Z,ae,q,G);Re.bindFramebuffer($.READ_FRAMEBUFFER,null),Re.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ye?h.isDataTexture||h.isData3DTexture?$.texSubImage3D(fe,I,ne,he,pe,q,G,X,Ae,Xe,ve.data):b.isCompressedArrayTexture?$.compressedTexSubImage3D(fe,I,ne,he,pe,q,G,X,Ae,ve.data):$.texSubImage3D(fe,I,ne,he,pe,q,G,X,Ae,Xe,ve):h.isDataTexture?$.texSubImage2D($.TEXTURE_2D,I,ne,he,q,G,Ae,Xe,ve.data):h.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,I,ne,he,ve.width,ve.height,Ae,ve.data):$.texSubImage2D($.TEXTURE_2D,I,ne,he,q,G,Ae,Xe,ve);Re.pixelStorei($.UNPACK_ROW_LENGTH,Ke),Re.pixelStorei($.UNPACK_IMAGE_HEIGHT,be),Re.pixelStorei($.UNPACK_SKIP_PIXELS,Le),Re.pixelStorei($.UNPACK_SKIP_ROWS,Ne),Re.pixelStorei($.UNPACK_SKIP_IMAGES,ft),I===0&&b.generateMipmaps===!0&&b.mipmapsAutoUpdate===!0&&$.generateMipmap(fe),Re.unbindTexture()},this.initRenderTarget=function(h){We.get(h).__webglFramebuffer===void 0&&Qe.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?Qe.setTextureCube(h,0):h.isData3DTexture?Qe.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?Qe.setTexture2DArray(h,0):Qe.setTexture2D(h,0),Re.unbindTexture()},this.resetState=function(){V=0,W=0,j=null,Re.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const _d=Math.atan(1/Math.SQRT2),Ab=900,xd=45,ur={dist:[25,800],half:[12,380],pitch:[.2,1.4]},ji=Hi.clamp;function mh(n){const e=Math.PI/2;return Math.round((n-Math.PI/4)/e)*e+Math.PI/4}function Rb(n){const e=new kn(xd,1,1,6e3),t=new Qc(-1,1,1,-1,1,3e3),i=Math.tan(Hi.degToRad(xd/2)),s={x:0,z:0,yaw:Math.PI/4,pitch:.62,dist:380,half:160},r={...s};let o="free",a=1;const c=new ih,l=new Si(new Y(0,1,0),0),d=new ot,f=new Y,u=new Y;function p(){return o==="iso"?t:e}function v(){s.x=ji(s.x,-n,n),s.z=ji(s.z,-n,n),s.dist=ji(s.dist,...ur.dist),s.half=ji(s.half,...ur.half),s.pitch=o==="iso"?_d:ji(s.pitch,...ur.pitch)}function x(m){const g=p(),M=o==="iso"?Ab:m.dist,w=Math.cos(m.pitch);g.position.set(m.x+M*w*Math.sin(m.yaw),M*Math.sin(m.pitch),m.z+M*w*Math.cos(m.yaw)),u.set(m.x,0,m.z),g.lookAt(u),o==="iso"&&(t.left=-m.half*a,t.right=m.half*a,t.top=m.half,t.bottom=-m.half,t.updateProjectionMatrix()),g.updateMatrixWorld()}return{goal:s,cur:r,focus:u,get mode(){return o},camera:p,groundAt(m,g,M,w){d.set(m/M*2-1,-(g/w)*2+1),c.setFromCamera(d,p());const y=c.ray.intersectPlane(l,f);return!y||Math.abs(y.x-r.x)>4e3||Math.abs(y.z-r.z)>4e3?null:{x:y.x,z:y.z}},snapNow(){v(),Object.assign(r,s),x(r)},viewHalf(){return o==="iso"?s.half:s.dist*i},setMode(m){m!==o&&(m==="iso"?(s.half=ji(s.dist*i,...ur.half),r.half=s.half,s.yaw=mh(s.yaw),o="iso",s.pitch=_d):(s.dist=ji(s.half/i,...ur.dist),r.dist=s.dist,o="free",s.pitch=.75),x(r))},resize(m,g){a=m/g,e.aspect=a,e.updateProjectionMatrix(),x(r)},update(m){v();const g=1-Math.exp(-m*12);let M=s.yaw-r.yaw;M=Math.atan2(Math.sin(M),Math.cos(M)),r.yaw+=M*g;for(const w of["x","z","pitch","dist","half"])r[w]+=(s[w]-r[w])*g;x(r)},serialize(){return{mode:o,x:s.x,z:s.z,yaw:s.yaw,pitch:s.pitch,dist:s.dist,half:s.half}},load(m){if(m){for(const g of["x","z","yaw","pitch","dist","half"])Number.isFinite(m[g])&&(s[g]=m[g]);o=m.mode==="iso"?"iso":"free",v(),Object.assign(r,s),x(r)}}}}const Cb=10,Pb=350,Db=.12,Sd=.006;function Lb(n,e,{onTap:t,pick:i}){const s=new Map,r={x:0,z:0};let o=!1,a=0,c=!1,l=0;const d=()=>({w:n.clientWidth||window.innerWidth,h:n.clientHeight||window.innerHeight}),f=(y,C)=>{const{w:T,h:S}=d();return e.groundAt(y,C,T,S)},u=(y,C)=>{const T=i?.();if(!T)return f(y,C);const{w:S,h:E}=d();return T(y/S*2-1,-(C/E)*2+1)};function p(y,C,T,S){const E=f(y.x,y.y),N=f(C,T);if(!E||!N)return;const P=E.x-N.x,U=E.z-N.z;e.goal.x+=P,e.goal.z+=U,e.snapNow();const B=Math.max(1,S-l)/1e3;l=S,r.x=r.x*.6+P/B*.4,r.z=r.z*.6+U/B*.4}function v(y,C,T){const[S,E]=[...s.keys()],N=s.get(S),P=s.get(E),U=y===S?{x:C,y:T}:N,B=y===E?{x:C,y:T}:P,k={x:(N.x+P.x)/2,y:(N.y+P.y)/2},L={x:(U.x+B.x)/2,y:(U.y+B.y)/2},H=Math.hypot(N.x-P.x,N.y-P.y),V=Math.hypot(U.x-B.x,U.y-B.y),W=f(k.x,k.y);if(H>10&&V>10){const ue=H/V;e.mode==="iso"?e.goal.half*=ue:e.goal.dist*=ue}let j=Math.atan2(B.y-U.y,B.x-U.x)-Math.atan2(P.y-N.y,P.x-N.x);j=Math.atan2(Math.sin(j),Math.cos(j)),a+=j,!c&&Math.abs(a)>Db&&(c=!0,j=a),c&&(e.goal.yaw+=j),e.snapNow();const K=e.mode==="iso"?L:k,le=f(K.x,K.y);W&&le&&(e.goal.x+=W.x-le.x,e.goal.z+=W.z-le.z),e.mode==="free"&&(e.goal.pitch+=(L.y-k.y)*Sd),e.snapNow()}function x(y){y.pointerType==="mouse"&&y.button!==0&&y.button!==2||(n.setPointerCapture?.(y.pointerId),s.set(y.pointerId,{x:y.clientX,y:y.clientY,sx:y.clientX,sy:y.clientY,t0:performance.now(),btn:y.button}),r.x=r.z=0,l=performance.now(),s.size>=2&&(o=!0,a=0,c=!1),s.size===1&&(o=!1))}function m(y){const C=s.get(y.pointerId);if(!C)return;const T=performance.now();s.size===1&&!o?y.pointerType==="mouse"&&C.btn===2?(e.goal.yaw-=(y.clientX-C.x)*.006,e.mode==="free"&&(e.goal.pitch+=(y.clientY-C.y)*Sd),e.snapNow()):p(C,y.clientX,y.clientY,T):s.size===2&&v(y.pointerId,y.clientX,y.clientY),C.x=y.clientX,C.y=y.clientY}function g(y){const C=s.get(y.pointerId);if(!C)return;s.delete(y.pointerId);const T=performance.now();!o&&s.size===0?Math.hypot(y.clientX-C.sx,y.clientY-C.sy)<Cb&&T-C.t0<Pb&&y.type==="pointerup"?(r.x=r.z=0,t({x:y.clientX,y:y.clientY,ground:u(y.clientX,y.clientY)})):T-l>80&&(r.x=r.z=0):r.x=r.z=0,s.size<2&&e.mode==="iso"&&(e.goal.yaw=mh(e.goal.yaw)),s.size===0&&(o=!1)}function M(y){y.preventDefault();const C=f(y.clientX,y.clientY),T=Math.exp(y.deltaY*.0012);e.mode==="iso"?e.goal.half*=T:e.goal.dist*=T,e.snapNow();const S=f(y.clientX,y.clientY);C&&S&&(e.goal.x+=C.x-S.x,e.goal.z+=C.z-S.z,e.snapNow())}const w=y=>y.preventDefault();return n.addEventListener("pointerdown",x),n.addEventListener("pointermove",m),n.addEventListener("pointerup",g),n.addEventListener("pointercancel",g),n.addEventListener("wheel",M,{passive:!1}),n.addEventListener("contextmenu",w),{touching:()=>s.size>0,update(y){if(s.size||Math.abs(r.x)<.5&&Math.abs(r.z)<.5)return;e.goal.x+=r.x*y,e.goal.z+=r.z*y;const C=Math.exp(-y*4.5);r.x*=C,r.z*=C},dispose(){n.removeEventListener("pointerdown",x),n.removeEventListener("pointermove",m),n.removeEventListener("pointerup",g),n.removeEventListener("pointercancel",g),n.removeEventListener("wheel",M),n.removeEventListener("contextmenu",w)}}}const Ib=372,ll=oi.buildings.find(n=>n.id==="townhall");let Nt,Tt,Co,cl=!1;const bd=[];function Nb(n){Tt.setMode(n),Nt.view.camera=Tt.camera(),Nt.view.cameraMode=Tt.mode,Nt.bus.emit("camera:mode",{mode:Tt.mode})}function Ub(){const n=Nt.store?.get?.(),e=n?.region?.terrain?.size,t=n?.region?.terrain?.cell,i=n?.build?.buildings?.find(o=>o.type==="townhall");let s=0,r=0;i&&e&&t&&ll&&(s=(i.x+ll.size[0]/2-e/2)*t,r=(i.z+ll.size[1]/2-e/2)*t),Object.assign(Tt.goal,{x:s,z:r,yaw:Math.PI/4,dist:170,half:85,pitch:Tt.mode==="iso"?Tt.goal.pitch:.75}),Tt.snapNow()}function Po(){Tt.resize(window.innerWidth,window.innerHeight)}const Fb={name:"camera",required:!0,init(n){Nt=n,Tt=Rb(Ib),Nt.view.camera=Tt.camera(),Nt.view.cameraMode=Tt.mode,Nt.view.focus=Tt.focus,Nt.view.touching=()=>Co.touching(),Nt.view.rig=Tt,Po(),Co=Lb(Nt.view.canvas,Tt,{onTap:e=>Nt.bus.emit("input:tap",e),pick:()=>Nt.view.pickGround}),window.addEventListener("resize",Po),bd.push(Nt.bus.on("camera:set-mode",({mode:e})=>Nb(e)),Nt.bus.on("debug:bench-start",()=>{cl=!0,Object.assign(Tt.goal,{x:0,z:0,dist:290,pitch:.65})}),Nt.bus.on("debug:bench-end",()=>{cl=!1}),Nt.bus.on("game:started",({loaded:e})=>{e||Ub()})),Nt.bus.handle("camera:state",()=>Tt.serialize())},update(n){cl&&(Tt.goal.yaw+=n*.28),Co.update(n),Tt.update(n)},serialize(){return Tt.serialize()},load(n){Tt.load(n),Nt.view.camera=Tt.camera(),Nt.view.cameraMode=Tt.mode,Po(),Nt.bus.emit("camera:mode",{mode:Tt.mode})},dispose(){Co?.dispose(),window.removeEventListener("resize",Po),bd.forEach(n=>n())}};let Do,Md;function Ob(n,e){const t=n?.region?.terrain;if(!t||!e)return null;const i=t.size,s=Math.floor(e.x/t.cell+i/2),r=Math.floor(e.z/t.cell+i/2);return s<0||r<0||s>=i||r>=i?null:{x:s,z:r,id:n.region.grid?.[r*i+s]??0}}const Bb={name:"region",required:!1,init(n){Do=n,Md=Do.bus.on("input:tap",({ground:e})=>{const t=Ob(Do.store.get(),e);t&&Do.bus.emit("region:tap",t)})},update(){},serialize(){return null},load(){},dispose(){Md?.()}},gh=new Map(oi.buildings.map(n=>[n.id,n]));let fa,ul=[],li="none",Bs=null,Rn=0,eu=!0,Rt=null,Dn=null;const Ln=()=>fa.bus,vh=()=>fa.store.get();function ha(){Rt=null,Ln().emit("build:preview",null),Ln().emit("build:road-preview",null)}function kr(n){Ln().emit("region:select",n)}function dl({tool:n="none",type:e=null}){li=n,Bs=n==="build"?e:null,Rn=0,eu=!0,Dn=null,ha(),li!=="none"&&li!=="demolish"&&kr(null)}function zb(n,e,t,i){const[s,r]=i%2?[n.size[1],n.size[0]]:n.size,o=[];if(i===0)for(let a=0;a<s;a++)o.push([e+a,t+r]);else if(i===1)for(let a=0;a<r;a++)o.push([e+s,t+a]);else if(i===2)for(let a=0;a<s;a++)o.push([e+a,t-1]);else for(let a=0;a<r;a++)o.push([e-1,t+a]);return o}function kb(n,e,t){const i=n.region.terrain.size;let s=Rn,r=-1;for(let o=0;o<4;o++){const a=(Rn+o)%4,[c,l]=a%2?[e.size[1],e.size[0]]:e.size,d=t.x-Math.floor(c/2),f=t.z-Math.floor(l/2),u=zb(e,d,f,a).filter(([x,m])=>x>=0&&m>=0&&x<i&&m<i&&n.region.grid[m*i+x]===-1).length,p=Ac(n,e,d,f,a).ok,v=u*2+(p?1:0);u>0&&v>r&&(s=a,r=v)}return s}function Mc(){const n=vh(),e=gh.get(Bs);if(!n||!e||!Rt)return;eu&&e.needsRoad!==!1&&(Rn=kb(n,e,Rt));const[t,i]=Rn%2?[e.size[1],e.size[0]]:e.size,s=Rt.x-Math.floor(t/2),r=Rt.z-Math.floor(i/2),o=Ac(n,e,s,r,Rn);let a=o.ok,c=o.reason||null;a&&n.economy.money<e.cost&&(a=!1,c="money"),Ln().emit("build:preview",{type:Bs,x:s,z:r,rot:Rn,ok:a,reason:c,cost:e.cost,cells:$s(e,s,r,Rn)})}function _h(){const n=vh();if(!n||!Dn||!Rt)return;const e=Tc([Dn.x,Dn.z],[Rt.x,Rt.z]),t=n.region.terrain.size,i=e.filter(([c,l])=>n.region.grid[l*t+c]===0),s=e.some(([c,l])=>n.region.grid[l*t+c]>0||n.region.terrain.kind[l*t+c]===2),r=Math.round(i.length*oi.road.cost);let o=i.length>0&&!s,a=o?null:s?"blocked":"empty";o&&n.economy.money<r&&(o=!1,a="money"),Ln().emit("build:road-preview",{cells:e,ok:o,reason:a,cost:r})}function Hb(n){li==="build"?(Rt=n,Mc()):li==="road"?(Dn||(Dn=n),Rt=n,_h()):n.id!==0?kr(n):kr(null)}async function pa(n,e){const t=await Ln().request("sim:command",{name:n,data:e});return t.ok||Ln().emit("build:error",{reason:t.reason||"unknown"}),t}async function Gb(){if(li==="build"&&Rt){const n=gh.get(Bs),[e,t]=Rn%2?[n.size[1],n.size[0]]:n.size,i=Rt.x-Math.floor(e/2),s=Rt.z-Math.floor(t/2),r=await pa("build",{type:Bs,x:i,z:s,rot:Rn});r.ok&&(Ln().emit("build:placed",{id:r.data?.id,type:Bs,x:i,z:s,cost:n.cost}),Rt=null,Ln().emit("build:preview",null))}else if(li==="road"&&Dn&&Rt){const n=Tc([Dn.x,Dn.z],[Rt.x,Rt.z]),e=await pa("road",{cells:n});e.ok&&(Ln().emit("build:placed",{id:0,type:"road",x:Rt.x,z:Rt.z,cost:(e.data?.count||0)*oi.road.cost}),Dn=null,ha())}}async function Vb({id:n,x:e,z:t}){(await pa("demolish",n?{id:n}:{x:e,z:t})).ok&&(kr(null),Ln().emit("build:demolished",{id:n||0}))}const Wb={name:"build",required:!1,init(n){fa=n;const e=(t,i)=>ul.push(fa.bus.on(t,i));e("build:tool",dl),e("region:tap",Hb),e("build:confirm",Gb),e("build:cancel",()=>{Dn?(Dn=null,ha()):Rt?ha():dl({tool:"none"})}),e("build:rotate",()=>{eu=!1,Rn=(Rn+1)%4,li==="build"&&Mc()}),e("build:undo",async()=>{const t=await pa("undo",{});t.ok&&(kr(null),Ln().emit("build:undone",t.data))}),e("build:demolish",Vb),e("game:started",()=>dl({tool:"none"})),e("state:changed",()=>{Rt&&li==="build"?Mc():Rt&&li==="road"&&_h()})},update(){},serialize(){return null},load(){},dispose(){for(const n of ul)n();ul=[]}};function en(n){const e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstElementChild}function Ht(n,e=2400){const t=en('<div class="nb-toast" role="status"></div>');t.textContent=n,document.body.append(t),setTimeout(()=>t.remove(),e)}function Hr({title:n,text:e,buttons:t}){return new Promise(i=>{const s=en(`<div class="nb-dialog" role="dialog" aria-modal="true"><div class="nb-card">
      <h2></h2><p class="nb-text"></p><div class="nb-actions"></div></div></div>`);s.querySelector("h2").textContent=n,s.querySelector(".nb-text").textContent=e;const r=s.querySelector(".nb-actions");r.style.gridTemplateColumns=`repeat(${t.length}, 1fr)`;for(const o of t){const a=en(`<button class="nb-btn${o.primary?" primary":""}"></button>`);a.textContent=o.label,a.onclick=()=>{s.remove(),i(o.value)},r.append(a)}document.body.append(s)})}async function $b(n){try{return await navigator.clipboard.writeText(n),!0}catch{const e=en('<textarea style="position:fixed;opacity:0"></textarea>');e.value=n,document.body.append(e),e.select();let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),t}}function Xb(n,{onMenu:e,onGoals:t}){const{t:i,bus:s}=n,r=en(`<div class="nb-hud nb-hud-top">
      <div class="nb-date" data-k="date"><div class="nb-date-main">–</div>
        <div class="nb-date-sub"></div><div class="nb-progress"><i></i></div></div>
      <button class="nb-round" data-a="goals" aria-label="${i("ms.title")}">🏁</button>
      <button class="nb-round" data-a="menu" aria-label="${i("hud.menu")}">☰</button>
    </div>`),o=en(`<div class="nb-hud nb-hud-bottom">
      <div class="nb-slot-build"></div>
      <button class="nb-btn nb-tempo" data-a="play" aria-label="${i("hud.pause")}"></button>
      <button class="nb-btn nb-tempo" data-a="speed" aria-label="${i("hud.speed")}"></button>
    </div>`);document.body.append(r,o);const a=r.querySelector(".nb-date-main"),c=r.querySelector(".nb-date-sub"),l=r.querySelector(".nb-progress i"),d=o.querySelector('[data-a="play"]'),f=o.querySelector('[data-a="speed"]');let u=1;function p(){const x=n.store.get();if(!x)return;const m=ba(x.time);a.textContent=i("date.monthYear",{month:i("date.months")[m.monthOfYear],year:m.year}),c.textContent=i(n.mode().labelKey)}function v(){const x=n.store.clock();x.speed>0&&(u=x.speed),d.textContent=x.speed===0?"▶":"❚❚",d.classList.toggle("on",x.speed===0),f.textContent=`${u}×`,r.querySelector(".nb-date").classList.toggle("paused",x.paused)}return d.addEventListener("click",()=>s.emit("time:set-speed",{speed:n.store.clock().speed===0?u:0})),f.addEventListener("click",()=>{const x=n.mode().time.speeds.filter(g=>g>0),m=x[(x.indexOf(u)+1)%x.length]||1;u=m,s.emit("time:set-speed",{speed:m})}),r.querySelector('[data-a="menu"]').addEventListener("click",e),r.querySelector('[data-a="goals"]').addEventListener("click",t),s.on("state:changed",p),s.on("game:started",()=>{p(),v()}),s.on("time:speed",v),{frame(){const x=n.store.clock();l.style.transform=`scaleX(${x.progress.toFixed(3)})`},refresh:v,bottom:o,dispose(){r.remove(),o.remove()}}}const Lo=20;function qb(){return[...performance.getEntriesByType("navigation"),...performance.getEntriesByType("resource")].reduce((e,t)=>e+(t.transferSize||0),0)/1048576}function Yb(n,{getFps:e,getFrameMs:t}){const{t:i,bus:s,settings:r}=n,o=en(`<div class="nb-hud nb-debug">
      <button class="nb-chip" data-a="toggle" aria-expanded="false"><span data-k="fps">–</span> <small>fps</small> <i>▾</i></button>
      <div class="nb-panel" hidden>
        <div class="nb-row" data-k="calls"></div>
        <div class="nb-row" data-k="scene"></div>
        <div class="nb-dim" data-k="gpu"></div>
        <div class="nb-dim" data-k="build"></div>
        <div class="nb-panel-actions">
          <button class="nb-btn small primary" data-a="report">${i("debug.copy")}</button>
          <button class="nb-btn small" data-a="bench">${i("debug.bench",{s:Lo})}</button>
        </div>
      </div>
    </div>`);document.body.append(o);const a=w=>o.querySelector(`[data-k="${w}"]`),c=o.querySelector(".nb-panel"),l=o.querySelector(".nb-chip");let d=null,f=null,u=null;const p={ms:0,n:0},v=[];s.on("app:error",w=>{v.push(`${w.module}: ${w.message}`.slice(0,300)),v.length>5&&v.shift()}),s.on("save:saved",async()=>{u=await s.request("save:persisted").catch(()=>null)});function x(w){c.hidden=!w,l.setAttribute("aria-expanded",String(w)),l.querySelector("i").textContent=w?"▴":"▾",r.debugOpen=w,s.emit("settings:changed",r)}x(!!r.debugOpen);function m(){const w=n.view.renderer.info.render,y=n.view.renderer.domElement;return{fps:e(),frameMs:t(),calls:w.calls,triangles:w.triangles,width:y.width,height:y.height}}function g(){const w=m(),y=n.store.get(),C=n.store.clock(),T=n.store.pwa(),S=n.view.counts,E=y?ba(y.time):null,N=[i("debug.reportTitle"),`Build: ${n.build.id} (${n.build.time})`,`${i("debug.date")}: ${new Date().toLocaleString("de-DE")}`,`${i("debug.device")}: ${navigator.userAgent}`,`GPU: ${n.view.gpu}`,`${i("debug.screen")}: ${screen.width}×${screen.height} CSS-px, DPR ${window.devicePixelRatio} · ${w.width}×${w.height} px (${i("debug.pixelFactor")} ${n.view.dpr})`,`${i("debug.quality")}: ${i(`quality.${r.quality}`)} · ${i("debug.limit")}: ${r.fpsLimit||i("common.off")}`,`${i("debug.now")}: ${w.fps.toFixed(0)} fps · ${w.calls} ${i("debug.callsShort")} · ${w.triangles} ${i("debug.triangles")}`,`${i("debug.scene")}: ${S.buildings} / ${S.cars} / ${S.trees} · ${i("debug.camera")}: ${n.view.cameraMode}`,y?`${i("debug.game")}: ${y.meta.mode} · ${i("date.months")[E.monthOfYear]} ${E.year} (${i("debug.month")} ${y.time.month}) · ${i("debug.speed")} ${C.speed}× · ${i("debug.holds")}: ${C.holds.join(",")||"–"}`:`${i("debug.game")}: –`,y?`${i("debug.broken")}: ${gf(y).join(", ")||i("common.none")} · Seed ${y.meta.seed}`:"",`${i("debug.offline")}: ${T.controlled?i("common.yes"):i("common.no")} · ${i("debug.persist")}: ${u==null?"?":i(u?"common.yes":"common.no")}${T.error?` · SW-Fehler: ${T.error}`:""}`,`${i("debug.loaded")}: ${qb().toFixed(2)} MB`];if(f){const P=f;N.push(i("debug.benchLine1",{s:Lo,avg:P.avg.toFixed(1),low:P.low1.toFixed(1),min:P.min.toFixed(1)}),i("debug.benchLine2",{below:P.below30.toFixed(1),calls:P.maxCalls}))}else N.push(i("debug.noBench"));return N.push(p.n>60?i("debug.touchFps",{fps:(p.n*1e3/p.ms).toFixed(1),n:p.n}):i("debug.touchNone")),v.length&&N.push(`${i("debug.errors")}: ${v.join(" | ")}`),N.filter(Boolean).join(`
`)}function M(){const w=d.times.slice(10).sort((T,S)=>S-T),y=w.reduce((T,S)=>T+S,0),C=w.slice(0,Math.max(1,Math.floor(w.length/100)));f={avg:w.length*1e3/y,low1:1e3/(C.reduce((T,S)=>T+S,0)/C.length),min:1e3/w[0],below30:100*w.filter(T=>T>1e3/30).length/w.length,maxCalls:d.maxCalls},d=null,s.emit("debug:bench-end",f),Ht(i("debug.benchDone",{avg:f.avg.toFixed(0),low:f.low1.toFixed(0)}),4e3)}return o.addEventListener("click",async w=>{const y=w.target.closest("[data-a]")?.dataset.a;y==="toggle"?x(c.hidden):y==="report"?Ht(await $b(g())?i("debug.copied"):i("debug.copyFailed")):y==="bench"&&!d&&(d={start:performance.now(),times:[],maxCalls:0},s.emit("debug:bench-start"),Ht(i("debug.benchRunning",{s:Lo})))}),{report:g,frame(w,y){y&&w<100&&(p.ms+=w,p.n++),d&&(d.times.push(w),d.maxCalls=Math.max(d.maxCalls,n.view.renderer.info.render.calls),performance.now()-d.start>Lo*1e3&&M())},refresh(){const w=m(),y=r.fpsLimit||120;l.className=`nb-chip ${w.fps>=y*.9?"nb-good":w.fps>=30?"nb-ok":"nb-bad"}`,a("fps").textContent=w.fps.toFixed(0),!c.hidden&&(a("calls").textContent=i("debug.callsLine",{calls:w.calls,tri:(w.triangles/1e3).toFixed(0),ms:w.frameMs.toFixed(1)}),a("scene").textContent=`${i(`quality.${r.quality}`)} · ${w.width}×${w.height} px${d?` · ${i("debug.benchShort")}`:""}`,a("gpu").textContent=n.view.gpu,a("build").textContent=`Build ${n.build.id} · ${n.build.time}`)},dispose(){o.remove()}}}const Kb=["auto","slot1","slot2","slot3"],Zb=["slot1","slot2","slot3"];function Jb(n,{close:e}){const{t,bus:i}=n;let s=null;const r=u=>t(`saves.slot.${u}`),o=u=>{const p=u?.message||"";return p.startsWith("save.")?t(p):t("save.error.unknown")},a=(u,p,v)=>Hr({title:u,text:p,buttons:[{label:t("common.cancel"),value:!1},{label:v,value:!0,primary:!0}]});function c(u,p){const v=u!=="auto";let x=`<small>${me(t("saves.empty"))}</small>`;if(p){const g=ba({month:p.month,startYear:p.startYear,startMonth:p.startMonth}),M=new Date(p.savedAt).toLocaleString("de-DE",{dateStyle:"short",timeStyle:"short"});x=`<b>${me(t("date.monthYear",{month:t("date.months")[g.monthOfYear],year:g.year}))}</b>
        <small>${me(t(`mode.${p.mode}.name`))} · ${me(t("saves.savedAt",{when:M}))}</small>`}const m=(g,M,w="")=>`<button class="nb-btn small ${w}" data-s="${g}" data-slot="${u}">${me(M)}</button>`;return`<div class="nb-slot"><div class="nb-slot-head"><span>${me(r(u))}</span>${x}</div>
      <div class="nb-slot-actions">
        ${v?m("write",t("saves.save"),"primary"):""}
        ${p?m("read",t("saves.load")):""}
        ${p?m("export",t("saves.export")):""}
        ${p&&v?m("delete","🗑","icon"):""}
      </div></div>`}async function l(u){s=u||s;let p=[];try{p=await i.request("save:list")}catch(m){Ht(o(m))}const v=Object.fromEntries(p.map(m=>[m.id,m])),x=await i.request("save:persisted").catch(()=>null);s.innerHTML=`
      <p class="nb-hint">${me(t("saves.intro"))}</p>
      ${Kb.map(m=>c(m,v[m])).join("")}
      <button class="nb-btn wide" data-s="import">${me(t("saves.import"))}</button>
      <p class="nb-hint">${me(t(x?"saves.persistYes":x===!1?"saves.persistNo":"saves.persistUnknown"))}</p>`}async function d(u){const p=u.target.closest("[data-s]");if(!p||!s?.contains(p))return;const{s:v,slot:x}=p.dataset;try{if(v==="write"){if((await i.request("save:list")).some(g=>g.id===x)&&!await a(t("saves.overwriteTitle"),t("saves.overwrite",{slot:r(x)}),t("saves.save")))return;await i.request("save:write",{slot:x}),Ht(t("saves.saved",{slot:r(x)})),l()}else if(v==="read"){if(!await a(t("saves.loadTitle"),t("saves.loadConfirm"),t("saves.load")))return;await i.request("save:read",{slot:x}),e(),Ht(t("saves.loaded",{slot:r(x)}))}else if(v==="export")await i.request("save:export",{slot:x}),Ht(t("saves.exported"));else if(v==="delete"){if(!await a(t("saves.deleteTitle"),t("saves.deleteConfirm",{slot:r(x)}),t("saves.delete")))return;await i.request("save:delete",{slot:x}),l()}else v==="import"&&await f()}catch(m){Ht(o(m),3500)}}async function f(){const u=en('<input type="file" accept="application/json,.json" hidden>');document.body.append(u);const p=await new Promise(m=>{u.onchange=()=>m(u.files[0]||null),u.click()});if(u.remove(),!p)return;const v=await p.text(),x=await Hr({title:t("saves.importTitle"),text:t("saves.importWhere"),buttons:[...Zb.map(m=>({label:r(m),value:m})),{label:t("common.cancel"),value:null}]});x&&(await i.request("save:import",{slot:x,text:v}),Ht(t("saves.imported",{slot:r(x)})),l())}return document.addEventListener("click",d),{render:l}}const Qb=[{name:"three.js 0.187.0",useKey:"licenses.use.three",license:"MIT",url:"https://threejs.org",file:"licenses/three.txt"},{name:"HDRI „park“ (Poly Haven, über @pmndrs/assets 1.7.0)",useKey:"licenses.use.hdri",license:"CC0 1.0",url:"https://polyhaven.com"},{name:"Texturen, Gebäude, Autos, Symbole",useKey:"licenses.use.own",license:"–",url:""}],tu=n=>n.map(e=>`<p>${me(e)}</p>`).join("");function jb(n){return`<div class="nb-legal">${n("legal.privacy").map(e=>`<h3>${me(e.h)}</h3>${tu(e.p)}`).join("")}
    <p class="nb-hint">${me(n("legal.stand"))}</p></div>`}function eM(n){return`<div class="nb-legal">${tu(n("legal.imprint"))}
    <p class="nb-hint">${me(n("legal.imprintHint"))}</p></div>`}function tM(n){const e=Qb.map(t=>`<div class="nb-lic"><b>${me(t.name)}</b>
      <small>${me(n(t.useKey))} · ${me(n("licenses.license"))}: ${me(t.license)}</small>
      ${t.url?`<small>${me(t.url)}</small>`:""}
      ${t.file?`<a href="./${t.file}" target="_blank" rel="noopener">${me(n("licenses.fullText"))}</a>`:""}</div>`).join("");return`<div class="nb-legal"><p>${me(n("licenses.intro"))}</p>${e}</div>`}function nM(n,e){return`<div class="nb-legal">${tu(n("about.text"))}
    <p class="nb-hint">Build ${me(e.id)} · ${me(e.time)}</p></div>`}const iM=["maximum","hoch","mittel","niedrig"],sM=[120,60,30,0];function rM(n){const{t:e,bus:t,settings:i}=n,s=en(`<div class="nb-menu" hidden role="dialog" aria-modal="true">
      <div class="nb-sheet">
        <header><button class="nb-round" data-a="back" aria-label="${e("menu.back")}">‹</button>
          <h2></h2><button class="nb-round" data-a="close" aria-label="${e("menu.close")}">✕</button></header>
        <div class="nb-body"></div>
      </div></div>`);document.body.append(s);const r=s.querySelector(".nb-body"),o=s.querySelector("h2"),a=s.querySelector('[data-a="back"]');let c="main",l=!1;t.on("app:install-available",()=>{l=!0,!s.hidden&&c==="main"&&p("main")});const d=Jb(n,{close:x});function f(m,g,M=""){return`<button class="nb-item" data-go="${m}"><span>${me(g)}</span>${M?`<small>${me(M)}</small>`:""}<i>›</i></button>`}const u={main:()=>[f("saves",e("menu.saves"),e("menu.savesSub")),f("new",e("menu.newGame"),e("menu.newGameSub")),f("cam",e("menu.camera"),e("menu.cameraSub")),f("settings",e("menu.settings"),e("menu.settingsSub")),l?f("install",e("menu.install"),e("menu.installSub")):"",'<div class="nb-sep"></div>',f("privacy",e("menu.privacy")),f("imprint",e("menu.imprint")),f("licenses",e("menu.licenses")),f("about",e("menu.about"),`Build ${n.build.id}`)].join(""),new:()=>dp.map(m=>`<div class="nb-card-inline">
        <h3>${me(e(ko[m].labelKey))}</h3><p>${me(e(ko[m].descKey))}</p>
        <button class="nb-btn primary" data-new="${m}">${me(e("menu.start"))}</button></div>`).join("")+`<p class="nb-hint">${me(e("menu.newGameHint"))}</p>`,settings:()=>`
      <h3>${me(e("settings.quality"))}</h3>
      <div class="nb-segs">${iM.map(m=>`<button class="nb-seg${i.quality===m?" on":""}" data-quality="${m}">${me(e(`quality.${m}`))}</button>`).join("")}</div>
      <p class="nb-hint">${me(e("settings.qualityHint"))}</p>
      <h3>${me(e("settings.limit"))}</h3>
      <div class="nb-segs">${sM.map(m=>`<button class="nb-seg${i.fpsLimit===m?" on":""}" data-limit="${m}">${m?`${m}`:me(e("common.off"))}</button>`).join("")}</div>
      <p class="nb-hint">${me(e("settings.limitHint"))}</p>
      <h3>${me(e("settings.camera"))}</h3>
      <div class="nb-segs">${["iso","free"].map(m=>`<button class="nb-seg${n.view.cameraMode===m?" on":""}" data-cam="${m}">${me(e(m==="iso"?"hud.camIso":"hud.camFree"))}</button>`).join("")}</div>
      <p class="nb-hint">${me(e("settings.cameraHint"))}</p>
      <h3>${me(e("settings.debug"))}</h3>
      <div class="nb-segs"><button class="nb-seg${i.debugVisible!==!1?" on":""}" data-debug="1">${me(e("common.show"))}</button>
        <button class="nb-seg${i.debugVisible===!1?" on":""}" data-debug="0">${me(e("common.hide"))}</button></div>`,privacy:()=>jb(e),imprint:()=>eM(e),licenses:()=>tM(e),about:()=>nM(e,n.build)};async function p(m){c=m,o.textContent=e(`menu.title.${m}`),a.style.visibility=m==="main"?"hidden":"visible",m==="saves"?(r.innerHTML="",await d.render(r)):r.innerHTML=u[m](),r.scrollTop=0}function v(m="main"){s.hidden=!1,t.emit("time:hold",{reason:"menu",on:!0}),p(m)}function x(){s.hidden=!0,t.emit("time:hold",{reason:"menu",on:!1})}return s.addEventListener("click",async m=>{if(m.target===s)return x();const g=m.target.closest("button");if(!g)return;const M=g.dataset;if(M.a==="close")x();else if(M.a==="back")p("main");else if(M.go==="cam")t.emit("camera:set-mode",{mode:n.view.cameraMode==="iso"?"free":"iso"}),x();else if(M.go==="install")t.emit("app:install"),l=!1,p("main");else if(M.go)p(M.go);else if(M.new){if(!await Hr({title:e("menu.newGameConfirmTitle"),text:e("menu.newGameConfirm"),buttons:[{label:e("common.cancel"),value:!1},{label:e("menu.start"),value:!0,primary:!0}]}))return;x(),t.emit("game:new",{mode:M.new}),Ht(e("menu.newGameStarted",{mode:e(ko[M.new].labelKey)}))}else if(M.quality&&M.quality!==i.quality){if(!await Hr({title:e("settings.quality"),text:e("settings.qualityConfirm"),buttons:[{label:e("common.cancel"),value:!1},{label:e("common.ok"),value:!0,primary:!0}]}))return;i.quality=M.quality,t.emit("settings:changed",i),await t.request("save:write",{slot:"auto"}).catch(()=>{}),location.reload()}else M.limit!==void 0?(i.fpsLimit=Number(M.limit),t.emit("settings:changed",i),p("settings")):M.cam?(t.emit("camera:set-mode",{mode:M.cam}),p("settings")):M.debug!==void 0&&(i.debugVisible=M.debug==="1",t.emit("settings:changed",i),p("settings"))}),{open:v,close:x,isOpen:()=>!s.hidden,dispose(){s.remove()}}}let fl=0;function Gi(n,{title:e,content:t,onClose:i}){const s=en(`<div class="nb-menu nb-info-sheet" role="dialog" aria-modal="true">
      <div class="nb-sheet"><header><span style="width:52px"></span><h2></h2>
        <button class="nb-round" data-a="close" aria-label="${n.t("menu.close")}">✕</button></header>
        <div class="nb-body"></div></div></div>`),r=s.querySelector(".nb-body"),o=s.querySelector("h2");o.textContent=e||"",typeof t=="string"?r.innerHTML=t:t&&r.append(t),document.body.append(s),fl++,n.bus.emit("time:hold",{reason:"sheet",on:!0});let a=!1;function c(){a||(a=!0,s.remove(),--fl<=0&&(fl=0,n.bus.emit("time:hold",{reason:"sheet",on:!1})),i?.())}return s.addEventListener("click",l=>{(l.target===s||l.target.closest('[data-a="close"]'))&&c()}),{body:r,close:c,root:s,setTitle:l=>{o.textContent=l}}}const zt=(n,e=0)=>Number(n||0).toLocaleString("de-DE",{maximumFractionDigits:e,minimumFractionDigits:e}),bi=(n,e=0)=>`${n>0?"+":n<0?"−":""}${zt(Math.abs(n),e)}`,Jo=n=>n>=60?"good":n>=35?"ok":"bad";function oM(n){const{t:e,bus:t}=n,i=en('<div class="nb-hud nb-stats"></div>');document.body.append(i);const s=[{id:"money",icon:"🪙"},{id:"pop",icon:"👥"},{id:"happy",icon:"🙂"},{id:"energy",icon:"⚡"},{id:"food",icon:"🌾"}];i.innerHTML=s.map(u=>`<button class="nb-stat" data-s="${u.id}"><span>${u.icon}</span><b></b><small></small></button>`).join("");const r=u=>i.querySelector(`[data-s="${u}"]`);function o(u,p,v,x=""){const m=r(u);m.querySelector("b").textContent=p,m.querySelector("small").textContent=v||"",m.querySelector("b").className=x}function a(){const u=n.store.get();if(!u?.economy||!u.population)return;const p=u.economy,v=u.population,x=u.energy;o("money",zt(p.money),bi(p.last?.net||0),p.money<0?"nb-bad":""),o("pop",zt(v.total),`/${zt(v.housing)}`),o("happy",`${Math.round(v.happiness)}`,"%",`nb-${Jo(v.happiness)}`);const m=x?.ratio??1;o("energy",`${zt(x?.production||0,0)}/${zt(x?.demand||0,0)}`,e("stat.power"),m>=1?"nb-good":m>=.7?"nb-ok":"nb-bad");const g=p.flow?.food,M=g?g.prod-g.cons:0;o("food",bi(M,0),e("res.food"),M>=0?"nb-good":"nb-bad")}function c(){const u=n.explain("population.happiness"),v=(u?.parts||[]).slice().sort((x,m)=>Math.abs(m.effect)-Math.abs(x.effect)).map(x=>`<div class="nb-why-row"><span>${me(e(x.labelKey,x.labelArgs))}</span>
      <b class="${x.effect>=0?"nb-good":"nb-bad"}">${bi(x.effect,1)}</b></div>`).join("");Gi(n,{title:e("explain.happyTitle"),content:`<p class="nb-hint">${me(e("explain.happyIntro"))}</p>
        <div class="nb-why-row"><span>${me(e("explain.base"))}</span><b>${zt(u?.base??50,0)}</b></div>${v||`<p class="nb-hint">${me(e("explain.none"))}</p>`}
        <div class="nb-why-row total"><span>${me(e("explain.total"))}</span><b>${zt(u?.value??n.store.get().population.happiness,0)}</b></div>`})}function l(){const p=n.store.get().economy.last||{},v=(x,m,g)=>`<div class="nb-why-row"><span>${me(e(x))}</span><b class="${g}">${bi(m,1)}</b></div>`;Gi(n,{title:e("explain.moneyTitle"),content:`<p class="nb-hint">${me(e("explain.moneyIntro"))}</p>
        ${v("explain.taxes",p.taxes||0,"nb-good")}${v("explain.sales",p.sales||0,"nb-good")}
        ${v("explain.upkeep",-(p.upkeep||0),"nb-bad")}${v("explain.subsidy",-(p.subsidy||0),"nb-bad")}
        <div class="nb-why-row total"><span>${me(e("explain.net"))}</span><b>${bi(p.net||0,1)}</b></div>`})}function d(){const u=n.store.get(),p=u.economy.flow||{},v=Object.entries(u.economy.resources||{}).map(([x,m])=>{const g=p[x]||{prod:0,cons:0};return`<div class="nb-why-row"><span>${me(e(`res.${x}`))}: ${zt(m,0)}</span>
        <b class="${g.prod-g.cons>=0?"nb-good":"nb-bad"}">${bi(g.prod-g.cons,1)}</b></div>`}).join("");Gi(n,{title:e("explain.stockTitle"),content:`<p class="nb-hint">${me(e("explain.stockIntro"))}</p>${v}`})}function f(){const u=n.store.get().energy;Gi(n,{title:e("explain.energyTitle"),content:`<p class="nb-hint">${me(e("explain.energyIntro"))}</p>
        <div class="nb-why-row"><span>${me(e("explain.produced"))}</span><b>${zt(u.production,1)}</b></div>
        <div class="nb-why-row"><span>${me(e("explain.needed"))}</span><b>${zt(u.demand,1)}</b></div>
        <p class="nb-hint">${me(e(u.ratio>=1?"explain.energyOk":"explain.energyShort"))}</p>`})}return i.addEventListener("click",u=>{const p=u.target.closest("[data-s]");!p||!n.store.get()||(t.emit("ui:stat",{id:p.dataset.s}),{happy:c,money:l,food:d,energy:f,pop:d}[p.dataset.s]?.())}),t.on("state:changed",a),t.on("game:started",a),a(),{refresh:a,dispose(){i.remove()}}}const hl=["workers","business","religion"],yd=["low","normal","high"];function aM(n){const{t:e,bus:t}=n,i=en('<div class="nb-hud nb-lamps"></div>');document.body.append(i),i.innerHTML=`<button class="nb-lamp-bar" data-people="1"><b>${me(e("group.barTitle"))}</b>`+hl.map(d=>`<span class="nb-lamp" data-g="${d}"><i></i><em>${me(e(`group.${d}.name`))}</em></span>`).join("")+"<u>›</u></button>";let s=null;function r(){const d=n.store.get();if(d?.politics?.groups){for(const f of hl){const u=d.politics.groups[f],p=i.querySelector(`[data-g="${f}"]`);p.classList.remove("good","ok","bad"),u&&p.classList.add(Jo(u.satisfaction))}s&&l()}}async function o(d,f){const u=await t.request("sim:command",{name:d,data:f});u.ok||t.emit("build:error",{reason:u.reason||"unknown"})}function a(d,f){if(d==="business"){const v=yd.find(x=>Math.abs(f.economy.taxRate-n.mode().values.tax[x])<1e-6)||"normal";return`<div class="nb-segs">${yd.map(x=>`<button class="nb-seg${v===x?" on":""}" data-tax="${x}">${me(e(`group.tax.${x}`))}</button>`).join("")}</div>`}const u=d==="workers"?"foodSubsidy":"holidays",p=!!f.politics.policies?.[u];return`<div class="nb-segs"><button class="nb-seg${p?"":" on"}" data-pol="${u}" data-on="0">${me(e("common.off"))}</button>
      <button class="nb-seg${p?" on":""}" data-pol="${u}" data-on="1">${me(e("common.on"))}</button></div>`}function c(d,f){const u=f.politics.groups[d];if(!u)return"";const p=(u.why||[]).map(v=>`<li>${me(e(v))}</li>`).join("");return`<section class="nb-group"><div class="nb-group-head ${Jo(u.satisfaction)}"><i></i><b>${me(e(`group.${d}.name`))}</b>
        <span>${zt(u.satisfaction,0)} · ${me(e(`group.lamp.${Jo(u.satisfaction)}`))}</span></div>
      <p class="nb-hint">${me(e(`group.${d}.desc`))}</p>
      ${p?`<ul class="nb-list">${p}</ul>`:""}
      <p class="nb-hint"><b>${me(e("group.whatCanIDo"))}</b> ${me(e(`group.${d}.hint`))}</p>
      <h3>${me(e(`group.${d}.lever`))}</h3>${a(d,f)}
      <p class="nb-hint">${me(e(`group.${d}.leverHint`))}</p></section>`}function l(){const d=n.store.get();if(!s||!d)return;const f=s.body.scrollTop;s.body.innerHTML=hl.map(u=>c(u,d)).join(""),s.body.scrollTop=f}return i.addEventListener("click",()=>{!n.store.get()||s||(t.emit("ui:group",{id:"all"}),s=Gi(n,{title:e("group.barTitle"),content:"",onClose:()=>{s=null}}),s.body.addEventListener("click",d=>{const f=d.target.closest(".nb-seg");f&&(f.dataset.tax?o("setTax",{level:f.dataset.tax}):f.dataset.pol&&o("setPolicy",{id:f.dataset.pol,on:f.dataset.on==="1"}))}),l())}),t.on("state:changed",r),t.on("game:started",r),r(),{refresh:r,dispose(){i.remove(),s?.close()}}}const lM={housing:"🏠",food:"🌾",resources:"🪵",industry:"🔨",energy:"⚡",community:"⛪",road:"🛤️",demolish:"🧹"},pl=new Map(oi.buildings.map(n=>[n.id,n]));function cM(n,{bottom:e}){const{t,bus:i}=n,s=en('<div class="nb-buildrow"></div>'),r=en('<div class="nb-hud nb-actbar" hidden></div>'),o=en('<div class="nb-hud nb-infopanel" hidden></div>');document.body.append(r,o),s.innerHTML=`<button class="nb-btn primary nb-bigbuild" data-a="build">🔨 ${me(t("buildui.menu"))}</button>
    <button class="nb-btn nb-undobtn" data-a="undo" hidden></button>`,e.querySelector(".nb-slot-build").append(s);const a=s.querySelector('[data-a="undo"]'),c=s.querySelector('[data-a="build"]');let l="none",d=null,f=null,u=null;const p=()=>n.store.get()?.flags?.milestones||{},v=E=>E.requires&&p()[E.requires]==null,x=()=>n.store.get()?.economy?.money??0;function m(){u=Gi(n,{title:t("buildui.menu"),content:"",onClose:()=>{u=null}}),g(),u.body.addEventListener("click",E=>{const N=E.target.closest("[data-c]");if(N)return M(N.dataset.c);if(E.target.closest("[data-back]"))return g();const P=E.target.closest("[data-b]");!P||P.disabled||(u.close(),i.emit("build:tool",{tool:"build",type:P.dataset.b}))})}function g(){u.setTitle(t("buildui.menu")),u.body.innerHTML=`<div class="nb-cat-grid">${oi.categories.map(E=>`<button class="nb-cat" data-c="${E.id}"><span>${lM[E.id]||"•"}</span><em>${me(t(E.labelKey))}</em></button>`).join("")}</div>`}function M(E){i.emit("ui:category",{id:E}),E==="road"||E==="demolish"?(u.close(),i.emit("build:tool",{tool:E})):w(E)}function w(E){const N=oi.buildings.filter(P=>P.category===E&&P.buildable!==!1);u.setTitle(t(`cat.${E}`)),u.body.innerHTML=`<button class="nb-btn small nb-backbtn" data-back="1">‹ ${me(t("menu.back"))}</button>`+N.map(P=>{const U=v(P),B=!U&&x()<P.cost;return`<button class="nb-build${U?" locked":""}${B?" poor":""}" data-b="${P.id}" ${U?"disabled":""}>
        <span class="n">${me(t(P.labelKey))}</span><span class="c">${U?"🔒":`${zt(P.cost)} 🪙`}</span>
        <small>${me(U?t("buildui.locked",{goal:t(`ms.${P.requires}.name`)}):t(P.descKey))}</small>
        ${U?"":`<em>${me(y(P))}</em>`}</button>`}).join("")}function y(E){const N=[];E.housing&&N.push(t("buildui.housing",{n:E.housing})),E.jobs&&N.push(t("buildui.jobs",{n:E.jobs}));for(const[P,U]of Object.entries(E.produce||{}))N.push(`+${zt(U,1)} ${t(`res.${P}`)}`);for(const[P,U]of Object.entries(E.consume||{}))N.push(`−${zt(U,1)} ${t(`res.${P}`)}`);return E.energyProduce&&N.push(`+${E.energyProduce} ${t("stat.power")}`),E.energyDemand&&N.push(`−${E.energyDemand} ${t("stat.power")}`),N.push(t("buildui.upkeep",{n:zt(E.upkeep,1)})),N.join(" · ")}function C(){if(l==="none"){r.hidden=!0,c.hidden=!1;return}c.hidden=!0,r.hidden=!1;let E="",N="",P=!1,U=0,B=!1;if(l==="build"){const k=pl.get(d?.type||r.dataset.type);E=t(k.labelKey),B=k.size[0]!==k.size[1],d?(P=d.ok,U=d.cost,N=P?y(k):t(`cmd.reason.${d.reason}`)):N=t("buildui.tapGround")}else l==="road"?(E=t("bld.road.name"),f?(P=f.ok,U=f.cost,N=P?t("buildui.roadReady",{n:f.cells.length}):t(`cmd.reason.${f.reason}`)):N=t("buildui.roadStart")):l==="demolish"&&(E=t("cat.demolish"),N=t("buildui.demolishTap"));r.innerHTML=`<div class="nb-act-head"><b>${me(E)}</b><span class="${P||!d&&!f?"":"nb-bad"}">${me(N)}</span></div>
      <div class="nb-act-row"><button class="nb-btn" data-x="cancel" aria-label="${me(t("common.cancel"))}">✕</button>
      ${B?`<button class="nb-btn" data-x="rotate" aria-label="${me(t("buildui.rotate"))}">⟳</button>`:""}
      ${l==="demolish"?"":`<button class="nb-btn primary" data-x="ok" ${P?"":"disabled"}>✓ ${me(t("buildui.build"))}${U?` · ${zt(U)} 🪙`:""}</button>`}</div>`}r.addEventListener("click",E=>{const N=E.target.closest("[data-x]");!N||N.disabled||(N.dataset.x==="cancel"?i.emit("build:cancel"):N.dataset.x==="rotate"?i.emit("build:rotate"):N.dataset.x==="ok"&&i.emit("build:confirm"))}),s.addEventListener("click",E=>{const N=E.target.closest("[data-a]");N&&(N.dataset.a==="build"?m():N.dataset.a==="undo"&&i.emit("build:undo"))});function T(E){const N=n.store.get();if(!E||!N){o.hidden=!0;return}if(l==="build"||l==="road"){o.hidden=!0;return}let P,U="",B=0;if(E.id===-1)P=t("bld.road.name"),B=Math.round(oi.road.cost*.25);else{const L=N.build.buildings.find(W=>W.id===E.id),H=L&&pl.get(L.type);if(!H){o.hidden=!0;return}P=t(H.labelKey),B=Math.round((L.paid||0)*.25);const V=L.active>=.99?t("info.working"):L.active>0?t("info.partly",{n:Math.round(L.active*100)}):t("info.idle");U=`<div class="nb-info-line ${L.active>=.5?"nb-good":"nb-ok"}">${me(V)}${L.why&&L.active<.99?` – ${me(t(`why.${L.why}`))}`:""}</div>
        <div class="nb-info-line nb-dim">${me(y(H))}</div>`}const k=E.id>0&&pl.get(N.build.buildings.find(L=>L.id===E.id)?.type)?.unique;o.innerHTML=`<div class="nb-info-card"><div class="nb-info-title"><b>${me(P)}</b>
        <button class="nb-round small" data-i="close" aria-label="${me(t("menu.close"))}">✕</button></div>${U}
      ${k?"":`<button class="nb-btn wide" data-i="demolish">🧹 ${me(t("info.demolish",{n:B}))}</button>`}</div>`,o.dataset.x=E.x,o.dataset.z=E.z,o.dataset.id=E.id,o.hidden=!1}o.addEventListener("click",E=>{const N=E.target.closest("[data-i]");N&&(N.dataset.i==="close"?i.emit("region:select",null):i.emit("build:demolish",Number(o.dataset.id)>0?{id:Number(o.dataset.id)}:{x:Number(o.dataset.x),z:Number(o.dataset.z)}))});function S(){const E=n.store.get()?.build?.undo?.length||0;a.hidden=E===0,a.textContent=`↩ ${E}`,a.setAttribute("aria-label",t("buildui.undo",{n:E}))}return i.on("state:changed",S),i.on("build:tool",({tool:E,type:N})=>{l=E,d=null,f=null,r.dataset.type=N||"",C(),l!=="none"&&l!=="demolish"&&T(null)}),i.on("build:preview",E=>{d=E,C()}),i.on("build:road-preview",E=>{f=E,C()}),i.on("build:cancel",()=>{!d&&!f&&(l="none",C())}),i.on("build:placed",({id:E,type:N})=>{Ht(t("buildui.placed",{name:t(N==="road"?"bld.road.name":`bld.${N}.name`)}),1400)}),i.on("build:undone",()=>Ht(t("buildui.undone"),1400)),i.on("build:error",({reason:E})=>Ht(t(`cmd.reason.${E}`),2200)),i.on("region:select",T),i.on("build:demolished",()=>{o.hidden=!0}),i.on("game:started",()=>{l="none",C(),S(),o.hidden=!0}),C(),{dispose(){s.remove(),r.remove(),o.remove(),u?.close()}}}const uM=["dorf","handwerk","industrie"];function dM(n){const{t:e,bus:t}=n;function i(){const o=n.store.get(),a=o?.flags?.milestones||{},c=uM.map((d,f)=>{const u=a[d]!=null;return`<div class="nb-goal ${u?"done":""}"><i>${u?"✓":f+1}</i><div><b>${me(e(`ms.${d}.name`))}</b>
        <p>${me(e(`ms.${d}.desc`))}</p>${u?`<small class="nb-good">${me(e("ms.reached"))}</small>`:""}</div></div>`}).join(""),l=o?.flags?.industryPreview?`<div class="nb-card-inline"><h3>${me(e("ms.previewTitle"))}</h3><p>${me(e("ms.previewText"))}</p></div>`:"";Gi(n,{title:e("ms.title"),content:`<p class="nb-hint">${me(e("ms.intro"))}</p>${c}${l}`})}function s(o){const a=(l,d,f)=>`<div class="nb-why-row"><span>${me(e(l))}</span><b class="${f}">${bi(d,0)}</b></div>`;return Gi(n,{title:e("balance.title",{year:o.year}),content:`<p class="nb-hint">${me(e("balance.intro"))}</p>
      ${a("explain.taxes",o.taxes,"nb-good")}${a("explain.sales",o.sales,"nb-good")}
      ${a("explain.upkeep",-o.upkeep,"nb-bad")}${a("explain.subsidy",-o.subsidy,"nb-bad")}
      <div class="nb-why-row total"><span>${me(e("balance.net"))}</span><b class="${o.net>=0?"nb-good":"nb-bad"}">${bi(o.net,0)}</b></div>
      <div class="nb-why-row"><span>${me(e("balance.pop"))}</span><b>${zt(o.pop)} (${bi(o.popChange)})</b></div>
      <div class="nb-why-row"><span>${me(e("balance.happy"))}</span><b>${zt(o.happiness)}</b></div>
      <div class="nb-why-row"><span>${me(e("balance.money"))}</span><b>${zt(o.money)} 🪙</b></div>
      <button class="nb-btn primary wide" data-a="close">${me(e("balance.go"))}</button>`})}function r(o){const a=en(`<div class="nb-banner" role="status"><span>🏁</span><div><small>${me(e("ms.reachedTitle"))}</small><b>${me(e(`ms.${o}.name`))}</b></div></div>`);document.body.append(a),setTimeout(()=>a.classList.add("out"),4200),setTimeout(()=>a.remove(),4800)}return t.on("time:milestone",({id:o})=>r(o)),t.on("year:balance",s),{open:i,dispose(){}}}const Io=[{id:"welcome",next:"button"},{id:"category",next:"build:tool",match:n=>n.tool==="build"},{id:"place",next:"build:placed"},{id:"numbers",next:"ui:stat"},{id:"lamps",next:"ui:group"},{id:"goals",next:"button"}];function fM(n){const{t:e,bus:t,settings:i}=n,s=en('<div class="nb-hud nb-tut" hidden></div>');document.body.append(s);let r=-1,o=[];function a(){for(const d of o)d();o=[]}function c(){a(),s.hidden=!0,r=-1,i.tutorialDone=!0,t.emit("settings:changed",i)}function l(d){if(a(),r=d,d>=Io.length)return c();const f=Io[d];s.hidden=!1,s.innerHTML=`<div class="nb-tut-card"><div class="nb-tut-n">${d+1}/${Io.length}</div>
      <b>${me(e(`tut.${f.id}.title`))}</b><p>${me(e(`tut.${f.id}.text`))}</p>
      <div class="nb-tut-row"><button class="nb-btn small" data-t="skip">${me(e("tut.skip"))}</button>
      ${f.next==="button"?`<button class="nb-btn small primary" data-t="next">${me(e(d===Io.length-1?"tut.finish":"tut.next"))}</button>`:""}</div></div>`,f.next!=="button"&&o.push(t.on(f.next,u=>{(!f.match||f.match(u||{}))&&setTimeout(()=>l(d+1),400)}))}return s.addEventListener("click",d=>{const f=d.target.closest("[data-t]");f&&(f.dataset.t==="skip"?c():l(r+1))}),t.on("game:started",({loaded:d})=>{!i.tutorialDone&&!d?l(0):d&&(a(),s.hidden=!0)}),{start:()=>l(0),dispose(){a(),s.remove()}}}let rn,es,dr,fr,Ed,wd=[],Td=0,Ad=0;function Rd(){document.body.classList.toggle("nb-no-debug",rn.settings.debugVisible===!1)}async function hM(){const{t:n,bus:e}=rn;e.emit("time:hold",{reason:"dialog",on:!0});const t=await Hr({title:n("update.title"),text:n("update.text"),buttons:[{label:n("update.later"),value:!1},{label:n("update.now"),value:!0,primary:!0}]});e.emit("time:hold",{reason:"dialog",on:!1}),t?(Ht(n("update.saving")),e.emit("app:update-apply")):Ht(n("update.laterHint"),3500)}const pM={name:"ui",required:!0,init(n){rn=n;const{t:e,bus:t}=rn;fr=rM(rn);const i=dM(rn);es=Xb(rn,{onMenu:()=>fr.open(),onGoals:i.open}),dr=Yb(rn,{getFps:()=>Td,getFrameMs:()=>Ad}),Rd();const s=fM(rn);wd=[oM(rn),aM(rn),cM(rn,{bottom:es.bottom}),i,s],t.handle("ui:tutorial",()=>s.start()),t.on("settings:changed",Rd),t.on("app:update-ready",hM),t.on("app:offline-ready",()=>Ht(e("pwa.offlineReady"),3500)),t.on("save:migrated",({from:r,to:o})=>Ht(e("saves.migrated",{from:r,to:o}),3500)),t.on("save:error",({code:r})=>Ht(r?.startsWith("save.")?e(r):e("save.error.unknown"),3500)),t.on("app:error",()=>Ht(e("app.error"),3e3)),t.on("time:speed",()=>es.refresh()),t.on("time:hold",()=>es.refresh()),Ed=setInterval(()=>{Td=rn.loop.fps(),Ad=rn.loop.lastFrameMs(),dr.refresh(),es.refresh()},250),t.handle("ui:report",()=>dr.report()),t.handle("ui:menu",r=>r?fr.open(r):fr.close())},update(){es.frame(),dr.frame(rn.loop.lastFrameMs(),rn.view.touching?.())},serialize(){return null},load(){},dispose(){clearInterval(Ed),es?.dispose(),dr?.dispose(),fr?.dispose();for(const n of wd)n.dispose()}},ma={id:"none",available:()=>!1,products:async()=>[],owned:async()=>[],purchase:async()=>({ok:!1,reason:"disabled"})},mM={none:ma};let Cd=ma;const gM={name:"monetization",required:!1,init(n){Cd=mM[n.mode().monetization?.adapter]||ma,n.bus.handle("shop:adapter",()=>navigator.onLine?Cd:ma)},update(){},serialize(){return null},load(){},dispose(){}},ga={id:"none",available:()=>!1,consent:async()=>({personalized:!1}),showRewarded:async()=>({shown:!1}),showInterstitial:async()=>({shown:!1})},vM={none:ga};let Pd=ga;const _M={name:"ads",required:!1,init(n){Pd=vM[n.mode().ads?.adapter]||ga,n.bus.handle("ads:adapter",()=>navigator.onLine?Pd:ga)},update(){},serialize(){return null},load(){},dispose(){}},xM="modulepreload",SM=function(n,e){return new URL(n,e).href},Dd={},bM=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let l=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=l(t.map(d=>{if(d=SM(d,i),d in Dd)return;Dd[d]=!0;const f=d.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(i)for(let v=o.length-1;v>=0;v--){const x=o[v];if(x.href===d&&(!f||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${u}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":xM,f||(p.as="script"),p.crossOrigin="",p.href=d,c&&p.setAttribute("nonce",c),document.head.appendChild(p),f)return new Promise((v,x)=>{p.addEventListener("load",v),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};class Ea extends mn{constructor(){const e=Ea.SkyShader,t=new Xn({name:e.name,uniforms:eh.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:pn,depthWrite:!1});super(new Ks(1,1,1),t),this.isSky=!0}}Ea.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new Y},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var Cn=Uint8Array,Ds=Uint16Array,MM=Int32Array,xh=new Cn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Sh=new Cn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yM=new Cn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),bh=function(n,e){for(var t=new Ds(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new MM(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},Mh=bh(xh,2),yh=Mh.b,EM=Mh.r;yh[28]=258,EM[258]=28;var wM=bh(Sh,0),TM=wM.b,yc=new Ds(32768);for(var Et=0;Et<32768;++Et){var Ui=(Et&43690)>>1|(Et&21845)<<1;Ui=(Ui&52428)>>2|(Ui&13107)<<2,Ui=(Ui&61680)>>4|(Ui&3855)<<4,yc[Et]=((Ui&65280)>>8|(Ui&255)<<8)>>1}var Ar=(function(n,e,t){for(var i=n.length,s=0,r=new Ds(e);s<i;++s)n[s]&&++r[n[s]-1];var o=new Ds(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Ds(1<<e);var c=15-e;for(s=0;s<i;++s)if(n[s])for(var l=s<<4|n[s],d=e-n[s],f=o[n[s]-1]++<<d,u=f|(1<<d)-1;f<=u;++f)a[yc[f]>>c]=l}else for(a=new Ds(i),s=0;s<i;++s)n[s]&&(a[s]=yc[o[n[s]-1]++]>>15-n[s]);return a}),$r=new Cn(288);for(var Et=0;Et<144;++Et)$r[Et]=8;for(var Et=144;Et<256;++Et)$r[Et]=9;for(var Et=256;Et<280;++Et)$r[Et]=7;for(var Et=280;Et<288;++Et)$r[Et]=8;var Eh=new Cn(32);for(var Et=0;Et<32;++Et)Eh[Et]=5;var AM=Ar($r,9,1),RM=Ar(Eh,5,1),ml=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Fn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},gl=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},CM=function(n){return(n+7)/8|0},PM=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Cn(n.subarray(e,t))},DM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],On=function(n,e,t){var i=new Error(e||DM[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,On),!t)throw i;return i},LM=function(n,e,t,i){var s=n.length,r=0;if(!s||e.f&&!e.l)return t||new Cn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Cn(s*3));var l=function($e){var ut=t.length;if($e>ut){var dt=new Cn(Math.max(ut*2,$e));dt.set(t),t=dt}},d=e.f||0,f=e.p||0,u=e.b||0,p=e.l,v=e.d,x=e.m,m=e.n,g=s*8;do{if(!p){d=Fn(n,f,1);var M=Fn(n,f+1,3);if(f+=3,M)if(M==1)p=AM,v=RM,x=9,m=5;else if(M==2){var T=Fn(n,f,31)+257,S=Fn(n,f+10,15)+4,E=T+Fn(n,f+5,31)+1;f+=14;for(var N=new Cn(E),P=new Cn(19),U=0;U<S;++U)P[yM[U]]=Fn(n,f+U*3,7);f+=S*3;for(var B=ml(P),k=(1<<B)-1,L=Ar(P,B,1),U=0;U<E;){var H=L[Fn(n,f,k)];f+=H&15;var w=H>>4;if(w<16)N[U++]=w;else{var V=0,W=0;for(w==16?(W=3+Fn(n,f,3),f+=2,V=N[U-1]):w==17?(W=3+Fn(n,f,7),f+=3):w==18&&(W=11+Fn(n,f,127),f+=7);W--;)N[U++]=V}}var j=N.subarray(0,T),K=N.subarray(T);x=ml(j),m=ml(K),p=Ar(j,x,1),v=Ar(K,m,1)}else On(1);else{var w=CM(f)+4,y=n[w-4]|n[w-3]<<8,C=w+y;if(C>s){c&&On(0);break}a&&l(u+y),t.set(n.subarray(w,C),u),e.b=u+=y,e.p=f=C*8,e.f=d;continue}if(f>g){c&&On(0);break}}a&&l(u+131072);for(var le=(1<<x)-1,ue=(1<<m)-1,Pe=f;;Pe=f){var V=p[gl(n,f)&le],ke=V>>4;if(f+=V&15,f>g){c&&On(0);break}if(V||On(2),ke<256)t[u++]=ke;else if(ke==256){Pe=f,p=null;break}else{var re=ke-254;if(ke>264){var U=ke-257,Me=xh[U];re=Fn(n,f,(1<<Me)-1)+yh[U],f+=Me}var Ue=v[gl(n,f)&ue],ze=Ue>>4;Ue||On(3),f+=Ue&15;var K=TM[ze];if(ze>3){var Me=Sh[ze];K+=gl(n,f)&(1<<Me)-1,f+=Me}if(f>g){c&&On(0);break}a&&l(u+131072);var ge=u+re;if(u<K){var qe=r-K,gt=Math.min(K,ge);for(qe+u<0&&On(3);u<gt;++u)t[u]=i[qe+u]}for(;u<ge;++u)t[u]=t[u-K]}}e.l=p,e.p=Pe,e.b=u,e.f=d,p&&(d=1,e.m=x,e.d=v,e.n=m)}while(!d);return u!=t.length&&o?PM(t,0,u):t.subarray(0,u)},IM=new Cn(0),NM=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&On(6,"invalid zlib data"),(n[1]>>5&1)==1&&On(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function hr(n,e){return LM(n.subarray(NM(n),-4),{i:2},e,e)}var UM=typeof TextDecoder<"u"&&new TextDecoder,FM=0;try{UM.decode(IM,{stream:!0}),FM=1}catch{}class OM extends Ag{constructor(e){super(e),this.type=hn,this.outputFormat=Qt,this.part=0}parse(e){const N=Math.pow(2.7182818,2.2);let P=null,U=null;function B(_,h){let b=0;for(let D=0;D<65536;++D)(D==0||_[D>>3]&1<<(D&7))&&(h[b++]=D);const R=b-1;for(;b<65536;)h[b++]=0;return R}function k(_){for(let h=0;h<16384;h++)_[h]={},_[h].len=0,_[h].lit=0,_[h].p=null}const L={l:0,c:0,lc:0};function H(_,h,b,R,D){for(;b<_;)h=h<<8|Ee(R,D),b+=8;b-=_,L.l=h>>b&(1<<_)-1,L.c=h,L.lc=b}const V=new Array(59);function W(_){for(let b=0;b<=58;++b)V[b]=0;for(let b=0;b<65537;++b)V[_[b]]+=1;let h=0;for(let b=58;b>0;--b){const R=h+V[b]>>1;V[b]=h,h=R}for(let b=0;b<65537;++b){const R=_[b];R>0&&(_[b]=R|V[R]++<<6)}}function j(_,h,b,R,D,F){const I=h;let q=0,G=0;for(;R<=D;R++){if(I.value-h.value>b)return!1;H(6,q,G,_,I);const X=L.l;if(q=L.c,G=L.lc,F[R]=X,X==63){if(I.value-h.value>b)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");H(8,q,G,_,I);let Z=L.l+6;if(q=L.c,G=L.lc,R+Z>D+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;Z--;)F[R++]=0;R--}else if(X>=59){let Z=X-59+2;if(R+Z>D+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;Z--;)F[R++]=0;R--}}W(F)}function K(_){return _&63}function le(_){return _>>6}function ue(_,h,b,R){for(;h<=b;h++){const D=le(_[h]),F=K(_[h]);if(D>>F)throw new Error("THREE.EXRLoader: Invalid table entry");if(F>14){const I=R[D>>F-14];if(I.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(I.lit++,I.p){const q=I.p;I.p=new Array(I.lit);for(let G=0;G<I.lit-1;++G)I.p[G]=q[G]}else I.p=new Array(1);I.p[I.lit-1]=h}else if(F){let I=0;for(let q=1<<14-F;q>0;q--){const G=R[(D<<14-F)+I];if(G.len||G.p)throw new Error("THREE.EXRLoader: Invalid table entry");G.len=F,G.lit=h,I++}}}return!0}const Pe={c:0,lc:0};function ke(_,h,b,R){_=_<<8|Ee(b,R),h+=8,Pe.c=_,Pe.lc=h}const re={c:0,lc:0};function Me(_,h,b,R,D,F,I,q,G){if(_==h){R<8&&(ke(b,R,D,F),b=Pe.c,R=Pe.lc),R-=8;let X=b>>R;if(X=new Uint8Array([X])[0],q.value+X>G)return!1;const Z=I[q.value-1];for(;X-- >0;)I[q.value++]=Z}else if(q.value<G)I[q.value++]=_;else return!1;re.c=b,re.lc=R}function Ue(_){return _&65535}function ze(_){const h=Ue(_);return h>32767?h-65536:h}const ge={a:0,b:0};function qe(_,h){const b=ze(_),D=ze(h),F=b+(D&1)+(D>>1),I=F,q=F-D;ge.a=I,ge.b=q}function gt(_,h){const b=Ue(_),R=Ue(h),D=b-(R>>1)&65535,F=R+D-32768&65535;ge.a=F,ge.b=D}function $e(_,h,b,R,D,F,I){const q=I<16384,G=b>D?D:b;let X=1,Z,ae;for(;X<=G;)X<<=1;for(X>>=1,Z=X,X>>=1;X>=1;){ae=0;const te=ae+F*(D-Z),ne=F*X,he=F*Z,pe=R*X,ve=R*Z;let Ae,Xe,fe,Ke;for(;ae<=te;ae+=he){let be=ae;const Le=ae+R*(b-Z);for(;be<=Le;be+=ve){const Ne=be+pe,ft=be+ne,nt=ft+pe;q?(qe(_[be+h],_[ft+h]),Ae=ge.a,fe=ge.b,qe(_[Ne+h],_[nt+h]),Xe=ge.a,Ke=ge.b,qe(Ae,Xe),_[be+h]=ge.a,_[Ne+h]=ge.b,qe(fe,Ke),_[ft+h]=ge.a,_[nt+h]=ge.b):(gt(_[be+h],_[ft+h]),Ae=ge.a,fe=ge.b,gt(_[Ne+h],_[nt+h]),Xe=ge.a,Ke=ge.b,gt(Ae,Xe),_[be+h]=ge.a,_[Ne+h]=ge.b,gt(fe,Ke),_[ft+h]=ge.a,_[nt+h]=ge.b)}if(b&X){const Ne=be+ne;q?qe(_[be+h],_[Ne+h]):gt(_[be+h],_[Ne+h]),Ae=ge.a,_[Ne+h]=ge.b,_[be+h]=Ae}}if(D&X){let be=ae;const Le=ae+R*(b-Z);for(;be<=Le;be+=ve){const Ne=be+pe;q?qe(_[be+h],_[Ne+h]):gt(_[be+h],_[Ne+h]),Ae=ge.a,_[Ne+h]=ge.b,_[be+h]=Ae}}Z=X,X>>=1}return ae}function ut(_,h,b,R,D,F,I,q,G){let X=0,Z=0;const ae=I,te=Math.trunc(R.value+(D+7)/8);for(;R.value<te;)for(ke(X,Z,b,R),X=Pe.c,Z=Pe.lc;Z>=14;){const he=X>>Z-14&16383,pe=h[he];if(pe.len)Z-=pe.len,Me(pe.lit,F,X,Z,b,R,q,G,ae),X=re.c,Z=re.lc;else{if(!pe.p)throw new Error("THREE.EXRLoader: hufDecode issues");let ve;for(ve=0;ve<pe.lit;ve++){const Ae=K(_[pe.p[ve]]);for(;Z<Ae&&R.value<te;)ke(X,Z,b,R),X=Pe.c,Z=Pe.lc;if(Z>=Ae&&le(_[pe.p[ve]])==(X>>Z-Ae&(1<<Ae)-1)){Z-=Ae,Me(pe.p[ve],F,X,Z,b,R,q,G,ae),X=re.c,Z=re.lc;break}}if(ve==pe.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}const ne=8-D&7;for(X>>=ne,Z-=ne;Z>0;){const he=h[X<<14-Z&16383];if(he.len)Z-=he.len,Me(he.lit,F,X,Z,b,R,q,G,ae),X=re.c,Z=re.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function dt(_,h,b,R,D,F){const I={value:0},q=b.value,G=oe(h,b),X=oe(h,b);b.value+=4;const Z=oe(h,b);if(b.value+=4,G<0||G>=65537||X<0||X>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");const ae=new Array(65537),te=new Array(16384);k(te);const ne=R-(b.value-q);if(j(_,b,ne,G,X,ae),Z>8*(R-(b.value-q)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");ue(ae,G,X,te),ut(ae,te,_,b,Z,X,F,D,I)}function st(_,h,b){for(let R=0;R<b;++R)h[R]=_[h[R]]}function Ct(_){for(let h=1;h<_.length;h++){const b=_[h-1]+_[h]-128;_[h]=b}}function wt(_,h){let b=0,R=Math.floor((_.length+1)/2),D=0;const F=_.length-1;for(;!(D>F||(h[D++]=_[b++],D>F));)h[D++]=_[R++]}function Xt(_){let h=_.byteLength;const b=new Array;let R=0;const D=new DataView(_);for(;h>0;){const F=D.getInt8(R++);if(F<0){const I=-F;h-=I+1;for(let q=0;q<I;q++)b.push(D.getUint8(R++))}else{const I=F;h-=2;const q=D.getUint8(R++);for(let G=0;G<I+1;G++)b.push(q)}}return b}function bt(_,h,b,R,D,F){let I=new DataView(F.buffer);const q=b[_.idx[0]].width,G=b[_.idx[0]].height,X=3,Z=Math.floor(q/8),ae=Math.ceil(q/8),te=Math.ceil(G/8),ne=q-(ae-1)*8,he=G-(te-1)*8,pe={value:0},ve=new Array(X),Ae=new Array(X),Xe=new Array(X),fe=new Array(X),Ke=new Array(X);for(let Le=0;Le<X;++Le)Ke[Le]=h[_.idx[Le]],ve[Le]=Le<1?0:ve[Le-1]+ae*te,Ae[Le]=new Float32Array(64),Xe[Le]=new Uint16Array(64),fe[Le]=new Uint16Array(ae*64);for(let Le=0;Le<te;++Le){let Ne=8;Le==te-1&&(Ne=he);let ft=8;for(let Ye=0;Ye<ae;++Ye){Ye==ae-1&&(ft=ne);for(let Be=0;Be<X;++Be)Xe[Be].fill(0),Xe[Be][0]=D[ve[Be]++],Pt(pe,R,Xe[Be]),an(Xe[Be],Ae[Be]),ln(Ae[Be]);gn(Ae);for(let Be=0;Be<X;++Be)St(Ae[Be],fe[Be],Ye*64)}let nt=0;for(let Ye=0;Ye<X;++Ye){const Be=b[_.idx[Ye]].type;for(let rt=8*Le;rt<8*Le+Ne;++rt){nt=Ke[Ye][rt];for(let Mt=0;Mt<Z;++Mt){const Ze=Mt*64+(rt&7)*8;I.setUint16(nt+0*Be,fe[Ye][Ze+0],!0),I.setUint16(nt+2*Be,fe[Ye][Ze+1],!0),I.setUint16(nt+4*Be,fe[Ye][Ze+2],!0),I.setUint16(nt+6*Be,fe[Ye][Ze+3],!0),I.setUint16(nt+8*Be,fe[Ye][Ze+4],!0),I.setUint16(nt+10*Be,fe[Ye][Ze+5],!0),I.setUint16(nt+12*Be,fe[Ye][Ze+6],!0),I.setUint16(nt+14*Be,fe[Ye][Ze+7],!0),nt+=16*Be}}if(Z!=ae)for(let rt=8*Le;rt<8*Le+Ne;++rt){const Mt=Ke[Ye][rt]+8*Z*2*Be,Ze=Z*64+(rt&7)*8;for(let vt=0;vt<ft;++vt)I.setUint16(Mt+vt*2*Be,fe[Ye][Ze+vt],!0)}}}const be=new Uint16Array(q);I=new DataView(F.buffer);for(let Le=0;Le<X;++Le){b[_.idx[Le]].decoded=!0;const Ne=b[_.idx[Le]].type;if(b[Le].type==2)for(let ft=0;ft<G;++ft){const nt=Ke[Le][ft];for(let Ye=0;Ye<q;++Ye)be[Ye]=I.getUint16(nt+Ye*2*Ne,!0);for(let Ye=0;Ye<q;++Ye)I.setFloat32(nt+Ye*2*Ne,De.fromHalfFloat(be[Ye]),!0)}}}function yn(_,h,b,R,D,F){const I=new DataView(F.buffer),q=b[_],G=q.width,X=q.height,Z=Math.ceil(G/8),ae=Math.ceil(X/8),te=Math.floor(G/8),ne=G-(Z-1)*8,he=X-(ae-1)*8,pe={value:0};let ve=0;const Ae=new Float32Array(64),Xe=new Uint16Array(64),fe=new Uint16Array(Z*64);for(let Ke=0;Ke<ae;++Ke){let be=8;Ke==ae-1&&(be=he);for(let Le=0;Le<Z;++Le)Xe.fill(0),Xe[0]=D[ve++],Pt(pe,R,Xe),an(Xe,Ae),ln(Ae),St(Ae,fe,Le*64);for(let Le=8*Ke;Le<8*Ke+be;++Le){let Ne=h[_][Le];for(let ft=0;ft<te;++ft){const nt=ft*64+(Le&7)*8;for(let Ye=0;Ye<8;++Ye)I.setUint16(Ne+Ye*2*q.type,fe[nt+Ye],!0);Ne+=16*q.type}if(Z!=te){const ft=te*64+(Le&7)*8;for(let nt=0;nt<ne;++nt)I.setUint16(Ne+nt*2*q.type,fe[ft+nt],!0)}}}q.decoded=!0}function Pt(_,h,b){let R,D=1;for(;D<64;)R=h[_.value],R==65280?D=64:R>>8==255?D+=R&255:(b[D]=R,D++),_.value++}function an(_,h){h[0]=De.fromHalfFloat(_[0]),h[1]=De.fromHalfFloat(_[1]),h[2]=De.fromHalfFloat(_[5]),h[3]=De.fromHalfFloat(_[6]),h[4]=De.fromHalfFloat(_[14]),h[5]=De.fromHalfFloat(_[15]),h[6]=De.fromHalfFloat(_[27]),h[7]=De.fromHalfFloat(_[28]),h[8]=De.fromHalfFloat(_[2]),h[9]=De.fromHalfFloat(_[4]),h[10]=De.fromHalfFloat(_[7]),h[11]=De.fromHalfFloat(_[13]),h[12]=De.fromHalfFloat(_[16]),h[13]=De.fromHalfFloat(_[26]),h[14]=De.fromHalfFloat(_[29]),h[15]=De.fromHalfFloat(_[42]),h[16]=De.fromHalfFloat(_[3]),h[17]=De.fromHalfFloat(_[8]),h[18]=De.fromHalfFloat(_[12]),h[19]=De.fromHalfFloat(_[17]),h[20]=De.fromHalfFloat(_[25]),h[21]=De.fromHalfFloat(_[30]),h[22]=De.fromHalfFloat(_[41]),h[23]=De.fromHalfFloat(_[43]),h[24]=De.fromHalfFloat(_[9]),h[25]=De.fromHalfFloat(_[11]),h[26]=De.fromHalfFloat(_[18]),h[27]=De.fromHalfFloat(_[24]),h[28]=De.fromHalfFloat(_[31]),h[29]=De.fromHalfFloat(_[40]),h[30]=De.fromHalfFloat(_[44]),h[31]=De.fromHalfFloat(_[53]),h[32]=De.fromHalfFloat(_[10]),h[33]=De.fromHalfFloat(_[19]),h[34]=De.fromHalfFloat(_[23]),h[35]=De.fromHalfFloat(_[32]),h[36]=De.fromHalfFloat(_[39]),h[37]=De.fromHalfFloat(_[45]),h[38]=De.fromHalfFloat(_[52]),h[39]=De.fromHalfFloat(_[54]),h[40]=De.fromHalfFloat(_[20]),h[41]=De.fromHalfFloat(_[22]),h[42]=De.fromHalfFloat(_[33]),h[43]=De.fromHalfFloat(_[38]),h[44]=De.fromHalfFloat(_[46]),h[45]=De.fromHalfFloat(_[51]),h[46]=De.fromHalfFloat(_[55]),h[47]=De.fromHalfFloat(_[60]),h[48]=De.fromHalfFloat(_[21]),h[49]=De.fromHalfFloat(_[34]),h[50]=De.fromHalfFloat(_[37]),h[51]=De.fromHalfFloat(_[47]),h[52]=De.fromHalfFloat(_[50]),h[53]=De.fromHalfFloat(_[56]),h[54]=De.fromHalfFloat(_[59]),h[55]=De.fromHalfFloat(_[61]),h[56]=De.fromHalfFloat(_[35]),h[57]=De.fromHalfFloat(_[36]),h[58]=De.fromHalfFloat(_[48]),h[59]=De.fromHalfFloat(_[49]),h[60]=De.fromHalfFloat(_[57]),h[61]=De.fromHalfFloat(_[58]),h[62]=De.fromHalfFloat(_[62]),h[63]=De.fromHalfFloat(_[63])}function ln(_){const h=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),D=.5*Math.cos(3*3.14159/16),F=.5*Math.cos(5*3.14159/16),I=.5*Math.cos(3*3.14159/8),q=.5*Math.cos(7*3.14159/16),G=new Array(4),X=new Array(4),Z=new Array(4),ae=new Array(4);for(let te=0;te<8;++te){const ne=te*8;G[0]=R*_[ne+2],G[1]=I*_[ne+2],G[2]=R*_[ne+6],G[3]=I*_[ne+6],X[0]=b*_[ne+1]+D*_[ne+3]+F*_[ne+5]+q*_[ne+7],X[1]=D*_[ne+1]-q*_[ne+3]-b*_[ne+5]-F*_[ne+7],X[2]=F*_[ne+1]-b*_[ne+3]+q*_[ne+5]+D*_[ne+7],X[3]=q*_[ne+1]-F*_[ne+3]+D*_[ne+5]-b*_[ne+7],Z[0]=h*(_[ne+0]+_[ne+4]),Z[3]=h*(_[ne+0]-_[ne+4]),Z[1]=G[0]+G[3],Z[2]=G[1]-G[2],ae[0]=Z[0]+Z[1],ae[1]=Z[3]+Z[2],ae[2]=Z[3]-Z[2],ae[3]=Z[0]-Z[1],_[ne+0]=ae[0]+X[0],_[ne+1]=ae[1]+X[1],_[ne+2]=ae[2]+X[2],_[ne+3]=ae[3]+X[3],_[ne+4]=ae[3]-X[3],_[ne+5]=ae[2]-X[2],_[ne+6]=ae[1]-X[1],_[ne+7]=ae[0]-X[0]}for(let te=0;te<8;++te)G[0]=R*_[16+te],G[1]=I*_[16+te],G[2]=R*_[48+te],G[3]=I*_[48+te],X[0]=b*_[8+te]+D*_[24+te]+F*_[40+te]+q*_[56+te],X[1]=D*_[8+te]-q*_[24+te]-b*_[40+te]-F*_[56+te],X[2]=F*_[8+te]-b*_[24+te]+q*_[40+te]+D*_[56+te],X[3]=q*_[8+te]-F*_[24+te]+D*_[40+te]-b*_[56+te],Z[0]=h*(_[te]+_[32+te]),Z[3]=h*(_[te]-_[32+te]),Z[1]=G[0]+G[3],Z[2]=G[1]-G[2],ae[0]=Z[0]+Z[1],ae[1]=Z[3]+Z[2],ae[2]=Z[3]-Z[2],ae[3]=Z[0]-Z[1],_[0+te]=ae[0]+X[0],_[8+te]=ae[1]+X[1],_[16+te]=ae[2]+X[2],_[24+te]=ae[3]+X[3],_[32+te]=ae[3]-X[3],_[40+te]=ae[2]-X[2],_[48+te]=ae[1]-X[1],_[56+te]=ae[0]-X[0]}function gn(_){for(let h=0;h<64;++h){const b=_[0][h],R=_[1][h],D=_[2][h];_[0][h]=b+1.5747*D,_[1][h]=b-.1873*R-.4682*D,_[2][h]=b+1.8556*R}}const $=new Float32Array(1),cn=new Uint32Array($.buffer);function xt(_){$[0]=_;const h=cn[0],b=h>>>16&32768,R=h&2147483647;if(R>=1199570944)return b|(R>2139095040?32256:31744);if(R<947912704)return $[0]=Math.abs(_)+.5,b|cn[0]-1056964608;const D=R+4095+(R>>>13&1);return b|D-939524096>>>13}function St(_,h,b){if(U===null){U=new Uint16Array(65536);for(let R=1;R<65536;++R){if((R&31744)===31744)continue;const D=De.fromHalfFloat(R),F=Math.abs(D),I=F<=1?Math.pow(F,2.2):Math.pow(N,F-1);U[R]=xt(D<0?-I:I)}}for(let R=0;R<64;++R)h[b+R]=U[xt(_[R])]}function Re(_){return new DataView(_.array.buffer,_.offset.value,_.size)}function Dt(_){const h=_.viewer.buffer.slice(_.offset.value,_.offset.value+_.size),b=new Uint8Array(Xt(h)),R=new Uint8Array(b.length);return Ct(b),wt(b,R),new DataView(R.buffer)}function We(_){const h=_.array.slice(_.offset.value,_.offset.value+_.size),b=hr(h),R=new Uint8Array(b.length);return Ct(b),wt(b,R),new DataView(R.buffer)}function Qe(_){const h=_.viewer,b={value:_.offset.value},R=new Uint16Array(_.columns*_.lines*(_.inputChannels.length*_.type)),D=new Uint8Array(8192);let F=0;const I=new Array(_.inputChannels.length);for(let he=0,pe=_.inputChannels.length;he<pe;he++)I[he]={},I[he].start=F,I[he].end=I[he].start,I[he].nx=_.columns,I[he].ny=_.lines,I[he].size=_.type,F+=I[he].nx*I[he].ny*I[he].size;const q=xe(h,b),G=xe(h,b);if(G>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(q<=G)for(let he=0;he<G-q+1;he++)D[he+q]=z(h,b);const X=new Uint16Array(65536),Z=B(D,X),ae=oe(h,b);dt(_.array,h,b,ae,R,F);for(let he=0;he<_.inputChannels.length;++he){const pe=I[he];for(let ve=0;ve<I[he].size;++ve)$e(R,pe.start+ve,pe.nx,pe.size,pe.ny,pe.nx*pe.size,Z)}st(X,R,F);let te=0;const ne=new Uint8Array(R.buffer.byteLength);for(let he=0;he<_.lines;he++)for(let pe=0;pe<_.inputChannels.length;pe++){const ve=I[pe],Ae=ve.nx*ve.size,Xe=new Uint8Array(R.buffer,ve.end*2,Ae*2);ne.set(Xe,te),te+=Ae*2,ve.end+=Ae}return new DataView(ne.buffer)}function O(_){const h=_.array.slice(_.offset.value,_.offset.value+_.size),b=hr(h),R=_.inputChannels.length*_.lines*_.columns*_.totalBytes,D=new ArrayBuffer(R),F=new DataView(D);let I=0,q=0;const G=new Array(4);for(let X=0;X<_.lines;X++)for(let Z=0;Z<_.inputChannels.length;Z++){let ae=0;switch(_.inputChannels[Z].pixelType){case 1:G[0]=I,G[1]=G[0]+_.columns,I=G[1]+_.columns;for(let ne=0;ne<_.columns;++ne){const he=b[G[0]++]<<8|b[G[1]++];ae+=he,F.setUint16(q,ae,!0),q+=2}break;case 2:G[0]=I,G[1]=G[0]+_.columns,G[2]=G[1]+_.columns,I=G[2]+_.columns;for(let ne=0;ne<_.columns;++ne){const he=b[G[0]++]<<24|b[G[1]++]<<16|b[G[2]++]<<8;ae+=he,F.setUint32(q,ae,!0),q+=4}break}}return F}function A(_){const h=_.array;let b=_.offset.value;const R=_.columns,D=_.lines,F=_.inputChannels,I=_.totalBytes,q=qt.compression==="B44A_COMPRESSION",G=new Uint8Array(D*R*I),X=new Uint16Array(16);let Z=0;for(let ae=0;ae<F.length;ae++){const te=F[ae],ne=te.pixelType*2,he=Math.ceil(R/te.xSampling),pe=Math.ceil(D/te.ySampling),ve=te.xSampling===1&&te.ySampling===1;if(te.pixelType!==1){for(let fe=0;fe<pe;fe++)if(ve){const Ke=fe*R*I+Z*R;for(let be=0;be<he*ne;be++)G[Ke+be]=h[b++]}else b+=he*ne;Z+=ne;continue}const Ae=Math.ceil(he/4),Xe=Math.ceil(pe/4);for(let fe=0;fe<Xe;fe++)for(let Ke=0;Ke<Ae;Ke++){if(q&&h[b+2]>=52){const be=h[b]<<8|h[b+1],Le=be&32768?be&32767:~be&65535;X.fill(Le),b+=3}else{const be=h[b]<<8|h[b+1],Le=h[b+2]>>2,Ne=32<<Le,ft=be+((h[b+2]<<4|h[b+3]>>4)&63)*(1<<Le)-Ne&65535,nt=ft+((h[b+3]<<2|h[b+4]>>6)&63)*(1<<Le)-Ne&65535,Ye=nt+(h[b+4]&63)*(1<<Le)-Ne&65535,Be=be+(h[b+5]>>2&63)*(1<<Le)-Ne&65535,rt=ft+((h[b+5]<<4|h[b+6]>>4)&63)*(1<<Le)-Ne&65535,Mt=nt+((h[b+6]<<2|h[b+7]>>6)&63)*(1<<Le)-Ne&65535,Ze=Ye+(h[b+7]&63)*(1<<Le)-Ne&65535,vt=Be+(h[b+8]>>2&63)*(1<<Le)-Ne&65535,tn=rt+((h[b+8]<<4|h[b+9]>>4)&63)*(1<<Le)-Ne&65535,Ri=Mt+((h[b+9]<<2|h[b+10]>>6)&63)*(1<<Le)-Ne&65535,Jn=Ze+(h[b+10]&63)*(1<<Le)-Ne&65535,Yi=vt+(h[b+11]>>2&63)*(1<<Le)-Ne&65535,jr=tn+((h[b+11]<<4|h[b+12]>>4)&63)*(1<<Le)-Ne&65535,eo=Ri+((h[b+12]<<2|h[b+13]>>6)&63)*(1<<Le)-Ne&65535,to=Jn+(h[b+13]&63)*(1<<Le)-Ne&65535,nr=[be,Be,vt,Yi,ft,rt,tn,jr,nt,Mt,Ri,eo,Ye,Ze,Jn,to];for(let fs=0;fs<16;fs++)X[fs]=nr[fs]&32768?nr[fs]&32767:~nr[fs]&65535;b+=14}if(te.pLinear){if(P===null){P=new Uint16Array(65536);for(let be=0;be<65536;be++)if((be&31744)===31744||be>32768)P[be]=0;else{const Le=De.fromHalfFloat(be);P[be]=Le<=0?0:De.toHalfFloat(8*Math.log(Le))}}for(let be=0;be<16;be++)X[be]=P[X[be]]}for(let be=0;be<4;be++){const Le=fe*4+be;if(!(Le>=pe))for(let Ne=0;Ne<4;Ne++){const ft=Ke*4+Ne;if(ft>=he)continue;const nt=X[be*4+Ne];for(let Ye=0;Ye<te.ySampling;Ye++){const Be=Le*te.ySampling+Ye;if(!(Be>=D))for(let rt=0;rt<te.xSampling;rt++){const Mt=ft*te.xSampling+rt;if(Mt>=R)continue;const Ze=Be*R*I+Z*R+Mt*2;G[Ze]=nt&255,G[Ze+1]=nt>>8&255}}}}}Z+=2}return new DataView(G.buffer)}function J(_){const h=_.viewer,b={value:_.offset.value},R=new Uint8Array(_.columns*_.lines*(_.inputChannels.length*_.type*2)),D={version:se(h,b),unknownUncompressedSize:se(h,b),unknownCompressedSize:se(h,b),acCompressedSize:se(h,b),dcCompressedSize:se(h,b),rleCompressedSize:se(h,b),rleUncompressedSize:se(h,b),rleRawSize:se(h,b),totalAcUncompressedCount:se(h,b),totalDcUncompressedCount:se(h,b),acCompression:se(h,b)};if(D.version<2)throw new Error("THREE.EXRLoader: "+qt.compression+" version "+D.version+" is unsupported");const F=new Array;let I=xe(h,b)-2;for(;I>0;){const pe=_e(h.buffer,b),ve=z(h,b),Ae=ve>>2&3,Xe=(ve>>4)-1,fe=new Int8Array([Xe])[0],Ke=z(h,b);F.push({name:pe,index:fe,type:Ke,compression:Ae}),I-=pe.length+3}const q=qt.channels,G=new Array(_.inputChannels.length);for(let pe=0;pe<_.inputChannels.length;++pe){const ve=G[pe]={},Ae=q[pe];ve.name=Ae.name,ve.compression=0,ve.decoded=!1,ve.type=Ae.pixelType,ve.pLinear=Ae.pLinear,ve.width=_.columns,ve.height=_.lines}const X={idx:new Array(3)};for(let pe=0;pe<_.inputChannels.length;++pe){const ve=G[pe],Ae=ve.name.lastIndexOf("."),Xe=Ae>=0?ve.name.substring(Ae+1):ve.name;for(let fe=0;fe<F.length;++fe){const Ke=F[fe];Xe===Ke.name&&ve.type===Ke.type&&(ve.compression=Ke.compression,Ke.index>=0&&(X.idx[Ke.index]=pe),ve.offset=pe)}}let Z,ae,te;if(D.acCompressedSize>0)switch(D.acCompression){case 0:Z=new Uint16Array(D.totalAcUncompressedCount),dt(_.array,h,b,D.acCompressedSize,Z,D.totalAcUncompressedCount);break;case 1:const pe=_.array.slice(b.value,b.value+D.totalAcUncompressedCount),ve=hr(pe);Z=new Uint16Array(ve.buffer),b.value+=D.totalAcUncompressedCount;break}if(D.dcCompressedSize>0){const pe={array:_.array,offset:b,size:D.dcCompressedSize};ae=new Uint16Array(We(pe).buffer),b.value+=D.dcCompressedSize}if(D.rleRawSize>0){const pe=_.array.slice(b.value,b.value+D.rleCompressedSize),ve=hr(pe);te=Xt(ve.buffer),b.value+=D.rleCompressedSize}let ne=0;const he=new Array(G.length);for(let pe=0;pe<he.length;++pe)he[pe]=new Array;for(let pe=0;pe<_.lines;++pe)for(let ve=0;ve<G.length;++ve)he[ve].push(ne),ne+=G[ve].width*_.type*2;X.idx[0]!==void 0&&G[X.idx[0]]&&bt(X,he,G,Z,ae,R);for(let pe=0;pe<G.length;++pe){const ve=G[pe];if(!ve.decoded)switch(ve.compression){case 2:let Ae=0,Xe=0;for(let fe=0;fe<_.lines;++fe){let Ke=he[pe][Ae];for(let be=0;be<ve.width;++be){for(let Le=0;Le<2*ve.type;++Le)R[Ke++]=te[Xe+Le*ve.width*ve.height];Xe++}Ae++}break;case 1:yn(pe,he,G,Z,ae,R);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(R.buffer)}function _e(_,h){const b=new Uint8Array(_);let R=0;for(;b[h.value+R]!=0;)R+=1;const D=new TextDecoder().decode(b.slice(h.value,h.value+R));return h.value=h.value+R+1,D}function ce(_,h,b){const R=new TextDecoder().decode(new Uint8Array(_).slice(h.value,h.value+b));return h.value=h.value+b,R}function ye(_,h){const b=ie(_,h),R=oe(_,h);return[b,R]}function Ce(_,h){const b=oe(_,h),R=oe(_,h);return[b,R]}function ie(_,h){const b=_.getInt32(h.value,!0);return h.value=h.value+4,b}function oe(_,h){const b=_.getUint32(h.value,!0);return h.value=h.value+4,b}function Ee(_,h){const b=_[h.value];return h.value=h.value+1,b}function z(_,h){const b=_.getUint8(h.value);return h.value=h.value+1,b}const se=function(_,h){const b=Number(_.getBigInt64(h.value,!0));return h.value+=8,b};function ee(_,h){const b=_.getFloat32(h.value,!0);return h.value+=4,b}function Te(_,h){return De.toHalfFloat(ee(_,h))}function xe(_,h){const b=_.getUint16(h.value,!0);return h.value+=2,b}function we(_,h){return De.fromHalfFloat(xe(_,h))}function He(_,h,b,R){const D=b.value,F=[];for(;b.value<D+R-1;){const I=_e(h,b),q=ie(_,b),G=z(_,b);b.value+=3;const X=ie(_,b),Z=ie(_,b);F.push({name:I,pixelType:q,pLinear:G,xSampling:X,ySampling:Z})}return b.value+=1,F}function tt(_,h){const b=ee(_,h),R=ee(_,h),D=ee(_,h),F=ee(_,h),I=ee(_,h),q=ee(_,h),G=ee(_,h),X=ee(_,h);return{redX:b,redY:R,greenX:D,greenY:F,blueX:I,blueY:q,whiteX:G,whiteY:X}}function Se(_,h){const b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=z(_,h);return b[R]}function Ve(_,h){const b=ie(_,h),R=ie(_,h),D=ie(_,h),F=ie(_,h);return{xMin:b,yMin:R,xMax:D,yMax:F}}function je(_,h){const b=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=z(_,h);return b[R]}function Ie(_,h){const b=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=z(_,h);return b[R]}function pt(_,h){const b=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],D=oe(_,h),F=oe(_,h),I=z(_,h);return{xSize:D,ySize:F,levelMode:b[I&15],roundingMode:R[I>>4]}}function Ot(_,h){const b=ee(_,h),R=ee(_,h);return[b,R]}function Kn(_,h){const b=ee(_,h),R=ee(_,h),D=ee(_,h);return[b,R,D]}function Xr(_,h,b,R,D){if(R==="string"||R==="stringvector"||R==="iccProfile")return ce(h,b,D);if(R==="chlist")return He(_,h,b,D);if(R==="chromaticities")return tt(_,b);if(R==="compression")return Se(_,b);if(R==="box2i")return Ve(_,b);if(R==="envmap")return Ie(_,b);if(R==="tiledesc")return pt(_,b);if(R==="lineOrder")return je(_,b);if(R==="float")return ee(_,b);if(R==="v2f")return Ot(_,b);if(R==="v3f")return Kn(_,b);if(R==="int")return ie(_,b);if(R==="rational")return ye(_,b);if(R==="timecode")return Ce(_,b);if(R==="preview"||R==="deepImageState"||R==="idmanifest")return b.value+=D,"skipped";b.value+=D}function Qs(_,h){const b=Math.log2(_);return h=="ROUND_DOWN"?Math.floor(b):Math.ceil(b)}function Ta(_,h,b){let R=0;switch(_.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=Qs(Math.max(h,b),_.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function js(_,h,b,R){const D=new Array(_);for(let F=0;F<_;F++){const I=1<<F;let q=h/I|0;R=="ROUND_UP"&&q*I<h&&(q+=1);const G=Math.max(q,1);D[F]=(G+b-1)/b|0}return D}function qr(){const _=this,h=_.offset,b={value:0};for(let R=0;R<_.tileCount;R++){const D=ie(_.viewer,h),F=ie(_.viewer,h);h.value+=8,_.size=oe(_.viewer,h);const I=D*_.blockWidth,q=F*_.blockHeight;_.columns=I+_.blockWidth>_.width?_.width-I:_.blockWidth,_.lines=q+_.blockHeight>_.height?_.height-q:_.blockHeight;const G=_.columns*_.totalBytes,Z=_.size<_.lines*G?_.uncompress(_):Re(_);h.value+=_.size;for(let ae=0;ae<_.lines;ae++){const te=ae*_.columns*_.totalBytes;for(let ne=0;ne<_.inputChannels.length;ne++){const he=qt.channels[ne].name,pe=_.channelByteOffsets[he]*_.columns,ve=_.decodeChannels[he];if(ve===void 0)continue;b.value=te+pe;const Ae=(_.height-(1+q+ae))*_.outLineWidth;for(let Xe=0;Xe<_.columns;Xe++){const fe=Ae+(Xe+I)*_.outputChannels+ve;_.byteArray[fe]=_.getter(Z,b)}}}}}function di(){const _=this,h=_.offset,b={value:0};for(let R=0;R<_.height/_.blockHeight;R++){const D=ie(_.viewer,h)-qt.dataWindow.yMin;_.size=oe(_.viewer,h),_.lines=D+_.blockHeight>_.height?_.height-D:_.blockHeight;const F=_.columns*_.totalBytes,q=_.size<_.lines*F?_.uncompress(_):Re(_);h.value+=_.size;for(let G=0;G<_.lines;G++){const X=D+G,Z=G*F,ae=(_.height-1-X)*_.outLineWidth;for(let te=0;te<_.inputChannels.length;te++){const ne=qt.channels[te].name,he=_.channelByteOffsets[ne]*_.columns,pe=_.decodeChannels[ne];if(pe!==void 0){b.value=Z+he;for(let ve=0;ve<_.columns;ve++){const Ae=ae+ve*_.outputChannels+pe;_.byteArray[Ae]=_.getter(q,b)}}}}}}function er(){const _=this,h=_.chunkOffsets,b={value:0};for(let R=0;R<h.length;R++){const D={value:h[R]};D.value+=4;const F=ie(_.viewer,D)-qt.dataWindow.yMin;_.size=oe(_.viewer,D),_.lines=F+_.blockHeight>_.height?_.height-F:_.blockHeight;const I=_.columns*_.totalBytes,q=_.size<_.lines*I,G=_.offset;_.offset=D;const X=q?_.uncompress(_):Re(_);_.offset=G;for(let Z=0;Z<_.lines;Z++){const ae=F+Z,te=Z*I,ne=(_.height-1-ae)*_.outLineWidth;for(let he=0;he<_.inputChannels.length;he++){const pe=qt.channels[he].name,ve=_.channelByteOffsets[pe]*_.columns,Ae=_.decodeChannels[pe];if(Ae!==void 0){b.value=te+ve;for(let Xe=0;Xe<_.columns;Xe++){const fe=ne+Xe*_.outputChannels+Ae;_.byteArray[fe]=_.getter(X,b)}}}}}}function tr(_,h,b,R){if(b===0)return null;const D=_.slice(h,h+b);switch(R){case"NO_COMPRESSION":return new DataView(D.buffer,D.byteOffset,D.byteLength);case"RLE_COMPRESSION":{const F=new Uint8Array(Xt(D.buffer.slice(D.byteOffset,D.byteOffset+D.byteLength))),I=new Uint8Array(F.length);return Ct(F),wt(F,I),new DataView(I.buffer)}case"ZIPS_COMPRESSION":{const F=hr(D),I=new Uint8Array(F.length);return Ct(F),wt(F,I),new DataView(I.buffer)}default:throw new Error("THREE.EXRLoader: "+R+" is unsupported for deep data")}}function Yr(){const _=this,h=_.chunkOffsets,b=_.width,R=_.height,D=_.deepChannels,F=qt.compression,I=_.multiPart,q=_.decodeChannels,G=_.outputChannels,X=_.byteArray instanceof Uint16Array;let Z=-1;for(let ae=0;ae<D.length;ae++)if(D[ae].name==="A"){Z=ae;break}for(let ae=0;ae<h.length;ae++){const te={value:h[ae]};I&&(te.value+=4);const ne=ie(_.viewer,te)-qt.dataWindow.yMin,he=se(_.viewer,te),pe=se(_.viewer,te);se(_.viewer,te);const ve=tr(_.array,te.value,he,F);if(te.value+=he,ve===null)continue;const Ae=new Uint32Array(b);for(let Ne=0;Ne<b;Ne++)Ae[Ne]=ve.getUint32(Ne*4,!0);const Xe=Ae[b-1];if(Xe===0){te.value+=pe;continue}const fe=tr(_.array,te.value,pe,F),Ke=[];let be=0;for(let Ne=0;Ne<D.length;Ne++)Ke.push(be),be+=Xe*D[Ne].bytesPerSample;const Le=(R-1-ne)*_.outLineWidth;for(let Ne=0;Ne<b;Ne++){const ft=Ne===0?0:Ae[Ne-1],Ye=Ae[Ne]-ft;if(Ye===0)continue;const Be=new Float32Array(G);let rt=0;for(let Ze=0;Ze<Ye;Ze++){const vt=ft+Ze,tn=1-rt;if(tn<=0)break;let Ri=1;if(Z>=0){const Jn=D[Z].bytesPerSample,Yi=Ke[Z]+vt*Jn;Ri=Jn===2?De.fromHalfFloat(fe.getUint16(Yi,!0)):fe.getFloat32(Yi,!0)}for(let Jn=0;Jn<D.length;Jn++){const Yi=D[Jn],jr=q[Yi.name];if(jr===void 0)continue;const eo=Yi.bytesPerSample,to=Ke[Jn]+vt*eo,nr=eo===2?De.fromHalfFloat(fe.getUint16(to,!0)):fe.getFloat32(to,!0);Be[jr]+=nr*tn}rt+=Ri*tn}q.A!==void 0&&(Be[q.A]=rt);const Mt=Le+Ne*G;for(let Ze=0;Ze<G;Ze++)_.byteArray[Mt+Ze]=X?De.toHalfFloat(Be[Ze]):Be[Ze]}}}function Xi(_,h,b){const R={};let D=!1;for(;;){const F=_e(h,b);if(F==="")break;D=!0;const I=_e(h,b),q=oe(_,b),G=Xr(_,h,b,I,q);G===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${I}'.`):R[F]=G}return D?R:null}function Kr(_,h,b){if(_.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const R=_.getUint8(4),D=_.getUint8(5),F={singleTile:!!(D&2),longName:!!(D&4),deepFormat:!!(D&8),multiPart:!!(D&16)};b.value=8;const I=[];if(F.multiPart){for(;;){const q=Xi(_,h,b);if(q===null)break;q.version=R,q.spec=F,I.push(q)}if(I.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const q=Xi(_,h,b);q.version=R,q.spec=F,I.push(q)}return I}function Zr(_,h,b,R,D,F){const I={size:0,viewer:h,array:b,offset:R,width:_.dataWindow.xMax-_.dataWindow.xMin+1,height:_.dataWindow.yMax-_.dataWindow.yMin+1,inputChannels:_.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:zn};switch(_.compression){case"NO_COMPRESSION":I.blockHeight=1,I.uncompress=Re;break;case"RLE_COMPRESSION":I.blockHeight=1,I.uncompress=Dt;break;case"ZIPS_COMPRESSION":I.blockHeight=1,I.uncompress=We;break;case"ZIP_COMPRESSION":I.blockHeight=16,I.uncompress=We;break;case"PIZ_COMPRESSION":I.blockHeight=32,I.uncompress=Qe;break;case"PXR24_COMPRESSION":I.blockHeight=16,I.uncompress=O;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":I.blockHeight=32,I.uncompress=A;break;case"DWAA_COMPRESSION":I.blockHeight=32,I.uncompress=J;break;case"DWAB_COMPRESSION":I.blockHeight=256,I.uncompress=J;break;default:throw new Error("THREE.EXRLoader: "+_.compression+" is unsupported")}const q={};for(const te of _.channels)switch(te.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":q[te.name]=!0,I.type=te.pixelType}let G=!1,X=!1;if(q.Y&&q.RY&&q.BY)I.outputChannels=4,I.yCbCr=!0;else if(q.R&&q.G&&q.B)I.outputChannels=4;else if(q.Y)I.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(I.outputChannels){case 4:F==Qt?(G=!q.A,I.format=Qt,I.colorSpace=zn,I.outputChannels=4,I.decodeChannels={R:0,G:1,B:2,A:3}):F==An?(I.format=An,I.colorSpace=zn,I.outputChannels=2,I.decodeChannels={R:0,G:1}):F==ss?(I.format=ss,I.colorSpace=zn,I.outputChannels=1,I.decodeChannels={R:0}):X=!0;break;case 1:F==Qt?(G=!0,I.format=Qt,I.colorSpace=zn,I.outputChannels=4,I.shouldExpand=!0,I.decodeChannels={Y:0}):F==An?(I.format=An,I.colorSpace=zn,I.outputChannels=2,I.shouldExpand=!0,I.decodeChannels={Y:0}):F==ss?(I.format=ss,I.colorSpace=zn,I.outputChannels=1,I.decodeChannels={Y:0}):X=!0;break;default:X=!0}if(X)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(I.yCbCr&&(I.format=Qt,I.outputChannels=4,I.decodeChannels={Y:0,RY:1,BY:2},G=!0),I.type==1)switch(D){case _n:I.getter=we;break;case hn:I.getter=xe;break}else if(I.type==2)switch(D){case _n:I.getter=ee;break;case hn:I.getter=Te}else throw new Error("THREE.EXRLoader: unsupported pixelType "+I.type+" for "+_.compression+".");I.columns=I.width;const Z=I.width*I.height*I.outputChannels;switch(D){case _n:I.byteArray=new Float32Array(Z),G&&I.byteArray.fill(1,0,Z);break;case hn:I.byteArray=new Uint16Array(Z),G&&I.byteArray.fill(15360,0,Z);break;default:console.error("THREE.EXRLoader: unsupported type: ",D);break}let ae=0;for(const te of _.channels)I.decodeChannels[te.name]!==void 0&&(I.channelByteOffsets[te.name]=ae),ae+=te.pixelType*2;if(I.totalBytes=ae,I.outLineWidth=I.width*I.outputChannels,_.spec.deepFormat){I.deepChannels=[];let te=0;for(const ne of _.channels){const he=ne.pixelType===0?4:ne.pixelType*2;I.deepChannels.push({name:ne.name,pixelType:ne.pixelType,bytesPerSample:he}),te+=he}I.deepBytesPerSample=te,I.chunkOffsets=_._chunkOffsets,I.multiPart=_.spec.multiPart,I.decode=Yr.bind(I)}else if(_.spec.singleTile){I.blockHeight=_.tiles.ySize,I.blockWidth=_.tiles.xSize;const te=Ta(_.tiles,I.width,I.height),ne=js(te,I.width,_.tiles.xSize,_.tiles.roundingMode),he=js(te,I.height,_.tiles.ySize,_.tiles.roundingMode);I.tileCount=ne[0]*he[0];for(let pe=0;pe<te;pe++)for(let ve=0;ve<he[pe];ve++)for(let Ae=0;Ae<ne[pe];Ae++)se(h,R);I.decode=qr.bind(I)}else if(_.spec.multiPart)I.blockWidth=I.width,I.chunkOffsets=_._chunkOffsets,I.decode=er.bind(I);else{I.blockWidth=I.width;const te=Math.ceil(I.height/I.blockHeight);for(let ne=0;ne<te;ne++)se(h,R);I.decode=di.bind(I)}return I}const Zn={value:0},ds=new DataView(e),Jr=new Uint8Array(e),qi=Kr(ds,e,Zn),Qr=Math.max(0,Math.min(this.part,qi.length-1)),qt=qi[Qr];if(qt.spec.multiPart||qt.spec.deepFormat)for(let _=0;_<qi.length;_++){const h=qi[_].chunkCount;if(_===Qr){qt._chunkOffsets=[];for(let b=0;b<h;b++)qt._chunkOffsets.push(se(ds,Zn))}else for(let b=0;b<h;b++)se(ds,Zn)}const vn=Zr(qt,ds,Jr,Zn,this.type,this.outputFormat);if(vn.decode(),vn.shouldExpand){const _=vn.byteArray;if(this.outputFormat==Qt)for(let h=0;h<_.length;h+=4)_[h+2]=_[h+1]=_[h];else if(this.outputFormat==An)for(let h=0;h<_.length;h+=2)_[h+1]=_[h]}if(vn.yCbCr){const _=vn.byteArray,h=vn.width*vn.height;if(this.type===hn)for(let b=0;b<h;b++){const R=b*4,D=De.fromHalfFloat(_[R]),F=De.fromHalfFloat(_[R+1]),I=De.fromHalfFloat(_[R+2]),q=(1+F)*D,G=(1+I)*D,X=(D-q*.2126-G*.0722)/.7152;_[R]=De.toHalfFloat(Math.max(0,q)),_[R+1]=De.toHalfFloat(Math.max(0,X)),_[R+2]=De.toHalfFloat(Math.max(0,G))}else for(let b=0;b<h;b++){const R=b*4,D=_[R],F=_[R+1],I=_[R+2],q=(1+F)*D,G=(1+I)*D;_[R]=Math.max(0,q),_[R+1]=Math.max(0,(D-q*.2126-G*.0722)/.7152),_[R+2]=Math.max(0,G)}}return{header:qt,width:vn.width,height:vn.height,data:vn.byteArray,format:vn.format,colorSpace:vn.colorSpace,type:this.type,minFilter:Gt,magFilter:Gt,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}}const BM=Hi.clamp,ei=(n,e,t)=>{const i=BM((t-n)/(e-n),0,1);return i*i*(3-2*i)},pr=(n,e,t)=>n+(e-n)*t,wn={fogDay:new Oe("#c3cfdb"),fogTwi:new Oe("#d8a27c"),fogNight:new Oe("#0a1020"),sunLow:new Oe("#ff9a52"),sunHigh:new Oe("#fff1dc"),moon:new Oe("#8fa8ff"),skyDay:new Oe("#bfd6ff"),skyNight:new Oe("#34487e"),groundDay:new Oe("#55603f"),groundNight:new Oe("#10150f"),smokeDay:new Oe("#d2d2d2"),smokeNight:new Oe("#2a2e3c")};function zM(){const n={elev:40,night:0,daylight:1,sunDir:new Y,lightDir:new Y,moonDir:new Y,sunIntensity:3.2,sunColor:new Oe,hemiIntensity:.35,hemiSky:new Oe,hemiGround:new Oe,envIntensity:.55,exposure:.95,fog:new Oe,smoke:new Oe,turbidity:3.5,rayleigh:1.4};return{out:n,compute(e){const t=(e-.25)*Math.PI*2,i=Math.sin(t)*62,s=Hi.degToRad(90+(e-.25)*360);n.elev=i,n.sunDir.setFromSphericalCoords(1,Hi.degToRad(90-i),s),n.moonDir.copy(n.sunDir).negate();const r=ei(-4,16,i);return n.daylight=r,n.night=1-ei(-9,7,i),i>0?(n.lightDir.setFromSphericalCoords(1,Hi.degToRad(90-Math.max(i,11)),s),n.sunIntensity=3.2*ei(0,14,i),n.sunColor.copy(wn.sunLow).lerp(wn.sunHigh,ei(0,28,i))):(n.lightDir.setFromSphericalCoords(1,Hi.degToRad(90-Math.max(-i,28)),s+Math.PI),n.sunIntensity=1*ei(0,-12,i),n.sunColor.copy(wn.moon)),n.hemiIntensity=pr(.5,.36,r),n.hemiSky.copy(wn.skyNight).lerp(wn.skyDay,r),n.hemiGround.copy(wn.groundNight).lerp(wn.groundDay,r),n.envIntensity=pr(.16,.55,ei(-6,22,i)),n.exposure=pr(1.1,.95,r),n.fog.copy(wn.fogNight).lerp(wn.fogTwi,ei(-12,0,i)).lerp(wn.fogDay,ei(3,26,i)),n.smoke.copy(wn.smokeNight).lerp(wn.smokeDay,r),n.turbidity=pr(8,3.5,ei(0,30,i)),n.rayleigh=pr(.6,1.4,ei(0,30,i)),n}}}function kM(n,e){const i=new Float32Array(4203),s=new Float32Array(1401),r=new Float32Array(1401);let o=12345;const a=()=>(o=Math.imul(o,1664525)+1013904223|0,(o>>>0)/4294967296);for(let u=0;u<1400;u++){const p=a()*1.5-.35,v=a()*Math.PI*2,x=Math.sqrt(Math.max(0,1-Math.min(1,p*p)));i.set([Math.cos(v)*x,Math.min(1,p),Math.sin(v)*x],u*3),s[u]=(1.2+a()*a()*2.6)*e}r[1400]=1,s[1400]=54*e;const c=new Zt;c.setAttribute("position",new Vt(i,3)),c.setAttribute("aSize",new Vt(s,1)),c.setAttribute("aKind",new Vt(r,1));const l={value:new Y(0,-1,0)},d=new Xn({transparent:!0,depthWrite:!1,uniforms:{uNight:n.uNight,uMoon:l,uTime:n.uTime},vertexShader:`
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
      }`}),f=new Yf(c,d);return f.frustumCulled=!1,f.renderOrder=-1,{pts:f,setMoon(u){l.value.copy(u)},dispose(){c.dispose(),d.dispose()}}}const Q={PLASTER:0,ROOF:1,TIMBER:2,STONE:3,WINDOW:4,WOOD:5,THATCH:6,SLATE:7,GLOW:8};function wa(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function wh(n,e=n){const t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function Qo(n,e,t,i,s,r,o,a=1200){for(let c=0;c<a;c++){const l=o()<.5?0:255;n.fillStyle=`rgba(${l},${l},${l},${o()*r})`,n.fillRect(e+o()*i,t+o()*s,1+o()*2,1+o()*2)}}function Th(n,e,t=1,i=!0){const s=new Zf(n);return i&&(s.colorSpace=fn),s.wrapS=s.wrapT=ra,s.repeat.set(t,t),s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s}const Ge=128,HM={[Q.PLASTER](n,e,t,i){n.fillStyle="#e8e4da",n.fillRect(e,t,Ge,Ge),Qo(n,e,t,Ge,Ge,.12,i,900)},[Q.ROOF](n,e,t,i){n.fillStyle="#6e6a66",n.fillRect(e,t,Ge,Ge);const s=16;for(let r=0;r<Ge/s;r++)for(let o=-1;o<Ge/16;o++){const a=r%2*8+o*16,c=205+i()*50;n.fillStyle=`rgb(${c},${c-6},${c-12})`,n.beginPath(),n.roundRect(e+a+1,t+r*s+1,14,s-1,[0,0,6,6]),n.fill()}},[Q.TIMBER](n,e,t,i){n.fillStyle="#ece6da",n.fillRect(e,t,Ge,Ge),Qo(n,e,t,Ge,Ge,.1,i,500),n.fillStyle="#4a3322";const s=9;n.fillRect(e,t,Ge,s),n.fillRect(e,t+Ge-s,Ge,s),n.fillRect(e,t,s,Ge),n.fillRect(e+Ge-s,t,s,Ge),n.fillRect(e+Ge/2-s/2,t,s,Ge),n.strokeStyle="#4a3322",n.lineWidth=s*.8,n.beginPath(),n.moveTo(e+s,t+Ge-s),n.lineTo(e+Ge/2-s/2,t+s),n.moveTo(e+Ge-s,t+Ge-s),n.lineTo(e+Ge/2+s/2,t+s),n.stroke()},[Q.STONE](n,e,t,i){n.fillStyle="#7d7a74",n.fillRect(e,t,Ge,Ge);for(let s=0;s<8;s++){let r=-(i()*20);for(;r<Ge;){const o=16+i()*22,a=150+i()*80;n.fillStyle=`rgb(${a},${a-4},${a-10})`,n.fillRect(e+Math.max(0,r)+1,t+s*16+1,Math.min(o,Ge-r)-2,14),r+=o}}},[Q.WINDOW](n,e,t,i){n.fillStyle="#5a4030",n.fillRect(e,t,Ge,Ge),n.fillStyle="#4a6a96",n.fillRect(e+14,t+12,Ge-28,Ge-24),n.fillStyle="#6f9ac8",n.fillRect(e+14,t+12,(Ge-28)*.4,Ge-24),n.fillStyle="#5a4030",n.fillRect(e+Ge/2-3,t+12,6,Ge-24),n.fillRect(e+14,t+Ge/2-3,Ge-28,6),n.fillStyle="#7a5c40",n.fillRect(e+6,t+Ge-14,Ge-12,6)},[Q.WOOD](n,e,t,i){n.fillStyle="#b89a78",n.fillRect(e,t,Ge,Ge);for(let s=0;s<8;s++){const r=150+i()*60;n.fillStyle=`rgb(${r},${r-25},${r-55})`,n.fillRect(e+s*16+1,t,14,Ge),n.fillStyle="rgba(40,25,10,0.25)",n.fillRect(e+s*16+7,t,1,Ge)}},[Q.THATCH](n,e,t,i){n.fillStyle="#c8aa6a",n.fillRect(e,t,Ge,Ge);for(let s=0;s<260;s++){const r=150+i()*90;n.strokeStyle=`rgba(${r},${r-30},${r-90},0.7)`,n.lineWidth=1+i();const o=e+i()*Ge,a=t+i()*Ge;n.beginPath(),n.moveTo(o,a),n.lineTo(o+(i()-.5)*6,a+10+i()*18),n.stroke()}},[Q.SLATE](n,e,t,i){n.fillStyle="#9a9a9c",n.fillRect(e,t,Ge,Ge);for(let s=0;s<8;s++)n.fillStyle=`rgba(0,0,0,${.15+i()*.15})`,n.fillRect(e,t+s*16,Ge,2);Qo(n,e,t,Ge,Ge,.12,i,500)}};function GM(n){const e=wa(31),[t,i]=wh(Ge*4,Ge*2);for(const[r,o]of Object.entries(HM))o(i,r%4*Ge,Math.floor(r/4)*Ge,e);const s=Th(t,n);return s.flipY=!1,s.wrapS=s.wrapT=Pn,s}function VM(n,e=48){const t=wa(5),i=256,[s,r]=wh(i);r.fillStyle="#d8d8d8",r.fillRect(0,0,i,i);for(let o=0;o<1400;o++){const a=175+t()*80;r.fillStyle=`rgba(${a},${a},${a},0.4)`,r.beginPath(),r.arc(t()*i,t()*i,2+t()*10,0,Math.PI*2),r.fill()}return Qo(r,0,0,i,i,.18,t,2500),Th(s,n,e)}function WM(){return{uNight:{value:0},uTime:{value:0}}}function Ah(n,e,t=null){const i=t||GM(n),s=new Tr({map:i,vertexColors:!0,roughness:.92,metalness:0});return s.userData.ownsMap=!t,s.onBeforeCompile=r=>{r.uniforms.uNight=e.uNight,r.uniforms.uTime=e.uTime,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aAtlas;
varying float vAtlas;
varying vec3 vNbWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtlas = aAtlas;`).replace("#include <project_vertex>",`#include <project_vertex>
vNbWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
#ifdef USE_INSTANCING
vNbWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#endif`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform float uTime;
varying float vAtlas;
varying vec3 vNbWorld;`).replace("#include <map_fragment>",`
        float nbAt = floor(vAtlas + 0.5);
        vec4 nbTex = vec4(1.0);
        if (nbAt < 7.5) {
          vec2 nbT = fract(vMapUv) * 0.96 + 0.02;
          vec2 nbCell = vec2(mod(nbAt, 4.0), floor(nbAt / 4.0));
          vec2 nbUv = (nbCell + nbT) * vec2(0.25, 0.5);
          nbTex = textureGrad(map, nbUv, dFdx(vMapUv) * vec2(0.25, 0.5), dFdy(vMapUv) * vec2(0.25, 0.5));
        }
        diffuseColor *= nbTex;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (nbAt > 7.5) {
          float fl = 0.85 + 0.15 * sin(uTime * 9.0 + vNbWorld.x * 0.7 + vNbWorld.z * 1.3);
          totalEmissiveRadiance += vColor.rgb * uNight * 3.0 * fl;
        } else if (nbAt > 3.5 && nbAt < 4.5) {
          totalEmissiveRadiance += vec3(1.0, 0.70, 0.36) * uNight * 1.7 * smoothstep(0.30, 0.40, nbTex.b);
        }`)},s.customProgramCacheKey=()=>"nbBuilding",s}function $M(n){n.userData.ownsMap&&n.map?.dispose(),n.dispose()}const Ld=12832731;function XM(n,e){const t=new Tb({canvas:n,antialias:!0,powerPreference:"high-performance",stencil:!1}),i=Math.min(window.devicePixelRatio||1,e.maxDpr);t.setPixelRatio(i),t.setSize(window.innerWidth,window.innerHeight),t.outputColorSpace=fn,t.toneMapping=Ic,t.toneMappingExposure=.95,t.shadowMap.enabled=e.shadows,t.shadowMap.type=e.softShadows?Sf:Mr;const s=new ig,r=380;s.fog=new $c(Ld,r,e.fog),s.background=new Oe(Ld);const o=WM(),a=zM(),c=new Ea;c.scale.setScalar(2e4);const l=c.material.uniforms;l.turbidity.value=3.5,l.rayleigh.value=1.4,l.mieCoefficient.value=.004,l.mieDirectionalG.value=.8,s.add(c);const d=kM(o,i);s.add(d.pts);const f=new Dg(16773596,3.2);f.castShadow=e.shadows;const u=e.shadowRange;Object.assign(f.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:10,far:900}),f.shadow.mapSize.set(e.shadowSize,e.shadowSize),f.shadow.bias=-4e-4,f.shadow.normalBias=.5,f.shadow.radius=2,s.add(f,f.target);const p=new Rg(12572415,5595199,.35);s.add(p);const v=bM(()=>import("./park.exr-v_B6Jj-5.js"),[],import.meta.url).then(g=>new OM().loadAsync(g.default)).then(g=>{const M=new zr(t),w=M.fromEquirectangular(g).texture;g.dispose(),M.dispose(),s.environment=w,s.environmentIntensity=.55}).catch(g=>console.warn("HDRI konnte nicht geladen werden",g)),x=2*u/e.shadowSize,m=new Y;return{renderer:t,scene:s,dpr:i,envReady:v,shared:o,followFocus(g){m.set(Math.round(g.x/x)*x,0,Math.round(g.z/x)*x),f.target.position.copy(m),f.position.copy(m).addScaledVector(a.out.lightDir,400)},setFog(g,M){const w=g.position.distanceTo(M);s.fog.near=w+r,s.fog.far=w+e.fog},setDay(g,M){const w=a.compute(g);return o.uNight.value=w.night,o.uTime.value+=M,l.sunPosition.value.copy(w.sunDir),l.turbidity.value=w.turbidity,l.rayleigh.value=w.rayleigh,f.intensity=w.sunIntensity,f.color.copy(w.sunColor),p.intensity=w.hemiIntensity,p.color.copy(w.hemiSky),p.groundColor.copy(w.hemiGround),s.environmentIntensity=w.envIntensity,t.toneMappingExposure=w.exposure,s.fog.color.copy(w.fog),s.background.copy(w.fog),d.setMoon(w.moonDir),w},resize(){t.setSize(window.innerWidth,window.innerHeight)},render(g){t.render(s,g)},gpuName(){const g=t.getContext(),M=g.getExtension("WEBGL_debug_renderer_info");return M?g.getParameter(M.UNMASKED_RENDERER_WEBGL):g.getParameter(g.RENDERER)},dispose(){d.dispose(),c.geometry.dispose(),c.material.dispose(),f.shadow.map?.dispose(),s.environment?.dispose(),t.dispose()}}}const Ec={maximum:{label:"Maximum",maxDpr:3,shadows:!0,shadowSize:4096,shadowRange:150,softShadows:!0,trees:5200,fog:1700},hoch:{label:"Hoch",maxDpr:2,shadows:!0,shadowSize:2048,shadowRange:120,softShadows:!0,trees:4e3,fog:1500},mittel:{label:"Mittel",maxDpr:1.5,shadows:!0,shadowSize:1024,shadowRange:90,softShadows:!1,trees:2600,fog:1300},niedrig:{label:"Niedrig",maxDpr:1,shadows:!1,shadowSize:512,shadowRange:60,softShadows:!1,trees:1300,fog:1100}};function qM(n){return Ec[n]||Ec.maximum}const No=2048;function YM(n){const e=document.createElement("canvas");e.width=e.height=No;const t=e.getContext("2d"),i=new Zf(e);i.colorSpace=fn,i.premultiplyAlpha=!0,i.flipY=!1,i.anisotropy=Math.min(8,n.capabilities.getMaxAnisotropy());function s(r,o,a,c,l){const d=No/(a*c),f=c*d,u=wa(99);t.clearRect(0,0,No,No);for(const g of o){const M=g.x0*f,w=g.z0*f,y=g.w*f,C=g.d*f;if(g.kind==="field")t.fillStyle="rgba(92,66,40,0.95)",t.fillRect(M+f*.04,w+f*.04,y-f*.08,C-f*.08);else{const T=t.createRadialGradient(M+y/2,w+C/2,Math.min(y,C)*.2,M+y/2,w+C/2,Math.max(y,C)*.75);T.addColorStop(0,"rgba(128,108,78,0.85)"),T.addColorStop(1,"rgba(128,108,78,0)"),t.fillStyle=T,t.fillRect(M-f*.4,w-f*.4,y+f*.8,C+f*.8)}}if(!r.length){i.needsUpdate=!0;return}const p=new Set(r.map(([g,M])=>M*a+g)),v=(g,M)=>l.some(w=>Math.abs(w.cx-g)<=w.r&&Math.abs(w.cz-M)<=w.r),x=g=>(g+.5)*f;t.lineCap="round",t.lineJoin="round";const m=[{w:8.2,dirt:"rgba(78,64,46,0.9)",stone:"rgba(80,78,74,0.95)"},{w:6.4,dirt:"#8f7d5a",stone:"#8d8a82"}];for(const g of m){t.lineWidth=g.w*d;for(const[M,w]of r){const y=v(M,w);t.strokeStyle=t.fillStyle=y?g.stone:g.dirt,t.beginPath(),t.arc(x(M),x(w),g.w*d/2,0,Math.PI*2),t.fill();for(const[C,T]of[[1,0],[0,1]])!p.has((w+T)*a+M+C)||M+C>=a||w+T>=a||(t.beginPath(),t.moveTo(x(M),x(w)),t.lineTo(x(M+C),x(w+T)),t.stroke())}}for(const[g,M]of r){const w=v(g,M);for(let y=0;y<26;y++){const C=x(g)+(u()-.5)*f*1.05,T=x(M)+(u()-.5)*f*1.05,S=w?130+u()*90:100+u()*80;t.fillStyle=`rgba(${S},${S-8},${S-22},0.45)`,t.fillRect(C,T,1.2+u()*2.2,1.2+u()*2.2)}}i.needsUpdate=!0}return{tex:i,paint:s,dispose(){i.dispose()}}}const Lt=2,Id=42,Nd=-4,Cs=Hi.clamp,ti=(n,e,t)=>n+(e-n)*t,ts=(n,e,t)=>{const i=Cs((t-n)/(e-n),0,1);return i*i*(3-2*i)},_i={dry:new Oe("#939b52"),lush:new Oe("#5a8b3c"),forest:new Oe("#3b6a2e"),rock:new Oe("#8a8378"),rockHi:new Oe("#b0a99c"),sand:new Oe("#cdbd8c"),deep:new Oe("#24505e"),foam:new Oe("#e4efe9"),tmp:new Oe};function Uo(n,e){let t=Math.imul(Math.floor(n*7.13)^625341585,374761393)^Math.imul(Math.floor(e*5.71)^461845907,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function vl(n,e){const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,o=s*s*(3-2*s),a=r*r*(3-2*r);return ti(ti(Uo(t,i),Uo(t+1,i),o),ti(Uo(t,i+1),Uo(t+1,i+1),o),a)}function KM(n,e,t){const i=new Ei;let s=0,r=12,o=0,a=0,c=0,l=null,d=null,f=null,u=null;const p={kind:null,fert:null,forest:null,water:null,rock:null},v={value:t},x={value:768},m=new Tr({map:VM(n),vertexColors:!0,roughness:.96,metalness:0});m.onBeforeCompile=P=>{P.uniforms.uRoad=v,P.uniforms.uExt=x,P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
uniform float uExt;
varying vec2 vRoadUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRoadUv = position.xz / uExt + 0.5;`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uRoad;
varying vec2 vRoadUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec4 nbRd = texture2D(uRoad, vRoadUv);
        diffuseColor.rgb = diffuseColor.rgb * (1.0 - nbRd.a) + nbRd.rgb;`)};const g=new Tr({color:3116966,transparent:!0,opacity:.66,roughness:.1,metalness:0,depthWrite:!1});g.onBeforeCompile=P=>{P.uniforms.uTime=e.uTime,P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWw;`).replace("#include <project_vertex>",`#include <project_vertex>
vWw = (modelMatrix * vec4(transformed, 1.0)).xyz;`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWw;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float nbW = sin(vWw.x * 0.21 + vWw.z * 0.13 + uTime * 0.8) + sin(vWw.z * 0.31 - vWw.x * 0.09 - uTime * 0.6) + sin((vWw.x - vWw.z) * 0.53 + uTime * 1.5) * 0.6;
        totalEmissiveRadiance += vec3(0.03, 0.06, 0.07) * smoothstep(0.6, 2.2, nbW) * (1.0 - uNightW);`).replace("uniform float uTime;",`uniform float uTime;
uniform float uNightW;`),P.uniforms.uNightW=e.uNight};const M=new mn(new cs(7e3,7e3).rotateX(-Math.PI/2),g);M.position.y=-.02,M.renderOrder=2;const w=new mn(new cs(7e3,7e3).rotateX(-Math.PI/2),new Tr({color:1787218,roughness:1}));w.position.y=Nd-1.5,i.add(w,M);function y(P,U,B){const k=Cs(U-.5,0,s-1),L=Cs(B-.5,0,s-1),H=Math.floor(k),V=Math.floor(L),W=Math.min(s-1,H+1),j=Math.min(s-1,V+1),K=k-H,le=L-V;return ti(ti(P[V*s+H],P[V*s+W],K),ti(P[j*s+H],P[j*s+W],K),le)}function C(P){s=P.size,r=P.cell,o=s*Lt+1,a=s*r/2,c=s*r,x.value=c,l=new Float32Array(o*o);for(let L=0;L<o;L++)for(let H=0;H<o;H++){const V=H/Lt,W=L/Lt;let j=y(P.height,V,W);const K=Math.min(V*r,c-V*r,W*r,c-W*r);K<Id&&(j=ti(j,Nd,ts(Id,0,K))),l[L*o+H]=Number.isFinite(j)?j:0}d=Float32Array.from(l),u&&(i.remove(u),f.dispose()),f=new Zt;const U=new Float32Array(o*o*3);for(let L=0;L<o;L++)for(let H=0;H<o;H++){const V=(L*o+H)*3;U[V]=H/Lt*r-a,U[V+2]=L/Lt*r-a}const B=new Uint16Array((o-1)*(o-1)*6);let k=0;for(let L=0;L<o-1;L++)for(let H=0;H<o-1;H++){const V=L*o+H,W=V+1,j=V+o,K=j+1;H+L&1?B.set([V,j,W,W,j,K],k):B.set([V,j,K,V,K,W],k),k+=6}f.setAttribute("position",new Vt(U,3).setUsage(kc)),f.setAttribute("normal",new Vt(new Float32Array(o*o*3),3)),f.setAttribute("color",new Vt(new Float32Array(o*o*3),3)),f.setIndex(new Vt(B,1)),u=new mn(f,m),u.receiveShadow=!0,u.frustumCulled=!1,i.add(u)}function T(P){d.set(l);const U=new Uint8Array(o*o),B=new Map;for(const k of P){let L=0,H=0;for(let W=k.z0*Lt;W<=(k.z0+k.d)*Lt;W++)for(let j=k.x0*Lt;j<=(k.x0+k.w)*Lt;j++)L+=l[W*o+j],H++;const V=Math.max(.35,L/H);B.set(k.id,V);for(let W=k.z0*Lt;W<=(k.z0+k.d)*Lt;W++)for(let j=k.x0*Lt;j<=(k.x0+k.w)*Lt;j++)d[W*o+j]=V,U[W*o+j]=1}for(const k of P){const L=B.get(k.id);for(let H=k.z0*Lt-1;H<=(k.z0+k.d)*Lt+1;H++)for(let V=k.x0*Lt-1;V<=(k.x0+k.w)*Lt+1;V++)V<0||H<0||V>=o||H>=o||U[H*o+V]||(d[H*o+V]=(l[H*o+V]+L)/2,U[H*o+V]=2)}return B}function S(){const P=f.attributes.position,U=f.attributes.color;for(let L=0;L<o*o;L++)P.array[L*3+1]=d[L];P.needsUpdate=!0,f.computeVertexNormals();const B=f.attributes.normal.array,k=p.fert;for(let L=0;L<o;L++)for(let H=0;H<o;H++){const V=L*o+H,W=H/Lt,j=L/Lt,K=d[V],le=W*r-a,ue=j*r-a,Pe=ts(.2,.8,y(p.forest,W,j)),ke=y(p.water,W,j),re=ts(.2,.8,y(p.rock,W,j)),Me=y(k,W,j)/100,Ue=.78+.4*vl(le*.045,ue*.045)+.16*(vl(le*.3,ue*.3)-.5)+.08*(vl(le*1.3,ue*1.3)-.5),ze=_i.tmp.copy(_i.dry).lerp(_i.lush,Cs(Me*1.1,0,1));ze.lerp(_i.forest,Pe*.9);const ge=1-B[V*3+1];ze.lerp(_i.rock,Math.max(re,ts(.16,.34,ge))),K>6&&ze.lerp(_i.rockHi,ts(6,16,K)*.6),K<1&&(ke>.04||K<.1)&&ze.lerp(_i.sand,ts(1,.2,K)*.9),K<0&&ze.lerp(_i.deep,ts(0,-3.2,K)),K>-.5&&K<.45&&ze.lerp(_i.foam,(1-Math.abs(K-0)/.5)*.5*(ke>.02||K<.1?1:0)),U.array[V*3]=ze.r*Ue,U.array[V*3+1]=ze.g*Ue,U.array[V*3+2]=ze.b*Ue}U.needsUpdate=!0,f.computeBoundingSphere(),f.boundingSphere.radius=c}function E(P){const U=P.size*P.size;p.kind=P.kind,p.fert=P.fertility,p.forest=new Float32Array(U),p.water=new Float32Array(U),p.rock=new Float32Array(U);for(let B=0;B<U;B++)p.forest[B]=P.kind[B]===1?1:0,p.water[B]=P.kind[B]===2?1:0,p.rock[B]=P.kind[B]===3?1:0}function N(P,U){if(!d)return 0;const B=Cs((P+a)/r*Lt,0,o-1.001),k=Cs((U+a)/r*Lt,0,o-1.001),L=Math.floor(B),H=Math.floor(k),V=B-L,W=k-H,j=d[H*o+L],K=d[H*o+L+1],le=d[(H+1)*o+L],ue=d[(H+1)*o+L+1];return ti(ti(j,K,V),ti(le,ue,V),W)}return{group:i,mat:m,get ready(){return!!u},get half(){return a},setBase(P){E(P),C(P)},setKinds(P){E({size:s,kind:P,fertility:p.fert})},applyPlots(P){const U=T(P);return S(),U},heightAt:N,surfaceY:(P,U)=>Math.max(N(P,U),0),dispose(){f?.dispose(),m.map.dispose(),m.dispose(),M.geometry.dispose(),g.dispose(),w.geometry.dispose(),w.material.dispose()}}}function Rh(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Zt;c.morphTargetsRelative=a;let l=0;for(let d=0;d<n.length;++d){const f=n[d];let u=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in f.attributes){if(!i.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(f.attributes[v]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in f.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[v].length!==n[0].morphAttributes[v].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have the same number of morph targets for the "'+v+'" morph attribute.'),null;o[v]===void 0&&(o[v]=[]),o[v].push(f.morphAttributes[v]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of morph attributes."),null;if(e){let v;if(t)v=f.index.count;else if(f.attributes.position!==void 0)v=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,v,d),l+=v}}if(t){let d=0;const f=[];for(let u=0;u<n.length;++u){const p=n[u].index;for(let v=0;v<p.count;++v)f.push(p.getX(v)+d);d+=n[u].attributes.position.count}c.setIndex(f)}for(const d in r){const f=Ud(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(const d in o){const f=o[d][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let u=0;u<f;++u){const p=[];for(let x=0;x<o[d].length;++x)p.push(o[d][x][u]);const v=Ud(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(v)}}}return c}function Ud(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const d=n[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const o=new e(r),a=new Vt(o,t,i);let c=0;for(let l=0;l<n.length;++l){const d=n[l];if(d.isInterleavedBufferAttribute){const f=c/t;for(let u=0,p=d.count;u<p;u++)for(let v=0;v<t;v++){const x=d.getComponent(u,v);a.setComponent(u+f,v,x)}}else o.set(d.array,c);c+=d.count*t}return s!==void 0&&(a.gpuType=s),a}function Rr(n,e){const t=new Oe(e),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new Vt(s,3)),n}const Cr=n=>{const e=n.index?n.toNonIndexed():n;return e.deleteAttribute("uv"),e};function ZM(){const n=Cr(new Vr(.28,.4,3,5).translate(0,1.5,0)),e=Cr(new da(2.6,1).scale(1,1.2,1).translate(0,5.2,0)),t=Cr(new da(1.7,0).translate(1.1,4.2,.6));return Rh([Rr(n,"#5b4636"),Rr(e,"#5a8a38"),Rr(t,"#74a040")])}function JM(){const n=[Rr(Cr(new Vr(.25,.35,2,5).translate(0,1,0)),"#4e3b2c")];return[[2.6,3.6,2.6],[2.1,3.2,4.4],[1.5,2.8,6.1]].forEach(([e,t,i])=>n.push(Rr(Cr(new Kc(e,t,7).translate(0,i+t/2-.4,0)),["#2f5a3a","#376642","#3f7048"][n.length-1]))),Rh(n)}function ns(n,e){let t=Math.imul(n+1,2654435761)^Math.imul(e+7,2246822507);return t=Math.imul(t^t>>>15,739982445),((t^t>>>13)>>>0)/4294967296}function QM(n){const e=new Ei,t=new Tr({vertexColors:!0,roughness:.95,flatShading:!0}),i=[],s=[ZM(),JM()],r=[["#ffffff","#e4f0cc","#f4f2d0","#d6e6c8"],["#ffffff","#dcecdc","#eaf4e0","#c8dcc8"]];let o=[0,0];function a(c,l,d){i.forEach(S=>{e.remove(S),S.dispose()}),i.length=0;const f=c.size,u=c.cell,p=f*u/2,v=[[],[]];for(let S=0;S<f;S++)for(let E=0;E<f;E++){const N=S*f+E;if(c.kind[N]!==1||l&&l[N]!==0)continue;const P=3+Math.floor(ns(N,1)*3);for(let U=0;U<P;U++){const B=(E+.12+ns(N,10+U)*.76)*u-p,k=(S+.12+ns(N,20+U)*.76)*u-p,L=d(B,k);if(L<.3)continue;const H=ns(N,30+U)<.3+Math.min(.5,L/40);v[H?1:0].push([B,L,k,ns(N,40+U)])}}const x=v[0].length+v[1].length,m=Math.min(1,n/Math.max(1,x)),g=new lt,M=new qn,w=new Y(0,1,0),y=new Y,C=new Y,T=new Oe;o=[0,0],v.forEach((S,E)=>{const N=S.filter((U,B)=>ns(B,77+E)<m);if(!N.length)return;const P=new Hs(s[E],t,N.length);N.forEach(([U,B,k,L],H)=>{M.setFromAxisAngle(w,L*40);const V=.75+L*.8;y.set(V,V*(.9+L*.3),V),g.compose(C.set(U,B-.2,k),M,y),P.setMatrixAt(H,g);const W=r[E];P.setColorAt(H,T.set(W[Math.floor(ns(H,90+E)*W.length)]))}),P.computeBoundingSphere(),P.frustumCulled=!0,i.push(P),e.add(P),o[E]=N.length})}return{group:e,set:a,get count(){return o[0]+o[1]},dispose(){i.forEach(c=>c.dispose()),s.forEach(c=>c.dispose()),t.dispose()}}}const Fd=new Map;function de(n,e=1){const t=`${n}|${e}`;let i=Fd.get(t);if(!i){const s=new Oe(n);i=[Math.min(1,s.r*e),Math.min(1,s.g*e),Math.min(1,s.b*e)],Fd.set(t,i)}return i}const yt=4;class Js{constructor(){this.p=[],this.n=[],this.uv=[],this.c=[],this.a=[],this.cs=1,this.sn=0,this.smoke=[],this.lights=[]}rot(e){return this.cs=Math.cos(e),this.sn=Math.sin(e),this}_v(e,t,i,s,r,o,a,c,l,d){const{cs:f,sn:u}=this;this.p.push(e*f+i*u,t,-e*u+i*f),this.n.push(s*f+o*u,r,-s*u+o*f),this.uv.push(a,c),this.c.push(l[0],l[1],l[2]),this.a.push(d)}mark(){return this.p.length}rotZSince(e,t,i=0,s=0){const r=Math.cos(t),o=Math.sin(t);for(let a=e;a<this.p.length;a+=3){const c=this.p[a]-i,l=this.p[a+1]-s;this.p[a]=i+c*r-l*o,this.p[a+1]=s+c*o+l*r;const d=this.n[a],f=this.n[a+1];this.n[a]=d*r-f*o,this.n[a+1]=d*o+f*r}}tri(e,t,i,s,r=Q.PLASTER,o=null){const a=t[0]-e[0],c=t[1]-e[1],l=t[2]-e[2],d=i[0]-e[0],f=i[1]-e[1],u=i[2]-e[2];let p=c*u-l*f,v=l*d-a*u,x=a*f-c*d;const m=Math.hypot(p,v,x)||1;p/=m,v/=m,x/=m;const g=o||[[e[0]/yt+e[2]/yt,e[1]/yt],[t[0]/yt+t[2]/yt,t[1]/yt],[i[0]/yt+i[2]/yt,i[1]/yt]];this._v(...e,p,v,x,...g[0],s,r),this._v(...t,p,v,x,...g[1],s,r),this._v(...i,p,v,x,...g[2],s,r)}quad(e,t,i,s,r,o=Q.PLASTER,a=!1){const c=Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),l=Math.hypot(s[0]-e[0],s[1]-e[1],s[2]-e[2]),d=a?1:c/yt,f=a?1:l/yt;this.tri(e,t,i,r,o,[[0,0],[d,0],[d,f]]),this.tri(e,i,s,r,o,[[0,0],[d,f],[0,f]])}box(e,t,i,s,r,o,a,c=Q.PLASTER,l={}){const d=l.top||a,f=l.topAtlas??c;return this.quad([s,t,o],[s,t,i],[s,r,i],[s,r,o],a,c),this.quad([e,t,i],[e,t,o],[e,r,o],[e,r,i],a,c),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],a,c),this.quad([s,t,i],[e,t,i],[e,r,i],[s,r,i],a,c),l.noTop||this.quad([e,r,o],[s,r,o],[s,r,i],[e,r,i],d,f),this}gable(e,t,i,s,r,o,a,c,l,d,f){const u=e-s/2-a,p=e+s/2+a,v=i-r/2-a,x=i+r/2+a,m=t+o;this.quad([u,t,x],[p,t,x],[p,m,i],[u,m,i],c,l),this.quad([p,t,v],[u,t,v],[u,m,i],[p,m,i],c,l);const g=e-s/2,M=e+s/2,w=i-r/2,y=i+r/2;return this.tri([M,t,y],[M,t,w],[M,m,i],d,f),this.tri([g,t,w],[g,t,y],[g,m,i],d,f),this}pyramid(e,t,i,s,r,o,a,c=Q.ROOF){const l=e-s/2,d=e+s/2,f=i-r/2,u=i+r/2,p=[e,t+o,i];return this.tri([l,t,u],[d,t,u],p,a,c,[[0,0],[s/yt,0],[s/yt/2,o/yt]]),this.tri([d,t,u],[d,t,f],p,a,c,[[0,0],[r/yt,0],[r/yt/2,o/yt]]),this.tri([d,t,f],[l,t,f],p,a,c,[[0,0],[s/yt,0],[s/yt/2,o/yt]]),this.tri([l,t,f],[l,t,u],p,a,c,[[0,0],[r/yt,0],[r/yt/2,o/yt]]),this}cyl(e,t,i,s,r,o,a,c,l=Q.PLASTER,d=!0,f=c){for(let u=0;u<a;u++){const p=u/a*Math.PI*2,v=(u+1)/a*Math.PI*2,x=Math.sin(p),m=Math.cos(p),g=Math.sin(v),M=Math.cos(v),w=[e+x*s,t,i+m*s],y=[e+g*s,t,i+M*s],C=[e+g*r,t+o,i+M*r],T=[e+x*r,t+o,i+m*r],S=2*Math.PI*s/a/yt,E=o/yt;this.tri(w,C,T,c,l,[[0,0],[S,E],[0,E]]),this.tri(w,y,C,c,l,[[0,0],[S,0],[S,E]]),d&&r>.01&&this.tri([e,t+o,i],T,C,f,l,[[0,0],[0,0],[0,0]])}return this}win(e,t,i,s,r,o=1.2,a=1.5,c=[1,1,1]){const l=o/2,d=.07,f=r,u=-s,p=e+s*d,v=i+r*d;return this.quad([p-f*l,t-a/2,v-u*l],[p+f*l,t-a/2,v+u*l],[p+f*l,t+a/2,v+u*l],[p-f*l,t+a/2,v-u*l],c,Q.WINDOW,!0),this}glow(e,t,i,s,r){return this.box(e-s/2,t-s/2,i-s/2,e+s/2,t+s/2,i+s/2,r,Q.GLOW)}geometry(){const e=new Zt;return e.setAttribute("position",new Ft(this.p,3)),e.setAttribute("normal",new Ft(this.n,3)),e.setAttribute("uv",new Ft(this.uv,2)),e.setAttribute("color",new Ft(this.c,3)),e.setAttribute("aAtlas",new Ft(this.a,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}}const jM=de("#3a2a1c"),ey=de("#8d8a84");function Mn(n,e,t,i,s){n.box(e-.25,-2.2,t-.25,i+.25,.45,s+.25,ey,Q.STONE)}function Yn(n,e,t,i=1.3,s=2.2){n.quad([e-i/2,.45,t+.06],[e+i/2,.45,t+.06],[e+i/2,s,t+.06],[e-i/2,s,t+.06],jM,Q.WOOD,!0)}function Ch(n,e,t,i,s,r,o,a,c=1,l=2){const d=de(e.color),f=de(e.roof,c);Mn(n,-t/2,-i/2,t/2,i/2),n.box(-t/2,.45,-i/2,t/2,s,i/2,d,o,{noTop:!0}),n.gable(0,s,0,t,i,r,.7,f,a,d,o),Yn(n,t*.18,i/2);for(let u=0;u<l;u++){const p=(u-(l-1)/2)*(t*.5)-t*.2;Math.abs(p-t*.18)>1.4&&n.win(p,s*.62,i/2,0,1)}n.win(t/2,s*.62,0,1,0),n.win(-t/2,s*.62,0,-1,0)}function ty(n,e,t,i,s,r){n.box(e-.45,i,t-.45,e+.45,s,t+.45,de("#7a6a5a"),Q.STONE),n.smoke.push([e,s+.2,t,r])}const ny=(n,e)=>{const t=e.h*.58;Ch(n,e,7.2,6,t,e.h-t+.8,Q.PLASTER,Q.THATCH,2.4,1),n.smoke.push([1.6,e.h+1.2,-.8,1])},Ph=(n,e)=>{const t=e.h*.6;Ch(n,e,8.8,7,t,e.h-t+.9,Q.TIMBER,Q.ROOF,1.1,3),ty(n,-2.4,-.5,t+.8,e.h+1.6,1)},iy=(n,e,t,i)=>{n.box(-t/2+.5,0,-i/2+.5,t/2-.5,.18,i/2-.5,de("#6b4f35"),Q.PLASTER);const s=Math.floor((i-3)/2.8);for(let r=0;r<s;r++){const o=-i/2+2+r*2.8,a=r%2?.92:1.08;n.box(-t/2+1.2,.18,o,t/2-1.2,.6+r%3*.08,o+1.7,de(e.color,a),Q.THATCH)}},sy=(n,e,t,i)=>{n.box(-t/2+.4,0,-i/2+.4,t/2-.4,.16,i/2-.4,de(e.color),Q.PLASTER);const s=de("#6b5238"),r=-t/2+.6,o=t/2-.6,a=-i/2+.6,c=i/2-.6,l=(f,u,p,v)=>{const x=Math.min(f,p),m=Math.max(f,p),g=Math.min(u,v),M=Math.max(u,v);n.box(x-.07,.55,g-.07,m+.07,.75,M+.07,s,Q.WOOD),n.box(x-.07,.95,g-.07,m+.07,1.1,M+.07,s,Q.WOOD)};l(r,a,o,a),l(r,c,o,c),l(r,a,r,c),l(o,a,o,c);for(let f=r;f<=o+.1;f+=4)for(const u of[a,c])n.box(f-.15,.1,u-.15,f+.15,1.2,u+.15,s,Q.WOOD);for(let f=a+4;f<c;f+=4)for(const u of[r,o])n.box(u-.15,.1,f-.15,u+.15,1.2,f+.15,s,Q.WOOD);[[-4,-3],[3,2],[-1,5],[6,-5]].forEach(([f,u],p)=>{const v=de(p===3?"#7a5436":"#f0ece4");n.box(f-.8,.5,u-.5,f+.8,1.4,u+.5,v,Q.THATCH),n.box(f+.8,.9,u-.3,f+1.4,1.5,u+.3,de("#3b342e"),Q.PLASTER);for(const[x,m]of[[-.5,-.3],[.5,-.3],[-.5,.3],[.5,.3]])n.box(f+x-.08,.15,u+m-.08,f+x+.08,.5,u+m+.08,de("#3b342e"),Q.PLASTER)})},ry=(n,e)=>{const t=de(e.color),i=de(e.roof,1.2);Mn(n,-3,-5,3,1),n.box(-3,.45,-5,3,e.h*.6,1,t,Q.WOOD,{noTop:!0}),n.gable(0,e.h*.6,-2,6,6,e.h*.4+.6,.6,i,Q.THATCH,t,Q.WOOD),Yn(n,0,1),n.win(-3,2.2,-2,-1,0);for(let s=1.2;s<11;s+=1.6)n.box(-1.1,.35,s,1.1,.55,s+1.4,de("#8a6c4c"),Q.WOOD);for(const s of[3,7,11])for(const r of[-1.2,1.2])n.box(r-.15,-1.5,s-.15,r+.15,1,s+.15,de("#4a3826"),Q.WOOD);n.box(2.2,0,4,4,.6,9,de("#7a5a3c"),Q.WOOD),n.box(-5.2,.45,-3,-4.8,2.6,-2.6,de("#5a4630"),Q.WOOD),n.box(-5.2,.45,-.4,-4.8,2.6,0,de("#5a4630"),Q.WOOD),n.box(-5.3,2.3,-3,-4.7,2.6,0,de("#5a4630"),Q.WOOD)},oy=(n,e)=>{const t=de(e.color),i=de(e.roof,1.3);Mn(n,-3.5,-4,3.5,2),n.box(-3.5,.45,-4,3.5,2.7,2,t,Q.WOOD,{noTop:!0}),n.gable(0,2.7,-1,7,6,2,.8,i,Q.WOOD,t,Q.WOOD),Yn(n,.8,2),n.win(-1.6,1.8,2,0,1,1,1.2);for(let s=0;s<3;s++)for(let r=0;r<4-s;r++){const o=4.4+r*.75+s*.38;n.box(o-.35,.45+s*.7,-1,o+.35,1.1+s*.7,4.5,de("#9a7048",.9+r%2*.15),Q.WOOD)}n.cyl(-4.8,0,3.6,.7,.65,.8,8,de("#8c6a46"),Q.WOOD),n.smoke.push([2.2,4.4,-2.5,1])},ay=(n,e,t,i)=>{const s=de("#7a7771"),r=de("#222");Mn(n,-6,-8,6,-2),n.box(-6,.45,-8,6,5,-2,s,Q.STONE,{noTop:!0}),n.gable(0,5,-5,12,6,2.2,.8,de(e.roof,2),Q.SLATE,s,Q.STONE),n.box(-1.8,.45,-1.99,1.8,3.4,-1.9,r,Q.PLASTER),n.box(-2.4,.45,-2.2,-1.8,3.8,-1.7,de("#5a4630"),Q.WOOD),n.box(1.8,.45,-2.2,2.4,3.8,-1.7,de("#5a4630"),Q.WOOD),n.box(-2.6,3.4,-2.2,2.6,3.9,-1.7,de("#5a4630"),Q.WOOD);for(const[o,a]of[[-9,-2],[-6,-2],[-9,1],[-6,1]])n.box(o-.25,0,a-.25,o+.25,7.5,a+.25,de("#5a4630"),Q.WOOD);n.box(-9.4,7.2,-2.4,-5.6,7.9,1.4,de("#4a3826"),Q.WOOD),n.cyl(-7.5,7.9,-.5,1.2,1.2,.6,10,de("#2a2622"),Q.SLATE),n.cyl(6,0,6,5.5,.6,3.6,8,de("#4a4640"),Q.STONE),n.cyl(-2,0,6.5,3.2,.4,2.2,8,de("#1e1d1c"),Q.SLATE),n.smoke.push([4.2,6.8,-5,1])},ly=de("#8a5a48");function va(n,e,t,i,s=1.2,r=.8,o=3){n.cyl(e,0,t,s,r,i,8,ly,Q.STONE),n.cyl(e,i,t,r+.15,r+.15,.5,8,de("#3a3430"),Q.SLATE),n.smoke.push([e,i+.7,t,o])}function Pr(n,e,t,i,s,r,o){for(let a=e;a<=t+.01;a+=o)n.win(a,i,s,0,r,1.1,1.4)}const cy=(n,e)=>{const t=de(e.color),i=de(e.roof);Mn(n,-7,-6,7,5),n.box(-7,.45,-6,7,4.4,5,t,Q.TIMBER,{noTop:!0}),n.gable(0,4.4,-.5,14,11,3.2,.8,i,Q.ROOF,t,Q.TIMBER),Yn(n,-2,5,2.4,3.2),Pr(n,1.5,5.5,2.6,5,1,2.2),n.win(7,2.5,0,1,0),n.win(-7,2.5,0,-1,0),va(n,4.5,-3.5,10,.9,.7,2),n.box(8,.45,-3,11,.9,3,de("#7a5a3a"),Q.WOOD),n.box(8.2,.9,-2.6,10.8,1.3,2.6,de("#8a6a48"),Q.WOOD),n.cyl(-9,0,8,1,1,1.4,8,de("#7a5a3a"),Q.WOOD)},uy=(n,e,t,i)=>{const s=de(e.color),r=de(e.roof,1.1),o=7;Mn(n,-14,-9,14,9),n.box(-14,.45,-9,14,o,9,s,Q.STONE,{noTop:!0});const a=4,c=28/a;for(let l=0;l<a;l++){const d=-14+l*c,f=d+c,u=3.2;n.quad([d,o,-9],[d,o,9],[f,o+u,9],[f,o+u,-9],r,Q.SLATE),n.quad([f,o,9],[f,o,-9],[f,o+u,-9],[f,o+u,9],de("#6a7a88"),Q.PLASTER),n.tri([d,o,9],[f,o,9],[f,o+u,9],s,Q.STONE),n.tri([f,o,-9],[d,o,-9],[f,o+u,-9],s,Q.STONE)}n.box(-14,o-.3,-9,14,o,9,de("#555"),Q.SLATE,{noTop:!0}),Yn(n,0,9,4.2,4.4),Pr(n,-11,-5,3.4,9,1,3),Pr(n,5,11,3.4,9,1,3),Pr(n,-11,11,3.4,-9,-1,4),va(n,15.5,-5,22,1.5,1,4),va(n,15.5,4,14,1,.7,3),n.box(-16,.45,2,-14,2.2,7,de("#2a2826"),Q.SLATE)},dy=n=>{const e=new Js,t=de("#6b4e32"),i=3.3;for(let s=0;s<12;s++){const r=e.mark();e.box(0,-.18,-.8,i,.18,.8,t,Q.WOOD),e.box(i-.3,-.7,-1.1,i+.15,.7,1.1,de("#8a6a46"),Q.WOOD),e.rotZSince(r,s/12*Math.PI*2)}return e.box(-.5,-.5,-1.2,.5,.5,1.2,t,Q.WOOD),e.geometry()},fy=(n,e)=>{const t=de(e.color),i=de(e.roof);return Mn(n,-8,-5,1,5),n.box(-8,.45,-5,1,5,5,t,Q.PLASTER,{noTop:!0}),n.gable(-3.5,5,0,9,10,3.4,.8,i,Q.ROOF,t,Q.PLASTER),Yn(n,-4,5),n.win(-6,3,5,0,1),n.win(-1,3,5,0,1),n.win(-8,3,0,-1,0),n.box(1,3.15,-.15,4.6,3.45,.15,de("#5a4430"),Q.WOOD),n.box(3.6,.2,-2.2,5.6,1,2.2,de("#7a5a3a"),Q.WOOD),n.box(-2.5,5,-1,-.5,6.4,1,de("#7a6a5a"),Q.STONE),n.smoke.push([-1.5,6.6,0,1]),{spin:{kind:"wheel",pivot:[4.6,3.3,0],geo:dy()}}},hy=()=>{const n=new Js,e=de("#5a4430"),t=de("#efe6d0");for(let i=0;i<4;i++){const s=n.mark();n.box(.6,-.15,-.15,9.6,.15,.15,e,Q.WOOD),n.box(1.6,.15,-.1,9.4,2.3,.1,t,Q.PLASTER),n.box(1.6,.15,-.1,1.9,2.3,.15,e,Q.WOOD),n.rotZSince(s,i/4*Math.PI*2)}return n.box(-.5,-.5,-.5,.5,.5,.9,e,Q.WOOD),n.geometry()},py=(n,e)=>{const t=de(e.color),i=de(e.roof,1.4),s=e.h*.72;Mn(n,-4,-4,4,4),n.cyl(0,.4,0,4.4,2.6,s,10,t,Q.PLASTER,!1),n.cyl(0,s+.4,0,3.1,.2,3.4,10,i,Q.ROOF),Yn(n,0,4,1.4,2.4),n.win(-2,s*.6,2.6,-.6,.8,.9,1.2),n.box(-1,.45,-3.8,1,.9,-3,de("#6b5238"),Q.WOOD);for(let r=0;r<5;r++)n.box(4.8+r%2*.7,.45,-3+r*1.1,5.7+r%2*.7,1.1,-2.4+r*1.1,de("#d8c9a0"),Q.THATCH);return{spin:{kind:"blades",pivot:[0,s*.88,3],geo:hy()}}},my=(n,e)=>{de(e.color);const t=de(e.roof,1.5),i=de("#9a5040");Mn(n,-8,-6,5,6),n.box(-8,.45,-6,5,5.6,6,i,Q.STONE,{noTop:!0}),n.gable(-1.5,5.6,0,13,12,3.2,.7,t,Q.SLATE,i,Q.STONE),Yn(n,-2,6,2.6,3.4),Pr(n,-6,2,3.2,6,1,3.2),n.box(6,.45,-3.2,10.5,4.6,3.2,de("#4a4846"),Q.SLATE),n.box(6.4,4.6,-1.2,10.1,5.2,1.2,de("#5a5754"),Q.SLATE),n.box(7.5,5.2,-.4,8.3,7.4,.4,de("#3a3836"),Q.SLATE),va(n,-5.5,-9,17,1.4,.95,4),n.box(-4,.45,8,1,1.6,10.5,de("#222120"),Q.SLATE),n.smoke.push([7.9,7.6,0,2])},gy=(n,e)=>{const t=[de(e.roof),de("#efe6d2")];Mn(n,-11,-5,11,5),n.box(-11,0,-5,11,.3,5,de("#9a9486"),Q.STONE);for(const i of[-5.6,5.6]){for(const[s,r]of[[-3,-3],[3,-3],[-3,3],[3,3]])n.box(i+s-.15,.3,r-.15,i+s+.15,3,r+.15,de("#5a4430"),Q.WOOD);for(let s=0;s<6;s++){const r=i-3.4+s*1.1333333333333333,o=r+6.8/6,a=t[s%2];n.quad([r,3,3.6],[o,3,3.6],[o,3.9,0],[r,3.9,0],a,Q.PLASTER),n.quad([o,3,-3.6],[r,3,-3.6],[r,3.9,0],[o,3.9,0],a,Q.PLASTER)}n.box(i-2.6,.3,-1,i+2.6,1.1,1,de("#8a6a46"),Q.WOOD);for(let s=0;s<4;s++)n.box(i-2.2+s*1.2,1.1,-.7,i-1.4+s*1.2,1.5,.7,de(["#c9503a","#d9b43a","#6a9a3a","#c9803a"][s]),Q.THATCH)}n.cyl(0,.3,8,1.3,1.3,1,10,de("#8d8a84"),Q.STONE),n.cyl(0,1,8,.9,.9,.05,10,de("#3a6a9a"),Q.PLASTER);for(const[i,s]of[[-9.5,7.2],[-8.2,7.6],[9.2,7]])n.cyl(i,0,s,.55,.5,1,8,de("#7a5a3a"),Q.WOOD)},vy=(n,e)=>{const t=de(e.color),i=de(e.roof,1.3);Mn(n,-4,-11,4,9),n.box(-3.8,.45,-11,3.8,5.2,1,t,Q.PLASTER,{noTop:!0}),n.rot(-Math.PI/2).gable(-5,5.2,0,12,7.6,3.4,.6,i,Q.SLATE,t,Q.PLASTER).rot(0);for(const s of[-8,-4,-.5])n.win(3.8,3,s,1,0,1,2.2),n.win(-3.8,3,s,-1,0,1,2.2);n.box(-2.6,.45,1,2.6,e.h+.8,7,t,Q.PLASTER,{noTop:!0}),n.pyramid(0,e.h+.8,4,5.6,6.2,5.2,de(e.roof,1.1),Q.SLATE),n.box(-.1,e.h+5.9,3.9,.1,e.h+7.2,4.1,de("#d9c98a"),Q.PLASTER),n.box(-.5,e.h+6.5,3.9,.5,e.h+6.7,4.1,de("#d9c98a"),Q.PLASTER),Yn(n,0,7,1.8,3.2),n.box(-1,.45,7.1,1,.8,7.9,de("#8d8a84"),Q.STONE),n.box(-1.2,e.h-2.6,7,1.2,e.h-.2,7.07,de("#1e1c1a"),Q.PLASTER),n.win(0,5.6,7,0,1,1,1.6)},_y=(n,e)=>{const t=de(e.color),i=de(e.roof,1.1);Mn(n,-9,-4,9,4),n.box(-9,.45,-4,9,4.4,4,t,Q.TIMBER,{noTop:!0}),n.gable(0,4.4,0,18,8,3,.8,i,Q.ROOF,t,Q.TIMBER),Yn(n,-1.5,4,1.6,2.6);for(const s of[-6,-3.6,1.8,4.2,6.6])n.win(s,1.9,4,0,1),n.win(s,3.6,4,0,1,1,1.2);n.win(9,2.4,0,1,0),n.win(-9,2.4,0,-1,0),n.box(2.5,.45,4.6,2.6,4,4.7,de("#3a2a1c"),Q.WOOD),n.box(2.6,3.4,4.4,4.4,4,4.5,de("#8a5a3a"),Q.WOOD);for(const s of[-7,-5.8,7.5])n.cyl(s,0,5.6,.6,.55,1.1,8,de("#7a5a3a"),Q.WOOD);n.box(-.5,7.2,-2.5,.5,8.2,-1.5,de("#7a6a5a"),Q.STONE),n.box(5.5,4,-2,6.5,6.2,-1,de("#7a6a5a"),Q.STONE),n.smoke.push([6,6.4,-1.5,1])},xy=(n,e)=>{const t=de(e.color),i=de(e.roof);Mn(n,-8,-7,8,7),n.box(-8,.45,-7,8,6.2,5,t,Q.PLASTER,{noTop:!0}),n.pyramid(0,6.2,-1,17,13,4.6,i,Q.ROOF),n.box(-3,.45,4.9,3,9.2,8,t,Q.PLASTER,{noTop:!0}),n.box(-2.2,9.2,5,2.2,13.4,7.4,t,Q.PLASTER,{noTop:!0}),n.pyramid(0,13.4,6.2,5.2,4,4.4,de(e.roof,1.1),Q.ROOF),n.cyl(0,11.6,7.45,.9,.9,.12,12,de("#e8e0c8"),Q.PLASTER),Yn(n,0,8,2.2,3.6);for(const s of[-1,1])for(const r of[4.5,7])n.win(s*r,2.2,5,0,1),n.win(s*r,4.4,5,0,1,1,1.2);for(const s of[-5.5,-2.5,2.5,5.5])n.win(s,3.4,-7,0,-1);for(let s=0;s<3;s++)n.box(-2.4-s*.2,0,8+s*.5,2.4+s*.2,.2+(2-s)*0,8.5+s*.5,de("#9a9486"),Q.STONE);n.box(-.08,17.8,6.1,.08,21.5,6.3,de("#5a4430"),Q.WOOD),n.box(.08,20.2,6.1,1.8,21.4,6.2,de("#c9503a"),Q.PLASTER),n.smoke.push([-5,8.4,-4,1]),n.box(-5.5,6.2,-4.5,-4.5,8.2,-3.5,de("#7a6a5a"),Q.STONE)},dn=12,Sy={hut:ny,house:Ph,field:iy,pasture:sy,fishery:ry,lodge:oy,mine:ay,workshop:cy,factory:uy,watermill:fy,windmill:py,steam:my,market:gy,chapel:vy,tavern:_y,hall:xy},_a=new Map;function Dh(n){let e=_a.get(n.id);if(e)return e;const t=n.look,i=n.size[0]*dn,s=n.size[1]*dn,r=new Js,a=(Sy[t.shape]||Ph)(r,t,i,s)||{};return e={geo:r.geometry(),smoke:r.smoke,spin:a.spin||null,w:i,d:s,height:t.h+2},_a.set(n.id,e),e}function by(){for(const n of _a.values())n.geo.dispose(),n.spin?.geo.dispose();_a.clear()}const My=128,_l=.6,jo=.15,Od=new Y(0,1,0),Fo=new qn,Bd=new Y,zd=new Y,Oo=new lt,yy=new lt,Ey=new lt,kd=new lt,Hd=new Oe,xl=new $i,Bo=new Y;function wy(n){let e=Math.imul(n+11,2654435761);return e^=e>>>15,(e>>>0)%1e3/1e3}const Ty=n=>{const t=n-1;return 1+(1.9+1)*t*t*t+1.9*t*t};function xa(n,e,t,i=dn){const s=e.rot&1,r=s?n.size[1]:n.size[0],o=s?n.size[0]:n.size[1];return{w:r,d:o,cx:(e.x+r/2-t/2)*i,cz:(e.z+o/2-t/2)*i}}function Ay(n,e,t){const i=new Ei,s=new Map,r=new Map;let o=[],a=0;function c(p,v,x){const m=new Hs(p,e,v);return m.castShadow=x,m.receiveShadow=!0,m.instanceMatrix.setUsage(kc),m.count=0,m}function l(p,v){let x=s.get(p.id);if(x&&v<=x.cap)return x;x&&(i.remove(x.mesh),x.mesh.dispose(),x.spinMesh&&(i.remove(x.spinMesh),x.spinMesh.dispose()));const m=Dh(p),g=Math.max(My,v*2);return x={def:p,shape:m,cap:g,items:[],mesh:c(m.geo,g,!0),spinMesh:m.spin?c(m.spin.geo,g,!0):null},i.add(x.mesh),x.spinMesh&&i.add(x.spinMesh),s.set(p.id,x),x}function d(p,v){const x=v-p.spawn;return x>=_l?1:Math.max(.05,.2+.8*Ty(Math.max(0,x)/_l))}function f(p,v){const x=p.mesh;p.items.forEach((m,g)=>{const M=d(m,v);Fo.setFromAxisAngle(Od,m.rot*Math.PI/2),Oo.compose(zd.set(m.cx,m.y,m.cz),Fo,Bd.set(M,M,M)),x.setMatrixAt(g,Oo)}),x.count=p.items.length,x.instanceMatrix.needsUpdate=!0,x.computeBoundingSphere()}function u(p){p.items.forEach((v,x)=>{const m=(.93+wy(v.id)*.14)*(v.active<jo?.52:1);p.mesh.setColorAt(x,Hd.setRGB(m,m,m)),p.spinMesh?.setColorAt(x,Hd)}),p.mesh.instanceColor&&(p.mesh.instanceColor.needsUpdate=!0),p.spinMesh?.instanceColor&&(p.spinMesh.instanceColor.needsUpdate=!0)}return{group:i,get count(){return a},get emitters(){return o},sync(p,v,x,m,g,M,w){const y=new Map;for(const T of p){const S=g.get(T.type);!S||!Number.isFinite(T.x+T.z+T.rot)||(y.has(S.id)||y.set(S.id,[]),y.get(S.id).push(T))}const C=new Set;o=[];for(const[T,S]of y){const E=l(g.get(T),S.length);E.items=S.map(N=>{const P=xa(E.def,N,m);C.add(N.id),r.has(N.id)||r.set(N.id,w?-999:M);const U=v.get(N.id)??x(P.cx,P.cz);return{id:N.id,rot:N.rot&3,cx:P.cx,cz:P.cz,fw:P.w*dn,fd:P.d*dn,y:U,active:Number.isFinite(N.active)?N.active:1,spawn:r.get(N.id),angle:0}}),E.mesh.visible=!0,f(E,M),u(E),E.spinMesh&&(E.spinMesh.visible=!0);for(const N of E.items){if(N.active<jo)continue;const P=Math.cos(N.rot*Math.PI/2),U=Math.sin(N.rot*Math.PI/2);for(const[B,k,L,H]of E.shape.smoke)o.push([N.cx+B*P+L*U,N.y+k,N.cz-B*U+L*P,H])}}for(const[T,S]of s)y.has(T)||(S.items=[],S.mesh.count=0,S.mesh.visible=!1,S.spinMesh&&(S.spinMesh.count=0,S.spinMesh.visible=!1));for(const T of r.keys())C.has(T)||r.delete(T);a=p.length},update(p,v){for(const x of s.values()){if(!x.items.length||(x.items.some(g=>v-g.spawn<_l+.05)&&f(x,v),!x.spinMesh))continue;const m=x.shape.spin.kind==="blades"?.9:1.1;x.items.forEach((g,M)=>{g.angle+=g.active<jo?0:p*m*Math.min(1,g.active+.3);const w=d(g,v);Fo.setFromAxisAngle(Od,g.rot*Math.PI/2),Oo.compose(zd.set(g.cx,g.y,g.cz),Fo,Bd.set(w,w,w));const[y,C,T]=x.shape.spin.pivot;kd.multiplyMatrices(Oo,yy.makeTranslation(y,C,T)).multiply(Ey.makeRotationZ(g.angle)),x.spinMesh.setMatrixAt(M,kd)}),x.spinMesh.count=x.items.length,x.spinMesh.instanceMatrix.needsUpdate=!0,x.spinMesh.computeBoundingSphere()}},pick(p){let v=null;for(const x of s.values())for(const m of x.items){if(xl.min.set(m.cx-m.fw/2,m.y-1,m.cz-m.fd/2),xl.max.set(m.cx+m.fw/2,m.y+x.shape.height,m.cz+m.fd/2),!p.intersectBox(xl,Bo))continue;const g=p.origin.distanceTo(Bo);(!v||g<v.dist)&&(v={dist:g,id:m.id,x:Math.min(m.cx+m.fw/2-.1,Math.max(m.cx-m.fw/2+.1,Bo.x)),z:Math.min(m.cz+m.fd/2-.1,Math.max(m.cz-m.fd/2+.1,Bo.z))})}return v},dispose(){for(const p of s.values())p.mesh.dispose(),p.spinMesh?.dispose();s.clear(),r.clear()}}}const Sl=80,Ry=4.6,Gd=1.35,Cy=new Y(0,1,0),Vd=new qn,Py=new Y,Dy=new Y(1,1,1),Wd=new lt,Ly=new Oe,Iy=["#6b4a30","#3a2a20","#8a6a48","#c9c2b4","#5a4030"];function Ny(){const n=new Js,e=de("#7a5a3a"),t=de("#3a2a1c");n.box(-2.2,.75,-.8,.4,1.5,.8,e,Q.WOOD),n.box(-2,1.5,-.7,.2,2.2,.7,de("#d9bf72"),Q.THATCH);for(const s of[-1.7,-.2])for(const r of[-.95,.83])n.box(s-.45,0,r,s+.45,.9,r+.12,t,Q.WOOD);n.box(-.4,1.9,-.2,.2,2.7,.4,de("#4a5a7a"),Q.PLASTER),n.box(.4,1,-.12,1.9,1.15,.12,t,Q.WOOD);const i=de(Iy[0]);n.box(1.7,1,-.32,3.5,1.85,.32,i,Q.THATCH);for(const[s,r]of[[1.8,-.2],[1.8,.2],[3.3,-.2],[3.3,.2]])n.box(s-.1,0,r-.1,s+.1,1,r+.1,de("#3a2a20"),Q.WOOD);return n.box(3.3,1.5,-.2,3.75,2.5,.2,i,Q.THATCH),n.box(3.6,2.1,-.18,4.3,2.5,.18,i,Q.THATCH),n.box(1.45,1.4,-.08,1.75,1.8,.08,de("#2a2018"),Q.WOOD),n.geometry()}function Uy(n){const e=Ny(),t=new Hs(e,n,Sl);t.frustumCulled=!1,t.castShadow=!1,t.receiveShadow=!1,t.instanceMatrix.setUsage(kc),t.count=0;for(let m=0;m<Sl;m++)t.setColorAt(m,Ly.set(m%3===0?"#e8dcc8":m%3===1?"#ffffff":"#d8cab0"));const i=wa(1745);let s=[],r=new Map,o=12,a=12,c=0,l=()=>0;const d=[],f=(m,g)=>g*4096+m,u=(m,g)=>[(m-o/2+.5)*a,(g-o/2+.5)*a];function p(m,g){const M=r.get(f(m[0],m[1]))||[],w=M.filter(C=>!(g&&C[0]===g[0]&&C[1]===g[1])),y=w.length?w:M;return y.length?y[Math.floor(i()*y.length)]:m}function v(m){const g=s[Math.floor(i()*s.length)];m.prev=g,m.cur=g,m.next=p(g,null),m.t=i()*.5,m.spd=Ry*(.8+i()*.4),m.dir=0}function x(m){return[m.prev,m.cur,m.next].every(g=>r.has(f(g[0],g[1])))}return{mesh:t,setNetwork(m,g,M,w){o=g,a=M,l=w,s=m.filter(([T,S])=>Number.isFinite(T+S));const y=new Set(s.map(([T,S])=>f(T,S)));r=new Map;for(const[T,S]of s)r.set(f(T,S),[[T+1,S],[T-1,S],[T,S+1],[T,S-1]].filter(([E,N])=>y.has(f(E,N))));s=s.filter(([T,S])=>r.get(f(T,S)).length>0);for(const T of d)(!s.length||!x(T))&&s.length&&v(T)},setPopulation(m){for(c=s.length?Math.min(Sl,Math.floor((m||0)/6),Math.max(1,Math.floor(s.length/2))):0;d.length<c;){const g={};v(g),d.push(g)}t.count=c},get count(){return c},update(m){if(!(!c||!s.length)){for(let g=0;g<c;g++){const M=d[g];for(M.t+=M.spd*m/a;M.t>=1;)M.t-=1,M.prev=M.cur,M.cur=M.next,M.next=p(M.cur,M.prev);const[w,y]=u(...M.prev),[C,T]=u(...M.cur),[S,E]=u(...M.next),N=(w+C)/2,P=(y+T)/2,U=(C+S)/2,B=(T+E)/2,k=M.t,L=1-k;let H=L*L*N+2*L*k*C+k*k*U,V=L*L*P+2*L*k*T+k*k*B,W=2*L*(C-N)+2*k*(U-C),j=2*L*(T-P)+2*k*(B-T);const K=Math.hypot(W,j);K>.01&&(W/=K,j/=K,M.dir=Math.atan2(-j,W),M.dx=W,M.dz=j),H+=-(M.dz??0)*Gd,V+=(M.dx??0)*Gd;const le=Math.max(.15,l(H,V))+.05;Vd.setFromAxisAngle(Cy,M.dir),Wd.compose(Py.set(H,le,V),Vd,Dy),t.setMatrixAt(g,Wd)}t.instanceMatrix.needsUpdate=!0}},dispose(){e.dispose(),t.dispose()}}}const bl=64,zo=new lt,Ml=new qn,Fy=new Y(0,1,0),$d=new Y(1,1,1),Xd=new Y;function Oy(){const n=new Js,e=de("#4a3826"),t=de("#ffb85a");return n.box(-.1,0,-.1,.1,2.9,.1,e,Q.WOOD),n.box(-.45,2.55,-.05,.1,2.65,.05,e,Q.WOOD),n.box(-.6,2,-.2,-.2,2.55,.2,t,Q.GLOW),n.box(-.68,2.55,-.28,-.12,2.65,.28,e,Q.WOOD),n.geometry()}function By(){const n=new Js,e=de("#8d8a84"),t=de("#4a3020");for(let i=0;i<8;i++){const s=i/8*Math.PI*2;n.box(Math.cos(s)*.9-.2,0,Math.sin(s)*.9-.2,Math.cos(s)*.9+.2,.35,Math.sin(s)*.9+.2,e,Q.STONE)}return n.box(-.7,.05,-.12,.7,.3,.12,t,Q.WOOD),n.box(-.12,.05,-.7,.12,.3,.7,t,Q.WOOD),n.pyramid(0,.3,0,.9,.9,1.5,de("#ff9a3a"),Q.GLOW),n.smoke.push([0,2,0,1]),n.geometry()}function zy(n){const e=new Ei,t=Oy(),i=By(),s=new Hs(t,n,bl),r=new Hs(i,n,4);for(const a of[s,r])a.count=0,a.castShadow=!1,a.frustumCulled=!1;e.add(s,r);const o=new Oe(1,1,1);for(let a=0;a<bl;a++)s.setColorAt(a,o);for(let a=0;a<4;a++)r.setColorAt(a,o);return{group:e,set(a,c,l,d,f,u){const p=[],v=[];let x=0;if(c){for(const[g,M]of a)if(!(x>=bl||(g*7+M*13)%3!==0))for(const[w,y]of[[1,0],[-1,0],[0,1],[0,-1]]){const C=g+w,T=M+y;if(C<0||T<0||C>=d||T>=d||c[T*d+C]<=0)continue;const S=(g-d/2+.5)*f+w*4.6,E=(M-d/2+.5)*f+y*4.6,N=Math.max(.2,u(S,E));Ml.setFromAxisAngle(Fy,Math.atan2(-y,w)),zo.compose(Xd.set(S,N,E),Ml,$d),s.setMatrixAt(x++,zo),p.push([S-w*.4,N+2.3,E-y*.4,9]);break}}s.count=x,s.instanceMatrix.needsUpdate=!0;let m=0;if(c)for(const g of l.slice(0,2))for(const[M,w]of[[g.x+g.w,g.z],[g.x-1,g.z],[g.x,g.z+g.d],[g.x,g.z-1]]){if(M<0||w<0||M>=d||w>=d||c[w*d+M]>0)continue;const y=(M-d/2+.5)*f,C=(w-d/2+.5)*f,T=Math.max(.2,u(y,C));zo.compose(Xd.set(y,T,C),Ml.identity(),$d),r.setMatrixAt(m++,zo),p.push([y,T+1,C,11]),v.push([y,T+1.8,C,1]);break}return r.count=m,r.instanceMatrix.needsUpdate=!0,{glow:p,smoke:v}},dispose(){t.dispose(),i.dispose(),s.dispose(),r.dispose()}}}const yl=5,qd=2400,Yd=300,Lh=`
  uniform float uK;
  float nbPointSize(float meters, vec4 mv) {
    bool ortho = projectionMatrix[3][3] == 1.0;
    return meters * uK / (ortho ? 1.0 : max(1.0, -mv.z));
  }`;function ky(n,e){return new Xn({transparent:!0,depthWrite:!1,uniforms:{uTime:n.uTime,uNight:n.uNight,uK:e,uTone:{value:new Oe(.8,.8,.8)}},vertexShader:`
      uniform float uTime; uniform vec3 uTone; ${Lh}
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
      }`})}function Hy(n,e){return new Xn({transparent:!0,depthWrite:!1,blending:Ll,uniforms:{uTime:n.uTime,uNight:n.uNight,uK:e},vertexShader:`
      uniform float uTime; uniform float uNight; ${Lh}
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
      }`})}function Kd(n,e,t){const i=new Zt;i.setAttribute("position",new Vt(new Float32Array(n*3),3));for(const[r,o]of e)i.setAttribute(r,new Vt(new Float32Array(n*o),o));i.setDrawRange(0,0);const s=new Yf(i,t);return s.frustumCulled=!1,s}function Gy(n){const e={value:800},t=Kd(qd,[["aPhase",1],["aPower",1]],ky(n,e)),i=Kd(Yd,[["aSize",1]],Hy(n,e));return t.renderOrder=3,i.renderOrder=4,{smoke:t,glow:i,setSmoke(s){const r=t.geometry,o=r.attributes.position.array,a=r.attributes.aPhase.array,c=r.attributes.aPower.array;let l=0;for(let d=0;d<s.length&&l+yl<=qd;d++){const[f,u,p,v]=s[d];for(let x=0;x<yl;x++,l++)o[l*3]=f,o[l*3+1]=u,o[l*3+2]=p,a[l]=(x+d*.618%1)/yl,c[l]=v}r.setDrawRange(0,l);for(const d of["position","aPhase","aPower"])r.attributes[d].needsUpdate=!0},setGlow(s){const r=i.geometry,o=r.attributes.position.array,a=r.attributes.aSize.array,c=Math.min(s.length,Yd);for(let l=0;l<c;l++)o.set(s[l].slice(0,3),l*3),a[l]=s[l][3];r.setDrawRange(0,c),r.attributes.position.needsUpdate=!0,r.attributes.aSize.needsUpdate=!0},setView(s,r){e.value=s.isOrthographicCamera?r/(s.top-s.bottom):r/(2*Math.tan(s.fov*Math.PI/360))},setTone(s){t.material.uniforms.uTone.value.copy(s)},dispose(){t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose()}}}const Zd=new Oe("#5fe27a"),El=new Oe("#ff5a4a"),Vy=new Oe("#6fd0ff"),Wy=new Y(0,1,0);function Jd(n){const e=new cs(1,1).rotateX(-Math.PI/2),t=new qc({transparent:!0,opacity:.45,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new Hs(e,t,n);i.count=0,i.frustumCulled=!1,i.renderOrder=5;const s=new lt,r=new qn,o=new Y,a=new Y;return{mesh:i,set(c,l,d,f,u){const p=Math.min(n,c?.length||0);for(let v=0;v<p;v++){const[x,m]=c[v],g=(x-d/2+.5)*f,M=(m-d/2+.5)*f,w=f/2,y=Math.max(u(g,M),u(g-w,M-w),u(g+w,M-w),u(g-w,M+w),u(g+w,M+w),0)+.18;s.compose(o.set(g,y,M),r,a.set(f*.94,1,f*.94)),i.setMatrixAt(v,s),i.setColorAt(v,l)}i.count=p,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.visible=p>0},clear(){i.count=0,i.visible=!1},dispose(){e.dispose(),t.dispose(),i.dispose()}}}function $y(n,e,t,i){const s=new Ei,r=Jd(64),o=Jd(96),a=Ah(n,e,t.map);Object.assign(a,{transparent:!0,opacity:.62,depthWrite:!1});const c=new mn(new Zt,a);c.visible=!1,c.renderOrder=4;const l=new qc({color:16769658,transparent:!0,opacity:.9,side:ri,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),d=new mn(new Zt,l);d.visible=!1,d.frustumCulled=!1,d.renderOrder=6,s.add(r.mesh,o.mesh,c,d);let f=!1,u=!1,p=0;function v(x,m,g,M){const w=[],C=g/2,T=M/2,S=.55,E=(B,k,L,H)=>{const V=Math.hypot(L-B,H-k),W=Math.max(1,Math.ceil(V/3));for(let j=0;j<W;j++)w.push([B+(L-B)*j/W,k+(H-k)*j/W])};E(x-C,m-T,x+C,m-T),E(x+C,m-T,x+C,m+T),E(x+C,m+T,x-C,m+T),E(x-C,m+T,x-C,m-T);const N=[],P=[];w.forEach(([B,k])=>{const L=B-x,H=k-m;for(const V of[-S,S]){const W=B+(Math.abs(L)>C-.01?Math.sign(L)*V:0),j=k+(Math.abs(H)>T-.01?Math.sign(H)*V:0);N.push(W,Math.max(i(W,j),0)+.3,j)}});const U=w.length;for(let B=0;B<U;B++){const k=B*2,L=(B+1)%U*2;P.push(k,k+1,L,L,k+1,L+1)}d.geometry.dispose(),d.geometry=new Zt,d.geometry.setAttribute("position",new Ft(N,3)),d.geometry.setIndex(P),d.visible=!0}return{group:s,setSelection(x,m,g,M){if(f=!1,d.visible=!1,!x||!Number.isFinite(x.x+x.z))return;f=!0;const w=x.id>0?g.find(C=>C.id===x.id):null,y=w&&m.get(w.type);if(w&&y){const C=xa(y,w,M);v(C.cx,C.cz,C.w*dn,C.d*dn)}else v((x.x-M/2+.5)*dn,(x.z-M/2+.5)*dn,dn,dn)},setPreview(x,m,g){const M=x&&m.get(x.type);if(u=!!M,c.visible=u,!M){r.clear();return}const w=Dh(M),y=xa(M,{x:x.x,z:x.z,rot:x.rot|0},g);c.geometry=w.geo;let C=0;for(const[T,S]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,0]])C=Math.max(C,i(y.cx+T*y.w*dn/2,y.cz+S*y.d*dn/2));c.position.set(y.cx,Math.max(C,.35),y.cz),c.quaternion.setFromAxisAngle(Wy,(x.rot|0)*Math.PI/2),a.color.copy(x.ok?Zd:El).lerp(new Oe(1,1,1),.35),r.set(x.cells?.length?x.cells:[[x.x,x.z]],x.ok?Zd:El,g,dn,i)},setRoadPreview(x,m){if(!x||!x.cells?.length){o.clear();return}o.set(x.cells,x.ok?Vy:El,m,dn,i)},update(x){p+=x,f&&(l.opacity=.65+.3*Math.sin(p*5)),u&&(a.opacity=.55+.1*Math.sin(p*4))},dispose(){r.dispose(),o.dispose(),d.geometry.dispose(),l.dispose(),a.dispose()}}}const Qd=3,Xy=48,wl=new ih,jd=new ot;function qy(n,e){const t=new Y;function i(s){const r=s.origin,o=s.direction;if(o.y>-1e-5)return null;const a=n.half;let c=Math.max(0,(Xy-r.y)/o.y);const l=-r.y/o.y;if(l<=c)return null;let d=c;for(let f=c;f<=l+Qd;f+=Qd){const u=Math.min(f,l);if(t.copy(o).multiplyScalar(u).add(r),t.y<=n.surfaceY(t.x,t.z)){let p=d,v=u;for(let x=0;x<10;x++){const m=(p+v)/2;t.copy(o).multiplyScalar(m).add(r),t.y<=n.surfaceY(t.x,t.z)?v=m:p=m}return t.copy(o).multiplyScalar(v).add(r),Math.abs(t.x)>a||Math.abs(t.z)>a?null:{x:t.x,z:t.z,dist:v}}if(d=u,u>=l)break}return null}return{pick(s,r,o){if(!s||!n.ready||!Number.isFinite(r+o))return null;jd.set(r,o),wl.setFromCamera(jd,s);const a=i(wl.ray),c=e.pick(wl.ray);return c&&(!a||c.dist<a.dist+6)?{x:c.x,z:c.z}:a?{x:a.x,z:a.z}:null}}}const Yy=90,ef=.36,Gr=new Map(oi.buildings.map(n=>[n.id,n]));let mt,It,is,ea,Jt,Dr,Bi,wi,ta,ii,rs,tf,Tl=[],Bn={terrain:"",geom:"",active:""},nf=new Map,Hn=64,br=12,Al=!0,Ih=null,Nh=null,Uh=null;const os={buildings:0,trees:0,cars:0},sf=()=>It.resize();function mr(n,e=2166136261){for(let t=0;t<n.length;t++)e=Math.imul(e^(n[t]|0),16777619);return e>>>0}function Ky(n){return n&&n.size>0&&Array.isArray(n.height)&&Array.isArray(n.kind)&&n.height.length===n.size*n.size&&n.kind.length===n.height.length}function Zy(){Bn.terrain&&(Bn={terrain:"",geom:"",active:""},Bi.sync([],new Map,Jt.heightAt,Hn,Gr,0,!0),wi.setNetwork([],Hn,br,Jt.heightAt),wi.setPopulation(0),ii.setSmoke([]),ii.setGlow([]),Jt.group.visible=!1,os.buildings=os.trees=os.cars=0)}function Rl(){const n=mt.store.get(),e=n?.region?.terrain;if(!Ky(e)){Zy();return}const t=`${n.meta?.gameId}|${e.size}|${e.cell}|${mr(e.height.map(l=>Math.round(l*10)))}`;t!==Bn.terrain&&(Hn=e.size,br=e.cell,Jt.setBase(e),Jt.group.visible=!0,Bn={terrain:t,geom:"",active:""},Al=!0);const i=n.region.grid,s=n.build?.buildings||[],r=n.build?.roads||[],o=`${mr(e.kind)}|${mr(s.flatMap(l=>[l.id,l.x,l.z,l.rot]))}|${mr(r.flat())}|${r.length}`,a=mr(s.map(l=>l.active<jo?1:0));let c=!1;if(o!==Bn.geom){Bn.geom=o,Jt.setKinds(e.kind);const l=[],d=[],f=[],u=[];for(const v of s){const x=Gr.get(v.type);if(!x)continue;const m=xa(x,v,Hn);l.push({id:v.id,x0:v.x,z0:v.z,w:m.w,d:m.d}),d.push({x0:v.x,z0:v.z,w:m.w,d:m.d,kind:x.look.shape==="field"?"field":"yard"}),x.id==="townhall"&&f.push({x:v.x,z:v.z,w:m.w,d:m.d}),(x.id==="townhall"||x.id==="market")&&u.push({cx:v.x+(m.w>>1),cz:v.z+(m.d>>1),r:4})}nf=Jt.applyPlots(l),ea.paint(r,d,Hn,br,u),Dr.set(e,i,Jt.heightAt);const p=ta.set(r,i,f,Hn,br,Jt.heightAt);Bn.lampSmoke=p.smoke,wi.setNetwork(r,Hn,br,Jt.heightAt),ii.setGlow(p.glow),c=!0}(c||a!==Bn.active)&&(Bn.active=a,Bi.sync(s,nf,Jt.heightAt,Hn,Gr,performance.now()/1e3,Al),ii.setSmoke([...Bi.emitters,...Bn.lampSmoke||[]]),Al=!1),wi.setPopulation(n.population?.total),os.buildings=s.length,os.trees=Dr.count,os.cars=wi.count,na()}function na(){const n=mt.store.get();rs.setSelection(Ih,Gr,n?.build?.buildings||[],Hn),rs.setPreview(Nh,Gr,Hn),rs.setRoadPreview(Uh,Hn)}const Jy={name:"render",required:!0,init(n){mt=n,Ec[mt.settings.quality]||(mt.settings.quality="maximum");const e=qM(mt.settings.quality);It=XM(mt.view.canvas,e);const t=It.shared;is=Ah(It.renderer,t),ea=YM(It.renderer),Jt=KM(It.renderer,t,ea.tex),Jt.group.visible=!1,Dr=QM(e.trees),Bi=Ay(It.renderer,is),wi=Uy(is),ta=zy(is),ii=Gy(t),rs=$y(It.renderer,t,is,Jt.heightAt),tf=qy(Jt,Bi),It.scene.add(Jt.group,Dr.group,Bi.group,wi.mesh,ta.group,ii.smoke,ii.glow,rs.group),mt.view.renderer=It.renderer,mt.view.scene=It.scene,mt.view.dpr=It.dpr,mt.view.quality=e,mt.view.gpu=It.gpuName(),mt.view.counts=os,mt.view.dayTime=ef,mt.view.pickGround=(s,r)=>tf.pick(mt.view.camera,s,r),mt.view.envReady=It.envReady,It.resize(),window.addEventListener("resize",sf);const i=s=>r=>{try{s(r)}catch(o){console.error("render:",o)}};Tl.push(mt.bus.on("game:started",i(()=>{Bn.terrain="",Rl()})),mt.bus.on("state:changed",i(Rl)),mt.bus.on("region:select",i(s=>{Ih=s,na()})),mt.bus.on("build:preview",i(s=>{Nh=s,na()})),mt.bus.on("build:road-preview",i(s=>{Uh=s,na()}))),mt.store?.get?.()&&Rl()},update(n){mt.view.dayLock||(mt.view.dayTime=(((mt.view.dayTime??ef)+n/Yy)%1+1)%1);const e=It.setDay(mt.view.dayTime,n),t=performance.now()/1e3;Bi.update(n,t),wi.update(n),rs.update(n),ii.setTone(e.smoke);const i=mt.view.camera;i&&(ii.setView(i,It.renderer.domElement.height),It.setFog(i,mt.view.focus),It.followFocus(mt.view.focus),It.render(i))},serialize(){return null},load(){},dispose(){window.removeEventListener("resize",sf),Tl.forEach(n=>n()),Tl=[],rs?.dispose(),ii?.dispose(),ta?.dispose(),wi?.dispose(),Bi?.dispose(),Dr?.dispose(),Jt?.dispose(),ea?.dispose(),by(),is&&$M(is),It?.dispose()}},Qy=[As,Xm,Fb,Bb,Wb,pM,gM,_M,Jy];function jy(){const n=Bh(Tm),e=document.getElementById("loading");e&&(e.textContent=n("app.loading"));const t=document.createElement("canvas");if(document.getElementById("app").append(t),!t.getContext("webgl2")){e.textContent=n("app.noWebgl");return}const i=Fh(),s=kh(),r=Ws("sandbox"),o=Qy.filter(u=>u.required||r.modules[u.name]!==!1),a={bus:i,t:n,settings:s,build:{id:"24-1efb7d3",time:"2026-11-14 18:11"},view:{canvas:t},mode:()=>r};a.game={snapshot(){const u={};for(const p of o){if(p===As)continue;const v=p.serialize();v!=null&&(u[p.name]=v)}return{format:"nb3d-save",schemaVersion:as,build:a.build.id,savedAt:new Date().toISOString(),state:As.serialize(),client:u}},async restore(u){await As.load(u.state);for(const p of o)p!==As&&p.load(u.client?.[p.name]??null);i.emit("game:started",{mode:u.state.meta.mode,seed:u.state.meta.seed,loaded:!0})},async newGame(u){await As.newGame(u);const p=a.store.get();i.emit("game:started",{mode:p.meta.mode,seed:p.meta.seed,loaded:!1})}};const c=new Map;function l(u,p){try{p()}catch(v){const x=performance.now();(!c.has(u.name)||x-c.get(u.name)>5e3)&&(c.set(u.name,x),console.error(`Modul ${u.name}:`,v),i.emit("app:error",{module:u.name,message:String(v?.message||v)}))}}a.loop=Oh({getLimit:()=>s.fpsLimit,onFrame(u){for(const p of o)l(p,()=>p.update(u))}});for(const u of o)u.init(a);i.on("settings:changed",u=>Hh(u)),i.on("game:new",u=>a.game.newGame(u)),document.addEventListener("visibilitychange",()=>{document.hidden?(i.emit("app:hidden"),a.loop.stop()):(i.emit("app:visible"),a.loop.start())}),window.addEventListener("pagehide",()=>i.emit("app:hidden"));let d=!1;const f=new Promise(u=>i.on("game:started",()=>{d||(d=!0,u())}));Promise.all([a.view.envReady,f]).then(()=>document.getElementById("loading")?.remove()),a.loop.start(),i.emit("app:ready"),window.__nb3d={bus:i,ctx:a}}jy();
