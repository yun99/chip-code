var e=Object.create,t=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,a=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},g=(e,t)=>r(e,n(t)),f=e=>t(e,"__esModule",{value:!0}),p=r=>((e,r,n)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let l of i(r))u.call(e,l)||"default"===l||t(e,l,{get:()=>r[l],enumerable:!(n=o(r,l))||n.enumerable});return e})(f(t(null!=r?e(a(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);((e,r)=>{for(var o in f(e),r)t(e,o,{get:r[o],enumerable:!0})})(exports,{getCircleIncludePoints:()=>R,getRangeData:()=>j,handleRangeData:()=>D,moveToRange:()=>x});var y,m,v=p(require("./ls.js")),O=p(require("../../ob.js")),P=p(require("../../u9.js"));(m=y||(y={}))[m.Circle=1]="Circle",m[m.Polygon=2]="Polygon";var b=getApp(),h="<RangeData>",w={strokeWidth:1,color:"#ff4400",fillColor:"#ff440015"},I={fillColor:"#ff440015",strokeWidth:1,strokeColor:"#ff4400"};function j(e){return t=this,r=null,o=function*(){const{poiId:t,poiIdStr:r}=e;let o={};try{o=yield P.default.getWxLocation({refresh:!0})}catch(e){O.log.warn(`${h}, getWxLocation error: `,JSON.stringify(e))}const{latitude:n,longitude:i}=o,l=yield b.$service.getPosition({latitude:n,longitude:i}),{cityId:a}=l,u={latitude:n,longitude:i,poiId:t,poiIdStr:r,cityId:a};try{const e=yield(0,v.getDeliveryInfo)(u),{currentPoiInfo:t={},poiDeliveryInfo:r={}}=e;return{currentPoiInfo:t,poiDeliveryInfo:r}}catch(e){return O.log.warn(`${h} getDeliveryInfo error, params: `,JSON.stringify(u),"error: ",JSON.stringify(e)),{}}},new Promise(((e,n)=>{var i=e=>{try{a(o.next(e))}catch(e){n(e)}},l=e=>{try{a(o.throw(e))}catch(e){n(e)}},a=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,l);a((o=o.apply(t,r)).next())}));var t,r,o}function D(e,t=!0){const{deliveryRangeType:r,deliveryRangePoint:o}=e;try{const e=JSON.parse(o);switch(r){case 1:return function(e,t=!0){const r=R(e);return t?{circles:[d(d({},w),e)],includePoints:r}:{circles:[d(d({},w),e)]}}(e,t);case 2:return function(e,t=!0){return t?{polygons:[g(d({},I),{points:e[0]})],includePoints:e[0]}:{polygons:[g(d({},I),{points:e[0]})]}}(e,t);default:return{}}}catch(t){return O.log.warn(`${h} handleRangeData error, data: ${JSON.stringify(e)}`,JSON.stringify(t)),{}}}function x(e,t){const r=[80],{deliveryRangeType:o,deliveryRangePoint:n}=e;try{const e=JSON.parse(n);if(2===o)t.includePoints({points:e[0]||[],padding:r,fail(){O.log.warn(`${h} mapCtx.includePoints 失败`)}});else if(1===o){const{latitude:r,longitude:o}=e;r&&o&&t.moveToLocation({latitude:r,longitude:o,fail(){O.log.warn(`${h} moveToLocation 失败`)}})}}catch(e){O.log.warn(`${h} moveToRange error: ${e}`)}}function R(e){const{radius:t,longitude:r,latitude:o}=e,n=[],i=1e-5*t;return n.push({latitude:o,longitude:r+i}),n.push({latitude:o,longitude:r-i}),n}