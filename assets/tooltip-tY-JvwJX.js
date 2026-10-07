import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{a as r,y as i}from"./dist-DAjZNDC0.js";import{i as a,t as o}from"./DocPage-B1L0vw6V.js";var s=n(),c=[`fade`,`scale`,`shift-away`,`shift-toward`,`perspective`];function l(){return(0,s.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:c.map(e=>(0,s.jsx)(i,{content:e,animation:e,children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:e})},e))})}function u(){return(0,s.jsx)(i,{content:`Save your changes`,children:(0,s.jsx)(r,{children:`Hover or focus me`})})}var d=e(t(),1);function f(){let[e,t]=(0,d.useState)(!1),n=(0,d.useRef)(null);return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,s.jsx)(i,{content:`Controlled with the open prop`,open:e,placement:`bottom`,children:(0,s.jsx)(`span`,{children:`Controlled`})}),(0,s.jsx)(r,{size:`small`,onClick:()=>t(e=>!e),children:e?`Hide`:`Show`})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,s.jsx)(i,{ref:n,content:`Opened through the ref`,placement:`bottom`,children:(0,s.jsx)(`span`,{children:`Imperative`})}),(0,s.jsx)(r,{size:`small`,variant:`secondary`,onClick:()=>n.current?.toggle(),children:`Toggle via ref`})]})]})}function p(){return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,s.jsx)(i,{content:`Solid color`,bgColor:`#7c3aed`,textColor:`#fff`,arrow:!0,children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:`Solid`})}),(0,s.jsx)(i,{content:`Gradient background`,bgColor:`linear-gradient(135deg, #ec4899, #f59e0b)`,textColor:`#fff`,arrow:!0,children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:`Gradient`})}),(0,s.jsx)(i,{content:`Further away`,offset:[0,20],children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:`Offset 20px`})})]})}function m(){return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,s.jsx)(i,{content:`Shows immediately`,enterDelay:0,children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:`No delay`})}),(0,s.jsx)(i,{content:`Shows after 800ms, hides after 500ms`,enterDelay:800,leaveDelay:500,children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:`Slow`})}),(0,s.jsx)(i,{content:`Never shown`,disabled:!0,children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:`Disabled tooltip`})})]})}function h(){let[e,t]=(0,d.useState)(0),[n,a]=(0,d.useState)(0);return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,s.jsx)(i,{content:`Press Escape to close`,onOpen:()=>t(e=>e+1),onClose:()=>a(e=>e+1),children:(0,s.jsx)(r,{variant:`secondary`,children:`Hover or focus me`})}),(0,s.jsxs)(`span`,{children:[`onOpen: `,e,` · onClose: `,n]})]})}function g(){return(0,s.jsx)(i,{content:`I follow your cursor`,followCursor:!0,children:(0,s.jsx)(`div`,{tabIndex:0,style:{width:280,height:100,display:`grid`,placeItems:`center`,border:`1px dashed currentColor`,borderRadius:8},children:`Move the mouse here`})})}var _=[`top-start`,`top`,`top-end`,`left-start`,`left`,`left-end`,`right-start`,`right`,`right-end`,`bottom-start`,`bottom`,`bottom-end`];function v(){return(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:8},children:_.map(e=>(0,s.jsx)(i,{content:e,placement:e,arrow:!0,children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:e})},e))})}var y=[`default`,`rounded`,`square`,`thought`];function b(){return(0,s.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:y.map(e=>(0,s.jsx)(i,{content:`Shape: ${e}`,shape:e,children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:e})},e))})}var x=[`dark`,`light`,`info`,`success`,`warning`,`error`];function S(){return(0,s.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:x.map(e=>(0,s.jsx)(i,{content:`A ${e} tooltip`,variant:e,children:(0,s.jsx)(r,{variant:`secondary`,size:`small`,children:e})},e))})}var C=a(Object.assign({"./demos/animations.tsx":l,"./demos/basic.tsx":u,"./demos/controlled.tsx":f,"./demos/custom-colors.tsx":p,"./demos/delays.tsx":m,"./demos/events.tsx":h,"./demos/follow-cursor.tsx":g,"./demos/placements.tsx":v,"./demos/shapes.tsx":b,"./demos/variants.tsx":S}),Object.assign({"./demos/animations.tsx":`import { Button, Tooltip } from "@minerva/lib-core";

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
`,"./demos/basic.tsx":`import { Button, Tooltip } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <Tooltip content="Save your changes">
      <Button>Hover or focus me</Button>
    </Tooltip>
  );
}
`,"./demos/controlled.tsx":`import { useRef, useState } from "react";
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
`,"./demos/custom-colors.tsx":`import { Button, Tooltip } from "@minerva/lib-core";

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
`,"./demos/delays.tsx":`import { Button, Tooltip } from "@minerva/lib-core";

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
`,"./demos/events.tsx":`import { useState } from "react";
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
`,"./demos/follow-cursor.tsx":`import { Tooltip } from "@minerva/lib-core";

export default function FollowCursorDemo() {
  return (
    <Tooltip content="I follow your cursor" followCursor>
      <div
        tabIndex={0}
        style={{
          width: 280,
          height: 100,
          display: "grid",
          placeItems: "center",
          border: "1px dashed currentColor",
          borderRadius: 8,
        }}
      >
        Move the mouse here
      </div>
    </Tooltip>
  );
}
`,"./demos/placements.tsx":`import { Button, Tooltip } from "@minerva/lib-core";

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
`,"./demos/shapes.tsx":`import { Button, Tooltip } from "@minerva/lib-core";

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
`,"./demos/variants.tsx":`import { Button, Tooltip } from "@minerva/lib-core";

const variants = [
  "dark",
  "light",
  "info",
  "success",
  "warning",
  "error",
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
`})),w=()=>(0,s.jsx)(o,{id:`tooltip`,demos:C});export{w as default};