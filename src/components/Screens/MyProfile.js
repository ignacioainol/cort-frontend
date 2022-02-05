import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAvatar } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';

export const MyProfile = () => {
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const navigate = useNavigate();

    const [avatar, setAvatar] = useState('https://s1.eestatic.com/2017/10/22/actualidad/actualidad_256239333_130044980_1706x960.jpg');
    const [uploadedFile, setUploadedFile] = useState({});

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }

    }, []);

    useEffect(() => {
        const formData = new FormData();
        formData.append('file', avatar);
        dispatch(changeUserAvatar(formData));
    }, [avatar]);

    const changeAvatar = useSelector(state => state.changeAvatar);
    const { loading, data, error } = changeAvatar;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        console.log("waa");
    }

    const handleChangeImage = (e) => {
        setAvatar(e.target.files[0]);
    }

    return <>
        <div className='container p-4'>
            <h3>Modifica tu perfíl</h3>
            <div className='img-wrap'>
                <img src={avatar} className="img-thumbnail imgAvatar" />
                <div className='img-description'>
                    <p> Cambia tu Avatar</p>
                    <input type="file" name="avatarImage" onChange={handleChangeImage} accept="image/png, image/jpeg" />
                </div>
            </div>
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
    </>;
};
