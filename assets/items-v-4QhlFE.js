import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DescriptionListItems.vue -->

<script setup lang="ts">
// \`items\` rows (data from JS) are rendered before the declarative
// <minerva-description-item> children; 0 is rendered as a value.

type Row = { key?: string; label: string; value: string | number };

const listItems = [
  { key: "id", label: "Order", value: "#10482" },
  { key: "date", label: "Placed on", value: "March 4, 2026" },
  { key: "total", label: "Total", value: "€129.00" },
  { key: "returns", label: "Returns", value: 0 },
];
<\/script>

<template>
  <minerva-description-list
    id="order"
    style="max-width: 480px"
    :items.prop="listItems"
  >
    <minerva-description-item label="Notes"
      >Leave the parcel at the reception desk.</minerva-description-item
    >
  </minerva-description-list>
</template>
`,angular:`// description-list-items.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// \`items\` rows (data from JS) are rendered before the declarative
// <minerva-description-item> children; 0 is rendered as a value.
type Row = { key?: string; label: string; value: string | number };

@Component({
  selector: "app-description-list-items",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-description-list
      id="order"
      style="max-width: 480px"
      [items]="listItems"
    >
      <minerva-description-item label="Notes"
        >Leave the parcel at the reception desk.</minerva-description-item
      >
    </minerva-description-list>
  \`,
})
export class DescriptionListItemsComponent {
  listItems = [
    { key: "id", label: "Order", value: "#10482" },
    { key: "date", label: "Placed on", value: "March 4, 2026" },
    { key: "total", label: "Total", value: "€129.00" },
    { key: "returns", label: "Returns", value: 0 },
  ];
}
`,svelte:`<!-- DescriptionListItems.svelte -->

<script lang="ts">
  // \`items\` rows (data from JS) are rendered before the declarative
  // <minerva-description-item> children; 0 is rendered as a value.

  type Row = { key?: string; label: string; value: string | number };

  const listItems = [
    { key: "id", label: "Order", value: "#10482" },
    { key: "date", label: "Placed on", value: "March 4, 2026" },
    { key: "total", label: "Total", value: "€129.00" },
    { key: "returns", label: "Returns", value: 0 },
  ];
<\/script>

<minerva-description-list id="order" style="max-width: 480px" items={listItems}>
  <minerva-description-item label="Notes"
    >Leave the parcel at the reception desk.</minerva-description-item>
</minerva-description-list>
`,solid:`// DescriptionListItems.tsx

// \`items\` rows (data from JS) are rendered before the declarative
// <minerva-description-item> children; 0 is rendered as a value.
type Row = { key?: string; label: string; value: string | number };

export default function DescriptionListItems() {
  const listItems = [
    { key: "id", label: "Order", value: "#10482" },
    { key: "date", label: "Placed on", value: "March 4, 2026" },
    { key: "total", label: "Total", value: "€129.00" },
    { key: "returns", label: "Returns", value: 0 },
  ];

  return (
    <minerva-description-list
      id="order"
      style="max-width: 480px"
      prop:items={listItems}
    >
      <minerva-description-item label="Notes">
        Leave the parcel at the reception desk.
      </minerva-description-item>
    </minerva-description-list>
  );
}
`,html:`<minerva-description-list id="order" style="max-width: 480px">
  <minerva-description-item label="Notes"
    >Leave the parcel at the reception desk.</minerva-description-item
  >
</minerva-description-list>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // \`items\` rows (data from JS) are rendered before the declarative
  // <minerva-description-item> children; 0 is rendered as a value.
  const list = document.querySelector("#order");
  list.items = [
    { key: "id", label: "Order", value: "#10482" },
    { key: "date", label: "Placed on", value: "March 4, 2026" },
    { key: "total", label: "Total", value: "€129.00" },
    { key: "returns", label: "Returns", value: 0 },
  ];
<\/script>
`}})))()}n();export{t as default};