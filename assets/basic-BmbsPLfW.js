import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- JsonFieldBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The status line appears on blur; \`minerva-change\` fires on blur and after
// formatting. The element's validity (badInput) reflects the JSON syntax.

type JsonField = HTMLElement & {
  validity?: ValidityState;
  validationMessage: string;
};

const field = ref<JsonField>();
const outputText = ref("");

const onChange = () => {
  outputText.value = field.value!.validity?.valid
    ? "Committed valid JSON"
    : field.value!.validationMessage;
};
<\/script>

<template>
  <div style="display: grid; gap: 8px; max-width: 480px">
    <label for="jf-config">Configuration</label>
    <minerva-json-field
      id="jf-config"
      rows="6"
      value='{"name":"minerva","tags":["ui","web-components"],"private":false}'
      ref="field"
      @minerva-change="onChange"
    ></minerva-json-field>
    <output id="jf-config-state">{{ outputText }}</output>
  </div>
</template>
`,angular:`// json-field-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The status line appears on blur; \`minerva-change\` fires on blur and after
// formatting. The element's validity (badInput) reflects the JSON syntax.
type JsonField = HTMLElement & {
  validity?: ValidityState;
  validationMessage: string;
};

@Component({
  selector: "app-json-field-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px; max-width: 480px">
      <label for="jf-config">Configuration</label>
      <minerva-json-field
        id="jf-config"
        rows="6"
        value='{"name":"minerva","tags":["ui","web-components"],"private":false}'
        #field
        (minerva-change)="onChange($event)"
      ></minerva-json-field>
      <output id="jf-config-state">{{ outputText }}</output>
    </div>
  \`,
})
export class JsonFieldBasicComponent {
  @ViewChild("field") field!: ElementRef<JsonField>;
  outputText = "";

  onChange = () => {
    this.outputText = this.field.nativeElement.validity?.valid
      ? "Committed valid JSON"
      : this.field.nativeElement.validationMessage;
  };
}
`,svelte:`<!-- JsonFieldBasic.svelte -->

<script lang="ts">
  // The status line appears on blur; \`minerva-change\` fires on blur and after
  // formatting. The element's validity (badInput) reflects the JSON syntax.

  type JsonField = HTMLElement & {
    validity?: ValidityState;
    validationMessage: string;
  };

  let field: JsonField;
  let outputText = $state("");

  const onChange = () => {
    outputText = field.validity?.valid
      ? "Committed valid JSON"
      : field.validationMessage;
  };
<\/script>

<div style="display: grid; gap: 8px; max-width: 480px">
  <label for="jf-config">Configuration</label>
  <minerva-json-field
    id="jf-config"
    rows="6"
    value={"{\\"name\\":\\"minerva\\",\\"tags\\":[\\"ui\\",\\"web-components\\"],\\"private\\":false}"}
    bind:this={field}
    onminerva-change={onChange}
  ></minerva-json-field>
  <output id="jf-config-state">{outputText}</output>
</div>
`,solid:`// JsonFieldBasic.tsx

import { createSignal } from "solid-js";

// The status line appears on blur; \`minerva-change\` fires on blur and after
// formatting. The element's validity (badInput) reflects the JSON syntax.
type JsonField = HTMLElement & {
  validity?: ValidityState;
  validationMessage: string;
};

export default function JsonFieldBasic() {
  let field!: JsonField;
  const [outputText, setOutputText] = createSignal("");

  const onChange = () => {
    setOutputText(
      field.validity?.valid ? "Committed valid JSON" : field.validationMessage,
    );
  };

  return (
    <div style="display: grid; gap: 8px; max-width: 480px">
      <label for="jf-config">Configuration</label>
      <minerva-json-field
        id="jf-config"
        rows="6"
        value='{"name":"minerva","tags":["ui","web-components"],"private":false}'
        ref={field}
        on:minerva-change={onChange}
      ></minerva-json-field>
      <output id="jf-config-state">{outputText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px; max-width: 480px">
  <label for="jf-config">Configuration</label>
  <minerva-json-field
    id="jf-config"
    rows="6"
    value='{"name":"minerva","tags":["ui","web-components"],"private":false}'
  ></minerva-json-field>
  <output id="jf-config-state"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The status line appears on blur; \`minerva-change\` fires on blur and after
  // formatting. The element's validity (badInput) reflects the JSON syntax.
  const field = document.querySelector("#jf-config");
  const output = document.querySelector("#jf-config-state");
  const onChange = () => {
    output.value = field.validity?.valid
      ? "Committed valid JSON"
      : field.validationMessage;
  };
  field.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};