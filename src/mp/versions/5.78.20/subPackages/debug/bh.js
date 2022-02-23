var t=require("./zi.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.baseGet=function(t,r){r=function(t,r){if(z(t))return!1;var u=(0,e.default)(t);if("number"==u||"symbol"==u||"boolean"==u||null==t||H(t))return!0;return o.test(t)||!n.test(t)||null!=r&&t in Object(r)}(r,t)?[r]:R(r);var u=0,a=r.length;for(;null!=t&&u<a;)t=t[M(r[u++])];return u&&u==a?t:void 0},exports.baseSet=function(t,e,r,n){if(!B(t))return t;var o=(e=R(e)).length,u=o-1,a=-1,i=t;for(;null!=i&&++a<o;){var l=M(e[a]),c=r;if(a!=u){var f=i[l];void 0===(c=n?n(f,l,i):void 0)&&(c=B(f)?f:J(e[a+1])?[]:{})}K(i,l,c),i=i[l]}return t};var e=t(require("./b4.js")),r="[object GeneratorFunction]",n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/,u=/^\./,a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,l=/^\[object .+?Constructor\]$/,c="object"===("undefined"==typeof global?"undefined":(0,e.default)(global))&&global&&global.Object===Object&&global,f="object"===("undefined"==typeof self?"undefined":(0,e.default)(self))&&self&&self.Object===Object&&self,s=c||f||Function("return this")(),p=/^(?:0|[1-9]\d*)$/;var _,h=Array.prototype,d=Function.prototype,y=Object.prototype,v=s["__core-js_shared__"],b=(_=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+_:"",g=d.toString,m=y.hasOwnProperty,j=y.toString,O=RegExp("^"+g.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),w=s.Symbol,$=h.splice,x=G(s,"Map"),S=G(Object,"create"),P=w?w.prototype:void 0,E=P?P.toString:void 0;function F(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function q(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function A(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function C(t,e){for(var r=t.length;r--;)if(U(t[r][0],e))return r;return-1}function D(t){if(!B(t)||(e=t,b&&b in e))return!1;var e,n=function(t){var e=B(t)?j.call(t):"";return"[object Function]"==e||e==r}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?O:l;return n.test(function(t){if(null!=t){try{return g.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function R(t){return z(t)?t:I(t)}function k(t,r){var n,o,u=t.__data__;return n=r,("string"==(o=(0,e.default)(n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?u["string"==typeof r?"string":"hash"]:u.map}function G(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return D(r)?r:void 0}F.prototype.clear=function(){this.__data__=S?S(null):{}},F.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},F.prototype.get=function(t){var e=this.__data__;if(S){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return m.call(e,t)?e[t]:void 0},F.prototype.has=function(t){var e=this.__data__;return S?void 0!==e[t]:m.call(e,t)},F.prototype.set=function(t,e){return this.__data__[t]=S&&void 0===e?"__lodash_hash_undefined__":e,this},q.prototype.clear=function(){this.__data__=[]},q.prototype.delete=function(t){var e=this.__data__,r=C(e,t);return!(r<0)&&(r==e.length-1?e.pop():$.call(e,r,1),!0)},q.prototype.get=function(t){var e=this.__data__,r=C(e,t);return r<0?void 0:e[r][1]},q.prototype.has=function(t){return C(this.__data__,t)>-1},q.prototype.set=function(t,e){var r=this.__data__,n=C(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},A.prototype.clear=function(){this.__data__={hash:new F,map:new(x||q),string:new F}},A.prototype.delete=function(t){return k(this,t).delete(t)},A.prototype.get=function(t){return k(this,t).get(t)},A.prototype.has=function(t){return k(this,t).has(t)},A.prototype.set=function(t,e){return k(this,t).set(t,e),this};var I=T((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(H(t))return E?E.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var r=[];return u.test(t)&&r.push(""),t.replace(a,(function(t,e,n,o){r.push(n?o.replace(i,"$1"):e||t)})),r}));function M(t){if("string"==typeof t||H(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}function T(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var n=arguments,o=e?e.apply(this,n):n[0],u=r.cache;if(u.has(o))return u.get(o);var a=t.apply(this,n);return r.cache=u.set(o,a),a};return r.cache=new(T.Cache||A),r}function U(t,e){return t===e||t!=t&&e!=e}T.Cache=A;var z=Array.isArray;function B(t){var r=(0,e.default)(t);return!!t&&("object"==r||"function"==r)}function H(t){return"symbol"===(0,e.default)(t)||function(t){return!!t&&"object"===(0,e.default)(t)}(t)&&"[object Symbol]"==j.call(t)}function J(t,r){var n=(0,e.default)(t);return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&p.test(t))&&t>-1&&t%1==0&&t<r}m=Object.prototype.hasOwnProperty;function K(t,e,r){var n=t[e];m.call(t,e)&&U(n,r)&&(void 0!==r||e in t)||function(t,e,r){"__proto__"==e?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}(t,e,r)}