var e=Object.defineProperty;((r,t)=>{for(var a in(r=>{e(r,"__esModule",{value:!0})})(r),t)e(r,a,{get:t[a],enumerable:!0})})(exports,{getAddrCache:()=>a,setAddrCache:()=>d});var r=getApp(),t="poiAddressMap_poi",a=()=>r.$store.getAndRemove(t),d=e=>r.$store.setCache(t,e,{isOnlyCache:!0});