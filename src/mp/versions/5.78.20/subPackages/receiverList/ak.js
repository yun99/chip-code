var e=Object.create,r=Object.defineProperty,t=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,u=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,a=e=>r(e,"__esModule",{value:!0}),o=(e,r,t)=>new Promise(((l,u)=>{var n=e=>{try{o(t.next(e))}catch(e){u(e)}},a=e=>{try{o(t.throw(e))}catch(e){u(e)}},o=e=>e.done?l(e.value):Promise.resolve(e.value).then(n,a);o((t=t.apply(e,r)).next())}));((e,t)=>{for(var l in a(e),t)r(e,l,{get:t[l],enumerable:!0})})(exports,{deliveryAddressListOperate:()=>y,editPicker:()=>d,getDeliveryAddressList:()=>p,getReceiverList:()=>c});var i,s=(i=require("../../u1.js"),((e,u,a)=>{if(u&&"object"==typeof u||"function"==typeof u)for(let o of l(u))n.call(e,o)||"default"===o||r(e,o,{get:()=>u[o],enumerable:!(a=t(u,o))||a.enumerable});return e})(a(r(null!=i?e(u(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i));function c(){return o(this,null,(function*(){return(0,s.get)({url:"/malluser/pickermanager/listpicker"})}))}function p(e){return o(this,null,(function*(){return(0,s.get)({url:"/malluser/delivery/address/list",params:e})}))}var d=e=>o(void 0,null,(function*(){const{opType:r,userPicker:t}=e;return(0,s.post)({url:`/malluser/pickermanager/editpicker?opType=${r}`,body:t})})),y=e=>o(void 0,null,(function*(){return(0,s.post)({url:"/malluser/delivery/address/operate",body:e})}));