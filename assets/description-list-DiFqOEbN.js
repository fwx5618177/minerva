import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,c as i,k as a,n as o,s,t as c}from"./DocPage-BvqFnACE.js";var l,u,d;function f(){return(f=e((()=>{l=`_descriptionList_1w3z9_1`,u=`_row_1w3z9_11`,d={descriptionList:l,row:u}})))()}var p,m;function h(){return(h=e((()=>{r(),f(),p=n(),m=({items:e,className:t,ref:n,...r})=>(0,p.jsx)(`dl`,{ref:n,className:a(d.descriptionList,t),...r,children:e.map(e=>(0,p.jsxs)(`div`,{className:d.row,children:[(0,p.jsx)(`dt`,{children:e.label}),(0,p.jsx)(`dd`,{children:e.value})]},e.key))})})))()}function g(){return(0,_.jsx)(m,{"aria-label":`Account`,items:[{key:`name`,label:`Display name`,value:`Lu Xun`},{key:`id`,label:`Account ID`,value:(0,_.jsx)(`code`,{children:`12345678-1234-4234-8234-123456789012`})},{key:`keys`,label:`Passkeys`,value:0}]})}var _;function v(){return(v=e((()=>{h(),_=n()})))()}var y;function b(){return(b=e((()=>{y=`import { DescriptionList } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <DescriptionList
      aria-label="Account"
      items={[
        { key: "name", label: "Display name", value: "Lu Xun" },
        {
          key: "id",
          label: "Account ID",
          value: <code>12345678-1234-4234-8234-123456789012</code>,
        },
        { key: "keys", label: "Passkeys", value: 0 },
      ]}
    />
  );
}
`})))()}var x,S,C;function w(){return(w=e((()=>{v(),b(),t(),o(),i(),x=n(),S=s(Object.assign({"./demos/basic.tsx":g}),Object.assign({"./demos/basic.tsx":y})),C=()=>(0,x.jsx)(c,{id:`description-list`,demos:S})})))()}w();export{C as default};