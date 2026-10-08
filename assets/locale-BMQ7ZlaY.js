import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ConfigProviderLocale.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Built-in texts follow the \`locale\` of the closest <minerva-config>
// (or the closest \`lang\` attribute) and update live when it changes.

const select = ref<HTMLSelectElement>();
const scope = ref<HTMLElement & { locale: string }>();

const onChange = () => (scope.value!.locale = select.value!.value);
<\/script>

<template>
  <label style="display: inline-flex; gap: 8px; align-items: center">
    Locale
    <select id="locale" ref="select" @change="onChange">
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="zh">中文</option>
      <option value="ja">日本語</option>
    </select>
  </label>
  <minerva-config id="scope" locale="en" ref="scope">
    <div style="display: grid; gap: 12px; margin-top: 12px">
      <minerva-pagination total="120" show-total></minerva-pagination>
      <minerva-empty></minerva-empty>
    </div>
  </minerva-config>
</template>
`,angular:`// config-provider-locale.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Built-in texts follow the \`locale\` of the closest <minerva-config>
// (or the closest \`lang\` attribute) and update live when it changes.

@Component({
  selector: "app-config-provider-locale",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <label style="display: inline-flex; gap: 8px; align-items: center">
      Locale
      <select id="locale" #select (change)="onChange($event)">
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="zh">中文</option>
        <option value="ja">日本語</option>
      </select>
    </label>
    <minerva-config id="scope" locale="en" #scope>
      <div style="display: grid; gap: 12px; margin-top: 12px">
        <minerva-pagination total="120" show-total></minerva-pagination>
        <minerva-empty></minerva-empty>
      </div>
    </minerva-config>
  \`,
})
export class ConfigProviderLocaleComponent {
  @ViewChild("select") select!: ElementRef<HTMLSelectElement>;
  @ViewChild("scope") scope!: ElementRef<HTMLElement & { locale: string }>;

  onChange = () =>
    (this.scope.nativeElement.locale = this.select.nativeElement.value);
}
`,svelte:`<!-- ConfigProviderLocale.svelte -->

<script lang="ts">
  // Built-in texts follow the \`locale\` of the closest <minerva-config>
  // (or the closest \`lang\` attribute) and update live when it changes.

  let select: HTMLSelectElement;
  let scope: HTMLElement & { locale: string };

  const onChange = () => (scope.locale = select.value);
<\/script>

<label style="display: inline-flex; gap: 8px; align-items: center">
  Locale
  <select id="locale" bind:this={select} onchange={onChange}>
    <option value="en">English</option>
    <option value="fr">Français</option>
    <option value="zh">中文</option>
    <option value="ja">日本語</option>
  </select>
</label>
<minerva-config id="scope" locale="en" bind:this={scope}>
  <div style="display: grid; gap: 12px; margin-top: 12px">
    <minerva-pagination total="120" show-total></minerva-pagination>
    <minerva-empty></minerva-empty>
  </div>
</minerva-config>
`,solid:`// ConfigProviderLocale.tsx

// Built-in texts follow the \`locale\` of the closest <minerva-config>
// (or the closest \`lang\` attribute) and update live when it changes.

export default function ConfigProviderLocale() {
  let select!: HTMLSelectElement;
  let scope!: HTMLElement & { locale: string };

  const onChange = () => (scope.locale = select.value);

  return (
    <>
      <label style="display: inline-flex; gap: 8px; align-items: center">
        Locale
        <select id="locale" ref={select} on:change={onChange}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
        </select>
      </label>
      <minerva-config id="scope" locale="en" ref={scope}>
        <div style="display: grid; gap: 12px; margin-top: 12px">
          <minerva-pagination total="120" show-total></minerva-pagination>
          <minerva-empty></minerva-empty>
        </div>
      </minerva-config>
    </>
  );
}
`,html:`<label style="display: inline-flex; gap: 8px; align-items: center">
  Locale
  <select id="locale">
    <option value="en">English</option>
    <option value="fr">Français</option>
    <option value="zh">中文</option>
    <option value="ja">日本語</option>
  </select>
</label>
<minerva-config id="scope" locale="en">
  <div style="display: grid; gap: 12px; margin-top: 12px">
    <minerva-pagination total="120" show-total></minerva-pagination>
    <minerva-empty></minerva-empty>
  </div>
</minerva-config>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Built-in texts follow the \`locale\` of the closest <minerva-config>
  // (or the closest \`lang\` attribute) and update live when it changes.
  const select = document.querySelector("#locale");
  const scope = document.querySelector("#scope");
  const onChange = () => (scope.locale = select.value);
  select.addEventListener("change", onChange);
<\/script>
`}})))()}n();export{t as default};