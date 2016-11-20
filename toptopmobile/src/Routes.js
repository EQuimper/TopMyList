import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TopListFeedContainer, ListContainer } from './modules';

const styles = EStyleSheet.create({
  navStyle: {
    flex: 1,
    marginTop: '5%',
    alignItems: 'center'
  }
});

export default () => (
  <Router
    sceneStyle={{ paddingTop: 65, flex: 1 }}
  >
    <Scene
      key="home"
      component={TopListFeedContainer}
    />
    <Scene
      key="list"
      component={ListContainer}
    />
  </Router>
);
