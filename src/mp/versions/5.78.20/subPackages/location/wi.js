var e=Object.create,t=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,u=(e,o,i)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,c=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&u(e,o,t[o]);if(p)for(var o of p(t))n.call(t,o)&&u(e,o,t[o]);return e},d=(e,t)=>o(e,a(t)),m=o=>{return((e,o,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let p of r(o))l.call(e,p)||"default"===p||t(e,p,{get:()=>o[p],enumerable:!(a=i(o,p))||a.enumerable});return e})((a=t(null!=o?e(s(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0}),t(a,"__esModule",{value:!0})),o);var a},g=m(require("../../jc.js")),b=m(require("./j4.js")),S=m(require("./aa.js")),y=getApp();(0,g.defineComponent)({properties:{poiItem:{type:Object},showBottomLine:{type:Boolean,value:!0},poiInfo:{type:Object,value:{}},mvProps:{type:Object,value:{bid:"",mvHandler:()=>{}}},needHighlight:{type:Boolean,value:!1},state:{type:Number,value:b.STATE.SELECT_ABLE},index:{type:Number,value:-99},mcbid:{type:String,value:""}},data:{btnText:"选这个",showLabels:!1,poiDeliveryInfo:[],coldStorage:[],supportMap:(0,S.supportMap)()},observers:{poiItem(e){e&&(1!==e.poiBusinessStatus&&this.setData({state:b.STATE.STOP_BUSINESS}),e.poiLabelsV2&&e.poiLabelsV2.length&&(this.setData({showLabels:!0}),this.handlePoiDeliveryInfo(e),this.disposeColdStorage(e)))},state(e){e&&this.setData(c({},this.getDataByState(e)))}},attached(){const{poiItem:e={}}=this.data;let t={click_poiid:e.poiId,poiIdStr_click_poiid:e.poiIdStr||""};this.properties.index>-1&&(t=d(c({},t),{index_id:this.properties.index})),this.setData({mvLxParams:t}),getApp().$lxLog.mv(this.properties.mvProps.bid,t)},methods:{onMvReport(e){const{__mvHandler:t}=getApp().page();"function"==typeof t&&t(e)},onItemTap(e){const{state:t}=this.data,o=this.data.poiItem,i={click_poiid:o.poiId,poiIdStr_click_poiid:o.poiIdStr||""};if(t===b.STATE.STOP_BUSINESS||t===b.STATE.CURRENT_POI)return void(t===b.STATE.CURRENT_POI&&y.$lxLog.mc("b_youxuan_naw3fzjn_mc",i));const{SELECT_MULTI:a,SELECT_MULTI_CHECKED:r}=b.STATE;t!==a&&t!==r||this.setData({state:t===a?r:a}),this.triggerEvent("onSelectTap",o)},onImgTap(e){var t;(null==(t=this.properties.poiItem)?void 0:t.imageBid)&&y.$lxLog.mc(this.properties.poiItem.imageBid),wx.previewImage({current:e.target.dataset.imgurl||"",urls:[e.target.dataset.imgurl||""]})},getDataByState(e){return e===b.STATE.STOP_BUSINESS?d(c({},b.STATE_2_DATA[e]),{btnText:this.data.poiItem.poiBusinessTag||"暂停营业"}):c({},b.STATE_2_DATA[e])},gotoRange(e){const{jumpurl:t}=e.currentTarget.dataset,{poiItem:o={},mcbid:i=""}=this.properties,{poiId:a=-999,poiIdStr:r=""}=o,p={poiId:a,poiIdStr:r};i&&y.$lxLog.mc(i,{click_poiid:a,poiIdStr_click_poiid:r}),t?y.$router.goto(t,p):y.$router.goto("/subPackages/location/pages/receivingRange/index",p)},handlePoiDeliveryInfo(e){var t;const o=(null==(t=e.poiLabelsV2)?void 0:t.filter((e=>1===e.labelAttr))).map((e=>{const t=e.labelName.split("、");return{leftText:t[0],rightText:t[1],jumpUrl:e.jumpUrl}}));this.setData({poiDeliveryInfo:o})},disposeColdStorage(e){var t;const o=null==(t=e.poiLabelsV2)?void 0:t.filter((e=>3===e.labelAttr));this.setData({coldStorage:o})}}});