import"./rolldown-runtime-CbXtAM7H.js";import{f as e,t}from"./react-vendor-CUe5nroo.js";import{a as n,z as r}from"./dist-DAjZNDC0.js";import{r as i}from"./fi-CPr7eGDA.js";import{i as a,t as o}from"./DocPage-B1L0vw6V.js";var s=t();function c(){return(0,s.jsx)(r,{})}function l(){return(0,s.jsx)(r,{icon:(0,s.jsx)(i,{size:36}),description:(0,s.jsxs)(`span`,{children:[`No matches for `,(0,s.jsx)(`strong`,{children:`“minerva”`})]})})}function u(){return(0,s.jsx)(r,{useSvg:!0,showShadow:!0,width:320,height:200,backgroundColor:`#f0f7ff`,color:`#1d4ed8`,description:`Inbox zero`})}function d(){return(0,s.jsx)(r,{useSvg:!0,description:`No results found`})}function f(){return(0,s.jsx)(r,{description:`You have no projects yet`,children:(0,s.jsx)(n,{size:`small`,children:`Create project`})})}var p=`import { Empty } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Empty />;
}
`,m=`import { Empty } from "@minerva/lib-core";
import { FiSearch } from "react-icons/fi";

export default function CustomIconDemo() {
  return (
    <Empty
      icon={<FiSearch size={36} />}
      description={
        <span>
          No matches for <strong>“minerva”</strong>
        </span>
      }
    />
  );
}
`,h=`import { Empty } from "@minerva/lib-core";

export default function StyledDemo() {
  return (
    <Empty
      useSvg
      showShadow
      width={320}
      height={200}
      backgroundColor="#f0f7ff"
      color="#1d4ed8"
      description="Inbox zero"
    />
  );
}
`,g=`import { Empty } from "@minerva/lib-core";

export default function SvgDemo() {
  return <Empty useSvg description="No results found" />;
}
`,_=`import { Button, Empty } from "@minerva/lib-core";

export default function WithActionDemo() {
  return (
    <Empty description="You have no projects yet">
      <Button size="small">Create project</Button>
    </Empty>
  );
}
`;e();var v=a(Object.assign({"./demos/basic.tsx":c,"./demos/custom-icon.tsx":l,"./demos/styled.tsx":u,"./demos/svg.tsx":d,"./demos/with-action.tsx":f}),Object.assign({"./demos/basic.tsx":p,"./demos/custom-icon.tsx":m,"./demos/styled.tsx":h,"./demos/svg.tsx":g,"./demos/with-action.tsx":_})),y=()=>(0,s.jsx)(o,{id:`empty`,demos:v});export{y as default};