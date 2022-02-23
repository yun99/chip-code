var e=Object.create,t=Object.defineProperty,a=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,o=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,l=e=>t(e,"__esModule",{value:!0}),i=i=>((e,o,l)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let i of r(o))n.call(e,i)||"default"===i||t(e,i,{get:()=>o[i],enumerable:!(l=a(o,i))||l.enumerable});return e})(l(t(null!=i?e(o(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i);((e,a)=>{for(var r in l(e),a)t(e,r,{get:a[r],enumerable:!0})})(exports,{default:()=>d});var u=i(require("../../u5.js")),c=i(require("../../sm.js")),s=i(require("./nu.js")),d=class{static setCommonData(e,t,a){t.skuTitle=a.skuTitle||null,t.seckillingSubType=a.seckillingSubType||null,t.shareImgUrl=a.shareImgUrl||null,t.picUrls=a.picUrls||null,t.sellPrice=a.sellPrice||null,t.dashPrice=a.dashPrice||null,t.dashPriceReference=a.dashPriceReference||null,t.promotionPrice=a.promotionPrice||null,t.selectedSkuSpecList=a.selectedSkuSpecList||null,t.countdownVO=a.countdownVO||null,t.categoryClickText=a.categoryClickText||null,t.firstCategoryId=a.firstCategoryId||null,t.firstCategoryName=a.firstCategoryName||null,t.subStatus=a.subStatus||null}static getSectionRenderData(e,t){const{skuDetail:a,specialTopic:r,defaultWordListVO:o,M_TraceId:n}=t,l=this.getRenderSection1Data(e,a),i=this.getRenderSection2Data(e,o,n),u=this.getRenderSection3Data(e,a,r);return this.adjustRenderSectionData(e,t,l,i,u)}static adjustRenderSectionData(e,t,a,r,o){const{M_TraceId:n,skuDetail:l,skuDetailCombo:i,questionPageList:u,newCustomerArea:c,skuPagedListVO:s,skuReviewListVo:d,userRollBuyVO:D={}}=t,k=e.controllers.movingPayHandle.getMovingPayData(D),m=e.controllers.multiSuppliersHandle.getMultiSuppliersData(l),S=e.controllers.faqHandle.getFaqData(u,l.skuId,l.productId),g=e.controllers.skuCommentHandle.getSkuCommentData(d,l.skuId,e.data.originalSkuId,e.trafficSource,l.productPattern),p=e.controllers.cookbookRecommendHandle.getCookbookData(i,l.skuId),f=e.controllers.rookieAreaHandle.getRookieAreaData(c,l.skuId,l.productId,e.trafficSource,n),y=e.controllers.skuRecommendHandle.getSkuRecommendData(s,l.skuId,l.productId,e.trafficSource,n);return k?(a.movingPayData=k,o.multiSuppliersData=m,o.faqData=S,o.skuCommentData=g,o.cookbookData=p,o.rookieAreaData=f,o.skuRecommendData=y,{renderSection1Data:a,renderSection2Data:r,renderSection3Data:o}):m?(a.multiSuppliersData=m,o.faqData=S,o.skuCommentData=g,o.cookbookData=p,o.rookieAreaData=f,o.skuRecommendData=y,{renderSection1Data:a,renderSection2Data:r,renderSection3Data:o}):S?(a.faqData=S,o.skuCommentData=g,o.cookbookData=p,o.rookieAreaData=f,o.skuRecommendData=y,{renderSection1Data:a,renderSection2Data:r,renderSection3Data:o}):g?(a.skuCommentData=g,o.cookbookData=p,o.rookieAreaData=f,o.skuRecommendData=y,{renderSection1Data:a,renderSection2Data:r,renderSection3Data:o}):p?(a.cookbookData=p,o.rookieAreaData=f,o.skuRecommendData=y,{renderSection1Data:a,renderSection2Data:r,renderSection3Data:o}):f?(a.rookieAreaData=f,o.skuRecommendData=y,{renderSection1Data:a,renderSection2Data:r,renderSection3Data:o}):y?(a.skuRecommendData=y,{renderSection1Data:a,renderSection2Data:r,renderSection3Data:o}):{renderSection1Data:a,renderSection2Data:r,renderSection3Data:o}}static getRenderSection1Data(e,t){var a;return{renderSection1:!0,currentSkuId:t.skuId||null,productId:t.productId||null,productPattern:t.productPattern||1,skuImageData:e.controllers.skuImageHandle.getSkuImageData(t,(null==(a=e.initOptions)?void 0:a.skuCardPicUrl)||""),seckillPriceData:e.controllers.seckillPriceHandle.getSeckillPriceData(t),skuPriceData:e.controllers.skuPriceHandle.getSkuPriceData(t),skuTitleData:e.controllers.skuTitleHandle.getSkuTitleData(t,e),groupBuyEntryData:e.controllers.groupBuyEntryHandle.getGroupBuyEntryData(t),guaranteeRemindData:e.controllers.guaranteeRemindHandle.getGuaranteeRemindData(t),navigatorRowModuleParams:e.controllers.navigatorRowHandle.getNavigatorRowModuleParams(t),deliveryInfoData:e.controllers.deliveryInfoHandle.getDeliveryInfoData(t),boardData:e.controllers.boardHandle.getBoardData(t),skuBtnData:s.default.genSkuBtnData(t,{originalSkuId:e.data.originalSkuId,trafficSource:e.trafficSource,addSource:e.addSource})||null}}static getRenderSection2Data(e,t,a){return{renderSection2:!0,buttonTipsData:e.controllers.buttonTipsHandle.getButtonTipsData(e),navBarData:e.controllers.navigatorBarHandle.getNavBarData(null==t?void 0:t.list,a)}}static getRenderSection3Data(e,t,a){var r;const o={renderSection3:!0,skuSpecificationData:e.controllers.skuSpecificationHandle.getSkuSpecificationData(t),middleBannerData:e.controllers.middleBannerHandle.getMiddleBannerData(a,t.skuId,t.productId),brandAreaVO:e.controllers.brandAreaHandle.getBrandAreaData(t),skuIntroductionData:e.controllers.skuIntroductionHandle.getSkuIntroductionData(t),tipBar:t.tipBar||{},trafficSource:e.trafficSource||"",wxCodeReqParams:{scid:"c_youxuan_productdetail",poiId:u.$poi.getPoiId(),poiIdStr:u.$poi.getPoiIdStr(),skuId:t.skuId||"",userId:(null==(r=u.$user)?void 0:r.getUserId())||"",posterType:c.SHARE_POSTER_TYPE.SKUDETAIL},sharePostLxMc:{bid:"b_youxuan_oaczl9kt_mc",params:{share_to:"wx_moments",share_url:"",sku_id:t.skuId}}};return e.controllers.skuPriceHandle.showCountDown(t)&&(o["skuPriceData.showCountDown"]=!0),e.controllers.seckillPriceHandle.showCountDown(t)&&(o["seckillPriceData.showCountDown"]=!0),o}};