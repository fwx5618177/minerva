import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Bt as r,Gt as i,X as a,cn as o}from"./minerva-web-components-e9i9Tzii.js";import{Q as s,Y as c,Z as l,et as u,tt as d}from"./io5-CkIs6v-8.js";import{t as f}from"./stylingHooks-GjssfG7q.js";import{n as p,t as m}from"./Button-BfJfx3BZ.js";import{n as h,t as g}from"./Slot-DnptwJFs.js";import{a as ee,c as te,i as _,n as ne,o as re,r as ie,s as v,t as y}from"./useFocusScope-B_OMr7xS.js";import{a as ae,i as oe,r as se,t as ce}from"./direction-B2fcyo3I.js";import{n as le,r as ue,t as b}from"./tabbing-BEMcZ1ol.js";import{a as x,i as de,n as fe,o as pe,r as me,t as S}from"./useScrollLock-CwaOQvkA.js";import{m as C,n as w,p as T,t as E}from"./DocPage-BUvZl8IZ.js";var D,O,k,A,j;function M(){return(M=e((()=>{D=`_positioner_13juh_1`,O=`_content_13juh_5`,k=`_arrowWrapper_13juh_23`,A=`_arrow_13juh_23`,j={positioner:D,content:O,"popover-fade-in":`_popover-fade-in_13juh_1`,"popover-fade-out":`_popover-fade-out_13juh_1`,arrowWrapper:k,arrow:A}})))()}var N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{o(),u(),s(),g(),v(),oe(),_(),y(),ce(),b(),x(),de(),S(),M(),N=t(),P=n(),F=10,I=5,L=(0,N.createContext)(null),R=e=>{let t=(0,N.useContext)(L);if(!t)throw Error(`<${e}> must be used inside <Popover>`);return t},z=({open:e,defaultOpen:t,onOpenChange:n,modal:r=!1,children:i})=>{let[a,o]=l({value:e,defaultValue:t??!1,onChange:n,name:`Popover`,prop:`open`}),s=(0,N.useId)(),[c,u]=(0,N.useState)(null),[d,f]=(0,N.useState)(null),p=(0,N.useMemo)(()=>({open:a,setOpen:o,modal:r,contentId:s,trigger:c,setTrigger:u,anchor:d,setAnchor:f}),[a,o,r,s,c,d]);return(0,P.jsx)(L.Provider,{value:p,children:i})},B=({asChild:e=!1,onClick:t,ref:n,...r})=>{let{open:i,setOpen:a,contentId:o,setTrigger:s}=R(`PopoverTrigger`),l=d(s,n),u={"aria-haspopup":`dialog`,"aria-expanded":i,"aria-controls":i?o:void 0,...r,...e?void 0:f(`popover`,`trigger`,{state:i?`open`:`closed`}),onClick:c(t,()=>a(!i))};return e?(0,P.jsx)(h,{ref:l,...u}):(0,P.jsx)(`button`,{type:`button`,ref:l,...u})},V=({asChild:e=!1,ref:t,...n})=>{let{setAnchor:r}=R(`PopoverAnchor`),i=d(r,t);return(0,P.jsx)(e?h:`div`,{ref:i,...n})},H=({asChild:e=!1,onClick:t,...n})=>{let{setOpen:r}=R(`PopoverClose`),i={...n,onClick:c(t,()=>r(!1))};return e?(0,P.jsx)(h,{...i}):(0,P.jsx)(`button`,{type:`button`,...i})},U={transform:`translate(0, -200%)`},W=({ref:e,className:t,style:n,children:o,side:s=`bottom`,align:l=`center`,sideOffset:u=6,alignOffset:p=0,collisionPadding:m=8,matchAnchorWidth:h=!1,arrow:g=!1,portal:_=!0,forceMount:v=!1,onOpenAutoFocus:y,onCloseAutoFocus:oe,onEscapeKeyDown:ce,onPointerDownOutside:b,onFocusOutside:x,onInteractOutside:de,onKeyDown:S,...C})=>{let{open:w,setOpen:T,modal:E,contentId:D,trigger:O,anchor:k}=R(`PopoverContent`),A=ee(),[M,L]=(0,N.useState)(null),[z,B]=(0,N.useState)(null),V=me(w,M),H=w&&!!M,{setFloating:W,floatingStyles:G,placement:K,arrowStyles:q,isPositioned:J}=ae({open:V,anchor:k??O,placement:i(s,l),offset:{mainAxis:u+(g?I:0),crossAxis:p},matchAnchorWidth:h,padding:m,arrowElement:g?z:null}),he=d(L,e),Y=se(M,k??O,w),X=r(K);re(M,{enabled:H,disableOutsidePointerEvents:E,branches:()=>[O],onEscapeKeyDown:ce,onPointerDownOutside:b,onFocusOutside:e=>{x?.(e),E&&e.preventDefault()},onInteractOutside:de,onDismiss:()=>T(!1)}),ne(M,{enabled:H,trapped:E,loop:E,restoreFocus:()=>O,onMountAutoFocus:y,onUnmountAutoFocus:oe}),fe(H&&E),pe(M,H&&E);let Z=e=>{if(E||!M||!O||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.shiftKey;if(!le(M,e.target,t))return;e.preventDefault();let n=A??O.ownerDocument.body;(ue(O,n,t)??O).focus(),T(!1)};if(!V&&!v)return null;let ge=w?`open`:`closed`,Q=(0,P.jsx)(`div`,{ref:W,className:j.positioner,style:J?G:{...G,...U},"data-side":X.side,"data-align":X.align,children:(0,P.jsx)(ie.Provider,{value:M,children:(0,P.jsxs)(`div`,{ref:he,id:D,role:`dialog`,"aria-modal":E||void 0,tabIndex:-1,dir:Y,className:a(j.content,t),style:n,...C,...f(`popover`,`content`,{state:ge,side:X.side,align:X.align,placement:K}),onKeyDown:c(S,Z),children:[o,g&&(0,P.jsx)(`span`,{ref:B,className:j.arrowWrapper,style:q,"aria-hidden":`true`,...f(`popover`,`arrow`),children:(0,P.jsx)(`svg`,{className:j.arrow,width:F,height:I,viewBox:`0 0 30 10`,preserveAspectRatio:`none`,children:(0,P.jsx)(`polygon`,{points:`0,0 30,0 15,10`})})})]})})});return _?(0,P.jsx)(te,{children:Q}):Q}})))()}function K(){return(0,q.jsxs)(z,{children:[(0,q.jsx)(B,{asChild:!0,children:(0,q.jsx)(p,{color:`neutral`,variant:`outline`,children:`Filter`})}),(0,q.jsxs)(W,{"aria-label":`Filters`,arrow:!0,children:[(0,q.jsxs)(`label`,{style:{display:`block`},children:[(0,q.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Read`]}),(0,q.jsxs)(`label`,{style:{display:`block`},children:[(0,q.jsx)(`input`,{type:`checkbox`}),` Unread`]}),(0,q.jsx)(H,{asChild:!0,children:(0,q.jsx)(p,{size:`small`,children:`Apply`})})]})]})}var q;function J(){return(J=e((()=>{m(),G(),q=n()})))()}function he(){let[e,t]=(0,Y.useState)(!1);return(0,X.jsxs)(z,{open:e,onOpenChange:t,children:[(0,X.jsx)(V,{asChild:!0,children:(0,X.jsx)(`div`,{style:{display:`inline-flex`,gap:8,padding:8,border:`1px dashed`},children:(0,X.jsx)(B,{asChild:!0,children:(0,X.jsxs)(p,{children:[e?`Close`:`Open`,` account menu`]})})})}),(0,X.jsx)(W,{align:`end`,"aria-label":`Account`,children:`Signed in as reader@example.com`})]})}var Y,X;function Z(){return(Z=e((()=>{Y=t(),m(),G(),X=n()})))()}function ge(){return(0,Q.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:$.map(e=>(0,Q.jsxs)(z,{children:[(0,Q.jsx)(B,{asChild:!0,children:(0,Q.jsx)(p,{color:`neutral`,variant:`outline`,children:e})}),(0,Q.jsxs)(W,{side:e,align:`start`,sideOffset:10,arrow:!0,children:[`Placed on the `,e,`, aligned to the start.`]})]},e))})}var Q,$;function _e(){return(_e=e((()=>{m(),G(),Q=n(),$=[`top`,`right`,`bottom`,`left`]})))()}var ve;function ye(){return(ye=e((()=>{ve=`import {
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
`})))()}var be;function xe(){return(xe=e((()=>{be=`import { useState } from "react";
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
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import {
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
`})))()}var we,Te,Ee;function De(){return(De=e((()=>{J(),Z(),_e(),ye(),xe(),Ce(),t(),w(),C(),we=n(),Te=T(Object.assign({"./demos/basic.tsx":K,"./demos/controlled.tsx":he,"./demos/placement.tsx":ge}),Object.assign({"./demos/basic.tsx":ve,"./demos/controlled.tsx":be,"./demos/placement.tsx":Se})),Ee=()=>(0,we.jsx)(E,{id:`popover`,demos:Te})})))()}De();export{Ee as default};