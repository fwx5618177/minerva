const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/monaco-Di7Mq4ir.js","assets/rolldown-runtime-8BhlS34s.js","assets/react-vendor-fq7Q804H.js","assets/ConfigProvider-DJ6uO8m_-B80Bd_Y7.js","assets/iconBase-Cf2Z27y4.js","assets/sample-47dbx4yZ.js","assets/dist-BakUmjjA.js","assets/dist-dg6ajl7p.js","assets/registry-DOQVQ99a.js","assets/lu-NZUEGFhg.js","assets/ThemeModeContext-C-lVY6ml.js","assets/sample-4c9pDWeU.css","assets/engine-D6VmAq5F.js","assets/monaco-engine-PaNr8-ps.js","assets/monaco-engine-Dr_B0nJ4.js","assets/monaco-engine-DmYg7Y2M.js","assets/monaco-engine-BpHg0cnN.js","assets/monaco-engine-BY2dpUCI.js","assets/monaco-engine-GJG8JetC.js","assets/monaco-engine-R46A5hYp.js","assets/monaco-engine-BTVAAoSO.js","assets/monaco-engine-jMGan5RK.js","assets/monaco-engine-Bw19HfNn.js","assets/monaco-engine-1a4-QvGb.js","assets/monaco-engine-C0Mk5r2H.js","assets/monaco-engine-Fj9zJJ7A.js","assets/monaco-engine-sSCY0URy.css","assets/monaco-engine-D39yyjwm.css","assets/monaco-engine-CGS6m14o.css","assets/monaco-engine-DhQstF0N.js","assets/monaco-engine-C5zNPxQk.css","assets/monaco-engine-1otvxzop.css","assets/monaco-engine-B7dnJVcG.js","assets/monaco-engine-D2Z5mA4M.js","assets/monaco-engine-_cXcGg4T.js","assets/monaco-engine-cbPhkcfH.js","assets/monaco-engine-Cfc5TFLh.js","assets/monaco-engine-B1VdyB9Q.css","assets/monaco-engine-Cz_OUchN.js","assets/monaco-engine-B3nhxCSK.js","assets/monaco-engine-CGlZGCbA.css","assets/monaco-engine-YeUeWD1w.css","assets/monaco-engine-CjWtcTx_.css","assets/monaco-engine-moGO4emJ.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{d as t,f as n,h as r,t as i}from"./react-vendor-fq7Q804H.js";import{c as a,n as o,s,t as c}from"./DocPage-Kqmidh_0.js";function l(){let[e,t]=(0,u.useState)(`<h1>Hello</h1>
<p>Edit me.</p>
`);return(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(`p`,{children:`Loading editor…`}),children:(0,d.jsx)(f,{label:`HTML source`,language:`html`,value:e,onChange:t,height:240})})}var u,d,f;function p(){return(p=e((()=>{u=r(),d=i(),n(),f=(0,u.lazy)(async()=>{let{MonacoCodeEditor:e}=await t(async()=>{let{MonacoCodeEditor:e}=await import(`./monaco-Di7Mq4ir.js`);return{MonacoCodeEditor:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])),n=await t(()=>import(`./engine-D6VmAq5F.js`).then(e=>e.monaco,()=>void 0),__vite__mapDeps([12,1,13,14,15,16,17,18,19,20,2,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]));return{default:t=>(0,d.jsx)(e,{...t,monaco:n})}})})))()}var m;function h(){return(h=e((()=>{m=`import { lazy, Suspense, useState } from "react";
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
`})))()}var g,_,v,y;function b(){return(b=e((()=>{p(),h(),r(),o(),a(),g=i(),_=`import { MonacoCodeEditor } from "@minerva/lib-core/monaco";
import "@minerva/lib-core/style.css";`,v=s(Object.assign({"./demos/basic.tsx":l}),Object.assign({"./demos/basic.tsx":m})),y=()=>(0,g.jsx)(c,{id:`monaco-code-editor`,demos:v,importCode:_})})))()}b();export{y as default};