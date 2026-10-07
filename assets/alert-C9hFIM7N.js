import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{N as r,h as i}from"./dist-C3Cy1YK6.js";import{h as a}from"./registry-DXcVqgdp.js";import{n as o}from"./fi-43WfYxzV.js";import{i as s,t as c}from"./DocPage-DUnq_TLt.js";var l=e(t(),1),u=n(),d=[`slideIn`,`fadeIn`,`bounce`,`zoom`];function f(){let[e,t]=(0,l.useState)(0);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(i,{size:`small`,variant:`secondary`,onClick:()=>t(e=>e+1),children:`Replay`}),(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[d.map(e=>(0,u.jsxs)(r,{animationName:e,children:[`animationName="`,e,`"`]},e)),(0,u.jsx)(r,{animation:!1,children:`animation={false}`})]},e)]})}function p(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(r,{variant:`success`,icon:(0,u.jsx)(o,{}),elevation:!0,children:`Custom icon with an elevated shadow.`}),(0,u.jsx)(r,{variant:`info`,outlined:!0,rounded:!1,children:`Outlined border and square corners.`}),(0,u.jsx)(r,{variant:`info`,filled:!0,borderRadius:16,children:`Filled background with a 16px radius.`})]})}function m(){return(0,u.jsx)(r,{variant:`warning`,banner:!0,closable:!0,children:`You are viewing a read-only copy of this document.`})}function h(){let[e,t]=(0,l.useState)(0),[n,o]=(0,l.useState)(0);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(r,{variant:`info`,closable:!0,onClose:()=>o(e=>e+1),children:`Close me with the button on the right.`}),(0,u.jsx)(r,{variant:`warning`,closable:!0,closeIcon:(0,u.jsx)(a,{}),onClose:()=>o(e=>e+1),children:`This alert uses a custom close icon.`})]},e),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,u.jsx)(i,{size:`small`,variant:`secondary`,onClick:()=>t(e=>e+1),children:`Reset`}),(0,u.jsxs)(`span`,{children:[`Closed: `,n]})]})]})}function g(){let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(r,{variant:`info`,title:`Release notes (${e?`expanded`:`collapsed`})`,collapsible:!0,expanded:e,onExpand:t,children:`Added dark mode, improved keyboard navigation and fixed several layout issues on small screens.`}),(0,u.jsx)(r,{variant:`success`,title:`Uncontrolled`,collapsible:!0,children:`defaultExpanded (true by default) sets the initial state; the alert then manages it on its own.`})]})}function _(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(r,{size:`small`,children:`Small alert`}),(0,u.jsx)(r,{size:`medium`,children:`Medium alert`}),(0,u.jsx)(r,{size:`large`,children:`Large alert`})]})}function v(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(r,{variant:`warning`,type:`default`,children:`Default style`}),(0,u.jsx)(r,{variant:`warning`,type:`outlined`,children:`Outlined style`}),(0,u.jsx)(r,{variant:`warning`,type:`filled`,children:`Filled style`})]})}function y(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(r,{variant:`info`,children:`A new version is available.`}),(0,u.jsx)(r,{variant:`success`,children:`Your changes have been saved.`}),(0,u.jsx)(r,{variant:`warning`,children:`Your trial ends in 3 days.`}),(0,u.jsx)(r,{variant:`error`,children:`The payment could not be processed.`})]})}function b(){return(0,u.jsx)(r,{variant:`error`,title:`Sync failed`,action:(0,u.jsx)(i,{size:`small`,variant:`error`,children:`Retry`}),children:`We could not reach the server. Check your connection and try again.`})}function x(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,u.jsx)(r,{variant:`success`,title:`Deployment complete`,children:`Version 2.4.0 is now live in production.`}),(0,u.jsx)(r,{variant:`info`,title:`Scheduled maintenance`,showIcon:!1,children:`The service will be unavailable on Sunday from 02:00 to 04:00 UTC.`})]})}var S=s(Object.assign({"./demos/animations.tsx":f,"./demos/appearance.tsx":p,"./demos/banner.tsx":m,"./demos/closable.tsx":h,"./demos/collapsible.tsx":g,"./demos/sizes.tsx":_,"./demos/types.tsx":v,"./demos/variants.tsx":y,"./demos/with-action.tsx":b,"./demos/with-title.tsx":x}),Object.assign({"./demos/animations.tsx":`import { useState } from "react";
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
`,"./demos/appearance.tsx":`import { Alert } from "@minerva/lib-core";
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
`,"./demos/banner.tsx":`import { Alert } from "@minerva/lib-core";

export default function BannerDemo() {
  return (
    <Alert variant="warning" banner closable>
      You are viewing a read-only copy of this document.
    </Alert>
  );
}
`,"./demos/closable.tsx":`import { useState } from "react";
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
`,"./demos/collapsible.tsx":`import { useState } from "react";
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
`,"./demos/sizes.tsx":`import { Alert } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <Alert size="small">Small alert</Alert>
      <Alert size="medium">Medium alert</Alert>
      <Alert size="large">Large alert</Alert>
    </div>
  );
}
`,"./demos/types.tsx":`import { Alert } from "@minerva/lib-core";

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
`,"./demos/variants.tsx":`import { Alert } from "@minerva/lib-core";

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
`,"./demos/with-action.tsx":`import { Alert, Button } from "@minerva/lib-core";

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
`,"./demos/with-title.tsx":`import { Alert } from "@minerva/lib-core";

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
`})),C=()=>(0,u.jsx)(c,{id:`alert`,demos:S});export{C as default};