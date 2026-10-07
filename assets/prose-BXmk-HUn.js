import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Rt as r,a as i}from"./dist-DkgrNLMS.js";import{c as a,n as o,s,t as c}from"./DocPage-Bnv84vTs.js";function l(){return(0,u.jsx)(i,{asChild:!0,children:(0,u.jsxs)(`article`,{"aria-label":`Release notes`,children:[(0,u.jsx)(`h3`,{children:`Release notes`}),(0,u.jsx)(`p`,{children:`With asChild the typography is applied to your own element (an article or an editor host) without an extra wrapper.`})]})})}var u;function d(){return(d=e((()=>{r(),u=n()})))()}function f(){return(0,p.jsxs)(i,{children:[(0,p.jsx)(`h2`,{children:`Chapter one`}),(0,p.jsxs)(`p`,{children:[`Prose styles `,(0,p.jsx)(`a`,{href:`#notes`,children:`links`}),`, `,(0,p.jsx)(`code`,{children:`inline code`}),`, lists, quotes and tables written as plain semantic HTML.`]}),(0,p.jsx)(`blockquote`,{children:`Sanitize untrusted HTML before rendering it.`}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:`No wrapper surface or padding`}),(0,p.jsx)(`li`,{children:`Author inline styles stay authoritative`})]}),(0,p.jsx)(`pre`,{children:(0,p.jsx)(`code`,{children:`const answer = 42;`})})]})}var p;function m(){return(m=e((()=>{r(),p=n()})))()}var h;function g(){return(g=e((()=>{h=`import { Prose } from "@minerva/lib-core";

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
`})))()}var _;function v(){return(v=e((()=>{_=`import { Prose } from "@minerva/lib-core";

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
`})))()}var y,b,x;function S(){return(S=e((()=>{d(),m(),g(),v(),t(),o(),a(),y=n(),b=s(Object.assign({"./demos/as-child.tsx":l,"./demos/basic.tsx":f}),Object.assign({"./demos/as-child.tsx":h,"./demos/basic.tsx":_})),x=()=>(0,y.jsx)(c,{id:`prose`,demos:b})})))()}S();export{x as default};