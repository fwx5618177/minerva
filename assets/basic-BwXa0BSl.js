import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CodeBlockBasic.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <!-- prettier-ignore -->
    <minerva-code-block language="bash" aria-label="Install command">npm install minerva-design</minerva-code-block>
    <!-- prettier-ignore -->
    <minerva-code-block language="html" aria-label="Usage">&lt;minerva-button&gt;Save&lt;/minerva-button&gt;
  &lt;script type="module"&gt;
    import "minerva-design/web-components";
  &lt;/script&gt;</minerva-code-block>
  </div>
</template>
`,angular:`// code-block-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-code-block-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <!-- prettier-ignore -->
      <minerva-code-block language="bash" aria-label="Install command">npm install minerva-design</minerva-code-block>
      <!-- prettier-ignore -->
      <minerva-code-block language="html" aria-label="Usage">&lt;minerva-button&gt;Save&lt;/minerva-button&gt;
    &lt;script type="module"&gt;
      import "minerva-design/web-components";
    &lt;/script&gt;</minerva-code-block>
    </div>
  \`,
})
export class CodeBlockBasicComponent {}
`,svelte:`<!-- CodeBlockBasic.svelte -->

<div style="display: grid; gap: 12px">
  <!-- prettier-ignore -->
  <minerva-code-block language="bash" aria-label="Install command">npm install minerva-design</minerva-code-block>
  <!-- prettier-ignore -->
  <minerva-code-block language="html" aria-label="Usage">&lt;minerva-button&gt;Save&lt;/minerva-button&gt;
&lt;script type="module"&gt;
  import "minerva-design/web-components";
&lt;/script&gt;</minerva-code-block>
</div>
`,solid:`// CodeBlockBasic.tsx

export default function CodeBlockBasic() {
  return (
    <div style="display: grid; gap: 12px">
      {/* prettier-ignore */}
      <minerva-code-block language="bash" aria-label="Install command">npm install minerva-design</minerva-code-block>
      {/* prettier-ignore */}
      <minerva-code-block language="html" aria-label="Usage">&lt;minerva-button&gt;Save&lt;/minerva-button&gt;
    &lt;script type="module"&gt;
      import "minerva-design/web-components";
    &lt;/script&gt;</minerva-code-block>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <!-- prettier-ignore -->
  <minerva-code-block language="bash" aria-label="Install command">npm install minerva-design</minerva-code-block>
  <!-- prettier-ignore -->
  <minerva-code-block language="html" aria-label="Usage">&lt;minerva-button&gt;Save&lt;/minerva-button&gt;
&lt;script type="module"&gt;
  import "minerva-design/web-components";
&lt;/script&gt;</minerva-code-block>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};