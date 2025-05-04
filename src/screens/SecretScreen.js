import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, { useState, useEffect } from 'react';

const secretGameScreen = [
    {
        desc: 'This hidden gem is tucked behind ancient walls, far from the tourist crowds. It offers tranquility, rare plants, and a view that reveals Barcelona from an unexpected perspective. Once, artists and philosophers used to stroll here.',
        img: require('../assets/img/game/36e0a5687440c57648df68daf194f6dff7d2746c.jpg'),
        answers: ['Laberint d’Horta', 'Jardins de Miramar', 'El Jardí Secret'],
        correct: 'El Jardí Secret',
        full: 'A peaceful oasis in the bustling city where you can enjoy a coffee while reading under the shade of trees. A favorite spot for Barcelona’s intellectuals.'
    },
    {
        desc: 'At first glance, it looks like a small bookstore. But if you know the secret passage, you’ll find yourself in an exclusive restaurant serving rare dishes and collectible wines.',
        img: require('../assets/img/game/79dd95e7f12cc5bbc013a8d8dd901202b6472b5a.jpg'),
        answers: ['El Paradiso', 'Bar Mutis', 'Petit Comité'],
        correct: 'Bar Mutis',
        full: 'One of the most exclusive restaurants in Barcelona, where guests enjoy the chef’s creations accompanied by live music.'
    },
    {
        desc: 'This place once hosted celebrities and aristocrats. Today, it is a private venue accessible by invitation only. Inside, you’ll find antique furniture, secret rooms, and a wine cellar.',
        img: require('../assets/img/game/c1afc0ea0435a4f5da122c03ed31aaa4dd36ef0c.jpg'),
        answers: ['Casa de les Punxes', 'Palauet Living Barcelona', 'Casa Vicens'],
        correct: 'Palauet Living Barcelona',
        full: 'A historic villa with luxurious apartments, private dinners, and exclusive gatherings for a select few.'
    },
    {
        desc: 'At first glance, this place looks like a regular café. But if you step through an old refrigerator door, you’ll enter a world of signature cocktails and a mysterious ambiance.',
        img: require('../assets/img/game/dcfe36909894cd2c7e22585a66f33c7a6b2689a7.jpg'),
        answers: ['El Paradiso', 'Boca Chica', 'Dry Martini Speakeasy'],
        correct: 'El Paradiso',
        full: 'One of Barcelona’s most famous secret bars, where a simple sandwich counter hides an elite cocktail lounge.'
    }
]

const SecretScreen = ({ navigation }) => {

    const handleStart = () => {
        const randomIndex = Math.floor(Math.random() * secretGameScreen.length);
        const randomPlace = secretGameScreen[randomIndex];

        navigation.navigate('SecretGame', { place: randomPlace });
    };

    return (
        <ScrollView
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
            }}>

            <Text style={{color:'#fff', fontSize: 28, fontWeight: 'bold'}}>
                Secret Places of Barcelona
            </Text>
            <Text style={{color:'#A9A9A9', fontSize: 14, fontWeight: 'bold', marginTop: 24, marginBottom: 12}}>
                Barcelona hides many unique places known only to a select few. Are you ready to test how well you know the city?
            </Text>
            <Text style={{color:'#A9A9A9', fontSize: 14, fontWeight: 'bold', marginBottom: 30}}>
                You’ll have to guess 5 prestigious and mysterious locations based on cryptic descriptions. Choose one of three options and uncover the secrets of elite Barcelona!            </Text>

            <TouchableOpacity onPress={handleStart} style={{padding: 8, width: '50%', alignItems: 'center', backgroundColor: '#C40D1A', alignSelf: 'center', borderRadius: 5}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: "#fff"}}>Begin!</Text>
            </TouchableOpacity>

            <View style={{height: 100}}/>

        </ScrollView>
    );
}

export default SecretScreen;
