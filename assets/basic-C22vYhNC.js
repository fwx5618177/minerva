import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`import { useState } from "react";
import { Text } from "react-native";
import { Button, HStack, useTheme } from "minerva-design/native";

export default function Basic() {
  const { colors } = useTheme();
  const [count, setCount] = useState(0);
  return (
    <HStack gap={3} wrap align="center">
      <Button onPress={() => setCount((c) => c + 1)}>Click me</Button>
      <Text role="status" style={{ color: colors["text-secondary-color"] }}>
        Clicked {count} times
      </Text>
    </HStack>
  );
}
`})))()}n();export{t as default};