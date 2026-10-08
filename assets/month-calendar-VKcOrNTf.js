import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{H as r,Ot as i,Rt as a,Xt as o,at as s,en as c,x as l,xt as u}from"./minerva-web-components-gmidRbuG.js";import{m as ee,n as te,p as d,t as f}from"./DocPage-OkRujup2.js";import{Q as p,Z as ne}from"./io5-CFVaALQJ.js";import{n as m,t as re}from"./useI18n-7NNo_JVm.js";import{t as h}from"./stylingHooks-GjssfG7q.js";import{S as ie,T as ae,g as oe,t as se}from"./icons-Dj0E45-e.js";import{t as g}from"./direction-DP7if3Ff.js";var ce,le,_,v,y,b,x,S,C,w,ue,de,T,fe,E,D,pe,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{ce=`_monthCalendar_v6erv_1`,le=`_toolbar_v6erv_9`,_=`_heading_v6erv_18`,v=`_navigation_v6erv_26`,y=`_eventButton_v6erv_32`,b=`_day_v6erv_32`,x=`_navButton_v6erv_32`,S=`_iconButton_v6erv_71`,C=`_grid_v6erv_82`,w=`_week_v6erv_87`,ue=`_weekday_v6erv_94`,de=`_dayNumber_v6erv_118`,T=`_inRange_v6erv_136`,fe=`_rangeStart_v6erv_139`,E=`_rangeEnd_v6erv_139`,D=`_count_v6erv_149`,pe=`_hasEvents_v6erv_149`,O=`_events_v6erv_193`,k=`_eventsHeading_v6erv_202`,A=`_eventList_v6erv_212`,j=`_eventItem_v6erv_220`,M=`_empty_v6erv_246`,N=`_small_v6erv_251`,P=`_large_v6erv_282`,F={monthCalendar:ce,toolbar:le,heading:_,navigation:v,eventButton:y,day:b,navButton:x,iconButton:S,grid:C,week:w,weekday:ue,dayNumber:de,inRange:T,rangeStart:fe,rangeEnd:E,count:D,hasEvents:pe,events:O,eventsHeading:k,eventList:A,eventItem:j,empty:M,small:N,large:P}})))()}var L,R,me,he,z,B;function V(){return(V=e((()=>{i(),m(),ae(),p(),g(),I(),L=t(),R=n(),me=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],he=[],z=/^\d{4}-\d{2}-\d{2}$/,B=({month:e,defaultMonth:t,onMonthChange:n,value:i,defaultValue:ee,onChange:te,events:d=he,onEventClick:f,rangeStart:p,rangeEnd:m,size:ae=`medium`,disabled:g=!1,showSelectedDayEvents:ce=!0,"aria-label":le,previousMonthLabel:_,nextMonthLabel:v,todayLabel:y,emptyEventsText:b,locale:x,weekdayLabels:S,getDayLabel:C,getEventsLabel:w,className:ue,ref:de})=>{let{t:T,language:fe}=re(),E=(0,L.useId)(),[D,pe]=ne({value:e,defaultValue:()=>o(t??new Date),onChange:n,name:`MonthCalendar`,prop:`month`}),[O,k]=ne({value:i,defaultValue:ee,onChange:e=>{e!==void 0&&te?.(e)},name:`MonthCalendar`}),[A,j]=(0,L.useState)(``),M=(0,L.useRef)(new Map),N=(0,L.useRef)(null),P=o(D),I=u(P,-((P.getDay()+6)%7)),B=Array.from({length:42},(e,t)=>u(I,t)),V=B.map(r),H=new Date,U=r(H),W=[A,O,a(H,D)?U:``,r(P)].find(e=>e&&V.includes(e)),G=r(P),K=new Map;for(let e of d)K.set(e.date,(K.get(e.date)??0)+1);let q=d.filter(e=>e.date===O),J=p&&m&&z.test(p)&&z.test(m)?[p,m].sort():void 0;(0,L.useEffect)(()=>{if(g||!N.current)return;let e=M.current.get(N.current);e&&(N.current=null,e.focus())},[G,A,g]);let Y=e=>pe(o(e)),X=e=>{g||(k(r(e)),a(e,D)||Y(e))},Z=(e,t)=>{if(g)return;if(e.key===`Enter`||e.key===` `){e.preventDefault(),e.repeat||X(t);return}let n,i=(t.getDay()+6)%7;switch(l(e.key,e.currentTarget)){case`ArrowLeft`:n=u(t,-1);break;case`ArrowRight`:n=u(t,1);break;case`ArrowUp`:n=u(t,-7);break;case`ArrowDown`:n=u(t,7);break;case`Home`:n=u(t,-i);break;case`End`:n=u(t,6-i);break;case`PageUp`:case`PageDown`:{let r=(e.key===`PageUp`?-1:1)*(e.shiftKey?12:1),i=o(t,r),a=u(o(i,1),-1).getDate();n=s(i.getFullYear(),i.getMonth(),Math.min(t.getDate(),a));break}default:return}e.preventDefault(),N.current=r(n),j(r(n)),a(n,D)||Y(n)},ge=new Intl.DateTimeFormat(x??fe,{year:`numeric`,month:`long`}).format(P);return(0,R.jsxs)(`section`,{ref:de,className:c(F.monthCalendar,F[ae],ue),"aria-label":le??T(`monthCalendar.label`),...h(`month-calendar`,`root`,{disabled:g,size:ae}),children:[(0,R.jsxs)(`div`,{className:F.toolbar,children:[(0,R.jsx)(`h2`,{id:E,className:F.heading,"aria-live":`polite`,...h(`month-calendar`,`heading`),children:ge}),(0,R.jsxs)(`div`,{className:F.navigation,children:[(0,R.jsx)(`button`,{type:`button`,className:c(F.navButton,F.iconButton),"aria-label":_??T(`monthCalendar.previousMonth`),disabled:g,...h(`month-calendar`,`nav-button`),onClick:()=>Y(o(D,-1)),children:(0,R.jsx)(ie,{"aria-hidden":!0,focusable:!1})}),(0,R.jsxs)(`button`,{type:`button`,className:F.navButton,disabled:g,...h(`month-calendar`,`nav-button`),onClick:()=>Y(new Date),children:[(0,R.jsx)(se,{"aria-hidden":!0,focusable:!1}),y??T(`monthCalendar.today`)]}),(0,R.jsx)(`button`,{type:`button`,className:c(F.navButton,F.iconButton),"aria-label":v??T(`monthCalendar.nextMonth`),disabled:g,...h(`month-calendar`,`nav-button`),onClick:()=>Y(o(D,1)),children:(0,R.jsx)(oe,{"aria-hidden":!0,focusable:!1})})]})]}),(0,R.jsxs)(`div`,{role:`grid`,"aria-labelledby":E,"aria-disabled":g||void 0,className:F.grid,...h(`month-calendar`,`grid`),children:[(0,R.jsx)(`div`,{role:`row`,className:F.week,children:me.map((e,t)=>(0,R.jsx)(`div`,{role:`columnheader`,className:F.weekday,children:S?.[t]??T(`monthCalendar.weekdays.${e}`)},e))}),Array.from({length:6},(e,t)=>(0,R.jsx)(`div`,{role:`row`,className:F.week,children:B.slice(t*7,t*7+7).map(e=>{let t=r(e),n=K.get(t)??0,i=O===t,o=!a(e,D),s=t===U,l=!!J&&t>=J[0]&&t<=J[1];return(0,R.jsxs)(`div`,{role:`gridcell`,className:c(F.day,l&&F.inRange,l&&t===J?.[0]&&F.rangeStart,l&&t===J?.[1]&&F.rangeEnd),...h(`month-calendar`,`day`,{selected:i,today:s,outside:o,disabled:g}),ref:e=>{e?M.current.set(t,e):M.current.delete(t)},"data-date":t,"aria-label":C?C(t,n):n?T(`monthCalendar.dayWithEvents`,{date:t,count:n}):t,"aria-selected":i,"aria-current":s?`date`:void 0,"aria-disabled":g||void 0,tabIndex:!g&&t===W?0:-1,onFocus:()=>j(t),onClick:()=>X(e),onKeyDown:t=>Z(t,e),children:[(0,R.jsx)(`span`,{className:F.dayNumber,children:e.getDate()}),(0,R.jsx)(`span`,{className:c(F.count,n>0&&F.hasEvents),"aria-hidden":!0,children:n?n>99?`99+`:n:` `})]},t)})},t))]}),ce&&O&&(0,R.jsxs)(`section`,{className:F.events,...h(`month-calendar`,`events`),"aria-label":w?w(O):T(`monthCalendar.eventsLabel`,{date:O}),children:[(0,R.jsx)(`h3`,{className:F.eventsHeading,children:O}),q.length?(0,R.jsx)(`ul`,{className:F.eventList,children:q.map(e=>(0,R.jsx)(`li`,{className:F.eventItem,children:f?(0,R.jsx)(`button`,{type:`button`,className:F.eventButton,...h(`month-calendar`,`event`),disabled:g,onClick:()=>f(e),children:e.title}):(0,R.jsx)(`span`,{...h(`month-calendar`,`event`),children:e.title})},e.id))}):(0,R.jsx)(`p`,{className:F.empty,...h(`month-calendar`,`empty`),children:b??T(`monthCalendar.noEvents`)})]})]})}})))()}function H(){let[e,t]=(0,U.useState)(K(3)),[n,r]=(0,U.useState)(``);return(0,W.jsxs)(`div`,{style:{maxWidth:560},children:[(0,W.jsx)(B,{value:e,onChange:t,events:q,onEventClick:e=>r(e.title)}),n&&(0,W.jsxs)(`p`,{children:[`Clicked: `,n]})]})}var U,W,G,K,q;function J(){return(J=e((()=>{U=t(),V(),W=n(),G=new Date,K=e=>`${G.getFullYear()}-${String(G.getMonth()+1).padStart(2,`0`)}-${String(e).padStart(2,`0`)}`,q=[{id:`1`,date:K(3),title:`Release v2.0`},{id:`2`,date:K(3),title:`Retrospective`},{id:`3`,date:K(12),title:`Design review`}]})))()}function Y(){let[e,t]=(0,X.useState)([`2026-03-09`,`2026-03-13`]),[n,r]=e;return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:560},children:[(0,Z.jsx)(B,{defaultMonth:new Date(2026,2,1),value:r??n,onChange:e=>t(r===void 0?[n,e]:[e]),rangeStart:n,rangeEnd:r??n,events:ge,showSelectedDayEvents:!1}),(0,Z.jsx)(`output`,{children:r===void 0?`From ${n}: pick the last day`:`From ${[n,r].sort().join(` to `)}`})]})}var X,Z,ge;function _e(){return(_e=e((()=>{X=t(),V(),Z=n(),ge=[{id:`1`,date:`2026-03-10`,title:`Offsite day 1`},{id:`2`,date:`2026-03-11`,title:`Offsite day 2`}]})))()}function ve(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:24,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,alignItems:`start`},children:[(0,Q.jsx)(B,{size:`small`,defaultMonth:new Date(2026,2,1),defaultValue:`2026-03-12`,events:$,showSelectedDayEvents:!1,"aria-label":`Compact calendar`}),(0,Q.jsx)(B,{size:`large`,defaultMonth:new Date(2026,2,1),defaultValue:`2026-03-12`,events:$,"aria-label":`Comfortable calendar`})]})}var Q,$;function ye(){return(ye=e((()=>{V(),Q=n(),$=[{id:`1`,date:`2026-03-02`,title:`Sprint planning`},{id:`2`,date:`2026-03-12`,title:`Design review`},{id:`3`,date:`2026-03-12`,title:`Customer call`},{id:`4`,date:`2026-03-19`,title:`Release 2.4`}]})))()}var be;function xe(){return(xe=e((()=>{be=`import { useState } from "react";
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
`})))()}var Ee,De,Oe;function ke(){return(ke=e((()=>{J(),_e(),ye(),xe(),Ce(),Te(),t(),te(),ee(),Ee=n(),De=d(Object.assign({"./demos/basic.tsx":H,"./demos/range.tsx":Y,"./demos/sizes.tsx":ve}),Object.assign({"./demos/basic.tsx":be,"./demos/range.tsx":Se,"./demos/sizes.tsx":we})),Oe=()=>(0,Ee.jsx)(f,{id:`month-calendar`,demos:De})})))()}ke();export{Oe as default};