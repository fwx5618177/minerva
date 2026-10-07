import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{H as i,Rt as a,ht as o,lt as s,nt as c}from"./dist-DkgrNLMS.js";import{c as l,n as u,s as d,t as f}from"./DocPage-Bnv84vTs.js";function p(){let[e,t]=(0,m.useState)(`—`);return(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[g.map(({label:e,options:n})=>(0,h.jsx)(r,{color:n.color,variant:`outline`,onClick:async()=>{let r=await s(n);t(`${e}: ${r?`confirmed`:`cancelled`}`)},children:e},e)),(0,h.jsxs)(`span`,{children:[`Result: `,e]})]})}var m,h,g;function _(){return(_=e((()=>{m=t(),a(),h=n(),g=[{label:`Publish`,options:{title:`Publish this chapter?`,color:`primary`}},{label:`Reset`,options:{title:`Reset all settings?`,description:`Your preferences go back to their defaults.`,color:`warning`,confirmLabel:`Reset`}},{label:`Delete`,options:{title:`Delete this draft?`,color:`danger`}}]})))()}function v(){let[e,t]=(0,y.useState)(!1),[n,i]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{color:`warning`,onClick:()=>t(!0),children:`Archive project`}),(0,b.jsx)(c,{open:e,onOpenChange:t,onConfirm:async()=>{i(!0),await new Promise(e=>setTimeout(e,1200)),i(!1),t(!1)},loading:n,color:`warning`,title:`Archive this project?`,description:`It becomes read-only for everyone.`,confirmLabel:`Archive`})]})}var y,b;function x(){return(x=e((()=>{y=t(),a(),b=n()})))()}function S(){let[e,t]=(0,C.useState)(`—`);return(0,w.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,w.jsx)(r,{color:`danger`,onClick:async()=>{let e=await s({title:`Delete this book?`,description:`Reviews and ratings are deleted too.`,color:`danger`});t(e?`Deleted`:`Cancelled`)},children:`Delete book`}),(0,w.jsxs)(`span`,{children:[`Result: `,e]})]})}var C,w;function T(){return(T=e((()=>{C=t(),a(),w=n()})))()}function E(){let e=o();return(0,O.jsx)(r,{onClick:async()=>{await e({title:`Publish chapter?`,confirmLabel:`Publish`})&&alert(`Published`)},children:`Publish`})}function D(){return(0,O.jsx)(i,{children:(0,O.jsx)(E,{})})}var O;function k(){return(k=e((()=>{a(),O=n()})))()}var A;function j(){return(j=e((()=>{A=`import { useState } from "react";
import { Button, confirm, type ConfirmOptions } from "@minerva/lib-core";

const examples: Array<{ label: string; options: ConfirmOptions }> = [
  {
    label: "Publish",
    options: { title: "Publish this chapter?", color: "primary" },
  },
  {
    label: "Reset",
    options: {
      title: "Reset all settings?",
      description: "Your preferences go back to their defaults.",
      color: "warning",
      confirmLabel: "Reset",
    },
  },
  {
    // color="danger" defaults the confirm label to "Delete"
    label: "Delete",
    options: { title: "Delete this draft?", color: "danger" },
  },
];

export default function ColorsDemo() {
  const [result, setResult] = useState("—");
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {examples.map(({ label, options }) => (
        <Button
          key={label}
          color={options.color}
          variant="outline"
          onClick={async () => {
            const ok = await confirm(options);
            setResult(\`\${label}: \${ok ? "confirmed" : "cancelled"}\`);
          }}
        >
          {label}
        </Button>
      ))}
      <span>Result: {result}</span>
    </div>
  );
}
`})))()}var M;function N(){return(N=e((()=>{M=`import { useState } from "react";
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
      <Button color="warning" onClick={() => setOpen(true)}>
        Archive project
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={archive}
        loading={loading}
        color="warning"
        title="Archive this project?"
        description="It becomes read-only for everyone."
        confirmLabel="Archive"
      />
    </>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { useState } from "react";
import { Button, confirm } from "@minerva/lib-core";

export default function ImperativeDemo() {
  const [result, setResult] = useState("—");
  const remove = async () => {
    const ok = await confirm({
      title: "Delete this book?",
      description: "Reviews and ratings are deleted too.",
      color: "danger",
    });
    setResult(ok ? "Deleted" : "Cancelled");
  };
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button color="danger" onClick={remove}>
        Delete book
      </Button>
      <span>Result: {result}</span>
    </div>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Button, ConfirmProvider, useConfirm } from "@minerva/lib-core";

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
`})))()}var R,z,B;function V(){return(V=e((()=>{_(),x(),T(),k(),j(),N(),F(),L(),t(),u(),l(),R=n(),z=d(Object.assign({"./demos/colors.tsx":p,"./demos/declarative.tsx":v,"./demos/imperative.tsx":S,"./demos/provider.tsx":D}),Object.assign({"./demos/colors.tsx":A,"./demos/declarative.tsx":M,"./demos/imperative.tsx":P,"./demos/provider.tsx":I})),B=()=>(0,R.jsx)(f,{id:`confirm`,demos:z})})))()}V();export{B as default};