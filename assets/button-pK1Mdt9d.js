import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{d as r}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{G as i,V as a,Y as o,a as s,s as c}from"./registry-B5r3N_Su.js";import{d as l}from"./dist-CcA3uxH5.js";import{c as u,n as ee,s as te,t as d}from"./DocPage-Dm1vTl9w.js";function f(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{appearance:`solid`,children:`Solid`}),(0,p.jsx)(r,{appearance:`outline`,variant:`neutral`,children:`Outline`}),(0,p.jsx)(r,{appearance:`ghost`,variant:`danger`,children:`Ghost`}),(0,p.jsx)(r,{appearance:`link`,variant:`accent`,children:`Link`}),(0,p.jsx)(r,{appearance:`solid`,size:`xsmall`,children:`Extra small`})]})}var p;function m(){return(m=e((()=>{l(),p=n()})))()}function ne(){return(0,h.jsx)(r,{onClick:()=>alert(`Clicked!`),children:`Click me`})}var h;function g(){return(g=e((()=>{l(),h=n()})))()}function _(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:320},children:[(0,y.jsx)(r,{appearance:`solid`,startIcon:(0,y.jsx)(s,{"aria-hidden":!0}),children:`Add item`}),(0,y.jsx)(r,{appearance:`outline`,endIcon:(0,y.jsx)(c,{"aria-hidden":!0}),children:`Continue`}),(0,y.jsx)(r,{appearance:`solid`,variant:`success`,fullWidth:!0,loading:e,loadingText:`Saving...`,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:`Save`})]})}var v,y;function b(){return(b=e((()=>{v=t(),l(),o(),y=n()})))()}function re(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r,{shape:`square`,children:`Square`}),(0,x.jsx)(r,{shape:`rounded`,children:`Rounded`}),(0,x.jsx)(r,{shape:`circle`,ariaLabel:`Add`,children:`+`}),(0,x.jsx)(r,{borderRadius:`none`,children:`No radius`}),(0,x.jsx)(r,{borderRadius:12,children:`12px radius`})]})}var x;function S(){return(S=e((()=>{l(),x=n()})))()}function ie(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(r,{size:`small`,children:`Small`}),(0,C.jsx)(r,{size:`medium`,children:`Medium`}),(0,C.jsx)(r,{size:`large`,children:`Large`}),(0,C.jsx)(r,{size:`xlarge`,children:`XLarge`})]})}var C;function w(){return(w=e((()=>{l(),C=n()})))()}function ae(){let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(r,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Saving…`:`Save`}),(0,E.jsx)(r,{disabled:!0,children:`Disabled`}),(0,E.jsx)(r,{active:!0,children:`Active`})]})}var T,E;function D(){return(D=e((()=>{T=t(),l(),E=n()})))()}function O(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r,{variant:`primary`,children:`Primary`}),(0,k.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,k.jsx)(r,{variant:`success`,children:`Success`}),(0,k.jsx)(r,{variant:`warning`,children:`Warning`}),(0,k.jsx)(r,{variant:`error`,children:`Error`}),(0,k.jsx)(r,{variant:`retry`,children:`Retry`}),(0,k.jsx)(r,{variant:`back`,children:`Back`})]})}var k;function A(){return(A=e((()=>{l(),k=n()})))()}function j(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(r,{variant:`primary`,children:[(0,M.jsx)(a,{"aria-hidden":!0}),` Search`]}),(0,M.jsxs)(r,{variant:`success`,children:[(0,M.jsx)(s,{"aria-hidden":!0}),` Add`]}),(0,M.jsx)(r,{variant:`error`,ariaLabel:`Delete item`,children:(0,M.jsx)(i,{"aria-hidden":!0})})]})}var M;function N(){return(N=e((()=>{l(),o(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Button } from "@minerva/lib-core";

export default function AppearanceDemo() {
  return (
    <>
      <Button appearance="solid">Solid</Button>
      <Button appearance="outline" variant="neutral">
        Outline
      </Button>
      <Button appearance="ghost" variant="danger">
        Ghost
      </Button>
      <Button appearance="link" variant="accent">
        Link
      </Button>
      <Button appearance="solid" size="xsmall">
        Extra small
      </Button>
    </>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Button } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Button onClick={() => alert("Clicked!")}>Click me</Button>;
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { useState } from "react";
import { Button } from "@minerva/lib-core";
import { IoAdd, IoArrowForward } from "react-icons/io5";

export default function IconsLoadingDemo() {
  const [saving, setSaving] = useState(false);
  const save = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 320 }}>
      <Button appearance="solid" startIcon={<IoAdd aria-hidden />}>
        Add item
      </Button>
      <Button appearance="outline" endIcon={<IoArrowForward aria-hidden />}>
        Continue
      </Button>
      <Button
        appearance="solid"
        variant="success"
        fullWidth
        loading={saving}
        loadingText="Saving..."
        onClick={save}
      >
        Save
      </Button>
    </div>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Button } from "@minerva/lib-core";

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
`})))()}var H;function U(){return(U=e((()=>{H=`import { Button } from "@minerva/lib-core";

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
`})))()}var W;function G(){return(G=e((()=>{W=`import { useState } from "react";
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
`})))()}var K;function q(){return(q=e((()=>{K=`import { Button } from "@minerva/lib-core";

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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Button } from "@minerva/lib-core";
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
`})))()}var X,Z,Q;function $(){return($=e((()=>{m(),g(),b(),S(),w(),D(),A(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),ee(),u(),X=n(),Z=te(Object.assign({"./demos/appearance.tsx":f,"./demos/basic.tsx":ne,"./demos/icons-loading.tsx":_,"./demos/shapes.tsx":re,"./demos/sizes.tsx":ie,"./demos/states.tsx":ae,"./demos/variants.tsx":O,"./demos/with-icon.tsx":j}),Object.assign({"./demos/appearance.tsx":P,"./demos/basic.tsx":I,"./demos/icons-loading.tsx":R,"./demos/shapes.tsx":B,"./demos/sizes.tsx":H,"./demos/states.tsx":W,"./demos/variants.tsx":K,"./demos/with-icon.tsx":J})),Q=()=>(0,X.jsx)(d,{id:`button`,demos:Z})})))()}$();export{Q as default};