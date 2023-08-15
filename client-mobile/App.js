import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigators/MainStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "grey",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Dashboard"
          // component={HomeScreen}
          component={MainStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused ? "home" : "home-outline";
              const iconColor = focused ? "red" : "grey";
              return <Ionicons name={iconName} color={iconColor} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused ? "settings" : "settings-outline";
              const iconColor = focused ? "red" : "grey";

              return <Ionicons name={iconName} color={iconColor} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    // <SafeAreaProvider>
    //   <SafeAreaView style={styles.container}>
    //     <Text style={[styles.header, styles.textBlue, { color: "green" }]}>
    //       Hacktiv8 Phase 3 - React Native
    //     </Text>
    //     {/* <button>
    //       <Text>Click Me</Text>
    //     </button> */}
    //     <Button
    //       title="Click Me"
    //       onPress={(event) => {
    //         console.log("button di klik nih");
    //         // console.log(event);
    //       }}
    //     />
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  textRed: {
    color: "red",
  },
  textBlue: {
    color: "blue",
  },
});
