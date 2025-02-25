import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {

  teamA(){
   db.ref('/').update({
     'teamA':1
   })
 }

 teamB(){
   console.log(db);
   db.ref('/').update({
     'teamB':2
   })
 }

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center',fontSize:25 }}>Vote Aqui</Text>
            <TouchableOpacity
              style={styles.buttonA}
              onPress ={this.teamA()}>
              <Text style={{ fontSize:20}}>Equipe A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonB}
              onPress ={this.teamB()}>
              <Text style={{ fontSize:20}}>Equipe B</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttonA: {
    backgroundColor:"red",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin:10,
    width: 200,
    height: 100,
  },

    buttonB: {
    backgroundColor:"green",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin:10,
    width: 200,
    height: 100,
  },

  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
