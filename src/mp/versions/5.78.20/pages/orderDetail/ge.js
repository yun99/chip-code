var e=Object.defineProperty;((n,t)=>{for(var s in(n=>{e(n,"__esModule",{value:!0})})(n),t)e(n,s,{get:t[s],enumerable:!0})})(exports,{BUSINESS_CODE:()=>t,BUSINESS_TYPE:()=>n,findMarketingMsg:()=>r,formatTextTpl:()=>o,transformTempStringToArray:()=>s});var n={ACTIVE_TYPE:1,MONTH_CARD_TYPE:2,GAME_TYPE:3},t={VEGETABLE_CODE:"50002",GET_MONEY:"50009"};function s(e){if(!e)return[];const n=/%\w/g;let t=n.exec(e),s=0;const r=[];for(;null!==t;)n.lastIndex-2>s&&r.push(e.slice(s,n.lastIndex-2)),r.push(t[0]),s=n.lastIndex,t=n.exec(e);return r.push(e.slice(s)),r}function r(e){if(!e)return{};const{data:s=[]}=e;let r;for(let e=0;e<s.length;e++){const o=s[e],l=(null==o?void 0:o.resourceInfos[0])||{},{businessType:u="",businessId:E=""}=l;return r=u===n.ACTIVE_TYPE&&E===t.GET_MONEY?l:{},Object.keys(r).length&&(r.showType=1),r}}function o(e){return`<span style="color: #F20000; font-weight: 600;">&nbsp;${e}&nbsp;</span>`}