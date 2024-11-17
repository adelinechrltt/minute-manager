import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { Button } from './Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    description: "asdasdasd",
    // date: '',
    priority: 'urgent',
    completed: false
  }
];

type ItemProps = {title: string, description: string, priority: string, id: string};
const Item = ({title, description, priority, id}: ItemProps) => {
  return (
    <View style={styles.item}>

      <TouchableOpacity>
          <Image source={require("../assets/images/Unchecked.png")}/>
      </TouchableOpacity>
      {
        priority === 'urgent' ? <Image source={require("../assets/images/Urgent.png")}/> :
          priority === 'important' ? <Image source={require("../assets/images/Important.png")}/> : <></>
      }
      <View style={{
        minWidth: "50%",
      }}>
        <Text style={{
          fontFamily: 'Livvic-SemiBold',
          fontSize: 16,
          color: '#1572A2'
        }}>{title}</Text>
        <Text style={{
          fontFamily: 'Livvic-SemiBold',
          fontSize: 16,
          color: '#646464'
        }}>{description}</Text>
      </View>


      <TouchableOpacity>
          <Image source={require("../assets/images/Delete_Small.png")}/>
      </TouchableOpacity>

    </View>
  )
};

// inset shadow not added!!

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
type ListProps = { type: string };
const List = ({type}: ListProps) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <LinearGradient style={styles.list} colors={type==='done' ? ['#83C0B9', '#BAD8B1', '#E5E2D8'] : ['#E5E2D8', '#9BC6E1', '#6397B6'] }>
          <FlatList
            data={DATA}
            renderItem={({item}) => 
              <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id})}>
                <Item title={item.title} description={item.description} priority={item.priority} id={item.id} />
              </TouchableOpacity>
              }
            keyExtractor={item => item.id}
          />
          <View style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 10,
            gap: 4
          }}>
            {type !== "done" && <Button type="add"/>}
            <Button type="delete"/>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    paddingHorizontal: 1,
    paddingVertical: 20,
    borderRadius: 30,
    elevation: 10,

    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    backgroundColor: '#F7F2E9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    
    minWidth: "90%",

    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  }
});

export default List;