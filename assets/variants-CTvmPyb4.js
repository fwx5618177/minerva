import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TabsVariants.vue -->

<template>
  <div style="display: grid; gap: 20px">
    <minerva-tabs label="Line" value="a">
      <minerva-tab value="a">Overview</minerva-tab>
      <minerva-tab value="b">Activity</minerva-tab>
      <minerva-tab value="c">Settings</minerva-tab>
    </minerva-tabs>
    <minerva-tabs label="Enclosed" variant="enclosed" value="a">
      <minerva-tab value="a">Overview</minerva-tab>
      <minerva-tab value="b">Activity</minerva-tab>
      <minerva-tab value="c">Settings</minerva-tab>
    </minerva-tabs>
    <minerva-tabs label="Soft" variant="soft" color="success" value="a">
      <minerva-tab value="a">Overview</minerva-tab>
      <minerva-tab value="b">Activity</minerva-tab>
      <minerva-tab value="c">Settings</minerva-tab>
    </minerva-tabs>
    <minerva-tabs label="Pills" variant="pills" color="info" value="a">
      <minerva-tab value="a">Overview</minerva-tab>
      <minerva-tab value="b">Activity</minerva-tab>
      <minerva-tab value="c" color="danger">Danger zone</minerva-tab>
    </minerva-tabs>
  </div>
</template>
`,angular:`// tabs-variants.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tabs-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 20px">
      <minerva-tabs label="Line" value="a">
        <minerva-tab value="a">Overview</minerva-tab>
        <minerva-tab value="b">Activity</minerva-tab>
        <minerva-tab value="c">Settings</minerva-tab>
      </minerva-tabs>
      <minerva-tabs label="Enclosed" variant="enclosed" value="a">
        <minerva-tab value="a">Overview</minerva-tab>
        <minerva-tab value="b">Activity</minerva-tab>
        <minerva-tab value="c">Settings</minerva-tab>
      </minerva-tabs>
      <minerva-tabs label="Soft" variant="soft" color="success" value="a">
        <minerva-tab value="a">Overview</minerva-tab>
        <minerva-tab value="b">Activity</minerva-tab>
        <minerva-tab value="c">Settings</minerva-tab>
      </minerva-tabs>
      <minerva-tabs label="Pills" variant="pills" color="info" value="a">
        <minerva-tab value="a">Overview</minerva-tab>
        <minerva-tab value="b">Activity</minerva-tab>
        <minerva-tab value="c" color="danger">Danger zone</minerva-tab>
      </minerva-tabs>
    </div>
  \`,
})
export class TabsVariantsComponent {}
`,svelte:`<!-- TabsVariants.svelte -->

<div style="display: grid; gap: 20px">
  <minerva-tabs label="Line" value="a">
    <minerva-tab value="a">Overview</minerva-tab>
    <minerva-tab value="b">Activity</minerva-tab>
    <minerva-tab value="c">Settings</minerva-tab>
  </minerva-tabs>
  <minerva-tabs label="Enclosed" variant="enclosed" value="a">
    <minerva-tab value="a">Overview</minerva-tab>
    <minerva-tab value="b">Activity</minerva-tab>
    <minerva-tab value="c">Settings</minerva-tab>
  </minerva-tabs>
  <minerva-tabs label="Soft" variant="soft" color="success" value="a">
    <minerva-tab value="a">Overview</minerva-tab>
    <minerva-tab value="b">Activity</minerva-tab>
    <minerva-tab value="c">Settings</minerva-tab>
  </minerva-tabs>
  <minerva-tabs label="Pills" variant="pills" color="info" value="a">
    <minerva-tab value="a">Overview</minerva-tab>
    <minerva-tab value="b">Activity</minerva-tab>
    <minerva-tab value="c" color="danger">Danger zone</minerva-tab>
  </minerva-tabs>
</div>
`,solid:`// TabsVariants.tsx

export default function TabsVariants() {
  return (
    <div style="display: grid; gap: 20px">
      <minerva-tabs label="Line" value="a">
        <minerva-tab value="a">Overview</minerva-tab>
        <minerva-tab value="b">Activity</minerva-tab>
        <minerva-tab value="c">Settings</minerva-tab>
      </minerva-tabs>
      <minerva-tabs label="Enclosed" variant="enclosed" value="a">
        <minerva-tab value="a">Overview</minerva-tab>
        <minerva-tab value="b">Activity</minerva-tab>
        <minerva-tab value="c">Settings</minerva-tab>
      </minerva-tabs>
      <minerva-tabs label="Soft" variant="soft" color="success" value="a">
        <minerva-tab value="a">Overview</minerva-tab>
        <minerva-tab value="b">Activity</minerva-tab>
        <minerva-tab value="c">Settings</minerva-tab>
      </minerva-tabs>
      <minerva-tabs label="Pills" variant="pills" color="info" value="a">
        <minerva-tab value="a">Overview</minerva-tab>
        <minerva-tab value="b">Activity</minerva-tab>
        <minerva-tab value="c" color="danger">
          Danger zone
        </minerva-tab>
      </minerva-tabs>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 20px">
  <minerva-tabs label="Line" value="a">
    <minerva-tab value="a">Overview</minerva-tab>
    <minerva-tab value="b">Activity</minerva-tab>
    <minerva-tab value="c">Settings</minerva-tab>
  </minerva-tabs>
  <minerva-tabs label="Enclosed" variant="enclosed" value="a">
    <minerva-tab value="a">Overview</minerva-tab>
    <minerva-tab value="b">Activity</minerva-tab>
    <minerva-tab value="c">Settings</minerva-tab>
  </minerva-tabs>
  <minerva-tabs label="Soft" variant="soft" color="success" value="a">
    <minerva-tab value="a">Overview</minerva-tab>
    <minerva-tab value="b">Activity</minerva-tab>
    <minerva-tab value="c">Settings</minerva-tab>
  </minerva-tabs>
  <minerva-tabs label="Pills" variant="pills" color="info" value="a">
    <minerva-tab value="a">Overview</minerva-tab>
    <minerva-tab value="b">Activity</minerva-tab>
    <minerva-tab value="c" color="danger">Danger zone</minerva-tab>
  </minerva-tabs>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};