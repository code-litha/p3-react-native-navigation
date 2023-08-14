import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
// import Detail from "../screens/Detail";
import { Ionicons } from "@expo/vector-icons";
import MainStack from "./MainStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "teal",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        // component={Home}
        component={MainStack} // nested navigator
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            const iconName = focused ? "ios-home" : "ios-home-outline";
            const colorIcon = focused ? "teal" : "grey";
            return <Ionicons name={iconName} size={size} color={colorIcon} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            const iconName = focused ? "ios-settings" : "ios-settings-outline";
            const colorIcon = focused ? "teal" : "grey";
            return <Ionicons name={iconName} size={size} color={colorIcon} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
