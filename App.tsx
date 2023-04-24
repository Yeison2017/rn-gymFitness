import { View } from "react-native";

import { LoginScreen } from "./src/screens";
import Provider from "./src/Provider";
import { useLoadFonts } from "./src/utils/hooks";

const App = () => {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider>
      <View onLayout={onLayoutRootView} />
      <LoginScreen />
    </Provider>
  );
};

export default App;
