import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Cn as r,Vt as i}from"./dist-dg6ajl7p.js";import{c as a,n as o,s,t as c}from"./DocPage-Kqmidh_0.js";function l(){return(0,u.jsx)(r,{asChild:!0,variant:`subtle`,children:(0,u.jsx)(d,{href:`#articles`,children:`Articles`})})}var u,d;function f(){return(f=e((()=>{i(),u=n(),d=({children:e,...t})=>(0,u.jsx)(`a`,{...t,children:e})})))()}function p(){return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:16,width:320},children:[(0,m.jsxs)(`p`,{style:{margin:0},children:[`Read the `,(0,m.jsx)(r,{href:`#guide`,children:`community guide`}),` first.`]}),(0,m.jsx)(r,{href:`#all`,variant:`subtle`,children:`View all reviews`}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(r,{href:`#account`,variant:`action`,children:`Account settings`}),(0,m.jsx)(r,{href:`#security`,variant:`action`,children:`Security`})]})]})}var m;function h(){return(h=e((()=>{i(),m=n()})))()}var g;function _(){return(_=e((()=>{g=`import { TextLink } from "@minerva/lib-core";

// Stand-in for a router link component (e.g. react-router's <Link>)
const RouterLink = ({ children, ...props }: React.ComponentProps<"a">) => (
  <a {...props}>{children}</a>
);

export default function AsChildDemo() {
  return (
    <TextLink asChild variant="subtle">
      <RouterLink href="#articles">Articles</RouterLink>
    </TextLink>
  );
}
`})))()}var v;function y(){return(y=e((()=>{v=`import { TextLink } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: 320 }}>
      <p style={{ margin: 0 }}>
        Read the <TextLink href="#guide">community guide</TextLink> first.
      </p>
      <TextLink href="#all" variant="subtle">
        View all reviews
      </TextLink>
      <div>
        <TextLink href="#account" variant="action">
          Account settings
        </TextLink>
        <TextLink href="#security" variant="action">
          Security
        </TextLink>
      </div>
    </div>
  );
}
`})))()}var b,x,S;function C(){return(C=e((()=>{f(),h(),_(),y(),t(),o(),a(),b=n(),x=s(Object.assign({"./demos/as-child.tsx":l,"./demos/variants.tsx":p}),Object.assign({"./demos/as-child.tsx":g,"./demos/variants.tsx":v})),S=()=>(0,b.jsx)(c,{id:`text-link`,demos:x})})))()}C();export{S as default};