Component({properties:{riskInfo:{type:String,value:""},riskPopup:{type:Boolean,value:!1},pageId:{type:String}},data:{isPhone:!1},attached(){const e=getApp();this.getSetSystemInfo(),e.$lxLog.mv("b_youxuan_b7c3cw5k_mv",{},{cid:this.data.pageId})},methods:{close(){const e=getApp();this.triggerEvent("close",!1),e.$lxLog.mc("b_youxuan_5fyrwrc0_mc",{},{cid:this.data.pageId})},getSetSystemInfo(){const e=getApp(),{model:t}=e.getModule("systemInfo").getSystemInfo();-1!==t.indexOf("iPhone")&&this.setData({isPhone:!0})}}});