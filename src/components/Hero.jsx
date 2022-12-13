import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// data
import { data } from '../data/dummy';
// actions
import { actionsLevel } from '../Redux/Slices/level';

const Hero = () => {

    const [Question, setQuestion] = useState(null);
    const { questionNumber, className, selectedAnswer } = useSelector((state) => state.level);
    const level = useSelector(state => state.level)
    const dispatch = useDispatch()
    const { selectedQuestion } = actionsLevel


    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [questionNumber])


    


    return (
        <div className="trivia">
            <div className="question">
                {Question?.question}
            </div>
            <div className="answers">
                {Question?.answers.map((a, i) => (
                    <div
                        className={selectedAnswer === a ? className : "answer"}
                        onClick={(e) => dispatch(selectedQuestion(a))}
                        key={i}
                    >
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;