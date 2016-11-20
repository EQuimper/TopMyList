import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchList } from './actions';
import ListScreen from './ListScreen';

class ListContainer extends Component {
  componentWillMount() {
    this.props.fetchList(this.props.toplistId);
  }
  render() {
    const { list } = this.props;
    if (!list.isFetched) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else if (list.error === null) {
      return <ListScreen toplist={list.data.toplist} />;
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
    list: state.list
  }),
  { fetchList }
)(ListContainer);
