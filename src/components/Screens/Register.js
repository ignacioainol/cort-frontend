import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export const Register = () => {

    const { addEscort } = useContext(GlobalContext);


    const [newEscort, setNewEscort] = useState({
        id: Math.random(0, 9999),
        role_id: 3,
        nickname: '',
        description: '',
        email: '',
        phone: '',
        commune_id: '',
        age: ''
    });

    const handleChange = e => {
        console.log(e.target.name, e.target.value);
        setNewEscort({ ...newEscort, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        addEscort();
    }

    return (
        <div className='container p-4'>
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

    )
}
