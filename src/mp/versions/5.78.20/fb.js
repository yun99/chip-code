var e=Object.create,t=Object.defineProperty,s=Object.defineProperties,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,m=(e,s,n)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,y=e=>t(e,"__esModule",{value:!0}),f=s=>((e,s,o)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let r of i(s))u.call(e,r)||"default"===r||t(e,r,{get:()=>s[r],enumerable:!(o=n(s,r))||o.enumerable});return e})(y(t(null!=s?e(l(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);((e,s)=>{for(var n in y(e),s)t(e,n,{get:s[n],enumerable:!0})})(exports,{default:()=>g});var c=f(require("./kw.js")),p=f(require("./p0.js")),d=f(require("./u8.js")),h=f(require("./u3.js")),g=class extends c.default{constructor(e,t){super(e,t),this.systemInfo=null,this.deviceW=-1}static register(e){const t=new g("systemInfo",e);return e.addModule(t),t}setSystemInfo(){wx.getSystemInfo({success:e=>{this.setSourceSystemInfo({systemInfo:e})}})}setSystemInfoSync(){const e=wx.getSystemInfoSync();this.setSourceSystemInfo({systemInfo:e})}setSourceSystemInfo({systemInfo:e=null}={}){const t=e||this.systemInfo||{},n=(0,p.isMMP)(),i=this.isIpx(t&&t.safeArea,t&&t.model);let l="";var y;n&&t&&(l=t.appVersion||t.version||""),/iPhone OS/.test((null==t?void 0:t.system)||"")&&(t.system=t.system.replace("iPhone OS","iOS")),this.systemInfo=(y=((e,t)=>{for(var s in t||(t={}))u.call(t,s)&&m(e,s,t[s]);if(r)for(var s of r(t))a.call(t,s)&&m(e,s,t[s]);return e})({},t),s(y,o({isMmp:n,appVersion:l,isIpx:i})))}getSystemInfo(e=null){return this.systemInfo||this.setSystemInfoSync(),e&&this.systemInfo&&this.systemInfo[e]?this.systemInfo[e]:this.systemInfo}getScreenInfo(){const e=this.getSystemInfo();return e?{screenWidth:e.screenWidth,screenHeight:e.screenHeight,windowWidth:e.windowWidth,windowHeight:e.windowHeight,pixelRatio:e.pixelRatio||2}:{screenWidth:750,windowWidth:750,screenHeight:750,pixelRatio:2,windowHeight:700}}getScreenPixelRatio(){return this.getSystemInfo("pixelRatio")||2}getDeviceW(){if(-1===this.deviceW){const e=this.getSystemInfo("windowWidth")*this.getSystemInfo("pixelRatio");return this.deviceW=e,e}return this.deviceW}removeSystemInfo(){this.systemInfo=null}isLowSystem(){const[,e]=this.getSystemInfo("system").split(" ");return this.isIOS()&&-1===(0,h.default)(e,"10.0.0")||this.isAndroid()&&-1===(0,h.default)(e,"5.0.0")}isLowSystemApp(){var e,t;const s=(0,d.isApp)()&&this.isLowSystem();return s&&(null==(t=null==(e=getApp())?void 0:e.page())||t.toast("系统版本过低，不支持该操作")),s}isIpx(e,t){if(!e||!e.top){return!!["iPhone X","iPhone11","iPhone 11","iPhone12","iPhone13"].find((e=>-1!==t.indexOf(e)))}return!!(-1!==t.indexOf("iPhone")&&e.top>20)}isIOS(){return 0===this.getSystemInfo("system").toLowerCase().indexOf("ios")}isAndroid(){return 0===this.getSystemInfo("system").toLowerCase().indexOf("android")}isWxwork(){const e=this.getSystemInfo();return e&&"wxwork"===e.environment}isDevTools(){return"devtools"===this.getSystemInfo("platform")}isPC(){const e=this.getSystemInfo("platform");return"windows"===e||"mac"===e}getLocation(){const{longitude:e,latitude:t}=getApp().$location||{};let s={};return e&&(s={homepageLng:e,homepageLat:t}),s}destory(){}};