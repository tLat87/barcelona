import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import ShopSvg from '../assets/svg/ShopSvg';

const MatchItemsScreen = ({ navigation }) => {

    return (
        <ScrollView
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
            }}>

            <Text style={{color:'#fff', fontSize: 28, fontWeight: 'bold'}}>
                Match the Items
            </Text>
            <Text style={{color:'#A9A9A9', fontSize: 14, fontWeight: 'bold', marginTop: 24, marginBottom: 40}}>
                Your goal is to match identical items that appear on the screen within 5 seconds. Drag the items to create pairs. If you make a mistake or fail to match the items correctly, the game is over! New items will appear, so stay fast and focused!            </Text>

            <View style={{flexDirection: 'row', marginLeft: 16}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('GameProcces')}} style={{padding: 8, width: '50%', alignItems: 'center', backgroundColor: '#C40D1A', alignSelf: 'center', borderRadius: 5}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: "#fff"}}>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('Shop')}} style={{padding: 8, marginLeft: 8, width: '10%', alignItems: 'center', backgroundColor: '#C40D1A', alignSelf: 'center', borderRadius: 5}}>
                    <ShopSvg/>
                </TouchableOpacity>
            </View>

            <View style={{height: 100}}/>

        </ScrollView>
    );
}

export default MatchItemsScreen;
