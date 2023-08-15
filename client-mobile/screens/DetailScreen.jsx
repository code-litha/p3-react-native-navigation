import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

function DetailScreen({ navigation, route }) {
  const params = route.params;

  console.log(params, "<<< params");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Detail Screen</Text>
      <Text>ID Params: {params?.id || ""}</Text>
      <CustomButton />
    </View>
  );
}

export default DetailScreen;
