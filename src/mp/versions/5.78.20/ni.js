var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,s=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&n(e,t,r[t]);if(o)for(var t of o(r))a.call(r,t)&&n(e,t,r[t]);return e},c=(e,o)=>r(e,t(o));((r,t)=>{for(var o in(r=>{e(r,"__esModule",{value:!0})})(r),t)e(r,o,{get:t[o],enumerable:!0})})(exports,{request:()=>u});var u=e=>new Promise(((r,t)=>{wx.request({url:e,success:t=>{const o=c(s({},t),{url:e});r(o)},fail:r=>{const o=c(s({},r),{url:e});t(o)}})}));