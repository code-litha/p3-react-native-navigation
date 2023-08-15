import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

function CustomButton() {
  const navigation = useNavigation();

  return (
    <Button
      title={"Custom Button"}
      onPress={() => {
        console.log("pindah ke home");
        navigation.navigate("Home");
      }}
    />
  );
}

export default CustomButton;
