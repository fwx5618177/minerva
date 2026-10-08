import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-aZSMfLKR.js";import{It as i,Ut as a,Vt as ee,X as te,cn as o,et as ne,st as s,zt as re}from"./minerva-web-components-e9i9Tzii.js";import{Q as c,Z as l,et as u,nt as d,rt as f,tt as p}from"./io5-Db3ldn2O.js";import{n as m,t as ie}from"./useI18n-Brv-VDVY.js";import{n as h,t as g}from"./Button-DP6INRXF.js";import{E as ae,T as oe,w as se}from"./icons-C9qyBhWC.js";import{i as ce,n as le,r as _,t as ue}from"./context-CofDH3-d.js";import{t as de}from"./dataAttributes-C-grv0bs.js";import{a as fe,i as pe}from"./useFocusScope-B_OMr7xS.js";import{t as me}from"./direction-B2fcyo3I.js";import{n as he,r as ge}from"./FloatingPanel-_azHlJqg.js";import{n as _e,t as ve}from"./IconButton-B4tqbPo6.js";import{n as ye,t as be}from"./Input-DlvVEIEg.js";import{n as xe,r as Se,t as Ce}from"./tabbing-BEMcZ1ol.js";import{c as we,i as Te,n as Ee,r as v,s as De,t as Oe}from"./DocPage-BeqNKFhE.js";var ke,y,b,Ae,x,S,C;function w(){return(w=t((()=>{ke=`_timePickerPanel_wmaox_1`,y=`_timeColumns_wmaox_10`,b=`_timeColumn_wmaox_10`,Ae=`_timeUnit_wmaox_30`,x=`_disabled_wmaox_39`,S=`_selected_wmaox_42`,C={timePickerPanel:ke,timeColumns:y,timeColumn:b,timeUnit:Ae,disabled:x,selected:S}})))()}var T,E,D,je;function O(){return(O=t((()=>{o(),m(),me(),w(),T=e(n(),1),E=r(),D=(e,t,n=0,r=()=>!1)=>{let i=[];for(let a=n;a<n+e;a+=Math.max(1,t))i.push({value:a,disabled:r(a),label:String(a).padStart(2,`0`)});return i},je=T.memo(({value:e,hasValue:t=!0,use12Hours:n,showSecond:r,hourStep:i=1,minuteStep:a=1,secondStep:ee=1,minTime:o,maxTime:s,onTimeChange:re,visible:c,focusOnOpen:l=!1})=>{let{t:u}=ie(),d=(0,T.useRef)(null),f=(0,T.useMemo)(()=>e??new Date(0),[e]),p=f.getHours(),m=f.getMinutes(),h=f.getSeconds(),g=p>=12,ae=e=>n?e%12+(g?12:0):e,oe=D(n?12:24,i,+!!n,e=>{let t=n?e%12+(g?12:0):e;return!!(o&&t<o.getHours()||s&&t>s.getHours())}),se=D(60,a,0,e=>!!(o&&p===o.getHours()&&e<o.getMinutes()||s&&p===s.getHours()&&e>s.getMinutes())),ce=D(60,ee,0,e=>{let t=o&&p===o.getHours()&&m===o.getMinutes(),n=s&&p===s.getHours()&&m===s.getMinutes();return!!(t&&e<o.getSeconds()||n&&e>s.getSeconds())}),le=[{value:0,label:`AM`,disabled:!1},{value:1,label:`PM`,disabled:!1}],_=[{kind:`hour`,label:u(`timePicker.hours`),items:oe,selected:n?p%12||12:p,toValue:ae},{kind:`minute`,label:u(`timePicker.minutes`),items:se,selected:m,toValue:e=>e}];r&&_.push({kind:`second`,label:u(`timePicker.seconds`),items:ce,selected:h,toValue:e=>e}),n&&_.push({kind:`ampm`,label:u(`timePicker.period`),items:le,selected:+!!g,toValue:e=>e}),(0,T.useEffect)(()=>{c&&d.current?.querySelectorAll(`[aria-selected="true"]`).forEach(e=>e.scrollIntoView?.({block:`nearest`}))},[c]),(0,T.useEffect)(()=>{c&&l&&d.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus()},[c,l]);let ue=(e,t)=>{let n=e.target,r=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)).filter(e=>e.getAttribute(`aria-disabled`)!==`true`),i=r.indexOf(n),a=e=>{(d.current?.querySelectorAll(`[role="listbox"]`)[e])?.querySelector(`[tabindex="0"]`)?.focus()};switch(ne(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),r[Math.min(r.length-1,i+1)]?.focus();break;case`ArrowUp`:e.preventDefault(),r[Math.max(0,i-1)]?.focus();break;case`Home`:e.preventDefault(),r[0]?.focus();break;case`End`:e.preventDefault(),r[r.length-1]?.focus();break;case`ArrowRight`:e.preventDefault(),a(Math.min(_.length-1,t+1));break;case`ArrowLeft`:e.preventDefault(),a(Math.max(0,t-1))}},de=(e,t,n)=>{n.disabled||re(e,t(n.value))};return(0,E.jsx)(`div`,{className:C.timePickerPanel,ref:d,children:(0,E.jsx)(`div`,{className:C.timeColumns,children:_.map((e,n)=>{let r=e.items.find(e=>!e.disabled)?.value,i=e.items.some(t=>t.value===e.selected&&!t.disabled)?e.selected:r;return(0,E.jsx)(`div`,{className:C.timeColumn,role:`listbox`,"aria-label":e.label,tabIndex:-1,onKeyDown:e=>ue(e,n),children:e.items.map(n=>{let r=t&&n.value===e.selected;return(0,E.jsx)(`div`,{role:`option`,"aria-selected":r,"aria-disabled":n.disabled||void 0,tabIndex:n.value===i?0:-1,className:te(C.timeUnit,{[C.selected]:r,[C.disabled]:n.disabled}),onClick:()=>de(e.kind,e.toValue,n),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),de(e.kind,e.toValue,n))},children:n.label},n.value)})},e.kind)})})})})})))()}var k,A,Me,j,M;function N(){return(N=t((()=>{k=`_timePicker_zkaej_1`,A=`_clearButton_zkaej_6`,Me=`_clockIcon_zkaej_22`,j=`_popup_zkaej_29`,M={timePicker:k,clearButton:A,clockIcon:Me,popup:j}})))()}var P,F,I;function L(){return(L=t((()=>{o(),m(),oe(),u(),c(),le(),pe(),ge(),_e(),be(),O(),Ce(),N(),P=e(n(),1),F=r(),I=P.memo(({ref:e,value:t,defaultValue:n,onChange:r,format:o=`HH:mm:ss`,use12Hours:ne=!1,placeholder:c,label:u,"aria-label":d,"aria-labelledby":f,"aria-describedby":m,id:h,required:g,readOnly:oe,invalid:le,name:pe=`time-picker`,disabled:me,clearable:ge=!0,size:_e=`medium`,className:be=``,style:Ce,minTime:we,maxTime:Te,showSecond:Ee=!0,hourStep:v=1,minuteStep:De=1,secondStep:Oe=1,onOpenChange:ke,...y})=>{let b=ee(o,Ee),Ae=a(b),{t:x}=ie(),S=ce(),C=ue({id:h,"aria-describedby":m}),w=me??S?.disabled??!1,T=oe??S?.readOnly??!1,E=g??S?.required??!1,D=le??S?.invalid??!1,O=u??d??x(`timePicker.label`),k=f??(S&&!u&&!d?S.labelId:void 0),[A,Me]=l({value:t,defaultValue:n??null,name:`TimePicker`}),[j,N]=l({defaultValue:!1,onChange:ke,name:`TimePicker`,prop:`open`}),[I,L]=(0,P.useState)(null),[R,Ne]=(0,P.useState)(null),[z,B]=(0,P.useState)(null),Pe=p(Ne,e),V=(0,P.useRef)(null),H=fe(),[U,W]=(0,P.useState)(!1),G=e=>{Me(e),r?.(e??void 0)},K=(e,t)=>{let n=new Date(A??re());if(e===`hour`)n.setHours(t);else if(e===`minute`)n.setMinutes(t);else if(e===`second`)n.setSeconds(t);else{let e=n.getHours()%12;n.setHours(t===1?e+12:e)}L(null),G(n)},q=e=>{L(e);let t=i(e,b,{strict:!0,base:A??void 0});t&&G(t)},Fe=()=>{if(I!==null){if(I.trim()===``)A&&G(null);else{let e=i(I,b,{strict:!1,base:A??void 0});e&&e.getTime()!==A?.getTime()&&G(e)}L(null)}},Ie=()=>{L(null),G(null),R?.focus()},J=()=>{w||T||(W(!1),N(e=>!e))},Y=e=>{let t=e.currentTarget;!R||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey||!xe(t,e.target,e.shiftKey)||(e.preventDefault(),(e.shiftKey?R:Se(R,H??R.ownerDocument.body,!1)??R).focus(),N(!1))},Le=I??(A?s(A,b):``);return(0,F.jsxs)(`div`,{...de(y),ref:B,className:te(M.timePicker,be),style:Ce,onClick:e=>{e.target===R&&J()},children:[(0,F.jsx)(_.Provider,{value:null,children:(0,F.jsx)(ye,{ref:Pe,value:Le,placeholder:c??x(`timePicker.placeholder`),id:C.id,"aria-label":O,"aria-labelledby":k,"aria-describedby":C[`aria-describedby`],"aria-invalid":D||void 0,"aria-readonly":T||void 0,required:E,readOnly:T,onChange:e=>q(e.target.value),onBlur:Fe,onKeyDown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),j?V.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus():(W(!0),N(!0)))},name:pe,disabled:w,size:_e,suffix:ge&&A&&!w&&!T?(0,F.jsx)(ve,{icon:(0,F.jsx)(se,{"aria-hidden":!0,focusable:!1}),size:`small`,"aria-label":x(`timePicker.clear`),onClick:Ie,className:M.clearButton}):(0,F.jsx)(`span`,{className:M.clockIcon,"aria-hidden":`true`,children:(0,F.jsx)(ae,{})})})}),(0,F.jsx)(he,{ref:V,open:j&&!w&&!T,anchor:R,placement:`bottom-start`,branches:()=>[z],onDismiss:()=>N(!1),returnFocusOnEscape:()=>R,focusable:!0,role:`dialog`,tabIndex:-1,"aria-label":O,"aria-labelledby":k,className:M.popup,onKeyDown:Y,children:(0,F.jsx)(je,{value:A??re(),hasValue:A!==null,format:b,use12Hours:ne,showSecond:Ae,hourStep:v,minuteStep:De,secondStep:Oe,minTime:we,maxTime:Te,onTimeChange:K,visible:j,focusOnOpen:U})})]})})})))()}function R(){let[e,t]=(0,Ne.useState)();return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(I,{onChange:t}),(0,z.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var Ne,z;function B(){return(B=t((()=>{Ne=n(),L(),z=r()})))()}function Pe(){let[e,t]=(0,V.useState)(null);return(0,H.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,H.jsx)(I,{label:`Meeting time`,value:e,onChange:e=>t(e??null)}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,H.jsx)(g,{size:`small`,onClick:()=>t(U()),children:`Set to noon`}),(0,H.jsx)(g,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(null),children:`Reset`})]}),(0,H.jsxs)(`p`,{children:[`Value: `,e?e.toLocaleTimeString():`null`]})]})}var V,H,U;function W(){return(W=t((()=>{V=n(),h(),L(),H=r(),U=()=>{let e=new Date;return e.setHours(12,0,0,0),e}})))()}function G(){return(0,K.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,K.jsx)(I,{defaultValue:q}),(0,K.jsx)(I,{defaultValue:q,clearable:!1})]})}var K,q;function Fe(){return(Fe=t((()=>{L(),K=r(),q=new Date,q.setHours(9,30,0)})))()}function Ie(){return(0,J.jsx)(I,{defaultValue:Y,disabled:!0})}var J,Y;function Le(){return(Le=t((()=>{L(),J=r(),Y=new Date,Y.setHours(12,0,0)})))()}function Re(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(I,{defaultValue:ze,format:`HH:mm:ss`}),(0,X.jsx)(I,{defaultValue:ze,format:`HH:mm`,showSecond:!1})]})}var X,ze;function Be(){return(Be=t((()=>{L(),X=r(),ze=new Date})))()}function Ve(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Z.jsx)(I,{size:`small`,placeholder:`Small`}),(0,Z.jsx)(I,{size:`medium`,placeholder:`Medium`}),(0,Z.jsx)(I,{size:`large`,placeholder:`Large`})]})}var Z;function He(){return(He=t((()=>{L(),Z=r()})))()}function Ue(){return(0,We.jsx)(I,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var We;function Ge(){return(Ge=t((()=>{L(),We=r()})))()}function Ke(){return(0,qe.jsx)(I,{format:`HH:mm`,showSecond:!1,minTime:Je(9),maxTime:Je(17,30),placeholder:`Office hours 09:00–17:30`})}var qe,Je;function Ye(){return(Ye=t((()=>{L(),qe=r(),Je=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n}})))()}function Xe(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Q.jsx)(I,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,Q.jsx)(I,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var Q;function Ze(){return(Ze=t((()=>{L(),Q=r()})))()}var Qe;function $e(){return($e=t((()=>{Qe=`import { useState } from "react";
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
`})))()}var et;function tt(){return(tt=t((()=>{et=`import { useState } from "react";
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
`})))()}var nt;function rt(){return(rt=t((()=>{nt=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var it;function at(){return(at=t((()=>{it=`import { TimePicker } from "@minerva/lib-core";

