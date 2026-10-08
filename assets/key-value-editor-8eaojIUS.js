import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{Q as a,Z as o}from"./io5-BOy5_xXs.js";import{n as s,t as c}from"./useI18n-Brv-VDVY.js";import{t as l}from"./stylingHooks-GjssfG7q.js";import{n as u,t as d}from"./Button-BfJfx3BZ.js";import{M as f,T as p,w as m}from"./icons-C9qyBhWC.js";import{n as h,t as g}from"./IconButton-EM8CzPwt.js";import{a as _,r as v}from"./FormControl-s2LFIZKG.js";import{n as y,t as b}from"./Textarea-B1tNFzIA.js";import{m as x,n as S,p as C,t as w}from"./DocPage-44Ak-YGP.js";var T,E,D,O,k,A,j;function M(){return(M=e((()=>{T=`_root_q4wxg_1`,E=`_row_q4wxg_11`,D=`_key_q4wxg_23`,O=`_remove_q4wxg_27`,k=`_add_q4wxg_33`,A=`_srOnly_q4wxg_48`,j={root:T,row:E,key:D,remove:O,add:k,srOnly:A}})))()}var N,P,F,I;function L(){return(L=e((()=>{i(),s(),d(),p(),a(),h(),_(),b(),M(),N=t(),P=n(),F=[],I=({entries:e,defaultEntries:t,onChange:n,disabled:i=!1,keyLabel:a,valueLabel:s,addLabel:d,removeLabel:p,errors:h,className:_,ref:b,...x})=>{let{t:S}=c(),C=(0,N.useId)(),w=(0,N.useRef)(0),[T,E]=o({value:e,defaultValue:t??F,onChange:n,name:`KeyValueEditor`,prop:`entries`}),D=a??S(`keyValueEditor.key`),O=s??S(`keyValueEditor.value`),k=p??S(`keyValueEditor.remove`),A=(0,N.useRef)(new Map),M=(0,N.useRef)(new Map),I=(0,N.useRef)(null),L=(0,N.useRef)(null);(0,N.useEffect)(()=>{let e=L.current;if(!e)return;L.current=null;let t=e=>T.some(t=>t.id===e);e.kind===`add`?t(e.id)&&A.current.get(e.id)?.focus():t(e.id)||(e.nextId&&M.current.get(e.nextId)||I.current)?.focus()},[T]);let R=()=>{if(i)return;let e;do e=`key-value-${C}-${w.current++}`;while(T.some(t=>t.id===e));L.current={kind:`add`,id:e},E([...T,{id:e,key:``,value:``}])},z=(e,t,n)=>{i||E(T.map(r=>r.id===e?{...r,[t]:n}:r))},B=e=>{if(i)return;let t=T.findIndex(t=>t.id===e),n=T[t+1]??T[t-1];L.current={kind:`remove`,id:e,nextId:n?.id},E(T.filter(t=>t.id!==e))},V=(e,t)=>(0,P.jsxs)(P.Fragment,{children:[e,(0,P.jsxs)(`span`,{className:j.srOnly,children:[` `,t+1]})]});return(0,P.jsxs)(`div`,{ref:b,...x,className:r(j.root,_),...l(`key-value-editor`,`root`,{disabled:i}),children:[T.map((e,t)=>{let n=h?.[e.id];return(0,P.jsxs)(`div`,{className:j.row,...l(`key-value-editor`,`row`),children:[(0,P.jsx)(v,{label:V(D,t),disabled:i,invalid:!!n?.key,errorMessage:n?.key,children:(0,P.jsx)(y,{ref:t=>{t?A.current.set(e.id,t):A.current.delete(e.id)},className:j.key,size:`small`,rows:1,value:e.key,onChange:t=>z(e.id,`key`,t.target.value)})}),(0,P.jsx)(v,{label:V(O,t),disabled:i,invalid:!!n?.value,errorMessage:n?.value,children:(0,P.jsx)(y,{size:`small`,rows:2,value:e.value,onChange:t=>z(e.id,`value`,t.target.value)})}),(0,P.jsx)(g,{ref:t=>{t?M.current.set(e.id,t):M.current.delete(e.id)},className:j.remove,type:`button`,label:`${k} ${t+1}`,size:`small`,shape:`square`,icon:(0,P.jsx)(m,{size:16,"aria-hidden":!0}),disabled:i,onClick:()=>B(e.id)})]},e.id)}),(0,P.jsxs)(u,{ref:I,className:j.add,type:`button`,color:`neutral`,variant:`outline`,size:`small`,disabled:i,onClick:R,children:[(0,P.jsx)(f,{size:16,"aria-hidden":!0}),(0,P.jsx)(`span`,{children:d??S(`keyValueEditor.add`)})]})]})}})))()}function R(){let[e,t]=(0,z.useState)([{id:`greeting`,key:`greeting`,value:`Hello
world`}]);return(0,B.jsx)(I,{entries:e,onChange:t,keyLabel:`Translation key`,valueLabel:`Translation`,addLabel:`Add translation`,removeLabel:`Remove translation`})}var z,B;function V(){return(V=e((()=>{L(),z=t(),B=n()})))()}function H(){let[e,t]=(0,U.useState)([{id:`a`,key:`Accept`,value:`application/json`},{id:`b`,key:`Accept`,value:``}]),n=Object.fromEntries(e.map(t=>[t.id,{key:e.some(e=>e!==t&&e.key===t.key)?`Duplicate header`:void 0,value:t.value?void 0:`Value required`}]));return(0,W.jsx)(I,{entries:e,onChange:t,errors:n})}var U,W;function G(){return(G=e((()=>{L(),U=t(),W=n()})))()}var K;function q(){return(q=e((()=>{K=`import { KeyValueEditor, type KeyValueEntry } from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [entries, setEntries] = useState<KeyValueEntry[]>([
    { id: "greeting", key: "greeting", value: "Hello\\nworld" },
  ]);
  return (
    <KeyValueEditor
      entries={entries}
      onChange={setEntries}
      keyLabel="Translation key"
      valueLabel="Translation"
      addLabel="Add translation"
      removeLabel="Remove translation"
    />
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { KeyValueEditor, type KeyValueEntry } from "@minerva/lib-core";
import { useState } from "react";

export default function ErrorsDemo() {
  const [entries, setEntries] = useState<KeyValueEntry[]>([
    { id: "a", key: "Accept", value: "application/json" },
    { id: "b", key: "Accept", value: "" },
  ]);
  const errors = Object.fromEntries(
    entries.map((entry) => [
      entry.id,
      {
        key: entries.some((other) => other !== entry && other.key === entry.key)
          ? "Duplicate header"
          : undefined,
        value: entry.value ? undefined : "Value required",
      },
    ]),
  );
  return (
    <KeyValueEditor entries={entries} onChange={setEntries} errors={errors} />
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{V(),G(),q(),Y(),t(),S(),x(),X=n(),Z=C(Object.assign({"./demos/basic.tsx":R,"./demos/errors.tsx":H}),Object.assign({"./demos/basic.tsx":K,"./demos/errors.tsx":J})),Q=()=>(0,X.jsx)(w,{id:`key-value-editor`,demos:Z})})))()}$();export{Q as default};