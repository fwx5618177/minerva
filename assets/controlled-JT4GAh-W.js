import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`import { useState } from "react";
import { Text, View } from "react-native";
import { Checkbox, useTheme } from "minerva-design/native";
export default function Controlled() {
  const [checked, setChecked] = useState(true);
  const { colors } = useTheme();
  return (
    <View style={{ gap: 12, alignItems: "flex-start" }}>
      <Checkbox
        label="Subscribe to the newsletter"
        checked={checked}
        onChange={setChecked}
      />
      <Text role="status" style={{ color: colors["text-color"] }}>
        {checked ? "Subscribed" : "Not subscribed"}
      </Text>
    </View>
  );
}
`})))()}n();export{t as default};