import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,n,s as r,t as i}from"./react-vendor-aZSMfLKR.js";import{i as a}from"./minerva-web-components-FVTxT03l.js";import{nt as ee,rt as te}from"./io5-BOy5_xXs.js";import{n as o,t as s}from"./Button-BfJfx3BZ.js";import{a as ne,c,o as re,r as l,s as ie,t as ae}from"./Modal-D1Yp-WWO.js";import{i as u,n as d,r as f}from"./Stack-NtusJivt.js";import{a as p,n as oe}from"./Table-ljyhwXdR.js";import{a as se,i as ce,n as m,r as h,t as g}from"./Tabs-BQIUSLDU.js";import{a as _,c as le,g as ue,h as v,i as y,l as b,m as x,n as de,o as fe,p as pe,r as S,s as me,t as he,u as ge}from"./DocPage-44Ak-YGP.js";function _e(){return(0,C.jsxs)(d,{className:`pill-buttons`,gap:12,children:[(0,C.jsx)(`style`,{children:w}),(0,C.jsxs)(u,{gap:8,wrap:!0,children:[(0,C.jsx)(o,{children:`React`}),(0,C.jsx)(o,{variant:`outline`,children:`Outline`}),(0,C.jsx)(o,{loading:!0,variant:`ghost`,children:`Saving`})]}),(0,C.jsxs)(u,{gap:8,wrap:!0,children:[(0,C.jsx)(`minerva-button`,{children:`Web Component`}),(0,C.jsx)(`minerva-button`,{variant:`outline`,children:`Outline`}),(0,C.jsx)(`minerva-button`,{loading:!0,variant:`ghost`,children:`Saving`})]})]})}var C,w;function T(){return(T=e((()=>{s(),f(),a(),C=i(),w=`
.pill-buttons [data-minerva="button"][data-part="root"],
.pill-buttons minerva-button {
  --button-radius: 999px;
  --button-padding-x: 20px;
}
.pill-buttons [data-minerva="button"][data-part="root"][data-variant="outline"] {
  border-width: 2px;
}
.pill-buttons minerva-button:state(variant-outline)::part(root) {
  border-width: 2px;
}
.pill-buttons [data-minerva="button"][data-part="label"],
.pill-buttons minerva-button::part(label) {
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.pill-buttons [data-minerva="button"][data-loading] [data-part="spinner"],
.pill-buttons minerva-button:state(loading)::part(spinner) {
  color: var(--warning-color);
}
`})))()}function ve(){return(0,E.jsxs)(u,{gap:8,wrap:!0,children:[(0,E.jsx)(`style`,{children:D}),(0,E.jsxs)(ie,{children:[(0,E.jsx)(re,{asChild:!0,children:(0,E.jsx)(o,{variant:`outline`,children:`React modal`})}),(0,E.jsxs)(l,{className:`glass-content`,overlayClassName:`glass-overlay`,children:[(0,E.jsx)(ae,{children:`Restyled with hooks`}),(0,E.jsx)(c,{children:`The overlay, panel and title are styled from the page.`})]})]}),(0,E.jsxs)(`minerva-modal`,{class:`glass`,label:`Restyled with hooks`,children:[(0,E.jsx)(`minerva-button`,{slot:`trigger`,variant:`outline`,children:`Web Component modal`}),`The overlay, panel and title are styled from the page.`]})]})}var E,D;function O(){return(O=e((()=>{s(),f(),ne(),a(),E=i(),D=`
[data-minerva="modal"][data-part="overlay"].glass-overlay,
minerva-modal.glass::part(overlay) {
  backdrop-filter: blur(6px);
}
[data-minerva="modal"][data-part="content"].glass-content,
minerva-modal.glass::part(content) {
  border: 1px solid var(--primary-color);
  box-shadow: 0 24px 48px color-mix(in srgb, var(--primary-color) 25%, transparent);
}
[data-minerva="modal"][data-part="content"][data-state="open"].glass-content [data-part="header"],
minerva-modal.glass:state(open)::part(header) {
  color: var(--primary-color);
}
`})))()}function ye(){return(0,k.jsxs)(d,{className:`ledger`,gap:24,children:[(0,k.jsx)(`style`,{children:M}),(0,k.jsx)(oe,{"aria-label":`Books (React)`,columns:j,data:A,rowKey:e=>e.id}),(0,k.jsx)(`minerva-data-table`,{"aria-label":`Books (Web Component)`,"row-key":`id`,columns:j,rows:A})]})}var k,A,j,M;function N(){return(N=e((()=>{p(),f(),a(),k=i(),A=[{id:1,title:`Dune`,author:`Frank Herbert`,score:9.1},{id:2,title:`Solaris`,author:`Stanisław Lem`,score:8.7},{id:3,title:`Hyperion`,author:`Dan Simmons`,score:8.9}],j=[{key:`title`,header:`Title`},{key:`author`,header:`Author`},{key:`score`,header:`Score`,align:`right`}],M=`
.ledger [data-minerva="data-table"][data-part="header-cell"],
.ledger minerva-data-table::part(header-cell) {
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 12px;
  color: var(--primary-color);
}
/* ::part() only takes user-action pseudo-classes (:hover, :focus-visible...):
   keep structural ones (:nth-child) in a React-only rule */
.ledger [data-minerva="data-table"][data-part="row"]:nth-child(even) [data-part="cell"] {
  background: color-mix(in srgb, var(--primary-color) 6%, transparent);
}
.ledger [data-minerva="data-table"][data-part="row"]:hover [data-part="cell"],
.ledger minerva-data-table::part(row):hover {
  background: color-mix(in srgb, var(--primary-color) 14%, transparent);
}
`})))()}function be(){return(0,P.jsxs)(d,{className:`underline-tabs`,gap:24,children:[(0,P.jsx)(`style`,{children:F}),(0,P.jsxs)(g,{defaultValue:`overview`,variant:`soft`,children:[(0,P.jsxs)(se,{"aria-label":`React tabs`,children:[(0,P.jsx)(h,{value:`overview`,children:`Overview`}),(0,P.jsx)(h,{value:`activity`,children:`Activity`}),(0,P.jsx)(h,{value:`archive`,disabled:!0,children:`Archive`})]}),(0,P.jsx)(m,{value:`overview`,children:`React: data-* hooks`}),(0,P.jsx)(m,{value:`activity`,children:`Activity`}),(0,P.jsx)(m,{value:`archive`,children:`Archive`})]}),(0,P.jsxs)(`minerva-tabs`,{value:`overview`,variant:`soft`,label:`Web Component tabs`,children:[(0,P.jsx)(`minerva-tab`,{value:`overview`,children:`Overview`}),(0,P.jsx)(`minerva-tab`,{value:`activity`,children:`Activity`}),(0,P.jsx)(`minerva-tab`,{value:`archive`,disabled:!0,children:`Archive`}),(0,P.jsx)(`minerva-tab-panel`,{value:`overview`,children:`Web Components: ::part() and :state()`}),(0,P.jsx)(`minerva-tab-panel`,{value:`activity`,children:`Activity`}),(0,P.jsx)(`minerva-tab-panel`,{value:`archive`,children:`Archive`})]})]})}var P,F;function I(){return(I=e((()=>{ce(),f(),a(),P=i(),F=`
.underline-tabs [data-minerva="tabs"][data-part="list"],
.underline-tabs minerva-tabs::part(list) {
  gap: 4px;
  border-bottom: 1px solid var(--border-color);
}
.underline-tabs [data-minerva="tab"][data-part="root"],
.underline-tabs minerva-tab::part(root) {
  border-radius: 0;
  border-bottom: 2px solid transparent;
  font-weight: 500;
}
.underline-tabs [data-minerva="tab"][data-state="active"],
.underline-tabs minerva-tab:state(active)::part(root) {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}
.underline-tabs [data-minerva="tab"][data-disabled],
.underline-tabs minerva-tab:state(disabled)::part(root) {
  opacity: 0.4;
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { Button, HStack, VStack } from "@minerva/lib-core";
import "@minerva/lib-web-components";

// Plain, unlayered CSS: it wins over the library (inside @layer minerva)
// without !important. Variables and hooks combine.
const css = \`
.pill-buttons [data-minerva="button"][data-part="root"],
.pill-buttons minerva-button {
  --button-radius: 999px;
  --button-padding-x: 20px;
}
.pill-buttons [data-minerva="button"][data-part="root"][data-variant="outline"] {
  border-width: 2px;
}
.pill-buttons minerva-button:state(variant-outline)::part(root) {
  border-width: 2px;
}
.pill-buttons [data-minerva="button"][data-part="label"],
.pill-buttons minerva-button::part(label) {
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.pill-buttons [data-minerva="button"][data-loading] [data-part="spinner"],
.pill-buttons minerva-button:state(loading)::part(spinner) {
  color: var(--warning-color);
}
\`;

export default function RestyleButton() {
  return (
    <VStack className="pill-buttons" gap={12}>
      <style>{css}</style>
      <HStack gap={8} wrap>
        <Button>React</Button>
        <Button variant="outline">Outline</Button>
        <Button loading variant="ghost">
          Saving
        </Button>
      </HStack>
      <HStack gap={8} wrap>
        <minerva-button>Web Component</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
        <minerva-button loading variant="ghost">
          Saving
        </minerva-button>
      </HStack>
    </VStack>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import {
  Button,
  HStack,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalRoot,
  ModalTrigger,
} from "@minerva/lib-core";
import "@minerva/lib-web-components";

// The React content is portalled to <body>: the compound selector
// [data-minerva][data-part] matches it wherever it renders (a class on the
// trigger's container would not).
const css = \`
[data-minerva="modal"][data-part="overlay"].glass-overlay,
minerva-modal.glass::part(overlay) {
  backdrop-filter: blur(6px);
}
[data-minerva="modal"][data-part="content"].glass-content,
minerva-modal.glass::part(content) {
  border: 1px solid var(--primary-color);
  box-shadow: 0 24px 48px color-mix(in srgb, var(--primary-color) 25%, transparent);
}
[data-minerva="modal"][data-part="content"][data-state="open"].glass-content [data-part="header"],
minerva-modal.glass:state(open)::part(header) {
  color: var(--primary-color);
}
\`;

export default function RestyleModal() {
  return (
    <HStack gap={8} wrap>
      <style>{css}</style>
      <ModalRoot>
        <ModalTrigger asChild>
          <Button variant="outline">React modal</Button>
        </ModalTrigger>
        <ModalContent
          className="glass-content"
          overlayClassName="glass-overlay"
        >
          <ModalHeader>Restyled with hooks</ModalHeader>
          <ModalBody>
            The overlay, panel and title are styled from the page.
          </ModalBody>
        </ModalContent>
      </ModalRoot>
      <minerva-modal class="glass" label="Restyled with hooks">
        <minerva-button slot="trigger" variant="outline">
          Web Component modal
        </minerva-button>
        The overlay, panel and title are styled from the page.
      </minerva-modal>
    </HStack>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { Table, VStack, type TableColumn } from "@minerva/lib-core";
import "@minerva/lib-web-components";

interface Book {
  id: number;
  title: string;
  author: string;
  score: number;
}

const books: Book[] = [
  { id: 1, title: "Dune", author: "Frank Herbert", score: 9.1 },
  { id: 2, title: "Solaris", author: "Stanisław Lem", score: 8.7 },
  { id: 3, title: "Hyperion", author: "Dan Simmons", score: 8.9 },
];

const columns: TableColumn<Book>[] = [
  { key: "title", header: "Title" },
  { key: "author", header: "Author" },
  { key: "score", header: "Score", align: "right" },
];

const css = \`
.ledger [data-minerva="data-table"][data-part="header-cell"],
.ledger minerva-data-table::part(header-cell) {
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 12px;
  color: var(--primary-color);
}
/* ::part() only takes user-action pseudo-classes (:hover, :focus-visible...):
   keep structural ones (:nth-child) in a React-only rule */
.ledger [data-minerva="data-table"][data-part="row"]:nth-child(even) [data-part="cell"] {
  background: color-mix(in srgb, var(--primary-color) 6%, transparent);
}
.ledger [data-minerva="data-table"][data-part="row"]:hover [data-part="cell"],
.ledger minerva-data-table::part(row):hover {
  background: color-mix(in srgb, var(--primary-color) 14%, transparent);
}
\`;

export default function RestyleTable() {
  return (
    <VStack className="ledger" gap={24}>
      <style>{css}</style>
      <Table
        aria-label="Books (React)"
        columns={columns}
        data={books}
        rowKey={(book) => book.id}
      />
      <minerva-data-table
        aria-label="Books (Web Component)"
        row-key="id"
        columns={columns}
        rows={books}
      />
    </VStack>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { Tab, TabList, TabPanel, Tabs, VStack } from "@minerva/lib-core";
import "@minerva/lib-web-components";

const css = \`
.underline-tabs [data-minerva="tabs"][data-part="list"],
.underline-tabs minerva-tabs::part(list) {
  gap: 4px;
  border-bottom: 1px solid var(--border-color);
}
.underline-tabs [data-minerva="tab"][data-part="root"],
.underline-tabs minerva-tab::part(root) {
  border-radius: 0;
  border-bottom: 2px solid transparent;
  font-weight: 500;
}
.underline-tabs [data-minerva="tab"][data-state="active"],
.underline-tabs minerva-tab:state(active)::part(root) {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}
.underline-tabs [data-minerva="tab"][data-disabled],
.underline-tabs minerva-tab:state(disabled)::part(root) {
  opacity: 0.4;
}
\`;

export default function RestyleTabs() {
  return (
    <VStack className="underline-tabs" gap={24}>
      <style>{css}</style>
      <Tabs defaultValue="overview" variant="soft">
        <TabList aria-label="React tabs">
          <Tab value="overview">Overview</Tab>
          <Tab value="activity">Activity</Tab>
          <Tab value="archive" disabled>
            Archive
          </Tab>
        </TabList>
        <TabPanel value="overview">React: data-* hooks</TabPanel>
        <TabPanel value="activity">Activity</TabPanel>
        <TabPanel value="archive">Archive</TabPanel>
      </Tabs>
      <minerva-tabs value="overview" variant="soft" label="Web Component tabs">
        <minerva-tab value="overview">Overview</minerva-tab>
        <minerva-tab value="activity">Activity</minerva-tab>
        <minerva-tab value="archive" disabled>
          Archive
        </minerva-tab>
        <minerva-tab-panel value="overview">
          Web Components: ::part() and :state()
        </minerva-tab-panel>
        <minerva-tab-panel value="activity">Activity</minerva-tab-panel>
        <minerva-tab-panel value="archive">Archive</minerva-tab-panel>
      </minerva-tabs>
    </VStack>
  );
}
`})))()}var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{T(),O(),N(),I(),R(),B(),H(),W(),t(),ee(),r(),fe(),ue(),de(),ge(),x(),G=i(),K=pe(Object.assign({"./demos/restyle-button.tsx":_e,"./demos/restyle-modal.tsx":ve,"./demos/restyle-table.tsx":ye,"./demos/restyle-tabs.tsx":be}),Object.assign({"./demos/restyle-button.tsx":L,"./demos/restyle-modal.tsx":z,"./demos/restyle-table.tsx":V,"./demos/restyle-tabs.tsx":U})),q=`/* 1. Design tokens: the whole app (or a theme scope) */
:root {
  --primary-color: #7c3aed;
  --radius-md: 10px;
}

/* 2. Component variables (listed on each component page)... */
.toolbar {
  --button-height: 32px;
}

/* 3. ...combined with hooks: variables for one variant / state */
[data-minerva="button"][data-variant="ghost"] {
  --button-radius: 999px;
}
minerva-button:state(variant-ghost) {
  --button-radius: 999px; /* variables inherit into the shadow root */
}`,J=`/* component root */
[data-minerva="tabs"] { }
/* a part (also matches portalled parts: popups, dialogs) */
[data-minerva="select"][data-part="content"] { }
/* a part in a state */
[data-minerva="modal"][data-part="content"][data-state="open"] { }
/* a part of a component in a state (state on the root) */
[data-minerva="button"][data-loading] [data-part="spinner"] { }`,Y=`/* component: the tag */
minerva-tabs { }
/* a part: ::part() */
minerva-select::part(content) { }
/* states are custom states of the host: :state() */
minerva-modal:state(open)::part(content) { }
minerva-button:state(loading)::part(spinner) { }
minerva-button:state(size-small):state(variant-ghost) { }`,X=`/* The library ships inside @layer minerva: unlayered rules win,
   whatever their specificity or order */
.my-button {
  border-radius: 0; /* beats the library, no !important */
}

/* Layered app? Declare the order once, before any stylesheet */
@layer reset, minerva, app;

/* Tailwind CSS v4 */
@layer theme, base, minerva, components, utilities;

/* Unlayered resets now beat the library too: layer them */
@import url("modern-normalize.css") layer(reset);`,Z=`import { stylingHooks, wcSelector } from "@minerva/core/styling-hooks";

stylingHooks.modal.parts; // overlay, content, header, description, body, footer, close-button
stylingHooks.modal.states; // { state: ["open", "closed"], size: [...] }
wcSelector("modal", "content", { state: "open" });
// "minerva-modal:state(open)::part(content)"`,Q=()=>{let{t:e}=te(),t=t=>e(`docs.styling.${t}`),r=[[`state`,y.map(e=>`[data-state="${e}"]`).join(` `),y.map(e=>`:state(${S(`state`,e)})`).join(` `),e(`hooks.states.state`)],...le.map(t=>[t,`[${_(t)}]`,`:state(${S(t)})`,e(`hooks.states.${t}`)]),...me.map(t=>[t,`[${_(t)}="…"]`,`:state(${S(t,`…`)})`,e(`hooks.states.${t}`)])],i=(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`section`,{className:b.section,"aria-labelledby":`overview`,children:[(0,G.jsx)(`h2`,{id:`overview`,children:t(`overview.title`)}),(0,G.jsx)(`p`,{className:b.prose,children:t(`overview.text`)}),(0,G.jsxs)(`ol`,{className:b.prose,children:[(0,G.jsx)(`li`,{children:t(`overview.variables`)}),(0,G.jsx)(`li`,{children:t(`overview.hooks`)}),(0,G.jsx)(`li`,{children:t(`overview.layer`)})]})]}),(0,G.jsxs)(`section`,{className:b.section,"aria-labelledby":`variables`,children:[(0,G.jsx)(`h2`,{id:`variables`,children:t(`variables.title`)}),(0,G.jsx)(`p`,{className:b.prose,children:t(`variables.text`)}),(0,G.jsx)(v,{code:q,language:`css`})]}),(0,G.jsxs)(`section`,{className:b.section,"aria-labelledby":`hooks`,children:[(0,G.jsx)(`h2`,{id:`hooks`,children:t(`hooks.title`)}),(0,G.jsx)(`p`,{className:b.prose,children:t(`hooks.text`)}),(0,G.jsx)(v,{code:J,language:`css`}),(0,G.jsx)(`p`,{className:b.prose,children:t(`hooks.selector`)})]}),(0,G.jsxs)(`section`,{className:b.section,"aria-labelledby":`vocabulary`,children:[(0,G.jsx)(`h2`,{id:`vocabulary`,children:t(`vocabulary.title`)}),(0,G.jsx)(`p`,{className:b.prose,children:t(`vocabulary.text`)}),(0,G.jsx)(`div`,{className:b.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`vocabulary.title`),children:(0,G.jsxs)(`table`,{className:b.propsTable,children:[(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`col`,children:e(`hooks.state`)}),(0,G.jsx)(`th`,{scope:`col`,children:`React`}),(0,G.jsx)(`th`,{scope:`col`,children:`Web Components`}),(0,G.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,G.jsx)(`tbody`,{children:r.map(([e,t,n,r])=>(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`row`,children:(0,G.jsx)(`code`,{className:b.propName,children:e})}),(0,G.jsx)(`td`,{children:(0,G.jsx)(`code`,{className:b.propType,children:t})}),(0,G.jsx)(`td`,{children:(0,G.jsx)(`code`,{className:b.propType,children:n})}),(0,G.jsx)(`td`,{children:r})]},e))})]})}),(0,G.jsx)(`p`,{className:b.prose,children:t(`vocabulary.parts`)})]}),(0,G.jsxs)(`section`,{className:b.section,"aria-labelledby":`web-components`,children:[(0,G.jsx)(`h2`,{id:`web-components`,children:t(`wc.title`)}),(0,G.jsx)(`p`,{className:b.prose,children:t(`wc.text`)}),(0,G.jsx)(v,{code:Y,language:`css`}),(0,G.jsx)(`p`,{className:b.callout,children:t(`wc.support`)})]}),(0,G.jsxs)(`section`,{className:b.section,"aria-labelledby":`layers`,children:[(0,G.jsx)(`h2`,{id:`layers`,children:t(`layers.title`)}),(0,G.jsx)(`p`,{className:b.prose,children:t(`layers.text`)}),(0,G.jsx)(v,{code:X,language:`css`}),(0,G.jsx)(`p`,{className:b.callout,children:t(`layers.resets`)})]})]});return(0,G.jsxs)(he,{id:`styling`,demos:K,intro:i,children:[(0,G.jsxs)(`section`,{className:b.section,"aria-labelledby":`stability`,children:[(0,G.jsx)(`h2`,{id:`stability`,children:t(`stability.title`)}),(0,G.jsx)(`p`,{className:b.prose,children:t(`stability.text`)}),(0,G.jsx)(v,{code:Z,language:`ts`}),(0,G.jsxs)(`ul`,{className:b.prose,children:[(0,G.jsx)(`li`,{children:t(`stability.minor`)}),(0,G.jsx)(`li`,{children:t(`stability.major`)}),(0,G.jsx)(`li`,{children:t(`stability.private`)})]})]}),(0,G.jsxs)(`section`,{className:b.section,"aria-labelledby":`next`,children:[(0,G.jsx)(`h2`,{id:`next`,children:t(`next.title`)}),(0,G.jsxs)(`div`,{className:b.cardGrid,children:[(0,G.jsxs)(n,{to:`/theming`,className:b.linkCard,children:[(0,G.jsx)(`strong`,{children:e(`docs.theming.title`)}),(0,G.jsx)(`span`,{children:t(`next.theming`)})]}),(0,G.jsxs)(n,{to:`/wc-theming`,className:b.linkCard,children:[(0,G.jsx)(`strong`,{children:e(`docs.wc-theming.title`)}),(0,G.jsx)(`span`,{children:t(`next.wcTheming`)})]})]})]})]})}})))()}$();export{Q as default};