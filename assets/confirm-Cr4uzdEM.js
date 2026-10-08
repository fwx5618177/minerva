import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,m as n,t as r}from"./react-vendor-aZSMfLKR.js";import{o as ee,vt as i}from"./minerva-web-components-ByJsjP0z.js";import{g as a,h as o,l as s,m as c,n as l,p as u,t as d,u as te}from"./DocPage-CVA4UCUb.js";import{nt as ne,rt as re}from"./io5-BO4aBax7.js";import{n as ie,t as ae}from"./useI18n-B2tkKcqQ.js";import{i as oe,n as se,r as ce}from"./themeScope-CVsq4AXR.js";import{t as f}from"./stylingHooks-GjssfG7q.js";import{n as p,t as m}from"./Button-DoMjJPcZ.js";import{T as le,w as ue}from"./icons-C9qyBhWC.js";import{r as de,t as fe}from"./ConfigProvider-BH-I06mC.js";import{a as pe,i as me,o as he,r as ge,s as _e,t as ve}from"./Dialog-CZnL8nH0.js";import{n as h,t as ye}from"./modal.module.scss-BHzjFP8M.js";import{a as be,i as xe,n as Se,r as Ce}from"./Toast-C-XA42L4.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{i(),ce(),ie(),m(),le(),pe(),ye(),g=t(),_=r(),v=n(),y=({open:e,onOpenChange:t,onConfirm:n,title:r,description:i,confirmLabel:a,cancelLabel:o,closeLabel:s,color:c=`primary`,loading:l=!1,confirmDisabled:u=!1})=>{let{t:d}=ae();return(0,_.jsx)(me,{componentName:`ConfirmDialog`,open:e,onOpenChange:t,children:(0,_.jsxs)(he,{overlayClassName:h.overlay,overlayAttributes:f(`confirm-dialog`,`overlay`),className:ee(h.content,h.small),role:`alertdialog`,...f(`confirm-dialog`,`content`,{color:c,loading:l}),children:[i&&(0,_.jsx)(_e,{className:h.description,...f(`confirm-dialog`,`description`),children:i}),r&&(0,_.jsx)(ge,{asChild:!0,children:(0,_.jsx)(`div`,{className:h.header,...f(`confirm-dialog`,`header`),children:r})}),(0,_.jsx)(`div`,{className:h.body,...f(`confirm-dialog`,`body`)}),(0,_.jsxs)(`div`,{className:h.footer,...f(`confirm-dialog`,`footer`),children:[(0,_.jsx)(p,{type:`button`,color:`neutral`,variant:`outline`,onClick:()=>t(!1),disabled:l,children:o??d(`confirm.cancel`)}),(0,_.jsx)(p,{type:`button`,color:c,variant:`solid`,onClick:()=>void n(),loading:l,disabled:u,children:a??d(c===`danger`?`confirm.delete`:`confirm.confirm`)})]}),(0,_.jsx)(ve,{className:h.close,"aria-label":s??d(`modal.close`),...f(`confirm-dialog`,`close-button`),children:(0,_.jsx)(ue,{size:16,"aria-hidden":`true`})})]})})},b=e=>e&&(e.portalContainer||e.language)?e:void 0,x=class{constructor(){this.requests=[],this.listeners=new Set,this.nextId=0,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getSnapshot=()=>this.requests,this.enqueue=(e,t)=>new Promise(n=>{this.requests=[...this.requests,{id:++this.nextId,options:e,resolve:n,scope:t}],this.emit()}),this.request=e=>this.enqueue(e)}settle(e,t){let[n,...r]=this.requests;n?.id===e&&(this.requests=r,n.resolve(t),this.emit())}cancelAll(){let e=this.requests;if(e.length!==0){this.requests=[];for(let t of e)t.resolve(!1);this.emit()}}emit(){for(let e of this.listeners)e()}},S=[],C=()=>S,w=({queue:e})=>{let t=(0,g.useSyncExternalStore)(e.subscribe,e.getSnapshot,C)[0];if(!t)return null;let n=(0,_.jsx)(y,{...t.options,open:!0,onOpenChange:n=>{n||e.settle(t.id,!1)},onConfirm:()=>e.settle(t.id,!0)},t.id);return t.scope?(0,_.jsx)(oe.Provider,{value:t.scope,children:n},t.id):n},T=(0,g.createContext)(null),E=[],D=null,O=(e,t)=>{if(!D){let e=document.createElement(`div`);e.setAttribute(`data-confirm-host`,``);let t=new x;(0,v.createRoot)(e).render((0,_.jsx)(w,{queue:t})),D={queue:t,container:e}}return D.container.isConnected||document.body.append(D.container),D.queue.enqueue(e,t)},k=(e,t)=>{let n=E[E.length-1];return n?n.enqueue(e,t):typeof document>`u`?Promise.resolve(!1):O(e,t)},A=e=>k(e),j=()=>{let e=(0,g.useContext)(T),t=b(se());return(0,g.useMemo)(()=>e?t?n=>e.enqueue(n,t):e.request:t?e=>k(e,t):A,[e,t])},M=({children:e})=>{let[t]=(0,g.useState)(()=>new x);return(0,g.useEffect)(()=>(E.push(t),()=>{let e=E.lastIndexOf(t);e>=0&&E.splice(e,1),t.cancelAll()}),[t]),(0,_.jsxs)(T.Provider,{value:t,children:[e,(0,_.jsx)(w,{queue:t})]})}})))()}function we(){let[e,t]=(0,P.useState)(`—`);return(0,F.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[Te.map(({label:e,options:n})=>(0,F.jsx)(p,{color:n.color,variant:`outline`,onClick:async()=>{let r=await A(n);t(`${e}: ${r?`confirmed`:`cancelled`}`)},children:e},e)),(0,F.jsxs)(`span`,{children:[`Result: `,e]})]})}var P,F,Te;function I(){return(I=e((()=>{P=t(),m(),N(),F=r(),Te=[{label:`Publish`,options:{title:`Publish this chapter?`,color:`primary`}},{label:`Reset`,options:{title:`Reset all settings?`,description:`Your preferences go back to their defaults.`,color:`warning`,confirmLabel:`Reset`}},{label:`Delete`,options:{title:`Delete this draft?`,color:`danger`}}]})))()}function Ee(){let[e,t]=(0,L.useState)(!1),[n,r]=(0,L.useState)(!1);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(p,{color:`warning`,onClick:()=>t(!0),children:`Archive project`}),(0,R.jsx)(y,{open:e,onOpenChange:t,onConfirm:async()=>{r(!0),await new Promise(e=>setTimeout(e,1200)),r(!1),t(!1)},loading:n,color:`warning`,title:`Archive this project?`,description:`It becomes read-only for everyone.`,confirmLabel:`Archive`})]})}var L,R;function z(){return(z=e((()=>{L=t(),m(),N(),R=r()})))()}function De(){let[e,t]=(0,B.useState)(`—`);return(0,V.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,V.jsx)(p,{color:`danger`,onClick:async()=>{let e=await A({title:`Delete this book?`,description:`Reviews and ratings are deleted too.`,color:`danger`});t(e?`Deleted`:`Cancelled`)},children:`Delete book`}),(0,V.jsxs)(`span`,{children:[`Result: `,e]})]})}var B,V;function H(){return(H=e((()=>{B=t(),m(),N(),V=r()})))()}function Oe(){let e=j();return(0,U.jsx)(p,{onClick:async()=>{await e({title:`Publish chapter?`,confirmLabel:`Publish`})&&be.success(`Published`)},children:`Publish`})}function ke(){return(0,U.jsx)(Se,{children:(0,U.jsx)(M,{children:(0,U.jsx)(Oe,{})})})}var U;function W(){return(W=e((()=>{m(),N(),Ce(),xe(),U=r()})))()}function Ae(){let e=j(),[t,n]=(0,G.useState)(`—`);return(0,K.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,K.jsx)(p,{color:`danger`,onClick:async()=>{let t=await e({title:`Delete this chapter? (useConfirm(): dark, tech, 中文)`,color:`danger`});n(String(t))},children:`useConfirm()`}),(0,K.jsx)(p,{color:`neutral`,variant:`outline`,onClick:async()=>n(String(await q())),children:`confirm()`}),(0,K.jsx)(`output`,{style:{alignSelf:`center`},children:t})]})}function je(){return(0,K.jsx)(fe,{theme:`dark`,palette:`tech`,locale:{language:`zh`},children:(0,K.jsx)(Ae,{})})}var G,K,q;function J(){return(J=e((()=>{G=t(),m(),de(),N(),K=r(),q=()=>A({title:`Retry the upload? (confirm(): root scope)`})})))()}var Y;function X(){return(X=e((()=>{Y=`import { useState } from "react";
import { Button, confirm, type ConfirmOptions } from "minerva-design";

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
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`import { useState } from "react";
import { Button, ConfirmDialog } from "minerva-design";

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
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`import { useState } from "react";
import { Button, confirm } from "minerva-design";

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
`})))()}var Ie;function Z(){return(Z=e((()=>{Ie=`import {
  Button,
  ConfirmProvider,
  ToastProvider,
  toast,
  useConfirm,
} from "minerva-design";

