import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-DuLeTlZP.js";import{At as i,Ot as a,W as ee,en as te,lt as o,q as s,tn as ne,x as re}from"./minerva-web-components-gmidRbuG.js";import{l as c,m as l,n as u,p as d,t as f,u as p}from"./DocPage-OkRujup2.js";import{Q as m,Z as ie,et as h,nt as ae,rt as oe,tt as se}from"./io5-CFVaALQJ.js";import{n as g,t as ce}from"./useI18n-7NNo_JVm.js";import{t as _}from"./stylingHooks-GjssfG7q.js";import{n as v,t as y}from"./Button-BJTVw8sA.js";import{E as le,T as b,w as ue}from"./icons-Dj0E45-e.js";import{i as de,n as fe,r as pe,t as me}from"./context-B9-pxdjQ.js";import{t as he}from"./dataAttributes-C-grv0bs.js";import{a as ge,i as _e}from"./useFocusScope-ryn0QnOL.js";import{t as ve}from"./direction-DP7if3Ff.js";import{n as ye,r as be}from"./FloatingPanel-wV0cRmAd.js";import{n as xe,t as Se}from"./IconButton-btF6mazk.js";import{n as Ce,t as we}from"./Input-CyLQYvbp.js";import{n as Te,r as Ee,t as De}from"./tabbing-BANIAeP0.js";var Oe,ke,x,Ae,S,C,w;function T(){return(T=t((()=>{Oe=`_timePickerPanel_1vn4s_1`,ke=`_timeColumns_1vn4s_10`,x=`_timeColumn_1vn4s_10`,Ae=`_timeUnit_1vn4s_26`,S=`_disabled_1vn4s_35`,C=`_selected_1vn4s_38`,w={timePickerPanel:Oe,timeColumns:ke,timeColumn:x,timeUnit:Ae,disabled:S,selected:C}})))()}var E,D,O,je;function k(){return(k=t((()=>{a(),g(),ve(),T(),E=e(n(),1),D=r(),O=(e,t,n=0,r=()=>!1)=>{let i=[];for(let a=n;a<n+e;a+=Math.max(1,t))i.push({value:a,disabled:r(a),label:String(a).padStart(2,`0`)});return i},je=E.memo(({value:e,hasValue:t=!0,use12Hours:n,showSecond:r,hourStep:i=1,minuteStep:a=1,secondStep:ee=1,minTime:o,maxTime:s,onTimeChange:ne,visible:c,focusOnOpen:l=!1})=>{let{t:u}=ce(),d=(0,E.useRef)(null),f=(0,E.useMemo)(()=>e??new Date(0),[e]),p=f.getHours(),m=f.getMinutes(),ie=f.getSeconds(),h=p>=12,ae=e=>n?e%12+(h?12:0):e,oe=O(n?12:24,i,+!!n,e=>{let t=n?e%12+(h?12:0):e;return!!(o&&t<o.getHours()||s&&t>s.getHours())}),se=O(60,a,0,e=>!!(o&&p===o.getHours()&&e<o.getMinutes()||s&&p===s.getHours()&&e>s.getMinutes())),g=O(60,ee,0,e=>{let t=o&&p===o.getHours()&&m===o.getMinutes(),n=s&&p===s.getHours()&&m===s.getMinutes();return!!(t&&e<o.getSeconds()||n&&e>s.getSeconds())}),v=[{value:0,label:`AM`,disabled:!1},{value:1,label:`PM`,disabled:!1}],y=[{kind:`hour`,label:u(`timePicker.hours`),items:oe,selected:n?p%12||12:p,toValue:ae},{kind:`minute`,label:u(`timePicker.minutes`),items:se,selected:m,toValue:e=>e}];r&&y.push({kind:`second`,label:u(`timePicker.seconds`),items:g,selected:ie,toValue:e=>e}),n&&y.push({kind:`ampm`,label:u(`timePicker.period`),items:v,selected:+!!h,toValue:e=>e}),(0,E.useEffect)(()=>{c&&d.current?.querySelectorAll(`[aria-selected="true"]`).forEach(e=>e.scrollIntoView?.({block:`nearest`}))},[c]),(0,E.useEffect)(()=>{c&&l&&d.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus()},[c,l]);let le=(e,t)=>{let n=e.target,r=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)).filter(e=>e.getAttribute(`aria-disabled`)!==`true`),i=r.indexOf(n),a=e=>{(d.current?.querySelectorAll(`[role="listbox"]`)[e])?.querySelector(`[tabindex="0"]`)?.focus()};switch(re(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),r[Math.min(r.length-1,i+1)]?.focus();break;case`ArrowUp`:e.preventDefault(),r[Math.max(0,i-1)]?.focus();break;case`Home`:e.preventDefault(),r[0]?.focus();break;case`End`:e.preventDefault(),r[r.length-1]?.focus();break;case`ArrowRight`:e.preventDefault(),a(Math.min(y.length-1,t+1));break;case`ArrowLeft`:e.preventDefault(),a(Math.max(0,t-1))}},b=(e,t,n)=>{n.disabled||ne(e,t(n.value))};return(0,D.jsx)(`div`,{className:w.timePickerPanel,ref:d,children:(0,D.jsx)(`div`,{className:w.timeColumns,children:y.map((e,n)=>{let r=e.items.find(e=>!e.disabled)?.value,i=e.items.some(t=>t.value===e.selected&&!t.disabled)?e.selected:r;return(0,D.jsx)(`div`,{className:w.timeColumn,..._(`time-picker`,`column`),role:`listbox`,"aria-label":e.label,tabIndex:-1,onKeyDown:e=>le(e,n),children:e.items.map(n=>{let r=t&&n.value===e.selected;return(0,D.jsx)(`div`,{..._(`time-picker`,`item`,{selected:r,disabled:n.disabled}),role:`option`,"aria-selected":r,"aria-disabled":n.disabled||void 0,tabIndex:n.value===i?0:-1,className:te(w.timeUnit,{[w.selected]:r,[w.disabled]:n.disabled}),onClick:()=>b(e.kind,e.toValue,n),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),b(e.kind,e.toValue,n))},children:n.label},n.value)})},e.kind)})})})})})))()}var A,j,Me,M,N;function P(){return(P=t((()=>{A=`_timePicker_zkaej_1`,j=`_clearButton_zkaej_6`,Me=`_clockIcon_zkaej_22`,M=`_popup_zkaej_29`,N={timePicker:A,clearButton:j,clockIcon:Me,popup:M}})))()}var F,I,L;function R(){return(R=t((()=>{a(),g(),b(),h(),m(),fe(),_e(),be(),xe(),we(),k(),De(),P(),F=e(n(),1),I=r(),L=F.memo(({ref:e,value:t,defaultValue:n,onChange:r,format:a=`HH:mm:ss`,use12Hours:re=!1,placeholder:c,label:l,"aria-label":u,"aria-labelledby":d,"aria-describedby":f,id:p,required:m,readOnly:h,invalid:ae,name:oe=`time-picker`,disabled:g,clearable:v=!0,size:y=`medium`,className:b=``,style:fe,minTime:_e,maxTime:ve,showSecond:be=!0,hourStep:xe=1,minuteStep:we=1,secondStep:De=1,onOpenChange:Oe,...ke})=>{let x=i(a,be),Ae=ee(x),{t:S}=ce(),C=de(),w=me({id:p,"aria-describedby":f}),T=g??C?.disabled??!1,E=h??C?.readOnly??!1,D=m??C?.required??!1,O=ae??C?.invalid??!1,k=l??u??S(`timePicker.label`),A=d??(C&&!l&&!u?C.labelId:void 0),[j,Me]=ie({value:t,defaultValue:n??null,name:`TimePicker`}),[M,P]=ie({defaultValue:!1,onChange:Oe,name:`TimePicker`,prop:`open`}),[L,R]=(0,F.useState)(null),[z,B]=(0,F.useState)(null),[V,Ne]=(0,F.useState)(null),Pe=se(B,e),H=(0,F.useRef)(null),U=ge(),[W,G]=(0,F.useState)(!1),K=e=>{Me(e),r?.(e??void 0)},q=(e,t)=>{let n=new Date(j??o());if(e===`hour`)n.setHours(t);else if(e===`minute`)n.setMinutes(t);else if(e===`second`)n.setSeconds(t);else{let e=n.getHours()%12;n.setHours(t===1?e+12:e)}R(null),K(n)},J=e=>{R(e);let t=ne(e,x,{strict:!0,base:j??void 0});t&&K(t)},Fe=()=>{if(L!==null){if(L.trim()===``)j&&K(null);else{let e=ne(L,x,{strict:!1,base:j??void 0});e&&e.getTime()!==j?.getTime()&&K(e)}R(null)}},Ie=()=>{R(null),K(null),z?.focus()},Le=()=>{T||E||(G(!1),P(e=>!e))},Y=e=>{let t=e.currentTarget;!z||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey||!Te(t,e.target,e.shiftKey)||(e.preventDefault(),(e.shiftKey?z:Ee(z,U??z.ownerDocument.body,!1)??z).focus(),P(!1))},Re=L??(j?s(j,x):``);return(0,I.jsxs)(`div`,{...he(ke),ref:Ne,className:te(N.timePicker,b),style:fe,onClick:e=>{e.target===z&&Le()},..._(`time-picker`,`root`,{state:M&&!T&&!E?`open`:`closed`,disabled:T,readonly:E,invalid:O,size:y}),children:[(0,I.jsx)(pe.Provider,{value:null,children:(0,I.jsx)(Ce,{ref:Pe,value:Re,placeholder:c??S(`timePicker.placeholder`),id:w.id,"aria-label":k,"aria-labelledby":A,"aria-describedby":w[`aria-describedby`],"aria-invalid":O||void 0,"aria-readonly":E||void 0,required:D,readOnly:E,onChange:e=>J(e.target.value),onBlur:Fe,onKeyDown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),M?H.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus():(G(!0),P(!0)))},name:oe,disabled:T,size:y,suffix:v&&j&&!T&&!E?(0,I.jsx)(Se,{icon:(0,I.jsx)(ue,{"aria-hidden":!0,focusable:!1}),size:`small`,"aria-label":S(`timePicker.clear`),onClick:Ie,className:N.clearButton}):(0,I.jsx)(`span`,{className:N.clockIcon,"aria-hidden":`true`,..._(`time-picker`,`icon`),children:(0,I.jsx)(le,{})})})}),(0,I.jsx)(ye,{ref:H,open:M&&!T&&!E,anchor:z,placement:`bottom-start`,branches:()=>[V],onDismiss:()=>P(!1),returnFocusOnEscape:()=>z,focusable:!0,role:`dialog`,tabIndex:-1,"aria-label":k,"aria-labelledby":A,className:N.popup,onKeyDown:Y,..._(`time-picker`,`content`,{state:`open`}),children:(0,I.jsx)(je,{value:j??o(),hasValue:j!==null,format:x,use12Hours:re,showSecond:Ae,hourStep:xe,minuteStep:we,secondStep:De,minTime:_e,maxTime:ve,onTimeChange:q,visible:M,focusOnOpen:W})})]})})})))()}function z(){let[e,t]=(0,B.useState)();return(0,V.jsxs)(`div`,{children:[(0,V.jsx)(L,{onChange:t}),(0,V.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var B,V;function Ne(){return(Ne=t((()=>{B=n(),R(),V=r()})))()}function Pe(){let[e,t]=(0,H.useState)(null);return(0,U.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,U.jsx)(L,{label:`Meeting time`,value:e,onChange:e=>t(e??null)}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,U.jsx)(v,{size:`small`,onClick:()=>t(W()),children:`Set to noon`}),(0,U.jsx)(v,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(null),children:`Reset`})]}),(0,U.jsxs)(`p`,{children:[`Value: `,e?e.toLocaleTimeString():`null`]})]})}var H,U,W;function G(){return(G=t((()=>{H=n(),y(),R(),U=r(),W=()=>{let e=new Date;return e.setHours(12,0,0,0),e}})))()}function K(){return(0,q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,q.jsx)(L,{defaultValue:J}),(0,q.jsx)(L,{defaultValue:J,clearable:!1})]})}var q,J;function Fe(){return(Fe=t((()=>{R(),q=r(),J=new Date,J.setHours(9,30,0)})))()}function Ie(){return(0,Le.jsx)(L,{defaultValue:Y,disabled:!0})}var Le,Y;function Re(){return(Re=t((()=>{R(),Le=r(),Y=new Date,Y.setHours(12,0,0)})))()}function ze(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(L,{defaultValue:Be,format:`HH:mm:ss`}),(0,X.jsx)(L,{defaultValue:Be,format:`HH:mm`,showSecond:!1})]})}var X,Be;function Ve(){return(Ve=t((()=>{R(),X=r(),Be=new Date})))()}function He(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Z.jsx)(L,{size:`small`,placeholder:`Small`}),(0,Z.jsx)(L,{size:`medium`,placeholder:`Medium`}),(0,Z.jsx)(L,{size:`large`,placeholder:`Large`})]})}var Z;function Ue(){return(Ue=t((()=>{R(),Z=r()})))()}function We(){return(0,Ge.jsx)(L,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var Ge;function Ke(){return(Ke=t((()=>{R(),Ge=r()})))()}function qe(){return(0,Je.jsx)(L,{format:`HH:mm`,showSecond:!1,minTime:Ye(9),maxTime:Ye(17,30),placeholder:`Office hours 09:00–17:30`})}var Je,Ye;function Xe(){return(Xe=t((()=>{R(),Je=r(),Ye=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n}})))()}function Ze(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Q.jsx)(L,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,Q.jsx)(L,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var Q;function Qe(){return(Qe=t((()=>{R(),Q=r()})))()}var $e;function et(){return(et=t((()=>{$e=`import { useState } from "react";
import { TimePicker } from "minerva-design";

