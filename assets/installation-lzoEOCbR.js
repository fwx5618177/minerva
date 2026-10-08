import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,n,s as r,t as i}from"./react-vendor-aZSMfLKR.js";import{g as a,h as o,l as s,n as c,t as l,u}from"./DocPage-9P1WMt4D.js";import{nt as d,rt as f}from"./io5-ChQeTV8D.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{t(),d(),r(),a(),c(),u(),p=i(),m=`pnpm add @minerva/lib-core react react-dom`,h=`npm install @minerva/lib-core react react-dom`,g=`yarn add @minerva/lib-core react react-dom`,_=`// src/main.tsx — the only place that imports Minerva's CSS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@minerva/lib-core/style.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);`,v=`// app/layout.tsx — global CSS belongs in the root layout
import type { ReactNode } from "react";
import "@minerva/lib-core/style.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`,y=`// src/main.ts — register the elements and load the design tokens, once
import "@minerva/lib-web-components";
import "@minerva/lib-web-components/tokens.css";`,b=`// any component file: import the component only, no CSS
import { Tag } from "@minerva/lib-core";`,x=`// optional, in your own .scss: long-form typography mixins
@use "@minerva/lib-core/prose.scss" as prose;`,S=`// src/main.tsx — optional, instead of "@minerva/lib-core/style.css":
import "@minerva/lib-core/styles/tokens.css"; // design tokens, once
import "@minerva/lib-core/styles/button.css";
import "@minerva/lib-core/styles/input.css";
import "@minerva/lib-core/styles/modal.css";`,C=`pnpm add @monaco-editor/react monaco-editor`,w=`import { MonacoCodeEditor } from "@minerva/lib-core/monaco";`,T=`import { createRoot } from "react-dom/client";
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

createRoot(document.getElementById("root")!).render(<App />);`,E=`pnpm add @minerva/lib-web-components`,D=`// every element at once...
import "@minerva/lib-web-components";
// ...or only the elements you use (each entry registers one element and its parts)
import "@minerva/lib-web-components/select";

// design tokens, once (already included in @minerva/lib-core/style.css)
import "@minerva/lib-web-components/tokens.css";`,O=`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@minerva/lib-web-components@1/dist/tokens.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@minerva/lib-web-components@1/dist/cdn/minerva.js"><\/script>`,k=`// React 19 JSX (global.d.ts)
/// <reference types="@minerva/lib-web-components/react" />
// Svelte: ".../svelte", Solid: ".../solid"
// Vue (Volar): add "@minerva/lib-web-components/vue" to compilerOptions.types`,A=`import { themes } from "@minerva/lib-core";
import type { ButtonProps, ComponentTheme } from "@minerva/lib-core";

// every component exports its props type
const saveButton: Partial<ButtonProps> = { color: "success", size: "large" };

