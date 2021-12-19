import React from 'react'

export const Card = ({ nickname, age, description }) => {
    return (
        <>
            <div className="card mb-3">
                <h3 className="card-header">{nickname}</h3>

                <img src="https://www.elsiglodedurango.com.mx/m/i/2018/03/677714.jpeg" alt="" />

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
