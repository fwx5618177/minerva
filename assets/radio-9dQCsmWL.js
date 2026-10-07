import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{Y as r,i}from"./dist-C3Cy1YK6.js";import{i as a,t as o}from"./DocPage-DUnq_TLt.js";var s=n();function c(){return(0,s.jsxs)(r,{name:`fruit`,label:`Favourite fruit`,defaultValue:`apple`,children:[(0,s.jsx)(i,{value:`apple`,label:`Apple`}),(0,s.jsx)(i,{value:`banana`,label:`Banana`}),(0,s.jsx)(i,{value:`cherry`,label:`Cherry`})]})}var l=[`default`,`primary`,`success`,`warning`,`error`];function u(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,s.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16},children:l.map(e=>(0,s.jsx)(i,{name:`type-${e}`,type:e,label:e,defaultChecked:!0},e))}),(0,s.jsxs)(r,{name:`custom-color`,ariaLabel:`Custom color`,defaultValue:`violet`,direction:`horizontal`,color:`#7c3aed`,children:[(0,s.jsx)(i,{value:`violet`,label:`Custom color`}),(0,s.jsx)(i,{value:`other`,label:`Other`})]})]})}var d=e(t(),1);function f(){let[e,t]=(0,d.useState)(`pro`);return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(r,{name:`plan`,label:`Plan`,value:e,onChange:e=>t(e),children:[(0,s.jsx)(i,{value:`free`,label:`Free`}),(0,s.jsx)(i,{value:`pro`,label:`Pro`}),(0,s.jsx)(i,{value:`team`,label:`Team`})]}),(0,s.jsxs)(`p`,{children:[`Selected plan: `,e]})]})}function p(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,s.jsxs)(r,{name:`partly-disabled`,label:`Partly disabled`,defaultValue:`a`,direction:`horizontal`,children:[(0,s.jsx)(i,{value:`a`,label:`Available`}),(0,s.jsx)(i,{value:`b`,label:`Sold out`,disabled:!0})]}),(0,s.jsxs)(r,{name:`all-disabled`,label:`Disabled group`,defaultValue:`a`,direction:`horizontal`,disabled:!0,children:[(0,s.jsx)(i,{value:`a`,label:`Option A`}),(0,s.jsx)(i,{value:`b`,label:`Option B`})]})]})}function m(){return(0,s.jsxs)(r,{name:`shipping`,label:`Shipping method`,defaultValue:`standard`,direction:`horizontal`,children:[(0,s.jsx)(i,{value:`standard`,label:`Standard`}),(0,s.jsx)(i,{value:`express`,label:`Express`}),(0,s.jsx)(i,{value:`pickup`,label:`Store pickup`})]})}var h=[`small`,`medium`,`large`];function g(){return(0,s.jsx)(`div`,{style:{display:`grid`,gap:12},children:h.map(e=>(0,s.jsxs)(r,{name:`size-${e}`,ariaLabel:`${e} options`,defaultValue:`a`,direction:`horizontal`,size:e,children:[(0,s.jsx)(i,{value:`a`,label:`${e} A`}),(0,s.jsx)(i,{value:`b`,label:`${e} B`})]},e))})}function _(){let[e,t]=(0,d.useState)();return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,s.jsxs)(r,{name:`t-shirt`,label:`T-shirt size`,value:e,onChange:e=>t(e),direction:`horizontal`,required:!0,error:e===void 0,helperText:e===void 0?`Please choose a size`:`Size ${e} selected`,children:[(0,s.jsx)(i,{value:`S`,label:`S`}),(0,s.jsx)(i,{value:`M`,label:`M`}),(0,s.jsx)(i,{value:`L`,label:`L`})]}),(0,s.jsx)(i,{name:`terms`,label:`I accept the terms`,error:!0,errorMessage:`You must accept the terms to continue`}),(0,s.jsx)(i,{name:`newsletter`,label:`Subscribe to the newsletter`,helperText:`We send at most one email per month`})]})}var v=a(Object.assign({"./demos/basic.tsx":c,"./demos/colors.tsx":u,"./demos/controlled.tsx":f,"./demos/disabled.tsx":p,"./demos/horizontal.tsx":m,"./demos/sizes.tsx":g,"./demos/validation.tsx":_}),Object.assign({"./demos/basic.tsx":`import { Radio, RadioGroup } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <RadioGroup name="fruit" label="Favourite fruit" defaultValue="apple">
      <Radio value="apple" label="Apple" />
      <Radio value="banana" label="Banana" />
      <Radio value="cherry" label="Cherry" />
    </RadioGroup>
  );
}
`,"./demos/colors.tsx":`import { Radio, RadioGroup } from "@minerva/lib-core";

const types = ["default", "primary", "success", "warning", "error"] as const;

export default function ColorsDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {types.map((type) => (
          <Radio
            key={type}
            name={\`type-\${type}\`}
            type={type}
            label={type}
            defaultChecked
          />
        ))}
      </div>
      <RadioGroup
        name="custom-color"
        ariaLabel="Custom color"
        defaultValue="violet"
        direction="horizontal"
        color="#7c3aed"
      >
        <Radio value="violet" label="Custom color" />
        <Radio value="other" label="Other" />
      </RadioGroup>
    </div>
  );
}
`,"./demos/controlled.tsx":`import { useState } from "react";
import { Radio, RadioGroup } from "@minerva/lib-core";

export default function ControlledDemo() {
  const [plan, setPlan] = useState<string | number>("pro");

  return (
    <div>
      <RadioGroup
        name="plan"
        label="Plan"
        value={plan}
        onChange={(value) => setPlan(value)}
      >
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
        <Radio value="team" label="Team" />
      </RadioGroup>
      <p>Selected plan: {plan}</p>
    </div>
  );
}
`,"./demos/disabled.tsx":`import { Radio, RadioGroup } from "@minerva/lib-core";

export default function DisabledDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <RadioGroup
        name="partly-disabled"
        label="Partly disabled"
        defaultValue="a"
        direction="horizontal"
      >
        <Radio value="a" label="Available" />
        <Radio value="b" label="Sold out" disabled />
      </RadioGroup>
      <RadioGroup
        name="all-disabled"
        label="Disabled group"
        defaultValue="a"
        direction="horizontal"
        disabled
      >
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    </div>
  );
}
`,"./demos/horizontal.tsx":`import { Radio, RadioGroup } from "@minerva/lib-core";

export default function HorizontalDemo() {
  return (
    <RadioGroup
      name="shipping"
      label="Shipping method"
      defaultValue="standard"
      direction="horizontal"
    >
      <Radio value="standard" label="Standard" />
      <Radio value="express" label="Express" />
      <Radio value="pickup" label="Store pickup" />
    </RadioGroup>
  );
}
`,"./demos/sizes.tsx":`import { Radio, RadioGroup } from "@minerva/lib-core";

const sizes = ["small", "medium", "large"] as const;

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {sizes.map((size) => (
        <RadioGroup
          key={size}
          name={\`size-\${size}\`}
          ariaLabel={\`\${size} options\`}
          defaultValue="a"
          direction="horizontal"
          size={size}
        >
          <Radio value="a" label={\`\${size} A\`} />
          <Radio value="b" label={\`\${size} B\`} />
        </RadioGroup>
      ))}
    </div>
  );
}
`,"./demos/validation.tsx":`import { useState } from "react";
import { Radio, RadioGroup } from "@minerva/lib-core";

export default function ValidationDemo() {
  const [size, setSize] = useState<string | number>();

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <RadioGroup
        name="t-shirt"
        label="T-shirt size"
        value={size}
        onChange={(value) => setSize(value)}
        direction="horizontal"
        required
        error={size === undefined}
        helperText={
          size === undefined ? "Please choose a size" : \`Size \${size} selected\`
        }
      >
        <Radio value="S" label="S" />
        <Radio value="M" label="M" />
        <Radio value="L" label="L" />
      </RadioGroup>
      <Radio
        name="terms"
        label="I accept the terms"
        error
        errorMessage="You must accept the terms to continue"
      />
      <Radio
        name="newsletter"
        label="Subscribe to the newsletter"
        helperText="We send at most one email per month"
      />
    </div>
  );
}
`})),y=()=>(0,s.jsx)(o,{id:`radio`,demos:v});export{y as default};