var e,t,a=Object.create,o=Object.defineProperty,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,u=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(e=require("./g1.js"),((e,t,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of s(t))l.call(e,u)||"default"===u||o(e,u,{get:()=>t[u],enumerable:!(a=r(t,u))||a.enumerable});return e})((t=o(null!=e?a(u(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),o(t,"__esModule",{value:!0})),e)),d=getApp();Component({properties:{show:{type:Boolean,value:!1,observer(e){const{isShowed:t,orderId:a,skuId:o,switchChecked:r,from:s}=this.data;t||(this.setData({isShowed:!0}),d.$lxLog.mv(c.MV[s],{order_id:a,sku_id:o,status:this.getStatus(r)}))}},labelText:{type:String,value:""},switchChecked:{type:Boolean,value:!1,observer(e){e!==this.data.checked&&this.setData({checked:e})}},from:{type:String,value:""},orderId:{type:Number,value:null},skuId:{type:Number,value:null}},data:{checked:!1,isShowed:!1},methods:{onSwitchChange(e){const{value:t}=e.detail,{from:a,orderId:o,skuId:r}=this.data;this.setData({checked:t}),this.triggerEvent("onSwitchChange",{switchVal:t}),d.$lxLog.mc(c.SWITCH_MC[a],{order_id:o,sku_id:r,status:this.getStatus(t)})},getStatus:e=>e?"open":"close"}});