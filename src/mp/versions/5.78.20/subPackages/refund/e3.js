var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,i=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,o=o=>{return((e,i,o)=>{if(i&&"object"==typeof i||"function"==typeof i)for(let s of a(i))l.call(e,s)||"default"===s||t(e,s,{get:()=>i[s],enumerable:!(o=r(i,s))||o.enumerable});return e})((s=t(null!=o?e(i(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0}),t(s,"__esModule",{value:!0})),o);var s},s=(e,r,a)=>(((e,r,a)=>{r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a})(e,"symbol"!=typeof r?r+"":r,a),a),n=(o(require("../../ob.js")),o(require("../../sn.js")));getApp();Component(new class{constructor(){s(this,"methods",{confirm(){this.triggerEvent("confirm",{value:this.data.price})},close(){this.triggerEvent("close")},onSliderChange(e){const{detail:{value:t}}=e,{maxPrice:r}=this.data,a=(0,n.formatMoney)(r*t,2).replace("￥","");this.setData({price:a,sliderTipText:100!=+t?`退款${t}%`:"全额退款"})}}),this.properties={show:{type:Boolean,observer(e){e&&(this.setData({price:this.data.totalPrice}),this.onSliderChange({detail:{value:Math.round(100*this.data.totalPrice/this.data.maxPrice)}}))}},maxPrice:Number,totalPrice:Number},this.data={sliderLabels:["0%","50%","100%"],sliderTipText:"全额退款",price:0}}});