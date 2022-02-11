import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAvatar } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { AVATAR_USER } from '../../constants/common';

export const MyProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const changeAvatar = useSelector(state => state.changeAvatar);
    const { loading, data, error } = changeAvatar;

    // const userAvatar = userInfo.avatar == AVATAR_USER ? `./uploads/${AVATAR_USER}` : `./uploads/${userInfo.user_id}/${userInfo.avatar}`;
    let userAvatar;

    if (userInfo.avatar == AVATAR_USER) {
        userAvatar = `./uploads/${AVATAR_USER}`;
    } else {
        userAvatar = `./uploads/${userInfo.user_id}/${userInfo.avatar}`;
    }

    const [avatar, setAvatar] = useState(userAvatar);

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            console.log(userInfo);
            console.log(AVATAR_USER);
        }
    }, []);

    const handleChangeImg = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
                const formData = new FormData();
                formData.append('file', e.target.files[0]);
                formData.append('userId', userInfo.user_id)
                dispatch(changeUserAvatar(formData));
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    return <>
        <div className='container p-4'>
            <h3>Tu Perfíl</h3>
            <div className="wrapImage">
                <img src={avatar} className="img-thumbnail imgAvatar" />
                <input type="file" name="image-upload" accept="image/*" onChange={handleChangeImg} />
            </div>

        </div>
    </>;
};
