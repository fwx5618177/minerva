import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./Button-CG2pPO-r.js";import{n as ee,t as te}from"./Input-DrhPsTO_.js";import{n as a,r as ne,t as re}from"./Stack-CTQLvSFR.js";import{A as ie,E as ae,N as o,d as oe,l as s,u as c}from"./sample-Dya6Jarx.js";import{c as se,n as l,s as ce,t as le}from"./DocPage-DzKszXiH.js";function ue(){return(0,u.jsx)(i,{onClick:()=>alert(`Clicked!`),children:`Click me`})}var u;function d(){return(d=e((()=>{r(),u=n()})))()}function de(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{color:`primary`,children:`Primary`}),(0,f.jsx)(i,{color:`neutral`,children:`Neutral`}),(0,f.jsx)(i,{color:`success`,children:`Success`}),(0,f.jsx)(i,{color:`warning`,children:`Warning`}),(0,f.jsx)(i,{color:`danger`,children:`Danger`}),(0,f.jsx)(i,{color:`info`,children:`Info`})]})}var f;function p(){return(p=e((()=>{r(),f=n()})))()}function fe(){let[e,t]=(0,m.useState)(`Nothing yet`);return(0,h.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget).get(`title`);t(`Submitted "${String(n)}"`)},onReset:()=>t(`Reset`),style:{display:`flex`,flexWrap:`wrap`,gap:8,alignItems:`center`},children:[(0,h.jsx)(te,{name:`title`,"aria-label":`Title`,defaultValue:`Draft`}),(0,h.jsx)(i,{color:`neutral`,variant:`outline`,onClick:()=>t(`Preview opened (form not submitted)`),children:`Preview`}),(0,h.jsx)(i,{type:`reset`,color:`neutral`,variant:`ghost`,children:`Reset`}),(0,h.jsx)(i,{type:`submit`,children:`Save`}),(0,h.jsx)(`output`,{style:{flexBasis:`100%`},children:e})]})}var m,h;function g(){return(g=e((()=>{m=t(),r(),ee(),h=n()})))()}function pe(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:320},children:[(0,v.jsx)(i,{startIcon:(0,v.jsx)(s,{"aria-hidden":!0}),children:`Add item`}),(0,v.jsx)(i,{variant:`outline`,endIcon:(0,v.jsx)(oe,{"aria-hidden":!0}),children:`Continue`}),(0,v.jsx)(i,{color:`success`,fullWidth:!0,loading:e,loadingText:`Saving...`,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:`Save`})]})}var _,v;function y(){return(y=e((()=>{_=t(),r(),o(),v=n()})))()}function me(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{shape:`square`,children:`Square`}),(0,b.jsx)(i,{shape:`rounded`,children:`Rounded`}),(0,b.jsx)(i,{shape:`circle`,"aria-label":`Add`,children:`+`}),(0,b.jsx)(i,{borderRadius:`none`,children:`No radius`}),(0,b.jsx)(i,{borderRadius:12,children:`12px radius`})]})}var b;function x(){return(x=e((()=>{r(),b=n()})))()}function he(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{size:`xsmall`,children:`XSmall`}),(0,S.jsx)(i,{size:`small`,children:`Small`}),(0,S.jsx)(i,{size:`medium`,children:`Medium`}),(0,S.jsx)(i,{size:`large`,children:`Large`}),(0,S.jsx)(i,{size:`xlarge`,children:`XLarge`})]})}var S;function C(){return(C=e((()=>{r(),S=n()})))()}function ge(){let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Saving…`:`Save`}),(0,T.jsx)(i,{disabled:!0,children:`Disabled`}),(0,T.jsx)(i,{active:!0,children:`Active`})]})}var w,T;function E(){return(E=e((()=>{w=t(),r(),T=n()})))()}function _e(){return(0,D.jsx)(ne,{gap:3,children:[`primary`,`neutral`,`danger`].map(e=>(0,D.jsx)(re,{gap:2,wrap:!0,children:O.map(t=>(0,D.jsx)(i,{color:e,variant:t,children:t},t))},e))})}var D,O;function k(){return(k=e((()=>{r(),a(),D=n(),O=[`solid`,`outline`,`ghost`,`link`]})))()}function ve(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(i,{startIcon:(0,A.jsx)(s,{"aria-hidden":!0}),children:`Add`}),(0,A.jsx)(i,{color:`danger`,startIcon:(0,A.jsx)(ae,{"aria-hidden":!0}),children:`Retry`}),(0,A.jsx)(i,{color:`neutral`,variant:`ghost`,startIcon:(0,A.jsx)(c,{"aria-hidden":!0}),children:`Back`}),(0,A.jsx)(i,{color:`danger`,variant:`outline`,"aria-label":`Delete item`,children:(0,A.jsx)(ie,{"aria-hidden":!0})})]})}var A;function j(){return(j=e((()=>{r(),o(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { Button } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Button onClick={() => alert("Clicked!")}>Click me</Button>;
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { Button } from "@minerva/lib-core";

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
`})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
import { Button, Input } from "@minerva/lib-core";

export default function FormDemo() {
  const [log, setLog] = useState("Nothing yet");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const title = new FormData(event.currentTarget).get("title");
        setLog(\`Submitted "\${String(title)}"\`);
      }}
      onReset={() => setLog("Reset")}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        alignItems: "center",
      }}
    >
      <Input name="title" aria-label="Title" defaultValue="Draft" />
      {/* No type: defaults to "button", so it never submits the form */}
      <Button
        color="neutral"
        variant="outline"
        onClick={() => setLog("Preview opened (form not submitted)")}
      >
        Preview
      </Button>
      <Button type="reset" color="neutral" variant="ghost">
        Reset
      </Button>
      <Button type="submit">Save</Button>
      <output style={{ flexBasis: "100%" }}>{log}</output>
    </form>
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
      <Button shape="circle" aria-label="Add">
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
      <Button color="danger" variant="outline" aria-label="Delete item">
        <IoTrash aria-hidden />
      </Button>
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{d(),p(),g(),y(),x(),C(),E(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),l(),se(),X=n(),Z=ce(Object.assign({"./demos/basic.tsx":ue,"./demos/colors.tsx":de,"./demos/form.tsx":fe,"./demos/icons-loading.tsx":pe,"./demos/shapes.tsx":me,"./demos/sizes.tsx":he,"./demos/states.tsx":ge,"./demos/variants.tsx":_e,"./demos/with-icon.tsx":ve}),Object.assign({"./demos/basic.tsx":M,"./demos/colors.tsx":P,"./demos/form.tsx":I,"./demos/icons-loading.tsx":R,"./demos/shapes.tsx":B,"./demos/sizes.tsx":H,"./demos/states.tsx":W,"./demos/variants.tsx":K,"./demos/with-icon.tsx":J})),Q=()=>(0,X.jsx)(le,{id:`button`,demos:Z})})))()}$();export{Q as default};