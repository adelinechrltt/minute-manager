import { ActivityIndicator, Text, View } from "react-native";
import { Provider } from "react-redux";
import * as Font from 'expo-font';

import store from "@/components/store/store.js";
import List from "@/components/List";
import { useEffect, useState } from "react";

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

  useEffect(() => {
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
    <Provider store={store}>
      
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <List></List>
      </View>
    
    </Provider>
  );
}