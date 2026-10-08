import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Tt as r,X as i,at as a,cn as o,et as s}from"./minerva-web-components-e9i9Tzii.js";import{Q as c,Z as ee,et as l,nt as u,rt as te,tt as ne}from"./io5-Db3ldn2O.js";import{n as d,t as re}from"./useI18n-Brv-VDVY.js";import{T as f,g as ie,j as ae,w as oe}from"./icons-C9qyBhWC.js";import{i as p,n as m,r as se,t as ce}from"./context-CofDH3-d.js";import{t as h}from"./dataAttributes-C-grv0bs.js";import{t as g}from"./direction-B2fcyo3I.js";import{n as le,r as ue}from"./FloatingPanel-_azHlJqg.js";import{n as de,t as fe}from"./Input-DlvVEIEg.js";import{c as pe,i as me,n as he,r as ge,s as _e,t as _}from"./DocPage-BeqNKFhE.js";import{c as v,g as ve,u as ye}from"./fa-BpzsXjlQ.js";var be,xe,y,Se,Ce,we,b,x,S,C,w,T,Te,Ee,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{be=`_cascader_14xrr_1`,xe=`_selector_14xrr_6`,y=`_focused_14xrr_22`,Se=`_disabled_14xrr_27`,Ce=`_input_14xrr_32`,we=`_clearIcon_14xrr_47`,b=`_icon_14xrr_71`,x=`_arrow_14xrr_75`,S=`_open_14xrr_85`,C=`_dropdown_14xrr_89`,w=`_panel_14xrr_103`,T=`_column_14xrr_111`,Te=`_option_14xrr_136`,Ee=`_active_14xrr_152`,E=`_label_14xrr_166`,D=`_expandIcon_14xrr_173`,O=`_loadingIndicator_14xrr_184`,k=`_searchResults_14xrr_189`,A=`_searchOption_14xrr_195`,j=`_empty_14xrr_207`,M=`_rotating_14xrr_1`,N={cascader:be,selector:xe,focused:y,disabled:Se,input:Ce,clearIcon:we,icon:b,arrow:x,open:S,dropdown:C,panel:w,column:T,option:Te,active:Ee,label:E,expandIcon:D,loadingIndicator:O,searchResults:k,searchOption:A,empty:j,rotating:M}})))()}var F,I,L,De;function R(){return(R=e((()=>{o(),d(),f(),g(),P(),F=t(),I=n(),L=`[role="option"]:not([aria-disabled="true"])`,De=({label:e,options:t,expandedPath:n,selectedPath:r,expandTrigger:a=`click`,maxLevel:o=6,optionRender:c,optionStyle:ee,autoFocus:l=!1,onActivate:u,onHoverExpand:te,onExit:ne})=>{let{t:d}=re(),f=(0,F.useRef)(null),ae=(0,F.useId)(),oe=e=>`${ae}-column-${e}`,p=(0,F.useRef)(l?-1:null),m=[t];for(let e=0;e<n.length&&e<o-1;e+=1){let t=n[e].children;if(!t?.length)break;m.push(t)}let se=e=>f.current?.querySelector(`[data-level="${e}"]`),ce=e=>{let t=se(e);if(!t)return!1;let n=t.querySelector(`[data-expanded="true"]`)??t.querySelector(L);return n?.focus(),!!n};(0,F.useEffect)(()=>{let e=p.current;if(e===null)return;let t=e===-1?m.length-1:e;ce(t)&&(p.current=null)});let h=(e,t)=>[...n.slice(0,t),e],g=(e,t)=>t<o-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0),le=(e,t,n)=>{let r=Array.from(e.currentTarget.parentElement?.querySelectorAll(L)??[]),i=r.indexOf(e.currentTarget),a=e=>r[(e+r.length)%r.length]?.focus();switch(s(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),a(i+1);break;case`ArrowUp`:e.preventDefault(),a(i-1);break;case`Home`:e.preventDefault(),a(0);break;case`End`:e.preventDefault(),a(r.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!g(t,n))break;p.current=n+1,u(h(t,n),n);break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;g(t,n)&&(p.current=n+1),u(h(t,n),n);break;case`ArrowLeft`:e.preventDefault(),n===0?ne?.():ce(n-1)}};return(0,I.jsx)(`div`,{className:N.panel,ref:f,children:m.map((t,s)=>(0,I.jsx)(`ul`,{id:oe(s),"data-level":s,className:N.column,role:`listbox`,"aria-label":d(`cascader.level`,{label:e??d(`cascader.options`),level:s+1}),children:t.map(e=>{let t=n[s]?.value===e.value,l=r[s]?.value===e.value,ne=g(e,s)&&!(!e.children?.length&&e.isLeaf);return(0,I.jsx)(`li`,{"data-expanded":t||void 0,className:i(N.option,{[N.active]:t||l,[N.disabled]:e.disabled,[N.loading]:e.loading}),style:ee,role:`option`,"aria-selected":l,"aria-disabled":e.disabled||void 0,"aria-busy":e.loading||void 0,"aria-controls":t&&s+1<m.length?oe(s+1):void 0,tabIndex:e.disabled?-1:0,onKeyDown:t=>le(t,e,s),onClick:()=>{e.disabled||u(h(e,s),s)},onMouseEnter:()=>{a===`hover`&&!e.disabled&&e.children?.length&&s<o-1&&te?.(h(e,s))},children:c?c(e,s):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{className:N.label,children:e.label}),e.loading?(0,I.jsx)(`span`,{className:N.loadingIndicator,"aria-hidden":!0,children:`...`}):ne&&(0,I.jsx)(ie,{className:N.expandIcon,"aria-hidden":!0})]})},e.value)})},s))})}})))()}var z,B,Oe,ke,V;function H(){return(H=e((()=>{o(),d(),f(),l(),c(),m(),ue(),fe(),P(),R(),z=t(),B=n(),Oe=[],ke=[],V=({ref:e,label:t,name:n,options:o=Oe,value:s,defaultValue:c,onChange:l,displayRender:u,disabled:te,readOnly:d,required:f,invalid:ie,id:m,"aria-label":g,"aria-labelledby":ue,"aria-describedby":fe,style:pe,placeholder:me,allowClear:he=!0,expandTrigger:ge=`click`,className:_e,showSearch:_=!1,filter:v,loadData:ve,dropdownClassName:ye,optionRender:be,width:xe=240,maxLevel:y=6,dropdownStyle:Se,optionStyle:Ce,...we})=>{let{t:b}=re(),x=p(),S=ce({id:m,"aria-describedby":fe}),C=te??x?.disabled??!1,w=d??x?.readOnly??!1,T=f??x?.required??!1,Te=ie??x?.invalid??!1,Ee=ue??(x&&!g?x.labelId:void 0),[E,D]=ee({value:s,defaultValue:c??ke,name:`Cascader`}),O=(0,z.useMemo)(()=>r(o,E),[o,E]),[k,A]=(0,z.useState)(!1),[j,M]=(0,z.useState)(!1),[P,F]=(0,z.useState)([]),I=(0,z.useMemo)(()=>r(o,P),[o,P]),[L,R]=(0,z.useState)(``),[V,H]=(0,z.useState)(null),[U,Ae]=(0,z.useState)(null),je=ne(Ae,e),W=(0,z.useRef)(null),G=_&&L!==``,K=(0,z.useMemo)(()=>{if(!G)return[];let e=L.toLowerCase();return a(o).filter(({path:t})=>v?v(L,t):t.some(t=>String(t.label).toLowerCase().includes(e)))},[G,L,o,v]),q=(e=!1)=>{C||w||(F(E),M(e),A(!0))},J=(e=!1)=>{A(!1),R(``),e&&U?.focus()},Y=e=>{let t=e.map(e=>e.value);D(t),l?.(t,e),J(!0)},Me=(e,t)=>{let n=e[e.length-1];if(n.disabled)return;let r=t>=y-1,i=!!n.children?.length,a=!!ve&&!n.isLeaf&&!n.children;if(!r&&(i||a)){F(e.map(e=>e.value)),a&&!n.loading&&ve?.(e);return}Y(e)},X=()=>{D(ke),l?.([],[]),R(``),U?.focus()};(0,z.useEffect)(()=>{U&&(U.setAttribute(`role`,`combobox`),U.setAttribute(`aria-haspopup`,`listbox`),U.setAttribute(`aria-expanded`,String(k)),_&&U.setAttribute(`aria-autocomplete`,`list`))},[U,k,_]);let Z=e=>{let t=e.relatedTarget;k&&t&&(V?.contains(t)||W.current?.contains(t)||J())},Ne=()=>W.current?.querySelector(`[role="option"]`)?.focus(),Pe=e=>{switch(e.key){case`ArrowDown`:e.preventDefault(),k?G?Ne():M(!0):q(!0);break;case`Enter`:e.preventDefault(),k||q(!0);break;case` `:if(_)break;e.preventDefault(),k||q(!0)}},Fe=O.map(e=>String(e.label)),Ie=G?L:u?u(Fe,O):Fe.join(` / `),Le=(0,B.jsx)(le,{ref:W,open:k,anchor:V,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[V],onDismiss:()=>J(),returnFocusOnEscape:()=>U,focusable:!0,className:i(N.dropdown,ye),style:Se,onMouseDown:e=>{e.target.closest(`[role="option"]`)||e.preventDefault()},onBlur:Z,onKeyDown:e=>{e.key===`Tab`&&J()},children:G?(0,B.jsx)(`div`,{className:N.searchResults,role:`listbox`,"aria-label":t,tabIndex:-1,onKeyDown:e=>{let t=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)),n=t.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t[(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]?.focus())},children:K.length>0?K.map(({path:e})=>(0,B.jsx)(`div`,{className:N.searchOption,role:`option`,"aria-selected":!1,tabIndex:0,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),Y(e))},onClick:()=>Y(e),children:e.map(e=>e.label).join(` / `)},e.map(e=>e.value).join(`/`))):(0,B.jsx)(`div`,{className:N.empty,role:`status`,children:b(`cascader.noResults`)})}):(0,B.jsx)(De,{label:t,options:o,expandedPath:I,selectedPath:O,expandTrigger:ge,maxLevel:y,optionStyle:Ce,optionRender:be,autoFocus:j,onActivate:Me,onHoverExpand:e=>F(e.map(e=>e.value)),onExit:()=>J(!0)},j?`keyboard`:`pointer`)});return(0,B.jsxs)(`div`,{...h(we),className:i(N.cascader,_e),ref:H,style:{width:xe,...pe},onBlur:Z,children:[(0,B.jsxs)(`div`,{className:i(N.selector,{[N.disabled]:C,[N.focused]:k}),onClick:()=>{C||w||(k?_||J():q())},children:[(0,B.jsx)(se.Provider,{value:null,children:(0,B.jsx)(de,{ref:je,variant:`unstyled`,id:S.id,"aria-label":g??t,"aria-labelledby":Ee,"aria-describedby":S[`aria-describedby`],"aria-invalid":Te||void 0,"aria-required":T||void 0,"aria-readonly":_&&w||void 0,required:T,name:n,value:Ie,readOnly:!_||w,disabled:C,placeholder:me??b(`cascader.placeholder`),className:N.input,onChange:e=>{_&&!w&&(R(e.target.value),k||q())},onKeyDown:Pe})}),he&&E.length>0&&!C&&!w&&(0,B.jsx)(`button`,{type:`button`,className:N.clearIcon,"aria-label":b(`cascader.clear`),onClick:e=>{e.stopPropagation(),X()},children:(0,B.jsx)(oe,{className:N.icon,"aria-hidden":!0,focusable:!1})}),(0,B.jsx)(`span`,{className:i(N.arrow,k&&N.open),"aria-hidden":`true`,children:(0,B.jsx)(ae,{className:N.icon})})]}),Le]})}})))()}function U(){return(0,Ae.jsx)(V,{name:`city`,label:`City`,options:je})}var Ae,je;function W(){return(W=e((()=>{H(),Ae=n(),je=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function G(){let[e,t]=(0,K.useState)([`fr`,`idf`,`paris`]);return(0,q.jsxs)(`div`,{children:[(0,q.jsx)(V,{name:`city-controlled`,label:`City`,options:J,value:e,onChange:e=>t(e),width:300}),(0,q.jsxs)(`p`,{children:[`Value: `,e.length?JSON.stringify(e):`(empty)`]})]})}var K,q,J;function Y(){return(Y=e((()=>{K=t(),H(),q=n(),J=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Me(){return(0,X.jsx)(V,{name:`region`,label:`Region (2 levels)`,options:Z,maxLevel:2,optionRender:(e,t)=>(0,X.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[t===0?(0,X.jsx)(v,{}):(0,X.jsx)(ye,{}),e.label]}),dropdownStyle:{minWidth:360},optionStyle:{fontWeight:500}})}var X,Z;function Ne(){return(Ne=e((()=>{H(),ve(),X=n(),Z=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Pe(){return(0,Fe.jsx)(V,{name:`city-default`,label:`City`,options:Ie,defaultValue:[`jp`,`kansai`,`kyoto`],width:300})}var Fe,Ie;function Le(){return(Le=e((()=>{H(),Fe=n(),Ie=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Re(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(V,{name:`location`,label:`Location`,options:ze}),(0,Q.jsx)(V,{name:`location-disabled`,label:`Disabled`,options:ze,defaultValue:[`a`,`a1`],disabled:!0})]})}var Q,ze;function Be(){return(Be=e((()=>{H(),Q=n(),ze=[{value:`a`,label:`Warehouse A`,children:[{value:`a1`,label:`Shelf 1`},{value:`a2`,label:`Shelf 2 (full)`,disabled:!0}]},{value:`b`,label:`Warehouse B (closed)`,disabled:!0}]})))()}function Ve(){return(0,He.jsx)(V,{name:`city-display`,label:`City (last level only)`,options:Ue,defaultValue:[`fr`,`ara`,`lyon`],displayRender:e=>e[e.length-1]??``,allowClear:!1})}var He,Ue;function We(){return(We=e((()=>{H(),He=n(),Ue=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ge(){return(0,Ke.jsx)(V,{name:`city-hover`,label:`City`,options:qe,expandTrigger:`hover`})}var Ke,qe;function Je(){return(Je=e((()=>{H(),Ke=n(),qe=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ye(){let[e,t]=(0,Xe.useState)(Qe);return(0,Ze.jsx)(V,{name:`team`,label:`Team`,options:e,loadData:e=>{let n=e[e.length-1],r=e=>t(t=>t.map(t=>t.value===n.value?{...t,...e}:t));r({loading:!0}),setTimeout(()=>{r({loading:!1,children:[{value:`${n.value}-team-a`,label:`${n.label} team A`,isLeaf:!0},{value:`${n.value}-team-b`,label:`${n.label} team B`,isLeaf:!0}]})},800)},width:300})}var Xe,Ze,Qe;function $e(){return($e=e((()=>{Xe=t(),H(),Ze=n(),Qe=[{value:`frontend`,label:`Frontend`},{value:`backend`,label:`Backend`},{value:`docs`,label:`Documentation`,isLeaf:!0}]})))()}function et(){return(0,tt.jsx)(V,{name:`city-search`,label:`City`,placeholder:`Type to search`,options:nt,showSearch:!0,filter:(e,t)=>t.some(t=>String(t.label).toLowerCase().includes(e.toLowerCase())),width:300})}var tt,nt;function rt(){return(rt=e((()=>{H(),tt=n(),nt=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}var it;function at(){return(at=e((()=>{it=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

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
`})))()}var ot;function st(){return(st=e((()=>{ot=`import { useState } from "react";
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
`})))()}var ct;function lt(){return(lt=e((()=>{ct=`import { Cascader, type CascaderOption } from "@minerva/lib-core";
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
`})))()}var ut;function dt(){return(dt=e((()=>{ut=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

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
`})))()}var ft;function pt(){return(pt=e((()=>{ft=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

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
`})))()}var mt;function ht(){return(ht=e((()=>{mt=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

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
`})))()}var gt;function _t(){return(_t=e((()=>{gt=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

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
`})))()}var vt;function yt(){return(yt=e((()=>{vt=`import { useState } from "react";
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
`})))()}var bt;function xt(){return(xt=e((()=>{bt=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

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
`})))()}var $,St,Ct;function wt(){return(wt=e((()=>{W(),Y(),Ne(),Le(),Be(),We(),Je(),$e(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),t(),u(),he(),pe(),me(),$=n(),St=_e(Object.assign({"./demos/basic.tsx":U,"./demos/controlled.tsx":G,"./demos/custom-option.tsx":Me,"./demos/default-value.tsx":Pe,"./demos/disabled.tsx":Re,"./demos/display-render.tsx":Ve,"./demos/hover.tsx":Ge,"./demos/lazy-load.tsx":Ye,"./demos/search.tsx":et}),Object.assign({"./demos/basic.tsx":it,"./demos/controlled.tsx":ot,"./demos/custom-option.tsx":ct,"./demos/default-value.tsx":ut,"./demos/disabled.tsx":ft,"./demos/display-render.tsx":mt,"./demos/hover.tsx":gt,"./demos/lazy-load.tsx":vt,"./demos/search.tsx":bt})),Ct=()=>{let{t:e}=te();return(0,$.jsx)(_,{id:`cascader`,demos:St,children:(0,$.jsxs)(`section`,{className:ge.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.cascader.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:ge.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.expand`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.aria`)})]})]})})}})))()}wt();export{Ct as default};