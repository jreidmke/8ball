import React, {useState} from 'react';
import Answers from './Answers';
import "./8Ball.css";

const EightBall = (prop) => {
    const randIdx = () => Math.floor(Math.random() * Answers.length);

    const [answer, setAnswer] = useState('Give me a shake!');
    const [color, setColor] = useState('white');

    const shake = () => {
        const idx = randIdx();
        setAnswer(Answers[idx].msg)
        setColor(Answers[idx].color);
    };

    const button = <button onClick={shake}>Shake it Up</button>
    return (
        <div style={{'background-color': color}}>
            <h1>{answer}</h1>
            {button}
        </div>
    )
}

export default EightBall;