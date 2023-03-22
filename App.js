import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Switch from "./components/Switch";
import GenerateButton from "./components/GenerateButton";

export default function App() {
  const [password, setPassword] = useState("");
  const [characterSwitches, setCharacterSwitches] = useState({
    capital: false,
    lowercase: false,
    numbers: false,
    special: false,
  });
  const [characters, setCharacters] = useState([]);

  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  const numbers = "1234567890".split("");
  const special = "!@#$%^&*(){}/=?+,.<>".split("");

  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Password Generator</Text>
      <Switch
        switchName={"capital letters"}
        switch={characterSwitches.capital}
      />
      <Switch
        switchName={"lowercase letters"}
        switch={characterSwitches.lowercase}
      />
      <Switch switchName={"numbers"} switch={characterSwitches.numbers} />
      <Switch
        switchName={"special characters"}
        switch={characterSwitches.special}
      />
      <GenerateButton />
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
    fontSize: 35,
  },
});
