import React from 'react'
import './Card.css'

function Card({ src, title, description }) {
    return (
        <div className='card'>
            <img src={src} alt='' />
            <div className='card__info'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
