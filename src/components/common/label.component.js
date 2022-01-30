const Label = ({ id, label, ...rest }) => {
    return (
        <label htmlFor={id} {...rest}>{label}</label>
    );
}
 
export default Label;