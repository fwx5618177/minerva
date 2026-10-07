import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{i,r as a}from"./iconBase-DWTUFqgC.js";import{Ht as o,k as s,l as c}from"./dist-BWNqkmth.js";import{a as ee,t as l}from"./fi-TxiQ2PKn.js";import{a as u,c as d,n as f,o as p,s as m,t as h}from"./DocPage-DGOZswYH.js";function g(){let e=(0,_.useRef)(null);return(0,v.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,v.jsx)(r,{onClick:()=>{e.current=c.info({content:`Message opened at ${new Date().toLocaleTimeString()}`,duration:0})},children:`Open sticky message`}),(0,v.jsx)(r,{variant:`secondary`,onClick:()=>{e.current&&c.destroy(e.current)},children:`Close the last one`}),(0,v.jsx)(r,{variant:`error`,onClick:()=>c.destroy(),children:`Close all`})]})}var _,v;function y(){return(y=e((()=>{_=t(),o(),v=n()})))()}function b(){return(0,x.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,x.jsx)(r,{onClick:()=>c.info({content:`Shown for 8 seconds`,duration:8e3}),children:`Long duration`}),(0,x.jsx)(r,{variant:`secondary`,onClick:()=>c.warning({content:`Stays until you close it`,duration:0,showClose:!0,closeAriaLabel:`Dismiss`}),children:`Sticky with close button`}),(0,x.jsx)(r,{variant:`secondary`,onClick:()=>c.success({content:`Custom icon, no progress bar`,icon:(0,x.jsx)(l,{}),showProgress:!1,pauseOnHover:!1}),children:`Icon and no progress`}),(0,x.jsx)(r,{variant:`secondary`,onClick:()=>c.info({content:`Click me to dismiss`,duration:0,maxWidth:360,onClick:()=>c.destroy()}),children:`Clickable`}),(0,x.jsx)(r,{variant:`secondary`,onClick:()=>{c.config({maxCount:3});for(let e=1;e<=5;e++)c.info(`Burst message ${e}`);c.config()},children:`maxCount: 3`})]})}var x;function S(){return(S=e((()=>{o(),ee(),x=n()})))()}function C(){return(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:8},children:T.map(e=>(0,w.jsx)(r,{variant:`secondary`,size:`small`,onClick:()=>c.info({content:e,placement:e}),children:e},e))})}var w,T;function E(){return(E=e((()=>{o(),w=n(),T=[`topLeft`,`top`,`topRight`,`bottomLeft`,`bottom`,`bottomRight`]})))()}function D(){return(0,O.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,O.jsx)(r,{variant:`success`,onClick:()=>c.success(`Changes saved`),children:`Success`}),(0,O.jsx)(r,{variant:`error`,onClick:()=>c.error(`Something went wrong`),children:`Error`}),(0,O.jsx)(r,{variant:`secondary`,onClick:()=>c.info(`New comment received`),children:`Info`}),(0,O.jsx)(r,{variant:`warning`,onClick:()=>c.warning(`Storage almost full`),children:`Warning`}),(0,O.jsx)(r,{variant:`secondary`,onClick:()=>c.loading(`Uploading…`),children:`Loading`})]})}var O;function k(){return(k=e((()=>{o(),O=n()})))()}function A(){return(0,j.jsx)(r,{onClick:()=>{let e=c.loading({content:`Saving…`,duration:0});setTimeout(()=>{c.update(e,{type:`success`,content:`Saved!`,duration:2e3})},1500)},children:`Save`})}var j;function M(){return(M=e((()=>{o(),j=n()})))()}function N(){let e=s(),[t,n]=(0,P.useState)(`idle`);return(0,F.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,F.jsx)(r,{onClick:async()=>{n(`running`),await e.loading({content:`Step 1: preparing…`,duration:1e3}),await e.info({content:`Step 2: publishing…`,duration:1e3}),e.success(`Published!`),n(`done`)},disabled:t===`running`,children:`Run sequence`}),(0,F.jsxs)(`span`,{children:[`Status: `,t]})]})}var P,F;function I(){return(I=e((()=>{P=t(),o(),F=n()})))()}var L;function R(){return(R=e((()=>{L=`import { useRef } from "react";
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
`})))()}var z;function B(){return(B=e((()=>{z=`import { Button, message } from "@minerva/lib-core";
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
`})))()}var V;function H(){return(H=e((()=>{V=`import { Button, message, type MessagePlacement } from "@minerva/lib-core";

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
`})))()}var U;function W(){return(W=e((()=>{U=`import { Button, message } from "@minerva/lib-core";

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
`})))()}var G;function K(){return(K=e((()=>{G=`import { Button, message } from "@minerva/lib-core";

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
`})))()}var q;function J(){return(J=e((()=>{q=`import { useState } from "react";
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
`})))()}var Y,X,Z,Q;function $(){return($=e((()=>{y(),S(),E(),k(),M(),I(),R(),B(),H(),W(),K(),J(),t(),a(),f(),p(),d(),Y=n(),X=m(Object.assign({"./demos/destroy.tsx":g,"./demos/options.tsx":b,"./demos/placements.tsx":C,"./demos/types.tsx":D,"./demos/update.tsx":A,"./demos/use-message.tsx":N}),Object.assign({"./demos/destroy.tsx":L,"./demos/options.tsx":z,"./demos/placements.tsx":V,"./demos/types.tsx":U,"./demos/update.tsx":G,"./demos/use-message.tsx":q})),Z=()=>{let{t:e}=i(),t=[{method:`message.success / error / info / warning / loading`,signature:`(content: ReactNode | MessageOptions)`,returns:`string`,description:e(`docs.message.imperative.rows.show`)},{method:`message.update`,signature:`(id: string, props: Partial<MessageProps>)`,returns:`void`,description:e(`docs.message.imperative.rows.update`)},{method:`message.destroy`,signature:`(id?: string)`,returns:`void`,description:e(`docs.message.imperative.rows.destroy`)},{method:`message.config`,signature:`(options?: MessageConfig)`,returns:`void`,description:e(`docs.message.imperative.rows.config`)}],n=[{method:`useMessage`,signature:`()`,returns:`{ success, error, info, warning, loading, update, destroy }`,description:e(`docs.message.imperative.rows.hook`)},{method:`success / error / info / warning / loading`,signature:`(content: string | MessageOptions)`,returns:`MessagePromiseResult`,description:e(`docs.message.imperative.rows.hookShow`)},{method:`update / destroy`,signature:`message.update / message.destroy`,returns:`void`,description:e(`docs.message.imperative.rows.hookManage`)}],r=[{method:`MessageOptions`,signature:`Omit<MessageProps, "id"> & { id?: string }`,returns:`-`,description:e(`docs.message.imperative.rows.options`)},{method:`MessagePromiseResult`,signature:`Promise<void> & { messageId: string }`,returns:`-`,description:e(`docs.message.imperative.rows.promise`)},{method:`MessageConfig`,signature:`{ duration?: number; placement?: MessagePlacement; maxCount?: number }`,returns:`-`,description:e(`docs.message.imperative.rows.configType`)}],a=(t,n,r=!1)=>(0,Y.jsx)(`div`,{className:u.tableWrapper,tabIndex:0,role:`region`,"aria-label":t,children:(0,Y.jsxs)(`table`,{className:u.propsTable,children:[(0,Y.jsx)(`thead`,{children:(0,Y.jsxs)(`tr`,{children:[(0,Y.jsx)(`th`,{scope:`col`,children:e(r?`docs.message.imperative.columns.type`:`docs.message.imperative.columns.method`)}),(0,Y.jsx)(`th`,{scope:`col`,children:e(r?`docs.message.imperative.columns.definition`:`docs.message.imperative.columns.signature`)}),!r&&(0,Y.jsx)(`th`,{scope:`col`,children:e(`docs.message.imperative.columns.returns`)}),(0,Y.jsx)(`th`,{scope:`col`,children:e(`docs.message.imperative.columns.description`)})]})}),(0,Y.jsx)(`tbody`,{children:n.map(e=>(0,Y.jsxs)(`tr`,{children:[(0,Y.jsx)(`th`,{scope:`row`,children:(0,Y.jsx)(`code`,{className:u.propName,children:e.method})}),(0,Y.jsx)(`td`,{children:(0,Y.jsx)(`code`,{className:u.propType,children:e.signature})}),!r&&(0,Y.jsx)(`td`,{children:(0,Y.jsx)(`code`,{className:u.propType,children:e.returns})}),(0,Y.jsx)(`td`,{children:e.description})]},e.method))})]})});return(0,Y.jsxs)(`section`,{className:u.section,"aria-labelledby":`imperative-api`,children:[(0,Y.jsx)(`h2`,{id:`imperative-api`,children:e(`docs.message.imperative.title`)}),(0,Y.jsx)(`div`,{className:u.prose,children:(0,Y.jsx)(`p`,{children:e(`docs.message.imperative.intro`)})}),(0,Y.jsxs)(`div`,{className:u.apiBlock,children:[(0,Y.jsx)(`h3`,{className:u.apiTitle,children:(0,Y.jsx)(`code`,{children:`message`})}),a(`message`,t)]}),(0,Y.jsxs)(`div`,{className:u.apiBlock,children:[(0,Y.jsx)(`h3`,{className:u.apiTitle,children:(0,Y.jsx)(`code`,{children:`useMessage()`})}),a(`useMessage`,n)]}),(0,Y.jsxs)(`div`,{className:u.apiBlock,children:[(0,Y.jsx)(`h3`,{className:u.apiTitle,children:e(`docs.message.imperative.types`)}),a(e(`docs.message.imperative.types`),r,!0)]}),(0,Y.jsxs)(`div`,{className:u.prose,children:[(0,Y.jsx)(`h3`,{children:e(`docs.message.imperative.notes.title`)}),(0,Y.jsxs)(`ul`,{children:[(0,Y.jsx)(`li`,{children:e(`docs.message.imperative.notes.id`)}),(0,Y.jsx)(`li`,{children:e(`docs.message.imperative.notes.onClose`)}),(0,Y.jsx)(`li`,{children:e(`docs.message.imperative.notes.stacking`)}),(0,Y.jsx)(`li`,{children:e(`docs.message.imperative.notes.promise`)}),(0,Y.jsx)(`li`,{children:e(`docs.message.imperative.notes.a11y`)})]})]})]})},Q=()=>(0,Y.jsx)(h,{id:`message`,demos:X,children:(0,Y.jsx)(Z,{})})})))()}$();export{Q as default};