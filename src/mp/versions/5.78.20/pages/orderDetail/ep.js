var e=Object.create,t=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,r,a)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,c=r=>{return((e,r,l)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let i of o(r))n.call(e,i)||"default"===i||t(e,i,{get:()=>r[i],enumerable:!(l=a(r,i))||l.enumerable});return e})((l=t(null!=r?e(s(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0}),t(l,"__esModule",{value:!0})),r);var l},y=c(require("../../jc.js")),m=c(require("./g7.js")),d=c(require("./g6.js")),b=require("./g5.js");getApp();(0,y.defineComponent)(new class{constructor(){this.timer=null,this.methods={eventTrigger(e){this.triggerEvent("eventTrigger",e.detail)}},this.data={deliveryTips:null},this.properties={mapList:{type:Array,value:[]},statusCard:{type:Object,value:null},skus:{type:Array,value:[]},canShowQr:{type:Boolean,value:!1},questionList:{type:Array,value:[]},totalPay:{type:Number,value:0},qrcode:{type:String,value:"",observer(e){e&&this.data.mapList.some((e=>"selfLiftInfo"===e.type))&&(clearTimeout(this.timer),this.timer=setTimeout((()=>{b.qrcode("qrcode",e,432,432,this)}),1e3))}},qrcodeUrl:{type:String,value:""},skusTips:{type:String,value:""},orderId:{type:String,value:""},orderStatus:{type:Number,value:null},selfLiftInfo:{type:Object,value:null},distributionInfo:{type:Object,value:null},orderInfo:{type:Object,value:null,observer(e){const t=(e.tips||[]).find((({type:e,msgType:t})=>(e===d.ORDER_TIPS_TYPE.LATE||e===d.ORDER_TIPS_TYPE.LACK)&&0===t));if(t){const e=(a=((e,t)=>{for(var r in t||(t={}))n.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&p(e,r,t[r]);return e})({},t),o={type:t.type===d.ORDER_TIPS_TYPE.LATE?m.DELIVERY_TYPE.LATE:m.DELIVERY_TYPE.LACK},r(a,l(o)));this.setData({deliveryTips:e})}var a,o}},isFixed:{type:Boolean,value:!1},navigatorHeight:{type:Number,value:0}}}detached(){clearTimeout(this.timer)}});