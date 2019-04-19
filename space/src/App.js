import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  AmbientLight,
  StyleSheet,
  Model,
  View,
  Animated,
} from 'react-vr';


import Easing from 'react-vr';
import TextScene from './TextScene';


const AnimatedModel = Animated.createAnimatedComponent(Model);


export default class space extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            background: 'space.jpg',
            satelliteRotZ: new Animated.Value(0),
        }
    }

    componentDidMount(){
        this.state.satelliteRotZ.setValue(0);
        Animated.timing(
            this.state.satelliteRotZ,
            {
                toValue: -3000,
                duration: 100000,
                delay: 2000,
                easing: Easing.inOut

            }
        ).start();
    }
  render() {
    return (
      <View>
          <AmbientLight intensity={2.5} />
        <Pano source={asset(this.state.background)}/>
        <AnimatedModel
            source={{
                obj: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.obj'),
                mtl: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.mtl')
            }}
            style={{
                transform:[
                    {translateX: -4},
                    {translateY: 0},
                    {translateZ: -0.75},
                    { scale: 0.075 },
                    {rotateX: 180 },
                    {rotateY: -360 },
                    {rotateZ: this.state.satelliteRotZ },
                ]
            }}
        
        />
        <TextScene/>
        <Model
            source={{
                obj: asset('/Loral-1300Com-obj/Loral-1300Com-main.obj'),
                mtl: asset('/Loral-1300Com-obj/Loral-1300Com-main.mtl')
            }}
            style={{
                transform:[
                    {translate: [0, .50, -12]},
                    { scale: 0.01 },
                    {rotateX: 30 },
                    {rotateY: -45 }
                ]
            }}
        
        />
        <Model
            source={{
                obj: asset('/EMU/EMU.obj'),
                mtl: asset('/EMU/EMU.mtl')
            }}
            style={{
                transform:[
                    {translate: [-4.5 , 2.5, -0.5]},
                    { scale: 0.5 },
                    {rotateY: 220 },
                    {rotateX: -50 }
                ]
            }}
        
        />
        
      </View>
    );
  }
};

