var e=Object.defineProperty,t=(t,s,u)=>(((t,s,u)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[s]=u})(t,"symbol"!=typeof s?s+"":s,u),u);var s=class{constructor(){t(this,"_queue"),this._queue=[]}enqueue(e,t){const s={priority:(t=Object.assign({priority:0},t)).priority,run:e};if(this.size&&this._queue[this.size-1].priority>=t.priority)return void this._queue.push(s);const u=function(e,t,s){let u=0,i=e.length;for(;i>0;){const r=i/2|0;let n=u+r;s(e[n],t)<=0?(u=++n,i-=r+1):i=r}return u}(this._queue,s,((e,t)=>t.priority-e.priority));this._queue.splice(u,0,s)}dequeue(){return this._queue.shift().run}get size(){return this._queue.length}};module.exports=class{constructor(e){if(!("number"==typeof(e=Object.assign({concurrency:1/0,autoStart:!0,queueClass:s},e)).concurrency&&e.concurrency>=1))throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e.concurrency}\` (${typeof e.concurrency})`);this.queue=new e.queueClass,this._queueClass=e.queueClass,this._pendingCount=0,this._concurrency=e.concurrency,this._isPaused=!1===e.autoStart,this._resolveEmpty=()=>{},this._resolveIdle=()=>{}}_next(){this._pendingCount--,this.queue.size>0?this._isPaused||this.queue.dequeue()():(this._resolveEmpty(),this._resolveEmpty=()=>{},0===this._pendingCount&&(this._resolveIdle(),this._resolveIdle=()=>{}))}add(e,t){return new Promise(((s,u)=>{const i=()=>{this._pendingCount++;try{Promise.resolve(e()).then((e=>{s(e),this._next()}),(e=>{u(e),this._next()}))}catch(e){u(e),this._next()}};!this._isPaused&&this._pendingCount<this._concurrency?i():this.queue.enqueue(i,t)}))}get size(){return this.queue.size}get pending(){return this._pendingCount}get isPaused(){return this._isPaused}};