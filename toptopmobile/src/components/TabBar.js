import React from 'react';
import { View } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements';

const TabBar = () => (
  <View style={{ flex: 1 }}>
    <Tabs>
      <Tab
        renderIcon={() => <Icon name="account-circle" size={26} />}
        renderSelectedIcon={() => <Icon name="account-circle" size={26} />}
        onPress={() => console.log('Hello')}
      />
      <Tab
        renderIcon={() => <Icon name="library-add" size={26} />}
        renderSelectedIcon={() => <Icon name="library-add" size={26} />}
        onPress={() => console.log('Hello')}
      />
      <Tab
        renderIcon={() => <Icon name="trending-up" size={26} />}
        renderSelectedIcon={() => <Icon name="trending-up" size={26} />}
        onPress={() => console.log('Hello')}
      />
      <Tab
        renderIcon={() => <Icon name="format-list-bulleted" size={26} />}
        renderSelectedIcon={() => <Icon name="format-list-bulleted" size={26} />}
        onPress={() => console.log('Hello')}
      />
    </Tabs>
  </View>
);

export default TabBar;
