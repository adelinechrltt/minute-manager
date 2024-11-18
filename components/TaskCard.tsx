import { View, Text, StyleSheet, TouchableOpacity, Touchable } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "./Button";

type ItemProps = {id: string, title: string, description: string, priority: string, completed: boolean};
  
export function TaskCard({
    id, 
    type = "",
    title = "Sample Task",
    description = "This is a sample description for testing.",
    priority = "Urgent",
    completed
}: { type: string } & ItemProps) {
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    
                    {/* header */}
                    <View style={styles.header}>
                        
                        <View style={styles.taskTitle}>
                            {/* urgency icon */}
                            <View style={{
                                alignItems: "center"
                            }}>
                                {priority==='Urgent' && <Image source={require(("../assets/images/Urgent.png"))}/>}
                                {priority==='Important' && <Image source={require(("../assets/images/Important.png"))}/>}
                                {priority==='Done' && <Image source={require(("../assets/images/Done.png"))}/>}
                                {priority==='Urgency' && <Image source={require(("../assets/images/Unknown.png"))}/>}
                                {priority !== "Done" &&
                                    <Text style={[styles.urgency,
                                        priority==="Urgent" && {backgroundColor: "#C17264"},
                                        priority==="Important" && {backgroundColor: "#EDB64A"},
                                        priority==="Urgency" && {backgroundColor: "#C4C0BA"},
                                    ]}>{priority}</Text>
                                }
                            </View>

                            <Text style={[styles.titleText, 
                                {color: "#1572A2"},
                                priority === "Done" && {color: "#25877F"}
                            ]
                            }>{title}</Text>
                        </View>
                        
                        {priority!=='Done' && 
                            <TouchableOpacity style={{
                                flex: 0.3,
                                alignItems: "center",
                                justifyContent: "center"}}>
                                <Image source={require("../assets/images/Edit.png")}/>
                            </TouchableOpacity>
                        }
                    </View>

                    {/* body */}
                    <View style={styles.body}>
                        <View style={styles.textBody}>
                            
                            {/* <View style={{gap: 3}}>
                                <TouchableOpacity style={styles.inlineText}>
                                    <Image source={require("../assets/images/Calendar.png")}/>
                                    <Text style={styles.touchableText}>Date added: </Text>
                                </TouchableOpacity>

                                <View style={styles.inlineText}>
                                    <Image source={require("../assets/images/Star.png")}/>
                                    <Text style={[styles.touchableText, {color: "#8CB08A"}]}>Date completed: </Text>
                                </View>
                            </View> */}

                            <Text style={{
                                fontFamily: "Livvic-Medium",
                                fontSize: 14,
                                color: "#646464"
                            }}>{description}</Text>
                            <TouchableOpacity style={{...styles.inlineText, justifyContent: "flex-end"}}>
                                <Text style={styles.touchableText}>Edit description</Text>
                                <Image source={require("../assets/images/Edit_Small.png")}/>
                            </TouchableOpacity>
                        </View>
                        
                        {type === "New" ? 
                            <View style={styles.buttons}>
                                <Button type="addCircled"/>
                            </View>
                         :
                            
                            <View style={styles.buttons}>
                                {priority!=="Done" && <Button type="OK"/>}
                                {priority==="Done" && <Button type="move"/>}
                                <Button type="delete"/>
                            </View>
                        }
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
        padding: 2,
        borderRadius: 20,
        
        gap: 8,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        elevation: 4
    }, 
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 10
    },
    taskTitle: {
        backgroundColor: "#F7F2E9",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        minHeight: 55,
        
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 15,
        gap: 15
    },
    titleText: {
        fontFamily: "Livvic-Bold",
        fontSize: 16,
    },
    urgency: {
        fontFamily: "Livvic-SemiBold",
        fontSize: 7,
        color: "#FFF",
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 1 
    }, 
    body: {
        minWidth: "94%",
        backgroundColor: "#F7F2E9",
        flexDirection: "column",
        borderRadius: 8,
        margin: 1,
        marginBottom: 10,
        padding: 10,
        gap: 15,
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
        justifyContent: "space-evenly",
        gap: 5,
    }    
})