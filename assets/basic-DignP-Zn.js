import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`import { useState } from "react";
import { NavTree } from "minerva-design/native";
export default function Basic() {
  const [active, setActive] = useState("overview");
  return (
    <NavTree
      activeId={active}
      onItemSelect={(item) => setActive(item.id)}
      sections={[
        {
          id: "workspace",
          title: "Workspace",
          items: [
            {
              id: "pages",
              label: "Pages",
              children: [
                { id: "overview", label: "Overview" },
                { id: "settings", label: "Settings" },
              ],
            },
          ],
        },
      ]}
    />
  );
}
`})))()}n();export{t as default};