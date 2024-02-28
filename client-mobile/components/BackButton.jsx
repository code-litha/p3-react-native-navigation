import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export default function BackButton() {
  const navigation = useNavigation();

  // console.log(navigation, "<<< navigation d back button");
  return (
    <Button
      title="Back Button Component"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}
