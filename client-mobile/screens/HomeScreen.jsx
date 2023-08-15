import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button
        title="Pindah ke detail"
        onPress={() => {
          // console.log("pindah ke detail nih");
          navigation.navigate("Detail", {
            id: 10,
            data: [
              {
                id: 10,
                name: "data name",
              },
            ],
          });
        }}
      />
    </View>
  );
}

export default HomeScreen;
