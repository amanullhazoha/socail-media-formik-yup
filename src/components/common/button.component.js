const Button = ({ type, buttonClick, children, ...rest}) => {
    return (
        <button type={type} onClick={buttonClick} {...rest}>
            {children}
        </button>
    );
}
 
export default Button;