import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- BadgeBasic.vue -->

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
    <minerva-badge content="5" aria-label="5 unread messages">
      <minerva-button variant="outline" color="neutral">Inbox</minerva-button>
    </minerva-badge>
    <minerva-badge dot color="danger" aria-label="New activity">
      <minerva-avatar name="Ada Lovelace"></minerva-avatar>
    </minerva-badge>
    <minerva-badge>New</minerva-badge>
    <minerva-badge color="success" variant="subtle">Active</minerva-badge>
  </div>
</template>
`,angular:`// badge-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-badge-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
      <minerva-badge content="5" aria-label="5 unread messages">
        <minerva-button variant="outline" color="neutral">Inbox</minerva-button>
      </minerva-badge>
      <minerva-badge dot color="danger" aria-label="New activity">
        <minerva-avatar name="Ada Lovelace"></minerva-avatar>
      </minerva-badge>
      <minerva-badge>New</minerva-badge>
      <minerva-badge color="success" variant="subtle">Active</minerva-badge>
    </div>
  \`,
})
export class BadgeBasicComponent {}
`,svelte:`<!-- BadgeBasic.svelte -->

<div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
  <minerva-badge content="5" aria-label="5 unread messages">
    <minerva-button variant="outline" color="neutral">Inbox</minerva-button>
  </minerva-badge>
  <minerva-badge dot color="danger" aria-label="New activity">
    <minerva-avatar name="Ada Lovelace"></minerva-avatar>
  </minerva-badge>
  <minerva-badge>New</minerva-badge>
  <minerva-badge color="success" variant="subtle">Active</minerva-badge>
</div>
`,solid:`// BadgeBasic.tsx

export default function BadgeBasic() {
  return (
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
      <minerva-badge content="5" aria-label="5 unread messages">
        <minerva-button variant="outline" color="neutral">
          Inbox
        </minerva-button>
      </minerva-badge>
      <minerva-badge dot color="danger" aria-label="New activity">
        <minerva-avatar name="Ada Lovelace"></minerva-avatar>
      </minerva-badge>
      <minerva-badge>New</minerva-badge>
      <minerva-badge color="success" variant="subtle">
        Active
      </minerva-badge>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
  <minerva-badge content="5" aria-label="5 unread messages">
    <minerva-button variant="outline" color="neutral">Inbox</minerva-button>
  </minerva-badge>
  <minerva-badge dot color="danger" aria-label="New activity">
    <minerva-avatar name="Ada Lovelace"></minerva-avatar>
  </minerva-badge>
  <minerva-badge>New</minerva-badge>
  <minerva-badge color="success" variant="subtle">Active</minerva-badge>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};