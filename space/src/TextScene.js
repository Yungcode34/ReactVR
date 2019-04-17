import React from 'react';
import { Text, View, StyleSheet } from 'react-vr';

export default class TextScene extends React.Component {
    render(){
        return(
            <View>
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
                            {translate: [-5, 1, -0.5]},
                            { scale: 0.5 },
                            {rotateY: 90 }
                        ]
                    }}
                >
                    Aqua Satellite click here
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