var e=Object.create,t=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,r=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(e,s,i)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,u=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&l(e,s,t[s]);if(o)for(var s of o(t))a.call(t,s)&&l(e,s,t[s]);return e},h=o=>{return((e,o,r)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let a of i(o))n.call(e,a)||"default"===a||t(e,a,{get:()=>o[a],enumerable:!(r=s(o,a))||r.enumerable});return e})((a=t(null!=o?e(r(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0}),t(a,"__esModule",{value:!0})),o);var a},c=h(require("../../jc.js")),d=h(require("../../u1.js")),p=h(require("../../uc.js")),g=h(require("../../ob.js")),m=h(require("./xv.js")),f=h(require("./xc.js")),y=h(require("../../xa.js")),C=h(require("./xx.js")),w=getApp(),{$event:v,$cart:S}=w,{CARTCOUPON_TIPS:x}=v.CONTANTS,R="b_youxuan_di8th4g4_mv",_="b_youxuan_di8th4g4_mc",A=["cart","submitOrder","paySuccess","orderDetail"];(0,c.defineComponent)({sC:null,showMoudle:[],isWalkReward:!1,destroy:null,originData:{},properties:{pageFrom:{type:String,value:""},isShowRedPacket:Boolean,isShowMarketingTips:Boolean,isShowIpxBar:{type:Boolean,value:!0},queryParams:{type:Object,value:null}},data:{isShowBar:!1,showPopup:!1,popTitle:""},lifetimes:{created(){this.showMoudle=[],this.originData={}},attached(){var e,t,s;if(this.data.isShowMarketingTips){const t=(null==(e=this.data.queryParams)?void 0:e.trafficSource)||"";S.refreshCart({trafficSource:t})}try{w.$externalSource=JSON.parse(decodeURIComponent((null==(s=null==(t=w.$appShowOptions)?void 0:t.query)?void 0:s.promotionSource)||"[]"))||[],this.isWalkReward=this.isWalkReward?this.isWalkReward:w.$externalSource.length>0,void 0===this.isWalkReward&&g.log.error("$$$[tips] 走路赚钱标识：this.isWalkReward为undefined！！！",w.$externalSource)}catch(e){g.log.error("[tips] app.$externalSource 挂载全局出错！",e)}this.startObserver()},detached(){this.endObserver()}},pageLifetimes:{show(){this.startObserver(),A.forEach((e=>w.lastShowPage.indexOf(e)>-1?(w.$cart.refreshCart(),e):e)),this.isWalkReward=this.isWalkReward?this.isWalkReward:w.$externalSource.length>0,void 0===this.isWalkReward&&g.log.error("$$$[tips] 走路赚钱标识：this.isWalkReward为undefined！！！",w.$externalSource)},hide(){this.endObserver()}},methods:{startObserver(){const{isShowMarketingTips:e,isShowRedPacket:t}=this.data;var s;if(e||t){if(!this.destroy){const e=(0,y.default)(this.getRedPacketData.bind(this),300,500);this.destroy=(s=e,v.on(x,s),()=>{v.off(x,s)})}}else this.triggerEvent("showRedPacketBar",0)},endObserver(){this.destroy&&(this.destroy(),this.destroy=null)},getRedPacketData(){return e=this,t=arguments,s=function*(e={}){if(e.clear){const e={hasBenefits:!1,sequenceList:[]},t=this.judgeShowBar(e),s=this.changeCouponTipsNew();return void this.setData(u(u({},t),s),(()=>{this.triggerEvent("showRedPacketBar",t.isShowBar?68:0)}))}const t=e.cacheId||"",s=e.totalItemCounts||0,{originalTotalAmount:i}=e;let o={};try{this.isWalkReward=this.isWalkReward?this.isWalkReward:w.$externalSource.length>0;const e={cacheId:t,skuNumOfCart:s,pageFrom:w.currentRoute,needGetMarketingData:this.data.isShowMarketingTips,needOrderCashBack:!0,walkingOrderAmount:this.isWalkReward?i:void 0};o=t&&(yield(e=>(0,d.get)({url:"/core/homepage/coupon/tips",params:e,setting:{domain:p.getExhibitionDomain()}}))(e))}catch(e){g.log.error(`[redPacketBar] getRedPacketData ${null==e?void 0:e.message}`)}const{hasBenefits:r=!1,sequenceList:n=[],leftText:a={},refundBannerVO:l={},memberEntranceInfoVO:h={},groceryShoppingDisplayResponse:c={},orderCashBackActivityResponse:m={},footStepRewardVO:f={}}=o,y=o.tipsInfoVO||{},C={hasBenefits:r,sequenceList:n,couponTips:y.enterLabelText||y.allCouponDescription||[],onlyTips:y.onlyTips||[],leftText:a,refundBannerVO:l,memberEntranceInfoVO:h,groceryShoppingDisplayResponse:c,orderCashBackActivityResponse:m,footStepRewardVO:f},v=this.judgeShowBar(C),S=this.changeCouponTipsNew();this.setData(u(u({},v),S),(()=>{this.triggerEvent("showRedPacketBar",v.isShowBar?68:0)}))},new Promise(((i,o)=>{var r=e=>{try{a(s.next(e))}catch(e){o(e)}},n=e=>{try{a(s.throw(e))}catch(e){o(e)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(r,n);a((s=s.apply(e,t)).next())}));var e,t,s},changeCouponTipsNew(){const{sequenceList:e=[],couponTips:t=[],onlyTips:s=[],leftText:i={},refundBannerVO:o={},memberEntranceInfoVO:r={},groceryShoppingDisplayResponse:n={},orderCashBackActivityResponse:a={},footStepRewardVO:l={},hasBenefits:h=!1}=this.originData||{};this.sC=new f.SchemaController;const{background:c,title:d="",memberCardAmount:p,canEnjoyDiscount:g,btnText:y,leftIcon:v}=r,S=(0,m.transformTempStringToArray)(d),x=!!w.$cart._cartTotalNum,R="border-radius:6rpx;height:34rpx;line-height:34rpx;padding: 0 6rpx;",_="linear-gradient(134deg, #FF0011 0%, #FF5E00 100%)",A="#fff",T=this.showCouponTips(),D=this.showOnlyTips(),q=this.showRefund(),M=this.showLongMonthCard(),k=this.showShortMonthCard(),b=this.showMaicaiQian(),O=this.showCashBack(),L=this.showWalkReward();if(h||(this.sC.pushLeft({content:"https://img.meituan.net/groceryapi/437001b2633cc2fddebc624710bc3ffd56752.png",type:"img",width:"20rpx",height:"20rpx",style:"margin-right: 2rpx; padding: 10rpx;",funcKey:"closeTips"}),this.sC.setWrapStyle("padding-left: 14rpx;")),M){const e={funcKey:C.Sequence.MONTH_CARD};this.sC.pushLeft(u({content:v,type:"img",width:"110rpx",height:"34rpx",style:"margin-right: 12rpx"},e));const t=S.map((e=>"%a"===e?{value:p,style:"color: #ED0010;"}:"%b"===e?{value:g,style:"color: #ED0010;"}:"%f"===e?{isLine:!0,style:"display:inline-block;margin:0 12rpx;"}:{value:e}));return this.sC.pushLeft(u({type:"styleText",content:t},e)),this.sC.updateTextEnd(!0),this.sC.pushRight(this.sC.getRightText(y||"立即领取",e)),this.sC.pushRight(this.sC.getRightImg(e)),this.sC.setWrapStyle("padding-right: 4rpx;"),this.showMoudle.push(C.Sequence.MONTH_CARD),{schema:this.sC.genSchema()}}let B=0;e.forEach((e=>{var t,s;if(e!==C.Sequence.LEFT_TEXT){if(e===C.Sequence.WALK_REWARD&&L){if(B>=2)return;const e=`${R};background:${l.backgroundColor||_};${l.wireframeColor?`border: 1rpx solid ${l.wireframeColor}`:""};color:${l.textColor||A};`;this.showMoudle.push(C.Sequence.WALK_REWARD);let s=(null==(t=null==l?void 0:l.footStepRewardText)?void 0:t.text)||"";return s.length>12&&(s=`${s.slice(0,12)}...`),this.sC.pushLeft({type:"text",content:s,style:e,funcKey:C.Sequence.WALK_REWARD}),void(B=3)}if(e===C.Sequence.REFUND&&q){if(B>=2)return;const{interestDesc:e=[]}=o,t=`${R};background:${o.backgroundColor||_};${o.wireframeColor?`border: 1rpx solid ${o.wireframeColor}`:""};color:${o.textColor||A};`;e.forEach((e=>{B>=2||(this.showMoudle.push(C.Sequence.REFUND),B++,this.sC.pushLeft({type:"text",content:e.text,style:t,funcKey:C.Sequence.REFUND}))}))}else{if(e===C.Sequence.MAICAI_QIAN&&b){if(B>=2)return;return this.showMoudle.push(C.Sequence.MAICAI_QIAN),this.sC.pushLeft({type:"text",content:n.tips,style:`${R};background:${_};color:#fff;`,funcKey:C.Sequence.MAICAI_QIAN}),void B++}if(e===C.Sequence.CASH_BACK&&O){if(B>=2)return;const e=(null==(s=null==a?void 0:a.title)?void 0:s.text)||"";this.showMoudle.push(C.Sequence.CASH_BACK),this.sC.pushLeft({type:"text",content:e,style:`${R};background:${_};color:#fff;`,funcKey:C.Sequence.CASH_BACK}),B=2}}}else this.sC.pushLeft({type:"img",content:i.iconUrl,width:"52rpx",height:"38rpx",style:"margin-right:18rpx;",funcKey:"pass"})}));const P=()=>{this.showMoudle.push(C.Sequence.ALL_TIPS);let e=0;s.forEach((t=>{if(t.startsWith("$")){if(e>=2)return;if(e++,1===e)return void this.sC.pushLeft({type:"text",content:t.slice(1),style:"margin-right: -0rpx;",funcKey:"pass"});this.sC.addRedText(t.slice(1))}else this.sC.pushLeft({type:"text",content:t,style:"margin-right: -0rpx;",funcKey:"pass"})}))};let $=!0;if(B<2&&(T?(((e,s)=>{this.showMoudle.push(C.Sequence.ALL_TIPS);let i=0;t.forEach((t=>{if(!(i>2))if(t.startsWith("$")){if(!e&&s)return this.sC.addRedBorder(t.slice(1)),void(i=999);e?this.sC.addRedText(t.slice(1)):this.sC.addRedBorder(t.slice(1)),i++}else if(e){const e=parseFloat(t);this.sC.pushLeft({type:"text",content:t,style:"margin-right: -0rpx;"+(e?"color:#ED0010":""),funcKey:"pass"})}}))})(x,k),$=!x,x&&this.sC.updateTextEnd(!0)):D&&0===B&&(P(),$=!1,this.sC.updateTextEnd(!0))),k&&$){const e="color:#FFE5CF;font-weight:800;",t=S.map((t=>"%a"===t?{value:p,style:e}:"%b"===t?{value:g,style:e}:{value:t,style:"color:#FFE5CF;"}));this.sC.pushLeft({type:"monthCard",style:`background: ${c};`,content:t,funcKey:C.Sequence.MONTH_CARD}),this.showMoudle.push(C.Sequence.MONTH_CARD)}if(this.canPopup()){const e={funcKey:"open"};this.sC.pushRight(this.sC.getRightText("全部",e)),this.sC.pushRight(this.sC.getRightImg(e)),this.sC.setWrapStyle("padding-right: 4rpx;")}return{schema:this.sC.genSchema()}},showCouponTips(){const{couponTips:e}=this.originData||{};return!!(null==e?void 0:e.length)},showOnlyTips(){const{onlyTips:e}=this.originData||{};return!!(null==e?void 0:e.length)},showRefund(){var e;const{sequenceList:t,refundBannerVO:s}=this.originData||{};return(null==t?void 0:t.includes(C.Sequence.REFUND))&&!!(null==(e=null==s?void 0:s.interestDesc)?void 0:e.length)},showMonthCard(){const{sequenceList:e,memberEntranceInfoVO:t}=this.originData||{};return(null==e?void 0:e.includes(C.Sequence.MONTH_CARD))&&!!(null==t?void 0:t.landingPage)},showLongMonthCard(){const{sequenceList:e}=this.originData||{};return this.showMonthCard()&&1===(null==e?void 0:e.length)},showShortMonthCard(){const{sequenceList:e}=this.originData||{};return this.showMonthCard()&&(null==e?void 0:e.length)>1},showMaicaiQian(){const{sequenceList:e}=this.originData||{};return(null==e?void 0:e.includes(C.Sequence.MAICAI_QIAN))&&this.hasMaiCaiQianData()},hasMaiCaiQianData(){const{groceryShoppingDisplayResponse:e}=this.originData||{};return!!(null==e?void 0:e.tips)},showCashBack(){var e;const{sequenceList:t,orderCashBackActivityResponse:s}=this.originData||{};return(null==t?void 0:t.includes(C.Sequence.CASH_BACK))&&!!(null==(e=null==s?void 0:s.title)?void 0:e.text)},showWalkReward(){var e;const{sequenceList:t,footStepRewardVO:s}=this.originData||{};return this.isWalkReward&&(null==t?void 0:t.includes(C.Sequence.WALK_REWARD))&&!!(null==(e=null==s?void 0:s.footStepRewardText)?void 0:e.text)},judgeShowBar(e){this.showMoudle=[],this.originData=e||{};let t=!1;const{isShowMarketingTips:s,isShowRedPacket:i}=this.data;try{const{hasBenefits:o=!1}=e,r=this.getCloseTipsValue();if(!o&&r)t=!1;else if(s&&this.hasMaiCaiQianData()){t=!0;const e=this.originData||{};e.couponTips=[],e.onlyTips=[];const s=[];(e.sequenceList||[]).includes(C.Sequence.LEFT_TEXT)&&s.push(C.Sequence.LEFT_TEXT),this.hasMaiCaiQianData()&&s.push(C.Sequence.MAICAI_QIAN),e.sequenceList=s}else i&&(t=this.canPopup()||this.showWalkReward()||!1)}catch(e){g.log.error(`[redPacketBar] 判断是否显示红包tips出错！${null==e?void 0:e.message}`)}return{isShowBar:t}},getCloseTipsValue(){let e=!1;try{const t=w.$store.getOrInit("closeRedPacketBar",!1,{isOnlyCache:!1,expires:this.getTime()});t.checkIfValid(!1)&&(e=t.value)}catch(e){g.log.error("[redPacketBar] 获取关闭红包Tips状态失败！")}return e},canPopup(){return this.showCouponTips()||this.showOnlyTips()||this.showRefund()||this.showMonthCard()||this.showMaicaiQian()||this.showCashBack()},onMvReport(e){var t,s;const i=(null==e?void 0:e.detail)||{};if(this.mvHandler(i.bid,{activity_name_list:this.getFirstModuleList(),page_from:this.data.pageFrom||""}),this.showLongMonthCard()&&this.mvHandler("b_youxuan_frquwziq_mv",{module_style:1}),this.showMoudle.includes(C.Sequence.WALK_REWARD)&&this.reportModule("mv",R,"走路赚钱","","",1),this.showMoudle.includes(C.Sequence.REFUND)&&this.reportModule("mv",R,"全额返","","",1),this.showMoudle.includes(C.Sequence.MAICAI_QIAN)&&this.reportModule("mv",R,"买菜钱","","",2),this.showMoudle.includes(C.Sequence.CASH_BACK)){const e=(null==(t=this.originData)?void 0:t.orderCashBackActivityResponse)||{};this.reportModule("mv",R,"下单返现",e.taskStatus,null==(s=e.title)?void 0:s.text,3)}},onShortMonthCardMv(){this.mvHandler("b_youxuan_frquwziq_mv",{module_style:2})},reportModule(e,t,s="",i="",o="",r=""){const n={activity_name:s,activity_status:i,message:o,type:r};"mv"===e?this.mvHandler(t,n):w.$lxLog.mc(t,n)},mvHandler(e,t={}){try{const{__mvHandler:s}=getApp().page();if("function"==typeof s){s({detail:{bid:e,lxParams:t}})}}catch(s){g.log.error(`[redPacketBar] 曝光失败, bid: ${e}, params:`,t)}},onItemClick(e={}){var t;const{funcKey:s}=e.currentTarget.dataset||{};if("closeTips"!==s)if(s!==C.Sequence.WALK_REWARD){if(s===C.Sequence.MONTH_CARD)w.$lxLog.mc("b_youxuan_frquwziq_mc",{module_style:this.showLongMonthCard()?1:2});else if(s===C.Sequence.REFUND)this.reportModule("mc",_,"全额返","","",1);else if(s===C.Sequence.MAICAI_QIAN)this.reportModule("mc",_,"买菜钱","","",2);else if(s===C.Sequence.CASH_BACK){const{orderCashBackActivityResponse:e}=this.originData||{};this.reportModule("mc",_,"下单返现",null==e?void 0:e.taskStatus,null==(t=null==e?void 0:e.title)?void 0:t.text,3)}else"open"===s&&w.$lxLog.mc("b_youxuan_retsxmln_mc",{activity_name_list:this.getFirstModuleList()});this.reportAllClick(),this.popupOrGoto()}else this.reportModule("mc",_,"走路赚钱","","",1);else this.closeTips()},closePopup(){var e;this.setData({showPopup:!1});const t=(null==(e=this.data.queryParams)?void 0:e.trafficSource)||"";S.refreshCart({trafficSource:t})},showPop(){this.reportAllClick(),this.popupOrGoto()},reportAllClick(){w.$lxLog.mc("b_youxuan_af4hhi6u_mc",{activity_name_list:this.getFirstModuleList(),page_from:this.data.pageFrom||""})},popupOrGoto(){this.showLongMonthCard()?this.goto():this.canPopup()&&this.setData({showPopup:!0})},goto(){var e,t;const s=null==(t=null==(e=this.originData)?void 0:e.memberEntranceInfoVO)?void 0:t.landingPage;s&&w.$router.goto(s)},closeTips(){this.setData({isShowBar:!1},(()=>{try{w.$store.updateCache("closeRedPacketBar",!0,{isOnlyCache:!1,expires:this.getTime()})}catch(e){g.log.error(`[redPacketBar] 更新关闭tips出错！${null==e?void 0:e.message}`)}})),this.triggerEvent("showRedPacketBar",0),w.$lxLog.mc("b_youxuan_oca1bdz6_mc",{activity_name_list:this.getFirstModuleList()})},getTime(){const e=Date.now();return((new Date).setHours(23,59,59)-e)/1e3},getFirstModuleList(){const e=this.showMoudle||[],t=[];return e.includes(C.Sequence.ALL_TIPS)&&t.push("券"),e.includes(C.Sequence.MONTH_CARD)&&t.push("月卡"),(e.includes(C.Sequence.REFUND)||e.includes(C.Sequence.MAICAI_QIAN)||e.includes(C.Sequence.CASH_BACK)||e.includes(C.Sequence.WALK_REWARD))&&t.push("营销活动"),t}}});