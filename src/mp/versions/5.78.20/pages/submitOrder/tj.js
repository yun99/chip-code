var e=Object.create,t=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,a)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,c=r=>{return((e,r,o)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let s of n(r))i.call(e,s)||"default"===s||t(e,s,{get:()=>r[s],enumerable:!(o=a(r,s))||o.enumerable});return e})((o=t(null!=r?e(l(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0}),t(o,"__esModule",{value:!0})),r);var o},y=c(require("../../jc.js")),m=c(require("../../ko.js")),f=getApp();(0,y.defineComponent)(new class{constructor(){this.methods={onClickPayItem(e){const{payType:t,usable:r}=e.currentTarget.dataset;if(f.$lxLog.mc(t===m.PayType.oneClickPay?"b_youxuan_of3htcy4_mc":"b_youxuan_bmi9ftq8_mc",{page_from:this.data.fromPage||"-999"}),t===this.data.payType)return this.close();this.data.openStatus&&!r||this.triggerEvent("selectPayType",{payType:t})},close(){f.$lxLog.mc("b_youxuan_8numkys7_mc",{page_from:this.data.fromPage||"-999"}),this.triggerEvent("closePayTypeSelect")}},this.properties={payTypeList:{type:Array,observer(e){const t=e.map((e=>{var t;const a=(null==(t=null==e?void 0:e.subTitle)?void 0:t.replace(/<highlight>/g,"_").split("_"))||[],n={prefix:a[0],mid:a[1],suffix:a[2]};return l=((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e})({},e),r(l,o({subTitle:n}));var l}));this.setData({displayInfo:t})}},show:Boolean,payType:String,openStatus:Boolean,fromPage:String}}});