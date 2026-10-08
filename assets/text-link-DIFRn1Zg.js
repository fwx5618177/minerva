import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{Nt as r,Ot as i,en as a}from"./minerva-web-components-gmidRbuG.js";import{m as o,n as s,p as c,t as l}from"./DocPage-OkRujup2.js";import{t as u}from"./stylingHooks-GjssfG7q.js";import{n as d,t as f}from"./safeUrl-VK__ajXQ.js";import{T as p,g as m}from"./icons-Dj0E45-e.js";import{n as h,r as g,t as _}from"./Slot-uSB1_F29.js";var v,y,b,x;function S(){return(S=e((()=>{v=`_textLink_4c1ej_1`,y=`_subtle_4c1ej_36`,b=`_action_4c1ej_50`,x={textLink:v,subtle:y,action:b}})))()}var C,w;function T(){return(T=e((()=>{i(),f(),p(),_(),S(),C=n(),w=({asChild:e=!1,variant:t=`default`,className:n,children:i,ref:o,...s})=>{let c=e?h:`a`,l={};return`href`in s&&(l.href=d(`TextLink`,s.href)),(`href`in s||`target`in s||`rel`in s)&&(l.rel=r(s.target,s.rel)),(0,C.jsxs)(c,{ref:o,className:a(x.textLink,x[t],n),...s,...l,...u(`text-link`,`root`,{variant:t}),children:[(0,C.jsx)(g,{children:i}),t===`subtle`&&(0,C.jsx)(m,{"aria-hidden":`true`})]})}})))()}function E(){return(0,D.jsx)(w,{asChild:!0,variant:`subtle`,children:(0,D.jsx)(O,{href:`#articles`,children:`Articles`})})}var D,O;function k(){return(k=e((()=>{T(),D=n(),O=({children:e,...t})=>(0,D.jsx)(`a`,{...t,children:e})})))()}function A(){return(0,j.jsxs)(`div`,{style:{display:`grid`,gap:16,width:320},children:[(0,j.jsxs)(`p`,{style:{margin:0},children:[`Read the `,(0,j.jsx)(w,{href:`#guide`,children:`community guide`}),` first.`]}),(0,j.jsx)(w,{href:`#all`,variant:`subtle`,children:`View all reviews`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(w,{href:`#account`,variant:`action`,children:`Account settings`}),(0,j.jsx)(w,{href:`#security`,variant:`action`,children:`Security`})]})]})}var j;function M(){return(M=e((()=>{T(),j=n()})))()}var N;function P(){return(P=e((()=>{N=`import { TextLink } from "minerva-design";

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
`})))()}var F;function I(){return(I=e((()=>{F=`import { TextLink } from "minerva-design";

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
`})))()}var L,R,z;function B(){return(B=e((()=>{k(),M(),P(),I(),t(),s(),o(),L=n(),R=c(Object.assign({"./demos/as-child.tsx":E,"./demos/variants.tsx":A}),Object.assign({"./demos/as-child.tsx":N,"./demos/variants.tsx":F})),z=()=>(0,L.jsx)(l,{id:`text-link`,demos:R})})))()}B();export{z as default};