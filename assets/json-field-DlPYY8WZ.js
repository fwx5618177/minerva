import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{i as r,n as i,r as a,t as o}from"./minerva-web-components-BT-6l4L2.js";import{o as s,vt as c}from"./minerva-web-components-ByJsjP0z.js";import{m as l,n as u,p as d,t as f}from"./DocPage-CVA4UCUb.js";import{Q as p,Z as ee}from"./io5-BO4aBax7.js";import{n as m,t as te}from"./useI18n-B2tkKcqQ.js";import{t as h}from"./stylingHooks-GjssfG7q.js";import{I as ne,L as re,T as g,x as ie}from"./icons-C9qyBhWC.js";import{i as ae,n as _}from"./context-CofDH3-d.js";import{n as v,t as oe}from"./IconButton-Bs8gNUKQ.js";import{a as y,r as b}from"./FormControl-BvD1TVJl.js";import{n as x,t as S}from"./Textarea-Cm6BVL6i.js";var C,w,T,E,D,O;function k(){return(k=e((()=>{C=`_root_dxs3n_1`,w=`_toolbar_dxs3n_9`,T=`_textarea_dxs3n_14`,E=`_status_dxs3n_23`,D=`_statusInvalid_dxs3n_42`,O={root:C,toolbar:w,textarea:T,status:E,statusInvalid:D}})))()}function A(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function se(e,t){let n=Math.min(10,Math.max(0,Math.trunc(t)||0));if(n>0)return o(e,a(e,void 0,{tabSize:n,insertSpaces:!0,eol:`
`}));let r=i(e,!0),s=[];for(;r.getPosition()<e.length;){r.scan();let t=r.getTokenOffset();s.push(e.slice(t,t+r.getTokenLength()))}return s.join(``)}var j,M,N;function P(){return(P=e((()=>{c(),m(),g(),p(),_(),v(),S(),k(),j=t(),M=n(),r(),N=({value:e,defaultValue:t,onChange:n,rows:r=8,hideToolbar:i=!1,indent:a=2,className:o,formatLabel:c,validLabel:l,invalidLabel:u,disabled:d,readOnly:f,required:p,invalid:m=!1,onFocus:g,onBlur:_,"aria-describedby":v,"aria-invalid":y,spellCheck:b=!1,...S})=>{let{t:C}=te(),w=ae(),T=!!(d||w?.disabled),E=!!(f||w?.readOnly),D=!!(p||w?.required),k=`json-status-${(0,j.useId)()}`,[N,P]=ee({value:e,defaultValue:t??``,onChange:n,name:`JsonField`}),[F,I]=(0,j.useState)(!1),L=F?{status:`empty`}:A(N),R=L.status===`invalid`,z=()=>{T||E||A(N).status!==`valid`||P(se(N,a))};return(0,M.jsxs)(`div`,{className:s(O.root,o),...h(`json-field`,`root`,{disabled:T,invalid:R||m||!!w?.invalid,readonly:E,required:D}),children:[!i&&(0,M.jsx)(`div`,{className:O.toolbar,...h(`json-field`,`toolbar`),children:(0,M.jsx)(oe,{type:`button`,label:c??C(`jsonField.format`),size:`small`,shape:`square`,icon:(0,M.jsx)(ie,{size:18,"aria-hidden":!0}),disabled:T||E||!N.trim(),onClick:z})}),(0,M.jsx)(x,{...S,rows:r,value:N,disabled:T,readOnly:E,required:D,spellCheck:b,className:O.textarea,"aria-invalid":R||m?!0:y!==`false`&&y,"aria-describedby":[v,R?k:void 0].filter(Boolean).join(` `)||void 0,onChange:e=>{!T&&!E&&P(e.target.value)},onFocus:e=>{I(!0),g?.(e)},onBlur:e=>{I(!1),_?.(e)}}),(0,M.jsxs)(`div`,{id:k,role:`status`,"aria-live":`polite`,className:s(O.status,R&&O.statusInvalid),...h(`json-field`,`status`),children:[L.status===`valid`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(re,{size:16,"aria-hidden":!0}),(0,M.jsx)(`span`,{children:l??C(`jsonField.valid`)})]}),L.status===`invalid`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(ne,{size:16,"aria-hidden":!0}),(0,M.jsxs)(`span`,{children:[u??C(`jsonField.invalid`),`: `,L.error]})]})]})]})}})))()}function F(){let[e,t]=(0,I.useState)(`{"title":"Draft","tags":["a","b"]}`);return(0,L.jsx)(N,{"aria-label":`Response body`,value:e,onChange:t,rows:6})}var I,L;function R(){return(R=e((()=>{P(),I=t(),L=n()})))()}function z(){return(0,B.jsx)(b,{label:`Dictionary`,helperText:`Public translation dictionary.`,required:!0,children:(0,B.jsx)(N,{name:`dictionary`,defaultValue:`{"hello":"world"}`,rows:5})})}var B;function V(){return(V=e((()=>{y(),P(),B=n()})))()}function ce(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(N,{"aria-label":`Four spaces`,defaultValue:`{"a":[1,2]}`,indent:4,rows:4}),(0,H.jsx)(N,{"aria-label":`Compact`,defaultValue:`{
  "a": [1, 2]
}`,indent:0,rows:4}),(0,H.jsx)(N,{"aria-label":`Without toolbar`,defaultValue:`{`,hideToolbar:!0,rows:2})]})}var H;function U(){return(U=e((()=>{P(),H=n()})))()}var W;function G(){return(G=e((()=>{W=`import { JsonField } from "minerva-design";
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
`})))()}var K;function q(){return(q=e((()=>{K=`import { FormField, JsonField } from "minerva-design";

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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { JsonField } from "minerva-design";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{R(),V(),U(),G(),q(),Y(),t(),u(),l(),X=n(),Z=d(Object.assign({"./demos/basic.tsx":F,"./demos/form-control.tsx":z,"./demos/indent.tsx":ce}),Object.assign({"./demos/basic.tsx":W,"./demos/form-control.tsx":K,"./demos/indent.tsx":J})),Q=()=>(0,X.jsx)(f,{id:`json-field`,demos:Z})})))()}$();export{Q as default};