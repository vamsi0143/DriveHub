import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Navbar() {
    const { darkMode, toggleTheme } =
        useContext(ThemeContext);

    return (
        <nav
            className={
                darkMode
                    ? "navbar dark-navbar"
                    : "navbar"
            }
        >
            <h2>🚗 DriveHub</h2>

            <div className="links">
                <NavLink to="/">Home</NavLink>

                <NavLink to="/about">
                    About
                </NavLink>

                <NavLink to="/cars">
                    Cars
                </NavLink>

                <NavLink to="/contact">
                    Contact
                </NavLink>

                <NavLink to="/profile">
                    Profile
                </NavLink>
            </div>

            <button onClick={toggleTheme}>
                {darkMode ? "☀️" : "🌙"}
            </button>
        </nav>
    );
}

export default Navbar;