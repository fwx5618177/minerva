import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{a as r,f as i,i as a,l as o,s}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{i as c,r as l}from"./iconBase-BbuKeGtN.js";import{D as u,N as d,Rt as f,Wt as p,_ as m,en as h,hn as g,kt as _,st as v}from"./dist-DkgrNLMS.js";import{a as y,c as b,l as x,n as S,o as C,s as w,t as T,u as E}from"./DocPage-Bnv84vTs.js";function D(){let{theme:e=`auto`}=s(),[t,n,r]=_(e);return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,O.jsxs)(`div`,{role:`group`,"aria-label":`Theme`,style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[k.map(e=>(0,O.jsx)(i,{size:`small`,color:e===t?`primary`:`neutral`,variant:e===t?`solid`:`outline`,"aria-pressed":e===t,onClick:()=>n(e),children:String(e)},String(e))),(0,O.jsx)(i,{size:`small`,color:`neutral`,variant:`ghost`,onClick:()=>n(e),children:`Reset`})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`theme:`,` `,(0,O.jsx)(g,{color:`primary`,children:typeof t==`string`?t:`custom`}),` `,`systemTheme: `,(0,O.jsx)(g,{color:`info`,children:r})]}),(0,O.jsx)(o,{theme:t,children:(0,O.jsx)(`div`,{style:{padding:16,borderRadius:8,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`},children:(0,O.jsxs)(m,{gap:4,wrap:!0,children:[(0,O.jsx)(i,{color:`primary`,children:`Primary`}),(0,O.jsx)(i,{color:`neutral`,variant:`outline`,children:`Secondary`}),(0,O.jsx)(g,{color:`success`,children:`preview`})]})})})]})}var O,k;function A(){return(A=e((()=>{f(),O=n(),k=[`auto`,`light`,`dark`,`github-dark`]})))()}function j(){let e=p({defaultIsOpen:!0});return(0,M.jsxs)(u,{gap:4,children:[(0,M.jsxs)(m,{gap:4,wrap:!0,children:[(0,M.jsx)(i,{size:`small`,color:`primary`,onClick:e.onToggle,children:`Toggle`}),(0,M.jsx)(i,{size:`small`,color:`neutral`,variant:`outline`,onClick:e.onOpen,children:`Open`}),(0,M.jsx)(i,{size:`small`,color:`neutral`,variant:`outline`,onClick:e.onClose,children:`Close`}),`isOpen:`,` `,(0,M.jsx)(g,{color:e.isOpen?`success`:`info`,children:String(e.isOpen)})]}),e.isOpen&&(0,M.jsxs)(v,{color:`info`,title:`Details`,className:r(`disclosure-panel`,e.isOpen&&`is-open`),children:[`className = "`,r(`disclosure-panel`,e.isOpen&&`is-open`),`"`]})]})}var M;function N(){return(N=e((()=>{f(),M=n()})))()}function P(){let{t:e,language:t}=a();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`useI18n().language: `,(0,I.jsx)(g,{color:`primary`,children:t}),` `,L,`:`,` `,(0,I.jsx)(g,{color:`info`,children:e(L)})]}),(0,I.jsx)(d,{size:`small`})]})}function F(){let[e,t]=h({language:`en`});return(0,I.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,I.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:R.map(n=>(0,I.jsx)(i,{size:`small`,color:n===e.language?`primary`:`neutral`,variant:n===e.language?`solid`:`outline`,"aria-pressed":n===e.language,onClick:()=>t({language:n}),children:n},n))}),(0,I.jsx)(o,{locale:e,children:(0,I.jsx)(P,{})})]})}var I,L,R;function z(){return(z=e((()=>{f(),I=n(),L=`avatar.default`,R=[`en`,`zh`,`ja`,`fr`]})))()}var B;function V(){return(V=e((()=>{B=`import {
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
`})))()}var H;function U(){return(U=e((()=>{H=`import {
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
`})))()}var W;function G(){return(G=e((()=>{W=`import {
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
  // t() translates lib-core's own strings with its private i18next instance,
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
`})))()}var K,q,J,Y;function X(){return(X=e((()=>{A(),N(),z(),V(),U(),G(),t(),l(),E(),S(),C(),b(),K=n(),q=w(Object.assign({"./demos/use-auto-theme.tsx":D,"./demos/use-disclosure.tsx":j,"./demos/use-locale.tsx":F}),Object.assign({"./demos/use-auto-theme.tsx":B,"./demos/use-disclosure.tsx":H,"./demos/use-locale.tsx":W})),J=`import { useAutoTheme, useLocale } from "@minerva/lib-core";

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
}`,Y=()=>{let{t:e}=c(),t=[{name:`useAutoTheme`,signature:`(initialTheme?: Theme) => [theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>, systemTheme: "light" | "dark"]`,description:e(`docs.hooks.reference.useAutoTheme`)},{name:`useLocale`,signature:`(initialLocale?: Locale) => [locale: Locale, setLocale: Dispatch<SetStateAction<Locale>>]`,description:e(`docs.hooks.reference.useLocale`)},{name:`useI18n`,signature:`() => { t: TFunction; i18n: i18n }`,description:e(`docs.hooks.reference.useI18n`)},{name:`useDisclosure`,signature:`(props?: { isOpen?: boolean; defaultIsOpen?: boolean; onChange?: (isOpen: boolean) => void }) => { isOpen: boolean; onOpen: () => void; onClose: () => void; onToggle: () => void }`,description:e(`docs.hooks.reference.useDisclosure`)},{name:`cn`,signature:`(...inputs: ClassValue[]) => string`,description:e(`docs.hooks.reference.cn`)}],n=(0,K.jsxs)(`section`,{className:y.section,"aria-labelledby":`reference`,children:[(0,K.jsx)(`h2`,{id:`reference`,children:e(`docs.hooks.reference.title`)}),(0,K.jsx)(`p`,{className:y.prose,children:e(`docs.hooks.reference.text`)}),(0,K.jsx)(`div`,{className:y.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.hooks.reference.title`),children:(0,K.jsxs)(`table`,{className:y.propsTable,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.hook`)}),(0,K.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.signature`)}),(0,K.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,K.jsx)(`tbody`,{children:t.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`row`,children:(0,K.jsx)(`code`,{className:y.propName,children:e.name})}),(0,K.jsx)(`td`,{children:(0,K.jsx)(`code`,{className:y.propType,children:e.signature})}),(0,K.jsx)(`td`,{children:e.description})]},e.name))})]})}),(0,K.jsx)(`p`,{className:y.callout,children:e(`docs.hooks.reference.global`)})]});return(0,K.jsx)(T,{id:`hooks`,demos:q,intro:n,children:(0,K.jsxs)(`section`,{className:y.section,"aria-labelledby":`standalone`,children:[(0,K.jsx)(`h2`,{id:`standalone`,children:e(`docs.hooks.standalone.title`)}),(0,K.jsx)(`p`,{className:y.prose,children:e(`docs.hooks.standalone.text`)}),(0,K.jsx)(x,{code:J,language:`tsx`})]})})}})))()}X();export{Y as default};