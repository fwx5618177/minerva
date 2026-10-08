import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Ot as r,X as i,cn as a,qt as ee,vn as te}from"./minerva-web-components-e9i9Tzii.js";import{Q as o,Z as s,nt as c,rt as ne}from"./io5-CkIs6v-8.js";import{i as re,n as ie,r as ae,t as oe}from"./useI18n-Brv-VDVY.js";import{i as l,r as u}from"./themeScope-CVsq4AXR.js";import{n as d,t as f}from"./Button-BfJfx3BZ.js";import{n as se,t as ce}from"./Empty-C2dFryN3.js";import{n as le,t as p}from"./Alert-CGZjjFON.js";import{n as m,t as h}from"./Tag-C1rs5v30.js";import{n as ue,r as g,t as _}from"./ConfigProvider-Cjobfnxn.js";import{i as v,n as de,r as y}from"./Stack-NtusJivt.js";import{g as fe,h as pe,l as b,m as me,n as he,p as ge,t as _e,u as ve}from"./DocPage-BUvZl8IZ.js";var x,S,C,w,T,E;function D(){return(D=e((()=>{u(),x=t(),a(),S=`(prefers-color-scheme: dark)`,C=e=>{if(typeof window>`u`||!window.matchMedia)return()=>{};let t=window.matchMedia(S);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},w=()=>()=>{},T=()=>`light`,E=(e=`auto`)=>{let[t,n]=(0,x.useState)(e),[i,a]=(0,x.useState)(e);e!==i&&(a(e),n(e));let o=t===`auto`||t===`system`||r(t),s=(0,x.useSyncExternalStore)(o?C:w,ee,T),c=(0,x.useContext)(l)!==null;return(0,x.useEffect)(()=>{c||te(t,s)},[c,t,s]),[t,n,s]}})))()}var O,k;function A(){return(A=e((()=>{re(),u(),O=t(),k=(e={language:`en`})=>{let[t,n]=(0,O.useState)(e),[r,i]=(0,O.useState)(e.language);e.language!==r&&(i(e.language),n({language:e.language}));let a=(0,O.useContext)(l)!==null;return(0,O.useEffect)(()=>{a||ae(t.language??`en`)},[a,t.language]),[t,n]}})))()}function ye(e={}){let{isOpen:t,defaultIsOpen:n,onChange:r}=e,[i,a]=s({value:t,defaultValue:n??!1,onChange:r,name:`useDisclosure`,prop:`isOpen`,defaultProp:`defaultIsOpen`});return{isOpen:i,onOpen:(0,j.useCallback)(()=>a(!0),[a]),onClose:(0,j.useCallback)(()=>a(!1),[a]),onToggle:(0,j.useCallback)(()=>a(e=>!e),[a])}}var j;function M(){return(M=e((()=>{o(),j=t()})))()}function N(){let{theme:e=`auto`}=ue(),[t,n,r]=E(e);return(0,P.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,P.jsxs)(`div`,{role:`group`,"aria-label":`Theme`,style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[F.map(e=>(0,P.jsx)(d,{size:`small`,color:e===t?`primary`:`neutral`,variant:e===t?`solid`:`outline`,"aria-pressed":e===t,onClick:()=>n(e),children:String(e)},String(e))),(0,P.jsx)(d,{size:`small`,color:`neutral`,variant:`ghost`,onClick:()=>n(e),children:`Reset`})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`theme:`,` `,(0,P.jsx)(h,{color:`primary`,children:typeof t==`string`?t:`custom`}),` `,`systemTheme: `,(0,P.jsx)(h,{color:`info`,children:r})]}),(0,P.jsx)(_,{theme:t,children:(0,P.jsx)(`div`,{style:{padding:16,borderRadius:8,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`},children:(0,P.jsxs)(v,{gap:4,wrap:!0,children:[(0,P.jsx)(d,{color:`primary`,children:`Primary`}),(0,P.jsx)(d,{color:`neutral`,variant:`outline`,children:`Secondary`}),(0,P.jsx)(h,{color:`success`,children:`preview`})]})})})]})}var P,F;function I(){return(I=e((()=>{f(),g(),y(),m(),D(),P=n(),F=[`auto`,`light`,`dark`,`github-dark`]})))()}function be(){let e=ye({defaultIsOpen:!0});return(0,L.jsxs)(de,{gap:4,children:[(0,L.jsxs)(v,{gap:4,wrap:!0,children:[(0,L.jsx)(d,{size:`small`,color:`primary`,onClick:e.onToggle,children:`Toggle`}),(0,L.jsx)(d,{size:`small`,color:`neutral`,variant:`outline`,onClick:e.onOpen,children:`Open`}),(0,L.jsx)(d,{size:`small`,color:`neutral`,variant:`outline`,onClick:e.onClose,children:`Close`}),`isOpen:`,` `,(0,L.jsx)(h,{color:e.isOpen?`success`:`info`,children:String(e.isOpen)})]}),e.isOpen&&(0,L.jsxs)(p,{color:`info`,title:`Details`,className:i(`disclosure-panel`,e.isOpen&&`is-open`),children:[`className = "`,i(`disclosure-panel`,e.isOpen&&`is-open`),`"`]})]})}var L;function R(){return(R=e((()=>{le(),f(),a(),y(),m(),M(),L=n()})))()}function xe(){let{t:e,language:t}=oe();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`useI18n().language: `,(0,z.jsx)(h,{color:`primary`,children:t}),` `,B,`:`,` `,(0,z.jsx)(h,{color:`info`,children:e(B)})]}),(0,z.jsx)(ce,{size:`small`})]})}function Se(){let[e,t]=k({language:`en`});return(0,z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,z.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:V.map(n=>(0,z.jsx)(d,{size:`small`,color:n===e.language?`primary`:`neutral`,variant:n===e.language?`solid`:`outline`,"aria-pressed":n===e.language,onClick:()=>t({language:n}),children:n},n))}),(0,z.jsx)(_,{locale:e,children:(0,z.jsx)(xe,{})})]})}var z,B,V;function H(){return(H=e((()=>{f(),g(),se(),m(),ie(),A(),z=n(),B=`avatar.default`,V=[`en`,`zh`,`ja`,`fr`]})))()}var U;function W(){return(W=e((()=>{U=`import {
  Button,
  ConfigProvider,
  HStack,
  Tag,
  type Theme,
  useAutoTheme,
  useConfig,
} from "@minerva/lib-core";

const OPTIONS: Theme[] = ["auto", "light", "dark", "github-dark"];

// Inside a ConfigProvider (this site has one at the root) useAutoTheme only
// manages the state: the root provider owns <html>. The chosen theme is
// applied to the preview below with a nested, scoped ConfigProvider.
export default function UseAutoThemeDemo() {
  const { theme: appTheme = "auto" } = useConfig();
  const [theme, setTheme, systemTheme] = useAutoTheme(appTheme);

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
            color={option === theme ? "primary" : "neutral"}
            variant={option === theme ? "solid" : "outline"}
            aria-pressed={option === theme}
            onClick={() => setTheme(option)}
          >
            {String(option)}
          </Button>
        ))}
        <Button
          size="small"
          color="neutral"
          variant="ghost"
          onClick={() => setTheme(appTheme)}
        >
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
        <Tag color="primary">
          {typeof theme === "string" ? theme : "custom"}
        </Tag>{" "}
        systemTheme: <Tag color="info">{systemTheme}</Tag>
      </div>
      <ConfigProvider theme={theme}>
        <div
          style={{
            padding: 16,
            borderRadius: 8,
            border: "1px solid var(--border-color)",
            background: "var(--background-color)",
            color: "var(--text-color)",
          }}
        >
          <HStack gap={4} wrap>
            <Button color="primary">Primary</Button>
            <Button color="neutral" variant="outline">
              Secondary
            </Button>
            <Tag color="success">preview</Tag>
          </HStack>
        </div>
      </ConfigProvider>
    </div>
  );
}
`})))()}var G;function K(){return(K=e((()=>{G=`import {
  Alert,
  Button,
  cn,
  HStack,
  Tag,
  useDisclosure,
  VStack,
} from "@minerva/lib-core";

// useDisclosure keeps an open / closed state (uncontrolled here; pass isOpen
// and onChange to control it). cn joins class names and skips falsy values.
export default function UseDisclosureDemo() {
  const panel = useDisclosure({ defaultIsOpen: true });

  return (
    <VStack gap={4}>
      <HStack gap={4} wrap>
        <Button size="small" color="primary" onClick={panel.onToggle}>
          Toggle
        </Button>
        <Button
          size="small"
          color="neutral"
          variant="outline"
          onClick={panel.onOpen}
        >
          Open
        </Button>
        <Button
          size="small"
          color="neutral"
          variant="outline"
          onClick={panel.onClose}
        >
          Close
        </Button>
        isOpen:{" "}
        <Tag color={panel.isOpen ? "success" : "info"}>
          {String(panel.isOpen)}
        </Tag>
      </HStack>
      {panel.isOpen && (
        <Alert
          color="info"
          title="Details"
          className={cn("disclosure-panel", panel.isOpen && "is-open")}
        >
          className = &quot;{cn("disclosure-panel", panel.isOpen && "is-open")}
          &quot;
        </Alert>
      )}
    </VStack>
  );
}
`})))()}var q;function J(){return(J=e((()=>{q=`import {
  Button,
  ConfigProvider,
  Empty,
  Tag,
  useI18n,
  useLocale,
  type SupportedLanguage,
} from "@minerva/lib-core";

// a key from lib-core's built-in translations
const AVATAR_KEY = "avatar.default";
const LANGUAGES: SupportedLanguage[] = ["en", "zh", "ja", "fr"];

function Preview() {
  // t() translates lib-core's own strings with its built-in translator,
  // in the language of the closest ConfigProvider
  const { t, language } = useI18n();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
        }}
      >
        useI18n().language: <Tag color="primary">{language}</Tag> {AVATAR_KEY}:{" "}
        <Tag color="info">{t(AVATAR_KEY)}</Tag>
      </div>
      {/* built-in component labels follow the language too */}
      <Empty size="small" />
    </>
  );
}

