import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import User from "../components/User";

// const BASE_URL = "http://localhost:3000";
const BASE_URL =
  "https://1cc8-2001-448a-20a0-e0bb-2d4d-71fa-a537-b48c.ngrok-free.app";
export default function Home({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/users")
      .then(async (res) => {
        if (!res.ok) {
          throw await res.text();
        }

        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <User user={item} />}
        keyExtractor={(item) => item?.id}
        numColumns={2}
      />
      {/* <Text>Welcome to Home Screen</Text>
      <Button
        title="Go Detail"
        color={"red"}
        onPress={() =>
          navigation.navigate("Detail", {
            id: 2,
            data: { name: "React Native Navigation" },
          })
        }
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
