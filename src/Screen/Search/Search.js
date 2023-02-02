// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  View,
  AsyncStorage,
  Text,
  TouchableOpacity
} from 'react-native';

// import { Button } from 'react-native-paper';
import Colors from '../../styles/Colors';
import { styles } from './styles';

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>

      <View style={{ height: 50, backgroundColor: Colors.black, width: '70%', borderRadius: 15 }}></View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ backgroundColor: Colors.black, color: Colors.red, paddingHorizontal: 25,marginTop:10, paddingVertical: 10, borderRadius: 10 }}>
        <Text style={{ color: Colors.tabInactive, fontSize: 20 }}>{`Search`}</Text>
      </TouchableOpacity>
      {/* <Button style={{ backgroundColor: Colors.tabInactive, color: Colors.red }}
      title='Search'
      color={Colors.red}
      backgroundColor="red"
    /> */}
    </View >
  );
};
export default Search;
