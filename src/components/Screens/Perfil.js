import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Perfil = () => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }

    }, []);

    return (
        <div>
            <h3>Perfil</h3>
        </div>
    )
}
