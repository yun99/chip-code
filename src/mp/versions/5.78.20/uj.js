var e=Object.defineProperty;((r,s)=>{for(var t in(r=>{e(r,"__esModule",{value:!0})})(r),s)e(r,t,{get:s[t],enumerable:!0})})(exports,{NetworkError:()=>r});var r=class{constructor(e){const r=e&&e instanceof Object;this.name="NetworkError",this.message=e,this.errMsg=(r?e.errMsg:e)||"",r&&(this.message="网络异常",this.stack=e.stack,this.fileName=e.fileName,this.lineNumber=e.lineNumber,this.columnNumber=e.columnNumber)}};