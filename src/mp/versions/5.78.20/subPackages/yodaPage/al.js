Object.defineProperty(exports,"__esModule",{value:!0}),exports.yodaUrl=void 0;var e,t=require("./d8.js"),a=new((e=t)&&e.__esModule?e:{default:e}).default,o=exports.yodaUrl=function(e){var t="https://verify.meituan.com";switch(e){case"staging":t="https://verify.inf.st.meituan.com";break;case"test":t="https://verify.inf.test.meituan.com";break;case"dev":t="https://verify.inf.dev.meituan.com"}return getApp().globalData||(getApp().globalData={}),getApp().globalData.yodaUrl=t,t};exports.default=function(e){var t=e.requestCode,s=e.success,i=e.fail,r=e.style,n=e.options,l=e.env,p=e.appletsfp;o(l),a.getPageData(t,1).then((function(e){var t=e.status,a=e.data;0===t&&wx.showToast({icon:"error",title:"系统状态异常",complete:function(){"function"==typeof i&&i(),"string"==typeof i&&wx.navigateTo({url:i})}});var o=a.riskLevel.split("|"),u=[];if(o.forEach((function(e){u.push(e.split(","))})),"GROUP"===a.category&&(a.riskNameGroup=JSON.parse(a.riskLevelInfo)),a.type=u[a.defaultIndex||0][0],a.riskGroup=u,a.listIndex=0,a.success="function"==typeof s?"FUNCTION":s,a.fail="function"==typeof i?"FUNCTION":i,getApp().globalData.success=s,getApp().globalData.fail=i,a.style=r||"",a.options=n,a.env=l,a.appletsfp=p||"",wx.setStorage({key:"yodaPageData",data:a}),!([u[0][0]]&&n&&n.embed))if(n&&n.redirect)wx.redirectTo({url:n.yodaRoute||"./../../modules/index/index"});else{var c=n?n.yodaRoute:"";wx.navigateTo({url:c||"./../../modules/index/index"})}})).catch((function(){wx.showToast({title:"初始化验证失败",icon:"error"})}))};