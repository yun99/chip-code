var e=Object.create,t=Object.defineProperty,u=Object.defineProperties,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,n=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,y=(e,u,r)=>u in e?t(e,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[u]=r,i=(e,t)=>{for(var u in t||(t={}))s.call(t,u)&&y(e,u,t[u]);if(p)for(var u of p(t))c.call(t,u)&&y(e,u,t[u]);return e},l=(e,t)=>u(e,o(t)),m=e=>t(e,"__esModule",{value:!0}),_=u=>((e,u,o)=>{if(u&&"object"==typeof u||"function"==typeof u)for(let p of a(u))s.call(e,p)||"default"===p||t(e,p,{get:()=>u[p],enumerable:!(o=r(u,p))||o.enumerable});return e})(m(t(null!=u?e(n(u)):{},"default",u&&u.__esModule&&"default"in u?{get:()=>u.default,enumerable:!0}:{value:u,enumerable:!0})),u);((e,u)=>{for(var r in m(e),u)t(e,r,{get:u[r],enumerable:!0})})(exports,{cartSkuBoardFormat:()=>T,skuBoardMaps:()=>f});var d=_(require("./lz.js")),b=_(require("./f8.js")),x=_(require("./km.js")),v=_(require("./a8.js")),f=l(i({},d.SKU_BOARD_TYPE_MAP),{[d.BOARDENUMTYPES.CBOARD]:{key:"cboardVO",moduleType:4,skuType:v.ListTypes.cartCboard,bid:"b_youxuan_jk45n9qt_mv",seeMoreBid:"b_youxuan_qdnuhf7r_mc",defTitle:"排行榜",defSubTitle:"强烈安利，鲜到鲜得！",lxEventBids:{[v.LxEventTypes.CardClick]:"b_youxuan_b7t4rk90_mc",[v.LxEventTypes.CardView]:"b_youxuan_4fwbgs11_mv",[v.LxEventTypes.AddCartClick]:"b_youxuan_3p1a7r34_mc",[v.LxEventTypes.DecreaseCartClick]:"",[v.LxEventTypes.SpecPopupShowClick]:"b_youxuan_4603pfxs_mc",[v.LxEventTypes.SpecPopupSkuView]:"b_youxuan_54flhjci_mv",[v.LxEventTypes.SpecPopupAddCartClick]:"b_youxuan_95htscqt_mc",[v.LxEventTypes.SpecPopupEditAttrClick]:"b_youxuan_cqzz2j4x_mc",[v.LxEventTypes.SpecPopupRemindClick]:"b_youxuan_obwp5847_mc"},schema:(0,x.default)(l(i({},d.smallCard),{hiddenNodesByPath:["topTagInfo"]}))},[d.BOARDENUMTYPES.OFTENBUY]:{key:"oftenBuyVO",moduleType:3,skuType:v.ListTypes.cartOftenBuy,bid:"b_youxuan_u45cjjhv_mv",seeMoreBid:"b_youxuan_6czvaoe2_mc",defTitle:"我常买",defSubTitle:"买过的都在这里",lxEventBids:{[v.LxEventTypes.CardClick]:"b_youxuan_nngzaebe_mc",[v.LxEventTypes.CardView]:"b_youxuan_nngzaebe_mv",[v.LxEventTypes.AddCartClick]:"b_youxuan_3bbsf7u1_mc",[v.LxEventTypes.DecreaseCartClick]:"",[v.LxEventTypes.SpecPopupShowClick]:"b_youxuan_4ngt1191_mc",[v.LxEventTypes.SpecPopupSkuView]:"b_youxuan_qh3xoxxz_mv",[v.LxEventTypes.SpecPopupAddCartClick]:"b_youxuan_4o30igc7_mc",[v.LxEventTypes.SpecPopupEditAttrClick]:"b_youxuan_i9ginh42_mc",[v.LxEventTypes.SpecPopupRemindClick]:"b_youxuan_m05fvlwr_mc"},schema:(0,x.default)(i({},d.smallCard))}}),T=e=>{const{skuItem:t,type:u=1,requestid:r=""}=e;return(0,b.skuBoardFormat)({skuItem:t,type:u,requestid:r,skuTypeMaps:f})};