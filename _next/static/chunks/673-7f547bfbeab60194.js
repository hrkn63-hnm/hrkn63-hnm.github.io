(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{861:function(e,t,n){"use strict";n.d(t,{FT:function(){return i}});var r=n(7294),o=n(5893);const a=["as","disabled"];function i({tagName:e,disabled:t,href:n,target:r,rel:o,onClick:a,tabIndex:i=0,type:u}){e||(e=null!=n||null!=r||null!=o?"a":"button");const s={tagName:e};if("button"===e)return[{type:u||"button",disabled:t},s];const c=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==a||a(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:t?void 0:i,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},s]}const u=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,u=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);const[s,{tagName:c}]=i(Object.assign({tagName:n,disabled:r},u));return(0,o.jsx)(c,Object.assign({},u,s,{ref:t}))}));u.displayName="Button"},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},1143:function(e){"use strict";e.exports=function(e,t,n,r,o,a,i,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,u],l=0;(s=new Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){u=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},u=n(1003),s=n(880),c=n(9246);function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function d(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var p=i.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,p=e.href,v=e.as,h=e.children,m=e.prefetch,b=e.passHref,y=e.replace,x=e.shallow,E=e.scroll,g=e.locale,C=e.onClick,w=e.onMouseEnter,N=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,a&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var k,S=!1!==m,j=s.useRouter(),O=i.default.useMemo((function(){var e=o(u.resolveHref(j,p,!0),2),t=e[0],n=e[1];return{href:t,as:v?u.resolveHref(j,v):n||t}}),[j,p,v]),R=O.href,M=O.as,T=i.default.useRef(R),L=i.default.useRef(M);a&&(k=i.default.Children.only(n));var P=a?k&&"object"===typeof k&&k.ref:t,$=o(c.useIntersection({rootMargin:"200px"}),3),D=$[0],I=$[1],_=$[2],A=i.default.useCallback((function(e){L.current===M&&T.current===R||(_(),L.current=M,T.current=R),D(e),P&&("function"===typeof P?P(e):"object"===typeof P&&(P.current=e))}),[M,P,R,_,D]);i.default.useEffect((function(){var e=I&&S&&u.isLocalURL(R),t="undefined"!==typeof g?g:j&&j.locale,n=f[R+"%"+M+(t?"%"+t:"")];e&&!n&&d(j,R,M,{locale:t})}),[M,R,I,g,S,j]);var U={ref:A,onClick:function(e){a||"function"!==typeof C||C(e),a&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}))}(e,j,R,M,y,x,E,g)},onMouseEnter:function(e){a||"function"!==typeof w||w(e),a&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),u.isLocalURL(R)&&d(j,R,M,{priority:!0})}};if(!a||b||"a"===k.type&&!("href"in k.props)){var K="undefined"!==typeof g?g:j&&j.locale,F=j&&j.isLocaleDomain&&u.getDomainLocale(M,K,j&&j.locales,j&&j.domainLocales);U.href=F||u.addBasePath(u.addLocale(M,K,j&&j.defaultLocale))}return a?i.default.cloneElement(k,U):i.default.createElement("a",Object.assign({},N,U),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){u=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,l=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],v=o(a.useState(t?t.current:null),2),h=v[0],m=v[1],b=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),c.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),s.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,d]),y=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&m(t.current)}),[t]),[b,d,y]};var a=n(7294),i=n(4686),u="undefined"!==typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},5005:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),a=n(7294),i=n(861),u=n(6792),s=n(5893);const c=a.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:a,className:c,...l},f)=>{const d=(0,u.vE)(t,"btn"),[p,{tagName:v}]=(0,i.FT)({tagName:e,...l}),h=v;return(0,s.jsx)(h,{...p,...l,ref:f,className:o()(c,d,a&&"active",n&&`${d}-${n}`,r&&`${d}-${r}`,l.href&&l.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c},760:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r=n(7294);var o=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function a(e){var t=o(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var i=function(e,t){var n=(0,r.useRef)(!0);(0,r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function u(e){var t=function(e){var t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)((function(){return function(){return t.current()}}),[])}var s=Math.pow(2,31)-1;function c(e,t,n){var r=n-Date.now();e.current=r<=s?setTimeout(t,r):setTimeout((function(){return c(e,t,n)}),s)}function l(){var e=function(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),t=(0,r.useRef)();return u((function(){return clearTimeout(t.current)})),(0,r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=s?t.current=setTimeout(r,o):c(t,r,Date.now()+o))},clear:n}}),[])}var f="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!==typeof document||f?r.useLayoutEffect:r.useEffect,new WeakMap;var d=n(861),p=n(5893);const v=["onKeyDown"];const h=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,v);const[o]=(0,d.FT)(Object.assign({tagName:"a"},r)),i=a((e=>{o.onKeyDown(e),null==n||n(e)}));return((u=r.href)&&"#"!==u.trim()||r.role)&&"button"!==r.role?(0,p.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,p.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:i}));var u}));h.displayName="Anchor";var m=h,b=n(4184),y=n.n(b);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(1143);function g(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function C(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function w(e,t){return Object.keys(t).reduce((function(n,o){var a,i=n,u=i[g(o)],s=i[o],c=E(i,[g(o),o].map(C)),l=t[o],f=function(e,t,n){var o=(0,r.useRef)(void 0!==e),a=(0,r.useState)(t),i=a[0],u=a[1],s=void 0!==e,c=o.current;return o.current=s,!s&&c&&i!==t&&u(t),[s?e:i,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(s,u,e[l]),d=f[0],p=f[1];return x({},c,((a={})[o]=d,a[l]=p,a))}),e)}function N(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function k(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function S(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}N.__suppressDeprecationWarning=!0,k.__suppressDeprecationWarning=!0,S.__suppressDeprecationWarning=!0;var j=/-(.)/g;var O=n(6792);const R=e=>{return e[0].toUpperCase()+(t=e,t.replace(j,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var M=function(e,{displayName:t=R(e),Component:n,defaultProps:o}={}){const a=r.forwardRef((({className:t,bsPrefix:r,as:o=n||"div",...a},i)=>{const u=(0,O.vE)(r,e);return(0,p.jsx)(o,{ref:i,className:y()(t,u),...a})}));return a.defaultProps=o,a.displayName=t,a}("carousel-caption");const T=r.forwardRef((({as:e="div",bsPrefix:t,className:n,...r},o)=>{const a=y()(n,(0,O.vE)(t,"carousel-item"));return(0,p.jsx)(e,{ref:o,...r,className:a})}));T.displayName="CarouselItem";var L=T;function P(e,t){let n=0;return r.Children.map(e,(e=>r.isValidElement(e)?t(e,n++):e))}function $(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var D=/([A-Z])/g;var I=/^ms-/;function _(e){return function(e){return e.replace(D,"-$1").toLowerCase()}(e).replace(I,"-ms-")}var A=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var U=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(_(t))||function(e,t){return $(e).getComputedStyle(e,t)}(e).getPropertyValue(_(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!A.test(e))}(o)?n+=_(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(_(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},K=!("undefined"===typeof window||!window.document||!window.document.createElement),F=!1,H=!1;try{var Z={get passive(){return F=!0},get once(){return H=F=!0}};K&&(window.addEventListener("test",Z,Z),window.removeEventListener("test",Z,!0))}catch(he){}var B=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!H){var o=r.once,a=r.capture,i=n;!H&&o&&(i=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=i),e.addEventListener(t,i,F?r:a)}e.addEventListener(t,n,r)};var V=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var X=function(e,t,n,r){return B(e,t,n,r),function(){V(e,t,n,r)}};function W(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=X(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function z(e,t,n,r){null==n&&(n=function(e){var t=U(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=W(e,n,r),a=X(e,"transitionend",t);return function(){o(),a()}}function G(e,t){const n=U(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function Y(e,t){const n=G(e,"transitionDuration"),r=G(e,"transitionDelay"),o=z(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}var J=n(3935),Q=!1,ee=r.createContext(null),te="unmounted",ne="exited",re="entering",oe="entered",ae="exiting",ie=function(e){var t,n;function o(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=ne,r.appearStatus=re):o=oe:o=t.unmountOnExit||t.mountOnEnter?te:ne,r.state={status:o},r.nextCallback=null,r}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,q(t,n),o.getDerivedStateFromProps=function(e,t){return e.in&&t.status===te?{status:ne}:null};var a=o.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==re&&n!==oe&&(t=re):n!==re&&n!==oe||(t=ae)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},a.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===re?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===ne&&this.setState({status:te})},a.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[J.findDOMNode(this),r],a=o[0],i=o[1],u=this.getTimeouts(),s=r?u.appear:u.enter;!e&&!n||Q?this.safeSetState({status:oe},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,i),this.safeSetState({status:re},(function(){t.props.onEntering(a,i),t.onTransitionEnd(s,(function(){t.safeSetState({status:oe},(function(){t.props.onEntered(a,i)}))}))})))},a.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:J.findDOMNode(this);t&&!Q?(this.props.onExit(r),this.safeSetState({status:ae},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:ne},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:ne},(function(){e.props.onExited(r)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:J.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],i=o[1];this.props.addEndListener(a,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if(e===te)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,E(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(ee.Provider,{value:null},"function"===typeof n?n(e,o):r.cloneElement(r.Children.only(n),o))},o}(r.Component);function ue(){}ie.contextType=ee,ie.propTypes={},ie.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ue,onEntering:ue,onEntered:ue,onExit:ue,onExiting:ue,onExited:ue},ie.UNMOUNTED=te,ie.EXITED=ne,ie.ENTERING=re,ie.ENTERED=oe,ie.EXITING=ae;var se=ie,ce=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var le=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=ce(e),r=ce(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var fe=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:a,onExited:i,addEndListener:u,children:s,childRef:c,...l},f)=>{const d=(0,r.useRef)(null),v=le(d,c),h=e=>{var t;v((t=e)&&"setState"in t?J.findDOMNode(t):null!=t?t:null)},m=e=>t=>{e&&d.current&&e(d.current,t)},b=(0,r.useCallback)(m(e),[e]),y=(0,r.useCallback)(m(t),[t]),x=(0,r.useCallback)(m(n),[n]),E=(0,r.useCallback)(m(o),[o]),g=(0,r.useCallback)(m(a),[a]),C=(0,r.useCallback)(m(i),[i]),w=(0,r.useCallback)(m(u),[u]);return(0,p.jsx)(se,{ref:f,...l,onEnter:b,onEntered:x,onEntering:y,onExit:E,onExited:C,onExiting:g,addEndListener:w,nodeRef:d,children:"function"===typeof s?(e,t)=>s(e,{...t,ref:h}):r.cloneElement(s,{ref:h})})}));const de={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};const pe=r.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:u,slide:s,fade:c,controls:f,indicators:d,indicatorLabels:v,activeIndex:h,onSelect:b,onSlide:x,onSlid:E,interval:g,keyboard:C,onKeyDown:N,pause:k,onMouseOver:S,onMouseOut:j,wrap:R,touch:M,onTouchStart:T,onTouchMove:L,onTouchEnd:$,prevIcon:D,prevLabel:I,nextIcon:_,nextLabel:A,variant:U,className:K,children:F,...H}=w(e,{activeIndex:"onSelect"}),Z=(0,O.vE)(u,"carousel"),B=(0,O.SC)(),V=(0,r.useRef)(null),[X,W]=(0,r.useState)("next"),[z,G]=(0,r.useState)(!1),[q,J]=(0,r.useState)(!1),[Q,ee]=(0,r.useState)(h||0);(0,r.useEffect)((()=>{q||h===Q||(V.current?W(V.current):W((h||0)>Q?"next":"prev"),s&&J(!0),ee(h||0))}),[h,q,Q,s]),(0,r.useEffect)((()=>{V.current&&(V.current=null)}));let te,ne=0;!function(e,t){let n=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&t(e,n++)}))}(F,((e,t)=>{++ne,t===h&&(te=e.props.interval)}));const re=o(te),oe=(0,r.useCallback)((e=>{if(q)return;let t=Q-1;if(t<0){if(!R)return;t=ne-1}V.current="prev",null==b||b(t,e)}),[q,Q,b,R,ne]),ae=a((e=>{if(q)return;let t=Q+1;if(t>=ne){if(!R)return;t=0}V.current="next",null==b||b(t,e)})),ie=(0,r.useRef)();(0,r.useImperativeHandle)(t,(()=>({element:ie.current,prev:oe,next:ae})));const ue=a((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&(B?oe():ae())})),se="next"===X?"start":"end";i((()=>{s||(null==x||x(Q,se),null==E||E(Q,se))}),[Q]);const ce=`${Z}-item-${X}`,le=`${Z}-item-${se}`,de=(0,r.useCallback)((e=>{!function(e){e.offsetHeight}(e),null==x||x(Q,se)}),[x,Q,se]),pe=(0,r.useCallback)((()=>{J(!1),null==E||E(Q,se)}),[E,Q,se]),ve=(0,r.useCallback)((e=>{if(C&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(B?ae(e):oe(e));case"ArrowRight":return e.preventDefault(),void(B?oe(e):ae(e))}null==N||N(e)}),[C,N,oe,ae,B]),he=(0,r.useCallback)((e=>{"hover"===k&&G(!0),null==S||S(e)}),[k,S]),me=(0,r.useCallback)((e=>{G(!1),null==j||j(e)}),[j]),be=(0,r.useRef)(0),ye=(0,r.useRef)(0),xe=l(),Ee=(0,r.useCallback)((e=>{be.current=e.touches[0].clientX,ye.current=0,"hover"===k&&G(!0),null==T||T(e)}),[k,T]),ge=(0,r.useCallback)((e=>{e.touches&&e.touches.length>1?ye.current=0:ye.current=e.touches[0].clientX-be.current,null==L||L(e)}),[L]),Ce=(0,r.useCallback)((e=>{if(M){const t=ye.current;Math.abs(t)>40&&(t>0?oe(e):ae(e))}"hover"===k&&xe.set((()=>{G(!1)}),g||void 0),null==$||$(e)}),[M,k,oe,ae,xe,g,$]),we=null!=g&&!z&&!q,Ne=(0,r.useRef)();(0,r.useEffect)((()=>{var e,t;if(!we)return;const n=B?oe:ae;return Ne.current=window.setInterval(document.visibilityState?ue:n,null!=(e=null!=(t=re.current)?t:g)?e:void 0),()=>{null!==Ne.current&&clearInterval(Ne.current)}}),[we,oe,ae,re,g,ue,B]);const ke=(0,r.useMemo)((()=>d&&Array.from({length:ne},((e,t)=>e=>{null==b||b(t,e)}))),[d,ne,b]);return(0,p.jsxs)(n,{ref:ie,...H,onKeyDown:ve,onMouseOver:he,onMouseOut:me,onTouchStart:Ee,onTouchMove:ge,onTouchEnd:Ce,className:y()(K,Z,s&&"slide",c&&`${Z}-fade`,U&&`${Z}-${U}`),children:[d&&(0,p.jsx)("div",{className:`${Z}-indicators`,children:P(F,((e,t)=>(0,p.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=v&&v.length?v[t]:`Slide ${t+1}`,className:t===Q?"active":void 0,onClick:ke?ke[t]:void 0,"aria-current":t===Q},t)))}),(0,p.jsx)("div",{className:`${Z}-inner`,children:P(F,((e,t)=>{const n=t===Q;return s?(0,p.jsx)(fe,{in:n,onEnter:n?de:void 0,onEntered:n?pe:void 0,addEndListener:Y,children:(t,o)=>r.cloneElement(e,{...o,className:y()(e.props.className,n&&"entered"!==t&&ce,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&le)})}):r.cloneElement(e,{className:y()(e.props.className,n&&"active")})}))}),f&&(0,p.jsxs)(p.Fragment,{children:[(R||0!==h)&&(0,p.jsxs)(m,{className:`${Z}-control-prev`,onClick:oe,children:[D,I&&(0,p.jsx)("span",{className:"visually-hidden",children:I})]}),(R||h!==ne-1)&&(0,p.jsxs)(m,{className:`${Z}-control-next`,onClick:ae,children:[_,A&&(0,p.jsx)("span",{className:"visually-hidden",children:A})]})]})]})}));pe.displayName="Carousel",pe.defaultProps=de;var ve=Object.assign(pe,{Caption:M,Item:L})},1555:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),a=n(7294),i=n(6792),u=n(5893);const s=a.forwardRef(((e,t)=>{const[{className:n,...r},{as:a="div",bsPrefix:s,spans:c}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,i.vE)(t,"col");const a=(0,i.pi)(),u=[],s=[];return a.forEach((e=>{const n=r[e];let o,a,i;delete r[e],"object"===typeof n&&null!=n?({span:o,offset:a,order:i}=n):o=n;const c="xs"!==e?`-${e}`:"";o&&u.push(!0===o?`${t}${c}`:`${t}${c}-${o}`),null!=i&&s.push(`order${c}-${i}`),null!=a&&s.push(`offset${c}-${a}`)})),[{...r,className:o()(n,...u,...s)},{as:e,bsPrefix:t,spans:u}]}(e);return(0,u.jsx)(a,{...r,ref:t,className:o()(n,!c.length&&s)})}));s.displayName="Col",t.Z=s},682:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),a=n(7294),i=n(6792),u=n(5893);const s=a.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...a},s)=>{const c=(0,i.vE)(e,"container"),l="string"===typeof t?`-${t}`:"-fluid";return(0,u.jsx)(n,{ref:s,...a,className:o()(r,t?`${c}${l}`:c)})}));s.displayName="Container",s.defaultProps={fluid:!1},t.Z=s},1608:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),a=n(7294),i=n(6792),u=n(5893);const s=a.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},a)=>{const s=(0,i.vE)(e,"row"),c=(0,i.pi)(),l=`${s}-cols`,f=[];return c.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const o="xs"!==e?`-${e}`:"";null!=n&&f.push(`${l}${o}-${n}`)})),(0,u.jsx)(n,{ref:a,...r,className:o()(t,s,...f)})}));s.displayName="Row",t.Z=s},6792:function(e,t,n){"use strict";n.d(t,{SC:function(){return l},pi:function(){return c},vE:function(){return s}});var r=n(7294);n(5893);const o=["xxl","xl","lg","md","sm","xs"],a=r.createContext({prefixes:{},breakpoints:o}),{Consumer:i,Provider:u}=a;function s(e,t){const{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}function c(){const{breakpoints:e}=(0,r.useContext)(a);return e}function l(){const{dir:e}=(0,r.useContext)(a);return"rtl"===e}}}]);