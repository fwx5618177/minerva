import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{c as r,n as ee,s as te,t as ne}from"./DocPage-HgWiqH91.js";import{n as i,t as a}from"./Button-CwqLLYn6.js";import{i as re,n as o,r as ie,t as s}from"./Tooltip-BdS1dkCH.js";function ae(){return(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:l.map(e=>(0,c.jsx)(o,{content:e,animation:e,children:(0,c.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:e})},e))})}var c,l;function u(){return(u=e((()=>{i(),s(),c=n(),l=[`fade`,`scale`,`shift-away`,`shift-toward`,`perspective`]})))()}function oe(){return(0,d.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,d.jsx)(o,{content:`Attached to the button itself`,asChild:!0,children:(0,d.jsx)(a,{color:`neutral`,variant:`outline`,children:`No wrapper`})}),(0,d.jsx)(o,{content:`Frosted, follows the theme`,variant:`glass`,placement:`bottom-start`,contentClassName:`my-tooltip`,asChild:!0,children:(0,d.jsx)(a,{color:`neutral`,variant:`outline`,children:`Glass variant`})})]})}var d;function f(){return(f=e((()=>{i(),s(),d=n()})))()}function se(){return(0,p.jsx)(o,{content:`Save your changes`,children:(0,p.jsx)(a,{children:`Hover or focus me`})})}var p;function ce(){return(ce=e((()=>{i(),s(),p=n()})))()}function le(){return(0,m.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:h.map(e=>(0,m.jsx)(o,{content:`A ${e} tooltip`,color:e,children:(0,m.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:e})},e))})}var m,h;function g(){return(g=e((()=>{i(),s(),m=n(),h=[`neutral`,`info`,`success`,`warning`,`danger`]})))()}function ue(){let[e,t]=(0,_.useState)(!1),n=(0,_.useRef)(null);return(0,v.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`},children:[(0,v.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,v.jsx)(o,{content:`Controlled with the open prop`,open:e,onOpenChange:t,placement:`bottom`,children:(0,v.jsx)(`span`,{children:`Controlled`})}),(0,v.jsx)(a,{size:`small`,onClick:()=>t(e=>!e),children:e?`Hide`:`Show`})]}),(0,v.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,v.jsx)(o,{ref:n,content:`Opened through the ref`,placement:`bottom`,children:(0,v.jsx)(`span`,{children:`Imperative`})}),(0,v.jsx)(a,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>n.current?.toggle(),children:`Toggle via ref`})]})]})}var _,v;function y(){return(y=e((()=>{_=t(),i(),s(),v=n()})))()}function de(){return(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,b.jsx)(`style`,{children:x}),(0,b.jsx)(o,{content:`Solid color`,contentClassName:`brand-tooltip`,arrow:!0,children:(0,b.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:`Solid`})}),(0,b.jsx)(o,{content:`Gradient background`,contentClassName:`gradient-tooltip`,arrow:!0,children:(0,b.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:`Gradient`})}),(0,b.jsx)(o,{content:`Further away`,offset:[0,20],children:(0,b.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:`Offset 20px`})})]})}var b,x;function S(){return(S=e((()=>{i(),s(),b=n(),x=`
.brand-tooltip {
  --tooltip-bg: #7c3aed;
  --tooltip-color: #fff;
}
.gradient-tooltip {
  --tooltip-bg: linear-gradient(135deg, #ec4899, #f59e0b);
  --tooltip-color: #fff;
}
`})))()}function fe(){return(0,C.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,C.jsx)(o,{content:`Shows immediately`,enterDelay:0,children:(0,C.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:`No delay`})}),(0,C.jsx)(o,{content:`Shows after 800ms, hides after 500ms`,enterDelay:800,leaveDelay:500,children:(0,C.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:`Slow`})}),(0,C.jsx)(o,{content:`Never shown`,disabled:!0,children:(0,C.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:`Disabled tooltip`})})]})}var C;function w(){return(w=e((()=>{i(),s(),C=n()})))()}function pe(){let[e,t]=(0,T.useState)(0),[n,r]=(0,T.useState)(0);return(0,E.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,E.jsx)(o,{content:`Press Escape to close`,onOpen:()=>t(e=>e+1),onClose:()=>r(e=>e+1),children:(0,E.jsx)(a,{color:`neutral`,variant:`outline`,children:`Hover or focus me`})}),(0,E.jsxs)(`span`,{children:[`onOpen: `,e,` · onClose: `,n]})]})}var T,E;function D(){return(D=e((()=>{T=t(),i(),s(),E=n()})))()}function me(){return(0,O.jsx)(o,{content:`I follow your cursor`,followCursor:!0,children:(0,O.jsx)(`button`,{type:`button`,style:{width:280,height:100,display:`grid`,placeItems:`center`,border:`1px dashed currentColor`,borderRadius:8,background:`transparent`,color:`inherit`,font:`inherit`},children:`Move the mouse here`})})}var O;function k(){return(k=e((()=>{s(),O=n()})))()}function he(){return(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:8},children:j.map(e=>(0,A.jsx)(o,{content:e,placement:e,arrow:!0,children:(0,A.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:e})},e))})}var A,j;function M(){return(M=e((()=>{i(),s(),A=n(),j=[`top-start`,`top`,`top-end`,`left-start`,`left`,`left-end`,`right-start`,`right`,`right-end`,`bottom-start`,`bottom`,`bottom-end`]})))()}function ge(){return(0,N.jsx)(re,{enterDelay:500,skipDelay:300,children:(0,N.jsx)(`div`,{style:{display:`flex`,gap:8},children:[`Bold`,`Italic`,`Underline`].map(e=>(0,N.jsx)(o,{content:e,asChild:!0,children:(0,N.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:e[0]})},e))})})}var N;function P(){return(P=e((()=>{i(),s(),ie(),N=n()})))()}function _e(){return(0,F.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:I.map(e=>(0,F.jsx)(o,{content:`Shape: ${e}`,shape:e,children:(0,F.jsx)(a,{color:`neutral`,variant:`outline`,size:`small`,children:e})},e))})}var F,I;function L(){return(L=e((()=>{i(),s(),F=n(),I=[`default`,`rounded`,`square`,`thought`]})))()}function ve(){return(0,R.jsx)(`div`,{style:{display:`grid`,gap:8},children:z.map(e=>(0,R.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:ye.map(t=>(0,R.jsx)(o,{content:`${e} · ${t}`,variant:e,color:t,children:(0,R.jsxs)(a,{color:`neutral`,variant:`outline`,size:`small`,children:[e,` `,t]})},t))},e))})}var R,z,ye;function B(){return(B=e((()=>{i(),s(),R=n(),z=[`solid`,`subtle`,`glass`],ye=[`neutral`,`info`,`danger`]})))()}var V;function H(){return(H=e((()=>{V=`import { Button, Tooltip } from "@minerva/lib-core";

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
`})))()}var G;function K(){return(K=e((()=>{G=`import { Button, Tooltip } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <Tooltip content="Save your changes">
      <Button>Hover or focus me</Button>
    </Tooltip>
  );
}
`})))()}var q;function J(){return(J=e((()=>{q=`import { Button, Tooltip } from "@minerva/lib-core";

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
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { useRef, useState } from "react";
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
`})))()}var Z;function be(){return(be=e((()=>{Z=`import { Button, Tooltip } from "@minerva/lib-core";

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
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`import { Button, Tooltip } from "@minerva/lib-core";

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
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`import { useState } from "react";
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
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`import { Tooltip } from "@minerva/lib-core";

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
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`import { Button, Tooltip } from "@minerva/lib-core";

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
`})))()}var Q;function ke(){return(ke=e((()=>{Q=`import { Button, Tooltip, TooltipProvider } from "@minerva/lib-core";

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
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`import { Button, Tooltip } from "@minerva/lib-core";

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
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`import { Button, Tooltip } from "@minerva/lib-core";

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
`})))()}var Pe,Fe,Ie;function $(){return($=e((()=>{u(),f(),ce(),g(),y(),S(),w(),D(),k(),M(),P(),L(),B(),H(),W(),K(),J(),X(),be(),Se(),we(),Ee(),Oe(),ke(),je(),Ne(),t(),ee(),r(),Pe=n(),Fe=te(Object.assign({"./demos/animations.tsx":ae,"./demos/as-child.tsx":oe,"./demos/basic.tsx":se,"./demos/colors.tsx":le,"./demos/controlled.tsx":ue,"./demos/custom-colors.tsx":de,"./demos/delays.tsx":fe,"./demos/events.tsx":pe,"./demos/follow-cursor.tsx":me,"./demos/placements.tsx":he,"./demos/provider.tsx":ge,"./demos/shapes.tsx":_e,"./demos/variants.tsx":ve}),Object.assign({"./demos/animations.tsx":V,"./demos/as-child.tsx":U,"./demos/basic.tsx":G,"./demos/colors.tsx":q,"./demos/controlled.tsx":Y,"./demos/custom-colors.tsx":Z,"./demos/delays.tsx":xe,"./demos/events.tsx":Ce,"./demos/follow-cursor.tsx":Te,"./demos/placements.tsx":De,"./demos/provider.tsx":Q,"./demos/shapes.tsx":Ae,"./demos/variants.tsx":Me})),Ie=()=>(0,Pe.jsx)(ne,{id:`tooltip`,demos:Fe})})))()}$();export{Ie as default};