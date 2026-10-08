import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{n as r,t as i}from"./Button-BfJfx3BZ.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./Drawer-CI_Sru1m.js";import{m,n as h,p as g,t as _}from"./DocPage-BUvZl8IZ.js";function v(){let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{onClick:()=>t(!0),children:`Filters`}),(0,b.jsxs)(l,{open:e,onOpenChange:t,title:`Filters`,description:`Narrow the list of books.`,children:[(0,b.jsx)(o,{children:(0,b.jsxs)(`label`,{children:[(0,b.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Completed only`]})}),(0,b.jsxs)(c,{children:[(0,b.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>t(!1),children:`Reset`}),(0,b.jsx)(r,{onClick:()=>t(!1),children:`Apply`})]})]})]})}var y,b;function x(){return(x=e((()=>{y=t(),i(),a(),b=n()})))()}function S(){return(0,C.jsxs)(f,{children:[(0,C.jsx)(u,{asChild:!0,children:(0,C.jsx)(r,{color:`neutral`,variant:`outline`,children:`Open compound drawer`})}),(0,C.jsxs)(d,{side:`left`,size:`large`,hideCloseButton:!0,children:[(0,C.jsx)(p,{children:`Navigation`}),(0,C.jsx)(o,{children:`Build the drawer from its parts.`}),(0,C.jsx)(c,{children:(0,C.jsx)(s,{asChild:!0,children:(0,C.jsx)(r,{children:`Close`})})})]})]})}var C;function w(){return(w=e((()=>{i(),a(),C=n()})))()}function T(){return(0,E.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:D.map(e=>(0,E.jsx)(l,{side:e,size:`small`,title:`From the ${e}`,trigger:(0,E.jsx)(r,{color:`neutral`,variant:`outline`,children:e}),children:(0,E.jsx)(o,{children:`Sizes: small, medium (default), large and full.`})},e))})}var E,D;function O(){return(O=e((()=>{i(),a(),E=n(),D=[`left`,`right`,`top`,`bottom`]})))()}var k;function A(){return(A=e((()=>{k=`import { useState } from "react";
import { Button, Drawer, DrawerBody, DrawerFooter } from "@minerva/lib-core";

export default function BasicDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Filters</Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Filters"
        description="Narrow the list of books."
      >
        <DrawerBody>
          <label>
            <input type="checkbox" defaultChecked /> Completed only
          </label>
        </DrawerBody>
        <DrawerFooter>
          <Button
            color="neutral"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Reset
          </Button>
          <Button onClick={() => setOpen(false)}>Apply</Button>
        </DrawerFooter>
      </Drawer>
    </>
  );
}
`})))()}var j;function M(){return(M=e((()=>{j=`import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "@minerva/lib-core";

export default function CompoundDemo() {
  return (
    <DrawerRoot>
      <DrawerTrigger asChild>
        <Button color="neutral" variant="outline">
          Open compound drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent side="left" size="large" hideCloseButton>
        <DrawerHeader>Navigation</DrawerHeader>
        <DrawerBody>Build the drawer from its parts.</DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
}
`})))()}var N;function P(){return(P=e((()=>{N=`import { Button, Drawer, DrawerBody, type DrawerSide } from "@minerva/lib-core";

const SIDES: DrawerSide[] = ["left", "right", "top", "bottom"];

export default function SidesDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {SIDES.map((side) => (
        <Drawer
          key={side}
          side={side}
          size="small"
          title={\`From the \${side}\`}
          trigger={
            <Button color="neutral" variant="outline">
              {side}
            </Button>
          }
        >
          <DrawerBody>
            Sizes: small, medium (default), large and full.
          </DrawerBody>
        </Drawer>
      ))}
    </div>
  );
}
`})))()}var F,I,L;function R(){return(R=e((()=>{x(),w(),O(),A(),M(),P(),t(),h(),m(),F=n(),I=g(Object.assign({"./demos/basic.tsx":v,"./demos/compound.tsx":S,"./demos/sides.tsx":T}),Object.assign({"./demos/basic.tsx":k,"./demos/compound.tsx":j,"./demos/sides.tsx":N})),L=()=>(0,F.jsx)(_,{id:`drawer`,demos:I})})))()}R();export{L as default};