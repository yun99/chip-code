var e=require("./3x.js"),t=Object.prototype,o=t.hasOwnProperty,r=t.toString,a=e?e.toStringTag:void 0;module.exports=function(e){var t=o.call(e,a),l=e[a];try{e[a]=void 0;var n=!0}catch(e){}var u=r.call(e);return n&&(t?e[a]=l:delete e[a]),u};