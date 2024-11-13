import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export function SplashScreen(){
    return (
        <LinearGradient colors={['#F3EBDB', '#F2EBDD', '#EAF0EE', '#E6F2F5', '#E1F5FF']}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container} className="align-center">
                    <img style={styles.img} src="../../../assets/images/SplashScreenStar.png"/>
                    <h1 style={{
                      lineHeight: '140%',
                      padding: 20,
                      textAlign: 'center'
                    }}><span style={styles.minuteStyling}>minute</span><br/><span style={styles.managerStyling}>manager</span></h1>
                </SafeAreaView>
            </SafeAreaProvider>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    height: "100%",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8
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
  img: {
    maxWidth: "15%",
  }, 
  minuteStyling: {
    fontFamily: 'Livvic-SemiBold',
    fontSize: 36,
    color: '#449DCF'
  },
  managerStyling: {
    fontFamily: 'Spectral-Medium',
    fontSize: 36,
    color: '#114865'
  }
});