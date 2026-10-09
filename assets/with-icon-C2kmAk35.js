import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`import { View, Text } from "react-native";
import { Button } from "minerva-design/native";

export default function WithIconDemo() {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      <Button startIcon={<Text accessible={false}>+</Text>}>Add</Button>
      <Button color="danger" startIcon={<Text accessible={false}>↻</Text>}>
        Retry
      </Button>
      <Button
        color="neutral"
        variant="ghost"
        startIcon={<Text accessible={false}>←</Text>}
      >
        Back
      </Button>
      <Button color="danger" variant="outline" accessibilityLabel="Delete item">
        <Text accessible={false}>×</Text>
      </Button>
    </View>
  );
}
`})))()}n();export{t as default};