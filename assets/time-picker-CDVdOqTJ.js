import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-aZSMfLKR.js";import{It as i,Ut as a,Vt as ee,X as te,cn as o,et as ne,st as s,zt as re}from"./minerva-web-components-e9i9Tzii.js";import{Q as c,Z as l,et as u,nt as d,rt as f,tt as p}from"./io5-CkIs6v-8.js";import{n as m,t as ie}from"./useI18n-Brv-VDVY.js";import{t as h}from"./stylingHooks-GjssfG7q.js";import{n as g,t as _}from"./Button-BfJfx3BZ.js";import{E as ae,T as v,w as oe}from"./icons-C9qyBhWC.js";import{i as se,n as y,r as b,t as ce}from"./context-CofDH3-d.js";import{t as le}from"./dataAttributes-C-grv0bs.js";import{a as ue,i as de}from"./useFocusScope-B_OMr7xS.js";import{t as fe}from"./direction-B2fcyo3I.js";import{n as pe,r as me}from"./FloatingPanel-CxnqitC0.js";import{n as he,t as ge}from"./IconButton-4WLs8bXn.js";import{n as _e,t as ve}from"./Input-f1MrbxB_.js";import{n as ye,r as be,t as xe}from"./tabbing-BEMcZ1ol.js";import{l as Se,m as Ce,n as we,p as Te,t as Ee,u as De}from"./DocPage-BUvZl8IZ.js";var Oe,ke,x,S,C,w,T;function E(){return(E=t((()=>{Oe=`_timePickerPanel_wmaox_1`,ke=`_timeColumns_wmaox_10`,x=`_timeColumn_wmaox_10`,S=`_timeUnit_wmaox_30`,C=`_disabled_wmaox_39`,w=`_selected_wmaox_42`,T={timePickerPanel:Oe,timeColumns:ke,timeColumn:x,timeUnit:S,disabled:C,selected:w}})))()}var D,O,k,Ae;function A(){return(A=t((()=>{o(),m(),fe(),E(),D=e(n(),1),O=r(),k=(e,t,n=0,r=()=>!1)=>{let i=[];for(let a=n;a<n+e;a+=Math.max(1,t))i.push({value:a,disabled:r(a),label:String(a).padStart(2,`0`)});return i},Ae=D.memo(({value:e,hasValue:t=!0,use12Hours:n,showSecond:r,hourStep:i=1,minuteStep:a=1,secondStep:ee=1,minTime:o,maxTime:s,onTimeChange:re,visible:c,focusOnOpen:l=!1})=>{let{t:u}=ie(),d=(0,D.useRef)(null),f=(0,D.useMemo)(()=>e??new Date(0),[e]),p=f.getHours(),m=f.getMinutes(),g=f.getSeconds(),_=p>=12,ae=e=>n?e%12+(_?12:0):e,v=k(n?12:24,i,+!!n,e=>{let t=n?e%12+(_?12:0):e;return!!(o&&t<o.getHours()||s&&t>s.getHours())}),oe=k(60,a,0,e=>!!(o&&p===o.getHours()&&e<o.getMinutes()||s&&p===s.getHours()&&e>s.getMinutes())),se=k(60,ee,0,e=>{let t=o&&p===o.getHours()&&m===o.getMinutes(),n=s&&p===s.getHours()&&m===s.getMinutes();return!!(t&&e<o.getSeconds()||n&&e>s.getSeconds())}),y=[{value:0,label:`AM`,disabled:!1},{value:1,label:`PM`,disabled:!1}],b=[{kind:`hour`,label:u(`timePicker.hours`),items:v,selected:n?p%12||12:p,toValue:ae},{kind:`minute`,label:u(`timePicker.minutes`),items:oe,selected:m,toValue:e=>e}];r&&b.push({kind:`second`,label:u(`timePicker.seconds`),items:se,selected:g,toValue:e=>e}),n&&b.push({kind:`ampm`,label:u(`timePicker.period`),items:y,selected:+!!_,toValue:e=>e}),(0,D.useEffect)(()=>{c&&d.current?.querySelectorAll(`[aria-selected="true"]`).forEach(e=>e.scrollIntoView?.({block:`nearest`}))},[c]),(0,D.useEffect)(()=>{c&&l&&d.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus()},[c,l]);let ce=(e,t)=>{let n=e.target,r=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)).filter(e=>e.getAttribute(`aria-disabled`)!==`true`),i=r.indexOf(n),a=e=>{(d.current?.querySelectorAll(`[role="listbox"]`)[e])?.querySelector(`[tabindex="0"]`)?.focus()};switch(ne(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),r[Math.min(r.length-1,i+1)]?.focus();break;case`ArrowUp`:e.preventDefault(),r[Math.max(0,i-1)]?.focus();break;case`Home`:e.preventDefault(),r[0]?.focus();break;case`End`:e.preventDefault(),r[r.length-1]?.focus();break;case`ArrowRight`:e.preventDefault(),a(Math.min(b.length-1,t+1));break;case`ArrowLeft`:e.preventDefault(),a(Math.max(0,t-1))}},le=(e,t,n)=>{n.disabled||re(e,t(n.value))};return(0,O.jsx)(`div`,{className:T.timePickerPanel,ref:d,children:(0,O.jsx)(`div`,{className:T.timeColumns,children:b.map((e,n)=>{let r=e.items.find(e=>!e.disabled)?.value,i=e.items.some(t=>t.value===e.selected&&!t.disabled)?e.selected:r;return(0,O.jsx)(`div`,{className:T.timeColumn,...h(`time-picker`,`column`),role:`listbox`,"aria-label":e.label,tabIndex:-1,onKeyDown:e=>ce(e,n),children:e.items.map(n=>{let r=t&&n.value===e.selected;return(0,O.jsx)(`div`,{...h(`time-picker`,`item`,{selected:r,disabled:n.disabled}),role:`option`,"aria-selected":r,"aria-disabled":n.disabled||void 0,tabIndex:n.value===i?0:-1,className:te(T.timeUnit,{[T.selected]:r,[T.disabled]:n.disabled}),onClick:()=>le(e.kind,e.toValue,n),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),le(e.kind,e.toValue,n))},children:n.label},n.value)})},e.kind)})})})})})))()}var j,M,je,N,P;function F(){return(F=t((()=>{j=`_timePicker_zkaej_1`,M=`_clearButton_zkaej_6`,je=`_clockIcon_zkaej_22`,N=`_popup_zkaej_29`,P={timePicker:j,clearButton:M,clockIcon:je,popup:N}})))()}var I,L,R;function z(){return(z=t((()=>{o(),m(),v(),u(),c(),y(),de(),me(),he(),ve(),A(),xe(),F(),I=e(n(),1),L=r(),R=I.memo(({ref:e,value:t,defaultValue:n,onChange:r,format:o=`HH:mm:ss`,use12Hours:ne=!1,placeholder:c,label:u,"aria-label":d,"aria-labelledby":f,"aria-describedby":m,id:g,required:_,readOnly:v,invalid:y,name:de=`time-picker`,disabled:fe,clearable:me=!0,size:he=`medium`,className:ve=``,style:xe,minTime:Se,maxTime:Ce,showSecond:we=!0,hourStep:Te=1,minuteStep:Ee=1,secondStep:De=1,onOpenChange:Oe,...ke})=>{let x=ee(o,we),S=a(x),{t:C}=ie(),w=se(),T=ce({id:g,"aria-describedby":m}),E=fe??w?.disabled??!1,D=v??w?.readOnly??!1,O=_??w?.required??!1,k=y??w?.invalid??!1,A=u??d??C(`timePicker.label`),j=f??(w&&!u&&!d?w.labelId:void 0),[M,je]=l({value:t,defaultValue:n??null,name:`TimePicker`}),[N,F]=l({defaultValue:!1,onChange:Oe,name:`TimePicker`,prop:`open`}),[R,z]=(0,I.useState)(null),[B,Me]=(0,I.useState)(null),[V,Ne]=(0,I.useState)(null),Pe=p(Me,e),H=(0,I.useRef)(null),U=ue(),[W,G]=(0,I.useState)(!1),K=e=>{je(e),r?.(e??void 0)},q=(e,t)=>{let n=new Date(M??re());if(e===`hour`)n.setHours(t);else if(e===`minute`)n.setMinutes(t);else if(e===`second`)n.setSeconds(t);else{let e=n.getHours()%12;n.setHours(t===1?e+12:e)}z(null),K(n)},J=e=>{z(e);let t=i(e,x,{strict:!0,base:M??void 0});t&&K(t)},Fe=()=>{if(R!==null){if(R.trim()===``)M&&K(null);else{let e=i(R,x,{strict:!1,base:M??void 0});e&&e.getTime()!==M?.getTime()&&K(e)}z(null)}},Ie=()=>{z(null),K(null),B?.focus()},Le=()=>{E||D||(G(!1),F(e=>!e))},Y=e=>{let t=e.currentTarget;!B||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey||!ye(t,e.target,e.shiftKey)||(e.preventDefault(),(e.shiftKey?B:be(B,U??B.ownerDocument.body,!1)??B).focus(),F(!1))},Re=R??(M?s(M,x):``);return(0,L.jsxs)(`div`,{...le(ke),ref:Ne,className:te(P.timePicker,ve),style:xe,onClick:e=>{e.target===B&&Le()},...h(`time-picker`,`root`,{state:N&&!E&&!D?`open`:`closed`,disabled:E,readonly:D,invalid:k,size:he}),children:[(0,L.jsx)(b.Provider,{value:null,children:(0,L.jsx)(_e,{ref:Pe,value:Re,placeholder:c??C(`timePicker.placeholder`),id:T.id,"aria-label":A,"aria-labelledby":j,"aria-describedby":T[`aria-describedby`],"aria-invalid":k||void 0,"aria-readonly":D||void 0,required:O,readOnly:D,onChange:e=>J(e.target.value),onBlur:Fe,onKeyDown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),N?H.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus():(G(!0),F(!0)))},name:de,disabled:E,size:he,suffix:me&&M&&!E&&!D?(0,L.jsx)(ge,{icon:(0,L.jsx)(oe,{"aria-hidden":!0,focusable:!1}),size:`small`,"aria-label":C(`timePicker.clear`),onClick:Ie,className:P.clearButton}):(0,L.jsx)(`span`,{className:P.clockIcon,"aria-hidden":`true`,...h(`time-picker`,`icon`),children:(0,L.jsx)(ae,{})})})}),(0,L.jsx)(pe,{ref:H,open:N&&!E&&!D,anchor:B,placement:`bottom-start`,branches:()=>[V],onDismiss:()=>F(!1),returnFocusOnEscape:()=>B,focusable:!0,role:`dialog`,tabIndex:-1,"aria-label":A,"aria-labelledby":j,className:P.popup,onKeyDown:Y,...h(`time-picker`,`content`,{state:`open`}),children:(0,L.jsx)(Ae,{value:M??re(),hasValue:M!==null,format:x,use12Hours:ne,showSecond:S,hourStep:Te,minuteStep:Ee,secondStep:De,minTime:Se,maxTime:Ce,onTimeChange:q,visible:N,focusOnOpen:W})})]})})})))()}function B(){let[e,t]=(0,Me.useState)();return(0,V.jsxs)(`div`,{children:[(0,V.jsx)(R,{onChange:t}),(0,V.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var Me,V;function Ne(){return(Ne=t((()=>{Me=n(),z(),V=r()})))()}function Pe(){let[e,t]=(0,H.useState)(null);return(0,U.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,U.jsx)(R,{label:`Meeting time`,value:e,onChange:e=>t(e??null)}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,U.jsx)(g,{size:`small`,onClick:()=>t(W()),children:`Set to noon`}),(0,U.jsx)(g,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(null),children:`Reset`})]}),(0,U.jsxs)(`p`,{children:[`Value: `,e?e.toLocaleTimeString():`null`]})]})}var H,U,W;function G(){return(G=t((()=>{H=n(),_(),z(),U=r(),W=()=>{let e=new Date;return e.setHours(12,0,0,0),e}})))()}function K(){return(0,q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,q.jsx)(R,{defaultValue:J}),(0,q.jsx)(R,{defaultValue:J,clearable:!1})]})}var q,J;function Fe(){return(Fe=t((()=>{z(),q=r(),J=new Date,J.setHours(9,30,0)})))()}function Ie(){return(0,Le.jsx)(R,{defaultValue:Y,disabled:!0})}var Le,Y;function Re(){return(Re=t((()=>{z(),Le=r(),Y=new Date,Y.setHours(12,0,0)})))()}function ze(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(R,{defaultValue:Be,format:`HH:mm:ss`}),(0,X.jsx)(R,{defaultValue:Be,format:`HH:mm`,showSecond:!1})]})}var X,Be;function Ve(){return(Ve=t((()=>{z(),X=r(),Be=new Date})))()}function He(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Z.jsx)(R,{size:`small`,placeholder:`Small`}),(0,Z.jsx)(R,{size:`medium`,placeholder:`Medium`}),(0,Z.jsx)(R,{size:`large`,placeholder:`Large`})]})}var Z;function Ue(){return(Ue=t((()=>{z(),Z=r()})))()}function We(){return(0,Ge.jsx)(R,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var Ge;function Ke(){return(Ke=t((()=>{z(),Ge=r()})))()}function qe(){return(0,Je.jsx)(R,{format:`HH:mm`,showSecond:!1,minTime:Ye(9),maxTime:Ye(17,30),placeholder:`Office hours 09:00–17:30`})}var Je,Ye;function Xe(){return(Xe=t((()=>{z(),Je=r(),Ye=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n}})))()}function Ze(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Q.jsx)(R,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,Q.jsx)(R,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var Q;function Qe(){return(Qe=t((()=>{z(),Q=r()})))()}var $e;function et(){return(et=t((()=>{$e=`import { useState } from "react";
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
`})))()}var tt;function nt(){return(nt=t((()=>{tt=`import { useState } from "react";
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
`})))()}var rt;function it(){return(it=t((()=>{rt=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var at;function ot(){return(ot=t((()=>{at=`import { TimePicker } from "@minerva/lib-core";

