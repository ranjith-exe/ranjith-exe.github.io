(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();function PS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qd={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function vb(){if(ex)return Jl;ex=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:i,key:u,ref:s!==void 0?s:null,props:l}}return Jl.Fragment=t,Jl.jsx=e,Jl.jsxs=e,Jl}var nx;function xb(){return nx||(nx=1,qd.exports=vb()),qd.exports}var Ut=xb(),Yd={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix;function Sb(){if(ix)return he;ix=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function S(I,et,ht){this.props=I,this.context=et,this.refs=b,this.updater=ht||x}S.prototype.isReactComponent={},S.prototype.setState=function(I,et){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,et,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function y(){}y.prototype=S.prototype;function E(I,et,ht){this.props=I,this.context=et,this.refs=b,this.updater=ht||x}var D=E.prototype=new y;D.constructor=E,M(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,U={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function O(I,et,ht,bt,vt,Ot){return ht=Ot.ref,{$$typeof:o,type:I,key:et,ref:ht!==void 0?ht:null,props:Ot}}function A(I,et){return O(I.type,et,void 0,void 0,void 0,I.props)}function w(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function k(I){var et={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ht){return et[ht]})}var F=/\/+/g;function W(I,et){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):et.toString(36)}function Y(){}function tt(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(Y,Y):(I.status="pending",I.then(function(et){I.status==="pending"&&(I.status="fulfilled",I.value=et)},function(et){I.status==="pending"&&(I.status="rejected",I.reason=et)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function Z(I,et,ht,bt,vt){var Ot=typeof I;(Ot==="undefined"||Ot==="boolean")&&(I=null);var nt=!1;if(I===null)nt=!0;else switch(Ot){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(I.$$typeof){case o:case t:nt=!0;break;case m:return nt=I._init,Z(nt(I._payload),et,ht,bt,vt)}}if(nt)return vt=vt(I),nt=bt===""?"."+W(I,0):bt,C(vt)?(ht="",nt!=null&&(ht=nt.replace(F,"$&/")+"/"),Z(vt,et,ht,"",function(Yt){return Yt})):vt!=null&&(w(vt)&&(vt=A(vt,ht+(vt.key==null||I&&I.key===vt.key?"":(""+vt.key).replace(F,"$&/")+"/")+nt)),et.push(vt)),1;nt=0;var Et=bt===""?".":bt+":";if(C(I))for(var _t=0;_t<I.length;_t++)bt=I[_t],Ot=Et+W(bt,_t),nt+=Z(bt,et,ht,Ot,vt);else if(_t=_(I),typeof _t=="function")for(I=_t.call(I),_t=0;!(bt=I.next()).done;)bt=bt.value,Ot=Et+W(bt,_t++),nt+=Z(bt,et,ht,Ot,vt);else if(Ot==="object"){if(typeof I.then=="function")return Z(tt(I),et,ht,bt,vt);throw et=String(I),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return nt}function G(I,et,ht){if(I==null)return I;var bt=[],vt=0;return Z(I,bt,"","",function(Ot){return et.call(ht,Ot,vt++)}),bt}function H(I){if(I._status===-1){var et=I._result;et=et(),et.then(function(ht){(I._status===0||I._status===-1)&&(I._status=1,I._result=ht)},function(ht){(I._status===0||I._status===-1)&&(I._status=2,I._result=ht)}),I._status===-1&&(I._status=0,I._result=et)}if(I._status===1)return I._result.default;throw I._result}var it=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function ft(){}return he.Children={map:G,forEach:function(I,et,ht){G(I,function(){et.apply(this,arguments)},ht)},count:function(I){var et=0;return G(I,function(){et++}),et},toArray:function(I){return G(I,function(et){return et})||[]},only:function(I){if(!w(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},he.Component=S,he.Fragment=e,he.Profiler=s,he.PureComponent=E,he.StrictMode=i,he.Suspense=d,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,he.act=function(){throw Error("act(...) is not supported in production builds of React.")},he.cache=function(I){return function(){return I.apply(null,arguments)}},he.cloneElement=function(I,et,ht){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var bt=M({},I.props),vt=I.key,Ot=void 0;if(et!=null)for(nt in et.ref!==void 0&&(Ot=void 0),et.key!==void 0&&(vt=""+et.key),et)!N.call(et,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&et.ref===void 0||(bt[nt]=et[nt]);var nt=arguments.length-2;if(nt===1)bt.children=ht;else if(1<nt){for(var Et=Array(nt),_t=0;_t<nt;_t++)Et[_t]=arguments[_t+2];bt.children=Et}return O(I.type,vt,void 0,void 0,Ot,bt)},he.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},he.createElement=function(I,et,ht){var bt,vt={},Ot=null;if(et!=null)for(bt in et.key!==void 0&&(Ot=""+et.key),et)N.call(et,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(vt[bt]=et[bt]);var nt=arguments.length-2;if(nt===1)vt.children=ht;else if(1<nt){for(var Et=Array(nt),_t=0;_t<nt;_t++)Et[_t]=arguments[_t+2];vt.children=Et}if(I&&I.defaultProps)for(bt in nt=I.defaultProps,nt)vt[bt]===void 0&&(vt[bt]=nt[bt]);return O(I,Ot,void 0,void 0,null,vt)},he.createRef=function(){return{current:null}},he.forwardRef=function(I){return{$$typeof:f,render:I}},he.isValidElement=w,he.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:H}},he.memo=function(I,et){return{$$typeof:h,type:I,compare:et===void 0?null:et}},he.startTransition=function(I){var et=U.T,ht={};U.T=ht;try{var bt=I(),vt=U.S;vt!==null&&vt(ht,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(ft,it)}catch(Ot){it(Ot)}finally{U.T=et}},he.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},he.use=function(I){return U.H.use(I)},he.useActionState=function(I,et,ht){return U.H.useActionState(I,et,ht)},he.useCallback=function(I,et){return U.H.useCallback(I,et)},he.useContext=function(I){return U.H.useContext(I)},he.useDebugValue=function(){},he.useDeferredValue=function(I,et){return U.H.useDeferredValue(I,et)},he.useEffect=function(I,et){return U.H.useEffect(I,et)},he.useId=function(){return U.H.useId()},he.useImperativeHandle=function(I,et,ht){return U.H.useImperativeHandle(I,et,ht)},he.useInsertionEffect=function(I,et){return U.H.useInsertionEffect(I,et)},he.useLayoutEffect=function(I,et){return U.H.useLayoutEffect(I,et)},he.useMemo=function(I,et){return U.H.useMemo(I,et)},he.useOptimistic=function(I,et){return U.H.useOptimistic(I,et)},he.useReducer=function(I,et,ht){return U.H.useReducer(I,et,ht)},he.useRef=function(I){return U.H.useRef(I)},he.useState=function(I){return U.H.useState(I)},he.useSyncExternalStore=function(I,et,ht){return U.H.useSyncExternalStore(I,et,ht)},he.useTransition=function(){return U.H.useTransition()},he.version="19.0.0",he}var ax;function t0(){return ax||(ax=1,Yd.exports=Sb()),Yd.exports}var We=t0();const yb=PS(We);var jd={exports:{}},$l={},Zd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function Mb(){return sx||(sx=1,function(o){function t(G,H){var it=G.length;G.push(H);t:for(;0<it;){var ft=it-1>>>1,I=G[ft];if(0<s(I,H))G[ft]=H,G[it]=I,it=ft;else break t}}function e(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var H=G[0],it=G.pop();if(it!==H){G[0]=it;t:for(var ft=0,I=G.length,et=I>>>1;ft<et;){var ht=2*(ft+1)-1,bt=G[ht],vt=ht+1,Ot=G[vt];if(0>s(bt,it))vt<I&&0>s(Ot,bt)?(G[ft]=Ot,G[vt]=it,ft=vt):(G[ft]=bt,G[ht]=it,ft=ht);else if(vt<I&&0>s(Ot,it))G[ft]=Ot,G[vt]=it,ft=vt;else break t}}return H}function s(G,H){var it=G.sortIndex-H.sortIndex;return it!==0?it:G.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,v=null,_=3,x=!1,M=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function D(G){for(var H=e(h);H!==null;){if(H.callback===null)i(h);else if(H.startTime<=G)i(h),H.sortIndex=H.expirationTime,t(d,H);else break;H=e(h)}}function C(G){if(b=!1,D(G),!M)if(e(d)!==null)M=!0,tt();else{var H=e(h);H!==null&&Z(C,H.startTime-G)}}var U=!1,N=-1,O=5,A=-1;function w(){return!(o.unstable_now()-A<O)}function k(){if(U){var G=o.unstable_now();A=G;var H=!0;try{t:{M=!1,b&&(b=!1,y(N),N=-1),x=!0;var it=_;try{e:{for(D(G),v=e(d);v!==null&&!(v.expirationTime>G&&w());){var ft=v.callback;if(typeof ft=="function"){v.callback=null,_=v.priorityLevel;var I=ft(v.expirationTime<=G);if(G=o.unstable_now(),typeof I=="function"){v.callback=I,D(G),H=!0;break e}v===e(d)&&i(d),D(G)}else i(d);v=e(d)}if(v!==null)H=!0;else{var et=e(h);et!==null&&Z(C,et.startTime-G),H=!1}}break t}finally{v=null,_=it,x=!1}H=void 0}}finally{H?F():U=!1}}}var F;if(typeof E=="function")F=function(){E(k)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Y=W.port2;W.port1.onmessage=k,F=function(){Y.postMessage(null)}}else F=function(){S(k,0)};function tt(){U||(U=!0,F())}function Z(G,H){N=S(function(){G(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,tt())},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return e(d)},o.unstable_next=function(G){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var it=_;_=H;try{return G()}finally{_=it}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,H){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var it=_;_=G;try{return H()}finally{_=it}},o.unstable_scheduleCallback=function(G,H,it){var ft=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?ft+it:ft):it=ft,G){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=it+I,G={id:m++,callback:H,priorityLevel:G,startTime:it,expirationTime:I,sortIndex:-1},it>ft?(G.sortIndex=it,t(h,G),e(d)===null&&G===e(h)&&(b?(y(N),N=-1):b=!0,Z(C,it-ft))):(G.sortIndex=I,t(d,G),M||x||(M=!0,tt())),G},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(G){var H=_;return function(){var it=_;_=H;try{return G.apply(this,arguments)}finally{_=it}}}}(Kd)),Kd}var rx;function bb(){return rx||(rx=1,Zd.exports=Mb()),Zd.exports}var Qd={exports:{}},Xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function Eb(){if(ox)return Xn;ox=1;var o=t0();function t(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,h,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:d,containerInfo:h,implementation:m}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Xn.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(d,h,null,m)},Xn.flushSync=function(d){var h=u.T,m=i.p;try{if(u.T=null,i.p=2,d)return d()}finally{u.T=h,i.p=m,i.d.f()}},Xn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(d,h))},Xn.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},Xn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?i.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):m==="script"&&i.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Xn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);i.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(d)},Xn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin);i.d.L(d,m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Xn.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);i.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(d)},Xn.requestFormReset=function(d){i.d.r(d)},Xn.unstable_batchedUpdates=function(d,h){return d(h)},Xn.useFormState=function(d,h,m){return u.H.useFormState(d,h,m)},Xn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Xn.version="19.0.0",Xn}var lx;function Tb(){if(lx)return Qd.exports;lx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qd.exports=Eb(),Qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx;function Ab(){if(cx)return $l;cx=1;var o=bb(),t=t0(),e=Tb();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),_=Symbol.for("react.consumer"),x=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),C=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function N(n){return n===null||typeof n!="object"?null:(n=U&&n[U]||n["@@iterator"],typeof n=="function"?n:null)}var O=Symbol.for("react.client.reference");function A(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===O?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case d:return"Fragment";case f:return"Portal";case m:return"Profiler";case h:return"StrictMode";case b:return"Suspense";case S:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Provider";case _:return(n._context.displayName||"Context")+".Consumer";case M:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case y:return a=n.displayName||null,a!==null?a:A(n.type)||"Memo";case E:a=n._payload,n=n._init;try{return A(n(a))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=Object.assign,F,W;function Y(n){if(F===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);F=a&&a[1]||"",W=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+n+W}var tt=!1;function Z(n,a){if(!n||tt)return"";tt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(dt){var ot=dt}Reflect.construct(n,[],St)}else{try{St.call()}catch(dt){ot=dt}n.call(St.prototype)}}else{try{throw Error()}catch(dt){ot=dt}(St=n())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(dt){if(dt&&ot&&typeof dt.stack=="string")return[dt.stack,ot.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],P=g[1];if(T&&P){var B=T.split(`
`),K=P.split(`
`);for(p=c=0;c<B.length&&!B[c].includes("DetermineComponentFrameRoot");)c++;for(;p<K.length&&!K[p].includes("DetermineComponentFrameRoot");)p++;if(c===B.length||p===K.length)for(c=B.length-1,p=K.length-1;1<=c&&0<=p&&B[c]!==K[p];)p--;for(;1<=c&&0<=p;c--,p--)if(B[c]!==K[p]){if(c!==1||p!==1)do if(c--,p--,0>p||B[c]!==K[p]){var mt=`
`+B[c].replace(" at new "," at ");return n.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",n.displayName)),mt}while(1<=c&&0<=p);break}}}finally{tt=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?Y(r):""}function G(n){switch(n.tag){case 26:case 27:case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function H(n){try{var a="";do a+=G(n),n=n.return;while(n);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function it(n){var a=n,r=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(r=a.return),n=a.return;while(n)}return a.tag===3?r:null}function ft(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function I(n){if(it(n)!==n)throw Error(i(188))}function et(n){var a=n.alternate;if(!a){if(a=it(n),a===null)throw Error(i(188));return a!==n?null:n}for(var r=n,c=a;;){var p=r.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){r=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===r)return I(p),n;if(g===c)return I(p),a;g=g.sibling}throw Error(i(188))}if(r.return!==c.return)r=p,c=g;else{for(var T=!1,P=p.child;P;){if(P===r){T=!0,r=p,c=g;break}if(P===c){T=!0,c=p,r=g;break}P=P.sibling}if(!T){for(P=g.child;P;){if(P===r){T=!0,r=g,c=p;break}if(P===c){T=!0,c=g,r=p;break}P=P.sibling}if(!T)throw Error(i(189))}}if(r.alternate!==c)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?n:a}function ht(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=ht(n),a!==null)return a;n=n.sibling}return null}var bt=Array.isArray,vt=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ot={pending:!1,data:null,method:null,action:null},nt=[],Et=-1;function _t(n){return{current:n}}function Yt(n){0>Et||(n.current=nt[Et],nt[Et]=null,Et--)}function Pt(n,a){Et++,nt[Et]=n.current,n.current=a}var Qt=_t(null),je=_t(null),ce=_t(null),be=_t(null);function Re(n,a){switch(Pt(ce,a),Pt(je,n),Pt(Qt,null),n=a.nodeType,n){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?Dv(a):0;break;default:if(n=n===8?a.parentNode:a,a=n.tagName,n=n.namespaceURI)n=Dv(n),a=Uv(n,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}Yt(Qt),Pt(Qt,a)}function ae(){Yt(Qt),Yt(je),Yt(ce)}function Xe(n){n.memoizedState!==null&&Pt(be,n);var a=Qt.current,r=Uv(a,n.type);a!==r&&(Pt(je,n),Pt(Qt,r))}function X(n){je.current===n&&(Yt(Qt),Yt(je)),be.current===n&&(Yt(be),Yl._currentValue=Ot)}var Ze=Object.prototype.hasOwnProperty,Ee=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,jt=o.unstable_shouldYield,z=o.unstable_requestPaint,R=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Jt=o.log,te=o.unstable_setDisableYieldValue,Tt=null,yt=null;function Wt(n){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}}function zt(n){if(typeof Jt=="function"&&te(n),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Tt,n)}catch{}}var Dt=Math.clz32?Math.clz32:Rt,ue=Math.log,q=Math.LN2;function Rt(n){return n>>>=0,n===0?32:31-(ue(n)/q|0)|0}var At=128,It=4194304;function Mt(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ct(n,a){var r=n.pendingLanes;if(r===0)return 0;var c=0,p=n.suspendedLanes,g=n.pingedLanes,T=n.warmLanes;n=n.finishedLanes!==0;var P=r&134217727;return P!==0?(r=P&~p,r!==0?c=Mt(r):(g&=P,g!==0?c=Mt(g):n||(T=P&~T,T!==0&&(c=Mt(T))))):(P=r&~p,P!==0?c=Mt(P):g!==0?c=Mt(g):n||(T=r&~T,T!==0&&(c=Mt(T)))),c===0?0:a!==0&&a!==c&&(a&p)===0&&(p=c&-c,T=a&-a,p>=T||p===32&&(T&4194176)!==0)?a:c}function Gt(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function se(n,a){switch(n){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var n=At;return At<<=1,(At&4194176)===0&&(At=128),n}function Ce(){var n=It;return It<<=1,(It&62914560)===0&&(It=4194304),n}function gi(n){for(var a=[],r=0;31>r;r++)a.push(n);return a}function Kn(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Nc(n,a,r,c,p,g){var T=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var P=n.entanglements,B=n.expirationTimes,K=n.hiddenUpdates;for(r=T&~r;0<r;){var mt=31-Dt(r),St=1<<mt;P[mt]=0,B[mt]=-1;var ot=K[mt];if(ot!==null)for(K[mt]=null,mt=0;mt<ot.length;mt++){var dt=ot[mt];dt!==null&&(dt.lane&=-536870913)}r&=~St}c!==0&&Gr(n,c,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(T&~a))}function Gr(n,a,r){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-Dt(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|r&4194218}function Pc(n,a){var r=n.entangledLanes|=a;for(n=n.entanglements;r;){var c=31-Dt(r),p=1<<c;p&a|n[c]&a&&(n[c]|=a),r&=~p}}function il(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function al(){var n=vt.p;return n!==0?n:(n=window.event,n===void 0?32:Zv(n.type))}function Ca(n,a){var r=vt.p;try{return vt.p=n,a()}finally{vt.p=r}}var Pi=Math.random().toString(36).slice(2),yn="__reactFiber$"+Pi,On="__reactProps$"+Pi,Qi="__reactContainer$"+Pi,Hr="__reactEvents$"+Pi,Vr="__reactListeners$"+Pi,Oc="__reactHandles$"+Pi,sl="__reactResources$"+Pi,Ks="__reactMarker$"+Pi;function rl(n){delete n[yn],delete n[On],delete n[Hr],delete n[Vr],delete n[Oc]}function Da(n){var a=n[yn];if(a)return a;for(var r=n.parentNode;r;){if(a=r[Qi]||r[yn]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(n=Pv(n);n!==null;){if(r=n[yn])return r;n=Pv(n)}return a}n=r,r=n.parentNode}return null}function os(n){if(n=n[yn]||n[Qi]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Qs(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function ls(n){var a=n[sl];return a||(a=n[sl]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function L(n){n[Ks]=!0}var J=new Set,lt={};function st(n,a){at(n,a),at(n+"Capture",a)}function at(n,a){for(lt[n]=a,n=0;n<a.length;n++)J.add(a[n])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lt={},qt={};function Zt(n){return Ze.call(qt,n)?!0:Ze.call(Lt,n)?!1:Bt.test(n)?qt[n]=!0:(Lt[n]=!0,!1)}function ie(n,a,r){if(Zt(a))if(r===null)n.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+r)}}function oe(n,a,r){if(r===null)n.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+r)}}function Ht(n,a,r,c){if(c===null)n.removeAttribute(r);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttributeNS(a,r,""+c)}}function fe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Qe(n){var a=Ke(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var p=r.get,g=r.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return p.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,a,{enumerable:r.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Ae(n){n._valueTracker||(n._valueTracker=Qe(n))}function Mn(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var r=a.getValue(),c="";return n&&(c=Ke(n)?n.checked?"true":"false":n.value),n=c,n!==r?(a.setValue(n),!0):!1}function Vt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Qn=/[\n"\\]/g;function re(n){return n.replace(Qn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Jn(n,a,r,c,p,g,T,P){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),a!=null?T==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+fe(a)):n.value!==""+fe(a)&&(n.value=""+fe(a)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),a!=null?Ji(n,T,fe(a)):r!=null?Ji(n,T,fe(r)):c!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),P!=null&&typeof P!="function"&&typeof P!="symbol"&&typeof P!="boolean"?n.name=""+fe(P):n.removeAttribute("name")}function _i(n,a,r,c,p,g,T,P){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||r!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;r=r!=null?""+fe(r):"",a=a!=null?""+fe(a):r,P||a===n.value||(n.value=a),n.defaultValue=a}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=P?n.checked:!!c,n.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function Ji(n,a,r){a==="number"&&Vt(n.ownerDocument)===n||n.defaultValue===""+r||(n.defaultValue=""+r)}function vi(n,a,r,c){if(n=n.options,a){a={};for(var p=0;p<r.length;p++)a["$"+r[p]]=!0;for(r=0;r<n.length;r++)p=a.hasOwnProperty("$"+n[r].value),n[r].selected!==p&&(n[r].selected=p),p&&c&&(n[r].defaultSelected=!0)}else{for(r=""+fe(r),a=null,p=0;p<n.length;p++){if(n[p].value===r){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}a!==null||n[p].disabled||(a=n[p])}a!==null&&(a.selected=!0)}}function Pe(n,a,r){if(a!=null&&(a=""+fe(a),a!==n.value&&(n.value=a),r==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=r!=null?""+fe(r):""}function dn(n,a,r,c){if(a==null){if(c!=null){if(r!=null)throw Error(i(92));if(bt(c)){if(1<c.length)throw Error(i(93));c=c[0]}r=c}r==null&&(r=""),a=r}r=fe(a),n.defaultValue=r,c=n.textContent,c===r&&c!==""&&c!==null&&(n.value=c)}function $n(n,a){if(a){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=a;return}}n.textContent=a}var pn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $i(n,a,r){var c=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,r):typeof r!="number"||r===0||pn.has(a)?a==="float"?n.cssFloat=r:n[a]=(""+r).trim():n[a]=r+"px"}function Ua(n,a,r){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,r!=null){for(var c in r)!r.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in a)c=a[p],a.hasOwnProperty(p)&&r[p]!==c&&$i(n,p,c)}else for(var g in a)a.hasOwnProperty(g)&&$i(n,g,a[g])}function kr(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_M=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fc(n){return _M.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Yf=null;function jf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Xr=null,Wr=null;function G0(n){var a=os(n);if(a&&(n=a.stateNode)){var r=n[On]||null;t:switch(n=a.stateNode,a.type){case"input":if(Jn(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+re(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var c=r[a];if(c!==n&&c.form===n.form){var p=c[On]||null;if(!p)throw Error(i(90));Jn(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(a=0;a<r.length;a++)c=r[a],c.form===n.form&&Mn(c)}break t;case"textarea":Pe(n,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&vi(n,!!r.multiple,a,!1)}}}var Zf=!1;function H0(n,a,r){if(Zf)return n(a,r);Zf=!0;try{var c=n(a);return c}finally{if(Zf=!1,(Xr!==null||Wr!==null)&&(xu(),Xr&&(a=Xr,n=Wr,Wr=Xr=null,G0(a),n)))for(a=0;a<n.length;a++)G0(n[a])}}function ol(n,a){var r=n.stateNode;if(r===null)return null;var c=r[On]||null;if(c===null)return null;r=c[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break t;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(i(231,a,typeof r));return r}var Kf=!1;if(Ct)try{var ll={};Object.defineProperty(ll,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",ll,ll),window.removeEventListener("test",ll,ll)}catch{Kf=!1}var cs=null,Qf=null,Ic=null;function V0(){if(Ic)return Ic;var n,a=Qf,r=a.length,c,p="value"in cs?cs.value:cs.textContent,g=p.length;for(n=0;n<r&&a[n]===p[n];n++);var T=r-n;for(c=1;c<=T&&a[r-c]===p[g-c];c++);return Ic=p.slice(n,1<c?1-c:void 0)}function zc(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Bc(){return!0}function k0(){return!1}function si(n){function a(r,c,p,g,T){this._reactName=r,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var P in n)n.hasOwnProperty(P)&&(r=n[P],this[P]=r?r(g):g[P]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Bc:k0,this.isPropagationStopped=k0,this}return k(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bc)},persist:function(){},isPersistent:Bc}),a}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gc=si(Js),cl=k({},Js,{view:0,detail:0}),vM=si(cl),Jf,$f,ul,Hc=k({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ul&&(ul&&n.type==="mousemove"?(Jf=n.screenX-ul.screenX,$f=n.screenY-ul.screenY):$f=Jf=0,ul=n),Jf)},movementY:function(n){return"movementY"in n?n.movementY:$f}}),X0=si(Hc),xM=k({},Hc,{dataTransfer:0}),SM=si(xM),yM=k({},cl,{relatedTarget:0}),th=si(yM),MM=k({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),bM=si(MM),EM=k({},Js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),TM=si(EM),AM=k({},Js,{data:0}),W0=si(AM),wM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DM(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=CM[n])?!!a[n]:!1}function eh(){return DM}var UM=k({},cl,{key:function(n){if(n.key){var a=wM[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=zc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?RM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(n){return n.type==="keypress"?zc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),LM=si(UM),NM=k({},Hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q0=si(NM),PM=k({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),OM=si(PM),FM=k({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=si(FM),zM=k({},Hc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),BM=si(zM),GM=k({},Js,{newState:0,oldState:0}),HM=si(GM),VM=[9,13,27,32],nh=Ct&&"CompositionEvent"in window,fl=null;Ct&&"documentMode"in document&&(fl=document.documentMode);var kM=Ct&&"TextEvent"in window&&!fl,Y0=Ct&&(!nh||fl&&8<fl&&11>=fl),j0=" ",Z0=!1;function K0(n,a){switch(n){case"keyup":return VM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qr=!1;function XM(n,a){switch(n){case"compositionend":return Q0(a);case"keypress":return a.which!==32?null:(Z0=!0,j0);case"textInput":return n=a.data,n===j0&&Z0?null:n;default:return null}}function WM(n,a){if(qr)return n==="compositionend"||!nh&&K0(n,a)?(n=V0(),Ic=Qf=cs=null,qr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Y0&&a.locale!=="ko"?null:a.data;default:return null}}var qM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function J0(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!qM[n.type]:a==="textarea"}function $0(n,a,r,c){Xr?Wr?Wr.push(c):Wr=[c]:Xr=c,a=Eu(a,"onChange"),0<a.length&&(r=new Gc("onChange","change",null,r,c),n.push({event:r,listeners:a}))}var hl=null,dl=null;function YM(n){Tv(n,0)}function Vc(n){var a=Qs(n);if(Mn(a))return n}function tg(n,a){if(n==="change")return a}var eg=!1;if(Ct){var ih;if(Ct){var ah="oninput"in document;if(!ah){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),ah=typeof ng.oninput=="function"}ih=ah}else ih=!1;eg=ih&&(!document.documentMode||9<document.documentMode)}function ig(){hl&&(hl.detachEvent("onpropertychange",ag),dl=hl=null)}function ag(n){if(n.propertyName==="value"&&Vc(dl)){var a=[];$0(a,dl,n,jf(n)),H0(YM,a)}}function jM(n,a,r){n==="focusin"?(ig(),hl=a,dl=r,hl.attachEvent("onpropertychange",ag)):n==="focusout"&&ig()}function ZM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vc(dl)}function KM(n,a){if(n==="click")return Vc(a)}function QM(n,a){if(n==="input"||n==="change")return Vc(a)}function JM(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var xi=typeof Object.is=="function"?Object.is:JM;function pl(n,a){if(xi(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var r=Object.keys(n),c=Object.keys(a);if(r.length!==c.length)return!1;for(c=0;c<r.length;c++){var p=r[c];if(!Ze.call(a,p)||!xi(n[p],a[p]))return!1}return!0}function sg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rg(n,a){var r=sg(n);n=0;for(var c;r;){if(r.nodeType===3){if(c=n+r.textContent.length,n<=a&&c>=a)return{node:r,offset:a-n};n=c}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=sg(r)}}function og(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?og(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function lg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Vt(n.document);a instanceof n.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)n=a.contentWindow;else break;a=Vt(n.document)}return a}function sh(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}function $M(n,a){var r=lg(a);a=n.focusedElem;var c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&og(a.ownerDocument.documentElement,a)){if(c!==null&&sh(a)){if(n=c.start,r=c.end,r===void 0&&(r=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(r,a.value.length);else if(r=(n=a.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var p=a.textContent.length,g=Math.min(c.start,p);c=c.end===void 0?g:Math.min(c.end,p),!r.extend&&g>c&&(p=c,c=g,g=p),p=rg(a,g);var T=rg(a,c);p&&T&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==T.node||r.focusOffset!==T.offset)&&(n=n.createRange(),n.setStart(p.node,p.offset),r.removeAllRanges(),g>c?(r.addRange(n),r.extend(T.node,T.offset)):(n.setEnd(T.node,T.offset),r.addRange(n)))}}for(n=[],r=a;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)r=n[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var t1=Ct&&"documentMode"in document&&11>=document.documentMode,Yr=null,rh=null,ml=null,oh=!1;function cg(n,a,r){var c=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;oh||Yr==null||Yr!==Vt(c)||(c=Yr,"selectionStart"in c&&sh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ml&&pl(ml,c)||(ml=c,c=Eu(rh,"onSelect"),0<c.length&&(a=new Gc("onSelect","select",null,a,r),n.push({event:a,listeners:c}),a.target=Yr)))}function $s(n,a){var r={};return r[n.toLowerCase()]=a.toLowerCase(),r["Webkit"+n]="webkit"+a,r["Moz"+n]="moz"+a,r}var jr={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionrun:$s("Transition","TransitionRun"),transitionstart:$s("Transition","TransitionStart"),transitioncancel:$s("Transition","TransitionCancel"),transitionend:$s("Transition","TransitionEnd")},lh={},ug={};Ct&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function tr(n){if(lh[n])return lh[n];if(!jr[n])return n;var a=jr[n],r;for(r in a)if(a.hasOwnProperty(r)&&r in ug)return lh[n]=a[r];return n}var fg=tr("animationend"),hg=tr("animationiteration"),dg=tr("animationstart"),e1=tr("transitionrun"),n1=tr("transitionstart"),i1=tr("transitioncancel"),pg=tr("transitionend"),mg=new Map,gg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ta(n,a){mg.set(n,a),st(a,[n])}var Oi=[],Zr=0,ch=0;function kc(){for(var n=Zr,a=ch=Zr=0;a<n;){var r=Oi[a];Oi[a++]=null;var c=Oi[a];Oi[a++]=null;var p=Oi[a];Oi[a++]=null;var g=Oi[a];if(Oi[a++]=null,c!==null&&p!==null){var T=c.pending;T===null?p.next=p:(p.next=T.next,T.next=p),c.pending=p}g!==0&&_g(r,p,g)}}function Xc(n,a,r,c){Oi[Zr++]=n,Oi[Zr++]=a,Oi[Zr++]=r,Oi[Zr++]=c,ch|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function uh(n,a,r,c){return Xc(n,a,r,c),Wc(n)}function us(n,a){return Xc(n,null,null,a),Wc(n)}function _g(n,a,r){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r);for(var p=!1,g=n.return;g!==null;)g.childLanes|=r,c=g.alternate,c!==null&&(c.childLanes|=r),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;p&&a!==null&&n.tag===3&&(g=n.stateNode,p=31-Dt(r),g=g.hiddenUpdates,n=g[p],n===null?g[p]=[a]:n.push(a),a.lane=r|536870912)}function Wc(n){if(50<Gl)throw Gl=0,gd=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Kr={},vg=new WeakMap;function Fi(n,a){if(typeof n=="object"&&n!==null){var r=vg.get(n);return r!==void 0?r:(a={value:n,source:a,stack:H(a)},vg.set(n,a),a)}return{value:n,source:a,stack:H(a)}}var Qr=[],Jr=0,qc=null,Yc=0,Ii=[],zi=0,er=null,La=1,Na="";function nr(n,a){Qr[Jr++]=Yc,Qr[Jr++]=qc,qc=n,Yc=a}function xg(n,a,r){Ii[zi++]=La,Ii[zi++]=Na,Ii[zi++]=er,er=n;var c=La;n=Na;var p=32-Dt(c)-1;c&=~(1<<p),r+=1;var g=32-Dt(a)+p;if(30<g){var T=p-p%5;g=(c&(1<<T)-1).toString(32),c>>=T,p-=T,La=1<<32-Dt(a)+p|r<<p|c,Na=g+n}else La=1<<g|r<<p|c,Na=n}function fh(n){n.return!==null&&(nr(n,1),xg(n,1,0))}function hh(n){for(;n===qc;)qc=Qr[--Jr],Qr[Jr]=null,Yc=Qr[--Jr],Qr[Jr]=null;for(;n===er;)er=Ii[--zi],Ii[zi]=null,Na=Ii[--zi],Ii[zi]=null,La=Ii[--zi],Ii[zi]=null}var ti=null,Fn=null,De=!1,ea=null,ca=!1,dh=Error(i(519));function ir(n){var a=Error(i(418,""));throw vl(Fi(a,n)),dh}function Sg(n){var a=n.stateNode,r=n.type,c=n.memoizedProps;switch(a[yn]=n,a[On]=c,r){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(r=0;r<Vl.length;r++)ye(Vl[r],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":ye("invalid",a),_i(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ae(a);break;case"select":ye("invalid",a);break;case"textarea":ye("invalid",a),dn(a,c.value,c.defaultValue,c.children),Ae(a)}r=c.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||c.suppressHydrationWarning===!0||Cv(a.textContent,r)?(c.popover!=null&&(ye("beforetoggle",a),ye("toggle",a)),c.onScroll!=null&&ye("scroll",a),c.onScrollEnd!=null&&ye("scrollend",a),c.onClick!=null&&(a.onclick=Tu),a=!0):a=!1,a||ir(n)}function yg(n){for(ti=n.return;ti;)switch(ti.tag){case 3:case 27:ca=!0;return;case 5:case 13:ca=!1;return;default:ti=ti.return}}function gl(n){if(n!==ti)return!1;if(!De)return yg(n),De=!0,!1;var a=!1,r;if((r=n.tag!==3&&n.tag!==27)&&((r=n.tag===5)&&(r=n.type,r=!(r!=="form"&&r!=="button")||Nd(n.type,n.memoizedProps)),r=!r),r&&(a=!0),a&&Fn&&ir(n),yg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));t:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(r=n.data,r==="/$"){if(a===0){Fn=ia(n.nextSibling);break t}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;n=n.nextSibling}Fn=null}}else Fn=ti?ia(n.stateNode.nextSibling):null;return!0}function _l(){Fn=ti=null,De=!1}function vl(n){ea===null?ea=[n]:ea.push(n)}var xl=Error(i(460)),Mg=Error(i(474)),ph={then:function(){}};function bg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function jc(){}function Eg(n,a,r){switch(r=n[r],r===void 0?n.push(a):r!==a&&(a.then(jc,jc),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===xl?Error(i(483)):n;default:if(typeof a.status=="string")a.then(jc,jc);else{if(n=Ve,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var p=a;p.status="fulfilled",p.value=c}},function(c){if(a.status==="pending"){var p=a;p.status="rejected",p.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===xl?Error(i(483)):n}throw Sl=a,xl}}var Sl=null;function Tg(){if(Sl===null)throw Error(i(459));var n=Sl;return Sl=null,n}var $r=null,yl=0;function Zc(n){var a=yl;return yl+=1,$r===null&&($r=[]),Eg($r,n,a)}function Ml(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function Kc(n,a){throw a.$$typeof===l?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function Ag(n){var a=n._init;return a(n._payload)}function wg(n){function a($,j){if(n){var rt=$.deletions;rt===null?($.deletions=[j],$.flags|=16):rt.push(j)}}function r($,j){if(!n)return null;for(;j!==null;)a($,j),j=j.sibling;return null}function c($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function p($,j){return $=Ms($,j),$.index=0,$.sibling=null,$}function g($,j,rt){return $.index=rt,n?(rt=$.alternate,rt!==null?(rt=rt.index,rt<j?($.flags|=33554434,j):rt):($.flags|=33554434,j)):($.flags|=1048576,j)}function T($){return n&&$.alternate===null&&($.flags|=33554434),$}function P($,j,rt,gt){return j===null||j.tag!==6?(j=ld(rt,$.mode,gt),j.return=$,j):(j=p(j,rt),j.return=$,j)}function B($,j,rt,gt){var kt=rt.type;return kt===d?mt($,j,rt.props.children,gt,rt.key):j!==null&&(j.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===E&&Ag(kt)===j.type)?(j=p(j,rt.props),Ml(j,rt),j.return=$,j):(j=pu(rt.type,rt.key,rt.props,null,$.mode,gt),Ml(j,rt),j.return=$,j)}function K($,j,rt,gt){return j===null||j.tag!==4||j.stateNode.containerInfo!==rt.containerInfo||j.stateNode.implementation!==rt.implementation?(j=cd(rt,$.mode,gt),j.return=$,j):(j=p(j,rt.children||[]),j.return=$,j)}function mt($,j,rt,gt,kt){return j===null||j.tag!==7?(j=dr(rt,$.mode,gt,kt),j.return=$,j):(j=p(j,rt),j.return=$,j)}function St($,j,rt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ld(""+j,$.mode,rt),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case u:return rt=pu(j.type,j.key,j.props,null,$.mode,rt),Ml(rt,j),rt.return=$,rt;case f:return j=cd(j,$.mode,rt),j.return=$,j;case E:var gt=j._init;return j=gt(j._payload),St($,j,rt)}if(bt(j)||N(j))return j=dr(j,$.mode,rt,null),j.return=$,j;if(typeof j.then=="function")return St($,Zc(j),rt);if(j.$$typeof===x)return St($,fu($,j),rt);Kc($,j)}return null}function ot($,j,rt,gt){var kt=j!==null?j.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return kt!==null?null:P($,j,""+rt,gt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case u:return rt.key===kt?B($,j,rt,gt):null;case f:return rt.key===kt?K($,j,rt,gt):null;case E:return kt=rt._init,rt=kt(rt._payload),ot($,j,rt,gt)}if(bt(rt)||N(rt))return kt!==null?null:mt($,j,rt,gt,null);if(typeof rt.then=="function")return ot($,j,Zc(rt),gt);if(rt.$$typeof===x)return ot($,j,fu($,rt),gt);Kc($,rt)}return null}function dt($,j,rt,gt,kt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return $=$.get(rt)||null,P(j,$,""+gt,kt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case u:return $=$.get(gt.key===null?rt:gt.key)||null,B(j,$,gt,kt);case f:return $=$.get(gt.key===null?rt:gt.key)||null,K(j,$,gt,kt);case E:var _e=gt._init;return gt=_e(gt._payload),dt($,j,rt,gt,kt)}if(bt(gt)||N(gt))return $=$.get(rt)||null,mt(j,$,gt,kt,null);if(typeof gt.then=="function")return dt($,j,rt,Zc(gt),kt);if(gt.$$typeof===x)return dt($,j,rt,fu(j,gt),kt);Kc(j,gt)}return null}function Kt($,j,rt,gt){for(var kt=null,_e=null,$t=j,ee=j=0,Dn=null;$t!==null&&ee<rt.length;ee++){$t.index>ee?(Dn=$t,$t=null):Dn=$t.sibling;var Ue=ot($,$t,rt[ee],gt);if(Ue===null){$t===null&&($t=Dn);break}n&&$t&&Ue.alternate===null&&a($,$t),j=g(Ue,j,ee),_e===null?kt=Ue:_e.sibling=Ue,_e=Ue,$t=Dn}if(ee===rt.length)return r($,$t),De&&nr($,ee),kt;if($t===null){for(;ee<rt.length;ee++)$t=St($,rt[ee],gt),$t!==null&&(j=g($t,j,ee),_e===null?kt=$t:_e.sibling=$t,_e=$t);return De&&nr($,ee),kt}for($t=c($t);ee<rt.length;ee++)Dn=dt($t,$,ee,rt[ee],gt),Dn!==null&&(n&&Dn.alternate!==null&&$t.delete(Dn.key===null?ee:Dn.key),j=g(Dn,j,ee),_e===null?kt=Dn:_e.sibling=Dn,_e=Dn);return n&&$t.forEach(function(Cs){return a($,Cs)}),De&&nr($,ee),kt}function le($,j,rt,gt){if(rt==null)throw Error(i(151));for(var kt=null,_e=null,$t=j,ee=j=0,Dn=null,Ue=rt.next();$t!==null&&!Ue.done;ee++,Ue=rt.next()){$t.index>ee?(Dn=$t,$t=null):Dn=$t.sibling;var Cs=ot($,$t,Ue.value,gt);if(Cs===null){$t===null&&($t=Dn);break}n&&$t&&Cs.alternate===null&&a($,$t),j=g(Cs,j,ee),_e===null?kt=Cs:_e.sibling=Cs,_e=Cs,$t=Dn}if(Ue.done)return r($,$t),De&&nr($,ee),kt;if($t===null){for(;!Ue.done;ee++,Ue=rt.next())Ue=St($,Ue.value,gt),Ue!==null&&(j=g(Ue,j,ee),_e===null?kt=Ue:_e.sibling=Ue,_e=Ue);return De&&nr($,ee),kt}for($t=c($t);!Ue.done;ee++,Ue=rt.next())Ue=dt($t,$,ee,Ue.value,gt),Ue!==null&&(n&&Ue.alternate!==null&&$t.delete(Ue.key===null?ee:Ue.key),j=g(Ue,j,ee),_e===null?kt=Ue:_e.sibling=Ue,_e=Ue);return n&&$t.forEach(function(_b){return a($,_b)}),De&&nr($,ee),kt}function ln($,j,rt,gt){if(typeof rt=="object"&&rt!==null&&rt.type===d&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case u:t:{for(var kt=rt.key;j!==null;){if(j.key===kt){if(kt=rt.type,kt===d){if(j.tag===7){r($,j.sibling),gt=p(j,rt.props.children),gt.return=$,$=gt;break t}}else if(j.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===E&&Ag(kt)===j.type){r($,j.sibling),gt=p(j,rt.props),Ml(gt,rt),gt.return=$,$=gt;break t}r($,j);break}else a($,j);j=j.sibling}rt.type===d?(gt=dr(rt.props.children,$.mode,gt,rt.key),gt.return=$,$=gt):(gt=pu(rt.type,rt.key,rt.props,null,$.mode,gt),Ml(gt,rt),gt.return=$,$=gt)}return T($);case f:t:{for(kt=rt.key;j!==null;){if(j.key===kt)if(j.tag===4&&j.stateNode.containerInfo===rt.containerInfo&&j.stateNode.implementation===rt.implementation){r($,j.sibling),gt=p(j,rt.children||[]),gt.return=$,$=gt;break t}else{r($,j);break}else a($,j);j=j.sibling}gt=cd(rt,$.mode,gt),gt.return=$,$=gt}return T($);case E:return kt=rt._init,rt=kt(rt._payload),ln($,j,rt,gt)}if(bt(rt))return Kt($,j,rt,gt);if(N(rt)){if(kt=N(rt),typeof kt!="function")throw Error(i(150));return rt=kt.call(rt),le($,j,rt,gt)}if(typeof rt.then=="function")return ln($,j,Zc(rt),gt);if(rt.$$typeof===x)return ln($,j,fu($,rt),gt);Kc($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,j!==null&&j.tag===6?(r($,j.sibling),gt=p(j,rt),gt.return=$,$=gt):(r($,j),gt=ld(rt,$.mode,gt),gt.return=$,$=gt),T($)):r($,j)}return function($,j,rt,gt){try{yl=0;var kt=ln($,j,rt,gt);return $r=null,kt}catch($t){if($t===xl)throw $t;var _e=Vi(29,$t,null,$.mode);return _e.lanes=gt,_e.return=$,_e}finally{}}}var ar=wg(!0),Rg=wg(!1),to=_t(null),Qc=_t(0);function Cg(n,a){n=Xa,Pt(Qc,n),Pt(to,a),Xa=n|a.baseLanes}function mh(){Pt(Qc,Xa),Pt(to,to.current)}function gh(){Xa=Qc.current,Yt(to),Yt(Qc)}var Bi=_t(null),ua=null;function fs(n){var a=n.alternate;Pt(bn,bn.current&1),Pt(Bi,n),ua===null&&(a===null||to.current!==null||a.memoizedState!==null)&&(ua=n)}function Dg(n){if(n.tag===22){if(Pt(bn,bn.current),Pt(Bi,n),ua===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(ua=n)}}else hs()}function hs(){Pt(bn,bn.current),Pt(Bi,Bi.current)}function Pa(n){Yt(Bi),ua===n&&(ua=null),Yt(bn)}var bn=_t(0);function Jc(n){for(var a=n;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var a1=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(r,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(r){return r()})}},s1=o.unstable_scheduleCallback,r1=o.unstable_NormalPriority,En={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _h(){return{controller:new a1,data:new Map,refCount:0}}function bl(n){n.refCount--,n.refCount===0&&s1(r1,function(){n.controller.abort()})}var El=null,vh=0,eo=0,no=null;function o1(n,a){if(El===null){var r=El=[];vh=0,eo=Ed(),no={status:"pending",value:void 0,then:function(c){r.push(c)}}}return vh++,a.then(Ug,Ug),a}function Ug(){if(--vh===0&&El!==null){no!==null&&(no.status="fulfilled");var n=El;El=null,eo=0,no=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function l1(n,a){var r=[],c={status:"pending",value:null,reason:null,then:function(p){r.push(p)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var p=0;p<r.length;p++)(0,r[p])(a)},function(p){for(c.status="rejected",c.reason=p,p=0;p<r.length;p++)(0,r[p])(void 0)}),c}var Lg=w.S;w.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&o1(n,a),Lg!==null&&Lg(n,a)};var sr=_t(null);function xh(){var n=sr.current;return n!==null?n:Ve.pooledCache}function $c(n,a){a===null?Pt(sr,sr.current):Pt(sr,a.pool)}function Ng(){var n=xh();return n===null?null:{parent:En._currentValue,pool:n}}var ds=0,ge=null,Ie=null,mn=null,tu=!1,io=!1,rr=!1,eu=0,Tl=0,ao=null,c1=0;function fn(){throw Error(i(321))}function Sh(n,a){if(a===null)return!1;for(var r=0;r<a.length&&r<n.length;r++)if(!xi(n[r],a[r]))return!1;return!0}function yh(n,a,r,c,p,g){return ds=g,ge=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,w.H=n===null||n.memoizedState===null?or:ps,rr=!1,g=r(c,p),rr=!1,io&&(g=Og(a,r,c,p)),Pg(n),g}function Pg(n){w.H=fa;var a=Ie!==null&&Ie.next!==null;if(ds=0,mn=Ie=ge=null,tu=!1,Tl=0,ao=null,a)throw Error(i(300));n===null||Rn||(n=n.dependencies,n!==null&&uu(n)&&(Rn=!0))}function Og(n,a,r,c){ge=n;var p=0;do{if(io&&(ao=null),Tl=0,io=!1,25<=p)throw Error(i(301));if(p+=1,mn=Ie=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}w.H=lr,g=a(r,c)}while(io);return g}function u1(){var n=w.H,a=n.useState()[0];return a=typeof a.then=="function"?Al(a):a,n=n.useState()[0],(Ie!==null?Ie.memoizedState:null)!==n&&(ge.flags|=1024),a}function Mh(){var n=eu!==0;return eu=0,n}function bh(n,a,r){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~r}function Eh(n){if(tu){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}tu=!1}ds=0,mn=Ie=ge=null,io=!1,Tl=eu=0,ao=null}function ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ge.memoizedState=mn=n:mn=mn.next=n,mn}function gn(){if(Ie===null){var n=ge.alternate;n=n!==null?n.memoizedState:null}else n=Ie.next;var a=mn===null?ge.memoizedState:mn.next;if(a!==null)mn=a,Ie=n;else{if(n===null)throw ge.alternate===null?Error(i(467)):Error(i(310));Ie=n,n={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},mn===null?ge.memoizedState=mn=n:mn=mn.next=n}return mn}var nu;nu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Al(n){var a=Tl;return Tl+=1,ao===null&&(ao=[]),n=Eg(ao,n,a),a=ge,(mn===null?a.memoizedState:mn.next)===null&&(a=a.alternate,w.H=a===null||a.memoizedState===null?or:ps),n}function iu(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Al(n);if(n.$$typeof===x)return kn(n)}throw Error(i(438,String(n)))}function Th(n){var a=null,r=ge.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var c=ge.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(p){return p.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=nu(),ge.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(n),c=0;c<n;c++)r[c]=C;return a.index++,r}function Oa(n,a){return typeof a=="function"?a(n):a}function au(n){var a=gn();return Ah(a,Ie,n)}function Ah(n,a,r){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=r;var p=n.baseQueue,g=c.pending;if(g!==null){if(p!==null){var T=p.next;p.next=g.next,g.next=T}a.baseQueue=p=g,c.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{a=p.next;var P=T=null,B=null,K=a,mt=!1;do{var St=K.lane&-536870913;if(St!==K.lane?(Te&St)===St:(ds&St)===St){var ot=K.revertLane;if(ot===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),St===eo&&(mt=!0);else if((ds&ot)===ot){K=K.next,ot===eo&&(mt=!0);continue}else St={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(P=B=St,T=g):B=B.next=St,ge.lanes|=ot,bs|=ot;St=K.action,rr&&r(g,St),g=K.hasEagerState?K.eagerState:r(g,St)}else ot={lane:St,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(P=B=ot,T=g):B=B.next=ot,ge.lanes|=St,bs|=St;K=K.next}while(K!==null&&K!==a);if(B===null?T=g:B.next=P,!xi(g,n.memoizedState)&&(Rn=!0,mt&&(r=no,r!==null)))throw r;n.memoizedState=g,n.baseState=T,n.baseQueue=B,c.lastRenderedState=g}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function wh(n){var a=gn(),r=a.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var c=r.dispatch,p=r.pending,g=a.memoizedState;if(p!==null){r.pending=null;var T=p=p.next;do g=n(g,T.action),T=T.next;while(T!==p);xi(g,a.memoizedState)||(Rn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),r.lastRenderedState=g}return[g,c]}function Fg(n,a,r){var c=ge,p=gn(),g=De;if(g){if(r===void 0)throw Error(i(407));r=r()}else r=a();var T=!xi((Ie||p).memoizedState,r);if(T&&(p.memoizedState=r,Rn=!0),p=p.queue,Dh(Bg.bind(null,c,p,n),[n]),p.getSnapshot!==a||T||mn!==null&&mn.memoizedState.tag&1){if(c.flags|=2048,so(9,zg.bind(null,c,p,r,a),{destroy:void 0},null),Ve===null)throw Error(i(349));g||(ds&60)!==0||Ig(c,a,r)}return r}function Ig(n,a,r){n.flags|=16384,n={getSnapshot:a,value:r},a=ge.updateQueue,a===null?(a=nu(),ge.updateQueue=a,a.stores=[n]):(r=a.stores,r===null?a.stores=[n]:r.push(n))}function zg(n,a,r,c){a.value=r,a.getSnapshot=c,Gg(a)&&Hg(n)}function Bg(n,a,r){return r(function(){Gg(a)&&Hg(n)})}function Gg(n){var a=n.getSnapshot;n=n.value;try{var r=a();return!xi(n,r)}catch{return!0}}function Hg(n){var a=us(n,2);a!==null&&ei(a,n,2)}function Rh(n){var a=ri();if(typeof n=="function"){var r=n;if(n=r(),rr){zt(!0);try{r()}finally{zt(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:n},a}function Vg(n,a,r,c){return n.baseState=r,Ah(n,Ie,typeof c=="function"?c:Oa)}function f1(n,a,r,c,p){if(ou(n))throw Error(i(485));if(n=a.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};w.T!==null?r(!0):g.isTransition=!1,c(g),r=a.pending,r===null?(g.next=a.pending=g,kg(a,g)):(g.next=r.next,a.pending=r.next=g)}}function kg(n,a){var r=a.action,c=a.payload,p=n.state;if(a.isTransition){var g=w.T,T={};w.T=T;try{var P=r(p,c),B=w.S;B!==null&&B(T,P),Xg(n,a,P)}catch(K){Ch(n,a,K)}finally{w.T=g}}else try{g=r(p,c),Xg(n,a,g)}catch(K){Ch(n,a,K)}}function Xg(n,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(c){Wg(n,a,c)},function(c){return Ch(n,a,c)}):Wg(n,a,r)}function Wg(n,a,r){a.status="fulfilled",a.value=r,qg(a),n.state=r,a=n.pending,a!==null&&(r=a.next,r===a?n.pending=null:(r=r.next,a.next=r,kg(n,r)))}function Ch(n,a,r){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=r,qg(a),a=a.next;while(a!==c)}n.action=null}function qg(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Yg(n,a){return a}function jg(n,a){if(De){var r=Ve.formState;if(r!==null){t:{var c=ge;if(De){if(Fn){e:{for(var p=Fn,g=ca;p.nodeType!==8;){if(!g){p=null;break e}if(p=ia(p.nextSibling),p===null){p=null;break e}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){Fn=ia(p.nextSibling),c=p.data==="F!";break t}}ir(c)}c=!1}c&&(a=r[0])}}return r=ri(),r.memoizedState=r.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yg,lastRenderedState:a},r.queue=c,r=h_.bind(null,ge,c),c.dispatch=r,c=Rh(!1),g=Oh.bind(null,ge,!1,c.queue),c=ri(),p={state:a,dispatch:null,action:n,pending:null},c.queue=p,r=f1.bind(null,ge,p,g,r),p.dispatch=r,c.memoizedState=n,[a,r,!1]}function Zg(n){var a=gn();return Kg(a,Ie,n)}function Kg(n,a,r){a=Ah(n,a,Yg)[0],n=au(Oa)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Al(a):a;var c=gn(),p=c.queue,g=p.dispatch;return r!==c.memoizedState&&(ge.flags|=2048,so(9,h1.bind(null,p,r),{destroy:void 0},null)),[a,g,n]}function h1(n,a){n.action=a}function Qg(n){var a=gn(),r=Ie;if(r!==null)return Kg(a,r,n);gn(),a=a.memoizedState,r=gn();var c=r.queue.dispatch;return r.memoizedState=n,[a,c,!1]}function so(n,a,r,c){return n={tag:n,create:a,inst:r,deps:c,next:null},a=ge.updateQueue,a===null&&(a=nu(),ge.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=n.next=n:(c=r.next,r.next=n,n.next=c,a.lastEffect=n),n}function Jg(){return gn().memoizedState}function su(n,a,r,c){var p=ri();ge.flags|=n,p.memoizedState=so(1|a,r,{destroy:void 0},c===void 0?null:c)}function ru(n,a,r,c){var p=gn();c=c===void 0?null:c;var g=p.memoizedState.inst;Ie!==null&&c!==null&&Sh(c,Ie.memoizedState.deps)?p.memoizedState=so(a,r,g,c):(ge.flags|=n,p.memoizedState=so(1|a,r,g,c))}function $g(n,a){su(8390656,8,n,a)}function Dh(n,a){ru(2048,8,n,a)}function t_(n,a){return ru(4,2,n,a)}function e_(n,a){return ru(4,4,n,a)}function n_(n,a){if(typeof a=="function"){n=n();var r=a(n);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function i_(n,a,r){r=r!=null?r.concat([n]):null,ru(4,4,n_.bind(null,a,n),r)}function Uh(){}function a_(n,a){var r=gn();a=a===void 0?null:a;var c=r.memoizedState;return a!==null&&Sh(a,c[1])?c[0]:(r.memoizedState=[n,a],n)}function s_(n,a){var r=gn();a=a===void 0?null:a;var c=r.memoizedState;if(a!==null&&Sh(a,c[1]))return c[0];if(c=n(),rr){zt(!0);try{n()}finally{zt(!1)}}return r.memoizedState=[c,a],c}function Lh(n,a,r){return r===void 0||(ds&1073741824)!==0?n.memoizedState=a:(n.memoizedState=r,n=ov(),ge.lanes|=n,bs|=n,r)}function r_(n,a,r,c){return xi(r,a)?r:to.current!==null?(n=Lh(n,r,c),xi(n,a)||(Rn=!0),n):(ds&42)===0?(Rn=!0,n.memoizedState=r):(n=ov(),ge.lanes|=n,bs|=n,a)}function o_(n,a,r,c,p){var g=vt.p;vt.p=g!==0&&8>g?g:8;var T=w.T,P={};w.T=P,Oh(n,!1,a,r);try{var B=p(),K=w.S;if(K!==null&&K(P,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var mt=l1(B,c);wl(n,a,mt,bi(n))}else wl(n,a,c,bi(n))}catch(St){wl(n,a,{then:function(){},status:"rejected",reason:St},bi())}finally{vt.p=g,w.T=T}}function d1(){}function Nh(n,a,r,c){if(n.tag!==5)throw Error(i(476));var p=l_(n).queue;o_(n,p,a,Ot,r===null?d1:function(){return c_(n),r(c)})}function l_(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:Ot,baseState:Ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:Ot},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:r},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function c_(n){var a=l_(n).next.queue;wl(n,a,{},bi())}function Ph(){return kn(Yl)}function u_(){return gn().memoizedState}function f_(){return gn().memoizedState}function p1(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var r=bi();n=_s(r);var c=vs(a,n,r);c!==null&&(ei(c,a,r),Dl(c,a,r)),a={cache:_h()},n.payload=a;return}a=a.return}}function m1(n,a,r){var c=bi();r={lane:c,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},ou(n)?d_(a,r):(r=uh(n,a,r,c),r!==null&&(ei(r,n,c),p_(r,a,c)))}function h_(n,a,r){var c=bi();wl(n,a,r,c)}function wl(n,a,r,c){var p={lane:c,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(ou(n))d_(a,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var T=a.lastRenderedState,P=g(T,r);if(p.hasEagerState=!0,p.eagerState=P,xi(P,T))return Xc(n,a,p,0),Ve===null&&kc(),!1}catch{}finally{}if(r=uh(n,a,p,c),r!==null)return ei(r,n,c),p_(r,a,c),!0}return!1}function Oh(n,a,r,c){if(c={lane:2,revertLane:Ed(),action:c,hasEagerState:!1,eagerState:null,next:null},ou(n)){if(a)throw Error(i(479))}else a=uh(n,r,c,2),a!==null&&ei(a,n,2)}function ou(n){var a=n.alternate;return n===ge||a!==null&&a===ge}function d_(n,a){io=tu=!0;var r=n.pending;r===null?a.next=a:(a.next=r.next,r.next=a),n.pending=a}function p_(n,a,r){if((r&4194176)!==0){var c=a.lanes;c&=n.pendingLanes,r|=c,a.lanes=r,Pc(n,r)}}var fa={readContext:kn,use:iu,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn};fa.useCacheRefresh=fn,fa.useMemoCache=fn,fa.useHostTransitionStatus=fn,fa.useFormState=fn,fa.useActionState=fn,fa.useOptimistic=fn;var or={readContext:kn,use:iu,useCallback:function(n,a){return ri().memoizedState=[n,a===void 0?null:a],n},useContext:kn,useEffect:$g,useImperativeHandle:function(n,a,r){r=r!=null?r.concat([n]):null,su(4194308,4,n_.bind(null,a,n),r)},useLayoutEffect:function(n,a){return su(4194308,4,n,a)},useInsertionEffect:function(n,a){su(4,2,n,a)},useMemo:function(n,a){var r=ri();a=a===void 0?null:a;var c=n();if(rr){zt(!0);try{n()}finally{zt(!1)}}return r.memoizedState=[c,a],c},useReducer:function(n,a,r){var c=ri();if(r!==void 0){var p=r(a);if(rr){zt(!0);try{r(a)}finally{zt(!1)}}}else p=a;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=m1.bind(null,ge,n),[c.memoizedState,n]},useRef:function(n){var a=ri();return n={current:n},a.memoizedState=n},useState:function(n){n=Rh(n);var a=n.queue,r=h_.bind(null,ge,a);return a.dispatch=r,[n.memoizedState,r]},useDebugValue:Uh,useDeferredValue:function(n,a){var r=ri();return Lh(r,n,a)},useTransition:function(){var n=Rh(!1);return n=o_.bind(null,ge,n.queue,!0,!1),ri().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,r){var c=ge,p=ri();if(De){if(r===void 0)throw Error(i(407));r=r()}else{if(r=a(),Ve===null)throw Error(i(349));(Te&60)!==0||Ig(c,a,r)}p.memoizedState=r;var g={value:r,getSnapshot:a};return p.queue=g,$g(Bg.bind(null,c,g,n),[n]),c.flags|=2048,so(9,zg.bind(null,c,g,r,a),{destroy:void 0},null),r},useId:function(){var n=ri(),a=Ve.identifierPrefix;if(De){var r=Na,c=La;r=(c&~(1<<32-Dt(c)-1)).toString(32)+r,a=":"+a+"R"+r,r=eu++,0<r&&(a+="H"+r.toString(32)),a+=":"}else r=c1++,a=":"+a+"r"+r.toString(32)+":";return n.memoizedState=a},useCacheRefresh:function(){return ri().memoizedState=p1.bind(null,ge)}};or.useMemoCache=Th,or.useHostTransitionStatus=Ph,or.useFormState=jg,or.useActionState=jg,or.useOptimistic=function(n){var a=ri();a.memoizedState=a.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Oh.bind(null,ge,!0,r),r.dispatch=a,[n,a]};var ps={readContext:kn,use:iu,useCallback:a_,useContext:kn,useEffect:Dh,useImperativeHandle:i_,useInsertionEffect:t_,useLayoutEffect:e_,useMemo:s_,useReducer:au,useRef:Jg,useState:function(){return au(Oa)},useDebugValue:Uh,useDeferredValue:function(n,a){var r=gn();return r_(r,Ie.memoizedState,n,a)},useTransition:function(){var n=au(Oa)[0],a=gn().memoizedState;return[typeof n=="boolean"?n:Al(n),a]},useSyncExternalStore:Fg,useId:u_};ps.useCacheRefresh=f_,ps.useMemoCache=Th,ps.useHostTransitionStatus=Ph,ps.useFormState=Zg,ps.useActionState=Zg,ps.useOptimistic=function(n,a){var r=gn();return Vg(r,Ie,n,a)};var lr={readContext:kn,use:iu,useCallback:a_,useContext:kn,useEffect:Dh,useImperativeHandle:i_,useInsertionEffect:t_,useLayoutEffect:e_,useMemo:s_,useReducer:wh,useRef:Jg,useState:function(){return wh(Oa)},useDebugValue:Uh,useDeferredValue:function(n,a){var r=gn();return Ie===null?Lh(r,n,a):r_(r,Ie.memoizedState,n,a)},useTransition:function(){var n=wh(Oa)[0],a=gn().memoizedState;return[typeof n=="boolean"?n:Al(n),a]},useSyncExternalStore:Fg,useId:u_};lr.useCacheRefresh=f_,lr.useMemoCache=Th,lr.useHostTransitionStatus=Ph,lr.useFormState=Qg,lr.useActionState=Qg,lr.useOptimistic=function(n,a){var r=gn();return Ie!==null?Vg(r,Ie,n,a):(r.baseState=n,[n,r.queue.dispatch])};function Fh(n,a,r,c){a=n.memoizedState,r=r(c,a),r=r==null?a:k({},a,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var Ih={isMounted:function(n){return(n=n._reactInternals)?it(n)===n:!1},enqueueSetState:function(n,a,r){n=n._reactInternals;var c=bi(),p=_s(c);p.payload=a,r!=null&&(p.callback=r),a=vs(n,p,c),a!==null&&(ei(a,n,c),Dl(a,n,c))},enqueueReplaceState:function(n,a,r){n=n._reactInternals;var c=bi(),p=_s(c);p.tag=1,p.payload=a,r!=null&&(p.callback=r),a=vs(n,p,c),a!==null&&(ei(a,n,c),Dl(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var r=bi(),c=_s(r);c.tag=2,a!=null&&(c.callback=a),a=vs(n,c,r),a!==null&&(ei(a,n,r),Dl(a,n,r))}};function m_(n,a,r,c,p,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):a.prototype&&a.prototype.isPureReactComponent?!pl(r,c)||!pl(p,g):!0}function g_(n,a,r,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,c),a.state!==n&&Ih.enqueueReplaceState(a,a.state,null)}function cr(n,a){var r=a;if("ref"in a){r={};for(var c in a)c!=="ref"&&(r[c]=a[c])}if(n=n.defaultProps){r===a&&(r=k({},r));for(var p in n)r[p]===void 0&&(r[p]=n[p])}return r}var lu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function __(n){lu(n)}function v_(n){console.error(n)}function x_(n){lu(n)}function cu(n,a){try{var r=n.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function S_(n,a,r){try{var c=n.onCaughtError;c(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function zh(n,a,r){return r=_s(r),r.tag=3,r.payload={element:null},r.callback=function(){cu(n,a)},r}function y_(n){return n=_s(n),n.tag=3,n}function M_(n,a,r,c){var p=r.type.getDerivedStateFromError;if(typeof p=="function"){var g=c.value;n.payload=function(){return p(g)},n.callback=function(){S_(a,r,c)}}var T=r.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){S_(a,r,c),typeof p!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var P=c.stack;this.componentDidCatch(c.value,{componentStack:P!==null?P:""})})}function g1(n,a,r,c,p){if(r.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=r.alternate,a!==null&&Cl(a,r,p,!0),r=Bi.current,r!==null){switch(r.tag){case 13:return ua===null?xd():r.alternate===null&&on===0&&(on=3),r.flags&=-257,r.flags|=65536,r.lanes=p,c===ph?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([c]):a.add(c),yd(n,c,p)),!1;case 22:return r.flags|=65536,c===ph?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([c]):r.add(c)),yd(n,c,p)),!1}throw Error(i(435,r.tag))}return yd(n,c,p),xd(),!1}if(De)return a=Bi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=p,c!==dh&&(n=Error(i(422),{cause:c}),vl(Fi(n,r)))):(c!==dh&&(a=Error(i(423),{cause:c}),vl(Fi(a,r))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=Fi(c,r),p=zh(n.stateNode,c,p),$h(n,p),on!==4&&(on=2)),!1;var g=Error(i(520),{cause:c});if(g=Fi(g,r),zl===null?zl=[g]:zl.push(g),on!==4&&(on=2),a===null)return!0;c=Fi(c,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,n=p&-p,r.lanes|=n,n=zh(r.stateNode,c,n),$h(r,n),!1;case 1:if(a=r.type,g=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Es===null||!Es.has(g))))return r.flags|=65536,p&=-p,r.lanes|=p,p=y_(p),M_(p,n,r,c),$h(r,p),!1}r=r.return}while(r!==null);return!1}var b_=Error(i(461)),Rn=!1;function In(n,a,r,c){a.child=n===null?Rg(a,null,r,c):ar(a,n.child,r,c)}function E_(n,a,r,c,p){r=r.render;var g=a.ref;if("ref"in c){var T={};for(var P in c)P!=="ref"&&(T[P]=c[P])}else T=c;return fr(a),c=yh(n,a,r,T,g,p),P=Mh(),n!==null&&!Rn?(bh(n,a,p),Fa(n,a,p)):(De&&P&&fh(a),a.flags|=1,In(n,a,c,p),a.child)}function T_(n,a,r,c,p){if(n===null){var g=r.type;return typeof g=="function"&&!od(g)&&g.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=g,A_(n,a,g,c,p)):(n=pu(r.type,null,c,a,a.mode,p),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!Yh(n,p)){var T=g.memoizedProps;if(r=r.compare,r=r!==null?r:pl,r(T,c)&&n.ref===a.ref)return Fa(n,a,p)}return a.flags|=1,n=Ms(g,c),n.ref=a.ref,n.return=a,a.child=n}function A_(n,a,r,c,p){if(n!==null){var g=n.memoizedProps;if(pl(g,c)&&n.ref===a.ref)if(Rn=!1,a.pendingProps=c=g,Yh(n,p))(n.flags&131072)!==0&&(Rn=!0);else return a.lanes=n.lanes,Fa(n,a,p)}return Bh(n,a,r,c,p)}function w_(n,a,r){var c=a.pendingProps,p=c.children,g=(a.stateNode._pendingVisibility&2)!==0,T=n!==null?n.memoizedState:null;if(Rl(n,a),c.mode==="hidden"||g){if((a.flags&128)!==0){if(c=T!==null?T.baseLanes|r:r,n!==null){for(p=a.child=n.child,g=0;p!==null;)g=g|p.lanes|p.childLanes,p=p.sibling;a.childLanes=g&~c}else a.childLanes=0,a.child=null;return R_(n,a,c,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&$c(a,T!==null?T.cachePool:null),T!==null?Cg(a,T):mh(),Dg(a);else return a.lanes=a.childLanes=536870912,R_(n,a,T!==null?T.baseLanes|r:r,r)}else T!==null?($c(a,T.cachePool),Cg(a,T),hs(),a.memoizedState=null):(n!==null&&$c(a,null),mh(),hs());return In(n,a,p,r),a.child}function R_(n,a,r,c){var p=xh();return p=p===null?null:{parent:En._currentValue,pool:p},a.memoizedState={baseLanes:r,cachePool:p},n!==null&&$c(a,null),mh(),Dg(a),n!==null&&Cl(n,a,c,!0),null}function Rl(n,a){var r=a.ref;if(r===null)n!==null&&n.ref!==null&&(a.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(i(284));(n===null||n.ref!==r)&&(a.flags|=2097664)}}function Bh(n,a,r,c,p){return fr(a),r=yh(n,a,r,c,void 0,p),c=Mh(),n!==null&&!Rn?(bh(n,a,p),Fa(n,a,p)):(De&&c&&fh(a),a.flags|=1,In(n,a,r,p),a.child)}function C_(n,a,r,c,p,g){return fr(a),a.updateQueue=null,r=Og(a,c,r,p),Pg(n),c=Mh(),n!==null&&!Rn?(bh(n,a,g),Fa(n,a,g)):(De&&c&&fh(a),a.flags|=1,In(n,a,r,g),a.child)}function D_(n,a,r,c,p){if(fr(a),a.stateNode===null){var g=Kr,T=r.contextType;typeof T=="object"&&T!==null&&(g=kn(T)),g=new r(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Ih,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},Qh(a),T=r.contextType,g.context=typeof T=="object"&&T!==null?kn(T):Kr,g.state=a.memoizedState,T=r.getDerivedStateFromProps,typeof T=="function"&&(Fh(a,r,T,c),g.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Ih.enqueueReplaceState(g,g.state,null),Ll(a,c,g,p),Ul(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){g=a.stateNode;var P=a.memoizedProps,B=cr(r,P);g.props=B;var K=g.context,mt=r.contextType;T=Kr,typeof mt=="object"&&mt!==null&&(T=kn(mt));var St=r.getDerivedStateFromProps;mt=typeof St=="function"||typeof g.getSnapshotBeforeUpdate=="function",P=a.pendingProps!==P,mt||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(P||K!==T)&&g_(a,g,c,T),gs=!1;var ot=a.memoizedState;g.state=ot,Ll(a,c,g,p),Ul(),K=a.memoizedState,P||ot!==K||gs?(typeof St=="function"&&(Fh(a,r,St,c),K=a.memoizedState),(B=gs||m_(a,r,B,c,ot,K,T))?(mt||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=K),g.props=c,g.state=K,g.context=T,c=B):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,Jh(n,a),T=a.memoizedProps,mt=cr(r,T),g.props=mt,St=a.pendingProps,ot=g.context,K=r.contextType,B=Kr,typeof K=="object"&&K!==null&&(B=kn(K)),P=r.getDerivedStateFromProps,(K=typeof P=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==St||ot!==B)&&g_(a,g,c,B),gs=!1,ot=a.memoizedState,g.state=ot,Ll(a,c,g,p),Ul();var dt=a.memoizedState;T!==St||ot!==dt||gs||n!==null&&n.dependencies!==null&&uu(n.dependencies)?(typeof P=="function"&&(Fh(a,r,P,c),dt=a.memoizedState),(mt=gs||m_(a,r,mt,c,ot,dt,B)||n!==null&&n.dependencies!==null&&uu(n.dependencies))?(K||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,dt,B),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,dt,B)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=dt),g.props=c,g.state=dt,g.context=B,c=mt):(typeof g.componentDidUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),c=!1)}return g=c,Rl(n,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,r=c&&typeof r.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&c?(a.child=ar(a,n.child,null,p),a.child=ar(a,null,r,p)):In(n,a,r,p),a.memoizedState=g.state,n=a.child):n=Fa(n,a,p),n}function U_(n,a,r,c){return _l(),a.flags|=256,In(n,a,r,c),a.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Hh(n){return{baseLanes:n,cachePool:Ng()}}function Vh(n,a,r){return n=n!==null?n.childLanes&~r:0,a&&(n|=ki),n}function L_(n,a,r){var c=a.pendingProps,p=!1,g=(a.flags&128)!==0,T;if((T=g)||(T=n!==null&&n.memoizedState===null?!1:(bn.current&2)!==0),T&&(p=!0,a.flags&=-129),T=(a.flags&32)!==0,a.flags&=-33,n===null){if(De){if(p?fs(a):hs(),De){var P=Fn,B;if(B=P){t:{for(B=P,P=ca;B.nodeType!==8;){if(!P){P=null;break t}if(B=ia(B.nextSibling),B===null){P=null;break t}}P=B}P!==null?(a.memoizedState={dehydrated:P,treeContext:er!==null?{id:La,overflow:Na}:null,retryLane:536870912},B=Vi(18,null,null,0),B.stateNode=P,B.return=a,a.child=B,ti=a,Fn=null,B=!0):B=!1}B||ir(a)}if(P=a.memoizedState,P!==null&&(P=P.dehydrated,P!==null))return P.data==="$!"?a.lanes=16:a.lanes=536870912,null;Pa(a)}return P=c.children,c=c.fallback,p?(hs(),p=a.mode,P=Xh({mode:"hidden",children:P},p),c=dr(c,p,r,null),P.return=a,c.return=a,P.sibling=c,a.child=P,p=a.child,p.memoizedState=Hh(r),p.childLanes=Vh(n,T,r),a.memoizedState=Gh,c):(fs(a),kh(a,P))}if(B=n.memoizedState,B!==null&&(P=B.dehydrated,P!==null)){if(g)a.flags&256?(fs(a),a.flags&=-257,a=Wh(n,a,r)):a.memoizedState!==null?(hs(),a.child=n.child,a.flags|=128,a=null):(hs(),p=c.fallback,P=a.mode,c=Xh({mode:"visible",children:c.children},P),p=dr(p,P,r,null),p.flags|=2,c.return=a,p.return=a,c.sibling=p,a.child=c,ar(a,n.child,null,r),c=a.child,c.memoizedState=Hh(r),c.childLanes=Vh(n,T,r),a.memoizedState=Gh,a=p);else if(fs(a),P.data==="$!"){if(T=P.nextSibling&&P.nextSibling.dataset,T)var K=T.dgst;T=K,c=Error(i(419)),c.stack="",c.digest=T,vl({value:c,source:null,stack:null}),a=Wh(n,a,r)}else if(Rn||Cl(n,a,r,!1),T=(r&n.childLanes)!==0,Rn||T){if(T=Ve,T!==null){if(c=r&-r,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|r))!==0?0:c,c!==0&&c!==B.retryLane)throw B.retryLane=c,us(n,c),ei(T,n,c),b_}P.data==="$?"||xd(),a=Wh(n,a,r)}else P.data==="$?"?(a.flags|=128,a.child=n.child,a=U1.bind(null,n),P._reactRetry=a,a=null):(n=B.treeContext,Fn=ia(P.nextSibling),ti=a,De=!0,ea=null,ca=!1,n!==null&&(Ii[zi++]=La,Ii[zi++]=Na,Ii[zi++]=er,La=n.id,Na=n.overflow,er=a),a=kh(a,c.children),a.flags|=4096);return a}return p?(hs(),p=c.fallback,P=a.mode,B=n.child,K=B.sibling,c=Ms(B,{mode:"hidden",children:c.children}),c.subtreeFlags=B.subtreeFlags&31457280,K!==null?p=Ms(K,p):(p=dr(p,P,r,null),p.flags|=2),p.return=a,c.return=a,c.sibling=p,a.child=c,c=p,p=a.child,P=n.child.memoizedState,P===null?P=Hh(r):(B=P.cachePool,B!==null?(K=En._currentValue,B=B.parent!==K?{parent:K,pool:K}:B):B=Ng(),P={baseLanes:P.baseLanes|r,cachePool:B}),p.memoizedState=P,p.childLanes=Vh(n,T,r),a.memoizedState=Gh,c):(fs(a),r=n.child,n=r.sibling,r=Ms(r,{mode:"visible",children:c.children}),r.return=a,r.sibling=null,n!==null&&(T=a.deletions,T===null?(a.deletions=[n],a.flags|=16):T.push(n)),a.child=r,a.memoizedState=null,r)}function kh(n,a){return a=Xh({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Xh(n,a){return av(n,a,0,null)}function Wh(n,a,r){return ar(a,n.child,null,r),n=kh(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function N_(n,a,r){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Zh(n.return,a,r)}function qh(n,a,r,c,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:r,tailMode:p}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=r,g.tailMode=p)}function P_(n,a,r){var c=a.pendingProps,p=c.revealOrder,g=c.tail;if(In(n,a,c.children,r),c=bn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&N_(n,r,a);else if(n.tag===19)N_(n,r,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(Pt(bn,c),p){case"forwards":for(r=a.child,p=null;r!==null;)n=r.alternate,n!==null&&Jc(n)===null&&(p=r),r=r.sibling;r=p,r===null?(p=a.child,a.child=null):(p=r.sibling,r.sibling=null),qh(a,!1,p,r,g);break;case"backwards":for(r=null,p=a.child,a.child=null;p!==null;){if(n=p.alternate,n!==null&&Jc(n)===null){a.child=p;break}n=p.sibling,p.sibling=r,r=p,p=n}qh(a,!0,r,null,g);break;case"together":qh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Fa(n,a,r){if(n!==null&&(a.dependencies=n.dependencies),bs|=a.lanes,(r&a.childLanes)===0)if(n!==null){if(Cl(n,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,r=Ms(n,n.pendingProps),a.child=r,r.return=a;n.sibling!==null;)n=n.sibling,r=r.sibling=Ms(n,n.pendingProps),r.return=a;r.sibling=null}return a.child}function Yh(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&uu(n)))}function _1(n,a,r){switch(a.tag){case 3:Re(a,a.stateNode.containerInfo),ms(a,En,n.memoizedState.cache),_l();break;case 27:case 5:Xe(a);break;case 4:Re(a,a.stateNode.containerInfo);break;case 10:ms(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(fs(a),a.flags|=128,null):(r&a.child.childLanes)!==0?L_(n,a,r):(fs(a),n=Fa(n,a,r),n!==null?n.sibling:null);fs(a);break;case 19:var p=(n.flags&128)!==0;if(c=(r&a.childLanes)!==0,c||(Cl(n,a,r,!1),c=(r&a.childLanes)!==0),p){if(c)return P_(n,a,r);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Pt(bn,bn.current),c)break;return null;case 22:case 23:return a.lanes=0,w_(n,a,r);case 24:ms(a,En,n.memoizedState.cache)}return Fa(n,a,r)}function O_(n,a,r){if(n!==null)if(n.memoizedProps!==a.pendingProps)Rn=!0;else{if(!Yh(n,r)&&(a.flags&128)===0)return Rn=!1,_1(n,a,r);Rn=(n.flags&131072)!==0}else Rn=!1,De&&(a.flags&1048576)!==0&&xg(a,Yc,a.index);switch(a.lanes=0,a.tag){case 16:t:{n=a.pendingProps;var c=a.elementType,p=c._init;if(c=p(c._payload),a.type=c,typeof c=="function")od(c)?(n=cr(c,n),a.tag=1,a=D_(null,a,c,n,r)):(a.tag=0,a=Bh(null,a,c,n,r));else{if(c!=null){if(p=c.$$typeof,p===M){a.tag=11,a=E_(null,a,c,n,r);break t}else if(p===y){a.tag=14,a=T_(null,a,c,n,r);break t}}throw a=A(c)||c,Error(i(306,a,""))}}return a;case 0:return Bh(n,a,a.type,a.pendingProps,r);case 1:return c=a.type,p=cr(c,a.pendingProps),D_(n,a,c,p,r);case 3:t:{if(Re(a,a.stateNode.containerInfo),n===null)throw Error(i(387));var g=a.pendingProps;p=a.memoizedState,c=p.element,Jh(n,a),Ll(a,g,null,r);var T=a.memoizedState;if(g=T.cache,ms(a,En,g),g!==p.cache&&Kh(a,[En],r,!0),Ul(),g=T.element,p.isDehydrated)if(p={element:g,isDehydrated:!1,cache:T.cache},a.updateQueue.baseState=p,a.memoizedState=p,a.flags&256){a=U_(n,a,g,r);break t}else if(g!==c){c=Fi(Error(i(424)),a),vl(c),a=U_(n,a,g,r);break t}else for(Fn=ia(a.stateNode.containerInfo.firstChild),ti=a,De=!0,ea=null,ca=!0,r=Rg(a,null,g,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_l(),g===c){a=Fa(n,a,r);break t}In(n,a,g,r)}a=a.child}return a;case 26:return Rl(n,a),n===null?(r=zv(a.type,null,a.pendingProps,null))?a.memoizedState=r:De||(r=a.type,n=a.pendingProps,c=Au(ce.current).createElement(r),c[yn]=a,c[On]=n,zn(c,r,n),L(c),a.stateNode=c):a.memoizedState=zv(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Xe(a),n===null&&De&&(c=a.stateNode=Ov(a.type,a.pendingProps,ce.current),ti=a,ca=!0,Fn=ia(c.firstChild)),c=a.pendingProps.children,n!==null||De?In(n,a,c,r):a.child=ar(a,null,c,r),Rl(n,a),a.child;case 5:return n===null&&De&&((p=c=Fn)&&(c=Y1(c,a.type,a.pendingProps,ca),c!==null?(a.stateNode=c,ti=a,Fn=ia(c.firstChild),ca=!1,p=!0):p=!1),p||ir(a)),Xe(a),p=a.type,g=a.pendingProps,T=n!==null?n.memoizedProps:null,c=g.children,Nd(p,g)?c=null:T!==null&&Nd(p,T)&&(a.flags|=32),a.memoizedState!==null&&(p=yh(n,a,u1,null,null,r),Yl._currentValue=p),Rl(n,a),In(n,a,c,r),a.child;case 6:return n===null&&De&&((n=r=Fn)&&(r=j1(r,a.pendingProps,ca),r!==null?(a.stateNode=r,ti=a,Fn=null,n=!0):n=!1),n||ir(a)),null;case 13:return L_(n,a,r);case 4:return Re(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=ar(a,null,c,r):In(n,a,c,r),a.child;case 11:return E_(n,a,a.type,a.pendingProps,r);case 7:return In(n,a,a.pendingProps,r),a.child;case 8:return In(n,a,a.pendingProps.children,r),a.child;case 12:return In(n,a,a.pendingProps.children,r),a.child;case 10:return c=a.pendingProps,ms(a,a.type,c.value),In(n,a,c.children,r),a.child;case 9:return p=a.type._context,c=a.pendingProps.children,fr(a),p=kn(p),c=c(p),a.flags|=1,In(n,a,c,r),a.child;case 14:return T_(n,a,a.type,a.pendingProps,r);case 15:return A_(n,a,a.type,a.pendingProps,r);case 19:return P_(n,a,r);case 22:return w_(n,a,r);case 24:return fr(a),c=kn(En),n===null?(p=xh(),p===null&&(p=Ve,g=_h(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=r),p=g),a.memoizedState={parent:c,cache:p},Qh(a),ms(a,En,p)):((n.lanes&r)!==0&&(Jh(n,a),Ll(a,null,null,r),Ul()),p=n.memoizedState,g=a.memoizedState,p.parent!==c?(p={parent:c,cache:c},a.memoizedState=p,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=p),ms(a,En,c)):(c=g.cache,ms(a,En,c),c!==p.cache&&Kh(a,[En],r,!0))),In(n,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}var jh=_t(null),ur=null,Ia=null;function ms(n,a,r){Pt(jh,a._currentValue),a._currentValue=r}function za(n){n._currentValue=jh.current,Yt(jh)}function Zh(n,a,r){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===r)break;n=n.return}}function Kh(n,a,r,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var T=p.child;g=g.firstContext;t:for(;g!==null;){var P=g;g=p;for(var B=0;B<a.length;B++)if(P.context===a[B]){g.lanes|=r,P=g.alternate,P!==null&&(P.lanes|=r),Zh(g.return,r,n),c||(T=null);break t}g=P.next}}else if(p.tag===18){if(T=p.return,T===null)throw Error(i(341));T.lanes|=r,g=T.alternate,g!==null&&(g.lanes|=r),Zh(T,r,n),T=null}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===n){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}}function Cl(n,a,r,c){n=null;for(var p=a,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var T=p.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var P=p.type;xi(p.pendingProps.value,T.value)||(n!==null?n.push(P):n=[P])}}else if(p===be.current){if(T=p.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(Yl):n=[Yl])}p=p.return}n!==null&&Kh(a,n,r,c),a.flags|=262144}function uu(n){for(n=n.firstContext;n!==null;){if(!xi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function fr(n){ur=n,Ia=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function kn(n){return F_(ur,n)}function fu(n,a){return ur===null&&fr(n),F_(n,a)}function F_(n,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Ia===null){if(n===null)throw Error(i(308));Ia=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Ia=Ia.next=a;return r}var gs=!1;function Qh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jh(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function _s(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function vs(n,a,r){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(tn&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,a=Wc(n),_g(n,null,r),a}return Xc(n,c,a,r),Wc(n)}function Dl(n,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194176)!==0)){var c=a.lanes;c&=n.pendingLanes,r|=c,a.lanes=r,Pc(n,r)}}function $h(n,a){var r=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,r===c)){var p=null,g=null;if(r=r.firstBaseUpdate,r!==null){do{var T={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};g===null?p=g=T:g=g.next=T,r=r.next}while(r!==null);g===null?p=g=a:g=g.next=a}else p=g=a;r={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=a:n.next=a,r.lastBaseUpdate=a}var td=!1;function Ul(){if(td){var n=no;if(n!==null)throw n}}function Ll(n,a,r,c){td=!1;var p=n.updateQueue;gs=!1;var g=p.firstBaseUpdate,T=p.lastBaseUpdate,P=p.shared.pending;if(P!==null){p.shared.pending=null;var B=P,K=B.next;B.next=null,T===null?g=K:T.next=K,T=B;var mt=n.alternate;mt!==null&&(mt=mt.updateQueue,P=mt.lastBaseUpdate,P!==T&&(P===null?mt.firstBaseUpdate=K:P.next=K,mt.lastBaseUpdate=B))}if(g!==null){var St=p.baseState;T=0,mt=K=B=null,P=g;do{var ot=P.lane&-536870913,dt=ot!==P.lane;if(dt?(Te&ot)===ot:(c&ot)===ot){ot!==0&&ot===eo&&(td=!0),mt!==null&&(mt=mt.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});t:{var Kt=n,le=P;ot=a;var ln=r;switch(le.tag){case 1:if(Kt=le.payload,typeof Kt=="function"){St=Kt.call(ln,St,ot);break t}St=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=le.payload,ot=typeof Kt=="function"?Kt.call(ln,St,ot):Kt,ot==null)break t;St=k({},St,ot);break t;case 2:gs=!0}}ot=P.callback,ot!==null&&(n.flags|=64,dt&&(n.flags|=8192),dt=p.callbacks,dt===null?p.callbacks=[ot]:dt.push(ot))}else dt={lane:ot,tag:P.tag,payload:P.payload,callback:P.callback,next:null},mt===null?(K=mt=dt,B=St):mt=mt.next=dt,T|=ot;if(P=P.next,P===null){if(P=p.shared.pending,P===null)break;dt=P,P=dt.next,dt.next=null,p.lastBaseUpdate=dt,p.shared.pending=null}}while(!0);mt===null&&(B=St),p.baseState=B,p.firstBaseUpdate=K,p.lastBaseUpdate=mt,g===null&&(p.shared.lanes=0),bs|=T,n.lanes=T,n.memoizedState=St}}function I_(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function z_(n,a){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)I_(r[n],a)}function Nl(n,a){try{var r=a.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var p=c.next;r=p;do{if((r.tag&n)===n){c=void 0;var g=r.create,T=r.inst;c=g(),T.destroy=c}r=r.next}while(r!==p)}}catch(P){Be(a,a.return,P)}}function xs(n,a,r){try{var c=a.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var g=p.next;c=g;do{if((c.tag&n)===n){var T=c.inst,P=T.destroy;if(P!==void 0){T.destroy=void 0,p=a;var B=r;try{P()}catch(K){Be(p,B,K)}}}c=c.next}while(c!==g)}}catch(K){Be(a,a.return,K)}}function B_(n){var a=n.updateQueue;if(a!==null){var r=n.stateNode;try{z_(a,r)}catch(c){Be(n,n.return,c)}}}function G_(n,a,r){r.props=cr(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(c){Be(n,a,c)}}function hr(n,a){try{var r=n.ref;if(r!==null){var c=n.stateNode;switch(n.tag){case 26:case 27:case 5:var p=c;break;default:p=c}typeof r=="function"?n.refCleanup=r(p):r.current=p}}catch(g){Be(n,a,g)}}function Si(n,a){var r=n.ref,c=n.refCleanup;if(r!==null)if(typeof c=="function")try{c()}catch(p){Be(n,a,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(p){Be(n,a,p)}else r.current=null}function H_(n){var a=n.type,r=n.memoizedProps,c=n.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&c.focus();break t;case"img":r.src?c.src=r.src:r.srcSet&&(c.srcset=r.srcSet)}}catch(p){Be(n,n.return,p)}}function V_(n,a,r){try{var c=n.stateNode;V1(c,n.type,r,a),c[On]=a}catch(p){Be(n,n.return,p)}}function k_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function ed(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||k_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nd(n,a,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?r.nodeType===8?r.parentNode.insertBefore(n,a):r.insertBefore(n,a):(r.nodeType===8?(a=r.parentNode,a.insertBefore(n,r)):(a=r,a.appendChild(n)),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Tu));else if(c!==4&&c!==27&&(n=n.child,n!==null))for(nd(n,a,r),n=n.sibling;n!==null;)nd(n,a,r),n=n.sibling}function hu(n,a,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?r.insertBefore(n,a):r.appendChild(n);else if(c!==4&&c!==27&&(n=n.child,n!==null))for(hu(n,a,r),n=n.sibling;n!==null;)hu(n,a,r),n=n.sibling}var Ba=!1,rn=!1,id=!1,X_=typeof WeakSet=="function"?WeakSet:Set,Cn=null,W_=!1;function v1(n,a){if(n=n.containerInfo,Ud=Lu,n=lg(n),sh(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else t:{r=(r=n.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var T=0,P=-1,B=-1,K=0,mt=0,St=n,ot=null;e:for(;;){for(var dt;St!==r||p!==0&&St.nodeType!==3||(P=T+p),St!==g||c!==0&&St.nodeType!==3||(B=T+c),St.nodeType===3&&(T+=St.nodeValue.length),(dt=St.firstChild)!==null;)ot=St,St=dt;for(;;){if(St===n)break e;if(ot===r&&++K===p&&(P=T),ot===g&&++mt===c&&(B=T),(dt=St.nextSibling)!==null)break;St=ot,ot=St.parentNode}St=dt}r=P===-1||B===-1?null:{start:P,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ld={focusedElem:n,selectionRange:r},Lu=!1,Cn=a;Cn!==null;)if(a=Cn,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Cn=n;else for(;Cn!==null;){switch(a=Cn,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,r=a,p=g.memoizedProps,g=g.memoizedState,c=r.stateNode;try{var Kt=cr(r.type,p,r.elementType===r.type);n=c.getSnapshotBeforeUpdate(Kt,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(le){Be(r,r.return,le)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,r=n.nodeType,r===9)Fd(n);else if(r===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Fd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Cn=n;break}Cn=a.return}return Kt=W_,W_=!1,Kt}function q_(n,a,r){var c=r.flags;switch(r.tag){case 0:case 11:case 15:Ha(n,r),c&4&&Nl(5,r);break;case 1:if(Ha(n,r),c&4)if(n=r.stateNode,a===null)try{n.componentDidMount()}catch(P){Be(r,r.return,P)}else{var p=cr(r.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(p,a,n.__reactInternalSnapshotBeforeUpdate)}catch(P){Be(r,r.return,P)}}c&64&&B_(r),c&512&&hr(r,r.return);break;case 3:if(Ha(n,r),c&64&&(c=r.updateQueue,c!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{z_(c,n)}catch(P){Be(r,r.return,P)}}break;case 26:Ha(n,r),c&512&&hr(r,r.return);break;case 27:case 5:Ha(n,r),a===null&&c&4&&H_(r),c&512&&hr(r,r.return);break;case 12:Ha(n,r);break;case 13:Ha(n,r),c&4&&Z_(n,r);break;case 22:if(p=r.memoizedState!==null||Ba,!p){a=a!==null&&a.memoizedState!==null||rn;var g=Ba,T=rn;Ba=p,(rn=a)&&!T?Ss(n,r,(r.subtreeFlags&8772)!==0):Ha(n,r),Ba=g,rn=T}c&512&&(r.memoizedProps.mode==="manual"?hr(r,r.return):Si(r,r.return));break;default:Ha(n,r)}}function Y_(n){var a=n.alternate;a!==null&&(n.alternate=null,Y_(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&rl(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var _n=null,yi=!1;function Ga(n,a,r){for(r=r.child;r!==null;)j_(n,a,r),r=r.sibling}function j_(n,a,r){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Tt,r)}catch{}switch(r.tag){case 26:rn||Si(r,a),Ga(n,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:rn||Si(r,a);var c=_n,p=yi;for(_n=r.stateNode,Ga(n,a,r),r=r.stateNode,a=r.attributes;a.length;)r.removeAttributeNode(a[0]);rl(r),_n=c,yi=p;break;case 5:rn||Si(r,a);case 6:p=_n;var g=yi;if(_n=null,Ga(n,a,r),_n=p,yi=g,_n!==null)if(yi)try{n=_n,c=r.stateNode,n.nodeType===8?n.parentNode.removeChild(c):n.removeChild(c)}catch(T){Be(r,a,T)}else try{_n.removeChild(r.stateNode)}catch(T){Be(r,a,T)}break;case 18:_n!==null&&(yi?(a=_n,r=r.stateNode,a.nodeType===8?Od(a.parentNode,r):a.nodeType===1&&Od(a,r),Ql(a)):Od(_n,r.stateNode));break;case 4:c=_n,p=yi,_n=r.stateNode.containerInfo,yi=!0,Ga(n,a,r),_n=c,yi=p;break;case 0:case 11:case 14:case 15:rn||xs(2,r,a),rn||xs(4,r,a),Ga(n,a,r);break;case 1:rn||(Si(r,a),c=r.stateNode,typeof c.componentWillUnmount=="function"&&G_(r,a,c)),Ga(n,a,r);break;case 21:Ga(n,a,r);break;case 22:rn||Si(r,a),rn=(c=rn)||r.memoizedState!==null,Ga(n,a,r),rn=c;break;default:Ga(n,a,r)}}function Z_(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ql(n)}catch(r){Be(a,a.return,r)}}function x1(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new X_),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new X_),a;default:throw Error(i(435,n.tag))}}function ad(n,a){var r=x1(n);a.forEach(function(c){var p=L1.bind(null,n,c);r.has(c)||(r.add(c),c.then(p,p))})}function Gi(n,a){var r=a.deletions;if(r!==null)for(var c=0;c<r.length;c++){var p=r[c],g=n,T=a,P=T;t:for(;P!==null;){switch(P.tag){case 27:case 5:_n=P.stateNode,yi=!1;break t;case 3:_n=P.stateNode.containerInfo,yi=!0;break t;case 4:_n=P.stateNode.containerInfo,yi=!0;break t}P=P.return}if(_n===null)throw Error(i(160));j_(g,T,p),_n=null,yi=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)K_(a,n),a=a.sibling}var na=null;function K_(n,a){var r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Gi(a,n),Hi(n),c&4&&(xs(3,n,n.return),Nl(3,n),xs(5,n,n.return));break;case 1:Gi(a,n),Hi(n),c&512&&(rn||r===null||Si(r,r.return)),c&64&&Ba&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?c:r.concat(c))));break;case 26:var p=na;if(Gi(a,n),Hi(n),c&512&&(rn||r===null||Si(r,r.return)),c&4){var g=r!==null?r.memoizedState:null;if(c=n.memoizedState,r===null)if(c===null)if(n.stateNode===null){t:{c=n.type,r=n.memoizedProps,p=p.ownerDocument||p;e:switch(c){case"title":g=p.getElementsByTagName("title")[0],(!g||g[Ks]||g[yn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(c),p.head.insertBefore(g,p.querySelector("head > title"))),zn(g,c,r),g[yn]=n,L(g),c=g;break t;case"link":var T=Hv("link","href",p).get(c+(r.href||""));if(T){for(var P=0;P<T.length;P++)if(g=T[P],g.getAttribute("href")===(r.href==null?null:r.href)&&g.getAttribute("rel")===(r.rel==null?null:r.rel)&&g.getAttribute("title")===(r.title==null?null:r.title)&&g.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){T.splice(P,1);break e}}g=p.createElement(c),zn(g,c,r),p.head.appendChild(g);break;case"meta":if(T=Hv("meta","content",p).get(c+(r.content||""))){for(P=0;P<T.length;P++)if(g=T[P],g.getAttribute("content")===(r.content==null?null:""+r.content)&&g.getAttribute("name")===(r.name==null?null:r.name)&&g.getAttribute("property")===(r.property==null?null:r.property)&&g.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&g.getAttribute("charset")===(r.charSet==null?null:r.charSet)){T.splice(P,1);break e}}g=p.createElement(c),zn(g,c,r),p.head.appendChild(g);break;default:throw Error(i(468,c))}g[yn]=n,L(g),c=g}n.stateNode=c}else Vv(p,n.type,n.stateNode);else n.stateNode=Gv(p,c,n.memoizedProps);else g!==c?(g===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):g.count--,c===null?Vv(p,n.type,n.stateNode):Gv(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&V_(n,n.memoizedProps,r.memoizedProps)}break;case 27:if(c&4&&n.alternate===null){p=n.stateNode,g=n.memoizedProps;try{for(var B=p.firstChild;B;){var K=B.nextSibling,mt=B.nodeName;B[Ks]||mt==="HEAD"||mt==="BODY"||mt==="SCRIPT"||mt==="STYLE"||mt==="LINK"&&B.rel.toLowerCase()==="stylesheet"||p.removeChild(B),B=K}for(var St=n.type,ot=p.attributes;ot.length;)p.removeAttributeNode(ot[0]);zn(p,St,g),p[yn]=n,p[On]=g}catch(Kt){Be(n,n.return,Kt)}}case 5:if(Gi(a,n),Hi(n),c&512&&(rn||r===null||Si(r,r.return)),n.flags&32){p=n.stateNode;try{$n(p,"")}catch(Kt){Be(n,n.return,Kt)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,V_(n,p,r!==null?r.memoizedProps:p)),c&1024&&(id=!0);break;case 6:if(Gi(a,n),Hi(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,r=n.stateNode;try{r.nodeValue=c}catch(Kt){Be(n,n.return,Kt)}}break;case 3:if(Cu=null,p=na,na=wu(a.containerInfo),Gi(a,n),na=p,Hi(n),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Ql(a.containerInfo)}catch(Kt){Be(n,n.return,Kt)}id&&(id=!1,Q_(n));break;case 4:c=na,na=wu(n.stateNode.containerInfo),Gi(a,n),Hi(n),na=c;break;case 12:Gi(a,n),Hi(n);break;case 13:Gi(a,n),Hi(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(dd=R()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,ad(n,c)));break;case 22:if(c&512&&(rn||r===null||Si(r,r.return)),B=n.memoizedState!==null,K=r!==null&&r.memoizedState!==null,mt=Ba,St=rn,Ba=mt||B,rn=St||K,Gi(a,n),rn=St,Ba=mt,Hi(n),a=n.stateNode,a._current=n,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,c&8192&&(a._visibility=B?a._visibility&-2:a._visibility|1,B&&(a=Ba||rn,r===null||K||a||ro(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))t:for(r=null,a=n;;){if(a.tag===5||a.tag===26||a.tag===27){if(r===null){K=r=a;try{if(p=K.stateNode,B)g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=K.stateNode,P=K.memoizedProps.style;var dt=P!=null&&P.hasOwnProperty("display")?P.display:null;T.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(Kt){Be(K,K.return,Kt)}}}else if(a.tag===6){if(r===null){K=a;try{K.stateNode.nodeValue=B?"":K.memoizedProps}catch(Kt){Be(K,K.return,Kt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break t;for(;a.sibling===null;){if(a.return===null||a.return===n)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(r=c.retryQueue,r!==null&&(c.retryQueue=null,ad(n,r))));break;case 19:Gi(a,n),Hi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,ad(n,c)));break;case 21:break;default:Gi(a,n),Hi(n)}}function Hi(n){var a=n.flags;if(a&2){try{if(n.tag!==27){t:{for(var r=n.return;r!==null;){if(k_(r)){var c=r;break t}r=r.return}throw Error(i(160))}switch(c.tag){case 27:var p=c.stateNode,g=ed(n);hu(n,g,p);break;case 5:var T=c.stateNode;c.flags&32&&($n(T,""),c.flags&=-33);var P=ed(n);hu(n,P,T);break;case 3:case 4:var B=c.stateNode.containerInfo,K=ed(n);nd(n,K,B);break;default:throw Error(i(161))}}}catch(mt){Be(n,n.return,mt)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Q_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Q_(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ha(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)q_(n,a.alternate,a),a=a.sibling}function ro(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:xs(4,a,a.return),ro(a);break;case 1:Si(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&G_(a,a.return,r),ro(a);break;case 26:case 27:case 5:Si(a,a.return),ro(a);break;case 22:Si(a,a.return),a.memoizedState===null&&ro(a);break;default:ro(a)}n=n.sibling}}function Ss(n,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,p=n,g=a,T=g.flags;switch(g.tag){case 0:case 11:case 15:Ss(p,g,r),Nl(4,g);break;case 1:if(Ss(p,g,r),c=g,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(K){Be(c,c.return,K)}if(c=g,p=c.updateQueue,p!==null){var P=c.stateNode;try{var B=p.shared.hiddenCallbacks;if(B!==null)for(p.shared.hiddenCallbacks=null,p=0;p<B.length;p++)I_(B[p],P)}catch(K){Be(c,c.return,K)}}r&&T&64&&B_(g),hr(g,g.return);break;case 26:case 27:case 5:Ss(p,g,r),r&&c===null&&T&4&&H_(g),hr(g,g.return);break;case 12:Ss(p,g,r);break;case 13:Ss(p,g,r),r&&T&4&&Z_(p,g);break;case 22:g.memoizedState===null&&Ss(p,g,r),hr(g,g.return);break;default:Ss(p,g,r)}a=a.sibling}}function sd(n,a){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&bl(r))}function rd(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&bl(n))}function ys(n,a,r,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)J_(n,a,r,c),a=a.sibling}function J_(n,a,r,c){var p=a.flags;switch(a.tag){case 0:case 11:case 15:ys(n,a,r,c),p&2048&&Nl(9,a);break;case 3:ys(n,a,r,c),p&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&bl(n)));break;case 12:if(p&2048){ys(n,a,r,c),n=a.stateNode;try{var g=a.memoizedProps,T=g.id,P=g.onPostCommit;typeof P=="function"&&P(T,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(B){Be(a,a.return,B)}}else ys(n,a,r,c);break;case 23:break;case 22:g=a.stateNode,a.memoizedState!==null?g._visibility&4?ys(n,a,r,c):Pl(n,a):g._visibility&4?ys(n,a,r,c):(g._visibility|=4,oo(n,a,r,c,(a.subtreeFlags&10256)!==0)),p&2048&&sd(a.alternate,a);break;case 24:ys(n,a,r,c),p&2048&&rd(a.alternate,a);break;default:ys(n,a,r,c)}}function oo(n,a,r,c,p){for(p=p&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,T=a,P=r,B=c,K=T.flags;switch(T.tag){case 0:case 11:case 15:oo(g,T,P,B,p),Nl(8,T);break;case 23:break;case 22:var mt=T.stateNode;T.memoizedState!==null?mt._visibility&4?oo(g,T,P,B,p):Pl(g,T):(mt._visibility|=4,oo(g,T,P,B,p)),p&&K&2048&&sd(T.alternate,T);break;case 24:oo(g,T,P,B,p),p&&K&2048&&rd(T.alternate,T);break;default:oo(g,T,P,B,p)}a=a.sibling}}function Pl(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=n,c=a,p=c.flags;switch(c.tag){case 22:Pl(r,c),p&2048&&sd(c.alternate,c);break;case 24:Pl(r,c),p&2048&&rd(c.alternate,c);break;default:Pl(r,c)}a=a.sibling}}var Ol=8192;function lo(n){if(n.subtreeFlags&Ol)for(n=n.child;n!==null;)$_(n),n=n.sibling}function $_(n){switch(n.tag){case 26:lo(n),n.flags&Ol&&n.memoizedState!==null&&ob(na,n.memoizedState,n.memoizedProps);break;case 5:lo(n);break;case 3:case 4:var a=na;na=wu(n.stateNode.containerInfo),lo(n),na=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Ol,Ol=16777216,lo(n),Ol=a):lo(n));break;default:lo(n)}}function tv(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Fl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];Cn=c,nv(c,n)}tv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ev(n),n=n.sibling}function ev(n){switch(n.tag){case 0:case 11:case 15:Fl(n),n.flags&2048&&xs(9,n,n.return);break;case 3:Fl(n);break;case 12:Fl(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&4&&(n.return===null||n.return.tag!==13)?(a._visibility&=-5,du(n)):Fl(n);break;default:Fl(n)}}function du(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];Cn=c,nv(c,n)}tv(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:xs(8,a,a.return),du(a);break;case 22:r=a.stateNode,r._visibility&4&&(r._visibility&=-5,du(a));break;default:du(a)}n=n.sibling}}function nv(n,a){for(;Cn!==null;){var r=Cn;switch(r.tag){case 0:case 11:case 15:xs(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var c=r.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:bl(r.memoizedState.cache)}if(c=r.child,c!==null)c.return=r,Cn=c;else t:for(r=n;Cn!==null;){c=Cn;var p=c.sibling,g=c.return;if(Y_(c),c===r){Cn=null;break t}if(p!==null){p.return=g,Cn=p;break t}Cn=g}}}function S1(n,a,r,c){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vi(n,a,r,c){return new S1(n,a,r,c)}function od(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ms(n,a){var r=n.alternate;return r===null?(r=Vi(n.tag,a,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=a,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&31457280,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,a=n.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function iv(n,a){n.flags&=31457282;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,a=r.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function pu(n,a,r,c,p,g){var T=0;if(c=n,typeof n=="function")od(n)&&(T=1);else if(typeof n=="string")T=sb(n,r,Qt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case d:return dr(r.children,p,g,a);case h:T=8,p|=24;break;case m:return n=Vi(12,r,a,p|2),n.elementType=m,n.lanes=g,n;case b:return n=Vi(13,r,a,p),n.elementType=b,n.lanes=g,n;case S:return n=Vi(19,r,a,p),n.elementType=S,n.lanes=g,n;case D:return av(r,p,g,a);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case v:case x:T=10;break t;case _:T=9;break t;case M:T=11;break t;case y:T=14;break t;case E:T=16,c=null;break t}T=29,r=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=Vi(T,r,a,p),a.elementType=n,a.type=c,a.lanes=g,a}function dr(n,a,r,c){return n=Vi(7,n,c,a),n.lanes=r,n}function av(n,a,r,c){n=Vi(22,n,c,a),n.elementType=D,n.lanes=r;var p={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=p._current;if(g===null)throw Error(i(456));if((p._pendingVisibility&2)===0){var T=us(g,2);T!==null&&(p._pendingVisibility|=2,ei(T,g,2))}},attach:function(){var g=p._current;if(g===null)throw Error(i(456));if((p._pendingVisibility&2)!==0){var T=us(g,2);T!==null&&(p._pendingVisibility&=-3,ei(T,g,2))}}};return n.stateNode=p,n}function ld(n,a,r){return n=Vi(6,n,null,a),n.lanes=r,n}function cd(n,a,r){return a=Vi(4,n.children!==null?n.children:[],n.key,a),a.lanes=r,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}function Va(n){n.flags|=4}function sv(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!kv(a)){if(a=Bi.current,a!==null&&((Te&4194176)===Te?ua!==null:(Te&62914560)!==Te&&(Te&536870912)===0||a!==ua))throw Sl=ph,Mg;n.flags|=8192}}function mu(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Ce():536870912,n.lanes|=a,uo|=a)}function Il(n,a){if(!De)switch(n.tailMode){case"hidden":a=n.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $e(n){var a=n.alternate!==null&&n.alternate.child===n.child,r=0,c=0;if(a)for(var p=n.child;p!==null;)r|=p.lanes|p.childLanes,c|=p.subtreeFlags&31457280,c|=p.flags&31457280,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)r|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=r,a}function y1(n,a,r){var c=a.pendingProps;switch(hh(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(a),null;case 1:return $e(a),null;case 3:return r=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),za(En),ae(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(gl(a)?Va(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ea!==null&&(_d(ea),ea=null))),$e(a),null;case 26:return r=a.memoizedState,n===null?(Va(a),r!==null?($e(a),sv(a,r)):($e(a),a.flags&=-16777217)):r?r!==n.memoizedState?(Va(a),$e(a),sv(a,r)):($e(a),a.flags&=-16777217):(n.memoizedProps!==c&&Va(a),$e(a),a.flags&=-16777217),null;case 27:X(a),r=ce.current;var p=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Va(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return $e(a),null}n=Qt.current,gl(a)?Sg(a):(n=Ov(p,c,r),a.stateNode=n,Va(a))}return $e(a),null;case 5:if(X(a),r=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Va(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return $e(a),null}if(n=Qt.current,gl(a))Sg(a);else{switch(p=Au(ce.current),n){case 1:n=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:n=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":n=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":n=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":n=p.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?p.createElement("select",{is:c.is}):p.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?p.createElement(r,{is:c.is}):p.createElement(r)}}n[yn]=a,n[On]=c;t:for(p=a.child;p!==null;){if(p.tag===5||p.tag===6)n.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===a)break t;for(;p.sibling===null;){if(p.return===null||p.return===a)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}a.stateNode=n;t:switch(zn(n,r,c),r){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Va(a)}}return $e(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Va(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=ce.current,gl(a)){if(n=a.stateNode,r=a.memoizedProps,c=null,p=ti,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[yn]=a,n=!!(n.nodeValue===r||c!==null&&c.suppressHydrationWarning===!0||Cv(n.nodeValue,r)),n||ir(a)}else n=Au(n).createTextNode(c),n[yn]=a,a.stateNode=n}return $e(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=gl(a),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=a.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[yn]=a}else _l(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;$e(a),p=!1}else ea!==null&&(_d(ea),ea=null),p=!0;if(!p)return a.flags&256?(Pa(a),a):(Pa(a),null)}if(Pa(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=c!==null,n=n!==null&&n.memoizedState!==null,r){c=a.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==p&&(c.flags|=2048)}return r!==n&&r&&(a.child.flags|=8192),mu(a,a.updateQueue),$e(a),null;case 4:return ae(),n===null&&Rd(a.stateNode.containerInfo),$e(a),null;case 10:return za(a.type),$e(a),null;case 19:if(Yt(bn),p=a.memoizedState,p===null)return $e(a),null;if(c=(a.flags&128)!==0,g=p.rendering,g===null)if(c)Il(p,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=Jc(n),g!==null){for(a.flags|=128,Il(p,!1),n=g.updateQueue,a.updateQueue=n,mu(a,n),a.subtreeFlags=0,n=r,r=a.child;r!==null;)iv(r,n),r=r.sibling;return Pt(bn,bn.current&1|2),a.child}n=n.sibling}p.tail!==null&&R()>gu&&(a.flags|=128,c=!0,Il(p,!1),a.lanes=4194304)}else{if(!c)if(n=Jc(g),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,mu(a,n),Il(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!De)return $e(a),null}else 2*R()-p.renderingStartTime>gu&&r!==536870912&&(a.flags|=128,c=!0,Il(p,!1),a.lanes=4194304);p.isBackwards?(g.sibling=a.child,a.child=g):(n=p.last,n!==null?n.sibling=g:a.child=g,p.last=g)}return p.tail!==null?(a=p.tail,p.rendering=a,p.tail=a.sibling,p.renderingStartTime=R(),a.sibling=null,n=bn.current,Pt(bn,c?n&1|2:n&1),a):($e(a),null);case 22:case 23:return Pa(a),gh(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(r&536870912)!==0&&(a.flags&128)===0&&($e(a),a.subtreeFlags&6&&(a.flags|=8192)):$e(a),r=a.updateQueue,r!==null&&mu(a,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==r&&(a.flags|=2048),n!==null&&Yt(sr),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),za(En),$e(a),null;case 25:return null}throw Error(i(156,a.tag))}function M1(n,a){switch(hh(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return za(En),ae(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return X(a),null;case 13:if(Pa(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));_l()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return Yt(bn),null;case 4:return ae(),null;case 10:return za(a.type),null;case 22:case 23:return Pa(a),gh(),n!==null&&Yt(sr),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return za(En),null;case 25:return null;default:return null}}function rv(n,a){switch(hh(a),a.tag){case 3:za(En),ae();break;case 26:case 27:case 5:X(a);break;case 4:ae();break;case 13:Pa(a);break;case 19:Yt(bn);break;case 10:za(a.type);break;case 22:case 23:Pa(a),gh(),n!==null&&Yt(sr);break;case 24:za(En)}}var b1={getCacheForType:function(n){var a=kn(En),r=a.data.get(n);return r===void 0&&(r=n(),a.data.set(n,r)),r}},E1=typeof WeakMap=="function"?WeakMap:Map,tn=0,Ve=null,Se=null,Te=0,ke=0,Mi=null,ka=!1,co=!1,ud=!1,Xa=0,on=0,bs=0,pr=0,fd=0,ki=0,uo=0,zl=null,ha=null,hd=!1,dd=0,gu=1/0,_u=null,Es=null,vu=!1,mr=null,Bl=0,pd=0,md=null,Gl=0,gd=null;function bi(){if((tn&2)!==0&&Te!==0)return Te&-Te;if(w.T!==null){var n=eo;return n!==0?n:Ed()}return al()}function ov(){ki===0&&(ki=(Te&536870912)===0||De?Oe():536870912);var n=Bi.current;return n!==null&&(n.flags|=32),ki}function ei(n,a,r){(n===Ve&&ke===2||n.cancelPendingCommit!==null)&&(fo(n,0),Wa(n,Te,ki,!1)),Kn(n,r),((tn&2)===0||n!==Ve)&&(n===Ve&&((tn&2)===0&&(pr|=r),on===4&&Wa(n,Te,ki,!1)),da(n))}function lv(n,a,r){if((tn&6)!==0)throw Error(i(327));var c=!r&&(a&60)===0&&(a&n.expiredLanes)===0||Gt(n,a),p=c?w1(n,a):Sd(n,a,!0),g=c;do{if(p===0){co&&!c&&Wa(n,a,0,!1);break}else if(p===6)Wa(n,a,0,!ka);else{if(r=n.current.alternate,g&&!T1(r)){p=Sd(n,a,!1),g=!1;continue}if(p===2){if(g=a,n.errorRecoveryDisabledLanes&g)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){a=T;t:{var P=n;p=zl;var B=P.current.memoizedState.isDehydrated;if(B&&(fo(P,T).flags|=256),T=Sd(P,T,!1),T!==2){if(ud&&!B){P.errorRecoveryDisabledLanes|=g,pr|=g,p=4;break t}g=ha,ha=p,g!==null&&_d(g)}p=T}if(g=!1,p!==2)continue}}if(p===1){fo(n,0),Wa(n,a,0,!0);break}t:{switch(c=n,p){case 0:case 1:throw Error(i(345));case 4:if((a&4194176)===a){Wa(c,a,ki,!ka);break t}break;case 2:ha=null;break;case 3:case 5:break;default:throw Error(i(329))}if(c.finishedWork=r,c.finishedLanes=a,(a&62914560)===a&&(g=dd+300-R(),10<g)){if(Wa(c,a,ki,!ka),ct(c,0)!==0)break t;c.timeoutHandle=Lv(cv.bind(null,c,r,ha,_u,hd,a,ki,pr,uo,ka,2,-0,0),g);break t}cv(c,r,ha,_u,hd,a,ki,pr,uo,ka,0,-0,0)}}break}while(!0);da(n)}function _d(n){ha===null?ha=n:ha.push.apply(ha,n)}function cv(n,a,r,c,p,g,T,P,B,K,mt,St,ot){var dt=a.subtreeFlags;if((dt&8192||(dt&16785408)===16785408)&&(ql={stylesheets:null,count:0,unsuspend:rb},$_(a),a=lb(),a!==null)){n.cancelPendingCommit=a(gv.bind(null,n,r,c,p,T,P,B,1,St,ot)),Wa(n,g,T,!K);return}gv(n,r,c,p,T,P,B,mt,St,ot)}function T1(n){for(var a=n;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var c=0;c<r.length;c++){var p=r[c],g=p.getSnapshot;p=p.value;try{if(!xi(g(),p))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Wa(n,a,r,c){a&=~fd,a&=~pr,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var p=a;0<p;){var g=31-Dt(p),T=1<<g;c[g]=-1,p&=~T}r!==0&&Gr(n,r,a)}function xu(){return(tn&6)===0?(Hl(0),!1):!0}function vd(){if(Se!==null){if(ke===0)var n=Se.return;else n=Se,Ia=ur=null,Eh(n),$r=null,yl=0,n=Se;for(;n!==null;)rv(n.alternate,n),n=n.return;Se=null}}function fo(n,a){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;r!==-1&&(n.timeoutHandle=-1,X1(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),vd(),Ve=n,Se=r=Ms(n.current,null),Te=a,ke=0,Mi=null,ka=!1,co=Gt(n,a),ud=!1,uo=ki=fd=pr=bs=on=0,ha=zl=null,hd=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var p=31-Dt(c),g=1<<p;a|=n[p],c&=~g}return Xa=a,kc(),r}function uv(n,a){ge=null,w.H=fa,a===xl?(a=Tg(),ke=3):a===Mg?(a=Tg(),ke=4):ke=a===b_?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Mi=a,Se===null&&(on=1,cu(n,Fi(a,n.current)))}function fv(){var n=w.H;return w.H=fa,n===null?fa:n}function hv(){var n=w.A;return w.A=b1,n}function xd(){on=4,ka||(Te&4194176)!==Te&&Bi.current!==null||(co=!0),(bs&134217727)===0&&(pr&134217727)===0||Ve===null||Wa(Ve,Te,ki,!1)}function Sd(n,a,r){var c=tn;tn|=2;var p=fv(),g=hv();(Ve!==n||Te!==a)&&(_u=null,fo(n,a)),a=!1;var T=on;t:do try{if(ke!==0&&Se!==null){var P=Se,B=Mi;switch(ke){case 8:vd(),T=6;break t;case 3:case 2:case 6:Bi.current===null&&(a=!0);var K=ke;if(ke=0,Mi=null,ho(n,P,B,K),r&&co){T=0;break t}break;default:K=ke,ke=0,Mi=null,ho(n,P,B,K)}}A1(),T=on;break}catch(mt){uv(n,mt)}while(!0);return a&&n.shellSuspendCounter++,Ia=ur=null,tn=c,w.H=p,w.A=g,Se===null&&(Ve=null,Te=0,kc()),T}function A1(){for(;Se!==null;)dv(Se)}function w1(n,a){var r=tn;tn|=2;var c=fv(),p=hv();Ve!==n||Te!==a?(_u=null,gu=R()+500,fo(n,a)):co=Gt(n,a);t:do try{if(ke!==0&&Se!==null){a=Se;var g=Mi;e:switch(ke){case 1:ke=0,Mi=null,ho(n,a,g,1);break;case 2:if(bg(g)){ke=0,Mi=null,pv(a);break}a=function(){ke===2&&Ve===n&&(ke=7),da(n)},g.then(a,a);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:bg(g)?(ke=0,Mi=null,pv(a)):(ke=0,Mi=null,ho(n,a,g,7));break;case 5:var T=null;switch(Se.tag){case 26:T=Se.memoizedState;case 5:case 27:var P=Se;if(!T||kv(T)){ke=0,Mi=null;var B=P.sibling;if(B!==null)Se=B;else{var K=P.return;K!==null?(Se=K,Su(K)):Se=null}break e}}ke=0,Mi=null,ho(n,a,g,5);break;case 6:ke=0,Mi=null,ho(n,a,g,6);break;case 8:vd(),on=6;break t;default:throw Error(i(462))}}R1();break}catch(mt){uv(n,mt)}while(!0);return Ia=ur=null,w.H=c,w.A=p,tn=r,Se!==null?0:(Ve=null,Te=0,kc(),on)}function R1(){for(;Se!==null&&!jt();)dv(Se)}function dv(n){var a=O_(n.alternate,n,Xa);n.memoizedProps=n.pendingProps,a===null?Su(n):Se=a}function pv(n){var a=n,r=a.alternate;switch(a.tag){case 15:case 0:a=C_(r,a,a.pendingProps,a.type,void 0,Te);break;case 11:a=C_(r,a,a.pendingProps,a.type.render,a.ref,Te);break;case 5:Eh(a);default:rv(r,a),a=Se=iv(a,Xa),a=O_(r,a,Xa)}n.memoizedProps=n.pendingProps,a===null?Su(n):Se=a}function ho(n,a,r,c){Ia=ur=null,Eh(a),$r=null,yl=0;var p=a.return;try{if(g1(n,p,a,r,Te)){on=1,cu(n,Fi(r,n.current)),Se=null;return}}catch(g){if(p!==null)throw Se=p,g;on=1,cu(n,Fi(r,n.current)),Se=null;return}a.flags&32768?(De||c===1?n=!0:co||(Te&536870912)!==0?n=!1:(ka=n=!0,(c===2||c===3||c===6)&&(c=Bi.current,c!==null&&c.tag===13&&(c.flags|=16384))),mv(a,n)):Su(a)}function Su(n){var a=n;do{if((a.flags&32768)!==0){mv(a,ka);return}n=a.return;var r=y1(a.alternate,a,Xa);if(r!==null){Se=r;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=n}while(a!==null);on===0&&(on=5)}function mv(n,a){do{var r=M1(n.alternate,n);if(r!==null){r.flags&=32767,Se=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(n=n.sibling,n!==null)){Se=n;return}Se=n=r}while(n!==null);on=6,Se=null}function gv(n,a,r,c,p,g,T,P,B,K){var mt=w.T,St=vt.p;try{vt.p=2,w.T=null,C1(n,a,r,c,St,p,g,T,P,B,K)}finally{w.T=mt,vt.p=St}}function C1(n,a,r,c,p,g,T,P){do po();while(mr!==null);if((tn&6)!==0)throw Error(i(327));var B=n.finishedWork;if(c=n.finishedLanes,B===null)return null;if(n.finishedWork=null,n.finishedLanes=0,B===n.current)throw Error(i(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var K=B.lanes|B.childLanes;if(K|=ch,Nc(n,c,K,g,T,P),n===Ve&&(Se=Ve=null,Te=0),(B.subtreeFlags&10256)===0&&(B.flags&10256)===0||vu||(vu=!0,pd=K,md=r,N1(ut,function(){return po(),null})),r=(B.flags&15990)!==0,(B.subtreeFlags&15990)!==0||r?(r=w.T,w.T=null,g=vt.p,vt.p=2,T=tn,tn|=4,v1(n,B),K_(B,n),$M(Ld,n.containerInfo),Lu=!!Ud,Ld=Ud=null,n.current=B,q_(n,B.alternate,B),z(),tn=T,vt.p=g,w.T=r):n.current=B,vu?(vu=!1,mr=n,Bl=c):_v(n,K),K=n.pendingLanes,K===0&&(Es=null),Wt(B.stateNode),da(n),a!==null)for(p=n.onRecoverableError,B=0;B<a.length;B++)K=a[B],p(K.value,{componentStack:K.stack});return(Bl&3)!==0&&po(),K=n.pendingLanes,(c&4194218)!==0&&(K&42)!==0?n===gd?Gl++:(Gl=0,gd=n):Gl=0,Hl(0),null}function _v(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,bl(a)))}function po(){if(mr!==null){var n=mr,a=pd;pd=0;var r=il(Bl),c=w.T,p=vt.p;try{if(vt.p=32>r?32:r,w.T=null,mr===null)var g=!1;else{r=md,md=null;var T=mr,P=Bl;if(mr=null,Bl=0,(tn&6)!==0)throw Error(i(331));var B=tn;if(tn|=4,ev(T.current),J_(T,T.current,P,r),tn=B,Hl(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Tt,T)}catch{}g=!0}return g}finally{vt.p=p,w.T=c,_v(n,a)}}return!1}function vv(n,a,r){a=Fi(r,a),a=zh(n.stateNode,a,2),n=vs(n,a,2),n!==null&&(Kn(n,2),da(n))}function Be(n,a,r){if(n.tag===3)vv(n,n,r);else for(;a!==null;){if(a.tag===3){vv(a,n,r);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Es===null||!Es.has(c))){n=Fi(r,n),r=y_(2),c=vs(a,r,2),c!==null&&(M_(r,c,a,n),Kn(c,2),da(c));break}}a=a.return}}function yd(n,a,r){var c=n.pingCache;if(c===null){c=n.pingCache=new E1;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(r)||(ud=!0,p.add(r),n=D1.bind(null,n,a,r),a.then(n,n))}function D1(n,a,r){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,Ve===n&&(Te&r)===r&&(on===4||on===3&&(Te&62914560)===Te&&300>R()-dd?(tn&2)===0&&fo(n,0):fd|=r,uo===Te&&(uo=0)),da(n)}function xv(n,a){a===0&&(a=Ce()),n=us(n,a),n!==null&&(Kn(n,a),da(n))}function U1(n){var a=n.memoizedState,r=0;a!==null&&(r=a.retryLane),xv(n,r)}function L1(n,a){var r=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(r=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),xv(n,r)}function N1(n,a){return Ee(n,a)}var yu=null,mo=null,Md=!1,Mu=!1,bd=!1,gr=0;function da(n){n!==mo&&n.next===null&&(mo===null?yu=mo=n:mo=mo.next=n),Mu=!0,Md||(Md=!0,O1(P1))}function Hl(n,a){if(!bd&&Mu){bd=!0;do for(var r=!1,c=yu;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var g=0;else{var T=c.suspendedLanes,P=c.pingedLanes;g=(1<<31-Dt(42|n)+1)-1,g&=p&~(T&~P),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(r=!0,Mv(c,g))}else g=Te,g=ct(c,c===Ve?g:0),(g&3)===0||Gt(c,g)||(r=!0,Mv(c,g));c=c.next}while(r);bd=!1}}function P1(){Mu=Md=!1;var n=0;gr!==0&&(k1()&&(n=gr),gr=0);for(var a=R(),r=null,c=yu;c!==null;){var p=c.next,g=Sv(c,a);g===0?(c.next=null,r===null?yu=p:r.next=p,p===null&&(mo=r)):(r=c,(n!==0||(g&3)!==0)&&(Mu=!0)),c=p}Hl(n)}function Sv(n,a){for(var r=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var T=31-Dt(g),P=1<<T,B=p[T];B===-1?((P&r)===0||(P&c)!==0)&&(p[T]=se(P,a)):B<=a&&(n.expiredLanes|=P),g&=~P}if(a=Ve,r=Te,r=ct(n,n===a?r:0),c=n.callbackNode,r===0||n===a&&ke===2||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Ne(c),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||Gt(n,r)){if(a=r&-r,a===n.callbackPriority)return a;switch(c!==null&&Ne(c),il(r)){case 2:case 8:r=xt;break;case 32:r=ut;break;case 268435456:r=wt;break;default:r=ut}return c=yv.bind(null,n),r=Ee(r,c),n.callbackPriority=a,n.callbackNode=r,a}return c!==null&&c!==null&&Ne(c),n.callbackPriority=2,n.callbackNode=null,2}function yv(n,a){var r=n.callbackNode;if(po()&&n.callbackNode!==r)return null;var c=Te;return c=ct(n,n===Ve?c:0),c===0?null:(lv(n,c,a),Sv(n,R()),n.callbackNode!=null&&n.callbackNode===r?yv.bind(null,n):null)}function Mv(n,a){if(po())return null;lv(n,a,!0)}function O1(n){W1(function(){(tn&6)!==0?Ee(pt,n):n()})}function Ed(){return gr===0&&(gr=Oe()),gr}function bv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Fc(""+n)}function Ev(n,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,n.id&&r.setAttribute("form",n.id),a.parentNode.insertBefore(r,a),n=new FormData(n),r.parentNode.removeChild(r),n}function F1(n,a,r,c,p){if(a==="submit"&&r&&r.stateNode===p){var g=bv((p[On]||null).action),T=c.submitter;T&&(a=(a=T[On]||null)?bv(a.formAction):T.getAttribute("formAction"),a!==null&&(g=a,T=null));var P=new Gc("action","action",null,c,p);n.push({event:P,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(gr!==0){var B=T?Ev(p,T):new FormData(p);Nh(r,{pending:!0,data:B,method:p.method,action:g},null,B)}}else typeof g=="function"&&(P.preventDefault(),B=T?Ev(p,T):new FormData(p),Nh(r,{pending:!0,data:B,method:p.method,action:g},g,B))},currentTarget:p}]})}}for(var Td=0;Td<gg.length;Td++){var Ad=gg[Td],I1=Ad.toLowerCase(),z1=Ad[0].toUpperCase()+Ad.slice(1);ta(I1,"on"+z1)}ta(fg,"onAnimationEnd"),ta(hg,"onAnimationIteration"),ta(dg,"onAnimationStart"),ta("dblclick","onDoubleClick"),ta("focusin","onFocus"),ta("focusout","onBlur"),ta(e1,"onTransitionRun"),ta(n1,"onTransitionStart"),ta(i1,"onTransitionCancel"),ta(pg,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function Tv(n,a){a=(a&4)!==0;for(var r=0;r<n.length;r++){var c=n[r],p=c.event;c=c.listeners;t:{var g=void 0;if(a)for(var T=c.length-1;0<=T;T--){var P=c[T],B=P.instance,K=P.currentTarget;if(P=P.listener,B!==g&&p.isPropagationStopped())break t;g=P,p.currentTarget=K;try{g(p)}catch(mt){lu(mt)}p.currentTarget=null,g=B}else for(T=0;T<c.length;T++){if(P=c[T],B=P.instance,K=P.currentTarget,P=P.listener,B!==g&&p.isPropagationStopped())break t;g=P,p.currentTarget=K;try{g(p)}catch(mt){lu(mt)}p.currentTarget=null,g=B}}}}function ye(n,a){var r=a[Hr];r===void 0&&(r=a[Hr]=new Set);var c=n+"__bubble";r.has(c)||(Av(a,n,2,!1),r.add(c))}function wd(n,a,r){var c=0;a&&(c|=4),Av(r,n,c,a)}var bu="_reactListening"+Math.random().toString(36).slice(2);function Rd(n){if(!n[bu]){n[bu]=!0,J.forEach(function(r){r!=="selectionchange"&&(B1.has(r)||wd(r,!1,n),wd(r,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[bu]||(a[bu]=!0,wd("selectionchange",!1,a))}}function Av(n,a,r,c){switch(Zv(a)){case 2:var p=fb;break;case 8:p=hb;break;default:p=Hd}r=p.bind(null,a,r,n),p=void 0,!Kf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(a,r,{capture:!0,passive:p}):n.addEventListener(a,r,!0):p!==void 0?n.addEventListener(a,r,{passive:p}):n.addEventListener(a,r,!1)}function Cd(n,a,r,c,p){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)t:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var P=c.stateNode.containerInfo;if(P===p||P.nodeType===8&&P.parentNode===p)break;if(T===4)for(T=c.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;T=T.return}for(;P!==null;){if(T=Da(P),T===null)return;if(B=T.tag,B===5||B===6||B===26||B===27){c=g=T;continue t}P=P.parentNode}}c=c.return}H0(function(){var K=g,mt=jf(r),St=[];t:{var ot=mg.get(n);if(ot!==void 0){var dt=Gc,Kt=n;switch(n){case"keypress":if(zc(r)===0)break t;case"keydown":case"keyup":dt=LM;break;case"focusin":Kt="focus",dt=th;break;case"focusout":Kt="blur",dt=th;break;case"beforeblur":case"afterblur":dt=th;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=X0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=SM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=OM;break;case fg:case hg:case dg:dt=bM;break;case pg:dt=IM;break;case"scroll":case"scrollend":dt=vM;break;case"wheel":dt=BM;break;case"copy":case"cut":case"paste":dt=TM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=q0;break;case"toggle":case"beforetoggle":dt=HM}var le=(a&4)!==0,ln=!le&&(n==="scroll"||n==="scrollend"),$=le?ot!==null?ot+"Capture":null:ot;le=[];for(var j=K,rt;j!==null;){var gt=j;if(rt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||rt===null||$===null||(gt=ol(j,$),gt!=null&&le.push(kl(j,gt,rt))),ln)break;j=j.return}0<le.length&&(ot=new dt(ot,Kt,null,r,mt),St.push({event:ot,listeners:le}))}}if((a&7)===0){t:{if(ot=n==="mouseover"||n==="pointerover",dt=n==="mouseout"||n==="pointerout",ot&&r!==Yf&&(Kt=r.relatedTarget||r.fromElement)&&(Da(Kt)||Kt[Qi]))break t;if((dt||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,dt?(Kt=r.relatedTarget||r.toElement,dt=K,Kt=Kt?Da(Kt):null,Kt!==null&&(ln=it(Kt),le=Kt.tag,Kt!==ln||le!==5&&le!==27&&le!==6)&&(Kt=null)):(dt=null,Kt=K),dt!==Kt)){if(le=X0,gt="onMouseLeave",$="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(le=q0,gt="onPointerLeave",$="onPointerEnter",j="pointer"),ln=dt==null?ot:Qs(dt),rt=Kt==null?ot:Qs(Kt),ot=new le(gt,j+"leave",dt,r,mt),ot.target=ln,ot.relatedTarget=rt,gt=null,Da(mt)===K&&(le=new le($,j+"enter",Kt,r,mt),le.target=rt,le.relatedTarget=ln,gt=le),ln=gt,dt&&Kt)e:{for(le=dt,$=Kt,j=0,rt=le;rt;rt=go(rt))j++;for(rt=0,gt=$;gt;gt=go(gt))rt++;for(;0<j-rt;)le=go(le),j--;for(;0<rt-j;)$=go($),rt--;for(;j--;){if(le===$||$!==null&&le===$.alternate)break e;le=go(le),$=go($)}le=null}else le=null;dt!==null&&wv(St,ot,dt,le,!1),Kt!==null&&ln!==null&&wv(St,ln,Kt,le,!0)}}t:{if(ot=K?Qs(K):window,dt=ot.nodeName&&ot.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ot.type==="file")var kt=tg;else if(J0(ot))if(eg)kt=QM;else{kt=ZM;var _e=jM}else dt=ot.nodeName,!dt||dt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?K&&kr(K.elementType)&&(kt=tg):kt=KM;if(kt&&(kt=kt(n,K))){$0(St,kt,r,mt);break t}_e&&_e(n,ot,K),n==="focusout"&&K&&ot.type==="number"&&K.memoizedProps.value!=null&&Ji(ot,"number",ot.value)}switch(_e=K?Qs(K):window,n){case"focusin":(J0(_e)||_e.contentEditable==="true")&&(Yr=_e,rh=K,ml=null);break;case"focusout":ml=rh=Yr=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,cg(St,r,mt);break;case"selectionchange":if(t1)break;case"keydown":case"keyup":cg(St,r,mt)}var $t;if(nh)t:{switch(n){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else qr?K0(n,r)&&(ee="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(ee="onCompositionStart");ee&&(Y0&&r.locale!=="ko"&&(qr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&qr&&($t=V0()):(cs=mt,Qf="value"in cs?cs.value:cs.textContent,qr=!0)),_e=Eu(K,ee),0<_e.length&&(ee=new W0(ee,n,null,r,mt),St.push({event:ee,listeners:_e}),$t?ee.data=$t:($t=Q0(r),$t!==null&&(ee.data=$t)))),($t=kM?XM(n,r):WM(n,r))&&(ee=Eu(K,"onBeforeInput"),0<ee.length&&(_e=new W0("onBeforeInput","beforeinput",null,r,mt),St.push({event:_e,listeners:ee}),_e.data=$t)),F1(St,n,K,r,mt)}Tv(St,a)})}function kl(n,a,r){return{instance:n,listener:a,currentTarget:r}}function Eu(n,a){for(var r=a+"Capture",c=[];n!==null;){var p=n,g=p.stateNode;p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=ol(n,r),p!=null&&c.unshift(kl(n,p,g)),p=ol(n,a),p!=null&&c.push(kl(n,p,g))),n=n.return}return c}function go(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function wv(n,a,r,c,p){for(var g=a._reactName,T=[];r!==null&&r!==c;){var P=r,B=P.alternate,K=P.stateNode;if(P=P.tag,B!==null&&B===c)break;P!==5&&P!==26&&P!==27||K===null||(B=K,p?(K=ol(r,g),K!=null&&T.unshift(kl(r,K,B))):p||(K=ol(r,g),K!=null&&T.push(kl(r,K,B)))),r=r.return}T.length!==0&&n.push({event:a,listeners:T})}var G1=/\r\n?/g,H1=/\u0000|\uFFFD/g;function Rv(n){return(typeof n=="string"?n:""+n).replace(G1,`
`).replace(H1,"")}function Cv(n,a){return a=Rv(a),Rv(n)===a}function Tu(){}function ze(n,a,r,c,p,g){switch(r){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||$n(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&$n(n,""+c);break;case"className":oe(n,"class",c);break;case"tabIndex":oe(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(n,r,c);break;case"style":Ua(n,c,g);break;case"data":if(a!=="object"){oe(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||r!=="href")){n.removeAttribute(r);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=Fc(""+c),n.setAttribute(r,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(r==="formAction"?(a!=="input"&&ze(n,a,"name",p.name,p,null),ze(n,a,"formEncType",p.formEncType,p,null),ze(n,a,"formMethod",p.formMethod,p,null),ze(n,a,"formTarget",p.formTarget,p,null)):(ze(n,a,"encType",p.encType,p,null),ze(n,a,"method",p.method,p,null),ze(n,a,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=Fc(""+c),n.setAttribute(r,c);break;case"onClick":c!=null&&(n.onclick=Tu);break;case"onScroll":c!=null&&ye("scroll",n);break;case"onScrollEnd":c!=null&&ye("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(r=c.__html,r!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=r}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}r=Fc(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""+c):n.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""):n.removeAttribute(r);break;case"capture":case"download":c===!0?n.setAttribute(r,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,c):n.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(r,c):n.removeAttribute(r);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(r):n.setAttribute(r,c);break;case"popover":ye("beforetoggle",n),ye("toggle",n),ie(n,"popover",c);break;case"xlinkActuate":Ht(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Ht(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Ht(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Ht(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Ht(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Ht(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Ht(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Ht(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Ht(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":ie(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=gM.get(r)||r,ie(n,r,c))}}function Dd(n,a,r,c,p,g){switch(r){case"style":Ua(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(r=c.__html,r!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=r}}break;case"children":typeof c=="string"?$n(n,c):(typeof c=="number"||typeof c=="bigint")&&$n(n,""+c);break;case"onScroll":c!=null&&ye("scroll",n);break;case"onScrollEnd":c!=null&&ye("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Tu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(p=r.endsWith("Capture"),a=r.slice(2,p?r.length-7:void 0),g=n[On]||null,g=g!=null?g[r]:null,typeof g=="function"&&n.removeEventListener(a,g,p),typeof c=="function")){typeof g!="function"&&g!==null&&(r in n?n[r]=null:n.hasAttribute(r)&&n.removeAttribute(r)),n.addEventListener(a,c,p);break t}r in n?n[r]=c:c===!0?n.setAttribute(r,""):ie(n,r,c)}}}function zn(n,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",n),ye("load",n);var c=!1,p=!1,g;for(g in r)if(r.hasOwnProperty(g)){var T=r[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ze(n,a,g,T,r,null)}}p&&ze(n,a,"srcSet",r.srcSet,r,null),c&&ze(n,a,"src",r.src,r,null);return;case"input":ye("invalid",n);var P=g=T=p=null,B=null,K=null;for(c in r)if(r.hasOwnProperty(c)){var mt=r[c];if(mt!=null)switch(c){case"name":p=mt;break;case"type":T=mt;break;case"checked":B=mt;break;case"defaultChecked":K=mt;break;case"value":g=mt;break;case"defaultValue":P=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(i(137,a));break;default:ze(n,a,c,mt,r,null)}}_i(n,g,P,B,K,T,p,!1),Ae(n);return;case"select":ye("invalid",n),c=T=g=null;for(p in r)if(r.hasOwnProperty(p)&&(P=r[p],P!=null))switch(p){case"value":g=P;break;case"defaultValue":T=P;break;case"multiple":c=P;default:ze(n,a,p,P,r,null)}a=g,r=T,n.multiple=!!c,a!=null?vi(n,!!c,a,!1):r!=null&&vi(n,!!c,r,!0);return;case"textarea":ye("invalid",n),g=p=c=null;for(T in r)if(r.hasOwnProperty(T)&&(P=r[T],P!=null))switch(T){case"value":c=P;break;case"defaultValue":p=P;break;case"children":g=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error(i(91));break;default:ze(n,a,T,P,r,null)}dn(n,c,p,g),Ae(n);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(c=r[B],c!=null))switch(B){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ze(n,a,B,c,r,null)}return;case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":ye("load",n);break;case"video":case"audio":for(c=0;c<Vl.length;c++)ye(Vl[c],n);break;case"image":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"embed":case"source":case"link":ye("error",n),ye("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in r)if(r.hasOwnProperty(K)&&(c=r[K],c!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ze(n,a,K,c,r,null)}return;default:if(kr(a)){for(mt in r)r.hasOwnProperty(mt)&&(c=r[mt],c!==void 0&&Dd(n,a,mt,c,r,void 0));return}}for(P in r)r.hasOwnProperty(P)&&(c=r[P],c!=null&&ze(n,a,P,c,r,null))}function V1(n,a,r,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,T=null,P=null,B=null,K=null,mt=null;for(dt in r){var St=r[dt];if(r.hasOwnProperty(dt)&&St!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":B=St;default:c.hasOwnProperty(dt)||ze(n,a,dt,null,c,St)}}for(var ot in c){var dt=c[ot];if(St=r[ot],c.hasOwnProperty(ot)&&(dt!=null||St!=null))switch(ot){case"type":g=dt;break;case"name":p=dt;break;case"checked":K=dt;break;case"defaultChecked":mt=dt;break;case"value":T=dt;break;case"defaultValue":P=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(i(137,a));break;default:dt!==St&&ze(n,a,ot,dt,c,St)}}Jn(n,T,P,B,K,mt,g,p);return;case"select":dt=T=P=ot=null;for(g in r)if(B=r[g],r.hasOwnProperty(g)&&B!=null)switch(g){case"value":break;case"multiple":dt=B;default:c.hasOwnProperty(g)||ze(n,a,g,null,c,B)}for(p in c)if(g=c[p],B=r[p],c.hasOwnProperty(p)&&(g!=null||B!=null))switch(p){case"value":ot=g;break;case"defaultValue":P=g;break;case"multiple":T=g;default:g!==B&&ze(n,a,p,g,c,B)}a=P,r=T,c=dt,ot!=null?vi(n,!!r,ot,!1):!!c!=!!r&&(a!=null?vi(n,!!r,a,!0):vi(n,!!r,r?[]:"",!1));return;case"textarea":dt=ot=null;for(P in r)if(p=r[P],r.hasOwnProperty(P)&&p!=null&&!c.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:ze(n,a,P,null,c,p)}for(T in c)if(p=c[T],g=r[T],c.hasOwnProperty(T)&&(p!=null||g!=null))switch(T){case"value":ot=p;break;case"defaultValue":dt=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(i(91));break;default:p!==g&&ze(n,a,T,p,c,g)}Pe(n,ot,dt);return;case"option":for(var Kt in r)if(ot=r[Kt],r.hasOwnProperty(Kt)&&ot!=null&&!c.hasOwnProperty(Kt))switch(Kt){case"selected":n.selected=!1;break;default:ze(n,a,Kt,null,c,ot)}for(B in c)if(ot=c[B],dt=r[B],c.hasOwnProperty(B)&&ot!==dt&&(ot!=null||dt!=null))switch(B){case"selected":n.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:ze(n,a,B,ot,c,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in r)ot=r[le],r.hasOwnProperty(le)&&ot!=null&&!c.hasOwnProperty(le)&&ze(n,a,le,null,c,ot);for(K in c)if(ot=c[K],dt=r[K],c.hasOwnProperty(K)&&ot!==dt&&(ot!=null||dt!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(i(137,a));break;default:ze(n,a,K,ot,c,dt)}return;default:if(kr(a)){for(var ln in r)ot=r[ln],r.hasOwnProperty(ln)&&ot!==void 0&&!c.hasOwnProperty(ln)&&Dd(n,a,ln,void 0,c,ot);for(mt in c)ot=c[mt],dt=r[mt],!c.hasOwnProperty(mt)||ot===dt||ot===void 0&&dt===void 0||Dd(n,a,mt,ot,c,dt);return}}for(var $ in r)ot=r[$],r.hasOwnProperty($)&&ot!=null&&!c.hasOwnProperty($)&&ze(n,a,$,null,c,ot);for(St in c)ot=c[St],dt=r[St],!c.hasOwnProperty(St)||ot===dt||ot==null&&dt==null||ze(n,a,St,ot,c,dt)}var Ud=null,Ld=null;function Au(n){return n.nodeType===9?n:n.ownerDocument}function Dv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uv(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Nd(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Pd=null;function k1(){var n=window.event;return n&&n.type==="popstate"?n===Pd?!1:(Pd=n,!0):(Pd=null,!1)}var Lv=typeof setTimeout=="function"?setTimeout:void 0,X1=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(n){return Nv.resolve(null).then(n).catch(q1)}:Lv;function q1(n){setTimeout(function(){throw n})}function Od(n,a){var r=a,c=0;do{var p=r.nextSibling;if(n.removeChild(r),p&&p.nodeType===8)if(r=p.data,r==="/$"){if(c===0){n.removeChild(p),Ql(a);return}c--}else r!=="$"&&r!=="$?"&&r!=="$!"||c++;r=p}while(r);Ql(a)}function Fd(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Fd(r),rl(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}n.removeChild(r)}}function Y1(n,a,r,c){for(;n.nodeType===1;){var p=r;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Ks])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=ia(n.nextSibling),n===null)break}return null}function j1(n,a,r){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=ia(n.nextSibling),n===null))return null;return n}function ia(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}function Pv(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return n;a--}else r==="/$"&&a++}n=n.previousSibling}return null}function Ov(n,a,r){switch(a=Au(r),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}var Xi=new Map,Fv=new Set;function wu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var qa=vt.d;vt.d={f:Z1,r:K1,D:Q1,C:J1,L:$1,m:tb,X:nb,S:eb,M:ib};function Z1(){var n=qa.f(),a=xu();return n||a}function K1(n){var a=os(n);a!==null&&a.tag===5&&a.type==="form"?c_(a):qa.r(n)}var _o=typeof document>"u"?null:document;function Iv(n,a,r){var c=_o;if(c&&typeof a=="string"&&a){var p=re(a);p='link[rel="'+n+'"][href="'+p+'"]',typeof r=="string"&&(p+='[crossorigin="'+r+'"]'),Fv.has(p)||(Fv.add(p),n={rel:n,crossOrigin:r,href:a},c.querySelector(p)===null&&(a=c.createElement("link"),zn(a,"link",n),L(a),c.head.appendChild(a)))}}function Q1(n){qa.D(n),Iv("dns-prefetch",n,null)}function J1(n,a){qa.C(n,a),Iv("preconnect",n,a)}function $1(n,a,r){qa.L(n,a,r);var c=_o;if(c&&n&&a){var p='link[rel="preload"][as="'+re(a)+'"]';a==="image"&&r&&r.imageSrcSet?(p+='[imagesrcset="'+re(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(p+='[imagesizes="'+re(r.imageSizes)+'"]')):p+='[href="'+re(n)+'"]';var g=p;switch(a){case"style":g=vo(n);break;case"script":g=xo(n)}Xi.has(g)||(n=k({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:n,as:a},r),Xi.set(g,n),c.querySelector(p)!==null||a==="style"&&c.querySelector(Xl(g))||a==="script"&&c.querySelector(Wl(g))||(a=c.createElement("link"),zn(a,"link",n),L(a),c.head.appendChild(a)))}}function tb(n,a){qa.m(n,a);var r=_o;if(r&&n){var c=a&&typeof a.as=="string"?a.as:"script",p='link[rel="modulepreload"][as="'+re(c)+'"][href="'+re(n)+'"]',g=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=xo(n)}if(!Xi.has(g)&&(n=k({rel:"modulepreload",href:n},a),Xi.set(g,n),r.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Wl(g)))return}c=r.createElement("link"),zn(c,"link",n),L(c),r.head.appendChild(c)}}}function eb(n,a,r){qa.S(n,a,r);var c=_o;if(c&&n){var p=ls(c).hoistableStyles,g=vo(n);a=a||"default";var T=p.get(g);if(!T){var P={loading:0,preload:null};if(T=c.querySelector(Xl(g)))P.loading=5;else{n=k({rel:"stylesheet",href:n,"data-precedence":a},r),(r=Xi.get(g))&&Id(n,r);var B=T=c.createElement("link");L(B),zn(B,"link",n),B._p=new Promise(function(K,mt){B.onload=K,B.onerror=mt}),B.addEventListener("load",function(){P.loading|=1}),B.addEventListener("error",function(){P.loading|=2}),P.loading|=4,Ru(T,a,c)}T={type:"stylesheet",instance:T,count:1,state:P},p.set(g,T)}}}function nb(n,a){qa.X(n,a);var r=_o;if(r&&n){var c=ls(r).hoistableScripts,p=xo(n),g=c.get(p);g||(g=r.querySelector(Wl(p)),g||(n=k({src:n,async:!0},a),(a=Xi.get(p))&&zd(n,a),g=r.createElement("script"),L(g),zn(g,"link",n),r.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function ib(n,a){qa.M(n,a);var r=_o;if(r&&n){var c=ls(r).hoistableScripts,p=xo(n),g=c.get(p);g||(g=r.querySelector(Wl(p)),g||(n=k({src:n,async:!0,type:"module"},a),(a=Xi.get(p))&&zd(n,a),g=r.createElement("script"),L(g),zn(g,"link",n),r.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function zv(n,a,r,c){var p=(p=ce.current)?wu(p):null;if(!p)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=vo(r.href),r=ls(p).hoistableStyles,c=r.get(a),c||(c={type:"style",instance:null,count:0,state:null},r.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){n=vo(r.href);var g=ls(p).hoistableStyles,T=g.get(n);if(T||(p=p.ownerDocument||p,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,T),(g=p.querySelector(Xl(n)))&&!g._p&&(T.instance=g,T.state.loading=5),Xi.has(n)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Xi.set(n,r),g||ab(p,n,r,T.state))),a&&c===null)throw Error(i(528,""));return T}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=xo(r),r=ls(p).hoistableScripts,c=r.get(a),c||(c={type:"script",instance:null,count:0,state:null},r.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function vo(n){return'href="'+re(n)+'"'}function Xl(n){return'link[rel="stylesheet"]['+n+"]"}function Bv(n){return k({},n,{"data-precedence":n.precedence,precedence:null})}function ab(n,a,r,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),zn(a,"link",r),L(a),n.head.appendChild(a))}function xo(n){return'[src="'+re(n)+'"]'}function Wl(n){return"script[async]"+n}function Gv(n,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+re(r.href)+'"]');if(c)return a.instance=c,L(c),c;var p=k({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),L(c),zn(c,"style",p),Ru(c,r.precedence,n),a.instance=c;case"stylesheet":p=vo(r.href);var g=n.querySelector(Xl(p));if(g)return a.state.loading|=4,a.instance=g,L(g),g;c=Bv(r),(p=Xi.get(p))&&Id(c,p),g=(n.ownerDocument||n).createElement("link"),L(g);var T=g;return T._p=new Promise(function(P,B){T.onload=P,T.onerror=B}),zn(g,"link",c),a.state.loading|=4,Ru(g,r.precedence,n),a.instance=g;case"script":return g=xo(r.src),(p=n.querySelector(Wl(g)))?(a.instance=p,L(p),p):(c=r,(p=Xi.get(g))&&(c=k({},r),zd(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),L(p),zn(p,"link",c),n.head.appendChild(p),a.instance=p);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Ru(c,r.precedence,n));return a.instance}function Ru(n,a,r){for(var c=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,g=p,T=0;T<c.length;T++){var P=c[T];if(P.dataset.precedence===a)g=P;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(n,a.firstChild))}function Id(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function zd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Cu=null;function Hv(n,a,r){if(Cu===null){var c=new Map,p=Cu=new Map;p.set(r,c)}else p=Cu,c=p.get(r),c||(c=new Map,p.set(r,c));if(c.has(n))return c;for(c.set(n,null),r=r.getElementsByTagName(n),p=0;p<r.length;p++){var g=r[p];if(!(g[Ks]||g[yn]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(a)||"";T=n+T;var P=c.get(T);P?P.push(g):c.set(T,[g])}}return c}function Vv(n,a,r){n=n.ownerDocument||n,n.head.insertBefore(r,a==="title"?n.querySelector("head > title"):null)}function sb(n,a,r){if(r===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function kv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ql=null;function rb(){}function ob(n,a,r){if(ql===null)throw Error(i(475));var c=ql;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var p=vo(r.href),g=n.querySelector(Xl(p));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Du.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=g,L(g);return}g=n.ownerDocument||n,r=Bv(r),(p=Xi.get(p))&&Id(r,p),g=g.createElement("link"),L(g);var T=g;T._p=new Promise(function(P,B){T.onload=P,T.onerror=B}),zn(g,"link",r),a.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Du.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function lb(){if(ql===null)throw Error(i(475));var n=ql;return n.stylesheets&&n.count===0&&Bd(n,n.stylesheets),0<n.count?function(a){var r=setTimeout(function(){if(n.stylesheets&&Bd(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(r)}}:null}function Du(){if(this.count--,this.count===0){if(this.stylesheets)Bd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Uu=null;function Bd(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Uu=new Map,a.forEach(cb,n),Uu=null,Du.call(n))}function cb(n,a){if(!(a.state.loading&4)){var r=Uu.get(n);if(r)var c=r.get(null);else{r=new Map,Uu.set(n,r);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var T=p[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(r.set(T.dataset.precedence,T),c=T)}c&&r.set(null,c)}p=a.instance,T=p.getAttribute("data-precedence"),g=r.get(T)||c,g===c&&r.set(null,p),r.set(T,p),this.count++,c=Du.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),a.state.loading|=4}}var Yl={$$typeof:x,Provider:null,Consumer:null,_currentValue:Ot,_currentValue2:Ot,_threadCount:0};function ub(n,a,r,c,p,g,T,P){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.hiddenUpdates=gi(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Xv(n,a,r,c,p,g,T,P,B,K,mt,St){return n=new ub(n,a,r,T,P,B,K,St),a=1,g===!0&&(a|=24),g=Vi(3,null,null,a),n.current=g,g.stateNode=n,a=_h(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:r,cache:a},Qh(g),n}function Wv(n){return n?(n=Kr,n):Kr}function qv(n,a,r,c,p,g){p=Wv(p),c.context===null?c.context=p:c.pendingContext=p,c=_s(a),c.payload={element:r},g=g===void 0?null:g,g!==null&&(c.callback=g),r=vs(n,c,a),r!==null&&(ei(r,n,a),Dl(r,n,a))}function Yv(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<a?r:a}}function Gd(n,a){Yv(n,a),(n=n.alternate)&&Yv(n,a)}function jv(n){if(n.tag===13){var a=us(n,67108864);a!==null&&ei(a,n,67108864),Gd(n,67108864)}}var Lu=!0;function fb(n,a,r,c){var p=w.T;w.T=null;var g=vt.p;try{vt.p=2,Hd(n,a,r,c)}finally{vt.p=g,w.T=p}}function hb(n,a,r,c){var p=w.T;w.T=null;var g=vt.p;try{vt.p=8,Hd(n,a,r,c)}finally{vt.p=g,w.T=p}}function Hd(n,a,r,c){if(Lu){var p=Vd(c);if(p===null)Cd(n,a,c,Nu,r),Kv(n,c);else if(pb(p,n,a,r,c))c.stopPropagation();else if(Kv(n,c),a&4&&-1<db.indexOf(n)){for(;p!==null;){var g=os(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Mt(g.pendingLanes);if(T!==0){var P=g;for(P.pendingLanes|=2,P.entangledLanes|=2;T;){var B=1<<31-Dt(T);P.entanglements[1]|=B,T&=~B}da(g),(tn&6)===0&&(gu=R()+500,Hl(0))}}break;case 13:P=us(g,2),P!==null&&ei(P,g,2),xu(),Gd(g,2)}if(g=Vd(c),g===null&&Cd(n,a,c,Nu,r),g===p)break;p=g}p!==null&&c.stopPropagation()}else Cd(n,a,c,null,r)}}function Vd(n){return n=jf(n),kd(n)}var Nu=null;function kd(n){if(Nu=null,n=Da(n),n!==null){var a=it(n);if(a===null)n=null;else{var r=a.tag;if(r===13){if(n=ft(a),n!==null)return n;n=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Nu=n,null}function Zv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case pt:return 2;case xt:return 8;case ut:case Xt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Xd=!1,Ts=null,As=null,ws=null,jl=new Map,Zl=new Map,Rs=[],db="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kv(n,a){switch(n){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":ws=null;break;case"pointerover":case"pointerout":jl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(a.pointerId)}}function Kl(n,a,r,c,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:r,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},a!==null&&(a=os(a),a!==null&&jv(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),n)}function pb(n,a,r,c,p){switch(a){case"focusin":return Ts=Kl(Ts,n,a,r,c,p),!0;case"dragenter":return As=Kl(As,n,a,r,c,p),!0;case"mouseover":return ws=Kl(ws,n,a,r,c,p),!0;case"pointerover":var g=p.pointerId;return jl.set(g,Kl(jl.get(g)||null,n,a,r,c,p)),!0;case"gotpointercapture":return g=p.pointerId,Zl.set(g,Kl(Zl.get(g)||null,n,a,r,c,p)),!0}return!1}function Qv(n){var a=Da(n.target);if(a!==null){var r=it(a);if(r!==null){if(a=r.tag,a===13){if(a=ft(r),a!==null){n.blockedOn=a,Ca(n.priority,function(){if(r.tag===13){var c=bi(),p=us(r,c);p!==null&&ei(p,r,c),Gd(r,c)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pu(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var r=Vd(n.nativeEvent);if(r===null){r=n.nativeEvent;var c=new r.constructor(r.type,r);Yf=c,r.target.dispatchEvent(c),Yf=null}else return a=os(r),a!==null&&jv(a),n.blockedOn=r,!1;a.shift()}return!0}function Jv(n,a,r){Pu(n)&&r.delete(a)}function mb(){Xd=!1,Ts!==null&&Pu(Ts)&&(Ts=null),As!==null&&Pu(As)&&(As=null),ws!==null&&Pu(ws)&&(ws=null),jl.forEach(Jv),Zl.forEach(Jv)}function Ou(n,a){n.blockedOn===a&&(n.blockedOn=null,Xd||(Xd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,mb)))}var Fu=null;function $v(n){Fu!==n&&(Fu=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fu===n&&(Fu=null);for(var a=0;a<n.length;a+=3){var r=n[a],c=n[a+1],p=n[a+2];if(typeof c!="function"){if(kd(c||r)===null)continue;break}var g=os(r);g!==null&&(n.splice(a,3),a-=3,Nh(g,{pending:!0,data:p,method:r.method,action:c},c,p))}}))}function Ql(n){function a(B){return Ou(B,n)}Ts!==null&&Ou(Ts,n),As!==null&&Ou(As,n),ws!==null&&Ou(ws,n),jl.forEach(a),Zl.forEach(a);for(var r=0;r<Rs.length;r++){var c=Rs[r];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Rs.length&&(r=Rs[0],r.blockedOn===null);)Qv(r),r.blockedOn===null&&Rs.shift();if(r=(n.ownerDocument||n).$$reactFormReplay,r!=null)for(c=0;c<r.length;c+=3){var p=r[c],g=r[c+1],T=p[On]||null;if(typeof g=="function")T||$v(r);else if(T){var P=null;if(g&&g.hasAttribute("formAction")){if(p=g,T=g[On]||null)P=T.formAction;else if(kd(p)!==null)continue}else P=T.action;typeof P=="function"?r[c+1]=P:(r.splice(c,3),c-=3),$v(r)}}}function Wd(n){this._internalRoot=n}Iu.prototype.render=Wd.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var r=a.current,c=bi();qv(r,c,n,a,null,null)},Iu.prototype.unmount=Wd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;n.tag===0&&po(),qv(n.current,2,null,n,null,null),xu(),a[Qi]=null}};function Iu(n){this._internalRoot=n}Iu.prototype.unstable_scheduleHydration=function(n){if(n){var a=al();n={blockedOn:null,target:n,priority:a};for(var r=0;r<Rs.length&&a!==0&&a<Rs[r].priority;r++);Rs.splice(r,0,n),r===0&&Qv(n)}};var tx=t.version;if(tx!=="19.0.0")throw Error(i(527,tx,"19.0.0"));vt.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=et(a),n=n!==null?ht(n):null,n=n===null?null:n.stateNode,n};var gb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:Da,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{Tt=zu.inject(gb),yt=zu}catch{}}return $l.createRoot=function(n,a){if(!s(n))throw Error(i(299));var r=!1,c="",p=__,g=v_,T=x_,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks)),a=Xv(n,1,!1,null,null,r,c,p,g,T,P,null),n[Qi]=a.current,Rd(n.nodeType===8?n.parentNode:n),new Wd(a)},$l.hydrateRoot=function(n,a,r){if(!s(n))throw Error(i(299));var c=!1,p="",g=__,T=v_,P=x_,B=null,K=null;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onUncaughtError!==void 0&&(g=r.onUncaughtError),r.onCaughtError!==void 0&&(T=r.onCaughtError),r.onRecoverableError!==void 0&&(P=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&(K=r.formState)),a=Xv(n,1,!0,a,r??null,c,p,g,T,P,B,K),a.context=Wv(null),r=a.current,c=bi(),p=_s(c),p.callback=null,vs(r,p,c),a.current.lanes=c,Kn(a,c),da(a),n[Qi]=a.current,Rd(n),new Iu(a)},$l.version="19.0.0",$l}var ux;function wb(){if(ux)return jd.exports;ux=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),jd.exports=Ab(),jd.exports}var Rb=wb();const Cb=PS(Rb);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const e0="183",Db=0,fx=1,Ub=2,vf=1,Lb=2,cc=3,Xs=0,ci=1,li=2,es=0,Ur=1,hx=2,dx=3,px=4,Nb=5,wr=100,Pb=101,Ob=102,Fb=103,Ib=104,zb=200,Bb=201,Gb=202,Hb=203,Wp=204,qp=205,Vb=206,kb=207,Xb=208,Wb=209,qb=210,Yb=211,jb=212,Zb=213,Kb=214,Yp=0,jp=1,Zp=2,ko=3,Kp=4,Qp=5,Jp=6,$p=7,OS=0,Qb=1,Jb=2,Ma=0,FS=1,IS=2,zS=3,n0=4,BS=5,GS=6,HS=7,VS=300,Fr=301,Xo=302,Jd=303,$d=304,Gf=306,tm=1e3,ts=1001,em=1002,Bn=1003,$b=1004,Bu=1005,Gn=1006,tp=1007,Is=1008,wi=1009,kS=1010,XS=1011,gc=1012,i0=1013,Aa=1014,xa=1015,is=1016,a0=1017,s0=1018,_c=1020,WS=35902,qS=35899,YS=1021,jS=1022,Zi=1023,as=1026,Cr=1027,ZS=1028,r0=1029,Wo=1030,o0=1031,l0=1033,xf=33776,Sf=33777,yf=33778,Mf=33779,nm=35840,im=35841,am=35842,sm=35843,rm=36196,om=37492,lm=37496,cm=37488,um=37489,fm=37490,hm=37491,dm=37808,pm=37809,mm=37810,gm=37811,_m=37812,vm=37813,xm=37814,Sm=37815,ym=37816,Mm=37817,bm=37818,Em=37819,Tm=37820,Am=37821,wm=36492,Rm=36494,Cm=36495,Dm=36283,Um=36284,Lm=36285,Nm=36286,tE=3200,KS=0,eE=1,Fs="",Ln="srgb",qo="srgb-linear",Rf="linear",Fe="srgb",So=7680,mx=519,nE=512,iE=513,aE=514,c0=515,sE=516,rE=517,u0=518,oE=519,gx=35044,_x="300 es",Sa=2e3,vc=2001;function lE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cE(){const o=xc("canvas");return o.style.display="block",o}const vx={};function xx(...o){const t="THREE."+o.shift();console.log(t,...o)}function QS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=o[1];e&&e.isStackTrace?o[0]+=" "+e.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ne(...o){o=QS(o);const t="THREE."+o.shift();{const e=o[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...o)}}function Le(...o){o=QS(o);const t="THREE."+o.shift();{const e=o[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...o)}}function Cf(...o){const t=o.join(" ");t in vx||(vx[t]=!0,ne(...o))}function uE(o,t,e){return new Promise(function(i,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}const fE={[Yp]:jp,[Zp]:Jp,[Kp]:$p,[ko]:Qp,[jp]:Yp,[Jp]:Zp,[$p]:Kp,[Qp]:ko};class tl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const l=s.indexOf(e);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=Math.PI/180,Pm=180/Math.PI;function Rc(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wn[o&255]+Wn[o>>8&255]+Wn[o>>16&255]+Wn[o>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[e&63|128]+Wn[e>>8&255]+"-"+Wn[e>>16&255]+Wn[e>>24&255]+Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]).toLowerCase()}function ve(o,t,e){return Math.max(t,Math.min(e,o))}function hE(o,t){return(o%t+t)%t}function ep(o,t,e){return(1-e)*o+e*t}function tc(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function oi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class xe{constructor(t=0,e=0){xe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),l=this.x-t.x,u=this.y-t.y;return this.x=l*i-u*s+t.x,this.y=l*s+u*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class el{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,l,u,f){let d=i[s+0],h=i[s+1],m=i[s+2],v=i[s+3],_=l[u+0],x=l[u+1],M=l[u+2],b=l[u+3];if(v!==b||d!==_||h!==x||m!==M){let S=d*_+h*x+m*M+v*b;S<0&&(_=-_,x=-x,M=-M,b=-b,S=-S);let y=1-f;if(S<.9995){const E=Math.acos(S),D=Math.sin(E);y=Math.sin(y*E)/D,f=Math.sin(f*E)/D,d=d*y+_*f,h=h*y+x*f,m=m*y+M*f,v=v*y+b*f}else{d=d*y+_*f,h=h*y+x*f,m=m*y+M*f,v=v*y+b*f;const E=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=E,h*=E,m*=E,v*=E}}t[e]=d,t[e+1]=h,t[e+2]=m,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,s,l,u){const f=i[s],d=i[s+1],h=i[s+2],m=i[s+3],v=l[u],_=l[u+1],x=l[u+2],M=l[u+3];return t[e]=f*M+m*v+d*x-h*_,t[e+1]=d*M+m*_+h*v-f*x,t[e+2]=h*M+m*x+f*_-d*v,t[e+3]=m*M-f*v-d*_-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,l=t._z,u=t._order,f=Math.cos,d=Math.sin,h=f(i/2),m=f(s/2),v=f(l/2),_=d(i/2),x=d(s/2),M=d(l/2);switch(u){case"XYZ":this._x=_*m*v+h*x*M,this._y=h*x*v-_*m*M,this._z=h*m*M+_*x*v,this._w=h*m*v-_*x*M;break;case"YXZ":this._x=_*m*v+h*x*M,this._y=h*x*v-_*m*M,this._z=h*m*M-_*x*v,this._w=h*m*v+_*x*M;break;case"ZXY":this._x=_*m*v-h*x*M,this._y=h*x*v+_*m*M,this._z=h*m*M+_*x*v,this._w=h*m*v-_*x*M;break;case"ZYX":this._x=_*m*v-h*x*M,this._y=h*x*v+_*m*M,this._z=h*m*M-_*x*v,this._w=h*m*v+_*x*M;break;case"YZX":this._x=_*m*v+h*x*M,this._y=h*x*v+_*m*M,this._z=h*m*M-_*x*v,this._w=h*m*v-_*x*M;break;case"XZY":this._x=_*m*v-h*x*M,this._y=h*x*v-_*m*M,this._z=h*m*M+_*x*v,this._w=h*m*v+_*x*M;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],l=e[8],u=e[1],f=e[5],d=e[9],h=e[2],m=e[6],v=e[10],_=i+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-s)*x}else if(i>f&&i>v){const x=2*Math.sqrt(1+i-f-v);this._w=(m-d)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(l+h)/x}else if(f>v){const x=2*Math.sqrt(1+f-i-v);this._w=(l-h)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+v-i-f);this._w=(u-s)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,l=t._z,u=t._w,f=e._x,d=e._y,h=e._z,m=e._w;return this._x=i*m+u*f+s*h-l*d,this._y=s*m+u*d+l*f-i*h,this._z=l*m+u*h+i*d-s*f,this._w=u*m-i*f-s*d-l*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,l=t._z,u=t._w,f=this.dot(t);f<0&&(i=-i,s=-s,l=-l,u=-u,f=-f);let d=1-e;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,e=Math.sin(e*h)/m,this._x=this._x*d+i*e,this._y=this._y*d+s*e,this._z=this._z*d+l*e,this._w=this._w*d+u*e,this._onChangeCallback()}else this._x=this._x*d+i*e,this._y=this._y*d+s*e,this._z=this._z*d+l*e,this._w=this._w*d+u*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sx.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sx.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*s,this.y=l[1]*e+l[4]*i+l[7]*s,this.z=l[2]*e+l[5]*i+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,l=t.elements,u=1/(l[3]*e+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*s+l[12])*u,this.y=(l[1]*e+l[5]*i+l[9]*s+l[13])*u,this.z=(l[2]*e+l[6]*i+l[10]*s+l[14])*u,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,l=t.x,u=t.y,f=t.z,d=t.w,h=2*(u*s-f*i),m=2*(f*e-l*s),v=2*(l*i-u*e);return this.x=e+d*h+u*v-f*m,this.y=i+d*m+f*h-l*v,this.z=s+d*v+l*m-u*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*s,this.y=l[1]*e+l[5]*i+l[9]*s,this.z=l[2]*e+l[6]*i+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,l=t.z,u=e.x,f=e.y,d=e.z;return this.x=s*d-l*f,this.y=l*u-i*d,this.z=i*f-s*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return np.copy(this).projectOnVector(t),this.sub(np)}reflect(t){return this.sub(np.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new V,Sx=new el;class de{constructor(t,e,i,s,l,u,f,d,h){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,l,u,f,d,h)}set(t,e,i,s,l,u,f,d,h){const m=this.elements;return m[0]=t,m[1]=s,m[2]=f,m[3]=e,m[4]=l,m[5]=d,m[6]=i,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,l=this.elements,u=i[0],f=i[3],d=i[6],h=i[1],m=i[4],v=i[7],_=i[2],x=i[5],M=i[8],b=s[0],S=s[3],y=s[6],E=s[1],D=s[4],C=s[7],U=s[2],N=s[5],O=s[8];return l[0]=u*b+f*E+d*U,l[3]=u*S+f*D+d*N,l[6]=u*y+f*C+d*O,l[1]=h*b+m*E+v*U,l[4]=h*S+m*D+v*N,l[7]=h*y+m*C+v*O,l[2]=_*b+x*E+M*U,l[5]=_*S+x*D+M*N,l[8]=_*y+x*C+M*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],l=t[3],u=t[4],f=t[5],d=t[6],h=t[7],m=t[8];return e*u*m-e*f*h-i*l*m+i*f*d+s*l*h-s*u*d}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],l=t[3],u=t[4],f=t[5],d=t[6],h=t[7],m=t[8],v=m*u-f*h,_=f*d-m*l,x=h*l-u*d,M=e*v+i*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=v*b,t[1]=(s*h-m*i)*b,t[2]=(f*i-s*u)*b,t[3]=_*b,t[4]=(m*e-s*d)*b,t[5]=(s*l-f*e)*b,t[6]=x*b,t[7]=(i*d-h*e)*b,t[8]=(u*e-i*l)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(i*d,i*h,-i*(d*u+h*f)+u+t,-s*h,s*d,-s*(-h*u+d*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(ip.makeScale(t,e)),this}rotate(t){return this.premultiply(ip.makeRotation(-t)),this}translate(t,e){return this.premultiply(ip.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ip=new de,yx=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mx=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const o={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Fe&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Fe&&(s.r=zo(s.r),s.g=zo(s.g),s.b=zo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fs?Rf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Cf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Cf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[qo]:{primaries:t,whitePoint:i,transfer:Rf,toXYZ:yx,fromXYZ:Mx,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:i,transfer:Fe,toXYZ:yx,fromXYZ:Mx,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),o}const we=dE();function ns(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function zo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let yo;class pE{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{yo===void 0&&(yo=xc("canvas")),yo.width=t.width,yo.height=t.height;const s=yo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=yo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xc("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=ns(l[u]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ns(e[i]/255)*255):e[i]=ns(e[i]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mE=0;class f0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Rc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(ap(s[u].image)):l.push(ap(s[u]))}else l=ap(s);i.url=l}return e||(t.images[this.uuid]=i),i}}function ap(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?pE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let gE=0;const sp=new V;class Hn extends tl{constructor(t=Hn.DEFAULT_IMAGE,e=Hn.DEFAULT_MAPPING,i=ts,s=ts,l=Gn,u=Is,f=Zi,d=wi,h=Hn.DEFAULT_ANISOTROPY,m=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Rc(),this.name="",this.source=new f0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sp).x}get height(){return this.source.getSize(sp).y}get depth(){return this.source.getSize(sp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==VS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tm:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case em:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tm:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case em:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=VS;Hn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,e=0,i=0,s=1){cn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,l=this.w,u=t.elements;return this.x=u[0]*e+u[4]*i+u[8]*s+u[12]*l,this.y=u[1]*e+u[5]*i+u[9]*s+u[13]*l,this.z=u[2]*e+u[6]*i+u[10]*s+u[14]*l,this.w=u[3]*e+u[7]*i+u[11]*s+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,l;const d=t.elements,h=d[0],m=d[4],v=d[8],_=d[1],x=d[5],M=d[9],b=d[2],S=d[6],y=d[10];if(Math.abs(m-_)<.01&&Math.abs(v-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+b)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(h+1)/2,C=(x+1)/2,U=(y+1)/2,N=(m+_)/4,O=(v+b)/4,A=(M+S)/4;return D>C&&D>U?D<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(D),s=N/i,l=O/i):C>U?C<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(C),i=N/s,l=A/s):U<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(U),i=O/l,s=A/l),this.set(i,s,l,e),this}let E=Math.sqrt((S-M)*(S-M)+(v-b)*(v-b)+(_-m)*(_-m));return Math.abs(E)<.001&&(E=1),this.x=(S-M)/E,this.y=(v-b)/E,this.z=(_-m)/E,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _E extends tl{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new cn(0,0,t,e),this.scissorTest=!1,this.viewport=new cn(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},l=new Hn(s),u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new f0(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ba extends _E{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class JS extends Hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends Hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ye{constructor(t,e,i,s,l,u,f,d,h,m,v,_,x,M,b,S){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,l,u,f,d,h,m,v,_,x,M,b,S)}set(t,e,i,s,l,u,f,d,h,m,v,_,x,M,b,S){const y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=s,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=h,y[6]=m,y[10]=v,y[14]=_,y[3]=x,y[7]=M,y[11]=b,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Mo.setFromMatrixColumn(t,0).length(),l=1/Mo.setFromMatrixColumn(t,1).length(),u=1/Mo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*u,e[9]=i[9]*u,e[10]=i[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,l=t.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const _=u*m,x=u*v,M=f*m,b=f*v;e[0]=d*m,e[4]=-d*v,e[8]=h,e[1]=x+M*h,e[5]=_-b*h,e[9]=-f*d,e[2]=b-_*h,e[6]=M+x*h,e[10]=u*d}else if(t.order==="YXZ"){const _=d*m,x=d*v,M=h*m,b=h*v;e[0]=_+b*f,e[4]=M*f-x,e[8]=u*h,e[1]=u*v,e[5]=u*m,e[9]=-f,e[2]=x*f-M,e[6]=b+_*f,e[10]=u*d}else if(t.order==="ZXY"){const _=d*m,x=d*v,M=h*m,b=h*v;e[0]=_-b*f,e[4]=-u*v,e[8]=M+x*f,e[1]=x+M*f,e[5]=u*m,e[9]=b-_*f,e[2]=-u*h,e[6]=f,e[10]=u*d}else if(t.order==="ZYX"){const _=u*m,x=u*v,M=f*m,b=f*v;e[0]=d*m,e[4]=M*h-x,e[8]=_*h+b,e[1]=d*v,e[5]=b*h+_,e[9]=x*h-M,e[2]=-h,e[6]=f*d,e[10]=u*d}else if(t.order==="YZX"){const _=u*d,x=u*h,M=f*d,b=f*h;e[0]=d*m,e[4]=b-_*v,e[8]=M*v+x,e[1]=v,e[5]=u*m,e[9]=-f*m,e[2]=-h*m,e[6]=x*v+M,e[10]=_-b*v}else if(t.order==="XZY"){const _=u*d,x=u*h,M=f*d,b=f*h;e[0]=d*m,e[4]=-v,e[8]=h*m,e[1]=_*v+b,e[5]=u*m,e[9]=x*v-M,e[2]=M*v-x,e[6]=f*m,e[10]=b*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xE,t,SE)}lookAt(t,e,i){const s=this.elements;return Ei.subVectors(t,e),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Ds.crossVectors(i,Ei),Ds.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Ds.crossVectors(i,Ei)),Ds.normalize(),Gu.crossVectors(Ei,Ds),s[0]=Ds.x,s[4]=Gu.x,s[8]=Ei.x,s[1]=Ds.y,s[5]=Gu.y,s[9]=Ei.y,s[2]=Ds.z,s[6]=Gu.z,s[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,l=this.elements,u=i[0],f=i[4],d=i[8],h=i[12],m=i[1],v=i[5],_=i[9],x=i[13],M=i[2],b=i[6],S=i[10],y=i[14],E=i[3],D=i[7],C=i[11],U=i[15],N=s[0],O=s[4],A=s[8],w=s[12],k=s[1],F=s[5],W=s[9],Y=s[13],tt=s[2],Z=s[6],G=s[10],H=s[14],it=s[3],ft=s[7],I=s[11],et=s[15];return l[0]=u*N+f*k+d*tt+h*it,l[4]=u*O+f*F+d*Z+h*ft,l[8]=u*A+f*W+d*G+h*I,l[12]=u*w+f*Y+d*H+h*et,l[1]=m*N+v*k+_*tt+x*it,l[5]=m*O+v*F+_*Z+x*ft,l[9]=m*A+v*W+_*G+x*I,l[13]=m*w+v*Y+_*H+x*et,l[2]=M*N+b*k+S*tt+y*it,l[6]=M*O+b*F+S*Z+y*ft,l[10]=M*A+b*W+S*G+y*I,l[14]=M*w+b*Y+S*H+y*et,l[3]=E*N+D*k+C*tt+U*it,l[7]=E*O+D*F+C*Z+U*ft,l[11]=E*A+D*W+C*G+U*I,l[15]=E*w+D*Y+C*H+U*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],l=t[12],u=t[1],f=t[5],d=t[9],h=t[13],m=t[2],v=t[6],_=t[10],x=t[14],M=t[3],b=t[7],S=t[11],y=t[15],E=d*x-h*_,D=f*x-h*v,C=f*_-d*v,U=u*x-h*m,N=u*_-d*m,O=u*v-f*m;return e*(b*E-S*D+y*C)-i*(M*E-S*U+y*N)+s*(M*D-b*U+y*O)-l*(M*C-b*N+S*O)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],l=t[3],u=t[4],f=t[5],d=t[6],h=t[7],m=t[8],v=t[9],_=t[10],x=t[11],M=t[12],b=t[13],S=t[14],y=t[15],E=e*f-i*u,D=e*d-s*u,C=e*h-l*u,U=i*d-s*f,N=i*h-l*f,O=s*h-l*d,A=m*b-v*M,w=m*S-_*M,k=m*y-x*M,F=v*S-_*b,W=v*y-x*b,Y=_*y-x*S,tt=E*Y-D*W+C*F+U*k-N*w+O*A;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/tt;return t[0]=(f*Y-d*W+h*F)*Z,t[1]=(s*W-i*Y-l*F)*Z,t[2]=(b*O-S*N+y*U)*Z,t[3]=(_*N-v*O-x*U)*Z,t[4]=(d*k-u*Y-h*w)*Z,t[5]=(e*Y-s*k+l*w)*Z,t[6]=(S*C-M*O-y*D)*Z,t[7]=(m*O-_*C+x*D)*Z,t[8]=(u*W-f*k+h*A)*Z,t[9]=(i*k-e*W-l*A)*Z,t[10]=(M*N-b*C+y*E)*Z,t[11]=(v*C-m*N-x*E)*Z,t[12]=(f*w-u*F-d*A)*Z,t[13]=(e*F-i*w+s*A)*Z,t[14]=(b*D-M*U-S*E)*Z,t[15]=(m*U-v*D+_*E)*Z,this}scale(t){const e=this.elements,i=t.x,s=t.y,l=t.z;return e[0]*=i,e[4]*=s,e[8]*=l,e[1]*=i,e[5]*=s,e[9]*=l,e[2]*=i,e[6]*=s,e[10]*=l,e[3]*=i,e[7]*=s,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),l=1-i,u=t.x,f=t.y,d=t.z,h=l*u,m=l*f;return this.set(h*u+i,h*f-s*d,h*d+s*f,0,h*f+s*d,m*f+i,m*d-s*u,0,h*d-s*f,m*d+s*u,l*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,l,u){return this.set(1,i,l,0,t,1,u,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,l=e._x,u=e._y,f=e._z,d=e._w,h=l+l,m=u+u,v=f+f,_=l*h,x=l*m,M=l*v,b=u*m,S=u*v,y=f*v,E=d*h,D=d*m,C=d*v,U=i.x,N=i.y,O=i.z;return s[0]=(1-(b+y))*U,s[1]=(x+C)*U,s[2]=(M-D)*U,s[3]=0,s[4]=(x-C)*N,s[5]=(1-(_+y))*N,s[6]=(S+E)*N,s[7]=0,s[8]=(M+D)*O,s[9]=(S-E)*O,s[10]=(1-(_+b))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const l=this.determinant();if(l===0)return i.set(1,1,1),e.identity(),this;let u=Mo.set(s[0],s[1],s[2]).length();const f=Mo.set(s[4],s[5],s[6]).length(),d=Mo.set(s[8],s[9],s[10]).length();l<0&&(u=-u),aa.copy(this);const h=1/u,m=1/f,v=1/d;return aa.elements[0]*=h,aa.elements[1]*=h,aa.elements[2]*=h,aa.elements[4]*=m,aa.elements[5]*=m,aa.elements[6]*=m,aa.elements[8]*=v,aa.elements[9]*=v,aa.elements[10]*=v,e.setFromRotationMatrix(aa),i.x=u,i.y=f,i.z=d,this}makePerspective(t,e,i,s,l,u,f=Sa,d=!1){const h=this.elements,m=2*l/(e-t),v=2*l/(i-s),_=(e+t)/(e-t),x=(i+s)/(i-s);let M,b;if(d)M=l/(u-l),b=u*l/(u-l);else if(f===Sa)M=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===vc)M=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,l,u,f=Sa,d=!1){const h=this.elements,m=2/(e-t),v=2/(i-s),_=-(e+t)/(e-t),x=-(i+s)/(i-s);let M,b;if(d)M=1/(u-l),b=u/(u-l);else if(f===Sa)M=-2/(u-l),b=-(u+l)/(u-l);else if(f===vc)M=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Mo=new V,aa=new Ye,xE=new V(0,0,0),SE=new V(1,1,1),Ds=new V,Gu=new V,Ei=new V,bx=new Ye,Ex=new el;class wa{constructor(t=0,e=0,i=0,s=wa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,l=s[0],u=s[4],f=s[8],d=s[1],h=s[5],m=s[9],v=s[2],_=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bx,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ex.setFromEuler(this),this.setFromQuaternion(Ex,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wa.DEFAULT_ORDER="XYZ";class $S{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yE=0;const Tx=new V,bo=new el,Ya=new Ye,Hu=new V,ec=new V,ME=new V,bE=new el,Ax=new V(1,0,0),wx=new V(0,1,0),Rx=new V(0,0,1),Cx={type:"added"},EE={type:"removed"},Eo={type:"childadded",child:null},rp={type:"childremoved",child:null};class Tn extends tl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Rc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new V,e=new wa,i=new el,s=new V(1,1,1);function l(){i.setFromEuler(e,!1)}function u(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new de}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $S,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(Ax,t)}rotateY(t){return this.rotateOnAxis(wx,t)}rotateZ(t){return this.rotateOnAxis(Rx,t)}translateOnAxis(t,e){return Tx.copy(t).applyQuaternion(this.quaternion),this.position.add(Tx.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ax,t)}translateY(t){return this.translateOnAxis(wx,t)}translateZ(t){return this.translateOnAxis(Rx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ya.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hu.copy(t):Hu.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ec.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ya.lookAt(ec,Hu,this.up):Ya.lookAt(Hu,ec,this.up),this.quaternion.setFromRotationMatrix(Ya),s&&(Ya.extractRotation(s.matrixWorld),bo.setFromRotationMatrix(Ya),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cx),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(EE),rp.child=t,this.dispatchEvent(rp),rp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cx),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ec,t,ME),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ec,bE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,l=this.matrix.elements;l[12]+=e-l[0]*e-l[4]*i-l[8]*s,l[13]+=i-l[1]*e-l[5]*i-l[9]*s,l[14]+=s-l[2]*e-l[6]*i-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];l(t.shapes,v)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(t.materials,this.material[d]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(t.animations,d))}}if(e){const f=u(t.geometries),d=u(t.materials),h=u(t.textures),m=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),M=u(t.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Tn.DEFAULT_UP=new V(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qe extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){u=!0;for(const b of t.hand.values()){const S=e.getJointPose(b,i),y=this._getHandJoint(h,b);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=m.position.distanceTo(v.position),x=.02,M=.005;h.inputState.pinching&&_>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&_<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new qe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Vu={h:0,s:0,l:0};function lp(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class me{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=i,we.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=we.workingColorSpace){if(t=hE(t,1),e=ve(e,0,1),i=ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,u=2*i-l;this.r=lp(u,l,t+1/3),this.g=lp(u,l,t),this.b=lp(u,l,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=Ln){function i(l){l!==void 0&&parseFloat(l)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(l,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){const i=ty[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}copyLinearToSRGB(t){return this.r=zo(t.r),this.g=zo(t.g),this.b=zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return we.workingToColorSpace(qn.copy(this),t),Math.round(ve(qn.r*255,0,255))*65536+Math.round(ve(qn.g*255,0,255))*256+Math.round(ve(qn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(qn.copy(this),e);const i=qn.r,s=qn.g,l=qn.b,u=Math.max(i,s,l),f=Math.min(i,s,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=m<=.5?v/(u+f):v/(2-u-f),u){case i:d=(s-l)/v+(s<l?6:0);break;case s:d=(l-i)/v+2;break;case l:d=(i-s)/v+4;break}d/=6}return t.h=d,t.s=h,t.l=m,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(qn.copy(this),e),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=Ln){we.workingToColorSpace(qn.copy(this),t);const e=qn.r,i=qn.g,s=qn.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+e,Us.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Us),t.getHSL(Vu);const i=ep(Us.h,Vu.h,e),s=ep(Us.s,Vu.s,e),l=ep(Us.l,Vu.l,e);return this.setHSL(i,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*s,this.g=l[1]*e+l[4]*i+l[7]*s,this.b=l[2]*e+l[5]*i+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new me;me.NAMES=ty;class h0{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(t),this.density=e}clone(){return new h0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class AE extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wa,this.environmentIntensity=1,this.environmentRotation=new wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const sa=new V,ja=new V,cp=new V,Za=new V,To=new V,Ao=new V,Dx=new V,up=new V,fp=new V,hp=new V,dp=new cn,pp=new cn,mp=new cn;class ji{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),sa.subVectors(t,e),s.cross(sa);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,e,i,s,l){sa.subVectors(s,e),ja.subVectors(i,e),cp.subVectors(t,e);const u=sa.dot(sa),f=sa.dot(ja),d=sa.dot(cp),h=ja.dot(ja),m=ja.dot(cp),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(h*d-f*m)*_,M=(u*m-f*d)*_;return l.set(1-x-M,M,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(t,e,i,s,l,u,f,d){return this.getBarycoord(t,e,i,s,Za)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Za.x),d.addScaledVector(u,Za.y),d.addScaledVector(f,Za.z),d)}static getInterpolatedAttribute(t,e,i,s,l,u){return dp.setScalar(0),pp.setScalar(0),mp.setScalar(0),dp.fromBufferAttribute(t,e),pp.fromBufferAttribute(t,i),mp.fromBufferAttribute(t,s),u.setScalar(0),u.addScaledVector(dp,l.x),u.addScaledVector(pp,l.y),u.addScaledVector(mp,l.z),u}static isFrontFacing(t,e,i,s){return sa.subVectors(i,e),ja.subVectors(t,e),sa.cross(ja).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sa.subVectors(this.c,this.b),ja.subVectors(this.a,this.b),sa.cross(ja).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ji.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,l){return ji.getInterpolation(t,this.a,this.b,this.c,e,i,s,l)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,l=this.c;let u,f;To.subVectors(s,i),Ao.subVectors(l,i),up.subVectors(t,i);const d=To.dot(up),h=Ao.dot(up);if(d<=0&&h<=0)return e.copy(i);fp.subVectors(t,s);const m=To.dot(fp),v=Ao.dot(fp);if(m>=0&&v<=m)return e.copy(s);const _=d*v-m*h;if(_<=0&&d>=0&&m<=0)return u=d/(d-m),e.copy(i).addScaledVector(To,u);hp.subVectors(t,l);const x=To.dot(hp),M=Ao.dot(hp);if(M>=0&&x<=M)return e.copy(l);const b=x*h-d*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),e.copy(i).addScaledVector(Ao,f);const S=m*M-x*v;if(S<=0&&v-m>=0&&x-M>=0)return Dx.subVectors(l,s),f=(v-m)/(v-m+(x-M)),e.copy(s).addScaledVector(Dx,f);const y=1/(S+b+_);return u=b*y,f=_*y,e.copy(i).addScaledVector(To,u).addScaledVector(Ao,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Cc{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ra.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ra.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ra.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,ra):ra.fromBufferAttribute(l,u),ra.applyMatrix4(t.matrixWorld),this.expandByPoint(ra);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ku.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ku.copy(i.boundingBox)),ku.applyMatrix4(t.matrixWorld),this.union(ku)}const s=t.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ra),ra.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nc),Xu.subVectors(this.max,nc),wo.subVectors(t.a,nc),Ro.subVectors(t.b,nc),Co.subVectors(t.c,nc),Ls.subVectors(Ro,wo),Ns.subVectors(Co,Ro),_r.subVectors(wo,Co);let e=[0,-Ls.z,Ls.y,0,-Ns.z,Ns.y,0,-_r.z,_r.y,Ls.z,0,-Ls.x,Ns.z,0,-Ns.x,_r.z,0,-_r.x,-Ls.y,Ls.x,0,-Ns.y,Ns.x,0,-_r.y,_r.x,0];return!gp(e,wo,Ro,Co,Xu)||(e=[1,0,0,0,1,0,0,0,1],!gp(e,wo,Ro,Co,Xu))?!1:(Wu.crossVectors(Ls,Ns),e=[Wu.x,Wu.y,Wu.z],gp(e,wo,Ro,Co,Xu))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ra).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ra).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ka),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ka=[new V,new V,new V,new V,new V,new V,new V,new V],ra=new V,ku=new Cc,wo=new V,Ro=new V,Co=new V,Ls=new V,Ns=new V,_r=new V,nc=new V,Xu=new V,Wu=new V,vr=new V;function gp(o,t,e,i,s){for(let l=0,u=o.length-3;l<=u;l+=3){vr.fromArray(o,l);const f=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),d=t.dot(vr),h=e.dot(vr),m=i.dot(vr);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const vn=new V,qu=new xe;let wE=0;class ai{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gx,this.updateRanges=[],this.gpuType=xa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qu.fromBufferAttribute(this,e),qu.applyMatrix3(t),this.setXY(e,qu.x,qu.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix3(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=tc(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tc(e,this.array)),e}setX(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tc(e,this.array)),e}setY(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tc(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tc(e,this.array)),e}setW(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array),s=oi(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,l){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array),s=oi(s,this.array),l=oi(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gx&&(t.usage=this.usage),t}}class ey extends ai{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ny extends ai{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class He extends ai{constructor(t,e,i){super(new Float32Array(t),e,i)}}const RE=new Cc,ic=new V,_p=new V;class Dc{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):RE.setFromPoints(t).getCenter(i);let s=0;for(let l=0,u=t.length;l<u;l++)s=Math.max(s,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ic.subVectors(t,this.center);const e=ic.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ic,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_p.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ic.copy(t.center).add(_p)),this.expandByPoint(ic.copy(t.center).sub(_p))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let CE=0;const Wi=new Ye,vp=new Tn,Do=new V,Ti=new Cc,ac=new Cc,Un=new V;class Sn extends tl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Rc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lE(t)?ny:ey)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new de().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wi.makeRotationFromQuaternion(t),this.applyMatrix4(Wi),this}rotateX(t){return Wi.makeRotationX(t),this.applyMatrix4(Wi),this}rotateY(t){return Wi.makeRotationY(t),this.applyMatrix4(Wi),this}rotateZ(t){return Wi.makeRotationZ(t),this.applyMatrix4(Wi),this}translate(t,e,i){return Wi.makeTranslation(t,e,i),this.applyMatrix4(Wi),this}scale(t,e,i){return Wi.makeScale(t,e,i),this.applyMatrix4(Wi),this}lookAt(t){return vp.lookAt(t),vp.updateMatrix(),this.applyMatrix4(vp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,l=t.length;s<l;s++){const u=t[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new He(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const l=t[s];e.setXYZ(s,l.x,l.y,l.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const l=e[i];Ti.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let l=0,u=e.length;l<u;l++){const f=e[l];ac.setFromBufferAttribute(f),this.morphTargetsRelative?(Un.addVectors(Ti.min,ac.min),Ti.expandByPoint(Un),Un.addVectors(Ti.max,ac.max),Ti.expandByPoint(Un)):(Ti.expandByPoint(ac.min),Ti.expandByPoint(ac.max))}Ti.getCenter(i);let s=0;for(let l=0,u=t.count;l<u;l++)Un.fromBufferAttribute(t,l),s=Math.max(s,i.distanceToSquared(Un));if(e)for(let l=0,u=e.length;l<u;l++){const f=e[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Un.fromBufferAttribute(f,h),d&&(Do.fromBufferAttribute(t,h),Un.add(Do)),s=Math.max(s,i.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let A=0;A<i.count;A++)f[A]=new V,d[A]=new V;const h=new V,m=new V,v=new V,_=new xe,x=new xe,M=new xe,b=new V,S=new V;function y(A,w,k){h.fromBufferAttribute(i,A),m.fromBufferAttribute(i,w),v.fromBufferAttribute(i,k),_.fromBufferAttribute(l,A),x.fromBufferAttribute(l,w),M.fromBufferAttribute(l,k),m.sub(h),v.sub(h),x.sub(_),M.sub(_);const F=1/(x.x*M.y-M.x*x.y);isFinite(F)&&(b.copy(m).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(F),S.copy(v).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(F),f[A].add(b),f[w].add(b),f[k].add(b),d[A].add(S),d[w].add(S),d[k].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let A=0,w=E.length;A<w;++A){const k=E[A],F=k.start,W=k.count;for(let Y=F,tt=F+W;Y<tt;Y+=3)y(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const D=new V,C=new V,U=new V,N=new V;function O(A){U.fromBufferAttribute(s,A),N.copy(U);const w=f[A];D.copy(w),D.sub(U.multiplyScalar(U.dot(w))).normalize(),C.crossVectors(N,w);const F=C.dot(d[A])<0?-1:1;u.setXYZW(A,D.x,D.y,D.z,F)}for(let A=0,w=E.length;A<w;++A){const k=E[A],F=k.start,W=k.count;for(let Y=F,tt=F+W;Y<tt;Y+=3)O(t.getX(Y+0)),O(t.getX(Y+1)),O(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new V,l=new V,u=new V,f=new V,d=new V,h=new V,m=new V,v=new V;if(t)for(let _=0,x=t.count;_<x;_+=3){const M=t.getX(_+0),b=t.getX(_+1),S=t.getX(_+2);s.fromBufferAttribute(e,M),l.fromBufferAttribute(e,b),u.fromBufferAttribute(e,S),m.subVectors(u,l),v.subVectors(s,l),m.cross(v),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),f.add(m),d.add(m),h.add(m),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(b,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,x=e.count;_<x;_+=3)s.fromBufferAttribute(e,_+0),l.fromBufferAttribute(e,_+1),u.fromBufferAttribute(e,_+2),m.subVectors(u,l),v.subVectors(s,l),m.cross(v),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Un.fromBufferAttribute(t,e),Un.normalize(),t.setXYZ(e,Un.x,Un.y,Un.z)}toNonIndexed(){function t(f,d){const h=f.array,m=f.itemSize,v=f.normalized,_=new h.constructor(d.length*m);let x=0,M=0;for(let b=0,S=d.length;b<S;b++){f.isInterleavedBufferAttribute?x=d[b]*f.data.stride+f.offset:x=d[b]*m;for(let y=0;y<m;y++)_[M++]=h[x++]}return new ai(_,m,v)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Sn,i=this.index.array,s=this.attributes;for(const f in s){const d=s[f],h=t(d,i);e.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const _=h[m],x=t(_,i);d.push(x)}e.morphAttributes[f]=d}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(t[h]=d[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const h=i[d];t.data.attributes[d]=h.toJSON(t.data)}const s={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,_=h.length;v<_;v++){const x=h[v];m.push(x.toJSON(t.data))}m.length>0&&(s[d]=m,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(e))}const l=t.morphAttributes;for(const h in l){const m=[],v=l[h];for(let _=0,x=v.length;_<x;_++)m.push(v[_].clone(e));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let h=0,m=u.length;h<m;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DE=0;class zr extends tl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Rc(),this.name="",this.type="Material",this.blending=Ur,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wp,this.blendDst=qp,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(i.blending=this.blending),this.side!==Xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wp&&(i.blendSrc=this.blendSrc),this.blendDst!==qp&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(i.stencilFail=this.stencilFail),this.stencilZFail!==So&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(e){const l=s(t.textures),u=s(t.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qa=new V,xp=new V,Yu=new V,Ps=new V,Sp=new V,ju=new V,yp=new V;class d0{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qa)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qa.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qa.copy(this.origin).addScaledVector(this.direction,e),Qa.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){xp.copy(t).add(e).multiplyScalar(.5),Yu.copy(e).sub(t).normalize(),Ps.copy(this.origin).sub(xp);const l=t.distanceTo(e)*.5,u=-this.direction.dot(Yu),f=Ps.dot(this.direction),d=-Ps.dot(Yu),h=Ps.lengthSq(),m=Math.abs(1-u*u);let v,_,x,M;if(m>0)if(v=u*d-f,_=u*f-d,M=l*m,v>=0)if(_>=-M)if(_<=M){const b=1/m;v*=b,_*=b,x=v*(v+u*_+2*f)+_*(u*v+_+2*d)+h}else _=l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*d)+h;else _=-l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*d)+h;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),x=-v*v+_*(_+2*d)+h):_<=M?(v=0,_=Math.min(Math.max(-l,-d),l),x=_*(_+2*d)+h):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),x=-v*v+_*(_+2*d)+h);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(xp).addScaledVector(Yu,_),x}intersectSphere(t,e){Qa.subVectors(t.center,this.origin);const i=Qa.dot(this.direction),s=Qa.dot(Qa)-i*i,l=t.radius*t.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(i=(t.min.x-_.x)*h,s=(t.max.x-_.x)*h):(i=(t.max.x-_.x)*h,s=(t.min.x-_.x)*h),m>=0?(l=(t.min.y-_.y)*m,u=(t.max.y-_.y)*m):(l=(t.max.y-_.y)*m,u=(t.min.y-_.y)*m),i>u||l>s||((l>i||isNaN(i))&&(i=l),(u<s||isNaN(s))&&(s=u),v>=0?(f=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),i>d||f>s)||((f>i||i!==i)&&(i=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qa)!==null}intersectTriangle(t,e,i,s,l){Sp.subVectors(e,t),ju.subVectors(i,t),yp.crossVectors(Sp,ju);let u=this.direction.dot(yp),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ps.subVectors(this.origin,t);const d=f*this.direction.dot(ju.crossVectors(Ps,ju));if(d<0)return null;const h=f*this.direction.dot(Sp.cross(Ps));if(h<0||d+h>u)return null;const m=-f*Ps.dot(yp);return m<0?null:this.at(m/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ea extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wa,this.combine=OS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ux=new Ye,xr=new d0,Zu=new Dc,Lx=new V,Ku=new V,Qu=new V,Ju=new V,Mp=new V,$u=new V,Nx=new V,tf=new V;class Ft extends Tn{constructor(t=new Sn,e=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){$u.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],v=l[d];m!==0&&(Mp.fromBufferAttribute(v,t),u?$u.addScaledVector(Mp,m):$u.addScaledVector(Mp.sub(e),m))}e.add($u)}return e}raycast(t,e){const i=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zu.copy(i.boundingSphere),Zu.applyMatrix4(l),xr.copy(t.ray).recast(t.near),!(Zu.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Zu,Lx)===null||xr.origin.distanceToSquared(Lx)>(t.far-t.near)**2))&&(Ux.copy(l).invert(),xr.copy(t.ray).applyMatrix4(Ux),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xr)))}_computeIntersections(t,e,i){let s;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],y=u[S.materialIndex],E=Math.max(S.start,x.start),D=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=E,U=D;C<U;C+=3){const N=f.getX(C),O=f.getX(C+1),A=f.getX(C+2);s=ef(this,y,t,i,h,m,v,N,O,A),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{const M=Math.max(0,x.start),b=Math.min(f.count,x.start+x.count);for(let S=M,y=b;S<y;S+=3){const E=f.getX(S),D=f.getX(S+1),C=f.getX(S+2);s=ef(this,u,t,i,h,m,v,E,D,C),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],y=u[S.materialIndex],E=Math.max(S.start,x.start),D=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=E,U=D;C<U;C+=3){const N=C,O=C+1,A=C+2;s=ef(this,y,t,i,h,m,v,N,O,A),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{const M=Math.max(0,x.start),b=Math.min(d.count,x.start+x.count);for(let S=M,y=b;S<y;S+=3){const E=S,D=S+1,C=S+2;s=ef(this,u,t,i,h,m,v,E,D,C),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}}}function UE(o,t,e,i,s,l,u,f){let d;if(t.side===ci?d=i.intersectTriangle(u,l,s,!0,f):d=i.intersectTriangle(s,l,u,t.side===Xs,f),d===null)return null;tf.copy(f),tf.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(tf);return h<e.near||h>e.far?null:{distance:h,point:tf.clone(),object:o}}function ef(o,t,e,i,s,l,u,f,d,h){o.getVertexPosition(f,Ku),o.getVertexPosition(d,Qu),o.getVertexPosition(h,Ju);const m=UE(o,t,e,i,Ku,Qu,Ju,Nx);if(m){const v=new V;ji.getBarycoord(Nx,Ku,Qu,Ju,v),s&&(m.uv=ji.getInterpolatedAttribute(s,f,d,h,v,new xe)),l&&(m.uv1=ji.getInterpolatedAttribute(l,f,d,h,v,new xe)),u&&(m.normal=ji.getInterpolatedAttribute(u,f,d,h,v,new V),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:h,normal:new V,materialIndex:0};ji.getNormal(Ku,Qu,Ju,_.normal),m.face=_,m.barycoord=v}return m}class iy extends Hn{constructor(t=null,e=1,i=1,s,l,u,f,d,h=Bn,m=Bn,v,_){super(null,u,f,d,h,m,s,l,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bp=new V,LE=new V,NE=new de;class Tr{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=bp.subVectors(i,e).cross(LE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(bp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||NE.getNormalMatrix(t),s=this.coplanarPoint(bp).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Dc,PE=new xe(.5,.5),nf=new V;class p0{constructor(t=new Tr,e=new Tr,i=new Tr,s=new Tr,l=new Tr,u=new Tr){this.planes=[t,e,i,s,l,u]}set(t,e,i,s,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Sa,i=!1){const s=this.planes,l=t.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],v=l[5],_=l[6],x=l[7],M=l[8],b=l[9],S=l[10],y=l[11],E=l[12],D=l[13],C=l[14],U=l[15];if(s[0].setComponents(h-u,x-m,y-M,U-E).normalize(),s[1].setComponents(h+u,x+m,y+M,U+E).normalize(),s[2].setComponents(h+f,x+v,y+b,U+D).normalize(),s[3].setComponents(h-f,x-v,y-b,U-D).normalize(),i)s[4].setComponents(d,_,S,C).normalize(),s[5].setComponents(h-d,x-_,y-S,U-C).normalize();else if(s[4].setComponents(h-d,x-_,y-S,U-C).normalize(),e===Sa)s[5].setComponents(h+d,x+_,y+S,U+C).normalize();else if(e===vc)s[5].setComponents(d,_,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){Sr.center.set(0,0,0);const e=PE.distanceTo(t.center);return Sr.radius=.7071067811865476+e,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(nf.x=s.normal.x>0?t.max.x:t.min.x,nf.y=s.normal.y>0?t.max.y:t.min.y,nf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nf)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ay extends zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Df=new V,Uf=new V,Px=new Ye,sc=new d0,af=new Dc,Ep=new V,Ox=new V;class OE extends Tn{constructor(t=new Sn,e=new ay){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,l=e.count;s<l;s++)Df.fromBufferAttribute(e,s-1),Uf.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Df.distanceTo(Uf);t.setAttribute("lineDistance",new He(i,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,l=t.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),af.copy(i.boundingSphere),af.applyMatrix4(s),af.radius+=l,t.ray.intersectsSphere(af)===!1)return;Px.copy(s).invert(),sc.copy(t.ray).applyMatrix4(Px);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let b=x,S=M-1;b<S;b+=h){const y=m.getX(b),E=m.getX(b+1),D=sf(this,t,sc,d,y,E,b);D&&e.push(D)}if(this.isLineLoop){const b=m.getX(M-1),S=m.getX(x),y=sf(this,t,sc,d,b,S,M-1);y&&e.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let b=x,S=M-1;b<S;b+=h){const y=sf(this,t,sc,d,b,b+1,b);y&&e.push(y)}if(this.isLineLoop){const b=sf(this,t,sc,d,M-1,x,M-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function sf(o,t,e,i,s,l,u){const f=o.geometry.attributes.position;if(Df.fromBufferAttribute(f,s),Uf.fromBufferAttribute(f,l),e.distanceSqToSegment(Df,Uf,Ep,Ox)>i)return;Ep.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Ep);if(!(h<t.near||h>t.far))return{distance:h,point:Ox.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Fx=new V,Ix=new V;class FE extends OE{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,l=e.count;s<l;s+=2)Fx.fromBufferAttribute(e,s),Ix.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Fx.distanceTo(Ix);t.setAttribute("lineDistance",new He(i,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class IE extends zr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zx=new Ye,Om=new d0,rf=new Dc,of=new V;class zE extends Tn{constructor(t=new Sn,e=new IE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,l=t.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rf.copy(i.boundingSphere),rf.applyMatrix4(s),rf.radius+=l,t.ray.intersectsSphere(rf)===!1)return;zx.copy(s).invert(),Om.copy(t.ray).applyMatrix4(zx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,v=i.attributes.position;if(h!==null){const _=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let M=_,b=x;M<b;M++){const S=h.getX(M);of.fromBufferAttribute(v,S),Bx(of,S,d,s,t,e,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=_,b=x;M<b;M++)of.fromBufferAttribute(v,M),Bx(of,M,d,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Bx(o,t,e,i,s,l,u){const f=Om.distanceSqToPoint(o);if(f<e){const d=new V;Om.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class sy extends Hn{constructor(t=[],e=Fr,i,s,l,u,f,d,h,m){super(t,e,i,s,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fm extends Hn{constructor(t,e,i,s,l,u,f,d,h){super(t,e,i,s,l,u,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sc extends Hn{constructor(t,e,i=Aa,s,l,u,f=Bn,d=Bn,h,m=as,v=1){if(m!==as&&m!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:v};super(_,s,l,u,f,d,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new f0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class BE extends Sc{constructor(t,e=Aa,i=Fr,s,l,u=Bn,f=Bn,d,h=as){const m={width:t,height:t,depth:1},v=[m,m,m,m,m,m];super(t,t,e,i,s,l,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ry extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sn extends Sn{constructor(t=1,e=1,i=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],v=[];let _=0,x=0;M("z","y","x",-1,-1,i,e,t,u,l,0),M("z","y","x",1,-1,i,e,-t,u,l,1),M("x","z","y",1,1,t,i,e,s,u,2),M("x","z","y",1,-1,t,i,-e,s,u,3),M("x","y","z",1,-1,t,e,i,s,l,4),M("x","y","z",-1,-1,t,e,-i,s,l,5),this.setIndex(d),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(m,3)),this.setAttribute("uv",new He(v,2));function M(b,S,y,E,D,C,U,N,O,A,w){const k=C/O,F=U/A,W=C/2,Y=U/2,tt=N/2,Z=O+1,G=A+1;let H=0,it=0;const ft=new V;for(let I=0;I<G;I++){const et=I*F-Y;for(let ht=0;ht<Z;ht++){const bt=ht*k-W;ft[b]=bt*E,ft[S]=et*D,ft[y]=tt,h.push(ft.x,ft.y,ft.z),ft[b]=0,ft[S]=0,ft[y]=N>0?1:-1,m.push(ft.x,ft.y,ft.z),v.push(ht/O),v.push(1-I/A),H+=1}}for(let I=0;I<A;I++)for(let et=0;et<O;et++){const ht=_+et+Z*I,bt=_+et+Z*(I+1),vt=_+(et+1)+Z*(I+1),Ot=_+(et+1)+Z*I;d.push(ht,bt,Ot),d.push(bt,vt,Ot),it+=6}f.addGroup(x,it,w),x+=it,_+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Uc extends Sn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const l=[],u=[],f=[],d=[],h=new V,m=new xe;u.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let v=0,_=3;v<=e;v++,_+=3){const x=i+v/e*s;h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.push(h.x,h.y,h.z),f.push(0,0,1),m.x=(u[_]/t+1)/2,m.y=(u[_+1]/t+1)/2,d.push(m.x,m.y)}for(let v=1;v<=e;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ui extends Sn{constructor(t=1,e=1,i=1,s=32,l=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:d};const h=this;s=Math.floor(s),l=Math.floor(l);const m=[],v=[],_=[],x=[];let M=0;const b=[],S=i/2;let y=0;E(),u===!1&&(t>0&&D(!0),e>0&&D(!1)),this.setIndex(m),this.setAttribute("position",new He(v,3)),this.setAttribute("normal",new He(_,3)),this.setAttribute("uv",new He(x,2));function E(){const C=new V,U=new V;let N=0;const O=(e-t)/i;for(let A=0;A<=l;A++){const w=[],k=A/l,F=k*(e-t)+t;for(let W=0;W<=s;W++){const Y=W/s,tt=Y*d+f,Z=Math.sin(tt),G=Math.cos(tt);U.x=F*Z,U.y=-k*i+S,U.z=F*G,v.push(U.x,U.y,U.z),C.set(Z,O,G).normalize(),_.push(C.x,C.y,C.z),x.push(Y,1-k),w.push(M++)}b.push(w)}for(let A=0;A<s;A++)for(let w=0;w<l;w++){const k=b[w][A],F=b[w+1][A],W=b[w+1][A+1],Y=b[w][A+1];(t>0||w!==0)&&(m.push(k,F,Y),N+=3),(e>0||w!==l-1)&&(m.push(F,W,Y),N+=3)}h.addGroup(y,N,0),y+=N}function D(C){const U=M,N=new xe,O=new V;let A=0;const w=C===!0?t:e,k=C===!0?1:-1;for(let W=1;W<=s;W++)v.push(0,S*k,0),_.push(0,k,0),x.push(.5,.5),M++;const F=M;for(let W=0;W<=s;W++){const tt=W/s*d+f,Z=Math.cos(tt),G=Math.sin(tt);O.x=w*G,O.y=S*k,O.z=w*Z,v.push(O.x,O.y,O.z),_.push(0,k,0),N.x=Z*.5+.5,N.y=G*.5*k+.5,x.push(N.x,N.y),M++}for(let W=0;W<s;W++){const Y=U+W,tt=F+W;C===!0?m.push(tt,tt+1,Y):m.push(tt+1,tt,Y),A+=3}h.addGroup(y,A,C===!0?1:2),y+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ir extends ui{constructor(t=1,e=1,i=32,s=1,l=!1,u=0,f=Math.PI*2){super(0,t,e,i,s,l,u,f),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(t){return new Ir(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class m0 extends Sn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const l=[],u=[];f(s),h(i),m(),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(l.slice(),3)),this.setAttribute("uv",new He(u,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function f(E){const D=new V,C=new V,U=new V;for(let N=0;N<e.length;N+=3)x(e[N+0],D),x(e[N+1],C),x(e[N+2],U),d(D,C,U,E)}function d(E,D,C,U){const N=U+1,O=[];for(let A=0;A<=N;A++){O[A]=[];const w=E.clone().lerp(C,A/N),k=D.clone().lerp(C,A/N),F=N-A;for(let W=0;W<=F;W++)W===0&&A===N?O[A][W]=w:O[A][W]=w.clone().lerp(k,W/F)}for(let A=0;A<N;A++)for(let w=0;w<2*(N-A)-1;w++){const k=Math.floor(w/2);w%2===0?(_(O[A][k+1]),_(O[A+1][k]),_(O[A][k])):(_(O[A][k+1]),_(O[A+1][k+1]),_(O[A+1][k]))}}function h(E){const D=new V;for(let C=0;C<l.length;C+=3)D.x=l[C+0],D.y=l[C+1],D.z=l[C+2],D.normalize().multiplyScalar(E),l[C+0]=D.x,l[C+1]=D.y,l[C+2]=D.z}function m(){const E=new V;for(let D=0;D<l.length;D+=3){E.x=l[D+0],E.y=l[D+1],E.z=l[D+2];const C=S(E)/2/Math.PI+.5,U=y(E)/Math.PI+.5;u.push(C,1-U)}M(),v()}function v(){for(let E=0;E<u.length;E+=6){const D=u[E+0],C=u[E+2],U=u[E+4],N=Math.max(D,C,U),O=Math.min(D,C,U);N>.9&&O<.1&&(D<.2&&(u[E+0]+=1),C<.2&&(u[E+2]+=1),U<.2&&(u[E+4]+=1))}}function _(E){l.push(E.x,E.y,E.z)}function x(E,D){const C=E*3;D.x=t[C+0],D.y=t[C+1],D.z=t[C+2]}function M(){const E=new V,D=new V,C=new V,U=new V,N=new xe,O=new xe,A=new xe;for(let w=0,k=0;w<l.length;w+=9,k+=6){E.set(l[w+0],l[w+1],l[w+2]),D.set(l[w+3],l[w+4],l[w+5]),C.set(l[w+6],l[w+7],l[w+8]),N.set(u[k+0],u[k+1]),O.set(u[k+2],u[k+3]),A.set(u[k+4],u[k+5]),U.copy(E).add(D).add(C).divideScalar(3);const F=S(U);b(N,k+0,E,F),b(O,k+2,D,F),b(A,k+4,C,F)}}function b(E,D,C,U){U<0&&E.x===1&&(u[D]=E.x-1),C.x===0&&C.z===0&&(u[D]=U/2/Math.PI+.5)}function S(E){return Math.atan2(E.z,-E.x)}function y(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new m0(t.vertices,t.indices,t.radius,t.detail)}}const lf=new V,cf=new V,Tp=new V,uf=new ji;class GE extends Sn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),l=Math.cos(bf*e),u=t.getIndex(),f=t.getAttribute("position"),d=u?u.count:f.count,h=[0,0,0],m=["a","b","c"],v=new Array(3),_={},x=[];for(let M=0;M<d;M+=3){u?(h[0]=u.getX(M),h[1]=u.getX(M+1),h[2]=u.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:b,b:S,c:y}=uf;if(b.fromBufferAttribute(f,h[0]),S.fromBufferAttribute(f,h[1]),y.fromBufferAttribute(f,h[2]),uf.getNormal(Tp),v[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,v[1]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,v[2]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let E=0;E<3;E++){const D=(E+1)%3,C=v[E],U=v[D],N=uf[m[E]],O=uf[m[D]],A=`${C}_${U}`,w=`${U}_${C}`;w in _&&_[w]?(Tp.dot(_[w].normal)<=l&&(x.push(N.x,N.y,N.z),x.push(O.x,O.y,O.z)),_[w]=null):A in _||(_[A]={index0:h[E],index1:h[D],normal:Tp.clone()})}}for(const M in _)if(_[M]){const{index0:b,index1:S}=_[M];lf.fromBufferAttribute(f,b),cf.fromBufferAttribute(f,S),x.push(lf.x,lf.y,lf.z),x.push(cf.x,cf.y,cf.z)}this.setAttribute("position",new He(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class HE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),l=0;e.push(0);for(let u=1;u<=t;u++)i=this.getPoint(u/t),l+=i.distanceTo(s),e.push(l),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const l=i.length;let u;e?u=e:u=t*i[l-1];let f=0,d=l-1,h;for(;f<=d;)if(s=Math.floor(f+(d-f)/2),h=i[s]-u,h<0)f=s+1;else if(h>0)d=s-1;else{d=s;break}if(s=d,i[s]===u)return s/(l-1);const m=i[s],_=i[s+1]-m,x=(u-m)/_;return(s+x)/(l-1)}getTangent(t,e){let s=t-1e-4,l=t+1e-4;s<0&&(s=0),l>1&&(l=1);const u=this.getPoint(s),f=this.getPoint(l),d=e||(u.isVector2?new xe:new V);return d.copy(f).sub(u).normalize(),d}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new V,s=[],l=[],u=[],f=new V,d=new Ye;for(let x=0;x<=t;x++){const M=x/t;s[x]=this.getTangentAt(M,new V)}l[0]=new V,u[0]=new V;let h=Number.MAX_VALUE;const m=Math.abs(s[0].x),v=Math.abs(s[0].y),_=Math.abs(s[0].z);m<=h&&(h=m,i.set(1,0,0)),v<=h&&(h=v,i.set(0,1,0)),_<=h&&i.set(0,0,1),f.crossVectors(s[0],i).normalize(),l[0].crossVectors(s[0],f),u[0].crossVectors(s[0],l[0]);for(let x=1;x<=t;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(s[x-1],s[x]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(ve(s[x-1].dot(s[x]),-1,1));l[x].applyMatrix4(d.makeRotationAxis(f,M))}u[x].crossVectors(s[x],l[x])}if(e===!0){let x=Math.acos(ve(l[0].dot(l[t]),-1,1));x/=t,s[0].dot(f.crossVectors(l[0],l[t]))>0&&(x=-x);for(let M=1;M<=t;M++)l[M].applyMatrix4(d.makeRotationAxis(s[M],x*M)),u[M].crossVectors(s[M],l[M])}return{tangents:s,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function g0(){let o=0,t=0,e=0,i=0;function s(l,u,f,d){o=l,t=f,e=-3*l+3*u-2*f-d,i=2*l-2*u+f+d}return{initCatmullRom:function(l,u,f,d,h){s(u,f,h*(f-l),h*(d-u))},initNonuniformCatmullRom:function(l,u,f,d,h,m,v){let _=(u-l)/h-(f-l)/(h+m)+(f-u)/m,x=(f-u)/m-(d-u)/(m+v)+(d-f)/v;_*=m,x*=m,s(u,f,_,x)},calc:function(l){const u=l*l,f=u*l;return o+t*l+e*u+i*f}}}const ff=new V,Ap=new g0,wp=new g0,Rp=new g0;class VE extends HE{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new V){const i=e,s=this.points,l=s.length,u=(l-(this.closed?0:1))*t;let f=Math.floor(u),d=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,m;this.closed||f>0?h=s[(f-1)%l]:(ff.subVectors(s[0],s[1]).add(s[0]),h=ff);const v=s[f%l],_=s[(f+1)%l];if(this.closed||f+2<l?m=s[(f+2)%l]:(ff.subVectors(s[l-1],s[l-2]).add(s[l-1]),m=ff),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(v),x),b=Math.pow(v.distanceToSquared(_),x),S=Math.pow(_.distanceToSquared(m),x);b<1e-4&&(b=1),M<1e-4&&(M=b),S<1e-4&&(S=b),Ap.initNonuniformCatmullRom(h.x,v.x,_.x,m.x,M,b,S),wp.initNonuniformCatmullRom(h.y,v.y,_.y,m.y,M,b,S),Rp.initNonuniformCatmullRom(h.z,v.z,_.z,m.z,M,b,S)}else this.curveType==="catmullrom"&&(Ap.initCatmullRom(h.x,v.x,_.x,m.x,this.tension),wp.initCatmullRom(h.y,v.y,_.y,m.y,this.tension),Rp.initCatmullRom(h.z,v.z,_.z,m.z,this.tension));return i.set(Ap.calc(d),wp.calc(d),Rp.calc(d)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class _0 extends m0{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _0(t.radius,t.detail)}}class js extends Sn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const l=t/2,u=e/2,f=Math.floor(i),d=Math.floor(s),h=f+1,m=d+1,v=t/f,_=e/d,x=[],M=[],b=[],S=[];for(let y=0;y<m;y++){const E=y*_-u;for(let D=0;D<h;D++){const C=D*v-l;M.push(C,-E,0),b.push(0,0,1),S.push(D/f),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let E=0;E<f;E++){const D=E+h*y,C=E+h*(y+1),U=E+1+h*(y+1),N=E+1+h*y;x.push(D,C,N),x.push(C,U,N)}this.setIndex(x),this.setAttribute("position",new He(M,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.width,t.height,t.widthSegments,t.heightSegments)}}class oa extends Sn{constructor(t=1,e=32,i=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const d=Math.min(u+f,Math.PI);let h=0;const m=[],v=new V,_=new V,x=[],M=[],b=[],S=[];for(let y=0;y<=i;y++){const E=[],D=y/i;let C=0;y===0&&u===0?C=.5/e:y===i&&d===Math.PI&&(C=-.5/e);for(let U=0;U<=e;U++){const N=U/e;v.x=-t*Math.cos(s+N*l)*Math.sin(u+D*f),v.y=t*Math.cos(u+D*f),v.z=t*Math.sin(s+N*l)*Math.sin(u+D*f),M.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),S.push(N+C,1-D),E.push(h++)}m.push(E)}for(let y=0;y<i;y++)for(let E=0;E<e;E++){const D=m[y][E+1],C=m[y][E],U=m[y+1][E],N=m[y+1][E+1];(y!==0||u>0)&&x.push(D,C,N),(y!==i-1||d<Math.PI)&&x.push(C,U,N)}this.setIndex(x),this.setAttribute("position",new He(M,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hf extends Sn{constructor(t=1,e=.4,i=12,s=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:l,thetaStart:u,thetaLength:f},i=Math.floor(i),s=Math.floor(s);const d=[],h=[],m=[],v=[],_=new V,x=new V,M=new V;for(let b=0;b<=i;b++){const S=u+b/i*f;for(let y=0;y<=s;y++){const E=y/s*l;x.x=(t+e*Math.cos(S))*Math.cos(E),x.y=(t+e*Math.cos(S))*Math.sin(E),x.z=e*Math.sin(S),h.push(x.x,x.y,x.z),_.x=t*Math.cos(E),_.y=t*Math.sin(E),M.subVectors(x,_).normalize(),m.push(M.x,M.y,M.z),v.push(y/s),v.push(b/i)}}for(let b=1;b<=i;b++)for(let S=1;S<=s;S++){const y=(s+1)*b+S-1,E=(s+1)*(b-1)+S-1,D=(s+1)*(b-1)+S,C=(s+1)*b+S;d.push(y,E,C),d.push(E,D,C)}this.setIndex(d),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(m,3)),this.setAttribute("uv",new He(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Yo(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const s=o[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ni(o){const t={};for(let e=0;e<o.length;e++){const i=Yo(o[e]);for(const s in i)t[s]=i[s]}return t}function kE(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function oy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const XE={clone:Yo,merge:ni};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yo(t.uniforms),this.uniformsGroups=kE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?e.uniforms[s]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[s]={type:"m4",value:u.toArray()}:e.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class YE extends la{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nn extends zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=KS,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ly extends Nn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class jE extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZE extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cp={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(Gx(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!Gx(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Gx(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class cy{constructor(t,e,i){const s=this;let l=!1,u=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(m){f++,l===!1&&s.onStart!==void 0&&s.onStart(m,u,f),l=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return h.push(m,v),this},this.removeHandler=function(m){const v=h.indexOf(m);return v!==-1&&h.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=h.length;v<_;v+=2){const x=h[v],M=h[v+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const KE=new cy;class v0{constructor(t){this.manager=t!==void 0?t:KE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,l){i.load(t,s,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}v0.DEFAULT_MATERIAL_NAME="__DEFAULT";const Uo=new WeakMap;class QE extends v0{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,u=Cp.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(t),setTimeout(function(){e&&e(u),l.manager.itemEnd(t)},0);else{let v=Uo.get(u);v===void 0&&(v=[],Uo.set(u,v)),v.push({onLoad:e,onError:s})}return u}const f=xc("img");function d(){m(),e&&e(this);const v=Uo.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onLoad&&x.onLoad(this)}Uo.delete(this),l.manager.itemEnd(t)}function h(v){m(),s&&s(v),Cp.remove(`image:${t}`);const _=Uo.get(this)||[];for(let x=0;x<_.length;x++){const M=_[x];M.onError&&M.onError(v)}Uo.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Cp.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class x0 extends v0{constructor(t){super(t)}load(t,e,i,s){const l=new Hn,u=new QE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(f){l.image=f,l.needsUpdate=!0,e!==void 0&&e(l)},i,s),l}}class S0 extends Tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class JE extends S0{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Dp=new Ye,Hx=new V,Vx=new V;class $E{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new p0,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Hx.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hx),Vx.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vx),e.updateMatrixWorld(),Dp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dp,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===vc||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hf=new V,df=new el,pa=new V;class uy extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(hf,df,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hf,df,pa.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(hf,df,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hf,df,pa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Os=new V,kx=new xe,Xx=new xe;class Yi extends uy{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pm*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pm*2*Math.atan(Math.tan(bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Os.x,Os.y).multiplyScalar(-t/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Os.x,Os.y).multiplyScalar(-t/Os.z)}getViewSize(t,e){return this.getViewBounds(t,kx,Xx),e.subVectors(Xx,kx)}setViewOffset(t,e,i,s,l,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bf*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*s/d,e-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class y0 extends uy{constructor(t=-1,e=1,i=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-t,u=i+t,f=s+e,d=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class tT extends $E{constructor(){super(new y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wx extends S0{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new tT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class eT extends S0{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Lo=-90,No=1;class nT extends Tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yi(Lo,No,t,e);s.layers=this.layers,this.add(s);const l=new Yi(Lo,No,t,e);l.layers=this.layers,this.add(l);const u=new Yi(Lo,No,t,e);u.layers=this.layers,this.add(u);const f=new Yi(Lo,No,t,e);f.layers=this.layers,this.add(f);const d=new Yi(Lo,No,t,e);d.layers=this.layers,this.add(d);const h=new Yi(Lo,No,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,l,u,f,d]=e;for(const h of e)this.remove(h);if(t===Sa)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,1,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,2,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,3,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(i,4,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(v,_,x),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class iT extends Yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class aT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ne("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qx(o,t,e,i){const s=sT(i);switch(e){case YS:return o*t;case ZS:return o*t/s.components*s.byteLength;case r0:return o*t/s.components*s.byteLength;case Wo:return o*t*2/s.components*s.byteLength;case o0:return o*t*2/s.components*s.byteLength;case jS:return o*t*3/s.components*s.byteLength;case Zi:return o*t*4/s.components*s.byteLength;case l0:return o*t*4/s.components*s.byteLength;case xf:case Sf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case yf:case Mf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case im:case sm:return Math.max(o,16)*Math.max(t,8)/4;case nm:case am:return Math.max(o,8)*Math.max(t,8)/2;case rm:case om:case cm:case um:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case lm:case fm:case hm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case dm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case pm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case mm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case gm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case _m:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case vm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case xm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Sm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ym:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Mm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case bm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Em:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Tm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Am:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case wm:case Rm:case Cm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Dm:case Um:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Lm:case Nm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sT(o){switch(o){case wi:case kS:return{byteLength:1,components:1};case gc:case XS:case is:return{byteLength:2,components:1};case a0:case s0:return{byteLength:2,components:4};case Aa:case i0:case xa:return{byteLength:4,components:1};case WS:case qS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:e0}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=e0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fy(){let o=null,t=!1,e=null,i=null;function s(l,u){e(l,u),i=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function rT(o){const t=new WeakMap;function e(f,d){const h=f.array,m=f.usage,v=h.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=o.SHORT;else if(h instanceof Uint32Array)x=o.UNSIGNED_INT;else if(h instanceof Int32Array)x=o.INT;else if(h instanceof Int8Array)x=o.BYTE;else if(h instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function i(f,d,h){const m=d.array,v=d.updateRanges;if(o.bindBuffer(h,f),v.length===0)o.bufferSubData(h,0,m);else{v.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<v.length;x++){const M=v[_],b=v[x];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,v[_]=b)}v.length=_+1;for(let x=0,M=v.length;x<M;x++){const b=v[x];o.bufferSubData(h,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,e(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:s,remove:l,update:u}}var oT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lT=`#ifdef USE_ALPHAHASH
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
#endif`,cT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dT=`#ifdef USE_AOMAP
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
#endif`,pT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mT=`#ifdef USE_BATCHING
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
#endif`,gT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_T=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ST=`#ifdef USE_IRIDESCENCE
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
#endif`,yT=`#ifdef USE_BUMPMAP
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
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,DT=`#define PI 3.141592653589793
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
} // validated`,UT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LT=`vec3 transformedNormal = objectNormal;
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
#endif`,NT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IT="gl_FragColor = linearToOutputTexel( gl_FragColor );",zT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BT=`#ifdef USE_ENVMAP
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
#endif`,GT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HT=`#ifdef USE_ENVMAP
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
#endif`,VT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
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
#endif`,XT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jT=`#ifdef USE_GRADIENTMAP
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
}`,ZT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JT=`uniform bool receiveShadow;
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
#endif`,$T=`#ifdef USE_ENVMAP
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
#endif`,tA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aA=`PhysicalMaterial material;
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
#endif`,sA=`uniform sampler2D dfgLUT;
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
}`,rA=`
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
#endif`,oA=`#if defined( RE_IndirectDiffuse )
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
#endif`,lA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gA=`#if defined( USE_POINTS_UV )
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
#endif`,_A=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MA=`#ifdef USE_MORPHTARGETS
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
#endif`,bA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CA=`#ifdef USE_NORMALMAP
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
#endif`,DA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WA=`float getShadowMask() {
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
}`,qA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YA=`#ifdef USE_SKINNING
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
#endif`,jA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZA=`#ifdef USE_SKINNING
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
#endif`,KA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$A=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tw=`#ifdef USE_TRANSMISSION
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
#endif`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ow=`uniform sampler2D t2D;
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
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`#include <common>
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
}`,dw=`#if DEPTH_PACKING == 3200
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
}`,pw=`#define DISTANCE
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
}`,mw=`#define DISTANCE
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
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`uniform float scale;
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
}`,xw=`uniform vec3 diffuse;
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
}`,Sw=`#include <common>
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
}`,yw=`uniform vec3 diffuse;
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
}`,Mw=`#define LAMBERT
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
}`,bw=`#define LAMBERT
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
}`,Ew=`#define MATCAP
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
}`,Tw=`#define MATCAP
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
}`,Aw=`#define NORMAL
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
}`,ww=`#define NORMAL
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
}`,Rw=`#define PHONG
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
}`,Cw=`#define PHONG
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
}`,Dw=`#define STANDARD
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
}`,Uw=`#define STANDARD
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
}`,Lw=`#define TOON
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
}`,Nw=`#define TOON
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
}`,Pw=`uniform float size;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,Fw=`#include <common>
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
}`,Iw=`uniform vec3 color;
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
}`,zw=`uniform float rotation;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:oT,alphahash_pars_fragment:lT,alphamap_fragment:cT,alphamap_pars_fragment:uT,alphatest_fragment:fT,alphatest_pars_fragment:hT,aomap_fragment:dT,aomap_pars_fragment:pT,batching_pars_vertex:mT,batching_vertex:gT,begin_vertex:_T,beginnormal_vertex:vT,bsdfs:xT,iridescence_fragment:ST,bumpmap_pars_fragment:yT,clipping_planes_fragment:MT,clipping_planes_pars_fragment:bT,clipping_planes_pars_vertex:ET,clipping_planes_vertex:TT,color_fragment:AT,color_pars_fragment:wT,color_pars_vertex:RT,color_vertex:CT,common:DT,cube_uv_reflection_fragment:UT,defaultnormal_vertex:LT,displacementmap_pars_vertex:NT,displacementmap_vertex:PT,emissivemap_fragment:OT,emissivemap_pars_fragment:FT,colorspace_fragment:IT,colorspace_pars_fragment:zT,envmap_fragment:BT,envmap_common_pars_fragment:GT,envmap_pars_fragment:HT,envmap_pars_vertex:VT,envmap_physical_pars_fragment:$T,envmap_vertex:kT,fog_vertex:XT,fog_pars_vertex:WT,fog_fragment:qT,fog_pars_fragment:YT,gradientmap_pars_fragment:jT,lightmap_pars_fragment:ZT,lights_lambert_fragment:KT,lights_lambert_pars_fragment:QT,lights_pars_begin:JT,lights_toon_fragment:tA,lights_toon_pars_fragment:eA,lights_phong_fragment:nA,lights_phong_pars_fragment:iA,lights_physical_fragment:aA,lights_physical_pars_fragment:sA,lights_fragment_begin:rA,lights_fragment_maps:oA,lights_fragment_end:lA,logdepthbuf_fragment:cA,logdepthbuf_pars_fragment:uA,logdepthbuf_pars_vertex:fA,logdepthbuf_vertex:hA,map_fragment:dA,map_pars_fragment:pA,map_particle_fragment:mA,map_particle_pars_fragment:gA,metalnessmap_fragment:_A,metalnessmap_pars_fragment:vA,morphinstance_vertex:xA,morphcolor_vertex:SA,morphnormal_vertex:yA,morphtarget_pars_vertex:MA,morphtarget_vertex:bA,normal_fragment_begin:EA,normal_fragment_maps:TA,normal_pars_fragment:AA,normal_pars_vertex:wA,normal_vertex:RA,normalmap_pars_fragment:CA,clearcoat_normal_fragment_begin:DA,clearcoat_normal_fragment_maps:UA,clearcoat_pars_fragment:LA,iridescence_pars_fragment:NA,opaque_fragment:PA,packing:OA,premultiplied_alpha_fragment:FA,project_vertex:IA,dithering_fragment:zA,dithering_pars_fragment:BA,roughnessmap_fragment:GA,roughnessmap_pars_fragment:HA,shadowmap_pars_fragment:VA,shadowmap_pars_vertex:kA,shadowmap_vertex:XA,shadowmask_pars_fragment:WA,skinbase_vertex:qA,skinning_pars_vertex:YA,skinning_vertex:jA,skinnormal_vertex:ZA,specularmap_fragment:KA,specularmap_pars_fragment:QA,tonemapping_fragment:JA,tonemapping_pars_fragment:$A,transmission_fragment:tw,transmission_pars_fragment:ew,uv_pars_fragment:nw,uv_pars_vertex:iw,uv_vertex:aw,worldpos_vertex:sw,background_vert:rw,background_frag:ow,backgroundCube_vert:lw,backgroundCube_frag:cw,cube_vert:uw,cube_frag:fw,depth_vert:hw,depth_frag:dw,distance_vert:pw,distance_frag:mw,equirect_vert:gw,equirect_frag:_w,linedashed_vert:vw,linedashed_frag:xw,meshbasic_vert:Sw,meshbasic_frag:yw,meshlambert_vert:Mw,meshlambert_frag:bw,meshmatcap_vert:Ew,meshmatcap_frag:Tw,meshnormal_vert:Aw,meshnormal_frag:ww,meshphong_vert:Rw,meshphong_frag:Cw,meshphysical_vert:Dw,meshphysical_frag:Uw,meshtoon_vert:Lw,meshtoon_frag:Nw,points_vert:Pw,points_frag:Ow,shadow_vert:Fw,shadow_frag:Iw,sprite_vert:zw,sprite_frag:Bw},Nt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},_a={basic:{uniforms:ni([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:ni([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:ni([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:ni([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:ni([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new me(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:ni([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:ni([Nt.points,Nt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:ni([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:ni([Nt.common,Nt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:ni([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:ni([Nt.sprite,Nt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:ni([Nt.common,Nt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:ni([Nt.lights,Nt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};_a.physical={uniforms:ni([_a.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const pf={r:0,b:0,g:0},yr=new wa,Gw=new Ye;function Hw(o,t,e,i,s,l){const u=new me(0);let f=s===!0?0:1,d,h,m=null,v=0,_=null;function x(E){let D=E.isScene===!0?E.background:null;if(D&&D.isTexture){const C=E.backgroundBlurriness>0;D=t.get(D,C)}return D}function M(E){let D=!1;const C=x(E);C===null?S(u,f):C&&C.isColor&&(S(C,1),D=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?e.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,l),(o.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(E,D){const C=x(D);C&&(C.isCubeTexture||C.mapping===Gf)?(h===void 0&&(h=new Ft(new sn(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:Yo(_a.backgroundCube.uniforms),vertexShader:_a.backgroundCube.vertexShader,fragmentShader:_a.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),yr.copy(D.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(yr)),h.material.toneMapped=we.getTransfer(C.colorSpace)!==Fe,(m!==C||v!==C.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,m=C,v=C.version,_=o.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new Ft(new js(2,2),new la({name:"BackgroundMaterial",uniforms:Yo(_a.background.uniforms),vertexShader:_a.background.vertexShader,fragmentShader:_a.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=we.getTransfer(C.colorSpace)!==Fe,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||v!==C.version||_!==o.toneMapping)&&(d.material.needsUpdate=!0,m=C,v=C.version,_=o.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null))}function S(E,D){E.getRGB(pf,oy(o)),e.buffers.color.setClear(pf.r,pf.g,pf.b,D,l)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(E,D=1){u.set(E),f=D,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(E){f=E,S(u,f)},render:M,addToRenderList:b,dispose:y}}function Vw(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let l=s,u=!1;function f(F,W,Y,tt,Z){let G=!1;const H=v(F,tt,Y,W);l!==H&&(l=H,h(l.object)),G=x(F,tt,Y,Z),G&&M(F,tt,Y,Z),Z!==null&&t.update(Z,o.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,C(F,W,Y,tt),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return o.createVertexArray()}function h(F){return o.bindVertexArray(F)}function m(F){return o.deleteVertexArray(F)}function v(F,W,Y,tt){const Z=tt.wireframe===!0;let G=i[W.id];G===void 0&&(G={},i[W.id]=G);const H=F.isInstancedMesh===!0?F.id:0;let it=G[H];it===void 0&&(it={},G[H]=it);let ft=it[Y.id];ft===void 0&&(ft={},it[Y.id]=ft);let I=ft[Z];return I===void 0&&(I=_(d()),ft[Z]=I),I}function _(F){const W=[],Y=[],tt=[];for(let Z=0;Z<e;Z++)W[Z]=0,Y[Z]=0,tt[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:tt,object:F,attributes:{},index:null}}function x(F,W,Y,tt){const Z=l.attributes,G=W.attributes;let H=0;const it=Y.getAttributes();for(const ft in it)if(it[ft].location>=0){const et=Z[ft];let ht=G[ft];if(ht===void 0&&(ft==="instanceMatrix"&&F.instanceMatrix&&(ht=F.instanceMatrix),ft==="instanceColor"&&F.instanceColor&&(ht=F.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;H++}return l.attributesNum!==H||l.index!==tt}function M(F,W,Y,tt){const Z={},G=W.attributes;let H=0;const it=Y.getAttributes();for(const ft in it)if(it[ft].location>=0){let et=G[ft];et===void 0&&(ft==="instanceMatrix"&&F.instanceMatrix&&(et=F.instanceMatrix),ft==="instanceColor"&&F.instanceColor&&(et=F.instanceColor));const ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),Z[ft]=ht,H++}l.attributes=Z,l.attributesNum=H,l.index=tt}function b(){const F=l.newAttributes;for(let W=0,Y=F.length;W<Y;W++)F[W]=0}function S(F){y(F,0)}function y(F,W){const Y=l.newAttributes,tt=l.enabledAttributes,Z=l.attributeDivisors;Y[F]=1,tt[F]===0&&(o.enableVertexAttribArray(F),tt[F]=1),Z[F]!==W&&(o.vertexAttribDivisor(F,W),Z[F]=W)}function E(){const F=l.newAttributes,W=l.enabledAttributes;for(let Y=0,tt=W.length;Y<tt;Y++)W[Y]!==F[Y]&&(o.disableVertexAttribArray(Y),W[Y]=0)}function D(F,W,Y,tt,Z,G,H){H===!0?o.vertexAttribIPointer(F,W,Y,Z,G):o.vertexAttribPointer(F,W,Y,tt,Z,G)}function C(F,W,Y,tt){b();const Z=tt.attributes,G=Y.getAttributes(),H=W.defaultAttributeValues;for(const it in G){const ft=G[it];if(ft.location>=0){let I=Z[it];if(I===void 0&&(it==="instanceMatrix"&&F.instanceMatrix&&(I=F.instanceMatrix),it==="instanceColor"&&F.instanceColor&&(I=F.instanceColor)),I!==void 0){const et=I.normalized,ht=I.itemSize,bt=t.get(I);if(bt===void 0)continue;const vt=bt.buffer,Ot=bt.type,nt=bt.bytesPerElement,Et=Ot===o.INT||Ot===o.UNSIGNED_INT||I.gpuType===i0;if(I.isInterleavedBufferAttribute){const _t=I.data,Yt=_t.stride,Pt=I.offset;if(_t.isInstancedInterleavedBuffer){for(let Qt=0;Qt<ft.locationSize;Qt++)y(ft.location+Qt,_t.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Qt=0;Qt<ft.locationSize;Qt++)S(ft.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Qt=0;Qt<ft.locationSize;Qt++)D(ft.location+Qt,ht/ft.locationSize,Ot,et,Yt*nt,(Pt+ht/ft.locationSize*Qt)*nt,Et)}else{if(I.isInstancedBufferAttribute){for(let _t=0;_t<ft.locationSize;_t++)y(ft.location+_t,I.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let _t=0;_t<ft.locationSize;_t++)S(ft.location+_t);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let _t=0;_t<ft.locationSize;_t++)D(ft.location+_t,ht/ft.locationSize,Ot,et,ht*nt,ht/ft.locationSize*_t*nt,Et)}}else if(H!==void 0){const et=H[it];if(et!==void 0)switch(et.length){case 2:o.vertexAttrib2fv(ft.location,et);break;case 3:o.vertexAttrib3fv(ft.location,et);break;case 4:o.vertexAttrib4fv(ft.location,et);break;default:o.vertexAttrib1fv(ft.location,et)}}}}E()}function U(){w();for(const F in i){const W=i[F];for(const Y in W){const tt=W[Y];for(const Z in tt){const G=tt[Z];for(const H in G)m(G[H].object),delete G[H];delete tt[Z]}}delete i[F]}}function N(F){if(i[F.id]===void 0)return;const W=i[F.id];for(const Y in W){const tt=W[Y];for(const Z in tt){const G=tt[Z];for(const H in G)m(G[H].object),delete G[H];delete tt[Z]}}delete i[F.id]}function O(F){for(const W in i){const Y=i[W];for(const tt in Y){const Z=Y[tt];if(Z[F.id]===void 0)continue;const G=Z[F.id];for(const H in G)m(G[H].object),delete G[H];delete Z[F.id]}}}function A(F){for(const W in i){const Y=i[W],tt=F.isInstancedMesh===!0?F.id:0,Z=Y[tt];if(Z!==void 0){for(const G in Z){const H=Z[G];for(const it in H)m(H[it].object),delete H[it];delete Z[G]}delete Y[tt],Object.keys(Y).length===0&&delete i[W]}}}function w(){k(),u=!0,l!==s&&(l=s,h(l.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:w,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:S,disableUnusedAttributes:E}}function kw(o,t,e){let i;function s(h){i=h}function l(h,m){o.drawArrays(i,h,m),e.update(m,i,1)}function u(h,m,v){v!==0&&(o.drawArraysInstanced(i,h,m,v),e.update(m,i,v))}function f(h,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,v);let x=0;for(let M=0;M<v;M++)x+=m[M];e.update(x,i,1)}function d(h,m,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=m[b]*_[b];e.update(M,i,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Xw(o,t,e,i){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(O){return!(O!==Zi&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const A=O===is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==wi&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==xa&&!A)}function d(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const m=d(h);m!==h&&(ne("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),E=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:E,maxVaryings:D,maxFragmentUniforms:C,maxSamples:U,samples:N}}function Ww(o){const t=this;let e=null,i=0,s=!1,l=!1;const u=new Tr,f=new de,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||i!==0||s;return s=_,i=v.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){e=m(v,_,0)},this.setState=function(v,_,x){const M=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,y=o.get(v);if(!s||M===null||M.length===0||l&&!S)l?m(null):h();else{const E=l?0:i,D=E*4;let C=y.clippingState||null;d.value=C,C=m(M,_,D,x);for(let U=0;U!==D;++U)C[U]=e[U];y.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function h(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(v,_,x,M){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=d.value,M!==!0||S===null){const y=x+b*4,E=_.matrixWorldInverse;f.getNormalMatrix(E),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,C=x;D!==b;++D,C+=4)u.copy(v[D]).applyMatrix4(E,f),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}const zs=4,Yx=[.125,.215,.35,.446,.526,.582],Rr=20,qw=256,rc=new y0,jx=new me;let Up=null,Lp=0,Np=0,Pp=!1;const Yw=new V;class Zx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,l={}){const{size:u=256,position:f=Yw}=l;Up=this._renderer.getRenderTarget(),Lp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,s,d,f),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Up,Lp,Np),this._renderer.xr.enabled=Pp,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fr||t.mapping===Xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Up=this._renderer.getRenderTarget(),Lp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:is,format:Zi,colorSpace:qo,depthBuffer:!1},s=Kx(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kx(t,e,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jw(l)),this._blurMaterial=Kw(l,t,e),this._ggxMaterial=Zw(l,t,e)}return s}_compileMaterial(t){const e=new Ft(new Sn,t);this._renderer.compile(e,rc)}_sceneToCubeUV(t,e,i,s,l){const d=new Yi(90,1,e,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(jx),v.toneMapping=Ma,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new sn,new Ea({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let y=!1;const E=t.background;E?E.isColor&&(S.color.copy(E),t.background=null,y=!0):(S.color.copy(jx),y=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(d.up.set(0,h[D],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[D],l.y,l.z)):C===1?(d.up.set(0,0,h[D]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[D],l.z)):(d.up.set(0,h[D],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[D]));const U=this._cubeSize;Po(s,C*U,D>2?U:0,U,U),v.setRenderTarget(s),y&&v.render(b,d),v.render(t,d)}v.toneMapping=x,v.autoClear=_,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Fr||t.mapping===Xo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qx());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;Po(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(u,rc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(t,l-1,l);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[i];f.material=u;const d=u.uniforms,h=i/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),_=0+h*1.25,x=v*_,{_lodMax:M}=this,b=this._sizeLods[i],S=3*b*(i>M-zs?i-M+zs:0),y=4*(this._cubeSize-b);d.envMap.value=t.texture,d.roughness.value=x,d.mipInt.value=M-e,Po(l,S,y,3*b,2*b),s.setRenderTarget(l),s.render(f,rc),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=M-i,Po(t,S,y,3*b,2*b),s.setRenderTarget(t),s.render(f,rc)}_blur(t,e,i,s,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,i,s,"latitudinal",l),this._halfBlur(u,t,i,i,s,"longitudinal",l)}_halfBlur(t,e,i,s,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[s];v.material=h;const _=h.uniforms,x=this._sizeLods[i]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Rr-1),b=l/M,S=isFinite(l)?1+Math.floor(m*b):Rr;S>Rr&&ne(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rr}`);const y=[];let E=0;for(let O=0;O<Rr;++O){const A=O/b,w=Math.exp(-A*A/2);y.push(w),O===0?E+=w:O<S&&(E+=2*w)}for(let O=0;O<y.length;O++)y[O]=y[O]/E;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:D}=this;_.dTheta.value=M,_.mipInt.value=D-i;const C=this._sizeLods[s],U=3*C*(s>D-zs?s-D+zs:0),N=4*(this._cubeSize-C);Po(e,U,N,3*C,2*C),d.setRenderTarget(e),d.render(v,rc)}}function jw(o){const t=[],e=[],i=[];let s=o;const l=o-zs+1+Yx.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);t.push(f);let d=1/f;u>o-zs?d=Yx[u-o+zs-1]:u===0&&(d=0),e.push(d);const h=1/(f-2),m=-h,v=1+h,_=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,M=6,b=3,S=2,y=1,E=new Float32Array(b*M*x),D=new Float32Array(S*M*x),C=new Float32Array(y*M*x);for(let N=0;N<x;N++){const O=N%3*2/3-1,A=N>2?0:-1,w=[O,A,0,O+2/3,A,0,O+2/3,A+1,0,O,A,0,O+2/3,A+1,0,O,A+1,0];E.set(w,b*M*N),D.set(_,S*M*N);const k=[N,N,N,N,N,N];C.set(k,y*M*N)}const U=new Sn;U.setAttribute("position",new ai(E,b)),U.setAttribute("uv",new ai(D,S)),U.setAttribute("faceIndex",new ai(C,y)),i.push(new Ft(U,null)),s>zs&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Kx(o,t,e){const i=new ba(o,t,e);return i.texture.mapping=Gf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(o,t,e,i,s){o.viewport.set(t,e,i,s),o.scissor.set(t,e,i,s)}function Zw(o,t,e){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Kw(o,t,e){const i=new Float32Array(Rr),s=new V(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Qx(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Jx(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Vf(){return`

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
	`}class hy extends ba{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new sy(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),l=new la({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:es});l.uniforms.tEquirect.value=e;const u=new Ft(s,l),f=e.minFilter;return e.minFilter===Is&&(e.minFilter=Gn),new nT(1,10,this).update(t,u),e.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,i,s);t.setRenderTarget(l)}}function Qw(o){let t=new WeakMap,e=new WeakMap,i=null;function s(_,x=!1){return _==null?null:x?u(_):l(_)}function l(_){if(_&&_.isTexture){const x=_.mapping;if(x===Jd||x===$d)if(t.has(_)){const M=t.get(_).texture;return f(M,_.mapping)}else{const M=_.image;if(M&&M.height>0){const b=new hy(M.height);return b.fromEquirectangularTexture(o,_),t.set(_,b),_.addEventListener("dispose",h),f(b.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,M=x===Jd||x===$d,b=x===Fr||x===Xo;if(M||b){let S=e.get(_);const y=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return i===null&&(i=new Zx(o)),S=M?i.fromEquirectangular(_,S):i.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,e.set(_,S),S.texture;if(S!==void 0)return S.texture;{const E=_.image;return M&&E&&E.height>0||b&&E&&d(E)?(i===null&&(i=new Zx(o)),S=M?i.fromEquirectangular(_):i.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,e.set(_,S),_.addEventListener("dispose",m),S.texture):null}}}return _}function f(_,x){return x===Jd?_.mapping=Fr:x===$d&&(_.mapping=Xo),_}function d(_){let x=0;const M=6;for(let b=0;b<M;b++)_[b]!==void 0&&x++;return x===M}function h(_){const x=_.target;x.removeEventListener("dispose",h);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function m(_){const x=_.target;x.removeEventListener("dispose",m);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function v(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:v}}function Jw(o){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=o.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Cf("WebGLRenderer: "+i+" extension not supported."),s}}}function $w(o,t,e,i){const s={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const x=l.get(_);x&&(t.remove(x),l.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function f(v,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,e.memory.geometries++),_}function d(v){const _=v.attributes;for(const x in _)t.update(_[x],o.ARRAY_BUFFER)}function h(v){const _=[],x=v.index,M=v.attributes.position;let b=0;if(M===void 0)return;if(x!==null){const E=x.array;b=x.version;for(let D=0,C=E.length;D<C;D+=3){const U=E[D+0],N=E[D+1],O=E[D+2];_.push(U,N,N,O,O,U)}}else{const E=M.array;b=M.version;for(let D=0,C=E.length/3-1;D<C;D+=3){const U=D+0,N=D+1,O=D+2;_.push(U,N,N,O,O,U)}}const S=new(M.count>=65535?ny:ey)(_,1);S.version=b;const y=l.get(v);y&&t.remove(y),l.set(v,S)}function m(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function tR(o,t,e){let i;function s(_){i=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function d(_,x){o.drawElements(i,x,l,_*u),e.update(x,i,1)}function h(_,x,M){M!==0&&(o.drawElementsInstanced(i,x,l,_*u,M),e.update(x,i,M))}function m(_,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];e.update(S,i,1)}function v(_,x,M,b){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)h(_[y]/u,x[y],b[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,l,_,0,b,0,M);let y=0;for(let E=0;E<M;E++)y+=x[E]*b[E];e.update(y,i,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function eR(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(e.calls++,u){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:Le("WebGLInfo: Unknown draw mode:",u);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function nR(o,t,e){const i=new WeakMap,s=new cn;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=i.get(f);if(_===void 0||_.count!==v){let k=function(){A.dispose(),i.delete(f),f.removeEventListener("dispose",k)};var x=k;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),b===!0&&(C=2),S===!0&&(C=3);let U=f.attributes.position.count*C,N=1;U>t.maxTextureSize&&(N=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const O=new Float32Array(U*N*4*v),A=new JS(O,U,N,v);A.type=xa,A.needsUpdate=!0;const w=C*4;for(let F=0;F<v;F++){const W=y[F],Y=E[F],tt=D[F],Z=U*N*4*F;for(let G=0;G<W.count;G++){const H=G*w;M===!0&&(s.fromBufferAttribute(W,G),O[Z+H+0]=s.x,O[Z+H+1]=s.y,O[Z+H+2]=s.z,O[Z+H+3]=0),b===!0&&(s.fromBufferAttribute(Y,G),O[Z+H+4]=s.x,O[Z+H+5]=s.y,O[Z+H+6]=s.z,O[Z+H+7]=0),S===!0&&(s.fromBufferAttribute(tt,G),O[Z+H+8]=s.x,O[Z+H+9]=s.y,O[Z+H+10]=s.z,O[Z+H+11]=tt.itemSize===4?s.w:1)}}_={count:v,texture:A,size:new xe(U,N)},i.set(f,_),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,e);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const b=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:l}}function iR(o,t,e,i,s){let l=new WeakMap;function u(h){const m=s.render.frame,v=h.geometry,_=t.get(h,v);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(e.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,o.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),i.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:u,dispose:f}}const aR={[FS]:"LINEAR_TONE_MAPPING",[IS]:"REINHARD_TONE_MAPPING",[zS]:"CINEON_TONE_MAPPING",[n0]:"ACES_FILMIC_TONE_MAPPING",[GS]:"AGX_TONE_MAPPING",[HS]:"NEUTRAL_TONE_MAPPING",[BS]:"CUSTOM_TONE_MAPPING"};function sR(o,t,e,i,s){const l=new ba(t,e,{type:o,depthBuffer:i,stencilBuffer:s}),u=new ba(t,e,{type:is,depthBuffer:!1,stencilBuffer:!1}),f=new Sn;f.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new He([0,2,0,0,2,0],2));const d=new YE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ft(f,d),m=new y0(-1,1,1,-1,0,1);let v=null,_=null,x=!1,M,b=null,S=[],y=!1;this.setSize=function(E,D){l.setSize(E,D),u.setSize(E,D);for(let C=0;C<S.length;C++){const U=S[C];U.setSize&&U.setSize(E,D)}},this.setEffects=function(E){S=E,y=S.length>0&&S[0].isRenderPass===!0;const D=l.width,C=l.height;for(let U=0;U<S.length;U++){const N=S[U];N.setSize&&N.setSize(D,C)}},this.begin=function(E,D){if(x||E.toneMapping===Ma&&S.length===0)return!1;if(b=D,D!==null){const C=D.width,U=D.height;(l.width!==C||l.height!==U)&&this.setSize(C,U)}return y===!1&&E.setRenderTarget(l),M=E.toneMapping,E.toneMapping=Ma,!0},this.hasRenderPass=function(){return y},this.end=function(E,D){E.toneMapping=M,x=!0;let C=l,U=u;for(let N=0;N<S.length;N++){const O=S[N];if(O.enabled!==!1&&(O.render(E,U,C,D),O.needsSwap!==!1)){const A=C;C=U,U=A}}if(v!==E.outputColorSpace||_!==E.toneMapping){v=E.outputColorSpace,_=E.toneMapping,d.defines={},we.getTransfer(v)===Fe&&(d.defines.SRGB_TRANSFER="");const N=aR[_];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,E.setRenderTarget(b),E.render(h,m),b=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),d.dispose()}}const dy=new Hn,Im=new Sc(1,1),py=new JS,my=new vE,gy=new sy,$x=[],tS=[],eS=new Float32Array(16),nS=new Float32Array(9),iS=new Float32Array(4);function nl(o,t,e){const i=o[0];if(i<=0||i>0)return o;const s=t*e;let l=$x[s];if(l===void 0&&(l=new Float32Array(s),$x[s]=l),t!==0){i.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=e,o[u].toArray(l,f)}return l}function An(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function wn(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function kf(o,t){let e=tS[t];e===void 0&&(e=new Int32Array(t),tS[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function rR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function oR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;o.uniform2fv(this.addr,t),wn(e,t)}}function lR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(An(e,t))return;o.uniform3fv(this.addr,t),wn(e,t)}}function cR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;o.uniform4fv(this.addr,t),wn(e,t)}}function uR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(An(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),wn(e,t)}else{if(An(e,i))return;iS.set(i),o.uniformMatrix2fv(this.addr,!1,iS),wn(e,i)}}function fR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(An(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),wn(e,t)}else{if(An(e,i))return;nS.set(i),o.uniformMatrix3fv(this.addr,!1,nS),wn(e,i)}}function hR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(An(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),wn(e,t)}else{if(An(e,i))return;eS.set(i),o.uniformMatrix4fv(this.addr,!1,eS),wn(e,i)}}function dR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function pR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;o.uniform2iv(this.addr,t),wn(e,t)}}function mR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;o.uniform3iv(this.addr,t),wn(e,t)}}function gR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;o.uniform4iv(this.addr,t),wn(e,t)}}function _R(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function vR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;o.uniform2uiv(this.addr,t),wn(e,t)}}function xR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;o.uniform3uiv(this.addr,t),wn(e,t)}}function SR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;o.uniform4uiv(this.addr,t),wn(e,t)}}function yR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Im.compareFunction=e.isReversedDepthBuffer()?u0:c0,l=Im):l=dy,e.setTexture2D(t||l,s)}function MR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||my,s)}function bR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||gy,s)}function ER(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||py,s)}function TR(o){switch(o){case 5126:return rR;case 35664:return oR;case 35665:return lR;case 35666:return cR;case 35674:return uR;case 35675:return fR;case 35676:return hR;case 5124:case 35670:return dR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return _R;case 36294:return vR;case 36295:return xR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return bR;case 36289:case 36303:case 36311:case 36292:return ER}}function AR(o,t){o.uniform1fv(this.addr,t)}function wR(o,t){const e=nl(t,this.size,2);o.uniform2fv(this.addr,e)}function RR(o,t){const e=nl(t,this.size,3);o.uniform3fv(this.addr,e)}function CR(o,t){const e=nl(t,this.size,4);o.uniform4fv(this.addr,e)}function DR(o,t){const e=nl(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function UR(o,t){const e=nl(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function LR(o,t){const e=nl(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function NR(o,t){o.uniform1iv(this.addr,t)}function PR(o,t){o.uniform2iv(this.addr,t)}function OR(o,t){o.uniform3iv(this.addr,t)}function FR(o,t){o.uniform4iv(this.addr,t)}function IR(o,t){o.uniform1uiv(this.addr,t)}function zR(o,t){o.uniform2uiv(this.addr,t)}function BR(o,t){o.uniform3uiv(this.addr,t)}function GR(o,t){o.uniform4uiv(this.addr,t)}function HR(o,t,e){const i=this.cache,s=t.length,l=kf(e,s);An(i,l)||(o.uniform1iv(this.addr,l),wn(i,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=Im:u=dy;for(let f=0;f!==s;++f)e.setTexture2D(t[f]||u,l[f])}function VR(o,t,e){const i=this.cache,s=t.length,l=kf(e,s);An(i,l)||(o.uniform1iv(this.addr,l),wn(i,l));for(let u=0;u!==s;++u)e.setTexture3D(t[u]||my,l[u])}function kR(o,t,e){const i=this.cache,s=t.length,l=kf(e,s);An(i,l)||(o.uniform1iv(this.addr,l),wn(i,l));for(let u=0;u!==s;++u)e.setTextureCube(t[u]||gy,l[u])}function XR(o,t,e){const i=this.cache,s=t.length,l=kf(e,s);An(i,l)||(o.uniform1iv(this.addr,l),wn(i,l));for(let u=0;u!==s;++u)e.setTexture2DArray(t[u]||py,l[u])}function WR(o){switch(o){case 5126:return AR;case 35664:return wR;case 35665:return RR;case 35666:return CR;case 35674:return DR;case 35675:return UR;case 35676:return LR;case 5124:case 35670:return NR;case 35667:case 35671:return PR;case 35668:case 35672:return OR;case 35669:case 35673:return FR;case 5125:return IR;case 36294:return zR;case 36295:return BR;case 36296:return GR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return VR;case 35680:case 36300:case 36308:case 36293:return kR;case 36289:case 36303:case 36311:case 36292:return XR}}class qR{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=TR(e.type)}}class YR{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=WR(e.type)}}class jR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(t,e[f.id],i)}}}const Op=/(\w+)(\])?(\[|\.)?/g;function aS(o,t){o.seq.push(t),o.map[t.id]=t}function ZR(o,t,e){const i=o.name,s=i.length;for(Op.lastIndex=0;;){const l=Op.exec(i),u=Op.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===s){aS(e,h===void 0?new qR(f,o,t):new YR(f,o,t));break}else{let v=e.map[f];v===void 0&&(v=new jR(f),aS(e,v)),e=v}}}class Ef{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const f=t.getActiveUniform(e,u),d=t.getUniformLocation(e,f.name);ZR(f,d,this)}const s=[],l=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(t,e,i,s){const l=this.map[e];l!==void 0&&l.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let l=0,u=e.length;l!==u;++l){const f=e[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,l=t.length;s!==l;++s){const u=t[s];u.id in e&&i.push(u)}return i}}function sS(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}const KR=37297;let QR=0;function JR(o,t){const e=o.split(`
`),i=[],s=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let u=s;u<l;u++){const f=u+1;i.push(`${f===t?">":" "} ${f}: ${e[u]}`)}return i.join(`
`)}const rS=new de;function $R(o){we._getMatrix(rS,we.workingColorSpace,o);const t=`mat3( ${rS.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(o)){case Rf:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function oS(o,t,e){const i=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(i&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return e.toUpperCase()+`

`+l+`

`+JR(o.getShaderSource(t),f)}else return l}function t2(o,t){const e=$R(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const e2={[FS]:"Linear",[IS]:"Reinhard",[zS]:"Cineon",[n0]:"ACESFilmic",[GS]:"AgX",[HS]:"Neutral",[BS]:"Custom"};function n2(o,t){const e=e2[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mf=new V;function i2(){we.getLuminanceCoefficients(mf);const o=mf.x.toFixed(4),t=mf.y.toFixed(4),e=mf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uc).join(`
`)}function s2(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function r2(o,t){const e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const l=o.getActiveAttrib(t,s),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[u]={type:l.type,location:o.getAttribLocation(t,u),locationSize:f}}return e}function uc(o){return o!==""}function lS(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o2=/^[ \t]*#include +<([\w\d./]+)>/gm;function zm(o){return o.replace(o2,c2)}const l2=new Map;function c2(o,t){let e=pe[t];if(e===void 0){const i=l2.get(t);if(i!==void 0)e=pe[i],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zm(e)}const u2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uS(o){return o.replace(u2,f2)}function f2(o,t,e,i){let s="";for(let l=parseInt(t);l<parseInt(e);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function fS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const h2={[vf]:"SHADOWMAP_TYPE_PCF",[cc]:"SHADOWMAP_TYPE_VSM"};function d2(o){return h2[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p2={[Fr]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE",[Gf]:"ENVMAP_TYPE_CUBE_UV"};function m2(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":p2[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const g2={[Xo]:"ENVMAP_MODE_REFRACTION"};function _2(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":g2[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const v2={[OS]:"ENVMAP_BLENDING_MULTIPLY",[Qb]:"ENVMAP_BLENDING_MIX",[Jb]:"ENVMAP_BLENDING_ADD"};function x2(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":v2[o.combine]||"ENVMAP_BLENDING_NONE"}function S2(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function y2(o,t,e,i){const s=o.getContext(),l=e.defines;let u=e.vertexShader,f=e.fragmentShader;const d=d2(e),h=m2(e),m=_2(e),v=x2(e),_=S2(e),x=a2(e),M=s2(l),b=s.createProgram();let S,y,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(uc).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(uc).join(`
`),y.length>0&&(y+=`
`)):(S=[fS(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uc).join(`
`),y=[fS(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ma?"#define TONE_MAPPING":"",e.toneMapping!==Ma?pe.tonemapping_pars_fragment:"",e.toneMapping!==Ma?n2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,t2("linearToOutputTexel",e.outputColorSpace),i2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(uc).join(`
`)),u=zm(u),u=lS(u,e),u=cS(u,e),f=zm(f),f=lS(f,e),f=cS(f,e),u=uS(u),f=uS(f),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",e.glslVersion===_x?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=E+S+u,C=E+y+f,U=sS(s,s.VERTEX_SHADER,D),N=sS(s,s.FRAGMENT_SHADER,C);s.attachShader(b,U),s.attachShader(b,N),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function O(F){if(o.debug.checkShaderErrors){const W=s.getProgramInfoLog(b)||"",Y=s.getShaderInfoLog(U)||"",tt=s.getShaderInfoLog(N)||"",Z=W.trim(),G=Y.trim(),H=tt.trim();let it=!0,ft=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,b,U,N);else{const I=oS(s,U,"vertex"),et=oS(s,N,"fragment");Le("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Z+`
`+I+`
`+et)}else Z!==""?ne("WebGLProgram: Program Info Log:",Z):(G===""||H==="")&&(ft=!1);ft&&(F.diagnostics={runnable:it,programLog:Z,vertexShader:{log:G,prefix:S},fragmentShader:{log:H,prefix:y}})}s.deleteShader(U),s.deleteShader(N),A=new Ef(s,b),w=r2(s,b)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(b,KR)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=QR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=N,this}let M2=0;class b2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(t);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new E2(t),e.set(t,i)),i}}class E2{constructor(t){this.id=M2++,this.code=t,this.usedTimes=0}}function T2(o,t,e,i,s,l){const u=new $S,f=new b2,d=new Set,h=[],m=new Map,v=i.logarithmicDepthBuffer;let _=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return d.add(A),A===0?"uv":`uv${A}`}function b(A,w,k,F,W){const Y=F.fog,tt=W.geometry,Z=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,G=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,H=t.get(A.envMap||Z,G),it=H&&H.mapping===Gf?H.image.height:null,ft=x[A.type];A.precision!==null&&(_=i.getMaxPrecision(A.precision),_!==A.precision&&ne("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const I=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,et=I!==void 0?I.length:0;let ht=0;tt.morphAttributes.position!==void 0&&(ht=1),tt.morphAttributes.normal!==void 0&&(ht=2),tt.morphAttributes.color!==void 0&&(ht=3);let bt,vt,Ot,nt;if(ft){const Ce=_a[ft];bt=Ce.vertexShader,vt=Ce.fragmentShader}else bt=A.vertexShader,vt=A.fragmentShader,f.update(A),Ot=f.getVertexShaderID(A),nt=f.getFragmentShaderID(A);const Et=o.getRenderTarget(),_t=o.state.buffers.depth.getReversed(),Yt=W.isInstancedMesh===!0,Pt=W.isBatchedMesh===!0,Qt=!!A.map,je=!!A.matcap,ce=!!H,be=!!A.aoMap,Re=!!A.lightMap,ae=!!A.bumpMap,Xe=!!A.normalMap,X=!!A.displacementMap,Ze=!!A.emissiveMap,Ee=!!A.metalnessMap,Ne=!!A.roughnessMap,jt=A.anisotropy>0,z=A.clearcoat>0,R=A.dispersion>0,Q=A.iridescence>0,pt=A.sheen>0,xt=A.transmission>0,ut=jt&&!!A.anisotropyMap,Xt=z&&!!A.clearcoatMap,wt=z&&!!A.clearcoatNormalMap,Jt=z&&!!A.clearcoatRoughnessMap,te=Q&&!!A.iridescenceMap,Tt=Q&&!!A.iridescenceThicknessMap,yt=pt&&!!A.sheenColorMap,Wt=pt&&!!A.sheenRoughnessMap,zt=!!A.specularMap,Dt=!!A.specularColorMap,ue=!!A.specularIntensityMap,q=xt&&!!A.transmissionMap,Rt=xt&&!!A.thicknessMap,At=!!A.gradientMap,It=!!A.alphaMap,Mt=A.alphaTest>0,ct=!!A.alphaHash,Gt=!!A.extensions;let se=Ma;A.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(se=o.toneMapping);const Oe={shaderID:ft,shaderType:A.type,shaderName:A.name,vertexShader:bt,fragmentShader:vt,defines:A.defines,customVertexShaderID:Ot,customFragmentShaderID:nt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Pt,batchingColor:Pt&&W._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&W.instanceColor!==null,instancingMorph:Yt&&W.morphTexture!==null,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:qo,alphaToCoverage:!!A.alphaToCoverage,map:Qt,matcap:je,envMap:ce,envMapMode:ce&&H.mapping,envMapCubeUVHeight:it,aoMap:be,lightMap:Re,bumpMap:ae,normalMap:Xe,displacementMap:X,emissiveMap:Ze,normalMapObjectSpace:Xe&&A.normalMapType===eE,normalMapTangentSpace:Xe&&A.normalMapType===KS,metalnessMap:Ee,roughnessMap:Ne,anisotropy:jt,anisotropyMap:ut,clearcoat:z,clearcoatMap:Xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Jt,dispersion:R,iridescence:Q,iridescenceMap:te,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:yt,sheenRoughnessMap:Wt,specularMap:zt,specularColorMap:Dt,specularIntensityMap:ue,transmission:xt,transmissionMap:q,thicknessMap:Rt,gradientMap:At,opaque:A.transparent===!1&&A.blending===Ur&&A.alphaToCoverage===!1,alphaMap:It,alphaTest:Mt,alphaHash:ct,combine:A.combine,mapUv:Qt&&M(A.map.channel),aoMapUv:be&&M(A.aoMap.channel),lightMapUv:Re&&M(A.lightMap.channel),bumpMapUv:ae&&M(A.bumpMap.channel),normalMapUv:Xe&&M(A.normalMap.channel),displacementMapUv:X&&M(A.displacementMap.channel),emissiveMapUv:Ze&&M(A.emissiveMap.channel),metalnessMapUv:Ee&&M(A.metalnessMap.channel),roughnessMapUv:Ne&&M(A.roughnessMap.channel),anisotropyMapUv:ut&&M(A.anisotropyMap.channel),clearcoatMapUv:Xt&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:wt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&M(A.sheenRoughnessMap.channel),specularMapUv:zt&&M(A.specularMap.channel),specularColorMapUv:Dt&&M(A.specularColorMap.channel),specularIntensityMapUv:ue&&M(A.specularIntensityMap.channel),transmissionMapUv:q&&M(A.transmissionMap.channel),thicknessMapUv:Rt&&M(A.thicknessMap.channel),alphaMapUv:It&&M(A.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Xe||jt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!tt.attributes.uv&&(Qt||It),fog:!!Y,useFog:A.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||tt.attributes.normal===void 0&&Xe===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:_t,skinning:W.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:Qt&&A.map.isVideoTexture===!0&&we.getTransfer(A.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ze&&A.emissiveMap.isVideoTexture===!0&&we.getTransfer(A.emissiveMap.colorSpace)===Fe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===li,flipSided:A.side===ci,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Gt&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&A.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Oe.vertexUv1s=d.has(1),Oe.vertexUv2s=d.has(2),Oe.vertexUv3s=d.has(3),d.clear(),Oe}function S(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)w.push(k),w.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(y(w,A),E(w,A),w.push(o.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function y(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function E(A,w){u.disableAll(),w.instancing&&u.enable(0),w.instancingColor&&u.enable(1),w.instancingMorph&&u.enable(2),w.matcap&&u.enable(3),w.envMap&&u.enable(4),w.normalMapObjectSpace&&u.enable(5),w.normalMapTangentSpace&&u.enable(6),w.clearcoat&&u.enable(7),w.iridescence&&u.enable(8),w.alphaTest&&u.enable(9),w.vertexColors&&u.enable(10),w.vertexAlphas&&u.enable(11),w.vertexUv1s&&u.enable(12),w.vertexUv2s&&u.enable(13),w.vertexUv3s&&u.enable(14),w.vertexTangents&&u.enable(15),w.anisotropy&&u.enable(16),w.alphaHash&&u.enable(17),w.batching&&u.enable(18),w.dispersion&&u.enable(19),w.batchingColor&&u.enable(20),w.gradientMap&&u.enable(21),A.push(u.mask),u.disableAll(),w.fog&&u.enable(0),w.useFog&&u.enable(1),w.flatShading&&u.enable(2),w.logarithmicDepthBuffer&&u.enable(3),w.reversedDepthBuffer&&u.enable(4),w.skinning&&u.enable(5),w.morphTargets&&u.enable(6),w.morphNormals&&u.enable(7),w.morphColors&&u.enable(8),w.premultipliedAlpha&&u.enable(9),w.shadowMapEnabled&&u.enable(10),w.doubleSided&&u.enable(11),w.flipSided&&u.enable(12),w.useDepthPacking&&u.enable(13),w.dithering&&u.enable(14),w.transmission&&u.enable(15),w.sheen&&u.enable(16),w.opaque&&u.enable(17),w.pointsUvs&&u.enable(18),w.decodeVideoTexture&&u.enable(19),w.decodeVideoTextureEmissive&&u.enable(20),w.alphaToCoverage&&u.enable(21),A.push(u.mask)}function D(A){const w=x[A.type];let k;if(w){const F=_a[w];k=XE.clone(F.uniforms)}else k=A.uniforms;return k}function C(A,w){let k=m.get(w);return k!==void 0?++k.usedTimes:(k=new y2(o,w,A,s),h.push(k),m.set(w,k)),k}function U(A){if(--A.usedTimes===0){const w=h.indexOf(A);h[w]=h[h.length-1],h.pop(),m.delete(A.cacheKey),A.destroy()}}function N(A){f.remove(A)}function O(){f.dispose()}return{getParameters:b,getProgramCacheKey:S,getUniforms:D,acquireProgram:C,releaseProgram:U,releaseShaderCache:N,programs:h,dispose:O}}function A2(){let o=new WeakMap;function t(u){return o.has(u)}function e(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function i(u){o.delete(u)}function s(u,f,d){o.get(u)[f]=d}function l(){o=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:l}}function w2(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function hS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function dS(){const o=[];let t=0;const e=[],i=[],s=[];function l(){t=0,e.length=0,i.length=0,s.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function f(_,x,M,b,S,y){let E=o[t];return E===void 0?(E={id:_.id,object:_,geometry:x,material:M,materialVariant:u(_),groupOrder:b,renderOrder:_.renderOrder,z:S,group:y},o[t]=E):(E.id=_.id,E.object=_,E.geometry=x,E.material=M,E.materialVariant=u(_),E.groupOrder=b,E.renderOrder=_.renderOrder,E.z=S,E.group=y),t++,E}function d(_,x,M,b,S,y){const E=f(_,x,M,b,S,y);M.transmission>0?i.push(E):M.transparent===!0?s.push(E):e.push(E)}function h(_,x,M,b,S,y){const E=f(_,x,M,b,S,y);M.transmission>0?i.unshift(E):M.transparent===!0?s.unshift(E):e.unshift(E)}function m(_,x){e.length>1&&e.sort(_||w2),i.length>1&&i.sort(x||hS),s.length>1&&s.sort(x||hS)}function v(){for(let _=t,x=o.length;_<x;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:i,transparent:s,init:l,push:d,unshift:h,finish:v,sort:m}}function R2(){let o=new WeakMap;function t(i,s){const l=o.get(i);let u;return l===void 0?(u=new dS,o.set(i,[u])):s>=l.length?(u=new dS,l.push(u)):u=l[s],u}function e(){o=new WeakMap}return{get:t,dispose:e}}function C2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new me};break;case"SpotLight":e={position:new V,direction:new V,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new V,halfWidth:new V,halfHeight:new V};break}return o[t.id]=e,e}}}function D2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let U2=0;function L2(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function N2(o){const t=new C2,e=D2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new V);const s=new V,l=new Ye,u=new Ye;function f(h){let m=0,v=0,_=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let x=0,M=0,b=0,S=0,y=0,E=0,D=0,C=0,U=0,N=0,O=0;h.sort(L2);for(let w=0,k=h.length;w<k;w++){const F=h[w],W=F.color,Y=F.intensity,tt=F.distance;let Z=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Wo?Z=F.shadow.map.texture:Z=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)m+=W.r*Y,v+=W.g*Y,_+=W.b*Y;else if(F.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(F.sh.coefficients[G],Y);O++}else if(F.isDirectionalLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const H=F.shadow,it=e.get(F);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,i.directionalShadow[x]=it,i.directionalShadowMap[x]=Z,i.directionalShadowMatrix[x]=F.shadow.matrix,E++}i.directional[x]=G,x++}else if(F.isSpotLight){const G=t.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(W).multiplyScalar(Y),G.distance=tt,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,i.spot[b]=G;const H=F.shadow;if(F.map&&(i.spotLightMap[U]=F.map,U++,H.updateMatrices(F),F.castShadow&&N++),i.spotLightMatrix[b]=H.matrix,F.castShadow){const it=e.get(F);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,i.spotShadow[b]=it,i.spotShadowMap[b]=Z,C++}b++}else if(F.isRectAreaLight){const G=t.get(F);G.color.copy(W).multiplyScalar(Y),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),i.rectArea[S]=G,S++}else if(F.isPointLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const H=F.shadow,it=e.get(F);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,it.shadowCameraNear=H.camera.near,it.shadowCameraFar=H.camera.far,i.pointShadow[M]=it,i.pointShadowMap[M]=Z,i.pointShadowMatrix[M]=F.shadow.matrix,D++}i.point[M]=G,M++}else if(F.isHemisphereLight){const G=t.get(F);G.skyColor.copy(F.color).multiplyScalar(Y),G.groundColor.copy(F.groundColor).multiplyScalar(Y),i.hemi[y]=G,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Nt.LTC_FLOAT_1,i.rectAreaLTC2=Nt.LTC_FLOAT_2):(i.rectAreaLTC1=Nt.LTC_HALF_1,i.rectAreaLTC2=Nt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=v,i.ambient[2]=_;const A=i.hash;(A.directionalLength!==x||A.pointLength!==M||A.spotLength!==b||A.rectAreaLength!==S||A.hemiLength!==y||A.numDirectionalShadows!==E||A.numPointShadows!==D||A.numSpotShadows!==C||A.numSpotMaps!==U||A.numLightProbes!==O)&&(i.directional.length=x,i.spot.length=b,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=C+U-N,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=O,A.directionalLength=x,A.pointLength=M,A.spotLength=b,A.rectAreaLength=S,A.hemiLength=y,A.numDirectionalShadows=E,A.numPointShadows=D,A.numSpotShadows=C,A.numSpotMaps=U,A.numLightProbes=O,i.version=U2++)}function d(h,m){let v=0,_=0,x=0,M=0,b=0;const S=m.matrixWorldInverse;for(let y=0,E=h.length;y<E;y++){const D=h[y];if(D.isDirectionalLight){const C=i.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),v++}else if(D.isSpotLight){const C=i.spot[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(D.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),_++}else if(D.isHemisphereLight){const C=i.hemi[b];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),b++}}}return{setup:f,setupView:d,state:i}}function pS(o){const t=new N2(o),e=[],i=[];function s(m){h.camera=m,e.length=0,i.length=0}function l(m){e.push(m)}function u(m){i.push(m)}function f(){t.setup(e)}function d(m){t.setupView(e,m)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function P2(o){let t=new WeakMap;function e(s,l=0){const u=t.get(s);let f;return u===void 0?(f=new pS(o),t.set(s,[f])):l>=u.length?(f=new pS(o),u.push(f)):f=u[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const O2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F2=`uniform sampler2D shadow_pass;
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
}`,I2=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],z2=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],mS=new Ye,oc=new V,Fp=new V;function B2(o,t,e){let i=new p0;const s=new xe,l=new xe,u=new cn,f=new jE,d=new ZE,h={},m=e.maxTextureSize,v={[Xs]:ci,[ci]:Xs,[li]:li},_=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:O2,fragmentShader:F2}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new Sn;M.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ft(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vf;let y=this.type;this.render=function(N,O,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===Lb&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vf);const w=o.getRenderTarget(),k=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),W=o.state;W.setBlending(es),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=y!==this.type;Y&&O.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(Z=>Z.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,Z=N.length;tt<Z;tt++){const G=N[tt],H=G.shadow;if(H===void 0){ne("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const it=H.getFrameExtents();s.multiply(it),l.copy(H.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/it.x),s.x=l.x*it.x,H.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/it.y),s.y=l.y*it.y,H.mapSize.y=l.y));const ft=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ft,H.map===null||Y===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===cc){if(G.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ba(s.x,s.y,{format:Wo,type:is,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new Sc(s.x,s.y,xa),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=as,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn}else G.isPointLight?(H.map=new hy(s.x),H.map.depthTexture=new BE(s.x,Aa)):(H.map=new ba(s.x,s.y),H.map.depthTexture=new Sc(s.x,s.y,Aa)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=as,this.type===vf?(H.map.depthTexture.compareFunction=ft?u0:c0,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn);H.camera.updateProjectionMatrix()}const I=H.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<I;et++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,et),o.clear();else{et===0&&(o.setRenderTarget(H.map),o.clear());const ht=H.getViewport(et);u.set(l.x*ht.x,l.y*ht.y,l.x*ht.z,l.y*ht.w),W.viewport(u)}if(G.isPointLight){const ht=H.camera,bt=H.matrix,vt=G.distance||ht.far;vt!==ht.far&&(ht.far=vt,ht.updateProjectionMatrix()),oc.setFromMatrixPosition(G.matrixWorld),ht.position.copy(oc),Fp.copy(ht.position),Fp.add(I2[et]),ht.up.copy(z2[et]),ht.lookAt(Fp),ht.updateMatrixWorld(),bt.makeTranslation(-oc.x,-oc.y,-oc.z),mS.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),H._frustum.setFromProjectionMatrix(mS,ht.coordinateSystem,ht.reversedDepth)}else H.updateMatrices(G);i=H.getFrustum(),C(O,A,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===cc&&E(H,A),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(w,k,F)};function E(N,O){const A=t.update(b);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ba(s.x,s.y,{format:Wo,type:is})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(O,null,A,_,b,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(O,null,A,x,b,null)}function D(N,O,A,w){let k=null;const F=A.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)k=F;else if(k=A.isPointLight===!0?d:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=k.uuid,Y=O.uuid;let tt=h[W];tt===void 0&&(tt={},h[W]=tt);let Z=tt[Y];Z===void 0&&(Z=k.clone(),tt[Y]=Z,O.addEventListener("dispose",U)),k=Z}if(k.visible=O.visible,k.wireframe=O.wireframe,w===cc?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:v[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const W=o.properties.get(k);W.light=A}return k}function C(N,O,A,w,k){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&k===cc)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,N.matrixWorld);const Y=t.update(N),tt=N.material;if(Array.isArray(tt)){const Z=Y.groups;for(let G=0,H=Z.length;G<H;G++){const it=Z[G],ft=tt[it.materialIndex];if(ft&&ft.visible){const I=D(N,ft,w,k);N.onBeforeShadow(o,N,O,A,Y,I,it),o.renderBufferDirect(A,null,Y,I,N,it),N.onAfterShadow(o,N,O,A,Y,I,it)}}}else if(tt.visible){const Z=D(N,tt,w,k);N.onBeforeShadow(o,N,O,A,Y,Z,null),o.renderBufferDirect(A,null,Y,Z,N,null),N.onAfterShadow(o,N,O,A,Y,Z,null)}}const W=N.children;for(let Y=0,tt=W.length;Y<tt;Y++)C(W[Y],O,A,w,k)}function U(N){N.target.removeEventListener("dispose",U);for(const A in h){const w=h[A],k=N.target.uuid;k in w&&(w[k].dispose(),delete w[k])}}}function G2(o,t){function e(){let q=!1;const Rt=new cn;let At=null;const It=new cn(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!q&&(o.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){q=Mt},setClear:function(Mt,ct,Gt,se,Oe){Oe===!0&&(Mt*=se,ct*=se,Gt*=se),Rt.set(Mt,ct,Gt,se),It.equals(Rt)===!1&&(o.clearColor(Mt,ct,Gt,se),It.copy(Rt))},reset:function(){q=!1,At=null,It.set(-1,0,0,0)}}}function i(){let q=!1,Rt=!1,At=null,It=null,Mt=null;return{setReversed:function(ct){if(Rt!==ct){const Gt=t.get("EXT_clip_control");ct?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Rt=ct;const se=Mt;Mt=null,this.setClear(se)}},getReversed:function(){return Rt},setTest:function(ct){ct?Et(o.DEPTH_TEST):_t(o.DEPTH_TEST)},setMask:function(ct){At!==ct&&!q&&(o.depthMask(ct),At=ct)},setFunc:function(ct){if(Rt&&(ct=fE[ct]),It!==ct){switch(ct){case Yp:o.depthFunc(o.NEVER);break;case jp:o.depthFunc(o.ALWAYS);break;case Zp:o.depthFunc(o.LESS);break;case ko:o.depthFunc(o.LEQUAL);break;case Kp:o.depthFunc(o.EQUAL);break;case Qp:o.depthFunc(o.GEQUAL);break;case Jp:o.depthFunc(o.GREATER);break;case $p:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=ct}},setLocked:function(ct){q=ct},setClear:function(ct){Mt!==ct&&(Mt=ct,Rt&&(ct=1-ct),o.clearDepth(ct))},reset:function(){q=!1,At=null,It=null,Mt=null,Rt=!1}}}function s(){let q=!1,Rt=null,At=null,It=null,Mt=null,ct=null,Gt=null,se=null,Oe=null;return{setTest:function(Ce){q||(Ce?Et(o.STENCIL_TEST):_t(o.STENCIL_TEST))},setMask:function(Ce){Rt!==Ce&&!q&&(o.stencilMask(Ce),Rt=Ce)},setFunc:function(Ce,gi,Kn){(At!==Ce||It!==gi||Mt!==Kn)&&(o.stencilFunc(Ce,gi,Kn),At=Ce,It=gi,Mt=Kn)},setOp:function(Ce,gi,Kn){(ct!==Ce||Gt!==gi||se!==Kn)&&(o.stencilOp(Ce,gi,Kn),ct=Ce,Gt=gi,se=Kn)},setLocked:function(Ce){q=Ce},setClear:function(Ce){Oe!==Ce&&(o.clearStencil(Ce),Oe=Ce)},reset:function(){q=!1,Rt=null,At=null,It=null,Mt=null,ct=null,Gt=null,se=null,Oe=null}}}const l=new e,u=new i,f=new s,d=new WeakMap,h=new WeakMap;let m={},v={},_=new WeakMap,x=[],M=null,b=!1,S=null,y=null,E=null,D=null,C=null,U=null,N=null,O=new me(0,0,0),A=0,w=!1,k=null,F=null,W=null,Y=null,tt=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,H=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),G=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),G=H>=2);let ft=null,I={};const et=o.getParameter(o.SCISSOR_BOX),ht=o.getParameter(o.VIEWPORT),bt=new cn().fromArray(et),vt=new cn().fromArray(ht);function Ot(q,Rt,At,It){const Mt=new Uint8Array(4),ct=o.createTexture();o.bindTexture(q,ct),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<At;Gt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Rt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return ct}const nt={};nt[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Et(o.DEPTH_TEST),u.setFunc(ko),ae(!1),Xe(fx),Et(o.CULL_FACE),be(es);function Et(q){m[q]!==!0&&(o.enable(q),m[q]=!0)}function _t(q){m[q]!==!1&&(o.disable(q),m[q]=!1)}function Yt(q,Rt){return v[q]!==Rt?(o.bindFramebuffer(q,Rt),v[q]=Rt,q===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Rt),q===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Pt(q,Rt){let At=x,It=!1;if(q){At=_.get(Rt),At===void 0&&(At=[],_.set(Rt,At));const Mt=q.textures;if(At.length!==Mt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let ct=0,Gt=Mt.length;ct<Gt;ct++)At[ct]=o.COLOR_ATTACHMENT0+ct;At.length=Mt.length,It=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,It=!0);It&&o.drawBuffers(At)}function Qt(q){return M!==q?(o.useProgram(q),M=q,!0):!1}const je={[wr]:o.FUNC_ADD,[Pb]:o.FUNC_SUBTRACT,[Ob]:o.FUNC_REVERSE_SUBTRACT};je[Fb]=o.MIN,je[Ib]=o.MAX;const ce={[zb]:o.ZERO,[Bb]:o.ONE,[Gb]:o.SRC_COLOR,[Wp]:o.SRC_ALPHA,[qb]:o.SRC_ALPHA_SATURATE,[Xb]:o.DST_COLOR,[Vb]:o.DST_ALPHA,[Hb]:o.ONE_MINUS_SRC_COLOR,[qp]:o.ONE_MINUS_SRC_ALPHA,[Wb]:o.ONE_MINUS_DST_COLOR,[kb]:o.ONE_MINUS_DST_ALPHA,[Yb]:o.CONSTANT_COLOR,[jb]:o.ONE_MINUS_CONSTANT_COLOR,[Zb]:o.CONSTANT_ALPHA,[Kb]:o.ONE_MINUS_CONSTANT_ALPHA};function be(q,Rt,At,It,Mt,ct,Gt,se,Oe,Ce){if(q===es){b===!0&&(_t(o.BLEND),b=!1);return}if(b===!1&&(Et(o.BLEND),b=!0),q!==Nb){if(q!==S||Ce!==w){if((y!==wr||C!==wr)&&(o.blendEquation(o.FUNC_ADD),y=wr,C=wr),Ce)switch(q){case Ur:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hx:o.blendFunc(o.ONE,o.ONE);break;case dx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case px:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Le("WebGLState: Invalid blending: ",q);break}else switch(q){case Ur:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dx:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case px:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",q);break}E=null,D=null,U=null,N=null,O.set(0,0,0),A=0,S=q,w=Ce}return}Mt=Mt||Rt,ct=ct||At,Gt=Gt||It,(Rt!==y||Mt!==C)&&(o.blendEquationSeparate(je[Rt],je[Mt]),y=Rt,C=Mt),(At!==E||It!==D||ct!==U||Gt!==N)&&(o.blendFuncSeparate(ce[At],ce[It],ce[ct],ce[Gt]),E=At,D=It,U=ct,N=Gt),(se.equals(O)===!1||Oe!==A)&&(o.blendColor(se.r,se.g,se.b,Oe),O.copy(se),A=Oe),S=q,w=!1}function Re(q,Rt){q.side===li?_t(o.CULL_FACE):Et(o.CULL_FACE);let At=q.side===ci;Rt&&(At=!At),ae(At),q.blending===Ur&&q.transparent===!1?be(es):be(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const It=q.stencilWrite;f.setTest(It),It&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ze(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):_t(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(q){k!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),k=q)}function Xe(q){q!==Db?(Et(o.CULL_FACE),q!==F&&(q===fx?o.cullFace(o.BACK):q===Ub?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_t(o.CULL_FACE),F=q}function X(q){q!==W&&(G&&o.lineWidth(q),W=q)}function Ze(q,Rt,At){q?(Et(o.POLYGON_OFFSET_FILL),(Y!==Rt||tt!==At)&&(Y=Rt,tt=At,u.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,At))):_t(o.POLYGON_OFFSET_FILL)}function Ee(q){q?Et(o.SCISSOR_TEST):_t(o.SCISSOR_TEST)}function Ne(q){q===void 0&&(q=o.TEXTURE0+Z-1),ft!==q&&(o.activeTexture(q),ft=q)}function jt(q,Rt,At){At===void 0&&(ft===null?At=o.TEXTURE0+Z-1:At=ft);let It=I[At];It===void 0&&(It={type:void 0,texture:void 0},I[At]=It),(It.type!==q||It.texture!==Rt)&&(ft!==At&&(o.activeTexture(At),ft=At),o.bindTexture(q,Rt||nt[q]),It.type=q,It.texture=Rt)}function z(){const q=I[ft];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function pt(){try{o.texSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function xt(){try{o.texSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function wt(){try{o.texStorage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Jt(){try{o.texStorage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function te(){try{o.texImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Tt(){try{o.texImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function yt(q){bt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),bt.copy(q))}function Wt(q){vt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),vt.copy(q))}function zt(q,Rt){let At=h.get(Rt);At===void 0&&(At=new WeakMap,h.set(Rt,At));let It=At.get(q);It===void 0&&(It=o.getUniformBlockIndex(Rt,q.name),At.set(q,It))}function Dt(q,Rt){const It=h.get(Rt).get(q);d.get(Rt)!==It&&(o.uniformBlockBinding(Rt,It,q.__bindingPointIndex),d.set(Rt,It))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ft=null,I={},v={},_=new WeakMap,x=[],M=null,b=!1,S=null,y=null,E=null,D=null,C=null,U=null,N=null,O=new me(0,0,0),A=0,w=!1,k=null,F=null,W=null,Y=null,tt=null,bt.set(0,0,o.canvas.width,o.canvas.height),vt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Et,disable:_t,bindFramebuffer:Yt,drawBuffers:Pt,useProgram:Qt,setBlending:be,setMaterial:Re,setFlipSided:ae,setCullFace:Xe,setLineWidth:X,setPolygonOffset:Ze,setScissorTest:Ee,activeTexture:Ne,bindTexture:jt,unbindTexture:z,compressedTexImage2D:R,compressedTexImage3D:Q,texImage2D:te,texImage3D:Tt,updateUBOMapping:zt,uniformBlockBinding:Dt,texStorage2D:wt,texStorage3D:Jt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Xt,scissor:yt,viewport:Wt,reset:ue}}function H2(o,t,e,i,s,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xe,m=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,R){return x?new OffscreenCanvas(z,R):xc("canvas")}function b(z,R,Q){let pt=1;const xt=jt(z);if((xt.width>Q||xt.height>Q)&&(pt=Q/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ut=Math.floor(pt*xt.width),Xt=Math.floor(pt*xt.height);v===void 0&&(v=M(ut,Xt));const wt=R?M(ut,Xt):v;return wt.width=ut,wt.height=Xt,wt.getContext("2d").drawImage(z,0,0,ut,Xt),ne("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Xt+")."),wt}else return"data"in z&&ne("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),z;return z}function S(z){return z.generateMipmaps}function y(z){o.generateMipmap(z)}function E(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(z,R,Q,pt,xt=!1){if(z!==null){if(o[z]!==void 0)return o[z];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ut=R;if(R===o.RED&&(Q===o.FLOAT&&(ut=o.R32F),Q===o.HALF_FLOAT&&(ut=o.R16F),Q===o.UNSIGNED_BYTE&&(ut=o.R8)),R===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ut=o.R8UI),Q===o.UNSIGNED_SHORT&&(ut=o.R16UI),Q===o.UNSIGNED_INT&&(ut=o.R32UI),Q===o.BYTE&&(ut=o.R8I),Q===o.SHORT&&(ut=o.R16I),Q===o.INT&&(ut=o.R32I)),R===o.RG&&(Q===o.FLOAT&&(ut=o.RG32F),Q===o.HALF_FLOAT&&(ut=o.RG16F),Q===o.UNSIGNED_BYTE&&(ut=o.RG8)),R===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ut=o.RG8UI),Q===o.UNSIGNED_SHORT&&(ut=o.RG16UI),Q===o.UNSIGNED_INT&&(ut=o.RG32UI),Q===o.BYTE&&(ut=o.RG8I),Q===o.SHORT&&(ut=o.RG16I),Q===o.INT&&(ut=o.RG32I)),R===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),Q===o.UNSIGNED_INT&&(ut=o.RGB32UI),Q===o.BYTE&&(ut=o.RGB8I),Q===o.SHORT&&(ut=o.RGB16I),Q===o.INT&&(ut=o.RGB32I)),R===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),Q===o.UNSIGNED_INT&&(ut=o.RGBA32UI),Q===o.BYTE&&(ut=o.RGBA8I),Q===o.SHORT&&(ut=o.RGBA16I),Q===o.INT&&(ut=o.RGBA32I)),R===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),R===o.RGBA){const Xt=xt?Rf:we.getTransfer(pt);Q===o.FLOAT&&(ut=o.RGBA32F),Q===o.HALF_FLOAT&&(ut=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ut=Xt===Fe?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function C(z,R){let Q;return z?R===null||R===Aa||R===_c?Q=o.DEPTH24_STENCIL8:R===xa?Q=o.DEPTH32F_STENCIL8:R===gc&&(Q=o.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Aa||R===_c?Q=o.DEPTH_COMPONENT24:R===xa?Q=o.DEPTH_COMPONENT32F:R===gc&&(Q=o.DEPTH_COMPONENT16),Q}function U(z,R){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Bn&&z.minFilter!==Gn?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function N(z){const R=z.target;R.removeEventListener("dispose",N),A(R),R.isVideoTexture&&m.delete(R)}function O(z){const R=z.target;R.removeEventListener("dispose",O),k(R)}function A(z){const R=i.get(z);if(R.__webglInit===void 0)return;const Q=z.source,pt=_.get(Q);if(pt){const xt=pt[R.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(z),Object.keys(pt).length===0&&_.delete(Q)}i.remove(z)}function w(z){const R=i.get(z);o.deleteTexture(R.__webglTexture);const Q=z.source,pt=_.get(Q);delete pt[R.__cacheKey],u.memory.textures--}function k(z){const R=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(R.__webglFramebuffer[pt]))for(let xt=0;xt<R.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(R.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(R.__webglFramebuffer[pt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[pt])}else{if(Array.isArray(R.__webglFramebuffer))for(let pt=0;pt<R.__webglFramebuffer.length;pt++)o.deleteFramebuffer(R.__webglFramebuffer[pt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pt=0;pt<R.__webglColorRenderbuffer.length;pt++)R.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[pt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Q=z.textures;for(let pt=0,xt=Q.length;pt<xt;pt++){const ut=i.get(Q[pt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),u.memory.textures--),i.remove(Q[pt])}i.remove(z)}let F=0;function W(){F=0}function Y(){const z=F;return z>=s.maxTextures&&ne("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),F+=1,z}function tt(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function Z(z,R){const Q=i.get(z);if(z.isVideoTexture&&Ee(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Q.__version!==z.version){const pt=z.image;if(pt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Q,z,R);return}}else z.isExternalTexture&&(Q.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+R)}function G(z,R){const Q=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){nt(Q,z,R);return}else z.isExternalTexture&&(Q.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+R)}function H(z,R){const Q=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){nt(Q,z,R);return}e.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+R)}function it(z,R){const Q=i.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&Q.__version!==z.version){Et(Q,z,R);return}e.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+R)}const ft={[tm]:o.REPEAT,[ts]:o.CLAMP_TO_EDGE,[em]:o.MIRRORED_REPEAT},I={[Bn]:o.NEAREST,[$b]:o.NEAREST_MIPMAP_NEAREST,[Bu]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[tp]:o.LINEAR_MIPMAP_NEAREST,[Is]:o.LINEAR_MIPMAP_LINEAR},et={[nE]:o.NEVER,[oE]:o.ALWAYS,[iE]:o.LESS,[c0]:o.LEQUAL,[aE]:o.EQUAL,[u0]:o.GEQUAL,[sE]:o.GREATER,[rE]:o.NOTEQUAL};function ht(z,R){if(R.type===xa&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Gn||R.magFilter===tp||R.magFilter===Bu||R.magFilter===Is||R.minFilter===Gn||R.minFilter===tp||R.minFilter===Bu||R.minFilter===Is)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,ft[R.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,ft[R.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,ft[R.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,I[R.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,I[R.minFilter]),R.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,et[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Bn||R.minFilter!==Bu&&R.minFilter!==Is||R.type===xa&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function bt(z,R){let Q=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",N));const pt=R.source;let xt=_.get(pt);xt===void 0&&(xt={},_.set(pt,xt));const ut=tt(R);if(ut!==z.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),xt[ut].usedTimes++;const Xt=xt[z.__cacheKey];Xt!==void 0&&(xt[z.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(R)),z.__cacheKey=ut,z.__webglTexture=xt[ut].texture}return Q}function vt(z,R,Q){return Math.floor(Math.floor(z/Q)/R)}function Ot(z,R,Q,pt){const ut=z.updateRanges;if(ut.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,Q,pt,R.data);else{ut.sort((Tt,yt)=>Tt.start-yt.start);let Xt=0;for(let Tt=1;Tt<ut.length;Tt++){const yt=ut[Xt],Wt=ut[Tt],zt=yt.start+yt.count,Dt=vt(Wt.start,R.width,4),ue=vt(yt.start,R.width,4);Wt.start<=zt+1&&Dt===ue&&vt(Wt.start+Wt.count-1,R.width,4)===Dt?yt.count=Math.max(yt.count,Wt.start+Wt.count-yt.start):(++Xt,ut[Xt]=Wt)}ut.length=Xt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Jt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Tt=0,yt=ut.length;Tt<yt;Tt++){const Wt=ut[Tt],zt=Math.floor(Wt.start/4),Dt=Math.ceil(Wt.count/4),ue=zt%R.width,q=Math.floor(zt/R.width),Rt=Dt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),e.texSubImage2D(o.TEXTURE_2D,0,ue,q,Rt,At,Q,pt,R.data)}z.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function nt(z,R,Q){let pt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=bt(z,R),ut=R.source;e.bindTexture(pt,z.__webglTexture,o.TEXTURE0+Q);const Xt=i.get(ut);if(ut.version!==Xt.__version||xt===!0){e.activeTexture(o.TEXTURE0+Q);const wt=we.getPrimaries(we.workingColorSpace),Jt=R.colorSpace===Fs?null:we.getPrimaries(R.colorSpace),te=R.colorSpace===Fs||wt===Jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Tt=b(R.image,!1,s.maxTextureSize);Tt=Ne(R,Tt);const yt=l.convert(R.format,R.colorSpace),Wt=l.convert(R.type);let zt=D(R.internalFormat,yt,Wt,R.colorSpace,R.isVideoTexture);ht(pt,R);let Dt;const ue=R.mipmaps,q=R.isVideoTexture!==!0,Rt=Xt.__version===void 0||xt===!0,At=ut.dataReady,It=U(R,Tt);if(R.isDepthTexture)zt=C(R.format===Cr,R.type),Rt&&(q?e.texStorage2D(o.TEXTURE_2D,1,zt,Tt.width,Tt.height):e.texImage2D(o.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,yt,Wt,null));else if(R.isDataTexture)if(ue.length>0){q&&Rt&&e.texStorage2D(o.TEXTURE_2D,It,zt,ue[0].width,ue[0].height);for(let Mt=0,ct=ue.length;Mt<ct;Mt++)Dt=ue[Mt],q?At&&e.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,yt,Wt,Dt.data):e.texImage2D(o.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,yt,Wt,Dt.data);R.generateMipmaps=!1}else q?(Rt&&e.texStorage2D(o.TEXTURE_2D,It,zt,Tt.width,Tt.height),At&&Ot(R,Tt,yt,Wt)):e.texImage2D(o.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,yt,Wt,Tt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){q&&Rt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,zt,ue[0].width,ue[0].height,Tt.depth);for(let Mt=0,ct=ue.length;Mt<ct;Mt++)if(Dt=ue[Mt],R.format!==Zi)if(yt!==null)if(q){if(At)if(R.layerUpdates.size>0){const Gt=qx(Dt.width,Dt.height,R.format,R.type);for(const se of R.layerUpdates){const Oe=Dt.data.subarray(se*Gt/Dt.data.BYTES_PER_ELEMENT,(se+1)*Gt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,se,Dt.width,Dt.height,1,yt,Oe)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Tt.depth,yt,Dt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Dt.width,Dt.height,Tt.depth,0,Dt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?At&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Tt.depth,yt,Wt,Dt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Dt.width,Dt.height,Tt.depth,0,yt,Wt,Dt.data)}else{q&&Rt&&e.texStorage2D(o.TEXTURE_2D,It,zt,ue[0].width,ue[0].height);for(let Mt=0,ct=ue.length;Mt<ct;Mt++)Dt=ue[Mt],R.format!==Zi?yt!==null?q?At&&e.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,yt,Dt.data):e.compressedTexImage2D(o.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Dt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?At&&e.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,yt,Wt,Dt.data):e.texImage2D(o.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,yt,Wt,Dt.data)}else if(R.isDataArrayTexture)if(q){if(Rt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,zt,Tt.width,Tt.height,Tt.depth),At)if(R.layerUpdates.size>0){const Mt=qx(Tt.width,Tt.height,R.format,R.type);for(const ct of R.layerUpdates){const Gt=Tt.data.subarray(ct*Mt/Tt.data.BYTES_PER_ELEMENT,(ct+1)*Mt/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ct,Tt.width,Tt.height,1,yt,Wt,Gt)}R.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,yt,Wt,Tt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Tt.width,Tt.height,Tt.depth,0,yt,Wt,Tt.data);else if(R.isData3DTexture)q?(Rt&&e.texStorage3D(o.TEXTURE_3D,It,zt,Tt.width,Tt.height,Tt.depth),At&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,yt,Wt,Tt.data)):e.texImage3D(o.TEXTURE_3D,0,zt,Tt.width,Tt.height,Tt.depth,0,yt,Wt,Tt.data);else if(R.isFramebufferTexture){if(Rt)if(q)e.texStorage2D(o.TEXTURE_2D,It,zt,Tt.width,Tt.height);else{let Mt=Tt.width,ct=Tt.height;for(let Gt=0;Gt<It;Gt++)e.texImage2D(o.TEXTURE_2D,Gt,zt,Mt,ct,0,yt,Wt,null),Mt>>=1,ct>>=1}}else if(ue.length>0){if(q&&Rt){const Mt=jt(ue[0]);e.texStorage2D(o.TEXTURE_2D,It,zt,Mt.width,Mt.height)}for(let Mt=0,ct=ue.length;Mt<ct;Mt++)Dt=ue[Mt],q?At&&e.texSubImage2D(o.TEXTURE_2D,Mt,0,0,yt,Wt,Dt):e.texImage2D(o.TEXTURE_2D,Mt,zt,yt,Wt,Dt);R.generateMipmaps=!1}else if(q){if(Rt){const Mt=jt(Tt);e.texStorage2D(o.TEXTURE_2D,It,zt,Mt.width,Mt.height)}At&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,yt,Wt,Tt)}else e.texImage2D(o.TEXTURE_2D,0,zt,yt,Wt,Tt);S(R)&&y(pt),Xt.__version=ut.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Et(z,R,Q){if(R.image.length!==6)return;const pt=bt(z,R),xt=R.source;e.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+Q);const ut=i.get(xt);if(xt.version!==ut.__version||pt===!0){e.activeTexture(o.TEXTURE0+Q);const Xt=we.getPrimaries(we.workingColorSpace),wt=R.colorSpace===Fs?null:we.getPrimaries(R.colorSpace),Jt=R.colorSpace===Fs||Xt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const te=R.isCompressedTexture||R.image[0].isCompressedTexture,Tt=R.image[0]&&R.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!te&&!Tt?yt[ct]=b(R.image[ct],!0,s.maxCubemapSize):yt[ct]=Tt?R.image[ct].image:R.image[ct],yt[ct]=Ne(R,yt[ct]);const Wt=yt[0],zt=l.convert(R.format,R.colorSpace),Dt=l.convert(R.type),ue=D(R.internalFormat,zt,Dt,R.colorSpace),q=R.isVideoTexture!==!0,Rt=ut.__version===void 0||pt===!0,At=xt.dataReady;let It=U(R,Wt);ht(o.TEXTURE_CUBE_MAP,R);let Mt;if(te){q&&Rt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,It,ue,Wt.width,Wt.height);for(let ct=0;ct<6;ct++){Mt=yt[ct].mipmaps;for(let Gt=0;Gt<Mt.length;Gt++){const se=Mt[Gt];R.format!==Zi?zt!==null?q?At&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,0,0,se.width,se.height,zt,se.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,ue,se.width,se.height,0,se.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,0,0,se.width,se.height,zt,Dt,se.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,ue,se.width,se.height,0,zt,Dt,se.data)}}}else{if(Mt=R.mipmaps,q&&Rt){Mt.length>0&&It++;const ct=jt(yt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,It,ue,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Tt){q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,zt,Dt,yt[ct].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,yt[ct].width,yt[ct].height,0,zt,Dt,yt[ct].data);for(let Gt=0;Gt<Mt.length;Gt++){const Oe=Mt[Gt].image[ct].image;q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,0,0,Oe.width,Oe.height,zt,Dt,Oe.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,ue,Oe.width,Oe.height,0,zt,Dt,Oe.data)}}else{q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,zt,Dt,yt[ct]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,zt,Dt,yt[ct]);for(let Gt=0;Gt<Mt.length;Gt++){const se=Mt[Gt];q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,0,0,zt,Dt,se.image[ct]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,ue,zt,Dt,se.image[ct])}}}S(R)&&y(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function _t(z,R,Q,pt,xt,ut){const Xt=l.convert(Q.format,Q.colorSpace),wt=l.convert(Q.type),Jt=D(Q.internalFormat,Xt,wt,Q.colorSpace),te=i.get(R),Tt=i.get(Q);if(Tt.__renderTarget=R,!te.__hasExternalTextures){const yt=Math.max(1,R.width>>ut),Wt=Math.max(1,R.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?e.texImage3D(xt,ut,Jt,yt,Wt,R.depth,0,Xt,wt,null):e.texImage2D(xt,ut,Jt,yt,Wt,0,Xt,wt,null)}e.bindFramebuffer(o.FRAMEBUFFER,z),Ze(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,Tt.__webglTexture,0,X(R)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,Tt.__webglTexture,ut),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(z,R,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,z),R.depthBuffer){const pt=R.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ut=C(R.stencilBuffer,xt),Xt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ze(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(R),ut,R.width,R.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(R),ut,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ut,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,z)}else{const pt=R.textures;for(let xt=0;xt<pt.length;xt++){const ut=pt[xt],Xt=l.convert(ut.format,ut.colorSpace),wt=l.convert(ut.type),Jt=D(ut.internalFormat,Xt,wt,ut.colorSpace);Ze(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(R),Jt,R.width,R.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(R),Jt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Jt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pt(z,R,Q){const pt=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(o.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=i.get(R.depthTexture);if(xt.__renderTarget=R,(!xt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,R.depthTexture.addEventListener("dispose",N)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),e.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),ht(o.TEXTURE_CUBE_MAP,R.depthTexture);const te=l.convert(R.depthTexture.format),Tt=l.convert(R.depthTexture.type);let yt;R.depthTexture.format===as?yt=o.DEPTH_COMPONENT24:R.depthTexture.format===Cr&&(yt=o.DEPTH24_STENCIL8);for(let Wt=0;Wt<6;Wt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Wt,0,yt,R.width,R.height,0,te,Tt,null)}}else Z(R.depthTexture,0);const ut=xt.__webglTexture,Xt=X(R),wt=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,Jt=R.depthTexture.format===Cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(R.depthTexture.format===as)Ze(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Jt,wt,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Jt,wt,ut,0);else if(R.depthTexture.format===Cr)Ze(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Jt,wt,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Jt,wt,ut,0);else throw new Error("Unknown depthTexture format")}function Qt(z){const R=i.get(z),Q=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){const pt=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pt){const xt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),R.__depthDisposeCallback=xt}R.__boundDepthTexture=pt}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(Q)for(let pt=0;pt<6;pt++)Pt(R.__webglFramebuffer[pt],z,pt);else{const pt=z.texture.mipmaps;pt&&pt.length>0?Pt(R.__webglFramebuffer[0],z,0):Pt(R.__webglFramebuffer,z,0)}else if(Q){R.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[pt]),R.__webglDepthbuffer[pt]===void 0)R.__webglDepthbuffer[pt]=o.createRenderbuffer(),Yt(R.__webglDepthbuffer[pt],z,!1);else{const xt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=R.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const pt=z.texture.mipmaps;if(pt&&pt.length>0?e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Yt(R.__webglDepthbuffer,z,!1);else{const xt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function je(z,R,Q){const pt=i.get(z);R!==void 0&&_t(pt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Qt(z)}function ce(z){const R=z.texture,Q=i.get(z),pt=i.get(R);z.addEventListener("dispose",O);const xt=z.textures,ut=z.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=R.version,u.memory.textures++),ut){Q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer[wt]=[];for(let Jt=0;Jt<R.mipmaps.length;Jt++)Q.__webglFramebuffer[wt][Jt]=o.createFramebuffer()}else Q.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer=[];for(let wt=0;wt<R.mipmaps.length;wt++)Q.__webglFramebuffer[wt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let wt=0,Jt=xt.length;wt<Jt;wt++){const te=i.get(xt[wt]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),u.memory.textures++)}if(z.samples>0&&Ze(z)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let wt=0;wt<xt.length;wt++){const Jt=xt[wt];Q.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[wt]);const te=l.convert(Jt.format,Jt.colorSpace),Tt=l.convert(Jt.type),yt=D(Jt.internalFormat,te,Tt,Jt.colorSpace,z.isXRRenderTarget===!0),Wt=X(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,yt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Yt(Q.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){e.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),ht(o.TEXTURE_CUBE_MAP,R);for(let wt=0;wt<6;wt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Jt=0;Jt<R.mipmaps.length;Jt++)_t(Q.__webglFramebuffer[wt][Jt],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Jt);else _t(Q.__webglFramebuffer[wt],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(R)&&y(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Xt){for(let wt=0,Jt=xt.length;wt<Jt;wt++){const te=xt[wt],Tt=i.get(te);let yt=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(yt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(yt,Tt.__webglTexture),ht(yt,te),_t(Q.__webglFramebuffer,z,te,o.COLOR_ATTACHMENT0+wt,yt,0),S(te)&&y(yt)}e.unbindTexture()}else{let wt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(wt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(wt,pt.__webglTexture),ht(wt,R),R.mipmaps&&R.mipmaps.length>0)for(let Jt=0;Jt<R.mipmaps.length;Jt++)_t(Q.__webglFramebuffer[Jt],z,R,o.COLOR_ATTACHMENT0,wt,Jt);else _t(Q.__webglFramebuffer,z,R,o.COLOR_ATTACHMENT0,wt,0);S(R)&&y(wt),e.unbindTexture()}z.depthBuffer&&Qt(z)}function be(z){const R=z.textures;for(let Q=0,pt=R.length;Q<pt;Q++){const xt=R[Q];if(S(xt)){const ut=E(z),Xt=i.get(xt).__webglTexture;e.bindTexture(ut,Xt),y(ut),e.unbindTexture()}}}const Re=[],ae=[];function Xe(z){if(z.samples>0){if(Ze(z)===!1){const R=z.textures,Q=z.width,pt=z.height;let xt=o.COLOR_BUFFER_BIT;const ut=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=i.get(z),wt=R.length>1;if(wt)for(let te=0;te<R.length;te++)e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Jt=z.texture.mipmaps;Jt&&Jt.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let te=0;te<R.length;te++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const Tt=i.get(R[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,Q,pt,0,0,Q,pt,xt,o.NEAREST),d===!0&&(Re.length=0,ae.length=0,Re.push(o.COLOR_ATTACHMENT0+te),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Re.push(ut),ae.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let te=0;te<R.length;te++){e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const Tt=i.get(R[te]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,Tt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const R=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function X(z){return Math.min(s.maxSamples,z.samples)}function Ze(z){const R=i.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ee(z){const R=u.render.frame;m.get(z)!==R&&(m.set(z,R),z.update())}function Ne(z,R){const Q=z.colorSpace,pt=z.format,xt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Q!==qo&&Q!==Fs&&(we.getTransfer(Q)===Fe?(pt!==Zi||xt!==wi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",Q)),R}function jt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=je,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function V2(o,t){function e(i,s=Fs){let l;const u=we.getTransfer(s);if(i===wi)return o.UNSIGNED_BYTE;if(i===a0)return o.UNSIGNED_SHORT_4_4_4_4;if(i===s0)return o.UNSIGNED_SHORT_5_5_5_1;if(i===WS)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===qS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===kS)return o.BYTE;if(i===XS)return o.SHORT;if(i===gc)return o.UNSIGNED_SHORT;if(i===i0)return o.INT;if(i===Aa)return o.UNSIGNED_INT;if(i===xa)return o.FLOAT;if(i===is)return o.HALF_FLOAT;if(i===YS)return o.ALPHA;if(i===jS)return o.RGB;if(i===Zi)return o.RGBA;if(i===as)return o.DEPTH_COMPONENT;if(i===Cr)return o.DEPTH_STENCIL;if(i===ZS)return o.RED;if(i===r0)return o.RED_INTEGER;if(i===Wo)return o.RG;if(i===o0)return o.RG_INTEGER;if(i===l0)return o.RGBA_INTEGER;if(i===xf||i===Sf||i===yf||i===Mf)if(u===Fe)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===xf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===xf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nm||i===im||i===am||i===sm)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===nm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===im)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===am)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rm||i===om||i===lm||i===cm||i===um||i===fm||i===hm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===rm||i===om)return u===Fe?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===lm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===cm)return l.COMPRESSED_R11_EAC;if(i===um)return l.COMPRESSED_SIGNED_R11_EAC;if(i===fm)return l.COMPRESSED_RG11_EAC;if(i===hm)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dm||i===pm||i===mm||i===gm||i===_m||i===vm||i===xm||i===Sm||i===ym||i===Mm||i===bm||i===Em||i===Tm||i===Am)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===dm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_m)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ym)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Em)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Am)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wm||i===Rm||i===Cm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===wm)return u===Fe?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dm||i===Um||i===Lm||i===Nm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===Dm)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Um)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_c?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}const k2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X2=`
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

}`;class W2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ry(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new la({vertexShader:k2,fragmentShader:X2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q2 extends tl{constructor(t,e){super();const i=this;let s=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,v=null,_=null,x=null,M=null;const b=typeof XRWebGLBinding<"u",S=new W2,y={},E=e.getContextAttributes();let D=null,C=null;const U=[],N=[],O=new xe;let A=null;const w=new Yi;w.viewport=new cn;const k=new Yi;k.viewport=new cn;const F=[w,k],W=new iT;let Y=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let Et=U[nt];return Et===void 0&&(Et=new op,U[nt]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(nt){let Et=U[nt];return Et===void 0&&(Et=new op,U[nt]=Et),Et.getGripSpace()},this.getHand=function(nt){let Et=U[nt];return Et===void 0&&(Et=new op,U[nt]=Et),Et.getHandSpace()};function Z(nt){const Et=N.indexOf(nt.inputSource);if(Et===-1)return;const _t=U[Et];_t!==void 0&&(_t.update(nt.inputSource,nt.frame,h||u),_t.dispatchEvent({type:nt.type,data:nt.inputSource}))}function G(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",H);for(let nt=0;nt<U.length;nt++){const Et=N[nt];Et!==null&&(N[nt]=null,U[nt].disconnect(Et))}Y=null,tt=null,S.reset();for(const nt in y)delete y[nt];t.setRenderTarget(D),x=null,_=null,v=null,s=null,C=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){l=nt,i.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){f=nt,i.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",H),E.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Yt=null,Pt=null;E.depth&&(Pt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=E.stencil?Cr:as,Yt=E.stencil?_c:Aa);const Qt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Qt),s.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new ba(_.textureWidth,_.textureHeight,{format:Zi,type:wi,depthTexture:new Sc(_.textureWidth,_.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _t={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new ba(x.framebufferWidth,x.framebufferHeight,{format:Zi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(f),Ot.setContext(s),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(nt){for(let Et=0;Et<nt.removed.length;Et++){const _t=nt.removed[Et],Yt=N.indexOf(_t);Yt>=0&&(N[Yt]=null,U[Yt].disconnect(_t))}for(let Et=0;Et<nt.added.length;Et++){const _t=nt.added[Et];let Yt=N.indexOf(_t);if(Yt===-1){for(let Qt=0;Qt<U.length;Qt++)if(Qt>=N.length){N.push(_t),Yt=Qt;break}else if(N[Qt]===null){N[Qt]=_t,Yt=Qt;break}if(Yt===-1)break}const Pt=U[Yt];Pt&&Pt.connect(_t)}}const it=new V,ft=new V;function I(nt,Et,_t){it.setFromMatrixPosition(Et.matrixWorld),ft.setFromMatrixPosition(_t.matrixWorld);const Yt=it.distanceTo(ft),Pt=Et.projectionMatrix.elements,Qt=_t.projectionMatrix.elements,je=Pt[14]/(Pt[10]-1),ce=Pt[14]/(Pt[10]+1),be=(Pt[9]+1)/Pt[5],Re=(Pt[9]-1)/Pt[5],ae=(Pt[8]-1)/Pt[0],Xe=(Qt[8]+1)/Qt[0],X=je*ae,Ze=je*Xe,Ee=Yt/(-ae+Xe),Ne=Ee*-ae;if(Et.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ne),nt.translateZ(Ee),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Pt[10]===-1)nt.projectionMatrix.copy(Et.projectionMatrix),nt.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{const jt=je+Ee,z=ce+Ee,R=X-Ne,Q=Ze+(Yt-Ne),pt=be*ce/z*jt,xt=Re*ce/z*jt;nt.projectionMatrix.makePerspective(R,Q,pt,xt,jt,z),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function et(nt,Et){Et===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(Et.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let Et=nt.near,_t=nt.far;S.texture!==null&&(S.depthNear>0&&(Et=S.depthNear),S.depthFar>0&&(_t=S.depthFar)),W.near=k.near=w.near=Et,W.far=k.far=w.far=_t,(Y!==W.near||tt!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),Y=W.near,tt=W.far),W.layers.mask=nt.layers.mask|6,w.layers.mask=W.layers.mask&-5,k.layers.mask=W.layers.mask&-3;const Yt=nt.parent,Pt=W.cameras;et(W,Yt);for(let Qt=0;Qt<Pt.length;Qt++)et(Pt[Qt],Yt);Pt.length===2?I(W,w,k):W.projectionMatrix.copy(w.projectionMatrix),ht(nt,W,Yt)};function ht(nt,Et,_t){_t===null?nt.matrix.copy(Et.matrixWorld):(nt.matrix.copy(_t.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(Et.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(Et.projectionMatrix),nt.projectionMatrixInverse.copy(Et.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Pm*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(nt){d=nt,_!==null&&(_.fixedFoveation=nt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=nt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(W)},this.getCameraTexture=function(nt){return y[nt]};let bt=null;function vt(nt,Et){if(m=Et.getViewerPose(h||u),M=Et,m!==null){const _t=m.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let Yt=!1;_t.length!==W.cameras.length&&(W.cameras.length=0,Yt=!0);for(let ce=0;ce<_t.length;ce++){const be=_t[ce];let Re=null;if(x!==null)Re=x.getViewport(be);else{const Xe=v.getViewSubImage(_,be);Re=Xe.viewport,ce===0&&(t.setRenderTargetTextures(C,Xe.colorTexture,Xe.depthStencilTexture),t.setRenderTarget(C))}let ae=F[ce];ae===void 0&&(ae=new Yi,ae.layers.enable(ce),ae.viewport=new cn,F[ce]=ae),ae.matrix.fromArray(be.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(be.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),ce===0&&(W.matrix.copy(ae.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Yt===!0&&W.cameras.push(ae)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){v=i.getBinding();const ce=v.getDepthInformation(_t[0]);ce&&ce.isValid&&ce.texture&&S.init(ce,s.renderState)}if(Pt&&Pt.includes("camera-access")&&b){t.state.unbindTexture(),v=i.getBinding();for(let ce=0;ce<_t.length;ce++){const be=_t[ce].camera;if(be){let Re=y[be];Re||(Re=new ry,y[be]=Re);const ae=v.getCameraImage(be);Re.sourceTexture=ae}}}}for(let _t=0;_t<U.length;_t++){const Yt=N[_t],Pt=U[_t];Yt!==null&&Pt!==void 0&&Pt.update(Yt,Et,h||u)}bt&&bt(nt,Et),Et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Et}),M=null}const Ot=new fy;Ot.setAnimationLoop(vt),this.setAnimationLoop=function(nt){bt=nt},this.dispose=function(){}}}const Mr=new wa,Y2=new Ye;function j2(o,t){function e(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,oy(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,E,D,C){y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),v(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),b(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?d(S,y,E,D):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,e(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ci&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,e(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ci&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,e(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,e(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const E=t.get(y),D=E.envMap,C=E.envMapRotation;D&&(S.envMap.value=D,Mr.copy(C),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),S.envMapRotation.value.setFromMatrix4(Y2.makeRotationFromEuler(Mr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,E,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*E,S.scale.value=D*.5,y.map&&(S.map.value=y.map,e(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,E){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ci&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=E.texture,S.transmissionSamplerSize.value.set(E.width,E.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function b(S,y){const E=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(E.matrixWorld),S.nearDistance.value=E.shadow.camera.near,S.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Z2(o,t,e,i){let s={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(E,D){const C=D.program;i.uniformBlockBinding(E,C)}function h(E,D){let C=s[E.id];C===void 0&&(M(E),C=m(E),s[E.id]=C,E.addEventListener("dispose",S));const U=D.program;i.updateUBOMapping(E,U);const N=t.render.frame;l[E.id]!==N&&(_(E),l[E.id]=N)}function m(E){const D=v();E.__bindingPointIndex=D;const C=o.createBuffer(),U=E.__size,N=E.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,U,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,C),C}function v(){for(let E=0;E<f;E++)if(u.indexOf(E)===-1)return u.push(E),E;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(E){const D=s[E.id],C=E.uniforms,U=E.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let N=0,O=C.length;N<O;N++){const A=Array.isArray(C[N])?C[N]:[C[N]];for(let w=0,k=A.length;w<k;w++){const F=A[w];if(x(F,N,w,U)===!0){const W=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value];let tt=0;for(let Z=0;Z<Y.length;Z++){const G=Y[Z],H=b(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,W+tt,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,tt),tt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(E,D,C,U){const N=E.value,O=D+"_"+C;if(U[O]===void 0)return typeof N=="number"||typeof N=="boolean"?U[O]=N:U[O]=N.clone(),!0;{const A=U[O];if(typeof N=="number"||typeof N=="boolean"){if(A!==N)return U[O]=N,!0}else if(A.equals(N)===!1)return A.copy(N),!0}return!1}function M(E){const D=E.uniforms;let C=0;const U=16;for(let O=0,A=D.length;O<A;O++){const w=Array.isArray(D[O])?D[O]:[D[O]];for(let k=0,F=w.length;k<F;k++){const W=w[k],Y=Array.isArray(W.value)?W.value:[W.value];for(let tt=0,Z=Y.length;tt<Z;tt++){const G=Y[tt],H=b(G),it=C%U,ft=it%H.boundary,I=it+ft;C+=ft,I!==0&&U-I<H.storage&&(C+=U-I),W.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=H.storage}}}const N=C%U;return N>0&&(C+=U-N),E.__size=C,E.__cache={},this}function b(E){const D={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(D.boundary=4,D.storage=4):E.isVector2?(D.boundary=8,D.storage=8):E.isVector3||E.isColor?(D.boundary=16,D.storage=12):E.isVector4?(D.boundary=16,D.storage=16):E.isMatrix3?(D.boundary=48,D.storage=48):E.isMatrix4?(D.boundary=64,D.storage=64):E.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",E),D}function S(E){const D=E.target;D.removeEventListener("dispose",S);const C=u.indexOf(D.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(s[D.id]),delete s[D.id],delete l[D.id]}function y(){for(const E in s)o.deleteBuffer(s[E]);u=[],s={},l={}}return{bind:d,update:h,dispose:y}}const K2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ma=null;function Q2(){return ma===null&&(ma=new iy(K2,16,16,Wo,is),ma.name="DFG_LUT",ma.minFilter=Gn,ma.magFilter=Gn,ma.wrapS=ts,ma.wrapT=ts,ma.generateMipmaps=!1,ma.needsUpdate=!0),ma}class J2{constructor(t={}){const{canvas:e=cE(),context:i=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=wi}=t;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=u;const b=x,S=new Set([l0,o0,r0]),y=new Set([wi,Aa,gc,_c,a0,s0]),E=new Uint32Array(4),D=new Int32Array(4);let C=null,U=null;const N=[],O=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let k=!1;this._outputColorSpace=Ln;let F=0,W=0,Y=null,tt=-1,Z=null;const G=new cn,H=new cn;let it=null;const ft=new me(0);let I=0,et=e.width,ht=e.height,bt=1,vt=null,Ot=null;const nt=new cn(0,0,et,ht),Et=new cn(0,0,et,ht);let _t=!1;const Yt=new p0;let Pt=!1,Qt=!1;const je=new Ye,ce=new V,be=new cn,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Xe(){return Y===null?bt:1}let X=i;function Ze(L,J){return e.getContext(L,J)}try{const L={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${e0}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),X===null){const J="webgl2";if(X=Ze(J,L),X===null)throw Ze(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Le("WebGLRenderer: "+L.message),L}let Ee,Ne,jt,z,R,Q,pt,xt,ut,Xt,wt,Jt,te,Tt,yt,Wt,zt,Dt,ue,q,Rt,At,It;function Mt(){Ee=new Jw(X),Ee.init(),Rt=new V2(X,Ee),Ne=new Xw(X,Ee,t,Rt),jt=new G2(X,Ee),Ne.reversedDepthBuffer&&_&&jt.buffers.depth.setReversed(!0),z=new eR(X),R=new A2,Q=new H2(X,Ee,jt,R,Ne,Rt,z),pt=new Qw(w),xt=new rT(X),At=new Vw(X,xt),ut=new $w(X,xt,z,At),Xt=new iR(X,ut,xt,At,z),Dt=new nR(X,Ne,Q),yt=new Ww(R),wt=new T2(w,pt,Ee,Ne,At,yt),Jt=new j2(w,R),te=new R2,Tt=new P2(Ee),zt=new Hw(w,pt,jt,Xt,M,d),Wt=new B2(w,Xt,Ne),It=new Z2(X,z,Ne,jt),ue=new kw(X,Ee,z),q=new tR(X,Ee,z),z.programs=wt.programs,w.capabilities=Ne,w.extensions=Ee,w.properties=R,w.renderLists=te,w.shadowMap=Wt,w.state=jt,w.info=z}Mt(),b!==wi&&(A=new sR(b,e.width,e.height,s,l));const ct=new q2(w,X);this.xr=ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=Ee.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ee.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(L){L!==void 0&&(bt=L,this.setSize(et,ht,!1))},this.getSize=function(L){return L.set(et,ht)},this.setSize=function(L,J,lt=!0){if(ct.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}et=L,ht=J,e.width=Math.floor(L*bt),e.height=Math.floor(J*bt),lt===!0&&(e.style.width=L+"px",e.style.height=J+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(et*bt,ht*bt).floor()},this.setDrawingBufferSize=function(L,J,lt){et=L,ht=J,bt=lt,e.width=Math.floor(L*lt),e.height=Math.floor(J*lt),this.setViewport(0,0,L,J)},this.setEffects=function(L){if(b===wi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let J=0;J<L.length;J++)if(L[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(nt)},this.setViewport=function(L,J,lt,st){L.isVector4?nt.set(L.x,L.y,L.z,L.w):nt.set(L,J,lt,st),jt.viewport(G.copy(nt).multiplyScalar(bt).round())},this.getScissor=function(L){return L.copy(Et)},this.setScissor=function(L,J,lt,st){L.isVector4?Et.set(L.x,L.y,L.z,L.w):Et.set(L,J,lt,st),jt.scissor(H.copy(Et).multiplyScalar(bt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(L){jt.setScissorTest(_t=L)},this.setOpaqueSort=function(L){vt=L},this.setTransparentSort=function(L){Ot=L},this.getClearColor=function(L){return L.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(L=!0,J=!0,lt=!0){let st=0;if(L){let at=!1;if(Y!==null){const Ct=Y.texture.format;at=S.has(Ct)}if(at){const Ct=Y.texture.type,Bt=y.has(Ct),Lt=zt.getClearColor(),qt=zt.getClearAlpha(),Zt=Lt.r,ie=Lt.g,oe=Lt.b;Bt?(E[0]=Zt,E[1]=ie,E[2]=oe,E[3]=qt,X.clearBufferuiv(X.COLOR,0,E)):(D[0]=Zt,D[1]=ie,D[2]=oe,D[3]=qt,X.clearBufferiv(X.COLOR,0,D))}else st|=X.COLOR_BUFFER_BIT}J&&(st|=X.DEPTH_BUFFER_BIT),lt&&(st|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&X.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),zt.dispose(),te.dispose(),Tt.dispose(),R.dispose(),pt.dispose(),Xt.dispose(),At.dispose(),It.dispose(),wt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",il),ct.removeEventListener("sessionend",al),Ca.stop()};function Gt(L){L.preventDefault(),xx("WebGLRenderer: Context Lost."),k=!0}function se(){xx("WebGLRenderer: Context Restored."),k=!1;const L=z.autoReset,J=Wt.enabled,lt=Wt.autoUpdate,st=Wt.needsUpdate,at=Wt.type;Mt(),z.autoReset=L,Wt.enabled=J,Wt.autoUpdate=lt,Wt.needsUpdate=st,Wt.type=at}function Oe(L){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ce(L){const J=L.target;J.removeEventListener("dispose",Ce),gi(J)}function gi(L){Kn(L),R.remove(L)}function Kn(L){const J=R.get(L).programs;J!==void 0&&(J.forEach(function(lt){wt.releaseProgram(lt)}),L.isShaderMaterial&&wt.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,lt,st,at,Ct){J===null&&(J=Re);const Bt=at.isMesh&&at.matrixWorld.determinant()<0,Lt=Ks(L,J,lt,st,at);jt.setMaterial(st,Bt);let qt=lt.index,Zt=1;if(st.wireframe===!0){if(qt=ut.getWireframeAttribute(lt),qt===void 0)return;Zt=2}const ie=lt.drawRange,oe=lt.attributes.position;let Ht=ie.start*Zt,fe=(ie.start+ie.count)*Zt;Ct!==null&&(Ht=Math.max(Ht,Ct.start*Zt),fe=Math.min(fe,(Ct.start+Ct.count)*Zt)),qt!==null?(Ht=Math.max(Ht,0),fe=Math.min(fe,qt.count)):oe!=null&&(Ht=Math.max(Ht,0),fe=Math.min(fe,oe.count));const Ke=fe-Ht;if(Ke<0||Ke===1/0)return;At.setup(at,st,Lt,lt,qt);let Qe,Ae=ue;if(qt!==null&&(Qe=xt.get(qt),Ae=q,Ae.setIndex(Qe)),at.isMesh)st.wireframe===!0?(jt.setLineWidth(st.wireframeLinewidth*Xe()),Ae.setMode(X.LINES)):Ae.setMode(X.TRIANGLES);else if(at.isLine){let Mn=st.linewidth;Mn===void 0&&(Mn=1),jt.setLineWidth(Mn*Xe()),at.isLineSegments?Ae.setMode(X.LINES):at.isLineLoop?Ae.setMode(X.LINE_LOOP):Ae.setMode(X.LINE_STRIP)}else at.isPoints?Ae.setMode(X.POINTS):at.isSprite&&Ae.setMode(X.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)Cf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Ae.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Mn=at._multiDrawStarts,Vt=at._multiDrawCounts,Qn=at._multiDrawCount,re=qt?xt.get(qt).bytesPerElement:1,Jn=R.get(st).currentProgram.getUniforms();for(let _i=0;_i<Qn;_i++)Jn.setValue(X,"_gl_DrawID",_i),Ae.render(Mn[_i]/re,Vt[_i])}else if(at.isInstancedMesh)Ae.renderInstances(Ht,Ke,at.count);else if(lt.isInstancedBufferGeometry){const Mn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Vt=Math.min(lt.instanceCount,Mn);Ae.renderInstances(Ht,Ke,Vt)}else Ae.render(Ht,Ke)};function Nc(L,J,lt){L.transparent===!0&&L.side===li&&L.forceSinglePass===!1?(L.side=ci,L.needsUpdate=!0,Vr(L,J,lt),L.side=Xs,L.needsUpdate=!0,Vr(L,J,lt),L.side=li):Vr(L,J,lt)}this.compile=function(L,J,lt=null){lt===null&&(lt=L),U=Tt.get(lt),U.init(J),O.push(U),lt.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),L!==lt&&L.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),U.setupLights();const st=new Set;return L.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Ct=at.material;if(Ct)if(Array.isArray(Ct))for(let Bt=0;Bt<Ct.length;Bt++){const Lt=Ct[Bt];Nc(Lt,lt,at),st.add(Lt)}else Nc(Ct,lt,at),st.add(Ct)}),U=O.pop(),st},this.compileAsync=function(L,J,lt=null){const st=this.compile(L,J,lt);return new Promise(at=>{function Ct(){if(st.forEach(function(Bt){R.get(Bt).currentProgram.isReady()&&st.delete(Bt)}),st.size===0){at(L);return}setTimeout(Ct,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Gr=null;function Pc(L){Gr&&Gr(L)}function il(){Ca.stop()}function al(){Ca.start()}const Ca=new fy;Ca.setAnimationLoop(Pc),typeof self<"u"&&Ca.setContext(self),this.setAnimationLoop=function(L){Gr=L,ct.setAnimationLoop(L),L===null?Ca.stop():Ca.start()},ct.addEventListener("sessionstart",il),ct.addEventListener("sessionend",al),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const lt=ct.enabled===!0&&ct.isPresenting===!0,st=A!==null&&(Y===null||lt)&&A.begin(w,Y);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(J),J=ct.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,J,Y),U=Tt.get(L,O.length),U.init(J),O.push(U),je.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Yt.setFromProjectionMatrix(je,Sa,J.reversedDepth),Qt=this.localClippingEnabled,Pt=yt.init(this.clippingPlanes,Qt),C=te.get(L,N.length),C.init(),N.push(C),ct.enabled===!0&&ct.isPresenting===!0){const Bt=w.xr.getDepthSensingMesh();Bt!==null&&Pi(Bt,J,-1/0,w.sortObjects)}Pi(L,J,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(vt,Ot),ae=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ae&&zt.addToRenderList(C,L),this.info.render.frame++,Pt===!0&&yt.beginShadows();const at=U.state.shadowsArray;if(Wt.render(at,L,J),Pt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&A.hasRenderPass())===!1){const Bt=C.opaque,Lt=C.transmissive;if(U.setupLights(),J.isArrayCamera){const qt=J.cameras;if(Lt.length>0)for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const oe=qt[Zt];On(Bt,Lt,L,oe)}ae&&zt.render(L);for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const oe=qt[Zt];yn(C,L,oe,oe.viewport)}}else Lt.length>0&&On(Bt,Lt,L,J),ae&&zt.render(L),yn(C,L,J)}Y!==null&&W===0&&(Q.updateMultisampleRenderTarget(Y),Q.updateRenderTargetMipmap(Y)),st&&A.end(w),L.isScene===!0&&L.onAfterRender(w,L,J),At.resetDefaultState(),tt=-1,Z=null,O.pop(),O.length>0?(U=O[O.length-1],Pt===!0&&yt.setGlobalState(w.clippingPlanes,U.state.camera)):U=null,N.pop(),N.length>0?C=N[N.length-1]:C=null};function Pi(L,J,lt,st){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)lt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)U.pushLight(L),L.castShadow&&U.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Yt.intersectsSprite(L)){st&&be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(je);const Bt=Xt.update(L),Lt=L.material;Lt.visible&&C.push(L,Bt,Lt,lt,be.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Yt.intersectsObject(L))){const Bt=Xt.update(L),Lt=L.material;if(st&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),be.copy(L.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),be.copy(Bt.boundingSphere.center)),be.applyMatrix4(L.matrixWorld).applyMatrix4(je)),Array.isArray(Lt)){const qt=Bt.groups;for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const oe=qt[Zt],Ht=Lt[oe.materialIndex];Ht&&Ht.visible&&C.push(L,Bt,Ht,lt,be.z,oe)}}else Lt.visible&&C.push(L,Bt,Lt,lt,be.z,null)}}const Ct=L.children;for(let Bt=0,Lt=Ct.length;Bt<Lt;Bt++)Pi(Ct[Bt],J,lt,st)}function yn(L,J,lt,st){const{opaque:at,transmissive:Ct,transparent:Bt}=L;U.setupLightsView(lt),Pt===!0&&yt.setGlobalState(w.clippingPlanes,lt),st&&jt.viewport(G.copy(st)),at.length>0&&Qi(at,J,lt),Ct.length>0&&Qi(Ct,J,lt),Bt.length>0&&Qi(Bt,J,lt),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function On(L,J,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[st.id]===void 0){const Ht=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[st.id]=new ba(1,1,{generateMipmaps:!0,type:Ht?is:wi,minFilter:Is,samples:Math.max(4,Ne.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Ct=U.state.transmissionRenderTarget[st.id],Bt=st.viewport||G;Ct.setSize(Bt.z*w.transmissionResolutionScale,Bt.w*w.transmissionResolutionScale);const Lt=w.getRenderTarget(),qt=w.getActiveCubeFace(),Zt=w.getActiveMipmapLevel();w.setRenderTarget(Ct),w.getClearColor(ft),I=w.getClearAlpha(),I<1&&w.setClearColor(16777215,.5),w.clear(),ae&&zt.render(lt);const ie=w.toneMapping;w.toneMapping=Ma;const oe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),U.setupLightsView(st),Pt===!0&&yt.setGlobalState(w.clippingPlanes,st),Qi(L,lt,st),Q.updateMultisampleRenderTarget(Ct),Q.updateRenderTargetMipmap(Ct),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let fe=0,Ke=J.length;fe<Ke;fe++){const Qe=J[fe],{object:Ae,geometry:Mn,material:Vt,group:Qn}=Qe;if(Vt.side===li&&Ae.layers.test(st.layers)){const re=Vt.side;Vt.side=ci,Vt.needsUpdate=!0,Hr(Ae,lt,st,Mn,Vt,Qn),Vt.side=re,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(Q.updateMultisampleRenderTarget(Ct),Q.updateRenderTargetMipmap(Ct))}w.setRenderTarget(Lt,qt,Zt),w.setClearColor(ft,I),oe!==void 0&&(st.viewport=oe),w.toneMapping=ie}function Qi(L,J,lt){const st=J.isScene===!0?J.overrideMaterial:null;for(let at=0,Ct=L.length;at<Ct;at++){const Bt=L[at],{object:Lt,geometry:qt,group:Zt}=Bt;let ie=Bt.material;ie.allowOverride===!0&&st!==null&&(ie=st),Lt.layers.test(lt.layers)&&Hr(Lt,J,lt,qt,ie,Zt)}}function Hr(L,J,lt,st,at,Ct){L.onBeforeRender(w,J,lt,st,at,Ct),L.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),at.onBeforeRender(w,J,lt,st,L,Ct),at.transparent===!0&&at.side===li&&at.forceSinglePass===!1?(at.side=ci,at.needsUpdate=!0,w.renderBufferDirect(lt,J,st,at,L,Ct),at.side=Xs,at.needsUpdate=!0,w.renderBufferDirect(lt,J,st,at,L,Ct),at.side=li):w.renderBufferDirect(lt,J,st,at,L,Ct),L.onAfterRender(w,J,lt,st,at,Ct)}function Vr(L,J,lt){J.isScene!==!0&&(J=Re);const st=R.get(L),at=U.state.lights,Ct=U.state.shadowsArray,Bt=at.state.version,Lt=wt.getParameters(L,at.state,Ct,J,lt),qt=wt.getProgramCacheKey(Lt);let Zt=st.programs;st.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?J.environment:null,st.fog=J.fog;const ie=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;st.envMap=pt.get(L.envMap||st.environment,ie),st.envMapRotation=st.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,Zt===void 0&&(L.addEventListener("dispose",Ce),Zt=new Map,st.programs=Zt);let oe=Zt.get(qt);if(oe!==void 0){if(st.currentProgram===oe&&st.lightsStateVersion===Bt)return sl(L,Lt),oe}else Lt.uniforms=wt.getUniforms(L),L.onBeforeCompile(Lt,w),oe=wt.acquireProgram(Lt,qt),Zt.set(qt,oe),st.uniforms=Lt.uniforms;const Ht=st.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ht.clippingPlanes=yt.uniform),sl(L,Lt),st.needsLights=Da(L),st.lightsStateVersion=Bt,st.needsLights&&(Ht.ambientLightColor.value=at.state.ambient,Ht.lightProbe.value=at.state.probe,Ht.directionalLights.value=at.state.directional,Ht.directionalLightShadows.value=at.state.directionalShadow,Ht.spotLights.value=at.state.spot,Ht.spotLightShadows.value=at.state.spotShadow,Ht.rectAreaLights.value=at.state.rectArea,Ht.ltc_1.value=at.state.rectAreaLTC1,Ht.ltc_2.value=at.state.rectAreaLTC2,Ht.pointLights.value=at.state.point,Ht.pointLightShadows.value=at.state.pointShadow,Ht.hemisphereLights.value=at.state.hemi,Ht.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Ht.spotLightMatrix.value=at.state.spotLightMatrix,Ht.spotLightMap.value=at.state.spotLightMap,Ht.pointShadowMatrix.value=at.state.pointShadowMatrix),st.currentProgram=oe,st.uniformsList=null,oe}function Oc(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=Ef.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function sl(L,J){const lt=R.get(L);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function Ks(L,J,lt,st,at){J.isScene!==!0&&(J=Re),Q.resetTextureUnits();const Ct=J.fog,Bt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?J.environment:null,Lt=Y===null?w.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:qo,qt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Zt=pt.get(st.envMap||Bt,qt),ie=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Ht=!!lt.morphAttributes.position,fe=!!lt.morphAttributes.normal,Ke=!!lt.morphAttributes.color;let Qe=Ma;st.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Ae=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Mn=Ae!==void 0?Ae.length:0,Vt=R.get(st),Qn=U.state.lights;if(Pt===!0&&(Qt===!0||L!==Z)){const pn=L===Z&&st.id===tt;yt.setState(st,L,pn)}let re=!1;st.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Qn.state.version||Vt.outputColorSpace!==Lt||at.isBatchedMesh&&Vt.batching===!1||!at.isBatchedMesh&&Vt.batching===!0||at.isBatchedMesh&&Vt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Vt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Vt.instancing===!1||!at.isInstancedMesh&&Vt.instancing===!0||at.isSkinnedMesh&&Vt.skinning===!1||!at.isSkinnedMesh&&Vt.skinning===!0||at.isInstancedMesh&&Vt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Vt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Vt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Vt.instancingMorph===!1&&at.morphTexture!==null||Vt.envMap!==Zt||st.fog===!0&&Vt.fog!==Ct||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==yt.numPlanes||Vt.numIntersection!==yt.numIntersection)||Vt.vertexAlphas!==ie||Vt.vertexTangents!==oe||Vt.morphTargets!==Ht||Vt.morphNormals!==fe||Vt.morphColors!==Ke||Vt.toneMapping!==Qe||Vt.morphTargetsCount!==Mn)&&(re=!0):(re=!0,Vt.__version=st.version);let Jn=Vt.currentProgram;re===!0&&(Jn=Vr(st,J,at));let _i=!1,Ji=!1,vi=!1;const Pe=Jn.getUniforms(),dn=Vt.uniforms;if(jt.useProgram(Jn.program)&&(_i=!0,Ji=!0,vi=!0),st.id!==tt&&(tt=st.id,Ji=!0),_i||Z!==L){jt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Pe.setValue(X,"projectionMatrix",L.projectionMatrix),Pe.setValue(X,"viewMatrix",L.matrixWorldInverse);const $i=Pe.map.cameraPosition;$i!==void 0&&$i.setValue(X,ce.setFromMatrixPosition(L.matrixWorld)),Ne.logarithmicDepthBuffer&&Pe.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Pe.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),Z!==L&&(Z=L,Ji=!0,vi=!0)}if(Vt.needsLights&&(Qn.state.directionalShadowMap.length>0&&Pe.setValue(X,"directionalShadowMap",Qn.state.directionalShadowMap,Q),Qn.state.spotShadowMap.length>0&&Pe.setValue(X,"spotShadowMap",Qn.state.spotShadowMap,Q),Qn.state.pointShadowMap.length>0&&Pe.setValue(X,"pointShadowMap",Qn.state.pointShadowMap,Q)),at.isSkinnedMesh){Pe.setOptional(X,at,"bindMatrix"),Pe.setOptional(X,at,"bindMatrixInverse");const pn=at.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Pe.setValue(X,"boneTexture",pn.boneTexture,Q))}at.isBatchedMesh&&(Pe.setOptional(X,at,"batchingTexture"),Pe.setValue(X,"batchingTexture",at._matricesTexture,Q),Pe.setOptional(X,at,"batchingIdTexture"),Pe.setValue(X,"batchingIdTexture",at._indirectTexture,Q),Pe.setOptional(X,at,"batchingColorTexture"),at._colorsTexture!==null&&Pe.setValue(X,"batchingColorTexture",at._colorsTexture,Q));const $n=lt.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Dt.update(at,lt,Jn),(Ji||Vt.receiveShadow!==at.receiveShadow)&&(Vt.receiveShadow=at.receiveShadow,Pe.setValue(X,"receiveShadow",at.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&J.environment!==null&&(dn.envMapIntensity.value=J.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=Q2()),Ji&&(Pe.setValue(X,"toneMappingExposure",w.toneMappingExposure),Vt.needsLights&&rl(dn,vi),Ct&&st.fog===!0&&Jt.refreshFogUniforms(dn,Ct),Jt.refreshMaterialUniforms(dn,st,bt,ht,U.state.transmissionRenderTarget[L.id]),Ef.upload(X,Oc(Vt),dn,Q)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Ef.upload(X,Oc(Vt),dn,Q),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Pe.setValue(X,"center",at.center),Pe.setValue(X,"modelViewMatrix",at.modelViewMatrix),Pe.setValue(X,"normalMatrix",at.normalMatrix),Pe.setValue(X,"modelMatrix",at.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const pn=st.uniformsGroups;for(let $i=0,Ua=pn.length;$i<Ua;$i++){const kr=pn[$i];It.update(kr,Jn),It.bind(kr,Jn)}}return Jn}function rl(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function Da(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(L,J,lt){const st=R.get(L);st.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),R.get(L.texture).__webglTexture=J,R.get(L.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,J){const lt=R.get(L);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0};const os=X.createFramebuffer();this.setRenderTarget=function(L,J=0,lt=0){Y=L,F=J,W=lt;let st=null,at=!1,Ct=!1;if(L){const Lt=R.get(L);if(Lt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(X.FRAMEBUFFER,Lt.__webglFramebuffer),G.copy(L.viewport),H.copy(L.scissor),it=L.scissorTest,jt.viewport(G),jt.scissor(H),jt.setScissorTest(it),tt=-1;return}else if(Lt.__webglFramebuffer===void 0)Q.setupRenderTarget(L);else if(Lt.__hasExternalTextures)Q.rebindTextures(L,R.get(L.texture).__webglTexture,R.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ie=L.depthTexture;if(Lt.__boundDepthTexture!==ie){if(ie!==null&&R.has(ie)&&(L.width!==ie.image.width||L.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(L)}}const qt=L.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ct=!0);const Zt=R.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Zt[J])?st=Zt[J][lt]:st=Zt[J],at=!0):L.samples>0&&Q.useMultisampledRTT(L)===!1?st=R.get(L).__webglMultisampledFramebuffer:Array.isArray(Zt)?st=Zt[lt]:st=Zt,G.copy(L.viewport),H.copy(L.scissor),it=L.scissorTest}else G.copy(nt).multiplyScalar(bt).floor(),H.copy(Et).multiplyScalar(bt).floor(),it=_t;if(lt!==0&&(st=os),jt.bindFramebuffer(X.FRAMEBUFFER,st)&&jt.drawBuffers(L,st),jt.viewport(G),jt.scissor(H),jt.setScissorTest(it),at){const Lt=R.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt.__webglTexture,lt)}else if(Ct){const Lt=J;for(let qt=0;qt<L.textures.length;qt++){const Zt=R.get(L.textures[qt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,lt,Lt)}}else if(L!==null&&lt!==0){const Lt=R.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Lt.__webglTexture,lt)}tt=-1},this.readRenderTargetPixels=function(L,J,lt,st,at,Ct,Bt,Lt=0){if(!(L&&L.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=R.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt){jt.bindFramebuffer(X.FRAMEBUFFER,qt);try{const Zt=L.textures[Lt],ie=Zt.format,oe=Zt.type;if(L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Lt),!Ne.textureFormatReadable(ie)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(oe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-st&&lt>=0&&lt<=L.height-at&&X.readPixels(J,lt,st,at,Rt.convert(ie),Rt.convert(oe),Ct)}finally{const Zt=Y!==null?R.get(Y).__webglFramebuffer:null;jt.bindFramebuffer(X.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(L,J,lt,st,at,Ct,Bt,Lt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=R.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt)if(J>=0&&J<=L.width-st&&lt>=0&&lt<=L.height-at){jt.bindFramebuffer(X.FRAMEBUFFER,qt);const Zt=L.textures[Lt],ie=Zt.format,oe=Zt.type;if(L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Lt),!Ne.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ht),X.bufferData(X.PIXEL_PACK_BUFFER,Ct.byteLength,X.STREAM_READ),X.readPixels(J,lt,st,at,Rt.convert(ie),Rt.convert(oe),0);const fe=Y!==null?R.get(Y).__webglFramebuffer:null;jt.bindFramebuffer(X.FRAMEBUFFER,fe);const Ke=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await uE(X,Ke,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ht),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ct),X.deleteBuffer(Ht),X.deleteSync(Ke),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,J=null,lt=0){const st=Math.pow(2,-lt),at=Math.floor(L.image.width*st),Ct=Math.floor(L.image.height*st),Bt=J!==null?J.x:0,Lt=J!==null?J.y:0;Q.setTexture2D(L,0),X.copyTexSubImage2D(X.TEXTURE_2D,lt,0,0,Bt,Lt,at,Ct),jt.unbindTexture()};const Qs=X.createFramebuffer(),ls=X.createFramebuffer();this.copyTextureToTexture=function(L,J,lt=null,st=null,at=0,Ct=0){let Bt,Lt,qt,Zt,ie,oe,Ht,fe,Ke;const Qe=L.isCompressedTexture?L.mipmaps[Ct]:L.image;if(lt!==null)Bt=lt.max.x-lt.min.x,Lt=lt.max.y-lt.min.y,qt=lt.isBox3?lt.max.z-lt.min.z:1,Zt=lt.min.x,ie=lt.min.y,oe=lt.isBox3?lt.min.z:0;else{const dn=Math.pow(2,-at);Bt=Math.floor(Qe.width*dn),Lt=Math.floor(Qe.height*dn),L.isDataArrayTexture?qt=Qe.depth:L.isData3DTexture?qt=Math.floor(Qe.depth*dn):qt=1,Zt=0,ie=0,oe=0}st!==null?(Ht=st.x,fe=st.y,Ke=st.z):(Ht=0,fe=0,Ke=0);const Ae=Rt.convert(J.format),Mn=Rt.convert(J.type);let Vt;J.isData3DTexture?(Q.setTexture3D(J,0),Vt=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Q.setTexture2DArray(J,0),Vt=X.TEXTURE_2D_ARRAY):(Q.setTexture2D(J,0),Vt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const Qn=X.getParameter(X.UNPACK_ROW_LENGTH),re=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Jn=X.getParameter(X.UNPACK_SKIP_PIXELS),_i=X.getParameter(X.UNPACK_SKIP_ROWS),Ji=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Qe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Zt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ie),X.pixelStorei(X.UNPACK_SKIP_IMAGES,oe);const vi=L.isDataArrayTexture||L.isData3DTexture,Pe=J.isDataArrayTexture||J.isData3DTexture;if(L.isDepthTexture){const dn=R.get(L),$n=R.get(J),pn=R.get(dn.__renderTarget),$i=R.get($n.__renderTarget);jt.bindFramebuffer(X.READ_FRAMEBUFFER,pn.__webglFramebuffer),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Ua=0;Ua<qt;Ua++)vi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,R.get(L).__webglTexture,at,oe+Ua),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,R.get(J).__webglTexture,Ct,Ke+Ua)),X.blitFramebuffer(Zt,ie,Bt,Lt,Ht,fe,Bt,Lt,X.DEPTH_BUFFER_BIT,X.NEAREST);jt.bindFramebuffer(X.READ_FRAMEBUFFER,null),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(at!==0||L.isRenderTargetTexture||R.has(L)){const dn=R.get(L),$n=R.get(J);jt.bindFramebuffer(X.READ_FRAMEBUFFER,Qs),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,ls);for(let pn=0;pn<qt;pn++)vi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dn.__webglTexture,at,oe+pn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dn.__webglTexture,at),Pe?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$n.__webglTexture,Ct,Ke+pn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$n.__webglTexture,Ct),at!==0?X.blitFramebuffer(Zt,ie,Bt,Lt,Ht,fe,Bt,Lt,X.COLOR_BUFFER_BIT,X.NEAREST):Pe?X.copyTexSubImage3D(Vt,Ct,Ht,fe,Ke+pn,Zt,ie,Bt,Lt):X.copyTexSubImage2D(Vt,Ct,Ht,fe,Zt,ie,Bt,Lt);jt.bindFramebuffer(X.READ_FRAMEBUFFER,null),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pe?L.isDataTexture||L.isData3DTexture?X.texSubImage3D(Vt,Ct,Ht,fe,Ke,Bt,Lt,qt,Ae,Mn,Qe.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(Vt,Ct,Ht,fe,Ke,Bt,Lt,qt,Ae,Qe.data):X.texSubImage3D(Vt,Ct,Ht,fe,Ke,Bt,Lt,qt,Ae,Mn,Qe):L.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ct,Ht,fe,Bt,Lt,Ae,Mn,Qe.data):L.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ct,Ht,fe,Qe.width,Qe.height,Ae,Qe.data):X.texSubImage2D(X.TEXTURE_2D,Ct,Ht,fe,Bt,Lt,Ae,Mn,Qe);X.pixelStorei(X.UNPACK_ROW_LENGTH,Qn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,re),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Jn),X.pixelStorei(X.UNPACK_SKIP_ROWS,_i),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ji),Ct===0&&J.generateMipmaps&&X.generateMipmap(Vt),jt.unbindTexture()},this.initRenderTarget=function(L){R.get(L).__webglFramebuffer===void 0&&Q.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Q.setTextureCube(L,0):L.isData3DTexture?Q.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Q.setTexture2DArray(L,0):Q.setTexture2D(L,0),jt.unbindTexture()},this.resetState=function(){F=0,W=0,Y=null,jt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}}class $2{constructor(t,e={}){this.container=t,this.isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),this.quality={pixelRatio:this.isMobile?1:Math.min(window.devicePixelRatio,2),antialias:!this.isMobile,shadowsEnabled:!this.isMobile,particleMultiplier:this.isMobile?.3:1},this.scene=new AE;const i=6333946;this.scene.fog=new h0(i,.0025),this.renderer=new J2({antialias:this.quality.antialias,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.quality.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(6333946),this.renderer.outputColorSpace=Ln,this.renderer.toneMapping=n0,this.renderer.toneMappingExposure=1.2,this.quality.shadowsEnabled&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=void 0),t.appendChild(this.renderer.domElement),this.camera=new Yi(60,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.set(0,5,20),this._setupLighting(),this.clock=new aT,this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this.updateCallbacks=[]}_setupLighting(){const t=new eT(4210784,.5);this.scene.add(t);const e=new Wx(16777215,.8);e.position.set(20,40,20),this.quality.shadowsEnabled&&(e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=.5,e.shadow.camera.far=150,e.shadow.camera.left=-40,e.shadow.camera.right=40,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,e.shadow.bias=-.001),this.scene.add(e),this.dirLight=e;const i=new Wx(12248829,.5);i.position.set(-10,5,-10),this.scene.add(i);const s=new JE(6333946,16777215,.6);this.scene.add(s)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}onUpdate(t){this.updateCallbacks.push(t)}render(){const t=this.clock.getDelta(),e=this.clock.getElapsedTime();for(const i of this.updateCallbacks)i(t,e);this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this._onResize),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}}function Ja(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function _y(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jo={duration:.5,overwrite:!1,delay:0},M0,Vn,Je,Ta=1e8,jn=1/Ta,Bm=Math.PI*2,tC=Bm/4,eC=0,vy=Math.sqrt,nC=Math.cos,iC=Math.sin,Pn=function(t){return typeof t=="string"},un=function(t){return typeof t=="function"},ss=function(t){return typeof t=="number"},b0=function(t){return typeof t>"u"},Ra=function(t){return typeof t=="object"},fi=function(t){return t!==!1},E0=function(){return typeof window<"u"},gf=function(t){return un(t)||Pn(t)},xy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zn=Array.isArray,aC=/random\([^)]+\)/g,sC=/,\s*/g,gS=/(?:-?\.?\d|\.)+/gi,Sy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ip=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yy=/[+-]=-?[.\d]+/,rC=/[^,'"\[\]\s]+/gi,oC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nn,ga,Gm,T0,Li={},Lf={},My,by=function(t){return(Lf=Zo(t,Li))&&mi},A0=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},yc=function(t,e){return!e&&console.warn(t)},Ey=function(t,e){return t&&(Li[t]=e)&&Lf&&(Lf[t]=e)||Li},Mc=function(){return 0},lC={suppressEvents:!0,isStart:!0,kill:!1},Tf={suppressEvents:!0,kill:!1},cC={suppressEvents:!0},w0={},Vs=[],Hm={},Ty,Ai={},zp={},_S=30,Af=[],R0="",C0=function(t){var e=t[0],i,s;if(Ra(e)||un(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(s=Af.length;s--&&!Af[s].targetTest(e););i=Af[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Zy(t[s],i)))||t.splice(s,1);return t},Lr=function(t){return t._gsap||C0(Ki(t))[0]._gsap},Ay=function(t,e,i){return(i=t[e])&&un(i)?t[e]():b0(i)&&t.getAttribute&&t.getAttribute(e)||i},hi=function(t,e){return(t=t.split(",")).forEach(e)||t},hn=function(t){return Math.round(t*1e5)/1e5||0},en=function(t){return Math.round(t*1e7)/1e7||0},Bo=function(t,e){var i=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},uC=function(t,e){for(var i=e.length,s=0;t.indexOf(e[s])<0&&++s<i;);return s<i},Nf=function(){var t=Vs.length,e=Vs.slice(0),i,s;for(Hm={},Vs.length=0,i=0;i<t;i++)s=e[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},D0=function(t){return!!(t._initted||t._startAt||t.add)},wy=function(t,e,i,s){Vs.length&&!Vn&&Nf(),t.render(e,i,!!(Vn&&e<0&&D0(t))),Vs.length&&!Vn&&Nf()},Ry=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(rC).length<2?e:Pn(t)?t.trim():t},Cy=function(t){return t},Ni=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},fC=function(t){return function(e,i){for(var s in i)s in e||s==="duration"&&t||s==="ease"||(e[s]=i[s])}},Zo=function(t,e){for(var i in e)t[i]=e[i];return t},vS=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ra(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},Pf=function(t,e){var i={},s;for(s in t)s in e||(i[s]=t[s]);return i},dc=function(t){var e=t.parent||nn,i=t.keyframes?fC(Zn(t.keyframes)):Ni;if(fi(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},hC=function(t,e){for(var i=t.length,s=i===e.length;s&&i--&&t[i]===e[i];);return i<0},Dy=function(t,e,i,s,l){var u=t[s],f;if(l)for(f=e[l];u&&u[l]>f;)u=u._prev;return u?(e._next=u._next,u._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[s]=e,e._prev=u,e.parent=e._dp=t,e},Xf=function(t,e,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var l=e._prev,u=e._next;l?l._next=u:t[i]===e&&(t[i]=u),u?u._prev=l:t[s]===e&&(t[s]=l),e._next=e._prev=e.parent=null},Ws=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Nr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},dC=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Vm=function(t,e,i,s){return t._startAt&&(Vn?t._startAt.revert(Tf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},pC=function o(t){return!t||t._ts&&o(t.parent)},xS=function(t){return t._repeat?Ko(t._tTime,t=t.duration()+t._rDelay)*t:0},Ko=function(t,e){var i=Math.floor(t=en(t/e));return t&&i===t?i-1:i},Of=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Wf=function(t){return t._end=en(t._start+(t._tDur/Math.abs(t._ts||t._rts||jn)||0))},qf=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=en(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Wf(t),i._dirty||Nr(i,t)),t},Uy=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Of(t.rawTime(),e),(!e._dur||Lc(0,e.totalDuration(),i)-e._tTime>jn)&&e.render(i,!0)),Nr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-1e-8}},va=function(t,e,i,s){return e.parent&&Ws(e),e._start=en((ss(i)?i:i||t!==nn?qi(t,i,e):t._time)+e._delay),e._end=en(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Dy(t,e,"_first","_last",t._sort?"_start":0),km(e)||(t._recent=e),s||Uy(t,e),t._ts<0&&qf(t,t._tTime),t},Ly=function(t,e){return(Li.ScrollTrigger||A0("scrollTrigger",e))&&Li.ScrollTrigger.create(e,t)},Ny=function(t,e,i,s,l){if(L0(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!Vn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ty!==Ri.frame)return Vs.push(t),t._lazy=[l,s],1},mC=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},km=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},gC=function(t,e,i,s){var l=t.ratio,u=e<0||!e&&(!t._start&&mC(t)&&!(!t._initted&&km(t))||(t._ts<0||t._dp._ts<0)&&!km(t))?0:1,f=t._rDelay,d=0,h,m,v;if(f&&t._repeat&&(d=Lc(0,t._tDur,e),m=Ko(d,f),t._yoyo&&m&1&&(u=1-u),m!==Ko(t._tTime,f)&&(l=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==l||Vn||s||t._zTime===jn||!e&&t._zTime){if(!t._initted&&Ny(t,e,s,i,d))return;for(v=t._zTime,t._zTime=e||(i?jn:0),i||(i=e&&!v),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=d,h=t._pt;h;)h.r(u,h.d),h=h._next;e<0&&Vm(t,e,i,!0),t._onUpdate&&!i&&Ci(t,"onUpdate"),d&&t._repeat&&!i&&t.parent&&Ci(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&Ws(t,1),!i&&!Vn&&(Ci(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},_C=function(t,e,i){var s;if(i>e)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},Qo=function(t,e,i,s){var l=t._repeat,u=en(e)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=u/t._dur),t._dur=u,t._tDur=l?l<0?1e10:en(u*(l+1)+t._rDelay*l):u,f>0&&!s&&qf(t,t._tTime=t._tDur*f),t.parent&&Wf(t),i||Nr(t.parent,t),t},SS=function(t){return t instanceof ii?Nr(t):Qo(t,t._dur)},vC={_start:0,endTime:Mc,totalDuration:Mc},qi=function o(t,e,i){var s=t.labels,l=t._recent||vC,u=t.duration()>=Ta?l.endTime(!1):t._dur,f,d,h;return Pn(e)&&(isNaN(e)||e in s)?(d=e.charAt(0),h=e.substr(-1)==="%",f=e.indexOf("="),d==="<"||d===">"?(f>=0&&(e=e.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(f<0?l:i).totalDuration()/100:1)):f<0?(e in s||(s[e]=u),s[e]):(d=parseFloat(e.charAt(f-1)+e.substr(f+1)),h&&i&&(d=d/100*(Zn(i)?i[0]:i).totalDuration()),f>1?o(t,e.substr(0,f-1),i)+d:u+d)):e==null?u:+e},pc=function(t,e,i){var s=ss(e[1]),l=(s?2:1)+(t<2?0:1),u=e[l],f,d;if(s&&(u.duration=e[1]),u.parent=i,t){for(f=u,d=i;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=fi(d.vars.inherit)&&d.parent;u.immediateRender=fi(f.immediateRender),t<2?u.runBackwards=1:u.startAt=e[l-1]}return new xn(e[0],u,e[l+1])},Zs=function(t,e){return t||t===0?e(t):e},Lc=function(t,e,i){return i<t?t:i>e?e:i},Yn=function(t,e){return!Pn(t)||!(e=oC.exec(t))?"":e[1]},xC=function(t,e,i){return Zs(i,function(s){return Lc(t,e,s)})},Xm=[].slice,Py=function(t,e){return t&&Ra(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ra(t[0]))&&!t.nodeType&&t!==ga},SC=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(s){var l;return Pn(s)&&!e||Py(s,1)?(l=i).push.apply(l,Ki(s)):i.push(s)})||i},Ki=function(t,e,i){return Je&&!e&&Je.selector?Je.selector(t):Pn(t)&&!i&&(Gm||!Jo())?Xm.call((e||T0).querySelectorAll(t),0):Zn(t)?SC(t,i):Py(t)?Xm.call(t,0):t?[t]:[]},Wm=function(t){return t=Ki(t)[0]||yc("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Ki(e,i.querySelectorAll?i:i===t?yc("Invalid scope")||T0.createElement("div"):t)}},Oy=function(t){return t.sort(function(){return .5-Math.random()})},Fy=function(t){if(un(t))return t;var e=Ra(t)?t:{each:t},i=Pr(e.ease),s=e.from||0,l=parseFloat(e.base)||0,u={},f=s>0&&s<1,d=isNaN(s)||f,h=e.axis,m=s,v=s;return Pn(s)?m=v={center:.5,edges:.5,end:1}[s]||0:!f&&d&&(m=s[0],v=s[1]),function(_,x,M){var b=(M||e).length,S=u[b],y,E,D,C,U,N,O,A,w;if(!S){if(w=e.grid==="auto"?0:(e.grid||[1,Ta])[1],!w){for(O=-1e8;O<(O=M[w++].getBoundingClientRect().left)&&w<b;);w<b&&w--}for(S=u[b]=[],y=d?Math.min(w,b)*m-.5:s%w,E=w===Ta?0:d?b*v/w-.5:s/w|0,O=0,A=Ta,N=0;N<b;N++)D=N%w-y,C=E-(N/w|0),S[N]=U=h?Math.abs(h==="y"?C:D):vy(D*D+C*C),U>O&&(O=U),U<A&&(A=U);s==="random"&&Oy(S),S.max=O-A,S.min=A,S.v=b=(parseFloat(e.amount)||parseFloat(e.each)*(w>b?b-1:h?h==="y"?b/w:w:Math.max(w,b/w))||0)*(s==="edges"?-1:1),S.b=b<0?l-b:l,S.u=Yn(e.amount||e.each)||0,i=i&&b<0?qy(i):i}return b=(S[_]-S.min)/S.max||0,en(S.b+(i?i(b):b)*S.v)+S.u}},qm=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=en(Math.round(parseFloat(i)/t)*t*e);return(s-s%1)/e+(ss(i)?0:Yn(i))}},Iy=function(t,e){var i=Zn(t),s,l;return!i&&Ra(t)&&(s=i=t.radius||Ta,t.values?(t=Ki(t.values),(l=!ss(t[0]))&&(s*=s)):t=qm(t.increment)),Zs(e,i?un(t)?function(u){return l=t(u),Math.abs(l-u)<=s?l:u}:function(u){for(var f=parseFloat(l?u.x:u),d=parseFloat(l?u.y:0),h=Ta,m=0,v=t.length,_,x;v--;)l?(_=t[v].x-f,x=t[v].y-d,_=_*_+x*x):_=Math.abs(t[v]-f),_<h&&(h=_,m=v);return m=!s||h<=s?t[m]:u,l||m===u||ss(u)?m:m+Yn(u)}:qm(t))},zy=function(t,e,i,s){return Zs(Zn(t)?!e:i===!0?!!(i=0):!s,function(){return Zn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*s)/s})},yC=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(s){return e.reduce(function(l,u){return u(l)},s)}},MC=function(t,e){return function(i){return t(parseFloat(i))+(e||Yn(i))}},bC=function(t,e,i){return Gy(t,e,0,1,i)},By=function(t,e,i){return Zs(i,function(s){return t[~~e(s)]})},EC=function o(t,e,i){var s=e-t;return Zn(t)?By(t,o(0,t.length),e):Zs(i,function(l){return(s+(l-t)%s)%s+t})},TC=function o(t,e,i){var s=e-t,l=s*2;return Zn(t)?By(t,o(0,t.length-1),e):Zs(i,function(u){return u=(l+(u-t)%l)%l||0,t+(u>s?l-u:u)})},bc=function(t){return t.replace(aC,function(e){var i=e.indexOf("[")+1,s=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(sC);return zy(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},Gy=function(t,e,i,s,l){var u=e-t,f=s-i;return Zs(l,function(d){return i+((d-t)/u*f||0)})},AC=function o(t,e,i,s){var l=isNaN(t+e)?0:function(x){return(1-x)*t+x*e};if(!l){var u=Pn(t),f={},d,h,m,v,_;if(i===!0&&(s=1)&&(i=null),u)t={p:t},e={p:e};else if(Zn(t)&&!Zn(e)){for(m=[],v=t.length,_=v-2,h=1;h<v;h++)m.push(o(t[h-1],t[h]));v--,l=function(M){M*=v;var b=Math.min(_,~~M);return m[b](M-b)},i=e}else s||(t=Zo(Zn(t)?[]:{},t));if(!m){for(d in e)U0.call(f,t,d,"get",e[d]);l=function(M){return O0(M,f)||(u?t.p:t)}}}return Zs(i,l)},yS=function(t,e,i){var s=t.labels,l=Ta,u,f,d;for(u in s)f=s[u]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(d=u,l=f);return d},Ci=function(t,e,i){var s=t.vars,l=s[e],u=Je,f=t._ctx,d,h,m;if(l)return d=s[e+"Params"],h=s.callbackScope||t,i&&Vs.length&&Nf(),f&&(Je=f),m=d?l.apply(h,d):l.call(h),Je=u,m},fc=function(t){return Ws(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Vn),t.progress()<1&&Ci(t,"onInterrupt"),t},Io,Hy=[],Vy=function(t){if(t)if(t=!t.name&&t.default||t,E0()||t.headless){var e=t.name,i=un(t),s=e&&!i&&t.init?function(){this._props=[]}:t,l={init:Mc,render:O0,add:U0,kill:VC,modifier:HC,rawVars:0},u={targetTest:0,get:0,getSetter:P0,aliases:{},register:0};if(Jo(),t!==s){if(Ai[e])return;Ni(s,Ni(Pf(t,l),u)),Zo(s.prototype,Zo(l,Pf(t,u))),Ai[s.prop=e]=s,t.targetTest&&(Af.push(s),w0[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ey(e,s),t.register&&t.register(mi,s,di)}else Hy.push(t)},Ge=255,hc={aqua:[0,Ge,Ge],lime:[0,Ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ge],navy:[0,0,128],white:[Ge,Ge,Ge],olive:[128,128,0],yellow:[Ge,Ge,0],orange:[Ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ge,0,0],pink:[Ge,192,203],cyan:[0,Ge,Ge],transparent:[Ge,Ge,Ge,0]},Bp=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ge+.5|0},ky=function(t,e,i){var s=t?ss(t)?[t>>16,t>>8&Ge,t&Ge]:0:hc.black,l,u,f,d,h,m,v,_,x,M;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),hc[t])s=hc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),u=t.charAt(2),f=t.charAt(3),t="#"+l+l+u+u+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ge,s&Ge,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ge,t&Ge]}else if(t.substr(0,3)==="hsl"){if(s=M=t.match(gS),!e)d=+s[0]%360/360,h=+s[1]/100,m=+s[2]/100,u=m<=.5?m*(h+1):m+h-m*h,l=m*2-u,s.length>3&&(s[3]*=1),s[0]=Bp(d+1/3,l,u),s[1]=Bp(d,l,u),s[2]=Bp(d-1/3,l,u);else if(~t.indexOf("="))return s=t.match(Sy),i&&s.length<4&&(s[3]=1),s}else s=t.match(gS)||hc.transparent;s=s.map(Number)}return e&&!M&&(l=s[0]/Ge,u=s[1]/Ge,f=s[2]/Ge,v=Math.max(l,u,f),_=Math.min(l,u,f),m=(v+_)/2,v===_?d=h=0:(x=v-_,h=m>.5?x/(2-v-_):x/(v+_),d=v===l?(u-f)/x+(u<f?6:0):v===u?(f-l)/x+2:(l-u)/x+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(m*100+.5)),i&&s.length<4&&(s[3]=1),s},Xy=function(t){var e=[],i=[],s=-1;return t.split(ks).forEach(function(l){var u=l.match(Fo)||[];e.push.apply(e,u),i.push(s+=u.length+1)}),e.c=i,e},MS=function(t,e,i){var s="",l=(t+s).match(ks),u=e?"hsla(":"rgba(",f=0,d,h,m,v;if(!l)return t;if(l=l.map(function(_){return(_=ky(_,e,1))&&u+(e?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(m=Xy(t),d=i.c,d.join(s)!==m.c.join(s)))for(h=t.replace(ks,"1").split(Fo),v=h.length-1;f<v;f++)s+=h[f]+(~d.indexOf(f)?l.shift()||u+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!h)for(h=t.split(ks),v=h.length-1;f<v;f++)s+=h[f]+l[f];return s+h[v]},ks=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in hc)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),wC=/hsl[a]?\(/,Wy=function(t){var e=t.join(" "),i;if(ks.lastIndex=0,ks.test(e))return i=wC.test(e),t[1]=MS(t[1],i),t[0]=MS(t[0],i,Xy(t[1])),!0},Ec,Ri=function(){var o=Date.now,t=500,e=33,i=o(),s=i,l=1e3/240,u=l,f=[],d,h,m,v,_,x,M=function b(S){var y=o()-s,E=S===!0,D,C,U,N;if((y>t||y<0)&&(i+=y-e),s+=y,U=s-i,D=U-u,(D>0||E)&&(N=++v.frame,_=U-v.time*1e3,v.time=U=U/1e3,u+=D+(D>=l?4:l-D),C=1),E||(d=h(b)),C)for(x=0;x<f.length;x++)f[x](U,_,N,S)};return v={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(S){return _/(1e3/(S||60))},wake:function(){My&&(!Gm&&E0()&&(ga=Gm=window,T0=ga.document||{},Li.gsap=mi,(ga.gsapVersions||(ga.gsapVersions=[])).push(mi.version),by(Lf||ga.GreenSockGlobals||!ga.gsap&&ga||{}),Hy.forEach(Vy)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&v.sleep(),h=m||function(S){return setTimeout(S,u-v.time*1e3+1|0)},Ec=1,M(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),Ec=0,h=Mc},lagSmoothing:function(S,y){t=S||1/0,e=Math.min(y||33,t)},fps:function(S){l=1e3/(S||240),u=v.time*1e3+l},add:function(S,y,E){var D=y?function(C,U,N,O){S(C,U,N,O),v.remove(D)}:S;return v.remove(S),f[E?"unshift":"push"](D),Jo(),D},remove:function(S,y){~(y=f.indexOf(S))&&f.splice(y,1)&&x>=y&&x--},_listeners:f},v}(),Jo=function(){return!Ec&&Ri.wake()},Me={},RC=/^[\d.\-M][\d.\-,\s]/,CC=/["']/g,DC=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),s=i[0],l=1,u=i.length,f,d,h;l<u;l++)d=i[l],f=l!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,f),e[s]=isNaN(h)?h.replace(CC,"").trim():+h,s=d.substr(f+1).trim();return e},UC=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<i?t.indexOf(")",i+1):i)},LC=function(t){var e=(t+"").split("("),i=Me[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[DC(e[1])]:UC(t).split(",").map(Ry)):Me._CE&&RC.test(t)?Me._CE("",t):i},qy=function(t){return function(e){return 1-t(1-e)}},Yy=function o(t,e){for(var i=t._first,s;i;)i instanceof ii?o(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?o(i.timeline,e):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=e)),i=i._next},Pr=function(t,e){return t&&(un(t)?t:Me[t]||LC(t))||e},Br=function(t,e,i,s){i===void 0&&(i=function(d){return 1-e(1-d)}),s===void 0&&(s=function(d){return d<.5?e(d*2)/2:1-e((1-d)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:s},u;return hi(t,function(f){Me[f]=Li[f]=l,Me[u=f.toLowerCase()]=i;for(var d in l)Me[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Me[f+"."+d]=l[d]}),l},jy=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Gp=function o(t,e,i){var s=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),u=l/Bm*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*iC((m-u)*l)+1},d=t==="out"?f:t==="in"?function(h){return 1-f(1-h)}:jy(f);return l=Bm/l,d.config=function(h,m){return o(t,h,m)},d},Hp=function o(t,e){e===void 0&&(e=1.70158);var i=function(u){return u?--u*u*((e+1)*u+e)+1:0},s=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:jy(i);return s.config=function(l){return o(t,l)},s};hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Br(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;Br("Elastic",Gp("in"),Gp("out"),Gp());(function(o,t){var e=1/t,i=2*e,s=2.5*e,l=function(f){return f<e?o*f*f:f<i?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Br("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);Br("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Br("Circ",function(o){return-(vy(1-o*o)-1)});Br("Sine",function(o){return o===1?1:-nC(o*tC)+1});Br("Back",Hp("in"),Hp("out"),Hp());Me.SteppedEase=Me.steps=Li.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,s=t+(e?0:1),l=e?1:0,u=1-jn;return function(f){return((s*Lc(0,u,f)|0)+l)*i}}};jo.ease=Me["quad.out"];hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return R0+=o+","+o+"Params,"});var Zy=function(t,e){this.id=eC++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ay,this.set=e?e.getSetter:P0},Tc=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qo(this,+e.duration,1,1),this.data=e.data,Je&&(this._ctx=Je,Je.data.push(this)),Ec||Ri.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Qo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(Jo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(qf(this,i),!l._dp||l.parent||Uy(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&va(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===jn||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),wy(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+xS(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+xS(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,s):this._repeat?Ko(this._tTime,l)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Of(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(Lc(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),Wf(this),dC(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jn&&(this._tTime-=jn)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=en(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&va(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(fi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Of(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=cC);var s=Vn;return Vn=i,D0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Vn=s,this},t.globalTime=function(i){for(var s=this,l=arguments.length?i:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,SS(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,SS(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(qi(this,i),fi(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,fi(s)),this._dur||(this._zTime=-1e-8),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=s&&l<this.endTime(!0)-jn)},t.eventCallback=function(i,s,l){var u=this.vars;return arguments.length>1?(s?(u[i]=s,l&&(u[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},t.then=function(i){var s=this,l=s._prom;return new Promise(function(u){var f=un(i)?i:Cy,d=function(){var m=s.then;s.then=null,l&&l(),un(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=m),u(f),s.then=m};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},t.kill=function(){fc(this)},o}();Ni(Tc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var ii=function(o){_y(t,o);function t(i,s){var l;return i===void 0&&(i={}),l=o.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=fi(i.sortChildren),nn&&va(i.parent||nn,Ja(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&Ly(Ja(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(s,l,u){return pc(0,arguments,this),this},e.from=function(s,l,u){return pc(1,arguments,this),this},e.fromTo=function(s,l,u,f){return pc(2,arguments,this),this},e.set=function(s,l,u){return l.duration=0,l.parent=this,dc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new xn(s,l,qi(this,u),1),this},e.call=function(s,l,u){return va(this,xn.delayedCall(0,s,l),u)},e.staggerTo=function(s,l,u,f,d,h,m){return u.duration=l,u.stagger=u.stagger||f,u.onComplete=h,u.onCompleteParams=m,u.parent=this,new xn(s,u,qi(this,d)),this},e.staggerFrom=function(s,l,u,f,d,h,m){return u.runBackwards=1,dc(u).immediateRender=fi(u.immediateRender),this.staggerTo(s,l,u,f,d,h,m)},e.staggerFromTo=function(s,l,u,f,d,h,m,v){return f.startAt=u,dc(f).immediateRender=fi(f.immediateRender),this.staggerTo(s,l,f,d,h,m,v)},e.render=function(s,l,u){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=s<=0?0:en(s),v=this._zTime<0!=s<0&&(this._initted||!h),_,x,M,b,S,y,E,D,C,U,N,O;if(this!==nn&&m>d&&s>=0&&(m=d),m!==this._tTime||u||v){if(f!==this._time&&h&&(m+=this._time-f,s+=this._time-f),_=m,C=this._start,D=this._ts,y=!D,v&&(h||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(N=this._yoyo,S=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,u);if(_=en(m%S),m===d?(b=this._repeat,_=h):(U=en(m/S),b=~~U,b&&b===U&&(_=h,b--),_>h&&(_=h)),U=Ko(this._tTime,S),!f&&this._tTime&&U!==b&&this._tTime-U*S-this._dur<=0&&(U=b),N&&b&1&&(_=h-_,O=1),b!==U&&!this._lock){var A=N&&U&1,w=A===(N&&b&1);if(b<U&&(A=!A),f=A?0:m%h?h:m,this._lock=1,this.render(f||(O?0:en(b*S)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,U=b),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,w&&(this._lock=2,f=A?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;Yy(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=_C(this,en(f),en(_)),E&&(m-=_-(_=E._start))),this._tTime=m,this._time=_,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&h&&!l&&!U&&(Ci(this,"onStart"),this._tTime!==m))return this;if(_>=f&&s>=0)for(x=this._first;x;){if(M=x._next,(x._act||_>=x._start)&&x._ts&&E!==x){if(x.parent!==this)return this.render(s,l,u);if(x.render(x._ts>0?(_-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(_-x._start)*x._ts,l,u),_!==this._time||!this._ts&&!y){E=0,M&&(m+=this._zTime=-1e-8);break}}x=M}else{x=this._last;for(var k=s<0?s:_;x;){if(M=x._prev,(x._act||k<=x._end)&&x._ts&&E!==x){if(x.parent!==this)return this.render(s,l,u);if(x.render(x._ts>0?(k-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(k-x._start)*x._ts,l,u||Vn&&D0(x)),_!==this._time||!this._ts&&!y){E=0,M&&(m+=this._zTime=k?-1e-8:jn);break}}x=M}}if(E&&!l&&(this.pause(),E.render(_>=f?0:-1e-8)._zTime=_>=f?1:-1,this._ts))return this._start=C,Wf(this),this.render(s,l,u);this._onUpdate&&!l&&Ci(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(C===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(m===d&&this._ts>0||!m&&this._ts<0)&&Ws(this,1),!l&&!(s<0&&!f)&&(m||f||!d)&&(Ci(this,m===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,l){var u=this;if(ss(l)||(l=qi(this,l,s)),!(s instanceof Tc)){if(Zn(s))return s.forEach(function(f){return u.add(f,l)}),this;if(Pn(s))return this.addLabel(s,l);if(un(s))s=xn.delayedCall(0,s);else return this}return this!==s?va(this,s,l):this},e.getChildren=function(s,l,u,f){s===void 0&&(s=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),f===void 0&&(f=-1e8);for(var d=[],h=this._first;h;)h._start>=f&&(h instanceof xn?l&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,l,u)))),h=h._next;return d},e.getById=function(s){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===s)return l[u]},e.remove=function(s){return Pn(s)?this.removeLabel(s):un(s)?this.killTweensOf(s):(s.parent===this&&Xf(this,s),s===this._recent&&(this._recent=this._last),Nr(this))},e.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(Ri.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},e.addLabel=function(s,l){return this.labels[s]=qi(this,l),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,l,u){var f=xn.delayedCall(0,l||Mc,u);return f.data="isPause",this._hasPause=1,va(this,f,qi(this,s))},e.removePause=function(s){var l=this._first;for(s=qi(this,s);l;)l._start===s&&l.data==="isPause"&&Ws(l),l=l._next},e.killTweensOf=function(s,l,u){for(var f=this.getTweensOf(s,u),d=f.length;d--;)Bs!==f[d]&&f[d].kill(s,l);return this},e.getTweensOf=function(s,l){for(var u=[],f=Ki(s),d=this._first,h=ss(l),m;d;)d instanceof xn?uC(d._targets,f)&&(h?(!Bs||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&u.push(d):(m=d.getTweensOf(f,l)).length&&u.push.apply(u,m),d=d._next;return u},e.tweenTo=function(s,l){l=l||{};var u=this,f=qi(u,s),d=l,h=d.startAt,m=d.onStart,v=d.onStartParams,_=d.immediateRender,x,M=xn.to(u,Ni({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:u._time))/u.timeScale())||jn,onStart:function(){if(u.pause(),!x){var S=l.duration||Math.abs((f-(h&&"time"in h?h.time:u._time))/u.timeScale());M._dur!==S&&Qo(M,S,0,1).render(M._time,!0,!0),x=1}m&&m.apply(M,v||[])}},l));return _?M.render(0):M},e.tweenFromTo=function(s,l,u){return this.tweenTo(l,Ni({startAt:{time:qi(this,s)}},u))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),yS(this,qi(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),yS(this,qi(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+jn)},e.shiftChildren=function(s,l,u){u===void 0&&(u=0);var f=this._first,d=this.labels,h;for(s=en(s);f;)f._start>=u&&(f._start+=s,f._end+=s),f=f._next;if(l)for(h in d)d[h]>=u&&(d[h]+=s);return Nr(this)},e.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Nr(this)},e.totalDuration=function(s){var l=0,u=this,f=u._last,d=Ta,h,m,v;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(v=u.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&u._sort&&f._ts&&!u._lock?(u._lock=1,va(u,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!v&&!u._dp||v&&v.smoothChildTiming)&&(u._start+=en(m/u._ts),u._time-=m,u._tTime-=m),u.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=h;Qo(u,u===nn&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(s){if(nn._ts&&(wy(nn,Of(s,nn)),Ty=Ri.frame),Ri.frame>=_S){_S+=Ui.autoSleep||120;var l=nn._first;if((!l||!l._ts)&&Ui.autoSleep&&Ri._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Ri.sleep()}}},t}(Tc);Ni(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var NC=function(t,e,i,s,l,u,f){var d=new di(this._pt,t,e,0,1,eM,null,l),h=0,m=0,v,_,x,M,b,S,y,E;for(d.b=i,d.e=s,i+="",s+="",(y=~s.indexOf("random("))&&(s=bc(s)),u&&(E=[i,s],u(E,t,e),i=E[0],s=E[1]),_=i.match(Ip)||[];v=Ip.exec(s);)M=v[0],b=s.substring(h,v.index),x?x=(x+1)%5:b.substr(-5)==="rgba("&&(x=1),M!==_[m++]&&(S=parseFloat(_[m-1])||0,d._pt={_next:d._pt,p:b||m===1?b:",",s:S,c:M.charAt(1)==="="?Bo(S,M)-S:parseFloat(M)-S,m:x&&x<4?Math.round:0},h=Ip.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=f,(yy.test(s)||y)&&(d.e=0),this._pt=d,d},U0=function(t,e,i,s,l,u,f,d,h,m){un(s)&&(s=s(l||0,t,u));var v=t[e],_=i!=="get"?i:un(v)?h?t[e.indexOf("set")||!un(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():v,x=un(v)?h?zC:$y:N0,M;if(Pn(s)&&(~s.indexOf("random(")&&(s=bc(s)),s.charAt(1)==="="&&(M=Bo(_,s)+(Yn(_)||0),(M||M===0)&&(s=M))),!m||_!==s||Ym)return!isNaN(_*s)&&s!==""?(M=new di(this._pt,t,e,+_||0,s-(_||0),typeof v=="boolean"?GC:tM,0,x),h&&(M.fp=h),f&&M.modifier(f,this,t),this._pt=M):(!v&&!(e in t)&&A0(e,s),NC.call(this,t,e,_,s,x,d||Ui.stringFilter,h))},PC=function(t,e,i,s,l){if(un(t)&&(t=mc(t,l,e,i,s)),!Ra(t)||t.style&&t.nodeType||Zn(t)||xy(t))return Pn(t)?mc(t,l,e,i,s):t;var u={},f;for(f in t)u[f]=mc(t[f],l,e,i,s);return u},Ky=function(t,e,i,s,l,u){var f,d,h,m;if(Ai[t]&&(f=new Ai[t]).init(l,f.rawVars?e[t]:PC(e[t],s,l,u,i),i,s,u)!==!1&&(i._pt=d=new di(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==Io))for(h=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=d;return f},Bs,Ym,L0=function o(t,e,i){var s=t.vars,l=s.ease,u=s.startAt,f=s.immediateRender,d=s.lazy,h=s.onUpdate,m=s.runBackwards,v=s.yoyoEase,_=s.keyframes,x=s.autoRevert,M=t._dur,b=t._startAt,S=t._targets,y=t.parent,E=y&&y.data==="nested"?y.vars.targets:S,D=t._overwrite==="auto"&&!M0,C=t.timeline,U,N,O,A,w,k,F,W,Y,tt,Z,G,H;if(C&&(!_||!l)&&(l="none"),t._ease=Pr(l,jo.ease),t._yEase=v?qy(Pr(v===!0?l:v,jo.ease)):0,v&&t._yoyo&&!t._repeat&&(v=t._yEase,t._yEase=t._ease,t._ease=v),t._from=!C&&!!s.runBackwards,!C||_&&!s.stagger){if(W=S[0]?Lr(S[0]).harness:0,G=W&&s[W.prop],U=Pf(s,w0),b&&(b._zTime<0&&b.progress(1),e<0&&m&&f&&!x?b.render(-1,!0):b.revert(m&&M?Tf:lC),b._lazy=0),u){if(Ws(t._startAt=xn.set(S,Ni({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!b&&fi(d),startAt:null,delay:0,onUpdate:h&&function(){return Ci(t,"onUpdate")},stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Vn||!f&&!x)&&t._startAt.revert(Tf),f&&M&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(m&&M&&!b){if(e&&(f=!1),O=Ni({overwrite:!1,data:"isFromStart",lazy:f&&!b&&fi(d),immediateRender:f,stagger:0,parent:y},U),G&&(O[W.prop]=G),Ws(t._startAt=xn.set(S,O)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Vn?t._startAt.revert(Tf):t._startAt.render(-1,!0)),t._zTime=e,!f)o(t._startAt,jn,jn);else if(!e)return}for(t._pt=t._ptCache=0,d=M&&fi(d)||d&&!M,N=0;N<S.length;N++){if(w=S[N],F=w._gsap||C0(S)[N]._gsap,t._ptLookup[N]=tt={},Hm[F.id]&&Vs.length&&Nf(),Z=E===S?N:E.indexOf(w),W&&(Y=new W).init(w,G||U,t,Z,E)!==!1&&(t._pt=A=new di(t._pt,w,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(it){tt[it]=A}),Y.priority&&(k=1)),!W||G)for(O in U)Ai[O]&&(Y=Ky(O,U,t,Z,w,E))?Y.priority&&(k=1):tt[O]=A=U0.call(t,w,O,"get",U[O],Z,E,0,s.stringFilter);t._op&&t._op[N]&&t.kill(w,t._op[N]),D&&t._pt&&(Bs=t,nn.killTweensOf(w,tt,t.globalTime(e)),H=!t.parent,Bs=0),t._pt&&d&&(Hm[F.id]=1)}k&&nM(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!H,_&&e<=0&&C.render(Ta,!0,!0)},OC=function(t,e,i,s,l,u,f,d){var h=(t._pt&&t._ptCache||(t._ptCache={}))[e],m,v,_,x;if(!h)for(h=t._ptCache[e]=[],_=t._ptLookup,x=t._targets.length;x--;){if(m=_[x][e],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==e&&m.fp!==e;)m=m._next;if(!m)return Ym=1,t.vars[e]="+=0",L0(t,f),Ym=0,d?yc(e+" not eligible for reset"):1;h.push(m)}for(x=h.length;x--;)v=h[x],m=v._pt||v,m.s=(s||s===0)&&!l?s:m.s+(s||0)+u*m.c,m.c=i-m.s,v.e&&(v.e=hn(i)+Yn(v.e)),v.b&&(v.b=m.s+Yn(v.b))},FC=function(t,e){var i=t[0]?Lr(t[0]).harness:0,s=i&&i.aliases,l,u,f,d;if(!s)return e;l=Zo({},e);for(u in s)if(u in l)for(d=s[u].split(","),f=d.length;f--;)l[d[f]]=l[u];return l},IC=function(t,e,i,s){var l=e.ease||s||"power1.inOut",u,f;if(Zn(e))f=i[t]||(i[t]=[]),e.forEach(function(d,h){return f.push({t:h/(e.length-1)*100,v:d,e:l})});else for(u in e)f=i[u]||(i[u]=[]),u==="ease"||f.push({t:parseFloat(t),v:e[u],e:l})},mc=function(t,e,i,s,l){return un(t)?t.call(e,i,s,l):Pn(t)&&~t.indexOf("random(")?bc(t):t},Qy=R0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jy={};hi(Qy+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Jy[o]=1});var xn=function(o){_y(t,o);function t(i,s,l,u){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,u?s:dc(s))||this;var d=f.vars,h=d.duration,m=d.delay,v=d.immediateRender,_=d.stagger,x=d.overwrite,M=d.keyframes,b=d.defaults,S=d.scrollTrigger,y=d.yoyoEase,E=s.parent||nn,D=(Zn(i)||xy(i)?ss(i[0]):"length"in s)?[i]:Ki(i),C,U,N,O,A,w,k,F;if(f._targets=D.length?C0(D):yc("GSAP target "+i+" not found. https://gsap.com",!Ui.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,M||_||gf(h)||gf(m)){if(s=f.vars,C=f.timeline=new ii({data:"nested",defaults:b||{},targets:E&&E.data==="nested"?E.vars.targets:D}),C.kill(),C.parent=C._dp=Ja(f),C._start=0,_||gf(h)||gf(m)){if(O=D.length,k=_&&Fy(_),Ra(_))for(A in _)~Qy.indexOf(A)&&(F||(F={}),F[A]=_[A]);for(U=0;U<O;U++)N=Pf(s,Jy),N.stagger=0,y&&(N.yoyoEase=y),F&&Zo(N,F),w=D[U],N.duration=+mc(h,Ja(f),U,w,D),N.delay=(+mc(m,Ja(f),U,w,D)||0)-f._delay,!_&&O===1&&N.delay&&(f._delay=m=N.delay,f._start+=m,N.delay=0),C.to(w,N,k?k(U,w,D):0),C._ease=Me.none;C.duration()?h=m=0:f.timeline=0}else if(M){dc(Ni(C.vars.defaults,{ease:"none"})),C._ease=Pr(M.ease||s.ease||"none");var W=0,Y,tt,Z;if(Zn(M))M.forEach(function(G){return C.to(D,G,">")}),C.duration();else{N={};for(A in M)A==="ease"||A==="easeEach"||IC(A,M[A],N,M.easeEach);for(A in N)for(Y=N[A].sort(function(G,H){return G.t-H.t}),W=0,U=0;U<Y.length;U++)tt=Y[U],Z={ease:tt.e,duration:(tt.t-(U?Y[U-1].t:0))/100*h},Z[A]=tt.v,C.to(D,Z,W),W+=Z.duration;C.duration()<h&&C.to({},{duration:h-C.duration()})}}h||f.duration(h=C.duration())}else f.timeline=0;return x===!0&&!M0&&(Bs=Ja(f),nn.killTweensOf(D),Bs=0),va(E,Ja(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(v||!h&&!M&&f._start===en(E._time)&&fi(v)&&pC(Ja(f))&&E.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-m)||0)),S&&Ly(Ja(f),S),f}var e=t.prototype;return e.render=function(s,l,u){var f=this._time,d=this._tDur,h=this._dur,m=s<0,v=s>d-jn&&!m?d:s<jn?0:s,_,x,M,b,S,y,E,D,C;if(!h)gC(this,s,l,u);else if(v!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(_=v,D=this.timeline,this._repeat){if(b=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(b*100+s,l,u);if(_=en(v%b),v===d?(M=this._repeat,_=h):(S=en(v/b),M=~~S,M&&M===S?(_=h,M--):_>h&&(_=h)),y=this._yoyo&&M&1,y&&(C=this._yEase,_=h-_),S=Ko(this._tTime,b),_===f&&!u&&this._initted&&M===S)return this._tTime=v,this;M!==S&&(D&&this._yEase&&Yy(D,y),this.vars.repeatRefresh&&!y&&!this._lock&&_!==b&&this._initted&&(this._lock=u=1,this.render(en(b*M),!0).invalidate()._lock=0))}if(!this._initted){if(Ny(this,m?s:_,u,l,v))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&M!==S))return this;if(h!==this._dur)return this.render(s,l,u)}if(this._tTime=v,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(C||this._ease)(_/h),this._from&&(this.ratio=E=1-E),!f&&v&&!l&&!S&&(Ci(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(E,x.d),x=x._next;D&&D.render(s<0?s:D._dur*D._ease(_/this._dur),l,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&Vm(this,s,l,u),Ci(this,"onUpdate")),this._repeat&&M!==S&&this.vars.onRepeat&&!l&&this.parent&&Ci(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(m&&!this._onUpdate&&Vm(this,s,!0,!0),(s||!h)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&Ws(this,1),!l&&!(m&&!f)&&(v||f||y)&&(Ci(this,v===d?"onComplete":"onReverseComplete",!0),this._prom&&!(v<d&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},e.resetTo=function(s,l,u,f,d){Ec||Ri.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||L0(this,h),m=this._ease(h/this._dur),OC(this,s,l,u,f,m,h,d)?this.resetTo(s,l,u,f,1):(qf(this,0),this.parent||Dy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?fc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Bs&&Bs.vars.overwrite!==!0)._first||fc(this),this.parent&&u!==this.timeline.totalDuration()&&Qo(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,d=s?Ki(s):f,h=this._ptLookup,m=this._pt,v,_,x,M,b,S,y;if((!l||l==="all")&&hC(f,d))return l==="all"&&(this._pt=0),fc(this);for(v=this._op=this._op||[],l!=="all"&&(Pn(l)&&(b={},hi(l,function(E){return b[E]=1}),l=b),l=FC(f,l)),y=f.length;y--;)if(~d.indexOf(f[y])){_=h[y],l==="all"?(v[y]=l,M=_,x={}):(x=v[y]=v[y]||{},M=l);for(b in M)S=_&&_[b],S&&((!("kill"in S.d)||S.d.kill(b)===!0)&&Xf(this,S,"_pt"),delete _[b]),x!=="all"&&(x[b]=1)}return this._initted&&!this._pt&&m&&fc(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return pc(1,arguments)},t.delayedCall=function(s,l,u,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},t.fromTo=function(s,l,u){return pc(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,u){return nn.killTweensOf(s,l,u)},t}(Tc);Ni(xn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hi("staggerTo,staggerFrom,staggerFromTo",function(o){xn[o]=function(){var t=new ii,e=Xm.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var N0=function(t,e,i){return t[e]=i},$y=function(t,e,i){return t[e](i)},zC=function(t,e,i,s){return t[e](s.fp,i)},BC=function(t,e,i){return t.setAttribute(e,i)},P0=function(t,e){return un(t[e])?$y:b0(t[e])&&t.setAttribute?BC:N0},tM=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},GC=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},eM=function(t,e){var i=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=e.c}e.set(e.t,e.p,s,e)},O0=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},HC=function(t,e,i,s){for(var l=this._pt,u;l;)u=l._next,l.p===s&&l.modifier(t,e,i),l=u},VC=function(t){for(var e=this._pt,i,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?Xf(this,e,"_pt"):e.dep||(i=1),e=s;return!i},kC=function(t,e,i,s){s.mSet(t,e,s.m.call(s.tween,i,s.mt),s)},nM=function(t){for(var e=t._pt,i,s,l,u;e;){for(i=e._next,s=l;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:u)?e._prev._next=e:l=e,(e._next=s)?s._prev=e:u=e,e=i}t._pt=l},di=function(){function o(e,i,s,l,u,f,d,h,m){this.t=i,this.s=l,this.c=u,this.p=s,this.r=f||tM,this.d=d||this,this.set=h||N0,this.pr=m||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,s,l){this.mSet=this.mSet||this.set,this.set=kC,this.m=i,this.mt=l,this.tween=s},o}();hi(R0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return w0[o]=1});Li.TweenMax=Li.TweenLite=xn;Li.TimelineLite=Li.TimelineMax=ii;nn=new ii({sortChildren:!1,defaults:jo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ui.stringFilter=Wy;var Or=[],wf={},XC=[],bS=0,WC=0,Vp=function(t){return(wf[t]||XC).map(function(e){return e()})},jm=function(){var t=Date.now(),e=[];t-bS>2&&(Vp("matchMediaInit"),Or.forEach(function(i){var s=i.queries,l=i.conditions,u,f,d,h;for(f in s)u=ga.matchMedia(s[f]).matches,u&&(d=1),u!==l[f]&&(l[f]=u,h=1);h&&(i.revert(),d&&e.push(i))}),Vp("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),bS=t,Vp("matchMedia"))},iM=function(){function o(e,i){this.selector=i&&Wm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=WC++,e&&this.add(e)}var t=o.prototype;return t.add=function(i,s,l){un(i)&&(l=s,s=i,i=un);var u=this,f=function(){var h=Je,m=u.selector,v;return h&&h!==u&&h.data.push(u),l&&(u.selector=Wm(l)),Je=u,v=s.apply(u,arguments),un(v)&&u._r.push(v),Je=h,u.selector=m,u.isReverted=!1,v};return u.last=f,i===un?f(u,function(d){return u.add(null,d)}):i?u[i]=f:f},t.ignore=function(i){var s=Je;Je=null,i(this),Je=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof o?i.push.apply(i,s.getTweens()):s instanceof xn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var l=this;if(i?function(){for(var f=l.getTweens(),d=l.data.length,h;d--;)h=l.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,v){return v.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),d=l.data.length;d--;)h=l.data[d],h instanceof ii?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof xn)&&h.revert&&h.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var u=Or.length;u--;)Or[u].id===this.id&&Or.splice(u,1)},t.revert=function(i){this.kill(i||{})},o}(),qC=function(){function o(e){this.contexts=[],this.scope=e,Je&&Je.data.push(this)}var t=o.prototype;return t.add=function(i,s,l){Ra(i)||(i={matches:i});var u=new iM(0,l||this.scope),f=u.conditions={},d,h,m;Je&&!u.selector&&(u.selector=Je.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?m=1:(d=ga.matchMedia(i[h]),d&&(Or.indexOf(u)<0&&Or.push(u),(f[h]=d.matches)&&(m=1),d.addListener?d.addListener(jm):d.addEventListener("change",jm)));return m&&s(u,function(v){return u.add(null,v)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},o}(),Ff={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(s){return Vy(s)})},timeline:function(t){return new ii(t)},getTweensOf:function(t,e){return nn.getTweensOf(t,e)},getProperty:function(t,e,i,s){Pn(t)&&(t=Ki(t)[0]);var l=Lr(t||{}).get,u=i?Cy:Ry;return i==="native"&&(i=""),t&&(e?u((Ai[e]&&Ai[e].get||l)(t,e,i,s)):function(f,d,h){return u((Ai[f]&&Ai[f].get||l)(t,f,d,h))})},quickSetter:function(t,e,i){if(t=Ki(t),t.length>1){var s=t.map(function(m){return mi.quickSetter(m,e,i)}),l=s.length;return function(m){for(var v=l;v--;)s[v](m)}}t=t[0]||{};var u=Ai[e],f=Lr(t),d=f.harness&&(f.harness.aliases||{})[e]||e,h=u?function(m){var v=new u;Io._pt=0,v.init(t,i?m+i:m,Io,0,[t]),v.render(1,v),Io._pt&&O0(1,Io)}:f.set(t,d);return u?h:function(m){return h(t,d,i?m+i:m,f,1)}},quickTo:function(t,e,i){var s,l=mi.to(t,Ni((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,m){return l.resetTo(e,d,h,m)};return u.tween=l,u},isTweening:function(t){return nn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Pr(t.ease,jo.ease)),vS(jo,t||{})},config:function(t){return vS(Ui,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,s=t.plugins,l=t.defaults,u=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Ai[f]&&!Li[f]&&yc(e+" effect requires "+f+" plugin.")}),zp[e]=function(f,d,h){return i(Ki(f),Ni(d||{},l),h)},u&&(ii.prototype[e]=function(f,d,h){return this.add(zp[e](f,Ra(d)?d:(h=d)&&{},this),h)})},registerEase:function(t,e){Me[t]=Pr(e)},parseEase:function(t,e){return arguments.length?Pr(t,e):Me},getById:function(t){return nn.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new ii(t),s,l;for(i.smoothChildTiming=fi(t.smoothChildTiming),nn.remove(i),i._dp=0,i._time=i._tTime=nn._time,s=nn._first;s;)l=s._next,(e||!(!s._dur&&s instanceof xn&&s.vars.onComplete===s._targets[0]))&&va(i,s,s._start-s._delay),s=l;return va(nn,i,0),i},context:function(t,e){return t?new iM(t,e):Je},matchMedia:function(t){return new qC(t)},matchMediaRefresh:function(){return Or.forEach(function(t){var e=t.conditions,i,s;for(s in e)e[s]&&(e[s]=!1,i=1);i&&t.revert()})||jm()},addEventListener:function(t,e){var i=wf[t]||(wf[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=wf[t],s=i&&i.indexOf(e);s>=0&&i.splice(s,1)},utils:{wrap:EC,wrapYoyo:TC,distribute:Fy,random:zy,snap:Iy,normalize:bC,getUnit:Yn,clamp:xC,splitColor:ky,toArray:Ki,selector:Wm,mapRange:Gy,pipe:yC,unitize:MC,interpolate:AC,shuffle:Oy},install:by,effects:zp,ticker:Ri,updateRoot:ii.updateRoot,plugins:Ai,globalTimeline:nn,core:{PropTween:di,globals:Ey,Tween:xn,Timeline:ii,Animation:Tc,getCache:Lr,_removeLinkedListItem:Xf,reverting:function(){return Vn},context:function(t){return t&&Je&&(Je.data.push(t),t._ctx=Je),Je},suppressOverwrites:function(t){return M0=t}}};hi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ff[o]=xn[o]});Ri.add(ii.updateRoot);Io=Ff.to({},{duration:0});var YC=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},jC=function(t,e){var i=t._targets,s,l,u;for(s in e)for(l=i.length;l--;)u=t._ptLookup[l][s],u&&(u=u.d)&&(u._pt&&(u=YC(u,s)),u&&u.modifier&&u.modifier(e[s],t,i[l],s))},kp=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,l,u){u._onInit=function(f){var d,h;if(Pn(l)&&(d={},hi(l,function(m){return d[m]=1}),l=d),e){d={};for(h in l)d[h]=e(l[h]);l=d}jC(f,l)}}}},mi=Ff.registerPlugin({name:"attr",init:function(t,e,i,s,l){var u,f,d;this.tween=i;for(u in e)d=t.getAttribute(u)||"",f=this.add(t,"setAttribute",(d||0)+"",e[u],s,l,0,0,u),f.op=u,f.b=d,this._props.push(u)},render:function(t,e){for(var i=e._pt;i;)Vn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},kp("roundProps",qm),kp("modifiers"),kp("snap",Iy))||Ff;xn.version=ii.version=mi.version="3.14.2";My=1;E0()&&Jo();Me.Power0;Me.Power1;Me.Power2;Me.Power3;Me.Power4;Me.Linear;Me.Quad;Me.Cubic;Me.Quart;Me.Quint;Me.Strong;Me.Elastic;Me.Back;Me.SteppedEase;Me.Bounce;Me.Sine;Me.Expo;Me.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ES,Gs,Go,F0,Dr,TS,I0,ZC=function(){return typeof window<"u"},rs={},Ar=180/Math.PI,Ho=Math.PI/180,Oo=Math.atan2,AS=1e8,z0=/([A-Z])/g,KC=/(left|right|width|margin|padding|x)/i,QC=/[\s,\(]\S/,ya={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},JC=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$C=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},t3=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},e3=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},aM=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},sM=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},n3=function(t,e,i){return t.style[e]=i},i3=function(t,e,i){return t.style.setProperty(e,i)},a3=function(t,e,i){return t._gsap[e]=i},s3=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},r3=function(t,e,i,s,l){var u=t._gsap;u.scaleX=u.scaleY=i,u.renderTransform(l,u)},o3=function(t,e,i,s,l){var u=t._gsap;u[e]=i,u.renderTransform(l,u)},an="transform",pi=an+"Origin",l3=function o(t,e){var i=this,s=this.target,l=s.style,u=s._gsap;if(t in rs&&l){if(this.tfm=this.tfm||{},t!=="transform")t=ya[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=$a(s,f)}):this.tfm[t]=u.x?u[t]:$a(s,t),t===pi&&(this.tfm.zOrigin=u.zOrigin);else return ya.transform.split(",").forEach(function(f){return o.call(i,f,e)});if(this.props.indexOf(an)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(pi,e,"")),t=an}(l||e)&&this.props.push(t,e,l[t])},rM=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},c3=function(){var t=this.props,e=this.target,i=e.style,s=e._gsap,l,u;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(z0,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=I0(),(!l||!l.isStart)&&!i[an]&&(rM(i),s.zOrigin&&i[pi]&&(i[pi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},oM=function(t,e){var i={target:t,props:[],revert:c3,save:l3};return t._gsap||mi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return i.save(s)}),i},lM,Km=function(t,e){var i=Gs.createElementNS?Gs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Gs.createElement(t);return i&&i.style?i:Gs.createElement(t)},Di=function o(t,e,i){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(z0,"-$1").toLowerCase())||s.getPropertyValue(e)||!i&&o(t,$o(e)||e,1)||""},wS="O,Moz,ms,Ms,Webkit".split(","),$o=function(t,e,i){var s=e||Dr,l=s.style,u=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(wS[u]+t in l););return u<0?null:(u===3?"ms":u>=0?wS[u]:"")+t},Qm=function(){ZC()&&window.document&&(ES=window,Gs=ES.document,Go=Gs.documentElement,Dr=Km("div")||{style:{}},Km("div"),an=$o(an),pi=an+"Origin",Dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lM=!!$o("perspective"),I0=mi.core.reverting,F0=1)},RS=function(t){var e=t.ownerSVGElement,i=Km("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",i.appendChild(s),Go.appendChild(i);try{l=s.getBBox()}catch{}return i.removeChild(s),Go.removeChild(i),l},CS=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},cM=function(t){var e,i;try{e=t.getBBox()}catch{e=RS(t),i=1}return e&&(e.width||e.height)||i||(e=RS(t)),e&&!e.width&&!e.x&&!e.y?{x:+CS(t,["x","cx","x1"])||0,y:+CS(t,["y","cy","y1"])||0,width:0,height:0}:e},uM=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&cM(t))},qs=function(t,e){if(e){var i=t.style,s;e in rs&&e!==pi&&(e=an),i.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(s==="--"?e:e.replace(z0,"-$1").toLowerCase())):i.removeAttribute(e)}},Hs=function(t,e,i,s,l,u){var f=new di(t._pt,e,i,0,1,u?sM:aM);return t._pt=f,f.b=s,f.e=l,t._props.push(i),f},DS={deg:1,rad:1,turn:1},u3={grid:1,flex:1},Ys=function o(t,e,i,s){var l=parseFloat(i)||0,u=(i+"").trim().substr((l+"").length)||"px",f=Dr.style,d=KC.test(e),h=t.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(d?"Width":"Height"),v=100,_=s==="px",x=s==="%",M,b,S,y;if(s===u||!l||DS[s]||DS[u])return l;if(u!=="px"&&!_&&(l=o(t,e,i,"px")),y=t.getCTM&&uM(t),(x||u==="%")&&(rs[e]||~e.indexOf("adius")))return M=y?t.getBBox()[d?"width":"height"]:t[m],hn(x?l/M*v:l/100*M);if(f[d?"width":"height"]=v+(_?u:s),b=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!h?t:t.parentNode,y&&(b=(t.ownerSVGElement||{}).parentNode),(!b||b===Gs||!b.appendChild)&&(b=Gs.body),S=b._gsap,S&&x&&S.width&&d&&S.time===Ri.time&&!S.uncache)return hn(l/S.width*v);if(x&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=v+s,M=t[m],E?t.style[e]=E:qs(t,e)}else(x||u==="%")&&!u3[Di(b,"display")]&&(f.position=Di(t,"position")),b===t&&(f.position="static"),b.appendChild(Dr),M=Dr[m],b.removeChild(Dr),f.position="absolute";return d&&x&&(S=Lr(b),S.time=Ri.time,S.width=b[m]),hn(_?M*l/v:M&&l?v/M*l:0)},$a=function(t,e,i,s){var l;return F0||Qm(),e in ya&&e!=="transform"&&(e=ya[e],~e.indexOf(",")&&(e=e.split(",")[0])),rs[e]&&e!=="transform"?(l=wc(t,s),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:zf(Di(t,pi))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=If[e]&&If[e](t,e,i)||Di(t,e)||Ay(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?Ys(t,e,l,i)+i:l},f3=function(t,e,i,s){if(!i||i==="none"){var l=$o(e,t,1),u=l&&Di(t,l,1);u&&u!==i?(e=l,i=u):e==="borderColor"&&(i=Di(t,"borderTopColor"))}var f=new di(this._pt,t.style,e,0,1,eM),d=0,h=0,m,v,_,x,M,b,S,y,E,D,C,U;if(f.b=i,f.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=Di(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(b=t.style[e],t.style[e]=s,s=Di(t,e)||s,b?t.style[e]=b:qs(t,e)),m=[i,s],Wy(m),i=m[0],s=m[1],_=i.match(Fo)||[],U=s.match(Fo)||[],U.length){for(;v=Fo.exec(s);)S=v[0],E=s.substring(d,v.index),M?M=(M+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(M=1),S!==(b=_[h++]||"")&&(x=parseFloat(b)||0,C=b.substr((x+"").length),S.charAt(1)==="="&&(S=Bo(x,S)+C),y=parseFloat(S),D=S.substr((y+"").length),d=Fo.lastIndex-D.length,D||(D=D||Ui.units[e]||C,d===s.length&&(s+=D,f.e+=D)),C!==D&&(x=Ys(t,e,b,D)||0),f._pt={_next:f._pt,p:E||h===1?E:",",s:x,c:y-x,m:M&&M<4||e==="zIndex"?Math.round:0});f.c=d<s.length?s.substring(d,s.length):""}else f.r=e==="display"&&s==="none"?sM:aM;return yy.test(s)&&(f.e=0),this._pt=f,f},US={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},h3=function(t){var e=t.split(" "),i=e[0],s=e[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),e[0]=US[i]||i,e[1]=US[s]||s,e.join(" ")},d3=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,s=i.style,l=e.u,u=i._gsap,f,d,h;if(l==="all"||l===!0)s.cssText="",d=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],rs[f]&&(d=1,f=f==="transformOrigin"?pi:an),qs(i,f);d&&(qs(i,an),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",wc(i,1),u.uncache=1,rM(s)))}},If={clearProps:function(t,e,i,s,l){if(l.data!=="isFromStart"){var u=t._pt=new di(t._pt,e,i,0,0,d3);return u.u=s,u.pr=-10,u.tween=l,t._props.push(i),1}}},Ac=[1,0,0,1,0,0],fM={},hM=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},LS=function(t){var e=Di(t,an);return hM(e)?Ac:e.substr(7).match(Sy).map(hn)},B0=function(t,e){var i=t._gsap||Lr(t),s=t.style,l=LS(t),u,f,d,h;return i.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?Ac:l):(l===Ac&&!t.offsetParent&&t!==Go&&!i.svg&&(d=s.display,s.display="block",u=t.parentNode,(!u||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,f=t.nextElementSibling,Go.appendChild(t)),l=LS(t),d?s.display=d:qs(t,"display"),h&&(f?u.insertBefore(t,f):u?u.appendChild(t):Go.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Jm=function(t,e,i,s,l,u){var f=t._gsap,d=l||B0(t,!0),h=f.xOrigin||0,m=f.yOrigin||0,v=f.xOffset||0,_=f.yOffset||0,x=d[0],M=d[1],b=d[2],S=d[3],y=d[4],E=d[5],D=e.split(" "),C=parseFloat(D[0])||0,U=parseFloat(D[1])||0,N,O,A,w;i?d!==Ac&&(O=x*S-M*b)&&(A=C*(S/O)+U*(-b/O)+(b*E-S*y)/O,w=C*(-M/O)+U*(x/O)-(x*E-M*y)/O,C=A,U=w):(N=cM(t),C=N.x+(~D[0].indexOf("%")?C/100*N.width:C),U=N.y+(~(D[1]||D[0]).indexOf("%")?U/100*N.height:U)),s||s!==!1&&f.smooth?(y=C-h,E=U-m,f.xOffset=v+(y*x+E*b)-y,f.yOffset=_+(y*M+E*S)-E):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=U,f.smooth=!!s,f.origin=e,f.originIsAbsolute=!!i,t.style[pi]="0px 0px",u&&(Hs(u,f,"xOrigin",h,C),Hs(u,f,"yOrigin",m,U),Hs(u,f,"xOffset",v,f.xOffset),Hs(u,f,"yOffset",_,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+U)},wc=function(t,e){var i=t._gsap||new Zy(t);if("x"in i&&!e&&!i.uncache)return i;var s=t.style,l=i.scaleX<0,u="px",f="deg",d=getComputedStyle(t),h=Di(t,pi)||"0",m,v,_,x,M,b,S,y,E,D,C,U,N,O,A,w,k,F,W,Y,tt,Z,G,H,it,ft,I,et,ht,bt,vt,Ot;return m=v=_=b=S=y=E=D=C=0,x=M=1,i.svg=!!(t.getCTM&&uM(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[an]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[an]!=="none"?d[an]:"")),s.scale=s.rotate=s.translate="none"),O=B0(t,i.svg),i.svg&&(i.uncache?(it=t.getBBox(),h=i.xOrigin-it.x+"px "+(i.yOrigin-it.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),Jm(t,H||h,!!H||i.originIsAbsolute,i.smooth!==!1,O)),U=i.xOrigin||0,N=i.yOrigin||0,O!==Ac&&(F=O[0],W=O[1],Y=O[2],tt=O[3],m=Z=O[4],v=G=O[5],O.length===6?(x=Math.sqrt(F*F+W*W),M=Math.sqrt(tt*tt+Y*Y),b=F||W?Oo(W,F)*Ar:0,E=Y||tt?Oo(Y,tt)*Ar+b:0,E&&(M*=Math.abs(Math.cos(E*Ho))),i.svg&&(m-=U-(U*F+N*Y),v-=N-(U*W+N*tt))):(Ot=O[6],bt=O[7],I=O[8],et=O[9],ht=O[10],vt=O[11],m=O[12],v=O[13],_=O[14],A=Oo(Ot,ht),S=A*Ar,A&&(w=Math.cos(-A),k=Math.sin(-A),H=Z*w+I*k,it=G*w+et*k,ft=Ot*w+ht*k,I=Z*-k+I*w,et=G*-k+et*w,ht=Ot*-k+ht*w,vt=bt*-k+vt*w,Z=H,G=it,Ot=ft),A=Oo(-Y,ht),y=A*Ar,A&&(w=Math.cos(-A),k=Math.sin(-A),H=F*w-I*k,it=W*w-et*k,ft=Y*w-ht*k,vt=tt*k+vt*w,F=H,W=it,Y=ft),A=Oo(W,F),b=A*Ar,A&&(w=Math.cos(A),k=Math.sin(A),H=F*w+W*k,it=Z*w+G*k,W=W*w-F*k,G=G*w-Z*k,F=H,Z=it),S&&Math.abs(S)+Math.abs(b)>359.9&&(S=b=0,y=180-y),x=hn(Math.sqrt(F*F+W*W+Y*Y)),M=hn(Math.sqrt(G*G+Ot*Ot)),A=Oo(Z,G),E=Math.abs(A)>2e-4?A*Ar:0,C=vt?1/(vt<0?-vt:vt):0),i.svg&&(H=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!hM(Di(t,an)),H&&t.setAttribute("transform",H))),Math.abs(E)>90&&Math.abs(E)<270&&(l?(x*=-1,E+=b<=0?180:-180,b+=b<=0?180:-180):(M*=-1,E+=E<=0?180:-180)),e=e||i.uncache,i.x=m-((i.xPercent=m&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+u,i.y=v-((i.yPercent=v&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+u,i.z=_+u,i.scaleX=hn(x),i.scaleY=hn(M),i.rotation=hn(b)+f,i.rotationX=hn(S)+f,i.rotationY=hn(y)+f,i.skewX=E+f,i.skewY=D+f,i.transformPerspective=C+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!e&&i.zOrigin||0)&&(s[pi]=zf(h)),i.xOffset=i.yOffset=0,i.force3D=Ui.force3D,i.renderTransform=i.svg?m3:lM?dM:p3,i.uncache=0,i},zf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Xp=function(t,e,i){var s=Yn(e);return hn(parseFloat(e)+parseFloat(Ys(t,"x",i+"px",s)))+s},p3=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,dM(t,e)},br="0deg",lc="0px",Er=") ",dM=function(t,e){var i=e||this,s=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.z,h=i.rotation,m=i.rotationY,v=i.rotationX,_=i.skewX,x=i.skewY,M=i.scaleX,b=i.scaleY,S=i.transformPerspective,y=i.force3D,E=i.target,D=i.zOrigin,C="",U=y==="auto"&&t&&t!==1||y===!0;if(D&&(v!==br||m!==br)){var N=parseFloat(m)*Ho,O=Math.sin(N),A=Math.cos(N),w;N=parseFloat(v)*Ho,w=Math.cos(N),u=Xp(E,u,O*w*-D),f=Xp(E,f,-Math.sin(N)*-D),d=Xp(E,d,A*w*-D+D)}S!==lc&&(C+="perspective("+S+Er),(s||l)&&(C+="translate("+s+"%, "+l+"%) "),(U||u!==lc||f!==lc||d!==lc)&&(C+=d!==lc||U?"translate3d("+u+", "+f+", "+d+") ":"translate("+u+", "+f+Er),h!==br&&(C+="rotate("+h+Er),m!==br&&(C+="rotateY("+m+Er),v!==br&&(C+="rotateX("+v+Er),(_!==br||x!==br)&&(C+="skew("+_+", "+x+Er),(M!==1||b!==1)&&(C+="scale("+M+", "+b+Er),E.style[an]=C||"translate(0, 0)"},m3=function(t,e){var i=e||this,s=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.rotation,h=i.skewX,m=i.skewY,v=i.scaleX,_=i.scaleY,x=i.target,M=i.xOrigin,b=i.yOrigin,S=i.xOffset,y=i.yOffset,E=i.forceCSS,D=parseFloat(u),C=parseFloat(f),U,N,O,A,w;d=parseFloat(d),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,d+=m),d||h?(d*=Ho,h*=Ho,U=Math.cos(d)*v,N=Math.sin(d)*v,O=Math.sin(d-h)*-_,A=Math.cos(d-h)*_,h&&(m*=Ho,w=Math.tan(h-m),w=Math.sqrt(1+w*w),O*=w,A*=w,m&&(w=Math.tan(m),w=Math.sqrt(1+w*w),U*=w,N*=w)),U=hn(U),N=hn(N),O=hn(O),A=hn(A)):(U=v,A=_,N=O=0),(D&&!~(u+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(D=Ys(x,"x",u,"px"),C=Ys(x,"y",f,"px")),(M||b||S||y)&&(D=hn(D+M-(M*U+b*O)+S),C=hn(C+b-(M*N+b*A)+y)),(s||l)&&(w=x.getBBox(),D=hn(D+s/100*w.width),C=hn(C+l/100*w.height)),w="matrix("+U+","+N+","+O+","+A+","+D+","+C+")",x.setAttribute("transform",w),E&&(x.style[an]=w)},g3=function(t,e,i,s,l){var u=360,f=Pn(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?Ar:1),h=d-s,m=s+h+"deg",v,_;return f&&(v=l.split("_")[1],v==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-360)),v==="cw"&&h<0?h=(h+u*AS)%u-~~(h/u)*u:v==="ccw"&&h>0&&(h=(h-u*AS)%u-~~(h/u)*u)),t._pt=_=new di(t._pt,e,i,s,h,JC),_.e=m,_.u="deg",t._props.push(i),_},NS=function(t,e){for(var i in e)t[i]=e[i];return t},_3=function(t,e,i){var s=NS({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=i.style,f,d,h,m,v,_,x,M;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[an]=e,f=wc(i,1),qs(i,an),i.setAttribute("transform",h)):(h=getComputedStyle(i)[an],u[an]=e,f=wc(i,1),u[an]=h);for(d in rs)h=s[d],m=f[d],h!==m&&l.indexOf(d)<0&&(x=Yn(h),M=Yn(m),v=x!==M?Ys(i,d,h,M):parseFloat(h),_=parseFloat(m),t._pt=new di(t._pt,f,d,v,_-v,Zm),t._pt.u=M||0,t._props.push(d));NS(f,s)};hi("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",s="Bottom",l="Left",u=(t<3?[e,i,s,l]:[e+l,e+i,s+i,s+l]).map(function(f){return t<2?o+f:"border"+f+o});If[t>1?"border"+o:o]=function(f,d,h,m,v){var _,x;if(arguments.length<4)return _=u.map(function(M){return $a(f,M,h)}),x=_.join(" "),x.split(_[0]).length===5?_[0]:x;_=(m+"").split(" "),x={},u.forEach(function(M,b){return x[M]=_[b]=_[b]||_[(b-1)/2|0]}),f.init(d,x,v)}});var pM={name:"css",register:Qm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,s,l){var u=this._props,f=t.style,d=i.vars.startAt,h,m,v,_,x,M,b,S,y,E,D,C,U,N,O,A,w;F0||Qm(),this.styles=this.styles||oM(t),A=this.styles.props,this.tween=i;for(b in e)if(b!=="autoRound"&&(m=e[b],!(Ai[b]&&Ky(b,e,i,s,t,l)))){if(x=typeof m,M=If[b],x==="function"&&(m=m.call(i,s,t,l),x=typeof m),x==="string"&&~m.indexOf("random(")&&(m=bc(m)),M)M(this,t,b,m,i)&&(O=1);else if(b.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(b)+"").trim(),m+="",ks.lastIndex=0,ks.test(h)||(S=Yn(h),y=Yn(m),y?S!==y&&(h=Ys(t,b,h,y)+y):S&&(m+=S)),this.add(f,"setProperty",h,m,s,l,0,0,b),u.push(b),A.push(b,0,f[b]);else if(x!=="undefined"){if(d&&b in d?(h=typeof d[b]=="function"?d[b].call(i,s,t,l):d[b],Pn(h)&&~h.indexOf("random(")&&(h=bc(h)),Yn(h+"")||h==="auto"||(h+=Ui.units[b]||Yn($a(t,b))||""),(h+"").charAt(1)==="="&&(h=$a(t,b))):h=$a(t,b),_=parseFloat(h),E=x==="string"&&m.charAt(1)==="="&&m.substr(0,2),E&&(m=m.substr(2)),v=parseFloat(m),b in ya&&(b==="autoAlpha"&&(_===1&&$a(t,"visibility")==="hidden"&&v&&(_=0),A.push("visibility",0,f.visibility),Hs(this,f,"visibility",_?"inherit":"hidden",v?"inherit":"hidden",!v)),b!=="scale"&&b!=="transform"&&(b=ya[b],~b.indexOf(",")&&(b=b.split(",")[0]))),D=b in rs,D){if(this.styles.save(b),w=m,x==="string"&&m.substring(0,6)==="var(--"){if(m=Di(t,m.substring(4,m.indexOf(")"))),m.substring(0,5)==="calc("){var k=t.style.perspective;t.style.perspective=m,m=Di(t,"perspective"),k?t.style.perspective=k:qs(t,"perspective")}v=parseFloat(m)}if(C||(U=t._gsap,U.renderTransform&&!e.parseTransform||wc(t,e.parseTransform),N=e.smoothOrigin!==!1&&U.smooth,C=this._pt=new di(this._pt,f,an,0,1,U.renderTransform,U,0,-1),C.dep=1),b==="scale")this._pt=new di(this._pt,U,"scaleY",U.scaleY,(E?Bo(U.scaleY,E+v):v)-U.scaleY||0,Zm),this._pt.u=0,u.push("scaleY",b),b+="X";else if(b==="transformOrigin"){A.push(pi,0,f[pi]),m=h3(m),U.svg?Jm(t,m,0,N,0,this):(y=parseFloat(m.split(" ")[2])||0,y!==U.zOrigin&&Hs(this,U,"zOrigin",U.zOrigin,y),Hs(this,f,b,zf(h),zf(m)));continue}else if(b==="svgOrigin"){Jm(t,m,1,N,0,this);continue}else if(b in fM){g3(this,U,b,_,E?Bo(_,E+m):m);continue}else if(b==="smoothOrigin"){Hs(this,U,"smooth",U.smooth,m);continue}else if(b==="force3D"){U[b]=m;continue}else if(b==="transform"){_3(this,m,t);continue}}else b in f||(b=$o(b)||b);if(D||(v||v===0)&&(_||_===0)&&!QC.test(m)&&b in f)S=(h+"").substr((_+"").length),v||(v=0),y=Yn(m)||(b in Ui.units?Ui.units[b]:S),S!==y&&(_=Ys(t,b,h,y)),this._pt=new di(this._pt,D?U:f,b,_,(E?Bo(_,E+v):v)-_,!D&&(y==="px"||b==="zIndex")&&e.autoRound!==!1?e3:Zm),this._pt.u=y||0,D&&w!==m?(this._pt.b=h,this._pt.e=w,this._pt.r=t3):S!==y&&y!=="%"&&(this._pt.b=h,this._pt.r=$C);else if(b in f)f3.call(this,t,b,h,E?E+m:m);else if(b in t)this.add(t,b,h||t[b],E?E+m:m,s,l);else if(b!=="parseTransform"){A0(b,m);continue}D||(b in f?A.push(b,0,f[b]):typeof t[b]=="function"?A.push(b,2,t[b]()):A.push(b,1,h||t[b])),u.push(b)}}O&&nM(this)},render:function(t,e){if(e.tween._time||!I0())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:$a,aliases:ya,getSetter:function(t,e,i){var s=ya[e];return s&&s.indexOf(",")<0&&(e=s),e in rs&&e!==pi&&(t._gsap.x||$a(t,"x"))?i&&TS===i?e==="scale"?s3:a3:(TS=i||{})&&(e==="scale"?r3:o3):t.style&&!b0(t.style[e])?n3:~e.indexOf("-")?i3:P0(t,e)},core:{_removeProperty:qs,_getMatrix:B0}};mi.utils.checkPrefix=$o;mi.core.getStyleSaver=oM;(function(o,t,e,i){var s=hi(o+","+t+","+e,function(l){rs[l]=1});hi(t,function(l){Ui.units[l]="deg",fM[l]=1}),ya[s[13]]=o+","+t,hi(i,function(l){var u=l.split(":");ya[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ui.units[o]="px"});mi.registerPlugin(pM);var mM=mi.registerPlugin(pM)||mi;mM.core.Tween;const $m={name:"Ranjith Govindasamy",tagline:"A Full Stack Developer and Designer",cvLink:"/cv.pdf"},v3={paragraphs:["I'm a passionate full-stack developer with a solid foundation in computer science. Proficient in the LAMP stack, Node.js, Express, WebSockets, and CRUD operations, I specialize in creating dynamic websites, CRMs, e-commerce platforms, and web applications.","I thrive on connecting front-end and back-end technologies to deliver seamless user experiences. Outside of coding, I contribute to open-source projects and stay up-to-date with the latest tech trends to continuously evolve my skills."]},_f=[{name:"HTML",color:"bg-orange-500",icon:"/assets/html.svg"},{name:"CSS",color:"bg-blue-500",icon:"/assets/css.svg"},{name:"Tailwind",color:"bg-cyan-500",icon:"/assets/tailwindcss.svg"},{name:"JavaScript",color:"bg-yellow-400",icon:"/assets/javascript.svg"},{name:"React JS",color:"bg-cyan-600",icon:"/assets/reactjs.svg"},{name:"Node JS",color:"bg-green-600",icon:"/assets/nodejs.svg"},{name:"Express",color:"bg-gray-800",icon:"/assets/expressjs.svg"},{name:"MySQL",color:"bg-blue-700",icon:"/assets/mysql.svg"},{name:"PHP",color:"bg-indigo-700",icon:"/assets/php.svg"},{name:"Git",color:"bg-red-500",icon:"/assets/git.svg"},{name:"Apache",color:"bg-red-600",icon:"/assets/apache.svg"},{name:"Bootstrap",color:"bg-purple-500",icon:"/assets/bootstrap.svg"},{name:"Figma",color:"bg-pink-400",icon:"/assets/figma.svg"},{name:"Postman",color:"bg-orange-500",icon:"/assets/postman.svg"},{name:"cPanel",color:"bg-orange-600",icon:"/assets/cpanel.svg"},{name:"Socket.io",color:"bg-gray-700",icon:"/assets/socketio.svg"},{name:"Vite",color:"bg-indigo-500",icon:"/assets/vite.svg"},{name:"npm",color:"bg-red-500",icon:"/assets/npm.svg"}],x3=[{title:"Custom Website Solutions",icon:"ri-code-box-line",desc:"Get a website tailored to your business needs, built for speed, security, and scalability."},{title:"Reliable Support & Maintenance",icon:"ri-customer-service-2-line",desc:"Stay worry-free with continuous updates, security patches, and technical assistance."},{title:"On-Time Project Delivery",icon:"ri-timer-line",desc:"Get your website or application launched on schedule without unnecessary delays."},{title:"Smart Business Solutions",icon:"ri-lightbulb-line",desc:"Optimize your operations with custom-built tools, automation, and seamless integrations."},{title:"Mobile & SEO Optimized",icon:"ri-smartphone-line",desc:"Ensure your website ranks well on Google and works smoothly on all devices."},{title:"Secure & Scalable Websites",icon:"ri-shield-keyhole-line",desc:"Future-proof your business with a highly secure and scalable online presence."}],S3=[{title:"Nivsjewels",stack:"Reactjs, Php, MySQL",url:"https://nivsjewels.com",image:"/assets/works/Screenshot (68).png"},{title:"AmbisGroup",stack:"Html, Css, Bootstrap, Php",url:"https://ambisgroup.in",image:"/assets/works/Screenshot (69).png"},{title:"Utsarvajewels",stack:"Html, Css, Bootstrap, Php",url:"https://utsarvajewels.com",image:"/assets/works/Screenshot (70).png"},{title:"Saayal Events",stack:"Html, Css, Bootstrap, Php",url:"https://saayal.in",image:"/assets/works/Screenshot (71).png"},{title:"Lotushealth",stack:"Html, Css, Bootstrap, Php",url:"https://lotushealth.life",image:"/assets/works/Screenshot (72).png"},{title:"Sheetal PMS",stack:"Linux, Apache, Tailwind",image:"/assets/works/Screenshot (73).png"},{title:"Hashchat",stack:"Nodejs, React, Socket.io",image:"/assets/works/Screenshot (74).png"},{title:"Hashday.in",stack:"Html, Css, Php, MySQL",url:"https://hashday.in",image:"/assets/works/Screenshot (75).png"},{title:"Techvedhu",stack:"Reactjs, Tailwind, Php",url:"https://techvedhu.com",image:"/assets/works/Screenshot (76).png"},{title:"sunscientific",stack:"Html, Css, Php, MySQL",url:"https://sunscientificcompany.com",image:"/assets/works/Screenshot (77).png"}],y3=[{company:"Hashday.in",role:"Fullstack WebDeveloper",period:"February 2024 - Now",description:"Maintaing and adding new features to an Application Portal for an Webapp. Tech stack includes: Php, Mysql, JavaScript, jQuery."},{company:"AmbisGroup",role:"Fullstack WebDeveloper",period:"December 2021 - November 2025",description:"Worked as a full-stack developer, building e-commerce platforms and web applications for the jewelry industry and rehabilitation centers."}],Vo={email:"ranjithmercer@email.com",location:"Coimbatore, Tamilnadu - India",socials:[{name:"facebook",url:"#"},{name:"twitter",url:"#"},{name:"instagram",url:"https://www.instagram.com/ranjith.exe"},{name:"youtube",url:"https://www.youtube.com/channel/UChW-YPRQUTzm_U3BkDlGrUg"}]},M3={text:"© 2026 Ranjith Govindasamy. All rights reserved."},Bf=[{id:"intro",label:"Intro"},{id:"about",label:"About"},{id:"skills",label:"Tech Stack"},{id:"services",label:"Services"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"contact",label:"Contact"}];class b3{constructor(t){this.camera=t,this.progress=0,this.targetProgress=0,this.currentSection=0,this.sectionCount=Bf.length,this.sectionSize=1/this.sectionCount,this._buildPath(),this.lookTarget=new V}_buildPath(){const t=[new V(0,12,30),new V(0,11,15),new V(0,10,0),new V(2,12,-40),new V(4,14,-80),new V(2,14,-120),new V(0,12,-170),new V(-2,10,-230),new V(-4,9,-280),new V(-2,9,-330),new V(0,10,-380),new V(4,18,-450),new V(6,20,-510),new V(4,20,-570),new V(0,18,-630),new V(-4,12,-720),new V(-6,10,-790),new V(-4,10,-860),new V(0,10,-930),new V(2,12,-1e3),new V(4,14,-1080),new V(6,14,-1150),new V(4,14,-1220),new V(0,14,-1290),new V(-2,16,-1370),new V(-4,18,-1430),new V(-2,18,-1490),new V(0,16,-1550)];this.path=new VE(t,!1,"catmullrom",.5),this.pathLength=this.path.getLength()}getSectionIndex(t){return Math.min(Math.floor(t*this.sectionCount),this.sectionCount-1)}getSectionProgress(t){const i=this.getSectionIndex(t)*this.sectionSize;return(t-i)/this.sectionSize}update(t,e){this.progress+=(e-this.progress)*Math.min(t*2,.12),this.progress=Math.max(0,Math.min(1,this.progress));const i=this.path.getPointAt(this.progress);this.camera.position.lerp(i,Math.min(t*4,.2));const s=Math.min(this.progress+.025,1),l=this.path.getPointAt(s);this.lookTarget.lerp(l,Math.min(t*3,.15)),this.camera.lookAt(this.lookTarget);const u=this.getSectionIndex(this.progress),f=u!==this.currentSection;return this.currentSection=u,{position:i,progress:this.progress,sectionIndex:this.currentSection,sectionProgress:this.getSectionProgress(this.progress),sectionChanged:f}}jumpToSection(t){return t*this.sectionSize+this.sectionSize*.1}dispose(){}}class E3{constructor(){this.progress=0,this.targetProgress=0,this.locked=!0,this.speed=5e-5,this.momentum=0,this.damping=.96,this.maxMomentum=.008,this._onWheel=this._onWheel.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this.touchStartY=0,this.listeners=[],window.addEventListener("wheel",this._onWheel,{passive:!1}),window.addEventListener("touchstart",this._onTouchStart,{passive:!0}),window.addEventListener("touchmove",this._onTouchMove,{passive:!1}),window.addEventListener("keydown",this._onKeyDown)}_onWheel(t){if(t.preventDefault(),this.locked)return;const e=t.deltaMode===1?t.deltaY*16:t.deltaY;this.momentum+=e*this.speed,this.momentum=Math.max(-this.maxMomentum,Math.min(this.maxMomentum,this.momentum))}_onTouchStart(t){this.touchStartY=t.touches[0].clientY}_onTouchMove(t){if(this.locked)return;t.preventDefault();const e=this.touchStartY-t.touches[0].clientY;this.touchStartY=t.touches[0].clientY,this.momentum+=e*this.speed*.8,this.momentum=Math.max(-this.maxMomentum,Math.min(this.maxMomentum,this.momentum))}_onKeyDown(t){this.locked||(t.key==="ArrowDown"||t.key===" "?(t.preventDefault(),this.momentum+=.004):t.key==="ArrowUp"&&(t.preventDefault(),this.momentum-=.004))}unlock(){this.locked=!1}lock(){this.locked=!0}setProgress(t){this.targetProgress=Math.max(0,Math.min(1,t)),this.progress=this.targetProgress,this.momentum=0}onChange(t){this.listeners.push(t)}update(t){if(this.locked)return this.progress;this.targetProgress+=this.momentum,this.targetProgress=Math.max(0,Math.min(1,this.targetProgress)),this.momentum*=this.damping,Math.abs(this.momentum)<1e-4&&(this.momentum=0),this.progress+=(this.targetProgress-this.progress)*Math.min(t*2.5,.15),this.progress=Math.max(0,Math.min(1,this.progress));for(const e of this.listeners)e(this.progress);return this.progress}dispose(){window.removeEventListener("wheel",this._onWheel),window.removeEventListener("touchstart",this._onTouchStart),window.removeEventListener("touchmove",this._onTouchMove),window.removeEventListener("keydown",this._onKeyDown)}}class T3{constructor(){this.manager=new cy,this.textureLoader=new x0(this.manager),this.cache=new Map,this.totalProgress=0,this.manager.onProgress=(t,e,i)=>{this.totalProgress=e/i}}loadTexture(t){return this.cache.has(t)?Promise.resolve(this.cache.get(t)):new Promise((e,i)=>{this.textureLoader.load(t,s=>{s.colorSpace=Ln,s.generateMipmaps=!0,s.minFilter=Is,s.magFilter=Gn,this.cache.set(t,s),e(s)},void 0,s=>{console.warn(`Failed to load texture: ${t}`,s);const l=new iy(new Uint8Array([255,255,255,255]),1,1,Zi);l.needsUpdate=!0,this.cache.set(t,l),e(l)})})}async loadTextures(t){return Promise.all(t.map(e=>this.loadTexture(e)))}async loadSVGTexture(t,e=128){return this.cache.has(t+"_svg")?this.cache.get(t+"_svg"):new Promise(i=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{const l=document.createElement("canvas");l.width=e,l.height=e;const u=l.getContext("2d"),f=Math.min(e/s.width,e/s.height)*.8,d=s.width*f,h=s.height*f;u.drawImage(s,(e-d)/2,(e-h)/2,d,h);const m=new Fm(l);m.colorSpace=Ln,m.needsUpdate=!0,this.cache.set(t+"_svg",m),i(m)},s.onerror=()=>{const l=document.createElement("canvas");l.width=e,l.height=e;const u=l.getContext("2d");u.fillStyle="#38bdf8",u.fillRect(0,0,e,e);const f=new Fm(l);f.needsUpdate=!0,this.cache.set(t+"_svg",f),i(f)},s.src=t})}dispose(){for(const[,t]of this.cache)t.dispose();this.cache.clear()}}class A3{constructor(){this.timelines=new Map,this.activeSections=new Set,this.sectionCallbacks=new Map}registerSection(t,{onEnter:e,onExit:i,onProgress:s}){this.sectionCallbacks.set(t,{onEnter:e,onExit:i,onProgress:s})}createTimeline(t){const e=mM.timeline({paused:!0});return this.timelines.set(t,e),e}update(t,e,i){if(!i||!i[t])return;const s=i[t].id;if(!this.activeSections.has(s)){for(const d of this.activeSections){const h=this.sectionCallbacks.get(d);h&&h.onExit&&h.onExit()}this.activeSections.clear(),this.activeSections.add(s);const f=this.sectionCallbacks.get(s);f&&f.onEnter&&f.onEnter()}const l=this.sectionCallbacks.get(s);l&&l.onProgress&&l.onProgress(e);const u=this.timelines.get(s);u&&u.progress(e)}dispose(){for(const[,t]of this.timelines)t.kill();this.timelines.clear(),this.sectionCallbacks.clear(),this.activeSections.clear()}}class w3{constructor(t,e={}){this.scene=t,this.count=e.count||3e3,this.zRange=e.zRange||[-1800,100],this.spreadX=e.spreadX||400,this.spreadY=e.spreadY||150;const i=new Sn,s=new Float32Array(this.count*3),l=new Float32Array(this.count),u=new Float32Array(this.count),f=400,d=Math.floor(this.count/f);let h=0;for(let m=0;m<f;m++){const v=(Math.random()-.5)*this.spreadX,_=(Math.random()-.5)*this.spreadY,x=this.zRange[1]-Math.random()*(this.zRange[1]-this.zRange[0]),M=10+Math.random()*25;for(let b=0;b<d&&!(h>=this.count);b++){const S=v+(Math.random()-.5)*M,y=_+(Math.random()-.5)*(M*.4),E=x+(Math.random()-.5)*M;s[h*3]=S,s[h*3+1]=y,s[h*3+2]=E,l[h]=M*(.5+Math.random()),u[h]=.4+Math.random()*.4,h++}}i.setAttribute("position",new ai(s,3)),i.setAttribute("aSize",new ai(l,1)),i.setAttribute("aOpacity",new ai(u,1)),this.material=new la({uniforms:{time:{value:0},color1:{value:new me(16777215)},color2:{value:new me(14870768)}},vertexShader:`
        attribute float aSize;
        attribute float aOpacity;
        varying float vOpacity;
        varying vec3 vPos;
        uniform float time;
        void main() {
          vOpacity = aOpacity;
          vec3 pos = position;
          
          // Gentle drift based on time
          pos.x -= time * 2.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Size attenuation
          gl_PointSize = aSize * (350.0 / -mvPosition.z);
          vPos = position;
        }
      `,fragmentShader:`
        uniform vec3 color1;
        uniform vec3 color2;
        varying float vOpacity;
        varying vec3 vPos;
        void main() {
          // Circular particle with extremely soft edges
          vec2 xy = gl_PointCoord.xy - vec2(0.5);
          float dl = length(xy);
          
          // Outer fade for maximum fluffiness
          float alpha = 1.0 - smoothstep(0.0, 0.5, dl);
          alpha = pow(alpha, 1.8); // Slower falloff = more volumetric
          
          if (alpha < 0.01) discard;

          // Mix colors based on Y to give fake lighting depth (whiter on top)
          // Also slightly vary based on X for lateral variety
          vec3 c = mix(color2, color1, clamp((vPos.y + 40.0) / 80.0, 0.0, 1.0));
          
          gl_FragColor = vec4(c, alpha * vOpacity);
        }
      `,transparent:!0,depthWrite:!1,blending:Ur}),this.cloudPoints=new zE(i,this.material),this.scene.add(this.cloudPoints)}update(t,e,i){this.material&&(this.material.uniforms.time.value+=t)}dispose(){this.cloudPoints.geometry.dispose(),this.cloudPoints.material.dispose(),this.scene.remove(this.cloudPoints)}}class R3{constructor(t,e,i){this.scene=t,this.group=new qe,this.group.position.set(0,0,0),this.scene.add(this.group),this.quality=i,this._createGlider()}_createGlider(){this.glider=new qe;const t=new Nn({color:16777215,metalness:.1,roughness:.8}),e=new ui(.05,.4,6,16);e.rotateX(Math.PI/2),e.translate(0,0,1);const i=new Ft(e,t),s=new oa(.4,16,16);s.scale(1,1,2.5);const l=new Ft(s,t);l.position.set(0,0,-2);const u=new Nn({color:1118481,roughness:.1,metalness:.9}),f=new ui(.25,.35,1.2,16);f.rotateX(Math.PI/2),f.scale(1,.5,1);const d=new Ft(f,u);d.position.set(0,.35,-1.5);const h=new Ir(8,1,4);h.rotateX(-Math.PI/2),h.scale(1,.05,1);const m=new Ft(h,t);m.position.set(0,0,.2);const v=new Ir(2,.5,4);v.rotateX(-Math.PI/2),v.scale(1,.05,1);const _=new Ft(v,t);_.position.set(0,1.2,3.8);const x=new sn(.08,1.2,.8),M=new Ft(x,t);M.position.set(0,.6,3.8),M.rotation.x=-.2,this.glider.add(i,l,d,m,_,M),this.glider.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)}),this.glider.position.set(0,10,-5),this.glider.rotation.x=-.1,this.glider.rotation.z=-.1,this.group.add(this.glider)}update(t,e){this.glider&&(this.glider.position.y=10+Math.sin(e*.5)*.5,this.glider.rotation.z=-.1+Math.sin(e*.3)*.05,this.glider.rotation.x=-.1+Math.cos(e*.4)*.02)}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class C3{constructor(t,e,i){this.scene=t,this.group=new qe,this.group.position.set(0,0,-105),this.scene.add(this.group),this.quality=i,this.clouds=[],this._createClouds(),this._createPlane()}_createClouds(){var i;const t=Math.floor(60*(((i=this.quality)==null?void 0:i.particleMultiplier)||1)),e=new oa(1,8,8);for(let s=0;s<t;s++){const l=new qe,u=3+Math.floor(Math.random()*4);for(let f=0;f<u;f++){const d=new Nn({color:16777215,transparent:!0,opacity:.4+Math.random()*.3,roughness:1}),h=new Ft(e,d),m=1+Math.random()*3;h.scale.set(m,m*.6,m),h.position.set((Math.random()-.5)*m*2,(Math.random()-.5)*m*.5,(Math.random()-.5)*m*2),l.add(h)}l.position.set((Math.random()-.5)*80,15+Math.random()*25,(Math.random()-.5)*120),l.userData={speed:.1+Math.random()*.3,floatOffset:Math.random()*Math.PI*2},this.clouds.push(l),this.group.add(l)}}_createPlane(){this.airplane=new qe;const t=new Nn({color:16777215,metalness:.4,roughness:.2}),e=new Nn({color:1118481,metalness:.9,roughness:.1}),i=new ui(.3,.6,8,16);i.rotateX(Math.PI/2);const s=new Ft(i,t);s.scale.set(1,1,1),s.castShadow=!0,s.receiveShadow=!0;const l=new oa(.6,16,16),u=new Ft(l,t);u.position.set(0,0,-4),u.scale.set(.5,.5,2.5);const f=new Ir(.6,2,16);f.rotateX(-Math.PI/2);const d=new Ft(f,t);d.position.set(0,0,5);const h=new ui(.35,.45,1.2,16);h.rotateX(Math.PI/2);const m=new Ft(h,e);m.position.set(0,.35,-3),m.scale.set(1,.5,1);const v=new sn(8,.08,2),_=new Ft(v,t);_.position.set(0,-.2,0);const x=_.clone();x.position.set(-2,-.2,.5),x.rotation.y=-.3,x.scale.set(.5,1,1);const M=_.clone();M.position.set(2,-.2,.5),M.rotation.y=.3,M.scale.set(.5,1,1);const b=new ui(.3,.3,1.5,16);b.rotateX(Math.PI/2);const S=new Ft(b,t);S.position.set(-.8,.2,3);const y=new Ft(b,t);y.position.set(.8,.2,3);const E=new sn(.08,1.5,1.2),D=new Ft(E,t);D.position.set(0,.8,4.5),D.rotation.x=-.3;const C=new sn(2.5,.08,.6),U=new Ft(C,t);U.position.set(0,1.5,4.8);const N=new Uc(.25,16),O=new Ea({color:3718648}),A=new Ft(N,O);A.position.set(-.8,.2,3.8);const w=new Ft(N,O);w.position.set(.8,.2,3.8),this.airplane.add(s,u,d,m,x,M,S,y,D,U,A,w),this.airplane.position.set(5,24,0),this.airplane.scale.setScalar(4),this.group.add(this.airplane)}update(t,e){for(const i of this.clouds){const s=i.userData;i.position.y+=Math.sin(e*s.speed+s.floatOffset)*.002,i.position.x+=s.speed*t*.5,i.position.x>45&&(i.position.x=-45)}this.airplane&&(this.airplane.position.y=22+Math.sin(e*.8)*1.5,this.airplane.position.x=3+Math.sin(e*.5)*3,this.airplane.rotation.z=Math.sin(e*.5)*.1,this.airplane.rotation.x=Math.sin(e*.8)*.05)}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}const D3={HTML:14896934,CSS:2510308,Tailwind:440020,JavaScript:16244510,"React JS":6413051,"Node JS":3381555,Express:4473924,MySQL:4487585,PHP:7830452,Git:15749170,Apache:13771048,Bootstrap:7951027,Figma:15879710,Postman:16739383,cPanel:16739372,"Socket.io":65793,Vite:6581503,npm:13318199};class U3{constructor(t,e,i){this.scene=t,this.assetLoader=e,this.group=new qe,this.group.position.set(0,0,-305),this.scene.add(this.group),this.quality=i,this.iconMeshes=[],this.iconData=[],this._createJet(),this._createSkillOrbs()}_createJet(){this.jet=new qe;const t=new Nn({color:6583435,metalness:.8,roughness:.2}),e=new Nn({color:988970,metalness:.9,roughness:.1}),i=new Nn({color:1118481,metalness:1,roughness:0,transparent:!0,opacity:.8}),s=new ui(.1,.6,7,16);s.rotateX(Math.PI/2);const l=new Ft(s,t),u=new Ir(.6,2,16);u.rotateX(-Math.PI/2);const f=new Ft(u,t);f.position.set(0,0,-4.5);const d=new oa(.5,16,16);d.scale(.8,.6,2.5);const h=new Ft(d,i);h.position.set(0,.4,-2.5);const m=new Sn,v=new Float32Array([0,0,0,-4,0,3,0,0,3.5,0,0,0,0,0,3.5,4,0,3]);m.setAttribute("position",new ai(v,3)),m.computeVertexNormals();const _=new Ft(m,e);_.position.set(0,-.1,0),_.material.side=li;const x=new sn(.05,1.5,1.5),M=new Ft(x,e);M.position.set(-.6,.8,2.5),M.rotation.z=-.2;const b=new Ft(x,e);b.position.set(.6,.8,2.5),b.rotation.z=.2;const S=new ui(.4,.45,1,16);S.rotateX(Math.PI/2);const y=new Ft(S,t);y.position.set(-.4,0,3.5);const E=new Ft(S,t);E.position.set(.4,0,3.5);const D=new Uc(.35,16),C=new Ea({color:3718648,fog:!1}),U=new Ft(D,C);U.position.set(-.4,0,4.01);const N=new Ft(D,C);N.position.set(.4,0,4.01),this.jet.add(l,f,h,_,M,b,y,E,U,N),this.jet.position.set(15,12,80),this.jet.scale.setScalar(2.5),this.group.add(this.jet)}_createSkillOrbs(){const t=new x0;for(let e=0;e<_f.length;e++){const i=_f[e],s=D3[i.name]||3718648,l=new qe;let u;if(i.icon){const m=t.load(i.icon);m.colorSpace=Ln,m.generateMipmaps=!0;const v=new Ea({map:m,transparent:!0,side:li,alphaTest:.05,fog:!1,depthWrite:!1});u=new Ft(new js(12,12),v)}else u=new Ft(new sn(4,4,4),new Ea({color:s,fog:!1}));l.add(u);const f=e/_f.length*Math.PI*1.5,d=35+Math.sin(e*.7)*10,h=(e/_f.length-.5)*300;l.position.set(Math.cos(f)*d,15+Math.sin(f)*12+Math.sin(e)*6,h),l.userData={name:i.name,baseY:l.position.y,floatOffset:Math.random()*Math.PI*2,floatSpeed:.5+Math.random()*.5,rotSpeed:.3+Math.random()*.4,iconMesh:u},this.iconMeshes.push(l),this.iconData.push(i),this.group.add(l)}}update(t,e){this.jet&&(this.jet.position.y=5+Math.sin(e*2)*.5,this.jet.position.x=2+Math.cos(e*1.5)*.5,this.jet.rotation.z=Math.sin(e*1.5)*.1,this.jet.rotation.x=.05+Math.cos(e*2)*.05);for(const i of this.iconMeshes){const s=i.userData;i.position.y=s.baseY+Math.sin(e*s.floatSpeed+s.floatOffset)*1,s.iconMesh&&(s.iconMesh.rotation.y=Math.sin(e*.5+s.floatOffset)*.3)}}getIconScreenPositions(t){const e=[];for(let i=0;i<this.iconMeshes.length;i++){const s=this.iconMeshes[i],l=new V;s.getWorldPosition(l);const u=l.clone().project(t);u.x=(u.x+1)/2*window.innerWidth,u.y=(-u.y+1)/2*window.innerHeight;const f=t.position.distanceTo(l);e.push({name:this.iconData[i].name,x:u.x,y:u.y,distance:f,visible:f<120&&u.x>-100&&u.x<window.innerWidth+100})}return e}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}}class L3{constructor(t,e,i){this.scene=t,this.group=new qe,this.group.position.set(0,0,-540),this.scene.add(this.group),this.quality=i,this.panels=[],this._createAircraft(),this._createDataBeacons()}_createAircraft(){this.aircraft=new qe;const t=new Nn({color:16317180,metalness:.5,roughness:.5}),e=new Nn({color:3359061,metalness:.7,roughness:.3}),i=new ui(.6,.8,4,16);i.rotateX(Math.PI/2);const s=new Ft(i,t),l=new Ir(.8,1.2,16);l.rotateX(-Math.PI/2);const u=new Ft(l,t);u.position.set(0,0,-2.5),this.propeller=new qe;const f=new sn(3,.2,.1),d=new Ft(f,e),h=new Ft(f,e);h.rotation.z=Math.PI/2,this.propeller.add(d,h),this.propeller.position.set(0,0,-3.1),this.aircraft.add(this.propeller);const m=new sn(10,.1,1.5),v=new Ft(m,t);v.position.set(0,.6,-.5);const _=new sn(.1,1.2,1),x=new Ft(_,t);x.position.set(0,.6,2);const M=new sn(3,.05,.8),b=new Ft(M,t);b.position.set(0,.6,2),this.aircraft.add(s,u,v,x,b),this.aircraft.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),this.aircraft.position.set(5,20,-10),this.group.add(this.aircraft)}_createDataBeacons(){const t=x3||[],e=t.length;for(let i=0;i<e;i++){const s=t[i],l=new qe,u=document.createElement("canvas"),f=u.getContext("2d");u.width=512,u.height=256,f.clearRect(0,0,u.width,u.height),f.fillStyle="#1e293b",f.font="bold 48px Arial",f.textAlign="center",f.fillText(s.title,u.width/2,80),f.font="28px Arial",f.fillStyle="#334155";const d=s.desc.split(" ");let h="",m=140;for(let y=0;y<d.length;y++){let E=h+d[y]+" ";f.measureText(E).width>440&&y>0?(f.fillText(h,u.width/2,m),h=d[y]+" ",m+=35):h=E}f.fillText(h,u.width/2,m);const v=new Fm(u);v.colorSpace=Ln;const _=new js(10,5),x=new Ea({map:v,transparent:!0,side:li,fog:!1}),M=new Ft(_,x);l.add(M);const b=i/e*Math.PI*1.2,S=15+Math.random()*5;l.position.set(Math.cos(b)*S,18+Math.random()*6,-20+i*25),this.group.add(l),this.panels.push({group:l,data:s,baseY:l.position.y,timeOffset:Math.random()*Math.PI*2})}}getPanelScreenPositions(t){const e=[];for(let i=0;i<this.panels.length;i++){const s=this.panels[i],l=new V;s.group.getWorldPosition(l);const u=l.distanceTo(t.position);l.project(t);const f=(l.x*.5+.5)*window.innerWidth,d=(-l.y*.5+.5)*window.innerHeight;l.z<1&&e.push({title:s.data.title,desc:s.data.description,icon:s.data.icon,x:f,y:d,distance:u,visible:u<120})}return e}update(t,e){this.aircraft&&(this.aircraft.position.y=20+Math.sin(e*2)*.4,this.propeller&&(this.propeller.rotation.z+=t*20));for(const i of this.panels)i.group.position.y=i.baseY+Math.sin(e+i.timeOffset)*.5,i.group.rotation.y=Math.sin(e*.5+i.timeOffset)*.1}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class N3{constructor(t,e,i){this.scene=t,this.assetLoader=e,this.group=new qe,this.group.position.set(0,0,-860),this.scene.add(this.group),this.quality=i,this.cards=[],this._createAircraft(),this._createProjectCards()}_createAircraft(){this.aircraft=new qe;const t=new Nn({color:1976635,metalness:.8,roughness:.3}),e=new Nn({color:3718648,metalness:.9,roughness:.2,emissive:165063,emissiveIntensity:.2}),i=new ui(1.2,1.5,8,16);i.rotateX(Math.PI/2);const s=new Ft(i,t),l=new oa(1.5,16,16);l.scale(1,.7,1);const u=new Ft(l,t);u.position.set(0,.4,-4);const f=new oa(.8,16,16);f.scale(1,1,2.5);const d=new Ft(f,e);d.position.set(0,0,-5.5);const h=new sn(16,.2,3),m=new Ft(h,t);m.position.set(0,0,0);const v=new ui(.5,.6,2,16);v.rotateX(Math.PI/2),[-5,-2.5,2.5,5].forEach(y=>{const E=new Ft(v,t);E.position.set(y,-.4,.5),this.aircraft.add(E);const D=new Ft(new Uc(.4,16),e);D.position.set(y,-.4,1.51),this.aircraft.add(D)});const x=new sn(.1,3,2),M=new Ft(x,t);M.position.set(0,1.5,4.5),M.rotation.x=-.2;const b=new sn(6,.1,1.5),S=new Ft(b,t);S.position.set(0,3,4.8),this.aircraft.add(s,u,d,m,M,S),this.aircraft.position.set(0,5,-20),this.group.add(this.aircraft)}_createProjectCards(){const t=S3||[];let e=0;const i=45,s=new x0;for(let l=0;l<t.length;l++){const u=t[l],f=new qe;let d=null;u.image&&(d=s.load(u.image),d.colorSpace=Ln);const h=new js(16,9),m=new ly({map:d,color:16777215,metalness:.1,roughness:.2,transmission:d?.2:.9,opacity:1,transparent:!0,side:li}),v=new Ft(h,m),_=new GE(h),x=new ay({color:3718648,linewidth:2}),M=new FE(_,x);f.add(v),f.add(M);const b=Math.random()*Math.PI*2,S=l%2===0?-1:1,y=S*14,E=8+(Math.random()-.5)*6;e-=i,f.position.set(y,E,e),f.rotation.y=S*.15,this.group.add(f),this.cards.push({group:f,baseY:E,floatOffset:b,data:u})}}getIslandScreenPositions(t){const e=[];for(let i=0;i<this.cards.length;i++){const s=this.cards[i],l=new V;s.group.getWorldPosition(l);const u=l.distanceTo(t.position);l.project(t);const f=(l.x*.5+.5)*window.innerWidth,d=(-l.y*.5+.5)*window.innerHeight;l.z<1&&e.push({title:s.data.title,description:s.data.description,stack:s.data.stack,image:s.data.image,url:s.data.url,x:f,y:d,distance:u,visible:u<120})}return e}update(t,e){this.aircraft&&(this.aircraft.position.y=5+Math.sin(e*1.5)*1.5,this.aircraft.rotation.z=Math.sin(e*.8)*.1,this.aircraft.rotation.x=Math.sin(e*1.2)*.05);for(const i of this.cards)i.group.position.y=i.baseY+Math.sin(e*2+i.floatOffset)*.8}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class P3{constructor(t,e,i){this.scene=t,this.group=new qe,this.group.position.set(0,0,-1185),this.scene.add(this.group),this.quality=i,this.checkpoints=[],this._createAircraft(),this._createCheckpoints()}_createAircraft(){this.aircraft=new qe;const t=new Nn({color:988970,metalness:.7,roughness:.4}),e=new Nn({color:132631,metalness:.9,roughness:.1}),i=new Sn,s=new Float32Array([0,0,-3,-8,0,2,-3,0,1,0,0,1.5,0,0,-3,8,0,2,3,0,1,0,0,1.5]);i.setAttribute("position",new ai(s,3)),i.computeVertexNormals();const l=new Ft(i,t);l.scale.set(1,.4,1);const u=new oa(.8,16,16);u.scale(1,.4,2);const f=new Ft(u,e);f.position.set(0,.2,-1.5);const d=new sn(.05,1,1.2),h=new Ft(d,t);h.position.set(-1.5,.4,1.5),h.rotation.z=-.5;const m=new Ft(d,t);m.position.set(1.5,.4,1.5),m.rotation.z=.5;const v=new Ea({color:3718648,fog:!1}),_=new sn(1.5,.1,.2),x=new Ft(_,v);x.position.set(0,-.1,1.5),this.aircraft.add(l),this.aircraft.add(f),this.aircraft.add(h),this.aircraft.add(m),this.aircraft.add(x),this.aircraft.position.set(-2,8,-5),this.group.add(this.aircraft)}_createCheckpoints(){const t=y3||[],e=40;let i=20;for(let s=0;s<t.length;s++){const l=t[s],u=new qe,f=new Hf(3,.1,8,48),d=new Nn({color:3718648,metalness:.8,roughness:.2,emissive:165063,emissiveIntensity:.2}),h=new Ft(f,d),m=new js(8,4),v=new ly({color:16777215,metalness:.2,roughness:.1,transmission:.8,opacity:1,transparent:!0,side:li}),_=new Ft(m,v);_.position.set(0,0,-.5),u.add(h),u.add(_);const x=s%2===0?-1:1;u.position.set(x*8,8,i),u.rotation.y=x*.1,i-=e,this.group.add(u),this.checkpoints.push({group:u,ring:h,data:l,baseY:8,offset:Math.random()*10})}}getCheckpointScreenPositions(t){const e=[];for(let i=0;i<this.checkpoints.length;i++){const s=this.checkpoints[i],l=new V;s.group.getWorldPosition(l);const u=l.distanceTo(t.position);l.project(t);const f=(l.x*.5+.5)*window.innerWidth,d=(-l.y*.5+.5)*window.innerHeight;l.z<1&&e.push({role:s.data.role,company:s.data.company,duration:s.data.duration,description:s.data.description,x:f,y:d,distance:u,visible:u<120})}return e}update(t,e){this.aircraft&&(this.aircraft.position.y=8+Math.sin(e*1.2)*.4,this.aircraft.rotation.z=Math.sin(e*.6)*.05,this.aircraft.rotation.x=Math.sin(e*.8)*.02);for(const i of this.checkpoints)i.group.position.y=i.baseY+Math.sin(e*1.5+i.offset)*.6,i.ring.rotation.x=Math.sin(e+i.offset)*.1,i.ring.rotation.y=t*.2}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class O3{constructor(t,e,i){this.scene=t,this.group=new qe,this.group.position.set(0,0,-1460),this.scene.add(this.group),this.quality=i,this.infoPanels=[],this._createGlider(),this._createInfoBeacons()}_createGlider(){this.glider=new qe;const t=new Nn({color:16777215,metalness:.1,roughness:.8}),e=new ui(.1,.4,7,16);e.rotateX(Math.PI/2);const i=new Ft(e,t),s=new oa(.4,16,16);s.scale(1,1,2);const l=new Ft(s,t);l.position.set(0,0,-3.5);const u=new Nn({color:1118481,roughness:.1,metalness:.9}),f=new oa(.45,16,16);f.scale(.8,.4,1.5);const d=new Ft(f,u);d.position.set(0,.3,-2);const h=new sn(18,.05,.8),m=new Ft(h,t);m.position.set(0,.2,-.5);const v=new sn(.05,1.2,.8),_=new Ft(v,t);_.position.set(0,.6,3);const x=new sn(3,.05,.6),M=new Ft(x,t);M.position.set(0,1.2,3),this.glider.add(i,l,d,m,_,M),this.glider.position.set(0,15,-10),this.glider.rotation.x=-.15,this.group.add(this.glider)}_createInfoBeacons(){const t=[{type:"email",value:Vo.email,label:"Email Me",icon:"EnvelopeIcon"},{type:"github",value:Vo.github,label:"GitHub Focus",icon:"CodeBracketIcon"},...Vo.socials.map(i=>({type:"social",value:i.url,label:i.name,icon:"LinkIcon"}))],e=[3718648,11032055,2278750,16436245];for(let i=0;i<t.length;i++){const s=t[i],l=e[i%e.length],u=new qe,f=new Hf(1.5,.05,8,48),d=new Ea({color:l,transparent:!0,opacity:.5}),h=new Ft(f,d);u.add(h);const m=new _0(.5,1),v=new Ea({color:16777215}),_=new Ft(m,v);u.add(_);const x=i/(t.length-1)*Math.PI-Math.PI/2;u.position.set(Math.sin(x)*12,5+Math.cos(x)*4,-20+Math.abs(x)*5),this.group.add(u),this.infoPanels.push({group:u,ring:h,core:_,data:s,baseY:u.position.y,offset:i*.5})}}getContactPositions(t){const e=[];for(let i=0;i<this.infoPanels.length;i++){const s=this.infoPanels[i],l=new V;s.group.getWorldPosition(l);const u=l.distanceTo(t.position);l.project(t);const f=(l.x*.5+.5)*window.innerWidth,d=(-l.y*.5+.5)*window.innerHeight;l.z<1&&e.push({...s.data,x:f,y:d,distance:u,visible:u<120})}return e}update(t,e){this.glider&&(this.glider.position.y=15+Math.sin(e*.8)*.5,this.glider.rotation.z=Math.sin(e*.5)*.05);for(const i of this.infoPanels)i.group.position.y=i.baseY+Math.sin(e*1.5+i.offset)*.4,i.ring.rotation.x+=t*.5,i.ring.rotation.y+=t*.3,i.core.rotation.y-=t*.5}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}const F3=({onStart:o})=>{const[t,e]=We.useState(!0),[i,s]=We.useState(!1),[l,u]=We.useState(!1);We.useEffect(()=>{const d=setTimeout(()=>u(!0),500);return()=>clearTimeout(d)},[]);const f=()=>{s(!0),setTimeout(()=>{e(!1),o()},1e3)};return t?Ut.jsxs("div",{className:`intro-overlay ${i?"intro-overlay--fadeout":""}`,style:{position:"fixed",inset:0,zIndex:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at center, rgba(10,10,30,0.85) 0%, rgba(5,5,16,0.98) 100%)",transition:"opacity 1s ease-out",opacity:i?0:1,pointerEvents:i?"none":"auto"},children:[Ut.jsx("div",{className:"intro-lines"}),Ut.jsx("h1",{style:{fontSize:"clamp(2rem, 6vw, 5rem)",fontWeight:800,background:"linear-gradient(135deg, #38bdf8 0%, #a855f7 50%, #38bdf8 100%)",backgroundSize:"200% 200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"gradientShift 4s ease infinite",textAlign:"center",marginBottom:"0.5rem",opacity:l?1:0,transform:l?"translateY(0)":"translateY(30px)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1)",letterSpacing:"-0.02em"},children:$m.name}),Ut.jsx("p",{style:{fontSize:"clamp(1rem, 2vw, 1.4rem)",color:"rgba(255,255,255,0.5)",textAlign:"center",marginBottom:"3rem",maxWidth:"500px",opacity:l?1:0,transform:l?"translateY(0)":"translateY(20px)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",fontWeight:300},children:$m.tagline}),Ut.jsxs("button",{onClick:f,className:"start-btn",style:{padding:"16px 48px",fontSize:"1.1rem",fontWeight:600,color:"#fff",background:"linear-gradient(135deg, #38bdf8, #6366f1)",border:"none",borderRadius:"50px",cursor:"pointer",position:"relative",overflow:"hidden",opacity:l?1:0,transform:l?"translateY(0) scale(1)":"translateY(30px) scale(0.9)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",boxShadow:"0 0 30px rgba(56, 189, 248, 0.3), 0 0 60px rgba(56, 189, 248, 0.1)",letterSpacing:"0.15em",textTransform:"uppercase"},children:[Ut.jsx("span",{style:{position:"relative",zIndex:2},children:"Start Exploring"}),Ut.jsx("div",{style:{position:"absolute",inset:-2,borderRadius:"52px",background:"linear-gradient(135deg, #38bdf8, #a855f7, #38bdf8)",backgroundSize:"200% 200%",animation:"gradientShift 3s ease infinite",opacity:.5,filter:"blur(8px)",zIndex:0}})]}),Ut.jsx("p",{style:{position:"absolute",bottom:"2rem",fontSize:"0.8rem",color:"rgba(255,255,255,0.25)",letterSpacing:"0.1em",textTransform:"uppercase",opacity:l?1:0,transition:"opacity 1s ease 1.5s"},children:"Scroll to navigate after entering"})]}):null},I3=({currentSection:o,onSectionClick:t})=>Ut.jsxs("div",{style:{position:"fixed",right:"20px",top:"50%",transform:"translateY(-50%)",zIndex:50,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"12px"},children:[Bf.map((e,i)=>{const s=i===o;return Ut.jsxs("button",{onClick:()=>t(i),style:{display:"flex",alignItems:"center",gap:"10px",background:"none",border:"none",cursor:"pointer",padding:"4px",transition:"all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},title:e.label,children:[Ut.jsx("span",{style:{fontSize:"0.7rem",fontWeight:500,color:s?"#38bdf8":"rgba(255,255,255,0.3)",opacity:s?1:0,transform:s?"translateX(0)":"translateX(10px)",transition:"all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",textTransform:"uppercase",letterSpacing:"0.1em",whiteSpace:"nowrap",pointerEvents:"none"},children:e.label}),Ut.jsx("div",{style:{width:s?"12px":"8px",height:s?"12px":"8px",borderRadius:"50%",background:s?"linear-gradient(135deg, #38bdf8, #a855f7)":"rgba(255,255,255,0.2)",transition:"all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",boxShadow:s?"0 0 10px rgba(56, 189, 248, 0.5)":"none",position:"relative"},children:s&&Ut.jsx("div",{style:{position:"absolute",inset:"-4px",borderRadius:"50%",border:"1px solid rgba(56, 189, 248, 0.3)",animation:"pulse 2s ease-in-out infinite"}})})]},e.id)}),Ut.jsx("div",{style:{position:"absolute",right:"9px",top:"8px",bottom:"8px",width:"1px",background:"rgba(255,255,255,0.05)",zIndex:-1},children:Ut.jsx("div",{style:{width:"100%",height:`${o/Math.max(Bf.length-1,1)*100}%`,background:"linear-gradient(to bottom, #38bdf8, #a855f7)",transition:"height 0.6s cubic-bezier(0.22, 1, 0.36, 1)"}})})]}),z3=({currentSection:o,sectionProgress:t,skillPositions:e,projectPositions:i,experiencePositions:s,servicePositions:l})=>{const[u,f]=We.useState(null);return Ut.jsxs("div",{id:"html-overlay",style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:30,overflow:"hidden"},children:[o===1&&Ut.jsxs("div",{className:"section-panel about-panel",style:{position:"absolute",left:"5%",bottom:"10%",maxWidth:"480px",opacity:Math.min(t*3,1),transform:`translateY(${(1-Math.min(t*3,1))*30}px)`,transition:"transform 0.3s ease-out"},children:[Ut.jsxs("h2",{className:"overlay-title",children:["About ",Ut.jsx("span",{className:"text-accent",children:"Me"})]}),v3.paragraphs.map((d,h)=>Ut.jsx("p",{className:"overlay-text",style:{animationDelay:`${h*.2}s`},children:d},h))]}),o===2&&e&&Ut.jsxs(Ut.Fragment,{children:[Ut.jsx("div",{className:"section-panel",style:{position:"absolute",left:"5%",top:"10%",opacity:Math.min(t*3,1)},children:Ut.jsxs("h2",{className:"overlay-title",children:["Tech ",Ut.jsx("span",{className:"text-accent",children:"Stack"})]})}),e.filter(d=>d.visible).map(d=>Ut.jsx("div",{className:"skill-label",style:{position:"absolute",left:`${d.x}px`,top:`${d.y+30}px`,transform:"translate(-50%, 0)",opacity:Math.max(0,1-d.distance/30)},children:d.name},d.name))]}),o===3&&l&&Ut.jsxs(Ut.Fragment,{children:[Ut.jsx("div",{className:"section-panel",style:{position:"absolute",left:"5%",top:"10%",opacity:Math.min(t*3,1)},children:Ut.jsxs("h2",{className:"overlay-title",children:["What I ",Ut.jsx("span",{className:"text-accent",children:"Offer"})]})}),l.filter(d=>d.visible).map((d,h)=>Ut.jsxs("div",{className:"floating-card service-card",style:{position:"absolute",left:`${d.x}px`,top:`${d.y}px`,transform:"translate(-50%, -100%)",marginTop:"-30px",opacity:Math.max(0,1-d.distance/80),pointerEvents:d.distance<60?"auto":"none"},children:[Ut.jsx("h3",{children:d.title}),Ut.jsx("p",{children:d.desc})]},h))]}),o===4&&i&&Ut.jsxs(Ut.Fragment,{children:[Ut.jsx("div",{className:"section-panel",style:{position:"absolute",left:"5%",top:"10%",opacity:Math.min(t*3,1)},children:Ut.jsxs("h2",{className:"overlay-title",children:["Selected ",Ut.jsx("span",{className:"text-accent",children:"Works"})]})}),i.filter(d=>d.visible).map((d,h)=>Ut.jsxs("div",{className:"floating-card project-card",style:{position:"absolute",left:`${d.x}px`,top:`${d.y}px`,transform:"translate(-50%, -100%)",marginTop:"-40px",opacity:Math.max(0,1-d.distance/100),pointerEvents:d.distance<80?"auto":"none"},children:[Ut.jsx("h3",{children:d.title}),Ut.jsx("p",{className:"stack-text",children:d.stack}),d.url&&Ut.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"visit-link",children:"Visit Site →"})]},h))]}),o===5&&s&&Ut.jsxs(Ut.Fragment,{children:[Ut.jsx("div",{className:"section-panel",style:{position:"absolute",left:"5%",top:"10%",opacity:Math.min(t*3,1)},children:Ut.jsxs("h2",{className:"overlay-title",children:["Work ",Ut.jsx("span",{className:"text-accent",children:"Experience"})]})}),s.filter(d=>d.visible).map((d,h)=>Ut.jsxs("div",{className:"floating-card experience-card",style:{position:"absolute",left:`${d.x}px`,top:`${d.y}px`,transform:"translate(-50%, -100%)",marginTop:"-20px",opacity:Math.max(0,1-d.distance/100)},children:[Ut.jsx("span",{className:"period-text",children:d.period}),Ut.jsx("h3",{children:d.role}),Ut.jsx("h4",{children:d.company}),Ut.jsx("p",{children:d.description})]},h))]}),o===6&&Ut.jsxs("div",{className:"section-panel contact-panel",style:{position:"absolute",left:"5%",bottom:"10%",maxWidth:"420px",opacity:Math.min(t*3,1),transform:`translateY(${(1-Math.min(t*3,1))*30}px)`,pointerEvents:"auto"},children:[Ut.jsxs("h2",{className:"overlay-title",children:["Get in ",Ut.jsx("span",{className:"text-accent",children:"Touch"})]}),Ut.jsxs("div",{className:"contact-info",children:[Ut.jsxs("div",{className:"contact-item",children:[Ut.jsx("span",{className:"contact-icon",children:"✉"}),Ut.jsx("span",{children:Vo.email})]}),Ut.jsxs("div",{className:"contact-item",children:[Ut.jsx("span",{className:"contact-icon",children:"📍"}),Ut.jsx("span",{children:Vo.location})]})]}),Ut.jsx("div",{className:"social-links",children:Vo.socials.map(d=>Ut.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"social-orb",children:d.name},d.name))}),Ut.jsxs("form",{className:"contact-form",onSubmit:d=>d.preventDefault(),children:[Ut.jsx("input",{type:"text",placeholder:"Your Name",className:"form-input"}),Ut.jsx("input",{type:"email",placeholder:"Your Email",className:"form-input"}),Ut.jsx("textarea",{placeholder:"Your Message",rows:"3",className:"form-input form-textarea"}),Ut.jsx("button",{type:"submit",className:"form-submit",children:"Send Message"})]}),Ut.jsx("p",{className:"footer-text",children:M3.text})]}),Ut.jsx("a",{href:$m.cvLink,download:!0,className:"cv-button",style:{position:"fixed",bottom:"20px",left:"20px",pointerEvents:"auto"},children:"Download CV"})]})},B3=()=>{const o=We.useRef(null),t=We.useRef(null),e=We.useRef(null),i=We.useRef(null),s=We.useRef(null),l=We.useRef(null),u=We.useRef({}),f=We.useRef(null),[d,h]=We.useState(!1),[m,v]=We.useState(0),[_,x]=We.useState(0),[M,b]=We.useState([]),[S,y]=We.useState([]),[E,D]=We.useState([]),[C,U]=We.useState([]),[N,O]=We.useState(!0);We.useEffect(()=>{if(!o.current)return;const k=o.current,F=new $2(k),W=new b3(F.camera),Y=new E3,tt=new T3,Z=new A3,G=new w3(F.scene,{count:2500,zRange:[-1800,100],spreadX:400,spreadY:150});t.current=F,e.current=W,i.current=Y,s.current=tt,l.current=Z;const H=F.quality,it={intro:new R3(F.scene,tt,H),about:new C3(F.scene,tt,H),skills:new U3(F.scene,tt,H),services:new L3(F.scene,tt,H),projects:new N3(F.scene,tt,H),experience:new P3(F.scene,tt,H),contact:new O3(F.scene,tt,H)};u.current=it,O(!1);let ft=0;const I=()=>{f.current=requestAnimationFrame(I);const et=F.clock.getDelta(),ht=F.clock.getElapsedTime(),bt=Y.update(et),vt=W.update(et,bt);Z.update(vt.sectionIndex,vt.sectionProgress,Bf);const Ot=Object.keys(it);for(let nt=0;nt<Ot.length;nt++)it[Ot[nt]].update(et,ht);if(G.update(et,bt,vt.sectionIndex),F.dirLight&&(F.dirLight.position.x=F.camera.position.x+20,F.dirLight.position.z=F.camera.position.z+30,F.dirLight.target.position.set(F.camera.position.x,0,F.camera.position.z-20),F.dirLight.target.updateMatrixWorld()),F.renderer.render(F.scene,F.camera),ft++,ft%4===0){v(vt.sectionIndex),x(vt.sectionProgress);const nt=vt.sectionIndex;nt>=1&&nt<=3&&it.skills&&b(it.skills.getIconScreenPositions(F.camera)),nt>=2&&nt<=4&&it.services&&U(it.services.getPanelScreenPositions(F.camera)),nt>=3&&nt<=5&&it.projects&&y(it.projects.getIslandScreenPositions(F.camera)),nt>=4&&nt<=6&&it.experience&&D(it.experience.getCheckpointScreenPositions(F.camera))}};return I(),()=>{f.current&&cancelAnimationFrame(f.current),Y.dispose(),W.dispose(),Z.dispose(),G.dispose();for(const et of Object.keys(it))it[et].dispose();tt.dispose(),F.dispose()}},[]);const A=We.useCallback(()=>{h(!0),i.current&&i.current.unlock()},[]),w=We.useCallback(k=>{if(!e.current||!i.current)return;const F=e.current.jumpToSection(k);i.current.setProgress(F)},[]);return Ut.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[Ut.jsx("div",{ref:o,style:{position:"fixed",inset:0,zIndex:1}}),N&&Ut.jsx("div",{style:{position:"fixed",inset:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",background:"#050510",color:"#38bdf8",fontSize:"1.2rem",fontWeight:300,letterSpacing:"0.2em"},children:"LOADING..."}),!N&&Ut.jsx(F3,{onStart:A}),d&&Ut.jsx(I3,{currentSection:m,onSectionClick:w}),d&&Ut.jsx(z3,{currentSection:m,sectionProgress:_,skillPositions:M,projectPositions:S,experiencePositions:E,servicePositions:C})]})};function G3(){return Ut.jsx(B3,{})}Cb.createRoot(document.getElementById("root")).render(Ut.jsx(yb.StrictMode,{children:Ut.jsx(G3,{})}));
