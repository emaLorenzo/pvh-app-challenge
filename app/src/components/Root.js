import React from 'react';
import { View, StatusBar } from 'react-native';
import AppNavigation from '../navigation/appNavigation';

const Root = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <AppNavigation />
  </View>
);

export default Root;
