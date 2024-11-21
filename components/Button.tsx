import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type ButtonProps = {type: string, onPress: () => void};
export function Button({type, onPress}: ButtonProps){
    return(
        <TouchableOpacity style={[styles.button,
            (type === 'add' || type === 'addCircled' || type === 'OK') ? {backgroundColor: '#8CB08A'} : null,
            (type === 'delete') && {backgroundColor: '#BB6F62'},
            (type === 'move') && {backgroundColor: '#449DCF'} 
        ]} onPress={onPress}>
            {(type==='add') && <Image source={require("../assets/images/Add.png")}/>}
            {(type==='addCircled') && <Image source={require("../assets/images/AddCircled.png")}/>}
            {(type==='delete') && <Image source={require("../assets/images/Delete_Large.png")}/>}
            {(type==='OK') && <Image source={require("../assets/images/OK.png")}/>}
            {(type==='move') && <Image source={require("../assets/images/Move.png")}/>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        minHeight: 50,
        flex: 1,
        minWidth: "40%",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    }
});