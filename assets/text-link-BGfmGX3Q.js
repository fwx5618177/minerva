import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,_n as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{n as o,t as s}from"./safeUrl-DtfYpZcw.js";import{T as c,g as l}from"./icons-C9qyBhWC.js";import{n as u,r as d,t as f}from"./Slot-GoEM-t4f.js";import{c as p,n as m,s as h,t as g}from"./DocPage-DEXoN4OO.js";var _,v,y,b;function x(){return(x=e((()=>{_=`_textLink_4n97h_1`,v=`_subtle_4n97h_36`,y=`_action_4n97h_50`,b={textLink:_,subtle:v,action:y}})))()}var S,C;function w(){return(w=e((()=>{a(),s(),c(),f(),x(),S=n(),C=({asChild:e=!1,variant:t=`default`,className:n,children:a,ref:s,...c})=>{let f=e?u:`a`,p={};return`href`in c&&(p.href=o(`TextLink`,c.href)),(`href`in c||`target`in c||`rel`in c)&&(p.rel=i(c.target,c.rel)),(0,S.jsxs)(f,{ref:s,className:r(b.textLink,b[t],n),...c,...p,children:[(0,S.jsx)(d,{children:a}),t===`subtle`&&(0,S.jsx)(l,{"aria-hidden":`true`})]})}})))()}function T(){return(0,E.jsx)(C,{asChild:!0,variant:`subtle`,children:(0,E.jsx)(D,{href:`#articles`,children:`Articles`})})}var E,D;function O(){return(O=e((()=>{w(),E=n(),D=({children:e,...t})=>(0,E.jsx)(`a`,{...t,children:e})})))()}function k(){return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:16,width:320},children:[(0,A.jsxs)(`p`,{style:{margin:0},children:[`Read the `,(0,A.jsx)(C,{href:`#guide`,children:`community guide`}),` first.`]}),(0,A.jsx)(C,{href:`#all`,variant:`subtle`,children:`View all reviews`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(C,{href:`#account`,variant:`action`,children:`Account settings`}),(0,A.jsx)(C,{href:`#security`,variant:`action`,children:`Security`})]})]})}var A;function j(){return(j=e((()=>{w(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { TextLink } from "@minerva/lib-core";

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
`})))()}var P;function F(){return(F=e((()=>{P=`import { TextLink } from "@minerva/lib-core";

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
`})))()}var I,L,R;function z(){return(z=e((()=>{O(),j(),N(),F(),t(),m(),p(),I=n(),L=h(Object.assign({"./demos/as-child.tsx":T,"./demos/variants.tsx":k}),Object.assign({"./demos/as-child.tsx":M,"./demos/variants.tsx":P})),R=()=>(0,I.jsx)(g,{id:`text-link`,demos:L})})))()}z();export{R as default};