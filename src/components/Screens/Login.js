import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions/userActions';
import { Loading } from '../shared/Loading';

export const Login = (props) => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [loadingLogin, setLoadingLogin] = useState(false);

    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            console.log(userInfo);
            if (userInfo.first_login) {
                navigate("/changePassword");
            } else {
                navigate(`/perfil/${userInfo.user_id}`);
            }
        }
    }, [userInfo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadingLogin(true);
        dispatch(signin(loginData));
    }

    const handleChange = e => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    return (
        <>
            {loadingLogin ? <Loading /> :
                <div className='container p-4'>
                    <div className='col-md-6 offset-md-3'>
                        <h3 className='animate__animated animate__bounceInLeft'>Inicia Sesión</h3>
                        <form onSubmit={handleSubmit}>

                            <div className="row">
                                <div className="col-xs-12 col-sm-12 mb-3">
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder='Tu correo electrónico'
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-12 mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder='*******'
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Ingresar</button>

                        </form>
                    </div>
                </div>
            }
        </>
    )
}
