import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{c as r,n as i,s as ee,t as te}from"./DocPage-HgWiqH91.js";import{n as a,t as o}from"./Switch-NIu5m-a3.js";import{a as ne,d as re,g as s}from"./fa-DVUoKhNv.js";function ie(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{label:`Wi-Fi`,defaultChecked:!0}),(0,c.jsx)(o,{label:`Bluetooth`})]})}var c;function l(){return(l=e((()=>{a(),c=n()})))()}function ae(){let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(o,{"aria-label":`Data source`,offLabel:`Business BFF`,onLabel:`Mock response`,checked:e,onChange:t}),(0,d.jsx)(o,{variant:`segmented`,"aria-label":`Data source`,offLabel:`Business BFF`,onLabel:`Mock response`,checked:e,onChange:t})]})}var u,d;function f(){return(f=e((()=>{u=t(),a(),d=n()})))()}function oe(){return(0,p.jsx)(p.Fragment,{children:m.map(e=>(0,p.jsx)(o,{color:e,label:e,defaultChecked:!0},e))})}var p,m;function h(){return(h=e((()=>{a(),p=n(),m=[`primary`,`success`,`info`,`warning`,`danger`]})))()}function se(){let[e,t]=(0,g.useState)(!1);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{label:`Email notifications`,checked:e,onChange:e=>t(e)}),(0,_.jsxs)(`span`,{children:[`Notifications are `,e?`on`:`off`]})]})}var g,_;function v(){return(v=e((()=>{g=t(),a(),_=n()})))()}function ce(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{shape:`square`,label:`Square`,defaultChecked:!0}),(0,y.jsx)(o,{label:`No ripple`,ripple:!1}),(0,y.jsx)(o,{label:`Custom track & thumb`,defaultChecked:!0,trackStyle:{background:`linear-gradient(90deg, #06b6d4, #3b82f6)`},thumbStyle:{boxShadow:`0 0 0 2px #3b82f6`}})]})}var y;function b(){return(b=e((()=>{a(),y=n()})))()}function le(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{label:`Dark mode`,icon:(0,x.jsx)(re,{size:10}),defaultChecked:!0}),(0,x.jsx)(o,{label:`Auto-save`,icon:(0,x.jsx)(ne,{size:10})})]})}var x;function S(){return(S=e((()=>{a(),s(),x=n()})))()}function C(){return(0,w.jsx)(w.Fragment,{children:T.map(e=>(0,w.jsx)(o,{label:`Label at ${e}`,labelPlacement:e,defaultChecked:!0},e))})}var w,T;function E(){return(E=e((()=>{a(),w=n(),T=[`start`,`end`,`top`,`bottom`]})))()}function D(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{size:`small`,label:`Small`,defaultChecked:!0}),(0,O.jsx)(o,{size:`medium`,label:`Medium`,defaultChecked:!0}),(0,O.jsx)(o,{size:`large`,label:`Large`,defaultChecked:!0})]})}var O;function k(){return(k=e((()=>{a(),O=n()})))()}function ue(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o,{label:`Loading`,loading:!0,defaultChecked:!0}),(0,A.jsx)(o,{label:`Disabled`,disabled:!0}),(0,A.jsx)(o,{label:`Disabled (on)`,disabled:!0,defaultChecked:!0})]})}var A;function j(){return(j=e((()=>{a(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { Switch } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <>
      <Switch label="Wi-Fi" defaultChecked />
      <Switch label="Bluetooth" />
    </>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { useState } from "react";
import { Switch } from "@minerva/lib-core";

export default function BilateralAndSegmentedDemo() {
  const [mock, setMock] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Switch
        aria-label="Data source"
        offLabel="Business BFF"
        onLabel="Mock response"
        checked={mock}
        onChange={setMock}
      />
      <Switch
        variant="segmented"
        aria-label="Data source"
        offLabel="Business BFF"
        onLabel="Mock response"
        checked={mock}
        onChange={setMock}
      />
    </div>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Switch } from "@minerva/lib-core";

const colors = ["primary", "success", "info", "warning", "danger"] as const;

export default function ColorsDemo() {
  return (
    <>
      {colors.map((color) => (
        <Switch key={color} color={color} label={color} defaultChecked />
      ))}
    </>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { useState } from "react";
import { Switch } from "@minerva/lib-core";

export default function ControlledDemo() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Switch
        label="Email notifications"
        checked={enabled}
        onChange={(checked) => setEnabled(checked)}
      />
      <span>Notifications are {enabled ? "on" : "off"}</span>
    </>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Switch } from "@minerva/lib-core";

export default function CustomStyleDemo() {
  return (
    <>
      <Switch shape="square" label="Square" defaultChecked />
      <Switch label="No ripple" ripple={false} />
      <Switch
        label="Custom track & thumb"
        defaultChecked
        trackStyle={{ background: "linear-gradient(90deg, #06b6d4, #3b82f6)" }}
        thumbStyle={{ boxShadow: "0 0 0 2px #3b82f6" }}
      />
    </>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Switch } from "@minerva/lib-core";
import { FaCheck, FaMoon } from "react-icons/fa";

export default function IconsDemo() {
  return (
    <>
      <Switch label="Dark mode" icon={<FaMoon size={10} />} defaultChecked />
      <Switch label="Auto-save" icon={<FaCheck size={10} />} />
    </>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Switch } from "@minerva/lib-core";

const placements = ["start", "end", "top", "bottom"] as const;

export default function LabelPlacementDemo() {
  return (
    <>
      {placements.map((placement) => (
        <Switch
          key={placement}
          label={\`Label at \${placement}\`}
          labelPlacement={placement}
          defaultChecked
        />
      ))}
    </>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Switch } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <Switch size="small" label="Small" defaultChecked />
      <Switch size="medium" label="Medium" defaultChecked />
      <Switch size="large" label="Large" defaultChecked />
    </>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Switch } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <Switch label="Loading" loading defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled (on)" disabled defaultChecked />
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{l(),f(),h(),v(),b(),S(),E(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),i(),r(),X=n(),Z=ee(Object.assign({"./demos/basic.tsx":ie,"./demos/bilateral-and-segmented.tsx":ae,"./demos/colors.tsx":oe,"./demos/controlled.tsx":se,"./demos/custom-style.tsx":ce,"./demos/icons.tsx":le,"./demos/label-placement.tsx":C,"./demos/sizes.tsx":D,"./demos/states.tsx":ue}),Object.assign({"./demos/basic.tsx":M,"./demos/bilateral-and-segmented.tsx":P,"./demos/colors.tsx":I,"./demos/controlled.tsx":R,"./demos/custom-style.tsx":B,"./demos/icons.tsx":H,"./demos/label-placement.tsx":W,"./demos/sizes.tsx":K,"./demos/states.tsx":J})),Q=()=>(0,X.jsx)(te,{id:`switch`,demos:Z})})))()}$();export{Q as default};