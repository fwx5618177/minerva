import"./rolldown-runtime-CbXtAM7H.js";import{f as e,t}from"./react-vendor-CUe5nroo.js";import{D as n}from"./dist-DAjZNDC0.js";import{i as r,t as i}from"./DocPage-B1L0vw6V.js";var a=t();function o(){return(0,a.jsxs)(`div`,{style:{width:`100%`},children:[(0,a.jsx)(`p`,{children:`Content above the divider.`}),(0,a.jsx)(n,{}),(0,a.jsx)(`p`,{children:`Content below the divider.`})]})}function s(){return(0,a.jsxs)(`div`,{style:{width:`100%`},children:[(0,a.jsx)(n,{color:`#7c3aed`,thickness:2}),(0,a.jsx)(n,{color:`#16a34a`,thickness:3,variant:`dashed`,length:`50%`}),(0,a.jsx)(n,{spacing:32,elevation:!0})]})}function c(){return(0,a.jsxs)(`div`,{style:{width:`100%`},children:[(0,a.jsx)(n,{variant:`solid`}),(0,a.jsx)(n,{variant:`dashed`}),(0,a.jsx)(n,{variant:`dotted`})]})}function l(){return(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,a.jsx)(`span`,{children:`Home`}),(0,a.jsx)(n,{orientation:`vertical`,length:16,spacing:12}),(0,a.jsx)(`span`,{children:`Products`}),(0,a.jsx)(n,{orientation:`vertical`,length:16,spacing:12}),(0,a.jsx)(`span`,{children:`About`})]})}function u(){return(0,a.jsxs)(`div`,{style:{width:`100%`},children:[(0,a.jsx)(n,{textAlign:`left`,children:`Left`}),(0,a.jsx)(n,{children:`Center`}),(0,a.jsx)(n,{textAlign:`right`,variant:`dashed`,children:`Right`})]})}var d=`import { Divider } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <div style={{ width: "100%" }}>
      <p>Content above the divider.</p>
      <Divider />
      <p>Content below the divider.</p>
    </div>
  );
}
`,f=`import { Divider } from "@minerva/lib-core";

export default function CustomStyleDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Divider color="#7c3aed" thickness={2} />
      <Divider color="#16a34a" thickness={3} variant="dashed" length="50%" />
      <Divider spacing={32} elevation />
    </div>
  );
}
`,p=`import { Divider } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
  );
}
`,m=`import { Divider } from "@minerva/lib-core";

export default function VerticalDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>Home</span>
      <Divider orientation="vertical" length={16} spacing={12} />
      <span>Products</span>
      <Divider orientation="vertical" length={16} spacing={12} />
      <span>About</span>
    </div>
  );
}
`,h=`import { Divider } from "@minerva/lib-core";

export default function WithTextDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Divider textAlign="left">Left</Divider>
      <Divider>Center</Divider>
      <Divider textAlign="right" variant="dashed">
        Right
      </Divider>
    </div>
  );
}
`;e();var g=r(Object.assign({"./demos/basic.tsx":o,"./demos/custom-style.tsx":s,"./demos/variants.tsx":c,"./demos/vertical.tsx":l,"./demos/with-text.tsx":u}),Object.assign({"./demos/basic.tsx":d,"./demos/custom-style.tsx":f,"./demos/variants.tsx":p,"./demos/vertical.tsx":m,"./demos/with-text.tsx":h})),_=()=>(0,a.jsx)(i,{id:`divider`,demos:g});export{_ as default};