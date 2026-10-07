const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/monaco-DatpFsuQ.js","assets/rolldown-runtime-8BhlS34s.js","assets/react-vendor-EhfBFkcC.js","assets/DocPage-HgWiqH91.js","assets/minerva-web-components-BCL_6rcP.js","assets/sample-DbiIiloN.js","assets/minerva-web-components-BPjqS5uR.js","assets/minerva-web-components-DB7tn7hP.js","assets/minerva-web-components-CzA8FbRN.js","assets/minerva-web-components-Baqgrh4_.js","assets/minerva-web-components-Cc_Bhmo4.js","assets/minerva-web-components-Bebb61SK.js","assets/sample-BLQWK6pj.css","assets/DocPage-D8LabMvg.css","assets/useI18n-CYdr3eVz.js","assets/Button-CwqLLYn6.js","assets/icons-BaZJL-85.js","assets/ProgressIndicator-6_LFe5-H.js","assets/dataAttributes-C-grv0bs.js","assets/engine-Bui354Uj.js","assets/monaco-engine-PgDPAomn.js","assets/monaco-engine-Dr_B0nJ4.js","assets/monaco-engine-DmYg7Y2M.js","assets/monaco-engine-BpHg0cnN.js","assets/monaco-engine-CROK-Xhw.js","assets/monaco-engine-DhHSUYkj.js","assets/monaco-engine-DQnBJVXf.js","assets/monaco-engine-C2kVuJwm.js","assets/monaco-engine-jMGan5RK.js","assets/monaco-engine-Bw19HfNn.js","assets/monaco-engine-1a4-QvGb.js","assets/monaco-engine-C0Mk5r2H.js","assets/monaco-engine-Fj9zJJ7A.js","assets/monaco-engine-sSCY0URy.css","assets/monaco-engine-D39yyjwm.css","assets/monaco-engine-CGS6m14o.css","assets/monaco-engine-DhQstF0N.js","assets/monaco-engine-C5zNPxQk.css","assets/monaco-engine-1otvxzop.css","assets/monaco-engine-Bz-8slta.js","assets/monaco-engine-BTKpeMim.js","assets/monaco-engine-DNlkFjIg.js","assets/monaco-engine-B3hBU-EM.js","assets/monaco-engine-eifKVFOw.js","assets/monaco-engine-B1VdyB9Q.css","assets/monaco-engine-BXvbnZTJ.js","assets/monaco-engine-SPi3eoYP.js","assets/monaco-engine-CGlZGCbA.css","assets/monaco-engine-YeUeWD1w.css","assets/monaco-engine-CjWtcTx_.css","assets/monaco-engine-Ci5Q2qrX.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{f as t,g as n,p as r,t as i}from"./react-vendor-EhfBFkcC.js";import{c as a,n as o,s,t as c}from"./DocPage-HgWiqH91.js";function l(){let[e,t]=(0,u.useState)(`<h1>Hello</h1>
<p>Edit me.</p>
`);return(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(`p`,{children:`Loading editor…`}),children:(0,d.jsx)(f,{label:`HTML source`,language:`html`,value:e,onChange:t,height:240})})}var u,d,f;function p(){return(p=e((()=>{u=n(),d=i(),r(),f=(0,u.lazy)(async()=>{let{MonacoCodeEditor:e}=await t(async()=>{let{MonacoCodeEditor:e}=await import(`./monaco-DatpFsuQ.js`);return{MonacoCodeEditor:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])),n=await t(()=>import(`./engine-Bui354Uj.js`).then(e=>e.monaco,()=>void 0),__vite__mapDeps([19,1,20,21,22,23,24,25,26,27,2,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]));return{default:t=>(0,d.jsx)(e,{...t,monaco:n})}})})))()}var m;function h(){return(h=e((()=>{m=`import { lazy, Suspense, useState } from "react";
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