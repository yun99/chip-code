var e,t,a,o,r=Object.create,l=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,b=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e=require("../../ob.js"),((e,t,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of n(t))c.call(e,o)||"default"===o||l(e,o,{get:()=>t[o],enumerable:!(a=p(t,o))||a.enumerable});return e})((t=l(null!=e?r(b(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),l(t,"__esModule",{value:!0})),e)),m=getApp();Component({properties:{popObj:{type:Object,observer(e){e.shareDetail&&this.resetAppMessage(e)}},showBubble:{type:Boolean,value:!0},bubblePic:{type:String,observer(e){e&&setTimeout((()=>this.reportBubbleMv()),0)}},bubbleToShare:{type:Boolean,value:!1},popToShare:{type:Boolean,value:!1},mvParams:Object,lxParams:Object,canShowPop:{type:Boolean,value:!1,observer(e){e&&setTimeout((()=>this.reportPopMv()),0)}},popUpBottom:{type:Number}},data:{shareMessage:{},defaultPic:"https://s3plus.meituan.net/v1/mss_1f3dca8fe8534e6fa640054bf3ad2ba6/grocery-fe-cdn/wx/images/cdn/sku_default_750_750.ca34718.png",isIpx:null==(o=null==(a=null==m?void 0:m.getModule("systemInfo"))?void 0:a.getSystemInfo())?void 0:o.isIpx},methods:{closeDropMask(){this.reportBubbleMv(),this.triggerEvent("close")},shareTapHandle(){var e,t,a;m.$lxLog.mc(null==(e=this.data.mvParams)?void 0:e.mc,this.data.lxParams);const o=null==(a=null==(t=this.data.popObj)?void 0:t.shareDetail)?void 0:a.path;o&&!this.data.popToShare&&m.$router.goto(o),this.triggerEvent("shareTap")},bubbleTapHandle(){var e,t,a;const o=null==(t=null==(e=this.data.popObj)?void 0:e.shareDetail)?void 0:t.path;m.$lxLog.mc(null==(a=this.data.mvParams)?void 0:a.bubbleMc,this.data.lxParams),o&&!this.data.bubbleToShare&&m.$router.goto(o)},reportBubbleMv(){const{canShowPop:e,showBubble:t,mvParams:a,bubblePic:o,lxParams:r}=this.data;!e&&t&&o&&m.$lxLog.mv(null==a?void 0:a.bubbleMv,r)},reportPopMv(){var e;m.$lxLog.mv(null==(e=this.data.mvParams)?void 0:e.mv,this.data.lxParams)},resetAppMessage(e){var t;const{path:a}=m.$lxLog.genLxSharePath(this.route,`pages/index/index?protocol=${encodeURIComponent(null==(t=null==e?void 0:e.shareDetail)?void 0:t.path)}`),o=(r=((e,t)=>{for(var a in t||(t={}))c.call(t,a)&&v(e,a,t[a]);if(u)for(var a of u(t))h.call(t,a)&&v(e,a,t[a]);return e})({},null==e?void 0:e.shareDetail),s(r,i({path:a,success:()=>{d.log.info("分享路径：",e.shareDetail.path),this.closeDropMask()},fail:e=>{"shareAppMessage:fail cancel"!==e.errMsg&&(m.page().toast("分享失败"),d.log.error("分享失败",e))}})));var r;this.setData({shareMessage:o})}}});