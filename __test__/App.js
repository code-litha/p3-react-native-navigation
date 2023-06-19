import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import MainStack from "./navigators/MainStack";
import TabNavigator from "./navigators/Tab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Rumah",
            headerTitleStyle: { color: "red" },
            // headerStyle: { backgroundColor: "pink" },
          }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator> */}
      {/* <MainStack /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
