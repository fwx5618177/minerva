import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AvatarBasic.vue -->

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
    <minerva-avatar
      src="https://randomuser.me/api/portraits/women/44.jpg"
      name="Ada Lovelace"
    ></minerva-avatar>
    <minerva-avatar name="Grace Hopper"></minerva-avatar>
    <minerva-avatar name="李小龙"></minerva-avatar>
    <minerva-avatar aria-label="Unknown user">
      <span aria-hidden="true">?</span>
    </minerva-avatar>
  </div>
</template>
`,angular:`// avatar-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-avatar-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
      <minerva-avatar
        src="https://randomuser.me/api/portraits/women/44.jpg"
        name="Ada Lovelace"
      ></minerva-avatar>
      <minerva-avatar name="Grace Hopper"></minerva-avatar>
      <minerva-avatar name="李小龙"></minerva-avatar>
      <minerva-avatar aria-label="Unknown user">
        <span aria-hidden="true">?</span>
      </minerva-avatar>
    </div>
  \`,
})
export class AvatarBasicComponent {}
`,svelte:`<!-- AvatarBasic.svelte -->

<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
  <minerva-avatar
    src="https://randomuser.me/api/portraits/women/44.jpg"
    name="Ada Lovelace"
  ></minerva-avatar>
  <minerva-avatar name="Grace Hopper"></minerva-avatar>
  <minerva-avatar name="李小龙"></minerva-avatar>
  <minerva-avatar aria-label="Unknown user">
    <span aria-hidden="true">?</span>
  </minerva-avatar>
</div>
`,solid:`// AvatarBasic.tsx

export default function AvatarBasic() {
  return (
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
      <minerva-avatar
        src="https://randomuser.me/api/portraits/women/44.jpg"
        name="Ada Lovelace"
      ></minerva-avatar>
      <minerva-avatar name="Grace Hopper"></minerva-avatar>
      <minerva-avatar name="李小龙"></minerva-avatar>
      <minerva-avatar aria-label="Unknown user">
        <span aria-hidden="true">?</span>
      </minerva-avatar>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
  <minerva-avatar
    src="https://randomuser.me/api/portraits/women/44.jpg"
    name="Ada Lovelace"
  ></minerva-avatar>
  <minerva-avatar name="Grace Hopper"></minerva-avatar>
  <minerva-avatar name="李小龙"></minerva-avatar>
  <minerva-avatar aria-label="Unknown user">
    <span aria-hidden="true">?</span>
  </minerva-avatar>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};