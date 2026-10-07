import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{K as i,M as a,O as o,R as s,Rt as c,o as l,p as u,y as d,yn as f}from"./dist-DkgrNLMS.js";import{c as p,n as m,s as h,t as g}from"./DocPage-Bnv84vTs.js";function _(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r,{onClick:()=>t(!0),children:`Delete record`}),(0,y.jsxs)(l,{open:e,onOpenChange:t,title:`Delete this record?`,description:`The record and its history are removed permanently.`,size:`small`,children:[(0,y.jsx)(i,{children:`Other team members lose access immediately.`}),(0,y.jsxs)(f,{children:[(0,y.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>t(!1),children:`Cancel`}),(0,y.jsx)(r,{color:`danger`,onClick:()=>t(!1),children:`Delete`})]})]})]})}var v,y;function b(){return(b=e((()=>{v=t(),c(),y=n()})))()}function x(){return(0,S.jsxs)(a,{children:[(0,S.jsx)(s,{asChild:!0,children:(0,S.jsx)(r,{color:`neutral`,variant:`outline`,children:`Open compound modal`})}),(0,S.jsxs)(d,{size:`large`,description:`Built from the individual parts.`,children:[(0,S.jsx)(o,{children:`Workspace settings`}),(0,S.jsx)(i,{children:`Compose header, body and footer freely.`}),(0,S.jsx)(f,{children:(0,S.jsx)(u,{asChild:!0,children:(0,S.jsx)(r,{children:`Done`})})})]})]})}var S;function C(){return(C=e((()=>{c(),S=n()})))()}function w(){let[e,t]=(0,T.useState)(!1),[n,a]=(0,T.useState)(`Quarterly report`);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(r,{onClick:()=>t(!0),children:[`Rename “`,n,`”`]}),(0,E.jsx)(l,{open:e,onOpenChange:t,title:`Rename document`,children:(0,E.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),a(new FormData(e.currentTarget).get(`name`)),t(!1)},children:[(0,E.jsx)(i,{children:(0,E.jsxs)(`label`,{children:[`Name `,(0,E.jsx)(`input`,{name:`name`,defaultValue:n})]})}),(0,E.jsx)(f,{children:(0,E.jsx)(r,{type:`submit`,children:`Save`})})]})})]})}var T,E;function D(){return(D=e((()=>{T=t(),c(),E=n()})))()}function O(){return(0,k.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:A.map(e=>(0,k.jsx)(l,{size:e,title:`Size: ${e}`,trigger:(0,k.jsx)(r,{color:`neutral`,variant:`outline`,children:e}),children:(0,k.jsx)(i,{children:`On narrow screens every size becomes a bottom sheet.`})},e))})}var k,A;function j(){return(j=e((()=>{c(),k=n(),A=[`small`,`medium`,`large`,`xlarge`,`full`]})))()}function M(){return(0,N.jsx)(l,{trigger:(0,N.jsx)(r,{color:`neutral`,variant:`outline`,children:`Show details`}),title:`Release notes`,children:(0,N.jsx)(i,{children:`Version 2.0 adds dialogs, drawers and a command palette. Close with the × button, Escape or a click on the backdrop.`})})}var N;function P(){return(P=e((()=>{c(),N=n()})))()}var F;function I(){return(I=e((()=>{F=`import { useState } from "react";
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
          <Button
            color="neutral"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button color="danger" onClick={() => setOpen(false)}>
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
        <Button color="neutral" variant="outline">
          Open compound modal
        </Button>
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
          trigger={
            <Button color="neutral" variant="outline">
              {size}
            </Button>
          }
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
      trigger={
        <Button color="neutral" variant="outline">
          Show details
        </Button>
      }
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