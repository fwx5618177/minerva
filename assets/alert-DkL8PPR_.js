import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{Z as i,_ as ee}from"./registry-BWHeIt51.js";import{Rt as a,st as o}from"./dist-DkgrNLMS.js";import{a as te,n as ne}from"./fi-BANx-nyf.js";import{c as re,n as ie,s as ae,t as oe}from"./DocPage-Bnv84vTs.js";function se(){let[e,t]=(0,ce.useState)(0);return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,s.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(e=>e+1),children:`Replay`}),(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[c.map(e=>(0,s.jsxs)(o,{animationName:e,children:[`animationName="`,e,`"`]},e)),(0,s.jsx)(o,{animation:!1,children:`animation={false}`})]},e)]})}var ce,s,c;function l(){return(l=e((()=>{ce=t(),a(),s=n(),c=[`slideIn`,`fadeIn`,`bounce`,`zoom`]})))()}function le(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(o,{color:`success`,icon:(0,u.jsx)(ne,{}),elevation:!0,children:`Custom icon with an elevated shadow.`}),(0,u.jsx)(o,{color:`info`,variant:`outline`,rounded:!1,children:`Outline variant with square corners.`}),(0,u.jsx)(o,{color:`info`,variant:`solid`,borderRadius:16,children:`Solid variant with a 16px radius.`})]})}var u;function d(){return(d=e((()=>{a(),te(),u=n()})))()}function ue(){return(0,f.jsx)(o,{color:`warning`,banner:!0,closable:!0,children:`You are viewing a read-only copy of this document.`})}var f;function p(){return(p=e((()=>{a(),f=n()})))()}function de(){let[e,t]=(0,m.useState)(0),[n,i]=(0,m.useState)(0);return(0,h.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,h.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,h.jsx)(o,{color:`info`,closable:!0,onClose:()=>i(e=>e+1),children:`Close me with the button on the right.`}),(0,h.jsx)(o,{color:`warning`,closable:!0,closeIcon:(0,h.jsx)(ee,{}),onClose:()=>i(e=>e+1),children:`This alert uses a custom close icon.`})]},e),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,h.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(e=>e+1),children:`Reset`}),(0,h.jsxs)(`span`,{children:[`Closed: `,n]})]})]})}var m,h;function g(){return(g=e((()=>{m=t(),a(),i(),h=n()})))()}function fe(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,v.jsx)(o,{color:`info`,title:`Release notes (${e?`expanded`:`collapsed`})`,collapsible:!0,expanded:e,onExpand:t,children:`Added dark mode, improved keyboard navigation and fixed several layout issues on small screens.`}),(0,v.jsx)(o,{color:`success`,title:`Uncontrolled`,collapsible:!0,children:`defaultExpanded (true by default) sets the initial state; the alert then manages it on its own.`})]})}var _,v;function y(){return(y=e((()=>{_=t(),a(),v=n()})))()}function pe(){return(0,b.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,b.jsx)(o,{color:`info`,children:`A new version is available.`}),(0,b.jsx)(o,{color:`success`,children:`Your changes have been saved.`}),(0,b.jsx)(o,{color:`warning`,children:`Your trial ends in 3 days.`}),(0,b.jsx)(o,{color:`danger`,children:`The payment could not be processed.`})]})}var b;function x(){return(x=e((()=>{a(),b=n()})))()}function me(){return(0,S.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,S.jsx)(o,{size:`small`,children:`Small alert`}),(0,S.jsx)(o,{size:`medium`,children:`Medium alert`}),(0,S.jsx)(o,{size:`large`,children:`Large alert`})]})}var S;function C(){return(C=e((()=>{a(),S=n()})))()}function he(){return(0,w.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,w.jsx)(o,{color:`warning`,variant:`subtle`,children:`Subtle (default): tinted background.`}),(0,w.jsx)(o,{color:`warning`,variant:`outline`,children:`Outline: transparent background with a colored border.`}),(0,w.jsx)(o,{color:`warning`,variant:`solid`,children:`Solid: filled with the color.`})]})}var w;function T(){return(T=e((()=>{a(),w=n()})))()}function ge(){return(0,E.jsx)(o,{color:`danger`,title:`Sync failed`,action:(0,E.jsx)(r,{size:`small`,color:`danger`,children:`Retry`}),children:`We could not reach the server. Check your connection and try again.`})}var E;function D(){return(D=e((()=>{a(),E=n()})))()}function _e(){return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,O.jsx)(o,{color:`success`,title:`Deployment complete`,children:`Version 2.4.0 is now live in production.`}),(0,O.jsx)(o,{color:`info`,title:`Scheduled maintenance`,showIcon:!1,children:`The service will be unavailable on Sunday from 02:00 to 04:00 UTC.`})]})}var O;function k(){return(k=e((()=>{a(),O=n()})))()}var A;function j(){return(j=e((()=>{A=`import { useState } from "react";
import { Alert, Button } from "@minerva/lib-core";

const names = ["slideIn", "fadeIn", "bounce", "zoom"] as const;

export default function AnimationsDemo() {
  const [key, setKey] = useState(0);

  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Button
        size="small"
        color="neutral"
        variant="outline"
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
      <Alert color="success" icon={<FiGift />} elevation>
        Custom icon with an elevated shadow.
      </Alert>
      <Alert color="info" variant="outline" rounded={false}>
        Outline variant with square corners.
      </Alert>
      <Alert color="info" variant="solid" borderRadius={16}>
        Solid variant with a 16px radius.
      </Alert>
    </div>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { Alert } from "@minerva/lib-core";

export default function BannerDemo() {
  return (
    <Alert color="warning" banner closable>
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
        <Alert color="info" closable onClose={() => setClosed((n) => n + 1)}>
          Close me with the button on the right.
        </Alert>
        <Alert
          color="warning"
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
          color="neutral"
          variant="outline"
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
        color="info"
        title={\`Release notes (\${expanded ? "expanded" : "collapsed"})\`}
        collapsible
        expanded={expanded}
        onExpand={setExpanded}
      >
        Added dark mode, improved keyboard navigation and fixed several layout
        issues on small screens.
      </Alert>
      <Alert color="success" title="Uncontrolled" collapsible>
        defaultExpanded (true by default) sets the initial state; the alert then
        manages it on its own.
      </Alert>
    </div>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Alert } from "@minerva/lib-core";

export default function ColorsDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert color="info">A new version is available.</Alert>
      <Alert color="success">Your changes have been saved.</Alert>
      <Alert color="warning">Your trial ends in 3 days.</Alert>
      <Alert color="danger">The payment could not be processed.</Alert>
    </div>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Alert } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert size="small">Small alert</Alert>
      <Alert size="medium">Medium alert</Alert>
      <Alert size="large">Large alert</Alert>
    </div>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Alert } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert color="warning" variant="subtle">
        Subtle (default): tinted background.
      </Alert>
      <Alert color="warning" variant="outline">
        Outline: transparent background with a colored border.
      </Alert>
      <Alert color="warning" variant="solid">
        Solid: filled with the color.
      </Alert>
    </div>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Alert, Button } from "@minerva/lib-core";

export default function WithActionDemo() {
  return (
    <Alert
      color="danger"
      title="Sync failed"
      action={
        <Button size="small" color="danger">
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
      <Alert color="success" title="Deployment complete">
        Version 2.4.0 is now live in production.
      </Alert>
      <Alert color="info" title="Scheduled maintenance" showIcon={false}>
        The service will be unavailable on Sunday from 02:00 to 04:00 UTC.
      </Alert>
    </div>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{l(),d(),p(),g(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),ie(),re(),X=n(),Z=ae(Object.assign({"./demos/animations.tsx":se,"./demos/appearance.tsx":le,"./demos/banner.tsx":ue,"./demos/closable.tsx":de,"./demos/collapsible.tsx":fe,"./demos/colors.tsx":pe,"./demos/sizes.tsx":me,"./demos/variants.tsx":he,"./demos/with-action.tsx":ge,"./demos/with-title.tsx":_e}),Object.assign({"./demos/animations.tsx":A,"./demos/appearance.tsx":M,"./demos/banner.tsx":P,"./demos/closable.tsx":I,"./demos/collapsible.tsx":R,"./demos/colors.tsx":B,"./demos/sizes.tsx":H,"./demos/variants.tsx":W,"./demos/with-action.tsx":K,"./demos/with-title.tsx":J})),Q=()=>(0,X.jsx)(oe,{id:`alert`,demos:Z})})))()}$();export{Q as default};