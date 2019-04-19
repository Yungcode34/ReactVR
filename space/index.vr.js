import React from 'react';
import App from './src/App';
import {
  AppRegistry,
  View,
} from 'react-vr';

export default class space extends React.Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
};

AppRegistry.registerComponent('space', () => space);
