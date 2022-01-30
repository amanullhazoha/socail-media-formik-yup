import { object, string } from "yup";

const loginSchema = object().shape({
    email: string()
        .trim()
        .email("Please Enter a Valid Email.")
        .min(3, "Your Email Length Less Then 3.")
        .max(50, "Your Email Geter Then 50.")
        .required("Please Enter Your Email."),
        
    password: string()
        .min(6, "Your Password Length Less Then 6.")
        .max(20, "Your Password Geter Then 20.")
        .required("Please Enter Your Password."),
})

export default loginSchema;