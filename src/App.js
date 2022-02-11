import { Switch } from "react-router-dom";

import Header from "./components/header.component";
import Logout from "./components/logout.component";
import LogIn from "./components/login.component";
import SingUp from "./components/singup.component";
import Home from "./components/home.componet";
import Layout from "./components/layout.component";
import PrivateRoute from "./components/common/privateRoute";
import PublicRoute from "./components/common/publicRoute";

const App = () => {
    return (
        <>
            <Header />
            <Layout>
                <Switch>
                    <PrivateRoute path="/logout" component={Logout} />
                    <PublicRoute path="/login" component={LogIn} />
                    <PublicRoute path="/singup" component={SingUp} />
                    <PrivateRoute path="/" component={Home} />
                </Switch>
            </Layout>
        </>
    );
};

export default App;
