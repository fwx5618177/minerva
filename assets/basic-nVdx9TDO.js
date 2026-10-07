import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t=`// The docs use hash routing: keep the demo navigation links from navigating.
// closeNavigation() dismisses the mobile drawer once a link is chosen.
export function setup(root: HTMLElement) {
  const shell = root.querySelector<HTMLElement & { closeNavigation(): void }>(
    "minerva-app-shell",
  )!;
  const onClick = (event: Event) => {
    if (!(event.target as Element).closest("nav a")) return;
    event.preventDefault();
    shell.closeNavigation();
  };
  shell.addEventListener("click", onClick);
  return () => shell.removeEventListener("click", onClick);
}
`})))()}n();export{t as default};