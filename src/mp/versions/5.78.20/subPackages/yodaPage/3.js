function e(e){return e&&e.__esModule?e:{default:e}}var t=e(require("./b1.js")),a=e(require("./ku.js")),n=void 0;Component({options:{multipleSlots:!1},properties:{title:{type:String,value:"请输入图片中的内容"},placeholder:{type:String,value:"请输入验证码"},verifyText:{type:String,value:"验证"}},props:{title:"请输入图片中的内容",placeholder:"请输入验证码",verifyText:"验证",imageevent:function(e){}},externalClasses:["yoda-class-bg","yoda-class-input","yoda-class-btn"],data:{isShow:"none",imgsrc:"",placeholder:"",value:"",fp:""},methods:{hideImage:function(){this.setData({isShow:"none"})},showImage:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=a.requestCode,s=a.appletsfp;n=new t.default,s&&this.setData({appletsfp:s});var o=this;wx.getStorage({key:"yoda_component_data",success:function(e){var t=e.data;o.initData({requestCode:i,appletsfp:s,data:t})},fail:function(){e.triggerEvent?e.triggerEvent("imageevent",{status:0,code:999901,msg:"获取组件data失败"},{bubbles:!0,composed:!0}):e.props.imageevent({status:0,code:999901,msg:"获取组件data失败"}),e.setData({isShow:"none"})}}),"undefined"!=typeof mmp&&mmp.getRiskControlFingerprint({success:function(t){var a=t.fingerprint;e.setData({fp:a})}})},initData:function(e){var t=e.requestCode,n=e.appletsfp,i=e.data,s=a.default.c(t);this.setData({data:i,imgsrc:getApp().globalData.yodaUrl+"/v2/captcha?request_code="+t+"&action="+i.action+"&captchaHash="+Number(new Date),opacity:.5,plain:!0,isShow:"block",appletsfp:n,d:s||""})},bindImgVerify:function(){n.bindImgVerify(this.data,this)},bingUpdateImg:function(){n.changeImage(this)},bindImgCodeInput:function(e){var t=e.detail.value;n.bindImgCodeInput(t,this)},bindblurCode:function(e){this.bindImgCodeInput(e)},bingimgClose:function(){this.setData({isShow:"none",value:""}),this.triggerEvent?this.triggerEvent("imageevent",{status:0,code:33333,msg:"主动关闭图片验证"},{bubbles:!0,composed:!0}):this.props.imageevent({status:0,code:33333,msg:"主动关闭图片验证"})},changeVerify:function(){n.changeVerify()}}});