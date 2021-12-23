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
            <h3 className='animate__animated animate__bounceInLeft'>Regístrate</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 mb-3">
                        <label htmlFor="categoria" className="form-label">Categoría</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Seleccione una categoría</option>
                            <option value="1">Agencia</option>
                            <option value="2">Escort</option>
                            <option value="3">Masajes</option>
                            <option value="4">Moteles</option>
                            <option value="5">Fantasías</option>
                        </select>
                    </div>

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
                        <div id="nicknamelHelp" className="form-text">Su nombre artistico</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-6 mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono*</label>
                        <input
                            type="text"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            placeholder='Con este nombre se te identificará'
                            onChange={handleChange}
                            aria-describedby="nicknamelHelp" />
                        <div id="nicknamelHelp" className="form-text">Teléfono de contacto obligatorio</div>
                    </div>

                    <div className="col-xs-12 col-sm-6 mb-3">
                        <label htmlFor="nickname" className="form-label">E-mail*</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder='Con este nombre se te identificará'
                            onChange={handleChange}
                            aria-describedby="emaillHelp" />
                        <div id="emaillHelp" className="form-text">Email es obligatório</div>
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Enviár</button>

            </form>
        </div>

    )
}
