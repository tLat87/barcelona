import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PrestigiousCornersScreen from '../screens/PrestigiousCornersScreen';
import SecretScreen from '../screens/SecretScreen';
import MatchItemsScreen from '../screens/MatchItemsScreen';
import GrayCoppy from '../assets/svg/GrayCoppy';
import GrayFindSome from '../assets/svg/GrayFindSome';
import SettingsScreen from '../screens/SettingsScreen';
import GraySettings from '../assets/svg/GraySettings';
import LightSvg from '../assets/svg/LightSvg';
import {useNavigation} from '@react-navigation/native';
import GrayFind from '../assets/svg/GrayFind';
import GrayMusikBokal from '../assets/svg/GrayMusikBokal';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#000000', height: 180 },
                headerTitle: () => (
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
                        <Image
                            source={require('../assets/img/Vector.png')}
                            style={{ width: 220, height: 100, resizeMode: 'contain' }}
                        />
                        {/*<TouchableOpacity style={{padding: 8, backgroundColor: '#C40D1A', alignSelf: 'center', borderRadius: 5}}>*/}
                        {/*    <EmptyFFFStar/>*/}
                        {/*</TouchableOpacity>*/}
                        <TouchableOpacity onPress={()=>{navigation.navigate('Tip')}} style={{padding: 8, backgroundColor: '#C40D1A', alignSelf: 'center', borderRadius: 5}}>
                            <LightSvg/>
                        </TouchableOpacity>
                    </View>
                ),
                headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: '#616161',
                    borderRadius: 20,
                    paddingTop: 14,
                    borderWidth: 1,
                    borderColor: '#333', // или другой цвет
                    elevation: 10, // Android тень
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    height: 70,
                    // paddingBottom: 10,
                },
                tabBarIcon: ({ focused }) => {
                    let IconComponent;

                    if (route.name === 'Home') {
                        IconComponent = GrayFind
                    }if (route.name === 'Secret') {
                        IconComponent = GrayCoppy
                    }if (route.name === 'MatchItems') {
                        IconComponent = GrayFindSome
                    }if (route.name === 'PrestigiousCorners') {
                        IconComponent = GrayMusikBokal
                    }if (route.name === 'Settings') {
                        IconComponent = GraySettings
                    }

                    return <IconComponent color={focused ? '#FF3238' : '#fff'} />;
                },
            })}
        >

            <Tab.Screen
                name="Secret"
                component={SecretScreen}
                options={{
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen
                name="MatchItems"
                component={MatchItemsScreen}
                options={{
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="PrestigiousCorners"
                component={PrestigiousCornersScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
