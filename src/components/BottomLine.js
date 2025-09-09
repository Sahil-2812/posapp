import { View, StyleSheet } from "react-native";

const BottomLine = ({ bottom = 20, width = 134, height = 3.53, color = "#09111F" }) => {
  return <View style={[styles.line, { bottom, width, height, backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  line: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 100,
    opacity: 1,
  },
});

export default BottomLine;