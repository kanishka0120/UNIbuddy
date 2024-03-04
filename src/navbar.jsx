import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const goToLogin = (event) => {
        event.preventDefault();
        navigate('src/login'); // Corrected navigation path
    };

    return (
        <nav>
            <div className="logo">
                <img src="src/web/main_logo.png" alt="logo" />
            </div>
            <ul>
                <li>
                    <Link to="/" className="active">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/team">Team</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <a href="src/login" onClick={goToLogin}>Go to Login</a>
        </nav>
    );
};

export default Navbar;
