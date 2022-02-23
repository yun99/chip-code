var e=Object.create,t=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptor,_=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,O=(e,o,r)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,a=e=>t(e,"__esModule",{value:!0}),T=o=>((e,o,_)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let i of R(o))n.call(e,i)||"default"===i||t(e,i,{get:()=>o[i],enumerable:!(_=r(o,i))||_.enumerable});return e})(a(t(null!=o?e(s(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);((e,o)=>{for(var r in a(e),o)t(e,r,{get:o[r],enumerable:!0})})(exports,{PoiLocationError:()=>P,PoiLocationErrorType:()=>l,getLocationErrorWithType:()=>u});var l,A,C=T(require("./o9.js")),I=T(require("./j5.js"));(A=l||(l={})).POI_SAMPLE_ROOM="sample_room",A.LOCATION_AUTH_ERROR_WX_SETTING="no_setting_error",A.LOCATION_AUTH_INVALID_WX="no_location_wx",A.LOCATION_ACCESS_API_TIMEOUT="no_location_timeout",A.LOCATION_ACCESS_API_ERROR_WX_LOCATION="no_location_wxapi",A.LOCATION_ACCESS_INVALID_WX_MP="no_location_wxapp",A.LOCATION_ACCESS_INVALID_MT="no_location_mmp",A.LOCATION_ACCESS_INVALID_YX="no_location_yx",A.LOCATION_ACCESS_INVALID_MT_TIMEOUT="no_location_mmp_timeout",A.DEFAULT_ERROR="no_location_default",A.CONTAINER_REQUEST_FAIL="no_network_request_fail",A.HTTP_ERROR="request_http_error",A.ANTI_ERROR="request_anti_error_403",A.ANTI_ERROR_420="request_anti_error_420",A.BACK_END_API_FAIL="request_fetch_poi_infos_fail",A.BACK_END_EMPTY_RESPONSE="empty_response",A.BACK_END_NO_POI_DATA="no_poi_data",A.BACK_END_NO_CITY_DATA="city_not_open",A.BACK_END_ERROR="server_response_error",A.OTHER="other";var c="未获取位置信息，无法为您推荐附近的团长，您可以手动切换自提点~",N="未获取位置信息，无法为您推荐附近的团长，您可以手动切换自提点.",P=class{constructor(e){var t,o;const{type:r=l.DEFAULT_ERROR,desc:_="默认兜底异常",title:R="获取位置信息失败",message:i=c,btnLeft:s="切换自提点",btnRight:n="重新刷新",buttonTitle:E="",errorCode:O=C.default.DEFAULT}=e;this.name="PoiLocationError",this.type=r,this.desc=_,this.message=i,this.title=R,this.btnLeft=s,this.btnRight=n,this.buttonTitle=E,this.errorCode=null==(o=null==(t=getApp())?void 0:t.$errorCode)?void 0:o.getCode({code:O});const a=null==Error?void 0:Error.captureStackTrace;"function"==typeof a&&a(this,P)}},d={[l.POI_SAMPLE_ROOM]:{desc:"样板间加车拦截弹窗，无法下单",title:"抱歉，体验店无法下单",message:"美团优选体验店仅供浏览。请开启定位服务，我们将为您推荐附近自提点，您也可手动选择其他自提点。",btnLeft:"选择其他自提点",btnRight:"开启定位",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.USER,"001")},[l.LOCATION_ACCESS_INVALID_WX_MP]:{desc:"未授予小程序定位权限（需打开设置页进行允许）",title:"请允许美团优选使用定位信息",message:"我们需要知道您的位置，为您推荐附近的团长，方便您去提货",btnRight:"定位信息设置",buttonTitle:"开启定位权限",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.USER,"002")},[l.LOCATION_AUTH_ERROR_WX_SETTING]:{desc:"获取getSetting的api失败",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.USER,"003")},[l.LOCATION_AUTH_INVALID_WX]:{desc:"系统定位开启，未授权给微信",title:"请打开微信的位置授权",message:"请在手机系统设置中，打开微信位置授权\n我们会为您推荐附近的团长，方便您去提货",btnRight:"知道了",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.USER,"004")},[l.CONTAINER_REQUEST_FAIL]:{desc:"容器request:fail",message:c,title:"网络好像不给力哦",buttonTitle:"重新加载",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.CONTAINER,"001")},[l.LOCATION_ACCESS_API_ERROR_WX_LOCATION]:{desc:"微信getLocation接口报错",title:"获取位置信息失败",message:"未获取位置信息，无法为您推荐附近的团长\n您可以手动输入地址进行查找",buttonTitle:"重新刷新",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.CONTAINER,"002")},[l.LOCATION_ACCESS_API_TIMEOUT]:{desc:"微信getLocation接口超时，目前是30s",title:"获取位置信息失败",message:"未获取位置信息，无法为您推荐附近的团长\n您可以手动输入地址进行查找",buttonTitle:"重新刷新",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.CONTAINER,"003")},[l.LOCATION_ACCESS_INVALID_MT]:{desc:"系统定位开启，未授权给美团",title:"请打开美团的位置授权",message:"请在系统设置开启定位，并允许美团访问位置信息，我们会为您推荐附近的团长，方便您去提货",btnRight:"知道了",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.CONTAINER,"004")},[l.LOCATION_ACCESS_INVALID_MT_TIMEOUT]:{desc:"系统定位开启，未授权给美团",title:"请打开美团的位置授权",message:"请在系统设置开启定位，并允许美团访问位置信息，我们会为您推荐附近的团长，方便您去提货",btnRight:"知道了",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.CONTAINER,"005")},[l.ANTI_ERROR]:{desc:"反爬命中403",message:N,errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.ANTI_CLIMBING,"001")},[l.ANTI_ERROR_420]:{desc:"反爬命中420，数据裁剪",message:N,errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.ANTI_CLIMBING,"002")},[l.HTTP_ERROR]:{desc:"门店接口异常",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.HTTP,"001")},[l.BACK_END_API_FAIL]:{desc:"门店接口异常：返回值不正确",message:N,errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.BACK_END,"001")},[l.BACK_END_EMPTY_RESPONSE]:{desc:"门店接口异常：空数据",message:N,errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.BACK_END,"002")},[l.BACK_END_ERROR]:{desc:"门店接口异常：异常",message:N,errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.BACK_END,"003")},[l.BACK_END_NO_POI_DATA]:{desc:"自提点页面CITY：当前地址附近暂无自提点",title:"当前地址附近暂无自提点",message:"您可搜索自提点名称，也可以切换其他地址查找~\n或申请成为该位置的团长，足不出户，轻松赚钱！",btnLeft:"选择其他地址",btnRight:"申请成为团长",buttonTitle:"选择其他地址",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.BACK_END,"004")},[l.BACK_END_NO_CITY_DATA]:{desc:"自提点页面CITY：当前城市附近暂无自提点",title:"无法为您推荐附近自提点。您可搜索其他地址查找自提点",errorCode:(0,I.PoiRelations)(I.ERROR_TYPE.BACK_END,"005")}};function u(e){const t=(r=((e,t)=>{for(var o in t||(t={}))n.call(t,o)&&O(e,o,t[o]);if(i)for(var o of i(t))E.call(t,o)&&O(e,o,t[o]);return e})({},d[e]),o(r,_({type:e})));var r;return new P(t)}