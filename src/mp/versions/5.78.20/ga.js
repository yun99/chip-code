var e=Object.create,r=Object.defineProperty,t=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,u=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,a=e=>r(e,"__esModule",{value:!0}),n=n=>((e,u,a)=>{if(u&&"object"==typeof u||"function"==typeof u)for(let n of o(u))l.call(e,n)||"default"===n||r(e,n,{get:()=>u[n],enumerable:!(a=t(u,n))||a.enumerable});return e})(a(r(null!=n?e(u(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);((e,t)=>{for(var o in a(e),t)r(e,o,{get:t[o],enumerable:!0})})(exports,{getRecommendPoiList:()=>c});var s=n(require("./k3.js")),i=n(require("./u1.js"));function c(e){return(0,i.get)({url:"/grocerylbs/queryUserPoiList",body:(0,s.filterParams)(e),connectType:"cloudContainer",reportUrl:"grocerylbs/queryUserPoiList"})}