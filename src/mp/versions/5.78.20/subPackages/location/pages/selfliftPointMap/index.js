var t,e,a=Object.create,n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,r=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,c=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&c(t,a,e[a]);if(d)for(var a of d(e))h.call(e,a)&&c(t,a,e[a]);return t},f=t=>{return((t,e,a)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let i of s(e))u.call(t,i)||"default"===i||n(t,i,{get:()=>e[i],enumerable:!(a=o(e,i))||a.enumerable});return t})((e=n(null!=t?a(r(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0}),n(e,"__esModule",{value:!0})),t);var e},g=(t,e,a)=>new Promise(((n,i)=>{var o=t=>{try{s(a.next(t))}catch(t){i(t)}},l=t=>{try{s(a.throw(t))}catch(t){i(t)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(o,l);s((a=a.apply(t,e)).next())})),E=f(require("../../../../u4.js")),M=f(require("../../su.js")),y=f(require("../../sp.js")),_=f(require("../../../../ob.js")),L=f(require("../../si.js")),C=f(require("../../so.js")),P=f(require("../../sa.js")),m=getApp(),S=require("../../../../er.js");S({data:{isIpx:null==(e=null==(t=m.getModule("systemInfo"))?void 0:t.getSystemInfo())?void 0:e.isIpx,updateModel:null,initModel:null,layout:null,showNewGuide:!1,attachedRes:null,newGuideData:null},onLoad(t){return g(this,null,(function*(){this.dataCenter=new M.default(t),this.layoutManger=new L.default;const e=this.dataCenter.genInitModel();this.handleInitDataModel(e);try{const t=yield this.layoutManger.genInitLayoutModel(this);this.handleMapLayoutModel(t)}catch(t){_.log.info("onload  genInitLayoutModel error",t)}try{const e=yield this.dataCenter.genInitMapResultModel(t);this.handleUpdateDataModel(e),this.handleNewGuildData(e)}catch(t){_.log.info("onload genInitMapResultModel error",t)}this.addEvents()}))},onReady(){},onShow(){return g(this,null,(function*(){m.$lxLog.pv("c_youxuan_opluxjiy",{custom:{page_from:""}});const t=(0,C.getSearchPoiAddress)();if((null==t?void 0:t.source)&&t.source.indexOf("onSearchAddrTap")){const e={latitude:t.latitude,longitude:t.longitude};let a=null;try{a=yield this.dataCenter.genUpdateMapResultModel(y.UPDATE_SOURCE.SEARCH,e,t)}catch(t){_.log.info("SelfLiftPointMap","onShow error",t)}if(a){this.handleUpdateDataModel(a);const t=this.layoutManger.updateLayoutWithModel(a);this.handleMapLayoutModel(t)}}}))},onUnload(){this.removeEvents()},addEvents(){E.default.on(y.SELF_LIFT_EVETN.MAP_CHANGE_UP,this.changeUp.bind(this)),E.default.on(y.SELF_LIFT_EVETN.MAP_CHANGE_DOWN,this.changeDown.bind(this)),E.default.on(y.SELF_LIFT_EVETN.SCROLL_END,this.updateCurrentPage.bind(this)),E.default.on(y.SELF_LIFT_EVETN.PAGE_GPSCLICK_CHANGE,this.gpsClick.bind(this)),E.default.on(y.SELF_LIFT_EVETN.SELECT_CARD,this.selectCard.bind(this)),E.default.on(y.SELF_LIFT_EVETN.MAP_SELECT_POI,this.mapSelectPoi.bind(this)),E.default.on(y.SELF_LIFT_EVETN.POI_LIST_ATTACHED,this.handlePoiListAttached.bind(this))},removeEvents(){E.default.on(y.SELF_LIFT_EVETN.MAP_CHANGE_UP,this.changeUp.bind(this)),E.default.off(y.SELF_LIFT_EVETN.SCROLL_END,this.updateCurrentPage.bind(this)),E.default.off(y.SELF_LIFT_EVETN.MAP_CHANGE_DOWN,this.changeDown.bind(this)),E.default.off(y.SELF_LIFT_EVETN.PAGE_GPSCLICK_CHANGE,this.gpsClick.bind(this)),E.default.off(y.SELF_LIFT_EVETN.SELECT_CARD,this.selectCard.bind(this)),E.default.off(y.SELF_LIFT_EVETN.MAP_SELECT_POI,this.mapSelectPoi.bind(this)),E.default.off(y.SELF_LIFT_EVETN.POI_LIST_ATTACHED,this.handlePoiListAttached.bind(this))},gpsClick(t){return g(this,null,(function*(){let e=null;try{if(e=yield this.dataCenter.genUpdateMapResultModel(y.UPDATE_SOURCE.GPSCLICK,t),this.handleUpdateDataModel(e),e){const t=this.layoutManger.updateLayoutWithModel(e);this.handleMapLayoutModel(t)}}catch(t){_.log.info("SelfLiftPointMap","regionChange error",t)}}))},mapSelectPoi(t){this.dataCenter.genUpdateMapResultModel(y.UPDATE_SOURCE.SELECT_MAP,t)},selectCard(t){this.dataCenter.genUpdateMapResultModel(y.UPDATE_SOURCE.SELECT_CARD,t)},searchBarTap(){const t=this.dataCenter.getCenterLocationInfo()||{},e=p({from:"selfliftPoiMap"},t);m.$router.goto("igrocery://www.grocery.com/location/search_poi",e)},updateCurrentPage(t){const e=this.dataCenter.updateCurrentPage(t);e&&this.handleUpdateDataModel(e)},regionChange(t){return g(this,null,(function*(){m.$lxLog.mc("b_youxuan_ewm8ksv5_mc");const e=null==t?void 0:t.detail,{latitude:a,longitude:n}=e,o=this.dataCenter.getCurrentLocation(),s=this.calDistance(a,n,o.latitude,o.longitude);if(s<.5)return void _.log.info("SelfLiftPointMap","regionChange distance 2222",s);let d=null;try{if(d=yield this.dataCenter.genUpdateMapResultModel(y.UPDATE_SOURCE.MOVEN_END,e),d){const t=this.layoutManger.updateLayoutWithModel(d);this.handleMapLayoutModel(t)}r=p({},d),d=i(r,l({title:"已选地址",subTitle:"已选地址附近自提点"})),this.handleUpdateDataModel(d)}catch(t){_.log.info("SelfLiftPointMap","regionChange error",t)}var r}))},changeUp(){if(this.dataCenter.isListType()){const t=this.layoutManger.updateUpState(this.data.layout,y.UPDATE_STATE.UP);this.handleMapLayoutModel(t)}},changeDown(){if(this.dataCenter.isListType()){const t=this.layoutManger.updateUpState(this.data.layout,y.UPDATE_STATE.DOWN);this.handleMapLayoutModel(t)}},rad:t=>t*Math.PI/180,calDistance(t,e,a,n){const i=this.rad(t)-this.rad(a),o=this.rad(e),l=this.rad(n),s=o-l;let d=2*Math.asin(Math.sqrt(Math.pow(Math.sin(s/2),2)+Math.cos(o)*Math.cos(l)*Math.pow(Math.sin(i/2),2)));return d*=6378.137,d=Math.round(1e4*d)/1e4,d},handleInitDataModel(t){this.setData({initModel:t})},handleUpdateDataModel(t){this.setData({updateModel:t})},handleMapLayoutModel(t){this.setData({layout:t})},onConfirmClick(){const t=this.dataCenter.getSelectPoi();_.log.info("confirmSelfliftPoint poi",t),t&&P.default.exitSelfLift({poi:t,success:()=>{m.page().toast("自提点切换成功")},fail:null})},refresh(){return g(this,null,(function*(){const t=yield this.dataCenter.genUpdateMapResultModel(y.UPDATE_SOURCE.REFRESH);if(this.handleUpdateDataModel(t),t){const e=this.layoutManger.updateLayoutWithModel(t);this.handleMapLayoutModel(e)}}))},handlePoiListAttached(t){const{detail:e={}}=t;this.setData({attachedRes:e})},handleNewGuildData(t){const{showList:e=[]}=t||{};e&&e.length>0&&this.setData({newGuideData:e[0]})}});