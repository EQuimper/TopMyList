import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchTopListFeed } from './actions';
import TopListFeedScreen from './TopListFeedScreen';

class TopListFeedContainer extends Component {
  componentWillMount() {
    this.props.fetchTopListFeed();
  }
  render() {
    const { toplists } = this.props;
    if (!toplists.isFetched) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else if (toplists.error === null) {
      console.log('IM OK');
      return <TopListFeedScreen toplists={toplists.toplists.toplists} />;
    }
    return (
      <View>
        <Text>Something Wrong happen!!!</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    toplists: state.topList
  }),
  { fetchTopListFeed }
)(TopListFeedContainer);
