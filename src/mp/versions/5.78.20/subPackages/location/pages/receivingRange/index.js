var e,t,a=Object.create,i=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,c=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=e=>{return((e,t,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))p.call(e,n)||"default"===n||i(e,n,{get:()=>t[n],enumerable:!(a=o(t,n))||a.enumerable});return e})((t=i(null!=e?a(c(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),i(t,"__esModule",{value:!0})),e);var t},y=g(require("../../../../u8.js")),f=g(require("../../../../er.js")),m=g(require("../../../../ob.js")),v=g(require("../../pb.js"));(t=e||(e={}))[t.Circle=1]="Circle",t[t.Polygon=2]="Polygon";var h=getApp(),I="<ReceivingRange>",D=-1;(0,f.default)({mapCtx:null,poiId:void 0,poiIdStr:void 0,poiDeliveryInfo:null,isInWX:(0,y.isInWX)(),data:{polygons:[],circles:[],includePoints:[],poiInfo:{picUrl:"",poiName:"",distanceText:"",rangeText:"",rangeInfoText:""},scale:14,deliveryRangeType:D,latitude:39.905033,longitude:116.724477},onReady(){this.mapCtx=wx.createMapContext("range-map",this)},onLoad(e){const{poiId:t,poiIdStr:a}=e;m.log.info(`${I} options 参数 poiId: ${t}`),this.poiId=t,this.poiIdStr=a,this.initData()},onCardClick(){h.$router.triggerBack("ReceivingRange")},initData(){return e=this,t=null,a=function*(){const{poiId:e,poiIdStr:t}=this,a=yield(0,v.getRangeData)({poiId:e,poiIdStr:t}),{currentPoiInfo:i={},poiDeliveryInfo:o={}}=a,{deliveryRangeType:l=D}=o;this.poiDeliveryInfo=o;const c=(0,v.handleRangeData)(o);var g;this.setData((g=((e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))u.call(t,a)&&d(e,a,t[a]);return e})({},c),n(g,r({deliveryRangeType:l}))));const y=this.handlePoiInfo(i);m.log.info(`${I}, info: `,JSON.stringify(y)),this.setData({poiInfo:y},(()=>{m.log.info(`${I}, setData finished`)}))},new Promise(((i,n)=>{var o=e=>{try{l(a.next(e))}catch(e){n(e)}},r=e=>{try{l(a.throw(e))}catch(e){n(e)}},l=e=>e.done?i(e.value):Promise.resolve(e.value).then(o,r);l((a=a.apply(e,t)).next())}));var e,t,a},handlePoiInfo(e){const{poiName:t="",picUrl:a="",distanceText:i="",poiDeliveryInfo:n={}}=e,{deliveryDescription:o="",deliveryRange:r=""}=n;return{picUrl:a,poiName:t,distanceText:i,rangeInfoText:o,rangeText:r}},handleRegionChange(e){const{type:t,causedBy:a}=e;"end"===t&&"drag"===a&&this.mapCtx.getCenterLocation({success:e=>{const{latitude:t,longitude:a}=e;this.setData({latitude:t,longitude:a}),this.isInWX&&this.mapCtx.moveToLocation({latitude:t,longitude:a})}})},controlScale(e){const{type:t,initData:a,step:i}=e;return"plus"===t?+a+i:"minus"===t?+a-i:a},onIconClick(e){var t;const{type:a=""}=null==(t=e.target)?void 0:t.dataset;const{scale:i}=this.data,n=this;this.mapCtx.getCenterLocation({success:e=>{const{latitude:t,longitude:a}=e;this.setData({latitude:t,longitude:a})}}),this.mapCtx.getScale({success(e){const{scale:t}=e,o=t||i;n.setData({scale:n.controlScale({type:a,initData:o,step:1})})},fail(e){m.log.warn(`${I} getScale fail`,JSON.stringify(e)),n.setData({scale:n.controlScale({type:a,initData:i,step:1})})}})},moveToRange(){(0,v.moveToRange)(this.poiDeliveryInfo,this.mapCtx)}});