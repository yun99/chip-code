var e,t,r,o=Object.create,s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&h(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&h(e,r,t[r]);return e},y=e=>{return((e,t,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of u(t))d.call(e,o)||"default"===o||s(e,o,{get:()=>t[o],enumerable:!(r=n(t,o))||r.enumerable});return e})((t=s(null!=e?o(l(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),s(t,"__esModule",{value:!0})),e);var t},m=(e,t,r)=>new Promise(((o,s)=>{var a=e=>{try{i(r.next(e))}catch(e){s(e)}},n=e=>{try{i(r.throw(e))}catch(e){s(e)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,n);i((r=r.apply(e,t)).next())})),f=y(require("../../../../er.js")),R=y(require("../../../../ob.js")),S=y(require("../../../../gb.js")),v=y(require("../../../../u8.js")),b=y(require("../../gn.js")),P=y(require("../../p9.js")),k=y(require("../../gx.js")),x=y(require("../../ah.js")),_=y(require("../../g2.js")),C=y(require("../../g1.js")),T=y(require("../../gm.js")),I=y(require("../../g4.js")),w=y(require("../../g3.js")),O=getApp();(0,f.default)({$service:O.$service,data:{isTT:(0,v.isTT)(),orderReverseItemVOList:[],orderReverseReasons:[],orderReverseSecondReasonsList:[],refundScaleAble:"",refundTip:"1",totalRefundPrice:1,totalRefundPriceStr:"",refundTargetAccountDesc:"用户支付账户",selectedSecondReason:{},remark:"",isIpx:null==(r=null==(t=O.getModule("systemInfo"))?void 0:t.getSystemInfo())?void 0:r.isIpx,showAll:!1,showLimit:2,orderId:null,textareaPlaceholder:"补充详细信息，以便商家尽快处理。",descLimit:500,containerStyle:"padding: 0; height: auto;",placeholderStyle:"font-size:28rpx; color: #C4C7CC",textAreaStyle:"border: 2rpx solid rgba(18,25,36,0.10); border-radius: 16rpx; padding: 24rpx 20rpx; width: auto; height: 156rpx; font-size: 28rpx; line-height: 40rpx;",countStyle:"font-family: PingFangSC-Regular; font-size: 28rpx; color: #B0B3B8; line-height: 36rpx; position: absolute; bottom: 48rpx; right: 20rpx;",showRefundStayPop:!1,refundStayInfo:{},refundStayResolve:null,isSwitchLabelShow:!1,switchLabelText:"",switchLabelChecked:!1,from:_.FROM.REFUND_CANCEL,refundStayCancelText:"继续退款",refundStayOkText:"不退了",switchLabelFrom:C.FROM.ORDER_CANCEL,skuRefundPrice:null,skuRefundPriceStr:"",deliveryRefundPrice:null,deliveryRefundPriceStr:""},submitLock:!1,onLoad(e){const{orderId:t}=e;this.setData({orderId:+t,lxParams:{order_id:+t}}),this.getNoticeInfo()},onShow(){this.getReverseCompute()},getReverseCompute(){return m(this,null,(function*(){var e,t;const{orderId:r}=this.data;this.loading(!0);try{const n=null==(e=null==O?void 0:O.$poi)?void 0:e.getPoiId(),u=null==(t=null==O?void 0:O.$poi)?void 0:t.getPoiIdStr();let c={};u||n?c={currentPoiId:n,poiIdStr:u}:R.log.warn("<refund apply> 获取app?.$poi?.getPoiIdStr()失败");const l=yield P.reverseCompute((o=g({orderId:r},c),s={reverseComputeType:k.REVERSE_COMPUTE_TYPE.CANCEL_ORDER},a(o,i(s))));this.loading(!1);let d=[],p=[];this.handleBackToCartSwitchVO(l.backToCartSwitchVO);try{p=yield P.getRefundReason({orderId:r,skuId:0})}catch(e){R.log.info(`<refund getReverseCompute> 获取退款原因：getRefundReason 调用失败, 相关信息：${e}， 降级灰度策略使用reverseCompute接口返回数据`),p=l.orderReverseReasons}null==p||p.forEach((e=>{d=[...d,...null==e?void 0:e.specificReverseReasonList]}));const{skuRefundPriceCent:h,deliveryRefundPriceCent:y}=l.totalRefundPriceVO||{};this.setData({orderId:l.orderId,orderReverseItemVOList:l.orderReverseItemVOList,orderReverseReasons:p,refundTip:l.refundTip,tptalRefundPrice:l.totalRefundPrice,totalRefundPriceStr:l.totalRefundPriceStr,refundTargetAccountDesc:l.refundTargetAccountDesc,orderReverseSecondReasonsList:d,skuRefundPrice:h,skuRefundPriceStr:(0,b.getDisplayStr)((0,S.fen2Yuan)(h)),deliveryRefundPrice:y,deliveryRefundPriceStr:(0,b.getDisplayStr)((0,S.fen2Yuan)(y))}),this.lxMV()}catch(e){this.loading(!1),this.toast(e.message||"获取订单失败"),O.$router.triggerBack("cancel-getReverseCompute")}var o,s}))},lxMV(){const{orderId:e,orderReverseSecondReasonsList:t,switchLabelChecked:r}=this.data;t&&O.$lxLog.mv("b_youxuan_l8eu44lx_mv",{order_id:e}),O.$lxLog.mv("b_youxuan_6a2qpogb_mv",{order_id:e,status:(0,w.switchChecked2Status)(r)})},toggleShowAll(){this.setData({showAll:!this.data.showAll})},onChangeSecondReason(e){const{orderId:t}=this.data,{secondReason:r}=e.currentTarget.dataset;this.handleSwitchLabelChecked(),this.setData({selectedSecondReason:r}),O.$lxLog.mc("b_youxuan_l8eu44lx_mc",{order_id:t,title:r.reason,code:r.code})},onDescInput(t){clearTimeout(e);const{value:r}=t.detail,{descLimit:o}=this.data;r.length>o&&this.toast(`不得输入超过${o}字`),e=setTimeout((()=>{this.setData({remark:r.slice(0,o)})}),100)},getSelectedFirstReason(){const{selectedSecondReason:e,orderReverseReasons:t}=this.data;let r;return null==t||t.forEach((t=>{var o;null==(o=null==t?void 0:t.specificReverseReasonList)||o.forEach((o=>{o.code===e.code&&(r=t)}))})),r},onSubmit(){return m(this,null,(function*(){var e,t,r,o;const{orderId:s,selectedSecondReason:a,remark:n,refundTargetAccountDesc:i,switchLabelChecked:u}=this.data,c=this.getSelectedFirstReason();if(O.$lxLog.mc("b_youxuan_6a2qpogb_mc",{order_id:s,poi_id:null==(e=null==O?void 0:O.$poi)?void 0:e.getPoiId(),poiIdStr:null==(t=null==O?void 0:O.$poi)?void 0:t.getPoiIdStr(),status:(0,w.switchChecked2Status)(u)}),!Object.prototype.hasOwnProperty.call(a,"code"))return void O.page().toast("请勾选退款原因");if((null==a?void 0:a.needRemark)&&!n)return void O.page().toast("请填写退款说明");if((null==a?void 0:a.needRemark)&&n.length<5)return void O.page().toast("请至少输入5个字符");if(this.submitLock)return void R.log.warn("<RefundCancel> 触发了重复提交取消了，submitLock",this.submitLock);if(yield this.getRefundStayInfo(s,0,a.code,0))return void O.$router.triggerBack("cancel-onSubmit-stay");const l={orderId:s,poi:null==(r=null==O?void 0:O.$poi)?void 0:r.getPoiId(),poiIdStr:null==(o=null==O?void 0:O.$poi)?void 0:o.getPoiIdStr(),reason:null==c?void 0:c.reason,reasonCode:null==c?void 0:c.code,reasonLevel2:null==a?void 0:a.reason,reasonCodeLevel2:null==a?void 0:a.code,refundTargetAccountDesc:i,reverseComputeType:k.REVERSE_COMPUTE_TYPE.CANCEL_ORDER};(null==a?void 0:a.needRemark)&&(l.remark=n);try{this.submitLock=!0,this.loading(!0),yield P.cancelOrderV2(l),this.submitLock=!1,this.loading(!1),this.toast("取消申请已提交"),setTimeout((()=>m(this,null,(function*(){this.data.switchLabelChecked?yield this.handleBackToCart():O.$router.triggerBack("detail-onSubmit-try")}))),1e3)}catch(e){this.submitLock=!1,this.loading(!1),this.toast(e.message||"提交失败")}}))},getNoticeInfo(){return m(this,null,(function*(){}))},onTapNoticeBoard(){O.$lxLog.mc("b_youxuan_fkubkyrk_mc",this.data.lxParams)},getRefundStayInfo(e,t=0,r,o){return m(this,null,(function*(){var r,o,s,a,n;const i=new Promise(((e,t)=>{this.refundStayResolve=e}));try{let u={};try{const e=yield this.refundApplyVerify({skuId:t});u=(0,T.refundApplyVerifyRes2getRefundStayInfoV3Res)(e)}catch(e){}if(u.stay&&!v.isTT){const{refundStayCancelText:i,refundStayOkText:c}=this.data;let l=i,d=c;u.buttonVOS&&u.buttonVOS.length>0&&u.buttonVOS.forEach((e=>{switch(e.index){case 1:l=e.buttonText;break;case 2:d=e.buttonText}})),this.setData({showRefundStayPop:!0,refundStayInfo:u,refundStayCancelText:l,refundStayOkText:d});const{stayTypeCode:p}=u;let h=u.message;switch(p){case x.STAY_INFO_TYPE_MAP.Default:h=u.message;break;case x.STAY_INFO_TYPE_MAP.Stock:h=(null==(r=u.sellOut)?void 0:r.message)||"";break;case x.STAY_INFO_TYPE_MAP.Discount:h=(null==(o=u.discount)?void 0:o.message)||"";break;case x.STAY_INFO_TYPE_MAP.Review:h=(null==(s=u.skuReview)?void 0:s.message)||"";break;case x.STAY_INFO_TYPE_MAP.ContactGroup:h=(null==(a=u.contactGroup)?void 0:a.message)||"";break;case x.STAY_INFO_TYPE_MAP.BuyPeopleCount:h=(null==(n=u.buyPeopleCount)?void 0:n.message)||"";break;default:h=u.message}O.$lxLog.mv("b_youxuan_gwjluhga_mv",{order_id:e,sku_id:t,message:h})}else this.refundStayResolve(!1);return i}catch(e){return this.toast(e.message||"网络异常，请重试"),Promise.reject()}}))},closeRefundStayPop(e){const{stay:t}=e.detail,{orderId:r,refundStayInfo:o}=this.data;this.setData({showRefundStayPop:!1}),O.$lxLog.mc(t?"b_youxuan_3ajchxje_mc":"b_youxuan_g71ex1pn_mc",{order_id:r,sku_id:0,message:o.message}),this.refundStayResolve(t)},onSwitchLabelChange(e){const{switchVal:t}=e.detail;this.setData({switchLabelChecked:t}),(0,I.getSingleInstance)().set(t)},handleBackToCartSwitchVO(e={}){if(0===Object.keys(e).length)return;const{text:t,display:r}=e;this.setData({isSwitchLabelShow:r,switchLabelText:t})},handleSwitchLabelChecked(e=!0){const{isSwitchLabelShow:t}=this.data,r=(0,I.getSingleInstance)().get();t&&e!==this.data.switchLabelChecked&&r&&this.setData({switchLabelChecked:e})},refundApplyVerify(e){return m(this,null,(function*(){try{const{skuId:t}=e,{orderId:r,selectedSecondReason:o}=this.data,s={orderId:r,skuId:t,refundApplyPageSource:k.REFUND_APPLY_PAGE_SOURCE.ORDER_CANCEL_PAGE,refundApplyType:k.REFUND_APPLY_TYPE.REFUND_SUBMIT,secondReasonCode:o.code,secondReasonText:o.reason};return P.refundApplyVerify(s)}catch(e){R.log.error("<RefundApply> refundApplyVerify",JSON.stringify(e))}}))},handleBackToCart(){return m(this,null,(function*(){try{const{selectedSecondReason:e}=this.data,t=-1!==[66,18].indexOf(e.code),r=yield this.operateCart(t);if(200!==r.opResult)throw new Error({message:"购物车加车失败",error:g({},r)});t?this.handleBackToCarModal():(this.toast("为了方便您再次购买，退款商品已为您放回购物车中"),setTimeout((()=>{O.$router.triggerBack("detail-onSubmit-try")}),1200))}catch(e){R.log.info(`<refund apply handleBackToCart>: error: ${e}`),O.$router.triggerBack("detail-onSubmit-try")}}))},handleBackToCarModal(){this.confirm({title:"退款申请成功",message:"退款商品已为您准备好，是否要再次下单？",customContentStyle:"text-align: center",zIndex:102,textOK:"再次下单",textCancel:"查看退款",ok:()=>{this.orderAgain()},cancel:()=>m(this,null,(function*(){yield this.viewRefund()}))})},viewRefund(){return m(this,null,(function*(){try{const e=yield this.operateCart();if(200!==e.opResult)throw new Error({message:"购物车加车失败",error:g({},e)});O.$router.triggerBack("detail-onSubmit-try")}catch(e){R.log.info(e),O.$router.triggerBack("detail-onSubmit-try")}}))},orderAgain(){O.$router.goto("/pages/submitOrder/index",{cartOpSource:"buyNow"})},operateCart(e=!1){const t="CNACLEORDER",r=e?"BUYNOW":t,o=this.orderReverseItemVOList2opTargets();return O.$cart.operateCart({requestSource:t,cartOpType:"INCREASE",showSuccessToast:!e,cartOpSource:r,forceRefresh:!0,opTarget:{opTargets:o},createTempCart:e})},orderReverseItemVOList2opTargets(e=this.data.orderReverseItemVOList){return e.map((e=>({skuId:e.skuId,count:e.quantity})))}});