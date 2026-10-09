import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SelectGroups.vue -->

<template>
  <div style="display: grid; gap: 12px; max-width: 320px">
    <minerva-select aria-label="Time zone" placeholder="Select a time zone">
      <minerva-option-group>
        <minerva-select-label>Europe</minerva-select-label>
        <minerva-option value="europe/london">London (UTC+0)</minerva-option>
        <minerva-option value="europe/paris">Paris (UTC+1)</minerva-option>
        <minerva-option value="europe/berlin">Berlin (UTC+1)</minerva-option>
      </minerva-option-group>
      <minerva-select-separator></minerva-select-separator>
      <minerva-option-group>
        <minerva-select-label>Asia</minerva-select-label>
        <minerva-option value="asia/shanghai">Shanghai (UTC+8)</minerva-option>
        <minerva-option value="asia/tokyo">Tokyo (UTC+9)</minerva-option>
      </minerva-option-group>
    </minerva-select>
    <minerva-select aria-label="Status" value="online">
      <minerva-option value="online" label="Online" text-value="Online">
        <span aria-hidden="true">🟢</span> Online
        <small style="opacity: 0.7">— visible to everyone</small>
      </minerva-option>
      <minerva-option value="away" label="Away" text-value="Away">
        <span aria-hidden="true">🟡</span> Away
        <small style="opacity: 0.7">— notifications muted</small>
      </minerva-option>
      <minerva-option value="offline" label="Offline" text-value="Offline">
        <span aria-hidden="true">⚪</span> Offline
        <small style="opacity: 0.7">— appear offline</small>
      </minerva-option>
    </minerva-select>
  </div>
