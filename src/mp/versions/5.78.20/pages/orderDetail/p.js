var e,t,r=Object.create,o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,i=(e=require("../../jc.js"),((e,t,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of a(t))u.call(e,l)||"default"===l||o(e,l,{get:()=>t[l],enumerable:!(r=n(t,l))||r.enumerable});return e})((t=o(null!=e?r(l(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),o(t,"__esModule",{value:!0})),e)),p=getApp();(0,i.defineComponent)(new class{constructor(){this.methods={eventListen(e){const t=e.currentTarget.dataset;t&&t.action&&("jump"===t.action?t.jumpUrl&&p.$router.goto(t.jumpUrl):this.triggerEvent("eventTrigger",t))},childrenTap(e){const t=e.currentTarget.dataset;t&&t.action&&("toGotoMapPage"===t.action?p.$order.gotoMapPage(t.args||{}):this.triggerEvent("eventTrigger",t))}},this.properties={orderId:{type:String,value:""},orderStatus:{type:Number,value:null},item:{type:Object,value:null,observer(e,t){e.text!==(null==t?void 0:t.text)&&"取消订单"===e.text&&p.$lxLog.mv("b_youxuan_rdcmhjjq_mv",{order_id:this.properties.orderId,order_st:this.properties.orderStatus})}}}}});