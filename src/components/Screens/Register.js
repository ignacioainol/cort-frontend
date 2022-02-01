import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerEscort } from '../../actions/escortActions';
import { listRegions } from '../../actions/regionActions';
import { Loading } from '../shared/Loading';

export const Register = () => {

    const [newEscort, setNewEscort] = useState({
        role_id: 3,
        nickname: '',
        description: '',
        email: '',
        phone: '',
        commune_id: '',
        age: ''
    });

    const escortRegister = useSelector(state => state.escortRegister);
    const { loading, escortInfo, error } = escortRegister;
    const dispatch = useDispatch();

    const regionsList = useSelector(state => state.regionsList);
    console.log(regionsList);

    useEffect(() => {
        dispatch(listRegions);
    }, []);

    const handleChange = e => {
        setNewEscort({ ...newEscort, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(error);
        dispatch(registerEscort(newEscort));
    }

    return (
        <div className='container p-4'>
            {loading ? <Loading /> :
                error ? <div>{error}</div> :
                    escortInfo ? <div>Nos contactaremos contigo para habilitar su publicación</div> :
                        <div>
                            <h3 className='animate__animated animate__bounceInLeft'>Regístrate</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 mb-3">
                                        <label htmlFor="nickname" className="form-label">Tu nick / pseudónimo*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nickname"
                                            name="nickname"
                                            placeholder='Con este nombre se te identificará'
                                            onChange={handleChange}
                                            aria-describedby="nicknamelHelp" />
                                        <div id="nicknamelHelp" className="form-text">Éste es el pseudonimo que te llevará a la fama</div>
                                    </div>

                                    <div className="col-xs-12 col-sm-6 mb-3">
                                        <label htmlFor="age" className="form-label">Edad</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="age"
                                            name="age"
                                            placeholder='Ingrese su edad'
                                            onChange={handleChange}
                                            aria-describedby="nicknamelHelp" />
                                        <div id="ageHelp" className="form-text">Cuantas primaveras tienes? </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 mb-3">
                                        <label htmlFor="telefono" className="form-label">Teléfono*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder='Con este nombre se te identificará'
                                            onChange={handleChange}
                                            aria-describedby="nicknamelHelp" />
                                        <div id="phoneHelp" className="form-text">Teléfono de contacto obligatorio</div>
                                    </div>

                                    <div className="col-xs-12 col-sm-6 mb-3">
                                        <label htmlFor="email" className="form-label">E-mail*</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder='Tu correo electrónico'
                                            onChange={handleChange}
                                            aria-describedby="emaillHelp" />
                                        <div id="emaillHelp" className="form-text">Email es obligatório</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 mb-3">
                                        <label htmlFor="region" className="form-label">Región</label>
                                        <select className="form-select" name="region" onChange={handleChange} aria-label="Default select example">
                                            <option defaultValue>Seleccione Región</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div className="col-xs-12 col-sm-6 mb-3">
                                        <label htmlFor="commune" className="form-label">Comuna</label>
                                        <select className="form-select" name="commune_id" onChange={handleChange} aria-label="Default">
                                            <option defaultValue>Selecciona tu comuna</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>


                                <button type="submit" className="btn btn-primary">Enviár</button>

                            </form>
                        </div>
            }
        </div>

    )
}
