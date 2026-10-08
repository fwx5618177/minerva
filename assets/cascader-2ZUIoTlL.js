import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{F as r,h as i,o as a,u as o,vt as s}from"./minerva-web-components-ByJsjP0z.js";import{l as c,m as ee,n as l,p as u,t as te,u as d}from"./DocPage-CVA4UCUb.js";import{Q as f,Z as ne,et as re,nt as p,rt as m,tt as h}from"./io5-BO4aBax7.js";import{n as ie,t as ae}from"./useI18n-B2tkKcqQ.js";import{t as g}from"./stylingHooks-GjssfG7q.js";import{T as _,g as oe,j as v,w as se}from"./icons-C9qyBhWC.js";import{i as ce,n as le,r as ue,t as de}from"./context-CofDH3-d.js";import{t as fe}from"./dataAttributes-C-grv0bs.js";import{t as pe}from"./direction-BB7i66oX.js";import{n as me,r as he}from"./FloatingPanel-DQpR7fKp.js";import{n as ge,t as y}from"./Input-AV5F_Ft8.js";import{c as b,g as _e,u as ve}from"./fa-BaHqKsw9.js";var ye,be,x,xe,Se,Ce,S,C,w,T,E,D,O,we,k,A,j,M,N,P,Te,F;function I(){return(I=e((()=>{ye=`_cascader_148vm_1`,be=`_selector_148vm_6`,x=`_focused_148vm_22`,xe=`_disabled_148vm_28`,Se=`_input_148vm_33`,Ce=`_clearIcon_148vm_48`,S=`_icon_148vm_72`,C=`_arrow_148vm_76`,w=`_open_148vm_86`,T=`_dropdown_148vm_90`,E=`_panel_148vm_104`,D=`_column_148vm_114`,O=`_option_148vm_135`,we=`_active_148vm_151`,k=`_label_148vm_165`,A=`_expandIcon_148vm_172`,j=`_loadingIndicator_148vm_183`,M=`_searchResults_148vm_188`,N=`_searchOption_148vm_194`,P=`_empty_148vm_206`,Te=`_rotating_148vm_1`,F={cascader:ye,selector:be,focused:x,disabled:xe,input:Se,clearIcon:Ce,icon:S,arrow:C,open:w,dropdown:T,panel:E,column:D,option:O,active:we,label:k,expandIcon:A,loadingIndicator:j,searchResults:M,searchOption:N,empty:P,rotating:Te}})))()}var L,R,z,Ee;function B(){return(B=e((()=>{s(),ie(),_(),pe(),I(),L=t(),R=n(),z=`[role="option"]:not([aria-disabled="true"])`,Ee=({label:e,options:t,expandedPath:n,selectedPath:r,expandTrigger:i=`click`,maxLevel:s=6,optionRender:c,optionStyle:ee,autoFocus:l=!1,onActivate:u,onHoverExpand:te,onExit:d})=>{let{t:f}=ae(),ne=(0,L.useRef)(null),re=(0,L.useId)(),p=e=>`${re}-column-${e}`,m=(0,L.useRef)(l?-1:null),h=[t];for(let e=0;e<n.length&&e<s-1;e+=1){let t=n[e].children;if(!t?.length)break;h.push(t)}let ie=e=>ne.current?.querySelector(`[data-level="${e}"]`),_=e=>{let t=ie(e);if(!t)return!1;let n=t.querySelector(`[data-expanded]`)??t.querySelector(`[data-selected]`)??t.querySelector(z);return n?.focus(),!!n};(0,L.useEffect)(()=>{let e=m.current;if(e===null)return;let t=e===-1?h.length-1:e;_(t)&&(m.current=null)});let v=(e,t)=>[...n.slice(0,t),e],se=(e,t)=>t<s-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0),ce=(e,t,n)=>{let r=Array.from(e.currentTarget.parentElement?.querySelectorAll(z)??[]),i=r.indexOf(e.currentTarget),a=e=>r[(e+r.length)%r.length]?.focus();switch(o(e.key,e.currentTarget)){case`ArrowDown`:e.preventDefault(),a(i+1);break;case`ArrowUp`:e.preventDefault(),a(i-1);break;case`Home`:e.preventDefault(),a(0);break;case`End`:e.preventDefault(),a(r.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!se(t,n))break;m.current=n+1,u(v(t,n),n);break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;se(t,n)&&(m.current=n+1),u(v(t,n),n);break;case`ArrowLeft`:e.preventDefault(),n===0?d?.():_(n-1)}};return(0,R.jsx)(`div`,{className:F.panel,ref:ne,children:h.map((t,o)=>(0,R.jsx)(`ul`,{id:p(o),"data-level":o,className:F.column,...g(`cascader`,`column`),role:`listbox`,"aria-label":f(`cascader.level`,{label:e??f(`cascader.options`),level:o+1}),children:t.map(e=>{let t=n[o]?.value===e.value,l=r[o]?.value===e.value,d=l&&o===r.length-1,f=se(e,o)&&!(!e.children?.length&&e.isLeaf);return(0,R.jsx)(`li`,{className:a(F.option,{[F.active]:t||l,[F.disabled]:e.disabled,[F.loading]:e.loading}),style:ee,...g(`cascader`,`item`,{selected:l,expanded:t&&!d,disabled:e.disabled,loading:e.loading}),role:`option`,"aria-selected":l,"aria-disabled":e.disabled||void 0,"aria-busy":e.loading||void 0,"aria-controls":t&&o+1<h.length?p(o+1):void 0,tabIndex:e.disabled?-1:0,onKeyDown:t=>ce(t,e,o),onClick:()=>{e.disabled||u(v(e,o),o)},onMouseEnter:()=>{i===`hover`&&!e.disabled&&e.children?.length&&o<s-1&&te?.(v(e,o))},children:c?c(e,o):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`span`,{className:F.label,children:e.label}),e.loading?(0,R.jsx)(`span`,{className:F.loadingIndicator,"aria-hidden":!0,children:`...`}):f&&(0,R.jsx)(oe,{className:F.expandIcon,"aria-hidden":!0})]})},e.value)})},o))})}})))()}var V,H,De,Oe,U;function W(){return(W=e((()=>{s(),ie(),_(),re(),f(),le(),he(),y(),I(),B(),V=t(),H=n(),De=[],Oe=[],U=({ref:e,label:t,name:n,options:o=De,value:s,defaultValue:c,onChange:ee,displayRender:l,disabled:u,readOnly:te,required:d,invalid:f,id:re,"aria-label":p,"aria-labelledby":m,"aria-describedby":ie,style:_,placeholder:oe,allowClear:le=!0,expandTrigger:pe=`click`,className:he,showSearch:y=!1,filter:b,loadData:_e,dropdownClassName:ve,optionRender:ye,width:be=240,maxLevel:x=6,dropdownStyle:xe,optionStyle:Se,...Ce})=>{let{t:S}=ae(),C=ce(),w=de({id:re,"aria-describedby":ie}),T=u??C?.disabled??!1,E=te??C?.readOnly??!1,D=d??C?.required??!1,O=f??C?.invalid??!1,we=m??(C&&!p?C.labelId:void 0),[k,A]=ne({value:s,defaultValue:c??Oe,name:`Cascader`}),j=(0,V.useMemo)(()=>r(o,k),[o,k]),[M,N]=(0,V.useState)(!1),[P,Te]=(0,V.useState)(!1),[I,L]=(0,V.useState)([]),R=(0,V.useMemo)(()=>r(o,I),[o,I]),[z,B]=(0,V.useState)(``),[U,W]=(0,V.useState)(null),[G,ke]=(0,V.useState)(null),Ae=h(ke,e),K=(0,V.useRef)(null),q=y&&z!==``,je=(0,V.useMemo)(()=>{if(!q)return[];let e=z.toLowerCase();return i(o).filter(({path:t})=>b?b(z,t):t.some(t=>String(t.label).toLowerCase().includes(e)))},[q,z,o,b]),J=(e=!1)=>{T||E||(L(k),Te(e),N(!0))},Y=(e=!1)=>{N(!1),B(``),e&&G?.focus()},X=e=>{let t=e.map(e=>e.value);A(t),ee?.(t,e),Y(!0)},Me=(e,t)=>{let n=e[e.length-1];if(n.disabled)return;let r=t>=x-1,i=!!n.children?.length,a=!!_e&&!n.isLeaf&&!n.children;if(!r&&(i||a)){L(e.map(e=>e.value)),a&&!n.loading&&_e?.(e);return}X(e)},Z=()=>{A(Oe),ee?.([],[]),B(``),G?.focus()};(0,V.useEffect)(()=>{G&&(G.setAttribute(`role`,`combobox`),G.setAttribute(`aria-haspopup`,`listbox`),G.setAttribute(`aria-expanded`,String(M)),y&&G.setAttribute(`aria-autocomplete`,`list`))},[G,M,y]);let Ne=e=>{let t=e.relatedTarget;M&&t&&(U?.contains(t)||K.current?.contains(t)||Y())},Pe=()=>K.current?.querySelector(`[role="option"]`)?.focus(),Fe=e=>{switch(e.key){case`ArrowDown`:e.preventDefault(),M?q?Pe():Te(!0):J(!0);break;case`Enter`:e.preventDefault(),M||J(!0);break;case` `:if(y)break;e.preventDefault(),M||J(!0)}},Ie=j.map(e=>String(e.label)),Le=q?z:l?l(Ie,j):Ie.join(` / `),Re=()=>(0,H.jsx)(`div`,{className:F.searchResults,role:`listbox`,"aria-label":t,tabIndex:-1,onKeyDown:e=>{let t=Array.from(e.currentTarget.querySelectorAll(`[role="option"]`)),n=t.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t[(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]?.focus())},children:je.length>0?je.map(({path:e})=>(0,H.jsx)(`div`,{className:F.searchOption,...g(`cascader`,`item`),role:`option`,"aria-selected":!1,tabIndex:0,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),X(e))},onClick:()=>X(e),children:e.map(e=>e.label).join(` / `)},e.map(e=>e.value).join(`/`))):(0,H.jsx)(`div`,{className:F.empty,role:`status`,children:S(`cascader.noResults`)})}),ze=(0,H.jsx)(me,{ref:K,open:M,anchor:U,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[U],onDismiss:()=>Y(),returnFocusOnEscape:()=>G,focusable:!0,className:a(F.dropdown,ve),style:xe,onMouseDown:e=>{e.target.closest(`[role="option"]`)||e.preventDefault()},onBlur:Ne,onKeyDown:e=>{e.key===`Tab`&&Y()},...g(`cascader`,`content`,{state:`open`}),children:q?Re():(0,H.jsx)(Ee,{label:t,options:o,expandedPath:R,selectedPath:j,expandTrigger:pe,maxLevel:x,optionStyle:Se,optionRender:ye,autoFocus:P,onActivate:Me,onHoverExpand:e=>L(e.map(e=>e.value)),onExit:()=>Y(!0)},P?`keyboard`:`pointer`)});return(0,H.jsxs)(`div`,{...fe(Ce),className:a(F.cascader,he),ref:W,style:{width:be,..._},onBlur:Ne,...g(`cascader`,`root`,{state:M?`open`:`closed`,disabled:T,readonly:E,invalid:O}),children:[(0,H.jsxs)(`div`,{className:a(F.selector,{[F.disabled]:T,[F.focused]:M}),onClick:()=>{T||E||(M?y||Y():J())},...g(`cascader`,`control`),children:[(0,H.jsx)(ue.Provider,{value:null,children:(0,H.jsx)(ge,{ref:Ae,variant:`unstyled`,id:w.id,"aria-label":p??t,"aria-labelledby":we,"aria-describedby":w[`aria-describedby`],"aria-invalid":O||void 0,"aria-required":D||void 0,"aria-readonly":y&&E||void 0,required:D,name:n,value:Le,readOnly:!y||E,disabled:T,placeholder:oe??S(`cascader.placeholder`),className:F.input,onChange:e=>{y&&!E&&(B(e.target.value),M||J())},onKeyDown:Fe})}),le&&k.length>0&&!T&&!E&&(0,H.jsx)(`button`,{type:`button`,className:F.clearIcon,"aria-label":S(`cascader.clear`),...g(`cascader`,`clear-button`),onClick:e=>{e.stopPropagation(),Z()},children:(0,H.jsx)(se,{className:F.icon,"aria-hidden":!0,focusable:!1})}),(0,H.jsx)(`span`,{className:a(F.arrow,M&&F.open),"aria-hidden":`true`,...g(`cascader`,`icon`),children:(0,H.jsx)(v,{className:F.icon})})]}),ze]})}})))()}function G(){return(0,ke.jsx)(U,{name:`city`,label:`City`,options:Ae})}var ke,Ae;function K(){return(K=e((()=>{W(),ke=n(),Ae=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function q(){let[e,t]=(0,je.useState)([`fr`,`idf`,`paris`]);return(0,J.jsxs)(`div`,{children:[(0,J.jsx)(U,{name:`city-controlled`,label:`City`,options:Y,value:e,onChange:e=>t(e),width:300}),(0,J.jsxs)(`p`,{children:[`Value: `,e.length?JSON.stringify(e):`(empty)`]})]})}var je,J,Y;function X(){return(X=e((()=>{je=t(),W(),J=n(),Y=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Me(){return(0,Z.jsx)(U,{name:`region`,label:`Region (2 levels)`,options:Ne,maxLevel:2,optionRender:(e,t)=>(0,Z.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[t===0?(0,Z.jsx)(b,{}):(0,Z.jsx)(ve,{}),e.label]}),dropdownStyle:{minWidth:360},optionStyle:{fontWeight:500}})}var Z,Ne;function Pe(){return(Pe=e((()=>{W(),_e(),Z=n(),Ne=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Fe(){return(0,Ie.jsx)(U,{name:`city-default`,label:`City`,options:Le,defaultValue:[`jp`,`kansai`,`kyoto`],width:300})}var Ie,Le;function Re(){return(Re=e((()=>{W(),Ie=n(),Le=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function ze(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(U,{name:`location`,label:`Location`,options:Be}),(0,Q.jsx)(U,{name:`location-disabled`,label:`Disabled`,options:Be,defaultValue:[`a`,`a1`],disabled:!0})]})}var Q,Be;function Ve(){return(Ve=e((()=>{W(),Q=n(),Be=[{value:`a`,label:`Warehouse A`,children:[{value:`a1`,label:`Shelf 1`},{value:`a2`,label:`Shelf 2 (full)`,disabled:!0}]},{value:`b`,label:`Warehouse B (closed)`,disabled:!0}]})))()}function He(){return(0,Ue.jsx)(U,{name:`city-display`,label:`City (last level only)`,options:We,defaultValue:[`fr`,`ara`,`lyon`],displayRender:e=>e[e.length-1]??``,allowClear:!1})}var Ue,We;function Ge(){return(Ge=e((()=>{W(),Ue=n(),We=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Ke(){return(0,qe.jsx)(U,{name:`city-hover`,label:`City`,options:Je,expandTrigger:`hover`})}var qe,Je;function Ye(){return(Ye=e((()=>{W(),qe=n(),Je=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}function Xe(){let[e,t]=(0,Ze.useState)($e);return(0,Qe.jsx)(U,{name:`team`,label:`Team`,options:e,loadData:e=>{let n=e[e.length-1],r=e=>t(t=>t.map(t=>t.value===n.value?{...t,...e}:t));r({loading:!0}),setTimeout(()=>{r({loading:!1,children:[{value:`${n.value}-team-a`,label:`${n.label} team A`,isLeaf:!0},{value:`${n.value}-team-b`,label:`${n.label} team B`,isLeaf:!0}]})},800)},width:300})}var Ze,Qe,$e;function et(){return(et=e((()=>{Ze=t(),W(),Qe=n(),$e=[{value:`frontend`,label:`Frontend`},{value:`backend`,label:`Backend`},{value:`docs`,label:`Documentation`,isLeaf:!0}]})))()}function tt(){return(0,nt.jsx)(U,{name:`city-search`,label:`City`,placeholder:`Type to search`,options:rt,showSearch:!0,filter:(e,t)=>t.some(t=>String(t.label).toLowerCase().includes(e.toLowerCase())),width:300})}var nt,rt;function it(){return(it=e((()=>{W(),nt=n(),rt=[{value:`fr`,label:`France`,children:[{value:`idf`,label:`Île-de-France`,children:[{value:`paris`,label:`Paris`},{value:`versailles`,label:`Versailles`}]},{value:`ara`,label:`Auvergne-Rhône-Alpes`,children:[{value:`lyon`,label:`Lyon`},{value:`grenoble`,label:`Grenoble`}]}]},{value:`jp`,label:`Japan`,children:[{value:`kanto`,label:`Kantō`,children:[{value:`tokyo`,label:`Tokyo`},{value:`yokohama`,label:`Yokohama`}]},{value:`kansai`,label:`Kansai`,children:[{value:`osaka`,label:`Osaka`},{value:`kyoto`,label:`Kyoto`}]}]}]})))()}var at;function ot(){return(ot=e((()=>{at=`import { Cascader, type CascaderOption } from "minerva-design";

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
import { Cascader, type CascaderOption } from "minerva-design";

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
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`import { Cascader, type CascaderOption } from "minerva-design";
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
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`import { Cascader, type CascaderOption } from "minerva-design";

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
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`import { Cascader, type CascaderOption } from "minerva-design";

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
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`import { Cascader, type CascaderOption } from "minerva-design";

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
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`import { Cascader, type CascaderOption } from "minerva-design";

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
import { Cascader, type CascaderOption } from "minerva-design";

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
`})))()}var xt;function St(){return(St=e((()=>{xt=`import { Cascader, type CascaderOption } from "minerva-design";

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
`})))()}var $,Ct,wt;function Tt(){return(Tt=e((()=>{K(),X(),Pe(),Re(),Ve(),Ge(),Ye(),et(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),t(),p(),l(),ee(),d(),$=n(),Ct=u(Object.assign({"./demos/basic.tsx":G,"./demos/controlled.tsx":q,"./demos/custom-option.tsx":Me,"./demos/default-value.tsx":Fe,"./demos/disabled.tsx":ze,"./demos/display-render.tsx":He,"./demos/hover.tsx":Ke,"./demos/lazy-load.tsx":Xe,"./demos/search.tsx":tt}),Object.assign({"./demos/basic.tsx":at,"./demos/controlled.tsx":st,"./demos/custom-option.tsx":lt,"./demos/default-value.tsx":dt,"./demos/disabled.tsx":pt,"./demos/display-render.tsx":ht,"./demos/hover.tsx":_t,"./demos/lazy-load.tsx":yt,"./demos/search.tsx":xt})),wt=()=>{let{t:e}=m();return(0,$.jsx)(te,{id:`cascader`,demos:Ct,children:(0,$.jsxs)(`section`,{className:c.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.cascader.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:c.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.open`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.navigate`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.expand`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.close`)}),(0,$.jsx)(`li`,{children:e(`docs.cascader.keyboard.aria`)})]})]})})}})))()}Tt();export{wt as default};