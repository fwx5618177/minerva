import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Rt as r,vn as i,wt as a}from"./dist-DkgrNLMS.js";import{c as o,n as s,s as c,t as l}from"./DocPage-Bnv84vTs.js";function u(){return(0,d.jsxs)(a,{name:`fruit`,label:`Favourite fruit`,defaultValue:`apple`,children:[(0,d.jsx)(i,{value:`apple`,label:`Apple`}),(0,d.jsx)(i,{value:`banana`,label:`Banana`}),(0,d.jsx)(i,{value:`cherry`,label:`Cherry`})]})}var d;function f(){return(f=e((()=>{r(),d=n()})))()}function p(){return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,m.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16},children:h.map(e=>(0,m.jsx)(i,{name:`color-${e}`,color:e,label:e,defaultChecked:!0},e))}),(0,m.jsxs)(a,{name:`group-color`,ariaLabel:`Group color`,defaultValue:`approve`,direction:`horizontal`,color:`success`,children:[(0,m.jsx)(i,{value:`approve`,label:`Approve`}),(0,m.jsx)(i,{value:`later`,label:`Later`,color:`danger`})]})]})}var m,h;function g(){return(g=e((()=>{r(),m=n(),h=[`primary`,`success`,`warning`,`danger`]})))()}function _(){let[e,t]=(0,v.useState)(`pro`);return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(a,{name:`plan`,label:`Plan`,value:e,onChange:e=>t(e),children:[(0,y.jsx)(i,{value:`free`,label:`Free`}),(0,y.jsx)(i,{value:`pro`,label:`Pro`}),(0,y.jsx)(i,{value:`team`,label:`Team`})]}),(0,y.jsxs)(`p`,{children:[`Selected plan: `,e]})]})}var v,y;function b(){return(b=e((()=>{v=t(),r(),y=n()})))()}function x(){return(0,S.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,S.jsxs)(a,{name:`partly-disabled`,label:`Partly disabled`,defaultValue:`a`,direction:`horizontal`,children:[(0,S.jsx)(i,{value:`a`,label:`Available`}),(0,S.jsx)(i,{value:`b`,label:`Sold out`,disabled:!0})]}),(0,S.jsxs)(a,{name:`all-disabled`,label:`Disabled group`,defaultValue:`a`,direction:`horizontal`,disabled:!0,children:[(0,S.jsx)(i,{value:`a`,label:`Option A`}),(0,S.jsx)(i,{value:`b`,label:`Option B`})]})]})}var S;function C(){return(C=e((()=>{r(),S=n()})))()}function w(){return(0,T.jsxs)(a,{name:`shipping`,label:`Shipping method`,defaultValue:`standard`,direction:`horizontal`,children:[(0,T.jsx)(i,{value:`standard`,label:`Standard`}),(0,T.jsx)(i,{value:`express`,label:`Express`}),(0,T.jsx)(i,{value:`pickup`,label:`Store pickup`})]})}var T;function E(){return(E=e((()=>{r(),T=n()})))()}function D(){return(0,O.jsx)(`div`,{style:{display:`grid`,gap:12},children:k.map(e=>(0,O.jsxs)(a,{name:`size-${e}`,ariaLabel:`${e} options`,defaultValue:`a`,direction:`horizontal`,size:e,children:[(0,O.jsx)(i,{value:`a`,label:`${e} A`}),(0,O.jsx)(i,{value:`b`,label:`${e} B`})]},e))})}var O,k;function A(){return(A=e((()=>{r(),O=n(),k=[`small`,`medium`,`large`]})))()}function j(){let[e,t]=(0,M.useState)();return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,N.jsxs)(a,{name:`t-shirt`,label:`T-shirt size`,value:e,onChange:e=>t(e),direction:`horizontal`,required:!0,error:e===void 0,helperText:e===void 0?`Please choose a size`:`Size ${e} selected`,children:[(0,N.jsx)(i,{value:`S`,label:`S`}),(0,N.jsx)(i,{value:`M`,label:`M`}),(0,N.jsx)(i,{value:`L`,label:`L`})]}),(0,N.jsx)(i,{name:`terms`,label:`I accept the terms`,error:!0,errorMessage:`You must accept the terms to continue`}),(0,N.jsx)(i,{name:`newsletter`,label:`Subscribe to the newsletter`,helperText:`We send at most one email per month`})]})}var M,N;function P(){return(P=e((()=>{M=t(),r(),N=n()})))()}var F;function I(){return(I=e((()=>{F=`import { Radio, RadioGroup } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <RadioGroup name="fruit" label="Favourite fruit" defaultValue="apple">
      <Radio value="apple" label="Apple" />
      <Radio value="banana" label="Banana" />
      <Radio value="cherry" label="Cherry" />
    </RadioGroup>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { Radio, RadioGroup } from "@minerva/lib-core";

const colors = ["primary", "success", "warning", "danger"] as const;

export default function ColorsDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {colors.map((color) => (
          <Radio
            key={color}
            name={\`color-\${color}\`}
            color={color}
            label={color}
            defaultChecked
          />
        ))}
      </div>
      <RadioGroup
        name="group-color"
        ariaLabel="Group color"
        defaultValue="approve"
        direction="horizontal"
        color="success"
      >
        <Radio value="approve" label="Approve" />
        <Radio value="later" label="Later" color="danger" />
      </RadioGroup>
    </div>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { useState } from "react";
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
`})))()}var V;function H(){return(H=e((()=>{V=`import { Radio, RadioGroup } from "@minerva/lib-core";

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
`})))()}var U;function W(){return(W=e((()=>{U=`import { Radio, RadioGroup } from "@minerva/lib-core";

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
`})))()}var G;function K(){return(K=e((()=>{G=`import { Radio, RadioGroup } from "@minerva/lib-core";

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
`})))()}var q;function J(){return(J=e((()=>{q=`import { useState } from "react";
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
`})))()}var Y,X,Z;function Q(){return(Q=e((()=>{f(),g(),b(),C(),E(),A(),P(),I(),R(),B(),H(),W(),K(),J(),t(),s(),o(),Y=n(),X=c(Object.assign({"./demos/basic.tsx":u,"./demos/colors.tsx":p,"./demos/controlled.tsx":_,"./demos/disabled.tsx":x,"./demos/horizontal.tsx":w,"./demos/sizes.tsx":D,"./demos/validation.tsx":j}),Object.assign({"./demos/basic.tsx":F,"./demos/colors.tsx":L,"./demos/controlled.tsx":z,"./demos/disabled.tsx":V,"./demos/horizontal.tsx":U,"./demos/sizes.tsx":G,"./demos/validation.tsx":q})),Z=()=>(0,Y.jsx)(l,{id:`radio`,demos:X})})))()}Q();export{Z as default};