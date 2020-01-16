import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
    return(
        <header className="header">
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item"><Link to="/" className="navigation__link">News</Link></li>
                    <li className="navigation__item"><Link to="/Auth" className="navigation__link">SignIn</Link></li>
                </ul>
            </nav>
        </header>
    )
}
