import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Tt as r,X as i,at as a,cn as o,et as s}from"./minerva-web-components-e9i9Tzii.js";import{l as c,m as l,n as u,p as d,t as ee,u as f}from"./DocPage-9P1WMt4D.js";import{Q as p,Z as te,et as ne,nt as m,rt as h,tt as g}from"./io5-ChQeTV8D.js";import{n as re,t as ie}from"./useI18n-Brv-VDVY.js";import{t as _}from"./stylingHooks-GjssfG7q.js";import{T as v,g as ae,j as y,w as oe}from"./icons-C9qyBhWC.js";import{i as se,n as ce,r as le,t as ue}from"./context-CofDH3-d.js";import{t as de}from"./dataAttributes-C-grv0bs.js";import{t as fe}from"./direction-B2fcyo3I.js";import{n as pe,r as me}from"./FloatingPanel-TXrTZjlQ.js";import{n as he,t as b}from"./Input-DbQUT3J4.js";import{c as x,g as ge,u as _e}from"./fa-KWrT4Irb.js";var ve,ye,S,be,xe,Se,C,w,T,E,D,O,k,Ce,A,j,M,N,P,we,Te,F;function I(){return(I=e((()=>{ve=`_cascader_148vm_1`,ye=`_selector_148vm_6`,S=`_focused_148vm_22`,be=`_disabled_148vm_28`,xe=`_input_148vm_33`,Se=`_clearIcon_148vm_48`,C=`_icon_148vm_72`,w=`_arrow_148vm_76`,T=`_open_148vm_86`,E=`_dropdown_148vm_90`,D=`_panel_148vm_104`,O=`_column_148vm_114`,k=`_option_148vm_135`,Ce=`_active_148vm_151`,A=`_label_148vm_165`,j=`_expandIcon_148vm_172`,M=`_loadingIndicator_148vm_183`,N=`_searchResults_148vm_188`,P=`_searchOption_148vm_194`,we=`_empty_148vm_206`,Te=`_rotating_148vm_1`,F={cascader:ve,selector:ye,focused:S,disabled:be,input:xe,clearIcon:Se,icon:C,arrow:w,open:T,dropdown:E,panel:D,column:O,option:k,active:Ce,label:A,expandIcon:j,loadingIndicator:M,searchResults:N,searchOption:P,empty:we,rotating:Te}})))()}var L,R,z,Ee;function B(){return(B=e((()=>{o(),re(),v(),fe(),I(),L=t(),R=n(),z=`[role="option"]:not([aria-disabled="true"])`,Ee=({label:e,options:t,expandedPath:n,selectedPath:r,expandTrigger:a=`click`,maxLevel:o=6,optionRender:c,optionStyle:l,autoFocus:u=!1,onActivate:d,onHoverExpand:ee,onExit:f})=>{let{t:p}=ie(),te=(0,L.useRef)(null),ne=(0,L.useId)(),m=e=>`${ne}-column-${e}`,h=(0,L.useRef)(u?-1:null),g=[t];for(let e=0;e<n.length&&e<o-1;e+=1){let t=n[e].children;if(!t?.length)break;g.push(t)}let re=e=>te.current?.querySelector(`[data-level="${e}"]`),v=e=>{let t=re(e);if(!t)return!1;let n=t.querySelector(`[data-expanded]`)??t.querySelector(`[data-selected]`)??t.querySelector(z);return n?.focus(),!!n};(0,L.useEffect)(()=>{let e=h.current;if(e===null)return;let t=e===-1?g.length-1:e;v(t)&&(h.current=null)});let y=(e,t)=>[...n.slice(0,t),e],oe=(e,t)=>t<o-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0),se=(e,t,n)=>{let r=Array.from(e.currentTarget.parentElement?.querySelectorAll(z)??[]),i=r.indexOf(e.currentTarget),a=e=>r[(e+r.length)%r.length]?.focus();switch(s(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),a(i+1);break;case`ArrowUp`:e.preventDefault(),a(i-1);break;case`Home`:e.preventDefault(),a(0);break;case`End`:e.preventDefault(),a(r.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!oe(t,n))break;h.current=n+1,d(y(t,n),n);break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;oe(t,n)&&(h.current=n+1),d(y(t,n),n);break;case`ArrowLeft`:e.preventDefault(),n===0?f?.():v(n-1)}};return(0,R.jsx)(`div`,{className:F.panel,ref:te,children:g.map((t,s)=>(0,R.jsx)(`ul`,{id:m(s),"data-level":s,className:F.column,..._(`cascader`,`column`),role:`listbox`,"aria-label":p(`cascader.level`,{label:e??p(`cascader.options`),level:s+1}),children:t.map(e=>{let t=n[s]?.value===e.value,u=r[s]?.value===e.value,f=u&&s===r.length-1,p=oe(e,s)&&!(!e.children?.length&&e.isLeaf);return(0,R.jsx)(`li`,{className:i(F.option,{[F.active]:t||u,[F.disabled]:e.disabled,[F.loading]:e.loading}),style:l,..._(`cascader`,`item`,{selected:u,expanded:t&&!f,disabled:e.disabled,loading:e.loading}),role:`option`,"aria-selected":u,"aria-disabled":e.disabled||void 0,"aria-busy":e.loading||void 0,"aria-controls":t&&s+1<g.length?m(s+1):void 0,tabIndex:e.disabled?-1:0,onKeyDown:t=>se(t,e,s),onClick:()=>{e.disabled||d(y(e,s),s)},onMouseEnter:()=>{a===`hover`&&!e.disabled&&e.children?.length&&s<o-1&&ee?.(y(e,s))},children:c?c(e,s):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`span`,{className:F.label,children:e.label}),e.loading?(0,R.jsx)(`span`,{className:F.loadingIndicator,"aria-hidden":!0,children:`...`}):p&&(0,R.jsx)(ae,{className:F.expandIcon,"aria-hidden":!0})]})},e.value)})},s))})}})))()}var V,H,De,Oe,U;function W(){return(W=e((()=>{o(),re(),v(),ne(),p(),ce(),me(),b(),I(),B(),V=t(),H=n(),De=[],Oe=[],U=({ref:e,label:t,name:n,options:o=De,value:s,defaultValue:c,onChange:l,displayRender:u,disabled:d,readOnly:ee,required:f,invalid:p,id:ne,"aria-label":m,"aria-labelledby":h,"aria-describedby":re,style:v,placeholder:ae,allowClear:ce=!0,expandTrigger:fe=`click`,className:me,showSearch:b=!1,filter:x,loadData:ge,dropdownClassName:_e,optionRender:ve,width:ye=240,maxLevel:S=6,dropdownStyle:be,optionStyle:xe,...Se})=>{let{t:C}=ie(),w=se(),T=ue({id:ne,"aria-describedby":re}),E=d??w?.disabled??!1,D=ee??w?.readOnly??!1,O=f??w?.required??!1,k=p??w?.invalid??!1,Ce=h??(w&&!m?w.labelId:void 0),[A,j]=te({value:s,defaultValue:c??Oe,name:`Cascader`}),M=(0,V.useMemo)(()=>r(o,A),[o,A]),[N,P]=(0,V.useState)(!1),[we,Te]=(0,V.useState)(!1),[I,L]=(0,V.useState)([]),R=(0,V.useMemo)(()=>r(o,I),[o,I]),[z,B]=(0,V.useState)(``),[U,W]=(0,V.useState)(null),[G,ke]=(0,V.useState)(null),Ae=g(ke,e),K=(0,V.useRef)(null),q=b&&z!==``,je=(0,V.useMemo)(()=>{if(!q)return[];let e=z.toLowerCase();return a(o).filter(({path:t})=>x?x(z,t):t.some(t=>String(t.label).toLowerCase().includes(e)))},[q,z,o,x]),J=(e=!1)=>{E||D||(L(A),Te(e),P(!0))},Y=(e=!1)=>{P(!1),B(``),e&&G?.focus()},X=e=>{let t=e.map(e=>e.value);j(t),l?.(t,e),Y(!0)},Me=(e,t)=>{let n=e[e.length-1];if(n.disabled)return;let r=t>=S-1,i=!!n.children?.length,a=!!ge&&!n.isLeaf&&!n.children;if(!r&&(i||a)){L(e.map(e=>e.value)),a&&!n.loading&&ge?.(e);return}X(e)},Z=()=>{j(Oe),l?.([],[]),B(``),G?.focus()};(0,V.useEffect)(()=>{G&&(G.setAttribute(`role`,`combobox`),G.setAttribute(`aria-haspopup`,`listbox`),G.setAttribute(`aria-expanded`,String(N)),b&&G.setAttribute(`aria-autocomplete`,`list`))},[G,N,b]);let Ne=e=>{let t=e.relatedTarget;N&&t&&(U?.contains(t)||K.current?.contains(t)||Y())},Pe=()=>K.current?.querySelector(`[role="option"]`)?.focus(),Fe=e=>{switch(e.key){case`ArrowDown`:e.preventDefault(),N?q?Pe():Te(!0):J(!0);break;case`Enter`:e.preventDefault(),N||J(!0);break;case` `:if(b)break;e.preventDefault(),N||J(!0)}},Ie=M.map(e=>String(e.label)),Le=q?z:u?u(Ie,M):Ie.join(` / `),Re=()=>(0,H.jsx)(`div`,{className:F.searchResults,role:`listbox`,"aria-label":t,tabIndex:-1,onKeyDown:e=>{let t=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)),n=t.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t[(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]?.focus())},children:je.length>0?je.map(({path:e})=>(0,H.jsx)(`div`,{className:F.searchOption,..._(`cascader`,`item`),role:`option`,"aria-selected":!1,tabIndex:0,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),X(e))},onClick:()=>X(e),children:e.map(e=>e.label).join(` / `)},e.map(e=>e.value).join(`/`))):(0,H.jsx)(`div`,{className:F.empty,role:`status`,children:C(`cascader.noResults`)})}),ze=(0,H.jsx)(pe,{ref:K,open:N,anchor:U,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[U],onDismiss:()=>Y(),returnFocusOnEscape:()=>G,focusable:!0,className:i(F.dropdown,_e),style:be,onMouseDown:e=>{e.target.closest(`[role="option"]`)||e.preventDefault()},onBlur:Ne,onKeyDown:e=>{e.key===`Tab`&&Y()},..._(`cascader`,`content`,{state:`open`}),children:q?Re():(0,H.jsx)(Ee,{label:t,options:o,expandedPath:R,selectedPath:M,expandTrigger:fe,maxLevel:S,optionStyle:xe,optionRender:ve,autoFocus:we,onActivate:Me,onHoverExpand:e=>L(e.map(e=>e.value)),onExit:()=>Y(!0)},we?`keyboard`:`pointer`)});return(0,H.jsxs)(`div`,{...de(Se),className:i(F.cascader,me),ref:W,style:{width:ye,...v},onBlur:Ne,..._(`cascader`,`root`,{state:N?`open`:`closed`,disabled:E,readonly:D,invalid:k}),children:[(0,H.jsxs)(`div`,{className:i(F.selector,{[F.disabled]:E,[F.focused]:N}),onClick:()=>{E||D||(N?b||Y():J())},..._(`cascader`,`control`),children:[(0,H.jsx)(le.Provider,{value:null,children:(0,H.jsx)(he,{ref:Ae,variant:`unstyled`,id:T.id,"aria-label":m??t,"aria-labelledby":Ce,"aria-describedby":T[`aria-describedby`],"aria-invalid":k||void 0,"aria-required":O||void 0,"aria-readonly":b&&D||void 0,required:O,name:n,value:Le,readOnly:!b||D,disabled:E,placeholder:ae??C(`cascader.placeholder`),className:F.input,onChange:e=>{b&&!D&&(B(e.target.value),N||J())},onKeyDown:Fe})}),ce&&A.length>0&&!E&&!D&&(0,H.jsx)(`button`,{type:`button`,className:F.clearIcon,"aria-label":C(`cascader.clear`),..._(`cascader`,`clear-button`),onClick:e=>{e.stopPropagation(),Z()},children:(0,H.jsx)(oe,{className:F.icon,"aria-hidden":!0,focusable:!1})}),(0,H.jsx)(`span`,{className:i(F.arrow,N&&F.open),"aria-hidden":`true`,..._(`cascader`,`icon`),children:(0,H.jsx)(y,{className:F.icon})})]}),ze]})}})))()}function G(){return(0,ke.jsx)(U,{name:`city`,label:`City`,options:Ae})}var ke,Ae;function K(){return(K=e((()=>{W(),ke=n(),Ae=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function q(){let[e,t]=(0,je.useState)([`fr`,`idf`,`paris`]);return(0,J.jsxs)(`div`,{children:[(0,J.jsx)(U,{name:`city-controlled`,label:`City`,options:Y,value:e,onChange:e=>t(e),width:300}),(0,J.jsxs)(`p`,{children:[`Value: `,e.length?JSON.stringify(e):`(empty)`]})]})}var je,J,Y;function X(){return(X=e((()=>{je=t(),W(),J=n(),Y=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Me(){return(0,Z.jsx)(U,{name:`region`,label:`Region (2 levels)`,options:Ne,maxLevel:2,optionRender:(e,t)=>(0,Z.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[t===0?(0,Z.jsx)(x,{}):(0,Z.jsx)(_e,{}),e.label]}),dropdownStyle:{minWidth:360},optionStyle:{fontWeight:500}})}var Z,Ne;function Pe(){return(Pe=e((()=>{W(),ge(),Z=n(),Ne=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Fe(){return(0,Ie.jsx)(U,{name:`city-default`,label:`City`,options:Le,defaultValue:[`jp`,`kansai`,`kyoto`],width:300})}var Ie,Le;function Re(){return(Re=e((()=>{W(),Ie=n(),Le=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function ze(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(U,{name:`location`,label:`Location`,options:Be}),(0,Q.jsx)(U,{name:`location-disabled`,label:`Disabled`,options:Be,defaultValue:[`a`,`a1`],disabled:!0})]})}var Q,Be;function Ve(){return(Ve=e((()=>{W(),Q=n(),Be=[{value:`a`,label:`Warehouse A`,children:[{value:`a1`,label:`Shelf 1`},{value:`a2`,label:`Shelf 2 (full)`,disabled:!0}]},{value:`b`,label:`Warehouse B (closed)`,disabled:!0}]})))()}function He(){return(0,Ue.jsx)(U,{name:`city-display`,label:`City (last level only)`,options:We,defaultValue:[`fr`,`ara`,`lyon`],displayRender:e=>e[e.length-1]??``,allowClear:!1})}var Ue,We;function Ge(){return(Ge=e((()=>{W(),Ue=n(),We=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ke(){return(0,qe.jsx)(U,{name:`city-hover`,label:`City`,options:Je,expandTrigger:`hover`})}var qe,Je;function Ye(){return(Ye=e((()=>{W(),qe=n(),Je=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Xe(){let[e,t]=(0,Ze.useState)($e);return(0,Qe.jsx)(U,{name:`team`,label:`Team`,options:e,loadData:e=>{let n=e[e.length-1],r=e=>t(t=>t.map(t=>t.value===n.value?{...t,...e}:t));r({loading:!0}),setTimeout(()=>{r({loading:!1,children:[{value:`${n.value}-team-a`,label:`${n.label} team A`,isLeaf:!0},{value:`${n.value}-team-b`,label:`${n.label} team B`,isLeaf:!0}]})},800)},width:300})}var Ze,Qe,$e;function et(){return(et=e((()=>{Ze=t(),W(),Qe=n(),$e=[{value:`frontend`,label:`Frontend`},{value:`backend`,label:`Backend`},{value:`docs`,label:`Documentation`,isLeaf:!0}]})))()}function tt(){return(0,nt.jsx)(U,{name:`city-search`,label:`City`,placeholder:`Type to search`,options:rt,showSearch:!0,filter:(e,t)=>t.some(t=>String(t.label).toLowerCase().includes(e.toLowerCase())),width:300})}var nt,rt;function it(){return(it=e((()=>{W(),nt=n(),rt=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}var at;function ot(){return(ot=e((()=>{at=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

const options: CascaderOption[] = [
  {
    value: "fr",
    label: "France",
    children: [
      {
        value: "idf",
        label: "Île-de-France",
        children: [
          { value: "paris", label: "Paris" },
          { value: "versailles", label: "Versailles" },
        ],
      },
      {
        value: "ara",
        label: "Auvergne-Rhône-Alpes",
        children: [
          { value: "lyon", label: "Lyon" },
          { value: "grenoble", label: "Grenoble" },
        ],
      },
    ],
  },
  {
    value: "jp",
    label: "Japan",
    children: [
      {
        value: "kanto",
        label: "Kantō",
        children: [
          { value: "tokyo", label: "Tokyo" },
          { value: "yokohama", label: "Yokohama" },
        ],
      },
      {
        value: "kansai",
        label: "Kansai",
        children: [
          { value: "osaka", label: "Osaka" },
          { value: "kyoto", label: "Kyoto" },
        ],
      },
    ],
  },
];

export default function BasicDemo() {
  return <Cascader name="city" label="City" options={options} />;
}
`})))()}var st;function ct(){return(ct=e((()=>{st=`import { useState } from "react";
import { Cascader, type CascaderOption } from "@minerva/lib-core";

const options: CascaderOption[] = [
  {
    value: "fr",
    label: "France",
    children: [
      {
        value: "idf",
        label: "Île-de-France",
        children: [
          { value: "paris", label: "Paris" },
          { value: "versailles", label: "Versailles" },
        ],
      },
      {
        value: "ara",
        label: "Auvergne-Rhône-Alpes",
        children: [
          { value: "lyon", label: "Lyon" },
          { value: "grenoble", label: "Grenoble" },
        ],
      },
    ],
  },
  {
    value: "jp",
    label: "Japan",
    children: [
      {
        value: "kanto",
        label: "Kantō",
        children: [
          { value: "tokyo", label: "Tokyo" },
          { value: "yokohama", label: "Yokohama" },
        ],
      },
      {
        value: "kansai",
        label: "Kansai",
        children: [
          { value: "osaka", label: "Osaka" },
          { value: "kyoto", label: "Kyoto" },
        ],
      },
    ],
  },
];

export default function ControlledDemo() {
  const [value, setValue] = useState<(string | number)[]>([
    "fr",
    "idf",
    "paris",
  ]);

  return (
    <div>
      <Cascader
        name="city-controlled"
        label="City"
        options={options}
        value={value}
        onChange={(next) => setValue(next)}
        width={300}
      />
      <p>Value: {value.length ? JSON.stringify(value) : "(empty)"}</p>
    </div>
  );
}
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`import { Cascader, type CascaderOption } from "@minerva/lib-core";
import { FaGlobeEurope, FaMapMarkerAlt } from "react-icons/fa";

const options: CascaderOption[] = [
  {
    value: "fr",
    label: "France",
    children: [
      {
        value: "idf",
        label: "Île-de-France",
        children: [
          { value: "paris", label: "Paris" },
          { value: "versailles", label: "Versailles" },
        ],
      },
      {
        value: "ara",
        label: "Auvergne-Rhône-Alpes",
        children: [
          { value: "lyon", label: "Lyon" },
          { value: "grenoble", label: "Grenoble" },
        ],
      },
    ],
  },
  {
    value: "jp",
    label: "Japan",
    children: [
      {
        value: "kanto",
        label: "Kantō",
        children: [
          { value: "tokyo", label: "Tokyo" },
          { value: "yokohama", label: "Yokohama" },
        ],
      },
      {
        value: "kansai",
        label: "Kansai",
        children: [
          { value: "osaka", label: "Osaka" },
          { value: "kyoto", label: "Kyoto" },
        ],
      },
    ],
  },
];

export default function CustomOptionDemo() {
  return (
    <Cascader
      name="region"
      label="Region (2 levels)"
      options={options}
      maxLevel={2}
      optionRender={(option, level) => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          {level === 0 ? <FaGlobeEurope /> : <FaMapMarkerAlt />}
          {option.label}
        </span>
      )}
      dropdownStyle={{ minWidth: 360 }}
      optionStyle={{ fontWeight: 500 }}
    />
  );
}
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

const options: CascaderOption[] = [
  {
    value: "fr",
    label: "France",
    children: [
      {
        value: "idf",
        label: "Île-de-France",
        children: [
          { value: "paris", label: "Paris" },
          { value: "versailles", label: "Versailles" },
        ],
      },
      {
        value: "ara",
        label: "Auvergne-Rhône-Alpes",
        children: [
          { value: "lyon", label: "Lyon" },
          { value: "grenoble", label: "Grenoble" },
        ],
      },
    ],
  },
  {
    value: "jp",
    label: "Japan",
    children: [
      {
        value: "kanto",
        label: "Kantō",
        children: [
          { value: "tokyo", label: "Tokyo" },
          { value: "yokohama", label: "Yokohama" },
        ],
      },
      {
        value: "kansai",
        label: "Kansai",
        children: [
          { value: "osaka", label: "Osaka" },
          { value: "kyoto", label: "Kyoto" },
        ],
      },
    ],
  },
];

export default function DefaultValueDemo() {
  return (
    <Cascader
      name="city-default"
      label="City"
      options={options}
      defaultValue={["jp", "kansai", "kyoto"]}
      width={300}
    />
  );
}
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

const options: CascaderOption[] = [
  {
    value: "a",
    label: "Warehouse A",
    children: [
      { value: "a1", label: "Shelf 1" },
      { value: "a2", label: "Shelf 2 (full)", disabled: true },
    ],
  },
  { value: "b", label: "Warehouse B (closed)", disabled: true },
];

export default function DisabledDemo() {
  return (
    <>
      <Cascader name="location" label="Location" options={options} />
      <Cascader
        name="location-disabled"
        label="Disabled"
        options={options}
        defaultValue={["a", "a1"]}
        disabled
      />
    </>
  );
}
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

const options: CascaderOption[] = [
  {
    value: "fr",
    label: "France",
    children: [
      {
        value: "idf",
        label: "Île-de-France",
        children: [
          { value: "paris", label: "Paris" },
          { value: "versailles", label: "Versailles" },
        ],
      },
      {
        value: "ara",
        label: "Auvergne-Rhône-Alpes",
        children: [
          { value: "lyon", label: "Lyon" },
          { value: "grenoble", label: "Grenoble" },
        ],
      },
    ],
  },
  {
    value: "jp",
    label: "Japan",
    children: [
      {
        value: "kanto",
        label: "Kantō",
        children: [
          { value: "tokyo", label: "Tokyo" },
          { value: "yokohama", label: "Yokohama" },
        ],
      },
      {
        value: "kansai",
        label: "Kansai",
        children: [
          { value: "osaka", label: "Osaka" },
          { value: "kyoto", label: "Kyoto" },
        ],
      },
    ],
  },
];

export default function DisplayRenderDemo() {
  return (
    <Cascader
      name="city-display"
      label="City (last level only)"
      options={options}
      defaultValue={["fr", "ara", "lyon"]}
      displayRender={(labels) => labels[labels.length - 1] ?? ""}
      allowClear={false}
    />
  );
}
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

const options: CascaderOption[] = [
  {
    value: "fr",
    label: "France",
    children: [
      {
        value: "idf",
        label: "Île-de-France",
        children: [
          { value: "paris", label: "Paris" },
          { value: "versailles", label: "Versailles" },
        ],
      },
      {
        value: "ara",
        label: "Auvergne-Rhône-Alpes",
        children: [
          { value: "lyon", label: "Lyon" },
          { value: "grenoble", label: "Grenoble" },
        ],
      },
    ],
  },
  {
    value: "jp",
    label: "Japan",
    children: [
      {
        value: "kanto",
        label: "Kantō",
        children: [
          { value: "tokyo", label: "Tokyo" },
          { value: "yokohama", label: "Yokohama" },
        ],
      },
      {
        value: "kansai",
        label: "Kansai",
        children: [
          { value: "osaka", label: "Osaka" },
          { value: "kyoto", label: "Kyoto" },
        ],
      },
    ],
  },
];

export default function HoverDemo() {
  return (
    <Cascader
      name="city-hover"
      label="City"
      options={options}
      expandTrigger="hover"
    />
  );
}
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`import { useState } from "react";
import { Cascader, type CascaderOption } from "@minerva/lib-core";

const initialOptions: CascaderOption[] = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "docs", label: "Documentation", isLeaf: true },
];

export default function LazyLoadDemo() {
  const [options, setOptions] = useState(initialOptions);

  const loadData = (path: CascaderOption[]) => {
    const target = path[path.length - 1];
    const update = (patch: Partial<CascaderOption>) =>
      setOptions((prev) =>
        prev.map((option) =>
          option.value === target.value ? { ...option, ...patch } : option,
        ),
      );

    update({ loading: true });
    // Simulate a request
    setTimeout(() => {
      update({
        loading: false,
        // isLeaf: true marks the loaded options as selectable leaves;
        // without it, clicking them would call loadData again
        children: [
          {
            value: \`\${target.value}-team-a\`,
            label: \`\${target.label} team A\`,
            isLeaf: true,
          },
          {
            value: \`\${target.value}-team-b\`,
            label: \`\${target.label} team B\`,
            isLeaf: true,
          },
        ],
      });
    }, 800);
  };

  return (
    <Cascader
      name="team"
      label="Team"
      options={options}
      loadData={loadData}
      width={300}
    />
  );
}
`})))()}var xt;function St(){return(St=e((()=>{xt=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

const options: CascaderOption[] = [
  {
    value: "fr",
    label: "France",
    children: [
      {
        value: "idf",
        label: "Île-de-France",
        children: [
          { value: "paris", label: "Paris" },
          { value: "versailles", label: "Versailles" },
        ],
      },
      {
        value: "ara",
        label: "Auvergne-Rhône-Alpes",
        children: [
          { value: "lyon", label: "Lyon" },
          { value: "grenoble", label: "Grenoble" },
        ],
      },
    ],
  },
  {
    value: "jp",
    label: "Japan",
    children: [
      {
        value: "kanto",
        label: "Kantō",
        children: [
          { value: "tokyo", label: "Tokyo" },
          { value: "yokohama", label: "Yokohama" },
        ],
      },
      {
        value: "kansai",
        label: "Kansai",
        children: [
          { value: "osaka", label: "Osaka" },
          { value: "kyoto", label: "Kyoto" },
        ],
      },
    ],
  },
];

export default function SearchDemo() {
  return (
    <Cascader
      name="city-search"
      label="City"
      placeholder="Type to search"
      options={options}
      showSearch
      filter={(input, path) =>
        path.some((option) =>
          String(option.label).toLowerCase().includes(input.toLowerCase()),
        )
      }
      width={300}
    />
  );
}
`})))()}var $,Ct,wt;function Tt(){return(Tt=e((()=>{K(),X(),Pe(),Re(),Ve(),Ge(),Ye(),et(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),t(),m(),u(),l(),f(),$=n(),Ct=d(Object.assign({"./demos/basic.tsx":G,"./demos/controlled.tsx":q,"./demos/custom-option.tsx":Me,"./demos/default-value.tsx":Fe,"./demos/disabled.tsx":ze,"./demos/display-render.tsx":He,"./demos/hover.tsx":Ke,"./demos/lazy-load.tsx":Xe,"./demos/search.tsx":tt}),Object.assign({"./demos/basic.tsx":at,"./demos/controlled.tsx":st,"./demos/custom-option.tsx":lt,"./demos/default-value.tsx":dt,"./demos/disabled.tsx":pt,"./demos/display-render.tsx":ht,"./demos/hover.tsx":_t,"./demos/lazy-load.tsx":yt,"./demos/search.tsx":xt})),wt=()=>{let{t:e}=h();return(0,$.jsx)(ee,{id:`cascader`,demos:Ct,children:(0,$.jsxs)(`section`,{className:c.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.cascader.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:c.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.expand`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.aria`)})]})]})})}})))()}Tt();export{wt as default};