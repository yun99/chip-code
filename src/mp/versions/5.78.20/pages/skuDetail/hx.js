var e=Object.defineProperty;((t,o)=>{for(var r in(t=>{e(t,"__esModule",{value:!0})})(t),o)e(t,r,{get:o[r],enumerable:!0})})(exports,{default:()=>o});var{formatTimeToDay:t}=require("../../p0.js"),o=class{getSkuCommentData(e,o,r,a,i){var u;if(!(null==e?void 0:e.items)||!e.items[0])return null;const s=e.items[0]||{};s.imagesSum=(null==(u=s.reviewImgs)?void 0:u.length)||0,s.formatCommentTime=t(new Date(s.ctime),"."),s.displayImages=(s.reviewImgs||[]).slice(0,3);let m="";const{buyCountBackColor:l,buyCountFontColor:n}=e.properties||{};return l&&n&&(m=`background: ${l};color: ${n};`),{skuId:o,commentDetail:s,properties:e.properties||{},tagStyle:m,originalSkuId:r,trafficSource:a,productPattern:i,total:e.total||0,moduleName:e.moduleName||"",goodRate:e.goodRate||"",reviewLabels:e.reviewLabels||[],goodText:e.goodText||"",skuCommentMVReportData:{origin_sku_id:o,sku_id:o,with_member_tips:s.userIsMember?1:0,with_rebuy_tips:s.userBuyCount?1:0}}}};