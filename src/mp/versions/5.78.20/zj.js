var e=Object.create,t=Object.defineProperty,l=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,n=Object.getPrototypeOf,r=Object.prototype.hasOwnProperty,a=e=>t(e,"__esModule",{value:!0}),i=i=>((e,n,a)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let i of o(n))r.call(e,i)||"default"===i||t(e,i,{get:()=>n[i],enumerable:!(a=l(n,i))||a.enumerable});return e})(a(t(null!=i?e(n(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i);((e,l)=>{for(var o in a(e),l)t(e,o,{get:l[o],enumerable:!0})})(exports,{cartSetData:()=>v,formatCartDetailToPopupData:()=>y,mapPopupCartReqsData:()=>p,popupCartDataDiff:()=>f,removePromotionName:()=>g});var u,c,s=i(require("./b2.js")),m=i(require("./xg.js")),d=getApp();null==(c=null==(u=d.getModule("systemInfo"))?void 0:u.getSystemInfo())||c.isIpx;function p(e){var t;if(!e)return{};const l={allSelected:e.allSelected||!1},o=[];return l.card=(null==(t=e.cartItems)?void 0:t.map((e=>{var t,l,n,r,a,i,u,c,s,d,p;const f=(null==(l=null==(t=e.heapStyle)?void 0:t.descV2)?void 0:l.replace(/<redStart>/g,"").replace(/<redEnd>/g,""))||"",v=/>([\W|\w|\d]+)</g.exec(null==(r=null==(n=e.heapStyle)?void 0:n.urlStyle)?void 0:r.text),y={sortId:e.sortId||0,tagDesc:(null==(i=null==(a=e.heapStyle)?void 0:a.promotionLabel)?void 0:i.text)||"",tagUrl:(null==(c=null==(u=e.heapStyle)?void 0:u.promotionLabel)?void 0:c.iconUrl)||null,titleDesc:f,jumpUrl:(null==(d=null==(s=e.heapStyle)?void 0:s.urlStyle)?void 0:d.url)||"",jumpUrlDesc:v&&v[1]||"",promotionId:e.promotionId||0,promotionType:e.promotionType||0,recommendItem:e.recommendItem||{},giftItems:e.giftItems||[],selectNum:e.selectNum||1};return y.goods=null==(p=e.baseItems)?void 0:p.map((t=>{var l,n,r,a,i,u,c,s,m;o.push({skuId:t.skuId||0,promotionId:e.promotionId||0,promotionType:e.promotionType||0,selected:t.selected||!1});const d=t.estimatedHandPriceText?t.estimatedHandPriceText.split("¥"):[];return{skuId:t.skuId||0,selected:t.selected||!1,pic:t.pic||"",title:t.title||"",sellerPrice:(null==(l=t.sellPriceUnitInfoV3)?void 0:l.sellUnitViewPrice)||0,sellUnitViewLinePrice:(null==(n=t.sellPriceUnitInfoV3)?void 0:n.sellUnitViewLinePrice)||0,selfLiftingLabel:(null==(a=null==(r=t.cartItemStyle)?void 0:r.selfLiftingLable)?void 0:a.text)||"",sellInfoLabel:(null==(u=null==(i=t.cartItemStyle)?void 0:i.sellInfoLabel)?void 0:u.text)||"",depreciateLabel:(null==(s=null==(c=t.cartItemStyle)?void 0:c.depreciateLabel)?void 0:s.text)||"",count:t.count||0,activityTag:t.activityTag||"",singleSkuPromotionLabel:t.singleSkuPromotionLabel||"",singleSkuPromotionUrl:t.singleSkuPromotionUrl||"",estimatedHandPriceText:d,promotionLimitText:t.promotionLimitText||"",referencePrice:(null==(m=t.sellPriceUnitInfoV3)?void 0:m.referencePrice)||0,memberLabel:t.memberLabel||"",walkReturnMoneyInfo:t.walkReturnMoneyInfo||{}}})),{type:m.CardType.NORMAL,value:y,key:`card${y.sortId}`}})))||[],{cartData:l,allSkuArr:o}}function f(e,t){return(0,s.default)(e,t)}function v(e){var t,l;const o=null==(l=null==(t=getApp())?void 0:t.page())?void 0:l.selectComponent("#cart");o&&o.setData(e)}function y(e){var t,l;return null==(t=e.discountDetails)||t.forEach((e=>{const t=e.totalAmount.split(" ");3===t.length&&(e.totalAmount=`${t[0]}${t[1]} ${t[2]}`)})),{list:null==(l=e.discountDetails)?void 0:l.map((e=>{var t;return{name:e.discountName,value:e.totalAmount.split(" ")[1],symbol:e.totalAmount.split(" ")[0],valueRed:Boolean(e.type),details:null==(t=e.detailList)?void 0:t.map((e=>{const t=e.desc?` (${e.desc}) `:"";return{name:`${e.name}${t}`,symbol:"-¥",price:`${e.priceString}`}}))}})),summary:{name:"合计",symbol:"¥",value:""+(e.totalAmount||0)/100,valueRed:!1}}}function g(e,t){let l=e;const{trafficSource:o}=d.$cart;return o&&t&&(l+=`${l.indexOf("?")?"&":"?"}trafficSource=${o}`),l=l.replace(/promotion_name[^&]*&{0,1}/g,"").replace(/[&|?]*$/g,""),l}