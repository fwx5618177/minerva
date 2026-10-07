import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{d as ee}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{gt as r,tt as i}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{P as a,V as te,Y as ne,w as re}from"./registry-B5r3N_Su.js";import{d as o}from"./dist-CcA3uxH5.js";import{c as ie,n as ae,s as oe,t as se}from"./DocPage-Dm1vTl9w.js";function ce(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{name:`appearance-minimal`,label:`Minimal`,minimal:!0}),(0,s.jsx)(r,{name:`appearance-borderless`,label:`No border`,hideBorder:!0}),(0,s.jsx)(r,{name:`appearance-rounded`,label:`Rounded`,borderRadius:`999px`,borderColor:`#7c3aed`})]})}var s;function c(){return(c=e((()=>{o(),s=n()})))()}function le(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{name:`basic-name`,label:`Full name`}),(0,l.jsx)(r,{name:`basic-city`,label:`City`,placeholder:`Placeholder replaces the floating label`})]})}var l;function u(){return(u=e((()=>{o(),l=n()})))()}function ue(){return(0,d.jsx)(r,{name:`clearable-bio`,label:`Short bio`,defaultValue:`Frontend developer`,clearable:!0,showCharCount:!0})}var d;function f(){return(f=e((()=>{o(),d=n()})))()}function de(){let[e,t]=(0,p.useState)(`Minerva`);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{name:`controlled-project`,label:`Project name`,value:e,onChange:t}),(0,m.jsxs)(`span`,{children:[`Value: `,e||`(empty)`]})]})}var p,m;function h(){return(h=e((()=>{p=t(),o(),m=n()})))()}function fe(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{label:`Email`,helperText:`Wired through the FormControl.`,required:!0,children:(0,g.jsx)(r,{name:`fc-email`,label:`Email`,placeholder:`you@example.com`})}),(0,g.jsx)(r,{name:`fc-invalid`,label:`Invalid without a message`,invalid:!0})]})}var g;function _(){return(_=e((()=>{o(),g=n()})))()}function pe(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{name:`icons-search`,label:`Search`,icon:(0,v.jsx)(te,{})}),(0,v.jsx)(r,{name:`icons-email`,label:`Email`,type:`email`,icon:(0,v.jsx)(a,{}),iconPosition:`right`})]})}var v;function y(){return(y=e((()=>{o(),ne(),v=n()})))()}function me(){return(0,b.jsx)(r,{name:`password`,label:`Password`,type:`password`,icon:(0,b.jsx)(re,{}),iconPosition:`right`})}var b;function x(){return(x=e((()=>{o(),ne(),b=n()})))()}function he(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r,{name:`size-small`,label:`Small`,size:`small`,width:`200px`}),(0,S.jsx)(r,{name:`size-medium`,label:`Medium`,size:`medium`,width:`200px`}),(0,S.jsx)(r,{name:`size-large`,label:`Large`,size:`large`,width:`200px`})]})}var S;function C(){return(C=e((()=>{o(),S=n()})))()}function ge(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r,{name:`states-disabled`,label:`Disabled`,disabled:!0}),(0,w.jsx)(r,{name:`states-readonly`,label:`Read-only`,value:`Read-only value`,readOnly:!0})]})}var w;function T(){return(T=e((()=>{o(),w=n()})))()}function _e(){let[e,t]=(0,E.useState)(``),[n,i]=(0,E.useState)(),a=()=>{i(/^\S+@\S+\.\S+$/.test(e)?void 0:`Please enter a valid email address`)};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(r,{name:`validation-email`,label:`Email`,value:e,onChange:e=>{t(e),i(void 0)},onKeyDown:e=>e.key===`Enter`&&a(),helperText:n}),(0,D.jsx)(ee,{onClick:a,children:`Submit`})]})}var E,D;function O(){return(O=e((()=>{E=t(),o(),D=n()})))()}function ve(){return(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},children:[(0,k.jsx)(r,{name:`width-weight`,label:`Weight`,width:`160px`,suffix:`kg`}),(0,k.jsx)(r,{name:`width-address`,label:`Address`,fullWidth:!0})]})}var k;function A(){return(A=e((()=>{o(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import { TextField } from "@minerva/lib-core";

export default function AppearanceDemo() {
  return (
    <>
      <TextField name="appearance-minimal" label="Minimal" minimal />
      <TextField name="appearance-borderless" label="No border" hideBorder />
      <TextField
        name="appearance-rounded"
        label="Rounded"
        borderRadius="999px"
        borderColor="#7c3aed"
      />
    </>
  );
}
`})))()}var N;function P(){return(P=e((()=>{N=`import { TextField } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <>
      <TextField name="basic-name" label="Full name" />
      <TextField
        name="basic-city"
        label="City"
        placeholder="Placeholder replaces the floating label"
      />
    </>
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { TextField } from "@minerva/lib-core";

export default function ClearableAndCountDemo() {
  return (
    <TextField
      name="clearable-bio"
      label="Short bio"
      defaultValue="Frontend developer"
      clearable
      showCharCount
    />
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { useState } from "react";
import { TextField } from "@minerva/lib-core";

export default function ControlledDemo() {
  const [value, setValue] = useState("Minerva");

  return (
    <>
      <TextField
        name="controlled-project"
        label="Project name"
        value={value}
        onChange={setValue}
      />
      <span>Value: {value || "(empty)"}</span>
    </>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { FormField, TextField } from "@minerva/lib-core";

export default function FormControlDemo() {
  return (
    <>
      <FormField
        label="Email"
        helperText="Wired through the FormControl."
        required
      >
        <TextField
          name="fc-email"
          label="Email"
          placeholder="you@example.com"
        />
      </FormField>
      <TextField name="fc-invalid" label="Invalid without a message" invalid />
    </>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { TextField } from "@minerva/lib-core";
import { IoMailOutline, IoSearch } from "react-icons/io5";

export default function IconsDemo() {
  return (
    <>
      <TextField name="icons-search" label="Search" icon={<IoSearch />} />
      <TextField
        name="icons-email"
        label="Email"
        type="email"
        icon={<IoMailOutline />}
        iconPosition="right"
      />
    </>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { TextField } from "@minerva/lib-core";
import { IoEye } from "react-icons/io5";

export default function PasswordDemo() {
  return (
    <TextField
      name="password"
      label="Password"
      type="password"
      icon={<IoEye />}
      iconPosition="right"
    />
  );
}
`})))()}var G;function K(){return(K=e((()=>{G=`import { TextField } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <TextField name="size-small" label="Small" size="small" width="200px" />
      <TextField
        name="size-medium"
        label="Medium"
        size="medium"
        width="200px"
      />
      <TextField name="size-large" label="Large" size="large" width="200px" />
    </>
  );
}
`})))()}var q;function J(){return(J=e((()=>{q=`import { TextField } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <TextField name="states-disabled" label="Disabled" disabled />
      <TextField
        name="states-readonly"
        label="Read-only"
        value="Read-only value"
        readOnly
      />
    </>
  );
}
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { useState } from "react";
import { Button, TextField } from "@minerva/lib-core";

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
      <TextField
        name="validation-email"
        label="Email"
        value={email}
        onChange={(value) => {
          setEmail(value);
          setError(undefined);
        }}
        onKeyDown={(event) => event.key === "Enter" && submit()}
        helperText={error}
      />
      <Button onClick={submit}>Submit</Button>
    </>
  );
}
`})))()}var Z;function Q(){return(Q=e((()=>{Z=`import { TextField } from "@minerva/lib-core";

export default function WidthAndSuffixDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        width: "100%",
      }}
    >
      <TextField name="width-weight" label="Weight" width="160px" suffix="kg" />
      <TextField name="width-address" label="Address" fullWidth />
    </div>
  );
}
`})))()}var $,ye,be;function xe(){return(xe=e((()=>{c(),u(),f(),h(),_(),y(),x(),C(),T(),O(),A(),M(),P(),I(),R(),B(),H(),W(),K(),J(),X(),Q(),t(),ae(),ie(),$=n(),ye=oe(Object.assign({"./demos/appearance.tsx":ce,"./demos/basic.tsx":le,"./demos/clearable-and-count.tsx":ue,"./demos/controlled.tsx":de,"./demos/form-control.tsx":fe,"./demos/icons.tsx":pe,"./demos/password.tsx":me,"./demos/sizes.tsx":he,"./demos/states.tsx":ge,"./demos/validation.tsx":_e,"./demos/width-and-suffix.tsx":ve}),Object.assign({"./demos/appearance.tsx":j,"./demos/basic.tsx":N,"./demos/clearable-and-count.tsx":F,"./demos/controlled.tsx":L,"./demos/form-control.tsx":z,"./demos/icons.tsx":V,"./demos/password.tsx":U,"./demos/sizes.tsx":G,"./demos/states.tsx":q,"./demos/validation.tsx":Y,"./demos/width-and-suffix.tsx":Z})),be=()=>(0,$.jsx)(se,{id:`textfield`,demos:ye})})))()}xe();export{be as default};