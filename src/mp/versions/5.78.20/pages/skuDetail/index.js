var e=Object.create,t=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,r=e=>t(e,"__esModule",{value:!0}),n=n=>((e,a,r)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let n of i(a))o.call(e,n)||"default"===n||t(e,n,{get:()=>a[n],enumerable:!(r=s(a,n))||r.enumerable});return e})(r(t(null!=n?e(a(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n),l=(e,t,s)=>new Promise(((i,a)=>{var o=e=>{try{n(s.next(e))}catch(e){a(e)}},r=e=>{try{n(s.throw(e))}catch(e){a(e)}},n=e=>e.done?i(e.value):Promise.resolve(e.value).then(o,r);n((s=s.apply(e,t)).next())}));((e,s)=>{for(var i in r(e),s)t(e,i,{get:s[i],enumerable:!0})})(exports,{default:()=>Q});var u=n(require("../../ob.js")),d=n(require("../../u8.js")),c=n(require("../../ug.js")),p=n(require("../../is.js")),m=n(require("../../iu.js")),h=n(require("./ho.js")),g=n(require("../../u3.js")),y=n(require("../../ux.js")),S=n(require("../../u5.js")),k=n(require("../../aw.js")),f=n(require("./hi.js")),v=n(require("../../ht.js")),D=n(require("./hy.js")),x=n(require("./ha.js")),I=n(require("./hp.js")),_=n(require("./hu.js")),R=n(require("./hd.js")),C=n(require("./hf.js")),T=n(require("./hs.js")),w=n(require("./hg.js")),b=n(require("./hk.js")),L=n(require("./hh.js")),P=n(require("./hj.js")),U=n(require("./hl.js")),O=n(require("./hc.js")),H=n(require("./hz.js")),$=n(require("./hn.js")),M=n(require("./hb.js")),A=n(require("./hx.js")),j=n(require("./hm.js")),q=n(require("./hv.js")),E=n(require("./h1.js")),B=n(require("./h2.js")),V=n(require("./h4.js")),F=n(require("./h3.js")),N=n(require("./h5.js")),K=n(require("./h8.js")),G=n(require("./h7.js")),X=n(require("./h6.js")),W=n(require("./h9.js")),Y=n(require("./h0.js")),Z=n(require("./jq.js")),z=require("../../er.js"),J=getApp(),Q=class{constructor(){var e,t;this.skuDetailMetricReport=new V.default,this.__isSkuDetailPage=!0,this.checkUserRole=function(){return l(this,null,(function*(){if(!this.data.isLogin)return;const{userRole:e=1,strategy:t}=yield y.default.getUserRoleInfo();2===e&&"a"===t&&(S.$poi&&S.$poi.getPoiIdStr()&&S.$poi.getPoiId()||(u.log.warn("分享卡片不带poi问题优化"),wx.hideShareMenu({})),this.commonData.isTuanZhangRole=!0)}))},this.onPageScroll=function(e){var t,s;this.showReturnTop(e.scrollTop),null==(s=null==(t=this.controllers)?void 0:t.delayRenderController)||s.setPageScrollStatus(e.scrollTop),this.setDeclarationObserver()},this.initController=function(){this._service=new x.default(this),this.controllers={delayRenderController:new F.default(this),skuDetailLxReport:new I.default(this),skuShareImageController:new _.default(this),skuSharePosterController:new R.default(this),skuPriceHandle:new C.default,seckillPriceHandle:new $.default,skuSpecificationHandle:new T.default,brandAreaHandle:new w.default,deliveryInfoHandle:new L.default,navigatorRowHandle:new B.default,guaranteeRemindHandle:new P.default,multiSuppliersHandle:new U.default,skuRecommendHandle:new O.default,middleBannerHandle:new H.default,skuCommentHandle:new A.default,cookbookRecommendHandle:new M.default,groupBuyEntryHandle:new j.default,skuTitleHandle:new q.default,skuIntroductionHandle:new E.default,boardHandle:new N.default,skuImageHandle:new K.default,faqHandle:new X.default,rookieAreaHandle:new G.default,buttonTipsHandle:new W.default,movingPayHandle:new Y.default,navigatorBarHandle:new f.default(this,this.data.isShowReturnTop)}},this.initCommonData=function(){this.commonData={countdownVO:null,skuTitle:null,seckillingSubType:null,shareImgUrl:null,picUrls:null,sellPrice:null,dashPrice:null,dashPriceReference:null,promotionPrice:null,selectedSkuSpecList:null,categoryClickText:null,firstCategoryId:null,firstCategoryName:null,subStatus:null,commonButtonLxData:null,isTuanZhangRole:!1}},this.operateCart=function({cartOpType:e="",cartOpSource:t="",opTargets:s=[],isSelectedSkuId:i=!1,lxData:a={},forceRefresh:o=!1}={},r){S.$cart.operateCart({cartOpType:e,cartOpSource:t||"ITEMDETAIL",opTarget:{opTargets:s},isSelectedSkuId:i,lxData:a,forceRefresh:o},r)},this.passNavHeight=function(e){const t=e.detail;this.setData({navigationHeight:t})},this.moreSkuRecommendEnd=function(e){this.setData({isRecListEnd:!0})},this.moreSkuRecommendFirstPageLoaded=function(e){this.firstPageLoaded=!0},this.returnTop=function(){this.backTopFinish=!1,this.setData({isShowReturnTop:!1}),wx.pageScrollTo({scrollTop:0,duration:500,complete:()=>{this.backTopFinish=!0}})},this.jumpToHomePage=function(e){const{type:t}=e.currentTarget.dataset;let s="b_youxuan_ngz4xruy_mc";"navigator"===t&&(s="b_youxuan_5ewou67f_mc"),S.$lxLog.mc(s,{sku_id:this.data.currentSkuId,product_id:this.data.productId||-999}),S.$router.goto("igrocery://www.grocery.com/main")},this.onShowModal=function(e){const{showModal:t}=e.detail;this.setData({showModal:t})},this.genGroupShareParams=function(e){var t;try{const s=JSON.parse(JSON.stringify(e)),{from:i="",skuId:a=""}=null==(t=null==J?void 0:J.$appShowOptions)?void 0:t.query;return i&&a&&e&&e.path&&(s.path+=`&start_from=${i}&start_sku_id=${a}`),s}catch(e){}},this.onShareAppMessage=function(e){var t,s,i,a,o;e.sharePageObject="商品",e.shareButtonObject=this.data.shareButtonObject,e.sharePosition=this.data.sharePosition;let r=`pages/skuDetail/index?shareUserId=${(null==(t=S.$user)?void 0:t.getUserId())||""}`;(0,d.isMTChannel)()||(r=`/${r}`),(0,d.isMMP)()&&(0,d.isMT)()&&(r=`/youxuan/${r}`);const n=((null==(s=this.data.skuImageData)?void 0:s.picUrls)||[])[0]||"",{path:l,requestId:u}=S.$lxLog.genLxSharePath(this.route,r,{originalPoiId:S.$poi.getPoiId(),poiIdStr_originalPoiId:S.$poi.getPoiIdStr(),skuId:this.data.currentSkuId,skuCardPicUrl:n});this.lxReportOnShareFriend(e,l,u);const c=(null==(a=null==(i=this.controllers)?void 0:i.skuShareImageController)?void 0:a.getShareTitle())||"美团优选";this.reportCreateSuccessStatistical(this.commonData.shareImgUrl||"");try{let e={title:c,imageUrl:this.commonData.shareImgUrl||(null==(o=this.commonData.picUrls)?void 0:o.length)&&this.commonData.picUrls[0]||"",path:l};return(0,d.isMMP)()&&(0,d.isMT)()&&(e.appId="gh_870576f3c6f9"),e=this.genGroupShareParams(e),e}catch(e){S.$cat.reportError(m.CAT_SEC_CATEGORY.SHARE_APP_MESSAGE(`shareAppMessage error:${e};skuId:${this.data.currentSkuId};poiIdStr:${S.$poi.getPoiIdStr()};poiId:${S.$poi.getPoiId()}`))}},this.tapButton=function(e){const t=this.selectComponent("#sku-bottom-btn");t&&t.tapButton(e)},this.reportCreateSuccessStatistical=function(e){var t,s,i,a,o,r,n,l;e?S.$cat.reportCustomMetrics(p.YXReportTarget.SKU_DETAIL_SHARE_FRIEND_REPORT,p.ReportValue.SUCCESS,{wxAppVersion:S.$version||"default",sdkVersion:(null==(s=null==(t=S.$systemInfo)?void 0:t.systemInfo)?void 0:s.SDKVersion)||"default",version:(null==(a=null==(i=S.$systemInfo)?void 0:i.systemInfo)?void 0:a.version)||"default",result:p.SkuDetailShareFriendResult.SUCCESS_FROM_SKU_DATA}):S.$cat.reportCustomMetrics(p.YXReportTarget.SKU_DETAIL_SHARE_FRIEND_REPORT,p.ReportValue.FAILED,{wxAppVersion:S.$version||"default",sdkVersion:(null==(r=null==(o=S.$systemInfo)?void 0:o.systemInfo)?void 0:r.SDKVersion)||"default",version:(null==(l=null==(n=S.$systemInfo)?void 0:n.systemInfo)?void 0:l.version)||"default",result:p.SkuDetailShareFriendResult.FAIL})},this.cookBookMoreUrl=function(e){const{jumpUrl:t}=e.currentTarget.dataset;t&&S.$router.goto(t)},this.onOpenShare=function(e){var t,s;if((0,d.isApp)())if((0,g.default)((null==(s=null==(t=getApp().$systemInfo)?void 0:t.systemInfo)?void 0:s.appVersion)||"0.0.0","6.6.0")>=0){const t=this;mmp.callCustomAPI("isInstalledApp",{scheme:"weixin://",packageName:"com.tencent.mm",success(s){s.installed?t.handleOpenShare(e):getApp().page().toast("未安装微信")},fail(s){u.log.error("判断是否安装微信失败",s),t.handleOpenShare(e)}})}else this.handleOpenShare(e);else this.handleOpenShare(e)},this.handleOpenShare=function(e){var t,s,i,a,o,r;if(this.commonData.isTuanZhangRole&&!S.$poi.getPoiIdStr()&&!S.$poi.getPoiId())return u.log.warn("分享卡片不带poi问题优化"),void this.toast("请重新打开小程序进行分享");if(0===Object.keys(this.initOptions).length)return void u.log.info("<skuDetailIndex onOpenShare preload> 预加载 不能打开分享弹窗");u.log.info("<skuDetailIndex onOpenShare> 打开分享弹层");const n=null==(i=null==(s=null==(t=null==e?void 0:e.detail)?void 0:t.currentTarget)?void 0:s.dataset)?void 0:i.sharePosition,l=null==(r=null==(o=null==(a=null==e?void 0:e.detail)?void 0:a.currentTarget)?void 0:o.dataset)?void 0:r.shareButtonObject;S.$lxLog.mc("b_youxuan_slb1efhp_mc",{sku_id:this.data.currentSkuId}),this.setData({isShareShow:!0,sharePosition:n||"",shareButtonObject:l||""}),J.$lxLog.mv("b_youxuan_hjet0k5m_mv",{share_content:"skudetail",product_id:this.data.productId||-999});try{setTimeout((()=>{var e,t;return null==(t=null==(e=this.controllers)?void 0:e.skuSharePosterController)?void 0:t.setSkuSharePosterConfig("")}),100)}catch(e){u.log.info("设置海报信息 skuSharePosterController 原型报错上报 page: pages/skuDetail",e)}},this.onCloseShare=function(){this.setData({isShareShow:!1})},this.onMvReport=function(e){if(!e.detail.bid)return;const{__mvHandler:t}=this.data;"function"==typeof t&&t(e)},this.lxReportOnShareFriend=function(e,t,s){"button"===e.from&&(u.log.info("<skuDetailIndex lxReportOnShareFriend> 通过分享按钮转发"),S.$lxLog.mc("b_youxuan_oaczl9kt_mc",{share_to:"wx_friends",share_url:t||"",sku_id:this.data.currentSkuId})),"menu"===e.from&&(u.log.info("<skuDetailIndex lxReportOnShareFriend> 通过页面胶囊转发"),S.$lxLog.mc("b_youxuan_y5g64pno_mc",{share_url:t,sku_id:this.data.currentSkuId,product_id:this.data.productId||-999},{requestId:s}))},this.goBack=function(){var e;const{fromApp:t}=this.initOptions;if(S.$lxLog.mc("b_youxuan_3mwaj75h_mc",{sku_id:this.data.currentSkuId,product_id:this.data.productId||-999}),"tuanApp"===t&&(0,d.isMT)())return void wx.exitMiniProgram();(null==(e=getCurrentPages())?void 0:e.length)>1?S.$router.triggerBack("skuDetail-goBack"):S.$router.goto("igrocery://www.grocery.com/main")},this.showRedPacketBar=function(e){this.setData({redPackerBarHeight:e.detail})},this.keywordChange=function(e){var t;this.keywordListIndex=null==(t=e.detail)?void 0:t.current;const{keywordList:s=[],requestid:i=""}=this.data.navBarData||{},a=s[this.keywordListIndex];a&&!a.reported&&(J.$lxLog.mv("b_youxuan_to1xx3y4_mv",{keyword:a.showText||"",requestid:i}),a.reported=!0)},this.gotoSearchPage=function(){var e;const{keywordList:t}=null==(e=this.data)?void 0:e.navBarData;if(this.isReportKeyword()){const e=t[this.keywordListIndex],s=null==e?void 0:e.showText,i=null==e?void 0:e.searchText;this.controllers.navigatorBarHandle.onNavSearchTapLxMC(i),S.$router.goto(`/pages/searchResult/index?showText=${s}&searchText=${i}`)}else this.controllers.navigatorBarHandle.onNavSearchTapLxMC(),S.$router.goto("/pages/searchResult/index")},this.isReportKeyword=function(){const{isShowReturnTop:e,navBarData:t}=this.data,{showKeyword:s,keywordList:i}=t;return e&&s&&i.length>0&&-1!==this.keywordIndex},this.onNavSearchLxMV=function(e){const{__mvHandler:t}=this.data;"function"==typeof t&&t(e)},this.data={__isPageReady:!1,navigationHeight:0,currentSkuId:"",originalSkuId:"",productId:"",canReplacePoi:!1,needFold:0,showModal:!1,isShowReturnTop:!1,isLogin:!1,isIpx:(null==(e=S.$systemInfo.getSystemInfo())?void 0:e.isIpx)||!1,isMMP:(0,d.isMMP)(),isApp:(0,d.isApp)(),isMTTiny:(0,d.isMTTiny)(),isAppTiny:(0,d.isAppTiny)(),isMTTurbo:(0,d.isMTTurbo)(),isTT:(0,d.isTT)(),isShowTipBar:!0,commonRightButtonMVLxBid:"",isShareShow:!1,skuSharePosterConfig:null,skuShareDefaultPoster:"",redPackerBarHeight:0,isRecListEnd:!1,groupBuyEntryData:null,supportCustomNavigator:(0,h.supportCustomNavigator)(),loadFirstPageMoreRecommend:!1,deviceGrading:(null==(t=J.$deviceGrade)?void 0:t.getSimpleDeviceGrading())||-1,keywordAutoplay:!0},this.initOptions={},this.firstDisplaySkeleton=!0,this.isReportLVCDone=!1,this.isWXLive=!1,this.liveSpuId="",this.liveDefaultPoiId="",this.poiIdStr_liveDefaultPoiId="",this.sceneCode="",this.subChannel="",this.liveRoomNum="",this.backTopFinish=!0,this.keywordListIndex=-1,this.calcSearchStatusChange=0}onLoad(e){K.default.speedUpSkuDetailLVC(this,e),this.skuDetailMetricReport.resetReportSymbol(),this.skuDetailMetricReport.reportSkuDetailOnLoadCount(p.YXReportTarget,p.ReportValue,S.$cat,S.$version,S.$systemInfo),this.initController(),this.initCommonData();const t=null==e?void 0:e.sceneCode,s=null==e?void 0:e.subChannel,i=null==e?void 0:e.liveRoomNum,a=null==e?void 0:e.trafficSource,o=null==e?void 0:e.addSource;t&&(J.$sceneCode=t,this.sceneCode=t),i&&(J.$liveRoomNum=i,this.liveRoomNum=i),s&&(J.$subChannel=s,this.subChannel=s),this.trafficSource=a,this.addSource=o,this.isWXLive=t===k.SCENE_CODE.LIVE&&(0,d.isWX)(),this.initOptions=e,this.reported=!1}onReachBottom(){b.default.loadPagingRecomendSkus(this)}onPoiInfoUpdated(){return l(this,null,(function*(){const e=this.initOptions;if(this.liveDefaultPoiId=v.default.convertLiveDefaultPoiId(e),this.poiIdStr_liveDefaultPoiId=v.default.convertLiveDefaultStrPoiId(e),this.liveSpuId=null==e?void 0:e.liveSpuId,this.liveDefaultSkuId=null==e?void 0:e.liveDefaultSkuId,null==e?void 0:e.scene){const{skuId:t=""}=yield S.$appShowOptions.parseQueryScene(e.scene);t&&(e.skuId=t)}e.skuId=v.default.convertSkuId(e),(e.skuId||this.isWXLive)&&S.$poi.getPoiIdStr()&&(this.shareType=e.share_type,this.shareUserId=e.shareUserId,this.setData({isLogin:S.$login.isLogin(),originalPoiId:v.default.convertOriginalPoiId(e),poiIdStr_originalPoiId:v.default.convertStrOriginalPoiId(e,!1),originalSkuId:e.skuId,showRedPackertBar:1===parseInt(e.trafficSource,10),needFold:"1"===e.needFold,canReplacePoi:"901"===(null==e?void 0:e.sceneCode)}),this.isWXLive&&(yield this._service.getSkuIdByLiveSpu()),this.data.originalSkuId&&this._service.getSkuBasicData(this.data.originalSkuId,!1),(null==e?void 0:e.sceneCode)===k.SCENE_CODE.LIVE&&this.operateCart({cartOpType:"REFRESH",forceRefresh:!0}))}))}loadFirstImgSuccess(e){var t,s,i,a,o,r,n;const l=e.detail;if(0===(null==(s=null==(t=l.target)?void 0:t.dataset)?void 0:s.imageIndex)&&!this.isReportLVCDone){l.skuImageDisplayListLength&&this.skuDetailMetricReport.reportLVC(this.__pageLoadTime__);const e=(0,Z.isFromIndexLaunch2ReportSkuLVC)(),t=(0,Z.isFromSkuLaunch2ReportSkuLVC)();if(c.launchAppStartTime4Sku&&(e||t))(0,D.triggerSkuLVC)(D.TAG_METRICS.SKU_DETAIL_FROM_LAUNCH,null==(i=l.detail)?void 0:i.url,c.launchAppStartTime4Sku),e&&(0,D.triggerSkuLVC)(D.TAG_METRICS.SKU_DETAIL_FROM_LAUNCH_INDEX,null==(a=l.detail)?void 0:a.url,c.launchAppStartTime4Sku),t&&(0,D.triggerSkuLVC)(D.TAG_METRICS.SKU_DETAIL_FROM_LAUNCH_SKU,null==(o=l.detail)?void 0:o.url,c.launchAppStartTime4Sku),(0,c.clearLaunch2SkuLVCStartTime)(),this.isReportLVCDone=!0;else if((0,Z.isFromIndex2ReportSkuLVC)()){const e=this.initOptions.__RST;(0,D.triggerSkuLVC)(D.TAG_METRICS.SKU_DETAIL_FROM_INDEX,null==(r=l.detail)?void 0:r.url,e),this.isReportLVCDone=!0}(0,D.triggerSkuLVC)(D.TAG_METRICS.SKU_DETAIL_FROM_LOAD,null==(n=l.detail)?void 0:n.url,this.__pageLoadTime__),this.isReportLVCDone=!0}}loadFirstImgFail(){this.skuDetailMetricReport.setCanReportLVC(!1)}onShow(){return l(this,null,(function*(){var e,t;if(this.shown&&this.reported){const s=(null==(t=null==(e=this.data.groupBuyEntryData)?void 0:e.groupPrice)?void 0:t.text)?"groupBuySku":"otherSku";S.$lxLog.pv("c_youxuan_productdetail",{custom:{sku_id:this.data.currentSkuId,goods_type:s,page_source:v.default.getPageFromRoute(!1),product_id:this.data.productId||-999}})}this.shown=!0,this.setData({keywordAutoplay:!0})}))}onReady(){this.__fstDetailReport(6),this.skuDetailMetricReport.reportReady(this.__pageLoadTime__),this.skuDetailMetricReport.reportSkuDetailOnReadyCount(p.YXReportTarget,p.ReportValue,S.$cat,S.$version,S.$systemInfo),setTimeout((()=>{this.setDeclarationObserver()}),10),this.__fstDetailReport(7)}removeListeners(){}onHide(){this.setData({keywordAutoplay:!1}),(0,c.clearLaunch2SkuLVCStartTime)()}onUnload(){this.removeListeners()}setDeclarationObserver(){this.createIntersectionObserver().relativeToViewport({top:-150}).observe("#declaration-area",(e=>{const{loadFirstPageMoreRecommend:t}=this.data;!t&&e.intersectionRatio>0&&b.default.loadPagingRecomendSkus(this)}))}getPageSource(){const e=(0,S.pages)()||[];let t="";if(e.length&&e.length>1){const s=e[e.length-2];t=(null==s?void 0:s.route)||""}return t}showReturnTop(e){var t,s,i;const a=e>=100,{showNavSearch:o=!1}=Object(null==(t=this.data)?void 0:t.navBarData);a!==this.data.isShowReturnTop&&this.backTopFinish&&(this.calcSearchStatusChange<2&&o&&(J.$lxLog.mv("b_youxuan_2av1dp6k_mv",{status:a}),this.calcSearchStatusChange++),null==(i=null==(s=this.controllers)?void 0:s.navigatorBarHandle)||i.updateNavSearchStatus(a),this.setData({isShowReturnTop:a})),-1===this.keywordListIndex&&o&&this.searchBarReport(),this.keywordListIndex=0}searchBarReport(){const{keywordList:e=[],requestid:t=""}=this.data.navBarData||{};0!==e.length&&e[0]&&(J.$lxLog.mv("b_youxuan_to1xx3y4_mv",{keyword:e[0].showText||"",requestid:t}),e[0].reported=!0)}};z(new Q);