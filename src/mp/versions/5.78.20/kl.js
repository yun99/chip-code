var e=Object.create,t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,r=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,a=e=>t(e,"__esModule",{value:!0}),n=n=>((e,r,a)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let n of o(r))s.call(e,n)||"default"===n||t(e,n,{get:()=>r[n],enumerable:!(a=i(r,n))||a.enumerable});return e})(a(t(null!=n?e(r(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);((e,i)=>{for(var o in a(e),i)t(e,o,{get:i[o],enumerable:!0})})(exports,{default:()=>g});var l=n(require("./ob.js")),d=n(require("./gp.js")),u=getApp(),g=class{constructor(e="submitOrder"){this.observers={selfLifting(e){e&&e.selfLiftingMobile&&this.setData({personMobile:e.selfLiftingMobile}),this.setData({changeSiteTip:!e||u.__hideSiteTip?"":e.nearByHaveSupportDeliveryPoiTipMsg})},carryInfo(e){this.setData({name:(null==e?void 0:e.addressPerson)||"",number:(null==e?void 0:e.mobile)||"",address:(null==e?void 0:e.address)+(null==e?void 0:e.houseNumber)||"",distanceInfo:(null==e?void 0:e.tipMsg)||"",moneyInfo:(null==e?void 0:e.secondTipMsg)||"",remindInfo:(null==e?void 0:e.thirdTipMsg)||"",isHaveCarryInfo:1===(null==e?void 0:e.selectType)})}},this.methods={showPersonEditModal(){l.log.info("<submitOrderAddressSelfLightingComponent showPersonEditModal> 跳转至提货人列表页面"),u.$lxLog.mc("b_youxuan_2v0t4184_mc",{page_from:this.data.fromPage||"-999"});const{pickerId:e}=this.data,t={opType:1,userPicker:JSON.stringify({pickerName:this.data.personName,pickerPhone:this.data.personMobile})};this.triggerEvent("showPersonEditModal"),e?u.$router.goto(`igrocery://www.grocery.com/receiver/list?pickerId=${e}`):u.$router.goto("igrocery://www.grocery.com/receiver/edit",t)},changeSite(){u.$lxLog.mc("b_youxuan_kwix6jwe_mc",{page_from:this.data.fromPage||"-999"}),u.__hideSiteTip=!0;const{page:e,isBuyNow:t,selfLifting:i,changeSiteTip:o,isSelf:r}=this.data,{showRemindMessageTime:s}=u.$store.getCacheValue("orderInfo");let a={from:e,cartType:t?"9":"0"};if(u.$store.setCache("shippingType",r?"1":"0"),this.triggerEvent("changeSite"),o&&s<=3)a=Object.assign({},a,{longitude:i.selfLongitude,latitude:i.selfLatitude}),d.default.jumpOtherSelfPick(a,!1);else{const e="/subPackages/location/pages/selfPickSelect/index";u.$router.goto(e,a)}},onSwitchTab(e){var t,i,o,r;if(null==(i=null==(t=null==e?void 0:e.target)?void 0:t.dataset)?void 0:i.type){const t=this.data.isSelf?"送货上门":"自提";u.$lxLog.mc("submitCart"===this.data.page?"b_youxuan_ojqalm57_mc":"b_youxuan_glgeocr5_mc",{tab_name:t,button_type:t});if("self"===(null==(r=null==(o=null==e?void 0:e.target)?void 0:o.dataset)?void 0:r.type)===this.data.isSelf)return;const i=!this.data.isSelf;this.triggerEvent("switchTab",{isSelf:i})}},onSelfInfoChange(){const e="deliveryAddress",{carryInfo:t,isHaveCarryInfo:i}=this.data,{poiInfo:o={}}=u.$poi||{},{poiId:r="",poiIdStr:s}=o;let a={};this.triggerEvent("selfInfoChange"),i?(a={deliveryAddress:JSON.stringify({address:(null==t?void 0:t.address)||"",addressId:(null==t?void 0:t.addressId)||"",name:(null==t?void 0:t.addressPerson)||"",houseNumber:(null==t?void 0:t.houseNumber)||"",phone:(null==t?void 0:t.mobile)||"",latitude:(null==t?void 0:t.latitude)||"",longitude:(null==t?void 0:t.longitude)||""}),poiId:r,poiIdStr:s},u.$router.goto("igrocery://www.grocery.com/receiver/list?pageFrom=deliveryAddress",a)):(a={opType:1,pageFrom:e},u.$router.goto("igrocery://www.grocery.com/receiver/edit",a))},onMvReport(e){u.$lxLog.mv(e.detail.bid,e.detail.lxParams)}},this.ready=function(){var e;u.$lxLog.mv("b_youxuan_w6mv0gxw_mv",{poi_distance:null==(e=this.data.selfLifting)?void 0:e.buriedPointSelfDistance,page_from:this.data.fromPage||"-999"}),setTimeout((()=>{}),1e4)},this.detached=function(){delete u.__hideSiteTip},this.properties={selfLifting:{type:Object},personName:{type:String},pickerId:{type:Number},isBuyNow:{type:Boolean},carryInfo:{type:Object},isSelf:{type:Boolean},remindMessage:{type:String},isShowTab:{type:Boolean},selfLiftingTest:{type:String},fromPage:{type:String}},this.data={personMobile:"",changeSiteTip:"",page:e,fontRate:u.$cart.getCartFontRate()||1}}};