import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{E as r,h as i}from"./dist-C3Cy1YK6.js";import{M as a,S as o,z as s}from"./registry-DXcVqgdp.js";import{i as c,t as l}from"./DocPage-DUnq_TLt.js";var u=n();function d(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{name:`appearance-minimal`,label:`Minimal`,minimal:!0}),(0,u.jsx)(r,{name:`appearance-borderless`,label:`No border`,hideBorder:!0}),(0,u.jsx)(r,{name:`appearance-rounded`,label:`Rounded`,borderRadius:`999px`,borderColor:`#7c3aed`})]})}function f(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{name:`basic-name`,label:`Full name`}),(0,u.jsx)(r,{name:`basic-city`,label:`City`,placeholder:`Placeholder replaces the floating label`})]})}function p(){return(0,u.jsx)(r,{name:`clearable-bio`,label:`Short bio`,defaultValue:`Frontend developer`,clearable:!0,showCharCount:!0})}var m=e(t(),1);function h(){let[e,t]=(0,m.useState)(`Minerva`);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{name:`controlled-project`,label:`Project name`,value:e,onChange:t}),(0,u.jsxs)(`span`,{children:[`Value: `,e||`(empty)`]})]})}function g(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{name:`icons-search`,label:`Search`,icon:(0,u.jsx)(s,{})}),(0,u.jsx)(r,{name:`icons-email`,label:`Email`,type:`email`,icon:(0,u.jsx)(a,{}),iconPosition:`right`})]})}function _(){return(0,u.jsx)(r,{name:`password`,label:`Password`,type:`password`,icon:(0,u.jsx)(o,{}),iconPosition:`right`})}function v(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{name:`size-small`,label:`Small`,size:`small`,width:`200px`}),(0,u.jsx)(r,{name:`size-medium`,label:`Medium`,size:`medium`,width:`200px`}),(0,u.jsx)(r,{name:`size-large`,label:`Large`,size:`large`,width:`200px`})]})}function y(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{name:`states-disabled`,label:`Disabled`,disabled:!0}),(0,u.jsx)(r,{name:`states-readonly`,label:`Read-only`,value:`Read-only value`,readOnly:!0})]})}function b(){let[e,t]=(0,m.useState)(``),[n,a]=(0,m.useState)(),o=()=>{a(/^\S+@\S+\.\S+$/.test(e)?void 0:`Please enter a valid email address`)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{name:`validation-email`,label:`Email`,value:e,onChange:e=>{t(e),a(void 0)},onKeyDown:e=>e.key===`Enter`&&o(),helperText:n}),(0,u.jsx)(i,{onClick:o,children:`Submit`})]})}function x(){return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},children:[(0,u.jsx)(r,{name:`width-weight`,label:`Weight`,width:`160px`,suffix:`kg`}),(0,u.jsx)(r,{name:`width-address`,label:`Address`,fullWidth:!0})]})}var S=c(Object.assign({"./demos/appearance.tsx":d,"./demos/basic.tsx":f,"./demos/clearable-and-count.tsx":p,"./demos/controlled.tsx":h,"./demos/icons.tsx":g,"./demos/password.tsx":_,"./demos/sizes.tsx":v,"./demos/states.tsx":y,"./demos/validation.tsx":b,"./demos/width-and-suffix.tsx":x}),Object.assign({"./demos/appearance.tsx":`import { TextField } from "@minerva/lib-core";

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
`,"./demos/basic.tsx":`import { TextField } from "@minerva/lib-core";

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
`,"./demos/clearable-and-count.tsx":`import { TextField } from "@minerva/lib-core";

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
`,"./demos/controlled.tsx":`import { useState } from "react";
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
`,"./demos/icons.tsx":`import { TextField } from "@minerva/lib-core";
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
`,"./demos/password.tsx":`import { TextField } from "@minerva/lib-core";
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
`,"./demos/sizes.tsx":`import { TextField } from "@minerva/lib-core";

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
`,"./demos/states.tsx":`import { TextField } from "@minerva/lib-core";

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
`,"./demos/validation.tsx":`import { useState } from "react";
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
`,"./demos/width-and-suffix.tsx":`import { TextField } from "@minerva/lib-core";

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
`})),C=()=>(0,u.jsx)(l,{id:`textfield`,demos:S});export{C as default};