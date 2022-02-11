import { object, string } from "yup";

const loginSchema = object().shape({
    email: string()
        .trim()
        .required("Please Enter Your Email."),
        
    password: string()
        .required("Please Enter Your Password."),
})

export default loginSchema;