var e,r,t=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,n=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,l=e=>{return((e,r,t)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let n of s(r))a.call(e,n)||"default"===n||o(e,n,{get:()=>r[n],enumerable:!(t=i(r,n))||t.enumerable});return e})((r=o(null!=e?t(n(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),o(r,"__esModule",{value:!0})),e);var r},p=l(require("../../jc.js")),u=l(require("../../u8.js")),d=getApp();(r=e||(e={}))[r.SELF_LIFT=0]="SELF_LIFT",r[r.POI_DELIVERY=1]="POI_DELIVERY";(0,p.defineComponent)(new class{constructor(){this.methods={eventTrigger(e){const r=e.currentTarget.dataset;r&&r.action&&("toGotoMapPage"===r.action?(d.$lxLog.mc("b_youxuan_8uncjlrl_mc"),d.$order.gotoMapPage(r.args||{})):(r.bid&&d.$lxLog.mc(r.bid,{order_id:r.args||""}),this.triggerEvent("eventTrigger",r)))},onMvReport(e){d.$lxLog.mv(e.detail.bid,e.detail.lxParams)}},this.properties={orderInfo:{type:Object,value:{},observer(e){const{orderId:r,status:t,orderDelivery:o={}}=e,{groupHeaderInfo:i={},selfLiftInfo:s={},shippingType:n=0,shippingInfo:a={}}=o,l=[40,41,45,47].includes(t)&&s.qrCode,p=!e.showIM&&i&&i.showGropHeader,d=1===n&&a.deliveryTipsList&&a.deliveryTipsList.length>0,c=0===n&&i.showGropHeader&&i.guideMsg,f=!!(e.showIM&&i&&i.showGropHeader),g=(1===n?a.receiverName:s.selfLiftPerson)||"",y=(1===n?a.receiverPhone:s.selfLiftMobile)||"",m=(0,u.isInWX)()?i.groupHeaderName||"":"自提点";this.setData({orderId:r,status:t,orderDelivery:o,groupHeaderInfo:i,selfLiftInfo:s,shippingType:n,shippingInfo:a,showQRcodeBtn:l,showCallGroupHeaderBtn:p,showDeliveryTips:d,showGroupHeaderGuide:c,showIM:f,selfLiftPerson:g,selfLiftMobile:y,contactName:m})}}},this.data={isInWX:(0,u.isInWX)(),isMTTiny:(0,u.isMTTiny)(),isMTTurbo:(0,u.isMTTurbo)(),isAppTiny:(0,u.isAppTiny)(),isTT:(0,u.isTT)()}}});