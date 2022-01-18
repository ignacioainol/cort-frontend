import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './shared.css';


export const Card = ({ user_id, nickname, avatar, age, attribute_description, attribute_price, attribute_servicio }) => {

    const [visible, setVisible] = useState(false);

    const handleFocus = (e) => {
        setVisible(true);
    }

    const handleLeave = () => {
        setVisible(false);
    }
    return (
        <>
            <div className="card mb-3" onMouseEnter={handleFocus} onMouseLeave={handleLeave}>

                <div className="avatar" style={{ 'backgroundImage': `url(images/${avatar})` }}></div>
                {visible &&
                    <div className="card infoEscort">
                        <div className="card-body">
                            <h5 className="card-title">Servicios</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{attribute_servicio}</h6>
                            <h5 className="card-title">Valor</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{attribute_price}</h6>
                            <p className="card-text">{attribute_description}</p>
                            <p className='text-end'>
                                <Link to={`Perfil/${user_id}`} className="card-link">Ver Perfíl</Link>
                            </p>
                        </div>
                    </div>
                }
                <div className="card-footer text-muted text-center">
                    {nickname} <br />
                    {age} añitos
                </div>
            </div>
        </>
    )
}
