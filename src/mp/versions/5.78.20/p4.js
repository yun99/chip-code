var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,u=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,s=e=>t(e,"__esModule",{value:!0}),l=l=>((e,u,s)=>{if(u&&"object"==typeof u||"function"==typeof u)for(let l of o(u))a.call(e,l)||"default"===l||t(e,l,{get:()=>u[l],enumerable:!(s=r(u,l))||s.enumerable});return e})(s(t(null!=l?e(u(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l);((e,r)=>{for(var o in s(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{default:()=>g});var n=l(require("./pa.js")),c=l(require("./zw.js")),m=l(require("./ph.js")),p=l(require("./u4.js")),i=l(require("./z6.js")),y=require("./z7.js");(0,m.registerLxConfig)(y,"grocery-c-mp-market"),(0,c.registerProtocols)(i.default,"grocery-c-mp-market"),p.default.on(n.POI_ON_UPDATED,(e=>{const{poiId:t}=e}));var g={};