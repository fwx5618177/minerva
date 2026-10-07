import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Nt as r,Vt as i}from"./dist-dg6ajl7p.js";import{c as a,n as o,s,t as c}from"./DocPage-Kqmidh_0.js";function l(){let[e,t]=(0,u.useState)([{id:`greeting`,key:`greeting`,value:`Hello
world`}]);return(0,d.jsx)(r,{entries:e,onChange:t,keyLabel:`Translation key`,valueLabel:`Translation`,addLabel:`Add translation`,removeLabel:`Remove translation`})}var u,d;function f(){return(f=e((()=>{i(),u=t(),d=n()})))()}function p(){let[e,t]=(0,m.useState)([{id:`a`,key:`Accept`,value:`application/json`},{id:`b`,key:`Accept`,value:``}]),n=Object.fromEntries(e.map(t=>[t.id,{key:e.some(e=>e!==t&&e.key===t.key)?`Duplicate header`:void 0,value:t.value?void 0:`Value required`}]));return(0,h.jsx)(r,{entries:e,onChange:t,errors:n})}var m,h;function g(){return(g=e((()=>{i(),m=t(),h=n()})))()}var _;function v(){return(v=e((()=>{_=`import { KeyValueEditor, type KeyValueEntry } from "@minerva/lib-core";
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
`})))()}var y;function b(){return(b=e((()=>{y=`import { KeyValueEditor, type KeyValueEntry } from "@minerva/lib-core";
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
`})))()}var x,S,C;function w(){return(w=e((()=>{f(),g(),v(),b(),t(),o(),a(),x=n(),S=s(Object.assign({"./demos/basic.tsx":l,"./demos/errors.tsx":p}),Object.assign({"./demos/basic.tsx":_,"./demos/errors.tsx":y})),C=()=>(0,x.jsx)(c,{id:`key-value-editor`,demos:S})})))()}w();export{C as default};