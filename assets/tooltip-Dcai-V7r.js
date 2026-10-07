import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{Ht as i,Qt as a,cn as ee}from"./dist-BWNqkmth.js";import{c as te,n as ne,s as re,t as ie}from"./DocPage-DGOZswYH.js";function ae(){return(0,o.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:s.map(e=>(0,o.jsx)(a,{content:e,animation:e,children:(0,o.jsx)(r,{variant:`secondary`,size:`small`,children:e})},e))})}var o,s;function c(){return(c=e((()=>{i(),o=n(),s=[`fade`,`scale`,`shift-away`,`shift-toward`,`perspective`]})))()}function oe(){return(0,l.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,l.jsx)(a,{content:`Attached to the button itself`,asChild:!0,children:(0,l.jsx)(r,{variant:`secondary`,children:`No wrapper`})}),(0,l.jsx)(a,{content:`Frosted, follows the theme`,variant:`auto`,placement:`bottom-start`,contentClassName:`my-tooltip`,asChild:!0,children:(0,l.jsx)(r,{variant:`secondary`,children:`Auto variant`})})]})}var l;function u(){return(u=e((()=>{i(),l=n()})))()}function se(){return(0,d.jsx)(a,{content:`Save your changes`,children:(0,d.jsx)(r,{children:`Hover or focus me`})})}var d;function ce(){return(ce=e((()=>{i(),d=n()})))()}function le(){let[e,t]=(0,f.useState)(!1),n=(0,f.useRef)(null);return(0,p.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,p.jsx)(a,{content:`Controlled with the open prop`,open:e,onOpenChange:t,placement:`bottom`,children:(0,p.jsx)(`span`,{children:`Controlled`})}),(0,p.jsx)(r,{size:`small`,onClick:()=>t(e=>!e),children:e?`Hide`:`Show`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,p.jsx)(a,{ref:n,content:`Opened through the ref`,placement:`bottom`,children:(0,p.jsx)(`span`,{children:`Imperative`})}),(0,p.jsx)(r,{size:`small`,variant:`secondary`,onClick:()=>n.current?.toggle(),children:`Toggle via ref`})]})]})}var f,p;function m(){return(m=e((()=>{f=t(),i(),p=n()})))()}function ue(){return(0,h.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,h.jsx)(a,{content:`Solid color`,bgColor:`#7c3aed`,textColor:`#fff`,arrow:!0,children:(0,h.jsx)(r,{variant:`secondary`,size:`small`,children:`Solid`})}),(0,h.jsx)(a,{content:`Gradient background`,bgColor:`linear-gradient(135deg, #ec4899, #f59e0b)`,textColor:`#fff`,arrow:!0,children:(0,h.jsx)(r,{variant:`secondary`,size:`small`,children:`Gradient`})}),(0,h.jsx)(a,{content:`Further away`,offset:[0,20],children:(0,h.jsx)(r,{variant:`secondary`,size:`small`,children:`Offset 20px`})})]})}var h;function g(){return(g=e((()=>{i(),h=n()})))()}function de(){return(0,_.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,_.jsx)(a,{content:`Shows immediately`,enterDelay:0,children:(0,_.jsx)(r,{variant:`secondary`,size:`small`,children:`No delay`})}),(0,_.jsx)(a,{content:`Shows after 800ms, hides after 500ms`,enterDelay:800,leaveDelay:500,children:(0,_.jsx)(r,{variant:`secondary`,size:`small`,children:`Slow`})}),(0,_.jsx)(a,{content:`Never shown`,disabled:!0,children:(0,_.jsx)(r,{variant:`secondary`,size:`small`,children:`Disabled tooltip`})})]})}var _;function v(){return(v=e((()=>{i(),_=n()})))()}function fe(){let[e,t]=(0,y.useState)(0),[n,i]=(0,y.useState)(0);return(0,b.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,b.jsx)(a,{content:`Press Escape to close`,onOpen:()=>t(e=>e+1),onClose:()=>i(e=>e+1),children:(0,b.jsx)(r,{variant:`secondary`,children:`Hover or focus me`})}),(0,b.jsxs)(`span`,{children:[`onOpen: `,e,` · onClose: `,n]})]})}var y,b;function x(){return(x=e((()=>{y=t(),i(),b=n()})))()}function pe(){return(0,S.jsx)(a,{content:`I follow your cursor`,followCursor:!0,children:(0,S.jsx)(`button`,{type:`button`,style:{width:280,height:100,display:`grid`,placeItems:`center`,border:`1px dashed currentColor`,borderRadius:8,background:`transparent`,color:`inherit`,font:`inherit`},children:`Move the mouse here`})})}var S;function C(){return(C=e((()=>{i(),S=n()})))()}function me(){return(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:8},children:T.map(e=>(0,w.jsx)(a,{content:e,placement:e,arrow:!0,children:(0,w.jsx)(r,{variant:`secondary`,size:`small`,children:e})},e))})}var w,T;function E(){return(E=e((()=>{i(),w=n(),T=[`top-start`,`top`,`top-end`,`left-start`,`left`,`left-end`,`right-start`,`right`,`right-end`,`bottom-start`,`bottom`,`bottom-end`]})))()}function he(){return(0,D.jsx)(ee,{enterDelay:500,skipDelay:300,children:(0,D.jsx)(`div`,{style:{display:`flex`,gap:8},children:[`Bold`,`Italic`,`Underline`].map(e=>(0,D.jsx)(a,{content:e,asChild:!0,children:(0,D.jsx)(r,{variant:`secondary`,size:`small`,children:e[0]})},e))})})}var D;function O(){return(O=e((()=>{i(),D=n()})))()}function ge(){return(0,k.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:A.map(e=>(0,k.jsx)(a,{content:`Shape: ${e}`,shape:e,children:(0,k.jsx)(r,{variant:`secondary`,size:`small`,children:e})},e))})}var k,A;function j(){return(j=e((()=>{i(),k=n(),A=[`default`,`rounded`,`square`,`thought`]})))()}function _e(){return(0,M.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:N.map(e=>(0,M.jsx)(a,{content:`A ${e} tooltip`,variant:e,children:(0,M.jsx)(r,{variant:`secondary`,size:`small`,children:e})},e))})}var M,N;function P(){return(P=e((()=>{i(),M=n(),N=[`dark`,`light`,`info`,`success`,`warning`,`error`,`auto`,`fixedDark`,`fixedLight`]})))()}var F;function I(){return(I=e((()=>{F=`import { Button, Tooltip } from "@minerva/lib-core";

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
          <Button variant="secondary" size="small">
            {animation}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { Button, Tooltip } from "@minerva/lib-core";

export default function AsChildDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tooltip content="Attached to the button itself" asChild>
        <Button variant="secondary">No wrapper</Button>
      </Tooltip>
      <Tooltip
        content="Frosted, follows the theme"
        variant="auto"
        placement="bottom-start"
        contentClassName="my-tooltip"
        asChild
      >
        <Button variant="secondary">Auto variant</Button>
      </Tooltip>
    </div>
  );
}
`})))()}var ve;function z(){return(z=e((()=>{ve=`import { Button, Tooltip } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <Tooltip content="Save your changes">
      <Button>Hover or focus me</Button>
    </Tooltip>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { useRef, useState } from "react";
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
          variant="secondary"
          onClick={() => tooltipRef.current?.toggle()}
        >
          Toggle via ref
        </Button>
      </div>
    </div>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Button, Tooltip } from "@minerva/lib-core";

export default function CustomColorsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tooltip content="Solid color" bgColor="#7c3aed" textColor="#fff" arrow>
        <Button variant="secondary" size="small">
          Solid
        </Button>
      </Tooltip>
      <Tooltip
        content="Gradient background"
        bgColor="linear-gradient(135deg, #ec4899, #f59e0b)"
        textColor="#fff"
        arrow
      >
        <Button variant="secondary" size="small">
          Gradient
        </Button>
      </Tooltip>
      <Tooltip content="Further away" offset={[0, 20]}>
        <Button variant="secondary" size="small">
          Offset 20px
        </Button>
      </Tooltip>
    </div>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Button, Tooltip } from "@minerva/lib-core";

export default function DelaysDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tooltip content="Shows immediately" enterDelay={0}>
        <Button variant="secondary" size="small">
          No delay
        </Button>
      </Tooltip>
      <Tooltip
        content="Shows after 800ms, hides after 500ms"
        enterDelay={800}
        leaveDelay={500}
      >
        <Button variant="secondary" size="small">
          Slow
        </Button>
      </Tooltip>
      <Tooltip content="Never shown" disabled>
        <Button variant="secondary" size="small">
          Disabled tooltip
        </Button>
      </Tooltip>
    </div>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { useState } from "react";
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
        <Button variant="secondary">Hover or focus me</Button>
      </Tooltip>
      <span>
        onOpen: {opened} · onClose: {closed}
      </span>
    </div>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Tooltip } from "@minerva/lib-core";

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
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { Button, Tooltip } from "@minerva/lib-core";

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
          <Button variant="secondary" size="small">
            {placement}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
`})))()}var ye;function be(){return(be=e((()=>{ye=`import { Button, Tooltip, TooltipProvider } from "@minerva/lib-core";

export default function ProviderDemo() {
  return (
    <TooltipProvider enterDelay={500} skipDelay={300}>
      <div style={{ display: "flex", gap: 8 }}>
        {["Bold", "Italic", "Underline"].map((label) => (
          <Tooltip key={label} content={label} asChild>
            <Button variant="secondary" size="small">
              {label[0]}
            </Button>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
`})))()}var xe;function Q(){return(Q=e((()=>{xe=`import { Button, Tooltip } from "@minerva/lib-core";

const shapes = ["default", "rounded", "square", "thought"] as const;

export default function ShapesDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {shapes.map((shape) => (
        <Tooltip key={shape} content={\`Shape: \${shape}\`} shape={shape}>
          <Button variant="secondary" size="small">
            {shape}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import { Button, Tooltip } from "@minerva/lib-core";

const variants = [
  "dark",
  "light",
  "info",
  "success",
  "warning",
  "error",
  "auto",
  "fixedDark",
  "fixedLight",
] as const;

export default function VariantsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <Tooltip
          key={variant}
          content={\`A \${variant} tooltip\`}
          variant={variant}
        >
          <Button variant="secondary" size="small">
            {variant}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
`})))()}var we,Te,Ee;function $(){return($=e((()=>{c(),u(),ce(),m(),g(),v(),x(),C(),E(),O(),j(),P(),I(),R(),z(),V(),U(),G(),q(),Y(),Z(),be(),Q(),Ce(),t(),ne(),te(),we=n(),Te=re(Object.assign({"./demos/animations.tsx":ae,"./demos/as-child.tsx":oe,"./demos/basic.tsx":se,"./demos/controlled.tsx":le,"./demos/custom-colors.tsx":ue,"./demos/delays.tsx":de,"./demos/events.tsx":fe,"./demos/follow-cursor.tsx":pe,"./demos/placements.tsx":me,"./demos/provider.tsx":he,"./demos/shapes.tsx":ge,"./demos/variants.tsx":_e}),Object.assign({"./demos/animations.tsx":F,"./demos/as-child.tsx":L,"./demos/basic.tsx":ve,"./demos/controlled.tsx":B,"./demos/custom-colors.tsx":H,"./demos/delays.tsx":W,"./demos/events.tsx":K,"./demos/follow-cursor.tsx":J,"./demos/placements.tsx":X,"./demos/provider.tsx":ye,"./demos/shapes.tsx":xe,"./demos/variants.tsx":Se})),Ee=()=>(0,we.jsx)(ie,{id:`tooltip`,demos:Te})})))()}$();export{Ee as default};