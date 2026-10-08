import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DividerVertical.vue -->

<template>
  <p style="margin: 0">
    Home
    <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
    Docs
    <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
    Blog
  </p>
  <div
    style="
      display: flex;
      align-items: center;
      height: 64px;
      margin-top: 16px;
      padding: 8px;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
    "
  >
    <span>Left pane</span>
    <minerva-divider
      orientation="vertical"
      flex-item
      variant="dashed"
    ></minerva-divider>
    <span>Right pane</span>
  </div>
</template>
`,angular:`// divider-vertical.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-divider-vertical",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <p style="margin: 0">
      Home
      <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
      Docs
      <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
      Blog
    </p>
    <div
      style="
        display: flex;
        align-items: center;
        height: 64px;
        margin-top: 16px;
        padding: 8px;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
      "
    >
      <span>Left pane</span>
      <minerva-divider
        orientation="vertical"
        flex-item
        variant="dashed"
      ></minerva-divider>
      <span>Right pane</span>
    </div>
  \`,
})
export class DividerVerticalComponent {}
`,svelte:`<!-- DividerVertical.svelte -->

<p style="margin: 0">
  Home
  <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
  Docs
  <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
  Blog
</p>
<div
  style="
    display: flex;
    align-items: center;
    height: 64px;
    margin-top: 16px;
    padding: 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
  "
>
  <span>Left pane</span>
  <minerva-divider
    orientation="vertical"
    flex-item
    variant="dashed"
  ></minerva-divider>
  <span>Right pane</span>
</div>
`,solid:`// DividerVertical.tsx

export default function DividerVertical() {
  return (
    <>
      <p style="margin: 0">
        Home
        <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
        Docs
        <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
        Blog
      </p>
      <div
        style="
          display: flex;
          align-items: center;
          height: 64px;
          margin-top: 16px;
          padding: 8px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        "
      >
        <span>Left pane</span>
        <minerva-divider
          orientation="vertical"
          flex-item
          variant="dashed"
        ></minerva-divider>
        <span>Right pane</span>
      </div>
    </>
  );
}
`,html:`<p style="margin: 0">
  Home
  <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
  Docs
  <minerva-divider orientation="vertical" spacing="8"></minerva-divider>
  Blog
</p>
<div
  style="
    display: flex;
    align-items: center;
    height: 64px;
    margin-top: 16px;
    padding: 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
  "
>
  <span>Left pane</span>
  <minerva-divider
    orientation="vertical"
    flex-item
    variant="dashed"
  ></minerva-divider>
  <span>Right pane</span>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};