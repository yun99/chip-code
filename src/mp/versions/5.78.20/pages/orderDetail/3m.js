var t=Object.defineProperty;((e,i)=>{for(var r in(e=>{t(e,"__esModule",{value:!0})})(e),i)t(e,r,{get:i[r],enumerable:!0})})(exports,{default:()=>e});var e=class{constructor(t){var e;this.coreModule=t,this.factor=1,"function"==typeof(null==(e=this.coreModule.wx)?void 0:e.getSystemInfoSync)&&(this.factor=this.coreModule.wx.getSystemInfoSync().windowWidth/750)}get pixelRatio(){return this.coreModule.drawingSchema.pixelRatio||1}toPx(t,e){return e?parseInt(String(t*this.factor*this.pixelRatio),10):t*this.factor*this.pixelRatio}toRpx(t,e){return e?parseInt(String(t/(this.factor*this.pixelRatio)),10):t/(this.factor*this.pixelRatio)}deepClone(t){return JSON.parse(JSON.stringify(t))}};