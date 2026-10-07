import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-EhfBFkcC.js";import{C as i,D as a,E as o,O as s,_ as c,c as l,g as u,i as d,k as f,n as p,r as m,s as h,t as g,w as _}from"./DocPage-BvqFnACE.js";import{n as v,t as ee}from"./useI18n-s5sAv-jy.js";import{n as te,t as y}from"./Button-CVTxJPft.js";import{E as ne,T as re,w as ie}from"./icons-BaZJL-85.js";import{i as ae,n as oe,r as b,t as se}from"./context-C6l3dqFj.js";import{t as ce}from"./dataAttributes-C-grv0bs.js";import{a as le,i as ue}from"./useFocusScope-B8T8EcYb.js";import{n as de,r as fe}from"./FloatingPanel-BtClgufo.js";import{n as pe,t as me}from"./IconButton-CIvDcJLq.js";import{n as he,t as ge}from"./Input-DiGy_IrH.js";import{n as _e,r as ve,t as ye}from"./tabbing-S4h_9RhK.js";import{Q as be,Z as xe}from"./sample-DdQB_zfN.js";var x,S,C,w,T,E,D;function O(){return(O=t((()=>{x=`_timePickerPanel_wmaox_1`,S=`_timeColumns_wmaox_10`,C=`_timeColumn_wmaox_10`,w=`_timeUnit_wmaox_30`,T=`_disabled_wmaox_39`,E=`_selected_wmaox_42`,D={timePickerPanel:x,timeColumns:S,timeColumn:C,timeUnit:w,disabled:T,selected:E}})))()}var k,A,j,Se;function M(){return(M=t((()=>{s(),v(),c(),O(),k=e(n(),1),A=r(),j=(e,t,n=0,r=()=>!1)=>{let i=[];for(let a=n;a<n+e;a+=Math.max(1,t))i.push({value:a,disabled:r(a),label:String(a).padStart(2,`0`)});return i},Se=k.memo(({value:e,hasValue:t=!0,use12Hours:n,showSecond:r,hourStep:i=1,minuteStep:a=1,secondStep:o=1,minTime:s,maxTime:c,onTimeChange:l,visible:d,focusOnOpen:p=!1})=>{let{t:m}=ee(),h=(0,k.useRef)(null),g=(0,k.useMemo)(()=>e??new Date(0),[e]),_=g.getHours(),v=g.getMinutes(),te=g.getSeconds(),y=_>=12,ne=e=>n?e%12+(y?12:0):e,re=j(n?12:24,i,+!!n,e=>{let t=n?e%12+(y?12:0):e;return!!(s&&t<s.getHours()||c&&t>c.getHours())}),ie=j(60,a,0,e=>!!(s&&_===s.getHours()&&e<s.getMinutes()||c&&_===c.getHours()&&e>c.getMinutes())),ae=j(60,o,0,e=>{let t=s&&_===s.getHours()&&v===s.getMinutes(),n=c&&_===c.getHours()&&v===c.getMinutes();return!!(t&&e<s.getSeconds()||n&&e>c.getSeconds())}),oe=[{value:0,label:`AM`,disabled:!1},{value:1,label:`PM`,disabled:!1}],b=[{kind:`hour`,label:m(`timePicker.hours`),items:re,selected:n?_%12||12:_,toValue:ne},{kind:`minute`,label:m(`timePicker.minutes`),items:ie,selected:v,toValue:e=>e}];r&&b.push({kind:`second`,label:m(`timePicker.seconds`),items:ae,selected:te,toValue:e=>e}),n&&b.push({kind:`ampm`,label:m(`timePicker.period`),items:oe,selected:+!!y,toValue:e=>e}),(0,k.useEffect)(()=>{d&&h.current?.querySelectorAll(`[aria-selected="true"]`).forEach(e=>e.scrollIntoView?.({block:`nearest`}))},[d]),(0,k.useEffect)(()=>{d&&p&&h.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus()},[d,p]);let se=(e,t)=>{let n=e.target,r=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)).filter(e=>e.getAttribute(`aria-disabled`)!==`true`),i=r.indexOf(n),a=e=>{(h.current?.querySelectorAll(`[role="listbox"]`)[e])?.querySelector(`[tabindex="0"]`)?.focus()};switch(u(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),r[Math.min(r.length-1,i+1)]?.focus();break;case`ArrowUp`:e.preventDefault(),r[Math.max(0,i-1)]?.focus();break;case`Home`:e.preventDefault(),r[0]?.focus();break;case`End`:e.preventDefault(),r[r.length-1]?.focus();break;case`ArrowRight`:e.preventDefault(),a(Math.min(b.length-1,t+1));break;case`ArrowLeft`:e.preventDefault(),a(Math.max(0,t-1))}},ce=(e,t,n)=>{n.disabled||l(e,t(n.value))};return(0,A.jsx)(`div`,{className:D.timePickerPanel,ref:h,children:(0,A.jsx)(`div`,{className:D.timeColumns,children:b.map((e,n)=>{let r=e.items.find(e=>!e.disabled)?.value,i=e.items.some(t=>t.value===e.selected&&!t.disabled)?e.selected:r;return(0,A.jsx)(`div`,{className:D.timeColumn,role:`listbox`,"aria-label":e.label,tabIndex:-1,onKeyDown:e=>se(e,n),children:e.items.map(n=>{let r=t&&n.value===e.selected;return(0,A.jsx)(`div`,{role:`option`,"aria-selected":r,"aria-disabled":n.disabled||void 0,tabIndex:n.value===i?0:-1,className:f(D.timeUnit,{[D.selected]:r,[D.disabled]:n.disabled}),onClick:()=>ce(e.kind,e.toValue,n),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),ce(e.kind,e.toValue,n))},children:n.label},n.value)})},e.kind)})})})})})))()}var N,P,Ce,we,Te,Ee,De;function Oe(){return(Oe=t((()=>{N=/(HH|H|hh|h|mm|m|ss|s|a)/g,P=e=>String(e).padStart(2,`0`),Ce=(e,t)=>{let n=e.getHours(),r=n%12||12,i={HH:P(n),H:String(n),hh:P(r),h:String(r),mm:P(e.getMinutes()),m:String(e.getMinutes()),ss:P(e.getSeconds()),s:String(e.getSeconds()),a:n>=12?`PM`:`AM`};return t.replace(N,e=>i[e])},we=(e,t,{strict:n,base:r})=>{let i=e.trim();if(!i)return;let a=t.match(N)??[];if(n){let e=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`).replace(N,e=>e===`a`?`\\s*([AaPp][Mm])`:`(\\d{${e.length===2?2:`1,2`}})`);if(!RegExp(`^${e}$`).test(i))return}let o=i.match(/\d+/g)??[],s=i.match(/[AaPp][Mm]/)?.[0]?.toUpperCase(),c=a.filter(e=>e!==`a`);if(o.length!==c.length)return;let l=c.some(e=>e.startsWith(`h`));if(l&&a.includes(`a`)&&!s)return;let u=0,d=0,f=0;if(c.forEach((e,t)=>{let n=Number(o[t]);e.startsWith(`H`)||e.startsWith(`h`)?u=n:e.startsWith(`m`)?d=n:f=n}),l){if(u<1||u>12)return;s===`PM`&&u<12&&(u+=12),s===`AM`&&u===12&&(u=0)}if(u>23||d>59||f>59)return;let p=new Date(r??new Date);return p.setHours(u,d,f,0),p},Te=()=>{let e=new Date;return e.setHours(0,0,0,0),e},Ee=e=>/(^|[^a-zA-Z])s{1,2}([^a-zA-Z]|$)/.test(e),De=(e,t)=>t?e:e.replace(/[:.\s]?s{1,2}(?![a-zA-Z])/,``)})))()}var F,I,L,R,z;function B(){return(B=t((()=>{F=`_timePicker_zkaej_1`,I=`_clearButton_zkaej_6`,L=`_clockIcon_zkaej_22`,R=`_popup_zkaej_29`,z={timePicker:F,clearButton:I,clockIcon:L,popup:R}})))()}var V,H,U;function W(){return(W=t((()=>{s(),v(),re(),o(),_(),oe(),ue(),fe(),pe(),ge(),M(),Oe(),ye(),B(),V=e(n(),1),H=r(),U=V.memo(({ref:e,value:t,defaultValue:n,onChange:r,format:o=`HH:mm:ss`,use12Hours:s=!1,placeholder:c,label:l,"aria-label":u,"aria-labelledby":d,"aria-describedby":p,id:m,required:h,readOnly:g,invalid:_,name:v=`time-picker`,disabled:te,clearable:y=!0,size:re=`medium`,className:oe=``,style:ue,minTime:fe,maxTime:pe,showSecond:ge=!0,hourStep:ye=1,minuteStep:be=1,secondStep:xe=1,onOpenChange:x,...S})=>{let C=De(o,ge),w=Ee(C),{t:T}=ee(),E=ae(),D=se({id:m,"aria-describedby":p}),O=te??E?.disabled??!1,k=g??E?.readOnly??!1,A=h??E?.required??!1,j=_??E?.invalid??!1,M=l??u??T(`timePicker.label`),N=d??(E&&!l&&!u?E.labelId:void 0),[P,Oe]=i({value:t,defaultValue:n??null,name:`TimePicker`}),[F,I]=i({defaultValue:!1,onChange:x,name:`TimePicker`,prop:`open`}),[L,R]=(0,V.useState)(null),[B,U]=(0,V.useState)(null),[W,ke]=(0,V.useState)(null),Ae=a(U,e),G=(0,V.useRef)(null),je=le(),[Me,K]=(0,V.useState)(!1),q=e=>{Oe(e),r?.(e??void 0)},Ne=(e,t)=>{let n=new Date(P??Te());if(e===`hour`)n.setHours(t);else if(e===`minute`)n.setMinutes(t);else if(e===`second`)n.setSeconds(t);else{let e=n.getHours()%12;n.setHours(t===1?e+12:e)}R(null),q(n)},Pe=e=>{R(e);let t=we(e,C,{strict:!0,base:P??void 0});t&&q(t)},Fe=()=>{if(L!==null){if(L.trim()===``)P&&q(null);else{let e=we(L,C,{strict:!1,base:P??void 0});e&&e.getTime()!==P?.getTime()&&q(e)}R(null)}},J=()=>{R(null),q(null),B?.focus()},Y=()=>{O||k||(K(!1),I(e=>!e))},Ie=e=>{let t=e.currentTarget;!B||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey||!_e(t,e.target,e.shiftKey)||(e.preventDefault(),(e.shiftKey?B:ve(B,je??B.ownerDocument.body,!1)??B).focus(),I(!1))},Le=L??(P?Ce(P,C):``);return(0,H.jsxs)(`div`,{...ce(S),ref:ke,className:f(z.timePicker,oe),style:ue,onClick:e=>{e.target===B&&Y()},children:[(0,H.jsx)(b.Provider,{value:null,children:(0,H.jsx)(he,{ref:Ae,value:Le,placeholder:c??T(`timePicker.placeholder`),id:D.id,"aria-label":M,"aria-labelledby":N,"aria-describedby":D[`aria-describedby`],"aria-invalid":j||void 0,"aria-readonly":k||void 0,required:A,readOnly:k,onChange:e=>Pe(e.target.value),onBlur:Fe,onKeyDown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),F?G.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus():(K(!0),I(!0)))},name:v,disabled:O,size:re,suffix:y&&P&&!O&&!k?(0,H.jsx)(me,{icon:(0,H.jsx)(ie,{"aria-hidden":!0,focusable:!1}),size:`small`,"aria-label":T(`timePicker.clear`),onClick:J,className:z.clearButton}):(0,H.jsx)(`span`,{className:z.clockIcon,"aria-hidden":`true`,children:(0,H.jsx)(ne,{})})})}),(0,H.jsx)(de,{ref:G,open:F&&!O&&!k,anchor:B,placement:`bottom-start`,branches:()=>[W],onDismiss:()=>I(!1),returnFocusOnEscape:()=>B,focusable:!0,role:`dialog`,tabIndex:-1,"aria-label":M,"aria-labelledby":N,className:z.popup,onKeyDown:Ie,children:(0,H.jsx)(Se,{value:P??Te(),hasValue:P!==null,format:C,use12Hours:s,showSecond:w,hourStep:ye,minuteStep:be,secondStep:xe,minTime:fe,maxTime:pe,onTimeChange:Ne,visible:F,focusOnOpen:Me})})]})})})))()}function ke(){let[e,t]=(0,Ae.useState)();return(0,G.jsxs)(`div`,{children:[(0,G.jsx)(U,{onChange:t}),(0,G.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var Ae,G;function je(){return(je=t((()=>{Ae=n(),W(),G=r()})))()}function Me(){let[e,t]=(0,K.useState)(null);return(0,q.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,q.jsx)(U,{label:`Meeting time`,value:e,onChange:e=>t(e??null)}),(0,q.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,q.jsx)(y,{size:`small`,onClick:()=>t(Ne()),children:`Set to noon`}),(0,q.jsx)(y,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(null),children:`Reset`})]}),(0,q.jsxs)(`p`,{children:[`Value: `,e?e.toLocaleTimeString():`null`]})]})}var K,q,Ne;function Pe(){return(Pe=t((()=>{K=n(),te(),W(),q=r(),Ne=()=>{let e=new Date;return e.setHours(12,0,0,0),e}})))()}function Fe(){return(0,J.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,J.jsx)(U,{defaultValue:Y}),(0,J.jsx)(U,{defaultValue:Y,clearable:!1})]})}var J,Y;function Ie(){return(Ie=t((()=>{W(),J=r(),Y=new Date,Y.setHours(9,30,0)})))()}function Le(){return(0,Re.jsx)(U,{defaultValue:ze,disabled:!0})}var Re,ze;function Be(){return(Be=t((()=>{W(),Re=r(),ze=new Date,ze.setHours(12,0,0)})))()}function Ve(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(U,{defaultValue:He,format:`HH:mm:ss`}),(0,X.jsx)(U,{defaultValue:He,format:`HH:mm`,showSecond:!1})]})}var X,He;function Ue(){return(Ue=t((()=>{W(),X=r(),He=new Date})))()}function We(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Z.jsx)(U,{size:`small`,placeholder:`Small`}),(0,Z.jsx)(U,{size:`medium`,placeholder:`Medium`}),(0,Z.jsx)(U,{size:`large`,placeholder:`Large`})]})}var Z;function Ge(){return(Ge=t((()=>{W(),Z=r()})))()}function Ke(){return(0,qe.jsx)(U,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var qe;function Je(){return(Je=t((()=>{W(),qe=r()})))()}function Ye(){return(0,Xe.jsx)(U,{format:`HH:mm`,showSecond:!1,minTime:Ze(9),maxTime:Ze(17,30),placeholder:`Office hours 09:00–17:30`})}var Xe,Ze;function Qe(){return(Qe=t((()=>{W(),Xe=r(),Ze=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n}})))()}function $e(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Q.jsx)(U,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,Q.jsx)(U,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var Q;function et(){return(et=t((()=>{W(),Q=r()})))()}var tt;function nt(){return(nt=t((()=>{tt=`import { useState } from "react";
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
`})))()}var rt;function it(){return(it=t((()=>{rt=`import { useState } from "react";
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
        <Button
          size="small"
          color="neutral"
          variant="outline"
          onClick={() => setTime(null)}
        >
          Reset
        </Button>
      </div>
      <p>Value: {time ? time.toLocaleTimeString() : "null"}</p>
    </div>
  );
}
`})))()}var at;function ot(){return(ot=t((()=>{at=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var st;function ct(){return(ct=t((()=>{st=`import { TimePicker } from "@minerva/lib-core";

