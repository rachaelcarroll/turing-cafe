import React from 'react'
import './Reservations.css'
import Card from '../Card/Card'

const Reservations = ({reservations}) => {
    
    const allReservations = reservations.map(reso => {
        return (
            <Card
                id={reso.id}
                key={reso.key}
                name={reso.name}
                date={reso.date}
                time={reso.time}
                number={reso.number}
            />
        )
    })

    return (
        <section className='resoContainer'>
            {allReservations}
        </section>
    )
}

export default Reservations