var e=require("./zi.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.inlineStyle=function(e){if(null==e)return"";if("string"==typeof e)return e;if(null==e)return"";if(u=e,null==u||"object"!==(0,r.default)(u)||!1!==Array.isArray(u))throw new TypeError("style 只能是一个对象或字符串。");var u;return Object.keys(e).map((function(r){return(u=r,u.replace(t,n)).concat(":").concat(e[r]);var u})).join(";")};var r=e(require("./b4.js")),t=/([A-Z])/g;function n(e){return"-"+e.toLowerCase()}