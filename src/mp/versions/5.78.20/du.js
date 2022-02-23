var e=Object.create,r=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,u=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(a)for(var t of a(r))p.call(r,t)&&c(e,t,r[t]);return e},g=e=>r(e,"__esModule",{value:!0}),d=t=>((e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))s.call(e,a)||"default"===a||r(e,a,{get:()=>t[a],enumerable:!(n=o(t,a))||n.enumerable});return e})(g(r(null!=t?e(u(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);((e,t)=>{for(var o in g(e),t)r(e,o,{get:t[o],enumerable:!0})})(exports,{fetchFreeOrderResultData:()=>E,fetchRefundBannerData:()=>L,freeOrderProcessData:()=>Q,getBaseInfo:()=>_,getC3RealTimeInfo:()=>M,getCategoryInfo:()=>B,getFreeOrderInfo:()=>G,getHomePageGuessLikeDataV3:()=>x,getHomePropaganda:()=>$,getJustJump:()=>N,getLocationWithBaseInfo:()=>F,getMiniAppQrCode:()=>O,getNewCusCouponInfo:()=>q,getNewCustomGuessLike:()=>v,getNewCustomerList:()=>k,getPrefetchInfo:()=>A,getRecommendSwitchType:()=>T,getRookieArea:()=>j,getShareFrindImage:()=>J,getShareInfo:()=>w,getUserCollectionStatus:()=>R,getUserRoleInfo:()=>C,parseGroupMiniAppQrCode:()=>D,parseMiniAppQrCode:()=>U});var m=d(require("./u7.js")),f=d(require("./u1.js")),y=d(require("./sw.js")),I=d(require("./xf.js")),h=d(require("./k3.js")),b=d(require("./li.js")),S=d(require("./x4.js")),P=require("./uc.js");function x(e){const{contentBlackList:r,type:t,offset:o,limit:n,pageNum:i,sceneId:a,tabType:u,lowerSortSkuIds:s,groupheadShareSkuId:p="",topSkuIds:c="",moduleTopSkuIds:l="",recommendSwitch:g,isFromShareCardFirst:d=!1,senceSkuId:m="",shareUserId:y="",personalRecommendOpen:I,categoryId:h="",categoryType:S=""}=e,{poiId:P,poiIdStr:x}=(0,b.getMixinPoi)();return(0,f.post)({url:`/poi/${x}/sku/guesslike/v3`,params:{poiId:P,type:t,offset:o,limit:n,pageNum:i,sceneId:a,tabType:u,groupheadShareSkuId:p,topSkuIds:c,moduleTopSkuIds:l,recommendSwitch:g,isFromShareCardFirst:d,senceSkuId:m,shareUserId:y,personalRecommendOpen:I,categoryId:h,categoryType:S},body:{contentBlackList:r,lowerSortSkuIds:s},_recordProfile:!0,reportUrl:"sku/guesslike/v3",connectType:"cloudContainer"})}function v(e){const r=e,{blackSkuIds:t}=r,o=((e,r)=>{var t={};for(var o in e)s.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&a)for(var o of a(e))r.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t})(r,["blackSkuIds"]);return(0,f.post)({url:`/new-customer/poi/${e.poiId}/low-price/page/recommend`,params:o,body:{blackSkuIds:t},_recordProfile:!0,reportUrl:"low-price/page/recommend",connectType:"cloudContainer"})}function k(e){const{poiId:r,tabType:t}=e;return(0,f.post)({url:`/list/poi/${r}/newCustomer`,params:{tabType:t},body:e,reportUrl:"sku/list/category/newCustomer",setting:{domain:P.getExhibitionDomain()}})}function w(){const{poiIdStr:e}=(0,b.getMixinPoi)();return(0,f.post)({url:`/homepage/share/${e}/info`,body:{type:0}})}function O(e={}){e.scid;const r=e.utm||{};return e.utm=JSON.stringify(l({shareid:(0,I.genShareId)(),share_type:"post"},r)),(0,f.get)({url:"/activity/wxservice/wxacode",params:(o=l({},e),i={sappnm:"meituanyouxuan_dyapp"},t(o,n(i)))});var o,i}function C(){return(0,f.get)({url:"/user/role/getRoleByUserId"})}function U(e){return(0,f.get)({url:"/activity/wxservice/wxacodeDetail",params:e})}function D(e){return(0,f.get)({url:"/activity/wxservice/queryWxCodePath",params:e})}function M(e){const{poiIdStr:r}=(0,b.getMixinPoi)();return(0,f.get)({url:`/homepage/poi/${r}/order/realtime/info/v2`})}function T(){return(0,f.get)({url:"/user/usercenter/private/settings/get",setting:{domain:P.getExhibitionDomain()}})}var $=(0,y.getResFromRecently)((()=>{const{poiIdStr:e}=(0,b.getMixinPoi)();return(0,f.get)({url:`/poi/${e}/propaganda`})}),{expire:0,refresh:!0});function j(e){var r,t;if(!e.sceneValue){const r=m.default.getAlgoParams();e.sceneValue=r}return(0,f.get)({url:`/homepage/special/area/poi/${e.poiIdStr||e.poiId}/new-customer-area/youxuan`,params:l(l({},e),null==(t=null==(r=getApp())?void 0:r.$systemInfo)?void 0:t.getLocation()),connectType:"cloudContainer",reportUrl:"new-customer-area/youxuan"})}function R(e){return(0,f.post)({url:"/homepage/user-collect",body:e})}var _=e=>{const{poiIdStr:r}=(0,b.getMixinPoi)();return(0,f.get)({url:`/homepage/aggregation/poi/${r||"143147528661317"}`,body:e,_recordProfile:!0,reportUrl:"aggregation/poi",connectType:"cloudContainer",isCore:!0})};function q(e){const{poiIdStr:r}=(0,b.getMixinPoi)();return(0,f.post)({url:`/homepage/coupon/v3/${r}/newuserDraw`,body:e})}function F(e){return(0,f.get)({url:"/homepage/aggregation/includelocation",params:(0,h.filterParams)(e),_recordProfile:!0,reportUrl:"aggregation/includelocation",isCore:!0})}function A(){return(0,f.get)({url:"/homepage/aggregation/includelocation",params:(0,S.getPrefetchParams)(),_recordProfile:!0,reportUrl:"aggregation/includelocation",isPrefetch:!0})}function B(e){const{categoryId:r,tabType:t}=e,{poiIdStr:o}=(0,b.getMixinPoi)();return(0,f.post)({url:`/poi/${o}/sku/list/category/${r}/speedApp/v1`,params:{tabType:t},body:e,connectType:"cloudContainer",reportUrl:"sku/list/category/speedApp"})}function L(e){const{poiIdStr:r}=(0,b.getMixinPoi)();return(0,f.post)({url:`/homepage/coupon/v3/${r}/refundBanner`})}function N(e){const{poiIdStr:r}=(0,b.getMixinPoi)();return(0,f.get)({url:`/homepage/poi/${r}/jump`,body:e})}function Q(e){const{poiIdStr:r}=(0,b.getMixinPoi)();return(0,f.get)({url:`/homepage/coupon/v3/${r}/freeOrderProcess`})}function E(e){const{poiIdStr:r}=(0,b.getMixinPoi)();return(0,f.post)({url:`/homepage/coupon/v3/${r}/fetchFreeOrderResult`,body:e.riskParams})}function G(e){const{poiIdStr:r}=(0,b.getMixinPoi)();return(0,f.post)({url:`/homepage/coupon/v3/${r}/fetchFreeOrderInfo`})}function J(e){return(0,f.get)({url:"/draw",params:e})}