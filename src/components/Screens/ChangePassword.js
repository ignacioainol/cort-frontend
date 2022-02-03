import React, { useEffect, useState } from 'react';
import { Loading } from '../shared/Loading';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../../actions/userActions';

export const ChangePassword = () => {
    const navigate = useNavigate();

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const changePassword = useSelector(state => state.changePassword);
    const { loading, data, error } = changePassword;

    useEffect(() => {
        console.log(data);
        if (!userInfo) {
            navigate('/login');
        }

        if (data) {
            navigate(`/myprofile`);
        }
    }, [data]);


    const [changePasswordData, setChangePasswordData] = useState({
        user_id: userInfo?.user_id || null,
        password: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        setChangePasswordData({ ...changePasswordData, [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePassword(changePasswordData));
    }

    return (
        <div className='container p-4'>
            <div className='col-md-6 offset-md-3'>
                <h3 className='animate__animated animate__bounceInLeft'>Actualiza tu contraseña</h3>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger" role="alert">
                        {error}
                    </div>}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 mb-3">
                            <label htmlFor="password" className="form-label">Contraseña Actual</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={changePasswordData.password}
                                placeholder='*******'
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 mb-3">
                            <label htmlFor="newPassword" className="form-label">Nueva Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                name="newPassword"
                                placeholder='*******'
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 mb-3">
                            <label htmlFor="confirmNewPassword" className="form-label">Confirmar Nueva Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmNewPassword"
                                name="confirmNewPassword"
                                placeholder='*******'
                                onChange={handleChange} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Cambiar Password</button>

                </form>
            </div>
        </div>
    );
};
