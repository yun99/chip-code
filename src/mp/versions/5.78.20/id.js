var e=Object.create,t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,n=Object.getPrototypeOf,r=Object.prototype.hasOwnProperty,d=e=>t(e,"__esModule",{value:!0}),s=s=>((e,n,d)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let s of o(n))r.call(e,s)||"default"===s||t(e,s,{get:()=>n[s],enumerable:!(d=i(n,s))||d.enumerable});return e})(d(t(null!=s?e(n(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s),c=(e,t,i)=>new Promise(((o,n)=>{var r=e=>{try{s(i.next(e))}catch(e){n(e)}},d=e=>{try{s(i.throw(e))}catch(e){n(e)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,d);s((i=i.apply(e,t)).next())}));((e,i)=>{for(var o in d(e),i)t(e,o,{get:i[o],enumerable:!0})})(exports,{AdMonitoringReport:()=>y});var a=s(require("./ob.js")),l=s(require("./p0.js")),u=s(require("./ui.js")),p=s(require("./aq.js")),y=new class{constructor(){this.click_ts=Date.now(),this.clickidMap={}}handleReport(e){this.init(e)}init(e){const{query:t={}}=e||{},{clickid:i,lch:o,ad_id:n,creativeid:r,creativetype:d,requestid:s}=t;this.clickid="string"==typeof i?i:"",this.lch=o,this.ad_id=n,this.creativeid=r,this.creativetype=d,this.requestid=s,o&&this.clickid&&!this.clickidMap[this.clickid]&&(a.log.info("AdMonitoring dealReport",e),this.clickidMap[this.clickid]=this.clickid,this.dealReport())}dealReport(){return c(this,null,(function*(){try{if(yield getApp().$loginPromise,yield this.getUnionId(),this.oneid_bytedance_anonymousid||(a.log.warn("AdMonitoring not oneid_bytedance_anonymousid, retry"),yield(0,u.wxLogin)({slient:!0,bind:!1}),yield this.getUnionId()),!this.oneid_bytedance_anonymousid)return a.log.error("AdMonitoring dealReport not found oneid_bytedance_anonymousid",this.oneid_bytedance_anonymousid,this.oneid_bytedance_openid,this.clickid),void(0,p.reportCustomMetrics)(p.AdMonitoringMetrices.NOT_FOUND_ANONYMOUSID);this.requestAd()}catch(e){a.log.error()("AdMonitoring dealReport function Error",e),(0,p.reportCustomMetrics)(p.AdMonitoringMetrices.GET_ID_ERROR)}}))}requestAd(){const e={click_id:this.clickid,click_ts:this.click_ts,oneid_bytedance_anonymousid:this.oneid_bytedance_anonymousid,oneid_bytedance_openid:this.oneid_bytedance_openid,lch:this.lch,source:"youxuan_bytedance",ad_id:this.ad_id,creative_id:this.creativeid,creative_type:this.creativetype,request_id:this.requestid};a.log.info("AdMonitoring requestAd",e),getApp().$service.reportWechatAdInfo(e).then((e=>{var t;0===(null==(t=null==e?void 0:e.data)?void 0:t.ret)?(a.log.info("AdMonitoring requestAd success",e),(0,p.reportCustomMetrics)(p.AdMonitoringMetrices.REPORT_MONITORING_SUCCESS)):(a.log.warn("AdMonitoring requestAd warn",e),(0,p.reportCustomMetrics)(p.AdMonitoringMetrices.REPORT_MONITORING_CODE_ABNORMAL))})).catch((e=>{a.log.error("AdMonitoring requestAd error",e),(0,p.reportCustomMetrics)(p.AdMonitoringMetrices.REPORT_MONITORING_FAIL)}))}getUnionId(){return c(this,null,(function*(){const e=yield(0,l.getOpenidAndUnionid)();return this.oneid_bytedance_anonymousid=e.oneid_deviceid,this.oneid_bytedance_openid=e.oneid_openid,e}))}};