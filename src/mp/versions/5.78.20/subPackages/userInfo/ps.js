var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,n=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,i=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))u.call(t,r)&&s(e,r,t[r]);return e},c=e=>t(e,"__esModule",{value:!0}),p=a=>((e,a,n)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let u of o(a))l.call(e,u)||"default"===u||t(e,u,{get:()=>a[u],enumerable:!(n=r(a,u))||n.enumerable});return e})(c(t(null!=a?e(n(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a),m=(e,t,r)=>new Promise(((o,a)=>{var n=e=>{try{u(r.next(e))}catch(e){a(e)}},l=e=>{try{u(r.throw(e))}catch(e){a(e)}},u=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,l);u((r=r.apply(e,t)).next())}));((e,r)=>{for(var o in c(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{changeAvatar:()=>h,updateMTUserInfo:()=>w,updateUserInfo:()=>b});var y=p(require("../../ob.js")),d=p(require("../../ui.js")),{wx2promiseify:g}=require("../../gi.js"),f=getApp(),v=f.getModule("env").getEnv();"test"===v?d.loginSdk.setEnv("test"):"production"===v&&d.loginSdk.setEnv(""),d.loginSdk.config.api="";var b=e=>m(void 0,null,(function*(){const t=f.$user.token?f.$user.token:f.$user.getToken(),{username:r="",avatar:o=""}=e,a={};r&&(a.username=r),o&&(a.avatar=o);try{const e=yield d.loginSdk.updateMtInfo(t,a);return y.log.info("updateUserInfo",e),e}catch(e){throw y.log.warn("updateUserInfo err",e),e}})),h=()=>m(void 0,null,(function*(){try{const e=yield g(wx.chooseImage,{count:1,sizeType:["original","compressed"],sourceType:["album","camera"]}),{tempFilePaths:t}=e;y.log.warn("tempFilePaths",t);return yield b({avatar:t[0]})}catch(e){throw e}})),w=e=>{const t=i(i({},f.$mtuser),e),r=f.$mtuser=t;f.$store.setCache("mtuser",r)};