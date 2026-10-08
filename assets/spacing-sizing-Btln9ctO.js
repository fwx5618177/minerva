import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- BoxSpacingSizing.vue -->

<template>
  <minerva-box bg="bg.subtle" p="2" rounded="md">
    <minerva-box bg="bg.muted" px="6" py="2" mb="3" rounded="sm">
      px="6" py="2" mb="3": spacing tokens
    </minerva-box>
    <minerva-box bg="bg.muted" p="12px" mx="auto" w="240" rounded="sm">
      p="12px" mx="auto" w="240": CSS values and pixels
    </minerva-box>
    <minerva-box bg="bg.muted" p="3" mt="3" max-w="60%" min-h="80" rounded="sm">
      max-w="60%" min-h="80"
    </minerva-box>
  </minerva-box>
</template>
`,angular:`// box-spacing-sizing.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-box-spacing-sizing",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-box bg="bg.subtle" p="2" rounded="md">
      <minerva-box bg="bg.muted" px="6" py="2" mb="3" rounded="sm">
        px="6" py="2" mb="3": spacing tokens
      </minerva-box>
      <minerva-box bg="bg.muted" p="12px" mx="auto" w="240" rounded="sm">
        p="12px" mx="auto" w="240": CSS values and pixels
      </minerva-box>
      <minerva-box
        bg="bg.muted"
        p="3"
        mt="3"
        max-w="60%"
        min-h="80"
        rounded="sm"
      >
        max-w="60%" min-h="80"
      </minerva-box>
    </minerva-box>
  \`,
})
export class BoxSpacingSizingComponent {}
`,svelte:`<!-- BoxSpacingSizing.svelte -->

<minerva-box bg="bg.subtle" p="2" rounded="md">
  <minerva-box bg="bg.muted" px="6" py="2" mb="3" rounded="sm">
    px="6" py="2" mb="3": spacing tokens
  </minerva-box>
  <minerva-box bg="bg.muted" p="12px" mx="auto" w="240" rounded="sm">
    p="12px" mx="auto" w="240": CSS values and pixels
  </minerva-box>
  <minerva-box bg="bg.muted" p="3" mt="3" max-w="60%" min-h="80" rounded="sm">
    max-w="60%" min-h="80"
  </minerva-box>
</minerva-box>
`,solid:`// BoxSpacingSizing.tsx

export default function BoxSpacingSizing() {
  return (
    <minerva-box bg="bg.subtle" p="2" rounded="md">
      <minerva-box bg="bg.muted" px="6" py="2" mb="3" rounded="sm">
        px="6" py="2" mb="3": spacing tokens
      </minerva-box>
      <minerva-box bg="bg.muted" p="12px" mx="auto" w="240" rounded="sm">
        p="12px" mx="auto" w="240": CSS values and pixels
      </minerva-box>
      <minerva-box
        bg="bg.muted"
        p="3"
        mt="3"
        max-w="60%"
        min-h="80"
        rounded="sm"
      >
        max-w="60%" min-h="80"
      </minerva-box>
    </minerva-box>
  );
}
`,html:`<minerva-box bg="bg.subtle" p="2" rounded="md">
  <minerva-box bg="bg.muted" px="6" py="2" mb="3" rounded="sm">
    px="6" py="2" mb="3": spacing tokens
  </minerva-box>
  <minerva-box bg="bg.muted" p="12px" mx="auto" w="240" rounded="sm">
    p="12px" mx="auto" w="240": CSS values and pixels
  </minerva-box>
  <minerva-box bg="bg.muted" p="3" mt="3" max-w="60%" min-h="80" rounded="sm">
    max-w="60%" min-h="80"
  </minerva-box>
</minerva-box>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};