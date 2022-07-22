import React, { useState } from "react";
import Text from './Text';
import Button from './Button';

const QuestionCard = (props) => {

    const [Qvisible,setQVisibile] = useState(true);
    const [Avisible,setAVisibile] = useState(false);

    function toggleBlockHandler(e){

        let target = (e.target.parentElement).parentElement.children[1];

        if(e.target.previousSibling.innerHTML === 'Question'){
            
            setQVisibile(target.classList.contains('hide'));

        }else{

            setAVisibile(target.classList.contains('hide'));
        }

        target.classList.toggle('hide');
    }

    return (
        <div className="card">
            <div className="question-wrapper">
                <div className="flex">
                    <div className="item-type">Question</div>
                    <Button handler={toggleBlockHandler} value={!Qvisible ? 'show' : 'hide'} />
                </div>
                <Text visible={Qvisible} value={props.question} />
            </div>
            <div className="question-wrapper">
                <div className="flex">
                    <div className="item-type">Answer</div>
                    <Button handler={toggleBlockHandler} value={!Avisible ? 'show' : 'hide'}/>
                </div>
                <Text visible={Avisible} value={props.answer} />
            </div>
        </div>
    );
};

export default QuestionCard;