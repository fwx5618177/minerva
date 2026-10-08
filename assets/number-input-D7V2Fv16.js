import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Fn as r,X as i,Z as a,Zt as ee,cn as o,jt as s}from"./minerva-web-components-e9i9Tzii.js";import{Q as c,Z as te}from"./io5-DyQ46fG2.js";import{n as l,t as ne}from"./useI18n-Brv-VDVY.js";import{T as u,j as re,k as ie}from"./icons-C9qyBhWC.js";import{n as d,t as ae}from"./context-CofDH3-d.js";import{n as f,t as oe}from"./forms-field-CWhPMCZt.js";import{n as p,r as m}from"./FormControl-BajGuK_0.js";import{c as h,n as g,s as _,t as v}from"./DocPage-DEXoN4OO.js";var y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{y=`_root_1pc61_1`,b=`_disabled_1pc61_13`,x=`_invalid_1pc61_13`,S=`_field_1pc61_28`,C=`_shake_1pc61_32`,w=`_small_1pc61_82`,T=`_medium_1pc61_87`,E=`_large_1pc61_92`,D=`_stepper_1pc61_97`,O=`_step_1pc61_97`,k=`_stepUp_1pc61_130`,A=`_stepDown_1pc61_135`,j={root:y,disabled:b,invalid:x,field:S,shake:C,"number-input-shake":`_number-input-shake_1pc61_1`,small:w,medium:T,large:E,stepper:D,step:O,stepUp:k,stepDown:A}})))()}var N,P,F;function I(){return(I=e((()=>{o(),l(),u(),c(),d(),f(),M(),N=t(),P=n(),F=({value:e,defaultValue:t,onChange:n,min:o,max:c,step:l=1,precision:u,size:d=`medium`,invalid:f=!1,disabled:p,readOnly:m,showStepper:h=!1,allowEmpty:g=!0,className:_,incrementLabel:v,decrementLabel:y,notANumberMessage:b,belowMinMessage:x,aboveMaxMessage:S,onBlur:C,onKeyDown:w,ref:T,...E})=>{let{t:D}=ne(),O=ae({...E,disabled:p,readOnly:m}),k=!!O.disabled,A=k||!!O.readOnly,M=u??ee(l),[F,I]=te({value:e,defaultValue:t??null,onChange:n,name:`NumberInput`}),[L,R]=(0,N.useState)(()=>s(F,M)),[z,B]=(0,N.useState)({current:F,precision:M});if(z.current!==F||z.precision!==M){B({current:F,precision:M});let e=a(L);(e===null||e!==F)&&R(s(F,M))}let V=e=>{let t=Number(e.toFixed(M));I(t),R(t.toFixed(M))},H=e=>{if(A)return;let t=e.trim();if(t===``||t===`-`){g?(I(null),R(``)):V(r(o??0,o,c));return}let n=a(t);if(n===null){R(s(F,M));return}V(r(n,o,c))},U=e=>{if(A)return;let t=a(L)??F??0;V(r(t+e,o,c))},W=e=>{w?.(e),!(A||e.defaultPrevented)&&(e.key===`ArrowUp`?(e.preventDefault(),U(l)):e.key===`ArrowDown`?(e.preventDefault(),U(-l)):e.key===`PageUp`||e.key===`PageDown`?(e.preventDefault(),U((e.key===`PageUp`?10:-10)*l)):e.key===`Home`&&o!==void 0?(e.preventDefault(),V(o)):e.key===`End`&&c!==void 0?(e.preventDefault(),V(c)):e.key===`Enter`&&e.currentTarget.blur())},G=e=>{H(e.currentTarget.value),C?.(e)},K=L.trim(),q=a(K),J;K&&K!==`-`&&K!==`.`&&(q===null?J=b??D(`numberInput.notANumber`):o!==void 0&&q<o?J=x??D(`numberInput.belowMin`,{min:o}):c!==void 0&&q>c&&(J=S??D(`numberInput.aboveMax`,{max:c})));let Y=J!==void 0,X=f||Y||oe(O[`aria-invalid`]);return(0,P.jsxs)(`div`,{className:i(j.root,j[d],X&&j.invalid,Y&&j.shake,k&&j.disabled,_),title:J,children:[(0,P.jsx)(`input`,{ref:T,inputMode:`decimal`,type:`text`,className:j.field,...O,role:`spinbutton`,"aria-valuemin":o,"aria-valuemax":c,"aria-valuenow":F??void 0,"aria-invalid":X||O[`aria-invalid`]||void 0,value:L,onChange:e=>R(e.currentTarget.value),onBlur:G,onKeyDown:W}),h&&(0,P.jsxs)(`div`,{className:j.stepper,"aria-hidden":`true`,children:[(0,P.jsx)(`button`,{type:`button`,className:i(j.step,j.stepUp),tabIndex:-1,disabled:A||c!==void 0&&(F??0)>=c,onClick:()=>U(l),"aria-label":v??D(`numberInput.increment`),children:(0,P.jsx)(ie,{size:12,strokeWidth:2.5,"aria-hidden":!0})}),(0,P.jsx)(`button`,{type:`button`,className:i(j.step,j.stepDown),tabIndex:-1,disabled:A||o!==void 0&&(F??0)<=o,onClick:()=>U(-l),"aria-label":y??D(`numberInput.decrement`),children:(0,P.jsx)(re,{size:12,strokeWidth:2.5,"aria-hidden":!0})})]})]})}})))()}function L(){let[e,t]=(0,R.useState)(1);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(F,{"aria-label":`Quantity`,min:0,max:10,value:e,onChange:t}),(0,z.jsxs)(`p`,{children:[`Value: `,e===null?`empty`:e]})]})}var R,z;function B(){return(B=e((()=>{I(),R=t(),z=n()})))()}function V(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(p,{label:`HTTP status`,helperText:`Between 100 and 599.`,required:!0,children:(0,H.jsx)(F,{defaultValue:200,min:100,max:599})}),(0,H.jsx)(p,{label:`Retries`,readOnly:!0,children:(0,H.jsx)(F,{defaultValue:3})})]})}var H;function U(){return(U=e((()=>{m(),I(),H=n()})))()}function W(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(F,{"aria-label":`Rate`,defaultValue:.5,min:0,max:1,step:.01,showStepper:!0}),(0,G.jsx)(F,{"aria-label":`Price`,defaultValue:9.9,precision:2,size:`large`}),(0,G.jsx)(F,{"aria-label":`Latency`,defaultValue:100,step:50,allowEmpty:!1,size:`small`})]})}var G;function K(){return(K=e((()=>{I(),G=n()})))()}var q;function J(){return(J=e((()=>{q=`import { NumberInput } from "@minerva/lib-core";
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
`})))()}var $,se,ce;function le(){return(le=e((()=>{B(),U(),K(),J(),X(),Q(),t(),g(),h(),$=n(),se=_(Object.assign({"./demos/basic.tsx":L,"./demos/form-control.tsx":V,"./demos/stepper-precision.tsx":W}),Object.assign({"./demos/basic.tsx":q,"./demos/form-control.tsx":Y,"./demos/stepper-precision.tsx":Z})),ce=()=>(0,$.jsx)(v,{id:`number-input`,demos:se})})))()}le();export{ce as default};