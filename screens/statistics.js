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
        <div className="container">
            <div className="Timers">
                <h2>Exercise</h2>
                <div id="display">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>
                <div id="buttons">
                    {!timerOn && time === 0 && (
                        <button onClick={() => setTimerOn(true)}>Start</button>
                    )}
                    {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
                    {!timerOn && time > 0 && (
                        <button onClick={() => setTime(0)}>Reset</button>
                    )}
                    {!timerOn && time > 0 && (
                        <button onClick={() => setTimerOn(true)}>Resume</button>
                    )}
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