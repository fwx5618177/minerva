import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`import { View, Text } from "react-native";
import { useState } from "react";
import { Switch } from "minerva-design/native";

export default function ControlledDemo() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={{ gap: 12 }}>
      <Switch
        label="Email notifications"
        checked={enabled}
        onChange={(checked) => setEnabled(checked)}
      />
      <Text>Notifications are {enabled ? "on" : "off"}</Text>
    </View>
  );
}
`})))()}n();export{t as default};