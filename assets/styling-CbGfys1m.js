import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`type Step = { value: string; label: string };

export function setup(root: HTMLElement) {
  root.querySelector<HTMLElement & { items: Step[] }>("#styled")!.items = [
    { value: "draft", label: "Draft" },
    { value: "review", label: "Review" },
    { value: "publish", label: "Publish" },
  ];
}
`})))()}n();export{t as default};