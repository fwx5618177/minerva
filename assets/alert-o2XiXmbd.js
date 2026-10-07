import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./Button-CG2pPO-r.js";import{n as a,t as o}from"./Alert-CoAW8rVJ.js";import{N as ee,m as te}from"./sample-Dya6Jarx.js";import{a as ne,n as re}from"./fi-B6zIUMgu.js";import{c as ie,n as ae,s as oe,t as se}from"./DocPage-DzKszXiH.js";function ce(){let[e,t]=(0,s.useState)(0);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,c.jsx)(i,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(e=>e+1),children:`Replay`}),(0,c.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[l.map(e=>(0,c.jsxs)(a,{animationName:e,children:[`animationName="`,e,`"`]},e)),(0,c.jsx)(a,{animation:!1,children:`animation={false}`})]},e)]})}var s,c,l;function u(){return(u=e((()=>{s=t(),o(),r(),c=n(),l=[`slideIn`,`fadeIn`,`bounce`,`zoom`]})))()}function le(){return(0,d.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,d.jsx)(a,{color:`success`,icon:(0,d.jsx)(re,{}),elevation:!0,children:`Custom icon with an elevated shadow.`}),(0,d.jsx)(a,{color:`info`,variant:`outline`,rounded:!1,children:`Outline variant with square corners.`}),(0,d.jsx)(a,{color:`info`,variant:`solid`,borderRadius:16,children:`Solid variant with a 16px radius.`})]})}var d;function f(){return(f=e((()=>{o(),ne(),d=n()})))()}function ue(){return(0,p.jsx)(a,{color:`warning`,banner:!0,closable:!0,children:`You are viewing a read-only copy of this document.`})}var p;function m(){return(m=e((()=>{o(),p=n()})))()}function de(){let[e,t]=(0,h.useState)(0),[n,r]=(0,h.useState)(0);return(0,g.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,g.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,g.jsx)(a,{color:`info`,closable:!0,onClose:()=>r(e=>e+1),children:`Close me with the button on the right.`}),(0,g.jsx)(a,{color:`warning`,closable:!0,closeIcon:(0,g.jsx)(te,{}),onClose:()=>r(e=>e+1),children:`This alert uses a custom close icon.`})]},e),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,g.jsx)(i,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(e=>e+1),children:`Reset`}),(0,g.jsxs)(`span`,{children:[`Closed: `,n]})]})]})}var h,g;function _(){return(_=e((()=>{h=t(),o(),r(),ee(),g=n()})))()}function fe(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,y.jsx)(a,{color:`info`,title:`Release notes (${e?`expanded`:`collapsed`})`,collapsible:!0,expanded:e,onExpand:t,children:`Added dark mode, improved keyboard navigation and fixed several layout issues on small screens.`}),(0,y.jsx)(a,{color:`success`,title:`Uncontrolled`,collapsible:!0,children:`defaultExpanded (true by default) sets the initial state; the alert then manages it on its own.`})]})}var v,y;function b(){return(b=e((()=>{v=t(),o(),y=n()})))()}function pe(){return(0,x.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,x.jsx)(a,{color:`info`,children:`A new version is available.`}),(0,x.jsx)(a,{color:`success`,children:`Your changes have been saved.`}),(0,x.jsx)(a,{color:`warning`,children:`Your trial ends in 3 days.`}),(0,x.jsx)(a,{color:`danger`,children:`The payment could not be processed.`})]})}var x;function S(){return(S=e((()=>{o(),x=n()})))()}function me(){let[e,t]=(0,C.useState)(0),n=(0,C.useRef)(null);return(0,w.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,w.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,w.jsx)(a,{color:`info`,closable:!0,children:`Closing this alert moves focus to the next focusable element.`}),(0,w.jsx)(a,{color:`success`,closable:!0,returnFocus:n,children:`Closing this alert moves focus to the Reset button (returnFocus).`})]},e),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,w.jsx)(i,{size:`small`,variant:`outline`,color:`neutral`,children:`Next focusable`}),(0,w.jsx)(i,{ref:n,size:`small`,variant:`outline`,color:`neutral`,onClick:()=>t(e=>e+1),children:`Reset`})]})]})}var C,w;function T(){return(T=e((()=>{C=t(),o(),r(),w=n()})))()}function he(){return(0,E.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,E.jsx)(a,{size:`small`,children:`Small alert`}),(0,E.jsx)(a,{size:`medium`,children:`Medium alert`}),(0,E.jsx)(a,{size:`large`,children:`Large alert`})]})}var E;function D(){return(D=e((()=>{o(),E=n()})))()}function ge(){return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,O.jsx)(a,{color:`warning`,variant:`subtle`,children:`Subtle (default): tinted background.`}),(0,O.jsx)(a,{color:`warning`,variant:`outline`,children:`Outline: transparent background with a colored border.`}),(0,O.jsx)(a,{color:`warning`,variant:`solid`,children:`Solid: filled with the color.`})]})}var O;function k(){return(k=e((()=>{o(),O=n()})))()}function _e(){return(0,A.jsx)(a,{color:`danger`,title:`Sync failed`,action:(0,A.jsx)(i,{size:`small`,color:`danger`,children:`Retry`}),children:`We could not reach the server. Check your connection and try again.`})}var A;function j(){return(j=e((()=>{o(),r(),A=n()})))()}function ve(){return(0,M.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,M.jsx)(a,{color:`success`,title:`Deployment complete`,children:`Version 2.4.0 is now live in production.`}),(0,M.jsx)(a,{color:`info`,title:`Scheduled maintenance`,showIcon:!1,children:`The service will be unavailable on Sunday from 02:00 to 04:00 UTC.`})]})}var M;function N(){return(N=e((()=>{o(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { useState } from "react";
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
`})))()}var I;function L(){return(L=e((()=>{I=`import { Alert } from "@minerva/lib-core";
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
`})))()}var R;function ye(){return(ye=e((()=>{R=`import { Alert } from "@minerva/lib-core";

