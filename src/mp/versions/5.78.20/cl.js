var e,t,r=Object.create,o=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,n=(e=require("./sm.js"),((e,t,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))b.call(e,i)||"default"===i||o(e,i,{get:()=>t[i],enumerable:!(r=p(t,i))||r.enumerable});return e})((t=o(null!=e?r(l(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),o(t,"__esModule",{value:!0})),e)),O=getApp();module.exports={getSeckillActivitySubscribeRequest:(e=n.SUBSCRIBE_MAJOR_TYPE.NOT_MAJOR)=>({subType:"seckillActivity",major:e,params:{poiId:O.$poi.getPoiId()||"",poiIdStr:O.$poi.getPoiIdStr()||""}}),getTakeOnSubscribeRequest:(e,t=n.SUBSCRIBE_MAJOR_TYPE.NOT_MAJOR,r)=>({subType:"takeOn",major:t,params:{poiId:O.$poi.getPoiId()||"",poiIdStr:O.$poi.getPoiIdStr()||"",skuId:e,op:r}}),getSkuArriveSubscribeRequest:(e,t=n.SUBSCRIBE_MAJOR_TYPE.NOT_MAJOR,r)=>({subType:"skuArrive",major:t,params:{poiId:O.$poi.getPoiId()||"",poiIdStr:O.$poi.getPoiIdStr()||"",skuId:e,op:r}}),getCouponExpirationSubscribeRequest:(e,t=n.SUBSCRIBE_MAJOR_TYPE.NOT_MAJOR)=>({subType:"couponExpire",major:t,params:{poiId:O.$poi.getPoiId()||"",poiIdStr:O.$poi.getPoiIdStr()||"",skuId:e}}),getSeckillSubscribeRequest:(e,t=n.SUBSCRIBE_MAJOR_TYPE.MAJOR,r,o)=>{const p=(a=((e,t)=>{for(var r in t||(t={}))b.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&d(e,r,t[r]);return e})({poiId:O.$poi.getPoiId()||"",poiIdStr:O.$poi.getPoiIdStr()||"",skuId:e},o),i(a,u({op:r})));var a;return{subType:"seckill",major:t,params:p}}};