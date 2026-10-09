import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`import { View } from "react-native";
import { Switch } from "minerva-design/native";

const colors = ["primary", "success", "info", "warning", "danger"] as const;

export default function ColorsDemo() {
  return (
    <View style={{ gap: 12 }}>
      {colors.map((color) => (
        <Switch key={color} color={color} label={color} defaultChecked />
      ))}
    </View>
  );
}
`})))()}n();export{t as default};