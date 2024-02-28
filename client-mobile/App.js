import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigations/MainStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <MainStack /> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Setting") {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name={"Home"} component={MainStack} />
        <Tab.Screen name={"Setting"} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
