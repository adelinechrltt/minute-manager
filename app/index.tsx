import { ActivityIndicator, Text, View } from "react-native";
import { Provider } from "react-redux";
import * as Font from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from "@/components/store/store.js";
import List from "@/components/List";
import React, { useEffect, useState } from "react";


import { SplashScreen } from "./screens/SplashScreenView";
import { TaskCard } from "@/components/TaskCard";
import { MyTodos } from "./screens/MyTodos";
import { TodoDetails } from "./screens/TodoDetails";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
    <Provider store={store}>
      {isShowSplash === true ? <SplashScreen></SplashScreen> : 
        // app already created with router, so already wrapped with navcontainer
        // (npx create-expo-app@latest --with-router)

        // <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={MyTodos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Details"
              component={TodoDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        // </NavigationContainer>
        
      }
    </Provider>
  );
}
