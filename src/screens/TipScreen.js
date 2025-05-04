import { Image, ScrollView, Text, TouchableOpacity, Vibration, View, Switch } from 'react-native';
import React, { useState, useEffect } from 'react';

const tips = [
    {
        title: 'Casino Barcelona',
        location: 'Carrer de la Marina, 19-21, 08005 Barcelona',
        pic: require('../assets/img/de3fb120030f19dc2e47f9db5a9466111bfb4e1a.jpg'),
        tip: 'Dress code – smart casual. A great spot for an evening out after exploring Barcelona.'
    },
    {
        title: 'Bingo Laietana',
        location: 'Via Laietana, 46, Barcelona',
        pic: require('../assets/img/c18bc0b52a106034aba17d75169dee9d911e0823.png'),
        tip: 'Arrive early to secure a good seat.'
    },
    {
        title: 'Casino Peralada',
        location: 'Carrer Sant Joan, s/n, 17491 Peralada',
        pic: require('../assets/img/655c41df89d43be781691bb20952e76fedffab99.jpg'),
        tip: 'Some areas require advance reservations. A perfect choice for those looking for a luxurious and tranquil setting.'
    },
]

const TipScreen = ({ navigation }) => {
    const [randomTip, setRandomTip] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * tips.length);
        setRandomTip(tips[randomIndex]);
    }, []);

    if (!randomTip) return null; // можно вставить loader, если нужно

    return (
        <View
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
                paddingTop: 50,
            }}
        >
            <View style={{marginTop: 8}}>
                <Image source={randomTip.pic}
                       style={{width:'100%', height:200, borderRadius: 8}}/>
                <View style={{
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 20,
                    borderBottomRightRadius: 8,
                    borderBottomLeftRadius: 8
                }}>
                    <Text style={{
                        color:'#000',
                        fontSize: 17,
                        fontWeight: 'bold',
                        alignSelf: 'flex-start',
                        marginBottom: 8
                    }}>
                        {randomTip.title}
                    </Text>
                    <Text style={{width: '70%', color:'#000', fontSize: 14, alignSelf: 'flex-start'}}>
                        📍 {randomTip.location}
                    </Text>
                </View>
            </View>

            <View style={{
                backgroundColor: '#fff',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
                borderRadius: 8,
                marginTop: 18,
            }}>
                <Text style={{
                    width: '70%',
                    color:'#000',
                    fontSize: 14,
                    marginBottom: 18,
                    alignSelf: 'flex-start'
                }}>
                    💡 Tip: {randomTip.tip}
                </Text>
            </View>
        </View>
    );
};

export default TipScreen;
