import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{J as r}from"./registry-DXcVqgdp.js";import"./index-CE9n_auY.js";import{a as i,i as a,r as o,t as s}from"./DocPage-DUnq_TLt.js";var c=e(t(),1),l=n();function u(){let[e,t]=(0,c.useState)(0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`minerva-button`,{onClick:()=>t(e=>e+1),children:[`Clicked `,e,` times`]}),(0,l.jsx)(`minerva-button`,{variant:`secondary`,onClick:()=>t(0),children:`Reset`})]})}var d=[`tiny`,`small`,`medium`,`large`],f=[`square`,`rounded`,`pill`];function p(){return(0,l.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,l.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:12},children:d.map(e=>(0,l.jsx)(`minerva-button`,{size:e,children:e},e))}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:12},children:[f.map(e=>(0,l.jsx)(`minerva-button`,{shape:e,variant:`info`,children:e},e)),(0,l.jsx)(`minerva-button`,{shape:`circle`,variant:`success`,"aria-label":`Add item`,children:`+`})]})]})}function m(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`minerva-button`,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Saving`:`Save`}),(0,l.jsx)(`minerva-button`,{disabled:!0,children:`Disabled`}),(0,l.jsx)(`minerva-button`,{active:!0,variant:`secondary`,children:`Active`})]})}var h=[`primary`,`secondary`,`success`,`warning`,`error`,`info`,`ghost`,`retry`,`back`];function g(){return(0,l.jsx)(l.Fragment,{children:h.map(e=>(0,l.jsx)(`minerva-button`,{variant:e,children:e},e))})}var _=a(Object.assign({"./demos/basic.tsx":u,"./demos/sizes-shapes.tsx":p,"./demos/states.tsx":m,"./demos/variants.tsx":g}),Object.assign({"./demos/basic.tsx":`import { useState } from "react";
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
`,"./demos/sizes-shapes.tsx":`import "@minerva/lib-web-components";

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
`,"./demos/states.tsx":`import { useState } from "react";
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
`,"./demos/variants.tsx":`import "@minerva/lib-web-components";

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
`})),v=`<!doctype html>
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
</html>`,y=`// global.d.ts — JSX typings for <minerva-button>
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
}`,b=`// vite.config.ts — tell Vue that minerva-* tags are custom elements
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
import "@minerva/lib-web-components";`,x=`<!-- Component.vue: null removes the attribute -->
<minerva-button variant="info" :loading="saving || null" @click="save">
  Save
</minerva-button>`,S=`/* <minerva-button> reads lib-core's design tokens, so ConfigProvider /
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
}`,C=()=>{let{t:e}=r(),t=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`section`,{className:o.section,"aria-labelledby":`what`,children:[(0,l.jsx)(`h2`,{id:`what`,children:e(`docs.web-components.what.title`)}),(0,l.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.what.p1`)}),(0,l.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.what.p2`)})]}),(0,l.jsxs)(`section`,{className:o.section,"aria-labelledby":`html`,children:[(0,l.jsx)(`h2`,{id:`html`,children:e(`docs.web-components.html.title`)}),(0,l.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.html.text`)}),(0,l.jsx)(i,{code:v,language:`html`})]}),(0,l.jsxs)(`section`,{className:o.section,"aria-labelledby":`react`,children:[(0,l.jsx)(`h2`,{id:`react`,children:e(`docs.web-components.react.title`)}),(0,l.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.react.text`)}),(0,l.jsx)(i,{code:y,language:`tsx`}),(0,l.jsx)(`p`,{className:o.callout,children:e(`docs.web-components.react.booleans`)})]}),(0,l.jsxs)(`section`,{className:o.section,"aria-labelledby":`other-frameworks`,children:[(0,l.jsx)(`h2`,{id:`other-frameworks`,children:e(`docs.web-components.other.title`)}),(0,l.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.other.text`)}),(0,l.jsx)(i,{code:b,language:`tsx`}),(0,l.jsx)(i,{code:x,language:`html`})]})]});return(0,l.jsxs)(s,{id:`web-components`,demos:_,intro:t,children:[(0,l.jsxs)(`section`,{className:o.section,"aria-labelledby":`wc-theming`,children:[(0,l.jsx)(`h2`,{id:`wc-theming`,children:e(`docs.web-components.theming.title`)}),(0,l.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.theming.text`)}),(0,l.jsx)(i,{code:S,language:`scss`})]}),(0,l.jsxs)(`section`,{className:o.section,"aria-labelledby":`wc-a11y`,children:[(0,l.jsx)(`h2`,{id:`wc-a11y`,children:e(`docs.web-components.a11y.title`)}),(0,l.jsx)(`p`,{className:o.prose,children:e(`docs.web-components.a11y.text`)})]})]})};export{C as default};