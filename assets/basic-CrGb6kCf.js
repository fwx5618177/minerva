import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- StepsBasic.vue -->

<script setup lang="ts">
// Read-only progress: earlier steps are complete, the current one has
// aria-current="step". Steps are a JS property.

type Step = { value: string; label: string; disabled?: boolean };

const orderItems = [
  { value: "placed", label: "Order placed" },
  { value: "paid", label: "Payment confirmed" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
];
<\/script>

<template>
  <minerva-steps
    id="order"
    value="shipped"
    :items.prop="orderItems"
  ></minerva-steps>
</template>
`,angular:`// steps-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Read-only progress: earlier steps are complete, the current one has
// aria-current="step". Steps are a JS property.
type Step = { value: string; label: string; disabled?: boolean };

@Component({
  selector: "app-steps-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-steps
      id="order"
      value="shipped"
      [items]="orderItems"
    ></minerva-steps>
  \`,
})
export class StepsBasicComponent {
  orderItems = [
    { value: "placed", label: "Order placed" },
    { value: "paid", label: "Payment confirmed" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
  ];
}
`,svelte:`<!-- StepsBasic.svelte -->

<script lang="ts">
  // Read-only progress: earlier steps are complete, the current one has
  // aria-current="step". Steps are a JS property.

  type Step = { value: string; label: string; disabled?: boolean };

  const orderItems = [
    { value: "placed", label: "Order placed" },
    { value: "paid", label: "Payment confirmed" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
  ];
<\/script>

<minerva-steps id="order" value="shipped" items={orderItems}></minerva-steps>
`,solid:`// StepsBasic.tsx

// Read-only progress: earlier steps are complete, the current one has
// aria-current="step". Steps are a JS property.
type Step = { value: string; label: string; disabled?: boolean };

export default function StepsBasic() {
  const orderItems = [
    { value: "placed", label: "Order placed" },
    { value: "paid", label: "Payment confirmed" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
  ];

  return (
    <minerva-steps
      id="order"
      value="shipped"
      prop:items={orderItems}
    ></minerva-steps>
  );
}
`,html:`<minerva-steps id="order" value="shipped"></minerva-steps>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Read-only progress: earlier steps are complete, the current one has
  // aria-current="step". Steps are a JS property.
  document.querySelector("#order").items = [
    { value: "placed", label: "Order placed" },
    { value: "paid", label: "Payment confirmed" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
  ];
<\/script>
`}})))()}n();export{t as default};