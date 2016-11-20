import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './redux/store';
import RouteComponent from './Routes';
import Colors from './constants/Colors';

console.disableYellowBox = true; // eslint-disable-line no-console

EStyleSheet.build(Colors);

export default () => (
  <Provider store={store}>
    <RouteComponent />
  </Provider>
);
