import React from 'react';
import { View, asset, Model, StyleSheet} from 'react-vr';

export default class Couch extends React.Component {
  render() {
    return (
      <View>
    <Model 
    source={{
        obj: asset('/couch/9990gy-3.obj'),
        mtl: asset('/couch/9990gy-3.mtl')
    

    }}
    style={{
        position:'absolute',
       transform: [
           {translate: [3, -5, -13]},
           {scale: .7},
           {rotateX:-90},
           {rotateZ:-180}

       ]
    }}
    />

      </View>
    );
  }
};
