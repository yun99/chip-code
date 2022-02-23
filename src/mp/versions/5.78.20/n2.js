var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,c=e=>t(e,"__esModule",{value:!0}),n=n=>((e,o,c)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let n of a(o))s.call(e,n)||"default"===n||t(e,n,{get:()=>o[n],enumerable:!(c=r(o,n))||c.enumerable});return e})(c(t(null!=n?e(o(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);((e,r)=>{for(var a in c(e),r)t(e,a,{get:r[a],enumerable:!0})})(exports,{CacheSource:()=>m,CacheType:()=>u,default:()=>p,getCacheKey:()=>h});var u,d,m,f,i=n(require("./2t.js")),l=n(require("./16.js"));(d=u||(u={})).defer="defer",d.mem="mem",d.store="store",d.check="check",(f=m||(m={}))[f.store=0]="store",f[f.notModified=1]="notModified",f[f.refresh=2]="refresh",f[f.nocache=3]="nocache";var h=(e,t,r)=>`mtweapp_api_${(0,i.isProd)(e)?"":`${e}_`}${t}${(0,i.getBodyStr)(r)}`;function p(e){const t=(0,l.wxPromisify)("getStorage",wx),r=(0,l.wxPromisify)("setStorage",wx),a={},o=e=>a[e.key]=e.data;return s=>{const{cache:c,delay:n=1e3,cacheKey:d}=s;if(s.cache=void 0,c){var m;let f;f="string"==typeof d?d:(d||h)(this.config.env,s.url,s.data);const i=()=>{const{data:e,header:t,statusCode:a}=m;return Promise.resolve(200===a&&(c===u.mem?o:r)({key:f,data:{data:e,header:t,statusCode:a,errMsg:m.errMsg}}))},l=e=>{(m=e).cacheKey=f,m.setCache=i},p=()=>{const t=m&&m.header,r=t&&m.data&&(t.ETag||t.etag||t.Etag||t.ETAG);return r&&(s.header=s.header||{},s.header["If-None-Match"]=r),e.call(this,s).then((e=>(304===e.statusCode?(m.source=1,Object.assign(m.header,e.header)):(e.source=r?2:3,l(e),c===u.defer?m.freshCache=p:i()),m)))};return(c===u.mem?Promise.resolve(a[f]):t({key:f}).catch((e=>{})).then((e=>e&&e.data))).then((e=>{if(e)switch(l(e),m.source=0,c){case u.defer:return m.freshCache=p,m.fromStorage=!0,m;case u.store:return setTimeout(p,n),m;default:return p()}return p()}))}return e(s)}}