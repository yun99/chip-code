var t=Object.create,e=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,n=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,l=(t,e)=>{for(var s in e||(e={}))u.call(e,s)&&h(t,s,e[s]);if(a)for(var s of a(e))c.call(e,s)&&h(t,s,e[s]);return t},p=(t,e)=>s(t,r(e)),d=t=>e(t,"__esModule",{value:!0}),m=s=>((t,s,r)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let a of o(s))u.call(t,a)||"default"===a||e(t,a,{get:()=>s[a],enumerable:!(r=i(s,a))||r.enumerable});return t})(d(e(null!=s?t(n(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);((t,s)=>{for(var i in d(t),s)e(t,i,{get:s[i],enumerable:!0})})(exports,{default:()=>y});var T=m(require("./st.js")),C=m(require("./kw.js")),g=m(require("./ob.js")),A=m(require("./u4.js")),S=m(require("./is.js")),N=m(require("./u8.js")),{CARTCOUPON_TIPS:_}=A.CONTANTS,y=(getApp(),class extends C.default{constructor(t,e){super(t,e),this._cartNum=0,this._cartTotalNum=0,this._cartMony=0,this._reducedMoney=0,this._virtualCartNum=0,this._skuQtyList=[],this._couponData=null,this._virtualSkuQtyList=[],this._trafficSource=null,this._productIdObj={},this.message="",this.needRecommend=!1,this.notShowAnimation=!1,this.fontRate=0,this.isCartSetInitialRenderingCache=!1,this.isCartLandingSetInitialRenderingCache=!1,this.isCartLandingPrefetcher=!1,this.operateCart=this.operateCart.bind(this),this.operateCartAfterLoginSuccessBindThis=this.operateCartAfterLoginSuccess.bind(this),this.getGlobalSkuqtyBindThis=this.getGlobalSkuqty.bind(this),this.event.on(this.event.CONTANTS.LOGIN_SUCCESS,this.operateCartAfterLoginSuccessBindThis),this.event.on(this.event.CONTANTS.LOGIN_SUCCESS,this.getGlobalSkuqtyBindThis)}destroy(){this.event.off(this.event.CONTANTS.LOGIN_SUCCESS,this.operateCartAfterLoginSuccessBindThis),this.event.off(this.event.CONTANTS.LOGIN_SUCCESS,this.getGlobalSkuqtyBindThis)}static register(t){const e=new y("cart",t);return t.addModule(e),e}refreshCart({slient:t=!1,trafficSource:e}={}){const{$service:s,page:i,$poiId:r,$poi:o}=this.app;return o.getPoiIdStr()?s.getCartNum(l(l({},e?{trafficSource:e}:{}),this.app.$externalSource?{externalSourceList:this.app.$externalSource}:{})).then((t=>{this._couponData={cacheId:t.cacheId,reducedMoney:t.allItemsCounts},this.event.emit(_,l({},t));const e=t.allItemsCounts||0,s=t.totalItemCounts||0,i=t.realTotalAmount||0,r=t.reducedAmountV2||0;return this._cartNum=e,this._cartTotalNum=s,this._cartMony=i,this._reducedMoney=r,this.event.emit(this.event.CONTANTS.CARTNUM_CHANGE,{allItemsCounts:e}),this.event.emit(this.event.CONTANTS.CARTTOTALNUM_CHANGE,{totalItemCounts:s}),this.event.emit(this.event.CONTANTS.CARTMONEY_CHANGE,{realTotalAmount:i,reducedAmountV2:r}),g.log.info(`提单栏数据请求成功，allItemsCounts：${e}，totalItemCounts：${s}，realTotalAmount：${i}，reducedAmountV2：${r}`),t})).catch((e=>{var s;g.log.info(`刷新提单栏失败，error：${null==e?void 0:e.message}`);const{toast:r}=i();return"function"==typeof r&&"pages/login/index"!==(null==(s=this.app)?void 0:s.page().__route__)&&!t&&r(e&&e.message||"提单栏刷新失败"),{}})):(g.log.warn(`请求购物车simple接口没有poi参数，poi：${o.getPoiIdStr()}`),{})}getGlobalSkuqty(){const{$service:t,$cart:e,$poi:s}=this.app;if(s.getPoiIdStr())return t.getGlobalSkuqty().then((t=>{const s=this.getSkuDiff(t);this._skuQtyList=t.skuQtyList,this.setProductIdObj(),this.event.emit(this.event.CONTANTS.UPDATE_SKU_COUNT,{opTarget:s});const i=!!(t.skuQtyList||[]).find((t=>(t.skuDetailInfos||[]).find((t=>1===t.type&&t.containsNewPromotion))));return this.event.emit(this.event.CONTANTS.CART_SPECIAL_SKU,{containsNewRedemption:i}),e.skuQtyList})).catch((t=>{g.log.info(`刷新购物车商品数量失败，error：${null==t?void 0:t.message}`)}))}get cartNum(){return this._cartNum}get cartTotalNum(){return this._cartTotalNum}get cartMoney(){return this._cartMony}get reducedMoney(){return this._reducedMoney}get skuQtyList(){const t={};return this._skuQtyList.forEach((e=>{t[e.skuId]||(t[e.skuId]=e.quantity)})),t}get virtualSkuQtyList(){const t={};return this._virtualSkuQtyList.forEach((e=>{t[e.skuId]||(t[e.skuId]=e.quantity)})),t}get skuRealQtyList(){const t={};return this._skuQtyList.forEach((e=>{t[e.skuId]||(t[e.skuId]=e.realQuantity)})),t}get virtualSkuRealQtyList(){const t={};return this._virtualSkuQtyList.forEach((e=>{t[e.skuId]||(t[e.skuId]=e.realQuantity)})),t}get trafficSource(){return this._trafficSource}set trafficSource(t){this._trafficSource=t}get couponData(){return this._couponData}resetSkuQtyList(){const t=this._skuQtyList;this._skuQtyList=[],this.event.emit(this.event.CONTANTS.UPDATE_SKU_COUNT,{opTarget:{opTargets:t}})}resetRedPacketBarData(){this.event.emit(this.event.CONTANTS.CARTCOUPON_TIPS,{clear:1})}emitUpdateSkuCount(){this.event.emit(this.event.CONTANTS.UPDATE_SKU_COUNT,{opTarget:{opTargets:this._skuQtyList}})}operateCartAfterLoginSuccess(t,e){const s=this.app&&this.app.$appShowOptions&&this.app.$appShowOptions.query||{},{fromApp:i}=s;g.log.warn("登陆成功后执行刷新回调",`参数: ${JSON.stringify(s)}，门店id：${this.app.$poi.getPoiIdStr()}，code：${e}`),(0,N.isMMP)()&&(0,N.isMT)()&&"tuanApp"===i?g.log.warn(`不刷新购物车 isMMP：${(0,N.isMMP)()}，isMT：${(0,N.isMT)()}，fromApp：${i}`):this.app.$poi.getPoiIdStr()&&0!==e&&this.operateCart()}operateCart(){return t=this,e=arguments,s=function*({cartOpType:t="LOGIN",cartOpSource:e="CART",opTarget:s={},shippingType:i=-1,isSelectedSkuId:r=!1,forceRefresh:o=!1,lxData:a={},showSuccessToast:n=!0,tempCartId:u="",createTempCart:c=!1,forbidFunctionAnimation:h=!1,needAnimation:d=!0,layerRender:m=!1,trafficSource:T,needItems:C=!1,requestSource:N="",addSource:y=-1}={},I){var f,v;const O=this.app.page();this.message="";const{$service:R,$poiId:E,$cat:L,$poi:k}=this.app,{LOGIN_REFRESH_CART_SUCCESS:M,SKU_DETAIL_CART_RECOMMEND:$}=this.event.CONTANTS;if(!k.getPoiIdStr())return g.log.warn(`购物车请求没有门店id，cartOpType: ${t}, cartOpSource: ${e}, route: ${O.route}`),{};if("pages/cart/index"!==O.route&&"pages/cartLanding/index"!==O.route&&"REFRESH"===t&&!o)return g.log.info(`购物车使用simple接口，cartOpType: ${t}, cartOpSource: ${e}, route: ${O.route}`),this.refreshCart({trafficSource:T});try{const{bid:o,decreaseBid:L,valLab:k={},opts:D={}}=a,U=["DECREASE"],b=["INCREASE","INCREASE_GIFT"].indexOf(t)>=0,P=U.indexOf(t)>=0,Q=d&&b&&(null==(f=null==I?void 0:I.touches)?void 0:f[0]);Q&&this.cartAnimationStart(),d&&b&&!I&&g.log.error("需要加车动画但是没传event变量",{needAnimation:d,isAddingCart:b,e:I}),d&&b&&I&&!(null==(v=null==I?void 0:I.touches)?void 0:v[0])&&g.log.warn("需要加车动画, 非touch或tap事件",{needAnimation:d,isAddingCart:b,e:I}),Q&&!h&&A.default.emit(A.default.CONTANTS.ADD_CART_ANIMATION,I);let x="";const G=P&&L?L:o;G&&(x=this.app.$lxLog.mc(G,k,D).requestId);let w=null==s?void 0:s.opTargets;if(Array.isArray(w)&&w.length&&(b||P||x)){const t=x||this.app.$lxLog.generateRequestId(),e={},s=[];w.forEach((i=>{e[i.skuId]||(s.push(l(p(l({},i),{businessId:t}),~y?{addSource:y}:{})),e[i.skuId]=!0)})),w=s}const q=N?{requestSource:N}:{},j=yield R.refreshCart(l({cartOpType:t,cartOpSource:e,opTarget:p(l({},s),{opTargets:w}),poiId:E,poiIdStr:this.app.$poi.getPoiIdStr(),shippingType:i,tempCartId:u,createTempCart:c,layerRender:m,needItems:C},q),l(l({},T?{trafficSource:T}:{}),this.app.$externalSource?{externalSourceList:this.app.$externalSource}:{}));if(this.event.emit(this.event.CONTANTS.ITEMS_REQUEST,j),"REFRESH"!==t&&this.app.$cat.reportCustomMetrics(S.YXReportTarget.ADD_CART,1,{result:"success",route:O.route}),j&&"LOGIN"!==t){let e="";"INCREASE"===t&&j.addSuccess&&((~O.route.indexOf("pages/skuDetail/index")||~O.route.indexOf("subPackages/skuComment/pages/list/index"))&&r&&(this.judgeAnimation(Q)?(this.needRecommend=!1,this.event.emit($)):this.needRecommend=!0),!n||Q&&!this.notShowAnimation?n&&(this.message="加入购物车成功"):(e="加入购物车成功",this.message="")),j.toastMsgs&&j.toastMsgs.length&&([e]=j.toastMsgs),O.toast({message:e,duration:2e3}),j.toastMessage=e}this._couponData={cacheId:j.cacheId,reducedMoney:j.allItemsCounts},this.event.emit(_,l({},j)),"LOGIN"===t&&this.event.emit(M);const H=this.getSkuDiff(j);if(u)this._virtualCartNum=j&&j.allItemsCounts?j.allItemsCounts:0,this._virtualSkuQtyList=j&&j.skuQtyList?j.skuQtyList:[],this.event.emit(this.event.CONTANTS.VIRTUAL_UPDATE_SKU_COUNT,{opTarget:H}),this.judgeAnimation(Q)&&this.event.emit(this.event.CONTANTS.VIRTUAL_CARTNUM_CHANGE,{allItemsCounts:this._virtualCartNum});else{this._cartNum=j&&j.allItemsCounts?j.allItemsCounts:0,this._cartTotalNum=j&&j.totalItemCounts?j.totalItemCounts:0,this._cartMony=j&&j.realTotalAmount?j.realTotalAmount:0,this._reducedMoney=j&&j.reducedAmountV2?j.reducedAmountV2:0,this._skuQtyList=j&&j.skuQtyList?j.skuQtyList:[],this.setProductIdObj(),this.event.emit(this.event.CONTANTS.CARTMONEY_CHANGE,{realTotalAmount:this._cartMony,reducedAmountV2:this._reducedMoney}),this.event.emit(this.event.CONTANTS.UPDATE_SKU_COUNT,{opTarget:H});const t=!!(j.skuQtyList||[]).find((t=>(t.skuDetailInfos||[]).find((t=>1===t.type&&t.containsNewPromotion))));this.event.emit(this.event.CONTANTS.CART_SPECIAL_SKU,{containsNewRedemption:t}),this.judgeAnimation(Q)&&(this.event.emit(this.event.CONTANTS.CARTTOTALNUM_CHANGE,{totalItemCounts:this._cartTotalNum}),this.event.emit(this.event.CONTANTS.CARTNUM_CHANGE,{allItemsCounts:this._cartNum}))}return g.log.info(`购物车请求成功获取数据，当前页面为：${O.route}，购物车内商品：${this._skuQtyList.map((t=>t.skuId)).join(",")}`),j}catch(e){if(g.log.warn(`购物车操作失败，cartOpType=${t}，poiId=${E}，poiIdStr= ${this.app.$poi.getPoiIdStr()}，route: ${O.route}`),"REFRESH"!==t){const t=(null==e?void 0:e.message)||"error";~t.indexOf("服务器")?(this.app.$cat.reportCustomMetrics(S.YXReportTarget.ADD_CART,1,{result:t,route:O.route}),this.app.$cat.reportCustomMetrics(S.YXReportTarget.ADD_CART_SERVE,0,{result:t})):this.app.$cat.reportCustomMetrics(S.YXReportTarget.ADD_CART,0,{result:t,route:O.route})}return O&&O.toast&&O.toast(I&&I.message||"购物车刷新失败"),{}}},new Promise(((i,r)=>{var o=t=>{try{n(s.next(t))}catch(t){r(t)}},a=t=>{try{n(s.throw(t))}catch(t){r(t)}},n=t=>t.done?i(t.value):Promise.resolve(t.value).then(o,a);n((s=s.apply(t,e)).next())}));var t,e,s}judgeAnimation(t){return!t||this.animationDone}cartAnimationStart(){this.animationDone=!1,this.notShowAnimation=!1}cartAnimationDone({notShowAnimation:t=!1}={}){this.notShowAnimation=t,t&&this.message&&this.app.page().toast(this.message),this.animationDone=!0,this.needRecommend&&(this.needRecommend=!1,this.event.emit(this.event.CONTANTS.SKU_DETAIL_CART_RECOMMEND)),this.event.emit(this.event.CONTANTS.VIRTUAL_CARTNUM_CHANGE,{allItemsCounts:this._virtualCartNum}),this.event.emit(this.event.CONTANTS.CARTTOTALNUM_CHANGE,{totalItemCounts:this._cartTotalNum}),this.event.emit(this.event.CONTANTS.CARTNUM_CHANGE,{allItemsCounts:this._cartNum})}goToCartLanding(t,e){var s;const i=getApp(),r=getCurrentPages(),o=null==(s=r[r.length-2])?void 0:s.route;o&&o.includes("pages/cartLanding/index")?i.$router.triggerBack("goToCartLanding"):i.$router.goto("/pages/cartLanding/index",{trafficSource:t,needToastMessage:e})}getSkuDiff(t){const e=this._skuQtyList,s=t.skuQtyList;let i;if(Array.isArray(s))if(s.length){const t={},r=this.skuQtyList,o=[];s.forEach((e=>{t[e.skuId]=e.quantity,r[e.skuId]||o.push({skuId:e.skuId})}));i={opTargets:e.filter((e=>e.quantity!==t[e.skuId])).map((t=>({skuId:t.skuId,productId:t.productId}))).concat(o)}}else i={opTargets:[].concat(e)};return i}setProductIdObj(){if(Array.isArray(this._skuQtyList)){const t={};this._skuQtyList.forEach((e=>{const{productId:s}=e;s&&(t[s]?t[s]+=+e.quantity:t[s]=+e.quantity)})),this._productIdObj=t}}getSkuNumByProductId(t){return this._productIdObj[t]}getCartFontRate(){if(!this.fontRate){const t=T.BigFont.getABZoomRateCache()||1;this.fontRate=t>1?t<1.4?2:3:1}return this.fontRate}destory(){}operateSubmitCart(t,e,{cartOpType:s="LOGIN",opTarget:i={},lxData:r={},showSuccessToast:o=!1,tempCartId:a=""}={}){const n=this.app.page();this.message="";const{$poiId:u}=this.app,{LOGIN_REFRESH_CART_SUCCESS:c,SKU_DETAIL_CART_RECOMMEND:h}=this.event.CONTANTS;if(!u)return g.log.warn(`购物车请求没有门店id，cartOpType: ${s}, route: ${n.route}`),{};try{const{bid:e,decreaseBid:a,valLab:u={},opts:h={}}=r,d=["DECREASE"],m=["INCREASE","INCREASE_GIFT"].indexOf(s)>=0,T=d.indexOf(s)>=0;let C="";const A=T&&a?a:e;if(A){C=this.app.$lxLog.mc(A,u,h).requestId}let N=null==i?void 0:i.opTargets;if(N&&N.length&&(m||T||C)){const t=C||this.app.$lxLog.generateRequestId();N=N.map((e=>p(l({},e),{businessId:t})))}if(this.event.emit(this.event.CONTANTS.ITEMS_REQUEST,t),"REFRESH"!==s&&this.app.$cat.reportCustomMetrics(S.YXReportTarget.ADD_CART,1,{result:"success",route:n.route}),t&&"LOGIN"!==s){let e="";"INCREASE"===s&&t.addSuccess&&(o?(e="加入购物车成功",this.message=""):o&&(this.message="加入购物车成功")),t.toastMsgs&&t.toastMsgs.length&&([e]=t.toastMsgs),n.toast({message:e,duration:2e3})}this._couponData={cacheId:t.cacheId,reducedMoney:t.allItemsCounts},this.event.emit(_,l({},t)),"LOGIN"===s&&this.event.emit(c);const y=this.getSkuDiff(t);this._cartNum=t&&t.allItemsCounts?t.allItemsCounts:0,this._cartTotalNum=t&&t.totalItemCounts?t.totalItemCounts:0,this._cartMony=t&&t.realTotalAmount?t.realTotalAmount:0,this._reducedMoney=t&&t.reducedAmountV2?t.reducedAmountV2:0,this._skuQtyList=t&&t.skuQtyList?t.skuQtyList:[],this.setProductIdObj(),this.event.emit(this.event.CONTANTS.CARTMONEY_CHANGE,{realTotalAmount:this._cartMony,reducedAmountV2:this._reducedMoney}),this.event.emit(this.event.CONTANTS.UPDATE_SKU_COUNT,{opTarget:y});const I=!!(t.skuQtyList||[]).find((t=>(t.skuDetailInfos||[]).find((t=>1===t.type&&t.containsNewPromotion))));return this.event.emit(this.event.CONTANTS.CART_SPECIAL_SKU,{containsNewRedemption:I}),this.event.emit(this.event.CONTANTS.CARTTOTALNUM_CHANGE,{totalItemCounts:this._cartTotalNum}),this.event.emit(this.event.CONTANTS.CARTNUM_CHANGE,{allItemsCounts:this._cartNum}),g.log.info(`购物车请求成功获取数据，当前页面为：${n.route}`),t}catch(t){if(g.log.warn(`购物车操作失败，cartOpType=${s}，poiId=${u}，route: ${n.route}`),"REFRESH"!==s){const e=(null==t?void 0:t.message)||"error";~e.indexOf("服务器")?(this.app.$cat.reportCustomMetrics(S.YXReportTarget.ADD_CART,1,{result:e,route:n.route}),this.app.$cat.reportCustomMetrics(S.YXReportTarget.ADD_CART_SERVE,0,{result:e})):this.app.$cat.reportCustomMetrics(S.YXReportTarget.ADD_CART,0,{result:e,route:n.route})}return n.toast(t&&t.message||"购物车刷新失败"),{}}}});