export const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
  }

export const addReservation = (id, name, date, time, number) => {
  fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify({ 
        id: id, 
        name: name, 
        time: time, 
        date: date, 
        number: number}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
}