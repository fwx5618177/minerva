import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as ee}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{Ht as r,J as i,j as a}from"./dist-BWNqkmth.js";import{P as te,V as ne,Y as o,w as re}from"./registry-CQpv28AQ.js";import{c as ie,n as ae,s as oe,t as se}from"./DocPage-DGOZswYH.js";function ce(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{name:`appearance-minimal`,label:`Minimal`,minimal:!0}),(0,s.jsx)(i,{name:`appearance-borderless`,label:`No border`,hideBorder:!0}),(0,s.jsx)(i,{name:`appearance-rounded`,label:`Rounded`,borderRadius:`999px`,borderColor:`#7c3aed`})]})}var s;function c(){return(c=e((()=>{r(),s=n()})))()}function le(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{name:`basic-name`,label:`Full name`}),(0,l.jsx)(i,{name:`basic-city`,label:`City`,placeholder:`Placeholder replaces the floating label`})]})}var l;function u(){return(u=e((()=>{r(),l=n()})))()}function ue(){return(0,d.jsx)(i,{name:`clearable-bio`,label:`Short bio`,defaultValue:`Frontend developer`,clearable:!0,showCharCount:!0})}var d;function f(){return(f=e((()=>{r(),d=n()})))()}function de(){let[e,t]=(0,p.useState)(`Minerva`);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{name:`controlled-project`,label:`Project name`,value:e,onChange:t}),(0,m.jsxs)(`span`,{children:[`Value: `,e||`(empty)`]})]})}var p,m;function h(){return(h=e((()=>{p=t(),r(),m=n()})))()}function fe(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{label:`Email`,helperText:`Wired through the FormControl.`,required:!0,children:(0,g.jsx)(i,{name:`fc-email`,label:`Email`,placeholder:`you@example.com`})}),(0,g.jsx)(i,{name:`fc-invalid`,label:`Invalid without a message`,invalid:!0})]})}var g;function _(){return(_=e((()=>{r(),g=n()})))()}function pe(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{name:`icons-search`,label:`Search`,icon:(0,v.jsx)(ne,{})}),(0,v.jsx)(i,{name:`icons-email`,label:`Email`,type:`email`,icon:(0,v.jsx)(te,{}),iconPosition:`right`})]})}var v;function y(){return(y=e((()=>{r(),o(),v=n()})))()}function me(){return(0,b.jsx)(i,{name:`password`,label:`Password`,type:`password`,icon:(0,b.jsx)(re,{}),iconPosition:`right`})}var b;function x(){return(x=e((()=>{r(),o(),b=n()})))()}function he(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{name:`size-small`,label:`Small`,size:`small`,width:`200px`}),(0,S.jsx)(i,{name:`size-medium`,label:`Medium`,size:`medium`,width:`200px`}),(0,S.jsx)(i,{name:`size-large`,label:`Large`,size:`large`,width:`200px`})]})}var S;function C(){return(C=e((()=>{r(),S=n()})))()}function ge(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{name:`states-disabled`,label:`Disabled`,disabled:!0}),(0,w.jsx)(i,{name:`states-readonly`,label:`Read-only`,value:`Read-only value`,readOnly:!0})]})}var w;function T(){return(T=e((()=>{r(),w=n()})))()}function _e(){let[e,t]=(0,E.useState)(``),[n,r]=(0,E.useState)(),a=()=>{r(/^\S+@\S+\.\S+$/.test(e)?void 0:`Please enter a valid email address`)};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(i,{name:`validation-email`,label:`Email`,value:e,onChange:e=>{t(e),r(void 0)},onKeyDown:e=>e.key===`Enter`&&a(),helperText:n}),(0,D.jsx)(ee,{onClick:a,children:`Submit`})]})}var E,D;function ve(){return(ve=e((()=>{E=t(),r(),D=n()})))()}function ye(){return(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},children:[(0,O.jsx)(i,{name:`width-weight`,label:`Weight`,width:`160px`,suffix:`kg`}),(0,O.jsx)(i,{name:`width-address`,label:`Address`,fullWidth:!0})]})}var O;function k(){return(k=e((()=>{r(),O=n()})))()}var A;function j(){return(j=e((()=>{A=`import { TextField } from "@minerva/lib-core";

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
`})))()}var M;function N(){return(N=e((()=>{M=`import { TextField } from "@minerva/lib-core";

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
`})))()}var P;function F(){return(F=e((()=>{P=`import { TextField } from "@minerva/lib-core";

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
`})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
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
`})))()}var R;function z(){return(z=e((()=>{R=`import { FormField, TextField } from "@minerva/lib-core";

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
`})))()}var B;function V(){return(V=e((()=>{B=`import { TextField } from "@minerva/lib-core";
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
`})))()}var H;function U(){return(U=e((()=>{H=`import { TextField } from "@minerva/lib-core";
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
`})))()}var W;function G(){return(G=e((()=>{W=`import { TextField } from "@minerva/lib-core";

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
`})))()}var K;function q(){return(q=e((()=>{K=`import { TextField } from "@minerva/lib-core";

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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { useState } from "react";
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
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { TextField } from "@minerva/lib-core";

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
`})))()}var Q,be,xe;function $(){return($=e((()=>{c(),u(),f(),h(),_(),y(),x(),C(),T(),ve(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),Z(),t(),ae(),ie(),Q=n(),be=oe(Object.assign({"./demos/appearance.tsx":ce,"./demos/basic.tsx":le,"./demos/clearable-and-count.tsx":ue,"./demos/controlled.tsx":de,"./demos/form-control.tsx":fe,"./demos/icons.tsx":pe,"./demos/password.tsx":me,"./demos/sizes.tsx":he,"./demos/states.tsx":ge,"./demos/validation.tsx":_e,"./demos/width-and-suffix.tsx":ye}),Object.assign({"./demos/appearance.tsx":A,"./demos/basic.tsx":M,"./demos/clearable-and-count.tsx":P,"./demos/controlled.tsx":I,"./demos/form-control.tsx":R,"./demos/icons.tsx":B,"./demos/password.tsx":H,"./demos/sizes.tsx":W,"./demos/states.tsx":K,"./demos/validation.tsx":J,"./demos/width-and-suffix.tsx":X})),xe=()=>(0,Q.jsx)(se,{id:`textfield`,demos:be})})))()}$();export{xe as default};