// Inside a ConfigProvider (this site has one at the root) useLocale only
// manages the state: the root provider owns lib-core's global language. The
// chosen locale is applied to the preview with a nested ConfigProvider.
export default function UseLocaleDemo() {
  const [locale, setLocale] = useLocale({ language: "en" });

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
            color={language === locale.language ? "primary" : "neutral"}
            variant={language === locale.language ? "solid" : "outline"}
            aria-pressed={language === locale.language}
            onClick={() => setLocale({ language })}
          >
            {language}
          </Button>
        ))}
      </div>
      <ConfigProvider locale={locale}>
        <Preview />
      </ConfigProvider>
    </div>
  );
}
`})))()}var Y,X,Z,Q;function $(){return($=e((()=>{I(),R(),H(),W(),K(),J(),t(),c(),fe(),he(),ve(),me(),Y=n(),X=ge(Object.assign({"./demos/use-auto-theme.tsx":N,"./demos/use-disclosure.tsx":be,"./demos/use-locale.tsx":Se}),Object.assign({"./demos/use-auto-theme.tsx":U,"./demos/use-disclosure.tsx":G,"./demos/use-locale.tsx":q})),Z=`import { useAutoTheme, useLocale } from "@minerva/lib-core";

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
}`,Q=()=>{let{t:e}=ne(),t=[{name:`useAutoTheme`,signature:`(initialTheme?: Theme) => [theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>, systemTheme: "light" | "dark"]`,description:e(`docs.hooks.reference.useAutoTheme`)},{name:`useLocale`,signature:`(initialLocale?: Locale) => [locale: Locale, setLocale: Dispatch<SetStateAction<Locale>>]`,description:e(`docs.hooks.reference.useLocale`)},{name:`useI18n`,signature:`() => { t: (key: string, options?: TranslateOptions) => string; language: SupportedLanguage }`,description:e(`docs.hooks.reference.useI18n`)},{name:`useDisclosure`,signature:`(props?: { isOpen?: boolean; defaultIsOpen?: boolean; onChange?: (isOpen: boolean) => void }) => { isOpen: boolean; onOpen: () => void; onClose: () => void; onToggle: () => void }`,description:e(`docs.hooks.reference.useDisclosure`)},{name:`cn`,signature:`(...inputs: ClassValue[]) => string`,description:e(`docs.hooks.reference.cn`)}],n=(0,Y.jsxs)(`section`,{className:b.section,"aria-labelledby":`reference`,children:[(0,Y.jsx)(`h2`,{id:`reference`,children:e(`docs.hooks.reference.title`)}),(0,Y.jsx)(`p`,{className:b.prose,children:e(`docs.hooks.reference.text`)}),(0,Y.jsx)(`div`,{className:b.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.hooks.reference.title`),children:(0,Y.jsxs)(`table`,{className:b.propsTable,children:[(0,Y.jsx)(`thead`,{children:(0,Y.jsxs)(`tr`,{children:[(0,Y.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.hook`)}),(0,Y.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.signature`)}),(0,Y.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,Y.jsx)(`tbody`,{children:t.map(e=>(0,Y.jsxs)(`tr`,{children:[(0,Y.jsx)(`th`,{scope:`row`,children:(0,Y.jsx)(`code`,{className:b.propName,children:e.name})}),(0,Y.jsx)(`td`,{children:(0,Y.jsx)(`code`,{className:b.propType,children:e.signature})}),(0,Y.jsx)(`td`,{children:e.description})]},e.name))})]})}),(0,Y.jsx)(`p`,{className:b.callout,children:e(`docs.hooks.reference.global`)})]});return(0,Y.jsx)(_e,{id:`hooks`,demos:X,intro:n,children:(0,Y.jsxs)(`section`,{className:b.section,"aria-labelledby":`standalone`,children:[(0,Y.jsx)(`h2`,{id:`standalone`,children:e(`docs.hooks.standalone.title`)}),(0,Y.jsx)(`p`,{className:b.prose,children:e(`docs.hooks.standalone.text`)}),(0,Y.jsx)(pe,{code:Z,language:`tsx`})]})})}})))()}$();export{Q as default};