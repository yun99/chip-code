var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,u=e=>t(e,"__esModule",{value:!0});((e,r)=>{for(var o in u(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{couponListPrefetch:()=>c});var l,s=(l=require("./k1.js"),((e,a,u)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let l of o(a))n.call(e,l)||"default"===l||t(e,l,{get:()=>a[l],enumerable:!(u=r(a,l))||u.enumerable});return e})(u(t(null!=l?e(a(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l)),c=(e,t)=>{const{tab:r=1}=t,o={offset:1,limit:10,status:1*r};return[s.getUserCouponList(o),s.getAvailableCouponList({couponPageType:1,limit:10,offset:"1"}),s.loadEntranceInfo({customerId:"1"})]};