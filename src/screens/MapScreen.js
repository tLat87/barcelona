import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapScreen = ({route}) => {
    const {loc} = route.params;
    const [latitude, longitude] = loc;

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={MapView.PROVIDER_GOOGLE}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}>
                <Marker coordinate={{latitude, longitude}} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1},
    map: {flex: 1},
});

export default MapScreen;
