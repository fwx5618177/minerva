import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{F as r,Rt as i}from"./dist-DkgrNLMS.js";import{c as a,n as o,s,t as c}from"./DocPage-Bnv84vTs.js";function l(){let[e,t]=(0,u.useState)([]);return(0,d.jsx)(r,{label:`Cover image`,accept:`image/*`,maxSize:5242880,replace:!0,value:e,onFilesSelected:e=>{let n=e[0],r={id:crypto.randomUUID(),name:n.name,status:`uploading`,previewUrl:URL.createObjectURL(n)};t([r]),setTimeout(()=>t([{...r,status:`done`}]),1e3)},onRemove:()=>t([])})}var u,d;function f(){return(f=e((()=>{u=t(),i(),d=n()})))()}function p(){let[e,t]=(0,m.useState)(g);return(0,h.jsx)(r,{label:`Attachments`,accept:`.pdf,.csv`,multiple:!0,maxCount:5,value:e,onFilesSelected:e=>t(t=>[...t,...e.map(e=>({id:crypto.randomUUID(),name:e.name,status:`done`}))]),onRetry:e=>t(t=>t.map(t=>t.id===e.id?{...t,status:`done`}:t)),onRemove:e=>t(t=>t.filter(t=>t.id!==e.id))})}var m,h,g;function _(){return(_=e((()=>{m=t(),i(),h=n(),g=[{id:`1`,name:`report.pdf`,status:`done`},{id:`2`,name:`data.csv`,status:`error`,error:`Network error`}]})))()}var v;function y(){return(y=e((()=>{v=`import { useState } from "react";
import { Upload, type UploadItem } from "@minerva/lib-core";

export default function BasicDemo() {
  const [items, setItems] = useState<UploadItem[]>([]);

  const upload = (files: File[]) => {
    const file = files[0];
    const item: UploadItem = {
      id: crypto.randomUUID(),
      name: file.name,
      status: "uploading",
      previewUrl: URL.createObjectURL(file),
    };
    setItems([item]);
    // simulate the transfer; a real app uploads the file here
    setTimeout(() => setItems([{ ...item, status: "done" }]), 1000);
  };

  return (
    <Upload
      label="Cover image"
      accept="image/*"
      maxSize={5 * 1024 * 1024}
      replace
      value={items}
      onFilesSelected={upload}
      onRemove={() => setItems([])}
    />
  );
}
`})))()}var b;function x(){return(x=e((()=>{b=`import { useState } from "react";
import { Upload, type UploadItem } from "@minerva/lib-core";

const initial: UploadItem[] = [
  { id: "1", name: "report.pdf", status: "done" },
  { id: "2", name: "data.csv", status: "error", error: "Network error" },
];

export default function MultipleDemo() {
  const [items, setItems] = useState(initial);

  return (
    <Upload
      label="Attachments"
      accept=".pdf,.csv"
      multiple
      maxCount={5}
      value={items}
      onFilesSelected={(files) =>
        setItems((prev) => [
          ...prev,
          ...files.map((file) => ({
            id: crypto.randomUUID(),
            name: file.name,
            status: "done" as const,
          })),
        ])
      }
      onRetry={(item) =>
        setItems((prev) =>
          prev.map((it) =>
            it.id === item.id ? { ...it, status: "done" } : it,
          ),
        )
      }
      onRemove={(item) =>
        setItems((prev) => prev.filter((it) => it.id !== item.id))
      }
    />
  );
}
`})))()}var S,C,w;function T(){return(T=e((()=>{f(),_(),y(),x(),t(),o(),a(),S=n(),C=s(Object.assign({"./demos/basic.tsx":l,"./demos/multiple.tsx":p}),Object.assign({"./demos/basic.tsx":v,"./demos/multiple.tsx":b})),w=()=>(0,S.jsx)(c,{id:`upload`,demos:C})})))()}T();export{w as default};