import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{d as a,h as ee,k as o,p as te}from"./dist-DvR9hbhy.js";import{n as s,t as c}from"./useI18n-DtQV8aM0.js";import{n as l,t as u}from"./Button-CG2pPO-r.js";import{n as ne,t as re}from"./useControllableState-NzKJCN8h.js";import{n as d,t as ie}from"./Empty-BtKnlu1O.js";import{n as ae,t as oe}from"./Alert-CoAW8rVJ.js";import{n as f,t as p}from"./Tag-QfAYQTLt.js";import{n as m,r as se,t as h}from"./Stack-CTQLvSFR.js";import{H as g,I as _,K as ce,L as le,Q as ue,R as v,U as y,W as de,Z as fe}from"./sample-Dya6Jarx.js";import{a as b,c as pe,l as x,n as me,o as he,s as ge,t as _e,u as ve}from"./DocPage-DzKszXiH.js";var S,C,w,T,E,D;function O(){return(O=e((()=>{g(),S=t(),o(),C=`(prefers-color-scheme: dark)`,w=e=>{if(typeof window>`u`||!window.matchMedia)return()=>{};let t=window.matchMedia(C);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},T=()=>()=>{},E=()=>`light`,D=(e=`auto`)=>{let[t,n]=(0,S.useState)(e),[r,i]=(0,S.useState)(e);e!==r&&(i(e),n(e));let o=t===`auto`||t===`system`||te(t),s=(0,S.useSyncExternalStore)(o?w:T,a,E),c=(0,S.useContext)(y)!==null;return(0,S.useEffect)(()=>{c||ee(t,s)},[c,t,s]),[t,n,s]}})))()}var k,A;function j(){return(j=e((()=>{ce(),g(),k=t(),A=(e={language:`en`})=>{let[t,n]=(0,k.useState)(e),[r,i]=(0,k.useState)(e.language);e.language!==r&&(i(e.language),n({language:e.language}));let a=(0,k.useContext)(y)!==null;return(0,k.useEffect)(()=>{a||de(t.language??`en`)},[a,t.language]),[t,n]}})))()}function ye(e={}){let{isOpen:t,defaultIsOpen:n=!1,onChange:r}=e,[i,a]=re({value:t,defaultValue:n,onChange:r});return{isOpen:i,onOpen:(0,M.useCallback)(()=>a(!0),[a]),onClose:(0,M.useCallback)(()=>a(!1),[a]),onToggle:(0,M.useCallback)(()=>a(e=>!e),[a])}}var M;function N(){return(N=e((()=>{ne(),M=t()})))()}function be(){let{theme:e=`auto`}=le(),[t,n,r]=D(e);return(0,P.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,P.jsxs)(`div`,{role:`group`,"aria-label":`Theme`,style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[F.map(e=>(0,P.jsx)(u,{size:`small`,color:e===t?`primary`:`neutral`,variant:e===t?`solid`:`outline`,"aria-pressed":e===t,onClick:()=>n(e),children:String(e)},String(e))),(0,P.jsx)(u,{size:`small`,color:`neutral`,variant:`ghost`,onClick:()=>n(e),children:`Reset`})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`theme:`,` `,(0,P.jsx)(f,{color:`primary`,children:typeof t==`string`?t:`custom`}),` `,`systemTheme: `,(0,P.jsx)(f,{color:`info`,children:r})]}),(0,P.jsx)(_,{theme:t,children:(0,P.jsx)(`div`,{style:{padding:16,borderRadius:8,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`},children:(0,P.jsxs)(h,{gap:4,wrap:!0,children:[(0,P.jsx)(u,{color:`primary`,children:`Primary`}),(0,P.jsx)(u,{color:`neutral`,variant:`outline`,children:`Secondary`}),(0,P.jsx)(f,{color:`success`,children:`preview`})]})})})]})}var P,F;function I(){return(I=e((()=>{l(),v(),m(),p(),O(),P=n(),F=[`auto`,`light`,`dark`,`github-dark`]})))()}function xe(){let e=ye({defaultIsOpen:!0});return(0,L.jsxs)(se,{gap:4,children:[(0,L.jsxs)(h,{gap:4,wrap:!0,children:[(0,L.jsx)(u,{size:`small`,color:`primary`,onClick:e.onToggle,children:`Toggle`}),(0,L.jsx)(u,{size:`small`,color:`neutral`,variant:`outline`,onClick:e.onOpen,children:`Open`}),(0,L.jsx)(u,{size:`small`,color:`neutral`,variant:`outline`,onClick:e.onClose,children:`Close`}),`isOpen:`,` `,(0,L.jsx)(f,{color:e.isOpen?`success`:`info`,children:String(e.isOpen)})]}),e.isOpen&&(0,L.jsxs)(ae,{color:`info`,title:`Details`,className:r(`disclosure-panel`,e.isOpen&&`is-open`),children:[`className = "`,r(`disclosure-panel`,e.isOpen&&`is-open`),`"`]})]})}var L;function R(){return(R=e((()=>{oe(),l(),i(),m(),p(),N(),L=n()})))()}function Se(){let{t:e,language:t}=c();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`useI18n().language: `,(0,z.jsx)(f,{color:`primary`,children:t}),` `,B,`:`,` `,(0,z.jsx)(f,{color:`info`,children:e(B)})]}),(0,z.jsx)(ie,{size:`small`})]})}function Ce(){let[e,t]=A({language:`en`});return(0,z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,z.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:V.map(n=>(0,z.jsx)(u,{size:`small`,color:n===e.language?`primary`:`neutral`,variant:n===e.language?`solid`:`outline`,"aria-pressed":n===e.language,onClick:()=>t({language:n}),children:n},n))}),(0,z.jsx)(_,{locale:e,children:(0,z.jsx)(Se,{})})]})}var z,B,V;function H(){return(H=e((()=>{l(),v(),d(),p(),s(),j(),z=n(),B=`avatar.default`,V=[`en`,`zh`,`ja`,`fr`]})))()}var U;function W(){return(W=e((()=>{U=`import {
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
`})))()}var Y,X,Z,Q;function $(){return($=e((()=>{I(),R(),H(),W(),K(),J(),t(),fe(),ve(),me(),he(),pe(),Y=n(),X=ge(Object.assign({"./demos/use-auto-theme.tsx":be,"./demos/use-disclosure.tsx":xe,"./demos/use-locale.tsx":Ce}),Object.assign({"./demos/use-auto-theme.tsx":U,"./demos/use-disclosure.tsx":G,"./demos/use-locale.tsx":q})),Z=`import { useAutoTheme, useLocale } from "@minerva/lib-core";

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
}`,Q=()=>{let{t:e}=ue(),t=[{name:`useAutoTheme`,signature:`(initialTheme?: Theme) => [theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>, systemTheme: "light" | "dark"]`,description:e(`docs.hooks.reference.useAutoTheme`)},{name:`useLocale`,signature:`(initialLocale?: Locale) => [locale: Locale, setLocale: Dispatch<SetStateAction<Locale>>]`,description:e(`docs.hooks.reference.useLocale`)},{name:`useI18n`,signature:`() => { t: (key: string, options?: TranslateOptions) => string; language: SupportedLanguage }`,description:e(`docs.hooks.reference.useI18n`)},{name:`useDisclosure`,signature:`(props?: { isOpen?: boolean; defaultIsOpen?: boolean; onChange?: (isOpen: boolean) => void }) => { isOpen: boolean; onOpen: () => void; onClose: () => void; onToggle: () => void }`,description:e(`docs.hooks.reference.useDisclosure`)},{name:`cn`,signature:`(...inputs: ClassValue[]) => string`,description:e(`docs.hooks.reference.cn`)}],n=(0,Y.jsxs)(`section`,{className:b.section,"aria-labelledby":`reference`,children:[(0,Y.jsx)(`h2`,{id:`reference`,children:e(`docs.hooks.reference.title`)}),(0,Y.jsx)(`p`,{className:b.prose,children:e(`docs.hooks.reference.text`)}),(0,Y.jsx)(`div`,{className:b.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.hooks.reference.title`),children:(0,Y.jsxs)(`table`,{className:b.propsTable,children:[(0,Y.jsx)(`thead`,{children:(0,Y.jsxs)(`tr`,{children:[(0,Y.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.hook`)}),(0,Y.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.signature`)}),(0,Y.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,Y.jsx)(`tbody`,{children:t.map(e=>(0,Y.jsxs)(`tr`,{children:[(0,Y.jsx)(`th`,{scope:`row`,children:(0,Y.jsx)(`code`,{className:b.propName,children:e.name})}),(0,Y.jsx)(`td`,{children:(0,Y.jsx)(`code`,{className:b.propType,children:e.signature})}),(0,Y.jsx)(`td`,{children:e.description})]},e.name))})]})}),(0,Y.jsx)(`p`,{className:b.callout,children:e(`docs.hooks.reference.global`)})]});return(0,Y.jsx)(_e,{id:`hooks`,demos:X,intro:n,children:(0,Y.jsxs)(`section`,{className:b.section,"aria-labelledby":`standalone`,children:[(0,Y.jsx)(`h2`,{id:`standalone`,children:e(`docs.hooks.standalone.title`)}),(0,Y.jsx)(`p`,{className:b.prose,children:e(`docs.hooks.standalone.text`)}),(0,Y.jsx)(x,{code:Z,language:`tsx`})]})})}})))()}$();export{Q as default};