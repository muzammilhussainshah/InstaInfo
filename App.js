
import React, { useState, useEffect } from 'react';
import axios from "axios";

import {
  SafeAreaProvider,

} from 'react-native-safe-area-context';
import Navigation from './src/router/Tab';
import { PortalProvider } from '@gorhom/portal';
// import store from './src/store';

// import { Provider } from 'react-redux';
import { LogBox, StatusBar, View } from 'react-native';
const cheerio = require('react-native-cheerio')

function App() {
  // useEffect(async () => {

  //   try {
  //     // const option = {
  //     //   method: 'GET',
  //     //   url: 'https://privatephotoviewer.com/usr/muzammil_shah',
  //     //   headers: { 
  //     //     'Content-Type': 'application/json;charset=utf-8'
  //     //   },
  //     // };
  //     // var resp = await axios(option);
  //     // console.log(resp.data,'resprespresp') 



  //     var config = {
  //       method: 'get',
  //       url: 'https://privatephotoviewer.com/usr/d',
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8'
  //       },
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         let resp = JSON.stringify(response.data);
  //         const $ = require('react-native-cheerio');
  //         let profileImage = $('img', resp)[0].attribs.src.slice(1)
  //         let profilePost = $('span', resp)[0].children[0].data;
  //         let profileFollower = $('span', resp)[1].children[0].data;
  //         let profileFollowing = $('span', resp)[2].children[0].data;
  //         let profileDesc = $('span', resp)[3].children[0].data;
  //         let profileName = $('h1', resp)[0].children[0].data.split('(')[0];
  //         console.log(profileName,'testing',);
  //         console.log(profileDesc,'profileDesc',);
  //         console.log(profileFollowing,'profileFollowing',);
  //         console.log(profileFollower,'profileFollower',);
  //         console.log(profilePost,'profilePost',);
  //         console.log(profileImage,'profileImage',);
  //         console.log(resp,'respresprespresp');
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         // No data found
  //       });

  //   }
  //   catch (err) {
  //     console.log(err, 'errerrerrerr')
  //         // No data found

  //   }




  //   LogBox.ignoreLogs(['Remote debugger']);
  // }, [])
  return (
    // <Provider store={store}>
      // <StatusBar
      //   hidden={true}
      // />
      <SafeAreaProvider>
        <PortalProvider>
          <Navigation />
        </PortalProvider>
      </SafeAreaProvider>
    // </Provider>
  );
}

export default App;
