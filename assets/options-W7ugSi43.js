import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`// formatValue() re-indents valid JSON with \`indent\` spaces (no event).
export function setup(root: HTMLElement) {
  const field = root.querySelector<HTMLElement & { formatValue(): void }>(
    "#jf-indent",
  )!;
  const button = root.querySelector<HTMLElement>("#jf-format")!;
  const onClick = () => field.formatValue();
  button.addEventListener("click", onClick);
  return () => button.removeEventListener("click", onClick);
}
`})))()}n();export{t as default};