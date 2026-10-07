import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{L as a,k as o,n as s}from"./dist-DvR9hbhy.js";import{n as c,t as l}from"./Button-CG2pPO-r.js";import{n as u,t as d}from"./mergeRefs-CWbOvZcQ.js";import{n as f,t as p}from"./useControllableState-NzKJCN8h.js";import{t as m}from"./composeEventHandlers-LoCUxaMd.js";import{n as h,t as g}from"./Slot-CGAfhnsY.js";import{a as ee,c as te,i as _,n as ne,o as re,r as ie,s as v,t as y}from"./useFocusScope-CIrWfRLt.js";import{n as ae,t as oe}from"./useAnchoredPosition-IDWVp0SR.js";import{n as b,o as se}from"./direction-BdBdG3Jn.js";import{n as ce,r as le,t as ue}from"./tabbing-jOsV3vi-.js";import{a as x,i as S,n as de,o as fe,r as pe,t as me}from"./useScrollLock-DEdFwJak.js";import{c as C,n as w,s as T,t as he}from"./DocPage-DzKszXiH.js";var E,D,O,k,A;function j(){return(j=e((()=>{E=`_positioner_13juh_1`,D=`_content_13juh_5`,O=`_arrowWrapper_13juh_23`,k=`_arrow_13juh_23`,A={positioner:E,content:D,"popover-fade-in":`_popover-fade-in_13juh_1`,"popover-fade-out":`_popover-fade-out_13juh_1`,arrowWrapper:O,arrow:k}})))()}var M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{i(),d(),f(),g(),v(),oe(),_(),y(),b(),ue(),x(),S(),me(),j(),M=t(),o(),N=n(),P=10,F=5,I=(0,M.createContext)(null),L=e=>{let t=(0,M.useContext)(I);if(!t)throw Error(`<${e}> must be used inside <Popover>`);return t},R=({open:e,defaultOpen:t=!1,onOpenChange:n,modal:r=!1,children:i})=>{let[a,o]=p({value:e,defaultValue:t,onChange:n}),s=(0,M.useId)(),[c,l]=(0,M.useState)(null),[u,d]=(0,M.useState)(null),f=(0,M.useMemo)(()=>({open:a,setOpen:o,modal:r,contentId:s,trigger:c,setTrigger:l,anchor:u,setAnchor:d}),[a,o,r,s,c,u]);return(0,N.jsx)(I.Provider,{value:f,children:i})},z=({asChild:e=!1,onClick:t,ref:n,...r})=>{let{open:i,setOpen:a,contentId:o,setTrigger:s}=L(`PopoverTrigger`),c=u(s,n),l={"aria-haspopup":`dialog`,"aria-expanded":i,"aria-controls":i?o:void 0,"data-state":i?`open`:`closed`,...r,onClick:m(t,()=>a(!i))};return e?(0,N.jsx)(h,{ref:c,...l}):(0,N.jsx)(`button`,{type:`button`,ref:c,...l})},B=({asChild:e=!1,ref:t,...n})=>{let{setAnchor:r}=L(`PopoverAnchor`),i=u(r,t);return(0,N.jsx)(e?h:`div`,{ref:i,...n})},V=({asChild:e=!1,onClick:t,...n})=>{let{setOpen:r}=L(`PopoverClose`),i={...n,onClick:m(t,()=>r(!1))};return e?(0,N.jsx)(h,{...i}):(0,N.jsx)(`button`,{type:`button`,...i})},H={transform:`translate(0, -200%)`},U=({ref:e,className:t,style:n,children:i,side:o=`bottom`,align:c=`center`,sideOffset:l=6,alignOffset:d=0,collisionPadding:f=8,matchAnchorWidth:p=!1,arrow:h=!1,portal:g=!0,forceMount:_=!1,onOpenAutoFocus:v,onCloseAutoFocus:y,onEscapeKeyDown:oe,onPointerDownOutside:b,onFocusOutside:ue,onInteractOutside:x,onKeyDown:S,...me})=>{let{open:C,setOpen:w,modal:T,contentId:he,trigger:E,anchor:D}=L(`PopoverContent`),O=ee(),[k,j]=(0,M.useState)(null),[I,R]=(0,M.useState)(null),z=pe(C,k),B=C&&!!k,{setFloating:V,floatingStyles:U,placement:W,arrowStyles:G,isPositioned:K}=ae({open:z,anchor:D??E,placement:a(o,c),offset:{mainAxis:l+(h?F:0),crossAxis:d},matchAnchorWidth:p,padding:f,arrowElement:h?I:null}),q=u(j,e),ge=se(k,D??E,C),J=s(W);re(k,{enabled:B,disableOutsidePointerEvents:T,branches:()=>[E],onEscapeKeyDown:oe,onPointerDownOutside:b,onFocusOutside:e=>{ue?.(e),T&&e.preventDefault()},onInteractOutside:x,onDismiss:()=>w(!1)}),ne(k,{enabled:B,trapped:T,loop:T,restoreFocus:()=>E,onMountAutoFocus:v,onUnmountAutoFocus:y}),de(B&&T),fe(k,B&&T);let Y=e=>{if(T||!k||!E||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.shiftKey;if(!ce(k,e.target,t))return;e.preventDefault();let n=O??E.ownerDocument.body;(le(E,n,t)??E).focus(),w(!1)};if(!z&&!_)return null;let X=C?`open`:`closed`,Z=(0,N.jsx)(`div`,{ref:V,className:A.positioner,style:K?U:{...U,...H},"data-side":J.side,"data-align":J.align,children:(0,N.jsx)(ie.Provider,{value:k,children:(0,N.jsxs)(`div`,{ref:q,id:he,role:`dialog`,"aria-modal":T||void 0,tabIndex:-1,dir:ge,"data-state":X,"data-side":J.side,"data-align":J.align,className:r(A.content,t),style:n,...me,onKeyDown:m(S,Y),children:[i,h&&(0,N.jsx)(`span`,{ref:R,className:A.arrowWrapper,style:G,"aria-hidden":`true`,children:(0,N.jsx)(`svg`,{className:A.arrow,width:P,height:F,viewBox:`0 0 30 10`,preserveAspectRatio:`none`,children:(0,N.jsx)(`polygon`,{points:`0,0 30,0 15,10`})})})]})})});return g?(0,N.jsx)(te,{children:Z}):Z}})))()}function G(){return(0,K.jsxs)(R,{children:[(0,K.jsx)(z,{asChild:!0,children:(0,K.jsx)(l,{color:`neutral`,variant:`outline`,children:`Filter`})}),(0,K.jsxs)(U,{"aria-label":`Filters`,arrow:!0,children:[(0,K.jsxs)(`label`,{style:{display:`block`},children:[(0,K.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Read`]}),(0,K.jsxs)(`label`,{style:{display:`block`},children:[(0,K.jsx)(`input`,{type:`checkbox`}),` Unread`]}),(0,K.jsx)(V,{asChild:!0,children:(0,K.jsx)(l,{size:`small`,children:`Apply`})})]})]})}var K;function q(){return(q=e((()=>{c(),W(),K=n()})))()}function ge(){let[e,t]=(0,J.useState)(!1);return(0,Y.jsxs)(R,{open:e,onOpenChange:t,children:[(0,Y.jsx)(B,{asChild:!0,children:(0,Y.jsx)(`div`,{style:{display:`inline-flex`,gap:8,padding:8,border:`1px dashed`},children:(0,Y.jsx)(z,{asChild:!0,children:(0,Y.jsxs)(l,{children:[e?`Close`:`Open`,` account menu`]})})})}),(0,Y.jsx)(U,{align:`end`,"aria-label":`Account`,children:`Signed in as reader@example.com`})]})}var J,Y;function X(){return(X=e((()=>{J=t(),c(),W(),Y=n()})))()}function Z(){return(0,Q.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:_e.map(e=>(0,Q.jsxs)(R,{children:[(0,Q.jsx)(z,{asChild:!0,children:(0,Q.jsx)(l,{color:`neutral`,variant:`outline`,children:e})}),(0,Q.jsxs)(U,{side:e,align:`start`,sideOffset:10,arrow:!0,children:[`Placed on the `,e,`, aligned to the start.`]})]},e))})}var Q,_e;function ve(){return(ve=e((()=>{c(),W(),Q=n(),_e=[`top`,`right`,`bottom`,`left`]})))()}var ye;function be(){return(be=e((()=>{ye=`import {
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
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`import { useState } from "react";
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
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`import {
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
`})))()}var Te,Ee,De;function $(){return($=e((()=>{q(),X(),ve(),be(),Se(),we(),t(),w(),C(),Te=n(),Ee=T(Object.assign({"./demos/basic.tsx":G,"./demos/controlled.tsx":ge,"./demos/placement.tsx":Z}),Object.assign({"./demos/basic.tsx":ye,"./demos/controlled.tsx":xe,"./demos/placement.tsx":Ce})),De=()=>(0,Te.jsx)(he,{id:`popover`,demos:Ee})})))()}$();export{De as default};