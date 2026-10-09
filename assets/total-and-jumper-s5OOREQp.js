import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`// totalRender is a JS property: it receives the total and the
// [first, last] items of the current page.
export function setup(root: HTMLElement) {
  const pager = root.querySelector<
    HTMLElement & {
      totalRender?: (total: number, range: [number, number]) => string;
    }
  >("#results")!;
  pager.totalRender = (total, [first, last]) =>
    \`\${first}–\${last} of \${total} results\`;
}
`})))()}n();export{t as default};