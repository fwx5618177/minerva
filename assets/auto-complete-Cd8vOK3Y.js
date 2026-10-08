import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-DuLeTlZP.js";import{Ot as i,T as a,en as o}from"./minerva-web-components-gmidRbuG.js";import{l as s,m as ee,n as te,p as c,t as l,u as ne}from"./DocPage-OkRujup2.js";import{Q as re,Z as ie,et as u,nt as d,rt as ae,tt as oe}from"./io5-CFVaALQJ.js";import{t as f}from"./stylingHooks-GjssfG7q.js";import{n as p,t as se}from"./ProgressIndicator-DeBT-lC1.js";import{n as m,t as ce}from"./context-B9-pxdjQ.js";import{n as le,r as ue}from"./FloatingPanel-wV0cRmAd.js";import{n as de,t as h}from"./Input-CyLQYvbp.js";import{n as fe,t as pe}from"./Empty-BR7HIZtS.js";import{g as me,h as he,l as g,n as ge,t as _e}from"./fa-DL8pNYDb.js";var ve,_,v,y,b,x,S,C,w,T,E,ye,D,be,xe,Se,Ce,O,k;function A(){return(A=t((()=>{ve=`_autoComplete_1e3gh_1`,_=`_label_1e3gh_6`,v=`_popup_1e3gh_13`,y=`_dropdown_1e3gh_24`,b=`_animated_1e3gh_28`,x=`_slideIn_1e3gh_1`,S=`_optionList_1e3gh_47`,C=`_optionItem_1e3gh_53`,w=`_active_1e3gh_58`,T=`_disabled_1e3gh_61`,E=`_highlight_1e3gh_65`,ye=`_basicOption_1e3gh_76`,D=`_icon_1e3gh_81`,be=`_content_1e3gh_86`,xe=`_description_1e3gh_93`,Se=`_groupLabel_1e3gh_99`,Ce=`_loading_1e3gh_106`,O=`_empty_1e3gh_107`,k={autoComplete:ve,label:_,popup:v,dropdown:y,animated:b,slideIn:x,optionList:S,optionItem:C,active:w,disabled:T,highlight:E,basicOption:ye,icon:D,content:be,description:xe,groupLabel:Se,loading:Ce,empty:O}})))()}var j,M,we,Te,Ee,N;function P(){return(P=t((()=>{i(),p(),u(),re(),m(),ue(),h(),fe(),A(),j=e(n(),1),M=r(),a(),we=Object.freeze({x:0,y:4}),Te=[],Ee={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},N=({ref:e,name:t,label:n,mode:r=`basic`,value:i,onChange:a,options:s=Te,defaultValue:ee,onSelect:te,filterOption:c,groupBy:l,renderOption:ne,renderEmpty:re,loading:u=!1,inputProps:d,emptyProps:ae,placement:p=`bottom`,offset:m=we,animation:ue=!0,sortOption:h,onOptionClick:fe,onDropdownVisibleChange:me,dropdownClassName:he,onSubmit:g,autoHighlight:ge=!1,fillOnSelect:_e=!0,className:ve,groupMode:_=`first`})=>{let[v,y]=ie({value:i,defaultValue:ee??``,onChange:a,name:`AutoComplete`}),[b,x]=ie({defaultValue:!1,onChange:me,name:`AutoComplete`,prop:`open`}),[S,C]=(0,j.useState)(-1),[w,T]=(0,j.useState)(-1),[E,ye]=(0,j.useState)(null),[D,be]=(0,j.useState)(null),xe=oe(be,e),[Se,Ce]=(0,j.useState)(null),O=p===`top`||p===`bottom`,A=(0,j.useId)(),N=`${A}-listbox`,P=(0,j.useRef)(!1),F=ce({id:d?.id,disabled:d?.disabled,readOnly:d?.readOnly}),I=F.id??`${A}-input`,L=!!F.disabled||!!F.readOnly,R=b&&!L,z=()=>{L||x(!0)},B=()=>{x(!1),C(-1)},V=(0,j.useMemo)(()=>{let e=v.toLowerCase(),t=s.filter(t=>c?c(v,t):t.label.toLowerCase().includes(e));return h?[...t].sort(h):t},[s,v,c,h]),H=(0,j.useMemo)(()=>{if(!l)return null;if(_===`adjacent`){let e=[];return V.forEach(t=>{let n=l(t),r=e[e.length-1];r&&r[0]===n?r[1].push(t):e.push([n,[t]])}),e}let e=new Map;return V.forEach(t=>{let n=l(t),r=e.get(n);r?r.push(t):e.set(n,[t])}),Array.from(e.entries())},[V,l,_]),U=(0,j.useMemo)(()=>H?H.flatMap(([,e])=>e):V,[H,V]),W=S>=0?S:ge&&R?U.findIndex(e=>!e.disabled):-1,De=e=>{let t=U.length;if(t===0)return;let n=W>=0?W:e===1?-1:t;for(let r=0;r<t;r+=1)if(n=(n+e+t)%t,!U[n].disabled){C(n);return}},G=e=>{e.disabled||(_e&&y(e.label),B(),te?.(e))},Oe=e=>{if(!(L||P.current||e.nativeEvent.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:e.preventDefault(),b||z(),De(1);break;case`ArrowUp`:e.preventDefault(),b||z(),De(-1);break;case`Enter`:{let t=R?U[W]:void 0;t?(e.preventDefault(),G(t)):g&&v.trim()&&(e.preventDefault(),g(v.trim()),B());break}case`Escape`:!R&&v!==``&&(e.preventDefault(),y(``),C(-1))}},ke=e=>{y(e),C(-1),z()},Ae=e=>{let t=e.relatedTarget;t&&(Se?.contains(t)||E?.contains(t))||B()},K=e=>{e.disabled||P.current||(G(e),fe?.(e),D?.focus())},q=R&&W>=0?`${N}-option-${W}`:void 0;(0,j.useEffect)(()=>{D&&(D.setAttribute(`role`,`combobox`),D.setAttribute(`aria-autocomplete`,`list`),D.setAttribute(`aria-expanded`,String(R)),!R&&v!==``?D.setAttribute(`data-minerva-escape-consumer`,``):D.removeAttribute(`data-minerva-escape-consumer`),R?D.setAttribute(`aria-controls`,N):D.removeAttribute(`aria-controls`),q?D.setAttribute(`aria-activedescendant`,q):D.removeAttribute(`aria-activedescendant`))},[D,R,N,q,v]);let J=(0,j.useRef)(()=>{});(0,j.useEffect)(()=>{J.current=()=>{b||z()}}),(0,j.useEffect)(()=>{if(!D)return;let e=()=>J.current();return D.addEventListener(`click`,e),()=>D.removeEventListener(`click`,e)},[D]),(0,j.useEffect)(()=>{q&&document.getElementById(q)?.scrollIntoView?.({block:`nearest`})},[q]);let je=e=>(0,M.jsxs)(`div`,{className:k.basicOption,children:[e.icon&&(0,M.jsx)(`span`,{className:k.icon,children:e.icon}),(0,M.jsxs)(`div`,{className:k.content,children:[(0,M.jsx)(`div`,{className:k.label,children:e.label}),e.description&&(0,M.jsx)(`div`,{className:k.description,children:e.description})]})]}),Y=(e,t)=>{let n=W===t,i=w===t||n;return(0,M.jsx)(`div`,{className:o(k.optionItem,{[k.disabled]:e.disabled,[k.highlight]:e.highlight,[k.active]:i}),style:e.style,role:`option`,tabIndex:-1,id:`${N}-option-${t}`,"aria-selected":n,"aria-disabled":e.disabled||void 0,onMouseDown:e=>e.preventDefault(),onClick:()=>K(e),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),K(e))},onMouseEnter:()=>T(t),onMouseLeave:()=>T(-1),...f(`autocomplete`,`item`,{highlighted:i,disabled:e.disabled}),children:r===`custom`&&ne?ne(e):je(e)},e.value)};return(0,M.jsxs)(`div`,{ref:ye,className:o(k.autoComplete,ve),onCompositionStart:()=>{P.current=!0},onCompositionEnd:()=>{P.current=!1},...f(`autocomplete`,`root`,{state:R?`open`:`closed`,disabled:!!F.disabled,readonly:!!F.readOnly,loading:u}),children:[n&&(0,M.jsx)(`label`,{htmlFor:I,className:k.label,...f(`autocomplete`,`label`),children:n}),(0,M.jsx)(de,{...d,id:I,disabled:F.disabled,readOnly:F.readOnly,name:t,ref:xe,value:v,onChange:e=>ke(e.target.value),onFocus:e=>{z(),d?.onFocus?.(e)},onBlur:e=>{Ae(e),d?.onBlur?.(e)},onKeyDown:e=>{Oe(e),d?.onKeyDown?.(e)}}),(0,M.jsx)(le,{ref:Ce,open:R,anchor:E,placement:Ee[p],offset:{mainAxis:O?m.y:m.x,crossAxis:O?m.x:m.y},matchAnchorWidth:`min`,branches:()=>[E],onEscapeKeyDown:e=>{(P.current||e.isComposing)&&e.preventDefault()},onDismiss:B,returnFocusOnEscape:()=>D,className:o(k.popup,he),...f(`autocomplete`,`content`,{state:`open`}),children:(0,M.jsx)(`div`,{className:o(k.dropdown,ue&&k.animated),children:(0,M.jsx)(`div`,{className:k.optionList,role:`listbox`,id:N,"aria-label":n,"aria-busy":u||void 0,...f(`autocomplete`,`list`),children:u?(0,M.jsx)(`div`,{role:`presentation`,className:k.loading,...f(`autocomplete`,`loading`),children:(0,M.jsx)(se,{})}):V.length>0?(0,M.jsx)(M.Fragment,{children:H?H.map(([e,t],n)=>e===``?(0,M.jsx)(j.Fragment,{children:t.map(e=>Y(e,U.indexOf(e)))},`${n}-`):(0,M.jsxs)(`div`,{className:k.optionGroup,role:`group`,"aria-label":e,children:[(0,M.jsx)(`div`,{className:k.groupLabel,"aria-hidden":`true`,...f(`autocomplete`,`group-label`),children:e}),t.map(e=>Y(e,U.indexOf(e)))]},`${n}-${e}`)):V.map((e,t)=>Y(e,t))}):(0,M.jsx)(`div`,{role:`presentation`,className:k.empty,...f(`autocomplete`,`empty`),children:re?.()||(0,M.jsx)(pe,{...ae})})})})})]})}})))()}function F(){return(0,I.jsxs)(`div`,{style:{width:280,marginTop:180},children:[(0,I.jsx)(`style`,{children:R}),(0,I.jsx)(N,{name:`priority`,label:`Priority (opens above)`,options:L,placement:`top`,offset:{x:0,y:8},animation:!1,dropdownClassName:`priority-dropdown`})]})}var I,L,R;function z(){return(z=t((()=>{P(),I=r(),L=[{label:`Low`,value:`low`},{label:`Medium`,value:`medium`,highlight:!0},{label:`High`,value:`high`},{label:`Critical`,value:`critical`}],R=`
.priority-dropdown {
  --auto-complete-dropdown-background: #f8fafc;
  --auto-complete-option-highlight-background: #fef3c7;
  --auto-complete-option-hover-background: #e0f2fe;
}
`})))()}function B(){let[e,t]=(0,V.useState)(``),[n,r]=(0,V.useState)(!0),[i,a]=(0,V.useState)([]);return(0,V.useEffect)(()=>{let t=setTimeout(()=>{a(U.filter(t=>t.toLowerCase().includes(e.toLowerCase())).map(e=>({label:e,value:e}))),r(!1)},600);return()=>clearTimeout(t)},[e]),(0,H.jsx)(`div`,{style:{width:280},children:(0,H.jsx)(N,{name:`mission`,label:`Space mission`,options:i,value:e,onChange:e=>{t(e),r(!0)},loading:n})})}var V,H,U;function W(){return(W=t((()=>{V=n(),P(),H=r(),U=[`Apollo`,`Artemis`,`Gemini`,`Mercury`,`Skylab`,`Voyager`]})))()}function De(){return(0,G.jsx)(`div`,{style:{width:280},children:(0,G.jsx)(N,{name:`framework`,label:`Framework`,options:Oe,inputProps:{placeholder:`Type to search…`}})})}var G,Oe;function ke(){return(ke=t((()=>{P(),G=r(),Oe=[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}]})))()}function Ae(){let[e,t]=(0,K.useState)(``),[n,r]=(0,K.useState)(),[i,a]=(0,K.useState)(!1);return(0,q.jsxs)(`div`,{style:{width:280},children:[(0,q.jsx)(N,{name:`city`,label:`City`,options:J,value:e,onChange:t,onSelect:r,onDropdownVisibleChange:a}),(0,q.jsxs)(`p`,{children:[`Input: “`,e,`”`]}),(0,q.jsxs)(`p`,{children:[`Selected value: `,n?n.value:`none`]}),(0,q.jsxs)(`p`,{children:[`Dropdown: `,i?`open`:`closed`]})]})}var K,q,J;function je(){return(je=t((()=>{K=n(),P(),q=r(),J=[{label:`Paris`,value:`par`},{label:`London`,value:`lon`},{label:`Tokyo`,value:`tyo`},{label:`New York`,value:`nyc`}]})))()}function Y(){return(0,X.jsx)(`div`,{style:{width:320},children:(0,X.jsx)(N,{name:`assignee`,label:`Assignee`,mode:`custom`,options:Me,renderOption:e=>(0,X.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12},children:[(0,X.jsx)(`strong`,{children:e.label}),(0,X.jsx)(`span`,{style:{opacity:.7},children:e.description})]}),renderEmpty:()=>(0,X.jsx)(`div`,{style:{padding:12},children:`No user found`})})})}var X,Me;function Ne(){return(Ne=t((()=>{P(),X=r(),Me=[{label:`Ada Lovelace`,value:`ada`,description:`ada@example.com`},{label:`Alan Turing`,value:`alan`,description:`alan@example.com`},{label:`Grace Hopper`,value:`grace`,description:`grace@example.com`}]})))()}function Pe(){return(0,Fe.jsx)(`div`,{style:{width:280},children:(0,Fe.jsx)(N,{name:`country`,label:`Country (starts with)`,options:Ie,filterOption:(e,t)=>t.label.toLowerCase().startsWith(e.toLowerCase()),sortOption:(e,t)=>e.label.localeCompare(t.label)})})}var Fe,Ie;function Le(){return(Le=t((()=>{P(),Fe=r(),Ie=[{label:`Germany`,value:`de`},{label:`Denmark`,value:`dk`},{label:`France`,value:`fr`},{label:`Finland`,value:`fi`},{label:`Greece`,value:`gr`}]})))()}function Re(){return(0,ze.jsx)(`div`,{style:{width:280},children:(0,ze.jsx)(N,{name:`food`,label:`Food`,options:Be,groupBy:e=>e.group??`Other`})})}var ze,Be;function Ve(){return(Ve=t((()=>{P(),ze=r(),Be=[{label:`Apple`,value:`apple`,group:`Fruits`},{label:`Banana`,value:`banana`,group:`Fruits`},{label:`Carrot`,value:`carrot`,group:`Vegetables`},{label:`Broccoli`,value:`broccoli`,group:`Vegetables`},{label:`Almond`,value:`almond`,group:`Nuts`}]})))()}function He(){return(0,Z.jsx)(`div`,{style:{width:320},children:(0,Z.jsx)(N,{name:`platform`,label:`Platform`,options:Ue})})}var Z,Ue;function We(){return(We=t((()=>{P(),me(),Z=r(),Ue=[{label:`macOS`,value:`macos`,icon:(0,Z.jsx)(ge,{}),description:`Recommended for this device`,highlight:!0},{label:`Windows`,value:`windows`,icon:(0,Z.jsx)(he,{}),description:`Windows 10 and later`},{label:`Linux`,value:`linux`,icon:(0,Z.jsx)(g,{}),description:`deb and rpm packages`},{label:`Android`,value:`android`,icon:(0,Z.jsx)(_e,{}),description:`Coming soon`,disabled:!0}]})))()}function Ge(){let[e,t]=(0,Ke.useState)(``),[n,r]=(0,Ke.useState)(``);return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,Q.jsx)(N,{options:qe,value:e,onChange:t,autoHighlight:!0,fillOnSelect:!1,onSelect:e=>r(`Open book #${e.value}`),onSubmit:e=>r(`Search for "${e}"`),inputProps:{"aria-label":`Search books`,placeholder:`Title or author`,clearable:!0}}),(0,Q.jsx)(`span`,{children:n})]})}var Ke,Q,qe;function Je(){return(Je=t((()=>{Ke=n(),P(),Q=r(),qe=[{value:`1`,label:`Lord of the Mysteries`,description:`Cuttlefish`},{value:`2`,label:`Sword of Coming`,description:`Fenghuo`},{value:`3`,label:`A Record of a Mortal`,description:`Wangyu`}]})))()}var Ye;function Xe(){return(Xe=t((()=>{Ye=`import { AutoComplete } from "minerva-design";

