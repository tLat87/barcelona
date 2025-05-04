import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
// import Splash from "./src/screens/Splash";
import WelcomeScreen from "./src/navigation/WelcomeScreen";
import PrestigiousAboutScreen from "./src/screens/PrestigiousAboutScreen";
import SecretGameScreen from "./src/screens/SecretGameScreen";
import GameProccesScreen from "./src/screens/GameProccesScreen";
import ShopScreen from "./src/screens/ShopScreen";
import BackArrow from "./src/assets/svg/BackArrow.tsx";
import TipScreen from "./src/screens/TipScreen";
import DetailedBestPlacesScreen from "./src/screens/DetailedBestPlacesScreen";
import MapScreen from "./src/screens/MapScreen";
import BackgroundMusic from "./src/components/BackgroundMusic";


const Stack = createStackNavigator();

const leftCu = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginLeft: 16}}>
            <BackArrow/>
        </TouchableOpacity>
        )
    }

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <BackgroundMusic />
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#000000', height: 180 },
                        headerLeft: leftCu,
                        headerTitle: () => (
                            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', width: '100%'}}>
                                <Image
                                    source={require('../barcelona/src/assets/img/Vector.png')}
                                    style={{ width: 220, height: 100, resizeMode: 'contain' }}
                                />
                            </View>
                        ),
                        headerShadowVisible: false,
                    }}>

                        {/*<Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />*/}
                        {/*<Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />*/}
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="PrestigiousAbout" component={PrestigiousAboutScreen} options={{  }} />

                        <Stack.Screen name="SecretGame" component={SecretGameScreen} options={{  }} />
                        <Stack.Screen name="GameProcces" component={GameProccesScreen} options={{  }} />
                        <Stack.Screen name="Shop" component={ShopScreen} options={{  }} />

                        <Stack.Screen name="Tip" component={TipScreen} options={{  }} />
                        <Stack.Screen name="DetailedBestPlaces" component={DetailedBestPlacesScreen} options={{  }} />

                        <Stack.Screen name="Map" component={MapScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
