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

const styles = {
  container: {
    alignItem: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
};
