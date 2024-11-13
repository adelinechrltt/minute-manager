import { View, Text, StyleSheet } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function SplashScreen(){
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} className="align-center">
            <LinearGradient style={{
              flex: 1, 
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              gap: 50,
              }} colors={['#F3EBDB', '#F2EBDD', '#EAF0EE', '#E6F2F5', '#E1F5FF']}>
                <Image source={require("../../assets/images/SplashScreenStar.png")}/>
                <View>
                  <Text style={styles.minuteStyling}>minute</Text><Text style={styles.managerStyling}>manager</Text>    
                </View>
            </LinearGradient>
        </SafeAreaView>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  minuteStyling: {
    fontFamily: 'Livvic-SemiBold',
    fontSize: 36,
    color: '#449DCF',
    textAlign: 'center'
    // backgroundColor: "red"
  },
  managerStyling: {
    fontFamily: 'Spectral-Medium',
    fontSize: 36,
    color: '#114865',
    lineHeight: 40,
    textAlign: 'center'
    // backgroundColor: "green"
  }
});