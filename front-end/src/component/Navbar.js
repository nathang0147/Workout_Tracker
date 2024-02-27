import {Link} from "react-router-dom";
import {useLogout} from "../Hook/useLogout";

const Navbar = () => {
    const {logout} = useLogout();

    const handleClick = () => {
        logout();
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout buddy</h1>

                </Link>
                <nav>
                    <div>
                        <button onClick={handleClick}>Log out</button>
                    </div>

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
