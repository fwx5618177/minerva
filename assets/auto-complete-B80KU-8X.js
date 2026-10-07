import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-EhfBFkcC.js";import{Ot as i}from"./minerva-web-components-U-_2I7Ao.js";import{C as a,D as ee,E as te,O as o,c as ne,i as re,k as s,n as c,r as l,s as ie,t as ae,w as oe}from"./DocPage-BvqFnACE.js";import{n as se,t as u}from"./ProgressIndicator-DWpNyYe1.js";import{n as ce,t as le}from"./context-C6l3dqFj.js";import{n as ue,r as d}from"./FloatingPanel-BtClgufo.js";import{n as de,t as f}from"./Input-DiGy_IrH.js";import{n as fe,t as pe}from"./Empty-Crqeev9b.js";import{Q as p,Z as me}from"./sample-DdQB_zfN.js";import{g as he,h as ge,l as _e,n as ve,t as ye}from"./fa-C1qCddSK.js";var be,m,h,g,_,v,y,b,x,S,C,w,T,E,D,xe,Se,O,k;function A(){return(A=t((()=>{be=`_autoComplete_1e3gh_1`,m=`_label_1e3gh_6`,h=`_popup_1e3gh_13`,g=`_dropdown_1e3gh_24`,_=`_animated_1e3gh_28`,v=`_slideIn_1e3gh_1`,y=`_optionList_1e3gh_47`,b=`_optionItem_1e3gh_53`,x=`_active_1e3gh_58`,S=`_disabled_1e3gh_61`,C=`_highlight_1e3gh_65`,w=`_basicOption_1e3gh_76`,T=`_icon_1e3gh_81`,E=`_content_1e3gh_86`,D=`_description_1e3gh_93`,xe=`_groupLabel_1e3gh_99`,Se=`_loading_1e3gh_106`,O=`_empty_1e3gh_107`,k={autoComplete:be,label:m,popup:h,dropdown:g,animated:_,slideIn:v,optionList:y,optionItem:b,active:x,disabled:S,highlight:C,basicOption:w,icon:T,content:E,description:D,groupLabel:xe,loading:Se,empty:O}})))()}var j,M,Ce,we,Te,N;function P(){return(P=t((()=>{o(),u(),te(),oe(),ce(),d(),f(),fe(),A(),j=e(n(),1),i(),M=r(),Ce=Object.freeze({x:0,y:4}),we=[],Te={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},N=({ref:e,name:t,label:n,mode:r=`basic`,value:i,onChange:te,options:o=we,defaultValue:ne,onSelect:re,filterOption:c,groupBy:l,renderOption:ie,renderEmpty:ae,loading:oe=!1,inputProps:u,emptyProps:ce,placement:d=`bottom`,offset:f=Ce,animation:fe=!0,sortOption:p,onOptionClick:me,onDropdownVisibleChange:he,dropdownClassName:ge,onSubmit:_e,autoHighlight:ve=!1,fillOnSelect:ye=!0,className:be,groupMode:m=`first`})=>{let[h,g]=a({value:i,defaultValue:ne??``,onChange:te,name:`AutoComplete`}),[_,v]=a({defaultValue:!1,onChange:he,name:`AutoComplete`,prop:`open`}),[y,b]=(0,j.useState)(-1),[x,S]=(0,j.useState)(-1),[C,w]=(0,j.useState)(null),[T,E]=(0,j.useState)(null),D=ee(E,e),[xe,Se]=(0,j.useState)(null),O=d===`top`||d===`bottom`,A=(0,j.useId)(),N=`${A}-listbox`,P=(0,j.useRef)(!1),F=le({id:u?.id,disabled:u?.disabled,readOnly:u?.readOnly}),I=F.id??`${A}-input`,L=!!F.disabled||!!F.readOnly,R=_&&!L,z=()=>{L||v(!0)},B=()=>{v(!1),b(-1)},V=(0,j.useMemo)(()=>{let e=h.toLowerCase(),t=o.filter(t=>c?c(h,t):t.label.toLowerCase().includes(e));return p?[...t].sort(p):t},[o,h,c,p]),H=(0,j.useMemo)(()=>{if(!l)return null;if(m===`adjacent`){let e=[];return V.forEach(t=>{let n=l(t),r=e[e.length-1];r&&r[0]===n?r[1].push(t):e.push([n,[t]])}),e}let e=new Map;return V.forEach(t=>{let n=l(t),r=e.get(n);r?r.push(t):e.set(n,[t])}),Array.from(e.entries())},[V,l,m]),U=(0,j.useMemo)(()=>H?H.flatMap(([,e])=>e):V,[H,V]),W=y>=0?y:ve&&R?U.findIndex(e=>!e.disabled):-1,Ee=e=>{let t=U.length;if(t===0)return;let n=W>=0?W:e===1?-1:t;for(let r=0;r<t;r+=1)if(n=(n+e+t)%t,!U[n].disabled){b(n);return}},G=e=>{e.disabled||(ye&&g(e.label),B(),re?.(e))},De=e=>{if(!(L||P.current||e.nativeEvent.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:e.preventDefault(),_||z(),Ee(1);break;case`ArrowUp`:e.preventDefault(),_||z(),Ee(-1);break;case`Enter`:{let t=R?U[W]:void 0;t?(e.preventDefault(),G(t)):_e&&h.trim()&&(e.preventDefault(),_e(h.trim()),B());break}case`Escape`:!R&&h!==``&&(e.preventDefault(),g(``),b(-1))}},Oe=e=>{g(e),b(-1),z()},ke=e=>{let t=e.relatedTarget;t&&(xe?.contains(t)||C?.contains(t))||B()},K=e=>{e.disabled||P.current||(G(e),me?.(e),T?.focus())},q=R&&W>=0?`${N}-option-${W}`:void 0;(0,j.useEffect)(()=>{T&&(T.setAttribute(`role`,`combobox`),T.setAttribute(`aria-autocomplete`,`list`),T.setAttribute(`aria-expanded`,String(R)),!R&&h!==``?T.setAttribute(`data-minerva-escape-consumer`,``):T.removeAttribute(`data-minerva-escape-consumer`),R?T.setAttribute(`aria-controls`,N):T.removeAttribute(`aria-controls`),q?T.setAttribute(`aria-activedescendant`,q):T.removeAttribute(`aria-activedescendant`))},[T,R,N,q,h]);let J=(0,j.useRef)(()=>{});(0,j.useEffect)(()=>{J.current=()=>{_||z()}}),(0,j.useEffect)(()=>{if(!T)return;let e=()=>J.current();return T.addEventListener(`click`,e),()=>T.removeEventListener(`click`,e)},[T]),(0,j.useEffect)(()=>{q&&document.getElementById(q)?.scrollIntoView?.({block:`nearest`})},[q]);let Ae=e=>(0,M.jsxs)(`div`,{className:k.basicOption,children:[e.icon&&(0,M.jsx)(`span`,{className:k.icon,children:e.icon}),(0,M.jsxs)(`div`,{className:k.content,children:[(0,M.jsx)(`div`,{className:k.label,children:e.label}),e.description&&(0,M.jsx)(`div`,{className:k.description,children:e.description})]})]}),Y=(e,t)=>{let n=W===t;return(0,M.jsx)(`div`,{className:s(k.optionItem,{[k.disabled]:e.disabled,[k.highlight]:e.highlight,[k.active]:x===t||n}),style:e.style,role:`option`,tabIndex:-1,id:`${N}-option-${t}`,"aria-selected":n,"aria-disabled":e.disabled||void 0,onMouseDown:e=>e.preventDefault(),onClick:()=>K(e),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),K(e))},onMouseEnter:()=>S(t),onMouseLeave:()=>S(-1),children:r===`custom`&&ie?ie(e):Ae(e)},e.value)};return(0,M.jsxs)(`div`,{ref:w,className:s(k.autoComplete,be),onCompositionStart:()=>{P.current=!0},onCompositionEnd:()=>{P.current=!1},children:[n&&(0,M.jsx)(`label`,{htmlFor:I,className:k.label,children:n}),(0,M.jsx)(de,{...u,id:I,disabled:F.disabled,readOnly:F.readOnly,name:t,ref:D,value:h,onChange:e=>Oe(e.target.value),onFocus:e=>{z(),u?.onFocus?.(e)},onBlur:e=>{ke(e),u?.onBlur?.(e)},onKeyDown:e=>{De(e),u?.onKeyDown?.(e)}}),(0,M.jsx)(ue,{ref:Se,open:R,anchor:C,placement:Te[d],offset:{mainAxis:O?f.y:f.x,crossAxis:O?f.x:f.y},matchAnchorWidth:`min`,branches:()=>[C],onEscapeKeyDown:e=>{(P.current||e.isComposing)&&e.preventDefault()},onDismiss:B,returnFocusOnEscape:()=>T,className:s(k.popup,ge),children:(0,M.jsx)(`div`,{className:s(k.dropdown,fe&&k.animated),children:(0,M.jsx)(`div`,{className:k.optionList,role:`listbox`,id:N,"aria-label":n,"aria-busy":oe||void 0,children:oe?(0,M.jsx)(`div`,{role:`presentation`,className:k.loading,children:(0,M.jsx)(se,{})}):V.length>0?(0,M.jsx)(M.Fragment,{children:H?H.map(([e,t],n)=>e===``?(0,M.jsx)(j.Fragment,{children:t.map(e=>Y(e,U.indexOf(e)))},`${n}-`):(0,M.jsxs)(`div`,{className:k.optionGroup,role:`group`,"aria-label":e,children:[(0,M.jsx)(`div`,{className:k.groupLabel,"aria-hidden":`true`,children:e}),t.map(e=>Y(e,U.indexOf(e)))]},`${n}-${e}`)):V.map((e,t)=>Y(e,t))}):(0,M.jsx)(`div`,{role:`presentation`,className:k.empty,children:ae?.()||(0,M.jsx)(pe,{...ce})})})})})]})}})))()}function F(){return(0,I.jsxs)(`div`,{style:{width:280,marginTop:180},children:[(0,I.jsx)(`style`,{children:R}),(0,I.jsx)(N,{name:`priority`,label:`Priority (opens above)`,options:L,placement:`top`,offset:{x:0,y:8},animation:!1,dropdownClassName:`priority-dropdown`})]})}var I,L,R;function z(){return(z=t((()=>{P(),I=r(),L=[{label:`Low`,value:`low`},{label:`Medium`,value:`medium`,highlight:!0},{label:`High`,value:`high`},{label:`Critical`,value:`critical`}],R=`
.priority-dropdown {
  --auto-complete-dropdown-background: #f8fafc;
  --auto-complete-option-highlight-background: #fef3c7;
  --auto-complete-option-hover-background: #e0f2fe;
}
`})))()}function B(){let[e,t]=(0,V.useState)(``),[n,r]=(0,V.useState)(!0),[i,a]=(0,V.useState)([]);return(0,V.useEffect)(()=>{let t=setTimeout(()=>{a(U.filter(t=>t.toLowerCase().includes(e.toLowerCase())).map(e=>({label:e,value:e}))),r(!1)},600);return()=>clearTimeout(t)},[e]),(0,H.jsx)(`div`,{style:{width:280},children:(0,H.jsx)(N,{name:`mission`,label:`Space mission`,options:i,value:e,onChange:e=>{t(e),r(!0)},loading:n})})}var V,H,U;function W(){return(W=t((()=>{V=n(),P(),H=r(),U=[`Apollo`,`Artemis`,`Gemini`,`Mercury`,`Skylab`,`Voyager`]})))()}function Ee(){return(0,G.jsx)(`div`,{style:{width:280},children:(0,G.jsx)(N,{name:`framework`,label:`Framework`,options:De,inputProps:{placeholder:`Type to search…`}})})}var G,De;function Oe(){return(Oe=t((()=>{P(),G=r(),De=[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}]})))()}function ke(){let[e,t]=(0,K.useState)(``),[n,r]=(0,K.useState)(),[i,a]=(0,K.useState)(!1);return(0,q.jsxs)(`div`,{style:{width:280},children:[(0,q.jsx)(N,{name:`city`,label:`City`,options:J,value:e,onChange:t,onSelect:r,onDropdownVisibleChange:a}),(0,q.jsxs)(`p`,{children:[`Input: “`,e,`”`]}),(0,q.jsxs)(`p`,{children:[`Selected value: `,n?n.value:`none`]}),(0,q.jsxs)(`p`,{children:[`Dropdown: `,i?`open`:`closed`]})]})}var K,q,J;function Ae(){return(Ae=t((()=>{K=n(),P(),q=r(),J=[{label:`Paris`,value:`par`},{label:`London`,value:`lon`},{label:`Tokyo`,value:`tyo`},{label:`New York`,value:`nyc`}]})))()}function Y(){return(0,X.jsx)(`div`,{style:{width:320},children:(0,X.jsx)(N,{name:`assignee`,label:`Assignee`,mode:`custom`,options:je,renderOption:e=>(0,X.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12},children:[(0,X.jsx)(`strong`,{children:e.label}),(0,X.jsx)(`span`,{style:{opacity:.7},children:e.description})]}),renderEmpty:()=>(0,X.jsx)(`div`,{style:{padding:12},children:`No user found`})})})}var X,je;function Me(){return(Me=t((()=>{P(),X=r(),je=[{label:`Ada Lovelace`,value:`ada`,description:`ada@example.com`},{label:`Alan Turing`,value:`alan`,description:`alan@example.com`},{label:`Grace Hopper`,value:`grace`,description:`grace@example.com`}]})))()}function Ne(){return(0,Pe.jsx)(`div`,{style:{width:280},children:(0,Pe.jsx)(N,{name:`country`,label:`Country (starts with)`,options:Fe,filterOption:(e,t)=>t.label.toLowerCase().startsWith(e.toLowerCase()),sortOption:(e,t)=>e.label.localeCompare(t.label)})})}var Pe,Fe;function Ie(){return(Ie=t((()=>{P(),Pe=r(),Fe=[{label:`Germany`,value:`de`},{label:`Denmark`,value:`dk`},{label:`France`,value:`fr`},{label:`Finland`,value:`fi`},{label:`Greece`,value:`gr`}]})))()}function Le(){return(0,Re.jsx)(`div`,{style:{width:280},children:(0,Re.jsx)(N,{name:`food`,label:`Food`,options:ze,groupBy:e=>e.group??`Other`})})}var Re,ze;function Be(){return(Be=t((()=>{P(),Re=r(),ze=[{label:`Apple`,value:`apple`,group:`Fruits`},{label:`Banana`,value:`banana`,group:`Fruits`},{label:`Carrot`,value:`carrot`,group:`Vegetables`},{label:`Broccoli`,value:`broccoli`,group:`Vegetables`},{label:`Almond`,value:`almond`,group:`Nuts`}]})))()}function Ve(){return(0,Z.jsx)(`div`,{style:{width:320},children:(0,Z.jsx)(N,{name:`platform`,label:`Platform`,options:He})})}var Z,He;function Ue(){return(Ue=t((()=>{P(),he(),Z=r(),He=[{label:`macOS`,value:`macos`,icon:(0,Z.jsx)(ve,{}),description:`Recommended for this device`,highlight:!0},{label:`Windows`,value:`windows`,icon:(0,Z.jsx)(ge,{}),description:`Windows 10 and later`},{label:`Linux`,value:`linux`,icon:(0,Z.jsx)(_e,{}),description:`deb and rpm packages`},{label:`Android`,value:`android`,icon:(0,Z.jsx)(ye,{}),description:`Coming soon`,disabled:!0}]})))()}function We(){let[e,t]=(0,Ge.useState)(``),[n,r]=(0,Ge.useState)(``);return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,Q.jsx)(N,{options:Ke,value:e,onChange:t,autoHighlight:!0,fillOnSelect:!1,onSelect:e=>r(`Open book #${e.value}`),onSubmit:e=>r(`Search for "${e}"`),inputProps:{"aria-label":`Search books`,placeholder:`Title or author`,clearable:!0}}),(0,Q.jsx)(`span`,{children:n})]})}var Ge,Q,Ke;function qe(){return(qe=t((()=>{Ge=n(),P(),Q=r(),Ke=[{value:`1`,label:`Lord of the Mysteries`,description:`Cuttlefish`},{value:`2`,label:`Sword of Coming`,description:`Fenghuo`},{value:`3`,label:`A Record of a Mortal`,description:`Wangyu`}]})))()}var Je;function Ye(){return(Ye=t((()=>{Je=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var Xe;function Ze(){return(Ze=t((()=>{Xe=`import { useEffect, useState } from "react";
import { AutoComplete, type AutoCompleteOption } from "@minerva/lib-core";

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
`})))()}var Qe;function $e(){return($e=t((()=>{Qe=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var et;function tt(){return(tt=t((()=>{et=`import { useState } from "react";
import { AutoComplete, type AutoCompleteOption } from "@minerva/lib-core";

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
`})))()}var nt;function rt(){return(rt=t((()=>{nt=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var it;function at(){return(at=t((()=>{it=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var ot;function st(){return(st=t((()=>{ot=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var ct;function lt(){return(lt=t((()=>{ct=`import { AutoComplete } from "@minerva/lib-core";
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
`})))()}var ut;function dt(){return(dt=t((()=>{ut=`import { useState } from "react";
import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var $,ft,pt;function mt(){return(mt=t((()=>{z(),W(),Oe(),Ae(),Me(),Ie(),Be(),Ue(),qe(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),n(),me(),c(),ne(),re(),$=r(),ft=ie(Object.assign({"./demos/appearance.tsx":F,"./demos/async-loading.tsx":B,"./demos/basic.tsx":Ee,"./demos/controlled.tsx":ke,"./demos/custom-render.tsx":Y,"./demos/filter-sort.tsx":Ne,"./demos/grouped.tsx":Le,"./demos/rich-options.tsx":Ve,"./demos/search-box.tsx":We}),Object.assign({"./demos/appearance.tsx":Je,"./demos/async-loading.tsx":Xe,"./demos/basic.tsx":Qe,"./demos/controlled.tsx":et,"./demos/custom-render.tsx":nt,"./demos/filter-sort.tsx":it,"./demos/grouped.tsx":ot,"./demos/rich-options.tsx":ct,"./demos/search-box.tsx":ut})),pt=()=>{let{t:e}=p();return(0,$.jsx)(ae,{id:`auto-complete`,demos:ft,children:(0,$.jsxs)(`section`,{className:l.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.auto-complete.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:l.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.arrows`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.enter`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.escape`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.aria`)})]})]})})}})))()}mt();export{pt as default};