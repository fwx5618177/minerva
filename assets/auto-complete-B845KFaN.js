import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-aZSMfLKR.js";import{X as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{Q as ee,Z as te,et as ne,nt as re,rt as ie,tt as ae}from"./io5-Db3ldn2O.js";import{n as oe,t as o}from"./ProgressIndicator-MZGP8IFl.js";import{n as s,t as se}from"./context-CofDH3-d.js";import{n as ce,r as le}from"./FloatingPanel-_azHlJqg.js";import{n as ue,t as de}from"./Input-DlvVEIEg.js";import{n as fe,t as pe}from"./Empty-Bi30jlng.js";import{c,i as me,n as l,r as u,s as he,t as d}from"./DocPage-BeqNKFhE.js";import{g as ge,h as _e,l as ve,n as ye,t as be}from"./fa-BpzsXjlQ.js";var xe,Se,f,p,m,h,g,_,v,Ce,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{xe=`_autoComplete_1e3gh_1`,Se=`_label_1e3gh_6`,f=`_popup_1e3gh_13`,p=`_dropdown_1e3gh_24`,m=`_animated_1e3gh_28`,h=`_slideIn_1e3gh_1`,g=`_optionList_1e3gh_47`,_=`_optionItem_1e3gh_53`,v=`_active_1e3gh_58`,Ce=`_disabled_1e3gh_61`,y=`_highlight_1e3gh_65`,b=`_basicOption_1e3gh_76`,x=`_icon_1e3gh_81`,S=`_content_1e3gh_86`,C=`_description_1e3gh_93`,w=`_groupLabel_1e3gh_99`,T=`_loading_1e3gh_106`,E=`_empty_1e3gh_107`,D={autoComplete:xe,label:Se,popup:f,dropdown:p,animated:m,slideIn:h,optionList:g,optionItem:_,active:v,disabled:Ce,highlight:y,basicOption:b,icon:x,content:S,description:C,groupLabel:w,loading:T,empty:E}})))()}var k,A,we,Te,Ee,j;function M(){return(M=t((()=>{a(),o(),ne(),ee(),s(),le(),de(),fe(),O(),k=e(n(),1),A=r(),we=Object.freeze({x:0,y:4}),Te=[],Ee={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},j=({ref:e,name:t,label:n,mode:r=`basic`,value:a,onChange:ee,options:ne=Te,defaultValue:re,onSelect:ie,filterOption:o,groupBy:s,renderOption:le,renderEmpty:de,loading:fe=!1,inputProps:c,emptyProps:me,placement:l=`bottom`,offset:u=we,animation:he=!0,sortOption:d,onOptionClick:ge,onDropdownVisibleChange:_e,dropdownClassName:ve,onSubmit:ye,autoHighlight:be=!1,fillOnSelect:xe=!0,className:Se,groupMode:f=`first`})=>{let[p,m]=te({value:a,defaultValue:re??``,onChange:ee,name:`AutoComplete`}),[h,g]=te({defaultValue:!1,onChange:_e,name:`AutoComplete`,prop:`open`}),[_,v]=(0,k.useState)(-1),[Ce,y]=(0,k.useState)(-1),[b,x]=(0,k.useState)(null),[S,C]=(0,k.useState)(null),w=ae(C,e),[T,E]=(0,k.useState)(null),O=l===`top`||l===`bottom`,j=(0,k.useId)(),M=`${j}-listbox`,N=(0,k.useRef)(!1),P=se({id:c?.id,disabled:c?.disabled,readOnly:c?.readOnly}),F=P.id??`${j}-input`,I=!!P.disabled||!!P.readOnly,L=h&&!I,R=()=>{I||g(!0)},z=()=>{g(!1),v(-1)},B=(0,k.useMemo)(()=>{let e=p.toLowerCase(),t=ne.filter(t=>o?o(p,t):t.label.toLowerCase().includes(e));return d?[...t].sort(d):t},[ne,p,o,d]),V=(0,k.useMemo)(()=>{if(!s)return null;if(f===`adjacent`){let e=[];return B.forEach(t=>{let n=s(t),r=e[e.length-1];r&&r[0]===n?r[1].push(t):e.push([n,[t]])}),e}let e=new Map;return B.forEach(t=>{let n=s(t),r=e.get(n);r?r.push(t):e.set(n,[t])}),Array.from(e.entries())},[B,s,f]),H=(0,k.useMemo)(()=>V?V.flatMap(([,e])=>e):B,[V,B]),U=_>=0?_:be&&L?H.findIndex(e=>!e.disabled):-1,W=e=>{let t=H.length;if(t===0)return;let n=U>=0?U:e===1?-1:t;for(let r=0;r<t;r+=1)if(n=(n+e+t)%t,!H[n].disabled){v(n);return}},G=e=>{e.disabled||(xe&&m(e.label),z(),ie?.(e))},De=e=>{if(!(I||N.current||e.nativeEvent.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:e.preventDefault(),h||R(),W(1);break;case`ArrowUp`:e.preventDefault(),h||R(),W(-1);break;case`Enter`:{let t=L?H[U]:void 0;t?(e.preventDefault(),G(t)):ye&&p.trim()&&(e.preventDefault(),ye(p.trim()),z());break}case`Escape`:!L&&p!==``&&(e.preventDefault(),m(``),v(-1))}},Oe=e=>{m(e),v(-1),R()},K=e=>{let t=e.relatedTarget;t&&(T?.contains(t)||b?.contains(t))||z()},q=e=>{e.disabled||N.current||(G(e),ge?.(e),S?.focus())},J=L&&U>=0?`${M}-option-${U}`:void 0;(0,k.useEffect)(()=>{S&&(S.setAttribute(`role`,`combobox`),S.setAttribute(`aria-autocomplete`,`list`),S.setAttribute(`aria-expanded`,String(L)),!L&&p!==``?S.setAttribute(`data-minerva-escape-consumer`,``):S.removeAttribute(`data-minerva-escape-consumer`),L?S.setAttribute(`aria-controls`,M):S.removeAttribute(`aria-controls`),J?S.setAttribute(`aria-activedescendant`,J):S.removeAttribute(`aria-activedescendant`))},[S,L,M,J,p]);let Y=(0,k.useRef)(()=>{});(0,k.useEffect)(()=>{Y.current=()=>{h||R()}}),(0,k.useEffect)(()=>{if(!S)return;let e=()=>Y.current();return S.addEventListener(`click`,e),()=>S.removeEventListener(`click`,e)},[S]),(0,k.useEffect)(()=>{J&&document.getElementById(J)?.scrollIntoView?.({block:`nearest`})},[J]);let ke=e=>(0,A.jsxs)(`div`,{className:D.basicOption,children:[e.icon&&(0,A.jsx)(`span`,{className:D.icon,children:e.icon}),(0,A.jsxs)(`div`,{className:D.content,children:[(0,A.jsx)(`div`,{className:D.label,children:e.label}),e.description&&(0,A.jsx)(`div`,{className:D.description,children:e.description})]})]}),X=(e,t)=>{let n=U===t;return(0,A.jsx)(`div`,{className:i(D.optionItem,{[D.disabled]:e.disabled,[D.highlight]:e.highlight,[D.active]:Ce===t||n}),style:e.style,role:`option`,tabIndex:-1,id:`${M}-option-${t}`,"aria-selected":n,"aria-disabled":e.disabled||void 0,onMouseDown:e=>e.preventDefault(),onClick:()=>q(e),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),q(e))},onMouseEnter:()=>y(t),onMouseLeave:()=>y(-1),children:r===`custom`&&le?le(e):ke(e)},e.value)};return(0,A.jsxs)(`div`,{ref:x,className:i(D.autoComplete,Se),onCompositionStart:()=>{N.current=!0},onCompositionEnd:()=>{N.current=!1},children:[n&&(0,A.jsx)(`label`,{htmlFor:F,className:D.label,children:n}),(0,A.jsx)(ue,{...c,id:F,disabled:P.disabled,readOnly:P.readOnly,name:t,ref:w,value:p,onChange:e=>Oe(e.target.value),onFocus:e=>{R(),c?.onFocus?.(e)},onBlur:e=>{K(e),c?.onBlur?.(e)},onKeyDown:e=>{De(e),c?.onKeyDown?.(e)}}),(0,A.jsx)(ce,{ref:E,open:L,anchor:b,placement:Ee[l],offset:{mainAxis:O?u.y:u.x,crossAxis:O?u.x:u.y},matchAnchorWidth:`min`,branches:()=>[b],onEscapeKeyDown:e=>{(N.current||e.isComposing)&&e.preventDefault()},onDismiss:z,returnFocusOnEscape:()=>S,className:i(D.popup,ve),children:(0,A.jsx)(`div`,{className:i(D.dropdown,he&&D.animated),children:(0,A.jsx)(`div`,{className:D.optionList,role:`listbox`,id:M,"aria-label":n,"aria-busy":fe||void 0,children:fe?(0,A.jsx)(`div`,{role:`presentation`,className:D.loading,children:(0,A.jsx)(oe,{})}):B.length>0?(0,A.jsx)(A.Fragment,{children:V?V.map(([e,t],n)=>e===``?(0,A.jsx)(k.Fragment,{children:t.map(e=>X(e,H.indexOf(e)))},`${n}-`):(0,A.jsxs)(`div`,{className:D.optionGroup,role:`group`,"aria-label":e,children:[(0,A.jsx)(`div`,{className:D.groupLabel,"aria-hidden":`true`,children:e}),t.map(e=>X(e,H.indexOf(e)))]},`${n}-${e}`)):B.map((e,t)=>X(e,t))}):(0,A.jsx)(`div`,{role:`presentation`,className:D.empty,children:de?.()||(0,A.jsx)(pe,{...me})})})})})]})}})))()}function N(){return(0,P.jsxs)(`div`,{style:{width:280,marginTop:180},children:[(0,P.jsx)(`style`,{children:I}),(0,P.jsx)(j,{name:`priority`,label:`Priority (opens above)`,options:F,placement:`top`,offset:{x:0,y:8},animation:!1,dropdownClassName:`priority-dropdown`})]})}var P,F,I;function L(){return(L=t((()=>{M(),P=r(),F=[{label:`Low`,value:`low`},{label:`Medium`,value:`medium`,highlight:!0},{label:`High`,value:`high`},{label:`Critical`,value:`critical`}],I=`
.priority-dropdown {
  --auto-complete-dropdown-background: #f8fafc;
  --auto-complete-option-highlight-background: #fef3c7;
  --auto-complete-option-hover-background: #e0f2fe;
}
`})))()}function R(){let[e,t]=(0,z.useState)(``),[n,r]=(0,z.useState)(!0),[i,a]=(0,z.useState)([]);return(0,z.useEffect)(()=>{let t=setTimeout(()=>{a(V.filter(t=>t.toLowerCase().includes(e.toLowerCase())).map(e=>({label:e,value:e}))),r(!1)},600);return()=>clearTimeout(t)},[e]),(0,B.jsx)(`div`,{style:{width:280},children:(0,B.jsx)(j,{name:`mission`,label:`Space mission`,options:i,value:e,onChange:e=>{t(e),r(!0)},loading:n})})}var z,B,V;function H(){return(H=t((()=>{z=n(),M(),B=r(),V=[`Apollo`,`Artemis`,`Gemini`,`Mercury`,`Skylab`,`Voyager`]})))()}function U(){return(0,W.jsx)(`div`,{style:{width:280},children:(0,W.jsx)(j,{name:`framework`,label:`Framework`,options:G,inputProps:{placeholder:`Type to search…`}})})}var W,G;function De(){return(De=t((()=>{M(),W=r(),G=[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}]})))()}function Oe(){let[e,t]=(0,K.useState)(``),[n,r]=(0,K.useState)(),[i,a]=(0,K.useState)(!1);return(0,q.jsxs)(`div`,{style:{width:280},children:[(0,q.jsx)(j,{name:`city`,label:`City`,options:J,value:e,onChange:t,onSelect:r,onDropdownVisibleChange:a}),(0,q.jsxs)(`p`,{children:[`Input: “`,e,`”`]}),(0,q.jsxs)(`p`,{children:[`Selected value: `,n?n.value:`none`]}),(0,q.jsxs)(`p`,{children:[`Dropdown: `,i?`open`:`closed`]})]})}var K,q,J;function Y(){return(Y=t((()=>{K=n(),M(),q=r(),J=[{label:`Paris`,value:`par`},{label:`London`,value:`lon`},{label:`Tokyo`,value:`tyo`},{label:`New York`,value:`nyc`}]})))()}function ke(){return(0,X.jsx)(`div`,{style:{width:320},children:(0,X.jsx)(j,{name:`assignee`,label:`Assignee`,mode:`custom`,options:Ae,renderOption:e=>(0,X.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12},children:[(0,X.jsx)(`strong`,{children:e.label}),(0,X.jsx)(`span`,{style:{opacity:.7},children:e.description})]}),renderEmpty:()=>(0,X.jsx)(`div`,{style:{padding:12},children:`No user found`})})})}var X,Ae;function je(){return(je=t((()=>{M(),X=r(),Ae=[{label:`Ada Lovelace`,value:`ada`,description:`ada@example.com`},{label:`Alan Turing`,value:`alan`,description:`alan@example.com`},{label:`Grace Hopper`,value:`grace`,description:`grace@example.com`}]})))()}function Me(){return(0,Ne.jsx)(`div`,{style:{width:280},children:(0,Ne.jsx)(j,{name:`country`,label:`Country (starts with)`,options:Pe,filterOption:(e,t)=>t.label.toLowerCase().startsWith(e.toLowerCase()),sortOption:(e,t)=>e.label.localeCompare(t.label)})})}var Ne,Pe;function Fe(){return(Fe=t((()=>{M(),Ne=r(),Pe=[{label:`Germany`,value:`de`},{label:`Denmark`,value:`dk`},{label:`France`,value:`fr`},{label:`Finland`,value:`fi`},{label:`Greece`,value:`gr`}]})))()}function Ie(){return(0,Le.jsx)(`div`,{style:{width:280},children:(0,Le.jsx)(j,{name:`food`,label:`Food`,options:Re,groupBy:e=>e.group??`Other`})})}var Le,Re;function ze(){return(ze=t((()=>{M(),Le=r(),Re=[{label:`Apple`,value:`apple`,group:`Fruits`},{label:`Banana`,value:`banana`,group:`Fruits`},{label:`Carrot`,value:`carrot`,group:`Vegetables`},{label:`Broccoli`,value:`broccoli`,group:`Vegetables`},{label:`Almond`,value:`almond`,group:`Nuts`}]})))()}function Be(){return(0,Z.jsx)(`div`,{style:{width:320},children:(0,Z.jsx)(j,{name:`platform`,label:`Platform`,options:Ve})})}var Z,Ve;function He(){return(He=t((()=>{M(),ge(),Z=r(),Ve=[{label:`macOS`,value:`macos`,icon:(0,Z.jsx)(ye,{}),description:`Recommended for this device`,highlight:!0},{label:`Windows`,value:`windows`,icon:(0,Z.jsx)(_e,{}),description:`Windows 10 and later`},{label:`Linux`,value:`linux`,icon:(0,Z.jsx)(ve,{}),description:`deb and rpm packages`},{label:`Android`,value:`android`,icon:(0,Z.jsx)(be,{}),description:`Coming soon`,disabled:!0}]})))()}function Ue(){let[e,t]=(0,We.useState)(``),[n,r]=(0,We.useState)(``);return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,Q.jsx)(j,{options:Ge,value:e,onChange:t,autoHighlight:!0,fillOnSelect:!1,onSelect:e=>r(`Open book #${e.value}`),onSubmit:e=>r(`Search for "${e}"`),inputProps:{"aria-label":`Search books`,placeholder:`Title or author`,clearable:!0}}),(0,Q.jsx)(`span`,{children:n})]})}var We,Q,Ge;function Ke(){return(Ke=t((()=>{We=n(),M(),Q=r(),Ge=[{value:`1`,label:`Lord of the Mysteries`,description:`Cuttlefish`},{value:`2`,label:`Sword of Coming`,description:`Fenghuo`},{value:`3`,label:`A Record of a Mortal`,description:`Wangyu`}]})))()}var qe;function Je(){return(Je=t((()=>{qe=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var Ye;function Xe(){return(Xe=t((()=>{Ye=`import { useEffect, useState } from "react";
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
`})))()}var Ze;function Qe(){return(Qe=t((()=>{Ze=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var $e;function et(){return(et=t((()=>{$e=`import { useState } from "react";
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
`})))()}var tt;function nt(){return(nt=t((()=>{tt=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var rt;function it(){return(it=t((()=>{rt=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var at;function ot(){return(ot=t((()=>{at=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var st;function ct(){return(ct=t((()=>{st=`import { AutoComplete } from "@minerva/lib-core";
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
`})))()}var lt;function ut(){return(ut=t((()=>{lt=`import { useState } from "react";
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
`})))()}var $,dt,ft;function pt(){return(pt=t((()=>{L(),H(),De(),Y(),je(),Fe(),ze(),He(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),n(),re(),l(),c(),me(),$=r(),dt=he(Object.assign({"./demos/appearance.tsx":N,"./demos/async-loading.tsx":R,"./demos/basic.tsx":U,"./demos/controlled.tsx":Oe,"./demos/custom-render.tsx":ke,"./demos/filter-sort.tsx":Me,"./demos/grouped.tsx":Ie,"./demos/rich-options.tsx":Be,"./demos/search-box.tsx":Ue}),Object.assign({"./demos/appearance.tsx":qe,"./demos/async-loading.tsx":Ye,"./demos/basic.tsx":Ze,"./demos/controlled.tsx":$e,"./demos/custom-render.tsx":tt,"./demos/filter-sort.tsx":rt,"./demos/grouped.tsx":at,"./demos/rich-options.tsx":st,"./demos/search-box.tsx":lt})),ft=()=>{let{t:e}=ie();return(0,$.jsx)(d,{id:`auto-complete`,demos:dt,children:(0,$.jsxs)(`section`,{className:u.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.auto-complete.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:u.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.arrows`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.enter`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.escape`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.aria`)})]})]})})}})))()}pt();export{ft as default};