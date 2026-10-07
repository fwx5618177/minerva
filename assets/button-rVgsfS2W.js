import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{s as r}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{Vt as i}from"./dist-dg6ajl7p.js";import{G as ee,V as a,Y as o,a as s,s as c}from"./registry-DOQVQ99a.js";import{c as l,n as te,s as ne,t as u}from"./DocPage-Kqmidh_0.js";function d(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{appearance:`solid`,children:`Solid`}),(0,f.jsx)(r,{appearance:`outline`,variant:`neutral`,children:`Outline`}),(0,f.jsx)(r,{appearance:`ghost`,variant:`danger`,children:`Ghost`}),(0,f.jsx)(r,{appearance:`link`,variant:`accent`,children:`Link`}),(0,f.jsx)(r,{appearance:`solid`,size:`xsmall`,children:`Extra small`})]})}var f;function p(){return(p=e((()=>{i(),f=n()})))()}function re(){return(0,m.jsx)(r,{onClick:()=>alert(`Clicked!`),children:`Click me`})}var m;function h(){return(h=e((()=>{i(),m=n()})))()}function g(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:320},children:[(0,v.jsx)(r,{appearance:`solid`,startIcon:(0,v.jsx)(s,{"aria-hidden":!0}),children:`Add item`}),(0,v.jsx)(r,{appearance:`outline`,endIcon:(0,v.jsx)(c,{"aria-hidden":!0}),children:`Continue`}),(0,v.jsx)(r,{appearance:`solid`,variant:`success`,fullWidth:!0,loading:e,loadingText:`Saving...`,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:`Save`})]})}var _,v;function y(){return(y=e((()=>{_=t(),i(),o(),v=n()})))()}function b(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r,{shape:`square`,children:`Square`}),(0,x.jsx)(r,{shape:`rounded`,children:`Rounded`}),(0,x.jsx)(r,{shape:`circle`,ariaLabel:`Add`,children:`+`}),(0,x.jsx)(r,{borderRadius:`none`,children:`No radius`}),(0,x.jsx)(r,{borderRadius:12,children:`12px radius`})]})}var x;function S(){return(S=e((()=>{i(),x=n()})))()}function ie(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(r,{size:`small`,children:`Small`}),(0,C.jsx)(r,{size:`medium`,children:`Medium`}),(0,C.jsx)(r,{size:`large`,children:`Large`}),(0,C.jsx)(r,{size:`xlarge`,children:`XLarge`})]})}var C;function w(){return(w=e((()=>{i(),C=n()})))()}function ae(){let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(r,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Saving…`:`Save`}),(0,E.jsx)(r,{disabled:!0,children:`Disabled`}),(0,E.jsx)(r,{active:!0,children:`Active`})]})}var T,E;function D(){return(D=e((()=>{T=t(),i(),E=n()})))()}function O(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r,{variant:`primary`,children:`Primary`}),(0,k.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,k.jsx)(r,{variant:`success`,children:`Success`}),(0,k.jsx)(r,{variant:`warning`,children:`Warning`}),(0,k.jsx)(r,{variant:`error`,children:`Error`}),(0,k.jsx)(r,{variant:`retry`,children:`Retry`}),(0,k.jsx)(r,{variant:`back`,children:`Back`})]})}var k;function A(){return(A=e((()=>{i(),k=n()})))()}function j(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(r,{variant:`primary`,children:[(0,M.jsx)(a,{"aria-hidden":!0}),` Search`]}),(0,M.jsxs)(r,{variant:`success`,children:[(0,M.jsx)(s,{"aria-hidden":!0}),` Add`]}),(0,M.jsx)(r,{variant:`error`,ariaLabel:`Delete item`,children:(0,M.jsx)(ee,{"aria-hidden":!0})})]})}var M;function N(){return(N=e((()=>{i(),o(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Button } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{p(),h(),y(),S(),w(),D(),A(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),te(),l(),X=n(),Z=ne(Object.assign({"./demos/appearance.tsx":d,"./demos/basic.tsx":re,"./demos/icons-loading.tsx":g,"./demos/shapes.tsx":b,"./demos/sizes.tsx":ie,"./demos/states.tsx":ae,"./demos/variants.tsx":O,"./demos/with-icon.tsx":j}),Object.assign({"./demos/appearance.tsx":P,"./demos/basic.tsx":I,"./demos/icons-loading.tsx":R,"./demos/shapes.tsx":B,"./demos/sizes.tsx":H,"./demos/states.tsx":W,"./demos/variants.tsx":K,"./demos/with-icon.tsx":J})),Q=()=>(0,X.jsx)(u,{id:`button`,demos:Z})})))()}$();export{Q as default};