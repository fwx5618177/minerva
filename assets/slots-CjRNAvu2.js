import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`// \`content\` is a regular property: update it and the polite status badge
// announces the new count.
export function setup(root: HTMLElement) {
  const cart = root.querySelector<HTMLElement & { content: string }>("#cart")!;
  const add = root.querySelector<HTMLElement>("#add")!;
  let count = 0;
  const onClick = () => (cart.content = String(++count));
  add.addEventListener("click", onClick);
  return () => add.removeEventListener("click", onClick);
}
`})))()}n();export{t as default};