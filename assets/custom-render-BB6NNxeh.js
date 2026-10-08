import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AutoCompleteCustomRender.vue -->

<script setup lang="ts">
// mode="custom" renders options with renderOption (a string, a DOM node or
// a Lit template); filterOption / sortOption replace the default filtering
// and order; renderEmpty replaces the empty state.

type User = { label: string; value: string; description: string };
type Autocomplete = HTMLElement & {
  options: User[];
  filterOption: (text: string, option: User) => boolean;
  sortOption: (a: User, b: User) => number;
  renderOption: (option: User) => Node;
  renderEmpty: () => string;
};

const inputOptions = [
  { label: "Ada Lovelace", value: "ada", description: "ada@example.com" },
  { label: "Grace Hopper", value: "grace", description: "grace@example.com" },
  { label: "Alan Turing", value: "alan", description: "turing@example.com" },
  {
    label: "Linus Torvalds",
    value: "linus",
    description: "linus@example.com",
  },
];
const inputFilterOption = (text, option) => {
  const query = text.trim().toLowerCase();
  return (
    option.label.toLowerCase().includes(query) ||
    option.description.includes(query)
  );
};
const inputSortOption = (a, b) => a.label.localeCompare(b.label);
const inputRenderOption = (option) => {
  const row = document.createElement("div");
  row.style.cssText = "display: flex; gap: 8px; align-items: center";
  const avatar = document.createElement("span");
  avatar.textContent = option.label
    .split(" ")
    .map((word) => word[0])
    .join("");
  avatar.style.cssText =
    "display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--primary-color, #4f46e5); color: #fff; font-size: 12px";
  const text = document.createElement("span");
  text.innerHTML = \`<strong></strong><br /><small style="opacity: 0.7"></small>\`;
  text.querySelector("strong")!.textContent = option.label;
  text.querySelector("small")!.textContent = option.description;
  row.append(avatar, text);
  return row;
};
const inputRenderEmpty = () => "Nobody matches — try another name.";
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 360px">
    <minerva-autocomplete
      id="user"
      label="Assignee"
      placeholder="Search by name or email"
      mode="custom"
      :options.prop="inputOptions"
      :filterOption.prop="inputFilterOption"
      :sortOption.prop="inputSortOption"
      :renderOption.prop="inputRenderOption"
      :renderEmpty.prop="inputRenderEmpty"
    ></minerva-autocomplete>
  </div>
</template>
`,angular:`// auto-complete-custom-render.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// mode="custom" renders options with renderOption (a string, a DOM node or
// a Lit template); filterOption / sortOption replace the default filtering
// and order; renderEmpty replaces the empty state.
type User = { label: string; value: string; description: string };
type Autocomplete = HTMLElement & {
  options: User[];
  filterOption: (text: string, option: User) => boolean;
  sortOption: (a: User, b: User) => number;
  renderOption: (option: User) => Node;
  renderEmpty: () => string;
};

@Component({
  selector: "app-auto-complete-custom-render",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 360px">
      <minerva-autocomplete
        id="user"
        label="Assignee"
        placeholder="Search by name or email"
        mode="custom"
        [options]="inputOptions"
        [filterOption]="inputFilterOption"
        [sortOption]="inputSortOption"
        [renderOption]="inputRenderOption"
        [renderEmpty]="inputRenderEmpty"
      ></minerva-autocomplete>
    </div>
  \`,
})
export class AutoCompleteCustomRenderComponent {
  inputOptions = [
    { label: "Ada Lovelace", value: "ada", description: "ada@example.com" },
    { label: "Grace Hopper", value: "grace", description: "grace@example.com" },
    { label: "Alan Turing", value: "alan", description: "turing@example.com" },
    {
      label: "Linus Torvalds",
      value: "linus",
      description: "linus@example.com",
    },
  ];
  inputFilterOption = (text, option) => {
    const query = text.trim().toLowerCase();
    return (
      option.label.toLowerCase().includes(query) ||
      option.description.includes(query)
    );
  };
  inputSortOption = (a, b) => a.label.localeCompare(b.label);
  inputRenderOption = (option) => {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; gap: 8px; align-items: center";
    const avatar = document.createElement("span");
    avatar.textContent = option.label
      .split(" ")
      .map((word) => word[0])
      .join("");
    avatar.style.cssText =
      "display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--primary-color, #4f46e5); color: #fff; font-size: 12px";
    const text = document.createElement("span");
    text.innerHTML = \`<strong></strong><br /><small style="opacity: 0.7"></small>\`;
    text.querySelector("strong")!.textContent = option.label;
    text.querySelector("small")!.textContent = option.description;
    row.append(avatar, text);
    return row;
  };
  inputRenderEmpty = () => "Nobody matches — try another name.";
}
`,svelte:`<!-- AutoCompleteCustomRender.svelte -->

<script lang="ts">
  // mode="custom" renders options with renderOption (a string, a DOM node or
  // a Lit template); filterOption / sortOption replace the default filtering
  // and order; renderEmpty replaces the empty state.

  type User = { label: string; value: string; description: string };
  type Autocomplete = HTMLElement & {
    options: User[];
    filterOption: (text: string, option: User) => boolean;
    sortOption: (a: User, b: User) => number;
    renderOption: (option: User) => Node;
    renderEmpty: () => string;
  };

  const inputOptions = [
    { label: "Ada Lovelace", value: "ada", description: "ada@example.com" },
    { label: "Grace Hopper", value: "grace", description: "grace@example.com" },
    { label: "Alan Turing", value: "alan", description: "turing@example.com" },
    {
      label: "Linus Torvalds",
      value: "linus",
      description: "linus@example.com",
    },
  ];
  const inputFilterOption = (text, option) => {
    const query = text.trim().toLowerCase();
    return (
      option.label.toLowerCase().includes(query) ||
      option.description.includes(query)
    );
  };
  const inputSortOption = (a, b) => a.label.localeCompare(b.label);
  const inputRenderOption = (option) => {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; gap: 8px; align-items: center";
    const avatar = document.createElement("span");
    avatar.textContent = option.label
      .split(" ")
      .map((word) => word[0])
      .join("");
    avatar.style.cssText =
      "display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--primary-color, #4f46e5); color: #fff; font-size: 12px";
    const text = document.createElement("span");
    text.innerHTML = \`<strong></strong><br /><small style="opacity: 0.7"></small>\`;
    text.querySelector("strong")!.textContent = option.label;
    text.querySelector("small")!.textContent = option.description;
    row.append(avatar, text);
    return row;
  };
  const inputRenderEmpty = () => "Nobody matches — try another name.";
<\/script>

<div style="display: grid; gap: 12px; max-width: 360px">
  <minerva-autocomplete
    id="user"
    label="Assignee"
    placeholder="Search by name or email"
    mode="custom"
    options={inputOptions}
    filterOption={inputFilterOption}
    sortOption={inputSortOption}
    renderOption={inputRenderOption}
    renderEmpty={inputRenderEmpty}
  ></minerva-autocomplete>
</div>
`,solid:`// AutoCompleteCustomRender.tsx

// mode="custom" renders options with renderOption (a string, a DOM node or
// a Lit template); filterOption / sortOption replace the default filtering
// and order; renderEmpty replaces the empty state.
type User = { label: string; value: string; description: string };
type Autocomplete = HTMLElement & {
  options: User[];
  filterOption: (text: string, option: User) => boolean;
  sortOption: (a: User, b: User) => number;
  renderOption: (option: User) => Node;
  renderEmpty: () => string;
};

export default function AutoCompleteCustomRender() {
  const inputOptions = [
    { label: "Ada Lovelace", value: "ada", description: "ada@example.com" },
    { label: "Grace Hopper", value: "grace", description: "grace@example.com" },
    { label: "Alan Turing", value: "alan", description: "turing@example.com" },
    {
      label: "Linus Torvalds",
      value: "linus",
      description: "linus@example.com",
    },
  ];
  const inputFilterOption = (text, option) => {
    const query = text.trim().toLowerCase();
    return (
      option.label.toLowerCase().includes(query) ||
      option.description.includes(query)
    );
  };
  const inputSortOption = (a, b) => a.label.localeCompare(b.label);
  const inputRenderOption = (option) => {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; gap: 8px; align-items: center";
    const avatar = document.createElement("span");
    avatar.textContent = option.label
      .split(" ")
      .map((word) => word[0])
      .join("");
    avatar.style.cssText =
      "display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--primary-color, #4f46e5); color: #fff; font-size: 12px";
    const text = document.createElement("span");
    text.innerHTML = \`<strong></strong><br /><small style="opacity: 0.7"></small>\`;
    text.querySelector("strong")!.textContent = option.label;
    text.querySelector("small")!.textContent = option.description;
    row.append(avatar, text);
    return row;
  };
  const inputRenderEmpty = () => "Nobody matches — try another name.";

  return (
    <div style="display: grid; gap: 12px; max-width: 360px">
      <minerva-autocomplete
        id="user"
        label="Assignee"
        placeholder="Search by name or email"
        mode="custom"
        prop:options={inputOptions}
        prop:filterOption={inputFilterOption}
        prop:sortOption={inputSortOption}
        prop:renderOption={inputRenderOption}
        prop:renderEmpty={inputRenderEmpty}
      ></minerva-autocomplete>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 360px">
  <minerva-autocomplete
    id="user"
    label="Assignee"
    placeholder="Search by name or email"
    mode="custom"
  ></minerva-autocomplete>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // mode="custom" renders options with renderOption (a string, a DOM node or
  // a Lit template); filterOption / sortOption replace the default filtering
  // and order; renderEmpty replaces the empty state.
  const input = document.querySelector("#user");
  input.options = [
    { label: "Ada Lovelace", value: "ada", description: "ada@example.com" },
    { label: "Grace Hopper", value: "grace", description: "grace@example.com" },
    { label: "Alan Turing", value: "alan", description: "turing@example.com" },
    {
      label: "Linus Torvalds",
      value: "linus",
      description: "linus@example.com",
    },
  ];
  input.filterOption = (text, option) => {
    const query = text.trim().toLowerCase();
    return (
      option.label.toLowerCase().includes(query) ||
      option.description.includes(query)
    );
  };
  input.sortOption = (a, b) => a.label.localeCompare(b.label);
  input.renderOption = (option) => {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; gap: 8px; align-items: center";
    const avatar = document.createElement("span");
    avatar.textContent = option.label
      .split(" ")
      .map((word) => word[0])
      .join("");
    avatar.style.cssText =
      "display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--primary-color, #4f46e5); color: #fff; font-size: 12px";
    const text = document.createElement("span");
    text.innerHTML = \`<strong></strong><br /><small style="opacity: 0.7"></small>\`;
    text.querySelector("strong").textContent = option.label;
    text.querySelector("small").textContent = option.description;
    row.append(avatar, text);
    return row;
  };
  input.renderEmpty = () => "Nobody matches — try another name.";
<\/script>
`}})))()}n();export{t as default};