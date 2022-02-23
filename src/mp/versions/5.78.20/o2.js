var e,n,i=(e=require("./ua.js"))&&"object"==typeof e&&"default"in e?e:{default:e};function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;arguments.length>n;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){d(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},r=Object.keys(e);for(t=0;r.length>t;t++)0>n.indexOf(i=r[t])&&(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;r.length>t;t++)0>n.indexOf(i=r[t])&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}function c(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=Array(n);n>i;i++)t[i]=e[i];return t}var a="wechat";"undefined"!==("undefined"==typeof tt?"undefined":r(tt))?(n=tt,a="bytedance"):"undefined"!==("undefined"==typeof ks?"undefined":r(ks))?(n=ks,a="kuaishou"):(n=wx,a="wechat");var u="".concat("https://api-unionid.meituan.com","/openid/config"),v="https://data-sdk-uuid-report.dreport.meituan.net",f=n,p=a,h="oneid_".concat(p,"_localid"),_="oneid_".concat(p,"_openid"),g="oneid_".concat(p,"_unionid"),m="oneid_".concat(p,"_anonymousid"),y="".concat("https://api-unionid.meituan.com","/openid/").concat(p,"/register");function b(){this.envs={category:"data_sdk_uuid_report",os:p,session_id:N()},this.events=[]}var O=b.prototype;O.setEnv=function(e){var n,i=(e||{}).device_info,t=void 0===i?{}:i;this.envs=o(o(o({},this.envs),e),{},{device_info:o(o({},null==this||null===(n=this.envs)||void 0===n?void 0:n.device_info),t)})},O.pushEvent=function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e){var t={mark_key:e,mark_value:n,op_name:i,tm:Date.now()};this.events||(this.events=[]),this.events.push(t)}},O.logReport=function(){var e=this.envs||{};if(this.events&&this.events.length){var n=this.events||[];this.events=[],this._post(o(o({},e),{},{events:n}))}},O.errReport=function(e){e&&this._post(o(o({},this.envs||{}),{},{events:[{mark_key:"errlog",mark_value:e,tm:Date.now()}]}))},O._post=function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(P)return P(v,{method:"POST",data:JSON.stringify(n)}).then((function(){})).catch((function(i){var t=n.events;e.events=[].concat(c(void 0===t?[]:t),c(e.events))}))};var S=new b,E=["header","profileUrl"],I=function(e){try{return f.getStorageSync(e)}catch(e){S.errReport("getStorage err: ".concat(JSON.stringify(e)))}},k=function(e,n){try{f.setStorageSync(e,n)}catch(e){S.errReport("setStorage err: ".concat(JSON.stringify(e)))}},w=function(){if(f&&f.getEnvInfoSync){var e=f.getEnvInfoSync().microapp,n=(e=void 0===e?{}:e).appId;if(n)return{appId:n,appVersion:e.mpVersion}}if(f&&f.getAccountInfoSync){var i=f.getAccountInfoSync().miniProgram,t=(i=void 0===i?{}:i).appId;if(t)return{appId:t,appVersion:i.envVersion}}return{}},C=function(){return new Promise((function(e,n){f.login({force:!1,timeout:5e3,success:function(n){n&&e(n)},fail:function(e){n(e)}})}))},P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(i,t){var r=n.header,d=void 0===r?{}:r,c=n.profileUrl,l=s(n,E);f.request(o({url:e,header:d,success:function(e){e&&e.data&&(c&&null!=e&&e.profile&&S.pushEvent(c,JSON.stringify(e.profile)),i(e))},fail:function(e){t(e)}},l))}))},j=function(){if(f&&f.getSystemInfoSync){var e=f.getSystemInfoSync()||{};return{brand:e.brand,model:e.model,system:e.system,platform:e.platform,hostVersion:e.version,hostName:e.appName,mpsdkVersion:e.SDKVersion}}return{}};function x(e){return"function"==typeof e}function A(e){return null==e||""===e}function N(){var e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){for(var e=1*new Date,n=0;e===1*new Date&&200>n;)n++;return e.toString(16)+n.toString(16)},o=+(Math.random()+"").slice(2),r=i.ua||"",d=[],s=0;function c(e,n){var i,t=0;for(i=0;n.length>i;i++)t|=d[i]<<8*i;return e^t}for(e=0;r.length>e;e++)n=r.charCodeAt(e),d.unshift(255&n),4>d.length||(s=c(s,d),d=[]);d.length>0&&(s=c(s,d)),r=s;var l=0;i.sc&&(l=+(l=i.sc.split("*"))[0]*+l[1]);var a=[t(),o,r,l,t()].map((function(e){return e.toString(16)})).join("-");return a}var L=function(e,n,i,t){e().then((function(e){n(e)})).catch((function(o){!function(e,n,i,t,o){if(3<t)i(o);else{var r=(null==o?void 0:o.message)||(null==o?void 0:o.errMsg)||JSON.stringify(o);S.pushEvent("errlog","retry request openid No.".concat(t," time, errmsg: ").concat(r)),setTimeout((function(){L(e,n,i,t)}),500*t)}}(e,n,i,t+1,o)}))},J=["lx"];function R(){this.inited=!1,this.callbackQueue={},this.oneid_localid=null,this.oneid_unionid=null,this.oneid_openid=null,this.oneid_deviceid=null,this.env={},this.lxInstance=null}var V=R.prototype;V.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null!=f&&f.login&&!this.inited){var n=e||{},i=n.lx,t=s(n,J);S.pushEvent("devlog","first init"),this._setLxInstance(i),this._setEnvIds(t),this.inited=!0,this._setLxCb(),this._onAppHide()}},V.setEnv=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&!A(e[n])&&(this.env[n]=e[n])},V.getOpenidAndUnionid=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.inited?this._getMPIds(e):S.errReport("need to init first!")},V.getLocalid=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.inited){var n=this._getLocalid();if(n){var i={oneid_localid:n,errmsg:""};this._handleCb(e,i)}else{var t={errmsg:"oneid_localid is empty"};this._handleCb(e,t,!1)}}},V._getMPIds=function(e){var n,i=this;if(null!=this&&null!==(n=this.env)&&void 0!==n&&n.appId)return this.oneid_openid?(this._handleCb(e,{oneid_openid:this.oneid_openid,oneid_unionid:this.oneid_unionid,oneid_localid:this.oneid_localid,oneid_deviceid:this.oneid_deviceid,errmsg:""}),S.pushEvent("devlog","get openid from memory"),void S.logReport()):void this._getStorageMPIds(e,{success:function(){i._handleCb(e,{oneid_openid:i.oneid_openid,oneid_unionid:i.oneid_unionid,oneid_localid:i.oneid_localid,oneid_deviceid:i.oneid_deviceid,errmsg:""}),S.pushEvent("devlog","get ".concat(i.oneid_openid?"openid":"anonymousOpenid"," from localstorage")),S.logReport()},fail:function(){i._getServerMPIds(e)}});this._handleCb(e,{errmsg:"there is no appId!"},!1)},V._getStorageMPIds=function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t="storage",o=i.success,r=i.fail,d=I("oneid_mp"),s=d||{},c=s.oneid_unionid,l=s.oneid_openid,a=s.oneid_deviceid;l?(this.oneid_unionid=c,this.oneid_openid=l,this.oneid_deviceid=a,o&&o.apply(this)):a?(this._subscribeCb(t,i),this._loginFetching||(this._loginFetching=!0,C().then((function(e){null!=e&&e.isLogin?n._emitCb(t,null,!1):(n.oneid_deviceid=a,n._emitCb(t,null,!0)),n._loginFetching=!1})).catch((function(){n._emitCb(t,null,!1),n._loginFetching=!1})))):r&&r.apply(this)},V._getServerMPIds=function(e){var n,i=this,t="server";this._subscribeCb(t,e),this._serverFetching||(S.pushEvent("devlog","get openid from server"),this._serverFetching=!0,function(e){try{S.pushEvent("devlog","request config"),P(u,{data:{localId:e},profileUrl:"openid/config"})}catch(e){}}(this.oneid_localid),(n=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S.pushEvent("devlog","GLOBAL.login"),C().then((function(n){S.pushEvent("code",JSON.stringify(n)),S.pushEvent("devlog","GLOBAL.login",1);var i=n||{},t=i.code,r=i.anonymousCode;return S.pushEvent("devlog","request openid"),P(y,{method:"POST",profileUrl:"openid/register",data:o(o({},e),{},{code:t,anonymousCode:r}),timeout:5e3}).then((function(e){S.pushEvent("devlog","request openid",1);var n=e||{},i=n.data,t=n.statusCode;if(0===(null==i?void 0:i.code))return null==i?void 0:i.data;throw Error((null==i?void 0:i.message)||"request ".concat(y," fail: ").concat(JSON.stringify(t)))}))})).catch((function(e){throw e}))}(o(o({},i.env),{},{localId:i.oneid_localid}))},new Promise((function(e,i){L(n,e,i,0)}))).then((function(e){var n=e||{},o=n.openid,r=n.unionid,d=n.anonymousOpenid;i.oneid_unionid=r,i.oneid_openid=o,i.oneid_deviceid=d,S.pushEvent("oneid_unionid",r),S.pushEvent("oneid_openid",o),S.pushEvent("oneid_deviceid",d),S.pushEvent("devlog","get openid from server",1),k("oneid_mp",{oneid_localid:i.oneid_localid,oneid_openid:i.oneid_openid,oneid_unionid:i.oneid_unionid,oneid_deviceid:i.oneid_deviceid}),i._emitCb(t,{oneid_openid:i.oneid_openid,oneid_unionid:i.oneid_unionid,oneid_localid:i.oneid_localid,oneid_deviceid:i.oneid_deviceid,errmsg:""},!0),S.logReport(),i._serverFetching=!1})).catch((function(e){var n=(null==e?void 0:e.message)||(null==e?void 0:e.errMsg)||JSON.stringify(e);S.pushEvent("errlog","get openid from server failed: "+n),i._emitCb(t,{errmsg:n},!1),S.logReport(),i._serverFetching=!1})))},V._getLocalid=function(){if(!this.oneid_localid){var e=I("oneid_mp");null!=e&&e.oneid_localid?this.oneid_localid=e.oneid_localid:(S.pushEvent("devlog","gen localid"),this.oneid_localid=function(){var e=N(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return k("oneid_mp",{oneid_localid:e}),e}(),S.pushEvent("devlog","gen localid",1))}return S.setEnv({device_info:{oneid_localid:this.oneid_localid}}),this.oneid_localid},V._setEnvIds=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setEnv(n);var i=this.env||{},t=i.lxCuid,o=i.yxUnionId,r=i.appId,d=i.sdkVersion;if(!r){var s=w();this.setEnv(s)}if(t||this.setEnv({lxCuid:I("_lx_sdk_lxcuid")}),!o){var c=I("_mall_uuid");c&&this.setEnv({yxUnionId:JSON.stringify(c)})}d||this.setEnv({sdkVersion:"0.0.1"}),null!=this&&null!==(e=this.env)&&void 0!==e&&e.appId||S.errReport("appId not set!");var l=j(),a=(null==this?void 0:this.env)||{},u=a.appId,v=a.appName,f=a.appVersion,p=a.sdkVersion;S.setEnv({app:u,app_name:v,app_version:f,sdk_version:p,device_info:l})},V._subscribeCb=function(e,n){e&&this._validFunc(n)&&(this.callbackQueue||(this.callbackQueue={}),this.callbackQueue[e]||(this.callbackQueue[e]=[]),this.callbackQueue[e].push(n))},V._emitCb=function(e,n,i){if(e)for(;this.callbackQueue&&this.callbackQueue[e]&&null!==(t=this.callbackQueue[e])&&void 0!==t&&t.length;){var t,o=this.callbackQueue[e].shift();this._handleCb(o,n,i)}},V._validFunc=function(e){var n=e||{},i=n.fail,t=n.complete;return!!(x(n.success)||x(i)||x(t))},V._handleCb=function(e,n){var i=2>=arguments.length||void 0===arguments[2]||arguments[2],t=e||{},o=t.success,r=t.complete,d=t.fail;i&&x(o)&&o(n),!i&&x(d)&&d(n),x(r)&&r(n)},V._setLxCb=function(){var e,n=this,i=null==this||null===(e=this.lxInstance)||void 0===e?void 0:e.set;this.getLocalid({success:function(e){var t;null!=e&&e.oneid_localid&&(i&&i("oneid_mini_program",JSON.stringify((d(t={},h,e.oneid_localid),d(t,"oneid_platform",p),d(t,"oneid_backfill","1"),t))),n.getOpenidAndUnionid({success:function(e){if(e){var n,t=e||{},o=t.oneid_openid,r=t.oneid_unionid,s=t.oneid_deviceid,c=(d(n={},h,t.oneid_localid),d(n,"oneid_platform",p),d(n,"oneid_backfill","1"),n);s&&(c[m]=s,c.oneid_backfill="0"),o&&(c[_]=o),r&&(c[g]=r),i&&i("oneid_mini_program",JSON.stringify(c))}}}))}})},V._setLxInstance=function(e){this.lxInstance=e&&e.set?e:i.default},V._onAppHide=function(){f&&f.onAppHide&&f.onAppHide((function(){S.pushEvent("devlog","app hide"),S.logReport()}))};var D=new R;module.exports=D;