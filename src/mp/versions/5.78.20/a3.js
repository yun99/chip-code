var t=Object.create,e=Object.defineProperty,a=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,r=Object.prototype.hasOwnProperty,s=t=>e(t,"__esModule",{value:!0}),i=i=>((t,o,s)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let i of n(o))r.call(t,i)||"default"===i||e(t,i,{get:()=>o[i],enumerable:!(s=a(o,i))||s.enumerable});return t})(s(e(null!=i?t(o(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i);((t,a)=>{for(var n in s(t),a)e(t,n,{get:a[n],enumerable:!0})})(exports,{calcHeight:()=>H,getAppNavHeight:()=>y,getContainerWidth:()=>m,getMmpStatusBarHeight:()=>d,getStatusBarHeight:()=>c,getStatusBarHeightWithDowngrade:()=>h});var u=i(require("./ob.js")),g=i(require("./u5.js")),l=i(require("./ad.js")),p=i(require("./u8.js")),f=getApp();function c(t=18){const e=!!g.default.$systemInfo.isIOS(),a=H(g.default.$systemInfo.systemInfo.statusBarHeight),n=H(e?44:48),o=a+n+t;return u.log.info(`<Custom Nav Height> padingBottom ${t}rpx navigatorHeight ${o}rpx`),{statusBarHeight:a,contentHeight:n,navigatorHeight:o}}function m(){const t=parseInt(f.$systemInfo.systemInfo.windowWidth,10);let e=0;const a=wx.getMenuButtonBoundingClientRect().left;e=(0,p.isApp)()||(0,p.isMT)()?t-15:a-8;return H(e)}function h(t=18){const e=c(t);return l.isNotSupportNavigationStyle?(e.navigatorHeight-=e.statusBarHeight,e.statusBarHeight=0,e):e}function y(){const t=H(g.default.$systemInfo.systemInfo.statusBarHeight),e=t+72;return u.log.info(`<极速app导航栏> statusBarheight ${t} navigatorHeight ${e}rpx`),{statusBarHeight:t,contentHeight:0,navigatorHeight:e}}function d(){const t=g.default.$systemInfo.systemInfo.statusBarHeight,e=H(t),a=!!g.default.$systemInfo.isIOS()?44:48,n=H(a),o=t+a,r=e+n;return u.log.info(`<Custom Nav Height MT> calcNavigatorHeight ${r} rpx, originalNavigatorHeight,不包括下18rpxpadding ${o} px`),{statusBarHeight:e,contentHeight:n,navigatorHeight:r}}function H(t){const e=750/g.default.$systemInfo.systemInfo.windowWidth;return Math.floor(t*e)}