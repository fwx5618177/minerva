import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{m as ee,n as r,p as te,t as ne}from"./DocPage-OkRujup2.js";import{H as i,M as re,i as ie,n as a,r as o,z as ae}from"./io5-CFVaALQJ.js";import{n as s,t as c}from"./Button-BJTVw8sA.js";import{n as oe,t as l}from"./Input-CyLQYvbp.js";import{i as se,n as ce,r as le}from"./Stack-C9KgfqgX.js";import{a as ue,i as de,n as fe,r as pe}from"./Toast-BV-f0QRL.js";function me(){return(0,u.jsx)(fe,{children:(0,u.jsx)(s,{onClick:()=>de.success(`Clicked!`),children:`Click me`})})}var u;function d(){return(d=e((()=>{c(),pe(),ue(),u=n()})))()}function he(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{color:`primary`,children:`Primary`}),(0,f.jsx)(s,{color:`neutral`,children:`Neutral`}),(0,f.jsx)(s,{color:`success`,children:`Success`}),(0,f.jsx)(s,{color:`warning`,children:`Warning`}),(0,f.jsx)(s,{color:`danger`,children:`Danger`}),(0,f.jsx)(s,{color:`info`,children:`Info`})]})}var f;function p(){return(p=e((()=>{c(),f=n()})))()}function ge(){let[e,t]=(0,m.useState)(`Nothing yet`);return(0,h.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget).get(`title`);t(`Submitted "${String(n)}"`)},onReset:()=>t(`Reset`),style:{display:`flex`,flexWrap:`wrap`,gap:8,alignItems:`center`},children:[(0,h.jsx)(oe,{name:`title`,"aria-label":`Title`,defaultValue:`Draft`}),(0,h.jsx)(s,{color:`neutral`,variant:`outline`,onClick:()=>t(`Preview opened (form not submitted)`),children:`Preview`}),(0,h.jsx)(s,{type:`reset`,color:`neutral`,variant:`ghost`,children:`Reset`}),(0,h.jsx)(s,{type:`submit`,children:`Save`}),(0,h.jsx)(`output`,{style:{flexBasis:`100%`},children:e})]})}var m,h;function g(){return(g=e((()=>{m=t(),c(),l(),h=n()})))()}function _e(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:320},children:[(0,v.jsx)(s,{startIcon:(0,v.jsx)(a,{"aria-hidden":!0}),children:`Add item`}),(0,v.jsx)(s,{variant:`outline`,endIcon:(0,v.jsx)(ie,{"aria-hidden":!0}),children:`Continue`}),(0,v.jsx)(s,{color:`success`,fullWidth:!0,loading:e,loadingText:`Saving...`,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:`Save`})]})}var _,v;function y(){return(y=e((()=>{_=t(),c(),i(),v=n()})))()}function ve(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{shape:`square`,children:`Square`}),(0,b.jsx)(s,{shape:`rounded`,children:`Rounded`}),(0,b.jsx)(s,{shape:`circle`,"aria-label":`Add`,children:`+`}),(0,b.jsx)(s,{borderRadius:`none`,children:`No radius`}),(0,b.jsx)(s,{borderRadius:12,children:`12px radius`})]})}var b;function x(){return(x=e((()=>{c(),b=n()})))()}function ye(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s,{size:`xsmall`,children:`XSmall`}),(0,S.jsx)(s,{size:`small`,children:`Small`}),(0,S.jsx)(s,{size:`medium`,children:`Medium`}),(0,S.jsx)(s,{size:`large`,children:`Large`}),(0,S.jsx)(s,{size:`xlarge`,children:`XLarge`})]})}var S;function C(){return(C=e((()=>{c(),S=n()})))()}function be(){let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(s,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Saving…`:`Save`}),(0,T.jsx)(s,{disabled:!0,children:`Disabled`}),(0,T.jsx)(s,{active:!0,children:`Active`})]})}var w,T;function E(){return(E=e((()=>{w=t(),c(),T=n()})))()}function xe(){return(0,D.jsx)(ce,{gap:3,children:[`primary`,`neutral`,`danger`].map(e=>(0,D.jsx)(se,{gap:2,wrap:!0,children:O.map(t=>(0,D.jsx)(s,{color:e,variant:t,children:t},t))},e))})}var D,O;function k(){return(k=e((()=>{c(),le(),D=n(),O=[`solid`,`outline`,`ghost`,`link`]})))()}function Se(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s,{startIcon:(0,A.jsx)(a,{"aria-hidden":!0}),children:`Add`}),(0,A.jsx)(s,{color:`danger`,startIcon:(0,A.jsx)(re,{"aria-hidden":!0}),children:`Retry`}),(0,A.jsx)(s,{color:`neutral`,variant:`ghost`,startIcon:(0,A.jsx)(o,{"aria-hidden":!0}),children:`Back`}),(0,A.jsx)(s,{color:`danger`,variant:`outline`,"aria-label":`Delete item`,children:(0,A.jsx)(ae,{"aria-hidden":!0})})]})}var A;function j(){return(j=e((()=>{c(),i(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { Button, ToastProvider, toast } from "minerva-design";

export default function BasicDemo() {
  return (
    // In an app, mount one ToastProvider near the root
    <ToastProvider>
      <Button onClick={() => toast.success("Clicked!")}>Click me</Button>
    </ToastProvider>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { Button } from "minerva-design";

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
import { Button, Input } from "minerva-design";

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
import { Button } from "minerva-design";
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
`})))()}var B;function V(){return(V=e((()=>{B=`import { Button } from "minerva-design";

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
`})))()}var H;function U(){return(U=e((()=>{H=`import { Button } from "minerva-design";

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
import { Button } from "minerva-design";

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
`})))()}var K;function q(){return(q=e((()=>{K=`import { Button, HStack, VStack } from "minerva-design";

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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Button } from "minerva-design";
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
`})))()}var X,Z,Q;function $(){return($=e((()=>{d(),p(),g(),y(),x(),C(),E(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),r(),ee(),X=n(),Z=te(Object.assign({"./demos/basic.tsx":me,"./demos/colors.tsx":he,"./demos/form.tsx":ge,"./demos/icons-loading.tsx":_e,"./demos/shapes.tsx":ve,"./demos/sizes.tsx":ye,"./demos/states.tsx":be,"./demos/variants.tsx":xe,"./demos/with-icon.tsx":Se}),Object.assign({"./demos/basic.tsx":M,"./demos/colors.tsx":P,"./demos/form.tsx":I,"./demos/icons-loading.tsx":R,"./demos/shapes.tsx":B,"./demos/sizes.tsx":H,"./demos/states.tsx":W,"./demos/variants.tsx":K,"./demos/with-icon.tsx":J})),Q=()=>(0,X.jsx)(ne,{id:`button`,demos:Z})})))()}$();export{Q as default};