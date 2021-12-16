import React, { useState } from 'react';

export const Register = () => {

    const [newUser, setNewUser] = useState({
        nickname: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role_id: 3
    });

    const handleChange = e => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newUser);
    }

    return (
        <div className='container p-4'>
            <h3 className='animate__animated animate__bounceInLeft'>Regístrate Putita</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nickname" className="form-label">Nickname</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nickname"
                        name="nickname"
                        placeholder='Con este nombre se te identificará'
                        onChange={handleChange}
                        aria-describedby="nicknamelHelp" />
                    <div id="nicknamelHelp" className="form-text">Nombre artistico</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        placeholder='Ingrese su Nombre'
                        onChange={handleChange}
                        aria-describedby="firstnamelHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        name="lastname"
                        placeholder='Ingrese su Apellido'
                        onChange={handleChange}
                        aria-describedby="lastnamelHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder='Ingrese su Email'
                        onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder='Ingrese contraseña'
                        onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
