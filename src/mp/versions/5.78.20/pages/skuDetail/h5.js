var r=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(e,t,l)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;((e,t)=>{for(var l in(e=>{r(e,"__esModule",{value:!0})})(e),t)r(e,l,{get:t[l],enumerable:!0})})(exports,{default:()=>n});var n=class{getBoardData(r={}){return this.isShowBoard(r)?(n=((r,e)=>{for(var t in e||(e={}))o.call(e,t)&&i(r,t,e[t]);if(l)for(var t of l(e))a.call(e,t)&&i(r,t,e[t]);return r})({},r.board),d={boardLxParams:this.getLxParams(r)},e(n,t(d))):null;var n,d}isShowBoard(r){const{jumpUrl:e,icon:t,textList:l}=(null==r?void 0:r.board)||{};return!!((null==e?void 0:e.iretail)&&(null==l?void 0:l.length)&&(null==t?void 0:t.url))}getLxParams(r){var e,t,l;return{sku_id:(null==r?void 0:r.skuId)||"",product_id:r.productId||-999,list_id:(null==(e=null==r?void 0:r.board)?void 0:e.type)||null,list_name:(null==(l=null==(t=null==r?void 0:r.board)?void 0:t.boardName)?void 0:l.text)||""}}};