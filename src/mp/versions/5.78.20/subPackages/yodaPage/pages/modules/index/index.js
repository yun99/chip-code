function a(a){return a&&a.__esModule?a:{default:a}}var e=a(require("../../../dv.js")),t=a(require("../../../dn.js")),s=a(require("../../../db.js")),o=a(require("../../../d2.js")),n=a(require("../../../d1.js")),u=a(require("../../../dm.js")),i=a(require("../../../d4.js")),d=a(require("../../../d5.js")),c=a(require("../../../d3.js")),l=a(require("../../../d6.js")),r=a(require("../../../d8.js")),p=require("../../../d7.js"),g=require("../../../al.js"),f=new r.default;Page({data:{show:0,bgcolor:"#FFFFFF"},onReady:function(){},onLoad:function(a){this.selectComponent&&(this.Yoda=this.selectComponent("#yoda"));var e=this,t=a.requestCode,s=a.success,o=a.fail,n=a.style,u=a.options,i=a.env,d=a.appletsfp;t?(getApp().globalData&&getApp().globalData.yodaUrl||(0,g.yodaUrl)(i),f.getPageData(t,1).then((function(a){var t=a.status,c=a.data;if(0===t){var l=a.error;wx.showToast({icon:"error",title:"系统状态异常",complete:function(){if("function"==typeof o&&o(),"string"==typeof o&&wx.navigateTo({url:o}),void 0===o&&"function"==typeof getApp().globalData.fail&&getApp().globalData.fail({status:0,code:l.code,msg:l.message}),void 0===o&&"string"==typeof getApp().globalData.fail){var a=getApp().globalData.fail,e="status=0&code="+l.code+"&msg="+l.message;e=a.includes("?")?"&"+e:"?"+e,wx.navigateTo({url:a+e})}}})}else{var r=c.riskLevel.split("|"),g=[];r.forEach((function(a){g.push(a.split(","))})),1===g.length?c.type=g[0][0]:g.length>1&&(c.type=-1),c.listIndex=c.listIndex||0,"GROUP"!==c.category&&"MULTIPLE"!==c.category||(c.riskNameGroup=JSON.parse(c.riskLevelInfo),g[0].forEach((function(a){p.modules[a]||(c.type=-2)}))),c.riskGroup=g,e.setData({show:Number(c.type)}),wx.getStorage({key:"yodaPageData",success:function(a){var t=a.data;c.options=t.options,c.style=t.style,c.env=t.env,c.appletsfp=t.appletsfp,c.success=t.success,c.fail=t.fail,e.setPageStore(c,getApp().globalData.success,getApp().globalData.fail)},fail:function(){c.options=u,c.style=n||"",c.env=i,c.appletsfp=d||"",c.success="function"==typeof s?"FUNCTION":s,c.fail="function"==typeof o?"FUNCTION":o,getApp().globalData.success=s,getApp().globalData.fail=o,e.setPageStore(c,s,o)}})}})).catch((function(){wx.showToast({title:"pageData请求异常",icon:"none",duration:3e3})}))):wx.getStorage({key:"yodaPageData",success:function(a){var t=a.data;t.listIndex=t.listIndex||0,"GROUP"!==t.category&&"MULTIPLE"!==t.category||t.riskGroup[0].forEach((function(a){p.modules[a]||(t.type=-2)})),e.setData({show:Number(t.type)}),e.setPageStore(t,getApp().globalData.success,getApp().globalData.fail)},fail:function(){wx.showToast({icon:"none",title:"获取验证缓存信息异常",duration:3e3})}})},setPageStore:function(a,e,t){var s=this,o={data:a,success:e,fail:t,style:a.style};wx.setStorage({key:"yodaPageData",data:a,success:function(){s.gotoYodaPage(Number(a.type),o)},fail:function(){wx.showToast({icon:"none",title:"设置缓存信息异常",duration:3e3})}})},gotoYodaPage:function(a,r){var p=this,g=this,y=r.data.request_code,m=r.data.env,b=r.data.appletsfp||"";switch(a){case-1:Object.keys(n.default).forEach((function(a){"data"===a?Object.assign(g.data,n.default.data):g[a]=n.default[a]})),g.initGroupSDK(r);break;case 4:Object.keys(e.default).forEach((function(a){"data"===a?Object.assign(g.data,e.default.data):g[a]=e.default[a]})),g.initSmsSDK(r);break;case 18:Object.keys(c.default).forEach((function(a){"data"===a?Object.assign(g.data,c.default.data):g[a]=c.default[a]})),g.initPasswordSDK(r);break;case 40:Object.keys(t.default).forEach((function(a){"data"===a?Object.assign(g.data,t.default.data):g[a]=t.default[a]})),g.initVoiceSDK(r);break;case 69:Object.keys(o.default).forEach((function(a){"data"===a?Object.assign(g.data,o.default.data):g[a]=o.default[a]})),g.initBuyingSDK(r);break;case 79:Object.keys(s.default).forEach((function(a){"data"===a?Object.assign(g.data,s.default.data):g[a]=s.default[a]})),g.initLbsSDK(r);break;case 89:Object.keys(i.default).forEach((function(a){"data"===a?Object.assign(g.data,i.default.data):g[a]=i.default[a]})),g.initBirthdaySDK(r);break;case 100:Object.keys(u.default).forEach((function(a){"data"===a?Object.assign(g.data,u.default.data):g[a]=u.default[a]})),g.initNamesSDK(r);break;case 110:Object.keys(d.default).forEach((function(a){"data"===a?Object.assign(g.data,d.default.data):g[a]=d.default[a]})),g.initIdcardSDK(r);break;case 117:Object.keys(l.default).forEach((function(a){"data"===a?Object.assign(g.data,l.default.data):g[a]=l.default[a]})),g.initFaceSDK(r);break;case 1:case 71:this.Yoda.init({requestCode:y,env:m,appletsfp:b,isPage:!0}),g.yodaEvent=function(a){var e=a.detail,t=e.responseCode,s=e.code,o=e.msg,n=a.detail.requestCode;f.callWebViewAndComponent({requestCode:n,responseCode:t,code:s,msg:o})};break;case 130:this.setData({bgcolor:"#efefef"}),g.Yoda.init({requestCode:y,env:m,appletsfp:b,isPage:!0}),g.yodaEvent=function(a){var e=a.detail,t=e.responseCode,s=e.code,o=e.msg,n=a.detail.requestCode;f.callWebViewAndComponent({requestCode:n,responseCode:t,code:s,msg:o}),p.setData({bgcolor:"#FFFFFF"})};break;default:getApp().globalData.yoda_public_call=f.callWebViewAndComponent,wx.redirectTo({url:"/modules/index/public?requestCode="+y+"&env="+r.data.env+"&listIndex="+r.data.listIndex})}},bindNamesInput:function(){},bindbirthdayInput:function(){},bindMobileInput:function(){},bindSmsCodeInput:function(){},bindVoiceCodeInput:function(){}});