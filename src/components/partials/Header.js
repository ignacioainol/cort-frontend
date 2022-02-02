import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import blackkiss from '../../assets/images/black_kiss.png';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid ">
                <Link to="/" className="navbar-brand">
                    Colli's Chile
                    <img src={blackkiss} className='kissImg animate__animated animate__zoomIn' alt="kiss logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" activeclassname="active" className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" activeclassname="active" className='nav-link'>Publícate Acá!</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" activeclassname="active" className='nav-link'>Inicia Sesión</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
