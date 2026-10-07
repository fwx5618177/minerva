import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{_t as r,tt as i}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as a}from"./dist-CcA3uxH5.js";import{c as o,n as s,s as c,t as l}from"./DocPage-Dm1vTl9w.js";function u(){let[e,t]=(0,d.useState)(`{"title":"Draft","tags":["a","b"]}`);return(0,f.jsx)(r,{"aria-label":`Response body`,value:e,onChange:t,rows:6})}var d,f;function p(){return(p=e((()=>{a(),d=t(),f=n()})))()}function m(){return(0,h.jsx)(i,{label:`Dictionary`,helperText:`Public translation dictionary.`,required:!0,children:(0,h.jsx)(r,{name:`dictionary`,defaultValue:`{"hello":"world"}`,rows:5})})}var h;function g(){return(g=e((()=>{a(),h=n()})))()}function _(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{"aria-label":`Four spaces`,defaultValue:`{"a":[1,2]}`,indent:4,rows:4}),(0,v.jsx)(r,{"aria-label":`Compact`,defaultValue:`{
  "a": [1, 2]
}`,indent:0,rows:4}),(0,v.jsx)(r,{"aria-label":`Without toolbar`,defaultValue:`{`,hideToolbar:!0,rows:2})]})}var v;function y(){return(y=e((()=>{a(),v=n()})))()}var b;function x(){return(x=e((()=>{b=`import { JsonField } from "@minerva/lib-core";
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
`})))()}var S;function C(){return(C=e((()=>{S=`import { FormField, JsonField } from "@minerva/lib-core";

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
`})))()}var w;function T(){return(T=e((()=>{w=`import { JsonField } from "@minerva/lib-core";

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
`})))()}var E,D,O;function k(){return(k=e((()=>{p(),g(),y(),x(),C(),T(),t(),s(),o(),E=n(),D=c(Object.assign({"./demos/basic.tsx":u,"./demos/form-control.tsx":m,"./demos/indent.tsx":_}),Object.assign({"./demos/basic.tsx":b,"./demos/form-control.tsx":S,"./demos/indent.tsx":w})),O=()=>(0,E.jsx)(l,{id:`json-field`,demos:D})})))()}k();export{O as default};