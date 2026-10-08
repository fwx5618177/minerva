import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TableSorting.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`sortable: true\` sorts by row[key]; a function is a custom comparator.
// Each header click cycles ascending -> descending -> unsorted and fires the
// cancelable \`minerva-sort-change\`.

type Country = { code: string; name: string; population: number };
type Column = {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  sortable?: boolean | ((a: Country, b: Country) => number);
  render?: (row: Country) => string;
};
type SortState = { key: string; order: "ascend" | "descend" | null };

const outputText = ref("");

const tableColumns = [
  { key: "code", header: "Code" },
  { key: "name", header: "Country", sortable: true },
  {
    key: "population",
    header: "Population (M)",
    align: "right",
    sortable: (a, b) => a.population - b.population,
    render: (row) => row.population.toFixed(1),
  },
];
const tableRows = [
  { code: "BR", name: "Brazil", population: 216.4 },
  { code: "FR", name: "France", population: 68.2 },
  { code: "JP", name: "Japan", population: 124.5 },
  { code: "NG", name: "Nigeria", population: 223.8 },
  { code: "CN", name: "China", population: 1409.7 },
];
const tableSortState = { key: "name", order: "ascend" };
const onSort = (event: Event) => {
  const { key, order } = (event as CustomEvent<SortState>).detail;
  outputText.value = order ? \`Sorted by \${key} (\${order})\` : "Unsorted";
};
<\/script>

<template>
  <div style="display: grid; gap: 8px">
    <minerva-data-table
      id="countries"
      row-key="code"
      :columns.prop="tableColumns"
      :rows.prop="tableRows"
      :sortState.prop="tableSortState"
      @minerva-sort-change="onSort"
    ></minerva-data-table>
    <output id="sort-state">{{ outputText }}</output>
  </div>
</template>
`,angular:`// table-sorting.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// \`sortable: true\` sorts by row[key]; a function is a custom comparator.
// Each header click cycles ascending -> descending -> unsorted and fires the
// cancelable \`minerva-sort-change\`.
type Country = { code: string; name: string; population: number };
type Column = {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  sortable?: boolean | ((a: Country, b: Country) => number);
  render?: (row: Country) => string;
};
type SortState = { key: string; order: "ascend" | "descend" | null };

@Component({
  selector: "app-table-sorting",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px">
      <minerva-data-table
        id="countries"
        row-key="code"
        [columns]="tableColumns"
        [rows]="tableRows"
        [sortState]="tableSortState"
        (minerva-sort-change)="onSort($event)"
      ></minerva-data-table>
      <output id="sort-state">{{ outputText }}</output>
    </div>
  \`,
})
export class TableSortingComponent {
  outputText = "";

  tableColumns = [
    { key: "code", header: "Code" },
    { key: "name", header: "Country", sortable: true },
    {
      key: "population",
      header: "Population (M)",
      align: "right",
      sortable: (a, b) => a.population - b.population,
      render: (row) => row.population.toFixed(1),
    },
  ];
  tableRows = [
    { code: "BR", name: "Brazil", population: 216.4 },
    { code: "FR", name: "France", population: 68.2 },
    { code: "JP", name: "Japan", population: 124.5 },
    { code: "NG", name: "Nigeria", population: 223.8 },
    { code: "CN", name: "China", population: 1409.7 },
  ];
  tableSortState = { key: "name", order: "ascend" };
  onSort = (event: Event) => {
    const { key, order } = (event as CustomEvent<SortState>).detail;
    this.outputText = order ? \`Sorted by \${key} (\${order})\` : "Unsorted";
  };
}
`,svelte:`<!-- TableSorting.svelte -->

<script lang="ts">
  // \`sortable: true\` sorts by row[key]; a function is a custom comparator.
  // Each header click cycles ascending -> descending -> unsorted and fires the
  // cancelable \`minerva-sort-change\`.

  type Country = { code: string; name: string; population: number };
  type Column = {
    key: string;
    header: string;
    align?: "left" | "center" | "right";
    sortable?: boolean | ((a: Country, b: Country) => number);
    render?: (row: Country) => string;
  };
  type SortState = { key: string; order: "ascend" | "descend" | null };

  let outputText = $state("");

  const tableColumns = [
    { key: "code", header: "Code" },
    { key: "name", header: "Country", sortable: true },
    {
      key: "population",
      header: "Population (M)",
      align: "right",
      sortable: (a, b) => a.population - b.population,
      render: (row) => row.population.toFixed(1),
    },
  ];
  const tableRows = [
    { code: "BR", name: "Brazil", population: 216.4 },
    { code: "FR", name: "France", population: 68.2 },
    { code: "JP", name: "Japan", population: 124.5 },
    { code: "NG", name: "Nigeria", population: 223.8 },
    { code: "CN", name: "China", population: 1409.7 },
  ];
  const tableSortState = { key: "name", order: "ascend" };
  const onSort = (event: Event) => {
    const { key, order } = (event as CustomEvent<SortState>).detail;
    outputText = order ? \`Sorted by \${key} (\${order})\` : "Unsorted";
  };
<\/script>

<div style="display: grid; gap: 8px">
  <minerva-data-table
    id="countries"
    row-key="code"
    columns={tableColumns}
    rows={tableRows}
    sortState={tableSortState}
    onminerva-sort-change={onSort}
  ></minerva-data-table>
  <output id="sort-state">{outputText}</output>
</div>
`,solid:`// TableSorting.tsx

import { createSignal } from "solid-js";

// \`sortable: true\` sorts by row[key]; a function is a custom comparator.
// Each header click cycles ascending -> descending -> unsorted and fires the
// cancelable \`minerva-sort-change\`.
type Country = { code: string; name: string; population: number };
type Column = {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  sortable?: boolean | ((a: Country, b: Country) => number);
  render?: (row: Country) => string;
};
type SortState = { key: string; order: "ascend" | "descend" | null };

export default function TableSorting() {
  const [outputText, setOutputText] = createSignal("");

  const tableColumns = [
    { key: "code", header: "Code" },
    { key: "name", header: "Country", sortable: true },
    {
      key: "population",
      header: "Population (M)",
      align: "right",
      sortable: (a, b) => a.population - b.population,
      render: (row) => row.population.toFixed(1),
    },
  ];
  const tableRows = [
    { code: "BR", name: "Brazil", population: 216.4 },
    { code: "FR", name: "France", population: 68.2 },
    { code: "JP", name: "Japan", population: 124.5 },
    { code: "NG", name: "Nigeria", population: 223.8 },
    { code: "CN", name: "China", population: 1409.7 },
  ];
  const tableSortState = { key: "name", order: "ascend" };
  const onSort = (event: Event) => {
    const { key, order } = (event as CustomEvent<SortState>).detail;
    setOutputText(order ? \`Sorted by \${key} (\${order})\` : "Unsorted");
  };

  return (
    <div style="display: grid; gap: 8px">
      <minerva-data-table
        id="countries"
        row-key="code"
        prop:columns={tableColumns}
        prop:rows={tableRows}
        prop:sortState={tableSortState}
        on:minerva-sort-change={onSort}
      ></minerva-data-table>
      <output id="sort-state">{outputText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px">
  <minerva-data-table id="countries" row-key="code"></minerva-data-table>
  <output id="sort-state"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // \`sortable: true\` sorts by row[key]; a function is a custom comparator.
  // Each header click cycles ascending -> descending -> unsorted and fires the
  // cancelable \`minerva-sort-change\`.
  const table = document.querySelector("#countries");
  const output = document.querySelector("#sort-state");
  table.columns = [
    { key: "code", header: "Code" },
    { key: "name", header: "Country", sortable: true },
    {
      key: "population",
      header: "Population (M)",
      align: "right",
      sortable: (a, b) => a.population - b.population,
      render: (row) => row.population.toFixed(1),
    },
  ];
  table.rows = [
    { code: "BR", name: "Brazil", population: 216.4 },
    { code: "FR", name: "France", population: 68.2 },
    { code: "JP", name: "Japan", population: 124.5 },
    { code: "NG", name: "Nigeria", population: 223.8 },
    { code: "CN", name: "China", population: 1409.7 },
  ];
  table.sortState = { key: "name", order: "ascend" };
  const onSort = (event) => {
    const { key, order } = event.detail;
    output.value = order ? \`Sorted by \${key} (\${order})\` : "Unsorted";
  };
  table.addEventListener("minerva-sort-change", onSort);
<\/script>
`}})))()}n();export{t as default};