import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionsLevel } from '../Redux/Slices/level';

const Timer = () => {

    const { isFinished, timer } = useSelector(state => state.level)
    const { finishGame, timerHandler } = actionsLevel
    const dispatch = useDispatch()

    useEffect(() => {

        const interval = setInterval(() => {
            dispatch(timerHandler())
        }, 1000)

        if (timer === 0) return () => dispatch(finishGame())

        return () => clearInterval(interval)
    }, [timer])


    return timer
};

export default Timer;