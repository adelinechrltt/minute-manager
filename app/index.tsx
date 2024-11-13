import { ActivityIndicator, Text, View } from "react-native";
import { Provider } from "react-redux";
import * as Font from 'expo-font';


import store from "@/components/store/store.js";
import List from "@/components/List";
import { useEffect, useState } from "react";
import { SplashScreen } from "./screens/SplashScreenView";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const loadFonts = async () => {
  await Font.loadAsync({
    'Spectral-Medium': require("@/assets/fonts/spectral/Spectral-Medium.ttf"),

    'Livvic-Medium': require("@/assets/fonts/livvic/Livvic-Medium.ttf"),
    'Livvic-SemiBold': require("@/assets/fonts/livvic/Livvic-SemiBold.ttf"),
    'Livvic-Bold': require("@/assets/fonts/livvic/Livvic-Bold.ttf")
  });
};

export default function Index() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);

    const loadFontsAsync = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }


  return (
    <>
      {isShowSplash === true ? <SplashScreen></SplashScreen> : 
        <List type='done'/>
      }
    </>
  );
}
