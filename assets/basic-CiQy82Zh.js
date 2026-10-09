import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`import { useState } from "react";
import { View } from "react-native";
import { ProgressIndicator, Button } from "minerva-design/native";
export default function Basic() {
  const [value, setValue] = useState(40);
  return (
    <View style={{ gap: 12 }}>
      <ProgressIndicator value={value} />
      <Button
        onPress={() =>
          setValue((current) => (current >= 100 ? 0 : current + 20))
        }
      >
        Advance
      </Button>
    </View>
  );
}
`})))()}n();export{t as default};