function PublishButton() {
  const ask = useConfirm();
  return (
    <Button
      onClick={async () => {
        if (await ask({ title: "Publish chapter?", confirmLabel: "Publish" })) {
          toast.success("Published");
        }
      }}
    >
      Publish
    </Button>
  );
}

export default function ProviderDemo() {
  return (
    <ToastProvider>
      <ConfirmProvider>
        <PublishButton />
      </ConfirmProvider>
    </ToastProvider>
  );
}
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`import { useState } from "react";
import { Button, ConfigProvider, confirm, useConfirm } from "minerva-design";

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
`})))()}var Q,ze,Be,Ve;function $(){return($=e((()=>{I(),z(),H(),W(),J(),X(),Ne(),Fe(),Z(),Re(),t(),ne(),a(),l(),te(),c(),Q=r(),ze=u(Object.assign({"./demos/colors.tsx":we,"./demos/declarative.tsx":Ee,"./demos/imperative.tsx":De,"./demos/provider.tsx":ke,"./demos/scoped.tsx":je}),Object.assign({"./demos/colors.tsx":Y,"./demos/declarative.tsx":Me,"./demos/imperative.tsx":Pe,"./demos/provider.tsx":Ie,"./demos/scoped.tsx":Le})),Be=`// Inside a component: follows the nearest ConfigProvider scope
function DeleteButton() {
  const confirm = useConfirm();
  return (
    <Button onClick={async () => (await confirm({ title: "Delete?" })) && remove()}>
      Delete
    </Button>
  );
}

// Outside React (API client, event bus, router guard...): root scope
import { confirm } from "minerva-design";
router.beforeLeave(() => confirm({ title: "Discard changes?" }));`,Ve=()=>{let{t:e}=re(),t=(0,Q.jsxs)(`section`,{className:s.section,"aria-labelledby":`when-to-use`,children:[(0,Q.jsx)(`h2`,{id:`when-to-use`,children:e(`docs.confirm.usage.title`)}),(0,Q.jsxs)(`ul`,{className:s.prose,children:[(0,Q.jsx)(`li`,{children:e(`docs.confirm.usage.hook`)}),(0,Q.jsx)(`li`,{children:e(`docs.confirm.usage.function`)})]}),(0,Q.jsx)(o,{code:Be,language:`tsx`})]});return(0,Q.jsx)(d,{id:`confirm`,demos:ze,intro:t})}})))()}$();export{Ve as default};