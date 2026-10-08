const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/monaco-kNLMbuuX.js","assets/rolldown-runtime-8BhlS34s.js","assets/react-vendor-aZSMfLKR.js","assets/minerva-web-components-e9i9Tzii.js","assets/useI18n-Brv-VDVY.js","assets/themeScope-CVsq4AXR.js","assets/stylingHooks-GjssfG7q.js","assets/Button-BfJfx3BZ.js","assets/icons-C9qyBhWC.js","assets/ProgressIndicator-CLa7Qw7I.js","assets/dataAttributes-C-grv0bs.js","assets/ConfigProvider-Cjobfnxn.js","assets/engine-7Eh4hSA_.js","assets/monaco-engine-Bo_oBYaj.js","assets/monaco-engine-Dr_B0nJ4.js","assets/monaco-engine-DmYg7Y2M.js","assets/monaco-engine-BpHg0cnN.js","assets/monaco-engine-Bm5Gn3f6.js","assets/monaco-engine-DwM0ZO_G.js","assets/monaco-engine-BZIXADqi.js","assets/monaco-engine-E7F4qpL7.js","assets/monaco-engine-jMGan5RK.js","assets/monaco-engine-Bw19HfNn.js","assets/monaco-engine-1a4-QvGb.js","assets/monaco-engine-C0Mk5r2H.js","assets/monaco-engine-Fj9zJJ7A.js","assets/monaco-engine-sSCY0URy.css","assets/monaco-engine-D39yyjwm.css","assets/monaco-engine-CGS6m14o.css","assets/monaco-engine-DhQstF0N.js","assets/monaco-engine-C5zNPxQk.css","assets/monaco-engine-1otvxzop.css","assets/monaco-engine-CHZlMVGA.js","assets/monaco-engine-0Ai-Lqhg.js","assets/monaco-engine-C52KWUlE.js","assets/monaco-engine-DakC8MBd.js","assets/monaco-engine-BcpXXY7z.js","assets/monaco-engine-B1VdyB9Q.css","assets/monaco-engine-Cjqbh3Xh.js","assets/monaco-engine-LVZNqvsq.js","assets/monaco-engine-CGlZGCbA.css","assets/monaco-engine-YeUeWD1w.css","assets/monaco-engine-CjWtcTx_.css","assets/monaco-engine-Cyk2s6xr.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{f as t,g as n,p as r,t as i}from"./react-vendor-aZSMfLKR.js";import{m as a,n as o,p as s,t as c}from"./DocPage-44Ak-YGP.js";function l(){let[e,t]=(0,u.useState)(`<h1>Hello</h1>
<p>Edit me.</p>
`);return(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(`p`,{children:`Loading editor…`}),children:(0,d.jsx)(f,{label:`HTML source`,language:`html`,value:e,onChange:t,height:240})})}var u,d,f;function p(){return(p=e((()=>{u=n(),d=i(),r(),f=(0,u.lazy)(async()=>{let{MonacoCodeEditor:e}=await t(async()=>{let{MonacoCodeEditor:e}=await import(`./monaco-kNLMbuuX.js`);return{MonacoCodeEditor:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])),n=await t(()=>import(`./engine-7Eh4hSA_.js`).then(e=>e.monaco,()=>void 0),__vite__mapDeps([12,1,13,14,15,16,17,18,19,20,2,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]));return{default:t=>(0,d.jsx)(e,{...t,monaco:n})}})})))()}var m;function h(){return(h=e((()=>{m=`import { lazy, Suspense, useState } from "react";
import type { MonacoCodeEditorProps } from "@minerva/lib-core/monaco";

type EditorProps = Omit<MonacoCodeEditorProps, "monaco">;

// The editor and the local Monaco engine load on demand, in their own chunks.
const Editor = lazy(async () => {
  const { MonacoCodeEditor } = await import("@minerva/lib-core/monaco");
  // (A failed chunk load rejects here; wrap the Suspense in an error
  // boundary in apps that must survive it.)
  // If the engine cannot load (offline build, blocked worker...), the editor
  // degrades to its editable textarea fallback.
  const engine = await import("../engine").then(
    (m) => m.monaco,
    () => undefined,
  );
  return {
    default: (props: EditorProps) => (
      <MonacoCodeEditor
        {...props}
        monaco={engine as unknown as MonacoCodeEditorProps["monaco"]}
      />
    ),
  };
});

export default function BasicDemo() {
  const [html, setHtml] = useState("<h1>Hello</h1>\\n<p>Edit me.</p>\\n");
  return (
    <Suspense fallback={<p>Loading editor…</p>}>
      <Editor
        label="HTML source"
        language="html"
        value={html}
        onChange={setHtml}
        height={240}
      />
    </Suspense>
  );
}
`})))()}var g,_,v,y;function b(){return(b=e((()=>{p(),h(),n(),o(),a(),g=i(),_=`import { MonacoCodeEditor } from "@minerva/lib-core/monaco";
import "@minerva/lib-core/style.css";`,v=s(Object.assign({"./demos/basic.tsx":l}),Object.assign({"./demos/basic.tsx":m})),y=()=>(0,g.jsx)(c,{id:`monaco-code-editor`,demos:v,importCode:_})})))()}b();export{y as default};