import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TableSelection.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`selectable\` adds the checkbox column (with a select-all header). Paid
// invoices are disabled through \`isRowDisabled\`; \`getRowLabel\` names each
// checkbox for screen readers.

type Invoice = { number: string; customer: string; status: string };
type Column = { key: string; header: string };
type SelectionDetail = { selectedRowKeys: string[]; selectedRows: Invoice[] };

const outputText = ref("");

const tableColumns = [
  { key: "number", header: "Invoice" },
  { key: "customer", header: "Customer" },
  { key: "status", header: "Status" },
];
const tableRows = [
  { number: "INV-1001", customer: "Acme", status: "Overdue" },
  { number: "INV-1002", customer: "Globex", status: "Paid" },
  { number: "INV-1003", customer: "Initech", status: "Open" },
  { number: "INV-1004", customer: "Umbrella", status: "Open" },
];
const tableIsRowDisabled = (row) => row.status === "Paid";
const tableGetRowLabel = (row) => row.number;
const tableSelectedRowKeys = ["INV-1001"];
const outputValue = "1 selected";
const onSelect = (event: Event) => {
  const { selectedRowKeys } = (event as CustomEvent<SelectionDetail>).detail;
  outputText.value = \`\${selectedRowKeys.length} selected: \${selectedRowKeys.join(", ")}\`;
};
<\/script>

<template>
  <div style="display: grid; gap: 8px">
    <minerva-data-table
      id="invoices"
      row-key="number"
      selectable
      hoverable
      :columns.prop="tableColumns"
      :rows.prop="tableRows"
      :isRowDisabled.prop="tableIsRowDisabled"
      :getRowLabel.prop="tableGetRowLabel"
      :selectedRowKeys.prop="tableSelectedRowKeys"
      @minerva-selection-change="onSelect"
    ></minerva-data-table>
    <output id="selection" :value.prop="outputValue">{{ outputText }}</output>
  </div>
</template>
`,angular:`// table-selection.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// \`selectable\` adds the checkbox column (with a select-all header). Paid
// invoices are disabled through \`isRowDisabled\`; \`getRowLabel\` names each
// checkbox for screen readers.
type Invoice = { number: string; customer: string; status: string };
type Column = { key: string; header: string };
type SelectionDetail = { selectedRowKeys: string[]; selectedRows: Invoice[] };

@Component({
  selector: "app-table-selection",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px">
      <minerva-data-table
        id="invoices"
        row-key="number"
        selectable
        hoverable
        [columns]="tableColumns"
        [rows]="tableRows"
        [isRowDisabled]="tableIsRowDisabled"
        [getRowLabel]="tableGetRowLabel"
        [selectedRowKeys]="tableSelectedRowKeys"
        (minerva-selection-change)="onSelect($event)"
      ></minerva-data-table>
      <output id="selection" [value]="outputValue">{{ outputText }}</output>
    </div>
  \`,
})
export class TableSelectionComponent {
  outputText = "";

  tableColumns = [
    { key: "number", header: "Invoice" },
    { key: "customer", header: "Customer" },
    { key: "status", header: "Status" },
  ];
  tableRows = [
    { number: "INV-1001", customer: "Acme", status: "Overdue" },
    { number: "INV-1002", customer: "Globex", status: "Paid" },
    { number: "INV-1003", customer: "Initech", status: "Open" },
    { number: "INV-1004", customer: "Umbrella", status: "Open" },
  ];
  tableIsRowDisabled = (row) => row.status === "Paid";
  tableGetRowLabel = (row) => row.number;
  tableSelectedRowKeys = ["INV-1001"];
  outputValue = "1 selected";
  onSelect = (event: Event) => {
    const { selectedRowKeys } = (event as CustomEvent<SelectionDetail>).detail;
    this.outputText = \`\${selectedRowKeys.length} selected: \${selectedRowKeys.join(", ")}\`;
  };
}
`,svelte:`<!-- TableSelection.svelte -->

<script lang="ts">
  // \`selectable\` adds the checkbox column (with a select-all header). Paid
  // invoices are disabled through \`isRowDisabled\`; \`getRowLabel\` names each
  // checkbox for screen readers.

  type Invoice = { number: string; customer: string; status: string };
  type Column = { key: string; header: string };
  type SelectionDetail = { selectedRowKeys: string[]; selectedRows: Invoice[] };

  let outputText = $state("");

  const tableColumns = [
    { key: "number", header: "Invoice" },
    { key: "customer", header: "Customer" },
    { key: "status", header: "Status" },
  ];
  const tableRows = [
    { number: "INV-1001", customer: "Acme", status: "Overdue" },
    { number: "INV-1002", customer: "Globex", status: "Paid" },
    { number: "INV-1003", customer: "Initech", status: "Open" },
    { number: "INV-1004", customer: "Umbrella", status: "Open" },
  ];
  const tableIsRowDisabled = (row) => row.status === "Paid";
  const tableGetRowLabel = (row) => row.number;
  const tableSelectedRowKeys = ["INV-1001"];
  const outputValue = "1 selected";
  const onSelect = (event: Event) => {
    const { selectedRowKeys } = (event as CustomEvent<SelectionDetail>).detail;
    outputText = \`\${selectedRowKeys.length} selected: \${selectedRowKeys.join(", ")}\`;
  };
<\/script>

<div style="display: grid; gap: 8px">
  <minerva-data-table
    id="invoices"
    row-key="number"
    selectable
    hoverable
    columns={tableColumns}
    rows={tableRows}
    isRowDisabled={tableIsRowDisabled}
    getRowLabel={tableGetRowLabel}
    selectedRowKeys={tableSelectedRowKeys}
    onminerva-selection-change={onSelect}
  ></minerva-data-table>
  <output id="selection" value={outputValue}>{outputText}</output>
</div>
`,solid:`// TableSelection.tsx

import { createSignal } from "solid-js";

// \`selectable\` adds the checkbox column (with a select-all header). Paid
// invoices are disabled through \`isRowDisabled\`; \`getRowLabel\` names each
// checkbox for screen readers.
type Invoice = { number: string; customer: string; status: string };
type Column = { key: string; header: string };
type SelectionDetail = { selectedRowKeys: string[]; selectedRows: Invoice[] };

export default function TableSelection() {
  const [outputText, setOutputText] = createSignal("");

  const tableColumns = [
    { key: "number", header: "Invoice" },
    { key: "customer", header: "Customer" },
    { key: "status", header: "Status" },
  ];
  const tableRows = [
    { number: "INV-1001", customer: "Acme", status: "Overdue" },
    { number: "INV-1002", customer: "Globex", status: "Paid" },
    { number: "INV-1003", customer: "Initech", status: "Open" },
    { number: "INV-1004", customer: "Umbrella", status: "Open" },
  ];
  const tableIsRowDisabled = (row) => row.status === "Paid";
  const tableGetRowLabel = (row) => row.number;
  const tableSelectedRowKeys = ["INV-1001"];
  const outputValue = "1 selected";
  const onSelect = (event: Event) => {
    const { selectedRowKeys } = (event as CustomEvent<SelectionDetail>).detail;
    setOutputText(
      \`\${selectedRowKeys.length} selected: \${selectedRowKeys.join(", ")}\`,
    );
  };

  return (
    <div style="display: grid; gap: 8px">
      <minerva-data-table
        id="invoices"
        row-key="number"
        selectable
        hoverable
        prop:columns={tableColumns}
        prop:rows={tableRows}
        prop:isRowDisabled={tableIsRowDisabled}
        prop:getRowLabel={tableGetRowLabel}
        prop:selectedRowKeys={tableSelectedRowKeys}
        on:minerva-selection-change={onSelect}
      ></minerva-data-table>
      <output id="selection" prop:value={outputValue}>
        {outputText()}
      </output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px">
  <minerva-data-table
    id="invoices"
    row-key="number"
    selectable
    hoverable
  ></minerva-data-table>
  <output id="selection"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`selectable\` adds the checkbox column (with a select-all header). Paid
  // invoices are disabled through \`isRowDisabled\`; \`getRowLabel\` names each
  // checkbox for screen readers.
  const table = document.querySelector("#invoices");
  const output = document.querySelector("#selection");
  table.columns = [
    { key: "number", header: "Invoice" },
    { key: "customer", header: "Customer" },
    { key: "status", header: "Status" },
  ];
  table.rows = [
    { number: "INV-1001", customer: "Acme", status: "Overdue" },
    { number: "INV-1002", customer: "Globex", status: "Paid" },
    { number: "INV-1003", customer: "Initech", status: "Open" },
    { number: "INV-1004", customer: "Umbrella", status: "Open" },
  ];
  table.isRowDisabled = (row) => row.status === "Paid";
  table.getRowLabel = (row) => row.number;
  table.selectedRowKeys = ["INV-1001"];
  output.value = "1 selected";
  const onSelect = (event) => {
    const { selectedRowKeys } = event.detail;
    output.value = \`\${selectedRowKeys.length} selected: \${selectedRowKeys.join(", ")}\`;
  };
  table.addEventListener("minerva-selection-change", onSelect);
<\/script>
`}})))()}n();export{t as default};