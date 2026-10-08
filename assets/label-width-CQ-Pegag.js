import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ProgressLabelWidth.vue -->

<template>
  <div style="display: grid; gap: 16px">
    <minerva-progress label="Uploading files…"></minerva-progress>
    <minerva-progress variant="bar" width="320px">
      <span slot="label">Importing <strong>contacts.csv</strong></span>
    </minerva-progress>
    <minerva-progress variant="wave" label="Syncing">
      <span slot="icon" aria-hidden="true">☁</span>
    </minerva-progress>
    <minerva-progress
      variant="dottedBar"
      full
      aria-label="Loading results"
    ></minerva-progress>
    <minerva-button disabled>
      <minerva-progress
        slot="start"
        decorative
        size="xsmall"
        color="current"
      ></minerva-progress>
      Saving…
    </minerva-button>
  </div>
</template>
`,angular:`// progress-label-width.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-progress-label-width",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px">
      <minerva-progress label="Uploading files…"></minerva-progress>
      <minerva-progress variant="bar" width="320px">
        <span slot="label">Importing <strong>contacts.csv</strong></span>
      </minerva-progress>
      <minerva-progress variant="wave" label="Syncing">
        <span slot="icon" aria-hidden="true">☁</span>
      </minerva-progress>
      <minerva-progress
        variant="dottedBar"
        full
        aria-label="Loading results"
      ></minerva-progress>
      <minerva-button disabled>
        <minerva-progress
          slot="start"
          decorative
          size="xsmall"
          color="current"
        ></minerva-progress>
        Saving…
      </minerva-button>
    </div>
  \`,
})
export class ProgressLabelWidthComponent {}
`,svelte:`<!-- ProgressLabelWidth.svelte -->

<div style="display: grid; gap: 16px">
  <minerva-progress label="Uploading files…"></minerva-progress>
  <minerva-progress variant="bar" width="320px">
    <span slot="label">Importing <strong>contacts.csv</strong></span>
  </minerva-progress>
  <minerva-progress variant="wave" label="Syncing">
    <span slot="icon" aria-hidden="true">☁</span>
  </minerva-progress>
  <minerva-progress
    variant="dottedBar"
    full
    aria-label="Loading results"
  ></minerva-progress>
  <minerva-button disabled>
    <minerva-progress
      slot="start"
      decorative
      size="xsmall"
      color="current"
    ></minerva-progress>
    Saving…
  </minerva-button>
</div>
`,solid:`// ProgressLabelWidth.tsx

export default function ProgressLabelWidth() {
  return (
    <div style="display: grid; gap: 16px">
      <minerva-progress label="Uploading files…"></minerva-progress>
      <minerva-progress variant="bar" width="320px">
        <span slot="label">
          Importing <strong>contacts.csv</strong>
        </span>
      </minerva-progress>
      <minerva-progress variant="wave" label="Syncing">
        <span slot="icon" aria-hidden="true">
          ☁
        </span>
      </minerva-progress>
      <minerva-progress
        variant="dottedBar"
        full
        aria-label="Loading results"
      ></minerva-progress>
      <minerva-button disabled>
        <minerva-progress
          slot="start"
          decorative
          size="xsmall"
          color="current"
        ></minerva-progress>
        Saving…
      </minerva-button>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px">
  <minerva-progress label="Uploading files…"></minerva-progress>
  <minerva-progress variant="bar" width="320px">
    <span slot="label">Importing <strong>contacts.csv</strong></span>
  </minerva-progress>
  <minerva-progress variant="wave" label="Syncing">
    <span slot="icon" aria-hidden="true">☁</span>
  </minerva-progress>
  <minerva-progress
    variant="dottedBar"
    full
    aria-label="Loading results"
  ></minerva-progress>
  <minerva-button disabled>
    <minerva-progress
      slot="start"
      decorative
      size="xsmall"
      color="current"
    ></minerva-progress>
    Saving…
  </minerva-button>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};