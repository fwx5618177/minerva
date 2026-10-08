import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TagVariantsSizes.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-tag color="primary" variant="subtle">Subtle</minerva-tag>
      <minerva-tag color="primary" variant="outline">Outline</minerva-tag>
      <minerva-tag color="primary" variant="solid">Solid</minerva-tag>
      <minerva-tag color="primary" elevation>Elevation</minerva-tag>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-tag size="small">Small</minerva-tag>
      <minerva-tag size="medium">Medium</minerva-tag>
      <minerva-tag size="large">Large</minerva-tag>
      <minerva-tag shape="square">Square</minerva-tag>
      <minerva-tag shape="rounded">Rounded</minerva-tag>
      <minerva-tag shape="circle">Circle</minerva-tag>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-tag color="success">
        <span slot="icon" aria-hidden="true">✓</span>
        Deployed
      </minerva-tag>
      <minerva-tag variant="outline">
        <minerva-avatar
          slot="avatar"
          size="xsmall"
          name="Ada Lovelace"
        ></minerva-avatar>
        Ada Lovelace
      </minerva-tag>
      <minerva-tag loading>Syncing</minerva-tag>
      <minerva-tag disabled closable>Disabled</minerva-tag>
    </div>
  </div>
</template>
`,angular:`// tag-variants-sizes.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tag-variants-sizes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-tag color="primary" variant="subtle">Subtle</minerva-tag>
        <minerva-tag color="primary" variant="outline">Outline</minerva-tag>
        <minerva-tag color="primary" variant="solid">Solid</minerva-tag>
        <minerva-tag color="primary" elevation>Elevation</minerva-tag>
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center"
      >
        <minerva-tag size="small">Small</minerva-tag>
        <minerva-tag size="medium">Medium</minerva-tag>
        <minerva-tag size="large">Large</minerva-tag>
        <minerva-tag shape="square">Square</minerva-tag>
        <minerva-tag shape="rounded">Rounded</minerva-tag>
        <minerva-tag shape="circle">Circle</minerva-tag>
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center"
      >
        <minerva-tag color="success">
          <span slot="icon" aria-hidden="true">✓</span>
          Deployed
        </minerva-tag>
        <minerva-tag variant="outline">
          <minerva-avatar
            slot="avatar"
            size="xsmall"
            name="Ada Lovelace"
          ></minerva-avatar>
          Ada Lovelace
        </minerva-tag>
        <minerva-tag loading>Syncing</minerva-tag>
        <minerva-tag disabled closable>Disabled</minerva-tag>
      </div>
    </div>
  \`,
})
export class TagVariantsSizesComponent {}
`,svelte:`<!-- TagVariantsSizes.svelte -->

<div style="display: grid; gap: 12px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-tag color="primary" variant="subtle">Subtle</minerva-tag>
    <minerva-tag color="primary" variant="outline">Outline</minerva-tag>
    <minerva-tag color="primary" variant="solid">Solid</minerva-tag>
    <minerva-tag color="primary" elevation>Elevation</minerva-tag>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-tag size="small">Small</minerva-tag>
    <minerva-tag size="medium">Medium</minerva-tag>
    <minerva-tag size="large">Large</minerva-tag>
    <minerva-tag shape="square">Square</minerva-tag>
    <minerva-tag shape="rounded">Rounded</minerva-tag>
    <minerva-tag shape="circle">Circle</minerva-tag>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-tag color="success">
      <span slot="icon" aria-hidden="true">✓</span>
      Deployed
    </minerva-tag>
    <minerva-tag variant="outline">
      <minerva-avatar
        slot="avatar"
        size="xsmall"
        name="Ada Lovelace"
      ></minerva-avatar>
      Ada Lovelace
    </minerva-tag>
    <minerva-tag loading>Syncing</minerva-tag>
    <minerva-tag disabled closable>Disabled</minerva-tag>
  </div>
</div>
`,solid:`// TagVariantsSizes.tsx

export default function TagVariantsSizes() {
  return (
    <div style="display: grid; gap: 12px">
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-tag color="primary" variant="subtle">
          Subtle
        </minerva-tag>
        <minerva-tag color="primary" variant="outline">
          Outline
        </minerva-tag>
        <minerva-tag color="primary" variant="solid">
          Solid
        </minerva-tag>
        <minerva-tag color="primary" elevation>
          Elevation
        </minerva-tag>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
        <minerva-tag size="small">Small</minerva-tag>
        <minerva-tag size="medium">Medium</minerva-tag>
        <minerva-tag size="large">Large</minerva-tag>
        <minerva-tag shape="square">Square</minerva-tag>
        <minerva-tag shape="rounded">Rounded</minerva-tag>
        <minerva-tag shape="circle">Circle</minerva-tag>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
        <minerva-tag color="success">
          <span slot="icon" aria-hidden="true">
            ✓
          </span>
          Deployed
        </minerva-tag>
        <minerva-tag variant="outline">
          <minerva-avatar
            slot="avatar"
            size="xsmall"
            name="Ada Lovelace"
          ></minerva-avatar>
          Ada Lovelace
        </minerva-tag>
        <minerva-tag loading>Syncing</minerva-tag>
        <minerva-tag disabled closable>
          Disabled
        </minerva-tag>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-tag color="primary" variant="subtle">Subtle</minerva-tag>
    <minerva-tag color="primary" variant="outline">Outline</minerva-tag>
    <minerva-tag color="primary" variant="solid">Solid</minerva-tag>
    <minerva-tag color="primary" elevation>Elevation</minerva-tag>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-tag size="small">Small</minerva-tag>
    <minerva-tag size="medium">Medium</minerva-tag>
    <minerva-tag size="large">Large</minerva-tag>
    <minerva-tag shape="square">Square</minerva-tag>
    <minerva-tag shape="rounded">Rounded</minerva-tag>
    <minerva-tag shape="circle">Circle</minerva-tag>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-tag color="success">
      <span slot="icon" aria-hidden="true">✓</span>
      Deployed
    </minerva-tag>
    <minerva-tag variant="outline">
      <minerva-avatar
        slot="avatar"
        size="xsmall"
        name="Ada Lovelace"
      ></minerva-avatar>
      Ada Lovelace
    </minerva-tag>
    <minerva-tag loading>Syncing</minerva-tag>
    <minerva-tag disabled closable>Disabled</minerva-tag>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};