import"./rolldown-runtime-CbXtAM7H.js";import{p as e,t}from"./react-vendor-BvKcNA9t.js";import{a as n,g as r}from"./dist-C3Cy1YK6.js";import{i,t as a}from"./DocPage-DUnq_TLt.js";var o=t();function s(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{src:`https://randomuser.me/api/portraits/women/44.jpg`,name:`Emma Wilson`}),(0,o.jsx)(n,{name:`Liam Chen`}),(0,o.jsx)(n,{src:`data:image/png;base64,broken`,name:`Noah Park`}),(0,o.jsx)(n,{})]})}var c=[{name:`Olivia`,src:`https://randomuser.me/api/portraits/women/68.jpg`},{name:`James`,src:`https://randomuser.me/api/portraits/men/75.jpg`},{name:`Sophia`},{name:`Lucas`}];function l(){return(0,o.jsx)(r,{count:5,children:c.map(e=>(0,o.jsx)(n,{name:e.name,src:e.src,stacked:!0},e.name))})}function u(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{shape:`circle`,name:`Circle`}),(0,o.jsx)(n,{shape:`rounded`,name:`Rounded`}),(0,o.jsx)(n,{shape:`square`,name:`Square`}),(0,o.jsx)(n,{shape:`rounded`,src:`https://randomuser.me/api/portraits/men/32.jpg`,name:`Noah Martin`})]})}function d(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{size:`small`,name:`Small`}),(0,o.jsx)(n,{size:`medium`,name:`Medium`}),(0,o.jsx)(n,{size:`large`,name:`Large`})]})}var f=`import { Avatar } from "@minerva/lib-core";

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
`,p=`import { Avatar, AvatarGroup } from "@minerva/lib-core";

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
`,m=`import { Avatar } from "@minerva/lib-core";

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
`,h=`import { Avatar } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <Avatar size="small" name="Small" />
      <Avatar size="medium" name="Medium" />
      <Avatar size="large" name="Large" />
    </>
  );
}
`;e();var g=i(Object.assign({"./demos/basic.tsx":s,"./demos/group.tsx":l,"./demos/shapes.tsx":u,"./demos/sizes.tsx":d}),Object.assign({"./demos/basic.tsx":f,"./demos/group.tsx":p,"./demos/shapes.tsx":m,"./demos/sizes.tsx":h})),_=()=>(0,o.jsx)(a,{id:`avatar`,demos:g});export{_ as default};