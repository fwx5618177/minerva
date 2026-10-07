import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,c as i,k as a,n as o,s,t as c}from"./DocPage-HgWiqH91.js";import{n as l,t as u}from"./useI18n-CYdr3eVz.js";import{A as d,T as f,_ as p,w as m}from"./icons-BaZJL-85.js";import{n as h,t as g}from"./IconButton-BvJguNAN.js";var _;function v(){return(v=e((()=>{h(),_=g})))()}var y,b,x,S,C,w;function T(){return(T=e((()=>{y=`_codeBlock_17268_1`,b=`_root_17268_33`,x=`_copyable_17268_47`,S=`_actions_17268_51`,C=`_visuallyHidden_17268_58`,w={codeBlock:y,root:b,copyable:x,actions:S,visuallyHidden:C}})))()}var E,D,O,k;function A(){return(A=e((()=>{r(),l(),f(),v(),T(),E=t(),D=n(),O=2e3,k=({children:e,"aria-label":t,"aria-labelledby":n,"aria-describedby":r,wrap:i=!0,maxHeight:o=`24rem`,tabIndex:s=0,copyable:c=!1,className:l,style:f,ref:h,...g})=>{let{t:v}=u(),[y,b]=(0,E.useState)(`idle`),x=(0,E.useRef)(void 0),S=(0,E.useRef)(!0);(0,E.useEffect)(()=>(S.current=!0,()=>{S.current=!1,clearTimeout(x.current)}),[]);let C=e=>{S.current&&(clearTimeout(x.current),b(e),x.current=setTimeout(()=>b(`idle`),O))},T=async()=>{let t=typeof navigator>`u`?void 0:navigator.clipboard;if(typeof t?.writeText!=`function`){C(`failed`);return}try{await t.writeText(e),C(`copied`)}catch{C(`failed`)}},k={ref:h,role:`region`,tabIndex:s,"aria-label":t??(n===void 0?v(`codeBlock.label`):void 0),"aria-labelledby":n,"aria-describedby":r,"data-wrap":String(i)};if(!c)return(0,D.jsx)(`pre`,{...k,...g,className:a(w.codeBlock,l),style:{maxHeight:o,...f},children:(0,D.jsx)(`code`,{children:e})});let A=y===`copied`?v(`codeBlock.copied`):y===`failed`?v(`codeBlock.copyFailed`):``;return(0,D.jsxs)(`div`,{...g,className:a(w.root,l),style:{maxHeight:o,...f},children:[(0,D.jsx)(`pre`,{...k,className:a(w.codeBlock,w.copyable),children:(0,D.jsx)(`code`,{children:e})}),(0,D.jsx)(`div`,{className:w.actions,children:(0,D.jsx)(_,{type:`button`,label:A||v(`codeBlock.copy`),size:`small`,shape:`square`,color:y===`failed`?`danger`:y===`copied`?`success`:`neutral`,icon:(0,D.jsx)(y===`copied`?p:y===`failed`?m:d,{size:16}),onClick:()=>{T()}})}),(0,D.jsx)(`span`,{className:w.visuallyHidden,"aria-live":`polite`,children:A})]})}})))()}function j(){return(0,M.jsx)(k,{"aria-label":`Response payload`,children:N})}var M,N;function P(){return(P=e((()=>{A(),M=n(),N=JSON.stringify({id:42,title:`The Three-Body Problem`,tags:[`sci-fi`,`classic`]},null,2)})))()}function F(){return(0,I.jsx)(k,{"aria-label":`Install command`,copyable:!0,children:L})}var I,L;function R(){return(R=e((()=>{A(),I=n(),L=`pnpm add @minerva/lib-core @minerva/core`})))()}function z(){return(0,B.jsx)(k,{"aria-label":`Server log`,wrap:!1,maxHeight:160,children:V})}var B,V;function H(){return(H=e((()=>{A(),B=n(),V=[`2026-10-07T09:12:01Z INFO  request id=7f3a path=/api/books?page=1&size=20&sort=rating`,`2026-10-07T09:12:02Z WARN  slow query took=1834ms table=reviews`].join(`
`)})))()}var U;function W(){return(W=e((()=>{U=`import { CodeBlock } from "@minerva/lib-core";

const payload = JSON.stringify(
  { id: 42, title: "The Three-Body Problem", tags: ["sci-fi", "classic"] },
  null,
  2,
);

export default function BasicDemo() {
  return <CodeBlock aria-label="Response payload">{payload}</CodeBlock>;
}
`})))()}var G;function K(){return(K=e((()=>{G=`import { CodeBlock } from "@minerva/lib-core";

const command = "pnpm add @minerva/lib-core @minerva/core";

export default function CopyableDemo() {
  return (
    <CodeBlock aria-label="Install command" copyable>
      {command}
    </CodeBlock>
  );
}
`})))()}var q;function J(){return(J=e((()=>{q=`import { CodeBlock } from "@minerva/lib-core";

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
`})))()}var Y,X,Z;function Q(){return(Q=e((()=>{P(),R(),H(),W(),K(),J(),t(),o(),i(),Y=n(),X=s(Object.assign({"./demos/basic.tsx":j,"./demos/copyable.tsx":F,"./demos/no-wrap.tsx":z}),Object.assign({"./demos/basic.tsx":U,"./demos/copyable.tsx":G,"./demos/no-wrap.tsx":q})),Z=()=>(0,Y.jsx)(c,{id:`code-block`,demos:X})})))()}Q();export{Z as default};