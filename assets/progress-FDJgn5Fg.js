import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{c as r,n as i,s as a,t as o}from"./DocPage-HgWiqH91.js";import{n as s,t as c}from"./ProgressIndicator-6_LFe5-H.js";import{a as l,i as u}from"./fi-iVn2SA8F.js";function d(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,f.jsx)(s,{"aria-label":`Loading`}),(0,f.jsx)(s,{color:`neutral`,"aria-label":`Refreshing`}),(0,f.jsx)(`span`,{style:{color:`var(--success-color)`},children:(0,f.jsx)(s,{color:`current`,"aria-label":`Saving`})})]})}var f;function p(){return(p=e((()=>{c(),f=n()})))()}function m(){return(0,h.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,h.jsx)(s,{size:`small`,label:`Syncing contacts…`}),(0,h.jsx)(s,{variant:`bar`,full:!0,label:`Uploading report.pdf`})]})}var h;function g(){return(g=e((()=>{c(),h=n()})))()}function _(){return(0,v.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,v.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:y.map(e=>(0,v.jsx)(s,{size:e,"aria-label":`Loading`},e))}),y.map(e=>(0,v.jsx)(s,{variant:`bar`,size:e,full:!0,"aria-label":`Loading`},e))]})}var v,y;function b(){return(b=e((()=>{c(),v=n(),y=[`xsmall`,`small`,`medium`,`large`,`xlarge`]})))()}function x(){return(0,S.jsx)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:C.map(e=>(0,S.jsx)(s,{variant:e,"aria-label":`Loading (${e})`},e))})}var S,C;function w(){return(w=e((()=>{c(),S=n(),C=[`spinner`,`circle`,`wave`,`bar`,`dottedBar`]})))()}function T(){return(0,E.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,E.jsx)(s,{variant:`bar`,width:`160px`,"aria-label":`Loading`}),(0,E.jsx)(s,{variant:`bar`,full:!0,"aria-label":`Loading`}),(0,E.jsx)(s,{variant:`dottedBar`,full:!0,"aria-label":`Loading`})]})}var E;function D(){return(D=e((()=>{c(),E=n()})))()}function O(){return(0,k.jsx)(s,{variant:`bar`,icon:(0,k.jsx)(u,{}),"aria-label":`Uploading files`})}var k;function A(){return(A=e((()=>{c(),l(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import { ProgressIndicator } from "@minerva/lib-core";

export default function ColorsDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <ProgressIndicator aria-label="Loading" />
      <ProgressIndicator color="neutral" aria-label="Refreshing" />
      <span style={{ color: "var(--success-color)" }}>
        <ProgressIndicator color="current" aria-label="Saving" />
      </span>
    </div>
  );
}
`})))()}var N;function P(){return(P=e((()=>{N=`import { ProgressIndicator } from "@minerva/lib-core";

export default function LabelDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <ProgressIndicator size="small" label="Syncing contacts…" />
      <ProgressIndicator variant="bar" full label="Uploading report.pdf" />
    </div>
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { ProgressIndicator } from "@minerva/lib-core";

const sizes = ["xsmall", "small", "medium", "large", "xlarge"] as const;

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {sizes.map((size) => (
          <ProgressIndicator key={size} size={size} aria-label="Loading" />
        ))}
      </div>
      {sizes.map((size) => (
        <ProgressIndicator
          key={size}
          variant="bar"
          size={size}
          full
          aria-label="Loading"
        />
      ))}
    </div>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { ProgressIndicator } from "@minerva/lib-core";

const variants = ["spinner", "circle", "wave", "bar", "dottedBar"] as const;

export default function VariantsDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      {variants.map((variant) => (
        <ProgressIndicator
          key={variant}
          variant={variant}
          aria-label={\`Loading (\${variant})\`}
        />
      ))}
    </div>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { ProgressIndicator } from "@minerva/lib-core";

export default function WidthDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <ProgressIndicator variant="bar" width="160px" aria-label="Loading" />
      <ProgressIndicator variant="bar" full aria-label="Loading" />
      <ProgressIndicator variant="dottedBar" full aria-label="Loading" />
    </div>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { ProgressIndicator } from "@minerva/lib-core";
import { FiUploadCloud } from "react-icons/fi";

export default function WithIconDemo() {
  return (
    <ProgressIndicator
      variant="bar"
      icon={<FiUploadCloud />}
      aria-label="Uploading files"
    />
  );
}
`})))()}var U,W,G;function K(){return(K=e((()=>{p(),g(),b(),w(),D(),A(),M(),P(),I(),R(),B(),H(),t(),i(),r(),U=n(),W=a(Object.assign({"./demos/colors.tsx":d,"./demos/label.tsx":m,"./demos/sizes.tsx":_,"./demos/variants.tsx":x,"./demos/width.tsx":T,"./demos/with-icon.tsx":O}),Object.assign({"./demos/colors.tsx":j,"./demos/label.tsx":N,"./demos/sizes.tsx":F,"./demos/variants.tsx":L,"./demos/width.tsx":z,"./demos/with-icon.tsx":V})),G=()=>(0,U.jsx)(o,{id:`progress`,demos:W})})))()}K();export{G as default};