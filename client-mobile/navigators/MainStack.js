import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "blue",
        // headerShown: false,
      }}
    >
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        initialParams={{ id: 0, data: {} }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Overview", headerTintColor: "red" }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
