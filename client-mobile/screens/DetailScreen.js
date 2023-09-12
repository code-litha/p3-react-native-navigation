import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

function DetailScreen({ route, navigation }) {
  const params = route.params;

  console.log(params, "<<< params nih : DEFAULT undefined");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Text>ID: {params?.id} </Text>
      <CustomButton />
    </View>
  );
}

export default DetailScreen;
