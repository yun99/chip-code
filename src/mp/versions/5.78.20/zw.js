var o=Object.defineProperty;((r,e)=>{for(var t in(r=>{o(r,"__esModule",{value:!0})})(r),e)o(r,t,{get:e[t],enumerable:!0})})(exports,{JUMP_PROTOCOL:()=>r,registerProtocol:()=>t,registerProtocols:()=>c});var r=[],e={},t=(o,t)=>{const{protocol:c,targetPage:l}=o;if(!c)throw new Error("[protocol]: 缺乏protocol");if(!l)throw new Error("[protocol]: 缺乏targetPage");if(e[c])throw new Error(`[protocol]: protocol "${c}" 已经被${t}仓库的${e[c]}占用，请修改后再试`);e[c]=l,r.push(o)},c=(o,r)=>{o.forEach((o=>t(o,r)))};