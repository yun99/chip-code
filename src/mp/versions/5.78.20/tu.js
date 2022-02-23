var e=Object.create,t=Object.defineProperty,o=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,s=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,d=d=>{return((e,s,d)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let a of r(s))i.call(e,a)||"default"===a||t(e,a,{get:()=>s[a],enumerable:!(d=o(s,a))||d.enumerable});return e})((a=t(null!=d?e(s(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:!0}:{value:d,enumerable:!0}),t(a,"__esModule",{value:!0})),d);var a},a=d(require("./ob.js")),n=d(require("./jc.js")),l=d(require("./lb.js")),p=d(require("./lv.js")),u=getApp();(0,n.defineComponent)({propTypes:null,properties:{isShow:{type:Boolean,observer(e){return e&&((0,p.lx_popup_show)(this.data.promotionType),this.getExchangeItems()),e}},promotionId:{type:Number},promotionType:{type:Number},promotionHandel:{type:String,value:"promotion/cheap_buy",observer(e){l.PromotionKind[e]&&this.setData({popName:l.PromotionKind[e].popName})}},zIndex:{type:Number,value:100}},data:{isButtonValid:!0,goods:[],selectedNum:0,totalExchangeCount:1,popName:"换购商品"},ready(){this.resetData()},methods:{handleClose(){this.resetData(),this.setData({isButtonValid:!0,goods:[],totalExchangeCount:1,selectedNum:0}),this.triggerEvent("cheapBuyPopupClose")},getExchangeItems(){return e=this,t=null,o=function*(){var e;u.page()&&u.page().loading(!0);try{const{promotionHandel:t,promotionId:o}=this.data,r=yield u.$service[l.PromotionKind[t].handel||l.PromotionKind["promotion/cheap_buy"].handel]({poi:u.$poi.poiInfo.poiId,poiIdStr:u.$poi.getPoiIdStr(),promotionId:o}),s=Array.isArray(null==r?void 0:r.levels)&&(null==r?void 0:r.levels[0]),i=(null==(e=null==s?void 0:s.exchangeItems)?void 0:e.map(((e,t)=>(e.valid=e.itemType===l.GoodsType.REDUCTION||e.itemType===l.GoodsType.GENERAL,e.selected&&e.valid&&(this.selectedSkuIndex=t,this.selectedSkuIdArr.push(e.skuId),this.oldSelectedSkuIdArr.push(e.skuId)),e))))||[];this.setData({isButtonValid:(null==s?void 0:s.valid)||!1,goods:i,selectedNum:this.selectedSkuIdArr.length,totalExchangeCount:(null==r?void 0:r.totalExchangeCount)||1}),u.page()&&u.page().loading(!1),a.log.info(`<换购浮层>获取换购商品数据成功，可选：${this.data.totalExchangeCount}，用户已选：${this.data.selectedNum}`)}catch(e){u.page()&&u.page().loading(!1),a.log.info("<换购浮层>获取换购商品失败",e)}},new Promise(((r,s)=>{var i=e=>{try{a(o.next(e))}catch(e){s(e)}},d=e=>{try{a(o.throw(e))}catch(e){s(e)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,d);a((o=o.apply(e,t)).next())}));var e,t,o},onGoodSelected(e){const{skuId:t,index:o}=e.detail;if(void 0===t||void 0===o)return void a.log.info(`<换购浮层>选中商品id为空，或者选中值为空，skuId：${t}，index：${o}`);const r=this.selectedSkuIdArr.indexOf(t);if(-1===r){if(this.selectedSkuIdArr.length===this.data.totalExchangeCount){if(this.data.totalExchangeCount>1)return void u.page().toast("已超最大可换购件数");this.data.goods[+this.selectedSkuIndex].selected=!1,this.selectedSkuIdArr.pop()}this.selectedSkuIdArr.length<this.data.totalExchangeCount&&(this.data.goods[o].selected=!0,this.selectedSkuIdArr.push(t),this.selectedSkuIndex=o,19!==this.data.promotionType&&(0,p.lx_good_click)(this.selectedSkuIdArr?1:0,t))}else this.data.goods[o].selected=!1,this.selectedSkuIndex=null,this.selectedSkuIdArr.splice(r,1);a.log.info(`<换购浮层> 用户点击${-1===r?"选中":"取消"}，操作的商品id：${t}，选中的所有商品：${this.selectedSkuIdArr.join(",")}`);try{const e=JSON.parse(JSON.stringify(this.data.goods));this.setData({goods:e,selectedNum:this.selectedSkuIdArr.length})}catch(e){a.log.info("<换购浮层>JSON.parse 失败",e)}},handleConfirm(){if((0,p.lx_confirm_click)(this.selectedSkuIdArr?this.selectedSkuIdArr:[],this.data.promotionType),this.oldSelectedSkuIdArr.length||this.selectedSkuIdArr.length){const{promotionId:e,promotionType:t}=this.data;this.selectedSkuIdArr.length?this.isEqual()?this.triggerEvent("confirm",{cartOpType:"REFRESH"}):this.selectedSkuIdArr.length<=this.data.totalExchangeCount&&this.triggerEvent("confirm",{cartOpType:"REDEMPTION",opTarget:{promotionId:this.data.promotionId,opTargets:this.selectedSkuIdArr.map((o=>({skuId:o,promotionId:e,promotionType:t})))}}):this.triggerEvent("confirm",{cartOpType:"DELETE_GIFT",opTarget:{promotionId:this.data.promotionId,opTargets:this.oldSelectedSkuIdArr.map((o=>({skuId:o,promotionId:e,promotionType:t})))}})}this.handleClose()},resetData(){this.selectedSkuIdArr=[],this.oldSelectedSkuIdArr=[],this.selectedSkuIndex=null},isEqual(){return this.selectedSkuIdArr.length===this.oldSelectedSkuIdArr.length&&this.selectedSkuIdArr.every((e=>-1!==this.oldSelectedSkuIdArr.indexOf(e)))}}});