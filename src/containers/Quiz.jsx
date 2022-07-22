import React, { useEffect, useState } from "react";
import QuestionCard from '../components/QuestionCard';

const Quiz = () => {

    const [quizData,setQuizData] = useState([]);

    useEffect(() => {

        fetch('./data/quiz.json')
        .then((response) => {

            return response.json();
        }).then((data) => {

            setQuizData(data);
        }).catch((error) => {

            console.log(error);
        });

    },[]);

    return(
        <div className="wrapper">
            {
                quizData.map(quiz => { return <QuestionCard key={quiz.id} question={quiz.question} answer={quiz.answer} /> })
            }
        </div>
    );
};

export default Quiz;