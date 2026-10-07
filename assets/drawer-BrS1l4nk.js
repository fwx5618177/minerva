import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{Ht as i,Kt as a,V as o,W as s,Wt as c,g as l,r as u,y as d,z as f}from"./dist-BWNqkmth.js";import{c as p,n as m,s as h,t as g}from"./DocPage-DGOZswYH.js";function _(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r,{onClick:()=>t(!0),children:`Filters`}),(0,y.jsxs)(o,{open:e,onOpenChange:t,title:`Filters`,description:`Narrow the list of books.`,children:[(0,y.jsx)(c,{children:(0,y.jsxs)(`label`,{children:[(0,y.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Completed only`]})}),(0,y.jsxs)(f,{children:[(0,y.jsx)(r,{variant:`secondary`,onClick:()=>t(!1),children:`Reset`}),(0,y.jsx)(r,{onClick:()=>t(!1),children:`Apply`})]})]})]})}var v,y;function b(){return(b=e((()=>{v=t(),i(),y=n()})))()}function x(){return(0,S.jsxs)(d,{children:[(0,S.jsx)(l,{asChild:!0,children:(0,S.jsx)(r,{variant:`secondary`,children:`Open compound drawer`})}),(0,S.jsxs)(a,{side:`left`,size:`large`,hideCloseButton:!0,children:[(0,S.jsx)(u,{children:`Navigation`}),(0,S.jsx)(c,{children:`Build the drawer from its parts.`}),(0,S.jsx)(f,{children:(0,S.jsx)(s,{asChild:!0,children:(0,S.jsx)(r,{children:`Close`})})})]})]})}var S;function C(){return(C=e((()=>{i(),S=n()})))()}function w(){return(0,T.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:E.map(e=>(0,T.jsx)(o,{side:e,size:`small`,title:`From the ${e}`,trigger:(0,T.jsx)(r,{variant:`secondary`,children:e}),children:(0,T.jsx)(c,{children:`Sizes: small, medium (default), large and full.`})},e))})}var T,E;function D(){return(D=e((()=>{i(),T=n(),E=[`left`,`right`,`top`,`bottom`]})))()}var O;function k(){return(k=e((()=>{O=`import { useState } from "react";
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
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Reset
          </Button>
          <Button onClick={() => setOpen(false)}>Apply</Button>
        </DrawerFooter>
      </Drawer>
    </>
  );
}
`})))()}var A;function j(){return(j=e((()=>{A=`import {
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
        <Button variant="secondary">Open compound drawer</Button>
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
`})))()}var M;function N(){return(N=e((()=>{M=`import { Button, Drawer, DrawerBody, type DrawerSide } from "@minerva/lib-core";

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
          trigger={<Button variant="secondary">{side}</Button>}
        >
          <DrawerBody>
            Sizes: small, medium (default), large and full.
          </DrawerBody>
        </Drawer>
      ))}
    </div>
  );
}
`})))()}var P,F,I;function L(){return(L=e((()=>{b(),C(),D(),k(),j(),N(),t(),m(),p(),P=n(),F=h(Object.assign({"./demos/basic.tsx":_,"./demos/compound.tsx":x,"./demos/sides.tsx":w}),Object.assign({"./demos/basic.tsx":O,"./demos/compound.tsx":A,"./demos/sides.tsx":M})),I=()=>(0,P.jsx)(g,{id:`drawer`,demos:F})})))()}L();export{I as default};