var t=Object.create,e=Object.defineProperty,o=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,a=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,p=t=>e(t,"__esModule",{value:!0}),c=c=>((t,a,p)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let c of r(a))n.call(t,c)||"default"===c||e(t,c,{get:()=>a[c],enumerable:!(p=o(a,c))||p.enumerable});return t})(p(e(null!=c?t(a(c)):{},"default",c&&c.__esModule&&"default"in c?{get:()=>c.default,enumerable:!0}:{value:c,enumerable:!0})),c);((t,o)=>{for(var r in p(t),o)e(t,r,{get:o[r],enumerable:!0})})(exports,{default:()=>l});var s=c(require("./la.js")),u=c(require("./lb.js")),i=getApp(),l=class{constructor(){this.attached=function(){this.cart=i.page().selectComponent("#cart")},this.methods={handleGoTotalPage(){const t=this.data.recommendItem.jumpUrl;if(!t)return;const e=Object.keys(u.PromotionKind).find((e=>~t.indexOf(e)));e?this.triggerEvent("cheapBuyPopupShow",{target:e}):i.$router.goto(t)},onSkuTouchStart(t){this.triggerEvent("onSkuTouchStart",t)},onSkuTouchEnd(t){this.triggerEvent("onSkuTouchEnd",t)},onSkuDelete(t){const{cartOpType:e,opTargets:o}=t.detail;this.cart||(this.cart=i.page().selectComponent("#cart")),this.cart.operatePopupCart({cartOpType:e,opTargets:o})},handleAddRedemption(t){if(this.cart||(this.cart=i.page().selectComponent("#cart")),!this.cart.canOperateCart())return;const{promotionId:e,promotionType:o,skuId:r,lxData:a}=t.detail;i.$lxLog.mc("b_youxuan_zr6eqgqr_mc",a),this.cart.operatePopupCart({cartOpType:this.data.selectNum>1?"INCREASE_GIFT":"REDEMPTION",opTarget:{promotionId:e,opTargets:[{skuId:r,promotionId:e,promotionType:o}]}})},onMvReport(){s.default.onCheapBuyPartShow()}},this.properties={recommendItem:{type:Object},giftItems:{type:Array},selectNum:{type:Number},showGiftList:{type:Boolean},giftCanDelete:{type:Boolean},startTouch:{type:Object},currentTouchNodeId:{type:String}},this.data={fontRate:i.$cart.getCartFontRate()||1}}};Component(new l);