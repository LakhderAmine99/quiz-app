const Button = (props) => {

    return(
        <button onClick={props.handler} className="btn">
            {
                props.value
            }
        </button>
    );
};

export default Button;