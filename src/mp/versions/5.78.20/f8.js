var e=Object.create,t=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,n=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&l(e,r,t[r]);if(u)for(var r of u(t))i.call(t,r)&&l(e,r,t[r]);return e},m=(e,t)=>r(e,s(t)),y=e=>t(e,"__esModule",{value:!0}),b=r=>((e,r,s)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let u of a(r))c.call(e,u)||"default"===u||t(e,u,{get:()=>r[u],enumerable:!(s=o(r,u))||s.enumerable});return e})(y(t(null!=r?e(n(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);((e,r)=>{for(var o in y(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{skuBoardFormat:()=>O});var g=b(require("./ob.js")),f=b(require("./lx.js")),d=b(require("./lz.js"));function O(e){const{itemKey:t="",skuItem:r={},type:o=1,requestid:s="-999",strategy:a="b",skuTypeMaps:u=d.SKU_BOARD_TYPE_MAP}=e;try{const{schema:e={}}=u[o];return 1!==o&&Object.keys(e).length?(0,f.skuListFormat)(r,e,s,a):m(p({},r),{requestid:s,itemKey:t})}catch(e){return g.log.error(`<skuBoards> src/components/skuBoards/utils 卡片未配置schema, type: ${o}`,r),m(p({},r),{requestid:s,itemKey:t})}}