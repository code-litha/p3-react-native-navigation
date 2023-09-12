import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() =>
          navigation.navigate("Detail", {
            id: 10,
            data: {
              id: 10,
              name: "Donny",
            },
          })
        }
      />
      <Button
        title="Go to Detail Tanpa Kasih Params"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

export default HomeScreen;
