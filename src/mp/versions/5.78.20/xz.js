var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,u=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,n=e=>t(e,"__esModule",{value:!0}),s=s=>((e,u,n)=>{if(u&&"object"==typeof u||"function"==typeof u)for(let s of a(u))o.call(e,s)||"default"===s||t(e,s,{get:()=>u[s],enumerable:!(n=r(u,s))||n.enumerable});return e})(n(t(null!=s?e(u(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);((e,r)=>{for(var a in n(e),r)t(e,a,{get:r[a],enumerable:!0})})(exports,{setCartBarBadge:()=>i});var l=s(require("./po.js")),c=s(require("./iu.js")),{tabBarIndex:p}=require("./p0.js"),i=function(e=0){const t=getApp().page(),r=t&&t.route;try{r&&p(r)>-1&&(e?wx.setTabBarBadge&&wx.setTabBarBadge({index:p("/pages/cart/index"),text:`${e}`}):wx.removeTabBarBadge&&wx.removeTabBarBadge({index:((0,l.isMMP)(),3)}))}catch(e){const t=getApp();t&&t.$cat&&t.$cat.reportError(c.CAT_SEC_CATEGORY.CART(`line：util/cart.ts setCartBarBadge() ${r}，error： ${e}`))}};