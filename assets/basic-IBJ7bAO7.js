import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DescriptionListBasic.vue -->

<template>
  <minerva-description-list style="max-width: 480px">
    <minerva-description-item label="Customer"
      >Acme Corporation</minerva-description-item
    >
    <minerva-description-item label="Plan"
      >Business, billed yearly</minerva-description-item
    >
    <minerva-description-item label="Status">
      <minerva-badge color="success" badge-role="presentation"
        >Active</minerva-badge
      >
    </minerva-description-item>
    <minerva-description-item label="Owner">
      <minerva-text-link href="mailto:jane@example.com"
        >Jane Cooper</minerva-text-link
      >
    </minerva-description-item>
  </minerva-description-list>
</template>
`,angular:`// description-list-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-description-list-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-description-list style="max-width: 480px">
      <minerva-description-item label="Customer"
        >Acme Corporation</minerva-description-item
      >
      <minerva-description-item label="Plan"
        >Business, billed yearly</minerva-description-item
      >
      <minerva-description-item label="Status">
        <minerva-badge color="success" badge-role="presentation"
          >Active</minerva-badge
        >
      </minerva-description-item>
      <minerva-description-item label="Owner">
        <minerva-text-link href="mailto:jane@example.com"
          >Jane Cooper</minerva-text-link
        >
      </minerva-description-item>
    </minerva-description-list>
  \`,
})
export class DescriptionListBasicComponent {}
`,svelte:`<!-- DescriptionListBasic.svelte -->

<minerva-description-list style="max-width: 480px">
  <minerva-description-item label="Customer"
    >Acme Corporation</minerva-description-item>
  <minerva-description-item label="Plan"
    >Business, billed yearly</minerva-description-item>
  <minerva-description-item label="Status">
    <minerva-badge color="success" badge-role="presentation"
      >Active</minerva-badge>
  </minerva-description-item>
  <minerva-description-item label="Owner">
    <minerva-text-link href="mailto:jane@example.com"
      >Jane Cooper</minerva-text-link>
  </minerva-description-item>
</minerva-description-list>
`,solid:`// DescriptionListBasic.tsx

export default function DescriptionListBasic() {
  return (
    <minerva-description-list style="max-width: 480px">
      <minerva-description-item label="Customer">
        Acme Corporation
      </minerva-description-item>
      <minerva-description-item label="Plan">
        Business, billed yearly
      </minerva-description-item>
      <minerva-description-item label="Status">
        <minerva-badge color="success" badge-role="presentation">
          Active
        </minerva-badge>
      </minerva-description-item>
      <minerva-description-item label="Owner">
        <minerva-text-link href="mailto:jane@example.com">
          Jane Cooper
        </minerva-text-link>
      </minerva-description-item>
    </minerva-description-list>
  );
}
`,html:`<minerva-description-list style="max-width: 480px">
  <minerva-description-item label="Customer"
    >Acme Corporation</minerva-description-item
  >
  <minerva-description-item label="Plan"
    >Business, billed yearly</minerva-description-item
  >
  <minerva-description-item label="Status">
    <minerva-badge color="success" badge-role="presentation"
      >Active</minerva-badge
    >
  </minerva-description-item>
  <minerva-description-item label="Owner">
    <minerva-text-link href="mailto:jane@example.com"
      >Jane Cooper</minerva-text-link
    >
  </minerva-description-item>
</minerva-description-list>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};