var e,t,r=Object.create,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,p=(e=require("../../jc.js"),((e,t,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of n(t))l.call(e,s)||"default"===s||o(e,s,{get:()=>t[s],enumerable:!(r=a(t,s))||r.enumerable});return e})((t=o(null!=e?r(s(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),o(t,"__esModule",{value:!0})),e));getApp();(0,p.defineComponent)(new class{constructor(){this.methods={toOperateOrder(e){const{orderId:t,link:r,type:o,phone:a,extractInfo:n}=e.currentTarget.dataset;this.triggerEvent("toOperateOrder",{orderId:t,jumpUrl:r,btnType:o,phone:a,extractInfo:n})},toggleMore(){this.setData({show:!this.data.show})}},this.properties={list:{type:Array,value:[],observer:e=>{this.setData({btns:(e||[]).filter((e=>e.more)).sort(((e,t)=>t.index-e.index))})}},orderId:{type:String,value:""},customPhone:{type:String,value:""}},this.data={show:!1,btns:[]}}});