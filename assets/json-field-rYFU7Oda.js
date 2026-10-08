import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i,i as a,n as o,r as s,t as c}from"./minerva-web-components-e9i9Tzii.js";import{Q as l,Z as ee}from"./io5-BOy5_xXs.js";import{n as u,t as te}from"./useI18n-Brv-VDVY.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{I as f,L as ne,T as p,x as re}from"./icons-C9qyBhWC.js";import{i as ie,n as m}from"./context-CofDH3-d.js";import{n as h,t as ae}from"./IconButton-EM8CzPwt.js";import{a as g,r as _}from"./FormControl-s2LFIZKG.js";import{n as oe,t as v}from"./Textarea-B1tNFzIA.js";import{m as y,n as b,p as x,t as S}from"./DocPage-44Ak-YGP.js";var C,w,T,E,D,O;function k(){return(k=e((()=>{C=`_root_dxs3n_1`,w=`_toolbar_dxs3n_9`,T=`_textarea_dxs3n_14`,E=`_status_dxs3n_23`,D=`_statusInvalid_dxs3n_42`,O={root:C,toolbar:w,textarea:T,status:E,statusInvalid:D}})))()}function A(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function se(e,t){let n=Math.min(10,Math.max(0,Math.trunc(t)||0));if(n>0)return c(e,s(e,void 0,{tabSize:n,insertSpaces:!0,eol:`
`}));let r=o(e,!0),i=[];for(;r.getPosition()<e.length;){r.scan();let t=r.getTokenOffset();i.push(e.slice(t,t+r.getTokenLength()))}return i.join(``)}var j,M,N;function P(){return(P=e((()=>{i(),u(),p(),l(),m(),h(),v(),k(),j=t(),M=n(),a(),N=({value:e,defaultValue:t,onChange:n,rows:i=8,hideToolbar:a=!1,indent:o=2,className:s,formatLabel:c,validLabel:l,invalidLabel:u,disabled:p,readOnly:m,required:h,invalid:g=!1,onFocus:_,onBlur:v,"aria-describedby":y,"aria-invalid":b,spellCheck:x=!1,...S})=>{let{t:C}=te(),w=ie(),T=!!(p||w?.disabled),E=!!(m||w?.readOnly),D=!!(h||w?.required),k=`json-status-${(0,j.useId)()}`,[N,P]=ee({value:e,defaultValue:t??``,onChange:n,name:`JsonField`}),[F,I]=(0,j.useState)(!1),L=F?{status:`empty`}:A(N),R=L.status===`invalid`,z=()=>{T||E||A(N).status!==`valid`||P(se(N,o))};return(0,M.jsxs)(`div`,{className:r(O.root,s),...d(`json-field`,`root`,{disabled:T,invalid:R||g||!!w?.invalid,readonly:E,required:D}),children:[!a&&(0,M.jsx)(`div`,{className:O.toolbar,...d(`json-field`,`toolbar`),children:(0,M.jsx)(ae,{type:`button`,label:c??C(`jsonField.format`),size:`small`,shape:`square`,icon:(0,M.jsx)(re,{size:18,"aria-hidden":!0}),disabled:T||E||!N.trim(),onClick:z})}),(0,M.jsx)(oe,{...S,rows:i,value:N,disabled:T,readOnly:E,required:D,spellCheck:x,className:O.textarea,"aria-invalid":R||g?!0:b!==`false`&&b,"aria-describedby":[y,R?k:void 0].filter(Boolean).join(` `)||void 0,onChange:e=>{!T&&!E&&P(e.target.value)},onFocus:e=>{I(!0),_?.(e)},onBlur:e=>{I(!1),v?.(e)}}),(0,M.jsxs)(`div`,{id:k,role:`status`,"aria-live":`polite`,className:r(O.status,R&&O.statusInvalid),...d(`json-field`,`status`),children:[L.status===`valid`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(ne,{size:16,"aria-hidden":!0}),(0,M.jsx)(`span`,{children:l??C(`jsonField.valid`)})]}),L.status===`invalid`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(f,{size:16,"aria-hidden":!0}),(0,M.jsxs)(`span`,{children:[u??C(`jsonField.invalid`),`: `,L.error]})]})]})]})}})))()}function F(){let[e,t]=(0,I.useState)(`{"title":"Draft","tags":["a","b"]}`);return(0,L.jsx)(N,{"aria-label":`Response body`,value:e,onChange:t,rows:6})}var I,L;function R(){return(R=e((()=>{P(),I=t(),L=n()})))()}function z(){return(0,B.jsx)(_,{label:`Dictionary`,helperText:`Public translation dictionary.`,required:!0,children:(0,B.jsx)(N,{name:`dictionary`,defaultValue:`{"hello":"world"}`,rows:5})})}var B;function V(){return(V=e((()=>{g(),P(),B=n()})))()}function ce(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(N,{"aria-label":`Four spaces`,defaultValue:`{"a":[1,2]}`,indent:4,rows:4}),(0,H.jsx)(N,{"aria-label":`Compact`,defaultValue:`{
  "a": [1, 2]
}`,indent:0,rows:4}),(0,H.jsx)(N,{"aria-label":`Without toolbar`,defaultValue:`{`,hideToolbar:!0,rows:2})]})}var H;function U(){return(U=e((()=>{P(),H=n()})))()}var W;function G(){return(G=e((()=>{W=`import { JsonField } from "@minerva/lib-core";
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
`})))()}var X,Z,Q;function $(){return($=e((()=>{R(),V(),U(),G(),q(),Y(),t(),b(),y(),X=n(),Z=x(Object.assign({"./demos/basic.tsx":F,"./demos/form-control.tsx":z,"./demos/indent.tsx":ce}),Object.assign({"./demos/basic.tsx":W,"./demos/form-control.tsx":K,"./demos/indent.tsx":J})),Q=()=>(0,X.jsx)(S,{id:`json-field`,demos:Z})})))()}$();export{Q as default};