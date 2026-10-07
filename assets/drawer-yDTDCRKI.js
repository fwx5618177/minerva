import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,c as i,k as a,n as o,s,t as c}from"./DocPage-BvqFnACE.js";import{n as l,t as u}from"./useI18n-s5sAv-jy.js";import{n as d,t as f}from"./Button-CVTxJPft.js";import{T as p,w as ee}from"./icons-BaZJL-85.js";import{a as te,i as ne,n as re,o as ie,r as ae,s as oe,t as m}from"./Dialog-CiDYxxMD.js";var h,g,_,v,se,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{h=`_overlay_1cr16_1`,g=`_content_1cr16_12`,_=`_right_1cr16_26`,v=`_left_1cr16_40`,se=`_top_1cr16_54`,y=`_bottom_1cr16_68`,b=`_small_1cr16_82`,x=`_medium_1cr16_86`,S=`_large_1cr16_90`,C=`_full_1cr16_94`,w=`_header_1cr16_118`,T=`_description_1cr16_119`,E=`_body_1cr16_120`,D=`_close_1cr16_125`,O=`_footer_1cr16_156`,k=`_visuallyHidden_1cr16_191`,A={overlay:h,"drawer-fade-in":`_drawer-fade-in_1cr16_1`,"drawer-fade-out":`_drawer-fade-out_1cr16_1`,content:g,right:_,"drawer-slide-right-in":`_drawer-slide-right-in_1cr16_1`,"drawer-slide-right-out":`_drawer-slide-right-out_1cr16_1`,left:v,"drawer-slide-left-in":`_drawer-slide-left-in_1cr16_1`,"drawer-slide-left-out":`_drawer-slide-left-out_1cr16_1`,top:se,"drawer-slide-top-in":`_drawer-slide-top-in_1cr16_1`,"drawer-slide-top-out":`_drawer-slide-top-out_1cr16_1`,bottom:y,"drawer-slide-bottom-in":`_drawer-slide-bottom-in_1cr16_1`,"drawer-slide-bottom-out":`_drawer-slide-bottom-out_1cr16_1`,small:b,medium:x,large:S,full:C,header:w,description:T,body:E,close:D,footer:O,visuallyHidden:k}})))()}var M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{r(),l(),p(),te(),j(),M=n(),N=e=>(0,M.jsx)(ne,{componentName:`Drawer`,...e}),P=e=>(0,M.jsx)(re,{...e}),F=e=>(0,M.jsx)(m,{...e}),I=({side:e=`right`,size:t=`medium`,hideCloseButton:n=!1,closeLabel:r,description:i,hiddenDescription:o,overlayClassName:s,className:c,children:l,...d})=>{let{t:f}=u();return(0,M.jsxs)(ie,{overlayClassName:a(A.overlay,s),className:a(A.content,A[e],A[t],c),...d,children:[(0,M.jsx)(oe,{className:i?A.description:A.visuallyHidden,children:i??o??f(`drawer.description`)}),l,!n&&(0,M.jsx)(m,{className:A.close,"aria-label":r??f(`drawer.close`),children:(0,M.jsx)(ee,{size:16,"aria-hidden":`true`})})]})},L=({className:e,ref:t,...n})=>(0,M.jsx)(ae,{asChild:!0,children:(0,M.jsx)(`div`,{ref:t,className:a(A.header,e),...n})}),R=({className:e,ref:t,...n})=>(0,M.jsx)(`div`,{ref:t,className:a(A.body,e),...n}),z=({className:e,ref:t,...n})=>(0,M.jsx)(`div`,{ref:t,className:a(A.footer,e),...n}),B=({open:e,defaultOpen:t,onOpenChange:n,trigger:r,side:i,size:a,title:o,description:s,hideCloseButton:c,closeLabel:l,hiddenDescription:u,className:d,ref:f,children:p})=>(0,M.jsxs)(N,{open:e,defaultOpen:t,onOpenChange:n,children:[r&&(0,M.jsx)(P,{asChild:!0,children:r}),(0,M.jsxs)(I,{ref:f,side:i,size:a,description:s,hideCloseButton:c,closeLabel:l,hiddenDescription:u,className:d,children:[o&&(0,M.jsx)(L,{children:o}),p]})]})})))()}function ce(){let[e,t]=(0,H.useState)(!1);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(f,{onClick:()=>t(!0),children:`Filters`}),(0,U.jsxs)(B,{open:e,onOpenChange:t,title:`Filters`,description:`Narrow the list of books.`,children:[(0,U.jsx)(R,{children:(0,U.jsxs)(`label`,{children:[(0,U.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Completed only`]})}),(0,U.jsxs)(z,{children:[(0,U.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>t(!1),children:`Reset`}),(0,U.jsx)(f,{onClick:()=>t(!1),children:`Apply`})]})]})]})}var H,U;function W(){return(W=e((()=>{H=t(),d(),V(),U=n()})))()}function le(){return(0,G.jsxs)(N,{children:[(0,G.jsx)(P,{asChild:!0,children:(0,G.jsx)(f,{color:`neutral`,variant:`outline`,children:`Open compound drawer`})}),(0,G.jsxs)(I,{side:`left`,size:`large`,hideCloseButton:!0,children:[(0,G.jsx)(L,{children:`Navigation`}),(0,G.jsx)(R,{children:`Build the drawer from its parts.`}),(0,G.jsx)(z,{children:(0,G.jsx)(F,{asChild:!0,children:(0,G.jsx)(f,{children:`Close`})})})]})]})}var G;function K(){return(K=e((()=>{d(),V(),G=n()})))()}function ue(){return(0,q.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:J.map(e=>(0,q.jsx)(B,{side:e,size:`small`,title:`From the ${e}`,trigger:(0,q.jsx)(f,{color:`neutral`,variant:`outline`,children:e}),children:(0,q.jsx)(R,{children:`Sizes: small, medium (default), large and full.`})},e))})}var q,J;function Y(){return(Y=e((()=>{d(),V(),q=n(),J=[`left`,`right`,`top`,`bottom`]})))()}var X;function Z(){return(Z=e((()=>{X=`import { useState } from "react";
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
`})))()}var Q;function $(){return($=e((()=>{Q=`import {
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
`})))()}var de;function fe(){return(fe=e((()=>{de=`import { Button, Drawer, DrawerBody, type DrawerSide } from "@minerva/lib-core";

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
`})))()}var pe,me,he;function ge(){return(ge=e((()=>{W(),K(),Y(),Z(),$(),fe(),t(),o(),i(),pe=n(),me=s(Object.assign({"./demos/basic.tsx":ce,"./demos/compound.tsx":le,"./demos/sides.tsx":ue}),Object.assign({"./demos/basic.tsx":X,"./demos/compound.tsx":Q,"./demos/sides.tsx":de})),he=()=>(0,pe.jsx)(c,{id:`drawer`,demos:me})})))()}ge();export{he as default};