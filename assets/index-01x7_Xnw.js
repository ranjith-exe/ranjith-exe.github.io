(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();function IS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kd={exports:{}},nc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function bb(){if(ax)return nc;ax=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:i,key:u,ref:s!==void 0?s:null,props:l}}return nc.Fragment=t,nc.jsx=e,nc.jsxs=e,nc}var sx;function Eb(){return sx||(sx=1,Kd.exports=bb()),Kd.exports}var wt=Eb(),Qd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx;function Tb(){if(rx)return de;rx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function S(z,et,ht){this.props=z,this.context=et,this.refs=b,this.updater=ht||x}S.prototype.isReactComponent={},S.prototype.setState=function(z,et){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,et,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function M(){}M.prototype=S.prototype;function E(z,et,ht){this.props=z,this.context=et,this.refs=b,this.updater=ht||x}var D=E.prototype=new M;D.constructor=E,y(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,U={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function O(z,et,ht,bt,vt,Ot){return ht=Ot.ref,{$$typeof:o,type:z,key:et,ref:ht!==void 0?ht:null,props:Ot}}function T(z,et){return O(z.type,et,void 0,void 0,void 0,z.props)}function w(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function k(z){var et={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ht){return et[ht]})}var F=/\/+/g;function W(z,et){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):et.toString(36)}function Y(){}function tt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Y,Y):(z.status="pending",z.then(function(et){z.status==="pending"&&(z.status="fulfilled",z.value=et)},function(et){z.status==="pending"&&(z.status="rejected",z.reason=et)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Z(z,et,ht,bt,vt){var Ot=typeof z;(Ot==="undefined"||Ot==="boolean")&&(z=null);var nt=!1;if(z===null)nt=!0;else switch(Ot){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(z.$$typeof){case o:case t:nt=!0;break;case m:return nt=z._init,Z(nt(z._payload),et,ht,bt,vt)}}if(nt)return vt=vt(z),nt=bt===""?"."+W(z,0):bt,C(vt)?(ht="",nt!=null&&(ht=nt.replace(F,"$&/")+"/"),Z(vt,et,ht,"",function(Yt){return Yt})):vt!=null&&(w(vt)&&(vt=T(vt,ht+(vt.key==null||z&&z.key===vt.key?"":(""+vt.key).replace(F,"$&/")+"/")+nt)),et.push(vt)),1;nt=0;var Et=bt===""?".":bt+":";if(C(z))for(var _t=0;_t<z.length;_t++)bt=z[_t],Ot=Et+W(bt,_t),nt+=Z(bt,et,ht,Ot,vt);else if(_t=_(z),typeof _t=="function")for(z=_t.call(z),_t=0;!(bt=z.next()).done;)bt=bt.value,Ot=Et+W(bt,_t++),nt+=Z(bt,et,ht,Ot,vt);else if(Ot==="object"){if(typeof z.then=="function")return Z(tt(z),et,ht,bt,vt);throw et=String(z),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return nt}function G(z,et,ht){if(z==null)return z;var bt=[],vt=0;return Z(z,bt,"","",function(Ot){return et.call(ht,Ot,vt++)}),bt}function V(z){if(z._status===-1){var et=z._result;et=et(),et.then(function(ht){(z._status===0||z._status===-1)&&(z._status=1,z._result=ht)},function(ht){(z._status===0||z._status===-1)&&(z._status=2,z._result=ht)}),z._status===-1&&(z._status=0,z._result=et)}if(z._status===1)return z._result.default;throw z._result}var it=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function ft(){}return de.Children={map:G,forEach:function(z,et,ht){G(z,function(){et.apply(this,arguments)},ht)},count:function(z){var et=0;return G(z,function(){et++}),et},toArray:function(z){return G(z,function(et){return et})||[]},only:function(z){if(!w(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},de.Component=S,de.Fragment=e,de.Profiler=s,de.PureComponent=E,de.StrictMode=i,de.Suspense=p,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,de.act=function(){throw Error("act(...) is not supported in production builds of React.")},de.cache=function(z){return function(){return z.apply(null,arguments)}},de.cloneElement=function(z,et,ht){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var bt=y({},z.props),vt=z.key,Ot=void 0;if(et!=null)for(nt in et.ref!==void 0&&(Ot=void 0),et.key!==void 0&&(vt=""+et.key),et)!N.call(et,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&et.ref===void 0||(bt[nt]=et[nt]);var nt=arguments.length-2;if(nt===1)bt.children=ht;else if(1<nt){for(var Et=Array(nt),_t=0;_t<nt;_t++)Et[_t]=arguments[_t+2];bt.children=Et}return O(z.type,vt,void 0,void 0,Ot,bt)},de.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},de.createElement=function(z,et,ht){var bt,vt={},Ot=null;if(et!=null)for(bt in et.key!==void 0&&(Ot=""+et.key),et)N.call(et,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(vt[bt]=et[bt]);var nt=arguments.length-2;if(nt===1)vt.children=ht;else if(1<nt){for(var Et=Array(nt),_t=0;_t<nt;_t++)Et[_t]=arguments[_t+2];vt.children=Et}if(z&&z.defaultProps)for(bt in nt=z.defaultProps,nt)vt[bt]===void 0&&(vt[bt]=nt[bt]);return O(z,Ot,void 0,void 0,null,vt)},de.createRef=function(){return{current:null}},de.forwardRef=function(z){return{$$typeof:f,render:z}},de.isValidElement=w,de.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:V}},de.memo=function(z,et){return{$$typeof:h,type:z,compare:et===void 0?null:et}},de.startTransition=function(z){var et=U.T,ht={};U.T=ht;try{var bt=z(),vt=U.S;vt!==null&&vt(ht,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(ft,it)}catch(Ot){it(Ot)}finally{U.T=et}},de.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},de.use=function(z){return U.H.use(z)},de.useActionState=function(z,et,ht){return U.H.useActionState(z,et,ht)},de.useCallback=function(z,et){return U.H.useCallback(z,et)},de.useContext=function(z){return U.H.useContext(z)},de.useDebugValue=function(){},de.useDeferredValue=function(z,et){return U.H.useDeferredValue(z,et)},de.useEffect=function(z,et){return U.H.useEffect(z,et)},de.useId=function(){return U.H.useId()},de.useImperativeHandle=function(z,et,ht){return U.H.useImperativeHandle(z,et,ht)},de.useInsertionEffect=function(z,et){return U.H.useInsertionEffect(z,et)},de.useLayoutEffect=function(z,et){return U.H.useLayoutEffect(z,et)},de.useMemo=function(z,et){return U.H.useMemo(z,et)},de.useOptimistic=function(z,et){return U.H.useOptimistic(z,et)},de.useReducer=function(z,et,ht){return U.H.useReducer(z,et,ht)},de.useRef=function(z){return U.H.useRef(z)},de.useState=function(z){return U.H.useState(z)},de.useSyncExternalStore=function(z,et,ht){return U.H.useSyncExternalStore(z,et,ht)},de.useTransition=function(){return U.H.useTransition()},de.version="19.0.0",de}var ox;function n0(){return ox||(ox=1,Qd.exports=Tb()),Qd.exports}var Be=n0();const Ab=IS(Be);var Jd={exports:{}},ic={},$d={exports:{}},tp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function wb(){return lx||(lx=1,function(o){function t(G,V){var it=G.length;G.push(V);t:for(;0<it;){var ft=it-1>>>1,z=G[ft];if(0<s(z,V))G[ft]=V,G[it]=z,it=ft;else break t}}function e(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var V=G[0],it=G.pop();if(it!==V){G[0]=it;t:for(var ft=0,z=G.length,et=z>>>1;ft<et;){var ht=2*(ft+1)-1,bt=G[ht],vt=ht+1,Ot=G[vt];if(0>s(bt,it))vt<z&&0>s(Ot,bt)?(G[ft]=Ot,G[vt]=it,ft=vt):(G[ft]=bt,G[ht]=it,ft=ht);else if(vt<z&&0>s(Ot,it))G[ft]=Ot,G[vt]=it,ft=vt;else break t}}return V}function s(G,V){var it=G.sortIndex-V.sortIndex;return it!==0?it:G.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var p=[],h=[],m=1,v=null,_=3,x=!1,y=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function D(G){for(var V=e(h);V!==null;){if(V.callback===null)i(h);else if(V.startTime<=G)i(h),V.sortIndex=V.expirationTime,t(p,V);else break;V=e(h)}}function C(G){if(b=!1,D(G),!y)if(e(p)!==null)y=!0,tt();else{var V=e(h);V!==null&&Z(C,V.startTime-G)}}var U=!1,N=-1,O=5,T=-1;function w(){return!(o.unstable_now()-T<O)}function k(){if(U){var G=o.unstable_now();T=G;var V=!0;try{t:{y=!1,b&&(b=!1,M(N),N=-1),x=!0;var it=_;try{e:{for(D(G),v=e(p);v!==null&&!(v.expirationTime>G&&w());){var ft=v.callback;if(typeof ft=="function"){v.callback=null,_=v.priorityLevel;var z=ft(v.expirationTime<=G);if(G=o.unstable_now(),typeof z=="function"){v.callback=z,D(G),V=!0;break e}v===e(p)&&i(p),D(G)}else i(p);v=e(p)}if(v!==null)V=!0;else{var et=e(h);et!==null&&Z(C,et.startTime-G),V=!1}}break t}finally{v=null,_=it,x=!1}V=void 0}}finally{V?F():U=!1}}}var F;if(typeof E=="function")F=function(){E(k)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Y=W.port2;W.port1.onmessage=k,F=function(){Y.postMessage(null)}}else F=function(){S(k,0)};function tt(){U||(U=!0,F())}function Z(G,V){N=S(function(){G(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){y||x||(y=!0,tt())},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return e(p)},o.unstable_next=function(G){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var it=_;_=V;try{return G()}finally{_=it}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,V){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var it=_;_=G;try{return V()}finally{_=it}},o.unstable_scheduleCallback=function(G,V,it){var ft=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?ft+it:ft):it=ft,G){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=it+z,G={id:m++,callback:V,priorityLevel:G,startTime:it,expirationTime:z,sortIndex:-1},it>ft?(G.sortIndex=it,t(h,G),e(p)===null&&G===e(h)&&(b?(M(N),N=-1):b=!0,Z(C,it-ft))):(G.sortIndex=z,t(p,G),y||x||(y=!0,tt())),G},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(G){var V=_;return function(){var it=_;_=V;try{return G.apply(this,arguments)}finally{_=it}}}}(tp)),tp}var cx;function Rb(){return cx||(cx=1,$d.exports=wb()),$d.exports}var ep={exports:{}},Xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function Cb(){if(ux)return Xn;ux=1;var o=n0();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,h,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:p,containerInfo:h,implementation:m}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Xn.createPortal=function(p,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,m)},Xn.flushSync=function(p){var h=u.T,m=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=h,i.p=m,i.d.f()}},Xn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(p,h))},Xn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Xn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?i.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):m==="script"&&i.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Xn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);i.d.M(p,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(p)},Xn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin);i.d.L(p,m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Xn.preloadModule=function(p,h){if(typeof p=="string")if(h){var m=f(h.as,h.crossOrigin);i.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(p)},Xn.requestFormReset=function(p){i.d.r(p)},Xn.unstable_batchedUpdates=function(p,h){return p(h)},Xn.useFormState=function(p,h,m){return u.H.useFormState(p,h,m)},Xn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Xn.version="19.0.0",Xn}var fx;function Db(){if(fx)return ep.exports;fx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ep.exports=Cb(),ep.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function Ub(){if(hx)return ic;hx=1;var o=Rb(),t=n0(),e=Db();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),_=Symbol.for("react.consumer"),x=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),C=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function N(n){return n===null||typeof n!="object"?null:(n=U&&n[U]||n["@@iterator"],typeof n=="function"?n:null)}var O=Symbol.for("react.client.reference");function T(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===O?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case p:return"Fragment";case f:return"Portal";case m:return"Profiler";case h:return"StrictMode";case b:return"Suspense";case S:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Provider";case _:return(n._context.displayName||"Context")+".Consumer";case y:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case M:return a=n.displayName||null,a!==null?a:T(n.type)||"Memo";case E:a=n._payload,n=n._init;try{return T(n(a))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=Object.assign,F,W;function Y(n){if(F===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);F=a&&a[1]||"",W=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+n+W}var tt=!1;function Z(n,a){if(!n||tt)return"";tt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(dt){var ot=dt}Reflect.construct(n,[],St)}else{try{St.call()}catch(dt){ot=dt}n.call(St.prototype)}}else{try{throw Error()}catch(dt){ot=dt}(St=n())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(dt){if(dt&&ot&&typeof dt.stack=="string")return[dt.stack,ot.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),A=g[0],P=g[1];if(A&&P){var B=A.split(`
`),K=P.split(`
`);for(d=c=0;c<B.length&&!B[c].includes("DetermineComponentFrameRoot");)c++;for(;d<K.length&&!K[d].includes("DetermineComponentFrameRoot");)d++;if(c===B.length||d===K.length)for(c=B.length-1,d=K.length-1;1<=c&&0<=d&&B[c]!==K[d];)d--;for(;1<=c&&0<=d;c--,d--)if(B[c]!==K[d]){if(c!==1||d!==1)do if(c--,d--,0>d||B[c]!==K[d]){var mt=`
`+B[c].replace(" at new "," at ");return n.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",n.displayName)),mt}while(1<=c&&0<=d);break}}}finally{tt=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?Y(r):""}function G(n){switch(n.tag){case 26:case 27:case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function V(n){try{var a="";do a+=G(n),n=n.return;while(n);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function it(n){var a=n,r=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(r=a.return),n=a.return;while(n)}return a.tag===3?r:null}function ft(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function z(n){if(it(n)!==n)throw Error(i(188))}function et(n){var a=n.alternate;if(!a){if(a=it(n),a===null)throw Error(i(188));return a!==n?null:n}for(var r=n,c=a;;){var d=r.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){r=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===r)return z(d),n;if(g===c)return z(d),a;g=g.sibling}throw Error(i(188))}if(r.return!==c.return)r=d,c=g;else{for(var A=!1,P=d.child;P;){if(P===r){A=!0,r=d,c=g;break}if(P===c){A=!0,c=d,r=g;break}P=P.sibling}if(!A){for(P=g.child;P;){if(P===r){A=!0,r=g,c=d;break}if(P===c){A=!0,c=g,r=d;break}P=P.sibling}if(!A)throw Error(i(189))}}if(r.alternate!==c)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?n:a}function ht(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=ht(n),a!==null)return a;n=n.sibling}return null}var bt=Array.isArray,vt=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ot={pending:!1,data:null,method:null,action:null},nt=[],Et=-1;function _t(n){return{current:n}}function Yt(n){0>Et||(n.current=nt[Et],nt[Et]=null,Et--)}function Pt(n,a){Et++,nt[Et]=n.current,n.current=a}var Qt=_t(null),Ye=_t(null),ue=_t(null),be=_t(null);function Re(n,a){switch(Pt(ue,a),Pt(Ye,n),Pt(Qt,null),n=a.nodeType,n){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?Nv(a):0;break;default:if(n=n===8?a.parentNode:a,a=n.tagName,n=n.namespaceURI)n=Nv(n),a=Pv(n,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}Yt(Qt),Pt(Qt,a)}function ae(){Yt(Qt),Yt(Ye),Yt(ue)}function We(n){n.memoizedState!==null&&Pt(be,n);var a=Qt.current,r=Pv(a,n.type);a!==r&&(Pt(Ye,n),Pt(Qt,r))}function X(n){Ye.current===n&&(Yt(Qt),Yt(Ye)),be.current===n&&(Yt(be),Ql._currentValue=Ot)}var je=Object.prototype.hasOwnProperty,Ee=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,jt=o.unstable_shouldYield,I=o.unstable_requestPaint,R=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Jt=o.log,te=o.unstable_setDisableYieldValue,Tt=null,yt=null;function Wt(n){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}}function zt(n){if(typeof Jt=="function"&&te(n),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Tt,n)}catch{}}var Ut=Math.clz32?Math.clz32:Ct,fe=Math.log,q=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(fe(n)/q|0)|0}var At=128,Ft=4194304;function Mt(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ct(n,a){var r=n.pendingLanes;if(r===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,A=n.warmLanes;n=n.finishedLanes!==0;var P=r&134217727;return P!==0?(r=P&~d,r!==0?c=Mt(r):(g&=P,g!==0?c=Mt(g):n||(A=P&~A,A!==0&&(c=Mt(A))))):(P=r&~d,P!==0?c=Mt(P):g!==0?c=Mt(g):n||(A=r&~A,A!==0&&(c=Mt(A)))),c===0?0:a!==0&&a!==c&&(a&d)===0&&(d=c&-c,A=a&-a,d>=A||d===32&&(A&4194176)!==0)?a:c}function Bt(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function se(n,a){switch(n){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var n=At;return At<<=1,(At&4194176)===0&&(At=128),n}function Ce(){var n=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),n}function gi(n){for(var a=[],r=0;31>r;r++)a.push(n);return a}function Qn(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ic(n,a,r,c,d,g){var A=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var P=n.entanglements,B=n.expirationTimes,K=n.hiddenUpdates;for(r=A&~r;0<r;){var mt=31-Ut(r),St=1<<mt;P[mt]=0,B[mt]=-1;var ot=K[mt];if(ot!==null)for(K[mt]=null,mt=0;mt<ot.length;mt++){var dt=ot[mt];dt!==null&&(dt.lane&=-536870913)}r&=~St}c!==0&&Hr(n,c,0),g!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=g&~(A&~a))}function Hr(n,a,r){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-Ut(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|r&4194218}function Bc(n,a){var r=n.entangledLanes|=a;for(n=n.entanglements;r;){var c=31-Ut(r),d=1<<c;d&a|n[c]&a&&(n[c]|=a),r&=~d}}function ol(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ll(){var n=vt.p;return n!==0?n:(n=window.event,n===void 0?32:Jv(n.type))}function Ra(n,a){var r=vt.p;try{return vt.p=n,a()}finally{vt.p=r}}var Pi=Math.random().toString(36).slice(2),yn="__reactFiber$"+Pi,Pn="__reactProps$"+Pi,Ji="__reactContainer$"+Pi,Vr="__reactEvents$"+Pi,kr="__reactListeners$"+Pi,Gc="__reactHandles$"+Pi,cl="__reactResources$"+Pi,Qs="__reactMarker$"+Pi;function ul(n){delete n[yn],delete n[Pn],delete n[Vr],delete n[kr],delete n[Gc]}function Ca(n){var a=n[yn];if(a)return a;for(var r=n.parentNode;r;){if(a=r[Ji]||r[yn]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(n=zv(n);n!==null;){if(r=n[yn])return r;n=zv(n)}return a}n=r,r=n.parentNode}return null}function os(n){if(n=n[yn]||n[Ji]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Js(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function ls(n){var a=n[cl];return a||(a=n[cl]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function L(n){n[Qs]=!0}var J=new Set,lt={};function st(n,a){at(n,a),at(n+"Capture",a)}function at(n,a){for(lt[n]=a,n=0;n<a.length;n++)J.add(a[n])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lt={},qt={};function Zt(n){return je.call(qt,n)?!0:je.call(Lt,n)?!1:It.test(n)?qt[n]=!0:(Lt[n]=!0,!1)}function ie(n,a,r){if(Zt(a))if(r===null)n.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+r)}}function le(n,a,r){if(r===null)n.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+r)}}function Gt(n,a,r,c){if(c===null)n.removeAttribute(r);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttributeNS(a,r,""+c)}}function he(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ze(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ke(n){var a=Ze(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var d=r.get,g=r.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,a,{enumerable:r.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Ae(n){n._valueTracker||(n._valueTracker=Ke(n))}function Mn(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var r=a.getValue(),c="";return n&&(c=Ze(n)?n.checked?"true":"false":n.value),n=c,n!==r?(a.setValue(n),!0):!1}function Vt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Jn=/[\n"\\]/g;function oe(n){return n.replace(Jn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function $n(n,a,r,c,d,g,A,P){n.name="",A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.type=A:n.removeAttribute("type"),a!=null?A==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+he(a)):n.value!==""+he(a)&&(n.value=""+he(a)):A!=="submit"&&A!=="reset"||n.removeAttribute("value"),a!=null?$i(n,A,he(a)):r!=null?$i(n,A,he(r)):c!=null&&n.removeAttribute("value"),d==null&&g!=null&&(n.defaultChecked=!!g),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),P!=null&&typeof P!="function"&&typeof P!="symbol"&&typeof P!="boolean"?n.name=""+he(P):n.removeAttribute("name")}function _i(n,a,r,c,d,g,A,P){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||r!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;r=r!=null?""+he(r):"",a=a!=null?""+he(a):r,P||a===n.value||(n.value=a),n.defaultValue=a}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=P?n.checked:!!c,n.defaultChecked=!!c,A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(n.name=A)}function $i(n,a,r){a==="number"&&Vt(n.ownerDocument)===n||n.defaultValue===""+r||(n.defaultValue=""+r)}function vi(n,a,r,c){if(n=n.options,a){a={};for(var d=0;d<r.length;d++)a["$"+r[d]]=!0;for(r=0;r<n.length;r++)d=a.hasOwnProperty("$"+n[r].value),n[r].selected!==d&&(n[r].selected=d),d&&c&&(n[r].defaultSelected=!0)}else{for(r=""+he(r),a=null,d=0;d<n.length;d++){if(n[d].value===r){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}a!==null||n[d].disabled||(a=n[d])}a!==null&&(a.selected=!0)}}function Pe(n,a,r){if(a!=null&&(a=""+he(a),a!==n.value&&(n.value=a),r==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=r!=null?""+he(r):""}function dn(n,a,r,c){if(a==null){if(c!=null){if(r!=null)throw Error(i(92));if(bt(c)){if(1<c.length)throw Error(i(93));c=c[0]}r=c}r==null&&(r=""),a=r}r=he(a),n.defaultValue=r,c=n.textContent,c===r&&c!==""&&c!==null&&(n.value=c)}function ti(n,a){if(a){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=a;return}}n.textContent=a}var pn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ta(n,a,r){var c=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,r):typeof r!="number"||r===0||pn.has(a)?a==="float"?n.cssFloat=r:n[a]=(""+r).trim():n[a]=r+"px"}function Da(n,a,r){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,r!=null){for(var c in r)!r.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var d in a)c=a[d],a.hasOwnProperty(d)&&r[d]!==c&&ta(n,d,c)}else for(var g in a)a.hasOwnProperty(g)&&ta(n,g,a[g])}function Xr(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),MM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hc(n){return MM.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Qf=null;function Jf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Wr=null,qr=null;function k0(n){var a=os(n);if(a&&(n=a.stateNode)){var r=n[Pn]||null;t:switch(n=a.stateNode,a.type){case"input":if($n(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+oe(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var c=r[a];if(c!==n&&c.form===n.form){var d=c[Pn]||null;if(!d)throw Error(i(90));$n(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<r.length;a++)c=r[a],c.form===n.form&&Mn(c)}break t;case"textarea":Pe(n,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&vi(n,!!r.multiple,a,!1)}}}var $f=!1;function X0(n,a,r){if($f)return n(a,r);$f=!0;try{var c=n(a);return c}finally{if($f=!1,(Wr!==null||qr!==null)&&(Eu(),Wr&&(a=Wr,n=qr,qr=Wr=null,k0(a),n)))for(a=0;a<n.length;a++)k0(n[a])}}function fl(n,a){var r=n.stateNode;if(r===null)return null;var c=r[Pn]||null;if(c===null)return null;r=c[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break t;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(i(231,a,typeof r));return r}var th=!1;if(Dt)try{var hl={};Object.defineProperty(hl,"passive",{get:function(){th=!0}}),window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{th=!1}var cs=null,eh=null,Vc=null;function W0(){if(Vc)return Vc;var n,a=eh,r=a.length,c,d="value"in cs?cs.value:cs.textContent,g=d.length;for(n=0;n<r&&a[n]===d[n];n++);var A=r-n;for(c=1;c<=A&&a[r-c]===d[g-c];c++);return Vc=d.slice(n,1<c?1-c:void 0)}function kc(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Xc(){return!0}function q0(){return!1}function ri(n){function a(r,c,d,g,A){this._reactName=r,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var P in n)n.hasOwnProperty(P)&&(r=n[P],this[P]=r?r(g):g[P]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Xc:q0,this.isPropagationStopped=q0,this}return k(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xc)},persist:function(){},isPersistent:Xc}),a}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=ri($s),dl=k({},$s,{view:0,detail:0}),bM=ri(dl),nh,ih,pl,qc=k({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pl&&(pl&&n.type==="mousemove"?(nh=n.screenX-pl.screenX,ih=n.screenY-pl.screenY):ih=nh=0,pl=n),nh)},movementY:function(n){return"movementY"in n?n.movementY:ih}}),Y0=ri(qc),EM=k({},qc,{dataTransfer:0}),TM=ri(EM),AM=k({},dl,{relatedTarget:0}),ah=ri(AM),wM=k({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),RM=ri(wM),CM=k({},$s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),DM=ri(CM),UM=k({},$s,{data:0}),j0=ri(UM),LM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OM(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=PM[n])?!!a[n]:!1}function sh(){return OM}var FM=k({},dl,{key:function(n){if(n.key){var a=LM[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=kc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?NM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sh,charCode:function(n){return n.type==="keypress"?kc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?kc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zM=ri(FM),IM=k({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Z0=ri(IM),BM=k({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sh}),GM=ri(BM),HM=k({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),VM=ri(HM),kM=k({},qc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),XM=ri(kM),WM=k({},$s,{newState:0,oldState:0}),qM=ri(WM),YM=[9,13,27,32],rh=Dt&&"CompositionEvent"in window,ml=null;Dt&&"documentMode"in document&&(ml=document.documentMode);var jM=Dt&&"TextEvent"in window&&!ml,K0=Dt&&(!rh||ml&&8<ml&&11>=ml),Q0=" ",J0=!1;function $0(n,a){switch(n){case"keyup":return YM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Yr=!1;function ZM(n,a){switch(n){case"compositionend":return tg(a);case"keypress":return a.which!==32?null:(J0=!0,Q0);case"textInput":return n=a.data,n===Q0&&J0?null:n;default:return null}}function KM(n,a){if(Yr)return n==="compositionend"||!rh&&$0(n,a)?(n=W0(),Vc=eh=cs=null,Yr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return K0&&a.locale!=="ko"?null:a.data;default:return null}}var QM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!QM[n.type]:a==="textarea"}function ng(n,a,r,c){Wr?qr?qr.push(c):qr=[c]:Wr=c,a=Cu(a,"onChange"),0<a.length&&(r=new Wc("onChange","change",null,r,c),n.push({event:r,listeners:a}))}var gl=null,_l=null;function JM(n){Rv(n,0)}function Yc(n){var a=Js(n);if(Mn(a))return n}function ig(n,a){if(n==="change")return a}var ag=!1;if(Dt){var oh;if(Dt){var lh="oninput"in document;if(!lh){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),lh=typeof sg.oninput=="function"}oh=lh}else oh=!1;ag=oh&&(!document.documentMode||9<document.documentMode)}function rg(){gl&&(gl.detachEvent("onpropertychange",og),_l=gl=null)}function og(n){if(n.propertyName==="value"&&Yc(_l)){var a=[];ng(a,_l,n,Jf(n)),X0(JM,a)}}function $M(n,a,r){n==="focusin"?(rg(),gl=a,_l=r,gl.attachEvent("onpropertychange",og)):n==="focusout"&&rg()}function t1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Yc(_l)}function e1(n,a){if(n==="click")return Yc(a)}function n1(n,a){if(n==="input"||n==="change")return Yc(a)}function i1(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var xi=typeof Object.is=="function"?Object.is:i1;function vl(n,a){if(xi(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var r=Object.keys(n),c=Object.keys(a);if(r.length!==c.length)return!1;for(c=0;c<r.length;c++){var d=r[c];if(!je.call(a,d)||!xi(n[d],a[d]))return!1}return!0}function lg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cg(n,a){var r=lg(n);n=0;for(var c;r;){if(r.nodeType===3){if(c=n+r.textContent.length,n<=a&&c>=a)return{node:r,offset:a-n};n=c}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=lg(r)}}function ug(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?ug(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function fg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Vt(n.document);a instanceof n.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)n=a.contentWindow;else break;a=Vt(n.document)}return a}function ch(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}function a1(n,a){var r=fg(a);a=n.focusedElem;var c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&ug(a.ownerDocument.documentElement,a)){if(c!==null&&ch(a)){if(n=c.start,r=c.end,r===void 0&&(r=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(r,a.value.length);else if(r=(n=a.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=cg(a,g);var A=cg(a,c);d&&A&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==A.node||r.focusOffset!==A.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(n),r.extend(A.node,A.offset)):(n.setEnd(A.node,A.offset),r.addRange(n)))}}for(n=[],r=a;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)r=n[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var s1=Dt&&"documentMode"in document&&11>=document.documentMode,jr=null,uh=null,xl=null,fh=!1;function hg(n,a,r){var c=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fh||jr==null||jr!==Vt(c)||(c=jr,"selectionStart"in c&&ch(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),xl&&vl(xl,c)||(xl=c,c=Cu(uh,"onSelect"),0<c.length&&(a=new Wc("onSelect","select",null,a,r),n.push({event:a,listeners:c}),a.target=jr)))}function tr(n,a){var r={};return r[n.toLowerCase()]=a.toLowerCase(),r["Webkit"+n]="webkit"+a,r["Moz"+n]="moz"+a,r}var Zr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},hh={},dg={};Dt&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function er(n){if(hh[n])return hh[n];if(!Zr[n])return n;var a=Zr[n],r;for(r in a)if(a.hasOwnProperty(r)&&r in dg)return hh[n]=a[r];return n}var pg=er("animationend"),mg=er("animationiteration"),gg=er("animationstart"),r1=er("transitionrun"),o1=er("transitionstart"),l1=er("transitioncancel"),_g=er("transitionend"),vg=new Map,xg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ea(n,a){vg.set(n,a),st(a,[n])}var Oi=[],Kr=0,dh=0;function jc(){for(var n=Kr,a=dh=Kr=0;a<n;){var r=Oi[a];Oi[a++]=null;var c=Oi[a];Oi[a++]=null;var d=Oi[a];Oi[a++]=null;var g=Oi[a];if(Oi[a++]=null,c!==null&&d!==null){var A=c.pending;A===null?d.next=d:(d.next=A.next,A.next=d),c.pending=d}g!==0&&Sg(r,d,g)}}function Zc(n,a,r,c){Oi[Kr++]=n,Oi[Kr++]=a,Oi[Kr++]=r,Oi[Kr++]=c,dh|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function ph(n,a,r,c){return Zc(n,a,r,c),Kc(n)}function us(n,a){return Zc(n,null,null,a),Kc(n)}function Sg(n,a,r){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r);for(var d=!1,g=n.return;g!==null;)g.childLanes|=r,c=g.alternate,c!==null&&(c.childLanes|=r),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(d=!0)),n=g,g=g.return;d&&a!==null&&n.tag===3&&(g=n.stateNode,d=31-Ut(r),g=g.hiddenUpdates,n=g[d],n===null?g[d]=[a]:n.push(a),a.lane=r|536870912)}function Kc(n){if(50<Xl)throw Xl=0,Sd=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Qr={},yg=new WeakMap;function Fi(n,a){if(typeof n=="object"&&n!==null){var r=yg.get(n);return r!==void 0?r:(a={value:n,source:a,stack:V(a)},yg.set(n,a),a)}return{value:n,source:a,stack:V(a)}}var Jr=[],$r=0,Qc=null,Jc=0,zi=[],Ii=0,nr=null,Ua=1,La="";function ir(n,a){Jr[$r++]=Jc,Jr[$r++]=Qc,Qc=n,Jc=a}function Mg(n,a,r){zi[Ii++]=Ua,zi[Ii++]=La,zi[Ii++]=nr,nr=n;var c=Ua;n=La;var d=32-Ut(c)-1;c&=~(1<<d),r+=1;var g=32-Ut(a)+d;if(30<g){var A=d-d%5;g=(c&(1<<A)-1).toString(32),c>>=A,d-=A,Ua=1<<32-Ut(a)+d|r<<d|c,La=g+n}else Ua=1<<g|r<<d|c,La=n}function mh(n){n.return!==null&&(ir(n,1),Mg(n,1,0))}function gh(n){for(;n===Qc;)Qc=Jr[--$r],Jr[$r]=null,Jc=Jr[--$r],Jr[$r]=null;for(;n===nr;)nr=zi[--Ii],zi[Ii]=null,La=zi[--Ii],zi[Ii]=null,Ua=zi[--Ii],zi[Ii]=null}var ei=null,On=null,De=!1,na=null,la=!1,_h=Error(i(519));function ar(n){var a=Error(i(418,""));throw Ml(Fi(a,n)),_h}function bg(n){var a=n.stateNode,r=n.type,c=n.memoizedProps;switch(a[yn]=n,a[Pn]=c,r){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(r=0;r<ql.length;r++)ye(ql[r],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":ye("invalid",a),_i(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ae(a);break;case"select":ye("invalid",a);break;case"textarea":ye("invalid",a),dn(a,c.value,c.defaultValue,c.children),Ae(a)}r=c.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||c.suppressHydrationWarning===!0||Lv(a.textContent,r)?(c.popover!=null&&(ye("beforetoggle",a),ye("toggle",a)),c.onScroll!=null&&ye("scroll",a),c.onScrollEnd!=null&&ye("scrollend",a),c.onClick!=null&&(a.onclick=Du),a=!0):a=!1,a||ar(n)}function Eg(n){for(ei=n.return;ei;)switch(ei.tag){case 3:case 27:la=!0;return;case 5:case 13:la=!1;return;default:ei=ei.return}}function Sl(n){if(n!==ei)return!1;if(!De)return Eg(n),De=!0,!1;var a=!1,r;if((r=n.tag!==3&&n.tag!==27)&&((r=n.tag===5)&&(r=n.type,r=!(r!=="form"&&r!=="button")||zd(n.type,n.memoizedProps)),r=!r),r&&(a=!0),a&&On&&ar(n),Eg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));t:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(r=n.data,r==="/$"){if(a===0){On=aa(n.nextSibling);break t}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;n=n.nextSibling}On=null}}else On=ei?aa(n.stateNode.nextSibling):null;return!0}function yl(){On=ei=null,De=!1}function Ml(n){na===null?na=[n]:na.push(n)}var bl=Error(i(460)),Tg=Error(i(474)),vh={then:function(){}};function Ag(n){return n=n.status,n==="fulfilled"||n==="rejected"}function $c(){}function wg(n,a,r){switch(r=n[r],r===void 0?n.push(a):r!==a&&(a.then($c,$c),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===bl?Error(i(483)):n;default:if(typeof a.status=="string")a.then($c,$c);else{if(n=ke,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=c}},function(c){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===bl?Error(i(483)):n}throw El=a,bl}}var El=null;function Rg(){if(El===null)throw Error(i(459));var n=El;return El=null,n}var to=null,Tl=0;function tu(n){var a=Tl;return Tl+=1,to===null&&(to=[]),wg(to,n,a)}function Al(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function eu(n,a){throw a.$$typeof===l?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function Cg(n){var a=n._init;return a(n._payload)}function Dg(n){function a($,j){if(n){var rt=$.deletions;rt===null?($.deletions=[j],$.flags|=16):rt.push(j)}}function r($,j){if(!n)return null;for(;j!==null;)a($,j),j=j.sibling;return null}function c($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function d($,j){return $=Ms($,j),$.index=0,$.sibling=null,$}function g($,j,rt){return $.index=rt,n?(rt=$.alternate,rt!==null?(rt=rt.index,rt<j?($.flags|=33554434,j):rt):($.flags|=33554434,j)):($.flags|=1048576,j)}function A($){return n&&$.alternate===null&&($.flags|=33554434),$}function P($,j,rt,gt){return j===null||j.tag!==6?(j=hd(rt,$.mode,gt),j.return=$,j):(j=d(j,rt),j.return=$,j)}function B($,j,rt,gt){var kt=rt.type;return kt===p?mt($,j,rt.props.children,gt,rt.key):j!==null&&(j.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===E&&Cg(kt)===j.type)?(j=d(j,rt.props),Al(j,rt),j.return=$,j):(j=xu(rt.type,rt.key,rt.props,null,$.mode,gt),Al(j,rt),j.return=$,j)}function K($,j,rt,gt){return j===null||j.tag!==4||j.stateNode.containerInfo!==rt.containerInfo||j.stateNode.implementation!==rt.implementation?(j=dd(rt,$.mode,gt),j.return=$,j):(j=d(j,rt.children||[]),j.return=$,j)}function mt($,j,rt,gt,kt){return j===null||j.tag!==7?(j=pr(rt,$.mode,gt,kt),j.return=$,j):(j=d(j,rt),j.return=$,j)}function St($,j,rt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=hd(""+j,$.mode,rt),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case u:return rt=xu(j.type,j.key,j.props,null,$.mode,rt),Al(rt,j),rt.return=$,rt;case f:return j=dd(j,$.mode,rt),j.return=$,j;case E:var gt=j._init;return j=gt(j._payload),St($,j,rt)}if(bt(j)||N(j))return j=pr(j,$.mode,rt,null),j.return=$,j;if(typeof j.then=="function")return St($,tu(j),rt);if(j.$$typeof===x)return St($,gu($,j),rt);eu($,j)}return null}function ot($,j,rt,gt){var kt=j!==null?j.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return kt!==null?null:P($,j,""+rt,gt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case u:return rt.key===kt?B($,j,rt,gt):null;case f:return rt.key===kt?K($,j,rt,gt):null;case E:return kt=rt._init,rt=kt(rt._payload),ot($,j,rt,gt)}if(bt(rt)||N(rt))return kt!==null?null:mt($,j,rt,gt,null);if(typeof rt.then=="function")return ot($,j,tu(rt),gt);if(rt.$$typeof===x)return ot($,j,gu($,rt),gt);eu($,rt)}return null}function dt($,j,rt,gt,kt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return $=$.get(rt)||null,P(j,$,""+gt,kt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case u:return $=$.get(gt.key===null?rt:gt.key)||null,B(j,$,gt,kt);case f:return $=$.get(gt.key===null?rt:gt.key)||null,K(j,$,gt,kt);case E:var ve=gt._init;return gt=ve(gt._payload),dt($,j,rt,gt,kt)}if(bt(gt)||N(gt))return $=$.get(rt)||null,mt(j,$,gt,kt,null);if(typeof gt.then=="function")return dt($,j,rt,tu(gt),kt);if(gt.$$typeof===x)return dt($,j,rt,gu(j,gt),kt);eu(j,gt)}return null}function Kt($,j,rt,gt){for(var kt=null,ve=null,$t=j,ee=j=0,Dn=null;$t!==null&&ee<rt.length;ee++){$t.index>ee?(Dn=$t,$t=null):Dn=$t.sibling;var Ue=ot($,$t,rt[ee],gt);if(Ue===null){$t===null&&($t=Dn);break}n&&$t&&Ue.alternate===null&&a($,$t),j=g(Ue,j,ee),ve===null?kt=Ue:ve.sibling=Ue,ve=Ue,$t=Dn}if(ee===rt.length)return r($,$t),De&&ir($,ee),kt;if($t===null){for(;ee<rt.length;ee++)$t=St($,rt[ee],gt),$t!==null&&(j=g($t,j,ee),ve===null?kt=$t:ve.sibling=$t,ve=$t);return De&&ir($,ee),kt}for($t=c($t);ee<rt.length;ee++)Dn=dt($t,$,ee,rt[ee],gt),Dn!==null&&(n&&Dn.alternate!==null&&$t.delete(Dn.key===null?ee:Dn.key),j=g(Dn,j,ee),ve===null?kt=Dn:ve.sibling=Dn,ve=Dn);return n&&$t.forEach(function(Cs){return a($,Cs)}),De&&ir($,ee),kt}function ce($,j,rt,gt){if(rt==null)throw Error(i(151));for(var kt=null,ve=null,$t=j,ee=j=0,Dn=null,Ue=rt.next();$t!==null&&!Ue.done;ee++,Ue=rt.next()){$t.index>ee?(Dn=$t,$t=null):Dn=$t.sibling;var Cs=ot($,$t,Ue.value,gt);if(Cs===null){$t===null&&($t=Dn);break}n&&$t&&Cs.alternate===null&&a($,$t),j=g(Cs,j,ee),ve===null?kt=Cs:ve.sibling=Cs,ve=Cs,$t=Dn}if(Ue.done)return r($,$t),De&&ir($,ee),kt;if($t===null){for(;!Ue.done;ee++,Ue=rt.next())Ue=St($,Ue.value,gt),Ue!==null&&(j=g(Ue,j,ee),ve===null?kt=Ue:ve.sibling=Ue,ve=Ue);return De&&ir($,ee),kt}for($t=c($t);!Ue.done;ee++,Ue=rt.next())Ue=dt($t,$,ee,Ue.value,gt),Ue!==null&&(n&&Ue.alternate!==null&&$t.delete(Ue.key===null?ee:Ue.key),j=g(Ue,j,ee),ve===null?kt=Ue:ve.sibling=Ue,ve=Ue);return n&&$t.forEach(function(Mb){return a($,Mb)}),De&&ir($,ee),kt}function on($,j,rt,gt){if(typeof rt=="object"&&rt!==null&&rt.type===p&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case u:t:{for(var kt=rt.key;j!==null;){if(j.key===kt){if(kt=rt.type,kt===p){if(j.tag===7){r($,j.sibling),gt=d(j,rt.props.children),gt.return=$,$=gt;break t}}else if(j.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===E&&Cg(kt)===j.type){r($,j.sibling),gt=d(j,rt.props),Al(gt,rt),gt.return=$,$=gt;break t}r($,j);break}else a($,j);j=j.sibling}rt.type===p?(gt=pr(rt.props.children,$.mode,gt,rt.key),gt.return=$,$=gt):(gt=xu(rt.type,rt.key,rt.props,null,$.mode,gt),Al(gt,rt),gt.return=$,$=gt)}return A($);case f:t:{for(kt=rt.key;j!==null;){if(j.key===kt)if(j.tag===4&&j.stateNode.containerInfo===rt.containerInfo&&j.stateNode.implementation===rt.implementation){r($,j.sibling),gt=d(j,rt.children||[]),gt.return=$,$=gt;break t}else{r($,j);break}else a($,j);j=j.sibling}gt=dd(rt,$.mode,gt),gt.return=$,$=gt}return A($);case E:return kt=rt._init,rt=kt(rt._payload),on($,j,rt,gt)}if(bt(rt))return Kt($,j,rt,gt);if(N(rt)){if(kt=N(rt),typeof kt!="function")throw Error(i(150));return rt=kt.call(rt),ce($,j,rt,gt)}if(typeof rt.then=="function")return on($,j,tu(rt),gt);if(rt.$$typeof===x)return on($,j,gu($,rt),gt);eu($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,j!==null&&j.tag===6?(r($,j.sibling),gt=d(j,rt),gt.return=$,$=gt):(r($,j),gt=hd(rt,$.mode,gt),gt.return=$,$=gt),A($)):r($,j)}return function($,j,rt,gt){try{Tl=0;var kt=on($,j,rt,gt);return to=null,kt}catch($t){if($t===bl)throw $t;var ve=Vi(29,$t,null,$.mode);return ve.lanes=gt,ve.return=$,ve}finally{}}}var sr=Dg(!0),Ug=Dg(!1),eo=_t(null),nu=_t(0);function Lg(n,a){n=ka,Pt(nu,n),Pt(eo,a),ka=n|a.baseLanes}function xh(){Pt(nu,ka),Pt(eo,eo.current)}function Sh(){ka=nu.current,Yt(eo),Yt(nu)}var Bi=_t(null),ca=null;function fs(n){var a=n.alternate;Pt(bn,bn.current&1),Pt(Bi,n),ca===null&&(a===null||eo.current!==null||a.memoizedState!==null)&&(ca=n)}function Ng(n){if(n.tag===22){if(Pt(bn,bn.current),Pt(Bi,n),ca===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(ca=n)}}else hs()}function hs(){Pt(bn,bn.current),Pt(Bi,Bi.current)}function Na(n){Yt(Bi),ca===n&&(ca=null),Yt(bn)}var bn=_t(0);function iu(n){for(var a=n;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var c1=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(r,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(r){return r()})}},u1=o.unstable_scheduleCallback,f1=o.unstable_NormalPriority,En={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yh(){return{controller:new c1,data:new Map,refCount:0}}function wl(n){n.refCount--,n.refCount===0&&u1(f1,function(){n.controller.abort()})}var Rl=null,Mh=0,no=0,io=null;function h1(n,a){if(Rl===null){var r=Rl=[];Mh=0,no=Rd(),io={status:"pending",value:void 0,then:function(c){r.push(c)}}}return Mh++,a.then(Pg,Pg),a}function Pg(){if(--Mh===0&&Rl!==null){io!==null&&(io.status="fulfilled");var n=Rl;Rl=null,no=0,io=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function d1(n,a){var r=[],c={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var d=0;d<r.length;d++)(0,r[d])(a)},function(d){for(c.status="rejected",c.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),c}var Og=w.S;w.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&h1(n,a),Og!==null&&Og(n,a)};var rr=_t(null);function bh(){var n=rr.current;return n!==null?n:ke.pooledCache}function au(n,a){a===null?Pt(rr,rr.current):Pt(rr,a.pool)}function Fg(){var n=bh();return n===null?null:{parent:En._currentValue,pool:n}}var ds=0,ge=null,ze=null,mn=null,su=!1,ao=!1,or=!1,ru=0,Cl=0,so=null,p1=0;function un(){throw Error(i(321))}function Eh(n,a){if(a===null)return!1;for(var r=0;r<a.length&&r<n.length;r++)if(!xi(n[r],a[r]))return!1;return!0}function Th(n,a,r,c,d,g){return ds=g,ge=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,w.H=n===null||n.memoizedState===null?lr:ps,or=!1,g=r(c,d),or=!1,ao&&(g=Ig(a,r,c,d)),zg(n),g}function zg(n){w.H=ua;var a=ze!==null&&ze.next!==null;if(ds=0,mn=ze=ge=null,su=!1,Cl=0,so=null,a)throw Error(i(300));n===null||Rn||(n=n.dependencies,n!==null&&mu(n)&&(Rn=!0))}function Ig(n,a,r,c){ge=n;var d=0;do{if(ao&&(so=null),Cl=0,ao=!1,25<=d)throw Error(i(301));if(d+=1,mn=ze=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}w.H=cr,g=a(r,c)}while(ao);return g}function m1(){var n=w.H,a=n.useState()[0];return a=typeof a.then=="function"?Dl(a):a,n=n.useState()[0],(ze!==null?ze.memoizedState:null)!==n&&(ge.flags|=1024),a}function Ah(){var n=ru!==0;return ru=0,n}function wh(n,a,r){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~r}function Rh(n){if(su){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}su=!1}ds=0,mn=ze=ge=null,ao=!1,Cl=ru=0,so=null}function oi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ge.memoizedState=mn=n:mn=mn.next=n,mn}function gn(){if(ze===null){var n=ge.alternate;n=n!==null?n.memoizedState:null}else n=ze.next;var a=mn===null?ge.memoizedState:mn.next;if(a!==null)mn=a,ze=n;else{if(n===null)throw ge.alternate===null?Error(i(467)):Error(i(310));ze=n,n={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},mn===null?ge.memoizedState=mn=n:mn=mn.next=n}return mn}var ou;ou=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Dl(n){var a=Cl;return Cl+=1,so===null&&(so=[]),n=wg(so,n,a),a=ge,(mn===null?a.memoizedState:mn.next)===null&&(a=a.alternate,w.H=a===null||a.memoizedState===null?lr:ps),n}function lu(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Dl(n);if(n.$$typeof===x)return kn(n)}throw Error(i(438,String(n)))}function Ch(n){var a=null,r=ge.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var c=ge.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=ou(),ge.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(n),c=0;c<n;c++)r[c]=C;return a.index++,r}function Pa(n,a){return typeof a=="function"?a(n):a}function cu(n){var a=gn();return Dh(a,ze,n)}function Dh(n,a,r){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=r;var d=n.baseQueue,g=c.pending;if(g!==null){if(d!==null){var A=d.next;d.next=g.next,g.next=A}a.baseQueue=d=g,c.pending=null}if(g=n.baseState,d===null)n.memoizedState=g;else{a=d.next;var P=A=null,B=null,K=a,mt=!1;do{var St=K.lane&-536870913;if(St!==K.lane?(Te&St)===St:(ds&St)===St){var ot=K.revertLane;if(ot===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),St===no&&(mt=!0);else if((ds&ot)===ot){K=K.next,ot===no&&(mt=!0);continue}else St={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(P=B=St,A=g):B=B.next=St,ge.lanes|=ot,bs|=ot;St=K.action,or&&r(g,St),g=K.hasEagerState?K.eagerState:r(g,St)}else ot={lane:St,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(P=B=ot,A=g):B=B.next=ot,ge.lanes|=St,bs|=St;K=K.next}while(K!==null&&K!==a);if(B===null?A=g:B.next=P,!xi(g,n.memoizedState)&&(Rn=!0,mt&&(r=io,r!==null)))throw r;n.memoizedState=g,n.baseState=A,n.baseQueue=B,c.lastRenderedState=g}return d===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Uh(n){var a=gn(),r=a.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var c=r.dispatch,d=r.pending,g=a.memoizedState;if(d!==null){r.pending=null;var A=d=d.next;do g=n(g,A.action),A=A.next;while(A!==d);xi(g,a.memoizedState)||(Rn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),r.lastRenderedState=g}return[g,c]}function Bg(n,a,r){var c=ge,d=gn(),g=De;if(g){if(r===void 0)throw Error(i(407));r=r()}else r=a();var A=!xi((ze||d).memoizedState,r);if(A&&(d.memoizedState=r,Rn=!0),d=d.queue,Ph(Vg.bind(null,c,d,n),[n]),d.getSnapshot!==a||A||mn!==null&&mn.memoizedState.tag&1){if(c.flags|=2048,ro(9,Hg.bind(null,c,d,r,a),{destroy:void 0},null),ke===null)throw Error(i(349));g||(ds&60)!==0||Gg(c,a,r)}return r}function Gg(n,a,r){n.flags|=16384,n={getSnapshot:a,value:r},a=ge.updateQueue,a===null?(a=ou(),ge.updateQueue=a,a.stores=[n]):(r=a.stores,r===null?a.stores=[n]:r.push(n))}function Hg(n,a,r,c){a.value=r,a.getSnapshot=c,kg(a)&&Xg(n)}function Vg(n,a,r){return r(function(){kg(a)&&Xg(n)})}function kg(n){var a=n.getSnapshot;n=n.value;try{var r=a();return!xi(n,r)}catch{return!0}}function Xg(n){var a=us(n,2);a!==null&&ni(a,n,2)}function Lh(n){var a=oi();if(typeof n=="function"){var r=n;if(n=r(),or){zt(!0);try{r()}finally{zt(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},a}function Wg(n,a,r,c){return n.baseState=r,Dh(n,ze,typeof c=="function"?c:Pa)}function g1(n,a,r,c,d){if(hu(n))throw Error(i(485));if(n=a.action,n!==null){var g={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(A){g.listeners.push(A)}};w.T!==null?r(!0):g.isTransition=!1,c(g),r=a.pending,r===null?(g.next=a.pending=g,qg(a,g)):(g.next=r.next,a.pending=r.next=g)}}function qg(n,a){var r=a.action,c=a.payload,d=n.state;if(a.isTransition){var g=w.T,A={};w.T=A;try{var P=r(d,c),B=w.S;B!==null&&B(A,P),Yg(n,a,P)}catch(K){Nh(n,a,K)}finally{w.T=g}}else try{g=r(d,c),Yg(n,a,g)}catch(K){Nh(n,a,K)}}function Yg(n,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(c){jg(n,a,c)},function(c){return Nh(n,a,c)}):jg(n,a,r)}function jg(n,a,r){a.status="fulfilled",a.value=r,Zg(a),n.state=r,a=n.pending,a!==null&&(r=a.next,r===a?n.pending=null:(r=r.next,a.next=r,qg(n,r)))}function Nh(n,a,r){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=r,Zg(a),a=a.next;while(a!==c)}n.action=null}function Zg(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Kg(n,a){return a}function Qg(n,a){if(De){var r=ke.formState;if(r!==null){t:{var c=ge;if(De){if(On){e:{for(var d=On,g=la;d.nodeType!==8;){if(!g){d=null;break e}if(d=aa(d.nextSibling),d===null){d=null;break e}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){On=aa(d.nextSibling),c=d.data==="F!";break t}}ar(c)}c=!1}c&&(a=r[0])}}return r=oi(),r.memoizedState=r.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kg,lastRenderedState:a},r.queue=c,r=m_.bind(null,ge,c),c.dispatch=r,c=Lh(!1),g=Bh.bind(null,ge,!1,c.queue),c=oi(),d={state:a,dispatch:null,action:n,pending:null},c.queue=d,r=g1.bind(null,ge,d,g,r),d.dispatch=r,c.memoizedState=n,[a,r,!1]}function Jg(n){var a=gn();return $g(a,ze,n)}function $g(n,a,r){a=Dh(n,a,Kg)[0],n=cu(Pa)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Dl(a):a;var c=gn(),d=c.queue,g=d.dispatch;return r!==c.memoizedState&&(ge.flags|=2048,ro(9,_1.bind(null,d,r),{destroy:void 0},null)),[a,g,n]}function _1(n,a){n.action=a}function t_(n){var a=gn(),r=ze;if(r!==null)return $g(a,r,n);gn(),a=a.memoizedState,r=gn();var c=r.queue.dispatch;return r.memoizedState=n,[a,c,!1]}function ro(n,a,r,c){return n={tag:n,create:a,inst:r,deps:c,next:null},a=ge.updateQueue,a===null&&(a=ou(),ge.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=n.next=n:(c=r.next,r.next=n,n.next=c,a.lastEffect=n),n}function e_(){return gn().memoizedState}function uu(n,a,r,c){var d=oi();ge.flags|=n,d.memoizedState=ro(1|a,r,{destroy:void 0},c===void 0?null:c)}function fu(n,a,r,c){var d=gn();c=c===void 0?null:c;var g=d.memoizedState.inst;ze!==null&&c!==null&&Eh(c,ze.memoizedState.deps)?d.memoizedState=ro(a,r,g,c):(ge.flags|=n,d.memoizedState=ro(1|a,r,g,c))}function n_(n,a){uu(8390656,8,n,a)}function Ph(n,a){fu(2048,8,n,a)}function i_(n,a){return fu(4,2,n,a)}function a_(n,a){return fu(4,4,n,a)}function s_(n,a){if(typeof a=="function"){n=n();var r=a(n);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function r_(n,a,r){r=r!=null?r.concat([n]):null,fu(4,4,s_.bind(null,a,n),r)}function Oh(){}function o_(n,a){var r=gn();a=a===void 0?null:a;var c=r.memoizedState;return a!==null&&Eh(a,c[1])?c[0]:(r.memoizedState=[n,a],n)}function l_(n,a){var r=gn();a=a===void 0?null:a;var c=r.memoizedState;if(a!==null&&Eh(a,c[1]))return c[0];if(c=n(),or){zt(!0);try{n()}finally{zt(!1)}}return r.memoizedState=[c,a],c}function Fh(n,a,r){return r===void 0||(ds&1073741824)!==0?n.memoizedState=a:(n.memoizedState=r,n=uv(),ge.lanes|=n,bs|=n,r)}function c_(n,a,r,c){return xi(r,a)?r:eo.current!==null?(n=Fh(n,r,c),xi(n,a)||(Rn=!0),n):(ds&42)===0?(Rn=!0,n.memoizedState=r):(n=uv(),ge.lanes|=n,bs|=n,a)}function u_(n,a,r,c,d){var g=vt.p;vt.p=g!==0&&8>g?g:8;var A=w.T,P={};w.T=P,Bh(n,!1,a,r);try{var B=d(),K=w.S;if(K!==null&&K(P,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var mt=d1(B,c);Ul(n,a,mt,bi(n))}else Ul(n,a,c,bi(n))}catch(St){Ul(n,a,{then:function(){},status:"rejected",reason:St},bi())}finally{vt.p=g,w.T=A}}function v1(){}function zh(n,a,r,c){if(n.tag!==5)throw Error(i(476));var d=f_(n).queue;u_(n,d,a,Ot,r===null?v1:function(){return h_(n),r(c)})}function f_(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:Ot,baseState:Ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:Ot},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:r},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function h_(n){var a=f_(n).next.queue;Ul(n,a,{},bi())}function Ih(){return kn(Ql)}function d_(){return gn().memoizedState}function p_(){return gn().memoizedState}function x1(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var r=bi();n=_s(r);var c=vs(a,n,r);c!==null&&(ni(c,a,r),Pl(c,a,r)),a={cache:yh()},n.payload=a;return}a=a.return}}function S1(n,a,r){var c=bi();r={lane:c,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},hu(n)?g_(a,r):(r=ph(n,a,r,c),r!==null&&(ni(r,n,c),__(r,a,c)))}function m_(n,a,r){var c=bi();Ul(n,a,r,c)}function Ul(n,a,r,c){var d={lane:c,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(hu(n))g_(a,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var A=a.lastRenderedState,P=g(A,r);if(d.hasEagerState=!0,d.eagerState=P,xi(P,A))return Zc(n,a,d,0),ke===null&&jc(),!1}catch{}finally{}if(r=ph(n,a,d,c),r!==null)return ni(r,n,c),__(r,a,c),!0}return!1}function Bh(n,a,r,c){if(c={lane:2,revertLane:Rd(),action:c,hasEagerState:!1,eagerState:null,next:null},hu(n)){if(a)throw Error(i(479))}else a=ph(n,r,c,2),a!==null&&ni(a,n,2)}function hu(n){var a=n.alternate;return n===ge||a!==null&&a===ge}function g_(n,a){ao=su=!0;var r=n.pending;r===null?a.next=a:(a.next=r.next,r.next=a),n.pending=a}function __(n,a,r){if((r&4194176)!==0){var c=a.lanes;c&=n.pendingLanes,r|=c,a.lanes=r,Bc(n,r)}}var ua={readContext:kn,use:lu,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un};ua.useCacheRefresh=un,ua.useMemoCache=un,ua.useHostTransitionStatus=un,ua.useFormState=un,ua.useActionState=un,ua.useOptimistic=un;var lr={readContext:kn,use:lu,useCallback:function(n,a){return oi().memoizedState=[n,a===void 0?null:a],n},useContext:kn,useEffect:n_,useImperativeHandle:function(n,a,r){r=r!=null?r.concat([n]):null,uu(4194308,4,s_.bind(null,a,n),r)},useLayoutEffect:function(n,a){return uu(4194308,4,n,a)},useInsertionEffect:function(n,a){uu(4,2,n,a)},useMemo:function(n,a){var r=oi();a=a===void 0?null:a;var c=n();if(or){zt(!0);try{n()}finally{zt(!1)}}return r.memoizedState=[c,a],c},useReducer:function(n,a,r){var c=oi();if(r!==void 0){var d=r(a);if(or){zt(!0);try{r(a)}finally{zt(!1)}}}else d=a;return c.memoizedState=c.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},c.queue=n,n=n.dispatch=S1.bind(null,ge,n),[c.memoizedState,n]},useRef:function(n){var a=oi();return n={current:n},a.memoizedState=n},useState:function(n){n=Lh(n);var a=n.queue,r=m_.bind(null,ge,a);return a.dispatch=r,[n.memoizedState,r]},useDebugValue:Oh,useDeferredValue:function(n,a){var r=oi();return Fh(r,n,a)},useTransition:function(){var n=Lh(!1);return n=u_.bind(null,ge,n.queue,!0,!1),oi().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,r){var c=ge,d=oi();if(De){if(r===void 0)throw Error(i(407));r=r()}else{if(r=a(),ke===null)throw Error(i(349));(Te&60)!==0||Gg(c,a,r)}d.memoizedState=r;var g={value:r,getSnapshot:a};return d.queue=g,n_(Vg.bind(null,c,g,n),[n]),c.flags|=2048,ro(9,Hg.bind(null,c,g,r,a),{destroy:void 0},null),r},useId:function(){var n=oi(),a=ke.identifierPrefix;if(De){var r=La,c=Ua;r=(c&~(1<<32-Ut(c)-1)).toString(32)+r,a=":"+a+"R"+r,r=ru++,0<r&&(a+="H"+r.toString(32)),a+=":"}else r=p1++,a=":"+a+"r"+r.toString(32)+":";return n.memoizedState=a},useCacheRefresh:function(){return oi().memoizedState=x1.bind(null,ge)}};lr.useMemoCache=Ch,lr.useHostTransitionStatus=Ih,lr.useFormState=Qg,lr.useActionState=Qg,lr.useOptimistic=function(n){var a=oi();a.memoizedState=a.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Bh.bind(null,ge,!0,r),r.dispatch=a,[n,a]};var ps={readContext:kn,use:lu,useCallback:o_,useContext:kn,useEffect:Ph,useImperativeHandle:r_,useInsertionEffect:i_,useLayoutEffect:a_,useMemo:l_,useReducer:cu,useRef:e_,useState:function(){return cu(Pa)},useDebugValue:Oh,useDeferredValue:function(n,a){var r=gn();return c_(r,ze.memoizedState,n,a)},useTransition:function(){var n=cu(Pa)[0],a=gn().memoizedState;return[typeof n=="boolean"?n:Dl(n),a]},useSyncExternalStore:Bg,useId:d_};ps.useCacheRefresh=p_,ps.useMemoCache=Ch,ps.useHostTransitionStatus=Ih,ps.useFormState=Jg,ps.useActionState=Jg,ps.useOptimistic=function(n,a){var r=gn();return Wg(r,ze,n,a)};var cr={readContext:kn,use:lu,useCallback:o_,useContext:kn,useEffect:Ph,useImperativeHandle:r_,useInsertionEffect:i_,useLayoutEffect:a_,useMemo:l_,useReducer:Uh,useRef:e_,useState:function(){return Uh(Pa)},useDebugValue:Oh,useDeferredValue:function(n,a){var r=gn();return ze===null?Fh(r,n,a):c_(r,ze.memoizedState,n,a)},useTransition:function(){var n=Uh(Pa)[0],a=gn().memoizedState;return[typeof n=="boolean"?n:Dl(n),a]},useSyncExternalStore:Bg,useId:d_};cr.useCacheRefresh=p_,cr.useMemoCache=Ch,cr.useHostTransitionStatus=Ih,cr.useFormState=t_,cr.useActionState=t_,cr.useOptimistic=function(n,a){var r=gn();return ze!==null?Wg(r,ze,n,a):(r.baseState=n,[n,r.queue.dispatch])};function Gh(n,a,r,c){a=n.memoizedState,r=r(c,a),r=r==null?a:k({},a,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var Hh={isMounted:function(n){return(n=n._reactInternals)?it(n)===n:!1},enqueueSetState:function(n,a,r){n=n._reactInternals;var c=bi(),d=_s(c);d.payload=a,r!=null&&(d.callback=r),a=vs(n,d,c),a!==null&&(ni(a,n,c),Pl(a,n,c))},enqueueReplaceState:function(n,a,r){n=n._reactInternals;var c=bi(),d=_s(c);d.tag=1,d.payload=a,r!=null&&(d.callback=r),a=vs(n,d,c),a!==null&&(ni(a,n,c),Pl(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var r=bi(),c=_s(r);c.tag=2,a!=null&&(c.callback=a),a=vs(n,c,r),a!==null&&(ni(a,n,r),Pl(a,n,r))}};function v_(n,a,r,c,d,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):a.prototype&&a.prototype.isPureReactComponent?!vl(r,c)||!vl(d,g):!0}function x_(n,a,r,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,c),a.state!==n&&Hh.enqueueReplaceState(a,a.state,null)}function ur(n,a){var r=a;if("ref"in a){r={};for(var c in a)c!=="ref"&&(r[c]=a[c])}if(n=n.defaultProps){r===a&&(r=k({},r));for(var d in n)r[d]===void 0&&(r[d]=n[d])}return r}var du=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function S_(n){du(n)}function y_(n){console.error(n)}function M_(n){du(n)}function pu(n,a){try{var r=n.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function b_(n,a,r){try{var c=n.onCaughtError;c(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Vh(n,a,r){return r=_s(r),r.tag=3,r.payload={element:null},r.callback=function(){pu(n,a)},r}function E_(n){return n=_s(n),n.tag=3,n}function T_(n,a,r,c){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var g=c.value;n.payload=function(){return d(g)},n.callback=function(){b_(a,r,c)}}var A=r.stateNode;A!==null&&typeof A.componentDidCatch=="function"&&(n.callback=function(){b_(a,r,c),typeof d!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var P=c.stack;this.componentDidCatch(c.value,{componentStack:P!==null?P:""})})}function y1(n,a,r,c,d){if(r.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=r.alternate,a!==null&&Nl(a,r,d,!0),r=Bi.current,r!==null){switch(r.tag){case 13:return ca===null?bd():r.alternate===null&&rn===0&&(rn=3),r.flags&=-257,r.flags|=65536,r.lanes=d,c===vh?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([c]):a.add(c),Td(n,c,d)),!1;case 22:return r.flags|=65536,c===vh?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([c]):r.add(c)),Td(n,c,d)),!1}throw Error(i(435,r.tag))}return Td(n,c,d),bd(),!1}if(De)return a=Bi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,c!==_h&&(n=Error(i(422),{cause:c}),Ml(Fi(n,r)))):(c!==_h&&(a=Error(i(423),{cause:c}),Ml(Fi(a,r))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,c=Fi(c,r),d=Vh(n.stateNode,c,d),id(n,d),rn!==4&&(rn=2)),!1;var g=Error(i(520),{cause:c});if(g=Fi(g,r),Vl===null?Vl=[g]:Vl.push(g),rn!==4&&(rn=2),a===null)return!0;c=Fi(c,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,n=d&-d,r.lanes|=n,n=Vh(r.stateNode,c,n),id(r,n),!1;case 1:if(a=r.type,g=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Es===null||!Es.has(g))))return r.flags|=65536,d&=-d,r.lanes|=d,d=E_(d),T_(d,n,r,c),id(r,d),!1}r=r.return}while(r!==null);return!1}var A_=Error(i(461)),Rn=!1;function Fn(n,a,r,c){a.child=n===null?Ug(a,null,r,c):sr(a,n.child,r,c)}function w_(n,a,r,c,d){r=r.render;var g=a.ref;if("ref"in c){var A={};for(var P in c)P!=="ref"&&(A[P]=c[P])}else A=c;return hr(a),c=Th(n,a,r,A,g,d),P=Ah(),n!==null&&!Rn?(wh(n,a,d),Oa(n,a,d)):(De&&P&&mh(a),a.flags|=1,Fn(n,a,c,d),a.child)}function R_(n,a,r,c,d){if(n===null){var g=r.type;return typeof g=="function"&&!fd(g)&&g.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=g,C_(n,a,g,c,d)):(n=xu(r.type,null,c,a,a.mode,d),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!Qh(n,d)){var A=g.memoizedProps;if(r=r.compare,r=r!==null?r:vl,r(A,c)&&n.ref===a.ref)return Oa(n,a,d)}return a.flags|=1,n=Ms(g,c),n.ref=a.ref,n.return=a,a.child=n}function C_(n,a,r,c,d){if(n!==null){var g=n.memoizedProps;if(vl(g,c)&&n.ref===a.ref)if(Rn=!1,a.pendingProps=c=g,Qh(n,d))(n.flags&131072)!==0&&(Rn=!0);else return a.lanes=n.lanes,Oa(n,a,d)}return kh(n,a,r,c,d)}function D_(n,a,r){var c=a.pendingProps,d=c.children,g=(a.stateNode._pendingVisibility&2)!==0,A=n!==null?n.memoizedState:null;if(Ll(n,a),c.mode==="hidden"||g){if((a.flags&128)!==0){if(c=A!==null?A.baseLanes|r:r,n!==null){for(d=a.child=n.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;a.childLanes=g&~c}else a.childLanes=0,a.child=null;return U_(n,a,c,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&au(a,A!==null?A.cachePool:null),A!==null?Lg(a,A):xh(),Ng(a);else return a.lanes=a.childLanes=536870912,U_(n,a,A!==null?A.baseLanes|r:r,r)}else A!==null?(au(a,A.cachePool),Lg(a,A),hs(),a.memoizedState=null):(n!==null&&au(a,null),xh(),hs());return Fn(n,a,d,r),a.child}function U_(n,a,r,c){var d=bh();return d=d===null?null:{parent:En._currentValue,pool:d},a.memoizedState={baseLanes:r,cachePool:d},n!==null&&au(a,null),xh(),Ng(a),n!==null&&Nl(n,a,c,!0),null}function Ll(n,a){var r=a.ref;if(r===null)n!==null&&n.ref!==null&&(a.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(i(284));(n===null||n.ref!==r)&&(a.flags|=2097664)}}function kh(n,a,r,c,d){return hr(a),r=Th(n,a,r,c,void 0,d),c=Ah(),n!==null&&!Rn?(wh(n,a,d),Oa(n,a,d)):(De&&c&&mh(a),a.flags|=1,Fn(n,a,r,d),a.child)}function L_(n,a,r,c,d,g){return hr(a),a.updateQueue=null,r=Ig(a,c,r,d),zg(n),c=Ah(),n!==null&&!Rn?(wh(n,a,g),Oa(n,a,g)):(De&&c&&mh(a),a.flags|=1,Fn(n,a,r,g),a.child)}function N_(n,a,r,c,d){if(hr(a),a.stateNode===null){var g=Qr,A=r.contextType;typeof A=="object"&&A!==null&&(g=kn(A)),g=new r(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Hh,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},ed(a),A=r.contextType,g.context=typeof A=="object"&&A!==null?kn(A):Qr,g.state=a.memoizedState,A=r.getDerivedStateFromProps,typeof A=="function"&&(Gh(a,r,A,c),g.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(A=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),A!==g.state&&Hh.enqueueReplaceState(g,g.state,null),Fl(a,c,g,d),Ol(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){g=a.stateNode;var P=a.memoizedProps,B=ur(r,P);g.props=B;var K=g.context,mt=r.contextType;A=Qr,typeof mt=="object"&&mt!==null&&(A=kn(mt));var St=r.getDerivedStateFromProps;mt=typeof St=="function"||typeof g.getSnapshotBeforeUpdate=="function",P=a.pendingProps!==P,mt||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(P||K!==A)&&x_(a,g,c,A),gs=!1;var ot=a.memoizedState;g.state=ot,Fl(a,c,g,d),Ol(),K=a.memoizedState,P||ot!==K||gs?(typeof St=="function"&&(Gh(a,r,St,c),K=a.memoizedState),(B=gs||v_(a,r,B,c,ot,K,A))?(mt||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=K),g.props=c,g.state=K,g.context=A,c=B):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,nd(n,a),A=a.memoizedProps,mt=ur(r,A),g.props=mt,St=a.pendingProps,ot=g.context,K=r.contextType,B=Qr,typeof K=="object"&&K!==null&&(B=kn(K)),P=r.getDerivedStateFromProps,(K=typeof P=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A!==St||ot!==B)&&x_(a,g,c,B),gs=!1,ot=a.memoizedState,g.state=ot,Fl(a,c,g,d),Ol();var dt=a.memoizedState;A!==St||ot!==dt||gs||n!==null&&n.dependencies!==null&&mu(n.dependencies)?(typeof P=="function"&&(Gh(a,r,P,c),dt=a.memoizedState),(mt=gs||v_(a,r,mt,c,ot,dt,B)||n!==null&&n.dependencies!==null&&mu(n.dependencies))?(K||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,dt,B),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,dt,B)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||A===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=dt),g.props=c,g.state=dt,g.context=B,c=mt):(typeof g.componentDidUpdate!="function"||A===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),c=!1)}return g=c,Ll(n,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,r=c&&typeof r.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&c?(a.child=sr(a,n.child,null,d),a.child=sr(a,null,r,d)):Fn(n,a,r,d),a.memoizedState=g.state,n=a.child):n=Oa(n,a,d),n}function P_(n,a,r,c){return yl(),a.flags|=256,Fn(n,a,r,c),a.child}var Xh={dehydrated:null,treeContext:null,retryLane:0};function Wh(n){return{baseLanes:n,cachePool:Fg()}}function qh(n,a,r){return n=n!==null?n.childLanes&~r:0,a&&(n|=ki),n}function O_(n,a,r){var c=a.pendingProps,d=!1,g=(a.flags&128)!==0,A;if((A=g)||(A=n!==null&&n.memoizedState===null?!1:(bn.current&2)!==0),A&&(d=!0,a.flags&=-129),A=(a.flags&32)!==0,a.flags&=-33,n===null){if(De){if(d?fs(a):hs(),De){var P=On,B;if(B=P){t:{for(B=P,P=la;B.nodeType!==8;){if(!P){P=null;break t}if(B=aa(B.nextSibling),B===null){P=null;break t}}P=B}P!==null?(a.memoizedState={dehydrated:P,treeContext:nr!==null?{id:Ua,overflow:La}:null,retryLane:536870912},B=Vi(18,null,null,0),B.stateNode=P,B.return=a,a.child=B,ei=a,On=null,B=!0):B=!1}B||ar(a)}if(P=a.memoizedState,P!==null&&(P=P.dehydrated,P!==null))return P.data==="$!"?a.lanes=16:a.lanes=536870912,null;Na(a)}return P=c.children,c=c.fallback,d?(hs(),d=a.mode,P=jh({mode:"hidden",children:P},d),c=pr(c,d,r,null),P.return=a,c.return=a,P.sibling=c,a.child=P,d=a.child,d.memoizedState=Wh(r),d.childLanes=qh(n,A,r),a.memoizedState=Xh,c):(fs(a),Yh(a,P))}if(B=n.memoizedState,B!==null&&(P=B.dehydrated,P!==null)){if(g)a.flags&256?(fs(a),a.flags&=-257,a=Zh(n,a,r)):a.memoizedState!==null?(hs(),a.child=n.child,a.flags|=128,a=null):(hs(),d=c.fallback,P=a.mode,c=jh({mode:"visible",children:c.children},P),d=pr(d,P,r,null),d.flags|=2,c.return=a,d.return=a,c.sibling=d,a.child=c,sr(a,n.child,null,r),c=a.child,c.memoizedState=Wh(r),c.childLanes=qh(n,A,r),a.memoizedState=Xh,a=d);else if(fs(a),P.data==="$!"){if(A=P.nextSibling&&P.nextSibling.dataset,A)var K=A.dgst;A=K,c=Error(i(419)),c.stack="",c.digest=A,Ml({value:c,source:null,stack:null}),a=Zh(n,a,r)}else if(Rn||Nl(n,a,r,!1),A=(r&n.childLanes)!==0,Rn||A){if(A=ke,A!==null){if(c=r&-r,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(A.suspendedLanes|r))!==0?0:c,c!==0&&c!==B.retryLane)throw B.retryLane=c,us(n,c),ni(A,n,c),A_}P.data==="$?"||bd(),a=Zh(n,a,r)}else P.data==="$?"?(a.flags|=128,a.child=n.child,a=F1.bind(null,n),P._reactRetry=a,a=null):(n=B.treeContext,On=aa(P.nextSibling),ei=a,De=!0,na=null,la=!1,n!==null&&(zi[Ii++]=Ua,zi[Ii++]=La,zi[Ii++]=nr,Ua=n.id,La=n.overflow,nr=a),a=Yh(a,c.children),a.flags|=4096);return a}return d?(hs(),d=c.fallback,P=a.mode,B=n.child,K=B.sibling,c=Ms(B,{mode:"hidden",children:c.children}),c.subtreeFlags=B.subtreeFlags&31457280,K!==null?d=Ms(K,d):(d=pr(d,P,r,null),d.flags|=2),d.return=a,c.return=a,c.sibling=d,a.child=c,c=d,d=a.child,P=n.child.memoizedState,P===null?P=Wh(r):(B=P.cachePool,B!==null?(K=En._currentValue,B=B.parent!==K?{parent:K,pool:K}:B):B=Fg(),P={baseLanes:P.baseLanes|r,cachePool:B}),d.memoizedState=P,d.childLanes=qh(n,A,r),a.memoizedState=Xh,c):(fs(a),r=n.child,n=r.sibling,r=Ms(r,{mode:"visible",children:c.children}),r.return=a,r.sibling=null,n!==null&&(A=a.deletions,A===null?(a.deletions=[n],a.flags|=16):A.push(n)),a.child=r,a.memoizedState=null,r)}function Yh(n,a){return a=jh({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function jh(n,a){return ov(n,a,0,null)}function Zh(n,a,r){return sr(a,n.child,null,r),n=Yh(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function F_(n,a,r){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),$h(n.return,a,r)}function Kh(n,a,r,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:r,tailMode:d}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=r,g.tailMode=d)}function z_(n,a,r){var c=a.pendingProps,d=c.revealOrder,g=c.tail;if(Fn(n,a,c.children,r),c=bn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&F_(n,r,a);else if(n.tag===19)F_(n,r,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(Pt(bn,c),d){case"forwards":for(r=a.child,d=null;r!==null;)n=r.alternate,n!==null&&iu(n)===null&&(d=r),r=r.sibling;r=d,r===null?(d=a.child,a.child=null):(d=r.sibling,r.sibling=null),Kh(a,!1,d,r,g);break;case"backwards":for(r=null,d=a.child,a.child=null;d!==null;){if(n=d.alternate,n!==null&&iu(n)===null){a.child=d;break}n=d.sibling,d.sibling=r,r=d,d=n}Kh(a,!0,r,null,g);break;case"together":Kh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Oa(n,a,r){if(n!==null&&(a.dependencies=n.dependencies),bs|=a.lanes,(r&a.childLanes)===0)if(n!==null){if(Nl(n,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,r=Ms(n,n.pendingProps),a.child=r,r.return=a;n.sibling!==null;)n=n.sibling,r=r.sibling=Ms(n,n.pendingProps),r.return=a;r.sibling=null}return a.child}function Qh(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&mu(n)))}function M1(n,a,r){switch(a.tag){case 3:Re(a,a.stateNode.containerInfo),ms(a,En,n.memoizedState.cache),yl();break;case 27:case 5:We(a);break;case 4:Re(a,a.stateNode.containerInfo);break;case 10:ms(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(fs(a),a.flags|=128,null):(r&a.child.childLanes)!==0?O_(n,a,r):(fs(a),n=Oa(n,a,r),n!==null?n.sibling:null);fs(a);break;case 19:var d=(n.flags&128)!==0;if(c=(r&a.childLanes)!==0,c||(Nl(n,a,r,!1),c=(r&a.childLanes)!==0),d){if(c)return z_(n,a,r);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Pt(bn,bn.current),c)break;return null;case 22:case 23:return a.lanes=0,D_(n,a,r);case 24:ms(a,En,n.memoizedState.cache)}return Oa(n,a,r)}function I_(n,a,r){if(n!==null)if(n.memoizedProps!==a.pendingProps)Rn=!0;else{if(!Qh(n,r)&&(a.flags&128)===0)return Rn=!1,M1(n,a,r);Rn=(n.flags&131072)!==0}else Rn=!1,De&&(a.flags&1048576)!==0&&Mg(a,Jc,a.index);switch(a.lanes=0,a.tag){case 16:t:{n=a.pendingProps;var c=a.elementType,d=c._init;if(c=d(c._payload),a.type=c,typeof c=="function")fd(c)?(n=ur(c,n),a.tag=1,a=N_(null,a,c,n,r)):(a.tag=0,a=kh(null,a,c,n,r));else{if(c!=null){if(d=c.$$typeof,d===y){a.tag=11,a=w_(null,a,c,n,r);break t}else if(d===M){a.tag=14,a=R_(null,a,c,n,r);break t}}throw a=T(c)||c,Error(i(306,a,""))}}return a;case 0:return kh(n,a,a.type,a.pendingProps,r);case 1:return c=a.type,d=ur(c,a.pendingProps),N_(n,a,c,d,r);case 3:t:{if(Re(a,a.stateNode.containerInfo),n===null)throw Error(i(387));var g=a.pendingProps;d=a.memoizedState,c=d.element,nd(n,a),Fl(a,g,null,r);var A=a.memoizedState;if(g=A.cache,ms(a,En,g),g!==d.cache&&td(a,[En],r,!0),Ol(),g=A.element,d.isDehydrated)if(d={element:g,isDehydrated:!1,cache:A.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=P_(n,a,g,r);break t}else if(g!==c){c=Fi(Error(i(424)),a),Ml(c),a=P_(n,a,g,r);break t}else for(On=aa(a.stateNode.containerInfo.firstChild),ei=a,De=!0,na=null,la=!0,r=Ug(a,null,g,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(yl(),g===c){a=Oa(n,a,r);break t}Fn(n,a,g,r)}a=a.child}return a;case 26:return Ll(n,a),n===null?(r=Hv(a.type,null,a.pendingProps,null))?a.memoizedState=r:De||(r=a.type,n=a.pendingProps,c=Uu(ue.current).createElement(r),c[yn]=a,c[Pn]=n,zn(c,r,n),L(c),a.stateNode=c):a.memoizedState=Hv(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return We(a),n===null&&De&&(c=a.stateNode=Iv(a.type,a.pendingProps,ue.current),ei=a,la=!0,On=aa(c.firstChild)),c=a.pendingProps.children,n!==null||De?Fn(n,a,c,r):a.child=sr(a,null,c,r),Ll(n,a),a.child;case 5:return n===null&&De&&((d=c=On)&&(c=J1(c,a.type,a.pendingProps,la),c!==null?(a.stateNode=c,ei=a,On=aa(c.firstChild),la=!1,d=!0):d=!1),d||ar(a)),We(a),d=a.type,g=a.pendingProps,A=n!==null?n.memoizedProps:null,c=g.children,zd(d,g)?c=null:A!==null&&zd(d,A)&&(a.flags|=32),a.memoizedState!==null&&(d=Th(n,a,m1,null,null,r),Ql._currentValue=d),Ll(n,a),Fn(n,a,c,r),a.child;case 6:return n===null&&De&&((n=r=On)&&(r=$1(r,a.pendingProps,la),r!==null?(a.stateNode=r,ei=a,On=null,n=!0):n=!1),n||ar(a)),null;case 13:return O_(n,a,r);case 4:return Re(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=sr(a,null,c,r):Fn(n,a,c,r),a.child;case 11:return w_(n,a,a.type,a.pendingProps,r);case 7:return Fn(n,a,a.pendingProps,r),a.child;case 8:return Fn(n,a,a.pendingProps.children,r),a.child;case 12:return Fn(n,a,a.pendingProps.children,r),a.child;case 10:return c=a.pendingProps,ms(a,a.type,c.value),Fn(n,a,c.children,r),a.child;case 9:return d=a.type._context,c=a.pendingProps.children,hr(a),d=kn(d),c=c(d),a.flags|=1,Fn(n,a,c,r),a.child;case 14:return R_(n,a,a.type,a.pendingProps,r);case 15:return C_(n,a,a.type,a.pendingProps,r);case 19:return z_(n,a,r);case 22:return D_(n,a,r);case 24:return hr(a),c=kn(En),n===null?(d=bh(),d===null&&(d=ke,g=yh(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=r),d=g),a.memoizedState={parent:c,cache:d},ed(a),ms(a,En,d)):((n.lanes&r)!==0&&(nd(n,a),Fl(a,null,null,r),Ol()),d=n.memoizedState,g=a.memoizedState,d.parent!==c?(d={parent:c,cache:c},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),ms(a,En,c)):(c=g.cache,ms(a,En,c),c!==d.cache&&td(a,[En],r,!0))),Fn(n,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}var Jh=_t(null),fr=null,Fa=null;function ms(n,a,r){Pt(Jh,a._currentValue),a._currentValue=r}function za(n){n._currentValue=Jh.current,Yt(Jh)}function $h(n,a,r){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===r)break;n=n.return}}function td(n,a,r,c){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var g=d.dependencies;if(g!==null){var A=d.child;g=g.firstContext;t:for(;g!==null;){var P=g;g=d;for(var B=0;B<a.length;B++)if(P.context===a[B]){g.lanes|=r,P=g.alternate,P!==null&&(P.lanes|=r),$h(g.return,r,n),c||(A=null);break t}g=P.next}}else if(d.tag===18){if(A=d.return,A===null)throw Error(i(341));A.lanes|=r,g=A.alternate,g!==null&&(g.lanes|=r),$h(A,r,n),A=null}else A=d.child;if(A!==null)A.return=d;else for(A=d;A!==null;){if(A===n){A=null;break}if(d=A.sibling,d!==null){d.return=A.return,A=d;break}A=A.return}d=A}}function Nl(n,a,r,c){n=null;for(var d=a,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var A=d.alternate;if(A===null)throw Error(i(387));if(A=A.memoizedProps,A!==null){var P=d.type;xi(d.pendingProps.value,A.value)||(n!==null?n.push(P):n=[P])}}else if(d===be.current){if(A=d.alternate,A===null)throw Error(i(387));A.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(Ql):n=[Ql])}d=d.return}n!==null&&td(a,n,r,c),a.flags|=262144}function mu(n){for(n=n.firstContext;n!==null;){if(!xi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function hr(n){fr=n,Fa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function kn(n){return B_(fr,n)}function gu(n,a){return fr===null&&hr(n),B_(n,a)}function B_(n,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Fa===null){if(n===null)throw Error(i(308));Fa=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Fa=Fa.next=a;return r}var gs=!1;function ed(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nd(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function _s(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function vs(n,a,r){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(tn&2)!==0){var d=c.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a,a=Kc(n),Sg(n,null,r),a}return Zc(n,c,a,r),Kc(n)}function Pl(n,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194176)!==0)){var c=a.lanes;c&=n.pendingLanes,r|=c,a.lanes=r,Bc(n,r)}}function id(n,a){var r=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,r===c)){var d=null,g=null;if(r=r.firstBaseUpdate,r!==null){do{var A={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};g===null?d=g=A:g=g.next=A,r=r.next}while(r!==null);g===null?d=g=a:g=g.next=a}else d=g=a;r={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=a:n.next=a,r.lastBaseUpdate=a}var ad=!1;function Ol(){if(ad){var n=io;if(n!==null)throw n}}function Fl(n,a,r,c){ad=!1;var d=n.updateQueue;gs=!1;var g=d.firstBaseUpdate,A=d.lastBaseUpdate,P=d.shared.pending;if(P!==null){d.shared.pending=null;var B=P,K=B.next;B.next=null,A===null?g=K:A.next=K,A=B;var mt=n.alternate;mt!==null&&(mt=mt.updateQueue,P=mt.lastBaseUpdate,P!==A&&(P===null?mt.firstBaseUpdate=K:P.next=K,mt.lastBaseUpdate=B))}if(g!==null){var St=d.baseState;A=0,mt=K=B=null,P=g;do{var ot=P.lane&-536870913,dt=ot!==P.lane;if(dt?(Te&ot)===ot:(c&ot)===ot){ot!==0&&ot===no&&(ad=!0),mt!==null&&(mt=mt.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});t:{var Kt=n,ce=P;ot=a;var on=r;switch(ce.tag){case 1:if(Kt=ce.payload,typeof Kt=="function"){St=Kt.call(on,St,ot);break t}St=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=ce.payload,ot=typeof Kt=="function"?Kt.call(on,St,ot):Kt,ot==null)break t;St=k({},St,ot);break t;case 2:gs=!0}}ot=P.callback,ot!==null&&(n.flags|=64,dt&&(n.flags|=8192),dt=d.callbacks,dt===null?d.callbacks=[ot]:dt.push(ot))}else dt={lane:ot,tag:P.tag,payload:P.payload,callback:P.callback,next:null},mt===null?(K=mt=dt,B=St):mt=mt.next=dt,A|=ot;if(P=P.next,P===null){if(P=d.shared.pending,P===null)break;dt=P,P=dt.next,dt.next=null,d.lastBaseUpdate=dt,d.shared.pending=null}}while(!0);mt===null&&(B=St),d.baseState=B,d.firstBaseUpdate=K,d.lastBaseUpdate=mt,g===null&&(d.shared.lanes=0),bs|=A,n.lanes=A,n.memoizedState=St}}function G_(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function H_(n,a){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)G_(r[n],a)}function zl(n,a){try{var r=a.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var d=c.next;r=d;do{if((r.tag&n)===n){c=void 0;var g=r.create,A=r.inst;c=g(),A.destroy=c}r=r.next}while(r!==d)}}catch(P){Ge(a,a.return,P)}}function xs(n,a,r){try{var c=a.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var g=d.next;c=g;do{if((c.tag&n)===n){var A=c.inst,P=A.destroy;if(P!==void 0){A.destroy=void 0,d=a;var B=r;try{P()}catch(K){Ge(d,B,K)}}}c=c.next}while(c!==g)}}catch(K){Ge(a,a.return,K)}}function V_(n){var a=n.updateQueue;if(a!==null){var r=n.stateNode;try{H_(a,r)}catch(c){Ge(n,n.return,c)}}}function k_(n,a,r){r.props=ur(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(c){Ge(n,a,c)}}function dr(n,a){try{var r=n.ref;if(r!==null){var c=n.stateNode;switch(n.tag){case 26:case 27:case 5:var d=c;break;default:d=c}typeof r=="function"?n.refCleanup=r(d):r.current=d}}catch(g){Ge(n,a,g)}}function Si(n,a){var r=n.ref,c=n.refCleanup;if(r!==null)if(typeof c=="function")try{c()}catch(d){Ge(n,a,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){Ge(n,a,d)}else r.current=null}function X_(n){var a=n.type,r=n.memoizedProps,c=n.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&c.focus();break t;case"img":r.src?c.src=r.src:r.srcSet&&(c.srcset=r.srcSet)}}catch(d){Ge(n,n.return,d)}}function W_(n,a,r){try{var c=n.stateNode;Y1(c,n.type,r,a),c[Pn]=a}catch(d){Ge(n,n.return,d)}}function q_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function sd(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||q_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rd(n,a,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?r.nodeType===8?r.parentNode.insertBefore(n,a):r.insertBefore(n,a):(r.nodeType===8?(a=r.parentNode,a.insertBefore(n,r)):(a=r,a.appendChild(n)),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Du));else if(c!==4&&c!==27&&(n=n.child,n!==null))for(rd(n,a,r),n=n.sibling;n!==null;)rd(n,a,r),n=n.sibling}function _u(n,a,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?r.insertBefore(n,a):r.appendChild(n);else if(c!==4&&c!==27&&(n=n.child,n!==null))for(_u(n,a,r),n=n.sibling;n!==null;)_u(n,a,r),n=n.sibling}var Ia=!1,sn=!1,od=!1,Y_=typeof WeakSet=="function"?WeakSet:Set,Cn=null,j_=!1;function b1(n,a){if(n=n.containerInfo,Od=zu,n=fg(n),ch(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else t:{r=(r=n.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var A=0,P=-1,B=-1,K=0,mt=0,St=n,ot=null;e:for(;;){for(var dt;St!==r||d!==0&&St.nodeType!==3||(P=A+d),St!==g||c!==0&&St.nodeType!==3||(B=A+c),St.nodeType===3&&(A+=St.nodeValue.length),(dt=St.firstChild)!==null;)ot=St,St=dt;for(;;){if(St===n)break e;if(ot===r&&++K===d&&(P=A),ot===g&&++mt===c&&(B=A),(dt=St.nextSibling)!==null)break;St=ot,ot=St.parentNode}St=dt}r=P===-1||B===-1?null:{start:P,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fd={focusedElem:n,selectionRange:r},zu=!1,Cn=a;Cn!==null;)if(a=Cn,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Cn=n;else for(;Cn!==null;){switch(a=Cn,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,r=a,d=g.memoizedProps,g=g.memoizedState,c=r.stateNode;try{var Kt=ur(r.type,d,r.elementType===r.type);n=c.getSnapshotBeforeUpdate(Kt,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(ce){Ge(r,r.return,ce)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,r=n.nodeType,r===9)Gd(n);else if(r===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Gd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Cn=n;break}Cn=a.return}return Kt=j_,j_=!1,Kt}function Z_(n,a,r){var c=r.flags;switch(r.tag){case 0:case 11:case 15:Ga(n,r),c&4&&zl(5,r);break;case 1:if(Ga(n,r),c&4)if(n=r.stateNode,a===null)try{n.componentDidMount()}catch(P){Ge(r,r.return,P)}else{var d=ur(r.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(d,a,n.__reactInternalSnapshotBeforeUpdate)}catch(P){Ge(r,r.return,P)}}c&64&&V_(r),c&512&&dr(r,r.return);break;case 3:if(Ga(n,r),c&64&&(c=r.updateQueue,c!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{H_(c,n)}catch(P){Ge(r,r.return,P)}}break;case 26:Ga(n,r),c&512&&dr(r,r.return);break;case 27:case 5:Ga(n,r),a===null&&c&4&&X_(r),c&512&&dr(r,r.return);break;case 12:Ga(n,r);break;case 13:Ga(n,r),c&4&&J_(n,r);break;case 22:if(d=r.memoizedState!==null||Ia,!d){a=a!==null&&a.memoizedState!==null||sn;var g=Ia,A=sn;Ia=d,(sn=a)&&!A?Ss(n,r,(r.subtreeFlags&8772)!==0):Ga(n,r),Ia=g,sn=A}c&512&&(r.memoizedProps.mode==="manual"?dr(r,r.return):Si(r,r.return));break;default:Ga(n,r)}}function K_(n){var a=n.alternate;a!==null&&(n.alternate=null,K_(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&ul(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var _n=null,yi=!1;function Ba(n,a,r){for(r=r.child;r!==null;)Q_(n,a,r),r=r.sibling}function Q_(n,a,r){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Tt,r)}catch{}switch(r.tag){case 26:sn||Si(r,a),Ba(n,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:sn||Si(r,a);var c=_n,d=yi;for(_n=r.stateNode,Ba(n,a,r),r=r.stateNode,a=r.attributes;a.length;)r.removeAttributeNode(a[0]);ul(r),_n=c,yi=d;break;case 5:sn||Si(r,a);case 6:d=_n;var g=yi;if(_n=null,Ba(n,a,r),_n=d,yi=g,_n!==null)if(yi)try{n=_n,c=r.stateNode,n.nodeType===8?n.parentNode.removeChild(c):n.removeChild(c)}catch(A){Ge(r,a,A)}else try{_n.removeChild(r.stateNode)}catch(A){Ge(r,a,A)}break;case 18:_n!==null&&(yi?(a=_n,r=r.stateNode,a.nodeType===8?Bd(a.parentNode,r):a.nodeType===1&&Bd(a,r),ec(a)):Bd(_n,r.stateNode));break;case 4:c=_n,d=yi,_n=r.stateNode.containerInfo,yi=!0,Ba(n,a,r),_n=c,yi=d;break;case 0:case 11:case 14:case 15:sn||xs(2,r,a),sn||xs(4,r,a),Ba(n,a,r);break;case 1:sn||(Si(r,a),c=r.stateNode,typeof c.componentWillUnmount=="function"&&k_(r,a,c)),Ba(n,a,r);break;case 21:Ba(n,a,r);break;case 22:sn||Si(r,a),sn=(c=sn)||r.memoizedState!==null,Ba(n,a,r),sn=c;break;default:Ba(n,a,r)}}function J_(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ec(n)}catch(r){Ge(a,a.return,r)}}function E1(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Y_),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Y_),a;default:throw Error(i(435,n.tag))}}function ld(n,a){var r=E1(n);a.forEach(function(c){var d=z1.bind(null,n,c);r.has(c)||(r.add(c),c.then(d,d))})}function Gi(n,a){var r=a.deletions;if(r!==null)for(var c=0;c<r.length;c++){var d=r[c],g=n,A=a,P=A;t:for(;P!==null;){switch(P.tag){case 27:case 5:_n=P.stateNode,yi=!1;break t;case 3:_n=P.stateNode.containerInfo,yi=!0;break t;case 4:_n=P.stateNode.containerInfo,yi=!0;break t}P=P.return}if(_n===null)throw Error(i(160));Q_(g,A,d),_n=null,yi=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)$_(a,n),a=a.sibling}var ia=null;function $_(n,a){var r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Gi(a,n),Hi(n),c&4&&(xs(3,n,n.return),zl(3,n),xs(5,n,n.return));break;case 1:Gi(a,n),Hi(n),c&512&&(sn||r===null||Si(r,r.return)),c&64&&Ia&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?c:r.concat(c))));break;case 26:var d=ia;if(Gi(a,n),Hi(n),c&512&&(sn||r===null||Si(r,r.return)),c&4){var g=r!==null?r.memoizedState:null;if(c=n.memoizedState,r===null)if(c===null)if(n.stateNode===null){t:{c=n.type,r=n.memoizedProps,d=d.ownerDocument||d;e:switch(c){case"title":g=d.getElementsByTagName("title")[0],(!g||g[Qs]||g[yn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(c),d.head.insertBefore(g,d.querySelector("head > title"))),zn(g,c,r),g[yn]=n,L(g),c=g;break t;case"link":var A=Xv("link","href",d).get(c+(r.href||""));if(A){for(var P=0;P<A.length;P++)if(g=A[P],g.getAttribute("href")===(r.href==null?null:r.href)&&g.getAttribute("rel")===(r.rel==null?null:r.rel)&&g.getAttribute("title")===(r.title==null?null:r.title)&&g.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){A.splice(P,1);break e}}g=d.createElement(c),zn(g,c,r),d.head.appendChild(g);break;case"meta":if(A=Xv("meta","content",d).get(c+(r.content||""))){for(P=0;P<A.length;P++)if(g=A[P],g.getAttribute("content")===(r.content==null?null:""+r.content)&&g.getAttribute("name")===(r.name==null?null:r.name)&&g.getAttribute("property")===(r.property==null?null:r.property)&&g.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&g.getAttribute("charset")===(r.charSet==null?null:r.charSet)){A.splice(P,1);break e}}g=d.createElement(c),zn(g,c,r),d.head.appendChild(g);break;default:throw Error(i(468,c))}g[yn]=n,L(g),c=g}n.stateNode=c}else Wv(d,n.type,n.stateNode);else n.stateNode=kv(d,c,n.memoizedProps);else g!==c?(g===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):g.count--,c===null?Wv(d,n.type,n.stateNode):kv(d,c,n.memoizedProps)):c===null&&n.stateNode!==null&&W_(n,n.memoizedProps,r.memoizedProps)}break;case 27:if(c&4&&n.alternate===null){d=n.stateNode,g=n.memoizedProps;try{for(var B=d.firstChild;B;){var K=B.nextSibling,mt=B.nodeName;B[Qs]||mt==="HEAD"||mt==="BODY"||mt==="SCRIPT"||mt==="STYLE"||mt==="LINK"&&B.rel.toLowerCase()==="stylesheet"||d.removeChild(B),B=K}for(var St=n.type,ot=d.attributes;ot.length;)d.removeAttributeNode(ot[0]);zn(d,St,g),d[yn]=n,d[Pn]=g}catch(Kt){Ge(n,n.return,Kt)}}case 5:if(Gi(a,n),Hi(n),c&512&&(sn||r===null||Si(r,r.return)),n.flags&32){d=n.stateNode;try{ti(d,"")}catch(Kt){Ge(n,n.return,Kt)}}c&4&&n.stateNode!=null&&(d=n.memoizedProps,W_(n,d,r!==null?r.memoizedProps:d)),c&1024&&(od=!0);break;case 6:if(Gi(a,n),Hi(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,r=n.stateNode;try{r.nodeValue=c}catch(Kt){Ge(n,n.return,Kt)}}break;case 3:if(Pu=null,d=ia,ia=Lu(a.containerInfo),Gi(a,n),ia=d,Hi(n),c&4&&r!==null&&r.memoizedState.isDehydrated)try{ec(a.containerInfo)}catch(Kt){Ge(n,n.return,Kt)}od&&(od=!1,tv(n));break;case 4:c=ia,ia=Lu(n.stateNode.containerInfo),Gi(a,n),Hi(n),ia=c;break;case 12:Gi(a,n),Hi(n);break;case 13:Gi(a,n),Hi(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(_d=R()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,ld(n,c)));break;case 22:if(c&512&&(sn||r===null||Si(r,r.return)),B=n.memoizedState!==null,K=r!==null&&r.memoizedState!==null,mt=Ia,St=sn,Ia=mt||B,sn=St||K,Gi(a,n),sn=St,Ia=mt,Hi(n),a=n.stateNode,a._current=n,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,c&8192&&(a._visibility=B?a._visibility&-2:a._visibility|1,B&&(a=Ia||sn,r===null||K||a||oo(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))t:for(r=null,a=n;;){if(a.tag===5||a.tag===26||a.tag===27){if(r===null){K=r=a;try{if(d=K.stateNode,B)g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=K.stateNode,P=K.memoizedProps.style;var dt=P!=null&&P.hasOwnProperty("display")?P.display:null;A.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(Kt){Ge(K,K.return,Kt)}}}else if(a.tag===6){if(r===null){K=a;try{K.stateNode.nodeValue=B?"":K.memoizedProps}catch(Kt){Ge(K,K.return,Kt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break t;for(;a.sibling===null;){if(a.return===null||a.return===n)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(r=c.retryQueue,r!==null&&(c.retryQueue=null,ld(n,r))));break;case 19:Gi(a,n),Hi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,ld(n,c)));break;case 21:break;default:Gi(a,n),Hi(n)}}function Hi(n){var a=n.flags;if(a&2){try{if(n.tag!==27){t:{for(var r=n.return;r!==null;){if(q_(r)){var c=r;break t}r=r.return}throw Error(i(160))}switch(c.tag){case 27:var d=c.stateNode,g=sd(n);_u(n,g,d);break;case 5:var A=c.stateNode;c.flags&32&&(ti(A,""),c.flags&=-33);var P=sd(n);_u(n,P,A);break;case 3:case 4:var B=c.stateNode.containerInfo,K=sd(n);rd(n,K,B);break;default:throw Error(i(161))}}}catch(mt){Ge(n,n.return,mt)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function tv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;tv(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ga(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Z_(n,a.alternate,a),a=a.sibling}function oo(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:xs(4,a,a.return),oo(a);break;case 1:Si(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&k_(a,a.return,r),oo(a);break;case 26:case 27:case 5:Si(a,a.return),oo(a);break;case 22:Si(a,a.return),a.memoizedState===null&&oo(a);break;default:oo(a)}n=n.sibling}}function Ss(n,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,d=n,g=a,A=g.flags;switch(g.tag){case 0:case 11:case 15:Ss(d,g,r),zl(4,g);break;case 1:if(Ss(d,g,r),c=g,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(K){Ge(c,c.return,K)}if(c=g,d=c.updateQueue,d!==null){var P=c.stateNode;try{var B=d.shared.hiddenCallbacks;if(B!==null)for(d.shared.hiddenCallbacks=null,d=0;d<B.length;d++)G_(B[d],P)}catch(K){Ge(c,c.return,K)}}r&&A&64&&V_(g),dr(g,g.return);break;case 26:case 27:case 5:Ss(d,g,r),r&&c===null&&A&4&&X_(g),dr(g,g.return);break;case 12:Ss(d,g,r);break;case 13:Ss(d,g,r),r&&A&4&&J_(d,g);break;case 22:g.memoizedState===null&&Ss(d,g,r),dr(g,g.return);break;default:Ss(d,g,r)}a=a.sibling}}function cd(n,a){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&wl(r))}function ud(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&wl(n))}function ys(n,a,r,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ev(n,a,r,c),a=a.sibling}function ev(n,a,r,c){var d=a.flags;switch(a.tag){case 0:case 11:case 15:ys(n,a,r,c),d&2048&&zl(9,a);break;case 3:ys(n,a,r,c),d&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&wl(n)));break;case 12:if(d&2048){ys(n,a,r,c),n=a.stateNode;try{var g=a.memoizedProps,A=g.id,P=g.onPostCommit;typeof P=="function"&&P(A,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(B){Ge(a,a.return,B)}}else ys(n,a,r,c);break;case 23:break;case 22:g=a.stateNode,a.memoizedState!==null?g._visibility&4?ys(n,a,r,c):Il(n,a):g._visibility&4?ys(n,a,r,c):(g._visibility|=4,lo(n,a,r,c,(a.subtreeFlags&10256)!==0)),d&2048&&cd(a.alternate,a);break;case 24:ys(n,a,r,c),d&2048&&ud(a.alternate,a);break;default:ys(n,a,r,c)}}function lo(n,a,r,c,d){for(d=d&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,A=a,P=r,B=c,K=A.flags;switch(A.tag){case 0:case 11:case 15:lo(g,A,P,B,d),zl(8,A);break;case 23:break;case 22:var mt=A.stateNode;A.memoizedState!==null?mt._visibility&4?lo(g,A,P,B,d):Il(g,A):(mt._visibility|=4,lo(g,A,P,B,d)),d&&K&2048&&cd(A.alternate,A);break;case 24:lo(g,A,P,B,d),d&&K&2048&&ud(A.alternate,A);break;default:lo(g,A,P,B,d)}a=a.sibling}}function Il(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=n,c=a,d=c.flags;switch(c.tag){case 22:Il(r,c),d&2048&&cd(c.alternate,c);break;case 24:Il(r,c),d&2048&&ud(c.alternate,c);break;default:Il(r,c)}a=a.sibling}}var Bl=8192;function co(n){if(n.subtreeFlags&Bl)for(n=n.child;n!==null;)nv(n),n=n.sibling}function nv(n){switch(n.tag){case 26:co(n),n.flags&Bl&&n.memoizedState!==null&&hb(ia,n.memoizedState,n.memoizedProps);break;case 5:co(n);break;case 3:case 4:var a=ia;ia=Lu(n.stateNode.containerInfo),co(n),ia=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Bl,Bl=16777216,co(n),Bl=a):co(n));break;default:co(n)}}function iv(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Gl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];Cn=c,sv(c,n)}iv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)av(n),n=n.sibling}function av(n){switch(n.tag){case 0:case 11:case 15:Gl(n),n.flags&2048&&xs(9,n,n.return);break;case 3:Gl(n);break;case 12:Gl(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&4&&(n.return===null||n.return.tag!==13)?(a._visibility&=-5,vu(n)):Gl(n);break;default:Gl(n)}}function vu(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];Cn=c,sv(c,n)}iv(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:xs(8,a,a.return),vu(a);break;case 22:r=a.stateNode,r._visibility&4&&(r._visibility&=-5,vu(a));break;default:vu(a)}n=n.sibling}}function sv(n,a){for(;Cn!==null;){var r=Cn;switch(r.tag){case 0:case 11:case 15:xs(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var c=r.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:wl(r.memoizedState.cache)}if(c=r.child,c!==null)c.return=r,Cn=c;else t:for(r=n;Cn!==null;){c=Cn;var d=c.sibling,g=c.return;if(K_(c),c===r){Cn=null;break t}if(d!==null){d.return=g,Cn=d;break t}Cn=g}}}function T1(n,a,r,c){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vi(n,a,r,c){return new T1(n,a,r,c)}function fd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ms(n,a){var r=n.alternate;return r===null?(r=Vi(n.tag,a,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=a,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&31457280,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,a=n.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function rv(n,a){n.flags&=31457282;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,a=r.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function xu(n,a,r,c,d,g){var A=0;if(c=n,typeof n=="function")fd(n)&&(A=1);else if(typeof n=="string")A=ub(n,r,Qt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case p:return pr(r.children,d,g,a);case h:A=8,d|=24;break;case m:return n=Vi(12,r,a,d|2),n.elementType=m,n.lanes=g,n;case b:return n=Vi(13,r,a,d),n.elementType=b,n.lanes=g,n;case S:return n=Vi(19,r,a,d),n.elementType=S,n.lanes=g,n;case D:return ov(r,d,g,a);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case v:case x:A=10;break t;case _:A=9;break t;case y:A=11;break t;case M:A=14;break t;case E:A=16,c=null;break t}A=29,r=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=Vi(A,r,a,d),a.elementType=n,a.type=c,a.lanes=g,a}function pr(n,a,r,c){return n=Vi(7,n,c,a),n.lanes=r,n}function ov(n,a,r,c){n=Vi(22,n,c,a),n.elementType=D,n.lanes=r;var d={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=d._current;if(g===null)throw Error(i(456));if((d._pendingVisibility&2)===0){var A=us(g,2);A!==null&&(d._pendingVisibility|=2,ni(A,g,2))}},attach:function(){var g=d._current;if(g===null)throw Error(i(456));if((d._pendingVisibility&2)!==0){var A=us(g,2);A!==null&&(d._pendingVisibility&=-3,ni(A,g,2))}}};return n.stateNode=d,n}function hd(n,a,r){return n=Vi(6,n,null,a),n.lanes=r,n}function dd(n,a,r){return a=Vi(4,n.children!==null?n.children:[],n.key,a),a.lanes=r,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}function Ha(n){n.flags|=4}function lv(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!qv(a)){if(a=Bi.current,a!==null&&((Te&4194176)===Te?ca!==null:(Te&62914560)!==Te&&(Te&536870912)===0||a!==ca))throw El=vh,Tg;n.flags|=8192}}function Su(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Ce():536870912,n.lanes|=a,fo|=a)}function Hl(n,a){if(!De)switch(n.tailMode){case"hidden":a=n.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $e(n){var a=n.alternate!==null&&n.alternate.child===n.child,r=0,c=0;if(a)for(var d=n.child;d!==null;)r|=d.lanes|d.childLanes,c|=d.subtreeFlags&31457280,c|=d.flags&31457280,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)r|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=r,a}function A1(n,a,r){var c=a.pendingProps;switch(gh(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(a),null;case 1:return $e(a),null;case 3:return r=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),za(En),ae(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Sl(a)?Ha(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,na!==null&&(yd(na),na=null))),$e(a),null;case 26:return r=a.memoizedState,n===null?(Ha(a),r!==null?($e(a),lv(a,r)):($e(a),a.flags&=-16777217)):r?r!==n.memoizedState?(Ha(a),$e(a),lv(a,r)):($e(a),a.flags&=-16777217):(n.memoizedProps!==c&&Ha(a),$e(a),a.flags&=-16777217),null;case 27:X(a),r=ue.current;var d=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Ha(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return $e(a),null}n=Qt.current,Sl(a)?bg(a):(n=Iv(d,c,r),a.stateNode=n,Ha(a))}return $e(a),null;case 5:if(X(a),r=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Ha(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return $e(a),null}if(n=Qt.current,Sl(a))bg(a);else{switch(d=Uu(ue.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?d.createElement(r,{is:c.is}):d.createElement(r)}}n[yn]=a,n[Pn]=c;t:for(d=a.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break t;for(;d.sibling===null;){if(d.return===null||d.return===a)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}a.stateNode=n;t:switch(zn(n,r,c),r){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Ha(a)}}return $e(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Ha(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=ue.current,Sl(a)){if(n=a.stateNode,r=a.memoizedProps,c=null,d=ei,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}n[yn]=a,n=!!(n.nodeValue===r||c!==null&&c.suppressHydrationWarning===!0||Lv(n.nodeValue,r)),n||ar(a)}else n=Uu(n).createTextNode(c),n[yn]=a,a.stateNode=n}return $e(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=Sl(a),c!==null&&c.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[yn]=a}else yl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;$e(a),d=!1}else na!==null&&(yd(na),na=null),d=!0;if(!d)return a.flags&256?(Na(a),a):(Na(a),null)}if(Na(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=c!==null,n=n!==null&&n.memoizedState!==null,r){c=a.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==d&&(c.flags|=2048)}return r!==n&&r&&(a.child.flags|=8192),Su(a,a.updateQueue),$e(a),null;case 4:return ae(),n===null&&Ld(a.stateNode.containerInfo),$e(a),null;case 10:return za(a.type),$e(a),null;case 19:if(Yt(bn),d=a.memoizedState,d===null)return $e(a),null;if(c=(a.flags&128)!==0,g=d.rendering,g===null)if(c)Hl(d,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=iu(n),g!==null){for(a.flags|=128,Hl(d,!1),n=g.updateQueue,a.updateQueue=n,Su(a,n),a.subtreeFlags=0,n=r,r=a.child;r!==null;)rv(r,n),r=r.sibling;return Pt(bn,bn.current&1|2),a.child}n=n.sibling}d.tail!==null&&R()>yu&&(a.flags|=128,c=!0,Hl(d,!1),a.lanes=4194304)}else{if(!c)if(n=iu(g),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,Su(a,n),Hl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!De)return $e(a),null}else 2*R()-d.renderingStartTime>yu&&r!==536870912&&(a.flags|=128,c=!0,Hl(d,!1),a.lanes=4194304);d.isBackwards?(g.sibling=a.child,a.child=g):(n=d.last,n!==null?n.sibling=g:a.child=g,d.last=g)}return d.tail!==null?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.renderingStartTime=R(),a.sibling=null,n=bn.current,Pt(bn,c?n&1|2:n&1),a):($e(a),null);case 22:case 23:return Na(a),Sh(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(r&536870912)!==0&&(a.flags&128)===0&&($e(a),a.subtreeFlags&6&&(a.flags|=8192)):$e(a),r=a.updateQueue,r!==null&&Su(a,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==r&&(a.flags|=2048),n!==null&&Yt(rr),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),za(En),$e(a),null;case 25:return null}throw Error(i(156,a.tag))}function w1(n,a){switch(gh(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return za(En),ae(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return X(a),null;case 13:if(Na(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));yl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return Yt(bn),null;case 4:return ae(),null;case 10:return za(a.type),null;case 22:case 23:return Na(a),Sh(),n!==null&&Yt(rr),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return za(En),null;case 25:return null;default:return null}}function cv(n,a){switch(gh(a),a.tag){case 3:za(En),ae();break;case 26:case 27:case 5:X(a);break;case 4:ae();break;case 13:Na(a);break;case 19:Yt(bn);break;case 10:za(a.type);break;case 22:case 23:Na(a),Sh(),n!==null&&Yt(rr);break;case 24:za(En)}}var R1={getCacheForType:function(n){var a=kn(En),r=a.data.get(n);return r===void 0&&(r=n(),a.data.set(n,r)),r}},C1=typeof WeakMap=="function"?WeakMap:Map,tn=0,ke=null,Se=null,Te=0,Xe=0,Mi=null,Va=!1,uo=!1,pd=!1,ka=0,rn=0,bs=0,mr=0,md=0,ki=0,fo=0,Vl=null,fa=null,gd=!1,_d=0,yu=1/0,Mu=null,Es=null,bu=!1,gr=null,kl=0,vd=0,xd=null,Xl=0,Sd=null;function bi(){if((tn&2)!==0&&Te!==0)return Te&-Te;if(w.T!==null){var n=no;return n!==0?n:Rd()}return ll()}function uv(){ki===0&&(ki=(Te&536870912)===0||De?Oe():536870912);var n=Bi.current;return n!==null&&(n.flags|=32),ki}function ni(n,a,r){(n===ke&&Xe===2||n.cancelPendingCommit!==null)&&(ho(n,0),Xa(n,Te,ki,!1)),Qn(n,r),((tn&2)===0||n!==ke)&&(n===ke&&((tn&2)===0&&(mr|=r),rn===4&&Xa(n,Te,ki,!1)),ha(n))}function fv(n,a,r){if((tn&6)!==0)throw Error(i(327));var c=!r&&(a&60)===0&&(a&n.expiredLanes)===0||Bt(n,a),d=c?L1(n,a):Ed(n,a,!0),g=c;do{if(d===0){uo&&!c&&Xa(n,a,0,!1);break}else if(d===6)Xa(n,a,0,!Va);else{if(r=n.current.alternate,g&&!D1(r)){d=Ed(n,a,!1),g=!1;continue}if(d===2){if(g=a,n.errorRecoveryDisabledLanes&g)var A=0;else A=n.pendingLanes&-536870913,A=A!==0?A:A&536870912?536870912:0;if(A!==0){a=A;t:{var P=n;d=Vl;var B=P.current.memoizedState.isDehydrated;if(B&&(ho(P,A).flags|=256),A=Ed(P,A,!1),A!==2){if(pd&&!B){P.errorRecoveryDisabledLanes|=g,mr|=g,d=4;break t}g=fa,fa=d,g!==null&&yd(g)}d=A}if(g=!1,d!==2)continue}}if(d===1){ho(n,0),Xa(n,a,0,!0);break}t:{switch(c=n,d){case 0:case 1:throw Error(i(345));case 4:if((a&4194176)===a){Xa(c,a,ki,!Va);break t}break;case 2:fa=null;break;case 3:case 5:break;default:throw Error(i(329))}if(c.finishedWork=r,c.finishedLanes=a,(a&62914560)===a&&(g=_d+300-R(),10<g)){if(Xa(c,a,ki,!Va),ct(c,0)!==0)break t;c.timeoutHandle=Ov(hv.bind(null,c,r,fa,Mu,gd,a,ki,mr,fo,Va,2,-0,0),g);break t}hv(c,r,fa,Mu,gd,a,ki,mr,fo,Va,0,-0,0)}}break}while(!0);ha(n)}function yd(n){fa===null?fa=n:fa.push.apply(fa,n)}function hv(n,a,r,c,d,g,A,P,B,K,mt,St,ot){var dt=a.subtreeFlags;if((dt&8192||(dt&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:fb},nv(a),a=db(),a!==null)){n.cancelPendingCommit=a(xv.bind(null,n,r,c,d,A,P,B,1,St,ot)),Xa(n,g,A,!K);return}xv(n,r,c,d,A,P,B,mt,St,ot)}function D1(n){for(var a=n;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var c=0;c<r.length;c++){var d=r[c],g=d.getSnapshot;d=d.value;try{if(!xi(g(),d))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Xa(n,a,r,c){a&=~md,a&=~mr,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var d=a;0<d;){var g=31-Ut(d),A=1<<g;c[g]=-1,d&=~A}r!==0&&Hr(n,r,a)}function Eu(){return(tn&6)===0?(Wl(0),!1):!0}function Md(){if(Se!==null){if(Xe===0)var n=Se.return;else n=Se,Fa=fr=null,Rh(n),to=null,Tl=0,n=Se;for(;n!==null;)cv(n.alternate,n),n=n.return;Se=null}}function ho(n,a){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;r!==-1&&(n.timeoutHandle=-1,Z1(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),Md(),ke=n,Se=r=Ms(n.current,null),Te=a,Xe=0,Mi=null,Va=!1,uo=Bt(n,a),pd=!1,fo=ki=md=mr=bs=rn=0,fa=Vl=null,gd=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var d=31-Ut(c),g=1<<d;a|=n[d],c&=~g}return ka=a,jc(),r}function dv(n,a){ge=null,w.H=ua,a===bl?(a=Rg(),Xe=3):a===Tg?(a=Rg(),Xe=4):Xe=a===A_?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Mi=a,Se===null&&(rn=1,pu(n,Fi(a,n.current)))}function pv(){var n=w.H;return w.H=ua,n===null?ua:n}function mv(){var n=w.A;return w.A=R1,n}function bd(){rn=4,Va||(Te&4194176)!==Te&&Bi.current!==null||(uo=!0),(bs&134217727)===0&&(mr&134217727)===0||ke===null||Xa(ke,Te,ki,!1)}function Ed(n,a,r){var c=tn;tn|=2;var d=pv(),g=mv();(ke!==n||Te!==a)&&(Mu=null,ho(n,a)),a=!1;var A=rn;t:do try{if(Xe!==0&&Se!==null){var P=Se,B=Mi;switch(Xe){case 8:Md(),A=6;break t;case 3:case 2:case 6:Bi.current===null&&(a=!0);var K=Xe;if(Xe=0,Mi=null,po(n,P,B,K),r&&uo){A=0;break t}break;default:K=Xe,Xe=0,Mi=null,po(n,P,B,K)}}U1(),A=rn;break}catch(mt){dv(n,mt)}while(!0);return a&&n.shellSuspendCounter++,Fa=fr=null,tn=c,w.H=d,w.A=g,Se===null&&(ke=null,Te=0,jc()),A}function U1(){for(;Se!==null;)gv(Se)}function L1(n,a){var r=tn;tn|=2;var c=pv(),d=mv();ke!==n||Te!==a?(Mu=null,yu=R()+500,ho(n,a)):uo=Bt(n,a);t:do try{if(Xe!==0&&Se!==null){a=Se;var g=Mi;e:switch(Xe){case 1:Xe=0,Mi=null,po(n,a,g,1);break;case 2:if(Ag(g)){Xe=0,Mi=null,_v(a);break}a=function(){Xe===2&&ke===n&&(Xe=7),ha(n)},g.then(a,a);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:Ag(g)?(Xe=0,Mi=null,_v(a)):(Xe=0,Mi=null,po(n,a,g,7));break;case 5:var A=null;switch(Se.tag){case 26:A=Se.memoizedState;case 5:case 27:var P=Se;if(!A||qv(A)){Xe=0,Mi=null;var B=P.sibling;if(B!==null)Se=B;else{var K=P.return;K!==null?(Se=K,Tu(K)):Se=null}break e}}Xe=0,Mi=null,po(n,a,g,5);break;case 6:Xe=0,Mi=null,po(n,a,g,6);break;case 8:Md(),rn=6;break t;default:throw Error(i(462))}}N1();break}catch(mt){dv(n,mt)}while(!0);return Fa=fr=null,w.H=c,w.A=d,tn=r,Se!==null?0:(ke=null,Te=0,jc(),rn)}function N1(){for(;Se!==null&&!jt();)gv(Se)}function gv(n){var a=I_(n.alternate,n,ka);n.memoizedProps=n.pendingProps,a===null?Tu(n):Se=a}function _v(n){var a=n,r=a.alternate;switch(a.tag){case 15:case 0:a=L_(r,a,a.pendingProps,a.type,void 0,Te);break;case 11:a=L_(r,a,a.pendingProps,a.type.render,a.ref,Te);break;case 5:Rh(a);default:cv(r,a),a=Se=rv(a,ka),a=I_(r,a,ka)}n.memoizedProps=n.pendingProps,a===null?Tu(n):Se=a}function po(n,a,r,c){Fa=fr=null,Rh(a),to=null,Tl=0;var d=a.return;try{if(y1(n,d,a,r,Te)){rn=1,pu(n,Fi(r,n.current)),Se=null;return}}catch(g){if(d!==null)throw Se=d,g;rn=1,pu(n,Fi(r,n.current)),Se=null;return}a.flags&32768?(De||c===1?n=!0:uo||(Te&536870912)!==0?n=!1:(Va=n=!0,(c===2||c===3||c===6)&&(c=Bi.current,c!==null&&c.tag===13&&(c.flags|=16384))),vv(a,n)):Tu(a)}function Tu(n){var a=n;do{if((a.flags&32768)!==0){vv(a,Va);return}n=a.return;var r=A1(a.alternate,a,ka);if(r!==null){Se=r;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=n}while(a!==null);rn===0&&(rn=5)}function vv(n,a){do{var r=w1(n.alternate,n);if(r!==null){r.flags&=32767,Se=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(n=n.sibling,n!==null)){Se=n;return}Se=n=r}while(n!==null);rn=6,Se=null}function xv(n,a,r,c,d,g,A,P,B,K){var mt=w.T,St=vt.p;try{vt.p=2,w.T=null,P1(n,a,r,c,St,d,g,A,P,B,K)}finally{w.T=mt,vt.p=St}}function P1(n,a,r,c,d,g,A,P){do mo();while(gr!==null);if((tn&6)!==0)throw Error(i(327));var B=n.finishedWork;if(c=n.finishedLanes,B===null)return null;if(n.finishedWork=null,n.finishedLanes=0,B===n.current)throw Error(i(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var K=B.lanes|B.childLanes;if(K|=dh,Ic(n,c,K,g,A,P),n===ke&&(Se=ke=null,Te=0),(B.subtreeFlags&10256)===0&&(B.flags&10256)===0||bu||(bu=!0,vd=K,xd=r,I1(ut,function(){return mo(),null})),r=(B.flags&15990)!==0,(B.subtreeFlags&15990)!==0||r?(r=w.T,w.T=null,g=vt.p,vt.p=2,A=tn,tn|=4,b1(n,B),$_(B,n),a1(Fd,n.containerInfo),zu=!!Od,Fd=Od=null,n.current=B,Z_(n,B.alternate,B),I(),tn=A,vt.p=g,w.T=r):n.current=B,bu?(bu=!1,gr=n,kl=c):Sv(n,K),K=n.pendingLanes,K===0&&(Es=null),Wt(B.stateNode),ha(n),a!==null)for(d=n.onRecoverableError,B=0;B<a.length;B++)K=a[B],d(K.value,{componentStack:K.stack});return(kl&3)!==0&&mo(),K=n.pendingLanes,(c&4194218)!==0&&(K&42)!==0?n===Sd?Xl++:(Xl=0,Sd=n):Xl=0,Wl(0),null}function Sv(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,wl(a)))}function mo(){if(gr!==null){var n=gr,a=vd;vd=0;var r=ol(kl),c=w.T,d=vt.p;try{if(vt.p=32>r?32:r,w.T=null,gr===null)var g=!1;else{r=xd,xd=null;var A=gr,P=kl;if(gr=null,kl=0,(tn&6)!==0)throw Error(i(331));var B=tn;if(tn|=4,av(A.current),ev(A,A.current,P,r),tn=B,Wl(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Tt,A)}catch{}g=!0}return g}finally{vt.p=d,w.T=c,Sv(n,a)}}return!1}function yv(n,a,r){a=Fi(r,a),a=Vh(n.stateNode,a,2),n=vs(n,a,2),n!==null&&(Qn(n,2),ha(n))}function Ge(n,a,r){if(n.tag===3)yv(n,n,r);else for(;a!==null;){if(a.tag===3){yv(a,n,r);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Es===null||!Es.has(c))){n=Fi(r,n),r=E_(2),c=vs(a,r,2),c!==null&&(T_(r,c,a,n),Qn(c,2),ha(c));break}}a=a.return}}function Td(n,a,r){var c=n.pingCache;if(c===null){c=n.pingCache=new C1;var d=new Set;c.set(a,d)}else d=c.get(a),d===void 0&&(d=new Set,c.set(a,d));d.has(r)||(pd=!0,d.add(r),n=O1.bind(null,n,a,r),a.then(n,n))}function O1(n,a,r){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,ke===n&&(Te&r)===r&&(rn===4||rn===3&&(Te&62914560)===Te&&300>R()-_d?(tn&2)===0&&ho(n,0):md|=r,fo===Te&&(fo=0)),ha(n)}function Mv(n,a){a===0&&(a=Ce()),n=us(n,a),n!==null&&(Qn(n,a),ha(n))}function F1(n){var a=n.memoizedState,r=0;a!==null&&(r=a.retryLane),Mv(n,r)}function z1(n,a){var r=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(r=d.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),Mv(n,r)}function I1(n,a){return Ee(n,a)}var Au=null,go=null,Ad=!1,wu=!1,wd=!1,_r=0;function ha(n){n!==go&&n.next===null&&(go===null?Au=go=n:go=go.next=n),wu=!0,Ad||(Ad=!0,G1(B1))}function Wl(n,a){if(!wd&&wu){wd=!0;do for(var r=!1,c=Au;c!==null;){if(n!==0){var d=c.pendingLanes;if(d===0)var g=0;else{var A=c.suspendedLanes,P=c.pingedLanes;g=(1<<31-Ut(42|n)+1)-1,g&=d&~(A&~P),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(r=!0,Tv(c,g))}else g=Te,g=ct(c,c===ke?g:0),(g&3)===0||Bt(c,g)||(r=!0,Tv(c,g));c=c.next}while(r);wd=!1}}function B1(){wu=Ad=!1;var n=0;_r!==0&&(j1()&&(n=_r),_r=0);for(var a=R(),r=null,c=Au;c!==null;){var d=c.next,g=bv(c,a);g===0?(c.next=null,r===null?Au=d:r.next=d,d===null&&(go=r)):(r=c,(n!==0||(g&3)!==0)&&(wu=!0)),c=d}Wl(n)}function bv(n,a){for(var r=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var A=31-Ut(g),P=1<<A,B=d[A];B===-1?((P&r)===0||(P&c)!==0)&&(d[A]=se(P,a)):B<=a&&(n.expiredLanes|=P),g&=~P}if(a=ke,r=Te,r=ct(n,n===a?r:0),c=n.callbackNode,r===0||n===a&&Xe===2||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Ne(c),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||Bt(n,r)){if(a=r&-r,a===n.callbackPriority)return a;switch(c!==null&&Ne(c),ol(r)){case 2:case 8:r=xt;break;case 32:r=ut;break;case 268435456:r=Rt;break;default:r=ut}return c=Ev.bind(null,n),r=Ee(r,c),n.callbackPriority=a,n.callbackNode=r,a}return c!==null&&c!==null&&Ne(c),n.callbackPriority=2,n.callbackNode=null,2}function Ev(n,a){var r=n.callbackNode;if(mo()&&n.callbackNode!==r)return null;var c=Te;return c=ct(n,n===ke?c:0),c===0?null:(fv(n,c,a),bv(n,R()),n.callbackNode!=null&&n.callbackNode===r?Ev.bind(null,n):null)}function Tv(n,a){if(mo())return null;fv(n,a,!0)}function G1(n){K1(function(){(tn&6)!==0?Ee(pt,n):n()})}function Rd(){return _r===0&&(_r=Oe()),_r}function Av(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Hc(""+n)}function wv(n,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,n.id&&r.setAttribute("form",n.id),a.parentNode.insertBefore(r,a),n=new FormData(n),r.parentNode.removeChild(r),n}function H1(n,a,r,c,d){if(a==="submit"&&r&&r.stateNode===d){var g=Av((d[Pn]||null).action),A=c.submitter;A&&(a=(a=A[Pn]||null)?Av(a.formAction):A.getAttribute("formAction"),a!==null&&(g=a,A=null));var P=new Wc("action","action",null,c,d);n.push({event:P,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(_r!==0){var B=A?wv(d,A):new FormData(d);zh(r,{pending:!0,data:B,method:d.method,action:g},null,B)}}else typeof g=="function"&&(P.preventDefault(),B=A?wv(d,A):new FormData(d),zh(r,{pending:!0,data:B,method:d.method,action:g},g,B))},currentTarget:d}]})}}for(var Cd=0;Cd<xg.length;Cd++){var Dd=xg[Cd],V1=Dd.toLowerCase(),k1=Dd[0].toUpperCase()+Dd.slice(1);ea(V1,"on"+k1)}ea(pg,"onAnimationEnd"),ea(mg,"onAnimationIteration"),ea(gg,"onAnimationStart"),ea("dblclick","onDoubleClick"),ea("focusin","onFocus"),ea("focusout","onBlur"),ea(r1,"onTransitionRun"),ea(o1,"onTransitionStart"),ea(l1,"onTransitionCancel"),ea(_g,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function Rv(n,a){a=(a&4)!==0;for(var r=0;r<n.length;r++){var c=n[r],d=c.event;c=c.listeners;t:{var g=void 0;if(a)for(var A=c.length-1;0<=A;A--){var P=c[A],B=P.instance,K=P.currentTarget;if(P=P.listener,B!==g&&d.isPropagationStopped())break t;g=P,d.currentTarget=K;try{g(d)}catch(mt){du(mt)}d.currentTarget=null,g=B}else for(A=0;A<c.length;A++){if(P=c[A],B=P.instance,K=P.currentTarget,P=P.listener,B!==g&&d.isPropagationStopped())break t;g=P,d.currentTarget=K;try{g(d)}catch(mt){du(mt)}d.currentTarget=null,g=B}}}}function ye(n,a){var r=a[Vr];r===void 0&&(r=a[Vr]=new Set);var c=n+"__bubble";r.has(c)||(Cv(a,n,2,!1),r.add(c))}function Ud(n,a,r){var c=0;a&&(c|=4),Cv(r,n,c,a)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function Ld(n){if(!n[Ru]){n[Ru]=!0,J.forEach(function(r){r!=="selectionchange"&&(X1.has(r)||Ud(r,!1,n),Ud(r,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Ru]||(a[Ru]=!0,Ud("selectionchange",!1,a))}}function Cv(n,a,r,c){switch(Jv(a)){case 2:var d=gb;break;case 8:d=_b;break;default:d=Wd}r=d.bind(null,a,r,n),d=void 0,!th||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(a,r,{capture:!0,passive:d}):n.addEventListener(a,r,!0):d!==void 0?n.addEventListener(a,r,{passive:d}):n.addEventListener(a,r,!1)}function Nd(n,a,r,c,d){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)t:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var P=c.stateNode.containerInfo;if(P===d||P.nodeType===8&&P.parentNode===d)break;if(A===4)for(A=c.return;A!==null;){var B=A.tag;if((B===3||B===4)&&(B=A.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;A=A.return}for(;P!==null;){if(A=Ca(P),A===null)return;if(B=A.tag,B===5||B===6||B===26||B===27){c=g=A;continue t}P=P.parentNode}}c=c.return}X0(function(){var K=g,mt=Jf(r),St=[];t:{var ot=vg.get(n);if(ot!==void 0){var dt=Wc,Kt=n;switch(n){case"keypress":if(kc(r)===0)break t;case"keydown":case"keyup":dt=zM;break;case"focusin":Kt="focus",dt=ah;break;case"focusout":Kt="blur",dt=ah;break;case"beforeblur":case"afterblur":dt=ah;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Y0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=TM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=GM;break;case pg:case mg:case gg:dt=RM;break;case _g:dt=VM;break;case"scroll":case"scrollend":dt=bM;break;case"wheel":dt=XM;break;case"copy":case"cut":case"paste":dt=DM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Z0;break;case"toggle":case"beforetoggle":dt=qM}var ce=(a&4)!==0,on=!ce&&(n==="scroll"||n==="scrollend"),$=ce?ot!==null?ot+"Capture":null:ot;ce=[];for(var j=K,rt;j!==null;){var gt=j;if(rt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||rt===null||$===null||(gt=fl(j,$),gt!=null&&ce.push(Yl(j,gt,rt))),on)break;j=j.return}0<ce.length&&(ot=new dt(ot,Kt,null,r,mt),St.push({event:ot,listeners:ce}))}}if((a&7)===0){t:{if(ot=n==="mouseover"||n==="pointerover",dt=n==="mouseout"||n==="pointerout",ot&&r!==Qf&&(Kt=r.relatedTarget||r.fromElement)&&(Ca(Kt)||Kt[Ji]))break t;if((dt||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,dt?(Kt=r.relatedTarget||r.toElement,dt=K,Kt=Kt?Ca(Kt):null,Kt!==null&&(on=it(Kt),ce=Kt.tag,Kt!==on||ce!==5&&ce!==27&&ce!==6)&&(Kt=null)):(dt=null,Kt=K),dt!==Kt)){if(ce=Y0,gt="onMouseLeave",$="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(ce=Z0,gt="onPointerLeave",$="onPointerEnter",j="pointer"),on=dt==null?ot:Js(dt),rt=Kt==null?ot:Js(Kt),ot=new ce(gt,j+"leave",dt,r,mt),ot.target=on,ot.relatedTarget=rt,gt=null,Ca(mt)===K&&(ce=new ce($,j+"enter",Kt,r,mt),ce.target=rt,ce.relatedTarget=on,gt=ce),on=gt,dt&&Kt)e:{for(ce=dt,$=Kt,j=0,rt=ce;rt;rt=_o(rt))j++;for(rt=0,gt=$;gt;gt=_o(gt))rt++;for(;0<j-rt;)ce=_o(ce),j--;for(;0<rt-j;)$=_o($),rt--;for(;j--;){if(ce===$||$!==null&&ce===$.alternate)break e;ce=_o(ce),$=_o($)}ce=null}else ce=null;dt!==null&&Dv(St,ot,dt,ce,!1),Kt!==null&&on!==null&&Dv(St,on,Kt,ce,!0)}}t:{if(ot=K?Js(K):window,dt=ot.nodeName&&ot.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ot.type==="file")var kt=ig;else if(eg(ot))if(ag)kt=n1;else{kt=t1;var ve=$M}else dt=ot.nodeName,!dt||dt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?K&&Xr(K.elementType)&&(kt=ig):kt=e1;if(kt&&(kt=kt(n,K))){ng(St,kt,r,mt);break t}ve&&ve(n,ot,K),n==="focusout"&&K&&ot.type==="number"&&K.memoizedProps.value!=null&&$i(ot,"number",ot.value)}switch(ve=K?Js(K):window,n){case"focusin":(eg(ve)||ve.contentEditable==="true")&&(jr=ve,uh=K,xl=null);break;case"focusout":xl=uh=jr=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,hg(St,r,mt);break;case"selectionchange":if(s1)break;case"keydown":case"keyup":hg(St,r,mt)}var $t;if(rh)t:{switch(n){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Yr?$0(n,r)&&(ee="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(ee="onCompositionStart");ee&&(K0&&r.locale!=="ko"&&(Yr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Yr&&($t=W0()):(cs=mt,eh="value"in cs?cs.value:cs.textContent,Yr=!0)),ve=Cu(K,ee),0<ve.length&&(ee=new j0(ee,n,null,r,mt),St.push({event:ee,listeners:ve}),$t?ee.data=$t:($t=tg(r),$t!==null&&(ee.data=$t)))),($t=jM?ZM(n,r):KM(n,r))&&(ee=Cu(K,"onBeforeInput"),0<ee.length&&(ve=new j0("onBeforeInput","beforeinput",null,r,mt),St.push({event:ve,listeners:ee}),ve.data=$t)),H1(St,n,K,r,mt)}Rv(St,a)})}function Yl(n,a,r){return{instance:n,listener:a,currentTarget:r}}function Cu(n,a){for(var r=a+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=fl(n,r),d!=null&&c.unshift(Yl(n,d,g)),d=fl(n,a),d!=null&&c.push(Yl(n,d,g))),n=n.return}return c}function _o(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Dv(n,a,r,c,d){for(var g=a._reactName,A=[];r!==null&&r!==c;){var P=r,B=P.alternate,K=P.stateNode;if(P=P.tag,B!==null&&B===c)break;P!==5&&P!==26&&P!==27||K===null||(B=K,d?(K=fl(r,g),K!=null&&A.unshift(Yl(r,K,B))):d||(K=fl(r,g),K!=null&&A.push(Yl(r,K,B)))),r=r.return}A.length!==0&&n.push({event:a,listeners:A})}var W1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function Uv(n){return(typeof n=="string"?n:""+n).replace(W1,`
`).replace(q1,"")}function Lv(n,a){return a=Uv(a),Uv(n)===a}function Du(){}function Ie(n,a,r,c,d,g){switch(r){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||ti(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&ti(n,""+c);break;case"className":le(n,"class",c);break;case"tabIndex":le(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":le(n,r,c);break;case"style":Da(n,c,g);break;case"data":if(a!=="object"){le(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||r!=="href")){n.removeAttribute(r);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=Hc(""+c),n.setAttribute(r,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(r==="formAction"?(a!=="input"&&Ie(n,a,"name",d.name,d,null),Ie(n,a,"formEncType",d.formEncType,d,null),Ie(n,a,"formMethod",d.formMethod,d,null),Ie(n,a,"formTarget",d.formTarget,d,null)):(Ie(n,a,"encType",d.encType,d,null),Ie(n,a,"method",d.method,d,null),Ie(n,a,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=Hc(""+c),n.setAttribute(r,c);break;case"onClick":c!=null&&(n.onclick=Du);break;case"onScroll":c!=null&&ye("scroll",n);break;case"onScrollEnd":c!=null&&ye("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(r=c.__html,r!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=r}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}r=Hc(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""+c):n.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""):n.removeAttribute(r);break;case"capture":case"download":c===!0?n.setAttribute(r,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,c):n.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(r,c):n.removeAttribute(r);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(r):n.setAttribute(r,c);break;case"popover":ye("beforetoggle",n),ye("toggle",n),ie(n,"popover",c);break;case"xlinkActuate":Gt(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Gt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Gt(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Gt(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Gt(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Gt(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Gt(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Gt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Gt(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":ie(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=yM.get(r)||r,ie(n,r,c))}}function Pd(n,a,r,c,d,g){switch(r){case"style":Da(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(r=c.__html,r!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=r}}break;case"children":typeof c=="string"?ti(n,c):(typeof c=="number"||typeof c=="bigint")&&ti(n,""+c);break;case"onScroll":c!=null&&ye("scroll",n);break;case"onScrollEnd":c!=null&&ye("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Du);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),a=r.slice(2,d?r.length-7:void 0),g=n[Pn]||null,g=g!=null?g[r]:null,typeof g=="function"&&n.removeEventListener(a,g,d),typeof c=="function")){typeof g!="function"&&g!==null&&(r in n?n[r]=null:n.hasAttribute(r)&&n.removeAttribute(r)),n.addEventListener(a,c,d);break t}r in n?n[r]=c:c===!0?n.setAttribute(r,""):ie(n,r,c)}}}function zn(n,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",n),ye("load",n);var c=!1,d=!1,g;for(g in r)if(r.hasOwnProperty(g)){var A=r[g];if(A!=null)switch(g){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ie(n,a,g,A,r,null)}}d&&Ie(n,a,"srcSet",r.srcSet,r,null),c&&Ie(n,a,"src",r.src,r,null);return;case"input":ye("invalid",n);var P=g=A=d=null,B=null,K=null;for(c in r)if(r.hasOwnProperty(c)){var mt=r[c];if(mt!=null)switch(c){case"name":d=mt;break;case"type":A=mt;break;case"checked":B=mt;break;case"defaultChecked":K=mt;break;case"value":g=mt;break;case"defaultValue":P=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(i(137,a));break;default:Ie(n,a,c,mt,r,null)}}_i(n,g,P,B,K,A,d,!1),Ae(n);return;case"select":ye("invalid",n),c=A=g=null;for(d in r)if(r.hasOwnProperty(d)&&(P=r[d],P!=null))switch(d){case"value":g=P;break;case"defaultValue":A=P;break;case"multiple":c=P;default:Ie(n,a,d,P,r,null)}a=g,r=A,n.multiple=!!c,a!=null?vi(n,!!c,a,!1):r!=null&&vi(n,!!c,r,!0);return;case"textarea":ye("invalid",n),g=d=c=null;for(A in r)if(r.hasOwnProperty(A)&&(P=r[A],P!=null))switch(A){case"value":c=P;break;case"defaultValue":d=P;break;case"children":g=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error(i(91));break;default:Ie(n,a,A,P,r,null)}dn(n,c,d,g),Ae(n);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(c=r[B],c!=null))switch(B){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Ie(n,a,B,c,r,null)}return;case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":ye("load",n);break;case"video":case"audio":for(c=0;c<ql.length;c++)ye(ql[c],n);break;case"image":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"embed":case"source":case"link":ye("error",n),ye("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in r)if(r.hasOwnProperty(K)&&(c=r[K],c!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ie(n,a,K,c,r,null)}return;default:if(Xr(a)){for(mt in r)r.hasOwnProperty(mt)&&(c=r[mt],c!==void 0&&Pd(n,a,mt,c,r,void 0));return}}for(P in r)r.hasOwnProperty(P)&&(c=r[P],c!=null&&Ie(n,a,P,c,r,null))}function Y1(n,a,r,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,A=null,P=null,B=null,K=null,mt=null;for(dt in r){var St=r[dt];if(r.hasOwnProperty(dt)&&St!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":B=St;default:c.hasOwnProperty(dt)||Ie(n,a,dt,null,c,St)}}for(var ot in c){var dt=c[ot];if(St=r[ot],c.hasOwnProperty(ot)&&(dt!=null||St!=null))switch(ot){case"type":g=dt;break;case"name":d=dt;break;case"checked":K=dt;break;case"defaultChecked":mt=dt;break;case"value":A=dt;break;case"defaultValue":P=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(i(137,a));break;default:dt!==St&&Ie(n,a,ot,dt,c,St)}}$n(n,A,P,B,K,mt,g,d);return;case"select":dt=A=P=ot=null;for(g in r)if(B=r[g],r.hasOwnProperty(g)&&B!=null)switch(g){case"value":break;case"multiple":dt=B;default:c.hasOwnProperty(g)||Ie(n,a,g,null,c,B)}for(d in c)if(g=c[d],B=r[d],c.hasOwnProperty(d)&&(g!=null||B!=null))switch(d){case"value":ot=g;break;case"defaultValue":P=g;break;case"multiple":A=g;default:g!==B&&Ie(n,a,d,g,c,B)}a=P,r=A,c=dt,ot!=null?vi(n,!!r,ot,!1):!!c!=!!r&&(a!=null?vi(n,!!r,a,!0):vi(n,!!r,r?[]:"",!1));return;case"textarea":dt=ot=null;for(P in r)if(d=r[P],r.hasOwnProperty(P)&&d!=null&&!c.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:Ie(n,a,P,null,c,d)}for(A in c)if(d=c[A],g=r[A],c.hasOwnProperty(A)&&(d!=null||g!=null))switch(A){case"value":ot=d;break;case"defaultValue":dt=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==g&&Ie(n,a,A,d,c,g)}Pe(n,ot,dt);return;case"option":for(var Kt in r)if(ot=r[Kt],r.hasOwnProperty(Kt)&&ot!=null&&!c.hasOwnProperty(Kt))switch(Kt){case"selected":n.selected=!1;break;default:Ie(n,a,Kt,null,c,ot)}for(B in c)if(ot=c[B],dt=r[B],c.hasOwnProperty(B)&&ot!==dt&&(ot!=null||dt!=null))switch(B){case"selected":n.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ie(n,a,B,ot,c,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in r)ot=r[ce],r.hasOwnProperty(ce)&&ot!=null&&!c.hasOwnProperty(ce)&&Ie(n,a,ce,null,c,ot);for(K in c)if(ot=c[K],dt=r[K],c.hasOwnProperty(K)&&ot!==dt&&(ot!=null||dt!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(i(137,a));break;default:Ie(n,a,K,ot,c,dt)}return;default:if(Xr(a)){for(var on in r)ot=r[on],r.hasOwnProperty(on)&&ot!==void 0&&!c.hasOwnProperty(on)&&Pd(n,a,on,void 0,c,ot);for(mt in c)ot=c[mt],dt=r[mt],!c.hasOwnProperty(mt)||ot===dt||ot===void 0&&dt===void 0||Pd(n,a,mt,ot,c,dt);return}}for(var $ in r)ot=r[$],r.hasOwnProperty($)&&ot!=null&&!c.hasOwnProperty($)&&Ie(n,a,$,null,c,ot);for(St in c)ot=c[St],dt=r[St],!c.hasOwnProperty(St)||ot===dt||ot==null&&dt==null||Ie(n,a,St,ot,c,dt)}var Od=null,Fd=null;function Uu(n){return n.nodeType===9?n:n.ownerDocument}function Nv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pv(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function zd(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Id=null;function j1(){var n=window.event;return n&&n.type==="popstate"?n===Id?!1:(Id=n,!0):(Id=null,!1)}var Ov=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(n){return Fv.resolve(null).then(n).catch(Q1)}:Ov;function Q1(n){setTimeout(function(){throw n})}function Bd(n,a){var r=a,c=0;do{var d=r.nextSibling;if(n.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(c===0){n.removeChild(d),ec(a);return}c--}else r!=="$"&&r!=="$?"&&r!=="$!"||c++;r=d}while(r);ec(a)}function Gd(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Gd(r),ul(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}n.removeChild(r)}}function J1(n,a,r,c){for(;n.nodeType===1;){var d=r;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Qs])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==d.rel||n.getAttribute("href")!==(d.href==null?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=aa(n.nextSibling),n===null)break}return null}function $1(n,a,r){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=aa(n.nextSibling),n===null))return null;return n}function aa(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}function zv(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return n;a--}else r==="/$"&&a++}n=n.previousSibling}return null}function Iv(n,a,r){switch(a=Uu(r),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}var Xi=new Map,Bv=new Set;function Lu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var Wa=vt.d;vt.d={f:tb,r:eb,D:nb,C:ib,L:ab,m:sb,X:ob,S:rb,M:lb};function tb(){var n=Wa.f(),a=Eu();return n||a}function eb(n){var a=os(n);a!==null&&a.tag===5&&a.type==="form"?h_(a):Wa.r(n)}var vo=typeof document>"u"?null:document;function Gv(n,a,r){var c=vo;if(c&&typeof a=="string"&&a){var d=oe(a);d='link[rel="'+n+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),Bv.has(d)||(Bv.add(d),n={rel:n,crossOrigin:r,href:a},c.querySelector(d)===null&&(a=c.createElement("link"),zn(a,"link",n),L(a),c.head.appendChild(a)))}}function nb(n){Wa.D(n),Gv("dns-prefetch",n,null)}function ib(n,a){Wa.C(n,a),Gv("preconnect",n,a)}function ab(n,a,r){Wa.L(n,a,r);var c=vo;if(c&&n&&a){var d='link[rel="preload"][as="'+oe(a)+'"]';a==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+oe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+oe(r.imageSizes)+'"]')):d+='[href="'+oe(n)+'"]';var g=d;switch(a){case"style":g=xo(n);break;case"script":g=So(n)}Xi.has(g)||(n=k({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:n,as:a},r),Xi.set(g,n),c.querySelector(d)!==null||a==="style"&&c.querySelector(jl(g))||a==="script"&&c.querySelector(Zl(g))||(a=c.createElement("link"),zn(a,"link",n),L(a),c.head.appendChild(a)))}}function sb(n,a){Wa.m(n,a);var r=vo;if(r&&n){var c=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+oe(c)+'"][href="'+oe(n)+'"]',g=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=So(n)}if(!Xi.has(g)&&(n=k({rel:"modulepreload",href:n},a),Xi.set(g,n),r.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Zl(g)))return}c=r.createElement("link"),zn(c,"link",n),L(c),r.head.appendChild(c)}}}function rb(n,a,r){Wa.S(n,a,r);var c=vo;if(c&&n){var d=ls(c).hoistableStyles,g=xo(n);a=a||"default";var A=d.get(g);if(!A){var P={loading:0,preload:null};if(A=c.querySelector(jl(g)))P.loading=5;else{n=k({rel:"stylesheet",href:n,"data-precedence":a},r),(r=Xi.get(g))&&Hd(n,r);var B=A=c.createElement("link");L(B),zn(B,"link",n),B._p=new Promise(function(K,mt){B.onload=K,B.onerror=mt}),B.addEventListener("load",function(){P.loading|=1}),B.addEventListener("error",function(){P.loading|=2}),P.loading|=4,Nu(A,a,c)}A={type:"stylesheet",instance:A,count:1,state:P},d.set(g,A)}}}function ob(n,a){Wa.X(n,a);var r=vo;if(r&&n){var c=ls(r).hoistableScripts,d=So(n),g=c.get(d);g||(g=r.querySelector(Zl(d)),g||(n=k({src:n,async:!0},a),(a=Xi.get(d))&&Vd(n,a),g=r.createElement("script"),L(g),zn(g,"link",n),r.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function lb(n,a){Wa.M(n,a);var r=vo;if(r&&n){var c=ls(r).hoistableScripts,d=So(n),g=c.get(d);g||(g=r.querySelector(Zl(d)),g||(n=k({src:n,async:!0,type:"module"},a),(a=Xi.get(d))&&Vd(n,a),g=r.createElement("script"),L(g),zn(g,"link",n),r.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function Hv(n,a,r,c){var d=(d=ue.current)?Lu(d):null;if(!d)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=xo(r.href),r=ls(d).hoistableStyles,c=r.get(a),c||(c={type:"style",instance:null,count:0,state:null},r.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){n=xo(r.href);var g=ls(d).hoistableStyles,A=g.get(n);if(A||(d=d.ownerDocument||d,A={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,A),(g=d.querySelector(jl(n)))&&!g._p&&(A.instance=g,A.state.loading=5),Xi.has(n)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Xi.set(n,r),g||cb(d,n,r,A.state))),a&&c===null)throw Error(i(528,""));return A}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=So(r),r=ls(d).hoistableScripts,c=r.get(a),c||(c={type:"script",instance:null,count:0,state:null},r.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function xo(n){return'href="'+oe(n)+'"'}function jl(n){return'link[rel="stylesheet"]['+n+"]"}function Vv(n){return k({},n,{"data-precedence":n.precedence,precedence:null})}function cb(n,a,r,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),zn(a,"link",r),L(a),n.head.appendChild(a))}function So(n){return'[src="'+oe(n)+'"]'}function Zl(n){return"script[async]"+n}function kv(n,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+oe(r.href)+'"]');if(c)return a.instance=c,L(c),c;var d=k({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),L(c),zn(c,"style",d),Nu(c,r.precedence,n),a.instance=c;case"stylesheet":d=xo(r.href);var g=n.querySelector(jl(d));if(g)return a.state.loading|=4,a.instance=g,L(g),g;c=Vv(r),(d=Xi.get(d))&&Hd(c,d),g=(n.ownerDocument||n).createElement("link"),L(g);var A=g;return A._p=new Promise(function(P,B){A.onload=P,A.onerror=B}),zn(g,"link",c),a.state.loading|=4,Nu(g,r.precedence,n),a.instance=g;case"script":return g=So(r.src),(d=n.querySelector(Zl(g)))?(a.instance=d,L(d),d):(c=r,(d=Xi.get(g))&&(c=k({},r),Vd(c,d)),n=n.ownerDocument||n,d=n.createElement("script"),L(d),zn(d,"link",c),n.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Nu(c,r.precedence,n));return a.instance}function Nu(n,a,r){for(var c=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,g=d,A=0;A<c.length;A++){var P=c[A];if(P.dataset.precedence===a)g=P;else if(g!==d)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(n,a.firstChild))}function Hd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Vd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Pu=null;function Xv(n,a,r){if(Pu===null){var c=new Map,d=Pu=new Map;d.set(r,c)}else d=Pu,c=d.get(r),c||(c=new Map,d.set(r,c));if(c.has(n))return c;for(c.set(n,null),r=r.getElementsByTagName(n),d=0;d<r.length;d++){var g=r[d];if(!(g[Qs]||g[yn]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var A=g.getAttribute(a)||"";A=n+A;var P=c.get(A);P?P.push(g):c.set(A,[g])}}return c}function Wv(n,a,r){n=n.ownerDocument||n,n.head.insertBefore(r,a==="title"?n.querySelector("head > title"):null)}function ub(n,a,r){if(r===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function qv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Kl=null;function fb(){}function hb(n,a,r){if(Kl===null)throw Error(i(475));var c=Kl;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=xo(r.href),g=n.querySelector(jl(d));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Ou.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=g,L(g);return}g=n.ownerDocument||n,r=Vv(r),(d=Xi.get(d))&&Hd(r,d),g=g.createElement("link"),L(g);var A=g;A._p=new Promise(function(P,B){A.onload=P,A.onerror=B}),zn(g,"link",r),a.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Ou.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function db(){if(Kl===null)throw Error(i(475));var n=Kl;return n.stylesheets&&n.count===0&&kd(n,n.stylesheets),0<n.count?function(a){var r=setTimeout(function(){if(n.stylesheets&&kd(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(r)}}:null}function Ou(){if(this.count--,this.count===0){if(this.stylesheets)kd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Fu=null;function kd(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Fu=new Map,a.forEach(pb,n),Fu=null,Ou.call(n))}function pb(n,a){if(!(a.state.loading&4)){var r=Fu.get(n);if(r)var c=r.get(null);else{r=new Map,Fu.set(n,r);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var A=d[g];(A.nodeName==="LINK"||A.getAttribute("media")!=="not all")&&(r.set(A.dataset.precedence,A),c=A)}c&&r.set(null,c)}d=a.instance,A=d.getAttribute("data-precedence"),g=r.get(A)||c,g===c&&r.set(null,d),r.set(A,d),this.count++,c=Ou.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),g?g.parentNode.insertBefore(d,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),a.state.loading|=4}}var Ql={$$typeof:x,Provider:null,Consumer:null,_currentValue:Ot,_currentValue2:Ot,_threadCount:0};function mb(n,a,r,c,d,g,A,P){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.hiddenUpdates=gi(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=A,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Yv(n,a,r,c,d,g,A,P,B,K,mt,St){return n=new mb(n,a,r,A,P,B,K,St),a=1,g===!0&&(a|=24),g=Vi(3,null,null,a),n.current=g,g.stateNode=n,a=yh(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:r,cache:a},ed(g),n}function jv(n){return n?(n=Qr,n):Qr}function Zv(n,a,r,c,d,g){d=jv(d),c.context===null?c.context=d:c.pendingContext=d,c=_s(a),c.payload={element:r},g=g===void 0?null:g,g!==null&&(c.callback=g),r=vs(n,c,a),r!==null&&(ni(r,n,a),Pl(r,n,a))}function Kv(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<a?r:a}}function Xd(n,a){Kv(n,a),(n=n.alternate)&&Kv(n,a)}function Qv(n){if(n.tag===13){var a=us(n,67108864);a!==null&&ni(a,n,67108864),Xd(n,67108864)}}var zu=!0;function gb(n,a,r,c){var d=w.T;w.T=null;var g=vt.p;try{vt.p=2,Wd(n,a,r,c)}finally{vt.p=g,w.T=d}}function _b(n,a,r,c){var d=w.T;w.T=null;var g=vt.p;try{vt.p=8,Wd(n,a,r,c)}finally{vt.p=g,w.T=d}}function Wd(n,a,r,c){if(zu){var d=qd(c);if(d===null)Nd(n,a,c,Iu,r),$v(n,c);else if(xb(d,n,a,r,c))c.stopPropagation();else if($v(n,c),a&4&&-1<vb.indexOf(n)){for(;d!==null;){var g=os(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var A=Mt(g.pendingLanes);if(A!==0){var P=g;for(P.pendingLanes|=2,P.entangledLanes|=2;A;){var B=1<<31-Ut(A);P.entanglements[1]|=B,A&=~B}ha(g),(tn&6)===0&&(yu=R()+500,Wl(0))}}break;case 13:P=us(g,2),P!==null&&ni(P,g,2),Eu(),Xd(g,2)}if(g=qd(c),g===null&&Nd(n,a,c,Iu,r),g===d)break;d=g}d!==null&&c.stopPropagation()}else Nd(n,a,c,null,r)}}function qd(n){return n=Jf(n),Yd(n)}var Iu=null;function Yd(n){if(Iu=null,n=Ca(n),n!==null){var a=it(n);if(a===null)n=null;else{var r=a.tag;if(r===13){if(n=ft(a),n!==null)return n;n=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Iu=n,null}function Jv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case pt:return 2;case xt:return 8;case ut:case Xt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var jd=!1,Ts=null,As=null,ws=null,Jl=new Map,$l=new Map,Rs=[],vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $v(n,a){switch(n){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":ws=null;break;case"pointerover":case"pointerout":Jl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(a.pointerId)}}function tc(n,a,r,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:r,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},a!==null&&(a=os(a),a!==null&&Qv(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),n)}function xb(n,a,r,c,d){switch(a){case"focusin":return Ts=tc(Ts,n,a,r,c,d),!0;case"dragenter":return As=tc(As,n,a,r,c,d),!0;case"mouseover":return ws=tc(ws,n,a,r,c,d),!0;case"pointerover":var g=d.pointerId;return Jl.set(g,tc(Jl.get(g)||null,n,a,r,c,d)),!0;case"gotpointercapture":return g=d.pointerId,$l.set(g,tc($l.get(g)||null,n,a,r,c,d)),!0}return!1}function tx(n){var a=Ca(n.target);if(a!==null){var r=it(a);if(r!==null){if(a=r.tag,a===13){if(a=ft(r),a!==null){n.blockedOn=a,Ra(n.priority,function(){if(r.tag===13){var c=bi(),d=us(r,c);d!==null&&ni(d,r,c),Xd(r,c)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Bu(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var r=qd(n.nativeEvent);if(r===null){r=n.nativeEvent;var c=new r.constructor(r.type,r);Qf=c,r.target.dispatchEvent(c),Qf=null}else return a=os(r),a!==null&&Qv(a),n.blockedOn=r,!1;a.shift()}return!0}function ex(n,a,r){Bu(n)&&r.delete(a)}function Sb(){jd=!1,Ts!==null&&Bu(Ts)&&(Ts=null),As!==null&&Bu(As)&&(As=null),ws!==null&&Bu(ws)&&(ws=null),Jl.forEach(ex),$l.forEach(ex)}function Gu(n,a){n.blockedOn===a&&(n.blockedOn=null,jd||(jd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Sb)))}var Hu=null;function nx(n){Hu!==n&&(Hu=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Hu===n&&(Hu=null);for(var a=0;a<n.length;a+=3){var r=n[a],c=n[a+1],d=n[a+2];if(typeof c!="function"){if(Yd(c||r)===null)continue;break}var g=os(r);g!==null&&(n.splice(a,3),a-=3,zh(g,{pending:!0,data:d,method:r.method,action:c},c,d))}}))}function ec(n){function a(B){return Gu(B,n)}Ts!==null&&Gu(Ts,n),As!==null&&Gu(As,n),ws!==null&&Gu(ws,n),Jl.forEach(a),$l.forEach(a);for(var r=0;r<Rs.length;r++){var c=Rs[r];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Rs.length&&(r=Rs[0],r.blockedOn===null);)tx(r),r.blockedOn===null&&Rs.shift();if(r=(n.ownerDocument||n).$$reactFormReplay,r!=null)for(c=0;c<r.length;c+=3){var d=r[c],g=r[c+1],A=d[Pn]||null;if(typeof g=="function")A||nx(r);else if(A){var P=null;if(g&&g.hasAttribute("formAction")){if(d=g,A=g[Pn]||null)P=A.formAction;else if(Yd(d)!==null)continue}else P=A.action;typeof P=="function"?r[c+1]=P:(r.splice(c,3),c-=3),nx(r)}}}function Zd(n){this._internalRoot=n}Vu.prototype.render=Zd.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var r=a.current,c=bi();Zv(r,c,n,a,null,null)},Vu.prototype.unmount=Zd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;n.tag===0&&mo(),Zv(n.current,2,null,n,null,null),Eu(),a[Ji]=null}};function Vu(n){this._internalRoot=n}Vu.prototype.unstable_scheduleHydration=function(n){if(n){var a=ll();n={blockedOn:null,target:n,priority:a};for(var r=0;r<Rs.length&&a!==0&&a<Rs[r].priority;r++);Rs.splice(r,0,n),r===0&&tx(n)}};var ix=t.version;if(ix!=="19.0.0")throw Error(i(527,ix,"19.0.0"));vt.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=et(a),n=n!==null?ht(n):null,n=n===null?null:n.stateNode,n};var yb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:Ca,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{Tt=ku.inject(yb),yt=ku}catch{}}return ic.createRoot=function(n,a){if(!s(n))throw Error(i(299));var r=!1,c="",d=S_,g=y_,A=M_,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks)),a=Yv(n,1,!1,null,null,r,c,d,g,A,P,null),n[Ji]=a.current,Ld(n.nodeType===8?n.parentNode:n),new Zd(a)},ic.hydrateRoot=function(n,a,r){if(!s(n))throw Error(i(299));var c=!1,d="",g=S_,A=y_,P=M_,B=null,K=null;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(g=r.onUncaughtError),r.onCaughtError!==void 0&&(A=r.onCaughtError),r.onRecoverableError!==void 0&&(P=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&(K=r.formState)),a=Yv(n,1,!0,a,r??null,c,d,g,A,P,B,K),a.context=jv(null),r=a.current,c=bi(),d=_s(c),d.callback=null,vs(r,d,c),a.current.lanes=c,Qn(a,c),ha(a),n[Ji]=a.current,Ld(n),new Vu(a)},ic.version="19.0.0",ic}var dx;function Lb(){if(dx)return Jd.exports;dx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Jd.exports=Ub(),Jd.exports}var Nb=Lb();const Pb=IS(Nb);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const i0="183",Ob=0,px=1,Fb=2,bf=1,zb=2,hc=3,Ws=0,ci=1,li=2,ts=0,Vs=1,mx=2,gx=3,_x=4,Ib=5,Rr=100,Bb=101,Gb=102,Hb=103,Vb=104,kb=200,Xb=201,Wb=202,qb=203,Zp=204,Kp=205,Yb=206,jb=207,Zb=208,Kb=209,Qb=210,Jb=211,$b=212,tE=213,eE=214,Qp=0,Jp=1,$p=2,Yo=3,tm=4,em=5,nm=6,im=7,BS=0,nE=1,iE=2,ya=0,GS=1,HS=2,VS=3,a0=4,kS=5,XS=6,WS=7,qS=300,Fr=301,jo=302,np=303,ip=304,Xf=306,am=1e3,$a=1001,sm=1002,In=1003,aE=1004,Xu=1005,Bn=1006,ap=1007,zs=1008,wi=1009,YS=1010,jS=1011,Sc=1012,s0=1013,Ea=1014,va=1015,is=1016,r0=1017,o0=1018,yc=1020,ZS=35902,KS=35899,QS=1021,JS=1022,Zi=1023,as=1026,Dr=1027,$S=1028,l0=1029,Zo=1030,c0=1031,u0=1033,Ef=33776,Tf=33777,Af=33778,wf=33779,rm=35840,om=35841,lm=35842,cm=35843,um=36196,fm=37492,hm=37496,dm=37488,pm=37489,mm=37490,gm=37491,_m=37808,vm=37809,xm=37810,Sm=37811,ym=37812,Mm=37813,bm=37814,Em=37815,Tm=37816,Am=37817,wm=37818,Rm=37819,Cm=37820,Dm=37821,Um=36492,Lm=36494,Nm=36495,Pm=36283,Om=36284,Fm=36285,zm=36286,sE=3200,ty=0,rE=1,Fs="",Ln="srgb",Ko="srgb-linear",Lf="linear",Fe="srgb",yo=7680,vx=519,oE=512,lE=513,cE=514,f0=515,uE=516,fE=517,h0=518,hE=519,xx=35044,sp=35048,Sx="300 es",xa=2e3,Mc=2001;function dE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function pE(){const o=bc("canvas");return o.style.display="block",o}const yx={};function Mx(...o){const t="THREE."+o.shift();console.log(t,...o)}function ey(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=o[1];e&&e.isStackTrace?o[0]+=" "+e.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ne(...o){o=ey(o);const t="THREE."+o.shift();{const e=o[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...o)}}function Le(...o){o=ey(o);const t="THREE."+o.shift();{const e=o[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...o)}}function Nf(...o){const t=o.join(" ");t in yx||(yx[t]=!0,ne(...o))}function mE(o,t,e){return new Promise(function(i,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}const gE={[Qp]:Jp,[$p]:nm,[tm]:im,[Yo]:em,[Jp]:Qp,[nm]:$p,[im]:tm,[em]:Yo};class al{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const l=s.indexOf(e);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bx=1234567;const Go=Math.PI/180,Ec=180/Math.PI;function sl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wn[o&255]+Wn[o>>8&255]+Wn[o>>16&255]+Wn[o>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[e&63|128]+Wn[e>>8&255]+"-"+Wn[e>>16&255]+Wn[e>>24&255]+Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]).toLowerCase()}function _e(o,t,e){return Math.max(t,Math.min(e,o))}function d0(o,t){return(o%t+t)%t}function _E(o,t,e,i,s){return i+(o-t)*(s-i)/(e-t)}function vE(o,t,e){return o!==t?(e-o)/(t-o):0}function gc(o,t,e){return(1-e)*o+e*t}function xE(o,t,e,i){return gc(o,t,1-Math.exp(-e*i))}function SE(o,t=1){return t-Math.abs(d0(o,t*2)-t)}function yE(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function ME(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function bE(o,t){return o+Math.floor(Math.random()*(t-o+1))}function EE(o,t){return o+Math.random()*(t-o)}function TE(o){return o*(.5-Math.random())}function AE(o){o!==void 0&&(bx=o);let t=bx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wE(o){return o*Go}function RE(o){return o*Ec}function CE(o){return(o&o-1)===0&&o!==0}function DE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function UE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function LE(o,t,e,i,s){const l=Math.cos,u=Math.sin,f=l(e/2),p=u(e/2),h=l((t+i)/2),m=u((t+i)/2),v=l((t-i)/2),_=u((t-i)/2),x=l((i-t)/2),y=u((i-t)/2);switch(s){case"XYX":o.set(f*m,p*v,p*_,f*h);break;case"YZY":o.set(p*_,f*m,p*v,f*h);break;case"ZXZ":o.set(p*v,p*_,f*m,f*h);break;case"XZX":o.set(f*m,p*y,p*x,f*h);break;case"YXY":o.set(p*x,f*m,p*y,f*h);break;case"ZYZ":o.set(p*y,p*x,f*m,f*h);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ii(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const NE={DEG2RAD:Go,RAD2DEG:Ec,generateUUID:sl,clamp:_e,euclideanModulo:d0,mapLinear:_E,inverseLerp:vE,lerp:gc,damp:xE,pingpong:SE,smoothstep:yE,smootherstep:ME,randInt:bE,randFloat:EE,randFloatSpread:TE,seededRandom:AE,degToRad:wE,radToDeg:RE,isPowerOfTwo:CE,ceilPowerOfTwo:DE,floorPowerOfTwo:UE,setQuaternionFromProperEuler:LE,normalize:ii,denormalize:zo};class xe{constructor(t=0,e=0){xe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),l=this.x-t.x,u=this.y-t.y;return this.x=l*i-u*s+t.x,this.y=l*s+u*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,l,u,f){let p=i[s+0],h=i[s+1],m=i[s+2],v=i[s+3],_=l[u+0],x=l[u+1],y=l[u+2],b=l[u+3];if(v!==b||p!==_||h!==x||m!==y){let S=p*_+h*x+m*y+v*b;S<0&&(_=-_,x=-x,y=-y,b=-b,S=-S);let M=1-f;if(S<.9995){const E=Math.acos(S),D=Math.sin(E);M=Math.sin(M*E)/D,f=Math.sin(f*E)/D,p=p*M+_*f,h=h*M+x*f,m=m*M+y*f,v=v*M+b*f}else{p=p*M+_*f,h=h*M+x*f,m=m*M+y*f,v=v*M+b*f;const E=1/Math.sqrt(p*p+h*h+m*m+v*v);p*=E,h*=E,m*=E,v*=E}}t[e]=p,t[e+1]=h,t[e+2]=m,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,s,l,u){const f=i[s],p=i[s+1],h=i[s+2],m=i[s+3],v=l[u],_=l[u+1],x=l[u+2],y=l[u+3];return t[e]=f*y+m*v+p*x-h*_,t[e+1]=p*y+m*_+h*v-f*x,t[e+2]=h*y+m*x+f*_-p*v,t[e+3]=m*y-f*v-p*_-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,l=t._z,u=t._order,f=Math.cos,p=Math.sin,h=f(i/2),m=f(s/2),v=f(l/2),_=p(i/2),x=p(s/2),y=p(l/2);switch(u){case"XYZ":this._x=_*m*v+h*x*y,this._y=h*x*v-_*m*y,this._z=h*m*y+_*x*v,this._w=h*m*v-_*x*y;break;case"YXZ":this._x=_*m*v+h*x*y,this._y=h*x*v-_*m*y,this._z=h*m*y-_*x*v,this._w=h*m*v+_*x*y;break;case"ZXY":this._x=_*m*v-h*x*y,this._y=h*x*v+_*m*y,this._z=h*m*y+_*x*v,this._w=h*m*v-_*x*y;break;case"ZYX":this._x=_*m*v-h*x*y,this._y=h*x*v+_*m*y,this._z=h*m*y-_*x*v,this._w=h*m*v+_*x*y;break;case"YZX":this._x=_*m*v+h*x*y,this._y=h*x*v+_*m*y,this._z=h*m*y-_*x*v,this._w=h*m*v-_*x*y;break;case"XZY":this._x=_*m*v-h*x*y,this._y=h*x*v-_*m*y,this._z=h*m*y+_*x*v,this._w=h*m*v+_*x*y;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],l=e[8],u=e[1],f=e[5],p=e[9],h=e[2],m=e[6],v=e[10],_=i+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-p)*x,this._y=(l-h)*x,this._z=(u-s)*x}else if(i>f&&i>v){const x=2*Math.sqrt(1+i-f-v);this._w=(m-p)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(l+h)/x}else if(f>v){const x=2*Math.sqrt(1+f-i-v);this._w=(l-h)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(p+m)/x}else{const x=2*Math.sqrt(1+v-i-f);this._w=(u-s)/x,this._x=(l+h)/x,this._y=(p+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,l=t._z,u=t._w,f=e._x,p=e._y,h=e._z,m=e._w;return this._x=i*m+u*f+s*h-l*p,this._y=s*m+u*p+l*f-i*h,this._z=l*m+u*h+i*p-s*f,this._w=u*m-i*f-s*p-l*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,l=t._z,u=t._w,f=this.dot(t);f<0&&(i=-i,s=-s,l=-l,u=-u,f=-f);let p=1-e;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);p=Math.sin(p*h)/m,e=Math.sin(e*h)/m,this._x=this._x*p+i*e,this._y=this._y*p+s*e,this._z=this._z*p+l*e,this._w=this._w*p+u*e,this._onChangeCallback()}else this._x=this._x*p+i*e,this._y=this._y*p+s*e,this._z=this._z*p+l*e,this._w=this._w*p+u*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ex.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ex.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*s,this.y=l[1]*e+l[4]*i+l[7]*s,this.z=l[2]*e+l[5]*i+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,l=t.elements,u=1/(l[3]*e+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*s+l[12])*u,this.y=(l[1]*e+l[5]*i+l[9]*s+l[13])*u,this.z=(l[2]*e+l[6]*i+l[10]*s+l[14])*u,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,l=t.x,u=t.y,f=t.z,p=t.w,h=2*(u*s-f*i),m=2*(f*e-l*s),v=2*(l*i-u*e);return this.x=e+p*h+u*v-f*m,this.y=i+p*m+f*h-l*v,this.z=s+p*v+l*m-u*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*s,this.y=l[1]*e+l[5]*i+l[9]*s,this.z=l[2]*e+l[6]*i+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,l=t.z,u=e.x,f=e.y,p=e.z;return this.x=s*p-l*f,this.y=l*u-i*p,this.z=i*f-s*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return rp.copy(this).projectOnVector(t),this.sub(rp)}reflect(t){return this.sub(rp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rp=new H,Ex=new Ir;class pe{constructor(t,e,i,s,l,u,f,p,h){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,l,u,f,p,h)}set(t,e,i,s,l,u,f,p,h){const m=this.elements;return m[0]=t,m[1]=s,m[2]=f,m[3]=e,m[4]=l,m[5]=p,m[6]=i,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,l=this.elements,u=i[0],f=i[3],p=i[6],h=i[1],m=i[4],v=i[7],_=i[2],x=i[5],y=i[8],b=s[0],S=s[3],M=s[6],E=s[1],D=s[4],C=s[7],U=s[2],N=s[5],O=s[8];return l[0]=u*b+f*E+p*U,l[3]=u*S+f*D+p*N,l[6]=u*M+f*C+p*O,l[1]=h*b+m*E+v*U,l[4]=h*S+m*D+v*N,l[7]=h*M+m*C+v*O,l[2]=_*b+x*E+y*U,l[5]=_*S+x*D+y*N,l[8]=_*M+x*C+y*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],l=t[3],u=t[4],f=t[5],p=t[6],h=t[7],m=t[8];return e*u*m-e*f*h-i*l*m+i*f*p+s*l*h-s*u*p}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],l=t[3],u=t[4],f=t[5],p=t[6],h=t[7],m=t[8],v=m*u-f*h,_=f*p-m*l,x=h*l-u*p,y=e*v+i*_+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return t[0]=v*b,t[1]=(s*h-m*i)*b,t[2]=(f*i-s*u)*b,t[3]=_*b,t[4]=(m*e-s*p)*b,t[5]=(s*l-f*e)*b,t[6]=x*b,t[7]=(i*p-h*e)*b,t[8]=(u*e-i*l)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,l,u,f){const p=Math.cos(l),h=Math.sin(l);return this.set(i*p,i*h,-i*(p*u+h*f)+u+t,-s*h,s*p,-s*(-h*u+p*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(op.makeScale(t,e)),this}rotate(t){return this.premultiply(op.makeRotation(-t)),this}translate(t,e){return this.premultiply(op.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const op=new pe,Tx=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ax=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PE(){const o={enabled:!0,workingColorSpace:Ko,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Fe&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Fe&&(s.r=Ho(s.r),s.g=Ho(s.g),s.b=Ho(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fs?Lf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Nf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Nf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Ko]:{primaries:t,whitePoint:i,transfer:Lf,toXYZ:Tx,fromXYZ:Ax,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:i,transfer:Fe,toXYZ:Tx,fromXYZ:Ax,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),o}const we=PE();function es(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Mo;class OE{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Mo===void 0&&(Mo=bc("canvas")),Mo.width=t.width,Mo.height=t.height;const s=Mo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Mo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bc("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=es(l[u]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(es(e[i]/255)*255):e[i]=es(e[i]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let FE=0;class p0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(lp(s[u].image)):l.push(lp(s[u]))}else l=lp(s);i.url=l}return e||(t.images[this.uuid]=i),i}}function lp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let zE=0;const cp=new H;class Gn extends al{constructor(t=Gn.DEFAULT_IMAGE,e=Gn.DEFAULT_MAPPING,i=$a,s=$a,l=Bn,u=zs,f=Zi,p=wi,h=Gn.DEFAULT_ANISOTROPY,m=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=sl(),this.name="",this.source=new p0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cp).x}get height(){return this.source.getSize(cp).y}get depth(){return this.source.getSize(cp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case am:t.x=t.x-Math.floor(t.x);break;case $a:t.x=t.x<0?0:1;break;case sm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case am:t.y=t.y-Math.floor(t.y);break;case $a:t.y=t.y<0?0:1;break;case sm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=qS;Gn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,e=0,i=0,s=1){ln.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,l=this.w,u=t.elements;return this.x=u[0]*e+u[4]*i+u[8]*s+u[12]*l,this.y=u[1]*e+u[5]*i+u[9]*s+u[13]*l,this.z=u[2]*e+u[6]*i+u[10]*s+u[14]*l,this.w=u[3]*e+u[7]*i+u[11]*s+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,l;const p=t.elements,h=p[0],m=p[4],v=p[8],_=p[1],x=p[5],y=p[9],b=p[2],S=p[6],M=p[10];if(Math.abs(m-_)<.01&&Math.abs(v-b)<.01&&Math.abs(y-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+b)<.1&&Math.abs(y+S)<.1&&Math.abs(h+x+M-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(h+1)/2,C=(x+1)/2,U=(M+1)/2,N=(m+_)/4,O=(v+b)/4,T=(y+S)/4;return D>C&&D>U?D<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(D),s=N/i,l=O/i):C>U?C<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(C),i=N/s,l=T/s):U<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(U),i=O/l,s=T/l),this.set(i,s,l,e),this}let E=Math.sqrt((S-y)*(S-y)+(v-b)*(v-b)+(_-m)*(_-m));return Math.abs(E)<.001&&(E=1),this.x=(S-y)/E,this.y=(v-b)/E,this.z=(_-m)/E,this.w=Math.acos((h+x+M-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IE extends al{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ln(0,0,t,e),this.scissorTest=!1,this.viewport=new ln(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},l=new Gn(s),u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new p0(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ma extends IE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ny extends Gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=$a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends Gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=$a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(t,e,i,s,l,u,f,p,h,m,v,_,x,y,b,S){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,l,u,f,p,h,m,v,_,x,y,b,S)}set(t,e,i,s,l,u,f,p,h,m,v,_,x,y,b,S){const M=this.elements;return M[0]=t,M[4]=e,M[8]=i,M[12]=s,M[1]=l,M[5]=u,M[9]=f,M[13]=p,M[2]=h,M[6]=m,M[10]=v,M[14]=_,M[3]=x,M[7]=y,M[11]=b,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/bo.setFromMatrixColumn(t,0).length(),l=1/bo.setFromMatrixColumn(t,1).length(),u=1/bo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*u,e[9]=i[9]*u,e[10]=i[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,l=t.z,u=Math.cos(i),f=Math.sin(i),p=Math.cos(s),h=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const _=u*m,x=u*v,y=f*m,b=f*v;e[0]=p*m,e[4]=-p*v,e[8]=h,e[1]=x+y*h,e[5]=_-b*h,e[9]=-f*p,e[2]=b-_*h,e[6]=y+x*h,e[10]=u*p}else if(t.order==="YXZ"){const _=p*m,x=p*v,y=h*m,b=h*v;e[0]=_+b*f,e[4]=y*f-x,e[8]=u*h,e[1]=u*v,e[5]=u*m,e[9]=-f,e[2]=x*f-y,e[6]=b+_*f,e[10]=u*p}else if(t.order==="ZXY"){const _=p*m,x=p*v,y=h*m,b=h*v;e[0]=_-b*f,e[4]=-u*v,e[8]=y+x*f,e[1]=x+y*f,e[5]=u*m,e[9]=b-_*f,e[2]=-u*h,e[6]=f,e[10]=u*p}else if(t.order==="ZYX"){const _=u*m,x=u*v,y=f*m,b=f*v;e[0]=p*m,e[4]=y*h-x,e[8]=_*h+b,e[1]=p*v,e[5]=b*h+_,e[9]=x*h-y,e[2]=-h,e[6]=f*p,e[10]=u*p}else if(t.order==="YZX"){const _=u*p,x=u*h,y=f*p,b=f*h;e[0]=p*m,e[4]=b-_*v,e[8]=y*v+x,e[1]=v,e[5]=u*m,e[9]=-f*m,e[2]=-h*m,e[6]=x*v+y,e[10]=_-b*v}else if(t.order==="XZY"){const _=u*p,x=u*h,y=f*p,b=f*h;e[0]=p*m,e[4]=-v,e[8]=h*m,e[1]=_*v+b,e[5]=u*m,e[9]=x*v-y,e[2]=y*v-x,e[6]=f*m,e[10]=b*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GE,t,HE)}lookAt(t,e,i){const s=this.elements;return Ei.subVectors(t,e),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Ds.crossVectors(i,Ei),Ds.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Ds.crossVectors(i,Ei)),Ds.normalize(),Wu.crossVectors(Ei,Ds),s[0]=Ds.x,s[4]=Wu.x,s[8]=Ei.x,s[1]=Ds.y,s[5]=Wu.y,s[9]=Ei.y,s[2]=Ds.z,s[6]=Wu.z,s[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,l=this.elements,u=i[0],f=i[4],p=i[8],h=i[12],m=i[1],v=i[5],_=i[9],x=i[13],y=i[2],b=i[6],S=i[10],M=i[14],E=i[3],D=i[7],C=i[11],U=i[15],N=s[0],O=s[4],T=s[8],w=s[12],k=s[1],F=s[5],W=s[9],Y=s[13],tt=s[2],Z=s[6],G=s[10],V=s[14],it=s[3],ft=s[7],z=s[11],et=s[15];return l[0]=u*N+f*k+p*tt+h*it,l[4]=u*O+f*F+p*Z+h*ft,l[8]=u*T+f*W+p*G+h*z,l[12]=u*w+f*Y+p*V+h*et,l[1]=m*N+v*k+_*tt+x*it,l[5]=m*O+v*F+_*Z+x*ft,l[9]=m*T+v*W+_*G+x*z,l[13]=m*w+v*Y+_*V+x*et,l[2]=y*N+b*k+S*tt+M*it,l[6]=y*O+b*F+S*Z+M*ft,l[10]=y*T+b*W+S*G+M*z,l[14]=y*w+b*Y+S*V+M*et,l[3]=E*N+D*k+C*tt+U*it,l[7]=E*O+D*F+C*Z+U*ft,l[11]=E*T+D*W+C*G+U*z,l[15]=E*w+D*Y+C*V+U*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],l=t[12],u=t[1],f=t[5],p=t[9],h=t[13],m=t[2],v=t[6],_=t[10],x=t[14],y=t[3],b=t[7],S=t[11],M=t[15],E=p*x-h*_,D=f*x-h*v,C=f*_-p*v,U=u*x-h*m,N=u*_-p*m,O=u*v-f*m;return e*(b*E-S*D+M*C)-i*(y*E-S*U+M*N)+s*(y*D-b*U+M*O)-l*(y*C-b*N+S*O)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],l=t[3],u=t[4],f=t[5],p=t[6],h=t[7],m=t[8],v=t[9],_=t[10],x=t[11],y=t[12],b=t[13],S=t[14],M=t[15],E=e*f-i*u,D=e*p-s*u,C=e*h-l*u,U=i*p-s*f,N=i*h-l*f,O=s*h-l*p,T=m*b-v*y,w=m*S-_*y,k=m*M-x*y,F=v*S-_*b,W=v*M-x*b,Y=_*M-x*S,tt=E*Y-D*W+C*F+U*k-N*w+O*T;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/tt;return t[0]=(f*Y-p*W+h*F)*Z,t[1]=(s*W-i*Y-l*F)*Z,t[2]=(b*O-S*N+M*U)*Z,t[3]=(_*N-v*O-x*U)*Z,t[4]=(p*k-u*Y-h*w)*Z,t[5]=(e*Y-s*k+l*w)*Z,t[6]=(S*C-y*O-M*D)*Z,t[7]=(m*O-_*C+x*D)*Z,t[8]=(u*W-f*k+h*T)*Z,t[9]=(i*k-e*W-l*T)*Z,t[10]=(y*N-b*C+M*E)*Z,t[11]=(v*C-m*N-x*E)*Z,t[12]=(f*w-u*F-p*T)*Z,t[13]=(e*F-i*w+s*T)*Z,t[14]=(b*D-y*U-S*E)*Z,t[15]=(m*U-v*D+_*E)*Z,this}scale(t){const e=this.elements,i=t.x,s=t.y,l=t.z;return e[0]*=i,e[4]*=s,e[8]*=l,e[1]*=i,e[5]*=s,e[9]*=l,e[2]*=i,e[6]*=s,e[10]*=l,e[3]*=i,e[7]*=s,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),l=1-i,u=t.x,f=t.y,p=t.z,h=l*u,m=l*f;return this.set(h*u+i,h*f-s*p,h*p+s*f,0,h*f+s*p,m*f+i,m*p-s*u,0,h*p-s*f,m*p+s*u,l*p*p+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,l,u){return this.set(1,i,l,0,t,1,u,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,l=e._x,u=e._y,f=e._z,p=e._w,h=l+l,m=u+u,v=f+f,_=l*h,x=l*m,y=l*v,b=u*m,S=u*v,M=f*v,E=p*h,D=p*m,C=p*v,U=i.x,N=i.y,O=i.z;return s[0]=(1-(b+M))*U,s[1]=(x+C)*U,s[2]=(y-D)*U,s[3]=0,s[4]=(x-C)*N,s[5]=(1-(_+M))*N,s[6]=(S+E)*N,s[7]=0,s[8]=(y+D)*O,s[9]=(S-E)*O,s[10]=(1-(_+b))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const l=this.determinant();if(l===0)return i.set(1,1,1),e.identity(),this;let u=bo.set(s[0],s[1],s[2]).length();const f=bo.set(s[4],s[5],s[6]).length(),p=bo.set(s[8],s[9],s[10]).length();l<0&&(u=-u),sa.copy(this);const h=1/u,m=1/f,v=1/p;return sa.elements[0]*=h,sa.elements[1]*=h,sa.elements[2]*=h,sa.elements[4]*=m,sa.elements[5]*=m,sa.elements[6]*=m,sa.elements[8]*=v,sa.elements[9]*=v,sa.elements[10]*=v,e.setFromRotationMatrix(sa),i.x=u,i.y=f,i.z=p,this}makePerspective(t,e,i,s,l,u,f=xa,p=!1){const h=this.elements,m=2*l/(e-t),v=2*l/(i-s),_=(e+t)/(e-t),x=(i+s)/(i-s);let y,b;if(p)y=l/(u-l),b=u*l/(u-l);else if(f===xa)y=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===Mc)y=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,l,u,f=xa,p=!1){const h=this.elements,m=2/(e-t),v=2/(i-s),_=-(e+t)/(e-t),x=-(i+s)/(i-s);let y,b;if(p)y=1/(u-l),b=u/(u-l);else if(f===xa)y=-2/(u-l),b=-(u+l)/(u-l);else if(f===Mc)y=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=y,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const bo=new H,sa=new qe,GE=new H(0,0,0),HE=new H(1,1,1),Ds=new H,Wu=new H,Ei=new H,wx=new qe,Rx=new Ir;class Ta{constructor(t=0,e=0,i=0,s=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,l=s[0],u=s[4],f=s[8],p=s[1],h=s[5],m=s[9],v=s[2],_=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wx,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rx.setFromEuler(this),this.setFromQuaternion(Rx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class iy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let VE=0;const Cx=new H,Eo=new Ir,qa=new qe,qu=new H,ac=new H,kE=new H,XE=new Ir,Dx=new H(1,0,0),Ux=new H(0,1,0),Lx=new H(0,0,1),Nx={type:"added"},WE={type:"removed"},To={type:"childadded",child:null},up={type:"childremoved",child:null};class Tn extends al{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new H,e=new Ta,i=new Ir,s=new H(1,1,1);function l(){i.setFromEuler(e,!1)}function u(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new pe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Eo.setFromAxisAngle(t,e),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(t,e){return Eo.setFromAxisAngle(t,e),this.quaternion.premultiply(Eo),this}rotateX(t){return this.rotateOnAxis(Dx,t)}rotateY(t){return this.rotateOnAxis(Ux,t)}rotateZ(t){return this.rotateOnAxis(Lx,t)}translateOnAxis(t,e){return Cx.copy(t).applyQuaternion(this.quaternion),this.position.add(Cx.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dx,t)}translateY(t){return this.translateOnAxis(Ux,t)}translateZ(t){return this.translateOnAxis(Lx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qa.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qu.copy(t):qu.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ac.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qa.lookAt(ac,qu,this.up):qa.lookAt(qu,ac,this.up),this.quaternion.setFromRotationMatrix(qa),s&&(qa.extractRotation(s.matrixWorld),Eo.setFromRotationMatrix(qa),this.quaternion.premultiply(Eo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nx),To.child=t,this.dispatchEvent(To),To.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(WE),up.child=t,this.dispatchEvent(up),up.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qa.multiply(t.parent.matrixWorld)),t.applyMatrix4(qa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nx),To.child=t,this.dispatchEvent(To),To.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ac,t,kE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ac,XE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,l=this.matrix.elements;l[12]+=e-l[0]*e-l[4]*i-l[8]*s,l[13]+=i-l[1]*e-l[5]*i-l[9]*s,l[14]+=s-l[2]*e-l[6]*i-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const v=p[h];l(t.shapes,v)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(t.materials,this.material[p]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(t.animations,p))}}if(e){const f=u(t.geometries),p=u(t.materials),h=u(t.textures),m=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),y=u(t.nodes);f.length>0&&(i.geometries=f),p.length>0&&(i.materials=p),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=s,i;function u(f){const p=[];for(const h in f){const m=f[h];delete m.metadata,p.push(m)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Tn.DEFAULT_UP=new H(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qE={type:"move"};class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,l=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){u=!0;for(const b of t.hand.values()){const S=e.getJointPose(b,i),M=this._getHandJoint(h,b);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=m.position.distanceTo(v.position),x=.02,y=.005;h.inputState.pinching&&_>x+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&_<=x-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(qE)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Yu={h:0,s:0,l:0};function hp(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class re{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=i,we.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=we.workingColorSpace){if(t=d0(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,u=2*i-l;this.r=hp(u,l,t+1/3),this.g=hp(u,l,t),this.b=hp(u,l,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=Ln){function i(l){l!==void 0&&parseFloat(l)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(l,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){const i=ay[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return we.workingToColorSpace(qn.copy(this),t),Math.round(_e(qn.r*255,0,255))*65536+Math.round(_e(qn.g*255,0,255))*256+Math.round(_e(qn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(qn.copy(this),e);const i=qn.r,s=qn.g,l=qn.b,u=Math.max(i,s,l),f=Math.min(i,s,l);let p,h;const m=(f+u)/2;if(f===u)p=0,h=0;else{const v=u-f;switch(h=m<=.5?v/(u+f):v/(2-u-f),u){case i:p=(s-l)/v+(s<l?6:0);break;case s:p=(l-i)/v+2;break;case l:p=(i-s)/v+4;break}p/=6}return t.h=p,t.s=h,t.l=m,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(qn.copy(this),e),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=Ln){we.workingToColorSpace(qn.copy(this),t);const e=qn.r,i=qn.g,s=qn.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+e,Us.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Us),t.getHSL(Yu);const i=gc(Us.h,Yu.h,e),s=gc(Us.s,Yu.s,e),l=gc(Us.l,Yu.l,e);return this.setHSL(i,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*s,this.g=l[1]*e+l[4]*i+l[7]*s,this.b=l[2]*e+l[5]*i+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new re;re.NAMES=ay;class m0{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(t),this.density=e}clone(){return new m0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class YE extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ra=new H,Ya=new H,dp=new H,ja=new H,Ao=new H,wo=new H,Px=new H,pp=new H,mp=new H,gp=new H,_p=new ln,vp=new ln,xp=new ln;class ji{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ra.subVectors(t,e),s.cross(ra);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,e,i,s,l){ra.subVectors(s,e),Ya.subVectors(i,e),dp.subVectors(t,e);const u=ra.dot(ra),f=ra.dot(Ya),p=ra.dot(dp),h=Ya.dot(Ya),m=Ya.dot(dp),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(h*p-f*m)*_,y=(u*m-f*p)*_;return l.set(1-x-y,y,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ja)===null?!1:ja.x>=0&&ja.y>=0&&ja.x+ja.y<=1}static getInterpolation(t,e,i,s,l,u,f,p){return this.getBarycoord(t,e,i,s,ja)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,ja.x),p.addScaledVector(u,ja.y),p.addScaledVector(f,ja.z),p)}static getInterpolatedAttribute(t,e,i,s,l,u){return _p.setScalar(0),vp.setScalar(0),xp.setScalar(0),_p.fromBufferAttribute(t,e),vp.fromBufferAttribute(t,i),xp.fromBufferAttribute(t,s),u.setScalar(0),u.addScaledVector(_p,l.x),u.addScaledVector(vp,l.y),u.addScaledVector(xp,l.z),u}static isFrontFacing(t,e,i,s){return ra.subVectors(i,e),Ya.subVectors(t,e),ra.cross(Ya).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ra.subVectors(this.c,this.b),Ya.subVectors(this.a,this.b),ra.cross(Ya).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ji.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,l){return ji.getInterpolation(t,this.a,this.b,this.c,e,i,s,l)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,l=this.c;let u,f;Ao.subVectors(s,i),wo.subVectors(l,i),pp.subVectors(t,i);const p=Ao.dot(pp),h=wo.dot(pp);if(p<=0&&h<=0)return e.copy(i);mp.subVectors(t,s);const m=Ao.dot(mp),v=wo.dot(mp);if(m>=0&&v<=m)return e.copy(s);const _=p*v-m*h;if(_<=0&&p>=0&&m<=0)return u=p/(p-m),e.copy(i).addScaledVector(Ao,u);gp.subVectors(t,l);const x=Ao.dot(gp),y=wo.dot(gp);if(y>=0&&x<=y)return e.copy(l);const b=x*h-p*y;if(b<=0&&h>=0&&y<=0)return f=h/(h-y),e.copy(i).addScaledVector(wo,f);const S=m*y-x*v;if(S<=0&&v-m>=0&&x-y>=0)return Px.subVectors(l,s),f=(v-m)/(v-m+(x-y)),e.copy(s).addScaledVector(Px,f);const M=1/(S+b+_);return u=b*M,f=_*M,e.copy(i).addScaledVector(Ao,u).addScaledVector(wo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Nc{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(oa.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(oa.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=oa.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,oa):oa.fromBufferAttribute(l,u),oa.applyMatrix4(t.matrixWorld),this.expandByPoint(oa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ju.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ju.copy(i.boundingBox)),ju.applyMatrix4(t.matrixWorld),this.union(ju)}const s=t.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oa),oa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sc),Zu.subVectors(this.max,sc),Ro.subVectors(t.a,sc),Co.subVectors(t.b,sc),Do.subVectors(t.c,sc),Ls.subVectors(Co,Ro),Ns.subVectors(Do,Co),vr.subVectors(Ro,Do);let e=[0,-Ls.z,Ls.y,0,-Ns.z,Ns.y,0,-vr.z,vr.y,Ls.z,0,-Ls.x,Ns.z,0,-Ns.x,vr.z,0,-vr.x,-Ls.y,Ls.x,0,-Ns.y,Ns.x,0,-vr.y,vr.x,0];return!Sp(e,Ro,Co,Do,Zu)||(e=[1,0,0,0,1,0,0,0,1],!Sp(e,Ro,Co,Do,Zu))?!1:(Ku.crossVectors(Ls,Ns),e=[Ku.x,Ku.y,Ku.z],Sp(e,Ro,Co,Do,Zu))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Za),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Za=[new H,new H,new H,new H,new H,new H,new H,new H],oa=new H,ju=new Nc,Ro=new H,Co=new H,Do=new H,Ls=new H,Ns=new H,vr=new H,sc=new H,Zu=new H,Ku=new H,xr=new H;function Sp(o,t,e,i,s){for(let l=0,u=o.length-3;l<=u;l+=3){xr.fromArray(o,l);const f=s.x*Math.abs(xr.x)+s.y*Math.abs(xr.y)+s.z*Math.abs(xr.z),p=t.dot(xr),h=e.dot(xr),m=i.dot(xr);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>f)return!1}return!0}const vn=new H,Qu=new xe;let jE=0;class Hn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xx,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qu.fromBufferAttribute(this,e),Qu.applyMatrix3(t),this.setXY(e,Qu.x,Qu.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix3(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zo(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zo(e,this.array)),e}setX(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zo(e,this.array)),e}setY(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zo(e,this.array)),e}setW(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array),s=ii(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,l){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array),s=ii(s,this.array),l=ii(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xx&&(t.usage=this.usage),t}}class sy extends Hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ry extends Hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ve extends Hn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const ZE=new Nc,rc=new H,yp=new H;class Pc{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ZE.setFromPoints(t).getCenter(i);let s=0;for(let l=0,u=t.length;l<u;l++)s=Math.max(s,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rc.subVectors(t,this.center);const e=rc.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(rc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rc.copy(t.center).add(yp)),this.expandByPoint(rc.copy(t.center).sub(yp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let KE=0;const Wi=new qe,Mp=new Tn,Uo=new H,Ti=new Nc,oc=new Nc,Un=new H;class Sn extends al{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dE(t)?ry:sy)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new pe().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wi.makeRotationFromQuaternion(t),this.applyMatrix4(Wi),this}rotateX(t){return Wi.makeRotationX(t),this.applyMatrix4(Wi),this}rotateY(t){return Wi.makeRotationY(t),this.applyMatrix4(Wi),this}rotateZ(t){return Wi.makeRotationZ(t),this.applyMatrix4(Wi),this}translate(t,e,i){return Wi.makeTranslation(t,e,i),this.applyMatrix4(Wi),this}scale(t,e,i){return Wi.makeScale(t,e,i),this.applyMatrix4(Wi),this}lookAt(t){return Mp.lookAt(t),Mp.updateMatrix(),this.applyMatrix4(Mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,l=t.length;s<l;s++){const u=t[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ve(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const l=t[s];e.setXYZ(s,l.x,l.y,l.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const l=e[i];Ti.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let l=0,u=e.length;l<u;l++){const f=e[l];oc.setFromBufferAttribute(f),this.morphTargetsRelative?(Un.addVectors(Ti.min,oc.min),Ti.expandByPoint(Un),Un.addVectors(Ti.max,oc.max),Ti.expandByPoint(Un)):(Ti.expandByPoint(oc.min),Ti.expandByPoint(oc.max))}Ti.getCenter(i);let s=0;for(let l=0,u=t.count;l<u;l++)Un.fromBufferAttribute(t,l),s=Math.max(s,i.distanceToSquared(Un));if(e)for(let l=0,u=e.length;l<u;l++){const f=e[l],p=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Un.fromBufferAttribute(f,h),p&&(Uo.fromBufferAttribute(t,h),Un.add(Uo)),s=Math.max(s,i.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let T=0;T<i.count;T++)f[T]=new H,p[T]=new H;const h=new H,m=new H,v=new H,_=new xe,x=new xe,y=new xe,b=new H,S=new H;function M(T,w,k){h.fromBufferAttribute(i,T),m.fromBufferAttribute(i,w),v.fromBufferAttribute(i,k),_.fromBufferAttribute(l,T),x.fromBufferAttribute(l,w),y.fromBufferAttribute(l,k),m.sub(h),v.sub(h),x.sub(_),y.sub(_);const F=1/(x.x*y.y-y.x*x.y);isFinite(F)&&(b.copy(m).multiplyScalar(y.y).addScaledVector(v,-x.y).multiplyScalar(F),S.copy(v).multiplyScalar(x.x).addScaledVector(m,-y.x).multiplyScalar(F),f[T].add(b),f[w].add(b),f[k].add(b),p[T].add(S),p[w].add(S),p[k].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let T=0,w=E.length;T<w;++T){const k=E[T],F=k.start,W=k.count;for(let Y=F,tt=F+W;Y<tt;Y+=3)M(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const D=new H,C=new H,U=new H,N=new H;function O(T){U.fromBufferAttribute(s,T),N.copy(U);const w=f[T];D.copy(w),D.sub(U.multiplyScalar(U.dot(w))).normalize(),C.crossVectors(N,w);const F=C.dot(p[T])<0?-1:1;u.setXYZW(T,D.x,D.y,D.z,F)}for(let T=0,w=E.length;T<w;++T){const k=E[T],F=k.start,W=k.count;for(let Y=F,tt=F+W;Y<tt;Y+=3)O(t.getX(Y+0)),O(t.getX(Y+1)),O(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new H,l=new H,u=new H,f=new H,p=new H,h=new H,m=new H,v=new H;if(t)for(let _=0,x=t.count;_<x;_+=3){const y=t.getX(_+0),b=t.getX(_+1),S=t.getX(_+2);s.fromBufferAttribute(e,y),l.fromBufferAttribute(e,b),u.fromBufferAttribute(e,S),m.subVectors(u,l),v.subVectors(s,l),m.cross(v),f.fromBufferAttribute(i,y),p.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),f.add(m),p.add(m),h.add(m),i.setXYZ(y,f.x,f.y,f.z),i.setXYZ(b,p.x,p.y,p.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,x=e.count;_<x;_+=3)s.fromBufferAttribute(e,_+0),l.fromBufferAttribute(e,_+1),u.fromBufferAttribute(e,_+2),m.subVectors(u,l),v.subVectors(s,l),m.cross(v),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Un.fromBufferAttribute(t,e),Un.normalize(),t.setXYZ(e,Un.x,Un.y,Un.z)}toNonIndexed(){function t(f,p){const h=f.array,m=f.itemSize,v=f.normalized,_=new h.constructor(p.length*m);let x=0,y=0;for(let b=0,S=p.length;b<S;b++){f.isInterleavedBufferAttribute?x=p[b]*f.data.stride+f.offset:x=p[b]*m;for(let M=0;M<m;M++)_[y++]=h[x++]}return new Hn(_,m,v)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Sn,i=this.index.array,s=this.attributes;for(const f in s){const p=s[f],h=t(p,i);e.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const _=h[m],x=t(_,i);p.push(x)}e.morphAttributes[f]=p}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(t[h]=p[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const p in i){const h=i[p];t.data.attributes[p]=h.toJSON(t.data)}const s={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let v=0,_=h.length;v<_;v++){const x=h[v];m.push(x.toJSON(t.data))}m.length>0&&(s[p]=m,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(e))}const l=t.morphAttributes;for(const h in l){const m=[],v=l[h];for(let _=0,x=v.length;_<x;_++)m.push(v[_].clone(e));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let h=0,m=u.length;h<m;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let QE=0;class Br extends al{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Vs,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zp,this.blendDst=Kp,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Ws&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zp&&(i.blendSrc=this.blendSrc),this.blendDst!==Kp&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(e){const l=s(t.textures),u=s(t.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ka=new H,bp=new H,Ju=new H,Ps=new H,Ep=new H,$u=new H,Tp=new H;class g0{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ka)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ka.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ka.copy(this.origin).addScaledVector(this.direction,e),Ka.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){bp.copy(t).add(e).multiplyScalar(.5),Ju.copy(e).sub(t).normalize(),Ps.copy(this.origin).sub(bp);const l=t.distanceTo(e)*.5,u=-this.direction.dot(Ju),f=Ps.dot(this.direction),p=-Ps.dot(Ju),h=Ps.lengthSq(),m=Math.abs(1-u*u);let v,_,x,y;if(m>0)if(v=u*p-f,_=u*f-p,y=l*m,v>=0)if(_>=-y)if(_<=y){const b=1/m;v*=b,_*=b,x=v*(v+u*_+2*f)+_*(u*v+_+2*p)+h}else _=l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*p)+h;else _=-l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*p)+h;else _<=-y?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-p),l),x=-v*v+_*(_+2*p)+h):_<=y?(v=0,_=Math.min(Math.max(-l,-p),l),x=_*(_+2*p)+h):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-p),l),x=-v*v+_*(_+2*p)+h);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*p)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(bp).addScaledVector(Ju,_),x}intersectSphere(t,e){Ka.subVectors(t.center,this.origin);const i=Ka.dot(this.direction),s=Ka.dot(Ka)-i*i,l=t.radius*t.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=i-u,p=i+u;return p<0?null:f<0?this.at(p,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,l,u,f,p;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(i=(t.min.x-_.x)*h,s=(t.max.x-_.x)*h):(i=(t.max.x-_.x)*h,s=(t.min.x-_.x)*h),m>=0?(l=(t.min.y-_.y)*m,u=(t.max.y-_.y)*m):(l=(t.max.y-_.y)*m,u=(t.min.y-_.y)*m),i>u||l>s||((l>i||isNaN(i))&&(i=l),(u<s||isNaN(s))&&(s=u),v>=0?(f=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),i>p||f>s)||((f>i||i!==i)&&(i=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ka)!==null}intersectTriangle(t,e,i,s,l){Ep.subVectors(e,t),$u.subVectors(i,t),Tp.crossVectors(Ep,$u);let u=this.direction.dot(Tp),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ps.subVectors(this.origin,t);const p=f*this.direction.dot($u.crossVectors(Ps,$u));if(p<0)return null;const h=f*this.direction.dot(Ep.cross(Ps));if(h<0||p+h>u)return null;const m=-f*Ps.dot(Tp);return m<0?null:this.at(m/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ns extends Br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=BS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ox=new qe,Sr=new g0,tf=new Pc,Fx=new H,ef=new H,nf=new H,af=new H,Ap=new H,sf=new H,zx=new H,rf=new H;class Ht extends Tn{constructor(t=new Sn,e=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){sf.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=f[p],v=l[p];m!==0&&(Ap.fromBufferAttribute(v,t),u?sf.addScaledVector(Ap,m):sf.addScaledVector(Ap.sub(e),m))}e.add(sf)}return e}raycast(t,e){const i=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tf.copy(i.boundingSphere),tf.applyMatrix4(l),Sr.copy(t.ray).recast(t.near),!(tf.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(tf,Fx)===null||Sr.origin.distanceToSquared(Fx)>(t.far-t.near)**2))&&(Ox.copy(l).invert(),Sr.copy(t.ray).applyMatrix4(Ox),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,i){let s;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let y=0,b=_.length;y<b;y++){const S=_[y],M=u[S.materialIndex],E=Math.max(S.start,x.start),D=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=E,U=D;C<U;C+=3){const N=f.getX(C),O=f.getX(C+1),T=f.getX(C+2);s=of(this,M,t,i,h,m,v,N,O,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{const y=Math.max(0,x.start),b=Math.min(f.count,x.start+x.count);for(let S=y,M=b;S<M;S+=3){const E=f.getX(S),D=f.getX(S+1),C=f.getX(S+2);s=of(this,u,t,i,h,m,v,E,D,C),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}else if(p!==void 0)if(Array.isArray(u))for(let y=0,b=_.length;y<b;y++){const S=_[y],M=u[S.materialIndex],E=Math.max(S.start,x.start),D=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let C=E,U=D;C<U;C+=3){const N=C,O=C+1,T=C+2;s=of(this,M,t,i,h,m,v,N,O,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{const y=Math.max(0,x.start),b=Math.min(p.count,x.start+x.count);for(let S=y,M=b;S<M;S+=3){const E=S,D=S+1,C=S+2;s=of(this,u,t,i,h,m,v,E,D,C),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}}}function JE(o,t,e,i,s,l,u,f){let p;if(t.side===ci?p=i.intersectTriangle(u,l,s,!0,f):p=i.intersectTriangle(s,l,u,t.side===Ws,f),p===null)return null;rf.copy(f),rf.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(rf);return h<e.near||h>e.far?null:{distance:h,point:rf.clone(),object:o}}function of(o,t,e,i,s,l,u,f,p,h){o.getVertexPosition(f,ef),o.getVertexPosition(p,nf),o.getVertexPosition(h,af);const m=JE(o,t,e,i,ef,nf,af,zx);if(m){const v=new H;ji.getBarycoord(zx,ef,nf,af,v),s&&(m.uv=ji.getInterpolatedAttribute(s,f,p,h,v,new xe)),l&&(m.uv1=ji.getInterpolatedAttribute(l,f,p,h,v,new xe)),u&&(m.normal=ji.getInterpolatedAttribute(u,f,p,h,v,new H),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:p,c:h,normal:new H,materialIndex:0};ji.getNormal(ef,nf,af,_.normal),m.face=_,m.barycoord=v}return m}class oy extends Gn{constructor(t=null,e=1,i=1,s,l,u,f,p,h=In,m=In,v,_){super(null,u,f,p,h,m,s,l,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wp=new H,$E=new H,tT=new pe;class Ar{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wp.subVectors(i,e).cross($E.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||tT.getNormalMatrix(t),s=this.coplanarPoint(wp).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Pc,eT=new xe(.5,.5),lf=new H;class _0{constructor(t=new Ar,e=new Ar,i=new Ar,s=new Ar,l=new Ar,u=new Ar){this.planes=[t,e,i,s,l,u]}set(t,e,i,s,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xa,i=!1){const s=this.planes,l=t.elements,u=l[0],f=l[1],p=l[2],h=l[3],m=l[4],v=l[5],_=l[6],x=l[7],y=l[8],b=l[9],S=l[10],M=l[11],E=l[12],D=l[13],C=l[14],U=l[15];if(s[0].setComponents(h-u,x-m,M-y,U-E).normalize(),s[1].setComponents(h+u,x+m,M+y,U+E).normalize(),s[2].setComponents(h+f,x+v,M+b,U+D).normalize(),s[3].setComponents(h-f,x-v,M-b,U-D).normalize(),i)s[4].setComponents(p,_,S,C).normalize(),s[5].setComponents(h-p,x-_,M-S,U-C).normalize();else if(s[4].setComponents(h-p,x-_,M-S,U-C).normalize(),e===xa)s[5].setComponents(h+p,x+_,M+S,U+C).normalize();else if(e===Mc)s[5].setComponents(p,_,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);const e=eT.distanceTo(t.center);return yr.radius=.7071067811865476+e,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(lf.x=s.normal.x>0?t.max.x:t.min.x,lf.y=s.normal.y>0?t.max.y:t.min.y,lf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lf)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ly extends Br{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pf=new H,Of=new H,Ix=new qe,lc=new g0,cf=new Pc,Rp=new H,Bx=new H;class nT extends Tn{constructor(t=new Sn,e=new ly){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,l=e.count;s<l;s++)Pf.fromBufferAttribute(e,s-1),Of.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Pf.distanceTo(Of);t.setAttribute("lineDistance",new Ve(i,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,l=t.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cf.copy(i.boundingSphere),cf.applyMatrix4(s),cf.radius+=l,t.ray.intersectsSphere(cf)===!1)return;Ix.copy(s).invert(),lc.copy(t.ray).applyMatrix4(Ix);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,u.start),y=Math.min(m.count,u.start+u.count);for(let b=x,S=y-1;b<S;b+=h){const M=m.getX(b),E=m.getX(b+1),D=uf(this,t,lc,p,M,E,b);D&&e.push(D)}if(this.isLineLoop){const b=m.getX(y-1),S=m.getX(x),M=uf(this,t,lc,p,b,S,y-1);M&&e.push(M)}}else{const x=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let b=x,S=y-1;b<S;b+=h){const M=uf(this,t,lc,p,b,b+1,b);M&&e.push(M)}if(this.isLineLoop){const b=uf(this,t,lc,p,y-1,x,y-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function uf(o,t,e,i,s,l,u){const f=o.geometry.attributes.position;if(Pf.fromBufferAttribute(f,s),Of.fromBufferAttribute(f,l),e.distanceSqToSegment(Pf,Of,Rp,Bx)>i)return;Rp.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Rp);if(!(h<t.near||h>t.far))return{distance:h,point:Bx.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Gx=new H,Hx=new H;class iT extends nT{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,l=e.count;s<l;s+=2)Gx.fromBufferAttribute(e,s),Hx.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gx.distanceTo(Hx);t.setAttribute("lineDistance",new Ve(i,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aT extends Br{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vx=new qe,Im=new g0,ff=new Pc,hf=new H;class cy extends Tn{constructor(t=new Sn,e=new aT){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,l=t.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ff.copy(i.boundingSphere),ff.applyMatrix4(s),ff.radius+=l,t.ray.intersectsSphere(ff)===!1)return;Vx.copy(s).invert(),Im.copy(t.ray).applyMatrix4(Vx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=i.index,v=i.attributes.position;if(h!==null){const _=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let y=_,b=x;y<b;y++){const S=h.getX(y);hf.fromBufferAttribute(v,S),kx(hf,S,p,s,t,e,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let y=_,b=x;y<b;y++)hf.fromBufferAttribute(v,y),kx(hf,y,p,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function kx(o,t,e,i,s,l,u){const f=Im.distanceSqToPoint(o);if(f<e){const p=new H;Im.closestPointToPoint(o,p),p.applyMatrix4(i);const h=s.ray.origin.distanceTo(p);if(h<s.near||h>s.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class uy extends Gn{constructor(t=[],e=Fr,i,s,l,u,f,p,h,m){super(t,e,i,s,l,u,f,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bm extends Gn{constructor(t,e,i,s,l,u,f,p,h){super(t,e,i,s,l,u,f,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tc extends Gn{constructor(t,e,i=Ea,s,l,u,f=In,p=In,h,m=as,v=1){if(m!==as&&m!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:v};super(_,s,l,u,f,p,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new p0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class sT extends Tc{constructor(t,e=Ea,i=Fr,s,l,u=In,f=In,p,h=as){const m={width:t,height:t,depth:1},v=[m,m,m,m,m,m];super(t,t,e,i,s,l,u,f,p,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fy extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hn extends Sn{constructor(t=1,e=1,i=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],m=[],v=[];let _=0,x=0;y("z","y","x",-1,-1,i,e,t,u,l,0),y("z","y","x",1,-1,i,e,-t,u,l,1),y("x","z","y",1,1,t,i,e,s,u,2),y("x","z","y",1,-1,t,i,-e,s,u,3),y("x","y","z",1,-1,t,e,i,s,l,4),y("x","y","z",-1,-1,t,e,-i,s,l,5),this.setIndex(p),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(v,2));function y(b,S,M,E,D,C,U,N,O,T,w){const k=C/O,F=U/T,W=C/2,Y=U/2,tt=N/2,Z=O+1,G=T+1;let V=0,it=0;const ft=new H;for(let z=0;z<G;z++){const et=z*F-Y;for(let ht=0;ht<Z;ht++){const bt=ht*k-W;ft[b]=bt*E,ft[S]=et*D,ft[M]=tt,h.push(ft.x,ft.y,ft.z),ft[b]=0,ft[S]=0,ft[M]=N>0?1:-1,m.push(ft.x,ft.y,ft.z),v.push(ht/O),v.push(1-z/T),V+=1}}for(let z=0;z<T;z++)for(let et=0;et<O;et++){const ht=_+et+Z*z,bt=_+et+Z*(z+1),vt=_+(et+1)+Z*(z+1),Ot=_+(et+1)+Z*z;p.push(ht,bt,Ot),p.push(bt,vt,Ot),it+=6}f.addGroup(x,it,w),x+=it,_+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Oc extends Sn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const l=[],u=[],f=[],p=[],h=new H,m=new xe;u.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let v=0,_=3;v<=e;v++,_+=3){const x=i+v/e*s;h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.push(h.x,h.y,h.z),f.push(0,0,1),m.x=(u[_]/t+1)/2,m.y=(u[_+1]/t+1)/2,p.push(m.x,m.y)}for(let v=1;v<=e;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ui extends Sn{constructor(t=1,e=1,i=1,s=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const h=this;s=Math.floor(s),l=Math.floor(l);const m=[],v=[],_=[],x=[];let y=0;const b=[],S=i/2;let M=0;E(),u===!1&&(t>0&&D(!0),e>0&&D(!1)),this.setIndex(m),this.setAttribute("position",new Ve(v,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(x,2));function E(){const C=new H,U=new H;let N=0;const O=(e-t)/i;for(let T=0;T<=l;T++){const w=[],k=T/l,F=k*(e-t)+t;for(let W=0;W<=s;W++){const Y=W/s,tt=Y*p+f,Z=Math.sin(tt),G=Math.cos(tt);U.x=F*Z,U.y=-k*i+S,U.z=F*G,v.push(U.x,U.y,U.z),C.set(Z,O,G).normalize(),_.push(C.x,C.y,C.z),x.push(Y,1-k),w.push(y++)}b.push(w)}for(let T=0;T<s;T++)for(let w=0;w<l;w++){const k=b[w][T],F=b[w+1][T],W=b[w+1][T+1],Y=b[w][T+1];(t>0||w!==0)&&(m.push(k,F,Y),N+=3),(e>0||w!==l-1)&&(m.push(F,W,Y),N+=3)}h.addGroup(M,N,0),M+=N}function D(C){const U=y,N=new xe,O=new H;let T=0;const w=C===!0?t:e,k=C===!0?1:-1;for(let W=1;W<=s;W++)v.push(0,S*k,0),_.push(0,k,0),x.push(.5,.5),y++;const F=y;for(let W=0;W<=s;W++){const tt=W/s*p+f,Z=Math.cos(tt),G=Math.sin(tt);O.x=w*G,O.y=S*k,O.z=w*Z,v.push(O.x,O.y,O.z),_.push(0,k,0),N.x=Z*.5+.5,N.y=G*.5*k+.5,x.push(N.x,N.y),y++}for(let W=0;W<s;W++){const Y=U+W,tt=F+W;C===!0?m.push(tt,tt+1,Y):m.push(tt+1,tt,Y),T+=3}h.addGroup(M,T,C===!0?1:2),M+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zr extends ui{constructor(t=1,e=1,i=32,s=1,l=!1,u=0,f=Math.PI*2){super(0,t,e,i,s,l,u,f),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(t){return new zr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class v0 extends Sn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const l=[],u=[];f(s),h(i),m(),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(l.slice(),3)),this.setAttribute("uv",new Ve(u,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function f(E){const D=new H,C=new H,U=new H;for(let N=0;N<e.length;N+=3)x(e[N+0],D),x(e[N+1],C),x(e[N+2],U),p(D,C,U,E)}function p(E,D,C,U){const N=U+1,O=[];for(let T=0;T<=N;T++){O[T]=[];const w=E.clone().lerp(C,T/N),k=D.clone().lerp(C,T/N),F=N-T;for(let W=0;W<=F;W++)W===0&&T===N?O[T][W]=w:O[T][W]=w.clone().lerp(k,W/F)}for(let T=0;T<N;T++)for(let w=0;w<2*(N-T)-1;w++){const k=Math.floor(w/2);w%2===0?(_(O[T][k+1]),_(O[T+1][k]),_(O[T][k])):(_(O[T][k+1]),_(O[T+1][k+1]),_(O[T+1][k]))}}function h(E){const D=new H;for(let C=0;C<l.length;C+=3)D.x=l[C+0],D.y=l[C+1],D.z=l[C+2],D.normalize().multiplyScalar(E),l[C+0]=D.x,l[C+1]=D.y,l[C+2]=D.z}function m(){const E=new H;for(let D=0;D<l.length;D+=3){E.x=l[D+0],E.y=l[D+1],E.z=l[D+2];const C=S(E)/2/Math.PI+.5,U=M(E)/Math.PI+.5;u.push(C,1-U)}y(),v()}function v(){for(let E=0;E<u.length;E+=6){const D=u[E+0],C=u[E+2],U=u[E+4],N=Math.max(D,C,U),O=Math.min(D,C,U);N>.9&&O<.1&&(D<.2&&(u[E+0]+=1),C<.2&&(u[E+2]+=1),U<.2&&(u[E+4]+=1))}}function _(E){l.push(E.x,E.y,E.z)}function x(E,D){const C=E*3;D.x=t[C+0],D.y=t[C+1],D.z=t[C+2]}function y(){const E=new H,D=new H,C=new H,U=new H,N=new xe,O=new xe,T=new xe;for(let w=0,k=0;w<l.length;w+=9,k+=6){E.set(l[w+0],l[w+1],l[w+2]),D.set(l[w+3],l[w+4],l[w+5]),C.set(l[w+6],l[w+7],l[w+8]),N.set(u[k+0],u[k+1]),O.set(u[k+2],u[k+3]),T.set(u[k+4],u[k+5]),U.copy(E).add(D).add(C).divideScalar(3);const F=S(U);b(N,k+0,E,F),b(O,k+2,D,F),b(T,k+4,C,F)}}function b(E,D,C,U){U<0&&E.x===1&&(u[D]=E.x-1),C.x===0&&C.z===0&&(u[D]=U/2/Math.PI+.5)}function S(E){return Math.atan2(E.z,-E.x)}function M(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new v0(t.vertices,t.indices,t.radius,t.detail)}}const df=new H,pf=new H,Cp=new H,mf=new ji;class rT extends Sn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),l=Math.cos(Go*e),u=t.getIndex(),f=t.getAttribute("position"),p=u?u.count:f.count,h=[0,0,0],m=["a","b","c"],v=new Array(3),_={},x=[];for(let y=0;y<p;y+=3){u?(h[0]=u.getX(y),h[1]=u.getX(y+1),h[2]=u.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:b,b:S,c:M}=mf;if(b.fromBufferAttribute(f,h[0]),S.fromBufferAttribute(f,h[1]),M.fromBufferAttribute(f,h[2]),mf.getNormal(Cp),v[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,v[1]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,v[2]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let E=0;E<3;E++){const D=(E+1)%3,C=v[E],U=v[D],N=mf[m[E]],O=mf[m[D]],T=`${C}_${U}`,w=`${U}_${C}`;w in _&&_[w]?(Cp.dot(_[w].normal)<=l&&(x.push(N.x,N.y,N.z),x.push(O.x,O.y,O.z)),_[w]=null):T in _||(_[T]={index0:h[E],index1:h[D],normal:Cp.clone()})}}for(const y in _)if(_[y]){const{index0:b,index1:S}=_[y];df.fromBufferAttribute(f,b),pf.fromBufferAttribute(f,S),x.push(df.x,df.y,df.z),x.push(pf.x,pf.y,pf.z)}this.setAttribute("position",new Ve(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class oT{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),l=0;e.push(0);for(let u=1;u<=t;u++)i=this.getPoint(u/t),l+=i.distanceTo(s),e.push(l),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const l=i.length;let u;e?u=e:u=t*i[l-1];let f=0,p=l-1,h;for(;f<=p;)if(s=Math.floor(f+(p-f)/2),h=i[s]-u,h<0)f=s+1;else if(h>0)p=s-1;else{p=s;break}if(s=p,i[s]===u)return s/(l-1);const m=i[s],_=i[s+1]-m,x=(u-m)/_;return(s+x)/(l-1)}getTangent(t,e){let s=t-1e-4,l=t+1e-4;s<0&&(s=0),l>1&&(l=1);const u=this.getPoint(s),f=this.getPoint(l),p=e||(u.isVector2?new xe:new H);return p.copy(f).sub(u).normalize(),p}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new H,s=[],l=[],u=[],f=new H,p=new qe;for(let x=0;x<=t;x++){const y=x/t;s[x]=this.getTangentAt(y,new H)}l[0]=new H,u[0]=new H;let h=Number.MAX_VALUE;const m=Math.abs(s[0].x),v=Math.abs(s[0].y),_=Math.abs(s[0].z);m<=h&&(h=m,i.set(1,0,0)),v<=h&&(h=v,i.set(0,1,0)),_<=h&&i.set(0,0,1),f.crossVectors(s[0],i).normalize(),l[0].crossVectors(s[0],f),u[0].crossVectors(s[0],l[0]);for(let x=1;x<=t;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(s[x-1],s[x]),f.length()>Number.EPSILON){f.normalize();const y=Math.acos(_e(s[x-1].dot(s[x]),-1,1));l[x].applyMatrix4(p.makeRotationAxis(f,y))}u[x].crossVectors(s[x],l[x])}if(e===!0){let x=Math.acos(_e(l[0].dot(l[t]),-1,1));x/=t,s[0].dot(f.crossVectors(l[0],l[t]))>0&&(x=-x);for(let y=1;y<=t;y++)l[y].applyMatrix4(p.makeRotationAxis(s[y],x*y)),u[y].crossVectors(s[y],l[y])}return{tangents:s,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function x0(){let o=0,t=0,e=0,i=0;function s(l,u,f,p){o=l,t=f,e=-3*l+3*u-2*f-p,i=2*l-2*u+f+p}return{initCatmullRom:function(l,u,f,p,h){s(u,f,h*(f-l),h*(p-u))},initNonuniformCatmullRom:function(l,u,f,p,h,m,v){let _=(u-l)/h-(f-l)/(h+m)+(f-u)/m,x=(f-u)/m-(p-u)/(m+v)+(p-f)/v;_*=m,x*=m,s(u,f,_,x)},calc:function(l){const u=l*l,f=u*l;return o+t*l+e*u+i*f}}}const gf=new H,Dp=new x0,Up=new x0,Lp=new x0;class lT extends oT{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new H){const i=e,s=this.points,l=s.length,u=(l-(this.closed?0:1))*t;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:p===0&&f===l-1&&(f=l-2,p=1);let h,m;this.closed||f>0?h=s[(f-1)%l]:(gf.subVectors(s[0],s[1]).add(s[0]),h=gf);const v=s[f%l],_=s[(f+1)%l];if(this.closed||f+2<l?m=s[(f+2)%l]:(gf.subVectors(s[l-1],s[l-2]).add(s[l-1]),m=gf),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(v),x),b=Math.pow(v.distanceToSquared(_),x),S=Math.pow(_.distanceToSquared(m),x);b<1e-4&&(b=1),y<1e-4&&(y=b),S<1e-4&&(S=b),Dp.initNonuniformCatmullRom(h.x,v.x,_.x,m.x,y,b,S),Up.initNonuniformCatmullRom(h.y,v.y,_.y,m.y,y,b,S),Lp.initNonuniformCatmullRom(h.z,v.z,_.z,m.z,y,b,S)}else this.curveType==="catmullrom"&&(Dp.initCatmullRom(h.x,v.x,_.x,m.x,this.tension),Up.initCatmullRom(h.y,v.y,_.y,m.y,this.tension),Lp.initCatmullRom(h.z,v.z,_.z,m.z,this.tension));return i.set(Dp.calc(p),Up.calc(p),Lp.calc(p)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class S0 extends v0{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new S0(t.radius,t.detail)}}class Zs extends Sn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const l=t/2,u=e/2,f=Math.floor(i),p=Math.floor(s),h=f+1,m=p+1,v=t/f,_=e/p,x=[],y=[],b=[],S=[];for(let M=0;M<m;M++){const E=M*_-u;for(let D=0;D<h;D++){const C=D*v-l;y.push(C,-E,0),b.push(0,0,1),S.push(D/f),S.push(1-M/p)}}for(let M=0;M<p;M++)for(let E=0;E<f;E++){const D=E+h*M,C=E+h*(M+1),U=E+1+h*(M+1),N=E+1+h*M;x.push(D,C,N),x.push(C,U,N)}this.setIndex(x),this.setAttribute("position",new Ve(y,3)),this.setAttribute("normal",new Ve(b,3)),this.setAttribute("uv",new Ve(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Aa extends Sn{constructor(t=1,e=32,i=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const p=Math.min(u+f,Math.PI);let h=0;const m=[],v=new H,_=new H,x=[],y=[],b=[],S=[];for(let M=0;M<=i;M++){const E=[],D=M/i;let C=0;M===0&&u===0?C=.5/e:M===i&&p===Math.PI&&(C=-.5/e);for(let U=0;U<=e;U++){const N=U/e;v.x=-t*Math.cos(s+N*l)*Math.sin(u+D*f),v.y=t*Math.cos(u+D*f),v.z=t*Math.sin(s+N*l)*Math.sin(u+D*f),y.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),S.push(N+C,1-D),E.push(h++)}m.push(E)}for(let M=0;M<i;M++)for(let E=0;E<e;E++){const D=m[M][E+1],C=m[M][E],U=m[M+1][E],N=m[M+1][E+1];(M!==0||u>0)&&x.push(D,C,N),(M!==i-1||p<Math.PI)&&x.push(C,U,N)}this.setIndex(x),this.setAttribute("position",new Ve(y,3)),this.setAttribute("normal",new Ve(b,3)),this.setAttribute("uv",new Ve(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wf extends Sn{constructor(t=1,e=.4,i=12,s=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:l,thetaStart:u,thetaLength:f},i=Math.floor(i),s=Math.floor(s);const p=[],h=[],m=[],v=[],_=new H,x=new H,y=new H;for(let b=0;b<=i;b++){const S=u+b/i*f;for(let M=0;M<=s;M++){const E=M/s*l;x.x=(t+e*Math.cos(S))*Math.cos(E),x.y=(t+e*Math.cos(S))*Math.sin(E),x.z=e*Math.sin(S),h.push(x.x,x.y,x.z),_.x=t*Math.cos(E),_.y=t*Math.sin(E),y.subVectors(x,_).normalize(),m.push(y.x,y.y,y.z),v.push(M/s),v.push(b/i)}}for(let b=1;b<=i;b++)for(let S=1;S<=s;S++){const M=(s+1)*b+S-1,E=(s+1)*(b-1)+S-1,D=(s+1)*(b-1)+S,C=(s+1)*b+S;p.push(M,E,C),p.push(E,D,C)}this.setIndex(p),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Qo(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const s=o[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ai(o){const t={};for(let e=0;e<o.length;e++){const i=Qo(o[e]);for(const s in i)t[s]=i[s]}return t}function cT(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function hy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const uT={clone:Qo,merge:ai};var fT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fT,this.fragmentShader=hT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qo(t.uniforms),this.uniformsGroups=cT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?e.uniforms[s]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[s]={type:"m4",value:u.toArray()}:e.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class dT extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zn extends Br{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ty,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dy extends Zn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class pT extends Br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mT extends Br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Np={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(Xx(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!Xx(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Xx(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class py{constructor(t,e,i){const s=this;let l=!1,u=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(m){f++,l===!1&&s.onStart!==void 0&&s.onStart(m,u,f),l=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,v){return h.push(m,v),this},this.removeHandler=function(m){const v=h.indexOf(m);return v!==-1&&h.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=h.length;v<_;v+=2){const x=h[v],y=h[v+1];if(x.global&&(x.lastIndex=0),x.test(m))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gT=new py;class y0{constructor(t){this.manager=t!==void 0?t:gT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,l){i.load(t,s,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}y0.DEFAULT_MATERIAL_NAME="__DEFAULT";const Lo=new WeakMap;class _T extends y0{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,u=Np.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(t),setTimeout(function(){e&&e(u),l.manager.itemEnd(t)},0);else{let v=Lo.get(u);v===void 0&&(v=[],Lo.set(u,v)),v.push({onLoad:e,onError:s})}return u}const f=bc("img");function p(){m(),e&&e(this);const v=Lo.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onLoad&&x.onLoad(this)}Lo.delete(this),l.manager.itemEnd(t)}function h(v){m(),s&&s(v),Np.remove(`image:${t}`);const _=Lo.get(this)||[];for(let x=0;x<_.length;x++){const y=_[x];y.onError&&y.onError(v)}Lo.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function m(){f.removeEventListener("load",p,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Np.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class M0 extends y0{constructor(t){super(t)}load(t,e,i,s){const l=new Gn,u=new _T(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(f){l.image=f,l.needsUpdate=!0,e!==void 0&&e(l)},i,s),l}}class b0 extends Tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class vT extends b0{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Pp=new qe,Wx=new H,qx=new H;class xT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _0,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Wx.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wx),qx.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qx),e.updateMatrixWorld(),Pp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pp,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Mc||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _f=new H,vf=new Ir,da=new H;class my extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_f,vf,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_f,vf,da.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(_f,vf,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_f,vf,da.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Os=new H,Yx=new xe,jx=new xe;class Yi extends my{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ec*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Os.x,Os.y).multiplyScalar(-t/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Os.x,Os.y).multiplyScalar(-t/Os.z)}getViewSize(t,e){return this.getViewBounds(t,Yx,jx),e.subVectors(jx,Yx)}setViewOffset(t,e,i,s,l,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Go*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*s/p,e-=u.offsetY*i/h,s*=u.width/p,i*=u.height/h}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class E0 extends my{constructor(t=-1,e=1,i=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-t,u=i+t,f=s+e,p=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ST extends xT{constructor(){super(new E0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zx extends b0{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new ST}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class yT extends b0{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const No=-90,Po=1;class MT extends Tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yi(No,Po,t,e);s.layers=this.layers,this.add(s);const l=new Yi(No,Po,t,e);l.layers=this.layers,this.add(l);const u=new Yi(No,Po,t,e);u.layers=this.layers,this.add(u);const f=new Yi(No,Po,t,e);f.layers=this.layers,this.add(f);const p=new Yi(No,Po,t,e);p.layers=this.layers,this.add(p);const h=new Yi(No,Po,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,l,u,f,p]=e;for(const h of e)this.remove(h);if(t===xa)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,h,m]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,1,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,2,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,3,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(i,4,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(v,_,x),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class bT extends Yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ET{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ne("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Kx(o,t,e,i){const s=TT(i);switch(e){case QS:return o*t;case $S:return o*t/s.components*s.byteLength;case l0:return o*t/s.components*s.byteLength;case Zo:return o*t*2/s.components*s.byteLength;case c0:return o*t*2/s.components*s.byteLength;case JS:return o*t*3/s.components*s.byteLength;case Zi:return o*t*4/s.components*s.byteLength;case u0:return o*t*4/s.components*s.byteLength;case Ef:case Tf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Af:case wf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case om:case cm:return Math.max(o,16)*Math.max(t,8)/4;case rm:case lm:return Math.max(o,8)*Math.max(t,8)/2;case um:case fm:case dm:case pm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case hm:case mm:case gm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _m:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case vm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case xm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Sm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ym:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Mm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case bm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Em:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Tm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Am:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case wm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Rm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Cm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Dm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Um:case Lm:case Nm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Pm:case Om:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Fm:case zm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function TT(o){switch(o){case wi:case YS:return{byteLength:1,components:1};case Sc:case jS:case is:return{byteLength:2,components:1};case r0:case o0:return{byteLength:2,components:4};case Ea:case s0:case va:return{byteLength:4,components:1};case ZS:case KS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:i0}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=i0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gy(){let o=null,t=!1,e=null,i=null;function s(l,u){e(l,u),i=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function AT(o){const t=new WeakMap;function e(f,p){const h=f.array,m=f.usage,v=h.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=o.SHORT;else if(h instanceof Uint32Array)x=o.UNSIGNED_INT;else if(h instanceof Int32Array)x=o.INT;else if(h instanceof Int8Array)x=o.BYTE;else if(h instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function i(f,p,h){const m=p.array,v=p.updateRanges;if(o.bindBuffer(h,f),v.length===0)o.bufferSubData(h,0,m);else{v.sort((x,y)=>x.start-y.start);let _=0;for(let x=1;x<v.length;x++){const y=v[_],b=v[x];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++_,v[_]=b)}v.length=_+1;for(let x=0,y=v.length;x<y;x++){const b=v[x];o.bufferSubData(h,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,e(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,p),h.version=f.version}}return{get:s,remove:l,update:u}}var wT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RT=`#ifdef USE_ALPHAHASH
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
#endif`,CT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NT=`#ifdef USE_AOMAP
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
#endif`,PT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OT=`#ifdef USE_BATCHING
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
#endif`,FT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GT=`#ifdef USE_IRIDESCENCE
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
#endif`,HT=`#ifdef USE_BUMPMAP
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
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,YT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ZT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,KT=`#define PI 3.141592653589793
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
} // validated`,QT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JT=`vec3 transformedNormal = objectNormal;
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
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iA="gl_FragColor = linearToOutputTexel( gl_FragColor );",aA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sA=`#ifdef USE_ENVMAP
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
#endif`,rA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oA=`#ifdef USE_ENVMAP
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
#endif`,lA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
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
#endif`,uA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pA=`#ifdef USE_GRADIENTMAP
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
}`,mA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_A=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vA=`uniform bool receiveShadow;
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
#endif`,xA=`#ifdef USE_ENVMAP
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
#endif`,SA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EA=`PhysicalMaterial material;
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
#endif`,TA=`uniform sampler2D dfgLUT;
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
}`,AA=`
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
#endif`,wA=`#if defined( RE_IndirectDiffuse )
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
#endif`,RA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FA=`#if defined( USE_POINTS_UV )
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
#endif`,zA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VA=`#ifdef USE_MORPHTARGETS
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
#endif`,kA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZA=`#ifdef USE_NORMALMAP
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
#endif`,KA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ew=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fw=`float getShadowMask() {
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
}`,hw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mw=`#ifdef USE_SKINNING
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
#endif`,gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_w=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sw=`#ifdef USE_TRANSMISSION
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
#endif`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ww=`uniform sampler2D t2D;
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
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`#include <common>
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
}`,Nw=`#if DEPTH_PACKING == 3200
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
}`,Pw=`#define DISTANCE
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
}`,Ow=`#define DISTANCE
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
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`uniform float scale;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Gw=`#include <common>
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Vw=`#define LAMBERT
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
}`,kw=`#define LAMBERT
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
}`,Xw=`#define MATCAP
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
}`,Ww=`#define MATCAP
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
}`,qw=`#define NORMAL
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
}`,Yw=`#define NORMAL
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
}`,jw=`#define PHONG
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
}`,Zw=`#define PHONG
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
}`,Kw=`#define STANDARD
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
}`,Qw=`#define STANDARD
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
}`,Jw=`#define TOON
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
}`,$w=`#define TOON
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
}`,tR=`uniform float size;
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
}`,eR=`uniform vec3 diffuse;
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
}`,nR=`#include <common>
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
}`,iR=`uniform vec3 color;
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
}`,aR=`uniform float rotation;
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
}`,sR=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:wT,alphahash_pars_fragment:RT,alphamap_fragment:CT,alphamap_pars_fragment:DT,alphatest_fragment:UT,alphatest_pars_fragment:LT,aomap_fragment:NT,aomap_pars_fragment:PT,batching_pars_vertex:OT,batching_vertex:FT,begin_vertex:zT,beginnormal_vertex:IT,bsdfs:BT,iridescence_fragment:GT,bumpmap_pars_fragment:HT,clipping_planes_fragment:VT,clipping_planes_pars_fragment:kT,clipping_planes_pars_vertex:XT,clipping_planes_vertex:WT,color_fragment:qT,color_pars_fragment:YT,color_pars_vertex:jT,color_vertex:ZT,common:KT,cube_uv_reflection_fragment:QT,defaultnormal_vertex:JT,displacementmap_pars_vertex:$T,displacementmap_vertex:tA,emissivemap_fragment:eA,emissivemap_pars_fragment:nA,colorspace_fragment:iA,colorspace_pars_fragment:aA,envmap_fragment:sA,envmap_common_pars_fragment:rA,envmap_pars_fragment:oA,envmap_pars_vertex:lA,envmap_physical_pars_fragment:xA,envmap_vertex:cA,fog_vertex:uA,fog_pars_vertex:fA,fog_fragment:hA,fog_pars_fragment:dA,gradientmap_pars_fragment:pA,lightmap_pars_fragment:mA,lights_lambert_fragment:gA,lights_lambert_pars_fragment:_A,lights_pars_begin:vA,lights_toon_fragment:SA,lights_toon_pars_fragment:yA,lights_phong_fragment:MA,lights_phong_pars_fragment:bA,lights_physical_fragment:EA,lights_physical_pars_fragment:TA,lights_fragment_begin:AA,lights_fragment_maps:wA,lights_fragment_end:RA,logdepthbuf_fragment:CA,logdepthbuf_pars_fragment:DA,logdepthbuf_pars_vertex:UA,logdepthbuf_vertex:LA,map_fragment:NA,map_pars_fragment:PA,map_particle_fragment:OA,map_particle_pars_fragment:FA,metalnessmap_fragment:zA,metalnessmap_pars_fragment:IA,morphinstance_vertex:BA,morphcolor_vertex:GA,morphnormal_vertex:HA,morphtarget_pars_vertex:VA,morphtarget_vertex:kA,normal_fragment_begin:XA,normal_fragment_maps:WA,normal_pars_fragment:qA,normal_pars_vertex:YA,normal_vertex:jA,normalmap_pars_fragment:ZA,clearcoat_normal_fragment_begin:KA,clearcoat_normal_fragment_maps:QA,clearcoat_pars_fragment:JA,iridescence_pars_fragment:$A,opaque_fragment:tw,packing:ew,premultiplied_alpha_fragment:nw,project_vertex:iw,dithering_fragment:aw,dithering_pars_fragment:sw,roughnessmap_fragment:rw,roughnessmap_pars_fragment:ow,shadowmap_pars_fragment:lw,shadowmap_pars_vertex:cw,shadowmap_vertex:uw,shadowmask_pars_fragment:fw,skinbase_vertex:hw,skinning_pars_vertex:dw,skinning_vertex:pw,skinnormal_vertex:mw,specularmap_fragment:gw,specularmap_pars_fragment:_w,tonemapping_fragment:vw,tonemapping_pars_fragment:xw,transmission_fragment:Sw,transmission_pars_fragment:yw,uv_pars_fragment:Mw,uv_pars_vertex:bw,uv_vertex:Ew,worldpos_vertex:Tw,background_vert:Aw,background_frag:ww,backgroundCube_vert:Rw,backgroundCube_frag:Cw,cube_vert:Dw,cube_frag:Uw,depth_vert:Lw,depth_frag:Nw,distance_vert:Pw,distance_frag:Ow,equirect_vert:Fw,equirect_frag:zw,linedashed_vert:Iw,linedashed_frag:Bw,meshbasic_vert:Gw,meshbasic_frag:Hw,meshlambert_vert:Vw,meshlambert_frag:kw,meshmatcap_vert:Xw,meshmatcap_frag:Ww,meshnormal_vert:qw,meshnormal_frag:Yw,meshphong_vert:jw,meshphong_frag:Zw,meshphysical_vert:Kw,meshphysical_frag:Qw,meshtoon_vert:Jw,meshtoon_frag:$w,points_vert:tR,points_frag:eR,shadow_vert:nR,shadow_frag:iR,sprite_vert:aR,sprite_frag:sR},Nt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},ga={basic:{uniforms:ai([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:ai([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:ai([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:ai([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:ai([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new re(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:ai([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:ai([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:ai([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:ai([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:ai([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:ai([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:ai([Nt.common,Nt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:ai([Nt.lights,Nt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ga.physical={uniforms:ai([ga.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const xf={r:0,b:0,g:0},Mr=new Ta,rR=new qe;function oR(o,t,e,i,s,l){const u=new re(0);let f=s===!0?0:1,p,h,m=null,v=0,_=null;function x(E){let D=E.isScene===!0?E.background:null;if(D&&D.isTexture){const C=E.backgroundBlurriness>0;D=t.get(D,C)}return D}function y(E){let D=!1;const C=x(E);C===null?S(u,f):C&&C.isColor&&(S(C,1),D=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?e.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,l),(o.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(E,D){const C=x(D);C&&(C.isCubeTexture||C.mapping===Xf)?(h===void 0&&(h=new Ht(new hn(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Qo(ga.backgroundCube.uniforms),vertexShader:ga.backgroundCube.vertexShader,fragmentShader:ga.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mr.copy(D.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rR.makeRotationFromEuler(Mr)),h.material.toneMapped=we.getTransfer(C.colorSpace)!==Fe,(m!==C||v!==C.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,m=C,v=C.version,_=o.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Ht(new Zs(2,2),new Qi({name:"BackgroundMaterial",uniforms:Qo(ga.background.uniforms),vertexShader:ga.background.vertexShader,fragmentShader:ga.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(C.colorSpace)!==Fe,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||v!==C.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,m=C,v=C.version,_=o.toneMapping),p.layers.enableAll(),E.unshift(p,p.geometry,p.material,0,0,null))}function S(E,D){E.getRGB(xf,hy(o)),e.buffers.color.setClear(xf.r,xf.g,xf.b,D,l)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(E,D=1){u.set(E),f=D,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(E){f=E,S(u,f)},render:y,addToRenderList:b,dispose:M}}function lR(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let l=s,u=!1;function f(F,W,Y,tt,Z){let G=!1;const V=v(F,tt,Y,W);l!==V&&(l=V,h(l.object)),G=x(F,tt,Y,Z),G&&y(F,tt,Y,Z),Z!==null&&t.update(Z,o.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,C(F,W,Y,tt),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return o.createVertexArray()}function h(F){return o.bindVertexArray(F)}function m(F){return o.deleteVertexArray(F)}function v(F,W,Y,tt){const Z=tt.wireframe===!0;let G=i[W.id];G===void 0&&(G={},i[W.id]=G);const V=F.isInstancedMesh===!0?F.id:0;let it=G[V];it===void 0&&(it={},G[V]=it);let ft=it[Y.id];ft===void 0&&(ft={},it[Y.id]=ft);let z=ft[Z];return z===void 0&&(z=_(p()),ft[Z]=z),z}function _(F){const W=[],Y=[],tt=[];for(let Z=0;Z<e;Z++)W[Z]=0,Y[Z]=0,tt[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:tt,object:F,attributes:{},index:null}}function x(F,W,Y,tt){const Z=l.attributes,G=W.attributes;let V=0;const it=Y.getAttributes();for(const ft in it)if(it[ft].location>=0){const et=Z[ft];let ht=G[ft];if(ht===void 0&&(ft==="instanceMatrix"&&F.instanceMatrix&&(ht=F.instanceMatrix),ft==="instanceColor"&&F.instanceColor&&(ht=F.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;V++}return l.attributesNum!==V||l.index!==tt}function y(F,W,Y,tt){const Z={},G=W.attributes;let V=0;const it=Y.getAttributes();for(const ft in it)if(it[ft].location>=0){let et=G[ft];et===void 0&&(ft==="instanceMatrix"&&F.instanceMatrix&&(et=F.instanceMatrix),ft==="instanceColor"&&F.instanceColor&&(et=F.instanceColor));const ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),Z[ft]=ht,V++}l.attributes=Z,l.attributesNum=V,l.index=tt}function b(){const F=l.newAttributes;for(let W=0,Y=F.length;W<Y;W++)F[W]=0}function S(F){M(F,0)}function M(F,W){const Y=l.newAttributes,tt=l.enabledAttributes,Z=l.attributeDivisors;Y[F]=1,tt[F]===0&&(o.enableVertexAttribArray(F),tt[F]=1),Z[F]!==W&&(o.vertexAttribDivisor(F,W),Z[F]=W)}function E(){const F=l.newAttributes,W=l.enabledAttributes;for(let Y=0,tt=W.length;Y<tt;Y++)W[Y]!==F[Y]&&(o.disableVertexAttribArray(Y),W[Y]=0)}function D(F,W,Y,tt,Z,G,V){V===!0?o.vertexAttribIPointer(F,W,Y,Z,G):o.vertexAttribPointer(F,W,Y,tt,Z,G)}function C(F,W,Y,tt){b();const Z=tt.attributes,G=Y.getAttributes(),V=W.defaultAttributeValues;for(const it in G){const ft=G[it];if(ft.location>=0){let z=Z[it];if(z===void 0&&(it==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),it==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),z!==void 0){const et=z.normalized,ht=z.itemSize,bt=t.get(z);if(bt===void 0)continue;const vt=bt.buffer,Ot=bt.type,nt=bt.bytesPerElement,Et=Ot===o.INT||Ot===o.UNSIGNED_INT||z.gpuType===s0;if(z.isInterleavedBufferAttribute){const _t=z.data,Yt=_t.stride,Pt=z.offset;if(_t.isInstancedInterleavedBuffer){for(let Qt=0;Qt<ft.locationSize;Qt++)M(ft.location+Qt,_t.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Qt=0;Qt<ft.locationSize;Qt++)S(ft.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Qt=0;Qt<ft.locationSize;Qt++)D(ft.location+Qt,ht/ft.locationSize,Ot,et,Yt*nt,(Pt+ht/ft.locationSize*Qt)*nt,Et)}else{if(z.isInstancedBufferAttribute){for(let _t=0;_t<ft.locationSize;_t++)M(ft.location+_t,z.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let _t=0;_t<ft.locationSize;_t++)S(ft.location+_t);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let _t=0;_t<ft.locationSize;_t++)D(ft.location+_t,ht/ft.locationSize,Ot,et,ht*nt,ht/ft.locationSize*_t*nt,Et)}}else if(V!==void 0){const et=V[it];if(et!==void 0)switch(et.length){case 2:o.vertexAttrib2fv(ft.location,et);break;case 3:o.vertexAttrib3fv(ft.location,et);break;case 4:o.vertexAttrib4fv(ft.location,et);break;default:o.vertexAttrib1fv(ft.location,et)}}}}E()}function U(){w();for(const F in i){const W=i[F];for(const Y in W){const tt=W[Y];for(const Z in tt){const G=tt[Z];for(const V in G)m(G[V].object),delete G[V];delete tt[Z]}}delete i[F]}}function N(F){if(i[F.id]===void 0)return;const W=i[F.id];for(const Y in W){const tt=W[Y];for(const Z in tt){const G=tt[Z];for(const V in G)m(G[V].object),delete G[V];delete tt[Z]}}delete i[F.id]}function O(F){for(const W in i){const Y=i[W];for(const tt in Y){const Z=Y[tt];if(Z[F.id]===void 0)continue;const G=Z[F.id];for(const V in G)m(G[V].object),delete G[V];delete Z[F.id]}}}function T(F){for(const W in i){const Y=i[W],tt=F.isInstancedMesh===!0?F.id:0,Z=Y[tt];if(Z!==void 0){for(const G in Z){const V=Z[G];for(const it in V)m(V[it].object),delete V[it];delete Z[G]}delete Y[tt],Object.keys(Y).length===0&&delete i[W]}}}function w(){k(),u=!0,l!==s&&(l=s,h(l.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:w,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:S,disableUnusedAttributes:E}}function cR(o,t,e){let i;function s(h){i=h}function l(h,m){o.drawArrays(i,h,m),e.update(m,i,1)}function u(h,m,v){v!==0&&(o.drawArraysInstanced(i,h,m,v),e.update(m,i,v))}function f(h,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,v);let x=0;for(let y=0;y<v;y++)x+=m[y];e.update(x,i,1)}function p(h,m,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<h.length;y++)u(h[y],m[y],_[y]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,v);let y=0;for(let b=0;b<v;b++)y+=m[b]*_[b];e.update(y,i,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function uR(o,t,e,i){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(O){return!(O!==Zi&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const T=O===is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==wi&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==va&&!T)}function p(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const m=p(h);m!==h&&(ne("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),E=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:E,maxVaryings:D,maxFragmentUniforms:C,maxSamples:U,samples:N}}function fR(o){const t=this;let e=null,i=0,s=!1,l=!1;const u=new Ar,f=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||i!==0||s;return s=_,i=v.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){e=m(v,_,0)},this.setState=function(v,_,x){const y=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,M=o.get(v);if(!s||y===null||y.length===0||l&&!S)l?m(null):h();else{const E=l?0:i,D=E*4;let C=M.clippingState||null;p.value=C,C=m(y,_,D,x);for(let U=0;U!==D;++U)C[U]=e[U];M.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function h(){p.value!==e&&(p.value=e,p.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(v,_,x,y){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=p.value,y!==!0||S===null){const M=x+b*4,E=_.matrixWorldInverse;f.getNormalMatrix(E),(S===null||S.length<M)&&(S=new Float32Array(M));for(let D=0,C=x;D!==b;++D,C+=4)u.copy(v[D]).applyMatrix4(E,f),u.normal.toArray(S,C),S[C+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}const Is=4,Qx=[.125,.215,.35,.446,.526,.582],Cr=20,hR=256,cc=new E0,Jx=new re;let Op=null,Fp=0,zp=0,Ip=!1;const dR=new H;class $x{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,l={}){const{size:u=256,position:f=dR}=l;Op=this._renderer.getRenderTarget(),Fp=this._renderer.getActiveCubeFace(),zp=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,i,s,p,f),e>0&&this._blur(p,0,0,e),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Op,Fp,zp),this._renderer.xr.enabled=Ip,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fr||t.mapping===jo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Op=this._renderer.getRenderTarget(),Fp=this._renderer.getActiveCubeFace(),zp=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:is,format:Zi,colorSpace:Ko,depthBuffer:!1},s=tS(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tS(t,e,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pR(l)),this._blurMaterial=gR(l,t,e),this._ggxMaterial=mR(l,t,e)}return s}_compileMaterial(t){const e=new Ht(new Sn,t);this._renderer.compile(e,cc)}_sceneToCubeUV(t,e,i,s,l){const p=new Yi(90,1,e,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Jx),v.toneMapping=ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new hn,new ns({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let M=!1;const E=t.background;E?E.isColor&&(S.color.copy(E),t.background=null,M=!0):(S.color.copy(Jx),M=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(p.up.set(0,h[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+m[D],l.y,l.z)):C===1?(p.up.set(0,0,h[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+m[D],l.z)):(p.up.set(0,h[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+m[D]));const U=this._cubeSize;Oo(s,C*U,D>2?U:0,U,U),v.setRenderTarget(s),M&&v.render(b,p),v.render(t,p)}v.toneMapping=x,v.autoClear=_,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Fr||t.mapping===jo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eS());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Oo(e,0,0,3*p,2*p),i.setRenderTarget(e),i.render(u,cc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(t,l-1,l);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[i];f.material=u;const p=u.uniforms,h=i/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),_=0+h*1.25,x=v*_,{_lodMax:y}=this,b=this._sizeLods[i],S=3*b*(i>y-Is?i-y+Is:0),M=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=y-e,Oo(l,S,M,3*b,2*b),s.setRenderTarget(l),s.render(f,cc),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=y-i,Oo(t,S,M,3*b,2*b),s.setRenderTarget(t),s.render(f,cc)}_blur(t,e,i,s,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,i,s,"latitudinal",l),this._halfBlur(u,t,i,i,s,"longitudinal",l)}_halfBlur(t,e,i,s,l,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[s];v.material=h;const _=h.uniforms,x=this._sizeLods[i]-1,y=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Cr-1),b=l/y,S=isFinite(l)?1+Math.floor(m*b):Cr;S>Cr&&ne(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cr}`);const M=[];let E=0;for(let O=0;O<Cr;++O){const T=O/b,w=Math.exp(-T*T/2);M.push(w),O===0?E+=w:O<S&&(E+=2*w)}for(let O=0;O<M.length;O++)M[O]=M[O]/E;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=M,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:D}=this;_.dTheta.value=y,_.mipInt.value=D-i;const C=this._sizeLods[s],U=3*C*(s>D-Is?s-D+Is:0),N=4*(this._cubeSize-C);Oo(e,U,N,3*C,2*C),p.setRenderTarget(e),p.render(v,cc)}}function pR(o){const t=[],e=[],i=[];let s=o;const l=o-Is+1+Qx.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);t.push(f);let p=1/f;u>o-Is?p=Qx[u-o+Is-1]:u===0&&(p=0),e.push(p);const h=1/(f-2),m=-h,v=1+h,_=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,y=6,b=3,S=2,M=1,E=new Float32Array(b*y*x),D=new Float32Array(S*y*x),C=new Float32Array(M*y*x);for(let N=0;N<x;N++){const O=N%3*2/3-1,T=N>2?0:-1,w=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];E.set(w,b*y*N),D.set(_,S*y*N);const k=[N,N,N,N,N,N];C.set(k,M*y*N)}const U=new Sn;U.setAttribute("position",new Hn(E,b)),U.setAttribute("uv",new Hn(D,S)),U.setAttribute("faceIndex",new Hn(C,M)),i.push(new Ht(U,null)),s>Is&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function tS(o,t,e){const i=new Ma(o,t,e);return i.texture.mapping=Xf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(o,t,e,i,s){o.viewport.set(t,e,i,s),o.scissor.set(t,e,i,s)}function mR(o,t,e){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qf(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function gR(o,t,e){const i=new Float32Array(Cr),s=new H(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qf(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function eS(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function nS(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function qf(){return`

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
	`}class _y extends Ma{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new uy(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),l=new Qi({name:"CubemapFromEquirect",uniforms:Qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:ts});l.uniforms.tEquirect.value=e;const u=new Ht(s,l),f=e.minFilter;return e.minFilter===zs&&(e.minFilter=Bn),new MT(1,10,this).update(t,u),e.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,i,s);t.setRenderTarget(l)}}function _R(o){let t=new WeakMap,e=new WeakMap,i=null;function s(_,x=!1){return _==null?null:x?u(_):l(_)}function l(_){if(_&&_.isTexture){const x=_.mapping;if(x===np||x===ip)if(t.has(_)){const y=t.get(_).texture;return f(y,_.mapping)}else{const y=_.image;if(y&&y.height>0){const b=new _y(y.height);return b.fromEquirectangularTexture(o,_),t.set(_,b),_.addEventListener("dispose",h),f(b.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,y=x===np||x===ip,b=x===Fr||x===jo;if(y||b){let S=e.get(_);const M=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return i===null&&(i=new $x(o)),S=y?i.fromEquirectangular(_,S):i.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,e.set(_,S),S.texture;if(S!==void 0)return S.texture;{const E=_.image;return y&&E&&E.height>0||b&&E&&p(E)?(i===null&&(i=new $x(o)),S=y?i.fromEquirectangular(_):i.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,e.set(_,S),_.addEventListener("dispose",m),S.texture):null}}}return _}function f(_,x){return x===np?_.mapping=Fr:x===ip&&(_.mapping=jo),_}function p(_){let x=0;const y=6;for(let b=0;b<y;b++)_[b]!==void 0&&x++;return x===y}function h(_){const x=_.target;x.removeEventListener("dispose",h);const y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function v(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:v}}function vR(o){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=o.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Nf("WebGLRenderer: "+i+" extension not supported."),s}}}function xR(o,t,e,i){const s={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const y in _.attributes)t.remove(_.attributes[y]);_.removeEventListener("dispose",u),delete s[_.id];const x=l.get(_);x&&(t.remove(x),l.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function f(v,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,e.memory.geometries++),_}function p(v){const _=v.attributes;for(const x in _)t.update(_[x],o.ARRAY_BUFFER)}function h(v){const _=[],x=v.index,y=v.attributes.position;let b=0;if(y===void 0)return;if(x!==null){const E=x.array;b=x.version;for(let D=0,C=E.length;D<C;D+=3){const U=E[D+0],N=E[D+1],O=E[D+2];_.push(U,N,N,O,O,U)}}else{const E=y.array;b=y.version;for(let D=0,C=E.length/3-1;D<C;D+=3){const U=D+0,N=D+1,O=D+2;_.push(U,N,N,O,O,U)}}const S=new(y.count>=65535?ry:sy)(_,1);S.version=b;const M=l.get(v);M&&t.remove(M),l.set(v,S)}function m(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:m}}function SR(o,t,e){let i;function s(_){i=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function p(_,x){o.drawElements(i,x,l,_*u),e.update(x,i,1)}function h(_,x,y){y!==0&&(o.drawElementsInstanced(i,x,l,_*u,y),e.update(x,i,y))}function m(_,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,_,0,y);let S=0;for(let M=0;M<y;M++)S+=x[M];e.update(S,i,1)}function v(_,x,y,b){if(y===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<_.length;M++)h(_[M]/u,x[M],b[M]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,l,_,0,b,0,y);let M=0;for(let E=0;E<y;E++)M+=x[E]*b[E];e.update(M,i,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function yR(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(e.calls++,u){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:Le("WebGLInfo: Unknown draw mode:",u);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function MR(o,t,e){const i=new WeakMap,s=new ln;function l(u,f,p){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=i.get(f);if(_===void 0||_.count!==v){let k=function(){T.dispose(),i.delete(f),f.removeEventListener("dispose",k)};var x=k;_!==void 0&&_.texture.dispose();const y=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;y===!0&&(C=1),b===!0&&(C=2),S===!0&&(C=3);let U=f.attributes.position.count*C,N=1;U>t.maxTextureSize&&(N=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const O=new Float32Array(U*N*4*v),T=new ny(O,U,N,v);T.type=va,T.needsUpdate=!0;const w=C*4;for(let F=0;F<v;F++){const W=M[F],Y=E[F],tt=D[F],Z=U*N*4*F;for(let G=0;G<W.count;G++){const V=G*w;y===!0&&(s.fromBufferAttribute(W,G),O[Z+V+0]=s.x,O[Z+V+1]=s.y,O[Z+V+2]=s.z,O[Z+V+3]=0),b===!0&&(s.fromBufferAttribute(Y,G),O[Z+V+4]=s.x,O[Z+V+5]=s.y,O[Z+V+6]=s.z,O[Z+V+7]=0),S===!0&&(s.fromBufferAttribute(tt,G),O[Z+V+8]=s.x,O[Z+V+9]=s.y,O[Z+V+10]=s.z,O[Z+V+11]=tt.itemSize===4?s.w:1)}}_={count:v,texture:T,size:new xe(U,N)},i.set(f,_),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,e);else{let y=0;for(let S=0;S<h.length;S++)y+=h[S];const b=f.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",h)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:l}}function bR(o,t,e,i,s){let l=new WeakMap;function u(h){const m=s.render.frame,v=h.geometry,_=t.get(h,v);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==m&&(e.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,o.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function p(h){const m=h.target;m.removeEventListener("dispose",p),i.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:u,dispose:f}}const ER={[GS]:"LINEAR_TONE_MAPPING",[HS]:"REINHARD_TONE_MAPPING",[VS]:"CINEON_TONE_MAPPING",[a0]:"ACES_FILMIC_TONE_MAPPING",[XS]:"AGX_TONE_MAPPING",[WS]:"NEUTRAL_TONE_MAPPING",[kS]:"CUSTOM_TONE_MAPPING"};function TR(o,t,e,i,s){const l=new Ma(t,e,{type:o,depthBuffer:i,stencilBuffer:s}),u=new Ma(t,e,{type:is,depthBuffer:!1,stencilBuffer:!1}),f=new Sn;f.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ve([0,2,0,0,2,0],2));const p=new dT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ht(f,p),m=new E0(-1,1,1,-1,0,1);let v=null,_=null,x=!1,y,b=null,S=[],M=!1;this.setSize=function(E,D){l.setSize(E,D),u.setSize(E,D);for(let C=0;C<S.length;C++){const U=S[C];U.setSize&&U.setSize(E,D)}},this.setEffects=function(E){S=E,M=S.length>0&&S[0].isRenderPass===!0;const D=l.width,C=l.height;for(let U=0;U<S.length;U++){const N=S[U];N.setSize&&N.setSize(D,C)}},this.begin=function(E,D){if(x||E.toneMapping===ya&&S.length===0)return!1;if(b=D,D!==null){const C=D.width,U=D.height;(l.width!==C||l.height!==U)&&this.setSize(C,U)}return M===!1&&E.setRenderTarget(l),y=E.toneMapping,E.toneMapping=ya,!0},this.hasRenderPass=function(){return M},this.end=function(E,D){E.toneMapping=y,x=!0;let C=l,U=u;for(let N=0;N<S.length;N++){const O=S[N];if(O.enabled!==!1&&(O.render(E,U,C,D),O.needsSwap!==!1)){const T=C;C=U,U=T}}if(v!==E.outputColorSpace||_!==E.toneMapping){v=E.outputColorSpace,_=E.toneMapping,p.defines={},we.getTransfer(v)===Fe&&(p.defines.SRGB_TRANSFER="");const N=ER[_];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,E.setRenderTarget(b),E.render(h,m),b=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const vy=new Gn,Gm=new Tc(1,1),xy=new ny,Sy=new BE,yy=new uy,iS=[],aS=[],sS=new Float32Array(16),rS=new Float32Array(9),oS=new Float32Array(4);function rl(o,t,e){const i=o[0];if(i<=0||i>0)return o;const s=t*e;let l=iS[s];if(l===void 0&&(l=new Float32Array(s),iS[s]=l),t!==0){i.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=e,o[u].toArray(l,f)}return l}function An(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function wn(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function Yf(o,t){let e=aS[t];e===void 0&&(e=new Int32Array(t),aS[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function AR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function wR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;o.uniform2fv(this.addr,t),wn(e,t)}}function RR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(An(e,t))return;o.uniform3fv(this.addr,t),wn(e,t)}}function CR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;o.uniform4fv(this.addr,t),wn(e,t)}}function DR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(An(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),wn(e,t)}else{if(An(e,i))return;oS.set(i),o.uniformMatrix2fv(this.addr,!1,oS),wn(e,i)}}function UR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(An(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),wn(e,t)}else{if(An(e,i))return;rS.set(i),o.uniformMatrix3fv(this.addr,!1,rS),wn(e,i)}}function LR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(An(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),wn(e,t)}else{if(An(e,i))return;sS.set(i),o.uniformMatrix4fv(this.addr,!1,sS),wn(e,i)}}function NR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function PR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;o.uniform2iv(this.addr,t),wn(e,t)}}function OR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;o.uniform3iv(this.addr,t),wn(e,t)}}function FR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;o.uniform4iv(this.addr,t),wn(e,t)}}function zR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function IR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;o.uniform2uiv(this.addr,t),wn(e,t)}}function BR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;o.uniform3uiv(this.addr,t),wn(e,t)}}function GR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;o.uniform4uiv(this.addr,t),wn(e,t)}}function HR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Gm.compareFunction=e.isReversedDepthBuffer()?h0:f0,l=Gm):l=vy,e.setTexture2D(t||l,s)}function VR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Sy,s)}function kR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yy,s)}function XR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xy,s)}function WR(o){switch(o){case 5126:return AR;case 35664:return wR;case 35665:return RR;case 35666:return CR;case 35674:return DR;case 35675:return UR;case 35676:return LR;case 5124:case 35670:return NR;case 35667:case 35671:return PR;case 35668:case 35672:return OR;case 35669:case 35673:return FR;case 5125:return zR;case 36294:return IR;case 36295:return BR;case 36296:return GR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return VR;case 35680:case 36300:case 36308:case 36293:return kR;case 36289:case 36303:case 36311:case 36292:return XR}}function qR(o,t){o.uniform1fv(this.addr,t)}function YR(o,t){const e=rl(t,this.size,2);o.uniform2fv(this.addr,e)}function jR(o,t){const e=rl(t,this.size,3);o.uniform3fv(this.addr,e)}function ZR(o,t){const e=rl(t,this.size,4);o.uniform4fv(this.addr,e)}function KR(o,t){const e=rl(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function QR(o,t){const e=rl(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function JR(o,t){const e=rl(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function $R(o,t){o.uniform1iv(this.addr,t)}function t2(o,t){o.uniform2iv(this.addr,t)}function e2(o,t){o.uniform3iv(this.addr,t)}function n2(o,t){o.uniform4iv(this.addr,t)}function i2(o,t){o.uniform1uiv(this.addr,t)}function a2(o,t){o.uniform2uiv(this.addr,t)}function s2(o,t){o.uniform3uiv(this.addr,t)}function r2(o,t){o.uniform4uiv(this.addr,t)}function o2(o,t,e){const i=this.cache,s=t.length,l=Yf(e,s);An(i,l)||(o.uniform1iv(this.addr,l),wn(i,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=Gm:u=vy;for(let f=0;f!==s;++f)e.setTexture2D(t[f]||u,l[f])}function l2(o,t,e){const i=this.cache,s=t.length,l=Yf(e,s);An(i,l)||(o.uniform1iv(this.addr,l),wn(i,l));for(let u=0;u!==s;++u)e.setTexture3D(t[u]||Sy,l[u])}function c2(o,t,e){const i=this.cache,s=t.length,l=Yf(e,s);An(i,l)||(o.uniform1iv(this.addr,l),wn(i,l));for(let u=0;u!==s;++u)e.setTextureCube(t[u]||yy,l[u])}function u2(o,t,e){const i=this.cache,s=t.length,l=Yf(e,s);An(i,l)||(o.uniform1iv(this.addr,l),wn(i,l));for(let u=0;u!==s;++u)e.setTexture2DArray(t[u]||xy,l[u])}function f2(o){switch(o){case 5126:return qR;case 35664:return YR;case 35665:return jR;case 35666:return ZR;case 35674:return KR;case 35675:return QR;case 35676:return JR;case 5124:case 35670:return $R;case 35667:case 35671:return t2;case 35668:case 35672:return e2;case 35669:case 35673:return n2;case 5125:return i2;case 36294:return a2;case 36295:return s2;case 36296:return r2;case 35678:case 36198:case 36298:case 36306:case 35682:return o2;case 35679:case 36299:case 36307:return l2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return u2}}class h2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=WR(e.type)}}class d2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f2(e.type)}}class p2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(t,e[f.id],i)}}}const Bp=/(\w+)(\])?(\[|\.)?/g;function lS(o,t){o.seq.push(t),o.map[t.id]=t}function m2(o,t,e){const i=o.name,s=i.length;for(Bp.lastIndex=0;;){const l=Bp.exec(i),u=Bp.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===s){lS(e,h===void 0?new h2(f,o,t):new d2(f,o,t));break}else{let v=e.map[f];v===void 0&&(v=new p2(f),lS(e,v)),e=v}}}class Rf{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const f=t.getActiveUniform(e,u),p=t.getUniformLocation(e,f.name);m2(f,p,this)}const s=[],l=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(t,e,i,s){const l=this.map[e];l!==void 0&&l.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let l=0,u=e.length;l!==u;++l){const f=e[l],p=i[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,l=t.length;s!==l;++s){const u=t[s];u.id in e&&i.push(u)}return i}}function cS(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}const g2=37297;let _2=0;function v2(o,t){const e=o.split(`
`),i=[],s=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let u=s;u<l;u++){const f=u+1;i.push(`${f===t?">":" "} ${f}: ${e[u]}`)}return i.join(`
`)}const uS=new pe;function x2(o){we._getMatrix(uS,we.workingColorSpace,o);const t=`mat3( ${uS.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(o)){case Lf:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function fS(o,t,e){const i=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(i&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return e.toUpperCase()+`

`+l+`

`+v2(o.getShaderSource(t),f)}else return l}function S2(o,t){const e=x2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const y2={[GS]:"Linear",[HS]:"Reinhard",[VS]:"Cineon",[a0]:"ACESFilmic",[XS]:"AgX",[WS]:"Neutral",[kS]:"Custom"};function M2(o,t){const e=y2[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sf=new H;function b2(){we.getLuminanceCoefficients(Sf);const o=Sf.x.toFixed(4),t=Sf.y.toFixed(4),e=Sf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dc).join(`
`)}function T2(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function A2(o,t){const e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const l=o.getActiveAttrib(t,s),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[u]={type:l.type,location:o.getAttribLocation(t,u),locationSize:f}}return e}function dc(o){return o!==""}function hS(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const w2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hm(o){return o.replace(w2,C2)}const R2=new Map;function C2(o,t){let e=me[t];if(e===void 0){const i=R2.get(t);if(i!==void 0)e=me[i],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hm(e)}const D2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pS(o){return o.replace(D2,U2)}function U2(o,t,e,i){let s="";for(let l=parseInt(t);l<parseInt(e);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function mS(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const L2={[bf]:"SHADOWMAP_TYPE_PCF",[hc]:"SHADOWMAP_TYPE_VSM"};function N2(o){return L2[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const P2={[Fr]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE",[Xf]:"ENVMAP_TYPE_CUBE_UV"};function O2(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":P2[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const F2={[jo]:"ENVMAP_MODE_REFRACTION"};function z2(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":F2[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I2={[BS]:"ENVMAP_BLENDING_MULTIPLY",[nE]:"ENVMAP_BLENDING_MIX",[iE]:"ENVMAP_BLENDING_ADD"};function B2(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":I2[o.combine]||"ENVMAP_BLENDING_NONE"}function G2(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function H2(o,t,e,i){const s=o.getContext(),l=e.defines;let u=e.vertexShader,f=e.fragmentShader;const p=N2(e),h=O2(e),m=z2(e),v=B2(e),_=G2(e),x=E2(e),y=T2(l),b=s.createProgram();let S,M,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(dc).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(dc).join(`
`),M.length>0&&(M+=`
`)):(S=[mS(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dc).join(`
`),M=[mS(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ya?"#define TONE_MAPPING":"",e.toneMapping!==ya?me.tonemapping_pars_fragment:"",e.toneMapping!==ya?M2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,S2("linearToOutputTexel",e.outputColorSpace),b2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dc).join(`
`)),u=Hm(u),u=hS(u,e),u=dS(u,e),f=Hm(f),f=hS(f,e),f=dS(f,e),u=pS(u),f=pS(f),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",e.glslVersion===Sx?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const D=E+S+u,C=E+M+f,U=cS(s,s.VERTEX_SHADER,D),N=cS(s,s.FRAGMENT_SHADER,C);s.attachShader(b,U),s.attachShader(b,N),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function O(F){if(o.debug.checkShaderErrors){const W=s.getProgramInfoLog(b)||"",Y=s.getShaderInfoLog(U)||"",tt=s.getShaderInfoLog(N)||"",Z=W.trim(),G=Y.trim(),V=tt.trim();let it=!0,ft=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,b,U,N);else{const z=fS(s,U,"vertex"),et=fS(s,N,"fragment");Le("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Z+`
`+z+`
`+et)}else Z!==""?ne("WebGLProgram: Program Info Log:",Z):(G===""||V==="")&&(ft=!1);ft&&(F.diagnostics={runnable:it,programLog:Z,vertexShader:{log:G,prefix:S},fragmentShader:{log:V,prefix:M}})}s.deleteShader(U),s.deleteShader(N),T=new Rf(s,b),w=A2(s,b)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(b,g2)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_2++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=N,this}let V2=0;class k2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(t);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new X2(t),e.set(t,i)),i}}class X2{constructor(t){this.id=V2++,this.code=t,this.usedTimes=0}}function W2(o,t,e,i,s,l){const u=new iy,f=new k2,p=new Set,h=[],m=new Map,v=i.logarithmicDepthBuffer;let _=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,w,k,F,W){const Y=F.fog,tt=W.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,V=t.get(T.envMap||Z,G),it=V&&V.mapping===Xf?V.image.height:null,ft=x[T.type];T.precision!==null&&(_=i.getMaxPrecision(T.precision),_!==T.precision&&ne("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const z=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,et=z!==void 0?z.length:0;let ht=0;tt.morphAttributes.position!==void 0&&(ht=1),tt.morphAttributes.normal!==void 0&&(ht=2),tt.morphAttributes.color!==void 0&&(ht=3);let bt,vt,Ot,nt;if(ft){const Ce=ga[ft];bt=Ce.vertexShader,vt=Ce.fragmentShader}else bt=T.vertexShader,vt=T.fragmentShader,f.update(T),Ot=f.getVertexShaderID(T),nt=f.getFragmentShaderID(T);const Et=o.getRenderTarget(),_t=o.state.buffers.depth.getReversed(),Yt=W.isInstancedMesh===!0,Pt=W.isBatchedMesh===!0,Qt=!!T.map,Ye=!!T.matcap,ue=!!V,be=!!T.aoMap,Re=!!T.lightMap,ae=!!T.bumpMap,We=!!T.normalMap,X=!!T.displacementMap,je=!!T.emissiveMap,Ee=!!T.metalnessMap,Ne=!!T.roughnessMap,jt=T.anisotropy>0,I=T.clearcoat>0,R=T.dispersion>0,Q=T.iridescence>0,pt=T.sheen>0,xt=T.transmission>0,ut=jt&&!!T.anisotropyMap,Xt=I&&!!T.clearcoatMap,Rt=I&&!!T.clearcoatNormalMap,Jt=I&&!!T.clearcoatRoughnessMap,te=Q&&!!T.iridescenceMap,Tt=Q&&!!T.iridescenceThicknessMap,yt=pt&&!!T.sheenColorMap,Wt=pt&&!!T.sheenRoughnessMap,zt=!!T.specularMap,Ut=!!T.specularColorMap,fe=!!T.specularIntensityMap,q=xt&&!!T.transmissionMap,Ct=xt&&!!T.thicknessMap,At=!!T.gradientMap,Ft=!!T.alphaMap,Mt=T.alphaTest>0,ct=!!T.alphaHash,Bt=!!T.extensions;let se=ya;T.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(se=o.toneMapping);const Oe={shaderID:ft,shaderType:T.type,shaderName:T.name,vertexShader:bt,fragmentShader:vt,defines:T.defines,customVertexShaderID:Ot,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Pt,batchingColor:Pt&&W._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&W.instanceColor!==null,instancingMorph:Yt&&W.morphTexture!==null,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Ko,alphaToCoverage:!!T.alphaToCoverage,map:Qt,matcap:Ye,envMap:ue,envMapMode:ue&&V.mapping,envMapCubeUVHeight:it,aoMap:be,lightMap:Re,bumpMap:ae,normalMap:We,displacementMap:X,emissiveMap:je,normalMapObjectSpace:We&&T.normalMapType===rE,normalMapTangentSpace:We&&T.normalMapType===ty,metalnessMap:Ee,roughnessMap:Ne,anisotropy:jt,anisotropyMap:ut,clearcoat:I,clearcoatMap:Xt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Jt,dispersion:R,iridescence:Q,iridescenceMap:te,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:yt,sheenRoughnessMap:Wt,specularMap:zt,specularColorMap:Ut,specularIntensityMap:fe,transmission:xt,transmissionMap:q,thicknessMap:Ct,gradientMap:At,opaque:T.transparent===!1&&T.blending===Vs&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:ct,combine:T.combine,mapUv:Qt&&y(T.map.channel),aoMapUv:be&&y(T.aoMap.channel),lightMapUv:Re&&y(T.lightMap.channel),bumpMapUv:ae&&y(T.bumpMap.channel),normalMapUv:We&&y(T.normalMap.channel),displacementMapUv:X&&y(T.displacementMap.channel),emissiveMapUv:je&&y(T.emissiveMap.channel),metalnessMapUv:Ee&&y(T.metalnessMap.channel),roughnessMapUv:Ne&&y(T.roughnessMap.channel),anisotropyMapUv:ut&&y(T.anisotropyMap.channel),clearcoatMapUv:Xt&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&y(T.sheenRoughnessMap.channel),specularMapUv:zt&&y(T.specularMap.channel),specularColorMapUv:Ut&&y(T.specularColorMap.channel),specularIntensityMapUv:fe&&y(T.specularIntensityMap.channel),transmissionMapUv:q&&y(T.transmissionMap.channel),thicknessMapUv:Ct&&y(T.thicknessMap.channel),alphaMapUv:Ft&&y(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(We||jt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!tt.attributes.uv&&(Qt||Ft),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||tt.attributes.normal===void 0&&We===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:_t,skinning:W.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:Qt&&T.map.isVideoTexture===!0&&we.getTransfer(T.map.colorSpace)===Fe,decodeVideoTextureEmissive:je&&T.emissiveMap.isVideoTexture===!0&&we.getTransfer(T.emissiveMap.colorSpace)===Fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===li,flipSided:T.side===ci,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Bt&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&T.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function S(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)w.push(k),w.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(M(w,T),E(w,T),w.push(o.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function M(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function E(T,w){u.disableAll(),w.instancing&&u.enable(0),w.instancingColor&&u.enable(1),w.instancingMorph&&u.enable(2),w.matcap&&u.enable(3),w.envMap&&u.enable(4),w.normalMapObjectSpace&&u.enable(5),w.normalMapTangentSpace&&u.enable(6),w.clearcoat&&u.enable(7),w.iridescence&&u.enable(8),w.alphaTest&&u.enable(9),w.vertexColors&&u.enable(10),w.vertexAlphas&&u.enable(11),w.vertexUv1s&&u.enable(12),w.vertexUv2s&&u.enable(13),w.vertexUv3s&&u.enable(14),w.vertexTangents&&u.enable(15),w.anisotropy&&u.enable(16),w.alphaHash&&u.enable(17),w.batching&&u.enable(18),w.dispersion&&u.enable(19),w.batchingColor&&u.enable(20),w.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),w.fog&&u.enable(0),w.useFog&&u.enable(1),w.flatShading&&u.enable(2),w.logarithmicDepthBuffer&&u.enable(3),w.reversedDepthBuffer&&u.enable(4),w.skinning&&u.enable(5),w.morphTargets&&u.enable(6),w.morphNormals&&u.enable(7),w.morphColors&&u.enable(8),w.premultipliedAlpha&&u.enable(9),w.shadowMapEnabled&&u.enable(10),w.doubleSided&&u.enable(11),w.flipSided&&u.enable(12),w.useDepthPacking&&u.enable(13),w.dithering&&u.enable(14),w.transmission&&u.enable(15),w.sheen&&u.enable(16),w.opaque&&u.enable(17),w.pointsUvs&&u.enable(18),w.decodeVideoTexture&&u.enable(19),w.decodeVideoTextureEmissive&&u.enable(20),w.alphaToCoverage&&u.enable(21),T.push(u.mask)}function D(T){const w=x[T.type];let k;if(w){const F=ga[w];k=uT.clone(F.uniforms)}else k=T.uniforms;return k}function C(T,w){let k=m.get(w);return k!==void 0?++k.usedTimes:(k=new H2(o,w,T,s),h.push(k),m.set(w,k)),k}function U(T){if(--T.usedTimes===0){const w=h.indexOf(T);h[w]=h[h.length-1],h.pop(),m.delete(T.cacheKey),T.destroy()}}function N(T){f.remove(T)}function O(){f.dispose()}return{getParameters:b,getProgramCacheKey:S,getUniforms:D,acquireProgram:C,releaseProgram:U,releaseShaderCache:N,programs:h,dispose:O}}function q2(){let o=new WeakMap;function t(u){return o.has(u)}function e(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function i(u){o.delete(u)}function s(u,f,p){o.get(u)[f]=p}function l(){o=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:l}}function Y2(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function gS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function _S(){const o=[];let t=0;const e=[],i=[],s=[];function l(){t=0,e.length=0,i.length=0,s.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function f(_,x,y,b,S,M){let E=o[t];return E===void 0?(E={id:_.id,object:_,geometry:x,material:y,materialVariant:u(_),groupOrder:b,renderOrder:_.renderOrder,z:S,group:M},o[t]=E):(E.id=_.id,E.object=_,E.geometry=x,E.material=y,E.materialVariant=u(_),E.groupOrder=b,E.renderOrder=_.renderOrder,E.z=S,E.group=M),t++,E}function p(_,x,y,b,S,M){const E=f(_,x,y,b,S,M);y.transmission>0?i.push(E):y.transparent===!0?s.push(E):e.push(E)}function h(_,x,y,b,S,M){const E=f(_,x,y,b,S,M);y.transmission>0?i.unshift(E):y.transparent===!0?s.unshift(E):e.unshift(E)}function m(_,x){e.length>1&&e.sort(_||Y2),i.length>1&&i.sort(x||gS),s.length>1&&s.sort(x||gS)}function v(){for(let _=t,x=o.length;_<x;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:s,init:l,push:p,unshift:h,finish:v,sort:m}}function j2(){let o=new WeakMap;function t(i,s){const l=o.get(i);let u;return l===void 0?(u=new _S,o.set(i,[u])):s>=l.length?(u=new _S,l.push(u)):u=l[s],u}function e(){o=new WeakMap}return{get:t,dispose:e}}function Z2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new re};break;case"SpotLight":e={position:new H,direction:new H,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new H,halfWidth:new H,halfHeight:new H};break}return o[t.id]=e,e}}}function K2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Q2=0;function J2(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function $2(o){const t=new Z2,e=K2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new H);const s=new H,l=new qe,u=new qe;function f(h){let m=0,v=0,_=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let x=0,y=0,b=0,S=0,M=0,E=0,D=0,C=0,U=0,N=0,O=0;h.sort(J2);for(let w=0,k=h.length;w<k;w++){const F=h[w],W=F.color,Y=F.intensity,tt=F.distance;let Z=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Zo?Z=F.shadow.map.texture:Z=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)m+=W.r*Y,v+=W.g*Y,_+=W.b*Y;else if(F.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(F.sh.coefficients[G],Y);O++}else if(F.isDirectionalLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const V=F.shadow,it=e.get(F);it.shadowIntensity=V.intensity,it.shadowBias=V.bias,it.shadowNormalBias=V.normalBias,it.shadowRadius=V.radius,it.shadowMapSize=V.mapSize,i.directionalShadow[x]=it,i.directionalShadowMap[x]=Z,i.directionalShadowMatrix[x]=F.shadow.matrix,E++}i.directional[x]=G,x++}else if(F.isSpotLight){const G=t.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(W).multiplyScalar(Y),G.distance=tt,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,i.spot[b]=G;const V=F.shadow;if(F.map&&(i.spotLightMap[U]=F.map,U++,V.updateMatrices(F),F.castShadow&&N++),i.spotLightMatrix[b]=V.matrix,F.castShadow){const it=e.get(F);it.shadowIntensity=V.intensity,it.shadowBias=V.bias,it.shadowNormalBias=V.normalBias,it.shadowRadius=V.radius,it.shadowMapSize=V.mapSize,i.spotShadow[b]=it,i.spotShadowMap[b]=Z,C++}b++}else if(F.isRectAreaLight){const G=t.get(F);G.color.copy(W).multiplyScalar(Y),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),i.rectArea[S]=G,S++}else if(F.isPointLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const V=F.shadow,it=e.get(F);it.shadowIntensity=V.intensity,it.shadowBias=V.bias,it.shadowNormalBias=V.normalBias,it.shadowRadius=V.radius,it.shadowMapSize=V.mapSize,it.shadowCameraNear=V.camera.near,it.shadowCameraFar=V.camera.far,i.pointShadow[y]=it,i.pointShadowMap[y]=Z,i.pointShadowMatrix[y]=F.shadow.matrix,D++}i.point[y]=G,y++}else if(F.isHemisphereLight){const G=t.get(F);G.skyColor.copy(F.color).multiplyScalar(Y),G.groundColor.copy(F.groundColor).multiplyScalar(Y),i.hemi[M]=G,M++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Nt.LTC_FLOAT_1,i.rectAreaLTC2=Nt.LTC_FLOAT_2):(i.rectAreaLTC1=Nt.LTC_HALF_1,i.rectAreaLTC2=Nt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=v,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==x||T.pointLength!==y||T.spotLength!==b||T.rectAreaLength!==S||T.hemiLength!==M||T.numDirectionalShadows!==E||T.numPointShadows!==D||T.numSpotShadows!==C||T.numSpotMaps!==U||T.numLightProbes!==O)&&(i.directional.length=x,i.spot.length=b,i.rectArea.length=S,i.point.length=y,i.hemi.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=C+U-N,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=O,T.directionalLength=x,T.pointLength=y,T.spotLength=b,T.rectAreaLength=S,T.hemiLength=M,T.numDirectionalShadows=E,T.numPointShadows=D,T.numSpotShadows=C,T.numSpotMaps=U,T.numLightProbes=O,i.version=Q2++)}function p(h,m){let v=0,_=0,x=0,y=0,b=0;const S=m.matrixWorldInverse;for(let M=0,E=h.length;M<E;M++){const D=h[M];if(D.isDirectionalLight){const C=i.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),v++}else if(D.isSpotLight){const C=i.spot[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const C=i.rectArea[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(D.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),y++}else if(D.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),_++}else if(D.isHemisphereLight){const C=i.hemi[b];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),b++}}}return{setup:f,setupView:p,state:i}}function vS(o){const t=new $2(o),e=[],i=[];function s(m){h.camera=m,e.length=0,i.length=0}function l(m){e.push(m)}function u(m){i.push(m)}function f(){t.setup(e)}function p(m){t.setupView(e,m)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function tC(o){let t=new WeakMap;function e(s,l=0){const u=t.get(s);let f;return u===void 0?(f=new vS(o),t.set(s,[f])):l>=u.length?(f=new vS(o),u.push(f)):f=u[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const eC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nC=`uniform sampler2D shadow_pass;
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
}`,iC=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],aC=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],xS=new qe,uc=new H,Gp=new H;function sC(o,t,e){let i=new _0;const s=new xe,l=new xe,u=new ln,f=new pT,p=new mT,h={},m=e.maxTextureSize,v={[Ws]:ci,[ci]:Ws,[li]:li},_=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:eC,fragmentShader:nC}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const y=new Sn;y.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ht(y,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bf;let M=this.type;this.render=function(N,O,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===zb&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=bf);const w=o.getRenderTarget(),k=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),W=o.state;W.setBlending(ts),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=M!==this.type;Y&&O.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(Z=>Z.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,Z=N.length;tt<Z;tt++){const G=N[tt],V=G.shadow;if(V===void 0){ne("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const it=V.getFrameExtents();s.multiply(it),l.copy(V.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/it.x),s.x=l.x*it.x,V.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/it.y),s.y=l.y*it.y,V.mapSize.y=l.y));const ft=o.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ft,V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===hc){if(G.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ma(s.x,s.y,{format:Zo,type:is,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new Tc(s.x,s.y,va),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=as,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=In,V.map.depthTexture.magFilter=In}else G.isPointLight?(V.map=new _y(s.x),V.map.depthTexture=new sT(s.x,Ea)):(V.map=new Ma(s.x,s.y),V.map.depthTexture=new Tc(s.x,s.y,Ea)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=as,this.type===bf?(V.map.depthTexture.compareFunction=ft?h0:f0,V.map.depthTexture.minFilter=Bn,V.map.depthTexture.magFilter=Bn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=In,V.map.depthTexture.magFilter=In);V.camera.updateProjectionMatrix()}const z=V.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<z;et++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,et),o.clear();else{et===0&&(o.setRenderTarget(V.map),o.clear());const ht=V.getViewport(et);u.set(l.x*ht.x,l.y*ht.y,l.x*ht.z,l.y*ht.w),W.viewport(u)}if(G.isPointLight){const ht=V.camera,bt=V.matrix,vt=G.distance||ht.far;vt!==ht.far&&(ht.far=vt,ht.updateProjectionMatrix()),uc.setFromMatrixPosition(G.matrixWorld),ht.position.copy(uc),Gp.copy(ht.position),Gp.add(iC[et]),ht.up.copy(aC[et]),ht.lookAt(Gp),ht.updateMatrixWorld(),bt.makeTranslation(-uc.x,-uc.y,-uc.z),xS.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),V._frustum.setFromProjectionMatrix(xS,ht.coordinateSystem,ht.reversedDepth)}else V.updateMatrices(G);i=V.getFrustum(),C(O,T,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===hc&&E(V,T),V.needsUpdate=!1}M=this.type,S.needsUpdate=!1,o.setRenderTarget(w,k,F)};function E(N,O){const T=t.update(b);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ma(s.x,s.y,{format:Zo,type:is})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(O,null,T,_,b,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(O,null,T,x,b,null)}function D(N,O,T,w){let k=null;const F=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)k=F;else if(k=T.isPointLight===!0?p:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=k.uuid,Y=O.uuid;let tt=h[W];tt===void 0&&(tt={},h[W]=tt);let Z=tt[Y];Z===void 0&&(Z=k.clone(),tt[Y]=Z,O.addEventListener("dispose",U)),k=Z}if(k.visible=O.visible,k.wireframe=O.wireframe,w===hc?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:v[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const W=o.properties.get(k);W.light=T}return k}function C(N,O,T,w,k){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&k===hc)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const Y=t.update(N),tt=N.material;if(Array.isArray(tt)){const Z=Y.groups;for(let G=0,V=Z.length;G<V;G++){const it=Z[G],ft=tt[it.materialIndex];if(ft&&ft.visible){const z=D(N,ft,w,k);N.onBeforeShadow(o,N,O,T,Y,z,it),o.renderBufferDirect(T,null,Y,z,N,it),N.onAfterShadow(o,N,O,T,Y,z,it)}}}else if(tt.visible){const Z=D(N,tt,w,k);N.onBeforeShadow(o,N,O,T,Y,Z,null),o.renderBufferDirect(T,null,Y,Z,N,null),N.onAfterShadow(o,N,O,T,Y,Z,null)}}const W=N.children;for(let Y=0,tt=W.length;Y<tt;Y++)C(W[Y],O,T,w,k)}function U(N){N.target.removeEventListener("dispose",U);for(const T in h){const w=h[T],k=N.target.uuid;k in w&&(w[k].dispose(),delete w[k])}}}function rC(o,t){function e(){let q=!1;const Ct=new ln;let At=null;const Ft=new ln(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!q&&(o.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){q=Mt},setClear:function(Mt,ct,Bt,se,Oe){Oe===!0&&(Mt*=se,ct*=se,Bt*=se),Ct.set(Mt,ct,Bt,se),Ft.equals(Ct)===!1&&(o.clearColor(Mt,ct,Bt,se),Ft.copy(Ct))},reset:function(){q=!1,At=null,Ft.set(-1,0,0,0)}}}function i(){let q=!1,Ct=!1,At=null,Ft=null,Mt=null;return{setReversed:function(ct){if(Ct!==ct){const Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ct;const se=Mt;Mt=null,this.setClear(se)}},getReversed:function(){return Ct},setTest:function(ct){ct?Et(o.DEPTH_TEST):_t(o.DEPTH_TEST)},setMask:function(ct){At!==ct&&!q&&(o.depthMask(ct),At=ct)},setFunc:function(ct){if(Ct&&(ct=gE[ct]),Ft!==ct){switch(ct){case Qp:o.depthFunc(o.NEVER);break;case Jp:o.depthFunc(o.ALWAYS);break;case $p:o.depthFunc(o.LESS);break;case Yo:o.depthFunc(o.LEQUAL);break;case tm:o.depthFunc(o.EQUAL);break;case em:o.depthFunc(o.GEQUAL);break;case nm:o.depthFunc(o.GREATER);break;case im:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=ct}},setLocked:function(ct){q=ct},setClear:function(ct){Mt!==ct&&(Mt=ct,Ct&&(ct=1-ct),o.clearDepth(ct))},reset:function(){q=!1,At=null,Ft=null,Mt=null,Ct=!1}}}function s(){let q=!1,Ct=null,At=null,Ft=null,Mt=null,ct=null,Bt=null,se=null,Oe=null;return{setTest:function(Ce){q||(Ce?Et(o.STENCIL_TEST):_t(o.STENCIL_TEST))},setMask:function(Ce){Ct!==Ce&&!q&&(o.stencilMask(Ce),Ct=Ce)},setFunc:function(Ce,gi,Qn){(At!==Ce||Ft!==gi||Mt!==Qn)&&(o.stencilFunc(Ce,gi,Qn),At=Ce,Ft=gi,Mt=Qn)},setOp:function(Ce,gi,Qn){(ct!==Ce||Bt!==gi||se!==Qn)&&(o.stencilOp(Ce,gi,Qn),ct=Ce,Bt=gi,se=Qn)},setLocked:function(Ce){q=Ce},setClear:function(Ce){Oe!==Ce&&(o.clearStencil(Ce),Oe=Ce)},reset:function(){q=!1,Ct=null,At=null,Ft=null,Mt=null,ct=null,Bt=null,se=null,Oe=null}}}const l=new e,u=new i,f=new s,p=new WeakMap,h=new WeakMap;let m={},v={},_=new WeakMap,x=[],y=null,b=!1,S=null,M=null,E=null,D=null,C=null,U=null,N=null,O=new re(0,0,0),T=0,w=!1,k=null,F=null,W=null,Y=null,tt=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,V=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(it)[1]),G=V>=1):it.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),G=V>=2);let ft=null,z={};const et=o.getParameter(o.SCISSOR_BOX),ht=o.getParameter(o.VIEWPORT),bt=new ln().fromArray(et),vt=new ln().fromArray(ht);function Ot(q,Ct,At,Ft){const Mt=new Uint8Array(4),ct=o.createTexture();o.bindTexture(q,ct),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<At;Bt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Ct+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return ct}const nt={};nt[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Et(o.DEPTH_TEST),u.setFunc(Yo),ae(!1),We(px),Et(o.CULL_FACE),be(ts);function Et(q){m[q]!==!0&&(o.enable(q),m[q]=!0)}function _t(q){m[q]!==!1&&(o.disable(q),m[q]=!1)}function Yt(q,Ct){return v[q]!==Ct?(o.bindFramebuffer(q,Ct),v[q]=Ct,q===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ct),q===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Pt(q,Ct){let At=x,Ft=!1;if(q){At=_.get(Ct),At===void 0&&(At=[],_.set(Ct,At));const Mt=q.textures;if(At.length!==Mt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let ct=0,Bt=Mt.length;ct<Bt;ct++)At[ct]=o.COLOR_ATTACHMENT0+ct;At.length=Mt.length,Ft=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(At)}function Qt(q){return y!==q?(o.useProgram(q),y=q,!0):!1}const Ye={[Rr]:o.FUNC_ADD,[Bb]:o.FUNC_SUBTRACT,[Gb]:o.FUNC_REVERSE_SUBTRACT};Ye[Hb]=o.MIN,Ye[Vb]=o.MAX;const ue={[kb]:o.ZERO,[Xb]:o.ONE,[Wb]:o.SRC_COLOR,[Zp]:o.SRC_ALPHA,[Qb]:o.SRC_ALPHA_SATURATE,[Zb]:o.DST_COLOR,[Yb]:o.DST_ALPHA,[qb]:o.ONE_MINUS_SRC_COLOR,[Kp]:o.ONE_MINUS_SRC_ALPHA,[Kb]:o.ONE_MINUS_DST_COLOR,[jb]:o.ONE_MINUS_DST_ALPHA,[Jb]:o.CONSTANT_COLOR,[$b]:o.ONE_MINUS_CONSTANT_COLOR,[tE]:o.CONSTANT_ALPHA,[eE]:o.ONE_MINUS_CONSTANT_ALPHA};function be(q,Ct,At,Ft,Mt,ct,Bt,se,Oe,Ce){if(q===ts){b===!0&&(_t(o.BLEND),b=!1);return}if(b===!1&&(Et(o.BLEND),b=!0),q!==Ib){if(q!==S||Ce!==w){if((M!==Rr||C!==Rr)&&(o.blendEquation(o.FUNC_ADD),M=Rr,C=Rr),Ce)switch(q){case Vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mx:o.blendFunc(o.ONE,o.ONE);break;case gx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _x:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Le("WebGLState: Invalid blending: ",q);break}else switch(q){case Vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case gx:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _x:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",q);break}E=null,D=null,U=null,N=null,O.set(0,0,0),T=0,S=q,w=Ce}return}Mt=Mt||Ct,ct=ct||At,Bt=Bt||Ft,(Ct!==M||Mt!==C)&&(o.blendEquationSeparate(Ye[Ct],Ye[Mt]),M=Ct,C=Mt),(At!==E||Ft!==D||ct!==U||Bt!==N)&&(o.blendFuncSeparate(ue[At],ue[Ft],ue[ct],ue[Bt]),E=At,D=Ft,U=ct,N=Bt),(se.equals(O)===!1||Oe!==T)&&(o.blendColor(se.r,se.g,se.b,Oe),O.copy(se),T=Oe),S=q,w=!1}function Re(q,Ct){q.side===li?_t(o.CULL_FACE):Et(o.CULL_FACE);let At=q.side===ci;Ct&&(At=!At),ae(At),q.blending===Vs&&q.transparent===!1?be(ts):be(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const Ft=q.stencilWrite;f.setTest(Ft),Ft&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),je(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):_t(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(q){k!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),k=q)}function We(q){q!==Ob?(Et(o.CULL_FACE),q!==F&&(q===px?o.cullFace(o.BACK):q===Fb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_t(o.CULL_FACE),F=q}function X(q){q!==W&&(G&&o.lineWidth(q),W=q)}function je(q,Ct,At){q?(Et(o.POLYGON_OFFSET_FILL),(Y!==Ct||tt!==At)&&(Y=Ct,tt=At,u.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,At))):_t(o.POLYGON_OFFSET_FILL)}function Ee(q){q?Et(o.SCISSOR_TEST):_t(o.SCISSOR_TEST)}function Ne(q){q===void 0&&(q=o.TEXTURE0+Z-1),ft!==q&&(o.activeTexture(q),ft=q)}function jt(q,Ct,At){At===void 0&&(ft===null?At=o.TEXTURE0+Z-1:At=ft);let Ft=z[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},z[At]=Ft),(Ft.type!==q||Ft.texture!==Ct)&&(ft!==At&&(o.activeTexture(At),ft=At),o.bindTexture(q,Ct||nt[q]),Ft.type=q,Ft.texture=Ct)}function I(){const q=z[ft];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function pt(){try{o.texSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function xt(){try{o.texSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Jt(){try{o.texStorage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function te(){try{o.texImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Tt(){try{o.texImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function yt(q){bt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),bt.copy(q))}function Wt(q){vt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),vt.copy(q))}function zt(q,Ct){let At=h.get(Ct);At===void 0&&(At=new WeakMap,h.set(Ct,At));let Ft=At.get(q);Ft===void 0&&(Ft=o.getUniformBlockIndex(Ct,q.name),At.set(q,Ft))}function Ut(q,Ct){const Ft=h.get(Ct).get(q);p.get(Ct)!==Ft&&(o.uniformBlockBinding(Ct,Ft,q.__bindingPointIndex),p.set(Ct,Ft))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ft=null,z={},v={},_=new WeakMap,x=[],y=null,b=!1,S=null,M=null,E=null,D=null,C=null,U=null,N=null,O=new re(0,0,0),T=0,w=!1,k=null,F=null,W=null,Y=null,tt=null,bt.set(0,0,o.canvas.width,o.canvas.height),vt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Et,disable:_t,bindFramebuffer:Yt,drawBuffers:Pt,useProgram:Qt,setBlending:be,setMaterial:Re,setFlipSided:ae,setCullFace:We,setLineWidth:X,setPolygonOffset:je,setScissorTest:Ee,activeTexture:Ne,bindTexture:jt,unbindTexture:I,compressedTexImage2D:R,compressedTexImage3D:Q,texImage2D:te,texImage3D:Tt,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:Jt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Xt,scissor:yt,viewport:Wt,reset:fe}}function oC(o,t,e,i,s,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xe,m=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,R){return x?new OffscreenCanvas(I,R):bc("canvas")}function b(I,R,Q){let pt=1;const xt=jt(I);if((xt.width>Q||xt.height>Q)&&(pt=Q/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ut=Math.floor(pt*xt.width),Xt=Math.floor(pt*xt.height);v===void 0&&(v=y(ut,Xt));const Rt=R?y(ut,Xt):v;return Rt.width=ut,Rt.height=Xt,Rt.getContext("2d").drawImage(I,0,0,ut,Xt),ne("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Xt+")."),Rt}else return"data"in I&&ne("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),I;return I}function S(I){return I.generateMipmaps}function M(I){o.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(I,R,Q,pt,xt=!1){if(I!==null){if(o[I]!==void 0)return o[I];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ut=R;if(R===o.RED&&(Q===o.FLOAT&&(ut=o.R32F),Q===o.HALF_FLOAT&&(ut=o.R16F),Q===o.UNSIGNED_BYTE&&(ut=o.R8)),R===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ut=o.R8UI),Q===o.UNSIGNED_SHORT&&(ut=o.R16UI),Q===o.UNSIGNED_INT&&(ut=o.R32UI),Q===o.BYTE&&(ut=o.R8I),Q===o.SHORT&&(ut=o.R16I),Q===o.INT&&(ut=o.R32I)),R===o.RG&&(Q===o.FLOAT&&(ut=o.RG32F),Q===o.HALF_FLOAT&&(ut=o.RG16F),Q===o.UNSIGNED_BYTE&&(ut=o.RG8)),R===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ut=o.RG8UI),Q===o.UNSIGNED_SHORT&&(ut=o.RG16UI),Q===o.UNSIGNED_INT&&(ut=o.RG32UI),Q===o.BYTE&&(ut=o.RG8I),Q===o.SHORT&&(ut=o.RG16I),Q===o.INT&&(ut=o.RG32I)),R===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),Q===o.UNSIGNED_INT&&(ut=o.RGB32UI),Q===o.BYTE&&(ut=o.RGB8I),Q===o.SHORT&&(ut=o.RGB16I),Q===o.INT&&(ut=o.RGB32I)),R===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),Q===o.UNSIGNED_INT&&(ut=o.RGBA32UI),Q===o.BYTE&&(ut=o.RGBA8I),Q===o.SHORT&&(ut=o.RGBA16I),Q===o.INT&&(ut=o.RGBA32I)),R===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),R===o.RGBA){const Xt=xt?Lf:we.getTransfer(pt);Q===o.FLOAT&&(ut=o.RGBA32F),Q===o.HALF_FLOAT&&(ut=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ut=Xt===Fe?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function C(I,R){let Q;return I?R===null||R===Ea||R===yc?Q=o.DEPTH24_STENCIL8:R===va?Q=o.DEPTH32F_STENCIL8:R===Sc&&(Q=o.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ea||R===yc?Q=o.DEPTH_COMPONENT24:R===va?Q=o.DEPTH_COMPONENT32F:R===Sc&&(Q=o.DEPTH_COMPONENT16),Q}function U(I,R){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==In&&I.minFilter!==Bn?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function N(I){const R=I.target;R.removeEventListener("dispose",N),T(R),R.isVideoTexture&&m.delete(R)}function O(I){const R=I.target;R.removeEventListener("dispose",O),k(R)}function T(I){const R=i.get(I);if(R.__webglInit===void 0)return;const Q=I.source,pt=_.get(Q);if(pt){const xt=pt[R.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(I),Object.keys(pt).length===0&&_.delete(Q)}i.remove(I)}function w(I){const R=i.get(I);o.deleteTexture(R.__webglTexture);const Q=I.source,pt=_.get(Q);delete pt[R.__cacheKey],u.memory.textures--}function k(I){const R=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(R.__webglFramebuffer[pt]))for(let xt=0;xt<R.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(R.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(R.__webglFramebuffer[pt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[pt])}else{if(Array.isArray(R.__webglFramebuffer))for(let pt=0;pt<R.__webglFramebuffer.length;pt++)o.deleteFramebuffer(R.__webglFramebuffer[pt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pt=0;pt<R.__webglColorRenderbuffer.length;pt++)R.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[pt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Q=I.textures;for(let pt=0,xt=Q.length;pt<xt;pt++){const ut=i.get(Q[pt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),u.memory.textures--),i.remove(Q[pt])}i.remove(I)}let F=0;function W(){F=0}function Y(){const I=F;return I>=s.maxTextures&&ne("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function tt(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function Z(I,R){const Q=i.get(I);if(I.isVideoTexture&&Ee(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const pt=I.image;if(pt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Q,I,R);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+R)}function G(I,R){const Q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){nt(Q,I,R);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+R)}function V(I,R){const Q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){nt(Q,I,R);return}e.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+R)}function it(I,R){const Q=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Q.__version!==I.version){Et(Q,I,R);return}e.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+R)}const ft={[am]:o.REPEAT,[$a]:o.CLAMP_TO_EDGE,[sm]:o.MIRRORED_REPEAT},z={[In]:o.NEAREST,[aE]:o.NEAREST_MIPMAP_NEAREST,[Xu]:o.NEAREST_MIPMAP_LINEAR,[Bn]:o.LINEAR,[ap]:o.LINEAR_MIPMAP_NEAREST,[zs]:o.LINEAR_MIPMAP_LINEAR},et={[oE]:o.NEVER,[hE]:o.ALWAYS,[lE]:o.LESS,[f0]:o.LEQUAL,[cE]:o.EQUAL,[h0]:o.GEQUAL,[uE]:o.GREATER,[fE]:o.NOTEQUAL};function ht(I,R){if(R.type===va&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Bn||R.magFilter===ap||R.magFilter===Xu||R.magFilter===zs||R.minFilter===Bn||R.minFilter===ap||R.minFilter===Xu||R.minFilter===zs)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,ft[R.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,ft[R.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,ft[R.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,z[R.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,z[R.minFilter]),R.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,et[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===In||R.minFilter!==Xu&&R.minFilter!==zs||R.type===va&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function bt(I,R){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",N));const pt=R.source;let xt=_.get(pt);xt===void 0&&(xt={},_.set(pt,xt));const ut=tt(R);if(ut!==I.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),xt[ut].usedTimes++;const Xt=xt[I.__cacheKey];Xt!==void 0&&(xt[I.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(R)),I.__cacheKey=ut,I.__webglTexture=xt[ut].texture}return Q}function vt(I,R,Q){return Math.floor(Math.floor(I/Q)/R)}function Ot(I,R,Q,pt){const ut=I.updateRanges;if(ut.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,Q,pt,R.data);else{ut.sort((Tt,yt)=>Tt.start-yt.start);let Xt=0;for(let Tt=1;Tt<ut.length;Tt++){const yt=ut[Xt],Wt=ut[Tt],zt=yt.start+yt.count,Ut=vt(Wt.start,R.width,4),fe=vt(yt.start,R.width,4);Wt.start<=zt+1&&Ut===fe&&vt(Wt.start+Wt.count-1,R.width,4)===Ut?yt.count=Math.max(yt.count,Wt.start+Wt.count-yt.start):(++Xt,ut[Xt]=Wt)}ut.length=Xt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Jt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Tt=0,yt=ut.length;Tt<yt;Tt++){const Wt=ut[Tt],zt=Math.floor(Wt.start/4),Ut=Math.ceil(Wt.count/4),fe=zt%R.width,q=Math.floor(zt/R.width),Ct=Ut,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),e.texSubImage2D(o.TEXTURE_2D,0,fe,q,Ct,At,Q,pt,R.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function nt(I,R,Q){let pt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=bt(I,R),ut=R.source;e.bindTexture(pt,I.__webglTexture,o.TEXTURE0+Q);const Xt=i.get(ut);if(ut.version!==Xt.__version||xt===!0){e.activeTexture(o.TEXTURE0+Q);const Rt=we.getPrimaries(we.workingColorSpace),Jt=R.colorSpace===Fs?null:we.getPrimaries(R.colorSpace),te=R.colorSpace===Fs||Rt===Jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Tt=b(R.image,!1,s.maxTextureSize);Tt=Ne(R,Tt);const yt=l.convert(R.format,R.colorSpace),Wt=l.convert(R.type);let zt=D(R.internalFormat,yt,Wt,R.colorSpace,R.isVideoTexture);ht(pt,R);let Ut;const fe=R.mipmaps,q=R.isVideoTexture!==!0,Ct=Xt.__version===void 0||xt===!0,At=ut.dataReady,Ft=U(R,Tt);if(R.isDepthTexture)zt=C(R.format===Dr,R.type),Ct&&(q?e.texStorage2D(o.TEXTURE_2D,1,zt,Tt.width,Tt.height):e.texImage2D(o.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,yt,Wt,null));else if(R.isDataTexture)if(fe.length>0){q&&Ct&&e.texStorage2D(o.TEXTURE_2D,Ft,zt,fe[0].width,fe[0].height);for(let Mt=0,ct=fe.length;Mt<ct;Mt++)Ut=fe[Mt],q?At&&e.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,yt,Wt,Ut.data):e.texImage2D(o.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,yt,Wt,Ut.data);R.generateMipmaps=!1}else q?(Ct&&e.texStorage2D(o.TEXTURE_2D,Ft,zt,Tt.width,Tt.height),At&&Ot(R,Tt,yt,Wt)):e.texImage2D(o.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,yt,Wt,Tt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){q&&Ct&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,fe[0].width,fe[0].height,Tt.depth);for(let Mt=0,ct=fe.length;Mt<ct;Mt++)if(Ut=fe[Mt],R.format!==Zi)if(yt!==null)if(q){if(At)if(R.layerUpdates.size>0){const Bt=Kx(Ut.width,Ut.height,R.format,R.type);for(const se of R.layerUpdates){const Oe=Ut.data.subarray(se*Bt/Ut.data.BYTES_PER_ELEMENT,(se+1)*Bt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,se,Ut.width,Ut.height,1,yt,Oe)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Tt.depth,yt,Ut.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Ut.width,Ut.height,Tt.depth,0,Ut.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?At&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Tt.depth,yt,Wt,Ut.data):e.texImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Ut.width,Ut.height,Tt.depth,0,yt,Wt,Ut.data)}else{q&&Ct&&e.texStorage2D(o.TEXTURE_2D,Ft,zt,fe[0].width,fe[0].height);for(let Mt=0,ct=fe.length;Mt<ct;Mt++)Ut=fe[Mt],R.format!==Zi?yt!==null?q?At&&e.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,yt,Ut.data):e.compressedTexImage2D(o.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,Ut.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?At&&e.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,yt,Wt,Ut.data):e.texImage2D(o.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,yt,Wt,Ut.data)}else if(R.isDataArrayTexture)if(q){if(Ct&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,Tt.width,Tt.height,Tt.depth),At)if(R.layerUpdates.size>0){const Mt=Kx(Tt.width,Tt.height,R.format,R.type);for(const ct of R.layerUpdates){const Bt=Tt.data.subarray(ct*Mt/Tt.data.BYTES_PER_ELEMENT,(ct+1)*Mt/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ct,Tt.width,Tt.height,1,yt,Wt,Bt)}R.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,yt,Wt,Tt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Tt.width,Tt.height,Tt.depth,0,yt,Wt,Tt.data);else if(R.isData3DTexture)q?(Ct&&e.texStorage3D(o.TEXTURE_3D,Ft,zt,Tt.width,Tt.height,Tt.depth),At&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,yt,Wt,Tt.data)):e.texImage3D(o.TEXTURE_3D,0,zt,Tt.width,Tt.height,Tt.depth,0,yt,Wt,Tt.data);else if(R.isFramebufferTexture){if(Ct)if(q)e.texStorage2D(o.TEXTURE_2D,Ft,zt,Tt.width,Tt.height);else{let Mt=Tt.width,ct=Tt.height;for(let Bt=0;Bt<Ft;Bt++)e.texImage2D(o.TEXTURE_2D,Bt,zt,Mt,ct,0,yt,Wt,null),Mt>>=1,ct>>=1}}else if(fe.length>0){if(q&&Ct){const Mt=jt(fe[0]);e.texStorage2D(o.TEXTURE_2D,Ft,zt,Mt.width,Mt.height)}for(let Mt=0,ct=fe.length;Mt<ct;Mt++)Ut=fe[Mt],q?At&&e.texSubImage2D(o.TEXTURE_2D,Mt,0,0,yt,Wt,Ut):e.texImage2D(o.TEXTURE_2D,Mt,zt,yt,Wt,Ut);R.generateMipmaps=!1}else if(q){if(Ct){const Mt=jt(Tt);e.texStorage2D(o.TEXTURE_2D,Ft,zt,Mt.width,Mt.height)}At&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,yt,Wt,Tt)}else e.texImage2D(o.TEXTURE_2D,0,zt,yt,Wt,Tt);S(R)&&M(pt),Xt.__version=ut.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function Et(I,R,Q){if(R.image.length!==6)return;const pt=bt(I,R),xt=R.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+Q);const ut=i.get(xt);if(xt.version!==ut.__version||pt===!0){e.activeTexture(o.TEXTURE0+Q);const Xt=we.getPrimaries(we.workingColorSpace),Rt=R.colorSpace===Fs?null:we.getPrimaries(R.colorSpace),Jt=R.colorSpace===Fs||Xt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const te=R.isCompressedTexture||R.image[0].isCompressedTexture,Tt=R.image[0]&&R.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!te&&!Tt?yt[ct]=b(R.image[ct],!0,s.maxCubemapSize):yt[ct]=Tt?R.image[ct].image:R.image[ct],yt[ct]=Ne(R,yt[ct]);const Wt=yt[0],zt=l.convert(R.format,R.colorSpace),Ut=l.convert(R.type),fe=D(R.internalFormat,zt,Ut,R.colorSpace),q=R.isVideoTexture!==!0,Ct=ut.__version===void 0||pt===!0,At=xt.dataReady;let Ft=U(R,Wt);ht(o.TEXTURE_CUBE_MAP,R);let Mt;if(te){q&&Ct&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,fe,Wt.width,Wt.height);for(let ct=0;ct<6;ct++){Mt=yt[ct].mipmaps;for(let Bt=0;Bt<Mt.length;Bt++){const se=Mt[Bt];R.format!==Zi?zt!==null?q?At&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,se.width,se.height,zt,se.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,fe,se.width,se.height,0,se.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,se.width,se.height,zt,Ut,se.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,fe,se.width,se.height,0,zt,Ut,se.data)}}}else{if(Mt=R.mipmaps,q&&Ct){Mt.length>0&&Ft++;const ct=jt(yt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,fe,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Tt){q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,zt,Ut,yt[ct].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,fe,yt[ct].width,yt[ct].height,0,zt,Ut,yt[ct].data);for(let Bt=0;Bt<Mt.length;Bt++){const Oe=Mt[Bt].image[ct].image;q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Oe.width,Oe.height,zt,Ut,Oe.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,fe,Oe.width,Oe.height,0,zt,Ut,Oe.data)}}else{q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,zt,Ut,yt[ct]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,fe,zt,Ut,yt[ct]);for(let Bt=0;Bt<Mt.length;Bt++){const se=Mt[Bt];q?At&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,zt,Ut,se.image[ct]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,fe,zt,Ut,se.image[ct])}}}S(R)&&M(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function _t(I,R,Q,pt,xt,ut){const Xt=l.convert(Q.format,Q.colorSpace),Rt=l.convert(Q.type),Jt=D(Q.internalFormat,Xt,Rt,Q.colorSpace),te=i.get(R),Tt=i.get(Q);if(Tt.__renderTarget=R,!te.__hasExternalTextures){const yt=Math.max(1,R.width>>ut),Wt=Math.max(1,R.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?e.texImage3D(xt,ut,Jt,yt,Wt,R.depth,0,Xt,Rt,null):e.texImage2D(xt,ut,Jt,yt,Wt,0,Xt,Rt,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),je(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,Tt.__webglTexture,0,X(R)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,Tt.__webglTexture,ut),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(I,R,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,I),R.depthBuffer){const pt=R.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ut=C(R.stencilBuffer,xt),Xt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;je(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(R),ut,R.width,R.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(R),ut,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ut,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,I)}else{const pt=R.textures;for(let xt=0;xt<pt.length;xt++){const ut=pt[xt],Xt=l.convert(ut.format,ut.colorSpace),Rt=l.convert(ut.type),Jt=D(ut.internalFormat,Xt,Rt,ut.colorSpace);je(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(R),Jt,R.width,R.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(R),Jt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Jt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pt(I,R,Q){const pt=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=i.get(R.depthTexture);if(xt.__renderTarget=R,(!xt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,R.depthTexture.addEventListener("dispose",N)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),e.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),ht(o.TEXTURE_CUBE_MAP,R.depthTexture);const te=l.convert(R.depthTexture.format),Tt=l.convert(R.depthTexture.type);let yt;R.depthTexture.format===as?yt=o.DEPTH_COMPONENT24:R.depthTexture.format===Dr&&(yt=o.DEPTH24_STENCIL8);for(let Wt=0;Wt<6;Wt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Wt,0,yt,R.width,R.height,0,te,Tt,null)}}else Z(R.depthTexture,0);const ut=xt.__webglTexture,Xt=X(R),Rt=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,Jt=R.depthTexture.format===Dr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(R.depthTexture.format===as)je(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Jt,Rt,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Jt,Rt,ut,0);else if(R.depthTexture.format===Dr)je(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Jt,Rt,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Jt,Rt,ut,0);else throw new Error("Unknown depthTexture format")}function Qt(I){const R=i.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pt){const xt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),R.__depthDisposeCallback=xt}R.__boundDepthTexture=pt}if(I.depthTexture&&!R.__autoAllocateDepthBuffer)if(Q)for(let pt=0;pt<6;pt++)Pt(R.__webglFramebuffer[pt],I,pt);else{const pt=I.texture.mipmaps;pt&&pt.length>0?Pt(R.__webglFramebuffer[0],I,0):Pt(R.__webglFramebuffer,I,0)}else if(Q){R.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[pt]),R.__webglDepthbuffer[pt]===void 0)R.__webglDepthbuffer[pt]=o.createRenderbuffer(),Yt(R.__webglDepthbuffer[pt],I,!1);else{const xt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=R.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const pt=I.texture.mipmaps;if(pt&&pt.length>0?e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Yt(R.__webglDepthbuffer,I,!1);else{const xt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function Ye(I,R,Q){const pt=i.get(I);R!==void 0&&_t(pt.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Qt(I)}function ue(I){const R=I.texture,Q=i.get(I),pt=i.get(R);I.addEventListener("dispose",O);const xt=I.textures,ut=I.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=R.version,u.memory.textures++),ut){Q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer[Rt]=[];for(let Jt=0;Jt<R.mipmaps.length;Jt++)Q.__webglFramebuffer[Rt][Jt]=o.createFramebuffer()}else Q.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Rt=0;Rt<R.mipmaps.length;Rt++)Q.__webglFramebuffer[Rt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Rt=0,Jt=xt.length;Rt<Jt;Rt++){const te=i.get(xt[Rt]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),u.memory.textures++)}if(I.samples>0&&je(I)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const Jt=xt[Rt];Q.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Rt]);const te=l.convert(Jt.format,Jt.colorSpace),Tt=l.convert(Jt.type),yt=D(Jt.internalFormat,te,Tt,Jt.colorSpace,I.isXRRenderTarget===!0),Wt=X(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,yt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Yt(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){e.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),ht(o.TEXTURE_CUBE_MAP,R);for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Jt=0;Jt<R.mipmaps.length;Jt++)_t(Q.__webglFramebuffer[Rt][Jt],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Jt);else _t(Q.__webglFramebuffer[Rt],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(R)&&M(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Xt){for(let Rt=0,Jt=xt.length;Rt<Jt;Rt++){const te=xt[Rt],Tt=i.get(te);let yt=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(yt,Tt.__webglTexture),ht(yt,te),_t(Q.__webglFramebuffer,I,te,o.COLOR_ATTACHMENT0+Rt,yt,0),S(te)&&M(yt)}e.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Rt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Rt,pt.__webglTexture),ht(Rt,R),R.mipmaps&&R.mipmaps.length>0)for(let Jt=0;Jt<R.mipmaps.length;Jt++)_t(Q.__webglFramebuffer[Jt],I,R,o.COLOR_ATTACHMENT0,Rt,Jt);else _t(Q.__webglFramebuffer,I,R,o.COLOR_ATTACHMENT0,Rt,0);S(R)&&M(Rt),e.unbindTexture()}I.depthBuffer&&Qt(I)}function be(I){const R=I.textures;for(let Q=0,pt=R.length;Q<pt;Q++){const xt=R[Q];if(S(xt)){const ut=E(I),Xt=i.get(xt).__webglTexture;e.bindTexture(ut,Xt),M(ut),e.unbindTexture()}}}const Re=[],ae=[];function We(I){if(I.samples>0){if(je(I)===!1){const R=I.textures,Q=I.width,pt=I.height;let xt=o.COLOR_BUFFER_BIT;const ut=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=i.get(I),Rt=R.length>1;if(Rt)for(let te=0;te<R.length;te++)e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Jt=I.texture.mipmaps;Jt&&Jt.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let te=0;te<R.length;te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const Tt=i.get(R[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,Q,pt,0,0,Q,pt,xt,o.NEAREST),p===!0&&(Re.length=0,ae.length=0,Re.push(o.COLOR_ATTACHMENT0+te),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Re.push(ut),ae.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let te=0;te<R.length;te++){e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const Tt=i.get(R[te]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,Tt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const R=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function X(I){return Math.min(s.maxSamples,I.samples)}function je(I){const R=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ee(I){const R=u.render.frame;m.get(I)!==R&&(m.set(I,R),I.update())}function Ne(I,R){const Q=I.colorSpace,pt=I.format,xt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Ko&&Q!==Fs&&(we.getTransfer(Q)===Fe?(pt!==Zi||xt!==wi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",Q)),R}function jt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=it,this.rebindTextures=Ye,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function lC(o,t){function e(i,s=Fs){let l;const u=we.getTransfer(s);if(i===wi)return o.UNSIGNED_BYTE;if(i===r0)return o.UNSIGNED_SHORT_4_4_4_4;if(i===o0)return o.UNSIGNED_SHORT_5_5_5_1;if(i===ZS)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===KS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===YS)return o.BYTE;if(i===jS)return o.SHORT;if(i===Sc)return o.UNSIGNED_SHORT;if(i===s0)return o.INT;if(i===Ea)return o.UNSIGNED_INT;if(i===va)return o.FLOAT;if(i===is)return o.HALF_FLOAT;if(i===QS)return o.ALPHA;if(i===JS)return o.RGB;if(i===Zi)return o.RGBA;if(i===as)return o.DEPTH_COMPONENT;if(i===Dr)return o.DEPTH_STENCIL;if(i===$S)return o.RED;if(i===l0)return o.RED_INTEGER;if(i===Zo)return o.RG;if(i===c0)return o.RG_INTEGER;if(i===u0)return o.RGBA_INTEGER;if(i===Ef||i===Tf||i===Af||i===wf)if(u===Fe)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Ef)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Af)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Ef)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Af)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rm||i===om||i===lm||i===cm)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===rm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===om)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===um||i===fm||i===hm||i===dm||i===pm||i===mm||i===gm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===um||i===fm)return u===Fe?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===hm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===dm)return l.COMPRESSED_R11_EAC;if(i===pm)return l.COMPRESSED_SIGNED_R11_EAC;if(i===mm)return l.COMPRESSED_RG11_EAC;if(i===gm)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_m||i===vm||i===xm||i===Sm||i===ym||i===Mm||i===bm||i===Em||i===Tm||i===Am||i===wm||i===Rm||i===Cm||i===Dm)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===_m)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ym)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Em)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Am)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Um||i===Lm||i===Nm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===Um)return u===Fe?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pm||i===Om||i===Fm||i===zm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===Pm)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Om)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yc?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}const cC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uC=`
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

}`;class fC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new fy(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Qi({vertexShader:cC,fragmentShader:uC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hC extends al{constructor(t,e){super();const i=this;let s=null,l=1,u=null,f="local-floor",p=1,h=null,m=null,v=null,_=null,x=null,y=null;const b=typeof XRWebGLBinding<"u",S=new fC,M={},E=e.getContextAttributes();let D=null,C=null;const U=[],N=[],O=new xe;let T=null;const w=new Yi;w.viewport=new ln;const k=new Yi;k.viewport=new ln;const F=[w,k],W=new bT;let Y=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let Et=U[nt];return Et===void 0&&(Et=new fp,U[nt]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(nt){let Et=U[nt];return Et===void 0&&(Et=new fp,U[nt]=Et),Et.getGripSpace()},this.getHand=function(nt){let Et=U[nt];return Et===void 0&&(Et=new fp,U[nt]=Et),Et.getHandSpace()};function Z(nt){const Et=N.indexOf(nt.inputSource);if(Et===-1)return;const _t=U[Et];_t!==void 0&&(_t.update(nt.inputSource,nt.frame,h||u),_t.dispatchEvent({type:nt.type,data:nt.inputSource}))}function G(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",V);for(let nt=0;nt<U.length;nt++){const Et=N[nt];Et!==null&&(N[nt]=null,U[nt].disconnect(Et))}Y=null,tt=null,S.reset();for(const nt in M)delete M[nt];t.setRenderTarget(D),x=null,_=null,v=null,s=null,C=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){l=nt,i.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){f=nt,i.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Yt=null,Pt=null;E.depth&&(Pt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=E.stencil?Dr:as,Yt=E.stencil?yc:Ea);const Qt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Qt),s.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Ma(_.textureWidth,_.textureHeight,{format:Zi,type:wi,depthTexture:new Tc(_.textureWidth,_.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _t={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Ma(x.framebufferWidth,x.framebufferHeight,{format:Zi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await s.requestReferenceSpace(f),Ot.setContext(s),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(nt){for(let Et=0;Et<nt.removed.length;Et++){const _t=nt.removed[Et],Yt=N.indexOf(_t);Yt>=0&&(N[Yt]=null,U[Yt].disconnect(_t))}for(let Et=0;Et<nt.added.length;Et++){const _t=nt.added[Et];let Yt=N.indexOf(_t);if(Yt===-1){for(let Qt=0;Qt<U.length;Qt++)if(Qt>=N.length){N.push(_t),Yt=Qt;break}else if(N[Qt]===null){N[Qt]=_t,Yt=Qt;break}if(Yt===-1)break}const Pt=U[Yt];Pt&&Pt.connect(_t)}}const it=new H,ft=new H;function z(nt,Et,_t){it.setFromMatrixPosition(Et.matrixWorld),ft.setFromMatrixPosition(_t.matrixWorld);const Yt=it.distanceTo(ft),Pt=Et.projectionMatrix.elements,Qt=_t.projectionMatrix.elements,Ye=Pt[14]/(Pt[10]-1),ue=Pt[14]/(Pt[10]+1),be=(Pt[9]+1)/Pt[5],Re=(Pt[9]-1)/Pt[5],ae=(Pt[8]-1)/Pt[0],We=(Qt[8]+1)/Qt[0],X=Ye*ae,je=Ye*We,Ee=Yt/(-ae+We),Ne=Ee*-ae;if(Et.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ne),nt.translateZ(Ee),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Pt[10]===-1)nt.projectionMatrix.copy(Et.projectionMatrix),nt.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{const jt=Ye+Ee,I=ue+Ee,R=X-Ne,Q=je+(Yt-Ne),pt=be*ue/I*jt,xt=Re*ue/I*jt;nt.projectionMatrix.makePerspective(R,Q,pt,xt,jt,I),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function et(nt,Et){Et===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(Et.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let Et=nt.near,_t=nt.far;S.texture!==null&&(S.depthNear>0&&(Et=S.depthNear),S.depthFar>0&&(_t=S.depthFar)),W.near=k.near=w.near=Et,W.far=k.far=w.far=_t,(Y!==W.near||tt!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),Y=W.near,tt=W.far),W.layers.mask=nt.layers.mask|6,w.layers.mask=W.layers.mask&-5,k.layers.mask=W.layers.mask&-3;const Yt=nt.parent,Pt=W.cameras;et(W,Yt);for(let Qt=0;Qt<Pt.length;Qt++)et(Pt[Qt],Yt);Pt.length===2?z(W,w,k):W.projectionMatrix.copy(w.projectionMatrix),ht(nt,W,Yt)};function ht(nt,Et,_t){_t===null?nt.matrix.copy(Et.matrixWorld):(nt.matrix.copy(_t.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(Et.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(Et.projectionMatrix),nt.projectionMatrixInverse.copy(Et.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ec*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(nt){p=nt,_!==null&&(_.fixedFoveation=nt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=nt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(W)},this.getCameraTexture=function(nt){return M[nt]};let bt=null;function vt(nt,Et){if(m=Et.getViewerPose(h||u),y=Et,m!==null){const _t=m.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let Yt=!1;_t.length!==W.cameras.length&&(W.cameras.length=0,Yt=!0);for(let ue=0;ue<_t.length;ue++){const be=_t[ue];let Re=null;if(x!==null)Re=x.getViewport(be);else{const We=v.getViewSubImage(_,be);Re=We.viewport,ue===0&&(t.setRenderTargetTextures(C,We.colorTexture,We.depthStencilTexture),t.setRenderTarget(C))}let ae=F[ue];ae===void 0&&(ae=new Yi,ae.layers.enable(ue),ae.viewport=new ln,F[ue]=ae),ae.matrix.fromArray(be.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(be.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),ue===0&&(W.matrix.copy(ae.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Yt===!0&&W.cameras.push(ae)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){v=i.getBinding();const ue=v.getDepthInformation(_t[0]);ue&&ue.isValid&&ue.texture&&S.init(ue,s.renderState)}if(Pt&&Pt.includes("camera-access")&&b){t.state.unbindTexture(),v=i.getBinding();for(let ue=0;ue<_t.length;ue++){const be=_t[ue].camera;if(be){let Re=M[be];Re||(Re=new fy,M[be]=Re);const ae=v.getCameraImage(be);Re.sourceTexture=ae}}}}for(let _t=0;_t<U.length;_t++){const Yt=N[_t],Pt=U[_t];Yt!==null&&Pt!==void 0&&Pt.update(Yt,Et,h||u)}bt&&bt(nt,Et),Et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Et}),y=null}const Ot=new gy;Ot.setAnimationLoop(vt),this.setAnimationLoop=function(nt){bt=nt},this.dispose=function(){}}}const br=new Ta,dC=new qe;function pC(o,t){function e(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function i(S,M){M.color.getRGB(S.fogColor.value,hy(o)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function s(S,M,E,D,C){M.isMeshBasicMaterial?l(S,M):M.isMeshLambertMaterial?(l(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(S,M),v(S,M)):M.isMeshPhongMaterial?(l(S,M),m(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(S,M),_(S,M),M.isMeshPhysicalMaterial&&x(S,M,C)):M.isMeshMatcapMaterial?(l(S,M),y(S,M)):M.isMeshDepthMaterial?l(S,M):M.isMeshDistanceMaterial?(l(S,M),b(S,M)):M.isMeshNormalMaterial?l(S,M):M.isLineBasicMaterial?(u(S,M),M.isLineDashedMaterial&&f(S,M)):M.isPointsMaterial?p(S,M,E,D):M.isSpriteMaterial?h(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,e(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===ci&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,e(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===ci&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,e(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,e(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,e(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);const E=t.get(M),D=E.envMap,C=E.envMapRotation;D&&(S.envMap.value=D,br.copy(C),br.x*=-1,br.y*=-1,br.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),S.envMapRotation.value.setFromMatrix4(dC.makeRotationFromEuler(br)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,e(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,e(M.aoMap,S.aoMapTransform))}function u(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform))}function f(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function p(S,M,E,D){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*E,S.scale.value=D*.5,M.map&&(S.map.value=M.map,e(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function h(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function m(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function v(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function _(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,e(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,e(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function x(S,M,E){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,e(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,e(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,e(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,e(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,e(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ci&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,e(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,e(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=E.texture,S.transmissionSamplerSize.value.set(E.width,E.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,e(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,e(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,e(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,e(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,e(M.specularIntensityMap,S.specularIntensityMapTransform))}function y(S,M){M.matcap&&(S.matcap.value=M.matcap)}function b(S,M){const E=t.get(M).light;S.referencePosition.value.setFromMatrixPosition(E.matrixWorld),S.nearDistance.value=E.shadow.camera.near,S.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function mC(o,t,e,i){let s={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(E,D){const C=D.program;i.uniformBlockBinding(E,C)}function h(E,D){let C=s[E.id];C===void 0&&(y(E),C=m(E),s[E.id]=C,E.addEventListener("dispose",S));const U=D.program;i.updateUBOMapping(E,U);const N=t.render.frame;l[E.id]!==N&&(_(E),l[E.id]=N)}function m(E){const D=v();E.__bindingPointIndex=D;const C=o.createBuffer(),U=E.__size,N=E.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,U,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,C),C}function v(){for(let E=0;E<f;E++)if(u.indexOf(E)===-1)return u.push(E),E;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(E){const D=s[E.id],C=E.uniforms,U=E.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let N=0,O=C.length;N<O;N++){const T=Array.isArray(C[N])?C[N]:[C[N]];for(let w=0,k=T.length;w<k;w++){const F=T[w];if(x(F,N,w,U)===!0){const W=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value];let tt=0;for(let Z=0;Z<Y.length;Z++){const G=Y[Z],V=b(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,W+tt,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,tt),tt+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(E,D,C,U){const N=E.value,O=D+"_"+C;if(U[O]===void 0)return typeof N=="number"||typeof N=="boolean"?U[O]=N:U[O]=N.clone(),!0;{const T=U[O];if(typeof N=="number"||typeof N=="boolean"){if(T!==N)return U[O]=N,!0}else if(T.equals(N)===!1)return T.copy(N),!0}return!1}function y(E){const D=E.uniforms;let C=0;const U=16;for(let O=0,T=D.length;O<T;O++){const w=Array.isArray(D[O])?D[O]:[D[O]];for(let k=0,F=w.length;k<F;k++){const W=w[k],Y=Array.isArray(W.value)?W.value:[W.value];for(let tt=0,Z=Y.length;tt<Z;tt++){const G=Y[tt],V=b(G),it=C%U,ft=it%V.boundary,z=it+ft;C+=ft,z!==0&&U-z<V.storage&&(C+=U-z),W.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=V.storage}}}const N=C%U;return N>0&&(C+=U-N),E.__size=C,E.__cache={},this}function b(E){const D={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(D.boundary=4,D.storage=4):E.isVector2?(D.boundary=8,D.storage=8):E.isVector3||E.isColor?(D.boundary=16,D.storage=12):E.isVector4?(D.boundary=16,D.storage=16):E.isMatrix3?(D.boundary=48,D.storage=48):E.isMatrix4?(D.boundary=64,D.storage=64):E.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",E),D}function S(E){const D=E.target;D.removeEventListener("dispose",S);const C=u.indexOf(D.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(s[D.id]),delete s[D.id],delete l[D.id]}function M(){for(const E in s)o.deleteBuffer(s[E]);u=[],s={},l={}}return{bind:p,update:h,dispose:M}}const gC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pa=null;function _C(){return pa===null&&(pa=new oy(gC,16,16,Zo,is),pa.name="DFG_LUT",pa.minFilter=Bn,pa.magFilter=Bn,pa.wrapS=$a,pa.wrapT=$a,pa.generateMipmaps=!1,pa.needsUpdate=!0),pa}class vC{constructor(t={}){const{canvas:e=pE(),context:i=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=wi}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const b=x,S=new Set([u0,c0,l0]),M=new Set([wi,Ea,Sc,yc,r0,o0]),E=new Uint32Array(4),D=new Int32Array(4);let C=null,U=null;const N=[],O=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let k=!1;this._outputColorSpace=Ln;let F=0,W=0,Y=null,tt=-1,Z=null;const G=new ln,V=new ln;let it=null;const ft=new re(0);let z=0,et=e.width,ht=e.height,bt=1,vt=null,Ot=null;const nt=new ln(0,0,et,ht),Et=new ln(0,0,et,ht);let _t=!1;const Yt=new _0;let Pt=!1,Qt=!1;const Ye=new qe,ue=new H,be=new ln,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function We(){return Y===null?bt:1}let X=i;function je(L,J){return e.getContext(L,J)}try{const L={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${i0}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),X===null){const J="webgl2";if(X=je(J,L),X===null)throw je(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Le("WebGLRenderer: "+L.message),L}let Ee,Ne,jt,I,R,Q,pt,xt,ut,Xt,Rt,Jt,te,Tt,yt,Wt,zt,Ut,fe,q,Ct,At,Ft;function Mt(){Ee=new vR(X),Ee.init(),Ct=new lC(X,Ee),Ne=new uR(X,Ee,t,Ct),jt=new rC(X,Ee),Ne.reversedDepthBuffer&&_&&jt.buffers.depth.setReversed(!0),I=new yR(X),R=new q2,Q=new oC(X,Ee,jt,R,Ne,Ct,I),pt=new _R(w),xt=new AT(X),At=new lR(X,xt),ut=new xR(X,xt,I,At),Xt=new bR(X,ut,xt,At,I),Ut=new MR(X,Ne,Q),yt=new fR(R),Rt=new W2(w,pt,Ee,Ne,At,yt),Jt=new pC(w,R),te=new j2,Tt=new tC(Ee),zt=new oR(w,pt,jt,Xt,y,p),Wt=new sC(w,Xt,Ne),Ft=new mC(X,I,Ne,jt),fe=new cR(X,Ee,I),q=new SR(X,Ee,I),I.programs=Rt.programs,w.capabilities=Ne,w.extensions=Ee,w.properties=R,w.renderLists=te,w.shadowMap=Wt,w.state=jt,w.info=I}Mt(),b!==wi&&(T=new TR(b,e.width,e.height,s,l));const ct=new hC(w,X);this.xr=ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=Ee.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ee.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(L){L!==void 0&&(bt=L,this.setSize(et,ht,!1))},this.getSize=function(L){return L.set(et,ht)},this.setSize=function(L,J,lt=!0){if(ct.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}et=L,ht=J,e.width=Math.floor(L*bt),e.height=Math.floor(J*bt),lt===!0&&(e.style.width=L+"px",e.style.height=J+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(et*bt,ht*bt).floor()},this.setDrawingBufferSize=function(L,J,lt){et=L,ht=J,bt=lt,e.width=Math.floor(L*lt),e.height=Math.floor(J*lt),this.setViewport(0,0,L,J)},this.setEffects=function(L){if(b===wi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let J=0;J<L.length;J++)if(L[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(nt)},this.setViewport=function(L,J,lt,st){L.isVector4?nt.set(L.x,L.y,L.z,L.w):nt.set(L,J,lt,st),jt.viewport(G.copy(nt).multiplyScalar(bt).round())},this.getScissor=function(L){return L.copy(Et)},this.setScissor=function(L,J,lt,st){L.isVector4?Et.set(L.x,L.y,L.z,L.w):Et.set(L,J,lt,st),jt.scissor(V.copy(Et).multiplyScalar(bt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(L){jt.setScissorTest(_t=L)},this.setOpaqueSort=function(L){vt=L},this.setTransparentSort=function(L){Ot=L},this.getClearColor=function(L){return L.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(L=!0,J=!0,lt=!0){let st=0;if(L){let at=!1;if(Y!==null){const Dt=Y.texture.format;at=S.has(Dt)}if(at){const Dt=Y.texture.type,It=M.has(Dt),Lt=zt.getClearColor(),qt=zt.getClearAlpha(),Zt=Lt.r,ie=Lt.g,le=Lt.b;It?(E[0]=Zt,E[1]=ie,E[2]=le,E[3]=qt,X.clearBufferuiv(X.COLOR,0,E)):(D[0]=Zt,D[1]=ie,D[2]=le,D[3]=qt,X.clearBufferiv(X.COLOR,0,D))}else st|=X.COLOR_BUFFER_BIT}J&&(st|=X.DEPTH_BUFFER_BIT),lt&&(st|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&X.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),zt.dispose(),te.dispose(),Tt.dispose(),R.dispose(),pt.dispose(),Xt.dispose(),At.dispose(),Ft.dispose(),Rt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ol),ct.removeEventListener("sessionend",ll),Ra.stop()};function Bt(L){L.preventDefault(),Mx("WebGLRenderer: Context Lost."),k=!0}function se(){Mx("WebGLRenderer: Context Restored."),k=!1;const L=I.autoReset,J=Wt.enabled,lt=Wt.autoUpdate,st=Wt.needsUpdate,at=Wt.type;Mt(),I.autoReset=L,Wt.enabled=J,Wt.autoUpdate=lt,Wt.needsUpdate=st,Wt.type=at}function Oe(L){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ce(L){const J=L.target;J.removeEventListener("dispose",Ce),gi(J)}function gi(L){Qn(L),R.remove(L)}function Qn(L){const J=R.get(L).programs;J!==void 0&&(J.forEach(function(lt){Rt.releaseProgram(lt)}),L.isShaderMaterial&&Rt.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,lt,st,at,Dt){J===null&&(J=Re);const It=at.isMesh&&at.matrixWorld.determinant()<0,Lt=Qs(L,J,lt,st,at);jt.setMaterial(st,It);let qt=lt.index,Zt=1;if(st.wireframe===!0){if(qt=ut.getWireframeAttribute(lt),qt===void 0)return;Zt=2}const ie=lt.drawRange,le=lt.attributes.position;let Gt=ie.start*Zt,he=(ie.start+ie.count)*Zt;Dt!==null&&(Gt=Math.max(Gt,Dt.start*Zt),he=Math.min(he,(Dt.start+Dt.count)*Zt)),qt!==null?(Gt=Math.max(Gt,0),he=Math.min(he,qt.count)):le!=null&&(Gt=Math.max(Gt,0),he=Math.min(he,le.count));const Ze=he-Gt;if(Ze<0||Ze===1/0)return;At.setup(at,st,Lt,lt,qt);let Ke,Ae=fe;if(qt!==null&&(Ke=xt.get(qt),Ae=q,Ae.setIndex(Ke)),at.isMesh)st.wireframe===!0?(jt.setLineWidth(st.wireframeLinewidth*We()),Ae.setMode(X.LINES)):Ae.setMode(X.TRIANGLES);else if(at.isLine){let Mn=st.linewidth;Mn===void 0&&(Mn=1),jt.setLineWidth(Mn*We()),at.isLineSegments?Ae.setMode(X.LINES):at.isLineLoop?Ae.setMode(X.LINE_LOOP):Ae.setMode(X.LINE_STRIP)}else at.isPoints?Ae.setMode(X.POINTS):at.isSprite&&Ae.setMode(X.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)Nf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Ae.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Mn=at._multiDrawStarts,Vt=at._multiDrawCounts,Jn=at._multiDrawCount,oe=qt?xt.get(qt).bytesPerElement:1,$n=R.get(st).currentProgram.getUniforms();for(let _i=0;_i<Jn;_i++)$n.setValue(X,"_gl_DrawID",_i),Ae.render(Mn[_i]/oe,Vt[_i])}else if(at.isInstancedMesh)Ae.renderInstances(Gt,Ze,at.count);else if(lt.isInstancedBufferGeometry){const Mn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Vt=Math.min(lt.instanceCount,Mn);Ae.renderInstances(Gt,Ze,Vt)}else Ae.render(Gt,Ze)};function Ic(L,J,lt){L.transparent===!0&&L.side===li&&L.forceSinglePass===!1?(L.side=ci,L.needsUpdate=!0,kr(L,J,lt),L.side=Ws,L.needsUpdate=!0,kr(L,J,lt),L.side=li):kr(L,J,lt)}this.compile=function(L,J,lt=null){lt===null&&(lt=L),U=Tt.get(lt),U.init(J),O.push(U),lt.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),L!==lt&&L.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),U.setupLights();const st=new Set;return L.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Dt=at.material;if(Dt)if(Array.isArray(Dt))for(let It=0;It<Dt.length;It++){const Lt=Dt[It];Ic(Lt,lt,at),st.add(Lt)}else Ic(Dt,lt,at),st.add(Dt)}),U=O.pop(),st},this.compileAsync=function(L,J,lt=null){const st=this.compile(L,J,lt);return new Promise(at=>{function Dt(){if(st.forEach(function(It){R.get(It).currentProgram.isReady()&&st.delete(It)}),st.size===0){at(L);return}setTimeout(Dt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Hr=null;function Bc(L){Hr&&Hr(L)}function ol(){Ra.stop()}function ll(){Ra.start()}const Ra=new gy;Ra.setAnimationLoop(Bc),typeof self<"u"&&Ra.setContext(self),this.setAnimationLoop=function(L){Hr=L,ct.setAnimationLoop(L),L===null?Ra.stop():Ra.start()},ct.addEventListener("sessionstart",ol),ct.addEventListener("sessionend",ll),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const lt=ct.enabled===!0&&ct.isPresenting===!0,st=T!==null&&(Y===null||lt)&&T.begin(w,Y);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(J),J=ct.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,J,Y),U=Tt.get(L,O.length),U.init(J),O.push(U),Ye.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Yt.setFromProjectionMatrix(Ye,xa,J.reversedDepth),Qt=this.localClippingEnabled,Pt=yt.init(this.clippingPlanes,Qt),C=te.get(L,N.length),C.init(),N.push(C),ct.enabled===!0&&ct.isPresenting===!0){const It=w.xr.getDepthSensingMesh();It!==null&&Pi(It,J,-1/0,w.sortObjects)}Pi(L,J,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(vt,Ot),ae=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ae&&zt.addToRenderList(C,L),this.info.render.frame++,Pt===!0&&yt.beginShadows();const at=U.state.shadowsArray;if(Wt.render(at,L,J),Pt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&T.hasRenderPass())===!1){const It=C.opaque,Lt=C.transmissive;if(U.setupLights(),J.isArrayCamera){const qt=J.cameras;if(Lt.length>0)for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const le=qt[Zt];Pn(It,Lt,L,le)}ae&&zt.render(L);for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const le=qt[Zt];yn(C,L,le,le.viewport)}}else Lt.length>0&&Pn(It,Lt,L,J),ae&&zt.render(L),yn(C,L,J)}Y!==null&&W===0&&(Q.updateMultisampleRenderTarget(Y),Q.updateRenderTargetMipmap(Y)),st&&T.end(w),L.isScene===!0&&L.onAfterRender(w,L,J),At.resetDefaultState(),tt=-1,Z=null,O.pop(),O.length>0?(U=O[O.length-1],Pt===!0&&yt.setGlobalState(w.clippingPlanes,U.state.camera)):U=null,N.pop(),N.length>0?C=N[N.length-1]:C=null};function Pi(L,J,lt,st){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)lt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)U.pushLight(L),L.castShadow&&U.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Yt.intersectsSprite(L)){st&&be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ye);const It=Xt.update(L),Lt=L.material;Lt.visible&&C.push(L,It,Lt,lt,be.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Yt.intersectsObject(L))){const It=Xt.update(L),Lt=L.material;if(st&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),be.copy(L.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),be.copy(It.boundingSphere.center)),be.applyMatrix4(L.matrixWorld).applyMatrix4(Ye)),Array.isArray(Lt)){const qt=It.groups;for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const le=qt[Zt],Gt=Lt[le.materialIndex];Gt&&Gt.visible&&C.push(L,It,Gt,lt,be.z,le)}}else Lt.visible&&C.push(L,It,Lt,lt,be.z,null)}}const Dt=L.children;for(let It=0,Lt=Dt.length;It<Lt;It++)Pi(Dt[It],J,lt,st)}function yn(L,J,lt,st){const{opaque:at,transmissive:Dt,transparent:It}=L;U.setupLightsView(lt),Pt===!0&&yt.setGlobalState(w.clippingPlanes,lt),st&&jt.viewport(G.copy(st)),at.length>0&&Ji(at,J,lt),Dt.length>0&&Ji(Dt,J,lt),It.length>0&&Ji(It,J,lt),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Pn(L,J,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[st.id]===void 0){const Gt=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[st.id]=new Ma(1,1,{generateMipmaps:!0,type:Gt?is:wi,minFilter:zs,samples:Math.max(4,Ne.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Dt=U.state.transmissionRenderTarget[st.id],It=st.viewport||G;Dt.setSize(It.z*w.transmissionResolutionScale,It.w*w.transmissionResolutionScale);const Lt=w.getRenderTarget(),qt=w.getActiveCubeFace(),Zt=w.getActiveMipmapLevel();w.setRenderTarget(Dt),w.getClearColor(ft),z=w.getClearAlpha(),z<1&&w.setClearColor(16777215,.5),w.clear(),ae&&zt.render(lt);const ie=w.toneMapping;w.toneMapping=ya;const le=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),U.setupLightsView(st),Pt===!0&&yt.setGlobalState(w.clippingPlanes,st),Ji(L,lt,st),Q.updateMultisampleRenderTarget(Dt),Q.updateRenderTargetMipmap(Dt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let he=0,Ze=J.length;he<Ze;he++){const Ke=J[he],{object:Ae,geometry:Mn,material:Vt,group:Jn}=Ke;if(Vt.side===li&&Ae.layers.test(st.layers)){const oe=Vt.side;Vt.side=ci,Vt.needsUpdate=!0,Vr(Ae,lt,st,Mn,Vt,Jn),Vt.side=oe,Vt.needsUpdate=!0,Gt=!0}}Gt===!0&&(Q.updateMultisampleRenderTarget(Dt),Q.updateRenderTargetMipmap(Dt))}w.setRenderTarget(Lt,qt,Zt),w.setClearColor(ft,z),le!==void 0&&(st.viewport=le),w.toneMapping=ie}function Ji(L,J,lt){const st=J.isScene===!0?J.overrideMaterial:null;for(let at=0,Dt=L.length;at<Dt;at++){const It=L[at],{object:Lt,geometry:qt,group:Zt}=It;let ie=It.material;ie.allowOverride===!0&&st!==null&&(ie=st),Lt.layers.test(lt.layers)&&Vr(Lt,J,lt,qt,ie,Zt)}}function Vr(L,J,lt,st,at,Dt){L.onBeforeRender(w,J,lt,st,at,Dt),L.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),at.onBeforeRender(w,J,lt,st,L,Dt),at.transparent===!0&&at.side===li&&at.forceSinglePass===!1?(at.side=ci,at.needsUpdate=!0,w.renderBufferDirect(lt,J,st,at,L,Dt),at.side=Ws,at.needsUpdate=!0,w.renderBufferDirect(lt,J,st,at,L,Dt),at.side=li):w.renderBufferDirect(lt,J,st,at,L,Dt),L.onAfterRender(w,J,lt,st,at,Dt)}function kr(L,J,lt){J.isScene!==!0&&(J=Re);const st=R.get(L),at=U.state.lights,Dt=U.state.shadowsArray,It=at.state.version,Lt=Rt.getParameters(L,at.state,Dt,J,lt),qt=Rt.getProgramCacheKey(Lt);let Zt=st.programs;st.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?J.environment:null,st.fog=J.fog;const ie=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;st.envMap=pt.get(L.envMap||st.environment,ie),st.envMapRotation=st.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,Zt===void 0&&(L.addEventListener("dispose",Ce),Zt=new Map,st.programs=Zt);let le=Zt.get(qt);if(le!==void 0){if(st.currentProgram===le&&st.lightsStateVersion===It)return cl(L,Lt),le}else Lt.uniforms=Rt.getUniforms(L),L.onBeforeCompile(Lt,w),le=Rt.acquireProgram(Lt,qt),Zt.set(qt,le),st.uniforms=Lt.uniforms;const Gt=st.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Gt.clippingPlanes=yt.uniform),cl(L,Lt),st.needsLights=Ca(L),st.lightsStateVersion=It,st.needsLights&&(Gt.ambientLightColor.value=at.state.ambient,Gt.lightProbe.value=at.state.probe,Gt.directionalLights.value=at.state.directional,Gt.directionalLightShadows.value=at.state.directionalShadow,Gt.spotLights.value=at.state.spot,Gt.spotLightShadows.value=at.state.spotShadow,Gt.rectAreaLights.value=at.state.rectArea,Gt.ltc_1.value=at.state.rectAreaLTC1,Gt.ltc_2.value=at.state.rectAreaLTC2,Gt.pointLights.value=at.state.point,Gt.pointLightShadows.value=at.state.pointShadow,Gt.hemisphereLights.value=at.state.hemi,Gt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Gt.spotLightMatrix.value=at.state.spotLightMatrix,Gt.spotLightMap.value=at.state.spotLightMap,Gt.pointShadowMatrix.value=at.state.pointShadowMatrix),st.currentProgram=le,st.uniformsList=null,le}function Gc(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=Rf.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function cl(L,J){const lt=R.get(L);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function Qs(L,J,lt,st,at){J.isScene!==!0&&(J=Re),Q.resetTextureUnits();const Dt=J.fog,It=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?J.environment:null,Lt=Y===null?w.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ko,qt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Zt=pt.get(st.envMap||It,qt),ie=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,le=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Gt=!!lt.morphAttributes.position,he=!!lt.morphAttributes.normal,Ze=!!lt.morphAttributes.color;let Ke=ya;st.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ke=w.toneMapping);const Ae=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Mn=Ae!==void 0?Ae.length:0,Vt=R.get(st),Jn=U.state.lights;if(Pt===!0&&(Qt===!0||L!==Z)){const pn=L===Z&&st.id===tt;yt.setState(st,L,pn)}let oe=!1;st.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Jn.state.version||Vt.outputColorSpace!==Lt||at.isBatchedMesh&&Vt.batching===!1||!at.isBatchedMesh&&Vt.batching===!0||at.isBatchedMesh&&Vt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Vt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Vt.instancing===!1||!at.isInstancedMesh&&Vt.instancing===!0||at.isSkinnedMesh&&Vt.skinning===!1||!at.isSkinnedMesh&&Vt.skinning===!0||at.isInstancedMesh&&Vt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Vt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Vt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Vt.instancingMorph===!1&&at.morphTexture!==null||Vt.envMap!==Zt||st.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==yt.numPlanes||Vt.numIntersection!==yt.numIntersection)||Vt.vertexAlphas!==ie||Vt.vertexTangents!==le||Vt.morphTargets!==Gt||Vt.morphNormals!==he||Vt.morphColors!==Ze||Vt.toneMapping!==Ke||Vt.morphTargetsCount!==Mn)&&(oe=!0):(oe=!0,Vt.__version=st.version);let $n=Vt.currentProgram;oe===!0&&($n=kr(st,J,at));let _i=!1,$i=!1,vi=!1;const Pe=$n.getUniforms(),dn=Vt.uniforms;if(jt.useProgram($n.program)&&(_i=!0,$i=!0,vi=!0),st.id!==tt&&(tt=st.id,$i=!0),_i||Z!==L){jt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Pe.setValue(X,"projectionMatrix",L.projectionMatrix),Pe.setValue(X,"viewMatrix",L.matrixWorldInverse);const ta=Pe.map.cameraPosition;ta!==void 0&&ta.setValue(X,ue.setFromMatrixPosition(L.matrixWorld)),Ne.logarithmicDepthBuffer&&Pe.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Pe.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),Z!==L&&(Z=L,$i=!0,vi=!0)}if(Vt.needsLights&&(Jn.state.directionalShadowMap.length>0&&Pe.setValue(X,"directionalShadowMap",Jn.state.directionalShadowMap,Q),Jn.state.spotShadowMap.length>0&&Pe.setValue(X,"spotShadowMap",Jn.state.spotShadowMap,Q),Jn.state.pointShadowMap.length>0&&Pe.setValue(X,"pointShadowMap",Jn.state.pointShadowMap,Q)),at.isSkinnedMesh){Pe.setOptional(X,at,"bindMatrix"),Pe.setOptional(X,at,"bindMatrixInverse");const pn=at.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Pe.setValue(X,"boneTexture",pn.boneTexture,Q))}at.isBatchedMesh&&(Pe.setOptional(X,at,"batchingTexture"),Pe.setValue(X,"batchingTexture",at._matricesTexture,Q),Pe.setOptional(X,at,"batchingIdTexture"),Pe.setValue(X,"batchingIdTexture",at._indirectTexture,Q),Pe.setOptional(X,at,"batchingColorTexture"),at._colorsTexture!==null&&Pe.setValue(X,"batchingColorTexture",at._colorsTexture,Q));const ti=lt.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Ut.update(at,lt,$n),($i||Vt.receiveShadow!==at.receiveShadow)&&(Vt.receiveShadow=at.receiveShadow,Pe.setValue(X,"receiveShadow",at.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&J.environment!==null&&(dn.envMapIntensity.value=J.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=_C()),$i&&(Pe.setValue(X,"toneMappingExposure",w.toneMappingExposure),Vt.needsLights&&ul(dn,vi),Dt&&st.fog===!0&&Jt.refreshFogUniforms(dn,Dt),Jt.refreshMaterialUniforms(dn,st,bt,ht,U.state.transmissionRenderTarget[L.id]),Rf.upload(X,Gc(Vt),dn,Q)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Rf.upload(X,Gc(Vt),dn,Q),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Pe.setValue(X,"center",at.center),Pe.setValue(X,"modelViewMatrix",at.modelViewMatrix),Pe.setValue(X,"normalMatrix",at.normalMatrix),Pe.setValue(X,"modelMatrix",at.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const pn=st.uniformsGroups;for(let ta=0,Da=pn.length;ta<Da;ta++){const Xr=pn[ta];Ft.update(Xr,$n),Ft.bind(Xr,$n)}}return $n}function ul(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function Ca(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(L,J,lt){const st=R.get(L);st.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),R.get(L.texture).__webglTexture=J,R.get(L.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,J){const lt=R.get(L);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0};const os=X.createFramebuffer();this.setRenderTarget=function(L,J=0,lt=0){Y=L,F=J,W=lt;let st=null,at=!1,Dt=!1;if(L){const Lt=R.get(L);if(Lt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(X.FRAMEBUFFER,Lt.__webglFramebuffer),G.copy(L.viewport),V.copy(L.scissor),it=L.scissorTest,jt.viewport(G),jt.scissor(V),jt.setScissorTest(it),tt=-1;return}else if(Lt.__webglFramebuffer===void 0)Q.setupRenderTarget(L);else if(Lt.__hasExternalTextures)Q.rebindTextures(L,R.get(L.texture).__webglTexture,R.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ie=L.depthTexture;if(Lt.__boundDepthTexture!==ie){if(ie!==null&&R.has(ie)&&(L.width!==ie.image.width||L.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(L)}}const qt=L.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Dt=!0);const Zt=R.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Zt[J])?st=Zt[J][lt]:st=Zt[J],at=!0):L.samples>0&&Q.useMultisampledRTT(L)===!1?st=R.get(L).__webglMultisampledFramebuffer:Array.isArray(Zt)?st=Zt[lt]:st=Zt,G.copy(L.viewport),V.copy(L.scissor),it=L.scissorTest}else G.copy(nt).multiplyScalar(bt).floor(),V.copy(Et).multiplyScalar(bt).floor(),it=_t;if(lt!==0&&(st=os),jt.bindFramebuffer(X.FRAMEBUFFER,st)&&jt.drawBuffers(L,st),jt.viewport(G),jt.scissor(V),jt.setScissorTest(it),at){const Lt=R.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt.__webglTexture,lt)}else if(Dt){const Lt=J;for(let qt=0;qt<L.textures.length;qt++){const Zt=R.get(L.textures[qt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,lt,Lt)}}else if(L!==null&&lt!==0){const Lt=R.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Lt.__webglTexture,lt)}tt=-1},this.readRenderTargetPixels=function(L,J,lt,st,at,Dt,It,Lt=0){if(!(L&&L.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=R.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(qt=qt[It]),qt){jt.bindFramebuffer(X.FRAMEBUFFER,qt);try{const Zt=L.textures[Lt],ie=Zt.format,le=Zt.type;if(L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Lt),!Ne.textureFormatReadable(ie)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(le)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-st&&lt>=0&&lt<=L.height-at&&X.readPixels(J,lt,st,at,Ct.convert(ie),Ct.convert(le),Dt)}finally{const Zt=Y!==null?R.get(Y).__webglFramebuffer:null;jt.bindFramebuffer(X.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(L,J,lt,st,at,Dt,It,Lt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=R.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(qt=qt[It]),qt)if(J>=0&&J<=L.width-st&&lt>=0&&lt<=L.height-at){jt.bindFramebuffer(X.FRAMEBUFFER,qt);const Zt=L.textures[Lt],ie=Zt.format,le=Zt.type;if(L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Lt),!Ne.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Gt),X.bufferData(X.PIXEL_PACK_BUFFER,Dt.byteLength,X.STREAM_READ),X.readPixels(J,lt,st,at,Ct.convert(ie),Ct.convert(le),0);const he=Y!==null?R.get(Y).__webglFramebuffer:null;jt.bindFramebuffer(X.FRAMEBUFFER,he);const Ze=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await mE(X,Ze,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Gt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Dt),X.deleteBuffer(Gt),X.deleteSync(Ze),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,J=null,lt=0){const st=Math.pow(2,-lt),at=Math.floor(L.image.width*st),Dt=Math.floor(L.image.height*st),It=J!==null?J.x:0,Lt=J!==null?J.y:0;Q.setTexture2D(L,0),X.copyTexSubImage2D(X.TEXTURE_2D,lt,0,0,It,Lt,at,Dt),jt.unbindTexture()};const Js=X.createFramebuffer(),ls=X.createFramebuffer();this.copyTextureToTexture=function(L,J,lt=null,st=null,at=0,Dt=0){let It,Lt,qt,Zt,ie,le,Gt,he,Ze;const Ke=L.isCompressedTexture?L.mipmaps[Dt]:L.image;if(lt!==null)It=lt.max.x-lt.min.x,Lt=lt.max.y-lt.min.y,qt=lt.isBox3?lt.max.z-lt.min.z:1,Zt=lt.min.x,ie=lt.min.y,le=lt.isBox3?lt.min.z:0;else{const dn=Math.pow(2,-at);It=Math.floor(Ke.width*dn),Lt=Math.floor(Ke.height*dn),L.isDataArrayTexture?qt=Ke.depth:L.isData3DTexture?qt=Math.floor(Ke.depth*dn):qt=1,Zt=0,ie=0,le=0}st!==null?(Gt=st.x,he=st.y,Ze=st.z):(Gt=0,he=0,Ze=0);const Ae=Ct.convert(J.format),Mn=Ct.convert(J.type);let Vt;J.isData3DTexture?(Q.setTexture3D(J,0),Vt=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Q.setTexture2DArray(J,0),Vt=X.TEXTURE_2D_ARRAY):(Q.setTexture2D(J,0),Vt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const Jn=X.getParameter(X.UNPACK_ROW_LENGTH),oe=X.getParameter(X.UNPACK_IMAGE_HEIGHT),$n=X.getParameter(X.UNPACK_SKIP_PIXELS),_i=X.getParameter(X.UNPACK_SKIP_ROWS),$i=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Ke.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ke.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Zt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ie),X.pixelStorei(X.UNPACK_SKIP_IMAGES,le);const vi=L.isDataArrayTexture||L.isData3DTexture,Pe=J.isDataArrayTexture||J.isData3DTexture;if(L.isDepthTexture){const dn=R.get(L),ti=R.get(J),pn=R.get(dn.__renderTarget),ta=R.get(ti.__renderTarget);jt.bindFramebuffer(X.READ_FRAMEBUFFER,pn.__webglFramebuffer),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let Da=0;Da<qt;Da++)vi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,R.get(L).__webglTexture,at,le+Da),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,R.get(J).__webglTexture,Dt,Ze+Da)),X.blitFramebuffer(Zt,ie,It,Lt,Gt,he,It,Lt,X.DEPTH_BUFFER_BIT,X.NEAREST);jt.bindFramebuffer(X.READ_FRAMEBUFFER,null),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(at!==0||L.isRenderTargetTexture||R.has(L)){const dn=R.get(L),ti=R.get(J);jt.bindFramebuffer(X.READ_FRAMEBUFFER,Js),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,ls);for(let pn=0;pn<qt;pn++)vi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dn.__webglTexture,at,le+pn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dn.__webglTexture,at),Pe?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ti.__webglTexture,Dt,Ze+pn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ti.__webglTexture,Dt),at!==0?X.blitFramebuffer(Zt,ie,It,Lt,Gt,he,It,Lt,X.COLOR_BUFFER_BIT,X.NEAREST):Pe?X.copyTexSubImage3D(Vt,Dt,Gt,he,Ze+pn,Zt,ie,It,Lt):X.copyTexSubImage2D(Vt,Dt,Gt,he,Zt,ie,It,Lt);jt.bindFramebuffer(X.READ_FRAMEBUFFER,null),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pe?L.isDataTexture||L.isData3DTexture?X.texSubImage3D(Vt,Dt,Gt,he,Ze,It,Lt,qt,Ae,Mn,Ke.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(Vt,Dt,Gt,he,Ze,It,Lt,qt,Ae,Ke.data):X.texSubImage3D(Vt,Dt,Gt,he,Ze,It,Lt,qt,Ae,Mn,Ke):L.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Dt,Gt,he,It,Lt,Ae,Mn,Ke.data):L.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Dt,Gt,he,Ke.width,Ke.height,Ae,Ke.data):X.texSubImage2D(X.TEXTURE_2D,Dt,Gt,he,It,Lt,Ae,Mn,Ke);X.pixelStorei(X.UNPACK_ROW_LENGTH,Jn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,oe),X.pixelStorei(X.UNPACK_SKIP_PIXELS,$n),X.pixelStorei(X.UNPACK_SKIP_ROWS,_i),X.pixelStorei(X.UNPACK_SKIP_IMAGES,$i),Dt===0&&J.generateMipmaps&&X.generateMipmap(Vt),jt.unbindTexture()},this.initRenderTarget=function(L){R.get(L).__webglFramebuffer===void 0&&Q.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Q.setTextureCube(L,0):L.isData3DTexture?Q.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Q.setTexture2DArray(L,0):Q.setTexture2D(L,0),jt.unbindTexture()},this.resetState=function(){F=0,W=0,Y=null,jt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}}class xC{constructor(t,e={}){this.container=t,this.isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),this.quality={pixelRatio:Math.min(window.devicePixelRatio,2),antialias:!0,shadowsEnabled:!this.isMobile,particleMultiplier:this.isMobile?.4:1},this.scene=new YE;const i=6333946;this.scene.fog=new m0(i,.0025),this.renderer=new vC({antialias:this.quality.antialias,alpha:!1,powerPreference:"high-performance",precision:"highp"}),this.renderer.setPixelRatio(this.quality.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(6333946),this.renderer.outputColorSpace=Ln,this.renderer.toneMapping=a0,this.renderer.toneMappingExposure=1.2,this.quality.shadowsEnabled&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=void 0),t.appendChild(this.renderer.domElement),this.camera=new Yi(60,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.set(0,5,20),this._setupLighting(),this.clock=new ET,this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this.updateCallbacks=[]}_setupLighting(){const t=new yT(16777215,.6);this.scene.add(t);const e=new Zx(16777215,.8);e.position.set(20,40,20),this.quality.shadowsEnabled&&(e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=.5,e.shadow.camera.far=150,e.shadow.camera.left=-40,e.shadow.camera.right=40,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,e.shadow.bias=-.001),this.scene.add(e),this.dirLight=e;const i=new Zx(12248829,.5);i.position.set(-10,5,-10),this.scene.add(i);const s=new vT(6333946,16777215,.6);this.scene.add(s)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,e)}onUpdate(t){this.updateCallbacks.push(t)}render(){const t=this.clock.getDelta(),e=this.clock.getElapsedTime();for(const i of this.updateCallbacks)i(t,e);this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this._onResize),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}}function Qa(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function My(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jo={duration:.5,overwrite:!1,delay:0},T0,Vn,Qe,ba=1e8,jn=1/ba,Vm=Math.PI*2,SC=Vm/4,yC=0,by=Math.sqrt,MC=Math.cos,bC=Math.sin,Nn=function(t){return typeof t=="string"},cn=function(t){return typeof t=="function"},ss=function(t){return typeof t=="number"},A0=function(t){return typeof t>"u"},wa=function(t){return typeof t=="object"},fi=function(t){return t!==!1},w0=function(){return typeof window<"u"},yf=function(t){return cn(t)||Nn(t)},Ey=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Kn=Array.isArray,EC=/random\([^)]+\)/g,TC=/,\s*/g,SS=/(?:-?\.?\d|\.)+/gi,Ty=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Io=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ay=/[+-]=-?[.\d]+/,AC=/[^,'"\[\]\s]+/gi,wC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nn,ma,km,R0,Li={},Ff={},wy,Ry=function(t){return(Ff=$o(t,Li))&&mi},C0=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ac=function(t,e){return!e&&console.warn(t)},Cy=function(t,e){return t&&(Li[t]=e)&&Ff&&(Ff[t]=e)||Li},wc=function(){return 0},RC={suppressEvents:!0,isStart:!0,kill:!1},Cf={suppressEvents:!0,kill:!1},CC={suppressEvents:!0},D0={},ks=[],Xm={},Dy,Ai={},Vp={},yS=30,Df=[],U0="",L0=function(t){var e=t[0],i,s;if(wa(e)||cn(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(s=Df.length;s--&&!Df[s].targetTest(e););i=Df[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new tM(t[s],i)))||t.splice(s,1);return t},Lr=function(t){return t._gsap||L0(Ki(t))[0]._gsap},Uy=function(t,e,i){return(i=t[e])&&cn(i)?t[e]():A0(i)&&t.getAttribute&&t.getAttribute(e)||i},hi=function(t,e){return(t=t.split(",")).forEach(e)||t},fn=function(t){return Math.round(t*1e5)/1e5||0},en=function(t){return Math.round(t*1e7)/1e7||0},Vo=function(t,e){var i=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},DC=function(t,e){for(var i=e.length,s=0;t.indexOf(e[s])<0&&++s<i;);return s<i},zf=function(){var t=ks.length,e=ks.slice(0),i,s;for(Xm={},ks.length=0,i=0;i<t;i++)s=e[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},N0=function(t){return!!(t._initted||t._startAt||t.add)},Ly=function(t,e,i,s){ks.length&&!Vn&&zf(),t.render(e,i,!!(Vn&&e<0&&N0(t))),ks.length&&!Vn&&zf()},Ny=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(AC).length<2?e:Nn(t)?t.trim():t},Py=function(t){return t},Ni=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},UC=function(t){return function(e,i){for(var s in i)s in e||s==="duration"&&t||s==="ease"||(e[s]=i[s])}},$o=function(t,e){for(var i in e)t[i]=e[i];return t},MS=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=wa(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},If=function(t,e){var i={},s;for(s in t)s in e||(i[s]=t[s]);return i},_c=function(t){var e=t.parent||nn,i=t.keyframes?UC(Kn(t.keyframes)):Ni;if(fi(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},LC=function(t,e){for(var i=t.length,s=i===e.length;s&&i--&&t[i]===e[i];);return i<0},Oy=function(t,e,i,s,l){var u=t[s],f;if(l)for(f=e[l];u&&u[l]>f;)u=u._prev;return u?(e._next=u._next,u._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[s]=e,e._prev=u,e.parent=e._dp=t,e},jf=function(t,e,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var l=e._prev,u=e._next;l?l._next=u:t[i]===e&&(t[i]=u),u?u._prev=l:t[s]===e&&(t[s]=l),e._next=e._prev=e.parent=null},qs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Nr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},NC=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Wm=function(t,e,i,s){return t._startAt&&(Vn?t._startAt.revert(Cf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},PC=function o(t){return!t||t._ts&&o(t.parent)},bS=function(t){return t._repeat?tl(t._tTime,t=t.duration()+t._rDelay)*t:0},tl=function(t,e){var i=Math.floor(t=en(t/e));return t&&i===t?i-1:i},Bf=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Zf=function(t){return t._end=en(t._start+(t._tDur/Math.abs(t._ts||t._rts||jn)||0))},Kf=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=en(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Zf(t),i._dirty||Nr(i,t)),t},Fy=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Bf(t.rawTime(),e),(!e._dur||Fc(0,e.totalDuration(),i)-e._tTime>jn)&&e.render(i,!0)),Nr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-1e-8}},_a=function(t,e,i,s){return e.parent&&qs(e),e._start=en((ss(i)?i:i||t!==nn?qi(t,i,e):t._time)+e._delay),e._end=en(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Oy(t,e,"_first","_last",t._sort?"_start":0),qm(e)||(t._recent=e),s||Fy(t,e),t._ts<0&&Kf(t,t._tTime),t},zy=function(t,e){return(Li.ScrollTrigger||C0("scrollTrigger",e))&&Li.ScrollTrigger.create(e,t)},Iy=function(t,e,i,s,l){if(O0(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!Vn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dy!==Ri.frame)return ks.push(t),t._lazy=[l,s],1},OC=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},qm=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},FC=function(t,e,i,s){var l=t.ratio,u=e<0||!e&&(!t._start&&OC(t)&&!(!t._initted&&qm(t))||(t._ts<0||t._dp._ts<0)&&!qm(t))?0:1,f=t._rDelay,p=0,h,m,v;if(f&&t._repeat&&(p=Fc(0,t._tDur,e),m=tl(p,f),t._yoyo&&m&1&&(u=1-u),m!==tl(t._tTime,f)&&(l=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==l||Vn||s||t._zTime===jn||!e&&t._zTime){if(!t._initted&&Iy(t,e,s,i,p))return;for(v=t._zTime,t._zTime=e||(i?jn:0),i||(i=e&&!v),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=p,h=t._pt;h;)h.r(u,h.d),h=h._next;e<0&&Wm(t,e,i,!0),t._onUpdate&&!i&&Ci(t,"onUpdate"),p&&t._repeat&&!i&&t.parent&&Ci(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&qs(t,1),!i&&!Vn&&(Ci(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},zC=function(t,e,i){var s;if(i>e)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},el=function(t,e,i,s){var l=t._repeat,u=en(e)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=u/t._dur),t._dur=u,t._tDur=l?l<0?1e10:en(u*(l+1)+t._rDelay*l):u,f>0&&!s&&Kf(t,t._tTime=t._tDur*f),t.parent&&Zf(t),i||Nr(t.parent,t),t},ES=function(t){return t instanceof si?Nr(t):el(t,t._dur)},IC={_start:0,endTime:wc,totalDuration:wc},qi=function o(t,e,i){var s=t.labels,l=t._recent||IC,u=t.duration()>=ba?l.endTime(!1):t._dur,f,p,h;return Nn(e)&&(isNaN(e)||e in s)?(p=e.charAt(0),h=e.substr(-1)==="%",f=e.indexOf("="),p==="<"||p===">"?(f>=0&&(e=e.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(f<0?l:i).totalDuration()/100:1)):f<0?(e in s||(s[e]=u),s[e]):(p=parseFloat(e.charAt(f-1)+e.substr(f+1)),h&&i&&(p=p/100*(Kn(i)?i[0]:i).totalDuration()),f>1?o(t,e.substr(0,f-1),i)+p:u+p)):e==null?u:+e},vc=function(t,e,i){var s=ss(e[1]),l=(s?2:1)+(t<2?0:1),u=e[l],f,p;if(s&&(u.duration=e[1]),u.parent=i,t){for(f=u,p=i;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=fi(p.vars.inherit)&&p.parent;u.immediateRender=fi(f.immediateRender),t<2?u.runBackwards=1:u.startAt=e[l-1]}return new xn(e[0],u,e[l+1])},Ks=function(t,e){return t||t===0?e(t):e},Fc=function(t,e,i){return i<t?t:i>e?e:i},Yn=function(t,e){return!Nn(t)||!(e=wC.exec(t))?"":e[1]},BC=function(t,e,i){return Ks(i,function(s){return Fc(t,e,s)})},Ym=[].slice,By=function(t,e){return t&&wa(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&wa(t[0]))&&!t.nodeType&&t!==ma},GC=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(s){var l;return Nn(s)&&!e||By(s,1)?(l=i).push.apply(l,Ki(s)):i.push(s)})||i},Ki=function(t,e,i){return Qe&&!e&&Qe.selector?Qe.selector(t):Nn(t)&&!i&&(km||!nl())?Ym.call((e||R0).querySelectorAll(t),0):Kn(t)?GC(t,i):By(t)?Ym.call(t,0):t?[t]:[]},jm=function(t){return t=Ki(t)[0]||Ac("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Ki(e,i.querySelectorAll?i:i===t?Ac("Invalid scope")||R0.createElement("div"):t)}},Gy=function(t){return t.sort(function(){return .5-Math.random()})},Hy=function(t){if(cn(t))return t;var e=wa(t)?t:{each:t},i=Pr(e.ease),s=e.from||0,l=parseFloat(e.base)||0,u={},f=s>0&&s<1,p=isNaN(s)||f,h=e.axis,m=s,v=s;return Nn(s)?m=v={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(m=s[0],v=s[1]),function(_,x,y){var b=(y||e).length,S=u[b],M,E,D,C,U,N,O,T,w;if(!S){if(w=e.grid==="auto"?0:(e.grid||[1,ba])[1],!w){for(O=-1e8;O<(O=y[w++].getBoundingClientRect().left)&&w<b;);w<b&&w--}for(S=u[b]=[],M=p?Math.min(w,b)*m-.5:s%w,E=w===ba?0:p?b*v/w-.5:s/w|0,O=0,T=ba,N=0;N<b;N++)D=N%w-M,C=E-(N/w|0),S[N]=U=h?Math.abs(h==="y"?C:D):by(D*D+C*C),U>O&&(O=U),U<T&&(T=U);s==="random"&&Gy(S),S.max=O-T,S.min=T,S.v=b=(parseFloat(e.amount)||parseFloat(e.each)*(w>b?b-1:h?h==="y"?b/w:w:Math.max(w,b/w))||0)*(s==="edges"?-1:1),S.b=b<0?l-b:l,S.u=Yn(e.amount||e.each)||0,i=i&&b<0?Qy(i):i}return b=(S[_]-S.min)/S.max||0,en(S.b+(i?i(b):b)*S.v)+S.u}},Zm=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=en(Math.round(parseFloat(i)/t)*t*e);return(s-s%1)/e+(ss(i)?0:Yn(i))}},Vy=function(t,e){var i=Kn(t),s,l;return!i&&wa(t)&&(s=i=t.radius||ba,t.values?(t=Ki(t.values),(l=!ss(t[0]))&&(s*=s)):t=Zm(t.increment)),Ks(e,i?cn(t)?function(u){return l=t(u),Math.abs(l-u)<=s?l:u}:function(u){for(var f=parseFloat(l?u.x:u),p=parseFloat(l?u.y:0),h=ba,m=0,v=t.length,_,x;v--;)l?(_=t[v].x-f,x=t[v].y-p,_=_*_+x*x):_=Math.abs(t[v]-f),_<h&&(h=_,m=v);return m=!s||h<=s?t[m]:u,l||m===u||ss(u)?m:m+Yn(u)}:Zm(t))},ky=function(t,e,i,s){return Ks(Kn(t)?!e:i===!0?!!(i=0):!s,function(){return Kn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*s)/s})},HC=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(s){return e.reduce(function(l,u){return u(l)},s)}},VC=function(t,e){return function(i){return t(parseFloat(i))+(e||Yn(i))}},kC=function(t,e,i){return Wy(t,e,0,1,i)},Xy=function(t,e,i){return Ks(i,function(s){return t[~~e(s)]})},XC=function o(t,e,i){var s=e-t;return Kn(t)?Xy(t,o(0,t.length),e):Ks(i,function(l){return(s+(l-t)%s)%s+t})},WC=function o(t,e,i){var s=e-t,l=s*2;return Kn(t)?Xy(t,o(0,t.length-1),e):Ks(i,function(u){return u=(l+(u-t)%l)%l||0,t+(u>s?l-u:u)})},Rc=function(t){return t.replace(EC,function(e){var i=e.indexOf("[")+1,s=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(TC);return ky(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},Wy=function(t,e,i,s,l){var u=e-t,f=s-i;return Ks(l,function(p){return i+((p-t)/u*f||0)})},qC=function o(t,e,i,s){var l=isNaN(t+e)?0:function(x){return(1-x)*t+x*e};if(!l){var u=Nn(t),f={},p,h,m,v,_;if(i===!0&&(s=1)&&(i=null),u)t={p:t},e={p:e};else if(Kn(t)&&!Kn(e)){for(m=[],v=t.length,_=v-2,h=1;h<v;h++)m.push(o(t[h-1],t[h]));v--,l=function(y){y*=v;var b=Math.min(_,~~y);return m[b](y-b)},i=e}else s||(t=$o(Kn(t)?[]:{},t));if(!m){for(p in e)P0.call(f,t,p,"get",e[p]);l=function(y){return I0(y,f)||(u?t.p:t)}}}return Ks(i,l)},TS=function(t,e,i){var s=t.labels,l=ba,u,f,p;for(u in s)f=s[u]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(p=u,l=f);return p},Ci=function(t,e,i){var s=t.vars,l=s[e],u=Qe,f=t._ctx,p,h,m;if(l)return p=s[e+"Params"],h=s.callbackScope||t,i&&ks.length&&zf(),f&&(Qe=f),m=p?l.apply(h,p):l.call(h),Qe=u,m},pc=function(t){return qs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Vn),t.progress()<1&&Ci(t,"onInterrupt"),t},Bo,qy=[],Yy=function(t){if(t)if(t=!t.name&&t.default||t,w0()||t.headless){var e=t.name,i=cn(t),s=e&&!i&&t.init?function(){this._props=[]}:t,l={init:wc,render:I0,add:P0,kill:l3,modifier:o3,rawVars:0},u={targetTest:0,get:0,getSetter:z0,aliases:{},register:0};if(nl(),t!==s){if(Ai[e])return;Ni(s,Ni(If(t,l),u)),$o(s.prototype,$o(l,If(t,u))),Ai[s.prop=e]=s,t.targetTest&&(Df.push(s),D0[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Cy(e,s),t.register&&t.register(mi,s,di)}else qy.push(t)},He=255,mc={aqua:[0,He,He],lime:[0,He,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,He],navy:[0,0,128],white:[He,He,He],olive:[128,128,0],yellow:[He,He,0],orange:[He,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[He,0,0],pink:[He,192,203],cyan:[0,He,He],transparent:[He,He,He,0]},kp=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*He+.5|0},jy=function(t,e,i){var s=t?ss(t)?[t>>16,t>>8&He,t&He]:0:mc.black,l,u,f,p,h,m,v,_,x,y;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),mc[t])s=mc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),u=t.charAt(2),f=t.charAt(3),t="#"+l+l+u+u+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&He,s&He,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&He,t&He]}else if(t.substr(0,3)==="hsl"){if(s=y=t.match(SS),!e)p=+s[0]%360/360,h=+s[1]/100,m=+s[2]/100,u=m<=.5?m*(h+1):m+h-m*h,l=m*2-u,s.length>3&&(s[3]*=1),s[0]=kp(p+1/3,l,u),s[1]=kp(p,l,u),s[2]=kp(p-1/3,l,u);else if(~t.indexOf("="))return s=t.match(Ty),i&&s.length<4&&(s[3]=1),s}else s=t.match(SS)||mc.transparent;s=s.map(Number)}return e&&!y&&(l=s[0]/He,u=s[1]/He,f=s[2]/He,v=Math.max(l,u,f),_=Math.min(l,u,f),m=(v+_)/2,v===_?p=h=0:(x=v-_,h=m>.5?x/(2-v-_):x/(v+_),p=v===l?(u-f)/x+(u<f?6:0):v===u?(f-l)/x+2:(l-u)/x+4,p*=60),s[0]=~~(p+.5),s[1]=~~(h*100+.5),s[2]=~~(m*100+.5)),i&&s.length<4&&(s[3]=1),s},Zy=function(t){var e=[],i=[],s=-1;return t.split(Xs).forEach(function(l){var u=l.match(Io)||[];e.push.apply(e,u),i.push(s+=u.length+1)}),e.c=i,e},AS=function(t,e,i){var s="",l=(t+s).match(Xs),u=e?"hsla(":"rgba(",f=0,p,h,m,v;if(!l)return t;if(l=l.map(function(_){return(_=jy(_,e,1))&&u+(e?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(m=Zy(t),p=i.c,p.join(s)!==m.c.join(s)))for(h=t.replace(Xs,"1").split(Io),v=h.length-1;f<v;f++)s+=h[f]+(~p.indexOf(f)?l.shift()||u+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!h)for(h=t.split(Xs),v=h.length-1;f<v;f++)s+=h[f]+l[f];return s+h[v]},Xs=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in mc)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),YC=/hsl[a]?\(/,Ky=function(t){var e=t.join(" "),i;if(Xs.lastIndex=0,Xs.test(e))return i=YC.test(e),t[1]=AS(t[1],i),t[0]=AS(t[0],i,Zy(t[1])),!0},Cc,Ri=function(){var o=Date.now,t=500,e=33,i=o(),s=i,l=1e3/240,u=l,f=[],p,h,m,v,_,x,y=function b(S){var M=o()-s,E=S===!0,D,C,U,N;if((M>t||M<0)&&(i+=M-e),s+=M,U=s-i,D=U-u,(D>0||E)&&(N=++v.frame,_=U-v.time*1e3,v.time=U=U/1e3,u+=D+(D>=l?4:l-D),C=1),E||(p=h(b)),C)for(x=0;x<f.length;x++)f[x](U,_,N,S)};return v={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(S){return _/(1e3/(S||60))},wake:function(){wy&&(!km&&w0()&&(ma=km=window,R0=ma.document||{},Li.gsap=mi,(ma.gsapVersions||(ma.gsapVersions=[])).push(mi.version),Ry(Ff||ma.GreenSockGlobals||!ma.gsap&&ma||{}),qy.forEach(Yy)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&v.sleep(),h=m||function(S){return setTimeout(S,u-v.time*1e3+1|0)},Cc=1,y(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(p),Cc=0,h=wc},lagSmoothing:function(S,M){t=S||1/0,e=Math.min(M||33,t)},fps:function(S){l=1e3/(S||240),u=v.time*1e3+l},add:function(S,M,E){var D=M?function(C,U,N,O){S(C,U,N,O),v.remove(D)}:S;return v.remove(S),f[E?"unshift":"push"](D),nl(),D},remove:function(S,M){~(M=f.indexOf(S))&&f.splice(M,1)&&x>=M&&x--},_listeners:f},v}(),nl=function(){return!Cc&&Ri.wake()},Me={},jC=/^[\d.\-M][\d.\-,\s]/,ZC=/["']/g,KC=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),s=i[0],l=1,u=i.length,f,p,h;l<u;l++)p=i[l],f=l!==u-1?p.lastIndexOf(","):p.length,h=p.substr(0,f),e[s]=isNaN(h)?h.replace(ZC,"").trim():+h,s=p.substr(f+1).trim();return e},QC=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<i?t.indexOf(")",i+1):i)},JC=function(t){var e=(t+"").split("("),i=Me[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[KC(e[1])]:QC(t).split(",").map(Ny)):Me._CE&&jC.test(t)?Me._CE("",t):i},Qy=function(t){return function(e){return 1-t(1-e)}},Jy=function o(t,e){for(var i=t._first,s;i;)i instanceof si?o(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?o(i.timeline,e):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=e)),i=i._next},Pr=function(t,e){return t&&(cn(t)?t:Me[t]||JC(t))||e},Gr=function(t,e,i,s){i===void 0&&(i=function(p){return 1-e(1-p)}),s===void 0&&(s=function(p){return p<.5?e(p*2)/2:1-e((1-p)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:s},u;return hi(t,function(f){Me[f]=Li[f]=l,Me[u=f.toLowerCase()]=i;for(var p in l)Me[u+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Me[f+"."+p]=l[p]}),l},$y=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Xp=function o(t,e,i){var s=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),u=l/Vm*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*bC((m-u)*l)+1},p=t==="out"?f:t==="in"?function(h){return 1-f(1-h)}:$y(f);return l=Vm/l,p.config=function(h,m){return o(t,h,m)},p},Wp=function o(t,e){e===void 0&&(e=1.70158);var i=function(u){return u?--u*u*((e+1)*u+e)+1:0},s=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:$y(i);return s.config=function(l){return o(t,l)},s};hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Gr(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;Gr("Elastic",Xp("in"),Xp("out"),Xp());(function(o,t){var e=1/t,i=2*e,s=2.5*e,l=function(f){return f<e?o*f*f:f<i?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Gr("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);Gr("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Gr("Circ",function(o){return-(by(1-o*o)-1)});Gr("Sine",function(o){return o===1?1:-MC(o*SC)+1});Gr("Back",Wp("in"),Wp("out"),Wp());Me.SteppedEase=Me.steps=Li.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,s=t+(e?0:1),l=e?1:0,u=1-jn;return function(f){return((s*Fc(0,u,f)|0)+l)*i}}};Jo.ease=Me["quad.out"];hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return U0+=o+","+o+"Params,"});var tM=function(t,e){this.id=yC++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Uy,this.set=e?e.getSetter:z0},Dc=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,el(this,+e.duration,1,1),this.data=e.data,Qe&&(this._ctx=Qe,Qe.data.push(this)),Cc||Ri.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,el(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(nl(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Kf(this,i),!l._dp||l.parent||Fy(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&_a(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===jn||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ly(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+bS(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+bS(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,s):this._repeat?tl(this._tTime,l)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Bf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(Fc(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),Zf(this),NC(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(nl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jn&&(this._tTime-=jn)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=en(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&_a(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(fi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bf(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=CC);var s=Vn;return Vn=i,N0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Vn=s,this},t.globalTime=function(i){for(var s=this,l=arguments.length?i:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ES(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,ES(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(qi(this,i),fi(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,fi(s)),this._dur||(this._zTime=-1e-8),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=s&&l<this.endTime(!0)-jn)},t.eventCallback=function(i,s,l){var u=this.vars;return arguments.length>1?(s?(u[i]=s,l&&(u[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},t.then=function(i){var s=this,l=s._prom;return new Promise(function(u){var f=cn(i)?i:Py,p=function(){var m=s.then;s.then=null,l&&l(),cn(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=m),u(f),s.then=m};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},t.kill=function(){pc(this)},o}();Ni(Dc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var si=function(o){My(t,o);function t(i,s){var l;return i===void 0&&(i={}),l=o.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=fi(i.sortChildren),nn&&_a(i.parent||nn,Qa(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&zy(Qa(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(s,l,u){return vc(0,arguments,this),this},e.from=function(s,l,u){return vc(1,arguments,this),this},e.fromTo=function(s,l,u,f){return vc(2,arguments,this),this},e.set=function(s,l,u){return l.duration=0,l.parent=this,_c(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new xn(s,l,qi(this,u),1),this},e.call=function(s,l,u){return _a(this,xn.delayedCall(0,s,l),u)},e.staggerTo=function(s,l,u,f,p,h,m){return u.duration=l,u.stagger=u.stagger||f,u.onComplete=h,u.onCompleteParams=m,u.parent=this,new xn(s,u,qi(this,p)),this},e.staggerFrom=function(s,l,u,f,p,h,m){return u.runBackwards=1,_c(u).immediateRender=fi(u.immediateRender),this.staggerTo(s,l,u,f,p,h,m)},e.staggerFromTo=function(s,l,u,f,p,h,m,v){return f.startAt=u,_c(f).immediateRender=fi(f.immediateRender),this.staggerTo(s,l,f,p,h,m,v)},e.render=function(s,l,u){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=s<=0?0:en(s),v=this._zTime<0!=s<0&&(this._initted||!h),_,x,y,b,S,M,E,D,C,U,N,O;if(this!==nn&&m>p&&s>=0&&(m=p),m!==this._tTime||u||v){if(f!==this._time&&h&&(m+=this._time-f,s+=this._time-f),_=m,C=this._start,D=this._ts,M=!D,v&&(h||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(N=this._yoyo,S=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,u);if(_=en(m%S),m===p?(b=this._repeat,_=h):(U=en(m/S),b=~~U,b&&b===U&&(_=h,b--),_>h&&(_=h)),U=tl(this._tTime,S),!f&&this._tTime&&U!==b&&this._tTime-U*S-this._dur<=0&&(U=b),N&&b&1&&(_=h-_,O=1),b!==U&&!this._lock){var T=N&&U&1,w=T===(N&&b&1);if(b<U&&(T=!T),f=T?0:m%h?h:m,this._lock=1,this.render(f||(O?0:en(b*S)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,U=b),f&&f!==this._time||M!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,p=this._tDur,w&&(this._lock=2,f=T?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!M)return this;Jy(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=zC(this,en(f),en(_)),E&&(m-=_-(_=E._start))),this._tTime=m,this._time=_,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&h&&!l&&!U&&(Ci(this,"onStart"),this._tTime!==m))return this;if(_>=f&&s>=0)for(x=this._first;x;){if(y=x._next,(x._act||_>=x._start)&&x._ts&&E!==x){if(x.parent!==this)return this.render(s,l,u);if(x.render(x._ts>0?(_-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(_-x._start)*x._ts,l,u),_!==this._time||!this._ts&&!M){E=0,y&&(m+=this._zTime=-1e-8);break}}x=y}else{x=this._last;for(var k=s<0?s:_;x;){if(y=x._prev,(x._act||k<=x._end)&&x._ts&&E!==x){if(x.parent!==this)return this.render(s,l,u);if(x.render(x._ts>0?(k-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(k-x._start)*x._ts,l,u||Vn&&N0(x)),_!==this._time||!this._ts&&!M){E=0,y&&(m+=this._zTime=k?-1e-8:jn);break}}x=y}}if(E&&!l&&(this.pause(),E.render(_>=f?0:-1e-8)._zTime=_>=f?1:-1,this._ts))return this._start=C,Zf(this),this.render(s,l,u);this._onUpdate&&!l&&Ci(this,"onUpdate",!0),(m===p&&this._tTime>=this.totalDuration()||!m&&f)&&(C===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(m===p&&this._ts>0||!m&&this._ts<0)&&qs(this,1),!l&&!(s<0&&!f)&&(m||f||!p)&&(Ci(this,m===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<p&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,l){var u=this;if(ss(l)||(l=qi(this,l,s)),!(s instanceof Dc)){if(Kn(s))return s.forEach(function(f){return u.add(f,l)}),this;if(Nn(s))return this.addLabel(s,l);if(cn(s))s=xn.delayedCall(0,s);else return this}return this!==s?_a(this,s,l):this},e.getChildren=function(s,l,u,f){s===void 0&&(s=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),f===void 0&&(f=-1e8);for(var p=[],h=this._first;h;)h._start>=f&&(h instanceof xn?l&&p.push(h):(u&&p.push(h),s&&p.push.apply(p,h.getChildren(!0,l,u)))),h=h._next;return p},e.getById=function(s){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===s)return l[u]},e.remove=function(s){return Nn(s)?this.removeLabel(s):cn(s)?this.killTweensOf(s):(s.parent===this&&jf(this,s),s===this._recent&&(this._recent=this._last),Nr(this))},e.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(Ri.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},e.addLabel=function(s,l){return this.labels[s]=qi(this,l),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,l,u){var f=xn.delayedCall(0,l||wc,u);return f.data="isPause",this._hasPause=1,_a(this,f,qi(this,s))},e.removePause=function(s){var l=this._first;for(s=qi(this,s);l;)l._start===s&&l.data==="isPause"&&qs(l),l=l._next},e.killTweensOf=function(s,l,u){for(var f=this.getTweensOf(s,u),p=f.length;p--;)Bs!==f[p]&&f[p].kill(s,l);return this},e.getTweensOf=function(s,l){for(var u=[],f=Ki(s),p=this._first,h=ss(l),m;p;)p instanceof xn?DC(p._targets,f)&&(h?(!Bs||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&u.push(p):(m=p.getTweensOf(f,l)).length&&u.push.apply(u,m),p=p._next;return u},e.tweenTo=function(s,l){l=l||{};var u=this,f=qi(u,s),p=l,h=p.startAt,m=p.onStart,v=p.onStartParams,_=p.immediateRender,x,y=xn.to(u,Ni({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:u._time))/u.timeScale())||jn,onStart:function(){if(u.pause(),!x){var S=l.duration||Math.abs((f-(h&&"time"in h?h.time:u._time))/u.timeScale());y._dur!==S&&el(y,S,0,1).render(y._time,!0,!0),x=1}m&&m.apply(y,v||[])}},l));return _?y.render(0):y},e.tweenFromTo=function(s,l,u){return this.tweenTo(l,Ni({startAt:{time:qi(this,s)}},u))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),TS(this,qi(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),TS(this,qi(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+jn)},e.shiftChildren=function(s,l,u){u===void 0&&(u=0);var f=this._first,p=this.labels,h;for(s=en(s);f;)f._start>=u&&(f._start+=s,f._end+=s),f=f._next;if(l)for(h in p)p[h]>=u&&(p[h]+=s);return Nr(this)},e.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Nr(this)},e.totalDuration=function(s){var l=0,u=this,f=u._last,p=ba,h,m,v;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(v=u.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>p&&u._sort&&f._ts&&!u._lock?(u._lock=1,_a(u,f,m-f._delay,1)._lock=0):p=m,m<0&&f._ts&&(l-=m,(!v&&!u._dp||v&&v.smoothChildTiming)&&(u._start+=en(m/u._ts),u._time-=m,u._tTime-=m),u.shiftChildren(-m,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=h;el(u,u===nn&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(s){if(nn._ts&&(Ly(nn,Bf(s,nn)),Dy=Ri.frame),Ri.frame>=yS){yS+=Ui.autoSleep||120;var l=nn._first;if((!l||!l._ts)&&Ui.autoSleep&&Ri._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Ri.sleep()}}},t}(Dc);Ni(si.prototype,{_lock:0,_hasPause:0,_forcing:0});var $C=function(t,e,i,s,l,u,f){var p=new di(this._pt,t,e,0,1,rM,null,l),h=0,m=0,v,_,x,y,b,S,M,E;for(p.b=i,p.e=s,i+="",s+="",(M=~s.indexOf("random("))&&(s=Rc(s)),u&&(E=[i,s],u(E,t,e),i=E[0],s=E[1]),_=i.match(Hp)||[];v=Hp.exec(s);)y=v[0],b=s.substring(h,v.index),x?x=(x+1)%5:b.substr(-5)==="rgba("&&(x=1),y!==_[m++]&&(S=parseFloat(_[m-1])||0,p._pt={_next:p._pt,p:b||m===1?b:",",s:S,c:y.charAt(1)==="="?Vo(S,y)-S:parseFloat(y)-S,m:x&&x<4?Math.round:0},h=Hp.lastIndex);return p.c=h<s.length?s.substring(h,s.length):"",p.fp=f,(Ay.test(s)||M)&&(p.e=0),this._pt=p,p},P0=function(t,e,i,s,l,u,f,p,h,m){cn(s)&&(s=s(l||0,t,u));var v=t[e],_=i!=="get"?i:cn(v)?h?t[e.indexOf("set")||!cn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():v,x=cn(v)?h?a3:aM:F0,y;if(Nn(s)&&(~s.indexOf("random(")&&(s=Rc(s)),s.charAt(1)==="="&&(y=Vo(_,s)+(Yn(_)||0),(y||y===0)&&(s=y))),!m||_!==s||Km)return!isNaN(_*s)&&s!==""?(y=new di(this._pt,t,e,+_||0,s-(_||0),typeof v=="boolean"?r3:sM,0,x),h&&(y.fp=h),f&&y.modifier(f,this,t),this._pt=y):(!v&&!(e in t)&&C0(e,s),$C.call(this,t,e,_,s,x,p||Ui.stringFilter,h))},t3=function(t,e,i,s,l){if(cn(t)&&(t=xc(t,l,e,i,s)),!wa(t)||t.style&&t.nodeType||Kn(t)||Ey(t))return Nn(t)?xc(t,l,e,i,s):t;var u={},f;for(f in t)u[f]=xc(t[f],l,e,i,s);return u},eM=function(t,e,i,s,l,u){var f,p,h,m;if(Ai[t]&&(f=new Ai[t]).init(l,f.rawVars?e[t]:t3(e[t],s,l,u,i),i,s,u)!==!1&&(i._pt=p=new di(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==Bo))for(h=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=p;return f},Bs,Km,O0=function o(t,e,i){var s=t.vars,l=s.ease,u=s.startAt,f=s.immediateRender,p=s.lazy,h=s.onUpdate,m=s.runBackwards,v=s.yoyoEase,_=s.keyframes,x=s.autoRevert,y=t._dur,b=t._startAt,S=t._targets,M=t.parent,E=M&&M.data==="nested"?M.vars.targets:S,D=t._overwrite==="auto"&&!T0,C=t.timeline,U,N,O,T,w,k,F,W,Y,tt,Z,G,V;if(C&&(!_||!l)&&(l="none"),t._ease=Pr(l,Jo.ease),t._yEase=v?Qy(Pr(v===!0?l:v,Jo.ease)):0,v&&t._yoyo&&!t._repeat&&(v=t._yEase,t._yEase=t._ease,t._ease=v),t._from=!C&&!!s.runBackwards,!C||_&&!s.stagger){if(W=S[0]?Lr(S[0]).harness:0,G=W&&s[W.prop],U=If(s,D0),b&&(b._zTime<0&&b.progress(1),e<0&&m&&f&&!x?b.render(-1,!0):b.revert(m&&y?Cf:RC),b._lazy=0),u){if(qs(t._startAt=xn.set(S,Ni({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!b&&fi(p),startAt:null,delay:0,onUpdate:h&&function(){return Ci(t,"onUpdate")},stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Vn||!f&&!x)&&t._startAt.revert(Cf),f&&y&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(m&&y&&!b){if(e&&(f=!1),O=Ni({overwrite:!1,data:"isFromStart",lazy:f&&!b&&fi(p),immediateRender:f,stagger:0,parent:M},U),G&&(O[W.prop]=G),qs(t._startAt=xn.set(S,O)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Vn?t._startAt.revert(Cf):t._startAt.render(-1,!0)),t._zTime=e,!f)o(t._startAt,jn,jn);else if(!e)return}for(t._pt=t._ptCache=0,p=y&&fi(p)||p&&!y,N=0;N<S.length;N++){if(w=S[N],F=w._gsap||L0(S)[N]._gsap,t._ptLookup[N]=tt={},Xm[F.id]&&ks.length&&zf(),Z=E===S?N:E.indexOf(w),W&&(Y=new W).init(w,G||U,t,Z,E)!==!1&&(t._pt=T=new di(t._pt,w,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(it){tt[it]=T}),Y.priority&&(k=1)),!W||G)for(O in U)Ai[O]&&(Y=eM(O,U,t,Z,w,E))?Y.priority&&(k=1):tt[O]=T=P0.call(t,w,O,"get",U[O],Z,E,0,s.stringFilter);t._op&&t._op[N]&&t.kill(w,t._op[N]),D&&t._pt&&(Bs=t,nn.killTweensOf(w,tt,t.globalTime(e)),V=!t.parent,Bs=0),t._pt&&p&&(Xm[F.id]=1)}k&&oM(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!V,_&&e<=0&&C.render(ba,!0,!0)},e3=function(t,e,i,s,l,u,f,p){var h=(t._pt&&t._ptCache||(t._ptCache={}))[e],m,v,_,x;if(!h)for(h=t._ptCache[e]=[],_=t._ptLookup,x=t._targets.length;x--;){if(m=_[x][e],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==e&&m.fp!==e;)m=m._next;if(!m)return Km=1,t.vars[e]="+=0",O0(t,f),Km=0,p?Ac(e+" not eligible for reset"):1;h.push(m)}for(x=h.length;x--;)v=h[x],m=v._pt||v,m.s=(s||s===0)&&!l?s:m.s+(s||0)+u*m.c,m.c=i-m.s,v.e&&(v.e=fn(i)+Yn(v.e)),v.b&&(v.b=m.s+Yn(v.b))},n3=function(t,e){var i=t[0]?Lr(t[0]).harness:0,s=i&&i.aliases,l,u,f,p;if(!s)return e;l=$o({},e);for(u in s)if(u in l)for(p=s[u].split(","),f=p.length;f--;)l[p[f]]=l[u];return l},i3=function(t,e,i,s){var l=e.ease||s||"power1.inOut",u,f;if(Kn(e))f=i[t]||(i[t]=[]),e.forEach(function(p,h){return f.push({t:h/(e.length-1)*100,v:p,e:l})});else for(u in e)f=i[u]||(i[u]=[]),u==="ease"||f.push({t:parseFloat(t),v:e[u],e:l})},xc=function(t,e,i,s,l){return cn(t)?t.call(e,i,s,l):Nn(t)&&~t.indexOf("random(")?Rc(t):t},nM=U0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",iM={};hi(nM+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return iM[o]=1});var xn=function(o){My(t,o);function t(i,s,l,u){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,u?s:_c(s))||this;var p=f.vars,h=p.duration,m=p.delay,v=p.immediateRender,_=p.stagger,x=p.overwrite,y=p.keyframes,b=p.defaults,S=p.scrollTrigger,M=p.yoyoEase,E=s.parent||nn,D=(Kn(i)||Ey(i)?ss(i[0]):"length"in s)?[i]:Ki(i),C,U,N,O,T,w,k,F;if(f._targets=D.length?L0(D):Ac("GSAP target "+i+" not found. https://gsap.com",!Ui.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,y||_||yf(h)||yf(m)){if(s=f.vars,C=f.timeline=new si({data:"nested",defaults:b||{},targets:E&&E.data==="nested"?E.vars.targets:D}),C.kill(),C.parent=C._dp=Qa(f),C._start=0,_||yf(h)||yf(m)){if(O=D.length,k=_&&Hy(_),wa(_))for(T in _)~nM.indexOf(T)&&(F||(F={}),F[T]=_[T]);for(U=0;U<O;U++)N=If(s,iM),N.stagger=0,M&&(N.yoyoEase=M),F&&$o(N,F),w=D[U],N.duration=+xc(h,Qa(f),U,w,D),N.delay=(+xc(m,Qa(f),U,w,D)||0)-f._delay,!_&&O===1&&N.delay&&(f._delay=m=N.delay,f._start+=m,N.delay=0),C.to(w,N,k?k(U,w,D):0),C._ease=Me.none;C.duration()?h=m=0:f.timeline=0}else if(y){_c(Ni(C.vars.defaults,{ease:"none"})),C._ease=Pr(y.ease||s.ease||"none");var W=0,Y,tt,Z;if(Kn(y))y.forEach(function(G){return C.to(D,G,">")}),C.duration();else{N={};for(T in y)T==="ease"||T==="easeEach"||i3(T,y[T],N,y.easeEach);for(T in N)for(Y=N[T].sort(function(G,V){return G.t-V.t}),W=0,U=0;U<Y.length;U++)tt=Y[U],Z={ease:tt.e,duration:(tt.t-(U?Y[U-1].t:0))/100*h},Z[T]=tt.v,C.to(D,Z,W),W+=Z.duration;C.duration()<h&&C.to({},{duration:h-C.duration()})}}h||f.duration(h=C.duration())}else f.timeline=0;return x===!0&&!T0&&(Bs=Qa(f),nn.killTweensOf(D),Bs=0),_a(E,Qa(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(v||!h&&!y&&f._start===en(E._time)&&fi(v)&&PC(Qa(f))&&E.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-m)||0)),S&&zy(Qa(f),S),f}var e=t.prototype;return e.render=function(s,l,u){var f=this._time,p=this._tDur,h=this._dur,m=s<0,v=s>p-jn&&!m?p:s<jn?0:s,_,x,y,b,S,M,E,D,C;if(!h)FC(this,s,l,u);else if(v!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(_=v,D=this.timeline,this._repeat){if(b=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(b*100+s,l,u);if(_=en(v%b),v===p?(y=this._repeat,_=h):(S=en(v/b),y=~~S,y&&y===S?(_=h,y--):_>h&&(_=h)),M=this._yoyo&&y&1,M&&(C=this._yEase,_=h-_),S=tl(this._tTime,b),_===f&&!u&&this._initted&&y===S)return this._tTime=v,this;y!==S&&(D&&this._yEase&&Jy(D,M),this.vars.repeatRefresh&&!M&&!this._lock&&_!==b&&this._initted&&(this._lock=u=1,this.render(en(b*y),!0).invalidate()._lock=0))}if(!this._initted){if(Iy(this,m?s:_,u,l,v))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&y!==S))return this;if(h!==this._dur)return this.render(s,l,u)}if(this._tTime=v,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(C||this._ease)(_/h),this._from&&(this.ratio=E=1-E),!f&&v&&!l&&!S&&(Ci(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(E,x.d),x=x._next;D&&D.render(s<0?s:D._dur*D._ease(_/this._dur),l,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&Wm(this,s,l,u),Ci(this,"onUpdate")),this._repeat&&y!==S&&this.vars.onRepeat&&!l&&this.parent&&Ci(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(m&&!this._onUpdate&&Wm(this,s,!0,!0),(s||!h)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&qs(this,1),!l&&!(m&&!f)&&(v||f||M)&&(Ci(this,v===p?"onComplete":"onReverseComplete",!0),this._prom&&!(v<p&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},e.resetTo=function(s,l,u,f,p){Cc||Ri.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||O0(this,h),m=this._ease(h/this._dur),e3(this,s,l,u,f,m,h,p)?this.resetTo(s,l,u,f,1):(Kf(this,0),this.parent||Oy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?pc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Bs&&Bs.vars.overwrite!==!0)._first||pc(this),this.parent&&u!==this.timeline.totalDuration()&&el(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,p=s?Ki(s):f,h=this._ptLookup,m=this._pt,v,_,x,y,b,S,M;if((!l||l==="all")&&LC(f,p))return l==="all"&&(this._pt=0),pc(this);for(v=this._op=this._op||[],l!=="all"&&(Nn(l)&&(b={},hi(l,function(E){return b[E]=1}),l=b),l=n3(f,l)),M=f.length;M--;)if(~p.indexOf(f[M])){_=h[M],l==="all"?(v[M]=l,y=_,x={}):(x=v[M]=v[M]||{},y=l);for(b in y)S=_&&_[b],S&&((!("kill"in S.d)||S.d.kill(b)===!0)&&jf(this,S,"_pt"),delete _[b]),x!=="all"&&(x[b]=1)}return this._initted&&!this._pt&&m&&pc(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return vc(1,arguments)},t.delayedCall=function(s,l,u,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},t.fromTo=function(s,l,u){return vc(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,u){return nn.killTweensOf(s,l,u)},t}(Dc);Ni(xn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hi("staggerTo,staggerFrom,staggerFromTo",function(o){xn[o]=function(){var t=new si,e=Ym.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var F0=function(t,e,i){return t[e]=i},aM=function(t,e,i){return t[e](i)},a3=function(t,e,i,s){return t[e](s.fp,i)},s3=function(t,e,i){return t.setAttribute(e,i)},z0=function(t,e){return cn(t[e])?aM:A0(t[e])&&t.setAttribute?s3:F0},sM=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},r3=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},rM=function(t,e){var i=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=e.c}e.set(e.t,e.p,s,e)},I0=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},o3=function(t,e,i,s){for(var l=this._pt,u;l;)u=l._next,l.p===s&&l.modifier(t,e,i),l=u},l3=function(t){for(var e=this._pt,i,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?jf(this,e,"_pt"):e.dep||(i=1),e=s;return!i},c3=function(t,e,i,s){s.mSet(t,e,s.m.call(s.tween,i,s.mt),s)},oM=function(t){for(var e=t._pt,i,s,l,u;e;){for(i=e._next,s=l;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:u)?e._prev._next=e:l=e,(e._next=s)?s._prev=e:u=e,e=i}t._pt=l},di=function(){function o(e,i,s,l,u,f,p,h,m){this.t=i,this.s=l,this.c=u,this.p=s,this.r=f||sM,this.d=p||this,this.set=h||F0,this.pr=m||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,s,l){this.mSet=this.mSet||this.set,this.set=c3,this.m=i,this.mt=l,this.tween=s},o}();hi(U0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return D0[o]=1});Li.TweenMax=Li.TweenLite=xn;Li.TimelineLite=Li.TimelineMax=si;nn=new si({sortChildren:!1,defaults:Jo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ui.stringFilter=Ky;var Or=[],Uf={},u3=[],wS=0,f3=0,qp=function(t){return(Uf[t]||u3).map(function(e){return e()})},Qm=function(){var t=Date.now(),e=[];t-wS>2&&(qp("matchMediaInit"),Or.forEach(function(i){var s=i.queries,l=i.conditions,u,f,p,h;for(f in s)u=ma.matchMedia(s[f]).matches,u&&(p=1),u!==l[f]&&(l[f]=u,h=1);h&&(i.revert(),p&&e.push(i))}),qp("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),wS=t,qp("matchMedia"))},lM=function(){function o(e,i){this.selector=i&&jm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=f3++,e&&this.add(e)}var t=o.prototype;return t.add=function(i,s,l){cn(i)&&(l=s,s=i,i=cn);var u=this,f=function(){var h=Qe,m=u.selector,v;return h&&h!==u&&h.data.push(u),l&&(u.selector=jm(l)),Qe=u,v=s.apply(u,arguments),cn(v)&&u._r.push(v),Qe=h,u.selector=m,u.isReverted=!1,v};return u.last=f,i===cn?f(u,function(p){return u.add(null,p)}):i?u[i]=f:f},t.ignore=function(i){var s=Qe;Qe=null,i(this),Qe=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof o?i.push.apply(i,s.getTweens()):s instanceof xn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var l=this;if(i?function(){for(var f=l.getTweens(),p=l.data.length,h;p--;)h=l.data[p],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,v){return v.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),p=l.data.length;p--;)h=l.data[p],h instanceof si?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof xn)&&h.revert&&h.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var u=Or.length;u--;)Or[u].id===this.id&&Or.splice(u,1)},t.revert=function(i){this.kill(i||{})},o}(),h3=function(){function o(e){this.contexts=[],this.scope=e,Qe&&Qe.data.push(this)}var t=o.prototype;return t.add=function(i,s,l){wa(i)||(i={matches:i});var u=new lM(0,l||this.scope),f=u.conditions={},p,h,m;Qe&&!u.selector&&(u.selector=Qe.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?m=1:(p=ma.matchMedia(i[h]),p&&(Or.indexOf(u)<0&&Or.push(u),(f[h]=p.matches)&&(m=1),p.addListener?p.addListener(Qm):p.addEventListener("change",Qm)));return m&&s(u,function(v){return u.add(null,v)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},o}(),Gf={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(s){return Yy(s)})},timeline:function(t){return new si(t)},getTweensOf:function(t,e){return nn.getTweensOf(t,e)},getProperty:function(t,e,i,s){Nn(t)&&(t=Ki(t)[0]);var l=Lr(t||{}).get,u=i?Py:Ny;return i==="native"&&(i=""),t&&(e?u((Ai[e]&&Ai[e].get||l)(t,e,i,s)):function(f,p,h){return u((Ai[f]&&Ai[f].get||l)(t,f,p,h))})},quickSetter:function(t,e,i){if(t=Ki(t),t.length>1){var s=t.map(function(m){return mi.quickSetter(m,e,i)}),l=s.length;return function(m){for(var v=l;v--;)s[v](m)}}t=t[0]||{};var u=Ai[e],f=Lr(t),p=f.harness&&(f.harness.aliases||{})[e]||e,h=u?function(m){var v=new u;Bo._pt=0,v.init(t,i?m+i:m,Bo,0,[t]),v.render(1,v),Bo._pt&&I0(1,Bo)}:f.set(t,p);return u?h:function(m){return h(t,p,i?m+i:m,f,1)}},quickTo:function(t,e,i){var s,l=mi.to(t,Ni((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(p,h,m){return l.resetTo(e,p,h,m)};return u.tween=l,u},isTweening:function(t){return nn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Pr(t.ease,Jo.ease)),MS(Jo,t||{})},config:function(t){return MS(Ui,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,s=t.plugins,l=t.defaults,u=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Ai[f]&&!Li[f]&&Ac(e+" effect requires "+f+" plugin.")}),Vp[e]=function(f,p,h){return i(Ki(f),Ni(p||{},l),h)},u&&(si.prototype[e]=function(f,p,h){return this.add(Vp[e](f,wa(p)?p:(h=p)&&{},this),h)})},registerEase:function(t,e){Me[t]=Pr(e)},parseEase:function(t,e){return arguments.length?Pr(t,e):Me},getById:function(t){return nn.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new si(t),s,l;for(i.smoothChildTiming=fi(t.smoothChildTiming),nn.remove(i),i._dp=0,i._time=i._tTime=nn._time,s=nn._first;s;)l=s._next,(e||!(!s._dur&&s instanceof xn&&s.vars.onComplete===s._targets[0]))&&_a(i,s,s._start-s._delay),s=l;return _a(nn,i,0),i},context:function(t,e){return t?new lM(t,e):Qe},matchMedia:function(t){return new h3(t)},matchMediaRefresh:function(){return Or.forEach(function(t){var e=t.conditions,i,s;for(s in e)e[s]&&(e[s]=!1,i=1);i&&t.revert()})||Qm()},addEventListener:function(t,e){var i=Uf[t]||(Uf[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Uf[t],s=i&&i.indexOf(e);s>=0&&i.splice(s,1)},utils:{wrap:XC,wrapYoyo:WC,distribute:Hy,random:ky,snap:Vy,normalize:kC,getUnit:Yn,clamp:BC,splitColor:jy,toArray:Ki,selector:jm,mapRange:Wy,pipe:HC,unitize:VC,interpolate:qC,shuffle:Gy},install:Ry,effects:Vp,ticker:Ri,updateRoot:si.updateRoot,plugins:Ai,globalTimeline:nn,core:{PropTween:di,globals:Cy,Tween:xn,Timeline:si,Animation:Dc,getCache:Lr,_removeLinkedListItem:jf,reverting:function(){return Vn},context:function(t){return t&&Qe&&(Qe.data.push(t),t._ctx=Qe),Qe},suppressOverwrites:function(t){return T0=t}}};hi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Gf[o]=xn[o]});Ri.add(si.updateRoot);Bo=Gf.to({},{duration:0});var d3=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},p3=function(t,e){var i=t._targets,s,l,u;for(s in e)for(l=i.length;l--;)u=t._ptLookup[l][s],u&&(u=u.d)&&(u._pt&&(u=d3(u,s)),u&&u.modifier&&u.modifier(e[s],t,i[l],s))},Yp=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,l,u){u._onInit=function(f){var p,h;if(Nn(l)&&(p={},hi(l,function(m){return p[m]=1}),l=p),e){p={};for(h in l)p[h]=e(l[h]);l=p}p3(f,l)}}}},mi=Gf.registerPlugin({name:"attr",init:function(t,e,i,s,l){var u,f,p;this.tween=i;for(u in e)p=t.getAttribute(u)||"",f=this.add(t,"setAttribute",(p||0)+"",e[u],s,l,0,0,u),f.op=u,f.b=p,this._props.push(u)},render:function(t,e){for(var i=e._pt;i;)Vn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Yp("roundProps",Zm),Yp("modifiers"),Yp("snap",Vy))||Gf;xn.version=si.version=mi.version="3.14.2";wy=1;w0()&&nl();Me.Power0;Me.Power1;Me.Power2;Me.Power3;Me.Power4;Me.Linear;Me.Quad;Me.Cubic;Me.Quart;Me.Quint;Me.Strong;Me.Elastic;Me.Back;Me.SteppedEase;Me.Bounce;Me.Sine;Me.Expo;Me.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var RS,Gs,ko,B0,Ur,CS,G0,m3=function(){return typeof window<"u"},rs={},wr=180/Math.PI,Xo=Math.PI/180,Fo=Math.atan2,DS=1e8,H0=/([A-Z])/g,g3=/(left|right|width|margin|padding|x)/i,_3=/[\s,\(]\S/,Sa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},v3=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x3=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},S3=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},y3=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},cM=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},uM=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},M3=function(t,e,i){return t.style[e]=i},b3=function(t,e,i){return t.style.setProperty(e,i)},E3=function(t,e,i){return t._gsap[e]=i},T3=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},A3=function(t,e,i,s,l){var u=t._gsap;u.scaleX=u.scaleY=i,u.renderTransform(l,u)},w3=function(t,e,i,s,l){var u=t._gsap;u[e]=i,u.renderTransform(l,u)},an="transform",pi=an+"Origin",R3=function o(t,e){var i=this,s=this.target,l=s.style,u=s._gsap;if(t in rs&&l){if(this.tfm=this.tfm||{},t!=="transform")t=Sa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=Ja(s,f)}):this.tfm[t]=u.x?u[t]:Ja(s,t),t===pi&&(this.tfm.zOrigin=u.zOrigin);else return Sa.transform.split(",").forEach(function(f){return o.call(i,f,e)});if(this.props.indexOf(an)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(pi,e,"")),t=an}(l||e)&&this.props.push(t,e,l[t])},fM=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},C3=function(){var t=this.props,e=this.target,i=e.style,s=e._gsap,l,u;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(H0,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=G0(),(!l||!l.isStart)&&!i[an]&&(fM(i),s.zOrigin&&i[pi]&&(i[pi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},hM=function(t,e){var i={target:t,props:[],revert:C3,save:R3};return t._gsap||mi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return i.save(s)}),i},dM,$m=function(t,e){var i=Gs.createElementNS?Gs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Gs.createElement(t);return i&&i.style?i:Gs.createElement(t)},Di=function o(t,e,i){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(H0,"-$1").toLowerCase())||s.getPropertyValue(e)||!i&&o(t,il(e)||e,1)||""},US="O,Moz,ms,Ms,Webkit".split(","),il=function(t,e,i){var s=e||Ur,l=s.style,u=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(US[u]+t in l););return u<0?null:(u===3?"ms":u>=0?US[u]:"")+t},t0=function(){m3()&&window.document&&(RS=window,Gs=RS.document,ko=Gs.documentElement,Ur=$m("div")||{style:{}},$m("div"),an=il(an),pi=an+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dM=!!il("perspective"),G0=mi.core.reverting,B0=1)},LS=function(t){var e=t.ownerSVGElement,i=$m("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",i.appendChild(s),ko.appendChild(i);try{l=s.getBBox()}catch{}return i.removeChild(s),ko.removeChild(i),l},NS=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},pM=function(t){var e,i;try{e=t.getBBox()}catch{e=LS(t),i=1}return e&&(e.width||e.height)||i||(e=LS(t)),e&&!e.width&&!e.x&&!e.y?{x:+NS(t,["x","cx","x1"])||0,y:+NS(t,["y","cy","y1"])||0,width:0,height:0}:e},mM=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&pM(t))},Ys=function(t,e){if(e){var i=t.style,s;e in rs&&e!==pi&&(e=an),i.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(s==="--"?e:e.replace(H0,"-$1").toLowerCase())):i.removeAttribute(e)}},Hs=function(t,e,i,s,l,u){var f=new di(t._pt,e,i,0,1,u?uM:cM);return t._pt=f,f.b=s,f.e=l,t._props.push(i),f},PS={deg:1,rad:1,turn:1},D3={grid:1,flex:1},js=function o(t,e,i,s){var l=parseFloat(i)||0,u=(i+"").trim().substr((l+"").length)||"px",f=Ur.style,p=g3.test(e),h=t.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(p?"Width":"Height"),v=100,_=s==="px",x=s==="%",y,b,S,M;if(s===u||!l||PS[s]||PS[u])return l;if(u!=="px"&&!_&&(l=o(t,e,i,"px")),M=t.getCTM&&mM(t),(x||u==="%")&&(rs[e]||~e.indexOf("adius")))return y=M?t.getBBox()[p?"width":"height"]:t[m],fn(x?l/y*v:l/100*y);if(f[p?"width":"height"]=v+(_?u:s),b=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!h?t:t.parentNode,M&&(b=(t.ownerSVGElement||{}).parentNode),(!b||b===Gs||!b.appendChild)&&(b=Gs.body),S=b._gsap,S&&x&&S.width&&p&&S.time===Ri.time&&!S.uncache)return fn(l/S.width*v);if(x&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=v+s,y=t[m],E?t.style[e]=E:Ys(t,e)}else(x||u==="%")&&!D3[Di(b,"display")]&&(f.position=Di(t,"position")),b===t&&(f.position="static"),b.appendChild(Ur),y=Ur[m],b.removeChild(Ur),f.position="absolute";return p&&x&&(S=Lr(b),S.time=Ri.time,S.width=b[m]),fn(_?y*l/v:y&&l?v/y*l:0)},Ja=function(t,e,i,s){var l;return B0||t0(),e in Sa&&e!=="transform"&&(e=Sa[e],~e.indexOf(",")&&(e=e.split(",")[0])),rs[e]&&e!=="transform"?(l=Lc(t,s),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:Vf(Di(t,pi))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Hf[e]&&Hf[e](t,e,i)||Di(t,e)||Uy(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?js(t,e,l,i)+i:l},U3=function(t,e,i,s){if(!i||i==="none"){var l=il(e,t,1),u=l&&Di(t,l,1);u&&u!==i?(e=l,i=u):e==="borderColor"&&(i=Di(t,"borderTopColor"))}var f=new di(this._pt,t.style,e,0,1,rM),p=0,h=0,m,v,_,x,y,b,S,M,E,D,C,U;if(f.b=i,f.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=Di(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(b=t.style[e],t.style[e]=s,s=Di(t,e)||s,b?t.style[e]=b:Ys(t,e)),m=[i,s],Ky(m),i=m[0],s=m[1],_=i.match(Io)||[],U=s.match(Io)||[],U.length){for(;v=Io.exec(s);)S=v[0],E=s.substring(p,v.index),y?y=(y+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(y=1),S!==(b=_[h++]||"")&&(x=parseFloat(b)||0,C=b.substr((x+"").length),S.charAt(1)==="="&&(S=Vo(x,S)+C),M=parseFloat(S),D=S.substr((M+"").length),p=Io.lastIndex-D.length,D||(D=D||Ui.units[e]||C,p===s.length&&(s+=D,f.e+=D)),C!==D&&(x=js(t,e,b,D)||0),f._pt={_next:f._pt,p:E||h===1?E:",",s:x,c:M-x,m:y&&y<4||e==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=e==="display"&&s==="none"?uM:cM;return Ay.test(s)&&(f.e=0),this._pt=f,f},OS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},L3=function(t){var e=t.split(" "),i=e[0],s=e[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),e[0]=OS[i]||i,e[1]=OS[s]||s,e.join(" ")},N3=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,s=i.style,l=e.u,u=i._gsap,f,p,h;if(l==="all"||l===!0)s.cssText="",p=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],rs[f]&&(p=1,f=f==="transformOrigin"?pi:an),Ys(i,f);p&&(Ys(i,an),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Lc(i,1),u.uncache=1,fM(s)))}},Hf={clearProps:function(t,e,i,s,l){if(l.data!=="isFromStart"){var u=t._pt=new di(t._pt,e,i,0,0,N3);return u.u=s,u.pr=-10,u.tween=l,t._props.push(i),1}}},Uc=[1,0,0,1,0,0],gM={},_M=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},FS=function(t){var e=Di(t,an);return _M(e)?Uc:e.substr(7).match(Ty).map(fn)},V0=function(t,e){var i=t._gsap||Lr(t),s=t.style,l=FS(t),u,f,p,h;return i.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?Uc:l):(l===Uc&&!t.offsetParent&&t!==ko&&!i.svg&&(p=s.display,s.display="block",u=t.parentNode,(!u||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,f=t.nextElementSibling,ko.appendChild(t)),l=FS(t),p?s.display=p:Ys(t,"display"),h&&(f?u.insertBefore(t,f):u?u.appendChild(t):ko.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},e0=function(t,e,i,s,l,u){var f=t._gsap,p=l||V0(t,!0),h=f.xOrigin||0,m=f.yOrigin||0,v=f.xOffset||0,_=f.yOffset||0,x=p[0],y=p[1],b=p[2],S=p[3],M=p[4],E=p[5],D=e.split(" "),C=parseFloat(D[0])||0,U=parseFloat(D[1])||0,N,O,T,w;i?p!==Uc&&(O=x*S-y*b)&&(T=C*(S/O)+U*(-b/O)+(b*E-S*M)/O,w=C*(-y/O)+U*(x/O)-(x*E-y*M)/O,C=T,U=w):(N=pM(t),C=N.x+(~D[0].indexOf("%")?C/100*N.width:C),U=N.y+(~(D[1]||D[0]).indexOf("%")?U/100*N.height:U)),s||s!==!1&&f.smooth?(M=C-h,E=U-m,f.xOffset=v+(M*x+E*b)-M,f.yOffset=_+(M*y+E*S)-E):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=U,f.smooth=!!s,f.origin=e,f.originIsAbsolute=!!i,t.style[pi]="0px 0px",u&&(Hs(u,f,"xOrigin",h,C),Hs(u,f,"yOrigin",m,U),Hs(u,f,"xOffset",v,f.xOffset),Hs(u,f,"yOffset",_,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+U)},Lc=function(t,e){var i=t._gsap||new tM(t);if("x"in i&&!e&&!i.uncache)return i;var s=t.style,l=i.scaleX<0,u="px",f="deg",p=getComputedStyle(t),h=Di(t,pi)||"0",m,v,_,x,y,b,S,M,E,D,C,U,N,O,T,w,k,F,W,Y,tt,Z,G,V,it,ft,z,et,ht,bt,vt,Ot;return m=v=_=b=S=M=E=D=C=0,x=y=1,i.svg=!!(t.getCTM&&mM(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[an]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[an]!=="none"?p[an]:"")),s.scale=s.rotate=s.translate="none"),O=V0(t,i.svg),i.svg&&(i.uncache?(it=t.getBBox(),h=i.xOrigin-it.x+"px "+(i.yOrigin-it.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),e0(t,V||h,!!V||i.originIsAbsolute,i.smooth!==!1,O)),U=i.xOrigin||0,N=i.yOrigin||0,O!==Uc&&(F=O[0],W=O[1],Y=O[2],tt=O[3],m=Z=O[4],v=G=O[5],O.length===6?(x=Math.sqrt(F*F+W*W),y=Math.sqrt(tt*tt+Y*Y),b=F||W?Fo(W,F)*wr:0,E=Y||tt?Fo(Y,tt)*wr+b:0,E&&(y*=Math.abs(Math.cos(E*Xo))),i.svg&&(m-=U-(U*F+N*Y),v-=N-(U*W+N*tt))):(Ot=O[6],bt=O[7],z=O[8],et=O[9],ht=O[10],vt=O[11],m=O[12],v=O[13],_=O[14],T=Fo(Ot,ht),S=T*wr,T&&(w=Math.cos(-T),k=Math.sin(-T),V=Z*w+z*k,it=G*w+et*k,ft=Ot*w+ht*k,z=Z*-k+z*w,et=G*-k+et*w,ht=Ot*-k+ht*w,vt=bt*-k+vt*w,Z=V,G=it,Ot=ft),T=Fo(-Y,ht),M=T*wr,T&&(w=Math.cos(-T),k=Math.sin(-T),V=F*w-z*k,it=W*w-et*k,ft=Y*w-ht*k,vt=tt*k+vt*w,F=V,W=it,Y=ft),T=Fo(W,F),b=T*wr,T&&(w=Math.cos(T),k=Math.sin(T),V=F*w+W*k,it=Z*w+G*k,W=W*w-F*k,G=G*w-Z*k,F=V,Z=it),S&&Math.abs(S)+Math.abs(b)>359.9&&(S=b=0,M=180-M),x=fn(Math.sqrt(F*F+W*W+Y*Y)),y=fn(Math.sqrt(G*G+Ot*Ot)),T=Fo(Z,G),E=Math.abs(T)>2e-4?T*wr:0,C=vt?1/(vt<0?-vt:vt):0),i.svg&&(V=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!_M(Di(t,an)),V&&t.setAttribute("transform",V))),Math.abs(E)>90&&Math.abs(E)<270&&(l?(x*=-1,E+=b<=0?180:-180,b+=b<=0?180:-180):(y*=-1,E+=E<=0?180:-180)),e=e||i.uncache,i.x=m-((i.xPercent=m&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+u,i.y=v-((i.yPercent=v&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+u,i.z=_+u,i.scaleX=fn(x),i.scaleY=fn(y),i.rotation=fn(b)+f,i.rotationX=fn(S)+f,i.rotationY=fn(M)+f,i.skewX=E+f,i.skewY=D+f,i.transformPerspective=C+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!e&&i.zOrigin||0)&&(s[pi]=Vf(h)),i.xOffset=i.yOffset=0,i.force3D=Ui.force3D,i.renderTransform=i.svg?O3:dM?vM:P3,i.uncache=0,i},Vf=function(t){return(t=t.split(" "))[0]+" "+t[1]},jp=function(t,e,i){var s=Yn(e);return fn(parseFloat(e)+parseFloat(js(t,"x",i+"px",s)))+s},P3=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,vM(t,e)},Er="0deg",fc="0px",Tr=") ",vM=function(t,e){var i=e||this,s=i.xPercent,l=i.yPercent,u=i.x,f=i.y,p=i.z,h=i.rotation,m=i.rotationY,v=i.rotationX,_=i.skewX,x=i.skewY,y=i.scaleX,b=i.scaleY,S=i.transformPerspective,M=i.force3D,E=i.target,D=i.zOrigin,C="",U=M==="auto"&&t&&t!==1||M===!0;if(D&&(v!==Er||m!==Er)){var N=parseFloat(m)*Xo,O=Math.sin(N),T=Math.cos(N),w;N=parseFloat(v)*Xo,w=Math.cos(N),u=jp(E,u,O*w*-D),f=jp(E,f,-Math.sin(N)*-D),p=jp(E,p,T*w*-D+D)}S!==fc&&(C+="perspective("+S+Tr),(s||l)&&(C+="translate("+s+"%, "+l+"%) "),(U||u!==fc||f!==fc||p!==fc)&&(C+=p!==fc||U?"translate3d("+u+", "+f+", "+p+") ":"translate("+u+", "+f+Tr),h!==Er&&(C+="rotate("+h+Tr),m!==Er&&(C+="rotateY("+m+Tr),v!==Er&&(C+="rotateX("+v+Tr),(_!==Er||x!==Er)&&(C+="skew("+_+", "+x+Tr),(y!==1||b!==1)&&(C+="scale("+y+", "+b+Tr),E.style[an]=C||"translate(0, 0)"},O3=function(t,e){var i=e||this,s=i.xPercent,l=i.yPercent,u=i.x,f=i.y,p=i.rotation,h=i.skewX,m=i.skewY,v=i.scaleX,_=i.scaleY,x=i.target,y=i.xOrigin,b=i.yOrigin,S=i.xOffset,M=i.yOffset,E=i.forceCSS,D=parseFloat(u),C=parseFloat(f),U,N,O,T,w;p=parseFloat(p),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,p+=m),p||h?(p*=Xo,h*=Xo,U=Math.cos(p)*v,N=Math.sin(p)*v,O=Math.sin(p-h)*-_,T=Math.cos(p-h)*_,h&&(m*=Xo,w=Math.tan(h-m),w=Math.sqrt(1+w*w),O*=w,T*=w,m&&(w=Math.tan(m),w=Math.sqrt(1+w*w),U*=w,N*=w)),U=fn(U),N=fn(N),O=fn(O),T=fn(T)):(U=v,T=_,N=O=0),(D&&!~(u+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(D=js(x,"x",u,"px"),C=js(x,"y",f,"px")),(y||b||S||M)&&(D=fn(D+y-(y*U+b*O)+S),C=fn(C+b-(y*N+b*T)+M)),(s||l)&&(w=x.getBBox(),D=fn(D+s/100*w.width),C=fn(C+l/100*w.height)),w="matrix("+U+","+N+","+O+","+T+","+D+","+C+")",x.setAttribute("transform",w),E&&(x.style[an]=w)},F3=function(t,e,i,s,l){var u=360,f=Nn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?wr:1),h=p-s,m=s+h+"deg",v,_;return f&&(v=l.split("_")[1],v==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-360)),v==="cw"&&h<0?h=(h+u*DS)%u-~~(h/u)*u:v==="ccw"&&h>0&&(h=(h-u*DS)%u-~~(h/u)*u)),t._pt=_=new di(t._pt,e,i,s,h,v3),_.e=m,_.u="deg",t._props.push(i),_},zS=function(t,e){for(var i in e)t[i]=e[i];return t},z3=function(t,e,i){var s=zS({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=i.style,f,p,h,m,v,_,x,y;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[an]=e,f=Lc(i,1),Ys(i,an),i.setAttribute("transform",h)):(h=getComputedStyle(i)[an],u[an]=e,f=Lc(i,1),u[an]=h);for(p in rs)h=s[p],m=f[p],h!==m&&l.indexOf(p)<0&&(x=Yn(h),y=Yn(m),v=x!==y?js(i,p,h,y):parseFloat(h),_=parseFloat(m),t._pt=new di(t._pt,f,p,v,_-v,Jm),t._pt.u=y||0,t._props.push(p));zS(f,s)};hi("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",s="Bottom",l="Left",u=(t<3?[e,i,s,l]:[e+l,e+i,s+i,s+l]).map(function(f){return t<2?o+f:"border"+f+o});Hf[t>1?"border"+o:o]=function(f,p,h,m,v){var _,x;if(arguments.length<4)return _=u.map(function(y){return Ja(f,y,h)}),x=_.join(" "),x.split(_[0]).length===5?_[0]:x;_=(m+"").split(" "),x={},u.forEach(function(y,b){return x[y]=_[b]=_[b]||_[(b-1)/2|0]}),f.init(p,x,v)}});var xM={name:"css",register:t0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,s,l){var u=this._props,f=t.style,p=i.vars.startAt,h,m,v,_,x,y,b,S,M,E,D,C,U,N,O,T,w;B0||t0(),this.styles=this.styles||hM(t),T=this.styles.props,this.tween=i;for(b in e)if(b!=="autoRound"&&(m=e[b],!(Ai[b]&&eM(b,e,i,s,t,l)))){if(x=typeof m,y=Hf[b],x==="function"&&(m=m.call(i,s,t,l),x=typeof m),x==="string"&&~m.indexOf("random(")&&(m=Rc(m)),y)y(this,t,b,m,i)&&(O=1);else if(b.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(b)+"").trim(),m+="",Xs.lastIndex=0,Xs.test(h)||(S=Yn(h),M=Yn(m),M?S!==M&&(h=js(t,b,h,M)+M):S&&(m+=S)),this.add(f,"setProperty",h,m,s,l,0,0,b),u.push(b),T.push(b,0,f[b]);else if(x!=="undefined"){if(p&&b in p?(h=typeof p[b]=="function"?p[b].call(i,s,t,l):p[b],Nn(h)&&~h.indexOf("random(")&&(h=Rc(h)),Yn(h+"")||h==="auto"||(h+=Ui.units[b]||Yn(Ja(t,b))||""),(h+"").charAt(1)==="="&&(h=Ja(t,b))):h=Ja(t,b),_=parseFloat(h),E=x==="string"&&m.charAt(1)==="="&&m.substr(0,2),E&&(m=m.substr(2)),v=parseFloat(m),b in Sa&&(b==="autoAlpha"&&(_===1&&Ja(t,"visibility")==="hidden"&&v&&(_=0),T.push("visibility",0,f.visibility),Hs(this,f,"visibility",_?"inherit":"hidden",v?"inherit":"hidden",!v)),b!=="scale"&&b!=="transform"&&(b=Sa[b],~b.indexOf(",")&&(b=b.split(",")[0]))),D=b in rs,D){if(this.styles.save(b),w=m,x==="string"&&m.substring(0,6)==="var(--"){if(m=Di(t,m.substring(4,m.indexOf(")"))),m.substring(0,5)==="calc("){var k=t.style.perspective;t.style.perspective=m,m=Di(t,"perspective"),k?t.style.perspective=k:Ys(t,"perspective")}v=parseFloat(m)}if(C||(U=t._gsap,U.renderTransform&&!e.parseTransform||Lc(t,e.parseTransform),N=e.smoothOrigin!==!1&&U.smooth,C=this._pt=new di(this._pt,f,an,0,1,U.renderTransform,U,0,-1),C.dep=1),b==="scale")this._pt=new di(this._pt,U,"scaleY",U.scaleY,(E?Vo(U.scaleY,E+v):v)-U.scaleY||0,Jm),this._pt.u=0,u.push("scaleY",b),b+="X";else if(b==="transformOrigin"){T.push(pi,0,f[pi]),m=L3(m),U.svg?e0(t,m,0,N,0,this):(M=parseFloat(m.split(" ")[2])||0,M!==U.zOrigin&&Hs(this,U,"zOrigin",U.zOrigin,M),Hs(this,f,b,Vf(h),Vf(m)));continue}else if(b==="svgOrigin"){e0(t,m,1,N,0,this);continue}else if(b in gM){F3(this,U,b,_,E?Vo(_,E+m):m);continue}else if(b==="smoothOrigin"){Hs(this,U,"smooth",U.smooth,m);continue}else if(b==="force3D"){U[b]=m;continue}else if(b==="transform"){z3(this,m,t);continue}}else b in f||(b=il(b)||b);if(D||(v||v===0)&&(_||_===0)&&!_3.test(m)&&b in f)S=(h+"").substr((_+"").length),v||(v=0),M=Yn(m)||(b in Ui.units?Ui.units[b]:S),S!==M&&(_=js(t,b,h,M)),this._pt=new di(this._pt,D?U:f,b,_,(E?Vo(_,E+v):v)-_,!D&&(M==="px"||b==="zIndex")&&e.autoRound!==!1?y3:Jm),this._pt.u=M||0,D&&w!==m?(this._pt.b=h,this._pt.e=w,this._pt.r=S3):S!==M&&M!=="%"&&(this._pt.b=h,this._pt.r=x3);else if(b in f)U3.call(this,t,b,h,E?E+m:m);else if(b in t)this.add(t,b,h||t[b],E?E+m:m,s,l);else if(b!=="parseTransform"){C0(b,m);continue}D||(b in f?T.push(b,0,f[b]):typeof t[b]=="function"?T.push(b,2,t[b]()):T.push(b,1,h||t[b])),u.push(b)}}O&&oM(this)},render:function(t,e){if(e.tween._time||!G0())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ja,aliases:Sa,getSetter:function(t,e,i){var s=Sa[e];return s&&s.indexOf(",")<0&&(e=s),e in rs&&e!==pi&&(t._gsap.x||Ja(t,"x"))?i&&CS===i?e==="scale"?T3:E3:(CS=i||{})&&(e==="scale"?A3:w3):t.style&&!A0(t.style[e])?M3:~e.indexOf("-")?b3:z0(t,e)},core:{_removeProperty:Ys,_getMatrix:V0}};mi.utils.checkPrefix=il;mi.core.getStyleSaver=hM;(function(o,t,e,i){var s=hi(o+","+t+","+e,function(l){rs[l]=1});hi(t,function(l){Ui.units[l]="deg",gM[l]=1}),Sa[s[13]]=o+","+t,hi(i,function(l){var u=l.split(":");Sa[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ui.units[o]="px"});mi.registerPlugin(xM);var SM=mi.registerPlugin(xM)||mi;SM.core.Tween;const kf={name:"Ranjith Govindasamy",firstName:"Ranjith",tagline:"A Full Stack Developer and Designer",cvLink:"/cv.pdf"},I3={paragraphs:["I'm a passionate full-stack developer with a solid foundation in computer science. Proficient in the LAMP stack, Node.js, Express, WebSockets, and CRUD operations, I specialize in creating dynamic websites, CRMs, e-commerce platforms, and web applications.","I thrive on connecting front-end and back-end technologies to deliver seamless user experiences. Outside of coding, I contribute to open-source projects and stay up-to-date with the latest tech trends to continuously evolve my skills."]},Mf=[{name:"HTML",color:"bg-orange-500",icon:"/assets/html.svg"},{name:"CSS",color:"bg-blue-500",icon:"/assets/css.svg"},{name:"Tailwind",color:"bg-cyan-500",icon:"/assets/tailwindcss.svg"},{name:"JavaScript",color:"bg-yellow-400",icon:"/assets/javascript.svg"},{name:"React JS",color:"bg-cyan-600",icon:"/assets/reactjs.svg"},{name:"Node JS",color:"bg-green-600",icon:"/assets/nodejs.svg"},{name:"Express",color:"bg-gray-800",icon:"/assets/expressjs.svg"},{name:"MySQL",color:"bg-blue-700",icon:"/assets/mysql.svg"},{name:"PHP",color:"bg-indigo-700",icon:"/assets/php.svg"},{name:"Git",color:"bg-red-500",icon:"/assets/git.svg"},{name:"Apache",color:"bg-red-600",icon:"/assets/apache.svg"},{name:"Bootstrap",color:"bg-purple-500",icon:"/assets/bootstrap.svg"},{name:"Figma",color:"bg-pink-400",icon:"/assets/figma.svg"},{name:"Postman",color:"bg-orange-500",icon:"/assets/postman.svg"},{name:"cPanel",color:"bg-orange-600",icon:"/assets/cpanel.svg"},{name:"Socket.io",color:"bg-gray-700",icon:"/assets/socketio.svg"},{name:"Vite",color:"bg-indigo-500",icon:"/assets/vite.svg"},{name:"npm",color:"bg-red-500",icon:"/assets/npm.svg"}],B3=[{title:"Custom Website Solutions",icon:"ri-code-box-line",desc:"Get a website tailored to your business needs, built for speed, security, and scalability."},{title:"Reliable Support & Maintenance",icon:"ri-customer-service-2-line",desc:"Stay worry-free with continuous updates, security patches, and technical assistance."},{title:"On-Time Project Delivery",icon:"ri-timer-line",desc:"Get your website or application launched on schedule without unnecessary delays."},{title:"Smart Business Solutions",icon:"ri-lightbulb-line",desc:"Optimize your operations with custom-built tools, automation, and seamless integrations."},{title:"Mobile & SEO Optimized",icon:"ri-smartphone-line",desc:"Ensure your website ranks well on Google and works smoothly on all devices."},{title:"Secure & Scalable Websites",icon:"ri-shield-keyhole-line",desc:"Future-proof your business with a highly secure and scalable online presence."}],G3=[{title:"Nivsjewels",stack:"Reactjs, Php, MySQL",url:"https://nivsjewels.com",image:"/assets/works/Screenshot (68).png"},{title:"AmbisGroup",stack:"Html, Css, Bootstrap, Php",url:"https://ambisgroup.in",image:"/assets/works/Screenshot (69).png"},{title:"Utsarvajewels",stack:"Html, Css, Bootstrap, Php",url:"https://utsarvajewels.com",image:"/assets/works/Screenshot (70).png"},{title:"Saayal Events",stack:"Html, Css, Bootstrap, Php",url:"https://saayal.in",image:"/assets/works/Screenshot (71).png"},{title:"Lotushealth",stack:"Html, Css, Bootstrap, Php",url:"https://lotushealth.life",image:"/assets/works/Screenshot (72).png"},{title:"Sheetal PMS",stack:"Linux, Apache, Tailwind",image:"/assets/works/Screenshot (73).png"},{title:"Hashchat",stack:"Nodejs, React, Socket.io",image:"/assets/works/Screenshot (74).png"},{title:"Hashday.in",stack:"Html, Css, Php, MySQL",url:"https://hashday.in",image:"/assets/works/Screenshot (75).png"},{title:"Techvedhu",stack:"Reactjs, Tailwind, Php",url:"https://techvedhu.com",image:"/assets/works/Screenshot (76).png"},{title:"sunscientific",stack:"Html, Css, Php, MySQL",url:"https://sunscientificcompany.com",image:"/assets/works/Screenshot (77).png"}],H3=[{company:"Hashday.in",role:"Fullstack WebDeveloper",period:"February 2024 - Now",description:"Maintaing and adding new features to an Application Portal for an Webapp. Tech stack includes: Php, Mysql, JavaScript, jQuery."},{company:"AmbisGroup",role:"Fullstack WebDeveloper",period:"December 2021 - November 2025",description:"Worked as a full-stack developer, building e-commerce platforms and web applications for the jewelry industry and rehabilitation centers."}],Wo={email:"ranjithmercer@email.com",location:"Coimbatore, Tamilnadu - India",socials:[{name:"facebook",url:"#"},{name:"twitter",url:"#"},{name:"instagram",url:"https://www.instagram.com/ranjith.exe"},{name:"youtube",url:"https://www.youtube.com/channel/UChW-YPRQUTzm_U3BkDlGrUg"}]},V3={text:"© 2026 Ranjith Govindasamy. All rights reserved."},qo=[{id:"intro",label:"Intro"},{id:"about",label:"About"},{id:"skills",label:"Tech Stack"},{id:"services",label:"Services"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"contact",label:"Contact"}];class k3{constructor(t){this.camera=t,this.progress=0,this.targetProgress=0,this.currentSection=0,this.sectionCount=qo.length,this.sectionSize=1/this.sectionCount,this._buildPath(),this.lookTarget=new H}_buildPath(){const t=[new H(0,12,30),new H(0,11,15),new H(0,10,0),new H(2,12,-40),new H(4,14,-80),new H(2,14,-120),new H(0,12,-170),new H(-2,10,-230),new H(-4,9,-280),new H(-2,9,-330),new H(0,10,-380),new H(4,18,-450),new H(6,20,-510),new H(4,20,-570),new H(0,18,-630),new H(-4,12,-720),new H(-6,10,-790),new H(-4,10,-860),new H(0,10,-930),new H(2,12,-1e3),new H(4,14,-1080),new H(6,14,-1150),new H(4,14,-1220),new H(0,14,-1290),new H(-2,16,-1370),new H(-4,18,-1430),new H(-2,18,-1490),new H(0,16,-1550)];this.path=new lT(t,!1,"catmullrom",.5),this.pathLength=this.path.getLength()}getSectionIndex(t){return Math.min(Math.floor(t*this.sectionCount),this.sectionCount-1)}getSectionProgress(t){const i=this.getSectionIndex(t)*this.sectionSize;return(t-i)/this.sectionSize}update(t,e){this.progress+=(e-this.progress)*Math.min(t*2,.12),this.progress=Math.max(0,Math.min(1,this.progress));const i=this.path.getPointAt(this.progress);this.camera.position.lerp(i,Math.min(t*4,.2));const s=Math.min(this.progress+.025,1),l=this.path.getPointAt(s);this.lookTarget.lerp(l,Math.min(t*3,.15)),this.camera.lookAt(this.lookTarget);const u=this.getSectionIndex(this.progress),f=u!==this.currentSection;return this.currentSection=u,{position:i,progress:this.progress,sectionIndex:this.currentSection,sectionProgress:this.getSectionProgress(this.progress),sectionChanged:f}}jumpToSection(t){return t*this.sectionSize+this.sectionSize*.1}dispose(){}}class X3{constructor(){this.progress=0,this.targetProgress=0,this.locked=!0,this.speed=5e-5,this.momentum=0,this.damping=.96,this.maxMomentum=.008,this._onWheel=this._onWheel.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this.touchStartY=0,this.listeners=[],window.addEventListener("wheel",this._onWheel,{passive:!1}),window.addEventListener("touchstart",this._onTouchStart,{passive:!0}),window.addEventListener("touchmove",this._onTouchMove,{passive:!1}),window.addEventListener("keydown",this._onKeyDown)}_onWheel(t){if(t.preventDefault(),this.locked)return;const e=t.deltaMode===1?t.deltaY*16:t.deltaY;this.momentum+=e*this.speed,this.momentum=Math.max(-this.maxMomentum,Math.min(this.maxMomentum,this.momentum))}_onTouchStart(t){this.touchStartY=t.touches[0].clientY}_onTouchMove(t){if(this.locked)return;t.preventDefault();const e=this.touchStartY-t.touches[0].clientY;this.touchStartY=t.touches[0].clientY,this.momentum+=e*this.speed*.8,this.momentum=Math.max(-this.maxMomentum,Math.min(this.maxMomentum,this.momentum))}_onKeyDown(t){this.locked||(t.key==="ArrowDown"||t.key===" "?(t.preventDefault(),this.momentum+=.004):t.key==="ArrowUp"&&(t.preventDefault(),this.momentum-=.004))}unlock(){this.locked=!1}lock(){this.locked=!0}setProgress(t){this.targetProgress=Math.max(0,Math.min(1,t)),this.progress=this.targetProgress,this.momentum=0}onChange(t){this.listeners.push(t)}update(t){if(this.locked)return this.progress;this.targetProgress+=this.momentum,this.targetProgress=Math.max(0,Math.min(1,this.targetProgress)),this.momentum*=this.damping,Math.abs(this.momentum)<1e-4&&(this.momentum=0),this.progress+=(this.targetProgress-this.progress)*Math.min(t*2.5,.15),this.progress=Math.max(0,Math.min(1,this.progress));for(const e of this.listeners)e(this.progress);return this.progress}dispose(){window.removeEventListener("wheel",this._onWheel),window.removeEventListener("touchstart",this._onTouchStart),window.removeEventListener("touchmove",this._onTouchMove),window.removeEventListener("keydown",this._onKeyDown)}}class W3{constructor(){this.manager=new py,this.textureLoader=new M0(this.manager),this.cache=new Map,this.totalProgress=0,this.manager.onProgress=(t,e,i)=>{this.totalProgress=e/i}}loadTexture(t){return this.cache.has(t)?Promise.resolve(this.cache.get(t)):new Promise((e,i)=>{this.textureLoader.load(t,s=>{s.colorSpace=Ln,s.generateMipmaps=!0,s.minFilter=zs,s.magFilter=Bn,this.cache.set(t,s),e(s)},void 0,s=>{console.warn(`Failed to load texture: ${t}`,s);const l=new oy(new Uint8Array([255,255,255,255]),1,1,Zi);l.needsUpdate=!0,this.cache.set(t,l),e(l)})})}async loadTextures(t){return Promise.all(t.map(e=>this.loadTexture(e)))}async loadSVGTexture(t,e=128){return this.cache.has(t+"_svg")?this.cache.get(t+"_svg"):new Promise(i=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{const l=document.createElement("canvas");l.width=e,l.height=e;const u=l.getContext("2d"),f=Math.min(e/s.width,e/s.height)*.8,p=s.width*f,h=s.height*f;u.drawImage(s,(e-p)/2,(e-h)/2,p,h);const m=new Bm(l);m.colorSpace=Ln,m.needsUpdate=!0,this.cache.set(t+"_svg",m),i(m)},s.onerror=()=>{const l=document.createElement("canvas");l.width=e,l.height=e;const u=l.getContext("2d");u.fillStyle="#38bdf8",u.fillRect(0,0,e,e);const f=new Bm(l);f.needsUpdate=!0,this.cache.set(t+"_svg",f),i(f)},s.src=t})}dispose(){for(const[,t]of this.cache)t.dispose();this.cache.clear()}}class q3{constructor(){this.timelines=new Map,this.activeSections=new Set,this.sectionCallbacks=new Map}registerSection(t,{onEnter:e,onExit:i,onProgress:s}){this.sectionCallbacks.set(t,{onEnter:e,onExit:i,onProgress:s})}createTimeline(t){const e=SM.timeline({paused:!0});return this.timelines.set(t,e),e}update(t,e,i){if(!i||!i[t])return;const s=i[t].id;if(!this.activeSections.has(s)){for(const p of this.activeSections){const h=this.sectionCallbacks.get(p);h&&h.onExit&&h.onExit()}this.activeSections.clear(),this.activeSections.add(s);const f=this.sectionCallbacks.get(s);f&&f.onEnter&&f.onEnter()}const l=this.sectionCallbacks.get(s);l&&l.onProgress&&l.onProgress(e);const u=this.timelines.get(s);u&&u.progress(e)}dispose(){for(const[,t]of this.timelines)t.kill();this.timelines.clear(),this.sectionCallbacks.clear(),this.activeSections.clear()}}class Y3{constructor(t,e={}){this.scene=t,this.count=e.count||3e3,this.zRange=e.zRange||[-1800,100],this.spreadX=e.spreadX||400,this.spreadY=e.spreadY||150;const i=new Sn,s=new Float32Array(this.count*3),l=new Float32Array(this.count),u=new Float32Array(this.count),f=400,p=Math.floor(this.count/f);let h=0;for(let m=0;m<f;m++){const v=(Math.random()-.5)*this.spreadX,_=(Math.random()-.5)*this.spreadY,x=this.zRange[1]-Math.random()*(this.zRange[1]-this.zRange[0]),y=10+Math.random()*25;for(let b=0;b<p&&!(h>=this.count);b++){const S=v+(Math.random()-.5)*y,M=_+(Math.random()-.5)*(y*.4),E=x+(Math.random()-.5)*y;s[h*3]=S,s[h*3+1]=M,s[h*3+2]=E,l[h]=y*(.5+Math.random()),u[h]=.4+Math.random()*.4,h++}}i.setAttribute("position",new Hn(s,3)),i.setAttribute("aSize",new Hn(l,1)),i.setAttribute("aOpacity",new Hn(u,1)),this.material=new Qi({uniforms:{time:{value:0},color1:{value:new re(16777215)},color2:{value:new re(13751771)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Vs}),this.cloudPoints=new cy(i,this.material),this.scene.add(this.cloudPoints)}update(t,e,i){this.material&&(this.material.uniforms.time.value+=t)}dispose(){this.cloudPoints.geometry.dispose(),this.cloudPoints.material.dispose(),this.scene.remove(this.cloudPoints)}}class zc{constructor(t,e={}){this.scene=t,this.maxParticles=e.maxParticles||150,this.emitRate=e.emitRate||.04,this.emitTimer=0,this.particleLifetime=e.lifetime||2.5,this.spread=e.spread||.15,this.startSize=e.startSize||(e.startSize===0?0:3.5),this.endSize=e.endSize||12,this.color=e.color||new re(16777215),this.maxAlpha=e.maxAlpha||.55,this.offsets=e.offsets||[new H(0,0,0)],this._initGeometry()}_initGeometry(){const t=this.maxParticles;this._positions=new Float32Array(t*3),this._ages=new Float32Array(t).fill(-1),this._velocities=[],this._sizes=new Float32Array(t),this._alphas=new Float32Array(t);for(let s=0;s<t;s++)this._velocities.push(new H);this._posAttr=new Hn(this._positions,3),this._posAttr.setUsage(sp),this._sizeAttr=new Hn(this._sizes,1),this._sizeAttr.setUsage(sp),this._alphaAttr=new Hn(this._alphas,1),this._alphaAttr.setUsage(sp);const e=new Sn;e.setAttribute("position",this._posAttr),e.setAttribute("aSize",this._sizeAttr),e.setAttribute("aAlpha",this._alphaAttr);const i=new Qi({uniforms:{uColor:{value:this.color}},vertexShader:`
        attribute float aSize;
        attribute float aAlpha;
        varying float vAlpha;
        void main() {
          vAlpha = aAlpha;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPos;
          gl_PointSize = aSize * (300.0 / -mvPos.z);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float a = 1.0 - smoothstep(0.2, 0.5, d);
          a = pow(a, 1.5);
          if (a < 0.01) discard;
          gl_FragColor = vec4(uColor, a * vAlpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Vs,fog:!1});this.points=new cy(e,i),this.scene.add(this.points);for(let s=0;s<t;s++)this._sizes[s]=0,this._alphas[s]=0;this._sizeAttr.needsUpdate=!0,this._alphaAttr.needsUpdate=!0}update(t,e){if(!e)return;this.emitTimer-=t,this.emitTimer<=0&&(this._emit(e),this.emitTimer=this.emitRate);const i=this.maxParticles;for(let s=0;s<i;s++){if(this._ages[s]<0)continue;this._ages[s]+=t;const l=this._ages[s]/this.particleLifetime;if(l>=1){this._ages[s]=-1,this._sizes[s]=0,this._alphas[s]=0;continue}this._positions[s*3]+=this._velocities[s].x*t,this._positions[s*3+1]+=this._velocities[s].y*t,this._positions[s*3+2]+=this._velocities[s].z*t,this._sizes[s]=NE.lerp(this.startSize,this.endSize,l);const u=l<.1?l/.1:1-(l-.1)/.9;this._alphas[s]=u*this.maxAlpha}this._posAttr.needsUpdate=!0,this._sizeAttr.needsUpdate=!0,this._alphaAttr.needsUpdate=!0}_emit(t){const e=new H,i=new Ir,s=new H;t.matrixWorld.decompose(e,i,s);for(const l of this.offsets){const u=l.clone().applyQuaternion(i).add(e);this._spawnParticle(u,i)}}_spawnParticle(t,e){const i=this.maxParticles;for(let s=0;s<i;s++)if(this._ages[s]<0){this._ages[s]=0,this._positions[s*3]=t.x+(Math.random()-.5)*this.spread,this._positions[s*3+1]=t.y+(Math.random()-.5)*this.spread,this._positions[s*3+2]=t.z+(Math.random()-.5)*this.spread,this._velocities[s].set((Math.random()-.5)*.5,Math.random()*.3,(Math.random()-.5)*.2);return}}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose()}}class j3{constructor(t,e,i){this.scene=t,this.group=new Je,this.group.position.set(0,0,0),this.scene.add(this.group),this.quality=i,this._createGlider()}_createGlider(){this.glider=new Je;const t=new Zn({color:16777215,metalness:.1,roughness:.8}),e=new ui(.05,.4,6,16);e.rotateX(Math.PI/2),e.translate(0,0,1);const i=new Ht(e,t),s=new Aa(.4,16,16);s.scale(1,1,2.5);const l=new Ht(s,t);l.position.set(0,0,-2);const u=new Zn({color:1118481,roughness:.1,metalness:.9}),f=new ui(.25,.35,1.2,16);f.rotateX(Math.PI/2),f.scale(1,.5,1);const p=new Ht(f,u);p.position.set(0,.35,-1.5);const h=new zr(8,1,4);h.rotateX(-Math.PI/2),h.scale(1,.05,1);const m=new Ht(h,t);m.position.set(0,0,.2);const v=new zr(2,.5,4);v.rotateX(-Math.PI/2),v.scale(1,.05,1);const _=new Ht(v,t);_.position.set(0,1.2,3.8);const x=new hn(.08,1.2,.8),y=new Ht(x,t);y.position.set(0,.6,3.8),y.rotation.x=-.2,this.glider.add(i,l,p,m,_,y),this.glider.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)}),this.glider.position.set(0,10,-5),this.glider.rotation.x=-.1,this.glider.rotation.z=-.1,this.group.add(this.glider),this.smoke=new zc(this.scene,{maxParticles:80,emitRate:.06,lifetime:3,spread:.2,startSize:1.5,endSize:8,maxAlpha:.3,color:new re(16777215),offsets:[new H(0,0,4)]})}update(t,e){this.glider&&(this.glider.position.y=10+Math.sin(e*.5)*.5,this.glider.rotation.z=-.1+Math.sin(e*.3)*.05,this.glider.rotation.x=-.1+Math.cos(e*.4)*.02,this.smoke&&this.smoke.update(t,this.glider))}dispose(){this.smoke&&this.smoke.dispose(),this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class Z3{constructor(t,e,i){this.scene=t,this.group=new Je,this.group.position.set(0,0,-105),this.scene.add(this.group),this.quality=i,this.clouds=[],this._createClouds(),this._createPlane()}_createClouds(){var i;const t=Math.floor(60*(((i=this.quality)==null?void 0:i.particleMultiplier)||1)),e=new Aa(1,8,8);for(let s=0;s<t;s++){const l=new Je,u=3+Math.floor(Math.random()*4);for(let f=0;f<u;f++){const p=new Zn({color:16777215,transparent:!0,opacity:.4+Math.random()*.3,roughness:1}),h=new Ht(e,p),m=1+Math.random()*3;h.scale.set(m,m*.6,m),h.position.set((Math.random()-.5)*m*2,(Math.random()-.5)*m*.5,(Math.random()-.5)*m*2),l.add(h)}l.position.set((Math.random()-.5)*80,15+Math.random()*25,(Math.random()-.5)*120),l.userData={speed:.1+Math.random()*.3,floatOffset:Math.random()*Math.PI*2},this.clouds.push(l),this.group.add(l)}}_createPlane(){this.airplane=new Je;const t=new Zn({color:16777215,metalness:.4,roughness:.2}),e=new Zn({color:1118481,metalness:.9,roughness:.1}),i=new ui(.3,.6,8,16);i.rotateX(Math.PI/2);const s=new Ht(i,t);s.scale.set(1,1,1),s.castShadow=!0,s.receiveShadow=!0;const l=new Aa(.6,16,16),u=new Ht(l,t);u.position.set(0,0,-4),u.scale.set(.5,.5,2.5);const f=new zr(.6,2,16);f.rotateX(-Math.PI/2);const p=new Ht(f,t);p.position.set(0,0,5);const h=new ui(.35,.45,1.2,16);h.rotateX(Math.PI/2);const m=new Ht(h,e);m.position.set(0,.35,-3),m.scale.set(1,.5,1);const v=new hn(8,.08,2),_=new Ht(v,t);_.position.set(0,-.2,0);const x=_.clone();x.position.set(-2,-.2,.5),x.rotation.y=-.3,x.scale.set(.5,1,1);const y=_.clone();y.position.set(2,-.2,.5),y.rotation.y=.3,y.scale.set(.5,1,1);const b=new ui(.3,.3,1.5,16);b.rotateX(Math.PI/2);const S=new Ht(b,t);S.position.set(-.8,.2,3);const M=new Ht(b,t);M.position.set(.8,.2,3);const E=new hn(.08,1.5,1.2),D=new Ht(E,t);D.position.set(0,.8,4.5),D.rotation.x=-.3;const C=new hn(2.5,.08,.6),U=new Ht(C,t);U.position.set(0,1.5,4.8);const N=new Oc(.25,16),O=new ns({color:16777215}),T=new Ht(N,O);T.position.set(-.8,.2,3.8);const w=new Ht(N,O);w.position.set(.8,.2,3.8),this.airplane.add(s,u,p,m,x,y,S,M,D,U,T,w),this.airplane.position.set(5,24,0),this.airplane.scale.setScalar(4),this.group.add(this.airplane),this.smoke=new zc(this.scene,{maxParticles:180,emitRate:.03,lifetime:2.8,spread:.5,startSize:2,endSize:14,maxAlpha:.45,color:new re(14870768),offsets:[new H(-.8*4,.2*4,3*4),new H(.8*4,.2*4,3*4)]})}update(t,e){for(const i of this.clouds){const s=i.userData;i.position.y+=Math.sin(e*s.speed+s.floatOffset)*.002,i.position.x+=s.speed*t*.5,i.position.x>45&&(i.position.x=-45)}this.airplane&&(this.airplane.position.y=22+Math.sin(e*.8)*1.5,this.airplane.position.x=3+Math.sin(e*.5)*3,this.airplane.rotation.z=Math.sin(e*.5)*.1,this.airplane.rotation.x=Math.sin(e*.8)*.05,this.smoke&&this.smoke.update(t,this.airplane))}dispose(){this.smoke&&this.smoke.dispose(),this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}const K3={HTML:14896934,CSS:2510308,Tailwind:440020,JavaScript:16244510,"React JS":6413051,"Node JS":3381555,Express:4473924,MySQL:4487585,PHP:7830452,Git:15749170,Apache:13771048,Bootstrap:7951027,Figma:15879710,Postman:16739383,cPanel:16739372,"Socket.io":65793,Vite:6581503,npm:13318199};class Q3{constructor(t,e,i){this.scene=t,this.assetLoader=e,this.group=new Je,this.group.position.set(0,0,-305),this.scene.add(this.group),this.quality=i,this.iconMeshes=[],this.iconData=[],this._createJet(),this._createSkillOrbs()}_createJet(){this.jet=new Je;const t=new Zn({color:6583435,metalness:.8,roughness:.2}),e=new Zn({color:988970,metalness:.9,roughness:.1}),i=new Zn({color:1118481,metalness:1,roughness:0,transparent:!0,opacity:.8}),s=new ui(.1,.6,7,16);s.rotateX(Math.PI/2);const l=new Ht(s,t),u=new zr(.6,2,16);u.rotateX(-Math.PI/2);const f=new Ht(u,t);f.position.set(0,0,-4.5);const p=new Aa(.5,16,16);p.scale(.8,.6,2.5);const h=new Ht(p,i);h.position.set(0,.4,-2.5);const m=new Sn,v=new Float32Array([0,0,0,-4,0,3,0,0,3.5,0,0,0,0,0,3.5,4,0,3]);m.setAttribute("position",new Hn(v,3)),m.computeVertexNormals();const _=new Ht(m,e);_.position.set(0,-.1,0),_.material.side=li;const x=new hn(.05,1.5,1.5),y=new Ht(x,e);y.position.set(-.6,.8,2.5),y.rotation.z=-.2;const b=new Ht(x,e);b.position.set(.6,.8,2.5),b.rotation.z=.2;const S=new ui(.4,.45,1,16);S.rotateX(Math.PI/2);const M=new Ht(S,t);M.position.set(-.4,0,3.5);const E=new Ht(S,t);E.position.set(.4,0,3.5);const D=new Oc(.35,16),C=new ns({color:16777215,fog:!1}),U=new Ht(D,C);U.position.set(-.4,0,4.01);const N=new Ht(D,C);N.position.set(.4,0,4.01),this.jet.add(l,f,h,_,y,b,M,E,U,N),this.jet.position.set(15,12,80),this.jet.scale.setScalar(2.5),this.group.add(this.jet),this.smoke=new zc(this.scene,{maxParticles:200,emitRate:.025,lifetime:2.2,spread:.3,startSize:1.5,endSize:10,maxAlpha:.5,color:new re(16777215),offsets:[new H(-.4*2.5,0,4.01*2.5),new H(.4*2.5,0,4.01*2.5)]})}_createSkillOrbs(){const t=new M0;for(let e=0;e<Mf.length;e++){const i=Mf[e],s=K3[i.name]||16777215,l=new Je;let u;if(i.icon){const m=t.load(i.icon);m.colorSpace=Ln,m.generateMipmaps=!0;const v=new ns({map:m,transparent:!0,side:li,alphaTest:.05,fog:!1,depthWrite:!1});u=new Ht(new Zs(12,12),v)}else u=new Ht(new hn(4,4,4),new ns({color:s,fog:!1}));l.add(u);const f=e/Mf.length*Math.PI*1.5,p=35+Math.sin(e*.7)*10,h=(e/Mf.length-.5)*300;l.position.set(Math.cos(f)*p,15+Math.sin(f)*12+Math.sin(e)*6,h),l.userData={name:i.name,baseY:l.position.y,floatOffset:Math.random()*Math.PI*2,floatSpeed:.5+Math.random()*.5,rotSpeed:.3+Math.random()*.4,iconMesh:u},this.iconMeshes.push(l),this.iconData.push(i),this.group.add(l)}}update(t,e){this.jet&&(this.jet.position.y=5+Math.sin(e*2)*.5,this.jet.position.x=2+Math.cos(e*1.5)*.5,this.jet.rotation.z=Math.sin(e*1.5)*.1,this.jet.rotation.x=.05+Math.cos(e*2)*.05,this.smoke&&this.smoke.update(t,this.jet));for(const i of this.iconMeshes){const s=i.userData;i.position.y=s.baseY+Math.sin(e*s.floatSpeed+s.floatOffset)*1,s.iconMesh&&(s.iconMesh.rotation.y=Math.sin(e*.5+s.floatOffset)*.3)}}getIconScreenPositions(t){const e=[];for(let i=0;i<this.iconMeshes.length;i++){const s=this.iconMeshes[i],l=new H;s.getWorldPosition(l);const u=l.clone().project(t);u.x=(u.x+1)/2*window.innerWidth,u.y=(-u.y+1)/2*window.innerHeight;const f=t.position.distanceTo(l);e.push({name:this.iconData[i].name,x:u.x,y:u.y,distance:f,visible:f<120&&u.x>-100&&u.x<window.innerWidth+100})}return e}dispose(){this.smoke&&this.smoke.dispose(),this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}}class J3{constructor(t,e,i){this.scene=t,this.group=new Je,this.group.position.set(0,0,-540),this.scene.add(this.group),this.quality=i,this.panels=[],this._createAircraft(),this._createDataBeacons()}_createAircraft(){this.aircraft=new Je;const t=new Zn({color:16317180,metalness:.5,roughness:.5}),e=new Zn({color:3359061,metalness:.7,roughness:.3}),i=new ui(.6,.8,4,16);i.rotateX(Math.PI/2);const s=new Ht(i,t),l=new zr(.8,1.2,16);l.rotateX(-Math.PI/2);const u=new Ht(l,t);u.position.set(0,0,-2.5),this.propeller=new Je;const f=new hn(3,.2,.1),p=new Ht(f,e),h=new Ht(f,e);h.rotation.z=Math.PI/2,this.propeller.add(p,h),this.propeller.position.set(0,0,-3.1),this.aircraft.add(this.propeller);const m=new hn(10,.1,1.5),v=new Ht(m,t);v.position.set(0,.6,-.5);const _=new hn(.1,1.2,1),x=new Ht(_,t);x.position.set(0,.6,2);const y=new hn(3,.05,.8),b=new Ht(y,t);b.position.set(0,.6,2),this.aircraft.add(s,u,v,x,b),this.aircraft.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),this.aircraft.position.set(5,20,-10),this.group.add(this.aircraft),this.smoke=new zc(this.scene,{maxParticles:150,emitRate:.035,lifetime:2.5,spread:.4,startSize:1.8,endSize:11,maxAlpha:.4,color:new re(16777215),offsets:[new H(0,0,2.5)]})}_createDataBeacons(){const t=B3||[],e=t.length,i=1024,s=384;for(let l=0;l<e;l++){const u=t[l],f=new Je,p=document.createElement("canvas"),h=p.getContext("2d");p.width=i,p.height=s,h.clearRect(0,0,i,s);const m=h.createLinearGradient(0,0,0,s);m.addColorStop(0,"rgba(10, 10, 15, 0.92)"),m.addColorStop(1,"rgba(20, 20, 25, 0.85)"),h.fillStyle=m;const v=32;h.beginPath(),h.moveTo(v,0),h.lineTo(i-v,0),h.quadraticCurveTo(i,0,i,v),h.lineTo(i,s-v),h.quadraticCurveTo(i,s,i-v,s),h.lineTo(v,s),h.quadraticCurveTo(0,s,0,s-v),h.lineTo(0,v),h.quadraticCurveTo(0,0,v,0),h.closePath(),h.fill(),h.strokeStyle="rgba(255, 255, 255, 0.15)",h.lineWidth=3,h.stroke(),h.fillStyle="#ffffff",h.font="bold 56px Arial, sans-serif",h.textAlign="center",h.shadowColor="rgba(255, 255, 255, 0.2)",h.shadowBlur=18,h.fillText(u.title,i/2,100),h.shadowBlur=0,h.font="34px Arial, sans-serif",h.fillStyle="#9ca3af";const x=(u.desc||u.description||"").split(" ");let y="",b=180;for(let N=0;N<x.length;N++){const O=y+x[N]+" ";h.measureText(O).width>i-80&&N>0?(h.fillText(y.trim(),i/2,b),y=x[N]+" ",b+=48):y=O}h.fillText(y.trim(),i/2,b);const S=new Bm(p);S.colorSpace=Ln,S.anisotropy=16;const M=new Zs(12,4.5),E=new ns({map:S,transparent:!0,side:li,fog:!1}),D=new Ht(M,E);f.add(D);const C=l/e*Math.PI*1.2,U=15+Math.random()*5;f.position.set(Math.cos(C)*U,18+Math.random()*6,-20+l*25),this.group.add(f),this.panels.push({group:f,data:u,baseY:f.position.y,timeOffset:Math.random()*Math.PI*2})}}getPanelScreenPositions(t){const e=[];for(let i=0;i<this.panels.length;i++){const s=this.panels[i],l=new H;s.group.getWorldPosition(l);const u=l.distanceTo(t.position);l.project(t);const f=(l.x*.5+.5)*window.innerWidth,p=(-l.y*.5+.5)*window.innerHeight;l.z<1&&e.push({title:s.data.title,desc:s.data.desc||s.data.description||"",icon:s.data.icon,x:f,y:p,distance:u,visible:u<120})}return e}update(t,e){this.aircraft&&(this.aircraft.position.y=20+Math.sin(e*2)*.4,this.propeller&&(this.propeller.rotation.z+=t*20),this.smoke&&this.smoke.update(t,this.aircraft));for(const i of this.panels)i.group.position.y=i.baseY+Math.sin(e+i.timeOffset)*.5,i.group.rotation.y=Math.sin(e*.5+i.timeOffset)*.1}dispose(){this.smoke&&this.smoke.dispose(),this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class $3{constructor(t,e,i){this.scene=t,this.assetLoader=e,this.group=new Je,this.group.position.set(0,0,-860),this.scene.add(this.group),this.quality=i,this.cards=[],this._createAircraft(),this._createProjectCards()}_createAircraft(){this.aircraft=new Je;const t=new Zn({color:988970,metalness:.8,roughness:.3}),e=new Zn({color:16777215,metalness:.9,roughness:.2,emissive:3355443,emissiveIntensity:.2}),i=new ui(1.2,1.5,8,16);i.rotateX(Math.PI/2);const s=new Ht(i,t),l=new Aa(1.5,16,16);l.scale(1,.7,1);const u=new Ht(l,t);u.position.set(0,.4,-4);const f=new Aa(.8,16,16);f.scale(1,1,2.5);const p=new Ht(f,e);p.position.set(0,0,-5.5);const h=new hn(16,.2,3),m=new Ht(h,t);m.position.set(0,0,0);const v=new ui(.5,.6,2,16);v.rotateX(Math.PI/2),[-5,-2.5,2.5,5].forEach(M=>{const E=new Ht(v,t);E.position.set(M,-.4,.5),this.aircraft.add(E);const D=new Ht(new Oc(.4,16),e);D.position.set(M,-.4,1.51),this.aircraft.add(D)});const x=new hn(.1,3,2),y=new Ht(x,t);y.position.set(0,1.5,4.5),y.rotation.x=-.2;const b=new hn(6,.1,1.5),S=new Ht(b,t);S.position.set(0,3,4.8),this.aircraft.add(s,u,p,m,y,S),this.aircraft.position.set(0,5,-20),this.group.add(this.aircraft),this.smoke=new zc(this.scene,{maxParticles:250,emitRate:.02,lifetime:3,spread:.6,startSize:2.5,endSize:16,maxAlpha:.4,color:new re(16777215),offsets:[new H(-5,-.4,1.51),new H(-2.5,-.4,1.51),new H(2.5,-.4,1.51),new H(5,-.4,1.51)]})}_createProjectCards(){const t=G3||[];let e=0;const i=45,s=new M0;for(let l=0;l<t.length;l++){const u=t[l],f=new Je;let p=null;u.image&&(p=s.load(u.image),p.colorSpace=Ln);const h=new Zs(16,9),m=new dy({map:p,color:16777215,metalness:.1,roughness:.2,transmission:p?.2:.9,opacity:1,transparent:!0,side:li}),v=new Ht(h,m),_=new rT(h),x=new ly({color:16777215,linewidth:2,transparent:!0,opacity:.3}),y=new iT(_,x);f.add(v),f.add(y);const b=Math.random()*Math.PI*2,S=l%2===0?-1:1,M=S*14,E=8+(Math.random()-.5)*6;e-=i,f.position.set(M,E,e),f.rotation.y=S*.15,this.group.add(f),this.cards.push({group:f,baseY:E,floatOffset:b,data:u})}}getIslandScreenPositions(t){const e=[];for(let i=0;i<this.cards.length;i++){const s=this.cards[i],l=new H;s.group.getWorldPosition(l);const u=l.distanceTo(t.position);l.project(t);const f=(l.x*.5+.5)*window.innerWidth,p=(-l.y*.5+.5)*window.innerHeight;l.z<1&&e.push({title:s.data.title,description:s.data.description,stack:s.data.stack,image:s.data.image,url:s.data.url,x:f,y:p,distance:u,visible:u<120})}return e}update(t,e){this.aircraft&&(this.aircraft.position.y=5+Math.sin(e*1.5)*1.5,this.aircraft.rotation.z=Math.sin(e*.8)*.1,this.aircraft.rotation.x=Math.sin(e*1.2)*.05,this.smoke&&this.smoke.update(t,this.aircraft));for(const i of this.cards)i.group.position.y=i.baseY+Math.sin(e*2+i.floatOffset)*.8}dispose(){this.smoke&&this.smoke.dispose(),this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class tD{constructor(t,e,i){this.scene=t,this.group=new Je,this.group.position.set(0,0,-1185),this.scene.add(this.group),this.quality=i,this.checkpoints=[],this._createCheckpoints()}_createCheckpoints(){const t=H3||[],e=40;let i=20;for(let s=0;s<t.length;s++){const l=t[s],u=new Je,f=new Wf(3,.1,8,48),p=new Zn({color:10265519,metalness:.8,roughness:.2,emissive:3355443,emissiveIntensity:.2}),h=new Ht(f,p),m=new Zs(8,4),v=new dy({color:16777215,metalness:.2,roughness:.1,transmission:.8,opacity:1,transparent:!0,side:li}),_=new Ht(m,v);_.position.set(0,0,-.5),u.add(h),u.add(_);const x=s%2===0?-1:1;u.position.set(x*8,8,i),u.rotation.y=x*.1,i-=e,this.group.add(u),this.checkpoints.push({group:u,ring:h,data:l,baseY:8,offset:Math.random()*10})}}getCheckpointScreenPositions(t){const e=[];for(let i=0;i<this.checkpoints.length;i++){const s=this.checkpoints[i],l=new H;s.group.getWorldPosition(l);const u=l.distanceTo(t.position);l.project(t);const f=(l.x*.5+.5)*window.innerWidth,p=(-l.y*.5+.5)*window.innerHeight;l.z<1&&e.push({role:s.data.role,company:s.data.company,duration:s.data.duration,description:s.data.description,x:f,y:p,distance:u,visible:u<120})}return e}update(t,e){this.aircraft&&(this.aircraft.position.y=8+Math.sin(e*1.2)*.4,this.aircraft.rotation.z=Math.sin(e*.6)*.05,this.aircraft.rotation.x=Math.sin(e*.8)*.02);for(const i of this.checkpoints)i.group.position.y=i.baseY+Math.sin(e*1.5+i.offset)*.6,i.ring.rotation.x=Math.sin(e+i.offset)*.1,i.ring.rotation.y=t*.2}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class eD{constructor(t,e,i){this.scene=t,this.group=new Je,this.group.position.set(0,0,-1460),this.scene.add(this.group),this.quality=i,this.infoPanels=[],this._createGlider(),this._createInfoBeacons()}_createGlider(){this.glider=new Je;const t=new Zn({color:16777215,metalness:.1,roughness:.8}),e=new ui(.1,.4,7,16);e.rotateX(Math.PI/2);const i=new Ht(e,t),s=new Aa(.4,16,16);s.scale(1,1,2);const l=new Ht(s,t);l.position.set(0,0,-3.5);const u=new Zn({color:1118481,roughness:.1,metalness:.9}),f=new Aa(.45,16,16);f.scale(.8,.4,1.5);const p=new Ht(f,u);p.position.set(0,.3,-2);const h=new hn(18,.05,.8),m=new Ht(h,t);m.position.set(0,.2,-.5);const v=new hn(.05,1.2,.8),_=new Ht(v,t);_.position.set(0,.6,3);const x=new hn(3,.05,.6),y=new Ht(x,t);y.position.set(0,1.2,3),this.glider.add(i,l,p,m,_,y),this.glider.position.set(0,15,-10),this.glider.rotation.x=-.15,this.group.add(this.glider)}_createInfoBeacons(){const t=[{type:"email",value:Wo.email,label:"Email Me",icon:"EnvelopeIcon"},{type:"github",value:Wo.github,label:"GitHub Focus",icon:"CodeBracketIcon"},...Wo.socials.map(i=>({type:"social",value:i.url,label:i.name,icon:"LinkIcon"}))],e=[16777215,13751771,10265519,15067115];for(let i=0;i<t.length;i++){const s=t[i],l=e[i%e.length],u=new Je,f=new Wf(1.5,.05,8,48),p=new ns({color:l,transparent:!0,opacity:.5}),h=new Ht(f,p);u.add(h);const m=new S0(.5,1),v=new ns({color:16777215}),_=new Ht(m,v);u.add(_);const x=i/(t.length-1)*Math.PI-Math.PI/2;u.position.set(Math.sin(x)*12,5+Math.cos(x)*4,-20+Math.abs(x)*5),this.group.add(u),this.infoPanels.push({group:u,ring:h,core:_,data:s,baseY:u.position.y,offset:i*.5})}}getContactPositions(t){const e=[];for(let i=0;i<this.infoPanels.length;i++){const s=this.infoPanels[i],l=new H;s.group.getWorldPosition(l);const u=l.distanceTo(t.position);l.project(t);const f=(l.x*.5+.5)*window.innerWidth,p=(-l.y*.5+.5)*window.innerHeight;l.z<1&&e.push({...s.data,x:f,y:p,distance:u,visible:u<120})}return e}update(t,e){this.glider&&(this.glider.position.y=15+Math.sin(e*.8)*.5,this.glider.rotation.z=Math.sin(e*.5)*.05);for(const i of this.infoPanels)i.group.position.y=i.baseY+Math.sin(e*1.5+i.offset)*.4,i.ring.rotation.x+=t*.5,i.ring.rotation.y+=t*.3,i.core.rotation.y-=t*.5}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}const nD=({onStart:o})=>{const[t,e]=Be.useState(!0),[i,s]=Be.useState(!1),[l,u]=Be.useState(!1);Be.useEffect(()=>{const p=setTimeout(()=>u(!0),500);return()=>clearTimeout(p)},[]);const f=()=>{s(!0),setTimeout(()=>{e(!1),o()},1e3)};return t?wt.jsxs("div",{className:`intro-overlay ${i?"intro-overlay--fadeout":""}`,style:{position:"fixed",inset:0,zIndex:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at center, rgba(10,10,30,0.85) 0%, rgba(5,5,16,0.98) 100%)",transition:"opacity 1s ease-out",opacity:i?0:1,pointerEvents:i?"none":"auto"},children:[wt.jsx("div",{className:"intro-lines"}),wt.jsx("h1",{style:{fontSize:"clamp(2rem, 6vw, 5rem)",fontWeight:800,background:"linear-gradient(135deg, #ffffff 0%, #9ca3af 50%, #ffffff 100%)",backgroundSize:"200% 200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"gradientShift 6s ease infinite",textAlign:"center",marginBottom:"0.5rem",opacity:l?1:0,transform:l?"translateY(0)":"translateY(30px)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1)",letterSpacing:"-0.02em"},children:kf.name}),wt.jsx("p",{style:{fontSize:"clamp(1rem, 2vw, 1.4rem)",color:"rgba(255,255,255,0.5)",textAlign:"center",marginBottom:"3rem",maxWidth:"500px",opacity:l?1:0,transform:l?"translateY(0)":"translateY(20px)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",fontWeight:300},children:kf.tagline}),wt.jsxs("button",{onClick:f,className:"start-btn",style:{padding:"16px 48px",fontSize:"1.1rem",fontWeight:600,color:"#000",background:"#fff",border:"none",borderRadius:"50px",cursor:"pointer",position:"relative",overflow:"hidden",opacity:l?1:0,transform:l?"translateY(0) scale(1)":"translateY(30px) scale(0.9)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",boxShadow:"0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.05)",letterSpacing:"0.15em",textTransform:"uppercase"},children:[wt.jsx("span",{style:{position:"relative",zIndex:2},children:"Start Exploring"}),wt.jsx("div",{style:{position:"absolute",inset:-2,borderRadius:"52px",background:"linear-gradient(135deg, #ffffff, #9ca3af, #ffffff)",backgroundSize:"200% 200%",animation:"gradientShift 4s ease infinite",opacity:.3,filter:"blur(8px)",zIndex:0}})]}),wt.jsx("p",{style:{position:"absolute",bottom:"2rem",fontSize:"0.8rem",color:"rgba(255,255,255,0.25)",letterSpacing:"0.1em",textTransform:"uppercase",opacity:l?1:0,transition:"opacity 1s ease 1.5s"},children:"Scroll to navigate after entering"})]}):null},iD=({currentSection:o,onSectionClick:t})=>{const[e,i]=Be.useState(window.innerWidth<768);return Be.useEffect(()=>{const s=()=>i(window.innerWidth<768);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e?wt.jsx("div",{style:{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:50,display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",padding:"8px 4px",background:"none",backdropFilter:"none",borderRadius:"0",border:"none"},children:qo.map((s,l)=>{const u=l===o;return wt.jsx("button",{onClick:()=>t(l),title:s.label,style:{background:"none",border:"none",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:wt.jsx("div",{style:{width:u?"14px":"8px",height:u?"14px":"8px",borderRadius:"50%",background:u?"linear-gradient(135deg, #ffffff, #e0f2fe)":"#374151",border:u?"none":"1px solid #4b5563",transition:"all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",boxShadow:u?"0 0 12px rgba(186, 230, 253, 0.8)":"none",position:"relative"},children:u&&wt.jsx("div",{style:{position:"absolute",inset:"-4px",borderRadius:"50%",border:"1px solid rgba(255, 255, 255, 0.5)",animation:"pulse 2s ease-in-out infinite"}})})},s.id)})}):wt.jsxs("div",{style:{position:"fixed",right:"20px",top:"50%",transform:"translateY(-50%)",zIndex:50,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"12px",padding:"0",background:"none",backdropFilter:"none",borderRadius:"0",border:"none"},children:[qo.map((s,l)=>{const u=l===o;return wt.jsxs("button",{onClick:()=>t(l),style:{display:"flex",alignItems:"center",gap:"10px",background:"none",border:"none",cursor:"pointer",padding:"4px",transition:"all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},title:s.label,children:[wt.jsx("span",{style:{fontSize:"0.7rem",fontWeight:600,color:u?"#fff":"#000",opacity:u?1:0,transform:u?"translateX(0)":"translateX(10px)",transition:"all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",textTransform:"uppercase",letterSpacing:"0.1em",whiteSpace:"nowrap",pointerEvents:"none",textShadow:u?"0 1px 8px rgba(255, 255, 255, 0.3)":"none"},children:s.label}),wt.jsx("div",{style:{width:u?"13px":"8px",height:u?"13px":"8px",borderRadius:"50%",background:u?"linear-gradient(135deg, #ffffffff, #d2e0e2ff)":"#1f2937",border:u?"none":"1px solid #374151",transition:"all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",boxShadow:u?"0 0 15px rgba(255, 255, 255, 0.8)":"none",position:"relative"},children:u&&wt.jsx("div",{style:{position:"absolute",inset:"-4px",borderRadius:"50%",border:"1px solid rgba(255, 255, 255, 0.25)",animation:"pulse 2s ease-in-out infinite"}})})]},s.id)}),wt.jsx("div",{style:{position:"absolute",right:"13px",top:"20px",bottom:"20px",width:"1px",background:"#000000ff",zIndex:-1},children:wt.jsx("div",{style:{width:"100%",height:`${o/Math.max(qo.length-1,1)*100}%`,background:"linear-gradient(to bottom, #38bdf8, #60a5fa)",transition:"height 0.6s cubic-bezier(0.22, 1, 0.36, 1)"}})})]})},aD=({currentSection:o,sectionProgress:t,skillPositions:e,projectPositions:i,experiencePositions:s,servicePositions:l,started:u})=>{var v;const[f,p]=Be.useState(window.innerWidth<768);Be.useEffect(()=>{const _=()=>p(window.innerWidth<768);return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const h=f?"3%":"5%",m=f?"92vw":"480px";return wt.jsxs("div",{id:"html-overlay",style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:30,overflow:"hidden"},children:[u&&wt.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,height:"52px",zIndex:60,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",background:"rgba(5, 5, 20, 0.55)",backdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,0.08)",pointerEvents:"auto"},children:[wt.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,background:"linear-gradient(135deg, #ffffff, #9ca3af)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"0.05em"},children:kf.firstName}),wt.jsx("span",{style:{fontSize:"0.7rem",fontWeight:600,color:"rgba(255,255,255,0.7)",textTransform:"uppercase",letterSpacing:"0.12em",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"20px",padding:"3px 12px"},children:((v=qo[o])==null?void 0:v.label)||""})]}),o===1&&wt.jsxs("div",{className:"section-panel about-panel",style:{position:"absolute",left:h,bottom:f?"80px":"10%",maxWidth:m,opacity:Math.min(t*3,1),transform:`translateY(${(1-Math.min(t*3,1))*30}px)`,transition:"transform 0.3s ease-out"},children:[wt.jsxs("h2",{className:"overlay-title",children:["About ",wt.jsx("span",{className:"text-accent",children:"Me"})]}),I3.paragraphs.map((_,x)=>wt.jsx("p",{className:"overlay-text",style:{animationDelay:`${x*.2}s`},children:_},x))]}),o===2&&e&&wt.jsxs(wt.Fragment,{children:[wt.jsx("div",{className:"section-panel",style:{position:"absolute",left:h,top:u?"70px":"10%",opacity:Math.min(t*3,1)},children:wt.jsxs("h2",{className:"overlay-title",children:["Tech ",wt.jsx("span",{className:"text-accent",children:"Stack"})]})}),e.filter(_=>_.visible).map(_=>wt.jsx("div",{className:"skill-label",style:{position:"absolute",left:`${_.x}px`,top:`${_.y+30}px`,transform:"translate(-50%, 0)",opacity:Math.max(0,1-_.distance/30)},children:_.name},_.name))]}),o===3&&l&&wt.jsxs(wt.Fragment,{children:[wt.jsx("div",{className:"section-panel",style:{position:"absolute",left:h,top:u?"70px":"10%",opacity:Math.min(t*3,1)},children:wt.jsxs("h2",{className:"overlay-title services-title",children:["What I ",wt.jsx("span",{className:"text-accent",children:"Offer"})]})}),l.filter(_=>_.visible).map((_,x)=>wt.jsxs("div",{className:"floating-card service-card",style:{position:"absolute",left:`${_.x}px`,top:`${_.y}px`,transform:"translate(-50%, -100%)",marginTop:"-30px",opacity:Math.max(0,1-_.distance/80),pointerEvents:_.distance<60?"auto":"none"},children:[wt.jsx("h3",{children:_.title}),wt.jsx("p",{children:_.desc})]},x))]}),o===4&&i&&wt.jsxs(wt.Fragment,{children:[wt.jsx("div",{className:"section-panel",style:{position:"absolute",left:h,top:u?"70px":"10%",opacity:Math.min(t*3,1)},children:wt.jsxs("h2",{className:"overlay-title",children:["Selected ",wt.jsx("span",{className:"text-accent",children:"Works"})]})}),i.filter(_=>_.visible).map((_,x)=>wt.jsxs("div",{className:"floating-card project-card",style:{position:"absolute",left:`${_.x}px`,top:`${_.y}px`,transform:"translate(-50%, -100%)",marginTop:"-40px",opacity:Math.max(0,1-_.distance/100),pointerEvents:_.distance<80?"auto":"none"},children:[wt.jsx("h3",{children:_.title}),wt.jsx("p",{className:"stack-text",children:_.stack}),_.url&&wt.jsx("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",className:"visit-link",children:"Visit Site →"})]},x))]}),o===5&&s&&wt.jsxs(wt.Fragment,{children:[wt.jsx("div",{className:"section-panel",style:{position:"absolute",left:h,top:u?"70px":"10%",opacity:Math.min(t*3,1)},children:wt.jsxs("h2",{className:"overlay-title",children:["Work ",wt.jsx("span",{className:"text-accent",children:"Experience"})]})}),s.filter(_=>_.visible).map((_,x)=>wt.jsxs("div",{className:"floating-card experience-card",style:{position:"absolute",left:`${_.x}px`,top:`${_.y}px`,transform:"translate(-50%, -100%)",marginTop:"-20px",opacity:Math.max(0,1-_.distance/100)},children:[wt.jsx("span",{className:"period-text",children:_.period}),wt.jsx("h3",{children:_.role}),wt.jsx("h4",{children:_.company}),wt.jsx("p",{children:_.description})]},x))]}),o===6&&wt.jsxs("div",{className:"section-panel contact-panel",style:{position:"absolute",left:h,bottom:f?"80px":"10%",maxWidth:f?"92vw":"420px",opacity:Math.min(t*3,1),transform:`translateY(${(1-Math.min(t*3,1))*30}px)`,pointerEvents:"auto"},children:[wt.jsxs("h2",{className:"overlay-title",children:["Get in ",wt.jsx("span",{className:"text-accent",children:"Touch"})]}),wt.jsxs("div",{className:"contact-info",children:[wt.jsxs("div",{className:"contact-item",children:[wt.jsx("span",{className:"contact-icon",children:"✉"}),wt.jsx("span",{children:Wo.email})]}),wt.jsxs("div",{className:"contact-item",children:[wt.jsx("span",{className:"contact-icon",children:"📍"}),wt.jsx("span",{children:Wo.location})]})]}),wt.jsx("div",{className:"social-links",children:Wo.socials.map(_=>wt.jsx("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",className:"social-orb",children:_.name},_.name))}),wt.jsxs("form",{className:"contact-form",onSubmit:_=>_.preventDefault(),children:[wt.jsx("input",{type:"text",placeholder:"Your Name",className:"form-input"}),wt.jsx("input",{type:"email",placeholder:"Your Email",className:"form-input"}),wt.jsx("textarea",{placeholder:"Your Message",rows:"3",className:"form-input form-textarea"}),wt.jsx("button",{type:"submit",className:"form-submit",children:"Send Message"})]}),wt.jsx("p",{className:"footer-text",children:V3.text})]}),wt.jsx("a",{href:kf.cvLink,download:!0,className:"cv-button",style:{position:"fixed",bottom:f?"76px":"20px",left:"20px",pointerEvents:"auto"},children:"Download CV"})]})},sD=()=>{const o=Be.useRef(null),t=Be.useRef(null),e=Be.useRef(null),i=Be.useRef(null),s=Be.useRef(null),l=Be.useRef(null),u=Be.useRef({}),f=Be.useRef(null),[p,h]=Be.useState(!1),[m,v]=Be.useState(0),[_,x]=Be.useState(0),[y,b]=Be.useState([]),[S,M]=Be.useState([]),[E,D]=Be.useState([]),[C,U]=Be.useState([]),[N,O]=Be.useState(!0);Be.useEffect(()=>{if(!o.current)return;const k=o.current,F=new xC(k),W=new k3(F.camera),Y=new X3,tt=new W3,Z=new q3,G=new Y3(F.scene,{count:2500,zRange:[-1800,100],spreadX:400,spreadY:150});t.current=F,e.current=W,i.current=Y,s.current=tt,l.current=Z;const V=F.quality,it={intro:new j3(F.scene,tt,V),about:new Z3(F.scene,tt,V),skills:new Q3(F.scene,tt,V),services:new J3(F.scene,tt,V),projects:new $3(F.scene,tt,V),experience:new tD(F.scene,tt,V),contact:new eD(F.scene,tt,V)};u.current=it,O(!1);let ft=0;const z=()=>{f.current=requestAnimationFrame(z);const et=F.clock.getDelta(),ht=F.clock.getElapsedTime(),bt=Y.update(et),vt=W.update(et,bt);Z.update(vt.sectionIndex,vt.sectionProgress,qo);const Ot=Object.keys(it);for(let nt=0;nt<Ot.length;nt++)it[Ot[nt]].update(et,ht);if(G.update(et,bt,vt.sectionIndex),F.dirLight&&(F.dirLight.position.x=F.camera.position.x+20,F.dirLight.position.z=F.camera.position.z+30,F.dirLight.target.position.set(F.camera.position.x,0,F.camera.position.z-20),F.dirLight.target.updateMatrixWorld()),F.renderer.render(F.scene,F.camera),ft++,ft%4===0){v(vt.sectionIndex),x(vt.sectionProgress);const nt=vt.sectionIndex;nt>=1&&nt<=3&&it.skills&&b(it.skills.getIconScreenPositions(F.camera)),nt>=2&&nt<=4&&it.services&&U(it.services.getPanelScreenPositions(F.camera)),nt>=3&&nt<=5&&it.projects&&M(it.projects.getIslandScreenPositions(F.camera)),nt>=4&&nt<=6&&it.experience&&D(it.experience.getCheckpointScreenPositions(F.camera))}};return z(),()=>{f.current&&cancelAnimationFrame(f.current),Y.dispose(),W.dispose(),Z.dispose(),G.dispose();for(const et of Object.keys(it))it[et].dispose();tt.dispose(),F.dispose()}},[]);const T=Be.useCallback(()=>{h(!0),i.current&&i.current.unlock()},[]),w=Be.useCallback(k=>{if(!e.current||!i.current)return;const F=e.current.jumpToSection(k);i.current.setProgress(F)},[]);return wt.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[wt.jsx("div",{ref:o,style:{position:"fixed",inset:0,zIndex:1}}),N&&wt.jsx("div",{style:{position:"fixed",inset:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",background:"#050510",color:"#38bdf8",fontSize:"1.2rem",fontWeight:300,letterSpacing:"0.2em"},children:"LOADING..."}),!N&&wt.jsx(nD,{onStart:T}),p&&wt.jsx(iD,{currentSection:m,onSectionClick:w}),p&&wt.jsx(aD,{currentSection:m,sectionProgress:_,skillPositions:y,projectPositions:S,experiencePositions:E,servicePositions:C,started:p})]})};function rD(){return wt.jsx(sD,{})}Pb.createRoot(document.getElementById("root")).render(wt.jsx(Ab.StrictMode,{children:wt.jsx(rD,{})}));
