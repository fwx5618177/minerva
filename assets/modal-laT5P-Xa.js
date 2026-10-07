import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{s as r}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{$t as i,Bt as a,Ct as o,Vt as s,Zt as c,in as l,ln as u,qt as d,yt as f}from"./dist-dg6ajl7p.js";import{c as p,n as m,s as h,t as g}from"./DocPage-Kqmidh_0.js";function _(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r,{onClick:()=>t(!0),children:`Delete record`}),(0,y.jsxs)(d,{open:e,onOpenChange:t,title:`Delete this record?`,description:`The record and its history are removed permanently.`,size:`small`,children:[(0,y.jsx)(u,{children:`Other team members lose access immediately.`}),(0,y.jsxs)(o,{children:[(0,y.jsx)(r,{variant:`secondary`,onClick:()=>t(!1),children:`Cancel`}),(0,y.jsx)(r,{variant:`error`,onClick:()=>t(!1),children:`Delete`})]})]})]})}var v,y;function b(){return(b=e((()=>{v=t(),s(),y=n()})))()}function x(){return(0,S.jsxs)(c,{children:[(0,S.jsx)(l,{asChild:!0,children:(0,S.jsx)(r,{variant:`secondary`,children:`Open compound modal`})}),(0,S.jsxs)(f,{size:`large`,description:`Built from the individual parts.`,children:[(0,S.jsx)(i,{children:`Workspace settings`}),(0,S.jsx)(u,{children:`Compose header, body and footer freely.`}),(0,S.jsx)(o,{children:(0,S.jsx)(a,{asChild:!0,children:(0,S.jsx)(r,{children:`Done`})})})]})]})}var S;function C(){return(C=e((()=>{s(),S=n()})))()}function w(){let[e,t]=(0,T.useState)(!1),[n,i]=(0,T.useState)(`Quarterly report`);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(r,{onClick:()=>t(!0),children:[`Rename “`,n,`”`]}),(0,E.jsx)(d,{open:e,onOpenChange:t,title:`Rename document`,children:(0,E.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),i(new FormData(e.currentTarget).get(`name`)),t(!1)},children:[(0,E.jsx)(u,{children:(0,E.jsxs)(`label`,{children:[`Name `,(0,E.jsx)(`input`,{name:`name`,defaultValue:n})]})}),(0,E.jsx)(o,{children:(0,E.jsx)(r,{type:`submit`,children:`Save`})})]})})]})}var T,E;function D(){return(D=e((()=>{T=t(),s(),E=n()})))()}function O(){return(0,k.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:A.map(e=>(0,k.jsx)(d,{size:e,title:`Size: ${e}`,trigger:(0,k.jsx)(r,{variant:`secondary`,children:e}),children:(0,k.jsx)(u,{children:`On narrow screens every size becomes a bottom sheet.`})},e))})}var k,A;function j(){return(j=e((()=>{s(),k=n(),A=[`small`,`medium`,`large`,`xlarge`,`full`]})))()}function M(){return(0,N.jsx)(d,{trigger:(0,N.jsx)(r,{variant:`secondary`,children:`Show details`}),title:`Release notes`,children:(0,N.jsx)(u,{children:`Version 2.0 adds dialogs, drawers and a command palette. Close with the × button, Escape or a click on the backdrop.`})})}var N;function P(){return(P=e((()=>{s(),N=n()})))()}var F;function I(){return(I=e((()=>{F=`import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "@minerva/lib-core";

export default function BasicDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete record</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Delete this record?"
        description="The record and its history are removed permanently."
        size="small"
      >
        <ModalBody>Other team members lose access immediately.</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="error" onClick={() => setOpen(false)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import {
  Button,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalRoot,
  ModalTrigger,
} from "@minerva/lib-core";

export default function CompoundDemo() {
  return (
    <ModalRoot>
      <ModalTrigger asChild>
        <Button variant="secondary">Open compound modal</Button>
      </ModalTrigger>
      <ModalContent size="large" description="Built from the individual parts.">
        <ModalHeader>Workspace settings</ModalHeader>
        <ModalBody>Compose header, body and footer freely.</ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button>Done</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </ModalRoot>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "@minerva/lib-core";

export default function FormDemo() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Quarterly report");
  return (
    <>
      <Button onClick={() => setOpen(true)}>Rename “{name}”</Button>
      <Modal open={open} onOpenChange={setOpen} title="Rename document">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setName(new FormData(event.currentTarget).get("name") as string);
            setOpen(false);
          }}
        >
          <ModalBody>
            <label>
              Name <input name="name" defaultValue={name} />
            </label>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">Save</Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { Button, Modal, ModalBody, type ModalSize } from "@minerva/lib-core";

const SIZES: ModalSize[] = ["small", "medium", "large", "xlarge", "full"];

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {SIZES.map((size) => (
        <Modal
          key={size}
          size={size}
          title={\`Size: \${size}\`}
          trigger={<Button variant="secondary">{size}</Button>}
        >
          <ModalBody>
            On narrow screens every size becomes a bottom sheet.
          </ModalBody>
        </Modal>
      ))}
    </div>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { Button, Modal, ModalBody } from "@minerva/lib-core";

export default function UncontrolledDemo() {
  return (
    <Modal
      trigger={<Button variant="secondary">Show details</Button>}
      title="Release notes"
    >
      <ModalBody>
        Version 2.0 adds dialogs, drawers and a command palette. Close with the
        × button, Escape or a click on the backdrop.
      </ModalBody>
    </Modal>
  );
}
`})))()}var G,K,q;function J(){return(J=e((()=>{b(),C(),D(),j(),P(),I(),R(),B(),H(),W(),t(),m(),p(),G=n(),K=h(Object.assign({"./demos/basic.tsx":_,"./demos/compound.tsx":x,"./demos/form.tsx":w,"./demos/sizes.tsx":O,"./demos/uncontrolled.tsx":M}),Object.assign({"./demos/basic.tsx":F,"./demos/compound.tsx":L,"./demos/form.tsx":z,"./demos/sizes.tsx":V,"./demos/uncontrolled.tsx":U})),q=()=>(0,G.jsx)(g,{id:`modal`,demos:K})})))()}J();export{q as default};