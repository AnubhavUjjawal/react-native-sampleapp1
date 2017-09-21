/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

export default class album extends Component {
  render() {
    return (
        <Header HeaderText={'Albums'} />
    );
  }
}


AppRegistry.registerComponent('album', () => album);
