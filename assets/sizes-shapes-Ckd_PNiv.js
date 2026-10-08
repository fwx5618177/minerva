import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ButtonSizesShapes.vue -->

<template>
  <minerva-button size="xsmall">XS</minerva-button>
  <minerva-button size="small">Small</minerva-button>
  <minerva-button size="medium">Medium</minerva-button>
  <minerva-button size="large">Large</minerva-button>
  <minerva-button size="xlarge">XL</minerva-button>
  <minerva-button shape="rounded">Rounded</minerva-button>
  <minerva-button shape="square" variant="outline">Square</minerva-button>
  <minerva-button shape="circle" aria-label="Add item">+</minerva-button>
</template>
`,angular:`// button-sizes-shapes.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-button-sizes-shapes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-button size="xsmall">XS</minerva-button>
    <minerva-button size="small">Small</minerva-button>
    <minerva-button size="medium">Medium</minerva-button>
    <minerva-button size="large">Large</minerva-button>
    <minerva-button size="xlarge">XL</minerva-button>
    <minerva-button shape="rounded">Rounded</minerva-button>
    <minerva-button shape="square" variant="outline">Square</minerva-button>
    <minerva-button shape="circle" aria-label="Add item">+</minerva-button>
  \`,
})
export class ButtonSizesShapesComponent {}
`,svelte:`<!-- ButtonSizesShapes.svelte -->

<minerva-button size="xsmall">XS</minerva-button>
<minerva-button size="small">Small</minerva-button>
<minerva-button size="medium">Medium</minerva-button>
<minerva-button size="large">Large</minerva-button>
<minerva-button size="xlarge">XL</minerva-button>
<minerva-button shape="rounded">Rounded</minerva-button>
<minerva-button shape="square" variant="outline">Square</minerva-button>
<minerva-button shape="circle" aria-label="Add item">+</minerva-button>
`,solid:`// ButtonSizesShapes.tsx

export default function ButtonSizesShapes() {
  return (
    <>
      <minerva-button size="xsmall">XS</minerva-button>
      <minerva-button size="small">Small</minerva-button>
      <minerva-button size="medium">Medium</minerva-button>
      <minerva-button size="large">Large</minerva-button>
      <minerva-button size="xlarge">XL</minerva-button>
      <minerva-button shape="rounded">Rounded</minerva-button>
      <minerva-button shape="square" variant="outline">
        Square
      </minerva-button>
      <minerva-button shape="circle" aria-label="Add item">
        +
      </minerva-button>
    </>
  );
}
`,html:`<minerva-button size="xsmall">XS</minerva-button>
<minerva-button size="small">Small</minerva-button>
<minerva-button size="medium">Medium</minerva-button>
<minerva-button size="large">Large</minerva-button>
<minerva-button size="xlarge">XL</minerva-button>
<minerva-button shape="rounded">Rounded</minerva-button>
<minerva-button shape="square" variant="outline">Square</minerva-button>
<minerva-button shape="circle" aria-label="Add item">+</minerva-button>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};