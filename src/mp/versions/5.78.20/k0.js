module.exports=exports=function(r,e=0){if(void 0!==r){if("number"!=typeof r||"number"!=typeof e)return"";var t=(r=r.toString()).indexOf("."),n="";if(t<0){for(var f=0;f<e;f++)n+="0";return r+"."+n}var i=r.length-1-t;if(i<=e){for(f=0;f<e-i;f++)n+="0";return r+n}var o=r.split(""),u=t+e;if(4<o[u+1])for(u===t&&--u,o[u]=parseInt(o[u])+1;0<u&&10===o[u];)o[u]=0,--u===t&&--u,o[u]=parseInt(o[u])+1;return 0===e&&e--,o.slice(0,t+e+1).join("")}};