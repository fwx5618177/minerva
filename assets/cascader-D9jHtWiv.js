import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Tt as r,X as i,at as a,cn as o,et as s}from"./minerva-web-components-e9i9Tzii.js";import{Q as c,Z as ee,et as l,nt as u,rt as te,tt as ne}from"./io5-CkIs6v-8.js";import{n as d,t as re}from"./useI18n-Brv-VDVY.js";import{t as f}from"./stylingHooks-GjssfG7q.js";import{T as p,g as ie,j as ae,w as oe}from"./icons-C9qyBhWC.js";import{i as m,n as h,r as se,t as ce}from"./context-CofDH3-d.js";import{t as g}from"./dataAttributes-C-grv0bs.js";import{t as _}from"./direction-B2fcyo3I.js";import{n as le,r as ue}from"./FloatingPanel-CxnqitC0.js";import{n as de,t as fe}from"./Input-f1MrbxB_.js";import{l as pe,m as me,n as he,p as ge,t as _e,u as v}from"./DocPage-BUvZl8IZ.js";import{c as y,g as ve,u as ye}from"./fa-BBvq-Bfl.js";var be,xe,b,Se,Ce,we,x,S,C,w,T,E,Te,Ee,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{be=`_cascader_14xrr_1`,xe=`_selector_14xrr_6`,b=`_focused_14xrr_22`,Se=`_disabled_14xrr_27`,Ce=`_input_14xrr_32`,we=`_clearIcon_14xrr_47`,x=`_icon_14xrr_71`,S=`_arrow_14xrr_75`,C=`_open_14xrr_85`,w=`_dropdown_14xrr_89`,T=`_panel_14xrr_103`,E=`_column_14xrr_111`,Te=`_option_14xrr_136`,Ee=`_active_14xrr_152`,D=`_label_14xrr_166`,O=`_expandIcon_14xrr_173`,k=`_loadingIndicator_14xrr_184`,A=`_searchResults_14xrr_189`,j=`_searchOption_14xrr_195`,M=`_empty_14xrr_207`,N=`_rotating_14xrr_1`,P={cascader:be,selector:xe,focused:b,disabled:Se,input:Ce,clearIcon:we,icon:x,arrow:S,open:C,dropdown:w,panel:T,column:E,option:Te,active:Ee,label:D,expandIcon:O,loadingIndicator:k,searchResults:A,searchOption:j,empty:M,rotating:N}})))()}var I,L,R,De;function z(){return(z=e((()=>{o(),d(),p(),_(),F(),I=t(),L=n(),R=`[role="option"]:not([aria-disabled="true"])`,De=({label:e,options:t,expandedPath:n,selectedPath:r,expandTrigger:a=`click`,maxLevel:o=6,optionRender:c,optionStyle:ee,autoFocus:l=!1,onActivate:u,onHoverExpand:te,onExit:ne})=>{let{t:d}=re(),p=(0,I.useRef)(null),ae=(0,I.useId)(),oe=e=>`${ae}-column-${e}`,m=(0,I.useRef)(l?-1:null),h=[t];for(let e=0;e<n.length&&e<o-1;e+=1){let t=n[e].children;if(!t?.length)break;h.push(t)}let se=e=>p.current?.querySelector(`[data-level="${e}"]`),ce=e=>{let t=se(e);if(!t)return!1;let n=t.querySelector(`[data-expanded]`)??t.querySelector(`[data-selected]`)??t.querySelector(R);return n?.focus(),!!n};(0,I.useEffect)(()=>{let e=m.current;if(e===null)return;let t=e===-1?h.length-1:e;ce(t)&&(m.current=null)});let g=(e,t)=>[...n.slice(0,t),e],_=(e,t)=>t<o-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0),le=(e,t,n)=>{let r=Array.from(e.currentTarget.parentElement?.querySelectorAll(R)??[]),i=r.indexOf(e.currentTarget),a=e=>r[(e+r.length)%r.length]?.focus();switch(s(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),a(i+1);break;case`ArrowUp`:e.preventDefault(),a(i-1);break;case`Home`:e.preventDefault(),a(0);break;case`End`:e.preventDefault(),a(r.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!_(t,n))break;m.current=n+1,u(g(t,n),n);break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;_(t,n)&&(m.current=n+1),u(g(t,n),n);break;case`ArrowLeft`:e.preventDefault(),n===0?ne?.():ce(n-1)}};return(0,L.jsx)(`div`,{className:P.panel,ref:p,children:h.map((t,s)=>(0,L.jsx)(`ul`,{id:oe(s),"data-level":s,className:P.column,...f(`cascader`,`column`),role:`listbox`,"aria-label":d(`cascader.level`,{label:e??d(`cascader.options`),level:s+1}),children:t.map(e=>{let t=n[s]?.value===e.value,l=r[s]?.value===e.value,ne=l&&s===r.length-1,d=_(e,s)&&!(!e.children?.length&&e.isLeaf);return(0,L.jsx)(`li`,{className:i(P.option,{[P.active]:t||l,[P.disabled]:e.disabled,[P.loading]:e.loading}),style:ee,...f(`cascader`,`item`,{selected:l,expanded:t&&!ne,disabled:e.disabled,loading:e.loading}),role:`option`,"aria-selected":l,"aria-disabled":e.disabled||void 0,"aria-busy":e.loading||void 0,"aria-controls":t&&s+1<h.length?oe(s+1):void 0,tabIndex:e.disabled?-1:0,onKeyDown:t=>le(t,e,s),onClick:()=>{e.disabled||u(g(e,s),s)},onMouseEnter:()=>{a===`hover`&&!e.disabled&&e.children?.length&&s<o-1&&te?.(g(e,s))},children:c?c(e,s):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{className:P.label,children:e.label}),e.loading?(0,L.jsx)(`span`,{className:P.loadingIndicator,"aria-hidden":!0,children:`...`}):d&&(0,L.jsx)(ie,{className:P.expandIcon,"aria-hidden":!0})]})},e.value)})},s))})}})))()}var B,V,Oe,ke,H;function U(){return(U=e((()=>{o(),d(),p(),l(),c(),h(),ue(),fe(),F(),z(),B=t(),V=n(),Oe=[],ke=[],H=({ref:e,label:t,name:n,options:o=Oe,value:s,defaultValue:c,onChange:l,displayRender:u,disabled:te,readOnly:d,required:p,invalid:ie,id:h,"aria-label":_,"aria-labelledby":ue,"aria-describedby":fe,style:pe,placeholder:me,allowClear:he=!0,expandTrigger:ge=`click`,className:_e,showSearch:v=!1,filter:y,loadData:ve,dropdownClassName:ye,optionRender:be,width:xe=240,maxLevel:b=6,dropdownStyle:Se,optionStyle:Ce,...we})=>{let{t:x}=re(),S=m(),C=ce({id:h,"aria-describedby":fe}),w=te??S?.disabled??!1,T=d??S?.readOnly??!1,E=p??S?.required??!1,Te=ie??S?.invalid??!1,Ee=ue??(S&&!_?S.labelId:void 0),[D,O]=ee({value:s,defaultValue:c??ke,name:`Cascader`}),k=(0,B.useMemo)(()=>r(o,D),[o,D]),[A,j]=(0,B.useState)(!1),[M,N]=(0,B.useState)(!1),[F,I]=(0,B.useState)([]),L=(0,B.useMemo)(()=>r(o,F),[o,F]),[R,z]=(0,B.useState)(``),[H,U]=(0,B.useState)(null),[W,Ae]=(0,B.useState)(null),je=ne(Ae,e),G=(0,B.useRef)(null),K=v&&R!==``,q=(0,B.useMemo)(()=>{if(!K)return[];let e=R.toLowerCase();return a(o).filter(({path:t})=>y?y(R,t):t.some(t=>String(t.label).toLowerCase().includes(e)))},[K,R,o,y]),J=(e=!1)=>{w||T||(I(D),N(e),j(!0))},Y=(e=!1)=>{j(!1),z(``),e&&W?.focus()},X=e=>{let t=e.map(e=>e.value);O(t),l?.(t,e),Y(!0)},Me=(e,t)=>{let n=e[e.length-1];if(n.disabled)return;let r=t>=b-1,i=!!n.children?.length,a=!!ve&&!n.isLeaf&&!n.children;if(!r&&(i||a)){I(e.map(e=>e.value)),a&&!n.loading&&ve?.(e);return}X(e)},Z=()=>{O(ke),l?.([],[]),z(``),W?.focus()};(0,B.useEffect)(()=>{W&&(W.setAttribute(`role`,`combobox`),W.setAttribute(`aria-haspopup`,`listbox`),W.setAttribute(`aria-expanded`,String(A)),v&&W.setAttribute(`aria-autocomplete`,`list`))},[W,A,v]);let Ne=e=>{let t=e.relatedTarget;A&&t&&(H?.contains(t)||G.current?.contains(t)||Y())},Pe=()=>G.current?.querySelector(`[role="option"]`)?.focus(),Fe=e=>{switch(e.key){case`ArrowDown`:e.preventDefault(),A?K?Pe():N(!0):J(!0);break;case`Enter`:e.preventDefault(),A||J(!0);break;case` `:if(v)break;e.preventDefault(),A||J(!0)}},Ie=k.map(e=>String(e.label)),Le=K?R:u?u(Ie,k):Ie.join(` / `),Re=()=>(0,V.jsx)(`div`,{className:P.searchResults,role:`listbox`,"aria-label":t,tabIndex:-1,onKeyDown:e=>{let t=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)),n=t.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t[(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]?.focus())},children:q.length>0?q.map(({path:e})=>(0,V.jsx)(`div`,{className:P.searchOption,...f(`cascader`,`item`),role:`option`,"aria-selected":!1,tabIndex:0,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),X(e))},onClick:()=>X(e),children:e.map(e=>e.label).join(` / `)},e.map(e=>e.value).join(`/`))):(0,V.jsx)(`div`,{className:P.empty,role:`status`,children:x(`cascader.noResults`)})}),ze=(0,V.jsx)(le,{ref:G,open:A,anchor:H,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[H],onDismiss:()=>Y(),returnFocusOnEscape:()=>W,focusable:!0,className:i(P.dropdown,ye),style:Se,onMouseDown:e=>{e.target.closest(`[role="option"]`)||e.preventDefault()},onBlur:Ne,onKeyDown:e=>{e.key===`Tab`&&Y()},...f(`cascader`,`content`,{state:`open`}),children:K?Re():(0,V.jsx)(De,{label:t,options:o,expandedPath:L,selectedPath:k,expandTrigger:ge,maxLevel:b,optionStyle:Ce,optionRender:be,autoFocus:M,onActivate:Me,onHoverExpand:e=>I(e.map(e=>e.value)),onExit:()=>Y(!0)},M?`keyboard`:`pointer`)});return(0,V.jsxs)(`div`,{...g(we),className:i(P.cascader,_e),ref:U,style:{width:xe,...pe},onBlur:Ne,...f(`cascader`,`root`,{state:A?`open`:`closed`,disabled:w,readonly:T,invalid:Te}),children:[(0,V.jsxs)(`div`,{className:i(P.selector,{[P.disabled]:w,[P.focused]:A}),onClick:()=>{w||T||(A?v||Y():J())},...f(`cascader`,`control`),children:[(0,V.jsx)(se.Provider,{value:null,children:(0,V.jsx)(de,{ref:je,variant:`unstyled`,id:C.id,"aria-label":_??t,"aria-labelledby":Ee,"aria-describedby":C[`aria-describedby`],"aria-invalid":Te||void 0,"aria-required":E||void 0,"aria-readonly":v&&T||void 0,required:E,name:n,value:Le,readOnly:!v||T,disabled:w,placeholder:me??x(`cascader.placeholder`),className:P.input,onChange:e=>{v&&!T&&(z(e.target.value),A||J())},onKeyDown:Fe})}),he&&D.length>0&&!w&&!T&&(0,V.jsx)(`button`,{type:`button`,className:P.clearIcon,"aria-label":x(`cascader.clear`),...f(`cascader`,`clear-button`),onClick:e=>{e.stopPropagation(),Z()},children:(0,V.jsx)(oe,{className:P.icon,"aria-hidden":!0,focusable:!1})}),(0,V.jsx)(`span`,{className:i(P.arrow,A&&P.open),"aria-hidden":`true`,...f(`cascader`,`icon`),children:(0,V.jsx)(ae,{className:P.icon})})]}),ze]})}})))()}function W(){return(0,Ae.jsx)(H,{name:`city`,label:`City`,options:je})}var Ae,je;function G(){return(G=e((()=>{U(),Ae=n(),je=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function K(){let[e,t]=(0,q.useState)([`fr`,`idf`,`paris`]);return(0,J.jsxs)(`div`,{children:[(0,J.jsx)(H,{name:`city-controlled`,label:`City`,options:Y,value:e,onChange:e=>t(e),width:300}),(0,J.jsxs)(`p`,{children:[`Value: `,e.length?JSON.stringify(e):`(empty)`]})]})}var q,J,Y;function X(){return(X=e((()=>{q=t(),U(),J=n(),Y=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Me(){return(0,Z.jsx)(H,{name:`region`,label:`Region (2 levels)`,options:Ne,maxLevel:2,optionRender:(e,t)=>(0,Z.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[t===0?(0,Z.jsx)(y,{}):(0,Z.jsx)(ye,{}),e.label]}),dropdownStyle:{minWidth:360},optionStyle:{fontWeight:500}})}var Z,Ne;function Pe(){return(Pe=e((()=>{U(),ve(),Z=n(),Ne=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Fe(){return(0,Ie.jsx)(H,{name:`city-default`,label:`City`,options:Le,defaultValue:[`jp`,`kansai`,`kyoto`],width:300})}var Ie,Le;function Re(){return(Re=e((()=>{U(),Ie=n(),Le=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function ze(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(H,{name:`location`,label:`Location`,options:Be}),(0,Q.jsx)(H,{name:`location-disabled`,label:`Disabled`,options:Be,defaultValue:[`a`,`a1`],disabled:!0})]})}var Q,Be;function Ve(){return(Ve=e((()=>{U(),Q=n(),Be=[{value:`a`,label:`Warehouse A`,children:[{value:`a1`,label:`Shelf 1`},{value:`a2`,label:`Shelf 2 (full)`,disabled:!0}]},{value:`b`,label:`Warehouse B (closed)`,disabled:!0}]})))()}function He(){return(0,Ue.jsx)(H,{name:`city-display`,label:`City (last level only)`,options:We,defaultValue:[`fr`,`ara`,`lyon`],displayRender:e=>e[e.length-1]??``,allowClear:!1})}var Ue,We;function Ge(){return(Ge=e((()=>{U(),Ue=n(),We=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ke(){return(0,qe.jsx)(H,{name:`city-hover`,label:`City`,options:Je,expandTrigger:`hover`})}var qe,Je;function Ye(){return(Ye=e((()=>{U(),qe=n(),Je=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Xe(){let[e,t]=(0,Ze.useState)($e);return(0,Qe.jsx)(H,{name:`team`,label:`Team`,options:e,loadData:e=>{let n=e[e.length-1],r=e=>t(t=>t.map(t=>t.value===n.value?{...t,...e}:t));r({loading:!0}),setTimeout(()=>{r({loading:!1,children:[{value:`${n.value}-team-a`,label:`${n.label} team A`,isLeaf:!0},{value:`${n.value}-team-b`,label:`${n.label} team B`,isLeaf:!0}]})},800)},width:300})}var Ze,Qe,$e;function et(){return(et=e((()=>{Ze=t(),U(),Qe=n(),$e=[{value:`frontend`,label:`Frontend`},{value:`backend`,label:`Backend`},{value:`docs`,label:`Documentation`,isLeaf:!0}]})))()}function tt(){return(0,nt.jsx)(H,{name:`city-search`,label:`City`,placeholder:`Type to search`,options:rt,showSearch:!0,filter:(e,t)=>t.some(t=>String(t.label).toLowerCase().includes(e.toLowerCase())),width:300})}var nt,rt;function it(){return(it=e((()=>{U(),nt=n(),rt=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}var at;function ot(){return(ot=e((()=>{at=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

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
`})))()}var $,Ct,wt;function Tt(){return(Tt=e((()=>{G(),X(),Pe(),Re(),Ve(),Ge(),Ye(),et(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),t(),u(),he(),me(),v(),$=n(),Ct=ge(Object.assign({"./demos/basic.tsx":W,"./demos/controlled.tsx":K,"./demos/custom-option.tsx":Me,"./demos/default-value.tsx":Fe,"./demos/disabled.tsx":ze,"./demos/display-render.tsx":He,"./demos/hover.tsx":Ke,"./demos/lazy-load.tsx":Xe,"./demos/search.tsx":tt}),Object.assign({"./demos/basic.tsx":at,"./demos/controlled.tsx":st,"./demos/custom-option.tsx":lt,"./demos/default-value.tsx":dt,"./demos/disabled.tsx":pt,"./demos/display-render.tsx":ht,"./demos/hover.tsx":_t,"./demos/lazy-load.tsx":yt,"./demos/search.tsx":xt})),wt=()=>{let{t:e}=te();return(0,$.jsx)(_e,{id:`cascader`,demos:Ct,children:(0,$.jsxs)(`section`,{className:pe.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.cascader.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:pe.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.expand`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.aria`)})]})]})})}})))()}Tt();export{wt as default};