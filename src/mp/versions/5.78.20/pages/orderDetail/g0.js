var o=Object.defineProperty;((e,t)=>{for(var s in(e=>{o(e,"__esModule",{value:!0})})(e),t)o(e,s,{get:t[s],enumerable:!0})})(exports,{default:()=>e});var e=class{constructor(){this.hasReportOnLoadCount=!1,this.hasReportOnReadyCount=!1,this.hasReportFMPCount=!1}resetReportSymbol(){this.hasReportOnLoadCount=!1,this.hasReportOnReadyCount=!1,this.hasReportFMPCount=!1}reportOrderDetailOnLoadCount(o,e,t,s,r){var n,i;this.hasReportOnLoadCount||(this.hasReportOnLoadCount=!0,t.reportCustomMetrics(o.ORDER_DETAIL_ON_LOAD_COUNT,e.SUCCESS,{wxAppVersion:s||"default",sdkVersion:(null==(n=null==r?void 0:r.systemInfo)?void 0:n.SDKVersion)||"default",version:(null==(i=null==r?void 0:r.systemInfo)?void 0:i.version)||"default"}))}reportOrderDetailOnReadyCount(o,e,t,s,r){var n,i;this.hasReportOnReadyCount||(this.hasReportOnReadyCount=!0,t.reportCustomMetrics(o.ORDER_DETAIL_ON_READY_COUNT,e.SUCCESS,{wxAppVersion:s||"default",sdkVersion:(null==(n=null==r?void 0:r.systemInfo)?void 0:n.SDKVersion)||"default",version:(null==(i=null==r?void 0:r.systemInfo)?void 0:i.version)||"default"}))}reportOrderDetailFMPCount(o,e,t,s,r){var n,i;this.hasReportFMPCount||(this.hasReportFMPCount=!0,t.reportCustomMetrics(o.ORDER_DETAIL_FMP_COUNT,e.SUCCESS,{wxAppVersion:s||"default",sdkVersion:(null==(n=null==r?void 0:r.systemInfo)?void 0:n.SDKVersion)||"default",version:(null==(i=null==r?void 0:r.systemInfo)?void 0:i.version)||"default"}))}};