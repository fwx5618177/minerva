import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- EmptySizesStyles.vue -->

<template>
  <div
    style="
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    "
  >
    <minerva-empty
      size="small"
      heading="Small"
      hide-description
    ></minerva-empty>
    <minerva-empty size="medium" use-svg show-shadow>
      <span slot="heading">No results</span>
      <span slot="description">Try <em>another</em> search term.</span>
    </minerva-empty>
    <minerva-empty
      size="large"
      hide-icon
      heading="Inbox zero"
      description="You are all caught up."
      width="100%"
      height="200px"
    ></minerva-empty>
  </div>
</template>
`,angular:`// empty-sizes-styles.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-empty-sizes-styles",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      "
    >
      <minerva-empty
        size="small"
        heading="Small"
        hide-description
      ></minerva-empty>
      <minerva-empty size="medium" use-svg show-shadow>
        <span slot="heading">No results</span>
        <span slot="description">Try <em>another</em> search term.</span>
      </minerva-empty>
      <minerva-empty
        size="large"
        hide-icon
        heading="Inbox zero"
        description="You are all caught up."
        width="100%"
        height="200px"
      ></minerva-empty>
    </div>
  \`,
})
export class EmptySizesStylesComponent {}
`,svelte:`<!-- EmptySizesStyles.svelte -->

<div
  style="
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  "
>
  <minerva-empty size="small" heading="Small" hide-description></minerva-empty>
  <minerva-empty size="medium" use-svg show-shadow>
    <span slot="heading">No results</span>
    <span slot="description">Try <em>another</em> search term.</span>
  </minerva-empty>
  <minerva-empty
    size="large"
    hide-icon
    heading="Inbox zero"
    description="You are all caught up."
    width="100%"
    height="200px"
  ></minerva-empty>
</div>
`,solid:`// EmptySizesStyles.tsx

export default function EmptySizesStyles() {
  return (
    <div
      style="
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      "
    >
      <minerva-empty
        size="small"
        heading="Small"
        hide-description
      ></minerva-empty>
      <minerva-empty size="medium" use-svg show-shadow>
        <span slot="heading">No results</span>
        <span slot="description">
          Try <em>another</em> search term.
        </span>
      </minerva-empty>
      <minerva-empty
        size="large"
        hide-icon
        heading="Inbox zero"
        description="You are all caught up."
        width="100%"
        height="200px"
      ></minerva-empty>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  "
>
  <minerva-empty size="small" heading="Small" hide-description></minerva-empty>
  <minerva-empty size="medium" use-svg show-shadow>
    <span slot="heading">No results</span>
    <span slot="description">Try <em>another</em> search term.</span>
  </minerva-empty>
  <minerva-empty
    size="large"
    hide-icon
    heading="Inbox zero"
    description="You are all caught up."
    width="100%"
    height="200px"
  ></minerva-empty>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};