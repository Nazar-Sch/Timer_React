import React, { useState, useEffect} from 'react';
import moment from 'moment';

import '../../assets/style/style.scss';
import './style.scss';

const Timer = ({ time, autostart, step, onTick, onTimeStart, onTimePaused}) => {
    const [count, setCount] = useState(time);
    const [isActive, setIsActive] = useState(false);
    
    function changeActive() {
        setIsActive(!isActive);
    }

    function resetCount() {
        setCount(time);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if(!isActive) return onTimePaused();
        if (isActive || autostart) {
            onTick(count);
            if(!count) return;
            interval = setInterval(() => {
              setCount((count) => {
                return count - 1;
              }
                );
            }, step);
        } else if (!isActive && count !== 0) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    }, [isActive, count, autostart, step, onTick, onTimeStart, onTimePaused]);
    return (
        <>
            <div className="buttons">
                <button className="button__item start" onClick={changeActive}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button__item" onClick={resetCount}>
                    Reset
                </button>
            </div>
            <div className="outPut_timer">
                {moment.utc(count*1000).format("HH:mm:ss")}
            </div>
        </>
    )

}
export default Timer;