const noon = new Date();
noon.setHours(12, 0, 0);

export default function DisabledDemo() {
  return <TimePicker defaultValue={noon} disabled />;
}
`})))()}var st;function ct(){return(ct=t((()=>{st=`import { TimePicker } from "@minerva/lib-core";

const now = new Date();

export default function FormatsDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker defaultValue={now} format="HH:mm:ss" />
      <TimePicker defaultValue={now} format="HH:mm" showSecond={false} />
    </div>
  );
}
`})))()}var lt;function ut(){return(ut=t((()=>{lt=`import { TimePicker } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker size="small" placeholder="Small" />
      <TimePicker size="medium" placeholder="Medium" />
      <TimePicker size="large" placeholder="Large" />
    </div>
  );
}
`})))()}var dt;function ft(){return(ft=t((()=>{dt=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var pt;function mt(){return(mt=t((()=>{pt=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var ht;function gt(){return(gt=t((()=>{ht=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var $,_t,vt;function yt(){return(yt=t((()=>{Ne(),G(),Fe(),Re(),Ve(),Ue(),Ke(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),n(),d(),we(),Ce(),De(),$=r(),_t=Te(Object.assign({"./demos/basic.tsx":B,"./demos/controlled.tsx":Pe,"./demos/default-value.tsx":K,"./demos/disabled.tsx":Ie,"./demos/formats.tsx":ze,"./demos/sizes.tsx":He,"./demos/steps.tsx":We,"./demos/time-range.tsx":qe,"./demos/twelve-hour.tsx":Ze}),Object.assign({"./demos/basic.tsx":$e,"./demos/controlled.tsx":tt,"./demos/default-value.tsx":rt,"./demos/disabled.tsx":at,"./demos/formats.tsx":st,"./demos/sizes.tsx":lt,"./demos/steps.tsx":dt,"./demos/time-range.tsx":pt,"./demos/twelve-hour.tsx":ht})),vt=()=>{let{t:e}=f();return(0,$.jsx)(Ee,{id:`time-picker`,demos:_t,children:(0,$.jsxs)(`section`,{className:Se.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.time-picker.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:Se.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.select`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.typing`)})]})]})})}})))()}yt();export{vt as default};