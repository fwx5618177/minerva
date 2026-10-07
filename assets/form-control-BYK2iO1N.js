import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{D as r,Vt as i,dt as a,k as o,nt as s,rn as c,st as l,v as u,y as d,z as f}from"./dist-dg6ajl7p.js";import{c as p,n as m,s as h,t as g}from"./DocPage-Kqmidh_0.js";function _(){let[e,t]=(0,v.useState)(``),n=e!==``&&!e.includes(`@`);return(0,y.jsxs)(s,{invalid:n,required:!0,children:[(0,y.jsx)(d,{children:`Email`}),(0,y.jsx)(a,{type:`email`,value:e,onChange:e=>t(e.target.value)}),(0,y.jsx)(l,{children:`Used to sign in.`}),(0,y.jsx)(u,{children:`Enter a valid email address.`})]})}var v,y;function b(){return(b=e((()=>{i(),v=t(),y=n()})))()}function x(){let e=c({}),t=o();return(0,C.jsx)(`input`,{type:`color`,defaultValue:`#2563eb`,...e,style:{outline:t?.invalid?`2px solid red`:void 0}})}function S(){return(0,C.jsx)(r,{label:`Brand color`,helperText:`Wired by useFormControlProps.`,children:(0,C.jsx)(x,{})})}var C;function w(){return(w=e((()=>{i(),C=n()})))()}function T(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(r,{label:`Title`,helperText:`Shown on the public page.`,children:(0,E.jsx)(a,{defaultValue:`Draft`})}),(0,E.jsx)(r,{label:`Summary`,errorMessage:`The summary is required.`,children:(0,E.jsx)(f,{rows:3})})]})}var E;function D(){return(D=e((()=>{i(),E=n()})))()}function O(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r,{label:`Required`,required:!0,children:(0,k.jsx)(a,{})}),(0,k.jsx)(r,{label:`Disabled`,disabled:!0,children:(0,k.jsx)(a,{defaultValue:`Disabled value`})}),(0,k.jsx)(r,{label:`Read-only`,readOnly:!0,children:(0,k.jsx)(a,{defaultValue:`Read-only value`})})]})}var k;function A(){return(A=e((()=>{i(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [email, setEmail] = useState("");
  const invalid = email !== "" && !email.includes("@");
  return (
    <FormControl invalid={invalid} required>
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <FormHelperText>Used to sign in.</FormHelperText>
      <FormErrorMessage>Enter a valid email address.</FormErrorMessage>
    </FormControl>
  );
}
`})))()}var N;function P(){return(P=e((()=>{N=`import {
  FormField,
  useFormControlContext,
  useFormControlProps,
} from "@minerva/lib-core";

function ColorInput() {
  // id, aria-describedby, aria-invalid, aria-required, disabled, readOnly
  const props = useFormControlProps({});
  const field = useFormControlContext();
  return (
    <input
      type="color"
      defaultValue="#2563eb"
      {...props}
      style={{ outline: field?.invalid ? "2px solid red" : undefined }}
    />
  );
}

export default function CustomControlDemo() {
  return (
    <FormField label="Brand color" helperText="Wired by useFormControlProps.">
      <ColorInput />
    </FormField>
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { FormField, Input, Textarea } from "@minerva/lib-core";

export default function FormFieldDemo() {
  return (
    <>
      <FormField label="Title" helperText="Shown on the public page.">
        <Input defaultValue="Draft" />
      </FormField>
      <FormField label="Summary" errorMessage="The summary is required.">
        <Textarea rows={3} />
      </FormField>
    </>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { FormField, Input } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <FormField label="Required" required>
        <Input />
      </FormField>
      <FormField label="Disabled" disabled>
        <Input defaultValue="Disabled value" />
      </FormField>
      <FormField label="Read-only" readOnly>
        <Input defaultValue="Read-only value" />
      </FormField>
    </>
  );
}
`})))()}var z,B,V;function H(){return(H=e((()=>{b(),w(),D(),A(),M(),P(),I(),R(),t(),m(),p(),z=n(),B=h(Object.assign({"./demos/basic.tsx":_,"./demos/custom-control.tsx":S,"./demos/form-field.tsx":T,"./demos/states.tsx":O}),Object.assign({"./demos/basic.tsx":j,"./demos/custom-control.tsx":N,"./demos/form-field.tsx":F,"./demos/states.tsx":L})),V=()=>(0,z.jsx)(g,{id:`form-control`,demos:B})})))()}H();export{V as default};