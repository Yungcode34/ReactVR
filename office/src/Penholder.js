import React from 'react';
import { View, asset, Model, StyleSheet} from 'react-vr';
import Primitives from './Primitives'

export default class Penholder extends React.Component {
  render() {
    return (
      <View>
    <Model 
    source={{
        obj: asset('/penholder/Table_Set_Obj.obj'),
        mtl: asset('/penholder/Table_Set_Obj.mtl')
    }}
    style={{
        position:'absolute',
       transform: [
           {translate: [-2.5, 0.70, -4]},
           {scale: 0.001},
           {rotateX:-90}
       ]
    }}
    />
    <Model 
    source={{
        obj: asset('/penholder/Table_Set_Obj.obj'),
        mtl: asset('/penholder/Table_Set_Obj.mtl')
    }}
    style={{
        position:'absolute',
       transform: [
           {translate: [5, 0.70, -4]},
           {scale: 0.001},
           {rotateX:-90}
       ]
    }}
    />
    <Model 
    source={{
        obj: asset('/penholder/Table_Set_Obj.obj'),
        mtl: asset('/penholder/Table_Set_Obj.mtl')
    }}
    style={{
        position:'absolute',
       transform: [
           {translate: [9, 0.70, -3]},
           {scale: 0.001},
           {rotateY:-180},
           {rotateX:270}
       ]
    }}
    />

      </View>
    );
  }
};

