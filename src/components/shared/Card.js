import React from 'react'
import './shared.css';

export const Card = ({ nickname, avatar, age, description }) => {
    return (
        <>
            <div className="card mb-3">
                <h3 className="card-header">{nickname}</h3>

                <div className="avatar" style={{ 'backgroundImage': `url(${avatar})` }}></div>

                <div className="card-body">
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
            </div>
        </>
    )
}
