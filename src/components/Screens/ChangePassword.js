import React, { useState } from 'react';
import { Loading } from '../shared/Loading';

export const ChangePassword = () => {


    const [changePasswordData, setChangePasswordData] = useState({
        password: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='container p-4'>
            <div className='col-md-6 offset-md-3'>
                <h3 className='animate__animated animate__bounceInLeft'>Actualiza tu contraseña</h3>
                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 mb-3">
                            <label htmlFor="password" className="form-label">Contraseña Actual</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
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
