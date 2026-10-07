import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{D as r,It as i,Vt as a}from"./dist-dg6ajl7p.js";import{c as o,n as s,s as c,t as l}from"./DocPage-Kqmidh_0.js";function u(){let[e,t]=(0,d.useState)([`React`]);return(0,f.jsx)(i,{"aria-label":`Tags`,placeholder:`Type a tag and press Enter`,value:e,onChange:t,options:[`React`,`Vue`,`Svelte`,`Solid`]})}var d,f;function p(){return(p=e((()=>{a(),d=t(),f=n()})))()}function m(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{label:`Article tags`,helperText:`Submitted as repeated tags fields.`,children:(0,h.jsx)(i,{name:`tags`,defaultValue:[`news`,`tech`],size:`small`})}),(0,h.jsx)(r,{label:`Read-only tags`,readOnly:!0,children:(0,h.jsx)(i,{defaultValue:[`archived`]})})]})}var h;function g(){return(g=e((()=>{a(),h=n()})))()}var _;function v(){return(v=e((()=>{_=`import { TagInput } from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [tags, setTags] = useState<readonly string[]>(["React"]);
  return (
    <TagInput
      aria-label="Tags"
      placeholder="Type a tag and press Enter"
      value={tags}
      onChange={setTags}
      options={["React", "Vue", "Svelte", "Solid"]}
    />
  );
}
`})))()}var y;function b(){return(b=e((()=>{y=`import { FormField, TagInput } from "@minerva/lib-core";

export default function FormControlDemo() {
  return (
    <>
      <FormField
        label="Article tags"
        helperText="Submitted as repeated tags fields."
      >
        <TagInput name="tags" defaultValue={["news", "tech"]} size="small" />
      </FormField>
      <FormField label="Read-only tags" readOnly>
        <TagInput defaultValue={["archived"]} />
      </FormField>
    </>
  );
}
`})))()}var x,S,C;function w(){return(w=e((()=>{p(),g(),v(),b(),t(),s(),o(),x=n(),S=c(Object.assign({"./demos/basic.tsx":u,"./demos/form-control.tsx":m}),Object.assign({"./demos/basic.tsx":_,"./demos/form-control.tsx":y})),C=()=>(0,x.jsx)(l,{id:`tag-input`,demos:S})})))()}w();export{C as default};