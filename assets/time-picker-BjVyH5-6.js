import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{i as ee,r as te}from"./iconBase-DWTUFqgC.js";import{Ht as i,i as a}from"./dist-BWNqkmth.js";import{a as o,c as ne,n as re,o as ie,s as ae,t as oe}from"./DocPage-DGOZswYH.js";function se(){let[e,t]=(0,s.useState)();return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(a,{onChange:t}),(0,c.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var s,c;function l(){return(l=e((()=>{s=t(),i(),c=n()})))()}function ce(){let[e,t]=(0,u.useState)(null);return(0,d.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,d.jsx)(a,{label:`Meeting time`,value:e,onChange:e=>t(e??null)}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,d.jsx)(r,{size:`small`,onClick:()=>t(f()),children:`Set to noon`}),(0,d.jsx)(r,{size:`small`,variant:`secondary`,onClick:()=>t(null),children:`Reset`})]}),(0,d.jsxs)(`p`,{children:[`Value: `,e?e.toLocaleTimeString():`null`]})]})}var u,d,f;function p(){return(p=e((()=>{u=t(),i(),d=n(),f=()=>{let e=new Date;return e.setHours(12,0,0,0),e}})))()}function le(){return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,m.jsx)(a,{defaultValue:h}),(0,m.jsx)(a,{defaultValue:h,clearable:!1})]})}var m,h;function g(){return(g=e((()=>{i(),m=n(),h=new Date,h.setHours(9,30,0)})))()}function ue(){return(0,_.jsx)(a,{defaultValue:v,disabled:!0})}var _,v;function y(){return(y=e((()=>{i(),_=n(),v=new Date,v.setHours(12,0,0)})))()}function de(){return(0,b.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,b.jsx)(a,{defaultValue:x,format:`HH:mm:ss`}),(0,b.jsx)(a,{defaultValue:x,format:`HH:mm`,showSecond:!1})]})}var b,x;function S(){return(S=e((()=>{i(),b=n(),x=new Date})))()}function fe(){return(0,C.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,C.jsx)(a,{size:`small`,placeholder:`Small`}),(0,C.jsx)(a,{size:`medium`,placeholder:`Medium`}),(0,C.jsx)(a,{size:`large`,placeholder:`Large`})]})}var C;function w(){return(w=e((()=>{i(),C=n()})))()}function pe(){return(0,T.jsx)(a,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var T;function E(){return(E=e((()=>{i(),T=n()})))()}function me(){return(0,D.jsx)(a,{format:`HH:mm`,showSecond:!1,minTime:O(9),maxTime:O(17,30),placeholder:`Office hours 09:00–17:30`})}var D,O;function k(){return(k=e((()=>{i(),D=n(),O=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n}})))()}function he(){return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,A.jsx)(a,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,A.jsx)(a,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var A;function j(){return(j=e((()=>{i(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { useState } from "react";
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
`})))()}var P;function F(){return(F=e((()=>{P=`import { useState } from "react";
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
`})))()}var I;function L(){return(L=e((()=>{I=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var R;function z(){return(z=e((()=>{R=`import { TimePicker } from "@minerva/lib-core";

const noon = new Date();
noon.setHours(12, 0, 0);

export default function DisabledDemo() {
  return <TimePicker defaultValue={noon} disabled />;
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { TimePicker } from "@minerva/lib-core";

const now = new Date();

export default function FormatsDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker defaultValue={now} format="HH:mm:ss" />
      <TimePicker defaultValue={now} format="HH:mm" showSecond={false} />
    </div>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { TimePicker } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker size="small" placeholder="Small" />
      <TimePicker size="medium" placeholder="Medium" />
      <TimePicker size="large" placeholder="Large" />
    </div>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var K;function q(){return(q=e((()=>{K=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{l(),p(),g(),y(),S(),w(),E(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),te(),re(),ne(),ie(),X=n(),Z=ae(Object.assign({"./demos/basic.tsx":se,"./demos/controlled.tsx":ce,"./demos/default-value.tsx":le,"./demos/disabled.tsx":ue,"./demos/formats.tsx":de,"./demos/sizes.tsx":fe,"./demos/steps.tsx":pe,"./demos/time-range.tsx":me,"./demos/twelve-hour.tsx":he}),Object.assign({"./demos/basic.tsx":M,"./demos/controlled.tsx":P,"./demos/default-value.tsx":I,"./demos/disabled.tsx":R,"./demos/formats.tsx":B,"./demos/sizes.tsx":H,"./demos/steps.tsx":W,"./demos/time-range.tsx":K,"./demos/twelve-hour.tsx":J})),Q=()=>{let{t:e}=ee();return(0,X.jsx)(oe,{id:`time-picker`,demos:Z,children:(0,X.jsxs)(`section`,{className:o.section,"aria-labelledby":`keyboard`,children:[(0,X.jsx)(`h2`,{id:`keyboard`,children:e(`docs.time-picker.keyboard.title`)}),(0,X.jsxs)(`ul`,{className:o.prose,children:[(0,X.jsx)(`li`,{children:e(`docs.time-picker.keyboard.open`)}),(0,X.jsx)(`li`,{children:e(`docs.time-picker.keyboard.navigate`)}),(0,X.jsx)(`li`,{children:e(`docs.time-picker.keyboard.select`)}),(0,X.jsx)(`li`,{children:e(`docs.time-picker.keyboard.close`)}),(0,X.jsx)(`li`,{children:e(`docs.time-picker.keyboard.typing`)})]})]})})}})))()}$();export{Q as default};