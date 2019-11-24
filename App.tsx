import React from 'react';
import configureStore from './store/store';
import AppContainer from './containers/AppContainer'
import { StyleSheet, Text, View } from 'react-native';

const store = configureStore();

export default function App() {
  return <AppContainer store={store} />;
}

