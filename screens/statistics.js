import * as React from 'react';
import "./statisticsComponents/statistics.css"
import {StyleSheet} from 'react-native';

/*
const statistics = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Statistics</Text>
        </View>
    )
} */

// functional stopwatch
const statistics = () => {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);

    React.useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        else if (!timerOn) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [timerOn]);

    return (
        <div className="background">
        <span className="title">Statistics</span>
        <span className="pfp"></span>
        <div className="rectangle48"></div>
            <div className="tracker-widget">
                <h2 className="header">Exercise</h2>
                <div className="timer-box">
                    <div id="display" className="timer-text">
                        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                    </div>
                    <span className="small-timer-text">/1hr</span>
                </div>
                <div id="buttons">
                    <div className="button-start">
                        {!timerOn && time === 0 && (
                            <button onClick={() => setTimerOn(true)} className="button-text-start">Start Recording</button>
                        )}
                    </div>
                    <div className="button-stop">
                        <span className="stop-button"></span>
                        {timerOn && <button onClick={() => setTimerOn(false)} className="button-text-stop">Stop Recording</button>}
                    </div>
                    <div className="button-reset">
                        {!timerOn && time > 0 && (
                            <button onClick={() => setTime(0)} className="button-text-reset">Reset</button>
                        )}
                    </div>
                    <div className="button-resume">
                        {!timerOn && time > 0 && (
                            <button onClick={() => setTimerOn(true)} className="button-text-resume">Resume</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C0C0E',
    },
})

export default statistics;