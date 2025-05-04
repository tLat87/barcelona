import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import ArowRightSvg from '../assets/svg/ArowRightSvg';

const places = [
    {
        title: 'Cinc Sentits',
        about:"One Michelin star, haute cuisine with innovative presentation.",
        desk: "Cinc Sentits is a modern Catalan restaurant that has held its Michelin star since 2008. It is known for its refined approach to traditional flavors, using high-quality ingredients from local farmers and producers. The ambiance is minimalist, allowing guests to fully focus on the artistic presentation and bold flavors of each dish.",
        location: "Carrer d’Entença, 60, 08015 Barcelona, Spain",
        url: require('../assets/img/img2/1c176023ae3ad01e32f0c095657f6541fdcfe975.jpg'),
    },
    {
        title: 'Disfrutar',
        about:"Two Michelin stars, modern culinary masterpieces. Advanced booking recommended.",
        desk: "Disfrutar, run by three former elBulli chefs, offers a revolutionary take on modern gastronomy. The restaurant is renowned for its innovative tasting menus, each a carefully curated sensory experience. The dishes combine creativity, technique, and unique textures, making it one of the most sought-after dining experiences in Barcelona. Advanced booking is highly recommended.",
        location: "Carrer de Villarroel, 163, 08036 Barcelona, Spain",
        url: require('../assets/img/img2/c8cf51c71c0456bfa7b3c9a12be71b123a3e4395.jpg'),
    },
    {
        title: 'ABaC',
        about:"Three Michelin stars, signature dishes blending tradition and innovation.",
        desk: "ABaC is a three-star Michelin restaurant led by chef Jordi Cruz. It blends traditional Mediterranean flavors with cutting-edge culinary techniques, offering a refined and luxurious dining experience. The restaurant is located in an elegant boutique hotel and is known for its impeccable service and sophisticated atmosphere.",
        location: "Av. del Tibidabo, 1, 08022 Barcelona, Spain",
        url: require('../assets/img/img2/5e23c9d023169b936c8ea93fcef3045b331d3e15.jpg'),
    },
]

const PrestigiousCornersScreen = ({ navigation }) => {
    return (
        <ScrollView
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
            }}>

            <Text style={{color:'#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 8}}>
                Prestigious Corners
            </Text>

            {places.map((place, index) => (
                <View style={{marginBottom: 16}}>
                    <Image source={place.url}
                           style={{width:'100%', height:150, borderRadius: 8}}/>
                    <View style={{backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center', padding: 20, borderBottomRightRadius: 8, borderBottomLeftRadius: 8}}>
                        <Text style={{color:'#000', fontSize: 17, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 18}}>
                            {place.title}
                        </Text>
                        <View style={{ width:'100%', flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'space-around' }}>
                            <Text style={{width: '70%', color:'#000', fontSize: 14, marginBottom: 18, alignSelf: 'flex-start'}}>
                                {place.about}
                            </Text>
                            <TouchableOpacity onPress={()=>{navigation.navigate('PrestigiousAbout', {place})}} style={{padding: 8, backgroundColor: '#C40D1A', alignSelf: 'center', borderRadius: 5}}>
                                <ArowRightSvg />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}


            <View style={{height: 100}}/>

        </ScrollView>
    );
}

export default PrestigiousCornersScreen;
