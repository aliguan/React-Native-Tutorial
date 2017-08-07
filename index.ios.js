/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState( previousState => {
                return { showText: !previousState.showText };
            });
        }, 500);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={styles.red}>{ display }</Text>
        )
    }
}

class SayHello extends Component {
    render() {
        return (
            <Text> Hello {this.props.name}</Text>
        );
    }
}

export default class HelloWorld extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
       Hello World
      </Text>
      <Image source={pic} style= {{width: 193, height: 110}}/>

      <SayHello name='Alice'/>

      <Blink text='Hi! Im Blinking'/>
      <View style={{ flex: 2, backgroundColor: 'powderblue'}}/>
      <View style={{ flex: 2, backgroundColor: 'steelblue'}}/>
     </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  red: {
      fontSize: 30,
      color: '#903458',
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
