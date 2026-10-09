import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`import { View } from "react-native";
import { Avatar } from "minerva-design/native";

export default function BasicDemo() {
  return (
    <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
      <Avatar
        src="https://randomuser.me/api/portraits/women/44.jpg"
        name="Emma Wilson"
      />
      <Avatar name="Liam Chen" />
      {/* The image cannot be decoded, so the initial is shown instead */}
      <Avatar src="data:image/png;base64,broken" name="Noah Park" />
      <Avatar />
    </View>
  );
}
`})))()}n();export{t as default};