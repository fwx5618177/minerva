import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{n as a,t as o}from"./Slot-GoEM-t4f.js";import{c as s,n as c,s as l,t as u}from"./DocPage-DEXoN4OO.js";var d,f;function p(){return(p=e((()=>{d=`_prose_rrx7r_1`,f={prose:d}})))()}var m,h;function g(){return(g=e((()=>{i(),o(),p(),m=n(),h=({asChild:e=!1,className:t,ref:n,...i})=>(0,m.jsx)(e?a:`div`,{ref:n,className:r(f.prose,t),...i})})))()}function _(){return(0,v.jsx)(h,{asChild:!0,children:(0,v.jsxs)(`article`,{"aria-label":`Release notes`,children:[(0,v.jsx)(`h3`,{children:`Release notes`}),(0,v.jsx)(`p`,{children:`With asChild the typography is applied to your own element (an article or an editor host) without an extra wrapper.`})]})})}var v;function y(){return(y=e((()=>{g(),v=n()})))()}function b(){return(0,x.jsxs)(h,{children:[(0,x.jsx)(`h2`,{children:`Chapter one`}),(0,x.jsxs)(`p`,{children:[`Prose styles `,(0,x.jsx)(`a`,{href:`#notes`,children:`links`}),`, `,(0,x.jsx)(`code`,{children:`inline code`}),`, lists, quotes and tables written as plain semantic HTML.`]}),(0,x.jsx)(`blockquote`,{children:`Sanitize untrusted HTML before rendering it.`}),(0,x.jsxs)(`ul`,{children:[(0,x.jsx)(`li`,{children:`No wrapper surface or padding`}),(0,x.jsx)(`li`,{children:`Author inline styles stay authoritative`})]}),(0,x.jsx)(`pre`,{children:(0,x.jsx)(`code`,{children:`const answer = 42;`})})]})}var x;function S(){return(S=e((()=>{g(),x=n()})))()}var C;function w(){return(w=e((()=>{C=`import { Prose } from "@minerva/lib-core";

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
`})))()}var T;function E(){return(E=e((()=>{T=`import { Prose } from "@minerva/lib-core";

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
`})))()}var D,O,k;function A(){return(A=e((()=>{y(),S(),w(),E(),t(),c(),s(),D=n(),O=l(Object.assign({"./demos/as-child.tsx":_,"./demos/basic.tsx":b}),Object.assign({"./demos/as-child.tsx":C,"./demos/basic.tsx":T})),k=()=>(0,D.jsx)(u,{id:`prose`,demos:O})})))()}A();export{k as default};