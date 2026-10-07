import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{$t as r,Bt as i,Rt as a}from"./dist-DkgrNLMS.js";import{V as o,W as s}from"./lu-ChkgBQsL.js";import{c,n as l,s as u,t as d}from"./DocPage-Bnv84vTs.js";function f(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{src:`https://randomuser.me/api/portraits/women/44.jpg`,name:`Emma Wilson`}),(0,p.jsx)(i,{name:`Liam Chen`}),(0,p.jsx)(i,{src:`data:image/png;base64,broken`,name:`Noah Park`}),(0,p.jsx)(i,{})]})}var p;function m(){return(m=e((()=>{a(),p=n()})))()}function h(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{name:`Ada Lovelace`,size:`xsmall`}),(0,g.jsx)(i,{name:`张三`,size:40}),(0,g.jsx)(i,{src:`data:image/png;base64,broken`,name:`Grace Hopper`}),(0,g.jsx)(i,{ariaLabel:`Guest`,children:(0,g.jsx)(o,{"aria-hidden":!0})}),(0,g.jsx)(i,{name:`VIP`,fallback:`★`,shape:`rounded`,size:`xlarge`}),(0,g.jsxs)(r,{max:2,children:[(0,g.jsx)(i,{name:`Olivia`,stacked:!0}),(0,g.jsx)(i,{name:`James`,stacked:!0}),(0,g.jsx)(i,{name:`Sophia`,stacked:!0}),(0,g.jsx)(i,{name:`Lucas`,stacked:!0})]})]})}var g;function _(){return(_=e((()=>{a(),s(),g=n()})))()}function v(){return(0,y.jsx)(r,{count:5,children:b.map(e=>(0,y.jsx)(i,{name:e.name,src:e.src,stacked:!0},e.name))})}var y,b;function x(){return(x=e((()=>{a(),y=n(),b=[{name:`Olivia`,src:`https://randomuser.me/api/portraits/women/68.jpg`},{name:`James`,src:`https://randomuser.me/api/portraits/men/75.jpg`},{name:`Sophia`},{name:`Lucas`}]})))()}function S(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{shape:`circle`,name:`Circle`}),(0,C.jsx)(i,{shape:`rounded`,name:`Rounded`}),(0,C.jsx)(i,{shape:`square`,name:`Square`}),(0,C.jsx)(i,{shape:`rounded`,src:`https://randomuser.me/api/portraits/men/32.jpg`,name:`Noah Martin`})]})}var C;function w(){return(w=e((()=>{a(),C=n()})))()}function T(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{size:`small`,name:`Small`}),(0,E.jsx)(i,{size:`medium`,name:`Medium`}),(0,E.jsx)(i,{size:`large`,name:`Large`})]})}var E;function D(){return(D=e((()=>{a(),E=n()})))()}var O;function k(){return(k=e((()=>{O=`import { Avatar } from "@minerva/lib-core";

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
`})))()}var A;function j(){return(j=e((()=>{A=`import { Avatar, AvatarGroup } from "@minerva/lib-core";
import { LuUser } from "react-icons/lu";

export default function FallbackDemo() {
  return (
    <>
      <Avatar name="Ada Lovelace" size="xsmall" />
      <Avatar name="张三" size={40} />
      <Avatar src="data:image/png;base64,broken" name="Grace Hopper" />
      <Avatar ariaLabel="Guest">
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
`})))()}var M;function N(){return(N=e((()=>{M=`import { Avatar, AvatarGroup } from "@minerva/lib-core";

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
`})))()}var P;function F(){return(F=e((()=>{P=`import { Avatar } from "@minerva/lib-core";

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
`})))()}var I;function L(){return(L=e((()=>{I=`import { Avatar } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <Avatar size="small" name="Small" />
      <Avatar size="medium" name="Medium" />
      <Avatar size="large" name="Large" />
    </>
  );
}
`})))()}var R,z,B;function V(){return(V=e((()=>{m(),_(),x(),w(),D(),k(),j(),N(),F(),L(),t(),l(),c(),R=n(),z=u(Object.assign({"./demos/basic.tsx":f,"./demos/fallback.tsx":h,"./demos/group.tsx":v,"./demos/shapes.tsx":S,"./demos/sizes.tsx":T}),Object.assign({"./demos/basic.tsx":O,"./demos/fallback.tsx":A,"./demos/group.tsx":M,"./demos/shapes.tsx":P,"./demos/sizes.tsx":I})),B=()=>(0,R.jsx)(d,{id:`avatar`,demos:z})})))()}V();export{B as default};