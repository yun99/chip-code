var e=getApp();Component({properties:{showSearchList:{type:Boolean,value:!1,observer(e){this.setData({showSearchList:!!e})}},addressList:{type:Array,value:[],observer(e){return e&&e.length>0?this.setData({addressList:e,isShowMask:!1}):!e||e.length<=0?this.setData({addressList:e,isShowMask:this.data.showSearchList||!0}):void 0}},page:{type:String,value:""},topOfFixed:{type:String,value:"100rpx"}},data:{isShowMask:!0},attached(){},ready(){},methods:{onMvReport(t){e.$lxLog.mv("b_youxuan_sp4hfxj6_mv",{index_id:t.currentTarget.dataset.index})},changeAddress(t){const s=parseInt(t.currentTarget.dataset.index,10)||0,{isDispatch:a,name:i,latitude:d,longitude:r,canDelivery:n,deliveryMsg:o,address:h}=this.data.addressList[s];"selfLifting"!==this.data.page||e.$lxLog.mc("b_chaoshi_7letyltb_mc"),e.$lxLog.mc("b_youxuan_sp4hfxj6_mc",{index_id:s}),!n&&o&&o.length?e.page(-1).toast({message:o}):a||"selfLifting"===this.data.page?this.triggerEvent("changeAddress",{longitude:r,latitude:d,address:i,addressLoc:h,_index:s}):e.page(-1).toast({message:"该地址暂未开通业务哦"})}}});