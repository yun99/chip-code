var t=Object.defineProperty;((r,s)=>{for(var e in(r=>{t(r,"__esModule",{value:!0})})(r),s)t(r,e,{get:s[e],enumerable:!0})})(exports,{default:()=>s});var r=require("./p3.js"),s=class{constructor(t,r){this.souceUrl=`${t}`.trim(),this.url=`${t}`.trim(),this.options=r,this.init()}init(){const t=this.parse(this.url),{protocol:r="",host:s="",pathname:e="",query:h={},hash:i=""}=t;this.obj=t,this.scheme=r,this.host=s,this.path=e,this.query=h,this.hash=i}getObj(){return this.obj}getSourceUrl(){return this.souceUrl}getUrl(){return this.url}setUrl(t){this.url=`${t}`.trim(),this.init()}getOptions(){return this.options}setOptions(t){this.options=t}getScheme(){return this.scheme}getHost(){return this.host}getHash(){return this.hash}getPath(){return this.path}getQuery(t=null){return t?this.query&&this.query[t]?this.query[t]:null:this.query}setQuery(t){return this.query=t,this.query}format(t){return r.format({urlObj:t})}parse(t){const{protocol:s,host:e,port:h,path:i,pathname:u,query:o,search:a,hash:n,slashes:l}=r.parse(t,!0);return{url:t,protocol:s,slashes:l,host:e,port:h,path:i,pathname:u,query:o,search:a,hash:n}}};