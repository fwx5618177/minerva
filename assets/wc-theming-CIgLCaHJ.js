import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,n,s as r,t as i}from"./react-vendor-DuLeTlZP.js";import{g as a,h as o,l as s,n as c,t as l,u}from"./DocPage-OkRujup2.js";import{nt as d,rt as f}from"./io5-CFVaALQJ.js";var p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{t(),d(),r(),a(),c(),u(),p=i(),m=[[`theme`,`light | dark | system | github-dark`],[`palette`,`editorial | tech | graphite | cool`],[`design`,`minerva | editorial | compact | touch`],[`density`,`compact | standard | comfortable`],[`radius`,`none | small | medium | large`],[`shadow`,`none | subtle | standard`],[`font-scale`,`small | standard | large`],[`locale`,`en | zh | ja | fr`],[`root`,`boolean`]],h=`<link rel="stylesheet" href="/node_modules/minerva-design/dist/core/tokens.css" />
<!-- or, with a bundler -->
<script type="module">
  import "minerva-design/tokens.css";
<\/script>`,g=`<!-- the attributes work on <html> (whole page) without any script -->
<html lang="fr" data-theme="dark" data-palette="cool" data-density="compact" data-radius="large">`,_=`<minerva-config theme="system" palette="tech" design="editorial" locale="ja" root>
  <!-- root: the attributes go on <html>, for the whole page -->
</minerva-config>

<!-- nested scopes: the closest one wins -->
<minerva-config theme="light">
  <minerva-button>Light</minerva-button>

  <minerva-config theme="dark" palette="graphite" density="compact">
    <minerva-button>Dark, graphite, compact</minerva-button>
  </minerva-config>
</minerva-config>`,v=`const config = document.querySelector("minerva-config");
const status = document.querySelector("#theme-status");
config.addEventListener("minerva-theme-change", (event) => {
  // "light" | "dark", e.g. when the OS switches
  status.textContent = \`\${event.detail.mode} mode\`;
});
config.resolvedMode; // the mode currently applied`,y=`/* the same --<component>-* variables as the React components,
   on the element, any ancestor or :root */
.toolbar minerva-button {
  --button-radius: 999px;
  --button-padding-x: 20px;
}

minerva-input {
  --input-radius: 6px;
}

/* theme tokens for one area: data-minerva-theme-scope recomputes the
   derived tokens (hover, subtle, focus ring...) from the new base colors */
.brand {
  --primary-color: #7c3aed;
}`,b=`<section class="brand" data-minerva-theme-scope>
  <minerva-button>Violet</minerva-button>
</section>`,x=`/* ::part() reaches the parts an element exposes, :state() its states
   (both listed in the "Styling hooks" section of each component page) */
minerva-select::part(content) {
  max-height: 240px;
}

minerva-modal:state(open)::part(overlay) {
  backdrop-filter: blur(4px);
}

minerva-tabs:state(variant-pills)::part(list) {
  gap: var(--space-1);
}

minerva-button:state(loading)::part(label) {
  opacity: 0.6;
}`,S=()=>{let{t:e}=f(),t=t=>e(`docs.wc-theming.${t}`),r=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`tokens`,children:[(0,p.jsx)(`h2`,{id:`tokens`,children:t(`tokens.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`tokens.text`)}),(0,p.jsx)(o,{code:h,language:`html`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`attributes`,children:[(0,p.jsx)(`h2`,{id:`attributes`,children:t(`attributes.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`attributes.text`)}),(0,p.jsx)(o,{code:g,language:`html`}),(0,p.jsx)(`p`,{className:s.callout,children:t(`attributes.nested`)})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`config`,children:[(0,p.jsx)(`h2`,{id:`config`,children:t(`config.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`config.text`)}),(0,p.jsx)(`div`,{className:s.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`config.title`),children:(0,p.jsxs)(`table`,{className:s.propsTable,children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`col`,children:t(`config.attribute`)}),(0,p.jsx)(`th`,{scope:`col`,children:t(`config.values`)}),(0,p.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,p.jsx)(`tbody`,{children:m.map(([e,n])=>(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`row`,children:(0,p.jsx)(`code`,{className:s.propName,children:e})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{className:s.propType,children:n})}),(0,p.jsx)(`td`,{children:t(`config.attrs.${e}`)})]},e))})]})}),(0,p.jsx)(o,{code:_,language:`html`}),(0,p.jsx)(`p`,{className:s.prose,children:t(`config.event`)}),(0,p.jsx)(o,{code:v,language:`ts`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`dark-mode`,children:[(0,p.jsx)(`h2`,{id:`dark-mode`,children:t(`dark.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`dark.text`)})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`css-vars`,children:[(0,p.jsx)(`h2`,{id:`css-vars`,children:t(`cssVars.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`cssVars.text`)}),(0,p.jsx)(o,{code:y,language:`css`}),(0,p.jsx)(o,{code:b,language:`html`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`parts`,children:[(0,p.jsx)(`h2`,{id:`parts`,children:t(`parts.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`parts.text`)}),(0,p.jsx)(o,{code:x,language:`css`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`overlays`,children:[(0,p.jsx)(`h2`,{id:`overlays`,children:t(`overlays.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`overlays.text`)})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`i18n`,children:[(0,p.jsx)(`h2`,{id:`i18n`,children:t(`i18n.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`i18n.text`)})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`next`,children:[(0,p.jsx)(`h2`,{id:`next`,children:t(`next.title`)}),(0,p.jsxs)(`div`,{className:s.cardGrid,children:[(0,p.jsxs)(n,{to:`/theming`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.theming.title`)}),(0,p.jsx)(`span`,{children:t(`next.theming`)})]}),(0,p.jsxs)(n,{to:`/design-presets`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.design-presets.title`)}),(0,p.jsx)(`span`,{children:t(`next.presets`)})]})]})]})]});return(0,p.jsx)(l,{id:`wc-theming`,intro:r})}})))()}C();export{S as default};