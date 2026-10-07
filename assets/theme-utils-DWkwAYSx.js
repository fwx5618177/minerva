import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{A as r,E as i,K as a,O as o,P as s,S as c,U as l,_ as u,f as d,h as f,n as p}from"./dist-C3Cy1YK6.js";import{J as m}from"./registry-DXcVqgdp.js";import{a as h,i as g,r as _,t as v}from"./DocPage-DUnq_TLt.js";var y=e(t(),1),b=n(),x={'"auto"':`auto`,'"light"':`light`,'"dark"':`dark`,'"github-dark"':`github-dark`,"{ light, dark } pair":{light:{...d.light,"primary-color":`#7c3aed`},dark:{...d.dark,"primary-color":`#a78bfa`}},"custom object":{...d.light,"primary-color":`#0d9488`}};function S(){let[e,t]=(0,y.useState)(`"auto"`),[n,i]=(0,y.useState)(c),a=x[e],o=p(a,n);return(0,b.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16},children:[(0,b.jsxs)(`label`,{children:[`theme`,` `,(0,b.jsx)(`select`,{value:e,onChange:e=>t(e.target.value),children:Object.keys(x).map(e=>(0,b.jsx)(`option`,{value:e,children:e},e))})]}),(0,b.jsxs)(`label`,{children:[`systemTheme`,` `,(0,b.jsxs)(`select`,{value:n,onChange:e=>i(e.target.value),children:[(0,b.jsx)(`option`,{value:`light`,children:`light`}),(0,b.jsx)(`option`,{value:`dark`,children:`dark`})]})]})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`getSystemTheme(): `,(0,b.jsx)(r,{variant:`info`,children:c()}),` `,`isBilingualTheme(theme):`,` `,(0,b.jsx)(r,{variant:`info`,children:String(u(a))})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:12,borderRadius:8,background:o[`background-color`],color:o[`foreground-color`],border:`1px solid ${o[`border-color`]}`},children:[(0,b.jsx)(`span`,{"aria-hidden":`true`,style:{width:24,height:24,borderRadius:`50%`,background:o[`primary-color`]}}),(0,b.jsxs)(`span`,{style:{fontFamily:`monospace`,fontSize:13},children:[`primary-color: `,o[`primary-color`],` · background-color:`,` `,o[`background-color`]]})]})]})}var C=Object.keys(d);function w(){let e=(0,y.useRef)(null),[t,n]=(0,y.useState)(`github-dark`);return(0,y.useEffect)(()=>{e.current&&l(e.current.style,p(t))},[t]),(0,b.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,b.jsx)(`div`,{role:`group`,"aria-label":`Theme`,style:{display:`flex`,gap:8},children:C.map(e=>(0,b.jsx)(f,{size:`small`,variant:e===t?`primary`:`secondary`,"aria-pressed":e===t,onClick:()=>n(e),children:e},e))}),(0,b.jsx)(`div`,{ref:e,style:{padding:16,borderRadius:8,background:`var(--background-color)`,color:`var(--text-color)`,border:`1px solid var(--border-color)`},children:(0,b.jsxs)(o,{wrap:!0,align:`center`,children:[(0,b.jsx)(f,{variant:`primary`,children:`Primary`}),(0,b.jsx)(f,{variant:`success`,children:`Success`}),(0,b.jsx)(a,{label:`Switch`,defaultChecked:!0}),(0,b.jsx)(s,{label:`Checkbox`,defaultChecked:!0}),(0,b.jsx)(i,{name:`preview`,label:`Name`,placeholder:`Jane Doe`})]})})]})}var T=[`primary-color`,`secondary-color`,`success-color`,`warning-color`,`danger-color`,`info-color`,`background-color`,`foreground-color`,`border-color`];function E(){return(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:16,width:`100%`},children:Object.entries(d).map(([e,t])=>(0,b.jsxs)(`figure`,{style:{margin:0,padding:12,borderRadius:8,background:t[`background-color`],color:t[`foreground-color`],border:`1px solid ${t[`border-color`]}`},children:[(0,b.jsx)(`figcaption`,{style:{fontWeight:600,marginBottom:8},children:e}),(0,b.jsx)(`ul`,{style:{listStyle:`none`,margin:0,padding:0},children:T.map(e=>(0,b.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:12,lineHeight:`22px`},children:[(0,b.jsx)(`span`,{"aria-hidden":`true`,style:{width:16,height:16,borderRadius:4,background:t[e],border:`1px solid ${t[`border-color`]}`}}),(0,b.jsx)(`span`,{style:{flex:1,fontFamily:`monospace`},children:e}),(0,b.jsx)(`span`,{style:{fontFamily:`monospace`},children:t[e]})]},e))})]},e))})}var D=g(Object.assign({"./demos/resolve-theme.tsx":S,"./demos/scoped-preview.tsx":w,"./demos/theme-swatches.tsx":E}),Object.assign({"./demos/resolve-theme.tsx":`import { useState } from "react";
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
        getSystemTheme(): <Tag variant="info">{getSystemTheme()}</Tag>{" "}
        isBilingualTheme(theme):{" "}
        <Tag variant="info">{String(isBilingualTheme(theme))}</Tag>
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
`,"./demos/scoped-preview.tsx":`import { useEffect, useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Space,
  Switch,
  TextField,
  generateCSSVariables,
  resolveTheme,
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
            variant={n === name ? "primary" : "secondary"}
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
        <Space wrap align="center">
          <Button variant="primary">Primary</Button>
          <Button variant="success">Success</Button>
          <Switch label="Switch" defaultChecked />
          <Checkbox label="Checkbox" defaultChecked />
          <TextField name="preview" label="Name" placeholder="Jane Doe" />
        </Space>
      </div>
    </div>
  );
}
`,"./demos/theme-swatches.tsx":`import { themes } from "@minerva/lib-core";

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
`})),O=`import { applyThemeStyles, themes } from "@minerva/lib-core";

// Without React (or before the first render): write a theme on <html>
applyThemeStyles("dark");
applyThemeStyles({ ...themes.light, "primary-color": "#7c3aed" });

// "auto" and { light, dark } pairs need the scheme to resolve against
// (defaults to the current prefers-color-scheme)
applyThemeStyles("auto", "dark");`,k=`import { generateCSSVariables, resolveTheme } from "@minerva/lib-core";

// Theme a single element (e.g. an embedded widget) instead of the page
const widget = document.querySelector<HTMLElement>("#widget")!;
generateCSSVariables(widget.style, resolveTheme("github-dark"));`,A=`import {
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
resolveTheme(pair, "light") === themes.light; // true`,j=()=>{let{t:e}=m(),t=[{name:`applyThemeStyles`,signature:`(theme: Theme | ThemeName, systemTheme?: DefaultTheme) => void`,description:e(`docs.theme-utils.reference.applyThemeStyles`)},{name:`generateCSSVariables`,signature:`(style: CSSStyleDeclaration, theme: ComponentTheme | ThemeMap) => void`,description:e(`docs.theme-utils.reference.generateCSSVariables`)},{name:`resolveTheme`,signature:`(theme: Theme, systemTheme?: DefaultTheme) => ComponentTheme | ThemeMap`,description:e(`docs.theme-utils.reference.resolveTheme`)},{name:`getSystemTheme`,signature:`() => "light" | "dark"`,description:e(`docs.theme-utils.reference.getSystemTheme`)},{name:`isBilingualTheme`,signature:`(theme: unknown) => theme is CustomBilingualTheme`,description:e(`docs.theme-utils.reference.isBilingualTheme`)},{name:`themes`,signature:`{ light: ComponentTheme; dark: ComponentTheme; "github-dark": ComponentTheme }`,description:e(`docs.theme-utils.reference.themes`)},{name:`light / dark / githubDark`,signature:`ComponentTheme`,description:e(`docs.theme-utils.reference.builtIns`)}],n=(0,b.jsxs)(`section`,{className:_.section,"aria-labelledby":`reference`,children:[(0,b.jsx)(`h2`,{id:`reference`,children:e(`docs.theme-utils.reference.title`)}),(0,b.jsx)(`p`,{className:_.prose,children:e(`docs.theme-utils.reference.text`)}),(0,b.jsx)(`div`,{className:_.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.theme-utils.reference.title`),children:(0,b.jsxs)(`table`,{className:_.propsTable,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{scope:`col`,children:e(`docs.theme-utils.reference.name`)}),(0,b.jsx)(`th`,{scope:`col`,children:e(`docs.theme-utils.reference.signature`)}),(0,b.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,b.jsx)(`tbody`,{children:t.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{scope:`row`,children:(0,b.jsx)(`code`,{className:_.propName,children:e.name})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{className:_.propType,children:e.signature})}),(0,b.jsx)(`td`,{children:e.description})]},e.name))})]})}),(0,b.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:e(`docs.theme-utils.usage.apply`)}),(0,b.jsx)(`p`,{className:_.prose,children:e(`docs.theme-utils.usage.applyText`)}),(0,b.jsx)(h,{code:O,language:`tsx`}),(0,b.jsx)(`h3`,{children:e(`docs.theme-utils.usage.generate`)}),(0,b.jsx)(`p`,{className:_.prose,children:e(`docs.theme-utils.usage.generateText`)}),(0,b.jsx)(h,{code:k,language:`tsx`}),(0,b.jsx)(`h3`,{children:e(`docs.theme-utils.usage.resolve`)}),(0,b.jsx)(`p`,{className:_.prose,children:e(`docs.theme-utils.usage.resolveText`)}),(0,b.jsx)(h,{code:A,language:`tsx`})]});return(0,b.jsx)(v,{id:`theme-utils`,demos:D,intro:n})};export{j as default};