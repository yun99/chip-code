var{internal_safe_get:e,internal_get_original:t,internal_inline_style:s,getElementById:a,propsManager:o,genCompid:n,genLoopCompid:r}=require("../../gt.js"),i=Object.create,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,m=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,c=e=>l(e,"__esModule",{value:!0}),g=e=>((e,t,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of p(t))y.call(e,a)||"default"===a||l(e,a,{get:()=>t[a],enumerable:!(s=u(t,a))||s.enumerable});return e})(c(l(null!=e?i(m(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);((e,t)=>{for(var s in c(e),t)l(e,s,{get:t[s],enumerable:!0})})(exports,{default:()=>b});var d=g(require("../../gu.js")),f=g(require("../../gy.js")),_=require("../../../../er.js"),h=getApp(),b=class extends f.default{constructor(){super(...arguments),this.$usedState=["loopArray2","systemInfo"],this.customComponents=[]}_constructor(){this.state={systemInfo:[]},this.$$refs=[]}onShow(){this.showSystemInfo()}showSystemInfo(){const e=h.getModule("systemInfo")&&h.getModule("systemInfo").getSystemInfo(),t=[];if(e){Object.keys(e).forEach((s=>{t.push({k:s,v:e[""+s]})}))}this.setState({systemInfo:t})}_createData(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};this.$prefix;const e=this.__state.systemInfo.map(((e,s)=>({$loopState__temp2:""+s,$original:(e={$original:t(e)}).$original})));return Object.assign(this.__state,{loopArray2:e}),this.__state}};b.$$events=[],b.$$componentPath="Users/lyp/Documents/me/meituan/git/youxuan/mall-dyapp/src/subPackages/debug/pages/system/index",_(d.createPage(b));