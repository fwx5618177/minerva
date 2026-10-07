import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{n as a,t as o}from"./useI18n-DtQV8aM0.js";import{n as s,t as c}from"./Button-CG2pPO-r.js";import{O as l,T as u,b as d,w as ee}from"./icons-CtD3xdmP.js";import{n as f,t as p}from"./IconButton-CmtS4-FY.js";import{n as te,t as m}from"./Alert-CoAW8rVJ.js";import{c as h,n as g,s as _,t as v}from"./DocPage-DzKszXiH.js";var y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{y=`_upload_wpk5j_1`,b=`_label_wpk5j_11`,x=`_dropzone_wpk5j_15`,S=`_dragging_wpk5j_22`,C=`_error_wpk5j_27`,w=`_list_wpk5j_31`,T=`_item_wpk5j_39`,E=`_preview_wpk5j_48`,D=`_info_wpk5j_56`,O=`_status_wpk5j_64`,k=`_statusError_wpk5j_68`,A=`_actions_wpk5j_72`,j={upload:y,label:b,dropzone:x,dragging:S,error:C,list:w,item:T,preview:E,info:D,status:O,statusError:k,actions:A}})))()}function N(e,t){return t.split(`,`).some(t=>{let n=t.trim().toLowerCase();if(!n||n===`*`||n===`*/*`)return!0;if(n.startsWith(`.`))return e.name.toLowerCase().endsWith(n);let r=e.type.toLowerCase();return n.endsWith(`/*`)?r.startsWith(n.slice(0,-1)):r===n})}var P,F,I;function L(){return(L=e((()=>{i(),a(),s(),u(),p(),m(),M(),P=t(),F=n(),I=({label:e,value:t,onFilesSelected:n,onRemove:i,onRetry:a,accept:s=`*`,multiple:u=!1,replace:p=!1,maxCount:m=u?50:1,maxSize:h,loading:g=!1,disabled:_=!1,labels:v,className:y,ref:b,...x})=>{let{t:S}=o(),C=`${(0,P.useId)()}-label`,w=(0,P.useRef)(null),T=(0,P.useRef)(null),E=(0,P.useRef)(new Map),D=(0,P.useRef)(null);(0,P.useEffect)(()=>{let e=D.current;if(!e||t.some(t=>t.id===e.id))return;D.current=null;let n=document.activeElement;n&&n!==document.body||(e.nextId&&E.current.get(e.nextId)||T.current)?.focus()},[t]);let[O,k]=(0,P.useState)(``),[A,M]=(0,P.useState)(!1),I=p&&!u?0:t.length,L=_||g||I>=m,R=e=>{if(L||e.length===0)return;if(!u&&e.length>1||e.length+I>m){k(v?.tooMany?.(m)??S(`upload.tooMany`,{count:m}));return}let t=e.find(e=>!N(e,s));if(t){k(v?.invalidType?.(t.name)??S(`upload.invalidType`,{name:t.name}));return}let r=h===void 0?void 0:e.find(e=>e.size>h);if(r){k(v?.tooLarge?.(r.name)??S(`upload.tooLarge`,{name:r.name}));return}k(``),n(e)},z=e=>e.status===`uploading`?v?.uploading??S(`upload.uploading`):e.status===`error`?e.error||(v?.failed??S(`upload.failed`)):v?.done??S(`upload.done`);return(0,F.jsxs)(`div`,{...x,ref:b,className:r(j.upload,y),role:`group`,"aria-labelledby":C,"aria-busy":g,children:[(0,F.jsx)(`span`,{id:C,className:j.label,children:e}),(0,F.jsxs)(`div`,{className:r(j.dropzone,{[j.dragging]:A&&!L}),onDragOver:e=>{e.preventDefault(),L||M(!0)},onDragLeave:e=>{e.currentTarget.contains(e.relatedTarget)||M(!1)},onDrop:e=>{e.preventDefault(),M(!1),R(Array.from(e.dataTransfer.files))},children:[(0,F.jsx)(c,{type:`button`,variant:`outline`,disabled:L,loading:g,ref:T,startIcon:(0,F.jsx)(d,{"aria-hidden":`true`}),onClick:()=>w.current?.click(),children:v?.select??S(`upload.select`)}),(0,F.jsx)(`input`,{ref:w,type:`file`,hidden:!0,tabIndex:-1,"aria-label":e,disabled:L,accept:s,multiple:u,onChange:e=>{let t=Array.from(e.currentTarget.files??[]);e.currentTarget.value=``,R(t)}})]}),O&&(0,F.jsx)(te,{color:`danger`,animation:!1,className:j.error,children:O}),t.length>0&&(0,F.jsx)(`ul`,{className:j.list,children:t.map(e=>(0,F.jsxs)(`li`,{className:j.item,children:[e.previewUrl&&(0,F.jsx)(`img`,{src:e.previewUrl,alt:``,className:j.preview}),(0,F.jsxs)(`div`,{className:j.info,children:[(0,F.jsx)(`span`,{children:e.name}),(0,F.jsx)(`span`,{role:e.status===`error`?`alert`:`status`,className:r(j.status,{[j.statusError]:e.status===`error`}),children:z(e)})]}),(0,F.jsxs)(`div`,{className:j.actions,children:[e.status===`error`&&a&&(0,F.jsx)(f,{label:v?.retry?.(e.name)??S(`upload.retry`,{name:e.name}),size:`small`,shape:`square`,disabled:_||g,onClick:()=>a(e),icon:(0,F.jsx)(l,{"aria-hidden":`true`})}),i&&(0,F.jsx)(f,{label:v?.remove?.(e.name)??S(`upload.remove`,{name:e.name}),size:`small`,shape:`square`,disabled:_,ref:t=>{t?E.current.set(e.id,t):E.current.delete(e.id)},onClick:()=>{let n=t.indexOf(e),r=t[n+1]??t[n-1];D.current={id:e.id,nextId:r?.id},i(e)},icon:(0,F.jsx)(ee,{"aria-hidden":`true`})})]})]},e.id))})]})}})))()}function R(){let[e,t]=(0,z.useState)([]);return(0,B.jsx)(I,{label:`Cover image`,accept:`image/*`,maxSize:5242880,replace:!0,value:e,onFilesSelected:e=>{let n=e[0],r={id:crypto.randomUUID(),name:n.name,status:`uploading`,previewUrl:URL.createObjectURL(n)};t([r]),setTimeout(()=>t([{...r,status:`done`}]),1e3)},onRemove:()=>t([])})}var z,B;function V(){return(V=e((()=>{z=t(),L(),B=n()})))()}function ne(){let[e,t]=(0,H.useState)(W);return(0,U.jsx)(I,{label:`Attachments`,accept:`.pdf,.csv`,multiple:!0,maxCount:5,value:e,onFilesSelected:e=>t(t=>[...t,...e.map(e=>({id:crypto.randomUUID(),name:e.name,status:`done`}))]),onRetry:e=>t(t=>t.map(t=>t.id===e.id?{...t,status:`done`}:t)),onRemove:e=>t(t=>t.filter(t=>t.id!==e.id))})}var H,U,W;function G(){return(G=e((()=>{H=t(),L(),U=n(),W=[{id:`1`,name:`report.pdf`,status:`done`},{id:`2`,name:`data.csv`,status:`error`,error:`Network error`}]})))()}var K;function q(){return(q=e((()=>{K=`import { useState } from "react";
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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { useState } from "react";
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
`})))()}var X,Z,Q;function $(){return($=e((()=>{V(),G(),q(),Y(),t(),g(),h(),X=n(),Z=_(Object.assign({"./demos/basic.tsx":R,"./demos/multiple.tsx":ne}),Object.assign({"./demos/basic.tsx":K,"./demos/multiple.tsx":J})),Q=()=>(0,X.jsx)(v,{id:`upload`,demos:Z})})))()}$();export{Q as default};