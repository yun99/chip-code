var e=Object.create,t=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,c=e=>t(e,"__esModule",{value:!0}),r=r=>((e,o,c)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let r of s(o))n.call(e,r)||"default"===r||t(e,r,{get:()=>o[r],enumerable:!(c=a(o,r))||c.enumerable});return e})(c(t(null!=r?e(o(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);((e,a)=>{for(var s in c(e),a)t(e,s,{get:a[s],enumerable:!0})})(exports,{default:()=>d});var i=r(require("./dt.js")),f=r(require("./ll.js")),u=r(require("./kq.js")),l=new i.default,d={data:{},initFaceSDK({data:e,success:t,fail:a}={}){u.rohr.i(u.rohrConfig.i),this.callBackSuccess=t,this.callBackFail=a,this.setData({faceInfo:{data:e,show:!0,isYodaCamera:!1,isWxCamera:!0,step:1,faceAction:[],faceCameraIndex:-1,s3:{},countDown:3,faceUploadList:[],faceUploadPromise:[],responseData:{},resultButton:"继续",canResultButton:!0,retryList:[121079,121084,121008,121100,121101,121102]}}),this.setCamareOpen(!0)},setCamareOpen(e){const t=this,{faceInfo:a}=this.data;tt.getSetting({success(s){s.authSetting["scope.camera"]?(a.isYodaCamera=!0,a.isWxCamera=!1,a.ctx=tt.createCameraContext(),t.setData({faceInfo:a}),e||t.getFaceInfo()):tt.authorize({scope:"scope.camera",fail(){tt.showModal({title:"提示",content:"若点击不授权，将无法完成人脸验证",cancelText:"不授权",cancelColor:"#999",confirmText:"授权",confirmColor:"#f94218",success(e){e.confirm?tt.openSetting():(a.step=4,a.resultButton="我知道了",a.responseData={status:0,error:{message:"获取摄像头权限失败",code:99999}},t.setData({faceInfo:a}))}})}})}})},cameraSuccess(){const{faceInfo:e}=this.data;e.isWxCamera=!0,this.setData({faceInfo:e})},getFaceInfo(){const{faceInfo:e,faceInfo:{data:{request_code:t,action:a,type:s},retryList:o,isWxCamera:n,isYodaCamera:c}}=this.data,r=this;c?(tt.showLoading({title:"信息获取...",mask:!0}),l.sendInfo({request_code:t,type:s,action:a}).then((a=>{tt.hideLoading();const{status:s,data:n,error:c}=a;1===s?(e.canResultButton=!0,e.faceAction=n.prompt.faceAction,e.s3=JSON.parse(f.default.Otiak(n.prompt.s3,t)),e.step=2,r.setData({faceInfo:e}),r.faceCameraTimeOut()):(e.step=4,e.canResultButton=!0,e.resultButton=-1!==o.indexOf(c.code)?"再试一次":"我知道了",e.responseData={status:0,error:c},r.setData({faceInfo:e}))}))):r.setCamareOpen()},faceCameraTimeOut(){const e=this,{faceInfo:t}=this.data,a=setInterval((()=>{t.countDown=--t.countDown,e.setData({faceInfo:t}),t.countDown<=0&&clearInterval(a)}),700);setTimeout((()=>{tt.getScreenBrightness({success:function(t){tt.setScreenBrightness({value:1}),e.faceCameraStart(t.value)}})}),3e3)},faceCameraStart(e){const{faceInfo:t}=this.data;t.faceCameraIndex=++t.faceCameraIndex,this.setData({faceInfo:t}),t.faceCameraIndex<t.faceAction.length?setTimeout((()=>{this.faceTackCamera(e)}),700):(tt.setScreenBrightness({value:e}),this.faceLoading())},faceTackCamera(e){const{faceInfo:t,faceInfo:{s3:a,data:{request_code:s}}}=this.data;t.ctx.takePhoto({quality:"high",success:t=>{const a=tt.getFileSystemManager().readFileSync(t.tempImagePath,"base64"),o=f.default.Kaito(a,s);this.faceCameraUpload(o,e)},fail:()=>{t.step=1,t.faceCameraIndex=-1,t.faceCameraNumber=4,this.setData({faceInfo:t})}})},faceCameraUpload(e,t){const a=this,{faceInfo:s,faceInfo:{s3:o,faceUploadList:n}}=this.data,c=this.getFileName(),r={AWSAccessKeyId:o.accessid,policy:o.policy,signature:o.signature,key:o.dir+c},i=tt.getFileSystemManager(),f=`${tt.env.USER_DATA_PATH}/tmp_base64src.facePicture`;i.writeFile({filePath:f,data:e,encoding:"binary",success(){n.push(c),s.faceUploadPromise.push(a.uploadPromise(o.url,f,r)),a.faceCameraStart(t),a.setData({faceInfo:s})},fail(){s.step=4,s.resultButton="我知道了",s.responseData={status:0,error:{message:"文件操作失败",code:99999}},a.setData({faceInfo:s})}})},uploadPromise:(e,t,a)=>new Promise(((s,o)=>{tt.uploadFile({url:e,filePath:t,name:"file",header:{"Content-Type":"multipart/form-data"},formData:a,success:s,fail:o})})),faceLoading(){const{faceInfo:e}=this.data;e.step=3,this.setData({faceInfo:e}),setTimeout((()=>{const{faceInfo:e}=this.data;3===e.step&&(e.step=4,e.resultButton="我知道了",e.responseData={status:0,error:{message:"未知异常",code:99999}},that.setData({faceInfo:e}))}),3e4),Promise.all(e.faceUploadPromise).then((()=>{this.bindVerify()})).catch((()=>{e.step=4,e.resultButton="我知道了",e.responseData={status:0,error:{message:"图像采集失败",code:99999}},that.setData({faceInfo:e})}))},bindVerify(){const{faceInfo:e,faceInfo:{faceUploadList:t,data:{action:a,request_code:s,type:o,options:n,listIndex:c},retryList:r}}=this.data;e.step=4,l.verify({request_code:s,type:o,action:a,options:{face:f.default.Kaito(JSON.stringify(t),s),listIndex:c}}).then((t=>{const{status:a,data:s,error:o}=t;e.responseData=t,e.resultButton=1!==a?-1!==r.indexOf(o.code)?"再试一次":"我知道了":"继续",this.setData({faceInfo:e})})).catch((()=>{e.responseData={status:0,error:{message:"请求验证异常了",code:99999}},that.setData({faceInfo:e})}))},getFileName(){const{faceInfo:{faceAction:e,faceCameraIndex:t}}=this.data,a=Date.parse(new Date)/1e3,s=e[t].color.slice(1,-1).split(",");return`v_1_hw_1024_768_cv_${s[0]}_${s[1]}_${s[2]}_ts_${a}_tp_jpg`},resultButtonHandler(){const{faceInfo:e,faceInfo:{responseData:t,data:{request_code:a,options:s}}}=this.data,o=t;if(1===t.status){if(e.show=!1,l.nextVerify(e.data,o.nextVerifyMethodId))return;this.setData({faceInfo:e}),l.successCallback(a,o.response_code,s,this)}else this.handleError(o.error)},changeVerify(){const{faceInfo:{data:e}}=this.data;l.changeVerify(e)},handleError(e){const{faceInfo:t,faceInfo:{data:{options:a},retryList:s,canResultButton:o}}=this.data;o&&(t.canResultButton=!1,-1!==s.indexOf(e.code)&&(t.faceAction=[],t.faceCameraIndex=-1,t.faceUploadList=[],t.countDown=3),this.setData({faceInfo:t}),l.errorCallback(e,a,this.getFaceInfo,this,"face"))},onTapPage(e){u.rohr.t(e)},onTouchMovePage(e){u.rohr.m(e)},onPullDownRefresh:()=>{tt.stopPullDownRefresh()}};