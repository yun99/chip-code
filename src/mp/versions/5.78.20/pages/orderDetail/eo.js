var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,i=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,l=o=>{return((e,o,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let p of n(o))s.call(e,p)||"default"===p||t(e,p,{get:()=>o[p],enumerable:!(a=r(o,p))||a.enumerable});return e})((p=t(null!=o?e(a(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0}),t(p,"__esModule",{value:!0})),o);var p},u=l(require("../../jc.js")),c=l(require("../../ob.js")),y=l(require("./gc.js"));getApp();(0,u.defineComponent)(new class{constructor(){this.methods={onTapBtn(e){const{secondButton:t}=this.data.skuBtn,{index:r,disabled:n}=e.currentTarget.dataset;n||(this.triggerEvent("btnTap",{index:r}),this.close())},onContactGroupHeader(e){const{type:t}=e.currentTarget.dataset;this.triggerEvent("contactGroupHeader",{item:{btnTipsType:t},isSkuOperatePop:!0}),this.close()},close(e=null){this.triggerEvent("close",{manual:!!e})},mapSecondBtn(e){const t={icon:5===e.type?y.Images.order_price_protection:y.Images.order_apply_refund};if(2===e.type&&e.buttonTipsList&&e.buttonTipsList.length>0){let r={};try{r=JSON.parse(e.extractInfo||"{}")}catch(t){c.log.info(`<OrderDetail skuOperatePop> sku二级按钮extractInfo非法, ${e.extractInfo}`,t)}t.subTitle=r.title||"",t.contactBtns=e.buttonTipsList.map((({btnTipsType:e})=>({type:e,icon:1===e?y.Images.order_phone_gray:y.Images.order_IM_gray}))),t.disabled=!0}return((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&i(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&i(e,r,t[r]);return e})({name:e.name,type:e.type},t)}},this.properties={show:{type:Boolean,value:!1},skuBtn:{type:Object,value:{},observer(e){this.setData({secondButton:(e.secondButton||[]).map(this.mapSecondBtn)})}}},this.data={secondButton:[]}}});