const Button = (props) => {

    return(
        <button className="btn">
            {
                props.value
            }
        </button>
    );
};

export default Button;