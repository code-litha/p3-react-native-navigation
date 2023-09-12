import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingScreen";
import { Ionicons } from "@expo/vector-icons";
import MainStack from "./MainStack";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: "red", tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Dashboard"
        component={MainStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="home"
                color={focused ? "red" : "grey"}
                size={size}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={"settings"}
                color={focused ? "red" : "grey"}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
