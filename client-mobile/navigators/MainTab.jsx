import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MainStack from "./MainStack";
import SettingsScreen from "../screens/SettingScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: "blue",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={"Dashboard"}
        // component={HomeScreen}
        component={MainStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} color={color} size={size} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Setting"}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "settings" : "settings-outline";

            return <Ionicons name={iconName} color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
