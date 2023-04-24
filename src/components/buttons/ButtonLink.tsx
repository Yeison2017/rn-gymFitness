import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fontFamily, fontSizes } from "../../utils";

interface Props {
  title: string;
}

const ButtonLink = ({ title }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

export default ButtonLink;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 7,
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: fontFamily.textSemiBold,
    fontSize: fontSizes.xs,
  },
  line: {
    height: 3,
    backgroundColor: colors.primary,
    alignSelf: "stretch",
  },
});
