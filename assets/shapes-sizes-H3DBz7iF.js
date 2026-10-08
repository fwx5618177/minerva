import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AvatarShapesSizes.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; gap: 12px; align-items: center">
      <minerva-avatar shape="circle" name="Alan Turing"></minerva-avatar>
      <minerva-avatar shape="rounded" name="Alan Turing"></minerva-avatar>
      <minerva-avatar shape="square" name="Alan Turing"></minerva-avatar>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
      <minerva-avatar size="xsmall" name="Linus Torvalds"></minerva-avatar>
      <minerva-avatar size="small" name="Linus Torvalds"></minerva-avatar>
      <minerva-avatar size="medium" name="Linus Torvalds"></minerva-avatar>
      <minerva-avatar size="large" name="Linus Torvalds"></minerva-avatar>
      <minerva-avatar size="xlarge" name="Linus Torvalds"></minerva-avatar>
      <minerva-avatar size="xxlarge" name="Linus Torvalds"></minerva-avatar>
      <minerva-avatar size="72" name="Linus Torvalds"></minerva-avatar>
    </div>
  </div>
</template>
`,angular:`// avatar-shapes-sizes.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-avatar-shapes-sizes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <div style="display: flex; gap: 12px; align-items: center">
        <minerva-avatar shape="circle" name="Alan Turing"></minerva-avatar>
        <minerva-avatar shape="rounded" name="Alan Turing"></minerva-avatar>
        <minerva-avatar shape="square" name="Alan Turing"></minerva-avatar>
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center"
      >
        <minerva-avatar size="xsmall" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="small" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="medium" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="large" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="xlarge" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="xxlarge" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="72" name="Linus Torvalds"></minerva-avatar>
      </div>
    </div>
  \`,
})
export class AvatarShapesSizesComponent {}
`,svelte:`<!-- AvatarShapesSizes.svelte -->

<div style="display: grid; gap: 12px">
  <div style="display: flex; gap: 12px; align-items: center">
    <minerva-avatar shape="circle" name="Alan Turing"></minerva-avatar>
    <minerva-avatar shape="rounded" name="Alan Turing"></minerva-avatar>
    <minerva-avatar shape="square" name="Alan Turing"></minerva-avatar>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
    <minerva-avatar size="xsmall" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="small" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="medium" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="large" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="xlarge" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="xxlarge" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="72" name="Linus Torvalds"></minerva-avatar>
  </div>
</div>
`,solid:`// AvatarShapesSizes.tsx

export default function AvatarShapesSizes() {
  return (
    <div style="display: grid; gap: 12px">
      <div style="display: flex; gap: 12px; align-items: center">
        <minerva-avatar shape="circle" name="Alan Turing"></minerva-avatar>
        <minerva-avatar shape="rounded" name="Alan Turing"></minerva-avatar>
        <minerva-avatar shape="square" name="Alan Turing"></minerva-avatar>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
        <minerva-avatar size="xsmall" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="small" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="medium" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="large" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="xlarge" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="xxlarge" name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar size="72" name="Linus Torvalds"></minerva-avatar>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <div style="display: flex; gap: 12px; align-items: center">
    <minerva-avatar shape="circle" name="Alan Turing"></minerva-avatar>
    <minerva-avatar shape="rounded" name="Alan Turing"></minerva-avatar>
    <minerva-avatar shape="square" name="Alan Turing"></minerva-avatar>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
    <minerva-avatar size="xsmall" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="small" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="medium" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="large" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="xlarge" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="xxlarge" name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar size="72" name="Linus Torvalds"></minerva-avatar>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};