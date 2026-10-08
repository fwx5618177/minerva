import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Fn as r,X as i,Z as a,Zt as ee,cn as o,jt as s}from"./minerva-web-components-e9i9Tzii.js";import{Q as c,Z as te}from"./io5-BOy5_xXs.js";import{n as l,t as ne}from"./useI18n-Brv-VDVY.js";import{t as u}from"./stylingHooks-GjssfG7q.js";import{T as d,j as re,k as ie}from"./icons-C9qyBhWC.js";import{n as f,t as ae}from"./context-CofDH3-d.js";import{n as p,t as oe}from"./forms-field-CWhPMCZt.js";import{a as m,r as h}from"./FormControl-s2LFIZKG.js";import{m as g,n as _,p as v,t as y}from"./DocPage-44Ak-YGP.js";var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=`_root_1pc61_1`,x=`_disabled_1pc61_13`,S=`_invalid_1pc61_13`,C=`_field_1pc61_28`,w=`_shake_1pc61_32`,T=`_small_1pc61_82`,E=`_medium_1pc61_87`,D=`_large_1pc61_92`,O=`_stepper_1pc61_97`,k=`_step_1pc61_97`,A=`_stepUp_1pc61_130`,j=`_stepDown_1pc61_135`,M={root:b,disabled:x,invalid:S,field:C,shake:w,"number-input-shake":`_number-input-shake_1pc61_1`,small:T,medium:E,large:D,stepper:O,step:k,stepUp:A,stepDown:j}})))()}var P,F,I;function L(){return(L=e((()=>{o(),l(),d(),c(),f(),p(),N(),P=t(),F=n(),I=({value:e,defaultValue:t,onChange:n,min:o,max:c,step:l=1,precision:d,size:f=`medium`,invalid:p=!1,disabled:m,readOnly:h,showStepper:g=!1,allowEmpty:_=!0,className:v,incrementLabel:y,decrementLabel:b,notANumberMessage:x,belowMinMessage:S,aboveMaxMessage:C,onBlur:w,onKeyDown:T,ref:E,...D})=>{let{t:O}=ne(),k=ae({...D,disabled:m,readOnly:h}),A=!!k.disabled,j=A||!!k.readOnly,N=d??ee(l),[I,L]=te({value:e,defaultValue:t??null,onChange:n,name:`NumberInput`}),[R,z]=(0,P.useState)(()=>s(I,N)),[B,V]=(0,P.useState)({current:I,precision:N});if(B.current!==I||B.precision!==N){V({current:I,precision:N});let e=a(R);(e===null||e!==I)&&z(s(I,N))}let H=e=>{let t=Number(e.toFixed(N));L(t),z(t.toFixed(N))},U=e=>{if(j)return;let t=e.trim();if(t===``||t===`-`){_?(L(null),z(``)):H(r(o??0,o,c));return}let n=a(t);if(n===null){z(s(I,N));return}H(r(n,o,c))},W=e=>{if(j)return;let t=a(R)??I??0;H(r(t+e,o,c))},G=e=>{T?.(e),!(j||e.defaultPrevented)&&(e.key===`ArrowUp`?(e.preventDefault(),W(l)):e.key===`ArrowDown`?(e.preventDefault(),W(-l)):e.key===`PageUp`||e.key===`PageDown`?(e.preventDefault(),W((e.key===`PageUp`?10:-10)*l)):e.key===`Home`&&o!==void 0?(e.preventDefault(),H(o)):e.key===`End`&&c!==void 0?(e.preventDefault(),H(c)):e.key===`Enter`&&e.currentTarget.blur())},K=e=>{U(e.currentTarget.value),w?.(e)},q=R.trim(),J=a(q),Y;q&&q!==`-`&&q!==`.`&&(J===null?Y=x??O(`numberInput.notANumber`):o!==void 0&&J<o?Y=S??O(`numberInput.belowMin`,{min:o}):c!==void 0&&J>c&&(Y=C??O(`numberInput.aboveMax`,{max:c})));let X=Y!==void 0,Z=p||X||oe(k[`aria-invalid`]);return(0,F.jsxs)(`div`,{className:i(M.root,M[f],Z&&M.invalid,X&&M.shake,A&&M.disabled,v),title:Y,...u(`number-input`,`root`,{disabled:A,invalid:Z,readonly:!!k.readOnly,required:!!(k.required||k[`aria-required`]),size:f}),children:[(0,F.jsx)(`input`,{ref:E,inputMode:`decimal`,type:`text`,className:M.field,...k,role:`spinbutton`,"aria-valuemin":o,"aria-valuemax":c,"aria-valuenow":I??void 0,"aria-invalid":Z||k[`aria-invalid`]||void 0,value:R,onChange:e=>z(e.currentTarget.value),onBlur:K,onKeyDown:G,...u(`number-input`,`input`)}),g&&(0,F.jsxs)(`div`,{className:M.stepper,"aria-hidden":`true`,...u(`number-input`,`stepper`),children:[(0,F.jsx)(`button`,{type:`button`,className:i(M.step,M.stepUp),tabIndex:-1,disabled:j||c!==void 0&&(I??0)>=c,onClick:()=>W(l),"aria-label":y??O(`numberInput.increment`),...u(`number-input`,`increment`),children:(0,F.jsx)(ie,{size:12,strokeWidth:2.5,"aria-hidden":!0})}),(0,F.jsx)(`button`,{type:`button`,className:i(M.step,M.stepDown),tabIndex:-1,disabled:j||o!==void 0&&(I??0)<=o,onClick:()=>W(-l),"aria-label":b??O(`numberInput.decrement`),...u(`number-input`,`decrement`),children:(0,F.jsx)(re,{size:12,strokeWidth:2.5,"aria-hidden":!0})})]})]})}})))()}function R(){let[e,t]=(0,z.useState)(1);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(I,{"aria-label":`Quantity`,min:0,max:10,value:e,onChange:t}),(0,B.jsxs)(`p`,{children:[`Value: `,e===null?`empty`:e]})]})}var z,B;function V(){return(V=e((()=>{L(),z=t(),B=n()})))()}function H(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(h,{label:`HTTP status`,helperText:`Between 100 and 599.`,required:!0,children:(0,U.jsx)(I,{defaultValue:200,min:100,max:599})}),(0,U.jsx)(h,{label:`Retries`,readOnly:!0,children:(0,U.jsx)(I,{defaultValue:3})})]})}var U;function W(){return(W=e((()=>{m(),L(),U=n()})))()}function G(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(I,{"aria-label":`Rate`,defaultValue:.5,min:0,max:1,step:.01,showStepper:!0}),(0,K.jsx)(I,{"aria-label":`Price`,defaultValue:9.9,precision:2,size:`large`}),(0,K.jsx)(I,{"aria-label":`Latency`,defaultValue:100,step:50,allowEmpty:!1,size:`small`})]})}var K;function q(){return(q=e((()=>{L(),K=n()})))()}var J;function Y(){return(Y=e((()=>{J=`import { NumberInput } from "@minerva/lib-core";
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
`})))()}var se,ce,le;function ue(){return(ue=e((()=>{V(),W(),q(),Y(),Z(),$(),t(),_(),g(),se=n(),ce=v(Object.assign({"./demos/basic.tsx":R,"./demos/form-control.tsx":H,"./demos/stepper-precision.tsx":G}),Object.assign({"./demos/basic.tsx":J,"./demos/form-control.tsx":X,"./demos/stepper-precision.tsx":Q})),le=()=>(0,se.jsx)(y,{id:`number-input`,demos:ce})})))()}ue();export{le as default};