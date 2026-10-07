import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{A as r,B as i,D as a,G as o,I as s,V as c,c as l,h as u}from"./dist-C3Cy1YK6.js";import{J as d}from"./registry-DXcVqgdp.js";import{a as f,i as p,r as m,t as h}from"./DocPage-DUnq_TLt.js";var g=e(t(),1),_=n(),v=[`auto`,`light`,`dark`,`github-dark`];function y(){let{theme:e=`auto`}=o(),[t,n,i]=c(e);return(0,g.useEffect)(()=>()=>s(e),[e]),(0,_.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,_.jsxs)(`div`,{role:`group`,"aria-label":`Theme`,style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[v.map(e=>(0,_.jsx)(u,{size:`small`,variant:e===t?`primary`:`secondary`,"aria-pressed":e===t,onClick:()=>n(e),children:String(e)},String(e))),(0,_.jsx)(u,{size:`small`,variant:`back`,onClick:()=>n(e),children:`Reset`})]}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`theme:`,` `,(0,_.jsx)(r,{variant:`primary`,children:typeof t==`string`?t:`custom`}),` `,`systemTheme: `,(0,_.jsx)(r,{variant:`info`,children:i})]})]})}var b=`avatar.default`,x=[`en`,`zh`,`fr`];function S(){let[e,t]=a({language:`en`}),{t:n,i18n:o}=l();return(0,g.useEffect)(()=>()=>{o.changeLanguage(`en`)},[o]),(0,_.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,_.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:x.map(n=>(0,_.jsx)(u,{size:`small`,variant:n===e.language?`primary`:`secondary`,"aria-pressed":n===e.language,onClick:()=>t({language:n}),children:n},n))}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`i18n.language: `,(0,_.jsx)(r,{variant:`primary`,children:o.language}),` `,b,`: `,(0,_.jsx)(r,{variant:`info`,children:n(b)})]}),(0,_.jsx)(i,{type:`online`,showLabel:!0})]})}var C=p(Object.assign({"./demos/use-auto-theme.tsx":y,"./demos/use-locale.tsx":S}),Object.assign({"./demos/use-auto-theme.tsx":`import { useEffect } from "react";
import {
  Button,
  Tag,
  applyThemeStyles,
  useAutoTheme,
  useConfig,
  type Theme,
} from "@minerva/lib-core";

const OPTIONS: Theme[] = ["auto", "light", "dark", "github-dark"];

// useAutoTheme writes the theme as CSS variables on <html>, so it re-themes
// the whole page. This demo starts from the theme of the surrounding
// ConfigProvider (mounting changes nothing) and restores it when unmounted.
export default function UseAutoThemeDemo() {
  const { theme: appTheme = "auto" } = useConfig();
  const [theme, setTheme, systemTheme] = useAutoTheme(appTheme);

  useEffect(() => () => applyThemeStyles(appTheme), [appTheme]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        role="group"
        aria-label="Theme"
        style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
      >
        {OPTIONS.map((option) => (
          <Button
            key={String(option)}
            size="small"
            variant={option === theme ? "primary" : "secondary"}
            aria-pressed={option === theme}
            onClick={() => setTheme(option)}
          >
            {String(option)}
          </Button>
        ))}
        <Button size="small" variant="back" onClick={() => setTheme(appTheme)}>
          Reset
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
        }}
      >
        theme:{" "}
        <Tag variant="primary">
          {typeof theme === "string" ? theme : "custom"}
        </Tag>{" "}
        systemTheme: <Tag variant="info">{systemTheme}</Tag>
      </div>
    </div>
  );
}
`,"./demos/use-locale.tsx":`import { useEffect } from "react";
import {
  Button,
  StatusIndicator,
  Tag,
  useI18n,
  useLocale,
  type SupportedLanguage,
} from "@minerva/lib-core";

// a key from lib-core's built-in translations
const AVATAR_KEY = "avatar.default";
const LANGUAGES: SupportedLanguage[] = ["en", "zh", "fr"];

export default function UseLocaleDemo() {
  const [locale, setLocale] = useLocale({ language: "en" });
  // t() translates lib-core's own strings with its private i18next instance
  const { t, i18n } = useI18n();

  // The language of lib-core is global: restore the default when unmounting
  useEffect(
    () => () => {
      void i18n.changeLanguage("en");
    },
    [i18n],
  );

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        role="group"
        aria-label="Language"
        style={{ display: "flex", gap: 8 }}
      >
        {LANGUAGES.map((language) => (
          <Button
            key={language}
            size="small"
            variant={language === locale.language ? "primary" : "secondary"}
            aria-pressed={language === locale.language}
            onClick={() => setLocale({ language })}
          >
            {language}
          </Button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
        }}
      >
        i18n.language: <Tag variant="primary">{i18n.language}</Tag> {AVATAR_KEY}
        : <Tag variant="info">{t(AVATAR_KEY)}</Tag>
      </div>
      {/* built-in component labels follow the library language too */}
      <StatusIndicator type="online" showLabel />
    </div>
  );
}
`})),w=`import { useAutoTheme, useLocale } from "@minerva/lib-core";

// This is what ConfigProvider does internally. Use the hooks instead of
// (not inside) a ConfigProvider: both write the same global state.
export function ThemeAndLanguage() {
  const [theme, setTheme] = useAutoTheme("auto");
  const [locale, setLocale] = useLocale({ language: "fr" });

  return (
    <>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle theme
      </button>
      <button onClick={() => setLocale({ language: "en" })}>
        {locale.language}
      </button>
    </>
  );
}`,T=()=>{let{t:e}=d(),t=[{name:`useAutoTheme`,signature:`(initialTheme?: Theme) => [theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>, systemTheme: "light" | "dark"]`,description:e(`docs.hooks.reference.useAutoTheme`)},{name:`useLocale`,signature:`(initialLocale?: Locale) => [locale: Locale, setLocale: Dispatch<SetStateAction<Locale>>]`,description:e(`docs.hooks.reference.useLocale`)},{name:`useI18n`,signature:`() => { t: TFunction; i18n: i18n }`,description:e(`docs.hooks.reference.useI18n`)}],n=(0,_.jsxs)(`section`,{className:m.section,"aria-labelledby":`reference`,children:[(0,_.jsx)(`h2`,{id:`reference`,children:e(`docs.hooks.reference.title`)}),(0,_.jsx)(`p`,{className:m.prose,children:e(`docs.hooks.reference.text`)}),(0,_.jsx)(`div`,{className:m.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.hooks.reference.title`),children:(0,_.jsxs)(`table`,{className:m.propsTable,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.hook`)}),(0,_.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.signature`)}),(0,_.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,_.jsx)(`tbody`,{children:t.map(e=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{scope:`row`,children:(0,_.jsx)(`code`,{className:m.propName,children:e.name})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{className:m.propType,children:e.signature})}),(0,_.jsx)(`td`,{children:e.description})]},e.name))})]})}),(0,_.jsx)(`p`,{className:m.callout,children:e(`docs.hooks.reference.global`)})]});return(0,_.jsx)(h,{id:`hooks`,demos:C,intro:n,children:(0,_.jsxs)(`section`,{className:m.section,"aria-labelledby":`standalone`,children:[(0,_.jsx)(`h2`,{id:`standalone`,children:e(`docs.hooks.standalone.title`)}),(0,_.jsx)(`p`,{className:m.prose,children:e(`docs.hooks.standalone.text`)}),(0,_.jsx)(f,{code:w,language:`tsx`})]})})};export{T as default};