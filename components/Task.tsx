import { View, Text, StyleSheet, TouchableOpacity, Touchable } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "./Button";

export function Task() {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: "blue"}}>
                <View style={styles.container}>
                    
                    {/* header */}
                    <View style={styles.header}>
                        
                        <View style={styles.taskTitle}>
                            <View style={{
                                alignItems: "center"
                            }}>
                                <Image source={require(("../assets/images/Urgent.png"))}/>
                                <Text style={{
                                    fontFamily: "Livvic-SemiBold",
                                    fontSize: 7,
                                    color: "#FFF",
                                    backgroundColor: "#C17264",
                                    borderRadius: 20,
                                    paddingHorizontal: 5,
                                    paddingVertical: 1
                                }}>Urgent</Text>
                            </View>
                            <Text style={{
                                fontFamily: "Livvic-Bold",
                                fontSize: 16,
                                color: "#1572A2"
                            }}>Title</Text>
                        </View>
                        
                        <TouchableOpacity style={{
                            flex: 0.3,
                            alignItems: "center",
                            justifyContent: "center"}}>
                            <Image source={require("../assets/images/Edit.png")}/>
                        </TouchableOpacity>
                    </View>

                    {/* body */}
                    <View style={styles.body}>
                        <View style={styles.textBody}>
                            <TouchableOpacity style={styles.inlineText}>
                                <Image source={require("../assets/images/Calendar.png")}/>
                                <Text style={styles.touchableText}>Date added: </Text>
                            </TouchableOpacity>
                            <Text style={{
                                fontFamily: "Livvic-Medium",
                                fontSize: 14,
                                color: "#646464"
                            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, distinctio.</Text>
                            <TouchableOpacity style={{...styles.inlineText, justifyContent: "flex-end"}}>
                                <Text style={styles.touchableText}>Edit description</Text>
                                <Image source={require("../assets/images/Edit_Small.png")}/>
                            </TouchableOpacity>
                        </View>
                        
                        
                        <View style={styles.buttons}>
                            <Button type="OK"/>
                            <Button type="delete"/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: "#E7E3DC",

        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        justifyContent: "center",

        margin: 15,
        padding: 15,
        borderRadius: 20,
        
        gap: 8
    }, 
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    taskTitle: {
        backgroundColor: "#F7F2E9",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        
        borderRadius: 8,
        padding: 10,
        gap: 15
    },
    body: {
        backgroundColor: "#F7F2E9",
        flexDirection: "column",
        borderRadius: 8,
        padding: 10,
        gap: 15
    },
    textBody: {
        gap: 10
    },
    inlineText: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4
    },
    touchableText: {
        fontFamily: "Livvic-Bold",
        fontSize: 14,
        color: "#B2AFA9"
    },
    buttons: {
        flexDirection: "row",
        gap: 10,
    }    
})