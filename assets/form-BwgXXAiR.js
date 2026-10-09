import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`// Like a checkbox: a switch that is on submits its \`value\` (default "on"),
// \`required\` keeps the form invalid until it is on, and reset restores the
// \`checked\` attributes.
export function setup(root: HTMLElement) {
  const form = root.querySelector<HTMLFormElement>("#sw-form")!;
  const result = root.querySelector<HTMLOutputElement>("#sw-form-result")!;
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    result.value = \`FormData: \${entries.join(", ") || "(empty)"}\`;
  };
  const onReset = () => (result.value = "");
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
  return () => {
    form.removeEventListener("submit", onSubmit);
    form.removeEventListener("reset", onReset);
  };
}
`})))()}n();export{t as default};