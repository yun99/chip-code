var e=Object.create,t=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,r=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,d=d=>{return((e,r,d)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let p of a(r))i.call(e,p)||"default"===p||t(e,p,{get:()=>r[p],enumerable:!(d=o(r,p))||d.enumerable});return e})((p=t(null!=d?e(r(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:!0}:{value:d,enumerable:!0}),t(p,"__esModule",{value:!0})),d);var p},p=d(require("./jc.js")),l=d(require("./lv.js")),n=getApp();(0,p.defineComponent)({properties:{good:{type:Object,value:{}},valid:{type:Boolean,value:!0},index:{type:Number,value:0},promotionType:{type:Number}},methods:{onSelectTap(){var e;this.data.valid?(null==(e=this.data.good)?void 0:e.valid)&&this.triggerEvent("goodSelected",{skuId:this.data.good.skuId,index:this.data.index}):n.page().toast("未满足换购条件")},goToSkuDetail(){const{skuId:e}=this.data.good||{},{index:t,promotionType:o}=this.data||{};19===o&&(0,l.lx_sku_click)(t,e),n.$router.goto("igrocery://www.grocery.com/detail",{originalPoiId:n.$poiId,skuId:this.data.good.skuId,poiIdStr:n.$poiIdStr||""})},onMvReport(){const{skuId:e}=this.data.good||{},{index:t,promotionType:o}=this.data||{};19===o&&(0,l.lx_sku_show)(t,e)}}});