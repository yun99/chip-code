var e,t,r=Object.create,a=Object.defineProperty,c=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=(e=require("./kr.js"),((e,t,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of n(t))l.call(e,o)||"default"===o||a(e,o,{get:()=>t[o],enumerable:!(r=c(t,o))||r.enumerable});return e})((t=a(null!=e?r(o(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),a(t,"__esModule",{value:!0})),e));module.exports={getPrefetchBundle:e=>{(0,u.requestProjectVersion)(e).then((t=>{(0,u.preFetch)(`cashier-page|${t.project}|${e.dynamicEnv}`)})).catch((t=>{(0,u.preFetch)(`cashier-page|${e.name}|${e.dynamicEnv}`)}))}};