import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import ArowRightSvg from '../assets/svg/ArowRightSvg';

const DetailedBestPlacesScreen = ({ navigation, route }) => {
    const {place} = route.params;

    return (
        <ScrollView
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
            }}>

            <View
                style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    marginRight: 20,
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 0,
                    borderRadius: 8,
                }}>
                <Image
                    source={place.img}
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 8,
                        marginBottom: 8,
                    }}
                />

                <Text
                    style={{
                        color: '#000',
                        fontSize: 17,
                        fontWeight: 'bold',
                        alignSelf: 'flex-start',
                        marginBottom: 0,
                        padding: 20,
                    }}>
                    {place.title}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                        justifyContent: 'space-around',
                    }}>
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 14,
                            marginLeft: 20,
                            marginBottom: 20,
                            alignSelf: 'flex-start',
                            width: '80%',
                        }}>
                        📍 Location: {place.loc}
                    </Text>
                </View>
            </View>

            <View
                style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    marginRight: 20,
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 0,
                    borderRadius: 8,
                    marginTop: 20
                }}>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                        justifyContent: 'space-around',
                        marginTop: 12
                    }}>
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 14,
                            marginLeft: 20,
                            marginBottom: 20,
                            alignSelf: 'flex-start',
                            width: '80%',
                        }}>
                       {place.longDesc}
                    </Text>
                </View>
            </View>


            <View style={{height: 100}} />
        </ScrollView>
    );
}

export default DetailedBestPlacesScreen;
