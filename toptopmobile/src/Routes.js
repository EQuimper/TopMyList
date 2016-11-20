import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TopListFeedContainer } from './modules';

const styles = EStyleSheet.create({
  navStyle: {
    flex: 1,
    marginTop: '5%',
    alignItems: 'center'
  }
});

export default () => (
  <Router
    sceneStyle={{ paddingTop: 65 }}
  >
    <Scene
      key="home"
      component={TopListFeedContainer}
    />
  </Router>
);
