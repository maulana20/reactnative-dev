import React, {Component} from "react";
import * as ReactNavigation from 'react-navigation';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigation from './src/screens/AppNavigation';

export default class App extends Component {
  render() {
    return <AppNavigation/>;
  }
}