const options = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium", highlight: true },
  { label: "High", value: "high" },
  { label: "Critical", value: "critical" },
];

// The dropdown is portalled to <body>: set the custom properties on the
// dropdown itself through dropdownClassName.
const css = \`
.priority-dropdown {
  --auto-complete-dropdown-background: #f8fafc;
  --auto-complete-option-highlight-background: #fef3c7;
  --auto-complete-option-hover-background: #e0f2fe;
}
\`;

export default function AppearanceDemo() {
  return (
    <div style={{ width: 280, marginTop: 180 }}>
      <style>{css}</style>
      <AutoComplete
        name="priority"
        label="Priority (opens above)"
        options={options}
        placement="top"
        offset={{ x: 0, y: 8 }}
        animation={false}
        dropdownClassName="priority-dropdown"
      />
    </div>
  );
}
`})))()}var Ze;function Qe(){return(Qe=t((()=>{Ze=`import { useEffect, useState } from "react";
import { AutoComplete, type AutoCompleteOption } from "minerva-design";

const all = ["Apollo", "Artemis", "Gemini", "Mercury", "Skylab", "Voyager"];

export default function AsyncLoadingDemo() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);

  const search = (next: string) => {
    setQuery(next);
    setLoading(true);
  };

  useEffect(() => {
    // Simulate a request to a search API
    const timer = setTimeout(() => {
      setOptions(
        all
          .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
          .map((name) => ({ label: name, value: name })),
      );
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ width: 280 }}>
      <AutoComplete
        name="mission"
        label="Space mission"
        options={options}
        value={query}
        onChange={search}
        loading={loading}
      />
    </div>
  );
}
`})))()}var $e;function et(){return(et=t((()=>{$e=`import { AutoComplete } from "minerva-design";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

export default function BasicDemo() {
  return (
    <div style={{ width: 280 }}>
      <AutoComplete
        name="framework"
        label="Framework"
        options={options}
        inputProps={{ placeholder: "Type to search…" }}
      />
    </div>
  );
}
`})))()}var tt;function nt(){return(nt=t((()=>{tt=`import { useState } from "react";
import { AutoComplete, type AutoCompleteOption } from "minerva-design";

const options = [
  { label: "Paris", value: "par" },
  { label: "London", value: "lon" },
  { label: "Tokyo", value: "tyo" },
  { label: "New York", value: "nyc" },
];

export default function ControlledDemo() {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState<AutoCompleteOption>();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: 280 }}>
      <AutoComplete
        name="city"
        label="City"
        options={options}
        value={text}
        onChange={setText}
        onSelect={setSelected}
        onDropdownVisibleChange={setOpen}
      />
      <p>Input: “{text}”</p>
      <p>Selected value: {selected ? selected.value : "none"}</p>
      <p>Dropdown: {open ? "open" : "closed"}</p>
    </div>
  );
}
`})))()}var rt;function it(){return(it=t((()=>{rt=`import { AutoComplete } from "minerva-design";

const users = [
  { label: "Ada Lovelace", value: "ada", description: "ada@example.com" },
  { label: "Alan Turing", value: "alan", description: "alan@example.com" },
  { label: "Grace Hopper", value: "grace", description: "grace@example.com" },
];

export default function CustomRenderDemo() {
  return (
    <div style={{ width: 320 }}>
      <AutoComplete
        name="assignee"
        label="Assignee"
        mode="custom"
        options={users}
        renderOption={(option) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <strong>{option.label}</strong>
            <span style={{ opacity: 0.7 }}>{option.description}</span>
          </div>
        )}
        renderEmpty={() => <div style={{ padding: 12 }}>No user found</div>}
      />
    </div>
  );
}
`})))()}var at;function ot(){return(ot=t((()=>{at=`import { AutoComplete } from "minerva-design";

const options = [
  { label: "Germany", value: "de" },
  { label: "Denmark", value: "dk" },
  { label: "France", value: "fr" },
  { label: "Finland", value: "fi" },
  { label: "Greece", value: "gr" },
];

export default function FilterSortDemo() {
  return (
    <div style={{ width: 280 }}>
      <AutoComplete
        name="country"
        label="Country (starts with)"
        options={options}
        filterOption={(input, option) =>
          option.label.toLowerCase().startsWith(input.toLowerCase())
        }
        sortOption={(a, b) => a.label.localeCompare(b.label)}
      />
    </div>
  );
}
`})))()}var st;function ct(){return(ct=t((()=>{st=`import { AutoComplete } from "minerva-design";

const options = [
  { label: "Apple", value: "apple", group: "Fruits" },
  { label: "Banana", value: "banana", group: "Fruits" },
  { label: "Carrot", value: "carrot", group: "Vegetables" },
  { label: "Broccoli", value: "broccoli", group: "Vegetables" },
  { label: "Almond", value: "almond", group: "Nuts" },
];

export default function GroupedDemo() {
  return (
    <div style={{ width: 280 }}>
      <AutoComplete
        name="food"
        label="Food"
        options={options}
        groupBy={(option) => option.group ?? "Other"}
      />
    </div>
  );
}
`})))()}var lt;function ut(){return(ut=t((()=>{lt=`import { AutoComplete } from "minerva-design";
import { FaApple, FaAndroid, FaLinux, FaWindows } from "react-icons/fa";

const options = [
  {
    label: "macOS",
    value: "macos",
    icon: <FaApple />,
    description: "Recommended for this device",
    highlight: true,
  },
  {
    label: "Windows",
    value: "windows",
    icon: <FaWindows />,
    description: "Windows 10 and later",
  },
  {
    label: "Linux",
    value: "linux",
    icon: <FaLinux />,
    description: "deb and rpm packages",
  },
  {
    label: "Android",
    value: "android",
    icon: <FaAndroid />,
    description: "Coming soon",
    disabled: true,
  },
];

export default function RichOptionsDemo() {
  return (
    <div style={{ width: 320 }}>
      <AutoComplete name="platform" label="Platform" options={options} />
    </div>
  );
}
`})))()}var dt;function ft(){return(ft=t((()=>{dt=`import { useState } from "react";
import { AutoComplete } from "minerva-design";

const books = [
  { value: "1", label: "Lord of the Mysteries", description: "Cuttlefish" },
  { value: "2", label: "Sword of Coming", description: "Fenghuo" },
  { value: "3", label: "A Record of a Mortal", description: "Wangyu" },
];

export default function SearchBoxDemo() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <AutoComplete
        options={books}
        value={query}
        onChange={setQuery}
        autoHighlight
        fillOnSelect={false}
        onSelect={(book) => setResult(\`Open book #\${book.value}\`)}
        onSubmit={(text) => setResult(\`Search for "\${text}"\`)}
        inputProps={{
          "aria-label": "Search books",
          placeholder: "Title or author",
          clearable: true,
        }}
      />
      <span>{result}</span>
    </div>
  );
}
`})))()}var $,pt,mt;function ht(){return(ht=t((()=>{z(),W(),ke(),je(),Ne(),Le(),Ve(),We(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),n(),d(),te(),ee(),ne(),$=r(),pt=c(Object.assign({"./demos/appearance.tsx":F,"./demos/async-loading.tsx":B,"./demos/basic.tsx":De,"./demos/controlled.tsx":Ae,"./demos/custom-render.tsx":Y,"./demos/filter-sort.tsx":Pe,"./demos/grouped.tsx":Re,"./demos/rich-options.tsx":He,"./demos/search-box.tsx":Ge}),Object.assign({"./demos/appearance.tsx":Ye,"./demos/async-loading.tsx":Ze,"./demos/basic.tsx":$e,"./demos/controlled.tsx":tt,"./demos/custom-render.tsx":rt,"./demos/filter-sort.tsx":at,"./demos/grouped.tsx":st,"./demos/rich-options.tsx":lt,"./demos/search-box.tsx":dt})),mt=()=>{let{t:e}=ae();return(0,$.jsx)(l,{id:`auto-complete`,demos:pt,children:(0,$.jsxs)(`section`,{className:s.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.auto-complete.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:s.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.arrows`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.enter`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.escape`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.aria`)})]})]})})}})))()}ht();export{mt as default};