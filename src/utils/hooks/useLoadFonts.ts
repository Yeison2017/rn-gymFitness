import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { FONT, generateObjectFonts } from "../../utils";
import { IFont } from "../../interfaces";

SplashScreen.preventAutoHideAsync();

export const useLoadFonts = () => {
  const objectFonts: IFont = generateObjectFonts<IFont>(FONT);

  const [fontsLoaded] = useFonts({ ...objectFonts });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
};
