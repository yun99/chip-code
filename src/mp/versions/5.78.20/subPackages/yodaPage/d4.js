Object.defineProperty(exports,"__esModule",{value:!0});var t,a=require("./d8.js"),e=new((t=a)&&t.__esModule?t:{default:t}).default,i={data:{birthdayInfo:{}},initBirthdaySDK:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.data,e=void 0===a?{}:a,i=t.success,n=t.fail;this.callBackSuccess=i,this.callBackFail=n,this.setData({birthdayInfo:{data:e,disabled:!1,show:!0,opacity:.5,isSend:!1,mainTitle:e.mainTitle||"请在下方填写您",subTitle:e.subTitle||"身份证上8位生日号码",inputPlaceholder:e.inputPlaceholder||"例如：19891020",buttonValue:e.buttonValue||"验证"}}),this.getBirthdayInfo()},getBirthdayInfo:function(){var t=this,a=this.data,i=a.birthdayInfo,n=a.birthdayInfo.data,d=n.request_code,o=n.action,r=n.type,s=n.options;i.birthdayInput="";var h=this;e.sendInfo({request_code:d,type:r,action:o}).then((function(a){var e=a;1===e.status?(i.birthdayMessage=e.data.prompt.message,i.isSend=!0,i.opacity=.5):t.handleError(e.error),h.setData({birthdayInfo:i})})).catch((function(){e.catchCallback("获取数据异常",0,"请求生日验证信息出异常了",s,t)}))},bindBirthdaySwitch:function(){var t=this,a=this.data,i=a.birthdayInfo,n=void 0===i?{}:i,d=a.birthdayInfo,o=d.isSend,r=d.birthdayInput,s=d.opacity,h=d.data,c=h.action,l=h.request_code,u=h.type,y=h.options,f=h.listIndex;if(o&&1===s){var b=this.data;b.birthdayInfo.disabled=!0,this.setData(b),wx.showLoading({title:"验证中...",mask:!0}),e.verify({request_code:l,type:u,action:c,options:{birthday:r,listIndex:f}}).then((function(a){(b=t.data).birthdayInfo.disabled=!1,t.setData(b),wx.hideLoading();var i=a.status,d=a.error,o=a.data;if(1===i){if(n.show=!1,e.nextVerify(f,o.nextVerifyMethodId))return;t.setData({birthdayInfo:n}),e.successCallback(o.request_code,o.response_code,y,t)}else t.handleError(d)})).catch((function(){e.catchCallback("验证异常",0,"请求验证异常了",y,t)}))}},handleError:function(t){var a=this.data.birthdayInfo.data.options;e.errorCallback(t,a,this.getBirthdayInfo,this)},bindbirthdayInput:function(t){var a=this.data.birthdayInfo;a.birthdayInput=t.detail.value,a.opacity=8===t.detail.value.length?1:.5,this.setData({birthdayInfo:a})},changeVerify:function(){var t=this.data.birthdayInfo.data;e.changeVerify(t)}};exports.default=i;