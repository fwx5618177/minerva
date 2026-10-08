import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{Gt as r,V as i,o as a,s as o,st as ee,vt as s}from"./minerva-web-components-ByJsjP0z.js";import{m as c,n as l,p as u,t as d}from"./DocPage-BIGX2Gcv.js";import{Q as f,Z as te}from"./io5-C8BS_IfX.js";import{n as p,t as ne}from"./useI18n-Dk-DwhiM.js";import{t as m}from"./stylingHooks-GjssfG7q.js";import{T as h,j as re,k as ie}from"./icons-Dj0E45-e.js";import{n as g,t as ae}from"./context-B9-pxdjQ.js";import{n as _,t as oe}from"./forms-field-CWhPMCZt.js";import{a as v,r as y}from"./FormControl-CJZ6FbrF.js";var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=`_root_b3ddu_1`,x=`_disabled_b3ddu_13`,S=`_invalid_b3ddu_13`,C=`_field_b3ddu_32`,w=`_shake_b3ddu_36`,T=`_small_b3ddu_86`,E=`_medium_b3ddu_91`,D=`_large_b3ddu_96`,O=`_stepper_b3ddu_101`,k=`_step_b3ddu_101`,A=`_stepUp_b3ddu_137`,j=`_stepDown_b3ddu_141`,M={root:b,disabled:x,invalid:S,field:C,shake:w,"number-input-shake":`_number-input-shake_b3ddu_1`,small:T,medium:E,large:D,stepper:O,step:k,stepUp:A,stepDown:j}})))()}var P,F,I;function L(){return(L=e((()=>{s(),p(),h(),f(),g(),_(),N(),P=t(),F=n(),I=({value:e,defaultValue:t,onChange:n,min:s,max:c,step:l=1,precision:u,size:d=`medium`,invalid:f=!1,disabled:p,readOnly:h,showStepper:g=!1,allowEmpty:_=!0,className:v,incrementLabel:y,decrementLabel:b,notANumberMessage:x,belowMinMessage:S,aboveMaxMessage:C,onBlur:w,onKeyDown:T,ref:E,...D})=>{let{t:O}=ne(),k=ae({...D,disabled:p,readOnly:h}),A=!!k.disabled,j=A||!!k.readOnly,N=u??ee(l),[I,L]=te({value:e,defaultValue:t??null,onChange:n,name:`NumberInput`}),[R,z]=(0,P.useState)(()=>i(I,N)),[B,V]=(0,P.useState)({current:I,precision:N});if(B.current!==I||B.precision!==N){V({current:I,precision:N});let e=o(R);(e===null||e!==I)&&z(i(I,N))}let H=e=>{let t=Number(e.toFixed(N));L(t),z(t.toFixed(N))},U=e=>{if(j)return;let t=e.trim();if(t===``||t===`-`){_?(L(null),z(``)):H(r(s??0,s,c));return}let n=o(t);if(n===null){z(i(I,N));return}H(r(n,s,c))},W=e=>{if(j)return;let t=o(R)??I??0;H(r(t+e,s,c))},G=e=>{T?.(e),!(j||e.defaultPrevented)&&(e.key===`ArrowUp`?(e.preventDefault(),W(l)):e.key===`ArrowDown`?(e.preventDefault(),W(-l)):e.key===`PageUp`||e.key===`PageDown`?(e.preventDefault(),W((e.key===`PageUp`?10:-10)*l)):e.key===`Home`&&s!==void 0?(e.preventDefault(),H(s)):e.key===`End`&&c!==void 0?(e.preventDefault(),H(c)):e.key===`Enter`&&e.currentTarget.blur())},K=e=>{U(e.currentTarget.value),w?.(e)},q=R.trim(),J=o(q),Y;q&&q!==`-`&&q!==`.`&&(J===null?Y=x??O(`numberInput.notANumber`):s!==void 0&&J<s?Y=S??O(`numberInput.belowMin`,{min:s}):c!==void 0&&J>c&&(Y=C??O(`numberInput.aboveMax`,{max:c})));let X=Y!==void 0,Z=f||X||oe(k[`aria-invalid`]);return(0,F.jsxs)(`div`,{className:a(M.root,M[d],Z&&M.invalid,X&&M.shake,A&&M.disabled,v),title:Y,...m(`number-input`,`root`,{disabled:A,invalid:Z,readonly:!!k.readOnly,required:!!(k.required||k[`aria-required`]),size:d}),children:[(0,F.jsx)(`input`,{ref:E,inputMode:`decimal`,type:`text`,className:M.field,...k,role:`spinbutton`,"aria-valuemin":s,"aria-valuemax":c,"aria-valuenow":I??void 0,"aria-invalid":Z||k[`aria-invalid`]||void 0,value:R,onChange:e=>z(e.currentTarget.value),onBlur:K,onKeyDown:G,...m(`number-input`,`input`)}),g&&(0,F.jsxs)(`div`,{className:M.stepper,"aria-hidden":`true`,...m(`number-input`,`stepper`),children:[(0,F.jsx)(`button`,{type:`button`,className:a(M.step,M.stepUp),tabIndex:-1,disabled:j||c!==void 0&&(I??0)>=c,onClick:()=>W(l),"aria-label":y??O(`numberInput.increment`),...m(`number-input`,`increment`),children:(0,F.jsx)(ie,{size:12,strokeWidth:2.5,"aria-hidden":!0})}),(0,F.jsx)(`button`,{type:`button`,className:a(M.step,M.stepDown),tabIndex:-1,disabled:j||s!==void 0&&(I??0)<=s,onClick:()=>W(-l),"aria-label":b??O(`numberInput.decrement`),...m(`number-input`,`decrement`),children:(0,F.jsx)(re,{size:12,strokeWidth:2.5,"aria-hidden":!0})})]})]})}})))()}function R(){let[e,t]=(0,z.useState)(1);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(I,{"aria-label":`Quantity`,min:0,max:10,value:e,onChange:t}),(0,B.jsxs)(`p`,{children:[`Value: `,e===null?`empty`:e]})]})}var z,B;function V(){return(V=e((()=>{L(),z=t(),B=n()})))()}function H(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(y,{label:`HTTP status`,helperText:`Between 100 and 599.`,required:!0,children:(0,U.jsx)(I,{defaultValue:200,min:100,max:599})}),(0,U.jsx)(y,{label:`Retries`,readOnly:!0,children:(0,U.jsx)(I,{defaultValue:3})})]})}var U;function W(){return(W=e((()=>{v(),L(),U=n()})))()}function G(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(I,{"aria-label":`Rate`,defaultValue:.5,min:0,max:1,step:.01,showStepper:!0}),(0,K.jsx)(I,{"aria-label":`Price`,defaultValue:9.9,precision:2,size:`large`}),(0,K.jsx)(I,{"aria-label":`Latency`,defaultValue:100,step:50,allowEmpty:!1,size:`small`})]})}var K;function q(){return(q=e((()=>{L(),K=n()})))()}var J;function Y(){return(Y=e((()=>{J=`import { NumberInput } from "minerva-design";
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
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { FormField, NumberInput } from "minerva-design";

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
`})))()}var Q;function $(){return($=e((()=>{Q=`import { NumberInput } from "minerva-design";

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
`})))()}var se,ce,le;function ue(){return(ue=e((()=>{V(),W(),q(),Y(),Z(),$(),t(),l(),c(),se=n(),ce=u(Object.assign({"./demos/basic.tsx":R,"./demos/form-control.tsx":H,"./demos/stepper-precision.tsx":G}),Object.assign({"./demos/basic.tsx":J,"./demos/form-control.tsx":X,"./demos/stepper-precision.tsx":Q})),le=()=>(0,se.jsx)(d,{id:`number-input`,demos:ce})})))()}ue();export{le as default};