var e=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(o,r,t)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t;function l(e){e.gotoCookbookDetailPage=(l,b={})=>{e.goto("igrocery://www.grocery.com/cookbook_detail",((e,l)=>{for(var b in l||(l={}))r.call(l,b)&&a(e,b,l[b]);if(o)for(var b of o(l))t.call(l,b)&&a(e,b,l[b]);return e})({cookbookId:l},b))}}((o,r)=>{for(var t in(o=>{e(o,"__esModule",{value:!0})})(o),r)e(o,t,{get:r[t],enumerable:!0})})(exports,{default:()=>l});