import { StyleSheet } from "react-native-web";
import { View, Text, TextInput } from "react-native";
import Slider from "@react-native-community/slider";

export default function (props, { handlePasswordLength }) {
  const handleSlider = (e) => {
    props.handlePasswordLength(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Enter Password Length Below</Text>
        <Text style={styles.text}>{props.passwordLength}</Text>
      </View>
      <TextInput keyboardType="number-pad" onChangeText={handleSlider} />
      {/* <input
        type="range"
        min={10}
        max={30}
        defaultValue={10}
        onChange={handleSlider}
      ></input> */}
      {/* <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={30}
        // onValueChange={handleSlider}
      ></Slider> */}
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
  },
  slider: {
    width: 200,
  },
  text: {
    fontSize: 20,
  },
});
