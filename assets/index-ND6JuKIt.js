(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function c(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(d){if(d.ep)return;d.ep=!0;const f=c(d);fetch(d.href,f)}})();function _u(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var eu={exports:{}},Ii={};var Om;function Wp(){if(Om)return Ii;Om=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(o,d,f){var h=null;if(f!==void 0&&(h=""+f),d.key!==void 0&&(h=""+d.key),"key"in d){f={};for(var E in d)E!=="key"&&(f[E]=d[E])}else f=d;return d=f.ref,{$$typeof:r,type:o,key:h,ref:d!==void 0?d:null,props:f}}return Ii.Fragment=u,Ii.jsx=c,Ii.jsxs=c,Ii}var Nm;function Pp(){return Nm||(Nm=1,eu.exports=Wp()),eu.exports}var b=Pp(),tu={exports:{}},ae={};var jm;function Ip(){if(jm)return ae;jm=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),k=Symbol.iterator;function X(S){return S===null||typeof S!="object"?null:(S=k&&S[k]||S["@@iterator"],typeof S=="function"?S:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,L={};function K(S,U,H){this.props=S,this.context=U,this.refs=L,this.updater=H||G}K.prototype.isReactComponent={},K.prototype.setState=function(S,U){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,U,"setState")},K.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function I(){}I.prototype=K.prototype;function F(S,U,H){this.props=S,this.context=U,this.refs=L,this.updater=H||G}var ce=F.prototype=new I;ce.constructor=F,q(ce,K.prototype),ce.isPureReactComponent=!0;var he=Array.isArray;function me(){}var W={H:null,A:null,T:null,S:null},Ae=Object.prototype.hasOwnProperty;function Ze(S,U,H){var V=H.ref;return{$$typeof:r,type:S,key:U,ref:V!==void 0?V:null,props:H}}function yt(S,U){return Ze(S.type,U,S.props)}function rt(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function Ke(S){var U={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(H){return U[H]})}var vt=/\/+/g;function ot(S,U){return typeof S=="object"&&S!==null&&S.key!=null?Ke(""+S.key):U.toString(36)}function Oe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(me,me):(S.status="pending",S.then(function(U){S.status==="pending"&&(S.status="fulfilled",S.value=U)},function(U){S.status==="pending"&&(S.status="rejected",S.reason=U)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function N(S,U,H,V,ee){var J=typeof S;(J==="undefined"||J==="boolean")&&(S=null);var ge=!1;if(S===null)ge=!0;else switch(J){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(S.$$typeof){case r:case u:ge=!0;break;case R:return ge=S._init,N(ge(S._payload),U,H,V,ee)}}if(ge)return ee=ee(S),ge=V===""?"."+ot(S,0):V,he(ee)?(H="",ge!=null&&(H=ge.replace(vt,"$&/")+"/"),N(ee,U,H,"",function(pa){return pa})):ee!=null&&(rt(ee)&&(ee=yt(ee,H+(ee.key==null||S&&S.key===ee.key?"":(""+ee.key).replace(vt,"$&/")+"/")+ge)),U.push(ee)),1;ge=0;var De=V===""?".":V+":";if(he(S))for(var Ne=0;Ne<S.length;Ne++)V=S[Ne],J=De+ot(V,Ne),ge+=N(V,U,H,J,ee);else if(Ne=X(S),typeof Ne=="function")for(S=Ne.call(S),Ne=0;!(V=S.next()).done;)V=V.value,J=De+ot(V,Ne++),ge+=N(V,U,H,J,ee);else if(J==="object"){if(typeof S.then=="function")return N(Oe(S),U,H,V,ee);throw U=String(S),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ge}function z(S,U,H){if(S==null)return S;var V=[],ee=0;return N(S,V,"","",function(J){return U.call(H,J,ee++)}),V}function Z(S){if(S._status===-1){var U=S._result;U=U(),U.then(function(H){(S._status===0||S._status===-1)&&(S._status=1,S._result=H)},function(H){(S._status===0||S._status===-1)&&(S._status=2,S._result=H)}),S._status===-1&&(S._status=0,S._result=U)}if(S._status===1)return S._result.default;throw S._result}var fe=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Se={map:z,forEach:function(S,U,H){z(S,function(){U.apply(this,arguments)},H)},count:function(S){var U=0;return z(S,function(){U++}),U},toArray:function(S){return z(S,function(U){return U})||[]},only:function(S){if(!rt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ae.Activity=x,ae.Children=Se,ae.Component=K,ae.Fragment=c,ae.Profiler=d,ae.PureComponent=F,ae.StrictMode=o,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ae.__COMPILER_RUNTIME={__proto__:null,c:function(S){return W.H.useMemoCache(S)}},ae.cache=function(S){return function(){return S.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(S,U,H){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var V=q({},S.props),ee=S.key;if(U!=null)for(J in U.key!==void 0&&(ee=""+U.key),U)!Ae.call(U,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&U.ref===void 0||(V[J]=U[J]);var J=arguments.length-2;if(J===1)V.children=H;else if(1<J){for(var ge=Array(J),De=0;De<J;De++)ge[De]=arguments[De+2];V.children=ge}return Ze(S.type,ee,V)},ae.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:f,_context:S},S},ae.createElement=function(S,U,H){var V,ee={},J=null;if(U!=null)for(V in U.key!==void 0&&(J=""+U.key),U)Ae.call(U,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=U[V]);var ge=arguments.length-2;if(ge===1)ee.children=H;else if(1<ge){for(var De=Array(ge),Ne=0;Ne<ge;Ne++)De[Ne]=arguments[Ne+2];ee.children=De}if(S&&S.defaultProps)for(V in ge=S.defaultProps,ge)ee[V]===void 0&&(ee[V]=ge[V]);return Ze(S,J,ee)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(S){return{$$typeof:E,render:S}},ae.isValidElement=rt,ae.lazy=function(S){return{$$typeof:R,_payload:{_status:-1,_result:S},_init:Z}},ae.memo=function(S,U){return{$$typeof:p,type:S,compare:U===void 0?null:U}},ae.startTransition=function(S){var U=W.T,H={};W.T=H;try{var V=S(),ee=W.S;ee!==null&&ee(H,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(me,fe)}catch(J){fe(J)}finally{U!==null&&H.types!==null&&(U.types=H.types),W.T=U}},ae.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ae.use=function(S){return W.H.use(S)},ae.useActionState=function(S,U,H){return W.H.useActionState(S,U,H)},ae.useCallback=function(S,U){return W.H.useCallback(S,U)},ae.useContext=function(S){return W.H.useContext(S)},ae.useDebugValue=function(){},ae.useDeferredValue=function(S,U){return W.H.useDeferredValue(S,U)},ae.useEffect=function(S,U){return W.H.useEffect(S,U)},ae.useEffectEvent=function(S){return W.H.useEffectEvent(S)},ae.useId=function(){return W.H.useId()},ae.useImperativeHandle=function(S,U,H){return W.H.useImperativeHandle(S,U,H)},ae.useInsertionEffect=function(S,U){return W.H.useInsertionEffect(S,U)},ae.useLayoutEffect=function(S,U){return W.H.useLayoutEffect(S,U)},ae.useMemo=function(S,U){return W.H.useMemo(S,U)},ae.useOptimistic=function(S,U){return W.H.useOptimistic(S,U)},ae.useReducer=function(S,U,H){return W.H.useReducer(S,U,H)},ae.useRef=function(S){return W.H.useRef(S)},ae.useState=function(S){return W.H.useState(S)},ae.useSyncExternalStore=function(S,U,H){return W.H.useSyncExternalStore(S,U,H)},ae.useTransition=function(){return W.H.useTransition()},ae.version="19.2.3",ae}var Dm;function xu(){return Dm||(Dm=1,tu.exports=Ip()),tu.exports}var T=xu();const fn=_u(T);var au={exports:{}},el={},nu={exports:{}},iu={};var Um;function ey(){return Um||(Um=1,(function(r){function u(N,z){var Z=N.length;N.push(z);e:for(;0<Z;){var fe=Z-1>>>1,Se=N[fe];if(0<d(Se,z))N[fe]=z,N[Z]=Se,Z=fe;else break e}}function c(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var z=N[0],Z=N.pop();if(Z!==z){N[0]=Z;e:for(var fe=0,Se=N.length,S=Se>>>1;fe<S;){var U=2*(fe+1)-1,H=N[U],V=U+1,ee=N[V];if(0>d(H,Z))V<Se&&0>d(ee,H)?(N[fe]=ee,N[V]=Z,fe=V):(N[fe]=H,N[U]=Z,fe=U);else if(V<Se&&0>d(ee,Z))N[fe]=ee,N[V]=Z,fe=V;else break e}}return z}function d(N,z){var Z=N.sortIndex-z.sortIndex;return Z!==0?Z:N.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var h=Date,E=h.now();r.unstable_now=function(){return h.now()-E}}var y=[],p=[],R=1,x=null,k=3,X=!1,G=!1,q=!1,L=!1,K=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function ce(N){for(var z=c(p);z!==null;){if(z.callback===null)o(p);else if(z.startTime<=N)o(p),z.sortIndex=z.expirationTime,u(y,z);else break;z=c(p)}}function he(N){if(q=!1,ce(N),!G)if(c(y)!==null)G=!0,me||(me=!0,Ke());else{var z=c(p);z!==null&&Oe(he,z.startTime-N)}}var me=!1,W=-1,Ae=5,Ze=-1;function yt(){return L?!0:!(r.unstable_now()-Ze<Ae)}function rt(){if(L=!1,me){var N=r.unstable_now();Ze=N;var z=!0;try{e:{G=!1,q&&(q=!1,I(W),W=-1),X=!0;var Z=k;try{t:{for(ce(N),x=c(y);x!==null&&!(x.expirationTime>N&&yt());){var fe=x.callback;if(typeof fe=="function"){x.callback=null,k=x.priorityLevel;var Se=fe(x.expirationTime<=N);if(N=r.unstable_now(),typeof Se=="function"){x.callback=Se,ce(N),z=!0;break t}x===c(y)&&o(y),ce(N)}else o(y);x=c(y)}if(x!==null)z=!0;else{var S=c(p);S!==null&&Oe(he,S.startTime-N),z=!1}}break e}finally{x=null,k=Z,X=!1}z=void 0}}finally{z?Ke():me=!1}}}var Ke;if(typeof F=="function")Ke=function(){F(rt)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,ot=vt.port2;vt.port1.onmessage=rt,Ke=function(){ot.postMessage(null)}}else Ke=function(){K(rt,0)};function Oe(N,z){W=K(function(){N(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_next=function(N){switch(k){case 1:case 2:case 3:var z=3;break;default:z=k}var Z=k;k=z;try{return N()}finally{k=Z}},r.unstable_requestPaint=function(){L=!0},r.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=k;k=N;try{return z()}finally{k=Z}},r.unstable_scheduleCallback=function(N,z,Z){var fe=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,N={id:R++,callback:z,priorityLevel:N,startTime:Z,expirationTime:Se,sortIndex:-1},Z>fe?(N.sortIndex=Z,u(p,N),c(y)===null&&N===c(p)&&(q?(I(W),W=-1):q=!0,Oe(he,Z-fe))):(N.sortIndex=Se,u(y,N),G||X||(G=!0,me||(me=!0,Ke()))),N},r.unstable_shouldYield=yt,r.unstable_wrapCallback=function(N){var z=k;return function(){var Z=k;k=z;try{return N.apply(this,arguments)}finally{k=Z}}}})(iu)),iu}var km;function ty(){return km||(km=1,nu.exports=ey()),nu.exports}var lu={exports:{}},at={};var Lm;function ay(){if(Lm)return at;Lm=1;var r=xu();function u(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)p+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(y,p,R){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:y,containerInfo:p,implementation:R}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,at.createPortal=function(y,p){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return f(y,p,null,R)},at.flushSync=function(y){var p=h.T,R=o.p;try{if(h.T=null,o.p=2,y)return y()}finally{h.T=p,o.p=R,o.d.f()}},at.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(y,p))},at.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},at.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var R=p.as,x=E(R,p.crossOrigin),k=typeof p.integrity=="string"?p.integrity:void 0,X=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;R==="style"?o.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:k,fetchPriority:X}):R==="script"&&o.d.X(y,{crossOrigin:x,integrity:k,fetchPriority:X,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},at.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var R=E(p.as,p.crossOrigin);o.d.M(y,{crossOrigin:R,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(y)},at.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var R=p.as,x=E(R,p.crossOrigin);o.d.L(y,R,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},at.preloadModule=function(y,p){if(typeof y=="string")if(p){var R=E(p.as,p.crossOrigin);o.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:R,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(y)},at.requestFormReset=function(y){o.d.r(y)},at.unstable_batchedUpdates=function(y,p){return y(p)},at.useFormState=function(y,p,R){return h.H.useFormState(y,p,R)},at.useFormStatus=function(){return h.H.useHostTransitionStatus()},at.version="19.2.3",at}var zm;function th(){if(zm)return lu.exports;zm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),lu.exports=ay(),lu.exports}var Hm;function ny(){if(Hm)return el;Hm=1;var r=ty(),u=xu(),c=th();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return y(i),e;if(l===n)return y(i),t;l=l.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=l;else{for(var s=!1,m=i.child;m;){if(m===a){s=!0,a=i,n=l;break}if(m===n){s=!0,n=i,a=l;break}m=m.sibling}if(!s){for(m=l.child;m;){if(m===a){s=!0,a=l,n=i;break}if(m===n){s=!0,n=l,a=i;break}m=m.sibling}if(!s)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,k=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),F=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),Ze=Symbol.for("react.activity"),yt=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var vt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===vt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Profiler";case L:return"StrictMode";case he:return"Suspense";case me:return"SuspenseList";case Ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case F:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:ot(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return ot(e(t))}catch{}}return null}var Oe=Array.isArray,N=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},fe=[],Se=-1;function S(e){return{current:e}}function U(e){0>Se||(e.current=fe[Se],fe[Se]=null,Se--)}function H(e,t){Se++,fe[Se]=e.current,e.current=t}var V=S(null),ee=S(null),J=S(null),ge=S(null);function De(e,t){switch(H(J,t),H(ee,e),H(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Id(t),e=em(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(V),H(V,e)}function Ne(){U(V),U(ee),U(J)}function pa(e){e.memoizedState!==null&&H(ge,e);var t=V.current,a=em(t,e.type);t!==a&&(H(ee,e),H(V,a))}function nt(e){ee.current===e&&(U(V),U(ee)),ge.current===e&&(U(ge),Fi._currentValue=Z)}var st,dn;function qt(e){if(st===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);st=t&&t[1]||"",dn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+st+e+dn}var zt=!1;function ii(e,t){if(!e||zt)return"";zt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(w){var A=w}Reflect.construct(e,[],D)}else{try{D.call()}catch(w){A=w}e.call(D.prototype)}}else{try{throw Error()}catch(w){A=w}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(w){if(w&&A&&typeof w.stack=="string")return[w.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),s=l[0],m=l[1];if(s&&m){var g=s.split(`
`),C=m.split(`
`);for(i=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(n===g.length||i===C.length)for(n=g.length-1,i=C.length-1;1<=n&&0<=i&&g[n]!==C[i];)i--;for(;1<=n&&0<=i;n--,i--)if(g[n]!==C[i]){if(n!==1||i!==1)do if(n--,i--,0>i||g[n]!==C[i]){var O=`
`+g[n].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=n&&0<=i);break}}}finally{zt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function Br(e,t){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return e.child!==t&&t!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return ii(e.type,!1);case 11:return ii(e.type.render,!1);case 1:return ii(e.type,!0);case 31:return qt("Activity");default:return""}}function ul(e){try{var t="",a=null;do t+=Br(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var li=Object.prototype.hasOwnProperty,ri=r.unstable_scheduleCallback,oi=r.unstable_cancelCallback,Gr=r.unstable_shouldYield,cl=r.unstable_requestPaint,$e=r.unstable_now,fl=r.unstable_getCurrentPriorityLevel,dl=r.unstable_ImmediatePriority,ml=r.unstable_UserBlockingPriority,mn=r.unstable_NormalPriority,hl=r.unstable_LowPriority,hn=r.unstable_IdlePriority,gl=r.log,te=r.unstable_setDisableYieldValue,pe=null,Ue=null;function ut(e){if(typeof gl=="function"&&te(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(pe,e)}catch{}}var it=Math.clz32?Math.clz32:zh,kh=Math.log,Lh=Math.LN2;function zh(e){return e>>>=0,e===0?32:31-(kh(e)/Lh|0)|0}var pl=256,yl=262144,vl=4194304;function Va(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~l,n!==0?i=Va(n):(s&=m,s!==0?i=Va(s):a||(a=m&~e,a!==0&&(i=Va(a))))):(m=n&~l,m!==0?i=Va(m):s!==0?i=Va(s):a||(a=n&~e,a!==0&&(i=Va(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function si(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Du(){var e=vl;return vl<<=1,(vl&62914560)===0&&(vl=4194304),e}function qr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ui(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bh(e,t,a,n,i,l){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,g=e.expirationTimes,C=e.hiddenUpdates;for(a=s&~a;0<a;){var O=31-it(a),D=1<<O;m[O]=0,g[O]=-1;var A=C[O];if(A!==null)for(C[O]=null,O=0;O<A.length;O++){var w=A[O];w!==null&&(w.lane&=-536870913)}a&=~D}n!==0&&Uu(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~t))}function Uu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-it(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function ku(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-it(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Lu(e,t){var a=t&-t;return a=(a&42)!==0?1:Vr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zu(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:_m(e.type))}function Hu(e,t){var a=z.p;try{return z.p=e,t()}finally{z.p=a}}var ya=Math.random().toString(36).slice(2),We="__reactFiber$"+ya,ct="__reactProps$"+ya,gn="__reactContainer$"+ya,Xr="__reactEvents$"+ya,Gh="__reactListeners$"+ya,qh="__reactHandles$"+ya,Bu="__reactResources$"+ya,ci="__reactMarker$"+ya;function Kr(e){delete e[We],delete e[ct],delete e[Xr],delete e[Gh],delete e[qh]}function pn(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[gn]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=om(e);e!==null;){if(a=e[We])return a;e=om(e)}return t}e=a,a=e.parentNode}return null}function yn(e){if(e=e[We]||e[gn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function vn(e){var t=e[Bu];return t||(t=e[Bu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[ci]=!0}var Gu=new Set,qu={};function Ya(e,t){bn(e,t),bn(e+"Capture",t)}function bn(e,t){for(qu[e]=t,e=0;e<t.length;e++)Gu.add(t[e])}var Vh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vu={},Yu={};function Yh(e){return li.call(Yu,e)?!0:li.call(Vu,e)?!1:Vh.test(e)?Yu[e]=!0:(Vu[e]=!0,!1)}function Sl(e,t,a){if(Yh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function El(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Jt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xh(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qr(e){if(!e._valueTracker){var t=Xu(e)?"checked":"value";e._valueTracker=Xh(e,t,""+e[t])}}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Xu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kh=/[\n"\\]/g;function At(e){return e.replace(Kh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zr(e,t,a,n,i,l,s,m){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?$r(e,s,Ct(t)):a!=null?$r(e,s,Ct(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ct(m):e.removeAttribute("name")}function Qu(e,t,a,n,i,l,s,m){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Qr(e);return}a=a!=null?""+Ct(a):"",t=t!=null?""+Ct(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Qr(e)}function $r(e,t,a){t==="number"&&Tl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Sn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Ct(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zu(e,t,a){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ct(a):""}function $u(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(o(92));if(Oe(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Ct(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Qr(e)}function En(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Qh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ju(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Fu(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&Fu(e,l,t[l])}function Fr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$h=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(e){return $h.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wt(){}var Jr=null;function Wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tn=null,_n=null;function Wu(e){var t=yn(e);if(t&&(e=t.stateNode)){var a=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ct]||null;if(!i)throw Error(o(90));Zr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ku(n)}break e;case"textarea":Zu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Sn(e,!!a.multiple,t,!1)}}}var Pr=!1;function Pu(e,t,a){if(Pr)return e(t,a);Pr=!0;try{var n=e(t);return n}finally{if(Pr=!1,(Tn!==null||_n!==null)&&(cr(),Tn&&(t=Tn,e=_n,_n=Tn=null,Wu(t),e)))for(t=0;t<e.length;t++)Wu(e[t])}}function di(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ct]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ir=!1;if(Pt)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){Ir=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{Ir=!1}var va=null,eo=null,xl=null;function Iu(){if(xl)return xl;var e,t=eo,a=t.length,n,i="value"in va?va.value:va.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===i[l-n];n++);return xl=i.slice(e,1<n?1-n:void 0)}function Ml(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cl(){return!0}function ec(){return!1}function ft(e){function t(a,n,i,l,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(l):l[m]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Cl:ec,this.isPropagationStopped=ec,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),t}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=ft(Xa),hi=x({},Xa,{view:0,detail:0}),Fh=ft(hi),to,ao,gi,Rl=x({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gi&&(gi&&e.type==="mousemove"?(to=e.screenX-gi.screenX,ao=e.screenY-gi.screenY):ao=to=0,gi=e),to)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),tc=ft(Rl),Jh=x({},Rl,{dataTransfer:0}),Wh=ft(Jh),Ph=x({},hi,{relatedTarget:0}),no=ft(Ph),Ih=x({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),eg=ft(Ih),tg=x({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ag=ft(tg),ng=x({},Xa,{data:0}),ac=ft(ng),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function og(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rg[e])?!!t[e]:!1}function io(){return og}var sg=x({},hi,{key:function(e){if(e.key){var t=ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:io,charCode:function(e){return e.type==="keypress"?Ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ug=ft(sg),cg=x({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=ft(cg),fg=x({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:io}),dg=ft(fg),mg=x({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=ft(mg),gg=x({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=ft(gg),yg=x({},Xa,{newState:0,oldState:0}),vg=ft(yg),bg=[9,13,27,32],lo=Pt&&"CompositionEvent"in window,pi=null;Pt&&"documentMode"in document&&(pi=document.documentMode);var Sg=Pt&&"TextEvent"in window&&!pi,ic=Pt&&(!lo||pi&&8<pi&&11>=pi),lc=" ",rc=!1;function oc(e,t){switch(e){case"keyup":return bg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Eg(e,t){switch(e){case"compositionend":return sc(t);case"keypress":return t.which!==32?null:(rc=!0,lc);case"textInput":return e=t.data,e===lc&&rc?null:e;default:return null}}function Tg(e,t){if(xn)return e==="compositionend"||!lo&&oc(e,t)?(e=Iu(),xl=eo=va=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ic&&t.locale!=="ko"?null:t.data;default:return null}}var _g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_g[e.type]:t==="textarea"}function cc(e,t,a,n){Tn?_n?_n.push(n):_n=[n]:Tn=n,t=yr(t,"onChange"),0<t.length&&(a=new Al("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var yi=null,vi=null;function xg(e){Zd(e,0)}function wl(e){var t=fi(e);if(Ku(t))return e}function fc(e,t){if(e==="change")return t}var dc=!1;if(Pt){var ro;if(Pt){var oo="oninput"in document;if(!oo){var mc=document.createElement("div");mc.setAttribute("oninput","return;"),oo=typeof mc.oninput=="function"}ro=oo}else ro=!1;dc=ro&&(!document.documentMode||9<document.documentMode)}function hc(){yi&&(yi.detachEvent("onpropertychange",gc),vi=yi=null)}function gc(e){if(e.propertyName==="value"&&wl(vi)){var t=[];cc(t,vi,e,Wr(e)),Pu(xg,t)}}function Mg(e,t,a){e==="focusin"?(hc(),yi=t,vi=a,yi.attachEvent("onpropertychange",gc)):e==="focusout"&&hc()}function Cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(vi)}function Ag(e,t){if(e==="click")return wl(t)}function Rg(e,t){if(e==="input"||e==="change")return wl(t)}function wg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:wg;function bi(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!li.call(t,i)||!bt(e[i],t[i]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,t){var a=pc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pc(a)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Tl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Tl(e.document)}return t}function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Og=Pt&&"documentMode"in document&&11>=document.documentMode,Mn=null,uo=null,Si=null,co=!1;function Sc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;co||Mn==null||Mn!==Tl(n)||(n=Mn,"selectionStart"in n&&so(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Si&&bi(Si,n)||(Si=n,n=yr(uo,"onSelect"),0<n.length&&(t=new Al("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Mn)))}function Ka(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Cn={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},fo={},Ec={};Pt&&(Ec=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Qa(e){if(fo[e])return fo[e];if(!Cn[e])return e;var t=Cn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ec)return fo[e]=t[a];return e}var Tc=Qa("animationend"),_c=Qa("animationiteration"),xc=Qa("animationstart"),Ng=Qa("transitionrun"),jg=Qa("transitionstart"),Dg=Qa("transitioncancel"),Mc=Qa("transitionend"),Cc=new Map,mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mo.push("scrollEnd");function Ht(e,t){Cc.set(e,t),Ya(t,[e])}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rt=[],An=0,ho=0;function Nl(){for(var e=An,t=ho=An=0;t<e;){var a=Rt[t];Rt[t++]=null;var n=Rt[t];Rt[t++]=null;var i=Rt[t];Rt[t++]=null;var l=Rt[t];if(Rt[t++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}l!==0&&Ac(a,i,l)}}function jl(e,t,a,n){Rt[An++]=e,Rt[An++]=t,Rt[An++]=a,Rt[An++]=n,ho|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function go(e,t,a,n){return jl(e,t,a,n),Dl(e)}function Za(e,t){return jl(e,null,null,t),Dl(e)}function Ac(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-it(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function Dl(e){if(50<Vi)throw Vi=0,xs=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Rn={};function Ug(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,a,n){return new Ug(e,t,a,n)}function po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function It(e,t){var a=e.alternate;return a===null?(a=St(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ul(e,t,a,n,i,l){var s=0;if(n=e,typeof e=="function")po(e)&&(s=1);else if(typeof e=="string")s=Bp(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ze:return e=St(31,a,t,i),e.elementType=Ze,e.lanes=l,e;case q:return $a(a.children,i,l,t);case L:s=8,i|=24;break;case K:return e=St(12,a,t,i|2),e.elementType=K,e.lanes=l,e;case he:return e=St(13,a,t,i),e.elementType=he,e.lanes=l,e;case me:return e=St(19,a,t,i),e.elementType=me,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:s=10;break e;case I:s=9;break e;case ce:s=11;break e;case W:s=14;break e;case Ae:s=16,n=null;break e}s=29,a=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=St(s,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function $a(e,t,a,n){return e=St(7,e,n,t),e.lanes=a,e}function yo(e,t,a){return e=St(6,e,null,t),e.lanes=a,e}function wc(e){var t=St(18,null,null,0);return t.stateNode=e,t}function vo(e,t,a){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Oc=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var a=Oc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ul(t)},Oc.set(e,t),t)}return{value:e,source:t,stack:ul(t)}}var wn=[],On=0,kl=null,Ei=0,Ot=[],Nt=0,ba=null,Vt=1,Yt="";function ea(e,t){wn[On++]=Ei,wn[On++]=kl,kl=e,Ei=t}function Nc(e,t,a){Ot[Nt++]=Vt,Ot[Nt++]=Yt,Ot[Nt++]=ba,ba=e;var n=Vt;e=Yt;var i=32-it(n)-1;n&=~(1<<i),a+=1;var l=32-it(t)+i;if(30<l){var s=i-i%5;l=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Vt=1<<32-it(t)+i|a<<i|n,Yt=l+e}else Vt=1<<l|a<<i|n,Yt=e}function bo(e){e.return!==null&&(ea(e,1),Nc(e,1,0))}function So(e){for(;e===kl;)kl=wn[--On],wn[On]=null,Ei=wn[--On],wn[On]=null;for(;e===ba;)ba=Ot[--Nt],Ot[Nt]=null,Yt=Ot[--Nt],Ot[Nt]=null,Vt=Ot[--Nt],Ot[Nt]=null}function jc(e,t){Ot[Nt++]=Vt,Ot[Nt++]=Yt,Ot[Nt++]=ba,Vt=t.id,Yt=t.overflow,ba=e}var Pe=null,Re=null,de=!1,Sa=null,jt=!1,Eo=Error(o(519));function Ea(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ti(wt(t,e)),Eo}function Dc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[We]=e,t[ct]=n,a){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(a=0;a<Xi.length;a++)oe(Xi[a],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),Qu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),$u(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Wd(t.textContent,a)?(n.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),n.onScroll!=null&&oe("scroll",t),n.onScrollEnd!=null&&oe("scrollend",t),n.onClick!=null&&(t.onclick=Wt),t=!0):t=!1,t||Ea(e,!0)}function Uc(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:Pe=Pe.return}}function Nn(e){if(e!==Pe)return!1;if(!de)return Uc(e),de=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bs(e.type,e.memoizedProps)),a=!a),a&&Re&&Ea(e),Uc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=rm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=rm(e)}else t===27?(t=Re,ka(e.type)?(e=Xs,Xs=null,Re=e):Re=t):Re=Pe?Ut(e.stateNode.nextSibling):null;return!0}function Fa(){Re=Pe=null,de=!1}function To(){var e=Sa;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),Sa=null),e}function Ti(e){Sa===null?Sa=[e]:Sa.push(e)}var _o=S(null),Ja=null,ta=null;function Ta(e,t,a){H(_o,t._currentValue),t._currentValue=a}function aa(e){e._currentValue=_o.current,U(_o)}function xo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Mo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;e:for(;l!==null;){var m=l;l=i;for(var g=0;g<t.length;g++)if(m.context===t[g]){l.lanes|=a,m=l.alternate,m!==null&&(m.lanes|=a),xo(l.return,a,e),n||(s=null);break e}l=m.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(o(341));s.lanes|=a,l=s.alternate,l!==null&&(l.lanes|=a),xo(s,a,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function jn(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var m=i.type;bt(i.pendingProps.value,s.value)||(e!==null?e.push(m):e=[m])}}else if(i===ge.current){if(s=i.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Fi):e=[Fi])}i=i.return}e!==null&&Mo(t,e,a,n),t.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wa(e){Ja=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return kc(Ja,e)}function zl(e,t){return Ja===null&&Wa(e),kc(e,t)}function kc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(o(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return a}var kg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Lg=r.unstable_scheduleCallback,zg=r.unstable_NormalPriority,qe={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Co(){return{controller:new kg,data:new Map,refCount:0}}function _i(e){e.refCount--,e.refCount===0&&Lg(zg,function(){e.controller.abort()})}var xi=null,Ao=0,Dn=0,Un=null;function Hg(e,t){if(xi===null){var a=xi=[];Ao=0,Dn=Os(),Un={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ao++,t.then(Lc,Lc),t}function Lc(){if(--Ao===0&&xi!==null){Un!==null&&(Un.status="fulfilled");var e=xi;xi=null,Dn=0,Un=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var zc=N.S;N.S=function(e,t){Ed=$e(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hg(e,t),zc!==null&&zc(e,t)};var Pa=S(null);function Ro(){var e=Pa.current;return e!==null?e:Ce.pooledCache}function Hl(e,t){t===null?H(Pa,Pa.current):H(Pa,t.pool)}function Hc(){var e=Ro();return e===null?null:{parent:qe._currentValue,pool:e}}var kn=Error(o(460)),wo=Error(o(474)),Bl=Error(o(542)),Gl={then:function(){}};function Bc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Wt,Wt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vc(e),e;default:if(typeof t.status=="string")t.then(Wt,Wt);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vc(e),e}throw en=t,kn}}function Ia(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(en=a,kn):a}}var en=null;function qc(){if(en===null)throw Error(o(459));var e=en;return en=null,e}function Vc(e){if(e===kn||e===Bl)throw Error(o(483))}var Ln=null,Mi=0;function ql(e){var t=Mi;return Mi+=1,Ln===null&&(Ln=[]),Gc(Ln,e,t)}function Ci(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vl(e,t){throw t.$$typeof===k?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Yc(e){function t(_,v){if(e){var M=_.deletions;M===null?(_.deletions=[v],_.flags|=16):M.push(v)}}function a(_,v){if(!e)return null;for(;v!==null;)t(_,v),v=v.sibling;return null}function n(_){for(var v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function i(_,v){return _=It(_,v),_.index=0,_.sibling=null,_}function l(_,v,M){return _.index=M,e?(M=_.alternate,M!==null?(M=M.index,M<v?(_.flags|=67108866,v):M):(_.flags|=67108866,v)):(_.flags|=1048576,v)}function s(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function m(_,v,M,j){return v===null||v.tag!==6?(v=yo(M,_.mode,j),v.return=_,v):(v=i(v,M),v.return=_,v)}function g(_,v,M,j){var $=M.type;return $===q?O(_,v,M.props.children,j,M.key):v!==null&&(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ae&&Ia($)===v.type)?(v=i(v,M.props),Ci(v,M),v.return=_,v):(v=Ul(M.type,M.key,M.props,null,_.mode,j),Ci(v,M),v.return=_,v)}function C(_,v,M,j){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=vo(M,_.mode,j),v.return=_,v):(v=i(v,M.children||[]),v.return=_,v)}function O(_,v,M,j,$){return v===null||v.tag!==7?(v=$a(M,_.mode,j,$),v.return=_,v):(v=i(v,M),v.return=_,v)}function D(_,v,M){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=yo(""+v,_.mode,M),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case X:return M=Ul(v.type,v.key,v.props,null,_.mode,M),Ci(M,v),M.return=_,M;case G:return v=vo(v,_.mode,M),v.return=_,v;case Ae:return v=Ia(v),D(_,v,M)}if(Oe(v)||Ke(v))return v=$a(v,_.mode,M,null),v.return=_,v;if(typeof v.then=="function")return D(_,ql(v),M);if(v.$$typeof===F)return D(_,zl(_,v),M);Vl(_,v)}return null}function A(_,v,M,j){var $=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return $!==null?null:m(_,v,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return M.key===$?g(_,v,M,j):null;case G:return M.key===$?C(_,v,M,j):null;case Ae:return M=Ia(M),A(_,v,M,j)}if(Oe(M)||Ke(M))return $!==null?null:O(_,v,M,j,null);if(typeof M.then=="function")return A(_,v,ql(M),j);if(M.$$typeof===F)return A(_,v,zl(_,M),j);Vl(_,M)}return null}function w(_,v,M,j,$){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return _=_.get(M)||null,m(v,_,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case X:return _=_.get(j.key===null?M:j.key)||null,g(v,_,j,$);case G:return _=_.get(j.key===null?M:j.key)||null,C(v,_,j,$);case Ae:return j=Ia(j),w(_,v,M,j,$)}if(Oe(j)||Ke(j))return _=_.get(M)||null,O(v,_,j,$,null);if(typeof j.then=="function")return w(_,v,M,ql(j),$);if(j.$$typeof===F)return w(_,v,M,zl(v,j),$);Vl(v,j)}return null}function Y(_,v,M,j){for(var $=null,ye=null,Q=v,ie=v=0,ue=null;Q!==null&&ie<M.length;ie++){Q.index>ie?(ue=Q,Q=null):ue=Q.sibling;var ve=A(_,Q,M[ie],j);if(ve===null){Q===null&&(Q=ue);break}e&&Q&&ve.alternate===null&&t(_,Q),v=l(ve,v,ie),ye===null?$=ve:ye.sibling=ve,ye=ve,Q=ue}if(ie===M.length)return a(_,Q),de&&ea(_,ie),$;if(Q===null){for(;ie<M.length;ie++)Q=D(_,M[ie],j),Q!==null&&(v=l(Q,v,ie),ye===null?$=Q:ye.sibling=Q,ye=Q);return de&&ea(_,ie),$}for(Q=n(Q);ie<M.length;ie++)ue=w(Q,_,ie,M[ie],j),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?ie:ue.key),v=l(ue,v,ie),ye===null?$=ue:ye.sibling=ue,ye=ue);return e&&Q.forEach(function(Ga){return t(_,Ga)}),de&&ea(_,ie),$}function P(_,v,M,j){if(M==null)throw Error(o(151));for(var $=null,ye=null,Q=v,ie=v=0,ue=null,ve=M.next();Q!==null&&!ve.done;ie++,ve=M.next()){Q.index>ie?(ue=Q,Q=null):ue=Q.sibling;var Ga=A(_,Q,ve.value,j);if(Ga===null){Q===null&&(Q=ue);break}e&&Q&&Ga.alternate===null&&t(_,Q),v=l(Ga,v,ie),ye===null?$=Ga:ye.sibling=Ga,ye=Ga,Q=ue}if(ve.done)return a(_,Q),de&&ea(_,ie),$;if(Q===null){for(;!ve.done;ie++,ve=M.next())ve=D(_,ve.value,j),ve!==null&&(v=l(ve,v,ie),ye===null?$=ve:ye.sibling=ve,ye=ve);return de&&ea(_,ie),$}for(Q=n(Q);!ve.done;ie++,ve=M.next())ve=w(Q,_,ie,ve.value,j),ve!==null&&(e&&ve.alternate!==null&&Q.delete(ve.key===null?ie:ve.key),v=l(ve,v,ie),ye===null?$=ve:ye.sibling=ve,ye=ve);return e&&Q.forEach(function(Jp){return t(_,Jp)}),de&&ea(_,ie),$}function Me(_,v,M,j){if(typeof M=="object"&&M!==null&&M.type===q&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case X:e:{for(var $=M.key;v!==null;){if(v.key===$){if($=M.type,$===q){if(v.tag===7){a(_,v.sibling),j=i(v,M.props.children),j.return=_,_=j;break e}}else if(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ae&&Ia($)===v.type){a(_,v.sibling),j=i(v,M.props),Ci(j,M),j.return=_,_=j;break e}a(_,v);break}else t(_,v);v=v.sibling}M.type===q?(j=$a(M.props.children,_.mode,j,M.key),j.return=_,_=j):(j=Ul(M.type,M.key,M.props,null,_.mode,j),Ci(j,M),j.return=_,_=j)}return s(_);case G:e:{for($=M.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){a(_,v.sibling),j=i(v,M.children||[]),j.return=_,_=j;break e}else{a(_,v);break}else t(_,v);v=v.sibling}j=vo(M,_.mode,j),j.return=_,_=j}return s(_);case Ae:return M=Ia(M),Me(_,v,M,j)}if(Oe(M))return Y(_,v,M,j);if(Ke(M)){if($=Ke(M),typeof $!="function")throw Error(o(150));return M=$.call(M),P(_,v,M,j)}if(typeof M.then=="function")return Me(_,v,ql(M),j);if(M.$$typeof===F)return Me(_,v,zl(_,M),j);Vl(_,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,v!==null&&v.tag===6?(a(_,v.sibling),j=i(v,M),j.return=_,_=j):(a(_,v),j=yo(M,_.mode,j),j.return=_,_=j),s(_)):a(_,v)}return function(_,v,M,j){try{Mi=0;var $=Me(_,v,M,j);return Ln=null,$}catch(Q){if(Q===kn||Q===Bl)throw Q;var ye=St(29,Q,null,_.mode);return ye.lanes=j,ye.return=_,ye}finally{}}}var tn=Yc(!0),Xc=Yc(!1),_a=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function No(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(be&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Dl(e),Ac(e,null,a),t}return jl(e,n,t,a),Dl(e)}function Ai(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ku(e,a)}}function jo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Do=!1;function Ri(){if(Do){var e=Un;if(e!==null)throw e}}function wi(e,t,a,n){Do=!1;var i=e.updateQueue;_a=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var g=m,C=g.next;g.next=null,s===null?l=C:s.next=C,s=g;var O=e.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==s&&(m===null?O.firstBaseUpdate=C:m.next=C,O.lastBaseUpdate=g))}if(l!==null){var D=i.baseState;s=0,O=C=g=null,m=l;do{var A=m.lane&-536870913,w=A!==m.lane;if(w?(se&A)===A:(n&A)===A){A!==0&&A===Dn&&(Do=!0),O!==null&&(O=O.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Y=e,P=m;A=t;var Me=a;switch(P.tag){case 1:if(Y=P.payload,typeof Y=="function"){D=Y.call(Me,D,A);break e}D=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=P.payload,A=typeof Y=="function"?Y.call(Me,D,A):Y,A==null)break e;D=x({},D,A);break e;case 2:_a=!0}}A=m.callback,A!==null&&(e.flags|=64,w&&(e.flags|=8192),w=i.callbacks,w===null?i.callbacks=[A]:w.push(A))}else w={lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(C=O=w,g=D):O=O.next=w,s|=A;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;w=m,m=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);O===null&&(g=D),i.baseState=g,i.firstBaseUpdate=C,i.lastBaseUpdate=O,l===null&&(i.shared.lanes=0),Oa|=s,e.lanes=s,e.memoizedState=D}}function Kc(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Qc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kc(a[e],t)}var zn=S(null),Yl=S(0);function Zc(e,t){e=fa,H(Yl,e),H(zn,t),fa=e|t.baseLanes}function Uo(){H(Yl,fa),H(zn,zn.current)}function ko(){fa=Yl.current,U(zn),U(Yl)}var Et=S(null),Dt=null;function Ca(e){var t=e.alternate;H(Be,Be.current&1),H(Et,e),Dt===null&&(t===null||zn.current!==null||t.memoizedState!==null)&&(Dt=e)}function Lo(e){H(Be,Be.current),H(Et,e),Dt===null&&(Dt=e)}function $c(e){e.tag===22?(H(Be,Be.current),H(Et,e),Dt===null&&(Dt=e)):Aa()}function Aa(){H(Be,Be.current),H(Et,Et.current)}function Tt(e){U(Et),Dt===e&&(Dt=null),U(Be)}var Be=S(0);function Xl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vs(a)||Ys(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=0,ne=null,_e=null,Ve=null,Kl=!1,Hn=!1,an=!1,Ql=0,Oi=0,Bn=null,Gg=0;function Le(){throw Error(o(321))}function zo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!bt(e[a],t[a]))return!1;return!0}function Ho(e,t,a,n,i,l){return na=l,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?jf:Io,an=!1,l=a(n,i),an=!1,Hn&&(l=Jc(t,a,n,i)),Fc(e),l}function Fc(e){N.H=Di;var t=_e!==null&&_e.next!==null;if(na=0,Ve=_e=ne=null,Kl=!1,Oi=0,Bn=null,t)throw Error(o(300));e===null||Ye||(e=e.dependencies,e!==null&&Ll(e)&&(Ye=!0))}function Jc(e,t,a,n){ne=e;var i=0;do{if(Hn&&(Bn=null),Oi=0,Hn=!1,25<=i)throw Error(o(301));if(i+=1,Ve=_e=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}N.H=Df,l=t(a,n)}while(Hn);return l}function qg(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Ni(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(ne.flags|=1024),t}function Bo(){var e=Ql!==0;return Ql=0,e}function Go(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function qo(e){if(Kl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kl=!1}na=0,Ve=_e=ne=null,Hn=!1,Oi=Ql=0,Bn=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ne.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ge(){if(_e===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Ve===null?ne.memoizedState:Ve.next;if(t!==null)Ve=t,_e=e;else{if(e===null)throw ne.alternate===null?Error(o(467)):Error(o(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ve===null?ne.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ni(e){var t=Oi;return Oi+=1,Bn===null&&(Bn=[]),e=Gc(Bn,e,t),t=ne,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?jf:Io),e}function $l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ni(e);if(e.$$typeof===F)return Ie(e)}throw Error(o(438,String(e)))}function Vo(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ne.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Zl(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=yt;return t.index++,a}function ia(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=Ge();return Yo(t,_e,e)}function Yo(e,t,a){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var m=s=null,g=null,C=t,O=!1;do{var D=C.lane&-536870913;if(D!==C.lane?(se&D)===D:(na&D)===D){var A=C.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),D===Dn&&(O=!0);else if((na&A)===A){C=C.next,A===Dn&&(O=!0);continue}else D={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},g===null?(m=g=D,s=l):g=g.next=D,ne.lanes|=A,Oa|=A;D=C.action,an&&a(l,D),l=C.hasEagerState?C.eagerState:a(l,D)}else A={lane:D,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},g===null?(m=g=A,s=l):g=g.next=A,ne.lanes|=D,Oa|=D;C=C.next}while(C!==null&&C!==t);if(g===null?s=l:g.next=m,!bt(l,e.memoizedState)&&(Ye=!0,O&&(a=Un,a!==null)))throw a;e.memoizedState=l,e.baseState=s,e.baseQueue=g,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Xo(e){var t=Ge(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);bt(l,t.memoizedState)||(Ye=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function Wc(e,t,a){var n=ne,i=Ge(),l=de;if(l){if(a===void 0)throw Error(o(407));a=a()}else a=t();var s=!bt((_e||i).memoizedState,a);if(s&&(i.memoizedState=a,Ye=!0),i=i.queue,Zo(ef.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Gn(9,{destroy:void 0},Ic.bind(null,n,i,a,t),null),Ce===null)throw Error(o(349));l||(na&127)!==0||Pc(n,t,a)}return a}function Pc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=Zl(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ic(e,t,a,n){t.value=a,t.getSnapshot=n,tf(t)&&af(e)}function ef(e,t,a){return a(function(){tf(t)&&af(e)})}function tf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!bt(e,a)}catch{return!0}}function af(e){var t=Za(e,2);t!==null&&pt(t,e,2)}function Ko(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),an){ut(!0);try{a()}finally{ut(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},t}function nf(e,t,a,n){return e.baseState=a,Yo(e,_e,typeof n=="function"?n:ia)}function Vg(e,t,a,n,i){if(Pl(e))throw Error(o(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};N.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,lf(t,l)):(l.next=a.next,t.pending=a.next=l)}}function lf(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=N.T,s={};N.T=s;try{var m=a(i,n),g=N.S;g!==null&&g(s,m),rf(e,t,m)}catch(C){Qo(e,t,C)}finally{l!==null&&s.types!==null&&(l.types=s.types),N.T=l}}else try{l=a(i,n),rf(e,t,l)}catch(C){Qo(e,t,C)}}function rf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){of(e,t,n)},function(n){return Qo(e,t,n)}):of(e,t,a)}function of(e,t,a){t.status="fulfilled",t.value=a,sf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,lf(e,a)))}function Qo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,sf(t),t=t.next;while(t!==n)}e.action=null}function sf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uf(e,t){return t}function cf(e,t){if(de){var a=Ce.formState;if(a!==null){e:{var n=ne;if(de){if(Re){t:{for(var i=Re,l=jt;i.nodeType!==8;){if(!l){i=null;break t}if(i=Ut(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Re=Ut(i.nextSibling),n=i.data==="F!";break e}}Ea(n)}n=!1}n&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uf,lastRenderedState:t},a.queue=n,a=wf.bind(null,ne,n),n.dispatch=a,n=Ko(!1),l=Po.bind(null,ne,!1,n.queue),n=lt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Vg.bind(null,ne,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function ff(e){var t=Ge();return df(t,_e,e)}function df(e,t,a){if(t=Yo(e,t,uf)[0],e=Fl(ia)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Ni(t)}catch(s){throw s===kn?Bl:s}else n=t;t=Ge();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,Gn(9,{destroy:void 0},Yg.bind(null,i,a),null)),[n,l,e]}function Yg(e,t){e.action=t}function mf(e){var t=Ge(),a=_e;if(a!==null)return df(t,a,e);Ge(),t=t.memoizedState,a=Ge();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Gn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ne.updateQueue,t===null&&(t=Zl(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function hf(){return Ge().memoizedState}function Jl(e,t,a,n){var i=lt();ne.flags|=e,i.memoizedState=Gn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Wl(e,t,a,n){var i=Ge();n=n===void 0?null:n;var l=i.memoizedState.inst;_e!==null&&n!==null&&zo(n,_e.memoizedState.deps)?i.memoizedState=Gn(t,l,a,n):(ne.flags|=e,i.memoizedState=Gn(1|t,l,a,n))}function gf(e,t){Jl(8390656,8,e,t)}function Zo(e,t){Wl(2048,8,e,t)}function Xg(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=Zl(),ne.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function pf(e){var t=Ge().memoizedState;return Xg({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function yf(e,t){return Wl(4,2,e,t)}function vf(e,t){return Wl(4,4,e,t)}function bf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sf(e,t,a){a=a!=null?a.concat([e]):null,Wl(4,4,bf.bind(null,t,e),a)}function $o(){}function Ef(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&zo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Tf(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&zo(t,n[1]))return n[0];if(n=e(),an){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[n,t],n}function Fo(e,t,a){return a===void 0||(na&1073741824)!==0&&(se&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=_d(),ne.lanes|=e,Oa|=e,a)}function _f(e,t,a,n){return bt(a,t)?a:zn.current!==null?(e=Fo(e,a,n),bt(e,t)||(Ye=!0),e):(na&42)===0||(na&1073741824)!==0&&(se&261930)===0?(Ye=!0,e.memoizedState=a):(e=_d(),ne.lanes|=e,Oa|=e,t)}function xf(e,t,a,n,i){var l=z.p;z.p=l!==0&&8>l?l:8;var s=N.T,m={};N.T=m,Po(e,!1,t,a);try{var g=i(),C=N.S;if(C!==null&&C(m,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var O=Bg(g,n);ji(e,t,O,Mt(e))}else ji(e,t,n,Mt(e))}catch(D){ji(e,t,{then:function(){},status:"rejected",reason:D},Mt())}finally{z.p=l,s!==null&&m.types!==null&&(s.types=m.types),N.T=s}}function Kg(){}function Jo(e,t,a,n){if(e.tag!==5)throw Error(o(476));var i=Mf(e).queue;xf(e,i,t,Z,a===null?Kg:function(){return Cf(e),a(n)})}function Mf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cf(e){var t=Mf(e);t.next===null&&(t=e.alternate.memoizedState),ji(e,t.next.queue,{},Mt())}function Wo(){return Ie(Fi)}function Af(){return Ge().memoizedState}function Rf(){return Ge().memoizedState}function Qg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Mt();e=xa(a);var n=Ma(t,e,a);n!==null&&(pt(n,t,a),Ai(n,t,a)),t={cache:Co()},e.payload=t;return}t=t.return}}function Zg(e,t,a){var n=Mt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(e)?Of(t,a):(a=go(e,t,a,n),a!==null&&(pt(a,e,n),Nf(a,t,n)))}function wf(e,t,a){var n=Mt();ji(e,t,a,n)}function ji(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(e))Of(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,m=l(s,a);if(i.hasEagerState=!0,i.eagerState=m,bt(m,s))return jl(e,t,i,0),Ce===null&&Nl(),!1}catch{}finally{}if(a=go(e,t,i,n),a!==null)return pt(a,e,n),Nf(a,t,n),!0}return!1}function Po(e,t,a,n){if(n={lane:2,revertLane:Os(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Pl(e)){if(t)throw Error(o(479))}else t=go(e,a,n,2),t!==null&&pt(t,e,2)}function Pl(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Of(e,t){Hn=Kl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Nf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ku(e,a)}}var Di={readContext:Ie,use:$l,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Di.useEffectEvent=Le;var jf={readContext:Ie,use:$l,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:gf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Jl(4194308,4,bf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Jl(4194308,4,e,t)},useInsertionEffect:function(e,t){Jl(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var n=e();if(an){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=lt();if(a!==void 0){var i=a(t);if(an){ut(!0);try{a(t)}finally{ut(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Zg.bind(null,ne,e),[n.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,a=wf.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$o,useDeferredValue:function(e,t){var a=lt();return Fo(a,e,t)},useTransition:function(){var e=Ko(!1);return e=xf.bind(null,ne,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ne,i=lt();if(de){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Ce===null)throw Error(o(349));(se&127)!==0||Pc(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,gf(ef.bind(null,n,l,e),[e]),n.flags|=2048,Gn(9,{destroy:void 0},Ic.bind(null,n,l,a,t),null),a},useId:function(){var e=lt(),t=Ce.identifierPrefix;if(de){var a=Yt,n=Vt;a=(n&~(1<<32-it(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ql++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Gg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Wo,useFormState:cf,useActionState:cf,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Po.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vo,useCacheRefresh:function(){return lt().memoizedState=Qg.bind(null,ne)},useEffectEvent:function(e){var t=lt(),a={impl:e};return t.memoizedState=a,function(){if((be&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Io={readContext:Ie,use:$l,useCallback:Ef,useContext:Ie,useEffect:Zo,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:vf,useMemo:Tf,useReducer:Fl,useRef:hf,useState:function(){return Fl(ia)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ge();return _f(a,_e.memoizedState,e,t)},useTransition:function(){var e=Fl(ia)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ni(e),t]},useSyncExternalStore:Wc,useId:Af,useHostTransitionStatus:Wo,useFormState:ff,useActionState:ff,useOptimistic:function(e,t){var a=Ge();return nf(a,_e,e,t)},useMemoCache:Vo,useCacheRefresh:Rf};Io.useEffectEvent=pf;var Df={readContext:Ie,use:$l,useCallback:Ef,useContext:Ie,useEffect:Zo,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:vf,useMemo:Tf,useReducer:Xo,useRef:hf,useState:function(){return Xo(ia)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ge();return _e===null?Fo(a,e,t):_f(a,_e.memoizedState,e,t)},useTransition:function(){var e=Xo(ia)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ni(e),t]},useSyncExternalStore:Wc,useId:Af,useHostTransitionStatus:Wo,useFormState:mf,useActionState:mf,useOptimistic:function(e,t){var a=Ge();return _e!==null?nf(a,_e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vo,useCacheRefresh:Rf};Df.useEffectEvent=pf;function es(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ts={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Mt(),i=xa(n);i.payload=t,a!=null&&(i.callback=a),t=Ma(e,i,n),t!==null&&(pt(t,e,n),Ai(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Mt(),i=xa(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ma(e,i,n),t!==null&&(pt(t,e,n),Ai(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Mt(),n=xa(a);n.tag=2,t!=null&&(n.callback=t),t=Ma(e,n,a),t!==null&&(pt(t,e,a),Ai(t,e,a))}};function Uf(e,t,a,n,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,s):t.prototype&&t.prototype.isPureReactComponent?!bi(a,n)||!bi(i,l):!0}function kf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ts.enqueueReplaceState(t,t.state,null)}function nn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Lf(e){Ol(e)}function zf(e){console.error(e)}function Hf(e){Ol(e)}function Il(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Bf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function as(e,t,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,t)},a}function Gf(e){return e=xa(e),e.tag=3,e}function qf(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){Bf(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Bf(t,a,n),typeof i!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function $g(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&jn(t,a,i,!0),a=Et.current,a!==null){switch(a.tag){case 31:case 13:return Dt===null?fr():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Gl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),As(e,n,i)),!1;case 22:return a.flags|=65536,n===Gl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),As(e,n,i)),!1}throw Error(o(435,a.tag))}return As(e,n,i),fr(),!1}if(de)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Eo&&(e=Error(o(422),{cause:n}),Ti(wt(e,a)))):(n!==Eo&&(t=Error(o(423),{cause:n}),Ti(wt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=wt(n,a),i=as(e.stateNode,n,i),jo(e,i),ze!==4&&(ze=2)),!1;var l=Error(o(520),{cause:n});if(l=wt(l,a),qi===null?qi=[l]:qi.push(l),ze!==4&&(ze=2),t===null)return!0;n=wt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=as(a.stateNode,n,e),jo(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Na===null||!Na.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Gf(i),qf(i,e,a,n),jo(a,i),!1}a=a.return}while(a!==null);return!1}var ns=Error(o(461)),Ye=!1;function et(e,t,a,n){t.child=e===null?Xc(t,null,a,n):tn(t,e.child,a,n)}function Vf(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var s={};for(var m in n)m!=="ref"&&(s[m]=n[m])}else s=n;return Wa(t),n=Ho(e,t,a,s,l,i),m=Bo(),e!==null&&!Ye?(Go(e,t,i),la(e,t,i)):(de&&m&&bo(t),t.flags|=1,et(e,t,n,i),t.child)}function Yf(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!po(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Xf(e,t,l,n,i)):(e=Ul(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!fs(e,i)){var s=l.memoizedProps;if(a=a.compare,a=a!==null?a:bi,a(s,n)&&e.ref===t.ref)return la(e,t,i)}return t.flags|=1,e=It(l,n),e.ref=t.ref,e.return=t,t.child=e}function Xf(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(bi(l,n)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=n=l,fs(e,i))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,la(e,t,i)}return is(e,t,a,n,i)}function Kf(e,t,a,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,t.child=null;return Qf(e,t,l,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hl(t,l!==null?l.cachePool:null),l!==null?Zc(t,l):Uo(),$c(t);else return n=t.lanes=536870912,Qf(e,t,l!==null?l.baseLanes|a:a,a,n)}else l!==null?(Hl(t,l.cachePool),Zc(t,l),Aa(),t.memoizedState=null):(e!==null&&Hl(t,null),Uo(),Aa());return et(e,t,i,a),t.child}function Ui(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Qf(e,t,a,n,i){var l=Ro();return l=l===null?null:{parent:qe._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Hl(t,null),Uo(),$c(t),e!==null&&jn(e,t,n,!0),t.childLanes=i,null}function er(e,t){return t=ar({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Zf(e,t,a){return tn(t,e.child,null,a),e=er(t,t.pendingProps),e.flags|=2,Tt(t),t.memoizedState=null,e}function Fg(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(de){if(n.mode==="hidden")return e=er(t,n),t.lanes=536870912,Ui(null,e);if(Lo(t),(e=Re)?(e=lm(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Vt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},a=wc(e),a.return=t,t.child=a,Pe=t,Re=null)):e=null,e===null)throw Ea(t);return t.lanes=536870912,null}return er(t,n)}var l=e.memoizedState;if(l!==null){var s=l.dehydrated;if(Lo(t),i)if(t.flags&256)t.flags&=-257,t=Zf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ye||jn(e,t,a,!1),i=(a&e.childLanes)!==0,Ye||i){if(n=Ce,n!==null&&(s=Lu(n,a),s!==0&&s!==l.retryLane))throw l.retryLane=s,Za(e,s),pt(n,e,s),ns;fr(),t=Zf(e,t,a)}else e=l.treeContext,Re=Ut(s.nextSibling),Pe=t,de=!0,Sa=null,jt=!1,e!==null&&jc(t,e),t=er(t,n),t.flags|=4096;return t}return e=It(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function tr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function is(e,t,a,n,i){return Wa(t),a=Ho(e,t,a,n,void 0,i),n=Bo(),e!==null&&!Ye?(Go(e,t,i),la(e,t,i)):(de&&n&&bo(t),t.flags|=1,et(e,t,a,i),t.child)}function $f(e,t,a,n,i,l){return Wa(t),t.updateQueue=null,a=Jc(t,n,a,i),Fc(e),n=Bo(),e!==null&&!Ye?(Go(e,t,l),la(e,t,l)):(de&&n&&bo(t),t.flags|=1,et(e,t,a,l),t.child)}function Ff(e,t,a,n,i){if(Wa(t),t.stateNode===null){var l=Rn,s=a.contextType;typeof s=="object"&&s!==null&&(l=Ie(s)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ts,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},Oo(t),s=a.contextType,l.context=typeof s=="object"&&s!==null?Ie(s):Rn,l.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(es(t,a,s,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&ts.enqueueReplaceState(l,l.state,null),wi(t,n,l,i),Ri(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var m=t.memoizedProps,g=nn(a,m);l.props=g;var C=l.context,O=a.contextType;s=Rn,typeof O=="object"&&O!==null&&(s=Ie(O));var D=a.getDerivedStateFromProps;O=typeof D=="function"||typeof l.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,O||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(m||C!==s)&&kf(t,l,n,s),_a=!1;var A=t.memoizedState;l.state=A,wi(t,n,l,i),Ri(),C=t.memoizedState,m||A!==C||_a?(typeof D=="function"&&(es(t,a,D,n),C=t.memoizedState),(g=_a||Uf(t,a,g,n,A,C,s))?(O||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),l.props=n,l.state=C,l.context=s,n=g):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,No(e,t),s=t.memoizedProps,O=nn(a,s),l.props=O,D=t.pendingProps,A=l.context,C=a.contextType,g=Rn,typeof C=="object"&&C!==null&&(g=Ie(C)),m=a.getDerivedStateFromProps,(C=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==D||A!==g)&&kf(t,l,n,g),_a=!1,A=t.memoizedState,l.state=A,wi(t,n,l,i),Ri();var w=t.memoizedState;s!==D||A!==w||_a||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof m=="function"&&(es(t,a,m,n),w=t.memoizedState),(O=_a||Uf(t,a,O,n,A,w,g)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?(C||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,w,g),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,w,g)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),l.props=n,l.state=w,l.context=g,n=O):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,tr(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,a,i)):et(e,t,a,i),t.memoizedState=l.state,e=t.child):e=la(e,t,i),e}function Jf(e,t,a,n){return Fa(),t.flags|=256,et(e,t,a,n),t.child}var ls={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rs(e){return{baseLanes:e,cachePool:Hc()}}function os(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function Wf(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(i?Ca(t):Aa(),(e=Re)?(e=lm(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Vt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},a=wc(e),a.return=t,t.child=a,Pe=t,Re=null)):e=null,e===null)throw Ea(t);return Ys(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,i?(Aa(),i=t.mode,m=ar({mode:"hidden",children:m},i),n=$a(n,i,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=rs(a),n.childLanes=os(e,s,a),t.memoizedState=ls,Ui(null,n)):(Ca(t),ss(t,m))}var g=e.memoizedState;if(g!==null&&(m=g.dehydrated,m!==null)){if(l)t.flags&256?(Ca(t),t.flags&=-257,t=us(e,t,a)):t.memoizedState!==null?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),m=n.fallback,i=t.mode,n=ar({mode:"visible",children:n.children},i),m=$a(m,i,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,tn(t,e.child,null,a),n=t.child,n.memoizedState=rs(a),n.childLanes=os(e,s,a),t.memoizedState=ls,t=Ui(null,n));else if(Ca(t),Ys(m)){if(s=m.nextSibling&&m.nextSibling.dataset,s)var C=s.dgst;s=C,n=Error(o(419)),n.stack="",n.digest=s,Ti({value:n,source:null,stack:null}),t=us(e,t,a)}else if(Ye||jn(e,t,a,!1),s=(a&e.childLanes)!==0,Ye||s){if(s=Ce,s!==null&&(n=Lu(s,a),n!==0&&n!==g.retryLane))throw g.retryLane=n,Za(e,n),pt(s,e,n),ns;Vs(m)||fr(),t=us(e,t,a)}else Vs(m)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Re=Ut(m.nextSibling),Pe=t,de=!0,Sa=null,jt=!1,e!==null&&jc(t,e),t=ss(t,n.children),t.flags|=4096);return t}return i?(Aa(),m=n.fallback,i=t.mode,g=e.child,C=g.sibling,n=It(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,C!==null?m=It(C,m):(m=$a(m,i,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,Ui(null,n),n=t.child,m=e.child.memoizedState,m===null?m=rs(a):(i=m.cachePool,i!==null?(g=qe._currentValue,i=i.parent!==g?{parent:g,pool:g}:i):i=Hc(),m={baseLanes:m.baseLanes|a,cachePool:i}),n.memoizedState=m,n.childLanes=os(e,s,a),t.memoizedState=ls,Ui(e.child,n)):(Ca(t),a=e.child,e=a.sibling,a=It(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function ss(e,t){return t=ar({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ar(e,t){return e=St(22,e,null,t),e.lanes=0,e}function us(e,t,a){return tn(t,e.child,null,a),e=ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),xo(e.return,t,a)}function cs(e,t,a,n,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i,s.treeForkCount=l)}function If(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var s=Be.current,m=(s&2)!==0;if(m?(s=s&1|2,t.flags|=128):s&=1,H(Be,s),et(e,t,n,a),n=de?Ei:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pf(e,a,t);else if(e.tag===19)Pf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),cs(t,!1,i,a,l,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xl(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}cs(t,!0,a,null,l,n);break;case"together":cs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function la(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Oa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=It(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=It(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function fs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function Jg(e,t,a){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),Ta(t,qe,e.memoizedState.cache),Fa();break;case 27:case 5:pa(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:Ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lo(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ca(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wf(e,t,a):(Ca(t),e=la(e,t,a),e!==null?e.sibling:null);Ca(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(jn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return If(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Be,Be.current),n)break;return null;case 22:return t.lanes=0,Kf(e,t,a,t.pendingProps);case 24:Ta(t,qe,e.memoizedState.cache)}return la(e,t,a)}function ed(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!fs(e,a)&&(t.flags&128)===0)return Ye=!1,Jg(e,t,a);Ye=(e.flags&131072)!==0}else Ye=!1,de&&(t.flags&1048576)!==0&&Nc(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ia(t.elementType),t.type=e,typeof e=="function")po(e)?(n=nn(e,n),t.tag=1,t=Ff(null,t,e,n,a)):(t.tag=0,t=is(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===ce){t.tag=11,t=Vf(null,t,e,n,a);break e}else if(i===W){t.tag=14,t=Yf(null,t,e,n,a);break e}}throw t=ot(e)||e,Error(o(306,t,""))}}return t;case 0:return is(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=nn(n,t.pendingProps),Ff(e,t,n,i,a);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(o(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,No(e,t),wi(t,n,null,a);var s=t.memoizedState;if(n=s.cache,Ta(t,qe,n),n!==l.cache&&Mo(t,[qe],a,!0),Ri(),n=s.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Jf(e,t,n,a);break e}else if(n!==i){i=wt(Error(o(424)),t),Ti(i),t=Jf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Ut(e.firstChild),Pe=t,de=!0,Sa=null,jt=!0,a=Xc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fa(),n===i){t=la(e,t,a);break e}et(e,t,n,a)}t=t.child}return t;case 26:return tr(e,t),e===null?(a=fm(t.type,null,t.pendingProps,null))?t.memoizedState=a:de||(a=t.type,e=t.pendingProps,n=vr(J.current).createElement(a),n[We]=t,n[ct]=e,tt(n,a,e),Fe(n),t.stateNode=n):t.memoizedState=fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pa(t),e===null&&de&&(n=t.stateNode=sm(t.type,t.pendingProps,J.current),Pe=t,jt=!0,i=Re,ka(t.type)?(Xs=i,Re=Ut(n.firstChild)):Re=i),et(e,t,t.pendingProps.children,a),tr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((i=n=Re)&&(n=Cp(n,t.type,t.pendingProps,jt),n!==null?(t.stateNode=n,Pe=t,Re=Ut(n.firstChild),jt=!1,i=!0):i=!1),i||Ea(t)),pa(t),i=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,n=l.children,Bs(i,l)?n=null:s!==null&&Bs(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Ho(e,t,qg,null,null,a),Fi._currentValue=i),tr(e,t),et(e,t,n,a),t.child;case 6:return e===null&&de&&((e=a=Re)&&(a=Ap(a,t.pendingProps,jt),a!==null?(t.stateNode=a,Pe=t,Re=null,e=!0):e=!1),e||Ea(t)),null;case 13:return Wf(e,t,a);case 4:return De(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=tn(t,null,n,a):et(e,t,n,a),t.child;case 11:return Vf(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ta(t,t.type,n.value),et(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Wa(t),i=Ie(i),n=n(i),t.flags|=1,et(e,t,n,a),t.child;case 14:return Yf(e,t,t.type,t.pendingProps,a);case 15:return Xf(e,t,t.type,t.pendingProps,a);case 19:return If(e,t,a);case 31:return Fg(e,t,a);case 22:return Kf(e,t,a,t.pendingProps);case 24:return Wa(t),n=Ie(qe),e===null?(i=Ro(),i===null&&(i=Ce,l=Co(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},Oo(t),Ta(t,qe,i)):((e.lanes&a)!==0&&(No(e,t),wi(t,null,null,a),Ri()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ta(t,qe,n)):(n=l.cache,Ta(t,qe,n),n!==i.cache&&Mo(t,[qe],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ra(e){e.flags|=4}function ds(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Ad())e.flags|=8192;else throw en=Gl,wo}else e.flags&=-16777217}function td(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pm(t))if(Ad())e.flags|=8192;else throw en=Gl,wo}function nr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Du():536870912,e.lanes|=t,Xn|=t)}function ki(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Wg(e,t,a){var n=t.pendingProps;switch(So(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),aa(qe),Ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Nn(t)?ra(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,To())),we(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(ra(t),l!==null?(we(t),td(t,l)):(we(t),ds(t,i,null,n,a))):l?l!==e.memoizedState?(ra(t),we(t),td(t,l)):(we(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ra(t),we(t),ds(t,i,e,n,a)),null;case 27:if(nt(t),a=J.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return we(t),null}e=V.current,Nn(t)?Dc(t):(e=sm(i,n,a),t.stateNode=e,ra(t))}return we(t),null;case 5:if(nt(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return we(t),null}if(l=V.current,Nn(t))Dc(t);else{var s=vr(J.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?s.createElement(i,{is:n.is}):s.createElement(i)}}l[We]=t,l[ct]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=l;e:switch(tt(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ra(t)}}return we(t),ds(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=J.current,Nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Pe,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Wd(e.nodeValue,a)),e||Ea(t,!0)}else e=vr(e).createTextNode(n),e[We]=t,t.stateNode=e}return we(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Nn(t),a!==null){if(e===null){if(!n)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[We]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),e=!1}else a=To(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Tt(t),t):(Tt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return we(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[We]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else i=To(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Tt(t),t):(Tt(t),null)}return Tt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),nr(t,t.updateQueue),we(t),null);case 4:return Ne(),e===null&&Us(t.stateNode.containerInfo),we(t),null;case 10:return aa(t.type),we(t),null;case 19:if(U(Be),n=t.memoizedState,n===null)return we(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)ki(n,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Xl(e),l!==null){for(t.flags|=128,ki(n,!1),e=l.updateQueue,t.updateQueue=e,nr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Rc(a,e),a=a.sibling;return H(Be,Be.current&1|2),de&&ea(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&$e()>sr&&(t.flags|=128,i=!0,ki(n,!1),t.lanes=4194304)}else{if(!i)if(e=Xl(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,nr(t,e),ki(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!de)return we(t),null}else 2*$e()-n.renderingStartTime>sr&&a!==536870912&&(t.flags|=128,i=!0,ki(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=$e(),e.sibling=null,a=Be.current,H(Be,i?a&1|2:a&1),de&&ea(t,n.treeForkCount),e):(we(t),null);case 22:case 23:return Tt(t),ko(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),a=t.updateQueue,a!==null&&nr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&U(Pa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),aa(qe),we(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Pg(e,t){switch(So(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(qe),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return nt(t),null;case 31:if(t.memoizedState!==null){if(Tt(t),t.alternate===null)throw Error(o(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Tt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Be),null;case 4:return Ne(),null;case 10:return aa(t.type),null;case 22:case 23:return Tt(t),ko(),e!==null&&U(Pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(qe),null;case 25:return null;default:return null}}function ad(e,t){switch(So(t),t.tag){case 3:aa(qe),Ne();break;case 26:case 27:case 5:nt(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Tt(t);break;case 13:Tt(t);break;case 19:U(Be);break;case 10:aa(t.type);break;case 22:case 23:Tt(t),ko(),e!==null&&U(Pa);break;case 24:aa(qe)}}function Li(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,s=a.inst;n=l(),s.destroy=n}a=a.next}while(a!==i)}}catch(m){Te(t,t.return,m)}}function Ra(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var s=n.inst,m=s.destroy;if(m!==void 0){s.destroy=void 0,i=t;var g=a,C=m;try{C()}catch(O){Te(i,g,O)}}}n=n.next}while(n!==l)}}catch(O){Te(t,t.return,O)}}function nd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Qc(t,a)}catch(n){Te(e,e.return,n)}}}function id(e,t,a){a.props=nn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Te(e,t,n)}}function zi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Te(e,t,i)}}function Xt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Te(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Te(e,t,i)}else a.current=null}function ld(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Te(e,e.return,i)}}function ms(e,t,a){try{var n=e.stateNode;Sp(n,e.type,a,t),n[ct]=t}catch(i){Te(e,e.return,i)}}function rd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Wt));else if(n!==4&&(n===27&&ka(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(gs(e,t,a),e=e.sibling;e!==null;)gs(e,t,a),e=e.sibling}function ir(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ir(e,t,a),e=e.sibling;e!==null;)ir(e,t,a),e=e.sibling}function od(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,n,a),t[We]=e,t[ct]=a}catch(l){Te(e,e.return,l)}}var oa=!1,Xe=!1,ps=!1,sd=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Ig(e,t){if(e=e.containerInfo,zs=Mr,e=bc(e),so(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var s=0,m=-1,g=-1,C=0,O=0,D=e,A=null;t:for(;;){for(var w;D!==a||i!==0&&D.nodeType!==3||(m=s+i),D!==l||n!==0&&D.nodeType!==3||(g=s+n),D.nodeType===3&&(s+=D.nodeValue.length),(w=D.firstChild)!==null;)A=D,D=w;for(;;){if(D===e)break t;if(A===a&&++C===i&&(m=s),A===l&&++O===n&&(g=s),(w=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=w}a=m===-1||g===-1?null:{start:m,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hs={focusedElem:e,selectionRange:a},Mr=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var Y=nn(a.type,i);e=n.getSnapshotBeforeUpdate(Y,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(P){Te(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)qs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function ud(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),n&4&&Li(5,a);break;case 1:if(ua(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){Te(a,a.return,s)}else{var i=nn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Te(a,a.return,s)}}n&64&&nd(a),n&512&&zi(a,a.return);break;case 3:if(ua(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Qc(e,t)}catch(s){Te(a,a.return,s)}}break;case 27:t===null&&n&4&&od(a);case 26:case 5:ua(e,a),t===null&&n&4&&ld(a),n&512&&zi(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),n&4&&dd(e,a);break;case 13:ua(e,a),n&4&&md(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sp.bind(null,a),Rp(e,a))));break;case 22:if(n=a.memoizedState!==null||oa,!n){t=t!==null&&t.memoizedState!==null||Xe,i=oa;var l=Xe;oa=n,(Xe=t)&&!l?ca(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),oa=i,Xe=l}break;case 30:break;default:ua(e,a)}}function cd(e){var t=e.alternate;t!==null&&(e.alternate=null,cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Kr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,dt=!1;function sa(e,t,a){for(a=a.child;a!==null;)fd(e,t,a),a=a.sibling}function fd(e,t,a){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:Xe||Xt(a,t),sa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Xt(a,t);var n=je,i=dt;ka(a.type)&&(je=a.stateNode,dt=!1),sa(e,t,a),Qi(a.stateNode),je=n,dt=i;break;case 5:Xe||Xt(a,t);case 6:if(n=je,i=dt,je=null,sa(e,t,a),je=n,dt=i,je!==null)if(dt)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(l){Te(a,t,l)}else try{je.removeChild(a.stateNode)}catch(l){Te(a,t,l)}break;case 18:je!==null&&(dt?(e=je,nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Pn(e)):nm(je,a.stateNode));break;case 4:n=je,i=dt,je=a.stateNode.containerInfo,dt=!0,sa(e,t,a),je=n,dt=i;break;case 0:case 11:case 14:case 15:Ra(2,a,t),Xe||Ra(4,a,t),sa(e,t,a);break;case 1:Xe||(Xt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&id(a,t,n)),sa(e,t,a);break;case 21:sa(e,t,a);break;case 22:Xe=(n=Xe)||a.memoizedState!==null,sa(e,t,a),Xe=n;break;default:sa(e,t,a)}}function dd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pn(e)}catch(a){Te(t,t.return,a)}}}function md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pn(e)}catch(a){Te(t,t.return,a)}}function ep(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sd),t;default:throw Error(o(435,e.tag))}}function lr(e,t){var a=ep(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=up.bind(null,e,n);n.then(i,i)}})}function mt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,s=t,m=s;e:for(;m!==null;){switch(m.tag){case 27:if(ka(m.type)){je=m.stateNode,dt=!1;break e}break;case 5:je=m.stateNode,dt=!1;break e;case 3:case 4:je=m.stateNode.containerInfo,dt=!0;break e}m=m.return}if(je===null)throw Error(o(160));fd(l,s,i),je=null,dt=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hd(t,e),t=t.sibling}var Bt=null;function hd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),ht(e),n&4&&(Ra(3,e,e.return),Li(3,e),Ra(5,e,e.return));break;case 1:mt(t,e),ht(e),n&512&&(Xe||a===null||Xt(a,a.return)),n&64&&oa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Bt;if(mt(t,e),ht(e),n&512&&(Xe||a===null||Xt(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[ci]||l[We]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),tt(l,n,a),l[We]=e,Fe(l),n=l;break e;case"link":var s=hm("link","href",i).get(n+(a.href||""));if(s){for(var m=0;m<s.length;m++)if(l=s[m],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(m,1);break t}}l=i.createElement(n),tt(l,n,a),i.head.appendChild(l);break;case"meta":if(s=hm("meta","content",i).get(n+(a.content||""))){for(m=0;m<s.length;m++)if(l=s[m],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(m,1);break t}}l=i.createElement(n),tt(l,n,a),i.head.appendChild(l);break;default:throw Error(o(468,n))}l[We]=e,Fe(l),n=l}e.stateNode=n}else gm(i,e.type,e.stateNode);else e.stateNode=mm(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?gm(i,e.type,e.stateNode):mm(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&ms(e,e.memoizedProps,a.memoizedProps)}break;case 27:mt(t,e),ht(e),n&512&&(Xe||a===null||Xt(a,a.return)),a!==null&&n&4&&ms(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mt(t,e),ht(e),n&512&&(Xe||a===null||Xt(a,a.return)),e.flags&32){i=e.stateNode;try{En(i,"")}catch(Y){Te(e,e.return,Y)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,ms(e,i,a!==null?a.memoizedProps:i)),n&1024&&(ps=!0);break;case 6:if(mt(t,e),ht(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Y){Te(e,e.return,Y)}}break;case 3:if(Er=null,i=Bt,Bt=br(t.containerInfo),mt(t,e),Bt=i,ht(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(t.containerInfo)}catch(Y){Te(e,e.return,Y)}ps&&(ps=!1,gd(e));break;case 4:n=Bt,Bt=br(e.stateNode.containerInfo),mt(t,e),ht(e),Bt=n;break;case 12:mt(t,e),ht(e);break;case 31:mt(t,e),ht(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,lr(e,n)));break;case 13:mt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(or=$e()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,lr(e,n)));break;case 22:i=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,C=oa,O=Xe;if(oa=C||i,Xe=O||g,mt(t,e),Xe=O,oa=C,ht(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||g||oa||Xe||ln(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(l=g.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{m=g.stateNode;var D=g.memoizedProps.style,A=D!=null&&D.hasOwnProperty("display")?D.display:null;m.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(Y){Te(g,g.return,Y)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(Y){Te(g,g.return,Y)}}}else if(t.tag===18){if(a===null){g=t;try{var w=g.stateNode;i?im(w,!0):im(g.stateNode,!1)}catch(Y){Te(g,g.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,lr(e,a))));break;case 19:mt(t,e),ht(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,lr(e,n)));break;case 30:break;case 21:break;default:mt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(rd(n)){a=n;break}n=n.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var i=a.stateNode,l=hs(e);ir(e,l,i);break;case 5:var s=a.stateNode;a.flags&32&&(En(s,""),a.flags&=-33);var m=hs(e);ir(e,m,s);break;case 3:case 4:var g=a.stateNode.containerInfo,C=hs(e);gs(e,C,g);break;default:throw Error(o(161))}}catch(O){Te(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ud(e,t.alternate,t),t=t.sibling}function ln(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ra(4,t,t.return),ln(t);break;case 1:Xt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&id(t,t.return,a),ln(t);break;case 27:Qi(t.stateNode);case 26:case 5:Xt(t,t.return),ln(t);break;case 22:t.memoizedState===null&&ln(t);break;case 30:ln(t);break;default:ln(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,s=l.flags;switch(l.tag){case 0:case 11:case 15:ca(i,l,a),Li(4,l);break;case 1:if(ca(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){Te(n,n.return,C)}if(n=l,i=n.updateQueue,i!==null){var m=n.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)Kc(g[i],m)}catch(C){Te(n,n.return,C)}}a&&s&64&&nd(l),zi(l,l.return);break;case 27:od(l);case 26:case 5:ca(i,l,a),a&&n===null&&s&4&&ld(l),zi(l,l.return);break;case 12:ca(i,l,a);break;case 31:ca(i,l,a),a&&s&4&&dd(i,l);break;case 13:ca(i,l,a),a&&s&4&&md(i,l);break;case 22:l.memoizedState===null&&ca(i,l,a),zi(l,l.return);break;case 30:break;default:ca(i,l,a)}t=t.sibling}}function ys(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_i(a))}function vs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_i(e))}function Gt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pd(e,t,a,n),t=t.sibling}function pd(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,a,n),i&2048&&Li(9,t);break;case 1:Gt(e,t,a,n);break;case 3:Gt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_i(e)));break;case 12:if(i&2048){Gt(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,s=l.id,m=l.onPostCommit;typeof m=="function"&&m(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Te(t,t.return,g)}}else Gt(e,t,a,n);break;case 31:Gt(e,t,a,n);break;case 13:Gt(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,s=t.alternate,t.memoizedState!==null?l._visibility&2?Gt(e,t,a,n):Hi(e,t):l._visibility&2?Gt(e,t,a,n):(l._visibility|=2,qn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&ys(s,t);break;case 24:Gt(e,t,a,n),i&2048&&vs(t.alternate,t);break;default:Gt(e,t,a,n)}}function qn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,s=t,m=a,g=n,C=s.flags;switch(s.tag){case 0:case 11:case 15:qn(l,s,m,g,i),Li(8,s);break;case 23:break;case 22:var O=s.stateNode;s.memoizedState!==null?O._visibility&2?qn(l,s,m,g,i):Hi(l,s):(O._visibility|=2,qn(l,s,m,g,i)),i&&C&2048&&ys(s.alternate,s);break;case 24:qn(l,s,m,g,i),i&&C&2048&&vs(s.alternate,s);break;default:qn(l,s,m,g,i)}t=t.sibling}}function Hi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Hi(a,n),i&2048&&ys(n.alternate,n);break;case 24:Hi(a,n),i&2048&&vs(n.alternate,n);break;default:Hi(a,n)}t=t.sibling}}var Bi=8192;function Vn(e,t,a){if(e.subtreeFlags&Bi)for(e=e.child;e!==null;)yd(e,t,a),e=e.sibling}function yd(e,t,a){switch(e.tag){case 26:Vn(e,t,a),e.flags&Bi&&e.memoizedState!==null&&Gp(a,Bt,e.memoizedState,e.memoizedProps);break;case 5:Vn(e,t,a);break;case 3:case 4:var n=Bt;Bt=br(e.stateNode.containerInfo),Vn(e,t,a),Bt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Bi,Bi=16777216,Vn(e,t,a),Bi=n):Vn(e,t,a));break;default:Vn(e,t,a)}}function vd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Sd(n,e)}vd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bd(e),e=e.sibling}function bd(e){switch(e.tag){case 0:case 11:case 15:Gi(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Gi(e);break;case 12:Gi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,rr(e)):Gi(e);break;default:Gi(e)}}function rr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Sd(n,e)}vd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ra(8,t,t.return),rr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,rr(t));break;default:rr(t)}e=e.sibling}}function Sd(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:Ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:_i(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Je=n;else e:for(a=e;Je!==null;){n=Je;var i=n.sibling,l=n.return;if(cd(n),n===a){Je=null;break e}if(i!==null){i.return=l,Je=i;break e}Je=l}}}var tp={getCacheForType:function(e){var t=Ie(qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(qe).controller.signal}},ap=typeof WeakMap=="function"?WeakMap:Map,be=0,Ce=null,re=null,se=0,Ee=0,_t=null,wa=!1,Yn=!1,bs=!1,fa=0,ze=0,Oa=0,rn=0,Ss=0,xt=0,Xn=0,qi=null,gt=null,Es=!1,or=0,Ed=0,sr=1/0,ur=null,Na=null,Qe=0,ja=null,Kn=null,da=0,Ts=0,_s=null,Td=null,Vi=0,xs=null;function Mt(){return(be&2)!==0&&se!==0?se&-se:N.T!==null?Os():zu()}function _d(){if(xt===0)if((se&536870912)===0||de){var e=yl;yl<<=1,(yl&3932160)===0&&(yl=262144),xt=e}else xt=536870912;return e=Et.current,e!==null&&(e.flags|=32),xt}function pt(e,t,a){(e===Ce&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Qn(e,0),Da(e,se,xt,!1)),ui(e,a),((be&2)===0||e!==Ce)&&(e===Ce&&((be&2)===0&&(rn|=a),ze===4&&Da(e,se,xt,!1)),Kt(e))}function xd(e,t,a){if((be&6)!==0)throw Error(o(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||si(e,t),i=n?lp(e,t):Cs(e,t,!0),l=n;do{if(i===0){Yn&&!n&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!np(a)){i=Cs(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var m=e;i=qi;var g=m.current.memoizedState.isDehydrated;if(g&&(Qn(m,s).flags|=256),s=Cs(m,s,!1),s!==2){if(bs&&!g){m.errorRecoveryDisabledLanes|=l,rn|=l,i=4;break e}l=gt,gt=i,l!==null&&(gt===null?gt=l:gt.push.apply(gt,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Qn(e,0),Da(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Da(n,t,xt,!wa);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=or+300-$e(),10<i)){if(Da(n,t,xt,!wa),bl(n,0,!0)!==0)break e;da=t,n.timeoutHandle=tm(Md.bind(null,n,a,gt,ur,Es,t,xt,rn,Xn,wa,l,"Throttled",-0,0),i);break e}Md(n,a,gt,ur,Es,t,xt,rn,Xn,wa,l,null,-0,0)}}break}while(!0);Kt(e)}function Md(e,t,a,n,i,l,s,m,g,C,O,D,A,w){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},yd(t,l,D);var Y=(l&62914560)===l?or-$e():(l&4194048)===l?Ed-$e():0;if(Y=qp(D,Y),Y!==null){da=l,e.cancelPendingCommit=Y(Dd.bind(null,e,t,l,a,n,i,s,m,g,O,D,null,A,w)),Da(e,l,s,!C);return}}Dd(e,t,l,a,n,i,s,m,g)}function np(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!bt(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,n){t&=~Ss,t&=~rn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-it(i),s=1<<l;n[l]=-1,i&=~s}a!==0&&Uu(e,a,t)}function cr(){return(be&6)===0?(Yi(0),!1):!0}function Ms(){if(re!==null){if(Ee===0)var e=re.return;else e=re,ta=Ja=null,qo(e),Ln=null,Mi=0,e=re;for(;e!==null;)ad(e.alternate,e),e=e.return;re=null}}function Qn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_p(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,Ms(),Ce=e,re=a=It(e.current,null),se=t,Ee=0,_t=null,wa=!1,Yn=si(e,t),bs=!1,Xn=xt=Ss=rn=Oa=ze=0,gt=qi=null,Es=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-it(n),l=1<<i;t|=e[i],n&=~l}return fa=t,Nl(),a}function Cd(e,t){ne=null,N.H=Di,t===kn||t===Bl?(t=qc(),Ee=3):t===wo?(t=qc(),Ee=4):Ee=t===ns?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,re===null&&(ze=1,Il(e,wt(t,e.current)))}function Ad(){var e=Et.current;return e===null?!0:(se&4194048)===se?Dt===null:(se&62914560)===se||(se&536870912)!==0?e===Dt:!1}function Rd(){var e=N.H;return N.H=Di,e===null?Di:e}function wd(){var e=N.A;return N.A=tp,e}function fr(){ze=4,wa||(se&4194048)!==se&&Et.current!==null||(Yn=!0),(Oa&134217727)===0&&(rn&134217727)===0||Ce===null||Da(Ce,se,xt,!1)}function Cs(e,t,a){var n=be;be|=2;var i=Rd(),l=wd();(Ce!==e||se!==t)&&(ur=null,Qn(e,t)),t=!1;var s=ze;e:do try{if(Ee!==0&&re!==null){var m=re,g=_t;switch(Ee){case 8:Ms(),s=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var C=Ee;if(Ee=0,_t=null,Zn(e,m,g,C),a&&Yn){s=0;break e}break;default:C=Ee,Ee=0,_t=null,Zn(e,m,g,C)}}ip(),s=ze;break}catch(O){Cd(e,O)}while(!0);return t&&e.shellSuspendCounter++,ta=Ja=null,be=n,N.H=i,N.A=l,re===null&&(Ce=null,se=0,Nl()),s}function ip(){for(;re!==null;)Od(re)}function lp(e,t){var a=be;be|=2;var n=Rd(),i=wd();Ce!==e||se!==t?(ur=null,sr=$e()+500,Qn(e,t)):Yn=si(e,t);e:do try{if(Ee!==0&&re!==null){t=re;var l=_t;t:switch(Ee){case 1:Ee=0,_t=null,Zn(e,t,l,1);break;case 2:case 9:if(Bc(l)){Ee=0,_t=null,Nd(t);break}t=function(){Ee!==2&&Ee!==9||Ce!==e||(Ee=7),Kt(e)},l.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:Bc(l)?(Ee=0,_t=null,Nd(t)):(Ee=0,_t=null,Zn(e,t,l,7));break;case 5:var s=null;switch(re.tag){case 26:s=re.memoizedState;case 5:case 27:var m=re;if(s?pm(s):m.stateNode.complete){Ee=0,_t=null;var g=m.sibling;if(g!==null)re=g;else{var C=m.return;C!==null?(re=C,dr(C)):re=null}break t}}Ee=0,_t=null,Zn(e,t,l,5);break;case 6:Ee=0,_t=null,Zn(e,t,l,6);break;case 8:Ms(),ze=6;break e;default:throw Error(o(462))}}rp();break}catch(O){Cd(e,O)}while(!0);return ta=Ja=null,N.H=n,N.A=i,be=a,re!==null?0:(Ce=null,se=0,Nl(),ze)}function rp(){for(;re!==null&&!Gr();)Od(re)}function Od(e){var t=ed(e.alternate,e,fa);e.memoizedProps=e.pendingProps,t===null?dr(e):re=t}function Nd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=$f(a,t,t.pendingProps,t.type,void 0,se);break;case 11:t=$f(a,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:qo(t);default:ad(a,t),t=re=Rc(t,fa),t=ed(a,t,fa)}e.memoizedProps=e.pendingProps,t===null?dr(e):re=t}function Zn(e,t,a,n){ta=Ja=null,qo(t),Ln=null,Mi=0;var i=t.return;try{if($g(e,i,t,a,se)){ze=1,Il(e,wt(a,e.current)),re=null;return}}catch(l){if(i!==null)throw re=i,l;ze=1,Il(e,wt(a,e.current)),re=null;return}t.flags&32768?(de||n===1?e=!0:Yn||(se&536870912)!==0?e=!1:(wa=e=!0,(n===2||n===9||n===3||n===6)&&(n=Et.current,n!==null&&n.tag===13&&(n.flags|=16384))),jd(t,e)):dr(t)}function dr(e){var t=e;do{if((t.flags&32768)!==0){jd(t,wa);return}e=t.return;var a=Wg(t.alternate,t,fa);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ze===0&&(ze=5)}function jd(e,t){do{var a=Pg(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);ze=6,re=null}function Dd(e,t,a,n,i,l,s,m,g){e.cancelPendingCommit=null;do mr();while(Qe!==0);if((be&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(l=t.lanes|t.childLanes,l|=ho,Bh(e,a,l,s,m,g),e===Ce&&(re=Ce=null,se=0),Kn=t,ja=e,da=a,Ts=l,_s=i,Td=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cp(mn,function(){return Hd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,i=z.p,z.p=2,s=be,be|=4;try{Ig(e,t,a)}finally{be=s,z.p=i,N.T=n}}Qe=1,Ud(),kd(),Ld()}}function Ud(){if(Qe===1){Qe=0;var e=ja,t=Kn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var n=z.p;z.p=2;var i=be;be|=4;try{hd(t,e);var l=Hs,s=bc(e.containerInfo),m=l.focusedElem,g=l.selectionRange;if(s!==m&&m&&m.ownerDocument&&vc(m.ownerDocument.documentElement,m)){if(g!==null&&so(m)){var C=g.start,O=g.end;if(O===void 0&&(O=C),"selectionStart"in m)m.selectionStart=C,m.selectionEnd=Math.min(O,m.value.length);else{var D=m.ownerDocument||document,A=D&&D.defaultView||window;if(A.getSelection){var w=A.getSelection(),Y=m.textContent.length,P=Math.min(g.start,Y),Me=g.end===void 0?P:Math.min(g.end,Y);!w.extend&&P>Me&&(s=Me,Me=P,P=s);var _=yc(m,P),v=yc(m,Me);if(_&&v&&(w.rangeCount!==1||w.anchorNode!==_.node||w.anchorOffset!==_.offset||w.focusNode!==v.node||w.focusOffset!==v.offset)){var M=D.createRange();M.setStart(_.node,_.offset),w.removeAllRanges(),P>Me?(w.addRange(M),w.extend(v.node,v.offset)):(M.setEnd(v.node,v.offset),w.addRange(M))}}}}for(D=[],w=m;w=w.parentNode;)w.nodeType===1&&D.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<D.length;m++){var j=D[m];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Mr=!!zs,Hs=zs=null}finally{be=i,z.p=n,N.T=a}}e.current=t,Qe=2}}function kd(){if(Qe===2){Qe=0;var e=ja,t=Kn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var n=z.p;z.p=2;var i=be;be|=4;try{ud(e,t.alternate,t)}finally{be=i,z.p=n,N.T=a}}Qe=3}}function Ld(){if(Qe===4||Qe===3){Qe=0,cl();var e=ja,t=Kn,a=da,n=Td;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Kn=ja=null,zd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Na=null),Yr(a),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(pe,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=N.T,i=z.p,z.p=2,N.T=null;try{for(var l=e.onRecoverableError,s=0;s<n.length;s++){var m=n[s];l(m.value,{componentStack:m.stack})}}finally{N.T=t,z.p=i}}(da&3)!==0&&mr(),Kt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===xs?Vi++:(Vi=0,xs=e):Vi=0,Yi(0)}}function zd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_i(t)))}function mr(){return Ud(),kd(),Ld(),Hd()}function Hd(){if(Qe!==5)return!1;var e=ja,t=Ts;Ts=0;var a=Yr(da),n=N.T,i=z.p;try{z.p=32>a?32:a,N.T=null,a=_s,_s=null;var l=ja,s=da;if(Qe=0,Kn=ja=null,da=0,(be&6)!==0)throw Error(o(331));var m=be;if(be|=4,bd(l.current),pd(l,l.current,s,a),be=m,Yi(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(pe,l)}catch{}return!0}finally{z.p=i,N.T=n,zd(e,t)}}function Bd(e,t,a){t=wt(a,t),t=as(e.stateNode,t,2),e=Ma(e,t,2),e!==null&&(ui(e,2),Kt(e))}function Te(e,t,a){if(e.tag===3)Bd(e,e,a);else for(;t!==null;){if(t.tag===3){Bd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Na===null||!Na.has(n))){e=wt(a,e),a=Gf(2),n=Ma(t,a,2),n!==null&&(qf(a,n,t,e),ui(n,2),Kt(n));break}}t=t.return}}function As(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new ap;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(bs=!0,i.add(a),e=op.bind(null,e,t,a),t.then(e,e))}function op(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(se&a)===a&&(ze===4||ze===3&&(se&62914560)===se&&300>$e()-or?(be&2)===0&&Qn(e,0):Ss|=a,Xn===se&&(Xn=0)),Kt(e)}function Gd(e,t){t===0&&(t=Du()),e=Za(e,t),e!==null&&(ui(e,t),Kt(e))}function sp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Gd(e,a)}function up(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),Gd(e,a)}function cp(e,t){return ri(e,t)}var hr=null,$n=null,Rs=!1,gr=!1,ws=!1,Ua=0;function Kt(e){e!==$n&&e.next===null&&($n===null?hr=$n=e:$n=$n.next=e),gr=!0,Rs||(Rs=!0,dp())}function Yi(e,t){if(!ws&&gr){ws=!0;do for(var a=!1,n=hr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var s=n.suspendedLanes,m=n.pingedLanes;l=(1<<31-it(42|e)+1)-1,l&=i&~(s&~m),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Xd(n,l))}else l=se,l=bl(n,n===Ce?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||si(n,l)||(a=!0,Xd(n,l));n=n.next}while(a);ws=!1}}function fp(){qd()}function qd(){gr=Rs=!1;var e=0;Ua!==0&&Tp()&&(e=Ua);for(var t=$e(),a=null,n=hr;n!==null;){var i=n.next,l=Vd(n,t);l===0?(n.next=null,a===null?hr=i:a.next=i,i===null&&($n=a)):(a=n,(e!==0||(l&3)!==0)&&(gr=!0)),n=i}Qe!==0&&Qe!==5||Yi(e),Ua!==0&&(Ua=0)}function Vd(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-it(l),m=1<<s,g=i[s];g===-1?((m&a)===0||(m&n)!==0)&&(i[s]=Hh(m,t)):g<=t&&(e.expiredLanes|=m),l&=~m}if(t=Ce,a=se,a=bl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&oi(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||si(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&oi(n),Yr(a)){case 2:case 8:a=ml;break;case 32:a=mn;break;case 268435456:a=hn;break;default:a=mn}return n=Yd.bind(null,e),a=ri(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&oi(n),e.callbackPriority=2,e.callbackNode=null,2}function Yd(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(mr()&&e.callbackNode!==a)return null;var n=se;return n=bl(e,e===Ce?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(xd(e,n,t),Vd(e,$e()),e.callbackNode!=null&&e.callbackNode===a?Yd.bind(null,e):null)}function Xd(e,t){if(mr())return null;xd(e,t,!0)}function dp(){xp(function(){(be&6)!==0?ri(dl,fp):qd()})}function Os(){if(Ua===0){var e=Dn;e===0&&(e=pl,pl<<=1,(pl&261888)===0&&(pl=256)),Ua=e}return Ua}function Kd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_l(""+e)}function Qd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function mp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=Kd((i[ct]||null).action),s=n.submitter;s&&(t=(t=s[ct]||null)?Kd(t.formAction):s.getAttribute("formAction"),t!==null&&(l=t,s=null));var m=new Al("action","action",null,n,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ua!==0){var g=s?Qd(i,s):new FormData(i);Jo(a,{pending:!0,data:g,method:i.method,action:l},null,g)}}else typeof l=="function"&&(m.preventDefault(),g=s?Qd(i,s):new FormData(i),Jo(a,{pending:!0,data:g,method:i.method,action:l},l,g))},currentTarget:i}]})}}for(var Ns=0;Ns<mo.length;Ns++){var js=mo[Ns],hp=js.toLowerCase(),gp=js[0].toUpperCase()+js.slice(1);Ht(hp,"on"+gp)}Ht(Tc,"onAnimationEnd"),Ht(_c,"onAnimationIteration"),Ht(xc,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(Ng,"onTransitionRun"),Ht(jg,"onTransitionStart"),Ht(Dg,"onTransitionCancel"),Ht(Mc,"onTransitionEnd"),bn("onMouseEnter",["mouseout","mouseover"]),bn("onMouseLeave",["mouseout","mouseover"]),bn("onPointerEnter",["pointerout","pointerover"]),bn("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function Zd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var s=n.length-1;0<=s;s--){var m=n[s],g=m.instance,C=m.currentTarget;if(m=m.listener,g!==l&&i.isPropagationStopped())break e;l=m,i.currentTarget=C;try{l(i)}catch(O){Ol(O)}i.currentTarget=null,l=g}else for(s=0;s<n.length;s++){if(m=n[s],g=m.instance,C=m.currentTarget,m=m.listener,g!==l&&i.isPropagationStopped())break e;l=m,i.currentTarget=C;try{l(i)}catch(O){Ol(O)}i.currentTarget=null,l=g}}}}function oe(e,t){var a=t[Xr];a===void 0&&(a=t[Xr]=new Set);var n=e+"__bubble";a.has(n)||($d(t,e,2,!1),a.add(n))}function Ds(e,t,a){var n=0;t&&(n|=4),$d(a,e,n,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Us(e){if(!e[pr]){e[pr]=!0,Gu.forEach(function(a){a!=="selectionchange"&&(pp.has(a)||Ds(a,!1,e),Ds(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,Ds("selectionchange",!1,t))}}function $d(e,t,a,n){switch(_m(t)){case 2:var i=Xp;break;case 8:i=Kp;break;default:i=Fs}a=i.bind(null,t,a,e),i=void 0,!Ir||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function ks(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var m=n.stateNode.containerInfo;if(m===i)break;if(s===4)for(s=n.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;m!==null;){if(s=pn(m),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){n=l=s;continue e}m=m.parentNode}}n=n.return}Pu(function(){var C=l,O=Wr(a),D=[];e:{var A=Cc.get(e);if(A!==void 0){var w=Al,Y=e;switch(e){case"keypress":if(Ml(a)===0)break e;case"keydown":case"keyup":w=ug;break;case"focusin":Y="focus",w=no;break;case"focusout":Y="blur",w=no;break;case"beforeblur":case"afterblur":w=no;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=dg;break;case Tc:case _c:case xc:w=eg;break;case Mc:w=hg;break;case"scroll":case"scrollend":w=Fh;break;case"wheel":w=pg;break;case"copy":case"cut":case"paste":w=ag;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=nc;break;case"toggle":case"beforetoggle":w=vg}var P=(t&4)!==0,Me=!P&&(e==="scroll"||e==="scrollend"),_=P?A!==null?A+"Capture":null:A;P=[];for(var v=C,M;v!==null;){var j=v;if(M=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||M===null||_===null||(j=di(v,_),j!=null&&P.push(Ki(v,j,M))),Me)break;v=v.return}0<P.length&&(A=new w(A,Y,null,a,O),D.push({event:A,listeners:P}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",A&&a!==Jr&&(Y=a.relatedTarget||a.fromElement)&&(pn(Y)||Y[gn]))break e;if((w||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,w?(Y=a.relatedTarget||a.toElement,w=C,Y=Y?pn(Y):null,Y!==null&&(Me=f(Y),P=Y.tag,Y!==Me||P!==5&&P!==27&&P!==6)&&(Y=null)):(w=null,Y=C),w!==Y)){if(P=tc,j="onMouseLeave",_="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(P=nc,j="onPointerLeave",_="onPointerEnter",v="pointer"),Me=w==null?A:fi(w),M=Y==null?A:fi(Y),A=new P(j,v+"leave",w,a,O),A.target=Me,A.relatedTarget=M,j=null,pn(O)===C&&(P=new P(_,v+"enter",Y,a,O),P.target=M,P.relatedTarget=Me,j=P),Me=j,w&&Y)t:{for(P=yp,_=w,v=Y,M=0,j=_;j;j=P(j))M++;j=0;for(var $=v;$;$=P($))j++;for(;0<M-j;)_=P(_),M--;for(;0<j-M;)v=P(v),j--;for(;M--;){if(_===v||v!==null&&_===v.alternate){P=_;break t}_=P(_),v=P(v)}P=null}else P=null;w!==null&&Fd(D,A,w,P,!1),Y!==null&&Me!==null&&Fd(D,Me,Y,P,!0)}}e:{if(A=C?fi(C):window,w=A.nodeName&&A.nodeName.toLowerCase(),w==="select"||w==="input"&&A.type==="file")var ye=fc;else if(uc(A))if(dc)ye=Rg;else{ye=Cg;var Q=Mg}else w=A.nodeName,!w||w.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?C&&Fr(C.elementType)&&(ye=fc):ye=Ag;if(ye&&(ye=ye(e,C))){cc(D,ye,a,O);break e}Q&&Q(e,A,C),e==="focusout"&&C&&A.type==="number"&&C.memoizedProps.value!=null&&$r(A,"number",A.value)}switch(Q=C?fi(C):window,e){case"focusin":(uc(Q)||Q.contentEditable==="true")&&(Mn=Q,uo=C,Si=null);break;case"focusout":Si=uo=Mn=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,Sc(D,a,O);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":Sc(D,a,O)}var ie;if(lo)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else xn?oc(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(ic&&a.locale!=="ko"&&(xn||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&xn&&(ie=Iu()):(va=O,eo="value"in va?va.value:va.textContent,xn=!0)),Q=yr(C,ue),0<Q.length&&(ue=new ac(ue,e,null,a,O),D.push({event:ue,listeners:Q}),ie?ue.data=ie:(ie=sc(a),ie!==null&&(ue.data=ie)))),(ie=Sg?Eg(e,a):Tg(e,a))&&(ue=yr(C,"onBeforeInput"),0<ue.length&&(Q=new ac("onBeforeInput","beforeinput",null,a,O),D.push({event:Q,listeners:ue}),Q.data=ie)),mp(D,e,C,a,O)}Zd(D,t)})}function Ki(e,t,a){return{instance:e,listener:t,currentTarget:a}}function yr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=di(e,a),i!=null&&n.unshift(Ki(e,i,l)),i=di(e,t),i!=null&&n.push(Ki(e,i,l))),e.tag===3)return n;e=e.return}return[]}function yp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fd(e,t,a,n,i){for(var l=t._reactName,s=[];a!==null&&a!==n;){var m=a,g=m.alternate,C=m.stateNode;if(m=m.tag,g!==null&&g===n)break;m!==5&&m!==26&&m!==27||C===null||(g=C,i?(C=di(a,l),C!=null&&s.unshift(Ki(a,C,g))):i||(C=di(a,l),C!=null&&s.push(Ki(a,C,g)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var vp=/\r\n?/g,bp=/\u0000|\uFFFD/g;function Jd(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(bp,"")}function Wd(e,t){return t=Jd(t),Jd(e)===t}function xe(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||En(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&En(e,""+n);break;case"className":El(e,"class",n);break;case"tabIndex":El(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":El(e,a,n);break;case"style":Ju(e,n,l);break;case"data":if(t!=="object"){El(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=_l(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",i.name,i,null),xe(e,t,"formEncType",i.formEncType,i,null),xe(e,t,"formMethod",i.formMethod,i,null),xe(e,t,"formTarget",i.formTarget,i,null)):(xe(e,t,"encType",i.encType,i,null),xe(e,t,"method",i.method,i,null),xe(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=_l(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Wt);break;case"onScroll":n!=null&&oe("scroll",e);break;case"onScrollEnd":n!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=_l(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":oe("beforetoggle",e),oe("toggle",e),Sl(e,"popover",n);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Sl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zh.get(a)||a,Sl(e,a,n))}}function Ls(e,t,a,n,i,l){switch(a){case"style":Ju(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof n=="string"?En(e,n):(typeof n=="number"||typeof n=="bigint")&&En(e,""+n);break;case"onScroll":n!=null&&oe("scroll",e);break;case"onScrollEnd":n!=null&&oe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[ct]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Sl(e,a,n)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];if(s!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,l,s,a,null)}}i&&xe(e,t,"srcSet",a.srcSet,a,null),n&&xe(e,t,"src",a.src,a,null);return;case"input":oe("invalid",e);var m=l=s=i=null,g=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var O=a[n];if(O!=null)switch(n){case"name":i=O;break;case"type":s=O;break;case"checked":g=O;break;case"defaultChecked":C=O;break;case"value":l=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:xe(e,t,n,O,a,null)}}Qu(e,l,m,g,C,s,i,!1);return;case"select":oe("invalid",e),n=s=l=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":l=m;break;case"defaultValue":s=m;break;case"multiple":n=m;default:xe(e,t,i,m,a,null)}t=l,a=s,e.multiple=!!n,t!=null?Sn(e,!!n,t,!1):a!=null&&Sn(e,!!n,a,!0);return;case"textarea":oe("invalid",e),l=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(m=a[s],m!=null))switch(s){case"value":n=m;break;case"defaultValue":i=m;break;case"children":l=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:xe(e,t,s,m,a,null)}$u(e,n,i,l);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:xe(e,t,g,n,a,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(n=0;n<Xi.length;n++)oe(Xi[n],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,C,n,a,null)}return;default:if(Fr(t)){for(O in a)a.hasOwnProperty(O)&&(n=a[O],n!==void 0&&Ls(e,t,O,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&xe(e,t,m,n,a,null))}function Sp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,m=null,g=null,C=null,O=null;for(w in a){var D=a[w];if(a.hasOwnProperty(w)&&D!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":g=D;default:n.hasOwnProperty(w)||xe(e,t,w,null,n,D)}}for(var A in n){var w=n[A];if(D=a[A],n.hasOwnProperty(A)&&(w!=null||D!=null))switch(A){case"type":l=w;break;case"name":i=w;break;case"checked":C=w;break;case"defaultChecked":O=w;break;case"value":s=w;break;case"defaultValue":m=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(137,t));break;default:w!==D&&xe(e,t,A,w,n,D)}}Zr(e,s,m,g,C,O,l,i);return;case"select":w=s=m=A=null;for(l in a)if(g=a[l],a.hasOwnProperty(l)&&g!=null)switch(l){case"value":break;case"multiple":w=g;default:n.hasOwnProperty(l)||xe(e,t,l,null,n,g)}for(i in n)if(l=n[i],g=a[i],n.hasOwnProperty(i)&&(l!=null||g!=null))switch(i){case"value":A=l;break;case"defaultValue":m=l;break;case"multiple":s=l;default:l!==g&&xe(e,t,i,l,n,g)}t=m,a=s,n=w,A!=null?Sn(e,!!a,A,!1):!!n!=!!a&&(t!=null?Sn(e,!!a,t,!0):Sn(e,!!a,a?[]:"",!1));return;case"textarea":w=A=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:xe(e,t,m,null,n,i)}for(s in n)if(i=n[s],l=a[s],n.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":A=i;break;case"defaultValue":w=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==l&&xe(e,t,s,i,n,l)}Zu(e,A,w);return;case"option":for(var Y in a)if(A=a[Y],a.hasOwnProperty(Y)&&A!=null&&!n.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:xe(e,t,Y,null,n,A)}for(g in n)if(A=n[g],w=a[g],n.hasOwnProperty(g)&&A!==w&&(A!=null||w!=null))switch(g){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:xe(e,t,g,A,n,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)A=a[P],a.hasOwnProperty(P)&&A!=null&&!n.hasOwnProperty(P)&&xe(e,t,P,null,n,A);for(C in n)if(A=n[C],w=a[C],n.hasOwnProperty(C)&&A!==w&&(A!=null||w!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:xe(e,t,C,A,n,w)}return;default:if(Fr(t)){for(var Me in a)A=a[Me],a.hasOwnProperty(Me)&&A!==void 0&&!n.hasOwnProperty(Me)&&Ls(e,t,Me,void 0,n,A);for(O in n)A=n[O],w=a[O],!n.hasOwnProperty(O)||A===w||A===void 0&&w===void 0||Ls(e,t,O,A,n,w);return}}for(var _ in a)A=a[_],a.hasOwnProperty(_)&&A!=null&&!n.hasOwnProperty(_)&&xe(e,t,_,null,n,A);for(D in n)A=n[D],w=a[D],!n.hasOwnProperty(D)||A===w||A==null&&w==null||xe(e,t,D,A,n,w)}function Pd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ep(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],l=i.transferSize,s=i.initiatorType,m=i.duration;if(l&&m&&Pd(s)){for(s=0,m=i.responseEnd,n+=1;n<a.length;n++){var g=a[n],C=g.startTime;if(C>m)break;var O=g.transferSize,D=g.initiatorType;O&&Pd(D)&&(g=g.responseEnd,s+=O*(g<m?1:(m-C)/(g-C)))}if(--n,t+=8*(l+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zs=null,Hs=null;function vr(e){return e.nodeType===9?e:e.ownerDocument}function Id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function em(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gs=null;function Tp(){var e=window.event;return e&&e.type==="popstate"?e===Gs?!1:(Gs=e,!0):(Gs=null,!1)}var tm=typeof setTimeout=="function"?setTimeout:void 0,_p=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,xp=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(e){return am.resolve(null).then(e).catch(Mp)}:tm;function Mp(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function nm(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Pn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Qi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Qi(a);for(var l=a.firstChild;l;){var s=l.nextSibling,m=l.nodeName;l[ci]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=s}}else a==="body"&&Qi(e.ownerDocument.body);a=i}while(a);Pn(t)}function im(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function qs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qs(a),Kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cp(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ci])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Ap(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ut(e.nextSibling),e===null))return null;return e}function lm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ut(e.nextSibling),e===null))return null;return e}function Vs(e){return e.data==="$?"||e.data==="$~"}function Ys(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xs=null;function rm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ut(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function sm(e,t,a){switch(t=vr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Qi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Kr(e)}var kt=new Map,um=new Set;function br(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=z.d;z.d={f:wp,r:Op,D:Np,C:jp,L:Dp,m:Up,X:Lp,S:kp,M:zp};function wp(){var e=ma.f(),t=cr();return e||t}function Op(e){var t=yn(e);t!==null&&t.tag===5&&t.type==="form"?Cf(t):ma.r(e)}var Fn=typeof document>"u"?null:document;function cm(e,t,a){var n=Fn;if(n&&typeof t=="string"&&t){var i=At(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),um.has(i)||(um.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),tt(t,"link",e),Fe(t),n.head.appendChild(t)))}}function Np(e){ma.D(e),cm("dns-prefetch",e,null)}function jp(e,t){ma.C(e,t),cm("preconnect",e,t)}function Dp(e,t,a){ma.L(e,t,a);var n=Fn;if(n&&e&&t){var i='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+At(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+At(a.imageSizes)+'"]')):i+='[href="'+At(e)+'"]';var l=i;switch(t){case"style":l=Jn(e);break;case"script":l=Wn(e)}kt.has(l)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),kt.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Zi(l))||t==="script"&&n.querySelector($i(l))||(t=n.createElement("link"),tt(t,"link",e),Fe(t),n.head.appendChild(t)))}}function Up(e,t){ma.m(e,t);var a=Fn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+At(n)+'"][href="'+At(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Wn(e)}if(!kt.has(l)&&(e=x({rel:"modulepreload",href:e},t),kt.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($i(l)))return}n=a.createElement("link"),tt(n,"link",e),Fe(n),a.head.appendChild(n)}}}function kp(e,t,a){ma.S(e,t,a);var n=Fn;if(n&&e){var i=vn(n).hoistableStyles,l=Jn(e);t=t||"default";var s=i.get(l);if(!s){var m={loading:0,preload:null};if(s=n.querySelector(Zi(l)))m.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=kt.get(l))&&Ks(e,a);var g=s=n.createElement("link");Fe(g),tt(g,"link",e),g._p=new Promise(function(C,O){g.onload=C,g.onerror=O}),g.addEventListener("load",function(){m.loading|=1}),g.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Sr(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:m},i.set(l,s)}}}function Lp(e,t){ma.X(e,t);var a=Fn;if(a&&e){var n=vn(a).hoistableScripts,i=Wn(e),l=n.get(i);l||(l=a.querySelector($i(i)),l||(e=x({src:e,async:!0},t),(t=kt.get(i))&&Qs(e,t),l=a.createElement("script"),Fe(l),tt(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function zp(e,t){ma.M(e,t);var a=Fn;if(a&&e){var n=vn(a).hoistableScripts,i=Wn(e),l=n.get(i);l||(l=a.querySelector($i(i)),l||(e=x({src:e,async:!0,type:"module"},t),(t=kt.get(i))&&Qs(e,t),l=a.createElement("script"),Fe(l),tt(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function fm(e,t,a,n){var i=(i=J.current)?br(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Jn(a.href),a=vn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jn(a.href);var l=vn(i).hoistableStyles,s=l.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=i.querySelector(Zi(e)))&&!l._p&&(s.instance=l,s.state.loading=5),kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kt.set(e,a),l||Hp(i,e,a,s.state))),t&&n===null)throw Error(o(528,""));return s}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wn(a),a=vn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Jn(e){return'href="'+At(e)+'"'}function Zi(e){return'link[rel="stylesheet"]['+e+"]"}function dm(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Hp(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),tt(t,"link",a),Fe(t),e.head.appendChild(t))}function Wn(e){return'[src="'+At(e)+'"]'}function $i(e){return"script[async]"+e}function mm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+At(a.href)+'"]');if(n)return t.instance=n,Fe(n),n;var i=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Fe(n),tt(n,"style",i),Sr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Jn(a.href);var l=e.querySelector(Zi(i));if(l)return t.state.loading|=4,t.instance=l,Fe(l),l;n=dm(a),(i=kt.get(i))&&Ks(n,i),l=(e.ownerDocument||e).createElement("link"),Fe(l);var s=l;return s._p=new Promise(function(m,g){s.onload=m,s.onerror=g}),tt(l,"link",n),t.state.loading|=4,Sr(l,a.precedence,e),t.instance=l;case"script":return l=Wn(a.src),(i=e.querySelector($i(l)))?(t.instance=i,Fe(i),i):(n=a,(i=kt.get(l))&&(n=x({},a),Qs(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Fe(i),tt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Sr(n,a.precedence,e));return t.instance}function Sr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,s=0;s<n.length;s++){var m=n[s];if(m.dataset.precedence===t)l=m;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Er=null;function hm(e,t,a){if(Er===null){var n=new Map,i=Er=new Map;i.set(a,n)}else i=Er,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[ci]||l[We]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(t)||"";s=e+s;var m=n.get(s);m?m.push(l):n.set(s,[l])}}return n}function gm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Bp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Gp(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Jn(n.href),l=t.querySelector(Zi(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Tr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Fe(l);return}l=t.ownerDocument||t,n=dm(n),(i=kt.get(i))&&Ks(n,i),l=l.createElement("link"),Fe(l);var s=l;s._p=new Promise(function(m,g){s.onload=m,s.onerror=g}),tt(l,"link",n),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Tr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Zs=0;function qp(e,t){return e.stylesheets&&e.count===0&&xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&xr(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Zs===0&&(Zs=62500*Ep());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xr(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Zs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Tr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _r=null;function xr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_r=new Map,t.forEach(Vp,e),_r=null,Tr.call(e))}function Vp(e,t){if(!(t.state.loading&4)){var a=_r.get(e);if(a)var n=a.get(null);else{a=new Map,_r.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=t.instance,s=i.getAttribute("data-precedence"),l=a.get(s)||n,l===n&&a.set(null,i),a.set(s,i),this.count++,n=Tr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Fi={$$typeof:F,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Yp(e,t,a,n,i,l,s,m,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.hiddenUpdates=qr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function ym(e,t,a,n,i,l,s,m,g,C,O,D){return e=new Yp(e,t,a,s,g,C,O,D,m),t=1,l===!0&&(t|=24),l=St(3,null,null,t),e.current=l,l.stateNode=e,t=Co(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},Oo(l),e}function vm(e){return e?(e=Rn,e):Rn}function bm(e,t,a,n,i,l){i=vm(i),n.context===null?n.context=i:n.pendingContext=i,n=xa(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=Ma(e,n,t),a!==null&&(pt(a,e,t),Ai(a,e,t))}function Sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $s(e,t){Sm(e,t),(e=e.alternate)&&Sm(e,t)}function Em(e){if(e.tag===13||e.tag===31){var t=Za(e,67108864);t!==null&&pt(t,e,67108864),$s(e,67108864)}}function Tm(e){if(e.tag===13||e.tag===31){var t=Mt();t=Vr(t);var a=Za(e,t);a!==null&&pt(a,e,t),$s(e,t)}}var Mr=!0;function Xp(e,t,a,n){var i=N.T;N.T=null;var l=z.p;try{z.p=2,Fs(e,t,a,n)}finally{z.p=l,N.T=i}}function Kp(e,t,a,n){var i=N.T;N.T=null;var l=z.p;try{z.p=8,Fs(e,t,a,n)}finally{z.p=l,N.T=i}}function Fs(e,t,a,n){if(Mr){var i=Js(n);if(i===null)ks(e,t,n,Cr,a),xm(e,n);else if(Zp(i,e,t,a,n))n.stopPropagation();else if(xm(e,n),t&4&&-1<Qp.indexOf(e)){for(;i!==null;){var l=yn(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Va(l.pendingLanes);if(s!==0){var m=l;for(m.pendingLanes|=2,m.entangledLanes|=2;s;){var g=1<<31-it(s);m.entanglements[1]|=g,s&=~g}Kt(l),(be&6)===0&&(sr=$e()+500,Yi(0))}}break;case 31:case 13:m=Za(l,2),m!==null&&pt(m,l,2),cr(),$s(l,2)}if(l=Js(n),l===null&&ks(e,t,n,Cr,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else ks(e,t,n,null,a)}}function Js(e){return e=Wr(e),Ws(e)}var Cr=null;function Ws(e){if(Cr=null,e=pn(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cr=e,null}function _m(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fl()){case dl:return 2;case ml:return 8;case mn:case hl:return 32;case hn:return 268435456;default:return 32}default:return 32}}var Ps=!1,La=null,za=null,Ha=null,Ji=new Map,Wi=new Map,Ba=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xm(e,t){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(t.pointerId)}}function Pi(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=yn(t),t!==null&&Em(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zp(e,t,a,n,i){switch(t){case"focusin":return La=Pi(La,e,t,a,n,i),!0;case"dragenter":return za=Pi(za,e,t,a,n,i),!0;case"mouseover":return Ha=Pi(Ha,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return Ji.set(l,Pi(Ji.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Wi.set(l,Pi(Wi.get(l)||null,e,t,a,n,i)),!0}return!1}function Mm(e){var t=pn(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Hu(e.priority,function(){Tm(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,Hu(e.priority,function(){Tm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Js(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Jr=n,a.target.dispatchEvent(n),Jr=null}else return t=yn(a),t!==null&&Em(t),e.blockedOn=a,!1;t.shift()}return!0}function Cm(e,t,a){Ar(e)&&a.delete(t)}function $p(){Ps=!1,La!==null&&Ar(La)&&(La=null),za!==null&&Ar(za)&&(za=null),Ha!==null&&Ar(Ha)&&(Ha=null),Ji.forEach(Cm),Wi.forEach(Cm)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ps||(Ps=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$p)))}var wr=null;function Am(e){wr!==e&&(wr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wr===e&&(wr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Ws(n||a)===null)continue;break}var l=yn(a);l!==null&&(e.splice(t,3),t-=3,Jo(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Pn(e){function t(g){return Rr(g,e)}La!==null&&Rr(La,e),za!==null&&Rr(za,e),Ha!==null&&Rr(Ha,e),Ji.forEach(t),Wi.forEach(t);for(var a=0;a<Ba.length;a++){var n=Ba[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)Mm(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],s=i[ct]||null;if(typeof l=="function")s||Am(a);else if(s){var m=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[ct]||null)m=s.formAction;else if(Ws(i)!==null)continue}else m=s.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Am(a)}}}function Rm(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Is(e){this._internalRoot=e}Or.prototype.render=Is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,n=Mt();bm(a,n,e,t,null,null)},Or.prototype.unmount=Is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bm(e.current,2,null,e,null,null),cr(),t[gn]=null}};function Or(e){this._internalRoot=e}Or.prototype.unstable_scheduleHydration=function(e){if(e){var t=zu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ba.length&&t!==0&&t<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&Mm(e)}};var wm=u.version;if(wm!=="19.2.3")throw Error(o(527,wm,"19.2.3"));z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var Fp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{pe=Nr.inject(Fp),Ue=Nr}catch{}}return el.createRoot=function(e,t){if(!d(e))throw Error(o(299));var a=!1,n="",i=Lf,l=zf,s=Hf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ym(e,1,!1,null,null,a,n,null,i,l,s,Rm),e[gn]=t.current,Us(e),new Is(t)},el.hydrateRoot=function(e,t,a){if(!d(e))throw Error(o(299));var n=!1,i="",l=Lf,s=zf,m=Hf,g=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=ym(e,1,!0,t,a??null,n,i,g,l,s,m,Rm),t.context=vm(null),a=t.current,n=Mt(),n=Vr(n),i=xa(n),i.callback=null,Ma(a,i,n),a=n,t.current.lanes=a,ui(t,a),Kt(t),e[gn]=t.current,Us(e),new Or(t)},el.version="19.2.3",el}var Bm;function iy(){if(Bm)return au.exports;Bm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),au.exports=ny(),au.exports}var ly=iy();var Gm="popstate";function qm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function ry(r={}){function u(o,d){let f=d.state?.masked,{pathname:h,search:E,hash:y}=f||o.location;return mu("",{pathname:h,search:E,hash:y},d.state&&d.state.usr||null,d.state&&d.state.key||"default",f?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function c(o,d){return typeof d=="string"?d:ll(d)}return sy(u,c,null,r)}function ke(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function $t(r,u){if(!r){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function oy(){return Math.random().toString(36).substring(2,10)}function Vm(r,u){return{usr:r.state,key:r.key,idx:u,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function mu(r,u,c=null,o,d){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof u=="string"?ai(u):u,state:c,key:u&&u.key||o||oy(),unstable_mask:d}}function ll({pathname:r="/",search:u="",hash:c=""}){return u&&u!=="?"&&(r+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(r+=c.charAt(0)==="#"?c:"#"+c),r}function ai(r){let u={};if(r){let c=r.indexOf("#");c>=0&&(u.hash=r.substring(c),r=r.substring(0,c));let o=r.indexOf("?");o>=0&&(u.search=r.substring(o),r=r.substring(0,o)),r&&(u.pathname=r)}return u}function sy(r,u,c,o={}){let{window:d=document.defaultView,v5Compat:f=!1}=o,h=d.history,E="POP",y=null,p=R();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function R(){return(h.state||{idx:null}).idx}function x(){E="POP";let L=R(),K=L==null?null:L-p;p=L,y&&y({action:E,location:q.location,delta:K})}function k(L,K){E="PUSH";let I=qm(L)?L:mu(q.location,L,K);p=R()+1;let F=Vm(I,p),ce=q.createHref(I.unstable_mask||I);try{h.pushState(F,"",ce)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;d.location.assign(ce)}f&&y&&y({action:E,location:q.location,delta:1})}function X(L,K){E="REPLACE";let I=qm(L)?L:mu(q.location,L,K);p=R();let F=Vm(I,p),ce=q.createHref(I.unstable_mask||I);h.replaceState(F,"",ce),f&&y&&y({action:E,location:q.location,delta:0})}function G(L){return uy(L)}let q={get action(){return E},get location(){return r(d,h)},listen(L){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(Gm,x),y=L,()=>{d.removeEventListener(Gm,x),y=null}},createHref(L){return u(d,L)},createURL:G,encodeLocation(L){let K=G(L);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:k,replace:X,go(L){return h.go(L)}};return q}function uy(r,u=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),ke(c,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:ll(r);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function ah(r,u,c="/"){return cy(r,u,c,!1)}function cy(r,u,c,o){let d=typeof u=="string"?ai(u):u,f=ha(d.pathname||"/",c);if(f==null)return null;let h=nh(r);fy(h);let E=null;for(let y=0;E==null&&y<h.length;++y){let p=Ty(f);E=Sy(h[y],p,o)}return E}function nh(r,u=[],c=[],o="",d=!1){let f=(h,E,y=d,p)=>{let R={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:E,route:h};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(o)&&y)return;ke(R.relativePath.startsWith(o),`Absolute route path "${R.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(o.length)}let x=Zt([o,R.relativePath]),k=c.concat(R);h.children&&h.children.length>0&&(ke(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),nh(h.children,u,k,x,y)),!(h.path==null&&!h.index)&&u.push({path:x,score:vy(x,h.index),routesMeta:k})};return r.forEach((h,E)=>{if(h.path===""||!h.path?.includes("?"))f(h,E);else for(let y of ih(h.path))f(h,E,!0,y)}),u}function ih(r){let u=r.split("/");if(u.length===0)return[];let[c,...o]=u,d=c.endsWith("?"),f=c.replace(/\?$/,"");if(o.length===0)return d?[f,""]:[f];let h=ih(o.join("/")),E=[];return E.push(...h.map(y=>y===""?f:[f,y].join("/"))),d&&E.push(...h),E.map(y=>r.startsWith("/")&&y===""?"/":y)}function fy(r){r.sort((u,c)=>u.score!==c.score?c.score-u.score:by(u.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var dy=/^:[\w-]+$/,my=3,hy=2,gy=1,py=10,yy=-2,Ym=r=>r==="*";function vy(r,u){let c=r.split("/"),o=c.length;return c.some(Ym)&&(o+=yy),u&&(o+=hy),c.filter(d=>!Ym(d)).reduce((d,f)=>d+(dy.test(f)?my:f===""?gy:py),o)}function by(r,u){return r.length===u.length&&r.slice(0,-1).every((o,d)=>o===u[d])?r[r.length-1]-u[u.length-1]:0}function Sy(r,u,c=!1){let{routesMeta:o}=r,d={},f="/",h=[];for(let E=0;E<o.length;++E){let y=o[E],p=E===o.length-1,R=f==="/"?u:u.slice(f.length)||"/",x=Lr({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},R),k=y.route;if(!x&&p&&c&&!o[o.length-1].route.index&&(x=Lr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},R)),!x)return null;Object.assign(d,x.params),h.push({params:d,pathname:Zt([f,x.pathname]),pathnameBase:Cy(Zt([f,x.pathnameBase])),route:k}),x.pathnameBase!=="/"&&(f=Zt([f,x.pathnameBase]))}return h}function Lr(r,u){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[c,o]=Ey(r.path,r.caseSensitive,r.end),d=u.match(c);if(!d)return null;let f=d[0],h=f.replace(/(.)\/+$/,"$1"),E=d.slice(1);return{params:o.reduce((p,{paramName:R,isOptional:x},k)=>{if(R==="*"){let G=E[k]||"";h=f.slice(0,f.length-G.length).replace(/(.)\/+$/,"$1")}const X=E[k];return x&&!X?p[R]=void 0:p[R]=(X||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:h,pattern:r}}function Ey(r,u=!1,c=!0){$t(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,E,y,p,R)=>{if(o.push({paramName:E,isOptional:y!=null}),y){let x=R.charAt(p+h.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),o]}function Ty(r){try{return r.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return $t(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),r}}function ha(r,u){if(u==="/")return r;if(!r.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,o=r.charAt(c);return o&&o!=="/"?null:r.slice(c)||"/"}var _y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function xy(r,u="/"){let{pathname:c,search:o="",hash:d=""}=typeof r=="string"?ai(r):r,f;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?f=Xm(c.substring(1),"/"):f=Xm(c,u)):f=u,{pathname:f,search:Ay(o),hash:Ry(d)}}function Xm(r,u){let c=u.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function ru(r,u,c,o){return`Cannot include a '${r}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function My(r){return r.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function lh(r){let u=My(r);return u.map((c,o)=>o===u.length-1?c.pathname:c.pathnameBase)}function Mu(r,u,c,o=!1){let d;typeof r=="string"?d=ai(r):(d={...r},ke(!d.pathname||!d.pathname.includes("?"),ru("?","pathname","search",d)),ke(!d.pathname||!d.pathname.includes("#"),ru("#","pathname","hash",d)),ke(!d.search||!d.search.includes("#"),ru("#","search","hash",d)));let f=r===""||d.pathname==="",h=f?"/":d.pathname,E;if(h==null)E=c;else{let x=u.length-1;if(!o&&h.startsWith("..")){let k=h.split("/");for(;k[0]==="..";)k.shift(),x-=1;d.pathname=k.join("/")}E=x>=0?u[x]:"/"}let y=xy(d,E),p=h&&h!=="/"&&h.endsWith("/"),R=(f||h===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(p||R)&&(y.pathname+="/"),y}var Zt=r=>r.join("/").replace(/\/\/+/g,"/"),Cy=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Ay=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ry=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,wy=class{constructor(r,u,c,o=!1){this.status=r,this.statusText=u||"",this.internal=o,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function Oy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Ny(r){return r.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function oh(r,u){let c=r;if(typeof c!="string"||!_y.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let o=c,d=!1;if(rh)try{let f=new URL(window.location.href),h=c.startsWith("//")?new URL(f.protocol+c):new URL(c),E=ha(h.pathname,u);h.origin===f.origin&&E!=null?c=E+h.search+h.hash:d=!0}catch{$t(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:d,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var sh=["POST","PUT","PATCH","DELETE"];new Set(sh);var jy=["GET",...sh];new Set(jy);var ni=T.createContext(null);ni.displayName="DataRouter";var zr=T.createContext(null);zr.displayName="DataRouterState";var Dy=T.createContext(!1),uh=T.createContext({isTransitioning:!1});uh.displayName="ViewTransition";var Uy=T.createContext(new Map);Uy.displayName="Fetchers";var ky=T.createContext(null);ky.displayName="Await";var Lt=T.createContext(null);Lt.displayName="Navigation";var rl=T.createContext(null);rl.displayName="Location";var Ft=T.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Cu=T.createContext(null);Cu.displayName="RouteError";var ch="REACT_ROUTER_ERROR",Ly="REDIRECT",zy="ROUTE_ERROR_RESPONSE";function Hy(r){if(r.startsWith(`${ch}:${Ly}:{`))try{let u=JSON.parse(r.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function By(r){if(r.startsWith(`${ch}:${zy}:{`))try{let u=JSON.parse(r.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new wy(u.status,u.statusText,u.data)}catch{}}function Gy(r,{relative:u}={}){ke(ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=T.useContext(Lt),{hash:d,pathname:f,search:h}=sl(r,{relative:u}),E=f;return c!=="/"&&(E=f==="/"?c:Zt([c,f])),o.createHref({pathname:E,search:h,hash:d})}function ol(){return T.useContext(rl)!=null}function qa(){return ke(ol(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(rl).location}var fh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dh(r){T.useContext(Lt).static||T.useLayoutEffect(r)}function mh(){let{isDataRoute:r}=T.useContext(Ft);return r?Iy():qy()}function qy(){ke(ol(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(ni),{basename:u,navigator:c}=T.useContext(Lt),{matches:o}=T.useContext(Ft),{pathname:d}=qa(),f=JSON.stringify(lh(o)),h=T.useRef(!1);return dh(()=>{h.current=!0}),T.useCallback((y,p={})=>{if($t(h.current,fh),!h.current)return;if(typeof y=="number"){c.go(y);return}let R=Mu(y,JSON.parse(f),d,p.relative==="path");r==null&&u!=="/"&&(R.pathname=R.pathname==="/"?u:Zt([u,R.pathname])),(p.replace?c.replace:c.push)(R,p.state,p)},[u,c,f,d,r])}T.createContext(null);function hh(){let{matches:r}=T.useContext(Ft),u=r[r.length-1];return u?u.params:{}}function sl(r,{relative:u}={}){let{matches:c}=T.useContext(Ft),{pathname:o}=qa(),d=JSON.stringify(lh(c));return T.useMemo(()=>Mu(r,JSON.parse(d),o,u==="path"),[r,d,o,u])}function Vy(r,u){return gh(r,u)}function gh(r,u,c){ke(ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=T.useContext(Lt),{matches:d}=T.useContext(Ft),f=d[d.length-1],h=f?f.params:{},E=f?f.pathname:"/",y=f?f.pathnameBase:"/",p=f&&f.route;{let L=p&&p.path||"";yh(E,!p||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${E}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let R=qa(),x;if(u){let L=typeof u=="string"?ai(u):u;ke(y==="/"||L.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${L.pathname}" was given in the \`location\` prop.`),x=L}else x=R;let k=x.pathname||"/",X=k;if(y!=="/"){let L=y.replace(/^\//,"").split("/");X="/"+k.replace(/^\//,"").split("/").slice(L.length).join("/")}let G=ah(r,{pathname:X});$t(p||G!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),$t(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Zy(G&&G.map(L=>Object.assign({},L,{params:Object.assign({},h,L.params),pathname:Zt([y,o.encodeLocation?o.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?y:Zt([y,o.encodeLocation?o.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),d,c);return u&&q?T.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...x},navigationType:"POP"}},q):q}function Yy(){let r=Py(),u=Oy(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),c=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:f},"ErrorBoundary")," or"," ",T.createElement("code",{style:f},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},u),c?T.createElement("pre",{style:d},c):null,h)}var Xy=T.createElement(Yy,null),ph=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){this.props.onError?this.props.onError(r,u):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const c=By(r.digest);c&&(r=c)}let u=r!==void 0?T.createElement(Ft.Provider,{value:this.props.routeContext},T.createElement(Cu.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?T.createElement(Ky,{error:r},u):u}};ph.contextType=Dy;var ou=new WeakMap;function Ky({children:r,error:u}){let{basename:c}=T.useContext(Lt);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let o=Hy(u.digest);if(o){let d=ou.get(u);if(d)throw d;let f=oh(o.location,c);if(rh&&!ou.get(u))if(f.isExternal||o.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:o.replace}));throw ou.set(u,h),h}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return r}function Qy({routeContext:r,match:u,children:c}){let o=T.useContext(ni);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),T.createElement(Ft.Provider,{value:r},c)}function Zy(r,u=[],c){let o=c?.state;if(r==null){if(!o)return null;if(o.errors)r=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let d=r,f=o?.errors;if(f!=null){let R=d.findIndex(x=>x.route.id&&f?.[x.route.id]!==void 0);ke(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,R+1))}let h=!1,E=-1;if(c&&o){h=o.renderFallback;for(let R=0;R<d.length;R++){let x=d[R];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(E=R),x.route.id){let{loaderData:k,errors:X}=o,G=x.route.loader&&!k.hasOwnProperty(x.route.id)&&(!X||X[x.route.id]===void 0);if(x.route.lazy||G){c.isStatic&&(h=!0),E>=0?d=d.slice(0,E+1):d=[d[0]];break}}}}let y=c?.onError,p=o&&y?(R,x)=>{y(R,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Ny(o.matches),errorInfo:x})}:void 0;return d.reduceRight((R,x,k)=>{let X,G=!1,q=null,L=null;o&&(X=f&&x.route.id?f[x.route.id]:void 0,q=x.route.errorElement||Xy,h&&(E<0&&k===0?(yh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,L=null):E===k&&(G=!0,L=x.route.hydrateFallbackElement||null)));let K=u.concat(d.slice(0,k+1)),I=()=>{let F;return X?F=q:G?F=L:x.route.Component?F=T.createElement(x.route.Component,null):x.route.element?F=x.route.element:F=R,T.createElement(Qy,{match:x,routeContext:{outlet:R,matches:K,isDataRoute:o!=null},children:F})};return o&&(x.route.ErrorBoundary||x.route.errorElement||k===0)?T.createElement(ph,{location:o.location,revalidation:o.revalidation,component:q,error:X,children:I(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:p}):I()},null)}function Au(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $y(r){let u=T.useContext(ni);return ke(u,Au(r)),u}function Fy(r){let u=T.useContext(zr);return ke(u,Au(r)),u}function Jy(r){let u=T.useContext(Ft);return ke(u,Au(r)),u}function Ru(r){let u=Jy(r),c=u.matches[u.matches.length-1];return ke(c.route.id,`${r} can only be used on routes that contain a unique "id"`),c.route.id}function Wy(){return Ru("useRouteId")}function Py(){let r=T.useContext(Cu),u=Fy("useRouteError"),c=Ru("useRouteError");return r!==void 0?r:u.errors?.[c]}function Iy(){let{router:r}=$y("useNavigate"),u=Ru("useNavigate"),c=T.useRef(!1);return dh(()=>{c.current=!0}),T.useCallback(async(d,f={})=>{$t(c.current,fh),c.current&&(typeof d=="number"?await r.navigate(d):await r.navigate(d,{fromRouteId:u,...f}))},[r,u])}var Km={};function yh(r,u,c){!u&&!Km[r]&&(Km[r]=!0,$t(!1,c))}T.memo(ev);function ev({routes:r,future:u,state:c,isStatic:o,onError:d}){return gh(r,void 0,{state:c,isStatic:o,onError:d})}function sn(r){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tv({basename:r="/",children:u=null,location:c,navigationType:o="POP",navigator:d,static:f=!1,unstable_useTransitions:h}){ke(!ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=r.replace(/^\/*/,"/"),y=T.useMemo(()=>({basename:E,navigator:d,static:f,unstable_useTransitions:h,future:{}}),[E,d,f,h]);typeof c=="string"&&(c=ai(c));let{pathname:p="/",search:R="",hash:x="",state:k=null,key:X="default",unstable_mask:G}=c,q=T.useMemo(()=>{let L=ha(p,E);return L==null?null:{location:{pathname:L,search:R,hash:x,state:k,key:X,unstable_mask:G},navigationType:o}},[E,p,R,x,k,X,o,G]);return $t(q!=null,`<Router basename="${E}"> is not able to match the URL "${p}${R}${x}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:T.createElement(Lt.Provider,{value:y},T.createElement(rl.Provider,{children:u,value:q}))}function av({children:r,location:u}){return Vy(hu(r),u)}function hu(r,u=[]){let c=[];return T.Children.forEach(r,(o,d)=>{if(!T.isValidElement(o))return;let f=[...u,d];if(o.type===T.Fragment){c.push.apply(c,hu(o.props.children,f));return}ke(o.type===sn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=hu(o.props.children,f)),c.push(h)}),c}var Ur="get",kr="application/x-www-form-urlencoded";function Hr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function nv(r){return Hr(r)&&r.tagName.toLowerCase()==="button"}function iv(r){return Hr(r)&&r.tagName.toLowerCase()==="form"}function lv(r){return Hr(r)&&r.tagName.toLowerCase()==="input"}function rv(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ov(r,u){return r.button===0&&(!u||u==="_self")&&!rv(r)}var jr=null;function sv(){if(jr===null)try{new FormData(document.createElement("form"),0),jr=!1}catch{jr=!0}return jr}var uv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function su(r){return r!=null&&!uv.has(r)?($t(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kr}"`),null):r}function cv(r,u){let c,o,d,f,h;if(iv(r)){let E=r.getAttribute("action");o=E?ha(E,u):null,c=r.getAttribute("method")||Ur,d=su(r.getAttribute("enctype"))||kr,f=new FormData(r)}else if(nv(r)||lv(r)&&(r.type==="submit"||r.type==="image")){let E=r.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||E.getAttribute("action");if(o=y?ha(y,u):null,c=r.getAttribute("formmethod")||E.getAttribute("method")||Ur,d=su(r.getAttribute("formenctype"))||su(E.getAttribute("enctype"))||kr,f=new FormData(E,r),!sv()){let{name:p,type:R,value:x}=r;if(R==="image"){let k=p?`${p}.`:"";f.append(`${k}x`,"0"),f.append(`${k}y`,"0")}else p&&f.append(p,x)}}else{if(Hr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Ur,o=null,d=kr,h=r}return f&&d==="text/plain"&&(h=f,f=void 0),{action:o,method:c.toLowerCase(),encType:d,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wu(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function fv(r,u,c,o){let d=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return c?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${o}`:d.pathname=`${d.pathname}.${o}`:d.pathname==="/"?d.pathname=`_root.${o}`:u&&ha(d.pathname,u)==="/"?d.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${o}`,d}async function dv(r,u){if(r.id in u)return u[r.id];try{let c=await import(r.module);return u[r.id]=c,c}catch(c){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mv(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function hv(r,u,c){let o=await Promise.all(r.map(async d=>{let f=u.routes[d.route.id];if(f){let h=await dv(f,c);return h.links?h.links():[]}return[]}));return vv(o.flat(1).filter(mv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Qm(r,u,c,o,d,f){let h=(y,p)=>c[p]?y.route.id!==c[p].route.id:!0,E=(y,p)=>c[p].pathname!==y.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==y.params["*"];return f==="assets"?u.filter((y,p)=>h(y,p)||E(y,p)):f==="data"?u.filter((y,p)=>{let R=o.routes[y.route.id];if(!R||!R.hasLoader)return!1;if(h(y,p)||E(y,p))return!0;if(y.route.shouldRevalidate){let x=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function gv(r,u,{includeHydrateFallback:c}={}){return pv(r.map(o=>{let d=u.routes[o.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function pv(r){return[...new Set(r)]}function yv(r){let u={},c=Object.keys(r).sort();for(let o of c)u[o]=r[o];return u}function vv(r,u){let c=new Set;return new Set(u),r.reduce((o,d)=>{let f=JSON.stringify(yv(d));return c.has(f)||(c.add(f),o.push({key:f,link:d})),o},[])}function vh(){let r=T.useContext(ni);return wu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function bv(){let r=T.useContext(zr);return wu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ou=T.createContext(void 0);Ou.displayName="FrameworkContext";function bh(){let r=T.useContext(Ou);return wu(r,"You must render this element inside a <HydratedRouter> element"),r}function Sv(r,u){let c=T.useContext(Ou),[o,d]=T.useState(!1),[f,h]=T.useState(!1),{onFocus:E,onBlur:y,onMouseEnter:p,onMouseLeave:R,onTouchStart:x}=u,k=T.useRef(null);T.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let q=K=>{K.forEach(I=>{h(I.isIntersecting)})},L=new IntersectionObserver(q,{threshold:.5});return k.current&&L.observe(k.current),()=>{L.disconnect()}}},[r]),T.useEffect(()=>{if(o){let q=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(q)}}},[o]);let X=()=>{d(!0)},G=()=>{d(!1),h(!1)};return c?r!=="intent"?[f,k,{}]:[f,k,{onFocus:tl(E,X),onBlur:tl(y,G),onMouseEnter:tl(p,X),onMouseLeave:tl(R,G),onTouchStart:tl(x,X)}]:[!1,k,{}]}function tl(r,u){return c=>{r&&r(c),c.defaultPrevented||u(c)}}function Ev({page:r,...u}){let{router:c}=vh(),o=T.useMemo(()=>ah(c.routes,r,c.basename),[c.routes,r,c.basename]);return o?T.createElement(_v,{page:r,matches:o,...u}):null}function Tv(r){let{manifest:u,routeModules:c}=bh(),[o,d]=T.useState([]);return T.useEffect(()=>{let f=!1;return hv(r,u,c).then(h=>{f||d(h)}),()=>{f=!0}},[r,u,c]),o}function _v({page:r,matches:u,...c}){let o=qa(),{future:d,manifest:f,routeModules:h}=bh(),{basename:E}=vh(),{loaderData:y,matches:p}=bv(),R=T.useMemo(()=>Qm(r,u,p,f,o,"data"),[r,u,p,f,o]),x=T.useMemo(()=>Qm(r,u,p,f,o,"assets"),[r,u,p,f,o]),k=T.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let q=new Set,L=!1;if(u.forEach(I=>{let F=f.routes[I.route.id];!F||!F.hasLoader||(!R.some(ce=>ce.route.id===I.route.id)&&I.route.id in y&&h[I.route.id]?.shouldRevalidate||F.hasClientLoader?L=!0:q.add(I.route.id))}),q.size===0)return[];let K=fv(r,E,d.unstable_trailingSlashAwareDataRequests,"data");return L&&q.size>0&&K.searchParams.set("_routes",u.filter(I=>q.has(I.route.id)).map(I=>I.route.id).join(",")),[K.pathname+K.search]},[E,d.unstable_trailingSlashAwareDataRequests,y,o,f,R,u,r,h]),X=T.useMemo(()=>gv(x,f),[x,f]),G=Tv(x);return T.createElement(T.Fragment,null,k.map(q=>T.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...c})),X.map(q=>T.createElement("link",{key:q,rel:"modulepreload",href:q,...c})),G.map(({key:q,link:L})=>T.createElement("link",{key:q,nonce:c.nonce,...L,crossOrigin:L.crossOrigin??c.crossOrigin})))}function xv(...r){return u=>{r.forEach(c=>{typeof c=="function"?c(u):c!=null&&(c.current=u)})}}var Mv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mv&&(window.__reactRouterVersion="7.13.1")}catch{}function Cv({basename:r,children:u,unstable_useTransitions:c,window:o}){let d=T.useRef();d.current==null&&(d.current=ry({window:o,v5Compat:!0}));let f=d.current,[h,E]=T.useState({action:f.action,location:f.location}),y=T.useCallback(p=>{c===!1?E(p):T.startTransition(()=>E(p))},[c]);return T.useLayoutEffect(()=>f.listen(y),[f,y]),T.createElement(tv,{basename:r,children:u,location:h.location,navigationType:h.action,navigator:f,unstable_useTransitions:c})}var Sh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qt=T.forwardRef(function({onClick:u,discover:c="render",prefetch:o="none",relative:d,reloadDocument:f,replace:h,unstable_mask:E,state:y,target:p,to:R,preventScrollReset:x,viewTransition:k,unstable_defaultShouldRevalidate:X,...G},q){let{basename:L,navigator:K,unstable_useTransitions:I}=T.useContext(Lt),F=typeof R=="string"&&Sh.test(R),ce=oh(R,L);R=ce.to;let he=Gy(R,{relative:d}),me=qa(),W=null;if(E){let Oe=Mu(E,[],me.unstable_mask?me.unstable_mask.pathname:"/",!0);L!=="/"&&(Oe.pathname=Oe.pathname==="/"?L:Zt([L,Oe.pathname])),W=K.createHref(Oe)}let[Ae,Ze,yt]=Sv(o,G),rt=Ov(R,{replace:h,unstable_mask:E,state:y,target:p,preventScrollReset:x,relative:d,viewTransition:k,unstable_defaultShouldRevalidate:X,unstable_useTransitions:I});function Ke(Oe){u&&u(Oe),Oe.defaultPrevented||rt(Oe)}let vt=!(ce.isExternal||f),ot=T.createElement("a",{...G,...yt,href:(vt?W:void 0)||ce.absoluteURL||he,onClick:vt?Ke:u,ref:xv(q,Ze),target:p,"data-discover":!F&&c==="render"?"true":void 0});return Ae&&!F?T.createElement(T.Fragment,null,ot,T.createElement(Ev,{page:he})):ot});Qt.displayName="Link";var Av=T.forwardRef(function({"aria-current":u="page",caseSensitive:c=!1,className:o="",end:d=!1,style:f,to:h,viewTransition:E,children:y,...p},R){let x=sl(h,{relative:p.relative}),k=qa(),X=T.useContext(zr),{navigator:G,basename:q}=T.useContext(Lt),L=X!=null&&kv(x)&&E===!0,K=G.encodeLocation?G.encodeLocation(x).pathname:x.pathname,I=k.pathname,F=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;c||(I=I.toLowerCase(),F=F?F.toLowerCase():null,K=K.toLowerCase()),F&&q&&(F=ha(F,q)||F);const ce=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let he=I===K||!d&&I.startsWith(K)&&I.charAt(ce)==="/",me=F!=null&&(F===K||!d&&F.startsWith(K)&&F.charAt(K.length)==="/"),W={isActive:he,isPending:me,isTransitioning:L},Ae=he?u:void 0,Ze;typeof o=="function"?Ze=o(W):Ze=[o,he?"active":null,me?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let yt=typeof f=="function"?f(W):f;return T.createElement(Qt,{...p,"aria-current":Ae,className:Ze,ref:R,style:yt,to:h,viewTransition:E},typeof y=="function"?y(W):y)});Av.displayName="NavLink";var Rv=T.forwardRef(({discover:r="render",fetcherKey:u,navigate:c,reloadDocument:o,replace:d,state:f,method:h=Ur,action:E,onSubmit:y,relative:p,preventScrollReset:R,viewTransition:x,unstable_defaultShouldRevalidate:k,...X},G)=>{let{unstable_useTransitions:q}=T.useContext(Lt),L=Dv(),K=Uv(E,{relative:p}),I=h.toLowerCase()==="get"?"get":"post",F=typeof E=="string"&&Sh.test(E),ce=he=>{if(y&&y(he),he.defaultPrevented)return;he.preventDefault();let me=he.nativeEvent.submitter,W=me?.getAttribute("formmethod")||h,Ae=()=>L(me||he.currentTarget,{fetcherKey:u,method:W,navigate:c,replace:d,state:f,relative:p,preventScrollReset:R,viewTransition:x,unstable_defaultShouldRevalidate:k});q&&c!==!1?T.startTransition(()=>Ae()):Ae()};return T.createElement("form",{ref:G,method:I,action:K,onSubmit:o?y:ce,...X,"data-discover":!F&&r==="render"?"true":void 0})});Rv.displayName="Form";function wv(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eh(r){let u=T.useContext(ni);return ke(u,wv(r)),u}function Ov(r,{target:u,replace:c,unstable_mask:o,state:d,preventScrollReset:f,relative:h,viewTransition:E,unstable_defaultShouldRevalidate:y,unstable_useTransitions:p}={}){let R=mh(),x=qa(),k=sl(r,{relative:h});return T.useCallback(X=>{if(ov(X,u)){X.preventDefault();let G=c!==void 0?c:ll(x)===ll(k),q=()=>R(r,{replace:G,unstable_mask:o,state:d,preventScrollReset:f,relative:h,viewTransition:E,unstable_defaultShouldRevalidate:y});p?T.startTransition(()=>q()):q()}},[x,R,k,c,o,d,u,r,f,h,E,y,p])}var Nv=0,jv=()=>`__${String(++Nv)}__`;function Dv(){let{router:r}=Eh("useSubmit"),{basename:u}=T.useContext(Lt),c=Wy(),o=r.fetch,d=r.navigate;return T.useCallback(async(f,h={})=>{let{action:E,method:y,encType:p,formData:R,body:x}=cv(f,u);if(h.navigate===!1){let k=h.fetcherKey||jv();await o(k,c,h.action||E,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:R,body:x,formMethod:h.method||y,formEncType:h.encType||p,flushSync:h.flushSync})}else await d(h.action||E,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:R,body:x,formMethod:h.method||y,formEncType:h.encType||p,replace:h.replace,state:h.state,fromRouteId:c,flushSync:h.flushSync,viewTransition:h.viewTransition})},[o,d,u,c])}function Uv(r,{relative:u}={}){let{basename:c}=T.useContext(Lt),o=T.useContext(Ft);ke(o,"useFormAction must be used inside a RouteContext");let[d]=o.matches.slice(-1),f={...sl(r||".",{relative:u})},h=qa();if(r==null){f.search=h.search;let E=new URLSearchParams(f.search),y=E.getAll("index");if(y.some(R=>R==="")){E.delete("index"),y.filter(x=>x).forEach(x=>E.append("index",x));let R=E.toString();f.search=R?`?${R}`:""}}return(!r||r===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(f.pathname=f.pathname==="/"?c:Zt([c,f.pathname])),ll(f)}function kv(r,{relative:u}={}){let c=T.useContext(uh);ke(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Eh("useViewTransitionState"),d=sl(r,{relative:u});if(!c.isTransitioning)return!1;let f=ha(c.currentLocation.pathname,o)||c.currentLocation.pathname,h=ha(c.nextLocation.pathname,o)||c.nextLocation.pathname;return Lr(d.pathname,h)!=null||Lr(d.pathname,f)!=null}var Lv=th();const al=_u(Lv);function zv(){return T.useEffect(()=>{let r=window.pageYOffset;const u=document.getElementById("navbar"),c=5,o=()=>{const d=window.scrollY;r>d?u.style.top="0":d>r+c&&(u.style.top="-50px"),r=d};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),b.jsxs("div",{id:"navbar",children:[b.jsx(Qt,{to:"/",children:"Home"}),b.jsx(Qt,{to:"/guide",children:"Guide"}),b.jsx(Qt,{to:"/blog",children:"Blog"}),b.jsx(Qt,{to:"/information",children:"About"})]})}function Hv({image:r,name:u,departament:c,rating:o,time:d,onClick:f}){const h=r?`/${r}`:"";return b.jsxs("div",{className:"place-card",onClick:f,children:[h?b.jsx("div",{className:"image-wrapper",children:b.jsx("img",{src:h,alt:u})}):b.jsx("div",{className:"image-wrapper empty"}),b.jsxs("div",{className:"info",children:[b.jsx("h3",{children:u||""}),b.jsx("p",{className:"departament",children:c||""}),b.jsxs("div",{className:"meta",children:[b.jsx("span",{className:"rating",children:o?`⭐ ${o}`:""}),b.jsx("span",{className:"time",children:d||""})]})]})]})}const Th=[{id:1,image:"Corn-Island/Corn_Island_1.jpeg",name:"Corn Island",departament:"Caribbean Sea",rating:"5.0",time:"1.5 hour ✈️",description:`
                Corn Island is one of the most unique Caribbean destinations in Central America, located approximately 70 km off the eastern coast of Nicaragua in the Caribbean Sea. Unlike most mainland destinations in Nicaragua, Corn Island feels culturally and geographically isolated, offering a rare blend of Creole Caribbean culture, turquoise waters, and a slow-paced island lifestyle that has remained largely untouched by mass tourism.

                

                🟡 HOW TO GET TO CORN ISLAND

                Reaching Corn Island requires planning because it is not directly accessible by road.

                ✈️ OPTION 1 — Domestic Flight (Recommended)

                - Departure: Augusto C. Sandino International Airport (Managua)
                - Airline: Local domestic carriers (small propeller aircraft)
                - Duration: 1 hour 20 minutes to 1 hour 40 minutes
                - Price range: $120 – $220 USD (round trip depending on season)

                This is the fastest and safest option. Flights land directly on Big Corn Island.

                ⛴ OPTION 2 — Combined Land + Boat Route (Budget Option)

                Step 1:
                - Managua → Bluefields (bus or private shuttle)
                - Duration: 6–8 hours
                - Cost: $10 – $25 USD

                Step 2:
                - Bluefields → Corn Island (panga boat)
                - Duration: 4–6 hours depending on sea conditions
                - Cost: $15 – $30 USD

                ⚠️ Important:
                This route is highly dependent on weather conditions. During rainy or windy days, departures may be delayed or canceled.

                

                🟡 WHAT MAKES CORN ISLAND SPECIAL? A REAL EXPERIENCE INSIGHT: 

                Corn Island is not a “typical tourist beach.” It is a living Caribbean community where:

                - English-based Creole is widely spoken
                - Fishing remains a primary economic activity
                - Tourism infrastructure is simple, not commercialized
                - Electricity and internet can be inconsistent in some areas

                This creates a rare travel experience: disconnection from modern noise and immersion into island life.
                
                🟡 EXPERIENCES THAT ARE ACTUALLY WORTH IT IN CORN ISLAND

                Instead of standard “activities,” here are real meaningful experiences travelers value:

                🌊 1. Reef snorkeling at Blowing Rock or coral zones

                The underwater ecosystem is one of the most vibrant in Nicaragua. Visibility is often 15–25 meters on calm days. Expect coral formations, tropical fish, and occasional sea turtles.

                💰 Cost: $25 – $60 USD per guided trip


                🐟 2. Early morning fishing with local fishermen
                
                You join local Creole fishermen before sunrise. This is not a tourist show, it is real work. You learn traditional fishing techniques and sometimes eat what you catch.

                💰 Cost: $20 – $50 USD


                🌅 3. Sunset walk on low-traffic west beaches
                
                Unlike crowded destinations, you often walk long stretches of beach alone. The sunset light reflects directly on calm Caribbean water with almost no noise except waves.


                🍲 4. Authentic Creole food experience

                Try dishes like:
                - Rondon (coconut seafood stew)
                - Fried fish with plantains
                - Coconut bread

                Meals are typically cooked fresh daily.

                💰 Cost: $5 – $12 USD per meal

                

                🟡 COST OF TRAVEL TO CORN ISALND - "REALISTIC DAILY BUDGET"

                - Budget traveler: $40 – $70 USD/day
                - Mid-range: $80 – $150 USD/day
                - Comfortable stay: $150 – $250 USD/day

                Accommodation ranges from $25 USD hostels to $120+ beachfront hotels.


                🟡 SAFETY, MISTAKES & COMMON TRAVEL ERRORS 

                ❌ Mistake 1: Underestimating transport time
                Many travelers miss flights or boats due to delays between Managua and Bluefields.

                ❌ Mistake 2: Not carrying enough cash
                ATMs are limited and unreliable on the island.

                ❌ Mistake 3: Ignoring weather conditions
                Sea conditions can change quickly, affecting boats and tours.

                ⚠️ Safety level:
                Corn Island is generally safe, but petty theft can occur in poorly lit areas. Standard travel awareness is enough.


                🟡 PERSONAL TRAVEL INSIGHT 

                Corn Island is best described as a “disconnect destination.” It is not about luxury or activities — it is about slowing down completely and adapting to island rhythm. Travelers who expect fast Wi-Fi, nightlife, or urban convenience often underestimate the island’s simplicity.

                Those who adapt usually consider it one of the most peaceful Caribbean experiences in Central America.
                `,extraPhotos:["/Corn-Island/Corn_Island_1.jpeg","/Corn-Island/Corn_Island_2.jpeg","/Corn-Island/Corn_Island_5.jpeg","/Corn-Island/Corn_Island_4.jpeg","/Corn-Island/Corn_Island_6.jpeg","/Corn-Island/Corn_Island_3.jpeg","/Corn-Island/Corn_Island_7.jpeg"],activities:["Snorkeling and diving along coral reefs and underwater gardens","Relaxing on sandy beaches and watching sunset from the shore","Enjoying local Creole cuisine with fresh seafood and coconuts","Boat tours around the island and fishing trips","Relaxed beach walks and hammock‑style chill time"],restaurantsAround:[{name:"Coral Reef Restaurant"},{name:"Beachside Grill & Lobster"},{name:"Big Corn Dive Bar"}],tips:["Take a flight from Managua or a boat from Bluefields to reach the island","Bring reef‑safe sunscreen to protect coral ecosystems","Book accommodation in advance during high season (December–April)","Respect local Creole customs and avoid loud parties at night"]},{id:2,image:"Ometepe/ometepe_1.jpg",name:"Ometepe Island",departament:"Rivas",rating:"4.5",time:"3h 28min (130 km) 🚘 + 🚢",description:`
                Ometepe Island is one of the most remarkable natural destinations in Central America. Located in Lake Nicaragua, it is formed by two volcanoes — Concepción (active) and Maderas (dormant) — creating a rare biosphere where volcanic landscapes, rainforest, rural villages, and lake ecosystems coexist.

                The island is approximately 276 km² and feels like a self-contained world separated from the mainland.

                🟡 HOW TO GET THERE TO OMETEPE ISLAND

                Ometepe is not directly accessible by road and requires a ferry crossing.

                🚗 OPTION 1 — Travel to Rivas / San Jorge
                - From Managua: 2 – 2.5 hours by bus or car
                - Cost: $5 – $15 USD by bus and $70+ USD private transfer


                ⛴ OPTION 2 — Ferry to Ometepe Island

                Main ferry terminal: San Jorge, Rivas

                - Route: San Jorge → Moyogalpa (main port)
                - Duration: 60 – 75 minutes
                - Cost:
                - Passenger: $2 – $3 USD aproximately
                - Vehicle: $10 – $25 USD depending on size

                ⚠️ Important:
                Ferries can be delayed due to wind conditions on Lake Nicaragua. Morning departures are more reliable.

                🟡 WHAT MAKES OMETEPE UNIQUE?

                Ometepe is not just a tourist destination — it is a living rural ecosystem.

                - Two volcanoes dominate daily life
                - Local transport is mostly motorcycles and bicycles
                - Villages are separated by long rural roads
                - Wildlife includes monkeys, birds, and freshwater species

                It is one of the few places where tourism and agriculture coexist naturally.


                🟡 EXPERIENCES THAT ACTUALLY MATTER IN OMETEPE ISLAND

                🌋 1. Volcano Concepción hike (advanced experience)
                - Duration: 8–10 hours round trip
                - Difficulty: Very high (steep volcanic rock, heat exposure)
                - Elevation gain: ~1,600 meters

                This is not a casual hike. It requires physical fitness and often a local guide.

                💰 Guide cost: $30 – $60 USD


                🌿 2. Volcano Maderas jungle hike (moderate-hard)
                - Duration: 5–7 hours
                - Terrain: Mud, rainforest, humidity
                - Highlight: Crater lagoon at the top

                This hike feels like entering a cloud forest ecosystem.


                🏊 3. Ojo de Agua natural spring experience
                - Entrance fee: $3 – $5 USD
                - Experience: Natural volcanic spring pool with mineral-rich water
                - Best time: Morning (less crowded, clearer water)


                🚲 4. Island exploration by motorcycle or bicycle
                - Rental: $10 – $25 USD/day

                This is one of the most authentic ways to experience Ometepe:
                you pass through rural villages, farms, and volcanic landscapes at your own pace.


                🟡 COST OF TRAVEL TO OMETEPE ISLAND

                - Budget traveler: $30 – $60 USD/day
                - Mid-range: $70 – $140 USD/day
                - Eco-lodge experience: $150 – $250 USD/day


                🟡 SAFETY, COMMON MISTAKES & REAL RISKS

                ❌ Mistake 1: Underestimating volcano hikes
                Many travelers attempt Concepción without proper preparation and turn back due to exhaustion.

                ❌ Mistake 2: Not planning transport timing
                Missing the last ferry can result in unexpected overnight stays in Rivas.

                ❌ Mistake 3: Overpacking urban expectations
                Ometepe is rural — expect limited infrastructure and slower services.

                ⚠️ Safety level:
                Generally safe, but isolated rural roads require caution at night.


                🟡 TRAVEL INSIGHT

                Ometepe is not a destination you “visit quickly.” It is an environment that forces you to slow down. Travelers often describe it as a mix of adventure and isolation, where nature is not a backdrop, but the main structure of daily life.
                `,extraPhotos:["/Ometepe/ometepe_1.jpg","/Ometepe/ometepe_2.jpg","/Ometepe/ometepe_3.jpg","/Ometepe/ometepe_4.jpg","/Ometepe/ometepe_5.jpg","/Ometepe/ometepe_6.jpg","/Ometepe/ometepe_7.jpg"],activities:["Hiking Volcano Concepción or Volcano Maderas for panoramic views","Relaxing in natural springs and swimming spots like Ojo de Agua","Kayaking or paddle boarding on Lake Nicaragua","Exploring pre‑Columbian petroglyphs and local heritage","Cycling or walking along rural roads and enjoying island life"],restaurantsAround:[{name:"Cafe Campestre Ometepe"},{name:"Lake View Grill"},{name:"Volcano Lodge Restaurant"}],tips:["Use the ferry from Rivas if traveling with a vehicle","Bring cash and basic supplies, services can be limited","Hire a local guide for volcano hikes, especially for Concepción","Respect nature and avoid leaving trash on trails or beaches"]},{id:3,image:"Volcan_Masaya/volcan_masaya_1.jpg",name:"Volcán Masaya",departament:"Masaya",rating:"4.0",time:"36min (22.9 km) 🚘",description:`
                Volcán Masaya National Park is one of the most accessible active volcanic sites in the world, located only about 45 minutes from Managua. It is part of a volcanic complex that has been active for centuries and remains one of Nicaragua’s most scientifically and visually impressive natural attractions.

                Unlike remote volcano hikes, Masaya allows visitors to drive close to the crater rim and observe real volcanic activity safely from designated viewpoints.


                🟡 HOW TO GET THERE TO THE MASAYA VOLCANO

                🚗 OPTION 1 - From Managua:
                - Distance: ~25 km
                - Travel time: 30–45 minutes by car
                - Transport options:
                - Rental car: $25–60 USD/day
                - Taxi/Uber: $20–40 USD one way
                - Organized tour: $35–80 USD (includes guide + transport)

                🚌 OPTION 2 -Public transport:
                - Managua → Masaya town bus (~$1 USD)
                - Then taxi to park entrance (~$5–10 USD)

                ⚠️ Important:
                Most travelers prefer guided tours because the park has controlled entry times and specific visiting hours for crater access.


                🟡 WHAT MAKES THE MASAYA VOLCANO UNIQUE

                Volcán Masaya is one of the few volcanoes where:
                - You can drive directly to the crater viewpoint
                - You can see active gas emissions daily
                - In certain conditions, glowing lava is visible inside the crater

                It is often called “The Mouth of Hell” by early Spanish chroniclers due to its intense volcanic activity.


                🟡 REAL EXPERIENCES INSIDE THE PARK

                🌋 1. Crater viewpoint experience

                Standing at the edge of Santiago crater, you can observe constant gas emissions rising from deep volcanic chambers. On clear nights, a red glow from lava may be visible.


                🌌 2. Night lava observation tour (most recommended)
                - Time: after sunset
                - Experience: glowing lava reflection inside crater
                - Duration: 1–2 hours inside park

                💰 Cost: $10–25 USD entry + optional guided tour


                🚶 3. Short volcanic trail walks
                The park includes safe walking paths through old lava flows, giving a direct understanding of how past eruptions shaped the landscape.


                🛍 4. Masaya artisan market stop (nearby experience)
                Before or after the volcano, visitors often explore Masaya’s craft market:
                - Hammocks
                - Wooden crafts
                - Leather goods


                🟡 COST OF VISITING THE MASAYA VOLCANO

                - Budget traveler: $15–30 USD total
                - Guided experience: $40–80 USD
                - Private tour package: $60–120 USD


                🟡 SAFETY, MISTAKES & REAL WARNINGS

                ❌ Mistake 1: Not checking crater access availability
                Sometimes gas levels restrict access to the closest viewpoint.

                ❌ Mistake 2: Underestimating volcanic gases
                Sensitive travelers may feel irritation — masks or avoiding direct wind exposure helps.

                ❌ Mistake 3: Not combining with nearby attractions
                Masaya city and Granada are very close and often skipped unnecessarily.

                ⚠️ Safety level:
                Strictly regulated park. Follow all ranger instructions, volcanic activity is unpredictable.


                🟡 TRAVEL INSIGHT

                Masaya is not about hiking or adventure — it is about witnessing Earth’s internal energy in real time. It is one of the most scientifically significant volcanic viewpoints in Central America.
                `,extraPhotos:["/Volcan_Masaya/volcan_masaya_1.jpg","/Volcan_Masaya/volcan_masaya_2.jpg","/Volcan_Masaya/volcan_masaya_3.jpg","/Volcan_Masaya/volcan_masaya_4.jpg","/Volcan_Masaya/volcan_masaya_5.jpg","/Volcan_Masaya/volcan_masaya_6.jpg","/Volcan_Masaya/volcan_masaya_7.jpg"],activities:["Visit the crater and observe lava glow (especially at night)","Walk along safe trails and viewpoints inside the national park","Picnic or rest at designated areas near the volcano","Combine the visit with a tour of nearby craft markets in Masaya city"],restaurantsAround:[{name:"Volcano View Restaurant"},{name:"Local Pupusería Masaya"}],tips:["Visit at dusk or night for the best view of glowing lava","Bring a flashlight and wear sturdy shoes, paths can be rocky","Follow park instructions regarding safety around gas and crater edges","Combine the volcano visit with a stop at Masaya craft market"]},{id:4,image:"Granada/granada_1.jpg",name:"Granada City",departament:"Granada",rating:"5.0",time:"56min (42.6 km) 🚘",description:`
                Granada is one of the oldest colonial cities in the Americas, founded in 1524. Located on the shores of Lake Nicaragua, it is a cultural and historical hub that combines Spanish colonial architecture, vibrant street life, and access to natural attractions such as volcanoes and islands.

                Unlike purely natural destinations, Granada offers a blend of history, urban tourism, and lake exploration.


                🟡 HOW TO GET TO GRANADA CITY

                🚗 OPTION 1 - From Managua:
                - Distance: ~45 km
                - Travel time: 50–70 minutes

                Transport options:
                - Public bus: $1–$3 USD (slow but authentic)
                - Shuttle/tour transfer: $10–25 USD
                - Taxi/private car: $30–60 USD

                🚌 OPTION 2 - Bus route:
                Managua UCA terminal → Granada central station

                ⚠️ Important: Buses are frequent but can be crowded and slower due to multiple stops.


                🟡 WHAT MAKES GRANADA SPECIAL

                Granada is a living colonial city where:
                - Colorful buildings are still inhabited
                - Horse carriages still operate in tourist zones
                - Churches from the 16th–18th century remain active
                - Lake Nicaragua provides island ecosystems just minutes away

                It is one of the few cities in Central America that mixes daily life with tourism so seamlessly.


                🟡 REAL EXPERIENCES IN GRANADA

                🏛 1. Walking colonial center at sunrise

                Early mornings reveal a quiet version of Granada where streets are empty, temperatures are cooler, and colonial architecture becomes more visually striking.


                ⛵ 2. Boat tour of Las Isletas (Lake Nicaragua)

                - Duration: 1.5–2 hours
                - Price: $15–40 USD depending on group size

                You explore over 300 small volcanic islands formed by ancient eruptions. Some islands are private homes, others are wildlife habitats.


                🌅 3. Calle La Calzada evening experience

                At night, this street becomes the social center of the city:
                - Restaurants open-air dining
                - Live music
                - Backpacker social scene


                🛺 4. Horse carriage city tour
                - Cost: $10–25 USD
                A traditional way to explore historic streets with guided explanations.


                🟡 COST OF TRAVELING GRANADA CITY

                - Budget: $25–60 USD/day
                - Mid-range: $70–150 USD/day
                - Boutique stay: $150–300 USD/day


                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Only staying one night
                Granada requires at least 2–3 days to explore properly.

                ❌ Mistake 2: Ignoring heat
                Midday temperatures can exceed 32°C — walking tours should be early or late.

                ❌ Mistake 3: Not exploring lake islands
                Many tourists stay only in city center and miss Las Isletas entirely.

                ⚠️ Safety level:
                Generally safe tourist city, but standard precautions apply in nightlife areas.


                🟡 TRAVEL INSIGHT

                Granada is not just a stop — it is a cultural hub. It connects colonial history with lake ecosystems and serves as one of the most complete travel bases in Nicaragua.
                `,extraPhotos:["/Granada/granada_1.jpg","/Granada/granada_3.jpg","/Granada/granada_2.jpg","/Granada/granada_4.jpg","/Granada/granada_5.jpg","/Granada/granada_6.jpg","/Granada/granada_7.jpg"],activities:["Wandering colonial streets and visiting historic churches","Exploring nearby islets by boat on Lake Nicaragua","Enjoying local food and nightlife along Calle La Calzada","Using Granada as base for day trips to volcanoes or natural reserves"],restaurantsAround:[{name:"Cafe de Granada"},{name:"Lakeview Bistro"}],tips:["Use Granada as base to explore surrounding nature spots","Try local dishes like vigorón and street food on Calle La Calzada","Carry local currency and small bills for markets and small shops"]},{id:5,image:"San_Juan_del_Sur/san_juan_del_sur_1.jpg",name:"San Juan del Sur",departament:"Rivas",rating:"5.0",time:"2h 35min (129 km) 🚘",description:`
                San Juan del Sur is Nicaragua’s most well-known Pacific coastal town, famous for surfing, sunsets, and a lively backpacker atmosphere. It is a small bay town surrounded by multiple beaches that offer different surf conditions and levels of tourism intensity.



                🟡 HOW TO GET THERE

                🚗 From Managua:
                - Distance: ~135 km
                - Travel time: 2.5–3.5 hours

                Transport options:
                - Shuttle: $20–35 USD
                - Taxi/private car: $70–120 USD
                - Public bus: $3–6 USD (slower, ~4–5 hours)

                🚌 Bus route:
                Managua → Rivas → San Juan del Sur local transfer



                🟡 WHAT MAKES IT SPECIAL

                San Juan del Sur is not just a beach, it is a social hub where:
                - Surf culture dominates daily life
                - International travelers mix with locals
                - Sunset viewing becomes a daily ritual
                - Nearby beaches offer different surfing conditions



                🟡 REAL EXPERIENCES

                🏄 1. Surfing at Playa Maderas
                - 20–30 minutes from town
                - Waves suitable for beginners and intermediates
                - Lessons available: $25–60 USD/session


                🌅 2. Sunset from Christ of the Mercy statue
                - Short hike or drive
                - One of the best panoramic views of the bay
                - Peak experience: golden hour light over Pacific Ocean


                🏝 3. Beach hopping tour
                Nearby beaches include:
                - Playa Hermosa (quiet, less crowded)
                - Playa Remanso (beginner surf)
                - Playa Maderas (main surf zone)


                🍤 4. Night seafood experience
                Fresh catch restaurants along the bay:
                - Grilled fish
                - Shrimp dishes
                - Local ceviche



                🟡 COST OF TRAVEL

                - Budget: $30–70 USD/day
                - Mid-range: $80–180 USD/day
                - Surf/resort stays: $150–300 USD/day



                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Staying only in town
                Best beaches are outside the central bay area.

                ❌ Mistake 2: Ignoring transport timing
                Last taxis from beaches may be limited at night.

                ❌ Mistake 3: Underestimating sun exposure
                UV levels are extremely high — sunscreen is essential.

                ⚠️ Safety level:
                Generally safe but nightlife areas require normal caution.



                🟡 TRAVEL INSIGHT

                San Juan del Sur is a social surf town more than a quiet beach destination. It is ideal for travelers who want both ocean activities and nightlife interaction.
                `,extraPhotos:["/San_Juan_del_Sur/san_juan_del_sur_2.jpg","/San_Juan_del_Sur/san_juan_del_sur_1.jpg","/San_Juan_del_Sur/san_juan_del_sur_3.jpg","/San_Juan_del_Sur/san_juan_del_sur_4.jpg","/San_Juan_del_Sur/san_juan_del_sur_5.jpg","/San_Juan_del_Sur/san_juan_del_sur_6.jpg","/San_Juan_del_Sur/san_juan_del_sur_7.jpg"],activities:["Surfing or learning to surf on Pacific beaches","Sunbathing and beach walks at sunset","Exploring nearby beaches and coastal spots","Enjoying seafood and beachside restaurants"],restaurantsAround:[{name:"Beachside Surf Bar"},{name:"Costa Pacific Grill"}],tips:["Check tide and surf conditions if planning to surf","Use local transporte or shared shuttles if no car","Respect local customs and avoid plastic waste on beaches"]},{id:6,image:"Cerro_negro/cerro_negro_1.jpg",name:"Volcan Cerro Negro",departament:"León",rating:"5.0",time:"2h 36min (119 km) 🚘",description:`
                Volcán Cerro Negro is the youngest volcano in Central America, located near the colonial city of León. It is one of the only places in the world where you can practice volcano boarding — sliding down a live volcanic ash slope at high speed.



                🟡 HOW TO GET THERE

                🚗 From León:
                - Distance: ~20–25 km
                - Travel time: 45–60 minutes

                Transport:
                - Guided tours only (recommended): $30–70 USD
                - Includes transport, gear, guide, and safety equipment

                ⚠️ Independent travel is not recommended due to terrain and safety restrictions.



                🟡 WHAT MAKES IT UNIQUE

                Cerro Negro is:
                - A young active volcano (last major eruptions in recent decades)
                - Covered in black volcanic ash
                - Steep enough for controlled descent speeds up to 50–90 km/h (depending on conditions)



                🟡 REAL EXPERIENCE FLOW

                🥾 1. Volcano hike
                - Duration: 45–90 minutes uphill
                - Terrain: loose volcanic rock and ash
                - Difficulty: moderate-high due to heat and incline


                🛷 2. Volcano boarding descent
                - Equipment: wooden board + protective suit
                - Position: sitting or standing style
                - Speed depends on slope conditions

                This is the main attraction and one of the most adrenaline-heavy experiences in Nicaragua.


                📸 3. Summit views
                From the top, you can see:
                - Pacific coastline
                - Other volcanic ranges
                - León city in distance



                🟡 COST OF EXPERIENCE

                - Standard tour: $35–80 USD
                - Premium guided experience: $80–120 USD



                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Wearing open shoes
                Volcanic rock is sharp and unstable.

                ❌ Mistake 2: Underestimating hike difficulty
                Heat and ash make the climb more exhausting than expected.

                ❌ Mistake 3: Ignoring safety briefing
                Proper posture during descent is essential.

                ⚠️ Safety level:
                Safe when done with guides, but physically demanding.



                🟡 TRAVEL INSIGHT

                Cerro Negro is not a sightseeing destination — it is an adrenaline experience that combines geology, physics, and extreme sports in a natural environment.
                `,extraPhotos:["/Cerro_negro/cerro_negro_2.jpg","/Cerro_negro/cerro_negro_3.jpg","/Cerro_negro/cerro_negro_4.jpg","/Cerro_negro/cerro_negro_5.jpg","/Cerro_negro/cerro_negro_1.jpg","/Cerro_negro/cerro_negro_6.jpg"],activities:["Volcano boarding down the black ash slopes","Hiking up to the crater for panoramic views","Photography of dramatic volcanic landscape","Combining volcano visit with a tour to the colonial city of León"],restaurantsAround:[{name:"Hostal León Cafe",rating:"4.0"}],tips:["Wear closed shoes — ash and rocks are rough","Bring a dust mask or bandana when boarding down the volcano","Go in dry season for best visibility (avoid heavy rains)","Combine with a visit to León for more comfort and services"]},{id:7,image:"Laguna_de_perlas/laguna_de_perlas_1.jpg",name:"Laguna de Perlas",departament:"Caribbean Sea",rating:"5.0",time:"6h 49min (359 km) 🚘",description:`
                Laguna de Perlas is one of the least explored coastal destinations in Nicaragua, located on the southern Caribbean coast in the South Caribbean Autonomous Region. Unlike the Pacific tourist areas, Laguna de Perlas offers a remote Afro-Caribbean atmosphere surrounded by tropical vegetation, fishing communities, calm lagoon waters, and traditional Creole culture.

                The area feels isolated from modern tourism, which makes it especially attractive for travelers looking for authentic local experiences rather than resorts or nightlife.



                🟡 HOW TO GET THERE

                🚗 + ⛴ From Managua:

                Step 1:
                - Managua → Bluefields
                - By domestic flight: 1–1.5 hours
                - By bus: 7–9 hours

                💰 Cost:
                - Flight: $90–180 USD
                - Bus: $10–20 USD

                Step 2:
                - Bluefields → Laguna de Perlas by boat
                - Duration: 1–2 hours depending on weather and boat type

                💰 Cost:
                - Public boat: $5–15 USD
                - Private boat: $30–80 USD

                ⚠️ Important:
                Boat schedules may change due to rain, wind, or low passenger demand.



                🟡 WHAT MAKES IT UNIQUE

                Laguna de Perlas is:
                - One of the most culturally authentic Caribbean regions in Nicaragua
                - Strongly influenced by Afro-Caribbean and Creole traditions
                - Surrounded by lagoons, mangroves, and tropical rainforest
                - Relatively untouched by mass tourism

                Unlike San Juan del Sur or Granada, this region feels disconnected from commercial tourism.



                🟡 REAL EXPERIENCE FLOW

                🛶 1. Traditional boat rides through lagoon communities
                Small boats connect isolated communities along the lagoon. Traveling this way gives visitors a direct look into local fishing life and Caribbean culture.


                🐟 2. Fresh seafood experience
                Seafood is often caught the same day. Popular dishes include:
                - Coconut fish stew
                - Fried snapper
                - Rice and beans cooked in coconut milk

                💰 Meals usually range from $5–15 USD.


                🌴 3. Exploring nearby Caribbean nature
                Visitors can discover:
                - Mangrove ecosystems
                - Birdlife
                - Quiet beaches
                - Small fishing villages

                The atmosphere is slow and peaceful compared to Nicaragua’s Pacific coast.



                🟡 COST OF EXPERIENCE

                - Budget traveler: $35–70 USD/day
                - Mid-range traveler: $80–150 USD/day

                ⚠️ Luxury tourism infrastructure is limited.



                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Expecting urban infrastructure
                Internet, transportation, and electricity may be inconsistent.

                ❌ Mistake 2: Traveling without cash
                Card payments are unreliable in many places.

                ❌ Mistake 3: Ignoring weather conditions
                Heavy rain can affect transportation and lagoon navigation.

                ⚠️ Safety level:
                Generally calm and safe, but isolated travel requires planning and awareness.



                🟡 TRAVEL INSIGHT

                Laguna de Perlas is not designed for rushed tourism. It is best experienced slowly, with time to interact with local communities and adapt to Caribbean coastal life.
                `,extraPhotos:["/Laguna_de_perlas/laguna_de_perlas_3.jpg","/Laguna_de_perlas/laguna_de_perlas_2.jpg","/Laguna_de_perlas/laguna_de_perlas_1.jpg","/Laguna_de_perlas/laguna_de_perlas_4.jpg","/Laguna_de_perlas/laguna_de_perlas_5.jpg","/Laguna_de_perlas/laguna_de_perlas_6.jpg"],activities:["Boat rides along lagoons and coastal waterways","Cultural immersion with Creole and indigenous communities","Fishing or local‑style coastal experiences","Relaxing on less‑crowded coastal beaches"],restaurantsAround:[{name:"Coastline Seafood Shack",rating:"4.0"}],tips:["Respect local traditions and ask permission before entering community zones","Bring supplies — services can be limited in remote coastal areas","Travel with local guidance if unfamiliar with area access"]},{id:8,image:"La_boquita/la_boquita_1.jpg",name:"La Boquita",departament:"Carazo",rating:"4.0",time:"1h 41min (69.8 km) 🚘",description:`
                La Boquita is a small Pacific beach destination located in the department of Carazo, Nicaragua. Unlike larger surf towns, La Boquita is mostly visited by local families and domestic travelers looking for a quieter beach experience close to Managua.

                The beach combines dark volcanic sand, fishing activity, seafood restaurants, and wide Pacific Ocean views.

                ---

                🟡 HOW TO GET THERE

                🚗 From Managua:
                - Distance: ~75–90 km
                - Travel time: 1.5–2.5 hours depending on traffic

                Transport options:
                - Private vehicle (recommended)
                - Public buses via Diriamba
                - Local taxis from nearby towns

                💰 Estimated transport costs:
                - Public bus: $3–8 USD
                - Private transport: $40–90 USD round trip

                ---

                🟡 WHAT MAKES IT UNIQUE

                La Boquita is:
                - More local and less international than San Juan del Sur
                - Popular for fresh seafood and beach relaxation
                - Known for wide open beaches with fewer crowds
                - Close to fishing communities

                It feels more authentic and less commercialized than Nicaragua’s major tourist beaches.

                ---

                🟡 REAL EXPERIENCE FLOW

                🌊 1. Relaxed Pacific beach atmosphere
                The beach is ideal for:
                - Walking
                - Swimming during calm conditions
                - Watching local fishing activity
                - Family beach trips

                ---

                🦐 2. Fresh seafood restaurants
                Beachfront restaurants serve:
                - Fried fish
                - Shrimp dishes
                - Lobster (seasonal)
                - Traditional Nicaraguan coastal meals

                💰 Meals usually range from $6–20 USD.

                ---

                🌅 3. Sunset experience
                Sunsets at La Boquita are one of its strongest attractions. The wide beach creates large panoramic ocean views with strong orange and red tones during dry season evenings.

                ---

                🟡 COST OF EXPERIENCE

                - Budget visit: $20–50 USD/day
                - Mid-range stay: $60–120 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Swimming during rough tide conditions
                Pacific currents can become dangerous during strong surf.

                ❌ Mistake 2: Arriving too late
                Some restaurants close earlier than expected outside weekends.

                ❌ Mistake 3: Underestimating heat
                Shade can be limited during midday hours.

                ⚠️ Safety level:
                Generally safe during daytime tourism activity.

                ---

                🟡 TRAVEL INSIGHT

                La Boquita is best for travelers looking for a simple and local beach atmosphere rather than nightlife or luxury tourism.
                `,extraPhotos:["/La_boquita/la_boquita_4.jpg","/La_boquita/la_boquita_1.jpg","/La_boquita/la_boquita_2.jpg","/La_boquita/la_boquita_3.jpg","/La_boquita/la_boquita_5.jpg","/La_boquita/la_boquita_6.jpg"],activities:["Swimming and sunbathing on Pacific beaches","Beach walks and relaxing by the shore","Sampling fresh seafood from local vendors","Enjoying simple village‑style coastal life"],restaurantsAround:[{name:"La Boquita Beach Grill",rating:"4.1"}],tips:["Expect limited infrastructure — bring essentials","Use local transportation or shared rides to reach the village","Keep respect for local pace and avoid loud nightlife"]},{id:9,image:"Volcan_mombacho/volcan_mombacho_1.jpg",name:"Volcán Mombacho",departament:"Granada",rating:"4.5",time:"45min (≈25 km) 🚘",description:`
                Volcán Mombacho is one of Nicaragua’s most biologically important volcanoes, located near Granada. Covered in cloud forest vegetation, the volcano rises approximately 1,345 meters above sea level and offers one of the most dramatic ecological transitions in the country.

                Unlike Cerro Negro, Mombacho is not focused on adrenaline activities — it is about nature, biodiversity, volcanic landscapes, and panoramic viewpoints over Lake Nicaragua.

                ---

                🟡 HOW TO GET THERE

                🚗 From Granada:
                - Distance: ~10 km
                - Travel time: 20–35 minutes

                Transport options:
                - Organized eco-tours
                - Taxi or private car
                - Volcano shuttle truck from entrance station

                💰 Costs:
                - Entrance fee: ~$10–20 USD
                - Guided tours: $20–60 USD

                ⚠️ Important:
                Most visitors cannot drive directly to the summit without authorization due to steep terrain and conservation restrictions.

                ---

                🟡 WHAT MAKES IT UNIQUE

                Mombacho is:
                - A dormant volcano with active fumaroles
                - Covered by rare cloud forest ecosystems
                - Home to orchids, monkeys, birds, and endemic species
                - One of the coolest climates near Granada

                The volcano creates a completely different environment compared to Nicaragua’s hot lowlands.

                ---

                🟡 REAL EXPERIENCE FLOW

                🌿 1. Cloud forest hiking trails
                The summit trails pass through dense humid forest with:
                - Moss-covered trees
                - Orchids
                - Volcanic rock formations
                - Wildlife sounds

                Temperatures can feel dramatically cooler than Granada.

                ---

                🌋 2. Crater viewpoints
                Several viewpoints overlook:
                - Lake Nicaragua
                - Las Isletas
                - Granada city
                - Nearby volcanic chains

                Visibility is best during dry season mornings.

                ---

                ☁️ 3. Canopy / zipline experience
                Some private reserves near the volcano offer zipline tours through forest canopy areas.

                💰 Zipline experiences:
                - ~$25–50 USD

                ---

                🟡 COST OF EXPERIENCE

                - Budget visit: $20–40 USD
                - Full guided eco-tour: $50–120 USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Wearing hot-weather clothing only
                Temperatures at the summit are cooler and wetter.

                ❌ Mistake 2: Visiting too late in the day
                Cloud cover increases during afternoons, reducing visibility.

                ❌ Mistake 3: Ignoring trail conditions
                Trails can become muddy and slippery during rainy season.

                ⚠️ Safety level:
                Very safe and family-friendly with marked trails.

                ---

                🟡 TRAVEL INSIGHT

                Mombacho feels more like a Central American cloud forest reserve than a traditional volcano. It is one of the best destinations in Nicaragua for nature-focused travelers and photographers.
                `,extraPhotos:["/Volcan_mombacho/volcan_mombacho_1.jpg","/Volcan_mombacho/volcan_mombacho_2.jpg","/Volcan_mombacho/volcan_mombacho_3.jpg","/Volcan_mombacho/volcan_mombacho_4.jpg","/Volcan_mombacho/volcan_mombacho_5.jpg","/Volcan_mombacho/volcan_mombacho_6.jpg","/Volcan_mombacho/volcan_mombacho_7.jpg"],activities:["Hiking crater‑circling trail or more challenging ‘El Puma’ trail","Bird‑watching and exploring cloud‑forest flora","Enjoying panoramic views of Granada and Lake Nicaragua","Visiting ecological lodges or zip‑line tours (if available)"],restaurantsAround:[{name:"Mombacho Cloud Lodge Restaurant",rating:"4.5"}],tips:["Wear comfortable hiking shoes — some trails are steep","Bring rain jacket — cloud‑forest weather can be unpredictable","Hire a guide for difficult trails like ‘El Puma’","Visit early in the day for best views and avoid fog"]},{id:10,image:"Canion_somoto/canion_somoto_1.jpg",name:"Cañón de Somoto",departament:"Madriz",rating:"4.5",time:"4h 30min (≈220 km) 🚘",description:`
                Cañón de Somoto is one of Nicaragua’s most extraordinary geological formations, located in the northern department of Madriz near the Honduras border. The canyon was formed millions of years ago by tectonic and river erosion processes and remained relatively unknown internationally until recent decades.

                Today it is considered one of the country’s best adventure and eco-tourism destinations.

                ---

                🟡 HOW TO GET THERE

                🚗 From Managua:
                - Distance: ~215 km
                - Travel time: 4–5 hours

                Transport options:
                - Organized canyon tours
                - Public buses to Somoto town
                - Private vehicle

                💰 Costs:
                - Public transport: $10–20 USD
                - Guided canyon tours: $25–80 USD

                ⚠️ Important:
                Entering the canyon without a certified local guide is not recommended due to water currents and terrain complexity.

                ---

                🟡 WHAT MAKES IT UNIQUE

                The canyon is:
                - One of the oldest geological formations in Central America
                - Formed by dramatic rock walls and river systems
                - A combination of hiking, swimming, floating, and cliff environments

                Unlike beaches or volcanoes, this is a river adventure ecosystem.

                ---

                🟡 REAL EXPERIENCE FLOW

                🛶 1. River floating through canyon walls
                Visitors float through narrow rock corridors with cliffs rising dozens of meters overhead.

                Water depth changes constantly, creating sections for:
                - Swimming
                - Floating
                - Walking through shallow river areas

                ---

                🧗 2. Cliff jumping zones
                Some tours include controlled cliff jumps into deep river pools.

                ⚠️ Participation is optional and depends on water conditions.

                ---

                🥾 3. Canyon trekking
                Sections of the route require walking on:
                - Wet rocks
                - Riverbanks
                - Narrow canyon paths

                Waterproof footwear is highly recommended.

                ---

                🟡 COST OF EXPERIENCE

                - Budget experience: $25–50 USD
                - Full private tour: $70–150 USD

                Most tours include:
                - Guide
                - Life jacket
                - Transportation
                - Meals or snacks

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Using poor footwear
                Slippery rocks are one of the biggest hazards.

                ❌ Mistake 2: Visiting during extreme rainy conditions
                Strong currents may increase risk significantly.

                ❌ Mistake 3: Bringing unprotected electronics
                Water exposure is unavoidable.

                ⚠️ Safety level:
                Safe with guides, but physically active and water-based.

                ---

                🟡 TRAVEL INSIGHT

                Somoto Canyon is one of the most underrated adventure experiences in Central America and feels completely different from Nicaragua’s volcanic and coastal destinations.
                `,extraPhotos:["/Canion_somoto/canion_somoto_1.jpg","/Canion_somoto/canion_somoto_2.jpg","/Canion_somoto/canion_somoto_3.jpg","/Canion_somoto/canion_somoto_4.jpg","/Canion_somoto/canion_somoto_5.jpg","/Canion_somoto/canion_somoto_6.jpg"],activities:["Hiking along canyon trails and rock formations","Swimming in river pools and natural water holes","Exploring canyon walls and nature photography","Guided tours with local guides to learn about geology and local ecology"],restaurantsAround:[{name:"Somoto Local Eatery",rating:"4.0"}],tips:["Go with a local guide for safety and local knowledge","Wear water‑compatible shoes for river and rocky terrain","Bring water and supplies — remote area with limited services","Avoid rainy season to reduce risk of strong currents"]},{id:11,image:"Laguna_apoyo/laguna_apoyo_1.jpg",name:"Laguna de Apoyo",departament:"Masaya",rating:"4.0",time:"50min (≈30 km) 🚘",description:`
                Laguna de Apoyo is a volcanic crater lake located between Granada and Masaya. Formed thousands of years ago by volcanic collapse, the lagoon is now one of the cleanest freshwater bodies in Nicaragua and one of the country’s most peaceful eco-tourism destinations.

                Surrounded by forested crater walls, the lagoon creates a calm microclimate ideal for relaxation, kayaking, swimming, and nature escapes.

                ---

                🟡 HOW TO GET THERE

                🚗 From Granada:
                - Travel time: 20–30 minutes

                🚗 From Managua:
                - Travel time: 1–1.5 hours

                Transport options:
                - Taxi or rental car
                - Day tours
                - Shuttle services

                💰 Estimated costs:
                - Shuttle/taxi: $10–40 USD
                - Day pass resorts: $10–25 USD

                ---

                🟡 WHAT MAKES IT UNIQUE

                Laguna de Apoyo is:
                - A volcanic crater lake
                - Freshwater with naturally warm temperatures
                - Surrounded by tropical dry forest
                - One of Nicaragua’s most relaxing destinations

                Unlike Pacific beaches, the lagoon water is usually calm year-round.

                ---

                🟡 REAL EXPERIENCE FLOW

                🏊 1. Swimming in volcanic freshwater
                The lake water remains warm and calm, making it ideal for long swimming sessions.

                ---

                🛶 2. Kayaking and paddleboarding
                The lagoon’s calm conditions make it excellent for:
                - Beginner kayaking
                - Paddleboarding
                - Relaxed water exploration

                💰 Rentals:
                - ~$5–20 USD/hour

                ---

                🌿 3. Forest and wildlife atmosphere
                The surrounding crater forest contains:
                - Birds
                - Monkeys
                - Reptiles
                - Tropical vegetation

                The environment feels isolated despite being close to major cities.

                ---

                🟡 COST OF EXPERIENCE

                - Budget day trip: $20–50 USD
                - Eco-lodge stay: $70–200 USD/night

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Visiting only for a few hours
                Many travelers underestimate how relaxing the lagoon environment is.

                ❌ Mistake 2: Ignoring sun exposure on the water
                Reflection from the lake increases UV intensity.

                ❌ Mistake 3: Expecting nightlife
                The area is focused on relaxation and eco-tourism.

                ⚠️ Safety level:
                Very safe and suitable for families.

                ---

                🟡 TRAVEL INSIGHT

                Laguna de Apoyo is one of the best “slow travel” destinations in Nicaragua — a place where people come to disconnect, rest, and spend time in nature.
                `,extraPhotos:["/Laguna_apoyo/laguna_apoyo_6.jpg","/Laguna_apoyo/laguna_apoyo_2.jpg","/Laguna_apoyo/laguna_apoyo_3.jpg","/Laguna_apoyo/laguna_apoyo_4.jpg","/Laguna_apoyo/laguna_apoyo_5.jpg","/Laguna_apoyo/laguna_apoyo_1.jpg"],activities:["Swimming and kayaking in the crater lake","Hiking along forest trails and viewpoints","Bird watching and wildlife photography","Relaxing at eco-lodges or lakeside picnic areas"],restaurantsAround:[{name:"Laguna Cafe & Grill",rating:"4.3"},{name:"Mirador Restaurant",rating:"4.5"},{name:"Apoyo Lakeside Bistro",rating:"4.2"}],tips:["Bring a swimsuit and towel for swimming","Use eco-friendly sunscreen to protect the lake ecosystem","Plan for early morning visits to avoid crowds","Hire a local guide for nature and wildlife tours"]},{id:12,image:"El_chocoyero/el_chocoyero_1.jpg",name:"El Chocoyero",departament:"Managua",rating:"4.0",time:"25min (≈15 km) 🚘",description:`
                El Chocoyero Natural Reserve is a protected forest reserve located near Managua, famous for its waterfalls, tropical forest ecosystem, and populations of green Pacific parakeets known locally as “chocoyos.”

                Despite being close to the capital city, the reserve feels surprisingly remote and natural.

                ---

                🟡 HOW TO GET THERE

                🚗 From Managua:
                - Distance: ~25–35 km
                - Travel time: 45–90 minutes depending on road conditions

                Transport options:
                - Private car
                - Guided eco-tour
                - Taxi + short hike access

                💰 Estimated costs:
                - Entrance fee: ~$5–10 USD
                - Guided tours: $20–60 USD

                ⚠️ Some roads near the reserve may become muddy during rainy season.

                ---

                🟡 WHAT MAKES IT UNIQUE

                El Chocoyero is:
                - One of the closest nature reserves to Managua
                - Home to waterfalls and tropical forest
                - Known for thousands of nesting green parakeets
                - A combination of birdwatching and short jungle hiking

                ---

                🟡 REAL EXPERIENCE FLOW

                🌿 1. Forest hiking trails
                The trails pass through:
                - Dense vegetation
                - Humid forest
                - Small streams
                - Wildlife habitats

                ---

                🦜 2. Chocoyo parakeet observation
                At certain times of day, visitors can observe groups of green parakeets flying around the cliffs and nesting zones.

                ---

                💧 3. Waterfall exploration
                The reserve contains small waterfalls and natural water areas surrounded by tropical vegetation.

                The sound of birds and flowing water dominates the environment.

                ---

                🟡 COST OF EXPERIENCE

                - Budget visit: $10–30 USD
                - Guided eco-tour: $40–80 USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Wearing improper footwear
                Trails can become slippery after rain.

                ❌ Mistake 2: Visiting during midday heat
                Morning visits offer better wildlife activity and cooler temperatures.

                ❌ Mistake 3: Expecting a commercial tourist attraction
                The reserve is focused on conservation and nature.

                ⚠️ Safety level:
                Very safe for eco-tourism and family visits.

                ---

                🟡 TRAVEL INSIGHT

                El Chocoyero is one of the easiest ways to experience tropical forest ecosystems near Managua without long travel distances. It feels more like a hidden ecological retreat than a tourist attraction.
                `,extraPhotos:["/El_chocoyero/el_chocoyero_2.jpg","/El_chocoyero/el_chocoyero_3.jpg","/El_chocoyero/el_chocoyero_4.jpg","/El_chocoyero/el_chocoyero_5.jpg","/El_chocoyero/el_chocoyero_6.jpg"],activities:["Hiking to waterfalls and viewpoints","Bird watching and observing parakeets","Photography of forest landscapes","Picnicking in shaded areas"],restaurantsAround:[{name:"Chocoyero Eco Cafe",rating:"4.0"},{name:"Managua Nature Bistro",rating:"4.1"}],tips:["Wear comfortable shoes for slippery trails","Bring water and insect repellent","Visit early to see parakeets and avoid crowds","Respect local wildlife and avoid loud noises"]},{id:13,image:"Cuidad_leon/leon_1.jpg",name:"Ciudad León",departament:"León",rating:"4.5",time:"1h 35min (≈96 km) 🚘",description:`
                León is one of the most historically and culturally important cities in Nicaragua. Located in the western region of the country, León is known for its colonial architecture, political history, student culture, volcanoes, and strong artistic identity.

                Unlike Granada, which feels more polished and tourist-oriented, León has a more authentic and energetic atmosphere shaped by universities, local markets, revolutionary history, and nearby volcanic landscapes.

                The city is also considered one of the best bases in Nicaragua for adventure tourism because of its proximity to Cerro Negro, volcanoes, Pacific beaches, and natural reserves.

                ---

                🟡 HOW TO GET THERE

                🚗 From Managua:
                - Distance: ~90 km
                - Travel time: 1.5–2.5 hours depending on traffic

                Transport options:
                - Public bus from Managua terminals
                - Shuttle services
                - Rental car
                - Private taxi

                💰 Estimated costs:
                - Public bus: $3–8 USD
                - Shuttle: $15–30 USD
                - Private transport: $70–120 USD

                ⚠️ Roads are generally in good condition, but traffic entering León can slow down during weekends and holidays.

                ---

                🟡 WHAT MAKES LEÓN UNIQUE

                León is:
                - One of the oldest colonial cities in Central America
                - Home to Nicaragua’s largest cathedral
                - A center of political and revolutionary history
                - Strongly connected to art, poetry, and student life

                The city combines:
                - Colonial architecture
                - Street food culture
                - Active nightlife
                - Volcano tourism
                - Museums and rooftop viewpoints

                Unlike beach destinations, León feels alive almost all day.

                ---

                🟡 REAL EXPERIENCE FLOW

                ⛪ 1. León Cathedral rooftop experience
                The white rooftop of León Cathedral is one of the most iconic viewpoints in Nicaragua.

                Visitors walk across bright white domes with panoramic views of:
                - The city
                - Volcanic chains
                - Surrounding mountains

                💰 Entrance:
                - ~$3–10 USD

                ⚠️ Midday heat can be intense because of reflective white surfaces.

                ---

                🌋 2. Volcano adventure base
                León is the main departure city for:
                - Cerro Negro volcano boarding
                - Telica volcano hikes
                - Momotombo area tours

                Many travelers stay in León specifically for volcanic adventures.

                ---

                🎨 3. Museums and political history
                León contains:
                - Revolutionary museums
                - Art galleries
                - Historical churches
                - Cultural centers

                The city played a major role in Nicaragua’s modern political history.

                ---

                🌮 4. Local food and nightlife
                León has:
                - Street food zones
                - Local markets
                - Rooftop bars
                - Student nightlife

                Popular dishes include:
                - Quesillos
                - Nacatamales
                - Grilled meats
                - Local seafood from nearby coast

                💰 Meals:
                - Budget: $3–8 USD
                - Mid-range: $10–25 USD

                ---

                🟡 COST OF EXPERIENCE

                - Budget traveler: $25–60 USD/day
                - Mid-range traveler: $70–150 USD/day
                - Comfortable stay: $180+ USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Underestimating heat
                León is one of Nicaragua’s hottest major cities.

                ❌ Mistake 2: Walking long distances midday
                Heat and sun exposure can become exhausting.

                ❌ Mistake 3: Rushing the city
                Many travelers only stay one night despite León having extensive cultural and natural attractions.

                ⚠️ Safety level:
                Generally safe in tourist zones with normal urban precautions.

                ---

                🟡 TRAVEL INSIGHT

                León is one of the few destinations in Nicaragua where colonial history, nightlife, volcanoes, politics, and adventure tourism all exist in the same place. It feels less commercialized than Granada and more connected to everyday Nicaraguan life.
                `,extraPhotos:["/Cuidad_leon/leon_1.jpg","/Cuidad_leon/leon_2.jpg","/Cuidad_leon/leon_3.jpg","/Cuidad_leon/leon_4.jpg","/Cuidad_leon/leon_5.jpg","/Cuidad_leon/leon_6.jpg"],activities:["Visiting León Cathedral and museums","Exploring historic streets and murals","Day trips to Cerro Negro and Momotombo volcanoes","Sampling traditional Nicaraguan food in local markets"],restaurantsAround:[{name:"El Sesteo",rating:"4.5"},{name:"Cafe Catrina",rating:"4.3"},{name:"La Casa del Chocolate",rating:"4.4"}],tips:["Carry local currency for street vendors and small shops","Wear comfortable shoes for walking colonial streets","Hire a guide to explore historical landmarks","Try local dishes like vigorón and nacatamales"]},{id:14,image:"Momotombo/momotombo_1.jpg",name:"Volcán Momotombo",departament:"León",rating:"4.0",time:"1h 40min (≈103 km) 🚘",description:`
                Volcán Momotombo is one of Nicaragua’s most recognizable volcanoes, famous for its near-perfect cone shape rising beside Lake Managua. Located near León and the municipality of La Paz Centro, Momotombo has become one of the country’s most iconic natural landmarks and an important symbol in Nicaraguan history and art.

                The volcano stands approximately 1,297 meters above sea level and remains volcanically active.

                ---

                🟡 HOW TO GET THERE

                🚗 From León:
                - Distance: ~45–55 km
                - Travel time: 1–1.5 hours

                🚗 From Managua:
                - Travel time: ~2 hours

                Transport options:
                - Guided volcano tours
                - Private vehicle
                - Adventure tour agencies

                💰 Estimated costs:
                - Guided hikes: $40–120 USD
                - Private transport: varies by group size

                ⚠️ Independent hiking is strongly discouraged due to volcanic terrain and guide requirements.

                ---

                🟡 WHAT MAKES MOMOTOMBO UNIQUE

                Momotombo is:
                - One of Nicaragua’s most photogenic volcanoes
                - Historically feared for eruptions
                - Visually dominant near Lake Managua
                - Known for difficult summit ascents

                Its perfect cone shape makes it one of the most recognizable volcanoes in Central America.

                ---

                🟡 REAL EXPERIENCE FLOW

                🥾 1. Summit hiking expedition
                The hike is physically demanding and typically starts before sunrise.

                Conditions include:
                - Loose volcanic rock
                - Intense heat
                - Steep inclines
                - Strong sun exposure

                Duration:
                - 6–10 hours round trip depending on conditions

                Difficulty:
                - High

                ---

                🌋 2. Volcanic landscape experience
                The terrain changes dramatically during ascent:
                - Dry vegetation
                - Lava rock fields
                - Ash-covered areas
                - Open panoramic ridges

                The environment feels harsh and exposed compared to cloud forest volcanoes like Mombacho.

                ---

                📸 3. Summit panoramic views
                On clear days, visitors can see:
                - Lake Managua
                - León volcanic chain
                - Pacific plains
                - Nearby volcanoes

                Visibility depends heavily on weather and volcanic activity.

                ---

                🟡 COST OF EXPERIENCE

                - Standard guided hike: $40–80 USD
                - Private adventure experience: $100–200 USD

                Most tours include:
                - Transportation
                - Guide
                - Safety briefing
                - Basic equipment

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Underestimating physical difficulty
                Momotombo is significantly harder than many travelers expect.

                ❌ Mistake 2: Bringing insufficient water
                Heat exposure is severe during dry season.

                ❌ Mistake 3: Attempting independent ascent
                Navigation and volcanic conditions can become dangerous.

                ⚠️ Safety level:
                Safe with experienced guides, but physically demanding.

                ---

                🟡 TRAVEL INSIGHT

                Momotombo is less about comfort and more about challenge. The experience feels raw, volcanic, and physically intense — ideal for travelers seeking demanding outdoor adventures rather than casual sightseeing.
                `,extraPhotos:["/Momotombo/momotombo_1.jpg","/Momotombo/momotombo_2.jpg","/Momotombo/momotombo_3.jpg","/Momotombo/momotombo_4.jpg","/Momotombo/momotombo_5.jpg"],activities:["Hiking to the summit for panoramic views","Photography of volcanic landscapes and lava flows","Exploring nearby villages and volcanic trails","Guided tours focusing on geology and eruption history"],restaurantsAround:[{name:"Momotombo Lodge Restaurant",rating:"4.2"},{name:"La Casona León",rating:"4.3"}],tips:["Wear sturdy hiking shoes and sun protection","Bring water and snacks for the climb","Hire a local guide for safe trekking","Avoid climbing during rainy season for safety"]},{id:15,image:"Las_penitas/las_penitas_1.jpg",name:"Las Peñitas",departament:"León",rating:"4.0",time:"1h 50min (≈110 km) 🚘",description:`
                Las Peñitas is a relaxed Pacific beach town located near León, Nicaragua. Originally a small fishing community, it has slowly developed into one of the country’s most popular surf and backpacker destinations while still maintaining a quieter atmosphere than larger beach towns like San Juan del Sur.

                The beach is known for:
                - Long dark-sand coastlines
                - Strong Pacific sunsets
                - Surf culture
                - Fresh seafood
                - A slower and more local atmosphere

                ---

                🟡 HOW TO GET THERE

                🚗 From León:
                - Distance: ~20 km
                - Travel time: 30–45 minutes

                Transport options:
                - Shuttle vans
                - Public bus
                - Taxi
                - Rental scooter or motorcycle

                💰 Estimated costs:
                - Public bus: $1–3 USD
                - Taxi: $15–30 USD
                - Shuttle: $5–15 USD

                ---

                🟡 WHAT MAKES LAS PEÑITAS UNIQUE

                Las Peñitas is:
                - One of the easiest beach escapes from León
                - Popular among surfers and backpackers
                - Less commercialized than major resort destinations
                - Known for strong sunsets and relaxed beach bars

                The atmosphere is casual and social without feeling heavily urbanized.

                ---

                🟡 REAL EXPERIENCE FLOW

                🏄 1. Surfing and beginner lessons
                The beach offers:
                - Consistent Pacific waves
                - Surf schools
                - Board rentals
                - Beginner-friendly zones depending on tide

                💰 Surf lessons:
                - ~$15–40 USD

                ---

                🌅 2. Sunset beach culture
                Sunset is the social highlight of the day.

                Visitors gather at:
                - Beach bars
                - Hostels
                - Oceanfront restaurants

                The sky often produces strong orange and red Pacific sunsets during dry season.

                ---

                🛶 3. Juan Venado Nature Reserve tours
                Nearby boat tours explore:
                - Mangroves
                - Wildlife
                - Birds
                - Crocodile habitats

                This adds an eco-tourism element beyond surfing.

                💰 Tours:
                - ~$20–50 USD

                ---

                🟡 COST OF EXPERIENCE

                - Budget traveler: $20–60 USD/day
                - Mid-range traveler: $70–140 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Ignoring ocean currents
                Pacific rip currents can become dangerous.

                ❌ Mistake 2: Visiting only during midday
                The beach experience is best during mornings and sunset.

                ❌ Mistake 3: Expecting luxury infrastructure
                Las Peñitas remains relatively simple and laid back.

                ⚠️ Safety level:
                Generally safe in tourist areas with standard precautions.

                ---

                🟡 TRAVEL INSIGHT

                Las Peñitas is best experienced slowly — surfing, watching sunsets, eating seafood, and spending time near the ocean rather than rushing between activities.
                `,extraPhotos:["/Las_penitas/las_penitas_1.jpg","/Las_penitas/las_penitas_2.jpg","/Las_penitas/las_penitas_3.jpg","/Las_penitas/las_penitas_4.jpg","/Las_penitas/las_penitas_5.jpg","/Las_penitas/las_penitas_6.jpg"],activities:["Surfing and beach sports","Sunbathing and long beach walks","Relaxing in local cafes and beachfront bars","Enjoying sunset views and photography"],restaurantsAround:[{name:"Las Peñitas Surf Cafe",rating:"4.3"},{name:"El Timon Restaurant",rating:"4.1"}],tips:["Bring cash, few ATMs are available","Respect local surf etiquette","Stay hydrated and protect from sun","Evening walks offer picturesque sunsets"]},{id:16,image:"Poneloya/poneloya_1.jpg",name:"Poneloya",departament:"León",rating:"4.0",time:"1h 50min (≈110 km) 🚘",description:`
                Poneloya is a historic Pacific beach destination located near León, Nicaragua. Compared to Las Peñitas, Poneloya has a more traditional local atmosphere and has long been popular among Nicaraguan families during holidays and weekends.

                The beach is wide, windy, and strongly connected to local coastal culture rather than international tourism.

                ---

                🟡 HOW TO GET THERE

                🚗 From León:
                - Distance: ~18–22 km
                - Travel time: 30–45 minutes

                Transport options:
                - Public bus
                - Taxi
                - Private vehicle

                💰 Estimated costs:
                - Public bus: $1–3 USD
                - Taxi: $15–30 USD

                ---

                🟡 WHAT MAKES PONELOYA UNIQUE

                Poneloya is:
                - More local than international
                - Historically important as a beach escape for León residents
                - Known for dramatic Pacific sunsets
                - Connected to traditional beach culture and seafood cuisine

                The beach feels more residential and family-oriented than backpacker-focused.

                ---

                🟡 REAL EXPERIENCE FLOW

                🌊 1. Long Pacific beach walks
                Poneloya’s coastline stretches for long distances with:
                - Open ocean views
                - Strong sea breeze
                - Fishing activity
                - Fewer crowds outside holidays

                ---

                🍤 2. Traditional seafood restaurants
                The area is known for:
                - Fried fish
                - Shrimp dishes
                - Coastal soups
                - Coconut-based seafood meals

                💰 Typical meal:
                - ~$5–20 USD

                ---

                🌅 3. Sunset atmosphere
                Sunsets are one of the strongest reasons people visit Poneloya.

                Dry season evenings often produce:
                - Intense orange skies
                - Clear horizon views
                - Cooler evening temperatures

                ---

                🟡 COST OF EXPERIENCE

                - Budget visit: $15–40 USD/day
                - Comfortable beach stay: $60–140 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Swimming during dangerous surf
                Currents can become strong unexpectedly.

                ❌ Mistake 2: Visiting only during national holidays
                The beach can become crowded during Semana Santa and major celebrations.

                ❌ Mistake 3: Underestimating afternoon heat
                Shade availability may be limited.

                ⚠️ Safety level:
                Generally safe with normal beach precautions.

                ---

                🟡 TRAVEL INSIGHT

                Poneloya is not about nightlife or luxury tourism. It is more about experiencing traditional Pacific beach life the way many Nicaraguan families have for generations.
                `,extraPhotos:["/Poneloya/poneloya_1.jpg","/Poneloya/poneloya_2.jpg","/Poneloya/poneloya_3.jpg","/Poneloya/poneloya_4.jpg","/Poneloya/poneloya_5.jpg","/Poneloya/poneloya_6.jpg"],activities:["Swimming in Pacific waters","Jogging or walking along the beach","Seafood tasting in local restaurants","Relaxing and enjoying ocean sunsets"],restaurantsAround:[{name:"Poneloya Beach Grill",rating:"4.2"},{name:"Mar y Sol Seafood",rating:"4.3"}],tips:["Carry cash for small local eateries","Sun protection is essential","Go early to secure beach spots","Respect local fishing practices and culture"]},{id:17,image:"Mirador_catarina/mirador_catarina_1.jpg",name:"Mirador de Catarina",departament:"Masaya",rating:"4.0",time:"1h (≈50 km) 🚘",description:`
                Mirador de Catarina is one of the most famous scenic viewpoints in Nicaragua, located in the department of Masaya near Laguna de Apoyo. The viewpoint sits at elevated terrain overlooking the volcanic crater lagoon and surrounding forests, making it one of the country’s most photographed panoramic locations.

                The area is also known for handicrafts, local markets, gardens, and restaurants with open-air viewpoints.

                ---

                🟡 HOW TO GET THERE

                🚗 From Granada:
                - Travel time: 30–45 minutes

                🚗 From Managua:
                - Travel time: 1–1.5 hours

                Transport options:
                - Day tours
                - Public bus
                - Taxi
                - Rental car

                💰 Estimated costs:
                - Public bus: $2–6 USD
                - Taxi/private transport: $20–60 USD

                ---

                🟡 WHAT MAKES IT UNIQUE

                Mirador de Catarina offers:
                - One of the best panoramic views in Nicaragua
                - Elevated views of Laguna de Apoyo
                - Cooler mountain climate
                - Artisan markets and local restaurants

                Unlike volcano hikes, this destination is easily accessible for all ages.

                ---

                🟡 REAL EXPERIENCE FLOW

                📸 1. Panoramic crater views
                The main attraction is the elevated observation area overlooking:
                - Laguna de Apoyo
                - Forested crater walls
                - Nearby volcanoes
                - Surrounding countryside

                Visibility is often best during morning hours.

                ---

                🛍 2. Artisan markets
                The town surrounding the viewpoint is known for:
                - Handcrafted souvenirs
                - Ceramics
                - Plants and flowers
                - Traditional Nicaraguan crafts

                ---

                🍽 3. Scenic restaurants
                Several restaurants are positioned directly along the viewpoint edge, allowing visitors to eat while overlooking the lagoon.

                💰 Meals:
                - ~$6–25 USD

                ---

                🟡 COST OF EXPERIENCE

                - Budget visit: $10–30 USD
                - Full day trip with food and transport: $40–100 USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Visiting during cloudy afternoons
                Cloud cover may reduce visibility.

                ❌ Mistake 2: Spending too little time
                Many travelers rush the viewpoint without exploring Catarina town itself.

                ❌ Mistake 3: Ignoring weather changes
                Rain and fog can appear quickly during rainy season.

                ⚠️ Safety level:
                Very safe and family-friendly.

                ---

                🟡 TRAVEL INSIGHT

                Mirador de Catarina is less about physical adventure and more about scenery, relaxation, and enjoying one of the most visually impressive landscapes in Nicaragua.
                `,extraPhotos:["/Mirador_catarina/mirador_catarina_1.jpg","/Mirador_catarina/mirador_catarina_2.jpg","/Mirador_catarina/mirador_catarina_3.jpg","/Mirador_catarina/mirador_catarina_4.jpg","/Mirador_catarina/mirador_catarina_5.jpg","/Mirador_catarina/mirador_catarina_6.jpg"],activities:["Sightseeing and photography of Apoyo Lagoon","Shopping for local handicrafts at the viewpoint market","Picnicking while enjoying panoramic views","Short hikes in surrounding natural trails"],restaurantsAround:[{name:"Mirador Cafe",rating:"4.2"},{name:"Catarina Restaurant",rating:"4.0"}],tips:["Visit in the morning or late afternoon for best light","Carry local currency for handicrafts","Wear comfortable shoes for walking around viewpoint","Respect local vendors and follow market rules"]},{id:18,image:"Selva_negra/selva_negra_1.jpg",name:"Selva Negra",departament:"Matagalpa",rating:"4.5",time:"3h 45min (≈210 km) 🚘",description:`
                Selva Negra is one of Nicaragua’s most unique eco-tourism destinations, located in the highlands of Matagalpa. Originally established as a coffee estate by German immigrants, Selva Negra combines cloud forest ecosystems, sustainable tourism, coffee production, mountain climate, and wildlife conservation.

                The area feels dramatically different from Nicaragua’s Pacific coast because of its cool temperatures, misty forests, and mountain landscapes.

                ---

                🟡 HOW TO GET THERE

                🚗 From Matagalpa city:
                - Distance: ~15–20 km
                - Travel time: 30–45 minutes

                🚗 From Managua:
                - Travel time: 3–4 hours

                Transport options:
                - Rental car
                - Shuttle
                - Guided eco-tour

                💰 Estimated costs:
                - Shared transport: $10–30 USD
                - Private transport: varies

                ⚠️ Mountain roads may become foggy or slippery during rainy season.

                ---

                🟡 WHAT MAKES SELVA NEGRA UNIQUE

                Selva Negra is:
                - A functioning coffee plantation
                - A cloud forest reserve
                - One of Nicaragua’s coolest climates
                - Home to extensive birdlife and hiking trails

                The destination combines:
                - Eco-tourism
                - Sustainable farming
                - Forest conservation
                - Rural mountain culture

                ---

                🟡 REAL EXPERIENCE FLOW

                ☕ 1. Coffee plantation tours
                Visitors learn:
                - Coffee cultivation process
                - Drying and roasting techniques
                - Sustainable agricultural practices

                Coffee tastings are usually included.

                💰 Tours:
                - ~$10–30 USD

                ---

                🌿 2. Cloud forest hiking
                The reserve contains:
                - Forest trails
                - Wildlife observation points
                - Suspension bridges
                - Mist-covered vegetation

                Common wildlife includes:
                - Birds
                - Monkeys
                - Butterflies
                - Reptiles

                ---

                🐦 3. Birdwatching experience
                Selva Negra is considered one of the best birdwatching areas in Nicaragua due to its elevation and protected forest ecosystem.

                ---

                🟡 COST OF EXPERIENCE

                - Budget eco-visit: $20–50 USD
                - Lodge stay: $80–250 USD/night

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Packing only hot-weather clothing
                Temperatures can become surprisingly cold at night.

                ❌ Mistake 2: Visiting without insect protection
                Mountain forests contain mosquitoes and insects.

                ❌ Mistake 3: Rushing the experience
                Selva Negra is best enjoyed slowly over multiple days.

                ⚠️ Safety level:
                Very safe and ideal for eco-tourism.

                ---

                🟡 TRAVEL INSIGHT

                Selva Negra feels completely different from the stereotypical image of Nicaragua. Instead of beaches and heat, travelers find cool forests, mountain silence, coffee culture, and one of the country’s strongest eco-tourism experiences.
                `,extraPhotos:["/Selva_negra/selva_negra_1.jpg","/Selva_negra/selva_negra_2.jpg","/Selva_negra/selva_negra_3.jpg","/Selva_negra/selva_negra_4.jpg","/Selva_negra/selva_negra_5.jpg","/Selva_negra/selva_negra_6.jpg"],activities:["Hiking and exploring cloud forest trails","Bird watching and wildlife spotting","Guided coffee plantation tours","Zip-lining and canopy tours"],restaurantsAround:[{name:"Selva Negra Lodge Restaurant",rating:"4.6"},{name:"Cloud Forest Cafe",rating:"4.4"}],tips:["Book guided tours for coffee and nature experiences","Wear layered clothing due to cooler mountain climate","Bring binoculars for bird watching","Check weather forecasts before planning hikes"]},{id:19,image:"Cuidad_esteli/esteli_1.jpg",name:"Cuidad Estelí",departament:"Estelí",rating:"4.0",time:"3h 50min (≈215 km) 🚘",description:`
                Estelí is one of the most important cities in northern Nicaragua, known for its mountain climate, cigar industry, art culture, and strong connection to eco-tourism. Located in a valley surrounded by highlands and forests, Estelí feels very different from Nicaragua’s coastal regions.

                The city has developed into a major center for:
                - Tobacco production
                - Nature tourism
                - Hiking
                - Coffee culture
                - Local gastronomy

                Unlike Granada or León, Estelí has a more modern and local atmosphere focused on mountain life and outdoor activities.

                ---

                🟡 HOW TO GET THERE

                🚗 From Managua:
                - Distance: ~150 km
                - Travel time: 2.5–3.5 hours

                Transport options:
                - Public bus
                - Shuttle services
                - Private vehicle

                💰 Estimated costs:
                - Public bus: $5–12 USD
                - Shuttle: $20–40 USD

                Road conditions are generally good, although mountain fog may appear during rainy season.

                ---

                🟡 WHAT MAKES ESTELÍ UNIQUE

                Estelí is:
                - Nicaragua’s cigar capital
                - A gateway to mountain reserves and waterfalls
                - Known for murals and street art
                - Cooler than Pacific regions

                The city combines urban services with easy access to nature.

                ---

                🟡 REAL EXPERIENCE FLOW

                🚬 1. Cigar factory tours
                Visitors can observe:
                - Hand-rolled cigar production
                - Tobacco preparation
                - Aging and packaging processes

                Premium cigar experiences often include tastings.

                💰 Tours:
                - ~$10–40 USD

                ---

                🌿 2. Nature reserve exploration
                Nearby attractions include:
                - Waterfalls
                - Forest reserves
                - Hiking trails
                - Birdwatching zones

                Many eco-destinations are within short driving distance.

                ---

                🍽 3. Northern Nicaraguan gastronomy
                Estelí is known for:
                - Grilled meats
                - Fresh cheeses
                - Traditional soups
                - Mountain coffee

                Meals are generally affordable compared to tourist-heavy cities.

                ---

                🟡 COST OF EXPERIENCE

                - Budget traveler: $25–60 USD/day
                - Mid-range traveler: $70–140 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Skipping nearby nature areas
                Many travelers stay only in the city center.

                ❌ Mistake 2: Underestimating colder nights
                Temperatures can drop significantly compared to Managua.

                ❌ Mistake 3: Rushing through Estelí
                The surrounding mountain region is the main attraction.

                ⚠️ Safety level:
                Generally safe with normal urban precautions.

                ---

                🟡 TRAVEL INSIGHT

                Estelí is one of Nicaragua’s most balanced destinations for travelers who want both urban comfort and easy access to mountains, forests, and rural tourism.
                `,extraPhotos:["/Cuidad_esteli/esteli_1.jpg","/Cuidad_esteli/esteli_2.jpg","/Cuidad_esteli/esteli_3.jpg","/Cuidad_esteli/esteli_4.jpg","/Cuidad_esteli/esteli_5.jpg","/Cuidad_esteli/esteli_6.jpg"],activities:["Visiting cigar factories and learning about production","Exploring textile workshops and local artisan markets","Hiking in nearby natural reserves","Photography of cityscapes and surrounding landscapes"],restaurantsAround:[{name:"Cafe Estelí",rating:"4.3"},{name:"La Terraza",rating:"4.4"}],tips:["Plan visits to cigar and artisan workshops ahead","Carry local currency for small purchases","Use sun protection for daytime outdoor activities","Hire a guide for hiking trails in natural reserves"]},{id:20,image:"Reserva_la_makina/la_makina_1.jpg",name:"Reserva La Máquina",departament:"Carazo",rating:"3.5",time:"1h 10min (≈60 km) 🚘",description:`
                Reserva La Máquina is a lesser-known eco-tourism destination in northern Nicaragua, valued for its mountain scenery, forest ecosystems, rivers, and peaceful rural atmosphere. The reserve attracts travelers looking for quiet natural environments away from heavily commercialized tourism.

                The area is characterized by:
                - Dense vegetation
                - Mountain landscapes
                - Wildlife habitats
                - Rural eco-tourism experiences

                ---

                🟡 HOW TO GET THERE

                🚗 Access usually depends on nearby towns and local guides.

                From Estelí or surrounding northern regions:
                - Travel time varies between 1–3 hours depending on road conditions

                Transport options:
                - Private vehicle
                - Guided eco-tour
                - Local transportation + hiking access

                ⚠️ Some roads may become difficult during rainy season.

                ---

                🟡 WHAT MAKES IT UNIQUE

                Reserva La Máquina is:
                - Quiet and minimally commercialized
                - Focused on ecological conservation
                - Surrounded by mountain environments
                - Ideal for hikers and nature-focused travelers

                Unlike major tourist destinations, the reserve feels isolated and highly natural.

                ---

                🟡 REAL EXPERIENCE FLOW

                🌿 1. Forest hiking trails
                Visitors explore:
                - Forest paths
                - River crossings
                - Wildlife observation areas
                - Elevated viewpoints

                ---

                🐦 2. Wildlife and birdwatching
                The reserve supports:
                - Tropical birds
                - Small mammals
                - Insects and reptiles
                - Native vegetation ecosystems

                ---

                🏞 3. Rural eco-tourism atmosphere
                Travelers often experience:
                - Silence
                - Mountain climate
                - Traditional rural communities
                - Limited tourism infrastructure

                ---

                🟡 COST OF EXPERIENCE

                - Budget eco-trip: $15–40 USD
                - Guided experience: $40–100 USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Visiting without local information
                Road and trail conditions may change seasonally.

                ❌ Mistake 2: Bringing insufficient supplies
                Services can be very limited.

                ❌ Mistake 3: Expecting commercial tourism
                The reserve focuses on nature rather than entertainment.

                ⚠️ Safety level:
                Safe with preparation and local guidance.

                ---

                🟡 TRAVEL INSIGHT

                Reserva La Máquina is best for travelers seeking quiet eco-tourism experiences far from crowds and urban tourism infrastructure.
                `,extraPhotos:["/Reserva_la_makina/la_makina_5.jpg","/Reserva_la_makina/la_makina_2.jpg","/Reserva_la_makina/la_makina_3.jpg","/Reserva_la_makina/la_makina_4.jpg","/Reserva_la_makina/la_makina_1.jpg"],activities:["Short forest hikes and nature trails","Bird watching and photography","Relaxing at picnic areas","Learning about local flora and fauna"],restaurantsAround:[{name:"Reserva Cafe",rating:"4.0"},{name:"Nature Bistro",rating:"4.1"}],tips:["Wear comfortable shoes for uneven terrain","Bring insect repellent and water","Visit early for bird watching opportunities","Follow park rules and respect wildlife"]},{id:21,image:"Playa_pochomil/pochomil_1.jpg",name:"Playa Pochomil",departament:"Managua",rating:"4.0",time:"1h (≈60 km) 🚘",description:`
                Playa Pochomil is one of the most popular Pacific beaches near Managua, known for its accessibility, dark volcanic sand, strong surf, and weekend beach atmosphere. The beach has long been a traditional getaway destination for Nicaraguan families and local tourism.

                Compared to more international surf towns, Pochomil feels strongly connected to domestic tourism culture.

                ---

                🟡 HOW TO GET THERE

                🚗 From Managua:
                - Distance: ~65–75 km
                - Travel time: 1.5–2 hours

                Transport options:
                - Public bus
                - Taxi
                - Rental car
                - Private shuttle

                💰 Estimated costs:
                - Public bus: $3–6 USD
                - Taxi/private transport: $40–100 USD

                ---

                🟡 WHAT MAKES POCHOMIL UNIQUE

                Pochomil is:
                - One of the closest beaches to Managua
                - Popular for weekend tourism
                - Known for long beaches and strong waves
                - More local than international in atmosphere

                The beach becomes especially active during holidays and weekends.

                ---

                🟡 REAL EXPERIENCE FLOW

                🌊 1. Pacific beach relaxation
                Visitors typically enjoy:
                - Swimming (with caution)
                - Beach walks
                - Horseback riding
                - Oceanfront restaurants

                ---

                🍤 2. Seafood dining experience
                The beach area contains:
                - Small seafood restaurants
                - Beach bars
                - Local vendors

                Popular dishes include:
                - Fried fish
                - Shrimp cocktails
                - Coconut seafood soups

                ---

                🌅 3. Sunset atmosphere
                Sunsets are one of Pochomil’s strongest attractions, especially during dry season.

                ---

                🟡 COST OF EXPERIENCE

                - Budget beach trip: $20–50 USD/day
                - Mid-range stay: $70–150 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Ignoring ocean conditions
                Rip currents and rough surf can become dangerous.

                ❌ Mistake 2: Visiting only midday
                Heat exposure is intense during afternoon hours.

                ❌ Mistake 3: Traveling during peak holidays without reservations
                Hotels fill quickly during Semana Santa and national holidays.

                ⚠️ Safety level:
                Generally safe with beach awareness.

                ---

                🟡 TRAVEL INSIGHT

                Pochomil is more about local beach culture and convenience than luxury tourism. It is one of the easiest ocean escapes from Managua.
                `,extraPhotos:["/Playa_pochomil/pochomil_2.jpg","/Playa_pochomil/pochomil_3.jpg","/Playa_pochomil/pochomil_4.jpg","/Playa_pochomil/pochomil_5.jpg","/Playa_pochomil/pochomil_1.jpg"],activities:["Swimming and sunbathing","Beach sports and sand activities","Relaxing at beachfront cafes","Photography of coastal sunsets"],restaurantsAround:[{name:"Pochomil Grill",rating:"4.2"},{name:"Seaside Cafe",rating:"4.1"}],tips:["Arrive early to secure parking or beach spots","Carry cash for local vendors","Use sunscreen and stay hydrated","Evening walks offer stunning sunsets"]},{id:22,image:"Playa_montelimar/montelimar_1.jpg",name:"Playa Montelimar",departament:"Managua",rating:"4.0",time:"1h 10min (≈75 km) 🚘",description:`
                Playa Montelimar is one of Nicaragua’s best-known resort beaches, located on the Pacific coast south of Managua. The beach is famous for its large beachfront resort complexes, wide coastline, palm trees, and easier access to tourism infrastructure compared to smaller coastal communities.

                Unlike rustic beaches, Montelimar focuses more on resort-style relaxation.

                ---

                🟡 HOW TO GET THERE

                🚗 From Managua:
                - Distance: ~65–80 km
                - Travel time: 1.5–2 hours

                Transport options:
                - Rental car
                - Resort shuttle
                - Taxi
                - Organized tours

                💰 Estimated costs:
                - Shuttle/private transport: $30–100 USD

                ---

                🟡 WHAT MAKES MONTELIMAR UNIQUE

                Montelimar is:
                - One of Nicaragua’s classic resort destinations
                - Known for long palm-lined beaches
                - More structured for tourism than many Pacific beaches
                - Popular for family vacations and weekend escapes

                ---

                🟡 REAL EXPERIENCE FLOW

                🏖 1. Resort beach atmosphere
                Visitors often spend time:
                - Relaxing near pools
                - Walking along the beach
                - Enjoying oceanfront restaurants
                - Participating in resort activities

                ---

                🌊 2. Pacific coastline experience
                The beach itself is:
                - Wide
                - Windy
                - Long enough for extensive walks
                - Less crowded outside holiday periods

                ---

                🍹 3. Resort nightlife and dining
                Compared to smaller beaches, Montelimar offers:
                - Bars
                - Restaurants
                - Entertainment activities
                - Larger tourism facilities

                ---

                🟡 COST OF EXPERIENCE

                - Budget day visit: $20–50 USD
                - Resort stays: $100–300+ USD/night

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Swimming during rough surf
                Pacific currents remain dangerous in some areas.

                ❌ Mistake 2: Expecting isolated eco-tourism
                Montelimar is more commercial than rustic beaches.

                ❌ Mistake 3: Booking last minute during holidays
                Resorts may reach full occupancy.

                ⚠️ Safety level:
                Generally safe within tourism zones.

                ---

                🟡 TRAVEL INSIGHT

                Montelimar is best for travelers looking for easy-access beach tourism with resort infrastructure rather than remote or adventurous coastal experiences.
                `,extraPhotos:["/Playa_montelimar/montelimar_2.jpg","/Playa_montelimar/montelimar_3.jpg","/Playa_montelimar/montelimar_4.jpg","/Playa_montelimar/montelimar_5.jpg","/Playa_montelimar/montelimar_6.jpg","/Playa_montelimar/montelimar_1.jpg"],activities:["Swimming in calm waters","Beach volleyball and sports","Walking along the coastline","Dining at nearby beachfront restaurants"],restaurantsAround:[{name:"Montelimar Beach Club",rating:"4.3"},{name:"Costa Azul Restaurant",rating:"4.2"}],tips:["Check for parking availability on weekends","Bring sunscreen and hats for sun protection","Arrive early to avoid crowds","Follow local beach rules and respect nature"]},{id:23,image:"Playa_jiquilillo/jiquilillo_1.jpg",name:"Playa Jiquilillo",departament:"Chinandega",rating:"4.0",time:"4h (≈220 km) 🚘",description:`
                Playa Jiquilillo is a quiet Pacific beach destination in northwestern Nicaragua, located in the department of Chinandega near the Gulf of Fonseca region. Unlike crowded beach towns, Jiquilillo remains peaceful, rural, and strongly connected to fishing communities and eco-tourism.

                The beach is known for:
                - Long empty coastlines
                - Surfing
                - Relaxation
                - Sustainable tourism projects

                ---

                🟡 HOW TO GET THERE

                🚗 From Chinandega:
                - Travel time: ~1.5–2.5 hours

                🚗 From Managua:
                - Travel time: 4–5 hours

                Transport options:
                - Private vehicle
                - Shuttle
                - Local buses + taxi connections

                ⚠️ Some roads may be rough depending on season.

                ---

                🟡 WHAT MAKES JIQUILILLO UNIQUE

                Jiquilillo is:
                - Quiet and minimally commercialized
                - Focused on eco-tourism
                - Popular among surfers and volunteers
                - Known for peaceful beach environments

                The area feels isolated compared to mainstream beach destinations.

                ---

                🟡 REAL EXPERIENCE FLOW

                🏄 1. Surf and beach atmosphere
                The beach offers:
                - Surf zones
                - Open coastline
                - Relaxed beach culture
                - Fewer crowds than southern beaches

                ---

                🌅 2. Slow-travel coastal experience
                Visitors often spend time:
                - Watching sunsets
                - Reading near the beach
                - Exploring local fishing culture
                - Relaxing in eco-lodges

                ---

                🐢 3. Nature and conservation
                Nearby ecosystems support:
                - Mangroves
                - Birdlife
                - Marine environments

                Some organizations also support sea turtle conservation efforts.

                ---

                🟡 COST OF EXPERIENCE

                - Budget traveler: $20–50 USD/day
                - Mid-range eco-lodge: $60–140 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Expecting nightlife
                Jiquilillo focuses on relaxation rather than entertainment.

                ❌ Mistake 2: Bringing insufficient cash
                ATMs and card services may be limited.

                ❌ Mistake 3: Underestimating travel time
                Road access may be slower than expected.

                ⚠️ Safety level:
                Generally safe and peaceful.

                ---

                🟡 TRAVEL INSIGHT

                Jiquilillo is ideal for travelers who want isolation, quiet Pacific scenery, and a slower pace far from commercial tourism zones.
                `,extraPhotos:["/Playa_jiquilillo/jiquilillo_2.jpg","/Playa_jiquilillo/jiquilillo_3.jpg","/Playa_jiquilillo/jiquilillo_4.jpg","/Playa_jiquilillo/jiquilillo_5.jpg","/Playa_jiquilillo/jiquilillo_6.jpg","/Playa_jiquilillo/jiquilillo_1.jpg"],activities:["Surfing and beginner surf lessons","Turtle watching during nesting season","Walking along pristine beaches","Relaxing and enjoying untouched coastal scenery"],restaurantsAround:[{name:"Jiquilillo Beach Bar",rating:"4.2"},{name:"Eco Surf Cafe",rating:"4.1"}],tips:["Travel with enough water and supplies as facilities are limited","Respect wildlife and nesting turtles","Use eco-friendly products to protect the beach","Hire local guides for surfing or nature activities"]},{id:24,image:"Puerto_sandino/puerto_sandino_1.jpg",name:"Puerto Sandino",departament:"León",rating:"4.0",time:"1h 20min (≈85 km) 🚘",description:`
                Puerto Sandino is an industrial port area located on Nicaragua’s Pacific coast near León. While it functions primarily as a commercial and fishing port, the surrounding coastal areas have become known for surfing, local seafood culture, and less crowded beach environments.

                The region combines industrial maritime activity with authentic coastal life.

                ---

                🟡 HOW TO GET THERE

                🚗 From León:
                - Travel time: ~1–1.5 hours

                🚗 From Managua:
                - Travel time: ~2–3 hours

                Transport options:
                - Private vehicle
                - Public transportation
                - Surf tours

                ---

                🟡 WHAT MAKES PUERTO SANDINO UNIQUE

                Puerto Sandino is:
                - More authentic than resort beaches
                - Connected to commercial fishing activity
                - Popular among experienced surfers
                - Less tourist-heavy than major beach towns

                ---

                🟡 REAL EXPERIENCE FLOW

                🏄 1. Surfing conditions
                The area is known for:
                - Strong Pacific surf
                - Long wave breaks
                - Less crowded surf zones

                Surf conditions vary significantly by season.

                ---

                🐟 2. Fishing port atmosphere
                Visitors observe:
                - Fishing boats
                - Seafood markets
                - Local maritime activity
                - Coastal trade operations

                ---

                🌅 3. Coastal scenery
                The coastline offers:
                - Long beaches
                - Dramatic sunsets
                - Windy Pacific conditions

                ---

                🟡 COST OF EXPERIENCE

                - Budget beach trip: $20–50 USD/day
                - Surf-focused stay: $60–120 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Underestimating surf intensity
                Waves can be dangerous for inexperienced swimmers.

                ❌ Mistake 2: Expecting luxury tourism
                The area remains relatively local and industrial.

                ❌ Mistake 3: Visiting without transportation planning
                Public transport schedules can be limited.

                ⚠️ Safety level:
                Generally safe with ocean precautions.

                ---

                🟡 TRAVEL INSIGHT

                Puerto Sandino feels more like a working Pacific coastal region than a tourist town, making it attractive for surfers and travelers seeking authentic local environments.
                `,extraPhotos:["/Puerto_sandino/puerto_sandino_2.jpg","/Puerto_sandino/puerto_sandino_3.jpg","/Puerto_sandino/puerto_sandino_4.jpg","/Puerto_sandino/puerto_sandino_5.jpg","/Puerto_sandino/puerto_sandino_6.jpg","/Puerto_sandino/puerto_sandino_1.jpg"],activities:["Surfing and water sports","Fishing tours with local fishermen","Beach walks and sunset photography","Exploring small local markets and eateries"],restaurantsAround:[{name:"Sandino Surf Bar",rating:"4.2"},{name:"Mariscos Puerto Sandino",rating:"4.3"}],tips:["Bring surf gear or rent locally","Use sun protection for long hours on the beach","Respect local fishermen and fishing areas","Visit in dry season for better surf conditions"]},{id:25,image:"Playa_miramar/playa_miramar_1.jpg",name:"Playa Miramar",departament:"León",rating:"3.5",time:"1h 25min (≈90 km) 🚘",description:`
                Playa Miramar is a quiet Pacific coastal destination in western Nicaragua, known for its dark volcanic sand, strong surf conditions, and relaxed local atmosphere. Unlike heavily commercialized beach towns, Miramar remains relatively undeveloped and attracts surfers, backpackers, and travelers looking for a slower coastal experience.

                The beach is especially popular among people searching for:
                - Fewer crowds
                - Authentic coastal communities
                - Surf culture
                - Peaceful sunsets

                ---

                🟡 HOW TO GET THERE

                🚗 From León:
                - Distance: ~25–35 km
                - Travel time: 45–75 minutes

                🚗 From Managua:
                - Travel time: ~2.5–3.5 hours

                Transport options:
                - Private vehicle
                - Taxi
                - Public transportation with transfers

                💰 Estimated costs:
                - Public transport: $3–10 USD
                - Taxi/private transport: $30–90 USD

                ⚠️ Road quality may vary depending on season and weather conditions.

                ---

                🟡 WHAT MAKES PLAYA MIRAMAR UNIQUE

                Playa Miramar is:
                - Less crowded than major Pacific destinations
                - Popular among surfers and long-term travelers
                - Known for strong Pacific waves
                - Focused on simple beach life rather than resort tourism

                The atmosphere is calm and highly local.

                ---

                🟡 REAL EXPERIENCE FLOW

                🏄 1. Surfing experience
                Miramar is best known for:
                - Consistent Pacific surf
                - Long wave breaks
                - Less crowded surf conditions

                Wave intensity varies by season and tide conditions.

                💰 Surf lessons and rentals:
                - ~$15–50 USD

                ---

                🌅 2. Sunset and beach walks
                The wide Pacific coastline creates dramatic sunset views, especially during dry season.

                Many travelers spend evenings:
                - Walking the beach
                - Watching fishing boats
                - Relaxing at beachfront hostels

                ---

                🐟 3. Local seafood culture
                Small restaurants and family-run businesses serve:
                - Fried fish
                - Shrimp dishes
                - Traditional coastal meals

                💰 Meals:
                - ~$5–15 USD

                ---

                🟡 COST OF EXPERIENCE

                - Budget traveler: $20–50 USD/day
                - Mid-range stay: $60–140 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Swimming without checking ocean conditions
                Strong currents and waves can become dangerous.

                ❌ Mistake 2: Expecting luxury infrastructure
                Miramar remains simple and locally focused.

                ❌ Mistake 3: Underestimating heat exposure
                Shade availability may be limited during midday.

                ⚠️ Safety level:
                Generally safe with standard beach awareness.

                ---

                🟡 TRAVEL INSIGHT

                Playa Miramar is ideal for travelers looking for a slower and more authentic Pacific beach experience without heavy nightlife or resort-style tourism.
                `,extraPhotos:["/Playa_miramar/playa_miramar_2.jpg","/Playa_miramar/playa_miramar_3.jpg","/Playa_miramar/playa_miramar_4.jpg","/Playa_miramar/playa_miramar_5.jpg","/Playa_miramar/playa_miramar_6.jpg","/Playa_miramar/playa_miramar_1.jpg"],activities:["Walking along the quiet beach","Relaxing and sunbathing","Beach photography during sunrise or sunset","Sampling local seafood at small restaurants"],restaurantsAround:[{name:"Miramar Beach Grill",rating:"4.0"},{name:"Seaside Bistro",rating:"4.1"}],tips:["Bring cash for local vendors","Use sunscreen and hats for sun protection","Respect local fishing and beach practices","Visit early for the best quiet experience"]},{id:26,image:"Reserva_indio_maiz/indio_maiz_1.jpg",name:"Reserva Indio Maíz",departament:"Río San Juan",rating:"4.5",time:"6h 30min (≈330 km) 🚘 + 🚢",description:`
                Reserva Indio Maíz is one of the most biologically important rainforest reserves in Central America, located in southeastern Nicaragua near the Caribbean coast and the San Juan River region. Covering thousands of square kilometers of protected tropical forest, the reserve contains one of the largest remaining rainforest ecosystems in the country.

                The area is famous for:
                - Extreme biodiversity
                - Dense jungle environments
                - River ecosystems
                - Wildlife observation
                - Eco-tourism expeditions

                Unlike Nicaragua’s beach and volcano destinations, Indio Maíz offers a deep rainforest experience with limited infrastructure and highly natural conditions.

                ---

                🟡 HOW TO GET THERE

                🚗 + 🚤 Typical access route:

                Step 1:
                - Managua → San Carlos or San Juan del Norte region

                Step 2:
                - Boat transportation through river systems

                Travel time varies significantly depending on route and weather.

                Transport options:
                - Guided eco-expeditions
                - River transport
                - Multi-day tours

                💰 Estimated costs:
                - Guided tours: $80–300+ USD depending on duration

                ⚠️ Independent exploration is strongly discouraged due to remote jungle conditions.

                ---

                🟡 WHAT MAKES INDIO MAÍZ UNIQUE

                Indio Maíz is:
                - One of the most protected rainforest systems in Nicaragua
                - Home to rare wildlife species
                - Extremely rich in tropical biodiversity
                - One of the country’s most isolated eco-tourism destinations

                The reserve feels wild, humid, and biologically intense.

                ---

                🟡 REAL EXPERIENCE FLOW

                🚤 1. River exploration
                Many expeditions begin with long boat rides through:
                - Jungle rivers
                - Wetlands
                - Dense tropical vegetation

                The river systems are central to transportation and wildlife observation.

                ---

                🦜 2. Wildlife observation
                Possible wildlife sightings include:
                - Monkeys
                - Toucans
                - Parrots
                - Reptiles
                - Tropical birds

                Wildlife visibility depends heavily on weather and guide experience.

                ---

                🌿 3. Jungle trekking
                Visitors may explore:
                - Dense rainforest trails
                - Humid ecosystems
                - Conservation zones
                - Indigenous or rural community areas

                Conditions are physically demanding because of humidity and terrain.

                ---

                🟡 COST OF EXPERIENCE

                - Budget eco-expedition: $80–150 USD
                - Multi-day guided experience: $200–500+ USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Underestimating rainforest conditions
                Humidity, insects, and heat can become exhausting.

                ❌ Mistake 2: Traveling without certified guides
                Navigation and wildlife risks increase significantly.

                ❌ Mistake 3: Bringing inadequate waterproof protection
                Rain and river exposure are common.

                ⚠️ Safety level:
                Safe with professional eco-guides and preparation.

                ---

                🟡 TRAVEL INSIGHT

                Reserva Indio Maíz is not casual tourism. It is one of the most immersive rainforest experiences in Nicaragua and appeals most to serious eco-travelers and nature enthusiasts.
                `,extraPhotos:["/Reserva_indio_maiz/indio_maiz_2.jpg","/Reserva_indio_maiz/indio_maiz_3.jpg","/Reserva_indio_maiz/indio_maiz_4.jpg","/Reserva_indio_maiz/indio_maiz_5.jpg","/Reserva_indio_maiz/indio_maiz_6.jpg","/Reserva_indio_maiz/indio_maiz_1.jpg"],activities:["Guided wildlife tours to spot rare species","Kayaking and boat tours along rivers and canals","Bird watching and photography in dense rainforest","Hiking and exploring mangrove ecosystems"],restaurantsAround:[{name:"Indio Maíz Eco Lodge",rating:"4.5"}],tips:["Travel with a certified local guide for safety and knowledge","Bring insect repellent, water, and waterproof gear","Plan for multi-day trips due to remote location","Respect wildlife and do not disturb natural habitats"]},{id:27,image:"Salto_estanzuela/salto_estanzuela_1.jpg",name:"Salto Estanzuela",departament:"Estelí",rating:"4.0",time:"3h 30min (≈185 km) 🚘",description:`
                Salto Estanzuela is one of the best-known waterfalls in northern Nicaragua, located near the city of Estelí. Surrounded by rocky landscapes, river systems, and green vegetation, the waterfall has become a popular destination for nature lovers and local tourism.

                The site combines:
                - Freshwater swimming
                - Scenic hiking
                - Rocky canyon landscapes
                - Mountain climate

                Unlike Nicaragua’s volcanic attractions, Salto Estanzuela focuses on freshwater nature experiences.

                ---

                🟡 HOW TO GET THERE

                🚗 From Estelí:
                - Distance: ~6–12 km
                - Travel time: 20–40 minutes

                Transport options:
                - Taxi
                - Private vehicle
                - Local transportation + short hike

                💰 Estimated costs:
                - Entrance fee: ~$2–10 USD
                - Taxi transport: varies

                ---

                🟡 WHAT MAKES SALTO ESTANZUELA UNIQUE

                The waterfall is:
                - Easily accessible from Estelí
                - Popular for freshwater swimming
                - Surrounded by rocky canyon scenery
                - One of the most visited natural attractions in northern Nicaragua

                ---

                🟡 REAL EXPERIENCE FLOW

                💧 1. Waterfall swimming experience
                Visitors often spend time:
                - Swimming in freshwater pools
                - Relaxing near the falls
                - Exploring surrounding rocks

                Water levels vary significantly depending on season.

                ---

                🥾 2. Short nature hikes
                Nearby trails allow exploration of:
                - Riverbanks
                - Elevated viewpoints
                - Vegetated areas around the waterfall

                ---

                📸 3. Photography and scenery
                The contrast between:
                - Rocky cliffs
                - Green vegetation
                - Flowing water

                creates one of the region’s most photogenic natural settings.

                ---

                🟡 COST OF EXPERIENCE

                - Budget day trip: $10–30 USD
                - Guided regional tour: $40–90 USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Climbing slippery rocks
                Wet surfaces can become dangerous.

                ❌ Mistake 2: Visiting during extreme rainy periods
                Strong water flow may increase risk.

                ❌ Mistake 3: Arriving without water shoes
                Rocky terrain can be uncomfortable barefoot.

                ⚠️ Safety level:
                Generally safe with basic caution.

                ---

                🟡 TRAVEL INSIGHT

                Salto Estanzuela is best enjoyed slowly — swimming, relaxing, and spending time in one of northern Nicaragua’s most refreshing natural environments.
                `,extraPhotos:["/Salto_estanzuela/salto_estanzuela_2.jpg","/Salto_estanzuela/salto_estanzuela_3.jpg","/Salto_estanzuela/salto_estanzuela_4.jpg","/Salto_estanzuela/salto_estanzuela_5.jpg","/Salto_estanzuela/salto_estanzuela_1.jpg"],activities:["Swimming in natural pools","Hiking along forest trails to reach the waterfall","Photography of waterfalls and scenic landscapes","Picnicking in shaded areas"],restaurantsAround:[{name:"Estanzuela Cafe",rating:"4.0"}],tips:["Wear water shoes for slippery rocks","Bring water and snacks","Go early to avoid crowds","Respect local nature and keep the area clean"]},{id:28,image:"Cerro_apante/cerro_apante_1.jpg",name:"Cerro Apante",departament:"Matagalpa",rating:"4.0",time:"3h 45min (≈200 km) 🚘",description:`
                Cerro Apante is a mountain and forest reserve area located near Matagalpa in northern Nicaragua. The region is known for cool mountain temperatures, cloud forest ecosystems, hiking routes, and panoramic views over the surrounding valleys.

                Unlike Nicaragua’s hot Pacific coast, Cerro Apante offers:
                - Misty mountain environments
                - Dense vegetation
                - Quiet eco-tourism
                - Cooler climates

                The reserve is especially attractive for hikers, birdwatchers, and travelers seeking nature close to Matagalpa city.

                ---

                🟡 HOW TO GET THERE

                🚗 From Matagalpa:
                - Distance: ~5–15 km depending on access point
                - Travel time: 20–45 minutes

                Transport options:
                - Taxi
                - Private vehicle
                - Hiking tours

                ⚠️ Some access roads may become muddy during rainy season.

                ---

                🟡 WHAT MAKES CERRO APANTE UNIQUE

                Cerro Apante is:
                - One of the closest forest reserves to Matagalpa
                - Known for cloud forest conditions
                - Cooler than most of Nicaragua
                - Rich in biodiversity

                The mountain atmosphere feels very different from Nicaragua’s beaches and volcanoes.

                ---

                🟡 REAL EXPERIENCE FLOW

                🥾 1. Mountain hiking
                Visitors explore:
                - Forest trails
                - Mountain ridges
                - Observation points
                - Rural landscapes

                Trail difficulty varies from moderate to advanced.

                ---

                🐦 2. Birdwatching and wildlife
                The reserve supports:
                - Tropical birds
                - Butterflies
                - Small mammals
                - Dense plant ecosystems

                Morning hours usually provide the best wildlife activity.

                ---

                ☁️ 3. Scenic viewpoints
                On clear days, viewpoints overlook:
                - Matagalpa valley
                - Mountain chains
                - Agricultural landscapes

                Fog and clouds create dramatic scenery during rainy season.

                ---

                🟡 COST OF EXPERIENCE

                - Budget eco-trip: $10–30 USD
                - Guided hiking experience: $30–80 USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Wearing inadequate footwear
                Mountain trails can become slippery.

                ❌ Mistake 2: Expecting warm temperatures
                Conditions may become cold and humid.

                ❌ Mistake 3: Visiting too late in the day
                Visibility often decreases during afternoons.

                ⚠️ Safety level:
                Generally safe for eco-tourism and hiking.

                ---

                🟡 TRAVEL INSIGHT

                Cerro Apante is one of the best destinations in Nicaragua for travelers who enjoy cool weather, forest hiking, and mountain landscapes rather than coastal tourism.
                `,extraPhotos:["/Cerro_apante/cerro_apante_2.jpg","/Cerro_apante/cerro_apante_3.jpg","/Cerro_apante/cerro_apante_4.jpg","/Cerro_apante/cerro_apante_5.jpg","/Cerro_apante/cerro_apante_1.jpg"],activities:["Hiking through forest trails","Visiting local coffee farms and learning production","Bird watching and nature photography","Enjoying scenic viewpoints of surrounding mountains"],restaurantsAround:[{name:"Cerro Apante View Cafe",rating:"4.2"}],tips:["Wear layered clothing for variable mountain weather","Bring water, snacks, and sunscreen","Hire a guide for safe hiking trails","Respect local farm areas and follow marked paths"]},{id:29,image:"Playa_el_velero/playa_el_velero_1.jpg",name:"Playa El Velero",departament:"León",rating:"3.5",time:"3h 50min (≈205 km) 🚘",description:`
                Playa El Velero is a quiet Pacific beach destination in Nicaragua known for its relaxed atmosphere, open coastline, and local beach culture. Compared to larger tourist beaches, El Velero remains relatively peaceful and less commercialized.

                The area attracts:
                - Weekend travelers
                - Families
                - Surfers
                - Visitors seeking quieter beach environments

                ---

                🟡 HOW TO GET THERE

                🚗 Access usually depends on nearby Pacific coastal routes.

                From Managua:
                - Estimated travel time: 1.5–3 hours depending on location and road conditions

                Transport options:
                - Private vehicle
                - Taxi
                - Local transportation

                ⚠️ Road access may vary depending on weather conditions.

                ---

                🟡 WHAT MAKES PLAYA EL VELERO UNIQUE

                The beach is:
                - Less crowded than major tourist beaches
                - Focused on relaxation
                - Connected to local coastal communities
                - Known for broad Pacific Ocean views

                The atmosphere feels calm and highly local.

                ---

                🟡 REAL EXPERIENCE FLOW

                🌊 1. Beach relaxation
                Visitors typically spend time:
                - Walking along the shore
                - Swimming during safe conditions
                - Watching fishing activity
                - Relaxing near beachfront accommodations

                ---

                🏄 2. Surf and ocean conditions
                Depending on season, the beach may offer:
                - Moderate surf conditions
                - Open wave zones
                - Windy Pacific weather

                ---

                🌅 3. Sunset experience
                Pacific sunsets are one of the strongest attractions of the area, especially during dry season evenings.

                ---

                🟡 COST OF EXPERIENCE

                - Budget visit: $15–40 USD/day
                - Mid-range stay: $50–120 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Ignoring surf conditions
                Pacific currents can become strong unexpectedly.

                ❌ Mistake 2: Expecting nightlife infrastructure
                The beach focuses more on relaxation than entertainment.

                ❌ Mistake 3: Visiting without transportation planning
                Public transportation may be limited.

                ⚠️ Safety level:
                Generally safe with standard beach awareness.

                ---

                🟡 TRAVEL INSIGHT

                Playa El Velero is ideal for travelers looking for a simple and peaceful Pacific beach atmosphere away from heavily commercialized tourism.
                `,extraPhotos:["/Playa_el_velero/playa_el_velero_2.jpg","/Playa_el_velero/playa_el_velero_3.jpg","/Playa_el_velero/playa_el_velero_4.jpg","/Playa_el_velero/playa_el_velero_5.jpg","/Playa_el_velero/playa_el_velero_1.jpg"],activities:["Surfing and beginner lessons","Beach walks and relaxation","Sunset photography and picnics","Exploring nearby small coastal villages"],restaurantsAround:[{name:"El Velero Beach Shack",rating:"4.0"}],tips:["Bring cash and basic supplies as services are limited","Respect local fishing and beach customs","Check weather before planning a visit","Arrive early for quieter experience"]},{id:30,image:"Playa_la_flor/la_flor_1.jpg",name:"Playa La Flor",departament:"Rivas",rating:"4.0",time:"2h 20min (≈120 km) 🚘",description:`
                Playa La Flor is one of Nicaragua’s most important wildlife conservation beaches, internationally recognized for mass sea turtle nesting events known as arribadas. Located on the southern Pacific coast near San Juan del Sur, the beach forms part of the La Flor Wildlife Refuge.

                The destination is globally important for olive ridley sea turtle conservation and attracts eco-tourists interested in wildlife rather than traditional beach tourism.

                ---

                🟡 HOW TO GET THERE

                🚗 From San Juan del Sur:
                - Distance: ~20 km
                - Travel time: 30–50 minutes

                🚗 From Managua:
                - Travel time: ~3–4 hours

                Transport options:
                - Guided eco-tours
                - Private vehicle
                - Taxi from San Juan del Sur

                💰 Estimated costs:
                - Entrance fee: ~$5–15 USD
                - Guided tours: $20–60 USD

                ---

                🟡 WHAT MAKES PLAYA LA FLOR UNIQUE

                Playa La Flor is:
                - One of the most important turtle nesting sites in the Pacific region
                - Protected under wildlife conservation programs
                - Famous for mass olive ridley turtle arribadas

                During nesting season, thousands of turtles may arrive on the beach in a single night.

                ---

                🟡 REAL EXPERIENCE FLOW

                🐢 1. Sea turtle observation
                The main attraction is observing:
                - Female turtles laying eggs
                - Nesting behavior
                - Hatchling activity (seasonal)

                Peak activity usually occurs during rainy season months.

                ⚠️ Strict conservation rules apply.

                ---

                🌌 2. Nighttime eco-tourism experience
                Most turtle observation occurs at night, creating a quiet and highly controlled wildlife experience.

                Artificial lights are restricted to avoid disturbing turtles.

                ---

                🌊 3. Protected coastal scenery
                Beyond turtle activity, the beach offers:
                - Wide Pacific coastline
                - Natural vegetation
                - Minimal commercial development

                The environment feels wild and protected.

                ---

                🟡 COST OF EXPERIENCE

                - Budget eco-visit: $15–40 USD
                - Guided conservation tour: $40–100 USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Using flash photography
                Bright lights can disorient nesting turtles.

                ❌ Mistake 2: Visiting outside nesting season
                Turtle activity varies significantly by month.

                ❌ Mistake 3: Ignoring conservation instructions
                Wildlife regulations are strictly enforced.

                ⚠️ Safety level:
                Very safe with guided eco-tourism practices.

                ---

                🟡 TRAVEL INSIGHT

                Playa La Flor is one of Nicaragua’s most meaningful eco-tourism destinations because the experience centers around conservation, wildlife respect, and observing one of nature’s most extraordinary migration events.
                `,extraPhotos:["/Playa_la_flor/la_flor_2.jpg","/Playa_la_flor/la_flor_3.jpg","/Playa_la_flor/la_flor_4.jpg","/Playa_la_flor/la_flor_5.jpg","/Playa_la_flor/la_flor_1.jpg"],activities:["Observing sea turtles during nesting season","Walking along sandy beaches","Photography of coastal landscapes","Participating in guided conservation tours"],restaurantsAround:[{name:"La Flor Eco Lodge",rating:"4.3"}],tips:["Visit during nesting season for turtle activities","Use eco-friendly sunscreen","Follow local guides and conservation rules","Respect wildlife and avoid disturbing turtles"]},{id:31,image:"Playa_huehuete/huehuete_1.jpg",name:"Playa Huehuete",departament:"Carazo",rating:"3.5",time:"1h 40min (≈90 km) 🚘",description:`
                Playa Huehuete is a peaceful Pacific beach destination located on Nicaragua’s southwestern coast, known for its quiet atmosphere, long dark-sand beaches, and relaxed local tourism environment. Unlike highly commercialized coastal towns, Huehuete remains calm and residential, attracting travelers looking for slower beach experiences and oceanfront relaxation.

                The beach is especially popular among:
                - Families
                - Weekend travelers
                - Surfers
                - Visitors seeking less crowded coastlines

                ---

                🟡 HOW TO GET THERE

                🚗 From Managua:
                - Distance: ~110–130 km
                - Travel time: 2.5–3.5 hours

                Transport options:
                - Rental car
                - Taxi/private transfer
                - Public transportation with transfers

                💰 Estimated costs:
                - Public transport: $5–15 USD
                - Private transport: $50–120 USD

                ⚠️ Some road sections near the coast may become rough during rainy season.

                ---

                🟡 WHAT MAKES PLAYA HUEHUETE UNIQUE

                Huehuete is:
                - Less tourist-heavy than San Juan del Sur
                - Known for peaceful beaches and oceanfront homes
                - Popular for weekend escapes from Managua
                - Focused more on relaxation than nightlife

                The atmosphere is quiet and strongly connected to local tourism.

                ---

                🟡 REAL EXPERIENCE FLOW

                🌊 1. Long beach walks
                The coastline is wide and relatively uncrowded, especially outside holidays.

                Travelers commonly enjoy:
                - Sunset walks
                - Early morning beach walks
                - Quiet ocean scenery

                ---

                🏄 2. Surf and ocean conditions
                Wave conditions vary seasonally, but the Pacific coast can offer:
                - Moderate surf
                - Windy afternoons
                - Strong currents during some periods

                ---

                🍤 3. Local seafood experience
                Beachfront restaurants serve:
                - Fried fish
                - Shrimp dishes
                - Coconut seafood soups
                - Traditional coastal meals

                💰 Meals:
                - ~$5–15 USD

                ---

                🟡 COST OF EXPERIENCE

                - Budget traveler: $20–50 USD/day
                - Mid-range stay: $60–140 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Swimming during unsafe surf conditions
                Pacific currents can become dangerous unexpectedly.

                ❌ Mistake 2: Visiting without supplies
                Some services may close early outside peak tourism periods.

                ❌ Mistake 3: Expecting nightlife infrastructure
                Huehuete focuses more on relaxation and residential tourism.

                ⚠️ Safety level:
                Generally safe with standard beach awareness.

                ---

                🟡 TRAVEL INSIGHT

                Playa Huehuete is ideal for travelers who value quiet beaches and local coastal culture over heavy tourism infrastructure or party-oriented destinations.
                `,extraPhotos:["/Playa_huehuete/huehuete_2.jpg","/Playa_huehuete/huehuete_3.jpg","/Playa_huehuete/huehuete_4.jpg","/Playa_huehuete/huehuete_5.jpg","/Playa_huehuete/huehuete_6.jpg","/Playa_huehuete/huehuete_1.jpg"],activities:["Relaxing and sunbathing","Walking along the shoreline","Beach photography and sunsets","Swimming in calm waters"],restaurantsAround:[{name:"Huehuete Beach Grill",rating:"4.0"}],tips:["Bring cash for local food vendors","Arrive early for a quiet experience","Use sun protection and hats","Respect local community and beach rules"]},{id:32,image:"Laguna_de_tiscapa/laguna_de_tiscapa_1.jpg",name:"Laguna de Tiscapa",departament:"Managua",rating:"3.5",time:"15min (≈8 km) 🚘",description:`
                Laguna de Tiscapa is a volcanic crater lagoon located in the center of Managua, Nicaragua’s capital city. Formed by volcanic activity thousands of years ago, the lagoon sits inside the Tiscapa Historical National Park and offers panoramic views over Managua and Lake Xolotlán.

                The area combines:
                - Natural volcanic geography
                - Historical landmarks
                - Urban viewpoints
                - Political and cultural history

                Unlike remote lagoons, Tiscapa exists directly inside a major urban environment.

                ---

                🟡 HOW TO GET THERE

                🚗 Located within Managua city.

                Travel times:
                - 10–25 minutes from most central Managua districts depending on traffic

                Transport options:
                - Taxi
                - Rideshare apps
                - Rental car
                - Guided city tours

                💰 Estimated costs:
                - Taxi within Managua: $3–15 USD

                ---

                🟡 WHAT MAKES LAGUNA DE TISCAPA UNIQUE

                The lagoon is:
                - A volcanic crater inside the capital city
                - Historically important during multiple political periods
                - One of Managua’s best panoramic viewpoints
                - Home to monuments and historical structures

                The contrast between nature and urban development makes it unusual.

                ---

                🟡 REAL EXPERIENCE FLOW

                🌋 1. Crater lagoon viewpoints
                Visitors enjoy:
                - Elevated city views
                - Observation platforms
                - Scenic photography opportunities

                On clear days, visibility extends across large sections of Managua.

                ---

                🪂 2. Canopy/zipline activities
                Some tourism operations offer:
                - Zipline experiences across sections of the crater area
                - Adventure tourism overlooking the lagoon

                💰 Prices:
                - ~$10–30 USD

                ---

                🏛 3. Historical exploration
                The park area includes:
                - Historical monuments
                - Political history references
                - Former government-related sites

                The location played an important role during Nicaragua’s 20th-century political history.

                ---

                🟡 COST OF EXPERIENCE

                - Budget city visit: $10–30 USD
                - Guided city tours: $30–80 USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Visiting during peak traffic hours
                Managua traffic may significantly increase travel times.

                ❌ Mistake 2: Ignoring heat exposure
                Midday temperatures can become intense.

                ❌ Mistake 3: Exploring isolated areas late at night
                Some urban areas nearby may be poorly lit.

                ⚠️ Safety level:
                Generally safe during daytime tourism activity.

                ---

                🟡 TRAVEL INSIGHT

                Laguna de Tiscapa is one of the few places in Central America where travelers can observe a volcanic crater landscape directly inside a capital city environment.
                `,extraPhotos:["/Laguna_de_tiscapa/laguna_de_tiscapa_2.jpg","/Laguna_de_tiscapa/laguna_de_tiscapa_3.jpg","/Laguna_de_tiscapa/laguna_de_tiscapa_4.jpg","/Laguna_de_tiscapa/laguna_de_tiscapa_5.jpg","/Laguna_de_tiscapa/laguna_de_tiscapa_1.jpg"],activities:["Walking along the crater rim trails","Photography of city skyline and lake","Picnicking and casual relaxation","Bird watching around the lake"],restaurantsAround:[{name:"Tiscapa View Cafe",rating:"4.0"}],tips:["Visit early to enjoy calm surroundings","Bring water and snacks","Wear comfortable shoes for walking","Stay aware of weather conditions as the lake can be windy"]},{id:33,image:"El_castillo/el_castillo_1.jpg",name:"El Castillo (fort)",departament:"Río San Juan",rating:"4.5",time:"5h (≈260 km) 🚘 + 🚢",description:`
                El Castillo is one of Nicaragua’s most historically important river towns, located along the San Juan River near the Caribbean region. The town is famous for the Fortress of the Immaculate Conception, a colonial fort built during the Spanish colonial era to defend against pirates and foreign invasions.

                The destination combines:
                - River culture
                - Colonial history
                - Rainforest scenery
                - Eco-tourism

                Unlike Nicaragua’s volcanic destinations, El Castillo offers a slower river-based travel experience deeply connected to jungle environments.

                ---

                🟡 HOW TO GET THERE

                🚗 + 🚤 Typical route:

                Step 1:
                - Managua → San Carlos

                Step 2:
                - Boat transportation along the San Juan River

                Travel times vary:
                - Full trip may require 8–12+ hours depending on connections

                Transport options:
                - Public river boats
                - Speedboats
                - Guided tours

                💰 Estimated costs:
                - Boat transportation: $10–40 USD
                - Multi-day tours: $80–300+ USD

                ---

                🟡 WHAT MAKES EL CASTILLO UNIQUE

                El Castillo is:
                - Home to one of Nicaragua’s most famous colonial forts
                - Located deep in river and rainforest territory
                - Rich in pirate and colonial history
                - Accessible primarily by water

                The town feels isolated and historically preserved.

                ---

                🟡 REAL EXPERIENCE FLOW

                🏰 1. Fortress exploration
                The fort offers:
                - Historical exhibits
                - River viewpoints
                - Colonial military architecture

                Visitors learn about:
                - Pirate attacks
                - Colonial defense systems
                - Regional history

                ---

                🚤 2. San Juan River navigation
                Boat travel itself becomes part of the experience.

                Travelers observe:
                - Jungle riverbanks
                - Tropical wildlife
                - Rural riverside communities

                ---

                🌿 3. Rainforest eco-tourism
                Nearby areas offer:
                - Wildlife observation
                - Jungle trails
                - Birdwatching
                - Eco-lodges

                ---

                🟡 COST OF EXPERIENCE

                - Budget river trip: $40–100 USD
                - Multi-day eco-tourism experience: $150–400+ USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Underestimating travel logistics
                River schedules may vary significantly.

                ❌ Mistake 2: Bringing insufficient waterproof protection
                Rain and river spray are common.

                ❌ Mistake 3: Expecting urban infrastructure
                The region remains remote and highly nature-oriented.

                ⚠️ Safety level:
                Generally safe for eco-tourism and historical travel.

                ---

                🟡 TRAVEL INSIGHT

                El Castillo is one of Nicaragua’s most atmospheric destinations because the combination of rainforest, river transport, and colonial history creates a travel experience that feels disconnected from modern urban life.
                `,extraPhotos:["/El_castillo/el_castillo_2.jpg","/El_castillo/el_castillo_3.jpg","/El_castillo/el_castillo_4.jpg","/El_castillo/el_castillo_5.jpg","/El_castillo/el_castillo_1.jpg"],activities:["Touring the historic fort and museum","Photography of the fort and river","Learning about colonial history and defenses","Boat tours along the San Juan River"],restaurantsAround:[{name:"El Castillo River Cafe",rating:"4.2"}],tips:["Hire a local guide for historical context","Bring sun protection and water","Check boat schedules if traveling from other cities","Respect the heritage site and follow park rules"]},{id:34,image:"Blufields/bluefields_1.jpg",name:"Bluefields",departament:"RACCS",rating:"4.0",time:"6h 30min (≈330 km) 🚘 + 🚢",description:`
                Bluefields is the largest city on Nicaragua’s Caribbean coast and one of the country’s most culturally unique destinations. Unlike the Pacific region, Bluefields reflects strong Afro-Caribbean, Creole, Indigenous, and British-Caribbean influences that shape its language, food, music, and daily life.

                The city functions as:
                - A Caribbean port
                - Cultural center
                - Transportation hub
                - Gateway to nearby islands and coastal communities

                Bluefields feels culturally different from most of Nicaragua.

                ---

                🟡 HOW TO GET THERE

                ✈️ Option 1 — Domestic flight
                From Managua:
                - Duration: ~1–1.5 hours
                - Cost: $80–180 USD

                🚤 Option 2 — Boat access
                Some routes connect through river and coastal systems.

                🚗 + 🚤 Option 3 — Combined land and water travel
                Travel times can become significantly longer.

                ---

                🟡 WHAT MAKES BLUEFIELDS UNIQUE

                Bluefields is:
                - Strongly influenced by Caribbean Creole culture
                - Linguistically diverse
                - Known for seafood and reggae culture
                - Different in architecture and lifestyle from Pacific Nicaragua

                English-based Creole is widely spoken.

                ---

                🟡 REAL EXPERIENCE FLOW

                🍲 1. Caribbean food culture
                Popular local dishes include:
                - Coconut seafood soups
                - Rondon
                - Fried fish
                - Caribbean rice dishes

                Food culture is one of the strongest reasons travelers visit the city.

                ---

                🎶 2. Afro-Caribbean cultural atmosphere
                Visitors experience:
                - Caribbean music
                - Creole language influences
                - Distinct local traditions

                Bluefields has a much more Caribbean rhythm than Pacific Nicaragua.

                ---

                🚤 3. Coastal exploration
                The city serves as a base for:
                - Corn Island travel
                - River systems
                - Coastal boat routes

                ---

                🟡 COST OF EXPERIENCE

                - Budget traveler: $25–60 USD/day
                - Mid-range traveler: $70–150 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Expecting Pacific-style tourism infrastructure
                Bluefields operates differently from western Nicaragua.

                ❌ Mistake 2: Ignoring weather disruptions
                Heavy rain can affect transportation schedules.

                ❌ Mistake 3: Underestimating humidity
                The Caribbean climate is extremely humid year-round.

                ⚠️ Safety level:
                Generally safe with standard urban awareness.

                ---

                🟡 TRAVEL INSIGHT

                Bluefields offers one of the most culturally distinct travel experiences in Nicaragua because it reflects a Caribbean identity that feels completely different from the country’s Pacific cities and volcano regions.
                `,extraPhotos:["/Blufields/bluefields_2.jpg","/Blufields/bluefields_3.jpg","/Blufields/bluefields_4.jpg","/Blufields/bluefields_5.jpg","/Blufields/bluefields_1.jpg"],activities:["Exploring the local market and waterfront","Visiting cultural and historic sites","Sampling Creole cuisine","Boat trips to nearby islands and beaches"],restaurantsAround:[{name:"Bluefields Seafood Grill",rating:"4.0"}],tips:["Bring local currency for markets","Respect local culture and customs","Use mosquito repellent and sun protection","Hire local guides for river and island tours"]},{id:35,image:"Reserva_bosawas/bosawas_1.jpg",name:"Reserva Bosawás",departament:"Norte / BOSAWÁS",rating:"4.5",time:"7h (≈380 km) 🚘",description:`
                Reserva Bosawás is one of the largest tropical rainforest reserves in the Americas and a UNESCO-recognized biosphere reserve located in northern Nicaragua. Covering massive forest areas across mountainous and jungle regions, Bosawás contains extraordinary biodiversity and Indigenous territories.

                The reserve is internationally important for:
                - Rainforest conservation
                - Indigenous cultures
                - Wildlife protection
                - Carbon storage ecosystems

                Bosawás is one of the wildest and least developed regions in Central America.

                ---

                🟡 HOW TO GET THERE

                Access routes depend heavily on:
                - Weather
                - River conditions
                - Mountain roads
                - Local guides

                Typical routes begin from:
                - Matagalpa
                - Jinotega
                - Siuna region

                Travel often includes:
                - Long road journeys
                - River crossings
                - Guided jungle access

                ⚠️ Independent exploration is strongly discouraged.

                ---

                🟡 WHAT MAKES BOSAWÁS UNIQUE

                Bosawás is:
                - One of the largest rainforests north of the Amazon
                - Home to Indigenous communities
                - Rich in biodiversity
                - Extremely remote and ecologically important

                The reserve contains:
                - Jaguars
                - Monkeys
                - Tropical birds
                - Rare plant ecosystems

                ---

                🟡 REAL EXPERIENCE FLOW

                🌿 1. Rainforest immersion
                Visitors experience:
                - Dense jungle environments
                - River systems
                - Tropical humidity
                - Deep wilderness conditions

                ---

                🦜 2. Wildlife observation
                Possible sightings include:
                - Exotic birds
                - Reptiles
                - Mammals
                - Rainforest insects

                Wildlife visibility depends on guides and weather conditions.

                ---

                🏕 3. Multi-day eco-expeditions
                Most visits involve:
                - Eco-lodges
                - Camping
                - Guided trekking
                - River transport

                ---

                🟡 COST OF EXPERIENCE

                - Guided eco-expedition: $150–500+ USD depending on duration

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Attempting independent jungle travel
                Navigation and environmental risks are serious.

                ❌ Mistake 2: Underestimating physical demands
                Heat, insects, and humidity can become exhausting.

                ❌ Mistake 3: Bringing inadequate gear
                Waterproof equipment is essential.

                ⚠️ Safety level:
                Safe with professional guides and proper planning.

                ---

                🟡 TRAVEL INSIGHT

                Bosawás is not conventional tourism — it is one of Central America’s most important remaining wilderness ecosystems and appeals primarily to serious eco-travelers and researchers.
                `,extraPhotos:["/Reserva_bosawas/bosawas_2.jpg","/Reserva_bosawas/bosawas_3.jpg","/Reserva_bosawas/bosawas_4.jpg","/Reserva_bosawas/bosawas_5.jpg","/Reserva_bosawas/bosawas_1.jpg"],activities:["Hiking remote forest trails","Wildlife observation and photography","Learning about indigenous culture","Eco-tourism and nature exploration"],restaurantsAround:[{name:"Bosawás Eco Lodge",rating:"4.5"}],tips:["Travel with experienced guides for safety","Bring insect repellent, water, and sturdy shoes","Respect local communities and ecosystems","Plan multi-day trips due to remote location"]},{id:36,image:"Kukra_hill/kukra_hill_1.jpg",name:"Kukra Hill",departament:"RACCS",rating:"4.0",time:"6h 45min (≈340 km) 🚘 + 🚢",description:`
                Kukra Hill is a small Caribbean-region community in Nicaragua known for its tropical landscapes, agricultural activity, and strong connection to Afro-Caribbean and rural coastal culture. Located inland from Bluefields, the region offers a slower and more traditional Caribbean-side experience away from mainstream tourism.

                The area is characterized by:
                - Tropical vegetation
                - Agricultural landscapes
                - Rural communities
                - Caribbean climate

                ---

                🟡 HOW TO GET THERE

                🚗 + 🚤 Access typically occurs through Bluefields.

                From Bluefields:
                - Travel time varies depending on transportation conditions

                Transport options:
                - Local transportation
                - Rural roads
                - Regional connections

                ⚠️ Infrastructure may be limited compared to western Nicaragua.

                ---

                🟡 WHAT MAKES KUKRA HILL UNIQUE

                Kukra Hill is:
                - Deeply connected to Caribbean rural culture
                - Less tourist-developed
                - Surrounded by tropical vegetation
                - Focused on agriculture and local community life

                The destination feels highly authentic and non-commercial.

                ---

                🟡 REAL EXPERIENCE FLOW

                🌿 1. Rural Caribbean exploration
                Visitors experience:
                - Tropical landscapes
                - Small rural communities
                - Local agricultural life

                ---

                🍌 2. Agricultural environments
                The region is known for:
                - Banana production
                - Tropical farming
                - Caribbean-region agriculture

                ---

                🌧 3. Tropical climate immersion
                The area experiences:
                - Heavy rainfall
                - Dense humidity
                - Lush vegetation year-round

                ---

                🟡 COST OF EXPERIENCE

                - Budget traveler: $20–50 USD/day

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Expecting tourist infrastructure
                The area is community-oriented rather than tourism-focused.

                ❌ Mistake 2: Ignoring weather preparation
                Rainfall can affect roads and mobility.

                ❌ Mistake 3: Underestimating remoteness
                Services may be limited.

                ⚠️ Safety level:
                Generally safe for respectful travelers.

                ---

                🟡 TRAVEL INSIGHT

                Kukra Hill is valuable for travelers interested in experiencing a more traditional and rural side of Nicaragua’s Caribbean region rather than conventional tourist attractions.
                `,extraPhotos:["/Kukra_hill/kukra_hill_3.jpg","/Kukra_hill/kukra_hill_2.jpg","/Kukra_hill/kukra_hill_4.jpg","/Kukra_hill/kukra_hill_5.jpg","/Kukra_hill/kukra_hill_1.jpg"],activities:["Cultural immersion with local communities","Fishing and river exploration","Beach walks and nature observation","Photography of coastal and village life"],restaurantsAround:[{name:"Kukra Hill Eco Cafe",rating:"4.0"}],tips:["Plan logistics carefully due to remote location","Respect local culture and traditions","Bring supplies as local services are limited","Hire local guides for river and coastal activities"]},{id:37,image:"Cerro_mogoton/cerro_mogoton_1.jpg",name:"Cerro Mogotón",departament:"Nueva Segovia",rating:"4.7",time:"5h 30min (≈255 km) 🚘",description:`
                Cerro Mogotón is the highest mountain in Nicaragua, located near the border with Honduras in the northern department of Nueva Segovia. Rising above cloud forests and mountain ecosystems, the mountain attracts hikers, nature enthusiasts, and travelers interested in high-altitude landscapes.

                Unlike Nicaragua’s volcanoes, Cerro Mogotón is:
                - A non-volcanic mountain peak
                - Cooler in climate
                - Surrounded by dense forest ecosystems

                The region feels remote and mountainous compared to the Pacific lowlands.

                ---

                🟡 HOW TO GET THERE

                🚗 From Ocotal or nearby northern towns:
                - Travel times vary depending on route and weather

                Transport options:
                - Guided hikes
                - Private vehicle
                - Local transportation + trekking

                ⚠️ Mountain access may become difficult during rainy season.

                ---

                🟡 WHAT MAKES CERRO MOGOTÓN UNIQUE

                Cerro Mogotón is:
                - Nicaragua’s highest point
                - Covered by cloud forest ecosystems
                - Cooler than most of the country
                - Popular among advanced hikers

                The summit area often experiences fog and changing weather conditions.

                ---

                🟡 REAL EXPERIENCE FLOW

                🥾 1. Mountain ascent
                Hiking routes include:
                - Forest trails
                - Elevation gain
                - Rocky terrain
                - Humid mountain conditions

                Difficulty ranges from moderate to demanding.

                ---

                ☁️ 2. Cloud forest environment
                Visitors encounter:
                - Mist-covered forests
                - Cooler temperatures
                - High biodiversity

                The atmosphere changes dramatically compared to Nicaragua’s coastal regions.

                ---

                📸 3. Summit viewpoints
                On clear days, visitors may observe:
                - Mountain ranges
                - Valleys
                - Border-region landscapes

                Visibility depends heavily on weather conditions.

                ---

                🟡 COST OF EXPERIENCE

                - Guided hiking experience: $40–120 USD
                - Multi-day mountain trips: $100–250 USD

                ---

                🟡 SAFETY & COMMON MISTAKES

                ❌ Mistake 1: Underestimating mountain weather
                Conditions may become cold, wet, and foggy quickly.

                ❌ Mistake 2: Hiking without guides or preparation
                Trail conditions can become difficult.

                ❌ Mistake 3: Wearing inadequate footwear
                Mountain terrain may become slippery.

                ⚠️ Safety level:
                Generally safe for prepared hikers.

                ---

                🟡 TRAVEL INSIGHT

                Cerro Mogotón offers one of Nicaragua’s most physically rewarding mountain experiences because it combines altitude, cloud forest ecosystems, and remote northern landscapes rarely seen by mainstream tourists.
                `,extraPhotos:["/Cerro_mogoton/cerro_mogoton_2.jpg","/Cerro_mogoton/cerro_mogoton_3.jpg","/Cerro_mogoton/cerro_mogoton_4.jpg","/Cerro_mogoton/cerro_mogoton_5.jpg","/Cerro_mogoton/cerro_mogoton_1.jpg"],activities:["Hiking to Nicaragua’s highest peak","Birdwatching and wildlife observation","Photography of mountain landscapes","Exploring cloud forest trails"],restaurantsAround:[{name:"Ocotal Mountain Grill",rating:"4.3"}],tips:["Start early for the hike and changing weather conditions","Wear hiking boots and bring warm layers","Hire a local guide for safer navigation","Carry enough water and snacks for the trek"]}];function Bv(){const r=mh(),u=[...Th];for(;u.length<8;)u.push({});return b.jsxs("div",{className:"page-container",children:[b.jsxs("div",{className:"intro",children:[b.jsx("h1",{children:"Welcome to Nicaragua 🇳🇮"}),b.jsx("p",{children:"A country full of culture, history, and natural wonders. Explore our selection of recommended tourist destinations and find your next favorite place to visit."})]}),b.jsx("div",{className:"grid",children:u.map((c,o)=>b.jsx(Hv,{...c,onClick:()=>{c.id&&r(`/place/${c.id}`)}},o))})]})}function Gv(){return b.jsx("div",{className:"guide-container",children:b.jsxs("div",{className:"guide-card",children:[b.jsx("h1",{className:"guide-title",children:"Nicaragua Travel Guide"}),b.jsx("p",{className:"guide-text",children:"This website was created to help you discover the many places that make Nicaragua a unique and exciting destination. If you are planning a trip or simply looking for ideas on where to go, here you will find a collection of interesting attractions and popular tourist destinations."}),b.jsx("h2",{className:"guide-subtitle",children:"What You Will See on Each Destination"}),b.jsxs("ul",{className:"guide-list",children:[b.jsxs("li",{children:[b.jsx("strong",{children:"Place Name"}),": The official name of the tourist attraction or point of interest."]}),b.jsxs("li",{children:[b.jsx("strong",{children:"Department"}),": Each destination shows the department where it is located, helping you understand its regional position within the country."]}),b.jsxs("li",{children:[b.jsx("strong",{children:"Rating"}),': A small star "⭐" rating offering a quick, subjective idea of how notable or popular the destination is.']}),b.jsxs("li",{children:[b.jsx("strong",{children:"Distance & Travel Time"}),": Each trip estimate is calculated from Managua, so you can easily understand how far each place is and how long it usually takes to get there."]})]}),b.jsx("p",{className:"guide-end",children:"Enjoy exploring Nicaragua! 🇳🇮"})]})})}function qv(){return b.jsx("div",{className:"info-container",children:b.jsxs("div",{className:"info-card",children:[b.jsx("h1",{className:"info-title",children:"About This Website"}),b.jsx("p",{className:"guide-text",children:"This is not an official tourism website and does not represent any institution or organization. It was created as an independent guide for anyone who wants to explore Nicaragua, whether you are a local traveler looking for new places to visit or an international tourist interested in discovering what the country has to offer."}),b.jsx("p",{className:"guide-text",children:"This website is a work in progress and will continue improving over time. New features, more detailed information, and useful tools will be added gradually to enhance the overall experience. Everything is designed to be simple, clear, and helpful for planning your trips around the country."}),b.jsx("p",{className:"guide-text",children:"To improve the website and support it through advertising, we use third-party services such as Google Analytics and Google AdSense. These services may collect anonymized data such as pages visited, device information, and general location in order to understand how the website is used and to display relevant ads."}),b.jsx("p",{className:"guide-text",children:"If you are located in the European Economic Area (EEA), you will be asked to provide consent before cookies or tracking technologies are used. You can choose to accept or reject these cookies at any time."}),b.jsx("p",{className:"guide-text",children:"Your privacy is important, and we aim to handle all data responsibly and transparently while you explore the content freely."}),b.jsx("p",{className:"info-end",children:"Thank you for visiting 🇳🇮"})]})})}function _h(r){const u=T.useRef(r);return T.useEffect(()=>{u.current=r},[r]),u}function Zm(r){const u=_h(r);return T.useCallback(function(...c){return u.current&&u.current(...c)},[u])}function Vv(r,u){const c=T.useRef(!0);T.useEffect(()=>{if(c.current){c.current=!1;return}return r()},u)}function Yv(){const r=T.useRef(!0),u=T.useRef(()=>r.current);return T.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),u.current}function Xv(r){const u=T.useRef(r);return u.current=r,u}function Kv(r){const u=Xv(r);T.useEffect(()=>()=>u.current(),[])}const gu=2**31-1;function xh(r,u,c){const o=c-Date.now();r.current=o<=gu?setTimeout(u,o):setTimeout(()=>xh(r,u,c),gu)}function Qv(){const r=Yv(),u=T.useRef();return Kv(()=>clearTimeout(u.current)),T.useMemo(()=>{const c=()=>clearTimeout(u.current);function o(d,f=0){r()&&(c(),f<=gu?u.current=setTimeout(d,f):xh(u,d,Date.now()+f))}return{set:o,clear:c,handleRef:u}},[])}function Zv(r){const u=T.useRef(r);return T.useEffect(()=>{u.current=r},[r]),u}function $v(r){const u=Zv(r);return T.useCallback(function(...c){return u.current&&u.current(...c)},[u])}const Fv=["as","disabled"];function Jv(r,u){if(r==null)return{};var c={};for(var o in r)if({}.hasOwnProperty.call(r,o)){if(u.indexOf(o)>=0)continue;c[o]=r[o]}return c}function Wv(r){return!r||r.trim()==="#"}function Mh({tagName:r,disabled:u,href:c,target:o,rel:d,role:f,onClick:h,tabIndex:E=0,type:y}){r||(c!=null||o!=null||d!=null?r="a":r="button");const p={tagName:r};if(r==="button")return[{type:y||"button",disabled:u},p];const R=k=>{if((u||r==="a"&&Wv(c))&&k.preventDefault(),u){k.stopPropagation();return}h?.(k)},x=k=>{k.key===" "&&(k.preventDefault(),R(k))};return r==="a"&&(c||(c="#"),u&&(c=void 0)),[{role:f??"button",disabled:void 0,tabIndex:u?void 0:E,href:c,target:r==="a"?o:void 0,"aria-disabled":u||void 0,rel:r==="a"?d:void 0,onClick:R,onKeyDown:x},p]}const Pv=T.forwardRef((r,u)=>{let{as:c,disabled:o}=r,d=Jv(r,Fv);const[f,{tagName:h}]=Mh(Object.assign({tagName:c,disabled:o},d));return b.jsx(h,Object.assign({},d,f,{ref:u}))});Pv.displayName="Button";const Iv=["onKeyDown"];function eb(r,u){if(r==null)return{};var c={};for(var o in r)if({}.hasOwnProperty.call(r,o)){if(u.indexOf(o)>=0)continue;c[o]=r[o]}return c}function tb(r){return!r||r.trim()==="#"}const pu=T.forwardRef((r,u)=>{let{onKeyDown:c}=r,o=eb(r,Iv);const[d]=Mh(Object.assign({tagName:"a"},o)),f=$v(h=>{d.onKeyDown(h),c?.(h)});return tb(o.href)||o.role==="button"?b.jsx("a",Object.assign({ref:u},o,d,{onKeyDown:f})):b.jsx("a",Object.assign({ref:u},o,{onKeyDown:c}))});pu.displayName="Anchor";var uu={exports:{}};var $m;function ab(){return $m||($m=1,(function(r){(function(){var u={}.hasOwnProperty;function c(){for(var f="",h=0;h<arguments.length;h++){var E=arguments[h];E&&(f=d(f,o(E)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return c.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var h="";for(var E in f)u.call(f,E)&&f[E]&&(h=d(h,E));return h}function d(f,h){return h?f?f+" "+h:f+h:f}r.exports?(c.default=c,r.exports=c):window.classNames=c})()})(uu)),uu.exports}var nb=ab();const il=_u(nb);function yu(){return yu=Object.assign?Object.assign.bind():function(r){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var o in c)({}).hasOwnProperty.call(c,o)&&(r[o]=c[o])}return r},yu.apply(null,arguments)}function Ch(r,u){if(r==null)return{};var c={};for(var o in r)if({}.hasOwnProperty.call(r,o)){if(u.indexOf(o)!==-1)continue;c[o]=r[o]}return c}function Fm(r){return"default"+r.charAt(0).toUpperCase()+r.substr(1)}function ib(r){var u=lb(r,"string");return typeof u=="symbol"?u:String(u)}function lb(r,u){if(typeof r!="object"||r===null)return r;var c=r[Symbol.toPrimitive];if(c!==void 0){var o=c.call(r,u);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function rb(r,u,c){var o=T.useRef(r!==void 0),d=T.useState(u),f=d[0],h=d[1],E=r!==void 0,y=o.current;return o.current=E,!E&&y&&f!==u&&h(u),[E?r:f,T.useCallback(function(p){for(var R=arguments.length,x=new Array(R>1?R-1:0),k=1;k<R;k++)x[k-1]=arguments[k];c&&c.apply(void 0,[p].concat(x)),h(p)},[c])]}function ob(r,u){return Object.keys(u).reduce(function(c,o){var d,f=c,h=f[Fm(o)],E=f[o],y=Ch(f,[Fm(o),o].map(ib)),p=u[o],R=rb(E,h,r[p]),x=R[0],k=R[1];return yu({},y,(d={},d[o]=x,d[p]=k,d))},r)}function vu(r,u){return vu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,o){return c.__proto__=o,c},vu(r,u)}function sb(r,u){r.prototype=Object.create(u.prototype),r.prototype.constructor=r,vu(r,u)}const ub=["xxl","xl","lg","md","sm","xs"],cb="xs",Nu=T.createContext({prefixes:{},breakpoints:ub,minBreakpoint:cb}),{Consumer:n0,Provider:i0}=Nu;function ju(r,u){const{prefixes:c}=T.useContext(Nu);return r||c[u]||u}function fb(){const{dir:r}=T.useContext(Nu);return r==="rtl"}const Ah=T.forwardRef(({className:r,bsPrefix:u,as:c="div",...o},d)=>(u=ju(u,"carousel-caption"),b.jsx(c,{ref:d,className:il(r,u),...o})));Ah.displayName="CarouselCaption";const Rh=T.forwardRef(({as:r="div",bsPrefix:u,className:c,...o},d)=>{const f=il(c,ju(u,"carousel-item"));return b.jsx(r,{ref:d,...o,className:f})});Rh.displayName="CarouselItem";function Jm(r,u){let c=0;return T.Children.map(r,o=>T.isValidElement(o)?u(o,c++):o)}function db(r,u){let c=0;T.Children.forEach(r,o=>{T.isValidElement(o)&&u(o,c++)})}function mb(r){return r&&r.ownerDocument||document}function hb(r){var u=mb(r);return u&&u.defaultView||window}function gb(r,u){return hb(r).getComputedStyle(r,u)}var pb=/([A-Z])/g;function yb(r){return r.replace(pb,"-$1").toLowerCase()}var vb=/^ms-/;function Dr(r){return yb(r).replace(vb,"-ms-")}var bb=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Sb(r){return!!(r&&bb.test(r))}function wh(r,u){var c="",o="";if(typeof u=="string")return r.style.getPropertyValue(Dr(u))||gb(r).getPropertyValue(Dr(u));Object.keys(u).forEach(function(d){var f=u[d];!f&&f!==0?r.style.removeProperty(Dr(d)):Sb(d)?o+=d+"("+f+") ":c+=Dr(d)+": "+f+";"}),o&&(c+="transform: "+o+";"),r.style.cssText+=";"+c}const Eb=!!(typeof window<"u"&&window.document&&window.document.createElement);var bu=!1,Su=!1;try{var cu={get passive(){return bu=!0},get once(){return Su=bu=!0}};Eb&&(window.addEventListener("test",cu,cu),window.removeEventListener("test",cu,!0))}catch{}function Tb(r,u,c,o){if(o&&typeof o!="boolean"&&!Su){var d=o.once,f=o.capture,h=c;!Su&&d&&(h=c.__once||function E(y){this.removeEventListener(u,E,f),c.call(this,y)},c.__once=h),r.addEventListener(u,h,bu?o:f)}r.addEventListener(u,c,o)}function _b(r,u,c,o){var d=o&&typeof o!="boolean"?o.capture:o;r.removeEventListener(u,c,d),c.__once&&r.removeEventListener(u,c.__once,d)}function Oh(r,u,c,o){return Tb(r,u,c,o),function(){_b(r,u,c,o)}}function xb(r,u,c,o){if(o===void 0&&(o=!0),r){var d=document.createEvent("HTMLEvents");d.initEvent(u,c,o),r.dispatchEvent(d)}}function Mb(r){var u=wh(r,"transitionDuration")||"",c=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*c}function Cb(r,u,c){c===void 0&&(c=5);var o=!1,d=setTimeout(function(){o||xb(r,"transitionend",!0)},u+c),f=Oh(r,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(d),f()}}function Ab(r,u,c,o){c==null&&(c=Mb(r)||0);var d=Cb(r,c,o),f=Oh(r,"transitionend",u);return function(){d(),f()}}function Wm(r,u){const c=wh(r,u)||"",o=c.indexOf("ms")===-1?1e3:1;return parseFloat(c)*o}function Rb(r,u){const c=Wm(r,"transitionDuration"),o=Wm(r,"transitionDelay"),d=Ab(r,f=>{f.target===r&&(d(),u(f))},c+o)}function wb(r){r.offsetHeight}const Pm={disabled:!1},Nh=fn.createContext(null);var Ob=function(u){return u.scrollTop},nl="unmounted",un="exited",cn="entering",ti="entered",Eu="exiting",ga=(function(r){sb(u,r);function u(o,d){var f;f=r.call(this,o,d)||this;var h=d,E=h&&!h.isMounting?o.enter:o.appear,y;return f.appearStatus=null,o.in?E?(y=un,f.appearStatus=cn):y=ti:o.unmountOnExit||o.mountOnEnter?y=nl:y=un,f.state={status:y},f.nextCallback=null,f}u.getDerivedStateFromProps=function(d,f){var h=d.in;return h&&f.status===nl?{status:un}:null};var c=u.prototype;return c.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},c.componentDidUpdate=function(d){var f=null;if(d!==this.props){var h=this.state.status;this.props.in?h!==cn&&h!==ti&&(f=cn):(h===cn||h===ti)&&(f=Eu)}this.updateStatus(!1,f)},c.componentWillUnmount=function(){this.cancelNextCallback()},c.getTimeouts=function(){var d=this.props.timeout,f,h,E;return f=h=E=d,d!=null&&typeof d!="number"&&(f=d.exit,h=d.enter,E=d.appear!==void 0?d.appear:h),{exit:f,enter:h,appear:E}},c.updateStatus=function(d,f){if(d===void 0&&(d=!1),f!==null)if(this.cancelNextCallback(),f===cn){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:al.findDOMNode(this);h&&Ob(h)}this.performEnter(d)}else this.performExit();else this.props.unmountOnExit&&this.state.status===un&&this.setState({status:nl})},c.performEnter=function(d){var f=this,h=this.props.enter,E=this.context?this.context.isMounting:d,y=this.props.nodeRef?[E]:[al.findDOMNode(this),E],p=y[0],R=y[1],x=this.getTimeouts(),k=E?x.appear:x.enter;if(!d&&!h||Pm.disabled){this.safeSetState({status:ti},function(){f.props.onEntered(p)});return}this.props.onEnter(p,R),this.safeSetState({status:cn},function(){f.props.onEntering(p,R),f.onTransitionEnd(k,function(){f.safeSetState({status:ti},function(){f.props.onEntered(p,R)})})})},c.performExit=function(){var d=this,f=this.props.exit,h=this.getTimeouts(),E=this.props.nodeRef?void 0:al.findDOMNode(this);if(!f||Pm.disabled){this.safeSetState({status:un},function(){d.props.onExited(E)});return}this.props.onExit(E),this.safeSetState({status:Eu},function(){d.props.onExiting(E),d.onTransitionEnd(h.exit,function(){d.safeSetState({status:un},function(){d.props.onExited(E)})})})},c.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},c.safeSetState=function(d,f){f=this.setNextCallback(f),this.setState(d,f)},c.setNextCallback=function(d){var f=this,h=!0;return this.nextCallback=function(E){h&&(h=!1,f.nextCallback=null,d(E))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},c.onTransitionEnd=function(d,f){this.setNextCallback(f);var h=this.props.nodeRef?this.props.nodeRef.current:al.findDOMNode(this),E=d==null&&!this.props.addEndListener;if(!h||E){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var y=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],p=y[0],R=y[1];this.props.addEndListener(p,R)}d!=null&&setTimeout(this.nextCallback,d)},c.render=function(){var d=this.state.status;if(d===nl)return null;var f=this.props,h=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var E=Ch(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return fn.createElement(Nh.Provider,{value:null},typeof h=="function"?h(d,E):fn.cloneElement(fn.Children.only(h),E))},u})(fn.Component);ga.contextType=Nh;ga.propTypes={};function In(){}ga.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:In,onEntering:In,onEntered:In,onExit:In,onExiting:In,onExited:In};ga.UNMOUNTED=nl;ga.EXITED=un;ga.ENTERING=cn;ga.ENTERED=ti;ga.EXITING=Eu;const Im=r=>!r||typeof r=="function"?r:u=>{r.current=u};function Nb(r,u){const c=Im(r),o=Im(u);return d=>{c&&c(d),o&&o(d)}}function jb(r,u){return T.useMemo(()=>Nb(r,u),[r,u])}function Db(r){return r&&"setState"in r?al.findDOMNode(r):r??null}const jh=fn.forwardRef(({onEnter:r,onEntering:u,onEntered:c,onExit:o,onExiting:d,onExited:f,addEndListener:h,children:E,childRef:y,...p},R)=>{const x=T.useRef(null),k=jb(x,y),X=me=>{k(Db(me))},G=me=>W=>{me&&x.current&&me(x.current,W)},q=T.useCallback(G(r),[r]),L=T.useCallback(G(u),[u]),K=T.useCallback(G(c),[c]),I=T.useCallback(G(o),[o]),F=T.useCallback(G(d),[d]),ce=T.useCallback(G(f),[f]),he=T.useCallback(G(h),[h]);return b.jsx(ga,{ref:R,...p,onEnter:q,onEntered:K,onEntering:L,onExit:I,onExited:ce,onExiting:F,addEndListener:he,nodeRef:x,children:typeof E=="function"?(me,W)=>E(me,{...W,ref:X}):fn.cloneElement(E,{ref:X})})});jh.displayName="TransitionWrapper";const Ub=40;function kb(r){if(!r||!r.style||!r.parentNode||!r.parentNode.style)return!1;const u=getComputedStyle(r);return u.display!=="none"&&u.visibility!=="hidden"&&getComputedStyle(r.parentNode).display!=="none"}const Dh=T.forwardRef(({defaultActiveIndex:r=0,...u},c)=>{const{as:o="div",bsPrefix:d,slide:f=!0,fade:h=!1,controls:E=!0,indicators:y=!0,indicatorLabels:p=[],activeIndex:R,onSelect:x,onSlide:k,onSlid:X,interval:G=5e3,keyboard:q=!0,onKeyDown:L,pause:K="hover",onMouseOver:I,onMouseOut:F,wrap:ce=!0,touch:he=!0,onTouchStart:me,onTouchMove:W,onTouchEnd:Ae,prevIcon:Ze=b.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:yt="Previous",nextIcon:rt=b.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Ke="Next",variant:vt,className:ot,children:Oe,...N}=ob({defaultActiveIndex:r,...u},{activeIndex:"onSelect"}),z=ju(d,"carousel"),Z=fb(),fe=T.useRef(null),[Se,S]=T.useState("next"),[U,H]=T.useState(!1),[V,ee]=T.useState(!1),[J,ge]=T.useState(R||0);T.useEffect(()=>{!V&&R!==J&&(fe.current?S(fe.current):S((R||0)>J?"next":"prev"),f&&ee(!0),ge(R||0))},[R,V,J,f]),T.useEffect(()=>{fe.current&&(fe.current=null)});let De=0,Ne;db(Oe,(te,pe)=>{++De,pe===R&&(Ne=te.props.interval)});const pa=_h(Ne),nt=T.useCallback(te=>{if(V)return;let pe=J-1;if(pe<0){if(!ce)return;pe=De-1}fe.current="prev",x?.(pe,te)},[V,J,x,ce,De]),st=Zm(te=>{if(V)return;let pe=J+1;if(pe>=De){if(!ce)return;pe=0}fe.current="next",x?.(pe,te)}),dn=T.useRef();T.useImperativeHandle(c,()=>({element:dn.current,prev:nt,next:st}));const qt=Zm(()=>{!document.hidden&&kb(dn.current)&&(Z?nt():st())}),zt=Se==="next"?"start":"end";Vv(()=>{f||(k?.(J,zt),X?.(J,zt))},[J]);const ii=`${z}-item-${Se}`,Br=`${z}-item-${zt}`,ul=T.useCallback(te=>{wb(te),k?.(J,zt)},[k,J,zt]),li=T.useCallback(()=>{ee(!1),X?.(J,zt)},[X,J,zt]),ri=T.useCallback(te=>{if(q&&!/input|textarea/i.test(te.target.tagName))switch(te.key){case"ArrowLeft":te.preventDefault(),Z?st(te):nt(te);return;case"ArrowRight":te.preventDefault(),Z?nt(te):st(te);return}L?.(te)},[q,L,nt,st,Z]),oi=T.useCallback(te=>{K==="hover"&&H(!0),I?.(te)},[K,I]),Gr=T.useCallback(te=>{H(!1),F?.(te)},[F]),cl=T.useRef(0),$e=T.useRef(0),fl=Qv(),dl=T.useCallback(te=>{cl.current=te.touches[0].clientX,$e.current=0,K==="hover"&&H(!0),me?.(te)},[K,me]),ml=T.useCallback(te=>{te.touches&&te.touches.length>1?$e.current=0:$e.current=te.touches[0].clientX-cl.current,W?.(te)},[W]),mn=T.useCallback(te=>{if(he){const pe=$e.current;Math.abs(pe)>Ub&&(pe>0?nt(te):st(te))}K==="hover"&&fl.set(()=>{H(!1)},G||void 0),Ae?.(te)},[he,K,nt,st,fl,G,Ae]),hl=G!=null&&!U&&!V,hn=T.useRef();T.useEffect(()=>{var te,pe;if(!hl)return;const Ue=Z?nt:st;return hn.current=window.setInterval(document.visibilityState?qt:Ue,(te=(pe=pa.current)!=null?pe:G)!=null?te:void 0),()=>{hn.current!==null&&clearInterval(hn.current)}},[hl,nt,st,pa,G,qt,Z]);const gl=T.useMemo(()=>y&&Array.from({length:De},(te,pe)=>Ue=>{x?.(pe,Ue)}),[y,De,x]);return b.jsxs(o,{ref:dn,...N,onKeyDown:ri,onMouseOver:oi,onMouseOut:Gr,onTouchStart:dl,onTouchMove:ml,onTouchEnd:mn,className:il(ot,z,f&&"slide",h&&`${z}-fade`,vt&&`${z}-${vt}`),children:[y&&b.jsx("div",{className:`${z}-indicators`,children:Jm(Oe,(te,pe)=>b.jsx("button",{type:"button","data-bs-target":"","aria-label":p!=null&&p.length?p[pe]:`Slide ${pe+1}`,className:pe===J?"active":void 0,onClick:gl?gl[pe]:void 0,"aria-current":pe===J},pe))}),b.jsx("div",{className:`${z}-inner`,children:Jm(Oe,(te,pe)=>{const Ue=pe===J;return f?b.jsx(jh,{in:Ue,onEnter:Ue?ul:void 0,onEntered:Ue?li:void 0,addEndListener:Rb,children:(ut,it)=>T.cloneElement(te,{...it,className:il(te.props.className,Ue&&ut!=="entered"&&ii,(ut==="entered"||ut==="exiting")&&"active",(ut==="entering"||ut==="exiting")&&Br)})}):T.cloneElement(te,{className:il(te.props.className,Ue&&"active")})})}),E&&b.jsxs(b.Fragment,{children:[(ce||R!==0)&&b.jsxs(pu,{className:`${z}-control-prev`,onClick:nt,children:[Ze,yt&&b.jsx("span",{className:"visually-hidden",children:yt})]}),(ce||R!==De-1)&&b.jsxs(pu,{className:`${z}-control-next`,onClick:st,children:[rt,Ke&&b.jsx("span",{className:"visually-hidden",children:Ke})]})]})]})});Dh.displayName="Carousel";const fu=Object.assign(Dh,{Caption:Ah,Item:Rh});function Lb({photos:r,title:u}){return b.jsx(fu,{fade:!0,style:{borderRadius:"20px",overflow:"hidden"},children:r.map((c,o)=>b.jsxs(fu.Item,{children:[b.jsx("img",{src:c,alt:`${u} photo ${o+1}`,style:{width:"100%",maxHeight:"500px",objectFit:"cover"}}),b.jsx(fu.Caption,{children:b.jsxs("p",{children:[u," - Photo ",o+1]})})]},o))})}const le={bg:"#0c1417",panel:"#152025",panelAlt:"#1a262c",border:"#233036",teal:"#3fd6c8",tealDim:"#2a9a90",tealSoft:"rgba(63,214,200,0.12)",coral:"#ff8c5a",coralSoft:"rgba(255,140,90,0.14)",amber:"#f0c34d",amberSoft:"rgba(240,195,77,0.12)",text:"#eef4f3",textMuted:"#94a8ac",textFaint:"#5f7378"};function He(r=""){return r.replace(/^\s*---\s*$/gm," ").replace(/\s+/g," ").trim()}function zb(r){return r.replace(/ {2,}/g,`
`)}function Hb(r){const u=r.indexOf(`
`);return u>0?{title:He(r.slice(0,u)),body:r.slice(u).trim()}:{title:He(r),body:""}}function Bb(r){const u=r.toLowerCase();return u.includes("how to get")||u.includes("get to")?"transport":u.includes("special")||u.includes("unique")||u.startsWith("what makes")?"special":u.includes("experience")&&!u.includes("insight")?"experiences":u.includes("cost")||u.includes("budget")?"budget":u.includes("safety")||u.includes("mistake")?"safety":u.includes("personal")||u.includes("insight")?"personal":"generic"}function Uh(r){const u=r.match(/💰([^\n]*)((?:\n\s*-[^\n]*)*)/);if(!u)return{costText:null,stripped:r};const c=He(u[1]),o=(u[2]||"").split(`
`).map(f=>f.replace(/^\s*-+\s*/,"").trim()).filter(Boolean);return{costText:o.length?He(`${c}${c.endsWith(":")?"":":"} ${o.join(", ")}`):c||null,stripped:r.replace(u[0],"")}}const Gb=/^\s*(?:✈️|⛴️?|🚗|🚘|🚕|🚌|🚍|🚢|🛥️?|🚤)[^\n]*/gmu,qb=/✈️|⛴️?|🚗|🚘|🚕|🚌|🚍|🚢|🛥️?|🚤/u,Vb=/^[\p{Extended_Pictographic}\uFE0F\s+]+/u;function Yb(r){const u=[...r.matchAll(Gb)].map(d=>({start:d.index,len:d[0].length,header:d[0].trim()}));if(!u.length)return{intro:"",options:[]};const c=He(r.slice(0,u[0].start)),o=u.map((d,f)=>{const h=f+1<u.length?u[f+1].start:r.length;let E=r.slice(d.start+d.len,h);const y=E.match(/⚠️\s*(?:Important:?\s*)?([^]*)$/i),p=y?He(y[1]):null;y&&(E=E.slice(0,y.index));const R=E.match(/(?:Duration|Travel time):\s*([^\n]+)/i),x=E.match(/(?:Price range|Cost|Price):\s*([^\n]+)/i),k=K=>K?He(K).replace(/^-+\s*/,""):null;let X=k(x?.[1]),G=E.replace(/(?:Duration|Travel time|Price range|Cost|Price):[^\n]+/gi,"");if(!X){const{costText:K,stripped:I}=Uh(G);X=K,G=I}const q=d.header.match(qb)?.[0]||"🧭";return{header:He(d.header.replace(Vb,""))||"Route option",icon:q,duration:k(R?.[1]),price:X,note:p||null,raw:He(G)}});return{intro:c,options:o}}const Xb=new RegExp("^\\s*\\p{Extended_Pictographic}\\uFE0F?\\s*\\d+\\.\\s*[^\\n]+","gmu"),eh=/❌\s*Mistake\s*\d+:[^\n]*/g;function Kb(r){const u=[...r.matchAll(Xb)].map(d=>({start:d.index,len:d[0].length,header:d[0].trim()}));if(!u.length)return{intro:He(r),items:[]};const c=He(r.slice(0,u[0].start)),o=u.map((d,f)=>{const h=f+1<u.length?u[f+1].start:r.length,E=r.slice(d.start+d.len,h),{costText:y,stripped:p}=Uh(E),R=He(p),x=He(d.header.replace(new RegExp("^\\p{Extended_Pictographic}\\uFE0F?\\s*\\d+\\.\\s*","u"),""));return{icon:d.header.match(new RegExp("\\p{Extended_Pictographic}","u"))?.[0]||"✨",title:x,text:R,cost:y}});return{intro:c,items:o}}function Qb(r){const u=[...r.matchAll(eh)].map(d=>({start:d.index,header:d[0].trim()})),c=u.map((d,f)=>{const h=f+1<u.length?u[f+1].start:r.length;let E=r.slice(d.start,h);E=E.split("⚠️")[0];const y=d.header.match(/Mistake\s*\d+/i)?.[0]||"Mistake",p=He(E.replace(eh,"")),R=d.header.replace(/❌\s*Mistake\s*\d+:\s*/i,"");return{label:y,text:He(`${R} ${p}`)}}),o=r.match(/⚠️\s*Safety level:\s*([^]*)$/i);return{mistakes:c,safetyNote:o?He(o[1]):null}}function Zb(r){const u=r.split(`
`).map(f=>f.trim()).filter(Boolean),c=[],o=[],d=/^-\s*([^:\n]+):\s*(\$[^\n]+)$/;return u.forEach(f=>{const h=f.match(d);h?c.push({label:He(h[1]),range:He(h[2])}):o.push(f)}),{tiers:c,note:He(o.join(" "))}}function $b(r){if(!r)return{intro:"",sections:[]};const c=zb(r.trim()).split("🟡").map(f=>f.trim()).filter(Boolean);if(c.length<2)return{intro:He(r),sections:[]};const o=He(c[0]),d=c.slice(1).map(f=>{const{title:h,body:E}=Hb(f),y=Bb(h);let p={};return y==="transport"?p=Yb(E):y==="experiences"?p=Kb(E):y==="safety"?p=Qb(E):y==="budget"?p=Zb(E):p={text:He(E)},{title:h,type:y,body:E,...p}});return{intro:o,sections:d}}function on({children:r}){return b.jsx("div",{style:B.eyebrow,children:r})}function ei({children:r}){return b.jsx("h2",{style:B.sectionHeading,children:r})}function Fb({option:r}){const u=/budget/i.test(r.header);return b.jsxs("div",{style:B.ticket,children:[b.jsxs("div",{style:B.ticketStub,children:[b.jsx("span",{style:{fontSize:26},children:r.icon}),b.jsx("span",{style:B.ticketStubLabel,children:u?"BUDGET":"FAST"})]}),b.jsx("div",{style:B.ticketPerforation,"aria-hidden":"true"}),b.jsxs("div",{style:B.ticketBody,children:[b.jsx("div",{style:B.ticketHeader,children:r.header}),(r.duration||r.price)&&b.jsxs("div",{style:B.ticketStats,children:[r.duration&&b.jsxs("div",{children:[b.jsx("div",{style:B.ticketStatLabel,children:"DURATION"}),b.jsx("div",{style:B.ticketStatValue,children:r.duration})]}),r.price&&b.jsxs("div",{children:[b.jsx("div",{style:B.ticketStatLabel,children:"PRICE"}),b.jsx("div",{style:B.ticketStatValue,children:r.price})]})]}),r.raw&&b.jsx("p",{style:B.ticketText,children:r.raw}),r.note&&b.jsxs("div",{style:B.noteBox,children:[b.jsx("strong",{style:{color:le.amber},children:"Note — "}),r.note]})]})]})}function Jb({item:r}){return b.jsxs("div",{style:B.expCard,children:[b.jsx("div",{style:B.expIcon,children:r.icon}),b.jsx("h3",{style:B.expTitle,children:r.title}),b.jsx("p",{style:B.expText,children:r.text}),r.cost&&b.jsx("span",{style:B.pricePill,children:r.cost})]})}function Wb({tiers:r,note:u}){if(!r.length)return null;const c=r.map(d=>{const f=d.range.match(/[\d,]+/g)||["0"];return parseInt(f[f.length-1].replace(/,/g,""),10)}),o=Math.max(...c,1);return b.jsxs("div",{children:[b.jsx("div",{style:B.budgetGrid,children:r.map((d,f)=>b.jsxs("div",{style:B.budgetRow,children:[b.jsx("div",{style:B.budgetLabel,children:d.label}),b.jsx("div",{style:B.budgetTrack,children:b.jsx("div",{style:{...B.budgetFill,width:`${Math.max(12,c[f]/o*100)}%`}})}),b.jsx("div",{style:B.budgetRange,children:d.range})]},f))}),u&&b.jsx("p",{style:B.budgetNote,children:u})]})}function Pb(){const{id:r}=hh(),u=Th.find(f=>f.id===Number(r));if(!u)return b.jsx("div",{style:{...B.page,display:"flex",alignItems:"center",justifyContent:"center"},children:b.jsxs("div",{style:{textAlign:"center"},children:[b.jsx("h1",{style:{color:le.text,fontFamily:"'Fraunces', serif"},children:"Place not found"}),b.jsx(Qt,{to:"/",style:B.backLink,children:"← Back to all places"})]})});const{intro:c,sections:o}=$b(u.description),d=u.extraPhotos?.[0]||u.image;return b.jsxs("div",{style:B.page,children:[b.jsx("style",{children:Ib}),b.jsxs("div",{style:B.hero,children:[d&&b.jsx("img",{src:d,alt:u.name,style:B.heroImage}),b.jsx("div",{style:B.heroOverlay}),b.jsx(Qt,{to:"/",style:B.backLink,children:"← Back"}),b.jsxs("div",{style:B.heroContent,children:[u.location&&b.jsx(on,{children:u.location}),b.jsx("h1",{style:B.title,children:u.name}),b.jsxs("div",{style:B.chipRow,children:[u.rating&&b.jsxs("span",{style:B.chip,children:["★ ",u.rating]}),u.duration&&b.jsx("span",{style:B.chip,children:u.duration}),u.distance&&b.jsx("span",{style:B.chip,children:u.distance})]})]})]}),b.jsxs("div",{style:B.container,children:[c&&b.jsx("p",{style:B.lede,children:c}),u.extraPhotos?.length>0&&b.jsxs("div",{style:B.gallerySection,children:[b.jsx(on,{children:"Gallery"}),b.jsx("div",{style:B.galleryFrame,children:b.jsx(Lb,{photos:u.extraPhotos})})]}),o.map((f,h)=>f.type==="transport"?b.jsxs("section",{style:B.section,children:[b.jsx(on,{children:"Logistics"}),b.jsx(ei,{children:f.title}),f.intro&&b.jsx("p",{style:B.bodyText,children:f.intro}),f.options?.length>0?b.jsx("div",{style:B.ticketRow,children:f.options.map((E,y)=>b.jsx(Fb,{option:E},y))}):b.jsx("p",{style:B.bodyText,children:f.body})]},h):f.type==="special"?b.jsx("section",{style:B.section,children:b.jsxs("div",{style:B.callout,children:[b.jsx(on,{children:"Why it's different"}),b.jsx(ei,{children:f.title.replace(/:\s*$/,"")}),b.jsx("p",{style:B.bodyText,children:f.text||f.body})]})},h):f.type==="experiences"?b.jsxs("section",{style:B.section,children:[b.jsx(on,{children:"What to actually do"}),b.jsx(ei,{children:f.title}),f.intro&&b.jsx("p",{style:B.bodyText,children:f.intro}),f.items?.length>0?b.jsx("div",{style:B.expGrid,children:f.items.map((E,y)=>b.jsx(Jb,{item:E},y))}):b.jsx("p",{style:B.bodyText,children:f.body})]},h):f.type==="budget"?b.jsxs("section",{style:B.section,children:[b.jsx(on,{children:"Daily budget"}),b.jsx(ei,{children:f.title.split(" - ")[0]}),f.tiers?.length>0?b.jsx(Wb,{tiers:f.tiers,note:f.note}):b.jsx("p",{style:B.bodyText,children:f.body})]},h):f.type==="safety"?b.jsxs("section",{style:B.section,children:[b.jsx(on,{children:"Before you go"}),b.jsx(ei,{children:f.title}),f.mistakes?.length>0?b.jsx("div",{style:B.mistakeList,children:f.mistakes.map((E,y)=>b.jsxs("div",{style:B.mistakeRow,children:[b.jsx("span",{style:B.mistakeMark,children:"✕"}),b.jsx("p",{style:B.mistakeText,children:E.text})]},y))}):b.jsx("p",{style:B.bodyText,children:f.body}),f.safetyNote&&b.jsxs("div",{style:B.safetyBadge,children:[b.jsx("strong",{style:{color:le.teal},children:"Safety — "}),f.safetyNote]})]},h):f.type==="personal"?b.jsx("section",{style:B.section,children:b.jsxs("div",{style:B.quoteBlock,children:[b.jsx("span",{style:B.quoteMark,children:"“"}),b.jsx("p",{style:B.quoteText,children:f.text||f.body})]})},h):b.jsxs("section",{style:B.section,children:[b.jsx(ei,{children:f.title}),b.jsx("p",{style:B.bodyText,children:f.text||f.body})]},h)),o.length===0&&!c&&u.description&&b.jsx("p",{style:B.bodyText,children:u.description}),b.jsx("div",{style:B.footerNav,children:b.jsx(Qt,{to:"/",style:B.footerLink,children:"← Explore more places in Nicaragua"})})]})]})}const Ib=`
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');
`,B={page:{minHeight:"100vh",background:le.bg,fontFamily:"'Inter', sans-serif",color:le.text},hero:{position:"relative",height:"56vh",minHeight:360,overflow:"hidden"},heroImage:{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:"saturate(1.05)"},heroOverlay:{position:"absolute",inset:0,background:`linear-gradient(180deg, rgba(12,20,23,0.15) 0%, rgba(12,20,23,0.35) 55%, ${le.bg} 100%)`},backLink:{position:"absolute",top:24,left:24,color:"#fff",textDecoration:"none",fontSize:14,fontWeight:500,background:"rgba(12,20,23,0.45)",backdropFilter:"blur(6px)",padding:"8px 14px",borderRadius:999,border:"1px solid rgba(255,255,255,0.15)"},heroContent:{position:"absolute",left:0,right:0,bottom:0,padding:"0 24px 36px",maxWidth:1100,margin:"0 auto"},eyebrow:{fontFamily:"'JetBrains Mono', monospace",fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",color:le.teal,marginBottom:10,fontWeight:600},title:{fontFamily:"'Fraunces', serif",fontSize:"clamp(32px, 5vw, 56px)",fontWeight:600,color:"#fff",margin:"0 0 14px",lineHeight:1.05},chipRow:{display:"flex",gap:10,flexWrap:"wrap"},chip:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,color:"#fff",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",padding:"6px 12px",borderRadius:999},container:{maxWidth:880,margin:"0 auto",padding:"48px 24px 100px"},lede:{fontFamily:"'Fraunces', serif",fontSize:22,lineHeight:1.6,color:"#dce7e6",fontWeight:400,marginBottom:48},gallerySection:{marginBottom:56},galleryFrame:{borderRadius:20,overflow:"hidden",border:`1px solid ${le.border}`,boxShadow:"0 20px 50px rgba(0,0,0,0.35)"},section:{marginBottom:56},sectionHeading:{fontFamily:"'Fraunces', serif",fontSize:28,fontWeight:600,color:"#fff",margin:"0 0 16px"},bodyText:{fontSize:16.5,lineHeight:1.75,color:le.textMuted,marginBottom:12},ticketRow:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:20,marginTop:20},ticket:{display:"flex",background:le.panel,border:`1px solid ${le.border}`,borderRadius:16,overflow:"hidden"},ticketStub:{width:76,flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,background:le.tealSoft,padding:"16px 8px"},ticketStubLabel:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.08em",color:le.teal,fontWeight:600},ticketPerforation:{width:0,borderLeft:`2px dashed ${le.border}`,margin:"14px 0"},ticketBody:{padding:"18px 20px",flex:1},ticketHeader:{fontFamily:"'Fraunces', serif",fontSize:17,fontWeight:600,color:"#fff",marginBottom:12},ticketStats:{display:"flex",gap:24,marginBottom:12},ticketStatLabel:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.08em",color:le.textFaint,marginBottom:4},ticketStatValue:{fontFamily:"'JetBrains Mono', monospace",fontSize:14,color:le.coral,fontWeight:600},ticketText:{fontSize:14.5,lineHeight:1.6,color:le.textMuted,marginBottom:10},noteBox:{fontSize:13.5,lineHeight:1.55,color:le.textMuted,background:le.amberSoft,border:"1px solid rgba(240,195,77,0.25)",borderRadius:10,padding:"10px 12px",marginTop:8},callout:{borderLeft:`3px solid ${le.teal}`,background:le.panelAlt,borderRadius:"0 16px 16px 0",padding:"24px 28px"},expGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:18,marginTop:20},expCard:{background:le.panel,border:`1px solid ${le.border}`,borderRadius:16,padding:"22px 20px",position:"relative"},expIcon:{fontSize:26,marginBottom:10},expTitle:{fontFamily:"'Fraunces', serif",fontSize:17,fontWeight:600,color:"#fff",margin:"0 0 8px"},expText:{fontSize:14.5,lineHeight:1.65,color:le.textMuted,marginBottom:16},pricePill:{display:"inline-block",fontFamily:"'JetBrains Mono', monospace",fontSize:12.5,fontWeight:600,color:le.coral,background:le.coralSoft,padding:"5px 12px",borderRadius:999},budgetGrid:{display:"flex",flexDirection:"column",gap:16,marginTop:20},budgetRow:{display:"grid",gridTemplateColumns:"140px 1fr 150px",alignItems:"center",gap:16},budgetLabel:{fontSize:14,color:le.text,fontWeight:500},budgetTrack:{height:10,background:le.panelAlt,borderRadius:999,overflow:"hidden"},budgetFill:{height:"100%",background:`linear-gradient(90deg, ${le.tealDim}, ${le.teal})`,borderRadius:999},budgetRange:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,color:le.textMuted,textAlign:"right"},budgetNote:{fontSize:14,color:le.textFaint,marginTop:18,fontStyle:"italic"},mistakeList:{display:"flex",flexDirection:"column",gap:12,marginTop:16},mistakeRow:{display:"flex",gap:14,alignItems:"flex-start",background:le.panel,border:`1px solid ${le.border}`,borderRadius:12,padding:"14px 16px"},mistakeMark:{color:le.coral,fontWeight:700,fontSize:15,lineHeight:1.6},mistakeText:{fontSize:14.5,lineHeight:1.6,color:le.textMuted,margin:0},safetyBadge:{marginTop:16,fontSize:14.5,lineHeight:1.6,color:le.textMuted,background:le.tealSoft,border:"1px solid rgba(63,214,200,0.25)",borderRadius:12,padding:"14px 16px"},quoteBlock:{position:"relative",padding:"12px 0 12px 44px"},quoteMark:{position:"absolute",left:-6,top:-20,fontFamily:"'Fraunces', serif",fontSize:90,color:le.tealDim,opacity:.5,lineHeight:1},quoteText:{fontFamily:"'Fraunces', serif",fontStyle:"italic",fontSize:21,lineHeight:1.65,color:"#dce7e6"},footerNav:{marginTop:64,paddingTop:32,borderTop:`1px solid ${le.border}`,textAlign:"center"},footerLink:{color:le.teal,textDecoration:"none",fontSize:15,fontWeight:500}},Tu=[{id:1,title:"Best Beaches in Nicaragua",content:["Nicaragua is still one of the most underrated beach destinations in Central America, yet it offers some of the most diverse coastal landscapes you will find in the region. From the calm Caribbean waters to the powerful Pacific waves, the best beaches in Nicaragua offer something for every type of traveler.","If you are planning a trip and searching for the best beaches in Nicaragua, it is important to understand that the country has two completely different coasts. The Caribbean side is known for crystal-clear water and coral reefs, while the Pacific coast is famous for surfing, sunsets, and a more active beach culture.","One of the top destinations is Corn Island, a Caribbean paradise with white sand, turquoise water, and some of the best snorkeling in Nicaragua. Unlike crowded Caribbean destinations, Corn Island still feels authentic and relaxed, making it perfect for travelers who want a peaceful tropical experience.","On the Pacific side, San Juan del Sur is the most popular beach town in Nicaragua. It is known for surfing, nightlife, and easy access to nearby beaches like Playa Maderas, which is considered one of the best surf spots in the country.","For those looking to escape crowds, places like La Boquita offer a much more local and quiet beach experience. Here, you can enjoy fresh seafood, long beach walks, and a slower pace of life that reflects the authentic side of Nicaragua.","Another hidden gem is Little Corn Island, a small island where there are no cars and life moves at a completely different rhythm. It is one of the best places in Nicaragua for disconnecting and enjoying nature.","When visiting beaches in Nicaragua, timing is important. The dry season from December to April is ideal for sunny days and better travel conditions. During the rainy season, some beaches can still be beautiful, but travel logistics may become more complicated.","Overall, the best beaches in Nicaragua are not just about the scenery, they offer a combination of adventure, culture, and authenticity that is hard to find in more commercial destinations."]},{id:2,title:"Is Nicaragua Safe for Tourists in 2026? Honest Travel Safety Guide",content:["One of the most common questions travelers ask before visiting Central America is: is Nicaragua safe for tourists? The answer is not as simple as yes or no, but overall, Nicaragua remains one of the safer and more relaxed destinations in the region for travelers who take basic precautions.","Most tourist areas in Nicaragua, such as Granada, Ometepe Island, and San Juan del Sur, are considered safe and welcoming. These places rely heavily on tourism, and locals are generally friendly and helpful toward visitors.","Like in any country, safety in Nicaragua depends largely on awareness. Petty theft can happen, especially in crowded areas, so it is important to keep your belongings secure and avoid displaying expensive items.","Transportation is another key factor. Using trusted taxis, shuttle services, or hotel recommended drivers is always a safer option than random street transport, especially at night.","Walking during the day in tourist areas is generally safe, but it is recommended to avoid isolated places after dark. This is a common rule that applies to most travel destinations around the world.","When comparing Nicaragua to neighboring countries, many travelers report feeling safer here due to its slower pace of life and less aggressive tourism environment.","It is also important to stay informed. Before traveling, check local updates and follow basic travel advice, but avoid relying on outdated or exaggerated information found online.","In conclusion, Nicaragua is safe for tourists who travel responsibly. With common sense and preparation, you can enjoy one of the most authentic and beautiful travel experiences in Central America."]},{id:3,title:"Top 10 Things to Do in Nicaragua: Complete Travel Guide (2026)",content:["Nicaragua is one of the most diverse travel destinations in Central America, offering a combination of volcanoes, beaches, colonial cities, and outdoor adventures. If you are wondering about the best things to do in Nicaragua, the country offers experiences for every type of traveler.","One of the most unique places to visit is Ometepe Island, formed by two volcanoes rising from Lake Nicaragua. It is perfect for hiking, nature exploration, and experiencing local island life.","Granada is another must-visit destination. As one of the oldest colonial cities in the Americas, it offers colorful streets, historic architecture, and easy access to nearby natural attractions.","For beach lovers, San Juan del Sur provides a mix of surfing, nightlife, and coastal relaxation. It is one of the best places in Nicaragua for those looking for a lively atmosphere.","If you are looking for adventure, volcano boarding at Cerro Negro is a must. Sliding down a volcano is one of the most unique activities you can experience in Nicaragua.","Nature lovers should not miss Mombacho Volcano, where you can hike through cloud forests and observe wildlife in a protected environment.","For something different, Somoto Canyon offers hiking, swimming, and river exploration in a dramatic natural setting far from typical tourist routes.","The Caribbean side of Nicaragua, including Corn Island and Laguna de Perlas, provides a completely different experience, focused on beaches, culture, and relaxation.","Overall, the best things to do in Nicaragua combine adventure, culture, and nature, making it one of the most complete travel destinations in Central America."]},{id:4,title:"Nicaragua 7 Day Itinerary: The Perfect Travel Plan for First Time Visitors",content:["Planning a trip to Nicaragua can feel overwhelming because there are so many unique places to visit. This Nicaragua 7 day itinerary is designed to help first time visitors experience the best of the country in a balanced and realistic way.","Start your trip in Granada, one of the most beautiful colonial cities in Central America. Spend your first two days exploring the city, visiting churches, and taking a boat tour of the nearby islets.","From Granada, travel to Ometepe Island for days three and four. Here you can hike volcanoes, swim in natural springs, and experience a slower, more traditional way of life.","Next, head to San Juan del Sur for days five and six. This coastal town is perfect for relaxing, surfing, and enjoying sunsets on the Pacific coast.","On your final day, visit Masaya Volcano, one of the few places in the world where you can see active lava inside a crater. It is a perfect way to end your trip with a unique experience.","This itinerary focuses on minimizing travel time while maximizing experiences, making it ideal for travelers who want to see the highlights of Nicaragua in just one week.","If you have more time, you can extend your trip to include places like León, Corn Island, or Somoto Canyon for a deeper exploration of the country.","In conclusion, this Nicaragua itinerary provides a complete introduction to the country, combining culture, nature, and adventure in a way that few destinations can offer."]}];function e0(){return b.jsxs("div",{className:"blog-container",children:[b.jsx("h1",{className:"blog-title",children:"Travel Blog"}),Tu.length===0?b.jsx("p",{children:"No articles yet"}):b.jsx("div",{className:"blog-grid",children:Tu.map(r=>b.jsx("div",{className:"blog-card",children:b.jsxs(Qt,{to:`/blog/${r.id}`,className:"blog-link",children:[b.jsx("h2",{children:r.title}),b.jsx("p",{children:"Read more →"})]})},r.id))})]})}function t0(){const{id:r}=hh(),u=parseInt(r,10),c=Tu.find(o=>o.id===u);return c?b.jsx("div",{className:"blogpost-container",children:b.jsxs("div",{className:"blogpost-content",children:[b.jsx("h1",{children:c.title}),c.content.map((o,d)=>b.jsx("p",{children:o},d))]})}):b.jsx("h2",{className:"not-found",children:"Post not found"})}function a0(){return b.jsxs(Cv,{children:[b.jsx(zv,{}),b.jsxs(av,{children:[b.jsx(sn,{path:"/",element:b.jsx(Bv,{})}),b.jsx(sn,{path:"/guide",element:b.jsx(Gv,{})}),b.jsx(sn,{path:"/information",element:b.jsx(qv,{})}),b.jsx(sn,{path:"/place/:id",element:b.jsx(Pb,{})}),b.jsx(sn,{path:"/blog",element:b.jsx(e0,{})}),b.jsx(sn,{path:"/blog/:id",element:b.jsx(t0,{})})]})]})}const du=sessionStorage.redirect;delete sessionStorage.redirect;du&&du!==location.href&&window.history.replaceState(null,null,du);ly.createRoot(document.getElementById("root")).render(b.jsx(T.StrictMode,{children:b.jsx(a0,{})}));
