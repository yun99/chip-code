var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,a=e=>t(e,"__esModule",{value:!0});((e,r)=>{for(var n in a(e),r)t(e,n,{get:r[n],enumerable:!0})})(exports,{getCommonConf:()=>c,getRouteDegradeConfig:()=>i});var l,s=(l=require("./u1.js"),((e,o,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let l of n(o))u.call(e,l)||"default"===l||t(e,l,{get:()=>o[l],enumerable:!(a=r(o,l))||a.enumerable});return e})(a(t(null!=l?e(o(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l));function c(e){return t=this,r=null,n=function*(){return(0,s.get)({url:"/youxuan_common_conf/"+(e?"prod":"test"),setting:{domain:"https://portal-portm.meituan.com/horn/v1/modules",statusFilter:!1,dataFilter:!1}}).then((e=>{const{statusCode:t,data:r}=e;return 200===t?r:null}))},new Promise(((e,o)=>{var u=e=>{try{l(n.next(e))}catch(e){o(e)}},a=e=>{try{l(n.throw(e))}catch(e){o(e)}},l=t=>t.done?e(t.value):Promise.resolve(t.value).then(u,a);l((n=n.apply(t,r)).next())}));var t,r,n}function i(){return(0,s.get)({url:"/activity/appVersion/checkVersion"})}