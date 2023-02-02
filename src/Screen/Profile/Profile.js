// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  View,
} from 'react-native';

import axios from 'axios';

import { styles } from './styles';
import {
  InformationContainer,
  Loader,
  NoDataMessage,
  ProfileSection,
  StatusSection
} from './Components/Component';

const Profile = ({ route,navigation }) => {

  const [profileInfo, setProfileInfo] = useState(`No Data Found`)
  const [loader, setloader] = useState(false)

  useEffect(() => {
    if (route.params.searchQuery.length > 0) getInstaInfo(route.params.searchQuery)
    else alert('No Data Found')
  }, [])

  function getInstaInfo(userName) {
    try {
      setloader(true)
      var config = {
        method: 'get',
        url: `https://privatephotoviewer.com/usr/${userName}`,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      };

      axios(config)
        .then(function (response) {
          let resp = JSON.stringify(response.data);
          const $ = require('react-native-cheerio');
          let profileImage = $('img', resp)[0].attribs.src.slice(2, $('img', resp)[0].attribs.src.length - 2)
          let profilePost = $('span', resp)[0].children[0].data;
          let profileFollower = $('span', resp)[1].children[0].data;
          let profileFollowing = $('span', resp)[2].children[0].data;
          let profileDesc = $('span', resp)[3].children[0].data;
          let profileName = $('h1', resp)[0].children[0].data.split('(')[0];
          let profileData = { profileName, profileDesc: profileDesc.replaceAll('\\n', ''), profileFollowing, profileFollower, profilePost, profileImage }
          console.log(profileData,'profileData',profileImage,resp)
          setProfileInfo(profileData)
          setloader(false)
        })
        .catch(function (error) {
      console.log(error,'err profileData')

          setProfileInfo('No Data Found')
          setloader(false)
        });

    }
    catch (err) {
      console.log(err,'err profileData')

      setloader(false)
      setProfileInfo('No Data Found')
    }
  }

  return (
    <View style={styles.container}>

      {loader && <Loader />}

      {profileInfo !== 'No Data Found' ?
        <>
          <View style={styles.profileSection}>
            <ProfileSection   {...profileInfo} />
          </View>

          <View style={styles.statusContainer}>
            <StatusSection {...profileInfo} />
          </View>
          <View style={{ flex: 7, }}>
            <InformationContainer  {...profileInfo} navigation={navigation} />
          </View>
        </>
        :
        <NoDataMessage loader={loader} navigation={navigation} />
      }
    </View>
  );
};
export default Profile;
