const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeedDocumentReview-RJVm3mzH.js","assets/PreviewDocument.vue_vue_type_script_setup_true_lang-CHxH9seS.js","assets/DeedForm-B_w26YB9.js","assets/CustomSelectModal.vue_vue_type_script_setup_true_lang-BlVEPJXn.js","assets/EditDeedForm-D8uJF4hw.js","assets/DeedDetail-DLIZ3T-j.js","assets/DeedDetail-CT06eDrA.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function rb(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const he={},F0=[],k1=()=>{},ZS=()=>!1,Qw=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ib=e=>e.startsWith("onUpdate:"),Se=Object.assign,db=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$S=Object.prototype.hasOwnProperty,ce=(e,t)=>$S.call(e,t),N=Array.isArray,B0=e=>Sn(e)==="[object Map]",Yw=e=>Sn(e)==="[object Set]",jb=e=>Sn(e)==="[object Date]",$=e=>typeof e=="function",Me=e=>typeof e=="string",M1=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",GI=e=>(ye(e)||$(e))&&$(e.then)&&$(e.catch),WI=Object.prototype.toString,Sn=e=>WI.call(e),GS=e=>Sn(e).slice(8,-1),KI=e=>Sn(e)==="[object Object]",hb=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,on=rb(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eL=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},WS=/-(\w)/g,Ke=eL(e=>e.replace(WS,(t,n)=>n?n.toUpperCase():"")),KS=/\B([A-Z])/g,H0=eL(e=>e.replace(KS,"-$1").toLowerCase()),tL=eL(e=>e.charAt(0).toUpperCase()+e.slice(1)),xL=eL(e=>e?`on${tL(e)}`:""),F1=(e,t)=>!Object.is(e,t),Bn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},XI=(e,t,n,c=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:c,value:n})},_w=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Vb;const aL=()=>Vb||(Vb=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sb(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const c=e[n],o=Me(c)?YS(c):sb(c);if(o)for(const r in o)t[r]=o[r]}return t}else if(Me(e)||ye(e))return e}const XS=/;(?![^(]*\))/g,JS=/:([^]+)/,QS=/\/\*[^]*?\*\//g;function YS(e){const t={};return e.replace(QS,"").split(XS).forEach(n=>{if(n){const c=n.split(JS);c.length>1&&(t[c[0].trim()]=c[1].trim())}}),t}function O0(e){let t="";if(Me(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const c=O0(e[n]);c&&(t+=c+" ")}else if(ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const eq="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tq=rb(eq);function JI(e){return!!e||e===""}function aq(e,t){if(e.length!==t.length)return!1;let n=!0;for(let c=0;n&&c<e.length;c++)n=nL(e[c],t[c]);return n}function nL(e,t){if(e===t)return!0;let n=jb(e),c=jb(t);if(n||c)return n&&c?e.getTime()===t.getTime():!1;if(n=M1(e),c=M1(t),n||c)return e===t;if(n=N(e),c=N(t),n||c)return n&&c?aq(e,t):!1;if(n=ye(e),c=ye(t),n||c){if(!n||!c)return!1;const o=Object.keys(e).length,r=Object.keys(t).length;if(o!==r)return!1;for(const i in e){const d=e.hasOwnProperty(i),h=t.hasOwnProperty(i);if(d&&!h||!d&&h||!nL(e[i],t[i]))return!1}}return String(e)===String(t)}function nq(e,t){return e.findIndex(n=>nL(n,t))}const QI=e=>!!(e&&e.__v_isRef===!0),J=e=>Me(e)?e:e==null?"":N(e)||ye(e)&&(e.toString===WI||!$(e.toString))?QI(e)?J(e.value):JSON.stringify(e,YI,2):String(e),YI=(e,t)=>QI(t)?YI(e,t.value):B0(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[c,o],r)=>(n[wL(c,r)+" =>"]=o,n),{})}:Yw(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wL(n))}:M1(t)?wL(t):ye(t)&&!N(t)&&!KI(t)?String(t):t,wL=(e,t="")=>{var n;return M1(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class eC{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){this._on>0&&--this._on===0&&(Le=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,c;for(n=0,c=this.effects.length;n<c;n++)this.effects[n].stop();for(this.effects.length=0,n=0,c=this.cleanups.length;n<c;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,c=this.scopes.length;n<c;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function tC(e){return new eC(e)}function aC(){return Le}function cq(e,t=!1){Le&&Le.cleanups.push(e)}let le;const LL=new WeakSet;class nC{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,LL.has(this)&&(LL.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||oC(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rb(this),rC(this);const t=le,n=Qe;le=this,Qe=!0;try{return this.fn()}finally{iC(this),le=t,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)pb(t);this.deps=this.depsTail=void 0,Rb(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?LL.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){FL(this)&&this.run()}get dirty(){return FL(this)}}let cC=0,rn,dn;function oC(e,t=!1){if(e.flags|=8,t){e.next=dn,dn=e;return}e.next=rn,rn=e}function lb(){cC++}function yb(){if(--cC>0)return;if(dn){let t=dn;for(dn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;rn;){let t=rn;for(rn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(c){e||(e=c)}t=n}}if(e)throw e}function rC(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function iC(e){let t,n=e.depsTail,c=n;for(;c;){const o=c.prevDep;c.version===-1?(c===n&&(n=o),pb(c),oq(c)):t=c,c.dep.activeLink=c.prevActiveLink,c.prevActiveLink=void 0,c=o}e.deps=t,e.depsTail=n}function FL(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(dC(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function dC(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===mn)||(e.globalVersion=mn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!FL(e))))return;e.flags|=2;const t=e.dep,n=le,c=Qe;le=e,Qe=!0;try{rC(e);const o=e.fn(e._value);(t.version===0||F1(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{le=n,Qe=c,iC(e),e.flags&=-3}}function pb(e,t=!1){const{dep:n,prevSub:c,nextSub:o}=e;if(c&&(c.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=c,e.nextSub=void 0),n.subs===e&&(n.subs=c,!c&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)pb(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function oq(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Qe=!0;const hC=[];function I1(){hC.push(Qe),Qe=!1}function C1(){const e=hC.pop();Qe=e===void 0?!0:e}function Rb(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let mn=0,rq=class{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class ub{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!Qe||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new rq(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,sC(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const c=n.nextDep;c.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=c),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=c)}return n}trigger(t){this.version++,mn++,this.notify(t)}notify(t){lb();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yb()}}}function sC(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let c=t.deps;c;c=c.nextDep)sC(c)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Dw=new WeakMap,S0=Symbol(""),BL=Symbol(""),gn=Symbol("");function be(e,t,n){if(Qe&&le){let c=Dw.get(e);c||Dw.set(e,c=new Map);let o=c.get(n);o||(c.set(n,o=new ub),o.map=c,o.key=n),o.track()}}function L1(e,t,n,c,o,r){const i=Dw.get(e);if(!i){mn++;return}const d=h=>{h&&h.trigger()};if(lb(),t==="clear")i.forEach(d);else{const h=N(e),s=h&&hb(n);if(h&&n==="length"){const l=Number(c);i.forEach((y,u)=>{(u==="length"||u===gn||!M1(u)&&u>=l)&&d(y)})}else switch((n!==void 0||i.has(void 0))&&d(i.get(n)),s&&d(i.get(gn)),t){case"add":h?s&&d(i.get("length")):(d(i.get(S0)),B0(e)&&d(i.get(BL)));break;case"delete":h||(d(i.get(S0)),B0(e)&&d(i.get(BL)));break;case"set":B0(e)&&d(i.get(S0));break}}yb()}function iq(e,t){const n=Dw.get(e);return n&&n.get(t)}function R0(e){const t=te(e);return t===e?t:(be(t,"iterate",gn),$e(e)?t:t.map(xe))}function cL(e){return be(e=te(e),"iterate",gn),e}const dq={__proto__:null,[Symbol.iterator](){return bL(this,Symbol.iterator,xe)},concat(...e){return R0(this).concat(...e.map(t=>N(t)?R0(t):t))},entries(){return bL(this,"entries",e=>(e[1]=xe(e[1]),e))},every(e,t){return v1(this,"every",e,t,void 0,arguments)},filter(e,t){return v1(this,"filter",e,t,n=>n.map(xe),arguments)},find(e,t){return v1(this,"find",e,t,xe,arguments)},findIndex(e,t){return v1(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return v1(this,"findLast",e,t,xe,arguments)},findLastIndex(e,t){return v1(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return v1(this,"forEach",e,t,void 0,arguments)},includes(...e){return IL(this,"includes",e)},indexOf(...e){return IL(this,"indexOf",e)},join(e){return R0(this).join(e)},lastIndexOf(...e){return IL(this,"lastIndexOf",e)},map(e,t){return v1(this,"map",e,t,void 0,arguments)},pop(){return Y0(this,"pop")},push(...e){return Y0(this,"push",e)},reduce(e,...t){return _b(this,"reduce",e,t)},reduceRight(e,...t){return _b(this,"reduceRight",e,t)},shift(){return Y0(this,"shift")},some(e,t){return v1(this,"some",e,t,void 0,arguments)},splice(...e){return Y0(this,"splice",e)},toReversed(){return R0(this).toReversed()},toSorted(e){return R0(this).toSorted(e)},toSpliced(...e){return R0(this).toSpliced(...e)},unshift(...e){return Y0(this,"unshift",e)},values(){return bL(this,"values",xe)}};function bL(e,t,n){const c=cL(e),o=c[t]();return c!==e&&!$e(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=n(r.value)),r}),o}const hq=Array.prototype;function v1(e,t,n,c,o,r){const i=cL(e),d=i!==e&&!$e(e),h=i[t];if(h!==hq[t]){const y=h.apply(e,r);return d?xe(y):y}let s=n;i!==e&&(d?s=function(y,u){return n.call(this,xe(y),u,e)}:n.length>2&&(s=function(y,u){return n.call(this,y,u,e)}));const l=h.call(i,s,c);return d&&o?o(l):l}function _b(e,t,n,c){const o=cL(e);let r=n;return o!==e&&($e(e)?n.length>3&&(r=function(i,d,h){return n.call(this,i,d,h,e)}):r=function(i,d,h){return n.call(this,i,xe(d),h,e)}),o[t](r,...c)}function IL(e,t,n){const c=te(e);be(c,"iterate",gn);const o=c[t](...n);return(o===-1||o===!1)&&Mb(n[0])?(n[0]=te(n[0]),c[t](...n)):o}function Y0(e,t,n=[]){I1(),lb();const c=te(e)[t].apply(e,n);return yb(),C1(),c}const sq=rb("__proto__,__v_isRef,__isVue"),lC=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(M1));function lq(e){M1(e)||(e=String(e));const t=te(this);return be(t,"has",e),t.hasOwnProperty(e)}class yC{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,c){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return c===(o?r?xq:fC:r?kC:uC).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(c)?t:void 0;const i=N(t);if(!o){let h;if(i&&(h=dq[n]))return h;if(n==="hasOwnProperty")return lq}const d=Reflect.get(t,n,fe(t)?t:c);return(M1(n)?lC.has(n):sq(n))||(o||be(t,"get",n),r)?d:fe(d)?i&&hb(n)?d:d.value:ye(d)?o?mC(d):W0(d):d}}class pC extends yC{constructor(t=!1){super(!1,t)}set(t,n,c,o){let r=t[n];if(!this._isShallow){const h=O1(r);if(!$e(c)&&!O1(c)&&(r=te(r),c=te(c)),!N(t)&&fe(r)&&!fe(c))return h?!1:(r.value=c,!0)}const i=N(t)&&hb(n)?Number(n)<t.length:ce(t,n),d=Reflect.set(t,n,c,fe(t)?t:o);return t===te(o)&&(i?F1(c,r)&&L1(t,"set",n,c):L1(t,"add",n,c)),d}deleteProperty(t,n){const c=ce(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&c&&L1(t,"delete",n,void 0),o}has(t,n){const c=Reflect.has(t,n);return(!M1(n)||!lC.has(n))&&be(t,"has",n),c}ownKeys(t){return be(t,"iterate",N(t)?"length":S0),Reflect.ownKeys(t)}}class yq extends yC{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const pq=new pC,uq=new yq,kq=new pC(!0);const OL=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function fq(e,t,n){return function(...c){const o=this.__v_raw,r=te(o),i=B0(r),d=e==="entries"||e===Symbol.iterator&&i,h=e==="keys"&&i,s=o[e](...c),l=n?OL:t?Tw:xe;return!t&&be(r,"iterate",h?BL:S0),{next(){const{value:y,done:u}=s.next();return u?{value:y,done:u}:{value:d?[l(y[0]),l(y[1])]:l(y),done:u}},[Symbol.iterator](){return this}}}}function Rn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Mq(e,t){const n={get(o){const r=this.__v_raw,i=te(r),d=te(o);e||(F1(o,d)&&be(i,"get",o),be(i,"get",d));const{has:h}=Vn(i),s=t?OL:e?Tw:xe;if(h.call(i,o))return s(r.get(o));if(h.call(i,d))return s(r.get(d));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&be(te(o),"iterate",S0),Reflect.get(o,"size",o)},has(o){const r=this.__v_raw,i=te(r),d=te(o);return e||(F1(o,d)&&be(i,"has",o),be(i,"has",d)),o===d?r.has(o):r.has(o)||r.has(d)},forEach(o,r){const i=this,d=i.__v_raw,h=te(d),s=t?OL:e?Tw:xe;return!e&&be(h,"iterate",S0),d.forEach((l,y)=>o.call(r,s(l),s(y),i))}};return Se(n,e?{add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear")}:{add(o){!t&&!$e(o)&&!O1(o)&&(o=te(o));const r=te(this);return Vn(r).has.call(r,o)||(r.add(o),L1(r,"add",o,o)),this},set(o,r){!t&&!$e(r)&&!O1(r)&&(r=te(r));const i=te(this),{has:d,get:h}=Vn(i);let s=d.call(i,o);s||(o=te(o),s=d.call(i,o));const l=h.call(i,o);return i.set(o,r),s?F1(r,l)&&L1(i,"set",o,r):L1(i,"add",o,r),this},delete(o){const r=te(this),{has:i,get:d}=Vn(r);let h=i.call(r,o);h||(o=te(o),h=i.call(r,o)),d&&d.call(r,o);const s=r.delete(o);return h&&L1(r,"delete",o,void 0),s},clear(){const o=te(this),r=o.size!==0,i=o.clear();return r&&L1(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=fq(o,e,t)}),n}function kb(e,t){const n=Mq(e,t);return(c,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?c:Reflect.get(ce(n,o)&&o in c?n:c,o,r)}const mq={get:kb(!1,!1)},gq={get:kb(!1,!0)},vq={get:kb(!0,!1)};const uC=new WeakMap,kC=new WeakMap,fC=new WeakMap,xq=new WeakMap;function wq(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lq(e){return e.__v_skip||!Object.isExtensible(e)?0:wq(GS(e))}function W0(e){return O1(e)?e:fb(e,!1,pq,mq,uC)}function MC(e){return fb(e,!1,kq,gq,kC)}function mC(e){return fb(e,!0,uq,vq,fC)}function fb(e,t,n,c,o){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Lq(e);if(r===0)return e;const i=o.get(e);if(i)return i;const d=new Proxy(e,r===2?c:n);return o.set(e,d),d}function B1(e){return O1(e)?B1(e.__v_raw):!!(e&&e.__v_isReactive)}function O1(e){return!!(e&&e.__v_isReadonly)}function $e(e){return!!(e&&e.__v_isShallow)}function Mb(e){return e?!!e.__v_raw:!1}function te(e){const t=e&&e.__v_raw;return t?te(t):e}function mb(e){return!ce(e,"__v_skip")&&Object.isExtensible(e)&&XI(e,"__v_skip",!0),e}const xe=e=>ye(e)?W0(e):e,Tw=e=>ye(e)?mC(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Y(e){return gC(e,!1)}function bq(e){return gC(e,!0)}function gC(e,t){return fe(e)?e:new Iq(e,t)}class Iq{constructor(t,n){this.dep=new ub,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:te(t),this._value=n?t:xe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,c=this.__v_isShallow||$e(t)||O1(t);t=c?t:te(t),F1(t,n)&&(this._rawValue=t,this._value=c?t:xe(t),this.dep.trigger())}}function Ge(e){return fe(e)?e.value:e}const Cq={get:(e,t,n)=>t==="__v_raw"?e:Ge(Reflect.get(e,t,n)),set:(e,t,n,c)=>{const o=e[t];return fe(o)&&!fe(n)?(o.value=n,!0):Reflect.set(e,t,n,c)}};function vC(e){return B1(e)?e:new Proxy(e,Cq)}function Sq(e){const t=N(e)?new Array(e.length):{};for(const n in e)t[n]=Aq(e,n);return t}class qq{constructor(t,n,c){this._object=t,this._key=n,this._defaultValue=c,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return iq(te(this._object),this._key)}}function Aq(e,t,n){const c=e[t];return fe(c)?c:new qq(e,t,n)}class zq{constructor(t,n,c){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ub(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=c}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return oC(this,!0),!0}get value(){const t=this.dep.track();return dC(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Hq(e,t,n=!1){let c,o;return $(e)?c=e:(c=e.get,o=e.set),new zq(c,o,n)}const _n={},Fw=new WeakMap;let $1;function Pq(e,t=!1,n=$1){if(n){let c=Fw.get(n);c||Fw.set(n,c=[]),c.push(e)}}function jq(e,t,n=he){const{immediate:c,deep:o,once:r,scheduler:i,augmentJob:d,call:h}=n,s=D=>o?D:$e(D)||o===!1||o===0?b1(D,1):b1(D);let l,y,u,f,v=!1,x=!1;if(fe(e)?(y=()=>e.value,v=$e(e)):B1(e)?(y=()=>s(e),v=!0):N(e)?(x=!0,v=e.some(D=>B1(D)||$e(D)),y=()=>e.map(D=>{if(fe(D))return D.value;if(B1(D))return s(D);if($(D))return h?h(D,2):D()})):$(e)?t?y=h?()=>h(e,2):e:y=()=>{if(u){I1();try{u()}finally{C1()}}const D=$1;$1=l;try{return h?h(e,3,[f]):e(f)}finally{$1=D}}:y=k1,t&&o){const D=y,E=o===!0?1/0:o;y=()=>b1(D(),E)}const I=aC(),H=()=>{l.stop(),I&&I.active&&db(I.effects,l)};if(r&&t){const D=t;t=(...E)=>{D(...E),H()}}let z=x?new Array(e.length).fill(_n):_n;const j=D=>{if(!(!(l.flags&1)||!l.dirty&&!D))if(t){const E=l.run();if(o||v||(x?E.some((ie,Q)=>F1(ie,z[Q])):F1(E,z))){u&&u();const ie=$1;$1=l;try{const Q=[E,z===_n?void 0:x&&z[0]===_n?[]:z,f];z=E,h?h(t,3,Q):t(...Q)}finally{$1=ie}}}else l.run()};return d&&d(j),l=new nC(y),l.scheduler=i?()=>i(j,!1):j,f=D=>Pq(D,!1,l),u=l.onStop=()=>{const D=Fw.get(l);if(D){if(h)h(D,4);else for(const E of D)E();Fw.delete(l)}},t?c?j(!0):z=l.run():i?i(j.bind(null,!0),!0):l.run(),H.pause=l.pause.bind(l),H.resume=l.resume.bind(l),H.stop=H,H}function b1(e,t=1/0,n){if(t<=0||!ye(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,fe(e))b1(e.value,t,n);else if(N(e))for(let c=0;c<e.length;c++)b1(e[c],t,n);else if(Yw(e)||B0(e))e.forEach(c=>{b1(c,t,n)});else if(KI(e)){for(const c in e)b1(e[c],t,n);for(const c of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,c)&&b1(e[c],t,n)}return e}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(e,t,n,c){try{return c?e(...c):e()}catch(o){oL(o,t,n)}}function m1(e,t,n,c){if($(e)){const o=qn(e,t,n,c);return o&&GI(o)&&o.catch(r=>{oL(r,t,n)}),o}if(N(e)){const o=[];for(let r=0;r<e.length;r++)o.push(m1(e[r],t,n,c));return o}}function oL(e,t,n,c=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||he;if(t){let d=t.parent;const h=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;d;){const l=d.ec;if(l){for(let y=0;y<l.length;y++)if(l[y](e,h,s)===!1)return}d=d.parent}if(r){I1(),qn(r,null,10,[e,h,s]),C1();return}}Vq(e,n,o,c,i)}function Vq(e,t,n,c=!0,o=!1){if(o)throw e;console.error(e)}const ze=[];let p1=-1;const E0=[];let V1=null,D0=0;const xC=Promise.resolve();let Bw=null;function rL(e){const t=Bw||xC;return e?t.then(this?e.bind(this):e):t}function Rq(e){let t=p1+1,n=ze.length;for(;t<n;){const c=t+n>>>1,o=ze[c],r=vn(o);r<e||r===e&&o.flags&2?t=c+1:n=c}return t}function gb(e){if(!(e.flags&1)){const t=vn(e),n=ze[ze.length-1];!n||!(e.flags&2)&&t>=vn(n)?ze.push(e):ze.splice(Rq(t),0,e),e.flags|=1,wC()}}function wC(){Bw||(Bw=xC.then(bC))}function _q(e){N(e)?E0.push(...e):V1&&e.id===-1?V1.splice(D0+1,0,e):e.flags&1||(E0.push(e),e.flags|=1),wC()}function Db(e,t,n=p1+1){for(;n<ze.length;n++){const c=ze[n];if(c&&c.flags&2){if(e&&c.id!==e.uid)continue;ze.splice(n,1),n--,c.flags&4&&(c.flags&=-2),c(),c.flags&4||(c.flags&=-2)}}}function LC(e){if(E0.length){const t=[...new Set(E0)].sort((n,c)=>vn(n)-vn(c));if(E0.length=0,V1){V1.push(...t);return}for(V1=t,D0=0;D0<V1.length;D0++){const n=V1[D0];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}V1=null,D0=0}}const vn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bC(e){try{for(p1=0;p1<ze.length;p1++){const t=ze[p1];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),qn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;p1<ze.length;p1++){const t=ze[p1];t&&(t.flags&=-2)}p1=-1,ze.length=0,LC(),Bw=null,(ze.length||E0.length)&&bC()}}let Re=null,IC=null;function Ow(e){const t=Re;return Re=e,IC=e&&e.type.__scopeId||null,t}function Ye(e,t=Re,n){if(!t||e._n)return e;const c=(...o)=>{c._d&&Gb(-1);const r=Ow(t);let i;try{i=e(...o)}finally{Ow(r),c._d&&Gb(1)}return i};return c._n=!0,c._c=!0,c._d=!0,c}function ke(e,t){if(Re===null)return e;const n=sL(Re),c=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,d,h=he]=t[o];r&&($(r)&&(r={mounted:r,updated:r}),r.deep&&b1(i),c.push({dir:r,instance:n,value:i,oldValue:void 0,arg:d,modifiers:h}))}return e}function N1(e,t,n,c){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const d=o[i];r&&(d.oldValue=r[i].value);let h=d.dir[c];h&&(I1(),m1(h,n,8,[e.el,d,e,t]),C1())}}const Dq=Symbol("_vte"),Tq=e=>e.__isTeleport;function vb(e,t){e.shapeFlag&6&&e.component?(e.transition=t,vb(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function q1(e,t){return $(e)?Se({name:e.name},t,{setup:e}):e}function CC(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ew(e,t,n,c,o=!1){if(N(e)){e.forEach((v,x)=>Ew(v,t&&(N(t)?t[x]:t),n,c,o));return}if(hn(c)&&!o){c.shapeFlag&512&&c.type.__asyncResolved&&c.component.subTree.component&&Ew(e,t,n,c.component.subTree);return}const r=c.shapeFlag&4?sL(c.component):c.el,i=o?null:r,{i:d,r:h}=e,s=t&&t.r,l=d.refs===he?d.refs={}:d.refs,y=d.setupState,u=te(y),f=y===he?()=>!1:v=>ce(u,v);if(s!=null&&s!==h&&(Me(s)?(l[s]=null,f(s)&&(y[s]=null)):fe(s)&&(s.value=null)),$(h))qn(h,d,12,[i,l]);else{const v=Me(h),x=fe(h);if(v||x){const I=()=>{if(e.f){const H=v?f(h)?y[h]:l[h]:h.value;o?N(H)&&db(H,r):N(H)?H.includes(r)||H.push(r):v?(l[h]=[r],f(h)&&(y[h]=l[h])):(h.value=[r],e.k&&(l[e.k]=h.value))}else v?(l[h]=i,f(h)&&(y[h]=i)):x&&(h.value=i,e.k&&(l[e.k]=i))};i?(I.id=-1,Ee(I,n)):I()}}}aL().requestIdleCallback;aL().cancelIdleCallback;const hn=e=>!!e.type.__asyncLoader,SC=e=>e.type.__isKeepAlive;function Fq(e,t){qC(e,"a",t)}function Bq(e,t){qC(e,"da",t)}function qC(e,t,n=we){const c=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(iL(t,c,n),n){let o=n.parent;for(;o&&o.parent;)SC(o.parent.vnode)&&Oq(c,t,n,o),o=o.parent}}function Oq(e,t,n,c){const o=iL(t,e,c,!0);zC(()=>{db(c[t],o)},n)}function iL(e,t,n=we,c=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{I1();const d=An(n),h=m1(t,n,e,i);return d(),C1(),h});return c?o.unshift(r):o.push(r),r}}const A1=e=>(t,n=we)=>{(!wn||e==="sp")&&iL(e,(...c)=>t(...c),n)},Eq=A1("bm"),P0=A1("m"),Uq=A1("bu"),Nq=A1("u"),AC=A1("bum"),zC=A1("um"),Zq=A1("sp"),$q=A1("rtg"),Gq=A1("rtc");function Wq(e,t=we){iL("ec",e,t)}const HC="components";function Xe(e,t){return jC(HC,e,!0,t)||e}const PC=Symbol.for("v-ndc");function On(e){return Me(e)?jC(HC,e,!1)||e:e||PC}function jC(e,t,n=!0,c=!1){const o=Re||we;if(o){const r=o.type;{const d=RA(r,!1);if(d&&(d===t||d===Ke(t)||d===tL(Ke(t))))return r}const i=Tb(o[e]||r[e],t)||Tb(o.appContext[e],t);return!i&&c?r:i}}function Tb(e,t){return e&&(e[t]||e[Ke(t)]||e[tL(Ke(t))])}function S1(e,t,n,c){let o;const r=n,i=N(e);if(i||Me(e)){const d=i&&B1(e);let h=!1,s=!1;d&&(h=!$e(e),s=O1(e),e=cL(e)),o=new Array(e.length);for(let l=0,y=e.length;l<y;l++)o[l]=t(h?s?Tw(xe(e[l])):xe(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let d=0;d<e;d++)o[d]=t(d+1,d,void 0,r)}else if(ye(e))if(e[Symbol.iterator])o=Array.from(e,(d,h)=>t(d,h,void 0,r));else{const d=Object.keys(e);o=new Array(d.length);for(let h=0,s=d.length;h<s;h++){const l=d[h];o[h]=t(e[l],l,h,r)}}else o=[];return o}const EL=e=>e?YC(e)?sL(e):EL(e.parent):null,sn=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>EL(e.parent),$root:e=>EL(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>RC(e),$forceUpdate:e=>e.f||(e.f=()=>{gb(e.update)}),$nextTick:e=>e.n||(e.n=rL.bind(e.proxy)),$watch:e=>fA.bind(e)}),CL=(e,t)=>e!==he&&!e.__isScriptSetup&&ce(e,t),Kq={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:c,data:o,props:r,accessCache:i,type:d,appContext:h}=e;let s;if(t[0]!=="$"){const f=i[t];if(f!==void 0)switch(f){case 1:return c[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(CL(c,t))return i[t]=1,c[t];if(o!==he&&ce(o,t))return i[t]=2,o[t];if((s=e.propsOptions[0])&&ce(s,t))return i[t]=3,r[t];if(n!==he&&ce(n,t))return i[t]=4,n[t];UL&&(i[t]=0)}}const l=sn[t];let y,u;if(l)return t==="$attrs"&&be(e.attrs,"get",""),l(e);if((y=d.__cssModules)&&(y=y[t]))return y;if(n!==he&&ce(n,t))return i[t]=4,n[t];if(u=h.config.globalProperties,ce(u,t))return u[t]},set({_:e},t,n){const{data:c,setupState:o,ctx:r}=e;return CL(o,t)?(o[t]=n,!0):c!==he&&ce(c,t)?(c[t]=n,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:c,appContext:o,propsOptions:r}},i){let d;return!!n[i]||e!==he&&ce(e,i)||CL(t,i)||(d=r[0])&&ce(d,i)||ce(c,i)||ce(sn,i)||ce(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fb(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let UL=!0;function Xq(e){const t=RC(e),n=e.proxy,c=e.ctx;UL=!1,t.beforeCreate&&Bb(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:d,provide:h,inject:s,created:l,beforeMount:y,mounted:u,beforeUpdate:f,updated:v,activated:x,deactivated:I,beforeDestroy:H,beforeUnmount:z,destroyed:j,unmounted:D,render:E,renderTracked:ie,renderTriggered:Q,errorCaptured:W,serverPrefetch:X,expose:ue,inheritAttrs:qe,components:Te,directives:Pe,filters:U1}=t;if(s&&Jq(s,c,null),i)for(const K in i){const ae=i[K];$(ae)&&(c[K]=ae.bind(n))}if(o){const K=o.call(n,n);ye(K)&&(e.data=W0(K))}if(UL=!0,r)for(const K in r){const ae=r[K],g1=$(ae)?ae.bind(n,n):$(ae.get)?ae.get.bind(n,n):k1,H1=!$(ae)&&$(ae.set)?ae.set.bind(n):k1,n1=He({get:g1,set:H1});Object.defineProperty(c,K,{enumerable:!0,configurable:!0,get:()=>n1.value,set:je=>n1.value=je})}if(d)for(const K in d)VC(d[K],c,n,K);if(h){const K=$(h)?h.call(n):h;Reflect.ownKeys(K).forEach(ae=>{En(ae,K[ae])})}l&&Bb(l,e,"c");function pe(K,ae){N(ae)?ae.forEach(g1=>K(g1.bind(n))):ae&&K(ae.bind(n))}if(pe(Eq,y),pe(P0,u),pe(Uq,f),pe(Nq,v),pe(Fq,x),pe(Bq,I),pe(Wq,W),pe(Gq,ie),pe($q,Q),pe(AC,z),pe(zC,D),pe(Zq,X),N(ue))if(ue.length){const K=e.exposed||(e.exposed={});ue.forEach(ae=>{Object.defineProperty(K,ae,{get:()=>n[ae],set:g1=>n[ae]=g1})})}else e.exposed||(e.exposed={});E&&e.render===k1&&(e.render=E),qe!=null&&(e.inheritAttrs=qe),Te&&(e.components=Te),Pe&&(e.directives=Pe),X&&CC(e)}function Jq(e,t,n=k1){N(e)&&(e=NL(e));for(const c in e){const o=e[c];let r;ye(o)?"default"in o?r=We(o.from||c,o.default,!0):r=We(o.from||c):r=We(o),fe(r)?Object.defineProperty(t,c,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[c]=r}}function Bb(e,t,n){m1(N(e)?e.map(c=>c.bind(t.proxy)):e.bind(t.proxy),t,n)}function VC(e,t,n,c){let o=c.includes(".")?WC(n,c):()=>n[c];if(Me(e)){const r=t[e];$(r)&&U0(o,r)}else if($(e))U0(o,e.bind(n));else if(ye(e))if(N(e))e.forEach(r=>VC(r,t,n,c));else{const r=$(e.handler)?e.handler.bind(n):t[e.handler];$(r)&&U0(o,r,e)}}function RC(e){const t=e.type,{mixins:n,extends:c}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,d=r.get(t);let h;return d?h=d:!o.length&&!n&&!c?h=t:(h={},o.length&&o.forEach(s=>Uw(h,s,i,!0)),Uw(h,t,i)),ye(t)&&r.set(t,h),h}function Uw(e,t,n,c=!1){const{mixins:o,extends:r}=t;r&&Uw(e,r,n,!0),o&&o.forEach(i=>Uw(e,i,n,!0));for(const i in t)if(!(c&&i==="expose")){const d=Qq[i]||n&&n[i];e[i]=d?d(e[i],t[i]):t[i]}return e}const Qq={data:Ob,props:Eb,emits:Eb,methods:cn,computed:cn,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:cn,directives:cn,watch:eA,provide:Ob,inject:Yq};function Ob(e,t){return t?e?function(){return Se($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function Yq(e,t){return cn(NL(e),NL(t))}function NL(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?Se(Object.create(null),e,t):t}function Eb(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:Se(Object.create(null),Fb(e),Fb(t??{})):t}function eA(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const c in t)n[c]=Ae(e[c],t[c]);return n}function _C(){return{app:null,config:{isNativeTag:ZS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tA=0;function aA(e,t){return function(c,o=null){$(c)||(c=Se({},c)),o!=null&&!ye(o)&&(o=null);const r=_C(),i=new WeakSet,d=[];let h=!1;const s=r.app={_uid:tA++,_component:c,_props:o,_container:null,_context:r,_instance:null,version:DA,get config(){return r.config},set config(l){},use(l,...y){return i.has(l)||(l&&$(l.install)?(i.add(l),l.install(s,...y)):$(l)&&(i.add(l),l(s,...y))),s},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),s},component(l,y){return y?(r.components[l]=y,s):r.components[l]},directive(l,y){return y?(r.directives[l]=y,s):r.directives[l]},mount(l,y,u){if(!h){const f=s._ceVNode||re(c,o);return f.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),e(f,l,u),h=!0,s._container=l,l.__vue_app__=s,sL(f.component)}},onUnmount(l){d.push(l)},unmount(){h&&(m1(d,s._instance,16),e(null,s._container),delete s._container.__vue_app__)},provide(l,y){return r.provides[l]=y,s},runWithContext(l){const y=q0;q0=s;try{return l()}finally{q0=y}}};return s}}let q0=null;function En(e,t){if(we){let n=we.provides;const c=we.parent&&we.parent.provides;c===n&&(n=we.provides=Object.create(c)),n[e]=t}}function We(e,t,n=!1){const c=we||Re;if(c||q0){let o=q0?q0._context.provides:c?c.parent==null||c.ce?c.vnode.appContext&&c.vnode.appContext.provides:c.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&$(t)?t.call(c&&c.proxy):t}}function nA(){return!!(we||Re||q0)}const DC={},TC=()=>Object.create(DC),FC=e=>Object.getPrototypeOf(e)===DC;function cA(e,t,n,c=!1){const o={},r=TC();e.propsDefaults=Object.create(null),BC(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=c?o:MC(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function oA(e,t,n,c){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,d=te(o),[h]=e.propsOptions;let s=!1;if((c||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let y=0;y<l.length;y++){let u=l[y];if(dL(e.emitsOptions,u))continue;const f=t[u];if(h)if(ce(r,u))f!==r[u]&&(r[u]=f,s=!0);else{const v=Ke(u);o[v]=ZL(h,d,v,f,e,!1)}else f!==r[u]&&(r[u]=f,s=!0)}}}else{BC(e,t,o,r)&&(s=!0);let l;for(const y in d)(!t||!ce(t,y)&&((l=H0(y))===y||!ce(t,l)))&&(h?n&&(n[y]!==void 0||n[l]!==void 0)&&(o[y]=ZL(h,d,y,void 0,e,!0)):delete o[y]);if(r!==d)for(const y in r)(!t||!ce(t,y))&&(delete r[y],s=!0)}s&&L1(e.attrs,"set","")}function BC(e,t,n,c){const[o,r]=e.propsOptions;let i=!1,d;if(t)for(let h in t){if(on(h))continue;const s=t[h];let l;o&&ce(o,l=Ke(h))?!r||!r.includes(l)?n[l]=s:(d||(d={}))[l]=s:dL(e.emitsOptions,h)||(!(h in c)||s!==c[h])&&(c[h]=s,i=!0)}if(r){const h=te(n),s=d||he;for(let l=0;l<r.length;l++){const y=r[l];n[y]=ZL(o,h,y,s[y],e,!ce(s,y))}}return i}function ZL(e,t,n,c,o,r){const i=e[n];if(i!=null){const d=ce(i,"default");if(d&&c===void 0){const h=i.default;if(i.type!==Function&&!i.skipFactory&&$(h)){const{propsDefaults:s}=o;if(n in s)c=s[n];else{const l=An(o);c=s[n]=h.call(null,t),l()}}else c=h;o.ce&&o.ce._setProp(n,c)}i[0]&&(r&&!d?c=!1:i[1]&&(c===""||c===H0(n))&&(c=!0))}return c}const rA=new WeakMap;function OC(e,t,n=!1){const c=n?rA:t.propsCache,o=c.get(e);if(o)return o;const r=e.props,i={},d=[];let h=!1;if(!$(e)){const l=y=>{h=!0;const[u,f]=OC(y,t,!0);Se(i,u),f&&d.push(...f)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!h)return ye(e)&&c.set(e,F0),F0;if(N(r))for(let l=0;l<r.length;l++){const y=Ke(r[l]);Ub(y)&&(i[y]=he)}else if(r)for(const l in r){const y=Ke(l);if(Ub(y)){const u=r[l],f=i[y]=N(u)||$(u)?{type:u}:Se({},u),v=f.type;let x=!1,I=!0;if(N(v))for(let H=0;H<v.length;++H){const z=v[H],j=$(z)&&z.name;if(j==="Boolean"){x=!0;break}else j==="String"&&(I=!1)}else x=$(v)&&v.name==="Boolean";f[0]=x,f[1]=I,(x||ce(f,"default"))&&d.push(y)}}const s=[i,d];return ye(e)&&c.set(e,s),s}function Ub(e){return e[0]!=="$"&&!on(e)}const xb=e=>e[0]==="_"||e==="$stable",wb=e=>N(e)?e.map(u1):[u1(e)],iA=(e,t,n)=>{if(t._n)return t;const c=Ye((...o)=>wb(t(...o)),n);return c._c=!1,c},EC=(e,t,n)=>{const c=e._ctx;for(const o in e){if(xb(o))continue;const r=e[o];if($(r))t[o]=iA(o,r,c);else if(r!=null){const i=wb(r);t[o]=()=>i}}},UC=(e,t)=>{const n=wb(t);e.slots.default=()=>n},NC=(e,t,n)=>{for(const c in t)(n||!xb(c))&&(e[c]=t[c])},dA=(e,t,n)=>{const c=e.slots=TC();if(e.vnode.shapeFlag&32){const o=t._;o?(NC(c,t,n),n&&XI(c,"_",o,!0)):EC(t,c)}else t&&UC(e,t)},hA=(e,t,n)=>{const{vnode:c,slots:o}=e;let r=!0,i=he;if(c.shapeFlag&32){const d=t._;d?n&&d===1?r=!1:NC(o,t,n):(r=!t.$stable,EC(t,o)),i=t}else t&&(UC(e,t),i={default:1});if(r)for(const d in o)!xb(d)&&i[d]==null&&delete o[d]},Ee=LA;function sA(e){return lA(e)}function lA(e,t){const n=aL();n.__VUE__=!0;const{insert:c,remove:o,patchProp:r,createElement:i,createText:d,createComment:h,setText:s,setElementText:l,parentNode:y,nextSibling:u,setScopeId:f=k1,insertStaticContent:v}=e,x=(p,k,m,w=null,C=null,b=null,P=void 0,A=null,q=!!k.dynamicChildren)=>{if(p===k)return;p&&!en(p,k)&&(w=L(p),je(p,C,b,!0),p=null),k.patchFlag===-2&&(q=!1,k.dynamicChildren=null);const{type:S,ref:U,shapeFlag:R}=k;switch(S){case hL:I(p,k,m,w);break;case E1:H(p,k,m,w);break;case qL:p==null&&z(k,m,w,P);break;case ve:Te(p,k,m,w,C,b,P,A,q);break;default:R&1?E(p,k,m,w,C,b,P,A,q):R&6?Pe(p,k,m,w,C,b,P,A,q):(R&64||R&128)&&S.process(p,k,m,w,C,b,P,A,q,B)}U!=null&&C&&Ew(U,p&&p.ref,b,k||p,!k)},I=(p,k,m,w)=>{if(p==null)c(k.el=d(k.children),m,w);else{const C=k.el=p.el;k.children!==p.children&&s(C,k.children)}},H=(p,k,m,w)=>{p==null?c(k.el=h(k.children||""),m,w):k.el=p.el},z=(p,k,m,w)=>{[p.el,p.anchor]=v(p.children,k,m,w,p.el,p.anchor)},j=({el:p,anchor:k},m,w)=>{let C;for(;p&&p!==k;)C=u(p),c(p,m,w),p=C;c(k,m,w)},D=({el:p,anchor:k})=>{let m;for(;p&&p!==k;)m=u(p),o(p),p=m;o(k)},E=(p,k,m,w,C,b,P,A,q)=>{k.type==="svg"?P="svg":k.type==="math"&&(P="mathml"),p==null?ie(k,m,w,C,b,P,A,q):X(p,k,C,b,P,A,q)},ie=(p,k,m,w,C,b,P,A)=>{let q,S;const{props:U,shapeFlag:R,transition:O,dirs:Z}=p;if(q=p.el=i(p.type,b,U&&U.is,U),R&8?l(q,p.children):R&16&&W(p.children,q,null,w,C,SL(p,b),P,A),Z&&N1(p,null,w,"created"),Q(q,p,p.scopeId,P,w),U){for(const se in U)se!=="value"&&!on(se)&&r(q,se,null,U[se],b,w);"value"in U&&r(q,"value",null,U.value,b),(S=U.onVnodeBeforeMount)&&i1(S,w,p)}Z&&N1(p,null,w,"beforeMount");const ee=yA(C,O);ee&&O.beforeEnter(q),c(q,k,m),((S=U&&U.onVnodeMounted)||ee||Z)&&Ee(()=>{S&&i1(S,w,p),ee&&O.enter(q),Z&&N1(p,null,w,"mounted")},C)},Q=(p,k,m,w,C)=>{if(m&&f(p,m),w)for(let b=0;b<w.length;b++)f(p,w[b]);if(C){let b=C.subTree;if(k===b||XC(b.type)&&(b.ssContent===k||b.ssFallback===k)){const P=C.vnode;Q(p,P,P.scopeId,P.slotScopeIds,C.parent)}}},W=(p,k,m,w,C,b,P,A,q=0)=>{for(let S=q;S<p.length;S++){const U=p[S]=A?R1(p[S]):u1(p[S]);x(null,U,k,m,w,C,b,P,A)}},X=(p,k,m,w,C,b,P)=>{const A=k.el=p.el;let{patchFlag:q,dynamicChildren:S,dirs:U}=k;q|=p.patchFlag&16;const R=p.props||he,O=k.props||he;let Z;if(m&&Z1(m,!1),(Z=O.onVnodeBeforeUpdate)&&i1(Z,m,k,p),U&&N1(k,p,m,"beforeUpdate"),m&&Z1(m,!0),(R.innerHTML&&O.innerHTML==null||R.textContent&&O.textContent==null)&&l(A,""),S?ue(p.dynamicChildren,S,A,m,w,SL(k,C),b):P||ae(p,k,A,null,m,w,SL(k,C),b,!1),q>0){if(q&16)qe(A,R,O,m,C);else if(q&2&&R.class!==O.class&&r(A,"class",null,O.class,C),q&4&&r(A,"style",R.style,O.style,C),q&8){const ee=k.dynamicProps;for(let se=0;se<ee.length;se++){const oe=ee[se],Fe=R[oe],Ve=O[oe];(Ve!==Fe||oe==="value")&&r(A,oe,Fe,Ve,C,m)}}q&1&&p.children!==k.children&&l(A,k.children)}else!P&&S==null&&qe(A,R,O,m,C);((Z=O.onVnodeUpdated)||U)&&Ee(()=>{Z&&i1(Z,m,k,p),U&&N1(k,p,m,"updated")},w)},ue=(p,k,m,w,C,b,P)=>{for(let A=0;A<k.length;A++){const q=p[A],S=k[A],U=q.el&&(q.type===ve||!en(q,S)||q.shapeFlag&198)?y(q.el):m;x(q,S,U,null,w,C,b,P,!0)}},qe=(p,k,m,w,C)=>{if(k!==m){if(k!==he)for(const b in k)!on(b)&&!(b in m)&&r(p,b,k[b],null,C,w);for(const b in m){if(on(b))continue;const P=m[b],A=k[b];P!==A&&b!=="value"&&r(p,b,A,P,C,w)}"value"in m&&r(p,"value",k.value,m.value,C)}},Te=(p,k,m,w,C,b,P,A,q)=>{const S=k.el=p?p.el:d(""),U=k.anchor=p?p.anchor:d("");let{patchFlag:R,dynamicChildren:O,slotScopeIds:Z}=k;Z&&(A=A?A.concat(Z):Z),p==null?(c(S,m,w),c(U,m,w),W(k.children||[],m,U,C,b,P,A,q)):R>0&&R&64&&O&&p.dynamicChildren?(ue(p.dynamicChildren,O,m,C,b,P,A),(k.key!=null||C&&k===C.subTree)&&ZC(p,k,!0)):ae(p,k,m,U,C,b,P,A,q)},Pe=(p,k,m,w,C,b,P,A,q)=>{k.slotScopeIds=A,p==null?k.shapeFlag&512?C.ctx.activate(k,m,w,P,q):U1(k,m,w,C,b,P,q):z1(p,k,q)},U1=(p,k,m,w,C,b,P)=>{const A=p.component=zA(p,w,C);if(SC(p)&&(A.ctx.renderer=B),HA(A,!1,P),A.asyncDep){if(C&&C.registerDep(A,pe,P),!p.el){const q=A.subTree=re(E1);H(null,q,k,m)}}else pe(A,p,k,m,C,b,P)},z1=(p,k,m)=>{const w=k.component=p.component;if(xA(p,k,m))if(w.asyncDep&&!w.asyncResolved){K(w,k,m);return}else w.next=k,w.update();else k.el=p.el,w.vnode=k},pe=(p,k,m,w,C,b,P)=>{const A=()=>{if(p.isMounted){let{next:R,bu:O,u:Z,parent:ee,vnode:se}=p;{const o1=$C(p);if(o1){R&&(R.el=se.el,K(p,R,P)),o1.asyncDep.then(()=>{p.isUnmounted||A()});return}}let oe=R,Fe;Z1(p,!1),R?(R.el=se.el,K(p,R,P)):R=se,O&&Bn(O),(Fe=R.props&&R.props.onVnodeBeforeUpdate)&&i1(Fe,ee,R,se),Z1(p,!0);const Ve=Zb(p),c1=p.subTree;p.subTree=Ve,x(c1,Ve,y(c1.el),L(c1),p,C,b),R.el=Ve.el,oe===null&&wA(p,Ve.el),Z&&Ee(Z,C),(Fe=R.props&&R.props.onVnodeUpdated)&&Ee(()=>i1(Fe,ee,R,se),C)}else{let R;const{el:O,props:Z}=k,{bm:ee,m:se,parent:oe,root:Fe,type:Ve}=p,c1=hn(k);Z1(p,!1),ee&&Bn(ee),!c1&&(R=Z&&Z.onVnodeBeforeMount)&&i1(R,oe,k),Z1(p,!0);{Fe.ce&&Fe.ce._injectChildStyle(Ve);const o1=p.subTree=Zb(p);x(null,o1,m,w,p,C,b),k.el=o1.el}if(se&&Ee(se,C),!c1&&(R=Z&&Z.onVnodeMounted)){const o1=k;Ee(()=>i1(R,oe,o1),C)}(k.shapeFlag&256||oe&&hn(oe.vnode)&&oe.vnode.shapeFlag&256)&&p.a&&Ee(p.a,C),p.isMounted=!0,k=m=w=null}};p.scope.on();const q=p.effect=new nC(A);p.scope.off();const S=p.update=q.run.bind(q),U=p.job=q.runIfDirty.bind(q);U.i=p,U.id=p.uid,q.scheduler=()=>gb(U),Z1(p,!0),S()},K=(p,k,m)=>{k.component=p;const w=p.vnode.props;p.vnode=k,p.next=null,oA(p,k.props,w,m),hA(p,k.children,m),I1(),Db(p),C1()},ae=(p,k,m,w,C,b,P,A,q=!1)=>{const S=p&&p.children,U=p?p.shapeFlag:0,R=k.children,{patchFlag:O,shapeFlag:Z}=k;if(O>0){if(O&128){H1(S,R,m,w,C,b,P,A,q);return}else if(O&256){g1(S,R,m,w,C,b,P,A,q);return}}Z&8?(U&16&&Ze(S,C,b),R!==S&&l(m,R)):U&16?Z&16?H1(S,R,m,w,C,b,P,A,q):Ze(S,C,b,!0):(U&8&&l(m,""),Z&16&&W(R,m,w,C,b,P,A,q))},g1=(p,k,m,w,C,b,P,A,q)=>{p=p||F0,k=k||F0;const S=p.length,U=k.length,R=Math.min(S,U);let O;for(O=0;O<R;O++){const Z=k[O]=q?R1(k[O]):u1(k[O]);x(p[O],Z,m,null,C,b,P,A,q)}S>U?Ze(p,C,b,!0,!1,R):W(k,m,w,C,b,P,A,q,R)},H1=(p,k,m,w,C,b,P,A,q)=>{let S=0;const U=k.length;let R=p.length-1,O=U-1;for(;S<=R&&S<=O;){const Z=p[S],ee=k[S]=q?R1(k[S]):u1(k[S]);if(en(Z,ee))x(Z,ee,m,null,C,b,P,A,q);else break;S++}for(;S<=R&&S<=O;){const Z=p[R],ee=k[O]=q?R1(k[O]):u1(k[O]);if(en(Z,ee))x(Z,ee,m,null,C,b,P,A,q);else break;R--,O--}if(S>R){if(S<=O){const Z=O+1,ee=Z<U?k[Z].el:w;for(;S<=O;)x(null,k[S]=q?R1(k[S]):u1(k[S]),m,ee,C,b,P,A,q),S++}}else if(S>O)for(;S<=R;)je(p[S],C,b,!0),S++;else{const Z=S,ee=S,se=new Map;for(S=ee;S<=O;S++){const Be=k[S]=q?R1(k[S]):u1(k[S]);Be.key!=null&&se.set(Be.key,S)}let oe,Fe=0;const Ve=O-ee+1;let c1=!1,o1=0;const Q0=new Array(Ve);for(S=0;S<Ve;S++)Q0[S]=0;for(S=Z;S<=R;S++){const Be=p[S];if(Fe>=Ve){je(Be,C,b,!0);continue}let r1;if(Be.key!=null)r1=se.get(Be.key);else for(oe=ee;oe<=O;oe++)if(Q0[oe-ee]===0&&en(Be,k[oe])){r1=oe;break}r1===void 0?je(Be,C,b,!0):(Q0[r1-ee]=S+1,r1>=o1?o1=r1:c1=!0,x(Be,k[r1],m,null,C,b,P,A,q),Fe++)}const Hb=c1?pA(Q0):F0;for(oe=Hb.length-1,S=Ve-1;S>=0;S--){const Be=ee+S,r1=k[Be],Pb=Be+1<U?k[Be+1].el:w;Q0[S]===0?x(null,r1,m,Pb,C,b,P,A,q):c1&&(oe<0||S!==Hb[oe]?n1(r1,m,Pb,2):oe--)}}},n1=(p,k,m,w,C=null)=>{const{el:b,type:P,transition:A,children:q,shapeFlag:S}=p;if(S&6){n1(p.component.subTree,k,m,w);return}if(S&128){p.suspense.move(k,m,w);return}if(S&64){P.move(p,k,m,B);return}if(P===ve){c(b,k,m);for(let R=0;R<q.length;R++)n1(q[R],k,m,w);c(p.anchor,k,m);return}if(P===qL){j(p,k,m);return}if(w!==2&&S&1&&A)if(w===0)A.beforeEnter(b),c(b,k,m),Ee(()=>A.enter(b),C);else{const{leave:R,delayLeave:O,afterLeave:Z}=A,ee=()=>{p.ctx.isUnmounted?o(b):c(b,k,m)},se=()=>{R(b,()=>{ee(),Z&&Z()})};O?O(b,ee,se):se()}else c(b,k,m)},je=(p,k,m,w=!1,C=!1)=>{const{type:b,props:P,ref:A,children:q,dynamicChildren:S,shapeFlag:U,patchFlag:R,dirs:O,cacheIndex:Z}=p;if(R===-2&&(C=!1),A!=null&&(I1(),Ew(A,null,m,p,!0),C1()),Z!=null&&(k.renderCache[Z]=void 0),U&256){k.ctx.deactivate(p);return}const ee=U&1&&O,se=!hn(p);let oe;if(se&&(oe=P&&P.onVnodeBeforeUnmount)&&i1(oe,k,p),U&6)jn(p.component,m,w);else{if(U&128){p.suspense.unmount(m,w);return}ee&&N1(p,null,k,"beforeUnmount"),U&64?p.type.remove(p,k,m,B,w):S&&!S.hasOnce&&(b!==ve||R>0&&R&64)?Ze(S,k,m,!1,!0):(b===ve&&R&384||!C&&U&16)&&Ze(q,k,m),w&&j0(p)}(se&&(oe=P&&P.onVnodeUnmounted)||ee)&&Ee(()=>{oe&&i1(oe,k,p),ee&&N1(p,null,k,"unmounted")},m)},j0=p=>{const{type:k,el:m,anchor:w,transition:C}=p;if(k===ve){V0(m,w);return}if(k===qL){D(p);return}const b=()=>{o(m),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:P,delayLeave:A}=C,q=()=>P(m,b);A?A(p.el,b,q):q()}else b()},V0=(p,k)=>{let m;for(;p!==k;)m=u(p),o(p),p=m;o(k)},jn=(p,k,m)=>{const{bum:w,scope:C,job:b,subTree:P,um:A,m:q,a:S,parent:U,slots:{__:R}}=p;Nb(q),Nb(S),w&&Bn(w),U&&N(R)&&R.forEach(O=>{U.renderCache[O]=void 0}),C.stop(),b&&(b.flags|=8,je(P,p,k,m)),A&&Ee(A,k),Ee(()=>{p.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},Ze=(p,k,m,w=!1,C=!1,b=0)=>{for(let P=b;P<p.length;P++)je(p[P],k,m,w,C)},L=p=>{if(p.shapeFlag&6)return L(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const k=u(p.anchor||p.el),m=k&&k[Dq];return m?u(m):k};let T=!1;const V=(p,k,m)=>{p==null?k._vnode&&je(k._vnode,null,null,!0):x(k._vnode||null,p,k,null,null,null,m),k._vnode=p,T||(T=!0,Db(),LC(),T=!1)},B={p:x,um:je,m:n1,r:j0,mt:U1,mc:W,pc:ae,pbc:ue,n:L,o:e};return{render:V,hydrate:void 0,createApp:aA(V)}}function SL({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Z1({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function yA(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ZC(e,t,n=!1){const c=e.children,o=t.children;if(N(c)&&N(o))for(let r=0;r<c.length;r++){const i=c[r];let d=o[r];d.shapeFlag&1&&!d.dynamicChildren&&((d.patchFlag<=0||d.patchFlag===32)&&(d=o[r]=R1(o[r]),d.el=i.el),!n&&d.patchFlag!==-2&&ZC(i,d)),d.type===hL&&(d.el=i.el),d.type===E1&&!d.el&&(d.el=i.el)}}function pA(e){const t=e.slice(),n=[0];let c,o,r,i,d;const h=e.length;for(c=0;c<h;c++){const s=e[c];if(s!==0){if(o=n[n.length-1],e[o]<s){t[c]=o,n.push(c);continue}for(r=0,i=n.length-1;r<i;)d=r+i>>1,e[n[d]]<s?r=d+1:i=d;s<e[n[r]]&&(r>0&&(t[c]=n[r-1]),n[r]=c)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function $C(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$C(t)}function Nb(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const uA=Symbol.for("v-scx"),kA=()=>We(uA);function U0(e,t,n){return GC(e,t,n)}function GC(e,t,n=he){const{immediate:c,deep:o,flush:r,once:i}=n,d=Se({},n),h=t&&c||!t&&r!=="post";let s;if(wn){if(r==="sync"){const f=kA();s=f.__watcherHandles||(f.__watcherHandles=[])}else if(!h){const f=()=>{};return f.stop=k1,f.resume=k1,f.pause=k1,f}}const l=we;d.call=(f,v,x)=>m1(f,l,v,x);let y=!1;r==="post"?d.scheduler=f=>{Ee(f,l&&l.suspense)}:r!=="sync"&&(y=!0,d.scheduler=(f,v)=>{v?f():gb(f)}),d.augmentJob=f=>{t&&(f.flags|=4),y&&(f.flags|=2,l&&(f.id=l.uid,f.i=l))};const u=jq(e,t,d);return wn&&(s?s.push(u):h&&u()),u}function fA(e,t,n){const c=this.proxy,o=Me(e)?e.includes(".")?WC(c,e):()=>c[e]:e.bind(c,c);let r;$(t)?r=t:(r=t.handler,n=t);const i=An(this),d=GC(o,r.bind(c),n);return i(),d}function WC(e,t){const n=t.split(".");return()=>{let c=e;for(let o=0;o<n.length&&c;o++)c=c[n[o]];return c}}const MA=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${H0(t)}Modifiers`];function mA(e,t,...n){if(e.isUnmounted)return;const c=e.vnode.props||he;let o=n;const r=t.startsWith("update:"),i=r&&MA(c,t.slice(7));i&&(i.trim&&(o=n.map(l=>Me(l)?l.trim():l)),i.number&&(o=n.map(_w)));let d,h=c[d=xL(t)]||c[d=xL(Ke(t))];!h&&r&&(h=c[d=xL(H0(t))]),h&&m1(h,e,6,o);const s=c[d+"Once"];if(s){if(!e.emitted)e.emitted={};else if(e.emitted[d])return;e.emitted[d]=!0,m1(s,e,6,o)}}function KC(e,t,n=!1){const c=t.emitsCache,o=c.get(e);if(o!==void 0)return o;const r=e.emits;let i={},d=!1;if(!$(e)){const h=s=>{const l=KC(s,t,!0);l&&(d=!0,Se(i,l))};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}return!r&&!d?(ye(e)&&c.set(e,null),null):(N(r)?r.forEach(h=>i[h]=null):Se(i,r),ye(e)&&c.set(e,i),i)}function dL(e,t){return!e||!Qw(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,H0(t))||ce(e,t))}function Zb(e){const{type:t,vnode:n,proxy:c,withProxy:o,propsOptions:[r],slots:i,attrs:d,emit:h,render:s,renderCache:l,props:y,data:u,setupState:f,ctx:v,inheritAttrs:x}=e,I=Ow(e);let H,z;try{if(n.shapeFlag&4){const D=o||c,E=D;H=u1(s.call(E,D,l,y,f,u,v)),z=d}else{const D=t;H=u1(D.length>1?D(y,{attrs:d,slots:i,emit:h}):D(y,null)),z=t.props?d:gA(d)}}catch(D){ln.length=0,oL(D,e,1),H=re(E1)}let j=H;if(z&&x!==!1){const D=Object.keys(z),{shapeFlag:E}=j;D.length&&E&7&&(r&&D.some(ib)&&(z=vA(z,r)),j=Z0(j,z,!1,!0))}return n.dirs&&(j=Z0(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&vb(j,n.transition),H=j,Ow(I),H}const gA=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qw(n))&&((t||(t={}))[n]=e[n]);return t},vA=(e,t)=>{const n={};for(const c in e)(!ib(c)||!(c.slice(9)in t))&&(n[c]=e[c]);return n};function xA(e,t,n){const{props:c,children:o,component:r}=e,{props:i,children:d,patchFlag:h}=t,s=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return c?$b(c,i,s):!!i;if(h&8){const l=t.dynamicProps;for(let y=0;y<l.length;y++){const u=l[y];if(i[u]!==c[u]&&!dL(s,u))return!0}}}else return(o||d)&&(!d||!d.$stable)?!0:c===i?!1:c?i?$b(c,i,s):!0:!!i;return!1}function $b(e,t,n){const c=Object.keys(t);if(c.length!==Object.keys(e).length)return!0;for(let o=0;o<c.length;o++){const r=c[o];if(t[r]!==e[r]&&!dL(n,r))return!0}return!1}function wA({vnode:e,parent:t},n){for(;t;){const c=t.subTree;if(c.suspense&&c.suspense.activeBranch===e&&(c.el=e.el),c===e)(e=t.vnode).el=n,t=t.parent;else break}}const XC=e=>e.__isSuspense;function LA(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):_q(e)}const ve=Symbol.for("v-fgt"),hL=Symbol.for("v-txt"),E1=Symbol.for("v-cmt"),qL=Symbol.for("v-stc"),ln=[];let Ne=null;function _(e=!1){ln.push(Ne=e?null:[])}function bA(){ln.pop(),Ne=ln[ln.length-1]||null}let xn=1;function Gb(e,t=!1){xn+=e,e<0&&Ne&&t&&(Ne.hasOnce=!0)}function JC(e){return e.dynamicChildren=xn>0?Ne||F0:null,bA(),xn>0&&Ne&&Ne.push(e),e}function F(e,t,n,c,o,r){return JC(M(e,t,n,c,o,r,!0))}function Ue(e,t,n,c,o){return JC(re(e,t,n,c,o,!0))}function Nw(e){return e?e.__v_isVNode===!0:!1}function en(e,t){return e.type===t.type&&e.key===t.key}const QC=({key:e})=>e??null,Un=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Me(e)||fe(e)||$(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function M(e,t=null,n=null,c=0,o=null,r=e===ve?0:1,i=!1,d=!1){const h={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&QC(t),ref:t&&Un(t),scopeId:IC,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:c,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Re};return d?(Lb(h,n),r&128&&e.normalize(h)):n&&(h.shapeFlag|=Me(n)?8:16),xn>0&&!i&&Ne&&(h.patchFlag>0||r&6)&&h.patchFlag!==32&&Ne.push(h),h}const re=IA;function IA(e,t=null,n=null,c=0,o=null,r=!1){if((!e||e===PC)&&(e=E1),Nw(e)){const d=Z0(e,t,!0);return n&&Lb(d,n),xn>0&&!r&&Ne&&(d.shapeFlag&6?Ne[Ne.indexOf(e)]=d:Ne.push(d)),d.patchFlag=-2,d}if(_A(e)&&(e=e.__vccOpts),t){t=CA(t);let{class:d,style:h}=t;d&&!Me(d)&&(t.class=O0(d)),ye(h)&&(Mb(h)&&!N(h)&&(h=Se({},h)),t.style=sb(h))}const i=Me(e)?1:XC(e)?128:Tq(e)?64:ye(e)?4:$(e)?2:0;return M(e,t,n,c,o,i,r,!0)}function CA(e){return e?Mb(e)||FC(e)?Se({},e):e:null}function Z0(e,t,n=!1,c=!1){const{props:o,ref:r,patchFlag:i,children:d,transition:h}=e,s=t?SA(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&QC(s),ref:t&&t.ref?n&&r?N(r)?r.concat(Un(t)):[r,Un(t)]:Un(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:d,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:h,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Z0(e.ssContent),ssFallback:e.ssFallback&&Z0(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return h&&c&&vb(l,h.clone(l)),l}function Je(e=" ",t=0){return re(hL,null,e,t)}function f1(e="",t=!1){return t?(_(),Ue(E1,null,e)):re(E1,null,e)}function u1(e){return e==null||typeof e=="boolean"?re(E1):N(e)?re(ve,null,e.slice()):Nw(e)?R1(e):re(hL,null,String(e))}function R1(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Z0(e)}function Lb(e,t){let n=0;const{shapeFlag:c}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(c&65){const o=t.default;o&&(o._c&&(o._d=!1),Lb(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!FC(t)?t._ctx=Re:o===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),c&64?(n=16,t=[Je(t)]):n=8);e.children=t,e.shapeFlag|=n}function SA(...e){const t={};for(let n=0;n<e.length;n++){const c=e[n];for(const o in c)if(o==="class")t.class!==c.class&&(t.class=O0([t.class,c.class]));else if(o==="style")t.style=sb([t.style,c.style]);else if(Qw(o)){const r=t[o],i=c[o];i&&r!==i&&!(N(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=c[o])}return t}function i1(e,t,n,c=null){m1(e,t,7,[n,c])}const qA=_C();let AA=0;function zA(e,t,n){const c=e.type,o=(t?t.appContext:e.appContext)||qA,r={uid:AA++,vnode:e,type:c,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:OC(c,o),emitsOptions:KC(c,o),emit:null,emitted:null,propsDefaults:he,inheritAttrs:c.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=mA.bind(null,r),e.ce&&e.ce(r),r}let we=null,Zw,$L;{const e=aL(),t=(n,c)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(c),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};Zw=t("__VUE_INSTANCE_SETTERS__",n=>we=n),$L=t("__VUE_SSR_SETTERS__",n=>wn=n)}const An=e=>{const t=we;return Zw(e),e.scope.on(),()=>{e.scope.off(),Zw(t)}},Wb=()=>{we&&we.scope.off(),Zw(null)};function YC(e){return e.vnode.shapeFlag&4}let wn=!1;function HA(e,t=!1,n=!1){t&&$L(t);const{props:c,children:o}=e.vnode,r=YC(e);cA(e,c,r,t),dA(e,o,n||t);const i=r?PA(e,t):void 0;return t&&$L(!1),i}function PA(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Kq);const{setup:c}=n;if(c){I1();const o=e.setupContext=c.length>1?VA(e):null,r=An(e),i=qn(c,e,0,[e.props,o]),d=GI(i);if(C1(),r(),(d||e.sp)&&!hn(e)&&CC(e),d){if(i.then(Wb,Wb),t)return i.then(h=>{Kb(e,h)}).catch(h=>{oL(h,e,0)});e.asyncDep=i}else Kb(e,i)}else eS(e)}function Kb(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=vC(t)),eS(e)}function eS(e,t,n){const c=e.type;e.render||(e.render=c.render||k1);{const o=An(e);I1();try{Xq(e)}finally{C1(),o()}}}const jA={get(e,t){return be(e,"get",""),e[t]}};function VA(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,jA),slots:e.slots,emit:e.emit,expose:t}}function sL(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vC(mb(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in sn)return sn[n](e)},has(t,n){return n in t||n in sn}})):e.proxy}function RA(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function _A(e){return $(e)&&"__vccOpts"in e}const He=(e,t)=>Hq(e,t,wn);function Ln(e,t,n){const c=arguments.length;return c===2?ye(t)&&!N(t)?Nw(t)?re(e,null,[t]):re(e,t):re(e,null,t):(c>3?n=Array.prototype.slice.call(arguments,2):c===3&&Nw(n)&&(n=[n]),re(e,t,n))}const DA="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let GL;const Xb=typeof window<"u"&&window.trustedTypes;if(Xb)try{GL=Xb.createPolicy("vue",{createHTML:e=>e})}catch{}const tS=GL?e=>GL.createHTML(e):e=>e,TA="http://www.w3.org/2000/svg",FA="http://www.w3.org/1998/Math/MathML",w1=typeof document<"u"?document:null,Jb=w1&&w1.createElement("template"),BA={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,c)=>{const o=t==="svg"?w1.createElementNS(TA,e):t==="mathml"?w1.createElementNS(FA,e):n?w1.createElement(e,{is:n}):w1.createElement(e);return e==="select"&&c&&c.multiple!=null&&o.setAttribute("multiple",c.multiple),o},createText:e=>w1.createTextNode(e),createComment:e=>w1.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>w1.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,c,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Jb.innerHTML=tS(c==="svg"?`<svg>${e}</svg>`:c==="mathml"?`<math>${e}</math>`:e);const d=Jb.content;if(c==="svg"||c==="mathml"){const h=d.firstChild;for(;h.firstChild;)d.appendChild(h.firstChild);d.removeChild(h)}t.insertBefore(d,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},OA=Symbol("_vtc");function EA(e,t,n){const c=e[OA];c&&(t=(t?[t,...c]:[...c]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $w=Symbol("_vod"),aS=Symbol("_vsh"),Dn={beforeMount(e,{value:t},{transition:n}){e[$w]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):tn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:c}){!t!=!n&&(c?t?(c.beforeEnter(e),tn(e,!0),c.enter(e)):c.leave(e,()=>{tn(e,!1)}):tn(e,t))},beforeUnmount(e,{value:t}){tn(e,t)}};function tn(e,t){e.style.display=t?e[$w]:"none",e[aS]=!t}const UA=Symbol(""),NA=/(^|;)\s*display\s*:/;function ZA(e,t,n){const c=e.style,o=Me(n);let r=!1;if(n&&!o){if(t)if(Me(t))for(const i of t.split(";")){const d=i.slice(0,i.indexOf(":")).trim();n[d]==null&&Nn(c,d,"")}else for(const i in t)n[i]==null&&Nn(c,i,"");for(const i in n)i==="display"&&(r=!0),Nn(c,i,n[i])}else if(o){if(t!==n){const i=c[UA];i&&(n+=";"+i),c.cssText=n,r=NA.test(n)}}else t&&e.removeAttribute("style");$w in e&&(e[$w]=r?c.display:"",e[aS]&&(c.display="none"))}const Qb=/\s*!important$/;function Nn(e,t,n){if(N(n))n.forEach(c=>Nn(e,t,c));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const c=$A(e,t);Qb.test(n)?e.setProperty(H0(c),n.replace(Qb,""),"important"):e[c]=n}}const Yb=["Webkit","Moz","ms"],AL={};function $A(e,t){const n=AL[t];if(n)return n;let c=Ke(t);if(c!=="filter"&&c in e)return AL[t]=c;c=tL(c);for(let o=0;o<Yb.length;o++){const r=Yb[o]+c;if(r in e)return AL[t]=r}return t}const eI="http://www.w3.org/1999/xlink";function tI(e,t,n,c,o,r=tq(t)){c&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(eI,t.slice(6,t.length)):e.setAttributeNS(eI,t,n):n==null||r&&!JI(n)?e.removeAttribute(t):e.setAttribute(t,r?"":M1(n)?String(n):n)}function aI(e,t,n,c,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?tS(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const d=r==="OPTION"?e.getAttribute("value")||"":e.value,h=n==null?e.type==="checkbox"?"on":"":String(n);(d!==h||!("_value"in e))&&(e.value=h),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const d=typeof e[t];d==="boolean"?n=JI(n):n==null&&d==="string"?(n="",i=!0):d==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function I0(e,t,n,c){e.addEventListener(t,n,c)}function GA(e,t,n,c){e.removeEventListener(t,n,c)}const nI=Symbol("_vei");function WA(e,t,n,c,o=null){const r=e[nI]||(e[nI]={}),i=r[t];if(c&&i)i.value=c;else{const[d,h]=KA(t);if(c){const s=r[t]=QA(c,o);I0(e,d,s,h)}else i&&(GA(e,d,i,h),r[t]=void 0)}}const cI=/(?:Once|Passive|Capture)$/;function KA(e){let t;if(cI.test(e)){t={};let c;for(;c=e.match(cI);)e=e.slice(0,e.length-c[0].length),t[c[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):H0(e.slice(2)),t]}let zL=0;const XA=Promise.resolve(),JA=()=>zL||(XA.then(()=>zL=0),zL=Date.now());function QA(e,t){const n=c=>{if(!c._vts)c._vts=Date.now();else if(c._vts<=n.attached)return;m1(YA(c,n.value),t,5,[c])};return n.value=e,n.attached=JA(),n}function YA(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(c=>o=>!o._stopped&&c&&c(o))}else return t}const oI=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ez=(e,t,n,c,o,r)=>{const i=o==="svg";t==="class"?EA(e,c,i):t==="style"?ZA(e,n,c):Qw(t)?ib(t)||WA(e,t,n,c,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tz(e,t,c,i))?(aI(e,t,c),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&tI(e,t,c,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Me(c))?aI(e,Ke(t),c,r,t):(t==="true-value"?e._trueValue=c:t==="false-value"&&(e._falseValue=c),tI(e,t,c,i))};function tz(e,t,n,c){if(c)return!!(t==="innerHTML"||t==="textContent"||t in e&&oI(t)&&$(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return oI(t)&&Me(n)?!1:t in e}const Gw=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?n=>Bn(t,n):t};function az(e){e.target.composing=!0}function rI(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const N0=Symbol("_assign"),ge={created(e,{modifiers:{lazy:t,trim:n,number:c}},o){e[N0]=Gw(o);const r=c||o.props&&o.props.type==="number";I0(e,t?"change":"input",i=>{if(i.target.composing)return;let d=e.value;n&&(d=d.trim()),r&&(d=_w(d)),e[N0](d)}),n&&I0(e,"change",()=>{e.value=e.value.trim()}),t||(I0(e,"compositionstart",az),I0(e,"compositionend",rI),I0(e,"change",rI))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:c,trim:o,number:r}},i){if(e[N0]=Gw(i),e.composing)return;const d=(r||e.type==="number")&&!/^0\d/.test(e.value)?_w(e.value):e.value,h=t??"";d!==h&&(document.activeElement===e&&e.type!=="range"&&(c&&t===n||o&&e.value.trim()===h)||(e.value=h))}},nz={deep:!0,created(e,{value:t,modifiers:{number:n}},c){const o=Yw(t);I0(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?_w(Ww(i)):Ww(i));e[N0](e.multiple?o?new Set(r):r:r[0]),e._assigning=!0,rL(()=>{e._assigning=!1})}),e[N0]=Gw(c)},mounted(e,{value:t}){iI(e,t)},beforeUpdate(e,t,n){e[N0]=Gw(n)},updated(e,{value:t}){e._assigning||iI(e,t)}};function iI(e,t){const n=e.multiple,c=N(t);if(!(n&&!c&&!Yw(t))){for(let o=0,r=e.options.length;o<r;o++){const i=e.options[o],d=Ww(i);if(n)if(c){const h=typeof d;h==="string"||h==="number"?i.selected=t.some(s=>String(s)===String(d)):i.selected=nq(t,d)>-1}else i.selected=t.has(d);else if(nL(Ww(i),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ww(e){return"_value"in e?e._value:e.value}const cz=["ctrl","shift","alt","meta"],oz={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>cz.some(n=>e[`${n}Key`]&&!t.includes(n))},bb=(e,t)=>{const n=e._withMods||(e._withMods={}),c=t.join(".");return n[c]||(n[c]=(o,...r)=>{for(let i=0;i<t.length;i++){const d=oz[t[i]];if(d&&d(o,t))return}return e(o,...r)})},rz=Se({patchProp:ez},BA);let dI;function iz(){return dI||(dI=sA(rz))}const dz=(...e)=>{const t=iz().createApp(...e),{mount:n}=t;return t.mount=c=>{const o=sz(c);if(!o)return;const r=t._component;!$(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,hz(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function hz(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function sz(e){return Me(e)?document.querySelector(e):e}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let nS;const lL=e=>nS=e,cS=Symbol();function WL(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var yn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(yn||(yn={}));function lz(){const e=tC(!0),t=e.run(()=>Y({}));let n=[],c=[];const o=mb({install(r){lL(o),o._a=r,r.provide(cS,o),r.config.globalProperties.$pinia=o,c.forEach(i=>n.push(i)),c=[]},use(r){return this._a?n.push(r):c.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const oS=()=>{};function hI(e,t,n,c=oS){e.push(t);const o=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),c())};return!n&&aC()&&cq(o),o}function _0(e,...t){e.slice().forEach(n=>{n(...t)})}const yz=e=>e(),sI=Symbol(),HL=Symbol();function KL(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,c)=>e.set(c,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const c=t[n],o=e[n];WL(o)&&WL(c)&&e.hasOwnProperty(n)&&!fe(c)&&!B1(c)?e[n]=KL(o,c):e[n]=c}return e}const pz=Symbol();function uz(e){return!WL(e)||!Object.prototype.hasOwnProperty.call(e,pz)}const{assign:j1}=Object;function kz(e){return!!(fe(e)&&e.effect)}function fz(e,t,n,c){const{state:o,actions:r,getters:i}=t,d=n.state.value[e];let h;function s(){d||(n.state.value[e]=o?o():{});const l=Sq(n.state.value[e]);return j1(l,r,Object.keys(i||{}).reduce((y,u)=>(y[u]=mb(He(()=>{lL(n);const f=n._s.get(e);return i[u].call(f,f)})),y),{}))}return h=rS(e,s,t,n,c,!0),h}function rS(e,t,n={},c,o,r){let i;const d=j1({actions:{}},n),h={deep:!0};let s,l,y=[],u=[],f;const v=c.state.value[e];!r&&!v&&(c.state.value[e]={}),Y({});let x;function I(W){let X;s=l=!1,typeof W=="function"?(W(c.state.value[e]),X={type:yn.patchFunction,storeId:e,events:f}):(KL(c.state.value[e],W),X={type:yn.patchObject,payload:W,storeId:e,events:f});const ue=x=Symbol();rL().then(()=>{x===ue&&(s=!0)}),l=!0,_0(y,X,c.state.value[e])}const H=r?function(){const{state:X}=n,ue=X?X():{};this.$patch(qe=>{j1(qe,ue)})}:oS;function z(){i.stop(),y=[],u=[],c._s.delete(e)}const j=(W,X="")=>{if(sI in W)return W[HL]=X,W;const ue=function(){lL(c);const qe=Array.from(arguments),Te=[],Pe=[];function U1(K){Te.push(K)}function z1(K){Pe.push(K)}_0(u,{args:qe,name:ue[HL],store:E,after:U1,onError:z1});let pe;try{pe=W.apply(this&&this.$id===e?this:E,qe)}catch(K){throw _0(Pe,K),K}return pe instanceof Promise?pe.then(K=>(_0(Te,K),K)).catch(K=>(_0(Pe,K),Promise.reject(K))):(_0(Te,pe),pe)};return ue[sI]=!0,ue[HL]=X,ue},D={_p:c,$id:e,$onAction:hI.bind(null,u),$patch:I,$reset:H,$subscribe(W,X={}){const ue=hI(y,W,X.detached,()=>qe()),qe=i.run(()=>U0(()=>c.state.value[e],Te=>{(X.flush==="sync"?l:s)&&W({storeId:e,type:yn.direct,events:f},Te)},j1({},h,X)));return ue},$dispose:z},E=W0(D);c._s.set(e,E);const Q=(c._a&&c._a.runWithContext||yz)(()=>c._e.run(()=>(i=tC()).run(()=>t({action:j}))));for(const W in Q){const X=Q[W];if(fe(X)&&!kz(X)||B1(X))r||(v&&uz(X)&&(fe(X)?X.value=v[W]:KL(X,v[W])),c.state.value[e][W]=X);else if(typeof X=="function"){const ue=j(X,W);Q[W]=ue,d.actions[W]=X}}return j1(E,Q),j1(te(E),Q),Object.defineProperty(E,"$state",{get:()=>c.state.value[e],set:W=>{I(X=>{j1(X,W)})}}),c._p.forEach(W=>{j1(E,i.run(()=>W({store:E,app:c._a,pinia:c,options:d})))}),v&&r&&n.hydrate&&n.hydrate(E.$state,v),s=!0,l=!0,E}/*! #__NO_SIDE_EFFECTS__ */function Mz(e,t,n){let c;const o=typeof t=="function";c=o?n:t;function r(i,d){const h=nA();return i=i||(h?We(cS,null):null),i&&lL(i),i=nS,i._s.has(e)||(o?rS(e,t,c,i):fz(e,c,i)),i._s.get(e)}return r.$id=e,r}const zn=(e,t)=>{const n=e.__vccOpts||e;for(const[c,o]of t)n[c]=o;return n},mz={__name:"App",setup(e){return(t,n)=>{const c=Xe("router-view");return _(),F("div",null,[re(c)])}}},gz=zn(mz,[["__scopeId","data-v-a6dad67a"]]),vz="modulepreload",xz=function(e){return"/"+e},lI={},d1=function(t,n,c){let o=Promise.resolve();if(n&&n.length>0){let i=function(s){return Promise.all(s.map(l=>Promise.resolve(l).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=i(n.map(s=>{if(s=xz(s),s in lI)return;lI[s]=!0;const l=s.endsWith(".css"),y=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${y}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":vz,l||(u.as="script"),u.crossOrigin="",u.href=s,h&&u.setAttribute("nonce",h),document.head.appendChild(u),l)return new Promise((f,v)=>{u.addEventListener("load",f),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(i){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=i,window.dispatchEvent(d),!d.defaultPrevented)throw i}return o.then(i=>{for(const d of i||[])d.status==="rejected"&&r(d.reason);return t().catch(r)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const T0=typeof document<"u";function iS(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wz(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&iS(e.default)}const ne=Object.assign;function PL(e,t){const n={};for(const c in t){const o=t[c];n[c]=e1(o)?o.map(e):e(o)}return n}const pn=()=>{},e1=Array.isArray,dS=/#/g,Lz=/&/g,bz=/\//g,Iz=/=/g,Cz=/\?/g,hS=/\+/g,Sz=/%5B/g,qz=/%5D/g,sS=/%5E/g,Az=/%60/g,lS=/%7B/g,zz=/%7C/g,yS=/%7D/g,Hz=/%20/g;function Ib(e){return encodeURI(""+e).replace(zz,"|").replace(Sz,"[").replace(qz,"]")}function Pz(e){return Ib(e).replace(lS,"{").replace(yS,"}").replace(sS,"^")}function XL(e){return Ib(e).replace(hS,"%2B").replace(Hz,"+").replace(dS,"%23").replace(Lz,"%26").replace(Az,"`").replace(lS,"{").replace(yS,"}").replace(sS,"^")}function jz(e){return XL(e).replace(Iz,"%3D")}function Vz(e){return Ib(e).replace(dS,"%23").replace(Cz,"%3F")}function Rz(e){return e==null?"":Vz(e).replace(bz,"%2F")}function bn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const _z=/\/$/,Dz=e=>e.replace(_z,"");function jL(e,t,n="/"){let c,o={},r="",i="";const d=t.indexOf("#");let h=t.indexOf("?");return d<h&&d>=0&&(h=-1),h>-1&&(c=t.slice(0,h),r=t.slice(h+1,d>-1?d:t.length),o=e(r)),d>-1&&(c=c||t.slice(0,d),i=t.slice(d,t.length)),c=Oz(c??t,n),{fullPath:c+(r&&"?")+r+i,path:c,query:o,hash:bn(i)}}function Tz(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function yI(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Fz(e,t,n){const c=t.matched.length-1,o=n.matched.length-1;return c>-1&&c===o&&$0(t.matched[c],n.matched[o])&&pS(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function $0(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function pS(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Bz(e[n],t[n]))return!1;return!0}function Bz(e,t){return e1(e)?pI(e,t):e1(t)?pI(t,e):e===t}function pI(e,t){return e1(t)?e.length===t.length&&e.every((n,c)=>n===t[c]):e.length===1&&e[0]===t}function Oz(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),c=e.split("/"),o=c[c.length-1];(o===".."||o===".")&&c.push("");let r=n.length-1,i,d;for(i=0;i<c.length;i++)if(d=c[i],d!==".")if(d==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+c.slice(i).join("/")}const P1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var In;(function(e){e.pop="pop",e.push="push"})(In||(In={}));var un;(function(e){e.back="back",e.forward="forward",e.unknown=""})(un||(un={}));function Ez(e){if(!e)if(T0){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Dz(e)}const Uz=/^[^#]+#/;function Nz(e,t){return e.replace(Uz,"#")+t}function Zz(e,t){const n=document.documentElement.getBoundingClientRect(),c=e.getBoundingClientRect();return{behavior:t.behavior,left:c.left-n.left-(t.left||0),top:c.top-n.top-(t.top||0)}}const yL=()=>({left:window.scrollX,top:window.scrollY});function $z(e){let t;if("el"in e){const n=e.el,c=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?c?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Zz(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function uI(e,t){return(history.state?history.state.position-t:-1)+e}const JL=new Map;function Gz(e,t){JL.set(e,t)}function Wz(e){const t=JL.get(e);return JL.delete(e),t}let Kz=()=>location.protocol+"//"+location.host;function uS(e,t){const{pathname:n,search:c,hash:o}=t,r=e.indexOf("#");if(r>-1){let d=o.includes(e.slice(r))?e.slice(r).length:1,h=o.slice(d);return h[0]!=="/"&&(h="/"+h),yI(h,"")}return yI(n,e)+c+o}function Xz(e,t,n,c){let o=[],r=[],i=null;const d=({state:u})=>{const f=uS(e,location),v=n.value,x=t.value;let I=0;if(u){if(n.value=f,t.value=u,i&&i===v){i=null;return}I=x?u.position-x.position:0}else c(f);o.forEach(H=>{H(n.value,v,{delta:I,type:In.pop,direction:I?I>0?un.forward:un.back:un.unknown})})};function h(){i=n.value}function s(u){o.push(u);const f=()=>{const v=o.indexOf(u);v>-1&&o.splice(v,1)};return r.push(f),f}function l(){const{history:u}=window;u.state&&u.replaceState(ne({},u.state,{scroll:yL()}),"")}function y(){for(const u of r)u();r=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:h,listen:s,destroy:y}}function kI(e,t,n,c=!1,o=!1){return{back:e,current:t,forward:n,replaced:c,position:window.history.length,scroll:o?yL():null}}function Jz(e){const{history:t,location:n}=window,c={value:uS(e,n)},o={value:t.state};o.value||r(c.value,{back:null,current:c.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(h,s,l){const y=e.indexOf("#"),u=y>-1?(n.host&&document.querySelector("base")?e:e.slice(y))+h:Kz()+e+h;try{t[l?"replaceState":"pushState"](s,"",u),o.value=s}catch(f){console.error(f),n[l?"replace":"assign"](u)}}function i(h,s){const l=ne({},t.state,kI(o.value.back,h,o.value.forward,!0),s,{position:o.value.position});r(h,l,!0),c.value=h}function d(h,s){const l=ne({},o.value,t.state,{forward:h,scroll:yL()});r(l.current,l,!0);const y=ne({},kI(c.value,h,null),{position:l.position+1},s);r(h,y,!1),c.value=h}return{location:c,state:o,push:d,replace:i}}function Qz(e){e=Ez(e);const t=Jz(e),n=Xz(e,t.state,t.location,t.replace);function c(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=ne({location:"",base:e,go:c,createHref:Nz.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Yz(e){return typeof e=="string"||e&&typeof e=="object"}function kS(e){return typeof e=="string"||typeof e=="symbol"}const fS=Symbol("");var fI;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(fI||(fI={}));function G0(e,t){return ne(new Error,{type:e,[fS]:!0},t)}function x1(e,t){return e instanceof Error&&fS in e&&(t==null||!!(e.type&t))}const MI="[^/]+?",eH={sensitive:!1,strict:!1,start:!0,end:!0},tH=/[.+*?^${}()[\]/\\]/g;function aH(e,t){const n=ne({},eH,t),c=[];let o=n.start?"^":"";const r=[];for(const s of e){const l=s.length?[]:[90];n.strict&&!s.length&&(o+="/");for(let y=0;y<s.length;y++){const u=s[y];let f=40+(n.sensitive?.25:0);if(u.type===0)y||(o+="/"),o+=u.value.replace(tH,"\\$&"),f+=40;else if(u.type===1){const{value:v,repeatable:x,optional:I,regexp:H}=u;r.push({name:v,repeatable:x,optional:I});const z=H||MI;if(z!==MI){f+=10;try{new RegExp(`(${z})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${v}" (${z}): `+D.message)}}let j=x?`((?:${z})(?:/(?:${z}))*)`:`(${z})`;y||(j=I&&s.length<2?`(?:/${j})`:"/"+j),I&&(j+="?"),o+=j,f+=20,I&&(f+=-8),x&&(f+=-20),z===".*"&&(f+=-50)}l.push(f)}c.push(l)}if(n.strict&&n.end){const s=c.length-1;c[s][c[s].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function d(s){const l=s.match(i),y={};if(!l)return null;for(let u=1;u<l.length;u++){const f=l[u]||"",v=r[u-1];y[v.name]=f&&v.repeatable?f.split("/"):f}return y}function h(s){let l="",y=!1;for(const u of e){(!y||!l.endsWith("/"))&&(l+="/"),y=!1;for(const f of u)if(f.type===0)l+=f.value;else if(f.type===1){const{value:v,repeatable:x,optional:I}=f,H=v in s?s[v]:"";if(e1(H)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const z=e1(H)?H.join("/"):H;if(!z)if(I)u.length<2&&(l.endsWith("/")?l=l.slice(0,-1):y=!0);else throw new Error(`Missing required param "${v}"`);l+=z}}return l||"/"}return{re:i,score:c,keys:r,parse:d,stringify:h}}function nH(e,t){let n=0;for(;n<e.length&&n<t.length;){const c=t[n]-e[n];if(c)return c;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function MS(e,t){let n=0;const c=e.score,o=t.score;for(;n<c.length&&n<o.length;){const r=nH(c[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-c.length)===1){if(mI(c))return 1;if(mI(o))return-1}return o.length-c.length}function mI(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cH={type:0,value:""},oH=/[a-zA-Z0-9_]/;function rH(e){if(!e)return[[]];if(e==="/")return[[cH]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${n})/"${s}": ${f}`)}let n=0,c=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let d=0,h,s="",l="";function y(){s&&(n===0?r.push({type:0,value:s}):n===1||n===2||n===3?(r.length>1&&(h==="*"||h==="+")&&t(`A repeatable param (${s}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:s,regexp:l,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):t("Invalid state to consume buffer"),s="")}function u(){s+=h}for(;d<e.length;){if(h=e[d++],h==="\\"&&n!==2){c=n,n=4;continue}switch(n){case 0:h==="/"?(s&&y(),i()):h===":"?(y(),n=1):u();break;case 4:u(),n=c;break;case 1:h==="("?n=2:oH.test(h)?u():(y(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&d--);break;case 2:h===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+h:n=3:l+=h;break;case 3:y(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&d--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${s}"`),y(),i(),o}function iH(e,t,n){const c=aH(rH(e.path),n),o=ne(c,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function dH(e,t){const n=[],c=new Map;t=wI({strict:!1,end:!0,sensitive:!1},t);function o(y){return c.get(y)}function r(y,u,f){const v=!f,x=vI(y);x.aliasOf=f&&f.record;const I=wI(t,y),H=[x];if("alias"in y){const D=typeof y.alias=="string"?[y.alias]:y.alias;for(const E of D)H.push(vI(ne({},x,{components:f?f.record.components:x.components,path:E,aliasOf:f?f.record:x})))}let z,j;for(const D of H){const{path:E}=D;if(u&&E[0]!=="/"){const ie=u.record.path,Q=ie[ie.length-1]==="/"?"":"/";D.path=u.record.path+(E&&Q+E)}if(z=iH(D,u,I),f?f.alias.push(z):(j=j||z,j!==z&&j.alias.push(z),v&&y.name&&!xI(z)&&i(y.name)),mS(z)&&h(z),x.children){const ie=x.children;for(let Q=0;Q<ie.length;Q++)r(ie[Q],z,f&&f.children[Q])}f=f||z}return j?()=>{i(j)}:pn}function i(y){if(kS(y)){const u=c.get(y);u&&(c.delete(y),n.splice(n.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=n.indexOf(y);u>-1&&(n.splice(u,1),y.record.name&&c.delete(y.record.name),y.children.forEach(i),y.alias.forEach(i))}}function d(){return n}function h(y){const u=lH(y,n);n.splice(u,0,y),y.record.name&&!xI(y)&&c.set(y.record.name,y)}function s(y,u){let f,v={},x,I;if("name"in y&&y.name){if(f=c.get(y.name),!f)throw G0(1,{location:y});I=f.record.name,v=ne(gI(u.params,f.keys.filter(j=>!j.optional).concat(f.parent?f.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),y.params&&gI(y.params,f.keys.map(j=>j.name))),x=f.stringify(v)}else if(y.path!=null)x=y.path,f=n.find(j=>j.re.test(x)),f&&(v=f.parse(x),I=f.record.name);else{if(f=u.name?c.get(u.name):n.find(j=>j.re.test(u.path)),!f)throw G0(1,{location:y,currentLocation:u});I=f.record.name,v=ne({},u.params,y.params),x=f.stringify(v)}const H=[];let z=f;for(;z;)H.unshift(z.record),z=z.parent;return{name:I,path:x,params:v,matched:H,meta:sH(H)}}e.forEach(y=>r(y));function l(){n.length=0,c.clear()}return{addRoute:r,resolve:s,removeRoute:i,clearRoutes:l,getRoutes:d,getRecordMatcher:o}}function gI(e,t){const n={};for(const c of t)c in e&&(n[c]=e[c]);return n}function vI(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:hH(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function hH(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const c in e.components)t[c]=typeof n=="object"?n[c]:n;return t}function xI(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sH(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function wI(e,t){const n={};for(const c in e)n[c]=c in t?t[c]:e[c];return n}function lH(e,t){let n=0,c=t.length;for(;n!==c;){const r=n+c>>1;MS(e,t[r])<0?c=r:n=r+1}const o=yH(e);return o&&(c=t.lastIndexOf(o,c-1)),c}function yH(e){let t=e;for(;t=t.parent;)if(mS(t)&&MS(e,t)===0)return t}function mS({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function pH(e){const t={};if(e===""||e==="?")return t;const c=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<c.length;++o){const r=c[o].replace(hS," "),i=r.indexOf("="),d=bn(i<0?r:r.slice(0,i)),h=i<0?null:bn(r.slice(i+1));if(d in t){let s=t[d];e1(s)||(s=t[d]=[s]),s.push(h)}else t[d]=h}return t}function LI(e){let t="";for(let n in e){const c=e[n];if(n=jz(n),c==null){c!==void 0&&(t+=(t.length?"&":"")+n);continue}(e1(c)?c.map(r=>r&&XL(r)):[c&&XL(c)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function uH(e){const t={};for(const n in e){const c=e[n];c!==void 0&&(t[n]=e1(c)?c.map(o=>o==null?null:""+o):c==null?c:""+c)}return t}const kH=Symbol(""),bI=Symbol(""),pL=Symbol(""),Cb=Symbol(""),QL=Symbol("");function an(){let e=[];function t(c){return e.push(c),()=>{const o=e.indexOf(c);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function _1(e,t,n,c,o,r=i=>i()){const i=c&&(c.enterCallbacks[o]=c.enterCallbacks[o]||[]);return()=>new Promise((d,h)=>{const s=u=>{u===!1?h(G0(4,{from:n,to:t})):u instanceof Error?h(u):Yz(u)?h(G0(2,{from:t,to:u})):(i&&c.enterCallbacks[o]===i&&typeof u=="function"&&i.push(u),d())},l=r(()=>e.call(c&&c.instances[o],t,n,s));let y=Promise.resolve(l);e.length<3&&(y=y.then(s)),y.catch(u=>h(u))})}function VL(e,t,n,c,o=r=>r()){const r=[];for(const i of e)for(const d in i.components){let h=i.components[d];if(!(t!=="beforeRouteEnter"&&!i.instances[d]))if(iS(h)){const l=(h.__vccOpts||h)[t];l&&r.push(_1(l,n,c,i,d,o))}else{let s=h();r.push(()=>s.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${d}" at "${i.path}"`);const y=wz(l)?l.default:l;i.mods[d]=l,i.components[d]=y;const f=(y.__vccOpts||y)[t];return f&&_1(f,n,c,i,d,o)()}))}}return r}function II(e){const t=We(pL),n=We(Cb),c=He(()=>{const h=Ge(e.to);return t.resolve(h)}),o=He(()=>{const{matched:h}=c.value,{length:s}=h,l=h[s-1],y=n.matched;if(!l||!y.length)return-1;const u=y.findIndex($0.bind(null,l));if(u>-1)return u;const f=CI(h[s-2]);return s>1&&CI(l)===f&&y[y.length-1].path!==f?y.findIndex($0.bind(null,h[s-2])):u}),r=He(()=>o.value>-1&&vH(n.params,c.value.params)),i=He(()=>o.value>-1&&o.value===n.matched.length-1&&pS(n.params,c.value.params));function d(h={}){if(gH(h)){const s=t[Ge(e.replace)?"replace":"push"](Ge(e.to)).catch(pn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>s),s}return Promise.resolve()}return{route:c,href:He(()=>c.value.href),isActive:r,isExactActive:i,navigate:d}}function fH(e){return e.length===1?e[0]:e}const MH=q1({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:II,setup(e,{slots:t}){const n=W0(II(e)),{options:c}=We(pL),o=He(()=>({[SI(e.activeClass,c.linkActiveClass,"router-link-active")]:n.isActive,[SI(e.exactActiveClass,c.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&fH(t.default(n));return e.custom?r:Ln("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),mH=MH;function gH(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function vH(e,t){for(const n in t){const c=t[n],o=e[n];if(typeof c=="string"){if(c!==o)return!1}else if(!e1(o)||o.length!==c.length||c.some((r,i)=>r!==o[i]))return!1}return!0}function CI(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const SI=(e,t,n)=>e??t??n,xH=q1({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const c=We(QL),o=He(()=>e.route||c.value),r=We(bI,0),i=He(()=>{let s=Ge(r);const{matched:l}=o.value;let y;for(;(y=l[s])&&!y.components;)s++;return s}),d=He(()=>o.value.matched[i.value]);En(bI,He(()=>i.value+1)),En(kH,d),En(QL,o);const h=Y();return U0(()=>[h.value,d.value,e.name],([s,l,y],[u,f,v])=>{l&&(l.instances[y]=s,f&&f!==l&&s&&s===u&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),s&&l&&(!f||!$0(l,f)||!u)&&(l.enterCallbacks[y]||[]).forEach(x=>x(s))},{flush:"post"}),()=>{const s=o.value,l=e.name,y=d.value,u=y&&y.components[l];if(!u)return qI(n.default,{Component:u,route:s});const f=y.props[l],v=f?f===!0?s.params:typeof f=="function"?f(s):f:null,I=Ln(u,ne({},v,t,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(y.instances[l]=null)},ref:h}));return qI(n.default,{Component:I,route:s})||I}}});function qI(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const wH=xH;function LH(e){const t=dH(e.routes,e),n=e.parseQuery||pH,c=e.stringifyQuery||LI,o=e.history,r=an(),i=an(),d=an(),h=bq(P1);let s=P1;T0&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=PL.bind(null,L=>""+L),y=PL.bind(null,Rz),u=PL.bind(null,bn);function f(L,T){let V,B;return kS(L)?(V=t.getRecordMatcher(L),B=T):B=L,t.addRoute(B,V)}function v(L){const T=t.getRecordMatcher(L);T&&t.removeRoute(T)}function x(){return t.getRoutes().map(L=>L.record)}function I(L){return!!t.getRecordMatcher(L)}function H(L,T){if(T=ne({},T||h.value),typeof L=="string"){const m=jL(n,L,T.path),w=t.resolve({path:m.path},T),C=o.createHref(m.fullPath);return ne(m,w,{params:u(w.params),hash:bn(m.hash),redirectedFrom:void 0,href:C})}let V;if(L.path!=null)V=ne({},L,{path:jL(n,L.path,T.path).path});else{const m=ne({},L.params);for(const w in m)m[w]==null&&delete m[w];V=ne({},L,{params:y(m)}),T.params=y(T.params)}const B=t.resolve(V,T),de=L.hash||"";B.params=l(u(B.params));const p=Tz(c,ne({},L,{hash:Pz(de),path:B.path})),k=o.createHref(p);return ne({fullPath:p,hash:de,query:c===LI?uH(L.query):L.query||{}},B,{redirectedFrom:void 0,href:k})}function z(L){return typeof L=="string"?jL(n,L,h.value.path):ne({},L)}function j(L,T){if(s!==L)return G0(8,{from:T,to:L})}function D(L){return Q(L)}function E(L){return D(ne(z(L),{replace:!0}))}function ie(L){const T=L.matched[L.matched.length-1];if(T&&T.redirect){const{redirect:V}=T;let B=typeof V=="function"?V(L):V;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=z(B):{path:B},B.params={}),ne({query:L.query,hash:L.hash,params:B.path!=null?{}:L.params},B)}}function Q(L,T){const V=s=H(L),B=h.value,de=L.state,p=L.force,k=L.replace===!0,m=ie(V);if(m)return Q(ne(z(m),{state:typeof m=="object"?ne({},de,m.state):de,force:p,replace:k}),T||V);const w=V;w.redirectedFrom=T;let C;return!p&&Fz(c,B,V)&&(C=G0(16,{to:w,from:B}),n1(B,B,!0,!1)),(C?Promise.resolve(C):ue(w,B)).catch(b=>x1(b)?x1(b,2)?b:H1(b):ae(b,w,B)).then(b=>{if(b){if(x1(b,2))return Q(ne({replace:k},z(b.to),{state:typeof b.to=="object"?ne({},de,b.to.state):de,force:p}),T||w)}else b=Te(w,B,!0,k,de);return qe(w,B,b),b})}function W(L,T){const V=j(L,T);return V?Promise.reject(V):Promise.resolve()}function X(L){const T=V0.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(L):L()}function ue(L,T){let V;const[B,de,p]=bH(L,T);V=VL(B.reverse(),"beforeRouteLeave",L,T);for(const m of B)m.leaveGuards.forEach(w=>{V.push(_1(w,L,T))});const k=W.bind(null,L,T);return V.push(k),Ze(V).then(()=>{V=[];for(const m of r.list())V.push(_1(m,L,T));return V.push(k),Ze(V)}).then(()=>{V=VL(de,"beforeRouteUpdate",L,T);for(const m of de)m.updateGuards.forEach(w=>{V.push(_1(w,L,T))});return V.push(k),Ze(V)}).then(()=>{V=[];for(const m of p)if(m.beforeEnter)if(e1(m.beforeEnter))for(const w of m.beforeEnter)V.push(_1(w,L,T));else V.push(_1(m.beforeEnter,L,T));return V.push(k),Ze(V)}).then(()=>(L.matched.forEach(m=>m.enterCallbacks={}),V=VL(p,"beforeRouteEnter",L,T,X),V.push(k),Ze(V))).then(()=>{V=[];for(const m of i.list())V.push(_1(m,L,T));return V.push(k),Ze(V)}).catch(m=>x1(m,8)?m:Promise.reject(m))}function qe(L,T,V){d.list().forEach(B=>X(()=>B(L,T,V)))}function Te(L,T,V,B,de){const p=j(L,T);if(p)return p;const k=T===P1,m=T0?history.state:{};V&&(B||k?o.replace(L.fullPath,ne({scroll:k&&m&&m.scroll},de)):o.push(L.fullPath,de)),h.value=L,n1(L,T,V,k),H1()}let Pe;function U1(){Pe||(Pe=o.listen((L,T,V)=>{if(!jn.listening)return;const B=H(L),de=ie(B);if(de){Q(ne(de,{replace:!0,force:!0}),B).catch(pn);return}s=B;const p=h.value;T0&&Gz(uI(p.fullPath,V.delta),yL()),ue(B,p).catch(k=>x1(k,12)?k:x1(k,2)?(Q(ne(z(k.to),{force:!0}),B).then(m=>{x1(m,20)&&!V.delta&&V.type===In.pop&&o.go(-1,!1)}).catch(pn),Promise.reject()):(V.delta&&o.go(-V.delta,!1),ae(k,B,p))).then(k=>{k=k||Te(B,p,!1),k&&(V.delta&&!x1(k,8)?o.go(-V.delta,!1):V.type===In.pop&&x1(k,20)&&o.go(-1,!1)),qe(B,p,k)}).catch(pn)}))}let z1=an(),pe=an(),K;function ae(L,T,V){H1(L);const B=pe.list();return B.length?B.forEach(de=>de(L,T,V)):console.error(L),Promise.reject(L)}function g1(){return K&&h.value!==P1?Promise.resolve():new Promise((L,T)=>{z1.add([L,T])})}function H1(L){return K||(K=!L,U1(),z1.list().forEach(([T,V])=>L?V(L):T()),z1.reset()),L}function n1(L,T,V,B){const{scrollBehavior:de}=e;if(!T0||!de)return Promise.resolve();const p=!V&&Wz(uI(L.fullPath,0))||(B||!V)&&history.state&&history.state.scroll||null;return rL().then(()=>de(L,T,p)).then(k=>k&&$z(k)).catch(k=>ae(k,L,T))}const je=L=>o.go(L);let j0;const V0=new Set,jn={currentRoute:h,listening:!0,addRoute:f,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:I,getRoutes:x,resolve:H,options:e,push:D,replace:E,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:r.add,beforeResolve:i.add,afterEach:d.add,onError:pe.add,isReady:g1,install(L){const T=this;L.component("RouterLink",mH),L.component("RouterView",wH),L.config.globalProperties.$router=T,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Ge(h)}),T0&&!j0&&h.value===P1&&(j0=!0,D(o.location).catch(de=>{}));const V={};for(const de in P1)Object.defineProperty(V,de,{get:()=>h.value[de],enumerable:!0});L.provide(pL,T),L.provide(Cb,MC(V)),L.provide(QL,h);const B=L.unmount;V0.add(L),L.unmount=function(){V0.delete(L),V0.size<1&&(s=P1,Pe&&Pe(),Pe=null,h.value=P1,j0=!1,K=!1),B()}}};function Ze(L){return L.reduce((T,V)=>T.then(()=>X(V)),Promise.resolve())}return jn}function bH(e,t){const n=[],c=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const d=t.matched[i];d&&(e.matched.find(s=>$0(s,d))?c.push(d):n.push(d));const h=e.matched[i];h&&(t.matched.find(s=>$0(s,h))||o.push(h))}return[n,c,o]}function K0(){return We(pL)}function IH(e){return We(Cb)}function gS(e,t){return function(){return e.apply(t,arguments)}}const{toString:CH}=Object.prototype,{getPrototypeOf:Sb}=Object,{iterator:uL,toStringTag:vS}=Symbol,kL=(e=>t=>{const n=CH.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a1=e=>(e=e.toLowerCase(),t=>kL(t)===e),fL=e=>t=>typeof t===e,{isArray:X0}=Array,Cn=fL("undefined");function SH(e){return e!==null&&!Cn(e)&&e.constructor!==null&&!Cn(e.constructor)&&_e(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const xS=a1("ArrayBuffer");function qH(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&xS(e.buffer),t}const AH=fL("string"),_e=fL("function"),wS=fL("number"),ML=e=>e!==null&&typeof e=="object",zH=e=>e===!0||e===!1,Zn=e=>{if(kL(e)!=="object")return!1;const t=Sb(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(vS in e)&&!(uL in e)},HH=a1("Date"),PH=a1("File"),jH=a1("Blob"),VH=a1("FileList"),RH=e=>ML(e)&&_e(e.pipe),_H=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||_e(e.append)&&((t=kL(e))==="formdata"||t==="object"&&_e(e.toString)&&e.toString()==="[object FormData]"))},DH=a1("URLSearchParams"),[TH,FH,BH,OH]=["ReadableStream","Request","Response","Headers"].map(a1),EH=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hn(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let c,o;if(typeof e!="object"&&(e=[e]),X0(e))for(c=0,o=e.length;c<o;c++)t.call(null,e[c],c,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let d;for(c=0;c<i;c++)d=r[c],t.call(null,e[d],d,e)}}function LS(e,t){t=t.toLowerCase();const n=Object.keys(e);let c=n.length,o;for(;c-- >0;)if(o=n[c],t===o.toLowerCase())return o;return null}const C0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,bS=e=>!Cn(e)&&e!==C0;function YL(){const{caseless:e}=bS(this)&&this||{},t={},n=(c,o)=>{const r=e&&LS(t,o)||o;Zn(t[r])&&Zn(c)?t[r]=YL(t[r],c):Zn(c)?t[r]=YL({},c):X0(c)?t[r]=c.slice():t[r]=c};for(let c=0,o=arguments.length;c<o;c++)arguments[c]&&Hn(arguments[c],n);return t}const UH=(e,t,n,{allOwnKeys:c}={})=>(Hn(t,(o,r)=>{n&&_e(o)?e[r]=gS(o,n):e[r]=o},{allOwnKeys:c}),e),NH=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ZH=(e,t,n,c)=>{e.prototype=Object.create(t.prototype,c),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$H=(e,t,n,c)=>{let o,r,i;const d={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),r=o.length;r-- >0;)i=o[r],(!c||c(i,e,t))&&!d[i]&&(t[i]=e[i],d[i]=!0);e=n!==!1&&Sb(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},GH=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const c=e.indexOf(t,n);return c!==-1&&c===n},WH=e=>{if(!e)return null;if(X0(e))return e;let t=e.length;if(!wS(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},KH=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Sb(Uint8Array)),XH=(e,t)=>{const c=(e&&e[uL]).call(e);let o;for(;(o=c.next())&&!o.done;){const r=o.value;t.call(e,r[0],r[1])}},JH=(e,t)=>{let n;const c=[];for(;(n=e.exec(t))!==null;)c.push(n);return c},QH=a1("HTMLFormElement"),YH=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,c,o){return c.toUpperCase()+o}),AI=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),eP=a1("RegExp"),IS=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),c={};Hn(n,(o,r)=>{let i;(i=t(o,r,e))!==!1&&(c[r]=i||o)}),Object.defineProperties(e,c)},tP=e=>{IS(e,(t,n)=>{if(_e(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const c=e[n];if(_e(c)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},aP=(e,t)=>{const n={},c=o=>{o.forEach(r=>{n[r]=!0})};return X0(e)?c(e):c(String(e).split(t)),n},nP=()=>{},cP=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function oP(e){return!!(e&&_e(e.append)&&e[vS]==="FormData"&&e[uL])}const rP=e=>{const t=new Array(10),n=(c,o)=>{if(ML(c)){if(t.indexOf(c)>=0)return;if(!("toJSON"in c)){t[o]=c;const r=X0(c)?[]:{};return Hn(c,(i,d)=>{const h=n(i,o+1);!Cn(h)&&(r[d]=h)}),t[o]=void 0,r}}return c};return n(e,0)},iP=a1("AsyncFunction"),dP=e=>e&&(ML(e)||_e(e))&&_e(e.then)&&_e(e.catch),CS=((e,t)=>e?setImmediate:t?((n,c)=>(C0.addEventListener("message",({source:o,data:r})=>{o===C0&&r===n&&c.length&&c.shift()()},!1),o=>{c.push(o),C0.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_e(C0.postMessage)),hP=typeof queueMicrotask<"u"?queueMicrotask.bind(C0):typeof process<"u"&&process.nextTick||CS,sP=e=>e!=null&&_e(e[uL]),g={isArray:X0,isArrayBuffer:xS,isBuffer:SH,isFormData:_H,isArrayBufferView:qH,isString:AH,isNumber:wS,isBoolean:zH,isObject:ML,isPlainObject:Zn,isReadableStream:TH,isRequest:FH,isResponse:BH,isHeaders:OH,isUndefined:Cn,isDate:HH,isFile:PH,isBlob:jH,isRegExp:eP,isFunction:_e,isStream:RH,isURLSearchParams:DH,isTypedArray:KH,isFileList:VH,forEach:Hn,merge:YL,extend:UH,trim:EH,stripBOM:NH,inherits:ZH,toFlatObject:$H,kindOf:kL,kindOfTest:a1,endsWith:GH,toArray:WH,forEachEntry:XH,matchAll:JH,isHTMLForm:QH,hasOwnProperty:AI,hasOwnProp:AI,reduceDescriptors:IS,freezeMethods:tP,toObjectSet:aP,toCamelCase:YH,noop:nP,toFiniteNumber:cP,findKey:LS,global:C0,isContextDefined:bS,isSpecCompliantForm:oP,toJSONObject:rP,isAsyncFn:iP,isThenable:dP,setImmediate:CS,asap:hP,isIterable:sP};function G(e,t,n,c,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),c&&(this.request=c),o&&(this.response=o,this.status=o.status?o.status:null)}g.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:g.toJSONObject(this.config),code:this.code,status:this.status}}});const SS=G.prototype,qS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qS[e]={value:e}});Object.defineProperties(G,qS);Object.defineProperty(SS,"isAxiosError",{value:!0});G.from=(e,t,n,c,o,r)=>{const i=Object.create(SS);return g.toFlatObject(e,i,function(h){return h!==Error.prototype},d=>d!=="isAxiosError"),G.call(i,e.message,t,n,c,o),i.cause=e,i.name=e.name,r&&Object.assign(i,r),i};const lP=null;function eb(e){return g.isPlainObject(e)||g.isArray(e)}function AS(e){return g.endsWith(e,"[]")?e.slice(0,-2):e}function zI(e,t,n){return e?e.concat(t).map(function(o,r){return o=AS(o),!n&&r?"["+o+"]":o}).join(n?".":""):t}function yP(e){return g.isArray(e)&&!e.some(eb)}const pP=g.toFlatObject(g,{},null,function(t){return/^is[A-Z]/.test(t)});function mL(e,t,n){if(!g.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=g.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,I){return!g.isUndefined(I[x])});const c=n.metaTokens,o=n.visitor||l,r=n.dots,i=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&g.isSpecCompliantForm(t);if(!g.isFunction(o))throw new TypeError("visitor must be a function");function s(v){if(v===null)return"";if(g.isDate(v))return v.toISOString();if(!h&&g.isBlob(v))throw new G("Blob is not supported. Use a Buffer instead.");return g.isArrayBuffer(v)||g.isTypedArray(v)?h&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function l(v,x,I){let H=v;if(v&&!I&&typeof v=="object"){if(g.endsWith(x,"{}"))x=c?x:x.slice(0,-2),v=JSON.stringify(v);else if(g.isArray(v)&&yP(v)||(g.isFileList(v)||g.endsWith(x,"[]"))&&(H=g.toArray(v)))return x=AS(x),H.forEach(function(j,D){!(g.isUndefined(j)||j===null)&&t.append(i===!0?zI([x],D,r):i===null?x:x+"[]",s(j))}),!1}return eb(v)?!0:(t.append(zI(I,x,r),s(v)),!1)}const y=[],u=Object.assign(pP,{defaultVisitor:l,convertValue:s,isVisitable:eb});function f(v,x){if(!g.isUndefined(v)){if(y.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));y.push(v),g.forEach(v,function(H,z){(!(g.isUndefined(H)||H===null)&&o.call(t,H,g.isString(z)?z.trim():z,x,u))===!0&&f(H,x?x.concat(z):[z])}),y.pop()}}if(!g.isObject(e))throw new TypeError("data must be an object");return f(e),t}function HI(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(c){return t[c]})}function qb(e,t){this._pairs=[],e&&mL(e,this,t)}const zS=qb.prototype;zS.append=function(t,n){this._pairs.push([t,n])};zS.toString=function(t){const n=t?function(c){return t.call(this,c,HI)}:HI;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function uP(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function HS(e,t,n){if(!t)return e;const c=n&&n.encode||uP;g.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let r;if(o?r=o(t,n):r=g.isURLSearchParams(t)?t.toString():new qb(t,n).toString(c),r){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+r}return e}class PI{constructor(){this.handlers=[]}use(t,n,c){return this.handlers.push({fulfilled:t,rejected:n,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){g.forEach(this.handlers,function(c){c!==null&&t(c)})}}const PS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kP=typeof URLSearchParams<"u"?URLSearchParams:qb,fP=typeof FormData<"u"?FormData:null,MP=typeof Blob<"u"?Blob:null,mP={isBrowser:!0,classes:{URLSearchParams:kP,FormData:fP,Blob:MP},protocols:["http","https","file","blob","url","data"]},Ab=typeof window<"u"&&typeof document<"u",tb=typeof navigator=="object"&&navigator||void 0,gP=Ab&&(!tb||["ReactNative","NativeScript","NS"].indexOf(tb.product)<0),vP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xP=Ab&&window.location.href||"http://localhost",wP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ab,hasStandardBrowserEnv:gP,hasStandardBrowserWebWorkerEnv:vP,navigator:tb,origin:xP},Symbol.toStringTag,{value:"Module"})),Ie={...wP,...mP};function LP(e,t){return mL(e,new Ie.classes.URLSearchParams,Object.assign({visitor:function(n,c,o,r){return Ie.isNode&&g.isBuffer(n)?(this.append(c,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function bP(e){return g.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function IP(e){const t={},n=Object.keys(e);let c;const o=n.length;let r;for(c=0;c<o;c++)r=n[c],t[r]=e[r];return t}function jS(e){function t(n,c,o,r){let i=n[r++];if(i==="__proto__")return!0;const d=Number.isFinite(+i),h=r>=n.length;return i=!i&&g.isArray(o)?o.length:i,h?(g.hasOwnProp(o,i)?o[i]=[o[i],c]:o[i]=c,!d):((!o[i]||!g.isObject(o[i]))&&(o[i]=[]),t(n,c,o[i],r)&&g.isArray(o[i])&&(o[i]=IP(o[i])),!d)}if(g.isFormData(e)&&g.isFunction(e.entries)){const n={};return g.forEachEntry(e,(c,o)=>{t(bP(c),o,n,0)}),n}return null}function CP(e,t,n){if(g.isString(e))try{return(t||JSON.parse)(e),g.trim(e)}catch(c){if(c.name!=="SyntaxError")throw c}return(n||JSON.stringify)(e)}const Pn={transitional:PS,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const c=n.getContentType()||"",o=c.indexOf("application/json")>-1,r=g.isObject(t);if(r&&g.isHTMLForm(t)&&(t=new FormData(t)),g.isFormData(t))return o?JSON.stringify(jS(t)):t;if(g.isArrayBuffer(t)||g.isBuffer(t)||g.isStream(t)||g.isFile(t)||g.isBlob(t)||g.isReadableStream(t))return t;if(g.isArrayBufferView(t))return t.buffer;if(g.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let d;if(r){if(c.indexOf("application/x-www-form-urlencoded")>-1)return LP(t,this.formSerializer).toString();if((d=g.isFileList(t))||c.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return mL(d?{"files[]":t}:t,h&&new h,this.formSerializer)}}return r||o?(n.setContentType("application/json",!1),CP(t)):t}],transformResponse:[function(t){const n=this.transitional||Pn.transitional,c=n&&n.forcedJSONParsing,o=this.responseType==="json";if(g.isResponse(t)||g.isReadableStream(t))return t;if(t&&g.isString(t)&&(c&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(d){if(i)throw d.name==="SyntaxError"?G.from(d,G.ERR_BAD_RESPONSE,this,null,this.response):d}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ie.classes.FormData,Blob:Ie.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};g.forEach(["delete","get","head","post","put","patch"],e=>{Pn.headers[e]={}});const SP=g.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qP=e=>{const t={};let n,c,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),c=i.substring(o+1).trim(),!(!n||t[n]&&SP[n])&&(n==="set-cookie"?t[n]?t[n].push(c):t[n]=[c]:t[n]=t[n]?t[n]+", "+c:c)}),t},jI=Symbol("internals");function nn(e){return e&&String(e).trim().toLowerCase()}function $n(e){return e===!1||e==null?e:g.isArray(e)?e.map($n):String(e)}function AP(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=n.exec(e);)t[c[1]]=c[2];return t}const zP=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function RL(e,t,n,c,o){if(g.isFunction(c))return c.call(this,t,n);if(o&&(t=n),!!g.isString(t)){if(g.isString(c))return t.indexOf(c)!==-1;if(g.isRegExp(c))return c.test(t)}}function HP(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,c)=>n.toUpperCase()+c)}function PP(e,t){const n=g.toCamelCase(" "+t);["get","set","has"].forEach(c=>{Object.defineProperty(e,c+n,{value:function(o,r,i){return this[c].call(this,t,o,r,i)},configurable:!0})})}let De=class{constructor(t){t&&this.set(t)}set(t,n,c){const o=this;function r(d,h,s){const l=nn(h);if(!l)throw new Error("header name must be a non-empty string");const y=g.findKey(o,l);(!y||o[y]===void 0||s===!0||s===void 0&&o[y]!==!1)&&(o[y||h]=$n(d))}const i=(d,h)=>g.forEach(d,(s,l)=>r(s,l,h));if(g.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(g.isString(t)&&(t=t.trim())&&!zP(t))i(qP(t),n);else if(g.isObject(t)&&g.isIterable(t)){let d={},h,s;for(const l of t){if(!g.isArray(l))throw TypeError("Object iterator must return a key-value pair");d[s=l[0]]=(h=d[s])?g.isArray(h)?[...h,l[1]]:[h,l[1]]:l[1]}i(d,n)}else t!=null&&r(n,t,c);return this}get(t,n){if(t=nn(t),t){const c=g.findKey(this,t);if(c){const o=this[c];if(!n)return o;if(n===!0)return AP(o);if(g.isFunction(n))return n.call(this,o,c);if(g.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=nn(t),t){const c=g.findKey(this,t);return!!(c&&this[c]!==void 0&&(!n||RL(this,this[c],c,n)))}return!1}delete(t,n){const c=this;let o=!1;function r(i){if(i=nn(i),i){const d=g.findKey(c,i);d&&(!n||RL(c,c[d],d,n))&&(delete c[d],o=!0)}}return g.isArray(t)?t.forEach(r):r(t),o}clear(t){const n=Object.keys(this);let c=n.length,o=!1;for(;c--;){const r=n[c];(!t||RL(this,this[r],r,t,!0))&&(delete this[r],o=!0)}return o}normalize(t){const n=this,c={};return g.forEach(this,(o,r)=>{const i=g.findKey(c,r);if(i){n[i]=$n(o),delete n[r];return}const d=t?HP(r):String(r).trim();d!==r&&delete n[r],n[d]=$n(o),c[d]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return g.forEach(this,(c,o)=>{c!=null&&c!==!1&&(n[o]=t&&g.isArray(c)?c.join(", "):c)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const c=new this(t);return n.forEach(o=>c.set(o)),c}static accessor(t){const c=(this[jI]=this[jI]={accessors:{}}).accessors,o=this.prototype;function r(i){const d=nn(i);c[d]||(PP(o,i),c[d]=!0)}return g.isArray(t)?t.forEach(r):r(t),this}};De.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);g.reduceDescriptors(De.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(c){this[n]=c}}});g.freezeMethods(De);function _L(e,t){const n=this||Pn,c=t||n,o=De.from(c.headers);let r=c.data;return g.forEach(e,function(d){r=d.call(n,r,o.normalize(),t?t.status:void 0)}),o.normalize(),r}function VS(e){return!!(e&&e.__CANCEL__)}function J0(e,t,n){G.call(this,e??"canceled",G.ERR_CANCELED,t,n),this.name="CanceledError"}g.inherits(J0,G,{__CANCEL__:!0});function RS(e,t,n){const c=n.config.validateStatus;!n.status||!c||c(n.status)?e(n):t(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function jP(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function VP(e,t){e=e||10;const n=new Array(e),c=new Array(e);let o=0,r=0,i;return t=t!==void 0?t:1e3,function(h){const s=Date.now(),l=c[r];i||(i=s),n[o]=h,c[o]=s;let y=r,u=0;for(;y!==o;)u+=n[y++],y=y%e;if(o=(o+1)%e,o===r&&(r=(r+1)%e),s-i<t)return;const f=l&&s-l;return f?Math.round(u*1e3/f):void 0}}function RP(e,t){let n=0,c=1e3/t,o,r;const i=(s,l=Date.now())=>{n=l,o=null,r&&(clearTimeout(r),r=null),e.apply(null,s)};return[(...s)=>{const l=Date.now(),y=l-n;y>=c?i(s,l):(o=s,r||(r=setTimeout(()=>{r=null,i(o)},c-y)))},()=>o&&i(o)]}const Kw=(e,t,n=3)=>{let c=0;const o=VP(50,250);return RP(r=>{const i=r.loaded,d=r.lengthComputable?r.total:void 0,h=i-c,s=o(h),l=i<=d;c=i;const y={loaded:i,total:d,progress:d?i/d:void 0,bytes:h,rate:s||void 0,estimated:s&&d&&l?(d-i)/s:void 0,event:r,lengthComputable:d!=null,[t?"download":"upload"]:!0};e(y)},n)},VI=(e,t)=>{const n=e!=null;return[c=>t[0]({lengthComputable:n,total:e,loaded:c}),t[1]]},RI=e=>(...t)=>g.asap(()=>e(...t)),_P=Ie.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ie.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ie.origin),Ie.navigator&&/(msie|trident)/i.test(Ie.navigator.userAgent)):()=>!0,DP=Ie.hasStandardBrowserEnv?{write(e,t,n,c,o,r){const i=[e+"="+encodeURIComponent(t)];g.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),g.isString(c)&&i.push("path="+c),g.isString(o)&&i.push("domain="+o),r===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function TP(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function FP(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function _S(e,t,n){let c=!TP(t);return e&&(c||n==!1)?FP(e,t):t}const _I=e=>e instanceof De?{...e}:e;function z0(e,t){t=t||{};const n={};function c(s,l,y,u){return g.isPlainObject(s)&&g.isPlainObject(l)?g.merge.call({caseless:u},s,l):g.isPlainObject(l)?g.merge({},l):g.isArray(l)?l.slice():l}function o(s,l,y,u){if(g.isUndefined(l)){if(!g.isUndefined(s))return c(void 0,s,y,u)}else return c(s,l,y,u)}function r(s,l){if(!g.isUndefined(l))return c(void 0,l)}function i(s,l){if(g.isUndefined(l)){if(!g.isUndefined(s))return c(void 0,s)}else return c(void 0,l)}function d(s,l,y){if(y in t)return c(s,l);if(y in e)return c(void 0,s)}const h={url:r,method:r,data:r,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:d,headers:(s,l,y)=>o(_I(s),_I(l),y,!0)};return g.forEach(Object.keys(Object.assign({},e,t)),function(l){const y=h[l]||o,u=y(e[l],t[l],l);g.isUndefined(u)&&y!==d||(n[l]=u)}),n}const DS=e=>{const t=z0({},e);let{data:n,withXSRFToken:c,xsrfHeaderName:o,xsrfCookieName:r,headers:i,auth:d}=t;t.headers=i=De.from(i),t.url=HS(_S(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),d&&i.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let h;if(g.isFormData(n)){if(Ie.hasStandardBrowserEnv||Ie.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((h=i.getContentType())!==!1){const[s,...l]=h?h.split(";").map(y=>y.trim()).filter(Boolean):[];i.setContentType([s||"multipart/form-data",...l].join("; "))}}if(Ie.hasStandardBrowserEnv&&(c&&g.isFunction(c)&&(c=c(t)),c||c!==!1&&_P(t.url))){const s=o&&r&&DP.read(r);s&&i.set(o,s)}return t},BP=typeof XMLHttpRequest<"u",OP=BP&&function(e){return new Promise(function(n,c){const o=DS(e);let r=o.data;const i=De.from(o.headers).normalize();let{responseType:d,onUploadProgress:h,onDownloadProgress:s}=o,l,y,u,f,v;function x(){f&&f(),v&&v(),o.cancelToken&&o.cancelToken.unsubscribe(l),o.signal&&o.signal.removeEventListener("abort",l)}let I=new XMLHttpRequest;I.open(o.method.toUpperCase(),o.url,!0),I.timeout=o.timeout;function H(){if(!I)return;const j=De.from("getAllResponseHeaders"in I&&I.getAllResponseHeaders()),E={data:!d||d==="text"||d==="json"?I.responseText:I.response,status:I.status,statusText:I.statusText,headers:j,config:e,request:I};RS(function(Q){n(Q),x()},function(Q){c(Q),x()},E),I=null}"onloadend"in I?I.onloadend=H:I.onreadystatechange=function(){!I||I.readyState!==4||I.status===0&&!(I.responseURL&&I.responseURL.indexOf("file:")===0)||setTimeout(H)},I.onabort=function(){I&&(c(new G("Request aborted",G.ECONNABORTED,e,I)),I=null)},I.onerror=function(){c(new G("Network Error",G.ERR_NETWORK,e,I)),I=null},I.ontimeout=function(){let D=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const E=o.transitional||PS;o.timeoutErrorMessage&&(D=o.timeoutErrorMessage),c(new G(D,E.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,I)),I=null},r===void 0&&i.setContentType(null),"setRequestHeader"in I&&g.forEach(i.toJSON(),function(D,E){I.setRequestHeader(E,D)}),g.isUndefined(o.withCredentials)||(I.withCredentials=!!o.withCredentials),d&&d!=="json"&&(I.responseType=o.responseType),s&&([u,v]=Kw(s,!0),I.addEventListener("progress",u)),h&&I.upload&&([y,f]=Kw(h),I.upload.addEventListener("progress",y),I.upload.addEventListener("loadend",f)),(o.cancelToken||o.signal)&&(l=j=>{I&&(c(!j||j.type?new J0(null,e,I):j),I.abort(),I=null)},o.cancelToken&&o.cancelToken.subscribe(l),o.signal&&(o.signal.aborted?l():o.signal.addEventListener("abort",l)));const z=jP(o.url);if(z&&Ie.protocols.indexOf(z)===-1){c(new G("Unsupported protocol "+z+":",G.ERR_BAD_REQUEST,e));return}I.send(r||null)})},EP=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let c=new AbortController,o;const r=function(s){if(!o){o=!0,d();const l=s instanceof Error?s:this.reason;c.abort(l instanceof G?l:new J0(l instanceof Error?l.message:l))}};let i=t&&setTimeout(()=>{i=null,r(new G(`timeout ${t} of ms exceeded`,G.ETIMEDOUT))},t);const d=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(s=>{s.unsubscribe?s.unsubscribe(r):s.removeEventListener("abort",r)}),e=null)};e.forEach(s=>s.addEventListener("abort",r));const{signal:h}=c;return h.unsubscribe=()=>g.asap(d),h}},UP=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let c=0,o;for(;c<n;)o=c+t,yield e.slice(c,o),c=o},NP=async function*(e,t){for await(const n of ZP(e))yield*UP(n,t)},ZP=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:c}=await t.read();if(n)break;yield c}}finally{await t.cancel()}},DI=(e,t,n,c)=>{const o=NP(e,t);let r=0,i,d=h=>{i||(i=!0,c&&c(h))};return new ReadableStream({async pull(h){try{const{done:s,value:l}=await o.next();if(s){d(),h.close();return}let y=l.byteLength;if(n){let u=r+=y;n(u)}h.enqueue(new Uint8Array(l))}catch(s){throw d(s),s}},cancel(h){return d(h),o.return()}},{highWaterMark:2})},gL=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",TS=gL&&typeof ReadableStream=="function",$P=gL&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),FS=(e,...t)=>{try{return!!e(...t)}catch{return!1}},GP=TS&&FS(()=>{let e=!1;const t=new Request(Ie.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),TI=64*1024,ab=TS&&FS(()=>g.isReadableStream(new Response("").body)),Xw={stream:ab&&(e=>e.body)};gL&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Xw[t]&&(Xw[t]=g.isFunction(e[t])?n=>n[t]():(n,c)=>{throw new G(`Response type '${t}' is not supported`,G.ERR_NOT_SUPPORT,c)})})})(new Response);const WP=async e=>{if(e==null)return 0;if(g.isBlob(e))return e.size;if(g.isSpecCompliantForm(e))return(await new Request(Ie.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(g.isArrayBufferView(e)||g.isArrayBuffer(e))return e.byteLength;if(g.isURLSearchParams(e)&&(e=e+""),g.isString(e))return(await $P(e)).byteLength},KP=async(e,t)=>{const n=g.toFiniteNumber(e.getContentLength());return n??WP(t)},XP=gL&&(async e=>{let{url:t,method:n,data:c,signal:o,cancelToken:r,timeout:i,onDownloadProgress:d,onUploadProgress:h,responseType:s,headers:l,withCredentials:y="same-origin",fetchOptions:u}=DS(e);s=s?(s+"").toLowerCase():"text";let f=EP([o,r&&r.toAbortSignal()],i),v;const x=f&&f.unsubscribe&&(()=>{f.unsubscribe()});let I;try{if(h&&GP&&n!=="get"&&n!=="head"&&(I=await KP(l,c))!==0){let E=new Request(t,{method:"POST",body:c,duplex:"half"}),ie;if(g.isFormData(c)&&(ie=E.headers.get("content-type"))&&l.setContentType(ie),E.body){const[Q,W]=VI(I,Kw(RI(h)));c=DI(E.body,TI,Q,W)}}g.isString(y)||(y=y?"include":"omit");const H="credentials"in Request.prototype;v=new Request(t,{...u,signal:f,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:c,duplex:"half",credentials:H?y:void 0});let z=await fetch(v);const j=ab&&(s==="stream"||s==="response");if(ab&&(d||j&&x)){const E={};["status","statusText","headers"].forEach(X=>{E[X]=z[X]});const ie=g.toFiniteNumber(z.headers.get("content-length")),[Q,W]=d&&VI(ie,Kw(RI(d),!0))||[];z=new Response(DI(z.body,TI,Q,()=>{W&&W(),x&&x()}),E)}s=s||"text";let D=await Xw[g.findKey(Xw,s)||"text"](z,e);return!j&&x&&x(),await new Promise((E,ie)=>{RS(E,ie,{data:D,headers:De.from(z.headers),status:z.status,statusText:z.statusText,config:e,request:v})})}catch(H){throw x&&x(),H&&H.name==="TypeError"&&/Load failed|fetch/i.test(H.message)?Object.assign(new G("Network Error",G.ERR_NETWORK,e,v),{cause:H.cause||H}):G.from(H,H&&H.code,e,v)}}),nb={http:lP,xhr:OP,fetch:XP};g.forEach(nb,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const FI=e=>`- ${e}`,JP=e=>g.isFunction(e)||e===null||e===!1,BS={getAdapter:e=>{e=g.isArray(e)?e:[e];const{length:t}=e;let n,c;const o={};for(let r=0;r<t;r++){n=e[r];let i;if(c=n,!JP(n)&&(c=nb[(i=String(n)).toLowerCase()],c===void 0))throw new G(`Unknown adapter '${i}'`);if(c)break;o[i||"#"+r]=c}if(!c){const r=Object.entries(o).map(([d,h])=>`adapter ${d} `+(h===!1?"is not supported by the environment":"is not available in the build"));let i=t?r.length>1?`since :
`+r.map(FI).join(`
`):" "+FI(r[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return c},adapters:nb};function DL(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new J0(null,e)}function BI(e){return DL(e),e.headers=De.from(e.headers),e.data=_L.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),BS.getAdapter(e.adapter||Pn.adapter)(e).then(function(c){return DL(e),c.data=_L.call(e,e.transformResponse,c),c.headers=De.from(c.headers),c},function(c){return VS(c)||(DL(e),c&&c.response&&(c.response.data=_L.call(e,e.transformResponse,c.response),c.response.headers=De.from(c.response.headers))),Promise.reject(c)})}const OS="1.9.0",vL={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{vL[e]=function(c){return typeof c===e||"a"+(t<1?"n ":" ")+e}});const OI={};vL.transitional=function(t,n,c){function o(r,i){return"[Axios v"+OS+"] Transitional option '"+r+"'"+i+(c?". "+c:"")}return(r,i,d)=>{if(t===!1)throw new G(o(i," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!OI[i]&&(OI[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(r,i,d):!0}};vL.spelling=function(t){return(n,c)=>(console.warn(`${c} is likely a misspelling of ${t}`),!0)};function QP(e,t,n){if(typeof e!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const c=Object.keys(e);let o=c.length;for(;o-- >0;){const r=c[o],i=t[r];if(i){const d=e[r],h=d===void 0||i(d,r,e);if(h!==!0)throw new G("option "+r+" must be "+h,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+r,G.ERR_BAD_OPTION)}}const Gn={assertOptions:QP,validators:vL},h1=Gn.validators;let A0=class{constructor(t){this.defaults=t||{},this.interceptors={request:new PI,response:new PI}}async request(t,n){try{return await this._request(t,n)}catch(c){if(c instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const r=o.stack?o.stack.replace(/^.+\n/,""):"";try{c.stack?r&&!String(c.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(c.stack+=`
`+r):c.stack=r}catch{}}throw c}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=z0(this.defaults,n);const{transitional:c,paramsSerializer:o,headers:r}=n;c!==void 0&&Gn.assertOptions(c,{silentJSONParsing:h1.transitional(h1.boolean),forcedJSONParsing:h1.transitional(h1.boolean),clarifyTimeoutError:h1.transitional(h1.boolean)},!1),o!=null&&(g.isFunction(o)?n.paramsSerializer={serialize:o}:Gn.assertOptions(o,{encode:h1.function,serialize:h1.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Gn.assertOptions(n,{baseUrl:h1.spelling("baseURL"),withXsrfToken:h1.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=r&&g.merge(r.common,r[n.method]);r&&g.forEach(["delete","get","head","post","put","patch","common"],v=>{delete r[v]}),n.headers=De.concat(i,r);const d=[];let h=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(h=h&&x.synchronous,d.unshift(x.fulfilled,x.rejected))});const s=[];this.interceptors.response.forEach(function(x){s.push(x.fulfilled,x.rejected)});let l,y=0,u;if(!h){const v=[BI.bind(this),void 0];for(v.unshift.apply(v,d),v.push.apply(v,s),u=v.length,l=Promise.resolve(n);y<u;)l=l.then(v[y++],v[y++]);return l}u=d.length;let f=n;for(y=0;y<u;){const v=d[y++],x=d[y++];try{f=v(f)}catch(I){x.call(this,I);break}}try{l=BI.call(this,f)}catch(v){return Promise.reject(v)}for(y=0,u=s.length;y<u;)l=l.then(s[y++],s[y++]);return l}getUri(t){t=z0(this.defaults,t);const n=_S(t.baseURL,t.url,t.allowAbsoluteUrls);return HS(n,t.params,t.paramsSerializer)}};g.forEach(["delete","get","head","options"],function(t){A0.prototype[t]=function(n,c){return this.request(z0(c||{},{method:t,url:n,data:(c||{}).data}))}});g.forEach(["post","put","patch"],function(t){function n(c){return function(r,i,d){return this.request(z0(d||{},{method:t,headers:c?{"Content-Type":"multipart/form-data"}:{},url:r,data:i}))}}A0.prototype[t]=n(),A0.prototype[t+"Form"]=n(!0)});let YP=class ES{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const c=this;this.promise.then(o=>{if(!c._listeners)return;let r=c._listeners.length;for(;r-- >0;)c._listeners[r](o);c._listeners=null}),this.promise.then=o=>{let r;const i=new Promise(d=>{c.subscribe(d),r=d}).then(o);return i.cancel=function(){c.unsubscribe(r)},i},t(function(r,i,d){c.reason||(c.reason=new J0(r,i,d),n(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=c=>{t.abort(c)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new ES(function(o){t=o}),cancel:t}}};function ej(e){return function(n){return e.apply(null,n)}}function tj(e){return g.isObject(e)&&e.isAxiosError===!0}const cb={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(cb).forEach(([e,t])=>{cb[t]=e});function US(e){const t=new A0(e),n=gS(A0.prototype.request,t);return g.extend(n,A0.prototype,t,{allOwnKeys:!0}),g.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return US(z0(e,o))},n}const me=US(Pn);me.Axios=A0;me.CanceledError=J0;me.CancelToken=YP;me.isCancel=VS;me.VERSION=OS;me.toFormData=mL;me.AxiosError=G;me.Cancel=me.CanceledError;me.all=function(t){return Promise.all(t)};me.spread=ej;me.isAxiosError=tj;me.mergeConfig=z0;me.AxiosHeaders=De;me.formToJSON=e=>jS(g.isHTMLForm(e)?new FormData(e):e);me.getAdapter=BS.getAdapter;me.HttpStatusCode=cb;me.default=me;const{Axios:BR,AxiosError:OR,CanceledError:ER,isCancel:UR,CancelToken:NR,VERSION:ZR,all:$R,Cancel:GR,isAxiosError:WR,spread:KR,toFormData:XR,AxiosHeaders:JR,HttpStatusCode:QR,formToJSON:YR,getAdapter:e_,mergeConfig:t_}=me,t1=Mz("auth",{state:()=>({user:{id:0,username:"",role:"",authorities:[],email:"",customerId:null,firstname:"",lastname:"",address:""}}),getters:{isAuthenticated:e=>!!e.user,isAdmin:e=>{var t;return((t=e.user)==null?void 0:t.role)==="ADMIN"},isUser:e=>{var t;return((t=e.user)==null?void 0:t.role)==="USER"}},actions:{async initialize(){try{const e=await Ce.get("/auth/me");this.user=e.data}catch{this.user=null}},logout(){this.user=null}}}),aj="/",Ce=me.create({baseURL:aj+"/api",withCredentials:!0});let TL=!1;Ce.interceptors.response.use(e=>e,async e=>{var c,o,r;const t=(o=(c=e==null?void 0:e.response)==null?void 0:c.data)==null?void 0:o.error,n=window.location.pathname;if(((r=e.response)==null?void 0:r.status)===401&&!TL){TL=!0;const i=t1();alert(t==="Token expired"?"Sesi Anda telah habis. Silakan login ulang.":"Anda tidak diizinkan. Silakan login."),i.logout(),n.startsWith("/login")||await zb.push({name:"Login"}),setTimeout(()=>{TL=!1},1e3)}return Promise.reject(e)});const nj={class:"flex flex-col items-center justify-center min-h-screen"},cj={class:"w-full max-w-lg p-8 bg-white rounded shadow-md"},oj={class:"mb-4"},rj={class:"mb-4"},ij={key:0,class:"mb-2 text-sm text-red-500"},dj={class:"block text-center mt-4"},hj={__name:"Login",setup(e){const t=Y(""),n=Y(""),c=Y(""),o=K0(),r=t1(),i=async()=>{var d;c.value="";try{await Ce.post("/auth/login",{username:t.value,password:n.value});const h=await Ce.get("/auth/me");r.user=h.data,o.push({name:"Home"})}catch(h){c.value=((d=h.response)==null?void 0:d.data)||"Login failed",console.log(" error ",c.value)}};return(d,h)=>{const s=Xe("router-link");return _(),F("div",nj,[M("div",cj,[h[7]||(h[7]=M("h2",{class:"mb-4 text-2xl font-semibold text-center"},"Login",-1)),M("form",{onSubmit:bb(i,["prevent"])},[M("div",oj,[h[2]||(h[2]=M("label",{class:"block mb-1 text-sm font-medium"},"Username",-1)),ke(M("input",{"onUpdate:modelValue":h[0]||(h[0]=l=>t.value=l),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[ge,t.value]])]),M("div",rj,[h[3]||(h[3]=M("label",{class:"block mb-1 text-sm font-medium"},"Password",-1)),ke(M("input",{"onUpdate:modelValue":h[1]||(h[1]=l=>n.value=l),type:"password",class:"w-full p-2 border rounded",required:""},null,512),[[ge,n.value]])]),c.value?(_(),F("div",ij,J(c.value),1)):f1("",!0),h[6]||(h[6]=M("button",{type:"submit",class:"w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"}," Login ",-1)),M("span",dj,[h[5]||(h[5]=Je(" atau ")),re(s,{to:"/register",class:"text-blue-600 hover:underline"},{default:Ye(()=>h[4]||(h[4]=[Je("Registrasi")])),_:1,__:[4]})])],32)])])}}};/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sj=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,c)=>c?c.toUpperCase():n.toLowerCase()),lj=e=>{const t=sj(e);return t.charAt(0).toUpperCase()+t.slice(1)},yj=(...e)=>e.filter((t,n,c)=>!!t&&t.trim()!==""&&c.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:c,iconNode:o,name:r,class:i,...d},{slots:h})=>Ln("svg",{...Tn,width:e||Tn.width,height:e||Tn.height,stroke:c||Tn.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:yj("lucide",...r?[`lucide-${EI(lj(r))}-icon`,`lucide-${EI(r)}`]:["lucide-icon"]),...d},[...o.map(s=>Ln(...s)),...h.default?[h.default()]:[]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=(e,t)=>(n,{slots:c})=>Ln(NS,{...n,iconNode:t,name:e},c);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=a("a-arrow-down",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=a("a-arrow-up",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=a("a-large-small",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=a("accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=a("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=a("air-vent",[["path",{d:"M18 17.5a2.5 2.5 0 1 1-4 2.03V12",key:"yd12zl"}],["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M6.6 15.572A2 2 0 1 0 10 17v-5",key:"1x1kqn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=a("airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=a("alarm-clock-check",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=a("alarm-clock-minus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=a("alarm-clock-off",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=a("alarm-clock-plus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=a("alarm-clock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=a("alarm-smoke",[["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",key:"1bvca4"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",key:"x3qr1j"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=a("album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=a("align-center-horizontal",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=a("align-center-vertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=a("align-center",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=a("align-end-horizontal",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=a("align-end-vertical",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=a("align-horizontal-distribute-center",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=a("align-horizontal-distribute-end",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=a("align-horizontal-distribute-start",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=a("align-horizontal-justify-end",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=a("align-horizontal-justify-center",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=a("align-horizontal-justify-start",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=a("align-horizontal-space-around",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=a("align-horizontal-space-between",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=a("align-justify",[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=a("align-left",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=a("align-start-horizontal",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=a("align-start-vertical",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=a("align-vertical-distribute-center",[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=a("align-right",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=a("align-vertical-distribute-end",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=a("align-vertical-distribute-start",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=a("align-vertical-justify-center",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=a("align-vertical-justify-end",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=a("align-vertical-justify-start",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=a("align-vertical-space-around",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=a("align-vertical-space-between",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=a("ambulance",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=a("ampersand",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=a("ampersands",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=a("anchor",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=a("amphora",[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",key:"1h8rid"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68",key:"3ezsi6"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",key:"yt6q09"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68",key:"8f95yk"}],["path",{d:"M18 22H6",key:"mg6kv4"}],["path",{d:"M9 2h6",key:"1jrp98"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=a("angry",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=a("antenna",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=a("annoyed",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=a("anvil",[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=a("aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=a("app-window-mac",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M14 8h.01",key:"1primd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=a("app-window",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=a("apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=a("archive-restore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=a("archive-x",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=a("archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=a("armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=a("arrow-big-down",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=a("arrow-big-down-dash",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=a("arrow-big-left-dash",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=a("arrow-big-left",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=a("arrow-big-right-dash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=a("arrow-big-right",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=a("arrow-big-up-dash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=a("arrow-big-up",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=a("arrow-down-0-1",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=a("arrow-down-1-0",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=a("arrow-down-a-z",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=a("arrow-down-from-line",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=a("arrow-down-left",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=a("arrow-down-narrow-wide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=a("arrow-down-right",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=a("arrow-down-to-dot",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=a("arrow-down-to-line",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=a("arrow-down-up",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=a("arrow-down-wide-narrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=a("arrow-down-z-a",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=a("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=a("arrow-left-from-line",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=a("arrow-left-right",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=a("arrow-left-to-line",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=a("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=a("arrow-right-left",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=a("arrow-right-from-line",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=a("arrow-right-to-line",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=a("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=a("arrow-up-0-1",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=a("arrow-up-1-0",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=a("arrow-up-a-z",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=a("arrow-up-down",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=a("arrow-up-from-dot",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=a("arrow-up-from-line",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=a("arrow-up-left",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=a("arrow-up-narrow-wide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=a("arrow-up-to-line",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=a("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=a("arrow-up-wide-narrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=a("arrow-up-z-a",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=a("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=a("arrows-up-from-line",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=a("asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=a("at-sign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=a("atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=a("audio-lines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=a("audio-waveform",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=a("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=a("axe",[["path",{d:"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9",key:"5z9253"}],["path",{d:"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z",key:"19zklq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=a("axis-3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=a("backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=a("badge-alert",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=a("baby",[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=a("badge-cent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=a("badge-check",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=a("badge-dollar-sign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=a("badge-euro",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=a("badge-help",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=a("badge-info",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=a("badge-indian-rupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=a("badge-japanese-yen",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=a("badge-minus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=a("badge-percent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=a("badge-plus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=a("badge-pound-sterling",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=a("badge-russian-ruble",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=a("badge-swiss-franc",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=a("badge-x",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=a("badge",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=a("baggage-claim",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=a("ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=a("banana",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=a("bandage",[["path",{d:"M10 10.01h.01",key:"1e9xi7"}],["path",{d:"M10 14.01h.01",key:"ac23bv"}],["path",{d:"M14 10.01h.01",key:"2wfrvf"}],["path",{d:"M14 14.01h.01",key:"8tw8yn"}],["path",{d:"M18 6v11.5",key:"dkbidh"}],["path",{d:"M6 6v12",key:"vkc79e"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2",key:"1wpnh2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=a("banknote-arrow-down",[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",key:"x6cv4u"}],["path",{d:"m16 19 3 3 3-3",key:"1ibux0"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M6 12h.01",key:"c2rlol"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=a("banknote-arrow-up",[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",key:"x6cv4u"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M19 22v-6",key:"qhmiwi"}],["path",{d:"m22 19-3-3-3 3",key:"rn6bg2"}],["path",{d:"M6 12h.01",key:"c2rlol"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=a("banknote-x",[["path",{d:"M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",key:"16nib6"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}],["path",{d:"M6 12h.01",key:"c2rlol"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=a("banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=a("barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=a("baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=a("bath",[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=a("battery-charging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=a("battery-full",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=a("battery-low",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=a("battery-medium",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=a("battery-plus",[["path",{d:"M10 9v6",key:"17i7lo"}],["path",{d:"M13.5 7H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5",key:"jzl4pj"}],["path",{d:"M22 11v2",key:"1wo06k"}],["path",{d:"M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5",key:"1ar5vp"}],["path",{d:"M7 12h6",key:"iekk3h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=a("battery-warning",[["path",{d:"M10 17h.01",key:"nbq80n"}],["path",{d:"M10 7v6",key:"nne03l"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1x5o8m"}],["path",{d:"M22 11v2",key:"1wo06k"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"1mdjgh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=a("battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=a("beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=a("bean-off",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=a("bean",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=a("bed-double",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=a("bed-single",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=a("beef",[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3",key:"cisjcv"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"5byaag"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=a("bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=a("beer-off",[["path",{d:"M13 13v5",key:"igwfh0"}],["path",{d:"M17 11.47V8",key:"16yw0g"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211",key:"1xbt65"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",key:"c55o3e"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",key:"1ydug7"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",key:"q81o7q"}],["path",{d:"M9 14.6V18",key:"20ek98"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=a("beer",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=a("bell-dot",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665",key:"1tip0g"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=a("bell-electric",[["path",{d:"M18.518 17.347A7 7 0 0 1 14 19",key:"1emhpo"}],["path",{d:"M18.8 4A11 11 0 0 1 20 9",key:"127b67"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{x:"4",y:"16",width:"10",height:"6",rx:"2",key:"bfnviv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=a("bell-minus",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12",key:"bdwj86"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=a("bell-off",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=a("bell-plus",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332",key:"1abcvy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=a("bell-ring",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=a("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=a("between-horizontal-end",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=a("between-horizontal-start",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=a("between-vertical-end",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=a("between-vertical-start",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=a("biceps-flexed",[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",key:"1pmlyh"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2",key:"5rb254"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15",key:"kbvsx9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=a("bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=a("binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=a("binoculars",[["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",key:"3apit1"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",key:"rhpgnw"}],["path",{d:"M 22 16 L 2 16",key:"14lkq7"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",key:"104b3k"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3",key:"14fczp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=a("biohazard",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=a("bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=a("bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=a("blend",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=a("blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=a("blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=a("bluetooth-connected",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=a("bluetooth-off",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=a("bluetooth-searching",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=a("bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=a("bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=a("bolt",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=a("bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=a("bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=a("book-a",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=a("book-audio",[["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 8v3",key:"1qzp49"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=a("book-check",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=a("book-copy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12",key:"1wz07i"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=a("book-dashed",[["path",{d:"M12 17h1.5",key:"1gkc67"}],["path",{d:"M12 22h1.5",key:"1my7sn"}],["path",{d:"M12 2h1.5",key:"19tvb7"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1",key:"10akbh"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5",key:"1vrfjs"}],["path",{d:"M20 14v3h-2.5",key:"1naeju"}],["path",{d:"M20 8.5V10",key:"1ctpfu"}],["path",{d:"M4 10V8.5",key:"1o3zg5"}],["path",{d:"M4 19.5V14",key:"ob81pf"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8",key:"s8vcyb"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8",key:"1cu73q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=a("book-down",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=a("book-heart",[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7",key:"1t75a8"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=a("book-headphones",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=a("book-image",[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17",key:"q6ojf0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=a("book-key",[["path",{d:"m19 3 1 1",key:"ze14oc"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1xzogz"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844",key:"vtdg6h"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=a("book-lock",[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1rkj32"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1",key:"73l30o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=a("book-marked",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=a("book-minus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=a("book-open-check",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=a("book-open-text",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=a("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=a("book-plus",[["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=a("book-text",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=a("book-type",[["path",{d:"M10 13h4",key:"ytezjc"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=a("book-up-2",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"161d7n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=a("book-up",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=a("book-user",[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=a("book-x",[["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=a("book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=a("bookmark-check",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=a("bookmark-minus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=a("bookmark-plus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=a("bookmark-x",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=a("bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=a("boom-box",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=a("bot-message-square",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=a("bot-off",[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33",key:"7az073"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",key:"s09a7a"}],["path",{d:"M9 13v2",key:"rq6x2g"}],["path",{d:"M9.67 4H12v2.33",key:"110xot"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=a("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=a("bow-arrow",[["path",{d:"M17 3h4v4",key:"19p9u1"}],["path",{d:"M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17",key:"12t3w9"}],["path",{d:"M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05",key:"ogng5l"}],["path",{d:"M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z",key:"8v3fy2"}],["path",{d:"M9.707 14.293 21 3",key:"ydm3bn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=a("box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=a("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=a("braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=a("brackets",[["path",{d:"M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3",key:"1kt8lf"}],["path",{d:"M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3",key:"gduv9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=a("brain-circuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=a("brain-cog",[["path",{d:"m10.852 14.772-.383.923",key:"11vil6"}],["path",{d:"m10.852 9.228-.383-.923",key:"1fjppe"}],["path",{d:"m13.148 14.772.382.924",key:"je3va1"}],["path",{d:"m13.531 8.305-.383.923",key:"18epck"}],["path",{d:"m14.772 10.852.923-.383",key:"k9m8cz"}],["path",{d:"m14.772 13.148.923.383",key:"1xvhww"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771",key:"jcbbz1"}],["path",{d:"M17.998 5.125a4 4 0 0 1 2.525 5.771",key:"1kkn7e"}],["path",{d:"M19.505 10.294a4 4 0 0 1-1.5 7.706",key:"18bmuc"}],["path",{d:"M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516",key:"uozx0d"}],["path",{d:"M4.5 10.291A4 4 0 0 0 6 18",key:"whdemb"}],["path",{d:"M6.002 5.125a3 3 0 0 0 .4 1.375",key:"1kqy2g"}],["path",{d:"m9.228 10.852-.923-.383",key:"1wtb30"}],["path",{d:"m9.228 13.148-.923.383",key:"1a830x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=a("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=a("brick-wall-fire",[["path",{d:"M16 3v2.107",key:"gq8xun"}],["path",{d:"M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9",key:"1l2pih"}],["path",{d:"M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938",key:"jrnqjp"}],["path",{d:"M3 15h5.253",key:"xqg7rb"}],["path",{d:"M3 9h8.228",key:"1ppb70"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=a("brick-wall",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=a("briefcase-business",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=a("briefcase-conveyor-belt",[["path",{d:"M10 20v2",key:"1n8e1g"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M18 20v2",key:"10uadw"}],["path",{d:"M21 20H3",key:"kdqkdp"}],["path",{d:"M6 20v2",key:"a9bc87"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12",key:"17n9tx"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2",key:"1097i5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=a("briefcase-medical",[["path",{d:"M12 11v4",key:"a6ujw6"}],["path",{d:"M14 13h-4",key:"1pl8zg"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M18 6v14",key:"1mu4gy"}],["path",{d:"M6 6v14",key:"1s15cj"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=a("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=a("bring-to-front",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=a("brush-cleaning",[["path",{d:"m16 22-1-4",key:"1ow2iv"}],["path",{d:"M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1",key:"iw8jdu"}],["path",{d:"M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z",key:"1soew8"}],["path",{d:"m8 22 1-4",key:"s3unb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=a("brush",[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=a("bubbles",[["path",{d:"M7.2 14.8a2 2 0 0 1 2 2",key:"1tw9gg"}],["circle",{cx:"18.5",cy:"8.5",r:"3.5",key:"1wadoa"}],["circle",{cx:"7.5",cy:"16.5",r:"5.5",key:"6mdt3g"}],["circle",{cx:"7.5",cy:"4.5",r:"2.5",key:"637s54"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=a("bug-off",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=a("bug-play",[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"17shqo"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=a("bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=a("building-2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=a("building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=a("bus-front",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=a("bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=a("cable-car",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=a("cable",[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=a("cake-slice",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=a("cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=a("calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=a("calendar-1",[["path",{d:"M11 14h1v4",key:"fy54vd"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=a("calendar-arrow-down",[["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 14v8",key:"irew45"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343",key:"bse4f3"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=a("calendar-arrow-up",[["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 22v-8",key:"su0gjh"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9",key:"1exg90"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=a("calendar-check-2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=a("calendar-check",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=a("calendar-clock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=a("calendar-cog",[["path",{d:"m15.228 16.852-.923-.383",key:"npixar"}],["path",{d:"m15.228 19.148-.923.383",key:"51cr3n"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m16.47 14.305.382.923",key:"obybxd"}],["path",{d:"m16.852 20.772-.383.924",key:"dpfhf9"}],["path",{d:"m19.148 15.228.383-.923",key:"1reyyz"}],["path",{d:"m19.53 21.696-.382-.924",key:"1goivc"}],["path",{d:"m20.772 16.852.924-.383",key:"htqkph"}],["path",{d:"m20.772 19.148.924.383",key:"9w9pjp"}],["path",{d:"M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"1dju0s"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=a("calendar-days",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=a("calendar-fold",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=a("calendar-heart",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=a("calendar-minus-2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=a("calendar-minus",[["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",key:"1scpom"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=a("calendar-off",[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=a("calendar-plus-2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=a("calendar-plus",[["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",key:"1glfrc"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=a("calendar-range",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=a("calendar-search",[["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25",key:"1jrsq6"}],["path",{d:"m22 22-1.875-1.875",key:"13zax7"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=a("calendar-sync",[["path",{d:"M11 10v4h4",key:"172dkj"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"vu0qm5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"1qgeyt"}],["path",{d:"M21 22v-4h-4",key:"hrummi"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3",key:"mctw84"}],["path",{d:"M3 10h4",key:"1el30a"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=a("calendar-x-2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=a("calendar-x",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=a("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=a("camera-off",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=a("camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=a("candy-cane",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=a("candy-off",[["path",{d:"M10 10v7.9",key:"m8g9tt"}],["path",{d:"M11.802 6.145a5 5 0 0 1 6.053 6.053",key:"dn87i3"}],["path",{d:"M14 6.1v2.243",key:"1kzysn"}],["path",{d:"m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965",key:"3sxy18"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",key:"gpb6xx"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",key:"qexcha"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=a("candy",[["path",{d:"M10 7v10.9",key:"1gynux"}],["path",{d:"M14 6.1V17",key:"116kdf"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",key:"gpb6xx"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07",key:"1tsln4"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",key:"qexcha"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=a("cannabis",[["path",{d:"M12 22v-4",key:"1utk9m"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",key:"1mezod"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=a("captions-off",[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=a("captions",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=a("car-front",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=a("car-taxi-front",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=a("car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=a("caravan",[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",key:"13hakp"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",key:"1crci8"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=a("carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=a("case-lower",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=a("case-sensitive",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=a("case-upper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=a("cassette-tape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=a("cast",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=a("castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4",key:"1k4jtn"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=a("cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=a("cctv",[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",key:"ir91b5"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",key:"jlp8i1"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}],["path",{d:"M7 9h.01",key:"19b3jx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=a("chart-area",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",key:"q0gr47"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=a("chart-bar-big",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=a("chart-bar-decreasing",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h3",key:"ur6vzw"}],["path",{d:"M7 6h12",key:"sz5b0d"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=a("chart-bar-increasing",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h12",key:"wsnu98"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=a("chart-bar-stacked",[["path",{d:"M11 13v4",key:"vyy2rb"}],["path",{d:"M15 5v4",key:"1gx88a"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=a("chart-bar",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=a("chart-candlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=a("chart-column-big",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=a("chart-column-decreasing",[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17v-3",key:"1sqioe"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17V5",key:"1wzmnc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=a("chart-column-increasing",[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=a("chart-column-stacked",[["path",{d:"M11 13H7",key:"t0o9gq"}],["path",{d:"M19 9h-4",key:"rera1j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=a("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=a("chart-gantt",[["path",{d:"M10 6h8",key:"zvc2xc"}],["path",{d:"M12 16h6",key:"yi5mkt"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 11h7",key:"wz2hg0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=a("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=a("chart-network",[["path",{d:"m13.11 7.664 1.78 2.672",key:"go2gg9"}],["path",{d:"m14.162 12.788-3.324 1.424",key:"11x848"}],["path",{d:"m20 4-6.06 1.515",key:"1wxxh7"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["circle",{cx:"12",cy:"6",r:"2",key:"1jj5th"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}],["circle",{cx:"9",cy:"15",r:"2",key:"lf2ghp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=a("chart-no-axes-column-decreasing",[["path",{d:"M12 20V10",key:"g8npz5"}],["path",{d:"M18 20v-4",key:"8uic4z"}],["path",{d:"M6 20V4",key:"1w1bmo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=a("chart-no-axes-column-increasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=a("chart-no-axes-column",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=a("chart-no-axes-combined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=a("chart-no-axes-gantt",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=a("chart-pie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=a("chart-scatter",[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=a("chart-spline",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7",key:"lw07rv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=a("check-check",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=a("check-line",[["path",{d:"M20 4L9 15",key:"1qkx8z"}],["path",{d:"M21 19L3 19",key:"100sma"}],["path",{d:"M9 15L4 10",key:"9zxff7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=a("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=a("chef-hat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=a("cherry",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=a("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=a("chevron-first",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=a("chevron-last",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=a("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=a("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=a("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=a("chevrons-down-up",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=a("chevrons-down",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=a("chevrons-left-right-ellipsis",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=a("chevrons-left-right",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=a("chevrons-left",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=a("chevrons-right-left",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=a("chevrons-right",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=a("chevrons-up-down",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=a("chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=a("chevrons-up",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=a("church",[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4",key:"1pdhuj"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",key:"1rkokr"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",key:"1w6esw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=a("cigarette-off",[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13",key:"1gdiyg"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866",key:"166zjj"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=a("cigarette",[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14",key:"1mb5g1"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"1yl5r7"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=a("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=a("circle-arrow-down",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=a("circle-arrow-left",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=a("circle-arrow-out-down-left",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=a("circle-arrow-out-down-right",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=a("circle-arrow-out-up-left",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=a("circle-arrow-out-up-right",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=a("circle-arrow-right",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=a("circle-arrow-up",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=a("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=a("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=a("circle-chevron-down",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=a("circle-chevron-left",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=a("circle-chevron-right",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=a("circle-chevron-up",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=a("circle-dashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=a("circle-divide",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=a("circle-dollar-sign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=a("circle-dot-dashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=a("circle-dot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=a("circle-ellipsis",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=a("circle-equal",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=a("circle-fading-arrow-up",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=a("circle-fading-plus",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=a("circle-gauge",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=a("circle-help",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=a("circle-minus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=a("circle-off",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=a("circle-parking-off",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=a("circle-parking",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=a("circle-pause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=a("circle-percent",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=a("circle-play",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=a("circle-plus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=a("circle-power",[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=a("circle-slash-2",[["path",{d:"M22 2 2 22",key:"y4kqgn"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=a("circle-slash",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=a("circle-small",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=a("circle-stop",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=a("circle-user-round",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=a("circle-user",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=a("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=a("circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=a("circuit-board",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=a("citrus",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=a("clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=a("clipboard-check",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=a("clipboard-copy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=a("clipboard-list",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=a("clipboard-minus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=a("clipboard-paste",[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=a("clipboard-pen-line",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=a("clipboard-pen",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=a("clipboard-plus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=a("clipboard-type",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=a("clipboard-x",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=a("clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=a("clock-1",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=a("clock-10",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=a("clock-11",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=a("clock-12",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=a("clock-2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=a("clock-3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=a("clock-4",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=a("clock-5",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=a("clock-6",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=a("clock-7",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=a("clock-8",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=a("clock-9",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=a("clock-alert",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516",key:"cxo92l"}],["path",{d:"M20 11.5v6",key:"2ei3xq"}],["path",{d:"M20 21.5h.01",key:"1r2dzp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=a("clock-arrow-down",[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227",key:"1i7shu"}],["path",{d:"M12 6v6l2 1",key:"19cm8n"}],["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M18 14v8",key:"irew45"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=a("clock-arrow-up",[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338",key:"1fzlyi"}],["path",{d:"M12 6v6l1.562.781",key:"1ujuk9"}],["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M18 22v-8",key:"su0gjh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=a("clock-fading",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=a("clock-plus",[["path",{d:"M12 6v6l3.644 1.822",key:"1jmett"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M21.92 13.267a10 10 0 1 0-8.653 8.653",key:"1u0osk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=a("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=a("cloud-alert",[["path",{d:"M12 12v4",key:"tww15h"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708",key:"xsb5ju"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=a("cloud-cog",[["path",{d:"m10.852 19.772-.383.924",key:"r7sl7d"}],["path",{d:"m13.148 14.228.383-.923",key:"1d5zpm"}],["path",{d:"M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923",key:"1ydik7"}],["path",{d:"m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544",key:"1m1vsf"}],["path",{d:"m14.772 15.852.923-.383",key:"660p6e"}],["path",{d:"m14.772 18.148.923.383",key:"hrcpis"}],["path",{d:"M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"j2q98n"}],["path",{d:"m9.228 15.852-.923-.383",key:"1p9ong"}],["path",{d:"m9.228 18.148-.923.383",key:"6558rz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=a("cloud-download",[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=a("cloud-drizzle",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=a("cloud-fog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=a("cloud-hail",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=a("cloud-lightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=a("cloud-moon-rain",[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=a("cloud-moon",[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=a("cloud-off",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=a("cloud-rain-wind",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=a("cloud-rain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=a("cloud-snow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=a("cloud-sun-rain",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=a("cloud-sun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=a("cloud-upload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=a("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=a("cloudy",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=a("clover",[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=a("club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=a("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=a("code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=a("codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=a("codesandbox",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=a("coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=a("cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=a("coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=a("columns-2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=a("columns-3-cog",[["path",{d:"M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5",key:"1g2yzs"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"M15 3v7.5",key:"7lm50a"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=a("columns-3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=a("columns-4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=a("combine",[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1",key:"ru65g8"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"e30een"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"2ahx8o"}],["path",{d:"m7 21 3-3-3-3",key:"127cv2"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=a("command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=a("compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=a("component",[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=a("computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=a("cone",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=a("concierge-bell",[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=a("construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=a("contact-round",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0",key:"suqz9p"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=a("contact",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=a("container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=a("contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=a("cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=a("cooking-pot",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=a("copy-check",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=a("copy-minus",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=a("copy-plus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=a("copy-slash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=a("copy-x",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=a("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=a("copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=a("copyleft",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=a("corner-down-left",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=a("corner-down-right",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=a("corner-left-down",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=a("corner-left-up",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=a("corner-right-down",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=a("corner-right-up",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=a("corner-up-left",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=a("corner-up-right",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=a("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=a("creative-commons",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=a("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=a("croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=a("crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=a("cross",[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=a("crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=a("crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=a("cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=a("cup-soda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=a("currency",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=a("cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=a("database-backup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=a("dam",[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"157kva"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"d7q6m6"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z",key:"pr6s65"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=a("database-zap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=a("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=a("decimals-arrow-left",[["path",{d:"m13 21-3-3 3-3",key:"s3o1nf"}],["path",{d:"M20 18H10",key:"14r3mt"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5",key:"v9paqo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=a("decimals-arrow-right",[["path",{d:"M10 18h10",key:"1y5s8o"}],["path",{d:"m17 21 3-3-3-3",key:"1ammt0"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{x:"15",y:"3",width:"5",height:"8",rx:"2.5",key:"76md6a"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5",key:"v9paqo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=a("delete",[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=a("diameter",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=a("dessert",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=a("diamond-minus",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=a("diamond-plus",[["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=a("diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=a("diamond-percent",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=a("dice-1",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=a("dice-2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=a("dice-3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=a("dice-4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=a("dice-5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=a("dice-6",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=a("dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=a("diff",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=a("disc-3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=a("disc-2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=a("disc-album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=a("disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=a("divide",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=a("dna-off",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8",key:"1bivrr"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3",key:"nxix30"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1",key:"18cutr"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16",key:"rlvei3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=a("dna",[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=a("dock",[["path",{d:"M2 8h20",key:"d11cs7"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 16h12",key:"u522kt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=a("dog",[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=a("dollar-sign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=a("donut",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=a("door-closed-locked",[["path",{d:"M10 12h.01",key:"1kxr2c"}],["path",{d:"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"1bnhmg"}],["path",{d:"M2 20h8",key:"10ntw1"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}],["rect",{x:"14",y:"17",width:"8",height:"5",rx:"1",key:"15pjcy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=a("door-closed",[["path",{d:"M10 12h.01",key:"1kxr2c"}],["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=a("door-open",[["path",{d:"M11 20H2",key:"nlcfvz"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",key:"au4z13"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14",key:"74r1mk"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M22 20h-3",key:"vhrsz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=a("dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=a("drafting-compass",[["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0",key:"ppmlo4"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=a("drama",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=a("download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=a("dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=a("drill",[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z",key:"ioqxb1"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8",key:"1rs59n"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"m7 18 2-8",key:"1bzku2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=a("droplet-off",[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586",key:"8suz2t"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208",key:"19dw9m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=a("droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=a("drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=a("droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=a("drumstick",[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",key:"1dtqwm"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",key:"1oq1fw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=a("dumbbell",[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=a("ear-off",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=a("ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=a("earth-lock",[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=a("earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=a("egg-fried",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=a("eclipse",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=a("egg-off",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=a("egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=a("ellipsis-vertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=a("ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=a("equal-approximately",[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"yrdkhy"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"gzkvyz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=a("equal-not",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=a("equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=a("eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=a("ethernet-port",[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z",key:"rbahqx"}],["path",{d:"M6 8v1",key:"1636ez"}],["path",{d:"M10 8v1",key:"1talb4"}],["path",{d:"M14 8v1",key:"1rsfgr"}],["path",{d:"M18 8v1",key:"gnkwox"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=a("euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=a("expand",[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=a("eye-closed",[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=a("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=a("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=a("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=a("facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=a("factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=a("fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=a("feather",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=a("fast-forward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=a("fence",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=a("ferris-wheel",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=a("figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=a("file-archive",[["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",key:"gkbcor"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=a("file-audio-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=a("file-audio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=a("file-axis-3d",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=a("file-badge-2",[["path",{d:"m13.69 12.479 1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88",key:"7a4gmr"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=a("file-badge",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=a("file-box",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=a("file-chart-column-increasing",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=a("file-chart-line",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=a("file-chart-pie",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5",key:"13ddob"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475",key:"s6vs5t"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",key:"1dl6s6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=a("file-chart-column",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=a("file-check-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=a("file-check",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=a("file-code-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=a("file-code",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=a("file-clock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=a("file-cog",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m2.305 15.53.923-.382",key:"yfp9st"}],["path",{d:"m3.228 12.852-.924-.383",key:"bckynb"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5",key:"1yo3oz"}],["path",{d:"m4.852 11.228-.383-.923",key:"1j88i9"}],["path",{d:"m4.852 16.772-.383.924",key:"sag1dv"}],["path",{d:"m7.148 11.228.383-.923",key:"rj39hk"}],["path",{d:"m7.53 17.696-.382-.924",key:"1uu5cs"}],["path",{d:"m8.772 12.852.923-.383",key:"13811l"}],["path",{d:"m8.772 15.148.923.383",key:"z1a5l0"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=a("file-diff",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=a("file-down",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=a("file-digit",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=a("file-heart",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=a("file-image",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=a("file-input",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=a("file-json-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=a("file-key-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=a("file-json",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=a("file-key",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=a("file-lock-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=a("file-lock",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=a("file-minus-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=a("file-minus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=a("file-music",[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4",key:"1d3kfm"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}],["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=a("file-pen-line",[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"142zxg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=a("file-output",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=a("file-pen",[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",key:"1couwa"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=a("file-plus-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=a("file-scan",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=a("file-plus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=a("file-question",[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=a("file-search-2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=a("file-sliders",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=a("file-search",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=a("file-stack",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=a("file-symlink",[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=a("file-spreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=a("file-terminal",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=a("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=a("file-type-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=a("file-type",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=a("file-up",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=a("file-user",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 18a3 3 0 1 0-6 0",key:"16awa0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=a("file-video-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=a("file-video",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=a("file-volume-2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=a("file-volume",[["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23",key:"ifyjnl"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z",key:"mk8rxu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=a("file-x-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=a("file-x",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=a("file-warning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=a("file",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=a("files",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=a("film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=a("fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=a("fire-extinguisher",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=a("fish-off",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=a("fish-symbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=a("fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=a("flag-off",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=a("flag-triangle-left",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=a("flag-triangle-right",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=a("flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=a("flame-kindling",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=a("flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=a("flashlight-off",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=a("flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=a("flask-conical-off",[["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563",key:"k0duyd"}],["path",{d:"M6.453 15H15",key:"1f0z33"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=a("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=a("flask-round",[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2",key:"1s42pc"}],["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=a("flip-horizontal-2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=a("flip-horizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=a("flip-vertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=a("flip-vertical-2",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=a("flower-2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=a("flower",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=a("focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=a("fold-horizontal",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=a("fold-vertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=a("folder-archive",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=a("folder-check",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=a("folder-clock",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=a("folder-closed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=a("folder-code",[["path",{d:"M10 10.5 8 13l2 2.5",key:"m4t9c1"}],["path",{d:"m14 10.5 2 2.5-2 2.5",key:"14w2eb"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",key:"1u1bxd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=a("folder-cog",[["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3",key:"128dxu"}],["path",{d:"m14.305 19.53.923-.382",key:"3m78fa"}],["path",{d:"m15.228 16.852-.923-.383",key:"npixar"}],["path",{d:"m16.852 15.228-.383-.923",key:"5xggr7"}],["path",{d:"m16.852 20.772-.383.924",key:"dpfhf9"}],["path",{d:"m19.148 15.228.383-.923",key:"1reyyz"}],["path",{d:"m19.53 21.696-.382-.924",key:"1goivc"}],["path",{d:"m20.772 16.852.924-.383",key:"htqkph"}],["path",{d:"m20.772 19.148.924.383",key:"9w9pjp"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=a("folder-dot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=a("folder-down",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=a("folder-git-2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=a("folder-git",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=a("folder-heart",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"wpff58"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=a("folder-input",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=a("folder-kanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=a("folder-key",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=a("folder-open-dot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=a("folder-lock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=a("folder-minus",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=a("folder-open",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=a("folder-output",[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=a("folder-pen",[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1saktj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=a("folder-plus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=a("folder-root",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=a("folder-search-2",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=a("folder-search",[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=a("folder-symlink",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=a("folder-sync",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=a("folder-up",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=a("folder-tree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=a("folder-x",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=a("folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=a("folders",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=a("footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=a("forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=a("forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=a("frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=a("framer",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=a("frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=a("fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=a("fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=a("funnel-plus",[["path",{d:"M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348",key:"8mvsmf"}],["path",{d:"M16 6h6",key:"1dogtp"}],["path",{d:"M19 3v6",key:"1ytpjt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=a("funnel-x",[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473",key:"ol2ft2"}],["path",{d:"m16.5 3.5 5 5",key:"15e6fa"}],["path",{d:"m21.5 3.5-5 5",key:"m0lwru"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=a("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=a("gallery-horizontal-end",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=a("gallery-horizontal",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=a("gallery-thumbnails",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=a("gallery-vertical-end",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=a("gallery-vertical",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=a("gamepad-2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=a("gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=a("gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=a("gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=a("gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=a("ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=a("gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=a("git-branch-plus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=a("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=a("git-commit-horizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=a("git-commit-vertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=a("git-compare-arrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=a("git-compare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=a("git-fork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=a("git-graph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=a("git-merge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=a("git-pull-request-arrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=a("git-pull-request-closed",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=a("git-pull-request-create-arrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=a("git-pull-request-draft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=a("git-pull-request-create",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=a("git-pull-request",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=a("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=a("gitlab",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=a("glass-water",[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",key:"p55z4y"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=a("glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=a("globe-lock",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=a("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=a("goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=a("gpu",[["path",{d:"M2 21V3",key:"1bzk4w"}],["path",{d:"M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26",key:"1d64pi"}],["path",{d:"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3",key:"5hbqbf"}],["circle",{cx:"16",cy:"11",r:"2",key:"qt15rb"}],["circle",{cx:"8",cy:"11",r:"2",key:"ssideg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=a("grab",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"edstyy"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"19wdwo"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",key:"1lugqo"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1hbeus"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"1etffm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=a("grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=a("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=a("grid-2x2-check",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=a("grid-2x2-plus",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 22v-6",key:"qhmiwi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=a("grid-2x2-x",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 16 5 5",key:"8tpb07"}],["path",{d:"m16 21 5-5",key:"193jll"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=a("grid-2x2",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=a("grid-3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=a("grip-horizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=a("grip-vertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=a("grip",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=a("group",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=a("guitar",[["path",{d:"m11.9 12.1 4.514-4.514",key:"109xqo"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",key:"txyc8t"}],["path",{d:"m6 16 2 2",key:"16qmzd"}],["path",{d:"M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z",key:"1de1vg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=a("ham",[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",key:"1k1t7q"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",key:"153t1g"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",key:"gzrt0n"}],["path",{d:"m8.5 16.5-1-1",key:"otr954"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=a("hamburger",[["path",{d:"M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25",key:"5dloqd"}],["path",{d:"M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2",key:"1vl3my"}],["path",{d:"M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0",key:"1us75o"}],["path",{d:"m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",key:"qqzweh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=a("hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=a("hand-coins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=a("hand-heart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=a("hand-helping",[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=a("hand-metal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"wc6myp"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=a("hand-platter",[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5",key:"n2g93r"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2",key:"1o2jem"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M5 10a7 7 0 0 1 14 0",key:"1ega1o"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2",key:"1hescx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=a("hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=a("handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=a("hard-drive-upload",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=a("hard-drive-download",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=a("hard-drive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=a("hard-hat",[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=a("hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=a("haze",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=a("hdmi-port",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=a("heading-1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=a("heading-2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=a("heading-3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=a("heading-4",[["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3",key:"tj5zdr"}],["path",{d:"M21 10v8",key:"1kdml4"}],["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=a("heading-5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=a("heading-6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=a("heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=a("headphone-off",[["path",{d:"M21 14h-1.343",key:"1jdnxi"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343",key:"6kipu2"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3",key:"9x50f4"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",key:"1bkxnm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=a("headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=a("headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=a("heart-handshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=a("heart-crack",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=a("heart-minus",[["path",{d:"M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5",key:"vd0vy5"}],["path",{d:"M15 15h6",key:"1u4692"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=a("heart-off",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=a("heart-plus",[["path",{d:"M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5",key:"vd0vy5"}],["path",{d:"M15 15h6",key:"1u4692"}],["path",{d:"M18 12v6",key:"1houu1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=a("heart-pulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=a("heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=a("heater",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=a("hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=a("highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=a("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=a("hop-off",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=a("hop",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=a("hospital",[["path",{d:"M12 6v4",key:"16clxf"}],["path",{d:"M14 14h-4",key:"esezmu"}],["path",{d:"M14 18h-4",key:"16mqa2"}],["path",{d:"M14 8h-4",key:"z8ypaz"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"b1k337"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",key:"16g51d"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=a("hotel",[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=a("hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=a("house-plug",[["path",{d:"M10 12V8.964",key:"1vll13"}],["path",{d:"M14 12V8.964",key:"1x3qvg"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z",key:"ppykja"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",key:"1gvg2z"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=a("house-plus",[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354",key:"5phn05"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"M18 3v6",key:"x1uolp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=a("house-wifi",[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01",key:"1wy54i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0",key:"exoy2g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=a("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=a("ice-cream-bowl",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"1uxfcu"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=a("id-card",[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=a("ice-cream-cone",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=a("image-down",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=a("image-minus",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=a("image-off",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=a("image-play",[["path",{d:"m11 16-5 5",key:"j5f7ct"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5",key:"7s81lt"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"1omb6s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=a("image-plus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=a("image-up",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=a("image-upscale",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2",key:"130fy9"}],["path",{d:"M21 12v3",key:"1wzk3p"}],["path",{d:"m21 3-5 5",key:"1g5oa7"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2",key:"kk3yz1"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19",key:"fyekpt"}],["path",{d:"M9 3h3",key:"d52fa"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1",key:"1wpmix"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=a("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=a("images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=a("import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=a("inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=a("indent-decrease",[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m7 8-4 4 4 4",key:"o5hrat"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=a("indent-increase",[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m3 8 4 4-4 4",key:"1a3j6y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=a("indian-rupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=a("infinity",[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=a("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=a("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=a("inspection-panel",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=a("italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=a("iteration-ccw",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=a("iteration-cw",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=a("japanese-yen",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=a("kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=a("joystick",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=a("key-round",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=a("key-square",[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",key:"165ttr"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",key:"1ubxi2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=a("key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=a("keyboard-music",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=a("keyboard-off",[["path",{d:"M 20 4 A2 2 0 0 1 22 6",key:"1g1fkt"}],["path",{d:"M 22 6 L 22 16.41",key:"1qjg3w"}],["path",{d:"M 7 16 L 16 16",key:"n0yqwb"}],["path",{d:"M 9.69 4 L 20 4",key:"kbpcgx"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M8 12h.01",key:"czm47f"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=a("keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=a("lamp-ceiling",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M14.829 15.998a3 3 0 1 1-5.658 0",key:"1pybiy"}],["path",{d:"M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z",key:"ma1wor"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=a("lamp-desk",[["path",{d:"M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z",key:"sb8slu"}],["path",{d:"m14.207 4.793-3.414 3.414",key:"m2x3oj"}],["path",{d:"M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z",key:"8b3myj"}],["path",{d:"m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18",key:"43s6cu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=a("lamp-floor",[["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z",key:"1o95gh"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=a("lamp-wall-down",[["path",{d:"M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z",key:"u4w2d7"}],["path",{d:"M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",key:"15356w"}],["path",{d:"M8 6h4a2 2 0 0 1 2 2v5",key:"1m6m7x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=a("lamp-wall-up",[["path",{d:"M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z",key:"1uvrbf"}],["path",{d:"M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",key:"154r2a"}],["path",{d:"M8 18h4a2 2 0 0 0 2-2v-5",key:"z9mbu0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=a("lamp",[["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z",key:"1l7kg2"}],["path",{d:"M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z",key:"1mmzpi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=a("land-plot",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=a("landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=a("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=a("laptop-minimal-check",[["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",key:"8ur36m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=a("laptop-minimal",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=a("laptop",[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=a("lasso-select",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",key:"72q637"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=a("lasso",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=a("laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=a("layers-2",[["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z",key:"15q6uc"}],["path",{d:"m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845",key:"byia6g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=a("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=a("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=a("layout-grid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=a("layout-list",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=a("layout-panel-top",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=a("layout-panel-left",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=a("layout-template",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=a("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=a("lectern",[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",key:"13jjxg"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3",key:"1550fe"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1",key:"qmu8b6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=a("leafy-green",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=a("letter-text",[["path",{d:"M15 12h6",key:"upa0zy"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13",key:"blevx4"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3.92 11h6.16",key:"1bqo8m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=a("library-big",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=a("life-buoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=a("library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=a("ligature",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=a("lightbulb-off",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=a("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=a("link-2-off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=a("link-2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=a("link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=a("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=a("list-check",[["path",{d:"M11 18H3",key:"n3j2dh"}],["path",{d:"m15 18 2 2 4-4",key:"1szwhi"}],["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=a("list-checks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=a("list-collapse",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=a("list-end",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=a("list-filter-plus",[["path",{d:"M10 18h4",key:"1ulq68"}],["path",{d:"M11 6H3",key:"1u26ik"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"M18 9V3",key:"xwwp7m"}],["path",{d:"M7 12h8",key:"7a1bxv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=a("list-minus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=a("list-filter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=a("list-music",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=a("list-plus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=a("list-ordered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=a("list-restart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=a("list-start",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=a("list-todo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=a("list-video",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=a("list-tree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=a("list-x",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=a("list",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=a("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=a("loader-pinwheel",[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0",key:"1lzz15"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",key:"1gnrpi"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",key:"u9yy5q"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=a("loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=a("locate-fixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=a("locate-off",[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M18.89 13.24a7 7 0 0 0-8.13-8.13",key:"1v9jrh"}],["path",{d:"M19 12h3",key:"osuazr"}],["path",{d:"M2 12h3",key:"1wrr53"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.05 7.05a7 7 0 0 0 9.9 9.9",key:"rc5l2e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=a("locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=a("location-edit",[["path",{d:"M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468",key:"1fahp3"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"10",r:"3",key:"1ns7v1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=a("lock-keyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=a("lock-keyhole-open",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=a("lock-open",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=a("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=a("log-in",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=a("log-out",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=a("logs",[["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M3 18h1",key:"1eiwyy"}],["path",{d:"M3 6h1",key:"rgxa97"}],["path",{d:"M8 12h1",key:"1con00"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M8 6h1",key:"tn6mkg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=a("lollipop",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=a("luggage",[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1m57jg"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=a("magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=a("mail-check",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=a("mail-minus",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=a("mail-open",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=a("mail-plus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=a("mail-question",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=a("mail-search",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"8lzu5m"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=a("mail-warning",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=a("mail-x",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=a("mailbox",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2",key:"15i455"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=a("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=a("mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=a("map-pin-check-inside",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=a("map-pin-check",[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",key:"1dq61d"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m16 18 2 2 4-4",key:"1mkfmb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=a("map-pin-house",[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",key:"1p1rcz"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",key:"mcbcs9"}],["path",{d:"M18 22v-3",key:"1t1ugv"}],["circle",{cx:"10",cy:"10",r:"3",key:"1ns7v1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=a("map-pin-minus-inside",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=a("map-pin-minus",[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"11uxia"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=a("map-pin-off",[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16",key:"1d4wjd"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",key:"12yil7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533",key:"lhrkcz"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74",key:"13wojd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=a("map-pin-plus-inside",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=a("map-pin-x-inside",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=a("map-pin-plus",[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"fcdtly"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}],["path",{d:"M19 15v6",key:"10aioa"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=a("map-pin-x",[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",key:"y0ewhp"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m21.5 15.5-5 5",key:"11iqnx"}],["path",{d:"m21.5 20.5-5-5",key:"1bylgx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=a("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=a("map-pinned",[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=a("map-plus",[["path",{d:"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12",key:"svfegj"}],["path",{d:"M15 5.764V12",key:"1ocw4k"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=a("map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=a("mars-stroke",[["path",{d:"m14 6 4 4",key:"1q72g9"}],["path",{d:"M17 3h4v4",key:"19p9u1"}],["path",{d:"m21 3-7.75 7.75",key:"1cjbfd"}],["circle",{cx:"9",cy:"15",r:"6",key:"bx5svt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=a("mars",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m21 3-6.75 6.75",key:"pv0uzu"}],["circle",{cx:"10",cy:"14",r:"6",key:"1qwbdc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=a("martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=a("maximize-2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=a("maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=a("medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=a("megaphone-off",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=a("meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=a("megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=a("memory-stick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=a("menu",[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=a("merge",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=a("message-circle-code",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z",key:"k85zhp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=a("message-circle-heart",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=a("message-circle-dashed",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=a("message-circle-more",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=a("message-circle-off",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=a("message-circle-plus",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=a("message-circle-question",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=a("message-circle-reply",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=a("message-circle-warning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=a("message-circle-x",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=a("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=a("message-square-code",[["path",{d:"M10 7.5 8 10l2 2.5",key:"xb17xw"}],["path",{d:"m14 7.5 2 2.5-2 2.5",key:"5rap1v"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=a("message-square-dashed",[["path",{d:"M10 17H7l-4 4v-7",key:"1r71xu"}],["path",{d:"M14 17h1",key:"nufu4t"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2",key:"29akq3"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=a("message-square-diff",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=a("message-square-dot",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=a("message-square-heart",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=a("message-square-lock",[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2",key:"h3d1vz"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5",key:"xsnnhn"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1",key:"1ccwuk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=a("message-square-more",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=a("message-square-off",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=a("message-square-plus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=a("message-square-quote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=a("message-square-reply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=a("message-square-text",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=a("message-square-share",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=a("message-square-warning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=a("message-square-x",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=a("message-square",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=a("messages-square",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=a("mic-off",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=a("mic-vocal",[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=a("mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=a("microchip",[["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 16h2",key:"zsn3lv"}],["path",{d:"M18 20h2",key:"9x5y9y"}],["path",{d:"M18 4h2",key:"1luxfb"}],["path",{d:"M18 8h2",key:"nxqzg"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 16h2",key:"8a5zha"}],["path",{d:"M4 20h2",key:"27dk57"}],["path",{d:"M4 4h2",key:"10groj"}],["path",{d:"M4 8h2",key:"18vq6w"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",key:"1681fp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=a("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=a("microwave",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=a("milestone",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",key:"1btarq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=a("milk-off",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=a("milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=a("minimize-2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=a("minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=a("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=a("monitor-check",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=a("monitor-cog",[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m14.305 7.53.923-.382",key:"1mlnsw"}],["path",{d:"m15.228 4.852-.923-.383",key:"82mpwg"}],["path",{d:"m16.852 3.228-.383-.924",key:"ln4sir"}],["path",{d:"m16.852 8.772-.383.923",key:"1dejw0"}],["path",{d:"m19.148 3.228.383-.924",key:"192kgf"}],["path",{d:"m19.53 9.696-.382-.924",key:"fiavlr"}],["path",{d:"m20.772 4.852.924-.383",key:"1j8mgp"}],["path",{d:"m20.772 7.148.924.383",key:"zix9be"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"1tnzv8"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=a("monitor-dot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=a("monitor-down",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=a("monitor-off",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=a("monitor-pause",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=a("monitor-play",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=a("monitor-smartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=a("monitor-speaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=a("monitor-stop",[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1",key:"5m2oou"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=a("monitor-up",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=a("monitor-x",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=a("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=a("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=a("moon-star",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=a("mountain-snow",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=a("mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=a("mouse-off",[["path",{d:"M12 6v.343",key:"1gyhex"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",key:"ukzz01"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902",key:"104jy9"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=a("mouse-pointer-2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=a("mouse-pointer-ban",[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z",key:"11pp1i"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"m11.8 11.8 8.4 8.4",key:"oogvdj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=a("mouse-pointer-click",[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=a("mouse-pointer",[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=a("mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=a("move-3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=a("move-diagonal-2",[["path",{d:"M19 13v6h-6",key:"1hxl6d"}],["path",{d:"M5 11V5h6",key:"12e2xe"}],["path",{d:"m5 5 14 14",key:"11anup"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=a("move-diagonal",[["path",{d:"M11 19H5v-6",key:"8awifj"}],["path",{d:"M13 5h6v6",key:"7voy1q"}],["path",{d:"M19 5 5 19",key:"wwaj1z"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=a("move-down-left",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=a("move-down-right",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=a("move-down",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=a("move-horizontal",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=a("move-left",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=a("move-right",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=a("move-up-left",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=a("move-up-right",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=a("move-up",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=a("move-vertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m8 18 4 4 4-4",key:"bh5tu3"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=a("move",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=a("music-2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=a("music-3",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=a("music-4",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=a("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=a("navigation-2-off",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=a("navigation-2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=a("navigation-off",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=a("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=a("navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=a("newspaper",[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=a("nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=a("non-binary",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"m8.5 4 7 4",key:"m1xjk3"}],["path",{d:"m8.5 8 7-4",key:"t0m5j6"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=a("notebook-pen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=a("notebook-tabs",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=a("notebook-text",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=a("notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=a("notepad-text-dashed",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=a("notepad-text",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=a("nut-off",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=a("nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=a("octagon-alert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=a("octagon-minus",[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=a("octagon-pause",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=a("octagon-x",[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=a("octagon",[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=a("omega",[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21",key:"1x94xo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=a("option",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=a("orbit",[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=a("origami",[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",key:"1bx4vc"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",key:"1h3km6"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",key:"1hj4wg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=a("package-2",[["path",{d:"M12 3v6",key:"1holv5"}],["path",{d:"M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z",key:"187q7i"}],["path",{d:"M3.054 9.013h17.893",key:"grwhos"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=a("package-check",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=a("package-minus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=a("package-open",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=a("package-plus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=a("package-search",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=a("package-x",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=a("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=a("paint-bucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=a("paint-roller",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=a("paintbrush-vertical",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=a("paintbrush",[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=a("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=a("panda",[["path",{d:"M11.25 17.25h1.5L12 18z",key:"1wmwwj"}],["path",{d:"m15 12 2 2",key:"k60wz4"}],["path",{d:"M18 6.5a.5.5 0 0 0-.5-.5",key:"1ch4h4"}],["path",{d:"M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83",key:"1c660l"}],["path",{d:"M6 6.5a.495.495 0 0 1 .5-.5",key:"eviuep"}],["path",{d:"m9 12-2 2",key:"326nkw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=a("panel-bottom-close",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=a("panel-bottom-dashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=a("panel-bottom-open",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=a("panel-bottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=a("panel-left-close",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=a("panel-left-dashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=a("panel-left-open",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=a("panel-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=a("panel-right-close",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=a("panel-right-dashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=a("panel-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=a("panel-right-open",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=a("panel-top-close",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=a("panel-top-dashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=a("panel-top-open",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=a("panel-top",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=a("panels-left-bottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=a("panels-right-bottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=a("panels-top-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=a("paperclip",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=a("parentheses",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=a("parking-meter",[["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",key:"1jofit"}],["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=a("party-popper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=a("pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=a("paw-print",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=a("pc-case",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=a("pen-line",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=a("pen-off",[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=a("pen-tool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=a("pencil-line",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=a("pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=a("pencil-off",[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=a("pencil-ruler",[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=a("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=a("pentagon",[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z",key:"2hea0t"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=a("percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=a("person-standing",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=a("philippine-peso",[["path",{d:"M20 11H4",key:"6ut86h"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7",key:"1ana5r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=a("phone-call",[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=a("phone-forwarded",[["path",{d:"M14 6h8",key:"yd68k4"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=a("phone-incoming",[["path",{d:"M16 2v6h6",key:"1mfrl5"}],["path",{d:"m22 2-6 6",key:"6f0sa0"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=a("phone-missed",[["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"m22 2-6 6",key:"6f0sa0"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=a("phone-off",[["path",{d:"M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",key:"1wngk7"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}],["path",{d:"M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",key:"10hv5p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=a("phone-outgoing",[["path",{d:"m16 8 6-6",key:"oawc05"}],["path",{d:"M22 8V2h-6",key:"oqy2zc"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=a("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=a("pi",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=a("piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=a("pickaxe",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=a("picture-in-picture-2",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=a("picture-in-picture",[["path",{d:"M2 10h6V4",key:"zwrco"}],["path",{d:"m2 4 6 6",key:"ug085t"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7",key:"git5jr"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3",key:"1f7fh3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1",key:"1wjs3o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=a("piggy-bank",[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=a("pilcrow-left",[["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9",key:"1ulc19"}],["path",{d:"M18 3v11",key:"1phi0r"}],["path",{d:"M22 18H2l4-4",key:"yt65j9"}],["path",{d:"m6 22-4-4",key:"6jgyf5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=a("pilcrow-right",[["path",{d:"M10 3v11",key:"o3l5kj"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8",key:"1wb1nc"}],["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"m18 14 4 4H2",key:"4r8io1"}],["path",{d:"m22 18-4 4",key:"1hjjrd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=a("pilcrow",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=a("pill-bottle",[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",key:"17ldeb"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",key:"nc37y6"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1",key:"3jeezo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=a("pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=a("pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=a("pipette",[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=a("pizza",[["path",{d:"m12 14-1 1",key:"11onhr"}],["path",{d:"m13.75 18.25-1.25 1.42",key:"1yisr3"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",key:"1qtqk6"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7",key:"fbbbr2"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",key:"1hyfdd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=a("pin-off",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=a("plane-landing",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=a("plane-takeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=a("plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=a("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=a("plug-2",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z",key:"wtfw2c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=a("plug-zap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=a("plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=a("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=a("pocket-knife",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=a("pocket",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=a("podcast",[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0",key:"d71mpg"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z",key:"za5kbj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=a("pointer-off",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=a("pointer",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1agjmk"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",key:"wdbh2u"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",key:"1ibuk9"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=a("popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=a("popsicle",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=a("power-off",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=a("pound-sterling",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=a("power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=a("presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=a("printer-check",[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5",key:"qeb09x"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2",key:"1md90i"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=a("printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=a("projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=a("proportions",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M12 9v11",key:"1fnkrn"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9",key:"11z3ex"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=a("puzzle",[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=a("pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=a("qr-code",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=a("quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=a("rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=a("radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=a("radiation",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=a("radical",[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",key:"1mqj8i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=a("radio-receiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=a("radio-tower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=a("radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=a("radius",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=a("rail-symbol",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=a("rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=a("rat",[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5",key:"1tbvmo"}],["path",{d:"M16 9h.01",key:"1bdo4e"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3",key:"9ch7kn"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18",key:"3s7e9i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=a("ratio",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=a("receipt-cent",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=a("receipt-euro",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=a("receipt-indian-rupee",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=a("receipt-japanese-yen",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=a("receipt-pound-sterling",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=a("receipt-russian-ruble",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=a("receipt-swiss-franc",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=a("receipt-text",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=a("receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=a("rectangle-ellipsis",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=a("rectangle-goggles",[["path",{d:"M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"d5y1f"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=a("rectangle-horizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=a("rectangle-vertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=a("recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=a("redo-2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=a("redo-dot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=a("redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=a("refresh-ccw-dot",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=a("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=a("refresh-cw-off",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=a("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=a("refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=a("regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=a("remove-formatting",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=a("repeat-1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=a("repeat-2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=a("repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=a("replace-all",[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"1yyzbs"}],["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"zfj4xr"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1",key:"1ageje"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=a("replace",[["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1",key:"3y3t5z"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=a("reply-all",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=a("reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=a("rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=a("ribbon",[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22",key:"1rnhq3"}],["path",{d:"m12 18 2.57-3.5",key:"116vt7"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009",key:"10dq0b"}],["path",{d:"M9.35 14.53 12 11.22",key:"tdsyp2"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",key:"nmifey"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=a("rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=a("rocking-chair",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=a("roller-coaster",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=a("rotate-3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=a("rotate-ccw-key",[["path",{d:"m14.5 9.5 1 1",key:"159eiq"}],["path",{d:"m15.5 8.5-4 4",key:"iirg3q"}],["path",{d:"M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8",key:"g2jlw"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["circle",{cx:"10",cy:"14",r:"2",key:"1239so"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=a("rotate-ccw-square",[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6",key:"19z8uc"}],["path",{d:"m15 2-3 3 3 3",key:"177bxs"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",key:"d36hnl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=a("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=a("rotate-cw-square",[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3",key:"l96uqu"}],["path",{d:"m9 8 3-3-3-3",key:"1gzgc3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1w2k5h"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=a("rotate-cw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=a("route-off",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=a("route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=a("router",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=a("rows-2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=a("rows-3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=a("rows-4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=a("rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=a("ruler-dimension-line",[["path",{d:"M12 15v-3.014",key:"aw6ppf"}],["path",{d:"M16 15v-3.014",key:"9e0vc7"}],["path",{d:"M20 6H4",key:"1lfz86"}],["path",{d:"M20 8V4",key:"1l2g47"}],["path",{d:"M4 8V4",key:"sppxzt"}],["path",{d:"M8 15v-3.014",key:"when08"}],["rect",{x:"3",y:"12",width:"18",height:"7",rx:"1",key:"1ucwdz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=a("russian-ruble",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=a("ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=a("sailboat",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=a("salad",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=a("sandwich",[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777",key:"f1wd0e"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25",key:"1pfu07"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9",key:"1oq9qw"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",key:"1fnwu5"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1",key:"itshg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=a("satellite-dish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=a("satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=a("saudi-riyal",[["path",{d:"m20 19.5-5.5 1.2",key:"1aenhr"}],["path",{d:"M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2",key:"2rtezt"}],["path",{d:"m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2",key:"1kbm92"}],["path",{d:"M20 10 4 13.5",key:"8nums9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=a("save-all",[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5",key:"1xspal"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",key:"1ra60u"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",key:"1yve0x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=a("save-off",[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7",key:"h8g396"}],["path",{d:"M14 8h1",key:"1lfen6"}],["path",{d:"M17 21v-4",key:"1yknxs"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",key:"1t4vdl"}],["path",{d:"M29.5 11.5s5 5 4 5",key:"zzn4i6"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15",key:"24cby9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=a("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=a("scale-3d",[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11",key:"13dt1j"}],["path",{d:"M5.293 18.707 11 13",key:"ezgbsx"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=a("scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=a("scaling",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=a("scan-barcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=a("scan-eye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=a("scan-face",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=a("scan-heart",[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z",key:"1algrk"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=a("scan-line",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=a("scan-qr-code",[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4",key:"uk4fdo"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M17 8V7",key:"q2g9wo"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1",key:"m9kyts"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=a("scan-search",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=a("scan-text",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=a("scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=a("scissors-line-dashed",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=a("scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=a("school",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=a("screen-share-off",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=a("screen-share",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=a("scroll-text",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=a("scroll",[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=a("search-code",[["path",{d:"m13 13.5 2-2.5-2-2.5",key:"1rvxrh"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M9 8.5 7 11l2 2.5",key:"6ffwbx"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=a("search-check",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=a("search-slash",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=a("search-x",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=a("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=a("section",[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",key:"vqan6v"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",key:"wdjd8o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=a("send-horizontal",[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=a("send-to-back",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=a("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=a("separator-horizontal",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=a("separator-vertical",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=a("server-cog",[["path",{d:"m10.852 14.772-.383.923",key:"11vil6"}],["path",{d:"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923",key:"1v3clb"}],["path",{d:"m13.148 9.228.383-.923",key:"t2zzyc"}],["path",{d:"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544",key:"1bxfiv"}],["path",{d:"m14.772 10.852.923-.383",key:"k9m8cz"}],["path",{d:"m14.772 13.148.923.383",key:"1xvhww"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"m9.228 10.852-.923-.383",key:"1wtb30"}],["path",{d:"m9.228 13.148-.923.383",key:"1a830x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=a("server-crash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=a("server-off",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=a("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=a("settings-2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=a("settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=a("shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=a("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=a("share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=a("sheet",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=a("shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=a("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=a("shield-ban",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=a("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=a("shield-ellipsis",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=a("shield-half",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=a("shield-minus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=a("shield-off",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=a("shield-plus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=a("shield-question",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=a("shield-user",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M6.376 18.91a6 6 0 0 1 11.249.003",key:"hnjrf2"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=a("shield-x",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=a("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=a("ship-wheel",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=a("ship",[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=a("shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=a("shopping-bag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=a("shopping-basket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=a("shopping-cart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=a("shovel",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=a("shower-head",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=a("shredder",[["path",{d:"M10 22v-5",key:"sfixh4"}],["path",{d:"M14 19v-2",key:"pdve8j"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M18 20v-3",key:"uox2gk"}],["path",{d:"M2 13h20",key:"5evz65"}],["path",{d:"M20 13V7l-5-5H6a2 2 0 0 0-2 2v9",key:"1rnpe2"}],["path",{d:"M6 20v-3",key:"c6pdcb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=a("shrimp",[["path",{d:"M11 12h.01",key:"1lr4k6"}],["path",{d:"M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1",key:"fatpdi"}],["path",{d:"M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8",key:"kehrqe"}],["path",{d:"M14 8a8.5 8.5 0 0 1 0 8",key:"1imjx2"}],["path",{d:"M16 16c2 0 4.5-4 4-6",key:"z0nejz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=a("shrink",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=a("shrub",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z",key:"ubcgy"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=a("shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=a("sigma",[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",key:"wuwx1p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=a("signal-high",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=a("signal-low",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=a("signal-medium",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=a("signal-zero",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=a("signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=a("signature",[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",key:"y32ogt"}],["path",{d:"M3 21h18",key:"itz85i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=a("signpost-big",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=a("signpost",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z",key:"gqqp9m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=a("siren",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=a("skip-back",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=a("skip-forward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=a("skull",[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=a("slack",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=a("slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=a("slice",[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14",key:"1sllp5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=a("sliders-vertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=a("sliders-horizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=a("smartphone-charging",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=a("smartphone-nfc",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=a("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=a("smile-plus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=a("smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=a("snail",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=a("snowflake",[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=a("soap-dispenser-droplet",[["path",{d:"M10.5 2v4",key:"1xt6in"}],["path",{d:"M14 2H7a2 2 0 0 0-2 2",key:"e6xig3"}],["path",{d:"M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19",key:"adq7uc"}],["path",{d:"M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"t9hm96"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=a("sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=a("soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=a("space",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=a("spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=a("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=a("speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=a("sparkle",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=a("speech",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=a("spell-check",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=a("spell-check-2",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=a("spline-pointer",[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=a("spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=a("split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=a("spray-can",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=a("square-activity",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=a("sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=a("square-arrow-down-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=a("square-arrow-down-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=a("square-arrow-down",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=a("square-arrow-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=a("square-arrow-out-down-left",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=a("square-arrow-out-down-right",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=a("square-arrow-out-up-left",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=a("square-arrow-out-up-right",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=a("square-arrow-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=a("square-arrow-up-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=a("square-arrow-up-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=a("square-arrow-up",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=a("square-asterisk",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=a("square-bottom-dashed-scissors",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=a("square-chart-gantt",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=a("square-check-big",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=a("square-check",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=a("square-chevron-down",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=a("square-chevron-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=a("square-chevron-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=a("square-chevron-up",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=a("square-code",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=a("square-dashed-bottom-code",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=a("square-dashed-bottom",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=a("square-dashed-kanban",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=a("square-dashed-mouse-pointer",[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=a("square-dashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=a("square-divide",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=a("square-dot",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=a("square-equal",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=a("square-function",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=a("square-kanban",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=a("square-library",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=a("square-m",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=a("square-menu",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=a("square-minus",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=a("square-mouse-pointer",[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=a("square-parking-off",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=a("square-parking",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=a("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=a("square-percent",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=a("square-pi",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=a("square-pilcrow",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=a("square-play",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=a("square-plus",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=a("square-power",[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=a("square-radical",[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=a("square-round-corner",[["path",{d:"M21 11a8 8 0 0 0-8-8",key:"1lxwo5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1dv2y5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=a("square-scissors",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=a("square-sigma",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=a("square-slash",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=a("square-split-horizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=a("square-split-vertical",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=a("square-square",[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=a("square-stack",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=a("square-terminal",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=a("square-user-round",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=a("square-user",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=a("square-x",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=a("squares-exclude",[["path",{d:"M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0",key:"1mcohs"}],["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2",key:"1r1efp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=a("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=a("squares-intersect",[["path",{d:"M10 22a2 2 0 0 1-2-2",key:"i7yj1i"}],["path",{d:"M14 2a2 2 0 0 1 2 2",key:"170a0m"}],["path",{d:"M16 22h-2",key:"18d249"}],["path",{d:"M2 10V8",key:"7yj4fe"}],["path",{d:"M2 4a2 2 0 0 1 2-2",key:"ddgnws"}],["path",{d:"M20 8a2 2 0 0 1 2 2",key:"1770vt"}],["path",{d:"M22 14v2",key:"iot8ja"}],["path",{d:"M22 20a2 2 0 0 1-2 2",key:"qj8q6g"}],["path",{d:"M4 16a2 2 0 0 1-2-2",key:"1dnafg"}],["path",{d:"M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z",key:"ci6f0b"}],["path",{d:"M8 2h2",key:"1gmkwm"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=a("squares-subtract",[["path",{d:"M10 22a2 2 0 0 1-2-2",key:"i7yj1i"}],["path",{d:"M16 22h-2",key:"18d249"}],["path",{d:"M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z",key:"1njgbb"}],["path",{d:"M20 8a2 2 0 0 1 2 2",key:"1770vt"}],["path",{d:"M22 14v2",key:"iot8ja"}],["path",{d:"M22 20a2 2 0 0 1-2 2",key:"qj8q6g"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=a("squares-unite",[["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z",key:"17jnth"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=a("squircle",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=a("squirrel",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=a("stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=a("star-half",[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",key:"2ksp49"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=a("star-off",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=a("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=a("step-back",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=a("step-forward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=a("stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=a("sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=a("sticky-note",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=a("store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=a("stretch-horizontal",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=a("stretch-vertical",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=a("strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=a("subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=a("sun-dim",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=a("sun-medium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=a("sun-moon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=a("sun-snow",[["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 9a3 3 0 0 0 0 6",key:"gv75dk"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6 1.5-3H22",key:"o5qa3v"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=a("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=a("sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=a("sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=a("superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=a("swatch-book",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h.01",key:"1euzgo"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=a("swiss-franc",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=a("switch-camera",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=a("sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=a("swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=a("syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=a("table-2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=a("table-cells-merge",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=a("table-cells-split",[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=a("table-columns-split",[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=a("table-of-contents",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M21 12h.01",key:"msek7k"}],["path",{d:"M21 18h.01",key:"1e8rq1"}],["path",{d:"M21 6h.01",key:"1koanj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=a("table-properties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=a("table-rows-split",[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=a("tablet-smartphone",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=a("tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=a("table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=a("tablets",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=a("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=a("tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=a("tally-1",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=a("tally-2",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=a("tally-3",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=a("tally-4",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=a("tally-5",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=a("tangent",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=a("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=a("telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=a("tent-tree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=a("tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=a("terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=a("test-tube-diagonal",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",key:"1ub6xw"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=a("test-tube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=a("test-tubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2",key:"1hjrqt"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2",key:"16lc8n"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=a("text-cursor-input",[["path",{d:"M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6",key:"1528k5"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1",key:"1mj8rg"}],["path",{d:"M9 6v12",key:"velyjx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=a("text-cursor",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=a("text-quote",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=a("text-search",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=a("text-select",[["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M9 3h1",key:"1yesri"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=a("text",[["path",{d:"M15 18H3",key:"olowqp"}],["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H3",key:"2avoz0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=a("theater",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=a("thermometer-snowflake",[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"M10.585 15H10",key:"4nqulp"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",key:"yu0u2z"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h2",key:"1bbqgq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=a("thermometer-sun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=a("thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=a("thumbs-down",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=a("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=a("ticket-check",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=a("ticket-minus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=a("ticket-percent",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=a("ticket-plus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=a("ticket-x",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=a("ticket-slash",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=a("ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=a("tickets-plane",[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12",key:"16muxl"}],["path",{d:"m12 13.5 3.75.5",key:"1i9qhk"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=a("tickets",[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=a("timer-off",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=a("timer-reset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=a("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=a("toggle-left",[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=a("toggle-right",[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=a("toilet",[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18",key:"kc4kqr"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8",key:"1tqs57"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=a("tornado",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=a("torus",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=a("touchpad-off",[["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"M19.656 14H22",key:"170xzr"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M9.656 4H20a2 2 0 0 1 2 2v10.344",key:"ovjcvl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=a("touchpad",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=a("tower-control",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=a("toy-brick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=a("tractor",[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",key:"she1j9"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246",key:"1q1ert"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=a("traffic-cone",[["path",{d:"M16.05 10.966a5 2.5 0 0 1-8.1 0",key:"m5jpwb"}],["path",{d:"m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04",key:"rbg3g8"}],["path",{d:"M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z",key:"vap8c8"}],["path",{d:"M9.194 6.57a5 2.5 0 0 0 5.61 0",key:"15hn5c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=a("train-front-tunnel",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=a("train-front",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=a("train-track",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=a("tram-front",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=a("transgender",[["path",{d:"M12 16v6",key:"c8a4gj"}],["path",{d:"M14 20h-4",key:"m8m19d"}],["path",{d:"M18 2h4v4",key:"1341mj"}],["path",{d:"m2 2 7.17 7.17",key:"13q8l2"}],["path",{d:"M2 5.355V2h3.357",key:"18136r"}],["path",{d:"m22 2-7.17 7.17",key:"1epvy4"}],["path",{d:"M8 5 5 8",key:"mgbjhz"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=a("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=a("trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=a("tree-deciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=a("tree-palm",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=a("tree-pine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=a("trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=a("trello",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=a("trending-down",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=a("trending-up-down",[["path",{d:"M14.828 14.828 21 21",key:"ar5fw7"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"m21 3-9 9-4-4-6 6",key:"1h02xo"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=a("trending-up",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=a("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=a("triangle-dashed",[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013",key:"pltmmw"}],["path",{d:"M14 21h2",key:"v4qezv"}],["path",{d:"m15.874 7.743 1 1.732",key:"10m0iw"}],["path",{d:"m18.849 12.952 1 1.732",key:"zadnam"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824",key:"fvwuk4"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839",key:"1e1kah"}],["path",{d:"m5.136 12.952-1 1.732",key:"1u4ldi"}],["path",{d:"M8 21h2",key:"i9zjee"}],["path",{d:"m8.102 7.743-1 1.732",key:"1zzo4u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=a("triangle-right",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=a("triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=a("trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=a("truck-electric",[["path",{d:"M14 19V7a2 2 0 0 0-2-2H9",key:"15peso"}],["path",{d:"M15 19H9",key:"18q6dt"}],["path",{d:"M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14",key:"1dkp3j"}],["path",{d:"M2 13v5a1 1 0 0 0 1 1h2",key:"pkmmzz"}],["path",{d:"M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02",key:"1n26pd"}],["circle",{cx:"17",cy:"19",r:"2",key:"1nxcgd"}],["circle",{cx:"7",cy:"19",r:"2",key:"gzo7y7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=a("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=a("turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=a("tv-minimal-play",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=a("tv-minimal",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=a("tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=a("twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=a("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=a("type-outline",[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",key:"1reda3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=a("type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=a("umbrella-off",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=a("umbrella",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=a("underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=a("undo-2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=a("undo-dot",[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13",key:"8mp6z9"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=a("undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=a("unfold-horizontal",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=a("unfold-vertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=a("ungroup",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=a("university",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"1qj5sn"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",key:"11g7fi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=a("unlink-2",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=a("unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=a("unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=a("upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=a("usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=a("user-check",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=a("user-cog",[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=a("user-lock",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["path",{d:"M15 15.5V14a2 2 0 0 1 4 0v1.5",key:"12ym5i"}],["rect",{width:"8",height:"5",x:"13",y:"16",rx:".899",key:"4p176n"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=a("user-minus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=a("user-pen",[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2",key:"15lzij"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=a("user-plus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=a("user-round-check",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=a("user-round-cog",[["path",{d:"m14.305 19.53.923-.382",key:"3m78fa"}],["path",{d:"m15.228 16.852-.923-.383",key:"npixar"}],["path",{d:"m16.852 15.228-.383-.923",key:"5xggr7"}],["path",{d:"m16.852 20.772-.383.924",key:"dpfhf9"}],["path",{d:"m19.148 15.228.383-.923",key:"1reyyz"}],["path",{d:"m19.53 21.696-.382-.924",key:"1goivc"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["path",{d:"m20.772 16.852.924-.383",key:"htqkph"}],["path",{d:"m20.772 19.148.924.383",key:"9w9pjp"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=a("user-round-minus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=a("user-round-pen",[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487",key:"1c8h7z"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=a("user-round-plus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=a("user-round-x",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=a("user-round-search",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=a("user-round",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=a("user-search",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=a("user-x",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=a("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=a("users-round",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=a("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=a("utensils-crossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=a("utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=a("utility-pole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=a("variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=a("vault",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=a("vegan",[["path",{d:"M16 8q6 0 6-6-6 0-6 6",key:"qsyyc4"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3",key:"41m9h7"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=a("venus-and-mars",[["path",{d:"M10 20h4",key:"ni2waw"}],["path",{d:"M12 16v6",key:"c8a4gj"}],["path",{d:"M17 2h4v4",key:"vhe59"}],["path",{d:"m21 2-5.46 5.46",key:"19kypf"}],["circle",{cx:"12",cy:"11",r:"5",key:"16gxyc"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=a("venetian-mask",[["path",{d:"M18 11c-1.5 0-2.5.5-3 2",key:"1fod00"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",key:"d70hit"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2",key:"136fht"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=a("venus",[["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M9 19h6",key:"456am0"}],["circle",{cx:"12",cy:"9",r:"6",key:"1nw4tq"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=a("vibrate-off",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=a("video-off",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=a("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=a("vibrate",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=a("videotape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=a("view",[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=a("voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=a("volleyball",[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4",key:"2880wi"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5",key:"113sja"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5",key:"1qmsgl"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10",key:"1bmeqp"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5",key:"iekzv9"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=a("volume-1",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=a("volume-2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=a("volume-off",[["path",{d:"M16 9a5 5 0 0 1 .95 2.293",key:"1fgyg8"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96",key:"l3zxae"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",key:"1gbwow"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686",key:"s2je0y"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=a("volume-x",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=a("vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=a("volume",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=a("wallet-cards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=a("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=a("wallet-minimal",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=a("wallpaper",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=a("wand-sparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=a("wand",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=a("warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=a("washing-machine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=a("watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=a("waves-ladder",[["path",{d:"M19 5a2 2 0 0 0-2 2v11",key:"s41o68"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}],["path",{d:"M7 13h10",key:"1rwob1"}],["path",{d:"M7 9h10",key:"12czzb"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11",key:"x0q4gh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=a("waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=a("waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=a("webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=a("webhook-off",[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=a("webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=a("weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=a("wheat-off",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=a("wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=a("whole-word",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=a("wifi-high",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=a("wifi-low",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=a("wifi-off",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=a("wifi-pen",[["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["path",{d:"M5 12.859a10 10 0 0 1 10.5-2.222",key:"rpb7oy"}],["path",{d:"M8.5 16.429a5 5 0 0 1 3-1.406",key:"r8bmzl"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=a("wifi-zero",[["path",{d:"M12 20h.01",key:"zekei9"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=a("wind-arrow-down",[["path",{d:"M10 2v8",key:"d4bbey"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2",key:"19kp1d"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2",key:"19kpjc"}],["path",{d:"m6 6 4 4 4-4",key:"k13n16"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=a("wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=a("wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=a("wine-off",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=a("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=a("worm",[["path",{d:"m19 12-1.5 3",key:"9bcu4o"}],["path",{d:"M19.63 18.81 22 20",key:"121v98"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",key:"1tij6q"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=a("wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=a("wrap-text",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=a("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=a("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=a("youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=a("zap-off",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=a("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=a("zoom-out",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=a("zoom-in",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Wn,AArrowUp:Kn,ALargeSmall:Xn,Accessibility:Jn,Activity:Qn,AirVent:Yn,Airplay:ec,AlarmClock:ac,AlarmClockCheck:G1,AlarmClockMinus:W1,AlarmClockOff:tc,AlarmClockPlus:K1,AlarmSmoke:nc,Album:cc,AlignCenter:ic,AlignCenterHorizontal:oc,AlignCenterVertical:rc,AlignEndHorizontal:dc,AlignEndVertical:hc,AlignHorizontalDistributeCenter:sc,AlignHorizontalDistributeEnd:lc,AlignHorizontalDistributeStart:yc,AlignHorizontalJustifyCenter:uc,AlignHorizontalJustifyEnd:pc,AlignHorizontalJustifyStart:kc,AlignHorizontalSpaceAround:fc,AlignHorizontalSpaceBetween:Mc,AlignJustify:mc,AlignLeft:gc,AlignRight:Lc,AlignStartHorizontal:vc,AlignStartVertical:xc,AlignVerticalDistributeCenter:wc,AlignVerticalDistributeEnd:bc,AlignVerticalDistributeStart:Ic,AlignVerticalJustifyCenter:Cc,AlignVerticalJustifyEnd:Sc,AlignVerticalJustifyStart:qc,AlignVerticalSpaceAround:Ac,AlignVerticalSpaceBetween:zc,Ambulance:Hc,Ampersand:Pc,Ampersands:jc,Amphora:Rc,Anchor:Vc,Angry:_c,Annoyed:Tc,Antenna:Dc,Anvil:Fc,Aperture:Bc,AppWindow:Ec,AppWindowMac:Oc,Apple:Uc,Archive:$c,ArchiveRestore:Nc,ArchiveX:Zc,Armchair:Gc,ArrowBigDown:Wc,ArrowBigDownDash:Kc,ArrowBigLeft:Jc,ArrowBigLeftDash:Xc,ArrowBigRight:Yc,ArrowBigRightDash:Qc,ArrowBigUp:to,ArrowBigUpDash:eo,ArrowDown:yo,ArrowDown01:ao,ArrowDown10:no,ArrowDownAZ:X1,ArrowDownFromLine:co,ArrowDownLeft:oo,ArrowDownNarrowWide:ro,ArrowDownRight:io,ArrowDownToDot:ho,ArrowDownToLine:so,ArrowDownUp:lo,ArrowDownWideNarrow:J1,ArrowDownZA:Q1,ArrowLeft:fo,ArrowLeftFromLine:po,ArrowLeftRight:uo,ArrowLeftToLine:ko,ArrowRight:vo,ArrowRightFromLine:mo,ArrowRightLeft:Mo,ArrowRightToLine:go,ArrowUp:zo,ArrowUp01:xo,ArrowUp10:wo,ArrowUpAZ:Y1,ArrowUpDown:Lo,ArrowUpFromDot:bo,ArrowUpFromLine:Io,ArrowUpLeft:Co,ArrowUpNarrowWide:et,ArrowUpRight:qo,ArrowUpToLine:So,ArrowUpWideNarrow:Ao,ArrowUpZA:tt,ArrowsUpFromLine:Ho,Asterisk:Po,AtSign:jo,Atom:Vo,AudioLines:Ro,AudioWaveform:_o,Award:Do,Axe:To,Axis3d:at,Baby:Oo,Backpack:Fo,Badge:ar,BadgeAlert:Bo,BadgeCent:Eo,BadgeCheck:nt,BadgeDollarSign:Uo,BadgeEuro:No,BadgeHelp:Zo,BadgeIndianRupee:Go,BadgeInfo:$o,BadgeJapaneseYen:Wo,BadgeMinus:Ko,BadgePercent:Xo,BadgePlus:Jo,BadgePoundSterling:Qo,BadgeRussianRuble:Yo,BadgeSwissFranc:er,BadgeX:tr,BaggageClaim:nr,Ban:cr,Banana:or,Bandage:rr,Banknote:sr,BanknoteArrowDown:ir,BanknoteArrowUp:dr,BanknoteX:hr,Barcode:lr,Baseline:yr,Bath:pr,Battery:vr,BatteryCharging:ur,BatteryFull:kr,BatteryLow:fr,BatteryMedium:Mr,BatteryPlus:mr,BatteryWarning:gr,Beaker:xr,Bean:Lr,BeanOff:wr,Bed:Sr,BedDouble:br,BedSingle:Ir,Beef:Cr,Beer:Ar,BeerOff:qr,Bell:_r,BellDot:zr,BellElectric:Hr,BellMinus:Pr,BellOff:jr,BellPlus:Vr,BellRing:Rr,BetweenHorizontalEnd:ct,BetweenHorizontalStart:ot,BetweenVerticalEnd:Dr,BetweenVerticalStart:Tr,BicepsFlexed:Fr,Bike:Br,Binary:Or,Binoculars:Er,Biohazard:Ur,Bird:Nr,Bitcoin:Zr,Blend:$r,Blinds:Wr,Blocks:Gr,Bluetooth:Qr,BluetoothConnected:Kr,BluetoothOff:Xr,BluetoothSearching:Jr,Bold:Yr,Bolt:ei,Bomb:ti,Bone:ai,Book:Ii,BookA:ni,BookAudio:ci,BookCheck:oi,BookCopy:ri,BookDashed:rt,BookDown:ii,BookHeadphones:hi,BookHeart:di,BookImage:si,BookKey:li,BookLock:yi,BookMarked:pi,BookMinus:ui,BookOpen:Mi,BookOpenCheck:ki,BookOpenText:fi,BookPlus:mi,BookText:gi,BookType:vi,BookUp:wi,BookUp2:xi,BookUser:Li,BookX:bi,Bookmark:zi,BookmarkCheck:Ci,BookmarkMinus:Si,BookmarkPlus:qi,BookmarkX:Ai,BoomBox:Hi,Bot:Vi,BotMessageSquare:Pi,BotOff:ji,BowArrow:Ri,Box:_i,Boxes:Di,Braces:it,Brackets:Ti,Brain:Oi,BrainCircuit:Fi,BrainCog:Bi,BrickWall:Ui,BrickWallFire:Ei,Briefcase:Gi,BriefcaseBusiness:Ni,BriefcaseConveyorBelt:Zi,BriefcaseMedical:$i,BringToFront:Wi,Brush:Xi,BrushCleaning:Ki,Bubbles:Ji,Bug:ed,BugOff:Qi,BugPlay:Yi,Building:ad,Building2:td,Bus:cd,BusFront:nd,Cable:rd,CableCar:od,Cake:dd,CakeSlice:id,Calculator:hd,Calendar:kn,Calendar1:sd,CalendarArrowDown:ld,CalendarArrowUp:yd,CalendarCheck:ud,CalendarCheck2:pd,CalendarClock:kd,CalendarCog:fd,CalendarDays:Md,CalendarFold:md,CalendarHeart:gd,CalendarMinus:xd,CalendarMinus2:vd,CalendarOff:wd,CalendarPlus:bd,CalendarPlus2:Ld,CalendarRange:Id,CalendarSearch:Cd,CalendarSync:Sd,CalendarX:Ad,CalendarX2:qd,Camera:Hd,CameraOff:zd,Candy:Vd,CandyCane:Pd,CandyOff:jd,Cannabis:Rd,Captions:dt,CaptionsOff:_d,Car:Fd,CarFront:Dd,CarTaxiFront:Td,Caravan:Bd,Carrot:Od,CaseLower:Ed,CaseSensitive:Ud,CaseUpper:Nd,CassetteTape:Zd,Cast:$d,Castle:Gd,Cat:Wd,Cctv:Kd,ChartArea:ht,ChartBar:lt,ChartBarBig:st,ChartBarDecreasing:Xd,ChartBarIncreasing:Jd,ChartBarStacked:Qd,ChartCandlestick:yt,ChartColumn:kt,ChartColumnBig:pt,ChartColumnDecreasing:Yd,ChartColumnIncreasing:ut,ChartColumnStacked:eh,ChartGantt:th,ChartLine:ft,ChartNetwork:ah,ChartNoAxesColumn:mt,ChartNoAxesColumnDecreasing:nh,ChartNoAxesColumnIncreasing:Mt,ChartNoAxesCombined:ch,ChartNoAxesGantt:gt,ChartPie:vt,ChartScatter:xt,ChartSpline:oh,Check:dh,CheckCheck:rh,CheckLine:ih,ChefHat:hh,Cherry:sh,ChevronDown:lh,ChevronFirst:yh,ChevronLast:ph,ChevronLeft:uh,ChevronRight:kh,ChevronUp:fh,ChevronsDown:mh,ChevronsDownUp:Mh,ChevronsLeft:xh,ChevronsLeftRight:vh,ChevronsLeftRightEllipsis:gh,ChevronsRight:Lh,ChevronsRightLeft:wh,ChevronsUp:Ch,ChevronsUpDown:bh,Chrome:Ih,Church:Sh,Cigarette:Ah,CigaretteOff:qh,Circle:Oh,CircleAlert:wt,CircleArrowDown:Lt,CircleArrowLeft:bt,CircleArrowOutDownLeft:It,CircleArrowOutDownRight:Ct,CircleArrowOutUpLeft:St,CircleArrowOutUpRight:qt,CircleArrowRight:At,CircleArrowUp:zt,CircleCheck:Ht,CircleCheckBig:D1,CircleChevronDown:Pt,CircleChevronLeft:jt,CircleChevronRight:Vt,CircleChevronUp:Rt,CircleDashed:zh,CircleDivide:_t,CircleDollarSign:Hh,CircleDot:jh,CircleDotDashed:Ph,CircleEllipsis:Vh,CircleEqual:Rh,CircleFadingArrowUp:_h,CircleFadingPlus:Dh,CircleGauge:Dt,CircleHelp:Tt,CircleMinus:Ft,CircleOff:Th,CircleParking:Ot,CircleParkingOff:Bt,CirclePause:Et,CirclePercent:Ut,CirclePlay:Nt,CirclePlus:Zt,CirclePower:$t,CircleSlash:Fh,CircleSlash2:Gt,CircleSmall:Bh,CircleStop:Wt,CircleUser:Xt,CircleUserRound:Kt,CircleX:T1,CircuitBoard:Eh,Citrus:Uh,Clapperboard:Nh,Clipboard:Yh,ClipboardCheck:Zh,ClipboardCopy:$h,ClipboardList:Gh,ClipboardMinus:Wh,ClipboardPaste:Kh,ClipboardPen:Qt,ClipboardPenLine:Jt,ClipboardPlus:Xh,ClipboardType:Jh,ClipboardX:Qh,Clock:Ms,Clock1:es,Clock10:ts,Clock11:as,Clock12:ns,Clock2:cs,Clock3:os,Clock4:rs,Clock5:is,Clock6:ds,Clock7:hs,Clock8:ss,Clock9:ls,ClockAlert:ys,ClockArrowDown:ps,ClockArrowUp:us,ClockFading:ks,ClockPlus:fs,Cloud:Ps,CloudAlert:ms,CloudCog:gs,CloudDownload:Yt,CloudDrizzle:vs,CloudFog:xs,CloudHail:ws,CloudLightning:Ls,CloudMoon:Is,CloudMoonRain:bs,CloudOff:Cs,CloudRain:qs,CloudRainWind:Ss,CloudSnow:As,CloudSun:Hs,CloudSunRain:zs,CloudUpload:e2,Cloudy:js,Clover:Vs,Club:Rs,Code:_s,CodeXml:t2,Codepen:Ds,Codesandbox:Ts,Coffee:Fs,Cog:Bs,Coins:Os,Columns2:a2,Columns3:n2,Columns3Cog:s1,Columns4:Es,Combine:Us,Command:Ns,Compass:Zs,Component:$s,Computer:Gs,ConciergeBell:Ks,Cone:Ws,Construction:Xs,Contact:Js,ContactRound:c2,Container:Qs,Contrast:Ys,Cookie:el,CookingPot:tl,Copy:il,CopyCheck:al,CopyMinus:nl,CopyPlus:cl,CopySlash:ol,CopyX:rl,Copyleft:hl,Copyright:dl,CornerDownLeft:sl,CornerDownRight:ll,CornerLeftDown:yl,CornerLeftUp:pl,CornerRightDown:ul,CornerRightUp:kl,CornerUpLeft:fl,CornerUpRight:Ml,Cpu:ml,CreativeCommons:gl,CreditCard:vl,Croissant:xl,Crop:wl,Cross:Ll,Crosshair:bl,Crown:Il,Cuboid:Cl,CupSoda:Sl,Currency:ql,Cylinder:Al,Dam:Hl,Database:jl,DatabaseBackup:zl,DatabaseZap:Pl,DecimalsArrowLeft:Vl,DecimalsArrowRight:Rl,Delete:_l,Dessert:Tl,Diameter:Dl,Diamond:Ol,DiamondMinus:Fl,DiamondPercent:o2,DiamondPlus:Bl,Dice1:El,Dice2:Ul,Dice3:Nl,Dice4:Zl,Dice5:$l,Dice6:Gl,Dices:Wl,Diff:Kl,Disc:Yl,Disc2:Jl,Disc3:Xl,DiscAlbum:Ql,Divide:ey,Dna:ay,DnaOff:ty,Dock:ny,Dog:cy,DollarSign:oy,Donut:ry,DoorClosed:dy,DoorClosedLocked:iy,DoorOpen:hy,Dot:sy,Download:py,DraftingCompass:ly,Drama:yy,Dribbble:uy,Drill:ky,Droplet:My,DropletOff:fy,Droplets:gy,Drum:my,Drumstick:vy,Dumbbell:xy,Ear:Ly,EarOff:wy,Earth:r2,EarthLock:by,Eclipse:Cy,Egg:qy,EggFried:Iy,EggOff:Sy,Ellipsis:d2,EllipsisVertical:i2,Equal:Hy,EqualApproximately:Ay,EqualNot:zy,Eraser:Py,EthernetPort:jy,Euro:Vy,Expand:Ry,ExternalLink:Dy,Eye:Fy,EyeClosed:_y,EyeOff:Ty,Facebook:By,Factory:Oy,Fan:Ey,FastForward:Ny,Feather:Uy,Fence:Zy,FerrisWheel:$y,Figma:Gy,File:Up,FileArchive:Wy,FileAudio:Xy,FileAudio2:Ky,FileAxis3d:h2,FileBadge:Qy,FileBadge2:Jy,FileBox:Yy,FileChartColumn:p2,FileChartColumnIncreasing:s2,FileChartLine:l2,FileChartPie:y2,FileCheck:tp,FileCheck2:ep,FileClock:cp,FileCode:np,FileCode2:ap,FileCog:u2,FileDiff:op,FileDigit:ip,FileDown:rp,FileHeart:dp,FileImage:hp,FileInput:sp,FileJson:pp,FileJson2:lp,FileKey:up,FileKey2:yp,FileLock:fp,FileLock2:kp,FileMinus:mp,FileMinus2:Mp,FileMusic:gp,FileOutput:vp,FilePen:f2,FilePenLine:k2,FilePlus:Lp,FilePlus2:xp,FileQuestion:bp,FileScan:wp,FileSearch:Sp,FileSearch2:Ip,FileSliders:Cp,FileSpreadsheet:zp,FileStack:qp,FileSymlink:Ap,FileTerminal:Hp,FileText:fn,FileType:jp,FileType2:Pp,FileUp:Vp,FileUser:Rp,FileVideo:Dp,FileVideo2:_p,FileVolume:Fp,FileVolume2:Tp,FileWarning:Ep,FileX:Op,FileX2:Bp,Files:Np,Film:Zp,Fingerprint:$p,FireExtinguisher:Gp,Fish:Xp,FishOff:Wp,FishSymbol:Kp,Flag:eu,FlagOff:Jp,FlagTriangleLeft:Qp,FlagTriangleRight:Yp,Flame:au,FlameKindling:tu,Flashlight:cu,FlashlightOff:nu,FlaskConical:ru,FlaskConicalOff:ou,FlaskRound:iu,FlipHorizontal:hu,FlipHorizontal2:du,FlipVertical:su,FlipVertical2:lu,Flower:pu,Flower2:yu,Focus:uu,FoldHorizontal:ku,FoldVertical:fu,Folder:Nu,FolderArchive:Mu,FolderCheck:mu,FolderClock:gu,FolderClosed:vu,FolderCode:xu,FolderCog:M2,FolderDot:wu,FolderDown:Lu,FolderGit:Iu,FolderGit2:bu,FolderHeart:Cu,FolderInput:Su,FolderKanban:qu,FolderKey:Au,FolderLock:Hu,FolderMinus:Pu,FolderOpen:ju,FolderOpenDot:zu,FolderOutput:Vu,FolderPen:m2,FolderPlus:Ru,FolderRoot:_u,FolderSearch:Tu,FolderSearch2:Du,FolderSymlink:Fu,FolderSync:Bu,FolderTree:Eu,FolderUp:Ou,FolderX:Uu,Folders:Zu,Footprints:$u,Forklift:Gu,Forward:Wu,Frame:Ku,Framer:Xu,Frown:Ju,Fuel:Qu,Fullscreen:Yu,Funnel:v2,FunnelPlus:e4,FunnelX:g2,GalleryHorizontal:a4,GalleryHorizontalEnd:t4,GalleryThumbnails:n4,GalleryVertical:o4,GalleryVerticalEnd:c4,Gamepad:i4,Gamepad2:r4,Gauge:d4,Gavel:h4,Gem:s4,Ghost:l4,Gift:y4,GitBranch:u4,GitBranchPlus:p4,GitCommitHorizontal:x2,GitCommitVertical:k4,GitCompare:M4,GitCompareArrows:f4,GitFork:m4,GitGraph:g4,GitMerge:v4,GitPullRequest:C4,GitPullRequestArrow:x4,GitPullRequestClosed:w4,GitPullRequestCreate:I4,GitPullRequestCreateArrow:L4,GitPullRequestDraft:b4,Github:S4,Gitlab:q4,GlassWater:A4,Glasses:z4,Globe:P4,GlobeLock:H4,Goal:j4,Gpu:V4,Grab:R4,GraduationCap:D4,Grape:_4,Grid2x2:I2,Grid2x2Check:w2,Grid2x2Plus:L2,Grid2x2X:b2,Grid3x3:l1,Grip:B4,GripHorizontal:T4,GripVertical:F4,Group:O4,Guitar:E4,Ham:U4,Hamburger:N4,Hammer:Z4,Hand:X4,HandCoins:$4,HandHeart:G4,HandHelping:C2,HandMetal:W4,HandPlatter:K4,Handshake:J4,HardDrive:ek,HardDriveDownload:Y4,HardDriveUpload:Q4,HardHat:tk,Hash:ak,Haze:nk,HdmiPort:ck,Heading:lk,Heading1:ok,Heading2:rk,Heading3:ik,Heading4:dk,Heading5:hk,Heading6:sk,HeadphoneOff:yk,Headphones:pk,Headset:uk,Heart:xk,HeartCrack:fk,HeartHandshake:kk,HeartMinus:Mk,HeartOff:mk,HeartPlus:gk,HeartPulse:vk,Heater:wk,Hexagon:Lk,Highlighter:bk,History:Ik,Hop:Sk,HopOff:Ck,Hospital:qk,Hotel:Ak,Hourglass:zk,House:S2,HousePlug:Hk,HousePlus:Pk,HouseWifi:jk,IceCreamBowl:q2,IceCreamCone:A2,IdCard:Vk,Image:Ek,ImageDown:Rk,ImageMinus:_k,ImageOff:Dk,ImagePlay:Tk,ImagePlus:Fk,ImageUp:Bk,ImageUpscale:Ok,Images:Uk,Import:Nk,Inbox:Zk,IndentDecrease:z2,IndentIncrease:H2,IndianRupee:$k,Infinity:Gk,Info:Wk,InspectionPanel:Xk,Instagram:Kk,Italic:Jk,IterationCcw:Qk,IterationCw:Yk,JapaneseYen:e5,Joystick:a5,Kanban:t5,Key:o5,KeyRound:n5,KeySquare:c5,Keyboard:d5,KeyboardMusic:r5,KeyboardOff:i5,Lamp:u5,LampCeiling:h5,LampDesk:s5,LampFloor:l5,LampWallDown:y5,LampWallUp:p5,LandPlot:k5,Landmark:f5,Languages:M5,Laptop:g5,LaptopMinimal:P2,LaptopMinimalCheck:m5,Lasso:x5,LassoSelect:v5,Laugh:w5,Layers:j2,Layers2:L5,LayoutDashboard:b5,LayoutGrid:I5,LayoutList:C5,LayoutPanelLeft:q5,LayoutPanelTop:S5,LayoutTemplate:A5,Leaf:z5,LeafyGreen:P5,Lectern:H5,LetterText:j5,Library:_5,LibraryBig:V5,LifeBuoy:R5,Ligature:D5,Lightbulb:F5,LightbulbOff:T5,Link:E5,Link2:O5,Link2Off:B5,Linkedin:U5,List:r3,ListCheck:N5,ListChecks:Z5,ListCollapse:$5,ListEnd:G5,ListFilter:X5,ListFilterPlus:W5,ListMinus:K5,ListMusic:J5,ListOrdered:Y5,ListPlus:Q5,ListRestart:e3,ListStart:t3,ListTodo:a3,ListTree:c3,ListVideo:n3,ListX:o3,Loader:d3,LoaderCircle:V2,LoaderPinwheel:i3,Locate:l3,LocateFixed:h3,LocateOff:s3,LocationEdit:y3,Lock:u3,LockKeyhole:p3,LockKeyholeOpen:R2,LockOpen:_2,LogIn:k3,LogOut:f3,Logs:M3,Lollipop:m3,Luggage:g3,Magnet:v3,Mail:z3,MailCheck:x3,MailMinus:w3,MailOpen:L3,MailPlus:b3,MailQuestion:I3,MailSearch:C3,MailWarning:S3,MailX:q3,Mailbox:A3,Mails:H3,Map:Z3,MapPin:E3,MapPinCheck:j3,MapPinCheckInside:P3,MapPinHouse:V3,MapPinMinus:_3,MapPinMinusInside:R3,MapPinOff:D3,MapPinPlus:B3,MapPinPlusInside:T3,MapPinX:O3,MapPinXInside:F3,MapPinned:U3,MapPlus:N3,Mars:G3,MarsStroke:$3,Martini:W3,Maximize:X3,Maximize2:K3,Medal:J3,Megaphone:e6,MegaphoneOff:Q3,Meh:Y3,MemoryStick:t6,Menu:Mn,Merge:a6,MessageCircle:p6,MessageCircleCode:n6,MessageCircleDashed:o6,MessageCircleHeart:c6,MessageCircleMore:r6,MessageCircleOff:i6,MessageCirclePlus:d6,MessageCircleQuestion:h6,MessageCircleReply:s6,MessageCircleWarning:l6,MessageCircleX:y6,MessageSquare:A6,MessageSquareCode:u6,MessageSquareDashed:k6,MessageSquareDiff:f6,MessageSquareDot:M6,MessageSquareHeart:m6,MessageSquareLock:g6,MessageSquareMore:v6,MessageSquareOff:x6,MessageSquarePlus:w6,MessageSquareQuote:L6,MessageSquareReply:b6,MessageSquareShare:C6,MessageSquareText:I6,MessageSquareWarning:S6,MessageSquareX:q6,MessagesSquare:z6,Mic:P6,MicOff:H6,MicVocal:D2,Microchip:j6,Microscope:V6,Microwave:R6,Milestone:_6,Milk:T6,MilkOff:D6,Minimize:B6,Minimize2:F6,Minus:O6,Monitor:e8,MonitorCheck:E6,MonitorCog:U6,MonitorDot:N6,MonitorDown:Z6,MonitorOff:$6,MonitorPause:G6,MonitorPlay:W6,MonitorSmartphone:K6,MonitorSpeaker:X6,MonitorStop:J6,MonitorUp:Q6,MonitorX:Y6,Moon:t8,MoonStar:a8,Mountain:c8,MountainSnow:n8,Mouse:s8,MouseOff:o8,MousePointer:h8,MousePointer2:r8,MousePointerBan:i8,MousePointerClick:d8,Move:L8,Move3d:T2,MoveDiagonal:y8,MoveDiagonal2:l8,MoveDown:k8,MoveDownLeft:p8,MoveDownRight:u8,MoveHorizontal:f8,MoveLeft:M8,MoveRight:m8,MoveUp:x8,MoveUpLeft:g8,MoveUpRight:v8,MoveVertical:w8,Music:S8,Music2:b8,Music3:I8,Music4:C8,Navigation:P8,Navigation2:A8,Navigation2Off:q8,NavigationOff:z8,Network:H8,Newspaper:j8,Nfc:V8,NonBinary:R8,Notebook:F8,NotebookPen:_8,NotebookTabs:D8,NotebookText:T8,NotepadText:O8,NotepadTextDashed:B8,Nut:U8,NutOff:E8,Octagon:Z8,OctagonAlert:F2,OctagonMinus:N8,OctagonPause:B2,OctagonX:O2,Omega:$8,Option:G8,Orbit:W8,Origami:K8,Package:n7,Package2:X8,PackageCheck:J8,PackageMinus:Q8,PackageOpen:Y8,PackagePlus:e7,PackageSearch:t7,PackageX:a7,PaintBucket:c7,PaintRoller:o7,Paintbrush:r7,PaintbrushVertical:E2,Palette:i7,Panda:d7,PanelBottom:l7,PanelBottomClose:h7,PanelBottomDashed:U2,PanelBottomOpen:s7,PanelLeft:G2,PanelLeftClose:N2,PanelLeftDashed:Z2,PanelLeftOpen:$2,PanelRight:p7,PanelRightClose:y7,PanelRightDashed:W2,PanelRightOpen:u7,PanelTop:M7,PanelTopClose:k7,PanelTopDashed:K2,PanelTopOpen:f7,PanelsLeftBottom:m7,PanelsRightBottom:g7,PanelsTopLeft:X2,Paperclip:v7,Parentheses:x7,ParkingMeter:w7,PartyPopper:L7,Pause:b7,PawPrint:I7,PcCase:C7,Pen:Q2,PenLine:J2,PenOff:S7,PenTool:q7,Pencil:P7,PencilLine:A7,PencilOff:z7,PencilRuler:H7,Pentagon:j7,Percent:V7,PersonStanding:R7,PhilippinePeso:_7,Phone:U7,PhoneCall:D7,PhoneForwarded:T7,PhoneIncoming:F7,PhoneMissed:B7,PhoneOff:O7,PhoneOutgoing:E7,Pi:N7,Piano:Z7,Pickaxe:$7,PictureInPicture:W7,PictureInPicture2:G7,PiggyBank:K7,Pilcrow:Q7,PilcrowLeft:X7,PilcrowRight:J7,Pill:ef,PillBottle:Y7,Pin:tf,PinOff:cf,Pipette:af,Pizza:nf,Plane:df,PlaneLanding:of,PlaneTakeoff:rf,Play:hf,Plug:lf,Plug2:sf,PlugZap:Y2,Plus:yf,Pocket:uf,PocketKnife:pf,Podcast:kf,Pointer:Mf,PointerOff:ff,Popcorn:mf,Popsicle:gf,PoundSterling:xf,Power:wf,PowerOff:vf,Presentation:Lf,Printer:If,PrinterCheck:bf,Projector:Cf,Proportions:Sf,Puzzle:qf,Pyramid:Af,QrCode:zf,Quote:Hf,Rabbit:Pf,Radar:jf,Radiation:Vf,Radical:Rf,Radio:Tf,RadioReceiver:_f,RadioTower:Df,Radius:Ff,RailSymbol:Bf,Rainbow:Of,Rat:Ef,Ratio:Uf,Receipt:Qf,ReceiptCent:Nf,ReceiptEuro:Zf,ReceiptIndianRupee:$f,ReceiptJapaneseYen:Gf,ReceiptPoundSterling:Wf,ReceiptRussianRuble:Kf,ReceiptSwissFranc:Xf,ReceiptText:Jf,RectangleEllipsis:ea,RectangleGoggles:Yf,RectangleHorizontal:e9,RectangleVertical:t9,Recycle:a9,Redo:o9,Redo2:n9,RedoDot:c9,RefreshCcw:i9,RefreshCcwDot:r9,RefreshCw:h9,RefreshCwOff:d9,Refrigerator:s9,Regex:l9,RemoveFormatting:y9,Repeat:k9,Repeat1:p9,Repeat2:u9,Replace:M9,ReplaceAll:f9,Reply:g9,ReplyAll:m9,Rewind:v9,Ribbon:x9,Rocket:w9,RockingChair:L9,RollerCoaster:b9,Rotate3d:ta,RotateCcw:S9,RotateCcwKey:I9,RotateCcwSquare:C9,RotateCw:A9,RotateCwSquare:q9,Route:H9,RouteOff:z9,Router:P9,Rows2:aa,Rows3:na,Rows4:j9,Rss:V9,Ruler:D9,RulerDimensionLine:R9,RussianRuble:_9,Sailboat:T9,Salad:F9,Sandwich:B9,Satellite:E9,SatelliteDish:O9,SaudiRiyal:U9,Save:$9,SaveAll:N9,SaveOff:Z9,Scale:G9,Scale3d:ca,Scaling:W9,Scan:nM,ScanBarcode:K9,ScanEye:X9,ScanFace:J9,ScanHeart:Q9,ScanLine:Y9,ScanQrCode:eM,ScanSearch:tM,ScanText:aM,School:rM,Scissors:oM,ScissorsLineDashed:cM,ScreenShare:dM,ScreenShareOff:iM,Scroll:sM,ScrollText:hM,Search:kM,SearchCheck:yM,SearchCode:lM,SearchSlash:pM,SearchX:uM,Section:fM,Send:mM,SendHorizontal:oa,SendToBack:MM,SeparatorHorizontal:gM,SeparatorVertical:vM,Server:bM,ServerCog:xM,ServerCrash:wM,ServerOff:LM,Settings:CM,Settings2:IM,Shapes:SM,Share:AM,Share2:qM,Sheet:zM,Shell:HM,Shield:EM,ShieldAlert:PM,ShieldBan:jM,ShieldCheck:VM,ShieldEllipsis:RM,ShieldHalf:_M,ShieldMinus:DM,ShieldOff:TM,ShieldPlus:FM,ShieldQuestion:BM,ShieldUser:OM,ShieldX:ra,Ship:NM,ShipWheel:UM,Shirt:ZM,ShoppingBag:$M,ShoppingBasket:GM,ShoppingCart:WM,Shovel:KM,ShowerHead:XM,Shredder:JM,Shrimp:QM,Shrink:YM,Shrub:em,Shuffle:tm,Sigma:am,Signal:im,SignalHigh:nm,SignalLow:cm,SignalMedium:om,SignalZero:rm,Signature:dm,Signpost:sm,SignpostBig:hm,Siren:lm,SkipBack:ym,SkipForward:pm,Skull:um,Slack:km,Slash:fm,Slice:Mm,SlidersHorizontal:mm,SlidersVertical:ia,Smartphone:xm,SmartphoneCharging:gm,SmartphoneNfc:vm,Smile:Lm,SmilePlus:wm,Snail:bm,Snowflake:Im,SoapDispenserDroplet:Cm,Sofa:Sm,Soup:qm,Space:Am,Spade:zm,Sparkle:Pm,Sparkles:da,Speaker:Hm,Speech:jm,SpellCheck:Vm,SpellCheck2:Rm,Spline:Dm,SplinePointer:_m,Split:Tm,SprayCan:Fm,Sprout:Bm,Square:Wm,SquareActivity:ha,SquareArrowDown:ya,SquareArrowDownLeft:la,SquareArrowDownRight:sa,SquareArrowLeft:pa,SquareArrowOutDownLeft:ua,SquareArrowOutDownRight:ka,SquareArrowOutUpLeft:fa,SquareArrowOutUpRight:Ma,SquareArrowRight:ma,SquareArrowUp:xa,SquareArrowUpLeft:ga,SquareArrowUpRight:va,SquareAsterisk:wa,SquareBottomDashedScissors:La,SquareChartGantt:y1,SquareCheck:Ia,SquareCheckBig:ba,SquareChevronDown:Ca,SquareChevronLeft:Sa,SquareChevronRight:qa,SquareChevronUp:Aa,SquareCode:za,SquareDashed:ja,SquareDashedBottom:Em,SquareDashedBottomCode:Om,SquareDashedKanban:Ha,SquareDashedMousePointer:Pa,SquareDivide:Va,SquareDot:Ra,SquareEqual:_a,SquareFunction:Da,SquareKanban:Ta,SquareLibrary:Fa,SquareM:Ba,SquareMenu:Oa,SquareMinus:Ea,SquareMousePointer:Ua,SquareParking:Za,SquareParkingOff:Na,SquarePen:Oe,SquarePercent:$a,SquarePi:Ga,SquarePilcrow:Wa,SquarePlay:Ka,SquarePlus:Xa,SquarePower:Ja,SquareRadical:Um,SquareRoundCorner:Nm,SquareScissors:Qa,SquareSigma:Ya,SquareSlash:e0,SquareSplitHorizontal:t0,SquareSplitVertical:a0,SquareSquare:Zm,SquareStack:$m,SquareTerminal:n0,SquareUser:o0,SquareUserRound:c0,SquareX:r0,SquaresExclude:Gm,SquaresIntersect:Km,SquaresSubtract:Xm,SquaresUnite:Jm,Squircle:Qm,Squirrel:Ym,Stamp:eg,Star:ng,StarHalf:tg,StarOff:ag,StepBack:cg,StepForward:og,Stethoscope:rg,Sticker:ig,StickyNote:dg,Store:hg,StretchHorizontal:sg,StretchVertical:lg,Strikethrough:yg,Subscript:pg,Sun:mg,SunDim:ug,SunMedium:kg,SunMoon:fg,SunSnow:Mg,Sunrise:gg,Sunset:vg,Superscript:xg,SwatchBook:wg,SwissFranc:Lg,SwitchCamera:bg,Sword:Ig,Swords:Cg,Syringe:Sg,Table:Dg,Table2:qg,TableCellsMerge:Ag,TableCellsSplit:zg,TableColumnsSplit:Hg,TableOfContents:Pg,TableProperties:jg,TableRowsSplit:Vg,Tablet:_g,TabletSmartphone:Rg,Tablets:Tg,Tag:Fg,Tags:Bg,Tally1:Og,Tally2:Eg,Tally3:Ug,Tally4:Ng,Tally5:Zg,Tangent:$g,Target:Gg,Telescope:Wg,Tent:Xg,TentTree:Kg,Terminal:Jg,TestTube:Qg,TestTubeDiagonal:i0,TestTubes:Yg,Text:cv,TextCursor:tv,TextCursorInput:ev,TextQuote:av,TextSearch:nv,TextSelect:d0,Theater:ov,Thermometer:dv,ThermometerSnowflake:rv,ThermometerSun:iv,ThumbsDown:hv,ThumbsUp:sv,Ticket:Mv,TicketCheck:lv,TicketMinus:yv,TicketPercent:pv,TicketPlus:uv,TicketSlash:fv,TicketX:kv,Tickets:gv,TicketsPlane:mv,Timer:wv,TimerOff:vv,TimerReset:xv,ToggleLeft:Lv,ToggleRight:bv,Toilet:Iv,Tornado:Cv,Torus:Sv,Touchpad:Av,TouchpadOff:qv,TowerControl:zv,ToyBrick:Hv,Tractor:Pv,TrafficCone:jv,TrainFront:Rv,TrainFrontTunnel:Vv,TrainTrack:_v,TramFront:h0,Transgender:Dv,Trash:Fv,Trash2:Tv,TreeDeciduous:Bv,TreePalm:s0,TreePine:Ov,Trees:Ev,Trello:Uv,TrendingDown:Nv,TrendingUp:$v,TrendingUpDown:Zv,Triangle:Kv,TriangleAlert:l0,TriangleDashed:Gv,TriangleRight:Wv,Trophy:Xv,Truck:Qv,TruckElectric:Jv,Turtle:Yv,Tv:tx,TvMinimal:y0,TvMinimalPlay:ex,Twitch:ax,Twitter:nx,Type:ox,TypeOutline:cx,Umbrella:ix,UmbrellaOff:rx,Underline:dx,Undo:lx,Undo2:hx,UndoDot:sx,UnfoldHorizontal:yx,UnfoldVertical:px,Ungroup:ux,University:p0,Unlink:fx,Unlink2:kx,Unplug:Mx,Upload:mx,Usb:gx,User:zx,UserCheck:vx,UserCog:xx,UserLock:wx,UserMinus:Lx,UserPen:bx,UserPlus:Ix,UserRound:g0,UserRoundCheck:u0,UserRoundCog:k0,UserRoundMinus:f0,UserRoundPen:Cx,UserRoundPlus:M0,UserRoundSearch:Sx,UserRoundX:m0,UserSearch:qx,UserX:Ax,Users:Hx,UsersRound:v0,Utensils:w0,UtensilsCrossed:x0,UtilityPole:Px,Variable:jx,Vault:Vx,Vegan:Rx,VenetianMask:Dx,Venus:Tx,VenusAndMars:_x,Vibrate:Ex,VibrateOff:Fx,Video:Ox,VideoOff:Bx,Videotape:Ux,View:Nx,Voicemail:Zx,Volleyball:$x,Volume:Qx,Volume1:Gx,Volume2:Wx,VolumeOff:Kx,VolumeX:Xx,Vote:Jx,Wallet:ew,WalletCards:Yx,WalletMinimal:L0,Wallpaper:tw,Wand:aw,WandSparkles:b0,Warehouse:nw,WashingMachine:cw,Watch:ow,Waves:iw,WavesLadder:rw,Waypoints:dw,Webcam:hw,Webhook:lw,WebhookOff:sw,Weight:yw,Wheat:uw,WheatOff:pw,WholeWord:kw,Wifi:ww,WifiHigh:fw,WifiLow:Mw,WifiOff:mw,WifiPen:gw,WifiZero:vw,Wind:Lw,WindArrowDown:xw,Wine:Sw,WineOff:bw,Workflow:Iw,Worm:Cw,WrapText:qw,Wrench:Aw,X:zw,Youtube:Hw,Zap:jw,ZapOff:Pw,ZoomIn:Rw,ZoomOut:Vw},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Wn,AArrowDownIcon:Wn,AArrowUp:Kn,AArrowUpIcon:Kn,ALargeSmall:Xn,ALargeSmallIcon:Xn,Accessibility:Jn,AccessibilityIcon:Jn,Activity:Qn,ActivityIcon:Qn,ActivitySquare:ha,ActivitySquareIcon:ha,AirVent:Yn,AirVentIcon:Yn,Airplay:ec,AirplayIcon:ec,AlarmCheck:G1,AlarmCheckIcon:G1,AlarmClock:ac,AlarmClockCheck:G1,AlarmClockCheckIcon:G1,AlarmClockIcon:ac,AlarmClockMinus:W1,AlarmClockMinusIcon:W1,AlarmClockOff:tc,AlarmClockOffIcon:tc,AlarmClockPlus:K1,AlarmClockPlusIcon:K1,AlarmMinus:W1,AlarmMinusIcon:W1,AlarmPlus:K1,AlarmPlusIcon:K1,AlarmSmoke:nc,AlarmSmokeIcon:nc,Album:cc,AlbumIcon:cc,AlertCircle:wt,AlertCircleIcon:wt,AlertOctagon:F2,AlertOctagonIcon:F2,AlertTriangle:l0,AlertTriangleIcon:l0,AlignCenter:ic,AlignCenterHorizontal:oc,AlignCenterHorizontalIcon:oc,AlignCenterIcon:ic,AlignCenterVertical:rc,AlignCenterVerticalIcon:rc,AlignEndHorizontal:dc,AlignEndHorizontalIcon:dc,AlignEndVertical:hc,AlignEndVerticalIcon:hc,AlignHorizontalDistributeCenter:sc,AlignHorizontalDistributeCenterIcon:sc,AlignHorizontalDistributeEnd:lc,AlignHorizontalDistributeEndIcon:lc,AlignHorizontalDistributeStart:yc,AlignHorizontalDistributeStartIcon:yc,AlignHorizontalJustifyCenter:uc,AlignHorizontalJustifyCenterIcon:uc,AlignHorizontalJustifyEnd:pc,AlignHorizontalJustifyEndIcon:pc,AlignHorizontalJustifyStart:kc,AlignHorizontalJustifyStartIcon:kc,AlignHorizontalSpaceAround:fc,AlignHorizontalSpaceAroundIcon:fc,AlignHorizontalSpaceBetween:Mc,AlignHorizontalSpaceBetweenIcon:Mc,AlignJustify:mc,AlignJustifyIcon:mc,AlignLeft:gc,AlignLeftIcon:gc,AlignRight:Lc,AlignRightIcon:Lc,AlignStartHorizontal:vc,AlignStartHorizontalIcon:vc,AlignStartVertical:xc,AlignStartVerticalIcon:xc,AlignVerticalDistributeCenter:wc,AlignVerticalDistributeCenterIcon:wc,AlignVerticalDistributeEnd:bc,AlignVerticalDistributeEndIcon:bc,AlignVerticalDistributeStart:Ic,AlignVerticalDistributeStartIcon:Ic,AlignVerticalJustifyCenter:Cc,AlignVerticalJustifyCenterIcon:Cc,AlignVerticalJustifyEnd:Sc,AlignVerticalJustifyEndIcon:Sc,AlignVerticalJustifyStart:qc,AlignVerticalJustifyStartIcon:qc,AlignVerticalSpaceAround:Ac,AlignVerticalSpaceAroundIcon:Ac,AlignVerticalSpaceBetween:zc,AlignVerticalSpaceBetweenIcon:zc,Ambulance:Hc,AmbulanceIcon:Hc,Ampersand:Pc,AmpersandIcon:Pc,Ampersands:jc,AmpersandsIcon:jc,Amphora:Rc,AmphoraIcon:Rc,Anchor:Vc,AnchorIcon:Vc,Angry:_c,AngryIcon:_c,Annoyed:Tc,AnnoyedIcon:Tc,Antenna:Dc,AntennaIcon:Dc,Anvil:Fc,AnvilIcon:Fc,Aperture:Bc,ApertureIcon:Bc,AppWindow:Ec,AppWindowIcon:Ec,AppWindowMac:Oc,AppWindowMacIcon:Oc,Apple:Uc,AppleIcon:Uc,Archive:$c,ArchiveIcon:$c,ArchiveRestore:Nc,ArchiveRestoreIcon:Nc,ArchiveX:Zc,ArchiveXIcon:Zc,AreaChart:ht,AreaChartIcon:ht,Armchair:Gc,ArmchairIcon:Gc,ArrowBigDown:Wc,ArrowBigDownDash:Kc,ArrowBigDownDashIcon:Kc,ArrowBigDownIcon:Wc,ArrowBigLeft:Jc,ArrowBigLeftDash:Xc,ArrowBigLeftDashIcon:Xc,ArrowBigLeftIcon:Jc,ArrowBigRight:Yc,ArrowBigRightDash:Qc,ArrowBigRightDashIcon:Qc,ArrowBigRightIcon:Yc,ArrowBigUp:to,ArrowBigUpDash:eo,ArrowBigUpDashIcon:eo,ArrowBigUpIcon:to,ArrowDown:yo,ArrowDown01:ao,ArrowDown01Icon:ao,ArrowDown10:no,ArrowDown10Icon:no,ArrowDownAZ:X1,ArrowDownAZIcon:X1,ArrowDownAz:X1,ArrowDownAzIcon:X1,ArrowDownCircle:Lt,ArrowDownCircleIcon:Lt,ArrowDownFromLine:co,ArrowDownFromLineIcon:co,ArrowDownIcon:yo,ArrowDownLeft:oo,ArrowDownLeftFromCircle:It,ArrowDownLeftFromCircleIcon:It,ArrowDownLeftFromSquare:ua,ArrowDownLeftFromSquareIcon:ua,ArrowDownLeftIcon:oo,ArrowDownLeftSquare:la,ArrowDownLeftSquareIcon:la,ArrowDownNarrowWide:ro,ArrowDownNarrowWideIcon:ro,ArrowDownRight:io,ArrowDownRightFromCircle:Ct,ArrowDownRightFromCircleIcon:Ct,ArrowDownRightFromSquare:ka,ArrowDownRightFromSquareIcon:ka,ArrowDownRightIcon:io,ArrowDownRightSquare:sa,ArrowDownRightSquareIcon:sa,ArrowDownSquare:ya,ArrowDownSquareIcon:ya,ArrowDownToDot:ho,ArrowDownToDotIcon:ho,ArrowDownToLine:so,ArrowDownToLineIcon:so,ArrowDownUp:lo,ArrowDownUpIcon:lo,ArrowDownWideNarrow:J1,ArrowDownWideNarrowIcon:J1,ArrowDownZA:Q1,ArrowDownZAIcon:Q1,ArrowDownZa:Q1,ArrowDownZaIcon:Q1,ArrowLeft:fo,ArrowLeftCircle:bt,ArrowLeftCircleIcon:bt,ArrowLeftFromLine:po,ArrowLeftFromLineIcon:po,ArrowLeftIcon:fo,ArrowLeftRight:uo,ArrowLeftRightIcon:uo,ArrowLeftSquare:pa,ArrowLeftSquareIcon:pa,ArrowLeftToLine:ko,ArrowLeftToLineIcon:ko,ArrowRight:vo,ArrowRightCircle:At,ArrowRightCircleIcon:At,ArrowRightFromLine:mo,ArrowRightFromLineIcon:mo,ArrowRightIcon:vo,ArrowRightLeft:Mo,ArrowRightLeftIcon:Mo,ArrowRightSquare:ma,ArrowRightSquareIcon:ma,ArrowRightToLine:go,ArrowRightToLineIcon:go,ArrowUp:zo,ArrowUp01:xo,ArrowUp01Icon:xo,ArrowUp10:wo,ArrowUp10Icon:wo,ArrowUpAZ:Y1,ArrowUpAZIcon:Y1,ArrowUpAz:Y1,ArrowUpAzIcon:Y1,ArrowUpCircle:zt,ArrowUpCircleIcon:zt,ArrowUpDown:Lo,ArrowUpDownIcon:Lo,ArrowUpFromDot:bo,ArrowUpFromDotIcon:bo,ArrowUpFromLine:Io,ArrowUpFromLineIcon:Io,ArrowUpIcon:zo,ArrowUpLeft:Co,ArrowUpLeftFromCircle:St,ArrowUpLeftFromCircleIcon:St,ArrowUpLeftFromSquare:fa,ArrowUpLeftFromSquareIcon:fa,ArrowUpLeftIcon:Co,ArrowUpLeftSquare:ga,ArrowUpLeftSquareIcon:ga,ArrowUpNarrowWide:et,ArrowUpNarrowWideIcon:et,ArrowUpRight:qo,ArrowUpRightFromCircle:qt,ArrowUpRightFromCircleIcon:qt,ArrowUpRightFromSquare:Ma,ArrowUpRightFromSquareIcon:Ma,ArrowUpRightIcon:qo,ArrowUpRightSquare:va,ArrowUpRightSquareIcon:va,ArrowUpSquare:xa,ArrowUpSquareIcon:xa,ArrowUpToLine:So,ArrowUpToLineIcon:So,ArrowUpWideNarrow:Ao,ArrowUpWideNarrowIcon:Ao,ArrowUpZA:tt,ArrowUpZAIcon:tt,ArrowUpZa:tt,ArrowUpZaIcon:tt,ArrowsUpFromLine:Ho,ArrowsUpFromLineIcon:Ho,Asterisk:Po,AsteriskIcon:Po,AsteriskSquare:wa,AsteriskSquareIcon:wa,AtSign:jo,AtSignIcon:jo,Atom:Vo,AtomIcon:Vo,AudioLines:Ro,AudioLinesIcon:Ro,AudioWaveform:_o,AudioWaveformIcon:_o,Award:Do,AwardIcon:Do,Axe:To,AxeIcon:To,Axis3D:at,Axis3DIcon:at,Axis3d:at,Axis3dIcon:at,Baby:Oo,BabyIcon:Oo,Backpack:Fo,BackpackIcon:Fo,Badge:ar,BadgeAlert:Bo,BadgeAlertIcon:Bo,BadgeCent:Eo,BadgeCentIcon:Eo,BadgeCheck:nt,BadgeCheckIcon:nt,BadgeDollarSign:Uo,BadgeDollarSignIcon:Uo,BadgeEuro:No,BadgeEuroIcon:No,BadgeHelp:Zo,BadgeHelpIcon:Zo,BadgeIcon:ar,BadgeIndianRupee:Go,BadgeIndianRupeeIcon:Go,BadgeInfo:$o,BadgeInfoIcon:$o,BadgeJapaneseYen:Wo,BadgeJapaneseYenIcon:Wo,BadgeMinus:Ko,BadgeMinusIcon:Ko,BadgePercent:Xo,BadgePercentIcon:Xo,BadgePlus:Jo,BadgePlusIcon:Jo,BadgePoundSterling:Qo,BadgePoundSterlingIcon:Qo,BadgeRussianRuble:Yo,BadgeRussianRubleIcon:Yo,BadgeSwissFranc:er,BadgeSwissFrancIcon:er,BadgeX:tr,BadgeXIcon:tr,BaggageClaim:nr,BaggageClaimIcon:nr,Ban:cr,BanIcon:cr,Banana:or,BananaIcon:or,Bandage:rr,BandageIcon:rr,Banknote:sr,BanknoteArrowDown:ir,BanknoteArrowDownIcon:ir,BanknoteArrowUp:dr,BanknoteArrowUpIcon:dr,BanknoteIcon:sr,BanknoteX:hr,BanknoteXIcon:hr,BarChart:Mt,BarChart2:mt,BarChart2Icon:mt,BarChart3:kt,BarChart3Icon:kt,BarChart4:ut,BarChart4Icon:ut,BarChartBig:pt,BarChartBigIcon:pt,BarChartHorizontal:lt,BarChartHorizontalBig:st,BarChartHorizontalBigIcon:st,BarChartHorizontalIcon:lt,BarChartIcon:Mt,Barcode:lr,BarcodeIcon:lr,Baseline:yr,BaselineIcon:yr,Bath:pr,BathIcon:pr,Battery:vr,BatteryCharging:ur,BatteryChargingIcon:ur,BatteryFull:kr,BatteryFullIcon:kr,BatteryIcon:vr,BatteryLow:fr,BatteryLowIcon:fr,BatteryMedium:Mr,BatteryMediumIcon:Mr,BatteryPlus:mr,BatteryPlusIcon:mr,BatteryWarning:gr,BatteryWarningIcon:gr,Beaker:xr,BeakerIcon:xr,Bean:Lr,BeanIcon:Lr,BeanOff:wr,BeanOffIcon:wr,Bed:Sr,BedDouble:br,BedDoubleIcon:br,BedIcon:Sr,BedSingle:Ir,BedSingleIcon:Ir,Beef:Cr,BeefIcon:Cr,Beer:Ar,BeerIcon:Ar,BeerOff:qr,BeerOffIcon:qr,Bell:_r,BellDot:zr,BellDotIcon:zr,BellElectric:Hr,BellElectricIcon:Hr,BellIcon:_r,BellMinus:Pr,BellMinusIcon:Pr,BellOff:jr,BellOffIcon:jr,BellPlus:Vr,BellPlusIcon:Vr,BellRing:Rr,BellRingIcon:Rr,BetweenHorizonalEnd:ct,BetweenHorizonalEndIcon:ct,BetweenHorizonalStart:ot,BetweenHorizonalStartIcon:ot,BetweenHorizontalEnd:ct,BetweenHorizontalEndIcon:ct,BetweenHorizontalStart:ot,BetweenHorizontalStartIcon:ot,BetweenVerticalEnd:Dr,BetweenVerticalEndIcon:Dr,BetweenVerticalStart:Tr,BetweenVerticalStartIcon:Tr,BicepsFlexed:Fr,BicepsFlexedIcon:Fr,Bike:Br,BikeIcon:Br,Binary:Or,BinaryIcon:Or,Binoculars:Er,BinocularsIcon:Er,Biohazard:Ur,BiohazardIcon:Ur,Bird:Nr,BirdIcon:Nr,Bitcoin:Zr,BitcoinIcon:Zr,Blend:$r,BlendIcon:$r,Blinds:Wr,BlindsIcon:Wr,Blocks:Gr,BlocksIcon:Gr,Bluetooth:Qr,BluetoothConnected:Kr,BluetoothConnectedIcon:Kr,BluetoothIcon:Qr,BluetoothOff:Xr,BluetoothOffIcon:Xr,BluetoothSearching:Jr,BluetoothSearchingIcon:Jr,Bold:Yr,BoldIcon:Yr,Bolt:ei,BoltIcon:ei,Bomb:ti,BombIcon:ti,Bone:ai,BoneIcon:ai,Book:Ii,BookA:ni,BookAIcon:ni,BookAudio:ci,BookAudioIcon:ci,BookCheck:oi,BookCheckIcon:oi,BookCopy:ri,BookCopyIcon:ri,BookDashed:rt,BookDashedIcon:rt,BookDown:ii,BookDownIcon:ii,BookHeadphones:hi,BookHeadphonesIcon:hi,BookHeart:di,BookHeartIcon:di,BookIcon:Ii,BookImage:si,BookImageIcon:si,BookKey:li,BookKeyIcon:li,BookLock:yi,BookLockIcon:yi,BookMarked:pi,BookMarkedIcon:pi,BookMinus:ui,BookMinusIcon:ui,BookOpen:Mi,BookOpenCheck:ki,BookOpenCheckIcon:ki,BookOpenIcon:Mi,BookOpenText:fi,BookOpenTextIcon:fi,BookPlus:mi,BookPlusIcon:mi,BookTemplate:rt,BookTemplateIcon:rt,BookText:gi,BookTextIcon:gi,BookType:vi,BookTypeIcon:vi,BookUp:wi,BookUp2:xi,BookUp2Icon:xi,BookUpIcon:wi,BookUser:Li,BookUserIcon:Li,BookX:bi,BookXIcon:bi,Bookmark:zi,BookmarkCheck:Ci,BookmarkCheckIcon:Ci,BookmarkIcon:zi,BookmarkMinus:Si,BookmarkMinusIcon:Si,BookmarkPlus:qi,BookmarkPlusIcon:qi,BookmarkX:Ai,BookmarkXIcon:Ai,BoomBox:Hi,BoomBoxIcon:Hi,Bot:Vi,BotIcon:Vi,BotMessageSquare:Pi,BotMessageSquareIcon:Pi,BotOff:ji,BotOffIcon:ji,BowArrow:Ri,BowArrowIcon:Ri,Box:_i,BoxIcon:_i,BoxSelect:ja,BoxSelectIcon:ja,Boxes:Di,BoxesIcon:Di,Braces:it,BracesIcon:it,Brackets:Ti,BracketsIcon:Ti,Brain:Oi,BrainCircuit:Fi,BrainCircuitIcon:Fi,BrainCog:Bi,BrainCogIcon:Bi,BrainIcon:Oi,BrickWall:Ui,BrickWallFire:Ei,BrickWallFireIcon:Ei,BrickWallIcon:Ui,Briefcase:Gi,BriefcaseBusiness:Ni,BriefcaseBusinessIcon:Ni,BriefcaseConveyorBelt:Zi,BriefcaseConveyorBeltIcon:Zi,BriefcaseIcon:Gi,BriefcaseMedical:$i,BriefcaseMedicalIcon:$i,BringToFront:Wi,BringToFrontIcon:Wi,Brush:Xi,BrushCleaning:Ki,BrushCleaningIcon:Ki,BrushIcon:Xi,Bubbles:Ji,BubblesIcon:Ji,Bug:ed,BugIcon:ed,BugOff:Qi,BugOffIcon:Qi,BugPlay:Yi,BugPlayIcon:Yi,Building:ad,Building2:td,Building2Icon:td,BuildingIcon:ad,Bus:cd,BusFront:nd,BusFrontIcon:nd,BusIcon:cd,Cable:rd,CableCar:od,CableCarIcon:od,CableIcon:rd,Cake:dd,CakeIcon:dd,CakeSlice:id,CakeSliceIcon:id,Calculator:hd,CalculatorIcon:hd,Calendar:kn,Calendar1:sd,Calendar1Icon:sd,CalendarArrowDown:ld,CalendarArrowDownIcon:ld,CalendarArrowUp:yd,CalendarArrowUpIcon:yd,CalendarCheck:ud,CalendarCheck2:pd,CalendarCheck2Icon:pd,CalendarCheckIcon:ud,CalendarClock:kd,CalendarClockIcon:kd,CalendarCog:fd,CalendarCogIcon:fd,CalendarDays:Md,CalendarDaysIcon:Md,CalendarFold:md,CalendarFoldIcon:md,CalendarHeart:gd,CalendarHeartIcon:gd,CalendarIcon:kn,CalendarMinus:xd,CalendarMinus2:vd,CalendarMinus2Icon:vd,CalendarMinusIcon:xd,CalendarOff:wd,CalendarOffIcon:wd,CalendarPlus:bd,CalendarPlus2:Ld,CalendarPlus2Icon:Ld,CalendarPlusIcon:bd,CalendarRange:Id,CalendarRangeIcon:Id,CalendarSearch:Cd,CalendarSearchIcon:Cd,CalendarSync:Sd,CalendarSyncIcon:Sd,CalendarX:Ad,CalendarX2:qd,CalendarX2Icon:qd,CalendarXIcon:Ad,Camera:Hd,CameraIcon:Hd,CameraOff:zd,CameraOffIcon:zd,CandlestickChart:yt,CandlestickChartIcon:yt,Candy:Vd,CandyCane:Pd,CandyCaneIcon:Pd,CandyIcon:Vd,CandyOff:jd,CandyOffIcon:jd,Cannabis:Rd,CannabisIcon:Rd,Captions:dt,CaptionsIcon:dt,CaptionsOff:_d,CaptionsOffIcon:_d,Car:Fd,CarFront:Dd,CarFrontIcon:Dd,CarIcon:Fd,CarTaxiFront:Td,CarTaxiFrontIcon:Td,Caravan:Bd,CaravanIcon:Bd,Carrot:Od,CarrotIcon:Od,CaseLower:Ed,CaseLowerIcon:Ed,CaseSensitive:Ud,CaseSensitiveIcon:Ud,CaseUpper:Nd,CaseUpperIcon:Nd,CassetteTape:Zd,CassetteTapeIcon:Zd,Cast:$d,CastIcon:$d,Castle:Gd,CastleIcon:Gd,Cat:Wd,CatIcon:Wd,Cctv:Kd,CctvIcon:Kd,ChartArea:ht,ChartAreaIcon:ht,ChartBar:lt,ChartBarBig:st,ChartBarBigIcon:st,ChartBarDecreasing:Xd,ChartBarDecreasingIcon:Xd,ChartBarIcon:lt,ChartBarIncreasing:Jd,ChartBarIncreasingIcon:Jd,ChartBarStacked:Qd,ChartBarStackedIcon:Qd,ChartCandlestick:yt,ChartCandlestickIcon:yt,ChartColumn:kt,ChartColumnBig:pt,ChartColumnBigIcon:pt,ChartColumnDecreasing:Yd,ChartColumnDecreasingIcon:Yd,ChartColumnIcon:kt,ChartColumnIncreasing:ut,ChartColumnIncreasingIcon:ut,ChartColumnStacked:eh,ChartColumnStackedIcon:eh,ChartGantt:th,ChartGanttIcon:th,ChartLine:ft,ChartLineIcon:ft,ChartNetwork:ah,ChartNetworkIcon:ah,ChartNoAxesColumn:mt,ChartNoAxesColumnDecreasing:nh,ChartNoAxesColumnDecreasingIcon:nh,ChartNoAxesColumnIcon:mt,ChartNoAxesColumnIncreasing:Mt,ChartNoAxesColumnIncreasingIcon:Mt,ChartNoAxesCombined:ch,ChartNoAxesCombinedIcon:ch,ChartNoAxesGantt:gt,ChartNoAxesGanttIcon:gt,ChartPie:vt,ChartPieIcon:vt,ChartScatter:xt,ChartScatterIcon:xt,ChartSpline:oh,ChartSplineIcon:oh,Check:dh,CheckCheck:rh,CheckCheckIcon:rh,CheckCircle:D1,CheckCircle2:Ht,CheckCircle2Icon:Ht,CheckCircleIcon:D1,CheckIcon:dh,CheckLine:ih,CheckLineIcon:ih,CheckSquare:ba,CheckSquare2:Ia,CheckSquare2Icon:Ia,CheckSquareIcon:ba,ChefHat:hh,ChefHatIcon:hh,Cherry:sh,CherryIcon:sh,ChevronDown:lh,ChevronDownCircle:Pt,ChevronDownCircleIcon:Pt,ChevronDownIcon:lh,ChevronDownSquare:Ca,ChevronDownSquareIcon:Ca,ChevronFirst:yh,ChevronFirstIcon:yh,ChevronLast:ph,ChevronLastIcon:ph,ChevronLeft:uh,ChevronLeftCircle:jt,ChevronLeftCircleIcon:jt,ChevronLeftIcon:uh,ChevronLeftSquare:Sa,ChevronLeftSquareIcon:Sa,ChevronRight:kh,ChevronRightCircle:Vt,ChevronRightCircleIcon:Vt,ChevronRightIcon:kh,ChevronRightSquare:qa,ChevronRightSquareIcon:qa,ChevronUp:fh,ChevronUpCircle:Rt,ChevronUpCircleIcon:Rt,ChevronUpIcon:fh,ChevronUpSquare:Aa,ChevronUpSquareIcon:Aa,ChevronsDown:mh,ChevronsDownIcon:mh,ChevronsDownUp:Mh,ChevronsDownUpIcon:Mh,ChevronsLeft:xh,ChevronsLeftIcon:xh,ChevronsLeftRight:vh,ChevronsLeftRightEllipsis:gh,ChevronsLeftRightEllipsisIcon:gh,ChevronsLeftRightIcon:vh,ChevronsRight:Lh,ChevronsRightIcon:Lh,ChevronsRightLeft:wh,ChevronsRightLeftIcon:wh,ChevronsUp:Ch,ChevronsUpDown:bh,ChevronsUpDownIcon:bh,ChevronsUpIcon:Ch,Chrome:Ih,ChromeIcon:Ih,Church:Sh,ChurchIcon:Sh,Cigarette:Ah,CigaretteIcon:Ah,CigaretteOff:qh,CigaretteOffIcon:qh,Circle:Oh,CircleAlert:wt,CircleAlertIcon:wt,CircleArrowDown:Lt,CircleArrowDownIcon:Lt,CircleArrowLeft:bt,CircleArrowLeftIcon:bt,CircleArrowOutDownLeft:It,CircleArrowOutDownLeftIcon:It,CircleArrowOutDownRight:Ct,CircleArrowOutDownRightIcon:Ct,CircleArrowOutUpLeft:St,CircleArrowOutUpLeftIcon:St,CircleArrowOutUpRight:qt,CircleArrowOutUpRightIcon:qt,CircleArrowRight:At,CircleArrowRightIcon:At,CircleArrowUp:zt,CircleArrowUpIcon:zt,CircleCheck:Ht,CircleCheckBig:D1,CircleCheckBigIcon:D1,CircleCheckIcon:Ht,CircleChevronDown:Pt,CircleChevronDownIcon:Pt,CircleChevronLeft:jt,CircleChevronLeftIcon:jt,CircleChevronRight:Vt,CircleChevronRightIcon:Vt,CircleChevronUp:Rt,CircleChevronUpIcon:Rt,CircleDashed:zh,CircleDashedIcon:zh,CircleDivide:_t,CircleDivideIcon:_t,CircleDollarSign:Hh,CircleDollarSignIcon:Hh,CircleDot:jh,CircleDotDashed:Ph,CircleDotDashedIcon:Ph,CircleDotIcon:jh,CircleEllipsis:Vh,CircleEllipsisIcon:Vh,CircleEqual:Rh,CircleEqualIcon:Rh,CircleFadingArrowUp:_h,CircleFadingArrowUpIcon:_h,CircleFadingPlus:Dh,CircleFadingPlusIcon:Dh,CircleGauge:Dt,CircleGaugeIcon:Dt,CircleHelp:Tt,CircleHelpIcon:Tt,CircleIcon:Oh,CircleMinus:Ft,CircleMinusIcon:Ft,CircleOff:Th,CircleOffIcon:Th,CircleParking:Ot,CircleParkingIcon:Ot,CircleParkingOff:Bt,CircleParkingOffIcon:Bt,CirclePause:Et,CirclePauseIcon:Et,CirclePercent:Ut,CirclePercentIcon:Ut,CirclePlay:Nt,CirclePlayIcon:Nt,CirclePlus:Zt,CirclePlusIcon:Zt,CirclePower:$t,CirclePowerIcon:$t,CircleSlash:Fh,CircleSlash2:Gt,CircleSlash2Icon:Gt,CircleSlashIcon:Fh,CircleSlashed:Gt,CircleSlashedIcon:Gt,CircleSmall:Bh,CircleSmallIcon:Bh,CircleStop:Wt,CircleStopIcon:Wt,CircleUser:Xt,CircleUserIcon:Xt,CircleUserRound:Kt,CircleUserRoundIcon:Kt,CircleX:T1,CircleXIcon:T1,CircuitBoard:Eh,CircuitBoardIcon:Eh,Citrus:Uh,CitrusIcon:Uh,Clapperboard:Nh,ClapperboardIcon:Nh,Clipboard:Yh,ClipboardCheck:Zh,ClipboardCheckIcon:Zh,ClipboardCopy:$h,ClipboardCopyIcon:$h,ClipboardEdit:Qt,ClipboardEditIcon:Qt,ClipboardIcon:Yh,ClipboardList:Gh,ClipboardListIcon:Gh,ClipboardMinus:Wh,ClipboardMinusIcon:Wh,ClipboardPaste:Kh,ClipboardPasteIcon:Kh,ClipboardPen:Qt,ClipboardPenIcon:Qt,ClipboardPenLine:Jt,ClipboardPenLineIcon:Jt,ClipboardPlus:Xh,ClipboardPlusIcon:Xh,ClipboardSignature:Jt,ClipboardSignatureIcon:Jt,ClipboardType:Jh,ClipboardTypeIcon:Jh,ClipboardX:Qh,ClipboardXIcon:Qh,Clock:Ms,Clock1:es,Clock10:ts,Clock10Icon:ts,Clock11:as,Clock11Icon:as,Clock12:ns,Clock12Icon:ns,Clock1Icon:es,Clock2:cs,Clock2Icon:cs,Clock3:os,Clock3Icon:os,Clock4:rs,Clock4Icon:rs,Clock5:is,Clock5Icon:is,Clock6:ds,Clock6Icon:ds,Clock7:hs,Clock7Icon:hs,Clock8:ss,Clock8Icon:ss,Clock9:ls,Clock9Icon:ls,ClockAlert:ys,ClockAlertIcon:ys,ClockArrowDown:ps,ClockArrowDownIcon:ps,ClockArrowUp:us,ClockArrowUpIcon:us,ClockFading:ks,ClockFadingIcon:ks,ClockIcon:Ms,ClockPlus:fs,ClockPlusIcon:fs,Cloud:Ps,CloudAlert:ms,CloudAlertIcon:ms,CloudCog:gs,CloudCogIcon:gs,CloudDownload:Yt,CloudDownloadIcon:Yt,CloudDrizzle:vs,CloudDrizzleIcon:vs,CloudFog:xs,CloudFogIcon:xs,CloudHail:ws,CloudHailIcon:ws,CloudIcon:Ps,CloudLightning:Ls,CloudLightningIcon:Ls,CloudMoon:Is,CloudMoonIcon:Is,CloudMoonRain:bs,CloudMoonRainIcon:bs,CloudOff:Cs,CloudOffIcon:Cs,CloudRain:qs,CloudRainIcon:qs,CloudRainWind:Ss,CloudRainWindIcon:Ss,CloudSnow:As,CloudSnowIcon:As,CloudSun:Hs,CloudSunIcon:Hs,CloudSunRain:zs,CloudSunRainIcon:zs,CloudUpload:e2,CloudUploadIcon:e2,Cloudy:js,CloudyIcon:js,Clover:Vs,CloverIcon:Vs,Club:Rs,ClubIcon:Rs,Code:_s,Code2:t2,Code2Icon:t2,CodeIcon:_s,CodeSquare:za,CodeSquareIcon:za,CodeXml:t2,CodeXmlIcon:t2,Codepen:Ds,CodepenIcon:Ds,Codesandbox:Ts,CodesandboxIcon:Ts,Coffee:Fs,CoffeeIcon:Fs,Cog:Bs,CogIcon:Bs,Coins:Os,CoinsIcon:Os,Columns:a2,Columns2:a2,Columns2Icon:a2,Columns3:n2,Columns3Cog:s1,Columns3CogIcon:s1,Columns3Icon:n2,Columns4:Es,Columns4Icon:Es,ColumnsIcon:a2,ColumnsSettings:s1,ColumnsSettingsIcon:s1,Combine:Us,CombineIcon:Us,Command:Ns,CommandIcon:Ns,Compass:Zs,CompassIcon:Zs,Component:$s,ComponentIcon:$s,Computer:Gs,ComputerIcon:Gs,ConciergeBell:Ks,ConciergeBellIcon:Ks,Cone:Ws,ConeIcon:Ws,Construction:Xs,ConstructionIcon:Xs,Contact:Js,Contact2:c2,Contact2Icon:c2,ContactIcon:Js,ContactRound:c2,ContactRoundIcon:c2,Container:Qs,ContainerIcon:Qs,Contrast:Ys,ContrastIcon:Ys,Cookie:el,CookieIcon:el,CookingPot:tl,CookingPotIcon:tl,Copy:il,CopyCheck:al,CopyCheckIcon:al,CopyIcon:il,CopyMinus:nl,CopyMinusIcon:nl,CopyPlus:cl,CopyPlusIcon:cl,CopySlash:ol,CopySlashIcon:ol,CopyX:rl,CopyXIcon:rl,Copyleft:hl,CopyleftIcon:hl,Copyright:dl,CopyrightIcon:dl,CornerDownLeft:sl,CornerDownLeftIcon:sl,CornerDownRight:ll,CornerDownRightIcon:ll,CornerLeftDown:yl,CornerLeftDownIcon:yl,CornerLeftUp:pl,CornerLeftUpIcon:pl,CornerRightDown:ul,CornerRightDownIcon:ul,CornerRightUp:kl,CornerRightUpIcon:kl,CornerUpLeft:fl,CornerUpLeftIcon:fl,CornerUpRight:Ml,CornerUpRightIcon:Ml,Cpu:ml,CpuIcon:ml,CreativeCommons:gl,CreativeCommonsIcon:gl,CreditCard:vl,CreditCardIcon:vl,Croissant:xl,CroissantIcon:xl,Crop:wl,CropIcon:wl,Cross:Ll,CrossIcon:Ll,Crosshair:bl,CrosshairIcon:bl,Crown:Il,CrownIcon:Il,Cuboid:Cl,CuboidIcon:Cl,CupSoda:Sl,CupSodaIcon:Sl,CurlyBraces:it,CurlyBracesIcon:it,Currency:ql,CurrencyIcon:ql,Cylinder:Al,CylinderIcon:Al,Dam:Hl,DamIcon:Hl,Database:jl,DatabaseBackup:zl,DatabaseBackupIcon:zl,DatabaseIcon:jl,DatabaseZap:Pl,DatabaseZapIcon:Pl,DecimalsArrowLeft:Vl,DecimalsArrowLeftIcon:Vl,DecimalsArrowRight:Rl,DecimalsArrowRightIcon:Rl,Delete:_l,DeleteIcon:_l,Dessert:Tl,DessertIcon:Tl,Diameter:Dl,DiameterIcon:Dl,Diamond:Ol,DiamondIcon:Ol,DiamondMinus:Fl,DiamondMinusIcon:Fl,DiamondPercent:o2,DiamondPercentIcon:o2,DiamondPlus:Bl,DiamondPlusIcon:Bl,Dice1:El,Dice1Icon:El,Dice2:Ul,Dice2Icon:Ul,Dice3:Nl,Dice3Icon:Nl,Dice4:Zl,Dice4Icon:Zl,Dice5:$l,Dice5Icon:$l,Dice6:Gl,Dice6Icon:Gl,Dices:Wl,DicesIcon:Wl,Diff:Kl,DiffIcon:Kl,Disc:Yl,Disc2:Jl,Disc2Icon:Jl,Disc3:Xl,Disc3Icon:Xl,DiscAlbum:Ql,DiscAlbumIcon:Ql,DiscIcon:Yl,Divide:ey,DivideCircle:_t,DivideCircleIcon:_t,DivideIcon:ey,DivideSquare:Va,DivideSquareIcon:Va,Dna:ay,DnaIcon:ay,DnaOff:ty,DnaOffIcon:ty,Dock:ny,DockIcon:ny,Dog:cy,DogIcon:cy,DollarSign:oy,DollarSignIcon:oy,Donut:ry,DonutIcon:ry,DoorClosed:dy,DoorClosedIcon:dy,DoorClosedLocked:iy,DoorClosedLockedIcon:iy,DoorOpen:hy,DoorOpenIcon:hy,Dot:sy,DotIcon:sy,DotSquare:Ra,DotSquareIcon:Ra,Download:py,DownloadCloud:Yt,DownloadCloudIcon:Yt,DownloadIcon:py,DraftingCompass:ly,DraftingCompassIcon:ly,Drama:yy,DramaIcon:yy,Dribbble:uy,DribbbleIcon:uy,Drill:ky,DrillIcon:ky,Droplet:My,DropletIcon:My,DropletOff:fy,DropletOffIcon:fy,Droplets:gy,DropletsIcon:gy,Drum:my,DrumIcon:my,Drumstick:vy,DrumstickIcon:vy,Dumbbell:xy,DumbbellIcon:xy,Ear:Ly,EarIcon:Ly,EarOff:wy,EarOffIcon:wy,Earth:r2,EarthIcon:r2,EarthLock:by,EarthLockIcon:by,Eclipse:Cy,EclipseIcon:Cy,Edit:Oe,Edit2:Q2,Edit2Icon:Q2,Edit3:J2,Edit3Icon:J2,EditIcon:Oe,Egg:qy,EggFried:Iy,EggFriedIcon:Iy,EggIcon:qy,EggOff:Sy,EggOffIcon:Sy,Ellipsis:d2,EllipsisIcon:d2,EllipsisVertical:i2,EllipsisVerticalIcon:i2,Equal:Hy,EqualApproximately:Ay,EqualApproximatelyIcon:Ay,EqualIcon:Hy,EqualNot:zy,EqualNotIcon:zy,EqualSquare:_a,EqualSquareIcon:_a,Eraser:Py,EraserIcon:Py,EthernetPort:jy,EthernetPortIcon:jy,Euro:Vy,EuroIcon:Vy,Expand:Ry,ExpandIcon:Ry,ExternalLink:Dy,ExternalLinkIcon:Dy,Eye:Fy,EyeClosed:_y,EyeClosedIcon:_y,EyeIcon:Fy,EyeOff:Ty,EyeOffIcon:Ty,Facebook:By,FacebookIcon:By,Factory:Oy,FactoryIcon:Oy,Fan:Ey,FanIcon:Ey,FastForward:Ny,FastForwardIcon:Ny,Feather:Uy,FeatherIcon:Uy,Fence:Zy,FenceIcon:Zy,FerrisWheel:$y,FerrisWheelIcon:$y,Figma:Gy,FigmaIcon:Gy,File:Up,FileArchive:Wy,FileArchiveIcon:Wy,FileAudio:Xy,FileAudio2:Ky,FileAudio2Icon:Ky,FileAudioIcon:Xy,FileAxis3D:h2,FileAxis3DIcon:h2,FileAxis3d:h2,FileAxis3dIcon:h2,FileBadge:Qy,FileBadge2:Jy,FileBadge2Icon:Jy,FileBadgeIcon:Qy,FileBarChart:s2,FileBarChart2:p2,FileBarChart2Icon:p2,FileBarChartIcon:s2,FileBox:Yy,FileBoxIcon:Yy,FileChartColumn:p2,FileChartColumnIcon:p2,FileChartColumnIncreasing:s2,FileChartColumnIncreasingIcon:s2,FileChartLine:l2,FileChartLineIcon:l2,FileChartPie:y2,FileChartPieIcon:y2,FileCheck:tp,FileCheck2:ep,FileCheck2Icon:ep,FileCheckIcon:tp,FileClock:cp,FileClockIcon:cp,FileCode:np,FileCode2:ap,FileCode2Icon:ap,FileCodeIcon:np,FileCog:u2,FileCog2:u2,FileCog2Icon:u2,FileCogIcon:u2,FileDiff:op,FileDiffIcon:op,FileDigit:ip,FileDigitIcon:ip,FileDown:rp,FileDownIcon:rp,FileEdit:f2,FileEditIcon:f2,FileHeart:dp,FileHeartIcon:dp,FileIcon:Up,FileImage:hp,FileImageIcon:hp,FileInput:sp,FileInputIcon:sp,FileJson:pp,FileJson2:lp,FileJson2Icon:lp,FileJsonIcon:pp,FileKey:up,FileKey2:yp,FileKey2Icon:yp,FileKeyIcon:up,FileLineChart:l2,FileLineChartIcon:l2,FileLock:fp,FileLock2:kp,FileLock2Icon:kp,FileLockIcon:fp,FileMinus:mp,FileMinus2:Mp,FileMinus2Icon:Mp,FileMinusIcon:mp,FileMusic:gp,FileMusicIcon:gp,FileOutput:vp,FileOutputIcon:vp,FilePen:f2,FilePenIcon:f2,FilePenLine:k2,FilePenLineIcon:k2,FilePieChart:y2,FilePieChartIcon:y2,FilePlus:Lp,FilePlus2:xp,FilePlus2Icon:xp,FilePlusIcon:Lp,FileQuestion:bp,FileQuestionIcon:bp,FileScan:wp,FileScanIcon:wp,FileSearch:Sp,FileSearch2:Ip,FileSearch2Icon:Ip,FileSearchIcon:Sp,FileSignature:k2,FileSignatureIcon:k2,FileSliders:Cp,FileSlidersIcon:Cp,FileSpreadsheet:zp,FileSpreadsheetIcon:zp,FileStack:qp,FileStackIcon:qp,FileSymlink:Ap,FileSymlinkIcon:Ap,FileTerminal:Hp,FileTerminalIcon:Hp,FileText:fn,FileTextIcon:fn,FileType:jp,FileType2:Pp,FileType2Icon:Pp,FileTypeIcon:jp,FileUp:Vp,FileUpIcon:Vp,FileUser:Rp,FileUserIcon:Rp,FileVideo:Dp,FileVideo2:_p,FileVideo2Icon:_p,FileVideoIcon:Dp,FileVolume:Fp,FileVolume2:Tp,FileVolume2Icon:Tp,FileVolumeIcon:Fp,FileWarning:Ep,FileWarningIcon:Ep,FileX:Op,FileX2:Bp,FileX2Icon:Bp,FileXIcon:Op,Files:Np,FilesIcon:Np,Film:Zp,FilmIcon:Zp,Filter:v2,FilterIcon:v2,FilterX:g2,FilterXIcon:g2,Fingerprint:$p,FingerprintIcon:$p,FireExtinguisher:Gp,FireExtinguisherIcon:Gp,Fish:Xp,FishIcon:Xp,FishOff:Wp,FishOffIcon:Wp,FishSymbol:Kp,FishSymbolIcon:Kp,Flag:eu,FlagIcon:eu,FlagOff:Jp,FlagOffIcon:Jp,FlagTriangleLeft:Qp,FlagTriangleLeftIcon:Qp,FlagTriangleRight:Yp,FlagTriangleRightIcon:Yp,Flame:au,FlameIcon:au,FlameKindling:tu,FlameKindlingIcon:tu,Flashlight:cu,FlashlightIcon:cu,FlashlightOff:nu,FlashlightOffIcon:nu,FlaskConical:ru,FlaskConicalIcon:ru,FlaskConicalOff:ou,FlaskConicalOffIcon:ou,FlaskRound:iu,FlaskRoundIcon:iu,FlipHorizontal:hu,FlipHorizontal2:du,FlipHorizontal2Icon:du,FlipHorizontalIcon:hu,FlipVertical:su,FlipVertical2:lu,FlipVertical2Icon:lu,FlipVerticalIcon:su,Flower:pu,Flower2:yu,Flower2Icon:yu,FlowerIcon:pu,Focus:uu,FocusIcon:uu,FoldHorizontal:ku,FoldHorizontalIcon:ku,FoldVertical:fu,FoldVerticalIcon:fu,Folder:Nu,FolderArchive:Mu,FolderArchiveIcon:Mu,FolderCheck:mu,FolderCheckIcon:mu,FolderClock:gu,FolderClockIcon:gu,FolderClosed:vu,FolderClosedIcon:vu,FolderCode:xu,FolderCodeIcon:xu,FolderCog:M2,FolderCog2:M2,FolderCog2Icon:M2,FolderCogIcon:M2,FolderDot:wu,FolderDotIcon:wu,FolderDown:Lu,FolderDownIcon:Lu,FolderEdit:m2,FolderEditIcon:m2,FolderGit:Iu,FolderGit2:bu,FolderGit2Icon:bu,FolderGitIcon:Iu,FolderHeart:Cu,FolderHeartIcon:Cu,FolderIcon:Nu,FolderInput:Su,FolderInputIcon:Su,FolderKanban:qu,FolderKanbanIcon:qu,FolderKey:Au,FolderKeyIcon:Au,FolderLock:Hu,FolderLockIcon:Hu,FolderMinus:Pu,FolderMinusIcon:Pu,FolderOpen:ju,FolderOpenDot:zu,FolderOpenDotIcon:zu,FolderOpenIcon:ju,FolderOutput:Vu,FolderOutputIcon:Vu,FolderPen:m2,FolderPenIcon:m2,FolderPlus:Ru,FolderPlusIcon:Ru,FolderRoot:_u,FolderRootIcon:_u,FolderSearch:Tu,FolderSearch2:Du,FolderSearch2Icon:Du,FolderSearchIcon:Tu,FolderSymlink:Fu,FolderSymlinkIcon:Fu,FolderSync:Bu,FolderSyncIcon:Bu,FolderTree:Eu,FolderTreeIcon:Eu,FolderUp:Ou,FolderUpIcon:Ou,FolderX:Uu,FolderXIcon:Uu,Folders:Zu,FoldersIcon:Zu,Footprints:$u,FootprintsIcon:$u,ForkKnife:w0,ForkKnifeCrossed:x0,ForkKnifeCrossedIcon:x0,ForkKnifeIcon:w0,Forklift:Gu,ForkliftIcon:Gu,FormInput:ea,FormInputIcon:ea,Forward:Wu,ForwardIcon:Wu,Frame:Ku,FrameIcon:Ku,Framer:Xu,FramerIcon:Xu,Frown:Ju,FrownIcon:Ju,Fuel:Qu,FuelIcon:Qu,Fullscreen:Yu,FullscreenIcon:Yu,FunctionSquare:Da,FunctionSquareIcon:Da,Funnel:v2,FunnelIcon:v2,FunnelPlus:e4,FunnelPlusIcon:e4,FunnelX:g2,FunnelXIcon:g2,GalleryHorizontal:a4,GalleryHorizontalEnd:t4,GalleryHorizontalEndIcon:t4,GalleryHorizontalIcon:a4,GalleryThumbnails:n4,GalleryThumbnailsIcon:n4,GalleryVertical:o4,GalleryVerticalEnd:c4,GalleryVerticalEndIcon:c4,GalleryVerticalIcon:o4,Gamepad:i4,Gamepad2:r4,Gamepad2Icon:r4,GamepadIcon:i4,GanttChart:gt,GanttChartIcon:gt,GanttChartSquare:y1,GanttChartSquareIcon:y1,Gauge:d4,GaugeCircle:Dt,GaugeCircleIcon:Dt,GaugeIcon:d4,Gavel:h4,GavelIcon:h4,Gem:s4,GemIcon:s4,Ghost:l4,GhostIcon:l4,Gift:y4,GiftIcon:y4,GitBranch:u4,GitBranchIcon:u4,GitBranchPlus:p4,GitBranchPlusIcon:p4,GitCommit:x2,GitCommitHorizontal:x2,GitCommitHorizontalIcon:x2,GitCommitIcon:x2,GitCommitVertical:k4,GitCommitVerticalIcon:k4,GitCompare:M4,GitCompareArrows:f4,GitCompareArrowsIcon:f4,GitCompareIcon:M4,GitFork:m4,GitForkIcon:m4,GitGraph:g4,GitGraphIcon:g4,GitMerge:v4,GitMergeIcon:v4,GitPullRequest:C4,GitPullRequestArrow:x4,GitPullRequestArrowIcon:x4,GitPullRequestClosed:w4,GitPullRequestClosedIcon:w4,GitPullRequestCreate:I4,GitPullRequestCreateArrow:L4,GitPullRequestCreateArrowIcon:L4,GitPullRequestCreateIcon:I4,GitPullRequestDraft:b4,GitPullRequestDraftIcon:b4,GitPullRequestIcon:C4,Github:S4,GithubIcon:S4,Gitlab:q4,GitlabIcon:q4,GlassWater:A4,GlassWaterIcon:A4,Glasses:z4,GlassesIcon:z4,Globe:P4,Globe2:r2,Globe2Icon:r2,GlobeIcon:P4,GlobeLock:H4,GlobeLockIcon:H4,Goal:j4,GoalIcon:j4,Gpu:V4,GpuIcon:V4,Grab:R4,GrabIcon:R4,GraduationCap:D4,GraduationCapIcon:D4,Grape:_4,GrapeIcon:_4,Grid:l1,Grid2X2:I2,Grid2X2Check:w2,Grid2X2CheckIcon:w2,Grid2X2Icon:I2,Grid2X2Plus:L2,Grid2X2PlusIcon:L2,Grid2X2X:b2,Grid2X2XIcon:b2,Grid2x2:I2,Grid2x2Check:w2,Grid2x2CheckIcon:w2,Grid2x2Icon:I2,Grid2x2Plus:L2,Grid2x2PlusIcon:L2,Grid2x2X:b2,Grid2x2XIcon:b2,Grid3X3:l1,Grid3X3Icon:l1,Grid3x3:l1,Grid3x3Icon:l1,GridIcon:l1,Grip:B4,GripHorizontal:T4,GripHorizontalIcon:T4,GripIcon:B4,GripVertical:F4,GripVerticalIcon:F4,Group:O4,GroupIcon:O4,Guitar:E4,GuitarIcon:E4,Ham:U4,HamIcon:U4,Hamburger:N4,HamburgerIcon:N4,Hammer:Z4,HammerIcon:Z4,Hand:X4,HandCoins:$4,HandCoinsIcon:$4,HandHeart:G4,HandHeartIcon:G4,HandHelping:C2,HandHelpingIcon:C2,HandIcon:X4,HandMetal:W4,HandMetalIcon:W4,HandPlatter:K4,HandPlatterIcon:K4,Handshake:J4,HandshakeIcon:J4,HardDrive:ek,HardDriveDownload:Y4,HardDriveDownloadIcon:Y4,HardDriveIcon:ek,HardDriveUpload:Q4,HardDriveUploadIcon:Q4,HardHat:tk,HardHatIcon:tk,Hash:ak,HashIcon:ak,Haze:nk,HazeIcon:nk,HdmiPort:ck,HdmiPortIcon:ck,Heading:lk,Heading1:ok,Heading1Icon:ok,Heading2:rk,Heading2Icon:rk,Heading3:ik,Heading3Icon:ik,Heading4:dk,Heading4Icon:dk,Heading5:hk,Heading5Icon:hk,Heading6:sk,Heading6Icon:sk,HeadingIcon:lk,HeadphoneOff:yk,HeadphoneOffIcon:yk,Headphones:pk,HeadphonesIcon:pk,Headset:uk,HeadsetIcon:uk,Heart:xk,HeartCrack:fk,HeartCrackIcon:fk,HeartHandshake:kk,HeartHandshakeIcon:kk,HeartIcon:xk,HeartMinus:Mk,HeartMinusIcon:Mk,HeartOff:mk,HeartOffIcon:mk,HeartPlus:gk,HeartPlusIcon:gk,HeartPulse:vk,HeartPulseIcon:vk,Heater:wk,HeaterIcon:wk,HelpCircle:Tt,HelpCircleIcon:Tt,HelpingHand:C2,HelpingHandIcon:C2,Hexagon:Lk,HexagonIcon:Lk,Highlighter:bk,HighlighterIcon:bk,History:Ik,HistoryIcon:Ik,Home:S2,HomeIcon:S2,Hop:Sk,HopIcon:Sk,HopOff:Ck,HopOffIcon:Ck,Hospital:qk,HospitalIcon:qk,Hotel:Ak,HotelIcon:Ak,Hourglass:zk,HourglassIcon:zk,House:S2,HouseIcon:S2,HousePlug:Hk,HousePlugIcon:Hk,HousePlus:Pk,HousePlusIcon:Pk,HouseWifi:jk,HouseWifiIcon:jk,IceCream:A2,IceCream2:q2,IceCream2Icon:q2,IceCreamBowl:q2,IceCreamBowlIcon:q2,IceCreamCone:A2,IceCreamConeIcon:A2,IceCreamIcon:A2,Icon:NS,IdCard:Vk,IdCardIcon:Vk,Image:Ek,ImageDown:Rk,ImageDownIcon:Rk,ImageIcon:Ek,ImageMinus:_k,ImageMinusIcon:_k,ImageOff:Dk,ImageOffIcon:Dk,ImagePlay:Tk,ImagePlayIcon:Tk,ImagePlus:Fk,ImagePlusIcon:Fk,ImageUp:Bk,ImageUpIcon:Bk,ImageUpscale:Ok,ImageUpscaleIcon:Ok,Images:Uk,ImagesIcon:Uk,Import:Nk,ImportIcon:Nk,Inbox:Zk,InboxIcon:Zk,Indent:H2,IndentDecrease:z2,IndentDecreaseIcon:z2,IndentIcon:H2,IndentIncrease:H2,IndentIncreaseIcon:H2,IndianRupee:$k,IndianRupeeIcon:$k,Infinity:Gk,InfinityIcon:Gk,Info:Wk,InfoIcon:Wk,Inspect:Ua,InspectIcon:Ua,InspectionPanel:Xk,InspectionPanelIcon:Xk,Instagram:Kk,InstagramIcon:Kk,Italic:Jk,ItalicIcon:Jk,IterationCcw:Qk,IterationCcwIcon:Qk,IterationCw:Yk,IterationCwIcon:Yk,JapaneseYen:e5,JapaneseYenIcon:e5,Joystick:a5,JoystickIcon:a5,Kanban:t5,KanbanIcon:t5,KanbanSquare:Ta,KanbanSquareDashed:Ha,KanbanSquareDashedIcon:Ha,KanbanSquareIcon:Ta,Key:o5,KeyIcon:o5,KeyRound:n5,KeyRoundIcon:n5,KeySquare:c5,KeySquareIcon:c5,Keyboard:d5,KeyboardIcon:d5,KeyboardMusic:r5,KeyboardMusicIcon:r5,KeyboardOff:i5,KeyboardOffIcon:i5,Lamp:u5,LampCeiling:h5,LampCeilingIcon:h5,LampDesk:s5,LampDeskIcon:s5,LampFloor:l5,LampFloorIcon:l5,LampIcon:u5,LampWallDown:y5,LampWallDownIcon:y5,LampWallUp:p5,LampWallUpIcon:p5,LandPlot:k5,LandPlotIcon:k5,Landmark:f5,LandmarkIcon:f5,Languages:M5,LanguagesIcon:M5,Laptop:g5,Laptop2:P2,Laptop2Icon:P2,LaptopIcon:g5,LaptopMinimal:P2,LaptopMinimalCheck:m5,LaptopMinimalCheckIcon:m5,LaptopMinimalIcon:P2,Lasso:x5,LassoIcon:x5,LassoSelect:v5,LassoSelectIcon:v5,Laugh:w5,LaughIcon:w5,Layers:j2,Layers2:L5,Layers2Icon:L5,Layers3:j2,Layers3Icon:j2,LayersIcon:j2,Layout:X2,LayoutDashboard:b5,LayoutDashboardIcon:b5,LayoutGrid:I5,LayoutGridIcon:I5,LayoutIcon:X2,LayoutList:C5,LayoutListIcon:C5,LayoutPanelLeft:q5,LayoutPanelLeftIcon:q5,LayoutPanelTop:S5,LayoutPanelTopIcon:S5,LayoutTemplate:A5,LayoutTemplateIcon:A5,Leaf:z5,LeafIcon:z5,LeafyGreen:P5,LeafyGreenIcon:P5,Lectern:H5,LecternIcon:H5,LetterText:j5,LetterTextIcon:j5,Library:_5,LibraryBig:V5,LibraryBigIcon:V5,LibraryIcon:_5,LibrarySquare:Fa,LibrarySquareIcon:Fa,LifeBuoy:R5,LifeBuoyIcon:R5,Ligature:D5,LigatureIcon:D5,Lightbulb:F5,LightbulbIcon:F5,LightbulbOff:T5,LightbulbOffIcon:T5,LineChart:ft,LineChartIcon:ft,Link:E5,Link2:O5,Link2Icon:O5,Link2Off:B5,Link2OffIcon:B5,LinkIcon:E5,Linkedin:U5,LinkedinIcon:U5,List:r3,ListCheck:N5,ListCheckIcon:N5,ListChecks:Z5,ListChecksIcon:Z5,ListCollapse:$5,ListCollapseIcon:$5,ListEnd:G5,ListEndIcon:G5,ListFilter:X5,ListFilterIcon:X5,ListFilterPlus:W5,ListFilterPlusIcon:W5,ListIcon:r3,ListMinus:K5,ListMinusIcon:K5,ListMusic:J5,ListMusicIcon:J5,ListOrdered:Y5,ListOrderedIcon:Y5,ListPlus:Q5,ListPlusIcon:Q5,ListRestart:e3,ListRestartIcon:e3,ListStart:t3,ListStartIcon:t3,ListTodo:a3,ListTodoIcon:a3,ListTree:c3,ListTreeIcon:c3,ListVideo:n3,ListVideoIcon:n3,ListX:o3,ListXIcon:o3,Loader:d3,Loader2:V2,Loader2Icon:V2,LoaderCircle:V2,LoaderCircleIcon:V2,LoaderIcon:d3,LoaderPinwheel:i3,LoaderPinwheelIcon:i3,Locate:l3,LocateFixed:h3,LocateFixedIcon:h3,LocateIcon:l3,LocateOff:s3,LocateOffIcon:s3,LocationEdit:y3,LocationEditIcon:y3,Lock:u3,LockIcon:u3,LockKeyhole:p3,LockKeyholeIcon:p3,LockKeyholeOpen:R2,LockKeyholeOpenIcon:R2,LockOpen:_2,LockOpenIcon:_2,LogIn:k3,LogInIcon:k3,LogOut:f3,LogOutIcon:f3,Logs:M3,LogsIcon:M3,Lollipop:m3,LollipopIcon:m3,LucideAArrowDown:Wn,LucideAArrowUp:Kn,LucideALargeSmall:Xn,LucideAccessibility:Jn,LucideActivity:Qn,LucideActivitySquare:ha,LucideAirVent:Yn,LucideAirplay:ec,LucideAlarmCheck:G1,LucideAlarmClock:ac,LucideAlarmClockCheck:G1,LucideAlarmClockMinus:W1,LucideAlarmClockOff:tc,LucideAlarmClockPlus:K1,LucideAlarmMinus:W1,LucideAlarmPlus:K1,LucideAlarmSmoke:nc,LucideAlbum:cc,LucideAlertCircle:wt,LucideAlertOctagon:F2,LucideAlertTriangle:l0,LucideAlignCenter:ic,LucideAlignCenterHorizontal:oc,LucideAlignCenterVertical:rc,LucideAlignEndHorizontal:dc,LucideAlignEndVertical:hc,LucideAlignHorizontalDistributeCenter:sc,LucideAlignHorizontalDistributeEnd:lc,LucideAlignHorizontalDistributeStart:yc,LucideAlignHorizontalJustifyCenter:uc,LucideAlignHorizontalJustifyEnd:pc,LucideAlignHorizontalJustifyStart:kc,LucideAlignHorizontalSpaceAround:fc,LucideAlignHorizontalSpaceBetween:Mc,LucideAlignJustify:mc,LucideAlignLeft:gc,LucideAlignRight:Lc,LucideAlignStartHorizontal:vc,LucideAlignStartVertical:xc,LucideAlignVerticalDistributeCenter:wc,LucideAlignVerticalDistributeEnd:bc,LucideAlignVerticalDistributeStart:Ic,LucideAlignVerticalJustifyCenter:Cc,LucideAlignVerticalJustifyEnd:Sc,LucideAlignVerticalJustifyStart:qc,LucideAlignVerticalSpaceAround:Ac,LucideAlignVerticalSpaceBetween:zc,LucideAmbulance:Hc,LucideAmpersand:Pc,LucideAmpersands:jc,LucideAmphora:Rc,LucideAnchor:Vc,LucideAngry:_c,LucideAnnoyed:Tc,LucideAntenna:Dc,LucideAnvil:Fc,LucideAperture:Bc,LucideAppWindow:Ec,LucideAppWindowMac:Oc,LucideApple:Uc,LucideArchive:$c,LucideArchiveRestore:Nc,LucideArchiveX:Zc,LucideAreaChart:ht,LucideArmchair:Gc,LucideArrowBigDown:Wc,LucideArrowBigDownDash:Kc,LucideArrowBigLeft:Jc,LucideArrowBigLeftDash:Xc,LucideArrowBigRight:Yc,LucideArrowBigRightDash:Qc,LucideArrowBigUp:to,LucideArrowBigUpDash:eo,LucideArrowDown:yo,LucideArrowDown01:ao,LucideArrowDown10:no,LucideArrowDownAZ:X1,LucideArrowDownAz:X1,LucideArrowDownCircle:Lt,LucideArrowDownFromLine:co,LucideArrowDownLeft:oo,LucideArrowDownLeftFromCircle:It,LucideArrowDownLeftFromSquare:ua,LucideArrowDownLeftSquare:la,LucideArrowDownNarrowWide:ro,LucideArrowDownRight:io,LucideArrowDownRightFromCircle:Ct,LucideArrowDownRightFromSquare:ka,LucideArrowDownRightSquare:sa,LucideArrowDownSquare:ya,LucideArrowDownToDot:ho,LucideArrowDownToLine:so,LucideArrowDownUp:lo,LucideArrowDownWideNarrow:J1,LucideArrowDownZA:Q1,LucideArrowDownZa:Q1,LucideArrowLeft:fo,LucideArrowLeftCircle:bt,LucideArrowLeftFromLine:po,LucideArrowLeftRight:uo,LucideArrowLeftSquare:pa,LucideArrowLeftToLine:ko,LucideArrowRight:vo,LucideArrowRightCircle:At,LucideArrowRightFromLine:mo,LucideArrowRightLeft:Mo,LucideArrowRightSquare:ma,LucideArrowRightToLine:go,LucideArrowUp:zo,LucideArrowUp01:xo,LucideArrowUp10:wo,LucideArrowUpAZ:Y1,LucideArrowUpAz:Y1,LucideArrowUpCircle:zt,LucideArrowUpDown:Lo,LucideArrowUpFromDot:bo,LucideArrowUpFromLine:Io,LucideArrowUpLeft:Co,LucideArrowUpLeftFromCircle:St,LucideArrowUpLeftFromSquare:fa,LucideArrowUpLeftSquare:ga,LucideArrowUpNarrowWide:et,LucideArrowUpRight:qo,LucideArrowUpRightFromCircle:qt,LucideArrowUpRightFromSquare:Ma,LucideArrowUpRightSquare:va,LucideArrowUpSquare:xa,LucideArrowUpToLine:So,LucideArrowUpWideNarrow:Ao,LucideArrowUpZA:tt,LucideArrowUpZa:tt,LucideArrowsUpFromLine:Ho,LucideAsterisk:Po,LucideAsteriskSquare:wa,LucideAtSign:jo,LucideAtom:Vo,LucideAudioLines:Ro,LucideAudioWaveform:_o,LucideAward:Do,LucideAxe:To,LucideAxis3D:at,LucideAxis3d:at,LucideBaby:Oo,LucideBackpack:Fo,LucideBadge:ar,LucideBadgeAlert:Bo,LucideBadgeCent:Eo,LucideBadgeCheck:nt,LucideBadgeDollarSign:Uo,LucideBadgeEuro:No,LucideBadgeHelp:Zo,LucideBadgeIndianRupee:Go,LucideBadgeInfo:$o,LucideBadgeJapaneseYen:Wo,LucideBadgeMinus:Ko,LucideBadgePercent:Xo,LucideBadgePlus:Jo,LucideBadgePoundSterling:Qo,LucideBadgeRussianRuble:Yo,LucideBadgeSwissFranc:er,LucideBadgeX:tr,LucideBaggageClaim:nr,LucideBan:cr,LucideBanana:or,LucideBandage:rr,LucideBanknote:sr,LucideBanknoteArrowDown:ir,LucideBanknoteArrowUp:dr,LucideBanknoteX:hr,LucideBarChart:Mt,LucideBarChart2:mt,LucideBarChart3:kt,LucideBarChart4:ut,LucideBarChartBig:pt,LucideBarChartHorizontal:lt,LucideBarChartHorizontalBig:st,LucideBarcode:lr,LucideBaseline:yr,LucideBath:pr,LucideBattery:vr,LucideBatteryCharging:ur,LucideBatteryFull:kr,LucideBatteryLow:fr,LucideBatteryMedium:Mr,LucideBatteryPlus:mr,LucideBatteryWarning:gr,LucideBeaker:xr,LucideBean:Lr,LucideBeanOff:wr,LucideBed:Sr,LucideBedDouble:br,LucideBedSingle:Ir,LucideBeef:Cr,LucideBeer:Ar,LucideBeerOff:qr,LucideBell:_r,LucideBellDot:zr,LucideBellElectric:Hr,LucideBellMinus:Pr,LucideBellOff:jr,LucideBellPlus:Vr,LucideBellRing:Rr,LucideBetweenHorizonalEnd:ct,LucideBetweenHorizonalStart:ot,LucideBetweenHorizontalEnd:ct,LucideBetweenHorizontalStart:ot,LucideBetweenVerticalEnd:Dr,LucideBetweenVerticalStart:Tr,LucideBicepsFlexed:Fr,LucideBike:Br,LucideBinary:Or,LucideBinoculars:Er,LucideBiohazard:Ur,LucideBird:Nr,LucideBitcoin:Zr,LucideBlend:$r,LucideBlinds:Wr,LucideBlocks:Gr,LucideBluetooth:Qr,LucideBluetoothConnected:Kr,LucideBluetoothOff:Xr,LucideBluetoothSearching:Jr,LucideBold:Yr,LucideBolt:ei,LucideBomb:ti,LucideBone:ai,LucideBook:Ii,LucideBookA:ni,LucideBookAudio:ci,LucideBookCheck:oi,LucideBookCopy:ri,LucideBookDashed:rt,LucideBookDown:ii,LucideBookHeadphones:hi,LucideBookHeart:di,LucideBookImage:si,LucideBookKey:li,LucideBookLock:yi,LucideBookMarked:pi,LucideBookMinus:ui,LucideBookOpen:Mi,LucideBookOpenCheck:ki,LucideBookOpenText:fi,LucideBookPlus:mi,LucideBookTemplate:rt,LucideBookText:gi,LucideBookType:vi,LucideBookUp:wi,LucideBookUp2:xi,LucideBookUser:Li,LucideBookX:bi,LucideBookmark:zi,LucideBookmarkCheck:Ci,LucideBookmarkMinus:Si,LucideBookmarkPlus:qi,LucideBookmarkX:Ai,LucideBoomBox:Hi,LucideBot:Vi,LucideBotMessageSquare:Pi,LucideBotOff:ji,LucideBowArrow:Ri,LucideBox:_i,LucideBoxSelect:ja,LucideBoxes:Di,LucideBraces:it,LucideBrackets:Ti,LucideBrain:Oi,LucideBrainCircuit:Fi,LucideBrainCog:Bi,LucideBrickWall:Ui,LucideBrickWallFire:Ei,LucideBriefcase:Gi,LucideBriefcaseBusiness:Ni,LucideBriefcaseConveyorBelt:Zi,LucideBriefcaseMedical:$i,LucideBringToFront:Wi,LucideBrush:Xi,LucideBrushCleaning:Ki,LucideBubbles:Ji,LucideBug:ed,LucideBugOff:Qi,LucideBugPlay:Yi,LucideBuilding:ad,LucideBuilding2:td,LucideBus:cd,LucideBusFront:nd,LucideCable:rd,LucideCableCar:od,LucideCake:dd,LucideCakeSlice:id,LucideCalculator:hd,LucideCalendar:kn,LucideCalendar1:sd,LucideCalendarArrowDown:ld,LucideCalendarArrowUp:yd,LucideCalendarCheck:ud,LucideCalendarCheck2:pd,LucideCalendarClock:kd,LucideCalendarCog:fd,LucideCalendarDays:Md,LucideCalendarFold:md,LucideCalendarHeart:gd,LucideCalendarMinus:xd,LucideCalendarMinus2:vd,LucideCalendarOff:wd,LucideCalendarPlus:bd,LucideCalendarPlus2:Ld,LucideCalendarRange:Id,LucideCalendarSearch:Cd,LucideCalendarSync:Sd,LucideCalendarX:Ad,LucideCalendarX2:qd,LucideCamera:Hd,LucideCameraOff:zd,LucideCandlestickChart:yt,LucideCandy:Vd,LucideCandyCane:Pd,LucideCandyOff:jd,LucideCannabis:Rd,LucideCaptions:dt,LucideCaptionsOff:_d,LucideCar:Fd,LucideCarFront:Dd,LucideCarTaxiFront:Td,LucideCaravan:Bd,LucideCarrot:Od,LucideCaseLower:Ed,LucideCaseSensitive:Ud,LucideCaseUpper:Nd,LucideCassetteTape:Zd,LucideCast:$d,LucideCastle:Gd,LucideCat:Wd,LucideCctv:Kd,LucideChartArea:ht,LucideChartBar:lt,LucideChartBarBig:st,LucideChartBarDecreasing:Xd,LucideChartBarIncreasing:Jd,LucideChartBarStacked:Qd,LucideChartCandlestick:yt,LucideChartColumn:kt,LucideChartColumnBig:pt,LucideChartColumnDecreasing:Yd,LucideChartColumnIncreasing:ut,LucideChartColumnStacked:eh,LucideChartGantt:th,LucideChartLine:ft,LucideChartNetwork:ah,LucideChartNoAxesColumn:mt,LucideChartNoAxesColumnDecreasing:nh,LucideChartNoAxesColumnIncreasing:Mt,LucideChartNoAxesCombined:ch,LucideChartNoAxesGantt:gt,LucideChartPie:vt,LucideChartScatter:xt,LucideChartSpline:oh,LucideCheck:dh,LucideCheckCheck:rh,LucideCheckCircle:D1,LucideCheckCircle2:Ht,LucideCheckLine:ih,LucideCheckSquare:ba,LucideCheckSquare2:Ia,LucideChefHat:hh,LucideCherry:sh,LucideChevronDown:lh,LucideChevronDownCircle:Pt,LucideChevronDownSquare:Ca,LucideChevronFirst:yh,LucideChevronLast:ph,LucideChevronLeft:uh,LucideChevronLeftCircle:jt,LucideChevronLeftSquare:Sa,LucideChevronRight:kh,LucideChevronRightCircle:Vt,LucideChevronRightSquare:qa,LucideChevronUp:fh,LucideChevronUpCircle:Rt,LucideChevronUpSquare:Aa,LucideChevronsDown:mh,LucideChevronsDownUp:Mh,LucideChevronsLeft:xh,LucideChevronsLeftRight:vh,LucideChevronsLeftRightEllipsis:gh,LucideChevronsRight:Lh,LucideChevronsRightLeft:wh,LucideChevronsUp:Ch,LucideChevronsUpDown:bh,LucideChrome:Ih,LucideChurch:Sh,LucideCigarette:Ah,LucideCigaretteOff:qh,LucideCircle:Oh,LucideCircleAlert:wt,LucideCircleArrowDown:Lt,LucideCircleArrowLeft:bt,LucideCircleArrowOutDownLeft:It,LucideCircleArrowOutDownRight:Ct,LucideCircleArrowOutUpLeft:St,LucideCircleArrowOutUpRight:qt,LucideCircleArrowRight:At,LucideCircleArrowUp:zt,LucideCircleCheck:Ht,LucideCircleCheckBig:D1,LucideCircleChevronDown:Pt,LucideCircleChevronLeft:jt,LucideCircleChevronRight:Vt,LucideCircleChevronUp:Rt,LucideCircleDashed:zh,LucideCircleDivide:_t,LucideCircleDollarSign:Hh,LucideCircleDot:jh,LucideCircleDotDashed:Ph,LucideCircleEllipsis:Vh,LucideCircleEqual:Rh,LucideCircleFadingArrowUp:_h,LucideCircleFadingPlus:Dh,LucideCircleGauge:Dt,LucideCircleHelp:Tt,LucideCircleMinus:Ft,LucideCircleOff:Th,LucideCircleParking:Ot,LucideCircleParkingOff:Bt,LucideCirclePause:Et,LucideCirclePercent:Ut,LucideCirclePlay:Nt,LucideCirclePlus:Zt,LucideCirclePower:$t,LucideCircleSlash:Fh,LucideCircleSlash2:Gt,LucideCircleSlashed:Gt,LucideCircleSmall:Bh,LucideCircleStop:Wt,LucideCircleUser:Xt,LucideCircleUserRound:Kt,LucideCircleX:T1,LucideCircuitBoard:Eh,LucideCitrus:Uh,LucideClapperboard:Nh,LucideClipboard:Yh,LucideClipboardCheck:Zh,LucideClipboardCopy:$h,LucideClipboardEdit:Qt,LucideClipboardList:Gh,LucideClipboardMinus:Wh,LucideClipboardPaste:Kh,LucideClipboardPen:Qt,LucideClipboardPenLine:Jt,LucideClipboardPlus:Xh,LucideClipboardSignature:Jt,LucideClipboardType:Jh,LucideClipboardX:Qh,LucideClock:Ms,LucideClock1:es,LucideClock10:ts,LucideClock11:as,LucideClock12:ns,LucideClock2:cs,LucideClock3:os,LucideClock4:rs,LucideClock5:is,LucideClock6:ds,LucideClock7:hs,LucideClock8:ss,LucideClock9:ls,LucideClockAlert:ys,LucideClockArrowDown:ps,LucideClockArrowUp:us,LucideClockFading:ks,LucideClockPlus:fs,LucideCloud:Ps,LucideCloudAlert:ms,LucideCloudCog:gs,LucideCloudDownload:Yt,LucideCloudDrizzle:vs,LucideCloudFog:xs,LucideCloudHail:ws,LucideCloudLightning:Ls,LucideCloudMoon:Is,LucideCloudMoonRain:bs,LucideCloudOff:Cs,LucideCloudRain:qs,LucideCloudRainWind:Ss,LucideCloudSnow:As,LucideCloudSun:Hs,LucideCloudSunRain:zs,LucideCloudUpload:e2,LucideCloudy:js,LucideClover:Vs,LucideClub:Rs,LucideCode:_s,LucideCode2:t2,LucideCodeSquare:za,LucideCodeXml:t2,LucideCodepen:Ds,LucideCodesandbox:Ts,LucideCoffee:Fs,LucideCog:Bs,LucideCoins:Os,LucideColumns:a2,LucideColumns2:a2,LucideColumns3:n2,LucideColumns3Cog:s1,LucideColumns4:Es,LucideColumnsSettings:s1,LucideCombine:Us,LucideCommand:Ns,LucideCompass:Zs,LucideComponent:$s,LucideComputer:Gs,LucideConciergeBell:Ks,LucideCone:Ws,LucideConstruction:Xs,LucideContact:Js,LucideContact2:c2,LucideContactRound:c2,LucideContainer:Qs,LucideContrast:Ys,LucideCookie:el,LucideCookingPot:tl,LucideCopy:il,LucideCopyCheck:al,LucideCopyMinus:nl,LucideCopyPlus:cl,LucideCopySlash:ol,LucideCopyX:rl,LucideCopyleft:hl,LucideCopyright:dl,LucideCornerDownLeft:sl,LucideCornerDownRight:ll,LucideCornerLeftDown:yl,LucideCornerLeftUp:pl,LucideCornerRightDown:ul,LucideCornerRightUp:kl,LucideCornerUpLeft:fl,LucideCornerUpRight:Ml,LucideCpu:ml,LucideCreativeCommons:gl,LucideCreditCard:vl,LucideCroissant:xl,LucideCrop:wl,LucideCross:Ll,LucideCrosshair:bl,LucideCrown:Il,LucideCuboid:Cl,LucideCupSoda:Sl,LucideCurlyBraces:it,LucideCurrency:ql,LucideCylinder:Al,LucideDam:Hl,LucideDatabase:jl,LucideDatabaseBackup:zl,LucideDatabaseZap:Pl,LucideDecimalsArrowLeft:Vl,LucideDecimalsArrowRight:Rl,LucideDelete:_l,LucideDessert:Tl,LucideDiameter:Dl,LucideDiamond:Ol,LucideDiamondMinus:Fl,LucideDiamondPercent:o2,LucideDiamondPlus:Bl,LucideDice1:El,LucideDice2:Ul,LucideDice3:Nl,LucideDice4:Zl,LucideDice5:$l,LucideDice6:Gl,LucideDices:Wl,LucideDiff:Kl,LucideDisc:Yl,LucideDisc2:Jl,LucideDisc3:Xl,LucideDiscAlbum:Ql,LucideDivide:ey,LucideDivideCircle:_t,LucideDivideSquare:Va,LucideDna:ay,LucideDnaOff:ty,LucideDock:ny,LucideDog:cy,LucideDollarSign:oy,LucideDonut:ry,LucideDoorClosed:dy,LucideDoorClosedLocked:iy,LucideDoorOpen:hy,LucideDot:sy,LucideDotSquare:Ra,LucideDownload:py,LucideDownloadCloud:Yt,LucideDraftingCompass:ly,LucideDrama:yy,LucideDribbble:uy,LucideDrill:ky,LucideDroplet:My,LucideDropletOff:fy,LucideDroplets:gy,LucideDrum:my,LucideDrumstick:vy,LucideDumbbell:xy,LucideEar:Ly,LucideEarOff:wy,LucideEarth:r2,LucideEarthLock:by,LucideEclipse:Cy,LucideEdit:Oe,LucideEdit2:Q2,LucideEdit3:J2,LucideEgg:qy,LucideEggFried:Iy,LucideEggOff:Sy,LucideEllipsis:d2,LucideEllipsisVertical:i2,LucideEqual:Hy,LucideEqualApproximately:Ay,LucideEqualNot:zy,LucideEqualSquare:_a,LucideEraser:Py,LucideEthernetPort:jy,LucideEuro:Vy,LucideExpand:Ry,LucideExternalLink:Dy,LucideEye:Fy,LucideEyeClosed:_y,LucideEyeOff:Ty,LucideFacebook:By,LucideFactory:Oy,LucideFan:Ey,LucideFastForward:Ny,LucideFeather:Uy,LucideFence:Zy,LucideFerrisWheel:$y,LucideFigma:Gy,LucideFile:Up,LucideFileArchive:Wy,LucideFileAudio:Xy,LucideFileAudio2:Ky,LucideFileAxis3D:h2,LucideFileAxis3d:h2,LucideFileBadge:Qy,LucideFileBadge2:Jy,LucideFileBarChart:s2,LucideFileBarChart2:p2,LucideFileBox:Yy,LucideFileChartColumn:p2,LucideFileChartColumnIncreasing:s2,LucideFileChartLine:l2,LucideFileChartPie:y2,LucideFileCheck:tp,LucideFileCheck2:ep,LucideFileClock:cp,LucideFileCode:np,LucideFileCode2:ap,LucideFileCog:u2,LucideFileCog2:u2,LucideFileDiff:op,LucideFileDigit:ip,LucideFileDown:rp,LucideFileEdit:f2,LucideFileHeart:dp,LucideFileImage:hp,LucideFileInput:sp,LucideFileJson:pp,LucideFileJson2:lp,LucideFileKey:up,LucideFileKey2:yp,LucideFileLineChart:l2,LucideFileLock:fp,LucideFileLock2:kp,LucideFileMinus:mp,LucideFileMinus2:Mp,LucideFileMusic:gp,LucideFileOutput:vp,LucideFilePen:f2,LucideFilePenLine:k2,LucideFilePieChart:y2,LucideFilePlus:Lp,LucideFilePlus2:xp,LucideFileQuestion:bp,LucideFileScan:wp,LucideFileSearch:Sp,LucideFileSearch2:Ip,LucideFileSignature:k2,LucideFileSliders:Cp,LucideFileSpreadsheet:zp,LucideFileStack:qp,LucideFileSymlink:Ap,LucideFileTerminal:Hp,LucideFileText:fn,LucideFileType:jp,LucideFileType2:Pp,LucideFileUp:Vp,LucideFileUser:Rp,LucideFileVideo:Dp,LucideFileVideo2:_p,LucideFileVolume:Fp,LucideFileVolume2:Tp,LucideFileWarning:Ep,LucideFileX:Op,LucideFileX2:Bp,LucideFiles:Np,LucideFilm:Zp,LucideFilter:v2,LucideFilterX:g2,LucideFingerprint:$p,LucideFireExtinguisher:Gp,LucideFish:Xp,LucideFishOff:Wp,LucideFishSymbol:Kp,LucideFlag:eu,LucideFlagOff:Jp,LucideFlagTriangleLeft:Qp,LucideFlagTriangleRight:Yp,LucideFlame:au,LucideFlameKindling:tu,LucideFlashlight:cu,LucideFlashlightOff:nu,LucideFlaskConical:ru,LucideFlaskConicalOff:ou,LucideFlaskRound:iu,LucideFlipHorizontal:hu,LucideFlipHorizontal2:du,LucideFlipVertical:su,LucideFlipVertical2:lu,LucideFlower:pu,LucideFlower2:yu,LucideFocus:uu,LucideFoldHorizontal:ku,LucideFoldVertical:fu,LucideFolder:Nu,LucideFolderArchive:Mu,LucideFolderCheck:mu,LucideFolderClock:gu,LucideFolderClosed:vu,LucideFolderCode:xu,LucideFolderCog:M2,LucideFolderCog2:M2,LucideFolderDot:wu,LucideFolderDown:Lu,LucideFolderEdit:m2,LucideFolderGit:Iu,LucideFolderGit2:bu,LucideFolderHeart:Cu,LucideFolderInput:Su,LucideFolderKanban:qu,LucideFolderKey:Au,LucideFolderLock:Hu,LucideFolderMinus:Pu,LucideFolderOpen:ju,LucideFolderOpenDot:zu,LucideFolderOutput:Vu,LucideFolderPen:m2,LucideFolderPlus:Ru,LucideFolderRoot:_u,LucideFolderSearch:Tu,LucideFolderSearch2:Du,LucideFolderSymlink:Fu,LucideFolderSync:Bu,LucideFolderTree:Eu,LucideFolderUp:Ou,LucideFolderX:Uu,LucideFolders:Zu,LucideFootprints:$u,LucideForkKnife:w0,LucideForkKnifeCrossed:x0,LucideForklift:Gu,LucideFormInput:ea,LucideForward:Wu,LucideFrame:Ku,LucideFramer:Xu,LucideFrown:Ju,LucideFuel:Qu,LucideFullscreen:Yu,LucideFunctionSquare:Da,LucideFunnel:v2,LucideFunnelPlus:e4,LucideFunnelX:g2,LucideGalleryHorizontal:a4,LucideGalleryHorizontalEnd:t4,LucideGalleryThumbnails:n4,LucideGalleryVertical:o4,LucideGalleryVerticalEnd:c4,LucideGamepad:i4,LucideGamepad2:r4,LucideGanttChart:gt,LucideGanttChartSquare:y1,LucideGauge:d4,LucideGaugeCircle:Dt,LucideGavel:h4,LucideGem:s4,LucideGhost:l4,LucideGift:y4,LucideGitBranch:u4,LucideGitBranchPlus:p4,LucideGitCommit:x2,LucideGitCommitHorizontal:x2,LucideGitCommitVertical:k4,LucideGitCompare:M4,LucideGitCompareArrows:f4,LucideGitFork:m4,LucideGitGraph:g4,LucideGitMerge:v4,LucideGitPullRequest:C4,LucideGitPullRequestArrow:x4,LucideGitPullRequestClosed:w4,LucideGitPullRequestCreate:I4,LucideGitPullRequestCreateArrow:L4,LucideGitPullRequestDraft:b4,LucideGithub:S4,LucideGitlab:q4,LucideGlassWater:A4,LucideGlasses:z4,LucideGlobe:P4,LucideGlobe2:r2,LucideGlobeLock:H4,LucideGoal:j4,LucideGpu:V4,LucideGrab:R4,LucideGraduationCap:D4,LucideGrape:_4,LucideGrid:l1,LucideGrid2X2:I2,LucideGrid2X2Check:w2,LucideGrid2X2Plus:L2,LucideGrid2X2X:b2,LucideGrid2x2:I2,LucideGrid2x2Check:w2,LucideGrid2x2Plus:L2,LucideGrid2x2X:b2,LucideGrid3X3:l1,LucideGrid3x3:l1,LucideGrip:B4,LucideGripHorizontal:T4,LucideGripVertical:F4,LucideGroup:O4,LucideGuitar:E4,LucideHam:U4,LucideHamburger:N4,LucideHammer:Z4,LucideHand:X4,LucideHandCoins:$4,LucideHandHeart:G4,LucideHandHelping:C2,LucideHandMetal:W4,LucideHandPlatter:K4,LucideHandshake:J4,LucideHardDrive:ek,LucideHardDriveDownload:Y4,LucideHardDriveUpload:Q4,LucideHardHat:tk,LucideHash:ak,LucideHaze:nk,LucideHdmiPort:ck,LucideHeading:lk,LucideHeading1:ok,LucideHeading2:rk,LucideHeading3:ik,LucideHeading4:dk,LucideHeading5:hk,LucideHeading6:sk,LucideHeadphoneOff:yk,LucideHeadphones:pk,LucideHeadset:uk,LucideHeart:xk,LucideHeartCrack:fk,LucideHeartHandshake:kk,LucideHeartMinus:Mk,LucideHeartOff:mk,LucideHeartPlus:gk,LucideHeartPulse:vk,LucideHeater:wk,LucideHelpCircle:Tt,LucideHelpingHand:C2,LucideHexagon:Lk,LucideHighlighter:bk,LucideHistory:Ik,LucideHome:S2,LucideHop:Sk,LucideHopOff:Ck,LucideHospital:qk,LucideHotel:Ak,LucideHourglass:zk,LucideHouse:S2,LucideHousePlug:Hk,LucideHousePlus:Pk,LucideHouseWifi:jk,LucideIceCream:A2,LucideIceCream2:q2,LucideIceCreamBowl:q2,LucideIceCreamCone:A2,LucideIdCard:Vk,LucideImage:Ek,LucideImageDown:Rk,LucideImageMinus:_k,LucideImageOff:Dk,LucideImagePlay:Tk,LucideImagePlus:Fk,LucideImageUp:Bk,LucideImageUpscale:Ok,LucideImages:Uk,LucideImport:Nk,LucideInbox:Zk,LucideIndent:H2,LucideIndentDecrease:z2,LucideIndentIncrease:H2,LucideIndianRupee:$k,LucideInfinity:Gk,LucideInfo:Wk,LucideInspect:Ua,LucideInspectionPanel:Xk,LucideInstagram:Kk,LucideItalic:Jk,LucideIterationCcw:Qk,LucideIterationCw:Yk,LucideJapaneseYen:e5,LucideJoystick:a5,LucideKanban:t5,LucideKanbanSquare:Ta,LucideKanbanSquareDashed:Ha,LucideKey:o5,LucideKeyRound:n5,LucideKeySquare:c5,LucideKeyboard:d5,LucideKeyboardMusic:r5,LucideKeyboardOff:i5,LucideLamp:u5,LucideLampCeiling:h5,LucideLampDesk:s5,LucideLampFloor:l5,LucideLampWallDown:y5,LucideLampWallUp:p5,LucideLandPlot:k5,LucideLandmark:f5,LucideLanguages:M5,LucideLaptop:g5,LucideLaptop2:P2,LucideLaptopMinimal:P2,LucideLaptopMinimalCheck:m5,LucideLasso:x5,LucideLassoSelect:v5,LucideLaugh:w5,LucideLayers:j2,LucideLayers2:L5,LucideLayers3:j2,LucideLayout:X2,LucideLayoutDashboard:b5,LucideLayoutGrid:I5,LucideLayoutList:C5,LucideLayoutPanelLeft:q5,LucideLayoutPanelTop:S5,LucideLayoutTemplate:A5,LucideLeaf:z5,LucideLeafyGreen:P5,LucideLectern:H5,LucideLetterText:j5,LucideLibrary:_5,LucideLibraryBig:V5,LucideLibrarySquare:Fa,LucideLifeBuoy:R5,LucideLigature:D5,LucideLightbulb:F5,LucideLightbulbOff:T5,LucideLineChart:ft,LucideLink:E5,LucideLink2:O5,LucideLink2Off:B5,LucideLinkedin:U5,LucideList:r3,LucideListCheck:N5,LucideListChecks:Z5,LucideListCollapse:$5,LucideListEnd:G5,LucideListFilter:X5,LucideListFilterPlus:W5,LucideListMinus:K5,LucideListMusic:J5,LucideListOrdered:Y5,LucideListPlus:Q5,LucideListRestart:e3,LucideListStart:t3,LucideListTodo:a3,LucideListTree:c3,LucideListVideo:n3,LucideListX:o3,LucideLoader:d3,LucideLoader2:V2,LucideLoaderCircle:V2,LucideLoaderPinwheel:i3,LucideLocate:l3,LucideLocateFixed:h3,LucideLocateOff:s3,LucideLocationEdit:y3,LucideLock:u3,LucideLockKeyhole:p3,LucideLockKeyholeOpen:R2,LucideLockOpen:_2,LucideLogIn:k3,LucideLogOut:f3,LucideLogs:M3,LucideLollipop:m3,LucideLuggage:g3,LucideMSquare:Ba,LucideMagnet:v3,LucideMail:z3,LucideMailCheck:x3,LucideMailMinus:w3,LucideMailOpen:L3,LucideMailPlus:b3,LucideMailQuestion:I3,LucideMailSearch:C3,LucideMailWarning:S3,LucideMailX:q3,LucideMailbox:A3,LucideMails:H3,LucideMap:Z3,LucideMapPin:E3,LucideMapPinCheck:j3,LucideMapPinCheckInside:P3,LucideMapPinHouse:V3,LucideMapPinMinus:_3,LucideMapPinMinusInside:R3,LucideMapPinOff:D3,LucideMapPinPlus:B3,LucideMapPinPlusInside:T3,LucideMapPinX:O3,LucideMapPinXInside:F3,LucideMapPinned:U3,LucideMapPlus:N3,LucideMars:G3,LucideMarsStroke:$3,LucideMartini:W3,LucideMaximize:X3,LucideMaximize2:K3,LucideMedal:J3,LucideMegaphone:e6,LucideMegaphoneOff:Q3,LucideMeh:Y3,LucideMemoryStick:t6,LucideMenu:Mn,LucideMenuSquare:Oa,LucideMerge:a6,LucideMessageCircle:p6,LucideMessageCircleCode:n6,LucideMessageCircleDashed:o6,LucideMessageCircleHeart:c6,LucideMessageCircleMore:r6,LucideMessageCircleOff:i6,LucideMessageCirclePlus:d6,LucideMessageCircleQuestion:h6,LucideMessageCircleReply:s6,LucideMessageCircleWarning:l6,LucideMessageCircleX:y6,LucideMessageSquare:A6,LucideMessageSquareCode:u6,LucideMessageSquareDashed:k6,LucideMessageSquareDiff:f6,LucideMessageSquareDot:M6,LucideMessageSquareHeart:m6,LucideMessageSquareLock:g6,LucideMessageSquareMore:v6,LucideMessageSquareOff:x6,LucideMessageSquarePlus:w6,LucideMessageSquareQuote:L6,LucideMessageSquareReply:b6,LucideMessageSquareShare:C6,LucideMessageSquareText:I6,LucideMessageSquareWarning:S6,LucideMessageSquareX:q6,LucideMessagesSquare:z6,LucideMic:P6,LucideMic2:D2,LucideMicOff:H6,LucideMicVocal:D2,LucideMicrochip:j6,LucideMicroscope:V6,LucideMicrowave:R6,LucideMilestone:_6,LucideMilk:T6,LucideMilkOff:D6,LucideMinimize:B6,LucideMinimize2:F6,LucideMinus:O6,LucideMinusCircle:Ft,LucideMinusSquare:Ea,LucideMonitor:e8,LucideMonitorCheck:E6,LucideMonitorCog:U6,LucideMonitorDot:N6,LucideMonitorDown:Z6,LucideMonitorOff:$6,LucideMonitorPause:G6,LucideMonitorPlay:W6,LucideMonitorSmartphone:K6,LucideMonitorSpeaker:X6,LucideMonitorStop:J6,LucideMonitorUp:Q6,LucideMonitorX:Y6,LucideMoon:t8,LucideMoonStar:a8,LucideMoreHorizontal:d2,LucideMoreVertical:i2,LucideMountain:c8,LucideMountainSnow:n8,LucideMouse:s8,LucideMouseOff:o8,LucideMousePointer:h8,LucideMousePointer2:r8,LucideMousePointerBan:i8,LucideMousePointerClick:d8,LucideMousePointerSquareDashed:Pa,LucideMove:L8,LucideMove3D:T2,LucideMove3d:T2,LucideMoveDiagonal:y8,LucideMoveDiagonal2:l8,LucideMoveDown:k8,LucideMoveDownLeft:p8,LucideMoveDownRight:u8,LucideMoveHorizontal:f8,LucideMoveLeft:M8,LucideMoveRight:m8,LucideMoveUp:x8,LucideMoveUpLeft:g8,LucideMoveUpRight:v8,LucideMoveVertical:w8,LucideMusic:S8,LucideMusic2:b8,LucideMusic3:I8,LucideMusic4:C8,LucideNavigation:P8,LucideNavigation2:A8,LucideNavigation2Off:q8,LucideNavigationOff:z8,LucideNetwork:H8,LucideNewspaper:j8,LucideNfc:V8,LucideNonBinary:R8,LucideNotebook:F8,LucideNotebookPen:_8,LucideNotebookTabs:D8,LucideNotebookText:T8,LucideNotepadText:O8,LucideNotepadTextDashed:B8,LucideNut:U8,LucideNutOff:E8,LucideOctagon:Z8,LucideOctagonAlert:F2,LucideOctagonMinus:N8,LucideOctagonPause:B2,LucideOctagonX:O2,LucideOmega:$8,LucideOption:G8,LucideOrbit:W8,LucideOrigami:K8,LucideOutdent:z2,LucidePackage:n7,LucidePackage2:X8,LucidePackageCheck:J8,LucidePackageMinus:Q8,LucidePackageOpen:Y8,LucidePackagePlus:e7,LucidePackageSearch:t7,LucidePackageX:a7,LucidePaintBucket:c7,LucidePaintRoller:o7,LucidePaintbrush:r7,LucidePaintbrush2:E2,LucidePaintbrushVertical:E2,LucidePalette:i7,LucidePalmtree:s0,LucidePanda:d7,LucidePanelBottom:l7,LucidePanelBottomClose:h7,LucidePanelBottomDashed:U2,LucidePanelBottomInactive:U2,LucidePanelBottomOpen:s7,LucidePanelLeft:G2,LucidePanelLeftClose:N2,LucidePanelLeftDashed:Z2,LucidePanelLeftInactive:Z2,LucidePanelLeftOpen:$2,LucidePanelRight:p7,LucidePanelRightClose:y7,LucidePanelRightDashed:W2,LucidePanelRightInactive:W2,LucidePanelRightOpen:u7,LucidePanelTop:M7,LucidePanelTopClose:k7,LucidePanelTopDashed:K2,LucidePanelTopInactive:K2,LucidePanelTopOpen:f7,LucidePanelsLeftBottom:m7,LucidePanelsLeftRight:n2,LucidePanelsRightBottom:g7,LucidePanelsTopBottom:na,LucidePanelsTopLeft:X2,LucidePaperclip:v7,LucideParentheses:x7,LucideParkingCircle:Ot,LucideParkingCircleOff:Bt,LucideParkingMeter:w7,LucideParkingSquare:Za,LucideParkingSquareOff:Na,LucidePartyPopper:L7,LucidePause:b7,LucidePauseCircle:Et,LucidePauseOctagon:B2,LucidePawPrint:I7,LucidePcCase:C7,LucidePen:Q2,LucidePenBox:Oe,LucidePenLine:J2,LucidePenOff:S7,LucidePenSquare:Oe,LucidePenTool:q7,LucidePencil:P7,LucidePencilLine:A7,LucidePencilOff:z7,LucidePencilRuler:H7,LucidePentagon:j7,LucidePercent:V7,LucidePercentCircle:Ut,LucidePercentDiamond:o2,LucidePercentSquare:$a,LucidePersonStanding:R7,LucidePhilippinePeso:_7,LucidePhone:U7,LucidePhoneCall:D7,LucidePhoneForwarded:T7,LucidePhoneIncoming:F7,LucidePhoneMissed:B7,LucidePhoneOff:O7,LucidePhoneOutgoing:E7,LucidePi:N7,LucidePiSquare:Ga,LucidePiano:Z7,LucidePickaxe:$7,LucidePictureInPicture:W7,LucidePictureInPicture2:G7,LucidePieChart:vt,LucidePiggyBank:K7,LucidePilcrow:Q7,LucidePilcrowLeft:X7,LucidePilcrowRight:J7,LucidePilcrowSquare:Wa,LucidePill:ef,LucidePillBottle:Y7,LucidePin:tf,LucidePinOff:cf,LucidePipette:af,LucidePizza:nf,LucidePlane:df,LucidePlaneLanding:of,LucidePlaneTakeoff:rf,LucidePlay:hf,LucidePlayCircle:Nt,LucidePlaySquare:Ka,LucidePlug:lf,LucidePlug2:sf,LucidePlugZap:Y2,LucidePlugZap2:Y2,LucidePlus:yf,LucidePlusCircle:Zt,LucidePlusSquare:Xa,LucidePocket:uf,LucidePocketKnife:pf,LucidePodcast:kf,LucidePointer:Mf,LucidePointerOff:ff,LucidePopcorn:mf,LucidePopsicle:gf,LucidePoundSterling:xf,LucidePower:wf,LucidePowerCircle:$t,LucidePowerOff:vf,LucidePowerSquare:Ja,LucidePresentation:Lf,LucidePrinter:If,LucidePrinterCheck:bf,LucideProjector:Cf,LucideProportions:Sf,LucidePuzzle:qf,LucidePyramid:Af,LucideQrCode:zf,LucideQuote:Hf,LucideRabbit:Pf,LucideRadar:jf,LucideRadiation:Vf,LucideRadical:Rf,LucideRadio:Tf,LucideRadioReceiver:_f,LucideRadioTower:Df,LucideRadius:Ff,LucideRailSymbol:Bf,LucideRainbow:Of,LucideRat:Ef,LucideRatio:Uf,LucideReceipt:Qf,LucideReceiptCent:Nf,LucideReceiptEuro:Zf,LucideReceiptIndianRupee:$f,LucideReceiptJapaneseYen:Gf,LucideReceiptPoundSterling:Wf,LucideReceiptRussianRuble:Kf,LucideReceiptSwissFranc:Xf,LucideReceiptText:Jf,LucideRectangleEllipsis:ea,LucideRectangleGoggles:Yf,LucideRectangleHorizontal:e9,LucideRectangleVertical:t9,LucideRecycle:a9,LucideRedo:o9,LucideRedo2:n9,LucideRedoDot:c9,LucideRefreshCcw:i9,LucideRefreshCcwDot:r9,LucideRefreshCw:h9,LucideRefreshCwOff:d9,LucideRefrigerator:s9,LucideRegex:l9,LucideRemoveFormatting:y9,LucideRepeat:k9,LucideRepeat1:p9,LucideRepeat2:u9,LucideReplace:M9,LucideReplaceAll:f9,LucideReply:g9,LucideReplyAll:m9,LucideRewind:v9,LucideRibbon:x9,LucideRocket:w9,LucideRockingChair:L9,LucideRollerCoaster:b9,LucideRotate3D:ta,LucideRotate3d:ta,LucideRotateCcw:S9,LucideRotateCcwKey:I9,LucideRotateCcwSquare:C9,LucideRotateCw:A9,LucideRotateCwSquare:q9,LucideRoute:H9,LucideRouteOff:z9,LucideRouter:P9,LucideRows:aa,LucideRows2:aa,LucideRows3:na,LucideRows4:j9,LucideRss:V9,LucideRuler:D9,LucideRulerDimensionLine:R9,LucideRussianRuble:_9,LucideSailboat:T9,LucideSalad:F9,LucideSandwich:B9,LucideSatellite:E9,LucideSatelliteDish:O9,LucideSaudiRiyal:U9,LucideSave:$9,LucideSaveAll:N9,LucideSaveOff:Z9,LucideScale:G9,LucideScale3D:ca,LucideScale3d:ca,LucideScaling:W9,LucideScan:nM,LucideScanBarcode:K9,LucideScanEye:X9,LucideScanFace:J9,LucideScanHeart:Q9,LucideScanLine:Y9,LucideScanQrCode:eM,LucideScanSearch:tM,LucideScanText:aM,LucideScatterChart:xt,LucideSchool:rM,LucideSchool2:p0,LucideScissors:oM,LucideScissorsLineDashed:cM,LucideScissorsSquare:Qa,LucideScissorsSquareDashedBottom:La,LucideScreenShare:dM,LucideScreenShareOff:iM,LucideScroll:sM,LucideScrollText:hM,LucideSearch:kM,LucideSearchCheck:yM,LucideSearchCode:lM,LucideSearchSlash:pM,LucideSearchX:uM,LucideSection:fM,LucideSend:mM,LucideSendHorizonal:oa,LucideSendHorizontal:oa,LucideSendToBack:MM,LucideSeparatorHorizontal:gM,LucideSeparatorVertical:vM,LucideServer:bM,LucideServerCog:xM,LucideServerCrash:wM,LucideServerOff:LM,LucideSettings:CM,LucideSettings2:IM,LucideShapes:SM,LucideShare:AM,LucideShare2:qM,LucideSheet:zM,LucideShell:HM,LucideShield:EM,LucideShieldAlert:PM,LucideShieldBan:jM,LucideShieldCheck:VM,LucideShieldClose:ra,LucideShieldEllipsis:RM,LucideShieldHalf:_M,LucideShieldMinus:DM,LucideShieldOff:TM,LucideShieldPlus:FM,LucideShieldQuestion:BM,LucideShieldUser:OM,LucideShieldX:ra,LucideShip:NM,LucideShipWheel:UM,LucideShirt:ZM,LucideShoppingBag:$M,LucideShoppingBasket:GM,LucideShoppingCart:WM,LucideShovel:KM,LucideShowerHead:XM,LucideShredder:JM,LucideShrimp:QM,LucideShrink:YM,LucideShrub:em,LucideShuffle:tm,LucideSidebar:G2,LucideSidebarClose:N2,LucideSidebarOpen:$2,LucideSigma:am,LucideSigmaSquare:Ya,LucideSignal:im,LucideSignalHigh:nm,LucideSignalLow:cm,LucideSignalMedium:om,LucideSignalZero:rm,LucideSignature:dm,LucideSignpost:sm,LucideSignpostBig:hm,LucideSiren:lm,LucideSkipBack:ym,LucideSkipForward:pm,LucideSkull:um,LucideSlack:km,LucideSlash:fm,LucideSlashSquare:e0,LucideSlice:Mm,LucideSliders:ia,LucideSlidersHorizontal:mm,LucideSlidersVertical:ia,LucideSmartphone:xm,LucideSmartphoneCharging:gm,LucideSmartphoneNfc:vm,LucideSmile:Lm,LucideSmilePlus:wm,LucideSnail:bm,LucideSnowflake:Im,LucideSoapDispenserDroplet:Cm,LucideSofa:Sm,LucideSortAsc:et,LucideSortDesc:J1,LucideSoup:qm,LucideSpace:Am,LucideSpade:zm,LucideSparkle:Pm,LucideSparkles:da,LucideSpeaker:Hm,LucideSpeech:jm,LucideSpellCheck:Vm,LucideSpellCheck2:Rm,LucideSpline:Dm,LucideSplinePointer:_m,LucideSplit:Tm,LucideSplitSquareHorizontal:t0,LucideSplitSquareVertical:a0,LucideSprayCan:Fm,LucideSprout:Bm,LucideSquare:Wm,LucideSquareActivity:ha,LucideSquareArrowDown:ya,LucideSquareArrowDownLeft:la,LucideSquareArrowDownRight:sa,LucideSquareArrowLeft:pa,LucideSquareArrowOutDownLeft:ua,LucideSquareArrowOutDownRight:ka,LucideSquareArrowOutUpLeft:fa,LucideSquareArrowOutUpRight:Ma,LucideSquareArrowRight:ma,LucideSquareArrowUp:xa,LucideSquareArrowUpLeft:ga,LucideSquareArrowUpRight:va,LucideSquareAsterisk:wa,LucideSquareBottomDashedScissors:La,LucideSquareChartGantt:y1,LucideSquareCheck:Ia,LucideSquareCheckBig:ba,LucideSquareChevronDown:Ca,LucideSquareChevronLeft:Sa,LucideSquareChevronRight:qa,LucideSquareChevronUp:Aa,LucideSquareCode:za,LucideSquareDashed:ja,LucideSquareDashedBottom:Em,LucideSquareDashedBottomCode:Om,LucideSquareDashedKanban:Ha,LucideSquareDashedMousePointer:Pa,LucideSquareDivide:Va,LucideSquareDot:Ra,LucideSquareEqual:_a,LucideSquareFunction:Da,LucideSquareGanttChart:y1,LucideSquareKanban:Ta,LucideSquareLibrary:Fa,LucideSquareM:Ba,LucideSquareMenu:Oa,LucideSquareMinus:Ea,LucideSquareMousePointer:Ua,LucideSquareParking:Za,LucideSquareParkingOff:Na,LucideSquarePen:Oe,LucideSquarePercent:$a,LucideSquarePi:Ga,LucideSquarePilcrow:Wa,LucideSquarePlay:Ka,LucideSquarePlus:Xa,LucideSquarePower:Ja,LucideSquareRadical:Um,LucideSquareRoundCorner:Nm,LucideSquareScissors:Qa,LucideSquareSigma:Ya,LucideSquareSlash:e0,LucideSquareSplitHorizontal:t0,LucideSquareSplitVertical:a0,LucideSquareSquare:Zm,LucideSquareStack:$m,LucideSquareTerminal:n0,LucideSquareUser:o0,LucideSquareUserRound:c0,LucideSquareX:r0,LucideSquaresExclude:Gm,LucideSquaresIntersect:Km,LucideSquaresSubtract:Xm,LucideSquaresUnite:Jm,LucideSquircle:Qm,LucideSquirrel:Ym,LucideStamp:eg,LucideStar:ng,LucideStarHalf:tg,LucideStarOff:ag,LucideStars:da,LucideStepBack:cg,LucideStepForward:og,LucideStethoscope:rg,LucideSticker:ig,LucideStickyNote:dg,LucideStopCircle:Wt,LucideStore:hg,LucideStretchHorizontal:sg,LucideStretchVertical:lg,LucideStrikethrough:yg,LucideSubscript:pg,LucideSubtitles:dt,LucideSun:mg,LucideSunDim:ug,LucideSunMedium:kg,LucideSunMoon:fg,LucideSunSnow:Mg,LucideSunrise:gg,LucideSunset:vg,LucideSuperscript:xg,LucideSwatchBook:wg,LucideSwissFranc:Lg,LucideSwitchCamera:bg,LucideSword:Ig,LucideSwords:Cg,LucideSyringe:Sg,LucideTable:Dg,LucideTable2:qg,LucideTableCellsMerge:Ag,LucideTableCellsSplit:zg,LucideTableColumnsSplit:Hg,LucideTableConfig:s1,LucideTableOfContents:Pg,LucideTableProperties:jg,LucideTableRowsSplit:Vg,LucideTablet:_g,LucideTabletSmartphone:Rg,LucideTablets:Tg,LucideTag:Fg,LucideTags:Bg,LucideTally1:Og,LucideTally2:Eg,LucideTally3:Ug,LucideTally4:Ng,LucideTally5:Zg,LucideTangent:$g,LucideTarget:Gg,LucideTelescope:Wg,LucideTent:Xg,LucideTentTree:Kg,LucideTerminal:Jg,LucideTerminalSquare:n0,LucideTestTube:Qg,LucideTestTube2:i0,LucideTestTubeDiagonal:i0,LucideTestTubes:Yg,LucideText:cv,LucideTextCursor:tv,LucideTextCursorInput:ev,LucideTextQuote:av,LucideTextSearch:nv,LucideTextSelect:d0,LucideTextSelection:d0,LucideTheater:ov,LucideThermometer:dv,LucideThermometerSnowflake:rv,LucideThermometerSun:iv,LucideThumbsDown:hv,LucideThumbsUp:sv,LucideTicket:Mv,LucideTicketCheck:lv,LucideTicketMinus:yv,LucideTicketPercent:pv,LucideTicketPlus:uv,LucideTicketSlash:fv,LucideTicketX:kv,LucideTickets:gv,LucideTicketsPlane:mv,LucideTimer:wv,LucideTimerOff:vv,LucideTimerReset:xv,LucideToggleLeft:Lv,LucideToggleRight:bv,LucideToilet:Iv,LucideTornado:Cv,LucideTorus:Sv,LucideTouchpad:Av,LucideTouchpadOff:qv,LucideTowerControl:zv,LucideToyBrick:Hv,LucideTractor:Pv,LucideTrafficCone:jv,LucideTrain:h0,LucideTrainFront:Rv,LucideTrainFrontTunnel:Vv,LucideTrainTrack:_v,LucideTramFront:h0,LucideTransgender:Dv,LucideTrash:Fv,LucideTrash2:Tv,LucideTreeDeciduous:Bv,LucideTreePalm:s0,LucideTreePine:Ov,LucideTrees:Ev,LucideTrello:Uv,LucideTrendingDown:Nv,LucideTrendingUp:$v,LucideTrendingUpDown:Zv,LucideTriangle:Kv,LucideTriangleAlert:l0,LucideTriangleDashed:Gv,LucideTriangleRight:Wv,LucideTrophy:Xv,LucideTruck:Qv,LucideTruckElectric:Jv,LucideTurtle:Yv,LucideTv:tx,LucideTv2:y0,LucideTvMinimal:y0,LucideTvMinimalPlay:ex,LucideTwitch:ax,LucideTwitter:nx,LucideType:ox,LucideTypeOutline:cx,LucideUmbrella:ix,LucideUmbrellaOff:rx,LucideUnderline:dx,LucideUndo:lx,LucideUndo2:hx,LucideUndoDot:sx,LucideUnfoldHorizontal:yx,LucideUnfoldVertical:px,LucideUngroup:ux,LucideUniversity:p0,LucideUnlink:fx,LucideUnlink2:kx,LucideUnlock:_2,LucideUnlockKeyhole:R2,LucideUnplug:Mx,LucideUpload:mx,LucideUploadCloud:e2,LucideUsb:gx,LucideUser:zx,LucideUser2:g0,LucideUserCheck:vx,LucideUserCheck2:u0,LucideUserCircle:Xt,LucideUserCircle2:Kt,LucideUserCog:xx,LucideUserCog2:k0,LucideUserLock:wx,LucideUserMinus:Lx,LucideUserMinus2:f0,LucideUserPen:bx,LucideUserPlus:Ix,LucideUserPlus2:M0,LucideUserRound:g0,LucideUserRoundCheck:u0,LucideUserRoundCog:k0,LucideUserRoundMinus:f0,LucideUserRoundPen:Cx,LucideUserRoundPlus:M0,LucideUserRoundSearch:Sx,LucideUserRoundX:m0,LucideUserSearch:qx,LucideUserSquare:o0,LucideUserSquare2:c0,LucideUserX:Ax,LucideUserX2:m0,LucideUsers:Hx,LucideUsers2:v0,LucideUsersRound:v0,LucideUtensils:w0,LucideUtensilsCrossed:x0,LucideUtilityPole:Px,LucideVariable:jx,LucideVault:Vx,LucideVegan:Rx,LucideVenetianMask:Dx,LucideVenus:Tx,LucideVenusAndMars:_x,LucideVerified:nt,LucideVibrate:Ex,LucideVibrateOff:Fx,LucideVideo:Ox,LucideVideoOff:Bx,LucideVideotape:Ux,LucideView:Nx,LucideVoicemail:Zx,LucideVolleyball:$x,LucideVolume:Qx,LucideVolume1:Gx,LucideVolume2:Wx,LucideVolumeOff:Kx,LucideVolumeX:Xx,LucideVote:Jx,LucideWallet:ew,LucideWallet2:L0,LucideWalletCards:Yx,LucideWalletMinimal:L0,LucideWallpaper:tw,LucideWand:aw,LucideWand2:b0,LucideWandSparkles:b0,LucideWarehouse:nw,LucideWashingMachine:cw,LucideWatch:ow,LucideWaves:iw,LucideWavesLadder:rw,LucideWaypoints:dw,LucideWebcam:hw,LucideWebhook:lw,LucideWebhookOff:sw,LucideWeight:yw,LucideWheat:uw,LucideWheatOff:pw,LucideWholeWord:kw,LucideWifi:ww,LucideWifiHigh:fw,LucideWifiLow:Mw,LucideWifiOff:mw,LucideWifiPen:gw,LucideWifiZero:vw,LucideWind:Lw,LucideWindArrowDown:xw,LucideWine:Sw,LucideWineOff:bw,LucideWorkflow:Iw,LucideWorm:Cw,LucideWrapText:qw,LucideWrench:Aw,LucideX:zw,LucideXCircle:T1,LucideXOctagon:O2,LucideXSquare:r0,LucideYoutube:Hw,LucideZap:jw,LucideZapOff:Pw,LucideZoomIn:Rw,LucideZoomOut:Vw,Luggage:g3,LuggageIcon:g3,MSquare:Ba,MSquareIcon:Ba,Magnet:v3,MagnetIcon:v3,Mail:z3,MailCheck:x3,MailCheckIcon:x3,MailIcon:z3,MailMinus:w3,MailMinusIcon:w3,MailOpen:L3,MailOpenIcon:L3,MailPlus:b3,MailPlusIcon:b3,MailQuestion:I3,MailQuestionIcon:I3,MailSearch:C3,MailSearchIcon:C3,MailWarning:S3,MailWarningIcon:S3,MailX:q3,MailXIcon:q3,Mailbox:A3,MailboxIcon:A3,Mails:H3,MailsIcon:H3,Map:Z3,MapIcon:Z3,MapPin:E3,MapPinCheck:j3,MapPinCheckIcon:j3,MapPinCheckInside:P3,MapPinCheckInsideIcon:P3,MapPinHouse:V3,MapPinHouseIcon:V3,MapPinIcon:E3,MapPinMinus:_3,MapPinMinusIcon:_3,MapPinMinusInside:R3,MapPinMinusInsideIcon:R3,MapPinOff:D3,MapPinOffIcon:D3,MapPinPlus:B3,MapPinPlusIcon:B3,MapPinPlusInside:T3,MapPinPlusInsideIcon:T3,MapPinX:O3,MapPinXIcon:O3,MapPinXInside:F3,MapPinXInsideIcon:F3,MapPinned:U3,MapPinnedIcon:U3,MapPlus:N3,MapPlusIcon:N3,Mars:G3,MarsIcon:G3,MarsStroke:$3,MarsStrokeIcon:$3,Martini:W3,MartiniIcon:W3,Maximize:X3,Maximize2:K3,Maximize2Icon:K3,MaximizeIcon:X3,Medal:J3,MedalIcon:J3,Megaphone:e6,MegaphoneIcon:e6,MegaphoneOff:Q3,MegaphoneOffIcon:Q3,Meh:Y3,MehIcon:Y3,MemoryStick:t6,MemoryStickIcon:t6,Menu:Mn,MenuIcon:Mn,MenuSquare:Oa,MenuSquareIcon:Oa,Merge:a6,MergeIcon:a6,MessageCircle:p6,MessageCircleCode:n6,MessageCircleCodeIcon:n6,MessageCircleDashed:o6,MessageCircleDashedIcon:o6,MessageCircleHeart:c6,MessageCircleHeartIcon:c6,MessageCircleIcon:p6,MessageCircleMore:r6,MessageCircleMoreIcon:r6,MessageCircleOff:i6,MessageCircleOffIcon:i6,MessageCirclePlus:d6,MessageCirclePlusIcon:d6,MessageCircleQuestion:h6,MessageCircleQuestionIcon:h6,MessageCircleReply:s6,MessageCircleReplyIcon:s6,MessageCircleWarning:l6,MessageCircleWarningIcon:l6,MessageCircleX:y6,MessageCircleXIcon:y6,MessageSquare:A6,MessageSquareCode:u6,MessageSquareCodeIcon:u6,MessageSquareDashed:k6,MessageSquareDashedIcon:k6,MessageSquareDiff:f6,MessageSquareDiffIcon:f6,MessageSquareDot:M6,MessageSquareDotIcon:M6,MessageSquareHeart:m6,MessageSquareHeartIcon:m6,MessageSquareIcon:A6,MessageSquareLock:g6,MessageSquareLockIcon:g6,MessageSquareMore:v6,MessageSquareMoreIcon:v6,MessageSquareOff:x6,MessageSquareOffIcon:x6,MessageSquarePlus:w6,MessageSquarePlusIcon:w6,MessageSquareQuote:L6,MessageSquareQuoteIcon:L6,MessageSquareReply:b6,MessageSquareReplyIcon:b6,MessageSquareShare:C6,MessageSquareShareIcon:C6,MessageSquareText:I6,MessageSquareTextIcon:I6,MessageSquareWarning:S6,MessageSquareWarningIcon:S6,MessageSquareX:q6,MessageSquareXIcon:q6,MessagesSquare:z6,MessagesSquareIcon:z6,Mic:P6,Mic2:D2,Mic2Icon:D2,MicIcon:P6,MicOff:H6,MicOffIcon:H6,MicVocal:D2,MicVocalIcon:D2,Microchip:j6,MicrochipIcon:j6,Microscope:V6,MicroscopeIcon:V6,Microwave:R6,MicrowaveIcon:R6,Milestone:_6,MilestoneIcon:_6,Milk:T6,MilkIcon:T6,MilkOff:D6,MilkOffIcon:D6,Minimize:B6,Minimize2:F6,Minimize2Icon:F6,MinimizeIcon:B6,Minus:O6,MinusCircle:Ft,MinusCircleIcon:Ft,MinusIcon:O6,MinusSquare:Ea,MinusSquareIcon:Ea,Monitor:e8,MonitorCheck:E6,MonitorCheckIcon:E6,MonitorCog:U6,MonitorCogIcon:U6,MonitorDot:N6,MonitorDotIcon:N6,MonitorDown:Z6,MonitorDownIcon:Z6,MonitorIcon:e8,MonitorOff:$6,MonitorOffIcon:$6,MonitorPause:G6,MonitorPauseIcon:G6,MonitorPlay:W6,MonitorPlayIcon:W6,MonitorSmartphone:K6,MonitorSmartphoneIcon:K6,MonitorSpeaker:X6,MonitorSpeakerIcon:X6,MonitorStop:J6,MonitorStopIcon:J6,MonitorUp:Q6,MonitorUpIcon:Q6,MonitorX:Y6,MonitorXIcon:Y6,Moon:t8,MoonIcon:t8,MoonStar:a8,MoonStarIcon:a8,MoreHorizontal:d2,MoreHorizontalIcon:d2,MoreVertical:i2,MoreVerticalIcon:i2,Mountain:c8,MountainIcon:c8,MountainSnow:n8,MountainSnowIcon:n8,Mouse:s8,MouseIcon:s8,MouseOff:o8,MouseOffIcon:o8,MousePointer:h8,MousePointer2:r8,MousePointer2Icon:r8,MousePointerBan:i8,MousePointerBanIcon:i8,MousePointerClick:d8,MousePointerClickIcon:d8,MousePointerIcon:h8,MousePointerSquareDashed:Pa,MousePointerSquareDashedIcon:Pa,Move:L8,Move3D:T2,Move3DIcon:T2,Move3d:T2,Move3dIcon:T2,MoveDiagonal:y8,MoveDiagonal2:l8,MoveDiagonal2Icon:l8,MoveDiagonalIcon:y8,MoveDown:k8,MoveDownIcon:k8,MoveDownLeft:p8,MoveDownLeftIcon:p8,MoveDownRight:u8,MoveDownRightIcon:u8,MoveHorizontal:f8,MoveHorizontalIcon:f8,MoveIcon:L8,MoveLeft:M8,MoveLeftIcon:M8,MoveRight:m8,MoveRightIcon:m8,MoveUp:x8,MoveUpIcon:x8,MoveUpLeft:g8,MoveUpLeftIcon:g8,MoveUpRight:v8,MoveUpRightIcon:v8,MoveVertical:w8,MoveVerticalIcon:w8,Music:S8,Music2:b8,Music2Icon:b8,Music3:I8,Music3Icon:I8,Music4:C8,Music4Icon:C8,MusicIcon:S8,Navigation:P8,Navigation2:A8,Navigation2Icon:A8,Navigation2Off:q8,Navigation2OffIcon:q8,NavigationIcon:P8,NavigationOff:z8,NavigationOffIcon:z8,Network:H8,NetworkIcon:H8,Newspaper:j8,NewspaperIcon:j8,Nfc:V8,NfcIcon:V8,NonBinary:R8,NonBinaryIcon:R8,Notebook:F8,NotebookIcon:F8,NotebookPen:_8,NotebookPenIcon:_8,NotebookTabs:D8,NotebookTabsIcon:D8,NotebookText:T8,NotebookTextIcon:T8,NotepadText:O8,NotepadTextDashed:B8,NotepadTextDashedIcon:B8,NotepadTextIcon:O8,Nut:U8,NutIcon:U8,NutOff:E8,NutOffIcon:E8,Octagon:Z8,OctagonAlert:F2,OctagonAlertIcon:F2,OctagonIcon:Z8,OctagonMinus:N8,OctagonMinusIcon:N8,OctagonPause:B2,OctagonPauseIcon:B2,OctagonX:O2,OctagonXIcon:O2,Omega:$8,OmegaIcon:$8,Option:G8,OptionIcon:G8,Orbit:W8,OrbitIcon:W8,Origami:K8,OrigamiIcon:K8,Outdent:z2,OutdentIcon:z2,Package:n7,Package2:X8,Package2Icon:X8,PackageCheck:J8,PackageCheckIcon:J8,PackageIcon:n7,PackageMinus:Q8,PackageMinusIcon:Q8,PackageOpen:Y8,PackageOpenIcon:Y8,PackagePlus:e7,PackagePlusIcon:e7,PackageSearch:t7,PackageSearchIcon:t7,PackageX:a7,PackageXIcon:a7,PaintBucket:c7,PaintBucketIcon:c7,PaintRoller:o7,PaintRollerIcon:o7,Paintbrush:r7,Paintbrush2:E2,Paintbrush2Icon:E2,PaintbrushIcon:r7,PaintbrushVertical:E2,PaintbrushVerticalIcon:E2,Palette:i7,PaletteIcon:i7,Palmtree:s0,PalmtreeIcon:s0,Panda:d7,PandaIcon:d7,PanelBottom:l7,PanelBottomClose:h7,PanelBottomCloseIcon:h7,PanelBottomDashed:U2,PanelBottomDashedIcon:U2,PanelBottomIcon:l7,PanelBottomInactive:U2,PanelBottomInactiveIcon:U2,PanelBottomOpen:s7,PanelBottomOpenIcon:s7,PanelLeft:G2,PanelLeftClose:N2,PanelLeftCloseIcon:N2,PanelLeftDashed:Z2,PanelLeftDashedIcon:Z2,PanelLeftIcon:G2,PanelLeftInactive:Z2,PanelLeftInactiveIcon:Z2,PanelLeftOpen:$2,PanelLeftOpenIcon:$2,PanelRight:p7,PanelRightClose:y7,PanelRightCloseIcon:y7,PanelRightDashed:W2,PanelRightDashedIcon:W2,PanelRightIcon:p7,PanelRightInactive:W2,PanelRightInactiveIcon:W2,PanelRightOpen:u7,PanelRightOpenIcon:u7,PanelTop:M7,PanelTopClose:k7,PanelTopCloseIcon:k7,PanelTopDashed:K2,PanelTopDashedIcon:K2,PanelTopIcon:M7,PanelTopInactive:K2,PanelTopInactiveIcon:K2,PanelTopOpen:f7,PanelTopOpenIcon:f7,PanelsLeftBottom:m7,PanelsLeftBottomIcon:m7,PanelsLeftRight:n2,PanelsLeftRightIcon:n2,PanelsRightBottom:g7,PanelsRightBottomIcon:g7,PanelsTopBottom:na,PanelsTopBottomIcon:na,PanelsTopLeft:X2,PanelsTopLeftIcon:X2,Paperclip:v7,PaperclipIcon:v7,Parentheses:x7,ParenthesesIcon:x7,ParkingCircle:Ot,ParkingCircleIcon:Ot,ParkingCircleOff:Bt,ParkingCircleOffIcon:Bt,ParkingMeter:w7,ParkingMeterIcon:w7,ParkingSquare:Za,ParkingSquareIcon:Za,ParkingSquareOff:Na,ParkingSquareOffIcon:Na,PartyPopper:L7,PartyPopperIcon:L7,Pause:b7,PauseCircle:Et,PauseCircleIcon:Et,PauseIcon:b7,PauseOctagon:B2,PauseOctagonIcon:B2,PawPrint:I7,PawPrintIcon:I7,PcCase:C7,PcCaseIcon:C7,Pen:Q2,PenBox:Oe,PenBoxIcon:Oe,PenIcon:Q2,PenLine:J2,PenLineIcon:J2,PenOff:S7,PenOffIcon:S7,PenSquare:Oe,PenSquareIcon:Oe,PenTool:q7,PenToolIcon:q7,Pencil:P7,PencilIcon:P7,PencilLine:A7,PencilLineIcon:A7,PencilOff:z7,PencilOffIcon:z7,PencilRuler:H7,PencilRulerIcon:H7,Pentagon:j7,PentagonIcon:j7,Percent:V7,PercentCircle:Ut,PercentCircleIcon:Ut,PercentDiamond:o2,PercentDiamondIcon:o2,PercentIcon:V7,PercentSquare:$a,PercentSquareIcon:$a,PersonStanding:R7,PersonStandingIcon:R7,PhilippinePeso:_7,PhilippinePesoIcon:_7,Phone:U7,PhoneCall:D7,PhoneCallIcon:D7,PhoneForwarded:T7,PhoneForwardedIcon:T7,PhoneIcon:U7,PhoneIncoming:F7,PhoneIncomingIcon:F7,PhoneMissed:B7,PhoneMissedIcon:B7,PhoneOff:O7,PhoneOffIcon:O7,PhoneOutgoing:E7,PhoneOutgoingIcon:E7,Pi:N7,PiIcon:N7,PiSquare:Ga,PiSquareIcon:Ga,Piano:Z7,PianoIcon:Z7,Pickaxe:$7,PickaxeIcon:$7,PictureInPicture:W7,PictureInPicture2:G7,PictureInPicture2Icon:G7,PictureInPictureIcon:W7,PieChart:vt,PieChartIcon:vt,PiggyBank:K7,PiggyBankIcon:K7,Pilcrow:Q7,PilcrowIcon:Q7,PilcrowLeft:X7,PilcrowLeftIcon:X7,PilcrowRight:J7,PilcrowRightIcon:J7,PilcrowSquare:Wa,PilcrowSquareIcon:Wa,Pill:ef,PillBottle:Y7,PillBottleIcon:Y7,PillIcon:ef,Pin:tf,PinIcon:tf,PinOff:cf,PinOffIcon:cf,Pipette:af,PipetteIcon:af,Pizza:nf,PizzaIcon:nf,Plane:df,PlaneIcon:df,PlaneLanding:of,PlaneLandingIcon:of,PlaneTakeoff:rf,PlaneTakeoffIcon:rf,Play:hf,PlayCircle:Nt,PlayCircleIcon:Nt,PlayIcon:hf,PlaySquare:Ka,PlaySquareIcon:Ka,Plug:lf,Plug2:sf,Plug2Icon:sf,PlugIcon:lf,PlugZap:Y2,PlugZap2:Y2,PlugZap2Icon:Y2,PlugZapIcon:Y2,Plus:yf,PlusCircle:Zt,PlusCircleIcon:Zt,PlusIcon:yf,PlusSquare:Xa,PlusSquareIcon:Xa,Pocket:uf,PocketIcon:uf,PocketKnife:pf,PocketKnifeIcon:pf,Podcast:kf,PodcastIcon:kf,Pointer:Mf,PointerIcon:Mf,PointerOff:ff,PointerOffIcon:ff,Popcorn:mf,PopcornIcon:mf,Popsicle:gf,PopsicleIcon:gf,PoundSterling:xf,PoundSterlingIcon:xf,Power:wf,PowerCircle:$t,PowerCircleIcon:$t,PowerIcon:wf,PowerOff:vf,PowerOffIcon:vf,PowerSquare:Ja,PowerSquareIcon:Ja,Presentation:Lf,PresentationIcon:Lf,Printer:If,PrinterCheck:bf,PrinterCheckIcon:bf,PrinterIcon:If,Projector:Cf,ProjectorIcon:Cf,Proportions:Sf,ProportionsIcon:Sf,Puzzle:qf,PuzzleIcon:qf,Pyramid:Af,PyramidIcon:Af,QrCode:zf,QrCodeIcon:zf,Quote:Hf,QuoteIcon:Hf,Rabbit:Pf,RabbitIcon:Pf,Radar:jf,RadarIcon:jf,Radiation:Vf,RadiationIcon:Vf,Radical:Rf,RadicalIcon:Rf,Radio:Tf,RadioIcon:Tf,RadioReceiver:_f,RadioReceiverIcon:_f,RadioTower:Df,RadioTowerIcon:Df,Radius:Ff,RadiusIcon:Ff,RailSymbol:Bf,RailSymbolIcon:Bf,Rainbow:Of,RainbowIcon:Of,Rat:Ef,RatIcon:Ef,Ratio:Uf,RatioIcon:Uf,Receipt:Qf,ReceiptCent:Nf,ReceiptCentIcon:Nf,ReceiptEuro:Zf,ReceiptEuroIcon:Zf,ReceiptIcon:Qf,ReceiptIndianRupee:$f,ReceiptIndianRupeeIcon:$f,ReceiptJapaneseYen:Gf,ReceiptJapaneseYenIcon:Gf,ReceiptPoundSterling:Wf,ReceiptPoundSterlingIcon:Wf,ReceiptRussianRuble:Kf,ReceiptRussianRubleIcon:Kf,ReceiptSwissFranc:Xf,ReceiptSwissFrancIcon:Xf,ReceiptText:Jf,ReceiptTextIcon:Jf,RectangleEllipsis:ea,RectangleEllipsisIcon:ea,RectangleGoggles:Yf,RectangleGogglesIcon:Yf,RectangleHorizontal:e9,RectangleHorizontalIcon:e9,RectangleVertical:t9,RectangleVerticalIcon:t9,Recycle:a9,RecycleIcon:a9,Redo:o9,Redo2:n9,Redo2Icon:n9,RedoDot:c9,RedoDotIcon:c9,RedoIcon:o9,RefreshCcw:i9,RefreshCcwDot:r9,RefreshCcwDotIcon:r9,RefreshCcwIcon:i9,RefreshCw:h9,RefreshCwIcon:h9,RefreshCwOff:d9,RefreshCwOffIcon:d9,Refrigerator:s9,RefrigeratorIcon:s9,Regex:l9,RegexIcon:l9,RemoveFormatting:y9,RemoveFormattingIcon:y9,Repeat:k9,Repeat1:p9,Repeat1Icon:p9,Repeat2:u9,Repeat2Icon:u9,RepeatIcon:k9,Replace:M9,ReplaceAll:f9,ReplaceAllIcon:f9,ReplaceIcon:M9,Reply:g9,ReplyAll:m9,ReplyAllIcon:m9,ReplyIcon:g9,Rewind:v9,RewindIcon:v9,Ribbon:x9,RibbonIcon:x9,Rocket:w9,RocketIcon:w9,RockingChair:L9,RockingChairIcon:L9,RollerCoaster:b9,RollerCoasterIcon:b9,Rotate3D:ta,Rotate3DIcon:ta,Rotate3d:ta,Rotate3dIcon:ta,RotateCcw:S9,RotateCcwIcon:S9,RotateCcwKey:I9,RotateCcwKeyIcon:I9,RotateCcwSquare:C9,RotateCcwSquareIcon:C9,RotateCw:A9,RotateCwIcon:A9,RotateCwSquare:q9,RotateCwSquareIcon:q9,Route:H9,RouteIcon:H9,RouteOff:z9,RouteOffIcon:z9,Router:P9,RouterIcon:P9,Rows:aa,Rows2:aa,Rows2Icon:aa,Rows3:na,Rows3Icon:na,Rows4:j9,Rows4Icon:j9,RowsIcon:aa,Rss:V9,RssIcon:V9,Ruler:D9,RulerDimensionLine:R9,RulerDimensionLineIcon:R9,RulerIcon:D9,RussianRuble:_9,RussianRubleIcon:_9,Sailboat:T9,SailboatIcon:T9,Salad:F9,SaladIcon:F9,Sandwich:B9,SandwichIcon:B9,Satellite:E9,SatelliteDish:O9,SatelliteDishIcon:O9,SatelliteIcon:E9,SaudiRiyal:U9,SaudiRiyalIcon:U9,Save:$9,SaveAll:N9,SaveAllIcon:N9,SaveIcon:$9,SaveOff:Z9,SaveOffIcon:Z9,Scale:G9,Scale3D:ca,Scale3DIcon:ca,Scale3d:ca,Scale3dIcon:ca,ScaleIcon:G9,Scaling:W9,ScalingIcon:W9,Scan:nM,ScanBarcode:K9,ScanBarcodeIcon:K9,ScanEye:X9,ScanEyeIcon:X9,ScanFace:J9,ScanFaceIcon:J9,ScanHeart:Q9,ScanHeartIcon:Q9,ScanIcon:nM,ScanLine:Y9,ScanLineIcon:Y9,ScanQrCode:eM,ScanQrCodeIcon:eM,ScanSearch:tM,ScanSearchIcon:tM,ScanText:aM,ScanTextIcon:aM,ScatterChart:xt,ScatterChartIcon:xt,School:rM,School2:p0,School2Icon:p0,SchoolIcon:rM,Scissors:oM,ScissorsIcon:oM,ScissorsLineDashed:cM,ScissorsLineDashedIcon:cM,ScissorsSquare:Qa,ScissorsSquareDashedBottom:La,ScissorsSquareDashedBottomIcon:La,ScissorsSquareIcon:Qa,ScreenShare:dM,ScreenShareIcon:dM,ScreenShareOff:iM,ScreenShareOffIcon:iM,Scroll:sM,ScrollIcon:sM,ScrollText:hM,ScrollTextIcon:hM,Search:kM,SearchCheck:yM,SearchCheckIcon:yM,SearchCode:lM,SearchCodeIcon:lM,SearchIcon:kM,SearchSlash:pM,SearchSlashIcon:pM,SearchX:uM,SearchXIcon:uM,Section:fM,SectionIcon:fM,Send:mM,SendHorizonal:oa,SendHorizonalIcon:oa,SendHorizontal:oa,SendHorizontalIcon:oa,SendIcon:mM,SendToBack:MM,SendToBackIcon:MM,SeparatorHorizontal:gM,SeparatorHorizontalIcon:gM,SeparatorVertical:vM,SeparatorVerticalIcon:vM,Server:bM,ServerCog:xM,ServerCogIcon:xM,ServerCrash:wM,ServerCrashIcon:wM,ServerIcon:bM,ServerOff:LM,ServerOffIcon:LM,Settings:CM,Settings2:IM,Settings2Icon:IM,SettingsIcon:CM,Shapes:SM,ShapesIcon:SM,Share:AM,Share2:qM,Share2Icon:qM,ShareIcon:AM,Sheet:zM,SheetIcon:zM,Shell:HM,ShellIcon:HM,Shield:EM,ShieldAlert:PM,ShieldAlertIcon:PM,ShieldBan:jM,ShieldBanIcon:jM,ShieldCheck:VM,ShieldCheckIcon:VM,ShieldClose:ra,ShieldCloseIcon:ra,ShieldEllipsis:RM,ShieldEllipsisIcon:RM,ShieldHalf:_M,ShieldHalfIcon:_M,ShieldIcon:EM,ShieldMinus:DM,ShieldMinusIcon:DM,ShieldOff:TM,ShieldOffIcon:TM,ShieldPlus:FM,ShieldPlusIcon:FM,ShieldQuestion:BM,ShieldQuestionIcon:BM,ShieldUser:OM,ShieldUserIcon:OM,ShieldX:ra,ShieldXIcon:ra,Ship:NM,ShipIcon:NM,ShipWheel:UM,ShipWheelIcon:UM,Shirt:ZM,ShirtIcon:ZM,ShoppingBag:$M,ShoppingBagIcon:$M,ShoppingBasket:GM,ShoppingBasketIcon:GM,ShoppingCart:WM,ShoppingCartIcon:WM,Shovel:KM,ShovelIcon:KM,ShowerHead:XM,ShowerHeadIcon:XM,Shredder:JM,ShredderIcon:JM,Shrimp:QM,ShrimpIcon:QM,Shrink:YM,ShrinkIcon:YM,Shrub:em,ShrubIcon:em,Shuffle:tm,ShuffleIcon:tm,Sidebar:G2,SidebarClose:N2,SidebarCloseIcon:N2,SidebarIcon:G2,SidebarOpen:$2,SidebarOpenIcon:$2,Sigma:am,SigmaIcon:am,SigmaSquare:Ya,SigmaSquareIcon:Ya,Signal:im,SignalHigh:nm,SignalHighIcon:nm,SignalIcon:im,SignalLow:cm,SignalLowIcon:cm,SignalMedium:om,SignalMediumIcon:om,SignalZero:rm,SignalZeroIcon:rm,Signature:dm,SignatureIcon:dm,Signpost:sm,SignpostBig:hm,SignpostBigIcon:hm,SignpostIcon:sm,Siren:lm,SirenIcon:lm,SkipBack:ym,SkipBackIcon:ym,SkipForward:pm,SkipForwardIcon:pm,Skull:um,SkullIcon:um,Slack:km,SlackIcon:km,Slash:fm,SlashIcon:fm,SlashSquare:e0,SlashSquareIcon:e0,Slice:Mm,SliceIcon:Mm,Sliders:ia,SlidersHorizontal:mm,SlidersHorizontalIcon:mm,SlidersIcon:ia,SlidersVertical:ia,SlidersVerticalIcon:ia,Smartphone:xm,SmartphoneCharging:gm,SmartphoneChargingIcon:gm,SmartphoneIcon:xm,SmartphoneNfc:vm,SmartphoneNfcIcon:vm,Smile:Lm,SmileIcon:Lm,SmilePlus:wm,SmilePlusIcon:wm,Snail:bm,SnailIcon:bm,Snowflake:Im,SnowflakeIcon:Im,SoapDispenserDroplet:Cm,SoapDispenserDropletIcon:Cm,Sofa:Sm,SofaIcon:Sm,SortAsc:et,SortAscIcon:et,SortDesc:J1,SortDescIcon:J1,Soup:qm,SoupIcon:qm,Space:Am,SpaceIcon:Am,Spade:zm,SpadeIcon:zm,Sparkle:Pm,SparkleIcon:Pm,Sparkles:da,SparklesIcon:da,Speaker:Hm,SpeakerIcon:Hm,Speech:jm,SpeechIcon:jm,SpellCheck:Vm,SpellCheck2:Rm,SpellCheck2Icon:Rm,SpellCheckIcon:Vm,Spline:Dm,SplineIcon:Dm,SplinePointer:_m,SplinePointerIcon:_m,Split:Tm,SplitIcon:Tm,SplitSquareHorizontal:t0,SplitSquareHorizontalIcon:t0,SplitSquareVertical:a0,SplitSquareVerticalIcon:a0,SprayCan:Fm,SprayCanIcon:Fm,Sprout:Bm,SproutIcon:Bm,Square:Wm,SquareActivity:ha,SquareActivityIcon:ha,SquareArrowDown:ya,SquareArrowDownIcon:ya,SquareArrowDownLeft:la,SquareArrowDownLeftIcon:la,SquareArrowDownRight:sa,SquareArrowDownRightIcon:sa,SquareArrowLeft:pa,SquareArrowLeftIcon:pa,SquareArrowOutDownLeft:ua,SquareArrowOutDownLeftIcon:ua,SquareArrowOutDownRight:ka,SquareArrowOutDownRightIcon:ka,SquareArrowOutUpLeft:fa,SquareArrowOutUpLeftIcon:fa,SquareArrowOutUpRight:Ma,SquareArrowOutUpRightIcon:Ma,SquareArrowRight:ma,SquareArrowRightIcon:ma,SquareArrowUp:xa,SquareArrowUpIcon:xa,SquareArrowUpLeft:ga,SquareArrowUpLeftIcon:ga,SquareArrowUpRight:va,SquareArrowUpRightIcon:va,SquareAsterisk:wa,SquareAsteriskIcon:wa,SquareBottomDashedScissors:La,SquareBottomDashedScissorsIcon:La,SquareChartGantt:y1,SquareChartGanttIcon:y1,SquareCheck:Ia,SquareCheckBig:ba,SquareCheckBigIcon:ba,SquareCheckIcon:Ia,SquareChevronDown:Ca,SquareChevronDownIcon:Ca,SquareChevronLeft:Sa,SquareChevronLeftIcon:Sa,SquareChevronRight:qa,SquareChevronRightIcon:qa,SquareChevronUp:Aa,SquareChevronUpIcon:Aa,SquareCode:za,SquareCodeIcon:za,SquareDashed:ja,SquareDashedBottom:Em,SquareDashedBottomCode:Om,SquareDashedBottomCodeIcon:Om,SquareDashedBottomIcon:Em,SquareDashedIcon:ja,SquareDashedKanban:Ha,SquareDashedKanbanIcon:Ha,SquareDashedMousePointer:Pa,SquareDashedMousePointerIcon:Pa,SquareDivide:Va,SquareDivideIcon:Va,SquareDot:Ra,SquareDotIcon:Ra,SquareEqual:_a,SquareEqualIcon:_a,SquareFunction:Da,SquareFunctionIcon:Da,SquareGanttChart:y1,SquareGanttChartIcon:y1,SquareIcon:Wm,SquareKanban:Ta,SquareKanbanIcon:Ta,SquareLibrary:Fa,SquareLibraryIcon:Fa,SquareM:Ba,SquareMIcon:Ba,SquareMenu:Oa,SquareMenuIcon:Oa,SquareMinus:Ea,SquareMinusIcon:Ea,SquareMousePointer:Ua,SquareMousePointerIcon:Ua,SquareParking:Za,SquareParkingIcon:Za,SquareParkingOff:Na,SquareParkingOffIcon:Na,SquarePen:Oe,SquarePenIcon:Oe,SquarePercent:$a,SquarePercentIcon:$a,SquarePi:Ga,SquarePiIcon:Ga,SquarePilcrow:Wa,SquarePilcrowIcon:Wa,SquarePlay:Ka,SquarePlayIcon:Ka,SquarePlus:Xa,SquarePlusIcon:Xa,SquarePower:Ja,SquarePowerIcon:Ja,SquareRadical:Um,SquareRadicalIcon:Um,SquareRoundCorner:Nm,SquareRoundCornerIcon:Nm,SquareScissors:Qa,SquareScissorsIcon:Qa,SquareSigma:Ya,SquareSigmaIcon:Ya,SquareSlash:e0,SquareSlashIcon:e0,SquareSplitHorizontal:t0,SquareSplitHorizontalIcon:t0,SquareSplitVertical:a0,SquareSplitVerticalIcon:a0,SquareSquare:Zm,SquareSquareIcon:Zm,SquareStack:$m,SquareStackIcon:$m,SquareTerminal:n0,SquareTerminalIcon:n0,SquareUser:o0,SquareUserIcon:o0,SquareUserRound:c0,SquareUserRoundIcon:c0,SquareX:r0,SquareXIcon:r0,SquaresExclude:Gm,SquaresExcludeIcon:Gm,SquaresIntersect:Km,SquaresIntersectIcon:Km,SquaresSubtract:Xm,SquaresSubtractIcon:Xm,SquaresUnite:Jm,SquaresUniteIcon:Jm,Squircle:Qm,SquircleIcon:Qm,Squirrel:Ym,SquirrelIcon:Ym,Stamp:eg,StampIcon:eg,Star:ng,StarHalf:tg,StarHalfIcon:tg,StarIcon:ng,StarOff:ag,StarOffIcon:ag,Stars:da,StarsIcon:da,StepBack:cg,StepBackIcon:cg,StepForward:og,StepForwardIcon:og,Stethoscope:rg,StethoscopeIcon:rg,Sticker:ig,StickerIcon:ig,StickyNote:dg,StickyNoteIcon:dg,StopCircle:Wt,StopCircleIcon:Wt,Store:hg,StoreIcon:hg,StretchHorizontal:sg,StretchHorizontalIcon:sg,StretchVertical:lg,StretchVerticalIcon:lg,Strikethrough:yg,StrikethroughIcon:yg,Subscript:pg,SubscriptIcon:pg,Subtitles:dt,SubtitlesIcon:dt,Sun:mg,SunDim:ug,SunDimIcon:ug,SunIcon:mg,SunMedium:kg,SunMediumIcon:kg,SunMoon:fg,SunMoonIcon:fg,SunSnow:Mg,SunSnowIcon:Mg,Sunrise:gg,SunriseIcon:gg,Sunset:vg,SunsetIcon:vg,Superscript:xg,SuperscriptIcon:xg,SwatchBook:wg,SwatchBookIcon:wg,SwissFranc:Lg,SwissFrancIcon:Lg,SwitchCamera:bg,SwitchCameraIcon:bg,Sword:Ig,SwordIcon:Ig,Swords:Cg,SwordsIcon:Cg,Syringe:Sg,SyringeIcon:Sg,Table:Dg,Table2:qg,Table2Icon:qg,TableCellsMerge:Ag,TableCellsMergeIcon:Ag,TableCellsSplit:zg,TableCellsSplitIcon:zg,TableColumnsSplit:Hg,TableColumnsSplitIcon:Hg,TableConfig:s1,TableConfigIcon:s1,TableIcon:Dg,TableOfContents:Pg,TableOfContentsIcon:Pg,TableProperties:jg,TablePropertiesIcon:jg,TableRowsSplit:Vg,TableRowsSplitIcon:Vg,Tablet:_g,TabletIcon:_g,TabletSmartphone:Rg,TabletSmartphoneIcon:Rg,Tablets:Tg,TabletsIcon:Tg,Tag:Fg,TagIcon:Fg,Tags:Bg,TagsIcon:Bg,Tally1:Og,Tally1Icon:Og,Tally2:Eg,Tally2Icon:Eg,Tally3:Ug,Tally3Icon:Ug,Tally4:Ng,Tally4Icon:Ng,Tally5:Zg,Tally5Icon:Zg,Tangent:$g,TangentIcon:$g,Target:Gg,TargetIcon:Gg,Telescope:Wg,TelescopeIcon:Wg,Tent:Xg,TentIcon:Xg,TentTree:Kg,TentTreeIcon:Kg,Terminal:Jg,TerminalIcon:Jg,TerminalSquare:n0,TerminalSquareIcon:n0,TestTube:Qg,TestTube2:i0,TestTube2Icon:i0,TestTubeDiagonal:i0,TestTubeDiagonalIcon:i0,TestTubeIcon:Qg,TestTubes:Yg,TestTubesIcon:Yg,Text:cv,TextCursor:tv,TextCursorIcon:tv,TextCursorInput:ev,TextCursorInputIcon:ev,TextIcon:cv,TextQuote:av,TextQuoteIcon:av,TextSearch:nv,TextSearchIcon:nv,TextSelect:d0,TextSelectIcon:d0,TextSelection:d0,TextSelectionIcon:d0,Theater:ov,TheaterIcon:ov,Thermometer:dv,ThermometerIcon:dv,ThermometerSnowflake:rv,ThermometerSnowflakeIcon:rv,ThermometerSun:iv,ThermometerSunIcon:iv,ThumbsDown:hv,ThumbsDownIcon:hv,ThumbsUp:sv,ThumbsUpIcon:sv,Ticket:Mv,TicketCheck:lv,TicketCheckIcon:lv,TicketIcon:Mv,TicketMinus:yv,TicketMinusIcon:yv,TicketPercent:pv,TicketPercentIcon:pv,TicketPlus:uv,TicketPlusIcon:uv,TicketSlash:fv,TicketSlashIcon:fv,TicketX:kv,TicketXIcon:kv,Tickets:gv,TicketsIcon:gv,TicketsPlane:mv,TicketsPlaneIcon:mv,Timer:wv,TimerIcon:wv,TimerOff:vv,TimerOffIcon:vv,TimerReset:xv,TimerResetIcon:xv,ToggleLeft:Lv,ToggleLeftIcon:Lv,ToggleRight:bv,ToggleRightIcon:bv,Toilet:Iv,ToiletIcon:Iv,Tornado:Cv,TornadoIcon:Cv,Torus:Sv,TorusIcon:Sv,Touchpad:Av,TouchpadIcon:Av,TouchpadOff:qv,TouchpadOffIcon:qv,TowerControl:zv,TowerControlIcon:zv,ToyBrick:Hv,ToyBrickIcon:Hv,Tractor:Pv,TractorIcon:Pv,TrafficCone:jv,TrafficConeIcon:jv,Train:h0,TrainFront:Rv,TrainFrontIcon:Rv,TrainFrontTunnel:Vv,TrainFrontTunnelIcon:Vv,TrainIcon:h0,TrainTrack:_v,TrainTrackIcon:_v,TramFront:h0,TramFrontIcon:h0,Transgender:Dv,TransgenderIcon:Dv,Trash:Fv,Trash2:Tv,Trash2Icon:Tv,TrashIcon:Fv,TreeDeciduous:Bv,TreeDeciduousIcon:Bv,TreePalm:s0,TreePalmIcon:s0,TreePine:Ov,TreePineIcon:Ov,Trees:Ev,TreesIcon:Ev,Trello:Uv,TrelloIcon:Uv,TrendingDown:Nv,TrendingDownIcon:Nv,TrendingUp:$v,TrendingUpDown:Zv,TrendingUpDownIcon:Zv,TrendingUpIcon:$v,Triangle:Kv,TriangleAlert:l0,TriangleAlertIcon:l0,TriangleDashed:Gv,TriangleDashedIcon:Gv,TriangleIcon:Kv,TriangleRight:Wv,TriangleRightIcon:Wv,Trophy:Xv,TrophyIcon:Xv,Truck:Qv,TruckElectric:Jv,TruckElectricIcon:Jv,TruckIcon:Qv,Turtle:Yv,TurtleIcon:Yv,Tv:tx,Tv2:y0,Tv2Icon:y0,TvIcon:tx,TvMinimal:y0,TvMinimalIcon:y0,TvMinimalPlay:ex,TvMinimalPlayIcon:ex,Twitch:ax,TwitchIcon:ax,Twitter:nx,TwitterIcon:nx,Type:ox,TypeIcon:ox,TypeOutline:cx,TypeOutlineIcon:cx,Umbrella:ix,UmbrellaIcon:ix,UmbrellaOff:rx,UmbrellaOffIcon:rx,Underline:dx,UnderlineIcon:dx,Undo:lx,Undo2:hx,Undo2Icon:hx,UndoDot:sx,UndoDotIcon:sx,UndoIcon:lx,UnfoldHorizontal:yx,UnfoldHorizontalIcon:yx,UnfoldVertical:px,UnfoldVerticalIcon:px,Ungroup:ux,UngroupIcon:ux,University:p0,UniversityIcon:p0,Unlink:fx,Unlink2:kx,Unlink2Icon:kx,UnlinkIcon:fx,Unlock:_2,UnlockIcon:_2,UnlockKeyhole:R2,UnlockKeyholeIcon:R2,Unplug:Mx,UnplugIcon:Mx,Upload:mx,UploadCloud:e2,UploadCloudIcon:e2,UploadIcon:mx,Usb:gx,UsbIcon:gx,User:zx,User2:g0,User2Icon:g0,UserCheck:vx,UserCheck2:u0,UserCheck2Icon:u0,UserCheckIcon:vx,UserCircle:Xt,UserCircle2:Kt,UserCircle2Icon:Kt,UserCircleIcon:Xt,UserCog:xx,UserCog2:k0,UserCog2Icon:k0,UserCogIcon:xx,UserIcon:zx,UserLock:wx,UserLockIcon:wx,UserMinus:Lx,UserMinus2:f0,UserMinus2Icon:f0,UserMinusIcon:Lx,UserPen:bx,UserPenIcon:bx,UserPlus:Ix,UserPlus2:M0,UserPlus2Icon:M0,UserPlusIcon:Ix,UserRound:g0,UserRoundCheck:u0,UserRoundCheckIcon:u0,UserRoundCog:k0,UserRoundCogIcon:k0,UserRoundIcon:g0,UserRoundMinus:f0,UserRoundMinusIcon:f0,UserRoundPen:Cx,UserRoundPenIcon:Cx,UserRoundPlus:M0,UserRoundPlusIcon:M0,UserRoundSearch:Sx,UserRoundSearchIcon:Sx,UserRoundX:m0,UserRoundXIcon:m0,UserSearch:qx,UserSearchIcon:qx,UserSquare:o0,UserSquare2:c0,UserSquare2Icon:c0,UserSquareIcon:o0,UserX:Ax,UserX2:m0,UserX2Icon:m0,UserXIcon:Ax,Users:Hx,Users2:v0,Users2Icon:v0,UsersIcon:Hx,UsersRound:v0,UsersRoundIcon:v0,Utensils:w0,UtensilsCrossed:x0,UtensilsCrossedIcon:x0,UtensilsIcon:w0,UtilityPole:Px,UtilityPoleIcon:Px,Variable:jx,VariableIcon:jx,Vault:Vx,VaultIcon:Vx,Vegan:Rx,VeganIcon:Rx,VenetianMask:Dx,VenetianMaskIcon:Dx,Venus:Tx,VenusAndMars:_x,VenusAndMarsIcon:_x,VenusIcon:Tx,Verified:nt,VerifiedIcon:nt,Vibrate:Ex,VibrateIcon:Ex,VibrateOff:Fx,VibrateOffIcon:Fx,Video:Ox,VideoIcon:Ox,VideoOff:Bx,VideoOffIcon:Bx,Videotape:Ux,VideotapeIcon:Ux,View:Nx,ViewIcon:Nx,Voicemail:Zx,VoicemailIcon:Zx,Volleyball:$x,VolleyballIcon:$x,Volume:Qx,Volume1:Gx,Volume1Icon:Gx,Volume2:Wx,Volume2Icon:Wx,VolumeIcon:Qx,VolumeOff:Kx,VolumeOffIcon:Kx,VolumeX:Xx,VolumeXIcon:Xx,Vote:Jx,VoteIcon:Jx,Wallet:ew,Wallet2:L0,Wallet2Icon:L0,WalletCards:Yx,WalletCardsIcon:Yx,WalletIcon:ew,WalletMinimal:L0,WalletMinimalIcon:L0,Wallpaper:tw,WallpaperIcon:tw,Wand:aw,Wand2:b0,Wand2Icon:b0,WandIcon:aw,WandSparkles:b0,WandSparklesIcon:b0,Warehouse:nw,WarehouseIcon:nw,WashingMachine:cw,WashingMachineIcon:cw,Watch:ow,WatchIcon:ow,Waves:iw,WavesIcon:iw,WavesLadder:rw,WavesLadderIcon:rw,Waypoints:dw,WaypointsIcon:dw,Webcam:hw,WebcamIcon:hw,Webhook:lw,WebhookIcon:lw,WebhookOff:sw,WebhookOffIcon:sw,Weight:yw,WeightIcon:yw,Wheat:uw,WheatIcon:uw,WheatOff:pw,WheatOffIcon:pw,WholeWord:kw,WholeWordIcon:kw,Wifi:ww,WifiHigh:fw,WifiHighIcon:fw,WifiIcon:ww,WifiLow:Mw,WifiLowIcon:Mw,WifiOff:mw,WifiOffIcon:mw,WifiPen:gw,WifiPenIcon:gw,WifiZero:vw,WifiZeroIcon:vw,Wind:Lw,WindArrowDown:xw,WindArrowDownIcon:xw,WindIcon:Lw,Wine:Sw,WineIcon:Sw,WineOff:bw,WineOffIcon:bw,Workflow:Iw,WorkflowIcon:Iw,Worm:Cw,WormIcon:Cw,WrapText:qw,WrapTextIcon:qw,Wrench:Aw,WrenchIcon:Aw,X:zw,XCircle:T1,XCircleIcon:T1,XIcon:zw,XOctagon:O2,XOctagonIcon:O2,XSquare:r0,XSquareIcon:r0,Youtube:Hw,YoutubeIcon:Hw,Zap:jw,ZapIcon:jw,ZapOff:Pw,ZapOffIcon:Pw,ZoomIn:Rw,ZoomInIcon:Rw,ZoomOut:Vw,ZoomOutIcon:Vw,createLucideIcon:a,icons:pj},Symbol.toStringTag,{value:"Module"})),uj={class:"bg-white shadow rounded p-4 flex items-center space-x-4"},kj={class:"p-2 rounded-full bg-blue-100 text-blue-600"},fj={class:"text-sm text-gray-500"},Mj={class:"text-xl font-bold"},Fn=q1({__name:"CardStat",props:{title:{},value:{},icon:{}},setup(e){const t=e,n=He(()=>({calendar:kn,"file-text":fn,"check-circle":D1,"x-circle":T1})[t.icon]);return(c,o)=>(_(),F("div",uj,[M("div",kj,[(_(),Ue(On(n.value),{class:"w-6 h-6"}))]),M("div",null,[M("p",fj,J(c.title),1),M("p",Mj,J(c.value),1)])]))}}),mj={class:"p-6 space-y-6"},gj={class:"grid grid-cols-1 md:grid-cols-4 gap-4"},vj={class:"bg-white shadow rounded p-4"},xj={class:"w-full text-left border"},wj={class:"p-2 border"},Lj={class:"p-2 border"},bj={class:"p-2 border"},Ij={class:"bg-white shadow rounded p-4"},Cj={class:"space-y-2 text-sm"},Sj={class:"font-semibold"},qj=q1({__name:"AdminDashboard",setup(e){const t=Y(4),n=Y(7),c=Y(24),o=Y(3),r=Y([]),i=Y([]);return P0(async()=>{const[d,h,s]=await Promise.all([Ce.get("/admin/dashboard/appointments/today"),Ce.get("/admin/dashboard/appointments/status"),Ce.get("/admin/dashboard/deeds/processing")]);r.value=d.data,t.value=r.value.length,console.log(" status ",h.data),c.value=h.data.confirmed,o.value=h.data.rejected,n.value=s.data}),(d,h)=>(_(),F("div",mj,[M("div",gj,[re(Fn,{title:"Janji Hari Ini",icon:"calendar",value:t.value},null,8,["value"]),re(Fn,{title:"Akta Diproses",icon:"file-text",value:n.value},null,8,["value"]),re(Fn,{title:"Janji Disetujui",icon:"check-circle",value:c.value},null,8,["value"]),re(Fn,{title:"Janji Ditolak",icon:"x-circle",value:o.value},null,8,["value"])]),M("div",vj,[h[2]||(h[2]=M("h2",{class:"font-semibold text-lg mb-4"},"Janji Hari Ini",-1)),M("table",xj,[h[1]||(h[1]=M("thead",{class:"bg-gray-100 text-sm text-gray-600"},[M("tr",null,[M("th",{class:"p-2 border"},"Jam"),M("th",{class:"p-2 border"},"Klien"),M("th",{class:"p-2 border"},"Status"),M("th",{class:"p-2 border"},"Aksi")])],-1)),M("tbody",null,[(_(!0),F(ve,null,S1(r.value,s=>(_(),F("tr",{key:s.id,class:"text-sm"},[M("td",wj,J(s.appointmentTime),1),M("td",Lj,J(s.customer.firstName),1),M("td",bj,J(s.status),1),h[0]||(h[0]=M("td",{class:"p-2 border space-x-2"},[M("button",{class:"bg-green-600 text-white hover:underline px-2 py-1 rounded-xl"},"Konfirmasi"),M("button",{class:"bg-red-600 text-white hover:underline px-2 py-1 rounded-xl"},"Tolak")],-1))]))),128))])])]),M("div",Ij,[h[3]||(h[3]=M("h2",{class:"font-semibold text-lg mb-4"},"Akta Terbaru",-1)),M("ul",Cj,[(_(!0),F(ve,null,S1(i.value,s=>(_(),F("li",{key:s.id,class:"border-b pb-2"},[M("span",Sj,J(s.code),1),Je(" - "+J(s.customer.firstName)+" ("+J(s.status)+") ",1)]))),128))])])]))}});var Jw={PERJANJIAN:["KTP Pihak Pertama","KTP Pihak Kedua","Draft Perjanjian"],HAK_MILIK:["Akta Jual Beli","Fotocopy KTP","Fotocopy KK","Surat pengantar dari keluaran","Formulir permohonan"],JUAL_BELI:["KTP Penjual","KTP Pembeli","Sertifikat Tanah","SPPT PBB Terbaru"]};const Aj={class:"grid gap-6 lg:grid-cols-3"},zj={class:"bg-white p-4 rounded shadow col-span-1"},Hj={key:0,class:"text-lg font-semibold text-green-600"},Pj={key:1,class:"text-lg font-semibold text-gray-500"},jj={class:"bg-white p-4 rounded shadow col-span-1"},Vj={key:0},Rj={key:0,class:"text-lg font-semibold text-yellow-600"},_j={key:1,class:"text-lg font-semibold text-green-600"},Dj={key:3,class:"text-sm text-gray-500"},Tj={key:1,class:"text-lg font-semibold text-gray-500"},Fj={__name:"UserDashboard",setup(e){const t=K0(),n={DRAFT:"DRAFT",IN_PROGRESS:"SEDANG PROSES",WAITING_SIGNATURE:"MENUNGGU TANDA TANGAN",COMPLETED:"KOMPLIT",REJECTED:"DITOLAK"},c=h=>n[h]||h,o=()=>{t.push({name:"appointmentCreate"})},r=Y(null),i=He(()=>{if(!r.value||!r.value.deedType||!Jw[r.value.deedType])return 0;const h=Jw[r.value.deedType],s=r.value.deedDocs.map(y=>y.docType);let l=0;for(const y of h)s.includes(y)||l++;return l}),d=()=>{t.push({name:"akta"})};return P0(async()=>{try{const h=await Ce.get("/users/dashboard/deeds");r.value=h.data}catch(h){console.error("Error fetching current deed:",h),h.response&&h.response.status===404?console.log("Tidak ada akta ditemukan untuk user ini."):console.error("Terjadi kesalahan lain saat mengambil akta:",h.message)}}),(h,s)=>{var y;const l=Xe("router-link");return _(),F("div",Aj,[s[3]||(s[3]=M("div",{class:"bg-white p-4 rounded shadow col-span-1"},[M("h3",{class:"text-sm text-gray-500"},"Janji Terdekat"),M("p",{class:"text-lg font-semibold text-blue-600"},"27 Mei 2025 - 10:00 WIB"),M("p",{class:"text-gray-700 text-sm"},"Konsultasi dokumen warisan")],-1)),M("div",zj,[s[0]||(s[0]=M("h3",{class:"text-sm text-gray-500"},"Status Akta Terbaru",-1)),r.value?(_(),F("p",Hj,J(c((y=r.value)==null?void 0:y.deedStatus)),1)):(_(),F("p",Pj," Belum ada akta "))]),M("div",jj,[s[2]||(s[2]=M("h3",{class:"text-sm text-gray-500"},"Dokumen Akta Terbaru",-1)),r.value?(_(),F("div",Vj,[i.value>0?(_(),F("p",Rj,J(i.value)+" dokumen belum lengkap ",1)):(_(),F("p",_j," Semua dokumen lengkap ")),i.value>0?(_(),Ue(l,{key:2,to:`users/deeds/${r.value.id}/upload-documents`,class:"text-sm text-blue-600 hover:underline"},{default:Ye(()=>s[1]||(s[1]=[Je(" Unggah Sekarang ")])),_:1,__:[1]},8,["to"])):(_(),F("span",Dj,"Tidak ada aksi diperlukan"))])):(_(),F("p",Tj," Belum ada akta "))]),M("div",{class:"col-span-full flex gap-4 mt-4"},[M("button",{class:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",onClick:o},"Buat Janji Baru"),M("button",{class:"bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200",onClick:d},"Lihat Semua Akta")])])}}},Bj={__name:"Home",setup(e){const t=t1();K0();const n=t1();return t.user,(c,o)=>(_(),F("div",null,[Ge(n).isAdmin?(_(),Ue(qj,{key:0})):(_(),Ue(Fj,{key:1}))]))}},Oj={class:"flex flex-col items-center justify-center min-h-screen"},Ej={class:"w-full max-w-lg p-8 bg-white rounded shadow-md"},Uj={class:"block text-center mt-4"},Nj={__name:"Register",setup(e){const t=K0(),n=Y({username:"",password:"",email:"",nip:"",firstname:"",lastname:"",phone:"",address:""}),c=async()=>{var o;try{await Ce.post("/auth/register",n.value),alert("Registration successful!"),t.push("/login")}catch(r){alert(((o=r.response)==null?void 0:o.data)||"Registration failed")}};return(o,r)=>{const i=Xe("router-link");return _(),F("div",Oj,[M("div",Ej,[r[11]||(r[11]=M("h2",{class:"mb-4 text-xl font-bold"},"Register",-1)),M("form",{onSubmit:bb(c,["prevent"])},[ke(M("input",{"onUpdate:modelValue":r[0]||(r[0]=d=>n.value.username=d),placeholder:"Pengguna",class:"w-full p-2 mb-2 border rounded",required:""},null,512),[[ge,n.value.username]]),ke(M("input",{"onUpdate:modelValue":r[1]||(r[1]=d=>n.value.password=d),placeholder:"Sandi",type:"password",class:"w-full p-2 mb-2 border rounded",required:""},null,512),[[ge,n.value.password]]),ke(M("input",{"onUpdate:modelValue":r[2]||(r[2]=d=>n.value.email=d),placeholder:"Email",type:"email",class:"w-full p-2 mb-2 border rounded",required:""},null,512),[[ge,n.value.email]]),ke(M("input",{"onUpdate:modelValue":r[3]||(r[3]=d=>n.value.nip=d),placeholder:"NIK",class:"w-full p-2 mb-2 border rounded",required:""},null,512),[[ge,n.value.nip]]),ke(M("input",{"onUpdate:modelValue":r[4]||(r[4]=d=>n.value.firstname=d),placeholder:"Nama depan",class:"w-full p-2 mb-2 border rounded",required:""},null,512),[[ge,n.value.firstname]]),ke(M("input",{"onUpdate:modelValue":r[5]||(r[5]=d=>n.value.lastname=d),placeholder:"Nama belakang",class:"w-full p-2 mb-2 border rounded"},null,512),[[ge,n.value.lastname]]),ke(M("input",{"onUpdate:modelValue":r[6]||(r[6]=d=>n.value.phone=d),placeholder:"Telpon",class:"w-full p-2 mb-2 border rounded",required:""},null,512),[[ge,n.value.phone]]),ke(M("textarea",{"onUpdate:modelValue":r[7]||(r[7]=d=>n.value.address=d),placeholder:"Alamat",class:"w-full p-2 mb-2 border rounded",required:""},null,512),[[ge,n.value.address]]),r[10]||(r[10]=M("button",{type:"submit",class:"w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"},"Register",-1)),M("span",Uj,[r[9]||(r[9]=Je(" kembali ke ")),re(i,{to:"/login",class:"text-blue-600 hover:underline"},{default:Ye(()=>r[8]||(r[8]=[Je("Login")])),_:1,__:[8]})])],32)])])}}},Zj={},$j={class:"max-h-screen flex items-center justify-center bg-gray-200"},Gj={class:"w-full"};function Wj(e,t){const n=Xe("RouterView");return _(),F("div",$j,[M("div",Gj,[re(n)])])}const NI=zn(Zj,[["render",Wj],["__scopeId","data-v-96698179"]]),Kj={class:"mt-4 flex flex-col gap-1 px-2"},Xj={class:"mt-4 flex flex-col items-center px-2"},Jj=q1({__name:"Sidebar",setup(e){const t=t1(),n=Y(!0);var c=W0([]);t.isAdmin?c=[{icon:"Home",label:"Dashboard",path:"/"},{icon:"User",label:"Klien",path:"/clients"},{icon:"Book",label:"Akta",path:"/deeds"},{icon:"Calendar",label:"Jadwal",path:"/appointments"}]:c=[{icon:"Home",label:"Dashboard",path:"/"},{icon:"Book",label:"Akta",path:"/deeds"},{icon:"Calendar",label:"Jadwal Saya",path:"/appointments/my-appointments"}];const o=IH(),r=d=>o.path.startsWith(d),i=()=>{n.value=!n.value};return(d,h)=>{const s=Xe("RouterLink");return _(),F("aside",{class:O0(["bg-white border-r h-screen transition-all duration-300 ease-in-out",{"w-16":!n.value,"w-64":n.value}])},[M("div",{class:"py-4 font-bold text-xl border-b cursor-pointer flex",onClick:i},[ke(M("span",null,"📜 NotarisApp",512),[[Dn,n.value]]),ke((_(),Ue(On(Mn),{class:"w-8 h-8"},null,512)),[[Dn,!n.value]])]),ke(M("nav",Kj,[(_(!0),F(ve,null,S1(Ge(c),l=>(_(),Ue(s,{key:l.path,to:l.path,class:O0(["flex items-center gap-3 p-2 rounded hover:bg-gray-100",{"bg-gray-100 font-semibold":r(l.path)}])},{default:Ye(()=>[(_(),Ue(On(UI[l.icon]),{class:"w-5 h-5"})),M("span",null,J(l.label),1)]),_:2},1032,["to","class"]))),128))],512),[[Dn,n.value]]),ke(M("nav",Xj,[(_(!0),F(ve,null,S1(Ge(c),l=>(_(),Ue(s,{key:l.path,to:l.path,class:O0(["p-2 rounded hover:bg-gray-100",{"bg-gray-100 font-semibold":r(l.path)}])},{default:Ye(()=>[(_(),Ue(On(UI[l.icon]),{class:"w-8 h-8"}))]),_:2},1032,["to","class"]))),128))],512),[[Dn,!n.value]])],2)}}}),Qj={key:0,class:"absolute right-0 mt-2 w-48 bg-white shadow-md rounded z-50"},Yj={class:"px-4 py-2 border-b text-sm text-gray-700"},eV={class:"text-xs text-gray-500"},tV=q1({__name:"UserDropdown",setup(e){const t=Y(!1),n=Y(null),c=t1(),o=K0(),r=c.user,i=()=>t.value=!t.value,d=s=>{n.value&&!n.value.contains(s.target)&&(t.value=!1)};P0(()=>{window.addEventListener("click",d)}),AC(()=>{window.removeEventListener("click",d)});const h=async()=>{await c.logout(),o.push({name:"Login"})};return(s,l)=>{var u,f;const y=Xe("RouterLink");return _(),F("div",{ref_key:"dropdownRef",ref:n,class:"relative"},[M("button",{onClick:i,class:"flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 transition"},[M("span",null,J((u=Ge(r))==null?void 0:u.username),1),l[0]||(l[0]=M("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),t.value?(_(),F("div",Qj,[M("div",Yj,[M("div",eV,J((f=Ge(r))==null?void 0:f.role),1)]),re(y,{to:"/profile",class:"block px-4 py-2 hover:bg-gray-100"},{default:Ye(()=>l[1]||(l[1]=[Je("Profil")])),_:1,__:[1]}),M("button",{onClick:h,class:"w-full text-left px-4 py-2 hover:bg-gray-100"},"Keluar")])):f1("",!0)],512)}}}),aV={class:"flex min-h-screen bg-gray-100 text-gray-900"},nV={class:"flex-1 flex flex-col"},cV={class:"bg-white shadow px-6 py-4 flex items-center justify-between"},oV={class:"flex-1 p-6 overflow-y-auto"},rV={__name:"MainLayout",setup(e){return(t,n)=>{const c=Xe("RouterView");return _(),F("div",aV,[re(Jj),M("div",nV,[M("header",cV,[n[0]||(n[0]=M("h1",{class:"text-xl font-semibold"},null,-1)),re(tV)]),M("main",oV,[re(c)])])])}}},iV={class:"min-h-screen p-6 bg-gray-100"},dV={class:"max-w-2xl p-6 mx-auto bg-white rounded shadow"},hV={class:"p-4"},sV={__name:"DocumentUpload",setup(e){const t=Y<File|null>null;t1();function n(o){var i;const r=o.target;t.value=((i=r.files)==null?void 0:i[0])||null}async function c(){if(!t.value)return;const o=5*1024*1024;if(t.value.size>o){alert("Ukuran file melebihi batas maksimum 5 MB.");return}const r=new FormData;r.append("file",t.value);try{const i=await Ce.post("/documents/upload",r,{headers:{"Content-Type":"multipart/form-data"}},{withCredentials:!0});alert("Upload berhasil")}catch(i){console.error(i),alert("Upload gagal")}}return(o,r)=>(_(),F("div",iV,[M("div",dV,[M("div",hV,[r[0]||(r[0]=M("h2",{class:"mb-2 text-xl"},"Upload Dokumen",-1)),M("input",{type:"file",onChange:n},null,32),M("button",{onClick:c,class:"px-4 py-2 mt-2 text-white bg-blue-500 rounded"},"Upload")])])]))}},lV={class:"bg-white p-6 rounded-md shadow-md overflow-x-auto"},yV={class:"w-full table-auto border border-gray-300 mt-5"},pV={class:"px-4 py-2 border border-gray-300 text-center"},uV={class:"px-4 py-2 border border-gray-300"},kV={class:"px-4 py-2 border border-gray-300"},fV={class:"px-4 py-2 border border-gray-300"},MV={class:"px-4 py-2 border border-gray-300"},mV={class:"px-4 py-2 border border-gray-300"},gV={class:"px-4 py-2 border border-gray-300 text-center"},vV={key:0},xV={class:"flex justify-between items-center mt-4"},wV=["disabled"],LV=["disabled"],ZI=10,bV={__name:"Client",setup(e){const t=Y([]),n=Y(0),c=Y(1);P0(async()=>{const i=await Ce.get("/clients",{params:{page:n.value,size:ZI}});t.value=i.data.content,c.value=i.data.totalPages});const o=()=>{n.value>0&&(n.value--,fetchDeeds())},r=()=>{n.value+1<c.value&&(n.value++,fetchDeeds())};return(i,d)=>{const h=Xe("RouterLink");return _(),F("div",null,[d[3]||(d[3]=M("div",{class:"flex justify-between mb-4 w-10/12"},[M("h1",{class:"text-2xl font-bold mb-4 w-4/5"},"Daftar Pelanggan")],-1)),M("div",lV,[M("table",yV,[d[2]||(d[2]=M("thead",null,[M("tr",null,[M("th",{class:"px-4 py-2 border border-gray-300"},"No"),M("th",{class:"px-4 py-2 border border-gray-300"},"Nama"),M("th",{class:"px-4 py-2 border border-gray-300"},"NIP"),M("th",{class:"px-4 py-2 border border-gray-300"},"Email"),M("th",{class:"px-4 py-2 border border-gray-300"},"Telpon"),M("th",{class:"px-4 py-2 border border-gray-300"},"Alamat"),M("th",{class:"px-4 py-2 border border-gray-300"},"Aksi")])],-1)),M("tbody",null,[(_(!0),F(ve,null,S1(t.value,(s,l)=>(_(),F("tr",{key:s.id},[M("td",pV,J(n.value*ZI+l+1),1),M("td",uV,J(s.fullname),1),M("td",kV,J(s.nip),1),M("td",fV,J(s.email),1),M("td",MV,J(s.phone),1),M("td",mV,J(s.address),1),M("td",gV,[re(h,{to:`/clients/${s.id}/show`,class:"text-blue-500 hover:underline"},{default:Ye(()=>d[0]||(d[0]=[Je("Detail ")])),_:2,__:[0]},1032,["to"])])]))),128)),t.value.length===0?(_(),F("tr",vV,d[1]||(d[1]=[M("td",{colspan:"5",class:"text-center py-4 text-gray-500"},"Belum ada data akta",-1)]))):f1("",!0)])]),M("div",xV,[M("button",{class:"px-3 py-1 bg-gray-200 rounded disabled:opacity-50",onClick:o,disabled:n.value===0}," < Prev ",8,wV),M("span",null,"Halaman "+J(n.value+1)+" dari "+J(c.value),1),M("button",{class:"px-3 py-1 bg-gray-200 rounded disabled:opacity-50",onClick:r,disabled:n.value+1>=c.value}," Next > ",8,LV)])])])}}},IV={},CV={class:"flex flex-col items-end h-full"};function SV(e,t){return _(),F("div",CV,t[0]||(t[0]=[M("div",{class:"w-10/12 bg-white p-8 rounded shadow-md"},[M("h1",null,"Selamat Datang di Dashboard"),M("p",null,"Konten ini berada di sisi kanan area utama.")],-1)]))}const qV=zn(IV,[["render",SV]]),AV={};function zV(e,t){return _(),F("div",null,t[0]||(t[0]=[M("div",{class:"max-w-2xl p-6 mx-auto bg-white rounded shadow"},[M("h1",null,"Pengguna")],-1)]))}const HV=zn(AV,[["render",zV]]),PV={};function jV(e,t){return _(),F("div",null,t[0]||(t[0]=[M("div",null,[M("h1",null,"Pengaturan")],-1)]))}const VV=zn(PV,[["render",jV]]),RV={class:"max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow"},_V={class:"mb-4"},DV={class:"mb-4"},TV={class:"mb-4"},FV={class:"mb-4"},BV={class:"mb-4"},OV={key:0,class:"mb-4 text-green-600"},EV={key:1,class:"mb-4 text-red-600"},UV={class:"mb-4"},NV={class:"mb-4"},ZV={class:"mb-4"},$V={__name:"Profile",setup(e){const n=t1().user,c=Y({username:n.username,email:n.email,firstname:n.firstname,lastname:n.lastname,address:n.address}),o=Y({oldPassword:"",newPassword:"",confirmPassword:""}),r=Y(!1),i=Y(""),d=async()=>{var h;if(r.value=!1,i.value="",o.value.newPassword!==o.value.confirmPassword){i.value="Konfirmasi password tidak cocok.";return}try{await Ce.post("/auth/change-password",{oldPassword:o.value.oldPassword,newPassword:o.value.newPassword},{withCredentials:!0}),r.value=!0,o.value.oldPassword="",o.value.newPassword="",o.value.confirmPassword=""}catch(s){i.value=((h=s.response)==null?void 0:h.data)||"Gagal mengganti password."}};return(h,s)=>(_(),F("div",RV,[s[16]||(s[16]=M("h2",{class:"text-2xl font-semibold mb-4"},"Profil Pengguna",-1)),M("div",_V,[s[8]||(s[8]=M("label",{class:"block text-sm font-medium text-gray-700"},"Username",-1)),ke(M("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>c.value.username=l),disabled:"",class:"p-2 border border-gray-200 rounded w-full"},null,512),[[ge,c.value.username]])]),M("div",DV,[s[9]||(s[9]=M("label",{class:"block text-sm font-medium text-gray-700"},"Email",-1)),ke(M("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>c.value.email=l),disabled:"",class:"p-2 border border-gray-200 rounded w-full"},null,512),[[ge,c.value.email]])]),M("div",TV,[s[10]||(s[10]=M("label",{class:"block text-sm font-medium text-gray-700"},"Nama Depan",-1)),ke(M("input",{"onUpdate:modelValue":s[2]||(s[2]=l=>c.value.firstname=l),disabled:"",class:"p-2 border border-gray-200 rounded w-full"},null,512),[[ge,c.value.firstname]])]),M("div",FV,[s[11]||(s[11]=M("label",{class:"block text-sm font-medium text-gray-700"},"Nama Belakang",-1)),ke(M("input",{"onUpdate:modelValue":s[3]||(s[3]=l=>c.value.lastname=l),disabled:"",class:"p-2 border border-gray-200 rounded w-full"},null,512),[[ge,c.value.lastname]])]),M("div",BV,[s[12]||(s[12]=M("label",{for:"address",class:"block text-sm font-medium text-gray-700"},"Alamat",-1)),ke(M("textarea",{"onUpdate:modelValue":s[4]||(s[4]=l=>c.value.address=l),cols:"60",rows:"6",class:"px-2 py-3 border border-gray-200 rounded-xl",disabled:""},null,512),[[ge,c.value.address]])]),s[17]||(s[17]=M("hr",{class:"my-6"},null,-1)),s[18]||(s[18]=M("h3",{class:"text-xl font-semibold mb-4"},"Ubah Password",-1)),r.value?(_(),F("div",OV,"Password berhasil diubah.")):f1("",!0),i.value?(_(),F("div",EV,J(i.value),1)):f1("",!0),M("div",UV,[s[13]||(s[13]=M("label",{class:"block text-sm font-medium text-gray-700"},"Password Lama",-1)),ke(M("input",{"onUpdate:modelValue":s[5]||(s[5]=l=>o.value.oldPassword=l),type:"password",class:"mt-1 w-full border-gray-300 rounded-md shadow-sm"},null,512),[[ge,o.value.oldPassword]])]),M("div",NV,[s[14]||(s[14]=M("label",{class:"block text-sm font-medium text-gray-700"},"Password Baru",-1)),ke(M("input",{"onUpdate:modelValue":s[6]||(s[6]=l=>o.value.newPassword=l),type:"password",class:"mt-1 w-full border-gray-300 rounded-md shadow-sm"},null,512),[[ge,o.value.newPassword]])]),M("div",ZV,[s[15]||(s[15]=M("label",{class:"block text-sm font-medium text-gray-700"},"Konfirmasi Password Baru",-1)),ke(M("input",{"onUpdate:modelValue":s[7]||(s[7]=l=>o.value.confirmPassword=l),type:"password",class:"mt-1 w-full border-gray-300 rounded-md shadow-sm"},null,512),[[ge,o.value.confirmPassword]])]),M("button",{onClick:d,class:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"}," Simpan ")]))}},GV={key:0,class:"fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center"},WV={class:"bg-white rounded shadow-lg w-full max-w-lg p-6 relative"},KV={class:"mb-4"},XV={class:"list-disc pl-5 text-sm text-gray-600"},JV={class:"mb-4"},QV=["value"],YV={class:"mb-4"},eR={class:"flex justify-end gap-2 mt-6"},tR=["disabled"],aR={key:0},nR={key:1},cR={key:1,class:"text-sm text-green-700 mt-4"},oR={__name:"UploadDokumenModal",props:{show:{type:Boolean,default:!1},deed:{type:Object,required:!0,default:()=>({id:null,deedType:"",deedDocs:[]})},onClose:{type:Function,required:!0}},emits:["document-uploaded"],setup(e,{emit:t}){const n=e,c=t,o=Y([]),r=Y(null),i=Y(""),d=Y(!1);U0(()=>n.deed,y=>{y&&y.deedDocs?o.value=[...y.deedDocs]:o.value=[]},{immediate:!0});const h=He(()=>{if(!n.deed||!n.deed.deedType)return[];const y=Jw[n.deed.deedType]||[],u=new Set(o.value.filter(f=>f.status!=="REJECTED").map(f=>f.docType));return y.filter(f=>!u.has(f))}),s=y=>{r.value=y.target.files?y.target.files[0]:null},l=async()=>{if(!r.value||!i.value){alert("Harap pilih jenis dokumen dan file.");return}d.value=!0;const y=new FormData;y.append("file",r.value),y.append("docType",i.value),y.append("deedId",n.deed.id);try{const u=o.value.find(x=>x.docType===i.value&&x.status==="REJECTED");let f;u?(console.log(`Mengunggah ulang dokumen ID: ${u.id}`),f=await Ce.put(`/deed-documents/${u.id}`,y,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}),u.status="UPLOADED",u.name=r.value.name):(console.log(`Mengunggah dokumen baru untuk akta ID: ${n.deed.id}`),f=await Ce.post(`/deeds/${n.deed.id}/upload`,y,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}),o.value.push({id:f.data.id,docType:i.value,status:f.data.status||"UPLOADED",name:r.value.name})),alert("Dokumen berhasil diunggah."),c("document-uploaded",n.deed.id),r.value=null,i.value="";const v=document.getElementById("fileInput");v&&(v.value=""),n.onClose()}catch(u){console.error("Gagal unggah dokumen:",u),alert("Gagal mengunggah dokumen. Silakan coba lagi.")}finally{d.value=!1}};return(y,u)=>n.show&&n.deed?(_(),F("div",GV,[M("div",WV,[u[7]||(u[7]=M("h3",{class:"text-xl font-bold mb-4"},"Unggah Dokumen",-1)),M("div",KV,[u[3]||(u[3]=M("p",{class:"font-medium text-gray-700 mb-1"},"Dokumen Wajib:",-1)),M("ul",XV,[(_(!0),F(ve,null,S1(h.value,f=>(_(),F("li",{key:f},J(f),1))),128))])]),h.value.length>0?(_(),F("form",{key:0,onSubmit:bb(l,["prevent"])},[M("div",JV,[u[5]||(u[5]=M("label",{for:"docTypeSelect",class:"block text-sm font-medium text-gray-700"},"Jenis Dokumen",-1)),ke(M("select",{id:"docTypeSelect","onUpdate:modelValue":u[0]||(u[0]=f=>i.value=f),class:"mt-1 block w-full border p-2 rounded"},[u[4]||(u[4]=M("option",{disabled:"",value:""},"-- Pilih Jenis Dokumen --",-1)),(_(!0),F(ve,null,S1(h.value,f=>(_(),F("option",{key:f,value:f},J(f),9,QV))),128))],512),[[nz,i.value]])]),M("div",YV,[u[6]||(u[6]=M("label",{for:"fileInput",class:"block text-sm font-medium text-gray-700"},"Pilih File",-1)),M("input",{type:"file",id:"fileInput",onChange:s,class:"mt-1 block w-full border p-2 rounded"},null,32)]),M("div",eR,[M("button",{type:"button",onClick:u[1]||(u[1]=(...f)=>n.onClose&&n.onClose(...f)),class:"px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"}," Batal "),M("button",{type:"submit",class:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded",disabled:!r.value||!i.value||d.value},[d.value?(_(),F("span",aR,"Mengunggah...")):(_(),F("span",nR,"Unggah"))],8,tR)])],32)):(_(),F("p",cR," Semua dokumen wajib telah diunggah. ")),M("button",{class:"absolute top-2 right-2 text-gray-500 hover:text-gray-700",onClick:u[2]||(u[2]=(...f)=>n.onClose&&n.onClose(...f))}," ✕ ")])])):f1("",!0)}},rR={class:"flex"},iR={class:"text-center"},dR={key:0,class:"text-center text-gray-500"},hR={key:1,class:"text-gray-500"},sR={key:2,class:"space-y-4 bg-white mt-4"},lR={class:"text-lg font-semibold mb-2"},yR={class:"text-sm text-gray-500 mb-2"},pR={key:0,class:"text-sm mt-1 text-gray-600 mb-2"},uR={class:"text-sm text-gray mb-2 font-xl font-bold"},kR={class:"px-2 py-1 rounded-sm bg-green-700 text-white"},fR={class:"flex gap-2 flex-wrap"},MR=["onClick"],mR=["onClick"],gR=q1({__name:"UserDeeds",setup(e){const t=Y(!1),n=Y(null),c=K0(),o={DRAFT:"DRAFT",IN_PROGRESS:"SEDANG PROSES",WAITING_SIGNATURE:"MENUNGGU TANDA TANGAN",COMPLETED:"KOMPLIT",REJECTED:"DITOLAK"},r=u=>o[u]||u,i=u=>{const f=Jw[u.deedType]||[],x=(u.deedDocs||[]).filter(I=>I.status!=="REJECTED").map(I=>I.docType);return f.every(I=>x.includes(I))},d=u=>{console.log(" deed type ",u.deedType),n.value=u,t.value=!0},h=async u=>{await c.push(`deeds/${u.id}`)},s=Y([]),l=Y(!0);P0(async()=>{try{const u=await Ce.get("/deeds/my-deed");s.value=u.data.content}catch(u){console.error("Gagal memuat akta",u)}finally{l.value=!1}});const y=u=>new Date(u).toLocaleDateString("id-ID",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return(u,f)=>{const v=Xe("router-link");return _(),F("div",null,[M("div",rR,[f[1]||(f[1]=M("h1",{class:"text-2xl font-bold mb-4 w-4/5"},"Daftar Akta Saya",-1)),M("div",iR,[re(v,{to:"/deeds/create",class:"bg-blue-500 px-2 py-1 rounded-xl text-white font-semibold inline-block"},{default:Ye(()=>f[0]||(f[0]=[M("span",null,"Buat Akta Baru",-1)])),_:1,__:[0]})])]),l.value?(_(),F("div",dR,"Memuat data akta...")):s.value.length===0?(_(),F("div",hR,"Belum ada akta.")):(_(),F("div",sR,[(_(!0),F(ve,null,S1(s.value,x=>(_(),F("div",{key:x.id,class:"border p-4 rounded shadow flex flex-col sm:flex-row justify-between gap-2 sm:items-center"},[M("div",null,[M("p",lR,J(x.title),1),M("p",yR," Jenis: "+J(x.deedType)+" · Nomor: "+J(x.number)+" · Tanggal: "+J(y(x.deedDate)),1),x.description?(_(),F("p",pR,J(x.description),1)):f1("",!0),M("p",uR,[f[2]||(f[2]=Je(" Status: ")),M("span",kR,J(r(x.deedStatus)),1)])]),M("div",fR,[M("button",{class:"bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700",onClick:I=>h(x)}," Lihat Detail ",8,MR),i(x)?f1("",!0):(_(),F("button",{key:0,class:"bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600",onClick:I=>d(x)}," Unggah Dokumen ",8,mR))])]))),128)),n.value!==null?(_(),Ue(oR,{key:0,show:t.value,deed:n.value,onClose:()=>{t.value=!1,n.value=null}},null,8,["show","deed","onClose"])):f1("",!0)]))])}}}),vR={class:"flex"},xR={class:"text-center"},wR={class:"bg-white px-6 py-8 rounded-lg shadow-md"},LR={class:"w-full table-auto mt-5"},bR={class:"px-4 py-2 border border-gray-300 text-center"},IR={class:"px-4 py-2 border border-gray-300"},CR={class:"px-4 py-2 border border-gray-300"},SR={class:"px-4 py-2 border border-gray-300"},qR={class:"px-4 py-2 border border-gray-300"},AR={class:"px-4 py-2 border border-gray-300 text-center"},zR={key:0},HR={class:"flex justify-between items-center mt-4"},PR=["disabled"],jR=["disabled"],$I=10,VR=q1({__name:"AdminDeed",setup(e){const t=Y([]),n=Y(0),c=Y(1),o=async()=>{const d=await Ce.get("/deeds",{params:{page:n.value,size:$I}});t.value=d.data.content,c.value=d.data.totalPages},r=()=>{n.value>0&&(n.value--,o())},i=()=>{n.value+1<c.value&&(n.value++,o())};return P0(o),(d,h)=>{const s=Xe("router-link"),l=Xe("RouterLink");return _(),F("div",null,[M("div",vR,[h[1]||(h[1]=M("h1",{class:"text-2xl font-bold mb-4 w-4/5"},"Daftar Akta",-1)),M("div",xR,[re(s,{to:"/deeds/create",class:"bg-blue-500 px-2 py-1 rounded-xl text-white font-semibold inline-block"},{default:Ye(()=>h[0]||(h[0]=[Je("Tambah Akta")])),_:1,__:[0]})])]),M("div",wR,[M("table",LR,[h[4]||(h[4]=M("thead",null,[M("tr",null,[M("th",{class:"px-4 py-2 border border-gray-300"},"No"),M("th",{class:"px-4 py-2 border border-gray-300"},"Nomor Akta"),M("th",{class:"px-4 py-2 border border-gray-300"},"Jenis Akta"),M("th",{class:"px-4 py-2 border border-gray-300"},"Tanggal"),M("th",{class:"px-4 py-2 border border-gray-300"},"Status Terakhir"),M("th",{class:"px-4 py-2 border border-gray-300"},"Aksi")])],-1)),M("tbody",null,[(_(!0),F(ve,null,S1(t.value,(y,u)=>(_(),F("tr",{key:y.id},[M("td",bR,J(n.value*$I+u+1),1),M("td",IR,J(y.number),1),M("td",CR,J(y.deedType),1),M("td",SR,J(y.deedDate),1),M("td",qR,J(y.deedStatus),1),M("td",AR,[re(l,{to:`/deeds/${y.id}`,class:"text-blue-500 hover:underline"},{default:Ye(()=>h[2]||(h[2]=[Je("Detail ")])),_:2,__:[2]},1032,["to"])])]))),128)),t.value.length===0?(_(),F("tr",zR,h[3]||(h[3]=[M("td",{colspan:"5",class:"text-center py-4 text-gray-500"},"Belum ada data akta",-1)]))):f1("",!0)])]),M("div",HR,[M("button",{class:"px-3 py-1 bg-gray-200 rounded disabled:opacity-50",onClick:r,disabled:n.value===0}," < Prev ",8,PR),M("span",null,"Halaman "+J(n.value+1)+" dari "+J(c.value),1),M("button",{class:"px-3 py-1 bg-gray-200 rounded disabled:opacity-50",onClick:i,disabled:n.value+1>=c.value}," Next > ",8,jR)])])])}}}),RR=q1({__name:"Deeds",setup(e){const t=t1();return(n,c)=>(_(),F("div",null,[Ge(t).isAdmin?(_(),Ue(VR,{key:0})):(_(),Ue(gR,{key:1}))]))}}),_R=[{path:"/login",component:NI,children:[{path:"",name:"Login",component:hj}]},{path:"/register",component:NI,children:[{path:"",name:"Register",component:Nj}]},{path:"/",component:rV,meta:{authRequired:!0},children:[{path:"",name:"Home",component:Bj},{path:"documents",name:"DocumentUpload",component:sV},{path:"clients",name:"klien",component:bV,meta:{roles:["ADMIN"]}},{path:"clients/:id",name:"clientEdit",component:()=>d1(()=>import("./ClientEdit-qdYfkhAq.js"),[])},{path:"clients/:id/show",name:"clientDetail",meta:{roles:["ADMIN"]},component:()=>d1(()=>import("./ClientDetail-BKMZ8b-S.js"),[])},{path:"operator/deeds/:id/review-documents",meta:{roles:["ADMIN"]},component:()=>d1(()=>import("./DeedDocumentReview-RJVm3mzH.js"),__vite__mapDeps([0,1]))},{path:"users/deeds/:id/upload-documents",meta:{roles:["USER"]},component:()=>d1(()=>import("./DeedDocumentUpload-DlDUsxip.js"),[])},{path:"deeds",name:"akta",component:RR},{path:"deeds/create",name:"DeedCreate",component:()=>d1(()=>import("./DeedForm-B_w26YB9.js"),__vite__mapDeps([2,3]))},{path:"deeds/:id/edit",name:"EditAktaForm",component:()=>d1(()=>import("./EditDeedForm-D8uJF4hw.js"),__vite__mapDeps([4,3]))},{path:"deeds/:id",name:"DeedDetail",component:()=>d1(()=>import("./DeedDetail-DLIZ3T-j.js"),__vite__mapDeps([5,1,6]))},{path:"appointments",name:"appointments",meta:{roles:["ADMIN"]},component:()=>d1(()=>import("./Appointments-CI4heO9X.js"),[])},{path:"appointments/create",name:"appointmentCreate",meta:{roles:["USER"]},component:()=>d1(()=>import("./AppointmentCreate-BvMPE70w.js"),[])},{path:"appointments/my-appointments",name:"my-appointments",meta:{roles:["USER"]},component:()=>d1(()=>import("./MyAppointments-C4JzuKCj.js"),[])},{path:"schedule",name:"jadwal",component:qV},{path:"users",name:"pengguna",component:HV},{path:"settings",name:"pengaturan",component:VV},{path:"profile",name:"profile",component:$V}]}],zb=LH({history:Qz(),routes:_R});zb.beforeEach(async(e,t,n)=>{var i;const c=t1();c.user||await c.initialize();const o=c.isAuthenticated,r=(i=c.user)==null?void 0:i.role;if(e.meta.authRequired&&!o)return n({name:"Login"});if(e.meta.roles&&!e.meta.roles.includes(r))return n({name:"Home"});n()});const ob=dz(gz);ob.use(lz());(async()=>(await t1().initialize(),ob.use(zb),ob.mount("#app")))();export{Ue as A,On as B,ve as F,zn as _,M as a,P0 as b,F as c,Ce as d,f1 as e,Ge as f,K0 as g,q1 as h,re as i,Xe as j,Je as k,S1 as l,U0 as m,O0 as n,_ as o,He as p,Jw as q,Y as r,bb as s,J as t,IH as u,ke as v,Ye as w,nz as x,ge as y,t1 as z};
