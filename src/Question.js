import React, { useState } from 'react';
import './css/Question.css';
import MinusIcon from './images/icon-minus.svg';
import PlusIcon from './images/icon-plus.svg';

export const Question = ({ question, answer }) => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleAnswer = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (

        <article className="question">


            <div className="question__heading">

                <p className="question__heading-header" onClick={toggleAnswer}>
                    {question}
                </p>

                <button className="expand-collapse-btn" onClick={toggleAnswer}>
                    <img
                        src={isCollapsed ? PlusIcon : MinusIcon}
                        alt=""
                    />
                </button>
            </div>

            {
                !isCollapsed &&
                <p className="answer">
                    {answer}
                </p>
            }



        </article>
    )
}
