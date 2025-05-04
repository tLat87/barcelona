import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Switch,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetSettings,
    toggleVibration,
    toggleMusic,
} from '../redux/slices/settingsSlice';

const SettingsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { vibration, music } = useSelector((state) => state.settings);

    return (
        <View
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
                paddingTop: 50,
            }}
        >
            <View
                style={{
                    backgroundColor: '#1E1E1E',
                    borderRadius: 12,
                    padding: 20,
                    position: 'relative',
                }}
            >
                {/* Music Switch */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 20,
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Music</Text>
                    <Switch
                        value={music}
                        onValueChange={() => dispatch(toggleMusic())}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={music ? '#00FF6F' : '#f4f3f4'}
                    />
                </View>

                {/* Vibration Switch */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Vibration</Text>
                    <Switch
                        value={vibration}
                        onValueChange={() => dispatch(toggleVibration())}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={vibration ? '#00FF6F' : '#f4f3f4'}
                    />
                </View>
            </View>

            {/* Reset Button */}
            <TouchableOpacity
                onPress={() => dispatch(resetSettings())}
                style={{
                    marginTop: 40,
                    backgroundColor: '#FF3238',
                    borderRadius: 10,
                    paddingVertical: 14,
                    paddingHorizontal: 24,
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '600',
                        marginRight: 12,
                    }}
                >
                    Reset progress
                </Text>
                <Text style={{ color: '#fff', fontSize: 20 }}>➡️</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;
