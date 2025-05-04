import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, { useState, useEffect } from 'react';

const PrestigiousAboutScreen = ({ navigation, route }) => {
    const {place} = route.params;

    return (
        <ScrollView
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
                paddingTop: 30
            }}>

            <Image source={place.url}
                   style={{width:'100%', height:200, borderRadius: 8, marginBottom: 12}}/>
                <View style={{marginBottom: 16,}}>
                    <View style={{backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center', padding: 20, borderRadius: 8}}>
                        <Text style={{color:'#000', fontSize: 17, alignSelf: 'flex-start', marginBottom: 18}}>
                            📍 Location: {place.location}
                        </Text>
                            <Text style={{width: '100%', color:'#000', fontSize: 14, marginBottom: 18, alignSelf: 'flex-start'}}>
                                {place.desk}
                            </Text>
                    </View>
                </View>


            <View style={{height: 100}}/>

        </ScrollView>
    );
}

export default PrestigiousAboutScreen;
