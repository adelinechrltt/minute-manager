import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description: "asdasdasd"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    description: "asdasdasd"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    description: "asdasdasd"
  },
  {
    id: 'a',
    title: 'Third Item',
    description: "asdasdasd"
  },
  {
    id: 'b',
    title: 'Third Item',
    description: "asdasdasd"
  },
  {
    id: 'c',
    title: 'Third Item',
    description: "asdasdasd"
  },
  {
    id: 'd',
    title: 'Third Item',
    description: "asdasdasd"
  },
  {
    id: 'c',
    title: 'Third Item',
    description: "asdasdasd"
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const List = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => alert('Pressed!')}>
            <Item title={item.title} />
          </TouchableOpacity>
          }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Spectral-Medium',
  },
});

export default List;