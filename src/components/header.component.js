import { Link } from "react-router-dom";
import getCurrentUser from "../service/authService";

const Header = () => {
    console.log(getCurrentUser());
    return (
        <header id="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">
                        Formik
                    </Link>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        {!getCurrentUser() && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/singup">
                                        Sing Up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Log In
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    <ul className="navbar-nav">
                        {getCurrentUser() && (
                            <>
                                <li className="nav-item">
                                    <p className="nav-link">{getCurrentUser().username}</p>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">
                                        Log out
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

