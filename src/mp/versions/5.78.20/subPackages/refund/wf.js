Component({properties:{disabled:Boolean,useButtonSlot:Boolean,activeColor:String,inactiveColor:String,tipText:String,max:{type:Number,value:100},min:{type:Number,value:0},disabledMax:{type:Number,value:100},disabledMin:{type:Number,value:0},step:{type:Number,value:1},value:{type:Number,value:0,observer(t){t!==this.value&&this.updateValue(t)}}},created(){const{min:t,max:e,disabledMax:a,disabledMin:i}=this.data;if(t>i||e<a)throw Error("disabledMin 与 disabledMax 必须在 min 和 max 之间！");this.updateValue(this.data.value)},methods:{getRect(t,e){return new Promise((a=>wx.createSelectorQuery().in(this)[e?"selectAll":"select"](t).boundingClientRect((function(t){e&&Array.isArray(t)&&t.length&&a(t),!e&&t&&a(t)})).exec()))},resetTouchStatus(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},touchStart(t){this.resetTouchStatus();const e=t.touches[0];this.startX=e.clientX,this.startY=e.clientY},touchMove(t){const e=t.touches[0];var a,i;this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||(a=this.offsetX,i=this.offsetY,a>i&&a>10?"horizontal":i>a&&i>10?"vertical":"")},onTouchStart(t){this.data.disabled||(this.touchStart(t),this.startValue=this.format(this.value),this.dragStatus="start")},onTouchMove(t){this.data.disabled||("start"===this.dragStatus&&this.triggerEvent("drag-start"),this.touchMove(t),this.dragStatus="draging",this.getRect(".slider").then((t=>{const e=this.deltaX/t.width*100;this.newValue=this.startValue+e,this.updateValue(this.newValue,!1,!0)})))},onTouchEnd(){this.data.disabled||"draging"===this.dragStatus&&(this.updateValue(this.newValue,!0),this.triggerEvent("drag-end"))},onClick(t){if(this.data.disabled)return;const{min:e}=this.data;this.getRect(".slider").then((a=>{const i=(t.detail.x-a.left)/a.width*this.getRange()+e;this.updateValue(i,!0)}))},updateValue(t,e,a){t=this.format(t);const{min:i}=this.data,s=100*(t-i)/this.getRange()+"%";this.value=t,this.setData({barStyle:`\n                width: ${s};\n                ${a?"transition: none;":""}\n          `}),a&&this.triggerEvent("drag",{value:t}),e&&this.triggerEvent("change",{value:t}),(a||e)&&this.setData({value:t})},getRange(){const{max:t,min:e}=this.data;return t-e},format(t){const{step:e,disabledMax:a,disabledMin:i}=this.data;return Math.round(Math.max(i,Math.min(t,a))/e)*e}}});