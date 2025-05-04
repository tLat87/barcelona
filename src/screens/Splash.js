import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#000',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingVertical: 40,
            }}>
        </View>
    );
};

export default Splash;
