import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{C as r,O as i,c as a,k as o,n as s,s as c,t as l,w as u}from"./DocPage-HgWiqH91.js";import{n as d,t as ee}from"./useI18n-CYdr3eVz.js";import{T as f,j as te,k as ne}from"./icons-BaZJL-85.js";import{n as p,t as re}from"./context-C6l3dqFj.js";import{n as m,t as ie}from"./forms-field-CWhPMCZt.js";import{n as h,r as g}from"./FormControl-DSGbEYF3.js";var _,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{_=`_root_1pc61_1`,v=`_disabled_1pc61_13`,y=`_invalid_1pc61_13`,b=`_field_1pc61_28`,x=`_shake_1pc61_32`,S=`_small_1pc61_82`,C=`_medium_1pc61_87`,w=`_large_1pc61_92`,T=`_stepper_1pc61_97`,E=`_step_1pc61_97`,D=`_stepUp_1pc61_130`,O=`_stepDown_1pc61_135`,k={root:_,disabled:v,invalid:y,field:b,shake:x,"number-input-shake":`_number-input-shake_1pc61_1`,small:S,medium:C,large:w,stepper:T,step:E,stepUp:D,stepDown:O}})))()}function ae(e){if(!e||e>=1)return 0;let t=String(e),n=t.indexOf(`.`);return n===-1?0:t.length-n-1}function j(e,t,n){let r=e;return t!==void 0&&(r=Math.max(t,r)),n!==void 0&&(r=Math.min(n,r)),r}function M(e,t){return e==null||Number.isNaN(e)?``:e.toFixed(t)}function N(e){let t=e.trim();if(!t||!/^-?\d*(\.\d*)?$/.test(t))return null;let n=Number(t);return Number.isFinite(n)?n:null}var P,F,I;function L(){return(L=e((()=>{i(),d(),f(),u(),p(),m(),A(),P=t(),F=n(),I=({value:e,defaultValue:t,onChange:n,min:i,max:a,step:s=1,precision:c,size:l=`medium`,invalid:u=!1,disabled:d,readOnly:f,showStepper:p=!1,allowEmpty:m=!0,className:h,incrementLabel:g,decrementLabel:_,notANumberMessage:v,belowMinMessage:y,aboveMaxMessage:b,onBlur:x,onKeyDown:S,ref:C,...w})=>{let{t:T}=ee(),E=re({...w,disabled:d,readOnly:f}),D=!!E.disabled,O=D||!!E.readOnly,A=c??ae(s),[I,L]=r({value:e,defaultValue:t??null,onChange:n,name:`NumberInput`}),[R,z]=(0,P.useState)(()=>M(I,A)),[B,V]=(0,P.useState)({current:I,precision:A});if(B.current!==I||B.precision!==A){V({current:I,precision:A});let e=N(R);(e===null||e!==I)&&z(M(I,A))}let H=e=>{let t=Number(e.toFixed(A));L(t),z(t.toFixed(A))},U=e=>{if(O)return;let t=e.trim();if(t===``||t===`-`){m?(L(null),z(``)):H(j(i??0,i,a));return}let n=N(t);if(n===null){z(M(I,A));return}H(j(n,i,a))},W=e=>{if(O)return;let t=N(R)??I??0;H(j(t+e,i,a))},G=e=>{S?.(e),!(O||e.defaultPrevented)&&(e.key===`ArrowUp`?(e.preventDefault(),W(s)):e.key===`ArrowDown`?(e.preventDefault(),W(-s)):e.key===`PageUp`||e.key===`PageDown`?(e.preventDefault(),W((e.key===`PageUp`?10:-10)*s)):e.key===`Home`&&i!==void 0?(e.preventDefault(),H(i)):e.key===`End`&&a!==void 0?(e.preventDefault(),H(a)):e.key===`Enter`&&e.currentTarget.blur())},K=e=>{U(e.currentTarget.value),x?.(e)},q=R.trim(),J=N(q),Y;q&&q!==`-`&&q!==`.`&&(J===null?Y=v??T(`numberInput.notANumber`):i!==void 0&&J<i?Y=y??T(`numberInput.belowMin`,{min:i}):a!==void 0&&J>a&&(Y=b??T(`numberInput.aboveMax`,{max:a})));let X=Y!==void 0,Z=u||X||ie(E[`aria-invalid`]);return(0,F.jsxs)(`div`,{className:o(k.root,k[l],Z&&k.invalid,X&&k.shake,D&&k.disabled,h),title:Y,children:[(0,F.jsx)(`input`,{ref:C,inputMode:`decimal`,type:`text`,className:k.field,...E,role:`spinbutton`,"aria-valuemin":i,"aria-valuemax":a,"aria-valuenow":I??void 0,"aria-invalid":Z||E[`aria-invalid`]||void 0,value:R,onChange:e=>z(e.currentTarget.value),onBlur:K,onKeyDown:G}),p&&(0,F.jsxs)(`div`,{className:k.stepper,"aria-hidden":`true`,children:[(0,F.jsx)(`button`,{type:`button`,className:o(k.step,k.stepUp),tabIndex:-1,disabled:O||a!==void 0&&(I??0)>=a,onClick:()=>W(s),"aria-label":g??T(`numberInput.increment`),children:(0,F.jsx)(ne,{size:12,strokeWidth:2.5,"aria-hidden":!0})}),(0,F.jsx)(`button`,{type:`button`,className:o(k.step,k.stepDown),tabIndex:-1,disabled:O||i!==void 0&&(I??0)<=i,onClick:()=>W(-s),"aria-label":_??T(`numberInput.decrement`),children:(0,F.jsx)(te,{size:12,strokeWidth:2.5,"aria-hidden":!0})})]})]})}})))()}function R(){let[e,t]=(0,z.useState)(1);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(I,{"aria-label":`Quantity`,min:0,max:10,value:e,onChange:t}),(0,B.jsxs)(`p`,{children:[`Value: `,e===null?`empty`:e]})]})}var z,B;function V(){return(V=e((()=>{L(),z=t(),B=n()})))()}function H(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(h,{label:`HTTP status`,helperText:`Between 100 and 599.`,required:!0,children:(0,U.jsx)(I,{defaultValue:200,min:100,max:599})}),(0,U.jsx)(h,{label:`Retries`,readOnly:!0,children:(0,U.jsx)(I,{defaultValue:3})})]})}var U;function W(){return(W=e((()=>{g(),L(),U=n()})))()}function G(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(I,{"aria-label":`Rate`,defaultValue:.5,min:0,max:1,step:.01,showStepper:!0}),(0,K.jsx)(I,{"aria-label":`Price`,defaultValue:9.9,precision:2,size:`large`}),(0,K.jsx)(I,{"aria-label":`Latency`,defaultValue:100,step:50,allowEmpty:!1,size:`small`})]})}var K;function q(){return(q=e((()=>{L(),K=n()})))()}var J;function Y(){return(Y=e((()=>{J=`import { NumberInput } from "@minerva/lib-core";
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
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { FormField, NumberInput } from "@minerva/lib-core";

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
`})))()}var Q;function $(){return($=e((()=>{Q=`import { NumberInput } from "@minerva/lib-core";

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
`})))()}var oe,se,ce;function le(){return(le=e((()=>{V(),W(),q(),Y(),Z(),$(),t(),s(),a(),oe=n(),se=c(Object.assign({"./demos/basic.tsx":R,"./demos/form-control.tsx":H,"./demos/stepper-precision.tsx":G}),Object.assign({"./demos/basic.tsx":J,"./demos/form-control.tsx":X,"./demos/stepper-precision.tsx":Q})),ce=()=>(0,oe.jsx)(l,{id:`number-input`,demos:se})})))()}le();export{ce as default};