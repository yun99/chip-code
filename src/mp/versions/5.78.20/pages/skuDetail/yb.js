var e=Object.create,t=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,r=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,n=n=>{return((e,r,n)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let u of o(r))l.call(e,u)||"default"===u||t(e,u,{get:()=>r[u],enumerable:!(n=a(r,u))||n.enumerable});return e})((u=t(null!=n?e(r(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0}),t(u,"__esModule",{value:!0})),n);var u},u=n(require("../../u5.js")),p=n(require("../../jz.js"));(0,p.defineComponent)(new class{constructor(){this.methods={gotoBoardPage(){var e,t,a;const o=(null==(t=null==(e=this.data.boardData)?void 0:e.jumpUrl)?void 0:t.iretail)||"";u.$lxLog.mc("b_youxuan_llf3kwx2_mc",null==(a=this.data.boardData)?void 0:a.boardLxParams),o&&u.$router.goto(o)},onBoardMvReport(e){const{__mvHandler:t}=getApp().page();"function"==typeof t&&t(e)}},this.properties={boardData:{type:Object,value:{}},mvHandler:{type:Function}},this.data={}}});