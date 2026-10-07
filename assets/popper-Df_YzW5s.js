import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{b as r,h as i}from"./dist-C3Cy1YK6.js";import{i as a,t as o}from"./DocPage-DUnq_TLt.js";var s=e(t(),1),c=n(),l=[`Apple`,`Banana`,`Cherry`];function u(){let[e,t]=(0,s.useState)(null),[n,a]=(0,s.useState)(!1),[o,u]=(0,s.useState)(`Choose a fruit`);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{ref:t,variant:`secondary`,style:{width:260},"aria-haspopup":`listbox`,"aria-expanded":n,children:o}),(0,c.jsx)(r,{anchorEl:e,visible:n,type:`select`,role:`listbox`,placement:`bottomStart`,matchAnchorWidth:`exact`,offset:{x:0,y:4},ariaLabel:`Fruits`,onVisibleChange:a,onClickAway:()=>a(!1),children:(0,c.jsx)(`div`,{style:{display:`grid`,padding:4},children:l.map(e=>(0,c.jsx)(`button`,{type:`button`,role:`option`,"aria-selected":e===o,style:{textAlign:`left`,padding:`6px 10px`},onClick:()=>{u(e),a(!1)},children:e},e))})})]})}function d(){let[e,t]=(0,s.useState)(null),[n,a]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{ref:t,children:`Toggle popper`}),(0,c.jsx)(r,{anchorEl:e,visible:n,onVisibleChange:a,onClickAway:()=>a(!1),ariaLabel:`Basic popper`,children:(0,c.jsx)(`div`,{style:{padding:12},children:`Click outside to close me.`})})]})}function f(){let[e,t]=(0,s.useState)(null),[n,a]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{ref:t,children:`Custom popper`}),(0,c.jsx)(r,{anchorEl:e,visible:n,placement:`right`,arrow:!0,offset:{x:12,y:0},animation:{duration:400,easing:`ease-out`},zIndex:1200,width:220,popperStyle:{backgroundColor:`#1e293b`,color:`#f8fafc`,borderColor:`#1e293b`,padding:12},onVisibleChange:a,onClickAway:()=>a(!1),children:`Custom colors, width, offset and a slower transition.`})]})}var p=[`Edit`,`Duplicate`,`Archive`,`Delete`];function m(){let[e,t]=(0,s.useState)(null),[n,a]=(0,s.useState)(!1),[o,l]=(0,s.useState)(`none`);return(0,c.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,c.jsx)(i,{ref:t,variant:`secondary`,children:`Actions`}),(0,c.jsxs)(`span`,{children:[`Last action: `,o]}),(0,c.jsx)(r,{anchorEl:e,visible:n,type:`menu`,placement:`bottomStart`,ariaLabel:`Actions`,onVisibleChange:a,onClickAway:()=>a(!1),children:(0,c.jsx)(`div`,{style:{display:`grid`,padding:4,minWidth:140},children:p.map(e=>(0,c.jsx)(`button`,{type:`button`,role:`menuitem`,style:{textAlign:`left`,padding:`6px 10px`},onClick:()=>{l(e),a(!1)},children:e},e))})})]})}var h=[`topStart`,`top`,`topEnd`,`leftStart`,`left`,`leftEnd`,`rightStart`,`right`,`rightEnd`,`bottomStart`,`bottom`,`bottomEnd`];function g(){let[e,t]=(0,s.useState)(null),[n,a]=(0,s.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:8},children:h.map(e=>(0,c.jsx)(i,{variant:`secondary`,size:`small`,onClick:r=>{t(r.currentTarget),a(n===e?null:e)},children:e},e))}),(0,c.jsx)(r,{anchorEl:e,visible:n!==null,placement:n??`bottom`,trigger:`manual`,arrow:!0,onClickAway:()=>a(null),children:(0,c.jsx)(`div`,{style:{padding:8},children:n})})]})}var _=`Popper content can be long. With a preset size the box keeps a fixed width and height, and the content scrolls when scrollable is enabled. multiline lets the text wrap instead of scrolling horizontally.`;function v({size:e}){let[t,n]=(0,s.useState)(null),[a,o]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{variant:`secondary`,size:`small`,ref:n,children:e}),(0,c.jsx)(r,{anchorEl:t,visible:a,size:e,multiline:!0,scrollable:!0,onVisibleChange:o,onClickAway:()=>o(!1),children:(0,c.jsx)(`div`,{style:{padding:12},children:_})})]})}function y(){return(0,c.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[`small`,`medium`,`large`].map(e=>(0,c.jsx)(v,{size:e},e))})}var b=[`click`,`hover`,`focus`,`contextMenu`];function x({trigger:e}){let[t,n]=(0,s.useState)(null),[a,o]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{variant:`secondary`,size:`small`,ref:n,children:e===`contextMenu`?`Right-click`:e}),(0,c.jsx)(r,{anchorEl:t,visible:a,trigger:e,onVisibleChange:o,onClickAway:()=>o(!1),type:`tooltip`,variant:`primary`,tabIndex:-1,children:(0,c.jsxs)(`div`,{style:{padding:8},children:[`Opened by `,e]})})]})}function S(){return(0,c.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:b.map(e=>(0,c.jsx)(x,{trigger:e},e))})}var C=[`default`,`primary`,`secondary`,`success`,`warning`,`error`];function w({variant:e}){let[t,n]=(0,s.useState)(null),[a,o]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{variant:`secondary`,size:`small`,ref:n,children:e}),(0,c.jsx)(r,{anchorEl:t,visible:a,variant:e,trigger:`hover`,placement:`top`,arrow:!0,onVisibleChange:o,tabIndex:-1,children:(0,c.jsxs)(`div`,{style:{padding:8},children:[`A `,e,` popper`]})})]})}function T(){return(0,c.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:C.map(e=>(0,c.jsx)(w,{variant:e},e))})}var E=a(Object.assign({"./demos/anchor-width.tsx":u,"./demos/basic.tsx":d,"./demos/custom-style.tsx":f,"./demos/menu.tsx":m,"./demos/placements.tsx":g,"./demos/sizes.tsx":y,"./demos/triggers.tsx":S,"./demos/variants.tsx":T}),Object.assign({"./demos/anchor-width.tsx":`import { useState } from "react";
import { Button, Popper } from "@minerva/lib-core";

const fruits = ["Apple", "Banana", "Cherry"];

export default function AnchorWidthDemo() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [fruit, setFruit] = useState("Choose a fruit");

  return (
    <>
      <Button
        ref={setAnchorEl}
        variant="secondary"
        style={{ width: 260 }}
        aria-haspopup="listbox"
        aria-expanded={visible}
      >
        {fruit}
      </Button>
      <Popper
        anchorEl={anchorEl}
        visible={visible}
        type="select"
        role="listbox"
        placement="bottomStart"
        matchAnchorWidth="exact"
        offset={{ x: 0, y: 4 }}
        ariaLabel="Fruits"
        onVisibleChange={setVisible}
        onClickAway={() => setVisible(false)}
      >
        <div style={{ display: "grid", padding: 4 }}>
          {fruits.map((item) => (
            <button
              key={item}
              type="button"
              role="option"
              aria-selected={item === fruit}
              style={{ textAlign: "left", padding: "6px 10px" }}
              onClick={() => {
                setFruit(item);
                setVisible(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </Popper>
    </>
  );
}
`,"./demos/basic.tsx":`import { useState } from "react";
import { Button, Popper } from "@minerva/lib-core";

export default function BasicDemo() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button ref={setAnchorEl}>Toggle popper</Button>
      <Popper
        anchorEl={anchorEl}
        visible={visible}
        onVisibleChange={setVisible}
        onClickAway={() => setVisible(false)}
        ariaLabel="Basic popper"
      >
        <div style={{ padding: 12 }}>Click outside to close me.</div>
      </Popper>
    </>
  );
}
`,"./demos/custom-style.tsx":`import { useState } from "react";
import { Button, Popper } from "@minerva/lib-core";

export default function CustomStyleDemo() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button ref={setAnchorEl}>Custom popper</Button>
      <Popper
        anchorEl={anchorEl}
        visible={visible}
        placement="right"
        arrow
        offset={{ x: 12, y: 0 }}
        animation={{ duration: 400, easing: "ease-out" }}
        zIndex={1200}
        width={220}
        popperStyle={{
          backgroundColor: "#1e293b",
          color: "#f8fafc",
          borderColor: "#1e293b",
          padding: 12,
        }}
        onVisibleChange={setVisible}
        onClickAway={() => setVisible(false)}
      >
        Custom colors, width, offset and a slower transition.
      </Popper>
    </>
  );
}
`,"./demos/menu.tsx":`import { useState } from "react";
import { Button, Popper } from "@minerva/lib-core";

const actions = ["Edit", "Duplicate", "Archive", "Delete"];

export default function MenuDemo() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [last, setLast] = useState("none");

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Button ref={setAnchorEl} variant="secondary">
        Actions
      </Button>
      <span>Last action: {last}</span>
      <Popper
        anchorEl={anchorEl}
        visible={visible}
        type="menu"
        placement="bottomStart"
        ariaLabel="Actions"
        onVisibleChange={setVisible}
        onClickAway={() => setVisible(false)}
      >
        <div style={{ display: "grid", padding: 4, minWidth: 140 }}>
          {actions.map((action) => (
            <button
              key={action}
              type="button"
              role="menuitem"
              style={{ textAlign: "left", padding: "6px 10px" }}
              onClick={() => {
                setLast(action);
                setVisible(false);
              }}
            >
              {action}
            </button>
          ))}
        </div>
      </Popper>
    </div>
  );
}
`,"./demos/placements.tsx":`import { useState } from "react";
import { Button, Popper, type PopperPlacement } from "@minerva/lib-core";

const placements: PopperPlacement[] = [
  "topStart",
  "top",
  "topEnd",
  "leftStart",
  "left",
  "leftEnd",
  "rightStart",
  "right",
  "rightEnd",
  "bottomStart",
  "bottom",
  "bottomEnd",
];

export default function PlacementsDemo() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [placement, setPlacement] = useState<PopperPlacement | null>(null);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, max-content)",
          gap: 8,
        }}
      >
        {placements.map((item) => (
          <Button
            variant="secondary"
            size="small"
            key={item}
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
              setPlacement(placement === item ? null : item);
            }}
          >
            {item}
          </Button>
        ))}
      </div>
      <Popper
        anchorEl={anchorEl}
        visible={placement !== null}
        placement={placement ?? "bottom"}
        trigger="manual"
        arrow
        onClickAway={() => setPlacement(null)}
      >
        <div style={{ padding: 8 }}>{placement}</div>
      </Popper>
    </>
  );
}
`,"./demos/sizes.tsx":`import { useState } from "react";
import { Button, Popper, type PopperSize } from "@minerva/lib-core";

const text =
  "Popper content can be long. With a preset size the box keeps a fixed width and height, and the content scrolls when scrollable is enabled. multiline lets the text wrap instead of scrolling horizontally.";

function SizeExample({ size }: { size: PopperSize }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button variant="secondary" size="small" ref={setAnchorEl}>
        {size}
      </Button>
      <Popper
        anchorEl={anchorEl}
        visible={visible}
        size={size}
        multiline
        scrollable
        onVisibleChange={setVisible}
        onClickAway={() => setVisible(false)}
      >
        <div style={{ padding: 12 }}>{text}</div>
      </Popper>
    </>
  );
}

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {(["small", "medium", "large"] as const).map((size) => (
        <SizeExample key={size} size={size} />
      ))}
    </div>
  );
}
`,"./demos/triggers.tsx":`import { useState } from "react";
import { Button, Popper, type PopperTrigger } from "@minerva/lib-core";

const triggers: PopperTrigger[] = ["click", "hover", "focus", "contextMenu"];

function TriggerExample({ trigger }: { trigger: PopperTrigger }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button variant="secondary" size="small" ref={setAnchorEl}>
        {trigger === "contextMenu" ? "Right-click" : trigger}
      </Button>
      <Popper
        anchorEl={anchorEl}
        visible={visible}
        trigger={trigger}
        onVisibleChange={setVisible}
        onClickAway={() => setVisible(false)}
        type="tooltip"
        variant="primary"
        tabIndex={-1}
      >
        <div style={{ padding: 8 }}>Opened by {trigger}</div>
      </Popper>
    </>
  );
}

export default function TriggersDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {triggers.map((trigger) => (
        <TriggerExample key={trigger} trigger={trigger} />
      ))}
    </div>
  );
}
`,"./demos/variants.tsx":`import { useState } from "react";
import { Button, Popper, type PopperVariant } from "@minerva/lib-core";

const variants: PopperVariant[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
];

function VariantExample({ variant }: { variant: PopperVariant }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button variant="secondary" size="small" ref={setAnchorEl}>
        {variant}
      </Button>
      <Popper
        anchorEl={anchorEl}
        visible={visible}
        variant={variant}
        trigger="hover"
        placement="top"
        arrow
        onVisibleChange={setVisible}
        tabIndex={-1}
      >
        <div style={{ padding: 8 }}>A {variant} popper</div>
      </Popper>
    </>
  );
}

export default function VariantsDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <VariantExample key={variant} variant={variant} />
      ))}
    </div>
  );
}
`})),D=()=>(0,c.jsx)(o,{id:`popper`,demos:E});export{D as default};