import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{s as r}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{Vt as i,gn as a}from"./dist-dg6ajl7p.js";import{c as o,n as s,s as ee,t as te}from"./DocPage-Kqmidh_0.js";function ne(){let[e,t]=(0,c.useState)(null),[n,i]=(0,c.useState)(!1),[o,s]=(0,c.useState)(`Choose a fruit`);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{ref:t,variant:`secondary`,style:{width:260},"aria-haspopup":`listbox`,"aria-expanded":n,children:o}),(0,l.jsx)(a,{anchorEl:e,visible:n,type:`select`,role:`listbox`,placement:`bottomStart`,matchAnchorWidth:`exact`,offset:{x:0,y:4},ariaLabel:`Fruits`,onVisibleChange:i,onClickAway:()=>i(!1),children:(0,l.jsx)(`div`,{style:{display:`grid`,padding:4},children:u.map(e=>(0,l.jsx)(`button`,{type:`button`,role:`option`,"aria-selected":e===o,style:{textAlign:`left`,padding:`6px 10px`},onClick:()=>{s(e),i(!1)},children:e},e))})})]})}var c,l,u;function d(){return(d=e((()=>{c=t(),i(),l=n(),u=[`Apple`,`Banana`,`Cherry`]})))()}function re(){let[e,t]=(0,f.useState)(null),[n,i]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{ref:t,children:`Toggle popper`}),(0,p.jsx)(a,{anchorEl:e,visible:n,onVisibleChange:i,onClickAway:()=>i(!1),ariaLabel:`Basic popper`,children:(0,p.jsx)(`div`,{style:{padding:12},children:`Click outside to close me.`})})]})}var f,p;function m(){return(m=e((()=>{f=t(),i(),p=n()})))()}function ie(){let[e,t]=(0,h.useState)(null),[n,i]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{ref:t,children:`Custom popper`}),(0,g.jsx)(a,{anchorEl:e,visible:n,placement:`right`,arrow:!0,offset:{x:12,y:0},animation:{duration:400,easing:`ease-out`},zIndex:1200,width:220,popperStyle:{backgroundColor:`#1e293b`,color:`#f8fafc`,borderColor:`#1e293b`,padding:12},onVisibleChange:i,onClickAway:()=>i(!1),children:`Custom colors, width, offset and a slower transition.`})]})}var h,g;function _(){return(_=e((()=>{h=t(),i(),g=n()})))()}function ae(){let[e,t]=(0,v.useState)(null),[n,i]=(0,v.useState)(!1),[o,s]=(0,v.useState)(`none`);return(0,y.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,y.jsx)(r,{ref:t,variant:`secondary`,children:`Actions`}),(0,y.jsxs)(`span`,{children:[`Last action: `,o]}),(0,y.jsx)(a,{anchorEl:e,visible:n,type:`menu`,placement:`bottomStart`,ariaLabel:`Actions`,onVisibleChange:i,onClickAway:()=>i(!1),children:(0,y.jsx)(`div`,{style:{display:`grid`,padding:4,minWidth:140},children:b.map(e=>(0,y.jsx)(`button`,{type:`button`,role:`menuitem`,style:{textAlign:`left`,padding:`6px 10px`},onClick:()=>{s(e),i(!1)},children:e},e))})})]})}var v,y,b;function x(){return(x=e((()=>{v=t(),i(),y=n(),b=[`Edit`,`Duplicate`,`Archive`,`Delete`]})))()}function oe(){let[e,t]=(0,S.useState)(null),[n,i]=(0,S.useState)(null);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:8},children:w.map(e=>(0,C.jsx)(r,{variant:`secondary`,size:`small`,onClick:r=>{t(r.currentTarget),i(n===e?null:e)},children:e},e))}),(0,C.jsx)(a,{anchorEl:e,visible:n!==null,placement:n??`bottom`,trigger:`manual`,arrow:!0,onClickAway:()=>i(null),children:(0,C.jsx)(`div`,{style:{padding:8},children:n})})]})}var S,C,w;function T(){return(T=e((()=>{S=t(),i(),C=n(),w=[`topStart`,`top`,`topEnd`,`leftStart`,`left`,`leftEnd`,`rightStart`,`right`,`rightEnd`,`bottomStart`,`bottom`,`bottomEnd`]})))()}function se({size:e}){let[t,n]=(0,E.useState)(null),[i,o]=(0,E.useState)(!1);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(r,{variant:`secondary`,size:`small`,ref:n,children:e}),(0,D.jsx)(a,{anchorEl:t,visible:i,size:e,multiline:!0,scrollable:!0,onVisibleChange:o,onClickAway:()=>o(!1),children:(0,D.jsx)(`div`,{style:{padding:12},children:O})})]})}function ce(){return(0,D.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[`small`,`medium`,`large`].map(e=>(0,D.jsx)(se,{size:e},e))})}var E,D,O;function k(){return(k=e((()=>{E=t(),i(),D=n(),O=`Popper content can be long. With a preset size the box keeps a fixed width and height, and the content scrolls when scrollable is enabled. multiline lets the text wrap instead of scrolling horizontally.`})))()}function le({trigger:e}){let[t,n]=(0,A.useState)(null),[i,o]=(0,A.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r,{variant:`secondary`,size:`small`,ref:n,children:e===`contextMenu`?`Right-click`:e}),(0,j.jsx)(a,{anchorEl:t,visible:i,trigger:e,onVisibleChange:o,onClickAway:()=>o(!1),type:`tooltip`,variant:`primary`,tabIndex:-1,children:(0,j.jsxs)(`div`,{style:{padding:8},children:[`Opened by `,e]})})]})}function ue(){return(0,j.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:M.map(e=>(0,j.jsx)(le,{trigger:e},e))})}var A,j,M;function N(){return(N=e((()=>{A=t(),i(),j=n(),M=[`click`,`hover`,`focus`,`contextMenu`]})))()}function de({variant:e}){let[t,n]=(0,P.useState)(null),[i,o]=(0,P.useState)(!1);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r,{variant:`secondary`,size:`small`,ref:n,children:e}),(0,F.jsx)(a,{anchorEl:t,visible:i,variant:e,trigger:`hover`,placement:`top`,arrow:!0,onVisibleChange:o,tabIndex:-1,children:(0,F.jsxs)(`div`,{style:{padding:8},children:[`A `,e,` popper`]})})]})}function fe(){return(0,F.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:I.map(e=>(0,F.jsx)(de,{variant:e},e))})}var P,F,I;function L(){return(L=e((()=>{P=t(),i(),F=n(),I=[`default`,`primary`,`secondary`,`success`,`warning`,`error`]})))()}var R;function z(){return(z=e((()=>{R=`import { useState } from "react";
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
`})))()}var B;function pe(){return(pe=e((()=>{B=`import { useState } from "react";
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
`})))()}var V;function H(){return(H=e((()=>{V=`import { useState } from "react";
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
`})))()}var U;function W(){return(W=e((()=>{U=`import { useState } from "react";
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
`})))()}var G;function K(){return(K=e((()=>{G=`import { useState } from "react";
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
`})))()}var q;function J(){return(J=e((()=>{q=`import { useState } from "react";
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
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { useState } from "react";
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
`})))()}var Z;function Q(){return(Q=e((()=>{Z=`import { useState } from "react";
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
`})))()}var $,me,he;function ge(){return(ge=e((()=>{d(),m(),_(),x(),T(),k(),N(),L(),z(),pe(),H(),W(),K(),J(),X(),Q(),t(),s(),o(),$=n(),me=ee(Object.assign({"./demos/anchor-width.tsx":ne,"./demos/basic.tsx":re,"./demos/custom-style.tsx":ie,"./demos/menu.tsx":ae,"./demos/placements.tsx":oe,"./demos/sizes.tsx":ce,"./demos/triggers.tsx":ue,"./demos/variants.tsx":fe}),Object.assign({"./demos/anchor-width.tsx":R,"./demos/basic.tsx":B,"./demos/custom-style.tsx":V,"./demos/menu.tsx":U,"./demos/placements.tsx":G,"./demos/sizes.tsx":q,"./demos/triggers.tsx":Y,"./demos/variants.tsx":Z})),he=()=>(0,$.jsx)(te,{id:`popper`,demos:me})})))()}ge();export{he as default};