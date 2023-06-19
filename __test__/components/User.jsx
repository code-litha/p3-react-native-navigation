import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function User({ user }) {
  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate("Detail", { id: user?.id, data: user });
  };
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "red",
        margin: 15,
        // alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center" }}
        onPress={goDetail}
      >
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 50, height: 50 }}
        />
        <Text>{user?.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
