import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{n as a,t as ee}from"./useI18n-DtQV8aM0.js";import{T as o,j as te,k as ne}from"./icons-CtD3xdmP.js";import{n as s,t as re}from"./context-DEmBurf8.js";import{n as c,t as ie}from"./useControllableState-NzKJCN8h.js";import{n as l,t as ae}from"./forms-field-CWhPMCZt.js";import{n as u,r as d}from"./FormControl-D04MZLog.js";import{c as f,n as p,s as m,t as h}from"./DocPage-DzKszXiH.js";var g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{g=`_root_1pc61_1`,_=`_disabled_1pc61_13`,v=`_invalid_1pc61_13`,y=`_field_1pc61_28`,b=`_shake_1pc61_32`,x=`_small_1pc61_82`,S=`_medium_1pc61_87`,C=`_large_1pc61_92`,w=`_stepper_1pc61_97`,T=`_step_1pc61_97`,E=`_stepUp_1pc61_130`,D=`_stepDown_1pc61_135`,O={root:g,disabled:_,invalid:v,field:y,shake:b,"number-input-shake":`_number-input-shake_1pc61_1`,small:x,medium:S,large:C,stepper:w,step:T,stepUp:E,stepDown:D}})))()}function oe(e){if(!e||e>=1)return 0;let t=String(e),n=t.indexOf(`.`);return n===-1?0:t.length-n-1}function A(e,t,n){let r=e;return t!==void 0&&(r=Math.max(t,r)),n!==void 0&&(r=Math.min(n,r)),r}function j(e,t){return e==null||Number.isNaN(e)?``:e.toFixed(t)}function M(e){let t=e.trim();if(!t||!/^-?\d*(\.\d*)?$/.test(t))return null;let n=Number(t);return Number.isFinite(n)?n:null}var N,P,F;function I(){return(I=e((()=>{i(),a(),o(),c(),s(),l(),k(),N=t(),P=n(),F=({value:e,defaultValue:t=null,onChange:n,min:i,max:a,step:o=1,precision:s,size:c=`medium`,invalid:l=!1,disabled:u,readOnly:d,showStepper:f=!1,allowEmpty:p=!0,className:m,incrementLabel:h,decrementLabel:g,notANumberMessage:_,belowMinMessage:v,aboveMaxMessage:y,onBlur:b,onKeyDown:x,ref:S,...C})=>{let{t:w}=ee(),T=re({...C,disabled:u,readOnly:d}),E=!!T.disabled,D=E||!!T.readOnly,k=s??oe(o),[F,I]=ie({value:e,defaultValue:t,onChange:n}),[L,R]=(0,N.useState)(()=>j(F,k)),[z,B]=(0,N.useState)({current:F,precision:k});if(z.current!==F||z.precision!==k){B({current:F,precision:k});let e=M(L);(e===null||e!==F)&&R(j(F,k))}let V=e=>{let t=Number(e.toFixed(k));I(t),R(t.toFixed(k))},H=e=>{if(D)return;let t=e.trim();if(t===``||t===`-`){p?(I(null),R(``)):V(A(i??0,i,a));return}let n=M(t);if(n===null){R(j(F,k));return}V(A(n,i,a))},U=e=>{if(D)return;let t=M(L)??F??0;V(A(t+e,i,a))},W=e=>{x?.(e),!(D||e.defaultPrevented)&&(e.key===`ArrowUp`?(e.preventDefault(),U(o)):e.key===`ArrowDown`?(e.preventDefault(),U(-o)):e.key===`PageUp`||e.key===`PageDown`?(e.preventDefault(),U((e.key===`PageUp`?10:-10)*o)):e.key===`Home`&&i!==void 0?(e.preventDefault(),V(i)):e.key===`End`&&a!==void 0?(e.preventDefault(),V(a)):e.key===`Enter`&&e.currentTarget.blur())},G=e=>{H(e.currentTarget.value),b?.(e)},K=L.trim(),q=M(K),J;K&&K!==`-`&&K!==`.`&&(q===null?J=_??w(`numberInput.notANumber`):i!==void 0&&q<i?J=v??w(`numberInput.belowMin`,{min:i}):a!==void 0&&q>a&&(J=y??w(`numberInput.aboveMax`,{max:a})));let Y=J!==void 0,X=l||Y||ae(T[`aria-invalid`]);return(0,P.jsxs)(`div`,{className:r(O.root,O[c],X&&O.invalid,Y&&O.shake,E&&O.disabled,m),title:J,children:[(0,P.jsx)(`input`,{ref:S,inputMode:`decimal`,type:`text`,className:O.field,...T,role:`spinbutton`,"aria-valuemin":i,"aria-valuemax":a,"aria-valuenow":F??void 0,"aria-invalid":X||T[`aria-invalid`]||void 0,value:L,onChange:e=>R(e.currentTarget.value),onBlur:G,onKeyDown:W}),f&&(0,P.jsxs)(`div`,{className:O.stepper,"aria-hidden":`true`,children:[(0,P.jsx)(`button`,{type:`button`,className:r(O.step,O.stepUp),tabIndex:-1,disabled:D||a!==void 0&&(F??0)>=a,onClick:()=>U(o),"aria-label":h??w(`numberInput.increment`),children:(0,P.jsx)(ne,{size:12,strokeWidth:2.5,"aria-hidden":!0})}),(0,P.jsx)(`button`,{type:`button`,className:r(O.step,O.stepDown),tabIndex:-1,disabled:D||i!==void 0&&(F??0)<=i,onClick:()=>U(-o),"aria-label":g??w(`numberInput.decrement`),children:(0,P.jsx)(te,{size:12,strokeWidth:2.5,"aria-hidden":!0})})]})]})}})))()}function L(){let[e,t]=(0,R.useState)(1);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(F,{"aria-label":`Quantity`,min:0,max:10,value:e,onChange:t}),(0,z.jsxs)(`p`,{children:[`Value: `,e===null?`empty`:e]})]})}var R,z;function B(){return(B=e((()=>{I(),R=t(),z=n()})))()}function V(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(u,{label:`HTTP status`,helperText:`Between 100 and 599.`,required:!0,children:(0,H.jsx)(F,{defaultValue:200,min:100,max:599})}),(0,H.jsx)(u,{label:`Retries`,readOnly:!0,children:(0,H.jsx)(F,{defaultValue:3})})]})}var H;function U(){return(U=e((()=>{d(),I(),H=n()})))()}function W(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(F,{"aria-label":`Rate`,defaultValue:.5,min:0,max:1,step:.01,showStepper:!0}),(0,G.jsx)(F,{"aria-label":`Price`,defaultValue:9.9,precision:2,size:`large`}),(0,G.jsx)(F,{"aria-label":`Latency`,defaultValue:100,step:50,allowEmpty:!1,size:`small`})]})}var G;function K(){return(K=e((()=>{I(),G=n()})))()}var q;function J(){return(J=e((()=>{q=`import { NumberInput } from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [quantity, setQuantity] = useState<number | null>(1);
  return (
    <>
      <NumberInput
        aria-label="Quantity"
        min={0}
        max={10}
        value={quantity}
        onChange={setQuantity}
      />
      <p>Value: {quantity === null ? "empty" : quantity}</p>
    </>
  );
}
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { FormField, NumberInput } from "@minerva/lib-core";

export default function FormControlDemo() {
  return (
    <>
      <FormField label="HTTP status" helperText="Between 100 and 599." required>
        <NumberInput defaultValue={200} min={100} max={599} />
      </FormField>
      <FormField label="Retries" readOnly>
        <NumberInput defaultValue={3} />
      </FormField>
    </>
  );
}
`})))()}var Z;function Q(){return(Q=e((()=>{Z=`import { NumberInput } from "@minerva/lib-core";

export default function StepperPrecisionDemo() {
  return (
    <>
      <NumberInput
        aria-label="Rate"
        defaultValue={0.5}
        min={0}
        max={1}
        step={0.01}
        showStepper
      />
      <NumberInput
        aria-label="Price"
        defaultValue={9.9}
        precision={2}
        size="large"
      />
      <NumberInput
        aria-label="Latency"
        defaultValue={100}
        step={50}
        allowEmpty={false}
        size="small"
      />
    </>
  );
}
`})))()}var $,se,ce;function le(){return(le=e((()=>{B(),U(),K(),J(),X(),Q(),t(),p(),f(),$=n(),se=m(Object.assign({"./demos/basic.tsx":L,"./demos/form-control.tsx":V,"./demos/stepper-precision.tsx":W}),Object.assign({"./demos/basic.tsx":q,"./demos/form-control.tsx":Y,"./demos/stepper-precision.tsx":Z})),ce=()=>(0,$.jsx)(h,{id:`number-input`,demos:se})})))()}le();export{ce as default};