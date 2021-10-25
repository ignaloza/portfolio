import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return(
        <header className="header-transparent">
            <nav className="navbar navbar-expand-lg text-center">
                <div className="container">
                    <Link to="/" className="navbar-brand">Ignacio<br/>Lozada</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fi-xwluxl-three-bars-wide"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/works" className="nav-link">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contacto</Link>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </header>
    );
}

export default Navbar;