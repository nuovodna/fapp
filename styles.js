'use strict';

import React from 'react';
import { Text , StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';


//const styles = StyleSheet.create({
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
//    fontFamily: "vincHand",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  titolo: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    paddingTop: Constants.statusBarHeight,
    fontFamily: 'Roboto',
  },
  categorie: {
    margin: 24,
    fontSize: 48,
    fontWeight: '900',
    textAlign: 'center',
    textShadowColor: 'grey',
    textShadowOffset : {width: 3,height: 2},
    textShadowRadius: 5,
    color: '#34495e',
    paddingTop: Constants.statusBarHeight,
  },
});


export default styles;