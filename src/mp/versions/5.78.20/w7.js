var e=Object.create,t=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,n=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,r=r=>{return((e,n,r)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let u of l(n))a.call(e,u)||"default"===u||t(e,u,{get:()=>n[u],enumerable:!(r=o(n,u))||r.enumerable});return e})((u=t(null!=r?e(n(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0}),t(u,"__esModule",{value:!0})),r);var u},u=r(require("./u5.js")),i=r(require("./jc.js")),p=r(require("./u8.js")),{windowHeight:s,windowWidth:c}=u.$systemInfo.getSystemInfo(),d=getApp();(0,i.defineComponent)(new class{constructor(){this.methods={jumpToLink(e){let t=e;d.$router.goto(t)},tapLink(e){var t,o,l,n,a;const r=null==(o=null==(t=null==e?void 0:e.currentTarget)?void 0:t.dataset)?void 0:o.title,u=null==(a=null==(n=null==(l=null==e?void 0:e.currentTarget)?void 0:l.dataset)?void 0:n.link)?void 0:a.trim();u&&(d.$lxLog.mc("b_youxuan_kyk1f5e6_mc",{title:r}),this.jumpToLink(u))},closePopup(){d.$lxLog.mc("b_youxuan_55doddav_mc"),this.triggerEvent("closeUnifiedPropagandaPopup"),this.triggerEvent("closeSlogan")}},this.properties={unifiedPropagandaData:{type:Object,value:{}},showPopup:{type:Boolean,value:!1},isShowIpxBar:{type:Boolean,value:!1},type:{type:String}},this.data={popupMaxHeight:.8*s-c/750*210+"px",isWXMT:(0,p.isWXMT)()}}});