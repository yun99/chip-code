var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,i=e=>t(e,"__esModule",{value:!0}),c=c=>((e,a,i)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let c of s(a))o.call(e,c)||"default"===c||t(e,c,{get:()=>a[c],enumerable:!(i=r(a,c))||i.enumerable});return e})(i(t(null!=c?e(a(c)):{},"default",c&&c.__esModule&&"default"in c?{get:()=>c.default,enumerable:!0}:{value:c,enumerable:!0})),c);((e,r)=>{for(var s in i(e),r)t(e,s,{get:r[s],enumerable:!0})})(exports,{default:()=>d});var n=c(require("./j9.js")),l=c(require("./k5.js")),u=["project","pageUrl","resourceUrl","category","sec_category","level","timestamp","content"],m=["rowNum","colNum","tags"].concat(u),p=class{constructor(e){if(e){for(let t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);this.parse()}}parse(){this.category=this.category||l.CATEGORY.SCRIPT,this.level=this.level||l.LEVEL.ERROR,this.timestamp=this.timestamp||Date.now(),this.sec_category=this.sec_category||"default"}isEqual(e){return this.sec_category===e.sec_category&&this.resourceUrl===e.resourceUrl&&this.content===e.content}update(e){for(let t in e)void 0!==e[t]&&-1!==m.indexOf(t)&&(this[t]=e[t]);return this}updateTags(e){let t=(0,n.extend)(this.tags||{},e);return this.tags=t,this}toJson(){let e={},t=this.rowNum,r=this.colNum;return u.map((t=>{void 0!==this[t]&&(e[t]=this[t])})),e.dynamicMetric=this.dynamicMetric||{},e.category===l.CATEGORY.SCRIPT&&t&&r&&(e.dynamicMetric=(0,n.extend)(e.dynamicMetric,{rowNum:t,colNum:r})),this.tags&&(e.dynamicMetric=(0,n.extend)(e.dynamicMetric,this.tags)),e}};p.LEVEL=l.LEVEL,p.CATEGORY=l.CATEGORY;var d=p;