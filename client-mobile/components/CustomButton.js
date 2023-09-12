import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

function CustomButton() {
  const navigation = useNavigation();

  const onPressBtn = () => {
    console.log("button di press");
    navigation.navigate("Home");
  };

  return <Button title="Click Me dong !" onPress={onPressBtn} />;
}

export default CustomButton;
