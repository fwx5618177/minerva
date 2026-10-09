import{n as e}from"./rolldown-runtime-B0Z9INg1.js";function t(e){let t=e.querySelector(`#preview`),r=e.querySelector(`#desktop`),i=e.querySelector(`#mobile`);t.html=n;let a=e=>()=>{t.viewport=e,r.active=e===`desktop`,i.active=e===`mobile`},o=a(`desktop`),s=a(`mobile`);return r.addEventListener(`click`,o),i.addEventListener(`click`,s),()=>{r.removeEventListener(`click`,o),i.removeEventListener(`click`,s)}}var n;function r(){return(r=e((()=>{n=`<table width="100%" style="font-family: sans-serif">
  <tr><td style="background: #0f172a; color: white; padding: 16px">
    <strong>Minerva Weekly</strong></td></tr>
  <tr><td style="padding: 16px">
    <h2>Three layouts for dense dashboards</h2>
    <p>Split panes, responsive grids and sticky headers, compared.</p>
  </td></tr>
</table>`})))()}r();export{t as setup};