import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{H as r,ct as i,tt as a}from"./dist-DAjZNDC0.js";import{i as o,t as s}from"./DocPage-B1L0vw6V.js";var c=n();function l(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{label:`Wi-Fi`,defaultChecked:!0}),(0,c.jsx)(r,{label:`Bluetooth`})]})}var u=[`primary`,`secondary`,`success`,`warning`,`error`];function d(){return(0,c.jsxs)(c.Fragment,{children:[u.map(e=>(0,c.jsx)(r,{color:e,label:e,defaultChecked:!0},e)),(0,c.jsx)(r,{color:`#7c3aed`,label:`#7c3aed`,defaultChecked:!0})]})}var f=e(t(),1);function p(){let[e,t]=(0,f.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{label:`Email notifications`,checked:e,onChange:e=>t(e)}),(0,c.jsxs)(`span`,{children:[`Notifications are `,e?`on`:`off`]})]})}function m(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{shape:`square`,label:`Square`,defaultChecked:!0}),(0,c.jsx)(r,{label:`No ripple`,ripple:!1}),(0,c.jsx)(r,{label:`Custom track & thumb`,defaultChecked:!0,trackStyle:{background:`linear-gradient(90deg, #06b6d4, #3b82f6)`},thumbStyle:{boxShadow:`0 0 0 2px #3b82f6`}})]})}function h(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{label:`Dark mode`,icon:(0,c.jsx)(i,{size:10}),defaultChecked:!0}),(0,c.jsx)(r,{label:`Auto-save`,icon:(0,c.jsx)(a,{size:10})})]})}function g(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{label:`Label at start`,labelPlacement:`start`,defaultChecked:!0}),(0,c.jsx)(r,{label:`Label at end`,labelPlacement:`end`,defaultChecked:!0})]})}function _(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{size:`small`,label:`Small`,defaultChecked:!0}),(0,c.jsx)(r,{size:`medium`,label:`Medium`,defaultChecked:!0}),(0,c.jsx)(r,{size:`large`,label:`Large`,defaultChecked:!0})]})}function v(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{label:`Loading`,loading:!0,defaultChecked:!0}),(0,c.jsx)(r,{label:`Disabled`,disabled:!0}),(0,c.jsx)(r,{label:`Disabled (on)`,disabled:!0,defaultChecked:!0})]})}var y=o(Object.assign({"./demos/basic.tsx":l,"./demos/colors.tsx":d,"./demos/controlled.tsx":p,"./demos/custom-style.tsx":m,"./demos/icons.tsx":h,"./demos/label-placement.tsx":g,"./demos/sizes.tsx":_,"./demos/states.tsx":v}),Object.assign({"./demos/basic.tsx":`import { Switch } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <>
      <Switch label="Wi-Fi" defaultChecked />
      <Switch label="Bluetooth" />
    </>
  );
}
`,"./demos/colors.tsx":`import { Switch } from "@minerva/lib-core";

const colors = ["primary", "secondary", "success", "warning", "error"];

export default function ColorsDemo() {
  return (
    <>
      {colors.map((color) => (
        <Switch key={color} color={color} label={color} defaultChecked />
      ))}
      <Switch color="#7c3aed" label="#7c3aed" defaultChecked />
    </>
  );
}
`,"./demos/controlled.tsx":`import { useState } from "react";
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
`,"./demos/custom-style.tsx":`import { Switch } from "@minerva/lib-core";

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
`,"./demos/icons.tsx":`import { Switch } from "@minerva/lib-core";
import { FaCheck, FaMoon } from "react-icons/fa";

export default function IconsDemo() {
  return (
    <>
      <Switch label="Dark mode" icon={<FaMoon size={10} />} defaultChecked />
      <Switch label="Auto-save" icon={<FaCheck size={10} />} />
    </>
  );
}
`,"./demos/label-placement.tsx":`import { Switch } from "@minerva/lib-core";

export default function LabelPlacementDemo() {
  return (
    <>
      <Switch label="Label at start" labelPlacement="start" defaultChecked />
      <Switch label="Label at end" labelPlacement="end" defaultChecked />
    </>
  );
}
`,"./demos/sizes.tsx":`import { Switch } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <Switch size="small" label="Small" defaultChecked />
      <Switch size="medium" label="Medium" defaultChecked />
      <Switch size="large" label="Large" defaultChecked />
    </>
  );
}
`,"./demos/states.tsx":`import { Switch } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <Switch label="Loading" loading defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled (on)" disabled defaultChecked />
    </>
  );
}
`})),b=()=>(0,c.jsx)(s,{id:`switch`,demos:y});export{b as default};