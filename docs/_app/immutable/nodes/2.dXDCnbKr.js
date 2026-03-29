import{c as qi,a as yt,f as ji,d as Zn}from"../chunks/BHeC7yLQ.js";import{h as In,K as Op,aU as i0,g as Fp,a as Bp,aV as Fd,at as kp,l as $o,a5 as Gh,k as wr,ar as zp,aC as ha,az as s0,aW as r0,aX as a0,aQ as o0,ap as tc,aY as c0,a0 as Wh,aZ as l0,c as Wl,S as L,b as Xh,a_ as h0,s as u0,a$ as Vp,ak as d0,b0 as f0,aN as yu,b1 as p0,b2 as m0,b3 as g0,n as _0,a4 as x0,e as Qa,C as v0,aO as y0,b4 as ii,ag as M0,r as Hp,p as Gp,b5 as Xl,b6 as b0,b7 as S0,aL as T0,m as w0,d as E0,j as A0,a7 as Wp,v as Jc,ao as C0,ax as Bd,aB as kd,aw as zd,F as Vd,b8 as R0,a8 as I0,b9 as Nn,ba as xn,z as Rr,aR as P0,P as Ut,a1 as Sn,aT as tt,X as Ws,f as pn,Y as Xs,Z as Ns,_ as Yi,aS as bs,u as jc,$ as dt,ae as Mu,bb as Hd,t as bn,bc as D0}from"../chunks/BZwHZoDy.js";import{s as Ba,a as me,h as L0}from"../chunks/CHown5Nw.js";import{r as ka,i as qh,b as nc,s as bu,p as Yt,c as Mr,a as N0,d as U0}from"../chunks/BEokLfZr.js";import{g as O0,w as Wi,d as Su,a as za,o as F0,r as Xp}from"../chunks/BnQhhYgx.js";import{c as B0,e as Yh,s as k0,d as z0,a as ql}from"../chunks/CCRMe28P.js";import{B as V0}from"../chunks/DthTnIiV.js";const Gd=0,Wd=1,H0=2;function G0(s,e,t,n,i){In&&Op();var r=i0(),a=c0,o=r?tc(a):Wh(a,!1,!1),c=r?tc(a):Wh(a,!1,!1),l=new V0(s);Fp(()=>{var h=Bp;h.deactivate();var u=e();h.activate();var d=!1;let f=In&&Fd(u)===(s.data===kp);if(f&&($o(Gh()),wr(!1)),Fd(u)){var p=l0(),_=!1;const m=g=>{if(!d){_=!0,p(!1),s0.ensure(),In&&wr(!1);try{g()}finally{r0(!1),a0||o0()}}};u.then(g=>{m(()=>{ha(o,g),l.ensure(Wd,n&&(x=>n(x,o)))})},g=>{m(()=>{if(ha(c,g),l.ensure(H0,i&&(x=>i(x,c))),!i)throw c.v})}),In?l.ensure(Gd,t):zp(()=>{_||m(()=>{l.ensure(Gd,t)})})}else ha(o,u),l.ensure(Wd,n&&(m=>n(m,o)));return f&&wr(!0),()=>{d=!0}})}function Bn(s,e){return e}function W0(s,e,t){for(var n=[],i=e.length,r,a=e.length,o=0;o<i;o++){let u=e[o];Gp(u,()=>{if(r){if(r.pending.delete(u),r.done.add(u),r.pending.size===0){var d=s.outrogroups;Zh(s,yu(r.done)),d.delete(r),d.size===0&&(s.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=n.length===0&&t!==null;if(c){var l=t,h=l.parentNode;T0(h),h.append(l),s.items.clear()}Zh(s,e,!c)}else r={pending:new Set(e),done:new Set},(s.outrogroups??=new Set).add(r)}function Zh(s,e,t=!0){var n;if(s.pending.size>0){n=new Set;for(const a of s.pending.values())for(const o of a)n.add(s.items.get(o).e)}for(var i=0;i<e.length;i++){var r=e[i];if(n?.has(r)){r.f|=ii;const a=document.createDocumentFragment();w0(r,a)}else E0(e[i],t)}}var Xd;function Cn(s,e,t,n,i,r=null){var a=s,o=new Map,c=(e&Vp)!==0;if(c){var l=s;a=In?$o(_0(l)):l.appendChild(Wl())}In&&Op();var h=null,u=d0(()=>{var y=t();return f0(y)?y:y==null?[]:yu(y)}),d,f=new Map,p=!0;function _(y){(x.effect.f&M0)===0&&(x.pending.delete(y),x.fallback=h,X0(x,d,a,e,n),h!==null&&(d.length===0?(h.f&ii)===0?Hp(h):(h.f^=ii,aa(h,null,a)):Gp(h,()=>{h=null})))}function m(y){x.pending.delete(y)}var g=Fp(()=>{d=L(u);var y=d.length;let v=!1;if(In){var w=x0(a)===kp;w!==(y===0)&&(a=Gh(),$o(a),wr(!1),v=!0)}for(var T=new Set,A=Bp,M=u0(),S=0;S<y;S+=1){In&&Qa.nodeType===v0&&Qa.data===y0&&(a=Qa,v=!0,wr(!1));var D=d[S],I=n(D,S),O=p?null:o.get(I);O?(O.v&&ha(O.v,D),O.i&&ha(O.i,S),M&&A.unskip_effect(O.e)):(O=q0(o,p?a:Xd??=Wl(),D,I,S,i,e,t),p||(O.e.f|=ii),o.set(I,O)),T.add(I)}if(y===0&&r&&!h&&(p?h=Xh(()=>r(a)):(h=Xh(()=>r(Xd??=Wl())),h.f|=ii)),y>T.size&&h0(),In&&y>0&&$o(Gh()),!p)if(f.set(A,T),M){for(const[B,G]of o)T.has(B)||A.skip_effect(G.e);A.oncommit(_),A.ondiscard(m)}else _(A);v&&wr(!0),L(u)}),x={effect:g,items:o,pending:f,outrogroups:null,fallback:h};p=!1,In&&(a=Qa)}function Wr(s){for(;s!==null&&(s.f&b0)===0;)s=s.next;return s}function X0(s,e,t,n,i){var r=(n&S0)!==0,a=e.length,o=s.items,c=Wr(s.effect.first),l,h=null,u,d=[],f=[],p,_,m,g;if(r)for(g=0;g<a;g+=1)p=e[g],_=i(p,g),m=o.get(_).e,(m.f&ii)===0&&(m.nodes?.a?.measure(),(u??=new Set).add(m));for(g=0;g<a;g+=1){if(p=e[g],_=i(p,g),m=o.get(_).e,s.outrogroups!==null)for(const D of s.outrogroups)D.pending.delete(m),D.done.delete(m);if((m.f&Xl)!==0&&(Hp(m),r&&(m.nodes?.a?.unfix(),(u??=new Set).delete(m))),(m.f&ii)!==0)if(m.f^=ii,m===c)aa(m,null,t);else{var x=h?h.next:c;m===s.effect.last&&(s.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Ii(s,h,m),Ii(s,m,x),aa(m,x,t),h=m,d=[],f=[],c=Wr(h.next);continue}if(m!==c){if(l!==void 0&&l.has(m)){if(d.length<f.length){var y=f[0],v;h=y.prev;var w=d[0],T=d[d.length-1];for(v=0;v<d.length;v+=1)aa(d[v],y,t);for(v=0;v<f.length;v+=1)l.delete(f[v]);Ii(s,w.prev,T.next),Ii(s,h,w),Ii(s,T,y),c=y,h=T,g-=1,d=[],f=[]}else l.delete(m),aa(m,c,t),Ii(s,m.prev,m.next),Ii(s,m,h===null?s.effect.first:h.next),Ii(s,h,m),h=m;continue}for(d=[],f=[];c!==null&&c!==m;)(l??=new Set).add(c),f.push(c),c=Wr(c.next);if(c===null)continue}(m.f&ii)===0&&d.push(m),h=m,c=Wr(m.next)}if(s.outrogroups!==null){for(const D of s.outrogroups)D.pending.size===0&&(Zh(s,yu(D.done)),s.outrogroups?.delete(D));s.outrogroups.size===0&&(s.outrogroups=null)}if(c!==null||l!==void 0){var A=[];if(l!==void 0)for(m of l)(m.f&Xl)===0&&A.push(m);for(;c!==null;)(c.f&Xl)===0&&c!==s.fallback&&A.push(c),c=Wr(c.next);var M=A.length;if(M>0){var S=(n&Vp)!==0&&a===0?t:null;if(r){for(g=0;g<M;g+=1)A[g].nodes?.a?.measure();for(g=0;g<M;g+=1)A[g].nodes?.a?.fix()}W0(s,A,S)}}r&&zp(()=>{if(u!==void 0)for(m of u)m.nodes?.a?.apply()})}function q0(s,e,t,n,i,r,a,o){var c=(a&m0)!==0?(a&g0)===0?Wh(t,!1,!1):tc(t):null,l=(a&p0)!==0?tc(i):null;return{v:c,i:l,e:Xh(()=>(r(e,c??t,l??i,o),()=>{s.delete(n)}))}}function aa(s,e,t){if(s.nodes)for(var n=s.nodes.start,i=s.nodes.end,r=e&&(e.f&ii)===0?e.nodes.start:t;n!==null;){var a=A0(n);if(r.before(n),n===i)return;n=a}}function Ii(s,e,t){e===null?s.effect.first=t:e.next=t,t===null?s.effect.last=e:t.prev=e}function Y0(s,e){return s==null?null:String(s)}function Z0(s,e,t,n){var i=s.__style;if(In||i!==e){var r=Y0(e);(!In||r!==s.getAttribute("style"))&&(r==null?s.removeAttribute("style"):s.style.cssText=r),s.__style=e}return n}class Tu{#e=new WeakMap;#t;#n;static entries=new WeakMap;constructor(e){this.#n=e}observe(e,t){var n=this.#e.get(e)||new Set;return n.add(t),this.#e.set(e,n),this.#i().observe(e,this.#n),()=>{var i=this.#e.get(e);i.delete(t),i.size===0&&(this.#e.delete(e),this.#t.unobserve(e))}}#i(){return this.#t??(this.#t=new ResizeObserver(e=>{for(var t of e){Tu.entries.set(t.target,t);for(var n of this.#e.get(t.target)||[])n(t)}}))}}var K0=new Tu({box:"border-box"});function $0(s,e,t){var n=K0.observe(s,()=>t(s[e]));Wp(()=>(Jc(()=>t(s[e])),n))}function J0(s,e){var t=Vd,n=kd,i=s();return{subscribe:Wi(i,a=>{var o=i!==s(),c,l=kd,h=Vd;Bd(n),zd(t);try{c=R0(()=>{I0(()=>{const u=s();o&&a(u)})})}finally{Bd(l),zd(h)}return o=!0,c}).subscribe}}function ic(s){let e;const t=B0(i=>{let r=!1;const a=s.subscribe(o=>{e=o,r&&i()});return r=!0,a});function n(){return C0()?(t(),e):O0(s)}return"set"in s?{get current(){return n()},set current(i){s.set(i)}}:{get current(){return n()}}}const Yl=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(s[n]!==e[n])return!1;return!0},j0=()=>{const s=[],n={items:s,remember:(i,r)=>{for(let c=0;c<s.length;c++){const l=s[c];if(Yl(r,l.keys)&&l.promise)return l.promise}const a=i();a.catch(c=>{for(let l=0;l<s.length;l++){const h=s[l];if(Yl(r,h.keys)){s.splice(l,1);break}}throw c});const o={promise:a,keys:r};return s.push(o),o.promise},clear:i=>{for(let r=0;r<s.length;r++){const a=s[r];if(Yl(i,a.keys)){s.splice(r,1);return}}}};return Nn("threlte-cache",n),n},Q0=()=>{const s=xn("threlte-cache");if(!s)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return s};const Qc="183",Is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qp=0,Kh=1,Yp=2,e_=3,t_=0,ua=1,da=2,br=3,ci=0,cn=1,Gn=2,oi=0,Ps=1,$h=2,Jh=3,jh=4,Zp=5,n_=6,zi=100,Kp=101,$p=102,Jp=103,jp=104,Qp=200,em=201,tm=202,nm=203,sc=204,rc=205,im=206,sm=207,rm=208,am=209,om=210,cm=211,lm=212,hm=213,um=214,ac=0,oc=1,cc=2,Us=3,lc=4,hc=5,uc=6,dc=7,Va=0,dm=1,fm=2,Xn=0,wu=1,Eu=2,Au=3,Cu=4,Ru=5,Sa=6,Iu=7,Qh="attached",pm="detached",el=300,li=301,Zi=302,fa=303,pa=304,zr=306,Ki=1e3,sn=1001,Ir=1002,Et=1003,tl=1004,i_=1004,ws=1005,s_=1005,xt=1006,Er=1007,r_=1007,Dn=1008,a_=1008,mn=1009,Pu=1010,Du=1011,Pr=1012,nl=1013,Ln=1014,rn=1015,hi=1016,il=1017,sl=1018,Dr=1020,Lu=35902,Nu=35899,Uu=1021,Ou=1022,an=1023,ui=1026,Vi=1027,rl=1028,Ha=1029,Os=1030,al=1031,o_=1032,ol=1033,ma=33776,ga=33777,_a=33778,xa=33779,fc=35840,pc=35841,mc=35842,gc=35843,_c=36196,xc=37492,vc=37496,yc=37488,Mc=37489,bc=37490,Sc=37491,Tc=37808,wc=37809,Ec=37810,Ac=37811,Cc=37812,Rc=37813,Ic=37814,Pc=37815,Dc=37816,Lc=37817,Nc=37818,Uc=37819,Oc=37820,Fc=37821,Bc=36492,kc=36494,zc=36495,Vc=36283,Hc=36284,Gc=36285,Wc=36286,mm=2200,gm=2201,_m=2202,Lr=2300,Nr=2301,Jo=2302,eu=2303,Es=2400,As=2401,Ta=2402,cl=2500,Fu=2501,xm=0,Bu=1,Xc=2,vm=3200,c_=3201,l_=3202,h_=3203,Qi=0,ym=1,Si="",Ft="srgb",jt="srgb-linear",wa="linear",ft="srgb",u_="",d_="rg",f_="ga",p_=0,Ms=7680,m_=7681,g_=7682,__=7683,x_=34055,v_=34056,y_=5386,M_=512,b_=513,S_=514,T_=515,w_=516,E_=517,A_=518,tu=519,Mm=512,bm=513,Sm=514,ll=515,Tm=516,wm=517,hl=518,Em=519,Ea=35044,C_=35048,R_=35040,I_=35045,P_=35049,D_=35041,L_=35046,N_=35050,U_=35042,O_="100",nu="300 es",Tn=2e3,Fs=2001,F_={COMPUTE:"compute",RENDER:"render"},B_={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},k_={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},z_={TEXTURE_COMPARE:"depthTextureCompare"};function V_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const H_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Sr(s,e){return new H_[s](e)}function Am(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Aa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cm(){const s=Aa("canvas");return s.style.display="block",s}const qd={};let $i=null;function G_(s){$i=s}function W_(){return $i}function Ca(...s){const e="THREE."+s.shift();$i?$i("log",e,...s):console.log(e,...s)}function Rm(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Me(...s){s=Rm(s);const e="THREE."+s.shift();if($i)$i("warn",e,...s);else{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Be(...s){s=Rm(s);const e="THREE."+s.shift();if($i)$i("error",e,...s);else{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ra(...s){const e=s.join(" ");e in qd||(qd[e]=!0,Me(...s))}function X_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const q_={[ac]:oc,[cc]:uc,[lc]:dc,[Us]:hc,[oc]:ac,[uc]:cc,[dc]:lc,[hc]:Us};class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yd=1234567;const Ds=Math.PI/180,Ur=180/Math.PI;function wn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[s&255]+Kt[s>>8&255]+Kt[s>>16&255]+Kt[s>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function ku(s,e){return(s%e+e)%e}function Y_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Z_(s,e,t){return s!==e?(t-s)/(e-s):0}function va(s,e,t){return(1-t)*s+t*e}function K_(s,e,t,n){return va(s,e,1-Math.exp(-t*n))}function $_(s,e=1){return e-Math.abs(ku(s,e*2)-e)}function J_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function j_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Q_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ex(s,e){return s+Math.random()*(e-s)}function tx(s){return s*(.5-Math.random())}function nx(s){s!==void 0&&(Yd=s);let e=Yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ix(s){return s*Ds}function sx(s){return s*Ur}function rx(s){return(s&s-1)===0&&s!==0}function ax(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ox(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cx(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*f,o*h,o*l);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zu={DEG2RAD:Ds,RAD2DEG:Ur,generateUUID:wn,clamp:Ze,euclideanModulo:ku,mapLinear:Y_,inverseLerp:Z_,lerp:va,damp:K_,pingpong:$_,smoothstep:J_,smootherstep:j_,randInt:Q_,randFloat:ex,randFloatSpread:tx,seededRandom:nx,degToRad:ix,radToDeg:sx,isPowerOfTwo:rx,ceilPowerOfTwo:ax,floorPowerOfTwo:ox,setQuaternionFromProperEuler:cx,normalize:Qe,denormalize:nn};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||c!==d||l!==f||h!==p){let m=c*d+l*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);g=Math.sin(g*x)/y,o=Math.sin(o*x)/y,c=c*g+d*o,l=l*g+f*o,h=h*g+p*o,u=u*g+_*o}else{c=c*g+d*o,l=l*g+f*o,h=h*g+p*o,u=u*g+_*o;const x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-o*f,e[t+2]=l*p+h*f+o*d-c*u,e[t+3]=h*p-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new C,Zd=new kt;class Je{constructor(e,t,n,i,r,a,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],y=i[4],v=i[7],w=i[2],T=i[5],A=i[8];return r[0]=a*_+o*x+c*w,r[3]=a*m+o*y+c*T,r[6]=a*g+o*v+c*A,r[1]=l*_+h*x+u*w,r[4]=l*m+h*y+u*T,r[7]=l*g+h*v+u*A,r[2]=d*_+f*x+p*w,r[5]=d*m+f*y+p*T,r[8]=d*g+f*v+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kl=new Je,Kd=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){const s={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ra("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ra("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jt]:{primaries:e,whitePoint:n,transfer:wa,toXYZ:Kd,fromXYZ:$d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Kd,fromXYZ:$d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}const nt=lx();function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let er;class Im{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=Aa("canvas")),er.width=e.width,er.height=e.height;const i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hx=0;class Hi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($l(i[a].image)):r.push($l(i[a]))}else r=$l(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function $l(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Im.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let ux=0;const Jl=new C;class bt extends di{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=sn,i=sn,r=xt,a=Dn,o=an,c=mn,l=bt.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=wn(),this.name="",this.source=new Hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==el)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=el;bt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(f+1)/2,w=(g+1)/2,T=(h+d)/4,A=(u+_)/4,M=(p+m)/4;return y>v&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=A/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=M/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=A/r,i=M/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new bt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Hi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends Vu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ul extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dx extends ln{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ul(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class dl extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fx extends ln{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new dl(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class ke{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,p,_,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,p,_,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,p=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,p=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,n){const i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Pi.crossVectors(n,yn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Pi.crossVectors(n,yn)),Pi.normalize(),eo.crossVectors(yn,Pi),i[0]=Pi.x,i[4]=eo.x,i[8]=yn.x,i[1]=Pi.y,i[5]=eo.y,i[9]=yn.y,i[2]=Pi.z,i[6]=eo.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],y=n[7],v=n[11],w=n[15],T=i[0],A=i[4],M=i[8],S=i[12],D=i[1],I=i[5],O=i[9],B=i[13],G=i[2],z=i[6],V=i[10],H=i[14],le=i[3],j=i[7],_e=i[11],ue=i[15];return r[0]=a*T+o*D+c*G+l*le,r[4]=a*A+o*I+c*z+l*j,r[8]=a*M+o*O+c*V+l*_e,r[12]=a*S+o*B+c*H+l*ue,r[1]=h*T+u*D+d*G+f*le,r[5]=h*A+u*I+d*z+f*j,r[9]=h*M+u*O+d*V+f*_e,r[13]=h*S+u*B+d*H+f*ue,r[2]=p*T+_*D+m*G+g*le,r[6]=p*A+_*I+m*z+g*j,r[10]=p*M+_*O+m*V+g*_e,r[14]=p*S+_*B+m*H+g*ue,r[3]=x*T+y*D+v*G+w*le,r[7]=x*A+y*I+v*z+w*j,r[11]=x*M+y*O+v*V+w*_e,r[15]=x*S+y*B+v*H+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],x=c*f-l*d,y=o*f-l*u,v=o*d-c*u,w=a*f-l*h,T=a*d-c*h,A=a*u-o*h;return t*(_*x-m*y+g*v)-n*(p*x-m*w+g*T)+i*(p*y-_*w+g*A)-r*(p*v-_*T+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=t*o-n*a,y=t*c-i*a,v=t*l-r*a,w=n*c-i*o,T=n*l-r*o,A=i*l-r*c,M=h*_-u*p,S=h*m-d*p,D=h*g-f*p,I=u*m-d*_,O=u*g-f*_,B=d*g-f*m,G=x*B-y*O+v*I+w*D-T*S+A*M;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=(o*B-c*O+l*I)*z,e[1]=(i*O-n*B-r*I)*z,e[2]=(_*A-m*T+g*w)*z,e[3]=(d*T-u*A-f*w)*z,e[4]=(c*D-a*B-l*S)*z,e[5]=(t*B-i*D+r*S)*z,e[6]=(m*v-p*A-g*y)*z,e[7]=(h*A-d*v+f*y)*z,e[8]=(a*O-o*D+l*M)*z,e[9]=(n*D-t*O-r*M)*z,e[10]=(p*T-_*v+g*x)*z,e[11]=(u*v-h*T-f*x)*z,e[12]=(o*S-a*I-c*M)*z,e[13]=(t*I-n*S+i*M)*z,e[14]=(_*y-p*w-m*x)*z,e[15]=(h*w-u*y+d*x)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,p=r*u,_=a*h,m=a*u,g=o*u,x=c*l,y=c*h,v=c*u,w=n.x,T=n.y,A=n.z;return i[0]=(1-(_+g))*w,i[1]=(f+v)*w,i[2]=(p-y)*w,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(d+g))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(p+y)*A,i[9]=(m-x)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=tr.set(i[0],i[1],i[2]).length();const o=tr.set(i[4],i[5],i[6]).length(),c=tr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),kn.copy(this);const l=1/a,h=1/o,u=1/c;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=Tn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(c)p=r/(a-r),_=a*r/(a-r);else if(o===Tn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Fs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Tn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,_;if(c)p=1/(a-r),_=a/(a-r);else if(o===Tn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Fs)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new C,kn=new ke,px=new C(0,0,0),mx=new C(1,1,1),Pi=new C,eo=new C,yn=new C,Jd=new ke,jd=new kt;class En{constructor(e=0,t=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const Qd=new C,nr=new kt,mi=new ke,to=new C,Xr=new C,_x=new C,xx=new kt,ef=new C(1,0,0),tf=new C(0,1,0),nf=new C(0,0,1),sf={type:"added"},vx={type:"removed"},ir={type:"childadded",child:null},jl={type:"childremoved",child:null};class st extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new C,t=new En,n=new kt,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Je}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Xr,to,this.up):mi.lookAt(to,Xr,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),nr.setFromRotationMatrix(mi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),ir.child=e,this.dispatchEvent(ir),ir.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vx),jl.child=e,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new C(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class si extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yx={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ql(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=ku(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ql(a,r,e+1/3),this.g=Ql(a,r,e),this.b=Ql(a,r,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Pm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return nt.workingToColorSpace($t.copy(this),e),Math.round(Ze($t.r*255,0,255))*65536+Math.round(Ze($t.g*255,0,255))*256+Math.round(Ze($t.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace($t.copy(this),t);const n=$t.r,i=$t.g,r=$t.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ft){nt.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,i=$t.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(no);const n=va(Di.h,no.h,t),i=va(Di.s,no.s,t),r=va(Di.l,no.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new ve;ve.NAMES=Pm;class pl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new pl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ml{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Hu=class extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const zn=new C,gi=new C,eh=new C,_i=new C,sr=new C,rr=new C,rf=new C,th=new C,nh=new C,ih=new C,sh=new ht,rh=new ht,ah=new ht;class gn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),gi.subVectors(n,t),eh.subVectors(e,t);const a=zn.dot(zn),o=zn.dot(gi),c=zn.dot(eh),l=gi.dot(gi),h=gi.dot(eh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(o,_i.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return sh.setScalar(0),rh.setScalar(0),ah.setScalar(0),sh.fromBufferAttribute(e,t),rh.fromBufferAttribute(e,n),ah.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(sh,r.x),a.addScaledVector(rh,r.y),a.addScaledVector(ah,r.z),a}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),gi.subVectors(e,t),zn.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),zn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;sr.subVectors(i,n),rr.subVectors(r,n),th.subVectors(e,n);const c=sr.dot(th),l=rr.dot(th);if(c<=0&&l<=0)return t.copy(n);nh.subVectors(e,i);const h=sr.dot(nh),u=rr.dot(nh);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(sr,a);ih.subVectors(e,r);const f=sr.dot(ih),p=rr.dot(ih);if(p>=0&&f<=p)return t.copy(r);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(rr,o);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return rf.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(rf,o);const g=1/(m+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(sr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(e.matrixWorld),this.union(io)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),so.subVectors(this.max,qr),ar.subVectors(e.a,qr),or.subVectors(e.b,qr),cr.subVectors(e.c,qr),Li.subVectors(or,ar),Ni.subVectors(cr,or),rs.subVectors(ar,cr);let t=[0,-Li.z,Li.y,0,-Ni.z,Ni.y,0,-rs.z,rs.y,Li.z,0,-Li.x,Ni.z,0,-Ni.x,rs.z,0,-rs.x,-Li.y,Li.x,0,-Ni.y,Ni.x,0,-rs.y,rs.x,0];return!oh(t,ar,or,cr,so)||(t=[1,0,0,0,1,0,0,0,1],!oh(t,ar,or,cr,so))?!1:(ro.crossVectors(Li,Ni),t=[ro.x,ro.y,ro.z],oh(t,ar,or,cr,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new C,new C,new C,new C,new C,new C,new C,new C],Vn=new C,io=new Pt,ar=new C,or=new C,cr=new C,Li=new C,Ni=new C,rs=new C,qr=new C,so=new C,ro=new C,as=new C;function oh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){as.fromArray(s,r);const o=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),c=e.dot(as),l=t.dot(as),h=n.dot(as);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ti=Mx();function Mx(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function fn(s){Math.abs(s)>65504&&Me("DataUtils.toHalfFloat(): Value out of range."),s=Ze(s,-65504,65504),Ti.floatView[0]=s;const e=Ti.uint32View[0],t=e>>23&511;return Ti.baseTable[t]+((e&8388607)>>Ti.shiftTable[t])}function oa(s){const e=s>>10;return Ti.uint32View[0]=Ti.mantissaTable[Ti.offsetTable[e]+(s&1023)]+Ti.exponentTable[e],Ti.floatView[0]}class bx{static toHalfFloat(e){return fn(e)}static fromHalfFloat(e){return oa(e)}}const Nt=new C,ao=new J;let Sx=0;class ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ea&&(e.usage=this.usage),e}}class Tx extends ut{constructor(e,t,n){super(new Int8Array(e),t,n)}}class wx extends ut{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Ex extends ut{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Ax extends ut{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Gu extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cx extends ut{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Wu extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rx extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=oa(this.array[e*this.itemSize]);return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=fn(t),this}getY(e){let t=oa(this.array[e*this.itemSize+1]);return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=fn(t),this}getZ(e){let t=oa(this.array[e*this.itemSize+2]);return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=fn(t),this}getW(e){let t=oa(this.array[e*this.itemSize+3]);return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=fn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=fn(t),this.array[e+1]=fn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=fn(t),this.array[e+1]=fn(n),this.array[e+2]=fn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=fn(t),this.array[e+1]=fn(n),this.array[e+2]=fn(i),this.array[e+3]=fn(r),this}}class Re extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ix=new Pt,Yr=new C,ch=new C;class Dt{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ix.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(ch)),this.expandByPoint(Yr.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Px=0;const An=new ke,lh=new st,lr=new C,Mn=new Pt,Zr=new Pt,Wt=new C;class $e extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V_(e)?Wu:Gu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Mn.min,Zr.min),Mn.expandByPoint(Wt),Wt.addVectors(Mn.max,Zr.max),Mn.expandByPoint(Wt)):(Mn.expandByPoint(Zr.min),Mn.expandByPoint(Zr.max))}Mn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Wt.fromBufferAttribute(o,l),c&&(lr.fromBufferAttribute(e,l),Wt.add(lr)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let M=0;M<n.count;M++)o[M]=new C,c[M]=new C;const l=new C,h=new C,u=new C,d=new J,f=new J,p=new J,_=new C,m=new C;function g(M,S,D){l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,D),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,D),h.sub(l),u.sub(l),f.sub(d),p.sub(d);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[M].add(_),o[S].add(_),o[D].add(_),c[M].add(m),c[S].add(m),c[D].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let M=0,S=x.length;M<S;++M){const D=x[M],I=D.start,O=D.count;for(let B=I,G=I+O;B<G;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new C,v=new C,w=new C,T=new C;function A(M){w.fromBufferAttribute(i,M),T.copy(w);const S=o[M];y.copy(S),y.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(T,S);const I=v.dot(c[M])<0?-1:1;a.setXYZW(M,y.x,y.y,y.z,I)}for(let M=0,S=x.length;M<S;++M){const D=x[M],I=D.start,O=D.count;for(let B=I,G=I+O;B<G;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new ut(d,h,u)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $e,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ga{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new C;class Ji{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ji(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Dx=0;class zt extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Ps,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xu extends zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hr;const Kr=new C,ur=new C,dr=new C,fr=new J,$r=new J,Dm=new ke,oo=new C,Jr=new C,co=new C,af=new J,hh=new J,of=new J;class Lm extends st{constructor(e=new Xu){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new $e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ga(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Ji(n,3,0,!1)),hr.setAttribute("uv",new Ji(n,2,3,!1))}this.geometry=hr,this.material=e,this.center=new J(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Dm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;lo(oo.set(-.5,-.5,0),dr,a,ur,i,r),lo(Jr.set(.5,-.5,0),dr,a,ur,i,r),lo(co.set(.5,.5,0),dr,a,ur,i,r),af.set(0,0),hh.set(1,0),of.set(1,1);let o=e.ray.intersectTriangle(oo,Jr,co,!1,Kr);if(o===null&&(lo(Jr.set(-.5,.5,0),dr,a,ur,i,r),hh.set(0,1),o=e.ray.intersectTriangle(oo,co,Jr,!1,Kr),o===null))return;const c=e.ray.origin.distanceTo(Kr);c<e.near||c>e.far||t.push({distance:c,point:Kr.clone(),uv:gn.getInterpolation(Kr,oo,Jr,co,af,hh,of,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function lo(s,e,t,n,i,r){fr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?($r.x=r*fr.x-i*fr.y,$r.y=i*fr.x+r*fr.y):$r.copy(fr),s.copy(e),s.x+=$r.x,s.y+=$r.y,s.applyMatrix4(Dm)}const ho=new C,cf=new C;class Nm extends st{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){ho.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(ho);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){ho.setFromMatrixPosition(e.matrixWorld),cf.setFromMatrixPosition(this.matrixWorld);const n=ho.distanceTo(cf)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const vi=new C,uh=new C,uo=new C,Ui=new C,dh=new C,fo=new C,fh=new C;class Ai{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uh.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(uh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(uo),o=Ui.dot(this.direction),c=-Ui.dot(uo),l=Ui.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*c-o,d=a*o-c,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uh).addScaledVector(uo,d),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),i=vi.dot(vi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,i,r){dh.subVectors(t,e),fo.subVectors(n,e),fh.crossVectors(dh,fo);let a=this.direction.dot(fh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);const c=o*this.direction.dot(fo.crossVectors(Ui,fo));if(c<0)return null;const l=o*this.direction.dot(dh.cross(Ui));if(l<0||c+l>a)return null;const h=-o*Ui.dot(fh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on extends zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lf=new ke,os=new Ai,po=new Dt,hf=new C,mo=new C,go=new C,_o=new C,ph=new C,xo=new C,uf=new C,vo=new C;class St extends st{constructor(e=new $e,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ph.fromBufferAttribute(u,e),a?xo.addScaledVector(ph,h):xo.addScaledVector(ph.sub(t),h))}t.add(xo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(po.containsPoint(os.origin)===!1&&(os.intersectSphere(po,hf)===null||os.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(lf.copy(r).invert(),os.copy(e.ray).applyMatrix4(lf),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=y;v<w;v+=3){const T=o.getX(v),A=o.getX(v+1),M=o.getX(v+2);i=yo(this,g,e,n,l,h,u,T,A,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);i=yo(this,a,e,n,l,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=y;v<w;v+=3){const T=v,A=v+1,M=v+2;i=yo(this,g,e,n,l,h,u,T,A,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=m,y=m+1,v=m+2;i=yo(this,a,e,n,l,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Lx(s,e,t,n,i,r,a,o){let c;if(e.side===cn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ci,o),c===null)return null;vo.copy(o),vo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(vo);return l<t.near||l>t.far?null:{distance:l,point:vo.clone(),object:s}}function yo(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,mo),s.getVertexPosition(c,go),s.getVertexPosition(l,_o);const h=Lx(s,e,t,n,mo,go,_o,uf);if(h){const u=new C;gn.getBarycoord(uf,mo,go,_o,u),i&&(h.uv=gn.getInterpolatedAttribute(i,o,c,l,u,new J)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,c,l,u,new J)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};gn.getNormal(mo,go,_o,d.normal),h.face=d,h.barycoord=u}return h}const df=new C,ff=new ht,pf=new ht,Nx=new C,mf=new ke,Mo=new C,mh=new Dt,gf=new ke,gh=new Ai;class qu extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingBox.expandByPoint(Mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingSphere.expandByPoint(Mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mh.copy(this.boundingSphere),mh.applyMatrix4(i),e.ray.intersectsSphere(mh)!==!1&&(gf.copy(i).invert(),gh.copy(e.ray).applyMatrix4(gf),!(this.boundingBox!==null&&gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ff.fromBufferAttribute(i.attributes.skinIndex,e),pf.fromBufferAttribute(i.attributes.skinWeight,e),df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=pf.getComponent(r);if(a!==0){const o=ff.getComponent(r);mf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Nx.copy(df).applyMatrix4(mf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gl extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qn extends bt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Et,h=Et,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _f=new ke,Ux=new ke;class Wa{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ux;_f.multiplyMatrices(o,t[r]),_f.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Wa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qn(t,e,e,an,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Me("Skeleton: No bone found with UUID:",r),a=new gl),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Bs extends ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pr=new ke,xf=new ke,bo=[],vf=new Pt,Ox=new ke,jr=new St,Qr=new Dt;class Yu extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ox)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),vf.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(vf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),Qr.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,pr),xf.multiplyMatrices(n,pr),jr.matrixWorld=xf,jr.raycast(e,bo);for(let a=0,o=bo.length;a<o;a++){const c=bo[a];c.instanceId=r,c.object=this,t.push(c)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qn(new Float32Array(i*this.count),i,this.count,rl,rn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _h=new C,Fx=new C,Bx=new Je;class bi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_h.subVectors(n,t).cross(Fx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_h),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bx.getNormalMatrix(e),i=this.coplanarPoint(_h).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Dt,kx=new J(.5,.5),So=new C;class Vr{constructor(e=new bi,t=new bi,n=new bi,i=new bi,r=new bi,a=new bi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],x=r[12],y=r[13],v=r[14],w=r[15];if(i[0].setComponents(l-a,f-h,g-p,w-x).normalize(),i[1].setComponents(l+a,f+h,g+p,w+x).normalize(),i[2].setComponents(l+o,f+u,g+_,w+y).normalize(),i[3].setComponents(l-o,f-u,g-_,w-y).normalize(),n)i[4].setComponents(c,d,m,v).normalize(),i[5].setComponents(l-c,f-d,g-m,w-v).normalize();else if(i[4].setComponents(l-c,f-d,g-m,w-v).normalize(),t===Tn)i[5].setComponents(l+c,f+d,g+m,w+v).normalize();else if(t===Fs)i[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=kx.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(So.x=i.normal.x>0?e.max.x:e.min.x,So.y=i.normal.y>0?e.max.y:e.min.y,So.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const jn=new ke,Qn=new Vr;class _l{constructor(){this.coordinateSystem=Tn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Qn.setFromProjectionMatrix(jn,i.coordinateSystem,i.reversedDepth),Qn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Qn.setFromProjectionMatrix(jn,i.coordinateSystem,i.reversedDepth),Qn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Qn.setFromProjectionMatrix(jn,i.coordinateSystem,i.reversedDepth),Qn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Qn.setFromProjectionMatrix(jn,i.coordinateSystem,i.reversedDepth),Qn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Qn.setFromProjectionMatrix(jn,i.coordinateSystem,i.reversedDepth),Qn.containsPoint(e))return!0}return!1}clone(){return new _l}}function xh(s,e){return s-e}function zx(s,e){return s.z-e.z}function Vx(s,e){return e.z-s.z}class Hx{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const un=new ke,Gx=new ve(1,1,1),yf=new Vr,Wx=new _l,To=new Pt,ls=new Dt,ea=new C,Mf=new C,Xx=new C,vh=new Hx,Jt=new St,wo=[];function qx(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function hs(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class Um extends St{constructor(e,t,n=t*2,i){super(new $e,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new qn(t,e,e,an,rn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new qn(t,e,e,Ha,Ln);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new qn(t,e,e,an,rn);n.colorSpace=nt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:c,normalized:l}=a,h=new o.constructor(n*c),u=new ut(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new ut(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,un),this.getBoundingBoxAt(r,To).applyMatrix4(un),e.union(To)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,un),this.getBoundingSphereAt(r,ls).applyMatrix4(un),e.union(ls)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(xh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;un.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Gx.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(xh),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);qx(u,d,c);const f=u.itemSize;for(let p=u.count,_=l;p<_;p++){const m=c+p;for(let g=0;g<f;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,c+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,c);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const c=i[a],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=r.index,p=f.array,_=e-u;for(let m=h;m<h+d;m++)p[m]=p[m]+_;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),f.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=l,d=r.attributes;for(const f in d){const p=d[f],{array:_,itemSize:m}=p;_.copyWithin(e*m,h*m,(h+u)*m),p.addUpdateRange(e*m,u*m),p.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new Pt,a=n.index,o=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;a&&(h=a.getX(h)),r.expandByPoint(ea.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new Dt;this.getBoundingBoxAt(e,To),To.getCenter(r.center);const a=n.index,o=n.attributes.position;let c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;a&&(u=a.getX(u)),ea.fromBufferAttribute(o,u),c=Math.max(c,r.center.distanceToSquared(ea))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(xh);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);hs(this._multiDrawCounts,i),hs(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),hs(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),hs(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),hs(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new $e,this._initializeGeometry(r));const a=this.geometry;r.index&&hs(r.index.array,a.index.array);for(const o in r.attributes)hs(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Jt.material=this.material,Jt.geometry.index=a.index,Jt.geometry.attributes=a.attributes,Jt.geometry.boundingBox===null&&(Jt.geometry.boundingBox=new Pt),Jt.geometry.boundingSphere===null&&(Jt.geometry.boundingSphere=new Dt);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,h=i[l];Jt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Jt.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Jt.geometry.boundingBox),this.getBoundingSphereAt(l,Jt.geometry.boundingSphere),Jt.raycast(e,wo);for(let u=0,d=wo.length;u<d;u++){const f=wo[u];f.object=this,f.batchId=o,t.push(f)}wo.length=0}Jt.material=null,Jt.geometry.index=null,Jt.geometry.attributes={},Jt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,c=1;r.wireframe&&(c=2,o=i.attributes.position.count>65535?4:2);const l=this._instanceInfo,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,m=n.isArrayCamera?Wx:yf;f&&!n.isArrayCamera&&(un.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),yf.setFromProjectionMatrix(un,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){un.copy(this.matrixWorld).invert(),ea.setFromMatrixPosition(n.matrixWorld).applyMatrix4(un),Mf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(un);for(let v=0,w=l.length;v<w;v++)if(l[v].visible&&l[v].active){const T=l[v].geometryIndex;this.getMatrixAt(v,un),this.getBoundingSphereAt(T,ls).applyMatrix4(un);let A=!1;if(f&&(A=!m.intersectsSphere(ls,n)),!A){const M=d[T],S=Xx.subVectors(ls.center,ea).dot(Mf);vh.push(M.start,M.count,S,v)}}const x=vh.list,y=this.customSort;y===null?x.sort(r.transparent?Vx:zx):y.call(this,x,n);for(let v=0,w=x.length;v<w;v++){const T=x[v];h[g]=T.start*o*c,u[g]=T.count*c,_[g]=T.index,g++}vh.reset()}else for(let x=0,y=l.length;x<y;x++)if(l[x].visible&&l[x].active){const v=l[x].geometryIndex;let w=!1;if(f&&(this.getMatrixAt(x,un),this.getBoundingSphereAt(v,ls).applyMatrix4(un),w=!m.intersectsSphere(ls,n)),!w){const T=d[v];h[g]=T.start*o*c,u[g]=T.count*c,_[g]=x,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class Qt extends zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qc=new C,Yc=new C,bf=new ke,ta=new Ai,Eo=new Dt,yh=new C,Sf=new C;class Ei extends st{constructor(e=new $e,t=new Qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)qc.fromBufferAttribute(t,i-1),Yc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qc.distanceTo(Yc);e.setAttribute("lineDistance",new Re(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;bf.copy(i).invert(),ta.copy(e.ray).applyMatrix4(bf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=l){const g=h.getX(_),x=h.getX(_+1),y=Ao(this,e,ta,c,g,x,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(f),g=Ao(this,e,ta,c,_,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=l){const g=Ao(this,e,ta,c,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Ao(this,e,ta,c,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ao(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(qc.fromBufferAttribute(o,i),Yc.fromBufferAttribute(o,r),t.distanceSqToSegment(qc,Yc,yh,Sf)>n)return;yh.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(yh);if(!(l<e.near||l>e.far))return{distance:l,point:Sf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Tf=new C,wf=new C;class Kn extends Ei{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Tf.fromBufferAttribute(t,i),wf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tf.distanceTo(wf);e.setAttribute("lineDistance",new Re(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zu extends Ei{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let xl=class extends zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Ef=new ke,iu=new Ai,Co=new Dt,Ro=new C;class Ku extends st{constructor(e=new $e,t=new xl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=r,e.ray.intersectsSphere(Co)===!1)return;Ef.copy(i).invert(),iu.copy(e.ray).applyMatrix4(Ef);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,_=f;p<_;p++){const m=l.getX(p);Ro.fromBufferAttribute(u,m),Af(Ro,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)Ro.fromBufferAttribute(u,p),Af(Ro,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Af(s,e,t,n,i,r,a){const o=iu.distanceSqToPoint(s);if(o<t){const c=new C;iu.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Om extends bt{constructor(e,t,n,i,r=xt,a=xt,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Yx extends Om{constructor(e,t,n,i,r,a,o,c){super({},e,t,n,i,r,a,o,c),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Zx extends bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Et,this.minFilter=Et,this.generateMipmaps=!1,this.needsUpdate=!0}}class vl extends bt{constructor(e,t,n,i,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Kx extends vl{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=sn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $x extends vl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,li),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Xa extends bt{constructor(e=[],t=li,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jx extends bt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Or extends bt{constructor(e,t,n=Ln,i,r,a,o=Et,c=Et,l,h=ui,u=1){if(h!==ui&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fm extends Or{constructor(e,t=Ln,n=li,i,r,a=Et,o=Et,c,l=ui){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $u extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qs extends $e{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function p(_,m,g,x,y,v,w,T,A,M,S){const D=v/A,I=w/M,O=v/2,B=w/2,G=T/2,z=A+1,V=M+1;let H=0,le=0;const j=new C;for(let _e=0;_e<V;_e++){const ue=_e*I-B;for(let xe=0;xe<z;xe++){const qe=xe*D-O;j[_]=qe*x,j[m]=ue*y,j[g]=G,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[g]=T>0?1:-1,h.push(j.x,j.y,j.z),u.push(xe/A),u.push(1-_e/M),H+=1}}for(let _e=0;_e<M;_e++)for(let ue=0;ue<A;ue++){const xe=d+ue+z*_e,qe=d+ue+z*(_e+1),rt=d+(ue+1)+z*(_e+1),ct=d+(ue+1)+z*_e;c.push(xe,qe,ct),c.push(qe,rt,ct),le+=6}o.addGroup(f,le,S),f+=le,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yl extends $e{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,_=i+1,m=new C,g=new C;for(let x=0;x<=p;x++){let y=0,v=0,w=0,T=0;if(x<=n){const S=x/n,D=S*Math.PI/2;v=-h-e*Math.cos(D),w=e*Math.sin(D),T=-e*Math.cos(D),y=S*u}else if(x<=n+r){const S=(x-n)/r;v=-h+S*t,w=e,T=0,y=u+S*d}else{const S=(x-n-r)/n,D=S*Math.PI/2;v=h+e*Math.sin(D),w=e*Math.cos(D),T=e*Math.sin(D),y=u+d+S*u}const A=Math.max(0,Math.min(1,y/f));let M=0;x===0?M=.5/i:x===p&&(M=-.5/i);for(let S=0;S<=i;S++){const D=S/i,I=D*Math.PI*2,O=Math.sin(I),B=Math.cos(I);g.x=-w*B,g.y=v,g.z=w*O,o.push(g.x,g.y,g.z),m.set(-w*B,T,w*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(D+M,A)}if(x>0){const S=(x-1)*_;for(let D=0;D<i;D++){const I=S+D,O=S+D+1,B=x*_+D,G=x*_+D+1;a.push(I,O,B),a.push(O,G,B)}}}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ml extends $e{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,h=new J;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qa extends $e{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],m=n/2;let g=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function x(){const v=new C,w=new C;let T=0;const A=(t-e)/n;for(let M=0;M<=r;M++){const S=[],D=M/r,I=D*(t-e)+e;for(let O=0;O<=i;O++){const B=O/i,G=B*c+o,z=Math.sin(G),V=Math.cos(G);w.x=I*z,w.y=-D*n+m,w.z=I*V,u.push(w.x,w.y,w.z),v.set(z,A,V).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-D),S.push(p++)}_.push(S)}for(let M=0;M<i;M++)for(let S=0;S<r;S++){const D=_[S][M],I=_[S+1][M],O=_[S+1][M+1],B=_[S][M+1];(e>0||S!==0)&&(h.push(D,I,B),T+=3),(t>0||S!==r-1)&&(h.push(I,O,B),T+=3)}l.addGroup(g,T,0),g+=T}function y(v){const w=p,T=new J,A=new C;let M=0;const S=v===!0?e:t,D=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*D,0),d.push(0,D,0),f.push(.5,.5),p++;const I=p;for(let O=0;O<=i;O++){const G=O/i*c+o,z=Math.cos(G),V=Math.sin(G);A.x=S*V,A.y=m*D,A.z=S*z,u.push(A.x,A.y,A.z),d.push(0,D,0),T.x=z*.5+.5,T.y=V*.5*D+.5,f.push(T.x,T.y),p++}for(let O=0;O<i;O++){const B=w+O,G=I+O;v===!0?h.push(G,G+1,B):h.push(G+1,G,B),M+=3}l.addGroup(g,M,v===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ya extends qa{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ya(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class es extends $e{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new C,v=new C,w=new C;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],v),f(t[T+2],w),c(y,v,w,x)}function c(x,y,v,w){const T=w+1,A=[];for(let M=0;M<=T;M++){A[M]=[];const S=x.clone().lerp(v,M/T),D=y.clone().lerp(v,M/T),I=T-M;for(let O=0;O<=I;O++)O===0&&M===T?A[M][O]=S:A[M][O]=S.clone().lerp(D,O/I)}for(let M=0;M<T;M++)for(let S=0;S<2*(T-M)-1;S++){const D=Math.floor(S/2);S%2===0?(d(A[M][D+1]),d(A[M+1][D]),d(A[M][D])):(d(A[M][D+1]),d(A[M+1][D+1]),d(A[M+1][D]))}}function l(x){const y=new C;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new C;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,w=g(x)/Math.PI+.5;a.push(v,1-w)}p(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],v=a[x+2],w=a[x+4],T=Math.max(y,v,w),A=Math.min(y,v,w);T>.9&&A<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function p(){const x=new C,y=new C,v=new C,w=new C,T=new J,A=new J,M=new J;for(let S=0,D=0;S<r.length;S+=9,D+=6){x.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(a[D+0],a[D+1]),A.set(a[D+2],a[D+3]),M.set(a[D+4],a[D+5]),w.copy(x).add(y).add(v).divideScalar(3);const I=m(w);_(T,D+0,x,I),_(A,D+2,y,I),_(M,D+4,v,I)}}function _(x,y,v,w){w<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.vertices,e.indices,e.radius,e.detail)}}class bl extends es{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bl(e.radius,e.detail)}}const Io=new C,Po=new C,Mh=new C,Do=new gn;class Bm extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Ds*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:m,c:g}=Do;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),Do.getNormal(Mh),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const y=(x+1)%3,v=u[x],w=u[y],T=Do[h[x]],A=Do[h[y]],M=`${v}_${w}`,S=`${w}_${v}`;S in d&&d[S]?(Mh.dot(d[S].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[S]=null):M in d||(d[M]={index0:l[x],index1:l[y],normal:Mh.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:m}=d[p];Io.fromBufferAttribute(o,_),Po.fromBufferAttribute(o,m),f.push(Io.x,Io.y,Io.z),f.push(Po.x,Po.y,Po.z)}this.setAttribute("position",new Re(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new J:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,i=[],r=[],a=[],o=new C,c=new ke;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ze(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sl extends $n{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new J){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class km extends Sl{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ju(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Lo=new C,bh=new Ju,Sh=new Ju,Th=new Ju;class zm extends $n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Lo.subVectors(i[0],i[1]).add(i[0]),l=Lo);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Lo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),bh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,_,m),Sh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,_,m),Th.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Sh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Th.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(bh.calc(c),Sh.calc(c),Th.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cf(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function jx(s,e){const t=1-s;return t*t*e}function Qx(s,e){return 2*(1-s)*s*e}function ev(s,e){return s*s*e}function ya(s,e,t,n){return jx(s,e)+Qx(s,t)+ev(s,n)}function tv(s,e){const t=1-s;return t*t*t*e}function nv(s,e){const t=1-s;return 3*t*t*s*e}function iv(s,e){return 3*(1-s)*s*s*e}function sv(s,e){return s*s*s*e}function Ma(s,e,t,n,i){return tv(s,e)+nv(s,t)+iv(s,n)+sv(s,i)}class ju extends $n{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ma(e,i.x,r.x,a.x,o.x),Ma(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vm extends $n{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ma(e,i.x,r.x,a.x,o.x),Ma(e,i.y,r.y,a.y,o.y),Ma(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qu extends $n{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hm extends $n{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ed extends $n{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,i.x,r.x,a.x),ya(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends $n{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,i.x,r.x,a.x),ya(e,i.y,r.y,a.y),ya(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Cf(o,c.x,l.x,h.x,u.x),Cf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}var Zc=Object.freeze({__proto__:null,ArcCurve:km,CatmullRomCurve3:zm,CubicBezierCurve:ju,CubicBezierCurve3:Vm,EllipseCurve:Sl,LineCurve:Qu,LineCurve3:Hm,QuadraticBezierCurve:ed,QuadraticBezierCurve3:td,SplineCurve:nd});class Gm extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Zc[i.type]().fromJSON(i))}return this}}class Kc extends Gm{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Qu(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ed(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new ju(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new nd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new Sl(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ls extends Kc{constructor(e){super(e),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Kc().fromJSON(i))}return this}}function rv(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Wm(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=hv(s,e,r,t)),s.length>80*t){o=s[0],c=s[1];let h=o,u=c;for(let d=t;d<i;d+=t){const f=s[d],p=s[d+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Ia(r,a,t,o,c,l,0),a}function Wm(s,e,t,n,i){let r;if(i===Mv(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Rf(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Rf(a/n|0,s[a],s[a+1],r);return r&&Fr(r,r.next)&&(Da(r),r=r.next),r}function ks(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Fr(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Da(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ia(s,e,t,n,i,r,a){if(!s)return;!a&&r&&mv(s,n,i,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?ov(s,n,i,r):av(s)){e.push(c.i,s.i,l.i),Da(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=cv(ks(s),e),Ia(s,e,t,n,i,r,2)):a===2&&lv(s,e,t,n,i,r):Ia(ks(s),e,t,n,i,r,1);break}}}function av(s){const e=s.prev,t=s,n=s.next;if(Tt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,r,a),u=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ca(i,o,r,c,a,l,p.x,p.y)&&Tt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ov(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Tt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,c,l),p=Math.min(h,u,d),_=Math.max(o,c,l),m=Math.max(h,u,d),g=su(f,p,e,t,n),x=su(_,m,e,t,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=g&&v&&v.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==a&&ca(o,h,c,u,l,d,y.x,y.y)&&Tt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&ca(o,h,c,u,l,d,v.x,v.y)&&Tt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==a&&ca(o,h,c,u,l,d,y.x,y.y)&&Tt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&ca(o,h,c,u,l,d,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function cv(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Fr(n,i)&&qm(n,t,t.next,i)&&Pa(n,i)&&Pa(i,n)&&(e.push(n.i,t.i,i.i),Da(t),Da(t.next),t=s=i),t=t.next}while(t!==s);return ks(t)}function lv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xv(a,o)){let c=Ym(a,o);a=ks(a,a.next),c=ks(c,c.next),Ia(a,e,t,n,i,r,0),Ia(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function hv(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Wm(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(_v(l))}i.sort(uv);for(let r=0;r<i.length;r++)t=dv(i[r],t);return t}function uv(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function dv(s,e){const t=fv(s,e);if(!t)return e;const n=Ym(t,s);return ks(n,n.next),ks(t,t.next)}function fv(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(Fr(s,t))return t;do{if(Fr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Xm(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Pa(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&pv(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function pv(s,e){return Tt(s.prev,s,e.prev)<0&&Tt(e.next,s,s.next)<0}function mv(s,e,t,n){let i=s;do i.z===0&&(i.z=su(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,gv(i)}function gv(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function su(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function _v(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Xm(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function ca(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Xm(s,e,t,n,i,r,a,o)}function xv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!vv(s,e)&&(Pa(s,e)&&Pa(e,s)&&yv(s,e)&&(Tt(s.prev,s,e.prev)||Tt(s,e.prev,e))||Fr(s,e)&&Tt(s.prev,s,s.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Fr(s,e){return s.x===e.x&&s.y===e.y}function qm(s,e,t,n){const i=Uo(Tt(s,e,t)),r=Uo(Tt(s,e,n)),a=Uo(Tt(t,n,s)),o=Uo(Tt(t,n,e));return!!(i!==r&&a!==o||i===0&&No(s,t,e)||r===0&&No(s,n,e)||a===0&&No(t,s,n)||o===0&&No(t,e,n))}function No(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Uo(s){return s>0?1:s<0?-1:0}function vv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&qm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Pa(s,e){return Tt(s.prev,s,s.next)<0?Tt(s,e,s.next)>=0&&Tt(s,s.prev,e)>=0:Tt(s,e,s.prev)<0||Tt(s,s.next,e)<0}function yv(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ym(s,e){const t=ru(s.i,s.x,s.y),n=ru(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rf(s,e,t,n){const i=ru(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Da(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ru(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mv(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class bv{static triangulate(e,t,n=2){return rv(e,t,n)}}class Wn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Wn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];If(e),Pf(n,e);let a=e.length;t.forEach(If);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Pf(n,t[c]);const o=bv.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function If(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Pf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Tl extends $e{constructor(e=new Ls([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Sv;let y,v=!1,w,T,A,M;if(g){y=g.getSpacedPoints(h),v=!0,d=!1;const ee=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,ee),T=new C,A=new C,M=new C}d||(m=0,f=0,p=0,_=0);const S=o.extractPoints(l);let D=S.shape;const I=S.holes;if(!Wn.isClockWise(D)){D=D.reverse();for(let ee=0,oe=I.length;ee<oe;ee++){const ne=I[ee];Wn.isClockWise(ne)&&(I[ee]=ne.reverse())}}function B(ee){const ne=10000000000000001e-36;let be=ee[0];for(let P=1;P<=ee.length;P++){const He=P%ee.length,Se=ee[He],ze=Se.x-be.x,pe=Se.y-be.y,R=ze*ze+pe*pe,b=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs(be.x),Math.abs(be.y)),U=ne*b*b;if(R<=U){ee.splice(He,1),P--;continue}be=Se}}B(D),I.forEach(B);const G=I.length,z=D;for(let ee=0;ee<G;ee++){const oe=I[ee];D=D.concat(oe)}function V(ee,oe,ne){return oe||Be("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(oe,ne)}const H=D.length;function le(ee,oe,ne){let be,P,He;const Se=ee.x-oe.x,ze=ee.y-oe.y,pe=ne.x-ee.x,R=ne.y-ee.y,b=Se*Se+ze*ze,U=Se*R-ze*pe;if(Math.abs(U)>Number.EPSILON){const $=Math.sqrt(b),W=Math.sqrt(pe*pe+R*R),k=oe.x-ze/$,se=oe.y+Se/$,K=ne.x-R/W,ge=ne.y+pe/W,Ie=((K-k)*R-(ge-se)*pe)/(Se*R-ze*pe);be=k+Se*Ie-ee.x,P=se+ze*Ie-ee.y;const ie=be*be+P*P;if(ie<=2)return new J(be,P);He=Math.sqrt(ie/2)}else{let $=!1;Se>Number.EPSILON?pe>Number.EPSILON&&($=!0):Se<-Number.EPSILON?pe<-Number.EPSILON&&($=!0):Math.sign(ze)===Math.sign(R)&&($=!0),$?(be=-ze,P=Se,He=Math.sqrt(b)):(be=Se,P=ze,He=Math.sqrt(b/2))}return new J(be/He,P/He)}const j=[];for(let ee=0,oe=z.length,ne=oe-1,be=ee+1;ee<oe;ee++,ne++,be++)ne===oe&&(ne=0),be===oe&&(be=0),j[ee]=le(z[ee],z[ne],z[be]);const _e=[];let ue,xe=j.concat();for(let ee=0,oe=G;ee<oe;ee++){const ne=I[ee];ue=[];for(let be=0,P=ne.length,He=P-1,Se=be+1;be<P;be++,He++,Se++)He===P&&(He=0),Se===P&&(Se=0),ue[be]=le(ne[be],ne[He],ne[Se]);_e.push(ue),xe=xe.concat(ue)}let qe;if(m===0)qe=Wn.triangulateShape(z,I);else{const ee=[],oe=[];for(let ne=0;ne<m;ne++){const be=ne/m,P=f*Math.cos(be*Math.PI/2),He=p*Math.sin(be*Math.PI/2)+_;for(let Se=0,ze=z.length;Se<ze;Se++){const pe=V(z[Se],j[Se],He);Oe(pe.x,pe.y,-P),be===0&&ee.push(pe)}for(let Se=0,ze=G;Se<ze;Se++){const pe=I[Se];ue=_e[Se];const R=[];for(let b=0,U=pe.length;b<U;b++){const $=V(pe[b],ue[b],He);Oe($.x,$.y,-P),be===0&&R.push($)}be===0&&oe.push(R)}}qe=Wn.triangulateShape(ee,oe)}const rt=qe.length,ct=p+_;for(let ee=0;ee<H;ee++){const oe=d?V(D[ee],xe[ee],ct):D[ee];v?(A.copy(w.normals[0]).multiplyScalar(oe.x),T.copy(w.binormals[0]).multiplyScalar(oe.y),M.copy(y[0]).add(A).add(T),Oe(M.x,M.y,M.z)):Oe(oe.x,oe.y,0)}for(let ee=1;ee<=h;ee++)for(let oe=0;oe<H;oe++){const ne=d?V(D[oe],xe[oe],ct):D[oe];v?(A.copy(w.normals[ee]).multiplyScalar(ne.x),T.copy(w.binormals[ee]).multiplyScalar(ne.y),M.copy(y[ee]).add(A).add(T),Oe(M.x,M.y,M.z)):Oe(ne.x,ne.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){const oe=ee/m,ne=f*Math.cos(oe*Math.PI/2),be=p*Math.sin(oe*Math.PI/2)+_;for(let P=0,He=z.length;P<He;P++){const Se=V(z[P],j[P],be);Oe(Se.x,Se.y,u+ne)}for(let P=0,He=I.length;P<He;P++){const Se=I[P];ue=_e[P];for(let ze=0,pe=Se.length;ze<pe;ze++){const R=V(Se[ze],ue[ze],be);v?Oe(R.x,R.y+y[h-1].y,y[h-1].x+ne):Oe(R.x,R.y,u+ne)}}}Q(),fe();function Q(){const ee=i.length/3;if(d){let oe=0,ne=H*oe;for(let be=0;be<rt;be++){const P=qe[be];Ne(P[2]+ne,P[1]+ne,P[0]+ne)}oe=h+m*2,ne=H*oe;for(let be=0;be<rt;be++){const P=qe[be];Ne(P[0]+ne,P[1]+ne,P[2]+ne)}}else{for(let oe=0;oe<rt;oe++){const ne=qe[oe];Ne(ne[2],ne[1],ne[0])}for(let oe=0;oe<rt;oe++){const ne=qe[oe];Ne(ne[0]+H*h,ne[1]+H*h,ne[2]+H*h)}}n.addGroup(ee,i.length/3-ee,0)}function fe(){const ee=i.length/3;let oe=0;he(z,oe),oe+=z.length;for(let ne=0,be=I.length;ne<be;ne++){const P=I[ne];he(P,oe),oe+=P.length}n.addGroup(ee,i.length/3-ee,1)}function he(ee,oe){let ne=ee.length;for(;--ne>=0;){const be=ne;let P=ne-1;P<0&&(P=ee.length-1);for(let He=0,Se=h+m*2;He<Se;He++){const ze=H*He,pe=H*(He+1),R=oe+be+ze,b=oe+P+ze,U=oe+P+pe,$=oe+be+pe;Le(R,b,U,$)}}}function Oe(ee,oe,ne){c.push(ee),c.push(oe),c.push(ne)}function Ne(ee,oe,ne){at(ee),at(oe),at(ne);const be=i.length/3,P=x.generateTopUV(n,i,be-3,be-2,be-1);Ke(P[0]),Ke(P[1]),Ke(P[2])}function Le(ee,oe,ne,be){at(ee),at(oe),at(be),at(oe),at(ne),at(be);const P=i.length/3,He=x.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);Ke(He[0]),Ke(He[1]),Ke(He[3]),Ke(He[1]),Ke(He[2]),Ke(He[3])}function at(ee){i.push(c[ee*3+0]),i.push(c[ee*3+1]),i.push(c[ee*3+2])}function Ke(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Zc[i.type]().fromJSON(i)),new Tl(n,e.options)}}const Sv={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new J(r,a),new J(o,c),new J(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new J(a,1-c),new J(l,1-u),new J(d,1-p),new J(_,1-g)]:[new J(o,1-c),new J(h,1-u),new J(f,1-p),new J(m,1-g)]}};function Tv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class wl extends es{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wl(e.radius,e.detail)}}class El extends $e{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ze(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new C,d=new J,f=new C,p=new C,_=new C;let m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let x=0;x<=t;x++){const y=n+x*h*i,v=Math.sin(y),w=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*v,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),d.x=x/t,d.y=T/(e.length-1),o.push(d.x,d.y);const A=c[3*T+0]*v,M=c[3*T+1],S=c[3*T+0]*w;l.push(A,M,S)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const v=y+x*e.length,w=v,T=v+e.length,A=v+e.length+1,M=v+1;r.push(w,T,M),r.push(A,M,T)}this.setIndex(r),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.points,e.segments,e.phiStart,e.phiLength)}}class Za extends es{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Za(e.radius,e.detail)}}class Ys extends $e{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const x=g*d-a;for(let y=0;y<l;y++){const v=y*u-r;p.push(v,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<o;x++){const y=x+l*g,v=x+l*(g+1),w=x+1+l*(g+1),T=x+1+l*g;f.push(y,v,T),f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}class Al extends $e{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new C,p=new J;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=r+m/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const x=g+m,y=x,v=x+n+1,w=x+n+2,T=x+1;o.push(y,v,T),o.push(v,w,T)}}this.setIndex(o),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cl extends $e{constructor(e=new Ls([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(a,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;Wn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const x=p[m];Wn.isClockWise(x)===!0&&(p[m]=x.reverse())}const _=Wn.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const x=p[m];f=f.concat(x)}for(let m=0,g=f.length;m<g;m++){const x=f[m];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,g=_.length;m<g;m++){const x=_[m],y=x[0]+u,v=x[1]+u,w=x[2]+u;n.push(y,v,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return wv(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Cl(n,e.curveSegments)}}function wv(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Ka extends $e{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new C,d=new C,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const x=[],y=g/n;let v=0;g===0&&a===0?v=.5/t:g===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const T=w/t;u.x=-e*Math.cos(i+T*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+T*r)*Math.sin(a+y*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-y),x.push(l++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const y=h[g][x+1],v=h[g][x],w=h[g+1][x],T=h[g+1][x+1];(g!==0||a>0)&&f.push(y,v,T),(g!==n-1||c<Math.PI)&&f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rl extends es{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rl(e.radius,e.detail)}}class Il extends $e{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],u=[],d=new C,f=new C,p=new C;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let g=0;g<=i;g++){const x=g/i*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const g=(i+1)*_+m-1,x=(i+1)*(_-1)+m-1,y=(i+1)*(_-1)+m,v=(i+1)*_+m;c.push(g,x,v),c.push(x,y,v)}this.setIndex(c),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pl extends $e{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],h=[],u=new C,d=new C,f=new C,p=new C,_=new C,m=new C,g=new C;for(let y=0;y<=n;++y){const v=y/n*r*Math.PI*2;x(v,r,a,e,f),x(v+.01,r,a,e,p),m.subVectors(p,f),g.addVectors(p,f),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let w=0;w<=i;++w){const T=w/i*Math.PI*2,A=-t*Math.cos(T),M=t*Math.sin(T);u.x=f.x+(A*g.x+M*_.x),u.y=f.y+(A*g.y+M*_.y),u.z=f.z+(A*g.z+M*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(w/i)}}for(let y=1;y<=n;y++)for(let v=1;v<=i;v++){const w=(i+1)*(y-1)+(v-1),T=(i+1)*y+(v-1),A=(i+1)*y+v,M=(i+1)*(y-1)+v;o.push(w,T,M),o.push(T,A,M)}this.setIndex(o),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(h,2));function x(y,v,w,T,A){const M=Math.cos(y),S=Math.sin(y),D=w/v*y,I=Math.cos(D);A.x=T*(2+I)*.5*M,A.y=T*(2+I)*S*.5,A.z=T*Math.sin(D)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Dl extends $e{constructor(e=new td(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,c=new C,l=new J;let h=new C;const u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),x(),g()}function m(y){h=e.getPointAt(y/t,h);const v=a.normals[y],w=a.binormals[y];for(let T=0;T<=i;T++){const A=T/i*Math.PI*2,M=Math.sin(A),S=-Math.cos(A);c.x=S*v.x+M*w.x,c.y=S*v.y+M*w.y,c.z=S*v.z+M*w.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function g(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const w=(i+1)*(y-1)+(v-1),T=(i+1)*y+(v-1),A=(i+1)*y+v,M=(i+1)*(y-1)+v;p.push(w,T,M),p.push(T,A,M)}}function x(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)l.x=y/t,l.y=v/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Dl(new Zc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Zm extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new C,r=new C;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let p=d,_=d+f;p<_;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),x=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,x),Df(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Df(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Df(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Lf=Object.freeze({__proto__:null,BoxGeometry:qs,CapsuleGeometry:yl,CircleGeometry:Ml,ConeGeometry:Ya,CylinderGeometry:qa,DodecahedronGeometry:bl,EdgesGeometry:Bm,ExtrudeGeometry:Tl,IcosahedronGeometry:wl,LatheGeometry:El,OctahedronGeometry:Za,PlaneGeometry:Ys,PolyhedronGeometry:es,RingGeometry:Al,ShapeGeometry:Cl,SphereGeometry:Ka,TetrahedronGeometry:Rl,TorusGeometry:Il,TorusKnotGeometry:Pl,TubeGeometry:Dl,WireframeGeometry:Zm});class Km extends zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Br(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(s){const e={};for(let t=0;t<s.length;t++){const n=Br(s[t]);for(const i in n)e[i]=n[i]}return e}function Ev(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $m(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const id={clone:Br,merge:tn};var Av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Av,this.fragmentShader=Cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=Ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sd extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $a extends zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends $a{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Jm extends zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jm extends zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Qm extends zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class eg extends zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ll extends zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rd extends zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tg extends zt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ng extends Qt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Cs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ig(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function au(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function ad(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function Rv(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(!(p<t||p>=n)){u.push(l.times[f]);for(let _=0;_<h;++_)d.push(l.values[f*h+_])}}u.length!==0&&(l.times=Cs(u,l.times.constructor),l.values=Cs(d,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function Iv(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const g=h,x=u-h;_=o.values.slice(g,x)}else if(r>=o.times[p]){const g=p*u+h,x=g+u-h;_=o.values.slice(g,x)}else{const g=o.createInterpolant(),x=h,y=u-h;g.evaluate(r),_=g.resultBuffer.slice(x,y)}c==="quaternion"&&new kt().fromArray(_).normalize().conjugate().toArray(_);const m=l.times.length;for(let g=0;g<m;++g){const x=g*f+d;if(c==="quaternion")kt.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const y=f-d*2;for(let v=0;v<y;++v)l.values[x+v]-=_[v]}}}return s.blendMode=Fu,s}class Pv{static convertArray(e,t){return Cs(e,t)}static isTypedArray(e){return Am(e)}static getKeyframeOrder(e){return ig(e)}static sortedArray(e,t,n){return au(e,t,n)}static flattenJSON(e,t,n,i){ad(e,t,n,i)}static subclip(e,t,n,i,r=30){return Rv(e,t,n,i,r)}static makeClipAdditive(e,t=0,n=e,i=30){return Iv(e,t,n,i)}}class Zs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sg extends Zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Es,endingEnd:Es}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case As:r=e,o=2*t-n;break;case Ta:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case As:a=e,c=2*n-t;break;case Ta:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,y=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let w=0;w!==o;++w)r[w]=g*a[h+w]+x*a[l+w]+y*a[c+w]+v*a[u+w];return r}}class od extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class rg extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ag extends Zs{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const _=(n-t)/(i-t),m=1-_;for(let g=0;g!==o;++g)r[g]=a[l+g]*m+a[c+g]*_;return r}const f=o*2,p=e-1;for(let _=0;_!==o;++_){const m=a[l+_],g=a[c+_],x=p*f+_*2,y=d[x],v=d[x+1],w=e*f+_*2,T=u[w],A=u[w+1];let M=(n-t)/(i-t),S,D,I,O,B;for(let G=0;G<8;G++){S=M*M,D=S*M,I=1-M,O=I*I,B=O*I;const V=B*t+3*O*M*y+3*I*S*T+D*i-n;if(Math.abs(V)<1e-10)break;const H=3*O*(y-t)+6*I*M*(T-y)+3*S*(i-T);if(Math.abs(H)<1e-10)break;M=M-V/H,M=Math.max(0,Math.min(1,M))}r[_]=B*m+3*O*M*v+3*I*S*A+D*g}return r}}class On{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cs(t,this.TimeBufferType),this.values=Cs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cs(e.times,Array),values:Cs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new od(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new ag(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case Jo:t=this.InterpolantFactoryMethodSmooth;break;case eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Jo;case this.InterpolantFactoryMethodBezier:return eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Be("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Be("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Am(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Nr;class Ks extends On{constructor(e,t,n){super(e,t,n)}}Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Lr;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class cd extends On{constructor(e,t,n,i){super(e,t,n,i)}}cd.prototype.ValueTypeName="color";class zs extends On{constructor(e,t,n,i){super(e,t,n,i)}}zs.prototype.ValueTypeName="number";class og extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)kt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Vs extends On{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new og(this.times,this.values,this.getValueSize(),e)}}Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends On{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Lr;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends On{constructor(e,t,n,i){super(e,t,n,i)}}Hs.prototype.ValueTypeName="vector";class kr{constructor(e="",t=-1,n=[],i=cl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Lv(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=ig(c);c=au(c,1,h),l=au(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new zs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Be("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const m=[],g=[];ad(f,m,g,p),m.length!==0&&_.push(new u(d,m,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let x=0;x!==d[p].morphTargets.length;++x){const y=d[p];m.push(y.time),g.push(y.morphTarget===_?1:0)}i.push(new zs(".morphTargetInfluence["+_+"]",m,g))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(Hs,f+".position",d,"pos",i),n(Vs,f+".quaternion",d,"rot",i),n(Hs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Dv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return cd;case"quaternion":return Vs;case"bool":case"boolean":return Ks;case"string":return $s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Lv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Dv(s.type);if(s.times===void 0){const t=[],n=[];ad(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ri={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Nf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Nf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Nf(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ld{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Js=new ld;class hn{constructor(e){this.manager=e!==void 0?e:Js,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hn.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class Nv extends Error{constructor(e,t){super(e),this.response=t}}class Yn extends hn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ri.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:n,onError:i});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=yi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){u.read().then(({done:y,value:v})=>{if(y)g.close();else{_+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,A=h.length;T<A;T++){const M=h[T];M.onProgress&&M.onProgress(w)}g.enqueue(v),x()}},y=>{g.error(y)})}}});return new Response(m)}else throw new Nv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{ri.add(`file:${e}`,l);const h=yi[e];delete yi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=yi[e];if(h===void 0)throw this.manager.itemError(e),l;delete yi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Uv extends hn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Yn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):Be(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=kr.parse(e[n]);t.push(i)}return t}}class Ov extends hn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new vl,c=new Yn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(e[u],function(d){const f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=xt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else c.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+_]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=xt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}const mr=new WeakMap;class La extends hn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ri.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=mr.get(a);u===void 0&&(u=[],mr.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Aa("img");function c(){h(),t&&t(this);const u=mr.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}mr.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),ri.remove(`image:${e}`);const d=mr.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}mr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ri.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Fv extends hn{constructor(e){super(e)}load(e,t,n,i){const r=new Xa;r.colorSpace=Ft;const a=new La(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(h){r.images[l]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class Bv extends hn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new qn,o=new Yn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{h(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:sn,a.wrapT=l.wrapT!==void 0?l.wrapT:sn,a.magFilter=l.magFilter!==void 0?l.magFilter:xt,a.minFilter=l.minFilter!==void 0?l.minFilter:xt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Dn),l.mipmapCount===1&&(a.minFilter=xt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class cg extends hn{constructor(e){super(e)}load(e,t,n,i){const r=new bt,a=new La(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ts extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class lg extends ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const wh=new ke,Uf=new C,Of=new C;class hd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Of),t.updateMatrixWorld(),wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Fs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oo=new C,Fo=new kt,ei=new C;class Nl extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oo,Fo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Fo,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Oo,Fo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Fo,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new C,Ff=new J,Bf=new J;class Bt extends Nl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Ff,Bf),t.subVectors(Bf,Ff)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kv extends hd{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ur*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ud extends ts{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new kv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class zv extends hd{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}}class dd extends ts{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ns extends Nl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vv extends hd{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fd extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new Vv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class hg extends ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ug extends ts{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class pd{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class dg extends ts{constructor(e=new pd,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ul extends hn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new Yn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):Be(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&Me("MaterialLoader: Undefined texture",r),t[r]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new ve().setHex(a.value);break;case"v2":i.uniforms[r].value=new J().fromArray(a.value);break;case"v3":i.uniforms[r].value=new C().fromArray(a.value);break;case"v4":i.uniforms[r].value=new ht().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Je().fromArray(a.value);break;case"m4":i.uniforms[r].value=new ke().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new J().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Ul.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Km,SpriteMaterial:Xu,RawShaderMaterial:sd,ShaderMaterial:_n,PointsMaterial:xl,MeshPhysicalMaterial:Un,MeshStandardMaterial:$a,MeshPhongMaterial:Jm,MeshToonMaterial:jm,MeshNormalMaterial:Qm,MeshLambertMaterial:eg,MeshDepthMaterial:Ll,MeshDistanceMaterial:rd,MeshBasicMaterial:on,MeshMatcapMaterial:tg,LineDashedMaterial:ng,LineBasicMaterial:Qt,Material:zt};return new t[e]}}class Xi{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fg extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class pg extends hn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Yn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):Be(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const m=f.interleavedBuffers[p],g=r(f,m.buffer),x=Sr(m.type,g),y=new Ga(x,m.stride);return y.uuid=m.uuid,t[p]=y,y}function r(f,p){if(n[p]!==void 0)return n[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const a=e.isInstancedBufferGeometry?new fg:new $e,o=e.data.index;if(o!==void 0){const f=Sr(o.type,o.array);a.setIndex(new ut(f,1))}const c=e.data.attributes;for(const f in c){const p=c[f];let _;if(p.isInterleavedBufferAttribute){const m=i(e.data,p.data);_=new Ji(m,p.itemSize,p.offset,p.normalized)}else{const m=Sr(p.type,p.array),g=p.isInstancedBufferAttribute?Bs:ut;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(f,_)}const l=e.data.morphAttributes;if(l)for(const f in l){const p=l[f],_=[];for(let m=0,g=p.length;m<g;m++){const x=p[m];let y;if(x.isInterleavedBufferAttribute){const v=i(e.data,x.data);y=new Ji(v,x.itemSize,x.offset,x.normalized)}else{const v=Sr(x.type,x.array);y=new ut(v,x.itemSize,x.normalized)}x.name!==void 0&&(y.name=x.name),_.push(y)}a.morphAttributes[f]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const _=u[f];a.addGroup(_.start,_.count,_.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new Dt().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Hv extends hn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Xi.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Yn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),u("ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),Be("ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Xi.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new Yn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t);let o;try{o=JSON.parse(a)}catch(l){throw new Error("ObjectLoader: Can't parse "+e+". "+l.message)}const c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,r,c,o,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),t!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Ls().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Wa().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new pg;for(let r=0,a=e.length;r<a;r++){let o;const c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in Lf?o=Lf[c.type].fromJSON(c,t):Me(`ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Ul;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=kr.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(h)}else return c.data?{data:Sr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new ld(t);r=new La(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new qn(g.data,g.width,g.height)))}i[u.uuid]=new Hi(f)}else{const f=o(u.url);i[u.uuid]=new Hi(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Sr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new La(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new qn(p.data,p.width,p.height)))}n[c.uuid]=new Hi(h)}else{const h=await r(c.url);n[c.uuid]=new Hi(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(Me("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&Me('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Me("ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let h;Array.isArray(l)?(h=new Xa,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new qn:h=new bt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,Gv)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],kf),h.wrapT=n(o.wrap[1],kf)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,zf)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,zf)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(d){return t[d]===void 0&&Me("ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const m=d[p];n[m]===void 0&&Me("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&Me("ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&Me("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new Hu,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ve(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new ml(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new pl(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Bt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new ns(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new hg(e.color,e.intensity);break;case"DirectionalLight":a=new fd(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new dd(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new ug(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new ud(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new lg(e.color,e.groundColor,e.intensity);break;case"LightProbe":const d=new pd().fromArray(e.sh);a=new dg(d,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),u=c(e.material),a=new qu(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=c(e.material),a=new St(h,u);break;case"InstancedMesh":h=o(e.geometry),u=c(e.material);const f=e.count,p=e.instanceMatrix,_=e.instanceColor;a=new Yu(h,u,f),a.instanceMatrix=new Bs(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new Bs(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=c(e.material),a=new Um(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,x=null;return m.boundingBox!==void 0&&(g=new Pt().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(x=new Dt().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:x}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=l(e.matricesTexture.uuid),a._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Dt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Pt().fromJSON(e.boundingBox));break;case"LOD":a=new Nm;break;case"Line":a=new Ei(o(e.geometry),c(e.material));break;case"LineLoop":a=new Zu(o(e.geometry),c(e.material));break;case"LineSegments":a=new Kn(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new Ku(o(e.geometry),c(e.material));break;case"Sprite":a=new Lm(c(e.material));break;case"Group":a=new si;break;case"Bone":a=new gl;break;default:a=new st}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new C().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?Me("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new st}})}}const Gv={UVMapping:el,CubeReflectionMapping:li,CubeRefractionMapping:Zi,EquirectangularReflectionMapping:fa,EquirectangularRefractionMapping:pa,CubeUVReflectionMapping:zr},kf={RepeatWrapping:Ki,ClampToEdgeWrapping:sn,MirroredRepeatWrapping:Ir},zf={NearestFilter:Et,NearestMipmapNearestFilter:tl,NearestMipmapLinearFilter:ws,LinearFilter:xt,LinearMipmapNearestFilter:Er,LinearMipmapLinearFilter:Dn},Eh=new WeakMap;class mg extends hn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ri.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Eh.has(a)===!0)i&&i(Eh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ri.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Eh.set(c,l),ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ri.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Bo,md=class{static getContext(){return Bo===void 0&&(Bo=new(window.AudioContext||window.webkitAudioContext)),Bo}static setContext(e){Bo=e}};class Wv extends hn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Yn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);md.getContext().decodeAudioData(l,function(u){t(u)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):Be(c),r.manager.itemError(e)}}}const Vf=new ke,Hf=new ke,us=new ke;class Xv{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Bt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Bt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,us.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Ds*t.fov*.5)/t.zoom;let o,c;Hf.elements[12]=-i,Vf.elements[12]=i,o=-a*t.aspect+r,c=a*t.aspect+r,us.elements[0]=2*t.near/(c-o),us.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(us),o=-a*t.aspect-r,c=a*t.aspect-r,us.elements[0]=2*t.near/(c-o),us.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(us)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Hf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Vf)}}const gr=-90,_r=1;class gg extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(gr,_r,e,t);i.layers=this.layers,this.add(i);const r=new Bt(gr,_r,e,t);r.layers=this.layers,this.add(r);const a=new Bt(gr,_r,e,t);a.layers=this.layers,this.add(a);const o=new Bt(gr,_r,e,t);o.layers=this.layers,this.add(o);const c=new Bt(gr,_r,e,t);c.layers=this.layers,this.add(c);const l=new Bt(gr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class _g extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xg{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function qv(){this._document.hidden===!1&&this.reset()}const ds=new C,Ah=new kt,Yv=new C,fs=new C,ps=new C;class Zv extends st{constructor(){super(),this.type="AudioListener",this.context=md.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new xg}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(ds,Ah,Yv),fs.set(0,0,-1).applyQuaternion(Ah),ps.set(0,1,0).applyQuaternion(Ah),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ds.x,n),t.positionY.linearRampToValueAtTime(ds.y,n),t.positionZ.linearRampToValueAtTime(ds.z,n),t.forwardX.linearRampToValueAtTime(fs.x,n),t.forwardY.linearRampToValueAtTime(fs.y,n),t.forwardZ.linearRampToValueAtTime(fs.z,n),t.upX.linearRampToValueAtTime(ps.x,n),t.upY.linearRampToValueAtTime(ps.y,n),t.upZ.linearRampToValueAtTime(ps.z,n)}else t.setPosition(ds.x,ds.y,ds.z),t.setOrientation(fs.x,fs.y,fs.z,ps.x,ps.y,ps.z)}}class vg extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Me("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Me("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Me("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const ms=new C,Gf=new kt,Kv=new C,gs=new C;class $v extends vg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ms,Gf,Kv),gs.set(0,0,1).applyQuaternion(Gf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ms.x,n),t.positionY.linearRampToValueAtTime(ms.y,n),t.positionZ.linearRampToValueAtTime(ms.z,n),t.orientationX.linearRampToValueAtTime(gs.x,n),t.orientationY.linearRampToValueAtTime(gs.y,n),t.orientationZ.linearRampToValueAtTime(gs.z,n)}else t.setPosition(ms.x,ms.y,ms.z),t.setOrientation(gs.x,gs.y,gs.z)}}class Jv{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class yg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;kt.multiplyQuaternionsFlat(e,a,e,t,e,n),kt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const gd="\\[\\]\\.:\\/",jv=new RegExp("["+gd+"]","g"),_d="[^"+gd+"]",Qv="[^"+gd.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",_d),ty=/(WCOD+)?/.source.replace("WCOD",Qv),ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_d),iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_d),sy=new RegExp("^"+ey+ty+ny+iy+"$"),ry=["material","materials","bones","map"];class ay{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jv,"")}static parseTrackName(e){const t=sy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ry.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=ay;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class oy{constructor(){this.isAnimationObjectGroup=!0,this.uuid=wn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=t[f];if(p===void 0){p=c++,t[f]=p,e.push(d);for(let _=0,m=a;_!==m;++_)r[_].push(new ot(d,n[_],i[_]))}else if(p<l){o=e[p];const _=--l,m=e[_];t[m.uuid]=p,e[p]=m,t[f]=_,e[_]=d;for(let g=0,x=a;g!==x;++g){const y=r[g],v=y[_];let w=y[p];y[p]=v,w===void 0&&(w=new ot(d,n[g],i[g])),y[_]=w}}else e[p]!==o&&Be("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,h=t[l];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,p=i;f!==p;++f){const _=n[f],m=_[u],g=_[h];_[h]=m,_[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],p=--a,_=e[p];t[f.uuid]=u,e[u]=f,t[_.uuid]=d,e[d]=_,e.pop();for(let m=0,g=i;m!==g;++m){const x=n[m],y=x[d],v=x[p];x[u]=y,x[d]=v,x.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,_=i;p!==_;++p){const m=n[p];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let d=h,f=c.length;d!==f;++d){const p=c[d];u[d]=new ot(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Mg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Es,endingEnd:Es};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Fu:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case cl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===_m;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===mm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=As,i.endingEnd=As):(e?i.endingStart=this.zeroSlopeAtStart?As:Es:i.endingStart=Ta,t?i.endingEnd=this.zeroSlopeAtEnd?As:Es:i.endingEnd=Ta)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const cy=new Float32Array(1);class ly extends di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new yg(ot.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new od(new Float32Array(2),new Float32Array(2),1,cy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?kr.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=cl),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Mg(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?kr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class hy extends Vu{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new dl(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class xd{constructor(e){this.value=e}clone(){return new xd(this.value.clone===void 0?this.value:this.value.clone())}}let uy=0;class dy extends di{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:uy++}),this.name="",this.usage=Ea,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class fy extends Ga{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class py{constructor(e,t,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Wf=new ke;class bg{constructor(e,t,n=0,i=1/0){this.ray=new Ai(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wf),this}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(Xf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ou(e[i],this,n,t);return n.sort(Xf),n}}function Xf(s,e){return s.distance-e.distance}function ou(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)ou(r[a],e,t,!0)}}class my{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Me("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class cu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gy{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class vd{constructor(e,t,n,i){vd.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const qf=new J;class _y{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yf=new C,ko=new C,xr=new C,vr=new C,Ch=new C,xy=new C,vy=new C;class Sg{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Yf.subVectors(e,this.start),ko.subVectors(this.end,this.start);const n=ko.dot(ko);let r=ko.dot(Yf)/n;return t&&(r=Ze(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=xy,n=vy){const i=10000000000000001e-32;let r,a;const o=this.start,c=e.start,l=this.end,h=e.end;xr.subVectors(l,o),vr.subVectors(h,c),Ch.subVectors(o,c);const u=xr.dot(xr),d=vr.dot(vr),f=vr.dot(Ch);if(u<=i&&d<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(u<=i)r=0,a=f/d,a=Ze(a,0,1);else{const p=xr.dot(Ch);if(d<=i)a=0,r=Ze(-p/u,0,1);else{const _=xr.dot(vr),m=u*d-_*_;m!==0?r=Ze((_*f-p*d)/m,0,1):r=0,a=(_*r+f)/d,a<0?(a=0,r=Ze(-p/u,0,1)):a>1&&(a=1,r=Ze((_-p)/u,0,1))}}return t.copy(o).addScaledVector(xr,r),n.copy(c).addScaledVector(vr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Zf=new C;class yy extends st{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new $e,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,h=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Re(i,3));const r=new Qt({fog:!1,toneMapped:!1});this.cone=new Kn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Zf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Zf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Fi=new C,zo=new ke,Rh=new ke;class My extends Kn{constructor(e){const t=Tg(e),n=new $e,i=[],r=[];for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Re(i,3)),n.setAttribute("color",new Re(r,3));const a=new Qt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new ve(255),c=new ve(65280);this.setColors(o,c)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Rh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(zo.multiplyMatrices(Rh,o.matrixWorld),Fi.setFromMatrixPosition(zo),i.setXYZ(a,Fi.x,Fi.y,Fi.z),zo.multiplyMatrices(Rh,o.parent.matrixWorld),Fi.setFromMatrixPosition(zo),i.setXYZ(a+1,Fi.x,Fi.y,Fi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Tg(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...Tg(s.children[t]));return e}class by extends St{constructor(e,t,n){const i=new Ka(t,4,2),r=new on({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Sy=new C,Kf=new ve,$f=new ve;class Ty extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Za(t);i.rotateY(Math.PI*.5),this.material=new on({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new ut(a,3)),this.add(new St(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Kf.copy(this.light.color),$f.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Kf:$f;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Sy.setFromMatrixPosition(this.light.matrixWorld).negate())}}class wy extends Kn{constructor(e=10,t=10,n=4473924,i=8947848){n=new ve(n),i=new ve(i);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);const _=d===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new $e;h.setAttribute("position",new Re(c,3)),h.setAttribute("color",new Re(l,3));const u=new Qt({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ey extends Kn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new ve(r),a=new ve(a);const o=[],c=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,p);const _=u&1?r:a;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?r:a,f=e-e/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f;o.push(m,0,g),c.push(d.r,d.g,d.b),_=(p+1)/i*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f,o.push(m,0,g),c.push(d.r,d.g,d.b)}}const l=new $e;l.setAttribute("position",new Re(o,3)),l.setAttribute("color",new Re(c,3));const h=new Qt({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Jf=new C,Vo=new C,jf=new C;class Ay extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new $e;i.setAttribute("position",new Re([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Qt({fog:!1,toneMapped:!1});this.lightPlane=new Ei(i,r),this.add(this.lightPlane),i=new $e,i.setAttribute("position",new Re([0,0,0,0,0,1],3)),this.targetLine=new Ei(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Jf.setFromMatrixPosition(this.light.matrixWorld),Vo.setFromMatrixPosition(this.light.target.matrixWorld),jf.subVectors(Vo,Jf),this.lightPlane.lookAt(Vo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Vo),this.targetLine.scale.z=jf.length()}}const Ho=new C,Ct=new Nl;class Cy extends Kn{constructor(e){const t=new $e,n=new Qt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){c(p),c(_)}function c(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Re(i,3)),t.setAttribute("color",new Re(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new ve(16755200),h=new ve(16711680),u=new ve(43775),d=new ve(16777215),f=new ve(3355443);this.setColors(l,h,u,d,f)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let r,a;if(Ct.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Tn)r=-1,a=1;else if(this.camera.coordinateSystem===Fs)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);It("c",t,e,Ct,0,0,r),It("t",t,e,Ct,0,0,a),It("n1",t,e,Ct,-n,-i,r),It("n2",t,e,Ct,n,-i,r),It("n3",t,e,Ct,-n,i,r),It("n4",t,e,Ct,n,i,r),It("f1",t,e,Ct,-n,-i,a),It("f2",t,e,Ct,n,-i,a),It("f3",t,e,Ct,-n,i,a),It("f4",t,e,Ct,n,i,a),It("u1",t,e,Ct,n*.7,i*1.1,r),It("u2",t,e,Ct,-n*.7,i*1.1,r),It("u3",t,e,Ct,0,i*2,r),It("cf1",t,e,Ct,-n,0,a),It("cf2",t,e,Ct,n,0,a),It("cf3",t,e,Ct,0,-i,a),It("cf4",t,e,Ct,0,i,a),It("cn1",t,e,Ct,-n,0,r),It("cn2",t,e,Ct,n,0,r),It("cn3",t,e,Ct,0,-i,r),It("cn4",t,e,Ct,0,i,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function It(s,e,t,n,i,r,a){Ho.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const c=t.getAttribute("position");for(let l=0,h=o.length;l<h;l++)c.setXYZ(o[l],Ho.x,Ho.y,Ho.z)}}const Go=new Pt;class Ry extends Kn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new $e;r.setIndex(new ut(n,1)),r.setAttribute("position",new ut(i,3)),super(r,new Qt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Go.setFromObject(this.object),Go.isEmpty())return;const e=Go.min,t=Go.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Iy extends Kn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new $e;r.setIndex(new ut(n,1)),r.setAttribute("position",new Re(i,3)),super(r,new Qt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Py extends Ei{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new $e;a.setAttribute("position",new Re(r,3)),a.computeBoundingSphere(),super(a,new Qt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new $e;c.setAttribute("position",new Re(o,3)),c.computeBoundingSphere(),this.add(new St(c,new on({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Qf=new C;let Wo,Ih;class Dy extends st{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Wo===void 0&&(Wo=new $e,Wo.setAttribute("position",new Re([0,0,0,0,1,0],3)),Ih=new Ya(.5,1,5,1),Ih.translate(0,-.5,0)),this.position.copy(t),this.line=new Ei(Wo,new Qt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new St(Ih,new on({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Qf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Qf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Ly extends Kn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new $e;i.setAttribute("position",new Re(t,3)),i.setAttribute("color",new Re(n,3));const r=new Qt({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new ve,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ny{constructor(){this.type="ShapePath",this.color=new ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Kc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const x=[];for(let y=0,v=g.length;y<v;y++){const w=g[y],T=new Ls;T.curves=w.curves,x.push(T)}return x}function n(g,x){const y=x.length;let v=!1;for(let w=y-1,T=0;T<y;w=T++){let A=x[w],M=x[T],S=M.x-A.x,D=M.y-A.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(A=x[T],S=-S,M=x[w],D=-D),g.y<A.y||g.y>M.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const I=D*(g.x-A.x)-S*(g.y-A.y);if(I===0)return!0;if(I<0)continue;v=!v}}else{if(g.y!==A.y)continue;if(M.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=M.x)return!0}}return v}const i=Wn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new Ls,c.curves=o.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],p=0,_;d[p]=void 0,f[p]=[];for(let g=0,x=r.length;g<x;g++)o=r[g],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&d[p]&&p++,d[p]={s:new Ls,p:_},d[p].s.curves=o.curves,h&&p++,f[p]=[]):f[p].push({h:o,p:_[0]});if(!d[0])return t(r);if(d.length>1){let g=!1,x=0;for(let y=0,v=d.length;y<v;y++)u[y]=[];for(let y=0,v=d.length;y<v;y++){const w=f[y];for(let T=0;T<w.length;T++){const A=w[T];let M=!0;for(let S=0;S<d.length;S++)n(A.p,d[S].p)&&(y!==S&&x++,M?(M=!1,u[S].push(A)):g=!0);M&&u[y].push(A)}}x>0&&g===!1&&(f=u)}let m;for(let g=0,x=d.length;g<x;g++){c=d[g].s,l.push(c),m=f[g];for(let y=0,v=m.length;y<v;y++)c.holes.push(m[y].h)}return l}}class wg extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Uy(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Oy(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Fy(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function lu(s,e,t,n){const i=By(n);switch(t){case Uu:return s*e;case rl:return s*e/i.components*i.byteLength;case Ha:return s*e/i.components*i.byteLength;case Os:return s*e*2/i.components*i.byteLength;case al:return s*e*2/i.components*i.byteLength;case Ou:return s*e*3/i.components*i.byteLength;case an:return s*e*4/i.components*i.byteLength;case ol:return s*e*4/i.components*i.byteLength;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _a:case xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pc:case gc:return Math.max(s,16)*Math.max(e,8)/4;case fc:case mc:return Math.max(s,8)*Math.max(e,8)/2;case _c:case xc:case yc:case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vc:case bc:case Sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bc:case kc:case zc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vc:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gc:case Wc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function By(s){switch(s){case mn:case Pu:return{byteLength:1,components:1};case Pr:case Du:case hi:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case Ln:case nl:case rn:return{byteLength:4,components:1};case Lu:case Nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class ky{static contain(e,t){return Uy(e,t)}static cover(e,t){return Oy(e,t)}static fill(e){return Fy(e)}static getByteLength(e,t,n,i){return lu(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);function Eg(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zy(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Vy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hy=`#ifdef USE_ALPHAHASH
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
#endif`,Gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yy=`#ifdef USE_AOMAP
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
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ky=`#ifdef USE_BATCHING
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
#endif`,$y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eM=`#ifdef USE_IRIDESCENCE
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
#endif`,tM=`#ifdef USE_BUMPMAP
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hM=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,uM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,LM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,kM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,zM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$M=`#if defined( USE_POINTS_UV )
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
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`#ifdef USE_MORPHTARGETS
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
#endif`,ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lb=`#ifdef USE_NORMALMAP
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
#endif`,hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,wb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ab=`#ifdef USE_SKINNING
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
#endif`,Cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nb=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ub=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vb=`uniform sampler2D t2D;
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`#include <common>
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
}`,Yb=`#if DEPTH_PACKING == 3200
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
}`,Zb=`#define DISTANCE
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
}`,Kb=`#define DISTANCE
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
void main () {
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`uniform float scale;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,tS=`uniform vec3 diffuse;
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,sS=`#define MATCAP
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
}`,rS=`#define MATCAP
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
}`,aS=`#define NORMAL
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
}`,oS=`#define NORMAL
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
}`,cS=`#define PHONG
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
}`,lS=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,hS=`#define STANDARD
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
}`,uS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <cube_uv_reflection_fragment>
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
}`,dS=`#define TOON
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
}`,fS=`#define TOON
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
}`,pS=`uniform float size;
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
}`,mS=`uniform vec3 diffuse;
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
}`,gS=`#include <common>
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
}`,_S=`uniform vec3 color;
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
}`,xS=`uniform float rotation;
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
}`,vS=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Vy,alphahash_pars_fragment:Hy,alphamap_fragment:Gy,alphamap_pars_fragment:Wy,alphatest_fragment:Xy,alphatest_pars_fragment:qy,aomap_fragment:Yy,aomap_pars_fragment:Zy,batching_pars_vertex:Ky,batching_vertex:$y,begin_vertex:Jy,beginnormal_vertex:jy,bsdfs:Qy,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:rM,color_fragment:aM,color_pars_fragment:oM,color_pars_vertex:cM,color_vertex:lM,common:hM,cube_uv_reflection_fragment:uM,defaultnormal_vertex:dM,displacementmap_pars_vertex:fM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:xM,envmap_fragment:vM,envmap_common_pars_fragment:yM,envmap_pars_fragment:MM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:LM,envmap_vertex:SM,fog_vertex:TM,fog_pars_vertex:wM,fog_fragment:EM,fog_pars_fragment:AM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:RM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:PM,lights_pars_begin:DM,lights_toon_fragment:NM,lights_toon_pars_fragment:UM,lights_phong_fragment:OM,lights_phong_pars_fragment:FM,lights_physical_fragment:BM,lights_physical_pars_fragment:kM,lights_fragment_begin:zM,lights_fragment_maps:VM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:qM,map_fragment:YM,map_pars_fragment:ZM,map_particle_fragment:KM,map_particle_pars_fragment:$M,metalnessmap_fragment:JM,metalnessmap_pars_fragment:jM,morphinstance_vertex:QM,morphcolor_vertex:eb,morphnormal_vertex:tb,morphtarget_pars_vertex:nb,morphtarget_vertex:ib,normal_fragment_begin:sb,normal_fragment_maps:rb,normal_pars_fragment:ab,normal_pars_vertex:ob,normal_vertex:cb,normalmap_pars_fragment:lb,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:ub,clearcoat_pars_fragment:db,iridescence_pars_fragment:fb,opaque_fragment:pb,packing:mb,premultiplied_alpha_fragment:gb,project_vertex:_b,dithering_fragment:xb,dithering_pars_fragment:vb,roughnessmap_fragment:yb,roughnessmap_pars_fragment:Mb,shadowmap_pars_fragment:bb,shadowmap_pars_vertex:Sb,shadowmap_vertex:Tb,shadowmask_pars_fragment:wb,skinbase_vertex:Eb,skinning_pars_vertex:Ab,skinning_vertex:Cb,skinnormal_vertex:Rb,specularmap_fragment:Ib,specularmap_pars_fragment:Pb,tonemapping_fragment:Db,tonemapping_pars_fragment:Lb,transmission_fragment:Nb,transmission_pars_fragment:Ub,uv_pars_fragment:Ob,uv_pars_vertex:Fb,uv_vertex:Bb,worldpos_vertex:kb,background_vert:zb,background_frag:Vb,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:Wb,cube_frag:Xb,depth_vert:qb,depth_frag:Yb,distance_vert:Zb,distance_frag:Kb,equirect_vert:$b,equirect_frag:Jb,linedashed_vert:jb,linedashed_frag:Qb,meshbasic_vert:eS,meshbasic_frag:tS,meshlambert_vert:nS,meshlambert_frag:iS,meshmatcap_vert:sS,meshmatcap_frag:rS,meshnormal_vert:aS,meshnormal_frag:oS,meshphong_vert:cS,meshphong_frag:lS,meshphysical_vert:hS,meshphysical_frag:uS,meshtoon_vert:dS,meshtoon_frag:fS,points_vert:pS,points_frag:mS,shadow_vert:gS,shadow_frag:_S,sprite_vert:xS,sprite_frag:vS},ye={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Pn={basic:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:tn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:tn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:tn([ye.points,ye.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:tn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:tn([ye.common,ye.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:tn([ye.sprite,ye.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:tn([ye.common,ye.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:tn([ye.lights,ye.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Pn.physical={uniforms:tn([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Xo={r:0,b:0,g:0},_s=new En,yS=new ke;function MS(s,e,t,n,i,r){const a=new ve(0);let o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const v=x.backgroundBlurriness>0;y=e.get(y,v)}return y}function p(x){let y=!1;const v=f(x);v===null?m(a,o):v&&v.isColor&&(m(v,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(x,y){const v=f(y);v&&(v.isCubeTexture||v.mapping===zr)?(l===void 0&&(l=new St(new qs(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Br(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),_s.copy(y.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(yS.makeRotationFromEuler(_s)),l.material.toneMapped=nt.getTransfer(v.colorSpace)!==ft,(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new Ys(2,2),new _n({name:"BackgroundMaterial",uniforms:Br(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,y){x.getRGB(Xo,$m(s)),t.buffers.color.setClear(Xo.r,Xo.g,Xo.b,y,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:_,dispose:g}}function bS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(I,O,B,G,z){let V=!1;const H=u(I,G,B,O);r!==H&&(r=H,l(r.object)),V=f(I,G,B,z),V&&p(I,G,B,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(I,O,B,G),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,O,B,G){const z=G.wireframe===!0;let V=n[O.id];V===void 0&&(V={},n[O.id]=V);const H=I.isInstancedMesh===!0?I.id:0;let le=V[H];le===void 0&&(le={},V[H]=le);let j=le[B.id];j===void 0&&(j={},le[B.id]=j);let _e=j[z];return _e===void 0&&(_e=d(c()),j[z]=_e),_e}function d(I){const O=[],B=[],G=[];for(let z=0;z<t;z++)O[z]=0,B[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:G,object:I,attributes:{},index:null}}function f(I,O,B,G){const z=r.attributes,V=O.attributes;let H=0;const le=B.getAttributes();for(const j in le)if(le[j].location>=0){const ue=z[j];let xe=V[j];if(xe===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==G}function p(I,O,B,G){const z={},V=O.attributes;let H=0;const le=B.getAttributes();for(const j in le)if(le[j].location>=0){let ue=V[j];ue===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),z[j]=xe,H++}r.attributes=z,r.attributesNum=H,r.index=G}function _(){const I=r.newAttributes;for(let O=0,B=I.length;O<B;O++)I[O]=0}function m(I){g(I,0)}function g(I,O){const B=r.newAttributes,G=r.enabledAttributes,z=r.attributeDivisors;B[I]=1,G[I]===0&&(s.enableVertexAttribArray(I),G[I]=1),z[I]!==O&&(s.vertexAttribDivisor(I,O),z[I]=O)}function x(){const I=r.newAttributes,O=r.enabledAttributes;for(let B=0,G=O.length;B<G;B++)O[B]!==I[B]&&(s.disableVertexAttribArray(B),O[B]=0)}function y(I,O,B,G,z,V,H){H===!0?s.vertexAttribIPointer(I,O,B,z,V):s.vertexAttribPointer(I,O,B,G,z,V)}function v(I,O,B,G){_();const z=G.attributes,V=B.getAttributes(),H=O.defaultAttributeValues;for(const le in V){const j=V[le];if(j.location>=0){let _e=z[le];if(_e===void 0&&(le==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),le==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),_e!==void 0){const ue=_e.normalized,xe=_e.itemSize,qe=e.get(_e);if(qe===void 0)continue;const rt=qe.buffer,ct=qe.type,Q=qe.bytesPerElement,fe=ct===s.INT||ct===s.UNSIGNED_INT||_e.gpuType===nl;if(_e.isInterleavedBufferAttribute){const he=_e.data,Oe=he.stride,Ne=_e.offset;if(he.isInstancedInterleavedBuffer){for(let Le=0;Le<j.locationSize;Le++)g(j.location+Le,he.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Le=0;Le<j.locationSize;Le++)m(j.location+Le);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Le=0;Le<j.locationSize;Le++)y(j.location+Le,xe/j.locationSize,ct,ue,Oe*Q,(Ne+xe/j.locationSize*Le)*Q,fe)}else{if(_e.isInstancedBufferAttribute){for(let he=0;he<j.locationSize;he++)g(j.location+he,_e.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let he=0;he<j.locationSize;he++)m(j.location+he);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let he=0;he<j.locationSize;he++)y(j.location+he,xe/j.locationSize,ct,ue,xe*Q,xe/j.locationSize*he*Q,fe)}}else if(H!==void 0){const ue=H[le];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(j.location,ue);break;case 3:s.vertexAttrib3fv(j.location,ue);break;case 4:s.vertexAttrib4fv(j.location,ue);break;default:s.vertexAttrib1fv(j.location,ue)}}}}x()}function w(){S();for(const I in n){const O=n[I];for(const B in O){const G=O[B];for(const z in G){const V=G[z];for(const H in V)h(V[H].object),delete V[H];delete G[z]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const O=n[I.id];for(const B in O){const G=O[B];for(const z in G){const V=G[z];for(const H in V)h(V[H].object),delete V[H];delete G[z]}}delete n[I.id]}function A(I){for(const O in n){const B=n[O];for(const G in B){const z=B[G];if(z[I.id]===void 0)continue;const V=z[I.id];for(const H in V)h(V[H].object),delete V[H];delete z[I.id]}}}function M(I){for(const O in n){const B=n[O],G=I.isInstancedMesh===!0?I.id:0,z=B[G];if(z!==void 0){for(const V in z){const H=z[V];for(const le in H)h(H[le].object),delete H[le];delete z[V]}delete B[G],Object.keys(B).length===0&&delete n[O]}}}function S(){D(),a=!0,r!==i&&(r=i,l(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function SS(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)a(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function TS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==an&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const M=A===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==rn&&!M)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Me("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:w,samples:T}}function wS(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new bi,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,y=x*4;let v=g.clippingState||null;c.value=v,v=h(p,d,y,f);for(let w=0;w!==y;++w)v[w]=t[w];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const g=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Gi=4,ep=[.125,.215,.35,.446,.526,.582],Ss=20,ES=256,na=new ns,tp=new ve;let Ph=null,Dh=0,Lh=0,Nh=!1;const AS=new C;class hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=AS}=r;Ph=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,Dh,Lh),this._renderer.xr.enabled=Nh,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:hi,format:an,colorSpace:jt,depthBuffer:!1},i=np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CS(r)),this._blurMaterial=IS(r,e,t),this._ggxMaterial=RS(r,e,t)}return i}_compileMaterial(e){const t=new St(new $e,e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,n,i,r){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(tp),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new qs,new on({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(tp),g=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const w=this._cubeSize;yr(i,v*w,y>2?w:0,w,w),u.setRenderTarget(i),g&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===li||e.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;yr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,na)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Gi?n-p+Gi:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,yr(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(o,na),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,yr(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(o,na)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):Ss;m>Ss&&Me(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);const g=[];let x=0;for(let A=0;A<Ss;++A){const M=A/_,S=Math.exp(-M*M/2);g.push(S),A===0?x+=S:A<m&&(x+=2*S)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const v=this._sizeLods[i],w=3*v*(i>y-Gi?i-y+Gi:0),T=4*(this._cubeSize-v);yr(t,w,T,3*v,2*v),c.setRenderTarget(t),c.render(u,na)}}function CS(s){const e=[],t=[],n=[];let i=s;const r=s-Gi+1+ep.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Gi?c=ep[a-s+Gi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*f),y=new Float32Array(m*p*f),v=new Float32Array(g*p*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,M=T>2?0:-1,S=[A,M,0,A+2/3,M,0,A+2/3,M+1,0,A,M,0,A+2/3,M+1,0,A,M+1,0];x.set(S,_*p*T),y.set(d,m*p*T);const D=[T,T,T,T,T,T];v.set(D,g*p*T)}const w=new $e;w.setAttribute("position",new ut(x,_)),w.setAttribute("uv",new ut(y,m)),w.setAttribute("faceIndex",new ut(v,g)),n.push(new St(w,null)),i>Gi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function np(s,e,t){const n=new ln(s,e,t);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function RS(s,e,t){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function IS(s,e,t){const n=new Float32Array(Ss),i=new C(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ip(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function sp(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class yd extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qs(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:oi});r.uniforms.tEquirect.value=t;const a=new St(i,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=xt),new gg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function PS(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===fa||f===pa)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new yd(p.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,p=f===fa||f===pa,_=f===li||f===Zi;if(p||_){let m=t.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new hu(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return p&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new hu(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===fa?d.mapping=li:f===pa&&(d.mapping=Zi),d}function c(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function DS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ra("WebGLRenderer: "+n+" extension not supported."),i}}}function LS(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const w=x[y+0],T=x[y+1],A=x[y+2];d.push(w,T,T,A,A,w)}}else{const x=p.array;_=p.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const w=y+0,T=y+1,A=y+2;d.push(w,T,T,A,A,w)}}const m=new(p.count>=65535?Wu:Gu)(d,1);m.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function NS(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function u(d,f,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)l(d[g]/a,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x]*_[x];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function US(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function OS(s,e,t){const n=new WeakMap,i=new ht;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let v=o.attributes.position.count*y,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*w*4*u),A=new ul(T,v,w,u);A.type=rn,A.needsUpdate=!0;const M=y*4;for(let D=0;D<u;D++){const I=m[D],O=g[D],B=x[D],G=v*w*4*D;for(let z=0;z<I.count;z++){const V=z*M;f===!0&&(i.fromBufferAttribute(I,z),T[G+V+0]=i.x,T[G+V+1]=i.y,T[G+V+2]=i.z,T[G+V+3]=0),p===!0&&(i.fromBufferAttribute(O,z),T[G+V+4]=i.x,T[G+V+5]=i.y,T[G+V+6]=i.z,T[G+V+7]=0),_===!0&&(i.fromBufferAttribute(B,z),T[G+V+8]=i.x,T[G+V+9]=i.y,T[G+V+10]=i.z,T[G+V+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new J(v,w)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function FS(s,e,t,n,i){let r=new WeakMap;function a(l){const h=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const BS={[wu]:"LINEAR_TONE_MAPPING",[Eu]:"REINHARD_TONE_MAPPING",[Au]:"CINEON_TONE_MAPPING",[Cu]:"ACES_FILMIC_TONE_MAPPING",[Sa]:"AGX_TONE_MAPPING",[Iu]:"NEUTRAL_TONE_MAPPING",[Ru]:"CUSTOM_TONE_MAPPING"};function kS(s,e,t,n,i){const r=new ln(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new ln(e,t,{type:hi,depthBuffer:!1,stencilBuffer:!1}),o=new $e;o.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Re([0,2,0,0,2,0],2));const c=new sd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new St(o,c),h=new ns(-1,1,1,-1,0,1);let u=null,d=null,f=!1,p,_=null,m=[],g=!1;this.setSize=function(x,y){r.setSize(x,y),a.setSize(x,y);for(let v=0;v<m.length;v++){const w=m[v];w.setSize&&w.setSize(x,y)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const y=r.width,v=r.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(y,v)}},this.begin=function(x,y){if(f||x.toneMapping===Xn&&m.length===0)return!1;if(_=y,y!==null){const v=y.width,w=y.height;(r.width!==v||r.height!==w)&&this.setSize(v,w)}return g===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=Xn,!0},this.hasRenderPass=function(){return g},this.end=function(x,y){x.toneMapping=p,f=!0;let v=r,w=a;for(let T=0;T<m.length;T++){const A=m[T];if(A.enabled!==!1&&(A.render(x,w,v,y),A.needsSwap!==!1)){const M=v;v=w,w=M}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,c.defines={},nt.getTransfer(u)===ft&&(c.defines.SRGB_TRANSFER="");const T=BS[d];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(_),x.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Ag=new bt,uu=new Or(1,1),Cg=new ul,Rg=new dl,Ig=new Xa,rp=[],ap=[],op=new Float32Array(16),cp=new Float32Array(9),lp=new Float32Array(4);function Hr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=rp[i];if(r===void 0&&(r=new Float32Array(i),rp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fl(s,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function zS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function VS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function HS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function GS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function WS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;lp.set(n),s.uniformMatrix2fv(this.addr,!1,lp),Ht(t,n)}}function XS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;cp.set(n),s.uniformMatrix3fv(this.addr,!1,cp),Ht(t,n)}}function qS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;op.set(n),s.uniformMatrix4fv(this.addr,!1,op),Ht(t,n)}}function YS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ZS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function KS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function $S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function JS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function eT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function tT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(uu.compareFunction=t.isReversedDepthBuffer()?hl:ll,r=uu):r=Ag,t.setTexture2D(e||r,i)}function nT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rg,i)}function iT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ig,i)}function sT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cg,i)}function rT(s){switch(s){case 5126:return zS;case 35664:return VS;case 35665:return HS;case 35666:return GS;case 35674:return WS;case 35675:return XS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return ZS;case 35668:case 35672:return KS;case 35669:case 35673:return $S;case 5125:return JS;case 36294:return jS;case 36295:return QS;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return sT}}function aT(s,e){s.uniform1fv(this.addr,e)}function oT(s,e){const t=Hr(e,this.size,2);s.uniform2fv(this.addr,t)}function cT(s,e){const t=Hr(e,this.size,3);s.uniform3fv(this.addr,t)}function lT(s,e){const t=Hr(e,this.size,4);s.uniform4fv(this.addr,t)}function hT(s,e){const t=Hr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function uT(s,e){const t=Hr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dT(s,e){const t=Hr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function fT(s,e){s.uniform1iv(this.addr,e)}function pT(s,e){s.uniform2iv(this.addr,e)}function mT(s,e){s.uniform3iv(this.addr,e)}function gT(s,e){s.uniform4iv(this.addr,e)}function _T(s,e){s.uniform1uiv(this.addr,e)}function xT(s,e){s.uniform2uiv(this.addr,e)}function vT(s,e){s.uniform3uiv(this.addr,e)}function yT(s,e){s.uniform4uiv(this.addr,e)}function MT(s,e,t){const n=this.cache,i=e.length,r=Fl(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=uu:a=Ag;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function bT(s,e,t){const n=this.cache,i=e.length,r=Fl(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rg,r[a])}function ST(s,e,t){const n=this.cache,i=e.length,r=Fl(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ig,r[a])}function TT(s,e,t){const n=this.cache,i=e.length,r=Fl(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cg,r[a])}function wT(s){switch(s){case 5126:return aT;case 35664:return oT;case 35665:return cT;case 35666:return lT;case 35674:return hT;case 35675:return uT;case 35676:return dT;case 5124:case 35670:return fT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return xT;case 36295:return vT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return TT}}class ET{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rT(t.type)}}class AT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wT(t.type)}}class CT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function hp(s,e){s.seq.push(e),s.map[e.id]=e}function RT(s,e,t){const n=s.name,i=n.length;for(Uh.lastIndex=0;;){const r=Uh.exec(n),a=Uh.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){hp(t,l===void 0?new ET(o,s,e):new AT(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new CT(o),hp(t,u)),t=u}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);RT(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function up(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const IT=37297;let PT=0;function DT(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const dp=new Je;function LT(s){nt._getMatrix(dp,nt.workingColorSpace,s);const e=`mat3( ${dp.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case wa:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+DT(s.getShaderSource(e),o)}else return r}function NT(s,e){const t=LT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const UT={[wu]:"Linear",[Eu]:"Reinhard",[Au]:"Cineon",[Cu]:"ACESFilmic",[Sa]:"AgX",[Iu]:"Neutral",[Ru]:"Custom"};function OT(s,e){const t=UT[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qo=new C;function FT(){nt.getLuminanceCoefficients(qo);const s=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function kT(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zT(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function la(s){return s!==""}function pp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VT=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(s){return s.replace(VT,GT)}const HT=new Map;function GT(s,e){let t=Ye[e];if(t===void 0){const n=HT.get(e);if(n!==void 0)t=Ye[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return du(t)}const WT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(s){return s.replace(WT,XT)}function XT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _p(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qT={[ua]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function YT(s){return qT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZT={[li]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function KT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ZT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const $T={[Zi]:"ENVMAP_MODE_REFRACTION"};function JT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$T[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jT={[Va]:"ENVMAP_BLENDING_MULTIPLY",[dm]:"ENVMAP_BLENDING_MIX",[fm]:"ENVMAP_BLENDING_ADD"};function QT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":jT[s.combine]||"ENVMAP_BLENDING_NONE"}function ew(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tw(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=YT(t),l=KT(t),h=JT(t),u=QT(t),d=ew(t),f=BT(t),p=kT(r),_=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(la).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(la).join(`
`),g.length>0&&(g+=`
`)):(m=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),g=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Xn?OT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,NT("linearToOutputTexel",t.outputColorSpace),FT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),a=du(a),a=pp(a,t),a=mp(a,t),o=du(o),o=pp(o,t),o=mp(o,t),a=gp(a),o=gp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=x+m+a,v=x+g+o,w=up(i,i.VERTEX_SHADER,y),T=up(i,i.FRAGMENT_SHADER,v);i.attachShader(_,w),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(I){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(w)||"",G=i.getShaderInfoLog(T)||"",z=O.trim(),V=B.trim(),H=G.trim();let le=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,T);else{const _e=fp(i,w,"vertex"),ue=fp(i,T,"fragment");Be("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+_e+`
`+ue)}else z!==""?Me("WebGLProgram: Program Info Log:",z):(V===""||H==="")&&(j=!1);j&&(I.diagnostics={runnable:le,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:H,prefix:g}})}i.deleteShader(w),i.deleteShader(T),M=new Qo(i,_),S=zT(i,_)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(_,IT)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let nw=0;class iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sw(e),t.set(e,n)),n}}class sw{constructor(e){this.id=nw++,this.code=e,this.usedTimes=0}}function rw(s,e,t,n,i,r){const a=new fl,o=new iw,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,S,D,I,O){const B=I.fog,G=O.geometry,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,H=e.get(M.envMap||z,V),le=H&&H.mapping===zr?H.image.height:null,j=f[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&Me("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=_e!==void 0?_e.length:0;let xe=0;G.morphAttributes.position!==void 0&&(xe=1),G.morphAttributes.normal!==void 0&&(xe=2),G.morphAttributes.color!==void 0&&(xe=3);let qe,rt,ct,Q;if(j){const pt=Pn[j];qe=pt.vertexShader,rt=pt.fragmentShader}else qe=M.vertexShader,rt=M.fragmentShader,o.update(M),ct=o.getVertexShaderID(M),Q=o.getFragmentShaderID(M);const fe=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Oe=O.isInstancedMesh===!0,Ne=O.isBatchedMesh===!0,Le=!!M.map,at=!!M.matcap,Ke=!!H,ee=!!M.aoMap,oe=!!M.lightMap,ne=!!M.bumpMap,be=!!M.normalMap,P=!!M.displacementMap,He=!!M.emissiveMap,Se=!!M.metalnessMap,ze=!!M.roughnessMap,pe=M.anisotropy>0,R=M.clearcoat>0,b=M.dispersion>0,U=M.iridescence>0,$=M.sheen>0,W=M.transmission>0,k=pe&&!!M.anisotropyMap,se=R&&!!M.clearcoatMap,K=R&&!!M.clearcoatNormalMap,ge=R&&!!M.clearcoatRoughnessMap,Ie=U&&!!M.iridescenceMap,ie=U&&!!M.iridescenceThicknessMap,re=$&&!!M.sheenColorMap,De=$&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,ce=!!M.specularColorMap,Xe=!!M.specularIntensityMap,N=W&&!!M.transmissionMap,de=W&&!!M.thicknessMap,ae=!!M.gradientMap,Te=!!M.alphaMap,te=M.alphaTest>0,Y=!!M.alphaHash,Ae=!!M.extensions;let Ge=Xn;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const Mt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:rt,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&O._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&O.instanceColor!==null,instancingMorph:Oe&&O.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:jt,alphaToCoverage:!!M.alphaToCoverage,map:Le,matcap:at,envMap:Ke,envMapMode:Ke&&H.mapping,envMapCubeUVHeight:le,aoMap:ee,lightMap:oe,bumpMap:ne,normalMap:be,displacementMap:P,emissiveMap:He,normalMapObjectSpace:be&&M.normalMapType===ym,normalMapTangentSpace:be&&M.normalMapType===Qi,metalnessMap:Se,roughnessMap:ze,anisotropy:pe,anisotropyMap:k,clearcoat:R,clearcoatMap:se,clearcoatNormalMap:K,clearcoatRoughnessMap:ge,dispersion:b,iridescence:U,iridescenceMap:Ie,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:re,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:ce,specularIntensityMap:Xe,transmission:W,transmissionMap:N,thicknessMap:de,gradientMap:ae,opaque:M.transparent===!1&&M.blending===Ps&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:te,alphaHash:Y,combine:M.combine,mapUv:Le&&p(M.map.channel),aoMapUv:ee&&p(M.aoMap.channel),lightMapUv:oe&&p(M.lightMap.channel),bumpMapUv:ne&&p(M.bumpMap.channel),normalMapUv:be&&p(M.normalMap.channel),displacementMapUv:P&&p(M.displacementMap.channel),emissiveMapUv:He&&p(M.emissiveMap.channel),metalnessMapUv:Se&&p(M.metalnessMap.channel),roughnessMapUv:ze&&p(M.roughnessMap.channel),anisotropyMapUv:k&&p(M.anisotropyMap.channel),clearcoatMapUv:se&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:K&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:re&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(M.sheenRoughnessMap.channel),specularMapUv:Ce&&p(M.specularMap.channel),specularColorMapUv:ce&&p(M.specularColorMap.channel),specularIntensityMapUv:Xe&&p(M.specularIntensityMap.channel),transmissionMapUv:N&&p(M.transmissionMap.channel),thicknessMapUv:de&&p(M.thicknessMap.channel),alphaMapUv:Te&&p(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(be||pe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Le||Te),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||G.attributes.normal===void 0&&be===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Le&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ft,decodeVideoTextureEmissive:He&&M.emissiveMap.isVideoTexture===!0&&nt.getTransfer(M.emissiveMap.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gn,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ae&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&M.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(g(S,M),x(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=f[M.type];let D;if(S){const I=Pn[S];D=id.clone(I.uniforms)}else D=M.uniforms;return D}function v(M,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new tw(s,S,M,i),l.push(D),h.set(S,D)),D}function w(M){if(--M.usedTimes===0){const S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function T(M){o.remove(M)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:w,releaseShaderCache:T,programs:l,dispose:A}}function aw(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ow(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function xp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,m,g){let x=s[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},s[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=a(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=m,x.group=g),e++,x}function c(d,f,p,_,m,g){const x=o(d,f,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function l(d,f,p,_,m,g){const x=o(d,f,p,_,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||ow),n.length>1&&n.sort(f||xp),i.length>1&&i.sort(f||xp)}function u(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function cw(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new vp,s.set(n,[a])):i>=r.length?(a=new vp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function lw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ve};break;case"SpotLight":t={position:new C,direction:new C,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function hw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let uw=0;function dw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fw(s){const e=new lw,t=hw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,r=new ke,a=new ke;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,x=0,y=0,v=0,w=0,T=0,A=0;l.sort(dw);for(let S=0,D=l.length;S<D;S++){const I=l[S],O=I.color,B=I.intensity,G=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Os?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],B);A++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,le=t.get(I);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,n.directionalShadow[f]=le,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=V,f++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(O).multiplyScalar(B),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[_]=V;const H=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,H.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=H.matrix,I.castShadow){const le=t.get(I);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,n.spotShadow[_]=le,n.spotShadowMap[_]=z,v++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(O).multiplyScalar(B),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const H=I.shadow,le=t.get(I);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,le.shadowCameraNear=H.camera.near,le.shadowCameraFar=H.camera.far,n.pointShadow[p]=le,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=I.shadow.matrix,y++}n.point[p]=V,p++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(B),V.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[g]=V,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==f||M.pointLength!==p||M.spotLength!==_||M.rectAreaLength!==m||M.hemiLength!==g||M.numDirectionalShadows!==x||M.numPointShadows!==y||M.numSpotShadows!==v||M.numSpotMaps!==w||M.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,M.directionalLength=f,M.pointLength=p,M.spotLength=_,M.rectAreaLength=m,M.hemiLength=g,M.numDirectionalShadows=x,M.numPointShadows=y,M.numSpotShadows=v,M.numSpotMaps=w,M.numLightProbes=A,n.version=uw++)}function c(l,h){let u=0,d=0,f=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,x=l.length;g<x;g++){const y=l[g];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function yp(s){const e=new fw(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function pw(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new yp(s),e.set(i,[o])):r>=a.length?(o=new yp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gw=`uniform sampler2D shadow_pass;
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
}`,_w=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],xw=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Mp=new ke,ia=new C,Oh=new C;function vw(s,e,t){let n=new Vr;const i=new J,r=new J,a=new ht,o=new Ll,c=new rd,l={},h=t.maxTextureSize,u={[ci]:cn,[cn]:ci,[Gn]:Gn},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:mw,fragmentShader:gw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new $e;p.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua;let g=this.type;this.render=function(T,A,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===da&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ua);const S=s.getRenderTarget(),D=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(oi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=g!==this.type;B&&A.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(z=>z.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,z=T.length;G<z;G++){const V=T[G],H=V.shadow;if(H===void 0){Me("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const le=H.getFrameExtents();i.multiply(le),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,H.mapSize.y=r.y));const j=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=j,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===br){if(V.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ln(i.x,i.y,{format:Os,type:hi,minFilter:xt,magFilter:xt,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new Or(i.x,i.y,rn),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et}else V.isPointLight?(H.map=new yd(i.x),H.map.depthTexture=new Fm(i.x,Ln)):(H.map=new ln(i.x,i.y),H.map.depthTexture=new Or(i.x,i.y,Ln)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=ui,this.type===ua?(H.map.depthTexture.compareFunction=j?hl:ll,H.map.depthTexture.minFilter=xt,H.map.depthTexture.magFilter=xt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et);H.camera.updateProjectionMatrix()}const _e=H.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<_e;ue++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,ue),s.clear();else{ue===0&&(s.setRenderTarget(H.map),s.clear());const xe=H.getViewport(ue);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),O.viewport(a)}if(V.isPointLight){const xe=H.camera,qe=H.matrix,rt=V.distance||xe.far;rt!==xe.far&&(xe.far=rt,xe.updateProjectionMatrix()),ia.setFromMatrixPosition(V.matrixWorld),xe.position.copy(ia),Oh.copy(xe.position),Oh.add(_w[ue]),xe.up.copy(xw[ue]),xe.lookAt(Oh),xe.updateMatrixWorld(),qe.makeTranslation(-ia.x,-ia.y,-ia.z),Mp.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mp,xe.coordinateSystem,xe.reversedDepth)}else H.updateMatrices(V);n=H.getFrustum(),v(A,M,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===br&&x(H,M),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(S,D,I)};function x(T,A){const M=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ln(i.x,i.y,{format:Os,type:hi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,M,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,M,f,_,null)}function y(T,A,M,S){let D=null;const I=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)D=I;else if(D=M.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=D.uuid,B=A.uuid;let G=l[O];G===void 0&&(G={},l[O]=G);let z=G[B];z===void 0&&(z=D.clone(),G[B]=z,A.addEventListener("dispose",w)),D=z}if(D.visible=A.visible,D.wireframe=A.wireframe,S===br?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:u[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,M.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=s.properties.get(D);O.light=M}return D}function v(T,A,M,S,D){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===br)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const B=e.update(T),G=T.material;if(Array.isArray(G)){const z=B.groups;for(let V=0,H=z.length;V<H;V++){const le=z[V],j=G[le.materialIndex];if(j&&j.visible){const _e=y(T,j,S,D);T.onBeforeShadow(s,T,A,M,B,_e,le),s.renderBufferDirect(M,null,B,_e,T,le),T.onAfterShadow(s,T,A,M,B,_e,le)}}}else if(G.visible){const z=y(T,G,S,D);T.onBeforeShadow(s,T,A,M,B,z,null),s.renderBufferDirect(M,null,B,z,T,null),T.onAfterShadow(s,T,A,M,B,z,null)}}const O=T.children;for(let B=0,G=O.length;B<G;B++)v(O[B],A,M,S,D)}function w(T){T.target.removeEventListener("dispose",w);for(const M in l){const S=l[M],D=T.target.uuid;D in S&&(S[D].dispose(),delete S[D])}}}function yw(s,e){function t(){let N=!1;const de=new ht;let ae=null;const Te=new ht(0,0,0,0);return{setMask:function(te){ae!==te&&!N&&(s.colorMask(te,te,te,te),ae=te)},setLocked:function(te){N=te},setClear:function(te,Y,Ae,Ge,Mt){Mt===!0&&(te*=Ge,Y*=Ge,Ae*=Ge),de.set(te,Y,Ae,Ge),Te.equals(de)===!1&&(s.clearColor(te,Y,Ae,Ge),Te.copy(de))},reset:function(){N=!1,ae=null,Te.set(-1,0,0,0)}}}function n(){let N=!1,de=!1,ae=null,Te=null,te=null;return{setReversed:function(Y){if(de!==Y){const Ae=e.get("EXT_clip_control");Y?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),de=Y;const Ge=te;te=null,this.setClear(Ge)}},getReversed:function(){return de},setTest:function(Y){Y?fe(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(Y){ae!==Y&&!N&&(s.depthMask(Y),ae=Y)},setFunc:function(Y){if(de&&(Y=q_[Y]),Te!==Y){switch(Y){case ac:s.depthFunc(s.NEVER);break;case oc:s.depthFunc(s.ALWAYS);break;case cc:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case lc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case uc:s.depthFunc(s.GREATER);break;case dc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=Y}},setLocked:function(Y){N=Y},setClear:function(Y){te!==Y&&(te=Y,de&&(Y=1-Y),s.clearDepth(Y))},reset:function(){N=!1,ae=null,Te=null,te=null,de=!1}}}function i(){let N=!1,de=null,ae=null,Te=null,te=null,Y=null,Ae=null,Ge=null,Mt=null;return{setTest:function(pt){N||(pt?fe(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(pt){de!==pt&&!N&&(s.stencilMask(pt),de=pt)},setFunc:function(pt,fi,pi){(ae!==pt||Te!==fi||te!==pi)&&(s.stencilFunc(pt,fi,pi),ae=pt,Te=fi,te=pi)},setOp:function(pt,fi,pi){(Y!==pt||Ae!==fi||Ge!==pi)&&(s.stencilOp(pt,fi,pi),Y=pt,Ae=fi,Ge=pi)},setLocked:function(pt){N=pt},setClear:function(pt){Mt!==pt&&(s.clearStencil(pt),Mt=pt)},reset:function(){N=!1,de=null,ae=null,Te=null,te=null,Y=null,Ae=null,Ge=null,Mt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,y=null,v=null,w=null,T=null,A=new ve(0,0,0),M=0,S=!1,D=null,I=null,O=null,B=null,G=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,H=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(le)[1]),V=H>=1):le.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),V=H>=2);let j=null,_e={};const ue=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),qe=new ht().fromArray(ue),rt=new ht().fromArray(xe);function ct(N,de,ae,Te){const te=new Uint8Array(4),Y=s.createTexture();s.bindTexture(N,Y),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<ae;Ae++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(de+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return Y}const Q={};Q[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(s.DEPTH_TEST),a.setFunc(Us),ne(!1),be(Kh),fe(s.CULL_FACE),ee(oi);function fe(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function he(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Oe(N,de){return u[N]!==de?(s.bindFramebuffer(N,de),u[N]=de,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=de),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=de),!0):!1}function Ne(N,de){let ae=f,Te=!1;if(N){ae=d.get(de),ae===void 0&&(ae=[],d.set(de,ae));const te=N.textures;if(ae.length!==te.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,Ae=te.length;Y<Ae;Y++)ae[Y]=s.COLOR_ATTACHMENT0+Y;ae.length=te.length,Te=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,Te=!0);Te&&s.drawBuffers(ae)}function Le(N){return p!==N?(s.useProgram(N),p=N,!0):!1}const at={[zi]:s.FUNC_ADD,[Kp]:s.FUNC_SUBTRACT,[$p]:s.FUNC_REVERSE_SUBTRACT};at[Jp]=s.MIN,at[jp]=s.MAX;const Ke={[Qp]:s.ZERO,[em]:s.ONE,[tm]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[om]:s.SRC_ALPHA_SATURATE,[rm]:s.DST_COLOR,[im]:s.DST_ALPHA,[nm]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[am]:s.ONE_MINUS_DST_COLOR,[sm]:s.ONE_MINUS_DST_ALPHA,[cm]:s.CONSTANT_COLOR,[lm]:s.ONE_MINUS_CONSTANT_COLOR,[hm]:s.CONSTANT_ALPHA,[um]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(N,de,ae,Te,te,Y,Ae,Ge,Mt,pt){if(N===oi){_===!0&&(he(s.BLEND),_=!1);return}if(_===!1&&(fe(s.BLEND),_=!0),N!==Zp){if(N!==m||pt!==S){if((g!==zi||v!==zi)&&(s.blendEquation(s.FUNC_ADD),g=zi,v=zi),pt)switch(N){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $h:s.blendFunc(s.ONE,s.ONE);break;case Jh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Be("WebGLState: Invalid blending: ",N);break}else switch(N){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $h:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",N);break}x=null,y=null,w=null,T=null,A.set(0,0,0),M=0,m=N,S=pt}return}te=te||de,Y=Y||ae,Ae=Ae||Te,(de!==g||te!==v)&&(s.blendEquationSeparate(at[de],at[te]),g=de,v=te),(ae!==x||Te!==y||Y!==w||Ae!==T)&&(s.blendFuncSeparate(Ke[ae],Ke[Te],Ke[Y],Ke[Ae]),x=ae,y=Te,w=Y,T=Ae),(Ge.equals(A)===!1||Mt!==M)&&(s.blendColor(Ge.r,Ge.g,Ge.b,Mt),A.copy(Ge),M=Mt),m=N,S=!1}function oe(N,de){N.side===Gn?he(s.CULL_FACE):fe(s.CULL_FACE);let ae=N.side===cn;de&&(ae=!ae),ne(ae),N.blending===Ps&&N.transparent===!1?ee(oi):ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Te=N.stencilWrite;o.setTest(Te),Te&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),He(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function be(N){N!==qp?(fe(s.CULL_FACE),N!==I&&(N===Kh?s.cullFace(s.BACK):N===Yp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),I=N}function P(N){N!==O&&(V&&s.lineWidth(N),O=N)}function He(N,de,ae){N?(fe(s.POLYGON_OFFSET_FILL),(B!==de||G!==ae)&&(B=de,G=ae,a.getReversed()&&(de=-de),s.polygonOffset(de,ae))):he(s.POLYGON_OFFSET_FILL)}function Se(N){N?fe(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function ze(N){N===void 0&&(N=s.TEXTURE0+z-1),j!==N&&(s.activeTexture(N),j=N)}function pe(N,de,ae){ae===void 0&&(j===null?ae=s.TEXTURE0+z-1:ae=j);let Te=_e[ae];Te===void 0&&(Te={type:void 0,texture:void 0},_e[ae]=Te),(Te.type!==N||Te.texture!==de)&&(j!==ae&&(s.activeTexture(ae),j=ae),s.bindTexture(N,de||Q[N]),Te.type=N,Te.texture=de)}function R(){const N=_e[j];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function $(){try{s.texSubImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function W(){try{s.texSubImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function k(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function se(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function K(){try{s.texStorage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function ge(){try{s.texStorage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function Ie(){try{s.texImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function ie(){try{s.texImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function re(N){qe.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function De(N){rt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),rt.copy(N))}function Ce(N,de){let ae=l.get(de);ae===void 0&&(ae=new WeakMap,l.set(de,ae));let Te=ae.get(N);Te===void 0&&(Te=s.getUniformBlockIndex(de,N.name),ae.set(N,Te))}function ce(N,de){const Te=l.get(de).get(N);c.get(de)!==Te&&(s.uniformBlockBinding(de,Te,N.__bindingPointIndex),c.set(de,Te))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,_e={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,y=null,v=null,w=null,T=null,A=new ve(0,0,0),M=0,S=!1,D=null,I=null,O=null,B=null,G=null,qe.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:he,bindFramebuffer:Oe,drawBuffers:Ne,useProgram:Le,setBlending:ee,setMaterial:oe,setFlipSided:ne,setCullFace:be,setLineWidth:P,setPolygonOffset:He,setScissorTest:Se,activeTexture:ze,bindTexture:pe,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:U,texImage2D:Ie,texImage3D:ie,updateUBOMapping:Ce,uniformBlockBinding:ce,texStorage2D:K,texStorage3D:ge,texSubImage2D:$,texSubImage3D:W,compressedTexSubImage2D:k,compressedTexSubImage3D:se,scissor:re,viewport:De,reset:Xe}}function Mw(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return f?new OffscreenCanvas(R,b):Aa("canvas")}function _(R,b,U){let $=1;const W=pe(R);if((W.width>U||W.height>U)&&($=U/Math.max(W.width,W.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const k=Math.floor($*W.width),se=Math.floor($*W.height);u===void 0&&(u=p(k,se));const K=b?p(k,se):u;return K.width=k,K.height=se,K.getContext("2d").drawImage(R,0,0,k,se),Me("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+se+")."),K}else return"data"in R&&Me("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,b,U,$,W=!1){if(R!==null){if(s[R]!==void 0)return s[R];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let k=b;if(b===s.RED&&(U===s.FLOAT&&(k=s.R32F),U===s.HALF_FLOAT&&(k=s.R16F),U===s.UNSIGNED_BYTE&&(k=s.R8)),b===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(k=s.R8UI),U===s.UNSIGNED_SHORT&&(k=s.R16UI),U===s.UNSIGNED_INT&&(k=s.R32UI),U===s.BYTE&&(k=s.R8I),U===s.SHORT&&(k=s.R16I),U===s.INT&&(k=s.R32I)),b===s.RG&&(U===s.FLOAT&&(k=s.RG32F),U===s.HALF_FLOAT&&(k=s.RG16F),U===s.UNSIGNED_BYTE&&(k=s.RG8)),b===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(k=s.RG8UI),U===s.UNSIGNED_SHORT&&(k=s.RG16UI),U===s.UNSIGNED_INT&&(k=s.RG32UI),U===s.BYTE&&(k=s.RG8I),U===s.SHORT&&(k=s.RG16I),U===s.INT&&(k=s.RG32I)),b===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(k=s.RGB8UI),U===s.UNSIGNED_SHORT&&(k=s.RGB16UI),U===s.UNSIGNED_INT&&(k=s.RGB32UI),U===s.BYTE&&(k=s.RGB8I),U===s.SHORT&&(k=s.RGB16I),U===s.INT&&(k=s.RGB32I)),b===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(k=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(k=s.RGBA16UI),U===s.UNSIGNED_INT&&(k=s.RGBA32UI),U===s.BYTE&&(k=s.RGBA8I),U===s.SHORT&&(k=s.RGBA16I),U===s.INT&&(k=s.RGBA32I)),b===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&(k=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(k=s.R11F_G11F_B10F)),b===s.RGBA){const se=W?wa:nt.getTransfer($);U===s.FLOAT&&(k=s.RGBA32F),U===s.HALF_FLOAT&&(k=s.RGBA16F),U===s.UNSIGNED_BYTE&&(k=se===ft?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(k=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(k=s.RGB5_A1)}return(k===s.R16F||k===s.R32F||k===s.RG16F||k===s.RG32F||k===s.RGBA16F||k===s.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function v(R,b){let U;return R?b===null||b===Ln||b===Dr?U=s.DEPTH24_STENCIL8:b===rn?U=s.DEPTH32F_STENCIL8:b===Pr&&(U=s.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ln||b===Dr?U=s.DEPTH_COMPONENT24:b===rn?U=s.DEPTH_COMPONENT32F:b===Pr&&(U=s.DEPTH_COMPONENT16),U}function w(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Et&&R.minFilter!==xt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){const b=R.target;b.removeEventListener("dispose",T),M(b),b.isVideoTexture&&h.delete(b)}function A(R){const b=R.target;b.removeEventListener("dispose",A),D(b)}function M(R){const b=n.get(R);if(b.__webglInit===void 0)return;const U=R.source,$=d.get(U);if($){const W=$[b.__cacheKey];W.usedTimes--,W.usedTimes===0&&S(R),Object.keys($).length===0&&d.delete(U)}n.remove(R)}function S(R){const b=n.get(R);s.deleteTexture(b.__webglTexture);const U=R.source,$=d.get(U);delete $[b.__cacheKey],a.memory.textures--}function D(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let W=0;W<b.__webglFramebuffer[$].length;W++)s.deleteFramebuffer(b.__webglFramebuffer[$][W]);else s.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)s.deleteFramebuffer(b.__webglFramebuffer[$]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const U=R.textures;for(let $=0,W=U.length;$<W;$++){const k=n.get(U[$]);k.__webglTexture&&(s.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(U[$])}n.remove(R)}let I=0;function O(){I=0}function B(){const R=I;return R>=i.maxTextures&&Me("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function G(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function z(R,b){const U=n.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const $=R.image;if($===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(U,R,b);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+b)}function V(R,b){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Q(U,R,b);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+b)}function H(R,b){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Q(U,R,b);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+b)}function le(R,b){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){fe(U,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+b)}const j={[Ki]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[Ir]:s.MIRRORED_REPEAT},_e={[Et]:s.NEAREST,[tl]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[xt]:s.LINEAR,[Er]:s.LINEAR_MIPMAP_NEAREST,[Dn]:s.LINEAR_MIPMAP_LINEAR},ue={[Mm]:s.NEVER,[Em]:s.ALWAYS,[bm]:s.LESS,[ll]:s.LEQUAL,[Sm]:s.EQUAL,[hl]:s.GEQUAL,[Tm]:s.GREATER,[wm]:s.NOTEQUAL};function xe(R,b){if(b.type===rn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===xt||b.magFilter===Er||b.magFilter===ws||b.magFilter===Dn||b.minFilter===xt||b.minFilter===Er||b.minFilter===ws||b.minFilter===Dn)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,j[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,j[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,j[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,_e[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,_e[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Et||b.minFilter!==ws&&b.minFilter!==Dn||b.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function qe(R,b){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));const $=b.source;let W=d.get($);W===void 0&&(W={},d.set($,W));const k=G(b);if(k!==R.__cacheKey){W[k]===void 0&&(W[k]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),W[k].usedTimes++;const se=W[R.__cacheKey];se!==void 0&&(W[R.__cacheKey].usedTimes--,se.usedTimes===0&&S(b)),R.__cacheKey=k,R.__webglTexture=W[k].texture}return U}function rt(R,b,U){return Math.floor(Math.floor(R/U)/b)}function ct(R,b,U,$){const k=R.updateRanges;if(k.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,U,$,b.data);else{k.sort((ie,re)=>ie.start-re.start);let se=0;for(let ie=1;ie<k.length;ie++){const re=k[se],De=k[ie],Ce=re.start+re.count,ce=rt(De.start,b.width,4),Xe=rt(re.start,b.width,4);De.start<=Ce+1&&ce===Xe&&rt(De.start+De.count-1,b.width,4)===ce?re.count=Math.max(re.count,De.start+De.count-re.start):(++se,k[se]=De)}k.length=se+1;const K=s.getParameter(s.UNPACK_ROW_LENGTH),ge=s.getParameter(s.UNPACK_SKIP_PIXELS),Ie=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ie=0,re=k.length;ie<re;ie++){const De=k[ie],Ce=Math.floor(De.start/4),ce=Math.ceil(De.count/4),Xe=Ce%b.width,N=Math.floor(Ce/b.width),de=ce,ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Xe,N,de,ae,U,$,b.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,K),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Q(R,b,U){let $=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=s.TEXTURE_3D);const W=qe(R,b),k=b.source;t.bindTexture($,R.__webglTexture,s.TEXTURE0+U);const se=n.get(k);if(k.version!==se.__version||W===!0){t.activeTexture(s.TEXTURE0+U);const K=nt.getPrimaries(nt.workingColorSpace),ge=b.colorSpace===Si?null:nt.getPrimaries(b.colorSpace),Ie=b.colorSpace===Si||K===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ie=_(b.image,!1,i.maxTextureSize);ie=ze(b,ie);const re=r.convert(b.format,b.colorSpace),De=r.convert(b.type);let Ce=y(b.internalFormat,re,De,b.colorSpace,b.isVideoTexture);xe($,b);let ce;const Xe=b.mipmaps,N=b.isVideoTexture!==!0,de=se.__version===void 0||W===!0,ae=k.dataReady,Te=w(b,ie);if(b.isDepthTexture)Ce=v(b.format===Vi,b.type),de&&(N?t.texStorage2D(s.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ie.width,ie.height,0,re,De,null));else if(b.isDataTexture)if(Xe.length>0){N&&de&&t.texStorage2D(s.TEXTURE_2D,Te,Ce,Xe[0].width,Xe[0].height);for(let te=0,Y=Xe.length;te<Y;te++)ce=Xe[te],N?ae&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ce.width,ce.height,re,De,ce.data):t.texImage2D(s.TEXTURE_2D,te,Ce,ce.width,ce.height,0,re,De,ce.data);b.generateMipmaps=!1}else N?(de&&t.texStorage2D(s.TEXTURE_2D,Te,Ce,ie.width,ie.height),ae&&ct(b,ie,re,De)):t.texImage2D(s.TEXTURE_2D,0,Ce,ie.width,ie.height,0,re,De,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ce,Xe[0].width,Xe[0].height,ie.depth);for(let te=0,Y=Xe.length;te<Y;te++)if(ce=Xe[te],b.format!==an)if(re!==null)if(N){if(ae)if(b.layerUpdates.size>0){const Ae=lu(ce.width,ce.height,b.format,b.type);for(const Ge of b.layerUpdates){const Mt=ce.data.subarray(Ge*Ae/ce.data.BYTES_PER_ELEMENT,(Ge+1)*Ae/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Ge,ce.width,ce.height,1,re,Mt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,re,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Ce,ce.width,ce.height,ie.depth,0,ce.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,re,De,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Ce,ce.width,ce.height,ie.depth,0,re,De,ce.data)}else{N&&de&&t.texStorage2D(s.TEXTURE_2D,Te,Ce,Xe[0].width,Xe[0].height);for(let te=0,Y=Xe.length;te<Y;te++)ce=Xe[te],b.format!==an?re!==null?N?ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ce.width,ce.height,re,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Ce,ce.width,ce.height,0,ce.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ce.width,ce.height,re,De,ce.data):t.texImage2D(s.TEXTURE_2D,te,Ce,ce.width,ce.height,0,re,De,ce.data)}else if(b.isDataArrayTexture)if(N){if(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ce,ie.width,ie.height,ie.depth),ae)if(b.layerUpdates.size>0){const te=lu(ie.width,ie.height,b.format,b.type);for(const Y of b.layerUpdates){const Ae=ie.data.subarray(Y*te/ie.data.BYTES_PER_ELEMENT,(Y+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,ie.width,ie.height,1,re,De,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,re,De,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,re,De,ie.data);else if(b.isData3DTexture)N?(de&&t.texStorage3D(s.TEXTURE_3D,Te,Ce,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,re,De,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,re,De,ie.data);else if(b.isFramebufferTexture){if(de)if(N)t.texStorage2D(s.TEXTURE_2D,Te,Ce,ie.width,ie.height);else{let te=ie.width,Y=ie.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,Ce,te,Y,0,re,De,null),te>>=1,Y>>=1}}else if(Xe.length>0){if(N&&de){const te=pe(Xe[0]);t.texStorage2D(s.TEXTURE_2D,Te,Ce,te.width,te.height)}for(let te=0,Y=Xe.length;te<Y;te++)ce=Xe[te],N?ae&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,re,De,ce):t.texImage2D(s.TEXTURE_2D,te,Ce,re,De,ce);b.generateMipmaps=!1}else if(N){if(de){const te=pe(ie);t.texStorage2D(s.TEXTURE_2D,Te,Ce,te.width,te.height)}ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,De,ie)}else t.texImage2D(s.TEXTURE_2D,0,Ce,re,De,ie);m(b)&&g($),se.__version=k.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function fe(R,b,U){if(b.image.length!==6)return;const $=qe(R,b),W=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+U);const k=n.get(W);if(W.version!==k.__version||$===!0){t.activeTexture(s.TEXTURE0+U);const se=nt.getPrimaries(nt.workingColorSpace),K=b.colorSpace===Si?null:nt.getPrimaries(b.colorSpace),ge=b.colorSpace===Si||se===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,re=[];for(let Y=0;Y<6;Y++)!Ie&&!ie?re[Y]=_(b.image[Y],!0,i.maxCubemapSize):re[Y]=ie?b.image[Y].image:b.image[Y],re[Y]=ze(b,re[Y]);const De=re[0],Ce=r.convert(b.format,b.colorSpace),ce=r.convert(b.type),Xe=y(b.internalFormat,Ce,ce,b.colorSpace),N=b.isVideoTexture!==!0,de=k.__version===void 0||$===!0,ae=W.dataReady;let Te=w(b,De);xe(s.TEXTURE_CUBE_MAP,b);let te;if(Ie){N&&de&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Xe,De.width,De.height);for(let Y=0;Y<6;Y++){te=re[Y].mipmaps;for(let Ae=0;Ae<te.length;Ae++){const Ge=te[Ae];b.format!==an?Ce!==null?N?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae,0,0,Ge.width,Ge.height,Ce,Ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae,Xe,Ge.width,Ge.height,0,Ge.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae,0,0,Ge.width,Ge.height,Ce,ce,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae,Xe,Ge.width,Ge.height,0,Ce,ce,Ge.data)}}}else{if(te=b.mipmaps,N&&de){te.length>0&&Te++;const Y=pe(re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Xe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ie){N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,re[Y].width,re[Y].height,Ce,ce,re[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,re[Y].width,re[Y].height,0,Ce,ce,re[Y].data);for(let Ae=0;Ae<te.length;Ae++){const Mt=te[Ae].image[Y].image;N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae+1,0,0,Mt.width,Mt.height,Ce,ce,Mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae+1,Xe,Mt.width,Mt.height,0,Ce,ce,Mt.data)}}else{N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,ce,re[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,Ce,ce,re[Y]);for(let Ae=0;Ae<te.length;Ae++){const Ge=te[Ae];N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae+1,0,0,Ce,ce,Ge.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae+1,Xe,Ce,ce,Ge.image[Y])}}}m(b)&&g(s.TEXTURE_CUBE_MAP),k.__version=W.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function he(R,b,U,$,W,k){const se=r.convert(U.format,U.colorSpace),K=r.convert(U.type),ge=y(U.internalFormat,se,K,U.colorSpace),Ie=n.get(b),ie=n.get(U);if(ie.__renderTarget=b,!Ie.__hasExternalTextures){const re=Math.max(1,b.width>>k),De=Math.max(1,b.height>>k);W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?t.texImage3D(W,k,ge,re,De,b.depth,0,se,K,null):t.texImage2D(W,k,ge,re,De,0,se,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),He(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,W,ie.__webglTexture,0,P(b)):(W===s.TEXTURE_2D||W>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,W,ie.__webglTexture,k),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(R,b,U){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){const $=b.depthTexture,W=$&&$.isDepthTexture?$.type:null,k=v(b.stencilBuffer,W),se=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;He(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(b),k,b.width,b.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(b),k,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,k,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,R)}else{const $=b.textures;for(let W=0;W<$.length;W++){const k=$[W],se=r.convert(k.format,k.colorSpace),K=r.convert(k.type),ge=y(k.internalFormat,se,K,k.colorSpace);He(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(b),ge,b.width,b.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(b),ge,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ge,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(R,b,U){const $=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(b.depthTexture);if(W.__renderTarget=b,(!W.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$){if(W.__webglInit===void 0&&(W.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),W.__webglTexture===void 0){W.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),xe(s.TEXTURE_CUBE_MAP,b.depthTexture);const Ie=r.convert(b.depthTexture.format),ie=r.convert(b.depthTexture.type);let re;b.depthTexture.format===ui?re=s.DEPTH_COMPONENT24:b.depthTexture.format===Vi&&(re=s.DEPTH24_STENCIL8);for(let De=0;De<6;De++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,re,b.width,b.height,0,Ie,ie,null)}}else z(b.depthTexture,0);const k=W.__webglTexture,se=P(b),K=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,ge=b.depthTexture.format===Vi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ui)He(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,K,k,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,ge,K,k,0);else if(b.depthTexture.format===Vi)He(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,K,k,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,ge,K,k,0);else throw new Error("Unknown depthTexture format")}function Le(R){const b=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const W=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",W)};$.addEventListener("dispose",W),b.__depthDisposeCallback=W}b.__boundDepthTexture=$}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(U)for(let $=0;$<6;$++)Ne(b.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?Ne(b.__webglFramebuffer[0],R,0):Ne(b.__webglFramebuffer,R,0)}else if(U){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=s.createRenderbuffer(),Oe(b.__webglDepthbuffer[$],R,!1);else{const W=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=b.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,k),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,k)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Oe(b.__webglDepthbuffer,R,!1);else{const W=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,k),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,k)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(R,b,U){const $=n.get(R);b!==void 0&&he($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Le(R)}function Ke(R){const b=R.texture,U=n.get(R),$=n.get(b);R.addEventListener("dispose",A);const W=R.textures,k=R.isWebGLCubeRenderTarget===!0,se=W.length>1;if(se||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=b.version,a.memory.textures++),k){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let ge=0;ge<b.mipmaps.length;ge++)U.__webglFramebuffer[K][ge]=s.createFramebuffer()}else U.__webglFramebuffer[K]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)U.__webglFramebuffer[K]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(se)for(let K=0,ge=W.length;K<ge;K++){const Ie=n.get(W[K]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&He(R)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<W.length;K++){const ge=W[K];U.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[K]);const Ie=r.convert(ge.format,ge.colorSpace),ie=r.convert(ge.type),re=y(ge.internalFormat,Ie,ie,ge.colorSpace,R.isXRRenderTarget===!0),De=P(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,re,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,U.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(k){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),xe(s.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)he(U.__webglFramebuffer[K][ge],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge);else he(U.__webglFramebuffer[K],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(b)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let K=0,ge=W.length;K<ge;K++){const Ie=W[K],ie=n.get(Ie);let re=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,ie.__webglTexture),xe(re,Ie),he(U.__webglFramebuffer,R,Ie,s.COLOR_ATTACHMENT0+K,re,0),m(Ie)&&g(re)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,$.__webglTexture),xe(K,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)he(U.__webglFramebuffer[ge],R,b,s.COLOR_ATTACHMENT0,K,ge);else he(U.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,K,0);m(b)&&g(K),t.unbindTexture()}R.depthBuffer&&Le(R)}function ee(R){const b=R.textures;for(let U=0,$=b.length;U<$;U++){const W=b[U];if(m(W)){const k=x(R),se=n.get(W).__webglTexture;t.bindTexture(k,se),g(k),t.unbindTexture()}}}const oe=[],ne=[];function be(R){if(R.samples>0){if(He(R)===!1){const b=R.textures,U=R.width,$=R.height;let W=s.COLOR_BUFFER_BIT;const k=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=n.get(R),K=b.length>1;if(K)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ge=R.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(W|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(W|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ie]);const ie=n.get(b[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,U,$,0,0,U,$,W,s.NEAREST),c===!0&&(oe.length=0,ne.length=0,oe.push(s.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(oe.push(k),ne.push(k),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ie]);const ie=n.get(b[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function P(R){return Math.min(i.maxSamples,R.samples)}function He(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(R){const b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function ze(R,b){const U=R.colorSpace,$=R.format,W=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==jt&&U!==Si&&(nt.getTransfer(U)===ft?($!==an||W!==mn)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",U)),b}function pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=le,this.rebindTextures=at,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=he,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Pg(s,e){function t(n,i=Si){let r;const a=nt.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===il)return s.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return s.BYTE;if(n===Du)return s.SHORT;if(n===Pr)return s.UNSIGNED_SHORT;if(n===nl)return s.INT;if(n===Ln)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===hi)return s.HALF_FLOAT;if(n===Uu)return s.ALPHA;if(n===Ou)return s.RGB;if(n===an)return s.RGBA;if(n===ui)return s.DEPTH_COMPONENT;if(n===Vi)return s.DEPTH_STENCIL;if(n===rl)return s.RED;if(n===Ha)return s.RED_INTEGER;if(n===Os)return s.RG;if(n===al)return s.RG_INTEGER;if(n===ol)return s.RGBA_INTEGER;if(n===ma||n===ga||n===_a||n===xa)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fc||n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===xc||n===vc||n===yc||n===Mc||n===bc||n===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_c||n===xc)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yc)return r.COMPRESSED_R11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===bc)return r.COMPRESSED_RG11_EAC;if(n===Sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tc||n===wc||n===Ec||n===Ac||n===Cc||n===Rc||n===Ic||n===Pc||n===Dc||n===Lc||n===Nc||n===Uc||n===Oc||n===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ec)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bc||n===kc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bc)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vc||n===Hc||n===Gc||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sw=`
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

}`;class Tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new $u(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _n({vertexShader:bw,fragmentShader:Sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ww extends di{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new Tw,g={},x=t.getContextAttributes();let y=null,v=null;const w=[],T=[],A=new J;let M=null;const S=new Bt;S.viewport=new ht;const D=new Bt;D.viewport=new ht;const I=[S,D],O=new _g;let B=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=w[Q];return fe===void 0&&(fe=new jo,w[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=w[Q];return fe===void 0&&(fe=new jo,w[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=w[Q];return fe===void 0&&(fe=new jo,w[Q]=fe),fe.getHandSpace()};function z(Q){const fe=T.indexOf(Q.inputSource);if(fe===-1)return;const he=w[fe];he!==void 0&&(he.update(Q.inputSource,Q.frame,l||a),he.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",H);for(let Q=0;Q<w.length;Q++){const fe=T[Q];fe!==null&&(T[Q]=null,w[Q].disconnect(fe))}B=null,G=null,m.reset();for(const Q in g)delete g[Q];e.setRenderTarget(y),f=null,d=null,u=null,i=null,v=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",V),i.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Oe=null,Ne=null;x.depth&&(Ne=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=x.stencil?Vi:ui,Oe=x.stencil?Dr:Ln);const Le={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ln(d.textureWidth,d.textureHeight,{format:an,type:mn,depthTexture:new Or(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ln(f.framebufferWidth,f.framebufferHeight,{format:an,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Q){for(let fe=0;fe<Q.removed.length;fe++){const he=Q.removed[fe],Oe=T.indexOf(he);Oe>=0&&(T[Oe]=null,w[Oe].disconnect(he))}for(let fe=0;fe<Q.added.length;fe++){const he=Q.added[fe];let Oe=T.indexOf(he);if(Oe===-1){for(let Le=0;Le<w.length;Le++)if(Le>=T.length){T.push(he),Oe=Le;break}else if(T[Le]===null){T[Le]=he,Oe=Le;break}if(Oe===-1)break}const Ne=w[Oe];Ne&&Ne.connect(he)}}const le=new C,j=new C;function _e(Q,fe,he){le.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(he.matrixWorld);const Oe=le.distanceTo(j),Ne=fe.projectionMatrix.elements,Le=he.projectionMatrix.elements,at=Ne[14]/(Ne[10]-1),Ke=Ne[14]/(Ne[10]+1),ee=(Ne[9]+1)/Ne[5],oe=(Ne[9]-1)/Ne[5],ne=(Ne[8]-1)/Ne[0],be=(Le[8]+1)/Le[0],P=at*ne,He=at*be,Se=Oe/(-ne+be),ze=Se*-ne;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ze),Q.translateZ(Se),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const pe=at+Se,R=Ke+Se,b=P-ze,U=He+(Oe-ze),$=ee*Ke/R*pe,W=oe*Ke/R*pe;Q.projectionMatrix.makePerspective(b,U,$,W,pe,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let fe=Q.near,he=Q.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(he=m.depthFar)),O.near=D.near=S.near=fe,O.far=D.far=S.far=he,(B!==O.near||G!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,G=O.far),O.layers.mask=Q.layers.mask|6,S.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const Oe=Q.parent,Ne=O.cameras;ue(O,Oe);for(let Le=0;Le<Ne.length;Le++)ue(Ne[Le],Oe);Ne.length===2?_e(O,S,D):O.projectionMatrix.copy(S.projectionMatrix),xe(Q,O,Oe)};function xe(Q,fe,he){he===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(he.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ur*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Q){return g[Q]};let qe=null;function rt(Q,fe){if(h=fe.getViewerPose(l||a),p=fe,h!==null){const he=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Oe=!1;he.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let Ke=0;Ke<he.length;Ke++){const ee=he[Ke];let oe=null;if(f!==null)oe=f.getViewport(ee);else{const be=u.getViewSubImage(d,ee);oe=be.viewport,Ke===0&&(e.setRenderTargetTextures(v,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(v))}let ne=I[Ke];ne===void 0&&(ne=new Bt,ne.layers.enable(Ke),ne.viewport=new ht,I[Ke]=ne),ne.matrix.fromArray(ee.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ee.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(oe.x,oe.y,oe.width,oe.height),Ke===0&&(O.matrix.copy(ne.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(ne)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Ke=u.getDepthInformation(he[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,i.renderState)}if(Ne&&Ne.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Ke=0;Ke<he.length;Ke++){const ee=he[Ke].camera;if(ee){let oe=g[ee];oe||(oe=new $u,g[ee]=oe);const ne=u.getCameraImage(ee);oe.sourceTexture=ne}}}}for(let he=0;he<w.length;he++){const Oe=T[he],Ne=w[he];Oe!==null&&Ne!==void 0&&Ne.update(Oe,fe,l||a)}qe&&qe(Q,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),p=null}const ct=new Eg;ct.setAnimationLoop(rt),this.setAnimationLoop=function(Q){qe=Q},this.dispose=function(){}}}const xs=new En,Ew=new ke;function Aw(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$m(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,y,v){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,x,y):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===cn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===cn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,xs.copy(v),xs.x*=-1,xs.y*=-1,xs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(Ew.makeRotationFromEuler(xs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,x,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cw(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=i[x.id];v===void 0&&(p(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const w=y.program;n.updateUBOMapping(x,w);const T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const y=u();x.__bindingPointIndex=y;const v=s.createBuffer(),w=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,A=v.length;T<A;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,D=M.length;S<D;S++){const I=M[S];if(f(I,T,S,w)===!0){const O=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let z=0;z<B.length;z++){const V=B[z],H=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,O+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,v,w){const T=x.value,A=y+"_"+v;if(w[A]===void 0)return typeof T=="number"||typeof T=="boolean"?w[A]=T:w[A]=T.clone(),!0;{const M=w[A];if(typeof T=="number"||typeof T=="boolean"){if(M!==T)return w[A]=T,!0}else if(M.equals(T)===!1)return M.copy(T),!0}return!1}function p(x){const y=x.uniforms;let v=0;const w=16;for(let A=0,M=y.length;A<M;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let D=0,I=S.length;D<I;D++){const O=S[D],B=Array.isArray(O.value)?O.value:[O.value];for(let G=0,z=B.length;G<z;G++){const V=B[G],H=_(V),le=v%w,j=le%H.boundary,_e=le+j;v+=j,_e!==0&&w-_e<H.storage&&(v+=w-_e),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=H.storage}}}const T=v%w;return T>0&&(v+=w-T),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:g}}const Rw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function Iw(){return ti===null&&(ti=new qn(Rw,16,16,Os,hi),ti.name="DFG_LUT",ti.minFilter=xt,ti.magFilter=xt,ti.wrapS=sn,ti.wrapT=sn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Dg{constructor(e={}){const{canvas:t=Cm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,m=new Set([ol,al,Ha]),g=new Set([mn,Ln,Pr,Dr,il,sl]),x=new Uint32Array(4),y=new Int32Array(4);let v=null,w=null;const T=[],A=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=Ft;let I=0,O=0,B=null,G=-1,z=null;const V=new ht,H=new ht;let le=null;const j=new ve(0);let _e=0,ue=t.width,xe=t.height,qe=1,rt=null,ct=null;const Q=new ht(0,0,ue,xe),fe=new ht(0,0,ue,xe);let he=!1;const Oe=new Vr;let Ne=!1,Le=!1;const at=new ke,Ke=new C,ee=new ht,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function be(){return B===null?qe:1}let P=n;function He(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),P===null){const F="webgl2";if(P=He(F,E),P===null)throw He(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Be("WebGLRenderer: "+E.message),E}let Se,ze,pe,R,b,U,$,W,k,se,K,ge,Ie,ie,re,De,Ce,ce,Xe,N,de,ae,Te;function te(){Se=new DS(P),Se.init(),de=new Pg(P,Se),ze=new TS(P,Se,e,de),pe=new yw(P,Se),ze.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),R=new US(P),b=new aw,U=new Mw(P,Se,pe,b,ze,de,R),$=new PS(S),W=new zy(P),ae=new bS(P,W),k=new LS(P,W,R,ae),se=new FS(P,k,W,ae,R),ce=new OS(P,ze,U),re=new wS(b),K=new rw(S,$,Se,ze,ae,re),ge=new Aw(S,b),Ie=new cw,ie=new pw(Se),Ce=new MS(S,$,pe,se,p,c),De=new vw(S,se,ze),Te=new Cw(P,R,ze,pe),Xe=new SS(P,Se,R),N=new NS(P,Se,R),R.programs=K.programs,S.capabilities=ze,S.extensions=Se,S.properties=b,S.renderLists=Ie,S.shadowMap=De,S.state=pe,S.info=R}te(),_!==mn&&(M=new kS(_,t.width,t.height,i,r));const Y=new ww(S,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return qe},this.setPixelRatio=function(E){E!==void 0&&(qe=E,this.setSize(ue,xe,!1))},this.getSize=function(E){return E.set(ue,xe)},this.setSize=function(E,F,Z=!0){if(Y.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=E,xe=F,t.width=Math.floor(E*qe),t.height=Math.floor(F*qe),Z===!0&&(t.style.width=E+"px",t.style.height=F+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ue*qe,xe*qe).floor()},this.setDrawingBufferSize=function(E,F,Z){ue=E,xe=F,qe=Z,t.width=Math.floor(E*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(_===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(V)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,F,Z,q){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,F,Z,q),pe.viewport(V.copy(Q).multiplyScalar(qe).round())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,F,Z,q){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,F,Z,q),pe.scissor(H.copy(fe).multiplyScalar(qe).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){pe.setScissorTest(he=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){ct=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Z=!0){let q=0;if(E){let X=!1;if(B!==null){const we=B.texture.format;X=m.has(we)}if(X){const we=B.texture.type,Pe=g.has(we),Ee=Ce.getClearColor(),Ue=Ce.getClearAlpha(),Ve=Ee.r,je=Ee.g,et=Ee.b;Pe?(x[0]=Ve,x[1]=je,x[2]=et,x[3]=Ue,P.clearBufferuiv(P.COLOR,0,x)):(y[0]=Ve,y[1]=je,y[2]=et,y[3]=Ue,P.clearBufferiv(P.COLOR,0,y))}else q|=P.COLOR_BUFFER_BIT}F&&(q|=P.DEPTH_BUFFER_BIT),Z&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),Ce.dispose(),Ie.dispose(),ie.dispose(),b.dispose(),$.dispose(),se.dispose(),ae.dispose(),Te.dispose(),K.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Rd),Y.removeEventListener("sessionend",Id),is.stop()};function Ae(E){E.preventDefault(),Ca("WebGLRenderer: Context Lost."),D=!0}function Ge(){Ca("WebGLRenderer: Context Restored."),D=!1;const E=R.autoReset,F=De.enabled,Z=De.autoUpdate,q=De.needsUpdate,X=De.type;te(),R.autoReset=E,De.enabled=F,De.autoUpdate=Z,De.needsUpdate=q,De.type=X}function Mt(E){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){const F=E.target;F.removeEventListener("dispose",pt),fi(F)}function fi(E){pi(E),b.remove(E)}function pi(E){const F=b.get(E).programs;F!==void 0&&(F.forEach(function(Z){K.releaseProgram(Z)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Z,q,X,we){F===null&&(F=oe);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,Ee=Jg(E,F,Z,q,X);pe.setMaterial(q,Pe);let Ue=Z.index,Ve=1;if(q.wireframe===!0){if(Ue=k.getWireframeAttribute(Z),Ue===void 0)return;Ve=2}const je=Z.drawRange,et=Z.attributes.position;let We=je.start*Ve,mt=(je.start+je.count)*Ve;we!==null&&(We=Math.max(We,we.start*Ve),mt=Math.min(mt,(we.start+we.count)*Ve)),Ue!==null?(We=Math.max(We,0),mt=Math.min(mt,Ue.count)):et!=null&&(We=Math.max(We,0),mt=Math.min(mt,et.count));const Rt=mt-We;if(Rt<0||Rt===1/0)return;ae.setup(X,q,Ee,Z,Ue);let At,gt=Xe;if(Ue!==null&&(At=W.get(Ue),gt=N,gt.setIndex(At)),X.isMesh)q.wireframe===!0?(pe.setLineWidth(q.wireframeLinewidth*be()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(X.isLine){let Zt=q.linewidth;Zt===void 0&&(Zt=1),pe.setLineWidth(Zt*be()),X.isLineSegments?gt.setMode(P.LINES):X.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else X.isPoints?gt.setMode(P.POINTS):X.isSprite&&gt.setMode(P.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ra("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Zt=X._multiDrawStarts,Fe=X._multiDrawCounts,vn=X._multiDrawCount,lt=Ue?W.get(Ue).bytesPerElement:1,Fn=b.get(q).currentProgram.getUniforms();for(let Jn=0;Jn<vn;Jn++)Fn.setValue(P,"_gl_DrawID",Jn),gt.render(Zt[Jn]/lt,Fe[Jn])}else if(X.isInstancedMesh)gt.renderInstances(We,Rt,X.count);else if(Z.isInstancedBufferGeometry){const Zt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fe=Math.min(Z.instanceCount,Zt);gt.renderInstances(We,Rt,Fe)}else gt.render(We,Rt)};function Cd(E,F,Z){E.transparent===!0&&E.side===Gn&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,ja(E,F,Z),E.side=ci,E.needsUpdate=!0,ja(E,F,Z),E.side=Gn):ja(E,F,Z)}this.compile=function(E,F,Z=null){Z===null&&(Z=E),w=ie.get(Z),w.init(F),A.push(w),Z.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),E!==Z&&E.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights();const q=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Ee=we[Pe];Cd(Ee,Z,X),q.add(Ee)}else Cd(we,Z,X),q.add(we)}),w=A.pop(),q},this.compileAsync=function(E,F,Z=null){const q=this.compile(E,F,Z);return new Promise(X=>{function we(){if(q.forEach(function(Pe){b.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){X(E);return}setTimeout(we,10)}Se.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Hl=null;function $g(E){Hl&&Hl(E)}function Rd(){is.stop()}function Id(){is.start()}const is=new Eg;is.setAnimationLoop($g),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(E){Hl=E,Y.setAnimationLoop(E),E===null?is.stop():is.start()},Y.addEventListener("sessionstart",Rd),Y.addEventListener("sessionend",Id),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const Z=Y.enabled===!0&&Y.isPresenting===!0,q=M!==null&&(B===null||Z)&&M.begin(S,B);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,F,B),w=ie.get(E,A.length),w.init(F),A.push(w),at.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(at,Tn,F.reversedDepth),Le=this.localClippingEnabled,Ne=re.init(this.clippingPlanes,Le),v=Ie.get(E,T.length),v.init(),T.push(v),Y.enabled===!0&&Y.isPresenting===!0){const Pe=S.xr.getDepthSensingMesh();Pe!==null&&Gl(Pe,F,-1/0,S.sortObjects)}Gl(E,F,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(rt,ct),ne=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ne&&Ce.addToRenderList(v,E),this.info.render.frame++,Ne===!0&&re.beginShadows();const X=w.state.shadowsArray;if(De.render(X,E,F),Ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&M.hasRenderPass())===!1){const Pe=v.opaque,Ee=v.transmissive;if(w.setupLights(),F.isArrayCamera){const Ue=F.cameras;if(Ee.length>0)for(let Ve=0,je=Ue.length;Ve<je;Ve++){const et=Ue[Ve];Dd(Pe,Ee,E,et)}ne&&Ce.render(E);for(let Ve=0,je=Ue.length;Ve<je;Ve++){const et=Ue[Ve];Pd(v,E,et,et.viewport)}}else Ee.length>0&&Dd(Pe,Ee,E,F),ne&&Ce.render(E),Pd(v,E,F)}B!==null&&O===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),q&&M.end(S),E.isScene===!0&&E.onAfterRender(S,E,F),ae.resetDefaultState(),G=-1,z=null,A.pop(),A.length>0?(w=A[A.length-1],Ne===!0&&re.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?v=T[T.length-1]:v=null};function Gl(E,F,Z,q){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Oe.intersectsSprite(E)){q&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);const Pe=se.update(E),Ee=E.material;Ee.visible&&v.push(E,Pe,Ee,Z,ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Oe.intersectsObject(E))){const Pe=se.update(E),Ee=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ee.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ee.copy(Pe.boundingSphere.center)),ee.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(Ee)){const Ue=Pe.groups;for(let Ve=0,je=Ue.length;Ve<je;Ve++){const et=Ue[Ve],We=Ee[et.materialIndex];We&&We.visible&&v.push(E,Pe,We,Z,ee.z,et)}}else Ee.visible&&v.push(E,Pe,Ee,Z,ee.z,null)}}const we=E.children;for(let Pe=0,Ee=we.length;Pe<Ee;Pe++)Gl(we[Pe],F,Z,q)}function Pd(E,F,Z,q){const{opaque:X,transmissive:we,transparent:Pe}=E;w.setupLightsView(Z),Ne===!0&&re.setGlobalState(S.clippingPlanes,Z),q&&pe.viewport(V.copy(q)),X.length>0&&Ja(X,F,Z),we.length>0&&Ja(we,F,Z),Pe.length>0&&Ja(Pe,F,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Dd(E,F,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){const We=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new ln(1,1,{generateMipmaps:!0,type:We?hi:mn,minFilter:Dn,samples:Math.max(4,ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const we=w.state.transmissionRenderTarget[q.id],Pe=q.viewport||V;we.setSize(Pe.z*S.transmissionResolutionScale,Pe.w*S.transmissionResolutionScale);const Ee=S.getRenderTarget(),Ue=S.getActiveCubeFace(),Ve=S.getActiveMipmapLevel();S.setRenderTarget(we),S.getClearColor(j),_e=S.getClearAlpha(),_e<1&&S.setClearColor(16777215,.5),S.clear(),ne&&Ce.render(Z);const je=S.toneMapping;S.toneMapping=Xn;const et=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),Ne===!0&&re.setGlobalState(S.clippingPlanes,q),Ja(E,Z,q),U.updateMultisampleRenderTarget(we),U.updateRenderTargetMipmap(we),Se.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let mt=0,Rt=F.length;mt<Rt;mt++){const At=F[mt],{object:gt,geometry:Zt,material:Fe,group:vn}=At;if(Fe.side===Gn&&gt.layers.test(q.layers)){const lt=Fe.side;Fe.side=cn,Fe.needsUpdate=!0,Ld(gt,Z,q,Zt,Fe,vn),Fe.side=lt,Fe.needsUpdate=!0,We=!0}}We===!0&&(U.updateMultisampleRenderTarget(we),U.updateRenderTargetMipmap(we))}S.setRenderTarget(Ee,Ue,Ve),S.setClearColor(j,_e),et!==void 0&&(q.viewport=et),S.toneMapping=je}function Ja(E,F,Z){const q=F.isScene===!0?F.overrideMaterial:null;for(let X=0,we=E.length;X<we;X++){const Pe=E[X],{object:Ee,geometry:Ue,group:Ve}=Pe;let je=Pe.material;je.allowOverride===!0&&q!==null&&(je=q),Ee.layers.test(Z.layers)&&Ld(Ee,F,Z,Ue,je,Ve)}}function Ld(E,F,Z,q,X,we){E.onBeforeRender(S,F,Z,q,X,we),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(S,F,Z,q,E,we),X.transparent===!0&&X.side===Gn&&X.forceSinglePass===!1?(X.side=cn,X.needsUpdate=!0,S.renderBufferDirect(Z,F,q,X,E,we),X.side=ci,X.needsUpdate=!0,S.renderBufferDirect(Z,F,q,X,E,we),X.side=Gn):S.renderBufferDirect(Z,F,q,X,E,we),E.onAfterRender(S,F,Z,q,X,we)}function ja(E,F,Z){F.isScene!==!0&&(F=oe);const q=b.get(E),X=w.state.lights,we=w.state.shadowsArray,Pe=X.state.version,Ee=K.getParameters(E,X.state,we,F,Z),Ue=K.getProgramCacheKey(Ee);let Ve=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;const je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=$.get(E.envMap||q.environment,je),q.envMapRotation=q.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ve===void 0&&(E.addEventListener("dispose",pt),Ve=new Map,q.programs=Ve);let et=Ve.get(Ue);if(et!==void 0){if(q.currentProgram===et&&q.lightsStateVersion===Pe)return Ud(E,Ee),et}else Ee.uniforms=K.getUniforms(E),E.onBeforeCompile(Ee,S),et=K.acquireProgram(Ee,Ue),Ve.set(Ue,et),q.uniforms=Ee.uniforms;const We=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=re.uniform),Ud(E,Ee),q.needsLights=Qg(E),q.lightsStateVersion=Pe,q.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=et,q.uniformsList=null,et}function Nd(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Qo.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Ud(E,F){const Z=b.get(E);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Jg(E,F,Z,q,X){F.isScene!==!0&&(F=oe),U.resetTextureUnits();const we=F.fog,Pe=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,Ee=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:jt,Ue=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ve=$.get(q.envMap||Pe,Ue),je=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,et=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),We=!!Z.morphAttributes.position,mt=!!Z.morphAttributes.normal,Rt=!!Z.morphAttributes.color;let At=Xn;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(At=S.toneMapping);const gt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Zt=gt!==void 0?gt.length:0,Fe=b.get(q),vn=w.state.lights;if(Ne===!0&&(Le===!0||E!==z)){const Gt=E===z&&q.id===G;re.setState(q,E,Gt)}let lt=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==vn.state.version||Fe.outputColorSpace!==Ee||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==Ve||q.fog===!0&&Fe.fog!==we||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==re.numPlanes||Fe.numIntersection!==re.numIntersection)||Fe.vertexAlphas!==je||Fe.vertexTangents!==et||Fe.morphTargets!==We||Fe.morphNormals!==mt||Fe.morphColors!==Rt||Fe.toneMapping!==At||Fe.morphTargetsCount!==Zt)&&(lt=!0):(lt=!0,Fe.__version=q.version);let Fn=Fe.currentProgram;lt===!0&&(Fn=ja(q,F,X));let Jn=!1,ss=!1,js=!1;const vt=Fn.getUniforms(),qt=Fe.uniforms;if(pe.useProgram(Fn.program)&&(Jn=!0,ss=!0,js=!0),q.id!==G&&(G=q.id,ss=!0),Jn||z!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),vt.setValue(P,"projectionMatrix",E.projectionMatrix),vt.setValue(P,"viewMatrix",E.matrixWorldInverse);const Ri=vt.map.cameraPosition;Ri!==void 0&&Ri.setValue(P,Ke.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&vt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,ss=!0,js=!0)}if(Fe.needsLights&&(vn.state.directionalShadowMap.length>0&&vt.setValue(P,"directionalShadowMap",vn.state.directionalShadowMap,U),vn.state.spotShadowMap.length>0&&vt.setValue(P,"spotShadowMap",vn.state.spotShadowMap,U),vn.state.pointShadowMap.length>0&&vt.setValue(P,"pointShadowMap",vn.state.pointShadowMap,U)),X.isSkinnedMesh){vt.setOptional(P,X,"bindMatrix"),vt.setOptional(P,X,"bindMatrixInverse");const Gt=X.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),vt.setValue(P,"boneTexture",Gt.boneTexture,U))}X.isBatchedMesh&&(vt.setOptional(P,X,"batchingTexture"),vt.setValue(P,"batchingTexture",X._matricesTexture,U),vt.setOptional(P,X,"batchingIdTexture"),vt.setValue(P,"batchingIdTexture",X._indirectTexture,U),vt.setOptional(P,X,"batchingColorTexture"),X._colorsTexture!==null&&vt.setValue(P,"batchingColorTexture",X._colorsTexture,U));const Ci=Z.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&ce.update(X,Z,Fn),(ss||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,vt.setValue(P,"receiveShadow",X.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(qt.envMapIntensity.value=F.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Iw()),ss&&(vt.setValue(P,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&jg(qt,js),we&&q.fog===!0&&ge.refreshFogUniforms(qt,we),ge.refreshMaterialUniforms(qt,q,qe,xe,w.state.transmissionRenderTarget[E.id]),Qo.upload(P,Nd(Fe),qt,U)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Qo.upload(P,Nd(Fe),qt,U),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(P,"center",X.center),vt.setValue(P,"modelViewMatrix",X.modelViewMatrix),vt.setValue(P,"normalMatrix",X.normalMatrix),vt.setValue(P,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Gt=q.uniformsGroups;for(let Ri=0,Qs=Gt.length;Ri<Qs;Ri++){const Od=Gt[Ri];Te.update(Od,Fn),Te.bind(Od,Fn)}}return Fn}function jg(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Qg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,F,Z){const q=b.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),b.get(E.texture).__webglTexture=F,b.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const Z=b.get(E);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0};const e0=P.createFramebuffer();this.setRenderTarget=function(E,F=0,Z=0){B=E,I=F,O=Z;let q=null,X=!1,we=!1;if(E){const Ee=b.get(E);if(Ee.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(P.FRAMEBUFFER,Ee.__webglFramebuffer),V.copy(E.viewport),H.copy(E.scissor),le=E.scissorTest,pe.viewport(V),pe.scissor(H),pe.setScissorTest(le),G=-1;return}else if(Ee.__webglFramebuffer===void 0)U.setupRenderTarget(E);else if(Ee.__hasExternalTextures)U.rebindTextures(E,b.get(E.texture).__webglTexture,b.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const je=E.depthTexture;if(Ee.__boundDepthTexture!==je){if(je!==null&&b.has(je)&&(E.width!==je.image.width||E.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(E)}}const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(we=!0);const Ve=b.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?q=Ve[F][Z]:q=Ve[F],X=!0):E.samples>0&&U.useMultisampledRTT(E)===!1?q=b.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?q=Ve[Z]:q=Ve,V.copy(E.viewport),H.copy(E.scissor),le=E.scissorTest}else V.copy(Q).multiplyScalar(qe).floor(),H.copy(fe).multiplyScalar(qe).floor(),le=he;if(Z!==0&&(q=e0),pe.bindFramebuffer(P.FRAMEBUFFER,q)&&pe.drawBuffers(E,q),pe.viewport(V),pe.scissor(H),pe.setScissorTest(le),X){const Ee=b.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,Z)}else if(we){const Ee=F;for(let Ue=0;Ue<E.textures.length;Ue++){const Ve=b.get(E.textures[Ue]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ue,Ve.__webglTexture,Z,Ee)}}else if(E!==null&&Z!==0){const Ee=b.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ee.__webglTexture,Z)}G=-1},this.readRenderTargetPixels=function(E,F,Z,q,X,we,Pe,Ee=0){if(!(E&&E.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){pe.bindFramebuffer(P.FRAMEBUFFER,Ue);try{const Ve=E.textures[Ee],je=Ve.format,et=Ve.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),!ze.textureFormatReadable(je)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(et)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-q&&Z>=0&&Z<=E.height-X&&P.readPixels(F,Z,q,X,de.convert(je),de.convert(et),we)}finally{const Ve=B!==null?b.get(B).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(E,F,Z,q,X,we,Pe,Ee=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(F>=0&&F<=E.width-q&&Z>=0&&Z<=E.height-X){pe.bindFramebuffer(P.FRAMEBUFFER,Ue);const Ve=E.textures[Ee],je=Ve.format,et=Ve.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),!ze.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.bufferData(P.PIXEL_PACK_BUFFER,we.byteLength,P.STREAM_READ),P.readPixels(F,Z,q,X,de.convert(je),de.convert(et),0);const mt=B!==null?b.get(B).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,mt);const Rt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await X_(P,Rt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,we),P.deleteBuffer(We),P.deleteSync(Rt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Z=0){const q=Math.pow(2,-Z),X=Math.floor(E.image.width*q),we=Math.floor(E.image.height*q),Pe=F!==null?F.x:0,Ee=F!==null?F.y:0;U.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,Pe,Ee,X,we),pe.unbindTexture()};const t0=P.createFramebuffer(),n0=P.createFramebuffer();this.copyTextureToTexture=function(E,F,Z=null,q=null,X=0,we=0){let Pe,Ee,Ue,Ve,je,et,We,mt,Rt;const At=E.isCompressedTexture?E.mipmaps[we]:E.image;if(Z!==null)Pe=Z.max.x-Z.min.x,Ee=Z.max.y-Z.min.y,Ue=Z.isBox3?Z.max.z-Z.min.z:1,Ve=Z.min.x,je=Z.min.y,et=Z.isBox3?Z.min.z:0;else{const qt=Math.pow(2,-X);Pe=Math.floor(At.width*qt),Ee=Math.floor(At.height*qt),E.isDataArrayTexture?Ue=At.depth:E.isData3DTexture?Ue=Math.floor(At.depth*qt):Ue=1,Ve=0,je=0,et=0}q!==null?(We=q.x,mt=q.y,Rt=q.z):(We=0,mt=0,Rt=0);const gt=de.convert(F.format),Zt=de.convert(F.type);let Fe;F.isData3DTexture?(U.setTexture3D(F,0),Fe=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),Fe=P.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),Fe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const vn=P.getParameter(P.UNPACK_ROW_LENGTH),lt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Fn=P.getParameter(P.UNPACK_SKIP_PIXELS),Jn=P.getParameter(P.UNPACK_SKIP_ROWS),ss=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,At.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,et);const js=E.isDataArrayTexture||E.isData3DTexture,vt=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const qt=b.get(E),Ci=b.get(F),Gt=b.get(qt.__renderTarget),Ri=b.get(Ci.__renderTarget);pe.bindFramebuffer(P.READ_FRAMEBUFFER,Gt.__webglFramebuffer),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Qs=0;Qs<Ue;Qs++)js&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(E).__webglTexture,X,et+Qs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(F).__webglTexture,we,Rt+Qs)),P.blitFramebuffer(Ve,je,Pe,Ee,We,mt,Pe,Ee,P.DEPTH_BUFFER_BIT,P.NEAREST);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||b.has(E)){const qt=b.get(E),Ci=b.get(F);pe.bindFramebuffer(P.READ_FRAMEBUFFER,t0),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,n0);for(let Gt=0;Gt<Ue;Gt++)js?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,X,et+Gt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,X),vt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ci.__webglTexture,we,Rt+Gt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ci.__webglTexture,we),X!==0?P.blitFramebuffer(Ve,je,Pe,Ee,We,mt,Pe,Ee,P.COLOR_BUFFER_BIT,P.NEAREST):vt?P.copyTexSubImage3D(Fe,we,We,mt,Rt+Gt,Ve,je,Pe,Ee):P.copyTexSubImage2D(Fe,we,We,mt,Ve,je,Pe,Ee);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else vt?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Fe,we,We,mt,Rt,Pe,Ee,Ue,gt,Zt,At.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Fe,we,We,mt,Rt,Pe,Ee,Ue,gt,At.data):P.texSubImage3D(Fe,we,We,mt,Rt,Pe,Ee,Ue,gt,Zt,At):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,we,We,mt,Pe,Ee,gt,Zt,At.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,we,We,mt,At.width,At.height,gt,At.data):P.texSubImage2D(P.TEXTURE_2D,we,We,mt,Pe,Ee,gt,Zt,At);P.pixelStorei(P.UNPACK_ROW_LENGTH,vn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ss),we===0&&F.generateMipmaps&&P.generateMipmap(Fe),pe.unbindTexture()},this.initRenderTarget=function(E){b.get(E).__webglFramebuffer===void 0&&U.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?U.setTextureCube(E,0):E.isData3DTexture?U.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?U.setTexture2DArray(E,0):U.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){I=0,O=0,B=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const Pw=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Cu,AddEquation:zi,AddOperation:fm,AdditiveAnimationBlendMode:Fu,AdditiveBlending:$h,AgXToneMapping:Sa,AlphaFormat:Uu,AlwaysCompare:Em,AlwaysDepth:oc,AlwaysStencilFunc:tu,AmbientLight:hg,AnimationAction:Mg,AnimationClip:kr,AnimationLoader:Uv,AnimationMixer:ly,AnimationObjectGroup:oy,AnimationUtils:Pv,ArcCurve:km,ArrayCamera:_g,ArrowHelper:Dy,AttachedBindMode:Qh,Audio:vg,AudioAnalyser:Jv,AudioContext:md,AudioListener:Zv,AudioLoader:Wv,AxesHelper:Ly,BackSide:cn,BasicDepthPacking:vm,BasicShadowMap:t_,BatchedMesh:Um,BezierInterpolant:ag,Bone:gl,BooleanKeyframeTrack:Ks,Box2:_y,Box3:Pt,Box3Helper:Iy,BoxGeometry:qs,BoxHelper:Ry,BufferAttribute:ut,BufferGeometry:$e,BufferGeometryLoader:pg,ByteType:Pu,Cache:ri,Camera:Nl,CameraHelper:Cy,CanvasTexture:Jx,CapsuleGeometry:yl,CatmullRomCurve3:zm,CineonToneMapping:Au,CircleGeometry:Ml,ClampToEdgeWrapping:sn,Clock:my,Color:ve,ColorKeyframeTrack:cd,ColorManagement:nt,Compatibility:z_,CompressedArrayTexture:Kx,CompressedCubeTexture:$x,CompressedTexture:vl,CompressedTextureLoader:Ov,ConeGeometry:Ya,ConstantAlphaFactor:hm,ConstantColorFactor:cm,Controls:wg,CubeCamera:gg,CubeDepthTexture:Fm,CubeReflectionMapping:li,CubeRefractionMapping:Zi,CubeTexture:Xa,CubeTextureLoader:Fv,CubeUVReflectionMapping:zr,CubicBezierCurve:ju,CubicBezierCurve3:Vm,CubicInterpolant:sg,CullFaceBack:Kh,CullFaceFront:Yp,CullFaceFrontBack:e_,CullFaceNone:qp,Curve:$n,CurvePath:Gm,CustomBlending:Zp,CustomToneMapping:Ru,CylinderGeometry:qa,Cylindrical:gy,Data3DTexture:dl,DataArrayTexture:ul,DataTexture:qn,DataTextureLoader:Bv,DataUtils:bx,DecrementStencilOp:__,DecrementWrapStencilOp:v_,DefaultLoadingManager:Js,DepthFormat:ui,DepthStencilFormat:Vi,DepthTexture:Or,DetachedBindMode:pm,DirectionalLight:fd,DirectionalLightHelper:Ay,DiscreteInterpolant:rg,DodecahedronGeometry:bl,DoubleSide:Gn,DstAlphaFactor:im,DstColorFactor:rm,DynamicCopyUsage:N_,DynamicDrawUsage:C_,DynamicReadUsage:P_,EdgesGeometry:Bm,EllipseCurve:Sl,EqualCompare:Sm,EqualDepth:lc,EqualStencilFunc:S_,EquirectangularReflectionMapping:fa,EquirectangularRefractionMapping:pa,Euler:En,EventDispatcher:di,ExternalTexture:$u,ExtrudeGeometry:Tl,FileLoader:Yn,Float16BufferAttribute:Rx,Float32BufferAttribute:Re,FloatType:rn,Fog:ml,FogExp2:pl,FramebufferTexture:Zx,FrontSide:ci,Frustum:Vr,FrustumArray:_l,GLBufferAttribute:py,GLSL1:O_,GLSL3:nu,GreaterCompare:Tm,GreaterDepth:uc,GreaterEqualCompare:hl,GreaterEqualDepth:hc,GreaterEqualStencilFunc:A_,GreaterStencilFunc:w_,GridHelper:wy,Group:si,HalfFloatType:hi,HemisphereLight:lg,HemisphereLightHelper:Ty,IcosahedronGeometry:wl,ImageBitmapLoader:mg,ImageLoader:La,ImageUtils:Im,IncrementStencilOp:g_,IncrementWrapStencilOp:x_,InstancedBufferAttribute:Bs,InstancedBufferGeometry:fg,InstancedInterleavedBuffer:fy,InstancedMesh:Yu,Int16BufferAttribute:Ax,Int32BufferAttribute:Cx,Int8BufferAttribute:Tx,IntType:nl,InterleavedBuffer:Ga,InterleavedBufferAttribute:Ji,Interpolant:Zs,InterpolateBezier:eu,InterpolateDiscrete:Lr,InterpolateLinear:Nr,InterpolateSmooth:Jo,InterpolationSamplingMode:k_,InterpolationSamplingType:B_,InvertStencilOp:y_,KeepStencilOp:Ms,KeyframeTrack:On,LOD:Nm,LatheGeometry:El,Layers:fl,LessCompare:bm,LessDepth:cc,LessEqualCompare:ll,LessEqualDepth:Us,LessEqualStencilFunc:T_,LessStencilFunc:b_,Light:ts,LightProbe:dg,Line:Ei,Line3:Sg,LineBasicMaterial:Qt,LineCurve:Qu,LineCurve3:Hm,LineDashedMaterial:ng,LineLoop:Zu,LineSegments:Kn,LinearFilter:xt,LinearInterpolant:od,LinearMipMapLinearFilter:a_,LinearMipMapNearestFilter:r_,LinearMipmapLinearFilter:Dn,LinearMipmapNearestFilter:Er,LinearSRGBColorSpace:jt,LinearToneMapping:wu,LinearTransfer:wa,Loader:hn,LoaderUtils:Xi,LoadingManager:ld,LoopOnce:mm,LoopPingPong:_m,LoopRepeat:gm,MOUSE:Is,Material:zt,MaterialBlending:n_,MaterialLoader:Ul,MathUtils:zu,Matrix2:vd,Matrix3:Je,Matrix4:ke,MaxEquation:jp,Mesh:St,MeshBasicMaterial:on,MeshDepthMaterial:Ll,MeshDistanceMaterial:rd,MeshLambertMaterial:eg,MeshMatcapMaterial:tg,MeshNormalMaterial:Qm,MeshPhongMaterial:Jm,MeshPhysicalMaterial:Un,MeshStandardMaterial:$a,MeshToonMaterial:jm,MinEquation:Jp,MirroredRepeatWrapping:Ir,MixOperation:dm,MultiplyBlending:jh,MultiplyOperation:Va,NearestFilter:Et,NearestMipMapLinearFilter:s_,NearestMipMapNearestFilter:i_,NearestMipmapLinearFilter:ws,NearestMipmapNearestFilter:tl,NeutralToneMapping:Iu,NeverCompare:Mm,NeverDepth:ac,NeverStencilFunc:M_,NoBlending:oi,NoColorSpace:Si,NoNormalPacking:u_,NoToneMapping:Xn,NormalAnimationBlendMode:cl,NormalBlending:Ps,NormalGAPacking:f_,NormalRGPacking:d_,NotEqualCompare:wm,NotEqualDepth:dc,NotEqualStencilFunc:E_,NumberKeyframeTrack:zs,Object3D:st,ObjectLoader:Hv,ObjectSpaceNormalMap:ym,OctahedronGeometry:Za,OneFactor:em,OneMinusConstantAlphaFactor:um,OneMinusConstantColorFactor:lm,OneMinusDstAlphaFactor:sm,OneMinusDstColorFactor:am,OneMinusSrcAlphaFactor:rc,OneMinusSrcColorFactor:nm,OrthographicCamera:ns,PCFShadowMap:ua,PCFSoftShadowMap:da,PMREMGenerator:hu,Path:Kc,PerspectiveCamera:Bt,Plane:bi,PlaneGeometry:Ys,PlaneHelper:Py,PointLight:dd,PointLightHelper:by,Points:Ku,PointsMaterial:xl,PolarGridHelper:Ey,PolyhedronGeometry:es,PositionalAudio:$v,PropertyBinding:ot,PropertyMixer:yg,QuadraticBezierCurve:ed,QuadraticBezierCurve3:td,Quaternion:kt,QuaternionKeyframeTrack:Vs,QuaternionLinearInterpolant:og,R11_EAC_Format:yc,RED_GREEN_RGTC2_Format:Gc,RED_RGTC1_Format:Vc,REVISION:Qc,RG11_EAC_Format:bc,RGBADepthPacking:c_,RGBAFormat:an,RGBAIntegerFormat:ol,RGBA_ASTC_10x10_Format:Uc,RGBA_ASTC_10x5_Format:Dc,RGBA_ASTC_10x6_Format:Lc,RGBA_ASTC_10x8_Format:Nc,RGBA_ASTC_12x10_Format:Oc,RGBA_ASTC_12x12_Format:Fc,RGBA_ASTC_4x4_Format:Tc,RGBA_ASTC_5x4_Format:wc,RGBA_ASTC_5x5_Format:Ec,RGBA_ASTC_6x5_Format:Ac,RGBA_ASTC_6x6_Format:Cc,RGBA_ASTC_8x5_Format:Rc,RGBA_ASTC_8x6_Format:Ic,RGBA_ASTC_8x8_Format:Pc,RGBA_BPTC_Format:Bc,RGBA_ETC2_EAC_Format:vc,RGBA_PVRTC_2BPPV1_Format:gc,RGBA_PVRTC_4BPPV1_Format:mc,RGBA_S3TC_DXT1_Format:ga,RGBA_S3TC_DXT3_Format:_a,RGBA_S3TC_DXT5_Format:xa,RGBDepthPacking:l_,RGBFormat:Ou,RGBIntegerFormat:o_,RGB_BPTC_SIGNED_Format:kc,RGB_BPTC_UNSIGNED_Format:zc,RGB_ETC1_Format:_c,RGB_ETC2_Format:xc,RGB_PVRTC_2BPPV1_Format:pc,RGB_PVRTC_4BPPV1_Format:fc,RGB_S3TC_DXT1_Format:ma,RGDepthPacking:h_,RGFormat:Os,RGIntegerFormat:al,RawShaderMaterial:sd,Ray:Ai,Raycaster:bg,RectAreaLight:ug,RedFormat:rl,RedIntegerFormat:Ha,ReinhardToneMapping:Eu,RenderTarget:Vu,RenderTarget3D:hy,RepeatWrapping:Ki,ReplaceStencilOp:m_,ReverseSubtractEquation:$p,RingGeometry:Al,SIGNED_R11_EAC_Format:Mc,SIGNED_RED_GREEN_RGTC2_Format:Wc,SIGNED_RED_RGTC1_Format:Hc,SIGNED_RG11_EAC_Format:Sc,SRGBColorSpace:Ft,SRGBTransfer:ft,Scene:Hu,ShaderChunk:Ye,ShaderLib:Pn,ShaderMaterial:_n,ShadowMaterial:Km,Shape:Ls,ShapeGeometry:Cl,ShapePath:Ny,ShapeUtils:Wn,ShortType:Du,Skeleton:Wa,SkeletonHelper:My,SkinnedMesh:qu,Source:Hi,Sphere:Dt,SphereGeometry:Ka,Spherical:cu,SphericalHarmonics3:pd,SplineCurve:nd,SpotLight:ud,SpotLightHelper:yy,Sprite:Lm,SpriteMaterial:Xu,SrcAlphaFactor:sc,SrcAlphaSaturateFactor:om,SrcColorFactor:tm,StaticCopyUsage:L_,StaticDrawUsage:Ea,StaticReadUsage:I_,StereoCamera:Xv,StreamCopyUsage:U_,StreamDrawUsage:R_,StreamReadUsage:D_,StringKeyframeTrack:$s,SubtractEquation:Kp,SubtractiveBlending:Jh,TOUCH:Ts,TangentSpaceNormalMap:Qi,TetrahedronGeometry:Rl,Texture:bt,TextureLoader:cg,TextureUtils:ky,Timer:xg,TimestampQuery:F_,TorusGeometry:Il,TorusKnotGeometry:Pl,Triangle:gn,TriangleFanDrawMode:Xc,TriangleStripDrawMode:Bu,TrianglesDrawMode:xm,TubeGeometry:Dl,UVMapping:el,Uint16BufferAttribute:Gu,Uint32BufferAttribute:Wu,Uint8BufferAttribute:wx,Uint8ClampedBufferAttribute:Ex,Uniform:xd,UniformsGroup:dy,UniformsLib:ye,UniformsUtils:id,UnsignedByteType:mn,UnsignedInt101111Type:Nu,UnsignedInt248Type:Dr,UnsignedInt5999Type:Lu,UnsignedIntType:Ln,UnsignedShort4444Type:il,UnsignedShort5551Type:sl,UnsignedShortType:Pr,VSMShadowMap:br,Vector2:J,Vector3:C,Vector4:ht,VectorKeyframeTrack:Hs,VideoFrameTexture:Yx,VideoTexture:Om,WebGL3DRenderTarget:fx,WebGLArrayRenderTarget:dx,WebGLCoordinateSystem:Tn,WebGLCubeRenderTarget:yd,WebGLRenderTarget:ln,WebGLRenderer:Dg,WebGLUtils:Pg,WebGPUCoordinateSystem:Fs,WebXRController:jo,WireframeGeometry:Zm,WrapAroundEnding:Ta,ZeroCurvatureEnding:Es,ZeroFactor:Qp,ZeroSlopeEnding:As,ZeroStencilOp:p_,createCanvasElement:Cm,error:Be,getConsoleFunction:W_,log:Ca,setConsoleFunction:G_,warn:Me,warnOnce:Ra},Symbol.toStringTag,{value:"Module"})),Mi=(s,e)=>{const t=Su(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});za(()=>{i(),n&&n()})},Xt=s=>{const e=Wi(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},Dw=s=>({subscribe:s.subscribe,get current(){return s.current}}),Lw=s=>{const{dom:e,canvas:t}=s,n=Xt({width:e.offsetWidth,height:e.offsetHeight});F0(()=>{const r=new ResizeObserver(()=>{const{offsetWidth:a,offsetHeight:o}=e;(n.current.width!==a||n.current.height!==o)&&n.set({width:a,height:o})});return r.observe(e),()=>{r.disconnect()}});const i={dom:e,canvas:t,size:Dw(n)};return Nn("threlte-dom-context",i),i},Md=()=>{const s=xn("threlte-dom-context");if(!s)throw new Error("useDOM can only be used in a child component to <Canvas>.");return s};function Nw(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class ki{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=Nw();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!n?.after&&!n?.before&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n?.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{i.previous.add(this.getKey(o))}),a.forEach(o=>{const c=this.getKey(o),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n?.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{i.next.add(this.getKey(o))}),a.forEach(o=>{const c=this.getKey(o),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((a,o)=>{a===0&&t.push(o)});t.length>0;){const a=t.shift();n.push(a);const o=i.find(c=>c===a);o&&this.connectedVertices[o]?.next.forEach(c=>{const l=(e.get(c)||0)-1;e.set(c,l),l===0&&t.push(c)})}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class Uw{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class Ow extends ki{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const i=new Uw(this,e,t);return this.add(e,i,n),i}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(i=>{const r=performance.now();i.run(n??e);const a=performance.now()-r;t[i.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class Fw extends ki{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new Ow(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},i=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),c=performance.now()-a;n[r.key.toString()]={duration:c,tasks:o}}),{total:performance.now()-i,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const Bw=s=>{const e=new Fw,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:Xt(s.autoRender??!0),renderMode:Xt(s.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,r){n.shouldRender()&&r()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return Rr(()=>{n.autoRender.set(s.autoRender??!0)}),Rr(()=>{n.renderMode.set(s.renderMode??"on-demand")}),za(()=>{n.scheduler.dispose()}),Nn("threlte-scheduler-context",n),n},Bl=()=>{const s=xn("threlte-scheduler-context");if(!s)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return s},kw=()=>{const{size:s}=Md(),{invalidate:e}=Bl(),t=new Bt(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=Xt(t);Mi(s,r=>{if(n.current===t){const a=n.current;a.aspect=r.width/r.height,a.updateProjectionMatrix(),e()}}),Mi(n,r=>{r===void 0&&n.set(t)});const i={camera:n};return Nn("threlte-camera-context",i),i},Lg=()=>{const s=xn("threlte-camera-context");if(!s)throw new Error("useCamera can only be used in a child component to <Canvas>.");return s},zw=()=>{const s={removeObjectFromDisposal:e=>{s.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=s.disposableObjects.get(e);t?s.disposableObjects.set(e,t+1):s.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=s.disposableObjects.get(e);t&&t>0&&(s.disposableObjects.set(e,t-1),t-1<=0&&(s.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await P0(),!(!s.shouldDispose&&!e)&&(s.disposableObjects.forEach((t,n)=>{(t===0||e)&&(n?.dispose?.(),s.disposableObjects.delete(n))}),s.shouldDispose=!1)}};return za(()=>{s.dispose(!0)}),Nn("threlte-disposal-context",s),s},Ng=()=>{const s=xn("threlte-disposal-context");if(!s)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return s},Ug=Symbol("threlte-parent-context"),Og=s=>{const e=Xt(s);return Nn(Ug,e),e},Fg=()=>xn(Ug),$c=Symbol("threlte-parent-object3d-context"),Vw=s=>{const e=Xp(s);return Nn($c,e),e},Hw=s=>{const e=xn($c),t=Wi(s),n=Su([t,e],([i,r])=>i??r);return Nn($c,n),t},Gw=()=>xn($c),Ww=typeof window<"u";function Na(s,e,t){if(!Ww)return{task:void 0,start:()=>{},stop:()=>{},started:Xp(!1)};let n,i,r;ki.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const a=Bl(),o=r?.autoInvalidate??!0;let c=a.mainStage,l=tt(()=>r?.running?.()??r?.autoStart??!0);if(r){if(r.stage)if(ki.isValue(r.stage))c=r.stage;else{const u=a.scheduler.getStage(r.stage);if(!u)throw new Error(`No stage found with key ${r.stage.toString()}`);c=u}else if(r.after)if(Array.isArray(r.after))for(let u=0;u<r.after.length;u++){const d=r.after[u];if(ki.isValue(d)){c=d.stage;break}}else ki.isValue(r.after)&&(c=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let u=0;u<r.before.length;u++){const d=r.before[u];if(ki.isValue(d)){c=d.stage;break}}else ki.isValue(r.before)&&(c=r.before.stage)}const h=c.createTask(n,i,r);return Ut(()=>{L(l)?(h.start(),o&&a.autoInvalidations.add(i)):(h.stop(),o&&a.autoInvalidations.delete(i))}),Ut(()=>()=>{c.removeTask(n)}),{task:h,start:()=>{Sn(l,!0)},stop:()=>{Sn(l,!1)},started:J0(()=>L(l))}}const Xw=s=>{const e={scene:new Hu};return Nn("threlte-scene-context",e),e},Bg=()=>{const s=xn("threlte-scene-context");if(!s)throw new Error("useScene can only be used in a child component to <Canvas>.");return s},qw=s=>{const{dispose:e}=Ng(),{camera:t}=Lg(),{scene:n}=Bg(),{invalidate:i,renderStage:r,autoRender:a,scheduler:o,resetFrameInvalidation:c}=Bl(),{size:l,canvas:h}=Md(),u=s.createRenderer?s.createRenderer(h):new Dg({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),d=r.createTask(Symbol("threlte-auto-render-task"),()=>{u.render(n,t.current)}),f={renderer:u,colorManagementEnabled:Xt(s.colorManagementEnabled??!0),colorSpace:Xt(s.colorSpace??"srgb"),dpr:Xt(s.dpr??window.devicePixelRatio),shadows:Xt(s.shadows??da),toneMapping:Xt(s.toneMapping??Sa),autoRenderTask:d};Nn("threlte-renderer-context",f),Mi([f.colorManagementEnabled],([m])=>{nt.enabled=m}),Mi([f.colorSpace],([m])=>{"outputColorSpace"in u&&(u.outputColorSpace=m)}),Mi([f.dpr],([m])=>{"setPixelRatio"in u&&u.setPixelRatio(m)});const{start:p,stop:_}=Na(()=>{!("xr"in u)||u.xr?.isPresenting||(u.setSize(l.current.width,l.current.height),i(),_())},{before:d,autoStart:!1,autoInvalidate:!1});return Mi([l],()=>{p()}),Mi([f.shadows],([m])=>{"shadowMap"in u&&(u.shadowMap.enabled=!!m,m&&m!==!0?u.shadowMap.type=m:m===!0&&(u.shadowMap.type=da))}),Mi([f.toneMapping],([m])=>{"toneMapping"in u&&(u.toneMapping=m)}),Mi([a],([m])=>(m?f.autoRenderTask.start():f.autoRenderTask.stop(),()=>{f.autoRenderTask.stop()})),"setAnimationLoop"in f.renderer&&f.renderer.setAnimationLoop(g=>{e(),o.run(g),c()}),za(()=>{if("dispose"in f.renderer){const m=f.renderer.dispose;m()}}),Ut(()=>{f.colorManagementEnabled.set(s.colorManagementEnabled??!0)}),Ut(()=>{f.colorSpace.set(s.colorSpace??"srgb")}),Ut(()=>{f.toneMapping.set(s.toneMapping??Sa)}),Ut(()=>{f.shadows.set(s.shadows??da)}),Ut(()=>{f.dpr.set(s.dpr??window.devicePixelRatio)}),f},Yw=()=>{const s=xn("threlte-renderer-context");if(!s)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return s},Zw=()=>{const s=Xt({});return Nn("threlte-user-context",s),s},Kw=()=>{const s=xn("threlte-user-context");if(!s)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return s},$w=s=>{const{scene:e}=Xw();return{scene:e,...Lw(s),...j0(),...Og(e),...Vw(e),...zw(),...Bw(s),...kw(),...qw(s),...Zw()}};function Jw(s,e){Ws(e,!0);let t=ka(e,["$$slots","$$events","$$legacy","children"]);$w(t);var n=qi(),i=pn(n);Ba(i,()=>e.children),yt(s,n),Xs()}var jw=ji('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function Qw(s,e){let t=ka(e,["$$slots","$$events","$$legacy","children"]),n=bs(void 0),i=bs(void 0);var r=jw(),a=Ns(r),o=Ns(a);{var c=l=>{Jw(l,bu({get dom(){return L(i)},get canvas(){return L(n)}},()=>t,{children:(h,u)=>{var d=qi(),f=pn(d);Ba(f,()=>e.children??jc),yt(h,d)},$$slots:{default:!0}}))};qh(o,l=>{L(n)&&L(i)&&l(c)})}Yi(a),nc(a,l=>Sn(n,l),()=>L(n)),Yi(r),nc(r,l=>Sn(i,l),()=>L(i)),yt(s,r)}const Gr=()=>{const s=Bl(),e=Yw(),t=Lg(),n=Bg(),i=Md();return{advance:s.advance,autoRender:s.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:s.invalidate,mainStage:s.mainStage,renderer:e.renderer,renderMode:s.renderMode,renderStage:s.renderStage,scheduler:s.scheduler,shadows:e.shadows,shouldRender:s.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},Hn=(s,e)=>s?.[`is${e}`]===!0,kg=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},eE=s=>typeof s=="object"&&s!==null,tE=(s,e)=>{const{invalidate:t}=Gr(),n=tt(s),i=tt(e),r=ic(Fg()),a=ic(Gw()),o=Og(),c=Hw();Ut(()=>{o.set(L(n)),Hn(L(n),"Object3D")&&c.set(L(n)),t()}),Ut(()=>{t();const l=L(n);if(L(i)===void 0&&Hn(l,"Object3D"))return a.current?.add(l),()=>{t(),a.current?.remove(l)};if(L(i)===void 0&&eE(r.current)){const h=r.current;if(Hn(l,"Material")){const u=h.material;return h.material=l,()=>{t(),h.material=u}}else if(Hn(l,"BufferGeometry")){const u=h.geometry;return h.geometry=l,()=>{t(),h.geometry=u}}}if(L(i)===!1)return()=>{t()};if(typeof L(i)=="function"){const h=L(i)({ref:l,parent:r.current,parentObject3D:a.current});return()=>{t(),h?.()}}if(typeof L(i)=="string"){const{target:h,key:u}=kg(r.current,L(i));if(u in h){const d=h[u];return h[u]=l,()=>{t(),h[u]=d}}else return h[u]=l,()=>{t(),delete h[u]}}if(Hn(L(i),"Object3D")&&Hn(l,"Object3D"))return L(i).add(l),()=>{t(),L(i).remove(l)}})},nE=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom","filmGauge","filmOffset"]),Fh=new Set,iE=(s,e,t,n)=>{const{invalidate:i,size:r,camera:a}=Gr(),o=tt(s),c=tt(e),l=ic(r);Ut(()=>{if(!t())return;const h=L(o);return Fh.add(h),a.set(h),i(),()=>{Fh.delete(h),Fh.size===0&&(a.set(void 0),i())}}),Ut(()=>{if(!L(c)){for(const h in n())if(nE.has(h)){L(o).updateProjectionMatrix(),i();break}}}),Ut(()=>{if(e())return;const{width:h,height:u}=l.current;Hn(L(o),"PerspectiveCamera")?L(o).aspect=h/u:Hn(L(o),"OrthographicCamera")&&(L(o).left=h/-2,L(o).right=h/2,L(o).top=u/2,L(o).bottom=u/-2),L(o).updateProjectionMatrix(),L(o).updateMatrixWorld(),i()})},fu=Symbol("threlte-disposable-object-context"),sE=s=>typeof s?.dispose=="function",rE=s=>{const e=xn(fu),t=tt(()=>s()??e?.()??!0);Nn(fu,()=>L(t))},aE=s=>{const e=tt(s),{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:i}=Ng(),r=xn(fu),a=tt(()=>r?.()??!0);Rr(()=>{if(L(a))return t(L(e)),()=>n(L(e));i(L(e))})};let pu;const oE=s=>{pu=s},cE=()=>{const s=pu;return pu=void 0,s},lE="threlte-plugin-context",hE=s=>{const e=xn(lE);if(!e)return;const t=[],n=Object.values(e);if(n.length>0){const i=s();for(let r=0;r<n.length;r++){const a=n[r],o=a(i);o&&o.pluginProps&&t.push(...o.pluginProps)}}return{pluginsProps:t}},uE=new Set(["$$scope","$$slots","type","args","attach","instance"]),dE=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,fE=(s,e,t)=>{!Array.isArray(t)&&typeof t=="number"&&typeof s[e]=="object"&&s[e]!==null&&typeof s[e]?.setScalar=="function"&&!s[e]?.isColor?s[e].setScalar(t):typeof s[e]?.set=="function"&&typeof s[e]=="object"&&s[e]!==null?Array.isArray(t)?s[e].set(...t):s[e].set(t):s[e]=t},pE=(s,e,t)=>{const{invalidate:n}=Gr(),i=new Map,r=(a,o,c)=>{if(dE(c)){const u=i.get(o);if(u&&u.instance===a&&u.value===c)return;i.set(o,{instance:a,value:c})}else i.delete(o);const{key:l,target:h}=kg(a,o);if(typeof c=="function"&&l.startsWith("on")&&!o.includes(".")&&"addEventListener"in h){const u=h,d=l.slice(2);return u.addEventListener(d,c),()=>{u.removeEventListener?.(d,c)}}c!=null?fE(h,l,c):h[l]=c,n()};Ut(()=>{const a=s(),o=e(),c=t();Jc(()=>{for(const l in o)Ut(()=>{if(!(c?.includes(l)||uE.has(l)))return r(a,l,o[l])})})})},mE=s=>typeof s=="function"&&Function.prototype.toString.call(s).startsWith("class "),gE=(s,e)=>mE(s)?Array.isArray(e)?new s(...e):new s:s;function bp(s,e){Ws(e,!0);let t=Yt(e,"is",19,cE),n=Yt(e,"manual",3,!1),i=Yt(e,"makeDefault",3,!1),r=Yt(e,"ref",15),a=ka(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const o=tt(()=>gE(t(),e.args));Ut(()=>{r()!==L(o)&&r(L(o))});const c=hE(()=>({get ref(){return L(o)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return a}}));pE(()=>L(o),()=>a,()=>c?.pluginsProps),tE(()=>L(o),()=>e.attach),Ut(()=>{(Hn(L(o),"PerspectiveCamera")||Hn(L(o),"OrthographicCamera"))&&iE(()=>L(o),()=>n(),()=>i(),()=>a)}),rE(()=>e.dispose),Ut(()=>{sE(L(o))&&aE(()=>L(o))}),Rr(()=>{L(o);let u;return Jc(()=>{u=e.oncreate?.(L(o))}),u});var l=qi(),h=pn(l);Ba(h,()=>e.children??jc,()=>({ref:L(o)})),yt(s,l),Xs()}const _E={},ai=new Proxy(bp,{get(s,e){if(typeof e!="string")return Reflect.get(s,e);const t=_E[e]||Pw[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return oE(t),bp}});function xE(s,e,t){const n=Kw();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>{if(s in i)return i;const r=typeof e=="function"?e():e;return i[s]=r,i}),n.current[s]):Su(n,i=>i[s])}const Bh=s=>{const e=Wi(void 0),t=Wi(void 0);return s.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(s,e),{error:t,promise:s})};function vE(s,e){const{remember:t,clear:n}=Q0();let i;const r=()=>new s(...e?.args??[]);return{load:(c,l)=>{const h=async u=>{if(i||(i=r()),"loadAsync"in i){const d=await i.loadAsync(u,l?.onProgress);return l?.transform?.(d)??d}else return new Promise((d,f)=>{i.load(u,p=>d(l?.transform?.(p)??p),p=>l?.onProgress?.(p),f)})};if(Array.isArray(c)){const u=c.map(f=>t(()=>h(f),[s,f]));return Bh(Promise.all(u))}else if(typeof c=="string"){const u=t(()=>h(c),[s,c]);return Bh(u)}else{const u=Object.values(c).map(f=>t(()=>h(f),[s,f]));return Bh(Promise.all(u).then(f=>Object.fromEntries(Object.entries(c).map(([p],_)=>[p,f[_]]))))}},clear:c=>{Array.isArray(c)?c.forEach(l=>{n([s,l])}):typeof c=="string"?n([s,c]):Object.entries(c).forEach(([l,h])=>{n([s,l,h])})},loader:i}}const Sp=Symbol(),yE=s=>typeof s?.subscribe=="function",zg=(s,e,t)=>{const n=s().map(a=>yE(a)?ic(a):Sp),i=tt(()=>s().map((a,o)=>n[o]===Sp?a:n[o].current)),r=()=>{L(i);let a;return Jc(()=>{a=e(L(i))}),a};t?Ut(r):Rr(r)},ME=(s,e)=>zg(s,e,!1),bE=(s,e)=>zg(s,e,!0);Object.assign(ME,{pre:bE});function Tp(s,e){if(e===xm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Xc||e===Bu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Xc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function SE(s){const e=new Map,t=new Map,n=s.clone();return Vg(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Vg(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Vg(s.children[n],e.children[n],t)}class TE extends hn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new RE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new wp(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new wp(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new HE(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Xi.extractUrlBase(e);a=Xi.resolveURL(l,this.path)}else a=Xi.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Yn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Hg){try{a[it.KHR_BINARY_GLTF]=new GE(e)}catch(u){i&&i(u);return}r=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new nA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:a[u]=new AE;break;case it.KHR_DRACO_MESH_COMPRESSION:a[u]=new WE(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[u]=new XE;break;case it.KHR_MESH_QUANTIZATION:a[u]=new qE;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function wE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Lt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class EE{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new ve(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],jt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new dd(h),l.distance=u;break;case"spot":l=new ud(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class AE{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){const i=[];e.color=new ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}}class CE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class RE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new J(r,r)}return Promise.all(i)}}class IE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class PE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class DE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ft)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class LE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class NE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(r[0],r[1],r[2],jt),Promise.all(i)}}class UE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class OE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(r[0],r[1],r[2],jt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ft)),Promise.all(i)}}class FE{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class BE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class kE{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class zE{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class VE{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class wp{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class HE{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Rn.TRIANGLES&&l.mode!==Rn.TRIANGLE_STRIP&&l.mode!==Rn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const p of u){const _=new ke,m=new C,g=new kt,x=new C(1,1,1),y=new Yu(p.geometry,p.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,_.compose(m,g,x));for(const v in c)if(v==="_COLOR_0"){const w=c[v];y.instanceColor=new Bs(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,c[v]);st.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Hg="glTF",sa=12,Ep={JSON:1313821514,BIN:5130562};class GE{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,sa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-sa,r=new DataView(e,sa);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Ep.JSON){const l=new Uint8Array(e,sa+a,o);this.content=n.decode(l)}else if(c===Ep.BIN){const l=sa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class WE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=mu[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=mu[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Cr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],m=c[p];m!==void 0&&(_.normalized=m)}u(f)},o,l,jt,d)})})}}class XE{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qE{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class Gg extends Zs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,_=p-l,m=-2*f+3*d,g=f-d,x=1-m,y=g-d+u;for(let v=0;v!==o;v++){const w=a[_+v+o],T=a[_+v+c]*h,A=a[p+v+o],M=a[p+v]*h;r[v]=x*w+y*T+m*A+g*M}return r}}const YE=new kt;class ZE extends Gg{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return YE.fromArray(r).normalize().toArray(r),r}}const Rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ap={9728:Et,9729:xt,9984:tl,9985:Er,9986:ws,9987:Dn},Cp={33071:sn,33648:Ir,10497:Ki},kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},KE={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Lr},zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $E(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new $a({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),s.DefaultMaterial}function vs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ni(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function JE(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function jE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function QE(s){let e;const t=s.extensions&&s.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vh(t.attributes):e=s.indices+":"+Vh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Vh(s.targets[n]);return e}function Vh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function gu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tA=new ke;class nA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new cg(this.options.manager):this.textureLoader=new mg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vs(r,o,i),ni(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Xi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=kh[i.type],o=Cr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ut(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=kh[i.type],l=Cr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(f&&f!==u){const g=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let y=t.cache.get(x);y||(_=new l(o,g*f,i.count*f/h),y=new Ga(_,f/h),t.cache.add(x,y)),m=new Ji(y,c,d%f/h,p)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new ut(_,c,p);if(i.sparse!==void 0){const g=kh.SCALAR,x=Cr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,w=new x(a[1],y,i.sparse.count*g),T=new l(a[2],v,i.sparse.count*c);o!==null&&(m=new ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,M=w.length;A<M;A++){const S=w[A];if(m.setX(S,T[A*c]),c>=2&&m.setY(S,T[A*c+1]),c>=3&&m.setZ(S,T[A*c+2]),c>=4&&m.setW(S,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ap[d.magFilter]||xt,h.minFilter=Ap[d.minFilter]||Dn,h.wrapS=Cp[d.wrapS]||Ki,h.wrapT=Cp[d.wrapT]||Ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Et&&h.minFilter!==xt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){const m=new bt(_);m.needsUpdate=!0,d(m)}),t.load(Xi.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ni(u,a),u.userData.mimeType=a.mimeType||eA(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new xl,zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Qt,zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $a}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){const u=i[it.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new ve(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],jt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Gn);const h=r.alphaMode||zh.OPAQUE;if(h===zh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==on&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new J(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==on&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==on){const u=r.emissiveFactor;o.emissive=new ve().setRGB(u[0],u[1],u[2],jt)}return r.emissiveTexture!==void 0&&a!==on&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&vs(i,u,r),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Rp(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=QE(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Rp(new $e,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?$E(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],m=a[f];let g;const x=l[f];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new qu(_,x):new St(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?g.geometry=Tp(g.geometry,Bu):m.mode===Rn.TRIANGLE_FAN&&(g.geometry=Tp(g.geometry,Xc));else if(m.mode===Rn.LINES)g=new Kn(_,x);else if(m.mode===Rn.LINE_STRIP)g=new Ei(_,x);else if(m.mode===Rn.LINE_LOOP)g=new Zu(_,x);else if(m.mode===Rn.POINTS)g=new Ku(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&jE(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ni(g,r),m.extensions&&vs(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&vs(i,u[0],r),u[0];const d=new si;r.extensions&&vs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(zu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ns(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ni(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new ke;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Wa(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],p=i.samplers[f.sampler],_=f.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",x)),l.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let y=0,v=d.length;y<v;y++){const w=d[y],T=f[y],A=p[y],M=_[y],S=m[y];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const D=n._createAnimationTracks(w,T,A,M,S);if(D)for(let I=0;I<D.length;I++)g.push(D[I])}const x=new kr(r,void 0,g);return ni(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,tA)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,p=u[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new gl:l.length>1?h=new si:l.length===1?h=l[0]:h=new st,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ni(h,r),r.extensions&&vs(n,h,r),r.matrix!==void 0){const u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new si;n.name&&(r.name=i.createUniqueName(n.name)),ni(r,n),n.extensions&&vs(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){const d=c[h];d.parent!==null?r.add(SE(d)):r.add(d)}const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof zt||d instanceof bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Bi[r.path]===Bi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Bi[r.path]){case Bi.weights:l=zs;break;case Bi.rotation:l=Vs;break;case Bi.translation:case Bi.scale:l=Hs;break;default:n.itemSize===1?l=zs:l=Hs;break}const h=i.interpolation!==void 0?KE[i.interpolation]:Nr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const p=new l(c[d]+"."+Bi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Vs?ZE:Gg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iA(s,e,t){const n=e.attributes,i=new Pt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const h=gu(Cr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=gu(Cr[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Dt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Rp(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=mu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return nt.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),ni(s,e),iA(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?JE(s,e.targets,t):s})}const sA=s=>{const e={nodes:{},materials:{}};return s&&s.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e};function rA(s,e){const t=vE(TE,{});return(r=>t.load(r,{transform(a){return{...a,...sA(a.scene)}}}))(s)}const ys=s=>({subscribe:s.subscribe,get current(){return s.current}});let ba=0;const bd=Xt(!1),kl=Xt(!1),Sd=Xt(void 0),Td=Xt(0),wd=Xt(0),Wg=Xt([]),Ed=Xt(0),{onStart:aA,onLoad:oA,onError:cA}=Js;Js.onStart=(s,e,t)=>{aA?.(s,e,t),kl.set(!0),Sd.set(s),Td.set(e),wd.set(t);const n=(e-ba)/(t-ba);Ed.set(n),n===1&&bd.set(!0)};Js.onLoad=()=>{oA?.(),kl.set(!1)};Js.onError=s=>{cA?.(s),Wg.update(e=>[...e,s])};Js.onProgress=(s,e,t)=>{e===t&&(ba=t),kl.set(!0),Sd.set(s),Td.set(e),wd.set(t);const n=(e-ba)/(t-ba)||1;Ed.set(n),n===1&&bd.set(!0)};ys(kl),ys(Sd),ys(Td),ys(wd),ys(Wg),ys(Ed),ys(bd);new C;new C;new C;new Dt;new ke;new Ai;new C;new C;new ke;new C;new C;new st;const lA=()=>xE("threlte-controls",{orbitControls:Wi(void 0),trackballControls:Wi(void 0),cameraControls:Wi(void 0)});new C;new C;new C;new J;const hA="Right",uA="Top",dA="Front",fA="Left",pA="Bottom",mA="Back";[hA,uA,dA,fA,pA,mA].map(s=>s.toLocaleLowerCase());new Pt;new C;ye.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new J(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Pn.line={uniforms:id.merge([ye.common,ye.fog,ye.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new ht;new C;new C;new ht;new ht;new ht;new C;new ke;new Sg;new C;new Pt;new Dt;new ht;const Ip={type:"change"},Ad={type:"start"},Xg={type:"end"},Yo=new Ai,Pp=new bi,gA=Math.cos(70*zu.DEG2RAD),Ot=new C,dn=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6;let _A=class extends wg{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new kt,this._lastTargetPosition=new C,this._quat=new kt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cu,this._sphericalDelta=new cu,this._scale=1,this._panOffset=new C,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new C,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vA.bind(this),this._onPointerDown=xA.bind(this),this._onPointerUp=yA.bind(this),this._onContextMenu=AA.bind(this),this._onMouseWheel=SA.bind(this),this._onKeyDown=TA.bind(this),this._onTouchStart=wA.bind(this),this._onTouchMove=EA.bind(this),this._onMouseDown=MA.bind(this),this._onMouseMove=bA.bind(this),this._interceptControlDown=CA.bind(this),this._interceptControlUp=RA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ip),this.update(),this.state=_t.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=dn:n>Math.PI&&(n-=dn),i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ot.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Yo.origin.copy(this.object.position),Yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yo.direction))<gA?this.object.lookAt(this.target):(Pp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yo.intersectPlane(Pp,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(Ip),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ot.copy(i).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new J,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function xA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function vA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function yA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xg),this.state=_t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function MA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=_t.DOLLY;break;case Is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_t.ROTATE}break;case Is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Ad)}function bA(s){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function SA(s){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(s.preventDefault(),this.dispatchEvent(Ad),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Xg))}function TA(s){this.enabled!==!1&&this._handleKeyDown(s)}function wA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=_t.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=_t.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Ad)}function EA(s){switch(this._trackPointer(s),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=_t.NONE}}function AA(s){this.enabled!==!1&&s.preventDefault()}function CA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RA(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const IA={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},PA={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};var DA=ji("<!> <!> <!>",1);function LA(s,e){Ws(e,!0);let t=Yt(e,"opacity",3,1),n=Yt(e,"width",3,1),i=Yt(e,"height",3,1),r=Yt(e,"blur",3,1),a=Yt(e,"far",3,10),o=Yt(e,"smooth",3,!0),c=Yt(e,"resolution",3,512),l=Yt(e,"frames",3,1/0),h=Yt(e,"scale",3,10),u=Yt(e,"color",3,"#000000"),d=Yt(e,"depthWrite",3,!1),f=Yt(e,"ref",15),p=ka(e,["$$slots","$$events","$$legacy","opacity","width","height","blur","far","smooth","resolution","frames","scale","color","depthWrite","ref","children"]);const{scene:_,renderer:m}=Gr(),g=new si,x=tt(()=>n()*(Array.isArray(h())?h()[0]:h()||1)),y=tt(()=>i()*(Array.isArray(h())?h()[1]:h()||1)),v=tt(()=>{const j=new ln(c(),c());return j.texture.generateMipmaps=!1,j.texture.colorSpace=m.outputColorSpace,j}),w=tt(()=>{const j=new ln(c(),c());return j.texture.generateMipmaps=!1,j}),T=tt(()=>new Ys(L(x),L(y)).rotateX(Math.PI/2)),A=tt(()=>new St(L(T))),M=tt(()=>{const j=u(),_e=new Ll({depthTest:!1,depthWrite:!1});return _e.onBeforeCompile=ue=>{ue.uniforms={...ue.uniforms,uColor:{value:new ve(j).convertSRGBToLinear()}},ue.fragmentShader=`uniform vec3 uColor;
${ue.fragmentShader}`,ue.fragmentShader=ue.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),ue.fragmentShader=ue.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},_e}),S=new _n({...IA,depthTest:!1}),D=new _n({...PA,depthTest:!1}),I=tt(()=>new ns(-L(x)/2,L(x)/2,L(y)/2,-L(y)/2,0,a()));Ut(()=>L(I).updateProjectionMatrix());const O=tt(()=>new on({map:L(v).texture,transparent:!0,opacity:t(),depthWrite:d()})),B=j=>{L(A).visible=!0,L(A).material=S,S.uniforms.tDiffuse.value=L(v).texture,S.uniforms.h.value=j*1/256,m.setRenderTarget(L(w)),m.render(L(A),L(I)),L(A).material=D,D.uniforms.tDiffuse.value=L(w).texture,D.uniforms.v.value=j*1/256,m.setRenderTarget(L(v)),m.render(L(A),L(I)),L(A).visible=!1},G=()=>{const j=_.background;_.background=null;const _e=_.overrideMaterial;_.overrideMaterial=L(M);const ue=m.getClearAlpha();m.setClearAlpha(0),m.setRenderTarget(L(v)),m.render(_,L(I)),_.overrideMaterial=_e,B(r()),o()&&B(r()*.4),m.setRenderTarget(null),_.background=j,m.setClearAlpha(ue)},z=()=>{G()},V=tt(()=>l()===Number.POSITIVE_INFINITY);Na(G,{running:()=>L(V)});let H=0;Na(()=>{G(),H+=1},{running:()=>!L(V)&&H<l()}),za(()=>{L(v).dispose(),L(w).dispose(),L(T).dispose(),L(M).dispose(),S.dispose(),D.dispose(),L(O).dispose()});var le={refresh:z};return ai(s,bu({get is(){return g}},()=>p,{get ref(){return f()},set ref(j){f(j)},children:(j,_e)=>{var ue=qi(),xe=pn(ue);Mr(xe,()=>ai.Group,(qe,rt)=>{rt(qe,{"rotation.x":Math.PI/2,children:(ct,Q)=>{var fe=DA(),he=pn(fe);Mr(he,()=>ai.Mesh,(Le,at)=>{at(Le,{"scale.y":-1,"rotation.x":-Math.PI/2,get material(){return L(O)},get geometry(){return L(T)}})});var Oe=dt(he,2);ai(Oe,{get is(){return L(I)},manual:!0});var Ne=dt(Oe,2);Ba(Ne,()=>e.children??jc,()=>({ref:g})),yt(ct,fe)},$$slots:{default:!0}})}),yt(j,ue)},$$slots:{default:!0}})),Xs(le)}function NA(s,e){Ws(e,!0);const t=()=>N0(o,"$parent",n),[n,i]=U0();let r=Yt(e,"ref",15),a=ka(e,["$$slots","$$events","$$legacy","ref","children"]);const o=Fg(),{dom:c,invalidate:l}=Gr();if(!Hn(t(),"Camera"))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const h=new _A(t(),c),{orbitControls:u}=lA();Na(()=>{h.update()},{running:()=>e.autoRotate??e.enableDamping??!1}),Ut(()=>{const d=f=>{l(),e.onchange?.(f)};return u.set(h),h.addEventListener("change",d),()=>{u.set(void 0),h.removeEventListener("change",d)}}),ai(s,bu({get is(){return h}},()=>a,{get ref(){return r()},set ref(d){r(d)},children:(d,f)=>{var p=qi(),_=pn(p);Ba(_,()=>e.children??jc,()=>({ref:h})),yt(d,p)},$$slots:{default:!0}})),Xs(),i()}new ke;new ke;new St;`${Ye.logdepthbuf_pars_vertex}${Ye.fog_pars_vertex}${Ye.logdepthbuf_vertex}${Ye.fog_vertex}`;`${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;`${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;const UA=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,OA=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`,FA=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,BA=FA,kA=`
	${UA}
	${OA}
`;`${BA}${kA}${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;new Pt;typeof window<"u"&&document.createElement("div");for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);new ns(-1,1,1,-1,0,1);class zA extends $e{constructor(){super(),this.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Re([0,2,0,0,2,0],2))}}new zA;var qg={exports:{}};qg.exports=zl;qg.exports.default=zl;function zl(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=Yg(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,c,l,h,u,d,f;if(n&&(r=XA(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(var p=t;p<i;p+=t)u=s[p],d=s[p+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Ua(r,a,t,o,c,f,0),a}function Yg(s,e,t,n,i){var r,a;if(i===vu(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Dp(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Dp(r,s[r],s[r+1],a);return a&&Vl(a,a.next)&&(Fa(a),a=a.next),a}function Gs(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Vl(t,t.next)||wt(t.prev,t,t.next)===0)){if(Fa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ua(s,e,t,n,i,r,a){if(s){!a&&r&&$A(s,n,i,r);for(var o=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?HA(s,n,i,r):VA(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Fa(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=GA(Gs(s),e,t),Ua(s,e,t,n,i,r,2)):a===2&&WA(s,e,t,n,i,r):Ua(Gs(s),e,t,n,i,r,1);break}}}}function VA(s){var e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Tr(i,o,r,c,a,l,p.x,p.y)&&wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function HA(s,e,t,n){var i=s.prev,r=s,a=s.next;if(wt(i,r,a)>=0)return!1;for(var o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,p=h<u?h<d?h:d:u<d?u:d,_=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,g=_u(f,p,e,t,n),x=_u(_,m,e,t,n),y=s.prevZ,v=s.nextZ;y&&y.z>=g&&v&&v.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==a&&Tr(o,h,c,u,l,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&Tr(o,h,c,u,l,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==a&&Tr(o,h,c,u,l,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&Tr(o,h,c,u,l,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function GA(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Vl(i,r)&&Zg(i,n,n.next,r)&&Oa(i,r)&&Oa(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Fa(n),Fa(n.next),n=s=r),n=n.next}while(n!==s);return Gs(n)}function WA(s,e,t,n,i,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&QA(a,o)){var c=Kg(a,o);a=Gs(a,a.next),c=Gs(c,c.next),Ua(a,e,t,n,i,r,0),Ua(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function XA(s,e,t,n){var i=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Yg(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(jA(l));for(i.sort(qA),r=0;r<i.length;r++)t=YA(i[r],t);return t}function qA(s,e){return s.x-e.x}function YA(s,e){var t=ZA(s,e);if(!t)return e;var n=Kg(t,s);return Gs(n,n.next),Gs(t,t.next)}function ZA(s,e){var t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var c=a,l=a.x,h=a.y,u=1/0,d;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Tr(i<h?n:r,i,l,h,i<h?r:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Oa(t,s)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&KA(a,t)))&&(a=t,u=d)),t=t.next;while(t!==c);return a}function KA(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function $A(s,e,t,n){var i=s;do i.z===0&&(i.z=_u(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,JA(i)}function JA(s){var e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function _u(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function jA(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Tr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function QA(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!e1(s,e)&&(Oa(s,e)&&Oa(e,s)&&t1(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||Vl(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Vl(s,e){return s.x===e.x&&s.y===e.y}function Zg(s,e,t,n){var i=Ko(wt(s,e,t)),r=Ko(wt(s,e,n)),a=Ko(wt(t,n,s)),o=Ko(wt(t,n,e));return!!(i!==r&&a!==o||i===0&&Zo(s,t,e)||r===0&&Zo(s,n,e)||a===0&&Zo(t,s,n)||o===0&&Zo(t,e,n))}function Zo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ko(s){return s>0?1:s<0?-1:0}function e1(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Oa(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function t1(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Kg(s,e){var t=new xu(s.i,s.x,s.y),n=new xu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dp(s,e,t,n){var i=new xu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}zl.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,a=Math.abs(vu(s,0,r,t));if(i)for(var o=0,c=e.length;o<c;o++){var l=e[o]*t,h=o<c-1?e[o+1]*t:s.length;a-=Math.abs(vu(s,l,h,t))}var u=0;for(o=0;o<n.length;o+=3){var d=n[o]*t,f=n[o+1]*t,p=n[o+2]*t;u+=Math.abs((s[d]-s[p])*(s[f+1]-s[d+1])-(s[d]-s[f])*(s[p+1]-s[d+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function vu(s,e,t,n){for(var i=0,r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}zl.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[i][r][a]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new J;new J;var Lp;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let o=0;o<i.length;o++){const c=i[o];for(;r.length>=2;){const l=r[r.length-1],h=r[r.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))r.pop();else break}r.push(c)}r.pop();let a=[];for(let o=i.length-1;o>=0;o--){const c=i[o];for(;a.length>=2;){const l=a[a.length-1],h=a[a.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))a.pop();else break}a.push(c)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(Lp||(Lp={}));new on;new C;new ke;new Ai;new Dt;new Pt;new C;new C;const Np=["♩","♪","♫","♬","♭","♮"];let n1=0;const ec=Mu({notes:[]});function i1(s,e){const t={id:n1++,x:s,y:e,glyph:Np[Math.floor(Math.random()*Np.length)],driftX:(Math.random()-.5)*120,duration:1400+Math.random()*800,rotation:(Math.random()-.5)*40,wobble:20+Math.random()*30};ec.notes.push(t),setTimeout(()=>{const n=ec.notes.findIndex(i=>i.id===t.id);n!==-1&&ec.notes.splice(n,1)},t.duration+100)}const s1=["plate.C2","plate.D2","plate.E2","plate.F2","plate.G2","plate.A2","plate.B2","plate.C3","plate.D3","plate.E3","plate.F3","plate.G3","plate.A3","plate.B3","plate.C4","plate.D4","plate.E4","plate.F4","plate.G4","plate.A4","plate.B4","plate.C5","plate.D5","plate.E5","plate.F5","plate.G5","plate.A5","plate.B5","plate.C6","plate.D6","plate.E6","plate.F6","plate.G6","plate.A6","plate.B6","plate.C7","plate.Cs2","plate.Ds2","plate.Fs2","plate.Gs2","plate.As2","plate.Cs3","plate.Ds3","plate.Fs3","plate.Gs3","plate.As3","plate.Cs4","plate.Ds4","plate.Fs4","plate.Gs4","plate.As4","plate.Cs5","plate.Ds5","plate.Fs5","plate.Gs5","plate.As5","plate.Cs6","plate.Ds6","plate.Fs6","plate.Gs6","plate.As6"],r1=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Up=[];for(let s=2;s<=7;s++)for(const e of r1){if(Up.length>=61)break;Up.push(`${e}${s}`)}const Rs=Mu({pending:[],triggerByIndex:null});function a1(s){Rs.pending.push(s)}function o1(s){if(Rs.triggerByIndex)Rs.triggerByIndex(s);else{const e=s1[s];e&&a1(e)}}let ra=null;function c1(){return ra||(ra=new AudioContext),ra.state==="suspended"&&ra.resume(),ra}function l1(s){const e=c1(),t=36+s,n=440*Math.pow(2,(t-69)/12),i=e.currentTime,r=1.4-s*.007,a=e.createGain();a.gain.setValueAtTime(.001,i),a.gain.linearRampToValueAtTime(.55,i+.004),a.gain.exponentialRampToValueAtTime(.001,i+r),a.connect(e.destination);const o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(n,i),o.frequency.setValueAtTime(n*1.003,i),o.frequency.exponentialRampToValueAtTime(n,i+.02);const c=e.createGain();c.gain.value=1,o.connect(c),c.connect(a);const l=e.createOscillator();l.type="sine",l.frequency.setValueAtTime(n*4,i);const h=e.createGain();h.gain.value=.12,l.connect(h),h.connect(a);const u=e.sampleRate*.04,d=e.createBuffer(1,u,e.sampleRate),f=d.getChannelData(0);for(let m=0;m<u;m++)f[m]=Math.random()*2-1;const p=e.createBufferSource();p.buffer=d;const _=e.createGain();_.gain.setValueAtTime(.08,i),_.gain.exponentialRampToValueAtTime(.001,i+.04),p.connect(_),_.connect(e.destination),o.start(i),o.stop(i+r+.05),l.start(i),l.stop(i+r+.05),p.start(i)}function h1(s,e){Ws(e,!0);const t=new Set(["stage","ground"]),n=new ve("#8b7355"),i=new ve("#ff6a00"),r=new ve("#000000"),{camera:a,renderer:o}=Gr(),c=rA("/models/marimba.glb"),l=new bg,h=new J(-9999,-9999);let u=[],d=[];function f(y,v){y.hit=1;const w=v??d.indexOf(y);if(w>=0&&l1(w),o&&a.current){const T=new C;y.mesh.getWorldPosition(T),T.project(a.current);const M=o.domElement.getBoundingClientRect(),S=M.left+(T.x*.5+.5)*M.width,D=M.top+(T.y*-.5+.5)*M.height;i1(S,D)}}Rr(()=>{c.then(y=>{u=[],y.scene.traverse(w=>{if(!(w instanceof St)||t.has(w.name))return;const T=w.material.clone();T.emissive=r.clone(),T.emissiveIntensity=1,w.material=T,w.scale.setScalar(1),u.push({mesh:w,hit:0})});const v=new C;d=[...u].sort((w,T)=>{w.mesh.getWorldPosition(v);const A=v.x;return T.mesh.getWorldPosition(v),A-v.x}),Rs.triggerByIndex=w=>{const T=d[w];T&&f(T,w)}})});function p(y){const v=o?.domElement,w=v?v.getBoundingClientRect():{left:0,top:0,width:window.innerWidth,height:window.innerHeight};h.x=(y.clientX-w.left)/w.width*2-1,h.y=-((y.clientY-w.top)/w.height)*2+1}function _(){if(!u.length||!a.current||!o)return;l.setFromCamera(h,a.current);const y=l.intersectObjects(u.map(w=>w.mesh),!1);if(!y.length)return;const v=u.find(w=>w.mesh===y[0].object);v&&f(v,d.indexOf(v))}const m=new ve;Na(y=>{if(!u.length||!a.current)return;if(Rs.pending.length){for(const A of Rs.pending){const M=u.find(S=>S.mesh.name===A);M&&f(M)}Rs.pending.length=0}l.setFromCamera(h,a.current);const v=l.intersectObjects(u.map(A=>A.mesh),!1),w=v.length?v[0].object:null;let T=!1;for(const A of u){const{mesh:M}=A,S=M.material,D=M===w;D&&(T=!0);const I=D?1.1:1;M.scale.setScalar(M.scale.x+(I-M.scale.x)*.18),A.hit=Math.max(0,A.hit-.035),A.hit>0?m.copy(i).multiplyScalar(A.hit):D?m.copy(n):m.copy(r),S.emissive.lerp(m,.2)}o&&(o.domElement.style.cursor=T?"pointer":"default")});var g=qi();Yh("mousemove",Hd,p),Yh("click",Hd,_);var x=pn(g);G0(x,()=>c,null,(y,v)=>{var w=tt(()=>{var{scene:A}=L(v);return{scene:A}}),T=tt(()=>L(w).scene);ai(y,{get is(){return L(T)}})}),yt(s,g),Xs()}var u1=ji("<!> <!> <!> <!> <!> <!>",1);function d1(s){var e=u1(),t=pn(e);Mr(t,()=>ai.AmbientLight,(c,l)=>{l(c,{intensity:.8})});var n=dt(t,2);Mr(n,()=>ai.DirectionalLight,(c,l)=>{l(c,{position:[6,10,4],intensity:1.6,castShadow:!0})});var i=dt(n,2);Mr(i,()=>ai.DirectionalLight,(c,l)=>{l(c,{position:[-5,3,-3],intensity:.5,color:"#b8d4ff"})});var r=dt(i,2);Mr(r,()=>ai.PerspectiveCamera,(c,l)=>{l(c,{makeDefault:!0,fov:42,position:[0,1.4,5],children:(h,u)=>{NA(h,{enableDamping:!0,dampingFactor:.07,minDistance:2,maxDistance:12,maxPolarAngle:Math.PI/1.9,target:[0,.4,0],autoRotate:!1,autoRotateSpeed:.4})},$$slots:{default:!0}})});var a=dt(r,2);h1(a,{});var o=dt(a,2);LA(o,{position:[0,-.01,0],scale:8,blur:2.5,far:2,opacity:.45,color:"#1a1612"}),yt(s,e)}var f1=ji('<span class="note svelte-ojhnaq"> </span>'),p1=ji('<div class="overlay svelte-ojhnaq" aria-hidden="true"></div>');function m1(s,e){Ws(e,!0);var t=p1();Cn(t,21,()=>ec.notes,n=>n.id,(n,i)=>{var r=f1(),a=Ns(r,!0);Yi(r),bn(()=>{Z0(r,`
        left: ${L(i).x??""}px;
        top: ${L(i).y??""}px;
        --drift-x: ${L(i).driftX??""}px;
        --wobble: ${L(i).wobble??""}px;
        --rotation: ${L(i).rotation??""}deg;
        --duration: ${L(i).duration??""}ms;
      `),k0(a,L(i).glyph)}),yt(n,r)}),Yi(t),yt(s,t),Xs()}var g1=Zn('<line stroke="#a0855a" stroke-width="0.9" opacity="0.8"></line>'),_1=Zn('<line stroke="#a0855a" stroke-width="0.9" opacity="0.8"></line>'),x1=Zn('<line stroke="#a0855a" stroke-width="1" opacity="0.5"></line>'),v1=Zn('<line stroke-width="1.2"></line>'),y1=Zn('<text font-size="11" font-family="serif" style="user-select:none">♯</text>'),M1=Zn('<!><ellipse rx="5.5" ry="3.8"></ellipse>',1),b1=Zn('<!><line stroke="#8b7355" stroke-width="1.3"></line><!>',1),S1=Zn('<line stroke-width="1.2"></line>'),T1=Zn('<text font-size="11" font-family="serif" style="user-select:none">♯</text>'),w1=Zn('<!><ellipse rx="5.5" ry="3.8"></ellipse>',1),E1=Zn('<!><line stroke="#8b7355" stroke-width="1.3"></line><!>',1),A1=ji('<div class="score svelte-1k0mrad"><svg role="slider" aria-label="Score playhead" tabindex="0" class="svelte-1k0mrad"><rect fill="url(#parchment)"></rect><defs><linearGradient id="parchment" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f7f0dc"></stop><stop offset="40%" stop-color="#f2e8cc"></stop><stop offset="100%" stop-color="#ede0b8"></stop></linearGradient><filter id="glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur><feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><line x1="0" y1="0.5" y2="0.5" stroke="#c8a96e" stroke-width="1.5"></line><line stroke="#7a5c38" stroke-width="3" stroke-linecap="round" opacity="0.7"></line><!><text font-size="68" font-family="serif" fill="#7a5c38" opacity="0.85" style="user-select:none">𝄞</text><!><text font-size="36" font-family="serif" fill="#7a5c38" opacity="0.85" style="user-select:none">𝄢</text><!><line stroke="#7a5c38" stroke-width="1.5" opacity="0.7"></line><line stroke="#7a5c38" stroke-width="1.2" opacity="0.7"></line><line stroke="#7a5c38" stroke-width="3.5" opacity="0.7"></line><!><!><line stroke="#8b7355"></line><polygon fill="#8b7355"></polygon></svg></div>');function C1(s,e){Ws(e,!0);const t=[{t:.01,keys:[24,28]},{t:.06,keys:[30,35]},{t:.11,keys:[31,35]},{t:.16,keys:[36,40]},{t:.21,keys:[37,43]},{t:.26,keys:[40,43]},{t:.32,keys:[43,48]},{t:.38,keys:[36,48]},{t:.44,keys:[36,40]},{t:.49,keys:[33,38]},{t:.54,keys:[32,36]},{t:.59,keys:[28,33]},{t:.64,keys:[26,31]},{t:.69,keys:[24,28]},{t:.76,keys:[24,36]},{t:.82,keys:[28,35]},{t:.88,keys:[31,40]},{t:.93,keys:[36,43]},{t:.99,keys:[24,36]}],n=[{t:.03,keys:[12,19]},{t:.1,keys:[8,16]},{t:.2,keys:[12,17]},{t:.28,keys:[7,19]},{t:.35,keys:[14,21]},{t:.43,keys:[16,23]},{t:.52,keys:[18,21]},{t:.6,keys:[12,21]},{t:.67,keys:[13,24]},{t:.77,keys:[12,19]},{t:.88,keys:[7,19]},{t:.97,keys:[0,12]}],i=165,r=58,a=18,o=11,c=o/2,l=65,h=l-4*o,u=l-2*o,d=139,f=d-4*o,p=d-2*o,_=[.25,.5,.75],m=[0,0,1,1,2,3,3,4,4,5,5,6];function g(W){const k=36+W;return(Math.floor(k/12)-1)*7+m[k%12]}const x=30,y=38,v=18,w=26,T=new Set([1,3,6,8,10]);function A(W){return T.has((36+W)%12)}function M(W){return l-(g(W)-x)*c}function S(W){return d-(g(W)-v)*c}function D(W,k){const K=[...W].sort((ge,Ie)=>ge-Ie).map(ge=>({keyIdx:ge,y:k(ge),step:g(ge),xOff:0}));for(let ge=0;ge<K.length-1;ge++)K[ge+1].step-K[ge].step<=1&&(K[ge+1].xOff=11);return K}function I(W,k){const se=W.map(re=>re.y),K=Math.min(...se),ge=Math.max(...se),Ie=(K+ge)/2>=k,ie=Math.max(...W.map(re=>re.xOff));return{up:Ie,x:Ie?ie+4.5:-4.5,y1:Ie?ge:K,y2:Ie?K-30:ge+30}}function O(W,k){return Math.round(W*1e4)*100+k}function B(W){const k=g(W),se=[];for(let K=x-2;K>=k;K-=2)se.push(l+(x-K)*c);for(let K=y+2;K<=k;K+=2)se.push(h-(K-y)*c);return se}function G(W){const k=g(W),se=[];for(let K=v-2;K>=k;K-=2)se.push(d+(v-K)*c);for(let K=w+2;K<=k;K+=2)se.push(f-(K-w)*c);return se}let z=bs(800);function V(W){return r+W*(L(z)-r-a)}let H=null,le=null,j=bs(.02),_e=bs(!1),ue=bs(null),xe=bs(Mu(new Set));function qe(W,k){const se=Math.min(W,k),K=Math.max(W,k);for(const ge of[...t,...n])if(ge.t>=se&&ge.t<=K)for(const Ie of ge.keys){o1(Ie);const ie=O(ge.t,Ie);L(xe).add(ie),setTimeout(()=>{Sn(xe,new Set([...L(xe)].filter(re=>re!==ie)),!0)},650)}}function rt(W){if(!H)return 0;const k=H.getBoundingClientRect();return Math.max(0,Math.min(1,(W-k.left)/k.width))}function ct(W){Sn(_e,!0),W.currentTarget.setPointerCapture(W.pointerId);const k=rt(W.clientX);qe(k-.005,k+.005),Sn(ue,k,!0),Sn(j,k,!0)}function Q(W){if(!L(_e))return;const k=rt(W.clientX);L(ue)!==null&&qe(L(ue),k),Sn(ue,k,!0),Sn(j,k,!0)}function fe(){Sn(_e,!1),Sn(ue,null)}let he=tt(()=>V(L(j))),Oe=tt(()=>V(1)+10);var Ne=A1(),Le=Ns(Ne);me(Le,"height",i),me(Le,"aria-valuemin",0),me(Le,"aria-valuemax",100);var at=Ns(Le);me(at,"height",i);var Ke=dt(at,2),ee=dt(Ke);me(ee,"x1",r-14),me(ee,"y1",h),me(ee,"x2",r-14),me(ee,"y2",d);var oe=dt(ee);Cn(oe,16,()=>Array(5),Bn,(W,k,se)=>{var K=g1();me(K,"x1",r-6),me(K,"y1",h+se*o),me(K,"y2",h+se*o),bn(()=>me(K,"x2",L(z)-a)),yt(W,K)});var ne=dt(oe);me(ne,"x",r-40),me(ne,"y",l+6);var be=dt(ne);Cn(be,16,()=>Array(5),Bn,(W,k,se)=>{var K=_1();me(K,"x1",r-6),me(K,"y1",f+se*o),me(K,"y2",f+se*o),bn(()=>me(K,"x2",L(z)-a)),yt(W,K)});var P=dt(be);me(P,"x",r-40),me(P,"y",f+22);var He=dt(P);Cn(He,17,()=>_,Bn,(W,k)=>{const se=tt(()=>V(L(k)));var K=x1();me(K,"y1",h),me(K,"y2",d),bn(()=>{me(K,"x1",L(se)),me(K,"x2",L(se))}),yt(W,K)});var Se=dt(He);me(Se,"x1",r-6),me(Se,"y1",h),me(Se,"x2",r-6),me(Se,"y2",d);var ze=dt(Se);me(ze,"y1",h),me(ze,"y2",d);var pe=dt(ze);me(pe,"y1",h),me(pe,"y2",d);var R=dt(pe);Cn(R,17,()=>t,Bn,(W,k)=>{const se=tt(()=>V(L(k).t)),K=tt(()=>D(L(k).keys,M)),ge=tt(()=>I(L(K),u));var Ie=b1(),ie=pn(Ie);Cn(ie,17,()=>L(K),Bn,(Ce,ce)=>{var Xe=qi(),N=pn(Xe);Cn(N,17,()=>B(L(ce).keyIdx),Bn,(de,ae)=>{const Te=tt(()=>L(xe).has(O(L(k).t,L(ce).keyIdx)));var te=v1();bn(()=>{me(te,"x1",L(se)+L(ce).xOff-9),me(te,"y1",L(ae)),me(te,"x2",L(se)+L(ce).xOff+9),me(te,"y2",L(ae)),me(te,"stroke",L(Te)?"#ff6a00":"#8b7355"),me(te,"opacity",L(Te)?1:.7)}),yt(de,te)}),yt(Ce,Xe)});var re=dt(ie),De=dt(re);Cn(De,17,()=>L(K),Bn,(Ce,ce)=>{const Xe=tt(()=>L(xe).has(O(L(k).t,L(ce).keyIdx))),N=tt(()=>L(Xe)?"#ff6a00":"#8b7355");var de=M1(),ae=pn(de);{var Te=Ae=>{var Ge=y1();bn(()=>{me(Ge,"x",L(se)+L(ce).xOff-13),me(Ge,"y",L(ce).y+4),me(Ge,"fill",L(N)),me(Ge,"opacity",L(Xe)?1:.9)}),yt(Ae,Ge)},te=tt(()=>A(L(ce).keyIdx));qh(ae,Ae=>{L(te)&&Ae(Te)})}var Y=dt(ae);bn(()=>{me(Y,"cx",L(se)+L(ce).xOff),me(Y,"cy",L(ce).y),me(Y,"fill",L(N)),me(Y,"transform",`rotate(-18,${L(se)+L(ce).xOff},${L(ce).y??""})`),me(Y,"filter",L(Xe)?"url(#glow)":""),me(Y,"opacity",L(Xe)?1:.88)}),yt(Ce,de)}),bn(()=>{me(re,"x1",L(se)+L(ge).x),me(re,"y1",L(ge).y1),me(re,"x2",L(se)+L(ge).x),me(re,"y2",L(ge).y2)}),yt(W,Ie)});var b=dt(R);Cn(b,17,()=>n,Bn,(W,k)=>{const se=tt(()=>V(L(k).t)),K=tt(()=>D(L(k).keys,S)),ge=tt(()=>I(L(K),p));var Ie=E1(),ie=pn(Ie);Cn(ie,17,()=>L(K),Bn,(Ce,ce)=>{var Xe=qi(),N=pn(Xe);Cn(N,17,()=>G(L(ce).keyIdx),Bn,(de,ae)=>{const Te=tt(()=>L(xe).has(O(L(k).t,L(ce).keyIdx)));var te=S1();bn(()=>{me(te,"x1",L(se)+L(ce).xOff-9),me(te,"y1",L(ae)),me(te,"x2",L(se)+L(ce).xOff+9),me(te,"y2",L(ae)),me(te,"stroke",L(Te)?"#ff6a00":"#8b7355"),me(te,"opacity",L(Te)?1:.7)}),yt(de,te)}),yt(Ce,Xe)});var re=dt(ie),De=dt(re);Cn(De,17,()=>L(K),Bn,(Ce,ce)=>{const Xe=tt(()=>L(xe).has(O(L(k).t,L(ce).keyIdx))),N=tt(()=>L(Xe)?"#ff6a00":"#8b7355");var de=w1(),ae=pn(de);{var Te=Ae=>{var Ge=T1();bn(()=>{me(Ge,"x",L(se)+L(ce).xOff-13),me(Ge,"y",L(ce).y+4),me(Ge,"fill",L(N)),me(Ge,"opacity",L(Xe)?1:.9)}),yt(Ae,Ge)},te=tt(()=>A(L(ce).keyIdx));qh(ae,Ae=>{L(te)&&Ae(Te)})}var Y=dt(ae);bn(()=>{me(Y,"cx",L(se)+L(ce).xOff),me(Y,"cy",L(ce).y),me(Y,"fill",L(N)),me(Y,"transform",`rotate(-18,${L(se)+L(ce).xOff},${L(ce).y??""})`),me(Y,"filter",L(Xe)?"url(#glow)":""),me(Y,"opacity",L(Xe)?1:.88)}),yt(Ce,de)}),bn(()=>{me(re,"x1",L(se)+L(ge).x),me(re,"y1",L(ge).y1),me(re,"x2",L(se)+L(ge).x),me(re,"y2",L(ge).y2)}),yt(W,Ie)});var U=dt(b);me(U,"y1",2),me(U,"y2",i);var $=dt(U);Yi(Le),nc(Le,W=>H=W,()=>H),Yi(Ne),nc(Ne,W=>le=W,()=>le),bn(W=>{me(Le,"width",L(z)),me(Le,"viewBox",`0 0 ${L(z)??""} 165`),me(Le,"aria-valuenow",W),me(at,"width",L(z)),me(Ke,"x2",L(z)),me(ze,"x1",L(Oe)-3),me(ze,"x2",L(Oe)-3),me(pe,"x1",L(Oe)+1),me(pe,"x2",L(Oe)+1),me(U,"x1",L(he)),me(U,"x2",L(he)),me(U,"stroke-width",L(_e)?2:1.5),me(U,"opacity",L(_e)?.9:.55),me($,"points",`${L(he)??""},11 ${L(he)-6},-1 ${L(he)+6},-1`),me($,"opacity",L(_e)?1:.7)},[()=>Math.round(L(j)*100)]),ql("pointerdown",Le,ct),ql("pointermove",Le,Q),ql("pointerup",Le,fe),Yh("pointercancel",Le,fe),$0(Ne,"clientWidth",W=>Sn(z,W)),yt(s,Ne),Xs()}z0(["pointerdown","pointermove","pointerup"]);var R1=ji('<meta name="description" content="Musician &amp; Artist"/>'),I1=ji('<main class="svelte-1uha8ag"><header class="svelte-1uha8ag"><h1 class="svelte-1uha8ag">wiedenmann<span class="svelte-1uha8ag">.art</span></h1> <p class="svelte-1uha8ag">musician &amp; artist</p></header> <div class="canvas-wrapper svelte-1uha8ag"><!></div> <!> <!></main>');function H1(s){var e=I1();L0("1uha8ag",a=>{var o=R1();Wp(()=>{D0.title="wiedenmann.art"}),yt(a,o)});var t=dt(Ns(e),2),n=Ns(t);Qw(n,{children:(a,o)=>{d1(a)},$$slots:{default:!0}}),Yi(t);var i=dt(t,2);m1(i,{});var r=dt(i,2);C1(r,{}),Yi(e),yt(s,e)}export{H1 as component};
