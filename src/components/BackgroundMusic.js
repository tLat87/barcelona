import React, { useEffect, useState } from 'react';
import Sound from 'react-native-sound';
import { useSelector } from 'react-redux';

const BackgroundMusic = () => {
    const { music } = useSelector((state) => state.settings);
    const [backgroundMusic, setBackgroundMusic] = useState(null);

    useEffect(() => {
        if (music) {
            const musicMain = new Sound('gggg.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('Ошибка загрузки звука:', error);
                    return;
                }

                musicMain.setNumberOfLoops(-1);
                musicMain.setVolume(0.5);
                musicMain.play((success) => {
                    if (!success) {
                        console.log('Ошибка воспроизведения');
                    }
                });

                setBackgroundMusic(musicMain);
            });
        } else {
            if (backgroundMusic) {
                backgroundMusic.stop(() => backgroundMusic.release());
                setBackgroundMusic(null);
            }
        }

        return () => {
            if (backgroundMusic) {
                backgroundMusic.stop(() => backgroundMusic.release());
                setBackgroundMusic(null);
            }
        };
    }, [music]);

    return null;
};

export default BackgroundMusic;
