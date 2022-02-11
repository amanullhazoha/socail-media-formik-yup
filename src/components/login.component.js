import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from "./common/button.component";
import loginSchema from "../schema/login.schema";

const LogIn = ({ history }) => {
    const formValue = { email: "", password: "" };

    const handleLogin = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/login",
                data
            );
            localStorage.setItem("access_token", response.data.access_token)
            window.location.href = "/";
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-4 login">
                <Formik
                    initialValues={formValue}
                    validationSchema={loginSchema}
                    onSubmit={(values, action) => {
                        handleLogin(values);
                        action.setSubmitting(false);
                    }}
                >
                    {(formikProps) => (
                        <Form onSubmit={formikProps.handleSubmit}>
                            <Field
                                className="form-control"
                                id="email"
                                placeholder="Email Address"
                                name="email"
                            />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="email" />
                            </div>

                            <Field
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                name="password"
                            />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="password" />
                            </div>

                            <Button type="submit" className="btn btn-primary">
                                Log In
                            </Button>
                        </Form>
                    )}
                </Formik>

                <hr />
                <Link to="/singup">
                    <div className="btn btn-success">Create New Account</div>
                </Link>
            </div>
        </div>
    );
};

export default LogIn;
