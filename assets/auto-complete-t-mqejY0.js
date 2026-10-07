import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{Y as r}from"./registry-DtD9RDtk.js";import{Q as i,Z as a,n as o,ot as s,pt as c}from"./dist-DAjZNDC0.js";import{i as l,r as u,t as d}from"./DocPage-B1L0vw6V.js";var f=n(),p=[{label:`Low`,value:`low`},{label:`Medium`,value:`medium`,highlight:!0},{label:`High`,value:`high`},{label:`Critical`,value:`critical`}];function m(){return(0,f.jsx)(`div`,{style:{width:280,marginTop:180},children:(0,f.jsx)(o,{name:`priority`,label:`Priority (opens above)`,options:p,placement:`top`,offset:{x:0,y:8},animation:!1,dropdownBgColor:`#f8fafc`,highlightBgColor:`#fef3c7`,hoverBgColor:`#e0f2fe`})})}var h=e(t(),1),g=[`Apollo`,`Artemis`,`Gemini`,`Mercury`,`Skylab`,`Voyager`];function _(){let[e,t]=(0,h.useState)(``),[n,r]=(0,h.useState)(!1),[i,a]=(0,h.useState)([]);return(0,h.useEffect)(()=>{r(!0);let t=setTimeout(()=>{a(g.filter(t=>t.toLowerCase().includes(e.toLowerCase())).map(e=>({label:e,value:e}))),r(!1)},600);return()=>clearTimeout(t)},[e]),(0,f.jsx)(`div`,{style:{width:280},children:(0,f.jsx)(o,{name:`mission`,label:`Space mission`,options:i,value:e,onChange:t,loading:n})})}var v=[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}];function y(){return(0,f.jsx)(`div`,{style:{width:280},children:(0,f.jsx)(o,{name:`framework`,label:`Framework`,options:v,textFieldProps:{placeholder:`Type to search…`}})})}var b=[{label:`Paris`,value:`par`},{label:`London`,value:`lon`},{label:`Tokyo`,value:`tyo`},{label:`New York`,value:`nyc`}];function x(){let[e,t]=(0,h.useState)(``),[n,r]=(0,h.useState)(),[i,a]=(0,h.useState)(!1);return(0,f.jsxs)(`div`,{style:{width:280},children:[(0,f.jsx)(o,{name:`city`,label:`City`,options:b,value:e,onChange:t,onSelect:r,onDropdownVisibleChange:a}),(0,f.jsxs)(`p`,{children:[`Input: “`,e,`”`]}),(0,f.jsxs)(`p`,{children:[`Selected value: `,n?n.value:`none`]}),(0,f.jsxs)(`p`,{children:[`Dropdown: `,i?`open`:`closed`]})]})}var S=[{label:`Ada Lovelace`,value:`ada`,description:`ada@example.com`},{label:`Alan Turing`,value:`alan`,description:`alan@example.com`},{label:`Grace Hopper`,value:`grace`,description:`grace@example.com`}];function C(){return(0,f.jsx)(`div`,{style:{width:320},children:(0,f.jsx)(o,{name:`assignee`,label:`Assignee`,mode:`custom`,options:S,renderOption:e=>(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12},children:[(0,f.jsx)(`strong`,{children:e.label}),(0,f.jsx)(`span`,{style:{opacity:.7},children:e.description})]}),renderEmpty:()=>(0,f.jsx)(`div`,{style:{padding:12},children:`No user found`})})})}var w=[{label:`Germany`,value:`de`},{label:`Denmark`,value:`dk`},{label:`France`,value:`fr`},{label:`Finland`,value:`fi`},{label:`Greece`,value:`gr`}];function T(){return(0,f.jsx)(`div`,{style:{width:280},children:(0,f.jsx)(o,{name:`country`,label:`Country (starts with)`,options:w,filterOption:(e,t)=>t.label.toLowerCase().startsWith(e.toLowerCase()),sortOption:(e,t)=>e.label.localeCompare(t.label)})})}var E=[{label:`Apple`,value:`apple`,group:`Fruits`},{label:`Banana`,value:`banana`,group:`Fruits`},{label:`Carrot`,value:`carrot`,group:`Vegetables`},{label:`Broccoli`,value:`broccoli`,group:`Vegetables`},{label:`Almond`,value:`almond`,group:`Nuts`}];function D(){return(0,f.jsx)(`div`,{style:{width:280},children:(0,f.jsx)(o,{name:`food`,label:`Food`,options:E,groupBy:e=>e.group??`Other`})})}var O=[{label:`TypeScript`,value:`ts`},{label:`JavaScript`,value:`js`},{label:`Rust`,value:`rust`},{label:`Go`,value:`go`},{label:`Python`,value:`py`}];function k(){return(0,f.jsx)(`div`,{style:{width:320},children:(0,f.jsx)(o,{name:`languages`,label:`Languages`,options:O,multiple:!0,maxTagCount:2})})}var A=[{label:`macOS`,value:`macos`,icon:(0,f.jsx)(i,{}),description:`Recommended for this device`,highlight:!0},{label:`Windows`,value:`windows`,icon:(0,f.jsx)(c,{}),description:`Windows 10 and later`},{label:`Linux`,value:`linux`,icon:(0,f.jsx)(s,{}),description:`deb and rpm packages`},{label:`Android`,value:`android`,icon:(0,f.jsx)(a,{}),description:`Coming soon`,disabled:!0}];function j(){return(0,f.jsx)(`div`,{style:{width:320},children:(0,f.jsx)(o,{name:`platform`,label:`Platform`,options:A})})}var M=l(Object.assign({"./demos/appearance.tsx":m,"./demos/async-loading.tsx":_,"./demos/basic.tsx":y,"./demos/controlled.tsx":x,"./demos/custom-render.tsx":C,"./demos/filter-sort.tsx":T,"./demos/grouped.tsx":D,"./demos/multiple.tsx":k,"./demos/rich-options.tsx":j}),Object.assign({"./demos/appearance.tsx":`import { AutoComplete } from "@minerva/lib-core";

const options = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium", highlight: true },
  { label: "High", value: "high" },
  { label: "Critical", value: "critical" },
];

export default function AppearanceDemo() {
  return (
    <div style={{ width: 280, marginTop: 180 }}>
      <AutoComplete
        name="priority"
        label="Priority (opens above)"
        options={options}
        placement="top"
        offset={{ x: 0, y: 8 }}
        animation={false}
        dropdownBgColor="#f8fafc"
        highlightBgColor="#fef3c7"
        hoverBgColor="#e0f2fe"
      />
    </div>
  );
}
`,"./demos/async-loading.tsx":`import { useEffect, useState } from "react";
import { AutoComplete, type AutoCompleteOption } from "@minerva/lib-core";

const all = ["Apollo", "Artemis", "Gemini", "Mercury", "Skylab", "Voyager"];

export default function AsyncLoadingDemo() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);

  useEffect(() => {
    setLoading(true);
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
        onChange={setQuery}
        loading={loading}
      />
    </div>
  );
}
`,"./demos/basic.tsx":`import { AutoComplete } from "@minerva/lib-core";

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
        textFieldProps={{ placeholder: "Type to search…" }}
      />
    </div>
  );
}
`,"./demos/controlled.tsx":`import { useState } from "react";
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
`,"./demos/custom-render.tsx":`import { AutoComplete } from "@minerva/lib-core";

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
`,"./demos/filter-sort.tsx":`import { AutoComplete } from "@minerva/lib-core";

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
`,"./demos/grouped.tsx":`import { AutoComplete } from "@minerva/lib-core";

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
`,"./demos/multiple.tsx":`import { AutoComplete } from "@minerva/lib-core";

const options = [
  { label: "TypeScript", value: "ts" },
  { label: "JavaScript", value: "js" },
  { label: "Rust", value: "rust" },
  { label: "Go", value: "go" },
  { label: "Python", value: "py" },
];

export default function MultipleDemo() {
  return (
    <div style={{ width: 320 }}>
      <AutoComplete
        name="languages"
        label="Languages"
        options={options}
        multiple
        maxTagCount={2}
      />
    </div>
  );
}
`,"./demos/rich-options.tsx":`import { AutoComplete } from "@minerva/lib-core";
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
`})),N=()=>{let{t:e}=r();return(0,f.jsx)(d,{id:`auto-complete`,demos:M,children:(0,f.jsxs)(`section`,{className:u.section,"aria-labelledby":`keyboard`,children:[(0,f.jsx)(`h2`,{id:`keyboard`,children:e(`docs.auto-complete.keyboard.title`)}),(0,f.jsxs)(`ul`,{className:u.prose,children:[(0,f.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.arrows`)}),(0,f.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.enter`)}),(0,f.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.escape`)}),(0,f.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.aria`)})]})]})})};export{N as default};