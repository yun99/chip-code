var e,t,a=Object.create,o=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))b.call(t,a)&&p(e,a,t[a]);return e},c=(e=require("../../jc.js"),((e,t,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of n(t))s.call(e,i)||"default"===i||o(e,i,{get:()=>t[i],enumerable:!(a=r(t,i))||a.enumerable});return e})((t=o(null!=e?a(l(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),o(t,"__esModule",{value:!0})),e)),y=[{itemText:"地址",itemKey:"tab-address"},{itemText:"自提点",itemKey:"tab-poi"}],m=getApp();(0,c.defineComponent)({properties:{show:{type:Boolean,value:!1},addressList:{type:Array,value:[]},poiList:{type:Array,value:[]}},data:{isShowTabs:!1,tabList:y,tabValue:y[0].itemKey,changeTab:{}},observers:{"addressList, poiList":function(e,t){const a=[].concat(e,t).length>0;this.setData({isShowTabs:a})}},methods:{onTabItemTap(e){const{itemKey:t=""}=e.detail;this.setData({tabValue:t}),m.$lxLog.mv("b_youxuan_b8cxxf54_mv",{tab_name:t})},onAddrChange(e){const t=e.detail;this.triggerEvent("changeAddress",u({},t))},onPoiChange(e){const t=e.detail;this.triggerEvent("poiCardTap",u({},t))},onBtnTab(){this.setData({tabValue:y[0].itemKey,changeTab:y[0]})}}});