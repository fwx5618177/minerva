import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{B as r,W as i,a}from"./registry-DtD9RDtk.js";import{a as o}from"./dist-DAjZNDC0.js";import{i as s,t as c}from"./DocPage-B1L0vw6V.js";var l=n();function u(){return(0,l.jsx)(o,{onClick:()=>alert(`Clicked!`),children:`Click me`})}function d(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{shape:`square`,children:`Square`}),(0,l.jsx)(o,{shape:`rounded`,children:`Rounded`}),(0,l.jsx)(o,{shape:`circle`,ariaLabel:`Add`,children:`+`}),(0,l.jsx)(o,{borderRadius:`none`,children:`No radius`}),(0,l.jsx)(o,{borderRadius:12,children:`12px radius`})]})}function f(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{size:`small`,children:`Small`}),(0,l.jsx)(o,{size:`medium`,children:`Medium`}),(0,l.jsx)(o,{size:`large`,children:`Large`}),(0,l.jsx)(o,{size:`xlarge`,children:`XLarge`})]})}var p=e(t(),1);function m(){let[e,t]=(0,p.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Saving…`:`Save`}),(0,l.jsx)(o,{disabled:!0,children:`Disabled`}),(0,l.jsx)(o,{active:!0,children:`Active`})]})}function h(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{variant:`primary`,children:`Primary`}),(0,l.jsx)(o,{variant:`secondary`,children:`Secondary`}),(0,l.jsx)(o,{variant:`success`,children:`Success`}),(0,l.jsx)(o,{variant:`warning`,children:`Warning`}),(0,l.jsx)(o,{variant:`error`,children:`Error`}),(0,l.jsx)(o,{variant:`retry`,children:`Retry`}),(0,l.jsx)(o,{variant:`back`,children:`Back`})]})}function g(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o,{variant:`primary`,children:[(0,l.jsx)(r,{"aria-hidden":!0}),` Search`]}),(0,l.jsxs)(o,{variant:`success`,children:[(0,l.jsx)(a,{"aria-hidden":!0}),` Add`]}),(0,l.jsx)(o,{variant:`error`,ariaLabel:`Delete item`,children:(0,l.jsx)(i,{"aria-hidden":!0})})]})}var _=s(Object.assign({"./demos/basic.tsx":u,"./demos/shapes.tsx":d,"./demos/sizes.tsx":f,"./demos/states.tsx":m,"./demos/variants.tsx":h,"./demos/with-icon.tsx":g}),Object.assign({"./demos/basic.tsx":`import { Button } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Button onClick={() => alert("Clicked!")}>Click me</Button>;
}
`,"./demos/shapes.tsx":`import { Button } from "@minerva/lib-core";

export default function ShapesDemo() {
  return (
    <>
      <Button shape="square">Square</Button>
      <Button shape="rounded">Rounded</Button>
      <Button shape="circle" ariaLabel="Add">
        +
      </Button>
      <Button borderRadius="none">No radius</Button>
      <Button borderRadius={12}>12px radius</Button>
    </>
  );
}
`,"./demos/sizes.tsx":`import { Button } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="xlarge">XLarge</Button>
    </>
  );
}
`,"./demos/states.tsx":`import { useState } from "react";
import { Button } from "@minerva/lib-core";

export default function StatesDemo() {
  const [loading, setLoading] = useState(false);

  const save = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <>
      <Button loading={loading} onClick={save}>
        {loading ? "Saving…" : "Save"}
      </Button>
      <Button disabled>Disabled</Button>
      <Button active>Active</Button>
    </>
  );
}
`,"./demos/variants.tsx":`import { Button } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="retry">Retry</Button>
      <Button variant="back">Back</Button>
    </>
  );
}
`,"./demos/with-icon.tsx":`import { Button } from "@minerva/lib-core";
import { IoAdd, IoSearch, IoTrash } from "react-icons/io5";

export default function WithIconDemo() {
  return (
    <>
      <Button variant="primary">
        <IoSearch aria-hidden /> Search
      </Button>
      <Button variant="success">
        <IoAdd aria-hidden /> Add
      </Button>
      <Button variant="error" ariaLabel="Delete item">
        <IoTrash aria-hidden />
      </Button>
    </>
  );
}
`})),v=()=>(0,l.jsx)(c,{id:`button`,demos:_});export{v as default};