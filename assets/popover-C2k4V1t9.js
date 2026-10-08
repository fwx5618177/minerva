import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Bt as r,Gt as i,X as a,cn as o}from"./minerva-web-components-e9i9Tzii.js";import{Q as s,Y as c,Z as l,et as u,tt as d}from"./io5-DyQ46fG2.js";import{n as f,t as p}from"./Button-DP6INRXF.js";import{n as m,t as h}from"./Slot-GoEM-t4f.js";import{a as ee,c as te,i as g,n as ne,o as re,r as ie,s as _,t as v}from"./useFocusScope-B_OMr7xS.js";import{a as ae,i as y,r as oe,t as se}from"./direction-B2fcyo3I.js";import{n as ce,r as le,t as b}from"./tabbing-BEMcZ1ol.js";import{a as x,i as S,n as ue,o as de,r as fe,t as pe}from"./useScrollLock-CwaOQvkA.js";import{c as C,n as w,s as T,t as E}from"./DocPage-DEXoN4OO.js";var D,O,k,A,j;function M(){return(M=e((()=>{D=`_positioner_13juh_1`,O=`_content_13juh_5`,k=`_arrowWrapper_13juh_23`,A=`_arrow_13juh_23`,j={positioner:D,content:O,"popover-fade-in":`_popover-fade-in_13juh_1`,"popover-fade-out":`_popover-fade-out_13juh_1`,arrowWrapper:k,arrow:A}})))()}var N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{o(),u(),s(),h(),_(),y(),g(),v(),se(),b(),x(),S(),pe(),M(),N=t(),P=n(),F=10,I=5,L=(0,N.createContext)(null),R=e=>{let t=(0,N.useContext)(L);if(!t)throw Error(`<${e}> must be used inside <Popover>`);return t},z=({open:e,defaultOpen:t,onOpenChange:n,modal:r=!1,children:i})=>{let[a,o]=l({value:e,defaultValue:t??!1,onChange:n,name:`Popover`,prop:`open`}),s=(0,N.useId)(),[c,u]=(0,N.useState)(null),[d,f]=(0,N.useState)(null),p=(0,N.useMemo)(()=>({open:a,setOpen:o,modal:r,contentId:s,trigger:c,setTrigger:u,anchor:d,setAnchor:f}),[a,o,r,s,c,d]);return(0,P.jsx)(L.Provider,{value:p,children:i})},B=({asChild:e=!1,onClick:t,ref:n,...r})=>{let{open:i,setOpen:a,contentId:o,setTrigger:s}=R(`PopoverTrigger`),l=d(s,n),u={"aria-haspopup":`dialog`,"aria-expanded":i,"aria-controls":i?o:void 0,"data-state":i?`open`:`closed`,...r,onClick:c(t,()=>a(!i))};return e?(0,P.jsx)(m,{ref:l,...u}):(0,P.jsx)(`button`,{type:`button`,ref:l,...u})},V=({asChild:e=!1,ref:t,...n})=>{let{setAnchor:r}=R(`PopoverAnchor`),i=d(r,t);return(0,P.jsx)(e?m:`div`,{ref:i,...n})},H=({asChild:e=!1,onClick:t,...n})=>{let{setOpen:r}=R(`PopoverClose`),i={...n,onClick:c(t,()=>r(!1))};return e?(0,P.jsx)(m,{...i}):(0,P.jsx)(`button`,{type:`button`,...i})},U={transform:`translate(0, -200%)`},W=({ref:e,className:t,style:n,children:o,side:s=`bottom`,align:l=`center`,sideOffset:u=6,alignOffset:f=0,collisionPadding:p=8,matchAnchorWidth:m=!1,arrow:h=!1,portal:g=!0,forceMount:_=!1,onOpenAutoFocus:v,onCloseAutoFocus:y,onEscapeKeyDown:se,onPointerDownOutside:b,onFocusOutside:x,onInteractOutside:S,onKeyDown:pe,...C})=>{let{open:w,setOpen:T,modal:E,contentId:D,trigger:O,anchor:k}=R(`PopoverContent`),A=ee(),[M,L]=(0,N.useState)(null),[z,B]=(0,N.useState)(null),V=fe(w,M),H=w&&!!M,{setFloating:W,floatingStyles:G,placement:K,arrowStyles:q,isPositioned:J}=ae({open:V,anchor:k??O,placement:i(s,l),offset:{mainAxis:u+(h?I:0),crossAxis:f},matchAnchorWidth:m,padding:p,arrowElement:h?z:null}),Y=d(L,e),X=oe(M,k??O,w),Z=r(K);re(M,{enabled:H,disableOutsidePointerEvents:E,branches:()=>[O],onEscapeKeyDown:se,onPointerDownOutside:b,onFocusOutside:e=>{x?.(e),E&&e.preventDefault()},onInteractOutside:S,onDismiss:()=>T(!1)}),ne(M,{enabled:H,trapped:E,loop:E,restoreFocus:()=>O,onMountAutoFocus:v,onUnmountAutoFocus:y}),ue(H&&E),de(M,H&&E);let Q=e=>{if(E||!M||!O||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.shiftKey;if(!ce(M,e.target,t))return;e.preventDefault();let n=A??O.ownerDocument.body;(le(O,n,t)??O).focus(),T(!1)};if(!V&&!_)return null;let me=w?`open`:`closed`,$=(0,P.jsx)(`div`,{ref:W,className:j.positioner,style:J?G:{...G,...U},"data-side":Z.side,"data-align":Z.align,children:(0,P.jsx)(ie.Provider,{value:M,children:(0,P.jsxs)(`div`,{ref:Y,id:D,role:`dialog`,"aria-modal":E||void 0,tabIndex:-1,dir:X,"data-state":me,"data-side":Z.side,"data-align":Z.align,className:a(j.content,t),style:n,...C,onKeyDown:c(pe,Q),children:[o,h&&(0,P.jsx)(`span`,{ref:B,className:j.arrowWrapper,style:q,"aria-hidden":`true`,children:(0,P.jsx)(`svg`,{className:j.arrow,width:F,height:I,viewBox:`0 0 30 10`,preserveAspectRatio:`none`,children:(0,P.jsx)(`polygon`,{points:`0,0 30,0 15,10`})})})]})})});return g?(0,P.jsx)(te,{children:$}):$}})))()}function K(){return(0,q.jsxs)(z,{children:[(0,q.jsx)(B,{asChild:!0,children:(0,q.jsx)(p,{color:`neutral`,variant:`outline`,children:`Filter`})}),(0,q.jsxs)(W,{"aria-label":`Filters`,arrow:!0,children:[(0,q.jsxs)(`label`,{style:{display:`block`},children:[(0,q.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Read`]}),(0,q.jsxs)(`label`,{style:{display:`block`},children:[(0,q.jsx)(`input`,{type:`checkbox`}),` Unread`]}),(0,q.jsx)(H,{asChild:!0,children:(0,q.jsx)(p,{size:`small`,children:`Apply`})})]})]})}var q;function J(){return(J=e((()=>{f(),G(),q=n()})))()}function Y(){let[e,t]=(0,X.useState)(!1);return(0,Z.jsxs)(z,{open:e,onOpenChange:t,children:[(0,Z.jsx)(V,{asChild:!0,children:(0,Z.jsx)(`div`,{style:{display:`inline-flex`,gap:8,padding:8,border:`1px dashed`},children:(0,Z.jsx)(B,{asChild:!0,children:(0,Z.jsxs)(p,{children:[e?`Close`:`Open`,` account menu`]})})})}),(0,Z.jsx)(W,{align:`end`,"aria-label":`Account`,children:`Signed in as reader@example.com`})]})}var X,Z;function Q(){return(Q=e((()=>{X=t(),f(),G(),Z=n()})))()}function me(){return(0,$.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:he.map(e=>(0,$.jsxs)(z,{children:[(0,$.jsx)(B,{asChild:!0,children:(0,$.jsx)(p,{color:`neutral`,variant:`outline`,children:e})}),(0,$.jsxs)(W,{side:e,align:`start`,sideOffset:10,arrow:!0,children:[`Placed on the `,e,`, aligned to the start.`]})]},e))})}var $,he;function ge(){return(ge=e((()=>{f(),G(),$=n(),he=[`top`,`right`,`bottom`,`left`]})))()}var _e;function ve(){return(ve=e((()=>{_e=`import {
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
        <Button color="neutral" variant="outline">
          Filter
        </Button>
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
`})))()}var ye;function be(){return(be=e((()=>{ye=`import { useState } from "react";
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
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`import {
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
            <Button color="neutral" variant="outline">
              {side}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={side} align="start" sideOffset={10} arrow>
            Placed on the {side}, aligned to the start.
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
`})))()}var Ce,we,Te;function Ee(){return(Ee=e((()=>{J(),Q(),ge(),ve(),be(),Se(),t(),w(),C(),Ce=n(),we=T(Object.assign({"./demos/basic.tsx":K,"./demos/controlled.tsx":Y,"./demos/placement.tsx":me}),Object.assign({"./demos/basic.tsx":_e,"./demos/controlled.tsx":ye,"./demos/placement.tsx":xe})),Te=()=>(0,Ce.jsx)(E,{id:`popover`,demos:we})})))()}Ee();export{Te as default};