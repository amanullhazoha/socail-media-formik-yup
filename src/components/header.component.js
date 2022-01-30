import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className='navbar-brand' to="/">Formik</Link>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/singup">Sing Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log In</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;