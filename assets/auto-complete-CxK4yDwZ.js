import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{O as r,S as i,k as a,m as ee,p as te}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{i as ne,r as re}from"./iconBase-BbuKeGtN.js";import{Rt as o,j as s}from"./dist-DkgrNLMS.js";import{a as c,c as ie,n as ae,o as oe,s as se,t as ce}from"./DocPage-Bnv84vTs.js";function le(){return(0,l.jsxs)(`div`,{style:{width:280,marginTop:180},children:[(0,l.jsx)(`style`,{children:de}),(0,l.jsx)(s,{name:`priority`,label:`Priority (opens above)`,options:ue,placement:`top`,offset:{x:0,y:8},animation:!1,dropdownClassName:`priority-dropdown`})]})}var l,ue,de;function fe(){return(fe=e((()=>{o(),l=n(),ue=[{label:`Low`,value:`low`},{label:`Medium`,value:`medium`,highlight:!0},{label:`High`,value:`high`},{label:`Critical`,value:`critical`}],de=`
.priority-dropdown {
  --autocomplete-dropdown-bg: #f8fafc;
  --autocomplete-option-highlight-bg: #fef3c7;
  --autocomplete-option-hover-bg: #e0f2fe;
}
`})))()}function pe(){let[e,t]=(0,u.useState)(``),[n,r]=(0,u.useState)(!0),[i,a]=(0,u.useState)([]);return(0,u.useEffect)(()=>{let t=setTimeout(()=>{a(f.filter(t=>t.toLowerCase().includes(e.toLowerCase())).map(e=>({label:e,value:e}))),r(!1)},600);return()=>clearTimeout(t)},[e]),(0,d.jsx)(`div`,{style:{width:280},children:(0,d.jsx)(s,{name:`mission`,label:`Space mission`,options:i,value:e,onChange:e=>{t(e),r(!0)},loading:n})})}var u,d,f;function p(){return(p=e((()=>{u=t(),o(),d=n(),f=[`Apollo`,`Artemis`,`Gemini`,`Mercury`,`Skylab`,`Voyager`]})))()}function me(){return(0,m.jsx)(`div`,{style:{width:280},children:(0,m.jsx)(s,{name:`framework`,label:`Framework`,options:h,inputProps:{placeholder:`Type to search…`}})})}var m,h;function g(){return(g=e((()=>{o(),m=n(),h=[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}]})))()}function he(){let[e,t]=(0,_.useState)(``),[n,r]=(0,_.useState)(),[i,a]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{style:{width:280},children:[(0,v.jsx)(s,{name:`city`,label:`City`,options:y,value:e,onChange:t,onSelect:r,onDropdownVisibleChange:a}),(0,v.jsxs)(`p`,{children:[`Input: “`,e,`”`]}),(0,v.jsxs)(`p`,{children:[`Selected value: `,n?n.value:`none`]}),(0,v.jsxs)(`p`,{children:[`Dropdown: `,i?`open`:`closed`]})]})}var _,v,y;function b(){return(b=e((()=>{_=t(),o(),v=n(),y=[{label:`Paris`,value:`par`},{label:`London`,value:`lon`},{label:`Tokyo`,value:`tyo`},{label:`New York`,value:`nyc`}]})))()}function ge(){return(0,x.jsx)(`div`,{style:{width:320},children:(0,x.jsx)(s,{name:`assignee`,label:`Assignee`,mode:`custom`,options:S,renderOption:e=>(0,x.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12},children:[(0,x.jsx)(`strong`,{children:e.label}),(0,x.jsx)(`span`,{style:{opacity:.7},children:e.description})]}),renderEmpty:()=>(0,x.jsx)(`div`,{style:{padding:12},children:`No user found`})})})}var x,S;function C(){return(C=e((()=>{o(),x=n(),S=[{label:`Ada Lovelace`,value:`ada`,description:`ada@example.com`},{label:`Alan Turing`,value:`alan`,description:`alan@example.com`},{label:`Grace Hopper`,value:`grace`,description:`grace@example.com`}]})))()}function _e(){return(0,w.jsx)(`div`,{style:{width:280},children:(0,w.jsx)(s,{name:`country`,label:`Country (starts with)`,options:T,filterOption:(e,t)=>t.label.toLowerCase().startsWith(e.toLowerCase()),sortOption:(e,t)=>e.label.localeCompare(t.label)})})}var w,T;function E(){return(E=e((()=>{o(),w=n(),T=[{label:`Germany`,value:`de`},{label:`Denmark`,value:`dk`},{label:`France`,value:`fr`},{label:`Finland`,value:`fi`},{label:`Greece`,value:`gr`}]})))()}function ve(){return(0,D.jsx)(`div`,{style:{width:280},children:(0,D.jsx)(s,{name:`food`,label:`Food`,options:O,groupBy:e=>e.group??`Other`})})}var D,O;function k(){return(k=e((()=>{o(),D=n(),O=[{label:`Apple`,value:`apple`,group:`Fruits`},{label:`Banana`,value:`banana`,group:`Fruits`},{label:`Carrot`,value:`carrot`,group:`Vegetables`},{label:`Broccoli`,value:`broccoli`,group:`Vegetables`},{label:`Almond`,value:`almond`,group:`Nuts`}]})))()}function ye(){return(0,A.jsx)(`div`,{style:{width:320},children:(0,A.jsx)(s,{name:`platform`,label:`Platform`,options:j})})}var A,j;function M(){return(M=e((()=>{o(),a(),A=n(),j=[{label:`macOS`,value:`macos`,icon:(0,A.jsx)(ee,{}),description:`Recommended for this device`,highlight:!0},{label:`Windows`,value:`windows`,icon:(0,A.jsx)(r,{}),description:`Windows 10 and later`},{label:`Linux`,value:`linux`,icon:(0,A.jsx)(i,{}),description:`deb and rpm packages`},{label:`Android`,value:`android`,icon:(0,A.jsx)(te,{}),description:`Coming soon`,disabled:!0}]})))()}function be(){let[e,t]=(0,N.useState)(``),[n,r]=(0,N.useState)(``);return(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,P.jsx)(s,{options:F,value:e,onChange:t,autoHighlight:!0,fillOnSelect:!1,onSelect:e=>r(`Open book #${e.value}`),onSubmit:e=>r(`Search for "${e}"`),inputProps:{"aria-label":`Search books`,placeholder:`Title or author`,clearable:!0}}),(0,P.jsx)(`span`,{children:n})]})}var N,P,F;function I(){return(I=e((()=>{N=t(),o(),P=n(),F=[{value:`1`,label:`Lord of the Mysteries`,description:`Cuttlefish`},{value:`2`,label:`Sword of Coming`,description:`Fenghuo`},{value:`3`,label:`A Record of a Mortal`,description:`Wangyu`}]})))()}var L;function R(){return(R=e((()=>{L=`import { AutoComplete } from "@minerva/lib-core";

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
  --autocomplete-dropdown-bg: #f8fafc;
  --autocomplete-option-highlight-bg: #fef3c7;
  --autocomplete-option-hover-bg: #e0f2fe;
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
`})))()}var z;function B(){return(B=e((()=>{z=`import { useEffect, useState } from "react";
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
`})))()}var V;function H(){return(H=e((()=>{V=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var U;function W(){return(W=e((()=>{U=`import { useState } from "react";
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
`})))()}var G;function K(){return(K=e((()=>{G=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var q;function J(){return(J=e((()=>{q=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`import { AutoComplete } from "@minerva/lib-core";
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
`})))()}var Z;function Ce(){return(Ce=e((()=>{Z=`import { useState } from "react";
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
`})))()}var Q,we,Te;function $(){return($=e((()=>{fe(),p(),g(),b(),C(),E(),k(),M(),I(),R(),B(),H(),W(),K(),J(),X(),Se(),Ce(),t(),re(),ae(),ie(),oe(),Q=n(),we=se(Object.assign({"./demos/appearance.tsx":le,"./demos/async-loading.tsx":pe,"./demos/basic.tsx":me,"./demos/controlled.tsx":he,"./demos/custom-render.tsx":ge,"./demos/filter-sort.tsx":_e,"./demos/grouped.tsx":ve,"./demos/rich-options.tsx":ye,"./demos/search-box.tsx":be}),Object.assign({"./demos/appearance.tsx":L,"./demos/async-loading.tsx":z,"./demos/basic.tsx":V,"./demos/controlled.tsx":U,"./demos/custom-render.tsx":G,"./demos/filter-sort.tsx":q,"./demos/grouped.tsx":Y,"./demos/rich-options.tsx":xe,"./demos/search-box.tsx":Z})),Te=()=>{let{t:e}=ne();return(0,Q.jsx)(ce,{id:`auto-complete`,demos:we,children:(0,Q.jsxs)(`section`,{className:c.section,"aria-labelledby":`keyboard`,children:[(0,Q.jsx)(`h2`,{id:`keyboard`,children:e(`docs.auto-complete.keyboard.title`)}),(0,Q.jsxs)(`ul`,{className:c.prose,children:[(0,Q.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.arrows`)}),(0,Q.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.enter`)}),(0,Q.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.escape`)}),(0,Q.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.aria`)})]})]})})}})))()}$();export{Te as default};