export default function BannerDemo() {
  return (
    <Alert color="warning" banner closable>
      You are viewing a read-only copy of this document.
    </Alert>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { useState } from "react";
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
`})))()}var V;function H(){return(H=e((()=>{V=`import { useState } from "react";
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
`})))()}var U;function W(){return(W=e((()=>{U=`import { Alert } from "@minerva/lib-core";

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
`})))()}var G;function K(){return(K=e((()=>{G=`import { useRef, useState } from "react";
import { Alert, Button } from "@minerva/lib-core";

export default function ReturnFocusDemo() {
  const [key, setKey] = useState(0);
  const resetRef = useRef<HTMLButtonElement>(null);

  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <div key={key} style={{ display: "grid", gap: 12, width: "100%" }}>
        <Alert color="info" closable>
          Closing this alert moves focus to the next focusable element.
        </Alert>
        <Alert color="success" closable returnFocus={resetRef}>
          Closing this alert moves focus to the Reset button (returnFocus).
        </Alert>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <Button size="small" variant="outline" color="neutral">
          Next focusable
        </Button>
        <Button
          ref={resetRef}
          size="small"
          variant="outline"
          color="neutral"
          onClick={() => setKey((k) => k + 1)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
`})))()}var q;function J(){return(J=e((()=>{q=`import { Alert } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert size="small">Small alert</Alert>
      <Alert size="medium">Medium alert</Alert>
      <Alert size="large">Large alert</Alert>
    </div>
  );
}
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { Alert } from "@minerva/lib-core";

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
`})))()}var Z;function Q(){return(Q=e((()=>{Z=`import { Alert, Button } from "@minerva/lib-core";

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
`})))()}var be;function xe(){return(xe=e((()=>{be=`import { Alert } from "@minerva/lib-core";

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
`})))()}var Se,Ce,we;function $(){return($=e((()=>{u(),f(),m(),_(),b(),S(),T(),D(),k(),j(),N(),F(),L(),ye(),B(),H(),W(),K(),J(),X(),Q(),xe(),t(),ae(),ie(),Se=n(),Ce=oe(Object.assign({"./demos/animations.tsx":ce,"./demos/appearance.tsx":le,"./demos/banner.tsx":ue,"./demos/closable.tsx":de,"./demos/collapsible.tsx":fe,"./demos/colors.tsx":pe,"./demos/return-focus.tsx":me,"./demos/sizes.tsx":he,"./demos/variants.tsx":ge,"./demos/with-action.tsx":_e,"./demos/with-title.tsx":ve}),Object.assign({"./demos/animations.tsx":P,"./demos/appearance.tsx":I,"./demos/banner.tsx":R,"./demos/closable.tsx":z,"./demos/collapsible.tsx":V,"./demos/colors.tsx":U,"./demos/return-focus.tsx":G,"./demos/sizes.tsx":q,"./demos/variants.tsx":Y,"./demos/with-action.tsx":Z,"./demos/with-title.tsx":be})),we=()=>(0,Se.jsx)(se,{id:`alert`,demos:Ce})})))()}$();export{we as default};