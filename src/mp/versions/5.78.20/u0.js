var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,n=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,i=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&s(e,r,t[r]);if(u)for(var r of u(t))l.call(t,r)&&s(e,r,t[r]);return e},c=e=>t(e,"__esModule",{value:!0}),p=u=>((e,u,n)=>{if(u&&"object"==typeof u||"function"==typeof u)for(let l of o(u))a.call(e,l)||"default"===l||t(e,l,{get:()=>u[l],enumerable:!(n=r(u,l))||n.enumerable});return e})(c(t(null!=u?e(n(u)):{},"default",u&&u.__esModule&&"default"in u?{get:()=>u.default,enumerable:!0}:{value:u,enumerable:!0})),u);((e,r)=>{for(var o in c(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{default:()=>b});var f=p(require("./pi.js")),y=p(require("./u8.js")),m={token:"",uuid:""},b=(e,t={})=>{f.default.use("setBackgroundFetchToken",(r=>{if((0,y.isMT)()||(0,y.isApp)())return void r.setBackgroundFetchToken({token:""});const[o]=e.$systemInfo.systemInfo.system.split(" ");m=i(i({},m),t),r.setBackgroundFetchToken({token:`t=${m.token}&sysName=${o}&uuid=${m.uuid}`})}))};