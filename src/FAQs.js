import React from 'react';
import './css/FAQs.css'
import iconStar from './images/icon-star.svg';
import { Question } from './Question';
import { questionsAndAnswers } from './questions-data';

export const FAQs = () => {
    return (

        <section className="faqs">

            <div className="faqs__heading">

                <div className="faqs__heading_img-container">
                    <img src={iconStar} alt="Icon Start" />
                </div>

                <h1 className="faqs__heading-header">
                    FAQs
                </h1>
            </div>

            {/* Questions */}

            {
                questionsAndAnswers.map(questionAndAnswer => {

                    return (
                        <Question
                            question={questionAndAnswer.question}
                            answer={questionAndAnswer.answer}
                        />
                    )
                })
            }
        </section>
    )
}
