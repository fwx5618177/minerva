import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{L as r,h as i}from"./dist-C3Cy1YK6.js";import{i as a,t as o}from"./DocPage-DUnq_TLt.js";var s=n();function c(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`},children:[(0,s.jsx)(r,{animation:`pulse`,lines:2}),(0,s.jsx)(r,{animation:`wave`,lines:2}),(0,s.jsx)(r,{animation:`false`,lines:2})]})}function l(){return(0,s.jsx)(r,{lines:3})}function u(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,s.jsx)(r,{variant:`card`,avatar:!0,title:!0,paragraph:!0}),(0,s.jsx)(r,{variant:`card`,avatar:!0,title:!0,paragraph:!0,active:!0,animation:`wave`})]})}function d(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,s.jsx)(r,{avatar:!0,title:!0,paragraph:!0}),(0,s.jsx)(r,{avatar:!0,avatarShape:`square`,avatarSize:56,lines:2})]})}var f=e(t(),1);function p(){let[e,t]=(0,f.useState)(!0);return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,s.jsx)(i,{size:`small`,onClick:()=>t(e=>!e),children:e?`Show content`:`Show skeleton`}),(0,s.jsx)(r,{loading:e,avatar:!0,title:!0,paragraph:!0,children:(0,s.jsxs)(`article`,{children:[(0,s.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Minerva UI`}),(0,s.jsx)(`p`,{style:{margin:0},children:`The content is rendered as soon as loading becomes false.`})]})})]})}function m(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:16,alignItems:`center`,width:`100%`},children:[(0,s.jsx)(r,{variant:`text`,width:120}),(0,s.jsx)(r,{variant:`circular`,width:48,height:48}),(0,s.jsx)(r,{variant:`rectangular`,width:120,height:60}),(0,s.jsx)(r,{variant:`rounded`,width:120,height:60}),(0,s.jsx)(r,{variant:`button`}),(0,s.jsx)(r,{variant:`image`,width:120,height:80})]})}var h=a(Object.assign({"./demos/animations.tsx":c,"./demos/basic.tsx":l,"./demos/card.tsx":u,"./demos/composition.tsx":d,"./demos/loading.tsx":p,"./demos/variants.tsx":m}),Object.assign({"./demos/animations.tsx":`import { Skeleton } from "@minerva/lib-core";

export default function AnimationsDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Skeleton animation="pulse" lines={2} />
      <Skeleton animation="wave" lines={2} />
      <Skeleton animation="false" lines={2} />
    </div>
  );
}
`,"./demos/basic.tsx":`import { Skeleton } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Skeleton lines={3} />;
}
`,"./demos/card.tsx":`import { Skeleton } from "@minerva/lib-core";

export default function CardDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 420 }}>
      <Skeleton variant="card" avatar title paragraph />
      <Skeleton variant="card" avatar title paragraph active animation="wave" />
    </div>
  );
}
`,"./demos/composition.tsx":`import { Skeleton } from "@minerva/lib-core";

export default function CompositionDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <Skeleton avatar title paragraph />
      <Skeleton avatar avatarShape="square" avatarSize={56} lines={2} />
    </div>
  );
}
`,"./demos/loading.tsx":`import { useState } from "react";
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
`,"./demos/variants.tsx":`import { Skeleton } from "@minerva/lib-core";

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
`})),g=()=>(0,s.jsx)(o,{id:`skeleton`,demos:h});export{g as default};