var e=Object.create,t=Object.defineProperty,o=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,n=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,a=e=>t(e,"__esModule",{value:!0});((e,o)=>{for(var r in a(e),o)t(e,r,{get:o[r],enumerable:!0})})(exports,{AdMonitoringMetrices:()=>l,reportCustomMetrics:()=>u});var s,_=(s=require("./is.js"),((e,n,a)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let s of r(n))i.call(e,s)||"default"===s||t(e,s,{get:()=>n[s],enumerable:!(a=o(n,s))||a.enumerable});return e})(a(t(null!=s?e(n(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s)),u=e=>{var t,o;const{SDKVersion:r,version:n,system:i}=getApp().$systemInfo.systemInfo||{};getApp().$cat.reportCustomMetrics(_.YXReportTarget.AD_MONITORING_REPORT,_.ReportValue.SUCCESS,{target:e,sdkVersion:r||"default",version:n||"default",systemType:0===(null==i?void 0:i.toLowerCase().indexOf("ios"))?"ios":"android",path:(null==(o=null==(t=getApp())?void 0:t.page())?void 0:o.route)||""})},l={NOT_FOUND_ANONYMOUSID:"ad_monitoring_not_found_anonymousid",GET_ID_ERROR:"ad_monitoring_get_id_error",REPORT_MONITORING_SUCCESS:"ad_monitoring_report_monitoring_success",REPORT_MONITORING_CODE_ABNORMAL:"ad_monitoring_report_code_abnormal",REPORT_MONITORING_FAIL:"ad_monitoring_report_monitoring_fail"};