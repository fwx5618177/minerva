import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- BoxBasic.vue -->

<template>
  <minerva-box p="4" bg="bg.muted" rounded="md">
    Padding from the spacing scale, a surface background and a radius token.
  </minerva-box>
  <minerva-box
    p="4"
    mt="3"
    rounded="lg"
    box-shadow="md"
    border="1px solid var(--border-color)"
  >
    An elevated box with a shadow token and a CSS border.
  </minerva-box>
</template>
`,angular:`// box-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-box-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-box p="4" bg="bg.muted" rounded="md">
      Padding from the spacing scale, a surface background and a radius token.
    </minerva-box>
    <minerva-box
      p="4"
      mt="3"
      rounded="lg"
      box-shadow="md"
      border="1px solid var(--border-color)"
    >
      An elevated box with a shadow token and a CSS border.
    </minerva-box>
  \`,
})
export class BoxBasicComponent {}
`,svelte:`<!-- BoxBasic.svelte -->

<minerva-box p="4" bg="bg.muted" rounded="md">
  Padding from the spacing scale, a surface background and a radius token.
</minerva-box>
<minerva-box
  p="4"
  mt="3"
  rounded="lg"
  box-shadow="md"
  border="1px solid var(--border-color)"
>
  An elevated box with a shadow token and a CSS border.
</minerva-box>
`,solid:`// BoxBasic.tsx

export default function BoxBasic() {
  return (
    <>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        Padding from the spacing scale, a surface background and a radius token.
      </minerva-box>
      <minerva-box
        p="4"
        mt="3"
        rounded="lg"
        box-shadow="md"
        border="1px solid var(--border-color)"
      >
        An elevated box with a shadow token and a CSS border.
      </minerva-box>
    </>
  );
}
`,html:`<minerva-box p="4" bg="bg.muted" rounded="md">
  Padding from the spacing scale, a surface background and a radius token.
</minerva-box>
<minerva-box
  p="4"
  mt="3"
  rounded="lg"
  box-shadow="md"
  border="1px solid var(--border-color)"
>
  An elevated box with a shadow token and a CSS border.
</minerva-box>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};