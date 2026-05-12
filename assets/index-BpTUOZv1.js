(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function c(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(d){if(d.ep)return;d.ep=!0;const m=c(d);fetch(d.href,m)}})();function bu(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ws={exports:{}},Ji={};var Am;function Kp(){if(Am)return Ji;Am=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(s,d,m){var h=null;if(m!==void 0&&(h=""+m),d.key!==void 0&&(h=""+d.key),"key"in d){m={};for(var _ in d)_!=="key"&&(m[_]=d[_])}else m=d;return d=m.ref,{$$typeof:o,type:s,key:h,ref:d!==void 0?d:null,props:m}}return Ji.Fragment=u,Ji.jsx=c,Ji.jsxs=c,Ji}var Rm;function Qp(){return Rm||(Rm=1,Ws.exports=Kp()),Ws.exports}var j=Qp(),Fs={exports:{}},ae={};var xm;function Zp(){if(xm)return ae;xm=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),L=Symbol.iterator;function X(v){return v===null||typeof v!="object"?null:(v=L&&v[L]||v["@@iterator"],typeof v=="function"?v:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,z={};function K(v,U,H){this.props=v,this.context=U,this.refs=z,this.updater=H||G}K.prototype.isReactComponent={},K.prototype.setState=function(v,U){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,U,"setState")},K.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function P(){}P.prototype=K.prototype;function J(v,U,H){this.props=v,this.context=U,this.refs=z,this.updater=H||G}var se=J.prototype=new P;se.constructor=J,q(se,K.prototype),se.isPureReactComponent=!0;var de=Array.isArray;function fe(){}var W={H:null,A:null,T:null,S:null},Ce=Object.prototype.hasOwnProperty;function Xe(v,U,H){var B=H.ref;return{$$typeof:o,type:v,key:U,ref:B!==void 0?B:null,props:H}}function ha(v,U){return Xe(v.type,U,v.props)}function na(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function Ve(v){var U={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(H){return U[H]})}var ga=/\/+/g;function ia(v,U){return typeof v=="object"&&v!==null&&v.key!=null?Ve(""+v.key):U.toString(36)}function xe(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(fe,fe):(v.status="pending",v.then(function(U){v.status==="pending"&&(v.status="fulfilled",v.value=U)},function(U){v.status==="pending"&&(v.status="rejected",v.reason=U)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function O(v,U,H,B,I){var $=typeof v;($==="undefined"||$==="boolean")&&(v=null);var me=!1;if(v===null)me=!0;else switch($){case"bigint":case"string":case"number":me=!0;break;case"object":switch(v.$$typeof){case o:case u:me=!0;break;case x:return me=v._init,O(me(v._payload),U,H,B,I)}}if(me)return I=I(v),me=B===""?"."+ia(v,0):B,de(I)?(H="",me!=null&&(H=me.replace(ga,"$&/")+"/"),O(I,U,H,"",function(dt){return dt})):I!=null&&(na(I)&&(I=ha(I,H+(I.key==null||v&&v.key===I.key?"":(""+I.key).replace(ga,"$&/")+"/")+me)),U.push(I)),1;me=0;var Ne=B===""?".":B+":";if(de(v))for(var we=0;we<v.length;we++)B=v[we],$=Ne+ia(B,we),me+=O(B,U,H,$,I);else if(we=X(v),typeof we=="function")for(v=we.call(v),we=0;!(B=v.next()).done;)B=B.value,$=Ne+ia(B,we++),me+=O(B,U,H,$,I);else if($==="object"){if(typeof v.then=="function")return O(xe(v),U,H,B,I);throw U=String(v),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return me}function k(v,U,H){if(v==null)return v;var B=[],I=0;return O(v,B,"","",function($){return U.call(H,$,I++)}),B}function Q(v){if(v._status===-1){var U=v._result;U=U(),U.then(function(H){(v._status===0||v._status===-1)&&(v._status=1,v._result=H)},function(H){(v._status===0||v._status===-1)&&(v._status=2,v._result=H)}),v._status===-1&&(v._status=0,v._result=U)}if(v._status===1)return v._result.default;throw v._result}var ue=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},ve={map:k,forEach:function(v,U,H){k(v,function(){U.apply(this,arguments)},H)},count:function(v){var U=0;return k(v,function(){U++}),U},toArray:function(v){return k(v,function(U){return U})||[]},only:function(v){if(!na(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return ae.Activity=T,ae.Children=ve,ae.Component=K,ae.Fragment=c,ae.Profiler=d,ae.PureComponent=J,ae.StrictMode=s,ae.Suspense=b,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ae.__COMPILER_RUNTIME={__proto__:null,c:function(v){return W.H.useMemoCache(v)}},ae.cache=function(v){return function(){return v.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(v,U,H){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var B=q({},v.props),I=v.key;if(U!=null)for($ in U.key!==void 0&&(I=""+U.key),U)!Ce.call(U,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&U.ref===void 0||(B[$]=U[$]);var $=arguments.length-2;if($===1)B.children=H;else if(1<$){for(var me=Array($),Ne=0;Ne<$;Ne++)me[Ne]=arguments[Ne+2];B.children=me}return Xe(v.type,I,B)},ae.createContext=function(v){return v={$$typeof:h,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:m,_context:v},v},ae.createElement=function(v,U,H){var B,I={},$=null;if(U!=null)for(B in U.key!==void 0&&($=""+U.key),U)Ce.call(U,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(I[B]=U[B]);var me=arguments.length-2;if(me===1)I.children=H;else if(1<me){for(var Ne=Array(me),we=0;we<me;we++)Ne[we]=arguments[we+2];I.children=Ne}if(v&&v.defaultProps)for(B in me=v.defaultProps,me)I[B]===void 0&&(I[B]=me[B]);return Xe(v,$,I)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(v){return{$$typeof:_,render:v}},ae.isValidElement=na,ae.lazy=function(v){return{$$typeof:x,_payload:{_status:-1,_result:v},_init:Q}},ae.memo=function(v,U){return{$$typeof:p,type:v,compare:U===void 0?null:U}},ae.startTransition=function(v){var U=W.T,H={};W.T=H;try{var B=v(),I=W.S;I!==null&&I(H,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(fe,ue)}catch($){ue($)}finally{U!==null&&H.types!==null&&(U.types=H.types),W.T=U}},ae.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ae.use=function(v){return W.H.use(v)},ae.useActionState=function(v,U,H){return W.H.useActionState(v,U,H)},ae.useCallback=function(v,U){return W.H.useCallback(v,U)},ae.useContext=function(v){return W.H.useContext(v)},ae.useDebugValue=function(){},ae.useDeferredValue=function(v,U){return W.H.useDeferredValue(v,U)},ae.useEffect=function(v,U){return W.H.useEffect(v,U)},ae.useEffectEvent=function(v){return W.H.useEffectEvent(v)},ae.useId=function(){return W.H.useId()},ae.useImperativeHandle=function(v,U,H){return W.H.useImperativeHandle(v,U,H)},ae.useInsertionEffect=function(v,U){return W.H.useInsertionEffect(v,U)},ae.useLayoutEffect=function(v,U){return W.H.useLayoutEffect(v,U)},ae.useMemo=function(v,U){return W.H.useMemo(v,U)},ae.useOptimistic=function(v,U){return W.H.useOptimistic(v,U)},ae.useReducer=function(v,U,H){return W.H.useReducer(v,U,H)},ae.useRef=function(v){return W.H.useRef(v)},ae.useState=function(v){return W.H.useState(v)},ae.useSyncExternalStore=function(v,U,H){return W.H.useSyncExternalStore(v,U,H)},ae.useTransition=function(){return W.H.useTransition()},ae.version="19.2.3",ae}var wm;function Su(){return wm||(wm=1,Fs.exports=Zp()),Fs.exports}var S=Su();const on=bu(S);var Ps={exports:{}},$i={},Is={exports:{}},eu={};var Om;function Jp(){return Om||(Om=1,(function(o){function u(O,k){var Q=O.length;O.push(k);e:for(;0<Q;){var ue=Q-1>>>1,ve=O[ue];if(0<d(ve,k))O[ue]=k,O[Q]=ve,Q=ue;else break e}}function c(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var k=O[0],Q=O.pop();if(Q!==k){O[0]=Q;e:for(var ue=0,ve=O.length,v=ve>>>1;ue<v;){var U=2*(ue+1)-1,H=O[U],B=U+1,I=O[B];if(0>d(H,Q))B<ve&&0>d(I,H)?(O[ue]=I,O[B]=Q,ue=B):(O[ue]=H,O[U]=Q,ue=U);else if(B<ve&&0>d(I,Q))O[ue]=I,O[B]=Q,ue=B;else break e}}return k}function d(O,k){var Q=O.sortIndex-k.sortIndex;return Q!==0?Q:O.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var h=Date,_=h.now();o.unstable_now=function(){return h.now()-_}}var b=[],p=[],x=1,T=null,L=3,X=!1,G=!1,q=!1,z=!1,K=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function se(O){for(var k=c(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=O)s(p),k.sortIndex=k.expirationTime,u(b,k);else break;k=c(p)}}function de(O){if(q=!1,se(O),!G)if(c(b)!==null)G=!0,fe||(fe=!0,Ve());else{var k=c(p);k!==null&&xe(de,k.startTime-O)}}var fe=!1,W=-1,Ce=5,Xe=-1;function ha(){return z?!0:!(o.unstable_now()-Xe<Ce)}function na(){if(z=!1,fe){var O=o.unstable_now();Xe=O;var k=!0;try{e:{G=!1,q&&(q=!1,P(W),W=-1),X=!0;var Q=L;try{a:{for(se(O),T=c(b);T!==null&&!(T.expirationTime>O&&ha());){var ue=T.callback;if(typeof ue=="function"){T.callback=null,L=T.priorityLevel;var ve=ue(T.expirationTime<=O);if(O=o.unstable_now(),typeof ve=="function"){T.callback=ve,se(O),k=!0;break a}T===c(b)&&s(b),se(O)}else s(b);T=c(b)}if(T!==null)k=!0;else{var v=c(p);v!==null&&xe(de,v.startTime-O),k=!1}}break e}finally{T=null,L=Q,X=!1}k=void 0}}finally{k?Ve():fe=!1}}}var Ve;if(typeof J=="function")Ve=function(){J(na)};else if(typeof MessageChannel<"u"){var ga=new MessageChannel,ia=ga.port2;ga.port1.onmessage=na,Ve=function(){ia.postMessage(null)}}else Ve=function(){K(na,0)};function xe(O,k){W=K(function(){O(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return L},o.unstable_next=function(O){switch(L){case 1:case 2:case 3:var k=3;break;default:k=L}var Q=L;L=k;try{return O()}finally{L=Q}},o.unstable_requestPaint=function(){z=!0},o.unstable_runWithPriority=function(O,k){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=L;L=O;try{return k()}finally{L=Q}},o.unstable_scheduleCallback=function(O,k,Q){var ue=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ue+Q:ue):Q=ue,O){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Q+ve,O={id:x++,callback:k,priorityLevel:O,startTime:Q,expirationTime:ve,sortIndex:-1},Q>ue?(O.sortIndex=Q,u(p,O),c(b)===null&&O===c(p)&&(q?(P(W),W=-1):q=!0,xe(de,Q-ue))):(O.sortIndex=ve,u(b,O),G||X||(G=!0,fe||(fe=!0,Ve()))),O},o.unstable_shouldYield=ha,o.unstable_wrapCallback=function(O){var k=L;return function(){var Q=L;L=k;try{return O.apply(this,arguments)}finally{L=Q}}}})(eu)),eu}var Nm;function $p(){return Nm||(Nm=1,Is.exports=Jp()),Is.exports}var au={exports:{}},Ie={};var Dm;function Wp(){if(Dm)return Ie;Dm=1;var o=Su();function u(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(b,p,x){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:T==null?null:""+T,children:b,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ie.createPortal=function(b,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return m(b,p,null,x)},Ie.flushSync=function(b){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,b)return b()}finally{h.T=p,s.p=x,s.d.f()}},Ie.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(b,p))},Ie.prefetchDNS=function(b){typeof b=="string"&&s.d.D(b)},Ie.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var x=p.as,T=_(x,p.crossOrigin),L=typeof p.integrity=="string"?p.integrity:void 0,X=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:T,integrity:L,fetchPriority:X}):x==="script"&&s.d.X(b,{crossOrigin:T,integrity:L,fetchPriority:X,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ie.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=_(p.as,p.crossOrigin);s.d.M(b,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(b)},Ie.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,T=_(x,p.crossOrigin);s.d.L(b,x,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ie.preloadModule=function(b,p){if(typeof b=="string")if(p){var x=_(p.as,p.crossOrigin);s.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(b)},Ie.requestFormReset=function(b){s.d.r(b)},Ie.unstable_batchedUpdates=function(b,p){return b(p)},Ie.useFormState=function(b,p,x){return h.H.useFormState(b,p,x)},Ie.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ie.version="19.2.3",Ie}var Um;function Wm(){if(Um)return au.exports;Um=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),au.exports=Wp(),au.exports}var jm;function Fp(){if(jm)return $i;jm=1;var o=$p(),u=Su(),c=Wm();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function h(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function _(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(s(188))}function p(e){var a=e.alternate;if(!a){if(a=m(e),a===null)throw Error(s(188));return a!==e?null:e}for(var t=e,n=a;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){t=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return b(i),e;if(l===n)return b(i),a;l=l.sibling}throw Error(s(188))}if(t.return!==n.return)t=i,n=l;else{for(var r=!1,f=i.child;f;){if(f===t){r=!0,t=i,n=l;break}if(f===n){r=!0,n=i,t=l;break}f=f.sibling}if(!r){for(f=l.child;f;){if(f===t){r=!0,t=l,n=i;break}if(f===n){r=!0,n=l,t=i;break}f=f.sibling}if(!r)throw Error(s(189))}}if(t.alternate!==n)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:a}function x(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=x(e),a!==null)return a;e=e.sibling}return null}var T=Object.assign,L=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),J=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Xe=Symbol.for("react.activity"),ha=Symbol.for("react.memo_cache_sentinel"),na=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var ga=Symbol.for("react.client.reference");function ia(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ga?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Profiler";case z:return"StrictMode";case de:return"Suspense";case fe:return"SuspenseList";case Xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case J:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case se:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return a=e.displayName||null,a!==null?a:ia(e.type)||"Memo";case Ce:a=e._payload,e=e._init;try{return ia(e(a))}catch{}}return null}var xe=Array.isArray,O=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ue=[],ve=-1;function v(e){return{current:e}}function U(e){0>ve||(e.current=ue[ve],ue[ve]=null,ve--)}function H(e,a){ve++,ue[ve]=e.current,e.current=a}var B=v(null),I=v(null),$=v(null),me=v(null);function Ne(e,a){switch(H($,a),H(I,e),H(B,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?$d(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=$d(a),e=Wd(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(B),H(B,e)}function we(){U(B),U(I),U($)}function dt(e){e.memoizedState!==null&&H(me,e);var a=B.current,t=Wd(a,e.type);a!==t&&(H(I,e),H(B,t))}function ea(e){I.current===e&&(U(B),U(I)),me.current===e&&(U(me),Xi._currentValue=Q)}var la,sn;function Ha(e){if(la===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);la=a&&a[1]||"",sn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+la+e+sn}var ja=!1;function In(e,a){if(!e||ja)return"";ja=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(R){var A=R}Reflect.construct(e,[],D)}else{try{D.call()}catch(R){A=R}e.call(D.prototype)}}else{try{throw Error()}catch(R){A=R}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(R){if(R&&A&&typeof R.stack=="string")return[R.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),r=l[0],f=l[1];if(r&&f){var g=r.split(`
`),C=f.split(`
`);for(i=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(n===g.length||i===C.length)for(n=g.length-1,i=C.length-1;1<=n&&0<=i&&g[n]!==C[i];)i--;for(;1<=n&&0<=i;n--,i--)if(g[n]!==C[i]){if(n!==1||i!==1)do if(n--,i--,0>i||g[n]!==C[i]){var w=`
`+g[n].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=n&&0<=i);break}}}finally{ja=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Ha(t):""}function zo(e,a){switch(e.tag){case 26:case 27:case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return e.child!==a&&a!==null?Ha("Suspense Fallback"):Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return In(e.type,!1);case 11:return In(e.type.render,!1);case 1:return In(e.type,!0);case 31:return Ha("Activity");default:return""}}function il(e){try{var a="",t=null;do a+=zo(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ei=Object.prototype.hasOwnProperty,ai=o.unstable_scheduleCallback,ti=o.unstable_cancelCallback,ko=o.unstable_shouldYield,ll=o.unstable_requestPaint,Ke=o.unstable_now,ol=o.unstable_getCurrentPriorityLevel,rl=o.unstable_ImmediatePriority,sl=o.unstable_UserBlockingPriority,un=o.unstable_NormalPriority,ul=o.unstable_LowPriority,cn=o.unstable_IdlePriority,cl=o.log,ee=o.unstable_setDisableYieldValue,he=null,De=null;function oa(e){if(typeof cl=="function"&&ee(e),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(he,e)}catch{}}var aa=Math.clz32?Math.clz32:Nh,wh=Math.log,Oh=Math.LN2;function Nh(e){return e>>>=0,e===0?32:31-(wh(e)/Oh|0)|0}var fl=256,dl=262144,ml=4194304;function Ht(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hl(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~l,n!==0?i=Ht(n):(r&=f,r!==0?i=Ht(r):t||(t=f&~e,t!==0&&(i=Ht(t))))):(f=n&~l,f!==0?i=Ht(f):r!==0?i=Ht(r):t||(t=n&~e,t!==0&&(i=Ht(t)))),i===0?0:a!==0&&a!==i&&(a&l)===0&&(l=i&-i,t=a&-a,l>=t||l===32&&(t&4194048)!==0)?a:i}function ni(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Dh(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wu(){var e=ml;return ml<<=1,(ml&62914560)===0&&(ml=4194304),e}function Ho(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function ii(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Uh(e,a,t,n,i,l){var r=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,C=e.hiddenUpdates;for(t=r&~t;0<t;){var w=31-aa(t),D=1<<w;f[w]=0,g[w]=-1;var A=C[w];if(A!==null)for(C[w]=null,w=0;w<A.length;w++){var R=A[w];R!==null&&(R.lane&=-536870913)}t&=~D}n!==0&&Ou(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(r&~a))}function Ou(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-aa(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function Nu(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-aa(t),i=1<<n;i&a|e[n]&a&&(e[n]|=a),t&=~i}}function Du(e,a){var t=a&-a;return t=(t&42)!==0?1:Bo(t),(t&(e.suspendedLanes|a))!==0?0:t}function Bo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Go(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Uu(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:bm(e.type))}function ju(e,a){var t=k.p;try{return k.p=e,a()}finally{k.p=t}}var mt=Math.random().toString(36).slice(2),Je="__reactFiber$"+mt,ra="__reactProps$"+mt,fn="__reactContainer$"+mt,qo="__reactEvents$"+mt,jh="__reactListeners$"+mt,Lh="__reactHandles$"+mt,Lu="__reactResources$"+mt,li="__reactMarker$"+mt;function Vo(e){delete e[Je],delete e[ra],delete e[qo],delete e[jh],delete e[Lh]}function dn(e){var a=e[Je];if(a)return a;for(var t=e.parentNode;t;){if(a=t[fn]||t[Je]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=nm(e);e!==null;){if(t=e[Je])return t;e=nm(e)}return a}e=t,t=e.parentNode}return null}function mn(e){if(e=e[Je]||e[fn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function oi(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function hn(e){var a=e[Lu];return a||(a=e[Lu]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Qe(e){e[li]=!0}var zu=new Set,ku={};function Bt(e,a){gn(e,a),gn(e+"Capture",a)}function gn(e,a){for(ku[e]=a,e=0;e<a.length;e++)zu.add(a[e])}var zh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hu={},Bu={};function kh(e){return ei.call(Bu,e)?!0:ei.call(Hu,e)?!1:zh.test(e)?Bu[e]=!0:(Hu[e]=!0,!1)}function gl(e,a,t){if(kh(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function pl(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Qa(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function _a(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gu(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Hh(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(r){t=""+r,l.call(this,r)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Yo(e){if(!e._valueTracker){var a=Gu(e)?"checked":"value";e._valueTracker=Hh(e,a,""+e[a])}}function qu(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=Gu(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bh=/[\n"\\]/g;function Ma(e){return e.replace(Bh,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Xo(e,a,t,n,i,l,r,f){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),a!=null?r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+_a(a)):e.value!==""+_a(a)&&(e.value=""+_a(a)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),a!=null?Ko(e,r,_a(a)):t!=null?Ko(e,r,_a(t)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+_a(f):e.removeAttribute("name")}function Vu(e,a,t,n,i,l,r,f){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),a!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||a!=null)){Yo(e);return}t=t!=null?""+_a(t):"",a=a!=null?""+_a(a):t,f||a===e.value||(e.value=a),e.defaultValue=a}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Yo(e)}function Ko(e,a,t){a==="number"&&yl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function pn(e,a,t,n){if(e=e.options,a){a={};for(var i=0;i<t.length;i++)a["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=a.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&n&&(e[t].defaultSelected=!0)}else{for(t=""+_a(t),a=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function Yu(e,a,t){if(a!=null&&(a=""+_a(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+_a(t):""}function Xu(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(s(92));if(xe(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=_a(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),Yo(e)}function yn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Gh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ku(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||Gh.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Qu(e,a,t){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in a)n=a[i],a.hasOwnProperty(i)&&t[i]!==n&&Ku(e,i,n)}else for(var l in a)a.hasOwnProperty(l)&&Ku(e,l,a[l])}function Qo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(e){return Vh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Za(){}var Zo=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vn=null,bn=null;function Zu(e){var a=mn(e);if(a&&(e=a.stateNode)){var t=e[ra]||null;e:switch(e=a.stateNode,a.type){case"input":if(Xo(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ma(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var i=n[ra]||null;if(!i)throw Error(s(90));Xo(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&qu(n)}break e;case"textarea":Yu(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&pn(e,!!t.multiple,a,!1)}}}var $o=!1;function Ju(e,a,t){if($o)return e(a,t);$o=!0;try{var n=e(a);return n}finally{if($o=!1,(vn!==null||bn!==null)&&(lo(),vn&&(a=vn,e=bn,bn=vn=null,Zu(a),e)))for(a=0;a<e.length;a++)Zu(e[a])}}function ri(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ra]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,a,typeof t));return t}var Ja=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=!1;if(Ja)try{var si={};Object.defineProperty(si,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{Wo=!1}var ht=null,Fo=null,bl=null;function $u(){if(bl)return bl;var e,a=Fo,t=a.length,n,i="value"in ht?ht.value:ht.textContent,l=i.length;for(e=0;e<t&&a[e]===i[e];e++);var r=t-e;for(n=1;n<=r&&a[t-n]===i[l-n];n++);return bl=i.slice(e,1<n?1-n:void 0)}function Sl(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function El(){return!0}function Wu(){return!1}function sa(e){function a(t,n,i,l,r){this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?El:Wu,this.isPropagationStopped=Wu,this}return T(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),a}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=sa(Gt),ui=T({},Gt,{view:0,detail:0}),Yh=sa(ui),Po,Io,ci,_l=T({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(Po=e.screenX-ci.screenX,Io=e.screenY-ci.screenY):Io=Po=0,ci=e),Po)},movementY:function(e){return"movementY"in e?e.movementY:Io}}),Fu=sa(_l),Xh=T({},_l,{dataTransfer:0}),Kh=sa(Xh),Qh=T({},ui,{relatedTarget:0}),er=sa(Qh),Zh=T({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),Jh=sa(Zh),$h=T({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wh=sa($h),Fh=T({},Gt,{data:0}),Pu=sa(Fh),Ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ag(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=eg[e])?!!a[e]:!1}function ar(){return ag}var tg=T({},ui,{key:function(e){if(e.key){var a=Ph[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ng=sa(tg),ig=T({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=sa(ig),lg=T({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),og=sa(lg),rg=T({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),sg=sa(rg),ug=T({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cg=sa(ug),fg=T({},Gt,{newState:0,oldState:0}),dg=sa(fg),mg=[9,13,27,32],tr=Ja&&"CompositionEvent"in window,fi=null;Ja&&"documentMode"in document&&(fi=document.documentMode);var hg=Ja&&"TextEvent"in window&&!fi,ec=Ja&&(!tr||fi&&8<fi&&11>=fi),ac=" ",tc=!1;function nc(e,a){switch(e){case"keyup":return mg.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function gg(e,a){switch(e){case"compositionend":return ic(a);case"keypress":return a.which!==32?null:(tc=!0,ac);case"textInput":return e=a.data,e===ac&&tc?null:e;default:return null}}function pg(e,a){if(Sn)return e==="compositionend"||!tr&&nc(e,a)?(e=$u(),bl=Fo=ht=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ec&&a.locale!=="ko"?null:a.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!yg[e.type]:a==="textarea"}function oc(e,a,t,n){vn?bn?bn.push(n):bn=[n]:vn=n,a=mo(a,"onChange"),0<a.length&&(t=new Tl("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var di=null,mi=null;function vg(e){Yd(e,0)}function Ml(e){var a=oi(e);if(qu(a))return e}function rc(e,a){if(e==="change")return a}var sc=!1;if(Ja){var nr;if(Ja){var ir="oninput"in document;if(!ir){var uc=document.createElement("div");uc.setAttribute("oninput","return;"),ir=typeof uc.oninput=="function"}nr=ir}else nr=!1;sc=nr&&(!document.documentMode||9<document.documentMode)}function cc(){di&&(di.detachEvent("onpropertychange",fc),mi=di=null)}function fc(e){if(e.propertyName==="value"&&Ml(mi)){var a=[];oc(a,mi,e,Jo(e)),Ju(vg,a)}}function bg(e,a,t){e==="focusin"?(cc(),di=a,mi=t,di.attachEvent("onpropertychange",fc)):e==="focusout"&&cc()}function Sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(mi)}function Eg(e,a){if(e==="click")return Ml(a)}function Tg(e,a){if(e==="input"||e==="change")return Ml(a)}function _g(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var pa=typeof Object.is=="function"?Object.is:_g;function hi(e,a){if(pa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var i=t[n];if(!ei.call(a,i)||!pa(e[i],a[i]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,a){var t=dc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dc(t)}}function hc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?hc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function gc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=yl(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=yl(e.document)}return a}function lr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Mg=Ja&&"documentMode"in document&&11>=document.documentMode,En=null,or=null,gi=null,rr=!1;function pc(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;rr||En==null||En!==yl(n)||(n=En,"selectionStart"in n&&lr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),gi&&hi(gi,n)||(gi=n,n=mo(or,"onSelect"),0<n.length&&(a=new Tl("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=En)))}function qt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var Tn={animationend:qt("Animation","AnimationEnd"),animationiteration:qt("Animation","AnimationIteration"),animationstart:qt("Animation","AnimationStart"),transitionrun:qt("Transition","TransitionRun"),transitionstart:qt("Transition","TransitionStart"),transitioncancel:qt("Transition","TransitionCancel"),transitionend:qt("Transition","TransitionEnd")},sr={},yc={};Ja&&(yc=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Vt(e){if(sr[e])return sr[e];if(!Tn[e])return e;var a=Tn[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in yc)return sr[e]=a[t];return e}var vc=Vt("animationend"),bc=Vt("animationiteration"),Sc=Vt("animationstart"),Cg=Vt("transitionrun"),Ag=Vt("transitionstart"),Rg=Vt("transitioncancel"),Ec=Vt("transitionend"),Tc=new Map,ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ur.push("scrollEnd");function La(e,a){Tc.set(e,a),Bt(a,[e])}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ca=[],_n=0,cr=0;function Al(){for(var e=_n,a=cr=_n=0;a<e;){var t=Ca[a];Ca[a++]=null;var n=Ca[a];Ca[a++]=null;var i=Ca[a];Ca[a++]=null;var l=Ca[a];if(Ca[a++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}l!==0&&_c(t,i,l)}}function Rl(e,a,t,n){Ca[_n++]=e,Ca[_n++]=a,Ca[_n++]=t,Ca[_n++]=n,cr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function fr(e,a,t,n){return Rl(e,a,t,n),xl(e)}function Yt(e,a){return Rl(e,null,null,a),xl(e)}function _c(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var i=!1,l=e.return;l!==null;)l.childLanes|=t,n=l.alternate,n!==null&&(n.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&a!==null&&(i=31-aa(t),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[a]:n.push(a),a.lane=t|536870912),l):null}function xl(e){if(50<ki)throw ki=0,Ss=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Mn={};function xg(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ya(e,a,t,n){return new xg(e,a,t,n)}function dr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $a(e,a){var t=e.alternate;return t===null?(t=ya(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Mc(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function wl(e,a,t,n,i,l){var r=0;if(n=e,typeof e=="function")dr(e)&&(r=1);else if(typeof e=="string")r=Up(e,t,B.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Xe:return e=ya(31,t,a,i),e.elementType=Xe,e.lanes=l,e;case q:return Xt(t.children,i,l,a);case z:r=8,i|=24;break;case K:return e=ya(12,t,a,i|2),e.elementType=K,e.lanes=l,e;case de:return e=ya(13,t,a,i),e.elementType=de,e.lanes=l,e;case fe:return e=ya(19,t,a,i),e.elementType=fe,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:r=10;break e;case P:r=9;break e;case se:r=11;break e;case W:r=14;break e;case Ce:r=16,n=null;break e}r=29,t=Error(s(130,e===null?"null":typeof e,"")),n=null}return a=ya(r,t,a,i),a.elementType=e,a.type=n,a.lanes=l,a}function Xt(e,a,t,n){return e=ya(7,e,n,a),e.lanes=t,e}function mr(e,a,t){return e=ya(6,e,null,a),e.lanes=t,e}function Cc(e){var a=ya(18,null,null,0);return a.stateNode=e,a}function hr(e,a,t){return a=ya(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Ac=new WeakMap;function Aa(e,a){if(typeof e=="object"&&e!==null){var t=Ac.get(e);return t!==void 0?t:(a={value:e,source:a,stack:il(a)},Ac.set(e,a),a)}return{value:e,source:a,stack:il(a)}}var Cn=[],An=0,Ol=null,pi=0,Ra=[],xa=0,gt=null,Ba=1,Ga="";function Wa(e,a){Cn[An++]=pi,Cn[An++]=Ol,Ol=e,pi=a}function Rc(e,a,t){Ra[xa++]=Ba,Ra[xa++]=Ga,Ra[xa++]=gt,gt=e;var n=Ba;e=Ga;var i=32-aa(n)-1;n&=~(1<<i),t+=1;var l=32-aa(a)+i;if(30<l){var r=i-i%5;l=(n&(1<<r)-1).toString(32),n>>=r,i-=r,Ba=1<<32-aa(a)+i|t<<i|n,Ga=l+e}else Ba=1<<l|t<<i|n,Ga=e}function gr(e){e.return!==null&&(Wa(e,1),Rc(e,1,0))}function pr(e){for(;e===Ol;)Ol=Cn[--An],Cn[An]=null,pi=Cn[--An],Cn[An]=null;for(;e===gt;)gt=Ra[--xa],Ra[xa]=null,Ga=Ra[--xa],Ra[xa]=null,Ba=Ra[--xa],Ra[xa]=null}function xc(e,a){Ra[xa++]=Ba,Ra[xa++]=Ga,Ra[xa++]=gt,Ba=a.id,Ga=a.overflow,gt=e}var $e=null,Ae=null,ce=!1,pt=null,wa=!1,yr=Error(s(519));function yt(e){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yi(Aa(a,e)),yr}function wc(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[Je]=e,a[ra]=n,t){case"dialog":le("cancel",a),le("close",a);break;case"iframe":case"object":case"embed":le("load",a);break;case"video":case"audio":for(t=0;t<Bi.length;t++)le(Bi[t],a);break;case"source":le("error",a);break;case"img":case"image":case"link":le("error",a),le("load",a);break;case"details":le("toggle",a);break;case"input":le("invalid",a),Vu(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":le("invalid",a);break;case"textarea":le("invalid",a),Xu(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||Zd(a.textContent,t)?(n.popover!=null&&(le("beforetoggle",a),le("toggle",a)),n.onScroll!=null&&le("scroll",a),n.onScrollEnd!=null&&le("scrollend",a),n.onClick!=null&&(a.onclick=Za),a=!0):a=!1,a||yt(e,!0)}function Oc(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:wa=!1;return;case 27:case 3:wa=!0;return;default:$e=$e.return}}function Rn(e){if(e!==$e)return!1;if(!ce)return Oc(e),ce=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ls(e.type,e.memoizedProps)),t=!t),t&&Ae&&yt(e),Oc(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ae=tm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ae=tm(e)}else a===27?(a=Ae,Nt(e.type)?(e=Gs,Gs=null,Ae=e):Ae=a):Ae=$e?Na(e.stateNode.nextSibling):null;return!0}function Kt(){Ae=$e=null,ce=!1}function vr(){var e=pt;return e!==null&&(da===null?da=e:da.push.apply(da,e),pt=null),e}function yi(e){pt===null?pt=[e]:pt.push(e)}var br=v(null),Qt=null,Fa=null;function vt(e,a,t){H(br,a._currentValue),a._currentValue=t}function Pa(e){e._currentValue=br.current,U(br)}function Sr(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Er(e,a,t,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var r=i.child;l=l.firstContext;e:for(;l!==null;){var f=l;l=i;for(var g=0;g<a.length;g++)if(f.context===a[g]){l.lanes|=t,f=l.alternate,f!==null&&(f.lanes|=t),Sr(l.return,t,e),n||(r=null);break e}l=f.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(s(341));r.lanes|=t,l=r.alternate,l!==null&&(l.lanes|=t),Sr(r,t,e),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function xn(e,a,t,n){e=null;for(var i=a,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(s(387));if(r=r.memoizedProps,r!==null){var f=i.type;pa(i.pendingProps.value,r.value)||(e!==null?e.push(f):e=[f])}}else if(i===me.current){if(r=i.alternate,r===null)throw Error(s(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Xi):e=[Xi])}i=i.return}e!==null&&Er(a,e,t,n),a.flags|=262144}function Nl(e){for(e=e.firstContext;e!==null;){if(!pa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zt(e){Qt=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Nc(Qt,e)}function Dl(e,a){return Qt===null&&Zt(e),Nc(e,a)}function Nc(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Fa===null){if(e===null)throw Error(s(308));Fa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Fa=Fa.next=a;return t}var wg=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Og=o.unstable_scheduleCallback,Ng=o.unstable_NormalPriority,He={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tr(){return{controller:new wg,data:new Map,refCount:0}}function vi(e){e.refCount--,e.refCount===0&&Og(Ng,function(){e.controller.abort()})}var bi=null,_r=0,wn=0,On=null;function Dg(e,a){if(bi===null){var t=bi=[];_r=0,wn=As(),On={status:"pending",value:void 0,then:function(n){t.push(n)}}}return _r++,a.then(Dc,Dc),a}function Dc(){if(--_r===0&&bi!==null){On!==null&&(On.status="fulfilled");var e=bi;bi=null,wn=0,On=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Ug(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var i=0;i<t.length;i++)(0,t[i])(a)},function(i){for(n.status="rejected",n.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),n}var Uc=O.S;O.S=function(e,a){yd=Ke(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Dg(e,a),Uc!==null&&Uc(e,a)};var Jt=v(null);function Mr(){var e=Jt.current;return e!==null?e:Me.pooledCache}function Ul(e,a){a===null?H(Jt,Jt.current):H(Jt,a.pool)}function jc(){var e=Mr();return e===null?null:{parent:He._currentValue,pool:e}}var Nn=Error(s(460)),Cr=Error(s(474)),jl=Error(s(542)),Ll={then:function(){}};function Lc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zc(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Za,Za),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Hc(e),e;default:if(typeof a.status=="string")a.then(Za,Za);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=n}},function(n){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Hc(e),e}throw Wt=a,Nn}}function $t(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Wt=t,Nn):t}}var Wt=null;function kc(){if(Wt===null)throw Error(s(459));var e=Wt;return Wt=null,e}function Hc(e){if(e===Nn||e===jl)throw Error(s(483))}var Dn=null,Si=0;function zl(e){var a=Si;return Si+=1,Dn===null&&(Dn=[]),zc(Dn,e,a)}function Ei(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function kl(e,a){throw a.$$typeof===L?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Bc(e){function a(E,y){if(e){var M=E.deletions;M===null?(E.deletions=[y],E.flags|=16):M.push(y)}}function t(E,y){if(!e)return null;for(;y!==null;)a(E,y),y=y.sibling;return null}function n(E){for(var y=new Map;E!==null;)E.key!==null?y.set(E.key,E):y.set(E.index,E),E=E.sibling;return y}function i(E,y){return E=$a(E,y),E.index=0,E.sibling=null,E}function l(E,y,M){return E.index=M,e?(M=E.alternate,M!==null?(M=M.index,M<y?(E.flags|=67108866,y):M):(E.flags|=67108866,y)):(E.flags|=1048576,y)}function r(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function f(E,y,M,N){return y===null||y.tag!==6?(y=mr(M,E.mode,N),y.return=E,y):(y=i(y,M),y.return=E,y)}function g(E,y,M,N){var Z=M.type;return Z===q?w(E,y,M.props.children,N,M.key):y!==null&&(y.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ce&&$t(Z)===y.type)?(y=i(y,M.props),Ei(y,M),y.return=E,y):(y=wl(M.type,M.key,M.props,null,E.mode,N),Ei(y,M),y.return=E,y)}function C(E,y,M,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==M.containerInfo||y.stateNode.implementation!==M.implementation?(y=hr(M,E.mode,N),y.return=E,y):(y=i(y,M.children||[]),y.return=E,y)}function w(E,y,M,N,Z){return y===null||y.tag!==7?(y=Xt(M,E.mode,N,Z),y.return=E,y):(y=i(y,M),y.return=E,y)}function D(E,y,M){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=mr(""+y,E.mode,M),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case X:return M=wl(y.type,y.key,y.props,null,E.mode,M),Ei(M,y),M.return=E,M;case G:return y=hr(y,E.mode,M),y.return=E,y;case Ce:return y=$t(y),D(E,y,M)}if(xe(y)||Ve(y))return y=Xt(y,E.mode,M,null),y.return=E,y;if(typeof y.then=="function")return D(E,zl(y),M);if(y.$$typeof===J)return D(E,Dl(E,y),M);kl(E,y)}return null}function A(E,y,M,N){var Z=y!==null?y.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return Z!==null?null:f(E,y,""+M,N);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return M.key===Z?g(E,y,M,N):null;case G:return M.key===Z?C(E,y,M,N):null;case Ce:return M=$t(M),A(E,y,M,N)}if(xe(M)||Ve(M))return Z!==null?null:w(E,y,M,N,null);if(typeof M.then=="function")return A(E,y,zl(M),N);if(M.$$typeof===J)return A(E,y,Dl(E,M),N);kl(E,M)}return null}function R(E,y,M,N,Z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return E=E.get(M)||null,f(y,E,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case X:return E=E.get(N.key===null?M:N.key)||null,g(y,E,N,Z);case G:return E=E.get(N.key===null?M:N.key)||null,C(y,E,N,Z);case Ce:return N=$t(N),R(E,y,M,N,Z)}if(xe(N)||Ve(N))return E=E.get(M)||null,w(y,E,N,Z,null);if(typeof N.then=="function")return R(E,y,M,zl(N),Z);if(N.$$typeof===J)return R(E,y,M,Dl(y,N),Z);kl(y,N)}return null}function V(E,y,M,N){for(var Z=null,ge=null,Y=y,ne=y=0,re=null;Y!==null&&ne<M.length;ne++){Y.index>ne?(re=Y,Y=null):re=Y.sibling;var pe=A(E,Y,M[ne],N);if(pe===null){Y===null&&(Y=re);break}e&&Y&&pe.alternate===null&&a(E,Y),y=l(pe,y,ne),ge===null?Z=pe:ge.sibling=pe,ge=pe,Y=re}if(ne===M.length)return t(E,Y),ce&&Wa(E,ne),Z;if(Y===null){for(;ne<M.length;ne++)Y=D(E,M[ne],N),Y!==null&&(y=l(Y,y,ne),ge===null?Z=Y:ge.sibling=Y,ge=Y);return ce&&Wa(E,ne),Z}for(Y=n(Y);ne<M.length;ne++)re=R(Y,E,ne,M[ne],N),re!==null&&(e&&re.alternate!==null&&Y.delete(re.key===null?ne:re.key),y=l(re,y,ne),ge===null?Z=re:ge.sibling=re,ge=re);return e&&Y.forEach(function(zt){return a(E,zt)}),ce&&Wa(E,ne),Z}function F(E,y,M,N){if(M==null)throw Error(s(151));for(var Z=null,ge=null,Y=y,ne=y=0,re=null,pe=M.next();Y!==null&&!pe.done;ne++,pe=M.next()){Y.index>ne?(re=Y,Y=null):re=Y.sibling;var zt=A(E,Y,pe.value,N);if(zt===null){Y===null&&(Y=re);break}e&&Y&&zt.alternate===null&&a(E,Y),y=l(zt,y,ne),ge===null?Z=zt:ge.sibling=zt,ge=zt,Y=re}if(pe.done)return t(E,Y),ce&&Wa(E,ne),Z;if(Y===null){for(;!pe.done;ne++,pe=M.next())pe=D(E,pe.value,N),pe!==null&&(y=l(pe,y,ne),ge===null?Z=pe:ge.sibling=pe,ge=pe);return ce&&Wa(E,ne),Z}for(Y=n(Y);!pe.done;ne++,pe=M.next())pe=R(Y,E,ne,pe.value,N),pe!==null&&(e&&pe.alternate!==null&&Y.delete(pe.key===null?ne:pe.key),y=l(pe,y,ne),ge===null?Z=pe:ge.sibling=pe,ge=pe);return e&&Y.forEach(function(Xp){return a(E,Xp)}),ce&&Wa(E,ne),Z}function _e(E,y,M,N){if(typeof M=="object"&&M!==null&&M.type===q&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case X:e:{for(var Z=M.key;y!==null;){if(y.key===Z){if(Z=M.type,Z===q){if(y.tag===7){t(E,y.sibling),N=i(y,M.props.children),N.return=E,E=N;break e}}else if(y.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ce&&$t(Z)===y.type){t(E,y.sibling),N=i(y,M.props),Ei(N,M),N.return=E,E=N;break e}t(E,y);break}else a(E,y);y=y.sibling}M.type===q?(N=Xt(M.props.children,E.mode,N,M.key),N.return=E,E=N):(N=wl(M.type,M.key,M.props,null,E.mode,N),Ei(N,M),N.return=E,E=N)}return r(E);case G:e:{for(Z=M.key;y!==null;){if(y.key===Z)if(y.tag===4&&y.stateNode.containerInfo===M.containerInfo&&y.stateNode.implementation===M.implementation){t(E,y.sibling),N=i(y,M.children||[]),N.return=E,E=N;break e}else{t(E,y);break}else a(E,y);y=y.sibling}N=hr(M,E.mode,N),N.return=E,E=N}return r(E);case Ce:return M=$t(M),_e(E,y,M,N)}if(xe(M))return V(E,y,M,N);if(Ve(M)){if(Z=Ve(M),typeof Z!="function")throw Error(s(150));return M=Z.call(M),F(E,y,M,N)}if(typeof M.then=="function")return _e(E,y,zl(M),N);if(M.$$typeof===J)return _e(E,y,Dl(E,M),N);kl(E,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,y!==null&&y.tag===6?(t(E,y.sibling),N=i(y,M),N.return=E,E=N):(t(E,y),N=mr(M,E.mode,N),N.return=E,E=N),r(E)):t(E,y)}return function(E,y,M,N){try{Si=0;var Z=_e(E,y,M,N);return Dn=null,Z}catch(Y){if(Y===Nn||Y===jl)throw Y;var ge=ya(29,Y,null,E.mode);return ge.lanes=N,ge.return=E,ge}finally{}}}var Ft=Bc(!0),Gc=Bc(!1),bt=!1;function Ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function St(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Et(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ye&2)!==0){var i=n.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a,a=xl(e),_c(e,null,t),a}return Rl(e,n,a,t),xl(e)}function Ti(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Nu(e,t)}}function xr(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=r:l=l.next=r,t=t.next}while(t!==null);l===null?i=l=a:l=l.next=a}else i=l=a;t={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var wr=!1;function _i(){if(wr){var e=On;if(e!==null)throw e}}function Mi(e,a,t,n){wr=!1;var i=e.updateQueue;bt=!1;var l=i.firstBaseUpdate,r=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var g=f,C=g.next;g.next=null,r===null?l=C:r.next=C,r=g;var w=e.alternate;w!==null&&(w=w.updateQueue,f=w.lastBaseUpdate,f!==r&&(f===null?w.firstBaseUpdate=C:f.next=C,w.lastBaseUpdate=g))}if(l!==null){var D=i.baseState;r=0,w=C=g=null,f=l;do{var A=f.lane&-536870913,R=A!==f.lane;if(R?(oe&A)===A:(n&A)===A){A!==0&&A===wn&&(wr=!0),w!==null&&(w=w.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var V=e,F=f;A=a;var _e=t;switch(F.tag){case 1:if(V=F.payload,typeof V=="function"){D=V.call(_e,D,A);break e}D=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=F.payload,A=typeof V=="function"?V.call(_e,D,A):V,A==null)break e;D=T({},D,A);break e;case 2:bt=!0}}A=f.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=i.callbacks,R===null?i.callbacks=[A]:R.push(A))}else R={lane:A,tag:f.tag,payload:f.payload,callback:f.callback,next:null},w===null?(C=w=R,g=D):w=w.next=R,r|=A;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;R=f,f=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);w===null&&(g=D),i.baseState=g,i.firstBaseUpdate=C,i.lastBaseUpdate=w,l===null&&(i.shared.lanes=0),At|=r,e.lanes=r,e.memoizedState=D}}function qc(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function Vc(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)qc(t[e],a)}var Un=v(null),Hl=v(0);function Yc(e,a){e=rt,H(Hl,e),H(Un,a),rt=e|a.baseLanes}function Or(){H(Hl,rt),H(Un,Un.current)}function Nr(){rt=Hl.current,U(Un),U(Hl)}var va=v(null),Oa=null;function Tt(e){var a=e.alternate;H(ze,ze.current&1),H(va,e),Oa===null&&(a===null||Un.current!==null||a.memoizedState!==null)&&(Oa=e)}function Dr(e){H(ze,ze.current),H(va,e),Oa===null&&(Oa=e)}function Xc(e){e.tag===22?(H(ze,ze.current),H(va,e),Oa===null&&(Oa=e)):_t()}function _t(){H(ze,ze.current),H(va,va.current)}function ba(e){U(va),Oa===e&&(Oa=null),U(ze)}var ze=v(0);function Bl(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Hs(t)||Bs(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ia=0,te=null,Ee=null,Be=null,Gl=!1,jn=!1,Pt=!1,ql=0,Ci=0,Ln=null,jg=0;function je(){throw Error(s(321))}function Ur(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!pa(e[t],a[t]))return!1;return!0}function jr(e,a,t,n,i,l){return Ia=l,te=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,O.H=e===null||e.memoizedState===null?xf:$r,Pt=!1,l=t(n,i),Pt=!1,jn&&(l=Qc(a,t,n,i)),Kc(e),l}function Kc(e){O.H=xi;var a=Ee!==null&&Ee.next!==null;if(Ia=0,Be=Ee=te=null,Gl=!1,Ci=0,Ln=null,a)throw Error(s(300));e===null||Ge||(e=e.dependencies,e!==null&&Nl(e)&&(Ge=!0))}function Qc(e,a,t,n){te=e;var i=0;do{if(jn&&(Ln=null),Ci=0,jn=!1,25<=i)throw Error(s(301));if(i+=1,Be=Ee=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}O.H=wf,l=a(t,n)}while(jn);return l}function Lg(){var e=O.H,a=e.useState()[0];return a=typeof a.then=="function"?Ai(a):a,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(te.flags|=1024),a}function Lr(){var e=ql!==0;return ql=0,e}function zr(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function kr(e){if(Gl){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Gl=!1}Ia=0,Be=Ee=te=null,jn=!1,Ci=ql=0,Ln=null}function ta(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?te.memoizedState=Be=e:Be=Be.next=e,Be}function ke(){if(Ee===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var a=Be===null?te.memoizedState:Be.next;if(a!==null)Be=a,Ee=e;else{if(e===null)throw te.alternate===null?Error(s(467)):Error(s(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Be===null?te.memoizedState=Be=e:Be=Be.next=e}return Be}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ai(e){var a=Ci;return Ci+=1,Ln===null&&(Ln=[]),e=zc(Ln,e,a),a=te,(Be===null?a.memoizedState:Be.next)===null&&(a=a.alternate,O.H=a===null||a.memoizedState===null?xf:$r),e}function Yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ai(e);if(e.$$typeof===J)return We(e)}throw Error(s(438,String(e)))}function Hr(e){var a=null,t=te.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=te.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Vl(),te.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=ha;return a.index++,t}function et(e,a){return typeof a=="function"?a(e):a}function Xl(e){var a=ke();return Br(a,Ee,e)}function Br(e,a,t){var n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var r=i.next;i.next=l.next,l.next=r}a.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{a=i.next;var f=r=null,g=null,C=a,w=!1;do{var D=C.lane&-536870913;if(D!==C.lane?(oe&D)===D:(Ia&D)===D){var A=C.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),D===wn&&(w=!0);else if((Ia&A)===A){C=C.next,A===wn&&(w=!0);continue}else D={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},g===null?(f=g=D,r=l):g=g.next=D,te.lanes|=A,At|=A;D=C.action,Pt&&t(l,D),l=C.hasEagerState?C.eagerState:t(l,D)}else A={lane:D,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},g===null?(f=g=A,r=l):g=g.next=A,te.lanes|=D,At|=D;C=C.next}while(C!==null&&C!==a);if(g===null?r=l:g.next=f,!pa(l,e.memoizedState)&&(Ge=!0,w&&(t=On,t!==null)))throw t;e.memoizedState=l,e.baseState=r,e.baseQueue=g,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Gr(e){var a=ke(),t=a.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var n=t.dispatch,i=t.pending,l=a.memoizedState;if(i!==null){t.pending=null;var r=i=i.next;do l=e(l,r.action),r=r.next;while(r!==i);pa(l,a.memoizedState)||(Ge=!0),a.memoizedState=l,a.baseQueue===null&&(a.baseState=l),t.lastRenderedState=l}return[l,n]}function Zc(e,a,t){var n=te,i=ke(),l=ce;if(l){if(t===void 0)throw Error(s(407));t=t()}else t=a();var r=!pa((Ee||i).memoizedState,t);if(r&&(i.memoizedState=t,Ge=!0),i=i.queue,Yr(Wc.bind(null,n,i,e),[e]),i.getSnapshot!==a||r||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,zn(9,{destroy:void 0},$c.bind(null,n,i,t,a),null),Me===null)throw Error(s(349));l||(Ia&127)!==0||Jc(n,a,t)}return t}function Jc(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=te.updateQueue,a===null?(a=Vl(),te.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function $c(e,a,t,n){a.value=t,a.getSnapshot=n,Fc(a)&&Pc(e)}function Wc(e,a,t){return t(function(){Fc(a)&&Pc(e)})}function Fc(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!pa(e,t)}catch{return!0}}function Pc(e){var a=Yt(e,2);a!==null&&ma(a,e,2)}function qr(e){var a=ta();if(typeof e=="function"){var t=e;if(e=t(),Pt){oa(!0);try{t()}finally{oa(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:e},a}function Ic(e,a,t,n){return e.baseState=t,Br(e,Ee,typeof n=="function"?n:et)}function zg(e,a,t,n,i){if(Zl(e))throw Error(s(485));if(e=a.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};O.T!==null?t(!0):l.isTransition=!1,n(l),t=a.pending,t===null?(l.next=a.pending=l,ef(a,l)):(l.next=t.next,a.pending=t.next=l)}}function ef(e,a){var t=a.action,n=a.payload,i=e.state;if(a.isTransition){var l=O.T,r={};O.T=r;try{var f=t(i,n),g=O.S;g!==null&&g(r,f),af(e,a,f)}catch(C){Vr(e,a,C)}finally{l!==null&&r.types!==null&&(l.types=r.types),O.T=l}}else try{l=t(i,n),af(e,a,l)}catch(C){Vr(e,a,C)}}function af(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){tf(e,a,n)},function(n){return Vr(e,a,n)}):tf(e,a,t)}function tf(e,a,t){a.status="fulfilled",a.value=t,nf(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,ef(e,t)))}function Vr(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,nf(a),a=a.next;while(a!==n)}e.action=null}function nf(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function lf(e,a){return a}function of(e,a){if(ce){var t=Me.formState;if(t!==null){e:{var n=te;if(ce){if(Ae){a:{for(var i=Ae,l=wa;i.nodeType!==8;){if(!l){i=null;break a}if(i=Na(i.nextSibling),i===null){i=null;break a}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Ae=Na(i.nextSibling),n=i.data==="F!";break e}}yt(n)}n=!1}n&&(a=t[0])}}return t=ta(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lf,lastRenderedState:a},t.queue=n,t=Cf.bind(null,te,n),n.dispatch=t,n=qr(!1),l=Jr.bind(null,te,!1,n.queue),n=ta(),i={state:a,dispatch:null,action:e,pending:null},n.queue=i,t=zg.bind(null,te,i,l,t),i.dispatch=t,n.memoizedState=e,[a,t,!1]}function rf(e){var a=ke();return sf(a,Ee,e)}function sf(e,a,t){if(a=Br(e,a,lf)[0],e=Xl(et)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=Ai(a)}catch(r){throw r===Nn?jl:r}else n=a;a=ke();var i=a.queue,l=i.dispatch;return t!==a.memoizedState&&(te.flags|=2048,zn(9,{destroy:void 0},kg.bind(null,i,t),null)),[n,l,e]}function kg(e,a){e.action=a}function uf(e){var a=ke(),t=Ee;if(t!==null)return sf(a,t,e);ke(),a=a.memoizedState,t=ke();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function zn(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=te.updateQueue,a===null&&(a=Vl(),te.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function cf(){return ke().memoizedState}function Kl(e,a,t,n){var i=ta();te.flags|=e,i.memoizedState=zn(1|a,{destroy:void 0},t,n===void 0?null:n)}function Ql(e,a,t,n){var i=ke();n=n===void 0?null:n;var l=i.memoizedState.inst;Ee!==null&&n!==null&&Ur(n,Ee.memoizedState.deps)?i.memoizedState=zn(a,l,t,n):(te.flags|=e,i.memoizedState=zn(1|a,l,t,n))}function ff(e,a){Kl(8390656,8,e,a)}function Yr(e,a){Ql(2048,8,e,a)}function Hg(e){te.flags|=4;var a=te.updateQueue;if(a===null)a=Vl(),te.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function df(e){var a=ke().memoizedState;return Hg({ref:a,nextImpl:e}),function(){if((ye&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function mf(e,a){return Ql(4,2,e,a)}function hf(e,a){return Ql(4,4,e,a)}function gf(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function pf(e,a,t){t=t!=null?t.concat([e]):null,Ql(4,4,gf.bind(null,a,e),t)}function Xr(){}function yf(e,a){var t=ke();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&Ur(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function vf(e,a){var t=ke();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&Ur(a,n[1]))return n[0];if(n=e(),Pt){oa(!0);try{e()}finally{oa(!1)}}return t.memoizedState=[n,a],n}function Kr(e,a,t){return t===void 0||(Ia&1073741824)!==0&&(oe&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=bd(),te.lanes|=e,At|=e,t)}function bf(e,a,t,n){return pa(t,a)?t:Un.current!==null?(e=Kr(e,t,n),pa(e,a)||(Ge=!0),e):(Ia&42)===0||(Ia&1073741824)!==0&&(oe&261930)===0?(Ge=!0,e.memoizedState=t):(e=bd(),te.lanes|=e,At|=e,a)}function Sf(e,a,t,n,i){var l=k.p;k.p=l!==0&&8>l?l:8;var r=O.T,f={};O.T=f,Jr(e,!1,a,t);try{var g=i(),C=O.S;if(C!==null&&C(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var w=Ug(g,n);Ri(e,a,w,Ta(e))}else Ri(e,a,n,Ta(e))}catch(D){Ri(e,a,{then:function(){},status:"rejected",reason:D},Ta())}finally{k.p=l,r!==null&&f.types!==null&&(r.types=f.types),O.T=r}}function Bg(){}function Qr(e,a,t,n){if(e.tag!==5)throw Error(s(476));var i=Ef(e).queue;Sf(e,i,a,Q,t===null?Bg:function(){return Tf(e),t(n)})}function Ef(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:Q},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Tf(e){var a=Ef(e);a.next===null&&(a=e.alternate.memoizedState),Ri(e,a.next.queue,{},Ta())}function Zr(){return We(Xi)}function _f(){return ke().memoizedState}function Mf(){return ke().memoizedState}function Gg(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Ta();e=St(t);var n=Et(a,e,t);n!==null&&(ma(n,a,t),Ti(n,a,t)),a={cache:Tr()},e.payload=a;return}a=a.return}}function qg(e,a,t){var n=Ta();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Zl(e)?Af(a,t):(t=fr(e,a,t,n),t!==null&&(ma(t,e,n),Rf(t,a,n)))}function Cf(e,a,t){var n=Ta();Ri(e,a,t,n)}function Ri(e,a,t,n){var i={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zl(e))Af(a,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=a.lastRenderedReducer,l!==null))try{var r=a.lastRenderedState,f=l(r,t);if(i.hasEagerState=!0,i.eagerState=f,pa(f,r))return Rl(e,a,i,0),Me===null&&Al(),!1}catch{}finally{}if(t=fr(e,a,i,n),t!==null)return ma(t,e,n),Rf(t,a,n),!0}return!1}function Jr(e,a,t,n){if(n={lane:2,revertLane:As(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Zl(e)){if(a)throw Error(s(479))}else a=fr(e,t,n,2),a!==null&&ma(a,e,2)}function Zl(e){var a=e.alternate;return e===te||a!==null&&a===te}function Af(e,a){jn=Gl=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Rf(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Nu(e,t)}}var xi={readContext:We,use:Yl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};xi.useEffectEvent=je;var xf={readContext:We,use:Yl,useCallback:function(e,a){return ta().memoizedState=[e,a===void 0?null:a],e},useContext:We,useEffect:ff,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Kl(4194308,4,gf.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Kl(4194308,4,e,a)},useInsertionEffect:function(e,a){Kl(4,2,e,a)},useMemo:function(e,a){var t=ta();a=a===void 0?null:a;var n=e();if(Pt){oa(!0);try{e()}finally{oa(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ta();if(t!==void 0){var i=t(a);if(Pt){oa(!0);try{t(a)}finally{oa(!1)}}}else i=a;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=qg.bind(null,te,e),[n.memoizedState,e]},useRef:function(e){var a=ta();return e={current:e},a.memoizedState=e},useState:function(e){e=qr(e);var a=e.queue,t=Cf.bind(null,te,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Xr,useDeferredValue:function(e,a){var t=ta();return Kr(t,e,a)},useTransition:function(){var e=qr(!1);return e=Sf.bind(null,te,e.queue,!0,!1),ta().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=te,i=ta();if(ce){if(t===void 0)throw Error(s(407));t=t()}else{if(t=a(),Me===null)throw Error(s(349));(oe&127)!==0||Jc(n,a,t)}i.memoizedState=t;var l={value:t,getSnapshot:a};return i.queue=l,ff(Wc.bind(null,n,l,e),[e]),n.flags|=2048,zn(9,{destroy:void 0},$c.bind(null,n,l,t,a),null),t},useId:function(){var e=ta(),a=Me.identifierPrefix;if(ce){var t=Ga,n=Ba;t=(n&~(1<<32-aa(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=ql++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=jg++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Zr,useFormState:of,useActionState:of,useOptimistic:function(e){var a=ta();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Jr.bind(null,te,!0,t),t.dispatch=a,[e,a]},useMemoCache:Hr,useCacheRefresh:function(){return ta().memoizedState=Gg.bind(null,te)},useEffectEvent:function(e){var a=ta(),t={impl:e};return a.memoizedState=t,function(){if((ye&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}},$r={readContext:We,use:Yl,useCallback:yf,useContext:We,useEffect:Yr,useImperativeHandle:pf,useInsertionEffect:mf,useLayoutEffect:hf,useMemo:vf,useReducer:Xl,useRef:cf,useState:function(){return Xl(et)},useDebugValue:Xr,useDeferredValue:function(e,a){var t=ke();return bf(t,Ee.memoizedState,e,a)},useTransition:function(){var e=Xl(et)[0],a=ke().memoizedState;return[typeof e=="boolean"?e:Ai(e),a]},useSyncExternalStore:Zc,useId:_f,useHostTransitionStatus:Zr,useFormState:rf,useActionState:rf,useOptimistic:function(e,a){var t=ke();return Ic(t,Ee,e,a)},useMemoCache:Hr,useCacheRefresh:Mf};$r.useEffectEvent=df;var wf={readContext:We,use:Yl,useCallback:yf,useContext:We,useEffect:Yr,useImperativeHandle:pf,useInsertionEffect:mf,useLayoutEffect:hf,useMemo:vf,useReducer:Gr,useRef:cf,useState:function(){return Gr(et)},useDebugValue:Xr,useDeferredValue:function(e,a){var t=ke();return Ee===null?Kr(t,e,a):bf(t,Ee.memoizedState,e,a)},useTransition:function(){var e=Gr(et)[0],a=ke().memoizedState;return[typeof e=="boolean"?e:Ai(e),a]},useSyncExternalStore:Zc,useId:_f,useHostTransitionStatus:Zr,useFormState:uf,useActionState:uf,useOptimistic:function(e,a){var t=ke();return Ee!==null?Ic(t,Ee,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Hr,useCacheRefresh:Mf};wf.useEffectEvent=df;function Wr(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:T({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Fr={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Ta(),i=St(n);i.payload=a,t!=null&&(i.callback=t),a=Et(e,i,n),a!==null&&(ma(a,e,n),Ti(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Ta(),i=St(n);i.tag=1,i.payload=a,t!=null&&(i.callback=t),a=Et(e,i,n),a!==null&&(ma(a,e,n),Ti(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Ta(),n=St(t);n.tag=2,a!=null&&(n.callback=a),a=Et(e,n,t),a!==null&&(ma(a,e,t),Ti(a,e,t))}};function Of(e,a,t,n,i,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,r):a.prototype&&a.prototype.isPureReactComponent?!hi(t,n)||!hi(i,l):!0}function Nf(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Fr.enqueueReplaceState(a,a.state,null)}function It(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=T({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function Df(e){Cl(e)}function Uf(e){console.error(e)}function jf(e){Cl(e)}function Jl(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function Lf(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Pr(e,a,t){return t=St(t),t.tag=3,t.payload={element:null},t.callback=function(){Jl(e,a)},t}function zf(e){return e=St(e),e.tag=3,e}function kf(e,a,t,n){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){Lf(a,t,n)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Lf(a,t,n),typeof i!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function Vg(e,a,t,n,i){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&xn(a,t,i,!0),t=va.current,t!==null){switch(t.tag){case 31:case 13:return Oa===null?oo():t.alternate===null&&Le===0&&(Le=3),t.flags&=-257,t.flags|=65536,t.lanes=i,n===Ll?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),_s(e,n,i)),!1;case 22:return t.flags|=65536,n===Ll?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),_s(e,n,i)),!1}throw Error(s(435,t.tag))}return _s(e,n,i),oo(),!1}if(ce)return a=va.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,n!==yr&&(e=Error(s(422),{cause:n}),yi(Aa(e,t)))):(n!==yr&&(a=Error(s(423),{cause:n}),yi(Aa(a,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Aa(n,t),i=Pr(e.stateNode,n,i),xr(e,i),Le!==4&&(Le=2)),!1;var l=Error(s(520),{cause:n});if(l=Aa(l,t),zi===null?zi=[l]:zi.push(l),Le!==4&&(Le=2),a===null)return!0;n=Aa(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=Pr(t.stateNode,n,e),xr(t,e),!1;case 1:if(a=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Rt===null||!Rt.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=zf(i),kf(i,e,t,n),xr(t,i),!1}t=t.return}while(t!==null);return!1}var Ir=Error(s(461)),Ge=!1;function Fe(e,a,t,n){a.child=e===null?Gc(a,null,t,n):Ft(a,e.child,t,n)}function Hf(e,a,t,n,i){t=t.render;var l=a.ref;if("ref"in n){var r={};for(var f in n)f!=="ref"&&(r[f]=n[f])}else r=n;return Zt(a),n=jr(e,a,t,r,l,i),f=Lr(),e!==null&&!Ge?(zr(e,a,i),at(e,a,i)):(ce&&f&&gr(a),a.flags|=1,Fe(e,a,n,i),a.child)}function Bf(e,a,t,n,i){if(e===null){var l=t.type;return typeof l=="function"&&!dr(l)&&l.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=l,Gf(e,a,l,n,i)):(e=wl(t.type,null,n,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(l=e.child,!rs(e,i)){var r=l.memoizedProps;if(t=t.compare,t=t!==null?t:hi,t(r,n)&&e.ref===a.ref)return at(e,a,i)}return a.flags|=1,e=$a(l,n),e.ref=a.ref,e.return=a,a.child=e}function Gf(e,a,t,n,i){if(e!==null){var l=e.memoizedProps;if(hi(l,n)&&e.ref===a.ref)if(Ge=!1,a.pendingProps=n=l,rs(e,i))(e.flags&131072)!==0&&(Ge=!0);else return a.lanes=e.lanes,at(e,a,i)}return es(e,a,t,n,i)}function qf(e,a,t,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,e!==null){for(n=a.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,a.child=null;return Vf(e,a,l,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(a,l!==null?l.cachePool:null),l!==null?Yc(a,l):Or(),Xc(a);else return n=a.lanes=536870912,Vf(e,a,l!==null?l.baseLanes|t:t,t,n)}else l!==null?(Ul(a,l.cachePool),Yc(a,l),_t(),a.memoizedState=null):(e!==null&&Ul(a,null),Or(),_t());return Fe(e,a,i,t),a.child}function wi(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Vf(e,a,t,n,i){var l=Mr();return l=l===null?null:{parent:He._currentValue,pool:l},a.memoizedState={baseLanes:t,cachePool:l},e!==null&&Ul(a,null),Or(),Xc(a),e!==null&&xn(e,a,n,!0),a.childLanes=i,null}function $l(e,a){return a=Fl({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Yf(e,a,t){return Ft(a,e.child,null,t),e=$l(a,a.pendingProps),e.flags|=2,ba(a),a.memoizedState=null,e}function Yg(e,a,t){var n=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ce){if(n.mode==="hidden")return e=$l(a,n),a.lanes=536870912,wi(null,e);if(Dr(a),(e=Ae)?(e=am(e,wa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:gt!==null?{id:Ba,overflow:Ga}:null,retryLane:536870912,hydrationErrors:null},t=Cc(e),t.return=a,a.child=t,$e=a,Ae=null)):e=null,e===null)throw yt(a);return a.lanes=536870912,null}return $l(a,n)}var l=e.memoizedState;if(l!==null){var r=l.dehydrated;if(Dr(a),i)if(a.flags&256)a.flags&=-257,a=Yf(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(s(558));else if(Ge||xn(e,a,t,!1),i=(t&e.childLanes)!==0,Ge||i){if(n=Me,n!==null&&(r=Du(n,t),r!==0&&r!==l.retryLane))throw l.retryLane=r,Yt(e,r),ma(n,e,r),Ir;oo(),a=Yf(e,a,t)}else e=l.treeContext,Ae=Na(r.nextSibling),$e=a,ce=!0,pt=null,wa=!1,e!==null&&xc(a,e),a=$l(a,n),a.flags|=4096;return a}return e=$a(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Wl(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function es(e,a,t,n,i){return Zt(a),t=jr(e,a,t,n,void 0,i),n=Lr(),e!==null&&!Ge?(zr(e,a,i),at(e,a,i)):(ce&&n&&gr(a),a.flags|=1,Fe(e,a,t,i),a.child)}function Xf(e,a,t,n,i,l){return Zt(a),a.updateQueue=null,t=Qc(a,n,t,i),Kc(e),n=Lr(),e!==null&&!Ge?(zr(e,a,l),at(e,a,l)):(ce&&n&&gr(a),a.flags|=1,Fe(e,a,t,l),a.child)}function Kf(e,a,t,n,i){if(Zt(a),a.stateNode===null){var l=Mn,r=t.contextType;typeof r=="object"&&r!==null&&(l=We(r)),l=new t(n,l),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Fr,a.stateNode=l,l._reactInternals=a,l=a.stateNode,l.props=n,l.state=a.memoizedState,l.refs={},Ar(a),r=t.contextType,l.context=typeof r=="object"&&r!==null?We(r):Mn,l.state=a.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Wr(a,t,r,n),l.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Fr.enqueueReplaceState(l,l.state,null),Mi(a,n,l,i),_i(),l.state=a.memoizedState),typeof l.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){l=a.stateNode;var f=a.memoizedProps,g=It(t,f);l.props=g;var C=l.context,w=t.contextType;r=Mn,typeof w=="object"&&w!==null&&(r=We(w));var D=t.getDerivedStateFromProps;w=typeof D=="function"||typeof l.getSnapshotBeforeUpdate=="function",f=a.pendingProps!==f,w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(f||C!==r)&&Nf(a,l,n,r),bt=!1;var A=a.memoizedState;l.state=A,Mi(a,n,l,i),_i(),C=a.memoizedState,f||A!==C||bt?(typeof D=="function"&&(Wr(a,t,D,n),C=a.memoizedState),(g=bt||Of(a,t,g,n,A,C,r))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(a.flags|=4194308)):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=C),l.props=n,l.state=C,l.context=r,n=g):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{l=a.stateNode,Rr(e,a),r=a.memoizedProps,w=It(t,r),l.props=w,D=a.pendingProps,A=l.context,C=t.contextType,g=Mn,typeof C=="object"&&C!==null&&(g=We(C)),f=t.getDerivedStateFromProps,(C=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==D||A!==g)&&Nf(a,l,n,g),bt=!1,A=a.memoizedState,l.state=A,Mi(a,n,l,i),_i();var R=a.memoizedState;r!==D||A!==R||bt||e!==null&&e.dependencies!==null&&Nl(e.dependencies)?(typeof f=="function"&&(Wr(a,t,f,n),R=a.memoizedState),(w=bt||Of(a,t,w,n,A,R,g)||e!==null&&e.dependencies!==null&&Nl(e.dependencies))?(C||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,R,g),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,R,g)),typeof l.componentDidUpdate=="function"&&(a.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=R),l.props=n,l.state=R,l.context=g,n=w):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),n=!1)}return l=n,Wl(e,a),n=(a.flags&128)!==0,l||n?(l=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:l.render(),a.flags|=1,e!==null&&n?(a.child=Ft(a,e.child,null,i),a.child=Ft(a,null,t,i)):Fe(e,a,t,i),a.memoizedState=l.state,e=a.child):e=at(e,a,i),e}function Qf(e,a,t,n){return Kt(),a.flags|=256,Fe(e,a,t,n),a.child}var as={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ts(e){return{baseLanes:e,cachePool:jc()}}function ns(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Ea),e}function Zf(e,a,t){var n=a.pendingProps,i=!1,l=(a.flags&128)!==0,r;if((r=l)||(r=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),r&&(i=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,e===null){if(ce){if(i?Tt(a):_t(),(e=Ae)?(e=am(e,wa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:gt!==null?{id:Ba,overflow:Ga}:null,retryLane:536870912,hydrationErrors:null},t=Cc(e),t.return=a,a.child=t,$e=a,Ae=null)):e=null,e===null)throw yt(a);return Bs(e)?a.lanes=32:a.lanes=536870912,null}var f=n.children;return n=n.fallback,i?(_t(),i=a.mode,f=Fl({mode:"hidden",children:f},i),n=Xt(n,i,t,null),f.return=a,n.return=a,f.sibling=n,a.child=f,n=a.child,n.memoizedState=ts(t),n.childLanes=ns(e,r,t),a.memoizedState=as,wi(null,n)):(Tt(a),is(a,f))}var g=e.memoizedState;if(g!==null&&(f=g.dehydrated,f!==null)){if(l)a.flags&256?(Tt(a),a.flags&=-257,a=ls(e,a,t)):a.memoizedState!==null?(_t(),a.child=e.child,a.flags|=128,a=null):(_t(),f=n.fallback,i=a.mode,n=Fl({mode:"visible",children:n.children},i),f=Xt(f,i,t,null),f.flags|=2,n.return=a,f.return=a,n.sibling=f,a.child=n,Ft(a,e.child,null,t),n=a.child,n.memoizedState=ts(t),n.childLanes=ns(e,r,t),a.memoizedState=as,a=wi(null,n));else if(Tt(a),Bs(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var C=r.dgst;r=C,n=Error(s(419)),n.stack="",n.digest=r,yi({value:n,source:null,stack:null}),a=ls(e,a,t)}else if(Ge||xn(e,a,t,!1),r=(t&e.childLanes)!==0,Ge||r){if(r=Me,r!==null&&(n=Du(r,t),n!==0&&n!==g.retryLane))throw g.retryLane=n,Yt(e,n),ma(r,e,n),Ir;Hs(f)||oo(),a=ls(e,a,t)}else Hs(f)?(a.flags|=192,a.child=e.child,a=null):(e=g.treeContext,Ae=Na(f.nextSibling),$e=a,ce=!0,pt=null,wa=!1,e!==null&&xc(a,e),a=is(a,n.children),a.flags|=4096);return a}return i?(_t(),f=n.fallback,i=a.mode,g=e.child,C=g.sibling,n=$a(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,C!==null?f=$a(C,f):(f=Xt(f,i,t,null),f.flags|=2),f.return=a,n.return=a,n.sibling=f,a.child=n,wi(null,n),n=a.child,f=e.child.memoizedState,f===null?f=ts(t):(i=f.cachePool,i!==null?(g=He._currentValue,i=i.parent!==g?{parent:g,pool:g}:i):i=jc(),f={baseLanes:f.baseLanes|t,cachePool:i}),n.memoizedState=f,n.childLanes=ns(e,r,t),a.memoizedState=as,wi(e.child,n)):(Tt(a),t=e.child,e=t.sibling,t=$a(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=t,a.memoizedState=null,t)}function is(e,a){return a=Fl({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Fl(e,a){return e=ya(22,e,null,a),e.lanes=0,e}function ls(e,a,t){return Ft(a,e.child,null,t),e=is(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Jf(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),Sr(e.return,a,t)}function os(e,a,t,n,i,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:i,treeForkCount:l}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=t,r.tailMode=i,r.treeForkCount=l)}function $f(e,a,t){var n=a.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var r=ze.current,f=(r&2)!==0;if(f?(r=r&1|2,a.flags|=128):r&=1,H(ze,r),Fe(e,a,n,t),n=ce?pi:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jf(e,t,a);else if(e.tag===19)Jf(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=a.child,i=null;t!==null;)e=t.alternate,e!==null&&Bl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=a.child,a.child=null):(i=t.sibling,t.sibling=null),os(a,!1,i,t,l,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&Bl(e)===null){a.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}os(a,!0,t,null,l,n);break;case"together":os(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function at(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),At|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(xn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,t=$a(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=$a(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function rs(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Nl(e)))}function Xg(e,a,t){switch(a.tag){case 3:Ne(a,a.stateNode.containerInfo),vt(a,He,e.memoizedState.cache),Kt();break;case 27:case 5:dt(a);break;case 4:Ne(a,a.stateNode.containerInfo);break;case 10:vt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Dr(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(Tt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Zf(e,a,t):(Tt(a),e=at(e,a,t),e!==null?e.sibling:null);Tt(a);break;case 19:var i=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(xn(e,a,t,!1),n=(t&a.childLanes)!==0),i){if(n)return $f(e,a,t);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(ze,ze.current),n)break;return null;case 22:return a.lanes=0,qf(e,a,t,a.pendingProps);case 24:vt(a,He,e.memoizedState.cache)}return at(e,a,t)}function Wf(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ge=!0;else{if(!rs(e,t)&&(a.flags&128)===0)return Ge=!1,Xg(e,a,t);Ge=(e.flags&131072)!==0}else Ge=!1,ce&&(a.flags&1048576)!==0&&Rc(a,pi,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=$t(a.elementType),a.type=e,typeof e=="function")dr(e)?(n=It(e,n),a.tag=1,a=Kf(null,a,e,n,t)):(a.tag=0,a=es(null,a,e,n,t));else{if(e!=null){var i=e.$$typeof;if(i===se){a.tag=11,a=Hf(null,a,e,n,t);break e}else if(i===W){a.tag=14,a=Bf(null,a,e,n,t);break e}}throw a=ia(e)||e,Error(s(306,a,""))}}return a;case 0:return es(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,i=It(n,a.pendingProps),Kf(e,a,n,i,t);case 3:e:{if(Ne(a,a.stateNode.containerInfo),e===null)throw Error(s(387));n=a.pendingProps;var l=a.memoizedState;i=l.element,Rr(e,a),Mi(a,n,null,t);var r=a.memoizedState;if(n=r.cache,vt(a,He,n),n!==l.cache&&Er(a,[He],t,!0),_i(),n=r.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){a=Qf(e,a,n,t);break e}else if(n!==i){i=Aa(Error(s(424)),a),yi(i),a=Qf(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=Na(e.firstChild),$e=a,ce=!0,pt=null,wa=!0,t=Gc(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Kt(),n===i){a=at(e,a,t);break e}Fe(e,a,n,t)}a=a.child}return a;case 26:return Wl(e,a),e===null?(t=rm(a.type,null,a.pendingProps,null))?a.memoizedState=t:ce||(t=a.type,e=a.pendingProps,n=ho($.current).createElement(t),n[Je]=a,n[ra]=e,Pe(n,t,e),Qe(n),a.stateNode=n):a.memoizedState=rm(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return dt(a),e===null&&ce&&(n=a.stateNode=im(a.type,a.pendingProps,$.current),$e=a,wa=!0,i=Ae,Nt(a.type)?(Gs=i,Ae=Na(n.firstChild)):Ae=i),Fe(e,a,a.pendingProps.children,t),Wl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ce&&((i=n=Ae)&&(n=Sp(n,a.type,a.pendingProps,wa),n!==null?(a.stateNode=n,$e=a,Ae=Na(n.firstChild),wa=!1,i=!0):i=!1),i||yt(a)),dt(a),i=a.type,l=a.pendingProps,r=e!==null?e.memoizedProps:null,n=l.children,Ls(i,l)?n=null:r!==null&&Ls(i,r)&&(a.flags|=32),a.memoizedState!==null&&(i=jr(e,a,Lg,null,null,t),Xi._currentValue=i),Wl(e,a),Fe(e,a,n,t),a.child;case 6:return e===null&&ce&&((e=t=Ae)&&(t=Ep(t,a.pendingProps,wa),t!==null?(a.stateNode=t,$e=a,Ae=null,e=!0):e=!1),e||yt(a)),null;case 13:return Zf(e,a,t);case 4:return Ne(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Ft(a,null,n,t):Fe(e,a,n,t),a.child;case 11:return Hf(e,a,a.type,a.pendingProps,t);case 7:return Fe(e,a,a.pendingProps,t),a.child;case 8:return Fe(e,a,a.pendingProps.children,t),a.child;case 12:return Fe(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,vt(a,a.type,n.value),Fe(e,a,n.children,t),a.child;case 9:return i=a.type._context,n=a.pendingProps.children,Zt(a),i=We(i),n=n(i),a.flags|=1,Fe(e,a,n,t),a.child;case 14:return Bf(e,a,a.type,a.pendingProps,t);case 15:return Gf(e,a,a.type,a.pendingProps,t);case 19:return $f(e,a,t);case 31:return Yg(e,a,t);case 22:return qf(e,a,t,a.pendingProps);case 24:return Zt(a),n=We(He),e===null?(i=Mr(),i===null&&(i=Me,l=Tr(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),a.memoizedState={parent:n,cache:i},Ar(a),vt(a,He,i)):((e.lanes&t)!==0&&(Rr(e,a),Mi(a,null,null,t),_i()),i=e.memoizedState,l=a.memoizedState,i.parent!==n?(i={parent:n,cache:n},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),vt(a,He,n)):(n=l.cache,vt(a,He,n),n!==i.cache&&Er(a,[He],t,!0))),Fe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function tt(e){e.flags|=4}function ss(e,a,t,n,i){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(_d())e.flags|=8192;else throw Wt=Ll,Cr}else e.flags&=-16777217}function Ff(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dm(a))if(_d())e.flags|=8192;else throw Wt=Ll,Cr}function Pl(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?wu():536870912,e.lanes|=a,Gn|=a)}function Oi(e,a){if(!ce)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Re(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function Kg(e,a,t){var n=a.pendingProps;switch(pr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(a),null;case 1:return Re(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Pa(He),we(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Rn(a)?tt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,vr())),Re(a),null;case 26:var i=a.type,l=a.memoizedState;return e===null?(tt(a),l!==null?(Re(a),Ff(a,l)):(Re(a),ss(a,i,null,n,t))):l?l!==e.memoizedState?(tt(a),Re(a),Ff(a,l)):(Re(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&tt(a),Re(a),ss(a,i,e,n,t)),null;case 27:if(ea(a),t=$.current,i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&tt(a);else{if(!n){if(a.stateNode===null)throw Error(s(166));return Re(a),null}e=B.current,Rn(a)?wc(a):(e=im(i,n,t),a.stateNode=e,tt(a))}return Re(a),null;case 5:if(ea(a),i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&tt(a);else{if(!n){if(a.stateNode===null)throw Error(s(166));return Re(a),null}if(l=B.current,Rn(a))wc(a);else{var r=ho($.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}l[Je]=a,l[ra]=n;e:for(r=a.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}a.stateNode=l;e:switch(Pe(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&tt(a)}}return Re(a),ss(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&tt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(s(166));if(e=$.current,Rn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,i=$e,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Je]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||Zd(e.nodeValue,t)),e||yt(a,!0)}else e=ho(e).createTextNode(n),e[Je]=a,a.stateNode=e}return Re(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=Rn(a),t!==null){if(e===null){if(!n)throw Error(s(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Je]=a}else Kt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Re(a),e=!1}else t=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(ba(a),a):(ba(a),null);if((a.flags&128)!==0)throw Error(s(558))}return Re(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Rn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Je]=a}else Kt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Re(a),i=!1}else i=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(ba(a),a):(ba(a),null)}return ba(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Pl(a,a.updateQueue),Re(a),null);case 4:return we(),e===null&&Os(a.stateNode.containerInfo),Re(a),null;case 10:return Pa(a.type),Re(a),null;case 19:if(U(ze),n=a.memoizedState,n===null)return Re(a),null;if(i=(a.flags&128)!==0,l=n.rendering,l===null)if(i)Oi(n,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(l=Bl(e),l!==null){for(a.flags|=128,Oi(n,!1),e=l.updateQueue,a.updateQueue=e,Pl(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Mc(t,e),t=t.sibling;return H(ze,ze.current&1|2),ce&&Wa(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&Ke()>no&&(a.flags|=128,i=!0,Oi(n,!1),a.lanes=4194304)}else{if(!i)if(e=Bl(l),e!==null){if(a.flags|=128,i=!0,e=e.updateQueue,a.updateQueue=e,Pl(a,e),Oi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!ce)return Re(a),null}else 2*Ke()-n.renderingStartTime>no&&t!==536870912&&(a.flags|=128,i=!0,Oi(n,!1),a.lanes=4194304);n.isBackwards?(l.sibling=a.child,a.child=l):(e=n.last,e!==null?e.sibling=l:a.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Ke(),e.sibling=null,t=ze.current,H(ze,i?t&1|2:t&1),ce&&Wa(a,n.treeForkCount),e):(Re(a),null);case 22:case 23:return ba(a),Nr(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(Re(a),a.subtreeFlags&6&&(a.flags|=8192)):Re(a),t=a.updateQueue,t!==null&&Pl(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&U(Jt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Pa(He),Re(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function Qg(e,a){switch(pr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Pa(He),we(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return ea(a),null;case 31:if(a.memoizedState!==null){if(ba(a),a.alternate===null)throw Error(s(340));Kt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ba(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Kt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return U(ze),null;case 4:return we(),null;case 10:return Pa(a.type),null;case 22:case 23:return ba(a),Nr(),e!==null&&U(Jt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Pa(He),null;case 25:return null;default:return null}}function Pf(e,a){switch(pr(a),a.tag){case 3:Pa(He),we();break;case 26:case 27:case 5:ea(a);break;case 4:we();break;case 31:a.memoizedState!==null&&ba(a);break;case 13:ba(a);break;case 19:U(ze);break;case 10:Pa(a.type);break;case 22:case 23:ba(a),Nr(),e!==null&&U(Jt);break;case 24:Pa(He)}}function Ni(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var i=n.next;t=i;do{if((t.tag&e)===e){n=void 0;var l=t.create,r=t.inst;n=l(),r.destroy=n}t=t.next}while(t!==i)}}catch(f){Se(a,a.return,f)}}function Mt(e,a,t){try{var n=a.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var r=n.inst,f=r.destroy;if(f!==void 0){r.destroy=void 0,i=a;var g=t,C=f;try{C()}catch(w){Se(i,g,w)}}}n=n.next}while(n!==l)}}catch(w){Se(a,a.return,w)}}function If(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Vc(a,t)}catch(n){Se(e,e.return,n)}}}function ed(e,a,t){t.props=It(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){Se(e,a,n)}}function Di(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(i){Se(e,a,i)}}function qa(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(i){Se(e,a,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Se(e,a,i)}else t.current=null}function ad(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(i){Se(e,e.return,i)}}function us(e,a,t){try{var n=e.stateNode;hp(n,e.type,t,a),n[ra]=a}catch(i){Se(e,e.return,i)}}function td(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Nt(e.type)||e.tag===4}function cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Nt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fs(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Za));else if(n!==4&&(n===27&&Nt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(fs(e,a,t),e=e.sibling;e!==null;)fs(e,a,t),e=e.sibling}function Il(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&Nt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Il(e,a,t),e=e.sibling;e!==null;)Il(e,a,t),e=e.sibling}function nd(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Pe(a,n,t),a[Je]=e,a[ra]=t}catch(l){Se(e,e.return,l)}}var nt=!1,qe=!1,ds=!1,id=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Zg(e,a){if(e=e.containerInfo,Us=Eo,e=gc(e),lr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var r=0,f=-1,g=-1,C=0,w=0,D=e,A=null;a:for(;;){for(var R;D!==t||i!==0&&D.nodeType!==3||(f=r+i),D!==l||n!==0&&D.nodeType!==3||(g=r+n),D.nodeType===3&&(r+=D.nodeValue.length),(R=D.firstChild)!==null;)A=D,D=R;for(;;){if(D===e)break a;if(A===t&&++C===i&&(f=r),A===l&&++w===n&&(g=r),(R=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=R}t=f===-1||g===-1?null:{start:f,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(js={focusedElem:e,selectionRange:t},Eo=!1,Ze=a;Ze!==null;)if(a=Ze,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ze=e;else for(;Ze!==null;){switch(a=Ze,l=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,t=a,i=l.memoizedProps,l=l.memoizedState,n=t.stateNode;try{var V=It(t.type,i);e=n.getSnapshotBeforeUpdate(V,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(F){Se(t,t.return,F)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)ks(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ks(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Ze=e;break}Ze=a.return}}function ld(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:lt(e,t),n&4&&Ni(5,t);break;case 1:if(lt(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(r){Se(t,t.return,r)}else{var i=It(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(i,a,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Se(t,t.return,r)}}n&64&&If(t),n&512&&Di(t,t.return);break;case 3:if(lt(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Vc(e,a)}catch(r){Se(t,t.return,r)}}break;case 27:a===null&&n&4&&nd(t);case 26:case 5:lt(e,t),a===null&&n&4&&ad(t),n&512&&Di(t,t.return);break;case 12:lt(e,t);break;case 31:lt(e,t),n&4&&sd(e,t);break;case 13:lt(e,t),n&4&&ud(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=tp.bind(null,t),Tp(e,t))));break;case 22:if(n=t.memoizedState!==null||nt,!n){a=a!==null&&a.memoizedState!==null||qe,i=nt;var l=qe;nt=n,(qe=a)&&!l?ot(e,t,(t.subtreeFlags&8772)!==0):lt(e,t),nt=i,qe=l}break;case 30:break;default:lt(e,t)}}function od(e){var a=e.alternate;a!==null&&(e.alternate=null,od(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Vo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,ua=!1;function it(e,a,t){for(t=t.child;t!==null;)rd(e,a,t),t=t.sibling}function rd(e,a,t){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(he,t)}catch{}switch(t.tag){case 26:qe||qa(t,a),it(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:qe||qa(t,a);var n=Oe,i=ua;Nt(t.type)&&(Oe=t.stateNode,ua=!1),it(e,a,t),qi(t.stateNode),Oe=n,ua=i;break;case 5:qe||qa(t,a);case 6:if(n=Oe,i=ua,Oe=null,it(e,a,t),Oe=n,ua=i,Oe!==null)if(ua)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(t.stateNode)}catch(l){Se(t,a,l)}else try{Oe.removeChild(t.stateNode)}catch(l){Se(t,a,l)}break;case 18:Oe!==null&&(ua?(e=Oe,Id(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Jn(e)):Id(Oe,t.stateNode));break;case 4:n=Oe,i=ua,Oe=t.stateNode.containerInfo,ua=!0,it(e,a,t),Oe=n,ua=i;break;case 0:case 11:case 14:case 15:Mt(2,t,a),qe||Mt(4,t,a),it(e,a,t);break;case 1:qe||(qa(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&ed(t,a,n)),it(e,a,t);break;case 21:it(e,a,t);break;case 22:qe=(n=qe)||t.memoizedState!==null,it(e,a,t),qe=n;break;default:it(e,a,t)}}function sd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jn(e)}catch(t){Se(a,a.return,t)}}}function ud(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jn(e)}catch(t){Se(a,a.return,t)}}function Jg(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new id),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new id),a;default:throw Error(s(435,e.tag))}}function eo(e,a){var t=Jg(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var i=np.bind(null,e,n);n.then(i,i)}})}function ca(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var i=t[n],l=e,r=a,f=r;e:for(;f!==null;){switch(f.tag){case 27:if(Nt(f.type)){Oe=f.stateNode,ua=!1;break e}break;case 5:Oe=f.stateNode,ua=!1;break e;case 3:case 4:Oe=f.stateNode.containerInfo,ua=!0;break e}f=f.return}if(Oe===null)throw Error(s(160));rd(l,r,i),Oe=null,ua=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)cd(a,e),a=a.sibling}var za=null;function cd(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ca(a,e),fa(e),n&4&&(Mt(3,e,e.return),Ni(3,e),Mt(5,e,e.return));break;case 1:ca(a,e),fa(e),n&512&&(qe||t===null||qa(t,t.return)),n&64&&nt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var i=za;if(ca(a,e),fa(e),n&512&&(qe||t===null||qa(t,t.return)),n&4){var l=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,i=i.ownerDocument||i;a:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[li]||l[Je]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),Pe(l,n,t),l[Je]=e,Qe(l),n=l;break e;case"link":var r=cm("link","href",i).get(n+(t.href||""));if(r){for(var f=0;f<r.length;f++)if(l=r[f],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){r.splice(f,1);break a}}l=i.createElement(n),Pe(l,n,t),i.head.appendChild(l);break;case"meta":if(r=cm("meta","content",i).get(n+(t.content||""))){for(f=0;f<r.length;f++)if(l=r[f],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){r.splice(f,1);break a}}l=i.createElement(n),Pe(l,n,t),i.head.appendChild(l);break;default:throw Error(s(468,n))}l[Je]=e,Qe(l),n=l}e.stateNode=n}else fm(i,e.type,e.stateNode);else e.stateNode=um(i,n,e.memoizedProps);else l!==n?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,n===null?fm(i,e.type,e.stateNode):um(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&us(e,e.memoizedProps,t.memoizedProps)}break;case 27:ca(a,e),fa(e),n&512&&(qe||t===null||qa(t,t.return)),t!==null&&n&4&&us(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ca(a,e),fa(e),n&512&&(qe||t===null||qa(t,t.return)),e.flags&32){i=e.stateNode;try{yn(i,"")}catch(V){Se(e,e.return,V)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,us(e,i,t!==null?t.memoizedProps:i)),n&1024&&(ds=!0);break;case 6:if(ca(a,e),fa(e),n&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(V){Se(e,e.return,V)}}break;case 3:if(yo=null,i=za,za=go(a.containerInfo),ca(a,e),za=i,fa(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Jn(a.containerInfo)}catch(V){Se(e,e.return,V)}ds&&(ds=!1,fd(e));break;case 4:n=za,za=go(e.stateNode.containerInfo),ca(a,e),fa(e),za=n;break;case 12:ca(a,e),fa(e);break;case 31:ca(a,e),fa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,eo(e,n)));break;case 13:ca(a,e),fa(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(to=Ke()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,eo(e,n)));break;case 22:i=e.memoizedState!==null;var g=t!==null&&t.memoizedState!==null,C=nt,w=qe;if(nt=C||i,qe=w||g,ca(a,e),qe=w,nt=C,fa(e),n&8192)e:for(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(t===null||g||nt||qe||en(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){g=t=a;try{if(l=g.stateNode,i)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{f=g.stateNode;var D=g.memoizedProps.style,A=D!=null&&D.hasOwnProperty("display")?D.display:null;f.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(V){Se(g,g.return,V)}}}else if(a.tag===6){if(t===null){g=a;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(V){Se(g,g.return,V)}}}else if(a.tag===18){if(t===null){g=a;try{var R=g.stateNode;i?em(R,!0):em(g.stateNode,!1)}catch(V){Se(g,g.return,V)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,eo(e,t))));break;case 19:ca(a,e),fa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,eo(e,n)));break;case 30:break;case 21:break;default:ca(a,e),fa(e)}}function fa(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(td(n)){t=n;break}n=n.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var i=t.stateNode,l=cs(e);Il(e,l,i);break;case 5:var r=t.stateNode;t.flags&32&&(yn(r,""),t.flags&=-33);var f=cs(e);Il(e,f,r);break;case 3:case 4:var g=t.stateNode.containerInfo,C=cs(e);fs(e,C,g);break;default:throw Error(s(161))}}catch(w){Se(e,e.return,w)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function fd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;fd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function lt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ld(e,a.alternate,a),a=a.sibling}function en(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Mt(4,a,a.return),en(a);break;case 1:qa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&ed(a,a.return,t),en(a);break;case 27:qi(a.stateNode);case 26:case 5:qa(a,a.return),en(a);break;case 22:a.memoizedState===null&&en(a);break;case 30:en(a);break;default:en(a)}e=e.sibling}}function ot(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,i=e,l=a,r=l.flags;switch(l.tag){case 0:case 11:case 15:ot(i,l,t),Ni(4,l);break;case 1:if(ot(i,l,t),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){Se(n,n.return,C)}if(n=l,i=n.updateQueue,i!==null){var f=n.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)qc(g[i],f)}catch(C){Se(n,n.return,C)}}t&&r&64&&If(l),Di(l,l.return);break;case 27:nd(l);case 26:case 5:ot(i,l,t),t&&n===null&&r&4&&ad(l),Di(l,l.return);break;case 12:ot(i,l,t);break;case 31:ot(i,l,t),t&&r&4&&sd(i,l);break;case 13:ot(i,l,t),t&&r&4&&ud(i,l);break;case 22:l.memoizedState===null&&ot(i,l,t),Di(l,l.return);break;case 30:break;default:ot(i,l,t)}a=a.sibling}}function ms(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&vi(t))}function hs(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&vi(e))}function ka(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)dd(e,a,t,n),a=a.sibling}function dd(e,a,t,n){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ka(e,a,t,n),i&2048&&Ni(9,a);break;case 1:ka(e,a,t,n);break;case 3:ka(e,a,t,n),i&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&vi(e)));break;case 12:if(i&2048){ka(e,a,t,n),e=a.stateNode;try{var l=a.memoizedProps,r=l.id,f=l.onPostCommit;typeof f=="function"&&f(r,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Se(a,a.return,g)}}else ka(e,a,t,n);break;case 31:ka(e,a,t,n);break;case 13:ka(e,a,t,n);break;case 23:break;case 22:l=a.stateNode,r=a.alternate,a.memoizedState!==null?l._visibility&2?ka(e,a,t,n):Ui(e,a):l._visibility&2?ka(e,a,t,n):(l._visibility|=2,kn(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),i&2048&&ms(r,a);break;case 24:ka(e,a,t,n),i&2048&&hs(a.alternate,a);break;default:ka(e,a,t,n)}}function kn(e,a,t,n,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var l=e,r=a,f=t,g=n,C=r.flags;switch(r.tag){case 0:case 11:case 15:kn(l,r,f,g,i),Ni(8,r);break;case 23:break;case 22:var w=r.stateNode;r.memoizedState!==null?w._visibility&2?kn(l,r,f,g,i):Ui(l,r):(w._visibility|=2,kn(l,r,f,g,i)),i&&C&2048&&ms(r.alternate,r);break;case 24:kn(l,r,f,g,i),i&&C&2048&&hs(r.alternate,r);break;default:kn(l,r,f,g,i)}a=a.sibling}}function Ui(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,i=n.flags;switch(n.tag){case 22:Ui(t,n),i&2048&&ms(n.alternate,n);break;case 24:Ui(t,n),i&2048&&hs(n.alternate,n);break;default:Ui(t,n)}a=a.sibling}}var ji=8192;function Hn(e,a,t){if(e.subtreeFlags&ji)for(e=e.child;e!==null;)md(e,a,t),e=e.sibling}function md(e,a,t){switch(e.tag){case 26:Hn(e,a,t),e.flags&ji&&e.memoizedState!==null&&jp(t,za,e.memoizedState,e.memoizedProps);break;case 5:Hn(e,a,t);break;case 3:case 4:var n=za;za=go(e.stateNode.containerInfo),Hn(e,a,t),za=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ji,ji=16777216,Hn(e,a,t),ji=n):Hn(e,a,t));break;default:Hn(e,a,t)}}function hd(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Li(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ze=n,pd(n,e)}hd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gd(e),e=e.sibling}function gd(e){switch(e.tag){case 0:case 11:case 15:Li(e),e.flags&2048&&Mt(9,e,e.return);break;case 3:Li(e);break;case 12:Li(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,ao(e)):Li(e);break;default:Li(e)}}function ao(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ze=n,pd(n,e)}hd(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Mt(8,a,a.return),ao(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,ao(a));break;default:ao(a)}e=e.sibling}}function pd(e,a){for(;Ze!==null;){var t=Ze;switch(t.tag){case 0:case 11:case 15:Mt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:vi(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Ze=n;else e:for(t=e;Ze!==null;){n=Ze;var i=n.sibling,l=n.return;if(od(n),n===t){Ze=null;break e}if(i!==null){i.return=l,Ze=i;break e}Ze=l}}}var $g={getCacheForType:function(e){var a=We(He),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return We(He).controller.signal}},Wg=typeof WeakMap=="function"?WeakMap:Map,ye=0,Me=null,ie=null,oe=0,be=0,Sa=null,Ct=!1,Bn=!1,gs=!1,rt=0,Le=0,At=0,an=0,ps=0,Ea=0,Gn=0,zi=null,da=null,ys=!1,to=0,yd=0,no=1/0,io=null,Rt=null,Ye=0,xt=null,qn=null,st=0,vs=0,bs=null,vd=null,ki=0,Ss=null;function Ta(){return(ye&2)!==0&&oe!==0?oe&-oe:O.T!==null?As():Uu()}function bd(){if(Ea===0)if((oe&536870912)===0||ce){var e=dl;dl<<=1,(dl&3932160)===0&&(dl=262144),Ea=e}else Ea=536870912;return e=va.current,e!==null&&(e.flags|=32),Ea}function ma(e,a,t){(e===Me&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(Vn(e,0),wt(e,oe,Ea,!1)),ii(e,t),((ye&2)===0||e!==Me)&&(e===Me&&((ye&2)===0&&(an|=t),Le===4&&wt(e,oe,Ea,!1)),Va(e))}function Sd(e,a,t){if((ye&6)!==0)throw Error(s(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||ni(e,a),i=n?Ig(e,a):Ts(e,a,!0),l=n;do{if(i===0){Bn&&!n&&wt(e,a,0,!1);break}else{if(t=e.current.alternate,l&&!Fg(t)){i=Ts(e,a,!1),l=!1;continue}if(i===2){if(l=a,e.errorRecoveryDisabledLanes&l)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;e:{var f=e;i=zi;var g=f.current.memoizedState.isDehydrated;if(g&&(Vn(f,r).flags|=256),r=Ts(f,r,!1),r!==2){if(gs&&!g){f.errorRecoveryDisabledLanes|=l,an|=l,i=4;break e}l=da,da=i,l!==null&&(da===null?da=l:da.push.apply(da,l))}i=r}if(l=!1,i!==2)continue}}if(i===1){Vn(e,0),wt(e,a,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:wt(n,a,Ea,!Ct);break e;case 2:da=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(i=to+300-Ke(),10<i)){if(wt(n,a,Ea,!Ct),hl(n,0,!0)!==0)break e;st=a,n.timeoutHandle=Fd(Ed.bind(null,n,t,da,io,ys,a,Ea,an,Gn,Ct,l,"Throttled",-0,0),i);break e}Ed(n,t,da,io,ys,a,Ea,an,Gn,Ct,l,null,-0,0)}}break}while(!0);Va(e)}function Ed(e,a,t,n,i,l,r,f,g,C,w,D,A,R){if(e.timeoutHandle=-1,D=a.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Za},md(a,l,D);var V=(l&62914560)===l?to-Ke():(l&4194048)===l?yd-Ke():0;if(V=Lp(D,V),V!==null){st=l,e.cancelPendingCommit=V(wd.bind(null,e,a,l,t,n,i,r,f,g,w,D,null,A,R)),wt(e,l,r,!C);return}}wd(e,a,l,t,n,i,r,f,g)}function Fg(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var i=t[n],l=i.getSnapshot;i=i.value;try{if(!pa(l(),i))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function wt(e,a,t,n){a&=~ps,a&=~an,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var i=a;0<i;){var l=31-aa(i),r=1<<l;n[l]=-1,i&=~r}t!==0&&Ou(e,t,a)}function lo(){return(ye&6)===0?(Hi(0),!1):!0}function Es(){if(ie!==null){if(be===0)var e=ie.return;else e=ie,Fa=Qt=null,kr(e),Dn=null,Si=0,e=ie;for(;e!==null;)Pf(e.alternate,e),e=e.return;ie=null}}function Vn(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,yp(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),st=0,Es(),Me=e,ie=t=$a(e.current,null),oe=a,be=0,Sa=null,Ct=!1,Bn=ni(e,a),gs=!1,Gn=Ea=ps=an=At=Le=0,da=zi=null,ys=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var i=31-aa(n),l=1<<i;a|=e[i],n&=~l}return rt=a,Al(),t}function Td(e,a){te=null,O.H=xi,a===Nn||a===jl?(a=kc(),be=3):a===Cr?(a=kc(),be=4):be=a===Ir?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Sa=a,ie===null&&(Le=1,Jl(e,Aa(a,e.current)))}function _d(){var e=va.current;return e===null?!0:(oe&4194048)===oe?Oa===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Oa:!1}function Md(){var e=O.H;return O.H=xi,e===null?xi:e}function Cd(){var e=O.A;return O.A=$g,e}function oo(){Le=4,Ct||(oe&4194048)!==oe&&va.current!==null||(Bn=!0),(At&134217727)===0&&(an&134217727)===0||Me===null||wt(Me,oe,Ea,!1)}function Ts(e,a,t){var n=ye;ye|=2;var i=Md(),l=Cd();(Me!==e||oe!==a)&&(io=null,Vn(e,a)),a=!1;var r=Le;e:do try{if(be!==0&&ie!==null){var f=ie,g=Sa;switch(be){case 8:Es(),r=6;break e;case 3:case 2:case 9:case 6:va.current===null&&(a=!0);var C=be;if(be=0,Sa=null,Yn(e,f,g,C),t&&Bn){r=0;break e}break;default:C=be,be=0,Sa=null,Yn(e,f,g,C)}}Pg(),r=Le;break}catch(w){Td(e,w)}while(!0);return a&&e.shellSuspendCounter++,Fa=Qt=null,ye=n,O.H=i,O.A=l,ie===null&&(Me=null,oe=0,Al()),r}function Pg(){for(;ie!==null;)Ad(ie)}function Ig(e,a){var t=ye;ye|=2;var n=Md(),i=Cd();Me!==e||oe!==a?(io=null,no=Ke()+500,Vn(e,a)):Bn=ni(e,a);e:do try{if(be!==0&&ie!==null){a=ie;var l=Sa;a:switch(be){case 1:be=0,Sa=null,Yn(e,a,l,1);break;case 2:case 9:if(Lc(l)){be=0,Sa=null,Rd(a);break}a=function(){be!==2&&be!==9||Me!==e||(be=7),Va(e)},l.then(a,a);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:Lc(l)?(be=0,Sa=null,Rd(a)):(be=0,Sa=null,Yn(e,a,l,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var f=ie;if(r?dm(r):f.stateNode.complete){be=0,Sa=null;var g=f.sibling;if(g!==null)ie=g;else{var C=f.return;C!==null?(ie=C,ro(C)):ie=null}break a}}be=0,Sa=null,Yn(e,a,l,5);break;case 6:be=0,Sa=null,Yn(e,a,l,6);break;case 8:Es(),Le=6;break e;default:throw Error(s(462))}}ep();break}catch(w){Td(e,w)}while(!0);return Fa=Qt=null,O.H=n,O.A=i,ye=t,ie!==null?0:(Me=null,oe=0,Al(),Le)}function ep(){for(;ie!==null&&!ko();)Ad(ie)}function Ad(e){var a=Wf(e.alternate,e,rt);e.memoizedProps=e.pendingProps,a===null?ro(e):ie=a}function Rd(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Xf(t,a,a.pendingProps,a.type,void 0,oe);break;case 11:a=Xf(t,a,a.pendingProps,a.type.render,a.ref,oe);break;case 5:kr(a);default:Pf(t,a),a=ie=Mc(a,rt),a=Wf(t,a,rt)}e.memoizedProps=e.pendingProps,a===null?ro(e):ie=a}function Yn(e,a,t,n){Fa=Qt=null,kr(a),Dn=null,Si=0;var i=a.return;try{if(Vg(e,i,a,t,oe)){Le=1,Jl(e,Aa(t,e.current)),ie=null;return}}catch(l){if(i!==null)throw ie=i,l;Le=1,Jl(e,Aa(t,e.current)),ie=null;return}a.flags&32768?(ce||n===1?e=!0:Bn||(oe&536870912)!==0?e=!1:(Ct=e=!0,(n===2||n===9||n===3||n===6)&&(n=va.current,n!==null&&n.tag===13&&(n.flags|=16384))),xd(a,e)):ro(a)}function ro(e){var a=e;do{if((a.flags&32768)!==0){xd(a,Ct);return}e=a.return;var t=Kg(a.alternate,a,rt);if(t!==null){ie=t;return}if(a=a.sibling,a!==null){ie=a;return}ie=a=e}while(a!==null);Le===0&&(Le=5)}function xd(e,a){do{var t=Qg(e.alternate,e);if(t!==null){t.flags&=32767,ie=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ie=e;return}ie=e=t}while(e!==null);Le=6,ie=null}function wd(e,a,t,n,i,l,r,f,g){e.cancelPendingCommit=null;do so();while(Ye!==0);if((ye&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(l=a.lanes|a.childLanes,l|=cr,Uh(e,t,l,r,f,g),e===Me&&(ie=Me=null,oe=0),qn=a,xt=e,st=t,vs=l,bs=i,vd=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ip(un,function(){return jd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=O.T,O.T=null,i=k.p,k.p=2,r=ye,ye|=4;try{Zg(e,a,t)}finally{ye=r,k.p=i,O.T=n}}Ye=1,Od(),Nd(),Dd()}}function Od(){if(Ye===1){Ye=0;var e=xt,a=qn,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=O.T,O.T=null;var n=k.p;k.p=2;var i=ye;ye|=4;try{cd(a,e);var l=js,r=gc(e.containerInfo),f=l.focusedElem,g=l.selectionRange;if(r!==f&&f&&f.ownerDocument&&hc(f.ownerDocument.documentElement,f)){if(g!==null&&lr(f)){var C=g.start,w=g.end;if(w===void 0&&(w=C),"selectionStart"in f)f.selectionStart=C,f.selectionEnd=Math.min(w,f.value.length);else{var D=f.ownerDocument||document,A=D&&D.defaultView||window;if(A.getSelection){var R=A.getSelection(),V=f.textContent.length,F=Math.min(g.start,V),_e=g.end===void 0?F:Math.min(g.end,V);!R.extend&&F>_e&&(r=_e,_e=F,F=r);var E=mc(f,F),y=mc(f,_e);if(E&&y&&(R.rangeCount!==1||R.anchorNode!==E.node||R.anchorOffset!==E.offset||R.focusNode!==y.node||R.focusOffset!==y.offset)){var M=D.createRange();M.setStart(E.node,E.offset),R.removeAllRanges(),F>_e?(R.addRange(M),R.extend(y.node,y.offset)):(M.setEnd(y.node,y.offset),R.addRange(M))}}}}for(D=[],R=f;R=R.parentNode;)R.nodeType===1&&D.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var N=D[f];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Eo=!!Us,js=Us=null}finally{ye=i,k.p=n,O.T=t}}e.current=a,Ye=2}}function Nd(){if(Ye===2){Ye=0;var e=xt,a=qn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=O.T,O.T=null;var n=k.p;k.p=2;var i=ye;ye|=4;try{ld(e,a.alternate,a)}finally{ye=i,k.p=n,O.T=t}}Ye=3}}function Dd(){if(Ye===4||Ye===3){Ye=0,ll();var e=xt,a=qn,t=st,n=vd;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ye=5:(Ye=0,qn=xt=null,Ud(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Rt=null),Go(t),a=a.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(he,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=O.T,i=k.p,k.p=2,O.T=null;try{for(var l=e.onRecoverableError,r=0;r<n.length;r++){var f=n[r];l(f.value,{componentStack:f.stack})}}finally{O.T=a,k.p=i}}(st&3)!==0&&so(),Va(e),i=e.pendingLanes,(t&261930)!==0&&(i&42)!==0?e===Ss?ki++:(ki=0,Ss=e):ki=0,Hi(0)}}function Ud(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,vi(a)))}function so(){return Od(),Nd(),Dd(),jd()}function jd(){if(Ye!==5)return!1;var e=xt,a=vs;vs=0;var t=Go(st),n=O.T,i=k.p;try{k.p=32>t?32:t,O.T=null,t=bs,bs=null;var l=xt,r=st;if(Ye=0,qn=xt=null,st=0,(ye&6)!==0)throw Error(s(331));var f=ye;if(ye|=4,gd(l.current),dd(l,l.current,r,t),ye=f,Hi(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(he,l)}catch{}return!0}finally{k.p=i,O.T=n,Ud(e,a)}}function Ld(e,a,t){a=Aa(t,a),a=Pr(e.stateNode,a,2),e=Et(e,a,2),e!==null&&(ii(e,2),Va(e))}function Se(e,a,t){if(e.tag===3)Ld(e,e,t);else for(;a!==null;){if(a.tag===3){Ld(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Rt===null||!Rt.has(n))){e=Aa(t,e),t=zf(2),n=Et(a,t,2),n!==null&&(kf(t,n,a,e),ii(n,2),Va(n));break}}a=a.return}}function _s(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Wg;var i=new Set;n.set(a,i)}else i=n.get(a),i===void 0&&(i=new Set,n.set(a,i));i.has(t)||(gs=!0,i.add(t),e=ap.bind(null,e,a,t),a.then(e,e))}function ap(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Me===e&&(oe&t)===t&&(Le===4||Le===3&&(oe&62914560)===oe&&300>Ke()-to?(ye&2)===0&&Vn(e,0):ps|=t,Gn===oe&&(Gn=0)),Va(e)}function zd(e,a){a===0&&(a=wu()),e=Yt(e,a),e!==null&&(ii(e,a),Va(e))}function tp(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),zd(e,t)}function np(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(a),zd(e,t)}function ip(e,a){return ai(e,a)}var uo=null,Xn=null,Ms=!1,co=!1,Cs=!1,Ot=0;function Va(e){e!==Xn&&e.next===null&&(Xn===null?uo=Xn=e:Xn=Xn.next=e),co=!0,Ms||(Ms=!0,op())}function Hi(e,a){if(!Cs&&co){Cs=!0;do for(var t=!1,n=uo;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var r=n.suspendedLanes,f=n.pingedLanes;l=(1<<31-aa(42|e)+1)-1,l&=i&~(r&~f),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,Gd(n,l))}else l=oe,l=hl(n,n===Me?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||ni(n,l)||(t=!0,Gd(n,l));n=n.next}while(t);Cs=!1}}function lp(){kd()}function kd(){co=Ms=!1;var e=0;Ot!==0&&pp()&&(e=Ot);for(var a=Ke(),t=null,n=uo;n!==null;){var i=n.next,l=Hd(n,a);l===0?(n.next=null,t===null?uo=i:t.next=i,i===null&&(Xn=t)):(t=n,(e!==0||(l&3)!==0)&&(co=!0)),n=i}Ye!==0&&Ye!==5||Hi(e),Ot!==0&&(Ot=0)}function Hd(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var r=31-aa(l),f=1<<r,g=i[r];g===-1?((f&t)===0||(f&n)!==0)&&(i[r]=Dh(f,a)):g<=a&&(e.expiredLanes|=f),l&=~f}if(a=Me,t=oe,t=hl(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(be===2||be===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ti(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||ni(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&ti(n),Go(t)){case 2:case 8:t=sl;break;case 32:t=un;break;case 268435456:t=cn;break;default:t=un}return n=Bd.bind(null,e),t=ai(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&ti(n),e.callbackPriority=2,e.callbackNode=null,2}function Bd(e,a){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(so()&&e.callbackNode!==t)return null;var n=oe;return n=hl(e,e===Me?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Sd(e,n,a),Hd(e,Ke()),e.callbackNode!=null&&e.callbackNode===t?Bd.bind(null,e):null)}function Gd(e,a){if(so())return null;Sd(e,a,!0)}function op(){vp(function(){(ye&6)!==0?ai(rl,lp):kd()})}function As(){if(Ot===0){var e=wn;e===0&&(e=fl,fl<<=1,(fl&261888)===0&&(fl=256)),Ot=e}return Ot}function qd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vl(""+e)}function Vd(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function rp(e,a,t,n,i){if(a==="submit"&&t&&t.stateNode===i){var l=qd((i[ra]||null).action),r=n.submitter;r&&(a=(a=r[ra]||null)?qd(a.formAction):r.getAttribute("formAction"),a!==null&&(l=a,r=null));var f=new Tl("action","action",null,n,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ot!==0){var g=r?Vd(i,r):new FormData(i);Qr(t,{pending:!0,data:g,method:i.method,action:l},null,g)}}else typeof l=="function"&&(f.preventDefault(),g=r?Vd(i,r):new FormData(i),Qr(t,{pending:!0,data:g,method:i.method,action:l},l,g))},currentTarget:i}]})}}for(var Rs=0;Rs<ur.length;Rs++){var xs=ur[Rs],sp=xs.toLowerCase(),up=xs[0].toUpperCase()+xs.slice(1);La(sp,"on"+up)}La(vc,"onAnimationEnd"),La(bc,"onAnimationIteration"),La(Sc,"onAnimationStart"),La("dblclick","onDoubleClick"),La("focusin","onFocus"),La("focusout","onBlur"),La(Cg,"onTransitionRun"),La(Ag,"onTransitionStart"),La(Rg,"onTransitionCancel"),La(Ec,"onTransitionEnd"),gn("onMouseEnter",["mouseout","mouseover"]),gn("onMouseLeave",["mouseout","mouseover"]),gn("onPointerEnter",["pointerout","pointerover"]),gn("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bi));function Yd(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],i=n.event;n=n.listeners;e:{var l=void 0;if(a)for(var r=n.length-1;0<=r;r--){var f=n[r],g=f.instance,C=f.currentTarget;if(f=f.listener,g!==l&&i.isPropagationStopped())break e;l=f,i.currentTarget=C;try{l(i)}catch(w){Cl(w)}i.currentTarget=null,l=g}else for(r=0;r<n.length;r++){if(f=n[r],g=f.instance,C=f.currentTarget,f=f.listener,g!==l&&i.isPropagationStopped())break e;l=f,i.currentTarget=C;try{l(i)}catch(w){Cl(w)}i.currentTarget=null,l=g}}}}function le(e,a){var t=a[qo];t===void 0&&(t=a[qo]=new Set);var n=e+"__bubble";t.has(n)||(Xd(a,e,2,!1),t.add(n))}function ws(e,a,t){var n=0;a&&(n|=4),Xd(t,e,n,a)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Os(e){if(!e[fo]){e[fo]=!0,zu.forEach(function(t){t!=="selectionchange"&&(cp.has(t)||ws(t,!1,e),ws(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[fo]||(a[fo]=!0,ws("selectionchange",!1,a))}}function Xd(e,a,t,n){switch(bm(a)){case 2:var i=Hp;break;case 8:i=Bp;break;default:i=Ks}t=i.bind(null,a,t,e),i=void 0,!Wo||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(a,t,{capture:!0,passive:i}):e.addEventListener(a,t,!0):i!==void 0?e.addEventListener(a,t,{passive:i}):e.addEventListener(a,t,!1)}function Ns(e,a,t,n,i){var l=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var f=n.stateNode.containerInfo;if(f===i)break;if(r===4)for(r=n.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;f!==null;){if(r=dn(f),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){n=l=r;continue e}f=f.parentNode}}n=n.return}Ju(function(){var C=l,w=Jo(t),D=[];e:{var A=Tc.get(e);if(A!==void 0){var R=Tl,V=e;switch(e){case"keypress":if(Sl(t)===0)break e;case"keydown":case"keyup":R=ng;break;case"focusin":V="focus",R=er;break;case"focusout":V="blur",R=er;break;case"beforeblur":case"afterblur":R=er;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=og;break;case vc:case bc:case Sc:R=Jh;break;case Ec:R=sg;break;case"scroll":case"scrollend":R=Yh;break;case"wheel":R=cg;break;case"copy":case"cut":case"paste":R=Wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Iu;break;case"toggle":case"beforetoggle":R=dg}var F=(a&4)!==0,_e=!F&&(e==="scroll"||e==="scrollend"),E=F?A!==null?A+"Capture":null:A;F=[];for(var y=C,M;y!==null;){var N=y;if(M=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||M===null||E===null||(N=ri(y,E),N!=null&&F.push(Gi(y,N,M))),_e)break;y=y.return}0<F.length&&(A=new R(A,V,null,t,w),D.push({event:A,listeners:F}))}}if((a&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",A&&t!==Zo&&(V=t.relatedTarget||t.fromElement)&&(dn(V)||V[fn]))break e;if((R||A)&&(A=w.window===w?w:(A=w.ownerDocument)?A.defaultView||A.parentWindow:window,R?(V=t.relatedTarget||t.toElement,R=C,V=V?dn(V):null,V!==null&&(_e=m(V),F=V.tag,V!==_e||F!==5&&F!==27&&F!==6)&&(V=null)):(R=null,V=C),R!==V)){if(F=Fu,N="onMouseLeave",E="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(F=Iu,N="onPointerLeave",E="onPointerEnter",y="pointer"),_e=R==null?A:oi(R),M=V==null?A:oi(V),A=new F(N,y+"leave",R,t,w),A.target=_e,A.relatedTarget=M,N=null,dn(w)===C&&(F=new F(E,y+"enter",V,t,w),F.target=M,F.relatedTarget=_e,N=F),_e=N,R&&V)a:{for(F=fp,E=R,y=V,M=0,N=E;N;N=F(N))M++;N=0;for(var Z=y;Z;Z=F(Z))N++;for(;0<M-N;)E=F(E),M--;for(;0<N-M;)y=F(y),N--;for(;M--;){if(E===y||y!==null&&E===y.alternate){F=E;break a}E=F(E),y=F(y)}F=null}else F=null;R!==null&&Kd(D,A,R,F,!1),V!==null&&_e!==null&&Kd(D,_e,V,F,!0)}}e:{if(A=C?oi(C):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var ge=rc;else if(lc(A))if(sc)ge=Tg;else{ge=Sg;var Y=bg}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?C&&Qo(C.elementType)&&(ge=rc):ge=Eg;if(ge&&(ge=ge(e,C))){oc(D,ge,t,w);break e}Y&&Y(e,A,C),e==="focusout"&&C&&A.type==="number"&&C.memoizedProps.value!=null&&Ko(A,"number",A.value)}switch(Y=C?oi(C):window,e){case"focusin":(lc(Y)||Y.contentEditable==="true")&&(En=Y,or=C,gi=null);break;case"focusout":gi=or=En=null;break;case"mousedown":rr=!0;break;case"contextmenu":case"mouseup":case"dragend":rr=!1,pc(D,t,w);break;case"selectionchange":if(Mg)break;case"keydown":case"keyup":pc(D,t,w)}var ne;if(tr)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Sn?nc(e,t)&&(re="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(re="onCompositionStart");re&&(ec&&t.locale!=="ko"&&(Sn||re!=="onCompositionStart"?re==="onCompositionEnd"&&Sn&&(ne=$u()):(ht=w,Fo="value"in ht?ht.value:ht.textContent,Sn=!0)),Y=mo(C,re),0<Y.length&&(re=new Pu(re,e,null,t,w),D.push({event:re,listeners:Y}),ne?re.data=ne:(ne=ic(t),ne!==null&&(re.data=ne)))),(ne=hg?gg(e,t):pg(e,t))&&(re=mo(C,"onBeforeInput"),0<re.length&&(Y=new Pu("onBeforeInput","beforeinput",null,t,w),D.push({event:Y,listeners:re}),Y.data=ne)),rp(D,e,C,t,w)}Yd(D,a)})}function Gi(e,a,t){return{instance:e,listener:a,currentTarget:t}}function mo(e,a){for(var t=a+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=ri(e,t),i!=null&&n.unshift(Gi(e,i,l)),i=ri(e,a),i!=null&&n.push(Gi(e,i,l))),e.tag===3)return n;e=e.return}return[]}function fp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kd(e,a,t,n,i){for(var l=a._reactName,r=[];t!==null&&t!==n;){var f=t,g=f.alternate,C=f.stateNode;if(f=f.tag,g!==null&&g===n)break;f!==5&&f!==26&&f!==27||C===null||(g=C,i?(C=ri(t,l),C!=null&&r.unshift(Gi(t,C,g))):i||(C=ri(t,l),C!=null&&r.push(Gi(t,C,g)))),t=t.return}r.length!==0&&e.push({event:a,listeners:r})}var dp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function Qd(e){return(typeof e=="string"?e:""+e).replace(dp,`
`).replace(mp,"")}function Zd(e,a){return a=Qd(a),Qd(e)===a}function Te(e,a,t,n,i,l){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||yn(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&yn(e,""+n);break;case"className":pl(e,"class",n);break;case"tabIndex":pl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":pl(e,t,n);break;case"style":Qu(e,n,l);break;case"data":if(a!=="object"){pl(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=vl(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(a!=="input"&&Te(e,a,"name",i.name,i,null),Te(e,a,"formEncType",i.formEncType,i,null),Te(e,a,"formMethod",i.formMethod,i,null),Te(e,a,"formTarget",i.formTarget,i,null)):(Te(e,a,"encType",i.encType,i,null),Te(e,a,"method",i.method,i,null),Te(e,a,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=vl(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Za);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(t=n.__html,t!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=vl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":le("beforetoggle",e),le("toggle",e),gl(e,"popover",n);break;case"xlinkActuate":Qa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Qa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Qa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Qa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Qa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Qa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Qa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Qa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Qa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":gl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=qh.get(t)||t,gl(e,t,n))}}function Ds(e,a,t,n,i,l){switch(t){case"style":Qu(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(t=n.__html,t!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"children":typeof n=="string"?yn(e,n):(typeof n=="number"||typeof n=="bigint")&&yn(e,""+n);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Za);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ku.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),a=t.slice(2,i?t.length-7:void 0),l=e[ra]||null,l=l!=null?l[t]:null,typeof l=="function"&&e.removeEventListener(a,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,i);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):gl(e,t,n)}}}function Pe(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var n=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var r=t[l];if(r!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Te(e,a,l,r,t,null)}}i&&Te(e,a,"srcSet",t.srcSet,t,null),n&&Te(e,a,"src",t.src,t,null);return;case"input":le("invalid",e);var f=l=r=i=null,g=null,C=null;for(n in t)if(t.hasOwnProperty(n)){var w=t[n];if(w!=null)switch(n){case"name":i=w;break;case"type":r=w;break;case"checked":g=w;break;case"defaultChecked":C=w;break;case"value":l=w;break;case"defaultValue":f=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,a));break;default:Te(e,a,n,w,t,null)}}Vu(e,l,f,g,C,r,i,!1);return;case"select":le("invalid",e),n=r=l=null;for(i in t)if(t.hasOwnProperty(i)&&(f=t[i],f!=null))switch(i){case"value":l=f;break;case"defaultValue":r=f;break;case"multiple":n=f;default:Te(e,a,i,f,t,null)}a=l,t=r,e.multiple=!!n,a!=null?pn(e,!!n,a,!1):t!=null&&pn(e,!!n,t,!0);return;case"textarea":le("invalid",e),l=i=n=null;for(r in t)if(t.hasOwnProperty(r)&&(f=t[r],f!=null))switch(r){case"value":n=f;break;case"defaultValue":i=f;break;case"children":l=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:Te(e,a,r,f,t,null)}Xu(e,n,i,l);return;case"option":for(g in t)if(t.hasOwnProperty(g)&&(n=t[g],n!=null))switch(g){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Te(e,a,g,n,t,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(n=0;n<Bi.length;n++)le(Bi[n],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in t)if(t.hasOwnProperty(C)&&(n=t[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Te(e,a,C,n,t,null)}return;default:if(Qo(a)){for(w in t)t.hasOwnProperty(w)&&(n=t[w],n!==void 0&&Ds(e,a,w,n,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(n=t[f],n!=null&&Te(e,a,f,n,t,null))}function hp(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,r=null,f=null,g=null,C=null,w=null;for(R in t){var D=t[R];if(t.hasOwnProperty(R)&&D!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":g=D;default:n.hasOwnProperty(R)||Te(e,a,R,null,n,D)}}for(var A in n){var R=n[A];if(D=t[A],n.hasOwnProperty(A)&&(R!=null||D!=null))switch(A){case"type":l=R;break;case"name":i=R;break;case"checked":C=R;break;case"defaultChecked":w=R;break;case"value":r=R;break;case"defaultValue":f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,a));break;default:R!==D&&Te(e,a,A,R,n,D)}}Xo(e,r,f,g,C,w,l,i);return;case"select":R=r=f=A=null;for(l in t)if(g=t[l],t.hasOwnProperty(l)&&g!=null)switch(l){case"value":break;case"multiple":R=g;default:n.hasOwnProperty(l)||Te(e,a,l,null,n,g)}for(i in n)if(l=n[i],g=t[i],n.hasOwnProperty(i)&&(l!=null||g!=null))switch(i){case"value":A=l;break;case"defaultValue":f=l;break;case"multiple":r=l;default:l!==g&&Te(e,a,i,l,n,g)}a=f,t=r,n=R,A!=null?pn(e,!!t,A,!1):!!n!=!!t&&(a!=null?pn(e,!!t,a,!0):pn(e,!!t,t?[]:"",!1));return;case"textarea":R=A=null;for(f in t)if(i=t[f],t.hasOwnProperty(f)&&i!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Te(e,a,f,null,n,i)}for(r in n)if(i=n[r],l=t[r],n.hasOwnProperty(r)&&(i!=null||l!=null))switch(r){case"value":A=i;break;case"defaultValue":R=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==l&&Te(e,a,r,i,n,l)}Yu(e,A,R);return;case"option":for(var V in t)if(A=t[V],t.hasOwnProperty(V)&&A!=null&&!n.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:Te(e,a,V,null,n,A)}for(g in n)if(A=n[g],R=t[g],n.hasOwnProperty(g)&&A!==R&&(A!=null||R!=null))switch(g){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Te(e,a,g,A,n,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in t)A=t[F],t.hasOwnProperty(F)&&A!=null&&!n.hasOwnProperty(F)&&Te(e,a,F,null,n,A);for(C in n)if(A=n[C],R=t[C],n.hasOwnProperty(C)&&A!==R&&(A!=null||R!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,a));break;default:Te(e,a,C,A,n,R)}return;default:if(Qo(a)){for(var _e in t)A=t[_e],t.hasOwnProperty(_e)&&A!==void 0&&!n.hasOwnProperty(_e)&&Ds(e,a,_e,void 0,n,A);for(w in n)A=n[w],R=t[w],!n.hasOwnProperty(w)||A===R||A===void 0&&R===void 0||Ds(e,a,w,A,n,R);return}}for(var E in t)A=t[E],t.hasOwnProperty(E)&&A!=null&&!n.hasOwnProperty(E)&&Te(e,a,E,null,n,A);for(D in n)A=n[D],R=t[D],!n.hasOwnProperty(D)||A===R||A==null&&R==null||Te(e,a,D,A,n,R)}function Jd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var i=t[n],l=i.transferSize,r=i.initiatorType,f=i.duration;if(l&&f&&Jd(r)){for(r=0,f=i.responseEnd,n+=1;n<t.length;n++){var g=t[n],C=g.startTime;if(C>f)break;var w=g.transferSize,D=g.initiatorType;w&&Jd(D)&&(g=g.responseEnd,r+=w*(g<f?1:(f-C)/(g-C)))}if(--n,a+=8*(l+r)/(i.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Us=null,js=null;function ho(e){return e.nodeType===9?e:e.ownerDocument}function $d(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wd(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Ls(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var zs=null;function pp(){var e=window.event;return e&&e.type==="popstate"?e===zs?!1:(zs=e,!0):(zs=null,!1)}var Fd=typeof setTimeout=="function"?setTimeout:void 0,yp=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,vp=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(e){return Pd.resolve(null).then(e).catch(bp)}:Fd;function bp(e){setTimeout(function(){throw e})}function Nt(e){return e==="head"}function Id(e,a){var t=a,n=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(i),Jn(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")qi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,qi(t);for(var l=t.firstChild;l;){var r=l.nextSibling,f=l.nodeName;l[li]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=r}}else t==="body"&&qi(e.ownerDocument.body);t=i}while(t);Jn(a)}function em(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function ks(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":ks(t),Vo(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Sp(e,a,t,n){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[li])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Na(e.nextSibling),e===null)break}return null}function Ep(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Na(e.nextSibling),e===null))return null;return e}function am(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Na(e.nextSibling),e===null))return null;return e}function Hs(e){return e.data==="$?"||e.data==="$~"}function Bs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tp(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Na(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Gs=null;function tm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Na(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function nm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function im(e,a,t){switch(a=ho(t),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function qi(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Vo(e)}var Da=new Map,lm=new Set;function go(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ut=k.d;k.d={f:_p,r:Mp,D:Cp,C:Ap,L:Rp,m:xp,X:Op,S:wp,M:Np};function _p(){var e=ut.f(),a=lo();return e||a}function Mp(e){var a=mn(e);a!==null&&a.tag===5&&a.type==="form"?Tf(a):ut.r(e)}var Kn=typeof document>"u"?null:document;function om(e,a,t){var n=Kn;if(n&&typeof a=="string"&&a){var i=Ma(a);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),lm.has(i)||(lm.add(i),e={rel:e,crossOrigin:t,href:a},n.querySelector(i)===null&&(a=n.createElement("link"),Pe(a,"link",e),Qe(a),n.head.appendChild(a)))}}function Cp(e){ut.D(e),om("dns-prefetch",e,null)}function Ap(e,a){ut.C(e,a),om("preconnect",e,a)}function Rp(e,a,t){ut.L(e,a,t);var n=Kn;if(n&&e&&a){var i='link[rel="preload"][as="'+Ma(a)+'"]';a==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Ma(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Ma(t.imageSizes)+'"]')):i+='[href="'+Ma(e)+'"]';var l=i;switch(a){case"style":l=Qn(e);break;case"script":l=Zn(e)}Da.has(l)||(e=T({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Da.set(l,e),n.querySelector(i)!==null||a==="style"&&n.querySelector(Vi(l))||a==="script"&&n.querySelector(Yi(l))||(a=n.createElement("link"),Pe(a,"link",e),Qe(a),n.head.appendChild(a)))}}function xp(e,a){ut.m(e,a);var t=Kn;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+Ma(n)+'"][href="'+Ma(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Zn(e)}if(!Da.has(l)&&(e=T({rel:"modulepreload",href:e},a),Da.set(l,e),t.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Yi(l)))return}n=t.createElement("link"),Pe(n,"link",e),Qe(n),t.head.appendChild(n)}}}function wp(e,a,t){ut.S(e,a,t);var n=Kn;if(n&&e){var i=hn(n).hoistableStyles,l=Qn(e);a=a||"default";var r=i.get(l);if(!r){var f={loading:0,preload:null};if(r=n.querySelector(Vi(l)))f.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Da.get(l))&&qs(e,t);var g=r=n.createElement("link");Qe(g),Pe(g,"link",e),g._p=new Promise(function(C,w){g.onload=C,g.onerror=w}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,po(r,a,n)}r={type:"stylesheet",instance:r,count:1,state:f},i.set(l,r)}}}function Op(e,a){ut.X(e,a);var t=Kn;if(t&&e){var n=hn(t).hoistableScripts,i=Zn(e),l=n.get(i);l||(l=t.querySelector(Yi(i)),l||(e=T({src:e,async:!0},a),(a=Da.get(i))&&Vs(e,a),l=t.createElement("script"),Qe(l),Pe(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Np(e,a){ut.M(e,a);var t=Kn;if(t&&e){var n=hn(t).hoistableScripts,i=Zn(e),l=n.get(i);l||(l=t.querySelector(Yi(i)),l||(e=T({src:e,async:!0,type:"module"},a),(a=Da.get(i))&&Vs(e,a),l=t.createElement("script"),Qe(l),Pe(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function rm(e,a,t,n){var i=(i=$.current)?go(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Qn(t.href),t=hn(i).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Qn(t.href);var l=hn(i).hoistableStyles,r=l.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,r),(l=i.querySelector(Vi(e)))&&!l._p&&(r.instance=l,r.state.loading=5),Da.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Da.set(e,t),l||Dp(i,e,t,r.state))),a&&n===null)throw Error(s(528,""));return r}if(a&&n!==null)throw Error(s(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Zn(t),t=hn(i).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Qn(e){return'href="'+Ma(e)+'"'}function Vi(e){return'link[rel="stylesheet"]['+e+"]"}function sm(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Dp(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),Pe(a,"link",t),Qe(a),e.head.appendChild(a))}function Zn(e){return'[src="'+Ma(e)+'"]'}function Yi(e){return"script[async]"+e}function um(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ma(t.href)+'"]');if(n)return a.instance=n,Qe(n),n;var i=T({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Qe(n),Pe(n,"style",i),po(n,t.precedence,e),a.instance=n;case"stylesheet":i=Qn(t.href);var l=e.querySelector(Vi(i));if(l)return a.state.loading|=4,a.instance=l,Qe(l),l;n=sm(t),(i=Da.get(i))&&qs(n,i),l=(e.ownerDocument||e).createElement("link"),Qe(l);var r=l;return r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),Pe(l,"link",n),a.state.loading|=4,po(l,t.precedence,e),a.instance=l;case"script":return l=Zn(t.src),(i=e.querySelector(Yi(l)))?(a.instance=i,Qe(i),i):(n=t,(i=Da.get(l))&&(n=T({},t),Vs(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Qe(i),Pe(i,"link",n),e.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,po(n,t.precedence,e));return a.instance}function po(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,r=0;r<n.length;r++){var f=n[r];if(f.dataset.precedence===a)l=f;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function qs(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Vs(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var yo=null;function cm(e,a,t){if(yo===null){var n=new Map,i=yo=new Map;i.set(t,n)}else i=yo,n=i.get(t),n||(n=new Map,i.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var l=t[i];if(!(l[li]||l[Je]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(a)||"";r=e+r;var f=n.get(r);f?f.push(l):n.set(r,[l])}}return n}function fm(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Up(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function dm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jp(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Qn(n.href),l=a.querySelector(Vi(i));if(l){a=l._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=vo.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=l,Qe(l);return}l=a.ownerDocument||a,n=sm(n),(i=Da.get(i))&&qs(n,i),l=l.createElement("link"),Qe(l);var r=l;r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),Pe(l,"link",n),t.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=vo.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Ys=0;function Lp(e,a){return e.stylesheets&&e.count===0&&So(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&So(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+a);0<e.imgBytes&&Ys===0&&(Ys=62500*gp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&So(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Ys?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function So(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,a.forEach(zp,e),bo=null,vo.call(e))}function zp(e,a){if(!(a.state.loading&4)){var t=bo.get(e);if(t)var n=t.get(null);else{t=new Map,bo.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var r=i[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),n=r)}n&&t.set(null,n)}i=a.instance,r=i.getAttribute("data-precedence"),l=t.get(r)||n,l===n&&t.set(null,i),t.set(r,i),this.count++,n=vo.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),a.state.loading|=4}}var Xi={$$typeof:J,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function kp(e,a,t,n,i,l,r,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.hiddenUpdates=Ho(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function mm(e,a,t,n,i,l,r,f,g,C,w,D){return e=new kp(e,a,t,r,g,C,w,D,f),a=1,l===!0&&(a|=24),l=ya(3,null,null,a),e.current=l,l.stateNode=e,a=Tr(),a.refCount++,e.pooledCache=a,a.refCount++,l.memoizedState={element:n,isDehydrated:t,cache:a},Ar(l),e}function hm(e){return e?(e=Mn,e):Mn}function gm(e,a,t,n,i,l){i=hm(i),n.context===null?n.context=i:n.pendingContext=i,n=St(a),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Et(e,n,a),t!==null&&(ma(t,e,a),Ti(t,e,a))}function pm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Xs(e,a){pm(e,a),(e=e.alternate)&&pm(e,a)}function ym(e){if(e.tag===13||e.tag===31){var a=Yt(e,67108864);a!==null&&ma(a,e,67108864),Xs(e,67108864)}}function vm(e){if(e.tag===13||e.tag===31){var a=Ta();a=Bo(a);var t=Yt(e,a);t!==null&&ma(t,e,a),Xs(e,a)}}var Eo=!0;function Hp(e,a,t,n){var i=O.T;O.T=null;var l=k.p;try{k.p=2,Ks(e,a,t,n)}finally{k.p=l,O.T=i}}function Bp(e,a,t,n){var i=O.T;O.T=null;var l=k.p;try{k.p=8,Ks(e,a,t,n)}finally{k.p=l,O.T=i}}function Ks(e,a,t,n){if(Eo){var i=Qs(n);if(i===null)Ns(e,a,n,To,t),Sm(e,n);else if(qp(i,e,a,t,n))n.stopPropagation();else if(Sm(e,n),a&4&&-1<Gp.indexOf(e)){for(;i!==null;){var l=mn(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Ht(l.pendingLanes);if(r!==0){var f=l;for(f.pendingLanes|=2,f.entangledLanes|=2;r;){var g=1<<31-aa(r);f.entanglements[1]|=g,r&=~g}Va(l),(ye&6)===0&&(no=Ke()+500,Hi(0))}}break;case 31:case 13:f=Yt(l,2),f!==null&&ma(f,l,2),lo(),Xs(l,2)}if(l=Qs(n),l===null&&Ns(e,a,n,To,t),l===i)break;i=l}i!==null&&n.stopPropagation()}else Ns(e,a,n,null,t)}}function Qs(e){return e=Jo(e),Zs(e)}var To=null;function Zs(e){if(To=null,e=dn(e),e!==null){var a=m(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=h(a),e!==null)return e;e=null}else if(t===31){if(e=_(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return To=e,null}function bm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ol()){case rl:return 2;case sl:return 8;case un:case ul:return 32;case cn:return 268435456;default:return 32}default:return 32}}var Js=!1,Dt=null,Ut=null,jt=null,Ki=new Map,Qi=new Map,Lt=[],Gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sm(e,a){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Ki.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(a.pointerId)}}function Zi(e,a,t,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},a!==null&&(a=mn(a),a!==null&&ym(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function qp(e,a,t,n,i){switch(a){case"focusin":return Dt=Zi(Dt,e,a,t,n,i),!0;case"dragenter":return Ut=Zi(Ut,e,a,t,n,i),!0;case"mouseover":return jt=Zi(jt,e,a,t,n,i),!0;case"pointerover":var l=i.pointerId;return Ki.set(l,Zi(Ki.get(l)||null,e,a,t,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Qi.set(l,Zi(Qi.get(l)||null,e,a,t,n,i)),!0}return!1}function Em(e){var a=dn(e.target);if(a!==null){var t=m(a);if(t!==null){if(a=t.tag,a===13){if(a=h(t),a!==null){e.blockedOn=a,ju(e.priority,function(){vm(t)});return}}else if(a===31){if(a=_(t),a!==null){e.blockedOn=a,ju(e.priority,function(){vm(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Qs(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Zo=n,t.target.dispatchEvent(n),Zo=null}else return a=mn(t),a!==null&&ym(a),e.blockedOn=t,!1;a.shift()}return!0}function Tm(e,a,t){_o(e)&&t.delete(a)}function Vp(){Js=!1,Dt!==null&&_o(Dt)&&(Dt=null),Ut!==null&&_o(Ut)&&(Ut=null),jt!==null&&_o(jt)&&(jt=null),Ki.forEach(Tm),Qi.forEach(Tm)}function Mo(e,a){e.blockedOn===a&&(e.blockedOn=null,Js||(Js=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Vp)))}var Co=null;function _m(e){Co!==e&&(Co=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Co===e&&(Co=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],i=e[a+2];if(typeof n!="function"){if(Zs(n||t)===null)continue;break}var l=mn(t);l!==null&&(e.splice(a,3),a-=3,Qr(l,{pending:!0,data:i,method:t.method,action:n},n,i))}}))}function Jn(e){function a(g){return Mo(g,e)}Dt!==null&&Mo(Dt,e),Ut!==null&&Mo(Ut,e),jt!==null&&Mo(jt,e),Ki.forEach(a),Qi.forEach(a);for(var t=0;t<Lt.length;t++){var n=Lt[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Lt.length&&(t=Lt[0],t.blockedOn===null);)Em(t),t.blockedOn===null&&Lt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var i=t[n],l=t[n+1],r=i[ra]||null;if(typeof l=="function")r||_m(t);else if(r){var f=null;if(l&&l.hasAttribute("formAction")){if(i=l,r=l[ra]||null)f=r.formAction;else if(Zs(i)!==null)continue}else f=r.action;typeof f=="function"?t[n+1]=f:(t.splice(n,3),n-=3),_m(t)}}}function Mm(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function $s(e){this._internalRoot=e}Ao.prototype.render=$s.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var t=a.current,n=Ta();gm(t,n,e,a,null,null)},Ao.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;gm(e.current,2,null,e,null,null),lo(),a[fn]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var a=Uu();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Lt.length&&a!==0&&a<Lt[t].priority;t++);Lt.splice(t,0,e),t===0&&Em(e)}};var Cm=u.version;if(Cm!=="19.2.3")throw Error(s(527,Cm,"19.2.3"));k.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(a),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Yp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{he=Ro.inject(Yp),De=Ro}catch{}}return $i.createRoot=function(e,a){if(!d(e))throw Error(s(299));var t=!1,n="",i=Df,l=Uf,r=jf;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=mm(e,1,!1,null,null,t,n,null,i,l,r,Mm),e[fn]=a.current,Os(e),new $s(a)},$i.hydrateRoot=function(e,a,t){if(!d(e))throw Error(s(299));var n=!1,i="",l=Df,r=Uf,f=jf,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.formState!==void 0&&(g=t.formState)),a=mm(e,1,!0,a,t??null,n,i,g,l,r,f,Mm),a.context=hm(null),t=a.current,n=Ta(),n=Bo(n),i=St(n),i.callback=null,Et(t,i,n),t=n,a.current.lanes=t,ii(a,t),Va(a),e[fn]=a.current,Os(e),new Ao(a)},$i.version="19.2.3",$i}var Lm;function Pp(){if(Lm)return Ps.exports;Lm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Ps.exports=Fp(),Ps.exports}var Ip=Pp();var zm="popstate";function km(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function ey(o={}){function u(s,d){let m=d.state?.masked,{pathname:h,search:_,hash:b}=m||s.location;return uu("",{pathname:h,search:_,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default",m?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function c(s,d){return typeof d=="string"?d:el(d)}return ty(u,c,null,o)}function Ue(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Xa(o,u){if(!o){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function ay(){return Math.random().toString(36).substring(2,10)}function Hm(o,u){return{usr:o.state,key:o.key,idx:u,masked:o.unstable_mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function uu(o,u,c=null,s,d){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof u=="string"?Fn(u):u,state:c,key:u&&u.key||s||ay(),unstable_mask:d}}function el({pathname:o="/",search:u="",hash:c=""}){return u&&u!=="?"&&(o+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(o+=c.charAt(0)==="#"?c:"#"+c),o}function Fn(o){let u={};if(o){let c=o.indexOf("#");c>=0&&(u.hash=o.substring(c),o=o.substring(0,c));let s=o.indexOf("?");s>=0&&(u.search=o.substring(s),o=o.substring(0,s)),o&&(u.pathname=o)}return u}function ty(o,u,c,s={}){let{window:d=document.defaultView,v5Compat:m=!1}=s,h=d.history,_="POP",b=null,p=x();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function x(){return(h.state||{idx:null}).idx}function T(){_="POP";let z=x(),K=z==null?null:z-p;p=z,b&&b({action:_,location:q.location,delta:K})}function L(z,K){_="PUSH";let P=km(z)?z:uu(q.location,z,K);p=x()+1;let J=Hm(P,p),se=q.createHref(P.unstable_mask||P);try{h.pushState(J,"",se)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;d.location.assign(se)}m&&b&&b({action:_,location:q.location,delta:1})}function X(z,K){_="REPLACE";let P=km(z)?z:uu(q.location,z,K);p=x();let J=Hm(P,p),se=q.createHref(P.unstable_mask||P);h.replaceState(J,"",se),m&&b&&b({action:_,location:q.location,delta:0})}function G(z){return ny(z)}let q={get action(){return _},get location(){return o(d,h)},listen(z){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(zm,T),b=z,()=>{d.removeEventListener(zm,T),b=null}},createHref(z){return u(d,z)},createURL:G,encodeLocation(z){let K=G(z);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:L,replace:X,go(z){return h.go(z)}};return q}function ny(o,u=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(c,"No window.location.(origin|href) available to create URL");let s=typeof o=="string"?o:el(o);return s=s.replace(/ $/,"%20"),!u&&s.startsWith("//")&&(s=c+s),new URL(s,c)}function Fm(o,u,c="/"){return iy(o,u,c,!1)}function iy(o,u,c,s){let d=typeof u=="string"?Fn(u):u,m=ct(d.pathname||"/",c);if(m==null)return null;let h=Pm(o);ly(h);let _=null;for(let b=0;_==null&&b<h.length;++b){let p=py(m);_=hy(h[b],p,s)}return _}function Pm(o,u=[],c=[],s="",d=!1){let m=(h,_,b=d,p)=>{let x={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:_,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&b)return;Ue(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let T=Ya([s,x.relativePath]),L=c.concat(x);h.children&&h.children.length>0&&(Ue(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),Pm(h.children,u,L,T,b)),!(h.path==null&&!h.index)&&u.push({path:T,score:dy(T,h.index),routesMeta:L})};return o.forEach((h,_)=>{if(h.path===""||!h.path?.includes("?"))m(h,_);else for(let b of Im(h.path))m(h,_,!0,b)}),u}function Im(o){let u=o.split("/");if(u.length===0)return[];let[c,...s]=u,d=c.endsWith("?"),m=c.replace(/\?$/,"");if(s.length===0)return d?[m,""]:[m];let h=Im(s.join("/")),_=[];return _.push(...h.map(b=>b===""?m:[m,b].join("/"))),d&&_.push(...h),_.map(b=>o.startsWith("/")&&b===""?"/":b)}function ly(o){o.sort((u,c)=>u.score!==c.score?c.score-u.score:my(u.routesMeta.map(s=>s.childrenIndex),c.routesMeta.map(s=>s.childrenIndex)))}var oy=/^:[\w-]+$/,ry=3,sy=2,uy=1,cy=10,fy=-2,Bm=o=>o==="*";function dy(o,u){let c=o.split("/"),s=c.length;return c.some(Bm)&&(s+=fy),u&&(s+=sy),c.filter(d=>!Bm(d)).reduce((d,m)=>d+(oy.test(m)?ry:m===""?uy:cy),s)}function my(o,u){return o.length===u.length&&o.slice(0,-1).every((s,d)=>s===u[d])?o[o.length-1]-u[u.length-1]:0}function hy(o,u,c=!1){let{routesMeta:s}=o,d={},m="/",h=[];for(let _=0;_<s.length;++_){let b=s[_],p=_===s.length-1,x=m==="/"?u:u.slice(m.length)||"/",T=Uo({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},x),L=b.route;if(!T&&p&&c&&!s[s.length-1].route.index&&(T=Uo({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},x)),!T)return null;Object.assign(d,T.params),h.push({params:d,pathname:Ya([m,T.pathname]),pathnameBase:Sy(Ya([m,T.pathnameBase])),route:L}),T.pathnameBase!=="/"&&(m=Ya([m,T.pathnameBase]))}return h}function Uo(o,u){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,s]=gy(o.path,o.caseSensitive,o.end),d=u.match(c);if(!d)return null;let m=d[0],h=m.replace(/(.)\/+$/,"$1"),_=d.slice(1);return{params:s.reduce((p,{paramName:x,isOptional:T},L)=>{if(x==="*"){let G=_[L]||"";h=m.slice(0,m.length-G.length).replace(/(.)\/+$/,"$1")}const X=_[L];return T&&!X?p[x]=void 0:p[x]=(X||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:h,pattern:o}}function gy(o,u=!1,c=!0){Xa(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let s=[],d="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,_,b,p,x)=>{if(s.push({paramName:_,isOptional:b!=null}),b){let T=x.charAt(p+h.length);return T&&T!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(s.push({paramName:"*"}),d+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":o!==""&&o!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),s]}function py(o){try{return o.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Xa(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),o}}function ct(o,u){if(u==="/")return o;if(!o.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,s=o.charAt(c);return s&&s!=="/"?null:o.slice(c)||"/"}var yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function vy(o,u="/"){let{pathname:c,search:s="",hash:d=""}=typeof o=="string"?Fn(o):o,m;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?m=Gm(c.substring(1),"/"):m=Gm(c,u)):m=u,{pathname:m,search:Ey(s),hash:Ty(d)}}function Gm(o,u){let c=u.replace(/\/+$/,"").split("/");return o.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function tu(o,u,c,s){return`Cannot include a '${o}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function by(o){return o.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function eh(o){let u=by(o);return u.map((c,s)=>s===u.length-1?c.pathname:c.pathnameBase)}function Eu(o,u,c,s=!1){let d;typeof o=="string"?d=Fn(o):(d={...o},Ue(!d.pathname||!d.pathname.includes("?"),tu("?","pathname","search",d)),Ue(!d.pathname||!d.pathname.includes("#"),tu("#","pathname","hash",d)),Ue(!d.search||!d.search.includes("#"),tu("#","search","hash",d)));let m=o===""||d.pathname==="",h=m?"/":d.pathname,_;if(h==null)_=c;else{let T=u.length-1;if(!s&&h.startsWith("..")){let L=h.split("/");for(;L[0]==="..";)L.shift(),T-=1;d.pathname=L.join("/")}_=T>=0?u[T]:"/"}let b=vy(d,_),p=h&&h!=="/"&&h.endsWith("/"),x=(m||h===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(p||x)&&(b.pathname+="/"),b}var Ya=o=>o.join("/").replace(/\/\/+/g,"/"),Sy=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Ey=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Ty=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,_y=class{constructor(o,u,c,s=!1){this.status=o,this.statusText=u||"",this.internal=s,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function My(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Cy(o){return o.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ah=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function th(o,u){let c=o;if(typeof c!="string"||!yy.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let s=c,d=!1;if(ah)try{let m=new URL(window.location.href),h=c.startsWith("//")?new URL(m.protocol+c):new URL(c),_=ct(h.pathname,u);h.origin===m.origin&&_!=null?c=_+h.search+h.hash:d=!0}catch{Xa(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:d,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var nh=["POST","PUT","PATCH","DELETE"];new Set(nh);var Ay=["GET",...nh];new Set(Ay);var Pn=S.createContext(null);Pn.displayName="DataRouter";var jo=S.createContext(null);jo.displayName="DataRouterState";var Ry=S.createContext(!1),ih=S.createContext({isTransitioning:!1});ih.displayName="ViewTransition";var xy=S.createContext(new Map);xy.displayName="Fetchers";var wy=S.createContext(null);wy.displayName="Await";var Ua=S.createContext(null);Ua.displayName="Navigation";var al=S.createContext(null);al.displayName="Location";var Ka=S.createContext({outlet:null,matches:[],isDataRoute:!1});Ka.displayName="Route";var Tu=S.createContext(null);Tu.displayName="RouteError";var lh="REACT_ROUTER_ERROR",Oy="REDIRECT",Ny="ROUTE_ERROR_RESPONSE";function Dy(o){if(o.startsWith(`${lh}:${Oy}:{`))try{let u=JSON.parse(o.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Uy(o){if(o.startsWith(`${lh}:${Ny}:{`))try{let u=JSON.parse(o.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new _y(u.status,u.statusText,u.data)}catch{}}function jy(o,{relative:u}={}){Ue(tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:s}=S.useContext(Ua),{hash:d,pathname:m,search:h}=nl(o,{relative:u}),_=m;return c!=="/"&&(_=m==="/"?c:Ya([c,m])),s.createHref({pathname:_,search:h,hash:d})}function tl(){return S.useContext(al)!=null}function kt(){return Ue(tl(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(al).location}var oh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rh(o){S.useContext(Ua).static||S.useLayoutEffect(o)}function sh(){let{isDataRoute:o}=S.useContext(Ka);return o?Zy():Ly()}function Ly(){Ue(tl(),"useNavigate() may be used only in the context of a <Router> component.");let o=S.useContext(Pn),{basename:u,navigator:c}=S.useContext(Ua),{matches:s}=S.useContext(Ka),{pathname:d}=kt(),m=JSON.stringify(eh(s)),h=S.useRef(!1);return rh(()=>{h.current=!0}),S.useCallback((b,p={})=>{if(Xa(h.current,oh),!h.current)return;if(typeof b=="number"){c.go(b);return}let x=Eu(b,JSON.parse(m),d,p.relative==="path");o==null&&u!=="/"&&(x.pathname=x.pathname==="/"?u:Ya([u,x.pathname])),(p.replace?c.replace:c.push)(x,p.state,p)},[u,c,m,d,o])}S.createContext(null);function uh(){let{matches:o}=S.useContext(Ka),u=o[o.length-1];return u?u.params:{}}function nl(o,{relative:u}={}){let{matches:c}=S.useContext(Ka),{pathname:s}=kt(),d=JSON.stringify(eh(c));return S.useMemo(()=>Eu(o,JSON.parse(d),s,u==="path"),[o,d,s,u])}function zy(o,u){return ch(o,u)}function ch(o,u,c){Ue(tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=S.useContext(Ua),{matches:d}=S.useContext(Ka),m=d[d.length-1],h=m?m.params:{},_=m?m.pathname:"/",b=m?m.pathnameBase:"/",p=m&&m.route;{let z=p&&p.path||"";dh(_,!p||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let x=kt(),T;if(u){let z=typeof u=="string"?Fn(u):u;Ue(b==="/"||z.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${z.pathname}" was given in the \`location\` prop.`),T=z}else T=x;let L=T.pathname||"/",X=L;if(b!=="/"){let z=b.replace(/^\//,"").split("/");X="/"+L.replace(/^\//,"").split("/").slice(z.length).join("/")}let G=Fm(o,{pathname:X});Xa(p||G!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Xa(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=qy(G&&G.map(z=>Object.assign({},z,{params:Object.assign({},h,z.params),pathname:Ya([b,s.encodeLocation?s.encodeLocation(z.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?b:Ya([b,s.encodeLocation?s.encodeLocation(z.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),d,c);return u&&q?S.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...T},navigationType:"POP"}},q):q}function ky(){let o=Qy(),u=My(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},m={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",o),h=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:m},"ErrorBoundary")," or"," ",S.createElement("code",{style:m},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},u),c?S.createElement("pre",{style:d},c):null,h)}var Hy=S.createElement(ky,null),fh=class extends S.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,u){return u.location!==o.location||u.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:u.error,location:u.location,revalidation:o.revalidation||u.revalidation}}componentDidCatch(o,u){this.props.onError?this.props.onError(o,u):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const c=Uy(o.digest);c&&(o=c)}let u=o!==void 0?S.createElement(Ka.Provider,{value:this.props.routeContext},S.createElement(Tu.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?S.createElement(By,{error:o},u):u}};fh.contextType=Ry;var nu=new WeakMap;function By({children:o,error:u}){let{basename:c}=S.useContext(Ua);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let s=Dy(u.digest);if(s){let d=nu.get(u);if(d)throw d;let m=th(s.location,c);if(ah&&!nu.get(u))if(m.isExternal||s.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:s.replace}));throw nu.set(u,h),h}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return o}function Gy({routeContext:o,match:u,children:c}){let s=S.useContext(Pn);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),S.createElement(Ka.Provider,{value:o},c)}function qy(o,u=[],c){let s=c?.state;if(o==null){if(!s)return null;if(s.errors)o=s.matches;else if(u.length===0&&!s.initialized&&s.matches.length>0)o=s.matches;else return null}let d=o,m=s?.errors;if(m!=null){let x=d.findIndex(T=>T.route.id&&m?.[T.route.id]!==void 0);Ue(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,x+1))}let h=!1,_=-1;if(c&&s){h=s.renderFallback;for(let x=0;x<d.length;x++){let T=d[x];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(_=x),T.route.id){let{loaderData:L,errors:X}=s,G=T.route.loader&&!L.hasOwnProperty(T.route.id)&&(!X||X[T.route.id]===void 0);if(T.route.lazy||G){c.isStatic&&(h=!0),_>=0?d=d.slice(0,_+1):d=[d[0]];break}}}}let b=c?.onError,p=s&&b?(x,T)=>{b(x,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:Cy(s.matches),errorInfo:T})}:void 0;return d.reduceRight((x,T,L)=>{let X,G=!1,q=null,z=null;s&&(X=m&&T.route.id?m[T.route.id]:void 0,q=T.route.errorElement||Hy,h&&(_<0&&L===0?(dh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,z=null):_===L&&(G=!0,z=T.route.hydrateFallbackElement||null)));let K=u.concat(d.slice(0,L+1)),P=()=>{let J;return X?J=q:G?J=z:T.route.Component?J=S.createElement(T.route.Component,null):T.route.element?J=T.route.element:J=x,S.createElement(Gy,{match:T,routeContext:{outlet:x,matches:K,isDataRoute:s!=null},children:J})};return s&&(T.route.ErrorBoundary||T.route.errorElement||L===0)?S.createElement(fh,{location:s.location,revalidation:s.revalidation,component:q,error:X,children:P(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:p}):P()},null)}function _u(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vy(o){let u=S.useContext(Pn);return Ue(u,_u(o)),u}function Yy(o){let u=S.useContext(jo);return Ue(u,_u(o)),u}function Xy(o){let u=S.useContext(Ka);return Ue(u,_u(o)),u}function Mu(o){let u=Xy(o),c=u.matches[u.matches.length-1];return Ue(c.route.id,`${o} can only be used on routes that contain a unique "id"`),c.route.id}function Ky(){return Mu("useRouteId")}function Qy(){let o=S.useContext(Tu),u=Yy("useRouteError"),c=Mu("useRouteError");return o!==void 0?o:u.errors?.[c]}function Zy(){let{router:o}=Vy("useNavigate"),u=Mu("useNavigate"),c=S.useRef(!1);return rh(()=>{c.current=!0}),S.useCallback(async(d,m={})=>{Xa(c.current,oh),c.current&&(typeof d=="number"?await o.navigate(d):await o.navigate(d,{fromRouteId:u,...m}))},[o,u])}var qm={};function dh(o,u,c){!u&&!qm[o]&&(qm[o]=!0,Xa(!1,c))}S.memo(Jy);function Jy({routes:o,future:u,state:c,isStatic:s,onError:d}){return ch(o,void 0,{state:c,isStatic:s,onError:d})}function tn(o){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $y({basename:o="/",children:u=null,location:c,navigationType:s="POP",navigator:d,static:m=!1,unstable_useTransitions:h}){Ue(!tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let _=o.replace(/^\/*/,"/"),b=S.useMemo(()=>({basename:_,navigator:d,static:m,unstable_useTransitions:h,future:{}}),[_,d,m,h]);typeof c=="string"&&(c=Fn(c));let{pathname:p="/",search:x="",hash:T="",state:L=null,key:X="default",unstable_mask:G}=c,q=S.useMemo(()=>{let z=ct(p,_);return z==null?null:{location:{pathname:z,search:x,hash:T,state:L,key:X,unstable_mask:G},navigationType:s}},[_,p,x,T,L,X,s,G]);return Xa(q!=null,`<Router basename="${_}"> is not able to match the URL "${p}${x}${T}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:S.createElement(Ua.Provider,{value:b},S.createElement(al.Provider,{children:u,value:q}))}function Wy({children:o,location:u}){return zy(cu(o),u)}function cu(o,u=[]){let c=[];return S.Children.forEach(o,(s,d)=>{if(!S.isValidElement(s))return;let m=[...u,d];if(s.type===S.Fragment){c.push.apply(c,cu(s.props.children,m));return}Ue(s.type===tn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||m.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=cu(s.props.children,m)),c.push(h)}),c}var No="get",Do="application/x-www-form-urlencoded";function Lo(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Fy(o){return Lo(o)&&o.tagName.toLowerCase()==="button"}function Py(o){return Lo(o)&&o.tagName.toLowerCase()==="form"}function Iy(o){return Lo(o)&&o.tagName.toLowerCase()==="input"}function ev(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function av(o,u){return o.button===0&&(!u||u==="_self")&&!ev(o)}var xo=null;function tv(){if(xo===null)try{new FormData(document.createElement("form"),0),xo=!1}catch{xo=!0}return xo}var nv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function iu(o){return o!=null&&!nv.has(o)?(Xa(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Do}"`),null):o}function iv(o,u){let c,s,d,m,h;if(Py(o)){let _=o.getAttribute("action");s=_?ct(_,u):null,c=o.getAttribute("method")||No,d=iu(o.getAttribute("enctype"))||Do,m=new FormData(o)}else if(Fy(o)||Iy(o)&&(o.type==="submit"||o.type==="image")){let _=o.form;if(_==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=o.getAttribute("formaction")||_.getAttribute("action");if(s=b?ct(b,u):null,c=o.getAttribute("formmethod")||_.getAttribute("method")||No,d=iu(o.getAttribute("formenctype"))||iu(_.getAttribute("enctype"))||Do,m=new FormData(_,o),!tv()){let{name:p,type:x,value:T}=o;if(x==="image"){let L=p?`${p}.`:"";m.append(`${L}x`,"0"),m.append(`${L}y`,"0")}else p&&m.append(p,T)}}else{if(Lo(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=No,s=null,d=Do,h=o}return m&&d==="text/plain"&&(h=m,m=void 0),{action:s,method:c.toLowerCase(),encType:d,formData:m,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cu(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function lv(o,u,c,s){let d=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return c?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${s}`:d.pathname=`${d.pathname}.${s}`:d.pathname==="/"?d.pathname=`_root.${s}`:u&&ct(d.pathname,u)==="/"?d.pathname=`${u.replace(/\/$/,"")}/_root.${s}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${s}`,d}async function ov(o,u){if(o.id in u)return u[o.id];try{let c=await import(o.module);return u[o.id]=c,c}catch(c){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rv(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function sv(o,u,c){let s=await Promise.all(o.map(async d=>{let m=u.routes[d.route.id];if(m){let h=await ov(m,c);return h.links?h.links():[]}return[]}));return dv(s.flat(1).filter(rv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Vm(o,u,c,s,d,m){let h=(b,p)=>c[p]?b.route.id!==c[p].route.id:!0,_=(b,p)=>c[p].pathname!==b.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==b.params["*"];return m==="assets"?u.filter((b,p)=>h(b,p)||_(b,p)):m==="data"?u.filter((b,p)=>{let x=s.routes[b.route.id];if(!x||!x.hasLoader)return!1;if(h(b,p)||_(b,p))return!0;if(b.route.shouldRevalidate){let T=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function uv(o,u,{includeHydrateFallback:c}={}){return cv(o.map(s=>{let d=u.routes[s.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function cv(o){return[...new Set(o)]}function fv(o){let u={},c=Object.keys(o).sort();for(let s of c)u[s]=o[s];return u}function dv(o,u){let c=new Set;return new Set(u),o.reduce((s,d)=>{let m=JSON.stringify(fv(d));return c.has(m)||(c.add(m),s.push({key:m,link:d})),s},[])}function mh(){let o=S.useContext(Pn);return Cu(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function mv(){let o=S.useContext(jo);return Cu(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Au=S.createContext(void 0);Au.displayName="FrameworkContext";function hh(){let o=S.useContext(Au);return Cu(o,"You must render this element inside a <HydratedRouter> element"),o}function hv(o,u){let c=S.useContext(Au),[s,d]=S.useState(!1),[m,h]=S.useState(!1),{onFocus:_,onBlur:b,onMouseEnter:p,onMouseLeave:x,onTouchStart:T}=u,L=S.useRef(null);S.useEffect(()=>{if(o==="render"&&h(!0),o==="viewport"){let q=K=>{K.forEach(P=>{h(P.isIntersecting)})},z=new IntersectionObserver(q,{threshold:.5});return L.current&&z.observe(L.current),()=>{z.disconnect()}}},[o]),S.useEffect(()=>{if(s){let q=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(q)}}},[s]);let X=()=>{d(!0)},G=()=>{d(!1),h(!1)};return c?o!=="intent"?[m,L,{}]:[m,L,{onFocus:Wi(_,X),onBlur:Wi(b,G),onMouseEnter:Wi(p,X),onMouseLeave:Wi(x,G),onTouchStart:Wi(T,X)}]:[!1,L,{}]}function Wi(o,u){return c=>{o&&o(c),c.defaultPrevented||u(c)}}function gv({page:o,...u}){let{router:c}=mh(),s=S.useMemo(()=>Fm(c.routes,o,c.basename),[c.routes,o,c.basename]);return s?S.createElement(yv,{page:o,matches:s,...u}):null}function pv(o){let{manifest:u,routeModules:c}=hh(),[s,d]=S.useState([]);return S.useEffect(()=>{let m=!1;return sv(o,u,c).then(h=>{m||d(h)}),()=>{m=!0}},[o,u,c]),s}function yv({page:o,matches:u,...c}){let s=kt(),{future:d,manifest:m,routeModules:h}=hh(),{basename:_}=mh(),{loaderData:b,matches:p}=mv(),x=S.useMemo(()=>Vm(o,u,p,m,s,"data"),[o,u,p,m,s]),T=S.useMemo(()=>Vm(o,u,p,m,s,"assets"),[o,u,p,m,s]),L=S.useMemo(()=>{if(o===s.pathname+s.search+s.hash)return[];let q=new Set,z=!1;if(u.forEach(P=>{let J=m.routes[P.route.id];!J||!J.hasLoader||(!x.some(se=>se.route.id===P.route.id)&&P.route.id in b&&h[P.route.id]?.shouldRevalidate||J.hasClientLoader?z=!0:q.add(P.route.id))}),q.size===0)return[];let K=lv(o,_,d.unstable_trailingSlashAwareDataRequests,"data");return z&&q.size>0&&K.searchParams.set("_routes",u.filter(P=>q.has(P.route.id)).map(P=>P.route.id).join(",")),[K.pathname+K.search]},[_,d.unstable_trailingSlashAwareDataRequests,b,s,m,x,u,o,h]),X=S.useMemo(()=>uv(T,m),[T,m]),G=pv(T);return S.createElement(S.Fragment,null,L.map(q=>S.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...c})),X.map(q=>S.createElement("link",{key:q,rel:"modulepreload",href:q,...c})),G.map(({key:q,link:z})=>S.createElement("link",{key:q,nonce:c.nonce,...z,crossOrigin:z.crossOrigin??c.crossOrigin})))}function vv(...o){return u=>{o.forEach(c=>{typeof c=="function"?c(u):c!=null&&(c.current=u)})}}var bv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bv&&(window.__reactRouterVersion="7.13.1")}catch{}function Sv({basename:o,children:u,unstable_useTransitions:c,window:s}){let d=S.useRef();d.current==null&&(d.current=ey({window:s,v5Compat:!0}));let m=d.current,[h,_]=S.useState({action:m.action,location:m.location}),b=S.useCallback(p=>{c===!1?_(p):S.startTransition(()=>_(p))},[c]);return S.useLayoutEffect(()=>m.listen(b),[m,b]),S.createElement($y,{basename:o,children:u,location:h.location,navigationType:h.action,navigator:m,unstable_useTransitions:c})}var gh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rn=S.forwardRef(function({onClick:u,discover:c="render",prefetch:s="none",relative:d,reloadDocument:m,replace:h,unstable_mask:_,state:b,target:p,to:x,preventScrollReset:T,viewTransition:L,unstable_defaultShouldRevalidate:X,...G},q){let{basename:z,navigator:K,unstable_useTransitions:P}=S.useContext(Ua),J=typeof x=="string"&&gh.test(x),se=th(x,z);x=se.to;let de=jy(x,{relative:d}),fe=kt(),W=null;if(_){let xe=Eu(_,[],fe.unstable_mask?fe.unstable_mask.pathname:"/",!0);z!=="/"&&(xe.pathname=xe.pathname==="/"?z:Ya([z,xe.pathname])),W=K.createHref(xe)}let[Ce,Xe,ha]=hv(s,G),na=Mv(x,{replace:h,unstable_mask:_,state:b,target:p,preventScrollReset:T,relative:d,viewTransition:L,unstable_defaultShouldRevalidate:X,unstable_useTransitions:P});function Ve(xe){u&&u(xe),xe.defaultPrevented||na(xe)}let ga=!(se.isExternal||m),ia=S.createElement("a",{...G,...ha,href:(ga?W:void 0)||se.absoluteURL||de,onClick:ga?Ve:u,ref:vv(q,Xe),target:p,"data-discover":!J&&c==="render"?"true":void 0});return Ce&&!J?S.createElement(S.Fragment,null,ia,S.createElement(gv,{page:de})):ia});rn.displayName="Link";var Ev=S.forwardRef(function({"aria-current":u="page",caseSensitive:c=!1,className:s="",end:d=!1,style:m,to:h,viewTransition:_,children:b,...p},x){let T=nl(h,{relative:p.relative}),L=kt(),X=S.useContext(jo),{navigator:G,basename:q}=S.useContext(Ua),z=X!=null&&wv(T)&&_===!0,K=G.encodeLocation?G.encodeLocation(T).pathname:T.pathname,P=L.pathname,J=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;c||(P=P.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&q&&(J=ct(J,q)||J);const se=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let de=P===K||!d&&P.startsWith(K)&&P.charAt(se)==="/",fe=J!=null&&(J===K||!d&&J.startsWith(K)&&J.charAt(K.length)==="/"),W={isActive:de,isPending:fe,isTransitioning:z},Ce=de?u:void 0,Xe;typeof s=="function"?Xe=s(W):Xe=[s,de?"active":null,fe?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let ha=typeof m=="function"?m(W):m;return S.createElement(rn,{...p,"aria-current":Ce,className:Xe,ref:x,style:ha,to:h,viewTransition:_},typeof b=="function"?b(W):b)});Ev.displayName="NavLink";var Tv=S.forwardRef(({discover:o="render",fetcherKey:u,navigate:c,reloadDocument:s,replace:d,state:m,method:h=No,action:_,onSubmit:b,relative:p,preventScrollReset:x,viewTransition:T,unstable_defaultShouldRevalidate:L,...X},G)=>{let{unstable_useTransitions:q}=S.useContext(Ua),z=Rv(),K=xv(_,{relative:p}),P=h.toLowerCase()==="get"?"get":"post",J=typeof _=="string"&&gh.test(_),se=de=>{if(b&&b(de),de.defaultPrevented)return;de.preventDefault();let fe=de.nativeEvent.submitter,W=fe?.getAttribute("formmethod")||h,Ce=()=>z(fe||de.currentTarget,{fetcherKey:u,method:W,navigate:c,replace:d,state:m,relative:p,preventScrollReset:x,viewTransition:T,unstable_defaultShouldRevalidate:L});q&&c!==!1?S.startTransition(()=>Ce()):Ce()};return S.createElement("form",{ref:G,method:P,action:K,onSubmit:s?b:se,...X,"data-discover":!J&&o==="render"?"true":void 0})});Tv.displayName="Form";function _v(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ph(o){let u=S.useContext(Pn);return Ue(u,_v(o)),u}function Mv(o,{target:u,replace:c,unstable_mask:s,state:d,preventScrollReset:m,relative:h,viewTransition:_,unstable_defaultShouldRevalidate:b,unstable_useTransitions:p}={}){let x=sh(),T=kt(),L=nl(o,{relative:h});return S.useCallback(X=>{if(av(X,u)){X.preventDefault();let G=c!==void 0?c:el(T)===el(L),q=()=>x(o,{replace:G,unstable_mask:s,state:d,preventScrollReset:m,relative:h,viewTransition:_,unstable_defaultShouldRevalidate:b});p?S.startTransition(()=>q()):q()}},[T,x,L,c,s,d,u,o,m,h,_,b,p])}var Cv=0,Av=()=>`__${String(++Cv)}__`;function Rv(){let{router:o}=ph("useSubmit"),{basename:u}=S.useContext(Ua),c=Ky(),s=o.fetch,d=o.navigate;return S.useCallback(async(m,h={})=>{let{action:_,method:b,encType:p,formData:x,body:T}=iv(m,u);if(h.navigate===!1){let L=h.fetcherKey||Av();await s(L,c,h.action||_,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:x,body:T,formMethod:h.method||b,formEncType:h.encType||p,flushSync:h.flushSync})}else await d(h.action||_,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:x,body:T,formMethod:h.method||b,formEncType:h.encType||p,replace:h.replace,state:h.state,fromRouteId:c,flushSync:h.flushSync,viewTransition:h.viewTransition})},[s,d,u,c])}function xv(o,{relative:u}={}){let{basename:c}=S.useContext(Ua),s=S.useContext(Ka);Ue(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),m={...nl(o||".",{relative:u})},h=kt();if(o==null){m.search=h.search;let _=new URLSearchParams(m.search),b=_.getAll("index");if(b.some(x=>x==="")){_.delete("index"),b.filter(T=>T).forEach(T=>_.append("index",T));let x=_.toString();m.search=x?`?${x}`:""}}return(!o||o===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(m.pathname=m.pathname==="/"?c:Ya([c,m.pathname])),el(m)}function wv(o,{relative:u}={}){let c=S.useContext(ih);Ue(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ph("useViewTransitionState"),d=nl(o,{relative:u});if(!c.isTransitioning)return!1;let m=ct(c.currentLocation.pathname,s)||c.currentLocation.pathname,h=ct(c.nextLocation.pathname,s)||c.nextLocation.pathname;return Uo(d.pathname,h)!=null||Uo(d.pathname,m)!=null}var Ov=Wm();const Fi=bu(Ov);function Nv(){return S.useEffect(()=>{let o=window.pageYOffset;const u=document.getElementById("navbar"),c=5,s=()=>{const d=window.scrollY;o>d?u.style.top="0":d>o+c&&(u.style.top="-50px"),o=d};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),j.jsxs("div",{id:"navbar",children:[j.jsx(rn,{to:"/",children:"Home"}),j.jsx(rn,{to:"/guide",children:"Guide"}),j.jsx(rn,{to:"/blog",children:"Blog"}),j.jsx(rn,{to:"/information",children:"About"})]})}function Dv({image:o,name:u,departament:c,rating:s,time:d,onClick:m}){const h=o?`/${o}`:"";return j.jsxs("div",{className:"place-card",onClick:m,children:[h?j.jsx("div",{className:"image-wrapper",children:j.jsx("img",{src:h,alt:u})}):j.jsx("div",{className:"image-wrapper empty"}),j.jsxs("div",{className:"info",children:[j.jsx("h3",{children:u||""}),j.jsx("p",{className:"departament",children:c||""}),j.jsxs("div",{className:"meta",children:[j.jsx("span",{className:"rating",children:s?`⭐ ${s}`:""}),j.jsx("span",{className:"time",children:d||""})]})]})]})}const yh=[{id:1,image:"Corn-Island/Corn_Island_1.jpeg",name:"Corn Island",departament:"Caribbean Sea",rating:"5.0",time:"1.5 hour ✈️",description:`
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

                🚗 STEP 1 — Travel to Rivas / San Jorge
                - From Managua: 2 – 2.5 hours by bus or car
                - Cost: $5 – $15 USD by bus and $70+ USD private transfer


                ⛴ STEP 2 — Ferry to Ometepe Island

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

                🚗 From Managua:
                - Distance: ~25 km
                - Travel time: 30–45 minutes by car
                - Transport options:
                - Rental car: $25–60 USD/day
                - Taxi/Uber: $20–40 USD one way
                - Organized tour: $35–80 USD (includes guide + transport)

                🚌 Public transport:
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

                🚗 From Managua:
                - Distance: ~45 km
                - Travel time: 50–70 minutes

                Transport options:
                - Public bus: $1–$3 USD (slow but authentic)
                - Shuttle/tour transfer: $10–25 USD
                - Taxi/private car: $30–60 USD

                🚌 Bus route:
                Managua UCA terminal → Granada central station

                ⚠️ Note:
                Buses are frequent but can be crowded and slower due to multiple stops.


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
                `,extraPhotos:["/Cerro_mogoton/cerro_mogoton_2.jpg","/Cerro_mogoton/cerro_mogoton_3.jpg","/Cerro_mogoton/cerro_mogoton_4.jpg","/Cerro_mogoton/cerro_mogoton_5.jpg","/Cerro_mogoton/cerro_mogoton_1.jpg"],activities:["Hiking to Nicaragua’s highest peak","Birdwatching and wildlife observation","Photography of mountain landscapes","Exploring cloud forest trails"],restaurantsAround:[{name:"Ocotal Mountain Grill",rating:"4.3"}],tips:["Start early for the hike and changing weather conditions","Wear hiking boots and bring warm layers","Hire a local guide for safer navigation","Carry enough water and snacks for the trek"]}];function Uv(){const o=sh(),u=[...yh];for(;u.length<8;)u.push({});return j.jsxs("div",{className:"page-container",children:[j.jsxs("div",{className:"intro",children:[j.jsx("h1",{children:"Welcome to Nicaragua 🇳🇮"}),j.jsx("p",{children:"A country full of culture, history, and natural wonders. Explore our selection of recommended tourist destinations and find your next favorite place to visit."})]}),j.jsx("div",{className:"grid",children:u.map((c,s)=>j.jsx(Dv,{...c,onClick:()=>{c.id&&o(`/place/${c.id}`)}},s))})]})}function jv(){return j.jsx("div",{className:"guide-container",children:j.jsxs("div",{className:"guide-card",children:[j.jsx("h1",{className:"guide-title",children:"Nicaragua Travel Guide"}),j.jsx("p",{className:"guide-text",children:"This website was created to help you discover the many places that make Nicaragua a unique and exciting destination. If you are planning a trip or simply looking for ideas on where to go, here you will find a collection of interesting attractions and popular tourist destinations."}),j.jsx("h2",{className:"guide-subtitle",children:"What You Will See on Each Destination"}),j.jsxs("ul",{className:"guide-list",children:[j.jsxs("li",{children:[j.jsx("strong",{children:"Place Name"}),": The official name of the tourist attraction or point of interest."]}),j.jsxs("li",{children:[j.jsx("strong",{children:"Department"}),": Each destination shows the department where it is located, helping you understand its regional position within the country."]}),j.jsxs("li",{children:[j.jsx("strong",{children:"Rating"}),': A small star "⭐" rating offering a quick, subjective idea of how notable or popular the destination is.']}),j.jsxs("li",{children:[j.jsx("strong",{children:"Distance & Travel Time"}),": Each trip estimate is calculated from Managua, so you can easily understand how far each place is and how long it usually takes to get there."]})]}),j.jsx("p",{className:"guide-end",children:"Enjoy exploring Nicaragua! 🇳🇮"})]})})}function Lv(){return j.jsx("div",{className:"info-container",children:j.jsxs("div",{className:"info-card",children:[j.jsx("h1",{className:"info-title",children:"About This Website"}),j.jsx("p",{className:"guide-text",children:"This is not an official tourism website and does not represent any institution or organization. It was created as an independent guide for anyone who wants to explore Nicaragua, whether you are a local traveler looking for new places to visit or an international tourist interested in discovering what the country has to offer."}),j.jsx("p",{className:"guide-text",children:"This website is a work in progress and will continue improving over time. New features, more detailed information, and useful tools will be added gradually to enhance the overall experience. Everything is designed to be simple, clear, and helpful for planning your trips around the country."}),j.jsx("p",{className:"guide-text",children:"To improve the website and support it through advertising, we use third-party services such as Google Analytics and Google AdSense. These services may collect anonymized data such as pages visited, device information, and general location in order to understand how the website is used and to display relevant ads."}),j.jsx("p",{className:"guide-text",children:"If you are located in the European Economic Area (EEA), you will be asked to provide consent before cookies or tracking technologies are used. You can choose to accept or reject these cookies at any time."}),j.jsx("p",{className:"guide-text",children:"Your privacy is important, and we aim to handle all data responsibly and transparently while you explore the content freely."}),j.jsx("p",{className:"info-end",children:"Thank you for visiting 🇳🇮"})]})})}function vh(o){const u=S.useRef(o);return S.useEffect(()=>{u.current=o},[o]),u}function Ym(o){const u=vh(o);return S.useCallback(function(...c){return u.current&&u.current(...c)},[u])}function zv(o,u){const c=S.useRef(!0);S.useEffect(()=>{if(c.current){c.current=!1;return}return o()},u)}function kv(){const o=S.useRef(!0),u=S.useRef(()=>o.current);return S.useEffect(()=>(o.current=!0,()=>{o.current=!1}),[]),u.current}function Hv(o){const u=S.useRef(o);return u.current=o,u}function Bv(o){const u=Hv(o);S.useEffect(()=>()=>u.current(),[])}const fu=2**31-1;function bh(o,u,c){const s=c-Date.now();o.current=s<=fu?setTimeout(u,s):setTimeout(()=>bh(o,u,c),fu)}function Gv(){const o=kv(),u=S.useRef();return Bv(()=>clearTimeout(u.current)),S.useMemo(()=>{const c=()=>clearTimeout(u.current);function s(d,m=0){o()&&(c(),m<=fu?u.current=setTimeout(d,m):bh(u,d,Date.now()+m))}return{set:s,clear:c,handleRef:u}},[])}function qv(o){const u=S.useRef(o);return S.useEffect(()=>{u.current=o},[o]),u}function Vv(o){const u=qv(o);return S.useCallback(function(...c){return u.current&&u.current(...c)},[u])}const Yv=["as","disabled"];function Xv(o,u){if(o==null)return{};var c={};for(var s in o)if({}.hasOwnProperty.call(o,s)){if(u.indexOf(s)>=0)continue;c[s]=o[s]}return c}function Kv(o){return!o||o.trim()==="#"}function Sh({tagName:o,disabled:u,href:c,target:s,rel:d,role:m,onClick:h,tabIndex:_=0,type:b}){o||(c!=null||s!=null||d!=null?o="a":o="button");const p={tagName:o};if(o==="button")return[{type:b||"button",disabled:u},p];const x=L=>{if((u||o==="a"&&Kv(c))&&L.preventDefault(),u){L.stopPropagation();return}h?.(L)},T=L=>{L.key===" "&&(L.preventDefault(),x(L))};return o==="a"&&(c||(c="#"),u&&(c=void 0)),[{role:m??"button",disabled:void 0,tabIndex:u?void 0:_,href:c,target:o==="a"?s:void 0,"aria-disabled":u||void 0,rel:o==="a"?d:void 0,onClick:x,onKeyDown:T},p]}const Qv=S.forwardRef((o,u)=>{let{as:c,disabled:s}=o,d=Xv(o,Yv);const[m,{tagName:h}]=Sh(Object.assign({tagName:c,disabled:s},d));return j.jsx(h,Object.assign({},d,m,{ref:u}))});Qv.displayName="Button";const Zv=["onKeyDown"];function Jv(o,u){if(o==null)return{};var c={};for(var s in o)if({}.hasOwnProperty.call(o,s)){if(u.indexOf(s)>=0)continue;c[s]=o[s]}return c}function $v(o){return!o||o.trim()==="#"}const du=S.forwardRef((o,u)=>{let{onKeyDown:c}=o,s=Jv(o,Zv);const[d]=Sh(Object.assign({tagName:"a"},s)),m=Vv(h=>{d.onKeyDown(h),c?.(h)});return $v(s.href)||s.role==="button"?j.jsx("a",Object.assign({ref:u},s,d,{onKeyDown:m})):j.jsx("a",Object.assign({ref:u},s,{onKeyDown:c}))});du.displayName="Anchor";var lu={exports:{}};var Xm;function Wv(){return Xm||(Xm=1,(function(o){(function(){var u={}.hasOwnProperty;function c(){for(var m="",h=0;h<arguments.length;h++){var _=arguments[h];_&&(m=d(m,s(_)))}return m}function s(m){if(typeof m=="string"||typeof m=="number")return m;if(typeof m!="object")return"";if(Array.isArray(m))return c.apply(null,m);if(m.toString!==Object.prototype.toString&&!m.toString.toString().includes("[native code]"))return m.toString();var h="";for(var _ in m)u.call(m,_)&&m[_]&&(h=d(h,_));return h}function d(m,h){return h?m?m+" "+h:m+h:m}o.exports?(c.default=c,o.exports=c):window.classNames=c})()})(lu)),lu.exports}var Fv=Wv();const Ii=bu(Fv);function mu(){return mu=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var s in c)({}).hasOwnProperty.call(c,s)&&(o[s]=c[s])}return o},mu.apply(null,arguments)}function Eh(o,u){if(o==null)return{};var c={};for(var s in o)if({}.hasOwnProperty.call(o,s)){if(u.indexOf(s)!==-1)continue;c[s]=o[s]}return c}function Km(o){return"default"+o.charAt(0).toUpperCase()+o.substr(1)}function Pv(o){var u=Iv(o,"string");return typeof u=="symbol"?u:String(u)}function Iv(o,u){if(typeof o!="object"||o===null)return o;var c=o[Symbol.toPrimitive];if(c!==void 0){var s=c.call(o,u);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}function eb(o,u,c){var s=S.useRef(o!==void 0),d=S.useState(u),m=d[0],h=d[1],_=o!==void 0,b=s.current;return s.current=_,!_&&b&&m!==u&&h(u),[_?o:m,S.useCallback(function(p){for(var x=arguments.length,T=new Array(x>1?x-1:0),L=1;L<x;L++)T[L-1]=arguments[L];c&&c.apply(void 0,[p].concat(T)),h(p)},[c])]}function ab(o,u){return Object.keys(u).reduce(function(c,s){var d,m=c,h=m[Km(s)],_=m[s],b=Eh(m,[Km(s),s].map(Pv)),p=u[s],x=eb(_,h,o[p]),T=x[0],L=x[1];return mu({},b,(d={},d[s]=T,d[p]=L,d))},o)}function hu(o,u){return hu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,s){return c.__proto__=s,c},hu(o,u)}function tb(o,u){o.prototype=Object.create(u.prototype),o.prototype.constructor=o,hu(o,u)}const nb=["xxl","xl","lg","md","sm","xs"],ib="xs",Ru=S.createContext({prefixes:{},breakpoints:nb,minBreakpoint:ib}),{Consumer:Lb,Provider:zb}=Ru;function xu(o,u){const{prefixes:c}=S.useContext(Ru);return o||c[u]||u}function lb(){const{dir:o}=S.useContext(Ru);return o==="rtl"}const Th=S.forwardRef(({className:o,bsPrefix:u,as:c="div",...s},d)=>(u=xu(u,"carousel-caption"),j.jsx(c,{ref:d,className:Ii(o,u),...s})));Th.displayName="CarouselCaption";const _h=S.forwardRef(({as:o="div",bsPrefix:u,className:c,...s},d)=>{const m=Ii(c,xu(u,"carousel-item"));return j.jsx(o,{ref:d,...s,className:m})});_h.displayName="CarouselItem";function Qm(o,u){let c=0;return S.Children.map(o,s=>S.isValidElement(s)?u(s,c++):s)}function ob(o,u){let c=0;S.Children.forEach(o,s=>{S.isValidElement(s)&&u(s,c++)})}function rb(o){return o&&o.ownerDocument||document}function sb(o){var u=rb(o);return u&&u.defaultView||window}function ub(o,u){return sb(o).getComputedStyle(o,u)}var cb=/([A-Z])/g;function fb(o){return o.replace(cb,"-$1").toLowerCase()}var db=/^ms-/;function wo(o){return fb(o).replace(db,"-ms-")}var mb=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function hb(o){return!!(o&&mb.test(o))}function Mh(o,u){var c="",s="";if(typeof u=="string")return o.style.getPropertyValue(wo(u))||ub(o).getPropertyValue(wo(u));Object.keys(u).forEach(function(d){var m=u[d];!m&&m!==0?o.style.removeProperty(wo(d)):hb(d)?s+=d+"("+m+") ":c+=wo(d)+": "+m+";"}),s&&(c+="transform: "+s+";"),o.style.cssText+=";"+c}const gb=!!(typeof window<"u"&&window.document&&window.document.createElement);var gu=!1,pu=!1;try{var ou={get passive(){return gu=!0},get once(){return pu=gu=!0}};gb&&(window.addEventListener("test",ou,ou),window.removeEventListener("test",ou,!0))}catch{}function pb(o,u,c,s){if(s&&typeof s!="boolean"&&!pu){var d=s.once,m=s.capture,h=c;!pu&&d&&(h=c.__once||function _(b){this.removeEventListener(u,_,m),c.call(this,b)},c.__once=h),o.addEventListener(u,h,gu?s:m)}o.addEventListener(u,c,s)}function yb(o,u,c,s){var d=s&&typeof s!="boolean"?s.capture:s;o.removeEventListener(u,c,d),c.__once&&o.removeEventListener(u,c.__once,d)}function Ch(o,u,c,s){return pb(o,u,c,s),function(){yb(o,u,c,s)}}function vb(o,u,c,s){if(s===void 0&&(s=!0),o){var d=document.createEvent("HTMLEvents");d.initEvent(u,c,s),o.dispatchEvent(d)}}function bb(o){var u=Mh(o,"transitionDuration")||"",c=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*c}function Sb(o,u,c){c===void 0&&(c=5);var s=!1,d=setTimeout(function(){s||vb(o,"transitionend",!0)},u+c),m=Ch(o,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(d),m()}}function Eb(o,u,c,s){c==null&&(c=bb(o)||0);var d=Sb(o,c,s),m=Ch(o,"transitionend",u);return function(){d(),m()}}function Zm(o,u){const c=Mh(o,u)||"",s=c.indexOf("ms")===-1?1e3:1;return parseFloat(c)*s}function Tb(o,u){const c=Zm(o,"transitionDuration"),s=Zm(o,"transitionDelay"),d=Eb(o,m=>{m.target===o&&(d(),u(m))},c+s)}function _b(o){o.offsetHeight}const Jm={disabled:!1},Ah=on.createContext(null);var Mb=function(u){return u.scrollTop},Pi="unmounted",nn="exited",ln="entering",Wn="entered",yu="exiting",ft=(function(o){tb(u,o);function u(s,d){var m;m=o.call(this,s,d)||this;var h=d,_=h&&!h.isMounting?s.enter:s.appear,b;return m.appearStatus=null,s.in?_?(b=nn,m.appearStatus=ln):b=Wn:s.unmountOnExit||s.mountOnEnter?b=Pi:b=nn,m.state={status:b},m.nextCallback=null,m}u.getDerivedStateFromProps=function(d,m){var h=d.in;return h&&m.status===Pi?{status:nn}:null};var c=u.prototype;return c.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},c.componentDidUpdate=function(d){var m=null;if(d!==this.props){var h=this.state.status;this.props.in?h!==ln&&h!==Wn&&(m=ln):(h===ln||h===Wn)&&(m=yu)}this.updateStatus(!1,m)},c.componentWillUnmount=function(){this.cancelNextCallback()},c.getTimeouts=function(){var d=this.props.timeout,m,h,_;return m=h=_=d,d!=null&&typeof d!="number"&&(m=d.exit,h=d.enter,_=d.appear!==void 0?d.appear:h),{exit:m,enter:h,appear:_}},c.updateStatus=function(d,m){if(d===void 0&&(d=!1),m!==null)if(this.cancelNextCallback(),m===ln){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:Fi.findDOMNode(this);h&&Mb(h)}this.performEnter(d)}else this.performExit();else this.props.unmountOnExit&&this.state.status===nn&&this.setState({status:Pi})},c.performEnter=function(d){var m=this,h=this.props.enter,_=this.context?this.context.isMounting:d,b=this.props.nodeRef?[_]:[Fi.findDOMNode(this),_],p=b[0],x=b[1],T=this.getTimeouts(),L=_?T.appear:T.enter;if(!d&&!h||Jm.disabled){this.safeSetState({status:Wn},function(){m.props.onEntered(p)});return}this.props.onEnter(p,x),this.safeSetState({status:ln},function(){m.props.onEntering(p,x),m.onTransitionEnd(L,function(){m.safeSetState({status:Wn},function(){m.props.onEntered(p,x)})})})},c.performExit=function(){var d=this,m=this.props.exit,h=this.getTimeouts(),_=this.props.nodeRef?void 0:Fi.findDOMNode(this);if(!m||Jm.disabled){this.safeSetState({status:nn},function(){d.props.onExited(_)});return}this.props.onExit(_),this.safeSetState({status:yu},function(){d.props.onExiting(_),d.onTransitionEnd(h.exit,function(){d.safeSetState({status:nn},function(){d.props.onExited(_)})})})},c.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},c.safeSetState=function(d,m){m=this.setNextCallback(m),this.setState(d,m)},c.setNextCallback=function(d){var m=this,h=!0;return this.nextCallback=function(_){h&&(h=!1,m.nextCallback=null,d(_))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},c.onTransitionEnd=function(d,m){this.setNextCallback(m);var h=this.props.nodeRef?this.props.nodeRef.current:Fi.findDOMNode(this),_=d==null&&!this.props.addEndListener;if(!h||_){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var b=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],p=b[0],x=b[1];this.props.addEndListener(p,x)}d!=null&&setTimeout(this.nextCallback,d)},c.render=function(){var d=this.state.status;if(d===Pi)return null;var m=this.props,h=m.children;m.in,m.mountOnEnter,m.unmountOnExit,m.appear,m.enter,m.exit,m.timeout,m.addEndListener,m.onEnter,m.onEntering,m.onEntered,m.onExit,m.onExiting,m.onExited,m.nodeRef;var _=Eh(m,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return on.createElement(Ah.Provider,{value:null},typeof h=="function"?h(d,_):on.cloneElement(on.Children.only(h),_))},u})(on.Component);ft.contextType=Ah;ft.propTypes={};function $n(){}ft.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:$n,onEntering:$n,onEntered:$n,onExit:$n,onExiting:$n,onExited:$n};ft.UNMOUNTED=Pi;ft.EXITED=nn;ft.ENTERING=ln;ft.ENTERED=Wn;ft.EXITING=yu;const $m=o=>!o||typeof o=="function"?o:u=>{o.current=u};function Cb(o,u){const c=$m(o),s=$m(u);return d=>{c&&c(d),s&&s(d)}}function Ab(o,u){return S.useMemo(()=>Cb(o,u),[o,u])}function Rb(o){return o&&"setState"in o?Fi.findDOMNode(o):o??null}const Rh=on.forwardRef(({onEnter:o,onEntering:u,onEntered:c,onExit:s,onExiting:d,onExited:m,addEndListener:h,children:_,childRef:b,...p},x)=>{const T=S.useRef(null),L=Ab(T,b),X=fe=>{L(Rb(fe))},G=fe=>W=>{fe&&T.current&&fe(T.current,W)},q=S.useCallback(G(o),[o]),z=S.useCallback(G(u),[u]),K=S.useCallback(G(c),[c]),P=S.useCallback(G(s),[s]),J=S.useCallback(G(d),[d]),se=S.useCallback(G(m),[m]),de=S.useCallback(G(h),[h]);return j.jsx(ft,{ref:x,...p,onEnter:q,onEntered:K,onEntering:z,onExit:P,onExited:se,onExiting:J,addEndListener:de,nodeRef:T,children:typeof _=="function"?(fe,W)=>_(fe,{...W,ref:X}):on.cloneElement(_,{ref:X})})});Rh.displayName="TransitionWrapper";const xb=40;function wb(o){if(!o||!o.style||!o.parentNode||!o.parentNode.style)return!1;const u=getComputedStyle(o);return u.display!=="none"&&u.visibility!=="hidden"&&getComputedStyle(o.parentNode).display!=="none"}const xh=S.forwardRef(({defaultActiveIndex:o=0,...u},c)=>{const{as:s="div",bsPrefix:d,slide:m=!0,fade:h=!1,controls:_=!0,indicators:b=!0,indicatorLabels:p=[],activeIndex:x,onSelect:T,onSlide:L,onSlid:X,interval:G=5e3,keyboard:q=!0,onKeyDown:z,pause:K="hover",onMouseOver:P,onMouseOut:J,wrap:se=!0,touch:de=!0,onTouchStart:fe,onTouchMove:W,onTouchEnd:Ce,prevIcon:Xe=j.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:ha="Previous",nextIcon:na=j.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Ve="Next",variant:ga,className:ia,children:xe,...O}=ab({defaultActiveIndex:o,...u},{activeIndex:"onSelect"}),k=xu(d,"carousel"),Q=lb(),ue=S.useRef(null),[ve,v]=S.useState("next"),[U,H]=S.useState(!1),[B,I]=S.useState(!1),[$,me]=S.useState(x||0);S.useEffect(()=>{!B&&x!==$&&(ue.current?v(ue.current):v((x||0)>$?"next":"prev"),m&&I(!0),me(x||0))},[x,B,$,m]),S.useEffect(()=>{ue.current&&(ue.current=null)});let Ne=0,we;ob(xe,(ee,he)=>{++Ne,he===x&&(we=ee.props.interval)});const dt=vh(we),ea=S.useCallback(ee=>{if(B)return;let he=$-1;if(he<0){if(!se)return;he=Ne-1}ue.current="prev",T?.(he,ee)},[B,$,T,se,Ne]),la=Ym(ee=>{if(B)return;let he=$+1;if(he>=Ne){if(!se)return;he=0}ue.current="next",T?.(he,ee)}),sn=S.useRef();S.useImperativeHandle(c,()=>({element:sn.current,prev:ea,next:la}));const Ha=Ym(()=>{!document.hidden&&wb(sn.current)&&(Q?ea():la())}),ja=ve==="next"?"start":"end";zv(()=>{m||(L?.($,ja),X?.($,ja))},[$]);const In=`${k}-item-${ve}`,zo=`${k}-item-${ja}`,il=S.useCallback(ee=>{_b(ee),L?.($,ja)},[L,$,ja]),ei=S.useCallback(()=>{I(!1),X?.($,ja)},[X,$,ja]),ai=S.useCallback(ee=>{if(q&&!/input|textarea/i.test(ee.target.tagName))switch(ee.key){case"ArrowLeft":ee.preventDefault(),Q?la(ee):ea(ee);return;case"ArrowRight":ee.preventDefault(),Q?ea(ee):la(ee);return}z?.(ee)},[q,z,ea,la,Q]),ti=S.useCallback(ee=>{K==="hover"&&H(!0),P?.(ee)},[K,P]),ko=S.useCallback(ee=>{H(!1),J?.(ee)},[J]),ll=S.useRef(0),Ke=S.useRef(0),ol=Gv(),rl=S.useCallback(ee=>{ll.current=ee.touches[0].clientX,Ke.current=0,K==="hover"&&H(!0),fe?.(ee)},[K,fe]),sl=S.useCallback(ee=>{ee.touches&&ee.touches.length>1?Ke.current=0:Ke.current=ee.touches[0].clientX-ll.current,W?.(ee)},[W]),un=S.useCallback(ee=>{if(de){const he=Ke.current;Math.abs(he)>xb&&(he>0?ea(ee):la(ee))}K==="hover"&&ol.set(()=>{H(!1)},G||void 0),Ce?.(ee)},[de,K,ea,la,ol,G,Ce]),ul=G!=null&&!U&&!B,cn=S.useRef();S.useEffect(()=>{var ee,he;if(!ul)return;const De=Q?ea:la;return cn.current=window.setInterval(document.visibilityState?Ha:De,(ee=(he=dt.current)!=null?he:G)!=null?ee:void 0),()=>{cn.current!==null&&clearInterval(cn.current)}},[ul,ea,la,dt,G,Ha,Q]);const cl=S.useMemo(()=>b&&Array.from({length:Ne},(ee,he)=>De=>{T?.(he,De)}),[b,Ne,T]);return j.jsxs(s,{ref:sn,...O,onKeyDown:ai,onMouseOver:ti,onMouseOut:ko,onTouchStart:rl,onTouchMove:sl,onTouchEnd:un,className:Ii(ia,k,m&&"slide",h&&`${k}-fade`,ga&&`${k}-${ga}`),children:[b&&j.jsx("div",{className:`${k}-indicators`,children:Qm(xe,(ee,he)=>j.jsx("button",{type:"button","data-bs-target":"","aria-label":p!=null&&p.length?p[he]:`Slide ${he+1}`,className:he===$?"active":void 0,onClick:cl?cl[he]:void 0,"aria-current":he===$},he))}),j.jsx("div",{className:`${k}-inner`,children:Qm(xe,(ee,he)=>{const De=he===$;return m?j.jsx(Rh,{in:De,onEnter:De?il:void 0,onEntered:De?ei:void 0,addEndListener:Tb,children:(oa,aa)=>S.cloneElement(ee,{...aa,className:Ii(ee.props.className,De&&oa!=="entered"&&In,(oa==="entered"||oa==="exiting")&&"active",(oa==="entering"||oa==="exiting")&&zo)})}):S.cloneElement(ee,{className:Ii(ee.props.className,De&&"active")})})}),_&&j.jsxs(j.Fragment,{children:[(se||x!==0)&&j.jsxs(du,{className:`${k}-control-prev`,onClick:ea,children:[Xe,ha&&j.jsx("span",{className:"visually-hidden",children:ha})]}),(se||x!==Ne-1)&&j.jsxs(du,{className:`${k}-control-next`,onClick:la,children:[na,Ve&&j.jsx("span",{className:"visually-hidden",children:Ve})]})]})]})});xh.displayName="Carousel";const ru=Object.assign(xh,{Caption:Th,Item:_h});function Ob({photos:o,title:u}){return j.jsx(ru,{fade:!0,style:{borderRadius:"20px",overflow:"hidden"},children:o.map((c,s)=>j.jsxs(ru.Item,{children:[j.jsx("img",{src:c,alt:`${u} photo ${s+1}`,style:{width:"100%",maxHeight:"500px",objectFit:"cover"}}),j.jsx(ru.Caption,{children:j.jsxs("p",{children:[u," - Photo ",s+1]})})]},s))})}function Nb(){const{id:o}=uh(),u=yh.find(c=>c.id===Number(o));return u?j.jsxs("div",{style:Oo.container,children:[j.jsx("h1",{style:Oo.title,children:u.name}),u.extraPhotos&&u.extraPhotos.length>0&&j.jsxs("div",{style:{marginBottom:"30px"},children:[j.jsx("h2",{style:Oo.sectionTitle,children:"Photos"}),j.jsx(Ob,{photos:u.extraPhotos})]}),u.description&&j.jsx("p",{style:Oo.description,children:u.description})]}):j.jsx("h1",{style:{textAlign:"center",marginTop:"50px"},children:"Place not found"})}const Oo={container:{maxWidth:"1100px",margin:"60px auto",padding:"30px 20px 60px 20px",fontFamily:"'Inter', sans-serif",color:"#ddd"},title:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",textAlign:"center",color:"#fff"},description:{fontSize:"18px",marginBottom:"30px",textAlign:"justify",color:"#eee",whiteSpace:"pre-line"},sectionTitle:{fontSize:"24px",fontWeight:"600",marginBottom:"15px",borderBottom:"2px solid #555",paddingBottom:"5px",color:"#fff"}},vu=[{id:1,title:"Best Beaches in Nicaragua",content:["Nicaragua is still one of the most underrated beach destinations in Central America, yet it offers some of the most diverse coastal landscapes you will find in the region. From the calm Caribbean waters to the powerful Pacific waves, the best beaches in Nicaragua offer something for every type of traveler.","If you are planning a trip and searching for the best beaches in Nicaragua, it is important to understand that the country has two completely different coasts. The Caribbean side is known for crystal-clear water and coral reefs, while the Pacific coast is famous for surfing, sunsets, and a more active beach culture.","One of the top destinations is Corn Island, a Caribbean paradise with white sand, turquoise water, and some of the best snorkeling in Nicaragua. Unlike crowded Caribbean destinations, Corn Island still feels authentic and relaxed, making it perfect for travelers who want a peaceful tropical experience.","On the Pacific side, San Juan del Sur is the most popular beach town in Nicaragua. It is known for surfing, nightlife, and easy access to nearby beaches like Playa Maderas, which is considered one of the best surf spots in the country.","For those looking to escape crowds, places like La Boquita offer a much more local and quiet beach experience. Here, you can enjoy fresh seafood, long beach walks, and a slower pace of life that reflects the authentic side of Nicaragua.","Another hidden gem is Little Corn Island, a small island where there are no cars and life moves at a completely different rhythm. It is one of the best places in Nicaragua for disconnecting and enjoying nature.","When visiting beaches in Nicaragua, timing is important. The dry season from December to April is ideal for sunny days and better travel conditions. During the rainy season, some beaches can still be beautiful, but travel logistics may become more complicated.","Overall, the best beaches in Nicaragua are not just about the scenery, they offer a combination of adventure, culture, and authenticity that is hard to find in more commercial destinations."]},{id:2,title:"Is Nicaragua Safe for Tourists in 2026? Honest Travel Safety Guide",content:["One of the most common questions travelers ask before visiting Central America is: is Nicaragua safe for tourists? The answer is not as simple as yes or no, but overall, Nicaragua remains one of the safer and more relaxed destinations in the region for travelers who take basic precautions.","Most tourist areas in Nicaragua, such as Granada, Ometepe Island, and San Juan del Sur, are considered safe and welcoming. These places rely heavily on tourism, and locals are generally friendly and helpful toward visitors.","Like in any country, safety in Nicaragua depends largely on awareness. Petty theft can happen, especially in crowded areas, so it is important to keep your belongings secure and avoid displaying expensive items.","Transportation is another key factor. Using trusted taxis, shuttle services, or hotel recommended drivers is always a safer option than random street transport, especially at night.","Walking during the day in tourist areas is generally safe, but it is recommended to avoid isolated places after dark. This is a common rule that applies to most travel destinations around the world.","When comparing Nicaragua to neighboring countries, many travelers report feeling safer here due to its slower pace of life and less aggressive tourism environment.","It is also important to stay informed. Before traveling, check local updates and follow basic travel advice, but avoid relying on outdated or exaggerated information found online.","In conclusion, Nicaragua is safe for tourists who travel responsibly. With common sense and preparation, you can enjoy one of the most authentic and beautiful travel experiences in Central America."]},{id:3,title:"Top 10 Things to Do in Nicaragua: Complete Travel Guide (2026)",content:["Nicaragua is one of the most diverse travel destinations in Central America, offering a combination of volcanoes, beaches, colonial cities, and outdoor adventures. If you are wondering about the best things to do in Nicaragua, the country offers experiences for every type of traveler.","One of the most unique places to visit is Ometepe Island, formed by two volcanoes rising from Lake Nicaragua. It is perfect for hiking, nature exploration, and experiencing local island life.","Granada is another must-visit destination. As one of the oldest colonial cities in the Americas, it offers colorful streets, historic architecture, and easy access to nearby natural attractions.","For beach lovers, San Juan del Sur provides a mix of surfing, nightlife, and coastal relaxation. It is one of the best places in Nicaragua for those looking for a lively atmosphere.","If you are looking for adventure, volcano boarding at Cerro Negro is a must. Sliding down a volcano is one of the most unique activities you can experience in Nicaragua.","Nature lovers should not miss Mombacho Volcano, where you can hike through cloud forests and observe wildlife in a protected environment.","For something different, Somoto Canyon offers hiking, swimming, and river exploration in a dramatic natural setting far from typical tourist routes.","The Caribbean side of Nicaragua, including Corn Island and Laguna de Perlas, provides a completely different experience, focused on beaches, culture, and relaxation.","Overall, the best things to do in Nicaragua combine adventure, culture, and nature, making it one of the most complete travel destinations in Central America."]},{id:4,title:"Nicaragua 7 Day Itinerary: The Perfect Travel Plan for First Time Visitors",content:["Planning a trip to Nicaragua can feel overwhelming because there are so many unique places to visit. This Nicaragua 7 day itinerary is designed to help first time visitors experience the best of the country in a balanced and realistic way.","Start your trip in Granada, one of the most beautiful colonial cities in Central America. Spend your first two days exploring the city, visiting churches, and taking a boat tour of the nearby islets.","From Granada, travel to Ometepe Island for days three and four. Here you can hike volcanoes, swim in natural springs, and experience a slower, more traditional way of life.","Next, head to San Juan del Sur for days five and six. This coastal town is perfect for relaxing, surfing, and enjoying sunsets on the Pacific coast.","On your final day, visit Masaya Volcano, one of the few places in the world where you can see active lava inside a crater. It is a perfect way to end your trip with a unique experience.","This itinerary focuses on minimizing travel time while maximizing experiences, making it ideal for travelers who want to see the highlights of Nicaragua in just one week.","If you have more time, you can extend your trip to include places like León, Corn Island, or Somoto Canyon for a deeper exploration of the country.","In conclusion, this Nicaragua itinerary provides a complete introduction to the country, combining culture, nature, and adventure in a way that few destinations can offer."]}];function Db(){return j.jsxs("div",{className:"blog-container",children:[j.jsx("h1",{className:"blog-title",children:"Travel Blog"}),vu.length===0?j.jsx("p",{children:"No articles yet"}):j.jsx("div",{className:"blog-grid",children:vu.map(o=>j.jsx("div",{className:"blog-card",children:j.jsxs(rn,{to:`/blog/${o.id}`,className:"blog-link",children:[j.jsx("h2",{children:o.title}),j.jsx("p",{children:"Read more →"})]})},o.id))})]})}function Ub(){const{id:o}=uh(),u=parseInt(o,10),c=vu.find(s=>s.id===u);return c?j.jsx("div",{className:"blogpost-container",children:j.jsxs("div",{className:"blogpost-content",children:[j.jsx("h1",{children:c.title}),c.content.map((s,d)=>j.jsx("p",{children:s},d))]})}):j.jsx("h2",{className:"not-found",children:"Post not found"})}function jb(){return j.jsxs(Sv,{children:[j.jsx(Nv,{}),j.jsxs(Wy,{children:[j.jsx(tn,{path:"/",element:j.jsx(Uv,{})}),j.jsx(tn,{path:"/guide",element:j.jsx(jv,{})}),j.jsx(tn,{path:"/information",element:j.jsx(Lv,{})}),j.jsx(tn,{path:"/place/:id",element:j.jsx(Nb,{})}),j.jsx(tn,{path:"/blog",element:j.jsx(Db,{})}),j.jsx(tn,{path:"/blog/:id",element:j.jsx(Ub,{})})]})]})}const su=sessionStorage.redirect;delete sessionStorage.redirect;su&&su!==location.href&&window.history.replaceState(null,null,su);Ip.createRoot(document.getElementById("root")).render(j.jsx(S.StrictMode,{children:j.jsx(jb,{})}));
