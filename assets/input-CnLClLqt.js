import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as ee}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{Rt as r,dn as i,xt as a}from"./dist-DkgrNLMS.js";import{C as o,M as s,W as c}from"./lu-ChkgBQsL.js";import{c as l,n as u,s as d,t as f}from"./DocPage-Bnv84vTs.js";function p(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{"aria-label":`Search`,prefix:(0,m.jsx)(s,{}),placeholder:`Search`}),(0,m.jsx)(i,{"aria-label":`Handle`,prefix:`@`,defaultValue:`minerva`}),(0,m.jsx)(i,{"aria-label":`Price`,prefix:`$`,suffix:`USD`,inputMode:`decimal`})]})}var m;function h(){return(h=e((()=>{r(),c(),m=n()})))()}function g(){let[e,t]=(0,_.useState)(``);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{"aria-label":`Name`,placeholder:`Uncontrolled`}),(0,v.jsx)(i,{"aria-label":`Controlled`,placeholder:`Controlled`,value:e,onChange:e=>t(e.target.value)})]})}var _,v;function y(){return(y=e((()=>{r(),_=t(),v=n()})))()}function b(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{"aria-label":`Search`,placeholder:`Search`,clearable:!0}),(0,x.jsx)(i,{"aria-label":`Short bio`,defaultValue:`Frontend developer`,clearable:!0,showCharCount:!0,maxLength:40})]})}var x;function S(){return(S=e((()=>{r(),x=n()})))()}function C(){return(0,w.jsx)(a,{label:`Password`,helperText:`At least 8 characters.`,children:(0,w.jsx)(i,{type:`password`,prefix:(0,w.jsx)(o,{}),autoComplete:`new-password`,minLength:8})})}var w;function T(){return(T=e((()=>{r(),c(),w=n()})))()}function E(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(i,{"aria-label":`Small`,size:`small`,placeholder:`small`}),(0,D.jsx)(i,{"aria-label":`Medium`,placeholder:`medium (outline)`}),(0,D.jsx)(i,{"aria-label":`Large`,size:`large`,placeholder:`large`}),(0,D.jsx)(i,{"aria-label":`Filled`,variant:`filled`,placeholder:`filled`}),(0,D.jsx)(i,{"aria-label":`Unstyled`,variant:`unstyled`,placeholder:`unstyled`})]})}var D;function O(){return(O=e((()=>{r(),D=n()})))()}function k(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(i,{"aria-label":`Invalid`,invalid:!0,defaultValue:`Invalid`}),(0,A.jsx)(i,{"aria-label":`Disabled`,disabled:!0,defaultValue:`Disabled`}),(0,A.jsx)(i,{"aria-label":`Read-only`,readOnly:!0,defaultValue:`Read-only`}),(0,A.jsx)(a,{label:`Inside a FormField`,errorMessage:`Inherits the error`,children:(0,A.jsx)(i,{})})]})}var A;function j(){return(j=e((()=>{r(),A=n()})))()}function M(){let[e,t]=(0,N.useState)(``),[n,r]=(0,N.useState)(),o=()=>{r(/^\S+@\S+\.\S+$/.test(e)?void 0:`Please enter a valid email address`)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(a,{label:`Email`,errorMessage:n,required:!0,children:(0,P.jsx)(i,{type:`email`,value:e,onChange:e=>{t(e.target.value),r(void 0)},onKeyDown:e=>e.key===`Enter`&&o()})}),(0,P.jsx)(ee,{onClick:o,children:`Submit`})]})}var N,P;function F(){return(F=e((()=>{N=t(),r(),P=n()})))()}var I;function L(){return(L=e((()=>{I=`import { Input } from "@minerva/lib-core";
import { LuSearch } from "react-icons/lu";

export default function AddonsDemo() {
  return (
    <>
      <Input aria-label="Search" prefix={<LuSearch />} placeholder="Search" />
      <Input aria-label="Handle" prefix="@" defaultValue="minerva" />
      <Input aria-label="Price" prefix="$" suffix="USD" inputMode="decimal" />
    </>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { Input } from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [value, setValue] = useState("");
  return (
    <>
      <Input aria-label="Name" placeholder="Uncontrolled" />
      <Input
        aria-label="Controlled"
        placeholder="Controlled"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Input } from "@minerva/lib-core";

export default function ClearableAndCountDemo() {
  return (
    <>
      <Input aria-label="Search" placeholder="Search" clearable />
      <Input
        aria-label="Short bio"
        defaultValue="Frontend developer"
        clearable
        showCharCount
        maxLength={40}
      />
    </>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { FormField, Input } from "@minerva/lib-core";
import { LuLock } from "react-icons/lu";

export default function PasswordDemo() {
  return (
    <FormField label="Password" helperText="At least 8 characters.">
      <Input
        type="password"
        prefix={<LuLock />}
        autoComplete="new-password"
        minLength={8}
      />
    </FormField>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Input } from "@minerva/lib-core";

export default function SizesVariantsDemo() {
  return (
    <>
      <Input aria-label="Small" size="small" placeholder="small" />
      <Input aria-label="Medium" placeholder="medium (outline)" />
      <Input aria-label="Large" size="large" placeholder="large" />
      <Input aria-label="Filled" variant="filled" placeholder="filled" />
      <Input aria-label="Unstyled" variant="unstyled" placeholder="unstyled" />
    </>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { FormField, Input } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <Input aria-label="Invalid" invalid defaultValue="Invalid" />
      <Input aria-label="Disabled" disabled defaultValue="Disabled" />
      <Input aria-label="Read-only" readOnly defaultValue="Read-only" />
      <FormField label="Inside a FormField" errorMessage="Inherits the error">
        <Input />
      </FormField>
    </>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { useState } from "react";
import { Button, FormField, Input } from "@minerva/lib-core";

export default function ValidationDemo() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();

  const submit = () => {
    setError(
      /^\\S+@\\S+\\.\\S+$/.test(email)
        ? undefined
        : "Please enter a valid email address",
    );
  };

  return (
    <>
      <FormField label="Email" errorMessage={error} required>
        <Input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError(undefined);
          }}
          onKeyDown={(event) => event.key === "Enter" && submit()}
        />
      </FormField>
      <Button onClick={submit}>Submit</Button>
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{h(),y(),S(),T(),O(),j(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),u(),l(),X=n(),Z=d(Object.assign({"./demos/addons.tsx":p,"./demos/basic.tsx":g,"./demos/clearable-and-count.tsx":b,"./demos/password.tsx":C,"./demos/sizes-variants.tsx":E,"./demos/states.tsx":k,"./demos/validation.tsx":M}),Object.assign({"./demos/addons.tsx":I,"./demos/basic.tsx":R,"./demos/clearable-and-count.tsx":B,"./demos/password.tsx":H,"./demos/sizes-variants.tsx":W,"./demos/states.tsx":K,"./demos/validation.tsx":J})),Q=()=>(0,X.jsx)(f,{id:`input`,demos:Z})})))()}$();export{Q as default};