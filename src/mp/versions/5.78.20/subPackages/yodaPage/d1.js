Object.defineProperty(exports,"__esModule",{value:!0});var e,a=require("./d8.js"),t=(e=a)&&e.__esModule?e:{default:e},s=require("./d7.js"),i=new t.default,o={data:{groupInfo:{}},initGroupSDK:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.data,t=e.success,s=e.fail;this.callBackSuccess=t,this.callBackFail=s;var i={};Object.keys(a.riskNameGroup).forEach((function(e){i[e]=JSON.parse(a.riskNameGroup[e])})),this.setData({groupInfo:{data:a,show:!0,modules:i}})},groupHandle:function(e){var a=this.data.groupInfo.data;a.listIndex=e.target.dataset.index;var t=a.riskGroup[a.listIndex||0][0];a.riskGroup[a.listIndex].forEach((function(e){s.modules[e]||(t=-2)})),-2===t?this.toPageVerify({requestCode:a.request_code,env:a.env,listIndex:a.listIndex}):i.nextVerify(a.listIndex,t)},toPageVerify:function(e){var a=e.requestCode,t=e.env,s=e.listIndex;getApp().globalData.yoda_public_call=i.callWebViewAndComponent.bind(this),wx.redirectTo({url:"/modules/index/public?requestCode="+a+"&env="+t+"&listIndex="+s})}};exports.default=o;