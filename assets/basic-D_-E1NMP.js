import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- RatingBasic.vue -->

<template>
  <div style="display: grid; gap: 8px; justify-items: start">
    <minerva-rating value="8.6" size="small"></minerva-rating>
    <minerva-rating
      readonly
      value="7"
      show-value
      rating-count="3214"
    ></minerva-rating>
    <minerva-rating
      readonly
      value="3.5"
      max="5"
      size="large"
      show-value
    ></minerva-rating>
  </div>
</template>
`,angular:`// rating-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-rating-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px; justify-items: start">
      <minerva-rating value="8.6" size="small"></minerva-rating>
      <minerva-rating
        readonly
        value="7"
        show-value
        rating-count="3214"
      ></minerva-rating>
      <minerva-rating
        readonly
        value="3.5"
        max="5"
        size="large"
        show-value
      ></minerva-rating>
    </div>
  \`,
})
export class RatingBasicComponent {}
`,svelte:`<!-- RatingBasic.svelte -->

<div style="display: grid; gap: 8px; justify-items: start">
  <minerva-rating value="8.6" size="small"></minerva-rating>
  <minerva-rating
    readonly
    value="7"
    show-value
    rating-count="3214"
  ></minerva-rating>
  <minerva-rating
    readonly
    value="3.5"
    max="5"
    size="large"
    show-value
  ></minerva-rating>
</div>
`,solid:`// RatingBasic.tsx

export default function RatingBasic() {
  return (
    <div style="display: grid; gap: 8px; justify-items: start">
      <minerva-rating value="8.6" size="small"></minerva-rating>
      <minerva-rating
        readonly
        value="7"
        show-value
        rating-count="3214"
      ></minerva-rating>
      <minerva-rating
        readonly
        value="3.5"
        max="5"
        size="large"
        show-value
      ></minerva-rating>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px; justify-items: start">
  <minerva-rating value="8.6" size="small"></minerva-rating>
  <minerva-rating
    readonly
    value="7"
    show-value
    rating-count="3214"
  ></minerva-rating>
  <minerva-rating
    readonly
    value="3.5"
    max="5"
    size="large"
    show-value
  ></minerva-rating>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};