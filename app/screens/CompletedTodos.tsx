import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import List from "@/components/List";

export function CompletedTodos(){
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{
                backgroundColor: "#F7F2E9",
                flex: 1,
                paddingVertical: 40,
                paddingHorizontal: 20,
            }}>
                
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 18,
                    paddingHorizontal: 20
                }}>
                    <Image source={require("../../assets/images/Star4_Green.png")}/>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5
                    }}>
                        <Text style={{
                            fontFamily: "Spectral-Medium",
                            fontSize: 28,
                            color: "#FFF",
                            backgroundColor: "#8DB08A",
                            borderRadius: 20,
                            paddingHorizontal: 9,
                            textAlignVertical: "center"
                        }}>Completed</Text>
                        <Text style={{
                            fontFamily: "Livvic-SemiBold",
                            fontSize: 36,
                            color: "#114865"
                        }}>tasks</Text>
                    </View>
                </View>
                
                <List type="done"></List>
                
                {/* Button */}
                <TouchableOpacity style={{maxWidth: "50%", alignSelf: "center"}}>
                    <LinearGradient colors={["#2279AD", "#449DCF"]}
                    style={{
                        flexDirection: "row",
                        borderRadius: 12,
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10
                    }}>
                        <Image source={require("../../assets/images/WArrow_Left.png")}/>

                        <Text style={{
                            fontFamily: "Livvic-SemiBold",
                            fontSize: 13,
                            color: "#FFF"
                        }}>
                            View To-Do List
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}