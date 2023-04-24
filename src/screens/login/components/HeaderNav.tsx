import { View, StyleSheet } from "react-native";
import React from "react";
import { ButtonLink } from "../../../components";

const HeaderNav = () => {
  return (
    <View style={styles.container}>
      <ButtonLink title="Login" />
      <ButtonLink title="Sign up" />
    </View>
  );
};

export default HeaderNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    marginTop: 58,
    marginLeft: 32,
  },
});
