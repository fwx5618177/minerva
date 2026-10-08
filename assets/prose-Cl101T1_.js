import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{o as r,vt as i}from"./minerva-web-components-ByJsjP0z.js";import{m as a,n as o,p as s,t as c}from"./DocPage-CVA4UCUb.js";import{t as l}from"./stylingHooks-GjssfG7q.js";import{n as u,t as d}from"./Slot-BkGCus0Y.js";var f,p;function m(){return(m=e((()=>{f=`_prose_3xiks_1`,p={prose:f}})))()}var h,g;function _(){return(_=e((()=>{i(),d(),m(),h=n(),g=({asChild:e=!1,className:t,ref:n,...i})=>(0,h.jsx)(e?u:`div`,{ref:n,className:r(p.prose,t),...i,...l(`prose`,`root`)})})))()}function v(){return(0,y.jsx)(g,{asChild:!0,children:(0,y.jsxs)(`article`,{"aria-label":`Release notes`,children:[(0,y.jsx)(`h3`,{children:`Release notes`}),(0,y.jsx)(`p`,{children:`With asChild the typography is applied to your own element (an article or an editor host) without an extra wrapper.`})]})})}var y;function b(){return(b=e((()=>{_(),y=n()})))()}function x(){return(0,S.jsxs)(g,{children:[(0,S.jsx)(`h2`,{children:`Chapter one`}),(0,S.jsxs)(`p`,{children:[`Prose styles `,(0,S.jsx)(`a`,{href:`#notes`,children:`links`}),`, `,(0,S.jsx)(`code`,{children:`inline code`}),`, lists, quotes and tables written as plain semantic HTML.`]}),(0,S.jsx)(`blockquote`,{children:`Sanitize untrusted HTML before rendering it.`}),(0,S.jsxs)(`ul`,{children:[(0,S.jsx)(`li`,{children:`No wrapper surface or padding`}),(0,S.jsx)(`li`,{children:`Author inline styles stay authoritative`})]}),(0,S.jsx)(`pre`,{children:(0,S.jsx)(`code`,{children:`const answer = 42;`})})]})}var S;function C(){return(C=e((()=>{_(),S=n()})))()}var w;function T(){return(T=e((()=>{w=`import { Prose } from "minerva-design";

export default function AsChildDemo() {
  return (
    <Prose asChild>
      <article aria-label="Release notes">
        <h3>Release notes</h3>
        <p>
          With asChild the typography is applied to your own element (an article
          or an editor host) without an extra wrapper.
        </p>
      </article>
    </Prose>
  );
}
`})))()}var E;function D(){return(D=e((()=>{E=`import { Prose } from "minerva-design";

export default function BasicDemo() {
  return (
    <Prose>
      <h2>Chapter one</h2>
      <p>
        Prose styles <a href="#notes">links</a>, <code>inline code</code>,
        lists, quotes and tables written as plain semantic HTML.
      </p>
      <blockquote>Sanitize untrusted HTML before rendering it.</blockquote>
      <ul>
        <li>No wrapper surface or padding</li>
        <li>Author inline styles stay authoritative</li>
      </ul>
      <pre>
        <code>{"const answer = 42;"}</code>
      </pre>
    </Prose>
  );
}
`})))()}var O,k,A;function j(){return(j=e((()=>{b(),C(),T(),D(),t(),o(),a(),O=n(),k=s(Object.assign({"./demos/as-child.tsx":v,"./demos/basic.tsx":x}),Object.assign({"./demos/as-child.tsx":w,"./demos/basic.tsx":E})),A=()=>(0,O.jsx)(c,{id:`prose`,demos:k})})))()}j();export{A as default};