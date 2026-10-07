import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{V as ee,Z as i,a,o as te,q as ne,s as o}from"./registry-BWHeIt51.js";import{D as s,Rt as c,_ as re}from"./dist-DkgrNLMS.js";import{c as l,n as u,s as ie,t as d}from"./DocPage-Bnv84vTs.js";function ae(){return(0,f.jsx)(r,{onClick:()=>alert(`Clicked!`),children:`Click me`})}var f;function p(){return(p=e((()=>{c(),f=n()})))()}function oe(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{color:`primary`,children:`Primary`}),(0,m.jsx)(r,{color:`neutral`,children:`Neutral`}),(0,m.jsx)(r,{color:`success`,children:`Success`}),(0,m.jsx)(r,{color:`warning`,children:`Warning`}),(0,m.jsx)(r,{color:`danger`,children:`Danger`}),(0,m.jsx)(r,{color:`info`,children:`Info`})]})}var m;function h(){return(h=e((()=>{c(),m=n()})))()}function g(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:320},children:[(0,v.jsx)(r,{startIcon:(0,v.jsx)(a,{"aria-hidden":!0}),children:`Add item`}),(0,v.jsx)(r,{variant:`outline`,endIcon:(0,v.jsx)(o,{"aria-hidden":!0}),children:`Continue`}),(0,v.jsx)(r,{color:`success`,fullWidth:!0,loading:e,loadingText:`Saving...`,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:`Save`})]})}var _,v;function y(){return(y=e((()=>{_=t(),c(),i(),v=n()})))()}function se(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{shape:`square`,children:`Square`}),(0,b.jsx)(r,{shape:`rounded`,children:`Rounded`}),(0,b.jsx)(r,{shape:`circle`,ariaLabel:`Add`,children:`+`}),(0,b.jsx)(r,{borderRadius:`none`,children:`No radius`}),(0,b.jsx)(r,{borderRadius:12,children:`12px radius`})]})}var b;function x(){return(x=e((()=>{c(),b=n()})))()}function ce(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r,{size:`xsmall`,children:`XSmall`}),(0,S.jsx)(r,{size:`small`,children:`Small`}),(0,S.jsx)(r,{size:`medium`,children:`Medium`}),(0,S.jsx)(r,{size:`large`,children:`Large`}),(0,S.jsx)(r,{size:`xlarge`,children:`XLarge`})]})}var S;function C(){return(C=e((()=>{c(),S=n()})))()}function w(){let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(r,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Saving…`:`Save`}),(0,E.jsx)(r,{disabled:!0,children:`Disabled`}),(0,E.jsx)(r,{active:!0,children:`Active`})]})}var T,E;function D(){return(D=e((()=>{T=t(),c(),E=n()})))()}function O(){return(0,k.jsx)(s,{gap:3,children:[`primary`,`neutral`,`danger`].map(e=>(0,k.jsx)(re,{gap:2,wrap:!0,children:A.map(t=>(0,k.jsx)(r,{color:e,variant:t,children:t},t))},e))})}var k,A;function j(){return(j=e((()=>{c(),k=n(),A=[`solid`,`outline`,`ghost`,`link`]})))()}function le(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(r,{startIcon:(0,M.jsx)(a,{"aria-hidden":!0}),children:`Add`}),(0,M.jsx)(r,{color:`danger`,startIcon:(0,M.jsx)(ee,{"aria-hidden":!0}),children:`Retry`}),(0,M.jsx)(r,{color:`neutral`,variant:`ghost`,startIcon:(0,M.jsx)(te,{"aria-hidden":!0}),children:`Back`}),(0,M.jsx)(r,{color:`danger`,variant:`outline`,ariaLabel:`Delete item`,children:(0,M.jsx)(ne,{"aria-hidden":!0})})]})}var M;function N(){return(N=e((()=>{c(),i(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Button } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Button onClick={() => alert("Clicked!")}>Click me</Button>;
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Button } from "@minerva/lib-core";

export default function ColorsDemo() {
  return (
    <>
      <Button color="primary">Primary</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="info">Info</Button>
    </>
  );
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
      <Button startIcon={<IoAdd aria-hidden />}>Add item</Button>
      <Button variant="outline" endIcon={<IoArrowForward aria-hidden />}>
        Continue
      </Button>
      <Button
        color="success"
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
      <Button size="xsmall">XSmall</Button>
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
`})))()}var K;function q(){return(q=e((()=>{K=`import { Button, HStack, VStack } from "@minerva/lib-core";

const variants = ["solid", "outline", "ghost", "link"] as const;

export default function VariantsDemo() {
  return (
    <VStack gap={3}>
      {(["primary", "neutral", "danger"] as const).map((color) => (
        <HStack key={color} gap={2} wrap>
          {variants.map((variant) => (
            <Button key={variant} color={color} variant={variant}>
              {variant}
            </Button>
          ))}
        </HStack>
      ))}
    </VStack>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Button } from "@minerva/lib-core";
import { IoAdd, IoArrowBack, IoRefresh, IoTrash } from "react-icons/io5";

export default function WithIconDemo() {
  return (
    <>
      <Button startIcon={<IoAdd aria-hidden />}>Add</Button>
      <Button color="danger" startIcon={<IoRefresh aria-hidden />}>
        Retry
      </Button>
      <Button
        color="neutral"
        variant="ghost"
        startIcon={<IoArrowBack aria-hidden />}
      >
        Back
      </Button>
      <Button color="danger" variant="outline" ariaLabel="Delete item">
        <IoTrash aria-hidden />
      </Button>
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{p(),h(),y(),x(),C(),D(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),u(),l(),X=n(),Z=ie(Object.assign({"./demos/basic.tsx":ae,"./demos/colors.tsx":oe,"./demos/icons-loading.tsx":g,"./demos/shapes.tsx":se,"./demos/sizes.tsx":ce,"./demos/states.tsx":w,"./demos/variants.tsx":O,"./demos/with-icon.tsx":le}),Object.assign({"./demos/basic.tsx":P,"./demos/colors.tsx":I,"./demos/icons-loading.tsx":R,"./demos/shapes.tsx":B,"./demos/sizes.tsx":H,"./demos/states.tsx":W,"./demos/variants.tsx":K,"./demos/with-icon.tsx":J})),Q=()=>(0,X.jsx)(d,{id:`button`,demos:Z})})))()}$();export{Q as default};