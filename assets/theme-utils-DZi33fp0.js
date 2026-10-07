import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{F as r,G as i,W as a,X as o,et as s,f as c}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{i as l,r as u}from"./iconBase-BbuKeGtN.js";import{Rt as d,St as f,Z as p,_ as m,dn as h,hn as g}from"./dist-DkgrNLMS.js";import{a as _,c as v,l as y,n as b,o as x,s as S,t as C,u as w}from"./DocPage-Bnv84vTs.js";function T(){let[e,t]=(0,E.useState)(`"auto"`),[n,r]=(0,E.useState)(o),s=O[e],c=a(s,n);return(0,D.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,D.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16},children:[(0,D.jsxs)(`label`,{children:[`theme`,` `,(0,D.jsx)(`select`,{value:e,onChange:e=>t(e.target.value),children:Object.keys(O).map(e=>(0,D.jsx)(`option`,{value:e,children:e},e))})]}),(0,D.jsxs)(`label`,{children:[`systemTheme`,` `,(0,D.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),children:[(0,D.jsx)(`option`,{value:`light`,children:`light`}),(0,D.jsx)(`option`,{value:`dark`,children:`dark`})]})]})]}),(0,D.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`getSystemTheme(): `,(0,D.jsx)(g,{color:`info`,children:o()}),` `,`isBilingualTheme(theme):`,` `,(0,D.jsx)(g,{color:`info`,children:String(i(s))})]}),(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:12,borderRadius:8,background:c[`background-color`],color:c[`foreground-color`],border:`1px solid ${c[`border-color`]}`},children:[(0,D.jsx)(`span`,{"aria-hidden":`true`,style:{width:24,height:24,borderRadius:`50%`,background:c[`primary-color`]}}),(0,D.jsxs)(`span`,{style:{fontFamily:`monospace`,fontSize:13},children:[`primary-color: `,c[`primary-color`],` · background-color:`,` `,c[`background-color`]]})]})]})}var E,D,O;function k(){return(k=e((()=>{E=t(),d(),D=n(),O={'"auto"':`auto`,'"light"':`light`,'"dark"':`dark`,'"github-dark"':`github-dark`,"{ light, dark } pair":{light:{...r.light,"primary-color":`#7c3aed`},dark:{...r.dark,"primary-color":`#a78bfa`}},"custom object":{...r.light,"primary-color":`#0d9488`}}})))()}function A(){let e=(0,j.useRef)(null),[t,n]=(0,j.useState)(`github-dark`);return(0,j.useEffect)(()=>{e.current&&s(e.current.style,a(t))},[t]),(0,M.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,M.jsx)(`div`,{role:`group`,"aria-label":`Theme`,style:{display:`flex`,gap:8},children:N.map(e=>(0,M.jsx)(c,{size:`small`,color:e===t?`primary`:`neutral`,variant:e===t?`solid`:`outline`,"aria-pressed":e===t,onClick:()=>n(e),children:e},e))}),(0,M.jsx)(`div`,{ref:e,style:{padding:16,borderRadius:8,background:`var(--background-color)`,color:`var(--text-color)`,border:`1px solid var(--border-color)`},children:(0,M.jsxs)(m,{gap:4,wrap:!0,children:[(0,M.jsx)(c,{color:`primary`,children:`Primary`}),(0,M.jsx)(c,{color:`success`,children:`Success`}),(0,M.jsx)(f,{label:`Switch`,defaultChecked:!0}),(0,M.jsx)(p,{label:`Checkbox`,defaultChecked:!0}),(0,M.jsx)(`div`,{style:{width:220},children:(0,M.jsx)(h,{name:`preview`,"aria-label":`Name`,placeholder:`Jane Doe`})})]})})]})}var j,M,N;function P(){return(P=e((()=>{j=t(),d(),M=n(),N=Object.keys(r)})))()}function F(){return(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:16,width:`100%`},children:Object.entries(r).map(([e,t])=>(0,I.jsxs)(`figure`,{style:{margin:0,padding:12,borderRadius:8,background:t[`background-color`],color:t[`foreground-color`],border:`1px solid ${t[`border-color`]}`},children:[(0,I.jsx)(`figcaption`,{style:{fontWeight:600,marginBottom:8},children:e}),(0,I.jsx)(`ul`,{style:{listStyle:`none`,margin:0,padding:0},children:L.map(e=>(0,I.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:12,lineHeight:`22px`},children:[(0,I.jsx)(`span`,{"aria-hidden":`true`,style:{width:16,height:16,borderRadius:4,background:t[e],border:`1px solid ${t[`border-color`]}`}}),(0,I.jsx)(`span`,{style:{flex:1,fontFamily:`monospace`},children:e}),(0,I.jsx)(`span`,{style:{fontFamily:`monospace`},children:t[e]})]},e))})]},e))})}var I,L;function R(){return(R=e((()=>{d(),I=n(),L=[`primary-color`,`secondary-color`,`success-color`,`warning-color`,`danger-color`,`info-color`,`background-color`,`foreground-color`,`border-color`]})))()}var z;function B(){return(B=e((()=>{z=`import { useState } from "react";
import {
  Tag,
  getSystemTheme,
  isBilingualTheme,
  resolveTheme,
  themes,
  type DefaultTheme,
  type Theme,
} from "@minerva/lib-core";

const INPUTS: Record<string, Theme> = {
  '"auto"': "auto",
  '"light"': "light",
  '"dark"': "dark",
  '"github-dark"': "github-dark",
  "{ light, dark } pair": {
    light: { ...themes.light, "primary-color": "#7c3aed" },
    dark: { ...themes.dark, "primary-color": "#a78bfa" },
  },
  "custom object": { ...themes.light, "primary-color": "#0d9488" },
};

// resolveTheme / isBilingualTheme / getSystemTheme are pure helpers:
// they compute values and never touch the DOM.
export default function ResolveThemeDemo() {
  const [input, setInput] = useState('"auto"');
  const [scheme, setScheme] = useState<DefaultTheme>(getSystemTheme);

  const theme = INPUTS[input];
  const resolved = resolveTheme(theme, scheme);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <label>
          theme{" "}
          <select value={input} onChange={(e) => setInput(e.target.value)}>
            {Object.keys(INPUTS).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </label>
        <label>
          systemTheme{" "}
          <select
            value={scheme}
            onChange={(e) => setScheme(e.target.value as DefaultTheme)}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
          </select>
        </label>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
        }}
      >
        getSystemTheme(): <Tag color="info">{getSystemTheme()}</Tag>{" "}
        isBilingualTheme(theme):{" "}
        <Tag color="info">{String(isBilingualTheme(theme))}</Tag>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: 12,
          borderRadius: 8,
          background: resolved["background-color"],
          color: resolved["foreground-color"],
          border: \`1px solid \${resolved["border-color"]}\`,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: resolved["primary-color"],
          }}
        />
        <span style={{ fontFamily: "monospace", fontSize: 13 }}>
          primary-color: {resolved["primary-color"]} · background-color:{" "}
          {resolved["background-color"]}
        </span>
      </div>
    </div>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { useEffect, useRef, useState } from "react";
import {
  Button,
  Checkbox,
  generateCSSVariables,
  HStack,
  Input,
  resolveTheme,
  Switch,
  themes,
  type ThemeName,
} from "@minerva/lib-core";

const NAMES = Object.keys(themes) as ThemeName[];

// generateCSSVariables writes a theme to any style declaration. Pointing it
// at an element (instead of <html>, like applyThemeStyles does) previews a
// theme inside that element only.
export default function ScopedPreviewDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [name, setName] = useState<ThemeName>("github-dark");

  useEffect(() => {
    if (ref.current)
      generateCSSVariables(ref.current.style, resolveTheme(name));
  }, [name]);

  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <div role="group" aria-label="Theme" style={{ display: "flex", gap: 8 }}>
        {NAMES.map((n) => (
          <Button
            key={n}
            size="small"
            color={n === name ? "primary" : "neutral"}
            variant={n === name ? "solid" : "outline"}
            aria-pressed={n === name}
            onClick={() => setName(n)}
          >
            {n}
          </Button>
        ))}
      </div>
      <div
        ref={ref}
        style={{
          padding: 16,
          borderRadius: 8,
          background: "var(--background-color)",
          color: "var(--text-color)",
          border: "1px solid var(--border-color)",
        }}
      >
        <HStack gap={4} wrap>
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Switch label="Switch" defaultChecked />
          <Checkbox label="Checkbox" defaultChecked />
          <div style={{ width: 220 }}>
            <Input name="preview" aria-label="Name" placeholder="Jane Doe" />
          </div>
        </HStack>
      </div>
    </div>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { themes } from "@minerva/lib-core";

const TOKENS = [
  "primary-color",
  "secondary-color",
  "success-color",
  "warning-color",
  "danger-color",
  "info-color",
  "background-color",
  "foreground-color",
  "border-color",
] as const;

// \`themes\` is a plain object: reading it has no side effects
export default function ThemeSwatchesDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16,
        width: "100%",
      }}
    >
      {Object.entries(themes).map(([name, theme]) => (
        <figure
          key={name}
          style={{
            margin: 0,
            padding: 12,
            borderRadius: 8,
            background: theme["background-color"],
            color: theme["foreground-color"],
            border: \`1px solid \${theme["border-color"]}\`,
          }}
        >
          <figcaption style={{ fontWeight: 600, marginBottom: 8 }}>
            {name}
          </figcaption>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {TOKENS.map((token) => (
              <li
                key={token}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  lineHeight: "22px",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                    background: theme[token],
                    border: \`1px solid \${theme["border-color"]}\`,
                  }}
                />
                <span style={{ flex: 1, fontFamily: "monospace" }}>
                  {token}
                </span>
                <span style={{ fontFamily: "monospace" }}>{theme[token]}</span>
              </li>
            ))}
          </ul>
        </figure>
      ))}
    </div>
  );
}
`})))()}var G,K,q,J,Y,X;function Z(){return(Z=e((()=>{k(),P(),R(),B(),H(),W(),t(),u(),w(),b(),x(),v(),G=n(),K=S(Object.assign({"./demos/resolve-theme.tsx":T,"./demos/scoped-preview.tsx":A,"./demos/theme-swatches.tsx":F}),Object.assign({"./demos/resolve-theme.tsx":z,"./demos/scoped-preview.tsx":V,"./demos/theme-swatches.tsx":U})),q=`import { applyThemeStyles, themes } from "@minerva/lib-core";

// Without React (or before the first render): write a theme on <html>
applyThemeStyles("dark");
applyThemeStyles({ ...themes.light, "primary-color": "#7c3aed" });

// "auto" and { light, dark } pairs need the scheme to resolve against
// (defaults to the current prefers-color-scheme)
applyThemeStyles("auto", "dark");`,J=`import { generateCSSVariables, resolveTheme } from "@minerva/lib-core";

// Theme a single element (e.g. an embedded widget) instead of the page
const widget = document.querySelector<HTMLElement>("#widget")!;
generateCSSVariables(widget.style, resolveTheme("github-dark"));`,Y=`import {
  getSystemTheme,
  isBilingualTheme,
  resolveTheme,
  themes,
} from "@minerva/lib-core";

getSystemTheme(); // "light" | "dark" ("light" during SSR)

const pair = { light: themes.light, dark: themes.dark };
isBilingualTheme(pair); // true
isBilingualTheme("dark"); // false

resolveTheme("auto", "dark") === themes.dark; // true
resolveTheme("github-dark")["background-color"]; // "#0d1117"
resolveTheme(pair, "light") === themes.light; // true`,X=()=>{let{t:e}=l(),t=[{name:`applyThemeStyles`,signature:`(theme: Theme | ThemeName, systemTheme?: DefaultTheme) => void`,description:e(`docs.theme-utils.reference.applyThemeStyles`)},{name:`generateCSSVariables`,signature:`(style: CSSStyleDeclaration, theme: ComponentTheme | ThemeMap) => void`,description:e(`docs.theme-utils.reference.generateCSSVariables`)},{name:`resolveTheme`,signature:`(theme: Theme, systemTheme?: DefaultTheme) => ComponentTheme | ThemeMap`,description:e(`docs.theme-utils.reference.resolveTheme`)},{name:`getSystemTheme`,signature:`() => "light" | "dark"`,description:e(`docs.theme-utils.reference.getSystemTheme`)},{name:`isBilingualTheme`,signature:`(theme: unknown) => theme is CustomBilingualTheme`,description:e(`docs.theme-utils.reference.isBilingualTheme`)},{name:`themes`,signature:`{ light: ComponentTheme; dark: ComponentTheme; "github-dark": ComponentTheme }`,description:e(`docs.theme-utils.reference.themes`)},{name:`light / dark / githubDark`,signature:`ComponentTheme`,description:e(`docs.theme-utils.reference.builtIns`)}],n=(0,G.jsxs)(`section`,{className:_.section,"aria-labelledby":`reference`,children:[(0,G.jsx)(`h2`,{id:`reference`,children:e(`docs.theme-utils.reference.title`)}),(0,G.jsx)(`p`,{className:_.prose,children:e(`docs.theme-utils.reference.text`)}),(0,G.jsx)(`div`,{className:_.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.theme-utils.reference.title`),children:(0,G.jsxs)(`table`,{className:_.propsTable,children:[(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`col`,children:e(`docs.theme-utils.reference.name`)}),(0,G.jsx)(`th`,{scope:`col`,children:e(`docs.theme-utils.reference.signature`)}),(0,G.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,G.jsx)(`tbody`,{children:t.map(e=>(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`row`,children:(0,G.jsx)(`code`,{className:_.propName,children:e.name})}),(0,G.jsx)(`td`,{children:(0,G.jsx)(`code`,{className:_.propType,children:e.signature})}),(0,G.jsx)(`td`,{children:e.description})]},e.name))})]})}),(0,G.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:e(`docs.theme-utils.usage.apply`)}),(0,G.jsx)(`p`,{className:_.prose,children:e(`docs.theme-utils.usage.applyText`)}),(0,G.jsx)(y,{code:q,language:`tsx`}),(0,G.jsx)(`h3`,{children:e(`docs.theme-utils.usage.generate`)}),(0,G.jsx)(`p`,{className:_.prose,children:e(`docs.theme-utils.usage.generateText`)}),(0,G.jsx)(y,{code:J,language:`tsx`}),(0,G.jsx)(`h3`,{children:e(`docs.theme-utils.usage.resolve`)}),(0,G.jsx)(`p`,{className:_.prose,children:e(`docs.theme-utils.usage.resolveText`)}),(0,G.jsx)(y,{code:Y,language:`tsx`})]});return(0,G.jsx)(C,{id:`theme-utils`,demos:K,intro:n})}})))()}Z();export{X as default};