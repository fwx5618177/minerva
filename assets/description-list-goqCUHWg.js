import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{t as a}from"./stylingHooks-GjssfG7q.js";import{m as o,n as s,p as c,t as l}from"./DocPage-BUvZl8IZ.js";var u,d,f;function p(){return(p=e((()=>{u=`_descriptionList_1w3z9_1`,d=`_row_1w3z9_11`,f={descriptionList:u,row:d}})))()}var m,h;function g(){return(g=e((()=>{i(),p(),m=n(),h=({items:e,className:t,ref:n,...i})=>(0,m.jsx)(`dl`,{ref:n,className:r(f.descriptionList,t),...i,...a(`description-list`,`root`),children:e.map(e=>(0,m.jsxs)(`div`,{className:f.row,...a(`description-list`,`row`),children:[(0,m.jsx)(`dt`,{...a(`description-list`,`term`),children:e.label}),(0,m.jsx)(`dd`,{...a(`description-list`,`description`),children:e.value})]},e.key))})})))()}function _(){return(0,v.jsx)(h,{"aria-label":`Account`,items:[{key:`name`,label:`Display name`,value:`Lu Xun`},{key:`id`,label:`Account ID`,value:(0,v.jsx)(`code`,{children:`12345678-1234-4234-8234-123456789012`})},{key:`keys`,label:`Passkeys`,value:0}]})}var v;function y(){return(y=e((()=>{g(),v=n()})))()}var b;function x(){return(x=e((()=>{b=`import { DescriptionList } from "@minerva/lib-core";

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
`})))()}var S,C,w;function T(){return(T=e((()=>{y(),x(),t(),s(),o(),S=n(),C=c(Object.assign({"./demos/basic.tsx":_}),Object.assign({"./demos/basic.tsx":b})),w=()=>(0,S.jsx)(l,{id:`description-list`,demos:C})})))()}T();export{w as default};