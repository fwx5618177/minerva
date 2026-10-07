import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{Ht as i,Tn as a,Z as o,d as s,dn as c}from"./dist-BWNqkmth.js";import{c as l,n as u,s as d,t as f}from"./DocPage-DGOZswYH.js";function p(){let[e,t]=(0,m.useState)(!1),[n,i]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{variant:`warning`,onClick:()=>t(!0),children:`Archive project`}),(0,h.jsx)(c,{open:e,onOpenChange:t,onConfirm:async()=>{i(!0),await new Promise(e=>setTimeout(e,1200)),i(!1),t(!1)},loading:n,intent:`warning`,title:`Archive this project?`,description:`It becomes read-only for everyone.`,confirmLabel:`Archive`})]})}var m,h;function g(){return(g=e((()=>{m=t(),i(),h=n()})))()}function _(){let[e,t]=(0,v.useState)(`—`);return(0,y.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,y.jsx)(r,{variant:`error`,onClick:async()=>{let e=await o({title:`Delete this book?`,description:`Reviews and ratings are deleted too.`,intent:`danger`});t(e?`Deleted`:`Cancelled`)},children:`Delete book`}),(0,y.jsxs)(`span`,{children:[`Result: `,e]})]})}var v,y;function b(){return(b=e((()=>{v=t(),i(),y=n()})))()}function x(){let e=s();return(0,C.jsx)(r,{onClick:async()=>{await e({title:`Publish chapter?`,confirmLabel:`Publish`})&&alert(`Published`)},children:`Publish`})}function S(){return(0,C.jsx)(a,{children:(0,C.jsx)(x,{})})}var C;function w(){return(w=e((()=>{i(),C=n()})))()}var T;function E(){return(E=e((()=>{T=`import { useState } from "react";
import { Button, ConfirmDialog } from "@minerva/lib-core";

export default function DeclarativeDemo() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const archive = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setOpen(false);
  };
  return (
    <>
      <Button variant="warning" onClick={() => setOpen(true)}>
        Archive project
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={archive}
        loading={loading}
        intent="warning"
        title="Archive this project?"
        description="It becomes read-only for everyone."
        confirmLabel="Archive"
      />
    </>
  );
}
`})))()}var D;function O(){return(O=e((()=>{D=`import { useState } from "react";
import { Button, confirm } from "@minerva/lib-core";

export default function ImperativeDemo() {
  const [result, setResult] = useState("—");
  const remove = async () => {
    const ok = await confirm({
      title: "Delete this book?",
      description: "Reviews and ratings are deleted too.",
      intent: "danger",
    });
    setResult(ok ? "Deleted" : "Cancelled");
  };
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button variant="error" onClick={remove}>
        Delete book
      </Button>
      <span>Result: {result}</span>
    </div>
  );
}
`})))()}var k;function A(){return(A=e((()=>{k=`import { Button, ConfirmProvider, useConfirm } from "@minerva/lib-core";

function PublishButton() {
  const ask = useConfirm();
  return (
    <Button
      onClick={async () => {
        if (await ask({ title: "Publish chapter?", confirmLabel: "Publish" })) {
          alert("Published");
        }
      }}
    >
      Publish
    </Button>
  );
}

export default function ProviderDemo() {
  return (
    <ConfirmProvider>
      <PublishButton />
    </ConfirmProvider>
  );
}
`})))()}var j,M,N;function P(){return(P=e((()=>{g(),b(),w(),E(),O(),A(),t(),u(),l(),j=n(),M=d(Object.assign({"./demos/declarative.tsx":p,"./demos/imperative.tsx":_,"./demos/provider.tsx":S}),Object.assign({"./demos/declarative.tsx":T,"./demos/imperative.tsx":D,"./demos/provider.tsx":k})),N=()=>(0,j.jsx)(f,{id:`confirm`,demos:M})})))()}P();export{N as default};