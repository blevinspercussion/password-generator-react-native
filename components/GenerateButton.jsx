import { StyleSheet } from "react-native";
import { View, TouchableOpacity, Text } from "react-native";

export default function GenerateButton(props, { handlePasswordGenerator }) {
  const buttonHandler = () => {
    props.handlePasswordGenerator();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={buttonHandler}>
        <Text style={styles.text}>Generate Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#4a524c",
  },
});
