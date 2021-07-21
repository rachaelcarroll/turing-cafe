export const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
  }

export const addReservation = (reservation) => {
  fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify({
        "name": reservation.name,
        "date": reservation.date,
        "time": reservation.time,
        "number": reservation.number,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
}