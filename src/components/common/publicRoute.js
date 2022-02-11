import { Redirect, Route } from "react-router-dom";
import getCurrentUser from "../../service/authService";

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            if(getCurrentUser()) {
                return (
                    <Redirect to={{ 
                        pathname: props.location.state ? props.location.state.from.pathname : "/",
                        state: { from: props.location }
                    }} />
                )
            } else {
                return <Component {...props} />
            }
        }} />
    )
}

export default PublicRoute;