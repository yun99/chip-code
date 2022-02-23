var e=Object.create,t=Object.defineProperty,r=Object.defineProperties,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))u.call(t,r)&&c(e,r,t[r]);return e},h=(e,t)=>r(e,i(t)),d=e=>t(e,"__esModule",{value:!0}),g=r=>((e,r,i)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let a of s(r))l.call(e,a)||"default"===a||t(e,a,{get:()=>r[a],enumerable:!(i=n(r,a))||i.enumerable});return e})(d(t(null!=r?e(o(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),f=(e,t,r)=>new Promise(((n,i)=>{var s=e=>{try{o(r.next(e))}catch(e){i(e)}},a=e=>{try{o(r.throw(e))}catch(e){i(e)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,a);o((r=r.apply(e,t)).next())}));((e,r)=>{for(var n in d(e),r)t(e,n,{get:r[n],enumerable:!0})})(exports,{default:()=>M});var p=g(require("./us.js")),y=g(require("./mo.js")),U=g(require("./mp.js")),O=g(require("./ms.js")),w=g(require("./md.js")),x=g(require("./ob.js")),b=g(require("./vw.js")),D=g(require("./ma.js")),{qs:E}=require("./p0.js"),M=class{constructor(e,t,r={}){this.goto=e=>f(this,null,(function*(){x.log.info(b.MOUDULE_NAME,`原始url是：${this.sourceUrl}`,"goto 开始处理跳转：",e),this.rootUriHandler=new w.default(this);try{const{isHandled:e=!1,res:{resultCode:t=O.RESULT_CODE.ERROR,finallyUrl:r=this.uri.getSourceUrl(),errMsg:n=""}={}}=yield this.rootUriHandler.handle(this);return{isHandled:e,resultCode:t,finallyUrl:r,extraInfo:this.getExtraInfo(),errMsg:n,uriObj:this.uri.getObj()}}catch(e){x.log.warn(b.MOUDULE_NAME,"跳转 error:",e);return{isHandled:!1,resultCode:O.RESULT_CODE.ERROR,finallyUrl:this.uri.getSourceUrl(),extraInfo:this.getExtraInfo(),errMsg:(null==e?void 0:e.errMsg)||"跳转 error",uriObj:this.uri.getObj()}}})),this.run=()=>f(this,null,(function*(){try{yield this.fn.init(this);const e=this.fn.getFn();if(e&&"function"==typeof e){const t=this.uri.getPath(),r=this.uri.getQuery(),n=this.uri.getOptions(),i=h(m(m({},r),n),{__RST:this.startTime});try{const r=getApp();if((e===wx.navigateTo||e===wx.redirectTo)&&p.default.match(t)){const e=D.IdMarker.generateId();i.__preFetcherId=e,p.default.fetch(t,e,r,i).catch((()=>{}))}}catch(e){x.log.error(b.MOUDULE_NAME,e)}const s=Object.keys(i).length?"?":"",a=`${t.startsWith("/")?t:`/${t}`}${s}${s?E.stringify(i):""}`;let o={};if(o.url=a,e===wx.navigateBack){o={delta:"-2"===t?2:1}}return x.log.warn(b.MOUDULE_NAME,"即将跳转：",o,this.getExtraInfo()),new Promise(((t,r)=>{e(h(m({},o),{events:{acceptDataFromOpenedPage(e){}},success:e=>{e&&e.eventChannel&&e.eventChannel.emit&&(this.endTime=Date.now(),e.eventChannel.emit("acceptDataFromOpenerPage",{data:this.getExtraInfo(),_timestamps:{routerStartTime:this.startTime,routerEndTime:this.endTime}})),t(e)},fail:e=>{r(h(m({},e),{params:o})),x.log.warn(b.MOUDULE_NAME,"fail",e,o)},complete:e=>{}}))}))}}catch(e){throw x.log.info(b.MOUDULE_NAME,"run fail error",e),e}})),this.isMemoryWarningAppear=()=>this.routerSingleton?this.routerSingleton.memoryWarning&&this.routerSingleton.memoryWarning.isAppear:0,this.setMemoryWarning=e=>{this.routerSingleton&&this.routerSingleton.setMemoryWarning(e)},this.getExtraInfo=()=>this.extraInfo,this.setExtraInfo=({uriHandlerName:e="",interceptorName:t="",info:r={}}={})=>{this.extraInfo[e]||(this.extraInfo[e]={},this.extraInfo[e][t]={}),this.extraInfo[e][t]=h(m({},this.extraInfo[e][t]),{info:r})},this.back=e=>{const t=this.uri.getPath();let r="-2"===t?2:1;const n=parseInt(t,10);Number.isInteger(n)&&(r=Math.abs(n));const i={delta:r};return new Promise(((t,r)=>{wx.navigateBack(h(m({},i),{success:e=>{t(e)},fail:t=>{r(h(m({},t),{params:i})),x.log.warn(b.MOUDULE_NAME,e,"navigateBack fail",t,i)},complete:e=>{}}))}))},this.routerSingleton=e,this.sourceUrl=t,this.uri=new y.default(t),this.startTime=Date.now();const{fnName:n=null,preloadData:i=null}=r;this.fn=new U.default(n),this.preloadData=i,this.extraInfo={},this.endTime=Date.now()}getSourceUrl(){return this.sourceUrl}setSourceUrl(e){this.sourceUrl=e}resetUri(e){this.uri=new y.default(e)}getUri(){return this.uri}setUri(e){this.uri=new y.default(e)}getFn(){return this.fn}addUriHandler(e){this.rootUriHandler||(this.rootUriHandler=new w.default(this)),this.rootUriHandler.addUriHandler(e)}get demotionConfig(){return this.routerSingleton.getDemotionCogfig()}};module.exports={UriRequest:M};