const noon = new Date();
noon.setHours(12, 0, 0);

export default function DisabledDemo() {
  return <TimePicker defaultValue={noon} disabled />;
}
`})))()}var ot;function st(){return(st=t((()=>{ot=`import { TimePicker } from "@minerva/lib-core";

const now = new Date();

export default function FormatsDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker defaultValue={now} format="HH:mm:ss" />
      <TimePicker defaultValue={now} format="HH:mm" showSecond={false} />
    </div>
  );
}
`})))()}var ct;function lt(){return(lt=t((()=>{ct=`import { TimePicker } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <TimePicker size="small" placeholder="Small" />
      <TimePicker size="medium" placeholder="Medium" />
      <TimePicker size="large" placeholder="Large" />
    </div>
  );
}
`})))()}var ut;function dt(){return(dt=t((()=>{ut=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var ft;function pt(){return(pt=t((()=>{ft=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var mt;function ht(){return(ht=t((()=>{mt=`import { TimePicker } from "@minerva/lib-core";

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
`})))()}var $,gt,_t;function vt(){return(vt=t((()=>{B(),W(),Fe(),Le(),Be(),He(),Ge(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),n(),d(),Ee(),we(),Te(),$=r(),gt=De(Object.assign({"./demos/basic.tsx":R,"./demos/controlled.tsx":Pe,"./demos/default-value.tsx":G,"./demos/disabled.tsx":Ie,"./demos/formats.tsx":Re,"./demos/sizes.tsx":Ve,"./demos/steps.tsx":Ue,"./demos/time-range.tsx":Ke,"./demos/twelve-hour.tsx":Xe}),Object.assign({"./demos/basic.tsx":Qe,"./demos/controlled.tsx":et,"./demos/default-value.tsx":nt,"./demos/disabled.tsx":it,"./demos/formats.tsx":ot,"./demos/sizes.tsx":ct,"./demos/steps.tsx":ut,"./demos/time-range.tsx":ft,"./demos/twelve-hour.tsx":mt})),_t=()=>{let{t:e}=f();return(0,$.jsx)(Oe,{id:`time-picker`,demos:gt,children:(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.time-picker.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:v.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.select`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.typing`)})]})]})})}})))()}vt();export{_t as default};