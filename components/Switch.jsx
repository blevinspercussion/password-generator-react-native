import { StyleSheet } from "react-native";
import { View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

export default function Switch(props) {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <View style={{ backgroundColor: isActive ? "red" : "white" }}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text}>Include {props.switchName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInactive: {
    marginVertical: 10,
    backgroundColor: "white",
  },
  containerActive: {
    marginVertical: 10,
    backgroundColor: "red",
  },
  text: {
    fontSize: 20,
  },
});
