import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{L as r}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as i}from"./dist-CcA3uxH5.js";import{c as a,n as o,s,t as c}from"./DocPage-Dm1vTl9w.js";function l(){return(0,u.jsx)(r,{ariaLabel:`Response payload`,children:d})}var u,d;function f(){return(f=e((()=>{i(),u=n(),d=JSON.stringify({id:42,title:`The Three-Body Problem`,tags:[`sci-fi`,`classic`]},null,2)})))()}function p(){return(0,m.jsx)(r,{ariaLabel:`Server log`,wrap:!1,maxHeight:160,children:h})}var m,h;function g(){return(g=e((()=>{i(),m=n(),h=[`2026-10-07T09:12:01Z INFO  request id=7f3a path=/api/books?page=1&size=20&sort=rating`,`2026-10-07T09:12:02Z WARN  slow query took=1834ms table=reviews`].join(`
`)})))()}var _;function v(){return(v=e((()=>{_=`import { CodeBlock } from "@minerva/lib-core";

const payload = JSON.stringify(
  { id: 42, title: "The Three-Body Problem", tags: ["sci-fi", "classic"] },
  null,
  2,
);

export default function BasicDemo() {
  return <CodeBlock ariaLabel="Response payload">{payload}</CodeBlock>;
}
`})))()}var y;function b(){return(b=e((()=>{y=`import { CodeBlock } from "@minerva/lib-core";

const log = [
  "2026-10-07T09:12:01Z INFO  request id=7f3a path=/api/books?page=1&size=20&sort=rating",
  "2026-10-07T09:12:02Z WARN  slow query took=1834ms table=reviews",
].join("\\n");

export default function NoWrapDemo() {
  return (
    <CodeBlock ariaLabel="Server log" wrap={false} maxHeight={160}>
      {log}
    </CodeBlock>
  );
}
`})))()}var x,S,C;function w(){return(w=e((()=>{f(),g(),v(),b(),t(),o(),a(),x=n(),S=s(Object.assign({"./demos/basic.tsx":l,"./demos/no-wrap.tsx":p}),Object.assign({"./demos/basic.tsx":_,"./demos/no-wrap.tsx":y})),C=()=>(0,x.jsx)(c,{id:`code-block`,demos:S})})))()}w();export{C as default};