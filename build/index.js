!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("mota"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define("MotaValidation",[,,],e):"object"==typeof exports?exports.MotaValidation=e(require("mota"),require("react"),require("react-dom")):t.MotaValidation=e(t.mota,t.React,t.ReactDOM)}("undefined"!=typeof self?self:this,function(t,e,n){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=9)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(t){t[t.unknown=-3]="unknown",t[t.untested=-2]="untested",t[t.testing=-1]="testing",t[t.failed=0]="failed",t[t.succeed=1]="succeed"}(e.states||(e.states={}))},function(t,e,n){"use strict";function r(){}function i(t){return Object.prototype.toString.call(t)}function o(t){return/^\[object (.+)\]$/i.exec(i(t))[1]}function s(t){return void 0===t||null===t}function u(t){return s(t)?t:t.trim?t.trim():t.replace(/(^[\\s]*)|([\\s]*$)/g,"")}function a(t,e,n){return s(t)?t:t.replace(new RegExp(e,"g"),n)}function c(t,e){return!s(t)&&!s(e)&&0===t.indexOf(e)}function l(t,e){return!s(t)&&!s(e)&&t.indexOf(e)>-1}function f(t,e){return!s(t)&&!s(e)&&t.indexOf(e)===t.length-e.length}function p(t,e){return!s(t)&&!s(e)&&(e in t||t.hasOwnProperty(e))}function h(t){return!s(t)&&"function"==typeof t}function d(t){return!s(t)&&"AsyncFunction"===o(t)}function v(t){return!s(t)&&"GeneratorFunction"===o(t)}function _(t){return!s(t)&&"String"===o(t)}function m(t){return!s(t)&&"Number"===o(t)}function b(t){return!s(t)&&"Boolean"===o(t)}function g(t){return!s(t)&&(window.Element?t instanceof Element:t.tagName&&t.nodeType&&t.nodeName&&t.attributes&&t.ownerDocument)}function y(t){return!s(t)&&t instanceof Text}function O(t){if(s(t))return!1;var e=o(t);return"Object"===e||"Array"===e}function w(t){if(s(t))return!1;var e="Array"===o(t),n=t instanceof Array,r=!_(t)&&m(t.length)&&h(t.splice),i=!_(t)&&m(t.length)&&t[0];return e||n||r||i}function j(t){return!s(t)&&t instanceof Date}function P(t){return t instanceof RegExp}function E(t){return s(t)?[]:Array.prototype.slice.call(t)}function x(t){return m(t)?new Date(t):_(t)?new Date(a(a(t,"-","/"),"T"," ")):j(t)?t:null}function M(t,e,n){if(!s(t)&&!s(e))if(w(t))for(var r=t.length,i=0;i<r;i++){var o=e.call(n||t[i],i,t[i]);if(!s(o))return o}else for(var u in t){var o=e.call(n||t[u],u,t[u]);if(!s(o))return o}}function L(t,e,n){if(s(e)||s(t))return t;t=x(t),n=n||{};var r={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"w+":t.getDay(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in r)if(new RegExp("("+i+")").test(e)){var o=r[i];o=n[o]||o,e=e.replace(RegExp.$1,1==RegExp.$1.length?o:("00"+o).substr((""+o).length))}return e}function S(t,e,n){return e=e||(w(t)?[]:{}),M(t,function(r){if(!(n&&n.indexOf(r)>-1))if(delete e[r],Object.getOwnPropertyDescriptor)try{Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}catch(n){e[r]=t[r]}else e[r]=t[r]}),e}function A(t,e){if(s(t)||_(t)||m(t)||b(t)||j(t))return t;var n=t;try{n=new t.constructor}catch(t){}return M(t,function(t,r){n[t]==r||l(e,t)||(O(r)?n[t]=A(r,e):n[t]=r)}),["toString","valueOf"].forEach(function(r){l(e,r)||T(n,r,t[r])}),n}function N(t,e,n,r,i){if(r)switch(r){case 1:return N(t.prototype,e.prototype,n,0);case 2:N(t.prototype,e.prototype,n,0);break;case 3:return N(t,e.prototype,n,0);case 4:return N(t.prototype,e,n,0)}return e=e||{},t=t||(w(e)?[]:{}),C(e).forEach(function(r){l(n,r)||i&&s(e[r])||(!O(e[r])||e[r].constructor!=Object&&e[r].constructor!=Array&&null!=e[r].constructor?t[r]=e[r]:t[r]=N(t[r],e[r],n,0,i))}),t}function T(t,e,n){if(arguments.length<1)throw new Error("Parameter missing");if(arguments.length<2)return M(t,function(e,n){T(t,e,n)});if(arguments.length<3)return T(t,e,t[e]);try{Object.defineProperty(t,e,{get:function(){return n},set:function(){throw new Error("Cannot assign to final property:"+e)},enumerable:!1,configurable:!1})}catch(r){t[e]=n}}function C(t){if(Object.keys)return Object.keys(t);var e=[];return M(t,function(t){e.push(t)}),e}function $(t,e){function n(){}if(Object.create)return Object.create(t,e);n.prototype=t;var r=new n;return e&&S(e,r),r}function k(t,e){if(Object.setPrototypeOf)return Object.setPrototypeOf(t,e||$(null));"__proto__"in Object||S(e,t),t.__proto__=e}function D(t){return t.__proto__?t.__proto__:Object.getPrototypeOf?Object.getPrototypeOf(t):t.constructor?t.constructor.prototype:void 0}function R(t,e){if(t===e)return!0;if(!O(t)||!O(e))return!1;var n=C(t),r=C(e);if(n.length!==r.length)return!1;var i=n.concat(r),o=$(null),s=!0;return M(i,function(n,r){o[r]||(R(t[r],e[r])||(s=!1),o[r]=!0)}),s}function F(t,e,n,r){if(r||(r=[n,n=r][0]),n=Math.abs(n||1),t<e)for(var i=t;i<=e;i+=n)r(i);else for(var i=t;i>=e;i-=n)r(i)}function q(){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}function I(t,e){var n=w(t)?[]:{};return M(t,function(t,r){n[t]=e(t,r)}),n}function H(t,e,n){s(t)||s(e)||""===e||(w(e)||(e=e.replace(/\[/,".").replace(/\]/,".").split(".")),M(e,function(r,i){s(i)||i.length<1||(r===e.length-1?t[i]=n:(t[i]=t[i]||{},t=t[i]))}))}function V(t,e,n){return s(t)||s(e)||""===e?t:(w(e)||(e=e.replace(/\[/,".").replace(/\]/,".").split(".")),M(e,function(e,r){s(t)||s(r)||r.length<1||(t=n?n(t[r],r,t):t[r])}),t)}function W(t){if(s(t))return t;var e=[];return M(t,function(t,n){e.indexOf(n)>-1||e.push(n)}),e}function z(t){if(!t)return[];var e=t.toString(),n=e.split(")")[0].split("=>")[0].split("(");return(n[1]||n[0]).split(",").map(function(t){return u(t)}).filter(function(t){return"function"!=t})}function B(t,e){if(!t)return t;e=e||40;var n=t.length,r=e/2;return n>e?t.substr(0,r)+"..."+t.substr(n-r):t}function U(t){return _(t)?t.substring(0,1).toUpperCase()+t.substring(1):""}function G(t){return _(t)?t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"):""}function Y(t,e){return _(t)?(t&&(t=t.replace(/\-[a-z0-9]/g,function(t){return t.slice(1).toUpperCase()}),t=t.replace(/^[a-z]/i,function(t){return e?t.toUpperCase():t.toLowerCase()})),t):""}function Z(t){return _(t)?(t&&(t=t.replace(/([A-Z])/g,"-$1"),"-"==t[0]&&(t=t.slice(1))),t.toLowerCase()):""}function J(t){var e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;return t.replace(e,"<$1></$2>")}function K(t){t=t||" ";var e=document.createElement("div");e.innerHTML=J(u(t));var n=E(e.childNodes);return M(n,function(t,n){e.removeChild(n)}),n}Object.defineProperty(e,"__esModule",{value:!0}),e.noop=r,e.toString=i,e.getType=o,e.isNull=s,e.trim=u,e.replace=a,e.startWith=c,e.contains=l,e.endWith=f,e.has=p,e.hasProperty=p,e.isFunction=h,e.isAsyncFunction=d,e.isGeneratorFunction=v,e.isString=_,e.isNumber=m,e.isBoolean=b,e.isElement=g,e.isText=y,e.isObject=O,e.isArray=w,e.isDate=j,e.isRegexp=P,e.toArray=E,e.toDate=x,e.each=M,e.formatDate=L,e.copy=S,e.clone=A,e.mix=N,e.final=T,e.keys=C,e.create=$,e.setPrototypeOf=k,e.getPrototypeOf=D,e.deepEqual=R,e.fromTo=F,e.newGuid=q,e.map=I,e.setByPath=H,e.getByPath=V,e.unique=W,e.getFunctionArgumentNames=z,e.short=B,e.firstUpper=U,e.escapeRegExp=G,e.toCamelCase=Y,e.toSplitCase=Z,e.htmlPrefilter=J,e.parseHTML=K},function(t,e,n){"use strict";function r(t){return t||(t=""),o(t)?i.createElement("span",{children:t}):t}Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),o=n(1).isString;e.toElement=r},function(t,e,n){"use strict";function r(t){var e=function(){},n=new Promise(function(n,r){e=function(){n=null,r=null},t.then(function(t){return n?n(t):null}),t.catch(function(t){return r?r(t):null})});return n.abort=e,n}Object.defineProperty(e,"__esModule",{value:!0}),e.abortable=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(){function t(t,e,n,i,o){void 0===e&&(e=[]),void 0===n&&(n=r.states.untested),void 0===i&&(i=""),void 0===o&&(o=null),this.bind=t,this.rules=e,this.state=n,this.message=i,this.pending=o}return t}();e.TestItem=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.builtIn={any:function(t){return!0},required:function(t){return!!t},nonblank:function(t){return/[\S]+/.test(t)},number:function(t){return!t||!isNaN(t)},range:function(t,e){return function(n){return!n||n>=t&&n<=e}},len:function(t,e){return function(n){return n.length>=t&&n.length<=e}},email:function(t){return!t||/[\S]+\@[\S]+/gi.test(t)},zh:function(t){return!t||/^[\u4e00-\u9fa5\s]{0,}$/.test(t)},en:function(t){return!t||/^[a-z\s]+$/.test(t)},ipv4:function(t){return!t||/\d+\.\d+\.\d+\.\d+/.test(t)},url:function(t){return!t||/^[\S]+\:\/\//.test(t)}}},function(t,e,n){"use strict";function r(t){var e=t.validation,n=t.bind,r=t.alias,s=t.children,u=t.rules,a=void 0===u?s:u;if(!e)return i.toElement();a&&e.setRule(n,a,r);var c=e.item(n);return c&&c.state===o.states.failed&&c.message?i.toElement(c.message):i.toElement()}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(0);e.Alert=r},function(t,n){t.exports=e},function(t,e,n){"use strict";function r(t,e){var n=s.findDOMNode(t);n&&n.setAttribute(p,String(e))}function i(t){var e=t.validation,n=t.bind,i=t.rules,s=t.alias,c=t.children;if(c&&l(c)&&c.length>0)throw Error("The State("+n+") can only have a sub element");if(!e)return u.toElement(c);i&&e.setRule(n,i,s);var p=e.state(n);return f(p)&&(p=a.states.untested),o.cloneElement(u.toElement(c),{ref:function(t){return r(t,p)}})}Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),s=n(15),u=n(2),a=n(0),c=n(1),l=c.isArray,f=c.isNull,p="data-state";!function(){var t=document.createElement("style");t.innerHTML="["+p+"]{\n    transition-duration:.2s;transition-property:box-shadow;\n  }\n  ["+p+'="0"]{\n    outline:none;box-shadow:0 0 2px 1px rgba(255,0,0,.8);\n  }',(document.head||document.body).appendChild(t)}(),e.Field=i},function(t,e,n){t.exports=n(10)},function(t,e,n){"use strict";function r(t){if(t.model)return t.__validation||(t.__validation=new u.Validation(t)),t.__validation}function i(t,e){void 0===e&&(e={});var n=t.prototype;Object.defineProperty(n,"validation",{get:function(){return r(this)}}),d(n,function(){this.validation&&(!0===e.initial&&this.validation.test(),!1!==e.auto&&this.validation.startWatch())}),v(n,function(){this.validation&&(this.validation.stopWatch(),this.validation.distory())})}function o(t){return void 0===t&&(t={}),h(t)?i(t):function(e){return i(e,t)}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(11),u=n(12);e.Validation=u.Validation;var a=n(5);e.builtIn=a.builtIn,e.tests=a.builtIn;var c=n(4);e.TestItem=c.TestItem;var l=n(6);e.Alert=l.Alert;var f=n(8);e.Field=f.Field;var p=n(0);e.states=p.states;var h=n(1).isFunction,d=s.utils.registerMountHandler,v=s.utils.registerUnmountHandler;e.validation=o,e.default=o},function(e,n){e.exports=t},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function u(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,u)}a((r=r.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&n[0]?o.return:n[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,n[1])).done)return s;switch(o=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,o=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],o=0}finally{i=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,s,u,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u};Object.defineProperty(e,"__esModule",{value:!0});var u=n(13),a=n(4),c=n(5),l=n(6);e.Alert=l.Alert;var f=n(8),p=n(16),h=n(0),d=n(1),v=d.getByPath,_=d.isFunction,m=d.isString,b=d.each,g=n(17),y=function(t){function e(e){var n=t.call(this)||this;return n.__items={},n.__watchers=[],n.__aliases={},n.__testCount=0,n.updateComponent=function(t){n.component&&(t=t||n.items,n.component.setState({validation:t}))},n.setRule=function(t,e,r){n.items[t]||(n.items[t]=new a.TestItem(t)),e&&(n.items[t].rules=Array.isArray(e)?e:[e]),r&&(n.aliases[r]=t)},n.setState=function(t,e,r,i){void 0===r&&(r=""),void 0===i&&(i=!0),n.items[t].state=e,n.items[t].message=r,i&&n.updateComponent()},n.test=function(t){return o(n,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return this.__testCount++,t&&m(t)?[4,this.testOne(t)]:[3,2];case 1:return e.sent(),[3,4];case 2:return[4,this.testAll()];case 3:e.sent(),e.label=4;case 4:return this.emit("test",this),[2,this.state(t)]}})})},n.state=function(t){if((t=n.aliases[t]||t)&&m(t)){var e=n.items[t];return e?e.state:h.states.unknown}var r=Object.keys(n.items);return r.length<1?h.states.unknown:r.some(function(t){return n.state(t)===h.states.failed})?h.states.failed:r.some(function(t){return n.state(t)===h.states.testing})?h.states.testing:r.some(function(t){return n.state(t)===h.states.untested})?h.states.untested:h.states.succeed},n.startWatch=function(){b(n.items,function(t,e){var r=n.model._observer_.watch(function(){return v(n.model,t)},function(){return n.test(t)});r.calc(!1),n.__watchers.push(r)})},n.stopWatch=function(){n.__watchers.forEach(function(t){return n.model._observer_.unWatch(t)})},n.distory=function(){n.off("test",n.updateComponent)},n.__component=e,n.__model=e.model,n}return r(e,t),Object.defineProperty(e.prototype,"Alert",{get:function(){var t=this;return this.__alert||(this.__alert=function(e){return l.Alert(i({},e,{validation:t}))}),this.__alert},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Field",{get:function(){var t=this;return this.__field||(this.__field=function(e){return f.Field(i({},e,{validation:t}))}),this.__field},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"State",{get:function(){var t=this;return this.__state||(this.__state=function(e){return p.State(i({},e,{validation:t}))}),this.__state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tests",{get:function(){return c.builtIn},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"states",{get:function(){return h.states},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"aliases",{get:function(){return this.__aliases},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"model",{get:function(){return this.__model},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"component",{get:function(){return this.__component},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){return this.__items},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"testCount",{get:function(){return this.__testCount},enumerable:!0,configurable:!0}),e.prototype.item=function(t){return t=this.aliases[t]||t,this.items[t]},e.prototype.createTestPending=function(t,e){return o(this,void 0,void 0,function(){var n,r,i,o,u,a;return s(this,function(s){switch(s.label){case 0:n=!0,r="",i=0,o=t.rules,s.label=1;case 1:return i<o.length?(u=o[i],a=_(u.test)?u.test:c.builtIn[u.test],[4,a(e)]):[3,4];case 2:if(n=s.sent(),r=u.message,!n)return[3,4];s.label=3;case 3:return i++,[3,1];case 4:return[2,{state:n,message:r}]}})})},e.prototype.testOne=function(t){return o(this,void 0,void 0,function(){var e,n,r,i,o;return s(this,function(s){switch(s.label){case 0:return t=this.aliases[t]||t,this.model?!(e=this.item(t))||!e.rules||e.rules.length<1?[2]:(e.pending&&e.pending.abort(),n=v(this.model,t),this.setState(t,h.states.testing),e.pending=u.abortable(this.createTestPending(e,n)),[4,e.pending]):[2];case 1:return r=s.sent(),i=r.state,o=r.message,this.setState(t,i?h.states.succeed:h.states.failed,o),[2]}})})},e.prototype.testAll=function(){return o(this,void 0,void 0,function(){var t,e=this;return s(this,function(n){switch(n.label){case 0:return this.model?(t=Object.keys(this.items),[4,Promise.all(t.map(function(t){return e.testOne(t)}))]):[2,[]];case 1:return n.sent(),[2]}})})},e}(g);e.Validation=y},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3);e.abortable=r.abortable,e.revokeable=r.abortable;var i=n(14);e.Defer=i.Defer},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=function(){function t(){var t=this;this.promise=r.abortable(new Promise(function(e,n){t.resolve=e,t.reject=n})),this.abort=this.promise.abort}return t}();e.Defer=i},function(t,e){t.exports=n},function(t,e,n){"use strict";function r(t){var e=t.validation,n=t.bind,r=t.when,o=t.alias,s=t.children,u=t.rules;if(!e)return i.toElement();u&&e.setRule(n,u,o);var a=e.item(n);return a&&a.state===r?i.toElement(s):i.toElement()}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.State=r},function(t,e,n){var r=n(1),i=r.final,o=r.isArray,s=r.copy,u=r.each,a=function(){function t(t){t=t||this;var e=t._emitter_;if(e)return e;i(this,"_target_",t),i(t,"_emitter_",this),this._isNative_=this._isNativeObject(this._target_),this._listeners_=this._listeners_||{},this.on=this.$on=this.$addListener=this.addListener,this.off=this.$off=this.$removeListener=this.removeListener,this.$emit=this.emit}return t.prototype._isNativeObject=function(t){return t.addEventListener&&t.removeEventListener&&t.dispatchEvent},t.prototype.addListener=function(e,n,r){this._isNative_&&this._addNativeEventListener(e,n,r),this._listeners_[e]=this._listeners_[e]||[],this._listeners_[e].push(n);var i=t._maxListeners;this._listeners_[e].length>i&&console.warn("The '"+e+"' event listener is not more than "+i)},t.prototype.removeListener=function(t,e,n){if(t&&e){if(this._isNative_&&this._removeNativeEventListener(t,e,n),!this._listeners_[t])return;var r=this._listeners_[t].indexOf(e);this._listeners_[t].splice(r,1)}else t?(this._isNative_&&this._listeners_[t]&&this._listeners_[t].forEach(function(e){this.removeListener(t,e,n)},this),delete this._listeners_[t]):(u(this._listeners_,function(t){this.removeListener(t,null,n)},this),this._listeners_={})},t.prototype.emit=function(t,e,n,r){if(this._isNative_)return this._emitNativeEvent(t,e,n,r);if(this._listeners_[t]){var i=!1;return this._listeners_[t].forEach(function(t){!1===t.call(this._target_,e)&&(i=!0)},this),i}},t.prototype._addNativeEventListener=function(e,n,r){this._target_.addEventListener(e,n,r);var i=t._events[e];i&&(i.addListener=i.addListener||i.on,i.addListener(this,e,n,r))},t.prototype._removeNativeEventListener=function(e,n,r){this._target_.removeEventListener(e,n,r);var i=t._events[e];i&&(i.removeListener=i.removeListener||i.off,i.removeListener(this,e,n,r))},t.prototype._emitNativeEvent=function(t,e,n,r){var i=document.createEvent("HTMLEvents");return i.initEvent(t,n,r),s(e,i,["data"]),i.data=e,this._target_.dispatchEvent(i)},t}();a._maxListeners=1024,a._events=[],a.register=function(t){var e=t.name;e&&(o(e)||(e=e.split(",")),e.forEach(function(e){this._events[e]=t},this))},t.exports=a}])});
//# sourceMappingURL=index.js.map