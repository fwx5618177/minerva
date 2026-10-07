import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,m as n,t as r}from"./react-vendor-EhfBFkcC.js";import{c as i,i as a,l as o,n as s,r as c,s as l,t as ee,u}from"./DocPage-BvqFnACE.js";import{n as te,t as ne}from"./useI18n-s5sAv-jy.js";import{n as d,t as f}from"./Button-CVTxJPft.js";import{a as re,c as ie,l as ae,t as oe}from"./Modal-BYER280a.js";import{H as se,I as ce,Q as le,R as ue,U as de,V as fe,Z as pe}from"./sample-DdQB_zfN.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{se(),te(),d(),re(),p=t(),m=r(),h=n(),g=({open:e,onOpenChange:t,onConfirm:n,title:r,description:i,confirmLabel:a,cancelLabel:o,closeLabel:s,color:c=`primary`,loading:l=!1,confirmDisabled:ee=!1})=>{let{t:u}=ne();return(0,m.jsxs)(ae,{open:e,onOpenChange:t,title:r,description:i,size:`small`,closeLabel:s,role:`alertdialog`,children:[(0,m.jsx)(oe,{}),(0,m.jsxs)(ie,{children:[(0,m.jsx)(f,{type:`button`,color:`neutral`,variant:`outline`,onClick:()=>t(!1),disabled:l,children:o??u(`confirm.cancel`)}),(0,m.jsx)(f,{type:`button`,color:c,variant:`solid`,onClick:()=>void n(),loading:l,disabled:ee,children:a??u(c===`danger`?`confirm.delete`:`confirm.confirm`)})]})]})},_=e=>e&&(e.portalContainer||e.language)?e:void 0,v=class{constructor(){this.requests=[],this.listeners=new Set,this.nextId=0,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getSnapshot=()=>this.requests,this.enqueue=(e,t)=>new Promise(n=>{this.requests=[...this.requests,{id:++this.nextId,options:e,resolve:n,scope:t}],this.emit()}),this.request=e=>this.enqueue(e)}settle(e,t){let[n,...r]=this.requests;n?.id===e&&(this.requests=r,n.resolve(t),this.emit())}cancelAll(){let e=this.requests;if(e.length!==0){this.requests=[];for(let t of e)t.resolve(!1);this.emit()}}emit(){for(let e of this.listeners)e()}},y=[],b=()=>y,x=({queue:e})=>{let t=(0,p.useSyncExternalStore)(e.subscribe,e.getSnapshot,b)[0];if(!t)return null;let n=(0,m.jsx)(g,{...t.options,open:!0,onOpenChange:n=>{n||e.settle(t.id,!1)},onConfirm:()=>e.settle(t.id,!0)},t.id);return t.scope?(0,m.jsx)(de.Provider,{value:t.scope,children:n},t.id):n},S=(0,p.createContext)(null),C=[],w=null,T=(e,t)=>{if(!w){let e=document.createElement(`div`);e.setAttribute(`data-confirm-host`,``);let t=new v;(0,h.createRoot)(e).render((0,m.jsx)(x,{queue:t})),w={queue:t,container:e}}return w.container.isConnected||document.body.append(w.container),w.queue.enqueue(e,t)},E=(e,t)=>{let n=C[C.length-1];return n?n.enqueue(e,t):typeof document>`u`?Promise.resolve(!1):T(e,t)},D=e=>E(e),O=()=>{let e=(0,p.useContext)(S),t=_(fe());return(0,p.useMemo)(()=>e?t?n=>e.enqueue(n,t):e.request:t?e=>E(e,t):D,[e,t])},k=({children:e})=>{let[t]=(0,p.useState)(()=>new v);return(0,p.useEffect)(()=>(C.push(t),()=>{let e=C.lastIndexOf(t);e>=0&&C.splice(e,1),t.cancelAll()}),[t]),(0,m.jsxs)(S.Provider,{value:t,children:[e,(0,m.jsx)(x,{queue:t})]})}})))()}function me(){let[e,t]=(0,j.useState)(`—`);return(0,M.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[N.map(({label:e,options:n})=>(0,M.jsx)(f,{color:n.color,variant:`outline`,onClick:async()=>{let r=await D(n);t(`${e}: ${r?`confirmed`:`cancelled`}`)},children:e},e)),(0,M.jsxs)(`span`,{children:[`Result: `,e]})]})}var j,M,N;function P(){return(P=e((()=>{j=t(),d(),A(),M=r(),N=[{label:`Publish`,options:{title:`Publish this chapter?`,color:`primary`}},{label:`Reset`,options:{title:`Reset all settings?`,description:`Your preferences go back to their defaults.`,color:`warning`,confirmLabel:`Reset`}},{label:`Delete`,options:{title:`Delete this draft?`,color:`danger`}}]})))()}function he(){let[e,t]=(0,F.useState)(!1),[n,r]=(0,F.useState)(!1);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f,{color:`warning`,onClick:()=>t(!0),children:`Archive project`}),(0,I.jsx)(g,{open:e,onOpenChange:t,onConfirm:async()=>{r(!0),await new Promise(e=>setTimeout(e,1200)),r(!1),t(!1)},loading:n,color:`warning`,title:`Archive this project?`,description:`It becomes read-only for everyone.`,confirmLabel:`Archive`})]})}var F,I;function ge(){return(ge=e((()=>{F=t(),d(),A(),I=r()})))()}function _e(){let[e,t]=(0,L.useState)(`—`);return(0,R.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,R.jsx)(f,{color:`danger`,onClick:async()=>{let e=await D({title:`Delete this book?`,description:`Reviews and ratings are deleted too.`,color:`danger`});t(e?`Deleted`:`Cancelled`)},children:`Delete book`}),(0,R.jsxs)(`span`,{children:[`Result: `,e]})]})}var L,R;function z(){return(z=e((()=>{L=t(),d(),A(),R=r()})))()}function ve(){let e=O();return(0,B.jsx)(f,{onClick:async()=>{await e({title:`Publish chapter?`,confirmLabel:`Publish`})&&alert(`Published`)},children:`Publish`})}function ye(){return(0,B.jsx)(k,{children:(0,B.jsx)(ve,{})})}var B;function V(){return(V=e((()=>{d(),A(),B=r()})))()}function be(){let e=O(),[t,n]=(0,H.useState)(`—`);return(0,U.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,U.jsx)(f,{color:`danger`,onClick:async()=>{let t=await e({title:`Delete this chapter? (useConfirm(): dark, tech, 中文)`,color:`danger`});n(String(t))},children:`useConfirm()`}),(0,U.jsx)(f,{color:`neutral`,variant:`outline`,onClick:async()=>n(String(await W())),children:`confirm()`}),(0,U.jsx)(`output`,{style:{alignSelf:`center`},children:t})]})}function xe(){return(0,U.jsx)(ce,{theme:`dark`,palette:`tech`,locale:{language:`zh`},children:(0,U.jsx)(be,{})})}var H,U,W;function G(){return(G=e((()=>{H=t(),d(),ue(),A(),U=r(),W=()=>D({title:`Retry the upload? (confirm(): root scope)`})})))()}var K;function q(){return(q=e((()=>{K=`import { useState } from "react";
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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { useState } from "react";
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
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { useState } from "react";
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
`})))()}var Q;function Se(){return(Se=e((()=>{Q=`import { Button, ConfirmProvider, useConfirm } from "@minerva/lib-core";

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
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`import { useState } from "react";
import { Button, ConfigProvider, confirm, useConfirm } from "@minerva/lib-core";

// Code outside React (API client, event bus...): no hook available, so it
// uses confirm(), rendered with the root theme and language.
const askToRetry = () =>
  confirm({ title: "Retry the upload? (confirm(): root scope)" });

function Actions() {
  // Inside a component: bound to the nearest ConfigProvider scope
  const ask = useConfirm();
  const [answer, setAnswer] = useState<string>("—");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Button
        color="danger"
        onClick={async () => {
          const ok = await ask({
            title: "Delete this chapter? (useConfirm(): dark, tech, 中文)",
            color: "danger",
          });
          setAnswer(String(ok));
        }}
      >
        useConfirm()
      </Button>
      <Button
        color="neutral"
        variant="outline"
        onClick={async () => setAnswer(String(await askToRetry()))}
      >
        confirm()
      </Button>
      <output style={{ alignSelf: "center" }}>{answer}</output>
    </div>
  );
}

export default function ScopedDemo() {
  return (
    <ConfigProvider theme="dark" palette="tech" locale={{ language: "zh" }}>
      <Actions />
    </ConfigProvider>
  );
}
`})))()}var $,Te,Ee,De;function Oe(){return(Oe=e((()=>{P(),ge(),z(),V(),G(),q(),Y(),Z(),Se(),we(),t(),pe(),u(),s(),a(),i(),$=r(),Te=l(Object.assign({"./demos/colors.tsx":me,"./demos/declarative.tsx":he,"./demos/imperative.tsx":_e,"./demos/provider.tsx":ye,"./demos/scoped.tsx":xe}),Object.assign({"./demos/colors.tsx":K,"./demos/declarative.tsx":J,"./demos/imperative.tsx":X,"./demos/provider.tsx":Q,"./demos/scoped.tsx":Ce})),Ee=`// Inside a component: follows the nearest ConfigProvider scope
function DeleteButton() {
  const confirm = useConfirm();
  return (
    <Button onClick={async () => (await confirm({ title: "Delete?" })) && remove()}>
      Delete
    </Button>
  );
}

// Outside React (API client, event bus, router guard...): root scope
import { confirm } from "@minerva/lib-core";
router.beforeLeave(() => confirm({ title: "Discard changes?" }));`,De=()=>{let{t:e}=le(),t=(0,$.jsxs)(`section`,{className:c.section,"aria-labelledby":`when-to-use`,children:[(0,$.jsx)(`h2`,{id:`when-to-use`,children:e(`docs.confirm.usage.title`)}),(0,$.jsxs)(`ul`,{className:c.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.confirm.usage.hook`)}),(0,$.jsx)(`li`,{children:e(`docs.confirm.usage.function`)})]}),(0,$.jsx)(o,{code:Ee,language:`tsx`})]});return(0,$.jsx)(ee,{id:`confirm`,demos:Te,intro:t})}})))()}Oe();export{De as default};