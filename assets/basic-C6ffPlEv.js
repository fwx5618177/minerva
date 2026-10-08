import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TableBasic.vue -->

<script setup lang="ts">
// \`columns\` and \`rows\` are JS properties. A cell \`render\` function returns a
// string or a DOM node — here a two-line <minerva-table-cell-content>.

type Service = { id: string; name: string; image: string; replicas: number };
type Column = {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  width?: number;
  render?: (row: Service) => string | Node;
};

const tableColumns = [
  {
    key: "name",
    header: "Service",
    render: (row) => {
      const cell = document.createElement("minerva-table-cell-content");
      cell.setAttribute("primary", row.name);
      cell.setAttribute("secondary", row.id);
      return cell;
    },
  },
  { key: "image", header: "Image" },
  { key: "replicas", header: "Replicas", align: "right", width: 120 },
];
const tableRows = [
  { id: "svc-01", name: "API gateway", image: "nginx:1.27", replicas: 3 },
  { id: "svc-02", name: "Auth", image: "keycloak:25", replicas: 2 },
  { id: "svc-03", name: "Billing", image: "billing:4.2.0", replicas: 1 },
  { id: "svc-04", name: "Search", image: "opensearch:2.15", replicas: 5 },
];
<\/script>

<template>
  <minerva-data-table
    id="services"
    row-key="id"
    variant="striped"
    hoverable
    :columns.prop="tableColumns"
    :rows.prop="tableRows"
  ></minerva-data-table>
</template>
`,angular:`// table-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// \`columns\` and \`rows\` are JS properties. A cell \`render\` function returns a
// string or a DOM node — here a two-line <minerva-table-cell-content>.
type Service = { id: string; name: string; image: string; replicas: number };
type Column = {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  width?: number;
  render?: (row: Service) => string | Node;
};

@Component({
  selector: "app-table-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-data-table
      id="services"
      row-key="id"
      variant="striped"
      hoverable
      [columns]="tableColumns"
      [rows]="tableRows"
    ></minerva-data-table>
  \`,
})
export class TableBasicComponent {
  tableColumns = [
    {
      key: "name",
      header: "Service",
      render: (row) => {
        const cell = document.createElement("minerva-table-cell-content");
        cell.setAttribute("primary", row.name);
        cell.setAttribute("secondary", row.id);
        return cell;
      },
    },
    { key: "image", header: "Image" },
    { key: "replicas", header: "Replicas", align: "right", width: 120 },
  ];
  tableRows = [
    { id: "svc-01", name: "API gateway", image: "nginx:1.27", replicas: 3 },
    { id: "svc-02", name: "Auth", image: "keycloak:25", replicas: 2 },
    { id: "svc-03", name: "Billing", image: "billing:4.2.0", replicas: 1 },
    { id: "svc-04", name: "Search", image: "opensearch:2.15", replicas: 5 },
  ];
}
`,svelte:`<!-- TableBasic.svelte -->

<script lang="ts">
  // \`columns\` and \`rows\` are JS properties. A cell \`render\` function returns a
  // string or a DOM node — here a two-line <minerva-table-cell-content>.

  type Service = { id: string; name: string; image: string; replicas: number };
  type Column = {
    key: string;
    header: string;
    align?: "left" | "center" | "right";
    width?: number;
    render?: (row: Service) => string | Node;
  };

  const tableColumns = [
    {
      key: "name",
      header: "Service",
      render: (row) => {
        const cell = document.createElement("minerva-table-cell-content");
        cell.setAttribute("primary", row.name);
        cell.setAttribute("secondary", row.id);
        return cell;
      },
    },
    { key: "image", header: "Image" },
    { key: "replicas", header: "Replicas", align: "right", width: 120 },
  ];
  const tableRows = [
    { id: "svc-01", name: "API gateway", image: "nginx:1.27", replicas: 3 },
    { id: "svc-02", name: "Auth", image: "keycloak:25", replicas: 2 },
    { id: "svc-03", name: "Billing", image: "billing:4.2.0", replicas: 1 },
    { id: "svc-04", name: "Search", image: "opensearch:2.15", replicas: 5 },
  ];
<\/script>

<minerva-data-table
  id="services"
  row-key="id"
  variant="striped"
  hoverable
  columns={tableColumns}
  rows={tableRows}
></minerva-data-table>
`,solid:`// TableBasic.tsx

// \`columns\` and \`rows\` are JS properties. A cell \`render\` function returns a
// string or a DOM node — here a two-line <minerva-table-cell-content>.
type Service = { id: string; name: string; image: string; replicas: number };
type Column = {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  width?: number;
  render?: (row: Service) => string | Node;
};

export default function TableBasic() {
  const tableColumns = [
    {
      key: "name",
      header: "Service",
      render: (row) => {
        const cell = document.createElement("minerva-table-cell-content");
        cell.setAttribute("primary", row.name);
        cell.setAttribute("secondary", row.id);
        return cell;
      },
    },
    { key: "image", header: "Image" },
    { key: "replicas", header: "Replicas", align: "right", width: 120 },
  ];
  const tableRows = [
    { id: "svc-01", name: "API gateway", image: "nginx:1.27", replicas: 3 },
    { id: "svc-02", name: "Auth", image: "keycloak:25", replicas: 2 },
    { id: "svc-03", name: "Billing", image: "billing:4.2.0", replicas: 1 },
    { id: "svc-04", name: "Search", image: "opensearch:2.15", replicas: 5 },
  ];

  return (
    <minerva-data-table
      id="services"
      row-key="id"
      variant="striped"
      hoverable
      prop:columns={tableColumns}
      prop:rows={tableRows}
    ></minerva-data-table>
  );
}
`,html:`<minerva-data-table
  id="services"
  row-key="id"
  variant="striped"
  hoverable
></minerva-data-table>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`columns\` and \`rows\` are JS properties. A cell \`render\` function returns a
  // string or a DOM node — here a two-line <minerva-table-cell-content>.
  const table = document.querySelector("#services");
  table.columns = [
    {
      key: "name",
      header: "Service",
      render: (row) => {
        const cell = document.createElement("minerva-table-cell-content");
        cell.setAttribute("primary", row.name);
        cell.setAttribute("secondary", row.id);
        return cell;
      },
    },
    { key: "image", header: "Image" },
    { key: "replicas", header: "Replicas", align: "right", width: 120 },
  ];
  table.rows = [
    { id: "svc-01", name: "API gateway", image: "nginx:1.27", replicas: 3 },
    { id: "svc-02", name: "Auth", image: "keycloak:25", replicas: 2 },
    { id: "svc-03", name: "Billing", image: "billing:4.2.0", replicas: 1 },
    { id: "svc-04", name: "Search", image: "opensearch:2.15", replicas: 5 },
  ];
<\/script>
`}})))()}n();export{t as default};