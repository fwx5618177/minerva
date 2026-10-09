import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TabsPanels.vue -->

<template>
  <minerva-tabs label="Report" value="summary">
    <minerva-tab value="summary">Summary</minerva-tab>
    <minerva-tab value="draft">Draft (template)</minerva-tab>
    <minerva-tab value="notes">Notes (force-mount)</minerva-tab>
    <!-- Regular children: always in the DOM, hidden while inactive
         (React's <TabPanel forceMount>) -->
    <minerva-tab-panel value="summary">
      <p>Regular content stays mounted: type here, switch tabs, come back.</p>
      <input aria-label="Kept text" placeholder="Kept while hidden" />
    </minerva-tab-panel>
    <!-- <template>: mounted only while active (React's default) -->
    <minerva-tab-panel value="draft">
      <template>
        <p>Template content is created on activation and removed afterwards.</p>
        <input aria-label="Reset text" placeholder="Reset when you leave" />
      </template>
    </minerva-tab-panel>
    <!-- <template> + force-mount: mounted (hidden) even while inactive -->
    <minerva-tab-panel value="notes" force-mount>
      <template>
        <p>force-mount stamps the template up front and keeps it.</p>
        <input aria-label="Notes" placeholder="Kept while hidden" />
      </template>
    </minerva-tab-panel>
  </minerva-tabs>
</template>
`,angular:`// tabs-panels.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tabs-panels",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-tabs label="Report" value="summary">
      <minerva-tab value="summary">Summary</minerva-tab>
      <minerva-tab value="draft">Draft (template)</minerva-tab>
      <minerva-tab value="notes">Notes (force-mount)</minerva-tab>
      <!-- Regular children: always in the DOM, hidden while inactive
           (React's <TabPanel forceMount>) -->
      <minerva-tab-panel value="summary">
        <p>Regular content stays mounted: type here, switch tabs, come back.</p>
        <input aria-label="Kept text" placeholder="Kept while hidden" />
      </minerva-tab-panel>
      <!-- <template>: mounted only while active (React's default) -->
      <minerva-tab-panel value="draft">
        <template>
          <p>
            Template content is created on activation and removed afterwards.
          </p>
          <input aria-label="Reset text" placeholder="Reset when you leave" />
        </template>
      </minerva-tab-panel>
      <!-- <template> + force-mount: mounted (hidden) even while inactive -->
      <minerva-tab-panel value="notes" force-mount>
        <template>
          <p>force-mount stamps the template up front and keeps it.</p>
          <input aria-label="Notes" placeholder="Kept while hidden" />
        </template>
      </minerva-tab-panel>
    </minerva-tabs>
  \`,
})
export class TabsPanelsComponent {}
`,svelte:`<!-- TabsPanels.svelte -->

<minerva-tabs label="Report" value="summary">
  <minerva-tab value="summary">Summary</minerva-tab>
  <minerva-tab value="draft">Draft (template)</minerva-tab>
  <minerva-tab value="notes">Notes (force-mount)</minerva-tab>
  <!-- Regular children: always in the DOM, hidden while inactive
       (React's <TabPanel forceMount>) -->
  <minerva-tab-panel value="summary">
    <p>Regular content stays mounted: type here, switch tabs, come back.</p>
    <input aria-label="Kept text" placeholder="Kept while hidden" />
  </minerva-tab-panel>
  <!-- <template>: mounted only while active (React's default) -->
  <minerva-tab-panel value="draft">
    <template>
      <p>Template content is created on activation and removed afterwards.</p>
      <input aria-label="Reset text" placeholder="Reset when you leave" />
    </template>
  </minerva-tab-panel>
  <!-- <template> + force-mount: mounted (hidden) even while inactive -->
  <minerva-tab-panel value="notes" force-mount>
    <template>
      <p>force-mount stamps the template up front and keeps it.</p>
      <input aria-label="Notes" placeholder="Kept while hidden" />
    </template>
  </minerva-tab-panel>
</minerva-tabs>
`,solid:`// TabsPanels.tsx

export default function TabsPanels() {
  return (
    <minerva-tabs label="Report" value="summary">
      <minerva-tab value="summary">Summary</minerva-tab>
      <minerva-tab value="draft">Draft (template)</minerva-tab>
      <minerva-tab value="notes">Notes (force-mount)</minerva-tab>
      {/* Regular children: always in the DOM, hidden while inactive
           (React's <TabPanel forceMount>) */}
      <minerva-tab-panel value="summary">
        <p>Regular content stays mounted: type here, switch tabs, come back.</p>
        <input aria-label="Kept text" placeholder="Kept while hidden" />
      </minerva-tab-panel>
      {/* <template>: mounted only while active (React's default) */}
      <minerva-tab-panel value="draft">
        <template>
          <p>
            Template content is created on activation and removed afterwards.
          </p>
          <input aria-label="Reset text" placeholder="Reset when you leave" />
        </template>
      </minerva-tab-panel>
      {/* <template> + force-mount: mounted (hidden) even while inactive */}
      <minerva-tab-panel value="notes" force-mount>
        <template>
          <p>force-mount stamps the template up front and keeps it.</p>
          <input aria-label="Notes" placeholder="Kept while hidden" />
        </template>
      </minerva-tab-panel>
    </minerva-tabs>
  );
}
`,html:`<minerva-tabs label="Report" value="summary">
  <minerva-tab value="summary">Summary</minerva-tab>
  <minerva-tab value="draft">Draft (template)</minerva-tab>
  <minerva-tab value="notes">Notes (force-mount)</minerva-tab>
  <!-- Regular children: always in the DOM, hidden while inactive
       (React's <TabPanel forceMount>) -->
  <minerva-tab-panel value="summary">
    <p>Regular content stays mounted: type here, switch tabs, come back.</p>
    <input aria-label="Kept text" placeholder="Kept while hidden" />
  </minerva-tab-panel>
  <!-- <template>: mounted only while active (React's default) -->
  <minerva-tab-panel value="draft">
    <template>
      <p>Template content is created on activation and removed afterwards.</p>
      <input aria-label="Reset text" placeholder="Reset when you leave" />
    </template>
  </minerva-tab-panel>
  <!-- <template> + force-mount: mounted (hidden) even while inactive -->
  <minerva-tab-panel value="notes" force-mount>
    <template>
      <p>force-mount stamps the template up front and keeps it.</p>
      <input aria-label="Notes" placeholder="Kept while hidden" />
    </template>
  </minerva-tab-panel>
</minerva-tabs>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};