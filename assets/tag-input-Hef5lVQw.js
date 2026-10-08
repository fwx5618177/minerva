import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as ee,cn as r,vt as te,yt as ne}from"./minerva-web-components-e9i9Tzii.js";import{Q as re,Z as ie,et as i,tt as ae}from"./io5-BOy5_xXs.js";import{n as oe,t as se}from"./useI18n-Brv-VDVY.js";import{t as a}from"./stylingHooks-GjssfG7q.js";import{M as ce,T as o,w as le}from"./icons-C9qyBhWC.js";import{i as ue,n as de}from"./context-CofDH3-d.js";import{t as fe}from"./dataAttributes-C-grv0bs.js";import{n as s,t as pe}from"./IconButton-EM8CzPwt.js";import{n as me,t as c}from"./Input-BZvM2jO4.js";import{n as he,t as ge}from"./Tag-C1rs5v30.js";import{a as _e,r as l}from"./FormControl-s2LFIZKG.js";import{m as u,n as d,p as ve,t as ye}from"./DocPage-44Ak-YGP.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{f=`_root_1yo7g_1`,p=`_values_1yo7g_10`,m=`_tag_1yo7g_17`,h=`_label_1yo7g_24`,g=`_entry_1yo7g_30`,_=`_combobox_1yo7g_40`,v=`_list_1yo7g_46`,y=`_option_1yo7g_62`,b=`_empty_1yo7g_83`,x={root:f,values:p,tag:m,label:h,entry:g,combobox:_,list:v,option:y,empty:b}})))()}var C,w,T,E,be,D;function O(){return(O=e((()=>{r(),oe(),o(),i(),re(),de(),s(),c(),he(),S(),C=t(),w=n(),T=[],E=`Enter`,be=[`\r
`,`
`,`\r`],D=({value:e,defaultValue:t,onChange:n,options:r=T,commitOnBlur:re=!0,separators:i=te,id:oe,name:o,placeholder:de,"aria-label":s,"aria-labelledby":c,"aria-describedby":he,disabled:_e,readOnly:l,invalid:u,size:d=`medium`,emptyText:ve,addLabel:ye,clearLabel:f,removeLabel:p,createLabel:m,className:h,style:g,ref:_,...v})=>{let{t:y}=se(),b=ue(),S=!!(_e||b?.disabled),D=!!(l||b?.readOnly),O=S||D,k=(0,C.useRef)(null),A=ae(k,_),j=(0,C.useRef)(!1),M=(0,C.useRef)(!1),N=(0,C.useId)(),[P,F]=ie({value:e,defaultValue:t??T,onChange:n,name:`TagInput`}),[I,L]=(0,C.useState)(``),[R,z]=(0,C.useState)(!1),[B,V]=(0,C.useState)(0),H=R&&!O,U=I.trim(),W=[...new Set(r.map(e=>e.trim()).filter(Boolean))].filter(e=>!P.includes(e)),G=W.map(e=>({tag:e,label:e,filterValue:e}));U&&!P.includes(U)&&!W.includes(U)&&G.unshift({tag:U,label:m?m(U):y(`tagInput.create`,{tag:U}),filterValue:U});let K=U.toLowerCase(),q=K?G.filter(e=>e.filterValue.toLowerCase().includes(K)):G,J=`${q.length}\u0000${I}`,[Y,xe]=(0,C.useState)(J);Y!==J&&(xe(J),V(0));let Se=i.includes(E),X=i.filter(e=>e!==E&&e!==``),Ce=Se?[...X,...be]:X,Z=(e,t=``)=>{if(O||j.current)return;let n=[...P];for(let t of e){let e=t.trim();e&&!n.includes(e)&&n.push(e)}n.length!==P.length&&F(n),M.current=!1,L(t)},Q=e=>Z([e]),we=e=>{if(O||j.current)return;let t=e.clipboardData.getData(`text`);if(!Ce.some(e=>t.includes(e)))return;e.preventDefault();let n=e.currentTarget,ee=n.selectionStart??I.length,r=n.selectionEnd??I.length,te=I.slice(0,ee)+t+I.slice(r);Z(ne(te,Ce)),z(!1)},$=e=>{Q(e.tag),z(!1)},Te=e=>{if(O||j.current||e.nativeEvent.isComposing||e.keyCode===229)return;let t=q.length;switch(e.key){case`ArrowDown`:case`ArrowUp`:if(e.preventDefault(),M.current=!0,z(!0),t>0){let n=e.key===`ArrowDown`?1:-1;V(e=>(e+n+t)%t)}break;case`Enter`:e.preventDefault(),Se?!M.current&&(!U||P.includes(U))?Q(I):H&&q[B]?$(q[B]):(Q(I),z(!1)):M.current&&H&&q[B]&&$(q[B]);break;case`Escape`:M.current=!1,L(``),H&&(e.preventDefault(),z(!1));break;case`Backspace`:I===``&&P.length>0&&(e.preventDefault(),F(P.slice(0,-1)))}},Ee=e=>p?p(e):y(`tagInput.remove`,{tag:e}),De=H?q[B]:void 0,Oe=e=>`${N}-option-${e}`;return(0,w.jsxs)(`div`,{...fe(v),className:ee(x.root,h),style:g,...a(`tag-input`,`root`,{state:H?`open`:`closed`,disabled:S,invalid:u||!!b?.invalid,readonly:D,required:!!b?.required,size:d}),children:[P.length>0&&(0,w.jsx)(`div`,{className:x.values,...a(`tag-input`,`tags`),children:P.map((e,t)=>(0,w.jsx)(ge,{className:x.tag,size:`large`,disabled:S,closable:!D,closeLabel:Ee(e),onClose:()=>{O||(F(P.filter((e,n)=>n!==t)),k.current?.focus())},children:(0,w.jsx)(`span`,{className:x.label,children:e})},`${t}-${e}`))}),(0,w.jsxs)(`div`,{className:x.entry,children:[(0,w.jsxs)(`div`,{className:x.combobox,children:[(0,w.jsx)(me,{ref:A,id:oe,size:d,invalid:u,type:`text`,role:`combobox`,"aria-label":s,"aria-labelledby":c,"aria-describedby":he,"aria-expanded":H,"aria-controls":H?N:void 0,"aria-autocomplete":`list`,"aria-activedescendant":De?Oe(B):void 0,autoComplete:`off`,spellCheck:!1,placeholder:de,value:I,disabled:S,readOnly:D,onChange:e=>{if(O)return;M.current=!1;let t=e.target.value,n=j.current||X.length===0?[t]:ne(t,X);n.length>1?Z(n.slice(0,-1),n[n.length-1]):L(t),z(!0)},onFocus:()=>{O||z(!0)},onClick:()=>{O||z(!0)},onBlur:()=>{z(!1),re&&Q(I)},onCompositionStart:()=>{j.current=!0},onCompositionEnd:()=>{j.current=!1},onKeyDown:Te,onPaste:we}),H&&(0,w.jsxs)(`ul`,{id:N,role:`listbox`,"aria-label":s,"aria-labelledby":c,className:x.list,...a(`tag-input`,`list`),children:[q.length===0&&(0,w.jsx)(`li`,{className:x.empty,role:`presentation`,...a(`tag-input`,`empty`),children:ve??y(`tagInput.empty`)}),q.map((e,t)=>(0,w.jsx)(`li`,{id:Oe(t),role:`option`,"aria-selected":t===B,tabIndex:-1,className:x.option,"data-active":t===B||void 0,onMouseDown:t=>{t.preventDefault(),$(e)},onMouseEnter:()=>V(t),...a(`tag-input`,`option`),children:e.label},`${e.label}-${e.tag}`))]})]}),!D&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(pe,{type:`button`,label:ye??y(`tagInput.add`),shape:`square`,icon:(0,w.jsx)(ce,{"aria-hidden":!0}),disabled:S||!U||P.includes(U),onMouseDown:e=>e.preventDefault(),onClick:()=>{Q(I),k.current?.focus()}}),(0,w.jsx)(pe,{type:`button`,label:f??y(`tagInput.clear`),shape:`square`,icon:(0,w.jsx)(le,{"aria-hidden":!0}),disabled:S||P.length===0,onMouseDown:e=>e.preventDefault(),onClick:()=>{L(``),F([]),k.current?.focus()}})]})]}),o&&P.map((e,t)=>(0,w.jsx)(`input`,{type:`hidden`,name:o,value:e,disabled:S},`${t}-${e}`))]})}})))()}function k(){let[e,t]=(0,A.useState)([`React`]);return(0,j.jsx)(D,{"aria-label":`Tags`,placeholder:`Type a tag and press Enter`,value:e,onChange:t,options:[`React`,`Vue`,`Svelte`,`Solid`]})}var A,j;function M(){return(M=e((()=>{O(),A=t(),j=n()})))()}function N(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l,{label:`Article tags`,helperText:`Submitted as repeated tags fields.`,children:(0,P.jsx)(D,{name:`tags`,defaultValue:[`news`,`tech`],size:`small`})}),(0,P.jsx)(l,{label:`Read-only tags`,readOnly:!0,children:(0,P.jsx)(D,{defaultValue:[`archived`]})})]})}var P;function F(){return(F=e((()=>{_e(),O(),P=n()})))()}function I(){let[e,t]=(0,L.useState)([`alice@example.com`]);return(0,R.jsx)(D,{"aria-label":`Recipients`,placeholder:`Type or paste "a; b, c"`,value:e,onChange:t,separators:[`,`,`;`,`Enter`]})}var L,R;function z(){return(z=e((()=>{O(),L=t(),R=n()})))()}var B;function V(){return(V=e((()=>{B=`import { TagInput } from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [tags, setTags] = useState<readonly string[]>(["React"]);
  return (
    <TagInput
      aria-label="Tags"
      placeholder="Type a tag and press Enter"
      value={tags}
      onChange={setTags}
      options={["React", "Vue", "Svelte", "Solid"]}
    />
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { FormField, TagInput } from "@minerva/lib-core";

export default function FormControlDemo() {
  return (
    <>
      <FormField
        label="Article tags"
        helperText="Submitted as repeated tags fields."
      >
        <TagInput name="tags" defaultValue={["news", "tech"]} size="small" />
      </FormField>
      <FormField label="Read-only tags" readOnly>
        <TagInput defaultValue={["archived"]} />
      </FormField>
    </>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { TagInput } from "@minerva/lib-core";
import { useState } from "react";

export default function SeparatorsDemo() {
  const [tags, setTags] = useState<readonly string[]>(["alice@example.com"]);
  return (
    <TagInput
      aria-label="Recipients"
      placeholder='Type or paste "a; b, c"'
      value={tags}
      onChange={setTags}
      separators={[",", ";", "Enter"]}
    />
  );
}
`})))()}var K,q,J;function Y(){return(Y=e((()=>{M(),F(),z(),V(),U(),G(),t(),d(),u(),K=n(),q=ve(Object.assign({"./demos/basic.tsx":k,"./demos/form-control.tsx":N,"./demos/separators.tsx":I}),Object.assign({"./demos/basic.tsx":B,"./demos/form-control.tsx":H,"./demos/separators.tsx":W})),J=()=>(0,K.jsx)(ye,{id:`tag-input`,demos:q})})))()}Y();export{J as default};