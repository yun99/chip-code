var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,l=e=>t(e,"__esModule",{value:!0}),u=u=>((e,a,l)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let u of o(a))n.call(e,u)||"default"===u||t(e,u,{get:()=>a[u],enumerable:!(l=r(a,u))||l.enumerable});return e})(l(t(null!=u?e(a(u)):{},"default",u&&u.__esModule&&"default"in u?{get:()=>u.default,enumerable:!0}:{value:u,enumerable:!0})),u);((e,r)=>{for(var o in l(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{getPosition:()=>d});var s=u(require("../../u9.js")),i=u(require("../../ob.js")),c=getApp(),d=()=>{return e=void 0,t=null,r=function*(){try{const e=yield s.default.getWxLocation({refresh:!0}),t=yield c.$service.getPosition(e),{latitude:r,longitude:o}=e;return{latitude:r,longitude:o,address:t.address}}catch(e){i.log.info(e)}},new Promise(((o,a)=>{var n=e=>{try{u(r.next(e))}catch(e){a(e)}},l=e=>{try{u(r.throw(e))}catch(e){a(e)}},u=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,l);u((r=r.apply(e,t)).next())}));var e,t,r};