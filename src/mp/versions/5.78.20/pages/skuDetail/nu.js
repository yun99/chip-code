var t=Object.create,e=Object.defineProperty,r=Object.defineProperties,u=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,n=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(t,r,u)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[r]=u,d=t=>e(t,"__esModule",{value:!0}),p=r=>((t,r,a)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let s of o(r))i.call(t,s)||"default"===s||e(t,s,{get:()=>r[s],enumerable:!(a=u(r,s))||a.enumerable});return t})(d(e(null!=r?t(n(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);((t,r)=>{for(var u in d(t),r)e(t,u,{get:r[u],enumerable:!0})})(exports,{default:()=>_});var m=p(require("../../u5.js")),y=p(require("./ck.js")),f=p(require("./cj.js")),_=class{static genSkuBtnData(t,{originalSkuId:e=0,trafficSource:u="",from:o=f.EFrom.skuDetail,addSource:n=""}={}){var d;return t.buttonV2List?{isIpx:(null==(d=m.$systemInfo.getSystemInfo())?void 0:d.isIpx)||!1,buttonV2List:t.buttonV2List.map((e=>{return u=((t,e)=>{for(var r in e||(e={}))i.call(e,r)&&l(t,r,e[r]);if(s)for(var r of s(e))c.call(e,r)&&l(t,r,e[r]);return t})({},e),o={mvBid:_.getButtonMVBid(e.status),lxParams:_.genBtnMvParams({text:e.text,buttonStatus:e.status,firstCategoryId:t.firstCategoryId,firstCategoryName:t.firstCategoryName,skuId:t.skuId,productId:t.productId})},r(u,a(o));var u,o})),currentSkuId:t.skuId,productId:t.productId,originalSkuId:e,productPattern:t.productPattern,trafficSource:u,subStatus:t.subStatus,dashPrice:t.dashPrice,promotionPrice:t.promotionPrice,sellPrice:t.sellPrice,countdownVO:t.countdownVO,skuTitle:t.skuTitle,seckillingSubType:t.seckillingSubType,firstCategoryId:t.firstCategoryId,firstCategoryName:t.firstCategoryName,from:o,addSource:n}:null}static getButtonMVBid(t){switch(t){case y.ButtonStatus.TAKE_ON_UNSUBSCRIBE:case y.ButtonStatus.TAKE_ON_SUBSCRIBE:return"b_youxuan_my1i0ixo_mv";case y.ButtonStatus.SEC_START_REMIND:case y.ButtonStatus.SEC_CANCEL_REMIND:return"b_youxuan_lr6j3lr1_mv";case y.ButtonStatus.MORE_CATEGORY:return"b_youxuan_olx8xndy_mv";case y.ButtonStatus.PURCHASE_NOW:case y.ButtonStatus.ORDER_NOW:return"b_youxuan_f38n3b3n_mv";default:return""}}static genBtnMvParams({buttonStatus:t,text:e,skuId:r,productId:u,firstCategoryId:a,firstCategoryName:o}){switch(t){case y.ButtonStatus.SEC_START_REMIND:case y.ButtonStatus.SEC_CANCEL_REMIND:return{title:e,sku_id:r||"",product_id:u||-999};case y.ButtonStatus.MORE_CATEGORY:return{title:e||"",sku_id:r||"",fcategory_id:a||"",fcategory_name:o||"",product_id:u||-999};default:return{sku_id:r||"",product_id:u||-999}}}};