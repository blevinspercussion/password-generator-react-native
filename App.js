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

  const handleSwitches = (switchName, characterSwitch) => {
    setCharacterSwitches({
      ...characterSwitches,
      [switchName]: !characterSwitch,
    });
  };

  const handlePasswordLength = (sliderValue) => {
    setPasswordLength(sliderValue);
  };

  const handlePasswordGenerator = () => {
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    const numbers = "1234567890".split("");
    const special = "!@#$%^&*(){}/=?+,.<>".split("");
    let characters = [];
    let newPassword = "";
    if (characterSwitches.capital === true) {
      characters = characters.concat(capitalLetters);
    }
    if (characterSwitches.lowercase === true) {
      characters = characters.concat(lowercaseLetters);
    }
    if (characterSwitches.numbers === true) {
      characters = characters.concat(numbers);
    }
    if (characterSwitches.special === true) {
      characters = characters.concat(special);
    }

    for (let i = 0; i < passwordLength; i++) {
      let randomCharacter =
        characters[Math.floor(Math.random() * characters.length)];
      newPassword += randomCharacter;
    }
    setPassword(newPassword);
    console.log(characters);
    console.log(characterSwitches);
    console.log(newPassword);
    console.log(password);
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Password Generator</Text>
      <LengthSlider
        handlePasswordLength={handlePasswordLength}
        passwordLength={passwordLength}
      />
      <Switch
        switchName={"capital letters"}
        switch={"capital"}
        switchValue={characterSwitches.capital}
        handleSwitches={handleSwitches}
      />
      <Switch
        switchName={"lowercase letters"}
        switch={"lowercase"}
        switchValue={characterSwitches.lowercase}
        handleSwitches={handleSwitches}
      />
      <Switch
        switchName={"numbers"}
        switch={"numbers"}
        switchValue={characterSwitches.numbers}
        handleSwitches={handleSwitches}
      />
      <Switch
        switchName={"special characters"}
        switch={"special"}
        switchValue={characterSwitches.special}
        handleSwitches={handleSwitches}
      />
      <GenerateButton handlePasswordGenerator={handlePasswordGenerator} />
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
