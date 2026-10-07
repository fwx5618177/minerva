import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{c as t,h as n,n as r,t as i}from"./react-vendor-fq7Q804H.js";import{i as a,r as o}from"./iconBase-BbuKeGtN.js";import{a as s,l as c,n as l,o as u,t as d,u as f}from"./DocPage-Bnv84vTs.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),o(),t(),f(),l(),u(),p=i(),m=`pnpm add @minerva/lib-core react react-dom`,h=`npm install @minerva/lib-core react react-dom`,g=`yarn add @minerva/lib-core react react-dom`,_=`// main.tsx (your entry file) — import the stylesheet exactly once
import "@minerva/lib-core/style.css";`,v=`// optional, in your own .scss: long-form typography mixins
@use "@minerva/lib-core/prose.scss" as prose;`,y=`pnpm add @monaco-editor/react monaco-editor`,b=`import { MonacoCodeEditor } from "@minerva/lib-core/monaco";`,x=`import { createRoot } from "react-dom/client";
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

createRoot(document.getElementById("root")!).render(<App />);`,S=`pnpm add @minerva/lib-web-components`,C=`// registers <minerva-button> (and future custom elements) once
import "@minerva/lib-web-components";`,w=`// src/global.d.ts — JSX typings for <minerva-button> in React
/// <reference types="@minerva/lib-web-components/react" />

// or, in a module file:
import type {} from "@minerva/lib-web-components/react";`,T=`import { themes } from "@minerva/lib-core";
import type { ButtonProps, ComponentTheme } from "@minerva/lib-core";

// every component exports its props type
const saveButton: Partial<ButtonProps> = { color: "success", size: "large" };

// themes are typed too: missing or misspelled tokens are compile errors
const brand: ComponentTheme = { ...themes.light, "primary-color": "#7c3aed" };`,E=()=>{let{t:e}=a(),t=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`requirements`,children:[(0,p.jsx)(`h2`,{id:`requirements`,children:e(`docs.installation.requirements.title`)}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`docs.installation.requirements.react`)}),(0,p.jsx)(`li`,{children:e(`docs.installation.requirements.bundler`)}),(0,p.jsx)(`li`,{children:e(`docs.installation.requirements.browsers`)})]})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`install-core`,children:[(0,p.jsx)(`h2`,{id:`install-core`,children:e(`docs.installation.core.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.core.text`)}),(0,p.jsx)(c,{code:m,language:`bash`,title:`pnpm`}),(0,p.jsx)(c,{code:h,language:`bash`,title:`npm`}),(0,p.jsx)(c,{code:g,language:`bash`,title:`yarn`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.core.peers`)})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`styles`,children:[(0,p.jsx)(`h2`,{id:`styles`,children:e(`docs.installation.styles.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.styles.text`)}),(0,p.jsx)(c,{code:_,language:`tsx`}),(0,p.jsx)(`p`,{className:s.callout,children:e(`docs.installation.styles.note`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.styles.extras`)}),(0,p.jsx)(c,{code:v,language:`scss`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`optional-entries`,children:[(0,p.jsx)(`h2`,{id:`optional-entries`,children:e(`docs.installation.optional.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.optional.text`)}),(0,p.jsx)(c,{code:y,language:`bash`}),(0,p.jsx)(c,{code:b,language:`tsx`}),(0,p.jsx)(`p`,{className:s.prose,children:(0,p.jsx)(r,{to:`/rsc-guide`,children:e(`docs.installation.optional.rsc`)})})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`first-app`,children:[(0,p.jsx)(`h2`,{id:`first-app`,children:e(`docs.installation.app.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.app.text`)}),(0,p.jsx)(c,{code:x,language:`tsx`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.app.provider`)})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`install-wc`,children:[(0,p.jsx)(`h2`,{id:`install-wc`,children:e(`docs.installation.webComponents.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.webComponents.text`)}),(0,p.jsx)(c,{code:S,language:`bash`}),(0,p.jsx)(c,{code:C,language:`tsx`}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.webComponents.typings`)}),(0,p.jsx)(c,{code:w,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`typescript`,children:[(0,p.jsx)(`h2`,{id:`typescript`,children:e(`docs.installation.typescript.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:e(`docs.installation.typescript.text`)}),(0,p.jsx)(c,{code:T,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`next-steps`,children:[(0,p.jsx)(`h2`,{id:`next-steps`,children:e(`docs.installation.next.title`)}),(0,p.jsxs)(`div`,{className:s.cardGrid,children:[(0,p.jsxs)(r,{to:`/introduction`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.introduction.title`)}),(0,p.jsx)(`span`,{children:e(`docs.installation.next.introduction`)})]}),(0,p.jsxs)(r,{to:`/theming`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.theming.title`)}),(0,p.jsx)(`span`,{children:e(`docs.installation.next.theming`)})]}),(0,p.jsxs)(r,{to:`/button`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.button.title`)}),(0,p.jsx)(`span`,{children:e(`docs.installation.next.components`)})]})]})]})]});return(0,p.jsx)(d,{id:`installation`,intro:t})}})))()}D();export{E as default};