import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import ProfileScreen from './Profile';

const PrimaryNav = StackNavigator({
    Home: { screen: HomeScreen},
    Profile: {screen : ProfileScreen}
})

export default PrimaryNav
