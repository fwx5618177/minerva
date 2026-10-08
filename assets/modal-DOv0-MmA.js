import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{n as r,t as i}from"./Button-BfJfx3BZ.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./Modal-D1Yp-WWO.js";import{m,n as h,p as g,t as _}from"./DocPage-44Ak-YGP.js";function v(){let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{onClick:()=>t(!0),children:`Delete record`}),(0,b.jsxs)(l,{open:e,onOpenChange:t,title:`Delete this record?`,description:`The record and its history are removed permanently.`,size:`small`,children:[(0,b.jsx)(o,{children:`Other team members lose access immediately.`}),(0,b.jsxs)(c,{children:[(0,b.jsx)(r,{color:`neutral`,variant:`outline`,onClick:()=>t(!1),children:`Cancel`}),(0,b.jsx)(r,{color:`danger`,onClick:()=>t(!1),children:`Delete`})]})]})]})}var y,b;function x(){return(x=e((()=>{y=t(),i(),a(),b=n()})))()}function S(){return(0,C.jsxs)(f,{children:[(0,C.jsx)(u,{asChild:!0,children:(0,C.jsx)(r,{color:`neutral`,variant:`outline`,children:`Open compound modal`})}),(0,C.jsxs)(d,{size:`large`,description:`Built from the individual parts.`,children:[(0,C.jsx)(p,{children:`Workspace settings`}),(0,C.jsx)(o,{children:`Compose header, body and footer freely.`}),(0,C.jsx)(c,{children:(0,C.jsx)(s,{asChild:!0,children:(0,C.jsx)(r,{children:`Done`})})})]})]})}var C;function w(){return(w=e((()=>{i(),a(),C=n()})))()}function T(){let[e,t]=(0,E.useState)(!1),[n,i]=(0,E.useState)(`Quarterly report`);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(r,{onClick:()=>t(!0),children:[`Rename “`,n,`”`]}),(0,D.jsx)(l,{open:e,onOpenChange:t,title:`Rename document`,children:(0,D.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),i(new FormData(e.currentTarget).get(`name`)),t(!1)},children:[(0,D.jsx)(o,{children:(0,D.jsxs)(`label`,{children:[`Name `,(0,D.jsx)(`input`,{name:`name`,defaultValue:n})]})}),(0,D.jsx)(c,{children:(0,D.jsx)(r,{type:`submit`,children:`Save`})})]})})]})}var E,D;function O(){return(O=e((()=>{E=t(),i(),a(),D=n()})))()}function k(){return(0,A.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:j.map(e=>(0,A.jsx)(l,{size:e,title:`Size: ${e}`,trigger:(0,A.jsx)(r,{color:`neutral`,variant:`outline`,children:e}),children:(0,A.jsx)(o,{children:`On narrow screens every size becomes a bottom sheet.`})},e))})}var A,j;function M(){return(M=e((()=>{i(),a(),A=n(),j=[`small`,`medium`,`large`,`xlarge`,`full`]})))()}function N(){return(0,P.jsx)(l,{trigger:(0,P.jsx)(r,{color:`neutral`,variant:`outline`,children:`Show details`}),title:`Release notes`,children:(0,P.jsx)(o,{children:`Version 2.0 adds dialogs, drawers and a command palette. Close with the × button, Escape or a click on the backdrop.`})})}var P;function F(){return(F=e((()=>{i(),a(),P=n()})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
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
`})))()}var R;function z(){return(z=e((()=>{R=`import {
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
`})))()}var B;function V(){return(V=e((()=>{B=`import { useState } from "react";
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
`})))()}var H;function U(){return(U=e((()=>{H=`import { Button, Modal, ModalBody, type ModalSize } from "@minerva/lib-core";

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
`})))()}var W;function G(){return(G=e((()=>{W=`import { Button, Modal, ModalBody } from "@minerva/lib-core";

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
`})))()}var K,q,J;function Y(){return(Y=e((()=>{x(),w(),O(),M(),F(),L(),z(),V(),U(),G(),t(),h(),m(),K=n(),q=g(Object.assign({"./demos/basic.tsx":v,"./demos/compound.tsx":S,"./demos/form.tsx":T,"./demos/sizes.tsx":k,"./demos/uncontrolled.tsx":N}),Object.assign({"./demos/basic.tsx":I,"./demos/compound.tsx":R,"./demos/form.tsx":B,"./demos/sizes.tsx":H,"./demos/uncontrolled.tsx":W})),J=()=>(0,K.jsx)(_,{id:`modal`,demos:q})})))()}Y();export{J as default};