import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Dimensions} from 'react-native';

import { useState } from "react";
import { TaskCard } from "@/components/TaskCard";
import { RouteProp } from "@react-navigation/native";
import { selectTaskById } from "@/components/store/reducers/todoReducer";
import { useSelector } from "react-redux";

type DetailsScreenProps = {
    route: RouteProp<RootStackParamList, 'Details'>;
};


export function TodoDetails( { route }: DetailsScreenProps ){
    const windowHeight = Dimensions.get('window').height;

    const { id } = route.params;
    const selectedTask = useSelector(state => selectTaskById(state, id));

    return(
        <SafeAreaProvider>
            <ImageBackground source={selectedTask.priority!=="Done" ? require("../../assets/images/DetailsBG_Complete.png") : require("../../assets/images/DetailsBG_Incomplete.png")} style={{flex: 1}}>
                <SafeAreaView style={{
                    display: "flex",
                    flex: 1,
                    paddingVertical: (windowHeight/4),
                    paddingHorizontal: 20,
                    gap: 15,
                    alignContent: "center"
                }}>
                        
                    {/* Heading */}
                    { selectedTask.priority!=="Done" ? <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 18,
                        paddingHorizontal: 20
                    }}>
                        
                        <Image source={require("../../assets/images/Star4_Blue.png")}/>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5
                        }}>
                            <Text style={{
                                fontFamily: "Spectral-Medium",
                                fontSize: 28,
                                color: "#FFF",
                                backgroundColor: "#449DCF",
                                borderRadius: 20,
                                paddingHorizontal: 9,
                                paddingVertical: 5,
                                textAlignVertical: "center"
                            }}>Task</Text>
                            <Text style={{
                                fontFamily: "Livvic-SemiBold",
                                fontSize: 36,
                                color: "#114865"
                            }}>overview.</Text>
                        </View>
                    </View>
                    : 
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
                                paddingVertical: 5,
                                textAlignVertical: "center"
                            }}>Task</Text>
                            <Text style={{
                                fontFamily: "Livvic-SemiBold",
                                fontSize: 36,
                                color: "#114865"
                            }}>overview.</Text>
                        </View>
                    </View>}
                    
                    <TaskCard
                        id={selectedTask.id}
                        title={selectedTask.title}
                        description={selectedTask.description}
                        priority={selectedTask.priority} type={""}/>

                </SafeAreaView>
            </ImageBackground>
        </SafeAreaProvider>
    )
}