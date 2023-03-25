import { StyleSheet } from "react-native";
import { View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

export default function Switch(props, { handleSwitches }) {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
    props.handleSwitches(props.switch, props.switchValue);
  };

  return (
    <View
      style={{
        backgroundColor: isActive ? "red" : "white",
        marginVertical: 10,
        padding: 3,
        borderWidth: 2,
        borderColor: "black",
      }}
    >
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text}>Include {props.switchName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
  },
});
