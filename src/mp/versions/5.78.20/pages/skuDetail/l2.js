var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,n=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,u=e=>t(e,"__esModule",{value:!0}),a=a=>((e,n,u)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let a of o(n))i.call(e,a)||"default"===a||t(e,a,{get:()=>n[a],enumerable:!(u=r(n,a))||u.enumerable});return e})(u(t(null!=a?e(n(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a);((e,r)=>{for(var o in u(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{checkUserRoleType:()=>g,getOperationInfo:()=>c,getQuestionnaire:()=>m,getRealtimeOrder:()=>f,getRecommendationList:()=>d});var s=a(require("../../u1.js")),l=a(require("../../li.js")),p=require("../../uc.js");function c(e){const{poiIdStr:t}=(0,l.getMixinPoi)();return(0,s.post)({url:`/jigsaw/code/${e.code}/poi/${t}`})}function m(e){return(0,s.post)({url:"/operate/aggregation/popup",body:e})}function g(e){return(0,s.post)({url:"/user/new/function/guide",body:e,setting:{domain:p.getExhibitionDomain()}})}function d(e){const{poiIdStr:t}=(0,l.getMixinPoi)();return(0,s.get)({url:`/poi/${t}/sku/${e.skuId}/add/cart/recommend`,params:e})}function f(){return(0,s.get)({url:"/user/realtime/order/v1",setting:{domain:p.getExhibitionDomain()}})}