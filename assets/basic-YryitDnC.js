import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DrawerBasic.vue -->

<template>
  <minerva-drawer
    label="Filters"
    description="Narrow down the list of orders."
    size="small"
  >
    <minerva-button slot="trigger">Open drawer</minerva-button>
    <fieldset style="display: grid; gap: 8px; border: 0; padding: 0; margin: 0">
      <label><input type="checkbox" checked /> Paid</label>
      <label><input type="checkbox" /> Refunded</label>
      <label><input type="checkbox" /> Shipped</label>
    </fieldset>
    <minerva-button
      slot="footer"
      data-drawer-close
      color="neutral"
      variant="outline"
      >Cancel</minerva-button
    >
    <minerva-button slot="footer" data-drawer-close>Apply</minerva-button>
  </minerva-drawer>
</template>
`,angular:`// drawer-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-drawer-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-drawer
      label="Filters"
      description="Narrow down the list of orders."
      size="small"
    >
      <minerva-button slot="trigger">Open drawer</minerva-button>
      <fieldset
        style="display: grid; gap: 8px; border: 0; padding: 0; margin: 0"
      >
        <label><input type="checkbox" checked /> Paid</label>
        <label><input type="checkbox" /> Refunded</label>
        <label><input type="checkbox" /> Shipped</label>
      </fieldset>
      <minerva-button
        slot="footer"
        data-drawer-close
        color="neutral"
        variant="outline"
        >Cancel</minerva-button
      >
      <minerva-button slot="footer" data-drawer-close>Apply</minerva-button>
    </minerva-drawer>
  \`,
})
export class DrawerBasicComponent {}
`,svelte:`<!-- DrawerBasic.svelte -->

<minerva-drawer
  label="Filters"
  description="Narrow down the list of orders."
  size="small"
>
  <minerva-button slot="trigger">Open drawer</minerva-button>
  <fieldset style="display: grid; gap: 8px; border: 0; padding: 0; margin: 0">
    <label><input type="checkbox" checked /> Paid</label>
    <label><input type="checkbox" /> Refunded</label>
    <label><input type="checkbox" /> Shipped</label>
  </fieldset>
  <minerva-button
    slot="footer"
    data-drawer-close
    color="neutral"
    variant="outline"
    >Cancel</minerva-button>
  <minerva-button slot="footer" data-drawer-close>Apply</minerva-button>
</minerva-drawer>
`,solid:`// DrawerBasic.tsx

export default function DrawerBasic() {
  return (
    <minerva-drawer
      label="Filters"
      description="Narrow down the list of orders."
      size="small"
    >
      <minerva-button slot="trigger">Open drawer</minerva-button>
      <fieldset style="display: grid; gap: 8px; border: 0; padding: 0; margin: 0">
        <label>
          <input type="checkbox" checked /> Paid
        </label>
        <label>
          <input type="checkbox" /> Refunded
        </label>
        <label>
          <input type="checkbox" /> Shipped
        </label>
      </fieldset>
      <minerva-button
        slot="footer"
        data-drawer-close
        color="neutral"
        variant="outline"
      >
        Cancel
      </minerva-button>
      <minerva-button slot="footer" data-drawer-close>
        Apply
      </minerva-button>
    </minerva-drawer>
  );
}
`,html:`<minerva-drawer
  label="Filters"
  description="Narrow down the list of orders."
  size="small"
>
  <minerva-button slot="trigger">Open drawer</minerva-button>
  <fieldset style="display: grid; gap: 8px; border: 0; padding: 0; margin: 0">
    <label><input type="checkbox" checked /> Paid</label>
    <label><input type="checkbox" /> Refunded</label>
    <label><input type="checkbox" /> Shipped</label>
  </fieldset>
  <minerva-button
    slot="footer"
    data-drawer-close
    color="neutral"
    variant="outline"
    >Cancel</minerva-button
  >
  <minerva-button slot="footer" data-drawer-close>Apply</minerva-button>
</minerva-drawer>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};