var e=Object.create,t=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,r=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,o=o=>{return((e,r,o)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let i of a(r))n.call(e,i)||"default"===i||t(e,i,{get:()=>r[i],enumerable:!(o=s(r,i))||o.enumerable});return e})((i=t(null!=o?e(r(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0}),t(i,"__esModule",{value:!0})),o);var i},i=(e,t,s)=>new Promise(((a,r)=>{var n=e=>{try{i(s.next(e))}catch(e){r(e)}},o=e=>{try{i(s.throw(e))}catch(e){r(e)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,o);i((s=s.apply(e,t)).next())})),l=o(require("../../../../er.js")),c=o(require("../../../../ob.js")),u=o(require("../../pj.js")),m=getApp();(0,l.default)({data:{selects:[],otherText:"",isHaveHistoryMsg:!1,isHaveRecommendRemarks:!1,remindMsg:[],isEditMessage:!1,isOnPage:!0,recommendRemarks:[]},onLoad(e){return i(this,null,(function*(){this.initText(e);const{orderRemindMessage:t=[]}=m.$store.getCacheValue("orderRemindMessage"),s=yield this.getRecommendRemarks();this.setData({recommendRemarks:s,isHaveRecommendRemarks:s.length>0});const a=this.uniqueRemindMsg(s,t);a.length>0&&a.forEach(((e,t)=>{m.$lxLog.mv("b_youxuan_rna64u4y_mv",{index:t,title:e,type:"用户自定义"})})),a.length>0&&(m.$lxLog.mv("b_youxuan_1h7wwlqe_mv"),this.setData({isHaveHistoryMsg:!0,remindMsg:a})),s.length>0&&s.forEach(((e,t)=>{m.$lxLog.mv("b_youxuan_rna64u4y_mv",{index:t,title:e,type:"系统推荐"})}))}))},initText(e){let{otherText:t="",nowEdit:s=""}=e;if(t=decodeURIComponent(t),s=decodeURIComponent(s),!t&&s){t=""}this.setData({otherText:t})},getRecommendRemarks(){return i(this,null,(function*(){try{const e=yield(0,u.getRecommendOrderRemarks)(),{contents:t=[]}=e||{};return t}catch(e){return c.log.warn(`<OrderRemark> 获取配置标签异常：${JSON.stringify(e)}`),[]}}))},uniqueRemindMsg(e=[],t=[]){const s=t.concat([]);for(let t=0;t<e.length;t++)for(let a=0;a<s.length;a++)e[t]===s[a]&&(s.splice(a,1),a--);return s},onOtherTextChange(e){var t;const{value:s}=e.detail;50===s.length&&(null==(t=null==m?void 0:m.page())||t.toast("最多输入50字")),this.setData({otherText:s})},complete(){const{otherText:e,selects:t}=this.data,s=e.replace(/\n+/g," ").trim();m.$lxLog.mc("b_youxuan_4iz4qvru_mc",{title:s});const a=[];s&&a.push(s),s.length>0&&this.saveRemindMessage(s);const r={selects:t,otherText:s,submitOrderShowText:a.join("；")},n=m.page(-2);n&&-1!==["pages/cart/index","pages/cartLanding/index","pages/submitOrder/index","pages/submitGroupOrder/index"].indexOf(n.route)&&n.setRemark&&(n.setRemark.call(n,r),m.$router.triggerBack("remark-complete"))},editMsg(){var e;const{isEditMessage:t,remindMsg:s}=this.data;t?(m.$lxLog.mc("b_youxuan_v64dx3ln_mc"),m.$store.setCache("orderRemindMessage",{orderRemindMessage:s}),null==(e=null==m?void 0:m.page())||e.toast("保存成功"),0===s.length&&this.setData({isHaveHistoryMsg:!1,isOnPage:!1})):m.$lxLog.mc("b_youxuan_1h7wwlqe_mc"),this.setData({isEditMessage:!t})},deleteMsg(e){const{remindMsg:t}=this.data,{message:s}=e.currentTarget.dataset,a=t.filter((e=>e!==s));this.setData({remindMsg:a})},quickInputMsg(e){var t;const{otherText:s}=this.data,{message:a,type:r,index:n}=e.currentTarget.dataset;if(m.$lxLog.mc("b_youxuan_rna64u4y_mc",{index:n,title:a,type:r}),s.length<=50){const e=s.length?`${s}，${a}`:`${a}`;e.length>50?null==(t=null==m?void 0:m.page())||t.toast("最多输入50字"):this.setData({otherText:e})}},saveRemindMessage(e){const{remindMsg:t}=this.data;let s=[];try{s=JSON.parse(JSON.stringify(t))||[]}catch(e){s=[]}let a=-1;if(s.forEach(((t,s)=>{t===e&&(a=s)})),-1!==a){s=[s[a]].concat(...s.slice(0,a),...s.slice(a+1))}else 5===s.length&&s.pop(),s.unshift(e);m.$store.setCache("orderRemindMessage",{orderRemindMessage:s})},textAreaFocus(){m.$lxLog.mc("b_youxuan_fyld3aei_mc")}});