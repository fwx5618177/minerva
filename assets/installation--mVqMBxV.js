import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{c as t,g as n,n as r,t as i}from"./react-vendor-EhfBFkcC.js";import{i as a,l as o,n as s,r as c,t as l,u}from"./DocPage-HgWiqH91.js";import{Q as d,Z as f}from"./sample-DbiIiloN.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),f(),t(),u(),s(),a(),p=i(),m=`pnpm add @minerva/lib-core react react-dom`,h=`npm install @minerva/lib-core react react-dom`,g=`yarn add @minerva/lib-core react react-dom`,_=`// main.tsx (your entry file) — import the stylesheet exactly once
import "@minerva/lib-core/style.css";`,v=`// optional, in your own .scss: long-form typography mixins
@use "@minerva/lib-core/prose.scss" as prose;`,y=`// main.tsx — instead of "@minerva/lib-core/style.css":
import "@minerva/lib-core/styles/tokens.css"; // design tokens, once
import "@minerva/lib-core/styles/button.css";
import "@minerva/lib-core/styles/input.css";
import "@minerva/lib-core/styles/modal.css";`,b=`pnpm add @monaco-editor/react monaco-editor`,x=`import { MonacoCodeEditor } from "@minerva/lib-core/monaco";`,S=`import { createRoot } from "react-dom/client";
import { Button, ConfigProvider, ToastProvider, toast } from "@minerva/lib-core";
import "@minerva/lib-core/style.css";

function App() {
  return (
    // theme: "auto" (default) | "light" | "dark" | "github-dark" | custom
    <ConfigProvider theme="auto" locale={{ language: "en" }}>
      {/* renders toast() calls inside the theme scope */}
      <ToastProvider>
        <Button color="primary" onClick={() => toast.success("Hello!")}>
          Say hello
        </Button>
      </ToastProvider>
    </ConfigProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);`,C=`pnpm add @minerva/lib-web-components`,w=`// every element at once...
import "@minerva/lib-web-components";
// ...or only the elements you use (each entry registers one element and its parts)
import "@minerva/lib-web-components/select";

// design tokens, once (already included in @minerva/lib-core/style.css)
import "@minerva/lib-web-components/tokens.css";`,T=`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@minerva/lib-web-components@1/dist/tokens.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@minerva/lib-web-components@1/dist/cdn/minerva.js"><\/script>`,E=`// React 19 JSX (global.d.ts)
/// <reference types="@minerva/lib-web-components/react" />
// Svelte: ".../svelte", Solid: ".../solid"
// Vue (Volar): add "@minerva/lib-web-components/vue" to compilerOptions.types`,D=`import { themes } from "@minerva/lib-core";
import type { ButtonProps, ComponentTheme } from "@minerva/lib-core";

// every component exports its props type
const saveButton: Partial<ButtonProps> = { color: "success", size: "large" };

// themes are typed too: missing or misspelled tokens are compile errors
const brand: ComponentTheme = { ...themes.light, "primary-color": "#7c3aed" };`,O=()=>{let{t:e}=d(),t=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`requirements`,children:[(0,p.jsx)(`h2`,{id:`requirements`,children:e(`docs.installation.requirements.title`)}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`docs.installation.requirements.react`)}),(0,p.jsx)(`li`,{children:e(`docs.installation.requirements.bundler`)}),(0,p.jsx)(`li`,{children:e(`docs.installation.requirements.browsers`)})]})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`install-core`,children:[(0,p.jsx)(`h2`,{id:`install-core`,children:e(`docs.installation.core.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.core.text`)}),(0,p.jsx)(o,{code:m,language:`bash`,title:`pnpm`}),(0,p.jsx)(o,{code:h,language:`bash`,title:`npm`}),(0,p.jsx)(o,{code:g,language:`bash`,title:`yarn`}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.core.peers`)})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`styles`,children:[(0,p.jsx)(`h2`,{id:`styles`,children:e(`docs.installation.styles.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.styles.text`)}),(0,p.jsx)(o,{code:_,language:`tsx`}),(0,p.jsx)(`p`,{className:c.callout,children:e(`docs.installation.styles.note`)}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.styles.perComponent`)}),(0,p.jsx)(o,{code:y,language:`tsx`}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.styles.extras`)}),(0,p.jsx)(o,{code:v,language:`scss`})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`optional-entries`,children:[(0,p.jsx)(`h2`,{id:`optional-entries`,children:e(`docs.installation.optional.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.optional.text`)}),(0,p.jsx)(o,{code:b,language:`bash`}),(0,p.jsx)(o,{code:x,language:`tsx`}),(0,p.jsx)(`p`,{className:c.prose,children:(0,p.jsx)(r,{to:`/rsc-guide`,children:e(`docs.installation.optional.rsc`)})})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`first-app`,children:[(0,p.jsx)(`h2`,{id:`first-app`,children:e(`docs.installation.app.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.app.text`)}),(0,p.jsx)(o,{code:S,language:`tsx`}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.app.provider`)})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`install-wc`,children:[(0,p.jsx)(`h2`,{id:`install-wc`,children:e(`docs.installation.webComponents.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.webComponents.text`)}),(0,p.jsx)(o,{code:C,language:`bash`}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.webComponents.entries`)}),(0,p.jsx)(o,{code:w,language:`ts`}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.webComponents.cdn`)}),(0,p.jsx)(o,{code:T,language:`html`}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.webComponents.typings`)}),(0,p.jsx)(o,{code:E,language:`ts`}),(0,p.jsx)(`p`,{className:c.prose,children:(0,p.jsx)(r,{to:`/web-components`,children:e(`docs.installation.webComponents.more`)})})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`typescript`,children:[(0,p.jsx)(`h2`,{id:`typescript`,children:e(`docs.installation.typescript.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:e(`docs.installation.typescript.text`)}),(0,p.jsx)(o,{code:D,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`next-steps`,children:[(0,p.jsx)(`h2`,{id:`next-steps`,children:e(`docs.installation.next.title`)}),(0,p.jsxs)(`div`,{className:c.cardGrid,children:[(0,p.jsxs)(r,{to:`/introduction`,className:c.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.introduction.title`)}),(0,p.jsx)(`span`,{children:e(`docs.installation.next.introduction`)})]}),(0,p.jsxs)(r,{to:`/theming`,className:c.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.theming.title`)}),(0,p.jsx)(`span`,{children:e(`docs.installation.next.theming`)})]}),(0,p.jsxs)(r,{to:`/button`,className:c.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.button.title`)}),(0,p.jsx)(`span`,{children:e(`docs.installation.next.components`)})]})]})]})]});return(0,p.jsx)(l,{id:`installation`,intro:t})}})))()}k();export{O as default};