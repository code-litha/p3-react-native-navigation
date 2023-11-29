import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "pink",
        },
        headerTintColor: "red",
      }}
    >
      <Stack.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          headerTitle: "Rumah",
          // headerShown: false,
          headerTintColor: "blue",
        }}
      />
      <Stack.Screen
        name={"Detail"}
        component={DetailScreen}
        options={
          {
            // headerStyle: {
            //   backgroundColor: "pink",
            // },
            // headerTintColor: "red",
          }
        }
      />
    </Stack.Navigator>
  );
}

export default MainStack;
