import React, { useState } from 'react'
import './shared.css';

export const Card = ({ nickname, avatar, age, description }) => {

    const [visible, setVisible] = useState(false);

    const handleFocus = () => {
        console.log("focus image");
    }

    // const handle
    return (
        <>
            <div className="card mb-3" onMouseEnter={handleFocus}>
                <h3 className="card-header">{nickname}</h3>

                <div className="avatar" style={{ 'backgroundImage': `url(images/${avatar})` }}></div>
                {visible &&
                    <div className='infoEscort'>
                        info escort
                    </div>
                }

                <div className="card-body">
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
                </div>
                <div className="card-footer text-muted">{age} añitos</div>
            </div>
        </>
    )
}
