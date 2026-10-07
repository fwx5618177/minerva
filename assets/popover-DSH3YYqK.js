import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{C as i,D as a,F as o,Ht as s,nt as c,ut as l}from"./dist-BWNqkmth.js";import{c as u,n as d,s as f,t as p}from"./DocPage-DGOZswYH.js";function m(){return(0,h.jsxs)(a,{children:[(0,h.jsx)(c,{asChild:!0,children:(0,h.jsx)(r,{variant:`secondary`,children:`Filter`})}),(0,h.jsxs)(o,{"aria-label":`Filters`,arrow:!0,children:[(0,h.jsxs)(`label`,{style:{display:`block`},children:[(0,h.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Read`]}),(0,h.jsxs)(`label`,{style:{display:`block`},children:[(0,h.jsx)(`input`,{type:`checkbox`}),` Unread`]}),(0,h.jsx)(i,{asChild:!0,children:(0,h.jsx)(r,{size:`small`,children:`Apply`})})]})]})}var h;function g(){return(g=e((()=>{s(),h=n()})))()}function _(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(a,{open:e,onOpenChange:t,children:[(0,y.jsx)(l,{asChild:!0,children:(0,y.jsx)(`div`,{style:{display:`inline-flex`,gap:8,padding:8,border:`1px dashed`},children:(0,y.jsx)(c,{asChild:!0,children:(0,y.jsxs)(r,{children:[e?`Close`:`Open`,` account menu`]})})})}),(0,y.jsx)(o,{align:`end`,"aria-label":`Account`,children:`Signed in as reader@example.com`})]})}var v,y;function b(){return(b=e((()=>{v=t(),s(),y=n()})))()}function x(){return(0,S.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:C.map(e=>(0,S.jsxs)(a,{children:[(0,S.jsx)(c,{asChild:!0,children:(0,S.jsx)(r,{variant:`secondary`,children:e})}),(0,S.jsxs)(o,{side:e,align:`start`,sideOffset:10,arrow:!0,children:[`Placed on the `,e,`, aligned to the start.`]})]},e))})}var S,C;function w(){return(w=e((()=>{s(),S=n(),C=[`top`,`right`,`bottom`,`left`]})))()}var T;function E(){return(E=e((()=>{T=`import {
  Button,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Filter</Button>
      </PopoverTrigger>
      <PopoverContent aria-label="Filters" arrow>
        <label style={{ display: "block" }}>
          <input type="checkbox" defaultChecked /> Read
        </label>
        <label style={{ display: "block" }}>
          <input type="checkbox" /> Unread
        </label>
        <PopoverClose asChild>
          <Button size="small">Apply</Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
`})))()}var D;function O(){return(O=e((()=>{D=`import { useState } from "react";
import {
  Button,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@minerva/lib-core";

export default function ControlledDemo() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div
          style={{
            display: "inline-flex",
            gap: 8,
            padding: 8,
            border: "1px dashed",
          }}
        >
          <PopoverTrigger asChild>
            <Button>{open ? "Close" : "Open"} account menu</Button>
          </PopoverTrigger>
        </div>
      </PopoverAnchor>
      <PopoverContent align="end" aria-label="Account">
        Signed in as reader@example.com
      </PopoverContent>
    </Popover>
  );
}
`})))()}var k;function A(){return(A=e((()=>{k=`import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  type PopoverSide,
} from "@minerva/lib-core";

const SIDES: PopoverSide[] = ["top", "right", "bottom", "left"];

export default function PlacementDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {SIDES.map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="secondary">{side}</Button>
          </PopoverTrigger>
          <PopoverContent side={side} align="start" sideOffset={10} arrow>
            Placed on the {side}, aligned to the start.
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
`})))()}var j,M,N;function P(){return(P=e((()=>{g(),b(),w(),E(),O(),A(),t(),d(),u(),j=n(),M=f(Object.assign({"./demos/basic.tsx":m,"./demos/controlled.tsx":_,"./demos/placement.tsx":x}),Object.assign({"./demos/basic.tsx":T,"./demos/controlled.tsx":D,"./demos/placement.tsx":k})),N=()=>(0,j.jsx)(p,{id:`popover`,demos:M})})))()}P();export{N as default};