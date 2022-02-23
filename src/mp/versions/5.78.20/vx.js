var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,i=e=>t(e,"__esModule",{value:!0});((e,r)=>{for(var o in i(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{ProfileRecorder:()=>p});var a,c=(a=require("./up.js"),((e,s,i)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let a of o(s))n.call(e,a)||"default"===a||t(e,a,{get:()=>s[a],enumerable:!(i=r(s,a))||i.enumerable});return e})(i(t(null!=a?e(s(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a)),p=class{constructor(e){this.startTime=Date.now(),this.type=e||"http_response_profile"}report(e,t){const r=Date.now();["fetchStart","connectStart","connectEnd","SSLconnectionStart","SSLconnectionEnd","responseStart","responseEnd"].forEach((r=>this.metricsReport(r,t[r],this.startTime,e))),this.metricsReport("dns",t.domainLookUpEnd,t.domainLookUpStart,e),this.metricsReport("request",t.requestEnd,t.requestStart,e),this.metricsReport("startFetchTime",t.fetchStart,this.startTime,e),this.metricsReport("endCompleteTime",r,t.responseEnd,e),this.metricsReport("rtt",t.rtt,0,e),this.metricsReport("completeTime",r,this.startTime,e)}metricsReport(e,t,r,o){var s;try{null==(s=c.metrics)||s.addPoint({pageName:o,key:this.type,step:e,duration:t-r})}catch(e){}}};