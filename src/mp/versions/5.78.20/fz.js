var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,r=Object.prototype.hasOwnProperty,a=e=>t(e,"__esModule",{value:!0}),u=u=>((e,s,a)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let u of o(s))r.call(e,u)||"default"===u||t(e,u,{get:()=>s[u],enumerable:!(a=n(s,u))||a.enumerable});return e})(a(t(null!=u?e(s(u)):{},"default",u&&u.__esModule&&"default"in u?{get:()=>u.default,enumerable:!0}:{value:u,enumerable:!0})),u);((e,n)=>{for(var o in a(e),n)t(e,o,{get:n[o],enumerable:!0})})(exports,{default:()=>p});var i=u(require("./kw.js")),l=u(require("./ob.js")),p=class extends i.default{constructor(e,t){super(e,t),this.catModule=t.getModule("cat"),this.isConnected=!0,this.networkType="4g",wx.onNetworkStatusChange&&(this.netWorkStatusChangeBindThis=this.netWorkStatusChange.bind(this),wx.onNetworkStatusChange(this.netWorkStatusChangeBindThis))}static register(e){const t=new p("networkStatus",e);return e.addModule(t),t}setNetworkType(e,t=!0){this.isConnected=void 0!==t?t:!("none"===e),this.networkType=e}getNetworkType(){const e=this;wx.getNetworkType({success:t=>{e.networkType=t.networkType,e.isConnected="none"!==e.networkType},fail:e=>{}})}netWorkStatusChange({isConnected:e,networkType:t}){this.event.emit(this.event.CONTANTS.NETWORK_CHANGE,{isConnected:e,networkType:t}),l.log.info("netWorkStatusChange",e,t),this.setNetworkType(t,e),this.catModule.setNetworkType(t);const{app:n}=this,o=n.page()||null;o&&o.toast&&(e||o.toast({message:"网络异常~",duration:3e3}))}destory(){}};