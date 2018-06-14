import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';


import styles from 'styles.js';


class DatiImmigrazioneScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
         <View  style={styles.container}> 
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('JsonEurostat')}> 
                <Text  style={{ fontSize: 24, fontWeight: 'bold',  color: '#ecf0f1', backgroundColor: '#2896F3', }}> Richiedenti asilo </Text>
              </TouchableOpacity>
        </View>
        <View style={{flex: .5, backgroundColor: '#b2fab4'}}>
          <Text style={styles.categorie}> Residenti per città </Text>
        </View>
      </View>
    );
  }
}

export default DatiImmigrazioneScreen;

