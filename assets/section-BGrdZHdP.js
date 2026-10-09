import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`// The loading state does not set aria-busy: mark the content container busy
// yourself while it loads, then swap the placeholder for the content.
export function setup(root: HTMLElement) {
  const orders = root.querySelector<HTMLElement>("#orders")!;
  const spinner = root.querySelector<HTMLElement>("#spinner")!;
  const content = root.querySelector<HTMLElement>("#content")!;
  const refresh = root.querySelector<HTMLElement>("#refresh")!;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const setBusy = (busy: boolean) => {
    orders.setAttribute("aria-busy", String(busy));
    spinner.hidden = !busy;
    content.hidden = busy;
  };
  const load = () => {
    setBusy(true);
    clearTimeout(timer);
    timer = setTimeout(() => setBusy(false), 1500);
  };
  load();
  refresh.addEventListener("click", load);
  return () => {
    clearTimeout(timer);
    refresh.removeEventListener("click", load);
  };
}
`})))()}n();export{t as default};