var o=Object.defineProperty;((k,e)=>{for(var t in(k=>{o(k,"__esModule",{value:!0})})(k),e)o(k,t,{get:e[t],enumerable:!0})})(exports,{default:()=>k});var k=class{getCookbookData(o,k){var e,t;return(null==(t=null==(e=null==o?void 0:o.skuDetailCookBookVO)?void 0:e.cookbookList)?void 0:t.length)>0?(this.sliceCookbookList(o.skuDetailCookBookVO),{skuId:k,cookBookMoreUrl:o.skuDetailCookBookVO.cookBookMoreUrl,cookIndex:o.skuDetailCookBookVO.cookIndex,cookbookList:o.skuDetailCookBookVO.cookbookList,moduleTitle:o.skuDetailCookBookVO.moduleTitle,restCookbookList:o.skuDetailCookBookVO.restCookbookList}):null}sliceCookbookList(o){o.restCookbookList=o.cookbookList.splice(4)}};