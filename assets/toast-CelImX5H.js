import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{Ht as i,R as a,n as o,x as s}from"./dist-BWNqkmth.js";import{c,n as l,s as u,t as d}from"./DocPage-DGOZswYH.js";function f(){return(0,p.jsx)(a,{position:`topRight`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,p.jsx)(r,{variant:`success`,onClick:()=>o.success(`Saved`),children:`Success`}),(0,p.jsx)(r,{variant:`error`,onClick:()=>o.error(`Request failed`),children:`Error`}),(0,p.jsx)(r,{variant:`warning`,onClick:()=>o.warning(`Unsaved changes`),children:`Warning`}),(0,p.jsx)(r,{variant:`secondary`,onClick:()=>o.info(`New version`),children:`Info`})]})})}var p;function m(){return(m=e((()=>{i(),p=n()})))()}function h(){let e=s();return(0,g.jsx)(r,{variant:`secondary`,onClick:()=>e.error(`Sync failed at ${new Date().toLocaleTimeString()}`,{id:`sync-error`}),children:`Fail again`})}var g;function _(){return(_=e((()=>{i(),g=n()})))()}function v(){return(0,y.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,y.jsx)(r,{variant:`secondary`,onClick:()=>o({status:`success`,title:`Book published`,description:`Readers can now find it in the catalog.`,duration:8e3}),children:`With description`}),(0,y.jsx)(r,{variant:`secondary`,onClick:()=>o.warning(`Stays until closed`,{duration:0}),children:`Persistent`}),(0,y.jsx)(r,{variant:`secondary`,onClick:()=>o.dismiss(),children:`Dismiss all`})]})}var y;function b(){return(b=e((()=>{i(),y=n()})))()}var x;function S(){return(S=e((()=>{x=`import { Button, ToastProvider, toast } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    // Mount one ToastProvider near the root of the app
    <ToastProvider position="topRight">
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Button variant="success" onClick={() => toast.success("Saved")}>
          Success
        </Button>
        <Button variant="error" onClick={() => toast.error("Request failed")}>
          Error
        </Button>
        <Button
          variant="warning"
          onClick={() => toast.warning("Unsaved changes")}
        >
          Warning
        </Button>
        <Button variant="secondary" onClick={() => toast.info("New version")}>
          Info
        </Button>
      </div>
    </ToastProvider>
  );
}
`})))()}var C;function w(){return(w=e((()=>{C=`import { Button, useToast } from "@minerva/lib-core";

export default function DedupeDemo() {
  const toast = useToast();
  return (
    <Button
      variant="secondary"
      onClick={() =>
        // Same id: replaces the visible toast and restarts its timer
        toast.error(\`Sync failed at \${new Date().toLocaleTimeString()}\`, {
          id: "sync-error",
        })
      }
    >
      Fail again
    </Button>
  );
}
`})))()}var T;function E(){return(E=e((()=>{T=`import { Button, toast } from "@minerva/lib-core";

export default function OptionsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            status: "success",
            title: "Book published",
            description: "Readers can now find it in the catalog.",
            duration: 8000,
          })
        }
      >
        With description
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast.warning("Stays until closed", { duration: 0 })}
      >
        Persistent
      </Button>
      <Button variant="secondary" onClick={() => toast.dismiss()}>
        Dismiss all
      </Button>
    </div>
  );
}
`})))()}var D,O,k;function A(){return(A=e((()=>{m(),_(),b(),S(),w(),E(),t(),l(),c(),D=n(),O=u(Object.assign({"./demos/basic.tsx":f,"./demos/dedupe.tsx":h,"./demos/options.tsx":v}),Object.assign({"./demos/basic.tsx":x,"./demos/dedupe.tsx":C,"./demos/options.tsx":T})),k=()=>(0,D.jsx)(d,{id:`toast`,demos:O})})))()}A();export{k as default};