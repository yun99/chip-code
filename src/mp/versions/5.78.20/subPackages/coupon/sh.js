var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,O=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,n=(e,r,O)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:O}):e[r]=O,p=e=>t(e,"__esModule",{value:!0});((e,r)=>{for(var O in p(e),r)t(e,O,{get:r[O],enumerable:!0})})(exports,{REPORT_TYPE:()=>i,Report:()=>U});var l,N=(l=require("../../is.js"),((e,o,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let _ of O(o))s.call(e,_)||"default"===_||t(e,_,{get:()=>o[_],enumerable:!(a=r(o,_))||a.enumerable});return e})(p(t(null!=l?e(a(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l)),i={COUPONLIST_MONTHCARD_SHOW_COUNT:"月卡展示",COUPONLIST_UNUSED_COUPON_COUNT:"未使用券总数",COUPONLIST_USED_COUPON_COUNT:"已使用券总数",COUPONLIST_INVALID_COUPON_COUNT:"已失效券总数",COUPONLIST_RECOMMEND_COUPON_COUNT:"推荐好券总数"},U=class{constructor(e,t){this.__countReport={[i.COUPONLIST_UNUSED_COUPON_COUNT]:!1,[i.COUPONLIST_USED_COUPON_COUNT]:!1,[i.COUPONLIST_INVALID_COUPON_COUNT]:!1,[i.COUPONLIST_RECOMMEND_COUPON_COUNT]:!1,[i.COUPONLIST_MONTHCARD_SHOW_COUNT]:!1},this.context=e,this.app=t;const r=t.$systemInfo.systemInfo;this.reportTag={brand:r&&r.brand,model:r&&r.model,system:r&&r.system,version:r&&r.version,sdkVersion:r&&r.SDKVersion,platform:r&&r.platform,pixelRatio:r&&r.pixelRatio,wxappVersion:this.app.$version||"default"}}checkReport(e,t){this.__countReport[e]||(this.__countReport[e]=!0,this.__report(e,t))}__report(e,t){var r;null==(r=this.app.$cat)||r.reportCustomMetrics(N.YXReportTarget.COUPONLIST_DATA,t,((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))_.call(t,r)&&n(e,r,t[r]);return e})({type:e},this.reportTag))}};