// themes are typed too: missing or misspelled tokens are compile errors
const brand: ComponentTheme = { ...themes.light, "primary-color": "#7c3aed" };`,j=()=>{let{t:e}=f(),t=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`requirements`,children:[(0,p.jsx)(`h2`,{id:`requirements`,children:e(`docs.installation.requirements.title`)}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`docs.installation.requirements.react`)}),(0,p.jsx)(`li`,{children:e(`docs.installation.requirements.bundler`)}),(0,p.jsx)(`li`,{children:e(`docs.installation.requirements.browsers`)})]})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`install-core`,children:[(0,p.jsx)(`h2`,{id:`install-core`,children:e(`docs.installation.core.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.core.text`)}),(0,p.jsx)(o,{tabs:[{label:`pnpm`,code:m,language:`bash`},{label:`npm`,code:h,language:`bash`},{label:`yarn`,code:g,language:`bash`}]}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.core.peers`)})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`global-stylesheet`,children:[(0,p.jsx)(`h2`,{id:`global-stylesheet`,children:e(`docs.installation.styles.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.styles.text`)}),(0,p.jsx)(`p`,{className:s.callout,children:e(`docs.installation.styles.note`)}),(0,p.jsx)(`h3`,{id:`stylesheet-vite`,children:e(`docs.installation.styles.vite.title`)}),(0,p.jsx)(o,{code:_,language:`tsx`,title:`src/main.tsx`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.styles.vite.note`)}),(0,p.jsx)(`h3`,{id:`stylesheet-next`,children:e(`docs.installation.styles.next.title`)}),(0,p.jsx)(o,{code:v,language:`tsx`,title:`app/layout.tsx`}),(0,p.jsxs)(`p`,{className:s.prose,children:[e(`docs.installation.styles.next.note`),` `,(0,p.jsx)(n,{to:`/rsc-guide`,children:e(`docs.installation.optional.rsc`)})]}),(0,p.jsx)(`h3`,{id:`stylesheet-wc`,children:e(`docs.installation.styles.wc.title`)}),(0,p.jsx)(o,{code:y,language:`ts`,title:`src/main.ts`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.styles.wc.note`)}),(0,p.jsx)(`h3`,{id:`stylesheet-components`,children:e(`docs.installation.styles.components.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.styles.components.text`)}),(0,p.jsx)(o,{code:b,language:`tsx`}),(0,p.jsx)(`h3`,{id:`per-component-styles`,children:e(`docs.installation.styles.perComponentTitle`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.styles.perComponent`)}),(0,p.jsx)(o,{code:S,language:`tsx`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.styles.extras`)}),(0,p.jsx)(o,{code:x,language:`scss`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`optional-entries`,children:[(0,p.jsx)(`h2`,{id:`optional-entries`,children:e(`docs.installation.optional.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.optional.text`)}),(0,p.jsx)(o,{code:C,language:`bash`}),(0,p.jsx)(o,{code:w,language:`tsx`}),(0,p.jsx)(`p`,{className:s.prose,children:(0,p.jsx)(n,{to:`/rsc-guide`,children:e(`docs.installation.optional.rsc`)})})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`first-app`,children:[(0,p.jsx)(`h2`,{id:`first-app`,children:e(`docs.installation.app.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.app.text`)}),(0,p.jsx)(o,{code:T,language:`tsx`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.app.provider`)})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`install-wc`,children:[(0,p.jsx)(`h2`,{id:`install-wc`,children:e(`docs.installation.webComponents.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.webComponents.text`)}),(0,p.jsx)(o,{code:E,language:`bash`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.webComponents.entries`)}),(0,p.jsx)(o,{code:D,language:`ts`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.webComponents.cdn`)}),(0,p.jsx)(o,{code:O,language:`html`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.webComponents.typings`)}),(0,p.jsx)(o,{code:k,language:`ts`}),(0,p.jsx)(`p`,{className:s.prose,children:(0,p.jsx)(n,{to:`/web-components`,children:e(`docs.installation.webComponents.more`)})})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`typescript`,children:[(0,p.jsx)(`h2`,{id:`typescript`,children:e(`docs.installation.typescript.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.typescript.text`)}),(0,p.jsx)(o,{code:A,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`next-steps`,children:[(0,p.jsx)(`h2`,{id:`next-steps`,children:e(`docs.installation.next.title`)}),(0,p.jsxs)(`div`,{className:s.cardGrid,children:[(0,p.jsxs)(n,{to:`/introduction`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.introduction.title`)}),(0,p.jsx)(`span`,{children:e(`docs.installation.next.introduction`)})]}),(0,p.jsxs)(n,{to:`/theming`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.theming.title`)}),(0,p.jsx)(`span`,{children:e(`docs.installation.next.theming`)})]}),(0,p.jsxs)(n,{to:`/button`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.button.title`)}),(0,p.jsx)(`span`,{children:e(`docs.installation.next.components`)})]})]})]})]});return(0,p.jsx)(l,{id:`installation`,intro:t})}})))()}M();export{j as default};