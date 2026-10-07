import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{d as r,h as i,y as a}from"./dist-C3Cy1YK6.js";import{J as o}from"./registry-DXcVqgdp.js";import{t as s}from"./fi-43WfYxzV.js";import{i as c,r as l,t as u}from"./DocPage-DUnq_TLt.js";var d=e(t(),1),f=n();function p(){let e=(0,d.useRef)(null);return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,f.jsx)(i,{onClick:()=>{e.current=r.info({content:`Message opened at ${new Date().toLocaleTimeString()}`,duration:0})},children:`Open sticky message`}),(0,f.jsx)(i,{variant:`secondary`,onClick:()=>{e.current&&r.destroy(e.current)},children:`Close the last one`}),(0,f.jsx)(i,{variant:`error`,onClick:()=>r.destroy(),children:`Close all`})]})}function m(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,f.jsx)(i,{onClick:()=>r.info({content:`Shown for 8 seconds`,duration:8e3}),children:`Long duration`}),(0,f.jsx)(i,{variant:`secondary`,onClick:()=>r.warning({content:`Stays until you close it`,duration:0,showClose:!0,closeAriaLabel:`Dismiss`}),children:`Sticky with close button`}),(0,f.jsx)(i,{variant:`secondary`,onClick:()=>r.success({content:`Custom icon, no progress bar`,icon:(0,f.jsx)(s,{}),showProgress:!1,pauseOnHover:!1}),children:`Icon and no progress`}),(0,f.jsx)(i,{variant:`secondary`,onClick:()=>r.info({content:`Click me to dismiss`,duration:0,maxWidth:360,onClick:()=>r.destroy()}),children:`Clickable`}),(0,f.jsx)(i,{variant:`secondary`,onClick:()=>{r.config({maxCount:3});for(let e=1;e<=5;e++)r.info(`Burst message ${e}`);r.config()},children:`maxCount: 3`})]})}var h=[`topLeft`,`top`,`topRight`,`bottomLeft`,`bottom`,`bottomRight`];function g(){return(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:8},children:h.map(e=>(0,f.jsx)(i,{variant:`secondary`,size:`small`,onClick:()=>r.info({content:e,placement:e}),children:e},e))})}function _(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,f.jsx)(i,{variant:`success`,onClick:()=>r.success(`Changes saved`),children:`Success`}),(0,f.jsx)(i,{variant:`error`,onClick:()=>r.error(`Something went wrong`),children:`Error`}),(0,f.jsx)(i,{variant:`secondary`,onClick:()=>r.info(`New comment received`),children:`Info`}),(0,f.jsx)(i,{variant:`warning`,onClick:()=>r.warning(`Storage almost full`),children:`Warning`}),(0,f.jsx)(i,{variant:`secondary`,onClick:()=>r.loading(`Uploading…`),children:`Loading`})]})}function v(){return(0,f.jsx)(i,{onClick:()=>{let e=r.loading({content:`Saving…`,duration:0});setTimeout(()=>{r.update(e,{type:`success`,content:`Saved!`,duration:2e3})},1500)},children:`Save`})}function y(){let e=a(),[t,n]=(0,d.useState)(`idle`);return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,f.jsx)(i,{onClick:async()=>{n(`running`),await e.loading({content:`Step 1: preparing…`,duration:1e3}),await e.info({content:`Step 2: publishing…`,duration:1e3}),e.success(`Published!`),n(`done`)},disabled:t===`running`,children:`Run sequence`}),(0,f.jsxs)(`span`,{children:[`Status: `,t]})]})}var b=c(Object.assign({"./demos/destroy.tsx":p,"./demos/options.tsx":m,"./demos/placements.tsx":g,"./demos/types.tsx":_,"./demos/update.tsx":v,"./demos/use-message.tsx":y}),Object.assign({"./demos/destroy.tsx":`import { useRef } from "react";
import { Button, message } from "@minerva/lib-core";

export default function DestroyDemo() {
  const lastId = useRef<string | null>(null);

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button
        onClick={() => {
          lastId.current = message.info({
            content: \`Message opened at \${new Date().toLocaleTimeString()}\`,
            duration: 0,
          });
        }}
      >
        Open sticky message
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          if (lastId.current) message.destroy(lastId.current);
        }}
      >
        Close the last one
      </Button>
      <Button variant="error" onClick={() => message.destroy()}>
        Close all
      </Button>
    </div>
  );
}
`,"./demos/options.tsx":`import { Button, message } from "@minerva/lib-core";
import { FiBell } from "react-icons/fi";

export default function OptionsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button
        onClick={() =>
          message.info({ content: "Shown for 8 seconds", duration: 8000 })
        }
      >
        Long duration
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          message.warning({
            content: "Stays until you close it",
            duration: 0,
            showClose: true,
            closeAriaLabel: "Dismiss",
          })
        }
      >
        Sticky with close button
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          message.success({
            content: "Custom icon, no progress bar",
            icon: <FiBell />,
            showProgress: false,
            pauseOnHover: false,
          })
        }
      >
        Icon and no progress
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          message.info({
            content: "Click me to dismiss",
            duration: 0,
            maxWidth: 360,
            onClick: () => message.destroy(),
          })
        }
      >
        Clickable
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          // At most 3 messages at once: the oldest ones close first
          message.config({ maxCount: 3 });
          for (let i = 1; i <= 5; i++) message.info(\`Burst message \${i}\`);
          // Restore the defaults for the other demos
          message.config();
        }}
      >
        maxCount: 3
      </Button>
    </div>
  );
}
`,"./demos/placements.tsx":`import { Button, message, type MessagePlacement } from "@minerva/lib-core";

const placements: MessagePlacement[] = [
  "topLeft",
  "top",
  "topRight",
  "bottomLeft",
  "bottom",
  "bottomRight",
];

export default function PlacementsDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, max-content)",
        gap: 8,
      }}
    >
      {placements.map((placement) => (
        <Button
          key={placement}
          variant="secondary"
          size="small"
          onClick={() => message.info({ content: placement, placement })}
        >
          {placement}
        </Button>
      ))}
    </div>
  );
}
`,"./demos/types.tsx":`import { Button, message } from "@minerva/lib-core";

export default function TypesDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button
        variant="success"
        onClick={() => message.success("Changes saved")}
      >
        Success
      </Button>
      <Button
        variant="error"
        onClick={() => message.error("Something went wrong")}
      >
        Error
      </Button>
      <Button
        variant="secondary"
        onClick={() => message.info("New comment received")}
      >
        Info
      </Button>
      <Button
        variant="warning"
        onClick={() => message.warning("Storage almost full")}
      >
        Warning
      </Button>
      <Button variant="secondary" onClick={() => message.loading("Uploading…")}>
        Loading
      </Button>
    </div>
  );
}
`,"./demos/update.tsx":`import { Button, message } from "@minerva/lib-core";

export default function UpdateDemo() {
  const save = () => {
    const id = message.loading({ content: "Saving…", duration: 0 });
    setTimeout(() => {
      message.update(id, {
        type: "success",
        content: "Saved!",
        duration: 2000,
      });
    }, 1500);
  };

  return <Button onClick={save}>Save</Button>;
}
`,"./demos/use-message.tsx":`import { useState } from "react";
import { Button, useMessage } from "@minerva/lib-core";

export default function UseMessageDemo() {
  const msg = useMessage();
  const [status, setStatus] = useState("idle");

  const run = async () => {
    setStatus("running");
    await msg.loading({ content: "Step 1: preparing…", duration: 1000 });
    await msg.info({ content: "Step 2: publishing…", duration: 1000 });
    msg.success("Published!");
    setStatus("done");
  };

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Button onClick={run} disabled={status === "running"}>
        Run sequence
      </Button>
      <span>Status: {status}</span>
    </div>
  );
}
`})),x=()=>{let{t:e}=o(),t=[{method:`message.success / error / info / warning / loading`,signature:`(content: ReactNode | MessageOptions)`,returns:`string`,description:e(`docs.message.imperative.rows.show`)},{method:`message.update`,signature:`(id: string, props: Partial<MessageProps>)`,returns:`void`,description:e(`docs.message.imperative.rows.update`)},{method:`message.destroy`,signature:`(id?: string)`,returns:`void`,description:e(`docs.message.imperative.rows.destroy`)},{method:`message.config`,signature:`(options?: MessageConfig)`,returns:`void`,description:e(`docs.message.imperative.rows.config`)}],n=[{method:`useMessage`,signature:`()`,returns:`{ success, error, info, warning, loading, update, destroy }`,description:e(`docs.message.imperative.rows.hook`)},{method:`success / error / info / warning / loading`,signature:`(content: string | MessageOptions)`,returns:`MessagePromiseResult`,description:e(`docs.message.imperative.rows.hookShow`)},{method:`update / destroy`,signature:`message.update / message.destroy`,returns:`void`,description:e(`docs.message.imperative.rows.hookManage`)}],r=[{method:`MessageOptions`,signature:`Omit<MessageProps, "id"> & { id?: string }`,returns:`-`,description:e(`docs.message.imperative.rows.options`)},{method:`MessagePromiseResult`,signature:`Promise<void> & { messageId: string }`,returns:`-`,description:e(`docs.message.imperative.rows.promise`)},{method:`MessageConfig`,signature:`{ duration?: number; placement?: MessagePlacement; maxCount?: number }`,returns:`-`,description:e(`docs.message.imperative.rows.configType`)}],i=(t,n,r=!1)=>(0,f.jsx)(`div`,{className:l.tableWrapper,tabIndex:0,role:`region`,"aria-label":t,children:(0,f.jsxs)(`table`,{className:l.propsTable,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{scope:`col`,children:e(r?`docs.message.imperative.columns.type`:`docs.message.imperative.columns.method`)}),(0,f.jsx)(`th`,{scope:`col`,children:e(r?`docs.message.imperative.columns.definition`:`docs.message.imperative.columns.signature`)}),!r&&(0,f.jsx)(`th`,{scope:`col`,children:e(`docs.message.imperative.columns.returns`)}),(0,f.jsx)(`th`,{scope:`col`,children:e(`docs.message.imperative.columns.description`)})]})}),(0,f.jsx)(`tbody`,{children:n.map(e=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{scope:`row`,children:(0,f.jsx)(`code`,{className:l.propName,children:e.method})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{className:l.propType,children:e.signature})}),!r&&(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{className:l.propType,children:e.returns})}),(0,f.jsx)(`td`,{children:e.description})]},e.method))})]})});return(0,f.jsxs)(`section`,{className:l.section,"aria-labelledby":`imperative-api`,children:[(0,f.jsx)(`h2`,{id:`imperative-api`,children:e(`docs.message.imperative.title`)}),(0,f.jsx)(`div`,{className:l.prose,children:(0,f.jsx)(`p`,{children:e(`docs.message.imperative.intro`)})}),(0,f.jsxs)(`div`,{className:l.apiBlock,children:[(0,f.jsx)(`h3`,{className:l.apiTitle,children:(0,f.jsx)(`code`,{children:`message`})}),i(`message`,t)]}),(0,f.jsxs)(`div`,{className:l.apiBlock,children:[(0,f.jsx)(`h3`,{className:l.apiTitle,children:(0,f.jsx)(`code`,{children:`useMessage()`})}),i(`useMessage`,n)]}),(0,f.jsxs)(`div`,{className:l.apiBlock,children:[(0,f.jsx)(`h3`,{className:l.apiTitle,children:e(`docs.message.imperative.types`)}),i(e(`docs.message.imperative.types`),r,!0)]}),(0,f.jsxs)(`div`,{className:l.prose,children:[(0,f.jsx)(`h3`,{children:e(`docs.message.imperative.notes.title`)}),(0,f.jsxs)(`ul`,{children:[(0,f.jsx)(`li`,{children:e(`docs.message.imperative.notes.id`)}),(0,f.jsx)(`li`,{children:e(`docs.message.imperative.notes.onClose`)}),(0,f.jsx)(`li`,{children:e(`docs.message.imperative.notes.stacking`)}),(0,f.jsx)(`li`,{children:e(`docs.message.imperative.notes.promise`)}),(0,f.jsx)(`li`,{children:e(`docs.message.imperative.notes.a11y`)})]})]})]})},S=()=>(0,f.jsx)(u,{id:`message`,demos:b,children:(0,f.jsx)(x,{})});export{S as default};