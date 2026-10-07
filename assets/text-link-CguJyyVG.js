import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{T as a,g as o}from"./icons-CtD3xdmP.js";import{n as s,r as c,t as l}from"./Slot-CGAfhnsY.js";import{c as u,n as d,s as f,t as p}from"./DocPage-DzKszXiH.js";var m,h,g,_;function v(){return(v=e((()=>{m=`_textLink_4n97h_1`,h=`_subtle_4n97h_36`,g=`_action_4n97h_50`,_={textLink:m,subtle:h,action:g}})))()}var y,b;function x(){return(x=e((()=>{i(),a(),l(),v(),y=n(),b=({asChild:e=!1,variant:t=`default`,className:n,children:i,ref:a,...l})=>(0,y.jsxs)(e?s:`a`,{ref:a,className:r(_.textLink,_[t],n),...l,children:[(0,y.jsx)(c,{children:i}),t===`subtle`&&(0,y.jsx)(o,{"aria-hidden":`true`})]})})))()}function S(){return(0,C.jsx)(b,{asChild:!0,variant:`subtle`,children:(0,C.jsx)(w,{href:`#articles`,children:`Articles`})})}var C,w;function T(){return(T=e((()=>{x(),C=n(),w=({children:e,...t})=>(0,C.jsx)(`a`,{...t,children:e})})))()}function E(){return(0,D.jsxs)(`div`,{style:{display:`grid`,gap:16,width:320},children:[(0,D.jsxs)(`p`,{style:{margin:0},children:[`Read the `,(0,D.jsx)(b,{href:`#guide`,children:`community guide`}),` first.`]}),(0,D.jsx)(b,{href:`#all`,variant:`subtle`,children:`View all reviews`}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(b,{href:`#account`,variant:`action`,children:`Account settings`}),(0,D.jsx)(b,{href:`#security`,variant:`action`,children:`Security`})]})]})}var D;function O(){return(O=e((()=>{x(),D=n()})))()}var k;function A(){return(A=e((()=>{k=`import { TextLink } from "@minerva/lib-core";

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
`})))()}var j;function M(){return(M=e((()=>{j=`import { TextLink } from "@minerva/lib-core";

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
`})))()}var N,P,F;function I(){return(I=e((()=>{T(),O(),A(),M(),t(),d(),u(),N=n(),P=f(Object.assign({"./demos/as-child.tsx":S,"./demos/variants.tsx":E}),Object.assign({"./demos/as-child.tsx":k,"./demos/variants.tsx":j})),F=()=>(0,N.jsx)(p,{id:`text-link`,demos:P})})))()}I();export{F as default};