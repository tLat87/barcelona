// import {
//     View,
//     Text,
//     TouchableOpacity,
//     StyleSheet,
//     Dimensions,
//     Vibration,
//     Modal,
// } from 'react-native';
// import React, { useEffect, useState, useRef } from 'react';
// import WineSvg from '../assets/svg/WineSvg';
// import PalmSvg from '../assets/svg/PalmSvg';
// import CastleSVG from '../assets/svg/CastleSVG';
// import MeetDrinkSvg from '../assets/svg/MeetDrinkSvg';
// import RedCoin from '../assets/svg/RedCoin';
//
// const { width, height } = Dimensions.get('window');
//
// const ICONS = [
//     { name: 'Wine', component: <WineSvg /> },
//     { name: 'Palm', component: <PalmSvg /> },
//     { name: 'Castle', component: <CastleSVG /> },
//     { name: 'MeetDrink', component: <MeetDrinkSvg /> },
// ];
//
// const GameProccesScreen = ({ navigation }) => {
//     const [target, setTarget] = useState(null);
//     const [items, setItems] = useState([]);
//     const [score, setScore] = useState(0);
//     const [timeLeft, setTimeLeft] = useState(5);
//     const [gameOver, setGameOver] = useState(false);
//     const timerRef = useRef(null);
//
//     const generateRound = () => {
//         const randomTarget = ICONS[Math.floor(Math.random() * ICONS.length)];
//         setTarget(randomTarget);
//
//         const generatedItems = [];
//         for (let i = 0; i < 10; i++) {
//             const randomIcon = ICONS[Math.floor(Math.random() * ICONS.length)];
//             const posX = Math.random() * (width - 60);
//             const posY = Math.random() * (height - 200) + 80;
//             generatedItems.push({ ...randomIcon, x: posX, y: posY, id: i });
//         }
//
//         setItems(generatedItems);
//         setTimeLeft(5);
//     };
//
//     useEffect(() => {
//         generateRound();
//     }, []);
//
//     useEffect(() => {
//         timerRef.current = setInterval(() => {
//             setTimeLeft((prev) => {
//                 if (prev === 1) {
//                     generateRound();
//                     return 5;
//                 }
//                 return prev - 1;
//             });
//         }, 1000);
//
//         return () => clearInterval(timerRef.current);
//     }, []);
//
//     const handlePress = (item) => {
//         if (item.name === target.name) {
//             setScore((s) => s + 1);
//             Vibration.vibrate(50);
//             setItems((prev) => prev.filter((i) => i.id !== item.id));
//         } else {
//             Vibration.vibrate(200);
//             clearInterval(timerRef.current);
//             setGameOver(true);
//         }
//     };
//
//     return (
//         <View style={styles.container}>
//             <View style={styles.topBar}>
//                 {target && (
//                     <View style={styles.targetIcon}>
//                         {target.component}
//                         <Text style={styles.timerText}>{timeLeft} sec</Text>
//                     </View>
//                 )}
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                     <Text style={styles.scoreText}>{score}00</Text>
//                     <RedCoin />
//                 </View>
//             </View>
//
//             {items.map((item) => (
//                 <TouchableOpacity
//                     key={item.id}
//                     onPress={() => handlePress(item)}
//                     style={[styles.iconWrapper, { top: item.y, left: item.x }]}
//                 >
//                     {item.component}
//                 </TouchableOpacity>
//             ))}
//
//             {/* Модальное окно при поражении */}
//             <Modal visible={gameOver} transparent animationType="fade">
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalContent}>
//                         <Text style={styles.modalText}>Oops, attempt failed. Try again!</Text>
//                         <TouchableOpacity
//                             style={styles.modalButton}
//                             onPress={() => navigation.goBack()}
//                         >
//                             <Text style={styles.modalButtonText}>Go back</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };
//
// export default GameProccesScreen;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     topBar: {
//         paddingTop: 60,
//         paddingHorizontal: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     targetIcon: {
//         alignItems: 'center',
//         marginLeft: '38%',
//         borderWidth: 2,
//         borderColor: '#fff',
//         borderRadius: 5,
//         padding: 20,
//     },
//     timerText: {
//         color: 'red',
//         fontSize: 14,
//         marginTop: 4,
//     },
//     scoreText: {
//         color: 'red',
//         marginRight: 6,
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     iconWrapper: {
//         position: 'absolute',
//     },
//     modalContainer: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,0.6)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalContent: {
//         backgroundColor: '#fff',
//         padding: 30,
//         borderRadius: 10,
//         alignItems: 'center',
//     },
//     modalText: {
//         fontSize: 18,
//         marginBottom: 20,
//         color: '#000',
//         textAlign: 'center',
//     },
//     modalButton: {
//         backgroundColor: '#ff4444',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 8,
//     },
//     modalButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//     },
// });

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Vibration,
    Modal,
} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WineSvg from '../assets/svg/WineSvg';
import PalmSvg from '../assets/svg/PalmSvg';
import CastleSVG from '../assets/svg/CastleSVG';
import MeetDrinkSvg from '../assets/svg/MeetDrinkSvg';
import RedCoin from '../assets/svg/RedCoin';
import {addBalance} from '../redux/slices/balanceSlice';
import ShipSvg from '../assets/svg/ShipSvg';
import SmallGuitar from '../assets/svg/SmallGuitar';
import ShesterenkaSvg from '../assets/svg/ShesterenkaSvg';
import SmallBall from '../assets/svg/SmallBall';

