var o=Object.defineProperty;((t,e)=>{for(var s in(t=>{o(t,"__esModule",{value:!0})})(t),e)o(t,s,{get:e[s],enumerable:!0})})(exports,{default:()=>t});var t=class{constructor(){this.hasReportOnLoadCount=!1,this.hasReportOnReadyCount=!1,this.hasReportFMPCount=!1}resetReportSymbol(){this.hasReportOnLoadCount=!1,this.hasReportOnReadyCount=!1,this.hasReportFMPCount=!1}reportSubmitOrderOnLoadCount(o,t,e,s,r){var n,i;this.hasReportOnLoadCount||(this.hasReportOnLoadCount=!0,e.reportCustomMetrics(o.SUBMIT_ORDER_ON_LOAD_COUNT,t.SUCCESS,{wxAppVersion:s||"default",sdkVersion:(null==(n=null==r?void 0:r.systemInfo)?void 0:n.SDKVersion)||"default",version:(null==(i=null==r?void 0:r.systemInfo)?void 0:i.version)||"default"}))}reportSubmitOrderOnReadyCount(o,t,e,s,r){var n,i;this.hasReportOnReadyCount||(this.hasReportOnReadyCount=!0,e.reportCustomMetrics(o.SUBMIT_ORDER_ON_READY_COUNT,t.SUCCESS,{wxAppVersion:s||"default",sdkVersion:(null==(n=null==r?void 0:r.systemInfo)?void 0:n.SDKVersion)||"default",version:(null==(i=null==r?void 0:r.systemInfo)?void 0:i.version)||"default"}))}reportSubmitOrderFMPCount(o,t,e,s,r){var n,i;this.hasReportFMPCount||(this.hasReportFMPCount=!0,e.reportCustomMetrics(o.SUBMIT_ORDER_FMP_COUNT,t.SUCCESS,{wxAppVersion:s||"default",sdkVersion:(null==(n=null==r?void 0:r.systemInfo)?void 0:n.SDKVersion)||"default",version:(null==(i=null==r?void 0:r.systemInfo)?void 0:i.version)||"default"}))}};