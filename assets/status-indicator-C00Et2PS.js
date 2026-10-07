import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Vt as r,tt as i}from"./dist-dg6ajl7p.js";import{c as a,n as o,s,t as c}from"./DocPage-Kqmidh_0.js";function l(){return(0,u.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,u.jsx)(i,{type:`custom`,color:`#8b5cf6`,ariaLabel:`Purple`}),(0,u.jsx)(i,{type:`custom`,color:`#ec4899`,ariaLabel:`Pink`}),(0,u.jsx)(i,{type:`custom`,color:`#14b8a6`,ariaLabel:`Teal`})]})}var u;function d(){return(d=e((()=>{r(),u=n()})))()}function f(){return(0,p.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,p.jsx)(i,{status:`success`,ariaLabel:`Click me`}),(0,p.jsx)(i,{status:`success`,disabled:!0,ariaLabel:`Disabled`})]})}var p;function m(){return(m=e((()=>{r(),p=n()})))()}function h(){return(0,g.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:_.map(e=>(0,g.jsx)(i,{type:e,size:`small`,showLabel:!0},e))})}var g,_;function v(){return(v=e((()=>{r(),g=n(),_=[`online`,`away`,`busy`,`offline`]})))()}function y(){return(0,b.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,b.jsx)(i,{shape:`circle`,ariaLabel:`Circle`}),(0,b.jsx)(i,{shape:`rounded`,ariaLabel:`Rounded`}),(0,b.jsx)(i,{shape:`square`,ariaLabel:`Square`})]})}var b;function x(){return(x=e((()=>{r(),b=n()})))()}function S(){return(0,C.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,C.jsx)(i,{size:`small`,status:`info`,ariaLabel:`Small`}),(0,C.jsx)(i,{size:`medium`,status:`info`,ariaLabel:`Medium`}),(0,C.jsx)(i,{size:`large`,status:`info`,ariaLabel:`Large`})]})}var C;function w(){return(w=e((()=>{r(),C=n()})))()}function T(){return(0,E.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,E.jsx)(i,{status:`success`,ariaLabel:`Success`}),(0,E.jsx)(i,{status:`info`,ariaLabel:`Info`}),(0,E.jsx)(i,{status:`warning`,ariaLabel:`Warning`}),(0,E.jsx)(i,{status:`error`,ariaLabel:`Error`})]})}var E;function D(){return(D=e((()=>{r(),E=n()})))()}var O;function k(){return(k=e((()=>{O=`import { StatusIndicator } from "@minerva/lib-core";

export default function CustomColorDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusIndicator type="custom" color="#8b5cf6" ariaLabel="Purple" />
      <StatusIndicator type="custom" color="#ec4899" ariaLabel="Pink" />
      <StatusIndicator type="custom" color="#14b8a6" ariaLabel="Teal" />
    </div>
  );
}
`})))()}var A;function j(){return(j=e((()=>{A=`import { StatusIndicator } from "@minerva/lib-core";

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusIndicator status="success" ariaLabel="Click me" />
      <StatusIndicator status="success" disabled ariaLabel="Disabled" />
    </div>
  );
}
`})))()}var M;function N(){return(N=e((()=>{M=`import { StatusIndicator } from "@minerva/lib-core";

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
`})))()}var P;function F(){return(F=e((()=>{P=`import { StatusIndicator } from "@minerva/lib-core";

export default function ShapesDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusIndicator shape="circle" ariaLabel="Circle" />
      <StatusIndicator shape="rounded" ariaLabel="Rounded" />
      <StatusIndicator shape="square" ariaLabel="Square" />
    </div>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { StatusIndicator } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusIndicator size="small" status="info" ariaLabel="Small" />
      <StatusIndicator size="medium" status="info" ariaLabel="Medium" />
      <StatusIndicator size="large" status="info" ariaLabel="Large" />
    </div>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { StatusIndicator } from "@minerva/lib-core";

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
`})))()}var B,V,H;function U(){return(U=e((()=>{d(),m(),v(),x(),w(),D(),k(),j(),N(),F(),L(),z(),t(),o(),a(),B=n(),V=s(Object.assign({"./demos/custom-color.tsx":l,"./demos/disabled.tsx":f,"./demos/presence.tsx":h,"./demos/shapes.tsx":y,"./demos/sizes.tsx":S,"./demos/statuses.tsx":T}),Object.assign({"./demos/custom-color.tsx":O,"./demos/disabled.tsx":A,"./demos/presence.tsx":M,"./demos/shapes.tsx":P,"./demos/sizes.tsx":I,"./demos/statuses.tsx":R})),H=()=>(0,B.jsx)(c,{id:`status-indicator`,demos:V})})))()}U();export{H as default};