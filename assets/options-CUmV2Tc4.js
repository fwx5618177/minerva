import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t=`// The split follows the layout's own width (container query).
export function setup(root: HTMLElement) {
  const input = root.querySelector<HTMLInputElement>("#width")!;
  const value = root.querySelector<HTMLOutputElement>("#value")!;
  const frame = root.querySelector<HTMLElement>("#frame")!;
  const onInput = () => {
    frame.style.width = \`\${input.value}px\`;
    value.value = \`\${input.value}px\`;
  };
  input.addEventListener("input", onInput);
  return () => input.removeEventListener("input", onInput);
}
`})))()}n();export{t as default};