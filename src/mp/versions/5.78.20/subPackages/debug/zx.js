Object.defineProperty(exports,"__esModule",{value:!0}),exports.authrize=exports.state=exports.config=exports.AUTH_TYPE=void 0;var e=require("./bf.js");exports.AUTH_TYPE=e.AUTH_TYPE,exports.config={dirname:"",pageConfig:{tipText:"请完成微信授权以继续使用",btn:{style:"background-image: -webkit-linear-gradient(left top, #FFD000, #FFBD00); color: #222;border:none",text:"授权微信用户信息"},image:{src:"https://p0.meituan.net/travelcube/d8ebb44535845a44e183929eaba1cb0724896.png",mode:"aspectFit"}}},exports.state={cache:null};exports.authrize=function(e,t){return new Promise((function(o,r){exports.AUTH_TYPE[e]?!1===t.withCredentials&&exports.state.cache?o(exports.state.cache):(exports.state.option=t,exports.state.resolve=function(e){wx.navigateBack(),setTimeout((function(){exports.state.cache=e,o(e)}),200)},exports.state.reject=r,wx.navigateTo({url:exports.config.dirname+"/page/index?type="+e})):r("API "+e+" is not supported")}))};