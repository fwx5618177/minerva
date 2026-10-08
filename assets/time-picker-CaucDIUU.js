import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-aZSMfLKR.js";import{It as i,Ut as a,Vt as ee,X as te,cn as o,et as ne,st as s,zt as re}from"./minerva-web-components-e9i9Tzii.js";import{l as c,m as l,n as u,p as d,t as f,u as p}from"./DocPage-9P1WMt4D.js";import{Q as m,Z as ie,et as h,nt as g,rt as _,tt as ae}from"./io5-ChQeTV8D.js";import{n as v,t as oe}from"./useI18n-Brv-VDVY.js";import{t as y}from"./stylingHooks-GjssfG7q.js";import{n as b,t as x}from"./Button-DN5Do18G.js";import{E as se,T as S,w as ce}from"./icons-C9qyBhWC.js";import{i as le,n as ue,r as de,t as fe}from"./context-CofDH3-d.js";import{t as pe}from"./dataAttributes-C-grv0bs.js";import{a as me,i as he}from"./useFocusScope-B_OMr7xS.js";import{t as ge}from"./direction-B2fcyo3I.js";import{n as _e,r as ve}from"./FloatingPanel-TXrTZjlQ.js";import{n as ye,t as be}from"./IconButton-CG7CH5Tv.js";import{n as xe,t as Se}from"./Input-DbQUT3J4.js";import{n as Ce,r as we,t as Te}from"./tabbing-BEMcZ1ol.js";var Ee,De,C,Oe,w,T,E;function D(){return(D=t((()=>{Ee=`_timePickerPanel_1vn4s_1`,De=`_timeColumns_1vn4s_10`,C=`_timeColumn_1vn4s_10`,Oe=`_timeUnit_1vn4s_26`,w=`_disabled_1vn4s_35`,T=`_selected_1vn4s_38`,E={timePickerPanel:Ee,timeColumns:De,timeColumn:C,timeUnit:Oe,disabled:w,selected:T}})))()}var O,k,A,ke;function j(){return(j=t((()=>{o(),v(),ge(),D(),O=e(n(),1),k=r(),A=(e,t,n=0,r=()=>!1)=>{let i=[];for(let a=n;a<n+e;a+=Math.max(1,t))i.push({value:a,disabled:r(a),label:String(a).padStart(2,`0`)});return i},ke=O.memo(({value:e,hasValue:t=!0,use12Hours:n,showSecond:r,hourStep:i=1,minuteStep:a=1,secondStep:ee=1,minTime:o,maxTime:s,onTimeChange:re,visible:c,focusOnOpen:l=!1})=>{let{t:u}=oe(),d=(0,O.useRef)(null),f=(0,O.useMemo)(()=>e??new Date(0),[e]),p=f.getHours(),m=f.getMinutes(),ie=f.getSeconds(),h=p>=12,g=e=>n?e%12+(h?12:0):e,_=A(n?12:24,i,+!!n,e=>{let t=n?e%12+(h?12:0):e;return!!(o&&t<o.getHours()||s&&t>s.getHours())}),ae=A(60,a,0,e=>!!(o&&p===o.getHours()&&e<o.getMinutes()||s&&p===s.getHours()&&e>s.getMinutes())),v=A(60,ee,0,e=>{let t=o&&p===o.getHours()&&m===o.getMinutes(),n=s&&p===s.getHours()&&m===s.getMinutes();return!!(t&&e<o.getSeconds()||n&&e>s.getSeconds())}),b=[{value:0,label:`AM`,disabled:!1},{value:1,label:`PM`,disabled:!1}],x=[{kind:`hour`,label:u(`timePicker.hours`),items:_,selected:n?p%12||12:p,toValue:g},{kind:`minute`,label:u(`timePicker.minutes`),items:ae,selected:m,toValue:e=>e}];r&&x.push({kind:`second`,label:u(`timePicker.seconds`),items:v,selected:ie,toValue:e=>e}),n&&x.push({kind:`ampm`,label:u(`timePicker.period`),items:b,selected:+!!h,toValue:e=>e}),(0,O.useEffect)(()=>{c&&d.current?.querySelectorAll(`[aria-selected="true"]`).forEach(e=>e.scrollIntoView?.({block:`nearest`}))},[c]),(0,O.useEffect)(()=>{c&&l&&d.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus()},[c,l]);let se=(e,t)=>{let n=e.target,r=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)).filter(e=>e.getAttribute(`aria-disabled`)!==`true`),i=r.indexOf(n),a=e=>{(d.current?.querySelectorAll(`[role="listbox"]`)[e])?.querySelector(`[tabindex="0"]`)?.focus()};switch(ne(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),r[Math.min(r.length-1,i+1)]?.focus();break;case`ArrowUp`:e.preventDefault(),r[Math.max(0,i-1)]?.focus();break;case`Home`:e.preventDefault(),r[0]?.focus();break;case`End`:e.preventDefault(),r[r.length-1]?.focus();break;case`ArrowRight`:e.preventDefault(),a(Math.min(x.length-1,t+1));break;case`ArrowLeft`:e.preventDefault(),a(Math.max(0,t-1))}},S=(e,t,n)=>{n.disabled||re(e,t(n.value))};return(0,k.jsx)(`div`,{className:E.timePickerPanel,ref:d,children:(0,k.jsx)(`div`,{className:E.timeColumns,children:x.map((e,n)=>{let r=e.items.find(e=>!e.disabled)?.value,i=e.items.some(t=>t.value===e.selected&&!t.disabled)?e.selected:r;return(0,k.jsx)(`div`,{className:E.timeColumn,...y(`time-picker`,`column`),role:`listbox`,"aria-label":e.label,tabIndex:-1,onKeyDown:e=>se(e,n),children:e.items.map(n=>{let r=t&&n.value===e.selected;return(0,k.jsx)(`div`,{...y(`time-picker`,`item`,{selected:r,disabled:n.disabled}),role:`option`,"aria-selected":r,"aria-disabled":n.disabled||void 0,tabIndex:n.value===i?0:-1,className:te(E.timeUnit,{[E.selected]:r,[E.disabled]:n.disabled}),onClick:()=>S(e.kind,e.toValue,n),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),S(e.kind,e.toValue,n))},children:n.label},n.value)})},e.kind)})})})})})))()}var M,N,Ae,P,F;function I(){return(I=t((()=>{M=`_timePicker_zkaej_1`,N=`_clearButton_zkaej_6`,Ae=`_clockIcon_zkaej_22`,P=`_popup_zkaej_29`,F={timePicker:M,clearButton:N,clockIcon:Ae,popup:P}})))()}var L,R,z;function B(){return(B=t((()=>{o(),v(),S(),h(),m(),ue(),he(),ve(),ye(),Se(),j(),Te(),I(),L=e(n(),1),R=r(),z=L.memo(({ref:e,value:t,defaultValue:n,onChange:r,format:o=`HH:mm:ss`,use12Hours:ne=!1,placeholder:c,label:l,"aria-label":u,"aria-labelledby":d,"aria-describedby":f,id:p,required:m,readOnly:h,invalid:g,name:_=`time-picker`,disabled:v,clearable:b=!0,size:x=`medium`,className:S=``,style:ue,minTime:he,maxTime:ge,showSecond:ve=!0,hourStep:ye=1,minuteStep:Se=1,secondStep:Te=1,onOpenChange:Ee,...De})=>{let C=ee(o,ve),Oe=a(C),{t:w}=oe(),T=le(),E=fe({id:p,"aria-describedby":f}),D=v??T?.disabled??!1,O=h??T?.readOnly??!1,k=m??T?.required??!1,A=g??T?.invalid??!1,j=l??u??w(`timePicker.label`),M=d??(T&&!l&&!u?T.labelId:void 0),[N,Ae]=ie({value:t,defaultValue:n??null,name:`TimePicker`}),[P,I]=ie({defaultValue:!1,onChange:Ee,name:`TimePicker`,prop:`open`}),[z,B]=(0,L.useState)(null),[V,je]=(0,L.useState)(null),[H,Me]=(0,L.useState)(null),Ne=ae(je,e),U=(0,L.useRef)(null),W=me(),[Pe,G]=(0,L.useState)(!1),K=e=>{Ae(e),r?.(e??void 0)},q=(e,t)=>{let n=new Date(N??re());if(e===`hour`)n.setHours(t);else if(e===`minute`)n.setMinutes(t);else if(e===`second`)n.setSeconds(t);else{let e=n.getHours()%12;n.setHours(t===1?e+12:e)}B(null),K(n)},J=e=>{B(e);let t=i(e,C,{strict:!0,base:N??void 0});t&&K(t)},Fe=()=>{if(z!==null){if(z.trim()===``)N&&K(null);else{let e=i(z,C,{strict:!1,base:N??void 0});e&&e.getTime()!==N?.getTime()&&K(e)}B(null)}},Ie=()=>{B(null),K(null),V?.focus()},Le=()=>{D||O||(G(!1),I(e=>!e))},Y=e=>{let t=e.currentTarget;!V||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey||!Ce(t,e.target,e.shiftKey)||(e.preventDefault(),(e.shiftKey?V:we(V,W??V.ownerDocument.body,!1)??V).focus(),I(!1))},Re=z??(N?s(N,C):``);return(0,R.jsxs)(`div`,{...pe(De),ref:Me,className:te(F.timePicker,S),style:ue,onClick:e=>{e.target===V&&Le()},...y(`time-picker`,`root`,{state:P&&!D&&!O?`open`:`closed`,disabled:D,readonly:O,invalid:A,size:x}),children:[(0,R.jsx)(de.Provider,{value:null,children:(0,R.jsx)(xe,{ref:Ne,value:Re,placeholder:c??w(`timePicker.placeholder`),id:E.id,"aria-label":j,"aria-labelledby":M,"aria-describedby":E[`aria-describedby`],"aria-invalid":A||void 0,"aria-readonly":O||void 0,required:k,readOnly:O,onChange:e=>J(e.target.value),onBlur:Fe,onKeyDown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),P?U.current?.querySelector(`[role="option"][tabindex="0"]`)?.focus():(G(!0),I(!0)))},name:_,disabled:D,size:x,suffix:b&&N&&!D&&!O?(0,R.jsx)(be,{icon:(0,R.jsx)(ce,{"aria-hidden":!0,focusable:!1}),size:`small`,"aria-label":w(`timePicker.clear`),onClick:Ie,className:F.clearButton}):(0,R.jsx)(`span`,{className:F.clockIcon,"aria-hidden":`true`,...y(`time-picker`,`icon`),children:(0,R.jsx)(se,{})})})}),(0,R.jsx)(_e,{ref:U,open:P&&!D&&!O,anchor:V,placement:`bottom-start`,branches:()=>[H],onDismiss:()=>I(!1),returnFocusOnEscape:()=>V,focusable:!0,role:`dialog`,tabIndex:-1,"aria-label":j,"aria-labelledby":M,className:F.popup,onKeyDown:Y,...y(`time-picker`,`content`,{state:`open`}),children:(0,R.jsx)(ke,{value:N??re(),hasValue:N!==null,format:C,use12Hours:ne,showSecond:Oe,hourStep:ye,minuteStep:Se,secondStep:Te,minTime:he,maxTime:ge,onTimeChange:q,visible:P,focusOnOpen:Pe})})]})})})))()}function V(){let[e,t]=(0,je.useState)();return(0,H.jsxs)(`div`,{children:[(0,H.jsx)(z,{onChange:t}),(0,H.jsxs)(`p`,{children:[`Selected: `,e?e.toLocaleTimeString():`none`]})]})}var je,H;function Me(){return(Me=t((()=>{je=n(),B(),H=r()})))()}function Ne(){let[e,t]=(0,U.useState)(null);return(0,W.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,W.jsx)(z,{label:`Meeting time`,value:e,onChange:e=>t(e??null)}),(0,W.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,W.jsx)(b,{size:`small`,onClick:()=>t(Pe()),children:`Set to noon`}),(0,W.jsx)(b,{size:`small`,color:`neutral`,variant:`outline`,onClick:()=>t(null),children:`Reset`})]}),(0,W.jsxs)(`p`,{children:[`Value: `,e?e.toLocaleTimeString():`null`]})]})}var U,W,Pe;function G(){return(G=t((()=>{U=n(),x(),B(),W=r(),Pe=()=>{let e=new Date;return e.setHours(12,0,0,0),e}})))()}function K(){return(0,q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,q.jsx)(z,{defaultValue:J}),(0,q.jsx)(z,{defaultValue:J,clearable:!1})]})}var q,J;function Fe(){return(Fe=t((()=>{B(),q=r(),J=new Date,J.setHours(9,30,0)})))()}function Ie(){return(0,Le.jsx)(z,{defaultValue:Y,disabled:!0})}var Le,Y;function Re(){return(Re=t((()=>{B(),Le=r(),Y=new Date,Y.setHours(12,0,0)})))()}function ze(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(z,{defaultValue:Be,format:`HH:mm:ss`}),(0,X.jsx)(z,{defaultValue:Be,format:`HH:mm`,showSecond:!1})]})}var X,Be;function Ve(){return(Ve=t((()=>{B(),X=r(),Be=new Date})))()}function He(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Z.jsx)(z,{size:`small`,placeholder:`Small`}),(0,Z.jsx)(z,{size:`medium`,placeholder:`Medium`}),(0,Z.jsx)(z,{size:`large`,placeholder:`Large`})]})}var Z;function Ue(){return(Ue=t((()=>{B(),Z=r()})))()}function We(){return(0,Ge.jsx)(z,{format:`HH:mm`,showSecond:!1,hourStep:2,minuteStep:15,placeholder:`Every 2 h / 15 min`})}var Ge;function Ke(){return(Ke=t((()=>{B(),Ge=r()})))()}function qe(){return(0,Je.jsx)(z,{format:`HH:mm`,showSecond:!1,minTime:Ye(9),maxTime:Ye(17,30),placeholder:`Office hours 09:00–17:30`})}var Je,Ye;function Xe(){return(Xe=t((()=>{B(),Je=r(),Ye=(e,t=0)=>{let n=new Date;return n.setHours(e,t,0,0),n}})))()}function Ze(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Q.jsx)(z,{use12Hours:!0,format:`hh:mm:ss a`,placeholder:`hh:mm:ss AM`}),(0,Q.jsx)(z,{use12Hours:!0,format:`hh:mm a`,showSecond:!1,placeholder:`hh:mm AM`})]})}var Q;function Qe(){return(Qe=t((()=>{B(),Q=r()})))()}var $e;function et(){return(et=t((()=>{$e=`import { useState } from "react";
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
`})))()}var $,_t,vt;function yt(){return(yt=t((()=>{Me(),G(),Fe(),Re(),Ve(),Ue(),Ke(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),n(),g(),u(),l(),p(),$=r(),_t=d(Object.assign({"./demos/basic.tsx":V,"./demos/controlled.tsx":Ne,"./demos/default-value.tsx":K,"./demos/disabled.tsx":Ie,"./demos/formats.tsx":ze,"./demos/sizes.tsx":He,"./demos/steps.tsx":We,"./demos/time-range.tsx":qe,"./demos/twelve-hour.tsx":Ze}),Object.assign({"./demos/basic.tsx":$e,"./demos/controlled.tsx":tt,"./demos/default-value.tsx":rt,"./demos/disabled.tsx":at,"./demos/formats.tsx":st,"./demos/sizes.tsx":lt,"./demos/steps.tsx":dt,"./demos/time-range.tsx":pt,"./demos/twelve-hour.tsx":ht})),vt=()=>{let{t:e}=_();return(0,$.jsx)(f,{id:`time-picker`,demos:_t,children:(0,$.jsxs)(`section`,{className:c.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.time-picker.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:c.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.select`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.time-picker.keyboard.typing`)})]})]})})}})))()}yt();export{vt as default};