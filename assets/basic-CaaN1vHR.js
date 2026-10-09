import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AlertBasic.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <minerva-alert color="info" heading="Heads up"
      >A new version is available.</minerva-alert
    >
    <minerva-alert color="success" heading="Saved"
      >Your changes have been saved.</minerva-alert
    >
    <minerva-alert color="warning" heading="Storage almost full"
      >You have used 90% of your quota.</minerva-alert
    >
    <minerva-alert color="danger" heading="Payment failed"
      >Check your card details and try again.</minerva-alert
    >
  </div>
</template>
`,angular:`// alert-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-alert-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <minerva-alert color="info" heading="Heads up"
        >A new version is available.</minerva-alert
      >
      <minerva-alert color="success" heading="Saved"
        >Your changes have been saved.</minerva-alert
      >
      <minerva-alert color="warning" heading="Storage almost full"
        >You have used 90% of your quota.</minerva-alert
      >
      <minerva-alert color="danger" heading="Payment failed"
        >Check your card details and try again.</minerva-alert
      >
    </div>
  \`,
})
export class AlertBasicComponent {}
`,svelte:`<!-- AlertBasic.svelte -->

<div style="display: grid; gap: 12px">
  <minerva-alert color="info" heading="Heads up"
    >A new version is available.</minerva-alert>
  <minerva-alert color="success" heading="Saved"
    >Your changes have been saved.</minerva-alert>
  <minerva-alert color="warning" heading="Storage almost full"
    >You have used 90% of your quota.</minerva-alert>
  <minerva-alert color="danger" heading="Payment failed"
    >Check your card details and try again.</minerva-alert>
</div>
`,solid:`// AlertBasic.tsx

export default function AlertBasic() {
  return (
    <div style="display: grid; gap: 12px">
      <minerva-alert color="info" heading="Heads up">
        A new version is available.
      </minerva-alert>
      <minerva-alert color="success" heading="Saved">
        Your changes have been saved.
      </minerva-alert>
      <minerva-alert color="warning" heading="Storage almost full">
        You have used 90% of your quota.
      </minerva-alert>
      <minerva-alert color="danger" heading="Payment failed">
        Check your card details and try again.
      </minerva-alert>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <minerva-alert color="info" heading="Heads up"
    >A new version is available.</minerva-alert
  >
  <minerva-alert color="success" heading="Saved"
    >Your changes have been saved.</minerva-alert
  >
  <minerva-alert color="warning" heading="Storage almost full"
    >You have used 90% of your quota.</minerva-alert
  >
  <minerva-alert color="danger" heading="Payment failed"
    >Check your card details and try again.</minerva-alert
  >
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};