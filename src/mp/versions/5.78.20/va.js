var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,u=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,n=e=>t(e,"__esModule",{value:!0}),a=a=>((e,u,n)=>{if(u&&"object"==typeof u||"function"==typeof u)for(let a of o(u))l.call(e,a)||"default"===a||t(e,a,{get:()=>u[a],enumerable:!(n=r(u,a))||n.enumerable});return e})(n(t(null!=a?e(u(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a);((e,r)=>{for(var o in n(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{default:()=>c});var s=a(require("./u8.js")),i=a(require("./is.js")),c=e=>{return t=void 0,r=null,o=function*(){if((0,s.isInWX)()){const t=getApp(),r=null==t?void 0:t.getModule("user"),o=null==t?void 0:t.getModule("login"),u=null==t?void 0:t.getModule("cat"),{request:{url:l=""}}=e;if(!(r&&r.getOpenId()||l.includes("/user/v1/info"))){const e=(new Date).getTime();u.reportCustomMetrics(i.YXReportTarget.FORCE_LOGIN,i.ReportValue.SUCCESS),yield o.tryLogin(),u.reportCustomMetrics(i.YXReportTarget.FORCE_LOGIN_COMSUME,(new Date).getTime()-e)}}return e},new Promise(((e,u)=>{var l=e=>{try{a(o.next(e))}catch(e){u(e)}},n=e=>{try{a(o.throw(e))}catch(e){u(e)}},a=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,n);a((o=o.apply(t,r)).next())}));var t,r,o};