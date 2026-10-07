import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{d as r}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{St as i,Wt as a}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as o}from"./dist-CcA3uxH5.js";import{c as ee,n as s,s as te,t as c}from"./DocPage-Dm1vTl9w.js";function l(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`},children:[(0,u.jsx)(a,{animation:`pulse`,lines:2}),(0,u.jsx)(a,{animation:`wave`,lines:2}),(0,u.jsx)(a,{animation:`false`,lines:2})]})}var u;function d(){return(d=e((()=>{o(),u=n()})))()}function f(){return(0,p.jsx)(a,{lines:3})}var p;function m(){return(m=e((()=>{o(),p=n()})))()}function h(){return(0,g.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,g.jsx)(a,{variant:`card`,avatar:!0,title:!0,paragraph:!0}),(0,g.jsx)(a,{variant:`card`,avatar:!0,title:!0,paragraph:!0,active:!0,animation:`wave`})]})}var g;function _(){return(_=e((()=>{o(),g=n()})))()}function v(){return(0,y.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,y.jsx)(a,{avatar:!0,title:!0,paragraph:!0}),(0,y.jsx)(a,{avatar:!0,avatarShape:`square`,avatarSize:56,lines:2})]})}var y;function b(){return(b=e((()=>{o(),y=n()})))()}function x(){return(0,S.jsxs)(`div`,{role:`status`,"aria-busy":`true`,"aria-label":`Loading profile`,style:{display:`flex`,gap:12,alignItems:`center`,width:320},children:[(0,S.jsx)(a,{decorative:!0,variant:`circular`,size:40,animation:`wave`}),(0,S.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:8},children:[(0,S.jsx)(a,{decorative:!0,width:`60%`,animation:`wave`}),(0,S.jsx)(a,{decorative:!0,width:`90%`,animation:`wave`})]})]})}var S;function C(){return(C=e((()=>{o(),S=n()})))()}function w(){let[e,t]=(0,T.useState)(!0);return(0,E.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,E.jsx)(r,{size:`small`,onClick:()=>t(e=>!e),children:e?`Show content`:`Show skeleton`}),(0,E.jsx)(a,{loading:e,avatar:!0,title:!0,paragraph:!0,children:(0,E.jsxs)(`article`,{children:[(0,E.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Minerva UI`}),(0,E.jsx)(`p`,{style:{margin:0},children:`The content is rendered as soon as loading becomes false.`})]})})]})}var T,E;function D(){return(D=e((()=>{T=t(),o(),E=n()})))()}function O(){return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:24,width:360},children:[(0,k.jsx)(i,{}),(0,k.jsx)(i,{lines:5,lineHeight:12,gap:3,animation:`wave`})]})}var k;function A(){return(A=e((()=>{o(),k=n()})))()}function j(){return(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:16,alignItems:`center`,width:`100%`},children:[(0,M.jsx)(a,{variant:`text`,width:120}),(0,M.jsx)(a,{variant:`circular`,width:48,height:48}),(0,M.jsx)(a,{variant:`rectangular`,width:120,height:60}),(0,M.jsx)(a,{variant:`rounded`,width:120,height:60}),(0,M.jsx)(a,{variant:`button`}),(0,M.jsx)(a,{variant:`image`,width:120,height:80})]})}var M;function N(){return(N=e((()=>{o(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Skeleton } from "@minerva/lib-core";

export default function AnimationsDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Skeleton animation="pulse" lines={2} />
      <Skeleton animation="wave" lines={2} />
      <Skeleton animation="false" lines={2} />
    </div>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Skeleton } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Skeleton lines={3} />;
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { Skeleton } from "@minerva/lib-core";

export default function CardDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 420 }}>
      <Skeleton variant="card" avatar title paragraph />
      <Skeleton variant="card" avatar title paragraph active animation="wave" />
    </div>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Skeleton } from "@minerva/lib-core";

export default function CompositionDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <Skeleton avatar title paragraph />
      <Skeleton avatar avatarShape="square" avatarSize={56} lines={2} />
    </div>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Skeleton } from "@minerva/lib-core";

export default function DecorativeDemo() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading profile"
      style={{ display: "flex", gap: 12, alignItems: "center", width: 320 }}
    >
      <Skeleton decorative variant="circular" size={40} animation="wave" />
      <div style={{ flex: 1, display: "grid", gap: 8 }}>
        <Skeleton decorative width="60%" animation="wave" />
        <Skeleton decorative width="90%" animation="wave" />
      </div>
    </div>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { useState } from "react";
import { Button, Skeleton } from "@minerva/lib-core";

export default function LoadingDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 420 }}>
      <Button size="small" onClick={() => setLoading((prev) => !prev)}>
        {loading ? "Show content" : "Show skeleton"}
      </Button>
      <Skeleton loading={loading} avatar title paragraph>
        <article>
          <h4 style={{ margin: "0 0 8px" }}>Minerva UI</h4>
          <p style={{ margin: 0 }}>
            The content is rendered as soon as loading becomes false.
          </p>
        </article>
      </Skeleton>
    </div>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { SkeletonText } from "@minerva/lib-core";

export default function SkeletonTextDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: 360 }}>
      <SkeletonText />
      <SkeletonText lines={5} lineHeight={12} gap={3} animation="wave" />
    </div>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Skeleton } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 16,
        alignItems: "center",
        width: "100%",
      }}
    >
      <Skeleton variant="text" width={120} />
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="rectangular" width={120} height={60} />
      <Skeleton variant="rounded" width={120} height={60} />
      <Skeleton variant="button" />
      <Skeleton variant="image" width={120} height={80} />
    </div>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{d(),m(),_(),b(),C(),D(),A(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),s(),ee(),X=n(),Z=te(Object.assign({"./demos/animations.tsx":l,"./demos/basic.tsx":f,"./demos/card.tsx":h,"./demos/composition.tsx":v,"./demos/decorative.tsx":x,"./demos/loading.tsx":w,"./demos/skeleton-text.tsx":O,"./demos/variants.tsx":j}),Object.assign({"./demos/animations.tsx":P,"./demos/basic.tsx":I,"./demos/card.tsx":R,"./demos/composition.tsx":B,"./demos/decorative.tsx":H,"./demos/loading.tsx":W,"./demos/skeleton-text.tsx":K,"./demos/variants.tsx":J})),Q=()=>(0,X.jsx)(c,{id:`skeleton`,demos:Z})})))()}$();export{Q as default};