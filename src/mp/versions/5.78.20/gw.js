var e=Object.create,t=Object.defineProperty,o=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,n=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,s=e=>t(e,"__esModule",{value:!0}),c=c=>((e,n,s)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let c of r(n))a.call(e,c)||"default"===c||t(e,c,{get:()=>n[c],enumerable:!(s=o(n,c))||s.enumerable});return e})(s(t(null!=c?e(n(c)):{},"default",c&&c.__esModule&&"default"in c?{get:()=>c.default,enumerable:!0}:{value:c,enumerable:!0})),c),i=(e,t,o)=>new Promise(((r,n)=>{var a=e=>{try{c(o.next(e))}catch(e){n(e)}},s=e=>{try{c(o.throw(e))}catch(e){n(e)}},c=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,s);c((o=o.apply(e,t)).next())}));((e,o)=>{for(var r in s(e),o)t(e,r,{get:o[r],enumerable:!0})})(exports,{BOOTH_CODE:()=>g,TACTIC_CODE:()=>y,assembleRequest:()=>p,getExhibitionComposite:()=>f,getMarketingRes:()=>E,getOperationInfo:()=>h,getPaySuccessTransactionComposite:()=>I,getPromotionComposite:()=>m,getTransactionComposite:()=>d,hitGray:()=>_});var u=c(require("./ob.js")),l=c(require("./u1.js"));function p(e){return i(this,null,(function*(){const t=getApp(),o=Promise.all([m(e),f()]);let r={};return((null==t?void 0:t.$poiIdStr)||(null==t?void 0:t.$poiId))&&(r=yield d(e)),[r,o]}))}function d(e){return I({orderId:e}).then((e=>e)).catch((e=>(u.log.error("<paySuccess getTransactionComposite> 交易聚合接口异常",e),{})))}var g={VEGETABLE_MONEY_OR_MONTH_CARD:"BROVGOCA",FREE_POP_UP:"BTEWXZBN",ACTIVE_POP_UP:"BYZXIHEX",PROMOTION_SHOW:"BRPWALPU",COUPON_POP_SHOW:"BXLVRVKE"},y={VEGETABLE_MONEY:"TTSFGADY",MONTH_CARD:"TRJZVXYL"};function m(e){const t=[];for(const e in g)Object.hasOwnProperty.call(g,e)&&t.push(g[e]);return E([{key:"deliveryResourceQuery",data:t.map((t=>"BXLVRVKE"!==t?{boothCode:t,extParams:{orderId:e}}:{boothCode:t,extParams:{hasPayPopInfo:"true",orderId:e}}))}]).then((e=>{const{data:t={}}=(e||[])[0];return t.success?t:(u.log.warn(t.msg,"支付成功页调用营销聚合接口报错"),{})})).catch((e=>(u.log.warn(e,"支付成功页调用营销聚合接口报错"),{})))}function f(){const e={};return Promise.all([O(),P()]).then((t=>(t.forEach((t=>{Object.assign(e,t)})),e))).catch((t=>(u.log.warn(t,"支付成功页调用展销聚合接口报错"),e)))}function O(){return i(this,null,(function*(){let e={};try{const t=getApp();if(t.$poi.getPoiIdStr()){e={"pay-success":yield h({code:"pay-success",poiId:t.$poiId,poiIdStr:t.$poi.getPoiIdStr()})}}}catch(e){u.log.warn("<paySuccess getCustomerRights> 获取用户权益异常",e)}return e}))}function P(){return i(this,null,(function*(){let e={};try{const t=getApp();if(t.$poi.getPoiIdStr()){e={"pay-success-offical-account":yield h({code:"pay-success-offical-account",poiId:t.$poiId,poiIdStr:t.$poi.getPoiIdStr()})}}}catch(e){u.log.warn("<paySuccess getCustomerFocus> 获取关注异常",e)}return e}))}function h(e){return(0,l.post)({url:`/jigsaw/code/${e.code}/poi/${e.poiIdStr||e.poiId}`})}function I(e){return(0,l.get)({url:"/mallorder/aggregation/payPage",params:e})}function E(e,t={}){return Promise.resolve({})}function _(e){return(0,l.get)({url:"/community/hitGray",params:e})}