var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,n=e=>t(e,"__esModule",{value:!0}),u=u=>((e,s,n)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let u of o(s))i.call(e,u)||"default"===u||t(e,u,{get:()=>s[u],enumerable:!(n=r(s,u))||n.enumerable});return e})(n(t(null!=u?e(s(u)):{},"default",u&&u.__esModule&&"default"in u?{get:()=>u.default,enumerable:!0}:{value:u,enumerable:!0})),u);((e,r)=>{for(var o in n(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{default:()=>c});var a=u(require("./pe.js")),p=u(require("./kz.js")),c=class extends a.default{constructor(){super(),this.initService=function(){this.service=new p.default(this)},this.handleOptions=function(){const e={groupBuyingType:this.options.type||"",shareGroupBuyingUserId:this.options.uid||"",launchGroupBuyingId:this.options.gid||"",count:this.options.count||"",skuId:this.options.skuId||"",unitRealPrice:this.options.unitRealPrice||"",promotionCount:1,promotionId:this.options.pId||""};this.setData({groupOrderParams:e})},this.data.isShowCouponPackage=!1}};