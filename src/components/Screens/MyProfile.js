import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const MyProfile = () => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }

    }, []);

    return <>
        <div className='container p-4'>
            <img src="https://tork.news/__export/1641994605116/sites/tork/img/2022/01/09/mia.jpg_264374020.jpg" className="img-thumbnail" alt="..." />
        </div>
    </>;
};
