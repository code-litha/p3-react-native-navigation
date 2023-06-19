import { View, Text, Button } from "react-native";
import BackButton from "../components/BackButton";

export default function Detail({ navigation, route }) {
  const params = route.params;

  console.log(params);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Detail Screen</Text>
      <Text>ID: {params?.id}</Text>
      <Text>Username: {params?.data?.name}</Text>
      {/* <BackButton /> */}
      <Button
        title="Go To Home"
        color={"green"}
        // onPress={() => navigation.push("Home")}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

/**
  navigation.push 
    Home -> Detail -> Home

  navigation.navigate
    Home -> Detail
 */
