Component({properties:{label:{type:String,value:""},placeholder:{type:String,value:""},type:{type:String,value:""},editType:{type:String,value:""},value:{type:String,value:""},noLine:{type:Boolean,value:!1},maxLength:{type:Number,value:100},required:{type:Boolean,value:!1},pageFrom:{type:String,value:""}},methods:{handleInput(e){const{editType:t}=this.properties,{value:i}=e.detail,r={editType:t,value:i};this.triggerEvent("input",r)},handleClear(){const{editType:e}=this.properties,t={editType:e};this.triggerEvent("clear",t)},handleFocus(){const{editType:e}=this.properties,t={editType:e};this.triggerEvent("focus",t)},handleArrowClick(){const{editType:e}=this.properties,t={editType:e};this.triggerEvent("arrow",t)}}});