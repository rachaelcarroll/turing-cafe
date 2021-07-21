import React, { Component } from 'react';
import './App.css';
import { getReservations, addReservation } from '../../apiCalls'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'

class App extends Component {
  constructor () {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    this.updateData()
  }
  
  updateData = () => {
    getReservations()
    .then(reservations => this.setState({ reservations: reservations }))
    .catch(() => this.setState({ error: 'Oops! Something went wrong, please try again.'}))
  }

  addReso = ({id, name, date, time, number}) => {
    console.log({id, name, date, time, number})
    addReservation(id, name, date, time, number)  
    this.updateData()
  }
 
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form 
            addReso= {this.addReso}
          />
        </div>
        <div className='resy-container'>
          <Reservations reservations= {this.state.reservations}/>
        </div>
      </div>
    )
  }
}


export default App;
