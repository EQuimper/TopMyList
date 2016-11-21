import React, { Component } from 'react';
import { View, Text, LayoutAnimation, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import FoldView from 'react-native-foldview';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  frontContainer: {
    backgroundColor: 'red',
    height: '10%',
  },
  backContainer: {
    backgroundColor: 'green',
    height: '10%',
  }
});

class ListScreen extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      height: 180,
    };
  }

  componentWillMount() {
    this.flip = this.flip.bind(this);
    this.handleAnimationStart = this.handleAnimationStart.bind(this);
    this.renderFrontface = this.renderFrontface.bind(this);
    this.renderBackface = this.renderBackface.bind(this);
  }

  flip() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  handleAnimationStart(duration, height) {
    const isExpanding = this.state.expanded;

    const animationConfig = {
      duration,
      update: {
        type: isExpanding ? LayoutAnimation.Types.easeOut : LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.height,
      },
    };

    LayoutAnimation.configureNext(animationConfig);

    this.setState({
      height,
    });
  }

  renderFrontface() {
    return (
      <Button
        onPress={() => this.flip()}
        small
        icon={{ name: 'code' }}
        backgroundColor='#03A9F4'
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='VIEW NOW'
      />
    );
  }

  renderBackface() {
    return (
      <TouchableOpacity onPress={() => this.flip()}>
        <View style={styles.backContainer}>
          <Text>Hello</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { toplist } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Card
          title={toplist.title}
        >
          <View style={{ height: 50, zIndex: 100 }}>
            <FoldView
              expanded={this.state.expanded}
              perspective={1000}
              renderBackface={this.renderBackface}
              renderFrontface={this.renderFrontface}
            >
              <Card
                title={toplist.title}
              >
                <Text>Hello</Text>
              </Card>
            </FoldView>
          </View>
        </Card>
      </View>
    );
  }
}

export default ListScreen;
