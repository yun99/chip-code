var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,n=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,c=a=>{return((e,a,n)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let s of o(a))l.call(e,s)||"default"===s||t(e,s,{get:()=>a[s],enumerable:!(n=r(a,s))||n.enumerable});return e})((s=t(null!=a?e(n(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0}),t(s,"__esModule",{value:!0})),a);var s},u=(e,t,r)=>new Promise(((o,a)=>{var n=e=>{try{s(r.next(e))}catch(e){a(e)}},l=e=>{try{s(r.throw(e))}catch(e){a(e)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,l);s((r=r.apply(e,t)).next())})),p=c(require("../../sn.js")),d=c(require("./p9.js")),y=getApp();Component(new class{constructor(){this.methods={show(e=!0){this.data.show!==e&&(e||this.init(),this.setData({show:e}))},init(){var e,t;this.setData({orderPayId:null,type:null,title:"以下订单需要一起操作",subtitle:"",confirmText:"确认",cancelText:"取消",show:!1,orderList:null,isIpx:(null==(t=null==(e=y.$systemInfo)?void 0:e.systemInfo)?void 0:t.isIpx)||!1}),this.callbackMap={}},toShow(e){return u(this,null,(function*(){const t=e,{onConfirm:r,onCancel:o}=t,n=((e,t)=>{var r={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&s.call(e,o)&&(r[o]=e[o]);return r})(t,["onConfirm","onCancel"]);this.callbackMap={onConfirm:r,onCancel:o},y.page().loading(!0);try{const t="pay"===n.type?d.getOrderGroupPayShow:d.getOrderGroupCancelShow,r=yield t({orderId:e.orderId});y.page().loading(!1);let o=!1,c=null;const u=((null==r?void 0:r.orderList)||[]).map(((e,t)=>{const r=(0,p.formatMoney)(e.cashPay);return o=e.orderGroupOpFlag,c=e.orderPayId,{info:`订单${t+1}：共${e.totalItemQuantity||0}件商品 实付：${r}`,skus:e.picList}}));this.setData(((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&i(e,r,t[r]);return e})({orderPayId:c,orderList:u},n)),("pay"===n.type&&o||"cancel"===n.type)&&this.show()}catch(e){y.page().loading(!1),this._onError(e)}}))},_onConfirm(){return u(this,null,(function*(){try{if(this.callbackMap.onConfirm){const{orderPayId:e}=this.data;yield this.callbackMap.onConfirm({orderPayId:e})}this.show(!1)}catch(e){this._onError(e)}}))},_onCancel(){return u(this,null,(function*(){try{this.callbackMap.onCancel&&(yield this.callbackMap.onCancel()),this.show(!1)}catch(e){this._onError(e)}}))},_onError(e,t="发生错误"){y.page()&&y.page().toast(e.message||e||t)},stopPropagation(){}}}attached(){this.init()}});