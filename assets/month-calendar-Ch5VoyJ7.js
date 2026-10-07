import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Vt as r,j as i}from"./dist-dg6ajl7p.js";import{c as a,n as o,s,t as c}from"./DocPage-Kqmidh_0.js";function l(){let[e,t]=(0,u.useState)(p(3)),[n,r]=(0,u.useState)(``);return(0,d.jsxs)(`div`,{style:{maxWidth:560},children:[(0,d.jsx)(i,{value:e,onChange:t,events:m,onEventClick:e=>r(e.title)}),n&&(0,d.jsxs)(`p`,{children:[`Clicked: `,n]})]})}var u,d,f,p,m;function h(){return(h=e((()=>{u=t(),r(),d=n(),f=new Date,p=e=>`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,`0`)}-${String(e).padStart(2,`0`)}`,m=[{id:`1`,date:p(3),title:`Release v2.0`},{id:`2`,date:p(3),title:`Retrospective`},{id:`3`,date:p(12),title:`Design review`}]})))()}var g;function _(){return(_=e((()=>{g=`import { useState } from "react";
import { MonthCalendar } from "@minerva/lib-core";

const today = new Date();
const day = (d: number) =>
  \`\${today.getFullYear()}-\${String(today.getMonth() + 1).padStart(2, "0")}-\${String(d).padStart(2, "0")}\`;

const events = [
  { id: "1", date: day(3), title: "Release v2.0" },
  { id: "2", date: day(3), title: "Retrospective" },
  { id: "3", date: day(12), title: "Design review" },
];

export default function BasicDemo() {
  const [value, setValue] = useState(day(3));
  const [clicked, setClicked] = useState("");

  return (
    <div style={{ maxWidth: 560 }}>
      <MonthCalendar
        value={value}
        onChange={setValue}
        events={events}
        onEventClick={(event) => setClicked(event.title)}
      />
      {clicked && <p>Clicked: {clicked}</p>}
    </div>
  );
}
`})))()}var v,y,b;function x(){return(x=e((()=>{h(),_(),t(),o(),a(),v=n(),y=s(Object.assign({"./demos/basic.tsx":l}),Object.assign({"./demos/basic.tsx":g})),b=()=>(0,v.jsx)(c,{id:`month-calendar`,demos:y})})))()}x();export{b as default};