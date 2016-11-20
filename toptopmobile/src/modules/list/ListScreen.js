import React from 'react';
import { View, Text } from 'react-native';

const ListScreen = ({ toplist }) => {
  console.log(toplist);
  return (
    <View>
      <Text>{toplist.title}</Text>
    </View>
  );
};

export default ListScreen;
