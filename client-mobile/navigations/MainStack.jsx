import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTintColor: "red",
      }}
    >
      <Stack.Screen name={"Detail"} component={DetailScreen} />
      <Stack.Screen
        name={"Dashboard"}
        component={HomeScreen}
        options={{
          headerTintColor: "blue",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
