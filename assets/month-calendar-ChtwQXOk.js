import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{G as r,Jt as i,Ln as a,Mn as o,X as s,cn as c,et as ee,in as l}from"./minerva-web-components-e9i9Tzii.js";import{m as te,n as ne,p as re,t as u}from"./DocPage-9P1WMt4D.js";import{Q as d,Z as ie}from"./io5-ChQeTV8D.js";import{n as f,t as ae}from"./useI18n-Brv-VDVY.js";import{t as p}from"./stylingHooks-GjssfG7q.js";import{S as oe,T as m,g as se,t as ce}from"./icons-C9qyBhWC.js";import{t as h}from"./direction-B2fcyo3I.js";var le,g,ue,de,_,v,y,b,x,S,fe,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{le=`_monthCalendar_v6erv_1`,g=`_toolbar_v6erv_9`,ue=`_heading_v6erv_18`,de=`_navigation_v6erv_26`,_=`_eventButton_v6erv_32`,v=`_day_v6erv_32`,y=`_navButton_v6erv_32`,b=`_iconButton_v6erv_71`,x=`_grid_v6erv_82`,S=`_week_v6erv_87`,fe=`_weekday_v6erv_94`,C=`_dayNumber_v6erv_118`,w=`_inRange_v6erv_136`,T=`_rangeStart_v6erv_139`,E=`_rangeEnd_v6erv_139`,D=`_count_v6erv_149`,O=`_hasEvents_v6erv_149`,k=`_events_v6erv_193`,A=`_eventsHeading_v6erv_202`,j=`_eventList_v6erv_212`,M=`_eventItem_v6erv_220`,N=`_empty_v6erv_246`,P=`_small_v6erv_251`,F=`_large_v6erv_282`,I={monthCalendar:le,toolbar:g,heading:ue,navigation:de,eventButton:_,day:v,navButton:y,iconButton:b,grid:x,week:S,weekday:fe,dayNumber:C,inRange:w,rangeStart:T,rangeEnd:E,count:D,hasEvents:O,events:k,eventsHeading:A,eventList:j,eventItem:M,empty:N,small:P,large:F}})))()}var R,z,pe,me,B,V;function H(){return(H=e((()=>{c(),f(),m(),d(),h(),L(),R=t(),z=n(),pe=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],me=[],B=/^\d{4}-\d{2}-\d{2}$/,V=({month:e,defaultMonth:t,onMonthChange:n,value:c,defaultValue:te,onChange:ne,events:re=me,onEventClick:u,rangeStart:d,rangeEnd:f,size:m=`medium`,disabled:h=!1,showSelectedDayEvents:le=!0,"aria-label":g,previousMonthLabel:ue,nextMonthLabel:de,todayLabel:_,emptyEventsText:v,locale:y,weekdayLabels:b,getDayLabel:x,getEventsLabel:S,className:fe,ref:C})=>{let{t:w,language:T}=ae(),E=(0,R.useId)(),[D,O]=ie({value:e,defaultValue:()=>o(t??new Date),onChange:n,name:`MonthCalendar`,prop:`month`}),[k,A]=ie({value:c,defaultValue:te,onChange:e=>{e!==void 0&&ne?.(e)},name:`MonthCalendar`}),[j,M]=(0,R.useState)(``),N=(0,R.useRef)(new Map),P=(0,R.useRef)(null),F=o(D),L=i(F,-((F.getDay()+6)%7)),V=Array.from({length:42},(e,t)=>i(L,t)),H=V.map(l),U=new Date,W=l(U),G=[j,k,a(U,D)?W:``,l(F)].find(e=>e&&H.includes(e)),K=l(F),q=new Map;for(let e of re)q.set(e.date,(q.get(e.date)??0)+1);let J=re.filter(e=>e.date===k),Y=d&&f&&B.test(d)&&B.test(f)?[d,f].sort():void 0;(0,R.useEffect)(()=>{if(h||!P.current)return;let e=N.current.get(P.current);e&&(P.current=null,e.focus())},[K,j,h]);let X=e=>O(o(e)),Z=e=>{h||(A(l(e)),a(e,D)||X(e))},Q=(e,t)=>{if(h)return;if(e.key===`Enter`||e.key===` `){e.preventDefault(),e.repeat||Z(t);return}let n,s=(t.getDay()+6)%7;switch(ee(e.key,e.currentTarget)){case`ArrowLeft`:n=i(t,-1);break;case`ArrowRight`:n=i(t,1);break;case`ArrowUp`:n=i(t,-7);break;case`ArrowDown`:n=i(t,7);break;case`Home`:n=i(t,-s);break;case`End`:n=i(t,6-s);break;case`PageUp`:case`PageDown`:{let a=(e.key===`PageUp`?-1:1)*(e.shiftKey?12:1),s=o(t,a),c=i(o(s,1),-1).getDate();n=r(s.getFullYear(),s.getMonth(),Math.min(t.getDate(),c));break}default:return}e.preventDefault(),P.current=l(n),M(l(n)),a(n,D)||X(n)},he=new Intl.DateTimeFormat(y??T,{year:`numeric`,month:`long`}).format(F);return(0,z.jsxs)(`section`,{ref:C,className:s(I.monthCalendar,I[m],fe),"aria-label":g??w(`monthCalendar.label`),...p(`month-calendar`,`root`,{disabled:h,size:m}),children:[(0,z.jsxs)(`div`,{className:I.toolbar,children:[(0,z.jsx)(`h2`,{id:E,className:I.heading,"aria-live":`polite`,...p(`month-calendar`,`heading`),children:he}),(0,z.jsxs)(`div`,{className:I.navigation,children:[(0,z.jsx)(`button`,{type:`button`,className:s(I.navButton,I.iconButton),"aria-label":ue??w(`monthCalendar.previousMonth`),disabled:h,...p(`month-calendar`,`nav-button`),onClick:()=>X(o(D,-1)),children:(0,z.jsx)(oe,{"aria-hidden":!0,focusable:!1})}),(0,z.jsxs)(`button`,{type:`button`,className:I.navButton,disabled:h,...p(`month-calendar`,`nav-button`),onClick:()=>X(new Date),children:[(0,z.jsx)(ce,{"aria-hidden":!0,focusable:!1}),_??w(`monthCalendar.today`)]}),(0,z.jsx)(`button`,{type:`button`,className:s(I.navButton,I.iconButton),"aria-label":de??w(`monthCalendar.nextMonth`),disabled:h,...p(`month-calendar`,`nav-button`),onClick:()=>X(o(D,1)),children:(0,z.jsx)(se,{"aria-hidden":!0,focusable:!1})})]})]}),(0,z.jsxs)(`div`,{role:`grid`,"aria-labelledby":E,"aria-disabled":h||void 0,className:I.grid,...p(`month-calendar`,`grid`),children:[(0,z.jsx)(`div`,{role:`row`,className:I.week,children:pe.map((e,t)=>(0,z.jsx)(`div`,{role:`columnheader`,className:I.weekday,children:b?.[t]??w(`monthCalendar.weekdays.${e}`)},e))}),Array.from({length:6},(e,t)=>(0,z.jsx)(`div`,{role:`row`,className:I.week,children:V.slice(t*7,t*7+7).map(e=>{let t=l(e),n=q.get(t)??0,r=k===t,i=!a(e,D),o=t===W,c=!!Y&&t>=Y[0]&&t<=Y[1];return(0,z.jsxs)(`div`,{role:`gridcell`,className:s(I.day,c&&I.inRange,c&&t===Y?.[0]&&I.rangeStart,c&&t===Y?.[1]&&I.rangeEnd),...p(`month-calendar`,`day`,{selected:r,today:o,outside:i,disabled:h}),ref:e=>{e?N.current.set(t,e):N.current.delete(t)},"data-date":t,"aria-label":x?x(t,n):n?w(`monthCalendar.dayWithEvents`,{date:t,count:n}):t,"aria-selected":r,"aria-current":o?`date`:void 0,"aria-disabled":h||void 0,tabIndex:!h&&t===G?0:-1,onFocus:()=>M(t),onClick:()=>Z(e),onKeyDown:t=>Q(t,e),children:[(0,z.jsx)(`span`,{className:I.dayNumber,children:e.getDate()}),(0,z.jsx)(`span`,{className:s(I.count,n>0&&I.hasEvents),"aria-hidden":!0,children:n?n>99?`99+`:n:` `})]},t)})},t))]}),le&&k&&(0,z.jsxs)(`section`,{className:I.events,...p(`month-calendar`,`events`),"aria-label":S?S(k):w(`monthCalendar.eventsLabel`,{date:k}),children:[(0,z.jsx)(`h3`,{className:I.eventsHeading,children:k}),J.length?(0,z.jsx)(`ul`,{className:I.eventList,children:J.map(e=>(0,z.jsx)(`li`,{className:I.eventItem,children:u?(0,z.jsx)(`button`,{type:`button`,className:I.eventButton,...p(`month-calendar`,`event`),disabled:h,onClick:()=>u(e),children:e.title}):(0,z.jsx)(`span`,{...p(`month-calendar`,`event`),children:e.title})},e.id))}):(0,z.jsx)(`p`,{className:I.empty,...p(`month-calendar`,`empty`),children:v??w(`monthCalendar.noEvents`)})]})]})}})))()}function U(){let[e,t]=(0,W.useState)(q(3)),[n,r]=(0,W.useState)(``);return(0,G.jsxs)(`div`,{style:{maxWidth:560},children:[(0,G.jsx)(V,{value:e,onChange:t,events:J,onEventClick:e=>r(e.title)}),n&&(0,G.jsxs)(`p`,{children:[`Clicked: `,n]})]})}var W,G,K,q,J;function Y(){return(Y=e((()=>{W=t(),H(),G=n(),K=new Date,q=e=>`${K.getFullYear()}-${String(K.getMonth()+1).padStart(2,`0`)}-${String(e).padStart(2,`0`)}`,J=[{id:`1`,date:q(3),title:`Release v2.0`},{id:`2`,date:q(3),title:`Retrospective`},{id:`3`,date:q(12),title:`Design review`}]})))()}function X(){let[e,t]=(0,Z.useState)([`2026-03-09`,`2026-03-13`]),[n,r]=e;return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:560},children:[(0,Q.jsx)(V,{defaultMonth:new Date(2026,2,1),value:r??n,onChange:e=>t(r===void 0?[n,e]:[e]),rangeStart:n,rangeEnd:r??n,events:he,showSelectedDayEvents:!1}),(0,Q.jsx)(`output`,{children:r===void 0?`From ${n}: pick the last day`:`From ${[n,r].sort().join(` to `)}`})]})}var Z,Q,he;function ge(){return(ge=e((()=>{Z=t(),H(),Q=n(),he=[{id:`1`,date:`2026-03-10`,title:`Offsite day 1`},{id:`2`,date:`2026-03-11`,title:`Offsite day 2`}]})))()}function _e(){return(0,$.jsxs)(`div`,{style:{display:`grid`,gap:24,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,alignItems:`start`},children:[(0,$.jsx)(V,{size:`small`,defaultMonth:new Date(2026,2,1),defaultValue:`2026-03-12`,events:ve,showSelectedDayEvents:!1,"aria-label":`Compact calendar`}),(0,$.jsx)(V,{size:`large`,defaultMonth:new Date(2026,2,1),defaultValue:`2026-03-12`,events:ve,"aria-label":`Comfortable calendar`})]})}var $,ve;function ye(){return(ye=e((()=>{H(),$=n(),ve=[{id:`1`,date:`2026-03-02`,title:`Sprint planning`},{id:`2`,date:`2026-03-12`,title:`Design review`},{id:`3`,date:`2026-03-12`,title:`Customer call`},{id:`4`,date:`2026-03-19`,title:`Release 2.4`}]})))()}var be;function xe(){return(xe=e((()=>{be=`import { useState } from "react";
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
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import { useState } from "react";
import { MonthCalendar } from "@minerva/lib-core";

const events = [
  { id: "1", date: "2026-03-10", title: "Offsite day 1" },
  { id: "2", date: "2026-03-11", title: "Offsite day 2" },
];

export default function RangeDemo() {
  const [range, setRange] = useState<[string, string?]>([
    "2026-03-09",
    "2026-03-13",
  ]);
  const [start, end] = range;

  // First click starts a new range, the second one closes it.
  const pick = (day: string) =>
    setRange(end === undefined ? [start, day] : [day]);

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 560 }}>
      <MonthCalendar
        defaultMonth={new Date(2026, 2, 1)}
        value={end ?? start}
        onChange={pick}
        rangeStart={start}
        rangeEnd={end ?? start}
        events={events}
        showSelectedDayEvents={false}
      />
      <output>
        {end === undefined
          ? \`From \${start}: pick the last day\`
          : \`From \${[start, end].sort().join(" to ")}\`}
      </output>
    </div>
  );
}
`})))()}var we;function Te(){return(Te=e((()=>{we=`import { MonthCalendar } from "@minerva/lib-core";

const events = [
  { id: "1", date: "2026-03-02", title: "Sprint planning" },
  { id: "2", date: "2026-03-12", title: "Design review" },
  { id: "3", date: "2026-03-12", title: "Customer call" },
  { id: "4", date: "2026-03-19", title: "Release 2.4" },
];

export default function SizesDemo() {
  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        alignItems: "start",
      }}
    >
      <MonthCalendar
        size="small"
        defaultMonth={new Date(2026, 2, 1)}
        defaultValue="2026-03-12"
        events={events}
        showSelectedDayEvents={false}
        aria-label="Compact calendar"
      />
      <MonthCalendar
        size="large"
        defaultMonth={new Date(2026, 2, 1)}
        defaultValue="2026-03-12"
        events={events}
        aria-label="Comfortable calendar"
      />
    </div>
  );
}
`})))()}var Ee,De,Oe;function ke(){return(ke=e((()=>{Y(),ge(),ye(),xe(),Ce(),Te(),t(),ne(),te(),Ee=n(),De=re(Object.assign({"./demos/basic.tsx":U,"./demos/range.tsx":X,"./demos/sizes.tsx":_e}),Object.assign({"./demos/basic.tsx":be,"./demos/range.tsx":Se,"./demos/sizes.tsx":we})),Oe=()=>(0,Ee.jsx)(u,{id:`month-calendar`,demos:De})})))()}ke();export{Oe as default};