import React from 'react';
import { View, asset, Model, StyleSheet} from 'react-vr';

export default class Character extends React.Component {
  render() {
    return (
      <View>
    <Model 
    source={{
        obj: asset('/nanjo/nanjo.obj'),
        mtl: asset('/nanjo/nanjo.mtl')
    }}
    style={{
      position:'absolute',
       transform: [
           {translate: [-1, -5, -6]},
           {scale: .5},
           {rotateX:-90}
       ]
    }}
    />

      </View>
    );
  }
};
