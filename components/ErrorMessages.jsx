import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function ErrorMessages(props) {
  return (
    <View>
      <View>
        {props.switchErrorMessage}
        {props.lengthErrorMessage}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  errorContainer: {},
  errorText: {
    color: "red",
    fontSize: 25,
  },
});
