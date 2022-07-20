const Text = (props) => {

    return (
        <p className="quiz-item">
            <div className="item-type">
                {
                    props.type === 'Q' ? 'Question' : 'Answer'
                }
            </div>
            <div className="item-value">
                {
                    props.value
                }
            </div>
        </p>
    );
};

export default Text;