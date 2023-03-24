import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import LengthSlider from "./components/LengthSlider";
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
  const [passwordLength, setPasswordLength] = useState(10);

  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  const numbers = "1234567890".split("");
  const special = "!@#$%^&*(){}/=?+,.<>".split("");

  const handleSwitches = (switchName, characterSwitch) => {
    setCharacterSwitches({
      ...characterSwitches,
      [switchName]: !characterSwitch,
    });
  };

  const handlePasswordLength = (sliderValue) => {
    setPasswordLength(sliderValue);
  };

  const handlePasswordGenerator = () => {};

  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Password Generator</Text>
      <LengthSlider
        handlePasswordLength={setPasswordLength}
        passwordLength={passwordLength}
      />
      <Switch
        switchName={"capital letters"}
        switch={characterSwitches.capital}
        handleSwitches={handleSwitches}
      />
      <Switch
        switchName={"lowercase letters"}
        switch={characterSwitches.lowercase}
        handleSwitches={handleSwitches}
      />
      <Switch
        switchName={"numbers"}
        switch={characterSwitches.numbers}
        handleSwitches={handleSwitches}
      />
      <Switch
        switchName={"special characters"}
        switch={characterSwitches.special}
        handleSwitches={handleSwitches}
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
