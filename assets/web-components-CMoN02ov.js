import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{$ as r,Q as i,Z as a}from"./sample-Dya6Jarx.js";import{a as o,c as s,l as c,n as l,o as u,s as d,t as f,u as p}from"./DocPage-DzKszXiH.js";function m(){let[e,t]=(0,h.useState)(0);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`minerva-button`,{onClick:()=>t(e=>e+1),children:[`Clicked `,e,` times`]}),(0,g.jsx)(`minerva-button`,{variant:`secondary`,onClick:()=>t(0),children:`Reset`})]})}var h,g;function _(){return(_=e((()=>{h=t(),r(),g=n()})))()}function v(){return(0,y.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,y.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:12},children:b.map(e=>(0,y.jsx)(`minerva-button`,{size:e,children:e},e))}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:12},children:[x.map(e=>(0,y.jsx)(`minerva-button`,{shape:e,variant:`info`,children:e},e)),(0,y.jsx)(`minerva-button`,{shape:`circle`,variant:`success`,"aria-label":`Add item`,children:`+`})]})]})}var y,b,x;function S(){return(S=e((()=>{r(),y=n(),b=[`tiny`,`small`,`medium`,`large`],x=[`square`,`rounded`,`pill`]})))()}function C(){let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`minerva-button`,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Saving`:`Save`}),(0,T.jsx)(`minerva-button`,{disabled:!0,children:`Disabled`}),(0,T.jsx)(`minerva-button`,{active:!0,variant:`secondary`,children:`Active`})]})}var w,T;function E(){return(E=e((()=>{w=t(),r(),T=n()})))()}function D(){return(0,O.jsx)(O.Fragment,{children:k.map(e=>(0,O.jsx)(`minerva-button`,{variant:e,children:e},e))})}var O,k;function A(){return(A=e((()=>{r(),O=n(),k=[`primary`,`secondary`,`success`,`warning`,`error`,`info`,`ghost`,`retry`,`back`]})))()}var j;function M(){return(M=e((()=>{j=`import { useState } from "react";
// Registers <minerva-button>. For JSX typings add (e.g. in global.d.ts):
// /// <reference types="@minerva/lib-web-components/react" />
import "@minerva/lib-web-components";

export default function BasicDemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <minerva-button onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </minerva-button>
      <minerva-button variant="secondary" onClick={() => setCount(0)}>
        Reset
      </minerva-button>
    </>
  );
}
`})))()}var N;function P(){return(P=e((()=>{N=`import "@minerva/lib-web-components";

const SIZES = ["tiny", "small", "medium", "large"] as const;
const SHAPES = ["square", "rounded", "pill"] as const;

export default function SizesShapesDemo() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 12,
        }}
      >
        {SIZES.map((size) => (
          <minerva-button key={size} size={size}>
            {size}
          </minerva-button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 12,
        }}
      >
        {SHAPES.map((shape) => (
          <minerva-button key={shape} shape={shape} variant="info">
            {shape}
          </minerva-button>
        ))}
        {/* icon-only buttons need an accessible name */}
        <minerva-button shape="circle" variant="success" aria-label="Add item">
          +
        </minerva-button>
      </div>
    </div>
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { useState } from "react";
import "@minerva/lib-web-components";

export default function StatesDemo() {
  const [loading, setLoading] = useState(false);

  const save = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <>
      {/* React 19 sets booleans as properties: loading={false} turns it off */}
      <minerva-button loading={loading} onClick={save}>
        {loading ? "Saving" : "Save"}
      </minerva-button>
      <minerva-button disabled>Disabled</minerva-button>
      <minerva-button active variant="secondary">
        Active
      </minerva-button>
    </>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import "@minerva/lib-web-components";

const VARIANTS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "ghost",
  "retry",
  "back",
] as const;

export default function VariantsDemo() {
  return (
    <>
      {VARIANTS.map((variant) => (
        <minerva-button key={variant} variant={variant}>
          {variant}
        </minerva-button>
      ))}
    </>
  );
}
`})))()}var z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{_(),S(),E(),A(),M(),P(),I(),R(),t(),a(),p(),l(),u(),s(),z=n(),B=d(Object.assign({"./demos/basic.tsx":m,"./demos/sizes-shapes.tsx":v,"./demos/states.tsx":C,"./demos/variants.tsx":D}),Object.assign({"./demos/basic.tsx":j,"./demos/sizes-shapes.tsx":N,"./demos/states.tsx":F,"./demos/variants.tsx":L})),V=`<!doctype html>
<html lang="en">
  <body>
    <minerva-button variant="primary" shape="pill">Click me</minerva-button>
    <minerva-button variant="ghost" loading>Loading</minerva-button>
    <minerva-button variant="error" disabled>Delete</minerva-button>

    <!-- the bare specifier is resolved by your bundler (e.g. Vite) -->
    <script type="module">
      import "@minerva/lib-web-components";

      document
        .querySelector("minerva-button")
        .addEventListener("click", () => alert("Clicked!"));
    <\/script>
  </body>
</html>`,H=`// global.d.ts — JSX typings for <minerva-button>
/// <reference types="@minerva/lib-web-components/react" />

// App.tsx
import "@minerva/lib-web-components"; // registers the custom elements once

export function SaveButton({ saving }: { saving: boolean }) {
  return (
    <minerva-button
      variant="success"
      loading={saving}
      aria-label="Save document"
      onClick={() => console.log("save")}
    >
      Save
    </minerva-button>
  );
}`,U=`// vite.config.ts — tell Vue that minerva-* tags are custom elements
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith("minerva-") },
      },
    }),
  ],
};

