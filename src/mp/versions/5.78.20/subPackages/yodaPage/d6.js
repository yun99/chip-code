function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(require("./d8.js")),t=e(require("./k6.js")),s=new a.default,n={data:{},initFaceSDK:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.data,t=e.success,s=e.fail,n=this;this.callBackSuccess=t,this.callBackFail=s;var o={data:a,show:!0,isYodaCamera:!1,isWxCamera:!0,step:1,faceAction:[],faceCameraIndex:-1,s3:{},countDown:3,faceUploadList:[],faceUploadPromise:[],responseData:{},provision:"<<人脸识别服务通用规则>>",isCheck:!1,isShowProvision:!1,isShowProvisionTip:!1,resultButton:"继续",canResultButton:!0,retryList:[121079,121084,121008,121100,121101,121102,130003],s3plusFaceUrl:"https://s3plus.meituan.net/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/face/"};n.setData({faceInfo:o}),"undefined"!=typeof mmp&&mmp.getRiskControlFingerprint({success:function(e){var a=e.fingerprint;o.fp=a,n.setData({faceInfo:o})}}),this.setCamareOpen(!0)},setCamareOpen:function(e){var a=this,t=this.data.faceInfo;wx.getSetting({success:function(s){s.authSetting["scope.camera"]?(t.isYodaCamera=!0,t.isWxCamera=!1,t.ctx=wx.createCameraContext(),a.setData({faceInfo:t}),e||a.getFaceInfo()):wx.authorize({scope:"scope.camera",fail:function(){wx.showModal({title:"提示",content:"若点击不授权，将无法完成人脸验证",cancelText:"不授权",cancelColor:"#999",confirmText:"授权",confirmColor:"#f94218",success:function(e){e.confirm?wx.openSetting():(t.step=4,t.resultButton="我知道了",t.responseData={status:0,error:{message:"获取摄像头权限失败",code:122001}},a.setData({faceInfo:t}))}})}})}})},cameraSuccess:function(){var e=this.data.faceInfo;e.isWxCamera=!0,this.setData({faceInfo:e})},readGuideHandler:function(e){var a=this.data.faceInfo;e.detail.value.length>0?a.isCheck=!0:a.isCheck=!1,this.setData({faceInfo:a})},showProvision:function(){var e=this.data.faceInfo;e.isShowProvision=!0,this.setData({faceInfo:e})},hideProvision:function(){var e=this.data.faceInfo;e.isShowProvision=!1,this.setData({faceInfo:e})},onImageSuccess:function(e){},onJumpProvision:function(){wx.navigateTo({url:"/modules/index/public"})},getFaceInfo:function(){var e=this,a=this.data,n=a.faceInfo,o=a.faceInfo,i=o.data,c=i.request_code,r=i.action,f=i.type,u=i.options,l=i.needReadLegalProvision,d=o.retryList,p=o.isYodaCamera;if(!o.isCheck&&l)return n.isShowProvisionTip=!0,setTimeout((function(){n.isShowProvisionTip=!1,e.setData({faceInfo:n})}),3e3),void this.setData({faceInfo:n});var h=this;if(p){wx.showLoading({title:"信息获取...",mask:!0});var m={request_code:c,type:f,action:r};l&&(m.options={readLegalProvision:1}),s.sendInfo(m).then((function(e){wx.hideLoading();var a=e.status,s=e.data,o=e.error;1===a?(n.canResultButton=!0,n.faceAction=s.prompt.faceAction,n.faceAction.unshift({color:"(0,0,0)"}),n.s3=JSON.parse(t.default.Otiak(s.prompt.s3,c)),n.step=2,h.setData({faceInfo:n}),h.faceCameraTimeOut()):(n.step=4,n.canResultButton=!0,n.resultButton=-1!==d.indexOf(o.code)?"再试一次":"我知道了",n.responseData={status:0,error:o},h.setData({faceInfo:n}))})).catch((function(){s.catchCallback("获取数据异常",0,"请求光线人脸信息出错了",u,e)}))}else h.setCamareOpen()},faceCameraTimeOut:function(){var e=this,a=this.data.faceInfo,t=setInterval((function(){var s=a.countDown;a.countDown=s-1,e.setData({faceInfo:a}),a.countDown<=0&&clearInterval(t)}),700);setTimeout((function(){wx.getScreenBrightness({success:function(a){wx.setScreenBrightness({value:1}),e.faceCameraStart(a.value)}})}),3e3)},faceCameraStart:function(e){var a=this,t=this.data.faceInfo,s=t.faceCameraIndex;t.faceCameraIndex=s+1,this.setData({faceInfo:t}),t.faceCameraIndex<t.faceAction.length?setTimeout((function(){a.faceTackCamera(e)}),700):(wx.setScreenBrightness({value:e}),this.faceLoading())},faceTackCamera:function(e){var a=this,s=a.data,n=s.faceInfo,o=s.faceInfo.data.request_code;n.ctx.takePhoto({quality:"high",success:function(s){var n=wx.getFileSystemManager().readFileSync(s.tempImagePath,"base64"),i=t.default.Kaito(n,o);a.faceCameraUpload(i,e)},fail:function(){n.step=1,n.faceCameraIndex=-1,n.faceCameraNumber=4,a.setData({faceInfo:n})}})},faceCameraUpload:function(e,a){var t=this,s=this.data,n=s.faceInfo,o=s.faceInfo,i=o.s3,c=o.faceUploadList,r=this.getFileName();if(r){var f={AWSAccessKeyId:i.accessid,policy:i.policy,signature:i.signature,key:i.dir+r},u=wx.getFileSystemManager(),l=wx.env.USER_DATA_PATH+"/tmp_base64src.facePicture";u.writeFile({filePath:l,data:e,encoding:"utf8",success:function(){c.push(r),n.faceUploadPromise.push(t.uploadPromise(i.url,l,f)),t.faceCameraStart(a),t.setData({faceInfo:n})},fail:function(){n.step=4,n.resultButton="我知道了",n.responseData={status:0,error:{message:"文件操作失败",code:99999}},t.setData({faceInfo:n})}})}},uploadPromise:function(e,a,t){return new Promise((function(s,n){wx.uploadFile({url:e,filePath:a,name:"file",header:{"Content-Type":"multipart/form-data"},formData:t,success:function(e){e.statusCode<300?s():n()},fail:function(){n()}})}))},faceLoading:function(){var e=this,a=this.data.faceInfo,t=this;a.step=3,this.setData({faceInfo:a}),setTimeout((function(){3===a.step&&(a.step=4,a.resultButton="我知道了",a.responseData={status:0,error:{message:"未知异常",code:99999}},t.setData({faceInfo:a}))}),3e4),Promise.all(a.faceUploadPromise).then((function(){e.bindVerify()})).catch((function(){a.step=4,a.resultButton="再试一次",a.responseData={status:0,error:{message:"数据上传失败",code:130003}},a.faceUploadPromise.splice(0),t.setData({faceInfo:a})}))},bindVerify:function(){var e=this,a=this,n=this.data,o=n.faceInfo,i=n.faceInfo,c=i.faceUploadList,r=i.fp,f=i.data,u=f.action,l=f.request_code,d=f.type,p=f.listIndex,h=i.retryList;o.step=4;var m=t.default.Kaito(JSON.stringify(c),l);s.verify({request_code:l,type:d,action:u,options:{face:m,fingerprint:r,listIndex:p}}).then((function(a){var t=a.status,n=a.error,i=a.data;if(o.responseData=a,1!==t)o.resultButton=-1!==h.indexOf(n.code)?"再试一次":"我知道了";else{if(s.nextVerify(p,i.nextVerifyMethodId))return;o.resultButton="继续"}o.faceUploadPromise.splice(0),e.setData({faceInfo:o})})).catch((function(){o.responseData={status:0,error:{message:"验证请求异常",code:99999}},a.setData({faceInfo:o})}))},getFileName:function(){var e=this.data.faceInfo,a=e.faceAction,t=e.faceCameraIndex,s=Date.parse(new Date)/1e3;if(a[t]&&a[t].color){var n=a[t].color.slice(1,-1).split(",");return"v_1_hw_1024_768_cv_"+n[0]+"_"+n[1]+"_"+n[2]+"_ts_"+s+"_tp_jpg"}return null},resultButtonHandler:function(){var e=this.data,a=e.faceInfo,t=e.faceInfo,n=t.responseData,o=t.data,i=o.options,c=o.listIndex,r=n;if(1===n.status){if(a.show=!1,s.nextVerify(c,r.nextVerifyMethodId))return;this.setData({faceInfo:a}),s.successCallback(r.request_code,r.data.response_code,i,this)}else this.handleError(r.error)},changeVerify:function(){var e=this.data.faceInfo.data;s.changeVerify(e)},handleError:function(e){var a=this.data,t=a.faceInfo,n=a.faceInfo,o=n.data.options,i=n.retryList;n.canResultButton&&(t.canResultButton=!1,-1!==i.indexOf(e.code)&&(t.faceAction=[],t.faceCameraIndex=-1,t.faceUploadList=[],t.countDown=3),this.setData({faceInfo:t}),s.errorCallback(e,o,this.getFaceInfo,this,"face"))},onPullDownRefresh:function(){wx.stopPullDownRefresh()}};exports.default=n;