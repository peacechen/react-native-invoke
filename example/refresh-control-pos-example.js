import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import Invoke from 'react-native-invoke';

export default class RefreshControlPosExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}} refreshControl={
          <RefreshControl refreshing={true} ref='refresh'/>
        }>
          <Image style={{width: 320, height: 560}} source={{uri: 'http://i.imgur.com/Q6PCl4B.jpg'}} />
        </ScrollView>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
            <Text style={{color: 'blue', marginVertical: 20}}>Move Refresh Control</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  async onButtonPress() {
    const _getRefreshFrame = Invoke.call(Invoke.React.view(this.refs['refresh']), 'frame').returns(Invoke.IOS.CGRect);
    let {x, y, width, height} = await Invoke.execute(_getRefreshFrame);
    y += 10;
    const _setRefreshFrame = Invoke.call(Invoke.React.view(this.refs['refresh']), 'setFrame:', Invoke.IOS.CGRect({x, y, width, height}));
    await Invoke.execute(_setRefreshFrame);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
