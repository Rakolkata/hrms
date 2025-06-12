(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9202],{680:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hr/payroll/generate",function(){return a(91370)}])},8643:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(37876),s=a(89099),n=a(14232),o=a(21575),i=a(30822);function l(e){let{handleLogout:t}=e,a=(0,s.useRouter)(),[l,c]=(0,n.useState)(!1),[d,p]=(0,n.useState)(!1),[m,u]=(0,n.useState)(!1),[h,x]=(0,n.useState)(!1);return(0,r.jsxs)("div",{className:"min-h-screen w-72 bg-gray-900 text-white p-6 shadow-lg",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"HRMS Panel"}),(0,r.jsxs)("ul",{className:"space-y-4",children:[[{name:"Dashboard",path:"/dashboard"},{name:"Add Employee",path:"/registerEmployee"},{name:"View Employees Details",path:"/employeeList"},{name:"Recruitment Management",path:"/Recruitment/recruitment"},{name:"Reporting and Analytics",path:"/ViewDetails"},{name:"Compliance management",path:"/compliance"},{name:"Performance Management",path:"/compliance"}].map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{onClick:()=>a.push(e.path),className:"w-full text-left px-4 py-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition",children:e.name})},e.name)),(0,r.jsxs)("li",{children:[(0,r.jsxs)("button",{onClick:()=>{c(!l)},className:"w-full text-left flex justify-between items-center px-4 py-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition",children:[(0,r.jsx)("span",{children:"Attendance & Leave Management"}),l?(0,r.jsx)(o.A,{size:18}):(0,r.jsx)(i.A,{size:18})]}),l&&(0,r.jsx)("ul",{className:"pl-6 pt-2 space-y-2",children:[{name:"Attendance",path:"/hr/attendance"},{name:"Leave Management",path:"/hr/view-leave-requests"},{name:"Attendance Analytics",path:"/attendance/analytics"}].map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{onClick:()=>a.push(e.path),className:"w-full text-left text-sm px-3 py-2 bg-gray-700 rounded-lg hover:bg-indigo-500 transition",children:e.name})},e.name))})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("button",{onClick:()=>{p(!d)},className:"w-full text-left flex justify-between items-center px-4 py-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition",children:[(0,r.jsx)("span",{children:"Payroll Management"}),d?(0,r.jsx)(o.A,{size:18}):(0,r.jsx)(i.A,{size:18})]}),d&&(0,r.jsx)("ul",{className:"pl-6 pt-2 space-y-2",children:[{name:"View Payrolls",path:"/hr/payroll/payroll-view"},{name:"Generate Payroll",path:"/hr/payroll/generate"}].map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{onClick:()=>a.push(e.path),className:"w-full text-left text-sm px-3 py-2 bg-gray-700 rounded-lg hover:bg-indigo-500 transition",children:e.name})},e.name))})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("button",{onClick:()=>{u(!m)},className:"w-full text-left flex justify-between items-center px-4 py-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition",children:[(0,r.jsx)("span",{children:"Compliance Management"}),m?(0,r.jsx)(o.A,{size:18}):(0,r.jsx)(i.A,{size:18})]}),m&&(0,r.jsx)("ul",{className:"pl-6 pt-2 space-y-2",children:[{name:"Employee Compliance",path:"/compliance/empCompliance"},{name:"Statutory Compliance",path:"/compliance/statutoryCompliance"},{name:"Document Center",path:"/compliance/documentCenter"},{name:"Policy Acknowledgements",path:"/compliance/policyAcknowledge"},{name:"Audit Logs",path:"/compliance/auditLog"},{name:"Reports & Filings",path:"/compliance/ReportFillings"}].map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{onClick:()=>a.push(e.path),className:"w-full text-left text-sm px-3 py-2 bg-gray-700 rounded-lg hover:bg-indigo-500 transition",children:e.name})},e.name))})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("button",{onClick:()=>{x(!h)},className:"w-full text-left flex justify-between items-center px-4 py-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition",children:[(0,r.jsx)("span",{children:"Performance Management"}),h?(0,r.jsx)(o.A,{size:18}):(0,r.jsx)(i.A,{size:18})]}),h&&(0,r.jsx)("ul",{className:"pl-6 pt-2 space-y-2",children:[{name:"Goal Setting",path:"/hr/performance/goals"},{name:"Report Apraisal",path:"/hr/performance/reports"}].map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{onClick:()=>a.push(e.path),className:"w-full text-left text-sm px-3 py-2 bg-gray-700 rounded-lg hover:bg-indigo-500 transition",children:e.name})},e.name))})]}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{onClick:t,className:"w-full text-left px-4 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg mt-6",children:"Logout"})})]})]})}},11713:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var r=a(14232);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase()),o=e=>{let t=n(e);return t.charAt(0).toUpperCase()+t.slice(1)},i=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,r.forwardRef)((e,t)=>{let{color:a="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:c="",children:d,iconNode:p,...m}=e;return(0,r.createElement)("svg",{ref:t,...l,width:s,height:s,stroke:a,strokeWidth:o?24*Number(n)/Number(s):n,className:i("lucide",c),...m},[...p.map(e=>{let[t,a]=e;return(0,r.createElement)(t,a)}),...Array.isArray(d)?d:[d]])}),d=(e,t)=>{let a=(0,r.forwardRef)((a,n)=>{let{className:l,...d}=a;return(0,r.createElement)(c,{ref:n,iconNode:t,className:i("lucide-".concat(s(o(e))),"lucide-".concat(e),l),...d})});return a.displayName=o(e),a}},21575:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(11713).A)("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},30822:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(11713).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},89099:(e,t,a)=>{e.exports=a(48253)},91370:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ed});var r,s=a(37876),n=a(14232),o=a(8643),i=a(89099);let l={data:""},c=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,u=(e,t)=>{let a="",r="",s="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?a=n+" "+o+";":r+="f"==n[1]?u(o,n):n+"{"+u(o,"k"==n[1]?"":t)+"}":"object"==typeof o?r+=u(o,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=u.p?u.p(n,o):n+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+r},h={},x=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+x(e[a]);return t}return e},g=(e,t,a,r,s)=>{let n=x(e),o=h[n]||(h[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!h[o]){let t=n!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(p,""));)t[4]?r.shift():t[3]?(a=t[3].replace(m," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(m," ").trim();return r[0]})(e);h[o]=u(s?{["@keyframes "+o]:t}:t,a?"":"."+o)}let i=a&&h.g?h.g:null;return a&&(h.g=h[o]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(h[o],t,r,i),o},y=(e,t,a)=>e.reduce((e,r,s)=>{let n=t[s];if(n&&n.call){let e=n(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==n?"":n)},"");function f(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?y(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,c(t.target),t.g,t.o,t.k)}f.bind({g:1});let b,w,v,N=f.bind({k:1});function A(e,t){let a=this||{};return function(){let r=arguments;function s(n,o){let i=Object.assign({},n),l=i.className||s.className;a.p=Object.assign({theme:w&&w()},i),a.o=/ *go\d+/.test(l),i.className=f.apply(a,r)+(l?" "+l:""),t&&(i.ref=o);let c=e;return e[0]&&(c=i.as||e,delete i.as),v&&c[0]&&v(i),b(c,i)}return t?t(s):s}}var k=e=>"function"==typeof e,C=(e,t)=>k(e)?e(t):e,E=(()=>{let e=0;return()=>(++e).toString()})(),$=(()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return z(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},P=[],_={toasts:[],pausedAt:void 0},D=e=>{_=z(_,e),P.forEach(e=>{e(_)})},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,a]=j(_),r=Q(_);H(()=>(r.current!==_&&a(_),P.push(a),()=>{let e=P.indexOf(a);e>-1&&P.splice(e,1)}),[]);let s=t.toasts.map(t=>{var a,r,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},M=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||E()}),R=e=>(t,a)=>{let r=M(t,e,a);return D({type:2,toast:r}),r.id},G=(e,t)=>R("blank")(e,t);G.error=R("error"),G.success=R("success"),G.loading=R("loading"),G.custom=R("custom"),G.dismiss=e=>{D({type:3,toastId:e})},G.remove=e=>D({type:4,toastId:e}),G.promise=(e,t,a)=>{let r=G.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?C(t.success,e):void 0;return s?G.success(s,{id:r,...a,...null==a?void 0:a.success}):G.dismiss(r),e}).catch(e=>{let s=t.error?C(t.error,e):void 0;s?G.error(s,{id:r,...a,...null==a?void 0:a.error}):G.dismiss(r)}),e};var F=(e,t)=>{D({type:1,toast:{id:e,height:t}})},O=()=>{D({type:5,time:Date.now()})},I=new Map,q=1e3,T=(e,t=q)=>{if(I.has(e))return;let a=setTimeout(()=>{I.delete(e),D({type:4,toastId:e})},t);I.set(e,a)},V=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Z=N`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=N`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,W=A("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,X=N`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=A("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${X} 1s linear infinite;
`,J=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=N`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Y=A("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ee=A("div")`
  position: absolute;
`,et=A("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ea=N`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,er=A("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ea} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,es=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?n.createElement(er,null,t):t:"blank"===a?null:n.createElement(et,null,n.createElement(B,{...r}),"loading"!==a&&n.createElement(ee,null,"error"===a?n.createElement(W,{...r}):n.createElement(Y,{...r})))},en=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eo=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=A("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,el=A("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ec=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[en(a),eo(a)];return{animation:t?`${N(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${N(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};function ed(){let[e,t]=(0,n.useState)([]),[a,r]=(0,n.useState)(!0),l=(0,i.useRouter)();(0,n.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/hr/employees");if(!e.ok)throw Error("Failed to fetch employees");let{employees:a=[]}=await e.json();t(a)}catch(e){console.error(e),G.error("Failed to load employees.")}finally{r(!1)}})()},[]),(0,n.useEffect)(()=>{let{status:e,empid:t}=l.query;"success"===e&&t&&G.success("Payroll generated for Employee ID: ".concat(t))},[l.query]);let c=e=>{l.push("/hr/payroll/form/".concat(e))};return(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(o.A,{handleLogout:()=>{}}),(0,s.jsxs)("div",{className:"flex-1 p-10 bg-white",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-center text-indigo-900 mb-8",children:"Generate Payroll"}),a?(0,s.jsx)("div",{className:"text-center",children:"Loading..."}):(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"min-w-full table-auto",children:[(0,s.jsx)("thead",{className:"bg-indigo-900 text-white",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-6 py-3 text-left",children:"Employee ID"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left",children:"Name"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left",children:"Email"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left",children:"Phone"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left",children:"Payroll Status"}),(0,s.jsx)("th",{className:"px-6 py-3",children:"Action"})]})}),(0,s.jsx)("tbody",{className:"text-gray-800",children:e.map(e=>(0,s.jsxs)("tr",{className:"hover:bg-indigo-100 transition duration-200",children:[(0,s.jsx)("td",{className:"px-6 py-3",children:e.empid}),(0,s.jsx)("td",{className:"px-6 py-3",children:e.name}),(0,s.jsx)("td",{className:"px-6 py-3",children:e.email}),(0,s.jsx)("td",{className:"px-6 py-3",children:e.phone}),(0,s.jsx)("td",{className:"px-6 py-3",children:e.payrollGenerated?(0,s.jsx)("span",{className:"text-green-600 font-semibold",children:"Generated"}):(0,s.jsx)("span",{className:"text-yellow-600 font-semibold",children:"Pending"})}),(0,s.jsx)("td",{className:"px-6 py-3",children:(0,s.jsx)("button",{onClick:()=>c(e.empid),disabled:e.payrollGenerated,className:"px-4 py-2 rounded-lg ".concat(e.payrollGenerated?"bg-gray-400 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-500 text-white"),children:e.payrollGenerated?"Already Generated":"Generate Payroll"})})]},e.empid))})]})})]})]})}n.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?ec(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(es,{toast:e}),i=n.createElement(el,{...e.ariaProps},C(e.message,e));return n.createElement(ei,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:i}):n.createElement(n.Fragment,null,o,i))}),r=n.createElement,u.p=void 0,b=r,w=void 0,v=void 0,f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}},e=>{var t=t=>e(e.s=t);e.O(0,[636,6593,8792],()=>t(680)),_N_E=e.O()}]);