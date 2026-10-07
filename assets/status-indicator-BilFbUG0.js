import"./rolldown-runtime-CbXtAM7H.js";import{p as e,t}from"./react-vendor-BvKcNA9t.js";import{B as n}from"./dist-C3Cy1YK6.js";import{i as r,t as i}from"./DocPage-DUnq_TLt.js";var a=t();function o(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,a.jsx)(n,{type:`custom`,color:`#8b5cf6`,ariaLabel:`Purple`}),(0,a.jsx)(n,{type:`custom`,color:`#ec4899`,ariaLabel:`Pink`}),(0,a.jsx)(n,{type:`custom`,color:`#14b8a6`,ariaLabel:`Teal`})]})}function s(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,a.jsx)(n,{status:`success`,ariaLabel:`Click me`}),(0,a.jsx)(n,{status:`success`,disabled:!0,ariaLabel:`Disabled`})]})}var c=[`online`,`away`,`busy`,`offline`];function l(){return(0,a.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:c.map(e=>(0,a.jsx)(n,{type:e,size:`small`,showLabel:!0},e))})}function u(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,a.jsx)(n,{shape:`circle`,ariaLabel:`Circle`}),(0,a.jsx)(n,{shape:`rounded`,ariaLabel:`Rounded`}),(0,a.jsx)(n,{shape:`square`,ariaLabel:`Square`})]})}function d(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,a.jsx)(n,{size:`small`,status:`info`,ariaLabel:`Small`}),(0,a.jsx)(n,{size:`medium`,status:`info`,ariaLabel:`Medium`}),(0,a.jsx)(n,{size:`large`,status:`info`,ariaLabel:`Large`})]})}function f(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,a.jsx)(n,{status:`success`,ariaLabel:`Success`}),(0,a.jsx)(n,{status:`info`,ariaLabel:`Info`}),(0,a.jsx)(n,{status:`warning`,ariaLabel:`Warning`}),(0,a.jsx)(n,{status:`error`,ariaLabel:`Error`})]})}var p=`import { StatusIndicator } from "@minerva/lib-core";

export default function CustomColorDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusIndicator type="custom" color="#8b5cf6" ariaLabel="Purple" />
      <StatusIndicator type="custom" color="#ec4899" ariaLabel="Pink" />
      <StatusIndicator type="custom" color="#14b8a6" ariaLabel="Teal" />
    </div>
  );
}
`,m=`import { StatusIndicator } from "@minerva/lib-core";

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusIndicator status="success" ariaLabel="Click me" />
      <StatusIndicator status="success" disabled ariaLabel="Disabled" />
    </div>
  );
}
`,h=`import { StatusIndicator } from "@minerva/lib-core";

const presences = ["online", "away", "busy", "offline"] as const;

export default function PresenceDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      {presences.map((type) => (
        <StatusIndicator key={type} type={type} size="small" showLabel />
      ))}
    </div>
  );
}
`,g=`import { StatusIndicator } from "@minerva/lib-core";

export default function ShapesDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusIndicator shape="circle" ariaLabel="Circle" />
      <StatusIndicator shape="rounded" ariaLabel="Rounded" />
      <StatusIndicator shape="square" ariaLabel="Square" />
    </div>
  );
}
`,_=`import { StatusIndicator } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusIndicator size="small" status="info" ariaLabel="Small" />
      <StatusIndicator size="medium" status="info" ariaLabel="Medium" />
      <StatusIndicator size="large" status="info" ariaLabel="Large" />
    </div>
  );
}
`,v=`import { StatusIndicator } from "@minerva/lib-core";

export default function StatusesDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusIndicator status="success" ariaLabel="Success" />
      <StatusIndicator status="info" ariaLabel="Info" />
      <StatusIndicator status="warning" ariaLabel="Warning" />
      <StatusIndicator status="error" ariaLabel="Error" />
    </div>
  );
}
`;e();var y=r(Object.assign({"./demos/custom-color.tsx":o,"./demos/disabled.tsx":s,"./demos/presence.tsx":l,"./demos/shapes.tsx":u,"./demos/sizes.tsx":d,"./demos/statuses.tsx":f}),Object.assign({"./demos/custom-color.tsx":p,"./demos/disabled.tsx":m,"./demos/presence.tsx":h,"./demos/shapes.tsx":g,"./demos/sizes.tsx":_,"./demos/statuses.tsx":v})),b=()=>(0,a.jsx)(i,{id:`status-indicator`,demos:y});export{b as default};