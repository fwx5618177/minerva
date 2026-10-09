import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- JsonFieldOptions.vue -->

<script setup lang="ts">
import { ref } from "vue";

// formatValue() re-indents valid JSON with \`indent\` spaces (no event).

const field = ref<HTMLElement & { formatValue(): void }>();

const onClick = () => field.value!.formatValue();
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 480px">
    <minerva-json-field
      id="jf-indent"
      rows="5"
      indent="4"
      aria-label="Indented with 4 spaces"
      value='{"retries":3,"backoff":{"initial":100,"max":2000}}'
      ref="field"
    ></minerva-json-field>
    <minerva-button
      id="jf-format"
      variant="outline"
      color="neutral"
      style="justify-self: start"
      @click="onClick"
      >Format with formatValue()</minerva-button
    >
    <minerva-json-field
      rows="3"
      readonly
      hide-toolbar
      aria-label="Read-only, without toolbar"
      value='{ "locked": true }'
    ></minerva-json-field>
    <minerva-json-field
      rows="3"
      aria-label="Custom labels"
      format-label="Prettify"
      valid-label="Looks good"
      invalid-label="Broken JSON"
      placeholder='{ "key": "value" }'
    ></minerva-json-field>
  </div>
</template>
`,angular:`// json-field-options.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// formatValue() re-indents valid JSON with \`indent\` spaces (no event).

@Component({
  selector: "app-json-field-options",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 480px">
      <minerva-json-field
        id="jf-indent"
        rows="5"
        indent="4"
        aria-label="Indented with 4 spaces"
        value='{"retries":3,"backoff":{"initial":100,"max":2000}}'
        #field
      ></minerva-json-field>
      <minerva-button
        id="jf-format"
        variant="outline"
        color="neutral"
        style="justify-self: start"
        (click)="onClick($event)"
        >Format with formatValue()</minerva-button
      >
      <minerva-json-field
        rows="3"
        readonly
        hide-toolbar
        aria-label="Read-only, without toolbar"
        value='{ "locked": true }'
      ></minerva-json-field>
      <minerva-json-field
        rows="3"
        aria-label="Custom labels"
        format-label="Prettify"
        valid-label="Looks good"
        invalid-label="Broken JSON"
        placeholder='{ "key": "value" }'
      ></minerva-json-field>
    </div>
  \`,
})
export class JsonFieldOptionsComponent {
  @ViewChild("field") field!: ElementRef<HTMLElement & { formatValue(): void }>;

  onClick = () => this.field.nativeElement.formatValue();
}
`,svelte:`<!-- JsonFieldOptions.svelte -->

<script lang="ts">
  // formatValue() re-indents valid JSON with \`indent\` spaces (no event).

  let field: HTMLElement & { formatValue(): void };

  const onClick = () => field.formatValue();
<\/script>

<div style="display: grid; gap: 12px; max-width: 480px">
  <minerva-json-field
    id="jf-indent"
    rows="5"
    indent="4"
    aria-label="Indented with 4 spaces"
    value={"{\\"retries\\":3,\\"backoff\\":{\\"initial\\":100,\\"max\\":2000}}"}
    bind:this={field}
  ></minerva-json-field>
  <minerva-button
    id="jf-format"
    variant="outline"
    color="neutral"
    style="justify-self: start"
    onclick={onClick}
  >Format with formatValue()</minerva-button>
  <minerva-json-field
    rows="3"
    readonly
    hide-toolbar
    aria-label="Read-only, without toolbar"
    value={"{ \\"locked\\": true }"}
  ></minerva-json-field>
  <minerva-json-field
    rows="3"
    aria-label="Custom labels"
    format-label="Prettify"
    valid-label="Looks good"
    invalid-label="Broken JSON"
    placeholder={"{ \\"key\\": \\"value\\" }"}
  ></minerva-json-field>
</div>
`,solid:`// JsonFieldOptions.tsx

// formatValue() re-indents valid JSON with \`indent\` spaces (no event).

export default function JsonFieldOptions() {
  let field!: HTMLElement & { formatValue(): void };

  const onClick = () => field.formatValue();

  return (
    <div style="display: grid; gap: 12px; max-width: 480px">
      <minerva-json-field
        id="jf-indent"
        rows="5"
        indent="4"
        aria-label="Indented with 4 spaces"
        value='{"retries":3,"backoff":{"initial":100,"max":2000}}'
        ref={field}
      ></minerva-json-field>
      <minerva-button
        id="jf-format"
        variant="outline"
        color="neutral"
        style="justify-self: start"
        on:click={onClick}
      >
        Format with formatValue()
      </minerva-button>
      <minerva-json-field
        rows="3"
        readonly
        hide-toolbar
        aria-label="Read-only, without toolbar"
        value='{ "locked": true }'
      ></minerva-json-field>
      <minerva-json-field
        rows="3"
        aria-label="Custom labels"
        format-label="Prettify"
        valid-label="Looks good"
        invalid-label="Broken JSON"
        placeholder='{ "key": "value" }'
      ></minerva-json-field>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 480px">
  <minerva-json-field
    id="jf-indent"
    rows="5"
    indent="4"
    aria-label="Indented with 4 spaces"
    value='{"retries":3,"backoff":{"initial":100,"max":2000}}'
  ></minerva-json-field>
  <minerva-button
    id="jf-format"
    variant="outline"
    color="neutral"
    style="justify-self: start"
    >Format with formatValue()</minerva-button
  >
  <minerva-json-field
    rows="3"
    readonly
    hide-toolbar
    aria-label="Read-only, without toolbar"
    value='{ "locked": true }'
  ></minerva-json-field>
  <minerva-json-field
    rows="3"
    aria-label="Custom labels"
    format-label="Prettify"
    valid-label="Looks good"
    invalid-label="Broken JSON"
    placeholder='{ "key": "value" }'
  ></minerva-json-field>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // formatValue() re-indents valid JSON with \`indent\` spaces (no event).
  const field = document.querySelector("#jf-indent");
  const button = document.querySelector("#jf-format");
  const onClick = () => field.formatValue();
  button.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};