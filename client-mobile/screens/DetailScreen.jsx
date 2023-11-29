import { Button, Text, View } from "react-native";
import BackButton from "../components/BackButton";

function DetailScreen({ navigation, route }) {
  const { id, data } = route.params || {};

  console.log(id, "<<<< params nih");
  console.log(data, "<<< data");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Detail Screen</Text>
      <BackButton />
    </View>
  );
}

export default DetailScreen;
