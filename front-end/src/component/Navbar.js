import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout buddy</h1>

                </Link>
                <nav>
                    <div>
                        <Link to="/signup">Sign up</Link>
                        <Link to="/login">Log in</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
