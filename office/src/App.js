import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Sound,
  VrButton,
  AmbientLight
} from 'react-vr';
import Primitives from './Primitives'
import Penholder from './Penholder'
import Character from './Character'
import Couch from './Couch'
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            background:'background.jpeg',
            sound: 'sound.wav',
            visible: true,
        }
    }
    changeScene(){
        this.setState({
            background: 'outside.jpeg',
            sound: 'birds.wav',
            visible: false,
        })
    }
    renderItems(){
        if(this.state.visible === true){
            return <Penholder />
        }
    
    }
    renderCouch(){
        if(this.state.visible === true){
            return  <Couch/>
        }
    
    }
    renderCharacter(){
        if(this.state.visible === true){
            return  <Character />
        }
    
    }
  render() {
    return (
      <View>
          <AmbientLight intensity={2.5}/>
        <Pano source={asset(this.state.background)} />
        <Sound 
    loop={true}
    volume={0.9}
    source={{
        wav: asset(this.state.sound)
    }}
/>
    <VrButton onClick={this.changeScene.bind(this)}>
    <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            paddingLeft: 0.2,
            paddingRight: 0.2,                      
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [-3, 2, -6]}],
          }}>
          Click here to change scene
        </Text>
    </VrButton>
  {this.renderItems()}
  {this.renderCouch()}
  {this.renderCharacter()}
      </View>
    );
  }
};

