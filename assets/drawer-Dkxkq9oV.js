import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{Et as i,Lt as a,Rt as o,Yt as s,Zt as c,bt as l,pn as u,sn as d,un as f}from"./dist-DkgrNLMS.js";import{c as p,n as m,s as h,t as g}from"./DocPage-Bnv84vTs.js";function _(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r,{onClick:()=>t(!0),children:`Filters`}),(0,y.jsxs)(f,{open:e,onOpenChange:t,title:`Filters`,description:`Narrow the list of books.`,children:[(0,y.jsx)(l,{children:(0,y.jsxs)(`label`,{children:[(0,y.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Completed only`]})}),(0,y.jsxs)(c,{children:[(0,y.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>t(!1),children:`Reset`}),(0,y.jsx)(r,{onClick:()=>t(!1),children:`Apply`})]})]})]})}var v,y;function b(){return(b=e((()=>{v=t(),o(),y=n()})))()}function x(){return(0,S.jsxs)(i,{children:[(0,S.jsx)(u,{asChild:!0,children:(0,S.jsx)(r,{color:`neutral`,variant:`outline`,children:`Open compound drawer`})}),(0,S.jsxs)(d,{side:`left`,size:`large`,hideCloseButton:!0,children:[(0,S.jsx)(a,{children:`Navigation`}),(0,S.jsx)(l,{children:`Build the drawer from its parts.`}),(0,S.jsx)(c,{children:(0,S.jsx)(s,{asChild:!0,children:(0,S.jsx)(r,{children:`Close`})})})]})]})}var S;function C(){return(C=e((()=>{o(),S=n()})))()}function w(){return(0,T.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:E.map(e=>(0,T.jsx)(f,{side:e,size:`small`,title:`From the ${e}`,trigger:(0,T.jsx)(r,{color:`neutral`,variant:`outline`,children:e}),children:(0,T.jsx)(l,{children:`Sizes: small, medium (default), large and full.`})},e))})}var T,E;function D(){return(D=e((()=>{o(),T=n(),E=[`left`,`right`,`top`,`bottom`]})))()}var O;function k(){return(k=e((()=>{O=`import { useState } from "react";
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
`})))()}var P,F,I;function L(){return(L=e((()=>{b(),C(),D(),k(),j(),N(),t(),m(),p(),P=n(),F=h(Object.assign({"./demos/basic.tsx":_,"./demos/compound.tsx":x,"./demos/sides.tsx":w}),Object.assign({"./demos/basic.tsx":O,"./demos/compound.tsx":A,"./demos/sides.tsx":M})),I=()=>(0,P.jsx)(g,{id:`drawer`,demos:F})})))()}L();export{I as default};