import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-EhfBFkcC.js";import{O as i,c as a,k as o,n as s,s as c,t as l}from"./DocPage-HgWiqH91.js";import{n as u,t as d}from"./useI18n-CYdr3eVz.js";import{n as f,t as p}from"./Avatar-BBcMVNMX.js";import{w as m,x as ee}from"./lu-D4WkY8Ju.js";var h,g,_,v;function y(){return(y=t((()=>{h=`_avatarGroup_86jqp_1`,g=`_avatarGroupItem_86jqp_10`,_=`_count_86jqp_30`,v={avatarGroup:h,avatarGroupItem:g,count:_}})))()}var b,x,S;function C(){return(C=t((()=>{i(),u(),y(),b=e(n(),1),x=r(),S=b.memo(({count:e,max:t,className:n=``,children:r,"aria-label":i,ref:a,...s})=>{let{t:c}=d(),l=b.Children.toArray(r),u=t===void 0?l:l.slice(0,t),f=(e??0)+l.length-u.length;return(0,x.jsxs)(`div`,{ref:a,role:`group`,className:o(v.avatarGroup,n),"aria-label":i??(f>0?c(`avatar.groupWithMore`,{count:f}):c(`avatar.group`)),...s,children:[u.map((e,t)=>(0,x.jsx)(`div`,{className:v.avatarGroupItem,children:e},b.isValidElement(e)?e.key??t:t)),f>0?(0,x.jsxs)(`div`,{className:v.count,"aria-hidden":`true`,children:[`+`,f]}):null]})})})))()}function w(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(p,{src:`https://randomuser.me/api/portraits/women/44.jpg`,name:`Emma Wilson`}),(0,T.jsx)(p,{name:`Liam Chen`}),(0,T.jsx)(p,{src:`data:image/png;base64,broken`,name:`Noah Park`}),(0,T.jsx)(p,{})]})}var T;function E(){return(E=t((()=>{f(),T=r()})))()}function D(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(p,{name:`Ada Lovelace`,size:`xsmall`}),(0,O.jsx)(p,{name:`张三`,size:40}),(0,O.jsx)(p,{src:`data:image/png;base64,broken`,name:`Grace Hopper`}),(0,O.jsx)(p,{"aria-label":`Guest`,children:(0,O.jsx)(ee,{"aria-hidden":!0})}),(0,O.jsx)(p,{name:`VIP`,fallback:`★`,shape:`rounded`,size:`xlarge`}),(0,O.jsxs)(S,{max:2,children:[(0,O.jsx)(p,{name:`Olivia`,stacked:!0}),(0,O.jsx)(p,{name:`James`,stacked:!0}),(0,O.jsx)(p,{name:`Sophia`,stacked:!0}),(0,O.jsx)(p,{name:`Lucas`,stacked:!0})]})]})}var O;function k(){return(k=t((()=>{f(),C(),m(),O=r()})))()}function A(){return(0,j.jsx)(S,{count:5,children:M.map(e=>(0,j.jsx)(p,{name:e.name,src:e.src,stacked:!0},e.name))})}var j,M;function N(){return(N=t((()=>{f(),C(),j=r(),M=[{name:`Olivia`,src:`https://randomuser.me/api/portraits/women/68.jpg`},{name:`James`,src:`https://randomuser.me/api/portraits/men/75.jpg`},{name:`Sophia`},{name:`Lucas`}]})))()}function P(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(p,{shape:`circle`,name:`Circle`}),(0,F.jsx)(p,{shape:`rounded`,name:`Rounded`}),(0,F.jsx)(p,{shape:`square`,name:`Square`}),(0,F.jsx)(p,{shape:`rounded`,src:`https://randomuser.me/api/portraits/men/32.jpg`,name:`Noah Martin`})]})}var F;function I(){return(I=t((()=>{f(),F=r()})))()}function L(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(p,{size:`small`,name:`Small`}),(0,R.jsx)(p,{size:`medium`,name:`Medium`}),(0,R.jsx)(p,{size:`large`,name:`Large`})]})}var R;function z(){return(z=t((()=>{f(),R=r()})))()}var B;function V(){return(V=t((()=>{B=`import { Avatar } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=t((()=>{E(),k(),N(),I(),z(),V(),U(),G(),q(),Y(),n(),s(),a(),X=r(),Z=c(Object.assign({"./demos/basic.tsx":w,"./demos/fallback.tsx":D,"./demos/group.tsx":A,"./demos/shapes.tsx":P,"./demos/sizes.tsx":L}),Object.assign({"./demos/basic.tsx":B,"./demos/fallback.tsx":H,"./demos/group.tsx":W,"./demos/shapes.tsx":K,"./demos/sizes.tsx":J})),Q=()=>(0,X.jsx)(l,{id:`avatar`,demos:Z})})))()}$();export{Q as default};