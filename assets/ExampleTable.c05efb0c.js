import{d as P,_ as j,o as O,c as F,p as Q,b as W,a as E,r as R,e as M,w as q,F as Z,f as tt,t as D,g as k,i as et,j as z,E as A,k as nt,l as rt}from"./index.c1ded10e.js";const ot=P({name:"Banner",setup(){}}),at={class:"banner"},it=[(n=>(Q("data-v-1e65d974"),n=n(),W(),n))(()=>E("div",{class:"repo"},[E("p",null,"\u{1F4E6} @hoc-element/table"),E("a",{href:"https://github.com/pdsuwwz/hoc-element-table",target:"_blank"},[E("svg",{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true",class:"octicon octicon-mark-github v-align-middle"},[E("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})])])],-1))];var ct=j(ot,[["render",function(n,f,g,i,e,t){return O(),F("div",at,it)}],["__scopeId","data-v-1e65d974"]]);const ut=P({props:{modelValue:{type:Object,default:()=>({})}}}),lt={class:"block"},st=E("span",{class:"demonstration"},"\u8F6E\u64AD\u7EC4\u4EF6",-1),dt={class:"small"};var ft=j(ut,[["render",function(n,f,g,i,e,t){const c=R("el-carousel-item"),p=R("el-carousel");return O(),F("div",null,[E("div",lt,[st,M(p,{height:"150px"},{default:q(()=>[(O(),F(Z,null,tt(3,s=>M(c,{key:s},{default:q(()=>[E("h3",dt,D(n.modelValue),1)]),_:2},1024)),64))]),_:1})])])}]]);const pt=P({props:{modelValue:{type:Object,default:()=>({})}},setup:()=>({url:k("https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg")})}),vt={class:"demo-image"};var V,gt=j(pt,[["render",function(n,f,g,i,e,t){const c=R("el-image");return O(),F("div",vt,[M(c,{style:{width:"100px",height:"100px"},src:n.url,fit:"contain"},null,8,["src"]),E("p",null,D(n.modelValue),1)])}],["__scopeId","data-v-989ae37c"]]),yt={exports:{}};V=function(){return function(){var n={686:function(i,e,t){t.d(e,{default:function(){return X}});var c=t(279),p=t.n(c),s=t(370),d=t.n(s),b=t(817),y=t.n(b);function w(u){try{return document.execCommand(u)}catch{return!1}}var m=function(u){var r=y()(u);return w("cut"),r},a=function(u,r){var l=function(x){var T=document.documentElement.getAttribute("dir")==="rtl",o=document.createElement("textarea");o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[T?"right":"left"]="-9999px";var v=window.pageYOffset||document.documentElement.scrollTop;return o.style.top="".concat(v,"px"),o.setAttribute("readonly",""),o.value=x,o}(u);r.container.appendChild(l);var h=y()(l);return w("copy"),l.remove(),h},S=function(u){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";return typeof u=="string"?l=a(u,r):u instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(u==null?void 0:u.type)?l=a(u.value,r):(l=y()(u),w("copy")),l};function L(u){return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},L(u)}var G=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=u.action,l=r===void 0?"copy":r,h=u.container,x=u.target,T=u.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(x!==void 0){if(!x||L(x)!=="object"||x.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(l==="copy"&&x.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(x.hasAttribute("readonly")||x.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return T?S(T,{container:h}):x?l==="cut"?m(x):S(x,{container:h}):void 0};function B(u){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},B(u)}function $(u,r){for(var l=0;l<r.length;l++){var h=r[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}function H(u,r){return H=Object.setPrototypeOf||function(l,h){return l.__proto__=h,l},H(u,r)}function J(u){var r=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var l,h=N(u);if(r){var x=N(this).constructor;l=Reflect.construct(h,arguments,x)}else l=h.apply(this,arguments);return U(this,l)}}function U(u,r){return!r||B(r)!=="object"&&typeof r!="function"?function(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}(u):r}function N(u){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},N(u)}function I(u,r){var l="data-clipboard-".concat(u);if(r.hasAttribute(l))return r.getAttribute(l)}var Y=function(u){(function(o,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(v&&v.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),v&&H(o,v)})(T,u);var r,l,h,x=J(T);function T(o,v){var _;return function(C,K){if(!(C instanceof K))throw new TypeError("Cannot call a class as a function")}(this,T),(_=x.call(this)).resolveOptions(v),_.listenClick(o),_}return r=T,l=[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=B(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var v=this;this.listener=d()(o,"click",function(_){return v.onClick(_)})}},{key:"onClick",value:function(o){var v=o.delegateTarget||o.currentTarget,_=this.action(v)||"copy",C=G({action:_,container:this.container,target:this.target(v),text:this.text(v)});this.emit(C?"success":"error",{action:_,text:C,trigger:v,clearSelection:function(){v&&v.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return I("action",o)}},{key:"defaultTarget",value:function(o){var v=I("target",o);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(o){return I("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],h=[{key:"copy",value:function(o){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return S(o,v)}},{key:"cut",value:function(o){return m(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof o=="string"?[o]:o,_=!!document.queryCommandSupported;return v.forEach(function(C){_=_&&!!document.queryCommandSupported(C)}),_}}],l&&$(r.prototype,l),h&&$(r,h),T}(p()),X=Y},828:function(i){if(typeof Element!="undefined"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}i.exports=function(t,c){for(;t&&t.nodeType!==9;){if(typeof t.matches=="function"&&t.matches(c))return t;t=t.parentNode}}},438:function(i,e,t){var c=t(828);function p(d,b,y,w,m){var a=s.apply(this,arguments);return d.addEventListener(y,a,m),{destroy:function(){d.removeEventListener(y,a,m)}}}function s(d,b,y,w){return function(m){m.delegateTarget=c(m.target,b),m.delegateTarget&&w.call(d,m)}}i.exports=function(d,b,y,w,m){return typeof d.addEventListener=="function"?p.apply(null,arguments):typeof y=="function"?p.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(a){return p(a,b,y,w,m)}))}},879:function(i,e){e.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},e.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||e.node(t[0]))},e.string=function(t){return typeof t=="string"||t instanceof String},e.fn=function(t){return Object.prototype.toString.call(t)==="[object Function]"}},370:function(i,e,t){var c=t(879),p=t(438);i.exports=function(s,d,b){if(!s&&!d&&!b)throw new Error("Missing required arguments");if(!c.string(d))throw new TypeError("Second argument must be a String");if(!c.fn(b))throw new TypeError("Third argument must be a Function");if(c.node(s))return function(y,w,m){return y.addEventListener(w,m),{destroy:function(){y.removeEventListener(w,m)}}}(s,d,b);if(c.nodeList(s))return function(y,w,m){return Array.prototype.forEach.call(y,function(a){a.addEventListener(w,m)}),{destroy:function(){Array.prototype.forEach.call(y,function(a){a.removeEventListener(w,m)})}}}(s,d,b);if(c.string(s))return function(y,w,m){return p(document.body,y,w,m)}(s,d,b);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(i){i.exports=function(e){var t;if(e.nodeName==="SELECT")e.focus(),t=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var c=e.hasAttribute("readonly");c||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),c||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var p=window.getSelection(),s=document.createRange();s.selectNodeContents(e),p.removeAllRanges(),p.addRange(s),t=p.toString()}return t}},279:function(i){function e(){}e.prototype={on:function(t,c,p){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:c,ctx:p}),this},once:function(t,c,p){var s=this;function d(){s.off(t,d),c.apply(p,arguments)}return d._=c,this.on(t,d,p)},emit:function(t){for(var c=[].slice.call(arguments,1),p=((this.e||(this.e={}))[t]||[]).slice(),s=0,d=p.length;s<d;s++)p[s].fn.apply(p[s].ctx,c);return this},off:function(t,c){var p=this.e||(this.e={}),s=p[t],d=[];if(s&&c)for(var b=0,y=s.length;b<y;b++)s[b].fn!==c&&s[b].fn._!==c&&d.push(s[b]);return d.length?p[t]=d:delete p[t],this}},i.exports=e,i.exports.TinyEmitter=e}},f={};function g(i){if(f[i])return f[i].exports;var e=f[i]={exports:{}};return n[i](e,e.exports,g),e.exports}return g.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return g.d(e,{a:e}),e},g.d=function(i,e){for(var t in e)g.o(e,t)&&!g.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},g.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},g(686)}().default};var mt=et(yt.exports=V());const bt=P({components:{Banner:ct,TableChildrenA:ft,TableChildrenB:gt},directives:{clipboard:{beforeMount:function(n,f,g){if(f.arg==="success")n._v_clipboard_success=f.value;else if(f.arg==="error")n._v_clipboard_error=f.value;else{const i=new mt(n,{text:function(){return f.value},action:function(){return f.arg==="cut"?"cut":"copy"}});i.on("success",function(e){const t=n._v_clipboard_success;t&&t(e)}),i.on("error",function(e){const t=n._v_clipboard_error;t&&t(e)}),n._v_clipboard=i}},updated:function(n,f){f.arg==="success"?n._v_clipboard_success=f.value:f.arg==="error"?n._v_clipboard_error=f.value:(n._v_clipboard.text=function(){return f.value},n._v_clipboard.action=function(){return f.arg==="cut"?"cut":"copy"})},unmounted:function(n,f){f.arg==="success"?delete n._v_clipboard_success:f.arg==="error"?delete n._v_clipboard_error:(n._v_clipboard.destroy(),delete n._v_clipboard)}}},setup(){const n=k(!1),f=k("right"),g=k("center"),i=k(null),e=k(!0),t=k({}),c=k({}),p=z(()=>({data:[{id:0,name:"\u738B\u5C0F\u864E1",isForbid:!1},{id:1,name:"\u738B\u5C0F\u864E2",isForbid:!1},{id:2,name:"\u738B\u5C0F\u864E3",isForbid:!1},{id:3,name:"\u738B\u5C0F\u864E4",isForbid:!1}],pagination:{total:3,pageSize:10,currentPage:1}})),s=z(()=>[{attrs:{label:"\u7F16\u53F7",align:g.value,prop:"id"}},{attrs:{label:"\u540D\u79F0",prop:"name",align:g.value,width:200}},{attrs:{label:"\u72B6\u6001",prop:"isForbid",align:g.value,width:200},render:a=>a?"\u2716\uFE0F\u7981\u7528\u4E2D":"\u2714\uFE0F\u975E\u7981\u7528"},{attrs:{label:"\u8BE6\u60C5A",align:g.value,width:400},renderComponent:a=>[{name:"TableChildrenA",data:a},{name:"el-input",data:a.name},{name:"el-rate",data:a.id}]},{attrs:{label:"\u8BE6\u60C5B",align:g.value,width:400},renderComponent:a=>[{name:"TableChildrenB",data:a}]},{attrs:{label:"\u64CD\u4F5C",width:"300",align:g.value,fixed:f.value},renderHTML:a=>[{attrs:{label:"\u67E5\u770B",type:"primary",text:!0,bg:!0},el:"button",click(){A({message:JSON.stringify(a)})}},{attrs:{label:"\u7F16\u8F91",type:"primary",text:!0,bg:!0},el:"button",click(){A({message:`\u7F16\u53F7${a.id} router -> \u5DF2\u8DF3\u8F6C\u5230\u7F16\u8F91\u9875\u9762\uFF01`})}},{attrs:{label:"\u53D1\u5E03",type:"primary",text:!0,bg:!0},el:"button",click(){y(a)}},a.isForbid?{attrs:{label:"\u89E3\u9664\u7981\u7528",text:!0,bg:!0,type:"primary",disabled:!1,style:{color:"#e6a23c"}},el:"button",click(){w(a)}}:{attrs:{label:"\u7981\u7528",type:"primary",text:!0,bg:!0,disabled:!1},el:"button",click(){w(a)}},{el:"el-divider"},{attrs:{label:"\u6307\u4EE4\u6D4B\u8BD5-\u590D\u5236\u94FE\u63A5",type:"primary",directives:[{name:"clipboard",value:JSON.stringify(a),arg:"copy"}]},el:"button",click(){m(a)}}]}]),d=(a=1e3)=>new Promise(S=>setTimeout(S,a)),b=async()=>{n.value=!0,await d(),t.value=p.value,n.value=!1},y=a=>{nt.confirm(`\u6B64\u64CD\u4F5C\u4F1A\u5C06${a.name}\u53D1\u5E03\u5230\u7EBF\u4E0A, \u662F\u5426\u7EE7\u7EED?`,`\u7F16\u53F7${a.id}\u63D0\u793A`,{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{A({type:"success",message:"\u53D1\u5E03\u6210\u529F!"})}).catch(()=>{A({type:"info",message:"\u5DF2\u53D6\u6D88\u53D1\u5E03"})})},w=async a=>{n.value=!0,await d(),n.value=!1,a.isForbid=!a.isForbid},m=a=>{A({type:"success",message:"\u6307\u4EE4\u6D4B\u8BD5-\u590D\u5236\u6210\u529F\uFF0C\u53EF\u4EE5\u7C98\u8D34\u5566!"})};return b(),{singleTable:c,loading:n,fixedRight:f,align:g,tableHeight:i,border:e,sourceList:t,mockData:p,config:s,sleep:d,setFixedRight:()=>{f.value?f.value=!1:f.value="right"},setFixedRow:()=>{i.value?i.value="":i.value="350"},setLabelCenter:()=>{g.value?g.value="":g.value="center"},setBorder:()=>{e.value=!e.value},handleRowClick:(a,S,L)=>{A({dangerouslyUseHTMLString:!0,message:`row-click \u4E8B\u4EF6\uFF0C\u5355\u51FB\u4E86<span style="color: red;"> \u7B2C${a.$index}\u884C </span>\u8BF7\u770B\u63A7\u5236\u53F0 log`})},setCurrentRow:a=>{const S=c.value.$refs.hocElTable,L=a!==void 0?t.value.data[a]:"";S.setCurrentRow(L)},setPublish:y,setForbid:w,copyLink:m,getList:b}}}),ht={class:"box-container"},wt={class:"content"};var Tt=j(P({name:"ExampleTable",components:{TableList:j(bt,[["render",function(n,f,g,i,e,t){const c=R("Banner"),p=R("hoc-el-table");return O(),F("div",ht,[M(c),E("div",wt,[M(p,{ref:"singleTable",title:"\u8868\u683CDemo",source:n.sourceList.data,pagination:n.sourceList.pagination,config:n.config,loading:n.loading,border:n.border,height:n.tableHeight,"highlight-current-row":"","table-events":{"row-click":n.handleRowClick},"action-list":[{text:"\u56FA\u5B9A\u8868\u5934",action:()=>n.setFixedRow()},{text:"\u56FA\u5B9A\u6700\u53F3\u5219\u5217",action:()=>n.setFixedRight()},{text:"\u5C45\u4E2D\u8868\u5934label",action:()=>n.setLabelCenter()},{text:"\u6DFB\u52A0\u8FB9\u6846",action:()=>n.setBorder()},{text:"\u9AD8\u4EAE\u9009\u4E2D\u7B2C0\u884C",action:()=>n.setCurrentRow(0)},{text:"\u9AD8\u4EAE\u9009\u4E2D\u7B2C1\u884C",action:()=>n.setCurrentRow(1)},{text:"\u53D6\u6D88\u9009\u4E2D\u884C",action:()=>n.setCurrentRow()}],onGetList:n.getList},null,8,["source","pagination","config","loading","border","height","table-events","action-list","onGetList"])])])}],["__scopeId","data-v-736e15bd"]])}}),[["render",function(n,f,g,i,e,t){const c=R("TableList");return O(),rt(c)}]]);export{Tt as default};
