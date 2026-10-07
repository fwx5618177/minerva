import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{c as r}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{jt as i}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as a}from"./dist-CcA3uxH5.js";import{a as o,i as s}from"./fi-B05i6Zni.js";import{c,n as l,s as u,t as d}from"./DocPage-Dm1vTl9w.js";function f(){return(0,p.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`},children:[(0,p.jsx)(r,{size:`small`,ariaLabel:`Loading`}),(0,p.jsx)(r,{size:`medium`,ariaLabel:`Loading`}),(0,p.jsx)(r,{size:`large`,ariaLabel:`Loading`})]})}var p;function m(){return(m=e((()=>{a(),p=n()})))()}function h(){return(0,g.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:_.map(e=>(0,g.jsx)(i,{size:e},e))})}var g,_;function v(){return(v=e((()=>{a(),g=n(),_=[`xsmall`,`small`,`medium`,`large`,`xlarge`]})))()}function y(){return(0,b.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,b.jsx)(i,{}),(0,b.jsx)(i,{color:`neutral`,label:`Refreshing`}),(0,b.jsx)(`span`,{style:{color:`var(--success-color)`},children:(0,b.jsx)(i,{color:`current`,label:`Saving`})})]})}var b;function x(){return(x=e((()=>{a(),b=n()})))()}function S(){return(0,C.jsx)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:w.map(e=>(0,C.jsx)(r,{type:e,ariaLabel:`Loading (${e})`},e))})}var C,w;function T(){return(T=e((()=>{a(),C=n(),w=[`spinner`,`circle`,`wave`,`bar`,`dottedBar`]})))()}function E(){return(0,D.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,D.jsx)(r,{type:`bar`,width:`160px`,ariaLabel:`Loading`}),(0,D.jsx)(r,{type:`bar`,full:!0,ariaLabel:`Loading`}),(0,D.jsx)(r,{type:`dottedBar`,full:!0,ariaLabel:`Loading`})]})}var D;function O(){return(O=e((()=>{a(),D=n()})))()}function k(){return(0,A.jsx)(r,{type:`bar`,icon:(0,A.jsx)(s,{}),ariaLabel:`Uploading files`})}var A;function j(){return(j=e((()=>{a(),o(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { ProgressIndicator } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
      <ProgressIndicator size="small" ariaLabel="Loading" />
      <ProgressIndicator size="medium" ariaLabel="Loading" />
      <ProgressIndicator size="large" ariaLabel="Loading" />
    </div>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { Spinner } from "@minerva/lib-core";

const sizes = ["xsmall", "small", "medium", "large", "xlarge"] as const;

export default function SpinnerSizesDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      {sizes.map((size) => (
        <Spinner key={size} size={size} />
      ))}
    </div>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Spinner } from "@minerva/lib-core";

export default function SpinnerDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Spinner />
      <Spinner color="neutral" label="Refreshing" />
      <span style={{ color: "var(--success-color)" }}>
        <Spinner color="current" label="Saving" />
      </span>
    </div>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { ProgressIndicator } from "@minerva/lib-core";

const types = ["spinner", "circle", "wave", "bar", "dottedBar"] as const;

export default function TypesDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      {types.map((type) => (
        <ProgressIndicator
          key={type}
          type={type}
          ariaLabel={\`Loading (\${type})\`}
        />
      ))}
    </div>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { ProgressIndicator } from "@minerva/lib-core";

export default function WidthDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <ProgressIndicator type="bar" width="160px" ariaLabel="Loading" />
      <ProgressIndicator type="bar" full ariaLabel="Loading" />
      <ProgressIndicator type="dottedBar" full ariaLabel="Loading" />
    </div>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { ProgressIndicator } from "@minerva/lib-core";
import { FiUploadCloud } from "react-icons/fi";

export default function WithIconDemo() {
  return (
    <ProgressIndicator
      type="bar"
      icon={<FiUploadCloud />}
      ariaLabel="Uploading files"
    />
  );
}
`})))()}var W,G,K;function q(){return(q=e((()=>{m(),v(),x(),T(),O(),j(),N(),F(),L(),z(),V(),U(),t(),l(),c(),W=n(),G=u(Object.assign({"./demos/sizes.tsx":f,"./demos/spinner-sizes.tsx":h,"./demos/spinner.tsx":y,"./demos/types.tsx":S,"./demos/width.tsx":E,"./demos/with-icon.tsx":k}),Object.assign({"./demos/sizes.tsx":M,"./demos/spinner-sizes.tsx":P,"./demos/spinner.tsx":I,"./demos/types.tsx":R,"./demos/width.tsx":B,"./demos/with-icon.tsx":H})),K=()=>(0,W.jsx)(d,{id:`progress`,demos:G})})))()}q();export{K as default};