var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&n(e,r,t[r]);return e},p=["loading","success","fail"],c={show:!1,message:"",errorCode:"",icon:"",image:"",mask:!1,fontBreak:!1};Component({data:s({},c),properties:{type:{type:String,value:""}},methods:{show(e){const o=s({},e);let a=e.icon||"",i=e.image||"";var n;p.indexOf(e.type)>=0&&(a=e.type,i=""),this.setData((n=s({},o),t(n,r({icon:a,image:i}))))},clear(){this.setData(s({},c))}}});