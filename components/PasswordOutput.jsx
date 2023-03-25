import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export default function PasswordOutput(props) {
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>PASSWORD:</Text>
      <Text style={styles.text}>{props.password}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItem: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: 20,
    color: "red",
  },
  text: {
    fontSize: 20,
  },
});