const noon = new Date();
noon.setHours(12, 0, 0);

export default function DisabledDemo() {
  return <TimePicker defaultValue={noon} disabled />;
}
`})))()}var lt;function ut(){return(ut=t((()=>{lt=`import { TimePicker } from "@minerva/lib-core";

const now = new Date();

export default function FormatsDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker defaultValue={now} format="HH:mm:ss" />
      <TimePicker defaultValue={now} format="HH:mm" showSecond={false} />
    </div>
  );
}
`})))()}var dt;function ft(){return(ft=t((()=>{dt=`import { TimePicker } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker size="small" placeholder="Small" />
      <TimePicker size="medium" placeholder="Medium" />
      <TimePicker size="large" placeholder="Large" />
    </div>
  );
}
`})))()}var pt;function mt(){return(mt=t((()=>{pt=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var ht;function gt(){return(gt=t((()=>{ht=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var _t;function vt(){return(vt=t((()=>{_t=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var $,yt,bt;function xt(){return(xt=t((()=>{je(),Pe(),Ie(),Be(),Ue(),Ge(),Je(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),n(),xe(),p(),l(),d(),$=r(),yt=h(Object.assign({"./demos/basic.tsx":ke,"./demos/controlled.tsx":Me,"./demos/default-value.tsx":Fe,"./demos/disabled.tsx":Le,"./demos/formats.tsx":Ve,"./demos/sizes.tsx":We,"./demos/steps.tsx":Ke,"./demos/time-range.tsx":Ye,"./demos/twelve-hour.tsx":$e}),Object.assign({"./demos/basic.tsx":tt,"./demos/controlled.tsx":rt,"./demos/default-value.tsx":at,"./demos/disabled.tsx":st,"./demos/formats.tsx":lt,"./demos/sizes.tsx":dt,"./demos/steps.tsx":pt,"./demos/time-range.tsx":ht,"./demos/twelve-hour.tsx":_t})),bt=()=>{let{t:e}=be();return(0,$.jsx)(g,{id:`time-picker`,demos:yt,children:(0,$.jsxs)(`section`,{className:m.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.time-picker.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:m.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.select`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.typing`)})]})]})})}})))()}xt();export{bt as default};