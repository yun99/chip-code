Component({properties:{show:{type:Boolean,value:!1},optionData:{type:Array,value:[]},title:{type:String,value:""},cancelBtnText:{type:String,value:"取消"},selectedData:{type:Object,value:{code:-1,desc:""}}},data:{},methods:{handleStatusSelected(e){const{receivingStatusItem:t}=e.currentTarget.dataset;this.triggerEvent("itemselected",{receivingStatusItem:t},{})},handleClose(){this.triggerEvent("close",{},{})}}});