import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{Ht as r,it as i,mt as a,o,qt as s,t as ee,u as c,vt as te}from"./minerva-web-components-ByJsjP0z.js";import{m as ne,n as re,p as l,t as u}from"./DocPage-BIGX2Gcv.js";import{Q as d,Z as ie}from"./io5-C8BS_IfX.js";import{n as f,t as ae}from"./useI18n-Dk-DwhiM.js";import{t as p}from"./stylingHooks-GjssfG7q.js";import{S as oe,T as m,g as se,t as ce}from"./icons-Dj0E45-e.js";import{t as h}from"./direction-BqlSRjrA.js";var le,g,_,v,y,b,x,S,C,w,ue,de,T,fe,E,D,pe,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{le=`_monthCalendar_v6erv_1`,g=`_toolbar_v6erv_9`,_=`_heading_v6erv_18`,v=`_navigation_v6erv_26`,y=`_eventButton_v6erv_32`,b=`_day_v6erv_32`,x=`_navButton_v6erv_32`,S=`_iconButton_v6erv_71`,C=`_grid_v6erv_82`,w=`_week_v6erv_87`,ue=`_weekday_v6erv_94`,de=`_dayNumber_v6erv_118`,T=`_inRange_v6erv_136`,fe=`_rangeStart_v6erv_139`,E=`_rangeEnd_v6erv_139`,D=`_count_v6erv_149`,pe=`_hasEvents_v6erv_149`,O=`_events_v6erv_193`,k=`_eventsHeading_v6erv_202`,A=`_eventList_v6erv_212`,j=`_eventItem_v6erv_220`,M=`_empty_v6erv_246`,N=`_small_v6erv_251`,P=`_large_v6erv_282`,F={monthCalendar:le,toolbar:g,heading:_,navigation:v,eventButton:y,day:b,navButton:x,iconButton:S,grid:C,week:w,weekday:ue,dayNumber:de,inRange:T,rangeStart:fe,rangeEnd:E,count:D,hasEvents:pe,events:O,eventsHeading:k,eventList:A,eventItem:j,empty:M,small:N,large:P}})))()}var L,R,me,he,z,B;function V(){return(V=e((()=>{te(),f(),m(),d(),h(),I(),L=t(),R=n(),me=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],he=[],z=/^\d{4}-\d{2}-\d{2}$/,B=({month:e,defaultMonth:t,onMonthChange:n,value:te,defaultValue:ne,onChange:re,events:l=he,onEventClick:u,rangeStart:d,rangeEnd:f,size:m=`medium`,disabled:h=!1,showSelectedDayEvents:le=!0,"aria-label":g,previousMonthLabel:_,nextMonthLabel:v,todayLabel:y,emptyEventsText:b,locale:x,weekdayLabels:S,getDayLabel:C,getEventsLabel:w,className:ue,ref:de})=>{let{t:T,language:fe}=ae(),E=(0,L.useId)(),[D,pe]=ie({value:e,defaultValue:()=>r(t??new Date),onChange:n,name:`MonthCalendar`,prop:`month`}),[O,k]=ie({value:te,defaultValue:ne,onChange:e=>{e!==void 0&&re?.(e)},name:`MonthCalendar`}),[A,j]=(0,L.useState)(``),M=(0,L.useRef)(new Map),N=(0,L.useRef)(null),P=r(D),I=i(P,-((P.getDay()+6)%7)),B=Array.from({length:42},(e,t)=>i(I,t)),V=B.map(a),H=new Date,U=a(H),W=[A,O,s(H,D)?U:``,a(P)].find(e=>e&&V.includes(e)),G=a(P),K=new Map;for(let e of l)K.set(e.date,(K.get(e.date)??0)+1);let q=l.filter(e=>e.date===O),J=d&&f&&z.test(d)&&z.test(f)?[d,f].sort():void 0;(0,L.useEffect)(()=>{if(h||!N.current)return;let e=M.current.get(N.current);e&&(N.current=null,e.focus())},[G,A,h]);let Y=e=>pe(r(e)),X=e=>{h||(k(a(e)),s(e,D)||Y(e))},Z=(e,t)=>{if(h)return;if(e.key===`Enter`||e.key===` `){e.preventDefault(),e.repeat||X(t);return}let n,o=(t.getDay()+6)%7;switch(c(e.key,e.currentTarget)){case`ArrowLeft`:n=i(t,-1);break;case`ArrowRight`:n=i(t,1);break;case`ArrowUp`:n=i(t,-7);break;case`ArrowDown`:n=i(t,7);break;case`Home`:n=i(t,-o);break;case`End`:n=i(t,6-o);break;case`PageUp`:case`PageDown`:{let a=(e.key===`PageUp`?-1:1)*(e.shiftKey?12:1),o=r(t,a),s=i(r(o,1),-1).getDate();n=ee(o.getFullYear(),o.getMonth(),Math.min(t.getDate(),s));break}default:return}e.preventDefault(),N.current=a(n),j(a(n)),s(n,D)||Y(n)},ge=new Intl.DateTimeFormat(x??fe,{year:`numeric`,month:`long`}).format(P);return(0,R.jsxs)(`section`,{ref:de,className:o(F.monthCalendar,F[m],ue),"aria-label":g??T(`monthCalendar.label`),...p(`month-calendar`,`root`,{disabled:h,size:m}),children:[(0,R.jsxs)(`div`,{className:F.toolbar,children:[(0,R.jsx)(`h2`,{id:E,className:F.heading,"aria-live":`polite`,...p(`month-calendar`,`heading`),children:ge}),(0,R.jsxs)(`div`,{className:F.navigation,children:[(0,R.jsx)(`button`,{type:`button`,className:o(F.navButton,F.iconButton),"aria-label":_??T(`monthCalendar.previousMonth`),disabled:h,...p(`month-calendar`,`nav-button`),onClick:()=>Y(r(D,-1)),children:(0,R.jsx)(oe,{"aria-hidden":!0,focusable:!1})}),(0,R.jsxs)(`button`,{type:`button`,className:F.navButton,disabled:h,...p(`month-calendar`,`nav-button`),onClick:()=>Y(new Date),children:[(0,R.jsx)(ce,{"aria-hidden":!0,focusable:!1}),y??T(`monthCalendar.today`)]}),(0,R.jsx)(`button`,{type:`button`,className:o(F.navButton,F.iconButton),"aria-label":v??T(`monthCalendar.nextMonth`),disabled:h,...p(`month-calendar`,`nav-button`),onClick:()=>Y(r(D,1)),children:(0,R.jsx)(se,{"aria-hidden":!0,focusable:!1})})]})]}),(0,R.jsxs)(`div`,{role:`grid`,"aria-labelledby":E,"aria-disabled":h||void 0,className:F.grid,...p(`month-calendar`,`grid`),children:[(0,R.jsx)(`div`,{role:`row`,className:F.week,children:me.map((e,t)=>(0,R.jsx)(`div`,{role:`columnheader`,className:F.weekday,children:S?.[t]??T(`monthCalendar.weekdays.${e}`)},e))}),Array.from({length:6},(e,t)=>(0,R.jsx)(`div`,{role:`row`,className:F.week,children:B.slice(t*7,t*7+7).map(e=>{let t=a(e),n=K.get(t)??0,r=O===t,i=!s(e,D),ee=t===U,c=!!J&&t>=J[0]&&t<=J[1];return(0,R.jsxs)(`div`,{role:`gridcell`,className:o(F.day,c&&F.inRange,c&&t===J?.[0]&&F.rangeStart,c&&t===J?.[1]&&F.rangeEnd),...p(`month-calendar`,`day`,{selected:r,today:ee,outside:i,disabled:h}),ref:e=>{e?M.current.set(t,e):M.current.delete(t)},"data-date":t,"aria-label":C?C(t,n):n?T(`monthCalendar.dayWithEvents`,{date:t,count:n}):t,"aria-selected":r,"aria-current":ee?`date`:void 0,"aria-disabled":h||void 0,tabIndex:!h&&t===W?0:-1,onFocus:()=>j(t),onClick:()=>X(e),onKeyDown:t=>Z(t,e),children:[(0,R.jsx)(`span`,{className:F.dayNumber,children:e.getDate()}),(0,R.jsx)(`span`,{className:o(F.count,n>0&&F.hasEvents),"aria-hidden":!0,children:n?n>99?`99+`:n:` `})]},t)})},t))]}),le&&O&&(0,R.jsxs)(`section`,{className:F.events,...p(`month-calendar`,`events`),"aria-label":w?w(O):T(`monthCalendar.eventsLabel`,{date:O}),children:[(0,R.jsx)(`h3`,{className:F.eventsHeading,children:O}),q.length?(0,R.jsx)(`ul`,{className:F.eventList,children:q.map(e=>(0,R.jsx)(`li`,{className:F.eventItem,children:u?(0,R.jsx)(`button`,{type:`button`,className:F.eventButton,...p(`month-calendar`,`event`),disabled:h,onClick:()=>u(e),children:e.title}):(0,R.jsx)(`span`,{...p(`month-calendar`,`event`),children:e.title})},e.id))}):(0,R.jsx)(`p`,{className:F.empty,...p(`month-calendar`,`empty`),children:b??T(`monthCalendar.noEvents`)})]})]})}})))()}function H(){let[e,t]=(0,U.useState)(K(3)),[n,r]=(0,U.useState)(``);return(0,W.jsxs)(`div`,{style:{maxWidth:560},children:[(0,W.jsx)(B,{value:e,onChange:t,events:q,onEventClick:e=>r(e.title)}),n&&(0,W.jsxs)(`p`,{children:[`Clicked: `,n]})]})}var U,W,G,K,q;function J(){return(J=e((()=>{U=t(),V(),W=n(),G=new Date,K=e=>`${G.getFullYear()}-${String(G.getMonth()+1).padStart(2,`0`)}-${String(e).padStart(2,`0`)}`,q=[{id:`1`,date:K(3),title:`Release v2.0`},{id:`2`,date:K(3),title:`Retrospective`},{id:`3`,date:K(12),title:`Design review`}]})))()}function Y(){let[e,t]=(0,X.useState)([`2026-03-09`,`2026-03-13`]),[n,r]=e;return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:560},children:[(0,Z.jsx)(B,{defaultMonth:new Date(2026,2,1),value:r??n,onChange:e=>t(r===void 0?[n,e]:[e]),rangeStart:n,rangeEnd:r??n,events:ge,showSelectedDayEvents:!1}),(0,Z.jsx)(`output`,{children:r===void 0?`From ${n}: pick the last day`:`From ${[n,r].sort().join(` to `)}`})]})}var X,Z,ge;function _e(){return(_e=e((()=>{X=t(),V(),Z=n(),ge=[{id:`1`,date:`2026-03-10`,title:`Offsite day 1`},{id:`2`,date:`2026-03-11`,title:`Offsite day 2`}]})))()}function ve(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:24,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,alignItems:`start`},children:[(0,Q.jsx)(B,{size:`small`,defaultMonth:new Date(2026,2,1),defaultValue:`2026-03-12`,events:$,showSelectedDayEvents:!1,"aria-label":`Compact calendar`}),(0,Q.jsx)(B,{size:`large`,defaultMonth:new Date(2026,2,1),defaultValue:`2026-03-12`,events:$,"aria-label":`Comfortable calendar`})]})}var Q,$;function ye(){return(ye=e((()=>{V(),Q=n(),$=[{id:`1`,date:`2026-03-02`,title:`Sprint planning`},{id:`2`,date:`2026-03-12`,title:`Design review`},{id:`3`,date:`2026-03-12`,title:`Customer call`},{id:`4`,date:`2026-03-19`,title:`Release 2.4`}]})))()}var be;function xe(){return(xe=e((()=>{be=`import { useState } from "react";
import { MonthCalendar } from "minerva-design";

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
import { MonthCalendar } from "minerva-design";

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
`})))()}var we;function Te(){return(Te=e((()=>{we=`import { MonthCalendar } from "minerva-design";

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
`})))()}var Ee,De,Oe;function ke(){return(ke=e((()=>{J(),_e(),ye(),xe(),Ce(),Te(),t(),re(),ne(),Ee=n(),De=l(Object.assign({"./demos/basic.tsx":H,"./demos/range.tsx":Y,"./demos/sizes.tsx":ve}),Object.assign({"./demos/basic.tsx":be,"./demos/range.tsx":Se,"./demos/sizes.tsx":we})),Oe=()=>(0,Ee.jsx)(u,{id:`month-calendar`,demos:De})})))()}ke();export{Oe as default};