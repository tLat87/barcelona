import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    Vibration,
    View
} from 'react-native';
import React, { useState } from 'react';
import ArowRightSvg from '../assets/svg/ArowRightSvg';


const SecretGameScreen = ({ navigation, route }) => {
    const {place} = route.params;
    const question = place;

    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswer = (answer) => {
        Vibration.vibrate(100);
        setSelected(answer);
        setIsCorrect(answer === question.correct);
    };

    const handleNext = () => {
        setSelected(null);
        setIsCorrect(null);
        navigation.goBack(); // или навигация к следующему вопросу
    };

    return (
        <ScrollView
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
                paddingTop: 40
            }}>

            <Image source={question.img }
                   style={{ width: '100%', height: 200, borderRadius: 8 }} />

            <View style={{
                backgroundColor: '#fff',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                marginBottom: 30
            }}>
                <Text style={{
                    width: '100%',
                    color: '#000',
                    fontSize: 14,
                    marginBottom: 18,
                    alignSelf: 'flex-start'
                }}>
                    {question.desc}
                </Text>
            </View>

            {selected === null ? (
                // Показываем варианты ответов
                question.answers.map((answer, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => handleAnswer(answer)}
                        style={{
                            backgroundColor: '#1E1E1E',
                            padding: 14,
                            marginBottom: 12,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: '#333'
                        }}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>
                            {answer}
                        </Text>
                    </TouchableOpacity>
                ))
            ) : isCorrect ? (
                // Верный ответ
                <View style={{ padding: 20 }}>
                    <Text style={{
                        color: '#00FFAA',
                        fontSize: 24,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginBottom: 10
                    }}>
                        ✅ Correct!
                    </Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        textAlign: 'center'
                    }}>
                        {question.full}
                    </Text>

                    <TouchableOpacity
                        onPress={handleNext}
                        style={{
                            marginTop: 30,
                            backgroundColor: '#C40D1A',
                            padding: 12,
                            borderRadius: 6,
                            alignSelf: 'center'
                        }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                // Неверный ответ
                <>
                    <Text style={{
                        color: '#fff',
                        fontSize: 28,
                        marginBottom: 18,
                        alignSelf: 'center',
                        fontWeight: 'bold'
                    }}>
                        ❌ Incorrect answer
                    </Text>
                    <Text style={{
                        color: '#A1A1A1',
                        fontSize: 16,
                        width: '90%',
                        textAlign: 'center',
                        marginBottom: 18,
                        alignSelf: 'center',
                        fontWeight: 'bold'
                    }}>
                        💪 Keep going, and you’ll definitely succeed!
                    </Text>

                    <TouchableOpacity onPress={handleNext}
                                      style={{
                                          padding: 8,
                                          backgroundColor: '#C40D1A',
                                          alignSelf: 'center',
                                          borderRadius: 5
                                      }}>
                        <ArowRightSvg />
                    </TouchableOpacity>
                </>
            )}

            <View style={{ height: 100 }} />
        </ScrollView>
    );
};

export default SecretGameScreen;
