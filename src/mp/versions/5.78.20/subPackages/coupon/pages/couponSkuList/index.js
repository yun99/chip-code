var t=Object.create,e=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,r=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,c=(t,e)=>{for(var o in e||(e={}))u.call(e,o)&&l(t,o,e[o]);if(a)for(var o of a(e))p.call(e,o)&&l(t,o,e[o]);return t},d=o=>{return((t,o,i)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let a of n(o))u.call(t,a)||"default"===a||e(t,a,{get:()=>o[a],enumerable:!(i=s(o,a))||i.enumerable});return t})((i=e(null!=o?t(r(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0}),e(i,"__esModule",{value:!0})),o);var i},h=(t,e,o)=>new Promise(((s,i)=>{var n=t=>{try{r(o.next(t))}catch(t){i(t)}},a=t=>{try{r(o.throw(t))}catch(t){i(t)}},r=t=>t.done?s(t.value):Promise.resolve(t.value).then(n,a);r((o=o.apply(t,e)).next())})),y=d(require("../../../../er.js")),m=d(require("../../../../a4.js")),g=d(require("../../a5.js")),f=d(require("../../a7.js")),x=d(require("../../../../a8.js")),b=d(require("../../../../ob.js")),_=d(require("../../a6.js")),L=getApp();(0,y.default)({data:{schema:(0,f.default)(),skuType:x.ListTypes.couponSkuList,couponId:null,couponUserId:null,skuList:[],orderBy:0,pagination:{offset:0,limit:30,total:0},loadEnd:!1,hasPromotion:!1,titleList:[],firstLoading:!0,detail:{},extensions:""},onLoad(t){x.default.registerLxOperator(x.ListTypes.couponSkuList,{operator:(t,e,o)=>(Object.assign(t,{index_id:o}),t),[x.LxEventTypes.CardClick]:"b_youxuan_97h9reeg_mc",[x.LxEventTypes.CardView]:"b_youxuan_97h9reeg_mv",[x.LxEventTypes.AddCartClick]:"b_youxuan_2h7bel20_mc",[x.LxEventTypes.DecreaseCartClick]:"b_youxuan_md1orotl_mc",[x.LxEventTypes.SpecPopupShowClick]:"b_youxuan_7eljc49v_mc",[x.LxEventTypes.SpecPopupSkuView]:"b_youxuan_ew0tknap_mv",[x.LxEventTypes.SpecPopupAddCartClick]:"b_youxuan_drqs10e7_mc",[x.LxEventTypes.SpecPopupEditAttrClick]:"b_youxuan_gqwf8iex_mc",[x.LxEventTypes.SpecPopupRemindClick]:"b_youxuan_262se04k_mc"}),b.log.info("红包凑单页onLoad中的options：",t),this.couponId=t.coupon_id,this.couponUserId=t.coupon_user_id,this.trafficSourceData=t.trafficSource?{trafficSource:t.trafficSource}:{},this.setData({skuProxyData:{jumpOptions:this.trafficSourceData},queryParams:this.trafficSourceData,couponId:t.coupon_id,couponUserId:t.coupon_user_id})},onShow(){return h(this,null,(function*(){yield this.couponUserGatherInfo("onShow"),this.getCouponSkuList()}))},onPullDownRefresh(){return h(this,null,(function*(){this.setData({loadEnd:!1}),yield this.couponUserGatherInfo("pull down"),this.getCouponSkuList(0),wx.stopPullDownRefresh()}))},onReachBottom(){this.getCouponSkuList(this.data.pagination.offset+this.data.pagination.limit)},search(t){const{detail:e}=t;this.setData({detail:e,loadEnd:!1},(()=>{this.getCouponSkuList(0)}))},onPageScroll(t){var e;const o=this.selectComponent("#filter");null==(e=null==o?void 0:o.pageScroll)||e.call(o,t)},couponUserGatherInfo(t=""){return h(this,null,(function*(){b.log.info(`调用couponUserGatherInfo的接口来源是:${t}`);try{b.log.info("【红包凑单页】couponUserGatherInfo中请求的参数couponCode的值是：",this.couponUserId);const t=yield _.couponUserGatherInfo({couponCode:this.couponUserId}),{title:e,subTitle:o,extensions:s=""}=t;e&&o&&this.setData(c({titleList:[{val:(0,g.parse)(`<font color="#FF5E24">${e}</font>`)},{val:o,sub:1}]},this.data.extensions?{}:{extensions:s}))}catch(t){}}))},onCartChange(){L.page().route===this.route&&this.couponUserGatherInfo("cart change")},busy:!1,getCouponSkuList(t=0){if(this.busy)return;if(t>0&&this.data.loadEnd)return;this.loading(!0),this.busy=!0;const e=this.getBody(t);var s,n;_.getSkuListByCoupon((s=c({},e),n={offset:t},o(s,i(n)))).then((e=>{this.error&&this.error({show:!1,type:"empty_sku_list"});let o=(0,m.parseStyle)(e.styleMap||{},e.itemList);t>0&&(o=this.data.skuList.concat(o)),this.setData({firstLoading:!1,skuList:o,"pagination.total":e.total,"pagination.offset":t,loadEnd:e.total===o.length},(()=>{L.$cart.emitUpdateSkuCount()})),this.loading(!1),this.busy=!1})).catch((t=>{this.loading(!1),this.busy=!1,this.data.skuList.length||this.error({show:!0,type:"empty_sku_list"}),this.toast(t.message||"获取凑单列表失败")}))},body:null,getBody(t){const{detail:e}=this.data;let o;return 0===t?(o=c({promotionId:this.couponId,limit:this.data.pagination.limit,isCoupon:1,couponCode:this.data.couponUserId,hasPromotion:this.data.hasPromotion,promotionListRequestBody:{excludeSkuIds:[],aggregationItemList:[],priceItems:{highPrice:-1,lowPrice:-1},extensions:this.data.extensions}},e),this.body=o,o):(this.body.promotionListRequestBody.excludeSkuIds=(this.data.skuList||[]).map((t=>t.skuId)),this.body)},returnIndex(){L.$lxLog.mc("b_6pm07l57"),L.$router.goto("/pages/index/index")},catchtouchmove(){}});