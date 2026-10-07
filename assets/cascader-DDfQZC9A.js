import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{n as a,t as o}from"./useI18n-DtQV8aM0.js";import{T as s,g as ee,j as te,w as ne}from"./icons-CtD3xdmP.js";import{i as c,n as l,r as re,t as ie}from"./context-DEmBurf8.js";import{n as ae,t as u}from"./mergeRefs-CWbOvZcQ.js";import{t as oe}from"./dataAttributes-C-grv0bs.js";import{n as d,t as f}from"./useControllableState-NzKJCN8h.js";import{n as p,t as se}from"./direction-BdBdG3Jn.js";import{n as ce,r as m}from"./FloatingPanel-BYk7er3l.js";import{n as h,t as g}from"./Input-DrhPsTO_.js";import{Q as le,Z as ue}from"./sample-Dya6Jarx.js";import{a as de,c as fe,n as pe,o as me,s as he,t as _}from"./DocPage-DzKszXiH.js";import{c as v,g as ge,u as _e}from"./fa-Cf68xXpi.js";var ve,ye,y,be,xe,Se,b,x,S,C,w,T,Ce,we,E,D,O,k,A,Te,j,M;function N(){return(N=e((()=>{ve=`_cascader_14xrr_1`,ye=`_selector_14xrr_6`,y=`_focused_14xrr_22`,be=`_disabled_14xrr_27`,xe=`_input_14xrr_32`,Se=`_clearIcon_14xrr_47`,b=`_icon_14xrr_71`,x=`_arrow_14xrr_75`,S=`_open_14xrr_85`,C=`_dropdown_14xrr_89`,w=`_panel_14xrr_103`,T=`_column_14xrr_111`,Ce=`_option_14xrr_136`,we=`_active_14xrr_152`,E=`_label_14xrr_166`,D=`_expandIcon_14xrr_173`,O=`_loadingIndicator_14xrr_184`,k=`_searchResults_14xrr_189`,A=`_searchOption_14xrr_195`,Te=`_empty_14xrr_207`,j=`_rotating_14xrr_1`,M={cascader:ve,selector:ye,focused:y,disabled:be,input:xe,clearIcon:Se,icon:b,arrow:x,open:S,dropdown:C,panel:w,column:T,option:Ce,active:we,label:E,expandIcon:D,loadingIndicator:O,searchResults:k,searchOption:A,empty:Te,rotating:j}})))()}var P,F,I,Ee;function L(){return(L=e((()=>{i(),a(),s(),p(),N(),P=t(),F=n(),I=`[role="option"]:not([aria-disabled="true"])`,Ee=({label:e,options:t,expandedPath:n,selectedPath:i,expandTrigger:a=`click`,maxLevel:s=6,optionRender:te,optionStyle:ne,autoFocus:c=!1,onActivate:l,onHoverExpand:re,onExit:ie})=>{let{t:ae}=o(),u=(0,P.useRef)(null),oe=(0,P.useId)(),d=e=>`${oe}-column-${e}`,f=(0,P.useRef)(c?-1:null),p=[t];for(let e=0;e<n.length&&e<s-1;e+=1){let t=n[e].children;if(!t?.length)break;p.push(t)}let ce=e=>u.current?.querySelector(`[data-level="${e}"]`),m=e=>{let t=ce(e);if(!t)return!1;let n=t.querySelector(`[data-expanded="true"]`)??t.querySelector(I);return n?.focus(),!!n};(0,P.useEffect)(()=>{let e=f.current;if(e===null)return;let t=e===-1?p.length-1:e;m(t)&&(f.current=null)});let h=(e,t)=>[...n.slice(0,t),e],g=(e,t)=>t<s-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0),le=(e,t,n)=>{let r=Array.from(e.currentTarget.parentElement?.querySelectorAll(I)??[]),i=r.indexOf(e.currentTarget),a=e=>r[(e+r.length)%r.length]?.focus();switch(se(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),a(i+1);break;case`ArrowUp`:e.preventDefault(),a(i-1);break;case`Home`:e.preventDefault(),a(0);break;case`End`:e.preventDefault(),a(r.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!g(t,n))break;f.current=n+1,l(h(t,n),n);break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;g(t,n)&&(f.current=n+1),l(h(t,n),n);break;case`ArrowLeft`:e.preventDefault(),n===0?ie?.():m(n-1)}};return(0,F.jsx)(`div`,{className:M.panel,ref:u,children:p.map((t,o)=>(0,F.jsx)(`ul`,{id:d(o),"data-level":o,className:M.column,role:`listbox`,"aria-label":ae(`cascader.level`,{label:e??ae(`cascader.options`),level:o+1}),children:t.map(e=>{let t=n[o]?.value===e.value,c=i[o]?.value===e.value,ie=g(e,o)&&!(!e.children?.length&&e.isLeaf);return(0,F.jsx)(`li`,{"data-expanded":t||void 0,className:r(M.option,{[M.active]:t||c,[M.disabled]:e.disabled,[M.loading]:e.loading}),style:ne,role:`option`,"aria-selected":c,"aria-disabled":e.disabled||void 0,"aria-busy":e.loading||void 0,"aria-controls":t&&o+1<p.length?d(o+1):void 0,tabIndex:e.disabled?-1:0,onKeyDown:t=>le(t,e,o),onClick:()=>{e.disabled||l(h(e,o),o)},onMouseEnter:()=>{a===`hover`&&!e.disabled&&e.children?.length&&o<s-1&&re?.(h(e,o))},children:te?te(e,o):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:M.label,children:e.label}),e.loading?(0,F.jsx)(`span`,{className:M.loadingIndicator,"aria-hidden":!0,children:`...`}):ie&&(0,F.jsx)(ee,{className:M.expandIcon,"aria-hidden":!0})]})},e.value)})},o))})}})))()}var R,z,De,Oe,ke,Ae,B;function V(){return(V=e((()=>{i(),a(),s(),u(),d(),l(),m(),h(),N(),L(),R=t(),z=n(),De=(e,t)=>{let n=[],r=e;for(let e of t){let t=r?.find(t=>t.value===e);if(!t)break;n.push(t),r=t.children}return n},Oe=[],ke=[],Ae=(e,t=[])=>e.flatMap(e=>{if(e.disabled)return[];let n=[...t,e];return[{option:e,path:n},...e.children?Ae(e.children,n):[]]}),B=({ref:e,label:t,name:n,options:i=Oe,value:a,defaultValue:s,onChange:ee,displayRender:l,disabled:u,readOnly:d,required:p,invalid:se,id:m,"aria-label":h,"aria-labelledby":le,"aria-describedby":ue,style:de,placeholder:fe,allowClear:pe=!0,expandTrigger:me=`click`,className:he,showSearch:_=!1,filter:v,loadData:ge,dropdownClassName:_e,optionRender:ve,width:ye=240,maxLevel:y=6,dropdownStyle:be,optionStyle:xe,...Se})=>{let{t:b}=o(),x=c(),S=ie({id:m,"aria-describedby":ue}),C=u??x?.disabled??!1,w=d??x?.readOnly??!1,T=p??x?.required??!1,Ce=se??x?.invalid??!1,we=le??(x&&!h?x.labelId:void 0),[E,D]=f({value:a,defaultValue:s??ke}),O=(0,R.useMemo)(()=>De(i,E),[i,E]),[k,A]=(0,R.useState)(!1),[Te,j]=(0,R.useState)(!1),[N,P]=(0,R.useState)([]),F=(0,R.useMemo)(()=>De(i,N),[i,N]),[I,L]=(0,R.useState)(``),[B,V]=(0,R.useState)(null),[H,je]=(0,R.useState)(null),Me=ae(je,e),U=(0,R.useRef)(null),W=_&&I!==``,G=(0,R.useMemo)(()=>{if(!W)return[];let e=I.toLowerCase();return Ae(i).filter(({path:t})=>v?v(I,t):t.some(t=>String(t.label).toLowerCase().includes(e)))},[W,I,i,v]),K=(e=!1)=>{C||w||(P(E),j(e),A(!0))},q=(e=!1)=>{A(!1),L(``),e&&H?.focus()},J=e=>{let t=e.map(e=>e.value);D(t),ee?.(t,e),q(!0)},Ne=(e,t)=>{let n=e[e.length-1];if(n.disabled)return;let r=t>=y-1,i=!!n.children?.length,a=!!ge&&!n.isLeaf&&!n.children;if(!r&&(i||a)){P(e.map(e=>e.value)),a&&!n.loading&&ge?.(e);return}J(e)},Y=()=>{D(ke),ee?.([],[]),L(``),H?.focus()};(0,R.useEffect)(()=>{H&&(H.setAttribute(`role`,`combobox`),H.setAttribute(`aria-haspopup`,`listbox`),H.setAttribute(`aria-expanded`,String(k)),_&&H.setAttribute(`aria-autocomplete`,`list`))},[H,k,_]);let X=e=>{let t=e.relatedTarget;k&&t&&(B?.contains(t)||U.current?.contains(t)||q())},Pe=()=>U.current?.querySelector(`[role="option"]`)?.focus(),Fe=e=>{switch(e.key){case`ArrowDown`:e.preventDefault(),k?W?Pe():j(!0):K(!0);break;case`Enter`:e.preventDefault(),k||K(!0);break;case` `:if(_)break;e.preventDefault(),k||K(!0)}},Z=O.map(e=>String(e.label)),Ie=W?I:l?l(Z,O):Z.join(` / `),Le=(0,z.jsx)(ce,{ref:U,open:k,anchor:B,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[B],onDismiss:()=>q(),returnFocusOnEscape:()=>H,focusable:!0,className:r(M.dropdown,_e),style:be,onMouseDown:e=>{e.target.closest(`[role="option"]`)||e.preventDefault()},onBlur:X,onKeyDown:e=>{e.key===`Tab`&&q()},children:W?(0,z.jsx)(`div`,{className:M.searchResults,role:`listbox`,"aria-label":t,tabIndex:-1,onKeyDown:e=>{let t=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)),n=t.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t[(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]?.focus())},children:G.length>0?G.map(({path:e})=>(0,z.jsx)(`div`,{className:M.searchOption,role:`option`,"aria-selected":!1,tabIndex:0,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),J(e))},onClick:()=>J(e),children:e.map(e=>e.label).join(` / `)},e.map(e=>e.value).join(`/`))):(0,z.jsx)(`div`,{className:M.empty,role:`status`,children:b(`cascader.noResults`)})}):(0,z.jsx)(Ee,{label:t,options:i,expandedPath:F,selectedPath:O,expandTrigger:me,maxLevel:y,optionStyle:xe,optionRender:ve,autoFocus:Te,onActivate:Ne,onHoverExpand:e=>P(e.map(e=>e.value)),onExit:()=>q(!0)},Te?`keyboard`:`pointer`)});return(0,z.jsxs)(`div`,{...oe(Se),className:r(M.cascader,he),ref:V,style:{width:ye,...de},onBlur:X,children:[(0,z.jsxs)(`div`,{className:r(M.selector,{[M.disabled]:C,[M.focused]:k}),onClick:()=>{C||w||(k?_||q():K())},children:[(0,z.jsx)(re.Provider,{value:null,children:(0,z.jsx)(g,{ref:Me,variant:`unstyled`,id:S.id,"aria-label":h??t,"aria-labelledby":we,"aria-describedby":S[`aria-describedby`],"aria-invalid":Ce||void 0,"aria-required":T||void 0,"aria-readonly":_&&w||void 0,required:T,name:n,value:Ie,readOnly:!_||w,disabled:C,placeholder:fe??b(`cascader.placeholder`),className:M.input,onChange:e=>{_&&!w&&(L(e.target.value),k||K())},onKeyDown:Fe})}),pe&&E.length>0&&!C&&!w&&(0,z.jsx)(`button`,{type:`button`,className:M.clearIcon,"aria-label":b(`cascader.clear`),onClick:e=>{e.stopPropagation(),Y()},children:(0,z.jsx)(ne,{className:M.icon,"aria-hidden":!0,focusable:!1})}),(0,z.jsx)(`span`,{className:r(M.arrow,k&&M.open),"aria-hidden":`true`,children:(0,z.jsx)(te,{className:M.icon})})]}),Le]})}})))()}function H(){return(0,je.jsx)(B,{name:`city`,label:`City`,options:Me})}var je,Me;function U(){return(U=e((()=>{V(),je=n(),Me=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function W(){let[e,t]=(0,G.useState)([`fr`,`idf`,`paris`]);return(0,K.jsxs)(`div`,{children:[(0,K.jsx)(B,{name:`city-controlled`,label:`City`,options:q,value:e,onChange:e=>t(e),width:300}),(0,K.jsxs)(`p`,{children:[`Value: `,e.length?JSON.stringify(e):`(empty)`]})]})}var G,K,q;function J(){return(J=e((()=>{G=t(),V(),K=n(),q=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ne(){return(0,Y.jsx)(B,{name:`region`,label:`Region (2 levels)`,options:X,maxLevel:2,optionRender:(e,t)=>(0,Y.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[t===0?(0,Y.jsx)(v,{}):(0,Y.jsx)(_e,{}),e.label]}),dropdownStyle:{minWidth:360},optionStyle:{fontWeight:500}})}var Y,X;function Pe(){return(Pe=e((()=>{V(),ge(),Y=n(),X=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Fe(){return(0,Z.jsx)(B,{name:`city-default`,label:`City`,options:Ie,defaultValue:[`jp`,`kansai`,`kyoto`],width:300})}var Z,Ie;function Le(){return(Le=e((()=>{V(),Z=n(),Ie=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Re(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(B,{name:`location`,label:`Location`,options:ze}),(0,Q.jsx)(B,{name:`location-disabled`,label:`Disabled`,options:ze,defaultValue:[`a`,`a1`],disabled:!0})]})}var Q,ze;function Be(){return(Be=e((()=>{V(),Q=n(),ze=[{value:`a`,label:`Warehouse A`,children:[{value:`a1`,label:`Shelf 1`},{value:`a2`,label:`Shelf 2 (full)`,disabled:!0}]},{value:`b`,label:`Warehouse B (closed)`,disabled:!0}]})))()}function Ve(){return(0,He.jsx)(B,{name:`city-display`,label:`City (last level only)`,options:Ue,defaultValue:[`fr`,`ara`,`lyon`],displayRender:e=>e[e.length-1]??``,allowClear:!1})}var He,Ue;function We(){return(We=e((()=>{V(),He=n(),Ue=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ge(){return(0,Ke.jsx)(B,{name:`city-hover`,label:`City`,options:qe,expandTrigger:`hover`})}var Ke,qe;function Je(){return(Je=e((()=>{V(),Ke=n(),qe=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ye(){let[e,t]=(0,Xe.useState)(Qe);return(0,Ze.jsx)(B,{name:`team`,label:`Team`,options:e,loadData:e=>{let n=e[e.length-1],r=e=>t(t=>t.map(t=>t.value===n.value?{...t,...e}:t));r({loading:!0}),setTimeout(()=>{r({loading:!1,children:[{value:`${n.value}-team-a`,label:`${n.label} team A`,isLeaf:!0},{value:`${n.value}-team-b`,label:`${n.label} team B`,isLeaf:!0}]})},800)},width:300})}var Xe,Ze,Qe;function $e(){return($e=e((()=>{Xe=t(),V(),Ze=n(),Qe=[{value:`frontend`,label:`Frontend`},{value:`backend`,label:`Backend`},{value:`docs`,label:`Documentation`,isLeaf:!0}]})))()}function et(){return(0,tt.jsx)(B,{name:`city-search`,label:`City`,placeholder:`Type to search`,options:nt,showSearch:!0,filter:(e,t)=>t.some(t=>String(t.label).toLowerCase().includes(e.toLowerCase())),width:300})}var tt,nt;function rt(){return(rt=e((()=>{V(),tt=n(),nt=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}var it;function at(){return(at=e((()=>{it=`import { Cascader, type CascaderOption } from "@minerva/lib-core";

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
`})))()}var $,St,Ct;function wt(){return(wt=e((()=>{U(),J(),Pe(),Le(),Be(),We(),Je(),$e(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),t(),ue(),pe(),fe(),me(),$=n(),St=he(Object.assign({"./demos/basic.tsx":H,"./demos/controlled.tsx":W,"./demos/custom-option.tsx":Ne,"./demos/default-value.tsx":Fe,"./demos/disabled.tsx":Re,"./demos/display-render.tsx":Ve,"./demos/hover.tsx":Ge,"./demos/lazy-load.tsx":Ye,"./demos/search.tsx":et}),Object.assign({"./demos/basic.tsx":it,"./demos/controlled.tsx":ot,"./demos/custom-option.tsx":ct,"./demos/default-value.tsx":ut,"./demos/disabled.tsx":ft,"./demos/display-render.tsx":mt,"./demos/hover.tsx":gt,"./demos/lazy-load.tsx":vt,"./demos/search.tsx":bt})),Ct=()=>{let{t:e}=le();return(0,$.jsx)(_,{id:`cascader`,demos:St,children:(0,$.jsxs)(`section`,{className:de.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.cascader.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:de.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.expand`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.aria`)})]})]})})}})))()}wt();export{Ct as default};