var e=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(o,l,t)=>l in o?e(o,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[l]=t,c=require("./bk.js");module.exports=e=>{var u,a,d,p,s,v;return c((s=((e,o)=>{for(var l in o||(o={}))n.call(o,l)&&r(e,l,o[l]);if(t)for(var l of t(o))i.call(o,l)&&r(e,l,o[l]);return e})({},e),v={title:(null==e?void 0:e.title)||"",message:(null==e?void 0:e.message)||"",confirmType:(null==e?void 0:e.confirmType)||"default",selector:(null==e?void 0:e.selector)||"#poi-dialog",isCatchTouchMove:(null==e?void 0:e.isCatchTouchMove)||!1,confirmButtonText:(null==e?void 0:e.textOK)||"确认",confirmButtonColor:"#121924",showCancelButton:!0,cancelButtonText:(null==e?void 0:e.textCancel)||"取消",contentType:e.contentType||"",zIndex:(null==e?void 0:e.zIndex)||100,buttons:(null==e?void 0:e.buttons)||[],poi:{poiName:(null==(u=null==e?void 0:e.poi)?void 0:u.poiName)||"",distanceText:(null==(a=null==e?void 0:e.poi)?void 0:a.distanceText)||"",address:(null==(d=null==e?void 0:e.poi)?void 0:d.address)||"",picUrl:(null==(p=null==e?void 0:e.poi)?void 0:p.picUrl)||""}},o(s,l(v)))).then((o=>(o&&"confirm"===o.type&&(null==e?void 0:e.ok)&&e.ok(),o))).catch((o=>(o&&"cancel"===o.type&&(null==e?void 0:e.cancel)&&e.cancel(),o)))};