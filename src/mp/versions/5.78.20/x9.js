var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,n=e=>t(e,"__esModule",{value:!0});((e,r)=>{for(var a in n(e),r)t(e,a,{get:r[a],enumerable:!0})})(exports,{default:()=>s});var l,c=(l=require("./gw.js"),((e,o,n)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let l of a(o))u.call(e,l)||"default"===l||t(e,l,{get:()=>o[l],enumerable:!(n=r(o,l))||n.enumerable});return e})(n(t(null!=l?e(o(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l));function s(e,t){const{orderId:r}=t;return(0,c.assembleRequest)(r)}