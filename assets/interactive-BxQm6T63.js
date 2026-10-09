import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`// Click the left / right half of a star, or use the arrow keys,
// PageUp / PageDown and Home / End once the stars are focused.
export function setup(root: HTMLElement) {
  const score = root.querySelector<HTMLElement>("#score")!;
  const result = root.querySelector<HTMLOutputElement>("#result")!;
  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: number }>).detail;
    result.value = \`minerva-change: \${value}\`;
  };
  score.addEventListener("minerva-change", onChange);
  return () => score.removeEventListener("minerva-change", onChange);
}
`})))()}n();export{t as default};