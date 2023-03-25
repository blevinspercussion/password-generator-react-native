import { StyleSheet } from "react-native-web";
import { View, Text, TextInput } from "react-native";

export default function (props, { handlePasswordLength }) {
  const handleSlider = (e) => {
    props.handlePasswordLength(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Enter Password Length Below</Text>
      </View>
      <TextInput
        style={styles.passwordLengthInput}
        keyboardType="number-pad"
        onChangeText={handleSlider}
        defaultValue={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  passwordLengthInput: {
    backgroundColor: "grey",
    borderWidth: 2,
    borderColor: "black",
    width: 25,
  },
  slider: {
    borderWitth: 2,
    borderColor: "black",
  },
  text: {
    fontSize: 20,
  },
});
