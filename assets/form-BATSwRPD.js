import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t=`<form id="jf-form" style="display: grid; gap: 8px; max-width: 480px">
  <label for="jf-form-payload">Webhook payload</label>
  <minerva-json-field
    id="jf-form-payload"
    name="payload"
    rows="5"
    required
    value='{"event":"deploy",'
  ></minerva-json-field>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Send</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="jf-form-result"></output>
</form>
`})))()}n();export{t as default};