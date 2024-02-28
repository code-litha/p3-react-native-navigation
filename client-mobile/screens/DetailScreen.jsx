import { Button, Text, View } from "react-native";
import BackButton from "../components/BackButton";

export default function DetailScreen({ route, navigation }) {
  const params = route.params;
  console.log(params, "<<< params");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen with ID: {params?.id}</Text>
      <Button
        title="Go Home"
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
      />
      <BackButton />
    </View>
  );
}
