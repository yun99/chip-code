var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,r=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,f=e=>t(e,"__esModule",{value:!0});((e,n)=>{for(var o in f(e),n)t(e,o,{get:n[o],enumerable:!0})})(exports,{default:()=>p});var c,u=(c=require("./ob.js"),((e,r,f)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let c of o(r))l.call(e,c)||"default"===c||t(e,c,{get:()=>r[c],enumerable:!(f=n(r,c))||f.enumerable});return e})(f(t(null!=c?e(r(c)):{},"default",c&&c.__esModule&&"default"in c?{get:()=>c.default,enumerable:!0}:{value:c,enumerable:!0})),c)),i="[object Object]";function s(e){return Object.prototype.toString.call(e)}function a(e,t){for(const n in t)if(void 0===e[n])return!1;return!0}function g(e,t,n={},o="",r=!1){if(e===t)return;const l=s(e),f=s(t);if("[object Array]"===l&&l===f&&e.length>=t.length)for(let r=0,l=e.length;r<l;r++)g(e[r],t[r],n,`${o}[${r}]`);else if(l!==i||l!==f||!r&&!a(e,t))n[o]=void 0!==e?e:null;else{const r=Object.keys(e);for(const l of r){const r=e[l],f=t[l],c=s(r),u=s(f);if(r!==f)if("[object Array]"===c&&c===u&&r.length>=f.length)for(let e=0,t=r.length;e<t;e++)g(r[e],f[e],n,`${o?`${o}.`:""}${l}[${e}]`);else if(c===i&&c===u&&a(r,f))for(const e in r)g(r[e],f[e],n,`${o?`${o}.`:""}${l}.${e}`);else n[`${o?`${o}.`:""}${l}`]=void 0!==r?r:null}}}function p(e,t,{report:n=!1}={}){const o={},r={};return Object.keys(e).forEach((e=>{o[e]=t[e]})),function(e){for(const t in e)if(/\w+\.\w+/g.test(t)&&!~t.indexOf("[")){const n=t.split(".");let o=e;for(let e=0,t=n.length;e<t-1;e++){const t=n[e];s(o[t])!==i&&(o[t]={}),o=o[t]}o[n[n.length-1]]=e[t],delete e[t]}}(e),g(e,o,r,"",!0),n&&u.log.info(`${getApp().page().route} diff result--\x3e`,r),r}