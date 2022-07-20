import React from "react";
import QuestionCard from '../components/QuestionCard';

const Quiz = () => {

    const quizData = [
        {
            question:"What's your name",
            answer:"Can't tell you :)"
        },
        {
            question:"What's your name",
            answer:"Can't tell you :)"
        },
        {
            question:"What's your name",
            answer:"Can't tell you :)"
        },
        {
            question:"What's your name",
            answer:"Can't tell you :)"
        }
    ];

    return(
        <div className="wrapper">
            {
                quizData.map(quiz => { return <QuestionCard question={quiz.question} answer={quiz.answer} /> })
            }
        </div>
    );
};

export default Quiz;