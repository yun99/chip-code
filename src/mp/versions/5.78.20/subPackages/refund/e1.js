var t={bottomRightWrapStyle:{customer:"right-customer",tuanzhang:"right-tuanzhang"},bottomLeftWrapStyle:{customer:"left-customer",tuanzhang:"left-tuanzhang"},wrapStyle:{tuanzhang:"wrap-tuanzhang"}};Component({properties:{channelType:{type:String,value:"customer",observer(e){this.setData({bottomRightWrapStyle:t.bottomRightWrapStyle[e],bottomLeftWrapStyle:t.bottomLeftWrapStyle[e],wrapStyle:t.wrapStyle[e]})}},desc:{type:String,value:""},money:{type:String,value:""},couponSubTypeStr:{type:String,value:""},couponTypeStr:{type:String,value:""},title:{type:String,value:""},ruleStr:{type:String,value:""},operation:{type:String,value:""}},data:{},methods:{operationTab(){this.triggerEvent("btnEvent",this.operation)}}});