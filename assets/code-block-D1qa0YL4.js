import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{Ot as r,en as i}from"./minerva-web-components-gmidRbuG.js";import{m as a,n as o,p as s,t as c}from"./DocPage-OkRujup2.js";import{n as l,t as u}from"./useI18n-7NNo_JVm.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{A as f,T as p,_ as m,w as h}from"./icons-Dj0E45-e.js";import{n as g,t as _}from"./IconButton-btF6mazk.js";var v;function y(){return(y=e((()=>{g(),v=_})))()}var b,x,S,C,w,T;function E(){return(E=e((()=>{b=`_codeBlock_17268_1`,x=`_root_17268_33`,S=`_copyable_17268_47`,C=`_actions_17268_51`,w=`_visuallyHidden_17268_58`,T={codeBlock:b,root:x,copyable:S,actions:C,visuallyHidden:w}})))()}var D,O,k,A;function j(){return(j=e((()=>{r(),l(),p(),y(),E(),D=t(),O=n(),k=2e3,A=({children:e,"aria-label":t,"aria-labelledby":n,"aria-describedby":r,wrap:a=!0,maxHeight:o=`24rem`,tabIndex:s=0,copyable:c=!1,onCopied:l,className:p,style:g,ref:_,...y})=>{let{t:b}=u(),[x,S]=(0,D.useState)(`idle`),C=(0,D.useRef)(void 0),w=(0,D.useRef)(!0);(0,D.useEffect)(()=>(w.current=!0,()=>{w.current=!1,clearTimeout(C.current)}),[]);let E=e=>{w.current&&(clearTimeout(C.current),S(e),C.current=setTimeout(()=>S(`idle`),k))},A=async()=>{let t=typeof navigator>`u`?void 0:navigator.clipboard;if(typeof t?.writeText!=`function`){E(`failed`);return}try{await t.writeText(e)}catch{E(`failed`);return}E(`copied`),l?.(e)},j={ref:_,role:`region`,tabIndex:s,"aria-label":t??(n===void 0?b(`codeBlock.label`):void 0),"aria-labelledby":n,"aria-describedby":r,"data-wrap":String(a)};if(!c)return(0,O.jsx)(`pre`,{...j,...y,className:i(T.codeBlock,p),style:{maxHeight:o,...g},...d(`code-block`,`region`),children:(0,O.jsx)(`code`,{...d(`code-block`,`code`),children:e})});let M=x===`copied`?b(`codeBlock.copied`):x===`failed`?b(`codeBlock.copyFailed`):``;return(0,O.jsxs)(`div`,{...y,className:i(T.root,p),style:{maxHeight:o,...g},...d(`code-block`,`root`),children:[(0,O.jsx)(`pre`,{...j,className:i(T.codeBlock,T.copyable),...d(`code-block`,`region`),children:(0,O.jsx)(`code`,{...d(`code-block`,`code`),children:e})}),(0,O.jsx)(`div`,{className:T.actions,children:(0,O.jsx)(v,{type:`button`,label:M||b(`codeBlock.copy`),size:`small`,shape:`square`,color:x===`failed`?`danger`:x===`copied`?`success`:`neutral`,icon:(0,O.jsx)(x===`copied`?m:x===`failed`?h:f,{size:16}),onClick:()=>{A()}})}),(0,O.jsx)(`span`,{className:T.visuallyHidden,"aria-live":`polite`,children:M})]})}})))()}function M(){return(0,N.jsx)(A,{"aria-label":`Response payload`,children:P})}var N,P;function F(){return(F=e((()=>{j(),N=n(),P=JSON.stringify({id:42,title:`The Three-Body Problem`,tags:[`sci-fi`,`classic`]},null,2)})))()}function I(){let[e,t]=(0,L.useState)(``);return(0,R.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,R.jsx)(A,{"aria-label":`Install command`,copyable:!0,onCopied:e=>t(`Copied ${e.length} characters`),children:z}),(0,R.jsx)(`output`,{children:e})]})}var L,R,z;function B(){return(B=e((()=>{L=t(),j(),R=n(),z=`pnpm add minerva-design minerva-design/core`})))()}function ee(){return(0,V.jsx)(A,{"aria-label":`Server log`,wrap:!1,maxHeight:160,children:H})}var V,H;function U(){return(U=e((()=>{j(),V=n(),H=[`2026-10-07T09:12:01Z INFO  request id=7f3a path=/api/books?page=1&size=20&sort=rating`,`2026-10-07T09:12:02Z WARN  slow query took=1834ms table=reviews`].join(`
`)})))()}var W;function G(){return(G=e((()=>{W=`import { CodeBlock } from "minerva-design";

const payload = JSON.stringify(
  { id: 42, title: "The Three-Body Problem", tags: ["sci-fi", "classic"] },
  null,
  2,
);

export default function BasicDemo() {
  return <CodeBlock aria-label="Response payload">{payload}</CodeBlock>;
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { useState } from "react";
import { CodeBlock } from "minerva-design";

const command = "pnpm add minerva-design minerva-design/core";

export default function CopyableDemo() {
  const [copied, setCopied] = useState("");
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <CodeBlock
        aria-label="Install command"
        copyable
        onCopied={(text) => setCopied(\`Copied \${text.length} characters\`)}
      >
        {command}
      </CodeBlock>
      <output>{copied}</output>
    </div>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { CodeBlock } from "minerva-design";

const log = [
  "2026-10-07T09:12:01Z INFO  request id=7f3a path=/api/books?page=1&size=20&sort=rating",
  "2026-10-07T09:12:02Z WARN  slow query took=1834ms table=reviews",
].join("\\n");

export default function NoWrapDemo() {
  return (
    <CodeBlock aria-label="Server log" wrap={false} maxHeight={160}>
      {log}
    </CodeBlock>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{F(),B(),U(),G(),q(),Y(),t(),o(),a(),X=n(),Z=s(Object.assign({"./demos/basic.tsx":M,"./demos/copyable.tsx":I,"./demos/no-wrap.tsx":ee}),Object.assign({"./demos/basic.tsx":W,"./demos/copyable.tsx":K,"./demos/no-wrap.tsx":J})),Q=()=>(0,X.jsx)(c,{id:`code-block`,demos:Z})})))()}$();export{Q as default};