import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t=`// Client-side routing: the click is composed out of the shadow root, so a
// router can intercept it on the host and read its \`href\`.
export function setup(root: HTMLElement) {
  const route = root.querySelector<HTMLOutputElement>("#route")!;
  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element).closest<
      HTMLElement & { href?: string }
    >("minerva-text-link");
    if (!link) return;
    event.preventDefault();
    route.value = \`Navigated to \${link.href}\`;
  };
  root.addEventListener("click", onClick);
  return () => root.removeEventListener("click", onClick);
}
`})))()}n();export{t as default};