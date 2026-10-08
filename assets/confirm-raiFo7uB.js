import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,m as n,t as r}from"./react-vendor-DuLeTlZP.js";import{Ot as i,en as ee}from"./minerva-web-components-gmidRbuG.js";import{g as te,h as a,l as o,m as s,n as c,p as l,t as u,u as ne}from"./DocPage-OkRujup2.js";import{nt as re,rt as ie}from"./io5-CFVaALQJ.js";import{n as ae,t as oe}from"./useI18n-7NNo_JVm.js";import{i as se,n as ce,r as le}from"./themeScope-b4r3rlRi.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{n as f,t as p}from"./Button-BJTVw8sA.js";import{T as ue,w as de}from"./icons-Dj0E45-e.js";import{r as fe,t as pe}from"./ConfigProvider-BLIkPs6R.js";import{a as me,i as he,o as ge,r as _e,s as ve,t as ye}from"./Dialog-CbnqZNBp.js";import{n as m,t as be}from"./modal.module.scss-BHzjFP8M.js";import{a as xe,i as Se,n as Ce,r as we}from"./Toast-BV-f0QRL.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{i(),le(),ae(),p(),ue(),me(),be(),h=t(),g=r(),_=n(),v=({open:e,onOpenChange:t,onConfirm:n,title:r,description:i,confirmLabel:te,cancelLabel:a,closeLabel:o,color:s=`primary`,loading:c=!1,confirmDisabled:l=!1})=>{let{t:u}=oe();return(0,g.jsx)(he,{componentName:`ConfirmDialog`,open:e,onOpenChange:t,children:(0,g.jsxs)(ge,{overlayClassName:m.overlay,overlayAttributes:d(`confirm-dialog`,`overlay`),className:ee(m.content,m.small),role:`alertdialog`,...d(`confirm-dialog`,`content`,{color:s,loading:c}),children:[i&&(0,g.jsx)(ve,{className:m.description,...d(`confirm-dialog`,`description`),children:i}),r&&(0,g.jsx)(_e,{asChild:!0,children:(0,g.jsx)(`div`,{className:m.header,...d(`confirm-dialog`,`header`),children:r})}),(0,g.jsx)(`div`,{className:m.body,...d(`confirm-dialog`,`body`)}),(0,g.jsxs)(`div`,{className:m.footer,...d(`confirm-dialog`,`footer`),children:[(0,g.jsx)(f,{type:`button`,color:`neutral`,variant:`outline`,onClick:()=>t(!1),disabled:c,children:a??u(`confirm.cancel`)}),(0,g.jsx)(f,{type:`button`,color:s,variant:`solid`,onClick:()=>void n(),loading:c,disabled:l,children:te??u(s===`danger`?`confirm.delete`:`confirm.confirm`)})]}),(0,g.jsx)(ye,{className:m.close,"aria-label":o??u(`modal.close`),...d(`confirm-dialog`,`close-button`),children:(0,g.jsx)(de,{size:16,"aria-hidden":`true`})})]})})},y=e=>e&&(e.portalContainer||e.language)?e:void 0,b=class{constructor(){this.requests=[],this.listeners=new Set,this.nextId=0,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getSnapshot=()=>this.requests,this.enqueue=(e,t)=>new Promise(n=>{this.requests=[...this.requests,{id:++this.nextId,options:e,resolve:n,scope:t}],this.emit()}),this.request=e=>this.enqueue(e)}settle(e,t){let[n,...r]=this.requests;n?.id===e&&(this.requests=r,n.resolve(t),this.emit())}cancelAll(){let e=this.requests;if(e.length!==0){this.requests=[];for(let t of e)t.resolve(!1);this.emit()}}emit(){for(let e of this.listeners)e()}},x=[],S=()=>x,C=({queue:e})=>{let t=(0,h.useSyncExternalStore)(e.subscribe,e.getSnapshot,S)[0];if(!t)return null;let n=(0,g.jsx)(v,{...t.options,open:!0,onOpenChange:n=>{n||e.settle(t.id,!1)},onConfirm:()=>e.settle(t.id,!0)},t.id);return t.scope?(0,g.jsx)(se.Provider,{value:t.scope,children:n},t.id):n},w=(0,h.createContext)(null),T=[],E=null,D=(e,t)=>{if(!E){let e=document.createElement(`div`);e.setAttribute(`data-confirm-host`,``);let t=new b;(0,_.createRoot)(e).render((0,g.jsx)(C,{queue:t})),E={queue:t,container:e}}return E.container.isConnected||document.body.append(E.container),E.queue.enqueue(e,t)},O=(e,t)=>{let n=T[T.length-1];return n?n.enqueue(e,t):typeof document>`u`?Promise.resolve(!1):D(e,t)},k=e=>O(e),A=()=>{let e=(0,h.useContext)(w),t=y(ce());return(0,h.useMemo)(()=>e?t?n=>e.enqueue(n,t):e.request:t?e=>O(e,t):k,[e,t])},j=({children:e})=>{let[t]=(0,h.useState)(()=>new b);return(0,h.useEffect)(()=>(T.push(t),()=>{let e=T.lastIndexOf(t);e>=0&&T.splice(e,1),t.cancelAll()}),[t]),(0,g.jsxs)(w.Provider,{value:t,children:[e,(0,g.jsx)(C,{queue:t})]})}})))()}function Te(){let[e,t]=(0,N.useState)(`—`);return(0,P.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[F.map(({label:e,options:n})=>(0,P.jsx)(f,{color:n.color,variant:`outline`,onClick:async()=>{let r=await k(n);t(`${e}: ${r?`confirmed`:`cancelled`}`)},children:e},e)),(0,P.jsxs)(`span`,{children:[`Result: `,e]})]})}var N,P,F;function I(){return(I=e((()=>{N=t(),p(),M(),P=r(),F=[{label:`Publish`,options:{title:`Publish this chapter?`,color:`primary`}},{label:`Reset`,options:{title:`Reset all settings?`,description:`Your preferences go back to their defaults.`,color:`warning`,confirmLabel:`Reset`}},{label:`Delete`,options:{title:`Delete this draft?`,color:`danger`}}]})))()}function Ee(){let[e,t]=(0,L.useState)(!1),[n,r]=(0,L.useState)(!1);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(f,{color:`warning`,onClick:()=>t(!0),children:`Archive project`}),(0,R.jsx)(v,{open:e,onOpenChange:t,onConfirm:async()=>{r(!0),await new Promise(e=>setTimeout(e,1200)),r(!1),t(!1)},loading:n,color:`warning`,title:`Archive this project?`,description:`It becomes read-only for everyone.`,confirmLabel:`Archive`})]})}var L,R;function z(){return(z=e((()=>{L=t(),p(),M(),R=r()})))()}function De(){let[e,t]=(0,B.useState)(`—`);return(0,V.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,V.jsx)(f,{color:`danger`,onClick:async()=>{let e=await k({title:`Delete this book?`,description:`Reviews and ratings are deleted too.`,color:`danger`});t(e?`Deleted`:`Cancelled`)},children:`Delete book`}),(0,V.jsxs)(`span`,{children:[`Result: `,e]})]})}var B,V;function H(){return(H=e((()=>{B=t(),p(),M(),V=r()})))()}function Oe(){let e=A();return(0,U.jsx)(f,{onClick:async()=>{await e({title:`Publish chapter?`,confirmLabel:`Publish`})&&Se.success(`Published`)},children:`Publish`})}function ke(){return(0,U.jsx)(Ce,{children:(0,U.jsx)(j,{children:(0,U.jsx)(Oe,{})})})}var U;function W(){return(W=e((()=>{p(),M(),we(),xe(),U=r()})))()}function Ae(){let e=A(),[t,n]=(0,G.useState)(`—`);return(0,K.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,K.jsx)(f,{color:`danger`,onClick:async()=>{let t=await e({title:`Delete this chapter? (useConfirm(): dark, tech, 中文)`,color:`danger`});n(String(t))},children:`useConfirm()`}),(0,K.jsx)(f,{color:`neutral`,variant:`outline`,onClick:async()=>n(String(await q())),children:`confirm()`}),(0,K.jsx)(`output`,{style:{alignSelf:`center`},children:t})]})}function je(){return(0,K.jsx)(pe,{theme:`dark`,palette:`tech`,locale:{language:`zh`},children:(0,K.jsx)(Ae,{})})}var G,K,q;function J(){return(J=e((()=>{G=t(),p(),fe(),M(),K=r(),q=()=>k({title:`Retry the upload? (confirm(): root scope)`})})))()}var Y;function X(){return(X=e((()=>{Y=`import { useState } from "react";
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
`})))()}var Z;function Me(){return(Me=e((()=>{Z=`import { useState } from "react";
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
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`import { useState } from "react";
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
`})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`import {
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
`})))()}var Q,ze,Be,Ve;function $(){return($=e((()=>{I(),z(),H(),W(),J(),X(),Me(),Pe(),Ie(),Re(),t(),re(),te(),c(),ne(),s(),Q=r(),ze=l(Object.assign({"./demos/colors.tsx":Te,"./demos/declarative.tsx":Ee,"./demos/imperative.tsx":De,"./demos/provider.tsx":ke,"./demos/scoped.tsx":je}),Object.assign({"./demos/colors.tsx":Y,"./demos/declarative.tsx":Z,"./demos/imperative.tsx":Ne,"./demos/provider.tsx":Fe,"./demos/scoped.tsx":Le})),Be=`// Inside a component: follows the nearest ConfigProvider scope
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
router.beforeLeave(() => confirm({ title: "Discard changes?" }));`,Ve=()=>{let{t:e}=ie(),t=(0,Q.jsxs)(`section`,{className:o.section,"aria-labelledby":`when-to-use`,children:[(0,Q.jsx)(`h2`,{id:`when-to-use`,children:e(`docs.confirm.usage.title`)}),(0,Q.jsxs)(`ul`,{className:o.prose,children:[(0,Q.jsx)(`li`,{children:e(`docs.confirm.usage.hook`)}),(0,Q.jsx)(`li`,{children:e(`docs.confirm.usage.function`)})]}),(0,Q.jsx)(a,{code:Be,language:`tsx`})]});return(0,Q.jsx)(u,{id:`confirm`,demos:ze,intro:t})}})))()}$();export{Ve as default};