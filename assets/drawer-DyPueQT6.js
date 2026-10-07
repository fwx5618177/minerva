import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{d as r}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{$ as i,Z as a,gn as o,h as s,mn as c,p as l,u,z as d}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as f}from"./dist-CcA3uxH5.js";import{c as p,n as m,s as h,t as g}from"./DocPage-Dm1vTl9w.js";function _(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r,{onClick:()=>t(!0),children:`Filters`}),(0,y.jsxs)(d,{open:e,onOpenChange:t,title:`Filters`,description:`Narrow the list of books.`,children:[(0,y.jsx)(s,{children:(0,y.jsxs)(`label`,{children:[(0,y.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Completed only`]})}),(0,y.jsxs)(l,{children:[(0,y.jsx)(r,{variant:`secondary`,onClick:()=>t(!1),children:`Reset`}),(0,y.jsx)(r,{onClick:()=>t(!1),children:`Apply`})]})]})]})}var v,y;function b(){return(b=e((()=>{v=t(),f(),y=n()})))()}function x(){return(0,S.jsxs)(o,{children:[(0,S.jsx)(a,{asChild:!0,children:(0,S.jsx)(r,{variant:`secondary`,children:`Open compound drawer`})}),(0,S.jsxs)(c,{side:`left`,size:`large`,hideCloseButton:!0,children:[(0,S.jsx)(i,{children:`Navigation`}),(0,S.jsx)(s,{children:`Build the drawer from its parts.`}),(0,S.jsx)(l,{children:(0,S.jsx)(u,{asChild:!0,children:(0,S.jsx)(r,{children:`Close`})})})]})]})}var S;function C(){return(C=e((()=>{f(),S=n()})))()}function w(){return(0,T.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:E.map(e=>(0,T.jsx)(d,{side:e,size:`small`,title:`From the ${e}`,trigger:(0,T.jsx)(r,{variant:`secondary`,children:e}),children:(0,T.jsx)(s,{children:`Sizes: small, medium (default), large and full.`})},e))})}var T,E;function D(){return(D=e((()=>{f(),T=n(),E=[`left`,`right`,`top`,`bottom`]})))()}var O;function k(){return(k=e((()=>{O=`import { useState } from "react";
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