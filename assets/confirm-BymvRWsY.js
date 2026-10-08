import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,m as n,t as r}from"./react-vendor-aZSMfLKR.js";import{X as ee,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{nt as a,rt as o}from"./io5-CkIs6v-8.js";import{n as s,t as te}from"./useI18n-Brv-VDVY.js";import{i as c,n as l,r as u}from"./themeScope-CVsq4AXR.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{n as f,t as p}from"./Button-BfJfx3BZ.js";import{T as ne,w as re}from"./icons-C9qyBhWC.js";import{r as ie,t as ae}from"./ConfigProvider-Cjobfnxn.js";import{a as oe,i as se,o as ce,r as le,s as ue,t as de}from"./Dialog-s5-YIow4.js";import{n as m,t as fe}from"./modal.module.scss-BHzjFP8M.js";import{g as pe,h as me,l as he,m as ge,n as _e,p as ve,t as ye,u as be}from"./DocPage-BUvZl8IZ.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{i(),u(),s(),p(),ne(),oe(),fe(),h=t(),g=r(),_=n(),v=({open:e,onOpenChange:t,onConfirm:n,title:r,description:i,confirmLabel:a,cancelLabel:o,closeLabel:s,color:c=`primary`,loading:l=!1,confirmDisabled:u=!1})=>{let{t:p}=te();return(0,g.jsx)(se,{componentName:`ConfirmDialog`,open:e,onOpenChange:t,children:(0,g.jsxs)(ce,{overlayClassName:m.overlay,overlayAttributes:d(`confirm-dialog`,`overlay`),className:ee(m.content,m.small),role:`alertdialog`,...d(`confirm-dialog`,`content`,{color:c,loading:l}),children:[i&&(0,g.jsx)(ue,{className:m.description,...d(`confirm-dialog`,`description`),children:i}),r&&(0,g.jsx)(le,{asChild:!0,children:(0,g.jsx)(`div`,{className:m.header,...d(`confirm-dialog`,`header`),children:r})}),(0,g.jsx)(`div`,{className:m.body,...d(`confirm-dialog`,`body`)}),(0,g.jsxs)(`div`,{className:m.footer,...d(`confirm-dialog`,`footer`),children:[(0,g.jsx)(f,{type:`button`,color:`neutral`,variant:`outline`,onClick:()=>t(!1),disabled:l,children:o??p(`confirm.cancel`)}),(0,g.jsx)(f,{type:`button`,color:c,variant:`solid`,onClick:()=>void n(),loading:l,disabled:u,children:a??p(c===`danger`?`confirm.delete`:`confirm.confirm`)})]}),(0,g.jsx)(de,{className:m.close,"aria-label":s??p(`modal.close`),...d(`confirm-dialog`,`close-button`),children:(0,g.jsx)(re,{size:16,"aria-hidden":`true`})})]})})},y=e=>e&&(e.portalContainer||e.language)?e:void 0,b=class{constructor(){this.requests=[],this.listeners=new Set,this.nextId=0,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getSnapshot=()=>this.requests,this.enqueue=(e,t)=>new Promise(n=>{this.requests=[...this.requests,{id:++this.nextId,options:e,resolve:n,scope:t}],this.emit()}),this.request=e=>this.enqueue(e)}settle(e,t){let[n,...r]=this.requests;n?.id===e&&(this.requests=r,n.resolve(t),this.emit())}cancelAll(){let e=this.requests;if(e.length!==0){this.requests=[];for(let t of e)t.resolve(!1);this.emit()}}emit(){for(let e of this.listeners)e()}},x=[],S=()=>x,C=({queue:e})=>{let t=(0,h.useSyncExternalStore)(e.subscribe,e.getSnapshot,S)[0];if(!t)return null;let n=(0,g.jsx)(v,{...t.options,open:!0,onOpenChange:n=>{n||e.settle(t.id,!1)},onConfirm:()=>e.settle(t.id,!0)},t.id);return t.scope?(0,g.jsx)(c.Provider,{value:t.scope,children:n},t.id):n},w=(0,h.createContext)(null),T=[],E=null,D=(e,t)=>{if(!E){let e=document.createElement(`div`);e.setAttribute(`data-confirm-host`,``);let t=new b;(0,_.createRoot)(e).render((0,g.jsx)(C,{queue:t})),E={queue:t,container:e}}return E.container.isConnected||document.body.append(E.container),E.queue.enqueue(e,t)},O=(e,t)=>{let n=T[T.length-1];return n?n.enqueue(e,t):typeof document>`u`?Promise.resolve(!1):D(e,t)},k=e=>O(e),A=()=>{let e=(0,h.useContext)(w),t=y(l());return(0,h.useMemo)(()=>e?t?n=>e.enqueue(n,t):e.request:t?e=>O(e,t):k,[e,t])},j=({children:e})=>{let[t]=(0,h.useState)(()=>new b);return(0,h.useEffect)(()=>(T.push(t),()=>{let e=T.lastIndexOf(t);e>=0&&T.splice(e,1),t.cancelAll()}),[t]),(0,g.jsxs)(w.Provider,{value:t,children:[e,(0,g.jsx)(C,{queue:t})]})}})))()}function xe(){let[e,t]=(0,N.useState)(`—`);return(0,P.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[F.map(({label:e,options:n})=>(0,P.jsx)(f,{color:n.color,variant:`outline`,onClick:async()=>{let r=await k(n);t(`${e}: ${r?`confirmed`:`cancelled`}`)},children:e},e)),(0,P.jsxs)(`span`,{children:[`Result: `,e]})]})}var N,P,F;function I(){return(I=e((()=>{N=t(),p(),M(),P=r(),F=[{label:`Publish`,options:{title:`Publish this chapter?`,color:`primary`}},{label:`Reset`,options:{title:`Reset all settings?`,description:`Your preferences go back to their defaults.`,color:`warning`,confirmLabel:`Reset`}},{label:`Delete`,options:{title:`Delete this draft?`,color:`danger`}}]})))()}function Se(){let[e,t]=(0,L.useState)(!1),[n,r]=(0,L.useState)(!1);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(f,{color:`warning`,onClick:()=>t(!0),children:`Archive project`}),(0,R.jsx)(v,{open:e,onOpenChange:t,onConfirm:async()=>{r(!0),await new Promise(e=>setTimeout(e,1200)),r(!1),t(!1)},loading:n,color:`warning`,title:`Archive this project?`,description:`It becomes read-only for everyone.`,confirmLabel:`Archive`})]})}var L,R;function z(){return(z=e((()=>{L=t(),p(),M(),R=r()})))()}function Ce(){let[e,t]=(0,B.useState)(`—`);return(0,V.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,V.jsx)(f,{color:`danger`,onClick:async()=>{let e=await k({title:`Delete this book?`,description:`Reviews and ratings are deleted too.`,color:`danger`});t(e?`Deleted`:`Cancelled`)},children:`Delete book`}),(0,V.jsxs)(`span`,{children:[`Result: `,e]})]})}var B,V;function we(){return(we=e((()=>{B=t(),p(),M(),V=r()})))()}function Te(){let e=A();return(0,H.jsx)(f,{onClick:async()=>{await e({title:`Publish chapter?`,confirmLabel:`Publish`})&&alert(`Published`)},children:`Publish`})}function Ee(){return(0,H.jsx)(j,{children:(0,H.jsx)(Te,{})})}var H;function U(){return(U=e((()=>{p(),M(),H=r()})))()}function De(){let e=A(),[t,n]=(0,W.useState)(`—`);return(0,G.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,G.jsx)(f,{color:`danger`,onClick:async()=>{let t=await e({title:`Delete this chapter? (useConfirm(): dark, tech, 中文)`,color:`danger`});n(String(t))},children:`useConfirm()`}),(0,G.jsx)(f,{color:`neutral`,variant:`outline`,onClick:async()=>n(String(await K())),children:`confirm()`}),(0,G.jsx)(`output`,{style:{alignSelf:`center`},children:t})]})}function Oe(){return(0,G.jsx)(ae,{theme:`dark`,palette:`tech`,locale:{language:`zh`},children:(0,G.jsx)(De,{})})}var W,G,K;function q(){return(q=e((()=>{W=t(),p(),ie(),M(),G=r(),K=()=>k({title:`Retry the upload? (confirm(): root scope)`})})))()}var J;function Y(){return(Y=e((()=>{J=`import { useState } from "react";
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
`})))()}var X;function ke(){return(ke=e((()=>{X=`import { useState } from "react";
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
`})))()}var Z;function Ae(){return(Ae=e((()=>{Z=`import { useState } from "react";
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
`})))()}var je;function Me(){return(Me=e((()=>{je=`import { Button, ConfirmProvider, useConfirm } from "@minerva/lib-core";

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
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`import { useState } from "react";
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
`})))()}var Q,Fe,Ie,Le;function $(){return($=e((()=>{I(),z(),we(),U(),q(),Y(),ke(),Ae(),Me(),Pe(),t(),a(),pe(),_e(),be(),ge(),Q=r(),Fe=ve(Object.assign({"./demos/colors.tsx":xe,"./demos/declarative.tsx":Se,"./demos/imperative.tsx":Ce,"./demos/provider.tsx":Ee,"./demos/scoped.tsx":Oe}),Object.assign({"./demos/colors.tsx":J,"./demos/declarative.tsx":X,"./demos/imperative.tsx":Z,"./demos/provider.tsx":je,"./demos/scoped.tsx":Ne})),Ie=`// Inside a component: follows the nearest ConfigProvider scope
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
router.beforeLeave(() => confirm({ title: "Discard changes?" }));`,Le=()=>{let{t:e}=o(),t=(0,Q.jsxs)(`section`,{className:he.section,"aria-labelledby":`when-to-use`,children:[(0,Q.jsx)(`h2`,{id:`when-to-use`,children:e(`docs.confirm.usage.title`)}),(0,Q.jsxs)(`ul`,{className:he.prose,children:[(0,Q.jsx)(`li`,{children:e(`docs.confirm.usage.hook`)}),(0,Q.jsx)(`li`,{children:e(`docs.confirm.usage.function`)})]}),(0,Q.jsx)(me,{code:Ie,language:`tsx`})]});return(0,Q.jsx)(ye,{id:`confirm`,demos:Fe,intro:t})}})))()}$();export{Le as default};