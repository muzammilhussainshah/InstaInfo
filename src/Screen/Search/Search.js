// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  View,
  AsyncStorage,
  Text
} from 'react-native';
import Colors from '../../styles/Colors';
import { styles } from './styles';


const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>{`Search`}</Text>
      <View style={{ height: 50, backgroundColor: Colors.tabInactive, width: '70%', borderRadius: 15 }}></View>
    </View >
  );
};
export default Search;
