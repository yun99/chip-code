var e=Object.create,t=Object.defineProperty,o=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,s=s=>{return((e,a,s)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let u of r(a))l.call(e,u)||"default"===u||t(e,u,{get:()=>a[u],enumerable:!(s=o(a,u))||s.enumerable});return e})((u=t(null!=s?e(a(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0}),t(u,"__esModule",{value:!0})),s);var u},u=s(require("../../u5.js")),i=s(require("../../jc.js"));(0,i.defineComponent)(new class{constructor(){this.methods={setLocation(){var e;this.data.showArrow&&(u.$lxLog.mc("b_youxuan_l4orlisq_mc",{sku_id:null==(e=this.data.deliveryInfoData)?void 0:e.skuId}),u.$router.goto("igrocery://www.grocery.com/location/self_pick_select"))}},this.lifetimes={attached(){var e;this.data.showArrow&&u.$lxLog.mv("b_youxuan_l4orlisq_mv",{sku_id:null==(e=this.data.deliveryInfoData)?void 0:e.skuId})}},this.properties={deliveryInfoData:{type:Object,value:{}},showArrow:{type:Boolean,value:!1}},this.data={}}});