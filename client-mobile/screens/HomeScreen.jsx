import { Button, Text, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button
        title={"Go To Detail"}
        onPress={() => {
          navigation.navigate("Detail", {
            id: 100,
            data: [
              {
                id: 1,
              },
              {
                id: 2,
              },
            ],
          });
        }}
      />
    </View>
  );
}

export default HomeScreen;
