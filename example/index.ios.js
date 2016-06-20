import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch
} from 'react-native';

import ScrollOffsetExample from './scroll-offset-example';

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: undefined
    };
  }
  render() {
    if (this.state.example) {
      const Example = this.state.example;
      return (
        <Example />
      );
    }
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => this.setState({example: ScrollOffsetExample})}>
          <Text style={{color: 'blue', fontSize: 17, marginBottom: 20}}>
            Get ScrollView Offset
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('example', () => example);
