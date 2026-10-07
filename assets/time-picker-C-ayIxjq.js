import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{h as n,t as r}from"./react-vendor-fq7Q804H.js";import{n as i,t as a}from"./cn-CJDie0PQ.js";import{n as o,t as s}from"./useI18n-DtQV8aM0.js";import{n as c,t as l}from"./Button-CG2pPO-r.js";import{E as u,T as d,w as f}from"./icons-CtD3xdmP.js";import{i as p,n as m,r as h,t as g}from"./context-DEmBurf8.js";import{n as _,t as v}from"./mergeRefs-CWbOvZcQ.js";import{t as ee}from"./dataAttributes-C-grv0bs.js";import{n as y,t as b}from"./useControllableState-NzKJCN8h.js";import{a as te,i as x}from"./useFocusScope-CIrWfRLt.js";import{n as ne,t as re}from"./direction-BdBdG3Jn.js";import{n as ie,r as S}from"./FloatingPanel-BYk7er3l.js";import{n as ae,t as C}from"./IconButton-CmtS4-FY.js";import{n as oe,t as se}from"./Input-DrhPsTO_.js";import{n as ce,r as le,t as ue}from"./tabbing-jOsV3vi-.js";import{Q as de,Z as fe}from"./sample-Dya6Jarx.js";import{a as pe,c as me,n as he,o as ge,s as _e,t as ve}from"./DocPage-DzKszXiH.js";var ye,be,w,T,E,D,O;function xe(){return(xe=t((()=>{ye=`_timePickerPanel_wmaox_1`,be=`_timeColumns_wmaox_10`,w=`_timeColumn_wmaox_10`,T=`_timeUnit_wmaox_30`,E=`_disabled_wmaox_39`,D=`_selected_wmaox_42`,O={timePickerPanel:ye,timeColumns:be,timeColumn:w,timeUnit:T,disabled:E,selected:D}})))()}var k,A,j,Se;function M(){return(M=t((()=>{a(),o(),ne(),xe(),k=e(n(),1),A=r(),j=(e,t,n=0,r=()=>!1)=>{let i=[];for(let a=n;a<n+e;a+=Math.max(1,t))i.push({value:a,disabled:r(a),label:String(a).padStart(2,`0`)});return i},Se=k.memo(({value:e,hasValue:t=!0,use12Hours:n,showSecond:r,hourStep:a=1,minuteStep:o=1,secondStep:c=1,minTime:l,maxTime:u,onTimeChange:d,visible:f,focusOnOpen:p=!1})=>{let{t:m}=s(),h=(0,k.useRef)(null),g=(0,k.useMemo)(()=>e??new Date(0),[e]),_=g.getHours(),v=g.getMinutes(),ee=g.getSeconds(),y=_>=12,b=e=>n?e%12+(y?12:0):e,te=j(n?12:24,a,+!!n,e=>{let t=n?e%12+(y?12:0):e;return!!(l&&t<l.getHours()||u&&t>u.getHours())}),x=j(60,o,0,e=>!!(l&&_===l.getHours()&&e<l.getMinutes()||u&&_===u.getHours()&&e>u.getMinutes())),ne=j(60,c,0,e=>{let t=l&&_===l.getHours()&&v===l.getMinutes(),n=u&&_===u.getHours()&&v===u.getMinutes();return!!(t&&e<l.getSeconds()||n&&e>u.getSeconds())}),ie=[{value:0,label:`AM`,disabled:!1},{value:1,label:`PM`,disabled:!1}],S=[{kind:`hour`,label:m(`timePicker.hours`),items:te,selected:n?_%12||12:_,toValue:b},{kind:`minute`,label:m(`timePicker.minutes`),items:x,selected:v,toValue:e=>e}];r&&S.push({kind:`second`,label:m(`timePicker.seconds`),items:ne,selected:ee,toValue:e=>e}),n&&S.push({kind:`ampm`,label:m(`timePicker.period`),items:ie,selected:+!!y,toValue:e=>e}),(0,k.useEffect)(()=>{f&&h.current?.querySelectorAll(`[aria-selected="true"]`).forEach(e=>e.scrollIntoView?.({block:`nearest`}))},[f]),(0,k.useEffect)(()=>{f&&p&&h.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus()},[f,p]);let ae=(e,t)=>{let n=e.target,r=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)).filter(e=>e.getAttribute(`aria-disabled`)!==`true`),i=r.indexOf(n),a=e=>{(h.current?.querySelectorAll(`[role="listbox"]`)[e])?.querySelector(`[tabindex="0"]`)?.focus()};switch(re(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),r[Math.min(r.length-1,i+1)]?.focus();break;case`ArrowUp`:e.preventDefault(),r[Math.max(0,i-1)]?.focus();break;case`Home`:e.preventDefault(),r[0]?.focus();break;case`End`:e.preventDefault(),r[r.length-1]?.focus();break;case`ArrowRight`:e.preventDefault(),a(Math.min(S.length-1,t+1));break;case`ArrowLeft`:e.preventDefault(),a(Math.max(0,t-1))}},C=(e,t,n)=>{n.disabled||d(e,t(n.value))};return(0,A.jsx)(`div`,{className:O.timePickerPanel,ref:h,children:(0,A.jsx)(`div`,{className:O.timeColumns,children:S.map((e,n)=>{let r=e.items.find(e=>!e.disabled)?.value,a=e.items.some(t=>t.value===e.selected&&!t.disabled)?e.selected:r;return(0,A.jsx)(`div`,{className:O.timeColumn,role:`listbox`,"aria-label":e.label,tabIndex:-1,onKeyDown:e=>ae(e,n),children:e.items.map(n=>{let r=t&&n.value===e.selected;return(0,A.jsx)(`div`,{role:`option`,"aria-selected":r,"aria-disabled":n.disabled||void 0,tabIndex:n.value===a?0:-1,className:i(O.timeUnit,{[O.selected]:r,[O.disabled]:n.disabled}),onClick:()=>C(e.kind,e.toValue,n),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),C(e.kind,e.toValue,n))},children:n.label},n.value)})},e.kind)})})})})})))()}var N,P,Ce,we,Te;function F(){return(F=t((()=>{N=/(HH|H|hh|h|mm|m|ss|s|a)/g,P=e=>String(e).padStart(2,`0`),Ce=(e,t)=>{let n=e.getHours(),r=n%12||12,i={HH:P(n),H:String(n),hh:P(r),h:String(r),mm:P(e.getMinutes()),m:String(e.getMinutes()),ss:P(e.getSeconds()),s:String(e.getSeconds()),a:n>=12?`PM`:`AM`};return t.replace(N,e=>i[e])},we=(e,t,{strict:n,base:r})=>{let i=e.trim();if(!i)return;let a=t.match(N)??[];if(n){let e=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`).replace(N,e=>e===`a`?`\\s*([AaPp][Mm])`:`(\\d{${e.length===2?2:`1,2`}})`);if(!RegExp(`^${e}$`).test(i))return}let o=i.match(/\d+/g)??[],s=i.match(/[AaPp][Mm]/)?.[0]?.toUpperCase(),c=a.filter(e=>e!==`a`);if(o.length!==c.length)return;let l=c.some(e=>e.startsWith(`h`));if(l&&a.includes(`a`)&&!s)return;let u=0,d=0,f=0;if(c.forEach((e,t)=>{let n=Number(o[t]);e.startsWith(`H`)||e.startsWith(`h`)?u=n:e.startsWith(`m`)?d=n:f=n}),l){if(u<1||u>12)return;s===`PM`&&u<12&&(u+=12),s===`AM`&&u===12&&(u=0)}if(u>23||d>59||f>59)return;let p=new Date(r??new Date);return p.setHours(u,d,f,0),p},Te=()=>{let e=new Date;return e.setHours(0,0,0,0),e}})))()}var I,L,R,Ee,z;function De(){return(De=t((()=>{I=`_timePicker_zkaej_1`,L=`_clearButton_zkaej_6`,R=`_clockIcon_zkaej_22`,Ee=`_popup_zkaej_29`,z={timePicker:I,clearButton:L,clockIcon:R,popup:Ee}})))()}var B,V,H;function U(){return(U=t((()=>{a(),o(),d(),v(),y(),m(),x(),S(),C(),oe(),M(),F(),ue(),De(),B=e(n(),1),V=r(),H=B.memo(({ref:e,value:t,defaultValue:n,onChange:r,format:a=`HH:mm:ss`,use12Hours:o=!1,placeholder:c,label:l,"aria-label":d,"aria-labelledby":m,"aria-describedby":v,id:y,required:x,readOnly:ne,invalid:re,name:S=`time-picker`,disabled:C,clearable:oe=!0,size:ue=`medium`,className:de=``,style:fe,minTime:pe,maxTime:me,showSecond:he=!0,hourStep:ge=1,minuteStep:_e=1,secondStep:ve=1,onOpenChange:ye,...be})=>{let{t:w}=s(),T=p(),E=g({id:y,"aria-describedby":v}),D=C??T?.disabled??!1,O=ne??T?.readOnly??!1,xe=x??T?.required??!1,k=re??T?.invalid??!1,A=l??d??w(`timePicker.label`),j=m??(T&&!l&&!d?T.labelId:void 0),[M,N]=b({value:t,defaultValue:n??null}),[P,F]=b({defaultValue:!1,onChange:ye}),[I,L]=(0,B.useState)(null),[R,Ee]=(0,B.useState)(null),[De,H]=(0,B.useState)(null),U=_(Ee,e),Oe=(0,B.useRef)(null),ke=te(),[W,G]=(0,B.useState)(!1),K=e=>{N(e),r?.(e??void 0)},Ae=(e,t)=>{let n=new Date(M??Te());if(e===`hour`)n.setHours(t);else if(e===`minute`)n.setMinutes(t);else if(e===`second`)n.setSeconds(t);else{let e=n.getHours()%12;n.setHours(t===1?e+12:e)}L(null),K(n)},q=e=>{L(e);let t=we(e,a,{strict:!0,base:M??void 0});t&&K(t)},je=()=>{if(I!==null){if(I.trim()===``)M&&K(null);else{let e=we(I,a,{strict:!1,base:M??void 0});e&&e.getTime()!==M?.getTime()&&K(e)}L(null)}},Me=()=>{L(null),K(null),R?.focus()},Ne=()=>{D||O||(G(!1),F(e=>!e))},J=e=>{let t=e.currentTarget;!R||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey||!ce(t,e.target,e.shiftKey)||(e.preventDefault(),(e.shiftKey?R:le(R,ke??R.ownerDocument.body,!1)??R).focus(),F(!1))},Y=I??(M?Ce(M,a):``);return(0,V.jsxs)(`div`,{...ee(be),ref:H,className:i(z.timePicker,de),style:fe,onClick:e=>{e.target===R&&Ne()},children:[(0,V.jsx)(h.Provider,{value:null,children:(0,V.jsx)(se,{ref:U,value:Y,placeholder:c??w(`timePicker.placeholder`),id:E.id,"aria-label":A,"aria-labelledby":j,"aria-describedby":E[`aria-describedby`],"aria-invalid":k||void 0,"aria-readonly":O||void 0,required:xe,readOnly:O,onChange:e=>q(e.target.value),onBlur:je,onKeyDown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),P?Oe.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus():(G(!0),F(!0)))},name:S,disabled:D,size:ue,suffix:oe&&M&&!D&&!O?(0,V.jsx)(ae,{icon:(0,V.jsx)(f,{"aria-hidden":!0,focusable:!1}),size:`small`,"aria-label":w(`timePicker.clear`),onClick:Me,className:z.clearButton}):(0,V.jsx)(`span`,{className:z.clockIcon,"aria-hidden":`true`,children:(0,V.jsx)(u,{})})})}),(0,V.jsx)(ie,{ref:Oe,open:P&&!D&&!O,anchor:R,placement:`bottom-start`,branches:()=>[De],onDismiss:()=>F(!1),returnFocusOnEscape:()=>R,focusable:!0,role:`dialog`,tabIndex:-1,"aria-label":A,"aria-labelledby":j,className:z.popup,onKeyDown:J,children:(0,V.jsx)(Se,{value:M??Te(),hasValue:M!==null,format:a,use12Hours:o,showSecond:he,hourStep:ge,minuteStep:_e,secondStep:ve,minTime:pe,maxTime:me,onTimeChange:Ae,visible:P,focusOnOpen:W})})]})})})))()}function Oe(){let[e,t]=(0,ke.useState)();return(0,W.jsxs)(`div`,{children:[(0,W.jsx)(H,{onChange:t}),(0,W.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var ke,W;function G(){return(G=t((()=>{ke=n(),U(),W=r()})))()}function K(){let[e,t]=(0,Ae.useState)(null);return(0,q.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,q.jsx)(H,{label:`Meeting time`,value:e,onChange:e=>t(e??null)}),(0,q.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,q.jsx)(l,{size:`small`,onClick:()=>t(je()),children:`Set to noon`}),(0,q.jsx)(l,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(null),children:`Reset`})]}),(0,q.jsxs)(`p`,{children:[`Value: `,e?e.toLocaleTimeString():`null`]})]})}var Ae,q,je;function Me(){return(Me=t((()=>{Ae=n(),c(),U(),q=r(),je=()=>{let e=new Date;return e.setHours(12,0,0,0),e}})))()}function Ne(){return(0,J.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,J.jsx)(H,{defaultValue:Y}),(0,J.jsx)(H,{defaultValue:Y,clearable:!1})]})}var J,Y;function Pe(){return(Pe=t((()=>{U(),J=r(),Y=new Date,Y.setHours(9,30,0)})))()}function Fe(){return(0,Ie.jsx)(H,{defaultValue:Le,disabled:!0})}var Ie,Le;function Re(){return(Re=t((()=>{U(),Ie=r(),Le=new Date,Le.setHours(12,0,0)})))()}function ze(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(H,{defaultValue:Be,format:`HH:mm:ss`}),(0,X.jsx)(H,{defaultValue:Be,format:`HH:mm`,showSecond:!1})]})}var X,Be;function Ve(){return(Ve=t((()=>{U(),X=r(),Be=new Date})))()}function He(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Z.jsx)(H,{size:`small`,placeholder:`Small`}),(0,Z.jsx)(H,{size:`medium`,placeholder:`Medium`}),(0,Z.jsx)(H,{size:`large`,placeholder:`Large`})]})}var Z;function Ue(){return(Ue=t((()=>{U(),Z=r()})))()}function We(){return(0,Ge.jsx)(H,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var Ge;function Ke(){return(Ke=t((()=>{U(),Ge=r()})))()}function qe(){return(0,Je.jsx)(H,{format:`HH:mm`,showSecond:!1,minTime:Ye(9),maxTime:Ye(17,30),placeholder:`Office hours 09:00–17:30`})}var Je,Ye;function Xe(){return(Xe=t((()=>{U(),Je=r(),Ye=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n}})))()}function Ze(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Q.jsx)(H,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,Q.jsx)(H,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var Q;function Qe(){return(Qe=t((()=>{U(),Q=r()})))()}var $e;function et(){return(et=t((()=>{$e=`import { useState } from "react";
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
`})))()}var $,_t,vt;function yt(){return(yt=t((()=>{G(),Me(),Pe(),Re(),Ve(),Ue(),Ke(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),n(),fe(),he(),me(),ge(),$=r(),_t=_e(Object.assign({"./demos/basic.tsx":Oe,"./demos/controlled.tsx":K,"./demos/default-value.tsx":Ne,"./demos/disabled.tsx":Fe,"./demos/formats.tsx":ze,"./demos/sizes.tsx":He,"./demos/steps.tsx":We,"./demos/time-range.tsx":qe,"./demos/twelve-hour.tsx":Ze}),Object.assign({"./demos/basic.tsx":$e,"./demos/controlled.tsx":tt,"./demos/default-value.tsx":rt,"./demos/disabled.tsx":at,"./demos/formats.tsx":st,"./demos/sizes.tsx":lt,"./demos/steps.tsx":dt,"./demos/time-range.tsx":pt,"./demos/twelve-hour.tsx":ht})),vt=()=>{let{t:e}=de();return(0,$.jsx)(ve,{id:`time-picker`,demos:_t,children:(0,$.jsxs)(`section`,{className:pe.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.time-picker.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:pe.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.select`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.typing`)})]})]})})}})))()}yt();export{vt as default};