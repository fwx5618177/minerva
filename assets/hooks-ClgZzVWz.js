import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{_ as r,l as i,m as a,n as o,t as s}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{i as c,r as l}from"./iconBase-DWTUFqgC.js";import{At as u,E as d,Ht as f,L as p,T as m,fn as h,ft as g,wn as _}from"./dist-BWNqkmth.js";import{a as v,c as y,l as b,n as x,o as S,s as C,t as w,u as T}from"./DocPage-DGOZswYH.js";function E(){let{theme:e=`auto`}=a(),[t,n,r]=g(e);return(0,D.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,D.jsxs)(`div`,{role:`group`,"aria-label":`Theme`,style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[O.map(e=>(0,D.jsx)(s,{size:`small`,variant:e===t?`primary`:`secondary`,"aria-pressed":e===t,onClick:()=>n(e),children:String(e)},String(e))),(0,D.jsx)(s,{size:`small`,variant:`back`,onClick:()=>n(e),children:`Reset`})]}),(0,D.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`theme:`,` `,(0,D.jsx)(_,{variant:`primary`,children:typeof t==`string`?t:`custom`}),` `,`systemTheme: `,(0,D.jsx)(_,{variant:`info`,children:r})]}),(0,D.jsx)(o,{theme:t,children:(0,D.jsx)(`div`,{style:{padding:16,borderRadius:8,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`},children:(0,D.jsxs)(h,{wrap:!0,align:`center`,children:[(0,D.jsx)(s,{variant:`primary`,children:`Primary`}),(0,D.jsx)(s,{variant:`secondary`,children:`Secondary`}),(0,D.jsx)(_,{variant:`success`,children:`preview`})]})})})]})}var D,O;function k(){return(k=e((()=>{f(),D=n(),O=[`auto`,`light`,`dark`,`github-dark`]})))()}function A(){let e=p({defaultIsOpen:!0});return(0,j.jsxs)(h,{direction:`vertical`,size:`medium`,style:{width:`100%`},children:[(0,j.jsxs)(h,{wrap:!0,align:`center`,children:[(0,j.jsx)(s,{size:`small`,variant:`primary`,onClick:e.onToggle,children:`Toggle`}),(0,j.jsx)(s,{size:`small`,variant:`secondary`,onClick:e.onOpen,children:`Open`}),(0,j.jsx)(s,{size:`small`,variant:`secondary`,onClick:e.onClose,children:`Close`}),`isOpen:`,` `,(0,j.jsx)(_,{variant:e.isOpen?`success`:`info`,children:String(e.isOpen)})]}),e.isOpen&&(0,j.jsxs)(u,{variant:`info`,title:`Details`,className:r(`disclosure-panel`,e.isOpen&&`is-open`),children:[`className = "`,r(`disclosure-panel`,e.isOpen&&`is-open`),`"`]})]})}var j;function M(){return(M=e((()=>{f(),j=n()})))()}function N(){let{t:e,language:t}=i();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`useI18n().language: `,(0,F.jsx)(_,{variant:`primary`,children:t}),` `,I,`: `,(0,F.jsx)(_,{variant:`info`,children:e(I)})]}),(0,F.jsx)(d,{type:`online`,showLabel:!0})]})}function P(){let[e,t]=m({language:`en`});return(0,F.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,F.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:L.map(n=>(0,F.jsx)(s,{size:`small`,variant:n===e.language?`primary`:`secondary`,"aria-pressed":n===e.language,onClick:()=>t({language:n}),children:n},n))}),(0,F.jsx)(o,{locale:e,children:(0,F.jsx)(N,{})})]})}var F,I,L;function R(){return(R=e((()=>{f(),F=n(),I=`avatar.default`,L=[`en`,`zh`,`ja`,`fr`]})))()}var z;function B(){return(B=e((()=>{z=`import {
  Button,
  ConfigProvider,
  Space,
  Tag,
  useAutoTheme,
  useConfig,
  type Theme,
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
          <Space wrap align="center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Tag variant="success">preview</Tag>
          </Space>
        </div>
      </ConfigProvider>
    </div>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import {
  Alert,
  Button,
  Space,
  Tag,
  cn,
  useDisclosure,
} from "@minerva/lib-core";

// useDisclosure keeps an open / closed state (uncontrolled here; pass isOpen
// and onChange to control it). cn joins class names and skips falsy values.
export default function UseDisclosureDemo() {
  const panel = useDisclosure({ defaultIsOpen: true });

  return (
    <Space direction="vertical" size="medium" style={{ width: "100%" }}>
      <Space wrap align="center">
        <Button size="small" variant="primary" onClick={panel.onToggle}>
          Toggle
        </Button>
        <Button size="small" variant="secondary" onClick={panel.onOpen}>
          Open
        </Button>
        <Button size="small" variant="secondary" onClick={panel.onClose}>
          Close
        </Button>
        isOpen:{" "}
        <Tag variant={panel.isOpen ? "success" : "info"}>
          {String(panel.isOpen)}
        </Tag>
      </Space>
      {panel.isOpen && (
        <Alert
          variant="info"
          title="Details"
          className={cn("disclosure-panel", panel.isOpen && "is-open")}
        >
          className = &quot;{cn("disclosure-panel", panel.isOpen && "is-open")}
          &quot;
        </Alert>
      )}
    </Space>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import {
  Button,
  ConfigProvider,
  StatusIndicator,
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
        useI18n().language: <Tag variant="primary">{language}</Tag> {AVATAR_KEY}
        : <Tag variant="info">{t(AVATAR_KEY)}</Tag>
      </div>
      {/* built-in component labels follow the language too */}
      <StatusIndicator type="online" showLabel />
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
            variant={language === locale.language ? "primary" : "secondary"}
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
`})))()}var G,K,q,J,Y;function X(){return(X=e((()=>{k(),M(),R(),B(),H(),W(),t(),l(),T(),x(),S(),y(),G=n(),K=C(Object.assign({"./demos/use-auto-theme.tsx":E,"./demos/use-disclosure.tsx":A,"./demos/use-locale.tsx":P}),Object.assign({"./demos/use-auto-theme.tsx":z,"./demos/use-disclosure.tsx":V,"./demos/use-locale.tsx":U})),q=`import { useAutoTheme, useLocale } from "@minerva/lib-core";

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
}`,J=`import * as Dialog from "@radix-ui/react-dialog";
import { useDialogFocusReturn } from "@minerva/lib-core";

// A dialog opened from state (no Radix Trigger): focus goes back to the
// element that was focused before opening, e.g. a row's menu item.
function EditDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { open, contentRef, onCloseAutoFocus } = useDialogFocusReturn(isOpen);
  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Content ref={contentRef} onCloseAutoFocus={onCloseAutoFocus}>
          ...
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}`,Y=()=>{let{t:e}=c(),t=[{name:`useAutoTheme`,signature:`(initialTheme?: Theme) => [theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>, systemTheme: "light" | "dark"]`,description:e(`docs.hooks.reference.useAutoTheme`)},{name:`useLocale`,signature:`(initialLocale?: Locale) => [locale: Locale, setLocale: Dispatch<SetStateAction<Locale>>]`,description:e(`docs.hooks.reference.useLocale`)},{name:`useI18n`,signature:`() => { t: TFunction; i18n: i18n }`,description:e(`docs.hooks.reference.useI18n`)},{name:`useDisclosure`,signature:`(props?: { isOpen?: boolean; defaultIsOpen?: boolean; onChange?: (isOpen: boolean) => void }) => { isOpen: boolean; onOpen: () => void; onClose: () => void; onToggle: () => void }`,description:e(`docs.hooks.reference.useDisclosure`)},{name:`useDialogFocusReturn`,signature:`(isOpen: boolean) => { open: boolean; contentRef: RefObject<HTMLDivElement | null>; onCloseAutoFocus: (event: Event) => void }`,description:e(`docs.hooks.reference.useDialogFocusReturn`)},{name:`cn`,signature:`(...inputs: ClassValue[]) => string`,description:e(`docs.hooks.reference.cn`)}],n=(0,G.jsxs)(`section`,{className:v.section,"aria-labelledby":`reference`,children:[(0,G.jsx)(`h2`,{id:`reference`,children:e(`docs.hooks.reference.title`)}),(0,G.jsx)(`p`,{className:v.prose,children:e(`docs.hooks.reference.text`)}),(0,G.jsx)(`div`,{className:v.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.hooks.reference.title`),children:(0,G.jsxs)(`table`,{className:v.propsTable,children:[(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.hook`)}),(0,G.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.signature`)}),(0,G.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,G.jsx)(`tbody`,{children:t.map(e=>(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`row`,children:(0,G.jsx)(`code`,{className:v.propName,children:e.name})}),(0,G.jsx)(`td`,{children:(0,G.jsx)(`code`,{className:v.propType,children:e.signature})}),(0,G.jsx)(`td`,{children:e.description})]},e.name))})]})}),(0,G.jsx)(`p`,{className:v.callout,children:e(`docs.hooks.reference.global`)})]});return(0,G.jsxs)(w,{id:`hooks`,demos:K,intro:n,children:[(0,G.jsxs)(`section`,{className:v.section,"aria-labelledby":`standalone`,children:[(0,G.jsx)(`h2`,{id:`standalone`,children:e(`docs.hooks.standalone.title`)}),(0,G.jsx)(`p`,{className:v.prose,children:e(`docs.hooks.standalone.text`)}),(0,G.jsx)(b,{code:q,language:`tsx`})]}),(0,G.jsxs)(`section`,{className:v.section,"aria-labelledby":`focus-return`,children:[(0,G.jsx)(`h2`,{id:`focus-return`,children:e(`docs.hooks.focusReturn.title`)}),(0,G.jsx)(`p`,{className:v.prose,children:e(`docs.hooks.focusReturn.text`)}),(0,G.jsx)(b,{code:J,language:`tsx`})]})]})}})))()}X();export{Y as default};