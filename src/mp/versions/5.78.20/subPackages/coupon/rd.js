var e,t,a=Object.create,o=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,i=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e=require("./sl.js"),((e,t,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of n(t))l.call(e,s)||"default"===s||o(e,s,{get:()=>t[s],enumerable:!(a=r(t,s))||a.enumerable});return e})((t=o(null!=e?a(i(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),o(t,"__esModule",{value:!0})),e)),d=getApp();Component({properties:{CouponLists:{type:Array,observer(e){this.data.tab===c.CURRENTSTATUS.NO_USE&&this.setData({showRec:!e.length}),this.changeData()}},recmmondCouponList:{type:Array},tab:{type:Number,value:1},invalidLabel:{type:String,value:""},total:{type:Number,value:0},isGetRemmond:{type:Boolean,value:!1}},data:{showAll:!1,validCouponLists:[],invalidCouponLists:[],validTotal:[],inValidTotal:[],COUPONSTATUS:c.COUPONSTATUS,CURRENTSTATUS:c.CURRENTSTATUS,showRec:!1,TAB_NAME_DICT:{1:"未使用",2:"已使用",3:"已失效"}},attached(){this.changeData()},methods:{goInvalid(e){const{index:t}=e.currentTarget.dataset,{btnLink:a,typeDesc:o,addCart:r}=this.data.validCouponLists[t];"商品券"!==o||r?d.$router.goto(a):d.page().toast(a)},changeData(){const{CouponLists:e=[],tab:t}=this.data,a=[],o=[];if(!e.length)return this.setData({showRec:!0});t===c.CURRENTSTATUS.NO_USE?e.forEach((e=>{e.valid?a.push(e):o.push(e)})):e.forEach((e=>{a.push(e)})),this.setData({validCouponLists:[...a],invalidCouponLists:[...o],showRec:e.length===this.data.total})},updateRecGoods(e){this.triggerEvent("changeRec",{data:e.detail})},gotoCouponStatement(){d.$router.jumpToH5("https://i.meituan.com/awp/hfe/block/d2f9fd1a7dfb/102790/index.html")},openCityScopePop(e){this.triggerEvent("openCityScopePop",e.detail)},onMvReport(e){d.$lxLog.mv(e.detail.bid,((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&u(e,a,t[a]);return e})({},e.detail.lxParams))}}});