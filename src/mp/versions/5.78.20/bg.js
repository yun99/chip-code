var e=Object.defineProperty;function r(e){return"string"==typeof e?e:"number"==typeof e&&isFinite(e)?""+e:"boolean"==typeof e?e?"true":"false":"object"==typeof e?JSON.stringify(e):e}function t(e,t){const{sep:n="&",eq:o="=",encode:f=encodeURIComponent}=t||{};if(null!==e&&"object"==typeof e){for(var i=Object.keys(e),s=i.length,a=s-1,u="",y=0;y<s;++y){var l=i[y],c=e[l],p=f(r(l))+o;if(Array.isArray(c)){for(var b=c.length,g=b-1,v=0;v<b;++v)u+=p+f(r(c[v])),v<g&&(u+=n);b&&y<a&&(u+=n)}else u+=p+f(r(c)),y<a&&(u+=n)}return u}return""}((r,t)=>{for(var n in(r=>{e(r,"__esModule",{value:!0})})(r),t)e(r,n,{get:t[n],enumerable:!0})})(exports,{stringify:()=>t});