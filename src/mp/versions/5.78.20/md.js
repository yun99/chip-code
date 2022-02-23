var e=Object.create,r=Object.defineProperty,t=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,n=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,s=e=>r(e,"__esModule",{value:!0}),u=u=>((e,n,s)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let u of l(n))a.call(e,u)||"default"===u||r(e,u,{get:()=>n[u],enumerable:!(s=t(n,u))||s.enumerable});return e})(s(r(null!=u?e(n(u)):{},"default",u&&u.__esModule&&"default"in u?{get:()=>u.default,enumerable:!0}:{value:u,enumerable:!0})),u);((e,t)=>{for(var l in s(e),t)r(e,l,{get:t[l],enumerable:!0})})(exports,{default:()=>R});var i=u(require("./u8.js")),o=u(require("./20.js")),d=u(require("./ms.js")),U=u(require("./29.js")),m=u(require("./3e.js")),c=u(require("./3q.js")),h=u(require("./3w.js")),p=u(require("./3t.js")),f=u(require("./3r.js")),E=u(require("./3y.js")),y=u(require("./ob.js")),g=u(require("./vw.js")),{CAT_SEC_CATEGORY:O}=require("./iu.js"),R=class extends o.default{constructor(e){super(),this.shouldHandle=()=>!0,this.needInterceptor=()=>!1,this.handleInternal=e=>{return r=this,t=null,l=function*(){y.log.info(g.MOUDULE_NAME,this.name,"入口处理：",e.getUri().getUrl());try{let r,t=!1;const l=[...this.selfChainUriHandler,...this.defaultChainUriHandler];for(let n=0;n<l.length;n++){const a=yield l[n].handle(e);if(t=a.isHandled,t){const t=l[n].name;if(y.log.info(g.MOUDULE_NAME,t,"返回值：",a),r=yield this.handleResultCode(e,t,a.res),(null==r?void 0:r.resultCode)!==d.RESULT_CODE.NEXT)break}}if(!t){const t=yield(new p.default).handle(e);r=yield this.handleResultCode(e,"DefaultHandler",t.res)}return r}catch(r){throw this.needReport(r)?y.log.warn(g.MOUDULE_NAME,r):getApp().$cat.reportError(O.ROUTER_ERROR({MOUDULE_NAME:g.MOUDULE_NAME,url:e.getUri().getUrl(),error:r})),r}},new Promise(((e,n)=>{var a=e=>{try{u(l.next(e))}catch(e){n(e)}},s=e=>{try{u(l.throw(e))}catch(e){n(e)}},u=r=>r.done?e(r.value):Promise.resolve(r.value).then(a,s);u((l=l.apply(r,t)).next())}));var r,t,l},this.handleResultCode=(e,r,t)=>{const l=e.getUri(),n=l.getUrl(),a=l.getSourceUrl(),s=getApp();switch(t&&t.resultCode){case d.RESULT_CODE.REDIRECT:if(t.finallyUrl)return e.goto(t.finallyUrl);break;case d.RESULT_CODE.NEXT:if(t.finallyUrl)return e.resetUri(t.finallyUrl),t;break;case d.RESULT_CODE.REQUEST_ERROR:throw new Error(`${JSON.stringify({url:n,sourceUrl:a,handlerName:r,res:t,msg:"请求错误，请确认URI是否正确，更新后重试"})}`);case d.RESULT_CODE.NOT_FOUND:if(y.log.error(g.MOUDULE_NAME,{url:n,sourceUrl:a,handlerName:r,res:t,msg:"页面不存在，请确认uri是否正确"},"page not found 跳转404"),s.$cat.reportError(O.ROUTER_ERROR({MOUDULE_NAME:g.MOUDULE_NAME,url:n,sourceUrl:a,res:t,msg:"页面不存在，请确认uri是否正确"})),"InnerUriHandler"===r)throw new Error(`${JSON.stringify({url:n,sourceUrl:a,handlerName:r,res:t,msg:"页面不存在，请确认uri是否正确"})}`);return t.finallyUrl=g.PageNotFound,t.resultCode=d.RESULT_CODE.NEXT,e.resetUri(t.finallyUrl),t;case d.RESULT_CODE.ERROR:throw s.$cat.reportError(O.ROUTER_ERROR({MOUDULE_NAME:g.MOUDULE_NAME,url:n,sourceUrl:a,res:t,msg:"500 发生错误"})),new Error(`${JSON.stringify({url:n,handlerName:r,res:t,msg:"发生错误"})}`);case d.RESULT_CODE.SUCCESS:return t}},this.name="RootUriHandler",this.defaultChainUriHandler=[],this.selfChainUriHandler=[],this.init()}addUriHandler(e){if(e instanceof o.default){if(!e.name)return void y.log.error(g.MOUDULE_NAME,this.name,"uriHandler类中缺少name属性，请添加后重试");if(-1!==[...this.defaultChainUriHandler,...this.selfChainUriHandler].map((e=>e.name)).indexOf(e.name))return void y.log.error(g.MOUDULE_NAME,this.name,"已存在同名handler，请修改后重试");this.selfChainUriHandler.push(e)}else y.log.error(g.MOUDULE_NAME,this.name,"uriHandler类型错误，请确认是否实现UriHandler基类")}init(){(0,i.isMTTurbo)()||this.defaultChainUriHandler.push(new f.default),this.defaultChainUriHandler.push(new E.default),this.defaultChainUriHandler.push(new m.default),this.defaultChainUriHandler.push(new U.default),this.defaultChainUriHandler.push(new h.default),this.defaultChainUriHandler.push(new c.default)}needReport(e){const r=null==e?void 0:e.errMsg;return y.log.info(g.MOUDULE_NAME,"needReport",r),!r||("string"==typeof r&&"navigateToMiniProgram:fail cancel"===r||("string"==typeof r&&("未支持该协议"===r||"Error: 用户取消登录"===r||r.indexOf&&-1!==r.indexOf("cancel"))?(y.log.info(g.MOUDULE_NAME,"needReport  false"),!1):(y.log.info(g.MOUDULE_NAME,"needReport true"),!0)))}};