import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{f as a,k as o}from"./dist-DvR9hbhy.js";import{n as s,t as c}from"./mergeRefs-CWbOvZcQ.js";import{n as l,t as u}from"./useControllableState-NzKJCN8h.js";import{t as d}from"./composeEventHandlers-LoCUxaMd.js";import{a as f,n as p}from"./direction-BdBdG3Jn.js";import{c as m,n as h,s as g,t as _}from"./DocPage-DzKszXiH.js";var v,y,b,x,S,ee,te,ne,re,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function ie(){return(ie=e((()=>{v=`_tabs_fa1ag_1`,y=`_vertical_fa1ag_8`,b=`_primary_fa1ag_12`,x=`_success_fa1ag_18`,S=`_warning_fa1ag_24`,ee=`_danger_fa1ag_30`,te=`_info_fa1ag_36`,ne=`_neutral_fa1ag_42`,re=`_list_fa1ag_48`,C=`_verticalList_fa1ag_61`,w=`_trigger_fa1ag_65`,T=`_lineList_fa1ag_110`,E=`_lineTrigger_fa1ag_114`,D=`_verticalTrigger_fa1ag_128`,O=`_enclosedList_fa1ag_140`,k=`_enclosedTrigger_fa1ag_144`,A=`_softList_fa1ag_154`,j=`_softTrigger_fa1ag_161`,M=`_pillsList_fa1ag_170`,N=`_pillsTrigger_fa1ag_175`,P=`_colored_fa1ag_194`,F=`_panel_fa1ag_231`,I={tabs:v,vertical:y,primary:b,success:x,warning:S,danger:ee,info:te,neutral:ne,list:re,verticalList:C,trigger:w,lineList:T,lineTrigger:E,verticalTrigger:D,enclosedList:O,enclosedTrigger:k,softList:A,softTrigger:j,pillsList:M,pillsTrigger:N,colored:P,panel:F}})))()}var L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{i(),c(),l(),p(),ie(),L=t(),o(),R=n(),z=(0,L.createContext)({baseId:`tabs`,value:void 0,select:()=>{},variant:`line`,orientation:`horizontal`,dir:void 0,activationMode:`automatic`}),B=(0,L.createContext)(void 0),V=(e,t)=>`${e}-tab-${t}`,H=(e,t)=>`${e}-panel-${t}`,U=e=>Array.from(e.querySelectorAll(`[role="tab"]`)).filter(t=>t.closest(`[role="tablist"]`)===e),W=({variant:e=`line`,color:t=`primary`,orientation:n=`horizontal`,activationMode:i=`automatic`,dir:a,value:o,defaultValue:s,onChange:c,className:l,children:d,ref:f,...p})=>{let m=(0,L.useId)(),[h,g]=u({value:o,defaultValue:s,onChange:c});return(0,R.jsx)(z.Provider,{value:{baseId:m,value:h,select:g,variant:e,orientation:n,dir:a,activationMode:i},children:(0,R.jsx)(`div`,{ref:f,dir:a,"data-orientation":n,className:r(I.tabs,I[t],n===`vertical`&&I.vertical,l),...p,children:d})})},G=({className:e,loop:t=!0,onKeyDown:n,ref:i,...o})=>{let{baseId:c,value:l,variant:u,orientation:p,dir:m}=(0,L.useContext)(z),h=(0,L.useRef)(null),g=s(h,i),[_,v]=(0,L.useState)();return(0,L.useLayoutEffect)(()=>{let e=h.current;if(!e)return;let t=()=>{let t=U(e),n=l===void 0?void 0:V(c,l),r=t.some(e=>e.id===n&&!e.disabled);v(r?void 0:t.find(e=>!e.disabled)?.id)};t();let n=new MutationObserver(t);return n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`disabled`]}),()=>n.disconnect()},[c,l]),(0,L.useEffect)(()=>{let e=h.current;if(!e)return;let t=()=>{let t=U(e).find(e=>e.getAttribute(`data-state`)===`active`);if(!t)return;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();p===`horizontal`?n.left<r.left?e.scrollLeft+=n.left-r.left:n.right>r.right&&(e.scrollLeft+=n.right-r.right):n.top<r.top?e.scrollTop+=n.top-r.top:n.bottom>r.bottom&&(e.scrollTop+=n.bottom-r.bottom)};t();let n=new MutationObserver(t);n.observe(e,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:[`data-state`]});let r=typeof ResizeObserver>`u`?void 0:new ResizeObserver(t);return r?.observe(e),()=>{n.disconnect(),r?.disconnect()}},[p]),(0,R.jsx)(B.Provider,{value:_,children:(0,R.jsx)(`div`,{ref:g,role:`tablist`,"aria-orientation":p,"data-orientation":p,className:r(I.list,I[`${u}List`],p===`vertical`&&I.verticalList,e),onKeyDown:d(n,e=>{let n=e.currentTarget;if(e.altKey||e.ctrlKey||e.metaKey)return;let r=U(n),i=r.indexOf(e.target);if(i===-1)return;let o=a({currentIndex:i,count:r.length,key:e.key,orientation:p,dir:f(m,n),loop:t,isDisabled:e=>r[e].disabled});o!==null&&(e.preventDefault(),r[o].focus())}),...o})})},K=({value:e,className:t,children:n,color:i,disabled:a=!1,onMouseDown:o,onKeyDown:s,onFocus:c,onClick:l,ref:u,...f})=>{let{baseId:p,value:m,select:h,variant:g,orientation:_,activationMode:v}=(0,L.useContext)(z),y=(0,L.useContext)(B),b=V(p,e),x=e===m,S=y===void 0?x:y===b;return(0,R.jsx)(`button`,{ref:u,type:`button`,role:`tab`,id:b,"aria-selected":x,"aria-controls":H(p,e),"data-state":x?`active`:`inactive`,"data-orientation":_,"data-disabled":a?``:void 0,disabled:a,tabIndex:S?0:-1,className:r(I.trigger,I[`${g}Trigger`],_===`vertical`&&I.verticalTrigger,i&&I[i],i&&I.colored,t),onMouseDown:d(o,t=>{a||(t.button===0&&!t.ctrlKey?h(e):t.preventDefault())}),onKeyDown:d(s,t=>{a||t.key!==`Enter`&&t.key!==` `||(t.preventDefault(),h(e))}),onFocus:d(c,()=>{!a&&!x&&v===`automatic`&&h(e)}),onClick:d(l,t=>{!a&&t.detail===0&&h(e)}),...f,children:n})},q=({value:e,className:t,forceMount:n=!1,children:i,ref:a,...o})=>{let{baseId:s,value:c,orientation:l}=(0,L.useContext)(z),u=e===c;return!u&&!n?null:(0,R.jsx)(`div`,{ref:a,role:`tabpanel`,id:H(s,e),"aria-labelledby":V(s,e),"data-state":u?`active`:`inactive`,"data-orientation":l,hidden:!u,tabIndex:0,className:r(I.panel,t),...o,children:i})}})))()}function ae(){return(0,Y.jsxs)(W,{defaultValue:`overview`,children:[(0,Y.jsxs)(G,{"aria-label":`Book sections`,children:[(0,Y.jsx)(K,{value:`overview`,children:`Overview`}),(0,Y.jsx)(K,{value:`reviews`,children:`Reviews`}),(0,Y.jsx)(K,{value:`similar`,disabled:!0,children:`Similar books`})]}),(0,Y.jsx)(q,{value:`overview`,children:`A desert planet, a noble family and a precious spice.`}),(0,Y.jsx)(q,{value:`reviews`,children:`“A masterpiece of world building.”`}),(0,Y.jsx)(q,{value:`similar`,children:`Coming soon.`})]})}var Y;function oe(){return(oe=e((()=>{J(),Y=n()})))()}function se(){let[e,t]=(0,ce.useState)(`en`);return(0,X.jsxs)(W,{variant:`pills`,color:`primary`,value:e,onChange:t,activationMode:`manual`,children:[(0,X.jsxs)(G,{"aria-label":`Languages`,children:[(0,X.jsx)(K,{value:`en`,children:`English`}),(0,X.jsx)(K,{value:`ja`,color:`success`,children:`Japanese`}),(0,X.jsx)(K,{value:`fr`,color:`warning`,children:`French`}),(0,X.jsx)(K,{value:`de`,color:`danger`,children:`German`})]}),(0,X.jsxs)(q,{value:e,children:[`Editing the “`,e,`” translation.`]})]})}var ce,X;function le(){return(le=e((()=>{ce=t(),J(),X=n()})))()}function ue(){return(0,Z.jsx)(`div`,{style:{display:`grid`,gap:24},children:de.map(e=>(0,Z.jsx)(W,{variant:e,defaultValue:`hot`,children:(0,Z.jsxs)(G,{"aria-label":`${e} tabs`,children:[(0,Z.jsx)(K,{value:`hot`,children:`Hot`}),(0,Z.jsx)(K,{value:`new`,children:`New`}),(0,Z.jsx)(K,{value:`completed`,children:`Completed`})]})},e))})}var Z,de;function fe(){return(fe=e((()=>{J(),Z=n(),de=[`line`,`enclosed`,`soft`,`pills`]})))()}function pe(){return(0,Q.jsxs)(W,{defaultValue:`profile`,orientation:`vertical`,children:[(0,Q.jsxs)(G,{"aria-label":`Settings`,children:[(0,Q.jsx)(K,{value:`profile`,children:`Profile`}),(0,Q.jsx)(K,{value:`notifications`,children:`Notifications`}),(0,Q.jsx)(K,{value:`security`,children:`Security`})]}),(0,Q.jsx)(q,{value:`profile`,style:{paddingInline:16},children:`Your name, avatar and bio.`}),(0,Q.jsx)(q,{value:`notifications`,style:{paddingInline:16},children:`Email and push notifications.`}),(0,Q.jsx)(q,{value:`security`,style:{paddingInline:16},children:`Password and two-factor authentication.`})]})}var Q;function me(){return(me=e((()=>{J(),Q=n()})))()}var he;function ge(){return(ge=e((()=>{he=`import { Tab, TabList, TabPanel, Tabs } from "@minerva/lib-core";

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
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`import { useState } from "react";
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
`})))()}var ye;function $(){return($=e((()=>{ye=`import { Tab, TabList, Tabs, type TabsVariant } from "@minerva/lib-core";

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
`})))()}var be;function xe(){return(xe=e((()=>{be=`import { Tab, TabList, TabPanel, Tabs } from "@minerva/lib-core";

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
`})))()}var Se,Ce,we;function Te(){return(Te=e((()=>{oe(),le(),fe(),me(),ge(),ve(),$(),xe(),t(),h(),m(),Se=n(),Ce=g(Object.assign({"./demos/basic.tsx":ae,"./demos/colors.tsx":se,"./demos/variants.tsx":ue,"./demos/vertical.tsx":pe}),Object.assign({"./demos/basic.tsx":he,"./demos/colors.tsx":_e,"./demos/variants.tsx":ye,"./demos/vertical.tsx":be})),we=()=>(0,Se.jsx)(_,{id:`tabs`,demos:Ce})})))()}Te();export{we as default};