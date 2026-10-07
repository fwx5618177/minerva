import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{c as r,n as i,s as a,t as o}from"./DocPage-HgWiqH91.js";import{n as ee,t as s}from"./Button-CwqLLYn6.js";import{n as c,t as l}from"./Input-Bol6v7xp.js";import{n as u,r as d}from"./FormControl-DSGbEYF3.js";import{f,h as te,w as p}from"./lu-D4WkY8Ju.js";function m(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{"aria-label":`Search`,prefix:(0,h.jsx)(te,{}),placeholder:`Search`}),(0,h.jsx)(c,{"aria-label":`Handle`,prefix:`@`,defaultValue:`minerva`}),(0,h.jsx)(c,{"aria-label":`Price`,prefix:`$`,suffix:`USD`,inputMode:`decimal`})]})}var h;function g(){return(g=e((()=>{l(),p(),h=n()})))()}function _(){let[e,t]=(0,v.useState)(``);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c,{"aria-label":`Name`,placeholder:`Uncontrolled`}),(0,y.jsx)(c,{"aria-label":`Controlled`,placeholder:`Controlled`,value:e,onChange:e=>t(e.target.value)})]})}var v,y;function b(){return(b=e((()=>{l(),v=t(),y=n()})))()}function x(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(c,{"aria-label":`Search`,placeholder:`Search`,clearable:!0}),(0,S.jsx)(c,{"aria-label":`Short bio`,defaultValue:`Frontend developer`,clearable:!0,showCharCount:!0,maxLength:40})]})}var S;function C(){return(C=e((()=>{l(),S=n()})))()}function w(){return(0,T.jsx)(u,{label:`Password`,helperText:`At least 8 characters.`,children:(0,T.jsx)(c,{type:`password`,prefix:(0,T.jsx)(f,{}),autoComplete:`new-password`,minLength:8})})}var T;function E(){return(E=e((()=>{d(),l(),p(),T=n()})))()}function D(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{"aria-label":`Small`,size:`small`,placeholder:`small`}),(0,O.jsx)(c,{"aria-label":`Medium`,placeholder:`medium (outline)`}),(0,O.jsx)(c,{"aria-label":`Large`,size:`large`,placeholder:`large`}),(0,O.jsx)(c,{"aria-label":`Filled`,variant:`filled`,placeholder:`filled`}),(0,O.jsx)(c,{"aria-label":`Unstyled`,variant:`unstyled`,placeholder:`unstyled`})]})}var O;function k(){return(k=e((()=>{l(),O=n()})))()}function ne(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{"aria-label":`Invalid`,invalid:!0,defaultValue:`Invalid`}),(0,A.jsx)(c,{"aria-label":`Disabled`,disabled:!0,defaultValue:`Disabled`}),(0,A.jsx)(c,{"aria-label":`Read-only`,readOnly:!0,defaultValue:`Read-only`}),(0,A.jsx)(u,{label:`Inside a FormField`,errorMessage:`Inherits the error`,children:(0,A.jsx)(c,{})})]})}var A;function j(){return(j=e((()=>{d(),l(),A=n()})))()}function M(){let[e,t]=(0,N.useState)(``),[n,r]=(0,N.useState)(),i=()=>{r(/^\S+@\S+\.\S+$/.test(e)?void 0:`Please enter a valid email address`)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(u,{label:`Email`,errorMessage:n,required:!0,children:(0,P.jsx)(c,{type:`email`,value:e,onChange:e=>{t(e.target.value),r(void 0)},onKeyDown:e=>e.key===`Enter`&&i()})}),(0,P.jsx)(s,{onClick:i,children:`Submit`})]})}var N,P;function F(){return(F=e((()=>{N=t(),ee(),d(),l(),P=n()})))()}var I;function L(){return(L=e((()=>{I=`import { Input } from "@minerva/lib-core";
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
`})))()}var X,Z,Q;function $(){return($=e((()=>{g(),b(),C(),E(),k(),j(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),i(),r(),X=n(),Z=a(Object.assign({"./demos/addons.tsx":m,"./demos/basic.tsx":_,"./demos/clearable-and-count.tsx":x,"./demos/password.tsx":w,"./demos/sizes-variants.tsx":D,"./demos/states.tsx":ne,"./demos/validation.tsx":M}),Object.assign({"./demos/addons.tsx":I,"./demos/basic.tsx":R,"./demos/clearable-and-count.tsx":B,"./demos/password.tsx":H,"./demos/sizes-variants.tsx":W,"./demos/states.tsx":K,"./demos/validation.tsx":J})),Q=()=>(0,X.jsx)(o,{id:`input`,demos:Z})})))()}$();export{Q as default};