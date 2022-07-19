const Text = (props) => {

    return (
        <p className="quiz-text">
            {
                props.value
            }
        </p>
    );
};

export default Text;