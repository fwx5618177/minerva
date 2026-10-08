import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i,i as a,n as o,r as s,t as c}from"./minerva-web-components-e9i9Tzii.js";import{Q as l,Z as ee}from"./io5-Db3ldn2O.js";import{n as u,t as d}from"./useI18n-Brv-VDVY.js";import{I as te,L as ne,T as f,x as p}from"./icons-C9qyBhWC.js";import{i as m,n as h}from"./context-CofDH3-d.js";import{n as g,t as re}from"./IconButton-B4tqbPo6.js";import{n as _,r as v}from"./FormControl-BajGuK_0.js";import{n as ie,t as y}from"./Textarea-BOqkwuLU.js";import{c as b,n as x,s as S,t as C}from"./DocPage-BeqNKFhE.js";var w,T,E,D,O,k;function A(){return(A=e((()=>{w=`_root_dxs3n_1`,T=`_toolbar_dxs3n_9`,E=`_textarea_dxs3n_14`,D=`_status_dxs3n_23`,O=`_statusInvalid_dxs3n_42`,k={root:w,toolbar:T,textarea:E,status:D,statusInvalid:O}})))()}function j(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function ae(e,t){let n=Math.min(10,Math.max(0,Math.trunc(t)||0));if(n>0)return c(e,s(e,void 0,{tabSize:n,insertSpaces:!0,eol:`
`}));let r=o(e,!0),i=[];for(;r.getPosition()<e.length;){r.scan();let t=r.getTokenOffset();i.push(e.slice(t,t+r.getTokenLength()))}return i.join(``)}var M,N,P;function F(){return(F=e((()=>{i(),u(),f(),l(),h(),g(),y(),A(),M=t(),N=n(),a(),P=({value:e,defaultValue:t,onChange:n,rows:i=8,hideToolbar:a=!1,indent:o=2,className:s,formatLabel:c,validLabel:l,invalidLabel:u,disabled:f,readOnly:h,required:g,invalid:_=!1,onFocus:v,onBlur:y,"aria-describedby":b,"aria-invalid":x,spellCheck:S=!1,...C})=>{let{t:w}=d(),T=m(),E=!!(f||T?.disabled),D=!!(h||T?.readOnly),O=!!(g||T?.required),A=`json-status-${(0,M.useId)()}`,[P,F]=ee({value:e,defaultValue:t??``,onChange:n,name:`JsonField`}),[I,L]=(0,M.useState)(!1),R=I?{status:`empty`}:j(P),z=R.status===`invalid`;return(0,N.jsxs)(`div`,{className:r(k.root,s),children:[!a&&(0,N.jsx)(`div`,{className:k.toolbar,children:(0,N.jsx)(re,{type:`button`,label:c??w(`jsonField.format`),size:`small`,shape:`square`,icon:(0,N.jsx)(p,{size:18,"aria-hidden":!0}),disabled:E||D||!P.trim(),onClick:()=>{E||D||j(P).status!==`valid`||F(ae(P,o))}})}),(0,N.jsx)(ie,{...C,rows:i,value:P,disabled:E,readOnly:D,required:O,spellCheck:S,className:k.textarea,"aria-invalid":z||_?!0:x!==`false`&&x,"aria-describedby":[b,z?A:void 0].filter(Boolean).join(` `)||void 0,onChange:e=>{!E&&!D&&F(e.target.value)},onFocus:e=>{L(!0),v?.(e)},onBlur:e=>{L(!1),y?.(e)}}),(0,N.jsxs)(`div`,{id:A,role:`status`,"aria-live":`polite`,className:r(k.status,z&&k.statusInvalid),children:[R.status===`valid`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(ne,{size:16,"aria-hidden":!0}),(0,N.jsx)(`span`,{children:l??w(`jsonField.valid`)})]}),R.status===`invalid`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(te,{size:16,"aria-hidden":!0}),(0,N.jsxs)(`span`,{children:[u??w(`jsonField.invalid`),`: `,R.error]})]})]})]})}})))()}function I(){let[e,t]=(0,L.useState)(`{"title":"Draft","tags":["a","b"]}`);return(0,R.jsx)(P,{"aria-label":`Response body`,value:e,onChange:t,rows:6})}var L,R;function z(){return(z=e((()=>{F(),L=t(),R=n()})))()}function oe(){return(0,B.jsx)(_,{label:`Dictionary`,helperText:`Public translation dictionary.`,required:!0,children:(0,B.jsx)(P,{name:`dictionary`,defaultValue:`{"hello":"world"}`,rows:5})})}var B;function V(){return(V=e((()=>{v(),F(),B=n()})))()}function se(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(P,{"aria-label":`Four spaces`,defaultValue:`{"a":[1,2]}`,indent:4,rows:4}),(0,H.jsx)(P,{"aria-label":`Compact`,defaultValue:`{
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
`})))()}var X,Z,Q;function $(){return($=e((()=>{z(),V(),U(),G(),q(),Y(),t(),x(),b(),X=n(),Z=S(Object.assign({"./demos/basic.tsx":I,"./demos/form-control.tsx":oe,"./demos/indent.tsx":se}),Object.assign({"./demos/basic.tsx":W,"./demos/form-control.tsx":K,"./demos/indent.tsx":J})),Q=()=>(0,X.jsx)(C,{id:`json-field`,demos:Z})})))()}$();export{Q as default};