import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{c as r,d as i,f as a,h as o,m as s,n as c,p as l,s as u,t as d}from"./DocPage-HgWiqH91.js";function f(){return(0,p.jsxs)(a,{defaultValue:`overview`,children:[(0,p.jsxs)(i,{"aria-label":`Book sections`,children:[(0,p.jsx)(o,{value:`overview`,children:`Overview`}),(0,p.jsx)(o,{value:`reviews`,children:`Reviews`}),(0,p.jsx)(o,{value:`similar`,disabled:!0,children:`Similar books`})]}),(0,p.jsx)(l,{value:`overview`,children:`A desert planet, a noble family and a precious spice.`}),(0,p.jsx)(l,{value:`reviews`,children:`“A masterpiece of world building.”`}),(0,p.jsx)(l,{value:`similar`,children:`Coming soon.`})]})}var p;function m(){return(m=e((()=>{s(),p=n()})))()}function h(){let[e,t]=(0,g.useState)(`en`);return(0,_.jsxs)(a,{variant:`pills`,color:`primary`,value:e,onChange:t,activationMode:`manual`,children:[(0,_.jsxs)(i,{"aria-label":`Languages`,children:[(0,_.jsx)(o,{value:`en`,children:`English`}),(0,_.jsx)(o,{value:`ja`,color:`success`,children:`Japanese`}),(0,_.jsx)(o,{value:`fr`,color:`warning`,children:`French`}),(0,_.jsx)(o,{value:`de`,color:`danger`,children:`German`})]}),(0,_.jsxs)(l,{value:e,children:[`Editing the “`,e,`” translation.`]})]})}var g,_;function v(){return(v=e((()=>{g=t(),s(),_=n()})))()}function y(){return(0,b.jsx)(`div`,{style:{display:`grid`,gap:24},children:x.map(e=>(0,b.jsx)(a,{variant:e,defaultValue:`hot`,children:(0,b.jsxs)(i,{"aria-label":`${e} tabs`,children:[(0,b.jsx)(o,{value:`hot`,children:`Hot`}),(0,b.jsx)(o,{value:`new`,children:`New`}),(0,b.jsx)(o,{value:`completed`,children:`Completed`})]})},e))})}var b,x;function S(){return(S=e((()=>{s(),b=n(),x=[`line`,`enclosed`,`soft`,`pills`]})))()}function C(){return(0,w.jsxs)(a,{defaultValue:`profile`,orientation:`vertical`,children:[(0,w.jsxs)(i,{"aria-label":`Settings`,children:[(0,w.jsx)(o,{value:`profile`,children:`Profile`}),(0,w.jsx)(o,{value:`notifications`,children:`Notifications`}),(0,w.jsx)(o,{value:`security`,children:`Security`})]}),(0,w.jsx)(l,{value:`profile`,style:{paddingInline:16},children:`Your name, avatar and bio.`}),(0,w.jsx)(l,{value:`notifications`,style:{paddingInline:16},children:`Email and push notifications.`}),(0,w.jsx)(l,{value:`security`,style:{paddingInline:16},children:`Password and two-factor authentication.`})]})}var w;function T(){return(T=e((()=>{s(),w=n()})))()}var E;function D(){return(D=e((()=>{E=`import { Tab, TabList, TabPanel, Tabs } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabList aria-label="Book sections">
        <Tab value="overview">Overview</Tab>
        <Tab value="reviews">Reviews</Tab>
        <Tab value="similar" disabled>
          Similar books
        </Tab>
      </TabList>
      <TabPanel value="overview">
        A desert planet, a noble family and a precious spice.
      </TabPanel>
      <TabPanel value="reviews">“A masterpiece of world building.”</TabPanel>
      <TabPanel value="similar">Coming soon.</TabPanel>
    </Tabs>
  );
}
`})))()}var O;function k(){return(k=e((()=>{O=`import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "@minerva/lib-core";

export default function ColorsDemo() {
  const [language, setLanguage] = useState("en");
  return (
    <Tabs
      variant="pills"
      color="primary"
      value={language}
      onChange={setLanguage}
      activationMode="manual"
    >
      <TabList aria-label="Languages">
        <Tab value="en">English</Tab>
        <Tab value="ja" color="success">
          Japanese
        </Tab>
        <Tab value="fr" color="warning">
          French
        </Tab>
        <Tab value="de" color="danger">
          German
        </Tab>
      </TabList>
      <TabPanel value={language}>
        Editing the “{language}” translation.
      </TabPanel>
    </Tabs>
  );
}
`})))()}var A;function j(){return(j=e((()=>{A=`import { Tab, TabList, Tabs, type TabsVariant } from "@minerva/lib-core";

const variants: TabsVariant[] = ["line", "enclosed", "soft", "pills"];

export default function VariantsDemo() {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      {variants.map((variant) => (
        <Tabs key={variant} variant={variant} defaultValue="hot">
          <TabList aria-label={\`\${variant} tabs\`}>
            <Tab value="hot">Hot</Tab>
            <Tab value="new">New</Tab>
            <Tab value="completed">Completed</Tab>
          </TabList>
        </Tabs>
      ))}
    </div>
  );
}
`})))()}var M;function N(){return(N=e((()=>{M=`import { Tab, TabList, TabPanel, Tabs } from "@minerva/lib-core";

export default function VerticalDemo() {
  return (
    <Tabs defaultValue="profile" orientation="vertical">
      <TabList aria-label="Settings">
        <Tab value="profile">Profile</Tab>
        <Tab value="notifications">Notifications</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" style={{ paddingInline: 16 }}>
        Your name, avatar and bio.
      </TabPanel>
      <TabPanel value="notifications" style={{ paddingInline: 16 }}>
        Email and push notifications.
      </TabPanel>
      <TabPanel value="security" style={{ paddingInline: 16 }}>
        Password and two-factor authentication.
      </TabPanel>
    </Tabs>
  );
}
`})))()}var P,F,I;function L(){return(L=e((()=>{m(),v(),S(),T(),D(),k(),j(),N(),t(),c(),r(),P=n(),F=u(Object.assign({"./demos/basic.tsx":f,"./demos/colors.tsx":h,"./demos/variants.tsx":y,"./demos/vertical.tsx":C}),Object.assign({"./demos/basic.tsx":E,"./demos/colors.tsx":O,"./demos/variants.tsx":A,"./demos/vertical.tsx":M})),I=()=>(0,P.jsx)(d,{id:`tabs`,demos:F})})))()}L();export{I as default};