var t=Object.create,e=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,s=t=>e(t,"__esModule",{value:!0}),r=r=>((t,o,s)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let r of i(o))n.call(t,r)||"default"===r||e(t,r,{get:()=>o[r],enumerable:!(s=a(o,r))||s.enumerable});return t})(s(e(null!=r?t(o(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);((t,a)=>{for(var i in s(t),a)e(t,i,{get:a[i],enumerable:!0})})(exports,{default:()=>d});var u=r(require("./dt.js")),c=r(require("./kq.js")),l=new u.default,d={data:{buyingInfo:{}},initBuyingSDK({data:t,success:e,fail:a}={}){c.rohr.i(c.rohrConfig.i),this.callBackSuccess=e,this.callBackFail=a,this.setData({buyingInfo:{data:t,show:!0,opacity:.5,verifyDisa:!0,purchaseddeal:[],verifyButText:t.verifyButText||"验证"}}),this.getBuyInfo()},getBuyInfo(){const{buyingInfo:t,buyingInfo:{data:{request_code:e,action:a,type:i,options:o}}}=this.data;l.sendInfo({request_code:e,type:i,action:a}).then((e=>{const{status:a,data:i,error:o}=e;if(1===a){const{items:e,hint:a}=i.prompt.purchaseddeal;for(const t of e)t.couponTitle=t.couponTitle.length>25?t.couponTitle.substring(0,24)+"...":t.couponTitle,t.checked=!1;t.items=e,t.hint=a,t.opacity=.5,t.verifyDisa=!0,this.setData({buyingInfo:t})}else this.handleError(o)})).catch((()=>{l.catchCallback("获取数据异常",0,"请求历史购买信息出异常了",o,this)}))},bindChange(){this.getBuyInfo()},bindVerify(){const{buyingInfo:t,buyingInfo:{purchaseddeal:e,data:{action:a,request_code:i,type:o,options:n,listIndex:s}}}=this.data;this.data.buyingInfo.verifyDisa=!0,this.setData(this.data),tt.showLoading({title:"验证中...",mask:!0}),l.verify({request_code:i,type:o,action:a,options:{purchaseddeal:JSON.stringify(e),listIndex:s}}).then((e=>{tt.hideLoading(),this.data.buyingInfo.verifyDisa=!1,this.setData(this.data);const{status:a,data:o,error:s}=e;if(1===a){if(t.show=!1,l.nextVerify(t.data,o.nextVerifyMethodId))return;this.setData({buyingInfo:t}),l.successCallback(i,o.response_code,n,this)}else this.handleError(s)})).catch((()=>{l.catchCallback("验证异常",0,"请求验证异常了",n,this)}))},bindRadioChange(t){const e=t.detail.value,{buyingInfo:a}=this.data;a.purchaseddeal[0]=e,a.opacity=1,a.verifyDisa=!1;for(const t of a.items)t.dealid===Number(e)?t.checked=!0:t.checked=!1;this.setData({buyingInfo:a})},handleError(t){const{lbsInfo:{data:{options:e}}}=this.data;l.errorCallback(t,e,this.getBuyInfo,this)},changeVerify(){const{buyingInfo:{data:t}}=this.data;l.changeVerify(t)},onTapPage(t){c.rohr.t(t)},onTouchMovePage(t){c.rohr.m(t)},onPullDownRefresh:()=>{tt.stopPullDownRefresh()}};