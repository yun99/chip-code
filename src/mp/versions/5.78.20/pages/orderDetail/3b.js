var t=Object.create,e=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,r=(t,s,o)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,n=t=>e(t,"__esModule",{value:!0}),h=i=>((t,i,a)=>{if(i&&"object"==typeof i||"function"==typeof i)for(let c of o(i))l.call(t,c)||"default"===c||e(t,c,{get:()=>i[c],enumerable:!(a=s(i,c))||a.enumerable});return t})(n(e(null!=i?t(a(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i);((t,s)=>{for(var o in n(t),s)e(t,o,{get:s[o],enumerable:!0})})(exports,{default:()=>u});var d=h(require("./38.js")),x=h(require("./3m.js")),u=class{constructor(t){this.coreModule=t,this.canvasAssistDrawModule=new d.default(t),this.canvasUtils=new x.default(t)}drawBlock({text:t,width:e=0,height:s,x:o,y:i,paddingLeft:a=0,paddingRight:l=0,borderWidth:c,backgroundColor:r,borderColor:n,borderRadius:h=0,opacity:d=1}){let x=0,u=0,v=0;if(void 0!==t){const c=this.canvasAssistDrawModule.getTextWidth("string"==typeof t.text?t:t.text);x=c>e?c:e,x+=a+a;const{textAlign:r="left"}=t;v=s/2+i,u="left"===r?o+a:"center"===r?x/2+o:o+x-l}else x=e;r&&(this.coreModule.ctx.save(),this.coreModule.ctx.globalAlpha=d,this.coreModule.ctx.fillStyle=r,h>0?(this.canvasAssistDrawModule.drawRadiusRect(o,i,x,s,h),this.coreModule.ctx.fill()):this.coreModule.ctx.fillRect(this.canvasUtils.toPx(o),this.canvasUtils.toPx(i),this.canvasUtils.toPx(x),this.canvasUtils.toPx(s)),this.coreModule.ctx.restore()),c&&(this.coreModule.ctx.save(),this.coreModule.ctx.globalAlpha=d,this.coreModule.ctx.strokeStyle=n,this.coreModule.ctx.lineWidth=this.canvasUtils.toPx(c),h>0?(this.canvasAssistDrawModule.drawRadiusRect(o,i,x,s,h),this.coreModule.ctx.stroke()):this.coreModule.ctx.strokeRect(this.canvasUtils.toPx(o),this.canvasUtils.toPx(i),this.canvasUtils.toPx(x),this.canvasUtils.toPx(s)),this.coreModule.ctx.restore()),t&&this.drawText(Object.assign(t,{x:u,y:v}))}drawTextBlock(t){const{x:e=0,y:s=0,height:o=0,horizontalPadding:i=0,verticalPadding:a=0,borderRadius:l=0,backgroundColor:c="#ffffff",text:r="",color:n="#000000",fontStyle:h="normal",fontWeight:d="normal",fontSize:x=this.canvasUtils.toPx(16),fontFamily:u="sans-serif",opacity:v=1}=t;this.coreModule.ctx.save(),this.coreModule.ctx.font=`${h} ${d} ${this.canvasUtils.toPx(x,!0)}px ${u}`;const M=Math.floor(this.canvasUtils.toRpx(this.coreModule.ctx.measureText(r).width))+2*i,f=o+a,g=e-Math.floor(M/2),P=s-Math.floor(f/2);this.coreModule.ctx.fillStyle=c,this.canvasAssistDrawModule.drawRadiusRect(g,P,M,f,l),this.coreModule.ctx.fill(),this.coreModule.ctx.globalAlpha=v,this.coreModule.ctx.fillStyle=n,this.coreModule.ctx.textAlign="center",this.coreModule.ctx.textBaseline="middle",this.coreModule.ctx.fillText(r,this.canvasUtils.toPx(e),this.canvasUtils.toPx(s)),this.coreModule.ctx.restore()}drawText(t){const{x:e,y:s,fontSize:o,color:a,baseLine:n,textAlign:h,text:d,opacity:x=1,width:u,lineNum:v,lineHeight:M}=t;if("[object Array]"===Object.prototype.toString.call(d)){const t={x:e,y:s,baseLine:n};if("center"===h){const e=this.canvasAssistDrawModule.getTextWidth(d);e<=u&&(t.x+=Math.floor((u-e)/2))}d.forEach((e=>{t.x+=e.marginLeft||0;const s=this.canvasAssistDrawModule.drawSingleText(Object.assign(e,((t,e)=>{for(var s in e||(e={}))l.call(e,s)&&r(t,s,e[s]);if(i)for(var s of i(e))c.call(e,s)&&r(t,s,e[s]);return t})({},t)));t.x+=s+(e.marginRight||0)}))}else this.canvasAssistDrawModule.drawSingleText(t)}drawImage(t){const{context2dImageObj:e,x:s,y:o,width:i,height:a,sx:l,sy:c,sWidth:r,sHeight:n,borderRadius:h=0,borderWidth:d=0,borderColor:x}=t;this.coreModule.ctx.save(),h>0?(this.canvasAssistDrawModule.drawRadiusRect(s,o,i,a,h),this.coreModule.ctx.strokeStyle="rgba(255,255,255,0)",this.coreModule.ctx.stroke(),this.coreModule.ctx.clip(),this.coreModule.ctx.drawImage(e,this.canvasUtils.toPx(l),this.canvasUtils.toPx(c),this.canvasUtils.toPx(r),this.canvasUtils.toPx(n),this.canvasUtils.toPx(s),this.canvasUtils.toPx(o),this.canvasUtils.toPx(i),this.canvasUtils.toPx(a)),d>0&&(this.coreModule.ctx.strokeStyle=x,this.coreModule.ctx.lineWidth=this.canvasUtils.toPx(d),this.coreModule.ctx.stroke())):this.coreModule.ctx.drawImage(e,this.canvasUtils.toPx(l),this.canvasUtils.toPx(c),this.canvasUtils.toPx(r),this.canvasUtils.toPx(n),this.canvasUtils.toPx(s),this.canvasUtils.toPx(o),this.canvasUtils.toPx(i),this.canvasUtils.toPx(a)),this.coreModule.ctx.restore()}drawLine({startX:t,startY:e,endX:s,endY:o,color:i,width:a,lineDash:l}){this.coreModule.ctx.save(),this.coreModule.ctx.beginPath(),this.coreModule.ctx.strokeStyle=i,this.coreModule.ctx.lineWidth=this.canvasUtils.toPx(a),this.coreModule.ctx.setLineDash(l&&2===l.length?[this.canvasUtils.toPx(l[0]),this.canvasUtils.toPx(l[1])]:[]),this.coreModule.ctx.moveTo(this.canvasUtils.toPx(t),this.canvasUtils.toPx(e)),this.coreModule.ctx.lineTo(this.canvasUtils.toPx(s),this.canvasUtils.toPx(o)),this.coreModule.ctx.stroke(),this.coreModule.ctx.closePath(),this.coreModule.ctx.restore()}};