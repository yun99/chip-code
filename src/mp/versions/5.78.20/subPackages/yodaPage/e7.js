function e(e){return e&&e.__esModule?e:{default:e}}var t=e(require("./d8.js")),a=e(require("./ku.js")),s=new t.default;Component({properties:{},props:{},data:{isShow:!1,isPage:!1,showWebview:!1,url:"",marginTop:100,marginLeft:50,env:"",yodaCanvas:"",yodawebGl:""},ready:function(){var e=this;setTimeout((function(){e.createSelectorQuery().select("#yoda_canvas").fields({node:!0,size:!0}).exec((function(e){e[0]&&a.default.d(e)}))}),0),setTimeout((function(){e.createSelectorQuery().select("#yoda_webgl").fields({node:!0,size:!0}).exec((function(e){e[0]&&a.default.b(e)}))}),0),a.default.a()},methods:{init:function(e){var t=this,a=e.requestCode,s=e.appletsfp,i=e.env,n=e.isPage;switch(this.setData({isShow:!0,isPage:n,requestCode:a,appletsfp:s,env:i}),this.Image||(this.Image=this.selectComponent("#image")),this.Slider||(this.Slider=this.selectComponent("#slider")),this.Inference||(this.Inference=this.selectComponent("#inference"),wx.getSystemInfo({success:function(e){var a=(e.windowWidth-284)/2,s=(e.windowHeight-250)/2;t.setData({marginLeft:a,marginTop:s})}})),this.yodaUrl="https://verify.meituan.com",i){case"staging":this.yodaUrl="https://verify.inf.st.meituan.com";break;case"test":this.yodaUrl="https://verify.inf.test.meituan.com";break;case"dev":this.yodaUrl="https://verify.inf.dev.meituan.com"}getApp().globalData||(getApp().globalData={}),getApp().globalData.yodaUrl=this.yodaUrl;var o=this;n?wx.getStorage({key:"yodaPageData",success:function(e){var t=e.data;t.isPage=!0,o.setStorage({data:t,requestCode:a,appletsfp:s,env:i})},fail:function(e){o.failBack(999013,"缓存异常:"+e.message)}}):this.fetchPageData(a,s,i)},fetchPageData:function(e,t,a){var i=this;s.getPageData(e,2).then((function(s){var n=s.status,o=s.error,r=s.data;0===n?i.failBack(o.code,o.msg):(r.isPage=!1,r.requestCode=e,i.setStorage({data:r,requestCode:e,appletsfp:t,env:a}))})).catch((function(e){i.failBack(999014,"接口异常:"+e.message)}))},setStorage:function(e){var t=this,a=e.data,s=e.requestCode,i=e.appletsfp,n=e.env,o=this;o.setData({isPage:a.isPage,listIndex:a.listIndex||0}),wx.setStorage({key:"yoda_component_data",data:a,success:function(){if(t.setData({type:Number(a.type),requestCode:s,appletsfp:i}),a.type)o.loadComponent({type:Number(a.type),requestCode:s,appletsfp:i,env:n});else{var e=a.riskLevel.split("|"),r=[];e.forEach((function(e){r.push(e.split(","))})),a.type=r[a.defaultIndex||0][0],a.riskGroup=r,a.listIndex=a.defaultIndex||0,o.loadComponent({type:Number(a.type),requestCode:s,appletsfp:i,env:n})}},fail:function(e){o.failBack(999015,"缓存异常"+e.message)}})},loadComponent:function(e){var t=e.type,a=e.requestCode,s=e.appletsfp,i=e.env;switch(t){case 1:this.Image.showImage({requestCode:a,appletsfp:s});break;case 71:this.Slider.showSlider({requestCode:a,appletsfp:s});break;case 130:this.Inference.showInference({requestCode:a,appletsfp:s});break;default:this.toHtml(a,i)}},toHtml:function(e,t){var a=["requestCode="+e,"succCallbackKNBFun=mp_call","env="+t];a=a.join("&");var s=({staging:"https://verify.inf.st.meituan.com",dev:"https://verify.inf.dev.meituan.com",test:"https://verify.inf.test.meituan.com"}[t]||"https://verify.meituan.com")+"/v2/app/general_page?"+a;this.setData({showWebview:!0,url:s})},onPostMessage:function(e){},failBack:function(e,t){var a=this;wx.showToast({icon:"none",title:t,duration:2e3,complete:function(){a.triggerEvent?a.triggerEvent("yodaevent",{status:0,code:e,msg:t},{bubbles:!0,composed:!0}):a.props.yodaevent({status:0,code:e,msg:t})}})},successBack:function(e,t){this.triggerEvent?this.triggerEvent("yodaevent",{status:1,requestCode:e,responseCode:t},{bubbles:!0,composed:!0}):this.props.yodaevent({status:1,requestCode:e,responseCode:t})},yodaCallEvent:function(e){var t=e.detail.status;1===t&&this.verifyOk(e.detail),0===t&&this.verifyFail(e.detail)},verifyOk:function(e){var t=e.nextVerifyMethodId;if(t)this.nextVerify(t);else{var a=e.requestCode,s=e.responseCode;this.successBack(a,s)}},verifyFail:function(e){var t=e.code,a=e.msg,s=e.requestCode;s?this.nextPage(s):this.failBack(t,a)},nextPage:function(e){var t=this.data,a=t.appletsfp,i=t.isPage,n=t.env;i?s.nextPMVerify(e):this.fetchPageData(e,a,n)},nextVerify:function(e){var t=this.data,a=t.requestCode,i=t.appletsfp,n=t.isPage,o=t.listIndex,r=t.env;n?s.nextVerify(o,e):this.loadComponent({type:Number(e),requestCode:a,appletsfp:i,env:r})}}});