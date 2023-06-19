import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation(); // hooks navigation digunakan jika memang ada component yang terlalu deep, dan sulit untuk mempasing navigation dari screen

  return (
    <Button
      title="Go Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}
