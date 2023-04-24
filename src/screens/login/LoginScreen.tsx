import { StyleSheet } from "react-native";

import { HeaderNav } from "./components";
import { SafeViewLayout } from "../../components";

const LoginScreen = () => {
  return (
    <SafeViewLayout>
      <HeaderNav />
    </SafeViewLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
