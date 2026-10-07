import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{V as r,Vt as i,nt as a,v as ee,y as te}from"./dist-dg6ajl7p.js";import{E as o,Y as ne}from"./registry-DOQVQ99a.js";import{c as re,n as s,s as ie,t as ae}from"./DocPage-Kqmidh_0.js";function oe(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{label:`Remember me`}),(0,c.jsx)(r,{label:`Checked by default`,defaultChecked:!0})]})}var c;function l(){return(l=e((()=>{i(),c=n()})))()}function se(){return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,u.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,u.jsx)(r,{defaultChecked:!0,children:`Primary`}),(0,u.jsx)(r,{color:`success`,defaultChecked:!0,children:`Success`}),(0,u.jsx)(r,{color:`warning`,defaultChecked:!0,children:`Warning`}),(0,u.jsx)(r,{color:`danger`,defaultChecked:!0,children:`Danger`})]}),(0,u.jsxs)(a,{invalid:!0,required:!0,children:[(0,u.jsx)(te,{children:`Terms`}),(0,u.jsx)(r,{children:`I accept the terms`}),(0,u.jsx)(ee,{children:`You must accept the terms`})]})]})}var u;function d(){return(d=e((()=>{i(),u=n()})))()}function ce(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{label:`Subscribe to the newsletter`,checked:e,onChange:t}),(0,p.jsx)(`span`,{children:e?`Subscribed`:`Not subscribed`})]})}var f,p;function m(){return(m=e((()=>{f=t(),i(),p=n()})))()}function le(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{label:`Custom colors`,defaultChecked:!0,boxColor:`#7c3aed`,boxBorderColor:`#7c3aed`,checkmarkColor:`#fde68a`}),(0,h.jsx)(r,{label:`Custom icon`,defaultChecked:!0,icon:(0,h.jsx)(o,{color:`#e11d48`})})]})}var h;function g(){return(g=e((()=>{i(),ne(),h=n()})))()}function ue(){let[e,t]=(0,_.useState)(!1);return(0,v.jsx)(r,{label:`I accept the terms and conditions`,checked:e,onChange:t,error:!e,helperText:e?`Thanks!`:`You must accept the terms to continue`})}var _,v;function y(){return(y=e((()=>{_=t(),i(),v=n()})))()}function de(){let[e,t]=(0,b.useState)([`Apple`]),n=e.length===S.length,i=e.length>0&&!n,a=(e,n)=>t(t=>n?[...t,e]:t.filter(t=>t!==e));return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,x.jsx)(r,{label:`Select all`,checked:n,indeterminate:i,onChange:e=>t(e?S:[])}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,paddingLeft:24},children:S.map(t=>(0,x.jsx)(r,{label:t,checked:e.includes(t),onChange:e=>a(t,e)},t))})]})}var b,x,S;function C(){return(C=e((()=>{b=t(),i(),x=n(),S=[`Apple`,`Banana`,`Cherry`]})))()}function w(){return(0,T.jsx)(T.Fragment,{children:E.map(e=>(0,T.jsx)(r,{label:e,labelPlacement:e},e))})}var T,E;function D(){return(D=e((()=>{i(),T=n(),E=[`start`,`end`,`top`,`bottom`]})))()}function fe(){return(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,O.jsx)(r,{label:`Small`,size:`small`,defaultChecked:!0}),(0,O.jsx)(r,{label:`Medium`,size:`medium`,defaultChecked:!0}),(0,O.jsx)(r,{label:`Large`,size:`large`,defaultChecked:!0})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,O.jsx)(r,{label:`Square`,shape:`square`,defaultChecked:!0}),(0,O.jsx)(r,{label:`Rounded`,shape:`rounded`,defaultChecked:!0}),(0,O.jsx)(r,{label:`Circle`,shape:`circle`,defaultChecked:!0})]})]})}var O;function k(){return(k=e((()=>{i(),O=n()})))()}function pe(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(r,{label:`Disabled`,disabled:!0}),(0,A.jsx)(r,{label:`Disabled and checked`,disabled:!0,defaultChecked:!0}),(0,A.jsx)(r,{label:`Required`,name:`terms`,required:!0})]})}var A;function j(){return(j=e((()=>{i(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { Checkbox } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <>
      <Checkbox label="Remember me" />
      <Checkbox label="Checked by default" defaultChecked />
    </>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@minerva/lib-core";

export default function ColorsAndFormControlDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 16 }}>
        <Checkbox defaultChecked>Primary</Checkbox>
        <Checkbox color="success" defaultChecked>
          Success
        </Checkbox>
        <Checkbox color="warning" defaultChecked>
          Warning
        </Checkbox>
        <Checkbox color="danger" defaultChecked>
          Danger
        </Checkbox>
      </div>
      <FormControl invalid required>
        <FormLabel>Terms</FormLabel>
        <Checkbox>I accept the terms</Checkbox>
        <FormErrorMessage>You must accept the terms</FormErrorMessage>
      </FormControl>
    </div>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
import { Checkbox } from "@minerva/lib-core";

export default function ControlledDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Checkbox
        label="Subscribe to the newsletter"
        checked={checked}
        onChange={setChecked}
      />
      <span>{checked ? "Subscribed" : "Not subscribed"}</span>
    </>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { Checkbox } from "@minerva/lib-core";
import { IoHeart } from "react-icons/io5";

export default function CustomStyleDemo() {
  return (
    <>
      <Checkbox
        label="Custom colors"
        defaultChecked
        boxColor="#7c3aed"
        boxBorderColor="#7c3aed"
        checkmarkColor="#fde68a"
      />
      <Checkbox
        label="Custom icon"
        defaultChecked
        icon={<IoHeart color="#e11d48" />}
      />
    </>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { useState } from "react";
import { Checkbox } from "@minerva/lib-core";

export default function ErrorDemo() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Checkbox
      label="I accept the terms and conditions"
      checked={accepted}
      onChange={setAccepted}
      error={!accepted}
      helperText={
        accepted ? "Thanks!" : "You must accept the terms to continue"
      }
    />
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { useState } from "react";
import { Checkbox } from "@minerva/lib-core";

const fruits = ["Apple", "Banana", "Cherry"];

export default function IndeterminateDemo() {
  const [selected, setSelected] = useState<string[]>(["Apple"]);
  const allChecked = selected.length === fruits.length;
  const someChecked = selected.length > 0 && !allChecked;

  const toggle = (fruit: string, checked: boolean) =>
    setSelected((prev) =>
      checked ? [...prev, fruit] : prev.filter((f) => f !== fruit),
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Checkbox
        label="Select all"
        checked={allChecked}
        indeterminate={someChecked}
        onChange={(checked) => setSelected(checked ? fruits : [])}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          paddingLeft: 24,
        }}
      >
        {fruits.map((fruit) => (
          <Checkbox
            key={fruit}
            label={fruit}
            checked={selected.includes(fruit)}
            onChange={(checked) => toggle(fruit, checked)}
          />
        ))}
      </div>
    </div>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Checkbox } from "@minerva/lib-core";

const placements = ["start", "end", "top", "bottom"] as const;

export default function LabelPlacementDemo() {
  return (
    <>
      {placements.map((placement) => (
        <Checkbox
          key={placement}
          label={placement}
          labelPlacement={placement}
        />
      ))}
    </>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Checkbox } from "@minerva/lib-core";

export default function SizesAndShapesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <Checkbox label="Small" size="small" defaultChecked />
        <Checkbox label="Medium" size="medium" defaultChecked />
        <Checkbox label="Large" size="large" defaultChecked />
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <Checkbox label="Square" shape="square" defaultChecked />
        <Checkbox label="Rounded" shape="rounded" defaultChecked />
        <Checkbox label="Circle" shape="circle" defaultChecked />
      </div>
    </div>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Checkbox } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled and checked" disabled defaultChecked />
      <Checkbox label="Required" name="terms" required />
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{l(),d(),m(),g(),y(),C(),D(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),s(),re(),X=n(),Z=ie(Object.assign({"./demos/basic.tsx":oe,"./demos/colors-and-form-control.tsx":se,"./demos/controlled.tsx":ce,"./demos/custom-style.tsx":le,"./demos/error.tsx":ue,"./demos/indeterminate.tsx":de,"./demos/label-placement.tsx":w,"./demos/sizes-and-shapes.tsx":fe,"./demos/states.tsx":pe}),Object.assign({"./demos/basic.tsx":M,"./demos/colors-and-form-control.tsx":P,"./demos/controlled.tsx":I,"./demos/custom-style.tsx":R,"./demos/error.tsx":B,"./demos/indeterminate.tsx":H,"./demos/label-placement.tsx":W,"./demos/sizes-and-shapes.tsx":K,"./demos/states.tsx":J})),Q=()=>(0,X.jsx)(ae,{id:`checkbox`,demos:Z})})))()}$();export{Q as default};