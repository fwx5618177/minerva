import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{i as r,n as i,r as a,t as o}from"./minerva-web-components-U-_2I7Ao.js";import{C as s,O as c,c as l,k as u,n as d,s as f,t as p,w as m}from"./DocPage-BvqFnACE.js";import{n as h,t as ee}from"./useI18n-s5sAv-jy.js";import{I as te,L as ne,T as g,x as re}from"./icons-BaZJL-85.js";import{i as ie,n as _}from"./context-C6l3dqFj.js";import{n as v,t as y}from"./IconButton-CIvDcJLq.js";import{n as b,r as x}from"./FormControl-BiuBHhtX.js";import{n as ae,t as S}from"./Textarea-CLA12eV6.js";var C,w,T,E,D,O;function k(){return(k=e((()=>{C=`_root_dxs3n_1`,w=`_toolbar_dxs3n_9`,T=`_textarea_dxs3n_14`,E=`_status_dxs3n_23`,D=`_statusInvalid_dxs3n_42`,O={root:C,toolbar:w,textarea:T,status:E,statusInvalid:D}})))()}function A(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function j(e,t){let n=Math.min(10,Math.max(0,Math.trunc(t)||0));if(n>0)return o(e,a(e,void 0,{tabSize:n,insertSpaces:!0,eol:`
`}));let r=i(e,!0),s=[];for(;r.getPosition()<e.length;){r.scan();let t=r.getTokenOffset();s.push(e.slice(t,t+r.getTokenLength()))}return s.join(``)}var M,N,P;function F(){return(F=e((()=>{c(),h(),g(),m(),_(),v(),S(),k(),M=t(),N=n(),r(),P=({value:e,defaultValue:t,onChange:n,rows:r=8,hideToolbar:i=!1,indent:a=2,className:o,formatLabel:c,validLabel:l,invalidLabel:d,disabled:f,readOnly:p,required:m,invalid:h=!1,onFocus:g,onBlur:_,"aria-describedby":v,"aria-invalid":b,spellCheck:x=!1,...S})=>{let{t:C}=ee(),w=ie(),T=!!(f||w?.disabled),E=!!(p||w?.readOnly),D=!!(m||w?.required),k=`json-status-${(0,M.useId)()}`,[P,F]=s({value:e,defaultValue:t??``,onChange:n,name:`JsonField`}),[I,L]=(0,M.useState)(!1),R=I?{status:`empty`}:A(P),z=R.status===`invalid`;return(0,N.jsxs)(`div`,{className:u(O.root,o),children:[!i&&(0,N.jsx)(`div`,{className:O.toolbar,children:(0,N.jsx)(y,{type:`button`,label:c??C(`jsonField.format`),size:`small`,shape:`square`,icon:(0,N.jsx)(re,{size:18,"aria-hidden":!0}),disabled:T||E||!P.trim(),onClick:()=>{T||E||A(P).status!==`valid`||F(j(P,a))}})}),(0,N.jsx)(ae,{...S,rows:r,value:P,disabled:T,readOnly:E,required:D,spellCheck:x,className:O.textarea,"aria-invalid":z||h?!0:b!==`false`&&b,"aria-describedby":[v,z?k:void 0].filter(Boolean).join(` `)||void 0,onChange:e=>{!T&&!E&&F(e.target.value)},onFocus:e=>{L(!0),g?.(e)},onBlur:e=>{L(!1),_?.(e)}}),(0,N.jsxs)(`div`,{id:k,role:`status`,"aria-live":`polite`,className:u(O.status,z&&O.statusInvalid),children:[R.status===`valid`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(ne,{size:16,"aria-hidden":!0}),(0,N.jsx)(`span`,{children:l??C(`jsonField.valid`)})]}),R.status===`invalid`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(te,{size:16,"aria-hidden":!0}),(0,N.jsxs)(`span`,{children:[d??C(`jsonField.invalid`),`: `,R.error]})]})]})]})}})))()}function I(){let[e,t]=(0,L.useState)(`{"title":"Draft","tags":["a","b"]}`);return(0,R.jsx)(P,{"aria-label":`Response body`,value:e,onChange:t,rows:6})}var L,R;function z(){return(z=e((()=>{F(),L=t(),R=n()})))()}function oe(){return(0,B.jsx)(b,{label:`Dictionary`,helperText:`Public translation dictionary.`,required:!0,children:(0,B.jsx)(P,{name:`dictionary`,defaultValue:`{"hello":"world"}`,rows:5})})}var B;function V(){return(V=e((()=>{x(),F(),B=n()})))()}function se(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(P,{"aria-label":`Four spaces`,defaultValue:`{"a":[1,2]}`,indent:4,rows:4}),(0,H.jsx)(P,{"aria-label":`Compact`,defaultValue:`{
  "a": [1, 2]
}`,indent:0,rows:4}),(0,H.jsx)(P,{"aria-label":`Without toolbar`,defaultValue:`{`,hideToolbar:!0,rows:2})]})}var H;function U(){return(U=e((()=>{F(),H=n()})))()}var W;function G(){return(G=e((()=>{W=`import { JsonField } from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [text, setText] = useState('{"title":"Draft","tags":["a","b"]}');
  return (
    <JsonField
      aria-label="Response body"
      value={text}
      onChange={setText}
      rows={6}
    />
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { FormField, JsonField } from "@minerva/lib-core";

export default function FormControlDemo() {
  return (
    <FormField
      label="Dictionary"
      helperText="Public translation dictionary."
      required
    >
      <JsonField name="dictionary" defaultValue='{"hello":"world"}' rows={5} />
    </FormField>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { JsonField } from "@minerva/lib-core";

export default function IndentDemo() {
  return (
    <>
      <JsonField
        aria-label="Four spaces"
        defaultValue='{"a":[1,2]}'
        indent={4}
        rows={4}
      />
      <JsonField
        aria-label="Compact"
        defaultValue={'{\\n  "a": [1, 2]\\n}'}
        indent={0}
        rows={4}
      />
      <JsonField
        aria-label="Without toolbar"
        defaultValue="{"
        hideToolbar
        rows={2}
      />
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{z(),V(),U(),G(),q(),Y(),t(),d(),l(),X=n(),Z=f(Object.assign({"./demos/basic.tsx":I,"./demos/form-control.tsx":oe,"./demos/indent.tsx":se}),Object.assign({"./demos/basic.tsx":W,"./demos/form-control.tsx":K,"./demos/indent.tsx":J})),Q=()=>(0,X.jsx)(p,{id:`json-field`,demos:Z})})))()}$();export{Q as default};