import { StyleSheet } from "react-native-web";
import { View, Text } from "react-native";

export default function (props, { handlePasswordLength }) {
  const handleSlider = (e) => {
    props.handlePasswordLength(e.target.value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Password Length: </Text>
        <Text style={styles.text}>{props.passwordLength}</Text>
      </View>
      <input
        type="range"
        min={10}
        max={30}
        defaultValue={10}
        onChange={handleSlider}
      ></input>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
  },
});
