Object.defineProperty(exports,"__esModule",{value:!0});var _=function(){function _(_,I){for(var R=0;R<I.length;R++){var E=I[R];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(_,E.key,E)}}return function(I,R,E){return R&&_(I.prototype,R),E&&_(I,E),I}}(),I=function(){function I(){(function(_,I){if(!(_ instanceof I))throw new TypeError("Cannot call a class as a function")})(this,I),this.yodaServer=null}return _(I,[{key:"getServer",value:function(){return getApp().globalData&&getApp().globalData.yodaUrl||"https://verify.meituan.com"}}],[{key:"getYodaServer",value:function(){return this.yodaServer||(this.yodaServer=new I),this.yodaServer}}]),I}();exports.modules={1:"图片",4:"短信",18:"支付密码",40:"语音",69:"历史购买",71:"滑块",79:"地址位置",87:"手机号",89:"生日",100:"姓名",110:"身份证",117:"光线人脸",130:"推理"},exports.embedModule=[1,4,12,15,40,71],exports.source=13,exports.closeStatus={RISK_DEFAULT_ERROR:"121000",RISK_NO_SUCH_ACTION:"121001",RISK_COMMON_PARAMS_LOST:"121002",RISK_NO_SUCH_SCENE:"121003",RISK_USER_NOT_LOAD:"121004",RISK_PARAMS_INVALID_FORMART:"121005",RISK_NO_SUCH_METHOD:"121006",RISK_NOT_VERIFY_BY_ORDER:"121007",RISK_GET_VERIFYINFO_LIMIT:"121009",RISK_VERIFY_ERROR_TIMES_LIMIT:"121010",RISK_USER_NOT_BINDED:"121011",RISK_PARAMS_LOST:"121018",RISK_USER_RESETPWD_CODE_EXPIRE:"121036",RISK_MOBILE_NOT_EXIST:"121040",RISK_GET_VERIFY_INFO_ERROR:"121042",RISK_AUTHORIZE_CODE_FAIL:"121043",RISK_AUTHORIZE_CODE_EXPIRE:"121044",RISK_RISK_LEVEL_NOT_VALID:"121045",RISK_GET_VERIFY_CODE_CNT_REACH_LIMIT:"121046",RISK_LEVEL_DENY:"121051",RISK_VERIFY_REQUEST_TIME_OUT:"121052",RISK_FAKE_REQUEST:"121053",RISK_VOICE_SEND_TIMES_LIMIT_ONE_DAY:"121055",RISK_BOOM_PROOF_DENY:"121056",RISK_VERIFY_INFO_LOSE_EFFICACY:"121057",RISK_SLIDER_VERIFY_FAILED:"121058",RISK_GET_VERIFYINFO_TIMES_LIMIT_ONE_DAY:"121061",RISK_VERIFY_PAYPWD_USE_PAY_ERROR_LIMIT:"121064",RISK_VERIFY_ERROR_TIMES_LIMIT_ONE_DAY:"121065",RISK_KLINGON_OUT_OF_SERVICE:"121066",RISK_GET_VERIFY_INFO_ERROR_RETRY:"121067",RISK_FACE_SERVICE_ANOMALY:"121086",RISK_FACE_NO_REAL_NAME_CERTIFICATION:"121087",RISK_FACE_REQUEST_LIMIT_EXCEEDED:"121088",RISK_FACE_IDENTITY_NOT_MATCHED:"121098",RISK_FACE_POLICE_DATABASE_NOT_FOUND:"121099",RISK_FACE_VERIFY_ERROR_TIME_LIMIT:"121109",RISK_VERIFY_TASK_ERROR_OUT_OF_LIMIT:"121114",RISK_NO_AUTH:"121999"},exports.modulesInfo={1:"imageInfo",4:"smsInfo",18:"passwordInfo",40:"voiceInfo",69:"buyingInfo",71:"sliderInfo",79:"lbsInfo",87:"手机号",89:"birthdayInfo",100:"namesInfo",110:"idcardInfo",117:"faceInfo",130:"inference","-1":"groupInfo"},exports.YodaServer=I;