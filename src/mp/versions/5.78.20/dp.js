var e=Object.create,t=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,r=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,a=e=>t(e,"__esModule",{value:!0}),o=o=>((e,r,a)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let o of i(r))n.call(e,o)||"default"===o||t(e,o,{get:()=>r[o],enumerable:!(a=s(r,o))||a.enumerable});return e})(a(t(null!=o?e(r(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);((e,s)=>{for(var i in a(e),s)t(e,i,{get:s[i],enumerable:!0})})(exports,{default:()=>d});var l=o(require("./dg.js")),p=o(require("./j9.js")),u=o(require("./j0.js")),d=class{constructor(e){this.cfgManager=e,this.speed={},this.firstContentfullPaint={},this.moduleFirstRenderTime={},this.pageSource={}}pushSpeed(e,t,s){let{speed:i}=this;i[e]||(i[e]={},i[e].customspeed=[]);try{(0,l.getEnv)().then((r=>{if(r){let{project:n,unionId:a="",version:o,wxAppVersion:l}=this.cfgManager.config;o=o||{};let p=o.wxAppVersion||o.appVersion||l||"Unknown",d={project:n,unionId:a,speed:"0|0|0",timestamp:Date.now()},h={pageurl:e||r.pageUrl||"",os:r.os||"",container:r.container||"",network:r.network||""};h[`${u.channel}AppVersion`]=p,h[`${u.channel}Version`]=r.wxVersion||"",h[`${u.channel}LibVersion`]=r.wxLibVersion||"",i[e]||(i[e]={},i[e].customspeed=[]),Object.assign(i[e],h,d),i[e].customspeed[t]=s}}))}catch(e){}}start(e,t){this[`start-${e}-${t}`]=Date.now()}end(e,t){let s=this[`start-${e}-${t}`],{"start-app-0":i}=this;i&&(delete this["start-app-0"],this.pushSpeed("app",0,Date.now()-i)),s&&this.pushSpeed(e,t,Date.now()-s)}addSource(e="default"){try{if(this._refresh)return;let t=(0,l.getPageUrl)();this.pageSource[t]||(this.pageSource[t]={}),this.pageSource[t].source=e}catch(e){}}addPoint(e={},t){if(!this._refresh&&void 0!==e.position){t||(t=(0,l.getPageUrl)()||"");try{if("app"===t)this.pushSpeed("app",e.position,Date.now()-this._appStart);else{let s;if(void 0!==e.duration)s=e;else{let t=this._start||Date.now();if(void 0!==t){let i=e.timeStamp||+Date.now();s={position:e.position,duration:i-t}}}s&&this.pushSpeed(t,s.position,s.duration)}}catch(e){}}}createFirstContentfulPaint(e=["default"],t=1){try{if(this._refresh)return;let s=(0,l.getPageUrl)();this.firstContentfullPaint[s]||(this.firstContentfullPaint[s]={}),this.firstContentfullPaint[s][t]=e}catch(e){}}addFirstContentfulPaint(e="default",t){if(this._refresh)return;let s,i=(0,l.getPageUrl)();try{this.firstContentfullPaint[i]||(this.firstContentfullPaint[i]={}),s=t||+new Date-this._start,this.moduleFirstRenderTime[i]||(this.moduleFirstRenderTime[i]={}),this.moduleFirstRenderTime[i][e]||(this.moduleFirstRenderTime[i][e]=s)}catch(e){}}_getPageFirstPaint(e,t){let s;try{this.firstContentfullPaint[e]&&(s=this.firstContentfullPaint[e][t]);let i=0;return this.moduleFirstRenderTime[e]?(s.map((t=>{let s=this.moduleFirstRenderTime[e][t]||0;i=Math.max(s,i)})),i):i}catch(e){return 0}}appLaunch(e,t){this._appStart=e,this._enterPage=t}appReady(e){e===this._enterPage&&this.addPoint({position:0},"app")}pageLoad(){this._start=Date.now(),this._refresh=!1}pageReady(){this.addPoint({position:0},(0,l.getPageUrl)())}pullRefresh(){this._refresh=!0}report(){const e=this.cfgManager;let{speed:t,firstContentfullPaint:s,moduleFirstRenderTime:i}=this,r=e.getApiPath("page");try{Object.keys(t).map((n=>{let a=Object.assign({},t[n]);if(a.customspeed||(a.customspeed=[]),s[n]){let e=this.firstContentfullPaint[n];try{for(let t in e)a.customspeed[t]=this._getPageFirstPaint(n,t)||""}catch(e){}}a.customspeed=a.customspeed.join("|");let o=(0,p.stringify)(r);o=(0,p.stringify)(o,a),t[n]&&delete t[n],i[n]&&delete i[n],s[n]&&delete s[n],Math.random()>e.get("page").sample||(0,p.requestQueue)({url:o,method:"GET",header:{"Content-Type":"application/x-www-form-urlencoded"},success(){}})}))}catch(e){}}};