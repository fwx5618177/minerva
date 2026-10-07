import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{I as r,Q as i,Z as a,_ as ee,g as te}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{i as ne,r as re}from"./iconBase-Cf2Z27y4.js";import{O as o,Vt as s}from"./dist-dg6ajl7p.js";import{a as c,c as ie,n as ae,o as oe,s as se,t as ce}from"./DocPage-Kqmidh_0.js";function le(){return(0,l.jsx)(`div`,{style:{width:280,marginTop:180},children:(0,l.jsx)(o,{name:`priority`,label:`Priority (opens above)`,options:u,placement:`top`,offset:{x:0,y:8},animation:!1,dropdownBgColor:`#f8fafc`,highlightBgColor:`#fef3c7`,hoverBgColor:`#e0f2fe`})})}var l,u;function d(){return(d=e((()=>{s(),l=n(),u=[{label:`Low`,value:`low`},{label:`Medium`,value:`medium`,highlight:!0},{label:`High`,value:`high`},{label:`Critical`,value:`critical`}]})))()}function ue(){let[e,t]=(0,f.useState)(``),[n,r]=(0,f.useState)(!0),[i,a]=(0,f.useState)([]);return(0,f.useEffect)(()=>{let t=setTimeout(()=>{a(m.filter(t=>t.toLowerCase().includes(e.toLowerCase())).map(e=>({label:e,value:e}))),r(!1)},600);return()=>clearTimeout(t)},[e]),(0,p.jsx)(`div`,{style:{width:280},children:(0,p.jsx)(o,{name:`mission`,label:`Space mission`,options:i,value:e,onChange:e=>{t(e),r(!0)},loading:n})})}var f,p,m;function h(){return(h=e((()=>{f=t(),s(),p=n(),m=[`Apollo`,`Artemis`,`Gemini`,`Mercury`,`Skylab`,`Voyager`]})))()}function de(){return(0,g.jsx)(`div`,{style:{width:280},children:(0,g.jsx)(o,{name:`framework`,label:`Framework`,options:_,textFieldProps:{placeholder:`Type to search…`}})})}var g,_;function v(){return(v=e((()=>{s(),g=n(),_=[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}]})))()}function fe(){let[e,t]=(0,y.useState)(``),[n,r]=(0,y.useState)(),[i,a]=(0,y.useState)(!1);return(0,b.jsxs)(`div`,{style:{width:280},children:[(0,b.jsx)(o,{name:`city`,label:`City`,options:x,value:e,onChange:t,onSelect:r,onDropdownVisibleChange:a}),(0,b.jsxs)(`p`,{children:[`Input: “`,e,`”`]}),(0,b.jsxs)(`p`,{children:[`Selected value: `,n?n.value:`none`]}),(0,b.jsxs)(`p`,{children:[`Dropdown: `,i?`open`:`closed`]})]})}var y,b,x;function S(){return(S=e((()=>{y=t(),s(),b=n(),x=[{label:`Paris`,value:`par`},{label:`London`,value:`lon`},{label:`Tokyo`,value:`tyo`},{label:`New York`,value:`nyc`}]})))()}function pe(){return(0,C.jsx)(`div`,{style:{width:320},children:(0,C.jsx)(o,{name:`assignee`,label:`Assignee`,mode:`custom`,options:w,renderOption:e=>(0,C.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12},children:[(0,C.jsx)(`strong`,{children:e.label}),(0,C.jsx)(`span`,{style:{opacity:.7},children:e.description})]}),renderEmpty:()=>(0,C.jsx)(`div`,{style:{padding:12},children:`No user found`})})})}var C,w;function T(){return(T=e((()=>{s(),C=n(),w=[{label:`Ada Lovelace`,value:`ada`,description:`ada@example.com`},{label:`Alan Turing`,value:`alan`,description:`alan@example.com`},{label:`Grace Hopper`,value:`grace`,description:`grace@example.com`}]})))()}function me(){return(0,E.jsx)(`div`,{style:{width:280},children:(0,E.jsx)(o,{name:`country`,label:`Country (starts with)`,options:D,filterOption:(e,t)=>t.label.toLowerCase().startsWith(e.toLowerCase()),sortOption:(e,t)=>e.label.localeCompare(t.label)})})}var E,D;function O(){return(O=e((()=>{s(),E=n(),D=[{label:`Germany`,value:`de`},{label:`Denmark`,value:`dk`},{label:`France`,value:`fr`},{label:`Finland`,value:`fi`},{label:`Greece`,value:`gr`}]})))()}function he(){return(0,k.jsx)(`div`,{style:{width:280},children:(0,k.jsx)(o,{name:`food`,label:`Food`,options:A,groupBy:e=>e.group??`Other`})})}var k,A;function j(){return(j=e((()=>{s(),k=n(),A=[{label:`Apple`,value:`apple`,group:`Fruits`},{label:`Banana`,value:`banana`,group:`Fruits`},{label:`Carrot`,value:`carrot`,group:`Vegetables`},{label:`Broccoli`,value:`broccoli`,group:`Vegetables`},{label:`Almond`,value:`almond`,group:`Nuts`}]})))()}function ge(){let[e,t]=(0,M.useState)([P[0]]);return(0,N.jsxs)(`div`,{style:{width:320},children:[(0,N.jsx)(o,{name:`languages`,label:`Languages`,options:P,multiple:!0,maxTagCount:2,selectedOptions:e,onSelectedOptionsChange:t}),(0,N.jsxs)(`p`,{children:[`Selected: `,e.map(e=>e.label).join(`, `)||`none`]})]})}var M,N,P;function _e(){return(_e=e((()=>{M=t(),s(),N=n(),P=[{label:`TypeScript`,value:`ts`},{label:`JavaScript`,value:`js`},{label:`Rust`,value:`rust`},{label:`Go`,value:`go`},{label:`Python`,value:`py`}]})))()}function ve(){return(0,F.jsx)(`div`,{style:{width:320},children:(0,F.jsx)(o,{name:`platform`,label:`Platform`,options:I})})}var F,I;function L(){return(L=e((()=>{s(),i(),F=n(),I=[{label:`macOS`,value:`macos`,icon:(0,F.jsx)(ee,{}),description:`Recommended for this device`,highlight:!0},{label:`Windows`,value:`windows`,icon:(0,F.jsx)(a,{}),description:`Windows 10 and later`},{label:`Linux`,value:`linux`,icon:(0,F.jsx)(r,{}),description:`deb and rpm packages`},{label:`Android`,value:`android`,icon:(0,F.jsx)(te,{}),description:`Coming soon`,disabled:!0}]})))()}function ye(){let[e,t]=(0,R.useState)(``),[n,r]=(0,R.useState)(``);return(0,z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,z.jsx)(o,{options:B,value:e,onChange:t,autoHighlight:!0,fillOnSelect:!1,onSelect:e=>r(`Open book #${e.value}`),onSubmit:e=>r(`Search for "${e}"`),textFieldProps:{ariaLabel:`Search books`,placeholder:`Title or author`}}),(0,z.jsx)(`span`,{children:n})]})}var R,z,B;function V(){return(V=e((()=>{R=t(),s(),z=n(),B=[{value:`1`,label:`Lord of the Mysteries`,description:`Cuttlefish`},{value:`2`,label:`Sword of Coming`,description:`Fenghuo`},{value:`3`,label:`A Record of a Mortal`,description:`Wangyu`}]})))()}var H;function U(){return(U=e((()=>{H=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var W;function G(){return(G=e((()=>{W=`import { useEffect, useState } from "react";
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
`})))()}var K;function q(){return(q=e((()=>{K=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { useState } from "react";
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
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var be;function xe(){return(xe=e((()=>{be=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var Q;function Se(){return(Se=e((()=>{Q=`import { AutoComplete } from "@minerva/lib-core";

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
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`import { useState } from "react";
import { AutoComplete, type AutoCompleteOption } from "@minerva/lib-core";

const options: AutoCompleteOption[] = [
  { label: "TypeScript", value: "ts" },
  { label: "JavaScript", value: "js" },
  { label: "Rust", value: "rust" },
  { label: "Go", value: "go" },
  { label: "Python", value: "py" },
];

export default function MultipleDemo() {
  const [selected, setSelected] = useState<AutoCompleteOption[]>([options[0]]);

  return (
    <div style={{ width: 320 }}>
      <AutoComplete
        name="languages"
        label="Languages"
        options={options}
        multiple
        maxTagCount={2}
        selectedOptions={selected}
        onSelectedOptionsChange={setSelected}
      />
      <p>Selected: {selected.map((o) => o.label).join(", ") || "none"}</p>
    </div>
  );
}
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`import { AutoComplete } from "@minerva/lib-core";
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
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`import { useState } from "react";
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
        textFieldProps={{
          ariaLabel: "Search books",
          placeholder: "Title or author",
        }}
      />
      <span>{result}</span>
    </div>
  );
}
`})))()}var $,ke,Ae;function je(){return(je=e((()=>{d(),h(),v(),S(),T(),O(),j(),_e(),L(),V(),U(),G(),q(),Y(),Z(),xe(),Se(),we(),Ee(),Oe(),t(),re(),ae(),ie(),oe(),$=n(),ke=se(Object.assign({"./demos/appearance.tsx":le,"./demos/async-loading.tsx":ue,"./demos/basic.tsx":de,"./demos/controlled.tsx":fe,"./demos/custom-render.tsx":pe,"./demos/filter-sort.tsx":me,"./demos/grouped.tsx":he,"./demos/multiple.tsx":ge,"./demos/rich-options.tsx":ve,"./demos/search-box.tsx":ye}),Object.assign({"./demos/appearance.tsx":H,"./demos/async-loading.tsx":W,"./demos/basic.tsx":K,"./demos/controlled.tsx":J,"./demos/custom-render.tsx":X,"./demos/filter-sort.tsx":be,"./demos/grouped.tsx":Q,"./demos/multiple.tsx":Ce,"./demos/rich-options.tsx":Te,"./demos/search-box.tsx":De})),Ae=()=>{let{t:e}=ne();return(0,$.jsx)(ce,{id:`auto-complete`,demos:ke,children:(0,$.jsxs)(`section`,{className:c.section,"aria-labelledby":`keyboard`,children:[(0,$.jsx)(`h2`,{id:`keyboard`,children:e(`docs.auto-complete.keyboard.title`)}),(0,$.jsxs)(`ul`,{className:c.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.arrows`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.enter`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.escape`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.backspace`)}),(0,$.jsx)(`li`,{children:e(`docs.auto-complete.keyboard.aria`)})]})]})})}})))()}je();export{Ae as default};