var e,t,n=Object.create,s=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>r(e,a(t)),g=e=>{return((e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of i(t))p.call(e,r)||"default"===r||s(e,r,{get:()=>t[r],enumerable:!(n=o(t,r))||n.enumerable});return e})((t=s(null!=e?n(l(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0}),s(t,"__esModule",{value:!0})),e);var t},f=(e,t,n)=>new Promise(((s,r)=>{var o=e=>{try{i(n.next(e))}catch(e){r(e)}},a=e=>{try{i(n.throw(e))}catch(e){r(e)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,a);i((n=n.apply(e,t)).next())})),I=g(require("../../../../ad.js")),T=g(require("../../../../ob.js")),w=g(require("../../ag.js")),q=g(require("../../af.js")),h=g(require("../../ah.js")),b=require("../../../../er.js"),x=getApp(),O=(null==(t=null==(e=x.getModule("systemInfo"))?void 0:e.getSystemInfo())?void 0:t.isIpx)||!1;b({data:{isNotSupportNavigationStyle:I.isNotSupportNavigationStyle,title:"",notice:"",orderId:h.DEFAULT_ORDER_ID,applyId:h.DEFAULT_APPLY_ID,questions:[],confirmTip:"",isIpx:O},onLoad(e){const{orderId:t,applyId:n}=e;this.setData({orderId:t,applyId:n})},onShow(){return f(this,null,(function*(){try{const e=yield this.getAppealQuestionInfo(),{title:t="",comment:n="",questions:s=[],confirmTip:r=""}=e,o=s.map((e=>{let t="",n=!1,s=!1,r=!1;const{questionInfo:o={}}=e,{questionType:a}=o;switch(a){case q.QuestionType.SingleSelect:n=!0;break;case q.QuestionType.MultipleSelect:t="多选",s=!0;break;case q.QuestionType.Textarea:r=!0}return e.questionInfo=m(y({},o),{questionTypeText:t,showSingleSelect:n,showMultipleSelect:s,showTextarea:r}),e}));this.setData({title:t,notice:n,questions:o,confirmTip:r})}catch(e){x.page().toast("获取申诉问题失败"),x.$router.goto(-1)}}))},handleBack(){x.$router.goto(-1)},getAppealQuestionInfo(){return f(this,null,(function*(){const{orderId:e,applyId:t}=this.data,n={orderId:e,applyId:t};try{x.page().loading(!0);return yield(0,w.getAppealQuestion)(n)}catch(e){T.log.warn(`<RefundAppeal> 获取申诉问题失败：${e}`)}finally{x.page().loading(!1)}}))},handleAnswerChange(e){const{answerId:t=h.DEFAULT_ANSWER_ID,questionId:n=h.DEFAULT_QUESTION_ID,questionType:s=h.DEFAULT_QUESTION_TYPE,textValue:r=""}=e.detail,{questions:o=[]}=this.data,a=o.map((e=>{const{questionInfo:o={}}=e;if(o.questionId===n){let{answerOptions:n=[]}=e;switch(s){case q.QuestionType.SingleSelect:return n=n.map((e=>{const n=t===e.answerId;return m(y({},e),{selected:n})})),{questionInfo:o,answerOptions:n};case q.QuestionType.MultipleSelect:return n=n.map((e=>{const n=t===e.answerId?!e.selected:e.selected;return m(y({},e),{selected:n})})),{questionInfo:o,answerOptions:n};case q.QuestionType.Textarea:return r.length>=500&&x.page().toast("最多输入500字"),{questionInfo:o,answerText:r}}}return e}));this.setData({questions:a})},validateParams(){const{questions:e=[]}=this.data,t=e.length;for(let n=0;n<t;n++){const t=e[n],{questionInfo:s={},answerOptions:r=[],answerText:o=""}=t,{needAnswer:a,questionType:i}=s;if(a)switch(i){case q.QuestionType.SingleSelect:case q.QuestionType.MultipleSelect:if(!r.some((e=>!!e.selected)))return x.page().toast(`问题${n+1}未回答`),!1;break;case q.QuestionType.Textarea:if(!o)return x.page().toast(`问题${n+1}未回答`),!1}}return!0},handleSubmit(){return f(this,null,(function*(){const{orderId:e,applyId:t,questions:n,title:s,notice:r,confirmTip:o}=this.data;if(!this.validateParams())return;const a=n.map((e=>{const{questionInfo:t={},answerOptions:n=[],answerText:s=""}=e,{questionType:r,needAnswer:o,questionId:a,questionText:i="",questionTip:u=""}=t,l={questionType:r,needAnswer:o,questionId:a,questionText:i,questionTip:u},p=n.filter((e=>{const{selected:t}=e;return!!t})).map((e=>{const{answerId:t,answerText:n}=e;return{answerId:t,answerText:n}}));return r===q.QuestionType.Textarea?{questionInfo:l,answerText:s}:{questionInfo:l,answerInfos:p}})),i={orderId:e,applyId:t,answerParam:JSON.stringify({answers:a,comment:r,confirmTip:o,title:s})};try{const e=yield(0,w.appealSubmit)(i),{showPop:t,popText:n=""}=e;t&&n?x.page().alert({message:n,ok:()=>{x.$router.goto(-1)}}):x.$router.goto(-1)}catch(e){T.log.warn("<RefundAppeal> 提交退款申诉失败:",e)}}))}});