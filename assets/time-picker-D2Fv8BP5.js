import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{h as r,s as i}from"./dist-C3Cy1YK6.js";import{J as a}from"./registry-DXcVqgdp.js";import{i as o,r as s,t as c}from"./DocPage-DUnq_TLt.js";var l=e(t(),1),u=n();function d(){let[e,t]=(0,l.useState)();return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(i,{onChange:t}),(0,u.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var f=()=>{let e=new Date;return e.setHours(12,0,0,0),e};function p(){let[e,t]=(0,l.useState)(null);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,u.jsx)(i,{label:`Meeting time`,value:e,onChange:e=>t(e??null)}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,u.jsx)(r,{size:`small`,onClick:()=>t(f()),children:`Set to noon`}),(0,u.jsx)(r,{size:`small`,variant:`secondary`,onClick:()=>t(null),children:`Reset`})]}),(0,u.jsxs)(`p`,{children:[`Value: `,e?e.toLocaleTimeString():`null`]})]})}var m=new Date;m.setHours(9,30,0);function h(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,u.jsx)(i,{defaultValue:m}),(0,u.jsx)(i,{defaultValue:m,clearable:!1})]})}var g=new Date;g.setHours(12,0,0);function _(){return(0,u.jsx)(i,{defaultValue:g,disabled:!0})}var v=new Date;function y(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,u.jsx)(i,{defaultValue:v,format:`HH:mm:ss`}),(0,u.jsx)(i,{defaultValue:v,format:`HH:mm`,showSecond:!1})]})}function b(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,u.jsx)(i,{size:`small`,placeholder:`Small`}),(0,u.jsx)(i,{size:`medium`,placeholder:`Medium`}),(0,u.jsx)(i,{size:`large`,placeholder:`Large`})]})}function x(){return(0,u.jsx)(i,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var S=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n};function C(){return(0,u.jsx)(i,{format:`HH:mm`,showSecond:!1,minTime:S(9),maxTime:S(17,30),placeholder:`Office hours 09:00–17:30`})}function w(){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,u.jsx)(i,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,u.jsx)(i,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var T=o(Object.assign({"./demos/basic.tsx":d,"./demos/controlled.tsx":p,"./demos/default-value.tsx":h,"./demos/disabled.tsx":_,"./demos/formats.tsx":y,"./demos/sizes.tsx":b,"./demos/steps.tsx":x,"./demos/time-range.tsx":C,"./demos/twelve-hour.tsx":w}),Object.assign({"./demos/basic.tsx":`import { useState } from "react";
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
`,"./demos/controlled.tsx":`import { useState } from "react";
import { Button, TimePicker } from "@minerva/lib-core";

const noon = () => {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  return date;
};

export default function ControlledDemo() {
  // null keeps the picker controlled while it is empty
  const [time, setTime] = useState<Date | null>(null);

  return (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <TimePicker
        label="Meeting time"
        value={time}
        onChange={(date) => setTime(date ?? null)}
      />
      <div style={{ display: "flex", gap: 8 }}>
        <Button size="small" onClick={() => setTime(noon())}>
          Set to noon
        </Button>
        <Button size="small" variant="secondary" onClick={() => setTime(null)}>
          Reset
        </Button>
      </div>
      <p>Value: {time ? time.toLocaleTimeString() : "null"}</p>
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
`})),E=()=>{let{t:e}=a();return(0,u.jsx)(c,{id:`time-picker`,demos:T,children:(0,u.jsxs)(`section`,{className:s.section,"aria-labelledby":`keyboard`,children:[(0,u.jsx)(`h2`,{id:`keyboard`,children:e(`docs.time-picker.keyboard.title`)}),(0,u.jsxs)(`ul`,{className:s.prose,children:[(0,u.jsx)(`li`,{children:e(`docs.time-picker.keyboard.open`)}),(0,u.jsx)(`li`,{children:e(`docs.time-picker.keyboard.navigate`)}),(0,u.jsx)(`li`,{children:e(`docs.time-picker.keyboard.select`)}),(0,u.jsx)(`li`,{children:e(`docs.time-picker.keyboard.close`)}),(0,u.jsx)(`li`,{children:e(`docs.time-picker.keyboard.typing`)})]})]})})};export{E as default};