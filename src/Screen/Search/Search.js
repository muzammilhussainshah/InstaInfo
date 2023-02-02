// @app
import axios from 'axios';
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  View,
  AsyncStorage,
  Text,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { Button } from 'react-native-paper';
import Colors from '../../styles/Colors';
import { styles } from './styles';

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('itz_erum');
  // 'ahmedshah060'

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Image

        source={{ uri: `https://c4.wallpaperflare.com/wallpaper/338/727/578/technology-instagram-social-media-hd-wallpaper-preview.jpg` }}
        style={{ height: "100%", width: "100%", position: "absolute", zIndex: -2, opacity: .5 }}

      ></Image>

      <Text style={{
        fontSize: 25
        , position: 'absolute', zIndex: 2, top: '10%',
        width: "60%", fontWeight: '600', color: Colors.white, textAlign: 'center'
      }}>Search Instagram Information</Text>
      <View style={{
        height: 50,
        backgroundColor: Colors.white,
        justifyContent: 'space-evenly',
        alignItems: 'center', width: '70%', borderRadius: 15,
        flexDirection: 'row',
      }}>
        <AntDesign name="search1" size={20} color={Colors.black} style={{ marginHorizontal: 10 }} />
        <TextInput
          style={{ flex: 1, color: Colors.black }}
          placeholder="Enter User Name Here"
          placeholderTextColor={Colors.black}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          // 'muzammmil_shah'
          navigation.navigate('Profile', { searchQuery })
          console.log(searchQuery, 'searchQuerysearchQuery')
          // getInstaInfo(searchQuery)
        }}
        activeOpacity={0.9}
        style={{
          backgroundColor: 'rgba(0,0,0,.3)',
          borderWidth: 1,
          borderColor: Colors.white,
          color: Colors.white, paddingHorizontal: 25, marginTop: 10, paddingVertical: 10, borderRadius: 10,

        }}>
        {/* <AntDesign name="search1" size={20} color={Colors.tabInactive} /> */}
        <Text style={{ color: Colors.white, fontSize: 20 }}>{`Search`}</Text>
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
