var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&n(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&n(e,r,t[r]);return e},d=a=>{return((e,a,l)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let s of o(a))i.call(e,s)||"default"===s||t(e,s,{get:()=>a[s],enumerable:!(l=r(a,s))||l.enumerable});return e})((s=t(null!=a?e(l(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0}),t(s,"__esModule",{value:!0})),a);var s},g=d(require("../../jc.js")),c=d(require("../../u5.js")),p=d(require("./lt.js"));(0,g.defineComponent)(new class{constructor(){this.observers={skuImageData(e){this.initVideController(e)}},this.methods={onSkuImageChange(e){var t;const r=null==(t=this.skuVideoController)?void 0:t.judgeFooterShow(e);this.setData(u({currentSkuImageIndex:e.detail.current+1},r))},tapSkuImage(e){var t;const r=(null==(t=this.data.skuImageData)?void 0:t.picUrls)||[];if(!r.length)return;const{imageIndex:o,imageItemUrl:a}=e.currentTarget.dataset;c.$lxLog.mc("b_youxuan_tbpxjvko_mc",{sku_id:this.data.skuImageData.skuId||-999,index_id:o,product_id:this.data.skuImageData.productId||-999}),wx.previewImage({urls:r,current:a})},onControlsToggle(e){var t;const r=null==(t=this.skuVideoController)?void 0:t.onControlsToggle(e);this.setData(u({},r))},onPlaySkuVideo(){var e;null==(e=this.skuVideoController)||e.onPlaySkuVideo((0,c.page)())},onEndedSkuVideo(){var e;null==(e=this.skuVideoController)||e.onEndedSkuVideo()},loadFirstImgSuccess(e){var t,r;e.skuImageDisplayListLength=(null==(r=null==(t=this.data.skuImageData)?void 0:t.skuImageDisplayList)?void 0:r.length)||0,this.triggerEvent("loadFirstImgSuccess",e)},loadFirstImgFail(e){this.triggerEvent("loadFirstImgFail",e)},initVideController(e){(null==e?void 0:e.canDisplayVideo)&&(this.skuVideoController=new p.default(this),this.skuVideoController.initSkuVideoStatus())}},this.properties={skuImageData:{type:Object,value:{}},progressiveWidth:{type:String,value:null},progressiveHeight:{type:String,value:null}},this.data={currentSkuImageIndex:1,v_muted:!1,v_showFooter:"show"}}});