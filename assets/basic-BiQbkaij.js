import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PageBasic.vue -->

<template>
  <minerva-page max-width="960">
    <minerva-page-header
      heading="Projects"
      description="Everything your team is working on."
    >
      <minerva-button slot="actions">New project</minerva-button>
    </minerva-page-header>
    <minerva-page-section
      heading="Recent"
      description="Opened in the last 7 days."
    >
      <p style="margin: 0">Atlas, Borealis and Cygnus.</p>
    </minerva-page-section>
    <minerva-page-section heading="Archived">
      <minerva-button slot="actions" size="small" variant="ghost"
        >Show all</minerva-button
      >
      <p style="margin: 0">No archived projects.</p>
    </minerva-page-section>
  </minerva-page>
</template>
`,angular:`// page-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-page-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-page max-width="960">
      <minerva-page-header
        heading="Projects"
        description="Everything your team is working on."
      >
        <minerva-button slot="actions">New project</minerva-button>
      </minerva-page-header>
      <minerva-page-section
        heading="Recent"
        description="Opened in the last 7 days."
      >
        <p style="margin: 0">Atlas, Borealis and Cygnus.</p>
      </minerva-page-section>
      <minerva-page-section heading="Archived">
        <minerva-button slot="actions" size="small" variant="ghost"
          >Show all</minerva-button
        >
        <p style="margin: 0">No archived projects.</p>
      </minerva-page-section>
    </minerva-page>
  \`,
})
export class PageBasicComponent {}
`,svelte:`<!-- PageBasic.svelte -->

<minerva-page max-width="960">
  <minerva-page-header
    heading="Projects"
    description="Everything your team is working on."
  >
    <minerva-button slot="actions">New project</minerva-button>
  </minerva-page-header>
  <minerva-page-section
    heading="Recent"
    description="Opened in the last 7 days."
  >
    <p style="margin: 0">Atlas, Borealis and Cygnus.</p>
  </minerva-page-section>
  <minerva-page-section heading="Archived">
    <minerva-button slot="actions" size="small" variant="ghost"
      >Show all</minerva-button>
    <p style="margin: 0">No archived projects.</p>
  </minerva-page-section>
</minerva-page>
`,solid:`// PageBasic.tsx

export default function PageBasic() {
  return (
    <minerva-page max-width="960">
      <minerva-page-header
        heading="Projects"
        description="Everything your team is working on."
      >
        <minerva-button slot="actions">New project</minerva-button>
      </minerva-page-header>
      <minerva-page-section
        heading="Recent"
        description="Opened in the last 7 days."
      >
        <p style="margin: 0">Atlas, Borealis and Cygnus.</p>
      </minerva-page-section>
      <minerva-page-section heading="Archived">
        <minerva-button slot="actions" size="small" variant="ghost">
          Show all
        </minerva-button>
        <p style="margin: 0">No archived projects.</p>
      </minerva-page-section>
    </minerva-page>
  );
}
`,html:`<minerva-page max-width="960">
  <minerva-page-header
    heading="Projects"
    description="Everything your team is working on."
  >
    <minerva-button slot="actions">New project</minerva-button>
  </minerva-page-header>
  <minerva-page-section
    heading="Recent"
    description="Opened in the last 7 days."
  >
    <p style="margin: 0">Atlas, Borealis and Cygnus.</p>
  </minerva-page-section>
  <minerva-page-section heading="Archived">
    <minerva-button slot="actions" size="small" variant="ghost"
      >Show all</minerva-button
    >
    <p style="margin: 0">No archived projects.</p>
  </minerva-page-section>
</minerva-page>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};