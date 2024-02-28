import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Detail"
        onPress={() => {
          navigation.navigate("Detail", {
            id: 10,
          });
        }}
      />
      <Button
        title="Go To Settings"
        onPress={() => {
          navigation.navigate("Setting");
        }}
      />
    </View>
  );
}
