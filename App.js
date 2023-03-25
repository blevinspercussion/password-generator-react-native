import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import LengthSlider from "./components/LengthSlider";
import Switch from "./components/Switch";
import GenerateButton from "./components/GenerateButton";
import PasswordOutput from "./components/PasswordOutput";

export default function App() {
  const [password, setPassword] = useState("");
  const [characterSwitches, setCharacterSwitches] = useState({
    capital: false,
    lowercase: false,
    numbers: false,
    special: false,
  });
  const [passwordLength, setPasswordLength] = useState(10);
  const [lengthError, setLengthError] = useState(false);
  const [switchError, setSwitchError] = useState(false);

  let switchErrorMessage = "";
  let lengthErrorMessage = "";

  const handleErrorMessages = () => {
    if (switchError) {
      switchErrorMessage =
        "Must select at least one option from the choices above.";
    }

    if (lengthError) {
      console.log("inside length error");
    }
  };

  const handleSwitches = (switchName, characterSwitch) => {
    setCharacterSwitches({
      ...characterSwitches,
      [switchName]: !characterSwitch,
    });
  };

  const handlePasswordLength = (e) => {
    setPasswordLength(e);
  };

  const handlePasswordGenerator = () => {
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    const numbers = "1234567890".split("");
    const special = "!@#$%^&*(){}/=?+,.<>".split("");
    let characters = [];
    let newPassword = "";
    setSwitchError(false);
    setLengthError(false);
    if (Object.values(characterSwitches).every((v) => v === false)) {
      setSwitchError(true);
      handleErrorMessages();
    } else {
      setSwitchError(false);
    }
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

    if (passwordLength < 10 || passwordLength > 30) {
      setLengthError(true);
      handleErrorMessages();
      return;
    }

    for (let i = 0; i < passwordLength; i++) {
      let randomCharacter =
        characters[Math.floor(Math.random() * characters.length)];
      if (randomCharacter === undefined) {
        setSwitchError(true);
        handleErrorMessages();
        break;
      }

      newPassword += randomCharacter;
    }
    setPassword(newPassword);
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
      <PasswordOutput
        password={password}
        lengthError={lengthError}
        switchError={switchError}
      />
      <View>
        <Text style={styles.errorText}>
          {switchError
            ? "You must choose at least one option from the choices above"
            : ""}
        </Text>
        <Text style={styles.errorText}>
          {lengthError ? "You must choose a length between 10 and 30" : ""}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: 25,
    color: "red",
    textAlign: "center",
  },
  title: {
    fontSize: 35,
  },
});
