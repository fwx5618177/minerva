import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-aZSMfLKR.js";import{X as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{Q as ee,Z as te,et as o,nt as ne,rt as re,tt as ie}from"./io5-CkIs6v-8.js";import{t as s}from"./stylingHooks-GjssfG7q.js";import{n as c,t as ae}from"./ProgressIndicator-CLa7Qw7I.js";import{n as l,t as oe}from"./context-CofDH3-d.js";import{n as se,r as ce}from"./FloatingPanel-CxnqitC0.js";import{n as le,t as ue}from"./Input-f1MrbxB_.js";import{n as u,t as de}from"./Empty-C2dFryN3.js";import{l as d,m as fe,n as f,p,t as pe,u as m}from"./DocPage-BUvZl8IZ.js";import{g as me,h as he,l as ge,n as _e,t as ve}from"./fa-BBvq-Bfl.js";var ye,be,h,g,_,v,y,b,x,xe,S,C,w,T,E,Se,Ce,we,D;function O(){return(O=t((()=>{ye=`_autoComplete_1e3gh_1`,be=`_label_1e3gh_6`,h=`_popup_1e3gh_13`,g=`_dropdown_1e3gh_24`,_=`_animated_1e3gh_28`,v=`_slideIn_1e3gh_1`,y=`_optionList_1e3gh_47`,b=`_optionItem_1e3gh_53`,x=`_active_1e3gh_58`,xe=`_disabled_1e3gh_61`,S=`_highlight_1e3gh_65`,C=`_basicOption_1e3gh_76`,w=`_icon_1e3gh_81`,T=`_content_1e3gh_86`,E=`_description_1e3gh_93`,Se=`_groupLabel_1e3gh_99`,Ce=`_loading_1e3gh_106`,we=`_empty_1e3gh_107`,D={autoComplete:ye,label:be,popup:h,dropdown:g,animated:_,slideIn:v,optionList:y,optionItem:b,active:x,disabled:xe,highlight:S,basicOption:C,icon:w,content:T,description:E,groupLabel:Se,loading:Ce,empty:we}})))()}var k,A,Te,Ee,De,j;function M(){return(M=t((()=>{a(),c(),o(),ee(),l(),ce(),ue(),u(),O(),k=e(n(),1),A=r(),Te=Object.freeze({x:0,y:4}),Ee=[],De={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},j=({ref:e,name:t,label:n,mode:r=`basic`,value:a,onChange:ee,options:o=Ee,defaultValue:ne,onSelect:re,filterOption:c,groupBy:l,renderOption:ce,renderEmpty:ue,loading:u=!1,inputProps:d,emptyProps:fe,placement:f=`bottom`,offset:p=Te,animation:pe=!0,sortOption:m,onOptionClick:me,onDropdownVisibleChange:he,dropdownClassName:ge,onSubmit:_e,autoHighlight:ve=!1,fillOnSelect:ye=!0,className:be,groupMode:h=`first`})=>{let[g,_]=te({value:a,defaultValue:ne??``,onChange:ee,name:`AutoComplete`}),[v,y]=te({defaultValue:!1,onChange:he,name:`AutoComplete`,prop:`open`}),[b,x]=(0,k.useState)(-1),[xe,S]=(0,k.useState)(-1),[C,w]=(0,k.useState)(null),[T,E]=(0,k.useState)(null),Se=ie(E,e),[Ce,we]=(0,k.useState)(null),O=f===`top`||f===`bottom`,j=(0,k.useId)(),M=`${j}-listbox`,N=(0,k.useRef)(!1),P=oe({id:d?.id,disabled:d?.disabled,readOnly:d?.readOnly}),F=P.id??`${j}-input`,I=!!P.disabled||!!P.readOnly,L=v&&!I,R=()=>{I||y(!0)},z=()=>{y(!1),x(-1)},B=(0,k.useMemo)(()=>{let e=g.toLowerCase(),t=o.filter(t=>c?c(g,t):t.label.toLowerCase().includes(e));return m?[...t].sort(m):t},[o,g,c,m]),V=(0,k.useMemo)(()=>{if(!l)return null;if(h===`adjacent`){let e=[];return B.forEach(t=>{let n=l(t),r=e[e.length-1];r&&r[0]===n?r[1].push(t):e.push([n,[t]])}),e}let e=new Map;return B.forEach(t=>{let n=l(t),r=e.get(n);r?r.push(t):e.set(n,[t])}),Array.from(e.entries())},[B,l,h]),H=(0,k.useMemo)(()=>V?V.flatMap(([,e])=>e):B,[V,B]),U=b>=0?b:ve&&L?H.findIndex(e=>!e.disabled):-1,W=e=>{let t=H.length;if(t===0)return;let n=U>=0?U:e===1?-1:t;for(let r=0;r<t;r+=1)if(n=(n+e+t)%t,!H[n].disabled){x(n);return}},G=e=>{e.disabled||(ye&&_(e.label),z(),re?.(e))},Oe=e=>{if(!(I||N.current||e.nativeEvent.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:e.preventDefault(),v||R(),W(1);break;case`ArrowUp`:e.preventDefault(),v||R(),W(-1);break;case`Enter`:{let t=L?H[U]:void 0;t?(e.preventDefault(),G(t)):_e&&g.trim()&&(e.preventDefault(),_e(g.trim()),z());break}case`Escape`:!L&&g!==``&&(e.preventDefault(),_(``),x(-1))}},ke=e=>{_(e),x(-1),R()},K=e=>{let t=e.relatedTarget;t&&(Ce?.contains(t)||C?.contains(t))||z()},q=e=>{e.disabled||N.current||(G(e),me?.(e),T?.focus())},J=L&&U>=0?`${M}-option-${U}`:void 0;(0,k.useEffect)(()=>{T&&(T.setAttribute(`role`,`combobox`),T.setAttribute(`aria-autocomplete`,`list`),T.setAttribute(`aria-expanded`,String(L)),!L&&g!==``?T.setAttribute(`data-minerva-escape-consumer`,``):T.removeAttribute(`data-minerva-escape-consumer`),L?T.setAttribute(`aria-controls`,M):T.removeAttribute(`aria-controls`),J?T.setAttribute(`aria-activedescendant`,J):T.removeAttribute(`aria-activedescendant`))},[T,L,M,J,g]);let Y=(0,k.useRef)(()=>{});(0,k.useEffect)(()=>{Y.current=()=>{v||R()}}),(0,k.useEffect)(()=>{if(!T)return;let e=()=>Y.current();return T.addEventListener(`click`,e),()=>T.removeEventListener(`click`,e)},[T]),(0,k.useEffect)(()=>{J&&document.getElementById(J)?.scrollIntoView?.({block:`nearest`})},[J]);let Ae=e=>(0,A.jsxs)(`div`,{className:D.basicOption,children:[e.icon&&(0,A.jsx)(`span`,{className:D.icon,children:e.icon}),(0,A.jsxs)(`div`,{className:D.content,children:[(0,A.jsx)(`div`,{className:D.label,children:e.label}),e.description&&(0,A.jsx)(`div`,{className:D.description,children:e.description})]})]}),X=(e,t)=>{let n=U===t,a=xe===t||n;return(0,A.jsx)(`div`,{className:i(D.optionItem,{[D.disabled]:e.disabled,[D.highlight]:e.highlight,[D.active]:a}),style:e.style,role:`option`,tabIndex:-1,id:`${M}-option-${t}`,"aria-selected":n,"aria-disabled":e.disabled||void 0,onMouseDown:e=>e.preventDefault(),onClick:()=>q(e),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),q(e))},onMouseEnter:()=>S(t),onMouseLeave:()=>S(-1),...s(`autocomplete`,`item`,{highlighted:a,disabled:e.disabled}),children:r===`custom`&&ce?ce(e):Ae(e)},e.value)};return(0,A.jsxs)(`div`,{ref:w,className:i(D.autoComplete,be),onCompositionStart:()=>{N.current=!0},onCompositionEnd:()=>{N.current=!1},...s(`autocomplete`,`root`,{state:L?`open`:`closed`,disabled:!!P.disabled,readonly:!!P.readOnly,loading:u}),children:[n&&(0,A.jsx)(`label`,{htmlFor:F,className:D.label,...s(`autocomplete`,`label`),children:n}),(0,A.jsx)(le,{...d,id:F,disabled:P.disabled,readOnly:P.readOnly,name:t,ref:Se,value:g,onChange:e=>ke(e.target.value),onFocus:e=>{R(),d?.onFocus?.(e)},onBlur:e=>{K(e),d?.onBlur?.(e)},onKeyDown:e=>{Oe(e),d?.onKeyDown?.(e)}}),(0,A.jsx)(se,{ref:we,open:L,anchor:C,placement:De[f],offset:{mainAxis:O?p.y:p.x,crossAxis:O?p.x:p.y},matchAnchorWidth:`min`,branches:()=>[C],onEscapeKeyDown:e=>{(N.current||e.isComposing)&&e.preventDefault()},onDismiss:z,returnFocusOnEscape:()=>T,className:i(D.popup,ge),...s(`autocomplete`,`content`,{state:`open`}),children:(0,A.jsx)(`div`,{className:i(D.dropdown,pe&&D.animated),children:(0,A.jsx)(`div`,{className:D.optionList,role:`listbox`,id:M,"aria-label":n,"aria-busy":u||void 0,...s(`autocomplete`,`list`),children:u?(0,A.jsx)(`div`,{role:`presentation`,className:D.loading,...s(`autocomplete`,`loading`),children:(0,A.jsx)(ae,{})}):B.length>0?(0,A.jsx)(A.Fragment,{children:V?V.map(([e,t],n)=>e===``?(0,A.jsx)(k.Fragment,{children:t.map(e=>X(e,H.indexOf(e)))},`${n}-`):(0,A.jsxs)(`div`,{className:D.optionGroup,role:`group`,"aria-label":e,children:[(0,A.jsx)(`div`,{className:D.groupLabel,"aria-hidden":`true`,...s(`autocomplete`,`group-label`),children:e}),t.map(e=>X(e,H.indexOf(e)))]},`${n}-${e}`)):B.map((e,t)=>X(e,t))}):(0,A.jsx)(`div`,{role:`presentation`,className:D.empty,...s(`autocomplete`,`empty`),children:ue?.()||(0,A.jsx)(de,{...fe})})})})})]})}})))()}function N(){return(0,P.jsxs)(`div`,{style:{width:280,marginTop:180},children:[(0,P.jsx)(`style`,{children:I}),(0,P.jsx)(j,{name:`priority`,label:`Priority (opens above)`,options:F,placement:`top`,offset:{x:0,y:8},animation:!1,dropdownClassName:`priority-dropdown`})]})}var P,F,I;function L(){return(L=t((()=>{M(),P=r(),F=[{label:`Low`,value:`low`},{label:`Medium`,value:`medium`,highlight:!0},{label:`High`,value:`high`},{label:`Critical`,value:`critical`}],I=`
.priority-dropdown {
  --auto-complete-dropdown-background: #f8fafc;
  --auto-complete-option-highlight-background: #fef3c7;
  --auto-complete-option-hover-background: #e0f2fe;
}
`})))()}function R(){let[e,t]=(0,z.useState)(``),[n,r]=(0,z.useState)(!0),[i,a]=(0,z.useState)([]);return(0,z.useEffect)(()=>{let t=setTimeout(()=>{a(V.filter(t=>t.toLowerCase().includes(e.toLowerCase())).map(e=>({label:e,value:e}))),r(!1)},600);return()=>clearTimeout(t)},[e]),(0,B.jsx)(`div`,{style:{width:280},children:(0,B.jsx)(j,{name:`mission`,label:`Space mission`,options:i,value:e,onChange:e=>{t(e),r(!0)},loading:n})})}var z,B,V;function H(){return(H=t((()=>{z=n(),M(),B=r(),V=[`Apollo`,`Artemis`,`Gemini`,`Mercury`,`Skylab`,`Voyager`]})))()}function U(){return(0,W.jsx)(`div`,{style:{width:280},children:(0,W.jsx)(j,{name:`framework`,label:`Framework`,options:G,inputProps:{placeholder:`Type to search…`}})})}var W,G;function Oe(){return(Oe=t((()=>{M(),W=r(),G=[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}]})))()}function ke(){let[e,t]=(0,K.useState)(``),[n,r]=(0,K.useState)(),[i,a]=(0,K.useState)(!1);return(0,q.jsxs)(`div`,{style:{width:280},children:[(0,q.jsx)(j,{name:`city`,label:`City`,options:J,value:e,onChange:t,onSelect:r,onDropdownVisibleChange:a}),(0,q.jsxs)(`p`,{children:[`Input: “`,e,`”`]}),(0,q.jsxs)(`p`,{children:[`Selected value: `,n?n.value:`none`]}),(0,q.jsxs)(`p`,{children:[`Dropdown: `,i?`open`:`closed`]})]})}var K,q,J;function Y(){return(Y=t((()=>{K=n(),M(),q=r(),J=[{label:`Paris`,value:`par`},{label:`London`,value:`lon`},{label:`Tokyo`,value:`tyo`},{label:`New York`,value:`nyc`}]})))()}function Ae(){return(0,X.jsx)(`div`,{style:{width:320},children:(0,X.jsx)(j,{name:`assignee`,label:`Assignee`,mode:`custom`,options:je,renderOption:e=>(0,X.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12},children:[(0,X.jsx)(`strong`,{children:e.label}),(0,X.jsx)(`span`,{style:{opacity:.7},children:e.description})]}),renderEmpty:()=>(0,X.jsx)(`div`,{style:{padding:12},children:`No user found`})})})}var X,je;function Me(){return(Me=t((()=>{M(),X=r(),je=[{label:`Ada Lovelace`,value:`ada`,description:`ada@example.com`},{label:`Alan Turing`,value:`alan`,description:`alan@example.com`},{label:`Grace Hopper`,value:`grace`,description:`grace@example.com`}]})))()}function Ne(){return(0,Pe.jsx)(`div`,{style:{width:280},children:(0,Pe.jsx)(j,{name:`country`,label:`Country (starts with)`,options:Fe,filterOption:(e,t)=>t.label.toLowerCase().startsWith(e.toLowerCase()),sortOption:(e,t)=>e.label.localeCompare(t.label)})})}var Pe,Fe;function Ie(){return(Ie=t((()=>{M(),Pe=r(),Fe=[{label:`Germany`,value:`de`},{label:`Denmark`,value:`dk`},{label:`France`,value:`fr`},{label:`Finland`,value:`fi`},{label:`Greece`,value:`gr`}]})))()}function Le(){return(0,Re.jsx)(`div`,{style:{width:280},children:(0,Re.jsx)(j,{name:`food`,label:`Food`,options:ze,groupBy:e=>e.group??`Other`})})}var Re,ze;function Be(){return(Be=t((()=>{M(),Re=r(),ze=[{label:`Apple`,value:`apple`,group:`Fruits`},{label:`Banana`,value:`banana`,group:`Fruits`},{label:`Carrot`,value:`carrot`,group:`Vegetables`},{label:`Broccoli`,value:`broccoli`,group:`Vegetables`},{label:`Almond`,value:`almond`,group:`Nuts`}]})))()}function Ve(){return(0,Z.jsx)(`div`,{style:{width:320},children:(0,Z.jsx)(j,{name:`platform`,label:`Platform`,options:He})})}var Z,He;function Ue(){return(Ue=t((()=>{M(),me(),Z=r(),He=[{label:`macOS`,value:`macos`,icon:(0,Z.jsx)(_e,{}),description:`Recommended for this device`,highlight:!0},{label:`Windows`,value:`windows`,icon:(0,Z.jsx)(he,{}),description:`Windows 10 and later`},{label:`Linux`,value:`linux`,icon:(0,Z.jsx)(ge,{}),description:`deb and rpm packages`},{label:`Android`,value:`android`,icon:(0,Z.jsx)(ve,{}),description:`Coming soon`,disabled:!0}]})))()}function We(){let[e,t]=(0,Ge.useState)(``),[n,r]=(0,Ge.useState)(``);return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,Q.jsx)(j,{options:Ke,value:e,onChange:t,autoHighlight:!0,fillOnSelect:!1,onSelect:e=>r(`Open book #${e.value}`),onSubmit:e=>r(`Search for "${e}"`),inputProps:{"aria-label":`Search books`,placeholder:`Title or author`,clearable:!0}}),(0,Q.jsx)(`span`,{children:n})]})}var Ge,Q,Ke;function qe(){return(qe=t((()=>{Ge=n(),M(),Q=r(),Ke=[{value:`1`,label:`Lord of the Mysteries`,description:`Cuttlefish`},{value:`2`,label:`Sword of Coming`,description:`Fenghuo`},{value:`3`,label:`A Record of a Mortal`,description:`Wangyu`}]})))()}var Je;function Ye(){return(Ye=t((()=>{Je=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var $,ft,pt;function mt(){return(mt=t((()=>{L(),H(),Oe(),Y(),Me(),Ie(),Be(),Ue(),qe(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),n(),ne(),f(),fe(),m(),$=r(),ft=p(Object.assign({"./demos/appearance.tsx":N,"./demos/async-loading.tsx":R,"./demos/basic.tsx":U,"./demos/controlled.tsx":ke,"./demos/custom-render.tsx":Ae,"./demos/filter-sort.tsx":Ne,"./demos/grouped.tsx":Le,"./demos/rich-options.tsx":Ve,"./demos/search-box.tsx":We}),Object.assign({"./demos/appearance.tsx":Je,"./demos/async-loading.tsx":Xe,"./demos/basic.tsx":Qe,"./demos/controlled.tsx":et,"./demos/custom-render.tsx":nt,"./demos/filter-sort.tsx":it,"./demos/grouped.tsx":ot,"./demos/rich-options.tsx":ct,"./demos/search-box.tsx":ut})),pt=()=>{let{t:e}=re();return(0,$.jsx)(pe,{id:`auto-complete`,demos:ft,children:(0,$.jsxs)(`section`,{className:d.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.auto-complete.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:d.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.arrows`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.enter`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.escape`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.aria`)})]})]})})}})))()}mt();export{pt as default};