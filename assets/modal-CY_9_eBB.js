import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{m as r,n as i,p as a,t as o}from"./DocPage-9P1WMt4D.js";import{n as s,t as c}from"./Button-DN5Do18G.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _}from"./Modal-C2FFsYIq.js";function v(){let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{onClick:()=>t(!0),children:`Delete record`}),(0,b.jsxs)(p,{open:e,onOpenChange:t,title:`Delete this record?`,description:`The record and its history are removed permanently.`,size:`small`,children:[(0,b.jsx)(u,{children:`Other team members lose access immediately.`}),(0,b.jsxs)(f,{children:[(0,b.jsx)(s,{color:`neutral`,variant:`outline`,onClick:()=>t(!1),children:`Cancel`}),(0,b.jsx)(s,{color:`danger`,onClick:()=>t(!1),children:`Delete`})]})]})]})}var y,b;function x(){return(x=e((()=>{y=t(),c(),l(),b=n()})))()}function S(){return(0,C.jsxs)(g,{children:[(0,C.jsx)(m,{asChild:!0,children:(0,C.jsx)(s,{color:`neutral`,variant:`outline`,children:`Open compound modal`})}),(0,C.jsxs)(h,{size:`large`,description:`Built from the individual parts.`,children:[(0,C.jsx)(_,{children:`Workspace settings`}),(0,C.jsx)(u,{children:`Compose header, body and footer freely.`}),(0,C.jsx)(f,{children:(0,C.jsx)(d,{asChild:!0,children:(0,C.jsx)(s,{children:`Done`})})})]})]})}var C;function w(){return(w=e((()=>{c(),l(),C=n()})))()}function T(){let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(`Quarterly report`);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(s,{onClick:()=>t(!0),children:[`Rename “`,n,`”`]}),(0,D.jsx)(p,{open:e,onOpenChange:t,title:`Rename document`,children:(0,D.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),r(new FormData(e.currentTarget).get(`name`)),t(!1)},children:[(0,D.jsx)(u,{children:(0,D.jsxs)(`label`,{children:[`Name `,(0,D.jsx)(`input`,{name:`name`,defaultValue:n})]})}),(0,D.jsx)(f,{children:(0,D.jsx)(s,{type:`submit`,children:`Save`})})]})})]})}var E,D;function O(){return(O=e((()=>{E=t(),c(),l(),D=n()})))()}function k(){return(0,A.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:j.map(e=>(0,A.jsx)(p,{size:e,title:`Size: ${e}`,trigger:(0,A.jsx)(s,{color:`neutral`,variant:`outline`,children:e}),children:(0,A.jsx)(u,{children:`On narrow screens every size becomes a bottom sheet.`})},e))})}var A,j;function M(){return(M=e((()=>{c(),l(),A=n(),j=[`small`,`medium`,`large`,`xlarge`,`full`]})))()}function N(){return(0,P.jsx)(p,{trigger:(0,P.jsx)(s,{color:`neutral`,variant:`outline`,children:`Show details`}),title:`Release notes`,children:(0,P.jsx)(u,{children:`Version 2.0 adds dialogs, drawers and a command palette. Close with the × button, Escape or a click on the backdrop.`})})}var P;function F(){return(F=e((()=>{c(),l(),P=n()})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
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
`})))()}var K,q,J;function Y(){return(Y=e((()=>{x(),w(),O(),M(),F(),L(),z(),V(),U(),G(),t(),i(),r(),K=n(),q=a(Object.assign({"./demos/basic.tsx":v,"./demos/compound.tsx":S,"./demos/form.tsx":T,"./demos/sizes.tsx":k,"./demos/uncontrolled.tsx":N}),Object.assign({"./demos/basic.tsx":I,"./demos/compound.tsx":R,"./demos/form.tsx":B,"./demos/sizes.tsx":H,"./demos/uncontrolled.tsx":W})),J=()=>(0,K.jsx)(o,{id:`modal`,demos:q})})))()}Y();export{J as default};