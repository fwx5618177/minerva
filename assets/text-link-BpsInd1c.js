import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,_n as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{t as o}from"./stylingHooks-GjssfG7q.js";import{n as s,t as c}from"./safeUrl-DtfYpZcw.js";import{T as l,g as u}from"./icons-C9qyBhWC.js";import{n as d,r as f,t as p}from"./Slot-DBAoicwc.js";import{m,n as h,p as g,t as _}from"./DocPage-44Ak-YGP.js";var v,y,b,x;function S(){return(S=e((()=>{v=`_textLink_4n97h_1`,y=`_subtle_4n97h_36`,b=`_action_4n97h_50`,x={textLink:v,subtle:y,action:b}})))()}var C,w;function T(){return(T=e((()=>{a(),c(),l(),p(),S(),C=n(),w=({asChild:e=!1,variant:t=`default`,className:n,children:a,ref:c,...l})=>{let p=e?d:`a`,m={};return`href`in l&&(m.href=s(`TextLink`,l.href)),(`href`in l||`target`in l||`rel`in l)&&(m.rel=i(l.target,l.rel)),(0,C.jsxs)(p,{ref:c,className:r(x.textLink,x[t],n),...l,...m,...o(`text-link`,`root`,{variant:t}),children:[(0,C.jsx)(f,{children:a}),t===`subtle`&&(0,C.jsx)(u,{"aria-hidden":`true`})]})}})))()}function E(){return(0,D.jsx)(w,{asChild:!0,variant:`subtle`,children:(0,D.jsx)(O,{href:`#articles`,children:`Articles`})})}var D,O;function k(){return(k=e((()=>{T(),D=n(),O=({children:e,...t})=>(0,D.jsx)(`a`,{...t,children:e})})))()}function A(){return(0,j.jsxs)(`div`,{style:{display:`grid`,gap:16,width:320},children:[(0,j.jsxs)(`p`,{style:{margin:0},children:[`Read the `,(0,j.jsx)(w,{href:`#guide`,children:`community guide`}),` first.`]}),(0,j.jsx)(w,{href:`#all`,variant:`subtle`,children:`View all reviews`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(w,{href:`#account`,variant:`action`,children:`Account settings`}),(0,j.jsx)(w,{href:`#security`,variant:`action`,children:`Security`})]})]})}var j;function M(){return(M=e((()=>{T(),j=n()})))()}var N;function P(){return(P=e((()=>{N=`import { TextLink } from "@minerva/lib-core";

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
`})))()}var F;function I(){return(I=e((()=>{F=`import { TextLink } from "@minerva/lib-core";

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
`})))()}var L,R,z;function B(){return(B=e((()=>{k(),M(),P(),I(),t(),h(),m(),L=n(),R=g(Object.assign({"./demos/as-child.tsx":E,"./demos/variants.tsx":A}),Object.assign({"./demos/as-child.tsx":N,"./demos/variants.tsx":F})),z=()=>(0,L.jsx)(_,{id:`text-link`,demos:R})})))()}B();export{z as default};