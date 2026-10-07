import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{Dt as i,Rt as a,ut as ee}from"./dist-DkgrNLMS.js";import{c as te,n as ne,s as re,t as ie}from"./DocPage-Bnv84vTs.js";function ae(){return(0,o.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:s.map(e=>(0,o.jsx)(i,{content:e,animation:e,children:(0,o.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:e})},e))})}var o,s;function c(){return(c=e((()=>{a(),o=n(),s=[`fade`,`scale`,`shift-away`,`shift-toward`,`perspective`]})))()}function oe(){return(0,l.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,l.jsx)(i,{content:`Attached to the button itself`,asChild:!0,children:(0,l.jsx)(r,{color:`neutral`,variant:`outline`,children:`No wrapper`})}),(0,l.jsx)(i,{content:`Frosted, follows the theme`,variant:`glass`,placement:`bottom-start`,contentClassName:`my-tooltip`,asChild:!0,children:(0,l.jsx)(r,{color:`neutral`,variant:`outline`,children:`Glass variant`})})]})}var l;function u(){return(u=e((()=>{a(),l=n()})))()}function se(){return(0,d.jsx)(i,{content:`Save your changes`,children:(0,d.jsx)(r,{children:`Hover or focus me`})})}var d;function f(){return(f=e((()=>{a(),d=n()})))()}function ce(){return(0,p.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:m.map(e=>(0,p.jsx)(i,{content:`A ${e} tooltip`,color:e,children:(0,p.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:e})},e))})}var p,m;function h(){return(h=e((()=>{a(),p=n(),m=[`neutral`,`info`,`success`,`warning`,`danger`]})))()}function le(){let[e,t]=(0,g.useState)(!1),n=(0,g.useRef)(null);return(0,_.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`},children:[(0,_.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,_.jsx)(i,{content:`Controlled with the open prop`,open:e,onOpenChange:t,placement:`bottom`,children:(0,_.jsx)(`span`,{children:`Controlled`})}),(0,_.jsx)(r,{size:`small`,onClick:()=>t(e=>!e),children:e?`Hide`:`Show`})]}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,_.jsx)(i,{ref:n,content:`Opened through the ref`,placement:`bottom`,children:(0,_.jsx)(`span`,{children:`Imperative`})}),(0,_.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>n.current?.toggle(),children:`Toggle via ref`})]})]})}var g,_;function v(){return(v=e((()=>{g=t(),a(),_=n()})))()}function ue(){return(0,y.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,y.jsx)(`style`,{children:b}),(0,y.jsx)(i,{content:`Solid color`,contentClassName:`brand-tooltip`,arrow:!0,children:(0,y.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:`Solid`})}),(0,y.jsx)(i,{content:`Gradient background`,contentClassName:`gradient-tooltip`,arrow:!0,children:(0,y.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:`Gradient`})}),(0,y.jsx)(i,{content:`Further away`,offset:[0,20],children:(0,y.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:`Offset 20px`})})]})}var y,b;function x(){return(x=e((()=>{a(),y=n(),b=`
.brand-tooltip {
  --tooltip-bg: #7c3aed;
  --tooltip-color: #fff;
}
.gradient-tooltip {
  --tooltip-bg: linear-gradient(135deg, #ec4899, #f59e0b);
  --tooltip-color: #fff;
}
`})))()}function de(){return(0,S.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,S.jsx)(i,{content:`Shows immediately`,enterDelay:0,children:(0,S.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:`No delay`})}),(0,S.jsx)(i,{content:`Shows after 800ms, hides after 500ms`,enterDelay:800,leaveDelay:500,children:(0,S.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:`Slow`})}),(0,S.jsx)(i,{content:`Never shown`,disabled:!0,children:(0,S.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:`Disabled tooltip`})})]})}var S;function C(){return(C=e((()=>{a(),S=n()})))()}function fe(){let[e,t]=(0,w.useState)(0),[n,a]=(0,w.useState)(0);return(0,T.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,T.jsx)(i,{content:`Press Escape to close`,onOpen:()=>t(e=>e+1),onClose:()=>a(e=>e+1),children:(0,T.jsx)(r,{color:`neutral`,variant:`outline`,children:`Hover or focus me`})}),(0,T.jsxs)(`span`,{children:[`onOpen: `,e,` · onClose: `,n]})]})}var w,T;function E(){return(E=e((()=>{w=t(),a(),T=n()})))()}function pe(){return(0,D.jsx)(i,{content:`I follow your cursor`,followCursor:!0,children:(0,D.jsx)(`button`,{type:`button`,style:{width:280,height:100,display:`grid`,placeItems:`center`,border:`1px dashed currentColor`,borderRadius:8,background:`transparent`,color:`inherit`,font:`inherit`},children:`Move the mouse here`})})}var D;function O(){return(O=e((()=>{a(),D=n()})))()}function me(){return(0,k.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:8},children:A.map(e=>(0,k.jsx)(i,{content:e,placement:e,arrow:!0,children:(0,k.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:e})},e))})}var k,A;function j(){return(j=e((()=>{a(),k=n(),A=[`top-start`,`top`,`top-end`,`left-start`,`left`,`left-end`,`right-start`,`right`,`right-end`,`bottom-start`,`bottom`,`bottom-end`]})))()}function he(){return(0,M.jsx)(ee,{enterDelay:500,skipDelay:300,children:(0,M.jsx)(`div`,{style:{display:`flex`,gap:8},children:[`Bold`,`Italic`,`Underline`].map(e=>(0,M.jsx)(i,{content:e,asChild:!0,children:(0,M.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:e[0]})},e))})})}var M;function N(){return(N=e((()=>{a(),M=n()})))()}function ge(){return(0,P.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:F.map(e=>(0,P.jsx)(i,{content:`Shape: ${e}`,shape:e,children:(0,P.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,children:e})},e))})}var P,F;function I(){return(I=e((()=>{a(),P=n(),F=[`default`,`rounded`,`square`,`thought`]})))()}function _e(){return(0,L.jsx)(`div`,{style:{display:`grid`,gap:8},children:R.map(e=>(0,L.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:z.map(t=>(0,L.jsx)(i,{content:`${e} · ${t}`,variant:e,color:t,children:(0,L.jsxs)(r,{color:`neutral`,variant:`outline`,size:`small`,children:[e,` `,t]})},t))},e))})}var L,R,z;function B(){return(B=e((()=>{a(),L=n(),R=[`solid`,`subtle`,`glass`],z=[`neutral`,`info`,`danger`]})))()}var V;function H(){return(H=e((()=>{V=`import { Button, Tooltip } from "@minerva/lib-core";

const animations = [
  "fade",
  "scale",
  "shift-away",
  "shift-toward",
  "perspective",
] as const;

export default function AnimationsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {animations.map((animation) => (
        <Tooltip key={animation} content={animation} animation={animation}>
          <Button color="neutral" variant="outline" size="small">
            {animation}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { Button, Tooltip } from "@minerva/lib-core";

export default function AsChildDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tooltip content="Attached to the button itself" asChild>
        <Button color="neutral" variant="outline">
          No wrapper
        </Button>
      </Tooltip>
      <Tooltip
        content="Frosted, follows the theme"
        variant="glass"
        placement="bottom-start"
        contentClassName="my-tooltip"
        asChild
      >
        <Button color="neutral" variant="outline">
          Glass variant
        </Button>
      </Tooltip>
    </div>
  );
}
`})))()}var ve;function G(){return(G=e((()=>{ve=`import { Button, Tooltip } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <Tooltip content="Save your changes">
      <Button>Hover or focus me</Button>
    </Tooltip>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Button, Tooltip } from "@minerva/lib-core";

const colors = ["neutral", "info", "success", "warning", "danger"] as const;

export default function ColorsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {colors.map((color) => (
        <Tooltip key={color} content={\`A \${color} tooltip\`} color={color}>
          <Button color="neutral" variant="outline" size="small">
            {color}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { useRef, useState } from "react";
import { Button, Tooltip, type TooltipRef } from "@minerva/lib-core";

export default function ControlledDemo() {
  const [open, setOpen] = useState(false);
  const tooltipRef = useRef<TooltipRef>(null);

  return (
    <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Tooltip
          content="Controlled with the open prop"
          open={open}
          onOpenChange={setOpen}
          placement="bottom"
        >
          <span>Controlled</span>
        </Tooltip>
        <Button size="small" onClick={() => setOpen((prev) => !prev)}>
          {open ? "Hide" : "Show"}
        </Button>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Tooltip
          ref={tooltipRef}
          content="Opened through the ref"
          placement="bottom"
        >
          <span>Imperative</span>
        </Tooltip>
        <Button
          size="small"
          color="neutral"
          variant="outline"
          onClick={() => tooltipRef.current?.toggle()}
        >
          Toggle via ref
        </Button>
      </div>
    </div>
  );
}
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { Button, Tooltip } from "@minerva/lib-core";

// The tooltip is portalled to <body>: set the custom properties on the
// tooltip itself through contentClassName.
const css = \`
.brand-tooltip {
  --tooltip-bg: #7c3aed;
  --tooltip-color: #fff;
}
.gradient-tooltip {
  --tooltip-bg: linear-gradient(135deg, #ec4899, #f59e0b);
  --tooltip-color: #fff;
}
\`;

export default function CustomColorsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <style>{css}</style>
      <Tooltip content="Solid color" contentClassName="brand-tooltip" arrow>
        <Button color="neutral" variant="outline" size="small">
          Solid
        </Button>
      </Tooltip>
      <Tooltip
        content="Gradient background"
        contentClassName="gradient-tooltip"
        arrow
      >
        <Button color="neutral" variant="outline" size="small">
          Gradient
        </Button>
      </Tooltip>
      <Tooltip content="Further away" offset={[0, 20]}>
        <Button color="neutral" variant="outline" size="small">
          Offset 20px
        </Button>
      </Tooltip>
    </div>
  );
}
`})))()}var Q;function ye(){return(ye=e((()=>{Q=`import { Button, Tooltip } from "@minerva/lib-core";

export default function DelaysDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tooltip content="Shows immediately" enterDelay={0}>
        <Button color="neutral" variant="outline" size="small">
          No delay
        </Button>
      </Tooltip>
      <Tooltip
        content="Shows after 800ms, hides after 500ms"
        enterDelay={800}
        leaveDelay={500}
      >
        <Button color="neutral" variant="outline" size="small">
          Slow
        </Button>
      </Tooltip>
      <Tooltip content="Never shown" disabled>
        <Button color="neutral" variant="outline" size="small">
          Disabled tooltip
        </Button>
      </Tooltip>
    </div>
  );
}
`})))()}var be;function xe(){return(xe=e((()=>{be=`import { useState } from "react";
import { Button, Tooltip } from "@minerva/lib-core";

export default function EventsDemo() {
  const [opened, setOpened] = useState(0);
  const [closed, setClosed] = useState(0);

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Tooltip
        content="Press Escape to close"
        onOpen={() => setOpened((prev) => prev + 1)}
        onClose={() => setClosed((prev) => prev + 1)}
      >
        <Button color="neutral" variant="outline">
          Hover or focus me
        </Button>
      </Tooltip>
      <span>
        onOpen: {opened} · onClose: {closed}
      </span>
    </div>
  );
}
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import { Tooltip } from "@minerva/lib-core";

export default function FollowCursorDemo() {
  return (
    <Tooltip content="I follow your cursor" followCursor>
      <button
        type="button"
        style={{
          width: 280,
          height: 100,
          display: "grid",
          placeItems: "center",
          border: "1px dashed currentColor",
          borderRadius: 8,
          background: "transparent",
          color: "inherit",
          font: "inherit",
        }}
      >
        Move the mouse here
      </button>
    </Tooltip>
  );
}
`})))()}var we;function Te(){return(Te=e((()=>{we=`import { Button, Tooltip } from "@minerva/lib-core";

const placements = [
  "top-start",
  "top",
  "top-end",
  "left-start",
  "left",
  "left-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
] as const;

export default function PlacementsDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, max-content)",
        gap: 8,
      }}
    >
      {placements.map((placement) => (
        <Tooltip
          key={placement}
          content={placement}
          placement={placement}
          arrow
        >
          <Button color="neutral" variant="outline" size="small">
            {placement}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import { Button, Tooltip, TooltipProvider } from "@minerva/lib-core";

export default function ProviderDemo() {
  return (
    <TooltipProvider enterDelay={500} skipDelay={300}>
      <div style={{ display: "flex", gap: 8 }}>
        {["Bold", "Italic", "Underline"].map((label) => (
          <Tooltip key={label} content={label} asChild>
            <Button color="neutral" variant="outline" size="small">
              {label[0]}
            </Button>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`import { Button, Tooltip } from "@minerva/lib-core";

const shapes = ["default", "rounded", "square", "thought"] as const;

export default function ShapesDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {shapes.map((shape) => (
        <Tooltip key={shape} content={\`Shape: \${shape}\`} shape={shape}>
          <Button color="neutral" variant="outline" size="small">
            {shape}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`import { Button, Tooltip } from "@minerva/lib-core";

const variants = ["solid", "subtle", "glass"] as const;
const colors = ["neutral", "info", "danger"] as const;

export default function VariantsDemo() {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      {variants.map((variant) => (
        <div
          key={variant}
          style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
        >
          {colors.map((color) => (
            <Tooltip
              key={color}
              content={\`\${variant} · \${color}\`}
              variant={variant}
              color={color}
            >
              <Button color="neutral" variant="outline" size="small">
                {variant} {color}
              </Button>
            </Tooltip>
          ))}
        </div>
      ))}
    </div>
  );
}
`})))()}var Me,Ne,Pe;function $(){return($=e((()=>{c(),u(),f(),h(),v(),x(),C(),E(),O(),j(),N(),I(),B(),H(),W(),G(),q(),Y(),Z(),ye(),xe(),Ce(),Te(),De(),ke(),je(),t(),ne(),te(),Me=n(),Ne=re(Object.assign({"./demos/animations.tsx":ae,"./demos/as-child.tsx":oe,"./demos/basic.tsx":se,"./demos/colors.tsx":ce,"./demos/controlled.tsx":le,"./demos/custom-colors.tsx":ue,"./demos/delays.tsx":de,"./demos/events.tsx":fe,"./demos/follow-cursor.tsx":pe,"./demos/placements.tsx":me,"./demos/provider.tsx":he,"./demos/shapes.tsx":ge,"./demos/variants.tsx":_e}),Object.assign({"./demos/animations.tsx":V,"./demos/as-child.tsx":U,"./demos/basic.tsx":ve,"./demos/colors.tsx":K,"./demos/controlled.tsx":J,"./demos/custom-colors.tsx":X,"./demos/delays.tsx":Q,"./demos/events.tsx":be,"./demos/follow-cursor.tsx":Se,"./demos/placements.tsx":we,"./demos/provider.tsx":Ee,"./demos/shapes.tsx":Oe,"./demos/variants.tsx":Ae})),Pe=()=>(0,Me.jsx)(ie,{id:`tooltip`,demos:Ne})})))()}$();export{Pe as default};