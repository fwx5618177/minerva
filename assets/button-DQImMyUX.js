import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{h as r}from"./dist-C3Cy1YK6.js";import{U as i,i as a,z as o}from"./registry-DXcVqgdp.js";import{i as s,t as c}from"./DocPage-DUnq_TLt.js";var l=n();function u(){return(0,l.jsx)(r,{onClick:()=>alert(`Clicked!`),children:`Click me`})}function d(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{shape:`square`,children:`Square`}),(0,l.jsx)(r,{shape:`rounded`,children:`Rounded`}),(0,l.jsx)(r,{shape:`circle`,ariaLabel:`Add`,children:`+`}),(0,l.jsx)(r,{borderRadius:`none`,children:`No radius`}),(0,l.jsx)(r,{borderRadius:12,children:`12px radius`})]})}function f(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{size:`small`,children:`Small`}),(0,l.jsx)(r,{size:`medium`,children:`Medium`}),(0,l.jsx)(r,{size:`large`,children:`Large`}),(0,l.jsx)(r,{size:`xlarge`,children:`XLarge`})]})}var p=e(t(),1);function m(){let[e,t]=(0,p.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Saving…`:`Save`}),(0,l.jsx)(r,{disabled:!0,children:`Disabled`}),(0,l.jsx)(r,{active:!0,children:`Active`})]})}function h(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{variant:`primary`,children:`Primary`}),(0,l.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,l.jsx)(r,{variant:`success`,children:`Success`}),(0,l.jsx)(r,{variant:`warning`,children:`Warning`}),(0,l.jsx)(r,{variant:`error`,children:`Error`}),(0,l.jsx)(r,{variant:`retry`,children:`Retry`}),(0,l.jsx)(r,{variant:`back`,children:`Back`})]})}function g(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r,{variant:`primary`,children:[(0,l.jsx)(o,{"aria-hidden":!0}),` Search`]}),(0,l.jsxs)(r,{variant:`success`,children:[(0,l.jsx)(a,{"aria-hidden":!0}),` Add`]}),(0,l.jsx)(r,{variant:`error`,ariaLabel:`Delete item`,children:(0,l.jsx)(i,{"aria-hidden":!0})})]})}var _=s(Object.assign({"./demos/basic.tsx":u,"./demos/shapes.tsx":d,"./demos/sizes.tsx":f,"./demos/states.tsx":m,"./demos/variants.tsx":h,"./demos/with-icon.tsx":g}),Object.assign({"./demos/basic.tsx":`import { Button } from "@minerva/lib-core";

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