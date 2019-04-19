import React from 'react';
import { Text, View, StyleSheet, Video, asset, VrButton, Sound } from 'react-vr';

export default class TextScene extends React.Component {

        constructor(props){
            super(props);
            this.state= {
                video: false,
                audio: true,
                wavFile: '/578628main_hskquindar.mp3',
            };
        }

        useAudio(){
            if (this.state.audio === true){
                return <Sound 
                         loop={true}
                         volume={0.7}
                         source={{
                             wav: asset(this.state.wavFile)
                         }}     
                        />
            }
        }

        startVideo(){
            this.setState({
                video: true,
                audio: false,
            })
        }

        renderItems(){
            if (this.state.video === false ){
                return <Text
                style={{
                    background: '#777879',
                    fontSize: 0.5,
                    paddingLeft: 0.2,
                    fontWeight: '400',
                    paddingRight: 0.2,                      
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform:[
                        {translate: [-5, 1, -0.5]},
                        { scale: 0.5 },
                        {rotateY: 90 }
                    ]
                }}
            >
                Aqua Satellite
            </Text>
            } else {
                return <Video
                source={{uri: '/static_assets/Nasa_aqua.mp4'}}
                style={{
                    height: 2,
                    width: 3.56,
                    transform:[
                        {translate: [-5, 3, -0.5]},
                        { rotateY: 90 },
                        {rotateX: 0 }
                    ]
                }}
                /> 
            }
        }

    render(){
        return(
            <View>
                {this.useAudio()}
                <VrButton onClick={this.startVideo.bind(this)}>
                {this.renderItems()}
                </VrButton>
                <Text
                    style={{
                        background: '#777879',
                        position:'absolute',
                        fontSize: 0.5,
                        paddingLeft: 0.2,
                        fontWeight: '400',
                        paddingRight: 0.2,                      
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform:[
                            {translate: [-0.5, 0, 4]},
                            { scale: 0.5 },
                            {rotateY: 180 }
                        ]
                    }}
                >
                    Aqua Satellite info click here!
                </Text>
                <Text
                    style={{
                        background: '#777879',
                        fontSize: 0.5,
                        paddingLeft: 0.2,
                        fontWeight: '400',
                        paddingRight: 0.2,                      
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform:[
                            {translate: [-1, 1, -7]},
                            { scale: 0.5 },
                            {rotateY: 360 }
                        ]
                    }}
                >
                    Loral-1300 Com
                </Text>
                <Text
                    style={{
                        background: '#777879',
                        fontSize: 0.5,
                        paddingLeft: 0.2,
                        paddingRight: 0.2,                      
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform:[
                            {translate: [-4.5 , 6.5, -2.5]},
                            { scale: 0.5 },
                            {rotateY: 100 },
                            {rotateX: 90 },
                            { rotateZ: 50}
                        ]
                    }}
                >
                    Space Man
                </Text>
            </View>
        )
    }
}