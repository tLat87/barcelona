// import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
// import React, { useState, useEffect } from 'react';
// import BallSvg from '../assets/svg/BallSvg';
// import ShesterenkaSvg from '../assets/svg/ShesterenkaSvg';
// import GuitarSvg from '../assets/svg/GuitarSvg';
// import ShipSvg from '../assets/svg/ShipSvg';
// import RedCoin from '../assets/svg/RedCoin';
//
// const ShopScreen = ({ navigation }) => {
//
//     return (
//         <View
//             style={{
//                 backgroundColor: '#000',
//                 flex: 1,
//                 paddingHorizontal: 16,
//                 alignItems: 'center',
//             }}>
//
//             <Text style={{color:'#fff', fontSize: 28, fontWeight: 'bold', alignSelf: 'flex-start'}}>
//                 Shop
//             </Text>
//
//             <View style={{flexDirection: 'column', gap: 40, marginTop: '30%'}}>
//
//                 <View style={{flexDirection: 'row', gap: 40}}>
//                     <View>
//                         <View style={{padding: 25, backgroundColor: '#C40D1A', borderRadius: 8}}>
//                             <BallSvg/>
//                         </View>
//                         <View style={{padding: 12, backgroundColor: '#fff', borderRadius: 8, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
//                             <Text style={{color:'#C40D1A', fontSize: 20, fontWeight: 'bold', marginRight: 16}}>
//                                 100
//                             </Text>
//                             <RedCoin/>
//                         </View>
//                     </View>
//                     <View>
//                         <View style={{padding: 25, backgroundColor: '#C40D1A', borderRadius: 8}}>
//                             <ShesterenkaSvg/>
//                         </View>
//                         <View style={{padding: 12, backgroundColor: '#fff', borderRadius: 8, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
//                             <Text style={{color:'#C40D1A', fontSize: 20, fontWeight: 'bold', marginRight: 16}}>
//                                 150
//                             </Text>
//                             <RedCoin/>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', gap: 40}}>
//                     <View>
//                         <View style={{padding: 25, backgroundColor: '#C40D1A', borderRadius: 8}}>
//                             <GuitarSvg/>
//                         </View>
//                         <View style={{padding: 12, backgroundColor: '#fff', borderRadius: 8, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
//                             <Text style={{color:'#C40D1A', fontSize: 20, fontWeight: 'bold', marginRight: 16}}>
//                                 200
//                             </Text>
//                             <RedCoin/>
//                         </View>
//                     </View>
//                     <View>
//                         <View style={{padding: 25, backgroundColor: '#C40D1A', borderRadius: 8}}>
//                             <ShipSvg/>
//                         </View>
//                         <View style={{padding: 12, backgroundColor: '#fff', borderRadius: 8, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
//                             <Text style={{color:'#C40D1A', fontSize: 20, fontWeight: 'bold', marginRight: 16}}>
//                                 300
//                             </Text>
//                             <RedCoin/>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// }
//
// export default ShopScreen;

import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    Vibration,
    View,
    Alert
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BallSvg from '../assets/svg/BallSvg';
import ShesterenkaSvg from '../assets/svg/ShesterenkaSvg';
import GuitarSvg from '../assets/svg/GuitarSvg';
import ShipSvg from '../assets/svg/ShipSvg';
import RedCoin from '../assets/svg/RedCoin';
import {subtractBalance} from '../redux/slices/balanceSlice';
import {buyItem} from '../redux/slices/purchasesSlice';

const ShopScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const balance = useSelector((state) => state.balance.value);
    const purchasedItems = useSelector((state) => state.purchases.items);

    const handleBuy = (itemName, price) => {
        if (purchasedItems.includes(itemName)) {
            Alert.alert('Already purchased!');
            return;
        }

        if (balance >= price) {
            dispatch(subtractBalance(price));
            dispatch(buyItem(itemName));
            Vibration.vibrate(100);
        } else {
            Alert.alert('Not enough coins!');
            Vibration.vibrate(300);
        }
    };

    const renderItem = (name, price, SvgComponent) => (
        <TouchableOpacity onPress={() => handleBuy(name, price)}>
            <View style={{ padding: 25, backgroundColor: '#C40D1A', borderRadius: 8 }}>
                <SvgComponent />
            </View>
            <View style={{
                padding: 12,
                backgroundColor: '#fff',
                borderRadius: 8,
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: '#C40D1A',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginRight: 16
                }}>
                    {price}
                </Text>
                <RedCoin />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{
            backgroundColor: '#000',
            flex: 1,
            paddingHorizontal: 16,
            alignItems: 'center',
        }}>
            <Text style={{
                color: '#fff',
                fontSize: 28,
                fontWeight: 'bold',
                alignSelf: 'flex-start'
            }}>
                Shop
            </Text>

            <View style={{ flexDirection: 'column', gap: 40, marginTop: '30%' }}>
                <View style={{ flexDirection: 'row', gap: 40 }}>
                    {renderItem('ball', 100, BallSvg)}
                    {renderItem('gear', 150, ShesterenkaSvg)}
                </View>
                <View style={{ flexDirection: 'row', gap: 40 }}>
                    {renderItem('guitar', 200, GuitarSvg)}
                    {renderItem('ship', 300, ShipSvg)}
                </View>
            </View>
        </View>
    );
};

export default ShopScreen;
