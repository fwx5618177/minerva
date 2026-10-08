import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AvatarGroup.vue -->

<template>
  <div style="display: grid; gap: 16px">
    <minerva-avatar-group aria-label="Project members" max="3">
      <minerva-avatar
        stacked
        name="Ada Lovelace"
        src="https://randomuser.me/api/portraits/women/44.jpg"
      ></minerva-avatar>
      <minerva-avatar
        stacked
        name="Alan Turing"
        src="https://randomuser.me/api/portraits/men/32.jpg"
      ></minerva-avatar>
      <minerva-avatar stacked name="Grace Hopper"></minerva-avatar>
      <minerva-avatar stacked name="Linus Torvalds"></minerva-avatar>
      <minerva-avatar stacked name="Margaret Hamilton"></minerva-avatar>
    </minerva-avatar-group>
    <minerva-avatar-group aria-label="Reviewers" count="12">
      <minerva-avatar stacked size="small" name="Ken Thompson"></minerva-avatar>
      <minerva-avatar
        stacked
        size="small"
        name="Dennis Ritchie"
      ></minerva-avatar>
    </minerva-avatar-group>
  </div>
</template>
`,angular:`// avatar-group.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-avatar-group",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px">
      <minerva-avatar-group aria-label="Project members" max="3">
        <minerva-avatar
          stacked
          name="Ada Lovelace"
          src="https://randomuser.me/api/portraits/women/44.jpg"
        ></minerva-avatar>
        <minerva-avatar
          stacked
          name="Alan Turing"
          src="https://randomuser.me/api/portraits/men/32.jpg"
        ></minerva-avatar>
        <minerva-avatar stacked name="Grace Hopper"></minerva-avatar>
        <minerva-avatar stacked name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar stacked name="Margaret Hamilton"></minerva-avatar>
      </minerva-avatar-group>
      <minerva-avatar-group aria-label="Reviewers" count="12">
        <minerva-avatar
          stacked
          size="small"
          name="Ken Thompson"
        ></minerva-avatar>
        <minerva-avatar
          stacked
          size="small"
          name="Dennis Ritchie"
        ></minerva-avatar>
      </minerva-avatar-group>
    </div>
  \`,
})
export class AvatarGroupComponent {}
`,svelte:`<!-- AvatarGroup.svelte -->

<div style="display: grid; gap: 16px">
  <minerva-avatar-group aria-label="Project members" max="3">
    <minerva-avatar
      stacked
      name="Ada Lovelace"
      src="https://randomuser.me/api/portraits/women/44.jpg"
    ></minerva-avatar>
    <minerva-avatar
      stacked
      name="Alan Turing"
      src="https://randomuser.me/api/portraits/men/32.jpg"
    ></minerva-avatar>
    <minerva-avatar stacked name="Grace Hopper"></minerva-avatar>
    <minerva-avatar stacked name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar stacked name="Margaret Hamilton"></minerva-avatar>
  </minerva-avatar-group>
  <minerva-avatar-group aria-label="Reviewers" count="12">
    <minerva-avatar stacked size="small" name="Ken Thompson"></minerva-avatar>
    <minerva-avatar stacked size="small" name="Dennis Ritchie"></minerva-avatar>
  </minerva-avatar-group>
</div>
`,solid:`// AvatarGroup.tsx

export default function AvatarGroup() {
  return (
    <div style="display: grid; gap: 16px">
      <minerva-avatar-group aria-label="Project members" max="3">
        <minerva-avatar
          stacked
          name="Ada Lovelace"
          src="https://randomuser.me/api/portraits/women/44.jpg"
        ></minerva-avatar>
        <minerva-avatar
          stacked
          name="Alan Turing"
          src="https://randomuser.me/api/portraits/men/32.jpg"
        ></minerva-avatar>
        <minerva-avatar stacked name="Grace Hopper"></minerva-avatar>
        <minerva-avatar stacked name="Linus Torvalds"></minerva-avatar>
        <minerva-avatar stacked name="Margaret Hamilton"></minerva-avatar>
      </minerva-avatar-group>
      <minerva-avatar-group aria-label="Reviewers" count="12">
        <minerva-avatar
          stacked
          size="small"
          name="Ken Thompson"
        ></minerva-avatar>
        <minerva-avatar
          stacked
          size="small"
          name="Dennis Ritchie"
        ></minerva-avatar>
      </minerva-avatar-group>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px">
  <minerva-avatar-group aria-label="Project members" max="3">
    <minerva-avatar
      stacked
      name="Ada Lovelace"
      src="https://randomuser.me/api/portraits/women/44.jpg"
    ></minerva-avatar>
    <minerva-avatar
      stacked
      name="Alan Turing"
      src="https://randomuser.me/api/portraits/men/32.jpg"
    ></minerva-avatar>
    <minerva-avatar stacked name="Grace Hopper"></minerva-avatar>
    <minerva-avatar stacked name="Linus Torvalds"></minerva-avatar>
    <minerva-avatar stacked name="Margaret Hamilton"></minerva-avatar>
  </minerva-avatar-group>
  <minerva-avatar-group aria-label="Reviewers" count="12">
    <minerva-avatar stacked size="small" name="Ken Thompson"></minerva-avatar>
    <minerva-avatar stacked size="small" name="Dennis Ritchie"></minerva-avatar>
  </minerva-avatar-group>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};