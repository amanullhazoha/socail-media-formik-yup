import { object, string, number, boolean, ref } from "yup";

const singupSchema = object().shape({
    firstName: string()
        .trim()
        .min(3, "Your first name is less then 3 characters.")
        .max(15, "Your first name is getter then 15 characters.")
        .required("First name is required."),
    
    lastName: string()
        .trim()
        .min(2, "Your first name is less then 2 characters.")
        .max(15, "Your first name is getter then 15 characters.")
        .required("Last name is required."),

    email: string()
        .trim()
        .email("Your email is invalid.")
        .min(3, "Your first name is less then 3 characters.")
        .max(50, "Your first name is getter then 50 characters.")
        .required("Email is required."),
    
    phone: number()
        .required("Phone number is required."),

    password: string()
        .min(6, "You password less then 6 characters.")
        .max(20, "You password getter then 20 characters.")
        .required("Password is required."),
    
    confirmPassword: string()
        .oneOf([ref("password"), null], "Password don't match.")
        .required("Password is required."),

    country: string()
        .required("Country is required."),
    
    gender: string()
        .required("Gender is required."),
    
    agree: boolean()
        .required("Please checked agree."),
})

export default singupSchema;