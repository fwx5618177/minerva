import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{At as i,Ht as a}from"./dist-BWNqkmth.js";import{Y as ee,g as te}from"./registry-CQpv28AQ.js";import{a as ne,n as re}from"./fi-TxiQ2PKn.js";import{c as ie,n as ae,s as oe,t as se}from"./DocPage-DGOZswYH.js";function ce(){let[e,t]=(0,o.useState)(0);return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,s.jsx)(r,{size:`small`,variant:`secondary`,onClick:()=>t(e=>e+1),children:`Replay`}),(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[c.map(e=>(0,s.jsxs)(i,{animationName:e,children:[`animationName="`,e,`"`]},e)),(0,s.jsx)(i,{animation:!1,children:`animation={false}`})]},e)]})}var o,s,c;function l(){return(l=e((()=>{o=t(),a(),s=n(),c=[`slideIn`,`fadeIn`,`bounce`,`zoom`]})))()}function le(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(i,{variant:`success`,icon:(0,u.jsx)(re,{}),elevation:!0,children:`Custom icon with an elevated shadow.`}),(0,u.jsx)(i,{variant:`info`,outlined:!0,rounded:!1,children:`Outlined border and square corners.`}),(0,u.jsx)(i,{variant:`info`,filled:!0,borderRadius:16,children:`Filled background with a 16px radius.`})]})}var u;function d(){return(d=e((()=>{a(),ne(),u=n()})))()}function ue(){return(0,f.jsx)(i,{variant:`warning`,banner:!0,closable:!0,children:`You are viewing a read-only copy of this document.`})}var f;function p(){return(p=e((()=>{a(),f=n()})))()}function de(){let[e,t]=(0,m.useState)(0),[n,a]=(0,m.useState)(0);return(0,h.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,h.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,h.jsx)(i,{variant:`info`,closable:!0,onClose:()=>a(e=>e+1),children:`Close me with the button on the right.`}),(0,h.jsx)(i,{variant:`warning`,closable:!0,closeIcon:(0,h.jsx)(te,{}),onClose:()=>a(e=>e+1),children:`This alert uses a custom close icon.`})]},e),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,h.jsx)(r,{size:`small`,variant:`secondary`,onClick:()=>t(e=>e+1),children:`Reset`}),(0,h.jsxs)(`span`,{children:[`Closed: `,n]})]})]})}var m,h;function g(){return(g=e((()=>{m=t(),a(),ee(),h=n()})))()}function fe(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,v.jsx)(i,{variant:`info`,title:`Release notes (${e?`expanded`:`collapsed`})`,collapsible:!0,expanded:e,onExpand:t,children:`Added dark mode, improved keyboard navigation and fixed several layout issues on small screens.`}),(0,v.jsx)(i,{variant:`success`,title:`Uncontrolled`,collapsible:!0,children:`defaultExpanded (true by default) sets the initial state; the alert then manages it on its own.`})]})}var _,v;function y(){return(y=e((()=>{_=t(),a(),v=n()})))()}function pe(){return(0,b.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,b.jsx)(i,{size:`small`,children:`Small alert`}),(0,b.jsx)(i,{size:`medium`,children:`Medium alert`}),(0,b.jsx)(i,{size:`large`,children:`Large alert`})]})}var b;function x(){return(x=e((()=>{a(),b=n()})))()}function me(){return(0,S.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,S.jsx)(i,{variant:`warning`,type:`default`,children:`Default style`}),(0,S.jsx)(i,{variant:`warning`,type:`outlined`,children:`Outlined style`}),(0,S.jsx)(i,{variant:`warning`,type:`filled`,children:`Filled style`})]})}var S;function C(){return(C=e((()=>{a(),S=n()})))()}function he(){return(0,w.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,w.jsx)(i,{variant:`info`,children:`A new version is available.`}),(0,w.jsx)(i,{variant:`success`,children:`Your changes have been saved.`}),(0,w.jsx)(i,{variant:`warning`,children:`Your trial ends in 3 days.`}),(0,w.jsx)(i,{variant:`error`,children:`The payment could not be processed.`})]})}var w;function T(){return(T=e((()=>{a(),w=n()})))()}function ge(){return(0,E.jsx)(i,{variant:`error`,title:`Sync failed`,action:(0,E.jsx)(r,{size:`small`,variant:`error`,children:`Retry`}),children:`We could not reach the server. Check your connection and try again.`})}var E;function D(){return(D=e((()=>{a(),E=n()})))()}function _e(){return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,O.jsx)(i,{variant:`success`,title:`Deployment complete`,children:`Version 2.4.0 is now live in production.`}),(0,O.jsx)(i,{variant:`info`,title:`Scheduled maintenance`,showIcon:!1,children:`The service will be unavailable on Sunday from 02:00 to 04:00 UTC.`})]})}var O;function k(){return(k=e((()=>{a(),O=n()})))()}var A;function j(){return(j=e((()=>{A=`import { useState } from "react";
import { Alert, Button } from "@minerva/lib-core";

const names = ["slideIn", "fadeIn", "bounce", "zoom"] as const;

export default function AnimationsDemo() {
  const [key, setKey] = useState(0);

  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Button
        size="small"
        variant="secondary"
        onClick={() => setKey((k) => k + 1)}
      >
        Replay
      </Button>
      <div key={key} style={{ display: "grid", gap: 12, width: "100%" }}>
        {names.map((name) => (
          <Alert key={name} animationName={name}>
            animationName=&quot;{name}&quot;
          </Alert>
        ))}
        <Alert animation={false}>animation=&#123;false&#125;</Alert>
      </div>
    </div>
  );
}
`})))()}var M;function N(){return(N=e((()=>{M=`import { Alert } from "@minerva/lib-core";
import { FiGift } from "react-icons/fi";

export default function AppearanceDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert variant="success" icon={<FiGift />} elevation>
        Custom icon with an elevated shadow.
      </Alert>
      <Alert variant="info" outlined rounded={false}>
        Outlined border and square corners.
      </Alert>
      <Alert variant="info" filled borderRadius={16}>
        Filled background with a 16px radius.
      </Alert>
    </div>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { Alert } from "@minerva/lib-core";

export default function BannerDemo() {
  return (
    <Alert variant="warning" banner closable>
      You are viewing a read-only copy of this document.
    </Alert>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
import { Alert, Button } from "@minerva/lib-core";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function ClosableDemo() {
  const [key, setKey] = useState(0);
  const [closed, setClosed] = useState(0);

  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <div key={key} style={{ display: "grid", gap: 12, width: "100%" }}>
        <Alert variant="info" closable onClose={() => setClosed((n) => n + 1)}>
          Close me with the button on the right.
        </Alert>
        <Alert
          variant="warning"
          closable
          closeIcon={<IoCloseCircleOutline />}
          onClose={() => setClosed((n) => n + 1)}
        >
          This alert uses a custom close icon.
        </Alert>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button
          size="small"
          variant="secondary"
          onClick={() => setKey((k) => k + 1)}
        >
          Reset
        </Button>
        <span>Closed: {closed}</span>
      </div>
    </div>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { useState } from "react";
import { Alert } from "@minerva/lib-core";

export default function CollapsibleDemo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert
        variant="info"
        title={\`Release notes (\${expanded ? "expanded" : "collapsed"})\`}
        collapsible
        expanded={expanded}
        onExpand={setExpanded}
      >
        Added dark mode, improved keyboard navigation and fixed several layout
        issues on small screens.
      </Alert>
      <Alert variant="success" title="Uncontrolled" collapsible>
        defaultExpanded (true by default) sets the initial state; the alert then
        manages it on its own.
      </Alert>
    </div>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Alert } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert size="small">Small alert</Alert>
      <Alert size="medium">Medium alert</Alert>
      <Alert size="large">Large alert</Alert>
    </div>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Alert } from "@minerva/lib-core";

export default function TypesDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert variant="warning" type="default">
        Default style
      </Alert>
      <Alert variant="warning" type="outlined">
        Outlined style
      </Alert>
      <Alert variant="warning" type="filled">
        Filled style
      </Alert>
    </div>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Alert } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert variant="info">A new version is available.</Alert>
      <Alert variant="success">Your changes have been saved.</Alert>
      <Alert variant="warning">Your trial ends in 3 days.</Alert>
      <Alert variant="error">The payment could not be processed.</Alert>
    </div>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Alert, Button } from "@minerva/lib-core";

export default function WithActionDemo() {
  return (
    <Alert
      variant="error"
      title="Sync failed"
      action={
        <Button size="small" variant="error">
          Retry
        </Button>
      }
    >
      We could not reach the server. Check your connection and try again.
    </Alert>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Alert } from "@minerva/lib-core";

export default function WithTitleDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert variant="success" title="Deployment complete">
        Version 2.4.0 is now live in production.
      </Alert>
      <Alert variant="info" title="Scheduled maintenance" showIcon={false}>
        The service will be unavailable on Sunday from 02:00 to 04:00 UTC.
      </Alert>
    </div>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{l(),d(),p(),g(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),ae(),ie(),X=n(),Z=oe(Object.assign({"./demos/animations.tsx":ce,"./demos/appearance.tsx":le,"./demos/banner.tsx":ue,"./demos/closable.tsx":de,"./demos/collapsible.tsx":fe,"./demos/sizes.tsx":pe,"./demos/types.tsx":me,"./demos/variants.tsx":he,"./demos/with-action.tsx":ge,"./demos/with-title.tsx":_e}),Object.assign({"./demos/animations.tsx":A,"./demos/appearance.tsx":M,"./demos/banner.tsx":P,"./demos/closable.tsx":I,"./demos/collapsible.tsx":R,"./demos/sizes.tsx":B,"./demos/types.tsx":H,"./demos/variants.tsx":W,"./demos/with-action.tsx":K,"./demos/with-title.tsx":J})),Q=()=>(0,X.jsx)(se,{id:`alert`,demos:Z})})))()}$();export{Q as default};