Component({properties:{initialValue:{type:Number,value:1,observer(t){this.setData({count:+t})}},size:{type:String,value:""},canClear:{type:Boolean,value:!1},skuSellOut:{type:Boolean,value:!1},maxNum:{type:Number,value:-1,observer(t){this.setData({maxNum:t})}},displaySpecialText:{type:String,value:"",observer(t){this.setData({displaySpecialText:t||""})}},changeStep:{type:Number,value:1,observer(t){this.setData({changeStep:+t})}},changeUnit:{type:String,value:"",observer(t){this.setData({changeUnit:t})}},minNum:{type:Number,value:1,observer(t){this.setData({minNum:t||1})}}},data:{count:1},ready(){this.setData({count:this.data.initialText?this.data.initialText:+this.data.initialValue})},methods:{onNumberAction(t){const{type:e=""}=t.target.dataset;if(!e)return;let{count:a}=this.data;const{maxNum:i,minNum:s}=this.data;if("add"===e)a+=this.data.changeStep,a>=i&&-1!==i&&(a=i);else{if("subtract"!==e)return;a-=this.data.changeStep,a<=s&&(a=s)}this.triggerEvent("change",{count:parseFloat(a.toFixed(3)),type:e},{bubbles:!0})}}});