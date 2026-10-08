import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SplitLayoutBasic.vue -->

<template>
  <minerva-split-layout>
    <minerva-box p="4" bg="bg.muted" rounded="md">
      <strong>Main</strong>
      <p>
        Primary content comes first in reading order and takes the remaining
        width.
      </p>
    </minerva-box>
    <minerva-box
      slot="aside"
      p="4"
      border="1px solid var(--border-color)"
      rounded="md"
    >
      <strong>Aside</strong>
      <p>Splits beside main once the layout is at least 768px wide.</p>
    </minerva-box>
  </minerva-split-layout>
</template>
`,angular:`// split-layout-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-split-layout-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-split-layout>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        <strong>Main</strong>
        <p>
          Primary content comes first in reading order and takes the remaining
          width.
        </p>
      </minerva-box>
      <minerva-box
        slot="aside"
        p="4"
        border="1px solid var(--border-color)"
        rounded="md"
      >
        <strong>Aside</strong>
        <p>Splits beside main once the layout is at least 768px wide.</p>
      </minerva-box>
    </minerva-split-layout>
  \`,
})
export class SplitLayoutBasicComponent {}
`,svelte:`<!-- SplitLayoutBasic.svelte -->

<minerva-split-layout>
  <minerva-box p="4" bg="bg.muted" rounded="md">
    <strong>Main</strong>
    <p>
      Primary content comes first in reading order and takes the remaining
      width.
    </p>
  </minerva-box>
  <minerva-box
    slot="aside"
    p="4"
    border="1px solid var(--border-color)"
    rounded="md"
  >
    <strong>Aside</strong>
    <p>Splits beside main once the layout is at least 768px wide.</p>
  </minerva-box>
</minerva-split-layout>
`,solid:`// SplitLayoutBasic.tsx

export default function SplitLayoutBasic() {
  return (
    <minerva-split-layout>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        <strong>Main</strong>
        <p>
          Primary content comes first in reading order and takes the remaining
          width.
        </p>
      </minerva-box>
      <minerva-box
        slot="aside"
        p="4"
        border="1px solid var(--border-color)"
        rounded="md"
      >
        <strong>Aside</strong>
        <p>Splits beside main once the layout is at least 768px wide.</p>
      </minerva-box>
    </minerva-split-layout>
  );
}
`,html:`<minerva-split-layout>
  <minerva-box p="4" bg="bg.muted" rounded="md">
    <strong>Main</strong>
    <p>
      Primary content comes first in reading order and takes the remaining
      width.
    </p>
  </minerva-box>
  <minerva-box
    slot="aside"
    p="4"
    border="1px solid var(--border-color)"
    rounded="md"
  >
    <strong>Aside</strong>
    <p>Splits beside main once the layout is at least 768px wide.</p>
  </minerva-box>
</minerva-split-layout>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};