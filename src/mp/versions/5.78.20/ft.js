var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,l=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&s(e,r,t[r]);return e},p=e=>t(e,"__esModule",{value:!0}),c=o=>((e,o,i)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let u of n(o))a.call(e,u)||"default"===u||t(e,u,{get:()=>o[u],enumerable:!(i=r(o,u))||i.enumerable});return e})(p(t(null!=o?e(i(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);((e,r)=>{for(var n in p(e),r)t(e,n,{get:r[n],enumerable:!0})})(exports,{hotwords:()=>d,newSearch:()=>v,searchPageConfig:()=>y,searchResultScreen:()=>b,searchResultScreenExhibition:()=>h,searchtip:()=>P,suggest:()=>O});var g=c(require("./li.js")),m=c(require("./u1.js")),f=require("./uc.js");function d(e){var t,r;return(0,m.get)({url:"/search/hotwords",params:l(l({},e),null==(r=null==(t=getApp())?void 0:t.$systemInfo)?void 0:r.getLocation())})}function y(e){const{poiIdStr:t}=(0,g.getMixinPoi)();return(0,m.get)({url:`/poi/${t}/search/page/config`,params:e}).then((e=>e))}function v(e,t){var r,n;const{poiIdStr:o}=(0,g.getMixinPoi)();return(0,m.post)({url:`/poi/${o}/sku/search/v2`,params:l(l({},e),null==(n=null==(r=getApp())?void 0:r.$systemInfo)?void 0:n.getLocation()),body:t,reportUrl:"sku/search/post",connectType:"cloudContainer"}).then((e=>e))}function b(e){var t,r;const{poiIdStr:n}=(0,g.getMixinPoi)();return(0,m.get)({url:`/poi/${n}/sku/screen`,params:l(l({},e),null==(r=null==(t=getApp())?void 0:t.$systemInfo)?void 0:r.getLocation())}).then((e=>e))}function h(e){var t,r;return(0,m.get)({url:"/search/page/screen",params:l(l({},e),null==(r=null==(t=getApp())?void 0:t.$systemInfo)?void 0:r.getLocation()),setting:{domain:f.getExhibitionDomain()}}).then((e=>e))}function O(e){var t,r;const{poiIdStr:n}=(0,g.getMixinPoi)();return(0,m.get)({url:`/poi/${n}/suggest`,params:l(l({},e),null==(r=null==(t=getApp())?void 0:t.$systemInfo)?void 0:r.getLocation())}).then((e=>e))}function P(e){var t,r;return(0,m.post)({url:"/spu/searchtip",params:l({},null==(r=null==(t=getApp())?void 0:t.$systemInfo)?void 0:r.getLocation()),body:e}).then((e=>e))}