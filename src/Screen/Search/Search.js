// @app
import React from 'react';
import {

  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../styles/Colors';
import { styles } from './styles';

const Search = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Image source={{ uri: `https://c4.wallpaperflare.com/wallpaper/338/727/578/technology-instagram-social-media-hd-wallpaper-preview.jpg` }} style={styles.bgImg} />

      <Text style={styles.heading}>Search Instagram Information</Text>

      <View style={styles.inputContainer}>
        <AntDesign
          name="search1"
          size={20}
          color={Colors.black}
          style={{ marginHorizontal: 10 }} />

        <TextInput
          style={{ flex: 1, color: Colors.black }}
          placeholder="Enter User Name Here"
          placeholderTextColor={Colors.black}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <TouchableOpacity
        disabled={searchQuery.length > 0 ? false : true}
        onPress={() => { navigation.navigate('Profile', { searchQuery }) }}
        activeOpacity={0.7}
        style={styles.searchContainer}>
        <Text style={styles.searchText}>{`Search`}</Text>
      </TouchableOpacity>

    </View >
  );
};
export default Search;
