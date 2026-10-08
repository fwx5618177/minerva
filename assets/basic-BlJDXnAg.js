import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TabsBasic.vue -->

<template>
  <minerva-tabs label="Account settings" value="profile">
    <minerva-tab value="profile">Profile</minerva-tab>
    <minerva-tab value="security">Security</minerva-tab>
    <minerva-tab value="billing" disabled>Billing</minerva-tab>
    <minerva-tab value="notifications">Notifications</minerva-tab>
    <minerva-tab-panel value="profile"
      >Your name, avatar and bio.</minerva-tab-panel
    >
    <minerva-tab-panel value="security"
      >Password and two-factor authentication.</minerva-tab-panel
    >
    <minerva-tab-panel value="billing"
      >Invoices and payment methods.</minerva-tab-panel
    >
    <minerva-tab-panel value="notifications"
      >Email and push preferences.</minerva-tab-panel
    >
  </minerva-tabs>
</template>
`,angular:`// tabs-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tabs-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-tabs label="Account settings" value="profile">
      <minerva-tab value="profile">Profile</minerva-tab>
      <minerva-tab value="security">Security</minerva-tab>
      <minerva-tab value="billing" disabled>Billing</minerva-tab>
      <minerva-tab value="notifications">Notifications</minerva-tab>
      <minerva-tab-panel value="profile"
        >Your name, avatar and bio.</minerva-tab-panel
      >
      <minerva-tab-panel value="security"
        >Password and two-factor authentication.</minerva-tab-panel
      >
      <minerva-tab-panel value="billing"
        >Invoices and payment methods.</minerva-tab-panel
      >
      <minerva-tab-panel value="notifications"
        >Email and push preferences.</minerva-tab-panel
      >
    </minerva-tabs>
  \`,
})
export class TabsBasicComponent {}
`,svelte:`<!-- TabsBasic.svelte -->

<minerva-tabs label="Account settings" value="profile">
  <minerva-tab value="profile">Profile</minerva-tab>
  <minerva-tab value="security">Security</minerva-tab>
  <minerva-tab value="billing" disabled>Billing</minerva-tab>
  <minerva-tab value="notifications">Notifications</minerva-tab>
  <minerva-tab-panel value="profile"
    >Your name, avatar and bio.</minerva-tab-panel>
  <minerva-tab-panel value="security"
    >Password and two-factor authentication.</minerva-tab-panel>
  <minerva-tab-panel value="billing"
    >Invoices and payment methods.</minerva-tab-panel>
  <minerva-tab-panel value="notifications"
    >Email and push preferences.</minerva-tab-panel>
</minerva-tabs>
`,solid:`// TabsBasic.tsx

export default function TabsBasic() {
  return (
    <minerva-tabs label="Account settings" value="profile">
      <minerva-tab value="profile">Profile</minerva-tab>
      <minerva-tab value="security">Security</minerva-tab>
      <minerva-tab value="billing" disabled>
        Billing
      </minerva-tab>
      <minerva-tab value="notifications">Notifications</minerva-tab>
      <minerva-tab-panel value="profile">
        Your name, avatar and bio.
      </minerva-tab-panel>
      <minerva-tab-panel value="security">
        Password and two-factor authentication.
      </minerva-tab-panel>
      <minerva-tab-panel value="billing">
        Invoices and payment methods.
      </minerva-tab-panel>
      <minerva-tab-panel value="notifications">
        Email and push preferences.
      </minerva-tab-panel>
    </minerva-tabs>
  );
}
`,html:`<minerva-tabs label="Account settings" value="profile">
  <minerva-tab value="profile">Profile</minerva-tab>
  <minerva-tab value="security">Security</minerva-tab>
  <minerva-tab value="billing" disabled>Billing</minerva-tab>
  <minerva-tab value="notifications">Notifications</minerva-tab>
  <minerva-tab-panel value="profile"
    >Your name, avatar and bio.</minerva-tab-panel
  >
  <minerva-tab-panel value="security"
    >Password and two-factor authentication.</minerva-tab-panel
  >
  <minerva-tab-panel value="billing"
    >Invoices and payment methods.</minerva-tab-panel
  >
  <minerva-tab-panel value="notifications"
    >Email and push preferences.</minerva-tab-panel
  >
</minerva-tabs>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};