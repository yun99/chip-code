var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,i=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&u(e,r,t[r]);return e},c=e=>t(e,"__esModule",{value:!0}),d=a=>((e,a,l)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let o of n(a))s.call(e,o)||"default"===o||t(e,o,{get:()=>a[o],enumerable:!(l=r(a,o))||l.enumerable});return e})(c(t(null!=a?e(l(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a);((e,r)=>{for(var n in c(e),r)t(e,n,{get:r[n],enumerable:!0})})(exports,{default:()=>h});var p=d(require("./20.js")),g=d(require("./ms.js")),m=d(require("./u8.js")),y=d(require("./is.js")),f=d(require("./lk.js")),h=class extends p.default{constructor(){super(),this.shouldHandle=e=>{const t=e.getUri().getUrl();let r=!1;return t&&"string"==typeof t&&t.length&&"-1"!==t&&"-2"!==t&&(r=!0),r},this.needInterceptor=()=>!1,this.handleInternal=e=>{return t=this,r=null,n=function*(){const t=e.getUri(),r=t.getUrl();let n=g.RESULT_CODE.NEXT,a=t.getUrl();const l=e.demotionConfig,s=this.syncGetDegradeItem(r,l);let o="没有命中降级";if(!s)return{resultCode:n,finallyUrl:a,errMsg:o};let u=null==s?void 0:s.type,i=null==s?void 0:s.action,c=!1;switch("string"==typeof u&&(u=u.trim()),"string"==typeof i&&(i=i.trim()),u){case"h5":c=!0,this.checkDowngradeUrl(s)?(a=s.downgradeUrl.toString(),o=`命中${u}---${i}降级`):o=`命中${u} 降级，但是 ${s.downgradeUrl} 错误`;break;case"native":c=!0,"update"!==i?(o=`现在只支持app更新方式,错误${i}`,yield Promise.resolve()):(0,m.isApp)()||(o="App降级失败,非优选App",yield Promise.resolve());break;case"local":c=!0,"update"!==i?o=`现在只支持小程序更新方式,错误${i}`:(n=g.RESULT_CODE.SUCCESS,this.updateManager.updateMiniProgramVesion(!0),o="命中小程序强制更新");break;default:o=`没有命中降级 ${u}`}return c&&getApp().$cat.reportCustomMetrics(y.YXReportTarget.ROUTER_GOTO,y.ReportValue.SUCCESS,{downgradeUrl:r,msg:o}),{resultCode:n,finallyUrl:a,errMsg:o}},new Promise(((e,a)=>{var l=e=>{try{o(n.next(e))}catch(e){a(e)}},s=e=>{try{o(n.throw(e))}catch(e){a(e)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,s);o((n=n.apply(t,r)).next())}));var t,r,n},this.syncGetDegradeItem=(e,t)=>{if(!t)return null;return this.findDegradeItem(t,e)},this.name="DegradeHandler",this.updateManager=new f.default}checkDowngradeUrl(e){let t=!1;return e&&"string"==typeof e.downgradeUrl&&e.downgradeUrl.length&&(t=!0),t}findDegradeItem(e,t){let r=null;if(!Array.isArray(e))return r;const n=t&&t.toString();if(!n)return r;for(let t=0;t<e.length;t++){const a=e[t],l=a.sourcePath;if(!Array.isArray(l))return r;for(let e=0;e<l.length;e++){const t=l[e];if(n.trim().startsWith(t.trim())){r=i({},a);break}}}return r}};