const { width, height } = Dimensions.get('window');



const GameProccesScreen = ({ navigation }) => {
    const purchasedItems = useSelector((state) => state.purchases.items);
    // console.log('purchasedItems: ', purchasedItems);
    const { vibration } = useSelector((state) => state.settings);
    const [target, setTarget] = useState(null);
    const [items, setItems] = useState([]);
    const [timeLeft, setTimeLeft] = useState(5);
    const [gameOver, setGameOver] = useState(false);
    const timerRef = useRef(null);

    const dispatch = useDispatch();
    const balance = useSelector((state) => state.balance.value);

    const ICONS_BASE = [
        { name: 'Wine', component: <WineSvg /> },
        { name: 'Palm', component: <PalmSvg /> },
        { name: 'Castle', component: <CastleSVG /> },
        { name: 'MeetDrink', component: <MeetDrinkSvg /> },
    ];

    const EXTRA_ICONS = [];

    if (purchasedItems.includes('ball')) {
        EXTRA_ICONS.push({ name: 'Ball', component: <SmallBall /> });
    }
    if (purchasedItems.includes('guitar')) {
        EXTRA_ICONS.push({ name: 'Guitar', component: <SmallGuitar /> });
    }
    if (purchasedItems.includes('gear')) {
        EXTRA_ICONS.push({ name: 'Gear', component: <ShesterenkaSvg /> });
    }
    if (purchasedItems.includes('ship')) {
        EXTRA_ICONS.push({ name: 'Ship', component: <ShipSvg /> });
    }

    const ICONS = [...ICONS_BASE, ...EXTRA_ICONS];

    const generateRound = () => {
        const randomTarget = ICONS[Math.floor(Math.random() * ICONS.length)];
        setTarget(randomTarget);

        const generatedItems = [];
        for (let i = 0; i < 10; i++) {
            const randomIcon = ICONS[Math.floor(Math.random() * ICONS.length)];
            const posX = Math.random() * (width - 60);
            const posY = Math.random() * (height - 200) + 80;
            generatedItems.push({ ...randomIcon, x: posX, y: posY, id: i });
        }

        setItems(generatedItems);
        setTimeLeft(5);
    };

    useEffect(() => {
        generateRound();
    }, []);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    generateRound();
                    return 5;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, []);

    const handlePress = (item) => {

            if (vibration) {
                Vibration.vibrate(100);
            }
        if (item.name === target.name) {
            dispatch(addBalance(100));
            Vibration.vibrate(50);
            setItems((prev) => prev.filter((i) => i.id !== item.id));
        } else {
            Vibration.vibrate(200);
            clearInterval(timerRef.current);
            setGameOver(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                {target && (
                    <View style={styles.targetIcon}>
                        {target.component}
                        <Text style={styles.timerText}>{timeLeft} sec</Text>
                    </View>
                )}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.scoreText}>{balance}</Text>
                    <RedCoin />
                </View>
            </View>

            {items.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => handlePress(item)}
                    style={[styles.iconWrapper, { top: item.y, left: item.x }]}
                >
                    {item.component}
                </TouchableOpacity>
            ))}

            <Modal visible={gameOver} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Oops, attempt failed. Try again!</Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.modalButtonText}>Go back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default GameProccesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    topBar: {
        paddingTop: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    targetIcon: {
        alignItems: 'center',
        marginLeft: '38%',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 5,
        padding: 20,
    },
    timerText: {
        color: 'red',
        fontSize: 14,
        marginTop: 4,
    },
    scoreText: {
        color: 'red',
        marginRight: 6,
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconWrapper: {
        position: 'absolute',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        color: '#000',
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: '#ff4444',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
