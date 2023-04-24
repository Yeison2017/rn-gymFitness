import { View, StyleSheet } from "react-native";
import { colors } from "../../utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

const SafeViewLayout = ({ children }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      {children}
    </View>
  );
};

export default SafeViewLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
