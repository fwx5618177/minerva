import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{Q as a,Z as o}from"./io5-DyQ46fG2.js";import{n as s,t as c}from"./useI18n-Brv-VDVY.js";import{n as l,t as u}from"./Button-DP6INRXF.js";import{M as d,T as f,w as p}from"./icons-C9qyBhWC.js";import{n as m,t as h}from"./IconButton-SvOYwi8Z.js";import{n as g,r as _}from"./FormControl-BajGuK_0.js";import{n as v,t as y}from"./Textarea-BOqkwuLU.js";import{c as b,n as x,s as S,t as C}from"./DocPage-DEXoN4OO.js";var w,T,E,D,O,k,A;function j(){return(j=e((()=>{w=`_root_q4wxg_1`,T=`_row_q4wxg_11`,E=`_key_q4wxg_23`,D=`_remove_q4wxg_27`,O=`_add_q4wxg_33`,k=`_srOnly_q4wxg_48`,A={root:w,row:T,key:E,remove:D,add:O,srOnly:k}})))()}var M,N,P,F;function I(){return(I=e((()=>{i(),s(),l(),f(),a(),m(),_(),y(),j(),M=t(),N=n(),P=[],F=({entries:e,defaultEntries:t,onChange:n,disabled:i=!1,keyLabel:a,valueLabel:s,addLabel:l,removeLabel:f,errors:m,className:_,ref:y,...b})=>{let{t:x}=c(),S=(0,M.useId)(),C=(0,M.useRef)(0),[w,T]=o({value:e,defaultValue:t??P,onChange:n,name:`KeyValueEditor`,prop:`entries`}),E=a??x(`keyValueEditor.key`),D=s??x(`keyValueEditor.value`),O=f??x(`keyValueEditor.remove`),k=(0,M.useRef)(new Map),j=(0,M.useRef)(new Map),F=(0,M.useRef)(null),I=(0,M.useRef)(null);(0,M.useEffect)(()=>{let e=I.current;if(!e)return;I.current=null;let t=e=>w.some(t=>t.id===e);e.kind===`add`?t(e.id)&&k.current.get(e.id)?.focus():t(e.id)||(e.nextId&&j.current.get(e.nextId)||F.current)?.focus()},[w]);let L=()=>{if(i)return;let e;do e=`key-value-${S}-${C.current++}`;while(w.some(t=>t.id===e));I.current={kind:`add`,id:e},T([...w,{id:e,key:``,value:``}])},R=(e,t,n)=>{i||T(w.map(r=>r.id===e?{...r,[t]:n}:r))},z=e=>{if(i)return;let t=w.findIndex(t=>t.id===e),n=w[t+1]??w[t-1];I.current={kind:`remove`,id:e,nextId:n?.id},T(w.filter(t=>t.id!==e))},B=(e,t)=>(0,N.jsxs)(N.Fragment,{children:[e,(0,N.jsxs)(`span`,{className:A.srOnly,children:[` `,t+1]})]});return(0,N.jsxs)(`div`,{ref:y,...b,className:r(A.root,_),children:[w.map((e,t)=>{let n=m?.[e.id];return(0,N.jsxs)(`div`,{className:A.row,children:[(0,N.jsx)(g,{label:B(E,t),disabled:i,invalid:!!n?.key,errorMessage:n?.key,children:(0,N.jsx)(v,{ref:t=>{t?k.current.set(e.id,t):k.current.delete(e.id)},className:A.key,size:`small`,rows:1,value:e.key,onChange:t=>R(e.id,`key`,t.target.value)})}),(0,N.jsx)(g,{label:B(D,t),disabled:i,invalid:!!n?.value,errorMessage:n?.value,children:(0,N.jsx)(v,{size:`small`,rows:2,value:e.value,onChange:t=>R(e.id,`value`,t.target.value)})}),(0,N.jsx)(h,{ref:t=>{t?j.current.set(e.id,t):j.current.delete(e.id)},className:A.remove,type:`button`,label:`${O} ${t+1}`,size:`small`,shape:`square`,icon:(0,N.jsx)(p,{size:16,"aria-hidden":!0}),disabled:i,onClick:()=>z(e.id)})]},e.id)}),(0,N.jsxs)(u,{ref:F,className:A.add,type:`button`,color:`neutral`,variant:`outline`,size:`small`,disabled:i,onClick:L,children:[(0,N.jsx)(d,{size:16,"aria-hidden":!0}),(0,N.jsx)(`span`,{children:l??x(`keyValueEditor.add`)})]})]})}})))()}function L(){let[e,t]=(0,R.useState)([{id:`greeting`,key:`greeting`,value:`Hello
world`}]);return(0,z.jsx)(F,{entries:e,onChange:t,keyLabel:`Translation key`,valueLabel:`Translation`,addLabel:`Add translation`,removeLabel:`Remove translation`})}var R,z;function B(){return(B=e((()=>{I(),R=t(),z=n()})))()}function V(){let[e,t]=(0,H.useState)([{id:`a`,key:`Accept`,value:`application/json`},{id:`b`,key:`Accept`,value:``}]),n=Object.fromEntries(e.map(t=>[t.id,{key:e.some(e=>e!==t&&e.key===t.key)?`Duplicate header`:void 0,value:t.value?void 0:`Value required`}]));return(0,U.jsx)(F,{entries:e,onChange:t,errors:n})}var H,U;function W(){return(W=e((()=>{I(),H=t(),U=n()})))()}var G;function K(){return(K=e((()=>{G=`import { KeyValueEditor, type KeyValueEntry } from "@minerva/lib-core";
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
`})))()}var q;function J(){return(J=e((()=>{q=`import { KeyValueEditor, type KeyValueEntry } from "@minerva/lib-core";
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
`})))()}var Y,X,Z;function Q(){return(Q=e((()=>{B(),W(),K(),J(),t(),x(),b(),Y=n(),X=S(Object.assign({"./demos/basic.tsx":L,"./demos/errors.tsx":V}),Object.assign({"./demos/basic.tsx":G,"./demos/errors.tsx":q})),Z=()=>(0,Y.jsx)(C,{id:`key-value-editor`,demos:X})})))()}Q();export{Z as default};