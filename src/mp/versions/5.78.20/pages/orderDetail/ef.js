var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,s=s=>{return((e,a,s)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let u of o(a))n.call(e,u)||"default"===u||t(e,u,{get:()=>a[u],enumerable:!(s=r(a,u))||s.enumerable});return e})((u=t(null!=s?e(a(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0}),t(u,"__esModule",{value:!0})),s);var u},u=s(require("../../u8.js")),l=s(require("../../ad.js"));Component(new class{constructor(){this.methods={goBack(){this.triggerEvent("goBack")}},this.properties={paddingBottom:Number},this.data={showHomeIcon:!1,isNotSupportNavigationStyle:l.isNotSupportNavigationStyle}}attached(){var e;this.setData({showHomeIcon:!(0,u.isMT)()&&1===(null==(e=getCurrentPages())?void 0:e.length)})}});