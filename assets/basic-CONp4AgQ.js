import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`export function setup(root: HTMLElement) {
  const button = root.querySelector("minerva-button")!;
  const output = root.querySelector("output")!;
  let count = 0;
  const click = () => {
    output.textContent = \`Clicked \${++count} times\`;
  };
  button.addEventListener("click", click);
  return () => button.removeEventListener("click", click);
}
`})))()}n();export{t as default};