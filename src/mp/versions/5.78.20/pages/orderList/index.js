var t=Object.create,e=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,c=(t,e)=>{for(var r in e||(e={}))d.call(e,r)&&l(t,r,e[r]);if(n)for(var r of n(e))u.call(e,r)&&l(t,r,e[r]);return t},h=(t,e)=>r(t,a(e)),p=t=>e(t,"__esModule",{value:!0}),m=r=>((t,r,a)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let n of i(r))d.call(t,n)||"default"===n||e(t,n,{get:()=>r[n],enumerable:!(a=o(r,n))||a.enumerable});return t})(p(e(null!=r?t(s(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),g=(t,e,r)=>new Promise(((o,a)=>{var i=t=>{try{s(r.next(t))}catch(t){a(t)}},n=t=>{try{s(r.throw(t))}catch(t){a(t)}},s=t=>t.done?o(t.value):Promise.resolve(t.value).then(i,n);s((r=r.apply(t,e)).next())}));((t,r)=>{for(var o in p(t),r)e(t,o,{get:r[o],enumerable:!0})})(exports,{default:()=>k});var _=m(require("../../er.js")),f=m(require("../../a0.js")),y=m(require("../../ob.js")),T=m(require("../../sn.js")),O=m(require("../../sm.js")),b=m(require("../../f8.js")),R=m(require("../../g8.js")),I=m(require("../../p3.js")),E=m(require("../../u8.js")),D=m(require("./g7.js")),x=m(require("./g6.js")),P=m(require("./s1.js")),S=m(require("./p9.js")),v=m(require("./f0.js")),L=m(require("./gv.js")),w=m(require("./gc.js")),$=m(require("./gr.js")),{formatTime:C}=require("../../p0.js"),A=require("./g5.js"),U=getApp();P.default.register(U.$module);var M="<OrderList>";P.default.register(U.$module);var k=class{constructor(){var t;this.windowHeight=wx.getSystemInfoSync().windowHeight,this.lockMap={},this.paginationMap={},this.orderShareController=null,this.paying=!1,this.tapOrderId="",this.operatingOrderId="",this.loopTimeout=null,this.currentTab=-1,this.onLoad=function(t){U.$store.remove("is_delete_order"),U.$lxLog.mv("b_youxuan_r8hystzp_mv",{},{cid:"c_youxuan_yreh1gp9"}),this.renderStartTime=Date.now(),this.options=t;let{tabList:e,noticeBoardData:r}=this.data;this.currentTab=+t.cur_tab||+t.tab||D.ORDER_CATEGORY.ALL,this.currentTab===D.ORDER_CATEGORY.REFUND&&(U.$lxLog.pv("c_youxuan_4d4exod2"),wx.setNavigationBarTitle({title:"退款/售后"}),e=[{category:D.ORDER_CATEGORY.REFUND}],r.bid="b_youxuan_usko8xuj"),r.opsource=`ORDER_LIST_${this.currentTab}`,r.lxParams={tab_name:this.currentTab},this.setData({showTab:this.currentTab!==D.ORDER_CATEGORY.REFUND,tabList:e,currentTab:this.currentTab,noticeBoardData:r}),this.initPagination(e),this.initShareController(),this.getNoticeInfo(this.currentTab),wx.hideShareMenu({}),y.log.info(M,"[onLoad] 进入订单列表页",{tabList:e,currentTab:this.currentTab,options:t}),1==+t.showPop&&t.orderId&&this.getShareCoupon(t.orderId),(0,E.isWX)()&&setTimeout((()=>{var t;(0,R.getPrefetchBundle)({openId:U.getModule("user").getOpenId(),name:"pay-finance-cashier",env:"gray",app:"grocery_mp_pay",dynamicEnv:null==(t=U.$env)?void 0:t.getDynamicEnv()})}),0)},this.onHide=function(){clearTimeout(this.loopTimeout)},this.onUnload=function(){clearTimeout(this.loopTimeout)},this.onShow=function(){U.isLogin()&&(this.refresh(),this.tapOrderId&&(this.refreshOrder(this.tapOrderId),this.tapOrderId=""))},this.onPullDownRefresh=function(){U.isLogin()&&(this.resetPagination(this.currentTab),this.toGetOrderList(this.currentTab,"top"),wx.stopPullDownRefresh())},this.onReachBottom=function(){var t;if(U.isLogin()){const{offset:e,total:r}=(null==(t=this.paginationMap)?void 0:t[this.currentTab])||{};e+10<r&&(this.paginationMap[this.currentTab].offset=e+10,this.toGetOrderList(this.currentTab,"bottom"))}},this.onShareAppMessage=function(t){var e;const{currentTab:r,renderMap:o}=this.data,{orderId:a,poiId:i,poiIdStr:n,groupId:s}=t.target.dataset.obj,d=null==(e=o[r])?void 0:e.list.find((t=>t.orderId===a)),u={orderId:a,poiId:i,poiIdStr:n,groupId:s,from:"orderList",shareCardType:$.ShareCardType.TYPE_REMIND_RECEIPT};return d.token&&(u.token=d.token),this.orderShareController.getShareMessage(u,(t=>{const{path:e,requestId:r}=U.$lxLog.genLxSharePath(this.route,t.path);t.path=e,U.$lxLog.mc("b_youxuan_baelpi5a_mc",{share_url:t.path,order_id:a},{requestId:r})}))},this.initPagination=function(t){this.paginationMap={},t.forEach((t=>{this.resetPagination(t.category)})),y.log.info(M,"[initPagination] 设置paginationMap完成",this.paginationMap)},this.resetPagination=function(t){this.paginationMap[t]={offset:0,total:0}},this.initShareController=function(){this.orderShareController=new v.default},this.refresh=function(t=this.currentTab){this.paginationMap[t]||(y.log.warn(M,"[refresh] 刷新时没有pagination",{paginationMap:this.paginationMap,category:t}),this.resetPagination(t)),this.paginationMap[t].offset=0,this.toGetOrderList(t,"top"),y.log.info(M,"[refresh] 刷新页面")},this.refreshOrder=function(t,e=!0){var r,o,a;const{currentTab:i,renderMap:n}=this.data;if(!n[i]||!(null==(r=n[i])?void 0:r.list))return void y.log.warn(M,`[refreshOrder] 当前列表无数据！currentTab: ${i}, orderId: ${t}`);y.log.info(M,`[refreshOrder] 准备刷新单个订单${t},currentTab: ${i}`),this.loading({show:!0,loadingType:"two_dot"});const s=U.$store.getCacheValue("is_delete_order");U.$store.remove("is_delete_order");for(let r=0;r<(null==(o=n[i])?void 0:o.list.length);r++){const o=null==(a=n[i])?void 0:a.list[r];if(o.orderId===t){i!==D.ORDER_CATEGORY.REFUND&&(e&&o.orderGroupOpFlag&&this.refreshOrderGroup(o),S.getOrderList({offset:0,limit:1,type:i,queryOrderId:t}).then((e=>{var r,o;if(!e)throw new Error;const{currentTab:a,renderMap:i}=this.data,n=this.renderData(a,e.orderList),d=null==(o=null==(r=i[a])?void 0:r.list)?void 0:o.findIndex((e=>e.orderId===t));void 0!==d&&-1!==d&&(n.length>0?([i[a].list[d]]=n,y.log.info(M,`[refreshOrder] 刷新订单${t},currentTab: ${a}`)):(0===n.length&&a!==D.ORDER_CATEGORY.ALL||s)&&(this.removeOrder(a,t),y.log.info(M,`[refreshOrder] 刷新后订单不在当前tab下,删除该订单${t},currentTab: ${a}`)),this.setData({renderMap:i}))})).catch((e=>{this.toast({message:e.message||" 数据更新失败，请刷新"}),y.log.error(M,`[refreshOrder] 刷新订单失败${t}`,e)})).then((()=>{this.loading(!1)})));break}}},this.refreshOrderGroup=function(t){if(t.orderGroupOpFlag){const{currentTab:e,renderMap:r}=this.data;r[e].list.forEach((r=>{t.orderId!==r.orderId&&r.orderGroupOpFlag&&(y.log.info(M,`[refreshOrderGroup] 更新组合订单${r.orderId},currentTab: ${e}`),this.refreshOrder(r.orderId,!1))}))}},this.removeOrder=function(t,e){var r;const{renderMap:o}=this.data;o[t]&&(o[t].list=null==(r=o[t])?void 0:r.list.filter((t=>t.orderId!==e)),this.paginationMap[t].total-=1,this.paginationMap[t].offset-=1,this.setData({renderMap:o},(()=>{this.checkTabEmpty(),y.log.info(M,"[removeOrder] 删除订单成功",this.paginationMap[t])})))},this.toChangeTab=function(t){const{category:e}=t.currentTarget.dataset;this.changeTab(e),this.getNoticeInfo(),U.$lxLog.mc("b_youxuan_9d1gtn0f_mc",{tab_name:e,poiId:U.$poiId,poiIdStr:U.$poi.getPoiIdStr()})},this.changeTab=function(t){this.resetPagination(t),this.currentTab=t,this.setData({currentTab:t,noticeBoardOpsource:`ORDER_LIST_${t}`,noticeBoardLxParams:{tab_name:t},recommendSkus:{show:!1,data:{},total:0,offset:0,limit:10,isNoMoreCommand:!1}}),this.toGetOrderList(t,"top"),wx.pageScrollTo({scrollTop:0,duration:0}),this.hideMoreBtn()},this.toGetOrderList=function(t=this.currentTab,e="top"){var r;(null==(r=this.lockMap[t])?void 0:r.from)!==e&&this.getOrderList(t,e)},this.getOrderList=function(t,e="top"){var r;const{offset:o,total:a}=(null==(r=this.paginationMap)?void 0:r[t])||{};if(void 0===o)return this.toast("数据异常！"),void y.log.warn(M,"[getOrderList] offset 异常");const{oftenBuyData:i}=this.data,n="top"===e,s=n&&a>0;this.error(!1);const d=Date.now();this.lockMap[t]={from:e,flag:d},this.loading({show:n,loadingType:"two_dot"}),i.show=!1,this.setData({isLoadingList:!0,oftenBuyData:i});(t===D.ORDER_CATEGORY.REFUND?S.getRefundOrderList:S.getOrderList)({offset:o,limit:s?50:10,type:t,queryScene:s?"switchRefresh":null,isNeedToken:t!==D.ORDER_CATEGORY.REFUND}).then((e=>{var r;if(d!==(null==(r=this.lockMap[t])?void 0:r.flag))return;const{renderMap:o}=this.data;o[t]||(o[t]={list:[],isTotal:!1});const a=o[t],u=this.renderData(t,e.orderList);if(s)for(let e=0;e<u.length;e++){let r=-1;(null==a?void 0:a.list.find((({orderId:t},o)=>(r=o,t===u[e].orderId))))?a.list[r]=u[e]:(null==a||a.list.splice(e,0,u[e]),this.paginationMap[t].total+=1)}else a.list=n?u:a.list.concat(u),this.paginationMap[t].total=e.total;this.paginationMap[t].offset=a.list.length<=10?0:a.list.length-10,a.isTotal=a.list.length===(s?this.paginationMap[t].total:e.total),i.show=!a.list.length,this.setData({renderMap:o,isLoadingList:!1,oftenBuyData:i},(()=>g(this,null,(function*(){if(!this.renderEndTime){this.renderEndTime=Date.now();const t=this.renderEndTime-this.renderStartTime;y.log.info("<orderList> 订单详情页首屏渲染时间为",t),U.$lxLog.mv("b_youxuan_90apfw6m_mv",{fmp:t})}this.checkTabEmpty(),this.timeLoop(),this.loading(!1)}))))})).catch((t=>{this.loading(!1),this.toast({message:t.message||"获取订单列表失败，请稍后重试"}),y.log.error(M,"[getOrderList] 获取订单列表失败",t)})).then((()=>{this.setData({isLoadingList:!1}),this.lockMap[t]=null}))},this.checkTabEmpty=function(){var t;const{currentTab:e,renderMap:r={},oftenBuyData:o,recommendSkus:a}=this.data,i=(null==(t=r[e])?void 0:t.list)||[],n=a.show&&a.total>0?"no_order_list_rec":"no_order";o.show=!i.length,this.error({show:!i.length,type:n,ok:()=>{var t;const e=(null==(t=U.$appShowOptions)?void 0:t.query)||{};U.$router.goto(`/pages/index/index?${decodeURIComponent(I.default.querystring.stringify(e))}`)}})},this.renderData=function(t=this.currentTab,e=[]){const r=(new Date).getTime();return e.map(((e,o)=>{var a,i,n,s;const d=h(c({},e),{index:o});if(t!==D.ORDER_CATEGORY.REFUND){const e=new Date(d.orderTime),r=null==(a=d.listStatusView)?void 0:a.status;d.key=`${t}_${o}_${d.orderId}`;let u=C(e);u=null==(i=u.split(" ")[0])?void 0:i.replace(/-/g,"/");const{orderDetailItemList:l=[]}=d;l.forEach((t=>{Object.assign(t,{totalSellPrice:(0,T.formatMoney)(t.totalSellPrice).replace("￥",""),deliveryTips:t.abnormalTip?{type:t.abnormalType,title:t.abnormalTipTitle,content:t.abnormalTip}:null})})),d.statusStyle=[x.ORDER_STATUS.UNKNOWN,x.ORDER_STATUS.WAIT_PAY,x.ORDER_STATUS.PAY_SUCCESS,x.ORDER_STATUS.GOODS_PREPARING,x.ORDER_STATUS.WAIT_PICK_UP,x.ORDER_STATUS.GRID_STATION_IN_DELIVERY,x.ORDER_STATUS.DRIVER_DELIVERED_POI].includes(r)?"red":"",d.orderTime=u,d.statusText=this.getRemainPayDesc(d.listStatusView.remainPayTime,d.listStatusView.status,d.listStatusView.listTitle)||"",d.spuCount=l.length,d.cashPay=(0,T.formatMoney)(d.cashPay).replace("￥",""),d.listButton=this.renderButton(d),d.isGroup=1===d.type,d.currentSku=l.length>0?{actPrice:d.cashPay,skuName:d.orderDetailItemList[0].skuName,orderId:d.orderId,poiId:d.poiId,poiIdStr:d.poiIdStr,imageUrl:d.orderDetailItemList[0].pic,skuId:d.orderDetailItemList[0].skuId||""}:{},d.lxParams={order_id:d.orderId,index_id:o,button_name_list:null==(s=null==(n=d.listStatusView)?void 0:n.listButton)?void 0:s.map((t=>t.name)).join(","),poi_id:d.poiIdStr||d.poiId,tab_name:t};const p=U.$order.getGroupStatus(r,d.groupStatusVO);p.groupId&&(p.isGrouping||p.isFail)&&(d.statusText=p.shortStatusDesc,d.currentSku.groupId=p.groupId),d.expand=!!d.expand;const m=(d.tips||[]).find((({type:t,msgType:e})=>(5===t||8===t)&&0===e)),g=(d.tips||[]).find((({type:t})=>9===t));if(m){const t=this.countNumAndSkuId(d.orderDetailItemList);d.deliveryTips=h(c({},m),{type:5===m.type?D.DELIVERY_TYPE.LATE:D.DELIVERY_TYPE.LACK,oceanParams:t})}d.shareTips=g}else d.refreshTime=`${r}`;return d}))},this.renderButton=function(t){let{listStatusView:{listButton:e=[],status:r=0}={},orderId:o,groupStatusVO:a}=t;return e&&e.length?(e.find(((t,r)=>t.type<=36&&t.type>=33&&(e.splice(r,1),e.push(t),!0))),E.isTT&&(e=e.filter((t=>![33,34].includes(t.type)))),e.reduce(((e,i)=>{const n=h(c({},i),{btnStyle:"",customClass:"",isPlain:!0,otherStyle:"font-family: PingFangSC-Regular;"});switch([x.ORDER_BUTTON_TYPE.PAY,x.ORDER_BUTTON_TYPE.REVIEW,x.ORDER_BUTTON_TYPE.REPURCHASE,x.ORDER_BUTTON_TYPE.COMPLETE_ORDER].includes(n.type)&&(n.btnStyle="primary",n.customClass="btn-primary",n.isPlain=!1),n.type){case x.ORDER_BUTTON_TYPE.APPLY_REFUND:n.bid="b_youxuan_tfijbisr_mv",n.lxParams={order_id:o,tab_name:this.currentTab,button_name:n.name,index_id:t.index};break;case x.ORDER_BUTTON_TYPE.REVIEW:n.bid="b_youxuan_eusez1pj_mv",n.lxParams={order_id:o,tab_name:this.currentTab};break;case x.ORDER_BUTTON_TYPE.REPURCHASE:n.bid="b_youxuan_rlopnmqd_mv",n.lxParams={order_id:o,order_st:(null==t?void 0:t.listStatusView.listTitle)||""};break;case x.ORDER_BUTTON_TYPE.SHARE_MONEY:break;case x.ORDER_BUTTON_TYPE.SHARE_ORDER:if(a&&a.groupId){U.$order.getGroupStatus(r,a).isGrouping&&(n.groupId=a.groupId)}break;case 40:n.bid="b_youxuan_5qcr43da_mv",n.lxParams={order_id:o}}return e.unshift(n),e}),[])):[]},this.operateOrder=function(t){const{currentTab:e,renderMap:r}=this.data,{orderId:o,type:a,phone:i,name:n,link:s}=t.currentTarget.dataset;let d=0;const u=r[e].list.find(((t,e)=>(d=e,t.orderId===o))),l=u.listStatusView&&u.listStatusView.status;switch(U.$lxLog.mc("b_youxuan_dv9zcl1t_mc",c({button_name:n},u.lxParams)),y.log.info(M,`[operateOrder] 点击了按钮'${n}',type:${a},orderId:${o}`),a){case x.ORDER_BUTTON_TYPE.CANCEL:this.cancelOrder({order:u,parentOrderId:u.parentOrderId,type:u.type,status:l,poiPhone:i,orderPoiId:u.poiIdStr||u.poiId,orderGroupOpFlag:u.orderGroupOpFlag});break;case x.ORDER_BUTTON_TYPE.PAY:if(this.paying)return;this.paying=!0,this.payOrder(u),setTimeout((()=>{this.paying=!1}),1e3);break;case x.ORDER_BUTTON_TYPE.CANCEL_REFUND:U.$order.cancelRefund(o,e!==D.ORDER_CATEGORY.REFUND).then((()=>{this.currentTab===D.ORDER_CATEGORY.REFUND&&this.removeOrder(D.ORDER_CATEGORY.REFUND,o)}));break;case x.ORDER_BUTTON_TYPE.APPLY_REFUND:U.$lxLog.mc("b_youxuan_tfijbisr_mc",{index_id:d,button_name:n,order_id:o,tab_name:e}),this.refundOrder(u);break;case x.ORDER_BUTTON_TYPE.REVIEW:U.$lxLog.mc("b_youxuan_eusez1pj_mc",{order_id:o,tab_name:e}),this.tapOrderId=o,U.$order.gotoEvaluation("submit",o,u.poiId,u.poiIdStr,e===D.ORDER_CATEGORY.ALL?O.SUBMIT_PAGE_SOURCE.ORDER_LIST_TOTAL:O.SUBMIT_PAGE_SOURCE.ORDER_LIST_REMAIN);break;case x.ORDER_BUTTON_TYPE.WATCH_REVIEW:U.$router.goto(`igrocery://www.grocery.com/my_comment?orderId=${o}&orderPoiId=${u.poiId}&poiIdStr=${u.poiIdStr}`);break;case x.ORDER_BUTTON_TYPE.SELFLIFT_ADR:U.$order.gotoMapPage(u.selfLiftInfo);break;case x.ORDER_BUTTON_TYPE.SELFLIFT_QR:this.showSelfLiftQrCode(h(c({},u.selfLiftInfo),{orderId:o,status:l}));break;case x.ORDER_BUTTON_TYPE.REPURCHASE:U.$lxLog.mc("b_youxuan_rlopnmqd_mc",{order_id:o,order_st:(null==u?void 0:u.listStatusView.listTitle)||""}),U.$order.addCart("ORDERLIST",u.orderDetailItemList.map((({skuId:t,count:e})=>({skuId:t,count:e}))));break;case x.ORDER_BUTTON_TYPE.SHARE_MONEY:case x.ORDER_BUTTON_TYPE.SHARE_ORDER:break;case x.ORDER_BUTTON_TYPE.CONTACT_GROUP_HEAD:this.onContactGroupHeader(o);break;case x.ORDER_BUTTON_TYPE.COMPLETE_ORDER:U.$order.completeOrder(u,e===D.ORDER_CATEGORY.ALL?O.SUBMIT_PAGE_SOURCE.ORDER_LIST_TOTAL_CONFIRM:O.SUBMIT_PAGE_SOURCE.ORDER_LIST_REMAIN_CONFIRM).then((()=>{this.refreshOrder(o)}));break;case x.ORDER_BUTTON_TYPE.AFTERSALE_DETAIL:case x.ORDER_BUTTON_TYPE.REFUND_DETAIL:case x.ORDER_BUTTON_TYPE.APPLY_AFTERSALE:this.goDetail(t);break;case x.ORDER_BUTTON_TYPE.DELETE_ORDER:U.$lxLog.mc("b_youxuan_5qcr43da_mc",{order_id:o}),this.canDeleteOrder(o);break;default:t.currentTarget.dataset.phone&&U.$order.askService(t.currentTarget.dataset.phone),y.log.warn(M,`[operateOrder] 点击了未定义的按钮'${n}',type:${a},orderId:${o}`)}this.hideMoreBtn()},this.payOrder=function(t){const{orderId:e,orderGroupOpFlag:r}=t,o=`/pages/orderDetail/index?${(0,f.stringify)({orderId:e,showPop:1,showGiftCardPop:2===t.type||void 0})}`;return this.tapOrderId=e,U.$order.payOrder(e,{parentOrderId:t.parentOrderId,successUrl:o,orderGroupOpFlag:r}).then((t=>{const r=t?o:`/pages/paySuccess/index?orderId=${e}`;U.$router.goto(r)})).catch((()=>{this.refreshOrder(e)})).then((()=>{this.paying=!1}))},this.goDetail=function(t){const{item:e,orderId:r}=t.currentTarget.dataset;e&&U.$lxLog.mc("b_youxuan_funcrsed_mc",e.lxParams),this.tapOrderId=r||e.orderId,U.$router.goto("igrocery://www.grocery.com/order",{orderId:r||e.orderId,toSkus:e?0:1}),this.hideMoreBtn()},this.showSelfLiftQrCode=function(t){return g(this,null,(function*(){this.setData({selfLiftDialogInfo:t});const{orderId:e}=t,r=yield U.$order.getEncryptedOrderId(e);try{const{url:o}=yield S.getQRCode({qrcode:r});o?this.setData({qrCodeUrl:o}):(t.qrCode&&A.qrcode("qrcode",t.qrCode,480,480),y.log.warn(M,`[showSelfLiftQrCode] 没有获取到二维码，orderId: ${e}`))}catch(t){y.log.error(M,`[showSelfLiftQrCode] 请求二维码接口失败，orderId: ${e}`),A.qrcode("qrcode",e,480,480)}}))},this.onQrcodeClose=function(){this.setData({selfLiftDialogInfo:null,qrCodeUrl:""})},this.onTapNoticeBoard=function(){const{noticeBoardData:t,currentTab:e}=this.data,{bid:r,lxParams:o}=t;e===D.ORDER_CATEGORY.REFUND?U.$lxLog.mc(`${r}_mc`,o,{cid:"c_youxuan_4d4exod2"}):U.$lxLog.mc(`${r}_mc`,o)},this.onTapMoreBtn=function(t){return g(this,null,(function*(){const{clientY:e}=t.touches[0],{listbtnlength:r,orderId:o}=t.currentTarget.dataset,{showMoreBtnOrderId:a}=this.data,i=35*(r-3)+33>this.windowHeight-e-35,n=a===o?"":o;this.setData({showMoreBtnOrderId:n,isFixedTop:i})}))},this.hideMoreBtn=function(){this.data.showMoreBtnOrderId&&this.setData({showMoreBtnOrderId:"",isFixedTop:!1})},this.toggleOrderItemList=function(t){var e,r;const{orderId:o}=t.currentTarget.dataset,{currentTab:a,renderMap:i}=this.data,n=null==(r=null==(e=i[a])?void 0:e.list)?void 0:r.find((t=>t.orderId===o));n&&(n.expand=!n.expand,this.setData({renderMap:i}),U.$lxLog.mc("b_youxuan_somuuzpz_mc"))},this.cancelOrder=function(t){return g(this,arguments,(function*({order:t,parentOrderId:e,type:r,status:o,poiPhone:a,orderPoiId:i,orderGroupOpFlag:n}){try{const{orderId:s,orderDetailItemList:d=[]}=t,u={parentOrderId:e,type:r,status:o,poiPhone:a,orderPoiId:i,orderGroupOpFlag:n};try{const e={order_id:s,sku_id:d.map((({skuId:t})=>t)).join(",")};(yield this.refundApplyVerify(1,{order:t,lxParams:e}))&&(yield this.cancelOrderReq(s,u))}catch(t){y.log.warn(M,"[cancelOrder] 开始执行旧版取消订单逻辑",t),yield this.cancelOrderReq(s,u)}}catch(t){this.toast("取消订单失败，请稍后重试"),y.log.error(M,"[cancelOrder] 取消订单失败",t)}}))},this.cancelOrderReq=function(t,e){return g(this,null,(function*(){yield U.$order.toCancelOrder(t,e),this.refreshOrder(t)}))},this.refundOrder=function(t){return g(this,null,(function*(){try{const{orderId:e,orderDetailItemList:r=[]}=t;try{const o={order_id:e,sku_list:r.map((({skuId:t})=>t))};(yield this.refundApplyVerify(2,{order:t,lxParams:o}))&&(U.$router.goto("/pages/orderDetail/index",{orderId:e,toSkus:1}),this.tapOrderId=e)}catch(e){y.log.warn(M,"[refundOrder] 开始执行旧版申请退款逻辑",e),this.refundOrderOld(t)}}catch(t){this.toast("网络异常，请稍后重试"),y.log.error(M,"[refundOrder] 申请退款失败",t)}}))},this.refundOrderOld=function(t){return g(this,null,(function*(){try{const{orderId:e,poiId:r,poiIdStr:o}=t,a=yield S.getRefundStatus({orderId:e}),{title:i,refundLimitReason:n,refundable:s,collected:d=!1,buttonTipsList:u=[]}=a;if(d||s||u.length)if(d||s||!u.length)(!d&&s||d)&&(U.$router.goto("/pages/orderDetail/index",{orderId:e,toSkus:1}),this.tapOrderId=e);else{U.$lxLog.mv("b_youxuan_a3ru3m9c_mv",{order_id:e});const t=[{pic:w.Images.order_phone_guard,btn_icon:w.Images.order_phone_gray,btn_text:"电话联系"},{pic:w.Images.order_IM_guard,btn_icon:w.Images.order_IM_gray,btn_text:"在线联系"}],a=u.map((a=>{const i=1===a.btnTipsType?c(c({},a),t[0]):c(c({},a),t[1]);return i.orderId=e,i.poiId=r,i.poiIdStr=o,i}));this.operatingOrderId=e,this.setData({showLookforIM:!0,lookforGroupHeader:{title:i,btns:a}})}else U.$lxLog.mv("b_youxuan_ovby2vql_mv",{order_id:e}),this.confirm({title:i,message:n,textCancel:"取消",textOK:"联系团长",customContentStyle:"text-align: center",zIndex:30,ok:()=>{U.$lxLog.mc("b_youxuan_ue5yr7eo_mc",{order_id:e});this.useComponentFunc("#contact-group-header","getGroupHeaderPhone",{page:this,orderId:e,lxData:{privacyAlertMV:"b_youxuan_7jm9rmih_mv",privacyAlertOK:"b_youxuan_tcnzllfg_mc",privacyAlertCancel:"b_youxuan_z0hvor8w_mc"},lxParams:{order_id:e}})},cancel:()=>{U.$lxLog.mc("b_youxuan_by0008xe_mc",{order_id:e})}})}catch(t){y.log.error(M,"[getRefundStatus] 订单列表获取退款申请限制校验失败",t)}}))},this.refundApplyVerify=function(){return g(this,arguments,(function*(t=3,{order:e,lxParams:r}){try{const{orderId:o}=e,a={orderId:o,refundApplyPageSource:1,refundApplyType:t};return yield U.$order.refundApplyVerify({reqParams:a,mvBid:"b_youxuan_75lzkj3h_mv",lxParams:r,onTapBtn:({type:t,buttonText:e,jumpType:a})=>{if(U.$lxLog.mc("ok"===t?"b_youxuan_2plz0s4p_mc":"b_youxuan_ustxpdgf_mc",c({button_name:e},r)),a===x.REFUND_BUTTON_JUMP_TYPE.CALL_GROUP_HEADER){U.$lxLog.mc("b_youxuan_ue5yr7eo_mc",{order_id:o});const t={privacyAlertMV:"b_youxuan_7jm9rmih_mv",privacyAlertOK:"b_youxuan_tcnzllfg_mc",privacyAlertCancel:"b_youxuan_z0hvor8w_mc"};this.useComponentFunc("#contact-group-header","getGroupHeaderPhone",{page:this,orderId:o,lxData:t,lxParams:{order_id:o}})}}})}catch(t){throw y.log.error(M,"[refundApplyVerify] 退款发起校验失败",t),t}}))},this.onContactGroupHeader=function(t){this.useComponentFunc("#contact-group-header","getGroupHeaderPhone",{page:this,orderId:t,lxData:{privacyAlertMV:"b_youxuan_1pbexf9f_mv",privacyAlertOK:"b_youxuan_ks54c0z7_mc",privacyAlertCancel:"b_youxuan_8sfhzubs_mc"},lxParams:{order_id:t}})},this.makePhoneCall=function(t){var e;const{btnTipsType:r,orderId:o,poiId:a,poiIdStr:i}=null==(e=null==t?void 0:t.detail)?void 0:e.item;if(1===r)this.callGroupHeader(o),U.$lxLog.mc("b_youxuan_e2hdz1ib_mc",{order_id:o});else if(2===r){if(!L.default.isSupprotChat)return void this.toast("当前平台不支持该功能");L.default.getGroupHeaderDxId(a,i).then((t=>{L.default.jumpToChatPage(o,t,a,i)})).catch((t=>{y.log.info(M,"[makePhoneCall][chatbot] getGroupHeaderDxId 用户大象id获取失败",t),this.toast("获取用户身份异常")})),U.$lxLog.mc("b_youxuan_d083rgxj_mc",{order_id:o})}},this.callGroupHeader=function(t){return g(this,null,(function*(){try{const e=yield S.getGroupHeaderPhone({orderId:t}),{phoneNumber:r}=e;wx.makePhoneCall({phoneNumber:r,success:()=>{},fail:t=>{y.log.warn("<拨打团长号失败 orderList>",t)}})}catch(t){y.log.error(M,"[callGroupHeader] 获取团长隐私号失败",t)}}))},this.onLookforGroupHeaderClose=function(){this.setData({showLookforIM:!1}),U.$lxLog.mc("b_youxuan_b68eklwr_mc",{order_id:this.operatingOrderId}),this.operatingOrderId=""},this.orderItemMvHandler=function(t){const{item:e}=t.currentTarget.dataset;e.listButton.some((({type:t})=>12===t))&&U.$lxLog.mv("b_youxuan_eusez1pj_mv",{order_id:e.orderId,tab_name:this.currentTab}),e.orderDetailItemList&&e.orderDetailItemList.length>3&&U.$lxLog.mv("b_youxuan_somuuzpz_mv"),this.mvHandler(t)},this.onMvReport=function(t){this.currentTab===D.ORDER_CATEGORY.REFUND?U.$lxLog.mv(t.detail.bid,t.detail.lxParams,{cid:"c_youxuan_4d4exod2"}):U.$lxLog.mv(t.detail.bid,t.detail.lxParams)},this.getNoticeInfo=function(){return g(this,arguments,(function*(t=this.currentTab){if(!U.$poi.getPoiIdStr())return;D.ORDER_CATEGORY.REFUND,D.ORDER_CATEGORY.ALL,D.ORDER_CATEGORY.WAIT_PAY,D.ORDER_CATEGORY.UNDERWAY,D.ORDER_CATEGORY.WAIT_PAY}))},this.getHomeOftenbuy=function(){return g(this,null,(function*(){const{oftenBuyData:t}=this.data;try{const e=yield S.getHomeOftenbuy({poiId:U.$poiId,poiIdStr:U.$poi.getPoiIdStr(),pageFrom:"personalOrder"}),r=e.hasOftenBuy&&e.text&&e.text.length>0;t.data=r?h(c({},e),{oftenBuyContent:e.text.join("、")}):null}catch(e){t.data=null,y.log.warn(M,"[getHomeOftenbuy] 获取常买信息失败",e)}finally{this.setData({oftenBuyData:t})}}))},this.getShareCoupon=function(t){U.$service.getShareCoupon({orderId:t}).then((t=>{if(t&&t.shareable){const e=this.filterShareData(t.channels);e&&e.path&&(this.setData({shareInfo:{iconUrl:t.popPic,shareDetail:e},canShowSharePop:!0}),U.$lxLog.mv("b_si2n3g67"))}}))},this.canShowRecommendSkus=function(){var t;return[D.ORDER_CATEGORY.WAIT_PAY,D.ORDER_CATEGORY.UNDERWAY].includes(this.currentTab)&&!(null==(t=this.data.renderMap[this.currentTab])?void 0:t.list.length)},this.getRecommendSkus=function(){return g(this,null,(function*(){var t,e;try{const{recommendSkus:r}=this.data,{offset:o,total:a}=r;if(o>a)return void this.setData({"recommendSkus.isNoMoreCommand":!0});if(this.canShowRecommendSkus()){const o=((null==(t=r.data)?void 0:t.goodsList)||[]).map((({skuId:t})=>t)),a=(yield S.getCommonRecommend({poiId:U.$poiId,poiIdStr:U.$poi.getPoiIdStr(),offset:r.offset,limit:r.limit,type:113},{excludeSkuIds:o}))||{};r.total=a.total||0,r.offset+=r.limit;const i=((null==(e=r.data)?void 0:e.goodsList)||[]).concat((a.itemList||[]).map((t=>(0,b.skuBoardFormat)({skuItem:t,type:t.type,requestid:(null==a?void 0:a.M_TraceId)||""})))),n={goodsList:i,moduleTitle:a.moduleTitle};r.data=n,r.show=i.length>0,this.checkTabEmpty(),this.setData({recommendSkus:r})}}catch(t){y.log.info(M,"[getRecommendSkus] 获取推荐商品失败",t)}finally{this.checkTabEmpty()}}))},this.filterShareData=function(t){let e=null;return t.forEach((t=>{if(1==+t.channel){if(1==+t.shareType&&t.h5Url){const r=`${t.h5Url}${t.h5Url.indexOf("?")>-1?"&":"?"}from_app=meituan`;e={title:t.h5Title,subTitle:t.h5SubTitle,imageUrl:t.h5PicUrl,path:`pages/h5Container/index?url=${encodeURIComponent(r)}`}}2==+t.shareType&&(e={title:t.appletTitle,imageUrl:t.appletPicUrl,path:`${t.appletUrl}`})}})),e},this.timeLoop=function(){var t;clearTimeout(this.loopTimeout);const{renderMap:e}=this.data,r=null==(t=e[this.currentTab])?void 0:t.list;if(r)switch(this.currentTab){case 0:case 1:r.some((t=>10===t.listStatusView.status))?this.countDown(r,this.currentTab):this.loopTimeout=null;break}},this.countDown=function(t,e){let r=0;for(let o=0;o<t.length;o++)if(t[o].listStatusView.remainPayTime<=0){if(10===t[o].listStatusView.status&&(t[o].statusText="已过期"),r++,r===t.length)return this.setData({[`renderMap[${e}].list`]:t}),clearTimeout(this.loopTimeout),void(this.loopTimeout=null)}else{const e=this.getRemainPayDesc(t[o].listStatusView.remainPayTime,t[o].listStatusView.status,t[o].listStatusView.listTitle);t[o].listStatusView.remainPayTime-=1,t[o].statusText=e}this.setData({[`renderMap[${e}].list`]:t}),this.loopTimeout=setTimeout(this.timeLoop,1e3)},this.getRemainPayDesc=function(t,e,r){if(t>0){const e=parseInt(""+t/3600,10),r=parseInt(""+t%3600/60,10),o=Math.floor(t%60);return`剩余支付时间：${e<10?`0${e}`:e}:${r<10?`0${r}`:r}:${o<10?`0${o}`:o}`}return 0===t&&10!==e?r:"已取消"},this.onRemindMvReport=function(t){var e;const{buttonName:r}=(null==(e=null==t?void 0:t.detail)?void 0:e.lxParams)||{};U.$lxLog.mv("b_youxuan_zypx99rr_mv",{button_name:r})},this.onShareOrder=function(t){var e;const{name:r}=(null==(e=null==t?void 0:t.currentTarget)?void 0:e.dataset)||{};U.$lxLog.mc("b_youxuan_zypx99rr_mc",{button_name:r})},this.onRemindMessageMvReport=function(){U.$lxLog.mv("b_youxuan_otxl8luo_mv")},this.jumpDebug=function(){this.data.debugNum++,this.data.showDebugEntry&&8===this.data.debugNum&&this.setData({debugPasswordModal:!0})},this.goDebugger=function(){this.data.debugNum=0,U.$router.goto("/subPackages/debug/pages/root/index")},this.handleButtonClick=function(t){const{type:e}=t.currentTarget.dataset;"confirm"===e?this.data.inputValue&&"87654"==`${this.data.inputValue}`&&(this.setData({debugPasswordModal:!1}),this.data.openDebugPage=!0,this.goDebugger()):this.setData({debugPasswordModal:!1})},this.bindKeyInput=function(t){this.setData({inputValue:t.detail.value})},this.data={isTT:(0,E.isTT)(),showTab:!0,tabList:D.ORDER_CATEGORY_LIST,currentTab:-1,renderMap:{},noticeBoardData:{bid:"b_youxuan_valdbva1",lxParams:{},show:!1,opsource:"ORDER_LIST_0",info:{}},oftenBuyData:{show:!1,data:null,bid:"b_youxuan_bj2xvytn_mv",lxParams:{poi_id:U.$poiId,poiIdStr:U.$poi.getPoiIdStr()}},isLoadingList:!1,showMoreBtnOrderId:"",isFixedTop:!1,selfLiftDialogInfo:null,canShowSharePop:!1,lookForIMData:{show:!1,title:"",btns:[]},recommendSkus:{show:!1,data:{},total:0,offset:0,limit:10,isNoMoreCommand:!1},skuCardCanDirect:!0,_showErrorCode:!1,showDebugEntry:(null==(t=null==U?void 0:U.$env)?void 0:t.getDebug())||!U.isProd,debugPasswordModal:!1,debugNum:0}}countNumAndSkuId(t){const e=[];let r=0;for(let o=0;o<t.length;o++)e.push(t[o].skuId),r+=t[o].count;return{list:e,sum:r}}canDeleteOrder(t){return g(this,null,(function*(){var e;try{const e=yield S.deleteOrder({orderId:t,confirm:!1}),{flag:r,deleteOrderConfirmPopup:o={}}=e;if(null==r||""===r)throw new Error;if(!r){const{title:e="",text:r="",buttonList:a=[]}=o;U.$lxLog.mv("b_youxuan_w6geqdep_mv",{order_id:t}),this.confirm({title:e,message:r,textCancel:a[1].desc,textOK:a[0].desc,customContentStyle:"text-align: center",zIndex:101,ok:()=>{U.$lxLog.mc("b_youxuan_xjucu6m5_mc",{order_id:t})},cancel:()=>{U.$lxLog.mc("b_youxuan_63fx9h4r_mc",{order_id:t}),this.deleteOrder(t)}})}}catch(t){const{msg:r=""}=null==(e=null==t?void 0:t.data)?void 0:e.error;r?this.toast(r):this.toast("系统开小差,请稍后再试"),y.log.info("<deleteOrder> 查询订单是否可删除",t)}}))}deleteOrder(t){return g(this,null,(function*(){var e;try{const e=yield S.deleteOrder({orderId:t,confirm:!0}),{flag:r,deleteSuccessToast:o=""}=e;if(null==r||""===r)throw new Error;if(r){o?this.toast(o):this.toast("订单删除成功");const{currentTab:e}=this.data;this.removeOrder(e,t)}}catch(t){const{msg:r=""}=null==(e=null==t?void 0:t.data)?void 0:e.error;r?this.toast(r):this.toast("系统开小差,请稍后再试"),y.log.error("<deleteOrder> 删除订单错误",t)}}))}recommendSkusABTest(){"a"===getApp().$abTest.getGrayStrategyVal("grocery_c_front_order_recommend_skus_direct").toLowerCase()&&this.setData({skuCardCanDirect:!1})}gotoHomePage(){U.$router.goto("/pages/index/index")}};(0,_.default)(new k);