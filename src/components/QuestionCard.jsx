import React from "react";
import Text from './Text';
import Button from './Button';

const QuestionCard = (props) => {

    return (
        <div className="card">
            <div className="question-wrapper">
                <Button value='hide'/>
                <Text type='Q' value={props.question} />
            </div>
            <div className="question-wrapper">
                <Button value='show'/>
                <Text type='A' value={props.answer} />
            </div>
        </div>
    );
};

export default QuestionCard;