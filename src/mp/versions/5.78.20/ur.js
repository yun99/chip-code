var e=Object.create,t=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,n=Object.getPrototypeOf,r=Object.prototype.hasOwnProperty,s=s=>{return((e,n,s)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let o of i(n))r.call(e,o)||"default"===o||t(e,o,{get:()=>n[o],enumerable:!(s=a(n,o))||s.enumerable});return e})((o=t(null!=s?e(n(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0}),t(o,"__esModule",{value:!0})),s);var o},o=s(require("./jc.js")),u=s(require("./pa.js")),l=s(require("./u4.js")),p=s(require("./u8.js")),g=s(require("./a3.js")),m=s(require("./ad.js")),y=s(require("./pi.js")),c=getApp();(0,o.defineComponent)({properties:{showCapsuale:{type:Boolean,value:!0},contentStyle:{type:String,value:""},paddingBottom:{type:Number,value:18,observer(e){const{navigatorHeight:t}=(0,g.getStatusBarHeightWithDowngrade)(e);this.setData({navigatorHeight:t})}},upperBgColor:{type:String,value:"transparent"},isTransparent:{type:Boolean,value:!1},isNewYear:{type:Boolean,value:!1},bgImage:{type:String},bgColor:{type:String}},data:Object.assign({isApp:(0,p.isApp)(),isNotSupportNavigationStyle:m.isNotSupportNavigationStyle,weatherStatus:"",weatherDegree:"",capsuleWidth:`width: ${(0,g.calcHeight)(97)}rpx`},(0,g.getStatusBarHeightWithDowngrade)()),attached(){const{showCapsuale:e,isApp:t,isNotSupportNavigationStyle:a}=this.data;!e||t||a||this.handleCompatbility(),this.triggerEvent("passNavHeight",this.data.navigatorHeight)},methods:{headerImgLoadFail(){l.default.emit(u.SKIN_LOAD_FAIL)},handleCompatbility(){y.default.use("getMenuButtonBoundingClientRect",(e=>{var t;let a;a=(null==(t=e.getMenuButtonBoundingClientRect())?void 0:t.left)||278;const i=c.$systemInfo.systemInfo.windowWidth,n=parseInt(i)-a,r=(0,g.calcHeight)(n);this.setData({capsuleWidth:`width: ${r}rpx`})}))}}});