import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export function SplashScreen(){
    return (
        <LinearGradient colors={['#F3EBDB', '#F2EBDD', '#EAF0EE', '#E6F2F5', '#E1F5FF']}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container} className="align-center">
                    <img style={styles.img} src="../../../assets/images/SplashScreenStar.png"/>
                </SafeAreaView>
            </SafeAreaProvider>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    height: "100%"
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
  }
});