</template>
`,angular:`// select-groups.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-select-groups",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 320px">
      <minerva-select aria-label="Time zone" placeholder="Select a time zone">
        <minerva-option-group>
          <minerva-select-label>Europe</minerva-select-label>
          <minerva-option value="europe/london">London (UTC+0)</minerva-option>
          <minerva-option value="europe/paris">Paris (UTC+1)</minerva-option>
          <minerva-option value="europe/berlin">Berlin (UTC+1)</minerva-option>
        </minerva-option-group>
        <minerva-select-separator></minerva-select-separator>
        <minerva-option-group>
          <minerva-select-label>Asia</minerva-select-label>
          <minerva-option value="asia/shanghai"
            >Shanghai (UTC+8)</minerva-option
          >
          <minerva-option value="asia/tokyo">Tokyo (UTC+9)</minerva-option>
        </minerva-option-group>
      </minerva-select>
      <minerva-select aria-label="Status" value="online">
        <minerva-option value="online" label="Online" text-value="Online">
          <span aria-hidden="true">🟢</span> Online
          <small style="opacity: 0.7">— visible to everyone</small>
        </minerva-option>
        <minerva-option value="away" label="Away" text-value="Away">
          <span aria-hidden="true">🟡</span> Away
          <small style="opacity: 0.7">— notifications muted</small>
        </minerva-option>
        <minerva-option value="offline" label="Offline" text-value="Offline">
          <span aria-hidden="true">⚪</span> Offline
          <small style="opacity: 0.7">— appear offline</small>
        </minerva-option>
      </minerva-select>
    </div>
  \`,
})
export class SelectGroupsComponent {}
`,svelte:`<!-- SelectGroups.svelte -->

<div style="display: grid; gap: 12px; max-width: 320px">
  <minerva-select aria-label="Time zone" placeholder="Select a time zone">
    <minerva-option-group>
      <minerva-select-label>Europe</minerva-select-label>
      <minerva-option value="europe/london">London (UTC+0)</minerva-option>
      <minerva-option value="europe/paris">Paris (UTC+1)</minerva-option>
      <minerva-option value="europe/berlin">Berlin (UTC+1)</minerva-option>
    </minerva-option-group>
    <minerva-select-separator></minerva-select-separator>
    <minerva-option-group>
      <minerva-select-label>Asia</minerva-select-label>
      <minerva-option value="asia/shanghai">Shanghai (UTC+8)</minerva-option>
      <minerva-option value="asia/tokyo">Tokyo (UTC+9)</minerva-option>
    </minerva-option-group>
  </minerva-select>
  <minerva-select aria-label="Status" value="online">
    <minerva-option value="online" label="Online" text-value="Online">
      <span aria-hidden="true">🟢</span> Online
      <small style="opacity: 0.7">— visible to everyone</small>
    </minerva-option>
    <minerva-option value="away" label="Away" text-value="Away">
      <span aria-hidden="true">🟡</span> Away
      <small style="opacity: 0.7">— notifications muted</small>
    </minerva-option>
    <minerva-option value="offline" label="Offline" text-value="Offline">
      <span aria-hidden="true">⚪</span> Offline
      <small style="opacity: 0.7">— appear offline</small>
    </minerva-option>
  </minerva-select>
</div>
`,solid:`// SelectGroups.tsx

export default function SelectGroups() {
  return (
    <div style="display: grid; gap: 12px; max-width: 320px">
      <minerva-select aria-label="Time zone" placeholder="Select a time zone">
        <minerva-option-group>
          <minerva-select-label>Europe</minerva-select-label>
          <minerva-option value="europe/london">London (UTC+0)</minerva-option>
          <minerva-option value="europe/paris">Paris (UTC+1)</minerva-option>
          <minerva-option value="europe/berlin">Berlin (UTC+1)</minerva-option>
        </minerva-option-group>
        <minerva-select-separator></minerva-select-separator>
        <minerva-option-group>
          <minerva-select-label>Asia</minerva-select-label>
          <minerva-option value="asia/shanghai">
            Shanghai (UTC+8)
          </minerva-option>
          <minerva-option value="asia/tokyo">Tokyo (UTC+9)</minerva-option>
        </minerva-option-group>
      </minerva-select>
      <minerva-select aria-label="Status" value="online">
        <minerva-option value="online" label="Online" text-value="Online">
          <span aria-hidden="true">🟢</span> Online
          <small style="opacity: 0.7">— visible to everyone</small>
        </minerva-option>
        <minerva-option value="away" label="Away" text-value="Away">
          <span aria-hidden="true">🟡</span> Away
          <small style="opacity: 0.7">— notifications muted</small>
        </minerva-option>
        <minerva-option value="offline" label="Offline" text-value="Offline">
          <span aria-hidden="true">⚪</span> Offline
          <small style="opacity: 0.7">— appear offline</small>
        </minerva-option>
      </minerva-select>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 320px">
  <minerva-select aria-label="Time zone" placeholder="Select a time zone">
    <minerva-option-group>
      <minerva-select-label>Europe</minerva-select-label>
      <minerva-option value="europe/london">London (UTC+0)</minerva-option>
      <minerva-option value="europe/paris">Paris (UTC+1)</minerva-option>
      <minerva-option value="europe/berlin">Berlin (UTC+1)</minerva-option>
    </minerva-option-group>
    <minerva-select-separator></minerva-select-separator>
    <minerva-option-group>
      <minerva-select-label>Asia</minerva-select-label>
      <minerva-option value="asia/shanghai">Shanghai (UTC+8)</minerva-option>
      <minerva-option value="asia/tokyo">Tokyo (UTC+9)</minerva-option>
    </minerva-option-group>
  </minerva-select>
  <minerva-select aria-label="Status" value="online">
    <minerva-option value="online" label="Online" text-value="Online">
      <span aria-hidden="true">🟢</span> Online
      <small style="opacity: 0.7">— visible to everyone</small>
    </minerva-option>
    <minerva-option value="away" label="Away" text-value="Away">
      <span aria-hidden="true">🟡</span> Away
      <small style="opacity: 0.7">— notifications muted</small>
    </minerva-option>
    <minerva-option value="offline" label="Offline" text-value="Offline">
      <span aria-hidden="true">⚪</span> Offline
      <small style="opacity: 0.7">— appear offline</small>
    </minerva-option>
  </minerva-select>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};