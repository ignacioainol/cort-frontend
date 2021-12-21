import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import blackkiss from '../../assets/images/black_kiss.png';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid ">
                <Link to="/" className="navbar-brand">
                    Escort App
                    <img src={blackkiss} className='kissImg animate__animated animate__zoomIn' alt="kiss logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active" className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" activeClassName="active" className='nav-link'>Registate Acá!</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" activeClassName="active" className='nav-link'>Inicia Sesión</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/destacadas" activeClassName="active" className='nav-link'>Escorts Destacadas</NavLink>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </li> */}
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
