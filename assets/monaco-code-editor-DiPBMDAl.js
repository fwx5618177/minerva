const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/monaco-DX9lvirN.js","assets/rolldown-runtime-8BhlS34s.js","assets/react-vendor-DuLeTlZP.js","assets/minerva-web-components-gmidRbuG.js","assets/minerva-web-components-BT-6l4L2.js","assets/useI18n-7NNo_JVm.js","assets/themeScope-b4r3rlRi.js","assets/stylingHooks-GjssfG7q.js","assets/Button-BJTVw8sA.js","assets/icons-Dj0E45-e.js","assets/ProgressIndicator-DeBT-lC1.js","assets/dataAttributes-C-grv0bs.js","assets/ConfigProvider-BLIkPs6R.js","assets/engine-k1XXW2B8.js","assets/monaco-engine-gG1UQPag.js","assets/monaco-engine-Dr_B0nJ4.js","assets/monaco-engine-DmYg7Y2M.js","assets/monaco-engine-BpHg0cnN.js","assets/monaco-engine-B2Rq4pYj.js","assets/monaco-engine-mINeXuJr.js","assets/monaco-engine-y4YoBhGt.js","assets/monaco-engine-Dio1xWRJ.js","assets/monaco-engine-jMGan5RK.js","assets/monaco-engine-Bw19HfNn.js","assets/monaco-engine-1a4-QvGb.js","assets/monaco-engine-C0Mk5r2H.js","assets/monaco-engine-Fj9zJJ7A.js","assets/monaco-engine-sSCY0URy.css","assets/monaco-engine-D39yyjwm.css","assets/monaco-engine-CGS6m14o.css","assets/monaco-engine-DhQstF0N.js","assets/monaco-engine-C5zNPxQk.css","assets/monaco-engine-1otvxzop.css","assets/monaco-engine-CZaLtWd2.js","assets/monaco-engine-CFoH1IYI.js","assets/monaco-engine-Da_eUhew.js","assets/monaco-engine-BVEOTZp9.js","assets/monaco-engine-B8vcCB1L.js","assets/monaco-engine-B1VdyB9Q.css","assets/monaco-engine-Px7soJ9H.js","assets/monaco-engine-DRd8uHzV.js","assets/monaco-engine-CGlZGCbA.css","assets/monaco-engine-YeUeWD1w.css","assets/monaco-engine-CjWtcTx_.css","assets/monaco-engine-C1skE3M8.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{f as t,g as n,p as r,t as i}from"./react-vendor-DuLeTlZP.js";import{m as a,n as o,p as s,t as c}from"./DocPage-OkRujup2.js";function l(){let[e,t]=(0,u.useState)(`<h1>Hello</h1>
<p>Edit me.</p>
`);return(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(`p`,{children:`Loading editor…`}),children:(0,d.jsx)(f,{label:`HTML source`,language:`html`,value:e,onChange:t,height:240})})}var u,d,f;function p(){return(p=e((()=>{u=n(),d=i(),r(),f=(0,u.lazy)(async()=>{let{MonacoCodeEditor:e}=await t(async()=>{let{MonacoCodeEditor:e}=await import(`./monaco-DX9lvirN.js`);return{MonacoCodeEditor:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),n=await t(()=>import(`./engine-k1XXW2B8.js`).then(e=>e.monaco,()=>void 0),__vite__mapDeps([13,1,14,15,16,17,18,19,20,21,2,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]));return{default:t=>(0,d.jsx)(e,{...t,monaco:n})}})})))()}var m;function h(){return(h=e((()=>{m=`import { lazy, Suspense, useState } from "react";
import type { MonacoCodeEditorProps } from "minerva-design/monaco";

type EditorProps = Omit<MonacoCodeEditorProps, "monaco">;

// The editor and the local Monaco engine load on demand, in their own chunks.
const Editor = lazy(async () => {
  const { MonacoCodeEditor } = await import("minerva-design/monaco");
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
`})))()}var g,_,v,y;function b(){return(b=e((()=>{p(),h(),n(),o(),a(),g=i(),_=`import { MonacoCodeEditor } from "minerva-design/monaco";`,v=s(Object.assign({"./demos/basic.tsx":l}),Object.assign({"./demos/basic.tsx":m})),y=()=>(0,g.jsx)(c,{id:`monaco-code-editor`,demos:v,importCode:_})})))()}b();export{y as default};