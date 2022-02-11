import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import getCurrentUser from "../../service/authService";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
                if (getCurrentUser()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { form: props.location }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;