// main.ts
import "@minerva/lib-web-components";`,W=`<!-- Component.vue: null removes the attribute -->
<minerva-button variant="info" :loading="saving || null" @click="save">
  Save
</minerva-button>`,G=`/* <minerva-button> reads lib-core's design tokens, so ConfigProvider /
   applyThemeStyles themes apply automatically. To restyle only some buttons,
   set the tokens on the element or on an ancestor: */
.brand-buttons {
  --primary-color: #7c3aed;
  --primary-color-hover: #6d28d9;
  --danger-color: #dc2626;
  --text-inverse-color: #ffffff;
  --surface-muted-color: #f1f5f9; /* ghost hover and disabled background */
  --focus-ring-color: rgba(124, 58, 237, 0.45);
  --radius-md: 0.5rem;
}`,K=()=>{let{t:e}=i(),t=(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`section`,{className:o.section,"aria-labelledby":`what`,children:[(0,z.jsx)(`h2`,{id:`what`,children:e(`docs.web-components.what.title`)}),(0,z.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.what.p1`)}),(0,z.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.what.p2`)})]}),(0,z.jsxs)(`section`,{className:o.section,"aria-labelledby":`html`,children:[(0,z.jsx)(`h2`,{id:`html`,children:e(`docs.web-components.html.title`)}),(0,z.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.html.text`)}),(0,z.jsx)(c,{code:V,language:`html`})]}),(0,z.jsxs)(`section`,{className:o.section,"aria-labelledby":`react`,children:[(0,z.jsx)(`h2`,{id:`react`,children:e(`docs.web-components.react.title`)}),(0,z.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.react.text`)}),(0,z.jsx)(c,{code:H,language:`tsx`}),(0,z.jsx)(`p`,{className:o.callout,children:e(`docs.web-components.react.booleans`)})]}),(0,z.jsxs)(`section`,{className:o.section,"aria-labelledby":`other-frameworks`,children:[(0,z.jsx)(`h2`,{id:`other-frameworks`,children:e(`docs.web-components.other.title`)}),(0,z.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.other.text`)}),(0,z.jsx)(c,{code:U,language:`tsx`}),(0,z.jsx)(c,{code:W,language:`html`})]})]});return(0,z.jsxs)(f,{id:`web-components`,demos:B,intro:t,children:[(0,z.jsxs)(`section`,{className:o.section,"aria-labelledby":`wc-theming`,children:[(0,z.jsx)(`h2`,{id:`wc-theming`,children:e(`docs.web-components.theming.title`)}),(0,z.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.theming.text`)}),(0,z.jsx)(c,{code:G,language:`scss`})]}),(0,z.jsxs)(`section`,{className:o.section,"aria-labelledby":`wc-a11y`,children:[(0,z.jsx)(`h2`,{id:`wc-a11y`,children:e(`docs.web-components.a11y.title`)}),(0,z.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.a11y.text`)})]})]})}})))()}q();export{K as default};