var t,e,a=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,r=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty;t=require("../../ob.js"),((t,e,a)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let r of i(e))n.call(t,r)||"default"===r||o(t,r,{get:()=>e[r],enumerable:!(a=s(e,r))||a.enumerable})})((e=o(null!=t?a(r(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0}),o(e,"__esModule",{value:!0})),t);function p(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}p.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){var a=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:a}),e(a)},fail:function(a){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:a.errMsg||""})}})},p.prototype.getRegeo=function(t){function e(e){var o=a.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:e,extensions:"all",s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var o,s,i,r,n,p,c,d,u;a.data.status&&"1"==a.data.status?(s=(o=a.data.regeocode).addressComponent,i=[],r="",o&&o.roads[0]&&o.roads[0].name&&(r=o.roads[0].name+"附近"),n=e.split(",")[0],p=e.split(",")[1],o.pois&&o.pois[0]&&(r=o.pois[0].name+"附近",(c=o.pois[0].location)&&(n=parseFloat(c.split(",")[0]),p=parseFloat(c.split(",")[1]))),s.provice&&i.push(s.provice),s.city&&i.push(s.city),s.district&&i.push(s.district),s.streetNumber&&s.streetNumber.street&&s.streetNumber.number?(i.push(s.streetNumber.street),i.push(s.streetNumber.number)):(d="",o&&o.roads[0]&&o.roads[0].name&&(d=o.roads[0].name),i.push(d)),i=i.join(""),u=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:i,desc:r,longitude:n,latitude:p,id:0,regeocodeData:o}],t.success(u)):t.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this;t.location?e(t.location):a.getWxLocation(t,(function(t){e(t)}))},p.prototype.getWeather=function(t){function e(e){var s="base";t.type&&"forecast"==t.type&&(s="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:a.key,city:e,extensions:s,s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){var a,o,s;e.data.status&&"1"==e.data.status?e.data.lives?(a=e.data.lives)&&a.length>0&&(a=a[0],(o={city:{text:"城市",data:(s=a).city},weather:{text:"天气",data:s.weather},temperature:{text:"温度",data:s.temperature},winddirection:{text:"风向",data:s.winddirection+"风"},windpower:{text:"风力",data:s.windpower+"级"},humidity:{text:"湿度",data:s.humidity+"%"}}).liveData=a,t.success(o)):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this,o=a.requestConfig;t.city?e(t.city):a.getWxLocation(t,(function(s){var i;i=s,wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:i,extensions:"all",s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var o,s;a.data.status&&"1"==a.data.status?((s=a.data.regeocode).addressComponent?o=s.addressComponent.adcode:s.aois&&s.aois.length>0&&(o=s.aois[0].adcode),e(o)):t.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}))},p.prototype.getPoiAround=function(t){function e(e){var s={key:a.key,location:e,s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion};t.querytypes&&(s.types=t.querytypes),t.querykeywords&&(s.keywords=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:s,method:"GET",header:{"content-type":"application/json"},success:function(e){var a,o,s,i;if(e.data.status&&"1"==e.data.status){if((e=e.data)&&e.pois){for(a=[],o=0;o<e.pois.length;o++)s=0==o?t.iconPathSelected:t.iconPath,a.push({latitude:parseFloat(e.pois[o].location.split(",")[1]),longitude:parseFloat(e.pois[o].location.split(",")[0]),iconPath:s,width:22,height:32,id:o,name:e.pois[o].name,address:e.pois[o].address});i={markers:a,poisData:e.pois},t.success(i)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this,o=a.requestConfig;t.location?e(t.location):a.getWxLocation(t,(function(t){e(t)}))},p.prototype.getStaticmap=function(t){function e(e){s.push("location="+e),t.zoom&&s.push("zoom="+t.zoom),t.size&&s.push("size="+t.size),t.scale&&s.push("scale="+t.scale),t.markers&&s.push("markers="+t.markers),t.labels&&s.push("labels="+t.labels),t.paths&&s.push("paths="+t.paths),t.traffic&&s.push("traffic="+t.traffic);var a=i+s.join("&");t.success({url:a})}var a,o=this,s=[],i="https://restapi.amap.com/v3/staticmap?";s.push("key="+o.key),a=o.requestConfig,s.push("s="+a.s),s.push("platform="+a.platform),s.push("appname="+a.appname),s.push("sdkversion="+a.sdkversion),s.push("logversion="+a.logversion),t.location?e(t.location):o.getWxLocation(t,(function(t){e(t)}))},p.prototype.getInputtips=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.location&&(o.location=t.location),t.keywords&&(o.keywords=t.keywords),t.type&&(o.type=t.type),t.city&&(o.city=t.city),t.citylimit&&(o.citylimit=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},p.prototype.getDrivingRoute=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.origin&&(o.origin=t.origin),t.destination&&(o.destination=t.destination),t.strategy&&(o.strategy=t.strategy),t.waypoints&&(o.waypoints=t.waypoints),t.avoidpolygons&&(o.avoidpolygons=t.avoidpolygons),t.avoidroad&&(o.avoidroad=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},p.prototype.getWalkingRoute=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.origin&&(o.origin=t.origin),t.destination&&(o.destination=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},p.prototype.getTransitRoute=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.origin&&(o.origin=t.origin),t.destination&&(o.destination=t.destination),t.strategy&&(o.strategy=t.strategy),t.city&&(o.city=t.city),t.cityd&&(o.cityd=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var a=e.data.route;t.success({distance:a.distance||"",taxi_cost:a.taxi_cost||"",transits:a.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},p.prototype.getRidingRoute=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.origin&&(o.origin=t.origin),t.destination&&(o.destination=t.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&t.success({paths:e.data.data.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},module.exports.AMapWX=p;