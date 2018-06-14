import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Font } from 'expo';
import { Constants } from 'expo';
import { ImageBackground } from 'react-native';
import { AppRegistry, Image, TouchableOpacity } from 'react-native';
const Platform = require('Platform');
import { createStackNavigator } from 'react-navigation';
import { FlatList, ActivityIndicator } from 'react-native';

('use strict');
//import { Button, Card } from 'react-native-material-design';
import { Button, Card } from 'react-native';

const ColorPropType = require('ColorPropType');

import styles from 'styles.js';

// You can import from local files
//import AssetExample from './components/AssetExample'; import { Button, Card } from 'react-native-material-design';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // Version can be specified in package.json

class HomeScreen extends Component {
  render() {
    let pic = {
      uri: 'https://www.repstatic.it/content/nazionale/img/2018/06/13/130658049-b5c916f6-d98d-4694-abf9-bd6ece6073db.jpg',
    };
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.titolo}> Benvenuto in FApp </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('InizialeImmigrazione')}>
          <Text style={{ fontSize: 45, color: '#2196F3', }}> Immigrazione </Text>
        </TouchableOpacity>
        {/*<ImageBackground source={pic} style={{width: '100%', height: '100%'}}> </ImageBackground>*/}
        {/*<Text style={styles.categorie}>Immigrazione</Text>*/}
        {/*
         <Image source={pic} style={{width: 193, height: 110}} /> 
          style={{styles.container, flex:1}}
         */}
        <View style={{ flex: 0.5, backgroundColor: '#8bf6ff' }}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('InizialeEconomia')}>
              <Text
                style={{
                  fontSize: 70,
                  fontWeight: 'bold',
                  color: 'black',
                  backgroundColor: 'yellow',
                }}>
                {' '}Economia{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 0.5, backgroundColor: '#b2fab4' }}>
          <Text style={styles.categorie}>Ambiente</Text>
        </View>
        <View style={{ flex: 0.5, backgroundColor: '#ff94c2' }}>
          <Text style={styles.categorie}>Diritti civili</Text>
        </View>
      </View>
    );
  }
}

import InizialeImmigrazioneScreen from './components/immigrazione/iniziale';
import DatiImmigrazioneScreen from './components/immigrazione/dati';

import InizialeEconomiaScreen from './components/economia/iniziale';
import DatiEconomiaScreen from './components/economia/dati';

class JsonEurostatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    InizialeImmigrazione: InizialeImmigrazioneScreen,
    DatiImmigrazione: DatiImmigrazioneScreen,
    InizialeEconomia: InizialeEconomiaScreen,
    DatiEconomia: DatiEconomiaScreen,
    JsonEurostat: JsonEurostatScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'vincHand': require('./assets/fonts/VINCHAND.ttf'),
    });
  }
  render() {
    return <RootStack />;
  }
}
