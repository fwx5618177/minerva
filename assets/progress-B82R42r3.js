import"./rolldown-runtime-CbXtAM7H.js";import{f as e,t}from"./react-vendor-CUe5nroo.js";import{E as n}from"./dist-DAjZNDC0.js";import{i as r}from"./fi-CPr7eGDA.js";import{i,t as a}from"./DocPage-B1L0vw6V.js";var o=t();function s(){return(0,o.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`},children:[(0,o.jsx)(n,{size:`small`,ariaLabel:`Loading`}),(0,o.jsx)(n,{size:`medium`,ariaLabel:`Loading`}),(0,o.jsx)(n,{size:`large`,ariaLabel:`Loading`})]})}var c=[`spinner`,`circle`,`wave`,`bar`,`dottedBar`];function l(){return(0,o.jsx)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:c.map(e=>(0,o.jsx)(n,{type:e,ariaLabel:`Loading (${e})`},e))})}function u(){return(0,o.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,o.jsx)(n,{type:`bar`,width:`160px`,ariaLabel:`Loading`}),(0,o.jsx)(n,{type:`bar`,full:!0,ariaLabel:`Loading`}),(0,o.jsx)(n,{type:`dottedBar`,full:!0,ariaLabel:`Loading`})]})}function d(){return(0,o.jsx)(n,{type:`bar`,icon:(0,o.jsx)(r,{}),ariaLabel:`Uploading files`})}var f=`import { ProgressIndicator } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
      <ProgressIndicator size="small" ariaLabel="Loading" />
      <ProgressIndicator size="medium" ariaLabel="Loading" />
      <ProgressIndicator size="large" ariaLabel="Loading" />
    </div>
  );
}
`,p=`import { ProgressIndicator } from "@minerva/lib-core";

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
`,m=`import { ProgressIndicator } from "@minerva/lib-core";

export default function WidthDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <ProgressIndicator type="bar" width="160px" ariaLabel="Loading" />
      <ProgressIndicator type="bar" full ariaLabel="Loading" />
      <ProgressIndicator type="dottedBar" full ariaLabel="Loading" />
    </div>
  );
}
`,h=`import { ProgressIndicator } from "@minerva/lib-core";
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
`;e();var g=i(Object.assign({"./demos/sizes.tsx":s,"./demos/types.tsx":l,"./demos/width.tsx":u,"./demos/with-icon.tsx":d}),Object.assign({"./demos/sizes.tsx":f,"./demos/types.tsx":p,"./demos/width.tsx":m,"./demos/with-icon.tsx":h})),_=()=>(0,o.jsx)(a,{id:`progress`,demos:g});export{_ as default};