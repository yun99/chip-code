var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,s=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,u=e=>t(e,"__esModule",{value:!0}),l=l=>((e,s,u)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let l of n(s))a.call(e,l)||"default"===l||t(e,l,{get:()=>s[l],enumerable:!(u=r(s,l))||u.enumerable});return e})(u(t(null!=l?e(s(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l);((e,r)=>{for(var n in u(e),r)t(e,n,{get:r[n],enumerable:!0})})(exports,{default:()=>U});var i=l(require("./20.js")),o=l(require("./ms.js")),c=l(require("./ob.js")),g=l(require("./31.js")),m=l(require("./vw.js")),p=l(require("./ma.js")),{CAT_SEC_CATEGORY:y}=require("./iu.js"),d=require("./gj.js"),U=class extends i.default{constructor(){super(),this.shouldHandle=e=>{const t=e.getUri().getPath(),r=e.getUri().getScheme();e.getUri().getQuery();return"irouter:"===r||(0,p.isNavigateBack)(r,t)},this.is404=e=>"pages/404/index"===e,this.isPageExit=(e,t)=>e.length&&-1!==e.indexOf(t),this.handleInternal=e=>{return t=this,r=null,n=function*(){const t=getApp(),r=e.getUri(),n=r.getScheme(),s=r.getPath(),{pages:a=[]}=d,u="string"==typeof s&&s&&s.length>1?s.substr(1):"pages/404/index",l=this.is404(u);if(this.isPageExit(a,u)||(0,p.isNavigateBack)(n,s)||l){const t=yield e.run();return{resultCode:o.RESULT_CODE.SUCCESS,finallyUrl:r.getUrl(),errMsg:t&&t.errMsg}}const i=a.length?"请确认entry中是否存在对应页面，更新后重新构建":"构建出错，pages为空，请重新构建；"+(t.$isProd?"线上报错":"开发阶段会因为watch导致页面栈被清空");c.log.warn(m.MOUDULE_NAME,this.name,i);try{const n=e.getUri().getUrl();e.setUri(m.PageNotFound);const s=yield e.run();return t.$cat.reportError(y.ROUTER_ERROR({MOUDULE_NAME:m.MOUDULE_NAME,name:this.name,url:n,error:i})),{resultCode:o.RESULT_CODE.NOT_FOUND,finallyUrl:r.getUrl(),errMsg:s&&s.errMsg}}catch(e){throw{resultCode:o.RESULT_CODE.ERROR,finallyUrl:r.getUrl(),errMsg:i}}},new Promise(((e,s)=>{var a=e=>{try{l(n.next(e))}catch(e){s(e)}},u=e=>{try{l(n.throw(e))}catch(e){s(e)}},l=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,u);l((n=n.apply(t,r)).next())}));var t,r,n},this.needInterceptor=e=>{let t=!1;const r=e.getUri().getQuery();if(r.need_login){"1"===(Array.isArray(r.need_login)?r.need_login[0]:r.need_login)&&(t=!0,this.addInterceptor(new g.default(this)))}return r.need_type&&e.fn.setExtFnName(r.need_type),t},this.name="InnerUriHandler"}};