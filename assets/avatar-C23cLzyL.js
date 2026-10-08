import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-aZSMfLKR.js";import{X as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{n as o,t as s}from"./useI18n-Brv-VDVY.js";import{n as c,t as l}from"./Avatar-mXUpfgfi.js";import{t as u}from"./stylingHooks-GjssfG7q.js";import{m as d,n as f,p,t as m}from"./DocPage-BUvZl8IZ.js";import{w as h,x as g}from"./lu-D-zbR8l9.js";var _,v,y,b;function x(){return(x=t((()=>{_=`_avatarGroup_86jqp_1`,v=`_avatarGroupItem_86jqp_10`,y=`_count_86jqp_30`,b={avatarGroup:_,avatarGroupItem:v,count:y}})))()}var S,C,w;function T(){return(T=t((()=>{a(),o(),x(),S=e(n(),1),C=r(),w=S.memo(({count:e,max:t,className:n=``,children:r,"aria-label":a,ref:o,...c})=>{let{t:l}=s(),d=S.Children.toArray(r),f=t===void 0?d:d.slice(0,t),p=(e??0)+d.length-f.length;return(0,C.jsxs)(`div`,{ref:o,role:`group`,className:i(b.avatarGroup,n),"aria-label":a??(p>0?l(`avatar.groupWithMore`,{count:p}):l(`avatar.group`)),...c,...u(`avatar-group`,`root`),children:[f.map((e,t)=>(0,C.jsx)(`div`,{className:b.avatarGroupItem,...u(`avatar-group`,`item`),children:e},S.isValidElement(e)?e.key??t:t)),p>0?(0,C.jsxs)(`div`,{className:b.count,"aria-hidden":`true`,...u(`avatar-group`,`count`),children:[`+`,p]}):null]})})})))()}function E(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(c,{src:`https://randomuser.me/api/portraits/women/44.jpg`,name:`Emma Wilson`}),(0,D.jsx)(c,{name:`Liam Chen`}),(0,D.jsx)(c,{src:`data:image/png;base64,broken`,name:`Noah Park`}),(0,D.jsx)(c,{})]})}var D;function O(){return(O=t((()=>{l(),D=r()})))()}function ee(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(c,{name:`Ada Lovelace`,size:`xsmall`}),(0,k.jsx)(c,{name:`张三`,size:40}),(0,k.jsx)(c,{src:`data:image/png;base64,broken`,name:`Grace Hopper`}),(0,k.jsx)(c,{"aria-label":`Guest`,children:(0,k.jsx)(g,{"aria-hidden":!0})}),(0,k.jsx)(c,{name:`VIP`,fallback:`★`,shape:`rounded`,size:`xlarge`}),(0,k.jsxs)(w,{max:2,children:[(0,k.jsx)(c,{name:`Olivia`,stacked:!0}),(0,k.jsx)(c,{name:`James`,stacked:!0}),(0,k.jsx)(c,{name:`Sophia`,stacked:!0}),(0,k.jsx)(c,{name:`Lucas`,stacked:!0})]})]})}var k;function A(){return(A=t((()=>{l(),T(),h(),k=r()})))()}function j(){return(0,M.jsx)(w,{count:5,children:N.map(e=>(0,M.jsx)(c,{name:e.name,src:e.src,stacked:!0},e.name))})}var M,N;function P(){return(P=t((()=>{l(),T(),M=r(),N=[{name:`Olivia`,src:`https://randomuser.me/api/portraits/women/68.jpg`},{name:`James`,src:`https://randomuser.me/api/portraits/men/75.jpg`},{name:`Sophia`},{name:`Lucas`}]})))()}function te(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(c,{shape:`circle`,name:`Circle`}),(0,F.jsx)(c,{shape:`rounded`,name:`Rounded`}),(0,F.jsx)(c,{shape:`square`,name:`Square`}),(0,F.jsx)(c,{shape:`rounded`,src:`https://randomuser.me/api/portraits/men/32.jpg`,name:`Noah Martin`})]})}var F;function I(){return(I=t((()=>{l(),F=r()})))()}function L(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(c,{size:`small`,name:`Small`}),(0,R.jsx)(c,{size:`medium`,name:`Medium`}),(0,R.jsx)(c,{size:`large`,name:`Large`})]})}var R;function z(){return(z=t((()=>{l(),R=r()})))()}var B;function V(){return(V=t((()=>{B=`import { Avatar } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <>
      <Avatar
        src="https://randomuser.me/api/portraits/women/44.jpg"
        name="Emma Wilson"
      />
      <Avatar name="Liam Chen" />
      {/* The image cannot be decoded, so the initial is shown instead */}
      <Avatar src="data:image/png;base64,broken" name="Noah Park" />
      <Avatar />
    </>
  );
}
`})))()}var H;function U(){return(U=t((()=>{H=`import { Avatar, AvatarGroup } from "@minerva/lib-core";
import { LuUser } from "react-icons/lu";

export default function FallbackDemo() {
  return (
    <>
      <Avatar name="Ada Lovelace" size="xsmall" />
      <Avatar name="张三" size={40} />
      <Avatar src="data:image/png;base64,broken" name="Grace Hopper" />
      <Avatar aria-label="Guest">
        <LuUser aria-hidden />
      </Avatar>
      <Avatar name="VIP" fallback="★" shape="rounded" size="xlarge" />
      <AvatarGroup max={2}>
        <Avatar name="Olivia" stacked />
        <Avatar name="James" stacked />
        <Avatar name="Sophia" stacked />
        <Avatar name="Lucas" stacked />
      </AvatarGroup>
    </>
  );
}
`})))()}var W;function G(){return(G=t((()=>{W=`import { Avatar, AvatarGroup } from "@minerva/lib-core";

const people = [
  { name: "Olivia", src: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "James", src: "https://randomuser.me/api/portraits/men/75.jpg" },
  { name: "Sophia" },
  { name: "Lucas" },
];

export default function GroupDemo() {
  return (
    <AvatarGroup count={5}>
      {people.map((person) => (
        <Avatar key={person.name} name={person.name} src={person.src} stacked />
      ))}
    </AvatarGroup>
  );
}
`})))()}var K;function q(){return(q=t((()=>{K=`import { Avatar } from "@minerva/lib-core";

export default function ShapesDemo() {
  return (
    <>
      <Avatar shape="circle" name="Circle" />
      <Avatar shape="rounded" name="Rounded" />
      <Avatar shape="square" name="Square" />
      <Avatar
        shape="rounded"
        src="https://randomuser.me/api/portraits/men/32.jpg"
        name="Noah Martin"
      />
    </>
  );
}
`})))()}var J;function Y(){return(Y=t((()=>{J=`import { Avatar } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <Avatar size="small" name="Small" />
      <Avatar size="medium" name="Medium" />
      <Avatar size="large" name="Large" />
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=t((()=>{O(),A(),P(),I(),z(),V(),U(),G(),q(),Y(),n(),f(),d(),X=r(),Z=p(Object.assign({"./demos/basic.tsx":E,"./demos/fallback.tsx":ee,"./demos/group.tsx":j,"./demos/shapes.tsx":te,"./demos/sizes.tsx":L}),Object.assign({"./demos/basic.tsx":B,"./demos/fallback.tsx":H,"./demos/group.tsx":W,"./demos/shapes.tsx":K,"./demos/sizes.tsx":J})),Q=()=>(0,X.jsx)(m,{id:`avatar`,demos:Z})})))()}$();export{Q as default};