import React from 'react'
import './Card.css'

const Card = ({id, name, date, time, number}) => {
    
    return (
        <article className='resoCard'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
        </article>
    )
}

export default Card;