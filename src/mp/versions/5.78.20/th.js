var e=Object.create,t=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,n=n=>{return((e,l,n)=>{if(l&&"object"==typeof l||"function"==typeof l)for(let r of i(l))o.call(e,r)||"default"===r||t(e,r,{get:()=>l[r],enumerable:!(n=s(l,r))||n.enumerable});return e})((r=t(null!=n?e(l(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0}),t(r,"__esModule",{value:!0})),n);var r},r=n(require("./jc.js")),f=n(require("./ob.js")),a=getApp();(0,r.defineComponent)(new class{constructor(){this.observers={"selfLifting.selfTipTypeDesc":function(e){this.setData({selfTipStrs:e?e.split("<red>").map((e=>e.replace("，",""))):[]})}},this.methods={toConfirm(){const{selfTipTypeDesc:e,selfTipTypeValue:t}=this.data.selfLifting;a.$lxLog.mc("b_youxuan_uvzncgcz_mc",{title:e,type:t}),f.log.debug("==".repeat(10),"<SelfLiftingConfirmComponent close>关闭自提二次确认框"),this.close(!0)},toClose(){f.log.debug("==".repeat(10),"<SelfLiftingConfirmComponent close>关闭自提二次确认框"),this.close(!1)},close(e){f.log.debug("==".repeat(10),"<SelfLiftingConfirmComponent close>关闭自提二次确认框"),this.setData({show:!1}),this.resolve&&this.resolve(e),this.resolve=null,this.triggerEvent("selfLiftingConfirmClose")},switch(){const{selfTipTypeDesc:e,selfTipTypeValue:t}=this.data.selfLifting;a.$lxLog.mc("b_youxuan_jqyzqy7y_mc",{title:e,type:t}),this.close(!1),this.resolve=null,this.triggerEvent("switch"),a.$router.goto("/subPackages/location/pages/selfPickSelect/index",{from:"submitOrder",cartType:this.data.isBuyNow?"9":"0"})},show(e){a.$lxLog.mv("b_youxuan_n5cjq32v_mv",{title:e.selfTipTypeDesc,poi_distance:e.selfDistance||"",type:e.selfTipTypeValue}),this.setData({selfLifting:e,show:!0})},secCheck(e){return this.show(e),new Promise((e=>{this.resolve=e}))}},this.properties={isBuyNow:Boolean},this.data={selfLifting:{supportSelfLifting:!0,selfLatitude:"",selfLiftingAddress:"",selfDistance:"",selfLiftingDeliveryType:0,selfLiftingAddressName:"",selfLiftingMobile:"",selfLongitude:"",selfLiftingTime:"",selfLiftingAddressPic:""},selfTipStrs:[],show:!1}}});