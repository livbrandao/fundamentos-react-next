(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{7155:(e,t,n)=>{Promise.resolve().then(n.bind(n,9651))},9651:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var s=n(5155),r=n(6542),i=n(2115);function a(e){return(0,s.jsx)("div",{className:"flex gap-3",children:e.options.map((t,n)=>(0,s.jsx)("button",{className:"button tertiary",onClick:()=>{var n;return null===(n=e.onSelected)||void 0===n?void 0:n.call(e,t)},children:t},n))})}function o(){let[e,t]=(0,i.useState)("???");return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-3xl font-bold",children:"Quem descobriu o Brasil?"}),(0,s.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,s.jsx)("span",{className:"text-lg text-zinc-500",children:"Resposta:"}),(0,s.jsx)("span",{className:"font-semibold text-sm text-zinc-300 bg-green-600 p-2 rounded-md",children:e})]}),(0,s.jsx)("div",{className:"py-7",children:(0,s.jsx)(a,{options:["Pedro \xc1lvares Cabral","Colombo","\xedndios"],onSelected:function(e){t(e)}})})]})}var l=(0,n(775).A)("outline","arrows-double-ne-sw","IconArrowsDoubleNeSw",[["path",{d:"M3 14l11 -11",key:"svg-0"}],["path",{d:"M10 3h4v4",key:"svg-1"}],["path",{d:"M10 17v4h4",key:"svg-2"}],["path",{d:"M21 10l-11 11",key:"svg-3"}]]),c=n(7764),d=n(7114);function h(){let[e,t]=(0,i.useState)(!1),n=e=>{navigator.clipboard.writeText(e),t(!0),setTimeout(()=>t(!1),2e3)},a='\n  export default function IndirectChildren(props: IndirectChildrenProps) {\n    return (\n      <div className="flex gap-3">\n        {props.options.map((option, index) => (\n          <button\n            key={index}\n            className="button tertiary"\n            onClick={() => \n              props.onSelected?.(option)}>\n            {option}\n          </button>\n        ))}\n      </div>\n    );\n  }\n  ',h='\n  import { useState } from "react";\n  import IndirectChildren from "./IndirectChildren";\n\n  export default function IndirectFather() {\n    const [result, setResult] = useState("???");\n\n    function getResult(result: string) {\n      setResult(result);\n    }\n\n    return (\n      <div>\n        <p className="text-3xl font-bold">\n        Quem descobriu o Brasil?</p>\n        <div className="flex gap-2 items-center">\n          <span className="text-lg text-zinc-500">\n            Resposta:</span>\n          <span className="font-semibold text-sm \n            text-zinc-300 bg-green-600 p-2 \n            rounded-md">\n            {result}\n          </span>\n        </div>\n        <div className="py-7">\n          <IndirectChildren\n            options={["Pedro \xc1lvares Cabral", \n              "Colombo", "\xcdndios"]}\n            onSelected={getResult}\n          />\n        </div>\n      </div>\n    );\n  }\n  ',x='\n  import IndirectFather from "@/components/tree/indirect/IndirectFather";\n\n  export default function IndirectCommunication() {\n    return (\n      <div>\n        <IndirectFather />\n      </div>\n    );\n  }\n  ';return(0,s.jsxs)("div",{className:"container mx-auto p-7 flex flex-col gap-10",children:[(0,s.jsx)(r.A,{title:"Comunica\xe7\xe3o Indireta",icon:l,subtitle:"Exemplo de comunica\xe7\xe3o indireta entre Componentes"}),(0,s.jsxs)("p",{className:"text-zinc-500",children:["Este exemplo demonstra a ",(0,s.jsx)("strong",{children:"comunica\xe7\xe3o indireta"})," entre componentes no React, onde um componente filho pode enviar informa\xe7\xf5es para o pai atrav\xe9s de callbacks."]}),(0,s.jsxs)("div",{className:"flex flex-row gap-3 justify-around",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-3 items-center border border-zinc-600 rounded-md p-6 w-[50%]",children:[(0,s.jsx)("h3",{className:"text-lg font-light mt-5",children:"IndirectChildren"}),(0,s.jsxs)("p",{className:"text-zinc-500 text-center",children:["O componente ",(0,s.jsx)("code",{children:"IndirectChildren"})," recebe um array de op\xe7\xf5es e uma fun\xe7\xe3o ",(0,s.jsx)("code",{children:"onSelected"}),". Quando um bot\xe3o \xe9 clicado, ele chama essa fun\xe7\xe3o passando a op\xe7\xe3o escolhida para o componente pai."]}),(0,s.jsxs)("div",{className:"relative text-white rounded-md overflow-hidden ",children:[(0,s.jsx)("button",{onClick:()=>n(a),className:"absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all",children:e?(0,s.jsx)(c.A,{size:18}):(0,s.jsx)(d.A,{size:18})}),(0,s.jsx)("pre",{className:"bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto text-wrap",children:(0,s.jsx)("code",{children:a})})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-3 ml-4 items-center border border-zinc-600 rounded-md p-6 w-[50%]",children:[(0,s.jsx)("h3",{className:"text-lg font-light mt-5",children:"IndirectFather"}),(0,s.jsxs)("p",{className:"text-zinc-500 text-center",children:["O componente ",(0,s.jsx)("code",{children:"IndirectFather"})," gerencia um estado para armazenar a resposta. Ele passa a fun\xe7\xe3o ",(0,s.jsx)("code",{children:"getResult"})," para"," ",(0,s.jsx)("code",{children:"IndirectChildren"}),", que a chama ao clicar em uma op\xe7\xe3o."]}),(0,s.jsxs)("div",{className:"relative text-white rounded-md overflow-hidden ",children:[(0,s.jsx)("button",{onClick:()=>n(h),className:"absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all",children:e?(0,s.jsx)(c.A,{size:18}):(0,s.jsx)(d.A,{size:18})}),(0,s.jsx)("pre",{className:"bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto text-wrap",children:(0,s.jsx)("code",{children:h})})]})]})]}),(0,s.jsx)("h3",{className:"text-xl font-light mt-5",children:"P\xe1gina principal"}),(0,s.jsxs)("p",{className:"text-zinc-500",children:["A p\xe1gina ",(0,s.jsx)("code",{children:"IndirectCommunication"})," monta a \xe1rvore de componentes ao chamar ",(0,s.jsx)("code",{children:"IndirectFather"}),", que por sua vez chama"," ",(0,s.jsx)("code",{children:"IndirectChildren"})," para oferecer op\xe7\xf5es ao usu\xe1rio."]}),(0,s.jsxs)("div",{className:"flex flex-row gap-3 justify-between",children:[(0,s.jsx)("div",{className:"bg-black px-10 pb-8 rounded-md text-white w-[50%] flex items-center justify-center",children:(0,s.jsx)(o,{})}),(0,s.jsxs)("div",{className:"w-[50%] relative text-white rounded-md overflow-hidden ",children:[(0,s.jsx)("button",{onClick:()=>n(x),className:"absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all",children:e?(0,s.jsx)(c.A,{size:18}):(0,s.jsx)(d.A,{size:18})}),(0,s.jsx)("pre",{className:"bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto text-wrap",children:(0,s.jsx)("code",{children:x})})]})]})]})}},6542:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var s=n(5155);function r(e){return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[e.icon&&(0,s.jsx)(e.icon,{stroke:1,size:20}),(0,s.jsx)("h2",{className:"text-2xl font-bold",children:e.title})]}),e.subtitle&&(0,s.jsx)("p",{className:" text-sm text-zinc-500",children:e.subtitle})]})}},775:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var s=n(2115),r={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};let i=(e,t,n,i)=>{let a=(0,s.forwardRef)((n,a)=>{let{color:o="currentColor",size:l=24,stroke:c=2,title:d,className:h,children:x,...m}=n;return(0,s.createElement)("svg",{ref:a,...r[e],width:l,height:l,className:["tabler-icon","tabler-icon-".concat(t),h].join(" "),..."filled"===e?{fill:o}:{strokeWidth:c,stroke:o},...m},[d&&(0,s.createElement)("title",{key:"svg-title"},d),...i.map(e=>{let[t,n]=e;return(0,s.createElement)(t,n)}),...Array.isArray(x)?x:[x]])});return a.displayName="".concat(n),a}},7114:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var s=(0,n(775).A)("outline","clipboard","IconClipboard",[["path",{d:"M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2",key:"svg-0"}],["path",{d:"M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",key:"svg-1"}]])},7764:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var s=(0,n(775).A)("outline","clipboard-check","IconClipboardCheck",[["path",{d:"M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2",key:"svg-0"}],["path",{d:"M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",key:"svg-1"}],["path",{d:"M9 14l2 2l4 -4",key:"svg-2"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(7155)),_N_E=e.O()}]);