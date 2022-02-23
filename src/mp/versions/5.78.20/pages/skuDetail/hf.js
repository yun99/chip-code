var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=e=>t(e,"__esModule",{value:!0}),n=n=>((e,i,o)=>{if(i&&"object"==typeof i||"function"==typeof i)for(let n of l(i))a.call(e,n)||"default"===n||t(e,n,{get:()=>i[n],enumerable:!(o=r(i,n))||o.enumerable});return e})(o(t(null!=n?e(i(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);((e,r)=>{for(var l in o(e),r)t(e,l,{get:r[l],enumerable:!0})})(exports,{default:()=>c});var s=n(require("../../lq.js")),u=n(require("../../ob.js")),c=class{getSkuPriceData(e={}){if(!this.isShowSkuPrice(e))return null;const t=this.getDisplayPriceAndTime(e),r=this.getDisplayTag(e),{priceImage:l,isBrandSku:i,isPresellSku:a}=this.getPriceImage(e);return{sellPrice:e.sellPrice||null,dashPrice:e.dashPrice||null,memberPrice:e.memberPrice||null,dashPriceReference:e.dashPriceReference||null,sellUnit:e.sellUnit||null,saleStatus:e.saleStatus||null,saleStatusTitle:e.saleStatusTitle||null,preSellEndDate:e.preSellEndDate||null,priceTag:e.priceTag||null,promotionLimitText:e.promotionLimitText||null,hotSellPriceTag:e.hotSellPriceTag||null,showDashPrice:e.showDashPrice||!1,showSellPrice:e.showSellPrice||!1,priceImage:l||"",isBrandSku:i||!1,isPresellSku:a||!1,preSellStartTimeText:t.preSellStartTimeText||"",priceInfo:t.priceInfo||{},limitAmount:r.limitAmount||"",promotionTagText:r.promotionTagText||"",productPattern:e.productPattern||1,lowSellPrice:e.lowSellPrice||null,highSellPrice:e.highSellPrice||null,skuSpecs:e.skuSpecs||[]}}showCountDown(e={}){return this.isShowSkuPrice(e)}isShowSkuPrice(e={}){return!(!e.sellPrice||e.countdownVO)}getDisplayPriceAndTime(e){var t;try{const r={preSellStartTimeText:"",priceInfo:{}};if(2===e.saleStatus){const t=new Date(e.preSellStartDate),l=(0,s.padding0)(t.getMonth()+1,2),i=(0,s.padding0)(t.getDate(),2),a=(0,s.padding0)(t.getHours(),2),o=(0,s.padding0)(t.getMinutes(),2);r.preSellStartTimeText=`${l}月${i}日 ${a}:${o}`,r.priceInfo=e.sellPrice}return 1!==e.saleStatus&&3!==e.saleStatus||(r.priceInfo=(null==(t=null==e?void 0:e.promotionPrice)?void 0:t.text)?e.promotionPrice:e.sellPrice),r}catch(e){return u.log.info(`<SkuPrice transferPreSellStartTime> 转化时间出错, ${e.message}`),{preSellStartTimeText:"",priceInfo:{}}}}getDisplayTag(e){try{const{priceTag:t,promotionLimitTag:r,skuLimitBuyTag:l,promotionPrice:i}=e,a=l&&l.text,o=t&&t.text,n=r&&r.text,s={limitAmount:"",promotionTagText:""},u=null==e?void 0:e.saleStatus;if(o){let e=t.text;1!==u&&3!==u||(n&&(e=`${e} ${r.text}`),a&&(e=`${e} ${l.text}`)),2===u&&(i&&i.text&&(e=`${e} ${i.text}`),s.limitAmount=n?r.text:a?l.text:""),s.promotionTagText=e}return!o&&a&&(s.promotionTagText=l.text),s}catch(e){return u.log.info(`<SkuPrice resolveTag> 处理非秒杀商品标签出错, ${e.message}`),{limitAmount:"",promotionTagText:""}}}getPriceImage(e){try{const{skuDetailTagImage:t={}}=e;return{priceImage:(null==t?void 0:t.url)||"",isBrandSku:"品牌标签"===(null==t?void 0:t.title),isPresellSku:"预售标签"===(null==t?void 0:t.title)}}catch(e){return u.log.info(`<SkuPrice resolveTag> 处理价格栏图片标签出错, ${e.message}`),{priceImage:"",isBrandSku:!1,isPresellSku:!1}}}};