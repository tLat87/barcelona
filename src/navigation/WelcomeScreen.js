import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
            title: "Welcome to KTO – Keep Time On!",
            description: "Optimize your time with the Pomodoro method. Ready to work effectively? Let's get started!",
        },
        {
            title: "Use the Pomodoro Timer",
            description: "Break your work into 25-minute sessions to stay focused and productive. After each session, take a short break.",
        },
        {
            title: "Setup Sound Effects",
            description: "Turn on/off the sounds that help you track time and stay focused. The choice is yours!",
        },
        {
            title: "Session Settings",
            description: "Set your own timer preferences or choose from preset options for a quick start.",
        },
        {
            title: "Read Our Blog",
            description: "Learn more about the Pomodoro method and how to manage your time effectively through our blog.",
        },
        {
            title: "Get Started!",
            description: "Ready for productive work? Start now and take control of your time!",
        }
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigation.navigate('MainTab');
        }
    };

    return (
      <View style={styles.container}>


      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 40,
    },
});

export default WelcomeScreen;
