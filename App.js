import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Switch from "./components/Switch";
import GenerateButton from "./components/GenerateButton";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Password Generator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
  },
});
