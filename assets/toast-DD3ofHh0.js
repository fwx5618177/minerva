import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{C as i,D as a,Rt as o,W as s,_ as c,b as l}from"./dist-DkgrNLMS.js";import{a as u,t as d}from"./fi-BANx-nyf.js";import{c as f,n as p,s as m,t as h}from"./DocPage-Bnv84vTs.js";function g(){return(0,_.jsxs)(c,{gap:2,wrap:!0,children:[(0,_.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>s.info(`Conversation archived`,{duration:8e3,action:{label:`Undo`,onClick:()=>s.success(`Conversation restored`)}}),children:`With action`}),(0,_.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>s.info(`Reminder set for 9:00`,{icon:(0,_.jsx)(d,{}),closable:!1}),children:`Custom icon, no close button`}),(0,_.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>s.success(`Exported`,{onClose:()=>s.info(`Export toast closed`)}),children:`onClose`})]})}var _;function v(){return(v=e((()=>{o(),u(),_=n()})))()}function y(){let[e,t]=(0,b.useState)(`topRight`);return(0,x.jsx)(l,{position:e,max:3,children:(0,x.jsxs)(a,{gap:4,align:`start`,children:[(0,x.jsxs)(c,{gap:2,wrap:!0,children:[(0,x.jsx)(r,{color:`success`,onClick:()=>s.success(`Saved`),children:`Success`}),(0,x.jsx)(r,{color:`danger`,onClick:()=>s.danger(`Request failed`),children:`Danger`}),(0,x.jsx)(r,{color:`warning`,onClick:()=>s.warning(`Unsaved changes`),children:`Warning`}),(0,x.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>s.info(`New version`),children:`Info`})]}),(0,x.jsx)(c,{attached:!0,wrap:!0,"aria-label":`Position`,children:S.map(n=>(0,x.jsx)(r,{size:`small`,color:n===e?`primary`:`neutral`,variant:n===e?`solid`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))})]})})}var b,x,S;function C(){return(C=e((()=>{b=t(),o(),x=n(),S=[`topLeft`,`topCenter`,`topRight`,`bottomLeft`,`bottomCenter`,`bottomRight`]})))()}function w(){return(0,T.jsx)(c,{gap:2,wrap:!0,children:E.map(e=>(0,T.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>s({color:e,title:`A ${e} toast`,description:`color sets the accent, the icon and the role.`}),children:e},e))})}var T,E;function D(){return(D=e((()=>{o(),T=n(),E=[`info`,`success`,`warning`,`danger`]})))()}function O(){let e=i();return(0,k.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>e.danger(`Sync failed at ${new Date().toLocaleTimeString()}`,{id:`sync-error`}),children:`Fail again`})}var k;function A(){return(A=e((()=>{o(),k=n()})))()}function j(){return(0,M.jsxs)(c,{gap:2,wrap:!0,children:[(0,M.jsx)(r,{onClick:()=>{let e=s.loading(`Saving…`);setTimeout(()=>{s.update(e,{color:`success`,loading:!1,title:`Saved!`})},1500)},children:`Save (update)`}),(0,M.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>s.promise(new Promise((e,t)=>setTimeout(()=>Math.random()>.3?e(3):t(Error()),1500)),{loading:`Uploading files…`,success:e=>`${e} files uploaded`,error:`Upload failed, try again`}).catch(()=>void 0),children:`Upload (promise)`}),(0,M.jsx)(r,{color:`danger`,variant:`outline`,onClick:()=>{let e=s({color:`danger`,loading:!0,title:`Deleting…`});setTimeout(()=>{s.update(e,{loading:!1,title:`Project deleted`})},1500)},children:`Delete (loading option)`})]})}var M;function N(){return(N=e((()=>{o(),M=n()})))()}function P(){return(0,F.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,F.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>s({color:`success`,title:`Book published`,description:`Readers can now find it in the catalog.`,duration:8e3}),children:`With description`}),(0,F.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>s.warning(`Stays until closed`,{duration:0}),children:`Persistent`}),(0,F.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>s.dismiss(),children:`Dismiss all`})]})}var F;function I(){return(I=e((()=>{o(),F=n()})))()}var L;function R(){return(R=e((()=>{L=`import { Button, HStack, toast } from "@minerva/lib-core";
import { FiBell } from "react-icons/fi";

export default function ActionDemo() {
  return (
    <HStack gap={2} wrap>
      <Button
        color="neutral"
        variant="outline"
        onClick={() =>
          toast.info("Conversation archived", {
            duration: 8000,
            action: {
              label: "Undo",
              onClick: () => toast.success("Conversation restored"),
            },
          })
        }
      >
        With action
      </Button>
      <Button
        color="neutral"
        variant="outline"
        onClick={() =>
          toast.info("Reminder set for 9:00", {
            icon: <FiBell />,
            closable: false,
          })
        }
      >
        Custom icon, no close button
      </Button>
      <Button
        color="neutral"
        variant="outline"
        onClick={() =>
          toast.success("Exported", {
            onClose: () => toast.info("Export toast closed"),
          })
        }
      >
        onClose
      </Button>
    </HStack>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { useState } from "react";
import {
  Button,
  HStack,
  ToastProvider,
  VStack,
  toast,
  type ToastPosition,
} from "@minerva/lib-core";

const positions: ToastPosition[] = [
  "topLeft",
  "topCenter",
  "topRight",
  "bottomLeft",
  "bottomCenter",
  "bottomRight",
];

export default function BasicDemo() {
  const [position, setPosition] = useState<ToastPosition>("topRight");
  return (
    // Mount one ToastProvider near the root of the app; max={3} closes the
    // oldest toast when a fourth one appears
    <ToastProvider position={position} max={3}>
      <VStack gap={4} align="start">
        <HStack gap={2} wrap>
          <Button color="success" onClick={() => toast.success("Saved")}>
            Success
          </Button>
          <Button color="danger" onClick={() => toast.danger("Request failed")}>
            Danger
          </Button>
          <Button
            color="warning"
            onClick={() => toast.warning("Unsaved changes")}
          >
            Warning
          </Button>
          <Button
            color="neutral"
            variant="outline"
            onClick={() => toast.info("New version")}
          >
            Info
          </Button>
        </HStack>
        <HStack attached wrap aria-label="Position">
          {positions.map((name) => (
            <Button
              key={name}
              size="small"
              color={name === position ? "primary" : "neutral"}
              variant={name === position ? "solid" : "outline"}
              aria-pressed={name === position}
              onClick={() => setPosition(name)}
            >
              {name}
            </Button>
          ))}
        </HStack>
      </VStack>
    </ToastProvider>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { Button, HStack, toast } from "@minerva/lib-core";

const colors = ["info", "success", "warning", "danger"] as const;

export default function ColorsDemo() {
  return (
    <HStack gap={2} wrap>
      {colors.map((color) => (
        <Button
          key={color}
          color="neutral"
          variant="outline"
          onClick={() =>
            toast({
              color,
              title: \`A \${color} toast\`,
              description: "color sets the accent, the icon and the role.",
            })
          }
        >
          {color}
        </Button>
      ))}
    </HStack>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { Button, useToast } from "@minerva/lib-core";

export default function DedupeDemo() {
  const toast = useToast();
  return (
    <Button
      color="neutral"
      variant="outline"
      onClick={() =>
        // Same id: replaces the visible toast and restarts its timer
        toast.danger(\`Sync failed at \${new Date().toLocaleTimeString()}\`, {
          id: "sync-error",
        })
      }
    >
      Fail again
    </Button>
  );
}
`})))()}var G;function K(){return(K=e((()=>{G=`import { Button, HStack, toast } from "@minerva/lib-core";

export default function LoadingDemo() {
  const save = () => {
    // Loading toasts stay open until they are updated or dismissed
    const id = toast.loading("Saving…");
    setTimeout(() => {
      // loading: false swaps the spinner for the icon and starts the timer
      toast.update(id, { color: "success", loading: false, title: "Saved!" });
    }, 1500);
  };

  const remove = () => {
    // Any color can be loading; it stays a polite status while pending
    const id = toast({ color: "danger", loading: true, title: "Deleting…" });
    setTimeout(() => {
      toast.update(id, { loading: false, title: "Project deleted" });
    }, 1500);
  };

  const upload = () =>
    toast
      .promise(
        new Promise<number>((resolve, reject) =>
          setTimeout(
            () => (Math.random() > 0.3 ? resolve(3) : reject(new Error())),
            1500,
          ),
        ),
        {
          loading: "Uploading files…",
          success: (count) => \`\${count} files uploaded\`,
          error: "Upload failed, try again",
        },
      )
      .catch(() => undefined);

  return (
    <HStack gap={2} wrap>
      <Button onClick={save}>Save (update)</Button>
      <Button color="neutral" variant="outline" onClick={upload}>
        Upload (promise)
      </Button>
      <Button color="danger" variant="outline" onClick={remove}>
        Delete (loading option)
      </Button>
    </HStack>
  );
}
`})))()}var q;function J(){return(J=e((()=>{q=`import { Button, toast } from "@minerva/lib-core";

export default function OptionsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button
        color="neutral"
        variant="outline"
        onClick={() =>
          toast({
            color: "success",
            title: "Book published",
            description: "Readers can now find it in the catalog.",
            duration: 8000,
          })
        }
      >
        With description
      </Button>
      <Button
        color="neutral"
        variant="outline"
        onClick={() => toast.warning("Stays until closed", { duration: 0 })}
      >
        Persistent
      </Button>
      <Button color="neutral" variant="outline" onClick={() => toast.dismiss()}>
        Dismiss all
      </Button>
    </div>
  );
}
`})))()}var Y,X,Z;function Q(){return(Q=e((()=>{v(),C(),D(),A(),N(),I(),R(),B(),H(),W(),K(),J(),t(),p(),f(),Y=n(),X=m(Object.assign({"./demos/action.tsx":g,"./demos/basic.tsx":y,"./demos/colors.tsx":w,"./demos/dedupe.tsx":O,"./demos/loading.tsx":j,"./demos/options.tsx":P}),Object.assign({"./demos/action.tsx":L,"./demos/basic.tsx":z,"./demos/colors.tsx":V,"./demos/dedupe.tsx":U,"./demos/loading.tsx":G,"./demos/options.tsx":q})),Z=()=>(0,Y.jsx)(h,{id:`toast`,demos:X})})))()}Q();export{Z as default};