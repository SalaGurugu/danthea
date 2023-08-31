(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function vh(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Rt={},vs=[],ze=()=>{},Cw=()=>!1,Pw=/^on[^a-z]/,gc=e=>Pw.test(e),Eh=e=>e.startsWith("onUpdate:"),zt=Object.assign,Th=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ow=Object.prototype.hasOwnProperty,mt=(e,t)=>Ow.call(e,t),tt=Array.isArray,Es=e=>_c(e)==="[object Map]",Bg=e=>_c(e)==="[object Set]",at=e=>typeof e=="function",Ht=e=>typeof e=="string",wh=e=>typeof e=="symbol",Ot=e=>e!==null&&typeof e=="object",jg=e=>Ot(e)&&at(e.then)&&at(e.catch),qg=Object.prototype.toString,_c=e=>qg.call(e),Nw=e=>_c(e).slice(8,-1),Hg=e=>_c(e)==="[object Object]",Ah=e=>Ht(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,va=vh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yc=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},kw=/-(\w)/g,_n=yc(e=>e.replace(kw,(t,n)=>n?n.toUpperCase():"")),Dw=/\B([A-Z])/g,Xs=yc(e=>e.replace(Dw,"-$1").toLowerCase()),vc=yc(e=>e.charAt(0).toUpperCase()+e.slice(1)),Il=yc(e=>e?`on${vc(e)}`:""),Bi=(e,t)=>!Object.is(e,t),bl=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},La=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xw=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Mf;const gu=()=>Mf||(Mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ih(e){if(tt(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ht(r)?Uw(r):Ih(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(Ht(e))return e;if(Ot(e))return e}}const Lw=/;(?![^(]*\))/g,Vw=/:([^]+)/,Mw=/\/\*[^]*?\*\//g;function Uw(e){const t={};return e.replace(Mw,"").split(Lw).forEach(n=>{if(n){const r=n.split(Vw);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function bh(e){let t="";if(Ht(e))t=e;else if(tt(e))for(let n=0;n<e.length;n++){const r=bh(e[n]);r&&(t+=r+" ")}else if(Ot(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$w=vh(Fw);function Wg(e){return!!e||e===""}const qo=e=>Ht(e)?e:e==null?"":tt(e)||Ot(e)&&(e.toString===qg||!at(e.toString))?JSON.stringify(e,Kg,2):String(e),Kg=(e,t)=>t&&t.__v_isRef?Kg(e,t.value):Es(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Bg(t)?{[`Set(${t.size})`]:[...t.values()]}:Ot(t)&&!tt(t)&&!Hg(t)?String(t):t;let Ce;class zg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Gg(e){return new zg(e)}function Bw(e,t=Ce){t&&t.active&&t.effects.push(e)}function Qg(){return Ce}function jw(e){Ce&&Ce.cleanups.push(e)}const Rh=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yg=e=>(e.w&ar)>0,Xg=e=>(e.n&ar)>0,qw=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ar},Hw=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Yg(s)&&!Xg(s)?s.delete(e):t[n++]=s,s.w&=~ar,s.n&=~ar}t.length=n}},Va=new WeakMap;let Ei=0,ar=1;const _u=30;let We;const kr=Symbol(""),yu=Symbol("");class Sh{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bw(this,r)}run(){if(!this.active)return this.fn();let t=We,n=er;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=We,We=this,er=!0,ar=1<<++Ei,Ei<=_u?qw(this):Uf(this),this.fn()}finally{Ei<=_u&&Hw(this),ar=1<<--Ei,We=this.parent,er=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(Uf(this),this.onStop&&this.onStop(),this.active=!1)}}function Uf(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let er=!0;const Jg=[];function Js(){Jg.push(er),er=!1}function Zs(){const e=Jg.pop();er=e===void 0?!0:e}function Ae(e,t,n){if(er&&We){let r=Va.get(e);r||Va.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Rh()),Zg(s)}}function Zg(e,t){let n=!1;Ei<=_u?Xg(e)||(e.n|=ar,n=!Yg(e)):n=!e.has(We),n&&(e.add(We),We.deps.push(e))}function On(e,t,n,r,s,i){const o=Va.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&tt(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":tt(e)?Ah(n)&&a.push(o.get("length")):(a.push(o.get(kr)),Es(e)&&a.push(o.get(yu)));break;case"delete":tt(e)||(a.push(o.get(kr)),Es(e)&&a.push(o.get(yu)));break;case"set":Es(e)&&a.push(o.get(kr));break}if(a.length===1)a[0]&&vu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);vu(Rh(c))}}function vu(e,t){const n=tt(e)?e:[...e];for(const r of n)r.computed&&Ff(r);for(const r of n)r.computed||Ff(r)}function Ff(e,t){(e!==We||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Ww(e,t){var n;return(n=Va.get(e))==null?void 0:n.get(t)}const Kw=vh("__proto__,__v_isRef,__isVue"),t_=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wh)),zw=Ch(),Gw=Ch(!1,!0),Qw=Ch(!0),$f=Yw();function Yw(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=gt(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(gt)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Js();const r=gt(this)[t].apply(this,n);return Zs(),r}}),e}function Xw(e){const t=gt(this);return Ae(t,"has",e),t.hasOwnProperty(e)}function Ch(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?fA:i_:t?s_:r_).get(r))return r;const o=tt(r);if(!e){if(o&&mt($f,s))return Reflect.get($f,s,i);if(s==="hasOwnProperty")return Xw}const a=Reflect.get(r,s,i);return(wh(s)?t_.has(s):Kw(s))||(e||Ae(r,"get",s),t)?a:Lt(a)?o&&Ah(s)?a:a.value:Ot(a)?e?a_(a):po(a):a}}const Jw=e_(),Zw=e_(!0);function e_(e=!1){return function(n,r,s,i){let o=n[r];if(Ps(o)&&Lt(o)&&!Lt(s))return!1;if(!e&&(!Ma(s)&&!Ps(s)&&(o=gt(o),s=gt(s)),!tt(n)&&Lt(o)&&!Lt(s)))return o.value=s,!0;const a=tt(n)&&Ah(r)?Number(r)<n.length:mt(n,r),c=Reflect.set(n,r,s,i);return n===gt(i)&&(a?Bi(s,o)&&On(n,"set",r,s):On(n,"add",r,s)),c}}function tA(e,t){const n=mt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&On(e,"delete",t,void 0),r}function eA(e,t){const n=Reflect.has(e,t);return(!wh(t)||!t_.has(t))&&Ae(e,"has",t),n}function nA(e){return Ae(e,"iterate",tt(e)?"length":kr),Reflect.ownKeys(e)}const n_={get:zw,set:Jw,deleteProperty:tA,has:eA,ownKeys:nA},rA={get:Qw,set(e,t){return!0},deleteProperty(e,t){return!0}},sA=zt({},n_,{get:Gw,set:Zw}),Ph=e=>e,Ec=e=>Reflect.getPrototypeOf(e);function Ho(e,t,n=!1,r=!1){e=e.__v_raw;const s=gt(e),i=gt(t);n||(t!==i&&Ae(s,"get",t),Ae(s,"get",i));const{has:o}=Ec(s),a=r?Ph:n?kh:ji;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Wo(e,t=!1){const n=this.__v_raw,r=gt(n),s=gt(e);return t||(e!==s&&Ae(r,"has",e),Ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Ko(e,t=!1){return e=e.__v_raw,!t&&Ae(gt(e),"iterate",kr),Reflect.get(e,"size",e)}function Bf(e){e=gt(e);const t=gt(this);return Ec(t).has.call(t,e)||(t.add(e),On(t,"add",e,e)),this}function jf(e,t){t=gt(t);const n=gt(this),{has:r,get:s}=Ec(n);let i=r.call(n,e);i||(e=gt(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Bi(t,o)&&On(n,"set",e,t):On(n,"add",e,t),this}function qf(e){const t=gt(this),{has:n,get:r}=Ec(t);let s=n.call(t,e);s||(e=gt(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&On(t,"delete",e,void 0),i}function Hf(){const e=gt(this),t=e.size!==0,n=e.clear();return t&&On(e,"clear",void 0,void 0),n}function zo(e,t){return function(r,s){const i=this,o=i.__v_raw,a=gt(o),c=t?Ph:e?kh:ji;return!e&&Ae(a,"iterate",kr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Go(e,t,n){return function(...r){const s=this.__v_raw,i=gt(s),o=Es(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?Ph:t?kh:ji;return!t&&Ae(i,"iterate",c?yu:kr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function jn(e){return function(...t){return e==="delete"?!1:this}}function iA(){const e={get(i){return Ho(this,i)},get size(){return Ko(this)},has:Wo,add:Bf,set:jf,delete:qf,clear:Hf,forEach:zo(!1,!1)},t={get(i){return Ho(this,i,!1,!0)},get size(){return Ko(this)},has:Wo,add:Bf,set:jf,delete:qf,clear:Hf,forEach:zo(!1,!0)},n={get(i){return Ho(this,i,!0)},get size(){return Ko(this,!0)},has(i){return Wo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:zo(!0,!1)},r={get(i){return Ho(this,i,!0,!0)},get size(){return Ko(this,!0)},has(i){return Wo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:zo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Go(i,!1,!1),n[i]=Go(i,!0,!1),t[i]=Go(i,!1,!0),r[i]=Go(i,!0,!0)}),[e,n,t,r]}const[oA,aA,cA,lA]=iA();function Oh(e,t){const n=t?e?lA:cA:e?aA:oA;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(mt(n,s)&&s in r?n:r,s,i)}const uA={get:Oh(!1,!1)},hA={get:Oh(!1,!0)},dA={get:Oh(!0,!1)},r_=new WeakMap,s_=new WeakMap,i_=new WeakMap,fA=new WeakMap;function pA(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mA(e){return e.__v_skip||!Object.isExtensible(e)?0:pA(Nw(e))}function po(e){return Ps(e)?e:Nh(e,!1,n_,uA,r_)}function o_(e){return Nh(e,!1,sA,hA,s_)}function a_(e){return Nh(e,!0,rA,dA,i_)}function Nh(e,t,n,r,s){if(!Ot(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=mA(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function nr(e){return Ps(e)?nr(e.__v_raw):!!(e&&e.__v_isReactive)}function Ps(e){return!!(e&&e.__v_isReadonly)}function Ma(e){return!!(e&&e.__v_isShallow)}function c_(e){return nr(e)||Ps(e)}function gt(e){const t=e&&e.__v_raw;return t?gt(t):e}function Tc(e){return La(e,"__v_skip",!0),e}const ji=e=>Ot(e)?po(e):e,kh=e=>Ot(e)?a_(e):e;function l_(e){er&&We&&(e=gt(e),Zg(e.dep||(e.dep=Rh())))}function u_(e,t){e=gt(e);const n=e.dep;n&&vu(n)}function Lt(e){return!!(e&&e.__v_isRef===!0)}function Dh(e){return h_(e,!1)}function gA(e){return h_(e,!0)}function h_(e,t){return Lt(e)?e:new _A(e,t)}class _A{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:gt(t),this._value=n?t:ji(t)}get value(){return l_(this),this._value}set value(t){const n=this.__v_isShallow||Ma(t)||Ps(t);t=n?t:gt(t),Bi(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ji(t),u_(this))}}function Ve(e){return Lt(e)?e.value:e}const yA={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function d_(e){return nr(e)?e:new Proxy(e,yA)}function vA(e){const t=tt(e)?new Array(e.length):{};for(const n in e)t[n]=TA(e,n);return t}class EA{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ww(gt(this._object),this._key)}}function TA(e,t,n){const r=e[t];return Lt(r)?r:new EA(e,t,n)}class wA{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sh(t,()=>{this._dirty||(this._dirty=!0,u_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=gt(this);return l_(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function AA(e,t,n=!1){let r,s;const i=at(e);return i?(r=e,s=ze):(r=e.get,s=e.set),new wA(r,s,i||!s,n)}function rr(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){wc(i,t,n)}return s}function Ge(e,t,n,r){if(at(e)){const i=rr(e,t,n,r);return i&&jg(i)&&i.catch(o=>{wc(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Ge(e[i],t,n,r));return s}function wc(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){rr(c,null,10,[e,o,a]);return}}IA(e,n,s,r)}function IA(e,t,n,r=!0){console.error(e)}let qi=!1,Eu=!1;const se=[];let on=0;const Ts=[];let wn=null,Ir=0;const f_=Promise.resolve();let xh=null;function Lh(e){const t=xh||f_;return e?t.then(this?e.bind(this):e):t}function bA(e){let t=on+1,n=se.length;for(;t<n;){const r=t+n>>>1;Hi(se[r])<e?t=r+1:n=r}return t}function Vh(e){(!se.length||!se.includes(e,qi&&e.allowRecurse?on+1:on))&&(e.id==null?se.push(e):se.splice(bA(e.id),0,e),p_())}function p_(){!qi&&!Eu&&(Eu=!0,xh=f_.then(g_))}function RA(e){const t=se.indexOf(e);t>on&&se.splice(t,1)}function SA(e){tt(e)?Ts.push(...e):(!wn||!wn.includes(e,e.allowRecurse?Ir+1:Ir))&&Ts.push(e),p_()}function Wf(e,t=qi?on+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function m_(e){if(Ts.length){const t=[...new Set(Ts)];if(Ts.length=0,wn){wn.push(...t);return}for(wn=t,wn.sort((n,r)=>Hi(n)-Hi(r)),Ir=0;Ir<wn.length;Ir++)wn[Ir]();wn=null,Ir=0}}const Hi=e=>e.id==null?1/0:e.id,CA=(e,t)=>{const n=Hi(e)-Hi(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function g_(e){Eu=!1,qi=!0,se.sort(CA);const t=ze;try{for(on=0;on<se.length;on++){const n=se[on];n&&n.active!==!1&&rr(n,null,14)}}finally{on=0,se.length=0,m_(),qi=!1,xh=null,(se.length||Ts.length)&&g_()}}function PA(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Rt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Rt;d&&(s=n.map(f=>Ht(f)?f.trim():f)),h&&(s=n.map(xw))}let a,c=r[a=Il(t)]||r[a=Il(_n(t))];!c&&i&&(c=r[a=Il(Xs(t))]),c&&Ge(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ge(l,e,6,s)}}function __(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!at(e)){const c=l=>{const u=__(l,t,!0);u&&(a=!0,zt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(Ot(e)&&r.set(e,null),null):(tt(i)?i.forEach(c=>o[c]=null):zt(o,i),Ot(e)&&r.set(e,o),o)}function Ac(e,t){return!e||!gc(t)?!1:(t=t.slice(2).replace(/Once$/,""),mt(e,t[0].toLowerCase()+t.slice(1))||mt(e,Xs(t))||mt(e,t))}let Pe=null,y_=null;function Ua(e){const t=Pe;return Pe=e,y_=e&&e.type.__scopeId||null,t}function v_(e,t=Pe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&np(-1);const i=Ua(t);let o;try{o=e(...s)}finally{Ua(i),r._d&&np(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rl(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=e;let v,A;const R=Ua(e);try{if(n.shapeFlag&4){const w=s||r;v=sn(u.call(w,w,h,i,f,d,g)),A=c}else{const w=t;v=sn(w.length>1?w(i,{attrs:c,slots:a,emit:l}):w(i,null)),A=t.props?c:OA(c)}}catch(w){Pi.length=0,wc(w,e,1),v=Zt(Fr)}let N=v;if(A&&y!==!1){const w=Object.keys(A),{shapeFlag:U}=N;w.length&&U&7&&(o&&w.some(Eh)&&(A=NA(A,o)),N=Os(N,A))}return n.dirs&&(N=Os(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),v=N,Ua(R),v}const OA=e=>{let t;for(const n in e)(n==="class"||n==="style"||gc(n))&&((t||(t={}))[n]=e[n]);return t},NA=(e,t)=>{const n={};for(const r in e)(!Eh(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function kA(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Kf(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ac(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Kf(r,o,l):!0:!!o;return!1}function Kf(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Ac(n,i))return!0}return!1}function DA({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const xA=e=>e.__isSuspense;function LA(e,t){t&&t.pendingBranch?tt(e)?t.effects.push(...e):t.effects.push(e):SA(e)}const Qo={};function Si(e,t,n){return E_(e,t,n)}function E_(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Rt){var a;const c=Qg()===((a=Kt)==null?void 0:a.scope)?Kt:null;let l,u=!1,h=!1;if(Lt(e)?(l=()=>e.value,u=Ma(e)):nr(e)?(l=()=>e,r=!0):tt(e)?(h=!0,u=e.some(w=>nr(w)||Ma(w)),l=()=>e.map(w=>{if(Lt(w))return w.value;if(nr(w))return Rr(w);if(at(w))return rr(w,c,2)})):at(e)?t?l=()=>rr(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ge(e,c,3,[f])}:l=ze,t&&r){const w=l;l=()=>Rr(w())}let d,f=w=>{d=R.onStop=()=>{rr(w,c,4)}},g;if(zi)if(f=ze,t?n&&Ge(t,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const w=OI();g=w.__watcherHandles||(w.__watcherHandles=[])}else return ze;let y=h?new Array(e.length).fill(Qo):Qo;const v=()=>{if(R.active)if(t){const w=R.run();(r||u||(h?w.some((U,$)=>Bi(U,y[$])):Bi(w,y)))&&(d&&d(),Ge(t,c,3,[w,y===Qo?void 0:h&&y[0]===Qo?[]:y,f]),y=w)}else R.run()};v.allowRecurse=!!t;let A;s==="sync"?A=v:s==="post"?A=()=>ye(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),A=()=>Vh(v));const R=new Sh(l,A);t?n?v():y=R.run():s==="post"?ye(R.run.bind(R),c&&c.suspense):R.run();const N=()=>{R.stop(),c&&c.scope&&Th(c.scope.effects,R)};return g&&g.push(N),N}function VA(e,t,n){const r=this.proxy,s=Ht(e)?e.includes(".")?T_(r,e):()=>r[e]:e.bind(r,r);let i;at(t)?i=t:(i=t.handler,n=t);const o=Kt;Ns(this);const a=E_(s,i.bind(r),n);return o?Ns(o):xr(),a}function T_(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Rr(e,t){if(!Ot(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Lt(e))Rr(e.value,t);else if(tt(e))for(let n=0;n<e.length;n++)Rr(e[n],t);else if(Bg(e)||Es(e))e.forEach(n=>{Rr(n,t)});else if(Hg(e))for(const n in e)Rr(e[n],t);return e}function KU(e,t){const n=Pe;if(n===null)return e;const r=Cc(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=Rt]=t[i];o&&(at(o)&&(o={mounted:o,updated:o}),o.deep&&Rr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Tr(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Js(),Ge(c,n,8,[e.el,a,e,t]),Zs())}}function w_(e,t){return at(e)?(()=>zt({name:e.name},t,{setup:e}))():e}const Ea=e=>!!e.type.__asyncLoader,A_=e=>e.type.__isKeepAlive;function MA(e,t){I_(e,"a",t)}function UA(e,t){I_(e,"da",t)}function I_(e,t,n=Kt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ic(t,r,n),n){let s=n.parent;for(;s&&s.parent;)A_(s.parent.vnode)&&FA(r,t,n,s),s=s.parent}}function FA(e,t,n,r){const s=Ic(t,e,r,!0);R_(()=>{Th(r[t],s)},n)}function Ic(e,t,n=Kt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Js(),Ns(n);const a=Ge(t,n,e,o);return xr(),Zs(),a});return r?s.unshift(i):s.push(i),i}}const Fn=e=>(t,n=Kt)=>(!zi||e==="sp")&&Ic(e,(...r)=>t(...r),n),$A=Fn("bm"),b_=Fn("m"),BA=Fn("bu"),jA=Fn("u"),qA=Fn("bum"),R_=Fn("um"),HA=Fn("sp"),WA=Fn("rtg"),KA=Fn("rtc");function zA(e,t=Kt){Ic("ec",e,t)}const S_="components";function C_(e,t){return QA(S_,e,!0,t)||e}const GA=Symbol.for("v-ndc");function QA(e,t,n=!0,r=!1){const s=Pe||Kt;if(s){const i=s.type;if(e===S_){const a=SI(i,!1);if(a&&(a===t||a===_n(t)||a===vc(_n(t))))return i}const o=zf(s[e]||i[e],t)||zf(s.appContext[e],t);return!o&&r?i:o}}function zf(e,t){return e&&(e[t]||e[_n(t)]||e[vc(_n(t))])}function YA(e,t,n,r){let s;const i=n&&n[r];if(tt(e)||Ht(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(Ot(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Tu=e=>e?F_(e)?Cc(e)||e.proxy:Tu(e.parent):null,Ci=zt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tu(e.parent),$root:e=>Tu(e.root),$emit:e=>e.emit,$options:e=>Mh(e),$forceUpdate:e=>e.f||(e.f=()=>Vh(e.update)),$nextTick:e=>e.n||(e.n=Lh.bind(e.proxy)),$watch:e=>VA.bind(e)}),Sl=(e,t)=>e!==Rt&&!e.__isScriptSetup&&mt(e,t),XA={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Sl(r,t))return o[t]=1,r[t];if(s!==Rt&&mt(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&mt(l,t))return o[t]=3,i[t];if(n!==Rt&&mt(n,t))return o[t]=4,n[t];wu&&(o[t]=0)}}const u=Ci[t];let h,d;if(u)return t==="$attrs"&&Ae(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==Rt&&mt(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,mt(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Sl(s,t)?(s[t]=n,!0):r!==Rt&&mt(r,t)?(r[t]=n,!0):mt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==Rt&&mt(e,o)||Sl(t,o)||(a=i[0])&&mt(a,o)||mt(r,o)||mt(Ci,o)||mt(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:mt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Gf(e){return tt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wu=!0;function JA(e){const t=Mh(e),n=e.proxy,r=e.ctx;wu=!1,t.beforeCreate&&Qf(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:v,beforeDestroy:A,beforeUnmount:R,destroyed:N,unmounted:w,render:U,renderTracked:$,renderTriggered:Y,errorCaptured:q,serverPrefetch:j,expose:J,inheritAttrs:pt,components:bt,directives:At,filters:he}=t;if(l&&ZA(l,r,null),o)for(const ct in o){const ht=o[ct];at(ht)&&(r[ct]=ht.bind(n))}if(s){const ct=s.call(n,n);Ot(ct)&&(e.data=po(ct))}if(wu=!0,i)for(const ct in i){const ht=i[ct],Yt=at(ht)?ht.bind(n,n):at(ht.get)?ht.get.bind(n,n):ze,Ie=!at(ht)&&at(ht.set)?ht.set.bind(n):ze,_e=Me({get:Yt,set:Ie});Object.defineProperty(r,ct,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Mt=>_e.value=Mt})}if(a)for(const ct in a)P_(a[ct],r,n,ct);if(c){const ct=at(c)?c.call(n):c;Reflect.ownKeys(ct).forEach(ht=>{Ta(ht,ct[ht])})}u&&Qf(u,e,"c");function et(ct,ht){tt(ht)?ht.forEach(Yt=>ct(Yt.bind(n))):ht&&ct(ht.bind(n))}if(et($A,h),et(b_,d),et(BA,f),et(jA,g),et(MA,y),et(UA,v),et(zA,q),et(KA,$),et(WA,Y),et(qA,R),et(R_,w),et(HA,j),tt(J))if(J.length){const ct=e.exposed||(e.exposed={});J.forEach(ht=>{Object.defineProperty(ct,ht,{get:()=>n[ht],set:Yt=>n[ht]=Yt})})}else e.exposed||(e.exposed={});U&&e.render===ze&&(e.render=U),pt!=null&&(e.inheritAttrs=pt),bt&&(e.components=bt),At&&(e.directives=At)}function ZA(e,t,n=ze){tt(e)&&(e=Au(e));for(const r in e){const s=e[r];let i;Ot(s)?"default"in s?i=Qe(s.from||r,s.default,!0):i=Qe(s.from||r):i=Qe(s),Lt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Qf(e,t,n){Ge(tt(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function P_(e,t,n,r){const s=r.includes(".")?T_(n,r):()=>n[r];if(Ht(e)){const i=t[e];at(i)&&Si(s,i)}else if(at(e))Si(s,e.bind(n));else if(Ot(e))if(tt(e))e.forEach(i=>P_(i,t,n,r));else{const i=at(e.handler)?e.handler.bind(n):t[e.handler];at(i)&&Si(s,i,e)}}function Mh(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Fa(c,l,o,!0)),Fa(c,t,o)),Ot(t)&&i.set(t,c),c}function Fa(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Fa(e,i,n,!0),s&&s.forEach(o=>Fa(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=tI[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const tI={data:Yf,props:Xf,emits:Xf,methods:Ti,computed:Ti,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Ti,directives:Ti,watch:nI,provide:Yf,inject:eI};function Yf(e,t){return t?e?function(){return zt(at(e)?e.call(this,this):e,at(t)?t.call(this,this):t)}:t:e}function eI(e,t){return Ti(Au(e),Au(t))}function Au(e){if(tt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ti(e,t){return e?zt(Object.create(null),e,t):t}function Xf(e,t){return e?tt(e)&&tt(t)?[...new Set([...e,...t])]:zt(Object.create(null),Gf(e),Gf(t??{})):t}function nI(e,t){if(!e)return t;if(!t)return e;const n=zt(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function O_(){return{app:null,config:{isNativeTag:Cw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rI=0;function sI(e,t){return function(r,s=null){at(r)||(r=zt({},r)),s!=null&&!Ot(s)&&(s=null);const i=O_(),o=new Set;let a=!1;const c=i.app={_uid:rI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:NI,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&at(l.install)?(o.add(l),l.install(c,...u)):at(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Zt(r,s);return d.appContext=i,u&&t?t(d,l):e(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Cc(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Wi=c;try{return l()}finally{Wi=null}}};return c}}let Wi=null;function Ta(e,t){if(Kt){let n=Kt.provides;const r=Kt.parent&&Kt.parent.provides;r===n&&(n=Kt.provides=Object.create(r)),n[e]=t}}function Qe(e,t,n=!1){const r=Kt||Pe;if(r||Wi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Wi._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&at(t)?t.call(r&&r.proxy):t}}function iI(){return!!(Kt||Pe||Wi)}function oI(e,t,n,r=!1){const s={},i={};La(i,Rc,1),e.propsDefaults=Object.create(null),N_(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:o_(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function aI(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=gt(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ac(e.emitsOptions,d))continue;const f=t[d];if(c)if(mt(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const g=_n(d);s[g]=Iu(c,a,g,f,e,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{N_(e,t,s,i)&&(l=!0);let u;for(const h in a)(!t||!mt(t,h)&&((u=Xs(h))===h||!mt(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Iu(c,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!mt(t,h))&&(delete i[h],l=!0)}l&&On(e,"set","$attrs")}function N_(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(va(c))continue;const l=t[c];let u;s&&mt(s,u=_n(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ac(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=gt(n),l=a||Rt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Iu(s,c,h,l[h],e,!mt(l,h))}}return o}function Iu(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=mt(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&at(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ns(s),r=l[n]=c.call(null,t),xr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xs(n))&&(r=!0))}return r}function k_(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!at(e)){const u=h=>{c=!0;const[d,f]=k_(h,t,!0);zt(o,d),f&&a.push(...f)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return Ot(e)&&r.set(e,vs),vs;if(tt(i))for(let u=0;u<i.length;u++){const h=_n(i[u]);Jf(h)&&(o[h]=Rt)}else if(i)for(const u in i){const h=_n(u);if(Jf(h)){const d=i[u],f=o[h]=tt(d)||at(d)?{type:d}:zt({},d);if(f){const g=ep(Boolean,f.type),y=ep(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||mt(f,"default"))&&a.push(h)}}}const l=[o,a];return Ot(e)&&r.set(e,l),l}function Jf(e){return e[0]!=="$"}function Zf(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function tp(e,t){return Zf(e)===Zf(t)}function ep(e,t){return tt(t)?t.findIndex(n=>tp(n,e)):at(t)&&tp(t,e)?0:-1}const D_=e=>e[0]==="_"||e==="$stable",Uh=e=>tt(e)?e.map(sn):[sn(e)],cI=(e,t,n)=>{if(t._n)return t;const r=v_((...s)=>Uh(t(...s)),n);return r._c=!1,r},x_=(e,t,n)=>{const r=e._ctx;for(const s in e){if(D_(s))continue;const i=e[s];if(at(i))t[s]=cI(s,i,r);else if(i!=null){const o=Uh(i);t[s]=()=>o}}},L_=(e,t)=>{const n=Uh(t);e.slots.default=()=>n},lI=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=gt(t),La(t,"_",n)):x_(t,e.slots={})}else e.slots={},t&&L_(e,t);La(e.slots,Rc,1)},uI=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=Rt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(zt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,x_(t,s)),o=t}else t&&(L_(e,t),o={default:1});if(i)for(const a in s)!D_(a)&&!(a in o)&&delete s[a]};function bu(e,t,n,r,s=!1){if(tt(e)){e.forEach((d,f)=>bu(d,t&&(tt(t)?t[f]:t),n,r,s));return}if(Ea(r)&&!s)return;const i=r.shapeFlag&4?Cc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===Rt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ht(l)?(u[l]=null,mt(h,l)&&(h[l]=null)):Lt(l)&&(l.value=null)),at(c))rr(c,a,12,[o,u]);else{const d=Ht(c),f=Lt(c);if(d||f){const g=()=>{if(e.f){const y=d?mt(h,c)?h[c]:u[c]:c.value;s?tt(y)&&Th(y,i):tt(y)?y.includes(i)||y.push(i):d?(u[c]=[i],mt(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else d?(u[c]=o,mt(h,c)&&(h[c]=o)):f&&(c.value=o,e.k&&(u[e.k]=o))};o?(g.id=-1,ye(g,n)):g()}}}const ye=LA;function hI(e){return dI(e)}function dI(e,t){const n=gu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=ze,insertStaticContent:g}=e,y=(p,m,_,E=null,b=null,S=null,F=!1,k=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!di(p,m)&&(E=I(p),Mt(p,b,S,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:P,ref:z,shapeFlag:B}=m;switch(P){case bc:v(p,m,_,E);break;case Fr:A(p,m,_,E);break;case wa:p==null&&R(m,_,E,F);break;case rn:bt(p,m,_,E,b,S,F,k,D);break;default:B&1?U(p,m,_,E,b,S,F,k,D):B&6?At(p,m,_,E,b,S,F,k,D):(B&64||B&128)&&P.process(p,m,_,E,b,S,F,k,D,x)}z!=null&&b&&bu(z,p&&p.ref,S,m||p,!m)},v=(p,m,_,E)=>{if(p==null)r(m.el=a(m.children),_,E);else{const b=m.el=p.el;m.children!==p.children&&l(b,m.children)}},A=(p,m,_,E)=>{p==null?r(m.el=c(m.children||""),_,E):m.el=p.el},R=(p,m,_,E)=>{[p.el,p.anchor]=g(p.children,m,_,E,p.el,p.anchor)},N=({el:p,anchor:m},_,E)=>{let b;for(;p&&p!==m;)b=d(p),r(p,_,E),p=b;r(m,_,E)},w=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),s(p),p=_;s(m)},U=(p,m,_,E,b,S,F,k,D)=>{F=F||m.type==="svg",p==null?$(m,_,E,b,S,F,k,D):j(p,m,b,S,F,k,D)},$=(p,m,_,E,b,S,F,k)=>{let D,P;const{type:z,props:B,shapeFlag:K,transition:X,dirs:lt}=p;if(D=p.el=o(p.type,S,B&&B.is,B),K&8?u(D,p.children):K&16&&q(p.children,D,null,E,b,S&&z!=="foreignObject",F,k),lt&&Tr(p,null,E,"created"),Y(D,p,p.scopeId,F,E),B){for(const yt in B)yt!=="value"&&!va(yt)&&i(D,yt,null,B[yt],S,p.children,E,b,Dt);"value"in B&&i(D,"value",null,B.value),(P=B.onVnodeBeforeMount)&&nn(P,E,p)}lt&&Tr(p,null,E,"beforeMount");const Et=(!b||b&&!b.pendingBranch)&&X&&!X.persisted;Et&&X.beforeEnter(D),r(D,m,_),((P=B&&B.onVnodeMounted)||Et||lt)&&ye(()=>{P&&nn(P,E,p),Et&&X.enter(D),lt&&Tr(p,null,E,"mounted")},b)},Y=(p,m,_,E,b)=>{if(_&&f(p,_),E)for(let S=0;S<E.length;S++)f(p,E[S]);if(b){let S=b.subTree;if(m===S){const F=b.vnode;Y(p,F,F.scopeId,F.slotScopeIds,b.parent)}}},q=(p,m,_,E,b,S,F,k,D=0)=>{for(let P=D;P<p.length;P++){const z=p[P]=k?zn(p[P]):sn(p[P]);y(null,z,m,_,E,b,S,F,k)}},j=(p,m,_,E,b,S,F)=>{const k=m.el=p.el;let{patchFlag:D,dynamicChildren:P,dirs:z}=m;D|=p.patchFlag&16;const B=p.props||Rt,K=m.props||Rt;let X;_&&wr(_,!1),(X=K.onVnodeBeforeUpdate)&&nn(X,_,m,p),z&&Tr(m,p,_,"beforeUpdate"),_&&wr(_,!0);const lt=b&&m.type!=="foreignObject";if(P?J(p.dynamicChildren,P,k,_,E,lt,S):F||ht(p,m,k,null,_,E,lt,S,!1),D>0){if(D&16)pt(k,m,B,K,_,E,b);else if(D&2&&B.class!==K.class&&i(k,"class",null,K.class,b),D&4&&i(k,"style",B.style,K.style,b),D&8){const Et=m.dynamicProps;for(let yt=0;yt<Et.length;yt++){const Ut=Et[yt],He=B[Ut],ns=K[Ut];(ns!==He||Ut==="value")&&i(k,Ut,He,ns,b,p.children,_,E,Dt)}}D&1&&p.children!==m.children&&u(k,m.children)}else!F&&P==null&&pt(k,m,B,K,_,E,b);((X=K.onVnodeUpdated)||z)&&ye(()=>{X&&nn(X,_,m,p),z&&Tr(m,p,_,"updated")},E)},J=(p,m,_,E,b,S,F)=>{for(let k=0;k<m.length;k++){const D=p[k],P=m[k],z=D.el&&(D.type===rn||!di(D,P)||D.shapeFlag&70)?h(D.el):_;y(D,P,z,null,E,b,S,F,!0)}},pt=(p,m,_,E,b,S,F)=>{if(_!==E){if(_!==Rt)for(const k in _)!va(k)&&!(k in E)&&i(p,k,_[k],null,F,m.children,b,S,Dt);for(const k in E){if(va(k))continue;const D=E[k],P=_[k];D!==P&&k!=="value"&&i(p,k,P,D,F,m.children,b,S,Dt)}"value"in E&&i(p,"value",_.value,E.value)}},bt=(p,m,_,E,b,S,F,k,D)=>{const P=m.el=p?p.el:a(""),z=m.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:X}=m;X&&(k=k?k.concat(X):X),p==null?(r(P,_,E),r(z,_,E),q(m.children,_,z,b,S,F,k,D)):B>0&&B&64&&K&&p.dynamicChildren?(J(p.dynamicChildren,K,_,b,S,F,k),(m.key!=null||b&&m===b.subTree)&&V_(p,m,!0)):ht(p,m,_,z,b,S,F,k,D)},At=(p,m,_,E,b,S,F,k,D)=>{m.slotScopeIds=k,p==null?m.shapeFlag&512?b.ctx.activate(m,_,E,F,D):he(m,_,E,b,S,F,D):Vt(p,m,D)},he=(p,m,_,E,b,S,F)=>{const k=p.component=wI(p,E,b);if(A_(p)&&(k.ctx.renderer=x),AI(k),k.asyncDep){if(b&&b.registerDep(k,et),!p.el){const D=k.subTree=Zt(Fr);A(null,D,m,_)}return}et(k,p,m,_,b,S,F)},Vt=(p,m,_)=>{const E=m.component=p.component;if(kA(p,m,_))if(E.asyncDep&&!E.asyncResolved){ct(E,m,_);return}else E.next=m,RA(E.update),E.update();else m.el=p.el,E.vnode=m},et=(p,m,_,E,b,S,F)=>{const k=()=>{if(p.isMounted){let{next:z,bu:B,u:K,parent:X,vnode:lt}=p,Et=z,yt;wr(p,!1),z?(z.el=lt.el,ct(p,z,F)):z=lt,B&&bl(B),(yt=z.props&&z.props.onVnodeBeforeUpdate)&&nn(yt,X,z,lt),wr(p,!0);const Ut=Rl(p),He=p.subTree;p.subTree=Ut,y(He,Ut,h(He.el),I(He),p,b,S),z.el=Ut.el,Et===null&&DA(p,Ut.el),K&&ye(K,b),(yt=z.props&&z.props.onVnodeUpdated)&&ye(()=>nn(yt,X,z,lt),b)}else{let z;const{el:B,props:K}=m,{bm:X,m:lt,parent:Et}=p,yt=Ea(m);if(wr(p,!1),X&&bl(X),!yt&&(z=K&&K.onVnodeBeforeMount)&&nn(z,Et,m),wr(p,!0),B&&dt){const Ut=()=>{p.subTree=Rl(p),dt(B,p.subTree,p,b,null)};yt?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ut()):Ut()}else{const Ut=p.subTree=Rl(p);y(null,Ut,_,E,p,b,S),m.el=Ut.el}if(lt&&ye(lt,b),!yt&&(z=K&&K.onVnodeMounted)){const Ut=m;ye(()=>nn(z,Et,Ut),b)}(m.shapeFlag&256||Et&&Ea(Et.vnode)&&Et.vnode.shapeFlag&256)&&p.a&&ye(p.a,b),p.isMounted=!0,m=_=E=null}},D=p.effect=new Sh(k,()=>Vh(P),p.scope),P=p.update=()=>D.run();P.id=p.uid,wr(p,!0),P()},ct=(p,m,_)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,aI(p,m.props,E,_),uI(p,m.children,_),Js(),Wf(),Zs()},ht=(p,m,_,E,b,S,F,k,D=!1)=>{const P=p&&p.children,z=p?p.shapeFlag:0,B=m.children,{patchFlag:K,shapeFlag:X}=m;if(K>0){if(K&128){Ie(P,B,_,E,b,S,F,k,D);return}else if(K&256){Yt(P,B,_,E,b,S,F,k,D);return}}X&8?(z&16&&Dt(P,b,S),B!==P&&u(_,B)):z&16?X&16?Ie(P,B,_,E,b,S,F,k,D):Dt(P,b,S,!0):(z&8&&u(_,""),X&16&&q(B,_,E,b,S,F,k,D))},Yt=(p,m,_,E,b,S,F,k,D)=>{p=p||vs,m=m||vs;const P=p.length,z=m.length,B=Math.min(P,z);let K;for(K=0;K<B;K++){const X=m[K]=D?zn(m[K]):sn(m[K]);y(p[K],X,_,null,b,S,F,k,D)}P>z?Dt(p,b,S,!0,!1,B):q(m,_,E,b,S,F,k,D,B)},Ie=(p,m,_,E,b,S,F,k,D)=>{let P=0;const z=m.length;let B=p.length-1,K=z-1;for(;P<=B&&P<=K;){const X=p[P],lt=m[P]=D?zn(m[P]):sn(m[P]);if(di(X,lt))y(X,lt,_,null,b,S,F,k,D);else break;P++}for(;P<=B&&P<=K;){const X=p[B],lt=m[K]=D?zn(m[K]):sn(m[K]);if(di(X,lt))y(X,lt,_,null,b,S,F,k,D);else break;B--,K--}if(P>B){if(P<=K){const X=K+1,lt=X<z?m[X].el:E;for(;P<=K;)y(null,m[P]=D?zn(m[P]):sn(m[P]),_,lt,b,S,F,k,D),P++}}else if(P>K)for(;P<=B;)Mt(p[P],b,S,!0),P++;else{const X=P,lt=P,Et=new Map;for(P=lt;P<=K;P++){const Se=m[P]=D?zn(m[P]):sn(m[P]);Se.key!=null&&Et.set(Se.key,P)}let yt,Ut=0;const He=K-lt+1;let ns=!1,xf=0;const hi=new Array(He);for(P=0;P<He;P++)hi[P]=0;for(P=X;P<=B;P++){const Se=p[P];if(Ut>=He){Mt(Se,b,S,!0);continue}let en;if(Se.key!=null)en=Et.get(Se.key);else for(yt=lt;yt<=K;yt++)if(hi[yt-lt]===0&&di(Se,m[yt])){en=yt;break}en===void 0?Mt(Se,b,S,!0):(hi[en-lt]=P+1,en>=xf?xf=en:ns=!0,y(Se,m[en],_,null,b,S,F,k,D),Ut++)}const Lf=ns?fI(hi):vs;for(yt=Lf.length-1,P=He-1;P>=0;P--){const Se=lt+P,en=m[Se],Vf=Se+1<z?m[Se+1].el:E;hi[P]===0?y(null,en,_,Vf,b,S,F,k,D):ns&&(yt<0||P!==Lf[yt]?_e(en,_,Vf,2):yt--)}}},_e=(p,m,_,E,b=null)=>{const{el:S,type:F,transition:k,children:D,shapeFlag:P}=p;if(P&6){_e(p.component.subTree,m,_,E);return}if(P&128){p.suspense.move(m,_,E);return}if(P&64){F.move(p,m,_,x);return}if(F===rn){r(S,m,_);for(let B=0;B<D.length;B++)_e(D[B],m,_,E);r(p.anchor,m,_);return}if(F===wa){N(p,m,_);return}if(E!==2&&P&1&&k)if(E===0)k.beforeEnter(S),r(S,m,_),ye(()=>k.enter(S),b);else{const{leave:B,delayLeave:K,afterLeave:X}=k,lt=()=>r(S,m,_),Et=()=>{B(S,()=>{lt(),X&&X()})};K?K(S,lt,Et):Et()}else r(S,m,_)},Mt=(p,m,_,E=!1,b=!1)=>{const{type:S,props:F,ref:k,children:D,dynamicChildren:P,shapeFlag:z,patchFlag:B,dirs:K}=p;if(k!=null&&bu(k,null,_,p,!0),z&256){m.ctx.deactivate(p);return}const X=z&1&&K,lt=!Ea(p);let Et;if(lt&&(Et=F&&F.onVnodeBeforeUnmount)&&nn(Et,m,p),z&6)Re(p.component,_,E);else{if(z&128){p.suspense.unmount(_,E);return}X&&Tr(p,null,m,"beforeUnmount"),z&64?p.type.remove(p,m,_,b,x,E):P&&(S!==rn||B>0&&B&64)?Dt(P,m,_,!1,!0):(S===rn&&B&384||!b&&z&16)&&Dt(D,m,_),E&&qe(p)}(lt&&(Et=F&&F.onVnodeUnmounted)||X)&&ye(()=>{Et&&nn(Et,m,p),X&&Tr(p,null,m,"unmounted")},_)},qe=p=>{const{type:m,el:_,anchor:E,transition:b}=p;if(m===rn){be(_,E);return}if(m===wa){w(p);return}const S=()=>{s(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:F,delayLeave:k}=b,D=()=>F(_,S);k?k(p.el,S,D):D()}else S()},be=(p,m)=>{let _;for(;p!==m;)_=d(p),s(p),p=_;s(m)},Re=(p,m,_)=>{const{bum:E,scope:b,update:S,subTree:F,um:k}=p;E&&bl(E),b.stop(),S&&(S.active=!1,Mt(F,p,m,_)),k&&ye(k,m),ye(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Dt=(p,m,_,E=!1,b=!1,S=0)=>{for(let F=S;F<p.length;F++)Mt(p[F],m,_,E,b)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),M=(p,m,_)=>{p==null?m._vnode&&Mt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,_),Wf(),m_(),m._vnode=p},x={p:y,um:Mt,m:_e,r:qe,mt:he,mc:q,pc:ht,pbc:J,n:I,o:e};let W,dt;return t&&([W,dt]=t(x)),{render:M,hydrate:W,createApp:sI(M,W)}}function wr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function V_(e,t,n=!1){const r=e.children,s=t.children;if(tt(r)&&tt(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=zn(s[i]),a.el=o.el),n||V_(o,a)),a.type===bc&&(a.el=o.el)}}function fI(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const pI=e=>e.__isTeleport,rn=Symbol.for("v-fgt"),bc=Symbol.for("v-txt"),Fr=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),Pi=[];let Ke=null;function Dr(e=!1){Pi.push(Ke=e?null:[])}function mI(){Pi.pop(),Ke=Pi[Pi.length-1]||null}let Ki=1;function np(e){Ki+=e}function M_(e){return e.dynamicChildren=Ki>0?Ke||vs:null,mI(),Ki>0&&Ke&&Ke.push(e),e}function $a(e,t,n,r,s,i){return M_(it(e,t,n,r,s,i,!0))}function Fh(e,t,n,r,s){return M_(Zt(e,t,n,r,s,!0))}function Ru(e){return e?e.__v_isVNode===!0:!1}function di(e,t){return e.type===t.type&&e.key===t.key}const Rc="__vInternal",U_=({key:e})=>e??null,Aa=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ht(e)||Lt(e)||at(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function it(e,t=null,n=null,r=0,s=null,i=e===rn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&U_(t),ref:t&&Aa(t),scopeId:y_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pe};return a?($h(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ht(n)?8:16),Ki>0&&!o&&Ke&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ke.push(c),c}const Zt=gI;function gI(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===GA)&&(e=Fr),Ru(e)){const a=Os(e,t,!0);return n&&$h(a,n),Ki>0&&!i&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(e)]=a:Ke.push(a)),a.patchFlag|=-2,a}if(CI(e)&&(e=e.__vccOpts),t){t=_I(t);let{class:a,style:c}=t;a&&!Ht(a)&&(t.class=bh(a)),Ot(c)&&(c_(c)&&!tt(c)&&(c=zt({},c)),t.style=Ih(c))}const o=Ht(e)?1:xA(e)?128:pI(e)?64:Ot(e)?4:at(e)?2:0;return it(e,t,n,r,s,o,i,!0)}function _I(e){return e?c_(e)||Rc in e?zt({},e):e:null}function Os(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?vI(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&U_(a),ref:t&&t.ref?n&&s?tt(s)?s.concat(Aa(t)):[s,Aa(t)]:Aa(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==rn?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Os(e.ssContent),ssFallback:e.ssFallback&&Os(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function yI(e=" ",t=0){return Zt(bc,null,e,t)}function Sc(e,t){const n=Zt(wa,null,e);return n.staticCount=t,n}function zU(e="",t=!1){return t?(Dr(),Fh(Fr,null,e)):Zt(Fr,null,e)}function sn(e){return e==null||typeof e=="boolean"?Zt(Fr):tt(e)?Zt(rn,null,e.slice()):typeof e=="object"?zn(e):Zt(bc,null,String(e))}function zn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Os(e)}function $h(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(tt(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),$h(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Rc in t)?t._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else at(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[yI(t)]):n=8);e.children=t,e.shapeFlag|=n}function vI(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=bh([t.class,r.class]));else if(s==="style")t.style=Ih([t.style,r.style]);else if(gc(s)){const i=t[s],o=r[s];o&&i!==o&&!(tt(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function nn(e,t,n,r=null){Ge(e,t,7,[n,r])}const EI=O_();let TI=0;function wI(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||EI,i={uid:TI++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:k_(r,s),emitsOptions:__(r,s),emit:null,emitted:null,propsDefaults:Rt,inheritAttrs:r.inheritAttrs,ctx:Rt,data:Rt,props:Rt,attrs:Rt,slots:Rt,refs:Rt,setupState:Rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=PA.bind(null,i),e.ce&&e.ce(i),i}let Kt=null,Bh,rs,rp="__VUE_INSTANCE_SETTERS__";(rs=gu()[rp])||(rs=gu()[rp]=[]),rs.push(e=>Kt=e),Bh=e=>{rs.length>1?rs.forEach(t=>t(e)):rs[0](e)};const Ns=e=>{Bh(e),e.scope.on()},xr=()=>{Kt&&Kt.scope.off(),Bh(null)};function F_(e){return e.vnode.shapeFlag&4}let zi=!1;function AI(e,t=!1){zi=t;const{props:n,children:r}=e.vnode,s=F_(e);oI(e,n,s,t),lI(e,r);const i=s?II(e,t):void 0;return zi=!1,i}function II(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Tc(new Proxy(e.ctx,XA));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?RI(e):null;Ns(e),Js();const i=rr(r,e,0,[e.props,s]);if(Zs(),xr(),jg(i)){if(i.then(xr,xr),t)return i.then(o=>{sp(e,o,t)}).catch(o=>{wc(o,e,0)});e.asyncDep=i}else sp(e,i,t)}else $_(e,t)}function sp(e,t,n){at(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ot(t)&&(e.setupState=d_(t)),$_(e,n)}let ip;function $_(e,t,n){const r=e.type;if(!e.render){if(!t&&ip&&!r.render){const s=r.template||Mh(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=zt(zt({isCustomElement:i,delimiters:a},o),c);r.render=ip(s,l)}}e.render=r.render||ze}Ns(e),Js(),JA(e),Zs(),xr()}function bI(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}}))}function RI(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return bI(e)},slots:e.slots,emit:e.emit,expose:t}}function Cc(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(d_(Tc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ci)return Ci[n](e)},has(t,n){return n in t||n in Ci}}))}function SI(e,t=!0){return at(e)?e.displayName||e.name:e.name||t&&e.__name}function CI(e){return at(e)&&"__vccOpts"in e}const Me=(e,t)=>AA(e,t,zi);function B_(e,t,n){const r=arguments.length;return r===2?Ot(t)&&!tt(t)?Ru(t)?Zt(e,null,[t]):Zt(e,t):Zt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ru(n)&&(n=[n]),Zt(e,t,n))}const PI=Symbol.for("v-scx"),OI=()=>Qe(PI),NI="3.3.4",kI="http://www.w3.org/2000/svg",br=typeof document<"u"?document:null,op=br&&br.createElement("template"),DI={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?br.createElementNS(kI,e):br.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>br.createTextNode(e),createComment:e=>br.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>br.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{op.innerHTML=r?`<svg>${e}</svg>`:e;const a=op.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xI(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function LI(e,t,n){const r=e.style,s=Ht(n);if(n&&!s){if(t&&!Ht(t))for(const i in t)n[i]==null&&Su(r,i,"");for(const i in n)Su(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ap=/\s*!important$/;function Su(e,t,n){if(tt(n))n.forEach(r=>Su(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=VI(e,t);ap.test(n)?e.setProperty(Xs(r),n.replace(ap,""),"important"):e[r]=n}}const cp=["Webkit","Moz","ms"],Cl={};function VI(e,t){const n=Cl[t];if(n)return n;let r=_n(t);if(r!=="filter"&&r in e)return Cl[t]=r;r=vc(r);for(let s=0;s<cp.length;s++){const i=cp[s]+r;if(i in e)return Cl[t]=i}return t}const lp="http://www.w3.org/1999/xlink";function MI(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(lp,t.slice(6,t.length)):e.setAttributeNS(lp,t,n);else{const i=$w(t);n==null||i&&!Wg(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function UI(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Wg(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function FI(e,t,n,r){e.addEventListener(t,n,r)}function $I(e,t,n,r){e.removeEventListener(t,n,r)}function BI(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=jI(t);if(r){const l=i[t]=WI(r,s);FI(e,a,l,c)}else o&&($I(e,a,o,c),i[t]=void 0)}}const up=/(?:Once|Passive|Capture)$/;function jI(e){let t;if(up.test(e)){t={};let r;for(;r=e.match(up);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xs(e.slice(2)),t]}let Pl=0;const qI=Promise.resolve(),HI=()=>Pl||(qI.then(()=>Pl=0),Pl=Date.now());function WI(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ge(KI(r,n.value),t,5,[r])};return n.value=e,n.attached=HI(),n}function KI(e,t){if(tt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const hp=/^on[a-z]/,zI=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?xI(e,r,s):t==="style"?LI(e,n,r):gc(t)?Eh(t)||BI(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):GI(e,t,r,s))?UI(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),MI(e,t,r,s))};function GI(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&hp.test(t)&&at(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||hp.test(t)&&Ht(n)?!1:t in e}const QI=["ctrl","shift","alt","meta"],YI={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>QI.some(n=>e[`${n}Key`]&&!t.includes(n))},GU=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const i=YI[t[s]];if(i&&i(n,t))return}return e(n,...r)},QU={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):fi(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),fi(e,!0),r.enter(e)):r.leave(e,()=>{fi(e,!1)}):fi(e,t))},beforeUnmount(e,{value:t}){fi(e,t)}};function fi(e,t){e.style.display=t?e._vod:"none"}const XI=zt({patchProp:zI},DI);let dp;function JI(){return dp||(dp=hI(XI))}const ZI=(...e)=>{const t=JI().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=tb(r);if(!s)return;const i=t._component;!at(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function tb(e){return Ht(e)?document.querySelector(e):e}var eb=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let j_;const Pc=e=>j_=e,q_=Symbol();function Cu(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Oi;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Oi||(Oi={}));function nb(){const e=Gg(!0),t=e.run(()=>Dh({}));let n=[],r=[];const s=Tc({install(i){Pc(s),s._a=i,i.provide(q_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!eb?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const H_=()=>{};function fp(e,t,n,r=H_){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Qg()&&jw(s),s}function ss(e,...t){e.slice().forEach(n=>{n(...t)})}const rb=e=>e();function Pu(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];Cu(s)&&Cu(r)&&e.hasOwnProperty(n)&&!Lt(r)&&!nr(r)?e[n]=Pu(s,r):e[n]=r}return e}const sb=Symbol();function ib(e){return!Cu(e)||!e.hasOwnProperty(sb)}const{assign:Kn}=Object;function ob(e){return!!(Lt(e)&&e.effect)}function ab(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=vA(n.state.value[e]);return Kn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Tc(Me(()=>{Pc(n);const f=n._s.get(e);return o[d].call(f,f)})),h),{}))}return c=W_(e,l,t,n,r,!0),c}function W_(e,t,n={},r,s,i){let o;const a=Kn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const g=r.state.value[e];!i&&!g&&(r.state.value[e]={}),Dh({});let y;function v(q){let j;l=u=!1,typeof q=="function"?(q(r.state.value[e]),j={type:Oi.patchFunction,storeId:e,events:f}):(Pu(r.state.value[e],q),j={type:Oi.patchObject,payload:q,storeId:e,events:f});const J=y=Symbol();Lh().then(()=>{y===J&&(l=!0)}),u=!0,ss(h,j,r.state.value[e])}const A=i?function(){const{state:j}=n,J=j?j():{};this.$patch(pt=>{Kn(pt,J)})}:H_;function R(){o.stop(),h=[],d=[],r._s.delete(e)}function N(q,j){return function(){Pc(r);const J=Array.from(arguments),pt=[],bt=[];function At(et){pt.push(et)}function he(et){bt.push(et)}ss(d,{args:J,name:q,store:U,after:At,onError:he});let Vt;try{Vt=j.apply(this&&this.$id===e?this:U,J)}catch(et){throw ss(bt,et),et}return Vt instanceof Promise?Vt.then(et=>(ss(pt,et),et)).catch(et=>(ss(bt,et),Promise.reject(et))):(ss(pt,Vt),Vt)}}const w={_p:r,$id:e,$onAction:fp.bind(null,d),$patch:v,$reset:A,$subscribe(q,j={}){const J=fp(h,q,j.detached,()=>pt()),pt=o.run(()=>Si(()=>r.state.value[e],bt=>{(j.flush==="sync"?u:l)&&q({storeId:e,type:Oi.direct,events:f},bt)},Kn({},c,j)));return J},$dispose:R},U=po(w);r._s.set(e,U);const $=r._a&&r._a.runWithContext||rb,Y=r._e.run(()=>(o=Gg(),$(()=>o.run(t))));for(const q in Y){const j=Y[q];if(Lt(j)&&!ob(j)||nr(j))i||(g&&ib(j)&&(Lt(j)?j.value=g[q]:Pu(j,g[q])),r.state.value[e][q]=j);else if(typeof j=="function"){const J=N(q,j);Y[q]=J,a.actions[q]=j}}return Kn(U,Y),Kn(gt(U),Y),Object.defineProperty(U,"$state",{get:()=>r.state.value[e],set:q=>{v(j=>{Kn(j,q)})}}),r._p.forEach(q=>{Kn(U,o.run(()=>q({store:U,app:r._a,pinia:r,options:a})))}),g&&i&&n.hydrate&&n.hydrate(U.$state,g),l=!0,u=!0,U}function cb(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(a,c){const l=iI();return a=a||(l?Qe(q_,null):null),a&&Pc(a),a=j_,a._s.has(r)||(i?W_(r,t,s,a):ab(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ls=typeof window<"u";function lb(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Tt=Object.assign;function Ol(e,t){const n={};for(const r in t){const s=t[r];n[r]=Xe(s)?s.map(e):e(s)}return n}const Ni=()=>{},Xe=Array.isArray,ub=/\/$/,hb=e=>e.replace(ub,"");function Nl(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=mb(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function db(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function pp(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fb(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ks(t.matched[r],n.matched[s])&&K_(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ks(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function K_(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!pb(e[n],t[n]))return!1;return!0}function pb(e,t){return Xe(e)?mp(e,t):Xe(t)?mp(t,e):e===t}function mp(e,t){return Xe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function mb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Gi;(function(e){e.pop="pop",e.push="push"})(Gi||(Gi={}));var ki;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ki||(ki={}));function gb(e){if(!e)if(ls){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hb(e)}const _b=/^[^#]+#/;function yb(e,t){return e.replace(_b,"#")+t}function vb(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Oc=()=>({left:window.pageXOffset,top:window.pageYOffset});function Eb(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=vb(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function gp(e,t){return(history.state?history.state.position-t:-1)+e}const Ou=new Map;function Tb(e,t){Ou.set(e,t)}function wb(e){const t=Ou.get(e);return Ou.delete(e),t}let Ab=()=>location.protocol+"//"+location.host;function z_(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),pp(c,"")}return pp(n,e)+r+s}function Ib(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=z_(e,location),g=n.value,y=t.value;let v=0;if(d){if(n.value=f,t.value=d,o&&o===g){o=null;return}v=y?d.position-y.position:0}else r(f);s.forEach(A=>{A(n.value,g,{delta:v,type:Gi.pop,direction:v?v>0?ki.forward:ki.back:ki.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Tt({},d.state,{scroll:Oc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function _p(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Oc():null}}function bb(e){const{history:t,location:n}=window,r={value:z_(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:Ab()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Tt({},t.state,_p(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Tt({},s.value,t.state,{forward:c,scroll:Oc()});i(u.current,u,!0);const h=Tt({},_p(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Rb(e){e=gb(e);const t=bb(e),n=Ib(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Tt({location:"",base:e,go:r,createHref:yb.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Sb(e){return typeof e=="string"||e&&typeof e=="object"}function G_(e){return typeof e=="string"||typeof e=="symbol"}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q_=Symbol("");var yp;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(yp||(yp={}));function Ds(e,t){return Tt(new Error,{type:e,[Q_]:!0},t)}function Tn(e,t){return e instanceof Error&&Q_ in e&&(t==null||!!(e.type&t))}const vp="[^/]+?",Cb={sensitive:!1,strict:!1,start:!0,end:!0},Pb=/[.+*?^${}()[\]/\\]/g;function Ob(e,t){const n=Tt({},Cb,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Pb,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:v,regexp:A}=d;i.push({name:g,repeatable:y,optional:v});const R=A||vp;if(R!==vp){f+=10;try{new RegExp(`(${R})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${R}): `+w.message)}}let N=y?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(N=v&&l.length<2?`(?:/${N})`:"/"+N),v&&(N+="?"),s+=N,f+=20,v&&(f+=-8),y&&(f+=-20),R===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:v}=f,A=g in l?l[g]:"";if(Xe(A)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const R=Xe(A)?A.join("/"):A;if(!R)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Nb(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function kb(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Nb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ep(r))return 1;if(Ep(s))return-1}return s.length-r.length}function Ep(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Db={type:0,value:""},xb=/[a-zA-Z0-9_]/;function Lb(e){if(!e)return[[]];if(e==="/")return[[Db]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:xb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Vb(e,t,n){const r=Ob(Lb(e.path),n),s=Tt(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Mb(e,t){const n=[],r=new Map;t=Ap({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,d){const f=!d,g=Ub(u);g.aliasOf=d&&d.record;const y=Ap(t,u),v=[g];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of N)v.push(Tt({},g,{components:d?d.record.components:g.components,path:w,aliasOf:d?d.record:g}))}let A,R;for(const N of v){const{path:w}=N;if(h&&w[0]!=="/"){const U=h.record.path,$=U[U.length-1]==="/"?"":"/";N.path=h.record.path+(w&&$+w)}if(A=Vb(N,h,y),d?d.alias.push(A):(R=R||A,R!==A&&R.alias.push(A),f&&u.name&&!wp(A)&&o(u.name)),g.children){const U=g.children;for(let $=0;$<U.length;$++)i(U[$],A,d&&d.children[$])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return R?()=>{o(R)}:Ni}function o(u){if(G_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&kb(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Y_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wp(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Ds(1,{location:u});y=d.record.name,f=Tt(Tp(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&Tp(u.params,d.keys.map(R=>R.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(R=>R.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw Ds(1,{location:u,currentLocation:h});y=d.record.name,f=Tt({},h.params,u.params),g=d.stringify(f)}const v=[];let A=d;for(;A;)v.unshift(A.record),A=A.parent;return{name:y,path:g,params:f,matched:v,meta:$b(v)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Tp(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ub(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Fb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function wp(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $b(e){return e.reduce((t,n)=>Tt(t,n.meta),{})}function Ap(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Y_(e,t){return t.children.some(n=>n===e||Y_(e,n))}const X_=/#/g,Bb=/&/g,jb=/\//g,qb=/=/g,Hb=/\?/g,J_=/\+/g,Wb=/%5B/g,Kb=/%5D/g,Z_=/%5E/g,zb=/%60/g,ty=/%7B/g,Gb=/%7C/g,ey=/%7D/g,Qb=/%20/g;function jh(e){return encodeURI(""+e).replace(Gb,"|").replace(Wb,"[").replace(Kb,"]")}function Yb(e){return jh(e).replace(ty,"{").replace(ey,"}").replace(Z_,"^")}function Nu(e){return jh(e).replace(J_,"%2B").replace(Qb,"+").replace(X_,"%23").replace(Bb,"%26").replace(zb,"`").replace(ty,"{").replace(ey,"}").replace(Z_,"^")}function Xb(e){return Nu(e).replace(qb,"%3D")}function Jb(e){return jh(e).replace(X_,"%23").replace(Hb,"%3F")}function Zb(e){return e==null?"":Jb(e).replace(jb,"%2F")}function Ba(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function tR(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(J_," "),o=i.indexOf("="),a=Ba(o<0?i:i.slice(0,o)),c=o<0?null:Ba(i.slice(o+1));if(a in t){let l=t[a];Xe(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ip(e){let t="";for(let n in e){const r=e[n];if(n=Xb(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Xe(r)?r.map(i=>i&&Nu(i)):[r&&Nu(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function eR(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const nR=Symbol(""),bp=Symbol(""),qh=Symbol(""),Hh=Symbol(""),ku=Symbol("");function pi(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Gn(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ds(4,{from:n,to:t})):h instanceof Error?a(h):Sb(h)?a(Ds(2,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function kl(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(rR(a)){const l=(a.__vccOpts||a)[t];l&&s.push(Gn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=lb(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[t];return d&&Gn(d,n,r,i,o)()}))}}return s}function rR(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Rp(e){const t=Qe(qh),n=Qe(Hh),r=Me(()=>t.resolve(Ve(e.to))),s=Me(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ks.bind(null,u));if(d>-1)return d;const f=Sp(c[l-2]);return l>1&&Sp(u)===f&&h[h.length-1].path!==f?h.findIndex(ks.bind(null,c[l-2])):d}),i=Me(()=>s.value>-1&&aR(n.params,r.value.params)),o=Me(()=>s.value>-1&&s.value===n.matched.length-1&&K_(n.params,r.value.params));function a(c={}){return oR(c)?t[Ve(e.replace)?"replace":"push"](Ve(e.to)).catch(Ni):Promise.resolve()}return{route:r,href:Me(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const sR=w_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rp,setup(e,{slots:t}){const n=po(Rp(e)),{options:r}=Qe(qh),s=Me(()=>({[Cp(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cp(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:B_("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),iR=sR;function oR(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function aR(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Sp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Cp=(e,t,n)=>e??t??n,cR=w_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Qe(ku),s=Me(()=>e.route||r.value),i=Qe(bp,0),o=Me(()=>{let l=Ve(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Me(()=>s.value.matched[o.value]);Ta(bp,Me(()=>o.value+1)),Ta(nR,a),Ta(ku,s);const c=Dh();return Si(()=>[c.value,a.value,e.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!ks(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,d=h&&h.components[u];if(!d)return Pp(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,v=B_(d,Tt({},g,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Pp(n.default,{Component:v,route:l})||v}}});function Pp(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ny=cR;function lR(e){const t=Mb(e.routes,e),n=e.parseQuery||tR,r=e.stringifyQuery||Ip,s=e.history,i=pi(),o=pi(),a=pi(),c=gA(qn);let l=qn;ls&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ol.bind(null,I=>""+I),h=Ol.bind(null,Zb),d=Ol.bind(null,Ba);function f(I,M){let x,W;return G_(I)?(x=t.getRecordMatcher(I),W=M):W=I,t.addRoute(W,x)}function g(I){const M=t.getRecordMatcher(I);M&&t.removeRoute(M)}function y(){return t.getRoutes().map(I=>I.record)}function v(I){return!!t.getRecordMatcher(I)}function A(I,M){if(M=Tt({},M||c.value),typeof I=="string"){const _=Nl(n,I,M.path),E=t.resolve({path:_.path},M),b=s.createHref(_.fullPath);return Tt(_,E,{params:d(E.params),hash:Ba(_.hash),redirectedFrom:void 0,href:b})}let x;if("path"in I)x=Tt({},I,{path:Nl(n,I.path,M.path).path});else{const _=Tt({},I.params);for(const E in _)_[E]==null&&delete _[E];x=Tt({},I,{params:h(_)}),M.params=h(M.params)}const W=t.resolve(x,M),dt=I.hash||"";W.params=u(d(W.params));const p=db(r,Tt({},I,{hash:Yb(dt),path:W.path})),m=s.createHref(p);return Tt({fullPath:p,hash:dt,query:r===Ip?eR(I.query):I.query||{}},W,{redirectedFrom:void 0,href:m})}function R(I){return typeof I=="string"?Nl(n,I,c.value.path):Tt({},I)}function N(I,M){if(l!==I)return Ds(8,{from:M,to:I})}function w(I){return Y(I)}function U(I){return w(Tt(R(I),{replace:!0}))}function $(I){const M=I.matched[I.matched.length-1];if(M&&M.redirect){const{redirect:x}=M;let W=typeof x=="function"?x(I):x;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=R(W):{path:W},W.params={}),Tt({query:I.query,hash:I.hash,params:"path"in W?{}:I.params},W)}}function Y(I,M){const x=l=A(I),W=c.value,dt=I.state,p=I.force,m=I.replace===!0,_=$(x);if(_)return Y(Tt(R(_),{state:typeof _=="object"?Tt({},dt,_.state):dt,force:p,replace:m}),M||x);const E=x;E.redirectedFrom=M;let b;return!p&&fb(r,W,x)&&(b=Ds(16,{to:E,from:W}),_e(W,W,!0,!1)),(b?Promise.resolve(b):J(E,W)).catch(S=>Tn(S)?Tn(S,2)?S:Ie(S):ht(S,E,W)).then(S=>{if(S){if(Tn(S,2))return Y(Tt({replace:m},R(S.to),{state:typeof S.to=="object"?Tt({},dt,S.to.state):dt,force:p}),M||E)}else S=bt(E,W,!0,m,dt);return pt(E,W,S),S})}function q(I,M){const x=N(I,M);return x?Promise.reject(x):Promise.resolve()}function j(I){const M=be.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(I):I()}function J(I,M){let x;const[W,dt,p]=uR(I,M);x=kl(W.reverse(),"beforeRouteLeave",I,M);for(const _ of W)_.leaveGuards.forEach(E=>{x.push(Gn(E,I,M))});const m=q.bind(null,I,M);return x.push(m),Dt(x).then(()=>{x=[];for(const _ of i.list())x.push(Gn(_,I,M));return x.push(m),Dt(x)}).then(()=>{x=kl(dt,"beforeRouteUpdate",I,M);for(const _ of dt)_.updateGuards.forEach(E=>{x.push(Gn(E,I,M))});return x.push(m),Dt(x)}).then(()=>{x=[];for(const _ of p)if(_.beforeEnter)if(Xe(_.beforeEnter))for(const E of _.beforeEnter)x.push(Gn(E,I,M));else x.push(Gn(_.beforeEnter,I,M));return x.push(m),Dt(x)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),x=kl(p,"beforeRouteEnter",I,M),x.push(m),Dt(x))).then(()=>{x=[];for(const _ of o.list())x.push(Gn(_,I,M));return x.push(m),Dt(x)}).catch(_=>Tn(_,8)?_:Promise.reject(_))}function pt(I,M,x){a.list().forEach(W=>j(()=>W(I,M,x)))}function bt(I,M,x,W,dt){const p=N(I,M);if(p)return p;const m=M===qn,_=ls?history.state:{};x&&(W||m?s.replace(I.fullPath,Tt({scroll:m&&_&&_.scroll},dt)):s.push(I.fullPath,dt)),c.value=I,_e(I,M,x,m),Ie()}let At;function he(){At||(At=s.listen((I,M,x)=>{if(!Re.listening)return;const W=A(I),dt=$(W);if(dt){Y(Tt(dt,{replace:!0}),W).catch(Ni);return}l=W;const p=c.value;ls&&Tb(gp(p.fullPath,x.delta),Oc()),J(W,p).catch(m=>Tn(m,12)?m:Tn(m,2)?(Y(m.to,W).then(_=>{Tn(_,20)&&!x.delta&&x.type===Gi.pop&&s.go(-1,!1)}).catch(Ni),Promise.reject()):(x.delta&&s.go(-x.delta,!1),ht(m,W,p))).then(m=>{m=m||bt(W,p,!1),m&&(x.delta&&!Tn(m,8)?s.go(-x.delta,!1):x.type===Gi.pop&&Tn(m,20)&&s.go(-1,!1)),pt(W,p,m)}).catch(Ni)}))}let Vt=pi(),et=pi(),ct;function ht(I,M,x){Ie(I);const W=et.list();return W.length?W.forEach(dt=>dt(I,M,x)):console.error(I),Promise.reject(I)}function Yt(){return ct&&c.value!==qn?Promise.resolve():new Promise((I,M)=>{Vt.add([I,M])})}function Ie(I){return ct||(ct=!I,he(),Vt.list().forEach(([M,x])=>I?x(I):M()),Vt.reset()),I}function _e(I,M,x,W){const{scrollBehavior:dt}=e;if(!ls||!dt)return Promise.resolve();const p=!x&&wb(gp(I.fullPath,0))||(W||!x)&&history.state&&history.state.scroll||null;return Lh().then(()=>dt(I,M,p)).then(m=>m&&Eb(m)).catch(m=>ht(m,I,M))}const Mt=I=>s.go(I);let qe;const be=new Set,Re={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:y,resolve:A,options:e,push:w,replace:U,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:et.add,isReady:Yt,install(I){const M=this;I.component("RouterLink",iR),I.component("RouterView",ny),I.config.globalProperties.$router=M,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(c)}),ls&&!qe&&c.value===qn&&(qe=!0,w(s.location).catch(dt=>{}));const x={};for(const dt in qn)Object.defineProperty(x,dt,{get:()=>c.value[dt],enumerable:!0});I.provide(qh,M),I.provide(Hh,o_(x)),I.provide(ku,c);const W=I.unmount;be.add(I),I.unmount=function(){be.delete(I),be.size<1&&(l=qn,At&&At(),At=null,c.value=qn,qe=!1,ct=!1),W()}}};function Dt(I){return I.reduce((M,x)=>M.then(()=>j(x)),Promise.resolve())}return Re}function uR(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>ks(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>ks(l,c))||s.push(c))}return[n,r,s]}function YU(){return Qe(Hh)}const hR={__name:"App",setup(e){return(t,n)=>(Dr(),Fh(Ve(ny)))}},dR="modulepreload",fR=function(e){return"/danthea/"+e},Op={},Np=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=fR(i),i in Op)return;Op[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":dR,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},pR="/danthea/assets/cincenta-f29c178e.jpg",mR="/danthea/assets/1-5aad1b01.jpg",gR="/danthea/assets/2-6c6fe12e.jpg",_R="/danthea/assets/3-c25a1509.jpg",yR="/danthea/assets/navbar-logo-8c94bc3b.svg",vR=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},ER={},TR={class:"navbar navbar-expand-lg navbar-info bg-info fixed-top",id:"mainNav"},wR=Sc('<div class="container-fluid"><a class="navbar-brand" href="#inicio"><img src="'+yR+'" alt="..."></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> Menú <i class="fas fa-bars ms-1"></i></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0"><li class="nav-item"><a class="nav-link" href="#programa">Programación</a></li><li class="nav-item"><a class="nav-link" href="#danthea">Compañia</a></li><li class="nav-item"><a class="nav-link" href="#escola">Escola</a></li><li class="nav-item"><a class="nav-link" href="#equipo">Equipo</a></li><li class="nav-item"><a class="nav-link" href="#mapa">Onde estamos</a></li><li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li></ul></div></div>',1),AR=[wR];function IR(e,t){return Dr(),$a("nav",TR,AR)}const bR=vR(ER,[["render",IR]]),RR={class:"card",style:{width:"18rem"}},SR=["src"],CR={class:"card-body"},PR={class:"card-title text-uppercase text-center"},OR={class:"card-text text-uppercase text-center",style:{"font-family":"'Courier New'"}},NR={class:"text-center"},kR={class:"text-center"},DR=it("div",{class:"text-center"},null,-1),xR={__name:"BaseTarjeta",props:{obra:{type:Object,required:!0}},setup(e){return(t,n)=>{const r=C_("router-link");return Dr(),$a("div",RR,[Zt(r,{to:{name:"detalle",params:{id:e.obra.id}}},{default:v_(()=>[it("img",{src:e.obra.photo,class:"card-img-top",alt:""},null,8,SR)]),_:1},8,["to"]),it("div",CR,[it("h5",PR,qo(e.obra.company),1),it("p",OR,qo(e.obra.title),1),it("p",NR,qo(e.obra.age),1),it("p",kR,qo(e.obra.date),1),DR])])}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},LR=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},sy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ry(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):LR(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new VR;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class VR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MR=function(e){const t=ry(e);return sy.encodeByteArray(t,!0)},ja=function(e){return MR(e).replace(/\./g,"")},iy=function(e){try{return sy.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=()=>UR().__FIREBASE_DEFAULTS__,$R=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},BR=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&iy(e[1]);return t&&JSON.parse(t)},Nc=()=>{try{return FR()||$R()||BR()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},oy=e=>{var t,n;return(n=(t=Nc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ay=e=>{const t=oy(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},cy=()=>{var e;return(e=Nc())===null||e===void 0?void 0:e.config},ly=e=>{var t;return(t=Nc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function HR(){var e;const t=(e=Nc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WR(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function KR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zR(){const e=le();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function GR(){try{return typeof indexedDB=="object"}catch{return!1}}function QR(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR="FirebaseError";class En extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=YR,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?XR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new En(s,a,r)}}function XR(e,t){return e.replace(JR,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const JR=/\{\$([^}]+)}/g;function ZR(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(kp(i)&&kp(o)){if(!qa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kp(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function t0(e,t){const n=new e0(e,t);return n.subscribe.bind(n)}class e0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");n0(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Dl),s.error===void 0&&(s.error=Dl),s.complete===void 0&&(s.complete=Dl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Dl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return e&&e._delegate?e._delegate:e}class cr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new jR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(i0(t))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ar){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ar){return this.instances.has(t)}getOptions(t=Ar){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ar){return this.component?this.component.multipleInstances?t:Ar:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s0(e){return e===Ar?void 0:e}function i0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new r0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_t||(_t={}));const a0={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},c0=_t.INFO,l0={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},u0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=l0[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wh{constructor(t){this.name=t,this._logLevel=c0,this._logHandler=u0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?a0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...t),this._logHandler(this,_t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...t),this._logHandler(this,_t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...t),this._logHandler(this,_t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...t),this._logHandler(this,_t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...t),this._logHandler(this,_t.ERROR,...t)}}const h0=(e,t)=>t.some(n=>e instanceof n);let Dp,xp;function d0(){return Dp||(Dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f0(){return xp||(xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,Du=new WeakMap,dy=new WeakMap,xl=new WeakMap,Kh=new WeakMap;function p0(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(sr(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&hy.set(n,e)}).catch(()=>{}),Kh.set(t,e),t}function m0(e){if(Du.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Du.set(e,t)}let xu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Du.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function g0(e){xu=e(xu)}function _0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ll(this),t,...n);return dy.set(r,t.sort?t.sort():[t]),sr(r)}:f0().includes(e)?function(...t){return e.apply(Ll(this),t),sr(hy.get(this))}:function(...t){return sr(e.apply(Ll(this),t))}}function y0(e){return typeof e=="function"?_0(e):(e instanceof IDBTransaction&&m0(e),h0(e,d0())?new Proxy(e,xu):e)}function sr(e){if(e instanceof IDBRequest)return p0(e);if(xl.has(e))return xl.get(e);const t=y0(e);return t!==e&&(xl.set(e,t),Kh.set(t,e)),t}const Ll=e=>Kh.get(e);function v0(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const E0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],Vl=new Map;function Lp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Vl.get(t))return Vl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=T0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||E0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Vl.set(t,i),i}g0(e=>({...e,get:(t,n,r)=>Lp(t,n)||e.get(t,n,r),has:(t,n)=>!!Lp(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function A0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lu="@firebase/app",Vp="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Wh("@firebase/app"),I0="@firebase/app-compat",b0="@firebase/analytics-compat",R0="@firebase/analytics",S0="@firebase/app-check-compat",C0="@firebase/app-check",P0="@firebase/auth",O0="@firebase/auth-compat",N0="@firebase/database",k0="@firebase/database-compat",D0="@firebase/functions",x0="@firebase/functions-compat",L0="@firebase/installations",V0="@firebase/installations-compat",M0="@firebase/messaging",U0="@firebase/messaging-compat",F0="@firebase/performance",$0="@firebase/performance-compat",B0="@firebase/remote-config",j0="@firebase/remote-config-compat",q0="@firebase/storage",H0="@firebase/storage-compat",W0="@firebase/firestore",K0="@firebase/firestore-compat",z0="firebase",G0="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="[DEFAULT]",Q0={[Lu]:"fire-core",[I0]:"fire-core-compat",[R0]:"fire-analytics",[b0]:"fire-analytics-compat",[C0]:"fire-app-check",[S0]:"fire-app-check-compat",[P0]:"fire-auth",[O0]:"fire-auth-compat",[N0]:"fire-rtdb",[k0]:"fire-rtdb-compat",[D0]:"fire-fn",[x0]:"fire-fn-compat",[L0]:"fire-iid",[V0]:"fire-iid-compat",[M0]:"fire-fcm",[U0]:"fire-fcm-compat",[F0]:"fire-perf",[$0]:"fire-perf-compat",[B0]:"fire-rc",[j0]:"fire-rc-compat",[q0]:"fire-gcs",[H0]:"fire-gcs-compat",[W0]:"fire-fst",[K0]:"fire-fst-compat","fire-js":"fire-js",[z0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new Map,Mu=new Map;function Y0(e,t){try{e.container.addComponent(t)}catch(n){$r.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Br(e){const t=e.name;if(Mu.has(t))return $r.debug(`There were multiple attempts to register component ${t}.`),!1;Mu.set(t,e);for(const n of Ha.values())Y0(n,e);return!0}function kc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ir=new mo("app","Firebase",X0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=G0;function zh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Vu,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=cy()),!n)throw ir.create("no-options");const i=Ha.get(s);if(i){if(qa(n,i.options)&&qa(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new o0(s);for(const c of Mu.values())o.addComponent(c);const a=new J0(n,r,o);return Ha.set(s,a),a}function Gh(e=Vu){const t=Ha.get(e);if(!t&&e===Vu&&cy())return zh();if(!t)throw ir.create("no-app",{appName:e});return t}function hn(e,t,n){var r;let s=(r=Q0[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$r.warn(a.join(" "));return}Br(new cr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebase-heartbeat-database",tS=1,Qi="firebase-heartbeat-store";let Ml=null;function fy(){return Ml||(Ml=v0(Z0,tS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qi)}}}).catch(e=>{throw ir.create("idb-open",{originalErrorMessage:e.message})})),Ml}async function eS(e){try{return await(await fy()).transaction(Qi).objectStore(Qi).get(py(e))}catch(t){if(t instanceof En)$r.warn(t.message);else{const n=ir.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$r.warn(n.message)}}}async function Mp(e,t){try{const r=(await fy()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(t,py(e)),await r.done}catch(n){if(n instanceof En)$r.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$r.warn(r.message)}}}function py(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=1024,rS=30*24*60*60*1e3;class sS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Up();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=rS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Up(),{heartbeatsToSend:n,unsentEntries:r}=iS(this._heartbeatsCache.heartbeats),s=ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Up(){return new Date().toISOString().substring(0,10)}function iS(e,t=nS){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fp(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GR()?QR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Fp(e){return ja(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(e){Br(new cr("platform-logger",t=>new w0(t),"PRIVATE")),Br(new cr("heartbeat",t=>new sS(t),"PRIVATE")),hn(Lu,Vp,e),hn(Lu,Vp,"esm2017"),hn("fire-js","")}aS("");var cS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Qh=Qh||{},nt=cS||self;function Dc(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function _o(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function lS(e){return Object.prototype.hasOwnProperty.call(e,Ul)&&e[Ul]||(e[Ul]=++uS)}var Ul="closure_uid_"+(1e9*Math.random()>>>0),uS=0;function hS(e,t,n){return e.call.apply(e.bind,arguments)}function dS(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function oe(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?oe=hS:oe=dS,oe.apply(null,arguments)}function Yo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Qt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function mr(){this.s=this.s,this.o=this.o}var fS=0;mr.prototype.s=!1;mr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fS!=0)&&lS(this)};mr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const my=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Yh(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function $p(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Dc(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function ae(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var pS=function(){if(!nt.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{nt.addEventListener("test",()=>{},t),nt.removeEventListener("test",()=>{},t)}catch{}return e}();function Yi(e){return/^[\s\xa0]*$/.test(e)}function xc(){var e=nt.navigator;return e&&(e=e.userAgent)?e:""}function an(e){return xc().indexOf(e)!=-1}function Xh(e){return Xh[" "](e),e}Xh[" "]=function(){};function mS(e,t){var n=aC;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var gS=an("Opera"),xs=an("Trident")||an("MSIE"),gy=an("Edge"),Uu=gy||xs,_y=an("Gecko")&&!(xc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),_S=xc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function yy(){var e=nt.document;return e?e.documentMode:void 0}var Fu;t:{var Fl="",$l=function(){var e=xc();if(_y)return/rv:([^\);]+)(\)|;)/.exec(e);if(gy)return/Edge\/([\d\.]+)/.exec(e);if(xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(_S)return/WebKit\/(\S+)/.exec(e);if(gS)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if($l&&(Fl=$l?$l[1]:""),xs){var Bl=yy();if(Bl!=null&&Bl>parseFloat(Fl)){Fu=String(Bl);break t}}Fu=Fl}var $u;if(nt.document&&xs){var Bp=yy();$u=Bp||parseInt(Fu,10)||void 0}else $u=void 0;var yS=$u;function Xi(e,t){if(ae.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(_y){t:{try{Xh(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:vS[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xi.$.h.call(this)}}Qt(Xi,ae);var vS={2:"touch",3:"pen",4:"mouse"};Xi.prototype.h=function(){Xi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var yo="closure_listenable_"+(1e6*Math.random()|0),ES=0;function TS(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++ES,this.fa=this.ia=!1}function Lc(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Jh(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function wS(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function vy(e){const t={};for(const n in e)t[n]=e[n];return t}const jp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ey(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<jp.length;i++)n=jp[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Vc(e){this.src=e,this.g={},this.h=0}Vc.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ju(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new TS(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Bu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=my(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Lc(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ju(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Zh="closure_lm_"+(1e6*Math.random()|0),jl={};function Ty(e,t,n,r,s){if(r&&r.once)return Ay(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ty(e,t[i],n,r,s);return null}return n=nd(n),e&&e[yo]?e.O(t,n,_o(r)?!!r.capture:!!r,s):wy(e,t,n,!1,r,s)}function wy(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=_o(s)?!!s.capture:!!s,a=ed(e);if(a||(e[Zh]=a=new Vc(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=AS(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)pS||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(by(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AS(){function e(n){return t.call(e.src,e.listener,n)}const t=IS;return e}function Ay(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ay(e,t[i],n,r,s);return null}return n=nd(n),e&&e[yo]?e.P(t,n,_o(r)?!!r.capture:!!r,s):wy(e,t,n,!0,r,s)}function Iy(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Iy(e,t[i],n,r,s);else r=_o(r)?!!r.capture:!!r,n=nd(n),e&&e[yo]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ju(i,n,r,s),-1<n&&(Lc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ed(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ju(t,n,r,s)),(n=-1<e?t[e]:null)&&td(n))}function td(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[yo])Bu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(by(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ed(t))?(Bu(n,e),n.h==0&&(n.src=null,t[Zh]=null)):Lc(e)}}}function by(e){return e in jl?jl[e]:jl[e]="on"+e}function IS(e,t){if(e.fa)e=!0;else{t=new Xi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&td(e),e=n.call(r,t)}return e}function ed(e){return e=e[Zh],e instanceof Vc?e:null}var ql="__closure_events_fn_"+(1e9*Math.random()>>>0);function nd(e){return typeof e=="function"?e:(e[ql]||(e[ql]=function(t){return e.handleEvent(t)}),e[ql])}function Gt(){mr.call(this),this.i=new Vc(this),this.S=this,this.J=null}Qt(Gt,mr);Gt.prototype[yo]=!0;Gt.prototype.removeEventListener=function(e,t,n,r){Iy(this,e,t,n,r)};function te(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ae(t,e);else if(t instanceof ae)t.target=t.target||e;else{var s=t;t=new ae(r,e),Ey(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Xo(o,r,!0,t)&&s}if(o=t.g=e,s=Xo(o,r,!0,t)&&s,s=Xo(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Xo(o,r,!1,t)&&s}Gt.prototype.N=function(){if(Gt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Lc(n[r]);delete e.g[t],e.h--}}this.J=null};Gt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Gt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Xo(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Bu(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var rd=nt.JSON.stringify;class bS{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function RS(){var e=sd;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class SS{constructor(){this.h=this.g=null}add(t,n){const r=Ry.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ry=new bS(()=>new CS,e=>e.reset());class CS{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function PS(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function OS(e){nt.setTimeout(()=>{throw e},0)}let Ji,Zi=!1,sd=new SS,Sy=()=>{const e=nt.Promise.resolve(void 0);Ji=()=>{e.then(NS)}};var NS=()=>{for(var e;e=RS();){try{e.h.call(e.g)}catch(n){OS(n)}var t=Ry;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Zi=!1};function Mc(e,t){Gt.call(this),this.h=e||1,this.g=t||nt,this.j=oe(this.qb,this),this.l=Date.now()}Qt(Mc,Gt);V=Mc.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),te(this,"tick"),this.ga&&(id(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function id(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}V.N=function(){Mc.$.N.call(this),id(this),delete this.g};function od(e,t,n){if(typeof e=="function")n&&(e=oe(e,n));else if(e&&typeof e.handleEvent=="function")e=oe(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:nt.setTimeout(e,t||0)}function Cy(e){e.g=od(()=>{e.g=null,e.i&&(e.i=!1,Cy(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class kS extends mr{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Cy(this)}N(){super.N(),this.g&&(nt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(e){mr.call(this),this.h=e,this.g={}}Qt(to,mr);var qp=[];function Py(e,t,n,r){Array.isArray(n)||(n&&(qp[0]=n.toString()),n=qp);for(var s=0;s<n.length;s++){var i=Ty(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Oy(e){Jh(e.g,function(t,n){this.g.hasOwnProperty(n)&&td(t)},e),e.g={}}to.prototype.N=function(){to.$.N.call(this),Oy(this)};to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uc(){this.g=!0}Uc.prototype.Ea=function(){this.g=!1};function DS(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function xS(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function gs(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+VS(e,n)+(r?" "+r:"")})}function LS(e,t){e.info(function(){return"TIMEOUT: "+t})}Uc.prototype.info=function(){};function VS(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return rd(n)}catch{return t}}var Yr={},Hp=null;function Fc(){return Hp=Hp||new Gt}Yr.Ta="serverreachability";function Ny(e){ae.call(this,Yr.Ta,e)}Qt(Ny,ae);function eo(e){const t=Fc();te(t,new Ny(t))}Yr.STAT_EVENT="statevent";function ky(e,t){ae.call(this,Yr.STAT_EVENT,e),this.stat=t}Qt(ky,ae);function pe(e){const t=Fc();te(t,new ky(t,e))}Yr.Ua="timingevent";function Dy(e,t){ae.call(this,Yr.Ua,e),this.size=t}Qt(Dy,ae);function vo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return nt.setTimeout(function(){e()},t)}var $c={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ad(){}ad.prototype.h=null;function Wp(e){return e.h||(e.h=e.i())}function Ly(){}var Eo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function cd(){ae.call(this,"d")}Qt(cd,ae);function ld(){ae.call(this,"c")}Qt(ld,ae);var qu;function Bc(){}Qt(Bc,ad);Bc.prototype.g=function(){return new XMLHttpRequest};Bc.prototype.i=function(){return{}};qu=new Bc;function To(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new to(this),this.P=MS,e=Uu?125:void 0,this.V=new Mc(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Vy}function Vy(){this.i=null,this.g="",this.h=!1}var MS=45e3,Hu={},Wa={};V=To.prototype;V.setTimeout=function(e){this.P=e};function Wu(e,t,n){e.L=1,e.v=qc(Nn(t)),e.s=n,e.S=!0,My(e,null)}function My(e,t){e.G=Date.now(),wo(e),e.A=Nn(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Wy(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Vy,e.g=dv(e.l,n?t:null,!e.s),0<e.O&&(e.M=new kS(oe(e.Pa,e,e.g),e.O)),Py(e.U,e.g,"readystatechange",e.nb),t=e.I?vy(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),eo(),DS(e.j,e.u,e.A,e.m,e.W,e.s)}V.nb=function(e){e=e.target;const t=this.M;t&&cn(e)==3?t.l():this.Pa(e)};V.Pa=function(e){try{if(e==this.g)t:{const u=cn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Uu||this.g&&(this.h.h||this.g.ja()||Qp(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?eo(3):eo(2)),jc(this);var n=this.g.da();this.ca=n;e:if(Uy(this)){var r=Qp(this.g);e="";var s=r.length,i=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),Di(this);var o="";break e}this.h.i=new nt.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yi(a)){var l=a;break e}}l=null}if(n=l)gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ku(this,n);else{this.i=!1,this.o=3,pe(12),Sr(this),Di(this);break t}}this.S?(Fy(this,u,o),Uu&&this.i&&u==3&&(Py(this.U,this.V,"tick",this.mb),this.V.start())):(gs(this.j,this.m,o,null),Ku(this,o)),u==4&&Sr(this),this.i&&!this.J&&(u==4?cv(this.l,this):(this.i=!1,wo(this)))}else sC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pe(12)):(this.o=0,pe(13)),Sr(this),Di(this)}}}catch{}finally{}};function Uy(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Fy(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=US(e,n),s==Wa){t==4&&(e.o=4,pe(14),r=!1),gs(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Hu){e.o=4,pe(15),gs(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else gs(e.j,e.m,s,null),Ku(e,s);Uy(e)&&s!=Wa&&s!=Hu&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,pe(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),md(t),t.M=!0,pe(11))):(gs(e.j,e.m,n,"[Invalid Chunked Response]"),Sr(e),Di(e))}V.mb=function(){if(this.g){var e=cn(this.g),t=this.g.ja();this.C<t.length&&(jc(this),Fy(this,e,t),this.i&&e!=4&&wo(this))}};function US(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Wa:(n=Number(t.substring(n,r)),isNaN(n)?Hu:(r+=1,r+n>t.length?Wa:(t=t.slice(r,r+n),e.C=r+n,t)))}V.cancel=function(){this.J=!0,Sr(this)};function wo(e){e.Y=Date.now()+e.P,$y(e,e.P)}function $y(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=vo(oe(e.lb,e),t)}function jc(e){e.B&&(nt.clearTimeout(e.B),e.B=null)}V.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(LS(this.j,this.A),this.L!=2&&(eo(),pe(17)),Sr(this),this.o=2,Di(this)):$y(this,this.Y-e)};function Di(e){e.l.H==0||e.J||cv(e.l,e)}function Sr(e){jc(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,id(e.V),Oy(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ku(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||zu(n.i,e))){if(!e.K&&zu(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ga(n),zc(n);else break t;pd(n),pe(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=vo(oe(n.ib,n),6e3));if(1>=Gy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Cr(n,11)}else if((e.K||n.g==e)&&Ga(n),!Yi(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ud(i,i.h),i.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,St(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=hv(r,r.J?r.pa:null,r.Y),o.K){Qy(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(jc(a),wo(a)),r.g=o}else ov(r);0<n.j.length&&Gc(n)}else l[0]!="stop"&&l[0]!="close"||Cr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Cr(n,7):fd(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}eo(4)}catch{}}function FS(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Dc(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function $S(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Dc(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function By(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Dc(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=$S(e),r=FS(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var jy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BS(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Lr(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Lr){this.h=e.h,Ka(this,e.j),this.s=e.s,this.g=e.g,za(this,e.m),this.l=e.l;var t=e.i,n=new no;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Kp(this,n),this.o=e.o}else e&&(t=String(e).match(jy))?(this.h=!1,Ka(this,t[1]||"",!0),this.s=wi(t[2]||""),this.g=wi(t[3]||"",!0),za(this,t[4]),this.l=wi(t[5]||"",!0),Kp(this,t[6]||"",!0),this.o=wi(t[7]||"")):(this.h=!1,this.i=new no(null,this.h))}Lr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ai(t,zp,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ai(t,zp,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ai(n,n.charAt(0)=="/"?HS:qS,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ai(n,KS)),e.join("")};function Nn(e){return new Lr(e)}function Ka(e,t,n){e.j=n?wi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function za(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Kp(e,t,n){t instanceof no?(e.i=t,zS(e.i,e.h)):(n||(t=Ai(t,WS)),e.i=new no(t,e.h))}function St(e,t,n){e.i.set(t,n)}function qc(e){return St(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ai(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,jS),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jS(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var zp=/[#\/\?@]/g,qS=/[#\?:]/g,HS=/[#\?]/g,WS=/[#\?@]/g,KS=/#/g;function no(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function gr(e){e.g||(e.g=new Map,e.h=0,e.i&&BS(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}V=no.prototype;V.add=function(e,t){gr(this),this.i=null,e=ti(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function qy(e,t){gr(e),t=ti(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Hy(e,t){return gr(e),t=ti(e,t),e.g.has(t)}V.forEach=function(e,t){gr(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};V.ta=function(){gr(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};V.Z=function(e){gr(this);let t=[];if(typeof e=="string")Hy(this,e)&&(t=t.concat(this.g.get(ti(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};V.set=function(e,t){return gr(this),this.i=null,e=ti(this,e),Hy(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};V.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Wy(e,t,n){qy(e,t),0<n.length&&(e.i=null,e.g.set(ti(e,t),Yh(n)),e.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function ti(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function zS(e,t){t&&!e.j&&(gr(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(qy(this,r),Wy(this,s,n))},e)),e.j=t}var GS=class{constructor(e,t){this.g=e,this.map=t}};function Ky(e){this.l=e||QS,nt.PerformanceNavigationTiming?(e=nt.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(nt.g&&nt.g.Ka&&nt.g.Ka()&&nt.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QS=10;function zy(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Gy(e){return e.h?1:e.g?e.g.size:0}function zu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ud(e,t){e.g?e.g.add(t):e.h=t}function Qy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ky.prototype.cancel=function(){if(this.i=Yy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Yy(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Yh(e.i)}var YS=class{stringify(e){return nt.JSON.stringify(e,void 0)}parse(e){return nt.JSON.parse(e,void 0)}};function XS(){this.g=new YS}function JS(e,t,n){const r=n||"";try{By(e,function(s,i){let o=s;_o(s)&&(o=rd(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function ZS(e,t){const n=new Uc;if(nt.Image){const r=new Image;r.onload=Yo(Jo,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Yo(Jo,n,r,"TestLoadImage: error",!1,t),r.onabort=Yo(Jo,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Yo(Jo,n,r,"TestLoadImage: timeout",!1,t),nt.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Jo(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Hc(e){this.l=e.fc||null,this.j=e.ob||!1}Qt(Hc,ad);Hc.prototype.g=function(){return new Wc(this.l,this.j)};Hc.prototype.i=function(e){return function(){return e}}({});function Wc(e,t){Gt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=hd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qt(Wc,Gt);var hd=0;V=Wc.prototype;V.open=function(e,t){if(this.readyState!=hd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ro(this)};V.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||nt).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ao(this)),this.readyState=hd};V.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ro(this)),this.g&&(this.readyState=3,ro(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof nt.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xy(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Xy(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}V.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ao(this):ro(this),this.readyState==3&&Xy(this)}};V.Za=function(e){this.g&&(this.response=this.responseText=e,Ao(this))};V.Ya=function(e){this.g&&(this.response=e,Ao(this))};V.ka=function(){this.g&&Ao(this)};function Ao(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ro(e)}V.setRequestHeader=function(e,t){this.v.append(e,t)};V.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ro(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Wc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var tC=nt.JSON.parse;function xt(e){Gt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Jy,this.L=this.M=!1}Qt(xt,Gt);var Jy="",eC=/^https?$/i,nC=["POST","PUT"];V=xt.prototype;V.Oa=function(e){this.M=e};V.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qu.g(),this.C=this.u?Wp(this.u):Wp(qu),this.g.onreadystatechange=oe(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Gp(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=nt.FormData&&e instanceof nt.FormData,!(0<=my(nC,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ev(this),0<this.B&&((this.L=rC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=oe(this.ua,this)):this.A=od(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Gp(this,i)}};function rC(e){return xs&&typeof e.timeout=="number"&&e.ontimeout!==void 0}V.ua=function(){typeof Qh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,te(this,"timeout"),this.abort(8))};function Gp(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Zy(e),Kc(e)}function Zy(e){e.F||(e.F=!0,te(e,"complete"),te(e,"error"))}V.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Kc(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kc(this,!0)),xt.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?tv(this):this.kb())};V.kb=function(){tv(this)};function tv(e){if(e.h&&typeof Qh<"u"&&(!e.C[1]||cn(e)!=4||e.da()!=2)){if(e.v&&cn(e)==4)od(e.La,0,e);else if(te(e,"readystatechange"),cn(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(jy)[1]||null;!s&&nt.self&&nt.self.location&&(s=nt.self.location.protocol.slice(0,-1)),r=!eC.test(s?s.toLowerCase():"")}n=r}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var i=2<cn(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Zy(e)}}finally{Kc(e)}}}}function Kc(e,t){if(e.g){ev(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||te(e,"ready");try{n.onreadystatechange=r}catch{}}}function ev(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(nt.clearTimeout(e.A),e.A=null)}V.isActive=function(){return!!this.g};function cn(e){return e.g?e.g.readyState:0}V.da=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),tC(t)}};function Qp(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Jy:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function sC(e){const t={};e=(e.g&&2<=cn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Yi(e[r]))continue;var n=PS(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}wS(t,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nv(e){let t="";return Jh(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function dd(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=nv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):St(e,t,n))}function mi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rv(e){this.Ga=0,this.j=[],this.l=new Uc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=mi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=mi("baseRetryDelayMs",5e3,e),this.hb=mi("retryDelaySeedMs",1e4,e),this.eb=mi("forwardChannelMaxRetries",2,e),this.xa=mi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ky(e&&e.concurrentRequestLimit),this.Ja=new XS,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=rv.prototype;V.ra=8;V.H=1;function fd(e){if(sv(e),e.H==3){var t=e.W++,n=Nn(e.I);if(St(n,"SID",e.K),St(n,"RID",t),St(n,"TYPE","terminate"),Io(e,n),t=new To(e,e.l,t),t.L=2,t.v=qc(Nn(n)),n=!1,nt.navigator&&nt.navigator.sendBeacon)try{n=nt.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&nt.Image&&(new Image().src=t.v,n=!0),n||(t.g=dv(t.l,null),t.g.ha(t.v)),t.G=Date.now(),wo(t)}uv(e)}function zc(e){e.g&&(md(e),e.g.cancel(),e.g=null)}function sv(e){zc(e),e.u&&(nt.clearTimeout(e.u),e.u=null),Ga(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&nt.clearTimeout(e.m),e.m=null)}function Gc(e){if(!zy(e.i)&&!e.m){e.m=!0;var t=e.Na;Ji||Sy(),Zi||(Ji(),Zi=!0),sd.add(t,e),e.C=0}}function iC(e,t){return Gy(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=vo(oe(e.Na,e,t),lv(e,e.C)),e.C++,!0)}V.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new To(this,this.l,e);let i=this.s;if(this.U&&(i?(i=vy(i),Ey(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=iv(this,s,t),n=Nn(this.I),St(n,"RID",e),St(n,"CVER",22),this.F&&St(n,"X-HTTP-Session-Id",this.F),Io(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(nv(i)))+"&"+t:this.o&&dd(n,this.o,i)),ud(this.i,s),this.bb&&St(n,"TYPE","init"),this.P?(St(n,"$req",t),St(n,"SID","null"),s.aa=!0,Wu(s,n,null)):Wu(s,n,t),this.H=2}}else this.H==3&&(e?Yp(this,e):this.j.length==0||zy(this.i)||Yp(this))};function Yp(e,t){var n;t?n=t.m:n=e.W++;const r=Nn(e.I);St(r,"SID",e.K),St(r,"RID",n),St(r,"AID",e.V),Io(e,r),e.o&&e.s&&dd(r,e.o,e.s),n=new To(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=iv(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ud(e.i,n),Wu(n,r,t)}function Io(e,t){e.na&&Jh(e.na,function(n,r){St(t,r,n)}),e.h&&By({},function(n,r){St(t,r,n)})}function iv(e,t,n){n=Math.min(e.j.length,n);var r=e.h?oe(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{JS(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function ov(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ji||Sy(),Zi||(Ji(),Zi=!0),sd.add(t,e),e.A=0}}function pd(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=vo(oe(e.Ma,e),lv(e,e.A)),e.A++,!0)}V.Ma=function(){if(this.u=null,av(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=vo(oe(this.jb,this),e)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pe(10),zc(this),av(this))};function md(e){e.B!=null&&(nt.clearTimeout(e.B),e.B=null)}function av(e){e.g=new To(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Nn(e.wa);St(t,"RID","rpc"),St(t,"SID",e.K),St(t,"AID",e.V),St(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&St(t,"TO",e.qa),St(t,"TYPE","xmlhttp"),Io(e,t),e.o&&e.s&&dd(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=qc(Nn(t)),n.s=null,n.S=!0,My(n,e)}V.ib=function(){this.v!=null&&(this.v=null,zc(this),pd(this),pe(19))};function Ga(e){e.v!=null&&(nt.clearTimeout(e.v),e.v=null)}function cv(e,t){var n=null;if(e.g==t){Ga(e),md(e),e.g=null;var r=2}else if(zu(e.i,t))n=t.F,Qy(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=Fc(),te(r,new Dy(r,n)),Gc(e)}else ov(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&iC(e,t)||r==2&&pd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Cr(e,5);break;case 4:Cr(e,10);break;case 3:Cr(e,6);break;default:Cr(e,2)}}}function lv(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Cr(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=oe(e.pb,e);n||(n=new Lr("//www.google.com/images/cleardot.gif"),nt.location&&nt.location.protocol=="http"||Ka(n,"https"),qc(n)),ZS(n.toString(),r)}else pe(2);e.H=0,e.h&&e.h.za(t),uv(e),sv(e)}V.pb=function(e){e?(this.l.info("Successfully pinged google.com"),pe(2)):(this.l.info("Failed to ping google.com"),pe(1))};function uv(e){if(e.H=0,e.ma=[],e.h){const t=Yy(e.i);(t.length!=0||e.j.length!=0)&&($p(e.ma,t),$p(e.ma,e.j),e.i.i.length=0,Yh(e.j),e.j.length=0),e.h.ya()}}function hv(e,t,n){var r=n instanceof Lr?Nn(n):new Lr(n);if(r.g!="")t&&(r.g=t+"."+r.g),za(r,r.m);else{var s=nt.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Lr(null);r&&Ka(i,r),t&&(i.g=t),s&&za(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&St(r,n,t),St(r,"VER",e.ra),Io(e,r),r}function dv(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new xt(new Hc({ob:!0})):new xt(e.va),t.Oa(e.J),t}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function fv(){}V=fv.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Qa(){if(xs&&!(10<=Number(yS)))throw Error("Environmental error: no available transport.")}Qa.prototype.g=function(e,t){return new ke(e,t)};function ke(e,t){Gt.call(this),this.g=new rv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Yi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Yi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ei(this)}Qt(ke,Gt);ke.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;pe(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=hv(e,null,e.Y),Gc(e)};ke.prototype.close=function(){fd(this.g)};ke.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=rd(e),e=n);t.j.push(new GS(t.fb++,e)),t.H==3&&Gc(t)};ke.prototype.N=function(){this.g.h=null,delete this.j,fd(this.g),delete this.g,ke.$.N.call(this)};function pv(e){cd.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Qt(pv,cd);function mv(){ld.call(this),this.status=1}Qt(mv,ld);function ei(e){this.g=e}Qt(ei,fv);ei.prototype.Ba=function(){te(this.g,"a")};ei.prototype.Aa=function(e){te(this.g,new pv(e))};ei.prototype.za=function(e){te(this.g,new mv)};ei.prototype.ya=function(){te(this.g,"b")};function oC(){this.blockSize=-1}function Je(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qt(Je,oC);Je.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hl(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Je.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Hl(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Hl(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Hl(this,r),s=0;break}}this.h=s,this.i+=t};Je.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function wt(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var aC={};function gd(e){return-128<=e&&128>e?mS(e,function(t){return new wt([t|0],0>t?-1:0)}):new wt([e|0],0>e?-1:0)}function ln(e){if(isNaN(e)||!isFinite(e))return ws;if(0>e)return Jt(ln(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Gu;return new wt(t,0)}function gv(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Jt(gv(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ln(Math.pow(t,8)),r=ws,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=ln(Math.pow(t,i)),r=r.R(i).add(ln(o))):(r=r.R(n),r=r.add(ln(o)))}return r}var Gu=4294967296,ws=gd(0),Qu=gd(1),Xp=gd(16777216);V=wt.prototype;V.ea=function(){if(Ue(this))return-Jt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Gu+r)*t,t*=Gu}return e};V.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(An(this))return"0";if(Ue(this))return"-"+Jt(this).toString(e);for(var t=ln(Math.pow(e,6)),n=this,r="";;){var s=Xa(n,t).g;n=Ya(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,An(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function An(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ue(e){return e.h==-1}V.X=function(e){return e=Ya(this,e),Ue(e)?-1:An(e)?0:1};function Jt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new wt(n,~e.h).add(Qu)}V.abs=function(){return Ue(this)?Jt(this):this};V.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new wt(n,n[n.length-1]&-2147483648?-1:0)};function Ya(e,t){return e.add(Jt(t))}V.R=function(e){if(An(this)||An(e))return ws;if(Ue(this))return Ue(e)?Jt(this).R(Jt(e)):Jt(Jt(this).R(e));if(Ue(e))return Jt(this.R(Jt(e)));if(0>this.X(Xp)&&0>e.X(Xp))return ln(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,Zo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Zo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Zo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Zo(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new wt(n,0)};function Zo(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function gi(e,t){this.g=e,this.h=t}function Xa(e,t){if(An(t))throw Error("division by zero");if(An(e))return new gi(ws,ws);if(Ue(e))return t=Xa(Jt(e),t),new gi(Jt(t.g),Jt(t.h));if(Ue(t))return t=Xa(e,Jt(t)),new gi(Jt(t.g),t.h);if(30<e.g.length){if(Ue(e)||Ue(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Qu,r=t;0>=r.X(e);)n=Jp(n),r=Jp(r);var s=is(n,1),i=is(r,1);for(r=is(r,2),n=is(n,2);!An(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=is(r,1),n=is(n,1)}return t=Ya(e,s.R(t)),new gi(s,t)}for(s=ws;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ln(n),o=i.R(t);Ue(o)||0<o.X(e);)n-=r,i=ln(n),o=i.R(t);An(i)&&(i=Qu),s=s.add(i),e=Ya(e,o)}return new gi(s,e)}V.gb=function(e){return Xa(this,e).h};V.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new wt(n,this.h&e.h)};V.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new wt(n,this.h|e.h)};V.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new wt(n,this.h^e.h)};function Jp(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new wt(n,e.h)}function is(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new wt(s,e.h)}Qa.prototype.createWebChannel=Qa.prototype.g;ke.prototype.send=ke.prototype.u;ke.prototype.open=ke.prototype.m;ke.prototype.close=ke.prototype.close;$c.NO_ERROR=0;$c.TIMEOUT=8;$c.HTTP_ERROR=6;xy.COMPLETE="complete";Ly.EventType=Eo;Eo.OPEN="a";Eo.CLOSE="b";Eo.ERROR="c";Eo.MESSAGE="d";Gt.prototype.listen=Gt.prototype.O;xt.prototype.listenOnce=xt.prototype.P;xt.prototype.getLastError=xt.prototype.Sa;xt.prototype.getLastErrorCode=xt.prototype.Ia;xt.prototype.getStatus=xt.prototype.da;xt.prototype.getResponseJson=xt.prototype.Wa;xt.prototype.getResponseText=xt.prototype.ja;xt.prototype.send=xt.prototype.ha;xt.prototype.setWithCredentials=xt.prototype.Oa;Je.prototype.digest=Je.prototype.l;Je.prototype.reset=Je.prototype.reset;Je.prototype.update=Je.prototype.j;wt.prototype.add=wt.prototype.add;wt.prototype.multiply=wt.prototype.R;wt.prototype.modulo=wt.prototype.gb;wt.prototype.compare=wt.prototype.X;wt.prototype.toNumber=wt.prototype.ea;wt.prototype.toString=wt.prototype.toString;wt.prototype.getBits=wt.prototype.D;wt.fromNumber=ln;wt.fromString=gv;var cC=function(){return new Qa},lC=function(){return Fc()},Wl=$c,uC=xy,hC=Yr,Zp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ta=Ly,dC=xt,fC=Je,As=wt;const tm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ne.UNAUTHENTICATED=new ne(null),ne.GOOGLE_CREDENTIALS=new ne("google-credentials-uid"),ne.FIRST_PARTY=new ne("first-party-uid"),ne.MOCK_USER=new ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Wh("@firebase/firestore");function em(){return jr.logLevel}function H(e,...t){if(jr.logLevel<=_t.DEBUG){const n=t.map(_d);jr.debug(`Firestore (${ni}): ${e}`,...n)}}function kn(e,...t){if(jr.logLevel<=_t.ERROR){const n=t.map(_d);jr.error(`Firestore (${ni}): ${e}`,...n)}}function Ls(e,...t){if(jr.logLevel<=_t.WARN){const n=t.map(_d);jr.warn(`Firestore (${ni}): ${e}`,...n)}}function _d(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e="Unexpected state"){const t=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+e;throw kn(t),new Error(t)}function Ct(e,t){e||Z()}function ot(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends En{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ne.UNAUTHENTICATED))}shutdown(){}}class mC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gC{constructor(t){this.t=t,this.currentUser=ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ct(typeof r.accessToken=="string"),new _v(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ct(t===null||typeof t=="string"),new ne(t)}}class _C{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yC{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new _C(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vC{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EC{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ct(typeof n.token=="string"),this.R=n.token,new vC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=TC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function vt(e,t){return e<t?-1:e>t?1:0}function Vs(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return qt.fromMillis(Date.now())}static fromDate(t){return qt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new qt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?vt(this.nanoseconds,t.nanoseconds):vt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new rt(t)}static min(){return new rt(new qt(0,0))}static max(){return new rt(new qt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n,r){n===void 0?n=0:n>t.length&&Z(),r===void 0?r=t.length-n:r>t.length-n&&Z(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return so.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof so?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class It extends so{construct(t,n,r){return new It(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new It(n)}static emptyPath(){return new It([])}}const wC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends so{construct(t,n,r){return new ie(t,n,r)}static isValidIdentifier(t){return wC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ie(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new L(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ie(n)}static emptyPath(){return new ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(It.fromString(t))}static fromName(t){return new G(It.fromString(t).popFirst(5))}static empty(){return new G(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&It.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return It.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new It(t.slice()))}}function AC(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=rt.fromTimestamp(r===1e9?new qt(n+1,0):new qt(n,r));return new lr(s,G.empty(),t)}function IC(e){return new lr(e.readTime,e.key,-1)}class lr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(rt.min(),G.empty(),-1)}static max(){return new lr(rt.max(),G.empty(),-1)}}function bC(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=G.comparator(e.documentKey,t.documentKey),n!==0?n:vt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==RC)throw e;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):O.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):O.reject(n)}static resolve(t){return new O((n,r)=>{n(t)})}static reject(t){return new O((n,r)=>{r(t)})}static waitFor(t){return new O((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=O.resolve(!1);for(const r of t)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new O((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new O((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function Ro(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}yd.ae=-1;function Qc(e){return e==null}function Ja(e){return e===0&&1/e==-1/0}function CC(e){return typeof e=="number"&&Number.isInteger(e)&&!Ja(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Xr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function vv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,n){this.comparator=t,this.root=n||Xt.EMPTY}insert(t,n){return new Nt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(t){return new Nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ea(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ea(this.root,t,this.comparator,!1)}getReverseIterator(){return new ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ea(this.root,t,this.comparator,!0)}}class ea{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Xt.RED,this.left=s??Xt.EMPTY,this.right=i??Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Xt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const t=this.left.check();if(t!==this.right.check())throw Z();return t+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Xt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.comparator=t,this.data=new Nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new rm(this.data.getIterator())}getIteratorFrom(t){return new rm(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ce)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ce(this.comparator);return n.data=t,n}}class rm{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.fields=t,t.sort(ie.comparator)}static empty(){return new Oe([])}unionWith(t){let n=new ce(ie.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Oe(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Vs(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ev("Invalid base64 string: "+i):i}}(t);return new ue(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new ue(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return vt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const PC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(e){if(Ct(!!e),typeof e=="string"){let t=0;const n=PC.exec(e);if(Ct(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:$t(e.seconds),nanos:$t(e.nanos)}}function $t(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qr(e){return typeof e=="string"?ue.fromBase64String(e):ue.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vd(e){const t=e.mapValue.fields.__previous_value__;return Yc(t)?vd(t):t}function io(e){const t=ur(e.mapValue.fields.__local_write_time__.timestampValue);return new qt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class oo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof oo&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Yc(e)?4:NC(e)?9007199254740991:10:Z()}function yn(e,t){if(e===t)return!0;const n=Hr(e);if(n!==Hr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return io(e).isEqual(io(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ur(s.timestampValue),a=ur(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return qr(s.bytesValue).isEqual(qr(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return $t(s.geoPointValue.latitude)===$t(i.geoPointValue.latitude)&&$t(s.geoPointValue.longitude)===$t(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $t(s.integerValue)===$t(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=$t(s.doubleValue),a=$t(i.doubleValue);return o===a?Ja(o)===Ja(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Vs(e.arrayValue.values||[],t.arrayValue.values||[],yn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(nm(o)!==nm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!yn(o[c],a[c])))return!1;return!0}(e,t);default:return Z()}}function ao(e,t){return(e.values||[]).find(n=>yn(n,t))!==void 0}function Ms(e,t){if(e===t)return 0;const n=Hr(e),r=Hr(t);if(n!==r)return vt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return vt(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=$t(i.integerValue||i.doubleValue),c=$t(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return sm(e.timestampValue,t.timestampValue);case 4:return sm(io(e),io(t));case 5:return vt(e.stringValue,t.stringValue);case 6:return function(i,o){const a=qr(i),c=qr(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=vt(a[l],c[l]);if(u!==0)return u}return vt(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=vt($t(i.latitude),$t(o.latitude));return a!==0?a:vt($t(i.longitude),$t(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ms(a[l],c[l]);if(u)return u}return vt(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===na.mapValue&&o===na.mapValue)return 0;if(i===na.mapValue)return 1;if(o===na.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=vt(c[h],u[h]);if(d!==0)return d;const f=Ms(a[c[h]],l[u[h]]);if(f!==0)return f}return vt(c.length,u.length)}(e.mapValue,t.mapValue);default:throw Z()}}function sm(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return vt(e,t);const n=ur(e),r=ur(t),s=vt(n.seconds,r.seconds);return s!==0?s:vt(n.nanos,r.nanos)}function Us(e){return Yu(e)}function Yu(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return qr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return G.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Yu(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Yu(n.fields[o])}`;return s+"}"}(e.mapValue):Z()}function Za(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Xu(e){return!!e&&"integerValue"in e}function Ed(e){return!!e&&"arrayValue"in e}function im(e){return!!e&&"nullValue"in e}function om(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ia(e){return!!e&&"mapValue"in e}function xi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Xr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=xi(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xi(e.arrayValue.values[n]);return t}return Object.assign({},e)}function NC(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.value=t}static empty(){return new Ee({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ia(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=xi(n)}setAll(t){let n=ie.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=xi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Ia(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Ia(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Xr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ee(xi(this.value))}}function Tv(e){const t=[];return Xr(e.fields,(n,r)=>{const s=new ie([n]);if(Ia(r)){const i=Tv(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Oe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new re(t,0,rt.min(),rt.min(),rt.min(),Ee.empty(),0)}static newFoundDocument(t,n,r,s){return new re(t,1,n,rt.min(),r,s,0)}static newNoDocument(t,n){return new re(t,2,n,rt.min(),rt.min(),Ee.empty(),0)}static newUnknownDocument(t,n){return new re(t,3,n,rt.min(),rt.min(),Ee.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(rt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof re&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,n){this.position=t,this.inclusive=n}}function am(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cm(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,n="asc"){this.field=t,this.dir=n}}function kC(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{}class Bt extends wv{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new xC(t,n,r):n==="array-contains"?new MC(t,r):n==="in"?new UC(t,r):n==="not-in"?new FC(t,r):n==="array-contains-any"?new $C(t,r):new Bt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new LC(t,r):new VC(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ms(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ze extends wv{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Ze(t,n)}matches(t){return Av(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Av(e){return e.op==="and"}function Iv(e){return DC(e)&&Av(e)}function DC(e){for(const t of e.filters)if(t instanceof Ze)return!1;return!0}function Ju(e){if(e instanceof Bt)return e.field.canonicalString()+e.op.toString()+Us(e.value);if(Iv(e))return e.filters.map(t=>Ju(t)).join(",");{const t=e.filters.map(n=>Ju(n)).join(",");return`${e.op}(${t})`}}function bv(e,t){return e instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(e,t):e instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&bv(o,s.filters[a]),!0):!1}(e,t):void Z()}function Rv(e){return e instanceof Bt?function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`}(e):e instanceof Ze?function(n){return n.op.toString()+" {"+n.getFilters().map(Rv).join(" ,")+"}"}(e):"Filter"}class xC extends Bt{constructor(t,n,r){super(t,n,r),this.key=G.fromName(r.referenceValue)}matches(t){const n=G.comparator(t.key,this.key);return this.matchesComparison(n)}}class LC extends Bt{constructor(t,n){super(t,"in",n),this.keys=Sv("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class VC extends Bt{constructor(t,n){super(t,"not-in",n),this.keys=Sv("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Sv(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class MC extends Bt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ed(n)&&ao(n.arrayValue,this.value)}}class UC extends Bt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ao(this.value.arrayValue,n)}}class FC extends Bt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ao(this.value.arrayValue,n)}}class $C extends Bt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ed(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ao(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function lm(e,t=null,n=[],r=[],s=null,i=null,o=null){return new BC(e,t,n,r,s,i,o)}function Td(e){const t=ot(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ju(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Us(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Us(r)).join(",")),t.he=n}return t.he}function wd(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!kC(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!bv(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!cm(e.startAt,t.startAt)&&cm(e.endAt,t.endAt)}function Zu(e){return G.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function jC(e,t,n,r,s,i,o,a){return new Jr(e,t,n,r,s,i,o,a)}function Ad(e){return new Jr(e)}function um(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Id(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Xc(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function bd(e){return e.collectionGroup!==null}function bs(e){const t=ot(e);if(t.Pe===null){t.Pe=[];const n=Xc(t),r=Id(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Is(n)),t.Pe.push(new Is(ie.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Is(ie.keyField(),i))}}}return t.Pe}function Dn(e){const t=ot(e);return t.Ie||(t.Ie=qC(t,bs(e))),t.Ie}function qC(e,t){if(e.limitType==="F")return lm(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Is(s.field,i)});const n=e.endAt?new Fs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fs(e.startAt.position,e.startAt.inclusive):null;return lm(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function th(e,t){t.getFirstInequalityField(),Xc(e);const n=e.filters.concat([t]);return new Jr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tc(e,t,n){return new Jr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Jc(e,t){return wd(Dn(e),Dn(t))&&e.limitType===t.limitType}function Cv(e){return`${Td(Dn(e))}|lt:${e.limitType}`}function eh(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Rv(s)).join(", ")}]`),Qc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Us(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Us(s)).join(",")),`Target(${r})`}(Dn(e))}; limitType=${e.limitType})`}function Zc(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of bs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=am(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,bs(r),s)||r.endAt&&!function(o,a,c){const l=am(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,bs(r),s))}(e,t)}function HC(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Pv(e){return(t,n)=>{let r=!1;for(const s of bs(e)){const i=WC(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WC(e,t,n){const r=e.field.isKeyField()?G.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ms(c,l):Z()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Xr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return vv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new Nt(G.comparator);function xn(){return KC}const Ov=new Nt(G.comparator);function Ii(...e){let t=Ov;for(const n of e)t=t.insert(n.key,n);return t}function Nv(e){let t=Ov;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Pr(){return Li()}function kv(){return Li()}function Li(){return new ri(e=>e.toString(),(e,t)=>e.isEqual(t))}const zC=new Nt(G.comparator),GC=new ce(G.comparator);function ut(...e){let t=GC;for(const n of e)t=t.add(n);return t}const QC=new ce(vt);function YC(){return QC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ja(t)?"-0":t}}function xv(e){return{integerValue:""+e}}function XC(e,t){return CC(t)?xv(t):Dv(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this._=void 0}}function JC(e,t,n){return e instanceof ec?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yc(i)&&(i=vd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof co?Vv(e,t):e instanceof lo?Mv(e,t):function(s,i){const o=Lv(s,i),a=hm(o)+hm(s.Ee);return Xu(o)&&Xu(s.Ee)?xv(a):Dv(s.serializer,a)}(e,t)}function ZC(e,t,n){return e instanceof co?Vv(e,t):e instanceof lo?Mv(e,t):n}function Lv(e,t){return e instanceof nc?function(r){return Xu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ec extends tl{}class co extends tl{constructor(t){super(),this.elements=t}}function Vv(e,t){const n=Uv(t);for(const r of e.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class lo extends tl{constructor(t){super(),this.elements=t}}function Mv(e,t){let n=Uv(t);for(const r of e.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class nc extends tl{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function hm(e){return $t(e.integerValue||e.doubleValue)}function Uv(e){return Ed(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function tP(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof co&&s instanceof co||r instanceof lo&&s instanceof lo?Vs(r.elements,s.elements,yn):r instanceof nc&&s instanceof nc?yn(r.Ee,s.Ee):r instanceof ec&&s instanceof ec}(e.transform,t.transform)}class eP{constructor(t,n){this.version=t,this.transformResults=n}}class Ye{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ye}static exists(t){return new Ye(void 0,t)}static updateTime(t){return new Ye(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ba(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class el{}function Fv(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Rd(e.key,Ye.none()):new So(e.key,e.data,Ye.none());{const n=e.data,r=Ee.empty();let s=new ce(ie.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _r(e.key,r,new Oe(s.toArray()),Ye.none())}}function nP(e,t,n){e instanceof So?function(s,i,o){const a=s.value.clone(),c=fm(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof _r?function(s,i,o){if(!ba(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=fm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll($v(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Vi(e,t,n,r){return e instanceof So?function(i,o,a,c){if(!ba(i.precondition,o))return a;const l=i.value.clone(),u=pm(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof _r?function(i,o,a,c){if(!ba(i.precondition,o))return a;const l=pm(i.fieldTransforms,c,o),u=o.data;return u.setAll($v(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return ba(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function rP(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Lv(r.transform,s||null);i!=null&&(n===null&&(n=Ee.empty()),n.set(r.field,i))}return n||null}function dm(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vs(r,s,(i,o)=>tP(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class So extends el{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _r extends el{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $v(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function fm(e,t,n){const r=new Map;Ct(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,ZC(o,a,n[s]))}return r}function pm(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,JC(i,o,t))}return r}class Rd extends el{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sP extends el{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&nP(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Vi(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Vi(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=kv();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Fv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(rt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ut())}isEqual(t){return this.batchId===t.batchId&&Vs(this.mutations,t.mutations,(n,r)=>dm(n,r))&&Vs(this.baseMutations,t.baseMutations,(n,r)=>dm(n,r))}}class Sd{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){Ct(t.mutations.length===r.length);let s=function(){return zC}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Sd(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft,ft;function cP(e){switch(e){default:return Z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Bv(e){if(e===void 0)return kn("GRPC error has no .code"),T.UNKNOWN;switch(e){case Ft.OK:return T.OK;case Ft.CANCELLED:return T.CANCELLED;case Ft.UNKNOWN:return T.UNKNOWN;case Ft.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ft.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ft.INTERNAL:return T.INTERNAL;case Ft.UNAVAILABLE:return T.UNAVAILABLE;case Ft.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ft.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ft.NOT_FOUND:return T.NOT_FOUND;case Ft.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ft.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ft.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ft.ABORTED:return T.ABORTED;case Ft.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ft.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ft.DATA_LOSS:return T.DATA_LOSS;default:return Z()}}(ft=Ft||(Ft={}))[ft.OK=0]="OK",ft[ft.CANCELLED=1]="CANCELLED",ft[ft.UNKNOWN=2]="UNKNOWN",ft[ft.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ft[ft.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ft[ft.NOT_FOUND=5]="NOT_FOUND",ft[ft.ALREADY_EXISTS=6]="ALREADY_EXISTS",ft[ft.PERMISSION_DENIED=7]="PERMISSION_DENIED",ft[ft.UNAUTHENTICATED=16]="UNAUTHENTICATED",ft[ft.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ft[ft.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ft[ft.ABORTED=10]="ABORTED",ft[ft.OUT_OF_RANGE=11]="OUT_OF_RANGE",ft[ft.UNIMPLEMENTED=12]="UNIMPLEMENTED",ft[ft.INTERNAL=13]="INTERNAL",ft[ft.UNAVAILABLE=14]="UNAVAILABLE",ft[ft.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new As([4294967295,4294967295],0);function mm(e){const t=lP().encode(e),n=new fC;return n.update(t),new Uint8Array(n.digest())}function gm(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new As([n,r],0),new As([s,i],0)]}class Cd{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new bi(`Invalid padding: ${n}`);if(r<0)throw new bi(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new bi(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new bi(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=As.fromNumber(this.Ae)}Ve(t,n,r){let s=t.add(n.multiply(As.fromNumber(r)));return s.compare(uP)===1&&(s=new As([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=mm(t),[r,s]=gm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Cd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=mm(t),[r,s]=gm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Co.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new nl(rt.min(),s,new Nt(vt),xn(),ut())}}class Co{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Co(r,n,ut(),ut(),ut())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,n,r,s){this.ge=t,this.removedTargetIds=n,this.key=r,this.pe=s}}class jv{constructor(t,n){this.targetId=t,this.ye=n}}class qv{constructor(t,n,r=ue.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _m{constructor(){this.we=0,this.Se=vm(),this.be=ue.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=ut(),n=ut(),r=ut();return this.Se.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new Co(this.be,this.De,t,n,r)}Oe(){this.ve=!1,this.Se=vm()}Ne(t,n){this.ve=!0,this.Se=this.Se.insert(t,n)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class hP{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=xn(),this.Ue=ym(),this.We=new Nt(vt)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const r=this.Je(n);switch(t.state){case 0:this.Ye(n)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(t.resumeToken));break;default:Z()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(t){const n=t.targetId,r=t.ye.count,s=this.et(n);if(s){const i=s.target;if(Zu(i))if(r===0){const o=new G(i.path);this.je(n,o,re.newNoDocument(o,rt.min()))}else Ct(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(t),c=a?this.rt(a,t,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=qr(r).toUint8Array()}catch(c){if(c instanceof Ev)return Ls("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Cd(o,s,i)}catch(c){return Ls(c instanceof bi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(t,n,r){return n.ye.count===r-this.ot(t,n.targetId)?0:2}ot(t,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(t){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Zu(a.target)){const c=new G(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,re.newNoDocument(c,t))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=ut();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(t));const s=new nl(t,n,this.We,this.$e,r);return this.$e=xn(),this.Ue=ym(),this.We=new Nt(vt),s}ze(t,n){if(!this.Ye(t))return;const r=this.ut(t,n.key)?2:0;this.Je(t).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}je(t,n,r){if(!this.Ye(t))return;const s=this.Je(t);this.ut(t,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new _m,this.Ke.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new ce(vt),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||H("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.Ce?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new _m),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}ut(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function ym(){return new Nt(G.comparator)}function vm(){return new Nt(G.comparator)}const dP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pP=(()=>({and:"AND",or:"OR"}))();class mP{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function nh(e,t){return e.useProto3Json||Qc(t)?t:{value:t}}function rc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hv(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function gP(e,t){return rc(e,t.toTimestamp())}function dn(e){return Ct(!!e),rt.fromTimestamp(function(n){const r=ur(n);return new qt(r.seconds,r.nanos)}(e))}function Pd(e,t){return function(r){return new It(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Wv(e){const t=It.fromString(e);return Ct(Qv(t)),t}function rh(e,t){return Pd(e.databaseId,t.path)}function Kl(e,t){const n=Wv(t);if(n.get(1)!==e.databaseId.projectId)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(Kv(n))}function sh(e,t){return Pd(e.databaseId,t)}function _P(e){const t=Wv(e);return t.length===4?It.emptyPath():Kv(t)}function ih(e){return new It(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Kv(e){return Ct(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Em(e,t,n){return{name:rh(e,t),fields:n.value.mapValue.fields}}function yP(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ct(u===void 0||typeof u=="string"),ue.fromBase64String(u||"")):(Ct(u===void 0||u instanceof Uint8Array),ue.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Bv(l.code);return new L(u,l.message||"")}(o);n=new qv(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Kl(e,r.document.name),i=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):rt.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=re.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ra(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Kl(e,r.document),i=r.readTime?dn(r.readTime):rt.min(),o=re.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ra([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Kl(e,r.document),i=r.removedTargetIds||[];n=new Ra([],i,s,null)}else{if(!("filter"in t))return Z();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new aP(s,i),a=r.targetId;n=new jv(a,o)}}return n}function vP(e,t){let n;if(t instanceof So)n={update:Em(e,t.key,t.value)};else if(t instanceof Rd)n={delete:rh(e,t.key)};else if(t instanceof _r)n={update:Em(e,t.key,t.data),updateMask:CP(t.fieldMask)};else{if(!(t instanceof sP))return Z();n={verify:rh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ec)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nc)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw Z()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(e,t.precondition)),n}function EP(e,t){return e&&e.length>0?(Ct(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?dn(s.updateTime):dn(i);return o.isEqual(rt.min())&&(o=dn(i)),new eP(o,s.transformResults||[])}(n,t))):[]}function TP(e,t){return{documents:[sh(e,t.path)]}}function wP(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=sh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=sh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Gv(Ze.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:us(h.field),direction:bP(h.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=nh(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function AP(e){let t=_P(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ct(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=zv(h);return d instanceof Ze&&Iv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Is(hs(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Qc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Fs(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Fs(f,d)}(n.endAt)),jC(t,s,o,i,a,"F",c,l)}function IP(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function zv(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return Bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hs(n.unaryFilter.field);return Bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(n.unaryFilter.field);return Bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return Bt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(e):e.fieldFilter!==void 0?function(n){return Bt.create(hs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Ze.create(n.compositeFilter.filters.map(r=>zv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(e):Z()}function bP(e){return dP[e]}function RP(e){return fP[e]}function SP(e){return pP[e]}function us(e){return{fieldPath:e.canonicalString()}}function hs(e){return ie.fromServerFormat(e.fieldPath)}function Gv(e){return e instanceof Bt?function(n){if(n.op==="=="){if(om(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NAN"}};if(im(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(om(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NAN"}};if(im(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(n.field),op:RP(n.op),value:n.value}}}(e):e instanceof Ze?function(n){const r=n.getFilters().map(s=>Gv(s));return r.length===1?r[0]:{compositeFilter:{op:SP(n.op),filters:r}}}(e):Z()}function CP(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Qv(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,n,r,s,i=rt.min(),o=rt.min(),a=ue.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new tr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(t){this.ht=t}}function OP(e){const t=AP({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?tc(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(){this._n=new kP}addToCollectionParentIndex(t,n){return this._n.add(n),O.resolve()}getCollectionParents(t,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return O.resolve()}deleteFieldIndex(t,n){return O.resolve()}getDocumentsMatchingTarget(t,n){return O.resolve(null)}getIndexType(t,n){return O.resolve(0)}getFieldIndexes(t,n){return O.resolve([])}getNextCollectionGroupToUpdate(t){return O.resolve(null)}getMinOffset(t,n){return O.resolve(lr.min())}getMinOffsetFromCollectionGroup(t,n){return O.resolve(lr.min())}updateCollectionGroup(t,n,r){return O.resolve()}updateIndexEntries(t,n){return O.resolve()}}class kP{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new ce(It.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ce(It.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new $s(0)}static Bn(){return new $s(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(){this.changes=new ri(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,re.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Vi(r.mutation,s,Oe.empty(),qt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ut()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ut()){const s=Pr();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Ii();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Pr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ut()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=xn();const o=Li(),a=function(){return Li()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof _r)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Vi(u.mutation,l,u.mutation.getFieldMask(),qt.now())):o.set(l.key,Oe.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new xP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Li();let s=new Nt((o,a)=>o-a),i=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Oe.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ut()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=kv();u.forEach(d=>{if(!i.has(d)){const f=Fv(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):bd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):O.resolve(Pr());let a=-1,c=i;return o.next(l=>O.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?O.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,ut())).next(u=>({batchId:a,changes:Nv(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new G(n)).next(r=>{let s=Ii();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=Ii();return this.indexManager.getCollectionParents(t,s).next(o=>O.forEach(o,a=>{const c=function(u,h){return new Jr(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,re.newInvalidDocument(l)))});let o=Ii();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Vi(l.mutation,c,Oe.empty(),qt.now()),Zc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:dn(s.createTime)}}(n)),O.resolve()}getNamedQuery(t,n){return O.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:OP(s.bundledQuery),readTime:dn(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(){this.overlays=new Nt(G.comparator),this.hr=new Map}getOverlay(t,n){return O.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Pr();return O.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.It(t,n,i)}),O.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(t,n,r){const s=Pr(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Nt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Pr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return O.resolve(a)}It(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oP(n,r));let i=this.hr.get(n);i===void 0&&(i=ut(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.Pr=new ce(Wt.Ir),this.Tr=new ce(Wt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Wt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Wt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new G(new It([])),r=new Wt(n,t),s=new Wt(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new G(new It([])),r=new Wt(n,t),s=new Wt(n,t+1);let i=ut();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Wt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Wt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return G.comparator(t.key,n.key)||vt(t.pr,n.pr)}static Er(t,n){return vt(t.pr,n.pr)||G.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ce(Wt.Ir)}checkEmpty(t){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iP(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Wt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(t,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Wt(n,0),s=new Wt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ce(vt);return n.forEach(s=>{const i=new Wt(s,0),o=new Wt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Wt(new G(i),0);let a=new ce(vt);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Ct(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,s=>{const i=new Wt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Wt(n,0),s=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,O.resolve()}vr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(t){this.Cr=t,this.docs=function(){return new Nt(G.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():re.newInvalidDocument(n))}getEntries(t,n){let r=xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():re.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=xn();const o=n.path,a=new G(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||bC(IC(u),r)<=0||(s.has(u.key)||Zc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(t,n,r,s){Z()}Fr(t,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new $P(this)}getSize(t){return O.resolve(this.size)}}class $P extends DP{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(t){this.persistence=t,this.Mr=new ri(n=>Td(n),wd),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Od,this.targetCount=0,this.Br=$s.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(t){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return O.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new $s(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(t,n){return this.qn(n),O.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(t){return O.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(t,n){return O.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(t,n){this.Lr={},this.overlays={},this.kr=new yd(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new BP(this),this.indexManager=new NP,this.remoteDocumentCache=function(s){return new FP(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new PP(n),this.$r=new VP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new MP,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new UP(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){H("MemoryPersistence","Starting transaction:",t);const s=new qP(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return O.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class qP extends SC{constructor(t){super(),this.currentSequenceNumber=t}}class Nd{constructor(t){this.persistence=t,this.zr=new Od,this.jr=null}static Hr(t){return new Nd(t)}get Jr(){if(this.jr)return this.jr;throw Z()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const s=G.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,rt.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=ut(),s=ut();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kd(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.$i=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){return this.Wi(t,n).next(i=>i||this.Gi(t,n,s,r)).next(i=>i||this.zi(t,n))}Wi(t,n){if(um(n))return O.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=tc(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=ut(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(t,tc(n,null,"F")):this.Ji(t,l,n,c)}))})))}Gi(t,n,r,s){return um(n)||s.isEqual(rt.min())?this.zi(t,n):this.Ui.getDocuments(t,r).next(i=>{const o=this.ji(n,i);return this.Hi(n,o,r,s)?this.zi(t,n):(em()<=_t.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),eh(n)),this.Ji(t,o,n,AC(s,-1)))})}ji(t,n){let r=new ce(Pv(t));return n.forEach((s,i)=>{Zc(t,i)&&(r=r.add(i))}),r}Hi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}zi(t,n){return em()<=_t.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",eh(n)),this.Ui.getDocumentsMatchingQuery(t,n,lr.min())}Ji(t,n,r,s){return this.Ui.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(t,n,r,s){this.persistence=t,this.Yi=n,this.serializer=s,this.Zi=new Nt(vt),this.Xi=new ri(i=>Td(i),wd),this.es=new Map,this.ts=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this.ns(r)}ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new LP(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Zi))}}function KP(e,t,n,r){return new WP(e,t,n,r)}async function Yv(e,t){const n=ot(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ns(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ut();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function zP(e,t){const n=ot(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=O.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(c,g)).next(y=>{const v=l.docVersions.get(g);Ct(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ut();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Xv(e){const t=ot(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function GP(e,t){const n=ot(e),r=t.snapshotVersion;let s=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});s=n.Zi;const a=[];t.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(ue.EMPTY_BYTE_STRING,rt.min()).withLastLimboFreeSnapshotVersion(rt.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(y,v,A){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(i,f))});let c=xn(),l=ut();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(QP(i,o,t.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(rt.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Zi=s,i))}function QP(e,t,n){let r=ut(),s=ut();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=xn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(rt.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:s}})}function YP(e,t){const n=ot(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function XP(e,t){const n=ot(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,O.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new tr(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Zi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(t,r.targetId)),r})}async function oh(e,t,n){const r=ot(e),s=r.Zi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ro(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Zi=r.Zi.remove(t),r.Xi.delete(s.target)}function Tm(e,t,n){const r=ot(e);let s=rt.min(),i=ut();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=ot(c),d=h.Xi.get(u);return d!==void 0?O.resolve(h.Zi.get(d)):h.Qr.getTargetData(l,u)}(r,o,Dn(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,t,n?s:rt.min(),n?i:ut())).next(a=>(JP(r,HC(t),a),{documents:a,_s:i})))}function JP(e,t,n){let r=e.es.get(t)||rt.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.es.set(t,r)}class wm{constructor(){this.activeTargetIds=YC()}Is(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ts(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ps(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ZP{constructor(){this.Ys=new wm,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Ys.Is(t),this.Zs[t]||"not-current"}updateQueryState(t,n,r){this.Zs[t]=n}removeLocalQueryTarget(t){this.Ys.Ts(t)}isLocalQueryTarget(t){return this.Ys.activeTargetIds.has(t)}clearQueryState(t){delete this.Zs[t]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(t){return this.Ys.activeTargetIds.has(t)}start(){return this.Ys=new wm,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{Xs(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}io(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra=null;function zl(){return ra===null?ra=function(){return 268435456+Math.round(2147483648*Math.random())}():ra++,"0x"+ra.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(t){this._o=t._o,this.ao=t.ao}uo(t){this.co=t}lo(t){this.ho=t}onMessage(t){this.Po=t}close(){this.ao()}send(t){this._o(t)}Io(){this.co()}To(t){this.ho(t)}Eo(t){this.Po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="WebChannelConnection";class rO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${s}/databases/${i}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get mo(){return!1}fo(n,r,s,i,o){const a=zl(),c=this.po(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,i,o),this.wo(n,c,l,s).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ls("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}So(n,r,s,i,o,a){return this.fo(n,r,s,i,o)}yo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ni}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}po(n,r){const s=eO[n];return`${this.Ao}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}wo(t,n,r,s){const i=zl();return new Promise((o,a)=>{const c=new dC;c.setWithCredentials(!0),c.listenOnce(uC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Wl.NO_ERROR:const u=c.getResponseJson();H(ee,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Wl.TIMEOUT:H(ee,`RPC '${t}' ${i} timed out`),a(new L(T.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const h=c.getStatus();if(H(ee,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const A=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(A)>=0?A:T.UNKNOWN}(f.status);a(new L(g,f.message))}else a(new L(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new L(T.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(ee,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);H(ee,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}bo(t,n,r){const s=zl(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=cC(),a=lC(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");H(ee,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new nO({_o:v=>{f?H(ee,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(d||(H(ee,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),H(ee,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},ao:()=>h.close()}),y=(v,A,R)=>{v.listen(A,N=>{try{R(N)}catch(w){setTimeout(()=>{throw w},0)}})};return y(h,ta.EventType.OPEN,()=>{f||H(ee,`RPC '${t}' stream ${s} transport opened.`)}),y(h,ta.EventType.CLOSE,()=>{f||(f=!0,H(ee,`RPC '${t}' stream ${s} transport closed`),g.To())}),y(h,ta.EventType.ERROR,v=>{f||(f=!0,Ls(ee,`RPC '${t}' stream ${s} transport errored:`,v),g.To(new L(T.UNAVAILABLE,"The operation could not be completed")))}),y(h,ta.EventType.MESSAGE,v=>{var A;if(!f){const R=v.data[0];Ct(!!R);const N=R,w=N.error||((A=N[0])===null||A===void 0?void 0:A.error);if(w){H(ee,`RPC '${t}' stream ${s} received error:`,w);const U=w.status;let $=function(j){const J=Ft[j];if(J!==void 0)return Bv(J)}(U),Y=w.message;$===void 0&&($=T.INTERNAL,Y="Unknown error status: "+U+" with message "+w.message),f=!0,g.To(new L($,Y)),h.close()}else H(ee,`RPC '${t}' stream ${s} received:`,R),g.Eo(R)}}),y(a,hC.STAT_EVENT,v=>{v.stat===Zp.PROXY?H(ee,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===Zp.NOPROXY&&H(ee,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Io()},0),g}}function Gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(e){return new mP(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Do=r,this.vo=s,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(t){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),t())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.ko=r,this.qo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new Jv(t,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(t){this.Zo(),this.stream.send(t)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(t,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,t!==4?this.Uo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.lo(n)}e_(){}auth(){this.state=1;const t=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qo===n&&this.n_(r,s)},r=>{t(()=>{const s=new L(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(s)})})}n_(t,n){const r=this.t_(this.Qo);this.stream=this.i_(t,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(s=>{r(()=>this.r_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(t){return H("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}t_(t){return n=>{this.oi.enqueueAndForget(()=>this.Qo===t?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sO extends Zv{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}i_(t,n){return this.connection.bo("Listen",t,n)}onMessage(t){this.Uo.reset();const n=yP(this.serializer,t),r=function(i){if(!("targetChange"in i))return rt.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?rt.min():o.readTime?dn(o.readTime):rt.min()}(t);return this.listener.s_(n,r)}o_(t){const n={};n.database=ih(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Zu(c)?{documents:TP(i,c)}:{query:wP(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Hv(i,o.resumeToken);const l=nh(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(rt.min())>0){a.readTime=rc(i,o.snapshotVersion.toTimestamp());const l=nh(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=IP(this.serializer,t);r&&(n.labels=r),this.Yo(n)}__(t){const n={};n.database=ih(this.serializer),n.removeTarget=t,this.Yo(n)}}class iO extends Zv{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(t,n){return this.connection.bo("Write",t,n)}onMessage(t){if(Ct(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_){this.Uo.reset();const n=EP(t.writeResults,t.commitTime),r=dn(t.commitTime);return this.listener.l_(r,n)}return Ct(!t.writeResults||t.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const t={};t.database=ih(this.serializer),this.Yo(t)}c_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>vP(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.I_=!1}T_(){if(this.I_)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}fo(t,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.fo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(T.UNKNOWN,s.toString())})}So(t,n,r,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(T.UNKNOWN,i.toString())})}terminate(){this.I_=!0}}class aO{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(t){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.m_("Offline")))}set(t){this.p_(),this.d_=0,t==="Online"&&(this.R_=!1),this.m_(t)}m_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}f_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(kn(n),this.R_=!1):H("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ot(c);l.S_.add(4),await Po(l),l.v_.set("Unknown"),l.S_.delete(4),await sl(l)}(this))})}),this.v_=new aO(r,s)}}async function sl(e){if(Zr(e))for(const t of e.b_)await t(!0)}async function Po(e){for(const t of e.b_)await t(!1)}function tE(e,t){const n=ot(e);n.w_.has(t.targetId)||(n.w_.set(t.targetId,t),Ld(n)?xd(n):si(n).Go()&&Dd(n,t))}function eE(e,t){const n=ot(e),r=si(n);n.w_.delete(t),r.Go()&&nE(n,t),n.w_.size===0&&(r.Go()?r.Ho():Zr(n)&&n.v_.set("Unknown"))}function Dd(e,t){if(e.C_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}si(e).o_(t)}function nE(e,t){e.C_.Le(t),si(e).__(t)}function xd(e){e.C_=new hP({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.w_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),si(e).start(),e.v_.V_()}function Ld(e){return Zr(e)&&!si(e).Wo()&&e.w_.size>0}function Zr(e){return ot(e).S_.size===0}function rE(e){e.C_=void 0}async function lO(e){e.w_.forEach((t,n)=>{Dd(e,t)})}async function uO(e,t){rE(e),Ld(e)?(e.v_.g_(t),xd(e)):e.v_.set("Unknown")}async function hO(e,t,n){if(e.v_.set("Online"),t instanceof qv&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.w_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.w_.delete(a),s.C_.removeTarget(a))}(e,t)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await sc(e,r)}else if(t instanceof Ra?e.C_.Ge(t):t instanceof jv?e.C_.Xe(t):e.C_.He(t),!n.isEqual(rt.min()))try{const r=await Xv(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.w_.get(l);u&&i.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.w_.get(c);if(!u)return;i.w_.set(c,u.withResumeToken(ue.EMPTY_BYTE_STRING,u.snapshotVersion)),nE(i,c);const h=new tr(u.target,c,l,u.sequenceNumber);Dd(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await sc(e,r)}}async function sc(e,t,n){if(!Ro(t))throw t;e.S_.add(1),await Po(e),e.v_.set("Offline"),n||(n=()=>Xv(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),e.S_.delete(1),await sl(e)})}function sE(e,t){return t().catch(n=>sc(e,n,t))}async function il(e){const t=ot(e),n=hr(t);let r=t.y_.length>0?t.y_[t.y_.length-1].batchId:-1;for(;dO(t);)try{const s=await YP(t.localStore,r);if(s===null){t.y_.length===0&&n.Ho();break}r=s.batchId,fO(t,s)}catch(s){await sc(t,s)}iE(t)&&oE(t)}function dO(e){return Zr(e)&&e.y_.length<10}function fO(e,t){e.y_.push(t);const n=hr(e);n.Go()&&n.u_&&n.c_(t.mutations)}function iE(e){return Zr(e)&&!hr(e).Wo()&&e.y_.length>0}function oE(e){hr(e).start()}async function pO(e){hr(e).P_()}async function mO(e){const t=hr(e);for(const n of e.y_)t.c_(n.mutations)}async function gO(e,t,n){const r=e.y_.shift(),s=Sd.from(r,t,n);await sE(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await il(e)}async function _O(e,t){t&&hr(e).u_&&await async function(r,s){if(function(o){return cP(o)&&o!==T.ABORTED}(s.code)){const i=r.y_.shift();hr(r).jo(),await sE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await il(r)}}(e,t),iE(e)&&oE(e)}async function Im(e,t){const n=ot(e);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.S_.add(3),await Po(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.S_.delete(3),await sl(n)}async function yO(e,t){const n=ot(e);t?(n.S_.delete(2),await sl(n)):t||(n.S_.add(2),await Po(n),n.v_.set("Unknown"))}function si(e){return e.F_||(e.F_=function(n,r,s){const i=ot(n);return i.T_(),new sO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:lO.bind(null,e),lo:uO.bind(null,e),s_:hO.bind(null,e)}),e.b_.push(async t=>{t?(e.F_.jo(),Ld(e)?xd(e):e.v_.set("Unknown")):(await e.F_.stop(),rE(e))})),e.F_}function hr(e){return e.M_||(e.M_=function(n,r,s){const i=ot(n);return i.T_(),new iO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:pO.bind(null,e),lo:_O.bind(null,e),h_:mO.bind(null,e),l_:gO.bind(null,e)}),e.b_.push(async t=>{t?(e.M_.jo(),await il(e)):(await e.M_.stop(),e.y_.length>0&&(H("RemoteStore",`Stopping write stream with ${e.y_.length} pending writes`),e.y_=[]))})),e.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Vd(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(e,t){if(kn("AsyncQueue",`${t}: ${e}`),Ro(e))return new L(T.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t){this.comparator=t?(n,r)=>t(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Ii(),this.sortedSet=new Nt(this.comparator)}static emptySet(t){return new Rs(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Rs)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.x_=new Nt(G.comparator)}track(t){const n=t.doc.key,r=this.x_.get(n);r?t.type!==0&&r.type===3?this.x_=this.x_.insert(n,t):t.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.x_=this.x_.remove(n):t.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):Z():this.x_=this.x_.insert(n,t)}O_(){const t=[];return this.x_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Bs{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bs(t,n,Rs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.N_=void 0,this.listeners=[]}}class EO{constructor(){this.queries=new ri(t=>Cv(t),Jc),this.onlineState="Unknown",this.B_=new Set}}async function aE(e,t){const n=ot(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new vO),s)try{i.N_=await n.onListen(r)}catch(o){const a=Md(o,`Initialization of query '${eh(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.L_(n.onlineState),i.N_&&t.k_(i.N_)&&Ud(n)}async function cE(e,t){const n=ot(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function TO(e,t){const n=ot(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.k_(s)&&(r=!0);o.N_=s}}r&&Ud(n)}function wO(e,t,n){const r=ot(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Ud(e){e.B_.forEach(t=>{t.next()})}class lE{constructor(t,n,r){this.query=t,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Bs(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Q_?this.U_(t)&&(this.q_.next(t),n=!0):this.W_(t,this.onlineState)&&(this.G_(t),n=!0),this.K_=t,n}onError(t){this.q_.error(t)}L_(t){this.onlineState=t;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,t)&&(this.G_(this.K_),n=!0),n}W_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}U_(t){if(t.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(t){t=Bs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Q_=!0,this.q_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t){this.key=t}}class hE{constructor(t){this.key=t}}class AO{constructor(t,n){this.query=t,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=ut(),this.mutatedKeys=ut(),this.ia=Pv(t),this.sa=new Rs(this.ia)}get oa(){return this.ta}_a(t,n){const r=n?n.aa:new bm,s=n?n.sa:this.sa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const d=s.get(u),f=Zc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(r.track({type:3,doc:f}),v=!0):this.ua(d,f)||(r.track({type:2,doc:f}),v=!0,(c&&this.ia(f,c)>0||l&&this.ia(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:i}}ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.sa;this.sa=t.sa,this.mutatedKeys=t.mutatedKeys;const i=t.aa.O_();i.sort((l,u)=>function(d,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return g(d)-g(f)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,i.length!==0||c?{snapshot:new Bs(this.query,t.sa,s,i,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new bm,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(t){return!this.ta.has(t)&&!!this.sa.has(t)&&!this.sa.get(t).hasLocalMutations}ca(t){t&&(t.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=t.current)}la(){if(!this.current)return[];const t=this.ra;this.ra=ut(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return t.forEach(r=>{this.ra.has(r)||n.push(new hE(r))}),this.ra.forEach(r=>{t.has(r)||n.push(new uE(r))}),n}Ia(t){this.ta=t._s,this.ra=ut();const n=this._a(t.documents);return this.applyChanges(n,!0)}Ta(){return Bs.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class IO{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class bO{constructor(t){this.key=t,this.Ea=!1}}class RO{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new ri(a=>Cv(a),Jc),this.Ra=new Map,this.Va=new Set,this.ma=new Nt(G.comparator),this.fa=new Map,this.ga=new Od,this.pa={},this.ya=new Map,this.wa=$s.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function SO(e,t){const n=MO(e);let r,s;const i=n.Aa.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ta();else{const o=await XP(n.localStore,Dn(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await CO(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&tE(n.remoteStore,o)}return s}async function CO(e,t,n,r,s){e.ba=(h,d,f)=>async function(y,v,A,R){let N=v.view._a(A);N.Hi&&(N=await Tm(y.localStore,v.query,!1).then(({documents:$})=>v.view._a($,N)));const w=R&&R.targetChanges.get(v.targetId),U=v.view.applyChanges(N,y.isPrimaryClient,w);return Sm(y,v.targetId,U.ha),U.snapshot}(e,h,d,f);const i=await Tm(e.localStore,t,!0),o=new AO(t,i._s),a=o._a(i.documents),c=Co.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);Sm(e,n,l.ha);const u=new IO(t,n,o);return e.Aa.set(t,u),e.Ra.has(n)?e.Ra.get(n).push(t):e.Ra.set(n,[t]),l.snapshot}async function PO(e,t){const n=ot(e),r=n.Aa.get(t),s=n.Ra.get(r.targetId);if(s.length>1)return n.Ra.set(r.targetId,s.filter(i=>!Jc(i,t))),void n.Aa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await oh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),eE(n.remoteStore,r.targetId),ah(n,r.targetId)}).catch(bo)):(ah(n,r.targetId),await oh(n.localStore,r.targetId,!0))}async function OO(e,t,n){const r=UO(e);try{const s=await function(o,a){const c=ot(o),l=qt.now(),u=a.reduce((f,g)=>f.add(g.key),ut());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=xn(),y=ut();return c.ts.getEntries(f,u).next(v=>{g=v,g.forEach((A,R)=>{R.isValidDocument()||(y=y.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const A=[];for(const R of a){const N=rP(R,h.get(R.key).overlayedDocument);N!=null&&A.push(new _r(R.key,N,Tv(N.value.mapValue),Ye.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,A,a)}).next(v=>{d=v;const A=v.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,v.batchId,A)})}).then(()=>({batchId:d.batchId,changes:Nv(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new Nt(vt)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Oo(r,s.changes),await il(r.remoteStore)}catch(s){const i=Md(s,"Failed to persist write");n.reject(i)}}async function dE(e,t){const n=ot(e);try{const r=await GP(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.fa.get(i);o&&(Ct(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ea=!0:s.modifiedDocuments.size>0?Ct(o.Ea):s.removedDocuments.size>0&&(Ct(o.Ea),o.Ea=!1))}),await Oo(n,r,t)}catch(r){await bo(r)}}function Rm(e,t,n){const r=ot(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Aa.forEach((i,o)=>{const a=o.view.L_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ot(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.L_(a)&&(l=!0)}),l&&Ud(c)}(r.eventManager,t),s.length&&r.da.s_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function NO(e,t,n){const r=ot(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.fa.get(t),i=s&&s.key;if(i){let o=new Nt(G.comparator);o=o.insert(i,re.newNoDocument(i,rt.min()));const a=ut().add(i),c=new nl(rt.min(),new Map,new Nt(vt),o,a);await dE(r,c),r.ma=r.ma.remove(i),r.fa.delete(t),Fd(r)}else await oh(r.localStore,t,!1).then(()=>ah(r,t,n)).catch(bo)}async function kO(e,t){const n=ot(e),r=t.batch.batchId;try{const s=await zP(n.localStore,t);pE(n,r,null),fE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oo(n,s)}catch(s){await bo(s)}}async function DO(e,t,n){const r=ot(e);try{const s=await function(o,a){const c=ot(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ct(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);pE(r,t,n),fE(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Oo(r,s)}catch(s){await bo(s)}}function fE(e,t){(e.ya.get(t)||[]).forEach(n=>{n.resolve()}),e.ya.delete(t)}function pE(e,t,n){const r=ot(e);let s=r.pa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.pa[r.currentUser.toKey()]=s}}function ah(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ra.get(t))e.Aa.delete(r),n&&e.da.Da(r,n);e.Ra.delete(t),e.isPrimaryClient&&e.ga.Vr(t).forEach(r=>{e.ga.containsKey(r)||mE(e,r)})}function mE(e,t){e.Va.delete(t.path.canonicalString());const n=e.ma.get(t);n!==null&&(eE(e.remoteStore,n),e.ma=e.ma.remove(t),e.fa.delete(n),Fd(e))}function Sm(e,t,n){for(const r of n)r instanceof uE?(e.ga.addReference(r.key,t),xO(e,r)):r instanceof hE?(H("SyncEngine","Document no longer in limbo: "+r.key),e.ga.removeReference(r.key,t),e.ga.containsKey(r.key)||mE(e,r.key)):Z()}function xO(e,t){const n=t.key,r=n.path.canonicalString();e.ma.get(n)||e.Va.has(r)||(H("SyncEngine","New document in limbo: "+n),e.Va.add(r),Fd(e))}function Fd(e){for(;e.Va.size>0&&e.ma.size<e.maxConcurrentLimboResolutions;){const t=e.Va.values().next().value;e.Va.delete(t);const n=new G(It.fromString(t)),r=e.wa.next();e.fa.set(r,new bO(n)),e.ma=e.ma.insert(n,r),tE(e.remoteStore,new tr(Dn(Ad(n.path)),r,"TargetPurposeLimboResolution",yd.ae))}}async function Oo(e,t,n){const r=ot(e),s=[],i=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=kd.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.da.s_(s),await async function(c,l){const u=ot(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(l,d=>O.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>O.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ro(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.Zi.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Zi=u.Zi.insert(d,y)}}}(r.localStore,i))}async function LO(e,t){const n=ot(e);if(!n.currentUser.isEqual(t)){H("SyncEngine","User change. New user:",t.toKey());const r=await Yv(n.localStore,t);n.currentUser=t,function(i,o){i.ya.forEach(a=>{a.forEach(c=>{c.reject(new L(T.CANCELLED,o))})}),i.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Oo(n,r.rs)}}function VO(e,t){const n=ot(e),r=n.fa.get(t);if(r&&r.Ea)return ut().add(r.key);{let s=ut();const i=n.Ra.get(t);if(!i)return s;for(const o of i){const a=n.Aa.get(o);s=s.unionWith(a.view.oa)}return s}}function MO(e){const t=ot(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=dE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=VO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=NO.bind(null,t),t.da.s_=TO.bind(null,t.eventManager),t.da.Da=wO.bind(null,t.eventManager),t}function UO(e){const t=ot(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=DO.bind(null,t),t}class Cm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=rl(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return KP(this.persistence,new HP,t.initialUser,this.serializer)}createPersistence(t){return new jP(Nd.Hr,this.serializer)}createSharedClientState(t){return new ZP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FO{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LO.bind(null,this.syncEngine),await yO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new EO}()}createDatastore(t){const n=rl(t.databaseInfo.databaseId),r=function(i){return new rO(i)}(t.databaseInfo);return function(i,o,a,c){return new oO(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new cO(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Rm(this.syncEngine,n,0),function(){return Am.v()?new Am:new tO}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new RO(s,i,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ot(n);H("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Po(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Fa(this.observer.next,t)}error(t){this.observer.error?this.Fa(this.observer.error,t):kn("Uncaught Error in snapshot listener:",t.toString())}Ma(){this.muted=!0}Fa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ne.UNAUTHENTICATED,this.clientId=yv.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Md(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ql(e,t){e.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Yv(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Pm(e,t){e.asyncQueue.verifyOperationInProgress();const n=await jO(e);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>Im(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>Im(t.remoteStore,i)),e._onlineComponents=t}function BO(e){return e.name==="FirebaseError"?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function jO(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ql(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!BO(n))throw n;Ls("Error using user provided cache. Falling back to memory cache: "+n),await Ql(e,new Cm)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Ql(e,new Cm);return e._offlineComponents}async function _E(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Pm(e,e._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Pm(e,new FO))),e._onlineComponents}function qO(e){return _E(e).then(t=>t.syncEngine)}async function yE(e){const t=await _E(e),n=t.eventManager;return n.onListen=SO.bind(null,t.syncEngine),n.onUnlisten=PO.bind(null,t.syncEngine),n}function HO(e,t,n={}){const r=new Rn;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new gE({next:d=>{o.enqueueAndForget(()=>cE(i,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new L(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new L(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new lE(Ad(a.path),u,{includeMetadataChanges:!0,z_:!0});return aE(i,h)}(await yE(e),e.asyncQueue,t,n,r)),r.promise}function WO(e,t,n={}){const r=new Rn;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new gE({next:d=>{o.enqueueAndForget(()=>cE(i,h)),d.fromCache&&c.source==="server"?l.reject(new L(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new lE(a,u,{includeMetadataChanges:!0,z_:!0});return aE(i,h)}(await yE(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(e,t,n){if(!n)throw new L(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function KO(e,t,n,r){if(t===!0&&r===!0)throw new L(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Nm(e){if(!G.isDocumentKey(e))throw new L(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function km(e){if(G.isDocumentKey(e))throw new L(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ol(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Z()}function Ln(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ol(e);throw new L(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function zO(e,t){if(t<=0)throw new L(T.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}KO("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vE((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class al{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dm(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pC;switch(r.type){case"firstParty":return new yC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Om.get(n);r&&(H("ComponentProvider","Removing Datastore"),Om.delete(n),r.terminate())}(this),Promise.resolve()}}function GO(e,t,n,r={}){var s;const i=(e=Ln(e,al))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ne.MOCK_USER;else{a=uy(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ne(l)}e._authCredentials=new mC(new _v(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $n(this.firestore,t,this._query)}}class we{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new we(this.firestore,t,this._key)}}class or extends $n{constructor(t,n,r){super(t,n,Ad(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new we(this.firestore,null,new G(t))}withConverter(t){return new or(this.firestore,t,this._path)}}function sa(e,t,...n){if(e=jt(e),EE("collection","path",t),e instanceof al){const r=It.fromString(t,...n);return km(r),new or(e,null,r)}{if(!(e instanceof we||e instanceof or))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(It.fromString(t,...n));return km(r),new or(e.firestore,null,r)}}function QO(e,t,...n){if(e=jt(e),arguments.length===1&&(t=yv.V()),EE("doc","path",t),e instanceof al){const r=It.fromString(t,...n);return Nm(r),new we(e,null,new G(r))}{if(!(e instanceof we||e instanceof or))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(It.fromString(t,...n));return Nm(r),new we(e.firestore,e instanceof or?e.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new Jv(this,"async_queue_retry"),this.tu=()=>{const n=Gl();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const t=Gl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nu(),this.ru(t)}enterRestrictedMode(t){if(!this.Ha){this.Ha=!0,this.Xa=t||!1;const n=Gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(t){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Rn;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ja.push(t),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(t){if(!Ro(t))throw t;H("AsyncQueue","Operation failed with retryable error: "+t)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(t){const n=this.za.then(()=>(this.Za=!0,t().catch(r=>{this.Ya=r,this.Za=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(t,n,r){this.nu(),this.eu.indexOf(t)>-1&&(n=0);const s=Vd.createAndSchedule(this,t,n,r,i=>this.su(i));return this.Ja.push(s),s}nu(){this.Ya&&Z()}verifyOperationInProgress(){}async ou(){let t;do t=this.za,await t;while(t!==this.za)}_u(t){for(const n of this.Ja)if(n.timerId===t)return!0;return!1}au(t){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ou()})}uu(t){this.eu.push(t)}su(t){const n=this.Ja.indexOf(t);this.Ja.splice(n,1)}}class ii extends al{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new YO}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TE(this),this._firestoreClient.terminate()}}function XO(e,t){const n=typeof e=="object"?e:Gh(),r=typeof e=="string"?e:t||"(default)",s=kc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ay("firestore");i&&GO(s,...i)}return s}function $d(e){return e._firestoreClient||TE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function TE(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new OC(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,vE(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new $O(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this._byteString=t}static fromBase64String(t){try{return new js(ue.fromBase64String(t))}catch(n){throw new L(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new js(ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new L(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new L(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new L(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return vt(this._lat,t._lat)||vt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=/^__.*__$/;class ZO{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new _r(t,this.data,this.fieldMask,n,this.fieldTransforms):new So(t,this.data,n,this.fieldTransforms)}}class wE{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new _r(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function AE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class qd{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(t){return new qd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.hu({path:r,Iu:!1});return s.Tu(t),s}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.hu({path:r,Iu:!1});return s.cu(),s}du(t){return this.hu({path:void 0,Iu:!0})}Au(t){return ic(t,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Tu(this.path.get(t))}Tu(t){if(t.length===0)throw this.Au("Document fields must not be empty");if(AE(this.lu)&&JO.test(t))throw this.Au('Document fields cannot begin and end with "__"')}}class tN{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||rl(t)}mu(t,n,r,s=!1){return new qd({lu:t,methodName:n,Vu:r,path:ie.emptyPath(),Iu:!1,Ru:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ll(e){const t=e._freezeSettings(),n=rl(e._databaseId);return new tN(e._databaseId,!!t.ignoreUndefinedProperties,n)}function eN(e,t,n,r,s,i={}){const o=e.mu(i.merge||i.mergeFields?2:0,t,n,s);Hd("Data must be an object, but it was:",o,r);const a=bE(r,o);let c,l;if(i.merge)c=new Oe(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=ch(t,h,n);if(!o.contains(d))throw new L(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SE(u,d)||u.push(d)}c=new Oe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ZO(new Ee(a),c,l)}class ul extends Bd{_toFieldTransform(t){if(t.lu!==2)throw t.lu===1?t.Au(`${this._methodName}() can only appear at the top level of your update data`):t.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ul}}function nN(e,t,n,r){const s=e.mu(1,t,n);Hd("Data must be an object, but it was:",s,r);const i=[],o=Ee.empty();Xr(r,(c,l)=>{const u=Wd(t,c,n);l=jt(l);const h=s.Eu(u);if(l instanceof ul)i.push(u);else{const d=No(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Oe(i);return new wE(o,a,s.fieldTransforms)}function rN(e,t,n,r,s,i){const o=e.mu(1,t,n),a=[ch(t,r,n)],c=[s];if(i.length%2!=0)throw new L(T.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ch(t,i[d])),c.push(i[d+1]);const l=[],u=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!SE(l,a[d])){const f=a[d];let g=c[d];g=jt(g);const y=o.Eu(f);if(g instanceof ul)l.push(f);else{const v=No(g,y);v!=null&&(l.push(f),u.set(f,v))}}const h=new Oe(l);return new wE(u,h,o.fieldTransforms)}function IE(e,t,n,r=!1){return No(n,e.mu(r?4:3,t))}function No(e,t){if(RE(e=jt(e)))return Hd("Unsupported field value:",t,e),bE(e,t);if(e instanceof Bd)return function(r,s){if(!AE(s.lu))throw s.Au(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Au(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Iu&&t.lu!==4)throw t.Au("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=No(a,s.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qt.fromDate(r);return{timestampValue:rc(s.serializer,i)}}if(r instanceof qt){const i=new qt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rc(s.serializer,i)}}if(r instanceof jd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:Hv(s.serializer,r._byteString)};if(r instanceof we){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pd(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Au(`Unsupported field value: ${ol(r)}`)}(e,t)}function bE(e,t){const n={};return vv(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xr(e,(r,s)=>{const i=No(s,t.Pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function RE(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof qt||e instanceof jd||e instanceof js||e instanceof we||e instanceof Bd)}function Hd(e,t,n){if(!RE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ol(n);throw r==="an object"?t.Au(e+" a custom object"):t.Au(e+" "+r)}}function ch(e,t,n){if((t=jt(t))instanceof cl)return t._internalPath;if(typeof t=="string")return Wd(e,t);throw ic("Field path arguments must be of type string or ",e,!1,void 0,n)}const sN=new RegExp("[~\\*/\\[\\]]");function Wd(e,t,n){if(t.search(sN)>=0)throw ic(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new cl(...t.split("."))._internalPath}catch{throw ic(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ic(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(T.INVALID_ARGUMENT,a+e+c)}function SE(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(zd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iN extends Kd{data(){return super.data()}}function zd(e,t){return typeof t=="string"?Wd(e,t):t instanceof cl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new L(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gd{}class hl extends Gd{}function ia(e,t,...n){let r=[];t instanceof Gd&&r.push(t),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Yd).length,a=i.filter(c=>c instanceof Qd).length;if(o>1||o>0&&a>0)throw new L(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Qd extends hl{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Qd(t,n,r)}_apply(t){const n=this._parse(t);return CE(t._query,n),new $n(t.firestore,t.converter,th(t._query,n))}_parse(t){const n=ll(t.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Vm(h,u);const f=[];for(const g of h)f.push(Lm(c,i,g));d={arrayValue:{values:f}}}else d=Lm(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Vm(h,u),d=IE(a,o,h,u==="in"||u==="not-in");return Bt.create(l,u,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Yd extends Gd{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Yd(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ze.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)CE(o,c),o=th(o,c)}(t._query,n),new $n(t.firestore,t.converter,th(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xd extends hl{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Xd(t,n)}_apply(t){const n=function(s,i,o){if(s.startAt!==null)throw new L(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Is(i,o);return function(l,u){if(Id(l)===null){const h=Xc(l);h!==null&&PE(l,h,u.field)}}(s,a),a}(t._query,this._field,this._direction);return new $n(t.firestore,t.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Jr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function oa(e,t="asc"){const n=t,r=zd("orderBy",e);return Xd._create(r,n)}class Jd extends hl{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new Jd(t,n,r)}_apply(t){return new $n(t.firestore,t.converter,tc(t._query,this._limit,this._limitType))}}function xm(e){return zO("limit",e),Jd._create("limit",e,"F")}class Zd extends hl{constructor(t,n,r){super(),this.type=t,this._docOrFields=n,this._inclusive=r}static _create(t,n,r){return new Zd(t,n,r)}_apply(t){const n=cN(t,this.type,this._docOrFields,this._inclusive);return new $n(t.firestore,t.converter,function(s,i){return new Jr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(t._query,n))}}function aN(...e){return Zd._create("startAfter",e,!1)}function cN(e,t,n,r){if(n[0]=jt(n[0]),n[0]instanceof Kd)return function(i,o,a,c,l){if(!c)throw new L(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of bs(i))if(h.field.isKeyField())u.push(Za(o,c.key));else{const d=c.data.field(h.field);if(Yc(d))throw new L(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new L(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(d)}return new Fs(u,l)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=ll(e.firestore);return function(o,a,c,l,u,h){const d=o.explicitOrderBy;if(u.length>d.length)throw new L(T.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<u.length;g++){const y=u[g];if(d[g].field.isKeyField()){if(typeof y!="string")throw new L(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!bd(o)&&y.indexOf("/")!==-1)throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const v=o.path.child(It.fromString(y));if(!G.isDocumentKey(v))throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const A=new G(v);f.push(Za(a,A))}else{const v=IE(c,l,y);f.push(v)}}return new Fs(f,h)}(e._query,e.firestore._databaseId,s,t,n,r)}}function Lm(e,t,n){if(typeof(n=jt(n))=="string"){if(n==="")throw new L(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bd(t)&&n.indexOf("/")!==-1)throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(It.fromString(n));if(!G.isDocumentKey(r))throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Za(e,new G(r))}if(n instanceof we)return Za(e,n._key);throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ol(n)}.`)}function Vm(e,t){if(!Array.isArray(e)||e.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function CE(e,t){if(t.isInequality()){const r=Xc(e),s=t.field;if(r!==null&&!r.isEqual(s))throw new L(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Id(e);i!==null&&PE(e,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function PE(e,t,n){if(!n.isEqual(t))throw new L(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class lN{convertValue(t,n="none"){switch(Hr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $t(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Z()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Xr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new jd($t(t.latitude),$t(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=vd(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(io(t));default:return null}}convertTimestamp(t){const n=ur(t);return new qt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=It.fromString(t);Ct(Qv(r));const s=new oo(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class OE extends Kd{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(zd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sa extends OE{data(t={}){return super.data(t)}}class hN{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Sa(this._firestore,this._userDataWriter,r.key,r,new Ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Sa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ri(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Sa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ri(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:dN(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(e){e=Ln(e,we);const t=Ln(e.firestore,ii);return HO($d(t),e._key).then(n=>fN(t,e,n))}class NE extends lN{constructor(t){super(),this.firestore=t}convertBytes(t){return new js(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new we(this.firestore,null,n)}}function aa(e){e=Ln(e,$n);const t=Ln(e.firestore,ii),n=$d(t),r=new NE(t);return oN(e._query),WO(n,e._query).then(s=>new hN(t,r,e,s))}function eF(e,t,n,...r){e=Ln(e,we);const s=Ln(e.firestore,ii),i=ll(s);let o;return o=typeof(t=jt(t))=="string"||t instanceof cl?rN(i,"updateDoc",e._key,t,n,r):nN(i,"updateDoc",e._key,t),tf(s,[o.toMutation(e._key,Ye.exists(!0))])}function nF(e){return tf(Ln(e.firestore,ii),[new Rd(e._key,Ye.none())])}function rF(e,t){const n=Ln(e.firestore,ii),r=QO(e),s=uN(e.converter,t);return tf(n,[eN(ll(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,Ye.exists(!1))]).then(()=>r)}function tf(e,t){return function(r,s){const i=new Rn;return r.asyncQueue.enqueueAndForget(async()=>OO(await qO(r),s,i)),i.promise}($d(e),t)}function fN(e,t,n){const r=n.docs.get(t._key),s=new NE(e);return new OE(e,s,t._key,r,new Ri(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){ni=s})(Qr),Br(new cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ii(new gC(r.getProvider("auth-internal")),new EC(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new L(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),hn(tm,"4.1.2",t),hn(tm,"4.1.2","esm2017")})();var pN="firebase",mN="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(pN,mN,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="firebasestorage.googleapis.com",DE="storageBucket",gN=2*60*1e3,_N=10*60*1e3,yN=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends En{constructor(t,n,r=0){super(Yl(t),`Firebase Storage: ${n} (${Yl(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Yl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pt||(Pt={}));function Yl(e){return"storage/"+e}function ef(){const e="An unknown error occurred, please check the error payload for server response.";return new kt(Pt.UNKNOWN,e)}function vN(e){return new kt(Pt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function EN(e){return new kt(Pt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TN(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new kt(Pt.UNAUTHENTICATED,e)}function wN(){return new kt(Pt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AN(e){return new kt(Pt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function xE(){return new kt(Pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LE(){return new kt(Pt.CANCELED,"User canceled the upload/download.")}function IN(e){return new kt(Pt.INVALID_URL,"Invalid URL '"+e+"'.")}function bN(e){return new kt(Pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function RN(){return new kt(Pt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+DE+"' property when initializing the app?")}function VE(){return new kt(Pt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function SN(){return new kt(Pt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function CN(){return new kt(Pt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PN(e){return new kt(Pt.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lh(e){return new kt(Pt.INVALID_ARGUMENT,e)}function ME(){return new kt(Pt.APP_DELETED,"The Firebase app was deleted.")}function ON(e){return new kt(Pt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Mi(e,t){return new kt(Pt.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function _i(e){throw new kt(Pt.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Ne.makeFromUrl(t,n)}catch{return new Ne(t,"")}if(r.path==="")return r;throw bN(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},y=n===kE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",A=new RegExp(`^https?://${y}/${s}/${v}`,"i"),N=[{regex:a,indices:c,postModify:i},{regex:f,indices:g,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let w=0;w<N.length;w++){const U=N[w],$=U.regex.exec(t);if($){const Y=$[U.indices.bucket];let q=$[U.indices.path];q||(q=""),r=new Ne(Y,q),U.postModify(r);break}}if(r==null)throw IN(t);return r}}class NN{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,t.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,e(f,c())},v)}function d(){i&&clearTimeout(i)}function f(v,...A){if(l){d();return}if(v){d(),u.call(null,v,...A);return}if(c()||o){d(),u.call(null,v,...A);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let g=!1;function y(v){g||(g=!0,d(),!l&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function DN(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(e){return e!==void 0}function LN(e){return typeof e=="function"}function VN(e){return typeof e=="object"&&!Array.isArray(e)}function dl(e){return typeof e=="string"||e instanceof String}function Mm(e){return nf()&&e instanceof Blob}function nf(){return typeof Blob<"u"&&!HR()}function Um(e,t,n,r){if(r<t)throw lh(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw lh(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function UE(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Vr||(Vr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(t,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new ca(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Vr.NO_ERROR,c=i.getStatus();if(!a||FE(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Vr.ABORT;r(!1,new ca(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new ca(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xN(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ef();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?ME():LE();o(c)}else{const c=xE();o(c)}};this.canceled_?n(!1,new ca(!1,null,!0)):this.backoffId_=kN(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&DN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ca{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function UN(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function FN(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function $N(e,t){t&&(e["X-Firebase-GMPID"]=t)}function BN(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function jN(e,t,n,r,s,i,o=!0){const a=UE(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return $N(l,t),UN(l,n),FN(l,i),BN(l,r),new MN(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function HN(...e){const t=qN();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(nf())return new Blob(e);throw new kt(Pt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function WN(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(e){if(typeof atob>"u")throw PN("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xl{constructor(t,n){this.data=t,this.contentType=n||null}}function zN(e,t){switch(e){case un.RAW:return new Xl($E(t));case un.BASE64:case un.BASE64URL:return new Xl(BE(e,t));case un.DATA_URL:return new Xl(QN(t),YN(t))}throw ef()}function $E(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=r,o=e.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function GN(e){let t;try{t=decodeURIComponent(e)}catch{throw Mi(un.DATA_URL,"Malformed data URL.")}return $E(t)}function BE(e,t){switch(e){case un.BASE64:{const s=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(s||i)throw Mi(e,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const s=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(s||i)throw Mi(e,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KN(t)}catch(s){throw s.message.includes("polyfill")?s:Mi(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class jE{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Mi(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=XN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function QN(e){const t=new jE(e);return t.base64?BE(un.BASE64,t.rest):GN(t.rest)}function YN(e){return new jE(e).contentType}function XN(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,n){let r=0,s="";Mm(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,n){if(Mm(this.data_)){const r=this.data_,s=WN(r,t,n);return s===null?null:new Qn(s)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Qn(r,!0)}}static getBlob(...t){if(nf()){const n=t.map(r=>r instanceof Qn?r.data_:r);return new Qn(HN.apply(null,n))}else{const n=t.map(o=>dl(o)?zN(un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Qn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){let t;try{t=JSON.parse(e)}catch{return null}return VN(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function ZN(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function HE(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(e,t){return t}class de{constructor(t,n,r,s){this.server=t,this.local=n||t,this.writable=!!r,this.xform=s||tk}}let la=null;function ek(e){return!dl(e)||e.length<2?e:HE(e)}function WE(){if(la)return la;const e=[];e.push(new de("bucket")),e.push(new de("generation")),e.push(new de("metageneration")),e.push(new de("name","fullPath",!0));function t(i,o){return ek(o)}const n=new de("name");n.xform=t,e.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new de("size");return s.xform=r,e.push(s),e.push(new de("timeCreated")),e.push(new de("updated")),e.push(new de("md5Hash",null,!0)),e.push(new de("cacheControl",null,!0)),e.push(new de("contentDisposition",null,!0)),e.push(new de("contentEncoding",null,!0)),e.push(new de("contentLanguage",null,!0)),e.push(new de("contentType",null,!0)),e.push(new de("metadata","customMetadata",!0)),la=e,la}function nk(e,t){function n(){const r=e.bucket,s=e.fullPath,i=new Ne(r,s);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function rk(e,t,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,t[o.server])}return nk(r,e),r}function KE(e,t,n){const r=qE(t);return r===null?null:rk(e,r,n)}function sk(e,t,n,r){const s=qE(t);if(s===null||!dl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=e.bucket,h=e.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=ko(d,n,r),g=UE({alt:"media",token:l});return f+g})[0]}function zE(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const i=t[s];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class oi{constructor(t,n,r,s){this.url=t,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){if(!e)throw ef()}function rf(e,t){function n(r,s){const i=KE(e,s,t);return Sn(i!==null),i}return n}function ik(e,t){function n(r,s){const i=KE(e,s,t);return Sn(i!==null),sk(i,s,e.host,e._protocol)}return n}function Do(e){function t(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=wN():s=TN():n.getStatus()===402?s=EN(e.bucket):n.getStatus()===403?s=AN(e.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return t}function GE(e){const t=Do(e);function n(r,s){let i=t(r,s);return r.getStatus()===404&&(i=vN(e.path)),i.serverResponse=s.serverResponse,i}return n}function ok(e,t,n){const r=t.fullServerUrl(),s=ko(r,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new oi(s,i,rf(e,n),o);return a.errorHandler=GE(t),a}function ak(e,t,n){const r=t.fullServerUrl(),s=ko(r,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new oi(s,i,ik(e,n),o);return a.errorHandler=GE(t),a}function ck(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function QE(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=ck(null,t)),r}function lk(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let w=0;w<2;w++)N=N+Math.random().toString().slice(2);return N}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=QE(t,r,s),u=zE(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Qn.getBlob(h,r,d);if(f===null)throw VE();const g={name:l.fullPath},y=ko(i,e.host,e._protocol),v="POST",A=e.maxUploadRetryTime,R=new oi(y,v,rf(e,n),A);return R.urlParams=g,R.headers=o,R.body=f.uploadData(),R.errorHandler=Do(t),R}class oc{constructor(t,n,r,s){this.current=t,this.total=n,this.finalized=!!r,this.metadata=s||null}}function sf(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{Sn(!1)}return Sn(!!n&&(t||["active"]).indexOf(n)!==-1),n}function uk(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o=QE(t,r,s),a={name:o.fullPath},c=ko(i,e.host,e._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=zE(o,n),d=e.maxUploadRetryTime;function f(y){sf(y);let v;try{v=y.getResponseHeader("X-Goog-Upload-URL")}catch{Sn(!1)}return Sn(dl(v)),v}const g=new oi(c,l,f,d);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=Do(t),g}function hk(e,t,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const u=sf(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Sn(!1)}h||Sn(!1);const d=Number(h);return Sn(!isNaN(d)),new oc(d,r.size(),u==="final")}const o="POST",a=e.maxUploadRetryTime,c=new oi(n,o,i,a);return c.headers=s,c.errorHandler=Do(t),c}const Fm=256*1024;function dk(e,t,n,r,s,i,o,a){const c=new oc(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw SN();const l=c.total-c.current;let u=l;s>0&&(u=Math.min(u,s));const h=c.current,d=h+u;let f="";u===0?f="finalize":l===u?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},y=r.slice(h,d);if(y===null)throw VE();function v(w,U){const $=sf(w,["active","final"]),Y=c.current+u,q=r.size();let j;return $==="final"?j=rf(t,i)(w,U):j=null,new oc(Y,q,$==="final",j)}const A="POST",R=t.maxUploadRetryTime,N=new oi(n,A,v,R);return N.headers=g,N.body=y.uploadData(),N.progressCallback=a||null,N.errorHandler=Do(e),N}const ve={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Jl(e){switch(e){case"running":case"pausing":case"canceling":return ve.RUNNING;case"paused":return ve.PAUSED;case"success":return ve.SUCCESS;case"canceled":return ve.CANCELED;case"error":return ve.ERROR;default:return ve.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(t,n,r){if(LN(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class pk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vr.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vr.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vr.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,s){if(this.sent_)throw _i("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _i("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _i("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _i("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _i("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class mk extends pk{initXhr(){this.xhr_.responseType="text"}}function ds(){return new mk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=WE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Pt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(FE(s.status,[]))if(i)s=xE();else{this.sleepTime=Math.max(this.sleepTime*2,yN),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Pt.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=uk(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ds,t,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const s=hk(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(s,ds,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Fm*this._chunkMultiplier,n=new oc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=dk(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ds,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Fm*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=ok(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,ds,t,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=lk(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ds,t,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=LE(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Jl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,s){const i=new fk(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Jl(this._state)){case ve.SUCCESS:os(this._resolve.bind(null,this.snapshot))();break;case ve.CANCELED:case ve.ERROR:const n=this._reject;os(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Jl(this._state)){case ve.RUNNING:case ve.PAUSED:t.next&&os(t.next.bind(t,this.snapshot))();break;case ve.SUCCESS:t.complete&&os(t.complete.bind(t))();break;case ve.CANCELED:case ve.ERROR:t.error&&os(t.error.bind(t,this._error))();break;default:t.error&&os(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,n){this._service=t,n instanceof Ne?this._location=n:this._location=Ne.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Wr(t,n)}get root(){const t=new Ne(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HE(this._location.path)}get storage(){return this._service}get parent(){const t=JN(this._location.path);if(t===null)return null;const n=new Ne(this._location.bucket,t);return new Wr(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw ON(t)}}function _k(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new gk(e,new Qn(t),n)}function yk(e){e._throwIfRoot("getDownloadURL");const t=ak(e.storage,e._location,WE());return e.storage.makeRequestWithTokens(t,ds).then(n=>{if(n===null)throw CN();return n})}function vk(e,t){const n=ZN(e._location.path,t),r=new Ne(e._location.bucket,n);return new Wr(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(e){return/^[A-Za-z]+:\/\//.test(e)}function Tk(e,t){return new Wr(e,t)}function YE(e,t){if(e instanceof of){const n=e;if(n._bucket==null)throw RN();const r=new Wr(n,n._bucket);return t!=null?YE(r,t):r}else return t!==void 0?vk(e,t):e}function wk(e,t){if(t&&Ek(t)){if(e instanceof of)return Tk(e,t);throw lh("To use ref(service, url), the first argument must be a Storage instance.")}else return YE(e,t)}function $m(e,t){const n=t==null?void 0:t[DE];return n==null?null:Ne.makeFromBucketSpec(n,e)}function Ak(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:uy(s,e.app.options.projectId))}class of{constructor(t,n,r,s,i){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=kE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gN,this._maxUploadRetryTime=_N,this._requests=new Set,s!=null?this._bucket=Ne.makeFromBucketSpec(s,this._host):this._bucket=$m(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ne.makeFromBucketSpec(this._url,t):this._bucket=$m(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Um("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Um("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Wr(this,t)}_makeRequest(t,n,r,s,i=!0){if(this._deleted)return new NN(ME());{const o=jN(t,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const Bm="@firebase/storage",jm="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="storage";function sF(e,t,n){return e=jt(e),_k(e,t,n)}function iF(e){return e=jt(e),yk(e)}function oF(e,t){return e=jt(e),wk(e,t)}function Ik(e=Gh(),t){e=jt(e);const r=kc(e,XE).getImmediate({identifier:t}),s=ay("storage");return s&&bk(r,...s),r}function bk(e,t,n,r={}){Ak(e,t,n,r)}function Rk(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new of(n,r,s,t,Qr)}function Sk(){Br(new cr(XE,Rk,"PUBLIC").setMultipleInstances(!0)),hn(Bm,jm,""),hn(Bm,jm,"esm2017")}Sk();function af(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function JE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ck=JE,ZE=new mo("auth","Firebase",JE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Wh("@firebase/auth");function Pk(e,...t){ac.logLevel<=_t.WARN&&ac.warn(`Auth (${Qr}): ${e}`,...t)}function Ca(e,...t){ac.logLevel<=_t.ERROR&&ac.error(`Auth (${Qr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e,...t){throw cf(e,...t)}function fn(e,...t){return cf(e,...t)}function Ok(e,t,n){const r=Object.assign(Object.assign({},Ck()),{[t]:n});return new mo("auth","Firebase",r).create(t,{appName:e.name})}function cf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ZE.create(e,...t)}function st(e,t,...n){if(!e)throw cf(t,...n)}function In(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ca(t),new Error(t)}function Mn(e,t){e||In(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Nk(){return qm()==="http:"||qm()==="https:"}function qm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nk()||WR()||"connection"in navigator)?navigator.onLine:!0}function Dk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Mn(n>t,"Short delay should be less than long delay!"),this.isMobile=qR()||KR()}get(){return kk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(e,t){Mn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=new xo(3e4,6e4);function eT(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lo(e,t,n,r,s={}){return nT(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=go(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),tT.fetch()(rT(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function nT(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},xk),t);try{const s=new Mk(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ua(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ua(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw ua(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ok(e,u,l);Vn(e,u)}}catch(s){if(s instanceof En)throw s;Vn(e,"network-request-failed",{message:String(s)})}}async function Vk(e,t,n,r,s={}){const i=await Lo(e,t,n,r,s);return"mfaPendingCredential"in i&&Vn(e,"multi-factor-auth-required",{_serverResponse:i}),i}function rT(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?lf(e.config,s):`${e.config.apiScheme}://${s}`}class Mk{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),Lk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ua(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(e,t){return Lo(e,"POST","/v1/accounts:delete",t)}async function Fk(e,t){return Lo(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function $k(e,t=!1){const n=jt(e),r=await n.getIdToken(t),s=uf(r);st(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ui(Zl(s.auth_time)),issuedAtTime:Ui(Zl(s.iat)),expirationTime:Ui(Zl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zl(e){return Number(e)*1e3}function uf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=iy(n);return s?JSON.parse(s):(Ca("Failed to decode base64 JWT payload"),null)}catch(s){return Ca("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bk(e){const t=uf(e);return st(t,"internal-error"),st(typeof t.exp<"u","internal-error"),st(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof En&&jk(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function jk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(e){var t;const n=e.auth,r=await e.getIdToken(),s=await uo(e,Fk(n,{idToken:r}));st(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Kk(i.providerUserInfo):[],a=Wk(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sT(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Hk(e){const t=jt(e);await cc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Wk(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Kk(e){return e.map(t=>{var{providerId:n}=t,r=af(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(e,t){const n=await nT(e,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=rT(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){st(t.idToken,"internal-error"),st(typeof t.idToken<"u","internal-error"),st(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Bk(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return st(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zk(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ho;return r&&(st(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(st(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(st(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t){st(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Mr{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=af(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sT(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await uo(this,this.stsTokenManager.getToken(this.auth,t));return st(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return $k(this,t)}reload(){return Hk(this)}_assign(t){this!==t&&(st(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Mr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){st(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await uo(this,Uk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:w,isAnonymous:U,providerData:$,stsTokenManager:Y}=n;st(N&&Y,t,"internal-error");const q=ho.fromJSON(this.name,Y);st(typeof N=="string",t,"internal-error"),Hn(h,t.name),Hn(d,t.name),st(typeof w=="boolean",t,"internal-error"),st(typeof U=="boolean",t,"internal-error"),Hn(f,t.name),Hn(g,t.name),Hn(y,t.name),Hn(v,t.name),Hn(A,t.name),Hn(R,t.name);const j=new Mr({uid:N,auth:t,email:d,emailVerified:w,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:q,createdAt:A,lastLoginAt:R});return $&&Array.isArray($)&&(j.providerData=$.map(J=>Object.assign({},J))),v&&(j._redirectEventId=v),j}static async _fromIdTokenResponse(t,n,r=!1){const s=new ho;s.updateFromServerResponse(n);const i=new Mr({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await cc(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new Map;function bn(e){Mn(e instanceof Function,"Expected a class definition");let t=Hm.get(e);return t?(Mn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Hm.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}iT.type="NONE";const Wm=iT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e,t,n){return`firebase:${e}:${t}:${n}`}class Ss{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Mr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ss(bn(Wm),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||bn(Wm);const o=Pa(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Mr._fromJSON(t,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ss(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ss(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(cT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(oT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(uT(t))return"Blackberry";if(hT(t))return"Webos";if(hf(t))return"Safari";if((t.includes("chrome/")||aT(t))&&!t.includes("edge/"))return"Chrome";if(lT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oT(e=le()){return/firefox\//i.test(e)}function hf(e=le()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function aT(e=le()){return/crios\//i.test(e)}function cT(e=le()){return/iemobile/i.test(e)}function lT(e=le()){return/android/i.test(e)}function uT(e=le()){return/blackberry/i.test(e)}function hT(e=le()){return/webos/i.test(e)}function fl(e=le()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Gk(e=le()){var t;return fl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Qk(){return zR()&&document.documentMode===10}function dT(e=le()){return fl(e)||lT(e)||hT(e)||uT(e)||/windows phone/i.test(e)||cT(e)}function Yk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(e,t=[]){let n;switch(e){case"Browser":n=Km(le());break;case"Worker":n=`${Km(le())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(e,t={}){return Lo(e,"GET","/v2/passwordPolicy",eT(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=6;class tD{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Zk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new Xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return st(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await cc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Dk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?jt(t):null;return n&&st(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&st(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Jk(this),n=new tD(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mo("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&bn(t)||this._popupRedirectResolver;st(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(st(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return st(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=fT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Pk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function df(e){return jt(e)}class zm{constructor(t){this.auth=t,this.observer=null,this.addObserver=t0(n=>this.observer=n)}get next(){return st(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function rD(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nD().appendChild(r)})}function sD(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(e,t){const n=kc(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qa(i,t??{}))return s;Vn(s,"already-initialized")}return n.initialize({options:t})}function oD(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function aD(e,t,n){const r=df(e);st(r._canInitEmulator,r,"emulator-config-failed"),st(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=pT(t),{host:o,port:a}=cD(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||lD()}function pT(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function cD(e){const t=pT(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gm(o)}}}function Gm(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function lD(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(t){return In("not implemented")}_linkToIdToken(t,n){return In("not implemented")}_getReauthenticationResolver(t){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(e,t){return Vk(e,"POST","/v1/accounts:signInWithIdp",eT(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD="http://localhost";class Kr extends mT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Kr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=af(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Cs(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Cs(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Cs(t,n)}buildRequest(){const t={requestUri:uD,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=go(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends gT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Vo{constructor(){super("facebook.com")}static credential(t){return Kr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yn.credentialFromTaggedObject(t)}static credentialFromError(t){return Yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yn.credential(t.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Kr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Xn.credentialFromTaggedObject(t)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Vo{constructor(){super("github.com")}static credential(t){return Kr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jn.credential(t.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Vo{constructor(){super("twitter.com")}static credential(t,n){return Kr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Zn.credentialFromTaggedObject(t)}static credentialFromError(t){return Zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Mr._fromIdTokenResponse(t,r,s),o=Qm(r);return new qs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Qm(r);return new qs({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Qm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends En{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new lc(t,n,r,s)}}function _T(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(e,i,t,r):i})}async function hD(e,t,n=!1){const r=await uo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qs._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await uo(e,_T(r,s,t,e),n);st(i.idToken,r,"internal-error");const o=uf(i.idToken);st(o,r,"internal-error");const{sub:a}=o;return st(e.uid===a,r,"user-mismatch"),qs._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(e,t,n=!1){const r="signIn",s=await _T(e,r,t),i=await qs._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function pD(e,t,n,r){return jt(e).onIdTokenChanged(t,n,r)}function mD(e,t,n){return jt(e).beforeAuthStateChanged(t,n)}const uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(){const e=le();return hf(e)||fl(e)}const _D=1e3,yD=10;class vT extends yT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gD()&&Yk(),this.fallbackToPolling=dT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Qk()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,yD):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},_D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}vT.type="LOCAL";const vD=vT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET extends yT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ET.type="SESSION";const TT=ET;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new pl(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await ED(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ff("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function wD(e){pn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function AD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ID(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function bD(){return wT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="firebaseLocalStorageDb",RD=1,hc="firebaseLocalStorage",IT="fbase_key";class Mo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ml(e,t){return e.transaction([hc],t?"readwrite":"readonly").objectStore(hc)}function SD(){const e=indexedDB.deleteDatabase(AT);return new Mo(e).toPromise()}function hh(){const e=indexedDB.open(AT,RD);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(hc,{keyPath:IT})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(hc)?t(r):(r.close(),await SD(),t(await hh()))})})}async function Ym(e,t,n){const r=ml(e,!0).put({[IT]:t,value:n});return new Mo(r).toPromise()}async function CD(e,t){const n=ml(e,!1).get(t),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function Xm(e,t){const n=ml(e,!0).delete(t);return new Mo(n).toPromise()}const PD=800,OD=3;class bT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hh(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>OD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(bD()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await AD(),!this.activeServiceWorker)return;this.sender=new TD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ID()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hh();return await Ym(t,uc,"1"),await Xm(t,uc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ym(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>CD(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xm(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=ml(s,!1).getAll();return new Mo(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bT.type="LOCAL";const ND=bT;new xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(e,t){return t?bn(t):(st(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends mT{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Cs(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Cs(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Cs(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function DD(e){return fD(e.auth,new pf(e),e.bypassAuthState)}function xD(e){const{auth:t,user:n}=e;return st(n,t,"internal-error"),dD(n,new pf(e),e.bypassAuthState)}async function LD(e){const{auth:t,user:n}=e;return st(n,t,"internal-error"),hD(n,new pf(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return DD;case"linkViaPopup":case"linkViaRedirect":return LD;case"reauthViaPopup":case"reauthViaRedirect":return xD;default:Vn(this.auth,"internal-error")}}resolve(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new xo(2e3,1e4);class _s extends RT{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return st(t,this.auth,"internal-error"),t}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const t=ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,VD.get())};t()}}_s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="pendingRedirect",Oa=new Map;class UD extends RT{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Oa.get(this.auth._key());if(!t){try{const r=await FD(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Oa.set(this.auth._key(),t)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FD(e,t){const n=jD(t),r=BD(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $D(e,t){Oa.set(e._key(),t)}function BD(e){return bn(e._redirectPersistence)}function jD(e){return Pa(MD,e.config.apiKey,e.name)}async function qD(e,t,n=!1){const r=df(e),s=kD(r,t),o=await new UD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=10*60*1e3;class WD{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!KD(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ST(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=HD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jm(t))}saveEventToCache(t){this.cachedEventUids.add(Jm(t)),this.lastProcessedEventTime=Date.now()}}function Jm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ST({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function KD(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ST(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD(e,t={}){return Lo(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QD=/^https?/;async function YD(e){if(e.config.emulator)return;const{authorizedDomains:t}=await zD(e);for(const n of t)try{if(XD(n))return}catch{}Vn(e,"unauthorized-domain")}function XD(e){const t=uh(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QD.test(n))return!1;if(GD.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=new xo(3e4,6e4);function Zm(){const e=pn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ZD(e){return new Promise((t,n)=>{var r,s,i;function o(){Zm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Zm(),n(fn(e,"network-request-failed"))},timeout:JD.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const a=sD("iframefcb");return pn()[a]=()=>{gapi.load?o():n(fn(e,"network-request-failed"))},rD(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Na=null,t})}let Na=null;function tx(e){return Na=Na||ZD(e),Na}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=new xo(5e3,15e3),nx="__/auth/iframe",rx="emulator/auth/iframe",sx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ix=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ox(e){const t=e.config;st(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?lf(t,rx):`https://${e.config.authDomain}/${nx}`,r={apiKey:t.apiKey,appName:e.name,v:Qr},s=ix.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${go(r).slice(1)}`}async function ax(e){const t=await tx(e),n=pn().gapi;return st(n,e,"internal-error"),t.open({where:document.body,url:ox(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(e,"network-request-failed"),a=pn().setTimeout(()=>{i(o)},ex.get());function c(){pn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lx=500,ux=600,hx="_blank",dx="http://localhost";class tg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fx(e,t,n,r=lx,s=ux){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cx),{width:r.toString(),height:s.toString(),top:i,left:o}),l=le().toLowerCase();n&&(a=aT(l)?hx:n),oT(l)&&(t=t||dx,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(Gk(l)&&a!=="_self")return px(t||"",a),new tg(null);const h=window.open(t||"",a,u);st(h,e,"popup-blocked");try{h.focus()}catch{}return new tg(h)}function px(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="__/auth/handler",gx="emulator/auth/handler",_x=encodeURIComponent("fac");async function eg(e,t,n,r,s,i){st(e.config.authDomain,e,"auth-domain-config-required"),st(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Qr,eventId:s};if(t instanceof gT){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ZR(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(t instanceof Vo){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${_x}=${encodeURIComponent(c)}`:"";return`${yx(e)}?${go(a).slice(1)}${l}`}function yx({config:e}){return e.emulator?lf(e,gx):`https://${e.authDomain}/${mx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="webStorageSupport";class vx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TT,this._completeRedirectFn=qD,this._overrideRedirectResult=$D}async _openPopup(t,n,r,s){var i;Mn((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await eg(t,n,r,uh(),s);return fx(t,o,ff())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await eg(t,n,r,uh(),s);return wD(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ax(t),r=new WD(t);return n.register("authEvent",s=>(st(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(tu,{type:tu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[tu];o!==void 0&&n(!!o),Vn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YD(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return dT()||hf()||fl()}}const Ex=vx;var ng="@firebase/auth",rg="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){st(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ax(e){Br(new cr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;st(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fT(e)},l=new eD(r,s,i,c);return oD(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Br(new cr("auth-internal",t=>{const n=df(t.getProvider("auth").getImmediate());return(r=>new Tx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(ng,rg,wx(e)),hn(ng,rg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=5*60,bx=ly("authIdTokenMaxAge")||Ix;let sg=null;const Rx=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bx)return;const s=n==null?void 0:n.token;sg!==s&&(sg=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Sx(e=Gh()){const t=kc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=iD(e,{popupRedirectResolver:Ex,persistence:[ND,vD,TT]}),r=ly("authTokenSyncURL");if(r){const i=Rx(r);mD(n,i,()=>i(n.currentUser)),pD(n,o=>i(o))}const s=oy("auth");return s&&aD(n,`http://${s}`),n}Ax("Browser");const CT={apiKey:"AIzaSyAkt3AmCaXbu0jEPoyhIj-WcXHlTnaxOHM",authDomain:"sala-61df8.firebaseapp.com",projectId:"sala-61df8",storageBucket:"sala-61df8.appspot.com",messagingSenderId:"86157962154",appId:"1:86157962154:web:341a5b22ce70022e69d9d3"},Cx=zh(CT),aF=Ik(Cx),Px=zh(CT),ha=XO(Px);Sx();const Ox=cb({id:"main",state:()=>({total:"",paginas:"",limit:3,page:1,firstVisible:"",obras:[]}),actions:{async obtenerDatos(){this.obras=[];const e=await ia(sa(ha,"obras"),oa("date","desc")),n=(await aa(e)).docs.length;this.total=n,this.paginas=Math.ceil(this.total/this.limit);const r=await ia(sa(ha,"obras"),oa("date","desc"),xm(this.limit));(await aa(r)).forEach(i=>{let o=i.data();o.id=i.id,this.obras.push(o),console.log(i)})},async siguiente(){const e=await ia(sa(ha,"obras"),oa("date","desc")),n=(await aa(e)).docs[this.limit*(this.page-1)-1]||this.obtenerDatos();this.firstVisible=n;const r=await ia(sa(ha,"obras"),oa("date","desc"),xm(this.limit),aN(this.firstVisible));this.obras=[],console.log("array",this.obras),(await aa(r)).forEach(i=>{let o=i.data();o.id=i.id,this.obras.push(o),console.log(i)})}}}),Nx=Sc('<header class="masthead" id="inicio"><div class="container"><div class="masthead-subheading">¡O teu teatro de barrio!</div><div class="masthead-heading text-uppercase">Sala Gurugú</div><a class="btn btn-info btn-xl text-uppercase" href="#programa">Programación</a></div></header>',1),kx={class:"page-section bg-light",id:"programa"},Dx={class:"container"},xx={class:"text-center"},Lx=it("h2",{class:"section-heading text-uppercase"},"Programación",-1),Vx=it("h3",{class:"section-subheading text-muted"},"Artes Éscenicas.",-1),Mx={class:"row justify-content-center"},Ux={class:"text-center"},Fx=Sc('<section class="page-section bg-light" id="danthea"><div class="container"><div class="text-center"><h2 class="section-heading text-uppercase">Danthea</h2><h3 class="section-subheading text-muted">Compañia de teatro.</h3><div class="center"><div class="card" style="width:18rem;"><img src="'+pR+'" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title text-uppercase text-center">Danthea</h5><p class="card-text text-uppercase text-center" style="font-family:&#39;Courier New&#39;;">Cincenta</p><p class="text-center">Maiores de 4 anos</p><div class="text-center"></div></div></div></div></div></div></section><section class="page-section" id="escola"><div class="container"><div class="text-center"><h2 class="section-heading text-uppercase">Escola de teatro</h2><h3 class="section-subheading text-muted">Motaxe de espetáculos.</h3></div><div class="row text-center"><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-info"></i><i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i></span><h4 class="my-3">Infantil</h4><p class="text-muted">Grupos reducidos de 8 a 12 anos.</p></div><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-info"></i><i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i></span><h4 class="my-3">Xuvenil</h4><p class="text-muted">Grupos reducidos de 12 a 18 anos.</p></div><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-info"></i><i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i></span><h4 class="my-3">Adultos</h4><p class="text-muted">Maiores de 18 años.</p></div></div></div></section><section class="page-section bg-light" id="equipo"><div class="container"><div class="text-center"><h2 class="section-heading text-uppercase">O noso equipo</h2><h3 class="section-subheading text-muted"> Forma parte da nosa familia. </h3></div><div class="row"><div class="col-lg-4"><div class="team-member"><img class="mx-auto rounded-circle" src="'+mR+'" alt="..."><h4>Carlos Clemente</h4><p class="text-muted">Director</p><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a></div></div><div class="col-lg-4"><div class="team-member"><img class="mx-auto rounded-circle" src="'+gR+'" alt="..."><h4>Carlos Miranda</h4><p class="text-muted">Audiovisuais</p><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a></div></div><div class="col-lg-4"><div class="team-member"><img class="mx-auto rounded-circle" src="'+_R+'" alt="..."><h4>Maria López</h4><p class="text-muted">Escenografía / Iluminación</p><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a></div></div></div><div class="row"><div class="col-lg-8 mx-auto text-center"><p class="large text-muted"> Colabora con nós e disfruta da paixón das artes. </p></div></div></div></section>',3),$x=it("section",{class:"page-section bg-light",id:"mapa"},[it("div",{class:"container"},[it("div",{class:"text-center"},[it("h2",{class:"section-heading text-uppercase"},"Onde estamos"),it("h3",{class:"section-subheading text-muted"}," Rúa Agra do Orzán, 3, 15010 A Coruña "),it("div",null,[it("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.6452877107786!2d-8.420194585289988!3d43.363529779132705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c8b2994e30b%3A0x4975dc047bc16b9a!2sC.%20Agra%20del%20Orzan%2C%203%2C%2015010%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1649268505895!5m2!1ses!2ses",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])])])],-1),Bx=it("section",{class:"page-section",id:"contact"},[it("div",{class:"container"},[it("div",{class:"text-center"},[it("h2",{class:"section-heading text-uppercase"},"Contactanós"),it("h3",{class:"section-subheading text-muted"}," Consultanós calquera dúbida. ")]),it("div",{class:"container"},[it("form",{id:"contactForm",target:"_blank",action:"https://formsubmit.co/444cuatro@gmail.com",method:"POST"},[it("div",{class:"row align-items-stretch mb-5"},[it("div",{class:"col-md-6"},[it("div",{class:"form-group"},[it("input",{type:"text",name:"name",class:"form-control",placeholder:"O teu nome",required:""})]),it("div",{class:"form-group"},[it("input",{type:"email",name:"email",class:"form-control",placeholder:"O teu correo",required:""})]),it("div",{class:"form-group mb-md-0"},[it("input",{type:"text",name:"phone",class:"form-control",placeholder:"O teu teléfono",required:""})])]),it("div",{class:"col-md-6"},[it("div",{class:"form-group form-group-textarea mb-md-0"},[it("textarea",{placeholder:"A tua mensaxe",class:"form-control",name:"message",rows:"10",required:""})])])]),it("div",{class:"text-center mb-3"},[it("button",{type:"submit",class:"btn btn-lg btn-info text-white btn-block"},"Enviar")])])])])],-1),jx=Sc('<footer class="footer py-4"><div class="container"><div class="row align-items-center"><div class="col-lg-4 text-lg-start"> Copyright © Your Website 2022 </div><div class="col-lg-4 my-3 my-lg-0"><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></div><div class="col-lg-4 text-lg-end"><a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a><a class="link-dark text-decoration-none" href="#!">Terms of Use</a></div></div></div></footer>',1),qx={__name:"Sala",setup(e){const t=Ox();return b_(()=>{t.obtenerDatos()}),(n,r)=>{const s=C_("v-pagination");return Dr(),$a("main",null,[Zt(bR),Nx,it("section",kx,[it("div",Dx,[it("div",xx,[Lx,Vx,it("div",Mx,[(Dr(!0),$a(rn,null,YA(Ve(t).obras,i=>(Dr(),Fh(xR,{class:"col-4 m-2",key:i.id,obra:i},null,8,["obra"]))),128))])]),it("div",Ux,[Zt(s,{modelValue:Ve(t).page,"onUpdate:modelValue":r[0]||(r[0]=i=>Ve(t).page=i),length:Ve(t).paginas,onClick:Ve(t).siguiente},null,8,["modelValue","length","onClick"])])])]),Fx,$x,Bx,jx])}}},Hx=lR({history:Rb("/danthea/"),routes:[{path:"/",name:"sala",component:qx},{path:"/detalle/:id",name:"detalle",props:!0,component:()=>Np(()=>import("./Detalle-af3ba5ef.js"),[])},{path:"/formulario",name:"formulario",component:()=>Np(()=>import("./Formulario-f142ad0a.js"),[])}]});var me="top",De="bottom",xe="right",ge="left",gl="auto",ai=[me,De,xe,ge],zr="start",Hs="end",PT="clippingParents",mf="viewport",fs="popper",OT="reference",dh=ai.reduce(function(e,t){return e.concat([t+"-"+zr,t+"-"+Hs])},[]),gf=[].concat(ai,[gl]).reduce(function(e,t){return e.concat([t,t+"-"+zr,t+"-"+Hs])},[]),NT="beforeRead",kT="read",DT="afterRead",xT="beforeMain",LT="main",VT="afterMain",MT="beforeWrite",UT="write",FT="afterWrite",$T=[NT,kT,DT,xT,LT,VT,MT,UT,FT];function vn(e){return e?(e.nodeName||"").toLowerCase():null}function Le(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Gr(e){var t=Le(e).Element;return e instanceof t||e instanceof Element}function Fe(e){var t=Le(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _f(e){if(typeof ShadowRoot>"u")return!1;var t=Le(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Wx(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},s=t.attributes[n]||{},i=t.elements[n];!Fe(i)||!vn(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(o){var a=s[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function Kx(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var s=t.elements[r],i=t.attributes[r]||{},o=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!Fe(s)||!vn(s)||(Object.assign(s.style,a),Object.keys(i).forEach(function(c){s.removeAttribute(c)}))})}}const yf={name:"applyStyles",enabled:!0,phase:"write",fn:Wx,effect:Kx,requires:["computeStyles"]};function mn(e){return e.split("-")[0]}var Ur=Math.max,dc=Math.min,Ws=Math.round;function fh(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function BT(){return!/^((?!chrome|android).)*safari/i.test(fh())}function Ks(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),s=1,i=1;t&&Fe(e)&&(s=e.offsetWidth>0&&Ws(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ws(r.height)/e.offsetHeight||1);var o=Gr(e)?Le(e):window,a=o.visualViewport,c=!BT()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/s,u=(r.top+(c&&a?a.offsetTop:0))/i,h=r.width/s,d=r.height/i;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function vf(e){var t=Ks(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function jT(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_f(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Un(e){return Le(e).getComputedStyle(e)}function zx(e){return["table","td","th"].indexOf(vn(e))>=0}function yr(e){return((Gr(e)?e.ownerDocument:e.document)||window.document).documentElement}function _l(e){return vn(e)==="html"?e:e.assignedSlot||e.parentNode||(_f(e)?e.host:null)||yr(e)}function ig(e){return!Fe(e)||Un(e).position==="fixed"?null:e.offsetParent}function Gx(e){var t=/firefox/i.test(fh()),n=/Trident/i.test(fh());if(n&&Fe(e)){var r=Un(e);if(r.position==="fixed")return null}var s=_l(e);for(_f(s)&&(s=s.host);Fe(s)&&["html","body"].indexOf(vn(s))<0;){var i=Un(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function Uo(e){for(var t=Le(e),n=ig(e);n&&zx(n)&&Un(n).position==="static";)n=ig(n);return n&&(vn(n)==="html"||vn(n)==="body"&&Un(n).position==="static")?t:n||Gx(e)||t}function Ef(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Fi(e,t,n){return Ur(e,dc(t,n))}function Qx(e,t,n){var r=Fi(e,t,n);return r>n?n:r}function qT(){return{top:0,right:0,bottom:0,left:0}}function HT(e){return Object.assign({},qT(),e)}function WT(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Yx=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,HT(typeof t!="number"?t:WT(t,ai))};function Xx(e){var t,n=e.state,r=e.name,s=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=mn(n.placement),c=Ef(a),l=[ge,xe].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var h=Yx(s.padding,n),d=vf(i),f=c==="y"?me:ge,g=c==="y"?De:xe,y=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],v=o[c]-n.rects.reference[c],A=Uo(i),R=A?c==="y"?A.clientHeight||0:A.clientWidth||0:0,N=y/2-v/2,w=h[f],U=R-d[u]-h[g],$=R/2-d[u]/2+N,Y=Fi(w,$,U),q=c;n.modifiersData[r]=(t={},t[q]=Y,t.centerOffset=Y-$,t)}}function Jx(e){var t=e.state,n=e.options,r=n.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||jT(t.elements.popper,s)&&(t.elements.arrow=s))}const KT={name:"arrow",enabled:!0,phase:"main",fn:Xx,effect:Jx,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function zs(e){return e.split("-")[1]}var Zx={top:"auto",right:"auto",bottom:"auto",left:"auto"};function t1(e,t){var n=e.x,r=e.y,s=t.devicePixelRatio||1;return{x:Ws(n*s)/s||0,y:Ws(r*s)/s||0}}function og(e){var t,n=e.popper,r=e.popperRect,s=e.placement,i=e.variation,o=e.offsets,a=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,h=e.isFixed,d=o.x,f=d===void 0?0:d,g=o.y,y=g===void 0?0:g,v=typeof u=="function"?u({x:f,y}):{x:f,y};f=v.x,y=v.y;var A=o.hasOwnProperty("x"),R=o.hasOwnProperty("y"),N=ge,w=me,U=window;if(l){var $=Uo(n),Y="clientHeight",q="clientWidth";if($===Le(n)&&($=yr(n),Un($).position!=="static"&&a==="absolute"&&(Y="scrollHeight",q="scrollWidth")),$=$,s===me||(s===ge||s===xe)&&i===Hs){w=De;var j=h&&$===U&&U.visualViewport?U.visualViewport.height:$[Y];y-=j-r.height,y*=c?1:-1}if(s===ge||(s===me||s===De)&&i===Hs){N=xe;var J=h&&$===U&&U.visualViewport?U.visualViewport.width:$[q];f-=J-r.width,f*=c?1:-1}}var pt=Object.assign({position:a},l&&Zx),bt=u===!0?t1({x:f,y},Le(n)):{x:f,y};if(f=bt.x,y=bt.y,c){var At;return Object.assign({},pt,(At={},At[w]=R?"0":"",At[N]=A?"0":"",At.transform=(U.devicePixelRatio||1)<=1?"translate("+f+"px, "+y+"px)":"translate3d("+f+"px, "+y+"px, 0)",At))}return Object.assign({},pt,(t={},t[w]=R?y+"px":"",t[N]=A?f+"px":"",t.transform="",t))}function e1(e){var t=e.state,n=e.options,r=n.gpuAcceleration,s=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:mn(t.placement),variation:zs(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,og(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,og(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Tf={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:e1,data:{}};var da={passive:!0};function n1(e){var t=e.state,n=e.instance,r=e.options,s=r.scroll,i=s===void 0?!0:s,o=r.resize,a=o===void 0?!0:o,c=Le(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",n.update,da)}),a&&c.addEventListener("resize",n.update,da),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",n.update,da)}),a&&c.removeEventListener("resize",n.update,da)}}const wf={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:n1,data:{}};var r1={left:"right",right:"left",bottom:"top",top:"bottom"};function ka(e){return e.replace(/left|right|bottom|top/g,function(t){return r1[t]})}var s1={start:"end",end:"start"};function ag(e){return e.replace(/start|end/g,function(t){return s1[t]})}function Af(e){var t=Le(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function If(e){return Ks(yr(e)).left+Af(e).scrollLeft}function i1(e,t){var n=Le(e),r=yr(e),s=n.visualViewport,i=r.clientWidth,o=r.clientHeight,a=0,c=0;if(s){i=s.width,o=s.height;var l=BT();(l||!l&&t==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}return{width:i,height:o,x:a+If(e),y:c}}function o1(e){var t,n=yr(e),r=Af(e),s=(t=e.ownerDocument)==null?void 0:t.body,i=Ur(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=Ur(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-r.scrollLeft+If(e),c=-r.scrollTop;return Un(s||n).direction==="rtl"&&(a+=Ur(n.clientWidth,s?s.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function bf(e){var t=Un(e),n=t.overflow,r=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+r)}function zT(e){return["html","body","#document"].indexOf(vn(e))>=0?e.ownerDocument.body:Fe(e)&&bf(e)?e:zT(_l(e))}function $i(e,t){var n;t===void 0&&(t=[]);var r=zT(e),s=r===((n=e.ownerDocument)==null?void 0:n.body),i=Le(r),o=s?[i].concat(i.visualViewport||[],bf(r)?r:[]):r,a=t.concat(o);return s?a:a.concat($i(_l(o)))}function ph(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function a1(e,t){var n=Ks(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function cg(e,t,n){return t===mf?ph(i1(e,n)):Gr(t)?a1(t,n):ph(o1(yr(e)))}function c1(e){var t=$i(_l(e)),n=["absolute","fixed"].indexOf(Un(e).position)>=0,r=n&&Fe(e)?Uo(e):e;return Gr(r)?t.filter(function(s){return Gr(s)&&jT(s,r)&&vn(s)!=="body"}):[]}function l1(e,t,n,r){var s=t==="clippingParents"?c1(e):[].concat(t),i=[].concat(s,[n]),o=i[0],a=i.reduce(function(c,l){var u=cg(e,l,r);return c.top=Ur(u.top,c.top),c.right=dc(u.right,c.right),c.bottom=dc(u.bottom,c.bottom),c.left=Ur(u.left,c.left),c},cg(e,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function GT(e){var t=e.reference,n=e.element,r=e.placement,s=r?mn(r):null,i=r?zs(r):null,o=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,c;switch(s){case me:c={x:o,y:t.y-n.height};break;case De:c={x:o,y:t.y+t.height};break;case xe:c={x:t.x+t.width,y:a};break;case ge:c={x:t.x-n.width,y:a};break;default:c={x:t.x,y:t.y}}var l=s?Ef(s):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case zr:c[l]=c[l]-(t[u]/2-n[u]/2);break;case Hs:c[l]=c[l]+(t[u]/2-n[u]/2);break}}return c}function Gs(e,t){t===void 0&&(t={});var n=t,r=n.placement,s=r===void 0?e.placement:r,i=n.strategy,o=i===void 0?e.strategy:i,a=n.boundary,c=a===void 0?PT:a,l=n.rootBoundary,u=l===void 0?mf:l,h=n.elementContext,d=h===void 0?fs:h,f=n.altBoundary,g=f===void 0?!1:f,y=n.padding,v=y===void 0?0:y,A=HT(typeof v!="number"?v:WT(v,ai)),R=d===fs?OT:fs,N=e.rects.popper,w=e.elements[g?R:d],U=l1(Gr(w)?w:w.contextElement||yr(e.elements.popper),c,u,o),$=Ks(e.elements.reference),Y=GT({reference:$,element:N,strategy:"absolute",placement:s}),q=ph(Object.assign({},N,Y)),j=d===fs?q:$,J={top:U.top-j.top+A.top,bottom:j.bottom-U.bottom+A.bottom,left:U.left-j.left+A.left,right:j.right-U.right+A.right},pt=e.modifiersData.offset;if(d===fs&&pt){var bt=pt[s];Object.keys(J).forEach(function(At){var he=[xe,De].indexOf(At)>=0?1:-1,Vt=[me,De].indexOf(At)>=0?"y":"x";J[At]+=bt[Vt]*he})}return J}function u1(e,t){t===void 0&&(t={});var n=t,r=n.placement,s=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?gf:c,u=zs(r),h=u?a?dh:dh.filter(function(g){return zs(g)===u}):ai,d=h.filter(function(g){return l.indexOf(g)>=0});d.length===0&&(d=h);var f=d.reduce(function(g,y){return g[y]=Gs(e,{placement:y,boundary:s,rootBoundary:i,padding:o})[mn(y)],g},{});return Object.keys(f).sort(function(g,y){return f[g]-f[y]})}function h1(e){if(mn(e)===gl)return[];var t=ka(e);return[ag(e),t,ag(t)]}function d1(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,g=f===void 0?!0:f,y=n.allowedAutoPlacements,v=t.options.placement,A=mn(v),R=A===v,N=c||(R||!g?[ka(v)]:h1(v)),w=[v].concat(N).reduce(function(be,Re){return be.concat(mn(Re)===gl?u1(t,{placement:Re,boundary:u,rootBoundary:h,padding:l,flipVariations:g,allowedAutoPlacements:y}):Re)},[]),U=t.rects.reference,$=t.rects.popper,Y=new Map,q=!0,j=w[0],J=0;J<w.length;J++){var pt=w[J],bt=mn(pt),At=zs(pt)===zr,he=[me,De].indexOf(bt)>=0,Vt=he?"width":"height",et=Gs(t,{placement:pt,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),ct=he?At?xe:ge:At?De:me;U[Vt]>$[Vt]&&(ct=ka(ct));var ht=ka(ct),Yt=[];if(i&&Yt.push(et[bt]<=0),a&&Yt.push(et[ct]<=0,et[ht]<=0),Yt.every(function(be){return be})){j=pt,q=!1;break}Y.set(pt,Yt)}if(q)for(var Ie=g?3:1,_e=function(Re){var Dt=w.find(function(I){var M=Y.get(I);if(M)return M.slice(0,Re).every(function(x){return x})});if(Dt)return j=Dt,"break"},Mt=Ie;Mt>0;Mt--){var qe=_e(Mt);if(qe==="break")break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}}const QT={name:"flip",enabled:!0,phase:"main",fn:d1,requiresIfExists:["offset"],data:{_skip:!1}};function lg(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ug(e){return[me,xe,De,ge].some(function(t){return e[t]>=0})}function f1(e){var t=e.state,n=e.name,r=t.rects.reference,s=t.rects.popper,i=t.modifiersData.preventOverflow,o=Gs(t,{elementContext:"reference"}),a=Gs(t,{altBoundary:!0}),c=lg(o,r),l=lg(a,s,i),u=ug(c),h=ug(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const YT={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:f1};function p1(e,t,n){var r=mn(e),s=[ge,me].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*s,[ge,xe].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function m1(e){var t=e.state,n=e.options,r=e.name,s=n.offset,i=s===void 0?[0,0]:s,o=gf.reduce(function(u,h){return u[h]=p1(h,t.rects,i),u},{}),a=o[t.placement],c=a.x,l=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}const XT={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:m1};function g1(e){var t=e.state,n=e.name;t.modifiersData[n]=GT({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Rf={name:"popperOffsets",enabled:!0,phase:"read",fn:g1,data:{}};function _1(e){return e==="x"?"y":"x"}function y1(e){var t=e.state,n=e.options,r=e.name,s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,g=n.tetherOffset,y=g===void 0?0:g,v=Gs(t,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),A=mn(t.placement),R=zs(t.placement),N=!R,w=Ef(A),U=_1(w),$=t.modifiersData.popperOffsets,Y=t.rects.reference,q=t.rects.popper,j=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,J=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),pt=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,bt={x:0,y:0};if($){if(i){var At,he=w==="y"?me:ge,Vt=w==="y"?De:xe,et=w==="y"?"height":"width",ct=$[w],ht=ct+v[he],Yt=ct-v[Vt],Ie=f?-q[et]/2:0,_e=R===zr?Y[et]:q[et],Mt=R===zr?-q[et]:-Y[et],qe=t.elements.arrow,be=f&&qe?vf(qe):{width:0,height:0},Re=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:qT(),Dt=Re[he],I=Re[Vt],M=Fi(0,Y[et],be[et]),x=N?Y[et]/2-Ie-M-Dt-J.mainAxis:_e-M-Dt-J.mainAxis,W=N?-Y[et]/2+Ie+M+I+J.mainAxis:Mt+M+I+J.mainAxis,dt=t.elements.arrow&&Uo(t.elements.arrow),p=dt?w==="y"?dt.clientTop||0:dt.clientLeft||0:0,m=(At=pt==null?void 0:pt[w])!=null?At:0,_=ct+x-m-p,E=ct+W-m,b=Fi(f?dc(ht,_):ht,ct,f?Ur(Yt,E):Yt);$[w]=b,bt[w]=b-ct}if(a){var S,F=w==="x"?me:ge,k=w==="x"?De:xe,D=$[U],P=U==="y"?"height":"width",z=D+v[F],B=D-v[k],K=[me,ge].indexOf(A)!==-1,X=(S=pt==null?void 0:pt[U])!=null?S:0,lt=K?z:D-Y[P]-q[P]-X+J.altAxis,Et=K?D+Y[P]+q[P]-X-J.altAxis:B,yt=f&&K?Qx(lt,D,Et):Fi(f?lt:z,D,f?Et:B);$[U]=yt,bt[U]=yt-D}t.modifiersData[r]=bt}}const JT={name:"preventOverflow",enabled:!0,phase:"main",fn:y1,requiresIfExists:["offset"]};function v1(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function E1(e){return e===Le(e)||!Fe(e)?Af(e):v1(e)}function T1(e){var t=e.getBoundingClientRect(),n=Ws(t.width)/e.offsetWidth||1,r=Ws(t.height)/e.offsetHeight||1;return n!==1||r!==1}function w1(e,t,n){n===void 0&&(n=!1);var r=Fe(t),s=Fe(t)&&T1(t),i=yr(t),o=Ks(e,s,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((vn(t)!=="body"||bf(i))&&(a=E1(t)),Fe(t)?(c=Ks(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=If(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function A1(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function s(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=t.get(a);c&&s(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||s(i)}),r}function I1(e){var t=A1(e);return $T.reduce(function(n,r){return n.concat(t.filter(function(s){return s.phase===r}))},[])}function b1(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function R1(e){var t=e.reduce(function(n,r){var s=n[r.name];return n[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var hg={placement:"bottom",modifiers:[],strategy:"absolute"};function dg(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function yl(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,s=t.defaultOptions,i=s===void 0?hg:s;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},hg,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(A){var R=typeof A=="function"?A(u.options):A;y(),u.options=Object.assign({},i,u.options,R),u.scrollParents={reference:Gr(a)?$i(a):a.contextElement?$i(a.contextElement):[],popper:$i(c)};var N=I1(R1([].concat(r,u.options.modifiers)));return u.orderedModifiers=N.filter(function(w){return w.enabled}),g(),f.update()},forceUpdate:function(){if(!d){var A=u.elements,R=A.reference,N=A.popper;if(dg(R,N)){u.rects={reference:w1(R,Uo(N),u.options.strategy==="fixed"),popper:vf(N)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(J){return u.modifiersData[J.name]=Object.assign({},J.data)});for(var w=0;w<u.orderedModifiers.length;w++){if(u.reset===!0){u.reset=!1,w=-1;continue}var U=u.orderedModifiers[w],$=U.fn,Y=U.options,q=Y===void 0?{}:Y,j=U.name;typeof $=="function"&&(u=$({state:u,options:q,name:j,instance:f})||u)}}}},update:b1(function(){return new Promise(function(v){f.forceUpdate(),v(u)})}),destroy:function(){y(),d=!0}};if(!dg(a,c))return f;f.setOptions(l).then(function(v){!d&&l.onFirstUpdate&&l.onFirstUpdate(v)});function g(){u.orderedModifiers.forEach(function(v){var A=v.name,R=v.options,N=R===void 0?{}:R,w=v.effect;if(typeof w=="function"){var U=w({state:u,name:A,instance:f,options:N}),$=function(){};h.push(U||$)}})}function y(){h.forEach(function(v){return v()}),h=[]}return f}}var S1=yl(),C1=[wf,Rf,Tf,yf],P1=yl({defaultModifiers:C1}),O1=[wf,Rf,Tf,yf,XT,QT,JT,KT,YT],Sf=yl({defaultModifiers:O1});const ZT=Object.freeze(Object.defineProperty({__proto__:null,afterMain:VT,afterRead:DT,afterWrite:FT,applyStyles:yf,arrow:KT,auto:gl,basePlacements:ai,beforeMain:xT,beforeRead:NT,beforeWrite:MT,bottom:De,clippingParents:PT,computeStyles:Tf,createPopper:Sf,createPopperBase:S1,createPopperLite:P1,detectOverflow:Gs,end:Hs,eventListeners:wf,flip:QT,hide:YT,left:ge,main:LT,modifierPhases:$T,offset:XT,placements:gf,popper:fs,popperGenerator:yl,popperOffsets:Rf,preventOverflow:JT,read:kT,reference:OT,right:xe,start:zr,top:me,variationPlacements:dh,viewport:mf,write:UT},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Wn=new Map,eu={set(e,t,n){Wn.has(e)||Wn.set(e,new Map);const r=Wn.get(e);if(!r.has(t)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(t,n)},get(e,t){return Wn.has(e)&&Wn.get(e).get(t)||null},remove(e,t){if(!Wn.has(e))return;const n=Wn.get(e);n.delete(t),n.size===0&&Wn.delete(e)}},N1=1e6,k1=1e3,mh="transitionend",tw=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),D1=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),x1=e=>{do e+=Math.floor(Math.random()*N1);while(document.getElementById(e));return e},L1=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),s=Number.parseFloat(n);return!r&&!s?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*k1)},ew=e=>{e.dispatchEvent(new Event(mh))},Cn=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),dr=e=>Cn(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(tw(e)):null,ci=e=>{if(!Cn(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const r=e.closest("summary");if(r&&r.parentNode!==n||r===null)return!1}return t},fr=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",nw=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?nw(e.parentNode):null},fc=()=>{},Fo=e=>{e.offsetHeight},rw=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,nu=[],V1=e=>{document.readyState==="loading"?(nu.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of nu)t()}),nu.push(e)):e()},$e=()=>document.documentElement.dir==="rtl",je=e=>{V1(()=>{const t=rw();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},Te=(e,t=[],n=e)=>typeof e=="function"?e(...t):n,sw=(e,t,n=!0)=>{if(!n){Te(e);return}const r=5,s=L1(t)+r;let i=!1;const o=({target:a})=>{a===t&&(i=!0,t.removeEventListener(mh,o),Te(e))};t.addEventListener(mh,o),setTimeout(()=>{i||ew(t)},s)},Cf=(e,t,n,r)=>{const s=e.length;let i=e.indexOf(t);return i===-1?!n&&r?e[s-1]:e[0]:(i+=n?1:-1,r&&(i=(i+s)%s),e[Math.max(0,Math.min(i,s-1))])},M1=/[^.]*(?=\..*)\.|.*/,U1=/\..*/,F1=/::\d+$/,ru={};let fg=1;const iw={mouseenter:"mouseover",mouseleave:"mouseout"},$1=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ow(e,t){return t&&`${t}::${fg++}`||e.uidEvent||fg++}function aw(e){const t=ow(e);return e.uidEvent=t,ru[t]=ru[t]||{},ru[t]}function B1(e,t){return function n(r){return Pf(r,{delegateTarget:e}),n.oneOff&&C.off(e,r.type,t),t.apply(e,[r])}}function j1(e,t,n){return function r(s){const i=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return Pf(s,{delegateTarget:o}),r.oneOff&&C.off(e,s.type,t,n),n.apply(o,[s])}}function cw(e,t,n=null){return Object.values(e).find(r=>r.callable===t&&r.delegationSelector===n)}function lw(e,t,n){const r=typeof t=="string",s=r?n:t||n;let i=uw(e);return $1.has(i)||(i=e),[r,s,i]}function pg(e,t,n,r,s){if(typeof t!="string"||!e)return;let[i,o,a]=lw(t,n,r);t in iw&&(o=(g=>function(y){if(!y.relatedTarget||y.relatedTarget!==y.delegateTarget&&!y.delegateTarget.contains(y.relatedTarget))return g.call(this,y)})(o));const c=aw(e),l=c[a]||(c[a]={}),u=cw(l,o,i?n:null);if(u){u.oneOff=u.oneOff&&s;return}const h=ow(o,t.replace(M1,"")),d=i?j1(e,n,o):B1(e,o);d.delegationSelector=i?n:null,d.callable=o,d.oneOff=s,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,i)}function gh(e,t,n,r,s){const i=cw(t[n],r,s);i&&(e.removeEventListener(n,i,!!s),delete t[n][i.uidEvent])}function q1(e,t,n,r){const s=t[n]||{};for(const[i,o]of Object.entries(s))i.includes(r)&&gh(e,t,n,o.callable,o.delegationSelector)}function uw(e){return e=e.replace(U1,""),iw[e]||e}const C={on(e,t,n,r){pg(e,t,n,r,!1)},one(e,t,n,r){pg(e,t,n,r,!0)},off(e,t,n,r){if(typeof t!="string"||!e)return;const[s,i,o]=lw(t,n,r),a=o!==t,c=aw(e),l=c[o]||{},u=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(l).length)return;gh(e,c,o,i,s?n:null);return}if(u)for(const h of Object.keys(c))q1(e,c,h,t.slice(1));for(const[h,d]of Object.entries(l)){const f=h.replace(F1,"");(!a||t.includes(f))&&gh(e,c,o,d.callable,d.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const r=rw(),s=uw(t),i=t!==s;let o=null,a=!0,c=!0,l=!1;i&&r&&(o=r.Event(t,n),r(e).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=Pf(new Event(t,{bubbles:a,cancelable:!0}),n);return l&&u.preventDefault(),c&&e.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Pf(e,t={}){for(const[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get(){return r}})}return e}function mg(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function su(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Pn={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${su(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${su(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of n){let s=r.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=mg(e.dataset[r])}return t},getDataAttribute(e,t){return mg(e.getAttribute(`data-bs-${su(t)}`))}};class $o{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const r=Cn(n)?Pn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...Cn(n)?Pn.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const[r,s]of Object.entries(n)){const i=t[r],o=Cn(i)?"element":D1(i);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${s}".`)}}}const H1="5.3.1";class tn extends $o{constructor(t,n){super(),t=dr(t),t&&(this._element=t,this._config=this._getConfig(n),eu.set(this._element,this.constructor.DATA_KEY,this))}dispose(){eu.remove(this._element,this.constructor.DATA_KEY),C.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,r=!0){sw(t,n,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return eu.get(dr(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return H1}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const iu=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return tw(t)},Q={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!fr(n)&&ci(n))},getSelectorFromElement(e){const t=iu(e);return t&&Q.findOne(t)?t:null},getElementFromSelector(e){const t=iu(e);return t?Q.findOne(t):null},getMultipleElementsFromSelector(e){const t=iu(e);return t?Q.find(t):[]}},vl=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;C.on(document,n,`[data-bs-dismiss="${r}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),fr(this))return;const i=Q.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()})},W1="alert",K1="bs.alert",hw=`.${K1}`,z1=`close${hw}`,G1=`closed${hw}`,Q1="fade",Y1="show";class El extends tn{static get NAME(){return W1}close(){if(C.trigger(this._element,z1).defaultPrevented)return;this._element.classList.remove(Y1);const n=this._element.classList.contains(Q1);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),C.trigger(this._element,G1),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=El.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}vl(El,"close");je(El);const X1="button",J1="bs.button",Z1=`.${J1}`,tL=".data-api",eL="active",gg='[data-bs-toggle="button"]',nL=`click${Z1}${tL}`;class Tl extends tn{static get NAME(){return X1}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(eL))}static jQueryInterface(t){return this.each(function(){const n=Tl.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}C.on(document,nL,gg,e=>{e.preventDefault();const t=e.target.closest(gg);Tl.getOrCreateInstance(t).toggle()});je(Tl);const rL="swipe",li=".bs.swipe",sL=`touchstart${li}`,iL=`touchmove${li}`,oL=`touchend${li}`,aL=`pointerdown${li}`,cL=`pointerup${li}`,lL="touch",uL="pen",hL="pointer-event",dL=40,fL={endCallback:null,leftCallback:null,rightCallback:null},pL={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class pc extends $o{constructor(t,n){super(),this._element=t,!(!t||!pc.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return fL}static get DefaultType(){return pL}static get NAME(){return rL}dispose(){C.off(this._element,li)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Te(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=dL)return;const n=t/this._deltaX;this._deltaX=0,n&&Te(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(C.on(this._element,aL,t=>this._start(t)),C.on(this._element,cL,t=>this._end(t)),this._element.classList.add(hL)):(C.on(this._element,sL,t=>this._start(t)),C.on(this._element,iL,t=>this._move(t)),C.on(this._element,oL,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===uL||t.pointerType===lL)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const mL="carousel",gL="bs.carousel",vr=`.${gL}`,dw=".data-api",_L="ArrowLeft",yL="ArrowRight",vL=500,yi="next",as="prev",ps="left",Da="right",EL=`slide${vr}`,ou=`slid${vr}`,TL=`keydown${vr}`,wL=`mouseenter${vr}`,AL=`mouseleave${vr}`,IL=`dragstart${vr}`,bL=`load${vr}${dw}`,RL=`click${vr}${dw}`,fw="carousel",fa="active",SL="slide",CL="carousel-item-end",PL="carousel-item-start",OL="carousel-item-next",NL="carousel-item-prev",pw=".active",mw=".carousel-item",kL=pw+mw,DL=".carousel-item img",xL=".carousel-indicators",LL="[data-bs-slide], [data-bs-slide-to]",VL='[data-bs-ride="carousel"]',ML={[_L]:Da,[yL]:ps},UL={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},FL={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Bo extends tn{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(xL,this._element),this._addEventListeners(),this._config.ride===fw&&this.cycle()}static get Default(){return UL}static get DefaultType(){return FL}static get NAME(){return mL}next(){this._slide(yi)}nextWhenVisible(){!document.hidden&&ci(this._element)&&this.next()}prev(){this._slide(as)}pause(){this._isSliding&&ew(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){C.one(this._element,ou,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){C.one(this._element,ou,()=>this.to(t));return}const r=this._getItemIndex(this._getActive());if(r===t)return;const s=t>r?yi:as;this._slide(s,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&C.on(this._element,TL,t=>this._keydown(t)),this._config.pause==="hover"&&(C.on(this._element,wL,()=>this.pause()),C.on(this._element,AL,()=>this._maybeEnableCycle())),this._config.touch&&pc.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of Q.find(DL,this._element))C.on(r,IL,s=>s.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(ps)),rightCallback:()=>this._slide(this._directionToOrder(Da)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),vL+this._config.interval))}};this._swipeHelper=new pc(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=ML[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=Q.findOne(pw,this._indicatorsElement);n.classList.remove(fa),n.removeAttribute("aria-current");const r=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);r&&(r.classList.add(fa),r.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const r=this._getActive(),s=t===yi,i=n||Cf(this._getItems(),r,s,this._config.wrap);if(i===r)return;const o=this._getItemIndex(i),a=f=>C.trigger(this._element,f,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:o});if(a(EL).defaultPrevented||!r||!i)return;const l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const u=s?PL:CL,h=s?OL:NL;i.classList.add(h),Fo(i),r.classList.add(u),i.classList.add(u);const d=()=>{i.classList.remove(u,h),i.classList.add(fa),r.classList.remove(fa,h,u),this._isSliding=!1,a(ou)};this._queueCallback(d,r,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(SL)}_getActive(){return Q.findOne(kL,this._element)}_getItems(){return Q.find(mw,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return $e()?t===ps?as:yi:t===ps?yi:as}_orderToDirection(t){return $e()?t===as?ps:Da:t===as?Da:ps}static jQueryInterface(t){return this.each(function(){const n=Bo.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}C.on(document,RL,LL,function(e){const t=Q.getElementFromSelector(this);if(!t||!t.classList.contains(fw))return;e.preventDefault();const n=Bo.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");if(r){n.to(r),n._maybeEnableCycle();return}if(Pn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});C.on(window,bL,()=>{const e=Q.find(VL);for(const t of e)Bo.getOrCreateInstance(t)});je(Bo);const $L="collapse",BL="bs.collapse",jo=`.${BL}`,jL=".data-api",qL=`show${jo}`,HL=`shown${jo}`,WL=`hide${jo}`,KL=`hidden${jo}`,zL=`click${jo}${jL}`,au="show",ys="collapse",pa="collapsing",GL="collapsed",QL=`:scope .${ys} .${ys}`,YL="collapse-horizontal",XL="width",JL="height",ZL=".collapse.show, .collapse.collapsing",_h='[data-bs-toggle="collapse"]',tV={parent:null,toggle:!0},eV={parent:"(null|element)",toggle:"boolean"};class fo extends tn{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const r=Q.find(_h);for(const s of r){const i=Q.getSelectorFromElement(s),o=Q.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return tV}static get DefaultType(){return eV}static get NAME(){return $L}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(ZL).filter(a=>a!==this._element).map(a=>fo.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||C.trigger(this._element,qL).defaultPrevented)return;for(const a of t)a.hide();const r=this._getDimension();this._element.classList.remove(ys),this._element.classList.add(pa),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(pa),this._element.classList.add(ys,au),this._element.style[r]="",C.trigger(this._element,HL)},o=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||C.trigger(this._element,WL).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Fo(this._element),this._element.classList.add(pa),this._element.classList.remove(ys,au);for(const s of this._triggerArray){const i=Q.getElementFromSelector(s);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(pa),this._element.classList.add(ys),C.trigger(this._element,KL)};this._element.style[n]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(au)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=dr(t.parent),t}_getDimension(){return this._element.classList.contains(YL)?XL:JL}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(_h);for(const n of t){const r=Q.getElementFromSelector(n);r&&this._addAriaAndCollapsedClass([n],this._isShown(r))}}_getFirstLevelChildren(t){const n=Q.find(QL,this._config.parent);return Q.find(t,this._config.parent).filter(r=>!n.includes(r))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const r of t)r.classList.toggle(GL,!n),r.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const r=fo.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t]()}})}}C.on(document,zL,_h,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const t of Q.getMultipleElementsFromSelector(this))fo.getOrCreateInstance(t,{toggle:!1}).toggle()});je(fo);const _g="dropdown",nV="bs.dropdown",ts=`.${nV}`,Of=".data-api",rV="Escape",yg="Tab",sV="ArrowUp",vg="ArrowDown",iV=2,oV=`hide${ts}`,aV=`hidden${ts}`,cV=`show${ts}`,lV=`shown${ts}`,gw=`click${ts}${Of}`,_w=`keydown${ts}${Of}`,uV=`keyup${ts}${Of}`,ms="show",hV="dropup",dV="dropend",fV="dropstart",pV="dropup-center",mV="dropdown-center",Or='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',gV=`${Or}.${ms}`,xa=".dropdown-menu",_V=".navbar",yV=".navbar-nav",vV=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",EV=$e()?"top-end":"top-start",TV=$e()?"top-start":"top-end",wV=$e()?"bottom-end":"bottom-start",AV=$e()?"bottom-start":"bottom-end",IV=$e()?"left-start":"right-start",bV=$e()?"right-start":"left-start",RV="top",SV="bottom",CV={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},PV={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class gn extends tn{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,xa)[0]||Q.prev(this._element,xa)[0]||Q.findOne(xa,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return CV}static get DefaultType(){return PV}static get NAME(){return _g}toggle(){return this._isShown()?this.hide():this.show()}show(){if(fr(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!C.trigger(this._element,cV,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(yV))for(const r of[].concat(...document.body.children))C.on(r,"mouseover",fc);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ms),this._element.classList.add(ms),C.trigger(this._element,lV,t)}}hide(){if(fr(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!C.trigger(this._element,oV,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))C.off(r,"mouseover",fc);this._popper&&this._popper.destroy(),this._menu.classList.remove(ms),this._element.classList.remove(ms),this._element.setAttribute("aria-expanded","false"),Pn.removeDataAttribute(this._menu,"popper"),C.trigger(this._element,aV,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Cn(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${_g.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof ZT>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:Cn(this._config.reference)?t=dr(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Sf(t,this._menu,n)}_isShown(){return this._menu.classList.contains(ms)}_getPlacement(){const t=this._parent;if(t.classList.contains(dV))return IV;if(t.classList.contains(fV))return bV;if(t.classList.contains(pV))return RV;if(t.classList.contains(mV))return SV;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(hV)?n?TV:EV:n?AV:wV}_detectNavbar(){return this._element.closest(_V)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Pn.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...Te(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:n}){const r=Q.find(vV,this._menu).filter(s=>ci(s));r.length&&Cf(r,n,t===vg,!r.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=gn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===iV||t.type==="keyup"&&t.key!==yg)return;const n=Q.find(gV);for(const r of n){const s=gn.getInstance(r);if(!s||s._config.autoClose===!1)continue;const i=t.composedPath(),o=i.includes(s._menu);if(i.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===yg||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:s._element};t.type==="click"&&(a.clickEvent=t),s._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),r=t.key===rV,s=[sV,vg].includes(t.key);if(!s&&!r||n&&!r)return;t.preventDefault();const i=this.matches(Or)?this:Q.prev(this,Or)[0]||Q.next(this,Or)[0]||Q.findOne(Or,t.delegateTarget.parentNode),o=gn.getOrCreateInstance(i);if(s){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),i.focus())}}C.on(document,_w,Or,gn.dataApiKeydownHandler);C.on(document,_w,xa,gn.dataApiKeydownHandler);C.on(document,gw,gn.clearMenus);C.on(document,uV,gn.clearMenus);C.on(document,gw,Or,function(e){e.preventDefault(),gn.getOrCreateInstance(this).toggle()});je(gn);const yw="backdrop",OV="fade",Eg="show",Tg=`mousedown.bs.${yw}`,NV={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},kV={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class vw extends $o{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return NV}static get DefaultType(){return kV}static get NAME(){return yw}show(t){if(!this._config.isVisible){Te(t);return}this._append();const n=this._getElement();this._config.isAnimated&&Fo(n),n.classList.add(Eg),this._emulateAnimation(()=>{Te(t)})}hide(t){if(!this._config.isVisible){Te(t);return}this._getElement().classList.remove(Eg),this._emulateAnimation(()=>{this.dispose(),Te(t)})}dispose(){this._isAppended&&(C.off(this._element,Tg),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(OV),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=dr(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),C.on(t,Tg,()=>{Te(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){sw(t,this._getElement(),this._config.isAnimated)}}const DV="focustrap",xV="bs.focustrap",mc=`.${xV}`,LV=`focusin${mc}`,VV=`keydown.tab${mc}`,MV="Tab",UV="forward",wg="backward",FV={autofocus:!0,trapElement:null},$V={autofocus:"boolean",trapElement:"element"};class Ew extends $o{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return FV}static get DefaultType(){return $V}static get NAME(){return DV}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),C.off(document,mc),C.on(document,LV,t=>this._handleFocusin(t)),C.on(document,VV,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,C.off(document,mc))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const r=Q.focusableChildren(n);r.length===0?n.focus():this._lastTabNavDirection===wg?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===MV&&(this._lastTabNavDirection=t.shiftKey?wg:UV)}}const Ag=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ig=".sticky-top",ma="padding-right",bg="margin-right";class yh{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ma,n=>n+t),this._setElementAttributes(Ag,ma,n=>n+t),this._setElementAttributes(Ig,bg,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ma),this._resetElementAttributes(Ag,ma),this._resetElementAttributes(Ig,bg)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,r){const s=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${r(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,n){const r=t.style.getPropertyValue(n);r&&Pn.setDataAttribute(t,n,r)}_resetElementAttributes(t,n){const r=s=>{const i=Pn.getDataAttribute(s,n);if(i===null){s.style.removeProperty(n);return}Pn.removeDataAttribute(s,n),s.style.setProperty(n,i)};this._applyManipulationCallback(t,r)}_applyManipulationCallback(t,n){if(Cn(t)){n(t);return}for(const r of Q.find(t,this._element))n(r)}}const BV="modal",jV="bs.modal",Be=`.${jV}`,qV=".data-api",HV="Escape",WV=`hide${Be}`,KV=`hidePrevented${Be}`,Tw=`hidden${Be}`,ww=`show${Be}`,zV=`shown${Be}`,GV=`resize${Be}`,QV=`click.dismiss${Be}`,YV=`mousedown.dismiss${Be}`,XV=`keydown.dismiss${Be}`,JV=`click${Be}${qV}`,Rg="modal-open",ZV="fade",Sg="show",cu="modal-static",tM=".modal.show",eM=".modal-dialog",nM=".modal-body",rM='[data-bs-toggle="modal"]',sM={backdrop:!0,focus:!0,keyboard:!0},iM={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Qs extends tn{constructor(t,n){super(t,n),this._dialog=Q.findOne(eM,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new yh,this._addEventListeners()}static get Default(){return sM}static get DefaultType(){return iM}static get NAME(){return BV}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||C.trigger(this._element,ww,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Rg),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||C.trigger(this._element,WV).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Sg),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){C.off(window,Be),C.off(this._dialog,Be),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new vw({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ew({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=Q.findOne(nM,this._dialog);n&&(n.scrollTop=0),Fo(this._element),this._element.classList.add(Sg);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,C.trigger(this._element,zV,{relatedTarget:t})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){C.on(this._element,XV,t=>{if(t.key===HV){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),C.on(window,GV,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),C.on(this._element,YV,t=>{C.one(this._element,QV,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Rg),this._resetAdjustments(),this._scrollBar.reset(),C.trigger(this._element,Tw)})}_isAnimated(){return this._element.classList.contains(ZV)}_triggerBackdropTransition(){if(C.trigger(this._element,KV).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(cu)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(cu),this._queueCallback(()=>{this._element.classList.remove(cu),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),r=n>0;if(r&&!t){const s=$e()?"paddingLeft":"paddingRight";this._element.style[s]=`${n}px`}if(!r&&t){const s=$e()?"paddingRight":"paddingLeft";this._element.style[s]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const r=Qs.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t](n)}})}}C.on(document,JV,rM,function(e){const t=Q.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),C.one(t,ww,s=>{s.defaultPrevented||C.one(t,Tw,()=>{ci(this)&&this.focus()})});const n=Q.findOne(tM);n&&Qs.getInstance(n).hide(),Qs.getOrCreateInstance(t).toggle(this)});vl(Qs);je(Qs);const oM="offcanvas",aM="bs.offcanvas",Bn=`.${aM}`,Aw=".data-api",cM=`load${Bn}${Aw}`,lM="Escape",Cg="show",Pg="showing",Og="hiding",uM="offcanvas-backdrop",Iw=".offcanvas.show",hM=`show${Bn}`,dM=`shown${Bn}`,fM=`hide${Bn}`,Ng=`hidePrevented${Bn}`,bw=`hidden${Bn}`,pM=`resize${Bn}`,mM=`click${Bn}${Aw}`,gM=`keydown.dismiss${Bn}`,_M='[data-bs-toggle="offcanvas"]',yM={backdrop:!0,keyboard:!0,scroll:!1},vM={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class pr extends tn{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return yM}static get DefaultType(){return vM}static get NAME(){return oM}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||C.trigger(this._element,hM,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new yh().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Pg);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Cg),this._element.classList.remove(Pg),C.trigger(this._element,dM,{relatedTarget:t})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||C.trigger(this._element,fM).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Og),this._backdrop.hide();const n=()=>{this._element.classList.remove(Cg,Og),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new yh().reset(),C.trigger(this._element,bw)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){C.trigger(this._element,Ng);return}this.hide()},n=!!this._config.backdrop;return new vw({className:uM,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Ew({trapElement:this._element})}_addEventListeners(){C.on(this._element,gM,t=>{if(t.key===lM){if(this._config.keyboard){this.hide();return}C.trigger(this._element,Ng)}})}static jQueryInterface(t){return this.each(function(){const n=pr.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}C.on(document,mM,_M,function(e){const t=Q.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),fr(this))return;C.one(t,bw,()=>{ci(this)&&this.focus()});const n=Q.findOne(Iw);n&&n!==t&&pr.getInstance(n).hide(),pr.getOrCreateInstance(t).toggle(this)});C.on(window,cM,()=>{for(const e of Q.find(Iw))pr.getOrCreateInstance(e).show()});C.on(window,pM,()=>{for(const e of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&pr.getOrCreateInstance(e).hide()});vl(pr);je(pr);const EM=/^aria-[\w-]*$/i,Rw={"*":["class","dir","id","lang","role",EM],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},TM=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),wM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,AM=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?TM.has(n)?!!wM.test(e.nodeValue):!0:t.filter(r=>r instanceof RegExp).some(r=>r.test(n))};function IM(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const s=new window.DOMParser().parseFromString(e,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const o of i){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),l=[].concat(t["*"]||[],t[a]||[]);for(const u of c)AM(u,l)||o.removeAttribute(u.nodeName)}return s.body.innerHTML}const bM="TemplateFactory",RM={allowList:Rw,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},SM={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},CM={entry:"(string|element|function|null)",selector:"(string|element)"};class PM extends $o{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return RM}static get DefaultType(){return SM}static get NAME(){return bM}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,i]of Object.entries(this._config.content))this._setContent(t,i,s);const n=t.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&n.classList.add(...r.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,r]of Object.entries(t))super._typeCheckConfig({selector:n,entry:r},CM)}_setContent(t,n,r){const s=Q.findOne(r,t);if(s){if(n=this._resolvePossibleFunction(n),!n){s.remove();return}if(Cn(n)){this._putElementInTemplate(dr(n),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(n);return}s.textContent=n}}_maybeSanitize(t){return this._config.sanitize?IM(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return Te(t,[this])}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const OM="tooltip",NM=new Set(["sanitize","allowList","sanitizeFn"]),lu="fade",kM="modal",ga="show",DM=".tooltip-inner",kg=`.${kM}`,Dg="hide.bs.modal",vi="hover",uu="focus",xM="click",LM="manual",VM="hide",MM="hidden",UM="show",FM="shown",$M="inserted",BM="click",jM="focusin",qM="focusout",HM="mouseenter",WM="mouseleave",KM={AUTO:"auto",TOP:"top",RIGHT:$e()?"left":"right",BOTTOM:"bottom",LEFT:$e()?"right":"left"},zM={allowList:Rw,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},GM={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ui extends tn{constructor(t,n){if(typeof ZT>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return zM}static get DefaultType(){return GM}static get NAME(){return OM}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),C.off(this._element.closest(kg),Dg,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=C.trigger(this._element,this.constructor.eventName(UM)),r=(nw(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!r)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),C.trigger(this._element,this.constructor.eventName($M))),this._popper=this._createPopper(s),s.classList.add(ga),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))C.on(a,"mouseover",fc);const o=()=>{C.trigger(this._element,this.constructor.eventName(FM)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||C.trigger(this._element,this.constructor.eventName(VM)).defaultPrevented)return;if(this._getTipElement().classList.remove(ga),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))C.off(s,"mouseover",fc);this._activeTrigger[xM]=!1,this._activeTrigger[uu]=!1,this._activeTrigger[vi]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),C.trigger(this._element,this.constructor.eventName(MM)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(lu,ga),n.classList.add(`bs-${this.constructor.NAME}-auto`);const r=x1(this.constructor.NAME).toString();return n.setAttribute("id",r),this._isAnimated()&&n.classList.add(lu),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new PM({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[DM]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(lu)}_isShown(){return this.tip&&this.tip.classList.contains(ga)}_createPopper(t){const n=Te(this._config.placement,[this,t,this._element]),r=KM[n.toUpperCase()];return Sf(this._element,t,this._getPopperConfig(r))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return Te(t,[this._element])}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...n,...Te(this._config.popperConfig,[n])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")C.on(this._element,this.constructor.eventName(BM),this._config.selector,r=>{this._initializeOnDelegatedTarget(r).toggle()});else if(n!==LM){const r=n===vi?this.constructor.eventName(HM):this.constructor.eventName(jM),s=n===vi?this.constructor.eventName(WM):this.constructor.eventName(qM);C.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?uu:vi]=!0,o._enter()}),C.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?uu:vi]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},C.on(this._element.closest(kg),Dg,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=Pn.getDataAttributes(this._element);for(const r of Object.keys(n))NM.has(r)&&delete n[r];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:dr(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[n,r]of Object.entries(this._config))this.constructor.Default[n]!==r&&(t[n]=r);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=ui.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}je(ui);const QM="popover",YM=".popover-header",XM=".popover-body",JM={...ui.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ZM={...ui.DefaultType,content:"(null|string|element|function)"};class Nf extends ui{static get Default(){return JM}static get DefaultType(){return ZM}static get NAME(){return QM}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[YM]:this._getTitle(),[XM]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Nf.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}je(Nf);const tU="scrollspy",eU="bs.scrollspy",kf=`.${eU}`,nU=".data-api",rU=`activate${kf}`,xg=`click${kf}`,sU=`load${kf}${nU}`,iU="dropdown-item",cs="active",oU='[data-bs-spy="scroll"]',hu="[href]",aU=".nav, .list-group",Lg=".nav-link",cU=".nav-item",lU=".list-group-item",uU=`${Lg}, ${cU} > ${Lg}, ${lU}`,hU=".dropdown",dU=".dropdown-toggle",fU={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},pU={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class wl extends tn{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return fU}static get DefaultType(){return pU}static get NAME(){return tU}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=dr(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(C.off(this._config.target,xg),C.on(this._config.target,xg,hu,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const r=this._rootElement||window,s=n.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:s,behavior:"smooth"});return}r.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=o=>this._targetLinks.get(`#${o.target.id}`),r=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},s=(this._rootElement||document.documentElement).scrollTop,i=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&a){if(r(o),!s)return;continue}!i&&!a&&r(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(hu,this._config.target);for(const n of t){if(!n.hash||fr(n))continue;const r=Q.findOne(decodeURI(n.hash),this._element);ci(r)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,r))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(cs),this._activateParents(t),C.trigger(this._element,rU,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(iU)){Q.findOne(dU,t.closest(hU)).classList.add(cs);return}for(const n of Q.parents(t,aU))for(const r of Q.prev(n,uU))r.classList.add(cs)}_clearActiveClass(t){t.classList.remove(cs);const n=Q.find(`${hu}.${cs}`,t);for(const r of n)r.classList.remove(cs)}static jQueryInterface(t){return this.each(function(){const n=wl.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}C.on(window,sU,()=>{for(const e of Q.find(oU))wl.getOrCreateInstance(e)});je(wl);const mU="tab",gU="bs.tab",es=`.${gU}`,_U=`hide${es}`,yU=`hidden${es}`,vU=`show${es}`,EU=`shown${es}`,TU=`click${es}`,wU=`keydown${es}`,AU=`load${es}`,IU="ArrowLeft",Vg="ArrowRight",bU="ArrowUp",Mg="ArrowDown",du="Home",Ug="End",Nr="active",Fg="fade",fu="show",RU="dropdown",SU=".dropdown-toggle",CU=".dropdown-menu",pu=":not(.dropdown-toggle)",PU='.list-group, .nav, [role="tablist"]',OU=".nav-item, .list-group-item",NU=`.nav-link${pu}, .list-group-item${pu}, [role="tab"]${pu}`,Sw='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',mu=`${NU}, ${Sw}`,kU=`.${Nr}[data-bs-toggle="tab"], .${Nr}[data-bs-toggle="pill"], .${Nr}[data-bs-toggle="list"]`;class Ys extends tn{constructor(t){super(t),this._parent=this._element.closest(PU),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),C.on(this._element,wU,n=>this._keydown(n)))}static get NAME(){return mU}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),r=n?C.trigger(n,_U,{relatedTarget:t}):null;C.trigger(t,vU,{relatedTarget:n}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(Nr),this._activate(Q.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(fu);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),C.trigger(t,EU,{relatedTarget:n})};this._queueCallback(r,t,t.classList.contains(Fg))}_deactivate(t,n){if(!t)return;t.classList.remove(Nr),t.blur(),this._deactivate(Q.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(fu);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),C.trigger(t,yU,{relatedTarget:n})};this._queueCallback(r,t,t.classList.contains(Fg))}_keydown(t){if(![IU,Vg,bU,Mg,du,Ug].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(s=>!fr(s));let r;if([du,Ug].includes(t.key))r=n[t.key===du?0:n.length-1];else{const s=[Vg,Mg].includes(t.key);r=Cf(n,t.target,s,!0)}r&&(r.focus({preventScroll:!0}),Ys.getOrCreateInstance(r).show())}_getChildren(){return Q.find(mu,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const r of n)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),r=this._getOuterElement(t);t.setAttribute("aria-selected",n),r!==t&&this._setAttributeIfNotExists(r,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=Q.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,n){const r=this._getOuterElement(t);if(!r.classList.contains(RU))return;const s=(i,o)=>{const a=Q.findOne(i,r);a&&a.classList.toggle(o,n)};s(SU,Nr),s(CU,fu),r.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,r){t.hasAttribute(n)||t.setAttribute(n,r)}_elemIsActive(t){return t.classList.contains(Nr)}_getInnerElement(t){return t.matches(mu)?t:Q.findOne(mu,t)}_getOuterElement(t){return t.closest(OU)||t}static jQueryInterface(t){return this.each(function(){const n=Ys.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}C.on(document,TU,Sw,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!fr(this)&&Ys.getOrCreateInstance(this).show()});C.on(window,AU,()=>{for(const e of Q.find(kU))Ys.getOrCreateInstance(e)});je(Ys);const DU="toast",xU="bs.toast",Er=`.${xU}`,LU=`mouseover${Er}`,VU=`mouseout${Er}`,MU=`focusin${Er}`,UU=`focusout${Er}`,FU=`hide${Er}`,$U=`hidden${Er}`,BU=`show${Er}`,jU=`shown${Er}`,qU="fade",$g="hide",_a="show",ya="showing",HU={animation:"boolean",autohide:"boolean",delay:"number"},WU={animation:!0,autohide:!0,delay:5e3};class Al extends tn{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return WU}static get DefaultType(){return HU}static get NAME(){return DU}show(){if(C.trigger(this._element,BU).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(qU);const n=()=>{this._element.classList.remove(ya),C.trigger(this._element,jU),this._maybeScheduleHide()};this._element.classList.remove($g),Fo(this._element),this._element.classList.add(_a,ya),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||C.trigger(this._element,FU).defaultPrevented)return;const n=()=>{this._element.classList.add($g),this._element.classList.remove(ya,_a),C.trigger(this._element,$U)};this._element.classList.add(ya),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(_a),super.dispose()}isShown(){return this._element.classList.contains(_a)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const r=t.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){C.on(this._element,LU,t=>this._onInteraction(t,!0)),C.on(this._element,VU,t=>this._onInteraction(t,!1)),C.on(this._element,MU,t=>this._onInteraction(t,!0)),C.on(this._element,UU,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=Al.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}vl(Al);je(Al);const Df=ZI(hR);Df.use(nb());Df.use(Hx);Df.mount("#app");export{eF as A,Ve as B,KU as C,QU as D,GU as E,rn as F,bR as N,it as a,zU as b,$a as c,b_ as d,C_ as e,Zt as f,QO as g,tF as h,yI as i,ha as j,YA as k,cb as l,vI as m,aa as n,Dr as o,sa as p,nF as q,po as r,oF as s,qo as t,YU as u,aF as v,v_ as w,sF as x,iF as y,rF as z};
