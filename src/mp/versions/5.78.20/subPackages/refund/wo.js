Component({properties:{checked:{type:Boolean,value:!1,observer(e){this.setData({_checked:e})}}},data:{_checked:!1},methods:{click(e){this.setData({_checked:!this.data._checked}),this.triggerEvent("change",{value:this.data._checked})}}});