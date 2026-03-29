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
                        className="header__logo"
                    />
                </NavLink>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="header__menu-icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <path
                        fill="none"
                        stroke="var(--neon-blue-icons-fill)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 8h12M6 12h12M6 16h12"
                    />
                </svg>

                <nav
                    className={`header__nav ${isMenuOpen ? "header__nav-open" : ""}`}
                >
                    <div className="header__nav-items">
                        <div className="header__title-icon">
                            <p>Navigation menu</p>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 20 20"
                                className="header__close-button"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <path
                                    fill="var(--red-warning-texts)"
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <NavLink
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="header__nav-item">
                                <NavLink
                                    to="/projects"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="header__nav-item">
                                <NavLink
                                    to="/statistics"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <img
                        src="../../public/imgs/logo_icon.svg"
                        alt="Taskifier logo icon"
                        className="header__taskifier-icon"
                    />
                </nav>
            </header>
        </>
    );
}

export default Header;
