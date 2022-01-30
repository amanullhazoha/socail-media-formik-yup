import { Route, Switch } from "react-router-dom";

import Header from "./components/header.component";
import LogIn from "./components/login.component";
import SingUp from "./components/singup.component";
import Home from "./components/home.componet";
import Layout from "./components/layout.component";

const App = () => {
    return (
        <>
            <Header />
            <Layout>
                <Switch>
                    <Route path="/login" component={LogIn} />
                    <Route path="/singup" component={SingUp} />
                    <Route path="/" component={Home} />
                </Switch>
            </Layout>
        </>
    );
};

export default App;
