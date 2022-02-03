import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { signout } from '../../actions/userActions';
import blackkiss from '../../assets/images/black_kiss.png';

export const Header = () => {
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const handleLogout = () => {
        dispatch(signout());
    }

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
                        {!userInfo &&
                            <li className="nav-item">
                                <NavLink to="/register" activeclassname="active" className='nav-link'>Publícate Acá!</NavLink>
                            </li>
                        }

                        {!userInfo &&
                            <li className="nav-item">
                                <NavLink to="/login" activeclassname="active" className='nav-link'>Inicia Sesión</NavLink>
                            </li>
                        }
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}

                    {userInfo &&
                        <ul className="navbar-nav me-right">
                            <li className="nav-item dropdown">
                                {/* <span activeclassname="active" onClick={handleLogout} className='nav-link logout'>Cerrar Sesión</span> */}
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{userInfo.nickname}</a>
                                <div className="dropdown-menu mLeft">
                                    {/* <a className="dropdown-item" href="#">Mi Perfíl</a> */}
                                    <Link to="/myprofile" className="dropdown-item">
                                        Mi Perfil
                                    </Link>
                                    <a className="dropdown-item" onClick={handleLogout} href="#">Cerrar Sesión</a>
                                    {/* <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a> */}
                                </div>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>
    )
}
