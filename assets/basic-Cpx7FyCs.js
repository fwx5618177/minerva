import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`import { useState } from "react";
import { Text, View } from "react-native";
import { VirtualList } from "minerva-design/native";
export default function Basic() {
  const [selected, setSelected] = useState(-1);
  const items = Array.from({ length: 1000 }, (_, id) => ({ id }));
  return (
    <View>
      <Text>Selected row: {selected}</Text>
      <VirtualList
        items={items}
        itemHeight={44}
        maxHeight={260}
        onItemClick={(_, index) => setSelected(index)}
        renderItem={(item) => <Text>Record {item.id}</Text>}
      />
    </View>
  );
}
`})))()}n();export{t as default};