export default function BasicDemo() {
  const [time, setTime] = useState<Date>();

  return (
    <div>
      <TimePicker onChange={setTime} />
      <p>Selected: {time ? time.toLocaleTimeString() : "none"}</p>
    </div>
  );
}
`})))()}var tt;function nt(){return(nt=t((()=>{tt=`import { useState } from "react";
import { Button, TimePicker } from "minerva-design";

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
`})))()}var rt;function it(){return(it=t((()=>{rt=`import { TimePicker } from "minerva-design";

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
`})))()}var at;function ot(){return(ot=t((()=>{at=`import { TimePicker } from "minerva-design";

const noon = new Date();
noon.setHours(12, 0, 0);

export default function DisabledDemo() {
  return <TimePicker defaultValue={noon} disabled />;
}
`})))()}var st;function ct(){return(ct=t((()=>{st=`import { TimePicker } from "minerva-design";

const now = new Date();

export default function FormatsDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker defaultValue={now} format="HH:mm:ss" />
      <TimePicker defaultValue={now} format="HH:mm" showSecond={false} />
    </div>
  );
}
`})))()}var lt;function ut(){return(ut=t((()=>{lt=`import { TimePicker } from "minerva-design";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker size="small" placeholder="Small" />
      <TimePicker size="medium" placeholder="Medium" />
      <TimePicker size="large" placeholder="Large" />
    </div>
  );
}
`})))()}var dt;function ft(){return(ft=t((()=>{dt=`import { TimePicker } from "minerva-design";

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
`})))()}var pt;function mt(){return(mt=t((()=>{pt=`import { TimePicker } from "minerva-design";

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
`})))()}var ht;function gt(){return(gt=t((()=>{ht=`import { TimePicker } from "minerva-design";

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
`})))()}var $,_t,vt;function yt(){return(yt=t((()=>{Ne(),G(),Fe(),Re(),Ve(),Ue(),Ke(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),n(),ae(),u(),l(),p(),$=r(),_t=d(Object.assign({"./demos/basic.tsx":z,"./demos/controlled.tsx":Pe,"./demos/default-value.tsx":K,"./demos/disabled.tsx":Ie,"./demos/formats.tsx":ze,"./demos/sizes.tsx":He,"./demos/steps.tsx":We,"./demos/time-range.tsx":qe,"./demos/twelve-hour.tsx":Ze}),Object.assign({"./demos/basic.tsx":$e,"./demos/controlled.tsx":tt,"./demos/default-value.tsx":rt,"./demos/disabled.tsx":at,"./demos/formats.tsx":st,"./demos/sizes.tsx":lt,"./demos/steps.tsx":dt,"./demos/time-range.tsx":pt,"./demos/twelve-hour.tsx":ht})),vt=()=>{let{t:e}=oe();return(0,$.jsx)(f,{id:`time-picker`,demos:_t,children:(0,$.jsxs)(`section`,{className:c.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.time-picker.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:c.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.select`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.typing`)})]})]})})}})))()}yt();export{vt as default};