var e=Object.create,t=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,o,r)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,l=o=>{return((e,o,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let n of i(o))p.call(e,n)||"default"===n||t(e,n,{get:()=>o[n],enumerable:!(a=r(o,n))||a.enumerable});return e})((a=t(null!=o?e(s(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0}),t(a,"__esModule",{value:!0})),o);var a},h=(e,t,o)=>new Promise(((r,a)=>{var i=e=>{try{s(o.next(e))}catch(e){a(e)}},n=e=>{try{s(o.throw(e))}catch(e){a(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,n);s((o=o.apply(e,t)).next())})),d=l(require("../../jc.js")),P=l(require("../../ob.js")),y=getApp(),g=y.$event.CONTANTS.BUY_ANOTHER_POPUP_SHOW,m="",f=!1,O="";(0,d.defineComponent)({propTypes:null,properties:{zIndex:{type:Number,value:1e3},cartOpSource:{type:String,value:"CART"},title:{type:String,value:"",observer(e){this.setData({titleArr:e.split("<red>")})}},popProduct:{type:Object,value:{pic:"",productName:"",sellPrice:0,skuId:0,unit:""}},buttonName:{type:String,value:"再买一份"},isMakeUpPop:{type:Boolean,value:!1}},attached(){this.getExtraOnePiecesData(),this.canPopupShowBindThis=this.canPopupShow.bind(this),y.$event.on(g,this.canPopupShowBindThis)},detached(){y.$event.off(g,this.canPopupShowBindThis)},pageLifetimes:{show(){this.isOnPageShowListen?y.$event.on(g,this.canPopupShowBindThis):this.isOnPageShowListen=!0},hide(){y.$event.off(g,this.canPopupShowBindThis),this.data.isShow&&this.setData({isShow:!1})}},data:{titleArr:[],isShow:!1},methods:{onPopupClose(e,t=!0,o=!0){const{skuId:r,sellPrice:a}=this.data.popProduct||{};o&&y.$lxLog.mc("b_youxuan_ik48q61n_mc",{sale_price:a,sku_id:r}),t&&this.setData({isShow:!1}),this.triggerEvent("popupClose")},onBuyButtClick(){return h(this,null,(function*(){const{skuId:e,cartOpSource:t,sellPrice:o}=this.data.popProduct||{};y.$lxLog.mc("b_youxuan_79wiaeoy_mc",{sale_price:o,sku_id:e}),this.setData({isShow:!1}),e?(yield y.$cart.operateCart({cartOpType:"INCREASE",cartOpSource:t,opTarget:{opTargets:[{skuId:e,count:1}]},showSuccessToast:!1,needAnimation:!1}),this.onPopupClose({},!1,!1)):P.log.info("再买一件skuId为空：",e)}))},onMvReport(){const{skuId:e,sellPrice:t}=this.data.popProduct||{};y.$lxLog.mv("b_youxuan_nispj0rn_mv",{sale_price:t,sku_id:e})},getExtraOnePiecesData(){const{extraOnePiecesPopupDate:e,extraOnePiecesPopupCount:t}=y.$store.getCacheValue("cartCache")||{},o=new Date;O=`${o.getFullYear()}${o.getMonth()}`,m=e||"",f=1===t&&e===`${O}${o.getDate()}`},canPopupShow(){return h(this,null,(function*(){var e,t;const r=new Date,i=`${O}${r.getDate()}`;let s={};if(i!==m||!f){if(this.data.isMakeUpPop)try{const{title:o,popProductList:r=[{}],buttonViews:a=[{}],experiments:i}=(yield y.$service.makeUpPop())||{title:"",popProductList:[],buttonViews:[{des:"",code:0}],experiments:[{groupKey:"Buy_one_more_group_group1",expKey:"d"}]};s={title:o,popProduct:r[0],buttonName:(null==(e=a[0])?void 0:e.desc)||""};const n=(null==(t=i.find((e=>"Buy_one_more_group"===e.groupKey)))?void 0:t.expKey.toUpperCase())||"D";if("B"===n||"D"===n||!o||!i.length)return}catch(e){return void P.log.info("购物车再买一件接口请求失败",JSON.stringify(e))}m=i,f=!0,y.$store.setCache("cartCache",{extraOnePiecesPopupDate:i,extraOnePiecesPopupCount:1}),this.setData((l=((e,t)=>{for(var o in t||(t={}))p.call(t,o)&&c(e,o,t[o]);if(n)for(var o of n(t))u.call(t,o)&&c(e,o,t[o]);return e})({},s),o(l,a({isShow:!0})))),P.log.info("<extraOnePiecesPopupDate canPopupShow>再买一件弹窗弹出，当前页面为：",y.lastShowPage)}var l}))}}});