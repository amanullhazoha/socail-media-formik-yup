import { ErrorMessage, Field, Form, Formik } from "formik";

import Button from "./common/button.component";
import loginSchema from "../schema/login.schema";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LogIn = ({ history }) => {
    const formValue = { email: "", password: "" };
    return (
        <div className="row justify-content-center">
            <div className="col-md-4 login">
                <Formik
                    initialValues={formValue}
                    validationSchema={loginSchema}
                    onSubmit={(value, action) => {
                        console.log(value);
                        history.push("/");
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
                            <div style={{color: "red"}}><ErrorMessage name="email"/></div>

                            <Field
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                name="password"
                            />
                            <div style={{color: "red"}}><ErrorMessage name="password"/></div>

                            <Button type="submit" className="btn btn-primary">Log In</Button>
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
