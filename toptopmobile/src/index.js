import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './redux/store';
import RouteComponent from './Routes';
import Colors from './constants/Colors';
import { TabBar } from './components';

console.disableYellowBox = true; // eslint-disable-line no-console

EStyleSheet.build(Colors);

export default () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 10 }}>
        <RouteComponent />
      </View>
      <TabBar />
    </View>
  </Provider>
);
