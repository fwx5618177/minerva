import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{m as r,n as i,p as a,t as o}from"./DocPage-BIGX2Gcv.js";import{i as s,n as c,t as l}from"./context-B9-pxdjQ.js";import{n as u,t as d}from"./Input-CqCrBpST.js";import{a as f,i as p,n as m,o as h,r as g,t as _}from"./FormControl-CJZ6FbrF.js";import{n as v,t as y}from"./Textarea-Ddksf-_o.js";function b(){let[e,t]=(0,x.useState)(``),n=e!==``&&!e.includes(`@`);return(0,S.jsxs)(_,{invalid:n,required:!0,children:[(0,S.jsx)(m,{children:`Email`}),(0,S.jsx)(u,{type:`email`,value:e,onChange:e=>t(e.target.value)}),(0,S.jsx)(h,{children:`Used to sign in.`}),(0,S.jsx)(p,{children:`Enter a valid email address.`})]})}var x,S;function C(){return(C=e((()=>{f(),d(),x=t(),S=n()})))()}function w(){let e=l({}),t=s();return(0,E.jsx)(`input`,{type:`color`,defaultValue:`#2563eb`,...e,style:{outline:t?.invalid?`2px solid red`:void 0}})}function T(){return(0,E.jsx)(g,{label:`Brand color`,helperText:`Wired by useFormControlProps.`,children:(0,E.jsx)(w,{})})}var E;function D(){return(D=e((()=>{f(),c(),E=n()})))()}function O(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g,{label:`Title`,helperText:`Shown on the public page.`,children:(0,k.jsx)(u,{defaultValue:`Draft`})}),(0,k.jsx)(g,{label:`Summary`,errorMessage:`The summary is required.`,children:(0,k.jsx)(v,{rows:3})})]})}var k;function A(){return(A=e((()=>{f(),d(),y(),k=n()})))()}function j(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{label:`Required`,required:!0,children:(0,M.jsx)(u,{})}),(0,M.jsx)(g,{label:`Disabled`,disabled:!0,children:(0,M.jsx)(u,{defaultValue:`Disabled value`})}),(0,M.jsx)(g,{label:`Read-only`,readOnly:!0,children:(0,M.jsx)(u,{defaultValue:`Read-only value`})})]})}var M;function N(){return(N=e((()=>{f(),d(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "minerva-design";
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
`})))()}var I;function L(){return(L=e((()=>{I=`import {
  FormField,
  useFormControlContext,
  useFormControlProps,
} from "minerva-design";

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
`})))()}var R;function z(){return(z=e((()=>{R=`import { FormField, Input, Textarea } from "minerva-design";

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
`})))()}var B;function V(){return(V=e((()=>{B=`import { FormField, Input } from "minerva-design";

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
`})))()}var H,U,W;function G(){return(G=e((()=>{C(),D(),A(),N(),F(),L(),z(),V(),t(),i(),r(),H=n(),U=a(Object.assign({"./demos/basic.tsx":b,"./demos/custom-control.tsx":T,"./demos/form-field.tsx":O,"./demos/states.tsx":j}),Object.assign({"./demos/basic.tsx":P,"./demos/custom-control.tsx":I,"./demos/form-field.tsx":R,"./demos/states.tsx":B})),W=()=>(0,H.jsx)(o,{id:`form-control`,demos:U})})))()}G();export{W as default};