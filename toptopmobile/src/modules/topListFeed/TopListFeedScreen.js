import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements';

class TopListFeedScreen extends Component {
  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ toplists }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(toplists);
  }

  renderRow(toplist) {
    return (
      <ListItem
        roundAvatar
        onPress={() => Actions.list({ toplistId: toplist._id })}
        key={toplist._id}
        title={toplist.title}
        subtitle={toplist.genre.name}
        avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <List containerStyle={{ flex: 1 }}>
          <ListView
            style={{ flex: 1 }}
            renderRow={this.renderRow}
            dataSource={this.dataSource}
          />
        </List>
      </View>
    );
  }
}

export default TopListFeedScreen;
