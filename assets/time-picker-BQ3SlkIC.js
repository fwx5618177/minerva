import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-aZSMfLKR.js";import{$ as i,K as a,Y as ee,Z as o,_ as s,o as te,u as ne,vt as c}from"./minerva-web-components-ByJsjP0z.js";import{l,m as u,n as d,p as f,t as p,u as m}from"./DocPage-CVA4UCUb.js";import{Q as h,Z as re,et as g,nt as ie,rt as ae,tt as oe}from"./io5-BO4aBax7.js";import{n as _,t as se}from"./useI18n-B2tkKcqQ.js";import{t as v}from"./stylingHooks-GjssfG7q.js";import{n as y,t as b}from"./Button-DoMjJPcZ.js";import{E as ce,T as x,w as le}from"./icons-C9qyBhWC.js";import{i as ue,n as de,r as fe,t as pe}from"./context-CofDH3-d.js";import{t as me}from"./dataAttributes-C-grv0bs.js";import{a as he,i as ge}from"./useFocusScope-CcExWoOG.js";import{t as _e}from"./direction-BB7i66oX.js";import{n as ve,r as ye}from"./FloatingPanel-DQpR7fKp.js";import{n as be,t as xe}from"./IconButton-Bs8gNUKQ.js";import{n as Se,t as Ce}from"./Input-AV5F_Ft8.js";import{n as we,r as Te,t as Ee}from"./tabbing-nh1t7Piu.js";var De,Oe,S,ke,C,w,T;function E(){return(E=t((()=>{De=`_timePickerPanel_1vn4s_1`,Oe=`_timeColumns_1vn4s_10`,S=`_timeColumn_1vn4s_10`,ke=`_timeUnit_1vn4s_26`,C=`_disabled_1vn4s_35`,w=`_selected_1vn4s_38`,T={timePickerPanel:De,timeColumns:Oe,timeColumn:S,timeUnit:ke,disabled:C,selected:w}})))()}var D,O,k,Ae;function A(){return(A=t((()=>{c(),_(),_e(),E(),D=e(n(),1),O=r(),k=(e,t,n=0,r=()=>!1)=>{let i=[];for(let a=n;a<n+e;a+=Math.max(1,t))i.push({value:a,disabled:r(a),label:String(a).padStart(2,`0`)});return i},Ae=D.memo(({value:e,hasValue:t=!0,use12Hours:n,showSecond:r,hourStep:i=1,minuteStep:a=1,secondStep:ee=1,minTime:o,maxTime:s,onTimeChange:c,visible:l,focusOnOpen:u=!1})=>{let{t:d}=se(),f=(0,D.useRef)(null),p=(0,D.useMemo)(()=>e??new Date(0),[e]),m=p.getHours(),h=p.getMinutes(),re=p.getSeconds(),g=m>=12,ie=e=>n?e%12+(g?12:0):e,ae=k(n?12:24,i,+!!n,e=>{let t=n?e%12+(g?12:0):e;return!!(o&&t<o.getHours()||s&&t>s.getHours())}),oe=k(60,a,0,e=>!!(o&&m===o.getHours()&&e<o.getMinutes()||s&&m===s.getHours()&&e>s.getMinutes())),_=k(60,ee,0,e=>{let t=o&&m===o.getHours()&&h===o.getMinutes(),n=s&&m===s.getHours()&&h===s.getMinutes();return!!(t&&e<o.getSeconds()||n&&e>s.getSeconds())}),y=[{value:0,label:`AM`,disabled:!1},{value:1,label:`PM`,disabled:!1}],b=[{kind:`hour`,label:d(`timePicker.hours`),items:ae,selected:n?m%12||12:m,toValue:ie},{kind:`minute`,label:d(`timePicker.minutes`),items:oe,selected:h,toValue:e=>e}];r&&b.push({kind:`second`,label:d(`timePicker.seconds`),items:_,selected:re,toValue:e=>e}),n&&b.push({kind:`ampm`,label:d(`timePicker.period`),items:y,selected:+!!g,toValue:e=>e}),(0,D.useEffect)(()=>{l&&f.current?.querySelectorAll(`[aria-selected="true"]`).forEach(e=>e.scrollIntoView?.({block:`nearest`}))},[l]),(0,D.useEffect)(()=>{l&&u&&f.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus()},[l,u]);let ce=(e,t)=>{let n=e.target,r=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)).filter(e=>e.getAttribute(`aria-disabled`)!==`true`),i=r.indexOf(n),a=e=>{(f.current?.querySelectorAll(`[role="listbox"]`)[e])?.querySelector(`[tabindex="0"]`)?.focus()};switch(ne(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),r[Math.min(r.length-1,i+1)]?.focus();break;case`ArrowUp`:e.preventDefault(),r[Math.max(0,i-1)]?.focus();break;case`Home`:e.preventDefault(),r[0]?.focus();break;case`End`:e.preventDefault(),r[r.length-1]?.focus();break;case`ArrowRight`:e.preventDefault(),a(Math.min(b.length-1,t+1));break;case`ArrowLeft`:e.preventDefault(),a(Math.max(0,t-1))}},x=(e,t,n)=>{n.disabled||c(e,t(n.value))};return(0,O.jsx)(`div`,{className:T.timePickerPanel,ref:f,children:(0,O.jsx)(`div`,{className:T.timeColumns,children:b.map((e,n)=>{let r=e.items.find(e=>!e.disabled)?.value,i=e.items.some(t=>t.value===e.selected&&!t.disabled)?e.selected:r;return(0,O.jsx)(`div`,{className:T.timeColumn,...v(`time-picker`,`column`),role:`listbox`,"aria-label":e.label,tabIndex:-1,onKeyDown:e=>ce(e,n),children:e.items.map(n=>{let r=t&&n.value===e.selected;return(0,O.jsx)(`div`,{...v(`time-picker`,`item`,{selected:r,disabled:n.disabled}),role:`option`,"aria-selected":r,"aria-disabled":n.disabled||void 0,tabIndex:n.value===i?0:-1,className:te(T.timeUnit,{[T.selected]:r,[T.disabled]:n.disabled}),onClick:()=>x(e.kind,e.toValue,n),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),x(e.kind,e.toValue,n))},children:n.label},n.value)})},e.kind)})})})})})))()}var j,M,je,N,P;function F(){return(F=t((()=>{j=`_timePicker_zkaej_1`,M=`_clearButton_zkaej_6`,je=`_clockIcon_zkaej_22`,N=`_popup_zkaej_29`,P={timePicker:j,clearButton:M,clockIcon:je,popup:N}})))()}var I,L,R;function z(){return(z=t((()=>{c(),_(),x(),g(),h(),de(),ge(),ye(),be(),Ce(),A(),Ee(),F(),I=e(n(),1),L=r(),R=I.memo(({ref:e,value:t,defaultValue:n,onChange:r,format:ne=`HH:mm:ss`,use12Hours:c=!1,placeholder:l,label:u,"aria-label":d,"aria-labelledby":f,"aria-describedby":p,id:m,required:h,readOnly:g,invalid:ie,name:ae=`time-picker`,disabled:_,clearable:y=!0,size:b=`medium`,className:x=``,style:de,minTime:ge,maxTime:_e,showSecond:ye=!0,hourStep:be=1,minuteStep:Ce=1,secondStep:Ee=1,onOpenChange:De,...Oe})=>{let S=o(ne,ye),ke=i(S),{t:C}=se(),w=ue(),T=pe({id:m,"aria-describedby":p}),E=_??w?.disabled??!1,D=g??w?.readOnly??!1,O=h??w?.required??!1,k=ie??w?.invalid??!1,A=u??d??C(`timePicker.label`),j=f??(w&&!u&&!d?w.labelId:void 0),[M,je]=re({value:t,defaultValue:n??null,name:`TimePicker`}),[N,F]=re({defaultValue:!1,onChange:De,name:`TimePicker`,prop:`open`}),[R,z]=(0,I.useState)(null),[B,V]=(0,I.useState)(null),[H,Me]=(0,I.useState)(null),Ne=oe(V,e),U=(0,I.useRef)(null),W=he(),[Pe,G]=(0,I.useState)(!1),K=e=>{je(e),r?.(e??void 0)},q=(e,t)=>{let n=new Date(M??ee());if(e===`hour`)n.setHours(t);else if(e===`minute`)n.setMinutes(t);else if(e===`second`)n.setSeconds(t);else{let e=n.getHours()%12;n.setHours(t===1?e+12:e)}z(null),K(n)},J=e=>{z(e);let t=a(e,S,{strict:!0,base:M??void 0});t&&K(t)},Fe=()=>{if(R!==null){if(R.trim()===``)M&&K(null);else{let e=a(R,S,{strict:!1,base:M??void 0});e&&e.getTime()!==M?.getTime()&&K(e)}z(null)}},Ie=()=>{z(null),K(null),B?.focus()},Le=()=>{E||D||(G(!1),F(e=>!e))},Y=e=>{let t=e.currentTarget;!B||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey||!we(t,e.target,e.shiftKey)||(e.preventDefault(),(e.shiftKey?B:Te(B,W??B.ownerDocument.body,!1)??B).focus(),F(!1))},Re=R??(M?s(M,S):``);return(0,L.jsxs)(`div`,{...me(Oe),ref:Me,className:te(P.timePicker,x),style:de,onClick:e=>{e.target===B&&Le()},...v(`time-picker`,`root`,{state:N&&!E&&!D?`open`:`closed`,disabled:E,readonly:D,invalid:k,size:b}),children:[(0,L.jsx)(fe.Provider,{value:null,children:(0,L.jsx)(Se,{ref:Ne,value:Re,placeholder:l??C(`timePicker.placeholder`),id:T.id,"aria-label":A,"aria-labelledby":j,"aria-describedby":T[`aria-describedby`],"aria-invalid":k||void 0,"aria-readonly":D||void 0,required:O,readOnly:D,onChange:e=>J(e.target.value),onBlur:Fe,onKeyDown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),N?U.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus():(G(!0),F(!0)))},name:ae,disabled:E,size:b,suffix:y&&M&&!E&&!D?(0,L.jsx)(xe,{icon:(0,L.jsx)(le,{"aria-hidden":!0,focusable:!1}),size:`small`,"aria-label":C(`timePicker.clear`),onClick:Ie,className:P.clearButton}):(0,L.jsx)(`span`,{className:P.clockIcon,"aria-hidden":`true`,...v(`time-picker`,`icon`),children:(0,L.jsx)(ce,{})})})}),(0,L.jsx)(ve,{ref:U,open:N&&!E&&!D,anchor:B,placement:`bottom-start`,branches:()=>[H],onDismiss:()=>F(!1),returnFocusOnEscape:()=>B,focusable:!0,role:`dialog`,tabIndex:-1,"aria-label":A,"aria-labelledby":j,className:P.popup,onKeyDown:Y,...v(`time-picker`,`content`,{state:`open`}),children:(0,L.jsx)(Ae,{value:M??ee(),hasValue:M!==null,format:S,use12Hours:c,showSecond:ke,hourStep:be,minuteStep:Ce,secondStep:Ee,minTime:ge,maxTime:_e,onTimeChange:q,visible:N,focusOnOpen:Pe})})]})})})))()}function B(){let[e,t]=(0,V.useState)();return(0,H.jsxs)(`div`,{children:[(0,H.jsx)(R,{onChange:t}),(0,H.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var V,H;function Me(){return(Me=t((()=>{V=n(),z(),H=r()})))()}function Ne(){let[e,t]=(0,U.useState)(null);return(0,W.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,W.jsx)(R,{label:`Meeting time`,value:e,onChange:e=>t(e??null)}),(0,W.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,W.jsx)(y,{size:`small`,onClick:()=>t(Pe()),children:`Set to noon`}),(0,W.jsx)(y,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(null),children:`Reset`})]}),(0,W.jsxs)(`p`,{children:[`Value: `,e?e.toLocaleTimeString():`null`]})]})}var U,W,Pe;function G(){return(G=t((()=>{U=n(),b(),z(),W=r(),Pe=()=>{let e=new Date;return e.setHours(12,0,0,0),e}})))()}function K(){return(0,q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,q.jsx)(R,{defaultValue:J}),(0,q.jsx)(R,{defaultValue:J,clearable:!1})]})}var q,J;function Fe(){return(Fe=t((()=>{z(),q=r(),J=new Date,J.setHours(9,30,0)})))()}function Ie(){return(0,Le.jsx)(R,{defaultValue:Y,disabled:!0})}var Le,Y;function Re(){return(Re=t((()=>{z(),Le=r(),Y=new Date,Y.setHours(12,0,0)})))()}function ze(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(R,{defaultValue:Be,format:`HH:mm:ss`}),(0,X.jsx)(R,{defaultValue:Be,format:`HH:mm`,showSecond:!1})]})}var X,Be;function Ve(){return(Ve=t((()=>{z(),X=r(),Be=new Date})))()}function He(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Z.jsx)(R,{size:`small`,placeholder:`Small`}),(0,Z.jsx)(R,{size:`medium`,placeholder:`Medium`}),(0,Z.jsx)(R,{size:`large`,placeholder:`Large`})]})}var Z;function Ue(){return(Ue=t((()=>{z(),Z=r()})))()}function We(){return(0,Ge.jsx)(R,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var Ge;function Ke(){return(Ke=t((()=>{z(),Ge=r()})))()}function qe(){return(0,Je.jsx)(R,{format:`HH:mm`,showSecond:!1,minTime:Ye(9),maxTime:Ye(17,30),placeholder:`Office hours 09:00–17:30`})}var Je,Ye;function Xe(){return(Xe=t((()=>{z(),Je=r(),Ye=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n}})))()}function Ze(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Q.jsx)(R,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,Q.jsx)(R,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var Q;function Qe(){return(Qe=t((()=>{z(),Q=r()})))()}var $e;function et(){return(et=t((()=>{$e=`import { useState } from "react";
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
`})))()}var $,_t,vt;function yt(){return(yt=t((()=>{Me(),G(),Fe(),Re(),Ve(),Ue(),Ke(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),n(),ie(),d(),u(),m(),$=r(),_t=f(Object.assign({"./demos/basic.tsx":B,"./demos/controlled.tsx":Ne,"./demos/default-value.tsx":K,"./demos/disabled.tsx":Ie,"./demos/formats.tsx":ze,"./demos/sizes.tsx":He,"./demos/steps.tsx":We,"./demos/time-range.tsx":qe,"./demos/twelve-hour.tsx":Ze}),Object.assign({"./demos/basic.tsx":$e,"./demos/controlled.tsx":tt,"./demos/default-value.tsx":rt,"./demos/disabled.tsx":at,"./demos/formats.tsx":st,"./demos/sizes.tsx":lt,"./demos/steps.tsx":dt,"./demos/time-range.tsx":pt,"./demos/twelve-hour.tsx":ht})),vt=()=>{let{t:e}=ae();return(0,$.jsx)(p,{id:`time-picker`,demos:_t,children:(0,$.jsxs)(`section`,{className:l.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.time-picker.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:l.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.select`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.typing`)})]})]})})}})))()}yt();export{vt as default};