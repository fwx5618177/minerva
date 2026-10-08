import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-DuLeTlZP.js";import{o as i,vt as a}from"./minerva-web-components-ByJsjP0z.js";import{m as o,n as s,p as c,t as l}from"./DocPage-BIGX2Gcv.js";import{n as u,t as d}from"./useI18n-Dk-DwhiM.js";import{n as f,t as p}from"./Avatar-ohxwbCWB.js";import{t as m}from"./stylingHooks-GjssfG7q.js";import{S as h,T as g}from"./lu-DYIKOxW-.js";var _,v,y,b;function x(){return(x=t((()=>{_=`_avatarGroup_86jqp_1`,v=`_avatarGroupItem_86jqp_10`,y=`_count_86jqp_30`,b={avatarGroup:_,avatarGroupItem:v,count:y}})))()}var S,C,w;function T(){return(T=t((()=>{a(),u(),x(),S=e(n(),1),C=r(),w=S.memo(({count:e,max:t,className:n=``,children:r,"aria-label":a,ref:o,...s})=>{let{t:c}=d(),l=S.Children.toArray(r),u=t===void 0?l:l.slice(0,t),f=(e??0)+l.length-u.length;return(0,C.jsxs)(`div`,{ref:o,role:`group`,className:i(b.avatarGroup,n),"aria-label":a??(f>0?c(`avatar.groupWithMore`,{count:f}):c(`avatar.group`)),...s,...m(`avatar-group`,`root`),children:[u.map((e,t)=>(0,C.jsx)(`div`,{className:b.avatarGroupItem,...m(`avatar-group`,`item`),children:e},S.isValidElement(e)?e.key??t:t)),f>0?(0,C.jsxs)(`div`,{className:b.count,"aria-hidden":`true`,...m(`avatar-group`,`count`),children:[`+`,f]}):null]})})})))()}function ee(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{src:`https://randomuser.me/api/portraits/women/44.jpg`,name:`Emma Wilson`}),(0,E.jsx)(f,{name:`Liam Chen`}),(0,E.jsx)(f,{src:`data:image/png;base64,broken`,name:`Noah Park`}),(0,E.jsx)(f,{})]})}var E;function D(){return(D=t((()=>{p(),E=r()})))()}function O(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f,{name:`Ada Lovelace`,size:`xsmall`}),(0,k.jsx)(f,{name:`张三`,size:40}),(0,k.jsx)(f,{src:`data:image/png;base64,broken`,name:`Grace Hopper`}),(0,k.jsx)(f,{"aria-label":`Guest`,children:(0,k.jsx)(h,{"aria-hidden":!0})}),(0,k.jsx)(f,{name:`VIP`,fallback:`★`,shape:`rounded`,size:`xlarge`}),(0,k.jsxs)(w,{max:2,children:[(0,k.jsx)(f,{name:`Olivia`,stacked:!0}),(0,k.jsx)(f,{name:`James`,stacked:!0}),(0,k.jsx)(f,{name:`Sophia`,stacked:!0}),(0,k.jsx)(f,{name:`Lucas`,stacked:!0})]})]})}var k;function A(){return(A=t((()=>{p(),T(),g(),k=r()})))()}function j(){return(0,M.jsx)(w,{count:5,children:N.map(e=>(0,M.jsx)(f,{name:e.name,src:e.src,stacked:!0},e.name))})}var M,N;function P(){return(P=t((()=>{p(),T(),M=r(),N=[{name:`Olivia`,src:`https://randomuser.me/api/portraits/women/68.jpg`},{name:`James`,src:`https://randomuser.me/api/portraits/men/75.jpg`},{name:`Sophia`},{name:`Lucas`}]})))()}function F(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f,{shape:`circle`,name:`Circle`}),(0,I.jsx)(f,{shape:`rounded`,name:`Rounded`}),(0,I.jsx)(f,{shape:`square`,name:`Square`}),(0,I.jsx)(f,{shape:`rounded`,src:`https://randomuser.me/api/portraits/men/32.jpg`,name:`Noah Martin`})]})}var I;function L(){return(L=t((()=>{p(),I=r()})))()}function te(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(f,{size:`small`,name:`Small`}),(0,R.jsx)(f,{size:`medium`,name:`Medium`}),(0,R.jsx)(f,{size:`large`,name:`Large`})]})}var R;function z(){return(z=t((()=>{p(),R=r()})))()}var B;function V(){return(V=t((()=>{B=`import { Avatar } from "minerva-design";

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
`})))()}var H;function U(){return(U=t((()=>{H=`import { Avatar, AvatarGroup } from "minerva-design";
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
`})))()}var W;function G(){return(G=t((()=>{W=`import { Avatar, AvatarGroup } from "minerva-design";

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
`})))()}var K;function q(){return(q=t((()=>{K=`import { Avatar } from "minerva-design";

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
`})))()}var J;function Y(){return(Y=t((()=>{J=`import { Avatar } from "minerva-design";

export default function SizesDemo() {
  return (
    <>
      <Avatar size="small" name="Small" />
      <Avatar size="medium" name="Medium" />
      <Avatar size="large" name="Large" />
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=t((()=>{D(),A(),P(),L(),z(),V(),U(),G(),q(),Y(),n(),s(),o(),X=r(),Z=c(Object.assign({"./demos/basic.tsx":ee,"./demos/fallback.tsx":O,"./demos/group.tsx":j,"./demos/shapes.tsx":F,"./demos/sizes.tsx":te}),Object.assign({"./demos/basic.tsx":B,"./demos/fallback.tsx":H,"./demos/group.tsx":W,"./demos/shapes.tsx":K,"./demos/sizes.tsx":J})),Q=()=>(0,X.jsx)(l,{id:`avatar`,demos:Z})})))()}$();export{Q as default};