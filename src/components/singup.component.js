import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "./common/button.component";
import Label from "./common/label.component";
import singupSchema from "../schema/singup.schema";

const SingUp = (props) => {
    const formInitialize = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        country: "",
        gender: "",
        agree: "",
    };

    return (
        <div className="row justify-content-center">
            <div className="col-4 singup">
                <Formik
                    initialValues={formInitialize}
                    validationSchema={singupSchema}
                    onSubmit={(value, action) => {
                        console.log(value);
                        props.history.push("/");
                        action.setSubmitting(false);
                    }}
                >
                    {(formikProps) => (
                        <Form onSubmit={formikProps.handleSubmit}>
                            <Label id="firstName" label="First Name" />
                            <Field
                                className="form-control"
                                id="firstName"
                                type="text"
                                name="firstName"
                            />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="firstName" />
                            </div>

                            <Label id="lastName" label="Last Name" />
                            <Field
                                className="form-control"
                                id="lastName"
                                type="text"
                                name="lastName"
                            />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="lastName" />
                            </div>

                            <Label id="email" label="Email" />
                            <Field
                                className="form-control"
                                id="emial"
                                type="email"
                                name="email"
                            />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="email" />
                            </div>

                            <Label id="phone" label="Phone" />
                            <Field
                                className="form-control"
                                id="phone"
                                type="tel"
                                name="phone"
                            />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="phone" />
                            </div>

                            <Label id="password" label="Password" />
                            <Field
                                className="form-control"
                                id="password"
                                type="password"
                                name="password"
                            />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="password" />
                            </div>

                            <Label
                                id="confirmPassword"
                                label="Confirm Password"
                            />
                            <Field
                                className="form-control"
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                            />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="confirmPassword" />
                            </div>

                            <Label id="country" label="Country" />
                            <Field
                                className="form-select"
                                as="select"
                                id="country"
                                name="country"
                            >
                                <option>Select Country</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="india">India</option>
                                <option value="pakistan">Pakistan</option>
                            </Field>
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="country" />
                            </div>

                            <Label label="Gender:" />
                            <Field
                                id="male"
                                type="radio"
                                name="gender"
                                value="male"
                            />
                            <Label id="male" label="Male" />
                            <Field
                                id="female"
                                type="radio"
                                name="gender"
                                value="female"
                            />
                            <Label id="female" label="Female" />
                            <Field
                                id="other"
                                type="radio"
                                name="gender"
                                value="other"
                            />
                            <Label id="other" label="Other" />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="gender" />
                            </div>

                            <div className="d-block">
                                <Field
                                    id="agree"
                                    type="checkbox"
                                    name="agree"
                                />
                                <Label
                                    id="agree"
                                    label="I Agree To Create An Account."
                                />
                            </div>
                            <div style={{ color: "red" }}>
                                <ErrorMessage name="agree" />
                            </div>

                            <Button
                                className="btn btn-primary d-block m-auto"
                                type="submit"
                            >
                                SUBMIT
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SingUp;
