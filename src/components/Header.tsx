import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <NavLink to="/">
                    <img
                        src="/imgs/taskifier_logo.svg"
                        alt="Taskifier Logo"
                        className="taskifier-logo"
                    />
                </NavLink>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="menu-icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <path
                        fill="none"
                        stroke="var(--neon-blue-icons-fill)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 8h12M6 12h12M6 16h12"
                    />
                </svg>

                <nav
                    className={`nav__container ${isMenuOpen ? "nav__container-open" : ""}`}
                >
                    <div className="nav-and-items">
                        <div className="title-and-icon">
                            <p>Navigation menu</p>

                            <button onClick={() => setIsMenuOpen(false)}>
                                Close
                            </button>
                        </div>

                        <ul className="nav-list">
                            <li className="nav__item">
                                <NavLink
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink
                                    to="/projects"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink
                                    to="/statistics"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="logo"
                        style={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "blue",
                            borderRadius: "50%",
                        }}
                    ></div>
                </nav>
            </header>
        </>
    );
}

export default Header;
