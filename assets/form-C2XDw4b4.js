import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TagInputForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Every tag is submitted as its own \`tags\` entry; \`required\` blocks an
// empty list and form.reset() restores the \`value\` attribute.

const form = ref<HTMLFormElement>();
const resultText = ref("");

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  resultText.value = \`tags = \${JSON.stringify(new FormData(form.value!).getAll("tags"))}\`;
};
const onReset = () => (resultText.value = "");
<\/script>

<template>
  <form
    id="article"
    style="display: grid; gap: 8px"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <label for="article-tags">Article tags</label>
    <minerva-tag-input
      id="article-tags"
      name="tags"
      value='["news", "tech"]'
      options="news, tech, science, culture, sport"
      required
    ></minerva-tag-input>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Publish</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// tag-input-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Every tag is submitted as its own \`tags\` entry; \`required\` blocks an
// empty list and form.reset() restores the \`value\` attribute.

@Component({
  selector: "app-tag-input-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="article"
      style="display: grid; gap: 8px"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <label for="article-tags">Article tags</label>
      <minerva-tag-input
        id="article-tags"
        name="tags"
        value='["news", "tech"]'
        options="news, tech, science, culture, sport"
        required
      ></minerva-tag-input>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Publish</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="result">{{ resultText }}</output>
    </form>
  \`,
})
export class TagInputFormComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    this.resultText = \`tags = \${JSON.stringify(new FormData(this.form.nativeElement).getAll("tags"))}\`;
  };
  onReset = () => (this.resultText = "");
}
`,svelte:`<!-- TagInputForm.svelte -->

<script lang="ts">
  // Every tag is submitted as its own \`tags\` entry; \`required\` blocks an
  // empty list and form.reset() restores the \`value\` attribute.

  let form: HTMLFormElement;
  let resultText = $state("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    resultText = \`tags = \${JSON.stringify(new FormData(form).getAll("tags"))}\`;
  };
  const onReset = () => (resultText = "");
<\/script>

<form
  id="article"
  style="display: grid; gap: 8px"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <label for="article-tags">Article tags</label>
  <minerva-tag-input
    id="article-tags"
    name="tags"
    value='["news", "tech"]'
    options="news, tech, science, culture, sport"
    required
  ></minerva-tag-input>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Publish</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="result">{resultText}</output>
</form>
`,solid:`// TagInputForm.tsx

import { createSignal } from "solid-js";

// Every tag is submitted as its own \`tags\` entry; \`required\` blocks an
// empty list and form.reset() restores the \`value\` attribute.

export default function TagInputForm() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    setResultText(
      \`tags = \${JSON.stringify(new FormData(form).getAll("tags"))}\`,
    );
  };
  const onReset = () => setResultText("");

  return (
    <form
      id="article"
      style="display: grid; gap: 8px"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <label for="article-tags">Article tags</label>
      <minerva-tag-input
        id="article-tags"
        name="tags"
        value='["news", "tech"]'
        options="news, tech, science, culture, sport"
        required
      ></minerva-tag-input>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Publish</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="article" style="display: grid; gap: 8px">
  <label for="article-tags">Article tags</label>
  <minerva-tag-input
    id="article-tags"
    name="tags"
    value='["news", "tech"]'
    options="news, tech, science, culture, sport"
    required
  ></minerva-tag-input>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Publish</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Every tag is submitted as its own \`tags\` entry; \`required\` blocks an
  // empty list and form.reset() restores the \`value\` attribute.
  const form = document.querySelector("#article");
  const result = document.querySelector("#result");
  const onSubmit = (event) => {
    event.preventDefault();
    result.value = \`tags = \${JSON.stringify(new FormData(form).getAll("tags"))}\`;
  };
  const onReset = () => (result.value = "");
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};