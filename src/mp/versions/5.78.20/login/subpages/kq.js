var _=Object.create,e=Object.defineProperty,I=Object.getOwnPropertyDescriptor,R=Object.getOwnPropertyNames,E=Object.getPrototypeOf,t=Object.prototype.hasOwnProperty,r=_=>e(_,"__esModule",{value:!0});((_,I)=>{for(var R in r(_),I)e(_,R,{get:I[R],enumerable:!0})})(exports,{YodaServer:()=>a,closeStatus:()=>K,embedModule:()=>u,feVersion:()=>l,modules:()=>n,modulesInfo:()=>s,rohr:()=>o.default,rohrConfig:()=>O,source:()=>T});var S,o=(S=require("./bu.js"),((_,E,r)=>{if(E&&"object"==typeof E||"function"==typeof E)for(let S of R(E))t.call(_,S)||"default"===S||e(_,S,{get:()=>E[S],enumerable:!(r=I(E,S))||r.enumerable});return _})(r(e(null!=S?_(E(S)):{},"default",S&&S.__esModule&&"default"in S?{get:()=>S.default,enumerable:!0}:{value:S,enumerable:!0})),S)),O=(getApp(),{i:100019}),a=class{constructor(){this.yodaServer=null}static getYodaServer(){return this.yodaServer||(this.yodaServer=new a),this.yodaServer}getServer(){return getApp().globalData||(getApp().globalData={yodaUrl:"https://verify-test.meituan.com"}),getApp().globalData.yodaUrl||"https://verify-test.meituan.com"}},l={slider:"2.0.4",sms:"2.0.4",image:"2.0.4",voice:"2.0.4",lbs:"2.0.4",names:"2.0.4",birthday:"2.0.4",buying:"2.0.4"},n={1:"图片",4:"短信",18:"支付密码",40:"语音",69:"历史购买",71:"滑块",79:"地址位置",87:"手机号",89:"生日",100:"姓名",117:"光线人脸",90:"支付编号"},s={1:"imageInfo",4:"smsInfo",18:"支付密码",40:"voiceInfo",69:"buyingInfo",71:"sliderInfo",79:"lbsInfo",87:"手机号",89:"birthdayInfo",100:"namesInfo",117:"faceInfo",90:"支付编号","-1":"groupInfo"},u=[1,4,12,15,40,71],T=13,K={RISK_DEFAULT_ERROR:"121000",RISK_NO_SUCH_ACTION:"121001",RISK_COMMON_PARAMS_LOST:"121002",RISK_NO_SUCH_SCENE:"121003",RISK_USER_NOT_LOAD:"121004",RISK_PARAMS_INVALID_FORMART:"121005",RISK_NO_SUCH_METHOD:"121006",RISK_NOT_VERIFY_BY_ORDER:"121007",RISK_GET_VERIFYINFO_LIMIT:"121009",RISK_VERIFY_ERROR_TIMES_LIMIT:"121010",RISK_USER_NOT_BINDED:"121011",RISK_PARAMS_LOST:"121018",RISK_USER_RESETPWD_CODE_EXPIRE:"121036",RISK_MOBILE_NOT_EXIST:"121040",RISK_GET_VERIFY_INFO_ERROR:"121042",RISK_AUTHORIZE_CODE_FAIL:"121043",RISK_AUTHORIZE_CODE_EXPIRE:"121044",RISK_RISK_LEVEL_NOT_VALID:"121045",RISK_GET_VERIFY_CODE_CNT_REACH_LIMIT:"121046",RISK_LEVEL_DENY:"121051",RISK_VERIFY_REQUEST_TIME_OUT:"121052",RISK_FAKE_REQUEST:"121053",RISK_VOICE_SEND_TIMES_LIMIT_ONE_DAY:"121055",RISK_BOOM_PROOF_DENY:"121056",RISK_VERIFY_INFO_LOSE_EFFICACY:"121057",RISK_SLIDER_VERIFY_FAILED:"121058",RISK_GET_VERIFYINFO_TIMES_LIMIT_ONE_DAY:"121061",RISK_VERIFY_PAYPWD_USE_PAY_ERROR_LIMIT:"121064",RISK_VERIFY_ERROR_TIMES_LIMIT_ONE_DAY:"121065",RISK_KLINGON_OUT_OF_SERVICE:"121066",RISK_GET_VERIFY_INFO_ERROR_RETRY:"121067",RISK_NO_AUTH:"121999"};