import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{c as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{Rt as i}from"./dist-DkgrNLMS.js";import{a,i as o}from"./fi-BANx-nyf.js";import{c as s,n as c,s as l,t as u}from"./DocPage-Bnv84vTs.js";function d(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,f.jsx)(r,{ariaLabel:`Loading`}),(0,f.jsx)(r,{color:`neutral`,ariaLabel:`Refreshing`}),(0,f.jsx)(`span`,{style:{color:`var(--success-color)`},children:(0,f.jsx)(r,{color:`current`,ariaLabel:`Saving`})})]})}var f;function p(){return(p=e((()=>{i(),f=n()})))()}function m(){return(0,h.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,h.jsx)(r,{size:`small`,label:`Syncing contacts…`}),(0,h.jsx)(r,{variant:`bar`,full:!0,label:`Uploading report.pdf`})]})}var h;function g(){return(g=e((()=>{i(),h=n()})))()}function _(){return(0,v.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,v.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:y.map(e=>(0,v.jsx)(r,{size:e,ariaLabel:`Loading`},e))}),y.map(e=>(0,v.jsx)(r,{variant:`bar`,size:e,full:!0,ariaLabel:`Loading`},e))]})}var v,y;function b(){return(b=e((()=>{i(),v=n(),y=[`xsmall`,`small`,`medium`,`large`,`xlarge`]})))()}function x(){return(0,S.jsx)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:C.map(e=>(0,S.jsx)(r,{variant:e,ariaLabel:`Loading (${e})`},e))})}var S,C;function w(){return(w=e((()=>{i(),S=n(),C=[`spinner`,`circle`,`wave`,`bar`,`dottedBar`]})))()}function T(){return(0,E.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,E.jsx)(r,{variant:`bar`,width:`160px`,ariaLabel:`Loading`}),(0,E.jsx)(r,{variant:`bar`,full:!0,ariaLabel:`Loading`}),(0,E.jsx)(r,{variant:`dottedBar`,full:!0,ariaLabel:`Loading`})]})}var E;function D(){return(D=e((()=>{i(),E=n()})))()}function O(){return(0,k.jsx)(r,{variant:`bar`,icon:(0,k.jsx)(o,{}),ariaLabel:`Uploading files`})}var k;function A(){return(A=e((()=>{i(),a(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import { ProgressIndicator } from "@minerva/lib-core";

export default function ColorsDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <ProgressIndicator ariaLabel="Loading" />
      <ProgressIndicator color="neutral" ariaLabel="Refreshing" />
      <span style={{ color: "var(--success-color)" }}>
        <ProgressIndicator color="current" ariaLabel="Saving" />
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
          <ProgressIndicator key={size} size={size} ariaLabel="Loading" />
        ))}
      </div>
      {sizes.map((size) => (
        <ProgressIndicator
          key={size}
          variant="bar"
          size={size}
          full
          ariaLabel="Loading"
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
          ariaLabel={\`Loading (\${variant})\`}
        />
      ))}
    </div>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { ProgressIndicator } from "@minerva/lib-core";

export default function WidthDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <ProgressIndicator variant="bar" width="160px" ariaLabel="Loading" />
      <ProgressIndicator variant="bar" full ariaLabel="Loading" />
      <ProgressIndicator variant="dottedBar" full ariaLabel="Loading" />
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
      ariaLabel="Uploading files"
    />
  );
}
`})))()}var U,W,G;function K(){return(K=e((()=>{p(),g(),b(),w(),D(),A(),M(),P(),I(),R(),B(),H(),t(),c(),s(),U=n(),W=l(Object.assign({"./demos/colors.tsx":d,"./demos/label.tsx":m,"./demos/sizes.tsx":_,"./demos/variants.tsx":x,"./demos/width.tsx":T,"./demos/with-icon.tsx":O}),Object.assign({"./demos/colors.tsx":j,"./demos/label.tsx":N,"./demos/sizes.tsx":F,"./demos/variants.tsx":L,"./demos/width.tsx":z,"./demos/with-icon.tsx":V})),G=()=>(0,U.jsx)(u,{id:`progress`,demos:W})})))()}K();export{G as default};