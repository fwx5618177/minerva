import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{A as r}from"./dist-DAjZNDC0.js";import{i,t as a}from"./DocPage-B1L0vw6V.js";var o=e(t(),1),s=n();function c(){let[e,t]=(0,o.useState)();return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{onChange:t}),(0,s.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var l=new Date;l.setHours(9,30,0);function u(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,s.jsx)(r,{defaultValue:l}),(0,s.jsx)(r,{defaultValue:l,clearable:!1})]})}var d=new Date;d.setHours(12,0,0);function f(){return(0,s.jsx)(r,{defaultValue:d,disabled:!0})}var p=new Date;function m(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,s.jsx)(r,{defaultValue:p,format:`HH:mm:ss`}),(0,s.jsx)(r,{defaultValue:p,format:`HH:mm`,showSecond:!1})]})}function h(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,s.jsx)(r,{size:`small`,placeholder:`Small`}),(0,s.jsx)(r,{size:`medium`,placeholder:`Medium`}),(0,s.jsx)(r,{size:`large`,placeholder:`Large`})]})}function g(){return(0,s.jsx)(r,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var _=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n};function v(){return(0,s.jsx)(r,{format:`HH:mm`,showSecond:!1,minTime:_(9),maxTime:_(17,30),placeholder:`Office hours 09:00–17:30`})}function y(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,s.jsx)(r,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,s.jsx)(r,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var b=i(Object.assign({"./demos/basic.tsx":c,"./demos/default-value.tsx":u,"./demos/disabled.tsx":f,"./demos/formats.tsx":m,"./demos/sizes.tsx":h,"./demos/steps.tsx":g,"./demos/time-range.tsx":v,"./demos/twelve-hour.tsx":y}),Object.assign({"./demos/basic.tsx":`import { useState } from "react";
import { TimePicker } from "@minerva/lib-core";

export default function BasicDemo() {
  const [time, setTime] = useState<Date>();

  return (
    <div>
      <TimePicker onChange={setTime} />
      <p>Selected: {time ? time.toLocaleTimeString() : "none"}</p>
    </div>
  );
}
`,"./demos/default-value.tsx":`import { TimePicker } from "@minerva/lib-core";

const nineThirty = new Date();
nineThirty.setHours(9, 30, 0);

export default function DefaultValueDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker defaultValue={nineThirty} />
      <TimePicker defaultValue={nineThirty} clearable={false} />
    </div>
  );
}
`,"./demos/disabled.tsx":`import { TimePicker } from "@minerva/lib-core";

const noon = new Date();
noon.setHours(12, 0, 0);

export default function DisabledDemo() {
  return <TimePicker defaultValue={noon} disabled />;
}
`,"./demos/formats.tsx":`import { TimePicker } from "@minerva/lib-core";

const now = new Date();

export default function FormatsDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker defaultValue={now} format="HH:mm:ss" />
      <TimePicker defaultValue={now} format="HH:mm" showSecond={false} />
    </div>
  );
}
`,"./demos/sizes.tsx":`import { TimePicker } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker size="small" placeholder="Small" />
      <TimePicker size="medium" placeholder="Medium" />
      <TimePicker size="large" placeholder="Large" />
    </div>
  );
}
`,"./demos/steps.tsx":`import { TimePicker } from "@minerva/lib-core";

export default function StepsDemo() {
  return (
    <TimePicker
      format="HH:mm"
      showSecond={false}
      hourStep={2}
      minuteStep={15}
      placeholder="Every 2 h / 15 min"
    />
  );
}
`,"./demos/time-range.tsx":`import { TimePicker } from "@minerva/lib-core";

const at = (hours: number, minutes = 0) => {
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};

export default function TimeRangeDemo() {
  return (
    <TimePicker
      format="HH:mm"
      showSecond={false}
      minTime={at(9)}
      maxTime={at(17, 30)}
      placeholder="Office hours 09:00–17:30"
    />
  );
}
`,"./demos/twelve-hour.tsx":`import { TimePicker } from "@minerva/lib-core";

export default function TwelveHourDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker use12Hours format="hh:mm:ss a" placeholder="hh:mm:ss AM" />
      <TimePicker
        use12Hours
        format="hh:mm a"
        showSecond={false}
        placeholder="hh:mm AM"
      />
    </div>
  );
}
`})),x=()=>(0,s.jsx)(a,{id:`time-picker`,demos:b});export{x as default};