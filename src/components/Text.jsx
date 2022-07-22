const Text = (props) => {

    return (
        <div className={!props.visible ? 'quiz-item hide' : 'quiz-item'}>
            <div className="item-value">
                {
                    props.value
                }
            </div>
        </div>
    );
};

export default Text;