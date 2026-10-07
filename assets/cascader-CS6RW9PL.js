import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{C as r,D as i,E as a,O as o,_ as ee,c as s,g as c,i as l,k as u,n as te,r as d,s as f,t as p,w as m}from"./DocPage-HgWiqH91.js";import{n as h,t as ne}from"./useI18n-CYdr3eVz.js";import{T as g,g as re,j as _,w as ie}from"./icons-BaZJL-85.js";import{i as ae,n as v,r as oe,t as se}from"./context-C6l3dqFj.js";import{t as ce}from"./dataAttributes-C-grv0bs.js";import{n as le,r as ue}from"./FloatingPanel-Deq8aPUL.js";import{n as de,t as fe}from"./Input-Bol6v7xp.js";import{Q as pe,Z as y}from"./sample-DbiIiloN.js";import{c as b,g as me,u as he}from"./fa-DVUoKhNv.js";var ge,_e,x,ve,ye,be,S,C,w,T,E,xe,Se,Ce,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{ge=`_cascader_14xrr_1`,_e=`_selector_14xrr_6`,x=`_focused_14xrr_22`,ve=`_disabled_14xrr_27`,ye=`_input_14xrr_32`,be=`_clearIcon_14xrr_47`,S=`_icon_14xrr_71`,C=`_arrow_14xrr_75`,w=`_open_14xrr_85`,T=`_dropdown_14xrr_89`,E=`_panel_14xrr_103`,xe=`_column_14xrr_111`,Se=`_option_14xrr_136`,Ce=`_active_14xrr_152`,D=`_label_14xrr_166`,O=`_expandIcon_14xrr_173`,k=`_loadingIndicator_14xrr_184`,A=`_searchResults_14xrr_189`,j=`_searchOption_14xrr_195`,M=`_empty_14xrr_207`,N=`_rotating_14xrr_1`,P={cascader:ge,selector:_e,focused:x,disabled:ve,input:ye,clearIcon:be,icon:S,arrow:C,open:w,dropdown:T,panel:E,column:xe,option:Se,active:Ce,label:D,expandIcon:O,loadingIndicator:k,searchResults:A,searchOption:j,empty:M,rotating:N}})))()}var I,L,R,we;function z(){return(z=e((()=>{o(),h(),g(),ee(),F(),I=t(),L=n(),R=`[role="option"]:not([aria-disabled="true"])`,we=({label:e,options:t,expandedPath:n,selectedPath:r,expandTrigger:i=`click`,maxLevel:a=6,optionRender:o,optionStyle:ee,autoFocus:s=!1,onActivate:l,onHoverExpand:te,onExit:d})=>{let{t:f}=ne(),p=(0,I.useRef)(null),m=(0,I.useId)(),h=e=>`${m}-column-${e}`,g=(0,I.useRef)(s?-1:null),_=[t];for(let e=0;e<n.length&&e<a-1;e+=1){let t=n[e].children;if(!t?.length)break;_.push(t)}let ie=e=>p.current?.querySelector(`[data-level="${e}"]`),ae=e=>{let t=ie(e);if(!t)return!1;let n=t.querySelector(`[data-expanded="true"]`)??t.querySelector(R);return n?.focus(),!!n};(0,I.useEffect)(()=>{let e=g.current;if(e===null)return;let t=e===-1?_.length-1:e;ae(t)&&(g.current=null)});let v=(e,t)=>[...n.slice(0,t),e],oe=(e,t)=>t<a-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0),se=(e,t,n)=>{let r=Array.from(e.currentTarget.parentElement?.querySelectorAll(R)??[]),i=r.indexOf(e.currentTarget),a=e=>r[(e+r.length)%r.length]?.focus();switch(c(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),a(i+1);break;case`ArrowUp`:e.preventDefault(),a(i-1);break;case`Home`:e.preventDefault(),a(0);break;case`End`:e.preventDefault(),a(r.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!oe(t,n))break;g.current=n+1,l(v(t,n),n);break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;oe(t,n)&&(g.current=n+1),l(v(t,n),n);break;case`ArrowLeft`:e.preventDefault(),n===0?d?.():ae(n-1)}};return(0,L.jsx)(`div`,{className:P.panel,ref:p,children:_.map((t,s)=>(0,L.jsx)(`ul`,{id:h(s),"data-level":s,className:P.column,role:`listbox`,"aria-label":f(`cascader.level`,{label:e??f(`cascader.options`),level:s+1}),children:t.map(e=>{let t=n[s]?.value===e.value,c=r[s]?.value===e.value,d=oe(e,s)&&!(!e.children?.length&&e.isLeaf);return(0,L.jsx)(`li`,{"data-expanded":t||void 0,className:u(P.option,{[P.active]:t||c,[P.disabled]:e.disabled,[P.loading]:e.loading}),style:ee,role:`option`,"aria-selected":c,"aria-disabled":e.disabled||void 0,"aria-busy":e.loading||void 0,"aria-controls":t&&s+1<_.length?h(s+1):void 0,tabIndex:e.disabled?-1:0,onKeyDown:t=>se(t,e,s),onClick:()=>{e.disabled||l(v(e,s),s)},onMouseEnter:()=>{i===`hover`&&!e.disabled&&e.children?.length&&s<a-1&&te?.(v(e,s))},children:o?o(e,s):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{className:P.label,children:e.label}),e.loading?(0,L.jsx)(`span`,{className:P.loadingIndicator,"aria-hidden":!0,children:`...`}):d&&(0,L.jsx)(re,{className:P.expandIcon,"aria-hidden":!0})]})},e.value)})},s))})}})))()}var B,V,Te,Ee,De,Oe,H;function U(){return(U=e((()=>{o(),h(),g(),a(),m(),v(),ue(),fe(),F(),z(),B=t(),V=n(),Te=(e,t)=>{let n=[],r=e;for(let e of t){let t=r?.find(t=>t.value===e);if(!t)break;n.push(t),r=t.children}return n},Ee=[],De=[],Oe=(e,t=[])=>e.flatMap(e=>{if(e.disabled)return[];let n=[...t,e];return[{option:e,path:n},...e.children?Oe(e.children,n):[]]}),H=({ref:e,label:t,name:n,options:a=Ee,value:o,defaultValue:ee,onChange:s,displayRender:c,disabled:l,readOnly:te,required:d,invalid:f,id:p,"aria-label":m,"aria-labelledby":h,"aria-describedby":g,style:re,placeholder:v,allowClear:ue=!0,expandTrigger:fe=`click`,className:pe,showSearch:y=!1,filter:b,loadData:me,dropdownClassName:he,optionRender:ge,width:_e=240,maxLevel:x=6,dropdownStyle:ve,optionStyle:ye,...be})=>{let{t:S}=ne(),C=ae(),w=se({id:p,"aria-describedby":g}),T=l??C?.disabled??!1,E=te??C?.readOnly??!1,xe=d??C?.required??!1,Se=f??C?.invalid??!1,Ce=h??(C&&!m?C.labelId:void 0),[D,O]=r({value:o,defaultValue:ee??De,name:`Cascader`}),k=(0,B.useMemo)(()=>Te(a,D),[a,D]),[A,j]=(0,B.useState)(!1),[M,N]=(0,B.useState)(!1),[F,I]=(0,B.useState)([]),L=(0,B.useMemo)(()=>Te(a,F),[a,F]),[R,z]=(0,B.useState)(``),[H,U]=(0,B.useState)(null),[W,ke]=(0,B.useState)(null),Ae=i(ke,e),G=(0,B.useRef)(null),K=y&&R!==``,je=(0,B.useMemo)(()=>{if(!K)return[];let e=R.toLowerCase();return Oe(a).filter(({path:t})=>b?b(R,t):t.some(t=>String(t.label).toLowerCase().includes(e)))},[K,R,a,b]),q=(e=!1)=>{T||E||(I(D),N(e),j(!0))},J=(e=!1)=>{j(!1),z(``),e&&W?.focus()},Y=e=>{let t=e.map(e=>e.value);O(t),s?.(t,e),J(!0)},Me=(e,t)=>{let n=e[e.length-1];if(n.disabled)return;let r=t>=x-1,i=!!n.children?.length,a=!!me&&!n.isLeaf&&!n.children;if(!r&&(i||a)){I(e.map(e=>e.value)),a&&!n.loading&&me?.(e);return}Y(e)},X=()=>{O(De),s?.([],[]),z(``),W?.focus()};(0,B.useEffect)(()=>{W&&(W.setAttribute(`role`,`combobox`),W.setAttribute(`aria-haspopup`,`listbox`),W.setAttribute(`aria-expanded`,String(A)),y&&W.setAttribute(`aria-autocomplete`,`list`))},[W,A,y]);let Ne=e=>{let t=e.relatedTarget;A&&t&&(H?.contains(t)||G.current?.contains(t)||J())},Pe=()=>G.current?.querySelector(`[role="option"]`)?.focus(),Fe=e=>{switch(e.key){case`ArrowDown`:e.preventDefault(),A?K?Pe():N(!0):q(!0);break;case`Enter`:e.preventDefault(),A||q(!0);break;case` `:if(y)break;e.preventDefault(),A||q(!0)}},Z=k.map(e=>String(e.label)),Ie=K?R:c?c(Z,k):Z.join(` / `),Le=(0,V.jsx)(le,{ref:G,open:A,anchor:H,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[H],onDismiss:()=>J(),returnFocusOnEscape:()=>W,focusable:!0,className:u(P.dropdown,he),style:ve,onMouseDown:e=>{e.target.closest(`[role="option"]`)||e.preventDefault()},onBlur:Ne,onKeyDown:e=>{e.key===`Tab`&&J()},children:K?(0,V.jsx)(`div`,{className:P.searchResults,role:`listbox`,"aria-label":t,tabIndex:-1,onKeyDown:e=>{let t=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)),n=t.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t[(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]?.focus())},children:je.length>0?je.map(({path:e})=>(0,V.jsx)(`div`,{className:P.searchOption,role:`option`,"aria-selected":!1,tabIndex:0,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),Y(e))},onClick:()=>Y(e),children:e.map(e=>e.label).join(` / `)},e.map(e=>e.value).join(`/`))):(0,V.jsx)(`div`,{className:P.empty,role:`status`,children:S(`cascader.noResults`)})}):(0,V.jsx)(we,{label:t,options:a,expandedPath:L,selectedPath:k,expandTrigger:fe,maxLevel:x,optionStyle:ye,optionRender:ge,autoFocus:M,onActivate:Me,onHoverExpand:e=>I(e.map(e=>e.value)),onExit:()=>J(!0)},M?`keyboard`:`pointer`)});return(0,V.jsxs)(`div`,{...ce(be),className:u(P.cascader,pe),ref:U,style:{width:_e,...re},onBlur:Ne,children:[(0,V.jsxs)(`div`,{className:u(P.selector,{[P.disabled]:T,[P.focused]:A}),onClick:()=>{T||E||(A?y||J():q())},children:[(0,V.jsx)(oe.Provider,{value:null,children:(0,V.jsx)(de,{ref:Ae,variant:`unstyled`,id:w.id,"aria-label":m??t,"aria-labelledby":Ce,"aria-describedby":w[`aria-describedby`],"aria-invalid":Se||void 0,"aria-required":xe||void 0,"aria-readonly":y&&E||void 0,required:xe,name:n,value:Ie,readOnly:!y||E,disabled:T,placeholder:v??S(`cascader.placeholder`),className:P.input,onChange:e=>{y&&!E&&(z(e.target.value),A||q())},onKeyDown:Fe})}),ue&&D.length>0&&!T&&!E&&(0,V.jsx)(`button`,{type:`button`,className:P.clearIcon,"aria-label":S(`cascader.clear`),onClick:e=>{e.stopPropagation(),X()},children:(0,V.jsx)(ie,{className:P.icon,"aria-hidden":!0,focusable:!1})}),(0,V.jsx)(`span`,{className:u(P.arrow,A&&P.open),"aria-hidden":`true`,children:(0,V.jsx)(_,{className:P.icon})})]}),Le]})}})))()}function W(){return(0,ke.jsx)(H,{name:`city`,label:`City`,options:Ae})}var ke,Ae;function G(){return(G=e((()=>{U(),ke=n(),Ae=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function K(){let[e,t]=(0,je.useState)([`fr`,`idf`,`paris`]);return(0,q.jsxs)(`div`,{children:[(0,q.jsx)(H,{name:`city-controlled`,label:`City`,options:J,value:e,onChange:e=>t(e),width:300}),(0,q.jsxs)(`p`,{children:[`Value: `,e.length?JSON.stringify(e):`(empty)`]})]})}var je,q,J;function Y(){return(Y=e((()=>{je=t(),U(),q=n(),J=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Me(){return(0,X.jsx)(H,{name:`region`,label:`Region (2 levels)`,options:Ne,maxLevel:2,optionRender:(e,t)=>(0,X.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[t===0?(0,X.jsx)(b,{}):(0,X.jsx)(he,{}),e.label]}),dropdownStyle:{minWidth:360},optionStyle:{fontWeight:500}})}var X,Ne;function Pe(){return(Pe=e((()=>{U(),me(),X=n(),Ne=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Fe(){return(0,Z.jsx)(H,{name:`city-default`,label:`City`,options:Ie,defaultValue:[`jp`,`kansai`,`kyoto`],width:300})}var Z,Ie;function Le(){return(Le=e((()=>{U(),Z=n(),Ie=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Re(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(H,{name:`location`,label:`Location`,options:ze}),(0,Q.jsx)(H,{name:`location-disabled`,label:`Disabled`,options:ze,defaultValue:[`a`,`a1`],disabled:!0})]})}var Q,ze;function Be(){return(Be=e((()=>{U(),Q=n(),ze=[{value:`a`,label:`Warehouse A`,children:[{value:`a1`,label:`Shelf 1`},{value:`a2`,label:`Shelf 2 (full)`,disabled:!0}]},{value:`b`,label:`Warehouse B (closed)`,disabled:!0}]})))()}function Ve(){return(0,He.jsx)(H,{name:`city-display`,label:`City (last level only)`,options:Ue,defaultValue:[`fr`,`ara`,`lyon`],displayRender:e=>e[e.length-1]??``,allowClear:!1})}var He,Ue;function We(){return(We=e((()=>{U(),He=n(),Ue=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ge(){return(0,Ke.jsx)(H,{name:`city-hover`,label:`City`,options:qe,expandTrigger:`hover`})}var Ke,qe;function Je(){return(Je=e((()=>{U(),Ke=n(),qe=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ye(){let[e,t]=(0,Xe.useState)(Qe);return(0,Ze.jsx)(H,{name:`team`,label:`Team`,options:e,loadData:e=>{let n=e[e.length-1],r=e=>t(t=>t.map(t=>t.value===n.value?{...t,...e}:t));r({loading:!0}),setTimeout(()=>{r({loading:!1,children:[{value:`${n.value}-team-a`,label:`${n.label} team A`,isLeaf:!0},{value:`${n.value}-team-b`,label:`${n.label} team B`,isLeaf:!0}]})},800)},width:300})}var Xe,Ze,Qe;function $e(){return($e=e((()=>{Xe=t(),U(),Ze=n(),Qe=[{value:`frontend`,label:`Frontend`},{value:`backend`,label:`Backend`},{value:`docs`,label:`Documentation`,isLeaf:!0}]})))()}function et(){return(0,tt.jsx)(H,{name:`city-search`,label:`City`,placeholder:`Type to search`,options:nt,showSearch:!0,filter:(e,t)=>t.some(t=>String(t.label).toLowerCase().includes(e.toLowerCase())),width:300})}var tt,nt;function rt(){return(rt=e((()=>{U(),tt=n(),nt=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}var it;function at(){return(at=e((()=>{it=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

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
`})))()}var $,St,Ct;function wt(){return(wt=e((()=>{G(),Y(),Pe(),Le(),Be(),We(),Je(),$e(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),t(),y(),te(),s(),l(),$=n(),St=f(Object.assign({"./demos/basic.tsx":W,"./demos/controlled.tsx":K,"./demos/custom-option.tsx":Me,"./demos/default-value.tsx":Fe,"./demos/disabled.tsx":Re,"./demos/display-render.tsx":Ve,"./demos/hover.tsx":Ge,"./demos/lazy-load.tsx":Ye,"./demos/search.tsx":et}),Object.assign({"./demos/basic.tsx":it,"./demos/controlled.tsx":ot,"./demos/custom-option.tsx":ct,"./demos/default-value.tsx":ut,"./demos/disabled.tsx":ft,"./demos/display-render.tsx":mt,"./demos/hover.tsx":gt,"./demos/lazy-load.tsx":vt,"./demos/search.tsx":bt})),Ct=()=>{let{t:e}=pe();return(0,$.jsx)(p,{id:`cascader`,demos:St,children:(0,$.jsxs)(`section`,{className:d.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.cascader.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:d.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.expand`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.aria`)})]})]})})}})))()}wt();export{Ct as default};