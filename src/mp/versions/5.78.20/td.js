var e=Object.create,t=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,o,r)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,c=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&s(e,o,t[o]);if(l)for(var o of l(t))u.call(t,o)&&s(e,o,t[o]);return e},g=o=>{return((e,o,n)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let l of a(o))p.call(e,l)||"default"===l||t(e,l,{get:()=>o[l],enumerable:!(n=r(o,l))||n.enumerable});return e})((n=t(null!=o?e(i(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0}),t(n,"__esModule",{value:!0})),o);var n},f=g(require("./ob.js")),b=g(require("./jc.js")),m=getApp();(0,b.defineComponent)(new class{constructor(){this.methods={toggleSwitchInfo(){this.triggerEvent("toggleSwitchInfo",!this.data.switchInfo.open)},showRedPackageRulePop(){f.log.info("<submitOrderSwitchInfoComponent showRedPackageRulePop> 点击开关红包使用规则弹窗"),getApp().$lxLog.mc("b_youxuan_2eflt0mn_mc"),this.triggerEvent("showRedPackageRulePop")},onMvReport(){getApp().$lxLog.mv("b_youxuan_0253hgpo_mv",{page_from:this.data.fromPage||"-999"})}},this.properties={switchInfo:{type:Object,observer(e){var t,r;this.setData({info:(t=c({},e),r={origin:e&&e.rubbishMap&&Math.round(+(e.rubbishMap.origin||0))/100,note:e&&"-1"!==e.note?Math.round(+(e.note||0))/100:e&&e.note},o(t,n(r)))})}},fromPage:String},this.data={info:null,redPackageRulePopShow:!1,fontRate:m.$cart.getCartFontRate()||1}}});