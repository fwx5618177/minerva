import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{n as a,t as o}from"./useI18n-DtQV8aM0.js";import{n as s,t as c}from"./Button-CG2pPO-r.js";import{T as l,w as u}from"./icons-CtD3xdmP.js";import{a as d,i as f,n as p,o as m,r as h,s as ee,t as te}from"./Dialog-C5kbNHq2.js";import{c as ne,n as re,s as ie,t as ae}from"./DocPage-DzKszXiH.js";var g,_,v,y,b,oe,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{g=`_overlay_1cr16_1`,_=`_content_1cr16_12`,v=`_right_1cr16_26`,y=`_left_1cr16_40`,b=`_top_1cr16_54`,oe=`_bottom_1cr16_68`,x=`_small_1cr16_82`,S=`_medium_1cr16_86`,C=`_large_1cr16_90`,w=`_full_1cr16_94`,T=`_header_1cr16_118`,E=`_description_1cr16_119`,D=`_body_1cr16_120`,O=`_close_1cr16_125`,k=`_footer_1cr16_156`,A=`_visuallyHidden_1cr16_191`,j={overlay:g,"drawer-fade-in":`_drawer-fade-in_1cr16_1`,"drawer-fade-out":`_drawer-fade-out_1cr16_1`,content:_,right:v,"drawer-slide-right-in":`_drawer-slide-right-in_1cr16_1`,"drawer-slide-right-out":`_drawer-slide-right-out_1cr16_1`,left:y,"drawer-slide-left-in":`_drawer-slide-left-in_1cr16_1`,"drawer-slide-left-out":`_drawer-slide-left-out_1cr16_1`,top:b,"drawer-slide-top-in":`_drawer-slide-top-in_1cr16_1`,"drawer-slide-top-out":`_drawer-slide-top-out_1cr16_1`,bottom:oe,"drawer-slide-bottom-in":`_drawer-slide-bottom-in_1cr16_1`,"drawer-slide-bottom-out":`_drawer-slide-bottom-out_1cr16_1`,small:x,medium:S,large:C,full:w,header:T,description:E,body:D,close:O,footer:k,visuallyHidden:A}})))()}var N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{i(),a(),l(),m(),M(),N=n(),P=e=>(0,N.jsx)(ee,{...e}),F=e=>(0,N.jsx)(d,{...e}),I=e=>(0,N.jsx)(h,{...e}),L=({side:e=`right`,size:t=`medium`,hideCloseButton:n=!1,closeLabel:i,description:a,hiddenDescription:s,overlayClassName:c,className:l,children:d,...p})=>{let{t:m}=o();return(0,N.jsxs)(te,{overlayClassName:r(j.overlay,c),className:r(j.content,j[e],j[t],l),...p,children:[(0,N.jsx)(f,{className:a?j.description:j.visuallyHidden,children:a??s??m(`drawer.description`)}),d,!n&&(0,N.jsx)(h,{className:j.close,"aria-label":i??m(`drawer.close`),children:(0,N.jsx)(u,{size:16,"aria-hidden":`true`})})]})},R=({className:e,ref:t,...n})=>(0,N.jsx)(p,{asChild:!0,children:(0,N.jsx)(`div`,{ref:t,className:r(j.header,e),...n})}),z=({className:e,ref:t,...n})=>(0,N.jsx)(`div`,{ref:t,className:r(j.body,e),...n}),B=({className:e,ref:t,...n})=>(0,N.jsx)(`div`,{ref:t,className:r(j.footer,e),...n}),V=({open:e,defaultOpen:t=!1,onOpenChange:n,trigger:r,side:i,size:a,title:o,description:s,hideCloseButton:c,closeLabel:l,hiddenDescription:u,className:d,ref:f,children:p})=>(0,N.jsxs)(P,{open:e,defaultOpen:t,onOpenChange:n,children:[r&&(0,N.jsx)(F,{asChild:!0,children:r}),(0,N.jsxs)(L,{ref:f,side:i,size:a,description:s,hideCloseButton:c,closeLabel:l,hiddenDescription:u,className:d,children:[o&&(0,N.jsx)(R,{children:o}),p]})]})})))()}function se(){let[e,t]=(0,U.useState)(!1);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(c,{onClick:()=>t(!0),children:`Filters`}),(0,W.jsxs)(V,{open:e,onOpenChange:t,title:`Filters`,description:`Narrow the list of books.`,children:[(0,W.jsx)(z,{children:(0,W.jsxs)(`label`,{children:[(0,W.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Completed only`]})}),(0,W.jsxs)(B,{children:[(0,W.jsx)(c,{color:`neutral`,variant:`outline`,onClick:()=>t(!1),children:`Reset`}),(0,W.jsx)(c,{onClick:()=>t(!1),children:`Apply`})]})]})]})}var U,W;function G(){return(G=e((()=>{U=t(),s(),H(),W=n()})))()}function ce(){return(0,K.jsxs)(P,{children:[(0,K.jsx)(F,{asChild:!0,children:(0,K.jsx)(c,{color:`neutral`,variant:`outline`,children:`Open compound drawer`})}),(0,K.jsxs)(L,{side:`left`,size:`large`,hideCloseButton:!0,children:[(0,K.jsx)(R,{children:`Navigation`}),(0,K.jsx)(z,{children:`Build the drawer from its parts.`}),(0,K.jsx)(B,{children:(0,K.jsx)(I,{asChild:!0,children:(0,K.jsx)(c,{children:`Close`})})})]})]})}var K;function q(){return(q=e((()=>{s(),H(),K=n()})))()}function le(){return(0,J.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:Y.map(e=>(0,J.jsx)(V,{side:e,size:`small`,title:`From the ${e}`,trigger:(0,J.jsx)(c,{color:`neutral`,variant:`outline`,children:e}),children:(0,J.jsx)(z,{children:`Sizes: small, medium (default), large and full.`})},e))})}var J,Y;function X(){return(X=e((()=>{s(),H(),J=n(),Y=[`left`,`right`,`top`,`bottom`]})))()}var Z;function Q(){return(Q=e((()=>{Z=`import { useState } from "react";
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
`})))()}var $;function ue(){return(ue=e((()=>{$=`import {
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
`})))()}var pe,me,he;function ge(){return(ge=e((()=>{G(),q(),X(),Q(),ue(),fe(),t(),re(),ne(),pe=n(),me=ie(Object.assign({"./demos/basic.tsx":se,"./demos/compound.tsx":ce,"./demos/sides.tsx":le}),Object.assign({"./demos/basic.tsx":Z,"./demos/compound.tsx":$,"./demos/sides.tsx":de})),he=()=>(0,pe.jsx)(ae,{id:`drawer`,demos:me})})))()}ge();export{he as default};