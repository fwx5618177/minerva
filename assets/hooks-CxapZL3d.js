import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{d as r,h as i,p as a,s as o,t as s,u as c}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{i as l,r as u}from"./iconBase-DGdXj6CY.js";import{Rt as d,V as f,hn as p}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as m,i as h,m as g,n as _}from"./dist-CcA3uxH5.js";import{a as v,c as y,l as b,n as x,o as S,s as C,t as w,u as T}from"./DocPage-Dm1vTl9w.js";function E(){let{theme:e=`auto`}=c(),[t,n,i]=h(e);return(0,D.useEffect)(()=>()=>o(e),[e]),(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,O.jsxs)(`div`,{role:`group`,"aria-label":`Theme`,style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[k.map(e=>(0,O.jsx)(r,{size:`small`,variant:e===t?`primary`:`secondary`,"aria-pressed":e===t,onClick:()=>n(e),children:String(e)},String(e))),(0,O.jsx)(r,{size:`small`,variant:`back`,onClick:()=>n(e),children:`Reset`})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`theme:`,` `,(0,O.jsx)(p,{variant:`primary`,children:typeof t==`string`?t:`custom`}),` `,`systemTheme: `,(0,O.jsx)(p,{variant:`info`,children:i})]})]})}var D,O,k;function A(){return(A=e((()=>{D=t(),m(),O=n(),k=[`auto`,`light`,`dark`,`github-dark`]})))()}function j(){let e=f({defaultIsOpen:!0});return(0,M.jsxs)(g,{direction:`vertical`,size:`medium`,style:{width:`100%`},children:[(0,M.jsxs)(g,{wrap:!0,align:`center`,children:[(0,M.jsx)(r,{size:`small`,variant:`primary`,onClick:e.onToggle,children:`Toggle`}),(0,M.jsx)(r,{size:`small`,variant:`secondary`,onClick:e.onOpen,children:`Open`}),(0,M.jsx)(r,{size:`small`,variant:`secondary`,onClick:e.onClose,children:`Close`}),`isOpen:`,` `,(0,M.jsx)(p,{variant:e.isOpen?`success`:`info`,children:String(e.isOpen)})]}),e.isOpen&&(0,M.jsxs)(d,{variant:`info`,title:`Details`,className:a(`disclosure-panel`,e.isOpen&&`is-open`),children:[`className = "`,a(`disclosure-panel`,e.isOpen&&`is-open`),`"`]})]})}var M;function N(){return(N=e((()=>{m(),M=n()})))()}function P(){let[e,t]=s({language:`en`}),{t:n,i18n:a}=i();return(0,F.useEffect)(()=>()=>{a.changeLanguage(`en`)},[a]),(0,I.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,I.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:R.map(n=>(0,I.jsx)(r,{size:`small`,variant:n===e.language?`primary`:`secondary`,"aria-pressed":n===e.language,onClick:()=>t({language:n}),children:n},n))}),(0,I.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`i18n.language: `,(0,I.jsx)(p,{variant:`primary`,children:a.language}),` `,L,`: `,(0,I.jsx)(p,{variant:`info`,children:n(L)})]}),(0,I.jsx)(_,{type:`online`,showLabel:!0})]})}var F,I,L,R;function z(){return(z=e((()=>{F=t(),m(),I=n(),L=`avatar.default`,R=[`en`,`zh`,`fr`]})))()}var B;function V(){return(V=e((()=>{B=`import { useEffect } from "react";
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
`})))()}var H;function U(){return(U=e((()=>{H=`import {
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
`})))()}var W;function G(){return(G=e((()=>{W=`import { useEffect } from "react";
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
`})))()}var K,q,J,Y,X;function Z(){return(Z=e((()=>{A(),N(),z(),V(),U(),G(),t(),u(),T(),x(),S(),y(),K=n(),q=C(Object.assign({"./demos/use-auto-theme.tsx":E,"./demos/use-disclosure.tsx":j,"./demos/use-locale.tsx":P}),Object.assign({"./demos/use-auto-theme.tsx":B,"./demos/use-disclosure.tsx":H,"./demos/use-locale.tsx":W})),J=`import { useAutoTheme, useLocale } from "@minerva/lib-core";

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
}`,Y=`import * as Dialog from "@radix-ui/react-dialog";
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
}`,X=()=>{let{t:e}=l(),t=[{name:`useAutoTheme`,signature:`(initialTheme?: Theme) => [theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>, systemTheme: "light" | "dark"]`,description:e(`docs.hooks.reference.useAutoTheme`)},{name:`useLocale`,signature:`(initialLocale?: Locale) => [locale: Locale, setLocale: Dispatch<SetStateAction<Locale>>]`,description:e(`docs.hooks.reference.useLocale`)},{name:`useI18n`,signature:`() => { t: TFunction; i18n: i18n }`,description:e(`docs.hooks.reference.useI18n`)},{name:`useDisclosure`,signature:`(props?: { isOpen?: boolean; defaultIsOpen?: boolean; onChange?: (isOpen: boolean) => void }) => { isOpen: boolean; onOpen: () => void; onClose: () => void; onToggle: () => void }`,description:e(`docs.hooks.reference.useDisclosure`)},{name:`useDialogFocusReturn`,signature:`(isOpen: boolean) => { open: boolean; contentRef: RefObject<HTMLDivElement | null>; onCloseAutoFocus: (event: Event) => void }`,description:e(`docs.hooks.reference.useDialogFocusReturn`)},{name:`cn`,signature:`(...inputs: ClassValue[]) => string`,description:e(`docs.hooks.reference.cn`)}],n=(0,K.jsxs)(`section`,{className:v.section,"aria-labelledby":`reference`,children:[(0,K.jsx)(`h2`,{id:`reference`,children:e(`docs.hooks.reference.title`)}),(0,K.jsx)(`p`,{className:v.prose,children:e(`docs.hooks.reference.text`)}),(0,K.jsx)(`div`,{className:v.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.hooks.reference.title`),children:(0,K.jsxs)(`table`,{className:v.propsTable,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.hook`)}),(0,K.jsx)(`th`,{scope:`col`,children:e(`docs.hooks.reference.signature`)}),(0,K.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,K.jsx)(`tbody`,{children:t.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`row`,children:(0,K.jsx)(`code`,{className:v.propName,children:e.name})}),(0,K.jsx)(`td`,{children:(0,K.jsx)(`code`,{className:v.propType,children:e.signature})}),(0,K.jsx)(`td`,{children:e.description})]},e.name))})]})}),(0,K.jsx)(`p`,{className:v.callout,children:e(`docs.hooks.reference.global`)})]});return(0,K.jsxs)(w,{id:`hooks`,demos:q,intro:n,children:[(0,K.jsxs)(`section`,{className:v.section,"aria-labelledby":`standalone`,children:[(0,K.jsx)(`h2`,{id:`standalone`,children:e(`docs.hooks.standalone.title`)}),(0,K.jsx)(`p`,{className:v.prose,children:e(`docs.hooks.standalone.text`)}),(0,K.jsx)(b,{code:J,language:`tsx`})]}),(0,K.jsxs)(`section`,{className:v.section,"aria-labelledby":`focus-return`,children:[(0,K.jsx)(`h2`,{id:`focus-return`,children:e(`docs.hooks.focusReturn.title`)}),(0,K.jsx)(`p`,{className:v.prose,children:e(`docs.hooks.focusReturn.text`)}),(0,K.jsx)(b,{code:Y,language:`tsx`})]})]})}})))()}Z();export{X as default};