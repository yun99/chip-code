var e=require("./2b.js"),i=require("./2m.js"),s=require("./2n.js"),t={getGradeBySoc(){const s=i.getDeviceModel(),t=i.getDeviceSystem();let a=-1;return a=this.isIOS(t)?this.classifyAppleDevice(s):e.getDeviceGrade(s),a},getGradeByBL(){const e=i.getDeviceModel(),s=i.getBL(),t=i.getDeviceSystem();let a=-1;return a=this.isIOS(t)?this.classifyAppleDevice(e):this.classifyBL(s),a},classifyBL:e=>e<1?-1:e>=1&&e<15?0:e>=15&&e<=20?1:e>20?2:-1,classifyAppleDevice(e){const i=this.isIPhone(e),t=this.isIPad(e);if(!i&&!t)return-1;const a=s.getDeviceGen(e);return-1===a?-1:i?this.classifyIPhoneDevice(a):t?this.classifyIPadDevice(a):-1},classifyIPhoneDevice:e=>e>0&&e<9?0:9===e?1:e>9?2:-1,classifyIPadDevice:e=>e>0&&e<6?0:6===e?1:e>6?2:-1,isIPhone:(e="")=>-1!==e.indexOf("iPhone"),isIPad:(e="")=>-1!==e.indexOf("iPad"),isIOS:(e="")=>0===e.toLowerCase().indexOf("ios")};module.exports=t;